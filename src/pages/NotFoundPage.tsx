import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Home, 
  ShoppingBag, 
  ShieldCheck, 
  Cpu, 
  Hammer, 
  Lock, 
  Layers, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const portalLinks = [
    {
      title: 'Craft Marketplace',
      desc: 'Browse 28 authentic GI tagged handicraft masterworks.',
      path: '/marketplace',
      icon: ShoppingBag,
      color: 'from-amber-600 to-orange-700'
    },
    {
      title: 'ESP32 Smart Station (IoT Lab)',
      desc: 'Simulate physical NFC tap & OLED authenticity check.',
      path: '/verify',
      icon: Cpu,
      color: 'from-emerald-600 to-teal-800'
    },
    {
      title: 'Explore India Map',
      desc: 'Interactive visual journey across India’s craft regions.',
      path: '/explore-india',
      icon: Compass,
      color: 'from-blue-600 to-indigo-800'
    },
    {
      title: 'Digital Certificate Locker',
      desc: 'View cryptographic provenance certificates and locks.',
      path: '/digital-locker',
      icon: Lock,
      color: 'from-purple-600 to-indigo-900'
    },
    {
      title: 'Artisan Studio & AI Agent',
      desc: 'Upload craft photos, run AI vision, and pair NFC tags.',
      path: '/dashboard/artisan',
      icon: Hammer,
      color: 'from-[#C85A32] to-[#7A2021]'
    },
    {
      title: 'Sell a Craft (Voice AI)',
      desc: '4-step artisan wizard with 15-language speech recording and AI story drafting.',
      path: '/seller',
      icon: Hammer,
      color: 'from-[#BE5A3B] to-[#6E2A38]'
    },
    {
      title: 'Customer / Seller Sign In',
      desc: 'Unified authentication with dual-role toggle and demo credentials.',
      path: '/login',
      icon: Sparkles,
      color: 'from-[#6E2A38] to-[#212B46]'
    },
    {
      title: 'Tamil Nadu Cultural Showcase',
      desc: 'Dravidian gopuram hero, 5 cultural highlights, and 4 signature craft traditions.',
      path: '/state-tn',
      icon: Compass,
      color: 'from-[#6E2A38] to-[#AD7C2B]'
    },
    {
      title: 'Admin Hardware Telemetry',
      desc: 'Live IoT telemetry, registry, and GI certification queue.',
      path: '/dashboard/admin',
      icon: ShieldCheck,
      color: 'from-[#1B2A4A] to-[#131E35]'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-200/70 border border-stone-300 text-stone-700 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-[#C85A32]" />
          404 — Page Not Found
        </div>

        {/* Headline */}
        <div className="space-y-3">
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#1C1917]">
            Lost on the <span className="text-[#C85A32] italic">Heritage Trail?</span>
          </h1>
          <p className="text-base text-stone-600 max-w-xl mx-auto">
            The page you are looking for does not exist or has moved. Explore all the portals and experiences of the Varnam ecosystem below:
          </p>
        </div>

        {/* Quick Return Home CTA */}
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1B2A4A] text-[#D4AF37] font-bold text-xs uppercase tracking-wider hover:bg-[#131E35] transition shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return to Varnam Homepage</span>
          </Link>
        </div>

        {/* All Portals Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left pt-6">
          {portalLinks.map(portal => {
            const Icon = portal.icon;
            return (
              <Link
                key={portal.title}
                to={portal.path}
                className="p-5 bg-white rounded-2xl border border-[#C59B27]/30 hover:border-[#C85A32] shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${portal.color} text-white flex items-center justify-center shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#1C1917] group-hover:text-[#C85A32] transition">
                    {portal.title}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {portal.desc}
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-1 text-xs font-bold text-[#C85A32] group-hover:translate-x-1 transition-transform">
                  <span>Explore portal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
};
