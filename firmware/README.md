# Varnam IoT Hardware Integration Guide
## ESP32 + PN532 NFC Reader + 0.96" I2C OLED Display

This hardware setup integrates physical handicraft authentication into the **Varnam Handicraft Marketplace**. Each physical craft is embedded with an **NTAG213 NFC sticker**, which an **ESP32 DevKit** reads via a **PN532 NFC Module** and authenticates against the Varnam REST API over Wi-Fi, displaying the certified provenance on an **OLED screen**.

---

## 1. Hardware Components Bill of Materials (BOM)

| Component | Quantity | Description / Model | Approx Cost (INR) |
| :--- | :---: | :--- | :--- |
| **ESP32 DevKit** | 1 | ESP-WROOM-32 (30-pin or 38-pin NodeMCU) | ₹350 - ₹450 |
| **PN532 NFC Module** | 1 | Red or Blue PCB with DIP switches & antenna | ₹400 - ₹550 |
| **0.96" I2C OLED** | 1 | SSD1306 128x64 monochrome (White or Blue) | ₹180 - ₹250 |
| **NTAG213 NFC Tags** | 5-10 | 13.56 MHz ISO14443A round adhesive stickers | ₹15 - ₹25 / tag |
| **Breadboard & Wires** | 1 set | Half-size breadboard + 8 Male-to-Female jumpers | ₹100 |

*Total Prototype Cost: Under ₹1,200 INR.*

---

## 2. Shared I2C Circuit Pinout

Both the **PN532** (address `0x24`) and the **SSD1306 OLED** (address `0x3C`) communicate over the same standard ESP32 I2C hardware bus without conflict.

```
       +---------------------------------------------+
       |                 ESP32 DevKit                |
       |                                             |
       |   3V3   GND     GPIO 21 (SDA)   GPIO 22 (SCL)|
       +----+-----+------------+---------------+-----+
            |     |            |               |
   +--------+     |            |               |
   |   +----------+            |               |
   |   |          |            |               |
+--+---+----+     |            |               |
| 0.96" OLED|     |            |               |
|  VCC  GND |     |            |               |
|  SDA  SCL +-----+------------+               |
+-----------+     |            |               |
                  |            |               |
+-----------+     |            |               |
| PN532 NFC |     |            |               |
|  VCC  GND +-----+            |               |
|  SDA  SCL +------------------+---------------+
+-----------+
```

### Complete Pinout Connection Table

| ESP32 Pin | PN532 NFC Pin | 0.96" OLED Pin | Function / Wire Color |
| :--- | :--- | :--- | :--- |
| **3V3 (3.3V)** | `VCC` | `VCC` | Power (3.3V Logic) |
| **GND** | `GND` | `GND` | Common Ground |
| **GPIO 21** | `SDA` | `SDA` | I2C Data Line |
| **GPIO 22** | `SCL` | `SCL` | I2C Clock Line |
| *Optional (GPIO 2)* | `IRQ` *(optional)* | — | Built-in Activity LED |

> **IMPORTANT**: Power the PN532 and OLED from the ESP32 **3.3V pin**, NOT 5V/VIN. The ESP32 I2C GPIO pins are 3.3V tolerant.

---

## 3. PN532 DIP Switch Configuration (CRITICAL)

The PN532 board supports 3 modes: HSU (UART), SPI, and I2C. Configure the two small onboard DIP switches to **I2C Mode**:

| Switch 1 (CH1) | Switch 2 (CH2) | Communication Mode |
| :---: | :---: | :--- |
| **OFF (0)** | **ON (1)** | **I2C Mode (Required)** |
| ON (1) | OFF (0) | HSU (High Speed UART) |
| OFF (0) | OFF (0) | SPI Mode |

*Ensure switches are set before applying power.*

---

## 4. Arduino IDE Setup Guide

### Step 1: Install ESP32 Board Support
1. In Arduino IDE, go to **File → Preferences**.
2. Add this URL to *Additional Boards Manager URLs*:
   ```
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```
3. Go to **Tools → Board → Boards Manager**, search for `esp32` by Espressif Systems, and click **Install**.

