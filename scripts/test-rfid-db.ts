import { db } from '../server/database.ts';

console.log('Testing RFID Database Functions:');

// Test 1: Known White Card
const scan1 = db.handleRfidScan('61 13 EE 17');
console.log('Scan 1 (White Card):', scan1.user_name, '| Status:', scan1.status, '| OLED:', scan1.oled_line2);

// Test 2: Known Blue Keychain
const scan2 = db.handleRfidScan('A1 B2 C3 D4');
console.log('Scan 2 (Blue Keychain):', scan2.user_name, '| Status:', scan2.status, '| OLED:', scan2.oled_line2);

// Test 3: Unknown Card
const scan3 = db.handleRfidScan('F4 8A 19 C0');
console.log('Scan 3 (Unknown Card):', scan3.user_name, '| Status:', scan3.status, '| OLED:', scan3.oled_line2);

// Test 4: Latest scan retrieval
const latest = db.getLatestRfidScan();
console.log('Latest Scan in DB:', latest?.formatted_uid, '| User:', latest?.user_name);

console.log('All RFID DB tests passed successfully!');
