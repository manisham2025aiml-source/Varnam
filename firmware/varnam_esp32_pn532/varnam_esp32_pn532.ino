/**
 * ============================================================================
 * VARNAM HANDICRAFT MARKETPLACE — ESP32 + PN532 NFC AUTHENTICATION STATION
 * ============================================================================
 * 
 * Hardware Requirements:
 * 1. ESP32 DevKit (30-pin or 38-pin)
 * 2. PN532 NFC Module (configured in I2C mode: DIP switch CH1=OFF, CH2=ON)
 * 3. 0.96-inch SSD1306 I2C OLED Display (128x64)
 * 4. NTAG213 NFC tags / stickers (programmed with Product ID or URL)
 * 
 * I2C Bus Pinout (Shared Bus):
 * - ESP32 3.3V  -> PN532 VCC & OLED VCC
 * - ESP32 GND   -> PN532 GND & OLED GND
 * - ESP32 GPIO 21 (SDA) -> PN532 SDA & OLED SDA
 * - ESP32 GPIO 22 (SCL) -> PN532 SCL & OLED SCL
 * 
 * Libraries Required in Arduino IDE:
 * - Adafruit PN532 (by Adafruit)
 * - Adafruit SSD1306 (by Adafruit)
 * - Adafruit GFX Library (by Adafruit)
 * - ArduinoJson (by Benoit Blanchon, v6.x or v7.x)
 * ============================================================================
 */

#include <Wire.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <Adafruit_PN532.h>

// ============================================================================
// NETWORK & BACKEND CONFIGURATION
// ============================================================================
// Replace with your local Wi-Fi credentials
const char* WIFI_SSID     = "YOUR_WIFI_SSID";
const char* WIFI_PASSWORD = "YOUR_WIFI_PASSWORD";

// Replace with your computer's LAN IP address running the Varnam server (port 5000)
// Example: "http://192.168.1.105:5000"
const char* BACKEND_BASE_URL = "http://192.168.1.105:5000";

// Hardware station identifier for scan telemetry
const char* STATION_ID = "Station-01 (ESP32 Retail Node)";

// ============================================================================
// HARDWARE PERIPHERALS CONFIGURATION
// ============================================================================
// OLED Display: 128x64 pixels, standard address 0x3C
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET    -1
#define OLED_I2C_ADDR 0x3C

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

// PN532 NFC Module: Address 0x24 in I2C mode
#define PN532_IRQ   (2)   // Optional hardware IRQ pin (or leave disconnected)
#define PN532_RESET (3)   // Optional hardware reset pin (or leave disconnected)

Adafruit_PN532 nfc(PN532_IRQ, PN532_RESET);

// Status indicator LED (Built-in LED on most ESP32 boards is GPIO 2)
#define LED_PIN 2

// Timestamp trackers
unsigned long lastScanTime = 0;
const unsigned long SCAN_COOLDOWN_MS = 3000; // Prevent duplicate rapid taps

// ============================================================================
// OLED DISPLAY HELPER FUNCTIONS
// ============================================================================

void showBootScreen(const char* statusMessage) {
  display.clearDisplay();
  display.setTextColor(SSD1306_WHITE);
  display.setTextSize(1);
  
  display.setCursor(0, 2);
  display.println(F("*** VARNAM IoT ***"));
  display.println(F("Authenticity Node"));
  display.println(F("---------------------"));
  display.println(F("Status:"));
  display.println(statusMessage);
  display.display();
}

void showReadyScreen() {
  display.clearDisplay();
  display.setTextColor(SSD1306_WHITE);
  
  // Header banner
  display.setTextSize(1);
  display.setCursor(16, 2);
  display.println(F("VARNAM IoT HUB"));
  display.drawLine(0, 12, 127, 12, SSD1306_WHITE);
  
  // Instructions
  display.setCursor(14, 24);
  display.setTextSize(1);
  display.println(F("[ TAP PRODUCT NFC ]"));
  
  display.setCursor(20, 38);
  display.println(F("NTAG213 Reader"));
  
  // Status Footer
  display.setCursor(0, 54);
  display.print(F("WiFi: OK  IP:"));
  display.println(WiFi.localIP().toString().substring(WiFi.localIP().toString().lastIndexOf('.') + 1));
  display.display();
}

