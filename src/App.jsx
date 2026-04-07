import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import StarryBackground from './components/StarryBackground';
import StreakCelebration from './components/StreakCelebration';
import Home from './pages/Home';
import HoroscopeDetail from './pages/HoroscopeDetail';
import DailyQuote from './pages/DailyQuote';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <StarryBackground />
        <StreakCelebration />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/horoscope" element={<HoroscopeDetail />} />
            <Route path="/quote" element={<DailyQuote />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
