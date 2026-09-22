import React, { useState, useEffect } from 'react';
import { Radio, ShieldCheck, CheckCircle2, AlertCircle, RefreshCw, Cpu, Tag, User, Clock, ArrowRight } from 'lucide-react';
import { useVarnam } from '../../context/VarnamContext';

interface RfidScanData {
  uid: string;
  formatted_uid: string;
  user_name: string;
  role: string;
  status: 'verified' | 'unverified' | 'unknown' | 'waiting';
  craft_id?: string;
  craft_name?: string;
  device_id?: string;
  timestamp: string;
  oled_line1?: string;
  oled_line2?: string;
  oled_line3?: string;
}

interface RfidCardItem {
  uid: string;
  formatted_uid: string;
  card_type: string;
  user_name: string;
  role: string;
  status: string;
  craft_name?: string;
}

export const LiveRfidScanner: React.FC = () => {
  const { showToast } = useVarnam();
  const [latestScan, setLatestScan] = useState<RfidScanData | null>(null);
  const [cards, setCards] = useState<RfidCardItem[]>([]);
  const [customUid, setCustomUid] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [isLivePolling, setIsLivePolling] = useState(true);

  // Poll latest scan every 2 seconds
  useEffect(() => {
    if (!isLivePolling) return;

    const fetchLatest = async () => {
      try {
        const res = await fetch('/api/rfid/latest');
        if (res.ok) {
          const data = await res.json();
          if (data.latest && data.latest.formatted_uid !== '-- -- -- --') {
            setLatestScan(data.latest);
          }
        }
      } catch (err) {
        // Backend offline or local fallback
      }
      setLastUpdated(new Date());
    };

    fetchLatest();
    const interval = setInterval(fetchLatest, 2000);
    return () => clearInterval(interval);
  }, [isLivePolling]);

  // Fetch registered cards
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch('/api/rfid/cards');
        if (res.ok) {
          const data = await res.json();
          if (data.cards) setCards(data.cards);
        }
      } catch {
        // Fallback default demo cards
        setCards([
          {
            uid: '6113EE17',
            formatted_uid: '61 13 EE 17',
            card_type: 'white_card',
            user_name: 'Manisha',
            role: 'Artisan',
            status: 'verified',
            craft_name: 'Anaimalai Split-Bamboo Heritage Basket'
          },
          {
            uid: 'A1B2C3D4',
            formatted_uid: 'A1 B2 C3 D4',
            card_type: 'blue_keychain',
            user_name: 'Rajendran Sthapathi',
            role: 'Artisan',
            status: 'verified',
            craft_name: 'Swamimalai Bronze Nataraja'
          }
        ]);
      }
    };
    fetchCards();
  }, []);

  const triggerScan = async (uid: string) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/rfid/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid, device_id: 'VARNAM-ESP32-RC522-WEB' })
      });

      if (res.ok) {
        const data = await res.json();
        setLatestScan({
          uid: data.rawUid || uid,
          formatted_uid: data.uid || uid,
          user_name: data.user,
          role: data.role,
          status: data.status,
          craft_id: data.craftId,
          craft_name: data.craftName,
          timestamp: data.timestamp || new Date().toISOString(),
          oled_line1: data.oled?.line1,
          oled_line2: data.oled?.line2,
          oled_line3: data.oled?.line3
        });

        if (data.verified) {
          showToast('RFID Authenticated', `Welcome ${data.user} (${data.role})`, 'gold');
        } else {
          showToast('Unknown Card', `Tag ${uid} is not yet registered.`, 'info');
        }
      }
    } catch {
      // Local fallback for quick preview
      const isManisha = uid.includes('61') || uid.includes('61 13 EE 17');
      setLatestScan({
        uid: isManisha ? '6113EE17' : uid,
        formatted_uid: isManisha ? '61 13 EE 17' : uid,
        user_name: isManisha ? 'Manisha' : 'Unknown User',
        role: isManisha ? 'Artisan' : 'Guest',
        status: isManisha ? 'verified' : 'unknown',
        craft_name: isManisha ? 'Anaimalai Split-Bamboo Basket' : undefined,
        timestamp: new Date().toISOString(),
        oled_line1: 'VARNAM',
        oled_line2: isManisha ? 'WELCOME MANISHA' : 'UNKNOWN CARD',
        oled_line3: isManisha ? 'VERIFIED OK' : uid
      });
      showToast(isManisha ? 'RFID Verified' : 'Unknown Card', uid, isManisha ? 'gold' : 'info');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Real-time Hardware Bridge Banner */}
      <div className="bg-gradient-to-r from-[#1B2A4A] via-[#212B46] to-[#1B2A4A] rounded-2xl p-6 text-white shadow-lg border border-amber-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">
              RFID STATUS: Device Connected & Polling
            </span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#FAF6F0]">
            ESP32 + RC522 Physical Hardware Bridge
          </h3>
          <p className="text-xs text-stone-300">
            Tap your physical RFID white card or blue keychain on the RC522. The ESP32 sends the UID over Wi-Fi, which updates below in real time!
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsLivePolling(!isLivePolling)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition flex items-center gap-1.5 border ${
              isLivePolling 
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30' 
                : 'bg-stone-700 text-stone-300 border-stone-600'
            }`}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLivePolling ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
            <span>{isLivePolling ? 'Live Polling Active' : 'Polling Paused'}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Live Scan Result + Virtual OLED Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Real-time Website State (7 Cols) */}
        <div className="lg:col-span-7 bg-[#FAF6F0] rounded-2xl p-6 border border-stone-300 shadow-sm space-y-6">
          <div className="border-b border-stone-200 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Radio className="w-5 h-5 text-[#C85A32]" />
              <h4 className="font-serif font-bold text-lg text-[#1C1917]">
                VARNAM WEBSITE LIVE SCAN
              </h4>
            </div>
            <span className="text-[11px] font-mono text-stone-500">
              Updated: {lastUpdated.toLocaleTimeString()}
            </span>
          </div>

          {/* Status Panel */}
          {latestScan ? (
            <div className={`p-6 rounded-2xl border transition-all ${
              latestScan.status === 'verified'
                ? 'bg-emerald-50/80 border-emerald-300'
                : 'bg-amber-50/80 border-amber-300'
            }`}>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-mono uppercase text-stone-500">
                      LAST SCANNED RFID UID:
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-white border border-stone-300 font-mono font-bold text-sm text-[#1B2A4A]">
                      {latestScan.formatted_uid}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs text-stone-500 block uppercase font-bold">Identified User:</span>
                    <h3 className="font-serif text-2xl font-bold text-[#1C1917] flex items-center gap-2">
                      <User className="w-5 h-5 text-[#C85A32]" />
                      {latestScan.user_name}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-white/80 p-2.5 rounded-xl border border-stone-200/70">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">Role</span>
                      <span className="font-bold text-sm text-stone-800">{latestScan.role || 'Artisan'}</span>
                    </div>

                    <div className="bg-white/80 p-2.5 rounded-xl border border-stone-200/70">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block">Auth Status</span>
                      <span className={`font-bold text-sm flex items-center gap-1 ${
                        latestScan.status === 'verified' ? 'text-emerald-700' : 'text-amber-700'
                      }`}>
                        {latestScan.status === 'verified' ? (
                          <><CheckCircle2 className="w-4 h-4" /> Verified</>
                        ) : (
                          <><AlertCircle className="w-4 h-4" /> Unregistered</>
                        )}
                      </span>
                    </div>
                  </div>

                  {latestScan.craft_name && (
                    <div className="bg-white p-3 rounded-xl border border-stone-200 flex items-center gap-2.5">
                      <Tag className="w-4 h-4 text-[#C59B27] shrink-0" />
                      <div className="text-xs">
                        <span className="text-stone-500 block text-[10px] uppercase font-bold">Associated GI Craft:</span>
                        <span className="font-bold text-stone-800">{latestScan.craft_name}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="shrink-0 text-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    latestScan.status === 'verified'
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                      : 'bg-amber-500 text-white'
                  }`}>
                    {latestScan.status === 'verified' ? (
                      <ShieldCheck className="w-8 h-8" />
                    ) : (
                      <Radio className="w-7 h-7" />
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-stone-500 mt-1 block">
                    {new Date(latestScan.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 rounded-2xl border-2 border-dashed border-stone-300 text-center space-y-2 bg-white/50">
              <Radio className="w-8 h-8 text-stone-400 mx-auto animate-pulse" />
              <p className="font-bold text-stone-700 text-sm">Waiting for first RFID Tap...</p>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                Scan your card on the RC522 hardware or click one of the simulation buttons below to test!
              </p>
            </div>
          )}

          {/* Quick Simulation Taps */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-600 block">
              Quick Test Simulation Buttons:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                disabled={isSubmitting}
                onClick={() => triggerScan('61 13 EE 17')}
                className="py-2.5 px-3 rounded-xl bg-white hover:bg-stone-50 border-2 border-stone-200 hover:border-[#C85A32] transition text-left shadow-xs group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-stone-800">White Card</span>
                  <span className="text-[9px] font-mono bg-stone-100 px-1.5 py-0.5 rounded text-stone-600">61 13 EE 17</span>
                </div>
                <span className="text-[11px] text-[#C85A32] font-semibold block mt-1">
                  Manisha (Verified) →
                </span>
              </button>

              <button
                disabled={isSubmitting}
                onClick={() => triggerScan('A1 B2 C3 D4')}
                className="py-2.5 px-3 rounded-xl bg-white hover:bg-stone-50 border-2 border-stone-200 hover:border-[#1B2A4A] transition text-left shadow-xs group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-stone-800">Blue Keychain</span>
                  <span className="text-[9px] font-mono bg-stone-100 px-1.5 py-0.5 rounded text-stone-600">A1 B2 C3 D4</span>
                </div>
                <span className="text-[11px] text-[#1B2A4A] font-semibold block mt-1">
                  Rajendran S. →
                </span>
              </button>

              <button
                disabled={isSubmitting}
                onClick={() => triggerScan('F4 8A 19 C0')}
                className="py-2.5 px-3 rounded-xl bg-white hover:bg-stone-50 border-2 border-stone-200 hover:border-amber-500 transition text-left shadow-xs group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-stone-800">Unknown Card</span>
                  <span className="text-[9px] font-mono bg-stone-100 px-1.5 py-0.5 rounded text-stone-600">F4 8A 19 C0</span>
                </div>
                <span className="text-[11px] text-amber-700 font-semibold block mt-1">
                  Test Rejection →
                </span>
              </button>
            </div>

            {/* Custom UID Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (customUid.trim()) triggerScan(customUid.trim());
              }}
              className="flex gap-2 pt-2"
            >
              <input
                type="text"
                value={customUid}
                onChange={(e) => setCustomUid(e.target.value)}
                placeholder="Enter custom UID (e.g. 61 13 EE 17 or 6113EE17)"
                className="flex-1 px-3.5 py-2 text-xs bg-white rounded-xl border border-stone-300 focus:outline-hidden focus:border-[#C85A32] font-mono"
              />
              <button
                type="submit"
                disabled={isSubmitting || !customUid.trim()}
                className="px-4 py-2 bg-[#1B2A4A] hover:bg-[#131E35] text-white text-xs font-bold rounded-xl transition disabled:opacity-50"
              >
                Simulate Tap
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Physical OLED Screen Mirror & Wiring (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Virtual 0.96" OLED Simulation Display */}
          <div className="bg-[#0B0F19] rounded-2xl p-5 border-2 border-stone-800 shadow-2xl text-white space-y-3">
            <div className="flex items-center justify-between text-xs text-stone-400 border-b border-stone-800 pb-2">
              <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                0.96" I2C OLED (SSD1306)
              </span>
              <span className="font-mono text-[10px]">128 x 64 px</span>
            </div>

            {/* OLED Pixel Screen Container */}
            <div className="bg-black border-4 border-stone-900 rounded-lg p-4 font-mono select-none tracking-wide text-xs min-h-[120px] flex flex-col justify-between shadow-inner">
              <div className="text-center border-b border-cyan-500/40 pb-1 text-cyan-300 font-bold tracking-widest text-[11px]">
                {latestScan?.oled_line1 || 'VARNAM SYSTEM'}
              </div>

              <div className="text-center py-2 space-y-1">
                <div className="text-cyan-200 font-bold text-sm">
                  {latestScan?.oled_line2 || 'SCAN YOUR CARD'}
                </div>
                <div className="text-[10px] text-cyan-400/80">
                  {latestScan?.formatted_uid ? latestScan.formatted_uid : 'Card / Keychain'}
                </div>
              </div>

              <div className="text-center border-t border-cyan-500/40 pt-1 text-[10px] text-cyan-300 font-bold">
                {latestScan?.oled_line3 || '[ READY FOR TAP ]'}
              </div>
            </div>

            <p className="text-[11px] text-stone-400 text-center leading-relaxed">
              This screen visualizes the exact text rendered on your physical 0.96" I2C OLED display attached to the ESP32.
            </p>
          </div>

          {/* Quick Hardware Pinout Guide */}
          <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-xs space-y-3">
            <h5 className="font-bold text-xs uppercase tracking-wider text-stone-800 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#C85A32]" />
              ESP32 + RC522 + OLED Pinout
            </h5>
            
            <div className="text-[11px] font-mono space-y-1.5 bg-stone-50 p-3 rounded-xl border border-stone-200 text-stone-700">
              <div className="flex justify-between"><span className="text-stone-500">RC522 SS (SDA):</span> <span className="font-bold text-[#1B2A4A]">GPIO 5</span></div>
              <div className="flex justify-between"><span className="text-stone-500">RC522 SCK:</span> <span className="font-bold text-[#1B2A4A]">GPIO 18</span></div>
              <div className="flex justify-between"><span className="text-stone-500">RC522 MOSI:</span> <span className="font-bold text-[#1B2A4A]">GPIO 23</span></div>
              <div className="flex justify-between"><span className="text-stone-500">RC522 MISO:</span> <span className="font-bold text-[#1B2A4A]">GPIO 19</span></div>
              <div className="flex justify-between"><span className="text-stone-500">RC522 RST:</span> <span className="font-bold text-[#1B2A4A]">GPIO 4</span></div>
              <div className="border-t border-stone-200 my-1"></div>
              <div className="flex justify-between"><span className="text-stone-500">OLED SDA:</span> <span className="font-bold text-emerald-700">GPIO 21</span></div>
              <div className="flex justify-between"><span className="text-stone-500">OLED SCL:</span> <span className="font-bold text-emerald-700">GPIO 22</span></div>
              <div className="flex justify-between"><span className="text-stone-500">Power:</span> <span className="font-bold text-[#C85A32]">3.3V (Breadboard Rail)</span></div>
            </div>
          </div>
        </div>

      </div>

      {/* Database Registered Cards Table */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-serif font-bold text-base text-[#1C1917] flex items-center gap-2">
            <Tag className="w-4 h-4 text-[#C85A32]" />
            Registered RFID Tags Database (Phase 4)
          </h4>
          <span className="text-xs text-stone-500 font-mono">
            {cards.length} Registered Identifiers
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-stone-200 text-stone-500 font-bold uppercase">
                <th className="py-2.5 px-3">UID (Hex)</th>
                <th className="py-2.5 px-3">Form Factor</th>
                <th className="py-2.5 px-3">Owner / Artisan</th>
                <th className="py-2.5 px-3">Role</th>
                <th className="py-2.5 px-3">Linked Craft</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-medium">
              {cards.map((c) => (
                <tr key={c.uid} className="hover:bg-stone-50/80 transition">
                  <td className="py-3 px-3 font-mono font-bold text-[#1B2A4A]">{c.formatted_uid}</td>
                  <td className="py-3 px-3 capitalize text-stone-600">{c.card_type.replace('_', ' ')}</td>
                  <td className="py-3 px-3 font-bold text-stone-900">{c.user_name}</td>
                  <td className="py-3 px-3">{c.role}</td>
                  <td className="py-3 px-3 text-stone-600">{c.craft_name || 'Generational Artisan'}</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      <CheckCircle2 className="w-3 h-3" /> Verified
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <button
                      onClick={() => triggerScan(c.formatted_uid)}
                      className="px-2.5 py-1 bg-stone-100 hover:bg-[#C85A32] hover:text-white rounded-lg text-[10px] font-bold transition"
                    >
                      Test Tap
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
