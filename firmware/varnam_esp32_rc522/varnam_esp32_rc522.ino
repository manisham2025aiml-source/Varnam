/*
 * =================================================================================
 * VARNAM IoT Platform — Hardware Firmware: Phase 2
 * ESP32 + MFRC522 (RFID SPI) + SSD1306 OLED (I2C) + Wi-Fi HTTP Client
 * =================================================================================
 *
 * This firmware reads RFID cards and keychains (Mifare 1K / NTAG / Classic),
 * sends the UID to the VARNAM Backend API over Wi-Fi, and displays the
 * verified artisan/user identity in real time on the 0.96" OLED display.
 *
 * ---------------------------------------------------------------------------------
 * HARDWARE CONNECTIONS (ESP32 DevKit):
 *
 * 1. RC522 RFID Reader (SPI Bus):
 *    - VCC    -> ESP32 3.3V (via breadboard power rail)
 *    - GND    -> ESP32 GND  (via breadboard ground rail)
 *    - RST    -> ESP32 GPIO 4
 *    - SDA/SS -> ESP32 GPIO 5
 *    - SCK    -> ESP32 GPIO 18
 *    - MOSI   -> ESP32 GPIO 23
 *    - MISO   -> ESP32 GPIO 19
 *    - IRQ    -> Not Connected
 *
 * 2. 0.96" SSD1306 OLED Display (I2C Bus):
 *    - VCC    -> ESP32 3.3V (via breadboard power rail)
 *    - GND    -> ESP32 GND  (via breadboard ground rail)
 *    - SDA    -> ESP32 GPIO 21
 *    - SCL    -> ESP32 GPIO 22
 * ---------------------------------------------------------------------------------
 */

#include <WiFi.h>
#include <HTTPClient.h>
#include <SPI.h>
#include <MFRC522.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <ArduinoJson.h>

// ==========================================
// 1. WI-FI & BACKEND CONFIGURATION
// ==========================================
// Replace with your local Wi-Fi SSID and Password:
const char* WIFI_SSID     = "Your_WiFi_Name";
const char* WIFI_PASSWORD = "Your_WiFi_Password";

// Replace with your computer's local IP address (find using 'ipconfig' on Windows)
// e.g. "http://192.168.1.10:5000"
const char* BACKEND_BASE_URL = "http://192.168.1.105:5000";

// Device Identifier for VARNAM hardware station telemetry
const char* DEVICE_ID = "VARNAM-ESP32-RC522-01";

// ==========================================
// 2. PIN DEFINITIONS
// ==========================================
#define RC522_SS_PIN   5
#define RC522_RST_PIN  4

#define SCREEN_WIDTH   128
#define SCREEN_HEIGHT  64
#define OLED_RESET     -1
#define OLED_I2C_ADDR  0x3C

// ==========================================
// 3. HARDWARE OBJECT INSTANCES
// ==========================================
MFRC522 mfrc522(RC522_SS_PIN, RC522_RST_PIN);
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

// Debounce helper to prevent multiple triggers for the same tap
String lastScannedUID = "";
unsigned long lastScanMillis = 0;
const unsigned long DEBOUNCE_TIME = 2500; // 2.5 seconds

// ==========================================
// 4. OLED HELPER FUNCTIONS
// ==========================================
void showOledBootScreen() {
  display.clearDisplay();
  display.setTextColor(SSD1306_WHITE);
  display.setTextSize(1);
  display.setCursor(18, 5);
  display.println(F("*** VARNAM ***"));
  display.drawFastHLine(0, 16, 128, SSD1306_WHITE);
  
  display.setCursor(10, 24);
  display.println(F("Authenticity Hub"));
  display.setCursor(10, 38);
  display.println(F("Connecting WiFi..."));
  display.display();
}