### Step 2: Install Required Libraries
Open **Tools → Manage Libraries...** and install:
- **Adafruit PN532** (by Adafruit)
- **Adafruit SSD1306** (by Adafruit)
- **Adafruit GFX Library** (by Adafruit)
- **ArduinoJson** (by Benoit Blanchon, v6.x or v7.x)

### Step 3: Configure Code
Open `firmware/varnam_esp32_pn532/varnam_esp32_pn532.ino`:
1. Enter your local Wi-Fi name and password:
   ```cpp
   const char* WIFI_SSID     = "Your_Home_WiFi";
   const char* WIFI_PASSWORD = "Your_WiFi_Password";
   ```
2. Find your computer's local IP address (e.g., run `ipconfig` on Windows or `ifconfig` on Mac/Linux):
   ```cpp
   const char* BACKEND_BASE_URL = "http://192.168.1.105:5000";
   ```
3. Select Board: **Tools → Board → ESP32 Arduino → ESP32 Dev Module**.
4. Select Port: **Tools → Port → COMx** (e.g. COM3 / COM4).
5. Click **Upload**.

---

## 5. Programming NTAG213 NFC Stickers

You can program NTAG213 tags in 2 easy ways:

### Method A: Using Free Smartphone App "NFC Tools" (Recommended)
1. Download **NFC Tools** (available free on iOS and Android).
2. Tap **Write → Add a record → Text** (or **Custom URL / URI**).
3. Enter either:
   - Plain text Product ID: `VN-0001`
   - Or full web URL: `https://varnam.crafts/product/VN-0001`
4. Tap **Write / 18 Bytes** and hold the phone against the NTAG213 sticker.
5. The tag is now paired with that handicraft!

### Method B: Pre-registered Test Tags in Varnam Database
The Varnam database comes pre-seeded with 28 handicraft identities:
- `VN-0001`: Bamboo Fruit Basket (Verified)
- `VN-0002`: Nataraja Bronze Sculpture (Verified)
- `VN-0007`: Mysore Silk Saree (Verified)
- `VN-0026`: Terracotta Horse (Unlinked / Unverified)
- `VN-9999`: Counterfeit / Unregistered ID (Rejection Test)

---

## 6. Verification Flow & OLED Display States

1. **Boot**: `*** VARNAM IoT *** Initializing I2C & WiFi...`
2. **Ready**:
   ```
   +--------------------+
   |   VARNAM IoT HUB   |
   | ------------------ |
   | [ TAP PRODUCT NFC ]|
   |   NTAG213 Reader   |
   | WiFi: OK  IP: .45  |
   +--------------------+
   ```
3. **NFC Detected**:
   ```
   +--------------------+
   | >> NFC DETECTED << |
   | UID: 04:A2:8B:19   |
   | Reading NTAG213... |
   | Verifying with API |
   +--------------------+
   ```
4. **Verified Authentic**:
   ```
   +--------------------+
   | [*] VARNAM AUTH    |
   | Bamboo Fruit Basket|
   | By: Biren Das      |
   | GI: Assam #442     |
   | GENUINE CRAFT SEAL |
   +--------------------+
   ```
5. **Rejection / Unlinked Craft**:
   ```
   +--------------------+
   | [X] UNVERIFIED TAG |
   | Tag: VN-0026       |
   | Unlinked / Pending |
   | DO NOT DISTRIBUTE  |
   +--------------------+
   ```

---

## 7. Troubleshooting

| Issue | Root Cause | Solution |
| :--- | :--- | :--- |
| **`Didn't find PN532 board`** | Wrong DIP switches or loose wiring | Check DIP switches are **0-1 (I2C)**. Verify SDA is on GPIO 21 and SCL is on GPIO 22. |
| **`SSD1306 OLED allocation failed`** | Incorrect I2C address | Ensure address is set to `0x3C`. Run an I2C scanner sketch to verify detection. |
| **`Wi-Fi Disconnected`** | 2.4 GHz vs 5 GHz mismatch | ESP32 only supports **2.4 GHz Wi-Fi**. Connect your laptop and ESP32 to a 2.4 GHz network. |
| **`HTTP 404 Not Found`** | Craft ID not in database | Check `server/db.json` or tap a verified tag like `VN-0001`. |
| **`Server Comm Error`** | Firewall blocking port 5000 | Ensure Windows Firewall allows inbound connections on port 5000 or run `npm run server` with `0.0.0.0`. |