void showReadingScreen(const char* uidStr) {
  display.clearDisplay();
  display.setTextColor(SSD1306_WHITE);
  display.setTextSize(1);
  
  display.setCursor(0, 2);
  display.println(F(">> NFC DETECTED <<"));
  display.drawLine(0, 12, 127, 12, SSD1306_WHITE);
  
  display.setCursor(0, 18);
  display.print(F("UID: "));
  display.println(uidStr);
  
  display.setCursor(0, 32);
  display.println(F("Reading NTAG213..."));
  display.setCursor(0, 46);
  display.println(F("Verifying with API..."));
  display.display();
}

void showVerifiedScreen(const char* prodId, const char* name, const char* artisan, const char* giTag) {
  display.clearDisplay();
  display.setTextColor(SSD1306_WHITE);
  
  // Top line: Authenticity Badge
  display.setTextSize(1);
  display.setCursor(0, 0);
  display.print(F("[*] VARNAM AUTH "));
  display.println(prodId);
  display.drawLine(0, 10, 127, 10, SSD1306_WHITE);
  
  // Product Name
  display.setCursor(0, 15);
  display.setTextSize(1);
  display.println(name);
  
  // Artisan Name
  display.setCursor(0, 29);
  display.print(F("By: "));
  display.println(artisan);
  
  // GI Tag / Status
  display.setCursor(0, 43);
  display.print(F("GI: "));
  display.println(giTag);
  
  // Bottom footer
  display.setCursor(0, 56);
  display.println(F("GENUINE CRAFT SEAL"));
  display.display();
}

void showErrorScreen(const char* tagId, const char* reason) {
  display.clearDisplay();
  display.setTextColor(SSD1306_WHITE);
  display.setTextSize(1);
  
  display.setCursor(0, 0);
  display.println(F("[X] UNVERIFIED TAG"));
  display.drawLine(0, 10, 127, 10, SSD1306_WHITE);
  
  display.setCursor(0, 16);
  display.print(F("Tag: "));
  display.println(tagId);
  
  display.setCursor(0, 30);
  display.println(reason);
  
  display.setCursor(0, 48);
  display.println(F("DO NOT DISTRIBUTE"));
  display.display();
}

// ============================================================================
// TAG ID PARSING & HTTP API VERIFICATION
// ============================================================================

/**
 * Extracts clean Product ID (e.g., "VN-0001") from either:
 * 1. Plain text payload: "VN-0001"
 * 2. URL string: "https://varnam.crafts/product/VN-0001"
 */
String extractProductId(String rawPayload) {
  rawPayload.trim();
  int lastSlash = rawPayload.lastIndexOf('/');
  if (lastSlash != -1 && lastSlash < rawPayload.length() - 1) {
    return rawPayload.substring(lastSlash + 1);
  }
  return rawPayload;
}

/**
 * Sends HTTP GET request to /api/products/:productId
 * Returns true if verified authentic, false otherwise.
 */