void showOledReadyScreen() {
  display.clearDisplay();
  display.setTextColor(SSD1306_WHITE);
  display.setTextSize(1);
  display.setCursor(14, 4);
  display.println(F("VARNAM RFID HUB"));
  display.drawFastHLine(0, 15, 128, SSD1306_WHITE);
  
  display.setCursor(12, 24);
  display.println(F("SCAN YOUR CARD"));
  display.setCursor(8, 38);
  display.println(F("Card / Keychain"));
  
  display.drawFastHLine(0, 50, 128, SSD1306_WHITE);
  display.setCursor(4, 54);
  display.print(F("WiFi: OK  IP: ."));
  // Print last byte of IP for convenient verification
  display.println(WiFi.localIP()[3]);
  display.display();
}

void showOledScanningScreen(String uid) {
  display.clearDisplay();
  display.setTextColor(SSD1306_WHITE);
  display.setTextSize(1);
  display.setCursor(18, 4);
  display.println(F("CARD DETECTED"));
  display.drawFastHLine(0, 15, 128, SSD1306_WHITE);
  
  display.setTextSize(1);
  display.setCursor(14, 25);
  display.println(uid);
  
  display.setCursor(10, 42);
  display.println(F("Authenticating..."));
  display.display();
}

void showOledResultScreen(bool verified, String user, String line2, String line3) {
  display.clearDisplay();
  display.setTextColor(SSD1306_WHITE);
  
  // Header
  display.setTextSize(1);
  display.setCursor(20, 2);
  display.println(F("VARNAM SYSTEM"));
  display.drawFastHLine(0, 13, 128, SSD1306_WHITE);
  
  if (verified) {
    // Verified user / craft banner
    display.setCursor(10, 18);
    display.print(F("WELCOME "));
    display.println(user);
    
    display.setCursor(6, 32);
    display.println(line2.length() > 0 ? line2 : F("ROLE: ARTISAN"));
    
    display.drawRoundRect(8, 46, 112, 16, 3, SSD1306_WHITE);
    display.setCursor(18, 50);
    display.println(F("[ VERIFIED OK ]"));
  } else {
    // Unregistered / Unknown card
    display.setCursor(16, 20);
    display.println(F("UNKNOWN RFID"));
    display.setCursor(10, 34);
    display.println(line2);
    
    display.drawRoundRect(10, 48, 108, 15, 3, SSD1306_WHITE);
    display.setCursor(18, 52);
    display.println(F("NOT REGISTERED"));
  }
  display.display();
}

// ==========================================
// 5. SETUP
// ==========================================
void setup() {
  Serial.begin(115200);
  delay(500);
  Serial.println(F("\n[VARNAM] Initializing Hardware System..."));

  // 1. Initialize OLED (I2C)
  Wire.begin(21, 22); // SDA=21, SCL=22
  if (!display.begin(SSD1306_SWITCHCAPVCC, OLED_I2C_ADDR)) {
    Serial.println(F("[ERROR] SSD1306 OLED initialization failed!"));
    for (;;); // Halt
  }
  showOledBootScreen();

  // 2. Connect to Wi-Fi
  Serial.print(F("[WiFi] Connecting to "));
  Serial.println(WIFI_SSID);
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  
  int wifiRetry = 0;
  while (WiFi.status() != WL_CONNECTED && wifiRetry < 25) {
    delay(500);
    Serial.print(F("."));
    wifiRetry++;
  }

  if (WiFi.status() == WL_CONNECTED) {
    Serial.println(F("\n[WiFi] Connected successfully!"));
    Serial.print(F("[WiFi] ESP32 IP Address: "));
    Serial.println(WiFi.localIP());
  } else {
    Serial.println(F("\n[WiFi] Could not connect. Continuing in offline preview mode."));
  }

  // 3. Initialize RC522 (SPI)
  SPI.begin(); // Standard ESP32 SPI: SCK=18, MISO=19, MOSI=23, SS=5
  mfrc522.PCD_Init();
  delay(100);
  
  byte version = mfrc522.PCD_ReadRegister(mfrc522.VersionReg);
  Serial.print(F("[RC522] Firmware Version: 0x"));
  Serial.println(version, HEX);
  if (version == 0x00 || version == 0xFF) {
    Serial.println(F("[WARNING] RC522 communication failed! Check wiring on pins 5, 18, 19, 23, 4."));
  } else {
    Serial.println(F("[RC522] Reader ready and waiting for cards/keychains."));
  }

  showOledReadyScreen();
}

