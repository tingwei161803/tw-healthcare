# 台灣醫療科技產業地圖 · Taiwan HealthTech Industry Guide

> 把「台灣醫療科技產業」整理成一個多頁、可互動、中英雙語的純靜態導覽站 —— 從**醫療軟體**(主力)、數位健康與 AI、醫療器材、法規認證,到產業生態、職涯,再到一整套**給非醫療背景者的轉職學習中心**,外加互動練習與醫療主題小遊戲。

本站把公開資料與報導裡關於台灣醫療科技的內容,整理成 **15 個彼此串連的頁面**。純 HTML / CSS / JS、零建置,可直接部署到 GitHub Pages。產業資訊、廠商、法規與展期等細節以官方公告與各公司官網為準。

---

## 🔗 線上版 / Live

| | |
|---|---|
| 🌐 網站 | <https://tw-healthcare.peteraim.com/> |

頂部的**跨頁導覽列**可在 15 頁之間切換;每頁皆支援中文 / English 與深 / 淺色,設定跨頁延續,右上角並有到 GitHub 點星星的連結。圖鑑類頁面可用 `#<slug>` 深連結(例如 [`…/software.html`](https://tw-healthcare.peteraim.com/software.html))。

---

## 📄 頁面 / Pages

| 頁面 | 檔案 | 版型 | 內容 |
|------|------|------|------|
| 產業總覽 | `index.html` | hub | 一句話定位、6 個關鍵數字 + 通往各面向的入口卡 |
| **醫療軟體與系統** | `software.html` | gallery | HIS/EMR、PACS 影像系統、雲端醫療、HL7/FHIR 互通標準、健康大數據與資安基建(43 筆) |
| **醫療 AI 與遠距應用** | `medical-ai.html` | gallery | 影像/病理 AI、SaMD、手術導航、臨床決策支援、遠距醫療與健康 App(44 筆) |
| 數位健康前沿 | `digital-ai.html` | gallery | 生成式 AI/醫療 LLM、精準醫療與基因、穿戴感測、遠端監測、數位療法 DTx(45 筆) |
| 醫療器材與硬體 | `devices.html` | gallery | 影像設備、手術機器人、IVD、植入物、耗材與電子大廠醫療布局(24 筆) |
| 法規與認證 | `regulation.html` | article | TFDA SaMD 分級、查驗登記與合規路徑、ISO 13485/IEC 62304、健保給付、資安與個資、國際對照 |
| 產業生態與政策 | `ecosystem.html` | gallery | 加速器、創投、政府計畫、產學研、龍頭企業與產業聚落(31 筆) |
| 職涯與職務 | `careers.html` | gallery | 18 種職務的職責、背景需求、入門難易與薪資概況 |
| 醫療科技展會 | `expos.html` | gallery | 台灣醫療科技展、Medical Taiwan、大南方 AI 智慧健康展、BIO Asia–Taiwan 等(13 個) |
| 市場規模與數據 | `market.html` | dashboard | 關鍵數字、醫療支出占 GDP 國際對照、醫材產值逐年與重點統計表 |
| 轉職技能地圖 | `learn-map.html` | gallery | 四大能力支柱的 29 個技能節點(軟體工程 / 資料 AI / 醫療領域 / 法規品質) |
| 學習路線與階段 | `learn-paths.html` | article | 五種起點的學習路線、入門到就業準備三階段里程碑、迷思破除 |
| 課程證照與資源 | `learn-resources.html` | gallery | 課程、學位學程、證照、社群、書籍媒體與黑客松活動(34 筆) |
| 互動練習 | `practice.html` | practice | 隨堂測驗(20 題)、術語字卡(30 張)、可搜尋詞彙表(46 詞) |
| 遊戲中心 | `games.html` | arcade | 12 款醫療科技主題小遊戲(反應力、記憶、檢傷判斷、術語縮寫…) |

---

## ✨ 功能特色

- 🧭 **跨頁導覽列** — 15 頁一鍵切換,自動高亮目前頁
- 🌏 **全頁雙語** — 中文 / English 一鍵切換,卡片、詳情、導覽與靜態文案整頁同步、無殘留
- 🌗 **深 / 淺色模式** — 醫療專業藍綠(teal)配色,`localStorage` 記憶,跨頁延續
- 🔍 **搜尋 / 篩選** — 圖鑑頁即時全文搜尋 + 分類 chips;法規/學習路線採長文 + 目錄與閱讀進度
- 🗂️ **詳情對話框 + 深連結** — 卡片點開看完整介紹,`#<slug>` 可直接分享
- 📊 **市場儀表板** — 數據卡 + 純 SVG 長條圖 / 折線圖(無圖表庫)
- 🧠 **互動練習** — 隨堂測驗(即時 ✅/❌ + 計分)、翻卡字卡、可搜尋術語表
- 🎮 **遊戲中心** — 12 款醫療主題小遊戲,純前端、可離線、`localStorage` 記錄最佳成績;採「外掛式」契約,每款遊戲是一支自我註冊到 `window.GAMES` 的獨立模組
- ⭐ **GitHub 星星連結** — 右上角一鍵到 GitHub 點星星,線上版顯示即時星數
- 📱 **響應式** — 手機 / 平板 / 桌機皆適配,375px 無水平溢出
- ⚡ **純靜態** — 無後端、載入快、可離線瀏覽;含 SEO / Open Graph / JSON-LD

---

## 📂 結構 / Structure

```
tw-healthcare/
├── index.html             # 產業總覽(hub)
├── software.html …        # 其餘 14 個頁面(各 data-page,極簡殼)
├── assets/
│   ├── styles.css         # MD3 設計 token(淺/深,醫療藍綠)+ 全部版型樣式
│   ├── games.css          # 遊戲中心外殼 + 共享遊戲 UI 工具 class(.gu-*)
│   ├── shell.js           # 共用 chrome:appbar(含 GitHub 星數)/ 跨頁 nav / footer / dialog / 語言+主題
│   ├── app.js             # 版型引擎:依 body[data-page] 選 renderer 渲染進 #page
│   └── games/             # 12 支小遊戲模組,每支自我註冊到 window.GAMES、自帶 scoped CSS
├── data/
│   └── data.js            # 唯一資料檔:SITE_META + SITE_PAGES[](每頁載入同一份)
├── CNAME                  # 自訂網域 tw-healthcare.peteraim.com
├── .nojekyll
└── README.md
```

> 整站由 `data/data.js` 的 `SITE_PAGES[]` 驅動:每一筆 = 一頁。新增一頁 = 複製一個 `.html`、改 `data-page`、在 `SITE_PAGES` 加一筆。每個可見字串都是 `{en, zh}`,語言切換才能整站重繪。

---

## 📦 主要資料來源

內容整理自政府與權威產業來源,包括(不限於):

- 衛福部、食藥署 TFDA、健保署、數位發展部、經濟部、國發會
- 生策會 / 生策中心(IBMI)、環球生技月刊、工研院、資策會 MIC
- 產業媒體:數位時代、TechNews 科技新報、工商時報、經濟日報、報導者
- 各公司 / 機構官網、TFDA 醫療器材許可證查詢、各展會官網

> ⚠️ **非官方**:本站為個人整理之非官方資源,與各政府機關、生策會、各參展單位及各公司無關。產業資訊、廠商產品、法規分級、TFDA/FDA 核准狀態、展期與活動等細節以**官方公告與各公司官網為準**;研究過程中無法確證者已於內容標註「待查」,未予編造。如有錯誤或出入,請以官方來源為準。

---

## 🛠 本機使用

純靜態網站,瀏覽不需安裝任何依賴。

```bash
# 1. clone 專案
git clone git@github.com:tingwei161803/tw-healthcare.git
cd tw-healthcare

# 2a. 直接開啟首頁
open index.html

# 2b. 或啟動本機伺服器(建議,跨頁連結才正常)
uv run python -m http.server 4173
# 然後瀏覽 http://localhost:4173
```

> 依個人偏好,所有 Python 操作一律使用 `uv`(不用裸 `python3` / `pip`)。

---

## 📝 聲明 / License

- 本站為非官方整理,內容著作權歸原始來源(各政府機關、生策會、各公司與媒體)所有。
- 程式碼以 MIT 授權釋出。
- 本站使用 Google Analytics 4(GA4 property:`Taiwan HealthTech Guide - GA4`)蒐集匿名流量數據,以了解造訪概況;不蒐集可識別個人身分的資訊。
- 如為權利人且希望調整或移除內容,請開 issue 聯絡。