bool verifyProductOnServer(String productId, String tagUid) {
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println(F("[ERR] Wi-Fi disconnected!"));
    showErrorScreen(productId.c_str(), "Wi-Fi Disconnected");
    return false;
  }

  HTTPClient http;
  String url = String(BACKEND_BASE_URL) + "/api/products/" + productId;
  Serial.print(F("[HTTP] GET: "));
  Serial.println(url);

  http.begin(url);
  http.setTimeout(4000); // 4 second timeout

  int httpCode = http.GET();
  if (httpCode == HTTP_CODE_OK) {
    String payload = http.getString();
    Serial.println(F("[HTTP] Response received:"));
    Serial.println(payload);

    DynamicJsonDocument doc(2048);
    DeserializationError error = deserializeJson(doc, payload);

    if (error) {
      Serial.print(F("[JSON] Parse failed: "));
      Serial.println(error.f_str());
      showErrorScreen(productId.c_str(), "JSON Parse Error");
      http.end();
      return false;
    }

    const char* id = doc["productId"] | productId.c_str();
    const char* name = doc["name"] | "Varnam Craft";
    const char* artisan = doc["artisan"] | "Heritage Artisan";
    const char* giTag = doc["giTag"] | "Verified GI";
    const char* status = doc["status"] | "unlinked";
    const char* nfcStatus = doc["nfcStatus"] | "pending";

    // Check authenticity status
    if (String(status) == "verified" || String(nfcStatus) == "linked") {
      // Light up LED for success
      digitalWrite(LED_PIN, HIGH);
      showVerifiedScreen(id, name, artisan, giTag);
      
      // Log scan event asynchronously to backend
      logScanTelemetry(productId, tagUid);
      
      http.end();
      return true;
    } else {
      showErrorScreen(id, "Tag Unlinked / Unverified");
      http.end();
      return false;
    }

  } else if (httpCode == HTTP_CODE_NOT_FOUND) {
    Serial.println(F("[HTTP] 404 Not Found"));
    showErrorScreen(productId.c_str(), "Tag Not In Registry");
  } else {
    Serial.print(F("[HTTP] Request Error code: "));
    Serial.println(httpCode);
    showErrorScreen(productId.c_str(), "Server Comm Error");
  }

  http.end();
  return false;
}

/**
 * Sends HTTP POST request to /api/nfc/scan to log scan history
 */
void logScanTelemetry(String productId, String tagUid) {
  if (WiFi.status() != WL_CONNECTED) return;

  HTTPClient http;
  String url = String(BACKEND_BASE_URL) + "/api/nfc/scan";

  http.begin(url);
  http.addHeader("Content-Type", "application/json");

  StaticJsonDocument<256> doc;
  doc["productId"] = productId;
  doc["nfcTagId"] = "NTAG213-" + tagUid;
  doc["deviceLocation"] = STATION_ID;

  String requestBody;
  serializeJson(doc, requestBody);

  int httpCode = http.POST(requestBody);
  Serial.print(F("[TELEMETRY] POST /api/nfc/scan code: "));
  Serial.println(httpCode);

  http.end();
}

// ============================================================================
// SETUP
// ============================================================================

void setup() {
  Serial.begin(115200);
  delay(500);
  Serial.println();
  Serial.println(F("==============================================="));
  Serial.println(F("  VARNAM IoT AUTHENTICATION STATION INITIALIZING"));
  Serial.println(F("==============================================="));

  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);

  // Initialize I2C Bus on GPIO 21 (SDA) and GPIO 22 (SCL)
  Wire.begin(21, 22);

  // 1. Initialize 0.96" OLED
  if (!display.begin(SSD1306_SWITCHCAPVCC, OLED_I2C_ADDR)) {
    Serial.println(F("[ERR] SSD1306 OLED allocation failed at 0x3C!"));
    while (1) { delay(100); }
  }
  display.clearDisplay();
  showBootScreen("Starting I2C bus...");
  delay(800);

  // 2. Initialize PN532 NFC Module
  showBootScreen("Configuring PN532 (0x24)...");
  nfc.begin();

  uint32_t versiondata = nfc.getFirmwareVersion();
  if (!versiondata) {
    Serial.println(F("[ERR] Didn't find PN532 board at 0x24!"));
    showBootScreen("PN532 Not Found!\nCheck DIP 0-1");
    // Retry loop
    while (!versiondata) {
      delay(1000);
      versiondata = nfc.getFirmwareVersion();
    }
  }

  Serial.print(F("[PN532] Found chip PN5"));
  Serial.println((versiondata >> 24) & 0xFF, HEX);
  Serial.print(F("[PN532] Firmware ver. "));
  Serial.print((versiondata >> 16) & 0xFF, DEC);
  Serial.print('.');
  Serial.println((versiondata >> 8) & 0xFF, DEC);

  // Configure board to read RFID tags
  nfc.SAMConfig();

  // 3. Connect to Wi-Fi
  showBootScreen("Connecting to Wi-Fi...");
  Serial.print(F("[WiFi] Connecting to: "));
  Serial.println(WIFI_SSID);

  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  int wifiAttempts = 0;
  while (WiFi.status() != WL_CONNECTED && wifiAttempts < 20) {
    delay(500);
    Serial.print('.');
    wifiAttempts++;
  }

  if (WiFi.status() == WL_CONNECTED) {
    Serial.println();
    Serial.print(F("[WiFi] Connected! IP address: "));
    Serial.println(WiFi.localIP());
    showBootScreen("Wi-Fi Connected!\nReady.");
    delay(1000);
  } else {
    Serial.println(F("\n[WiFi] Failed to connect, continuing in offline mode..."));
    showBootScreen("Wi-Fi Error\nOffline Mode");
    delay(1500);
  }

  // Ready Screen
  showReadyScreen();
  Serial.println(F("[READY] Waiting for ISO14443A NFC Tag..."));
}

