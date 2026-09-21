import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useVarnam } from '../context/VarnamContext';
import { 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Radio, 
  Layers, 
  FileText, 
  Search, 
  ArrowRight,
  Sparkles,
  Users
} from 'lucide-react';

interface PendingVerification {
  id: string;
  craftName: string;
  artisanName: string;
  state: string;
  giCategory: string;
  submittedDate: string;
  status: 'Pending Audit' | 'Approved' | 'Changes Requested' | 'Rejected';
  materialsProof: string;
}

export const AdminDashboardPage: React.FC = () => {
  const { showToast } = useVarnam();
  const [activeTab, setActiveTab] = useState<'queue' | 'nfc' | 'anomalies'>('queue');
  
  // IoT Hardware & NFC State
  const [hardwareStats, setHardwareStats] = useState<{
    totalNfcProducts: number;
    verifiedCount: number;
    unlinkedCount: number;
    totalScansCount: number;
    recentScans: any[];
  }>({
    totalNfcProducts: 28,
    verifiedCount: 25,
    unlinkedCount: 3,
    totalScansCount: 6,
    recentScans: [
      { product_id: 'VN-0025' },
      { product_id: 'VN-0024' },
      { product_id: 'VN-0023' },
      { product_id: 'VN-0001' }
    ]
  });

  const [productsList, setProductsList] = useState<any[]>([
    { product_id: 'VN-0001', name: 'Bamboo Basket', artisan_name: 'Meena', origin: 'Pollachi', nfc_status: 'Linked', verified: true, last_scanned_at: new Date().toISOString() },
    { product_id: 'VN-0002', name: 'Swamimalai Bronze Nataraja', artisan_name: 'S. Rajendran', origin: 'Swamimalai', nfc_status: 'Linked', verified: true, last_scanned_at: new Date(Date.now() - 3600000).toISOString() },
    { product_id: 'VN-0003', name: 'Thanjavur Gold Foil Painting', artisan_name: 'Meenakshi Ammal', origin: 'Thanjavur', nfc_status: 'Linked', verified: true, last_scanned_at: new Date(Date.now() - 7200000).toISOString() },
    { product_id: 'VN-0026', name: 'Mysore Rosewood Inlay Floral Tray', artisan_name: 'Ramesh Rao', origin: 'Mysore', nfc_status: 'Not Linked', verified: false, last_scanned_at: null },
  ]);

  const [scanLogs, setScanLogs] = useState<any[]>([
    { id: 'scan-101', product_id: 'VN-0025', craft_name: 'Swamimalai Bronze Somaskanda Icon', device_id: 'VARNAM-ESP32-01', status: 'verified', timestamp: new Date(Date.now() - 1800000).toISOString() },
    { id: 'scan-102', product_id: 'VN-0024', craft_name: 'Kutch Traditional Bandhani Silk Dupatta', device_id: 'VARNAM-ESP32-01', status: 'verified', timestamp: new Date(Date.now() - 3600000).toISOString() },
    { id: 'scan-103', product_id: 'VN-0023', craft_name: 'Chettinad Kottan Dyed Palmyra Leaf Heritage Basket', device_id: 'VARNAM-ESP32-02', status: 'verified', timestamp: new Date(Date.now() - 5400000).toISOString() },
    { id: 'scan-104', product_id: 'VN-0001', craft_name: 'Bamboo Basket', device_id: 'VARNAM-ESP32-01', status: 'verified', timestamp: new Date(Date.now() - 7200000).toISOString() },
  ]);

  const loadData = () => {
    fetch('/api/nfc/stats')
      .then(r => r.json())
      .then(data => {
        if (data.success) {
          setHardwareStats({
            totalNfcProducts: data.totalNfcProducts,
            verifiedCount: data.verifiedCount,
            unlinkedCount: data.unlinkedCount,
            totalScansCount: data.totalScansCount,
            recentScans: data.recentScans || []
          });
        }
      })
      .catch(() => {});

    fetch('/api/products')
      .then(r => r.json())
      .then(data => {
        if (data.success && data.products) {
          setProductsList(data.products);
        }
      })
      .catch(() => {});

    fetch('/api/nfc/scans?limit=25')
      .then(r => r.json())
      .then(data => {
        if (data.success && data.scans) {
          setScanLogs(data.scans);
        }
      })
      .catch(() => {});
  };

  React.useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 5000);
    return () => clearInterval(interval);
  }, []);
  
  const [queue, setQueue] = useState<PendingVerification[]>([
    {
      id: 'REQ-2024-089',
      craftName: 'Swamimalai Bronze Somaskanda Icon',
      artisanName: 'S. Rajendran Sthapathi',
      state: 'Tamil Nadu',
      giCategory: 'GI-023 (Metalwork & Bronze)',
      submittedDate: 'Today, 10:30 AM',
      status: 'Pending Audit',
      materialsProof: 'Kaveri River silt certificate #TN-882 & 99.4% copper assay report attached.'
    },
    {
      id: 'REQ-2024-090',
      craftName: 'Patan Patola Navratna Double Ikat Saree',
      artisanName: 'Paresh Salvi',
      state: 'Gujarat',
      giCategory: 'GI-030 (Textiles & Weaving)',
      submittedDate: 'Yesterday, 3:15 PM',
      status: 'Pending Audit',
      materialsProof: 'Pure 8-ply mulberry silk lab test & natural madder dye analysis.'
    },
    {
      id: 'REQ-2024-091',
      craftName: 'Jaipur Blue Pottery Persian Pitcher',
      artisanName: 'Kripal Kumbhakar',
      state: 'Rajasthan',
      giCategory: 'GI-028 (Pottery & Ceramics)',
      submittedDate: '2 days ago',
      status: 'Pending Audit',
      materialsProof: 'Non-clay quartz test: 0% terracotta clay, non-toxic lead-free glaze certificate.'
    }
  ]);

  const handleAction = (id: string, newStatus: 'Approved' | 'Changes Requested' | 'Rejected') => {
    setQueue(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
    if (newStatus === 'Approved') {
      showToast('GI Certification Approved', `Cryptographic seal minted and allocated for ${id}`, 'gold');
    } else {
      showToast('Status Updated', `Item ${id} marked as ${newStatus}`, 'info');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="bg-[#1B2A4A] text-white rounded-3xl p-8 border border-[#C59B27]/40 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              National Geographical Indication Registry
            </span>
            <h1 className="font-serif text-3xl font-bold">
              GI Registrar & Verification Terminal
            </h1>
            <p className="text-xs text-white/70">
              Audit artisan submissions, allocate cryptographic NFC chips, and resolve fraud flags.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white font-mono border border-white/20">
              Ledger Node #TN-CH-01
            </span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 bg-white rounded-3xl border border-[#C59B27]/25 shadow-xs space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400">TOTAL NFC PRODUCTS</span>
            <span className="text-3xl font-serif font-bold text-[#1C1917] block">{hardwareStats.totalNfcProducts}</span>
            <span className="text-[11px] text-emerald-700 font-semibold">100% Cryptographic Provenance</span>
          </div>
          <div className="p-6 bg-white rounded-3xl border border-[#C59B27]/25 shadow-xs space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400">VERIFIED</span>
            <span className="text-3xl font-serif font-bold text-emerald-700 block">
              {hardwareStats.verifiedCount}
            </span>
            <span className="text-[11px] text-stone-500">Active authentic physical seals</span>
          </div>
          <div className="p-6 bg-white rounded-3xl border border-[#C59B27]/25 shadow-xs space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400">UNLINKED</span>
            <span className="text-3xl font-serif font-bold text-amber-700 block">{hardwareStats.unlinkedCount}</span>
            <span className="text-[11px] text-amber-600 font-medium">Awaiting physical NFC tag pairing</span>
          </div>
          <div className="p-6 bg-white rounded-3xl border border-[#C59B27]/25 shadow-xs space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400">TOTAL SCANS LOGGED</span>
            <span className="text-3xl font-serif font-bold text-[#1B2A4A] block">{hardwareStats.totalScansCount}</span>
            <span className="text-[11px] text-emerald-700 font-semibold">ESP32 & Smartphone Live Feed</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-stone-200 gap-4 sm:gap-8 pb-2">
          {[
            { id: 'queue', label: `Verification Queue (${queue.length})`, icon: ShieldCheck },
            { id: 'nfc', label: 'Hardware NFC Registry', icon: Radio },
            { id: 'anomalies', label: 'AI Fraud & Anomaly Flags (2)', icon: AlertTriangle },
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-3 px-3 text-xs sm:text-sm font-bold tracking-wide transition flex items-center gap-2 border-b-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-[#C85A32] text-[#C85A32]'
                    : 'border-transparent text-stone-500 hover:text-stone-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Queue */}
        {activeTab === 'queue' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C59B27]/30 shadow-md space-y-6 animate-in fade-in duration-300">
            <h3 className="font-serif text-lg font-bold text-[#1C1917]">
              Pending Artisan Submissions for GI Certification
            </h3>

            <div className="space-y-4">
              {queue.map(item => (
                <div
                  key={item.id}
                  className="p-5 bg-[#FAF6F0] rounded-2xl border border-[#C59B27]/25 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block">
                        {item.id} • {item.submittedDate}
                      </span>
                      <h4 className="font-serif text-base font-bold text-[#1C1917]">
                        {item.craftName}
                      </h4>
                      <p className="text-xs text-stone-600">
                        Artisan: <strong>{item.artisanName}</strong> ({item.state}) • Category: {item.giCategory}
                      </p>
                    </div>

                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        item.status === 'Approved' ? 'bg-emerald-100 text-emerald-800' :
                        item.status === 'Changes Requested' ? 'bg-amber-100 text-amber-800' :
                        item.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-stone-700">
                    <span className="font-bold block text-[11px] text-stone-500 uppercase">Document Audit:</span>
                    <p className="mt-0.5">{item.materialsProof}</p>
                  </div>

                  {item.status === 'Pending Audit' && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      <button
                        onClick={() => handleAction(item.id, 'Approved')}
                        className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center gap-1.5 shadow-xs"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Approve & Mint NFC Seal</span>
                      </button>

                      <button
                        onClick={() => handleAction(item.id, 'Changes Requested')}
                        className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition"
                      >
                        Request Revised Lab Proofs
                      </button>

                      <button
                        onClick={() => handleAction(item.id, 'Rejected')}
                        className="px-4 py-2 bg-stone-200 hover:bg-red-100 text-stone-700 hover:text-red-700 rounded-xl text-xs font-bold uppercase tracking-wider transition"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: NFC Registry & IoT Hardware Section (Per Spec 10 & 11) */}
        {activeTab === 'nfc' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Top Hardware Station Status Bar */}
            <div className="p-6 bg-white rounded-3xl border border-[#C59B27]/30 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1B2A4A]">
                    ESP32 + PN532 Authenticity Station Online
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                  Varnam Smart Authenticity Hardware Registry
                </h3>
                <p className="text-xs text-stone-500">
                  I2C Bus: SDA GPIO 21 • SCL GPIO 22 • PN532 (0x24) • OLED 0.96" (0x3C) • Wi-Fi REST API Active
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    fetch('/api/nfc/scan', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        product_id: 'VN-0001',
                        device_id: 'VARNAM-ESP32-01',
                        status: 'verified'
                      })
                    }).then(() => {
                      showToast('Simulated ESP32 Scan', 'Received verified scan event from VARNAM-ESP32-01', 'gold');
                      loadData();
                    });
                  }}
                  className="px-4 py-2 bg-[#1B2A4A] hover:bg-[#131E35] text-[#D4AF37] rounded-xl text-xs font-bold uppercase tracking-wider transition flex items-center gap-1.5 shadow-xs border border-[#C59B27]/40"
                >
                  <Radio className="w-3.5 h-3.5" />
                  <span>Simulate ESP32 Scan</span>
                </button>
                <button
                  onClick={loadData}
                  className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-bold transition flex items-center gap-1"
                >
                  <span>↻ Refresh</span>
                </button>
              </div>
            </div>

            {/* Hardware Metrics Cards (Section 10 Spec) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 bg-white rounded-2xl border border-[#C59B27]/25 shadow-xs space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">TOTAL NFC PRODUCTS</span>
                <span className="text-3xl font-serif font-bold text-[#1C1917] block">{hardwareStats.totalNfcProducts}</span>
                <span className="text-[11px] text-stone-500">Registered on physical ledger</span>
              </div>
              <div className="p-5 bg-white rounded-2xl border border-[#C59B27]/25 shadow-xs space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">VERIFIED</span>
                <span className="text-3xl font-serif font-bold text-emerald-700 block">{hardwareStats.verifiedCount}</span>
                <span className="text-[11px] text-emerald-600 font-medium">✓ Active Authenticity Seals</span>
              </div>
              <div className="p-5 bg-white rounded-2xl border border-[#C59B27]/25 shadow-xs space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">UNLINKED</span>
                <span className="text-3xl font-serif font-bold text-amber-700 block">{hardwareStats.unlinkedCount}</span>
                <span className="text-[11px] text-amber-600 font-medium">● Awaiting physical NFC tag</span>
              </div>
              <div className="p-5 bg-white rounded-2xl border border-[#C59B27]/25 shadow-xs space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">RECENT NFC SCANS</span>
                <div className="flex flex-wrap gap-1 pt-1">
                  {hardwareStats.recentScans.slice(0, 4).map((scan, i) => (
                    <span key={i} className="text-xs font-mono font-bold px-2 py-0.5 bg-[#FAF6F0] text-[#C85A32] rounded border border-[#C59B27]/30">
                      {scan.product_id}
                    </span>
                  ))}
                </div>
                <span className="text-[11px] text-stone-400 block mt-1">Live hardware tap feed</span>
              </div>
            </div>

            {/* Product Hardware Status Table (Per Section 10 Prompt) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C59B27]/30 shadow-md space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-stone-100">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#1C1917]">
                    Product Hardware Registry Table
                  </h4>
                  <p className="text-xs text-stone-500">
                    Product ID • Product Name • NFC Status • Verification Status • Last Scan
                  </p>
                </div>
                <span className="text-xs text-stone-400 font-mono">
                  {productsList.length} items synced
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-400 font-bold uppercase tracking-wider text-[10px]">
                      <th className="py-3 px-3">Product ID</th>
                      <th className="py-3 px-3">Product Name</th>
                      <th className="py-3 px-3">NFC Status</th>
                      <th className="py-3 px-3">Verification Status</th>
                      <th className="py-3 px-3">Last Scan</th>
                      <th className="py-3 px-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-700">
                    {productsList.map((p, idx) => {
                      const isLinked = p.nfc_status === 'Linked';
                      const isVerified = p.verified;
                      return (
                        <tr key={idx} className="hover:bg-stone-50/80 transition font-medium">
                          <td className="py-3.5 px-3 font-mono font-bold text-[#C85A32]">
                            {p.product_id}
                          </td>
                          <td className="py-3.5 px-3 font-serif font-bold text-[#1C1917]">
                            {p.name}
                            <span className="block text-[10px] text-stone-400 font-sans font-normal">
                              Artisan: {p.artisan_name} ({p.origin})
                            </span>
                          </td>
                          <td className="py-3.5 px-3">
                            {isLinked ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                                <CheckCircle2 className="w-3 h-3" />
                                ✓ Linked
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800">
                                ● Not Linked
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-3">
                            {isVerified ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-300">
                                ✓ Verified
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-stone-100 text-stone-600">
                                Unverified
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-3 font-mono text-[11px] text-stone-500">
                            {p.last_scanned_at ? new Date(p.last_scanned_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Never'}
                          </td>
                          <td className="py-3.5 px-3">
                            <Link
                              to={`/product/${p.product_id}`}
                              className="text-[#C85A32] hover:underline font-bold"
                            >
                              Verify →
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Live Scan History Table (Per Section 11 Prompt) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C59B27]/30 shadow-md space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#1C1917]">
                    Live NFC Scan History & Hardware Audit Trail
                  </h4>
                  <p className="text-xs text-stone-500">
                    Chronological record of taps logged by ESP32 physical stations and NFC smartphones.
                  </p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                  {scanLogs.length} Scans Logged
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-400 font-bold uppercase tracking-wider text-[10px]">
                      <th className="py-3 px-3">Scan ID</th>
                      <th className="py-3 px-3">Product ID</th>
                      <th className="py-3 px-3">Craft Name</th>
                      <th className="py-3 px-3">Device ID</th>
                      <th className="py-3 px-3">Status</th>
                      <th className="py-3 px-3">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-700">
                    {scanLogs.map((log, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/80 transition">
                        <td className="py-3 px-3 font-mono text-stone-400 text-[10px]">
                          {log.id}
                        </td>
                        <td className="py-3 px-3 font-mono font-bold text-[#C85A32]">
                          {log.product_id}
                        </td>
                        <td className="py-3 px-3 font-serif font-bold text-[#1C1917]">
                          {log.craft_name || 'Handicraft Item'}
                        </td>
                        <td className="py-3 px-3 font-mono text-[11px] text-[#1B2A4A] font-semibold">
                          {log.device_id}
                        </td>
                        <td className="py-3 px-3">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            log.status === 'verified'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {log.status === 'verified' ? '✓ Verified' : '✕ Not Found'}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-stone-500 text-[11px]">
                          {new Date(log.timestamp).toLocaleString([], {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit'
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}


        {/* Tab 3: Anomalies */}
        {activeTab === 'anomalies' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C59B27]/30 shadow-md space-y-6 animate-in fade-in duration-300">
            <h3 className="font-serif text-lg font-bold text-[#7A2021] flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              Automated AI Anomaly & Fraud Detection
            </h3>

            <div className="space-y-4 text-xs">
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-1">
                <span className="font-bold text-amber-900 block">Anomaly #WARN-01: Duplicate Image Fingerprint</span>
                <p className="text-stone-700 leading-relaxed">
                  A submission from an unverified seller uploaded a cropped photo matching an existing certified Swamimalai Nataraja icon (VRN-TN-000428). Listing quarantined pending physical verification.
                </p>
              </div>

              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-1">
                <span className="font-bold text-amber-900 block">Anomaly #WARN-02: Suspicious Price Threshold</span>
                <p className="text-stone-700 leading-relaxed">
                  A claimed "Patan Patola pure double ikat saree" was listed at ₹12,000. Verified Patan Patola takes a minimum of 6 months and averages ₹1.5L+. Flagged for synthetic fabric testing.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
