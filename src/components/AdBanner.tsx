import { useEffect, useRef } from 'react';

interface AdBannerProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  style?: React.CSSProperties;
  className?: string;
}

/**
 * Google AdSense 廣告組件
 * 
 * 使用方式：
 * 1. 在 index.html 的 <head> 加入 AdSense script
 * 2. 將 data-ad-client 替換成你的 Publisher ID (ca-pub-XXXXXXXXXXXXXXXX)
 * 3. 將 adSlot 替換成你的廣告單元 ID
 */
const AdBanner: React.FC<AdBannerProps> = ({ 
  adSlot, 
  adFormat = 'auto',
  style,
  className = ''
}) => {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense 載入錯誤:', error);
    }
  }, []);

  return (
    <div className={'ad-container ' + className}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdBanner;