// ==========================================
// 6. MAIN LOOP
// ==========================================
void loop() {
  // Check if a new RFID card is presented
  if (!mfrc522.PICC_IsNewCardPresent()) {
    return;
  }

  // Select card and read UID
  if (!mfrc522.PICC_ReadCardSerial()) {
    return;
  }

  // Format the UID bytes as uppercase hex string with spaces: "61 13 EE 17"
  String uidFormatted = "";
  for (byte i = 0; i < mfrc522.uid.size; i++) {
    if (mfrc522.uid.uidByte[i] < 0x10) {
      uidFormatted += "0";
    }
    uidFormatted += String(mfrc522.uid.uidByte[i], HEX);
    if (i < mfrc522.uid.size - 1) {
      uidFormatted += " ";
    }
  }
  uidFormatted.toUpperCase();

  // Debounce check: ignore re-reads of the same tag within 2.5 seconds
  if (uidFormatted == lastScannedUID && (millis() - lastScanMillis < DEBOUNCE_TIME)) {
    mfrc522.PICC_HaltA();
    mfrc522.PCD_StopCrypto1();
    return;
  }

  lastScannedUID = uidFormatted;
  lastScanMillis = millis();

  Serial.println(F("\n-------------------------------------------"));
  Serial.print(F("[RFID] Card Detected! UID: "));
  Serial.println(uidFormatted);

  // 1. Immediately notify physical user via OLED
  showOledScanningScreen(uidFormatted);

  // 2. Transmit UID to VARNAM Backend API
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    String endpointUrl = String(BACKEND_BASE_URL) + "/api/rfid/scan";
    
    http.begin(endpointUrl);
    http.addHeader("Content-Type", "application/json");

    // Prepare JSON payload: {"uid": "61 13 EE 17", "device_id": "VARNAM-ESP32-RC522-01"}
    StaticJsonDocument<256> reqDoc;
    reqDoc["uid"] = uidFormatted;
    reqDoc["device_id"] = DEVICE_ID;
    
    String requestBody;
    serializeJson(reqDoc, requestBody);

    Serial.print(F("[HTTP] Sending POST to: "));
    Serial.println(endpointUrl);
    int httpResponseCode = http.POST(requestBody);

    if (httpResponseCode > 0) {
      String responseStr = http.getString();
      Serial.print(F("[HTTP] Response code: "));
      Serial.println(httpResponseCode);
      Serial.println(responseStr);

      StaticJsonDocument<512> resDoc;
      DeserializationError err = deserializeJson(resDoc, responseStr);

      if (!err) {
        bool verified = resDoc["verified"] | false;
        String userName = resDoc["user"] | "Unknown";
        String oledLine2 = resDoc["oled"]["line2"] | (verified ? "WELCOME" : "UNKNOWN CARD");
        String oledLine3 = resDoc["oled"]["line3"] | uidFormatted;

        showOledResultScreen(verified, userName, oledLine2, oledLine3);
      } else {
        Serial.println(F("[JSON] Parse error"));
        showOledResultScreen(false, "Error", "JSON Parse Err", uidFormatted);
      }
    } else {
      Serial.print(F("[HTTP] Failed! Error code: "));
      Serial.println(httpResponseCode);
      showOledResultScreen(false, "Offline", "Server Offline", uidFormatted);
    }
    http.end();
  } else {
    // Offline simulation display
    Serial.println(F("[WiFi] Disconnected. Showing local scan on OLED."));
    if (uidFormatted.indexOf("61") >= 0 || uidFormatted.indexOf("61 13 EE 17") >= 0) {
      showOledResultScreen(true, "MANISHA", "ROLE: ARTISAN", "[VERIFIED OK]");
    } else {
      showOledResultScreen(false, "UNKNOWN", uidFormatted, "NOT REGISTERED");
    }
  }

  // 3. Keep verification result on screen for 3 seconds, then return to ready
  delay(3000);
  showOledReadyScreen();

  // Halt PICC to stop reading until next swipe
  mfrc522.PICC_HaltA();
  mfrc522.PCD_StopCrypto1();
}
