import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedSign, setSelectedSign] = useState(() => {
    return localStorage.getItem('yildizname_sign') || null;
  });

  const [streak, setStreak] = useState(() => {
    try {
      const saved = localStorage.getItem('yildizname_streak');
      return saved ? JSON.parse(saved) : { count: 0, lastVisit: null };
    } catch {
      return { count: 0, lastVisit: null };
    }
  });

  const [showStreakAnimation, setShowStreakAnimation] = useState(false);

  useEffect(() => {
    if (selectedSign) {
      localStorage.setItem('yildizname_sign', selectedSign);
    }
  }, [selectedSign]);

  useEffect(() => {
    const today = new Date().toDateString();
    if (streak.lastVisit !== today && selectedSign) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const isConsecutive = streak.lastVisit === yesterday.toDateString();

      const newStreak = {
        count: isConsecutive ? streak.count + 1 : 1,
        lastVisit: today,
      };
      setStreak(newStreak);
      localStorage.setItem('yildizname_streak', JSON.stringify(newStreak));

      setShowStreakAnimation(true);
      setTimeout(() => setShowStreakAnimation(false), 3500);
    }
  }, [selectedSign]);

  const clearSign = () => {
    setSelectedSign(null);
    localStorage.removeItem('yildizname_sign');
  };

  return (
    <AppContext.Provider
      value={{
        selectedSign,
        setSelectedSign,
        clearSign,
        streak,
        showStreakAnimation,
        setShowStreakAnimation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