// ============================================================================
// MAIN LOOP
// ============================================================================

void loop() {
  uint8_t success;
  uint8_t uid[] = { 0, 0, 0, 0, 0, 0, 0 }; // Buffer to store the returned UID
  uint8_t uidLength;                       // Length of the UID (4 or 7 bytes)

  // Non-blocking poll for ISO14443A cards (NTAG213 are 7-byte UIDs)
  success = nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A, uid, &uidLength, 50);

  if (success && (millis() - lastScanTime > SCAN_COOLDOWN_MS)) {
    lastScanTime = millis();

    // Format UID hex string
    String uidString = "";
    for (uint8_t i = 0; i < uidLength; i++) {
      if (uid[i] < 0x10) uidString += "0";
      uidString += String(uid[i], HEX);
      if (i < uidLength - 1) uidString += ":";
    }
    uidString.toUpperCase();

    Serial.println(F("---------------------------------------------"));
    Serial.print(F("[NFC] Card Detected! UID: "));
    Serial.println(uidString);

    showReadingScreen(uidString.c_str());

    // Read NTAG213 User Memory (Pages 4 to 15 contain user NDEF data)
    String tagData = "";
    uint8_t data[32];

    // Read Page 4 (First 4 bytes of user data on NTAG213)
    if (nfc.mifareclassic_ReadDataBlock(4, data)) {
      char textBuffer[33];
      memset(textBuffer, 0, sizeof(textBuffer));
      memcpy(textBuffer, data, 16);
      tagData = String(textBuffer);
    }

    // If tag memory reading returns empty or raw, fallback to test pattern
    if (tagData.length() < 3 || !tagData.startsWith("VN-")) {
      // In practice, write the exact Product ID to NTAG213 Page 4 using NFC Tools app.
      // Default to VN-0001 for demonstration if raw unformatted tag is presented.
      Serial.println(F("[NFC] Plain tag or test read, using default demo ID: VN-0001"));
      tagData = "VN-0001";
    }

    String cleanProductId = extractProductId(tagData);
    Serial.print(F("[NFC] Target Product ID: "));
    Serial.println(cleanProductId);

    // Verify against Varnam Backend API
    bool verified = verifyProductOnServer(cleanProductId, uidString);

    // Hold display result for 4 seconds so user can read it
    delay(4000);
    digitalWrite(LED_PIN, LOW);

    // Return to Ready screen
    showReadyScreen();
    Serial.println(F("[READY] Waiting for next NFC tap..."));
  }

  // Periodic Wi-Fi reconnection check
  if (WiFi.status() != WL_CONNECTED && millis() % 15000 < 50) {
    Serial.println(F("[WiFi] Reconnecting..."));
    WiFi.reconnect();
  }

  delay(50);
}
