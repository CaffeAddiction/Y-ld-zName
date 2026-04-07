import { useMemo } from 'react';
import { useApp } from '../context/AppContext';

export default function StreakCelebration() {
  const { streak, showStreakAnimation } = useApp();

  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${30 + Math.random() * 40}%`,
      top: `${40 + Math.random() * 20}%`,
      drift: `${-50 + Math.random() * 100}px`,
      duration: `${1 + Math.random() * 1.5}s`,
      delay: `${Math.random() * 0.8}s`,
      size: 4 + Math.random() * 8,
      color: ['#fbbf24', '#f59e0b', '#f97316', '#ef4444', '#a855f7', '#ec4899'][
        Math.floor(Math.random() * 6)
      ],
      symbol: ['✨', '⭐', '🔥', '💫', '🌟', '✦'][Math.floor(Math.random() * 6)],
    }));
  }, []);

  if (!showStreakAnimation) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none streak-celebration">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Particles */}
      {particles.map(p => (
        <div
          key={p.id}
          className="magic-particle text-lg"
          style={{
            left: p.left,
            top: p.top,
            '--drift': p.drift,
            '--duration': p.duration,
            animationDelay: p.delay,
            fontSize: `${p.size * 2}px`,
          }}
        >
          {p.symbol}
        </div>
      ))}

      {/* Main Content */}
      <div className="relative animate-streak-pop text-center">
        <div className="text-7xl md:text-8xl animate-fire mb-4">🔥</div>
        <h2 className="text-4xl md:text-5xl font-bold text-mystic-gold mb-2"
          style={{ fontFamily: 'Cinzel, serif', textShadow: '0 0 30px rgba(251, 191, 36, 0.5)' }}>
          {streak.count} Gun Seri!
        </h2>
        <p className="text-lg text-purple-300 mt-2">
          {streak.count >= 7 ? 'Efsanevi seri! Yildizlar seninle!' :
           streak.count >= 3 ? 'Harika gidiyorsun! Devam et!' :
           'Guzel baslangic! Yarin da gel!'}
        </p>
        <div className="flex justify-center gap-1 mt-4">
          {Array.from({ length: Math.min(streak.count, 7) }, (_, i) => (
            <span
              key={i}
              className="text-2xl sparkle"
              style={{ '--delay': `${i * 0.2}s`, '--duration': '1.5s' }}
            >
              ⭐
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
