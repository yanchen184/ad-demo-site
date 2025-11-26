# 廣告示範網站 (Ad Demo Site)

## 快速開始

### 安裝依賴
```bash
npm install
```

### 啟動開發伺服器
```bash
npm run dev
```

開啟瀏覽器訪問 http://localhost:5173

### 建置生產版本
```bash
npm run build
npm run preview
```

## 功能說明

這是一個展示如何在網站中整合廣告的示範專案，包含：

1. **側邊欄廣告** - 左右兩側的直立廣告位
2. **頂部橫幅廣告** - 頁面頂部的橫向廣告
3. **內文廣告** - 文章中間的廣告區塊
4. **廣告收益計算器** - 預估你的廣告收入

## 如何整合真實的 Google AdSense

### 1. 申請 AdSense 帳戶
前往 https://www.google.com/adsense 申請帳戶

### 2. 獲取 Publisher ID
審核通過後，你會獲得一個 Publisher ID，格式為 ca-pub-XXXXXXXXXXXXXXXX

### 3. 加入 AdSense 腳本
在 index.html 的 head 標籤中取消註解並替換你的 ID

### 4. 使用 AdBanner 組件
將 MockAd 組件替換為 AdBanner 組件

## 收益預估

| 日訪問量 | 每月曝光 | 預估月收入 (USD) |
|---------|---------|-----------------|
| 100     | 9,000   | $9-18          |
| 500     | 45,000  | $45-90         |
| 1,000   | 90,000  | $90-180        |
| 5,000   | 450,000 | $450-900       |

## 技術棧
- React 19 + TypeScript
- Tailwind CSS 3
- Vite

## 部署
推送到 main 分支後會自動部署到 GitHub Pages
