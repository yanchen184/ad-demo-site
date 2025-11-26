import { useState, useEffect } from 'react';
import MockAd from './components/MockAd';

const VERSION = 'v1.0.0';

const articles = [
  { id: 1, title: '如何在網站中加入 Google AdSense 廣告', category: '教學', date: '2024-01-15', readTime: '5 分鐘', content: 'Google AdSense 是目前最受歡迎的網站廣告變現平台之一。本文將介紹如何在你的網站中整合 AdSense 廣告。' },
  { id: 2, title: '網站廣告收益最佳化技巧', category: '攻略', date: '2024-01-14', readTime: '8 分鐘', content: '想要提高廣告收益？這裡有幾個實用的技巧：廣告位置很重要，將廣告放在使用者容易看到的地方。' },
  { id: 3, title: 'CPM vs CPC：了解不同的廣告計費模式', category: '知識', date: '2024-01-13', readTime: '6 分鐘', content: 'CPM 是按千次曝光計費，CPC 則是按點擊計費。' }
];

function AdCalculator() {
  const [dailyVisits, setDailyVisits] = useState(100);
  const [pagesPerVisit, setPagesPerVisit] = useState(3);
  const [cpm, setCpm] = useState(1.5);
  const monthlyImpressions = dailyVisits * pagesPerVisit * 30;
  const monthlyRevenue = (monthlyImpressions / 1000) * cpm;
  const yearlyRevenue = monthlyRevenue * 12;

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-3 gap-4">
        <div><label className="block text-sm font-medium text-gray-700 mb-1">每日訪問量</label><input type="number" value={dailyVisits} onChange={(e) => setDailyVisits(Number(e.target.value))} className="w-full px-3 py-2 border rounded-lg" min="0" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">每次瀏覽頁數</label><input type="number" value={pagesPerVisit} onChange={(e) => setPagesPerVisit(Number(e.target.value))} className="w-full px-3 py-2 border rounded-lg" min="1" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1">CPM (USD)</label><input type="number" value={cpm} onChange={(e) => setCpm(Number(e.target.value))} className="w-full px-3 py-2 border rounded-lg" min="0" step="0.1" /></div>
      </div>
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4">
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div><p className="text-sm text-gray-600">每月曝光</p><p className="text-2xl font-bold text-gray-800">{monthlyImpressions.toLocaleString()}</p></div>
          <div><p className="text-sm text-gray-600">月收入</p><p className="text-2xl font-bold text-green-600">${monthlyRevenue.toFixed(2)}</p></div>
          <div><p className="text-sm text-gray-600">年收入</p><p className="text-2xl font-bold text-blue-600">${yearlyRevenue.toFixed(2)}</p></div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selectedArticle, setSelectedArticle] = useState(articles[0]);
  useEffect(() => { console.log('Ad Demo Site ' + VERSION); }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm border-b"><div className="max-w-7xl mx-auto px-4 py-4"><div className="flex items-center space-x-3"><span className="text-2xl">📰</span><h1 className="text-xl font-bold text-gray-800">廣告示範網站</h1><span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">{VERSION}</span></div></div></header>
      <div className="max-w-7xl mx-auto px-4 py-4"><MockAd position="top" width="100%" height={100} /></div>
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          <aside className="hidden lg:block w-[160px]"><div className="sticky top-4 space-y-4"><MockAd position="left" width={160} height={600} /><MockAd position="left" width={160} height={300} /></div></aside>
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">最新文章</h2>
              {articles.map(a => (<button key={a.id} onClick={() => setSelectedArticle(a)} className={(selectedArticle.id === a.id ? 'bg-blue-50 border-blue-200' : 'bg-gray-50') + ' w-full text-left p-4 rounded-lg mb-2 border-2'}><h3 className="font-medium text-gray-800">{a.title}</h3></button>))}
            </div>
            <MockAd position="inline" width="100%" height={120} className="mb-6" />
            <article className="bg-white rounded-lg shadow-sm p-6"><h1 className="text-2xl font-bold text-gray-800 mb-4">{selectedArticle.title}</h1><p className="text-gray-600">{selectedArticle.content}</p></article>
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6"><h2 className="text-lg font-semibold text-gray-800 mb-4">廣告收益計算器</h2><AdCalculator /></div>
          </div>
          <aside className="hidden xl:block w-[300px]"><div className="sticky top-4 space-y-4"><MockAd position="right" width={300} height={250} /><MockAd position="right" width={300} height={600} /></div></aside>
        </div>
      </main>
      <footer className="bg-white border-t mt-12"><div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-500 text-sm"><p>廣告示範網站 | {VERSION}</p></div></footer>
    </div>
  );
}

export default App;
