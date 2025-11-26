import { useState, useEffect } from 'react';

interface MockAdProps {
  width?: number | string;
  height?: number | string;
  position: 'left' | 'right' | 'top' | 'bottom' | 'inline';
  className?: string;
}

const mockAds = [
  { title: '🎮 超級遊戲推薦', description: '限時特惠 75% OFF', bgColor: 'from-purple-500 to-pink-500', cta: '立即體驗' },
  { title: '☕ 優質咖啡豆', description: '來自哥倫比亞的香醇', bgColor: 'from-amber-500 to-orange-500', cta: '立即購買' },
  { title: '📚 線上課程', description: '學習程式設計', bgColor: 'from-blue-500 to-cyan-500', cta: '免費試學' },
  { title: '🏃 運動裝備', description: '專業級跑步鞋', bgColor: 'from-green-500 to-teal-500', cta: '查看詳情' },
  { title: '🎧 無線耳機', description: '降噪科技 極致音質', bgColor: 'from-slate-600 to-slate-800', cta: '了解更多' }
];

const MockAd: React.FC<MockAdProps> = ({ width = 160, height = 600, position, className = '' }) => {
  const [currentAd, setCurrentAd] = useState(mockAds[0]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd(mockAds[Math.floor(Math.random() * mockAds.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const isVertical = position === 'left' || position === 'right';

  const containerClasses = [
    'ad-container relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300',
    isHovered ? 'scale-[1.02] shadow-xl' : '',
    className
  ].filter(Boolean).join(' ');

  const bgClasses = 'absolute inset-0 bg-gradient-to-br ' + currentAd.bgColor + ' opacity-90';
  const contentClasses = 'relative z-10 h-full flex flex-col items-center justify-center p-4 text-white text-center ' + (isVertical ? 'space-y-4' : 'space-y-2');
  const titleClasses = 'font-bold ' + (isVertical ? 'text-lg' : 'text-base');
  const descClasses = 'opacity-90 ' + (isVertical ? 'text-sm' : 'text-xs');
  const btnClasses = 'mt-2 bg-white text-gray-800 font-semibold rounded-full hover:bg-opacity-90 transition-all duration-200 shadow-md ' + (isVertical ? 'px-6 py-2 text-sm' : 'px-4 py-1.5 text-xs');

  return (
    <div
      className={containerClasses}
      style={{ width: typeof width === 'number' ? width + 'px' : width, height: typeof height === 'number' ? height + 'px' : height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={bgClasses} />
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full" />
      <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full" />
      <div className={contentClasses}>
        <span className="absolute top-2 right-2 text-[10px] bg-white/20 px-2 py-0.5 rounded">廣告</span>
        <h3 className={titleClasses}>{currentAd.title}</h3>
        <p className={descClasses}>{currentAd.description}</p>
        <button className={btnClasses}>{currentAd.cta}</button>
        {isVertical && (
          <div className="mt-4 text-xs opacity-70">
            <p>👁️ {Math.floor(Math.random() * 1000) + 500} 次曝光</p>
            <p>👆 {Math.floor(Math.random() * 50) + 10} 次點擊</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MockAd;
