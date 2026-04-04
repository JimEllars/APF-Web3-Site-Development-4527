import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { PirateText } from './PirateText';

const MainLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'The Bridge', href: '/' },
    { name: 'Pirate News', href: '/intel' },
    { name: 'Policies', href: '/the-code' },
    { name: 'Events', href: '/muster-points' },
    { name: 'Podcast', href: '/the-signal' },
    { name: 'Shop', href: '/the-armory' },
    { name: 'Muster Roll', href: '/muster-roll' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#FAFAFA] font-sans selection:bg-[#7100FF] selection:text-white flex flex-col w-full overflow-x-hidden">
      {/* Scanline Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.3] mix-blend-overlay"
           style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.5) 51%)', backgroundSize: '100% 4px' }} />

      {/* Navigation */}
      <nav className="border-b border-white/10 bg-[#050505]/80 backdrop-blur-md sticky top-0 z-40 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between h-16 w-full">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-2 group" aria-label="Go to The Bridge (Home)">
                <span className="text-2xl font-black tracking-tighter uppercase">
                  APF
                  <span className="text-[#7100FF] ml-1 group-hover:animate-pulse">_</span>
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-8 font-mono text-sm">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-label={`Navigate to ${item.name}`}
                  className={`${
                    isActive(item.href)
                      ? 'text-[#7100FF] border-b-2 border-[#7100FF]'
                      : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-white/50'
                  } px-1 py-5 transition-all duration-200 uppercase tracking-widest`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#7100FF]"
              >
                {isMobileMenuOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#050505]">
            <div className="px-2 pt-2 pb-3 space-y-1 font-mono text-sm">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label={`Navigate to ${item.name}`}
                  className={`${
                    isActive(item.href)
                      ? 'bg-[#7100FF]/10 text-[#7100FF] border-l-4 border-[#7100FF]'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
                  } block px-3 py-2 uppercase tracking-widest`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative flex-grow w-full overflow-x-hidden">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-auto py-8 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tighter uppercase text-white/50">APF</span>
              <span className="text-sm font-mono text-white/30">v1.0.0</span>
            </div>
            <p className="text-xs font-mono text-white/40 uppercase tracking-widest text-center flex items-center justify-center gap-1">
              American <PirateText /> Foundation &copy; {new Date().getFullYear()} // Sovereign Data
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
