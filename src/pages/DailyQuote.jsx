import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { zodiacSigns, getDailyQuote } from '../data/horoscopeData';

export default function DailyQuote() {
  const { selectedSign } = useApp();
  const navigate = useNavigate();
  const [revealed, setRevealed] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!selectedSign) {
      navigate('/');
    }
  }, [selectedSign, navigate]);

  if (!selectedSign) return null;

  const sign = zodiacSigns.find(s => s.id === selectedSign);
  const quote = getDailyQuote(selectedSign);

  const handleReveal = () => {
    setRevealed(true);

    // Generate celebration particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      left: `${30 + Math.random() * 40}%`,
      top: `${30 + Math.random() * 40}%`,
      drift: `${-60 + Math.random() * 120}px`,
      duration: `${1 + Math.random() * 1}s`,
      delay: `${Math.random() * 0.5}s`,
      symbol: ['✨', '⭐', '💫', '🌟', '✦', '★'][Math.floor(Math.random() * 6)],
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 2500);
  };

  const today = new Date();
  const dateStr = today.toLocaleDateString('tr-TR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return (
    <div className="animate-fade-in min-h-[70vh] flex flex-col items-center justify-center relative">
      {/* Floating particles */}
      {particles.map(p => (
        <div
          key={p.id}
          className="magic-particle text-xl"
          style={{
            left: p.left,
            top: p.top,
            '--drift': p.drift,
            '--duration': p.duration,
            animationDelay: p.delay,
            position: 'fixed',
          }}
        >
          {p.symbol}
        </div>
      ))}

      {/* Date */}
      <p className="text-gray-500 text-xs mb-6">{dateStr}</p>

      {/* Mystical orb */}
      <div className="relative mb-8">
        <div
          className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center transition-all duration-1000 ${
            revealed
              ? 'animate-cosmic-glow'
              : 'cursor-pointer hover:scale-105'
          }`}
          onClick={!revealed ? handleReveal : undefined}
          style={{
            background: revealed
              ? `radial-gradient(circle, ${sign.color}33, ${sign.color}11, transparent)`
              : 'radial-gradient(circle, rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.05), transparent)',
          }}
        >
          <span className={`text-5xl md:text-6xl transition-all duration-700 ${revealed ? 'animate-pulse-scale' : ''}`}>
            {revealed ? sign.symbol : '🔮'}
          </span>
        </div>

        {/* Orbital rings */}
        <div className="absolute inset-0 -m-4 border border-purple-500/20 rounded-full animate-spin-slow" />
        <div
          className="absolute inset-0 -m-8 border border-pink-500/10 rounded-full animate-spin-slow"
          style={{ animationDirection: 'reverse', animationDuration: '30s' }}
        />
        <div
          className="absolute inset-0 -m-12 border border-amber-500/5 rounded-full animate-spin-slow"
          style={{ animationDuration: '40s' }}
        />
      </div>

      {!revealed ? (
        <div className="text-center animate-pulse-scale">
          <button
            onClick={handleReveal}
            className="glass rounded-2xl px-8 py-4 cursor-pointer hover:bg-purple-500/10 transition-all duration-300 group"
          >
            <span className="text-lg mr-2">✨</span>
            <span className="text-purple-300 font-semibold" style={{ fontFamily: 'Cinzel, serif' }}>
              Gunun Sozunu Kesfet
            </span>
          </button>
          <p className="text-gray-600 text-xs mt-4">Kristal kurenin icine dokun...</p>
        </div>
      ) : (
        <div className="text-center animate-float-up max-w-sm">
          {/* Sign name */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500/30" />
            <span className="text-xs text-gray-500 font-medium">{sign.name} icin</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-500/30" />
          </div>

          {/* Quote */}
          <div className="glass rounded-2xl p-6 mb-6">
            <span className="text-4xl text-purple-400/30 block mb-2">"</span>
            <p
              className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              {quote}
            </p>
            <span className="text-4xl text-purple-400/30 block mt-2 text-right">"</span>
          </div>

          {/* Decorative sparkles */}
          <div className="flex justify-center gap-3">
            {['✦', '⭐', '✦'].map((s, i) => (
              <span
                key={i}
                className="text-purple-400/40 sparkle"
                style={{ '--delay': `${i * 0.5}s`, '--duration': '2s' }}
              >
                {s}
              </span>
            ))}
          </div>

          <p className="text-gray-600 text-xs mt-6">Yarin yeni bir soz seni bekliyor...</p>
        </div>
      )}
    </div>
  );
}
