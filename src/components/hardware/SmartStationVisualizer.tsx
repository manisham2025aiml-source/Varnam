import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Radio, 
  Cpu, 
  Wifi, 
  ShieldCheck, 
  AlertTriangle, 
  Terminal, 
  ExternalLink, 
  RefreshCw, 
  CheckCircle2, 
  XCircle,
  Layers,
  ChevronDown,
  ChevronUp,
  Sliders
} from 'lucide-react';

type OledState = 'BOOT' | 'READY' | 'READING' | 'VERIFYING' | 'VERIFIED' | 'ERROR';

interface ProductData {
  productId: string;
  name: string;
  category: string;
  artisan: string;
  origin: string;
  giTag: string;
  status: string;
  nfcTagId?: string;
}

export const SmartStationVisualizer: React.FC = () => {
  const [oledState, setOledState] = useState<OledState>('READY');
  const [activeTag, setActiveTag] = useState<string>('VN-0001');
  const [customTagInput, setCustomTagInput] = useState<string>('');
  const [detectedUid, setDetectedUid] = useState<string>('04:A2:8B:19:3C:70:80');
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  
  // Hardware status indicators
  const [isWifiConnected, setIsWifiConnected] = useState<boolean>(true);
  const [activityLed, setActivityLed] = useState<boolean>(false);
  const [pn532LedColor, setPn532LedColor] = useState<'blue' | 'amber' | 'green' | 'red'>('blue');
  
  // Serial Terminal Logs
  const [serialLogs, setSerialLogs] = useState<string[]>([
    '[00:00:01] [ESP32] Booting Varnam IoT Station v1.2...',
    '[00:00:02] [ESP32] I2C Initialized (SDA=GPIO 21, SCL=GPIO 22)',
    '[00:00:03] [PN532] NFC Module Found at 0x24 (I2C Mode: CH1=OFF, CH2=ON)',
    '[00:00:03] [OLED] SSD1306 128x64 display active at 0x3C',
    '[00:00:05] [WiFi] Connected to "Varnam-IoT-Hub" (IP: 192.168.1.45)',
    '[00:00:05] [HTTP] API Target: http://localhost:5000/api',
    '[00:00:06] [READY] Waiting for ISO14443A NFC Tag...'
  ]);
  const [showSerialMonitor, setShowSerialMonitor] = useState<boolean>(false);
  const [lastPayload, setLastPayload] = useState<any>(null);

  const addSerialLog = (message: string) => {
    const time = new Date().toLocaleTimeString('en-US', { hour12: false });
    setSerialLogs(prev => [...prev.slice(-30), `[${time}] ${message}`]);
  };

  // Preset Tags for quick testing
  const PRESET_TAGS = [
    { id: 'VN-0001', name: 'Bamboo Fruit Basket', status: 'verified', note: 'GI Assam #442' },
    { id: 'VN-0002', name: 'Nataraja Bronze', status: 'verified', note: 'GI Tamil Nadu #014' },
    { id: 'VN-0007', name: 'Mysore Silk Saree', status: 'verified', note: 'GI Karnataka #007' },
    { id: 'VN-0026', name: 'Terracotta Horse', status: 'unlinked', note: 'Unlinked Craft' },
    { id: 'VN-9999', name: 'Counterfeit / Unregistered', status: 'not_found', note: 'Invalid Tag' },
  ];

  const handleSimulateScan = async (tagId: string) => {
    const cleanId = tagId.trim().toUpperCase();
    setActiveTag(cleanId);
    
    // Step 1: Physical detection on PN532
    const fakeUid = `04:${Math.floor(Math.random() * 89 + 10).toString(16).toUpperCase()}:${Math.floor(Math.random() * 89 + 10).toString(16).toUpperCase()}:${Math.floor(Math.random() * 89 + 10).toString(16).toUpperCase()}:3C:70:80`;
    setDetectedUid(fakeUid);
    setOledState('READING');
    setPn532LedColor('amber');
    setActivityLed(true);
    addSerialLog(`[PN532] Tag Detected! UID: ${fakeUid}`);
    addSerialLog(`[PN532] Reading NDEF Record: "${cleanId}"`);

    // Step 2: Verifying via API after 600ms
    setTimeout(async () => {
      setOledState('VERIFYING');
      addSerialLog(`[ESP32] Initiating HTTP GET /api/products/${cleanId}`);

      try {
        const res = await fetch(`/api/products/${cleanId}`);
        const data = await res.json();
        setLastPayload(data);

        if (res.ok && data && data.productId) {
          if (data.status === 'verified' || data.nfcStatus === 'linked') {
            // Authentic and verified
            setProductData(data);
            setOledState('VERIFIED');
            setPn532LedColor('green');
            setActivityLed(false);
            addSerialLog(`[HTTP] 200 OK — Authenticated: "${data.name}" (${data.giTag})`);

            // Also log scan to backend telemetry
            fetch('/api/nfc/scan', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                nfcTagId: data.nfcTagId || `NTAG213-${cleanId}`,
                productId: data.productId,
                deviceLocation: 'Station-01 (IoT Visualizer)'
              })
            }).then(() => {
              addSerialLog(`[HTTP] Scan event logged to /api/nfc/scan`);
            }).catch(() => {});

          } else {
            // Registered in DB but unlinked / pending
            setProductData(data);
            setErrorMessage('Tag Registered but Not Verified/Linked');
            setOledState('ERROR');
            setPn532LedColor('red');
            setActivityLed(false);
            addSerialLog(`[ALERT] Product status is "${data.status || 'unlinked'}". NFC verification failed.`);
          }
        } else {
          // 404 Not Found
          setProductData(null);
          setErrorMessage('Tag ID Not Found in Varnam Ledger');
          setOledState('ERROR');
          setPn532LedColor('red');
          setActivityLed(false);
          addSerialLog(`[HTTP] 404 Not Found — Unrecognized Craft Tag "${cleanId}"`);
        }
      } catch (err: any) {
        setProductData(null);
        setErrorMessage('Network / API Connection Error');
        setOledState('ERROR');
        setPn532LedColor('red');
        setActivityLed(false);
        addSerialLog(`[ERR] HTTP Client Error: ${err.message || 'Connection failed'}`);
      }
    }, 600);
  };

  const handleResetStation = () => {
    setOledState('READY');
    setPn532LedColor('blue');
    setProductData(null);
    setErrorMessage('');
    addSerialLog('[ESP32] Ready for next product tap.');
  };

  return (
    <div className="bg-[#1B2A4A] text-white rounded-3xl p-6 sm:p-10 border border-[#C59B27]/40 shadow-2xl space-y-8">
      
      {/* Visualizer Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#C85A32] text-white flex items-center justify-center shadow-lg shadow-[#C85A32]/30">
            <Cpu className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                Dual I2C IoT Prototype
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                ● LIVE ESP32 SIMULATION
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Varnam Smart Station Visualizer
            </h3>
          </div>
        </div>

        {/* Hardware Status Pills */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
            <Wifi className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-stone-300">192.168.1.45</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
            <Radio className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-stone-300">PN532 (0x24)</span>
          </div>
          <button
            onClick={handleResetStation}
            className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-stone-300 hover:text-white transition"
            title="Reset Station"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Hardware Workbench Grid: Breadboard & Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col (7 cols): Physical Hardware Modules Representation */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Hardware Enclosure / Breadboard */}
          <div className="bg-stone-900/90 rounded-2xl p-6 border-2 border-stone-700 shadow-inner relative overflow-hidden">
            <div className="absolute top-2 right-3 text-[10px] font-mono text-stone-500 uppercase tracking-wider">
              Shared I2C Bus (SDA: GPIO 21 • SCL: GPIO 22 • 3.3V)
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              
              {/* Module 1: 0.96" I2C OLED Display (128x64) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-stone-400">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block animate-pulse"></span>
                    0.96" OLED (0x3C)
                  </span>
                  <span>128 x 64 px</span>
                </div>

                {/* OLED Bezel & Screen */}
                <div className="p-3 bg-stone-950 rounded-xl border-4 border-stone-800 shadow-2xl">
                  {/* OLED Active Surface */}
                  <div className="w-full h-36 bg-[#040814] rounded-lg border border-cyan-950 p-3 font-mono text-xs flex flex-col justify-between select-none relative overflow-hidden shadow-[inset_0_0_15px_rgba(0,180,255,0.15)]">
                    
                    {/* Scanline CRT overlay effect */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.35)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40"></div>

                    {/* OLED Content depending on State */}
                    {oledState === 'BOOT' && (
                      <div className="space-y-1 text-cyan-300">
                        <div className="text-[10px] text-yellow-300">*** VARNAM IoT ***</div>
                        <div>BOOTING SYSTEM...</div>
                        <div className="text-[10px] text-stone-400">I2C: OK (0x24, 0x3C)</div>
                        <div className="text-[10px] text-stone-400">WIFI CONNECTING...</div>
                      </div>
                    )}

                    {oledState === 'READY' && (
                      <div className="h-full flex flex-col justify-between text-center py-1">
                        <div className="text-[11px] font-bold text-yellow-300 uppercase tracking-wider border-b border-cyan-900 pb-1">
                          VARNAM IoT HUB
                        </div>
                        <div className="space-y-1">
                          <div className="text-cyan-400 text-[11px] animate-pulse">
                            ▼ TAP PRODUCT NFC ▼
                          </div>
                          <div className="text-[10px] text-stone-400">
                            Ready on PN532
                          </div>
                        </div>
                        <div className="text-[9px] text-cyan-600 font-mono">
                          IP: 192.168.1.45 • 0x24
                        </div>
                      </div>
                    )}

                    {oledState === 'READING' && (
                      <div className="space-y-1 text-yellow-300">
                        <div className="text-[10px] text-cyan-300 uppercase border-b border-cyan-900 pb-0.5">
                          NFC TAG DETECTED!
                        </div>
                        <div className="text-[10px] text-stone-300 truncate">
                          UID: {detectedUid}
                        </div>
                        <div className="text-xs text-yellow-400 font-bold animate-pulse pt-1">
                          READING NTAG213...
                        </div>
                        <div className="text-[10px] text-stone-400">
                          TAG: {activeTag}
                        </div>
                      </div>
                    )}

                    {oledState === 'VERIFYING' && (
                      <div className="space-y-1 text-cyan-300">
                        <div className="text-[10px] text-yellow-300 uppercase border-b border-cyan-900 pb-0.5">
                          CLOUD HANDSHAKE
                        </div>
                        <div className="text-[10px] text-stone-300">
                          GET /api/products
                        </div>
                        <div className="text-xs text-cyan-400 font-bold animate-pulse pt-1">
                          VERIFYING LEDGER...
                        </div>
                        <div className="text-[9px] text-stone-400">
                          Checking Digital Seal
                        </div>
                      </div>
                    )}

                    {oledState === 'VERIFIED' && productData && (
                      <div className="h-full flex flex-col justify-between">
                        <div className="text-[10px] font-bold text-emerald-400 border-b border-emerald-900 pb-0.5 flex items-center justify-between">
                          <span>[✓] VARNAM AUTH</span>
                          <span className="text-[9px] text-yellow-300">{productData.productId}</span>
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-white text-[11px] font-bold truncate">
                            {productData.name}
                          </div>
                          <div className="text-[10px] text-cyan-300 truncate">
                            By {productData.artisan}
                          </div>
                          <div className="text-[9px] text-yellow-400 truncate">
                            GI: {productData.giTag}
                          </div>
                        </div>
                        <div className="text-[8px] text-emerald-500 uppercase tracking-widest text-right">
                          AUTHENTIC PRODUCT
                        </div>
                      </div>
                    )}

                    {oledState === 'ERROR' && (
                      <div className="h-full flex flex-col justify-between text-red-400">
                        <div className="text-[10px] font-bold text-red-400 border-b border-red-900 pb-0.5">
                          [✕] AUTHENTICATION FAILED
                        </div>
                        <div className="space-y-0.5 py-1">
                          <div className="text-white text-[11px] font-bold">
                            TAG: {activeTag}
                          </div>
                          <div className="text-[10px] text-red-300 leading-tight">
                            {errorMessage || 'Unregistered Tag'}
                          </div>
                        </div>
                        <div className="text-[8px] text-red-500 uppercase tracking-wider">
                          DO NOT DISTRIBUTE
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </div>

              {/* Module 2: PN532 NFC Module Representation */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-stone-400">
                  <span className="flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-full inline-block ${
                      pn532LedColor === 'blue' ? 'bg-blue-400 animate-pulse' :
                      pn532LedColor === 'amber' ? 'bg-amber-400 animate-ping' :
                      pn532LedColor === 'green' ? 'bg-emerald-400' : 'bg-red-500'
                    }`}></span>
                    PN532 Reader (0x24)
                  </span>
                  <span className="text-[10px] text-stone-500">I2C: CH1=0, CH2=1</span>
                </div>

                {/* PN532 PCB Board Graphics */}
                <div className="p-3 bg-[#113524] rounded-xl border-4 border-stone-800 shadow-2xl h-42 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* DIP Switch Configuration Graphic */}
                  <div className="flex items-center justify-between text-[9px] font-mono text-emerald-200">
                    <span>PN532 V3</span>
                    <div className="flex items-center gap-1 bg-stone-900 px-1.5 py-0.5 rounded border border-stone-700">
                      <Sliders className="w-2.5 h-2.5 text-[#D4AF37]" />
                      <span>DIP: 0-1 (I2C)</span>
                    </div>
                  </div>

                  {/* Antenna Coil Graphic Target */}
                  <div 
                    onClick={() => handleSimulateScan(activeTag)}
                    className="w-24 h-24 rounded-full mx-auto border-2 border-dashed border-[#D4AF37]/60 flex flex-col items-center justify-center cursor-pointer hover:border-[#D4AF37] hover:scale-105 transition-all bg-emerald-900/40 relative group"
                    title="Click to tap current tag"
                  >
                    {/* Concentric antenna rings */}
                    <div className="w-18 h-18 rounded-full border border-[#D4AF37]/30 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 flex items-center justify-center">
                        <Radio className={`w-6 h-6 transition ${
                          pn532LedColor === 'blue' ? 'text-blue-300' :
                          pn532LedColor === 'amber' ? 'text-amber-400 animate-pulse' :
                          pn532LedColor === 'green' ? 'text-emerald-300' : 'text-red-400'
                        }`} />
                      </div>
                    </div>
                    <span className="text-[8px] font-mono uppercase text-[#D4AF37] font-bold mt-1">
                      ANTENNA
                    </span>
                  </div>

                  {/* Status Indicator Bar */}
                  <div className="flex items-center justify-between text-[9px] font-mono pt-1">
                    <span className="text-emerald-300">13.56 MHz NFC</span>
                    <span className={`font-bold uppercase ${
                      pn532LedColor === 'blue' ? 'text-blue-300' :
                      pn532LedColor === 'amber' ? 'text-amber-400' :
                      pn532LedColor === 'green' ? 'text-emerald-300' : 'text-red-400'
                    }`}>
                      {pn532LedColor === 'blue' ? 'READY' :
                       pn532LedColor === 'amber' ? 'READING...' :
                       pn532LedColor === 'green' ? 'VERIFIED' : 'REJECTED'}
                    </span>
                  </div>

                </div>
              </div>

            </div>

            {/* ESP32 Microcontroller Status Ribbon */}
            <div className="mt-6 pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-stone-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block shadow-[0_0_6px_red]"></span>
                <span className="text-stone-300">PWR (3.3V)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full inline-block ${isWifiConnected ? 'bg-blue-500 shadow-[0_0_6px_cyan]' : 'bg-stone-600'}`}></span>
                <span className="text-stone-300">WIFI (STA)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full inline-block ${activityLed ? 'bg-green-400 shadow-[0_0_8px_lime]' : 'bg-stone-600'}`}></span>
                <span className="text-stone-300">IO2 (ACT)</span>
              </div>
              <div className="text-stone-500">
                ESP32-WROOM-32 (NodeMCU-32S)
              </div>
            </div>

          </div>

          {/* Verification Result Callout (When Verified) */}
          {oledState === 'VERIFIED' && productData && (
            <div className="p-5 bg-gradient-to-r from-emerald-950/80 to-stone-900 border border-emerald-500/40 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                      Authenticity Confirmed
                    </span>
                    <span className="text-[10px] font-mono text-stone-400">
                      ID: {productData.productId}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white">
                    {productData.name}
                  </h4>
                  <p className="text-xs text-stone-400">
                    Master Artisan: {productData.artisan} • Origin: {productData.origin}
                  </p>
                </div>
              </div>

              <Link
                to={`/product/${productData.productId}`}
                className="px-4 py-2 bg-[#C85A32] hover:bg-[#B34724] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center gap-1.5 shadow-md shrink-0"
              >
                <span>View Full Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}

        </div>

        {/* Right Col (5 cols): Interactive Tag Tray & Manual Input */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] block">
                Physical NFC Tag Tray
              </span>
              <h4 className="font-serif text-lg font-bold text-white">
                Select a Tag to Tap
              </h4>
              <p className="text-xs text-stone-400">
                Click any sample NTAG213 sticker below to simulate tapping it onto the PN532 antenna coil:
              </p>
            </div>

            {/* Tag Buttons List */}
            <div className="space-y-2.5">
              {PRESET_TAGS.map((tag) => {
                const isSelected = activeTag === tag.id;
                return (
                  <button
                    key={tag.id}
                    onClick={() => handleSimulateScan(tag.id)}
                    className={`w-full p-3 rounded-xl border text-left transition flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#C85A32]/20 border-[#C85A32] text-white'
                        : 'bg-stone-900/60 hover:bg-stone-800/80 border-stone-700 text-stone-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                        tag.status === 'verified' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                        tag.status === 'unlinked' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                        'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}>
                        <Radio className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-white">
                            {tag.id}
                          </span>
                          <span className="text-[10px] text-stone-400">
                            ({tag.note})
                          </span>
                        </div>
                        <p className="text-xs text-stone-300 font-medium">
                          {tag.name}
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] px-2 py-1 rounded bg-white/5">
                      Tap Tag →
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Custom Tag ID Input */}
            <div className="pt-2 border-t border-white/10 space-y-2">
              <label className="text-xs font-bold text-stone-300 block">
                Or Tap Custom Product ID
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. VN-0010 or VN-0028"
                  value={customTagInput}
                  onChange={(e) => setCustomTagInput(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-900 border border-stone-700 rounded-xl font-mono text-xs text-white uppercase focus:outline-none focus:border-[#C85A32]"
                />
                <button
                  onClick={() => customTagInput && handleSimulateScan(customTagInput)}
                  className="px-4 py-2 bg-[#C85A32] hover:bg-[#B34724] text-white rounded-xl text-xs font-bold uppercase transition shrink-0"
                >
                  Scan
                </button>
              </div>
            </div>

          </div>

          {/* Quick Info on Architecture */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-stone-400 space-y-2">
            <div className="flex items-center gap-2 text-[#D4AF37] font-bold uppercase tracking-wider text-[10px]">
              <Layers className="w-3.5 h-3.5" />
              <span>Firmware Data Flow</span>
            </div>
            <p className="leading-relaxed">
              NTAG213 UID & Product ID <span className="text-white">→ PN532 (I2C 0x24) → ESP32 → Wi-Fi HTTP GET /api/products/:productId → SSD1306 OLED (I2C 0x3C)</span>
            </p>
          </div>

        </div>

      </div>

      {/* Collapsible Serial Monitor & Telemetry Drawer */}
      <div className="border border-white/10 rounded-2xl bg-stone-950 overflow-hidden">
        <button
          onClick={() => setShowSerialMonitor(!showSerialMonitor)}
          className="w-full px-5 py-3 bg-stone-900/90 hover:bg-stone-900 flex items-center justify-between text-xs font-mono text-stone-300 transition"
        >
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-white">ESP32 UART0 Serial Monitor (115200 baud)</span>
            <span className="text-stone-500 text-[11px]">| Real-time hardware telemetry & API logs</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-stone-400">{serialLogs.length} events</span>
            {showSerialMonitor ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </button>

        {showSerialMonitor && (
          <div className="p-4 space-y-4">
            {/* Terminal Screen */}
            <div className="bg-black/90 rounded-xl p-4 font-mono text-[11px] text-emerald-400 h-48 overflow-y-auto space-y-1 border border-stone-800">
              {serialLogs.map((log, idx) => (
                <div key={idx} className="leading-relaxed whitespace-pre-wrap">
                  {log}
                </div>
              ))}
            </div>

            {/* Last HTTP Payload Inspector */}
            {lastPayload && (
              <div className="bg-stone-900/80 rounded-xl p-3 border border-stone-800">
                <span className="text-[10px] font-mono text-[#D4AF37] font-bold uppercase block mb-1">
                  Last JSON Payload Received by ESP32:
                </span>
                <pre className="font-mono text-[10px] text-cyan-300 overflow-x-auto max-h-32">
                  {JSON.stringify(lastPayload, null, 2)}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  );
};
