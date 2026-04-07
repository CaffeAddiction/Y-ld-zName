import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  zodiacSigns,
  getDailyReading,
  getWeeklyReading,
  getMonthlyReading,
  getLuckRatings,
  getCompatibility,
} from '../data/horoscopeData';

const tabs = [
  { id: 'daily', label: 'Gunluk', icon: '☀️' },
  { id: 'weekly', label: 'Haftalik', icon: '📅' },
  { id: 'monthly', label: 'Aylik', icon: '🌙' },
];

function LuckBar({ label, value, color, delay }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-gray-400 w-16">{label}</span>
      <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full luck-bar-fill"
          style={{
            '--fill': `${value * 100}%`,
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            animationDelay: `${delay}s`,
          }}
        />
      </div>
      <span className="text-xs font-semibold text-gray-300 w-8 text-right">
        %{Math.round(value * 100)}
      </span>
    </div>
  );
}

export default function HoroscopeDetail() {
  const { selectedSign } = useApp();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('daily');

  if (!selectedSign) {
    navigate('/');
    return null;
  }

  const sign = zodiacSigns.find(s => s.id === selectedSign);
  const dailyReading = getDailyReading(selectedSign);
  const weeklyReading = getWeeklyReading(selectedSign);
  const monthlyReading = getMonthlyReading(selectedSign);
  const luck = getLuckRatings(selectedSign);
  const compat = getCompatibility(selectedSign);

  const readings = {
    daily: dailyReading,
    weekly: weeklyReading,
    monthly: monthlyReading,
  };

  const bestMatch = zodiacSigns.find(s => s.id === compat.best);
  const goodMatch = zodiacSigns.find(s => s.id === compat.good);

  const today = new Date();
  const dateStr = today.toLocaleDateString('tr-TR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="animate-fade-in">
      {/* Sign Header */}
      <div className="text-center mb-6 md:mb-8">
        <div className="relative inline-block">
          <div
            className="text-6xl md:text-7xl mb-3 animate-cosmic-glow rounded-full w-24 h-24 md:w-28 md:h-28 flex items-center justify-center mx-auto"
            style={{ color: sign.color }}
          >
            {sign.symbol}
          </div>
          <div className="absolute inset-0 -m-3 border border-purple-500/20 rounded-full animate-spin-slow" />
        </div>
        <h2
          className="text-2xl md:text-3xl font-bold mb-1"
          style={{ fontFamily: 'Cinzel, serif', color: sign.color }}
        >
          {sign.name}
        </h2>
        <p className="text-gray-500 text-xs">{sign.dates}</p>
        <p className="text-gray-600 text-[11px] mt-1">
          {sign.element} elementi &middot; Yonetici gezegen: {sign.planet}
        </p>
        <p className="text-gray-500 text-xs mt-2">{dateStr}</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 md:gap-3 mb-5">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2.5 px-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeTab === tab.id
                ? 'glass bg-purple-500/20 text-purple-300 shadow-lg shadow-purple-500/10'
                : 'glass-light text-gray-400 hover:text-gray-300'
            }`}
          >
            <span className="mr-1">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Reading */}
      <div className="glass rounded-2xl p-5 mb-5 tab-content" key={activeTab}>
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-xl">
            {activeTab === 'daily' ? '☀️' : activeTab === 'weekly' ? '📅' : '🌙'}
          </span>
          <h3 className="font-semibold text-gray-200" style={{ fontFamily: 'Cinzel, serif' }}>
            {activeTab === 'daily' ? 'Gunluk Yorum' : activeTab === 'weekly' ? 'Haftalik Yorum' : 'Aylik Yorum'}
          </h3>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed text-center">
          {readings[activeTab]}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

      {/* Luck Ratings */}
      <div className="glass rounded-2xl p-5 animate-slide-up">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-xl">🍀</span>
          <h3 className="font-semibold text-gray-200" style={{ fontFamily: 'Cinzel, serif' }}>
            Gunluk Sans
          </h3>
        </div>
        <div className="space-y-3">
          <LuckBar label="💕 Ask" value={luck.love} color="#ec4899" delay={0} />
          <LuckBar label="💼 Kariyer" value={luck.career} color="#a855f7" delay={0.2} />
          <LuckBar label="💪 Saglik" value={luck.health} color="#22c55e" delay={0.4} />
          <LuckBar label="💰 Finans" value={luck.finance} color="#fbbf24" delay={0.6} />
        </div>
      </div>

      {/* Compatibility */}
      <div className="glass rounded-2xl p-5 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-xl">💞</span>
          <h3 className="font-semibold text-gray-200" style={{ fontFamily: 'Cinzel, serif' }}>
            Burc Uyumu
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {bestMatch && (
            <div className="glass-light rounded-xl p-3 text-center">
              <div className="text-2xl mb-1" style={{ color: bestMatch.color }}>
                {bestMatch.symbol}
              </div>
              <div className="text-xs font-semibold text-gray-200">{bestMatch.name}</div>
              <div className="text-[10px] text-green-400 mt-1">Mukemmel Uyum ✨</div>
            </div>
          )}
          {goodMatch && (
            <div className="glass-light rounded-xl p-3 text-center">
              <div className="text-2xl mb-1" style={{ color: goodMatch.color }}>
                {goodMatch.symbol}
              </div>
              <div className="text-xs font-semibold text-gray-200">{goodMatch.name}</div>
              <div className="text-[10px] text-amber-400 mt-1">Iyi Uyum 💫</div>
            </div>
          )}
        </div>
      </div>

      </div>{/* end Cards Grid */}

      {/* Sign Info Card */}
      <div className="glass rounded-2xl p-5 mt-5 animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-xl">📖</span>
          <h3 className="font-semibold text-gray-200" style={{ fontFamily: 'Cinzel, serif' }}>
            Burc Bilgileri
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="glass-light rounded-xl p-3 text-center">
            <div className="text-[10px] text-gray-500 mb-1">Element</div>
            <div className="text-sm font-semibold text-gray-200">
              {sign.element === 'Ateş' ? '🔥' : sign.element === 'Toprak' ? '🌍' : sign.element === 'Hava' ? '💨' : '💧'}{' '}
              {sign.element}
            </div>
          </div>
          <div className="glass-light rounded-xl p-3 text-center">
            <div className="text-[10px] text-gray-500 mb-1">Gezegen</div>
            <div className="text-sm font-semibold text-gray-200">🪐 {sign.planet}</div>
          </div>
          <div className="glass-light rounded-xl p-3 text-center">
            <div className="text-[10px] text-gray-500 mb-1">Tarih Araligi</div>
            <div className="text-sm font-semibold text-gray-200">📅 {sign.dates}</div>
          </div>
          <div className="glass-light rounded-xl p-3 text-center">
            <div className="text-[10px] text-gray-500 mb-1">Renk</div>
            <div className="text-sm font-semibold flex items-center gap-1">
              <span
                className="w-3 h-3 rounded-full inline-block"
                style={{ backgroundColor: sign.color, boxShadow: `0 0 8px ${sign.color}60` }}
              />
              <span className="text-gray-200">Sans Rengi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
