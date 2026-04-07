import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { zodiacSigns } from '../data/horoscopeData';

export default function Home() {
  const { selectedSign, setSelectedSign, streak } = useApp();
  const navigate = useNavigate();

  const handleSelect = (signId) => {
    setSelectedSign(signId);
    navigate('/horoscope');
  };

  const currentSign = selectedSign
    ? zodiacSigns.find(s => s.id === selectedSign)
    : null;

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="text-center mb-8 mt-4">
        <div className="relative inline-block mb-4">
          <div className="text-6xl md:text-7xl animate-pulse-scale">
            {currentSign ? currentSign.symbol : '🌌'}
          </div>
          {/* Orbital ring */}
          <div className="absolute inset-0 -m-4 border border-purple-500/20 rounded-full animate-spin-slow" />
          <div className="absolute inset-0 -m-8 border border-pink-500/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
        </div>

        <h2
          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-amber-300 bg-clip-text text-transparent mb-2"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          {currentSign ? `Merhaba, ${currentSign.name}!` : 'Burcunu Sec'}
        </h2>
        <p className="text-gray-400 text-sm">
          {currentSign
            ? 'Gunluk yorumlarini kesfetmek icin asagidaki menuleri kullan'
            : 'Yildizlarin sana ne soyluyor ogren'}
        </p>

        {/* Streak display for returning users */}
        {currentSign && streak.count > 0 && (
          <div className="mt-4 inline-flex items-center gap-2 glass-light rounded-full px-5 py-2">
            <span className={`text-2xl ${streak.count >= 3 ? 'animate-fire' : ''}`}>🔥</span>
            <div className="text-left">
              <span className="text-amber-300 font-bold text-lg">{streak.count} Gun</span>
              <span className="text-gray-400 text-xs block">
                {streak.count >= 7 ? 'Efsanevi Seri!' :
                 streak.count >= 3 ? 'Harika Gidiyor!' :
                 'Seri Devam Ediyor!'}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions for selected sign */}
      {currentSign && (
        <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8 animate-slide-up">
          <button
            onClick={() => navigate('/horoscope')}
            className="glass rounded-2xl p-4 text-center hover:bg-purple-500/10 transition-all duration-300 group cursor-pointer"
          >
            <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">🔮</span>
            <span className="text-sm text-purple-300 font-medium">Gunluk Yorum</span>
          </button>
          <button
            onClick={() => navigate('/quote')}
            className="glass rounded-2xl p-4 text-center hover:bg-pink-500/10 transition-all duration-300 group cursor-pointer"
          >
            <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">✨</span>
            <span className="text-sm text-pink-300 font-medium">Gunun Sozu</span>
          </button>
        </div>
      )}

      {/* Zodiac Grid */}
      <div className="mb-4 text-center">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          {currentSign ? 'Burc Degistir' : 'Burcunu Sec'}
        </h3>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
        {zodiacSigns.map((sign, index) => (
          <button
            key={sign.id}
            onClick={() => handleSelect(sign.id)}
            className={`zodiac-card glass rounded-2xl p-4 text-center cursor-pointer transition-all duration-300 ${
              selectedSign === sign.id
                ? 'ring-2 ring-purple-400/50 bg-purple-500/10'
                : 'hover:bg-white/5'
            }`}
            style={{
              animationDelay: `${index * 0.05}s`,
              animation: 'floatUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) backwards',
              animationDelay: `${index * 0.05}s`,
            }}
          >
            <div className="text-3xl md:text-4xl mb-2" style={{ color: sign.color }}>
              {sign.symbol}
            </div>
            <div className="text-xs font-semibold text-gray-200">{sign.name}</div>
            <div className="text-[10px] text-gray-500 mt-0.5">{sign.dates}</div>
            {selectedSign === sign.id && (
              <div
                className="w-2 h-2 rounded-full mx-auto mt-2"
                style={{ backgroundColor: sign.color, boxShadow: `0 0 8px ${sign.color}` }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Element Legend */}
      <div className="mt-8 glass rounded-2xl p-4 text-center">
        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Elementler
        </h4>
        <div className="grid grid-cols-4 gap-2 text-center">
          {[
            { name: 'Ates', emoji: '🔥', color: 'text-red-400' },
            { name: 'Toprak', emoji: '🌍', color: 'text-green-400' },
            { name: 'Hava', emoji: '💨', color: 'text-yellow-400' },
            { name: 'Su', emoji: '💧', color: 'text-blue-400' },
          ].map(el => (
            <div key={el.name} className="glass-light rounded-xl p-2">
              <span className="text-lg">{el.emoji}</span>
              <div className={`text-[10px] mt-0.5 font-medium ${el.color}`}>{el.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
