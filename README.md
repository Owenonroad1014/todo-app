# Todo List 專案

這是一個使用 [Next.js](https://nextjs.org) 框架開發的待辦事項清單（Todo List）應用程式。專案使用 TypeScript 撰寫，並透過 `create-next-app` 初始化。

## 專案特色

- 使用 Next.js 框架，支援伺服器端渲染（SSR）與靜態網站生成（SSG）。
- 使用 TypeScript 確保程式碼的型別安全。
- 提供基本的待辦事項管理功能，包括新增、編輯、刪除與標記完成。
- 使用 `next/font` 自動優化並載入 [Geist](https://vercel.com/font) 字體。

## 開發過程

- 使用 Figma 繪製框線圖，規劃專案的使用者介面。

以下是使用 Figma 繪製的框線圖，展示了待辦事項清單的使用者介面：

![Figma 設計圖](https://www.figma.com/design/YP0Rn5c7qdcb2RT0SE5YPD/59?node-id=191-169&t=qYTGaT7SWnstI3BL-1)

- 利用 AI 工具協助透過 Material-UI (MUI) 完成畫面設計。
- 使用 Node.js/Express 撰寫 API，並串接 Google Cloud Platform (GCP) 雲端資料庫。由於之前的專案仍在線上，因此直接使用現有資料庫建立一個 TODO 的資料表。

## 基本 CRUD 功能

- **新增（Create）**：使用者可以新增待辦事項。
- **讀取（Read）**：顯示所有待辦事項的清單。
- **更新（Update）**：使用者可以編輯或標記待辦事項為已完成。
- **刪除（Delete）**：使用者可以刪除不需要的待辦事項。

## 開始使用

首先，啟動開發伺服器：

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

接著，在瀏覽器中開啟 [http://localhost:3000](http://localhost:3000) 即可查看結果。

您可以透過修改 `app/page.tsx` 來編輯頁面，檔案修改後頁面會自動更新。

## 學習更多

若想了解更多關於 Next.js 的資訊，請參考以下資源：

- [Next.js 官方文件](https://nextjs.org/docs) - 了解 Next.js 的功能與 API。
- [學習 Next.js](https://nextjs.org/learn) - 互動式 Next.js 教學。

您也可以查看 [Next.js GitHub 倉庫](https://github.com/vercel/next.js) - 歡迎您的回饋與貢獻！

## 部署到 Vercel

最簡單的部署方式是使用 [Vercel 平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)，由 Next.js 的創建者提供。

更多部署細節，請參考 [Next.js 部署文件](https://nextjs.org/docs/app/building-your-application/deploying)。


