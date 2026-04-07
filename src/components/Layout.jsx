import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const navItems = [
  { path: '/', icon: '🏠', label: 'Ana Sayfa' },
  { path: '/horoscope', icon: '🔮', label: 'Burcum' },
  { path: '/quote', icon: '✨', label: 'Soz' },
];

export default function Layout() {
  const { streak, selectedSign } = useApp();
  const location = useLocation();

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      {/* Top Bar */}
      <header className="glass sticky top-0 z-30 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl animate-spin-slow">🌙</span>
          <h1
            className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Yildizname
          </h1>
        </div>

        {/* Streak */}
        {selectedSign && (
          <div className="flex items-center gap-2 glass-light rounded-full px-3 py-1.5">
            <span className={`text-lg ${streak.count >= 3 ? 'animate-fire' : ''}`}>
              🔥
            </span>
            <span className="text-sm font-semibold text-amber-300">
              {streak.count}
            </span>
          </div>
        )}
      </header>

      {/* Content */}
      <main className="flex-1 pb-24">
        <div className="max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto w-full px-5 sm:px-8 py-4">
          <Outlet />
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 glass">
        <div className="max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto flex justify-around items-center py-2 px-4">
          {navItems.map(item => {
            const isActive =
              location.pathname === item.path ||
              (item.path === '/horoscope' && location.pathname.startsWith('/horoscope'));

            const to =
              item.path === '/horoscope' && !selectedSign ? '/' :
              item.path === '/quote' && !selectedSign ? '/' :
              item.path;

            return (
              <NavLink
                key={item.path}
                to={to}
                className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'text-purple-300 scale-110'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                <span className={`text-xl ${isActive ? 'animate-pulse-scale' : ''}`}>
                  {item.icon}
                </span>
                <span className="text-[10px] font-medium">{item.label}</span>
                {isActive && (
                  <div className="w-1 h-1 rounded-full bg-purple-400 mt-0.5" />
                )}
              </NavLink>
            );
          })}
        </div>
        <div className="h-[env(safe-area-inset-bottom,0px)]" />
      </nav>
    </div>
  );
}
