import { useMemo } from 'react';

export default function StarryBackground() {
  const stars = useMemo(() => {
    const items = [];
    for (let i = 0; i < 120; i++) {
      const size = Math.random() < 0.6 ? 'small' : Math.random() < 0.8 ? 'medium' : 'large';
      items.push({
        id: i,
        size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: `${2 + Math.random() * 4}s`,
        delay: `${Math.random() * 5}s`,
        baseOpacity: 0.2 + Math.random() * 0.5,
      });
    }
    return items;
  }, []);

  const shootingStars = useMemo(() => {
    return [
      { id: 1, top: '15%', left: '10%', delay: '0s' },
      { id: 2, top: '35%', left: '50%', delay: '4s' },
      { id: 3, top: '60%', left: '25%', delay: '8s' },
      { id: 4, top: '20%', left: '70%', delay: '12s' },
    ];
  }, []);

  return (
    <div className="starry-bg">
      {/* Nebula glows */}
      <div
        className="nebula"
        style={{
          width: '500px', height: '500px',
          top: '-10%', left: '-10%',
          background: 'radial-gradient(circle, #7c3aed, transparent)',
        }}
      />
      <div
        className="nebula"
        style={{
          width: '400px', height: '400px',
          bottom: '10%', right: '-5%',
          background: 'radial-gradient(circle, #3b82f6, transparent)',
          animationDelay: '3s',
        }}
      />
      <div
        className="nebula"
        style={{
          width: '350px', height: '350px',
          top: '40%', left: '30%',
          background: 'radial-gradient(circle, #ec4899, transparent)',
          animationDelay: '5s',
        }}
      />

      {/* Stars */}
      {stars.map(star => (
        <div
          key={star.id}
          className={`star star-${star.size}`}
          style={{
            left: star.left,
            top: star.top,
            '--duration': star.duration,
            '--delay': star.delay,
            '--base-opacity': star.baseOpacity,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map(s => (
        <div
          key={s.id}
          className="shooting-star"
          style={{ top: s.top, left: s.left, '--delay': s.delay }}
        />
      ))}
    </div>
  );
}
