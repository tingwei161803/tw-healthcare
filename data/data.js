/* =========================================================================
   data.js — the single data file loaded by every page.
   window.SITE_META + window.SITE_PAGES[] (one entry per page).
   非官方整理:內容整理自公開資料與報導,以官方公告為準。
   ========================================================================= */
window.SITE_META = {
  "title": {
    "zh": "台灣醫療科技產業地圖",
    "en": "Taiwan HealthTech Industry Guide"
  },
  "subtitle": {
    "zh": "醫療軟體、數位健康與 AI、醫療器材、法規認證、產業生態、職涯與轉職學習中心 —— 一站讀懂台灣醫療科技。",
    "en": "Software, digital health & AI, devices, regulation, ecosystem, careers and a learning hub — Taiwan's health-tech industry, in one place."
  }
};

window.SITE_PAGES = [
  {
    "slug": "home",
    "layout": "hub",
    "icon": "home",
    "title": {
      "zh": "台灣醫療科技產業地圖",
      "en": "Taiwan HealthTech Industry Map"
    },
    "subtitle": {
      "zh": "從醫療軟體、數位健康與 AI、醫療器材,到法規認證、產業生態、職涯,再到給非醫療背景者的完整學習中心。中英雙語、可搜尋、附來源。非官方整理,以官方公告為準。",
      "en": "From medical software, digital health & AI and devices, to regulation, ecosystem and careers — plus a full learning hub for newcomers. Bilingual, searchable, sourced. An unofficial guide; defer to official sources."
    },
    "stats": [
      {
        "value": 9286,
        "label": {
          "zh": "健保年度總額(億元)",
          "en": "NHI annual budget (NT$100M)"
        }
      },
      {
        "value": 104,
        "label": {
          "zh": "TFDA 核准 AI 醫材(項)",
          "en": "TFDA-approved AI devices"
        }
      },
      {
        "value": 489,
        "label": {
          "zh": "健康台灣計畫(億元)",
          "en": "Healthy Taiwan program (NT$100M)"
        }
      },
      {
        "value": 150,
        "label": {
          "zh": "上市櫃生醫公司(家)",
          "en": "Listed biotech-medical firms"
        }
      },
      {
        "value": 20,
        "label": {
          "zh": "超高齡社會 65+ 佔比(%)",
          "en": "65+ share, super-aged (%)"
        }
      },
      {
        "value": 25,
        "label": {
          "zh": "醫材年出口(億美元)",
          "en": "Device exports (US$100M)"
        }
      }
    ]
  },
  {
    "slug": "software",
    "layout": "gallery",
    "icon": "dns",
    "title": {
      "en": "Medical Software & Systems",
      "zh": "醫療軟體與系統"
    },
    "subtitle": {
      "en": "Taiwan's hospital information systems, medical imaging, cloud health platforms, FHIR interoperability, health big data and security infrastructure, in a fast cloud and AI transition (2022-2026).",
      "zh": "台灣的醫院資訊系統、醫學影像、雲端醫療平台、FHIR 互通標準、健康大數據與資安基礎建設,正快速朝雲端化與 AI 轉型(2022-2026)。"
    },
    "categories": [
      {
        "key": "his",
        "en": "HIS / EMR",
        "zh": "醫院資訊系統 / 電子病歷"
      },
      {
        "key": "pacs",
        "en": "Imaging Systems (PACS/RIS)",
        "zh": "醫學影像系統"
      },
      {
        "key": "cloud",
        "en": "Cloud / SaaS Health",
        "zh": "雲端醫療 / SaaS"
      },
      {
        "key": "interop",
        "en": "Interoperability (HL7/FHIR)",
        "zh": "互通標準 (HL7/FHIR)"
      },
      {
        "key": "data",
        "en": "Health Big Data",
        "zh": "健康大數據"
      },
      {
        "key": "security",
        "en": "Security & Infrastructure",
        "zh": "資安與基礎建設"
      }
    ],
    "items": [
      {
        "slug": "ebm-technologies",
        "category": "pacs",
        "title": {
          "en": "EBM Technologies",
          "zh": "商之器科技"
        },
        "summary": {
          "en": "Taiwan's leading PACS medical-imaging vendor (TPEx: 8409), expanding into AI imaging and cloud.",
          "zh": "台灣 PACS 醫學影像儲傳系統龍頭,股票代號 8409,跨足 AI 影像與雲端。"
        },
        "overview": {
          "en": "Founded in 1988, EBM specializes in PACS, RIS, mobile imaging and PHR/EMR, and is the domestic PACS market leader with products in 3,500+ hospitals across Taiwan, Japan, Thailand, China and the US. Clients include NTUH, Tri-Service General Hospital and Shin Kong. Recent products include SoliPACS, the multi-AI mAIn-PACS platform and the FDA 510(k)-cleared UniSight viewer, plus FHIR integration and AWS-based imaging AI; it is also active in EEC promotion and DICOM standards work.",
          "zh": "1988 年成立,專注 PACS、RIS、行動醫療影像與 PHR/EMR,為國內 PACS 市占第一,產品安裝於台、日、泰、中、美逾 3,500 家醫院,客戶含台大、三總、新光。近年推出 SoliPACS、多 AI 整合影像平台 mAIn-PACS、取得美國 FDA 510(k) 的 UniSight 檢視器,以及 FHIR 整合與 AWS 影像 AI,並參與 EEC 推廣與 DICOM 標準工作。"
        },
        "tags": [
          "PACS",
          "醫學影像",
          "AI影像",
          "上櫃8409"
        ],
        "url": "https://www.ebmtech.com/en/"
      },
      {
        "slug": "aetherai",
        "category": "pacs",
        "title": {
          "en": "aetherAI",
          "zh": "雲象科技"
        },
        "summary": {
          "en": "A leading Asian medical-imaging AI company focused on digital pathology and AI-assisted diagnosis.",
          "zh": "亞洲領先的醫學影像 AI 公司,專注數位病理與 AI 輔助診斷。"
        },
        "overview": {
          "en": "aetherAI specializes in digital-pathology transformation and AI-assisted diagnosis, helping raise pathology standards and care quality in partnership with medical centers. It is a representative Taiwanese medical-imaging AI vendor, complementing HIS and PACS vendors with a focus on AI image interpretation.",
          "zh": "雲象科技專注數位病理轉型與 AI 輔助診斷,協助提升病理診斷標準與照護品質,與多家醫學中心合作。是台灣醫學影像 AI 的代表廠商之一,與 HIS/PACS 廠商互補,聚焦影像判讀 AI。"
        },
        "tags": [
          "數位病理",
          "醫學影像AI",
          "AI輔助診斷"
        ],
        "url": "https://www.aetherai.com/"
      },
      {
        "slug": "syscom-e-healthcare",
        "category": "his",
        "title": {
          "en": "Syscom e-Healthcare",
          "zh": "凌群電腦 e-Healthcare"
        },
        "summary": {
          "en": "Established system-integrator Syscom's next-generation hospital information system, e-Healthcare.",
          "zh": "老牌系統整合大廠凌群電腦的新一代醫療資訊系統 e-Healthcare。"
        },
        "overview": {
          "en": "Syscom's e-Healthcare integrates administration, diagnostics and labs, nursing workflows, decision support and medical imaging into one HIS platform. It emphasizes extensibility, flexibility and patient-centric customization to build a complete medical information platform.",
          "zh": "凌群電腦的 e-Healthcare 整合醫療行政、檢查檢驗、護理作業、經營決策與醫療影像等模組,主打系統擴充性、使用彈性與可自定義客製,採以病人服務為中心的設計理念,建構完整醫療資訊平台。"
        },
        "tags": [
          "HIS",
          "系統整合",
          "護理作業"
        ],
        "url": "https://www.syscom.com.tw/Products_Solution_Detail.aspx?id=6"
      },
      {
        "slug": "techgroup-information",
        "category": "his",
        "title": {
          "en": "Techgroup Information",
          "zh": "方鼎資訊"
        },
        "summary": {
          "en": "HIS integrator (est. 1994) serving thousands of clinics through to regional teaching hospitals.",
          "zh": "1994 年成立的醫療資訊整合服務商,橫跨千家基層院所與區域教學醫院。"
        },
        "overview": {
          "en": "A professional HIS integration, design and consulting firm and one of the few vendors covering both thousands of primary-care clinics and regional teaching hospitals. It serves Western-medicine, traditional Chinese medicine and dental institutions.",
          "zh": "專業的 HIS 整合、設計、諮詢與行銷服務商,為業界少數能同時跨千家基層院所與區域教學醫院的醫療軟體廠商,服務範圍涵蓋西醫、中醫、牙醫等院所。"
        },
        "tags": [
          "HIS",
          "基層院所",
          "區域醫院"
        ],
        "url": "https://www.techgroup.com.tw/Techgroup.com/about.html"
      },
      {
        "slug": "hismax",
        "category": "his",
        "title": {
          "en": "HisMax",
          "zh": "富博科技"
        },
        "summary": {
          "en": "Founded 1991, one of the earliest UNIX-based HIS developers in Taiwan.",
          "zh": "1991 年成立,最早投入 UNIX 醫療資訊系統的廠商之一。"
        },
        "overview": {
          "en": "Originally the Kaohsiung branch of Yang Ming Information, HisMax was an early UNIX HIS developer. It offers outpatient and inpatient, physician, lab and exam, and health-checkup HIS modules plus administrative MIS, with 100+ hospital clients and 30+ years of experience across large, medium and small hospitals.",
          "zh": "前身為陽明資訊高雄分公司,是最早從事 UNIX 醫療資訊系統開發的廠商,提供門住診、醫師診療、檢驗檢查、健檢等 HIS 全面性系統與行政管理 MIS,全省大中小型醫院客戶逾百家,累積逾 30 年經驗。"
        },
        "tags": [
          "HIS",
          "MIS",
          "UNIX"
        ],
        "url": "https://www.hismax.com.tw/about.html"
      },
      {
        "slug": "these-soft-aid",
        "category": "his",
        "title": {
          "en": "These (Soft-Aid) Xing-Yun Cloud HIS",
          "zh": "杏翔 / 杏雲雲端"
        },
        "summary": {
          "en": "30-year medical-IT firm offering HIS, PACS and the Xing-Yun cloud clinic system.",
          "zh": "服務逾 30 年的醫療資訊商,提供 HIS、PACS 與「杏雲」雲端醫療資訊系統。"
        },
        "overview": {
          "en": "These (Soft-Aid) provides a hospital management HIS, a PACS medical-imaging system and a cloud smart-clinic system (Xing-Yun), serving both hospitals and clinics. It participated in a government free-adoption program for cloud clinic systems that ended in November 2025; Xing-Yun is a product line of These rather than a separate company.",
          "zh": "杏翔提供 HIS 醫院管理系統、PACS 醫學影像系統與雲端智慧診所系統(「杏雲」),涵蓋醫院與診所市場,並曾參與政府免費導入雲端智慧診所系統計畫(已於 2025 年 11 月結束)。「杏雲」為杏翔旗下雲端產品線,而非獨立公司。"
        },
        "tags": [
          "HIS",
          "PACS",
          "雲端",
          "診所"
        ],
        "url": "https://www.these.com.tw/?page_id=3911"
      },
      {
        "slug": "vision-asia",
        "category": "his",
        "title": {
          "en": "Vision Asia Technology",
          "zh": "展望亞洲科技"
        },
        "summary": {
          "en": "Clinic-system vendor offering multi-specialty medical software with EMR, PACS and NHI claims.",
          "zh": "提供西醫、中醫、牙醫、醫美等多科別醫療軟體與 EMR、PACS、健保申報的診所系統商。"
        },
        "overview": {
          "en": "Vision Asia provides integrated clinic systems for Western, traditional Chinese, dental and aesthetic medicine, with tamper-proof EMR signing via professional smart cards, PACS imaging, NHI claim agency and cloud services. Its HIS is one of the systems integrated by Chang Gung's self-developed telemedicine devices.",
          "zh": "展望亞洲提供醫療系統整合性服務,涵蓋西醫、中醫、牙醫、醫美等多科別軟體,並提供以醫事卡簽章防竄改的 EMR 電子病歷、PACS 影像、健保申報代理與醫療雲端服務;其 HIS 為長庚自研遠距醫療設備可整合的系統之一。"
        },
        "tags": [
          "HIS",
          "EMR",
          "PACS",
          "健保申報"
        ],
        "url": "https://www.vision.com.tw/"
      },
      {
        "slug": "syspower",
        "category": "his",
        "title": {
          "en": "SysPower (Systex Group)",
          "zh": "奇唯科技"
        },
        "summary": {
          "en": "A Systex subsidiary that claims to be Taiwan's only vendor with both self-developed HIS and PACS.",
          "zh": "精誠資訊旗下子公司,號稱台灣唯一同時自研 HIS 與 PACS 的醫療資訊商。"
        },
        "overview": {
          "en": "SysPower, a subsidiary of Systex (Taiwan's largest IT-services firm), runs a medical team originating from Medethan with self-developed HIS, PACS (ExaPACS/DPACS), case-care, citizen-screening cloud and community-screening capabilities. It also offers AI-driven cloud care and a smart sarcopenia screening device with an imaging interface and automated bone-density and body-composition analysis.",
          "zh": "奇唯隸屬台灣最大資訊服務企業精誠集團,醫療團隊源自 Medethan,具備自研 HIS、PACS(ExaPACS/DPACS)、個案照護、全民檢查雲管理平台與社區篩檢能力,並推 AI 驅動雲端照護與智慧肌少症篩檢儀(含影像傳輸介面、自動骨密度與身體組成分析)。"
        },
        "tags": [
          "HIS",
          "PACS",
          "社區篩檢",
          "精誠集團"
        ],
        "url": "https://www.syspower.com.tw/product/index_medical.html"
      },
      {
        "slug": "imedtac",
        "category": "his",
        "title": {
          "en": "imedtac",
          "zh": "慧誠智醫"
        },
        "summary": {
          "en": "BenQ/Qisda-group smart-hospital AIoT integrator known for smart medication cabinets and wards.",
          "zh": "佳世達(明基友達集團)旗下智慧醫院 AIoT 整合方案商,以智慧藥櫃、智慧病房著稱。"
        },
        "overview": {
          "en": "Founded in 2016 within Qisda's (BenQ/AUO group) medical business, imedtac offers whole-hospital smart planning, smart wards (iMWard bedside e-boards), smart OR (iMOR), smart medication cabinets (iMADC, with facial-recognition controlled-drug access), telehealth and long-term-care solutions. Hardware, software and HIS-integration interfaces are developed in-house in Taipei. Deployments span 179 institutions, 9,436 devices and 2,511 beds across 12 countries.",
          "zh": "2016 年成立,屬佳世達科技醫療事業群,提供智慧醫院整院規劃、智慧病房(iMWard 床邊電子看板)、智能手術室(iMOR)、智慧藥櫃(iMADC,含臉部辨識管制藥品)、遠距醫療與長照方案,硬體、軟體與 HIS 整合介面由台北團隊自研。累計 179 家機構、9,436 台設備、2,511 張病床導入,服務 12 國。"
        },
        "tags": [
          "智慧醫院",
          "AIoT",
          "智慧藥櫃",
          "佳世達"
        ],
        "url": "https://www.imedtac.com/"
      },
      {
        "slug": "mobisnet-bojin",
        "category": "his",
        "title": {
          "en": "Mobisnet (Bojin)",
          "zh": "博鈞科技"
        },
        "summary": {
          "en": "Founded 2003, a long-term-care and home-nursing IT vendor also building HIS-integrated medical AMR robots.",
          "zh": "2003 年成立,長照與居家護理資訊系統商,並發展可整合 HIS 的醫療 AMR 機器人。"
        },
        "overview": {
          "en": "Bojin provides continuous long-term-care IT systems (ACare case management, ECare institution, HCare home-nursing, GCare home-services, DCare day-care and RCare reablement). It also builds 50/100/300 kg autonomous mobile robot (AMR) chassis for meal and medicine delivery, guidance and telehealth, deployed at NTUH, Taichung VGH, Taichung Tzu Chi, Changhua Christian and Pingtung Christian with seamless HIS integration, and exported to Japan.",
          "zh": "博鈞提供連續性長照資訊系統(ACare 個管、ECare 機構、HCare 居家護理、GCare 居家服務、DCare 日照、RCare 復能),並開發 50/100/300 公斤自主移動機器人(AMR)底盤,可送餐、送藥、導覽、視訊;台大、台中榮總、台中慈濟、彰基、屏基等導入並與 HIS 無縫整合,機器人並外銷日本。"
        },
        "tags": [
          "長照",
          "居家護理",
          "醫療機器人",
          "AMR"
        ],
        "url": "http://www.mobisnet.com.tw/"
      },
      {
        "slug": "nis-mobile-nursing",
        "category": "his",
        "title": {
          "en": "Nursing Information Systems (NIS) Ecosystem",
          "zh": "護理資訊系統(NIS)生態"
        },
        "summary": {
          "en": "NIS with mobile carts, barcodes and Wi-Fi enables bedside real-time charting, served by local vendors.",
          "zh": "NIS 結合行動護理車、條碼、無線網路讓床邊即時記錄,由多家本土軟硬體商投入。"
        },
        "overview": {
          "en": "Nursing information systems give nurses real-time access to patient-care data across outpatient, ED, wards, OR and dialysis units, with mobile carts using Wi-Fi and barcodes to replace paper workflows. Taiwan NIS and mobile-nursing vendors include Maya International (MayaMiner), Shiang-Sheng, GERIN (with teaching editions and mobile carts) and OmniHealth (cloud NIS), supported by hardware and barcode firms such as Unitech.",
          "zh": "護理資訊系統讓護理人員即時取得病人照護資訊,涵蓋門診、急診、病房、手術室、洗腎室,行動護理車結合無線通訊與條碼取代紙本作業。台灣相關廠商包括馬雅國際(MayaMiner)、翔生、GERIN(含教學版與行動護理車)、國際厚生(雲端 NIS),硬體則有精聯(Unitech)等行動運算/條碼業者支援。"
        },
        "tags": [
          "NIS",
          "護理資訊",
          "行動護理車",
          "條碼"
        ],
        "url": "https://www.mayaminer.com.tw/ENG/NIS.html"
      },
      {
        "slug": "linkou-chang-gung",
        "category": "his",
        "title": {
          "en": "Linkou Chang Gung Memorial Hospital",
          "zh": "林口長庚紀念醫院"
        },
        "summary": {
          "en": "Taiwan's first HIMSS EMRAM Level 7 hospital, exporting its self-built HIS to partner hospitals since 2022.",
          "zh": "全台首家取得 HIMSS EMRAM Level 7 的醫院,自研 HIS 並自 2022 年起對外輸出。"
        },
        "overview": {
          "en": "Chang Gung undertook a full HIS overhaul, pursuing a smart hospital via structured EMR, clinical decision support, smart pharmacy and AI voice service, using 8M+ records as an AI foundation, and earned HIMSS EMRAM Level 7 (the highest paperless standard) in 2019. Its HIS has been adopted by 11 partner hospitals since 2022, with institutional training, system build-out and regulatory compliance support; it also self-developed multi-vendor telemedicine devices.",
          "zh": "長庚全面改造 HIS,以結構化電子病歷、臨床決策支援、智慧藥局與 AI 語音客服發展智能醫院,累積逾 8 百萬份病歷做為 AI 基礎,2019 年取得 HIMSS EMRAM Level 7(無紙化最高標準)。其 HIS 自 2022 年起導入 11 家合作醫院,提供機構訓練、系統建置與法規遵循,並自研可整合多廠牌 HIS 的遠距醫療設備。"
        },
        "tags": [
          "自研HIS",
          "EMR",
          "HIMSS",
          "醫學中心"
        ],
        "url": "https://www.ithome.com.tw/people/127809"
      },
      {
        "slug": "taipei-vgh",
        "category": "his",
        "title": {
          "en": "Taipei Veterans General Hospital",
          "zh": "臺北榮民總醫院"
        },
        "summary": {
          "en": "Re-architected its HIS from mainframe to open systems by end-2020 and built the TPVGH Cloud No.1 supercomputer.",
          "zh": "2016 啟動 HIS 再造、2020 年底完成大型主機轉開放式架構,自建「北榮一號雲」超級電腦。"
        },
        "overview": {
          "en": "Taipei VGH migrated its mainframe to a Web 2.0 open architecture starting in 2016, completing the five-year, 10,000+-program conversion by end-2020 and building a medical big-data lake. It runs an AI development center and the TPVGH Cloud No.1 supercomputer (4 nodes, 32 A100 GPUs) for prognosis prediction, genomics and digital pathology, partners with NVIDIA and SAS on visual AutoML, and was designated lead hospital for two of the three national AI centers.",
          "zh": "北榮 2016 年將大型主機轉為 Web 2.0 開放式架構,2020 年底完成歷時 5 年、上萬支程式的轉換,並建置醫療大數據 Data Lake。設醫療人工智慧發展中心,自建超級電腦「北榮一號雲」(4 節點 32 張 A100 GPU),用於疾病預後預測、基因分析、數位病理,與 NVIDIA、SAS 合作建視覺化 AutoML,並獲衛福部選為兩大 AI 中心負責醫院。"
        },
        "tags": [
          "自研HIS",
          "開放式架構",
          "大數據",
          "超級電腦"
        ],
        "url": "https://www.ithome.com.tw/people/147828"
      },
      {
        "slug": "taichung-vgh",
        "category": "his",
        "title": {
          "en": "Taichung Veterans General Hospital",
          "zh": "臺中榮民總醫院"
        },
        "summary": {
          "en": "Its HIS was chosen as the deployment template for all veteran branch hospitals, having left IBM mainframes first.",
          "zh": "退輔會選定中榮 HIS 作為全台榮民分院導入樣板,因其最早脫離 IBM 大型主機完成現代化。"
        },
        "overview": {
          "en": "To integrate IT across its 12 branch hospitals, the Veterans Affairs Council compared Taipei, Taichung and Kaohsiung VGH in 2012 and chose Taichung VGH's HIS as the customizable deployment template for all branches, because it was the only one at the time to have left IBM mainframes for an open system.",
          "zh": "退輔會為整合旗下 12 家分院 IT,於 2012 年比較北榮、中榮、高榮三系統後,因中榮當時是唯一已脫離 IBM 大型主機、完成資訊現代化(開放式系統)者,選定中榮 HIS 作為全台分院客製化導入樣板。"
        },
        "tags": [
          "HIS",
          "公版",
          "退輔會",
          "開放式系統"
        ],
        "url": "https://www.ithome.com.tw/news/142828"
      },
      {
        "slug": "cmuh-ghi-system",
        "category": "his",
        "title": {
          "en": "China Medical University Hospital gHi System",
          "zh": "中國醫藥大學附設醫院「智海系統 gHi」"
        },
        "summary": {
          "en": "Co-built with Microsoft Taiwan; claimed first Chinese-language generative voice medical system, cutting documentation time 75%.",
          "zh": "與台灣微軟共創全球首個華文生成式語音智慧醫療系統,號稱減少病歷輸入時間 75%。"
        },
        "overview": {
          "en": "CMUH and Microsoft Taiwan co-developed the gHi (Generative Healthcare Intelligent) system, a Chinese-language generative voice clinical-documentation system that summarizes dictation and auto-generates medical terms and recommendations, cutting documentation time by 75%. CMUH plans hospital-wide smart outpatient, ED, OR, ICU, ward, LTC and telehealth modules, partnering with Microsoft and Google Cloud, and has been recognized among the world's top-3 smart hospitals.",
          "zh": "中國附醫與台灣微軟共同研發「智海系統(gHi system)」,以華文建構生成式語音智慧醫療,醫護口述即可摘要分析、自動生成醫療術語與建議,減少病歷輸入 75% 時間。並規劃智慧門診、急診、開刀房、加護、病房、長照、遠距等全院智慧化,與微軟、Google Cloud 合作,曾獲全球前 3 智慧醫院殊榮。"
        },
        "tags": [
          "醫學中心",
          "生成式AI",
          "智慧病歷",
          "微軟"
        ],
        "url": "https://www.cmuh.cmu.edu.tw/NewsInfo/NewsArticle?no=8438"
      },
      {
        "slug": "ntuh",
        "category": "his",
        "title": {
          "en": "National Taiwan University Hospital",
          "zh": "國立臺灣大學醫學院附設醫院"
        },
        "summary": {
          "en": "A flagship medical center with self-built HIS and EMR, running a smart-healthcare center and joining FHIR data integration.",
          "zh": "國內指標醫學中心,自建 HIS 與電子病歷,設智慧醫療中心並參與 FHIR 資料整合。"
        },
        "overview": {
          "en": "NTUH has promoted EMR since 2009 and runs an EMR portal and a smart-healthcare center. In next-generation-platform discussions, its smart-healthcare deputy director Lu-Cheng Kuo noted that data-standard integration must account for future research needs in database field definitions. NTUH is also a flagship PACS client of EBM.",
          "zh": "台大醫院自 2009 年起推動電子病歷,設電子病歷專區與智慧醫療中心。在次世代醫療平台討論中,智慧醫療中心副主任郭律成指出資料規格整合須同時考量資料庫欄位定義的未來研究需求。台大亦為商之器 PACS 的指標客戶之一。"
        },
        "tags": [
          "自研HIS",
          "EMR",
          "智慧醫療中心",
          "醫學中心"
        ],
        "url": "https://www.ntuh.gov.tw/ntuh/Fpage.action?muid=48&fid=2934"
      },
      {
        "slug": "paul-next-gen-platform",
        "category": "his",
        "title": {
          "en": "MOHW Next-Generation Digital Healthcare Platform (PAUL)",
          "zh": "衛福部次世代數位醫療平台(PAUL)"
        },
        "summary": {
          "en": "A MOHW-led national program driving HIS toward international standards via three unifications of data, rules and apps.",
          "zh": "衛福部主導的國家級平台計畫,以資料/規則/應用三大統一推動 HIS 接軌國際標準。"
        },
        "overview": {
          "en": "The program sets goals across tiers: medical centers use a data middle platform to translate and exchange data, first mapping to LOINC/SNOMED CT/RxNorm then uploading to a FHIR server; regional and local hospitals undergo full renovation on an Android-like shared digital chassis, PAUL (Platform Advancing Unified Healthcare), led by the MOHW IT Department with ITRI and partner vendors; health stations get a standard EMR. It adopts a CQL rule library and SMART on FHIR, and the IT Department built an in-house LLM standard-converter. The 2024-2026 phase also builds three AI centers and four platforms.",
          "zh": "計畫分級設定目標:醫學中心以「資料中台」轉譯交換(不全面換 HIS),先依 LOINC/SNOMED CT/RxNorm 轉換再上傳 FHIR 伺服器;區域/地區醫院全面翻新,採類 Android 共用數位底盤 PAUL,由資訊處領工研院與協力廠商開發;衛生所開發公版電子病歷。並導入 CQL 規則圖書館與 SMART on FHIR,資訊處另自建 LLM 標準轉換器,2024-2026 階段並建置三大 AI 中心與四平台。"
        },
        "tags": [
          "政策",
          "公版HIS",
          "PAUL",
          "FHIR",
          "CQL"
        ],
        "url": "https://blog.mohw.gov.tw/459/"
      },
      {
        "slug": "realsun",
        "category": "cloud",
        "title": {
          "en": "RealSun Information",
          "zh": "耀聖資訊科技"
        },
        "summary": {
          "en": "Clinic cloud HIS covering registration, billing, dispensing, claims, EMR and telehealth; approved under NHIA's subsidy.",
          "zh": "提供雲端 HIS(掛號、批價、調劑、申報、EMR、視訊診療)的診所系統商,獲健保署雲端轉型核定。"
        },
        "overview": {
          "en": "RealSun offers a cloud HIS covering registration, consultation, billing, dispensing, claims, EMR and telehealth, plus an AI symptom-analysis module (DR.AI) and digital waiting-room signage, supporting dental, TCM, Western and aesthetic clinics. It is one of the second-batch approved vendors under the NHIA clinic cloud-transformation subsidy.",
          "zh": "耀聖提供雲端 HIS,功能含掛號、看診、批價、調劑、申報、電子病歷、通訊診療與視訊服務,並推出 AI 症狀分析模組(DR.AI)與多媒體候診公播看板,支援牙醫、中醫、西醫到醫美全科別。為健保署「基層院所 HIS 雲端轉型補助計畫」第二梯次核定廠商之一。"
        },
        "tags": [
          "雲端HIS",
          "通訊診療",
          "診所",
          "AI"
        ],
        "url": "https://www.104.com.tw/company/awtdxnk"
      },
      {
        "slug": "omnihealth",
        "category": "cloud",
        "title": {
          "en": "OmniHealth Group",
          "zh": "國際厚生數位科技"
        },
        "summary": {
          "en": "Vendor of cloud HIS, mobile nursing (NIS) and cross-institution EMR-exchange services.",
          "zh": "提供雲端醫療資訊系統(HIS Cloud)、行動護理(NIS)與電子病歷交換的醫資商。"
        },
        "overview": {
          "en": "OmniHealth provides a cloud HIS integrating EMR, mobile NIS and a cloud platform for real-time nurse-physician communication, plus cross-institution EMR exchange of PACS images, discharge summaries, lab reports and outpatient meds. It participates in the knowledge-based healthcare cloud and the Changbin i-Health Park, serving rural small and medium institutions.",
          "zh": "國際厚生提供雲端醫療資訊系統(HIS Cloud),整合電子病歷、行動護理資訊系統與雲端平台,讓護理人員行動取得病歷、與醫師即時溝通,並支援跨院電子病歷交換(PACS 影像、出院病摘、檢驗報告、門診用藥)。參與「知識型醫療雲」與彰濱智慧健康悠活園區等計畫,服務偏鄉中小型院所。"
        },
        "tags": [
          "雲端HIS",
          "EMR",
          "NIS",
          "偏鄉醫療"
        ],
        "url": "https://www.omnihealthgroup.com.tw/pd-medsystems.html"
      },
      {
        "slug": "ailisi-smart-healthcare",
        "category": "cloud",
        "title": {
          "en": "Ailisi (Smart Healthcare)",
          "zh": "艾立斯科技"
        },
        "summary": {
          "en": "Next-gen Ailisi-HIS with embedded AI, ISO 27001 certification, subscription pricing and paper-record digitization.",
          "zh": "主打次世代 Ailisi-HIS、內建 AI 並通過 ISO 27001,訂閱制並提供紙本病歷數位化。"
        },
        "overview": {
          "en": "Ailisi offers a hospital-grade, next-generation Ailisi-HIS with embedded AI for workflow efficiency, ISO 27001 certification, subscription pricing and public or private cloud deployment, plus a paper-record digitization system. It is one of the second-batch approved vendors under the NHIA clinic cloud-transformation subsidy.",
          "zh": "艾立斯提供醫院級的次世代 Ailisi-HIS,內建 AI 提升流程效率、通過 ISO 27001 國際資安認證、採訂閱制並可公/私雲運行,並提供紙本病歷數位化系統。為健保署「基層院所 HIS 雲端轉型補助計畫」第二梯次核定廠商之一。"
        },
        "tags": [
          "雲端HIS",
          "ISO27001",
          "紙本數位化",
          "AI"
        ],
        "url": "https://smart-healthcare.com.tw/"
      },
      {
        "slug": "nhia-clinic-cloud-subsidy",
        "category": "cloud",
        "title": {
          "en": "NHIA Clinic HIS Cloud-Transformation Subsidy",
          "zh": "健保署基層院所 HIS 雲端轉型補助計畫"
        },
        "summary": {
          "en": "NHIA subsidy (from 2025) helping clinics migrate HIS to the cloud, requiring support for many NHI APIs.",
          "zh": "健保署 2025 年起補助基層院所將 HIS 移轉至雲端,並要求雲端 HIS 支援多項健保 API。"
        },
        "overview": {
          "en": "Vendors help clinics migrate existing systems to cloud environments to strengthen resilience. Cloud HIS must support not only registration, billing and NHI-card upload but also telehealth, e-prescription, EMR, the family-medicine platform and virtual NHI cards. Run by the Chinese Information Service Association, it approved vendors in two batches (about 12 first; 4 second: Beixin, RealSun, Ailisi, Yuxing), targeting roughly 830 institutions.",
          "zh": "由資服廠商協助基層院所將原醫療系統移轉到雲服務環境,強化資訊應變力與系統韌性。雲端 HIS 除基本預約掛號、批價、健保卡資料上傳外,須支援視訊診療、電子處方箋、電子病歷、家醫大平台、虛擬健保卡等健保 API。執行單位為中華民國資訊軟體協會,核定名單分兩梯次(第一梯約 12 家、第二梯 4 家:北昕、耀聖、艾立斯、煜興),預計導入約 830 家院所。"
        },
        "tags": [
          "政策",
          "雲端HIS",
          "補助",
          "基層院所"
        ],
        "url": "https://www.nhi.gov.tw/ch/cp-18077-97828-3928-1.html"
      },
      {
        "slug": "epic-cloud-gcp",
        "category": "cloud",
        "title": {
          "en": "Cloud EMR (Epic Cloud + Google Cloud)",
          "zh": "電子病歷上雲(Epic Cloud + Google Cloud)"
        },
        "summary": {
          "en": "After the 2022 rule change, Epic Cloud with Google Cloud promotes cloud EMR adoption among hospital groups and smaller hospitals.",
          "zh": "2022 年法規開放後,Epic Cloud 結合 Google Cloud 推動台灣醫療上雲,目標醫院集團與中小型醫院。"
        },
        "overview": {
          "en": "After cloud-EMR regulation took effect, Epic, the largest US EMR vendor, paired Epic Cloud with Google Cloud (then the only vendor with an in-Taiwan data center) to drive healthcare cloud adoption, initially targeting hospital groups and smaller hospitals. This shows Taiwan's large hospitals still rely mainly on self-built or on-premise EMR, while cloud and international EMR are beginning to penetrate.",
          "zh": "電子病歷上雲法規上路後,全美最大 EMR 商 Epic 的雲端服務結合 Google Cloud(當時唯一在台落地資料中心廠商)推動醫療業上雲,初期目標為醫院集團與小型醫院。反映台灣大型醫院 EMR 仍以自研/本地部署為主,但雲端與國際 EMR 滲透正在起步。"
        },
        "tags": [
          "雲端EMR",
          "Epic",
          "GoogleCloud",
          "國際EMR"
        ],
        "url": "https://www.inside.com.tw/article/28368-epic-cloud"
      },
      {
        "slug": "public-cloud-regions",
        "category": "cloud",
        "title": {
          "en": "Public Cloud Regions in Taiwan (Healthcare)",
          "zh": "公有雲在台落地(醫療)"
        },
        "summary": {
          "en": "AWS, Azure and Google Cloud have all built Taiwan regions, letting healthcare keep data in-country and accelerate cloud adoption.",
          "zh": "AWS、Azure、Google Cloud 三大公雲皆已在台設立區域,使醫療資料得以留存境內並加速上雲。"
        },
        "overview": {
          "en": "AWS announced a multibillion-dollar Asia Pacific (Taipei) region in June 2024 — its 40th globally, launching 2025 with three availability zones supporting healthcare and finance compliance. Microsoft Azure opened Taiwan North (its 66th region) in November 2024, partnering to make Taiwan a future-healthcare showcase. Google Cloud has run a Taiwan data center since 2013 and collaborated with NHI on AI medical research. Local landing lets sensitive medical data be stored in-country, strengthening data sovereignty.",
          "zh": "AWS 於 2024 年 6 月宣布投資數十億美元設台北區域(第 40 個全球區域,2025 上線,含三可用區,支援醫療與金融法遵)。Microsoft Azure 於 2024 年 11 月啟用首座台灣區域「Taiwan North」(第 66 個區域),並推動台灣成未來醫療示範場域。Google Cloud 自 2013 在台設資料中心,曾與健保署合作 AI 醫療研究。三雲落地使敏感醫療資料可在地儲存,強化資料主權。"
        },
        "tags": [
          "AWS",
          "Azure",
          "GCP",
          "資料主權",
          "法遵"
        ],
        "url": "https://www.ithome.com.tw/news/166708"
      },
      {
        "slug": "tw-core-ig",
        "category": "interop",
        "title": {
          "en": "Taiwan Core Implementation Guide (TW Core IG)",
          "zh": "臺灣核心實作指引(TW Core IG)"
        },
        "summary": {
          "en": "The MOHW-led national base FHIR profile set on HL7 FHIR R4.0.1, the baseline for nationwide FHIR interoperability.",
          "zh": "衛福部資訊處主導、以 HL7 FHIR R4.0.1 為基礎的本土化核心實作指引,是全國 FHIR 互通的基準。"
        },
        "overview": {
          "en": "v1.0.0 was released on 2025-12-10, aligned with US Core and International Patient Summary 1.1.0, covering profiles, extensions, CapabilityStatement, logical models and dedicated terminology. The December 2025 update added an ECG profile and four LOINC codes. Since May 2024 it follows a formal one-to-two releases per year cadence plus a rolling CI-build. The MOHW DOIM oversees standard-setting, terminology maintenance, security profiling and adoption.",
          "zh": "v1.0.0 於 2025-12-10 發布,參考 US Core 與國際病人摘要(IPS)1.1.0,涵蓋 Profiles、Extensions、CapabilityStatement、邏輯模型與專屬術語。2025-12 更新新增 ECG Profile 與 4 項 LOINC 代碼。自 2024-05 起每年正式更版 1-2 次並維護持續建置版。衛福部資訊處負責標準制定、術語維護、資安規範與推廣應用。"
        },
        "tags": [
          "FHIR",
          "TW-Core",
          "HL7",
          "R4"
        ],
        "url": "https://twcore.mohw.gov.tw/ig/twcore/"
      },
      {
        "slug": "standards-platform",
        "category": "interop",
        "title": {
          "en": "Taiwan Medical Information Standards Platform",
          "zh": "臺灣醫療資訊標準大平臺"
        },
        "summary": {
          "en": "MOHW's national portal promoting FHIR, CQL and SMART, with downloadable SNOMED CT, LOINC and RxNorm terminology.",
          "zh": "衛福部啟動的全國醫療資訊標準入口,推動 FHIR、CQL、SMART 並提供術語資料集下載。"
        },
        "overview": {
          "en": "Positioned to lay the foundation for the next decade, the platform promotes three pillars — FHIR for data exchange, CQL for clinical quality language and SMART as a medical app framework — and hosts monthly-updated terminology datasets (SNOMED CT with 1M+ concepts, LOINC and RxNorm). MOHW and ITRI built an auto-coding prototype that tags records with SNOMED CT/LOINC/RxNorm plus confidence scores and provenance for coder review.",
          "zh": "定位為「為未來 10 年打基礎」,推動 FHIR(資料交換)、CQL(臨床品質語言)、SMART(醫療 App 框架)三大標準,並提供每月更新的三大術語資料集(SNOMED CT 逾百萬編碼、LOINC、RxNorm)。衛福部與工研院已開發自動標註原型,能對病歷自動標註 SNOMED CT/LOINC/RxNorm 並提供信心值與來源,供疾病分類管理師複核。"
        },
        "tags": [
          "FHIR",
          "CQL",
          "SMART",
          "治理"
        ],
        "url": "https://www.ithome.com.tw/news/167833"
      },
      {
        "slug": "eec",
        "category": "interop",
        "title": {
          "en": "Electronic Medical Record Exchange Center (EEC)",
          "zh": "電子病歷交換中心(EEC)"
        },
        "summary": {
          "en": "MOHW's nationwide cross-hospital EMR exchange; clinicians retrieve another hospital's past-6-month records with patient consent.",
          "zh": "衛福部建置的全國跨院電子病歷交換基礎設施,經病人同意可調閱他院近 6 個月病歷。"
        },
        "overview": {
          "en": "About 470 institutions across 22 counties plus offshore islands are connected, exchanging four document types: imaging and reports, blood-test reports, discharge summaries and outpatient records. Records use CDA R2, W3C electronic signatures and DICOM 3.0 for PACS; each hospital runs an independent gateway over the NHI VPN holding its own six-month records for index-based retrieval. Since 2022 MOHW has planned to migrate EEC from CDA toward a FHIR exchange platform.",
          "zh": "約 470 家機構介接(含 22 縣市與離島),交換 4 類單張:醫療影像及報告、血液檢驗報告、出院病摘、門診病歷。病歷轉為 CDA R2 標準格式、電子簽章採 W3C 格式、PACS 影像符合 DICOM 3.0,各院自建獨立閘道器透過健保 VPN 連線,存放自身近 6 個月病歷供他院經索引調閱。2022 年起衛福部規劃將 EEC 由 CDA 架構逐步轉為 FHIR 交換平台。"
        },
        "tags": [
          "EEC",
          "CDA-R2",
          "DICOM",
          "跨院"
        ],
        "url": "https://eec.mohw.gov.tw/"
      },
      {
        "slug": "cross-hospital-fhir-hub",
        "category": "interop",
        "title": {
          "en": "Cross-Hospital FHIR Data Hub",
          "zh": "跨院 FHIR 資料中台"
        },
        "summary": {
          "en": "An MOHW-led next-gen interoperability hub that passed technical verification in Dec 2025, the WWW of EMRs.",
          "zh": "衛福部主導、2025 年 12 月完成技術驗證的新一代跨院互通中台,被形容為「電子病歷界的 WWW」。"
        },
        "overview": {
          "en": "On 2025-12-15 three demonstration hospitals (Chung Shan, Chang Gung, Mackay) verified real-time cross-system interoperability. Given 40+ incompatible EMRs and a roughly NT$1.2 trillion national replacement cost, Taiwan chose an indigenous FHIR-conversion route over wholesale Epic adoption — building the TW Core standard, FHIR converters and servers, upgrading EEC gateways and linking the MOHW EEC. DOIM Director-General Li Chien-chang envisions a full ecosystem within ten years.",
          "zh": "2025-12-15 由三家示範醫院(中山、長庚、馬偕)完成即時跨系統病歷互通驗證。台灣有 40+ 套互不相通 EMR,單院換 Epic 等國際系統成本 25-30 億、全國逾 1.2 兆,故選自主 FHIR 轉換路線:建立 TW Core 標準、開發 FHIR 轉換器與伺服器、升級 EEC 閘道、串接衛福部 EEC。資訊處處長李建璋期待十年後形成完整生態圈。"
        },
        "tags": [
          "FHIR",
          "資料中台",
          "跨院",
          "互通驗證"
        ],
        "url": "https://geneonline.news/fhir-taiwan-2025/"
      },
      {
        "slug": "emr-exchange-ig",
        "category": "interop",
        "title": {
          "en": "EMR Exchange Document IG (EMR-IG)",
          "zh": "電子病歷交換單張實作指引(EMR-IG)"
        },
        "summary": {
          "en": "FHIR R4.0.1 and IPS-based IG defining Taiwan EMR document resources, bridging EEC's existing document types.",
          "zh": "基於 FHIR R4.0.1 與國際病人摘要的單張實作指引,銜接 EEC 既有單張交換需求。"
        },
        "overview": {
          "en": "Built on FHIR R4.0.1 and the International Patient Summary, the EMR-IG defines the resources and data elements for Taiwan EMR document exchange. It is currently v0.2.0 (CI-build) and is part of the MOHW twcore.mohw.gov.tw standards family alongside TW Core IG; early versions were maintained by a National Taipei University of Nursing and Health Sciences health-cloud team.",
          "zh": "基於 FHIR R4.0.1 及國際病人摘要(IPS)標準,定義適用台灣健康照護資料交換的電子病歷單張資源與資料項目。現為 v0.2.0(持續建置版),與 TW Core IG 同屬衛福部 twcore.mohw.gov.tw 標準體系;早期版本曾由臺北護理健康大學健康雲團隊維護。"
        },
        "tags": [
          "FHIR",
          "EMR-IG",
          "IPS",
          "病歷單張"
        ],
        "url": "https://twcore.mohw.gov.tw/ig/emr/"
      },
      {
        "slug": "nhi-fhir-igs",
        "category": "interop",
        "title": {
          "en": "NHI FHIR Implementation Guides",
          "zh": "健保署 FHIR 實作指引群"
        },
        "summary": {
          "en": "NHI's family of business-specific FHIR IGs built on TW Core, driving FHIR-format claims and review submissions.",
          "zh": "健保署在 TW Core 基礎上建立的健保業務 FHIR IG,推動院所以 FHIR 提交申報與審查。"
        },
        "overview": {
          "en": "Key IGs include the Taiwan NHI Prior Authorization Support IG (TWPAS) v1.2.3 (inheriting TW Core v0.3.2 on R4.0.1, covering cancer-drug and immunotherapy prior-auth, self-review and emergency reporting), the cancer-drug prior-auth IG, the base IG and the catastrophic-illness IG v1.0.1. 2025 results: 49 hospitals integrated for cancer-drug prior-auth (review as fast as one day), 38 for cancer catastrophic illness and 9 for NGS reporting.",
          "zh": "主要 IG 含「臺灣健保事前審查實作指引(TWPAS)v1.2.3」(繼承 TW Core v0.3.2、基於 R4.0.1,涵蓋癌藥/免疫製劑事前審查、自主審查、緊急報備)、癌症用藥事前審查 IG、基礎 IG、重大傷病 IG v1.0.1。2025 年成果:癌藥事前審查 49 家醫院介接(審查最快 1 天)、癌症重大傷病 38 家、NGS 申報 9 家。"
        },
        "tags": [
          "FHIR",
          "NHI",
          "事前審查",
          "健保"
        ],
        "url": "https://nhicore.nhi.gov.tw/pas/"
      },
      {
        "slug": "nhi-medicloud",
        "category": "interop",
        "title": {
          "en": "NHI MediCloud System (PharmaCloud)",
          "zh": "健保醫療資訊雲端查詢系統"
        },
        "summary": {
          "en": "National cloud query system; with three-card authentication clinicians query ~13 data categories in real time.",
          "zh": "全國性雲端查詢系統,醫師/藥師經三卡認證可即時查詢病人約 13 類就醫資料。"
        },
        "overview": {
          "en": "Evolved from the 2013 PharmaCloud and fully launched in 2017, it covers Western and Chinese medicine, labs and results, surgery, dental, allergy meds and imaging (CT/MRI). A cloud imaging-sharing platform launched in January 2018; images upload about 24 hours after exam and become retrievable in 24-48 hours, with cross-hospital image-report retrieval in about 25 seconds, saving an estimated NT$2 billion per year in duplicate tests. It requires patient NHI card plus clinician and institution cards. A November 2025 update added graphical lab and lung-screening queries and an AI image-report integration interface.",
          "zh": "由 2013 年雲端藥歷升級、2017 年全面上線,可查西藥、中藥、檢查檢驗及結果、手術、牙科處置、過敏藥物、CT/MRI 等醫療影像。2018 年 1 月建置雲端醫療影像分享平台,影像於檢查後約 24 小時上傳、24-48 小時可調閱,跨院調閱影像報告約 25 秒,每年估省健保約 20 億元重複檢查費用。查詢需健保卡加醫事人員卡加醫事機構卡三卡確認。2025 年 11 月新增檢驗結果與肺癌篩檢圖形化查詢及 AI 智慧影像報告整合介面。"
        },
        "tags": [
          "雲端藥歷",
          "醫療影像",
          "NHI",
          "三卡認證"
        ],
        "url": "https://www.nhi.gov.tw/ch/np-2721-1.html"
      },
      {
        "slug": "dicom-imaging-interop",
        "category": "interop",
        "title": {
          "en": "Medical Imaging & DICOM Interoperability",
          "zh": "醫療影像與 DICOM 互通"
        },
        "summary": {
          "en": "DICOM/DICOMweb underpins imaging interoperability, validated at the annual MITW Connectathon.",
          "zh": "以 DICOM/DICOMweb 為醫療影像互通基礎,透過年度 MITW 聯測松進行跨系統互通測試。"
        },
        "overview": {
          "en": "Taiwan uses DICOM and DICOMweb as the basis for imaging interoperability. The 2024 MITW Connectathon tested cross-system interoperability on HL7 FHIR, DICOMweb and ISO/IEEE 11073, plus an AI-model-sharing and format-interoperability sandbox and an open-source digital-pathology viewer and annotator. It is organized by the Taiwan medical-imaging standards society (dicom.org.tw); EEC PACS exchange also requires DICOM 3.0.",
          "zh": "台灣以 DICOM/DICOMweb 為醫療影像互通基礎。2024 臺灣醫學資訊聯測松以 HL7 FHIR、DICOMweb、ISO/IEEE 11073 為基礎進行跨系統測試,並提供 AI 模型分享與格式互通沙盒、開源數位病理影像瀏覽與標註工具。由社團法人台灣醫療影像資訊標準協會(dicom.org.tw)主辦,EEC 之 PACS 影像交換亦要求符合 DICOM 3.0。"
        },
        "tags": [
          "DICOM",
          "DICOMweb",
          "Connectathon",
          "數位病理"
        ],
        "url": "https://mitw.dicom.org.tw/2024/Specification"
      },
      {
        "slug": "clinical-terminologies",
        "category": "interop",
        "title": {
          "en": "Clinical Terminologies & Classifications",
          "zh": "臨床術語與分類標準"
        },
        "summary": {
          "en": "Taiwan adopts SNOMED CT, LOINC, RxNorm and ICD-10-CM/PCS, centrally maintained as the semantic base for FHIR.",
          "zh": "台灣採用 SNOMED CT、LOINC、RxNorm、ICD-10-CM/PCS 等國際術語,作為 FHIR 互通的語意基礎。"
        },
        "overview": {
          "en": "SNOMED CT has 1M+ concepts (far finer than ICD-10's ~98k); MOHW runs SNOMED CT Taiwan 2025 seminars and workshops. LOINC, RxNorm and SNOMED CT datasets are downloadable with monthly updates on the standards platform. NHI leads ICD-10-CM/PCS adoption with a 2023 edition and 2014/2021 Chinese (draft) versions. The exact status of a national SNOMED International member license is to be confirmed.",
          "zh": "SNOMED CT 逾百萬編碼(較 ICD-10 約 9.8 萬筆精細);衛福部辦理 SNOMED CT Taiwan 2025 系列研討與工作坊。LOINC、RxNorm 與 SNOMED CT 資料集於標準大平台每月更新可下載。健保署主導 ICD-10-CM/PCS 採用,已有 2023 年版及 2014/2021 年中文版(初稿)。國家層級 SNOMED International 授權最新狀態待查。"
        },
        "tags": [
          "SNOMED-CT",
          "LOINC",
          "RxNorm",
          "ICD-10"
        ],
        "url": "https://aicenter.mohw.gov.tw/AC/cp-7200-83576-208.html"
      },
      {
        "slug": "insighter-taiwan-adventist-fhir",
        "category": "interop",
        "title": {
          "en": "Insighter + Taiwan Adventist Hospital FHIR Go-Live",
          "zh": "資慧科技 + 臺安醫院 FHIR 落地案例"
        },
        "summary": {
          "en": "In 2026 Taiwan Adventist Hospital with Insighter first converted full clinical data to FHIR per the national TW Core IG.",
          "zh": "2026 年臺安醫院攜手資慧科技,率先依國家 TW Core IG 將完整醫療資料即時轉 FHIR 並用於臨床。"
        },
        "overview": {
          "en": "Taiwan Adventist Hospital became the first institution in Taiwan to convert its full clinical dataset to FHIR per the national TW Core IG in real time for live clinical use. It deployed Insighter's Insight system to unify summaries, lab reports, orders, medications, surgical records and imaging reports; the FHIR conversion is standard-agnostic and supports IG version migration.",
          "zh": "臺安醫院成為全台率先依「台灣核心實作指引(TW Core IG)」國家標準,將完整醫療資料即時轉換為 FHIR 格式並實際應用於臨床的醫療機構。同步導入資慧科技 Insight 系統,整合病歷摘要、檢驗報告、醫囑、用藥、手術紀錄與影像報告;其 FHIR 轉換方案不限特定標準、支援 IG 版本遷移。"
        },
        "tags": [
          "FHIR",
          "TW-Core-IG",
          "EMR",
          "臨床落地"
        ],
        "url": "https://www.ithome.com.tw/pr/175696"
      },
      {
        "slug": "apex-kaohsiung-vgh-fhir",
        "category": "interop",
        "title": {
          "en": "Apex + Kaohsiung VGH FHIR Smart Healthcare Appliance",
          "zh": "普鴻資訊 + 高雄榮總 FHIR 智慧醫療機"
        },
        "summary": {
          "en": "In 2026 Kaohsiung VGH first deployed Apex's FHIR smart healthcare appliance, bringing finance-grade security to data exchange.",
          "zh": "2026 年高雄榮總率先導入普鴻資訊「FHIR 智慧醫療機」,將金融級資安帶入醫療資料交換。"
        },
        "overview": {
          "en": "Apex Information, with a finance-grade security background, entered healthcare with a FHIR smart healthcare appliance for secure FHIR-based data exchange, and Kaohsiung VGH was the first adopter. The case reflects 2026 industry trends of security shifting from compliance to resilience and FHIR moving from a standard to an ecosystem.",
          "zh": "普鴻資訊以金融級資安背景跨入醫療,推出「FHIR 智慧醫療機」,協助醫療資料以 FHIR 標準安全交換;高雄榮總為率先導入單位。反映 2026 年「資安從合規走向韌性」與「FHIR 從標準走向生態」的產業趨勢。"
        },
        "tags": [
          "FHIR",
          "資安",
          "資料交換",
          "高雄榮總"
        ],
        "url": "https://infosecu.technews.tw/2026/04/29/fhir"
      },
      {
        "slug": "my-health-bank",
        "category": "data",
        "title": {
          "en": "My Health Bank (MHB)",
          "zh": "健康存摺"
        },
        "summary": {
          "en": "NHI's personal health-record service since 2014; a 2019 SDK lets third-party apps integrate data under user authorization.",
          "zh": "健保署 2014 年建置的個人健保就醫紀錄服務,2019 年推出 SDK 讓第三方 App 經授權介接。"
        },
        "overview": {
          "en": "My Health Bank lets citizens view and download their visit, medication, lab and imaging data, with about 12.12 million users. The SDK (completed May 2019) has 31 integrating organizations and 64 launched apps (including NTUH, Taipei Veterans and TMU apps) for chronic-disease management, employee health and tele-education. Notably, MHB and NHI claims data remain non-FHIR, creating a format gap with MOHW's FHIR push.",
          "zh": "健康存摺讓民眾線上取得就醫、用藥、檢驗、影像等資料,使用者約 1,212 萬人。SDK(2019 年 5 月完成)已有 31 家機構介接、推出 64 款 App(含台大、北榮、北醫等醫院 App),用於慢病管理、員工健康管理、遠距衛教。值得注意:健康存摺/健保申報資料仍非 FHIR 格式,與衛福部 EEC 力推的 FHIR 交換之間存在格式落差。"
        },
        "tags": [
          "PHR",
          "健康存摺",
          "SDK",
          "個資授權"
        ],
        "url": "https://www.ithome.com.tw/news/154906"
      },
      {
        "slug": "nhird",
        "category": "data",
        "title": {
          "en": "NHI Research Database (NHIRD)",
          "zh": "健保資料庫"
        },
        "summary": {
          "en": "The whole-population claims and encounter database, a major secondary-data resource reshaped by a 2022 court ruling.",
          "zh": "全民健保長期累積的全人口理賠與就醫資料庫,因 2022 年釋憲案而改革去識別化與監督機制。"
        },
        "overview": {
          "en": "NHIRD provides on-site analysis in secure independent zones and is a major secondary-data source for Taiwanese and global research. On 2022-08-12 the Constitutional Court ruling No. 13/2022 found it insufficiently protective of informational privacy: PDPA Article 6 is constitutional and academic secondary use may continue, but laws must be amended (or a special law enacted) within three years to establish independent oversight and define release controls, noting existing de-identification fails the unlinkability standard.",
          "zh": "健保資料庫提供獨立作業區現場分析服務,是台灣與全球醫療研究的重要次級資料來源。2022-08-12 憲法法庭 111 憲判 13 號判決認定其對資訊隱私權保障不足:個資法第 6 條不違憲、得續做學術目的外利用,但須於 3 年內修法或立專法,建立個資保護獨立監督機制並明定釋出要件;判決亦指既有去識別化未達「去連結」標準。"
        },
        "tags": [
          "NHIRD",
          "次級資料",
          "釋憲",
          "去識別化"
        ],
        "url": "https://nhird.nhri.edu.tw/apply_00.html"
      },
      {
        "slug": "mohw-data-science-center",
        "category": "data",
        "title": {
          "en": "MOHW Health and Welfare Data Science Center",
          "zh": "衛生福利資料科學中心"
        },
        "summary": {
          "en": "A MOHW integrated data value-added platform combining health and welfare data for de-identified academic and industry analysis.",
          "zh": "衛福部統計處主管的整合性資料加值平台,整合醫療保健與社會福利資料供去識別化分析申請。"
        },
        "overview": {
          "en": "The center launched the National Health Information Project in 2008 and was established in 2011 (later renamed). It operates 10 regional sub-centers with secure independent work zones, ISO 27001 certified. Applications go through apre.mohw.gov.tw; de-identification involves recoding, encryption, masking and field changes, and data release outside secure zones requires third-party de-identification process certification. As special-category personal data, applications are not open to foreign nationals; the latest rules were published 2026-05-28.",
          "zh": "中心 2008 年啟動國民健康資訊建設(NHIP),2011 年成立(後更名為資料科學中心),已成立 10 處研究分中心建置獨立作業區,並通過 ISO 27001 驗證。申請須經 apre.mohw.gov.tw;去識別化含重新編碼加密、模糊化與增刪欄位,資料外釋須經第三方驗證取得去識別化過程驗證證書。資料屬特種個資,不開放外籍人士申請,最新規定為 2026-05-28 公告版。"
        },
        "tags": [
          "資料科學中心",
          "ISO27001",
          "去識別化",
          "次級資料"
        ],
        "url": "https://dep.mohw.gov.tw/DOS/cp-5119-59201-113.html"
      },
      {
        "slug": "nbct",
        "category": "data",
        "title": {
          "en": "National Biobank Consortium of Taiwan (NBCT)",
          "zh": "國家級人體生物資料庫整合平台"
        },
        "summary": {
          "en": "An NHRI-built national platform integrating institutional biobanks with standardized specimen request and release.",
          "zh": "國衛院建置的全國生物資料庫整合平台,串接各院所生物資料庫並建立標準化檢體申請釋出流程。"
        },
        "overview": {
          "en": "NBCT integrates 38 biobanks (NTU Hsinchu added as the 38th member in 2025), with cumulative enrollment of 1,168,677 cases (231,738 tumor and 936,939 non-tumor). Specimens include blood, frozen tissue, paraffin sections, urine, effusions, bone marrow and cerebrospinal fluid. As of April 2024 there were about 969k cases and 180 applications (142 academic, 32 industry). It launched online real-time query in 2025, with a big-data value-added research program call beginning 2026.",
          "zh": "NBCT 整合 38 個生物資料庫(2025 年新增臺大新竹分院為第 38 個成員),累計收案 1,168,677 例(腫瘤 231,738/非腫瘤 936,939)。檢體含血液、冷凍組織、石蠟切片、尿液、胸腹水、骨髓液、腦脊髓液等。2024 年 4 月約 96.9 萬收案、累計 180 件申請(學術 142/產業 32)。2025 啟動線上即時查詢,2026 啟動「加值運用大數據研究計畫」徵求。"
        },
        "tags": [
          "NBCT",
          "國衛院",
          "生物資料庫",
          "檢體"
        ],
        "url": "https://nbct.nhri.org.tw/"
      },
      {
        "slug": "taiwan-biobank",
        "category": "data",
        "title": {
          "en": "Taiwan Biobank (TWB)",
          "zh": "臺灣人體生物資料庫"
        },
        "summary": {
          "en": "Taiwan's largest population biobank, holding longitudinal data for 250,000+ participants for precision medicine.",
          "zh": "台灣最大的本土族群人體生物資料庫,收集逾 25 萬名參與者的縱貫性資料,支援精準醫療。"
        },
        "overview": {
          "en": "Taiwan Biobank integrates longitudinal data for 250,000+ individuals, including physical exams, biochemistry values, health questionnaires, value-added specimen analyses and advanced follow-up imaging. A rare large East-Asian-population biobank, it often serves as a base for cross-database convergence research, including with the NHIRD.",
          "zh": "臺灣人體生物資料庫整合逾 25 萬人縱貫性資料,含體檢、生化檢驗值、健康問卷、檢體加值分析與進階追蹤醫療影像。為國際罕見的東亞族群大型 biobank,常作為跨資料庫(含 NHIRD)整合研究的基礎。"
        },
        "tags": [
          "TaiwanBiobank",
          "精準醫療",
          "基因",
          "族群研究"
        ],
        "url": "https://www.biobank.org.tw/"
      },
      {
        "slug": "three-ai-centers",
        "category": "data",
        "title": {
          "en": "Three National Smart-Healthcare AI Centers",
          "zh": "臺灣智慧醫療三大 AI 中心"
        },
        "summary": {
          "en": "Three MOHW AI centers tackling responsible-AI deployment, clinical-AI evidence verification and reimbursement impact.",
          "zh": "衛福部成立的三大 AI 中心,分別處理負責任 AI 落地、臨床 AI 取證驗證與健保給付影響評估。"
        },
        "overview": {
          "en": "The three centers are the Responsible AI Implementation Center, the Clinical AI Evidence Verification Center and the AI Impact Research Center. The verification center (DOIM and TFDA) subsidizes five medical centers so AI developers can validate on Taiwan-representative large-scale data and shorten time to certification; the impact center runs experimental and control clinical trials to inform NHI reimbursement. It is part of the Healthy Taiwan deep-cultivation plan.",
          "zh": "三中心為負責任 AI 落地中心、臨床 AI 取證驗證中心、AI 影響研究中心。臨床 AI 取證驗證中心由資訊處與 TFDA 合推,補助 5 家醫學中心,供 AI 業者以更具台灣族群代表性的大規模資料驗證、縮短取證時間;AI 影響研究中心以實驗組/對照組臨床試驗比較效益,作為健保給付決策依據。屬「健康台灣深耕計畫」範疇。"
        },
        "tags": [
          "AI中心",
          "取證驗證",
          "健保給付",
          "RWD"
        ],
        "url": "https://aicenter.mohw.gov.tw/AC/lp-7200-208-1-60.html"
      },
      {
        "slug": "healthcare-cybersecurity",
        "category": "security",
        "title": {
          "en": "Healthcare Cybersecurity & Critical-Infrastructure Protection",
          "zh": "醫療資安與關鍵基礎設施防護"
        },
        "summary": {
          "en": "Healthcare is critical infrastructure under the Cybersecurity Management Act; H-ISAC/H-CERT and zero-trust adoption accelerate amid 2025 ransomware.",
          "zh": "醫療業被納入資通安全管理法關鍵基礎設施,衛福部建置 H-ISAC/H-CERT,2025 勒索病毒促使加速導入零信任。"
        },
        "overview": {
          "en": "MOHW established H-ISAC in 2018 and H-CERT in 2019, expanding threat-intel sharing from emergency-responsibility hospitals to small and medium hospitals nationwide. In 2025 multiple northern and central hospitals were hit by ransomware, now the top threat; about 20% of hospitals plan zero-trust identity and device authentication and about 8.9% plan zero-trust network segmentation, using IAM, MFA, micro-segmentation and continuous monitoring. MOHW DOIM also issued a primary-care cybersecurity reference guide in August 2020.",
          "zh": "衛福部 2018 建置醫療資安資訊分享及分析中心(H-ISAC)、2019 建置通報應變中心(H-CERT),並將情資分享網絡從急救責任醫院擴大至全國中小型醫院。2025 年北中部多家醫院遭勒索病毒攻擊,勒索軟體為首要威脅;約 2 成醫院計畫導入零信任身分/設備鑑別、約 8.9% 規劃零信任網路分段,技術含 IAM、MFA、微分段、持續監控。資訊處另訂《基層醫療院所資安防護參考指引》(2020-08)。"
        },
        "tags": [
          "資安",
          "零信任",
          "H-ISAC",
          "勒索病毒"
        ],
        "url": "https://www.ithome.com.tw/article/162262"
      },
      {
        "slug": "deidentification-privacy",
        "category": "security",
        "title": {
          "en": "Health-Data De-identification & Privacy Governance",
          "zh": "醫療資料去識別化與隱私治理"
        },
        "summary": {
          "en": "Secondary use is predicated on de-identification per the PDPA and CNS 29100/29191; a 2022 ruling mandated stronger oversight within 3 years.",
          "zh": "醫療次級資料以去識別化為前提,依個資法與 CNS 29100/29191;2022 釋憲案要求三年內補強監督與管制。"
        },
        "overview": {
          "en": "De-identification process controls follow the CNS 29100 and CNS 29191 national standards, slated to become national standards. The 2022-08-12 ruling No. 13/2022 requires legal reform within three years to set up independent privacy oversight and define NHIRD release controls, noting existing methods (ID encryption plus partial masking) fall short of true unlinkability. The Data Science Center requires third-party de-identification certification before external data release.",
          "zh": "去識別化過程驗證之控制措施參照 CNS 29100、CNS 29191 國家標準,並規劃發展為國家標準。2022-08-12 111 憲判 13 號要求 3 年內修法/立專法,建立個資保護獨立監督機制並明定健保資料釋出要件;判決指既有去識別化(身分證加密加部分模糊化)未達「去連結」標準。資料科學中心採第三方驗證取得去識別化過程驗證證書方得資料外釋。"
        },
        "tags": [
          "去識別化",
          "CNS-29191",
          "個資法",
          "隱私治理"
        ],
        "url": "https://stli.iii.org.tw/article-detail.aspx?no=55&tp=3&i=158&d=8261"
      },
      {
        "slug": "itri-vendor-ecosystem",
        "category": "security",
        "title": {
          "en": "ITRI & the Standards Vendor Ecosystem",
          "zh": "工研院與介接標準的廠商生態系"
        },
        "summary": {
          "en": "An ecosystem of integrators, PACS vendors and medical-AI startups around FHIR, DICOM, HIS-to-cloud and the MHB SDK, with MOHW subsidies.",
          "zh": "圍繞 FHIR、DICOM、HIS 上雲與健康存摺 SDK 的系統整合商、PACS 廠商與 AI 醫療新創生態系,衛福部以補助扶植。"
        },
        "overview": {
          "en": "Around FHIR, DICOM, HIS-to-cloud and the My Health Bank SDK, an ecosystem of system integrators, PACS/imaging vendors and medical-AI startups has formed. ITRI built the PAUL shared HIS digital chassis and the SNOMED CT/LOINC/RxNorm auto-coder; EBM provides enterprise PACS and is active in EEC and DICOM standards; the primary-care HIS-to-cloud program approved 16 IT vendors targeting about 830 institutions, and the MHB SDK ecosystem spans 31 organizations and 64 apps.",
          "zh": "圍繞 FHIR、DICOM、HIS 上雲與健康存摺 SDK,形成由系統整合商、PACS/影像廠商與 AI 醫療新創組成的供應生態系。工研院開發 HIS 共用數位底盤 PAUL 與 SNOMED CT/LOINC/RxNorm 自動標註;商之器提供企業級 PACS 並參與 EEC 與 DICOM 標準;基層 HIS 上雲計畫核定 16 家資服廠商、預計導入約 830 家院所;健康存摺 SDK 生態涵蓋 31 家機構與 64 款 App。"
        },
        "tags": [
          "工研院",
          "PAUL",
          "產業生態",
          "SDK"
        ],
        "url": "https://www.cio.com.tw/97142/"
      }
    ]
  },
  {
    "slug": "medical-ai",
    "layout": "gallery",
    "icon": "smart_toy",
    "title": {
      "en": "Medical AI & Telehealth",
      "zh": "醫療 AI 與遠距應用"
    },
    "subtitle": {
      "en": "Taiwan's SaMD, imaging/pathology AI, surgical robotics, clinical decision support, telemedicine and health apps, with TFDA/FDA/CE clearance status where known.",
      "zh": "台灣醫療器材軟體（SaMD）、影像／病理 AI、手術機器人、臨床決策支援、遠距醫療與健康 App，並盡量標註 TFDA/FDA/CE 核准狀態。"
    },
    "categories": [
      {
        "key": "imaging",
        "en": "Imaging AI",
        "zh": "影像 AI"
      },
      {
        "key": "pathology",
        "en": "Pathology AI",
        "zh": "病理 AI"
      },
      {
        "key": "surgery",
        "en": "Surgical Navigation / Robotics",
        "zh": "手術導航 / 機器人"
      },
      {
        "key": "cdss",
        "en": "Clinical Decision Support",
        "zh": "臨床決策支援"
      },
      {
        "key": "telemed",
        "en": "Telemedicine",
        "zh": "遠距醫療"
      },
      {
        "key": "apps",
        "en": "Health Apps / Chronic Care",
        "zh": "健康 App / 慢病管理"
      },
      {
        "key": "mental",
        "en": "Mental Health / DTx",
        "zh": "心理健康 / 數位療法"
      }
    ],
    "items": [
      {
        "slug": "aetherai",
        "category": "pathology",
        "title": {
          "en": "aetherAI",
          "zh": "雲象科技 aetherAI"
        },
        "summary": {
          "en": "Asia-leading digital-pathology and medical-imaging AI; flagships in bone-marrow smear and colonoscopy polyp detection.",
          "zh": "亞洲領先的數位病理與醫療影像 AI 公司，旗艦含骨髓抹片與大腸鏡瘜肉偵測。"
        },
        "overview": {
          "en": "Products include the aetherSlide digital-pathology platform, aetherAI Hema bone-marrow smear classifier (with NTUH; TFDA + CE Oct 2021) and aetherAI Endo real-time colonoscopy polyp detection (with NTUH & Cathay; TFDA Sep 2022, ~95.8% accuracy), plus nasopharyngeal-cancer pathology AI with Chang Gung (>97%). Listed on Taiwan's emerging market 2024-11-26 (Quanta ~15% stake); approved for main-board listing Jan 2026. Clearances: TFDA and EU CE on Hema and TFDA on Endo; other markets TBD.",
          "zh": "提供 aetherSlide 數位病理平台、aetherAI Hema 骨髓抹片分類計數系統（與台大合作，2021-10 獲 TFDA 與 CE）、aetherAI Endo 大腸鏡即時瘜肉偵測（與台大、國泰合作，2022-09 獲 TFDA，準確率約 95.8%），並與長庚合作鼻咽癌病理 AI（準確率 >97%）。2024-11-26 登錄興櫃（廣達持股約 15%），2026-01 獲准上市。核准狀態：Hema 取得 TFDA 與歐盟 CE、Endo 取得 TFDA，其餘市場待查。"
        },
        "tags": [
          "病理AI",
          "內視鏡AI",
          "影像AI",
          "TFDA",
          "CE",
          "興櫃"
        ],
        "url": "https://www.aetherai.com/"
      },
      {
        "slug": "ever-fortune-ai",
        "category": "imaging",
        "title": {
          "en": "Ever Fortune.AI",
          "zh": "長佳智能 Ever Fortune.AI"
        },
        "summary": {
          "en": "Multi-specialty medical-AI diagnostics maker, among Taiwan's leaders by license count (22 TFDA, 13 US FDA).",
          "zh": "全科別醫療 AI 輔助診斷廠，取證數量為國產領先之一（TFDA 22、FDA 13）。"
        },
        "overview": {
          "en": "Data-driven medical AI spanning bone-age, ECG analysis (arrhythmia auto-detection; TFDA-cleared) and acute-MI/STEMI detection software (TFDA-cleared). In Dec 2025 obtained two more TFDA clearances: a radiotherapy organ auto-contouring system (182 organs-at-risk across CT/MRI) and a brain DAT-SPECT computer-aided detection platform. Clearances: cumulative 53 domestic/foreign licenses (22 TFDA, 13 US FDA); expanding into Southeast Asia.",
          "zh": "以醫療大數據驅動 AI，產品涵蓋骨齡、心電圖分析（自動辨識心率異常，已獲 TFDA 智慧醫材證）、急性心肌梗塞（STEMI）偵測軟體（獲 TFDA）。2025-12 再獲兩項 TFDA 核准：放射治療器官自動勾勒系統（全身 182 個危及器官，整合 CT／MRI）與腦部多巴胺轉運體斷層掃描電腦輔助偵測平台。核准狀態：累計 53 張國內外許可證（TFDA 22、美國 FDA 13），並拓展東南亞。"
        },
        "tags": [
          "影像AI",
          "心電圖AI",
          "CADe",
          "放療勾勒",
          "TFDA",
          "FDA"
        ],
        "url": "https://news.gbimonthly.com/tw/enterprise/show.php?num=72066"
      },
      {
        "slug": "amcad-biomed",
        "category": "imaging",
        "title": {
          "en": "AmCad BioMed",
          "zh": "安克生醫 AmCad BioMed"
        },
        "summary": {
          "en": "World's first company to gain US FDA clearance for ultrasound computer-aided diagnosis (CAD); flagship thyroid AI.",
          "zh": "全球首家獲美國 FDA 核准超音波電腦輔助診斷（CAD）的廠商，旗艦為甲狀腺 AI。"
        },
        "overview": {
          "en": "Flagship AmCAD-UT thyroid ultrasound AI works across vendors/machines; NTUH studies report high malignancy-detection performance. Deployed at 30+ Taiwan hospitals and entering the NHI reimbursement sandbox. Its handheld POCUS AmCAD-UT LIVE with real-time AI was procured by Jordan's Royal Medical Services. Clearances: Taiwan TFDA, US FDA, EU CE and China approvals.",
          "zh": "旗艦「安克甲狀偵」（AmCAD-UT）為跨廠牌、跨機台的甲狀腺超音波 AI 判讀軟體；台大研究指惡性腫瘤辨識率高。已導入全台逾 30 家院所，並進入健保沙盒。掌上型超音波 AmCAD-UT LIVE（POCUS）結合即時 AI，獲約旦皇室醫療系統採用。核准狀態：取得台灣 TFDA、美國 FDA、歐盟 CE 與中國上市許可。"
        },
        "tags": [
          "超音波AI",
          "甲狀腺",
          "CAD",
          "TFDA",
          "FDA",
          "CE"
        ],
        "url": "https://www.amcad.com.tw/"
      },
      {
        "slug": "taihao-medical",
        "category": "imaging",
        "title": {
          "en": "TaiHao Medical",
          "zh": "太豪生醫 TaiHao Medical"
        },
        "summary": {
          "en": "Ultrasound and LDCT imaging AI; breast-ultrasound detection + diagnosis cleared in US, Japan and China.",
          "zh": "專注超音波與 LDCT 影像 AI；乳房超音波偵測加診斷取得美、日、中核准。"
        },
        "overview": {
          "en": "Founded 2013; obtained Japan's first breast-ultrasound AI screening clearance (2020) and a US FDA breast-ultrasound lesion detection + diagnosis AI device (late 2021, claimed world-first combining detection and CADx in ultrasound). Clinical sensitivity ~93.85% (higher for Asian populations). Clearances: cleared in US FDA, Japan and China (NMPA); Taiwan TFDA status to be confirmed (TBD).",
          "zh": "2013 年成立，2020 年取得日本首張乳房超音波 AI 篩查醫材證，2021 年底取得美國 FDA 乳房超音波病灶偵測與診斷 AI 醫材（號稱全球首套同具偵測與輔助診斷的超音波高階醫材）。臨床敏感度可達約 93.85%（亞洲人種更高）。核准狀態：通過美國 FDA、日本、中國（NMPA 註冊證）；台灣 TFDA 核准狀態待查。"
        },
        "tags": [
          "超音波AI",
          "乳癌",
          "LDCT",
          "FDA",
          "NMPA",
          "CADx"
        ],
        "url": "https://taihaomed.com/"
      },
      {
        "slug": "acer-medical",
        "category": "imaging",
        "title": {
          "en": "Acer Medical",
          "zh": "宏碁智醫 Acer Medical"
        },
        "summary": {
          "en": "Acer Group's AI-device unit; VeriSee DR was Taiwan's first ophthalmology AI device; also offers aiMed voice-to-record.",
          "zh": "宏碁集團旗下 AI 醫材公司；VeriSee DR 為台灣首張眼科 AI 醫材，並推 aiMed 病歷語音轉錄。"
        },
        "overview": {
          "en": "Flagship VeriSee DR (diabetic-retinopathy AI screening, with NTUH) was Taiwan's first ophthalmology AI device (Sep 2020, ~93% accuracy), deployed at 100+ hospitals; an AMD-screening AI gained TFDA in 2022 and VeriSee also screens glaucoma. VeriOsteo OP predicts bone density/osteoporosis risk from a chest X-ray in 30s (AUC 0.946, ~89% accuracy). aiMed converts clinician speech/text into structured records; an MOU with Evergreen pharmacy chain brings devices into community pharmacies. Clearances: VeriSee DR TFDA Sep 2020 plus Thailand/Indonesia/Philippines; VeriOsteo OP TFDA Nov 2023 plus Singapore/Indonesia; cumulative 10 device licenses across 8 markets, ~200 hospitals.",
          "zh": "旗艦 VeriSee DR（糖尿病視網膜病變 AI 篩檢，與台大合作）2020-09 獲台灣首張眼科 AI 醫材證，準確率約 93%，導入逾 100 家院所；2022 年再獲年齡相關性黃斑部病變（AMD）AI 篩檢 TFDA 證，VeriSee 並可篩檢青光眼。VeriOsteo OP「智骨篩」以胸部 X 光 30 秒預測骨密度／骨鬆風險（AUC 0.946、準確率約 89%）。aiMed 將醫護語音／文字轉為結構化病歷，並與長青連鎖藥局簽 MOU 導入社區藥局。核准狀態：VeriSee DR 2020-09 獲 TFDA，並取得泰國、印尼、菲律賓許可；VeriOsteo OP 2023-11 獲 TFDA，並取得新加坡、印尼證；累計 10 張醫材證、8 個市場、近 200 家院所。"
        },
        "tags": [
          "眼科AI",
          "放射AI",
          "骨密度",
          "病歷語音",
          "TFDA",
          "國際化"
        ],
        "url": "https://www.acer-medical.com/"
      },
      {
        "slug": "brain-navi-naotrac",
        "category": "surgery",
        "title": {
          "en": "Brain Navi (NaoTrac)",
          "zh": "鈦隼生物科技 NaoTrac"
        },
        "summary": {
          "en": "Taiwan's first brain-surgery navigation robot NaoTrac, combining AI and a robotic arm.",
          "zh": "台灣首套腦部手術導航機器人 NaoTrac，結合 AI 與機械臂。"
        },
        "overview": {
          "en": "Founded 2015 in Hsinchu Biomedical Park. Flagship NaoTrac uses SMART non-contact, frameless auto image-registration to align patient anatomy with pre-op images in seconds, for brain biopsy, tumor ablation, endoscopic intervention, EVD, SEEG and DBS. Clearances: CE (Apr 2021), TFDA (2022) and US FDA 510(k) (Stereotaxic Guiding Surgical Device) — Taiwan's first brain-surgery navigation robot to win that clearance; SGS provided key testing.",
          "zh": "2015 年成立於新竹生醫園區。旗艦 NaoTrac 以 SMART 非接觸、無框架自動影像對位技術，數秒完成病患解剖與術前影像對位，應用於腦部切片、腫瘤消融、內視鏡介入、EVD、SEEG、DBS 等。核准狀態：CE 2021-04、TFDA 2022 核准，並取得美國 FDA 510(k)（Stereotaxic Guiding Surgical Device 類別），為台灣首套獲此認證的腦部手術導航機器人；SGS 提供關鍵測試。"
        },
        "tags": [
          "手術導航",
          "手術機器人",
          "神經外科",
          "TFDA",
          "FDA",
          "CE"
        ],
        "url": "https://brainnavi.com/"
      },
      {
        "slug": "ebm-technologies",
        "category": "imaging",
        "title": {
          "en": "EBM Technologies",
          "zh": "商之器 EBM Technologies"
        },
        "summary": {
          "en": "PACS leader founded 1988 (~40% domestic share), adding AI value to imaging infrastructure.",
          "zh": "1988 年成立的 PACS 大廠（國內市占約 40%），以 AI 加值影像基礎建設。"
        },
        "overview": {
          "en": "Core products are PACS, EMR, radiology information systems and cloud platforms, with AI collaboration programs. Positioned as the infrastructure layer connecting hospital imaging with deployed AI models. Clearances: its mobile imaging viewer iDO Viewer holds a TFDA Class II clearance.",
          "zh": "主力為醫療影像儲傳系統（PACS）、電子病歷、放射資訊系統與雲端平台，並推動 AI 合作計畫。定位為串接醫院影像與 AI 模型落地的基礎平台層。核准狀態：行動醫療影像軟體 iDO Viewer 取得 TFDA 第二類醫材銷售許可。"
        },
        "tags": [
          "PACS",
          "影像平台",
          "行動影像",
          "TFDA"
        ],
        "url": "https://www.ebmtech.com/"
      },
      {
        "slug": "vysioneer-vbrain",
        "category": "imaging",
        "title": {
          "en": "Vysioneer (VBrain)",
          "zh": "醫隼智慧 Vysioneer VBrain"
        },
        "summary": {
          "en": "VBrain — world's first FDA-cleared tumor auto-contouring AI for radiation therapy.",
          "zh": "全球首套獲 FDA 核准用於放射治療的腫瘤自動勾勒 AI，VBrain。"
        },
        "overview": {
          "en": "Flagship VBrain, trained on 1,500+ CT/MRI scans, auto-contours the three most common brain tumors (metastases, meningioma, acoustic neuroma) in minutes (vs hours manually). An 18-month NTUH trial showed ~12.2% higher lesion sensitivity and ~30.8% shorter planning time. Clearances: cleared by US FDA (a first for radiotherapy); Taiwan TFDA status to be confirmed (TBD).",
          "zh": "旗艦 VBrain 以逾 1,500 例 CT／MRI 訓練，自動圈選腦轉移瘤、腦膜瘤、聽神經瘤三類最常見腦瘤，數分鐘完成（傳統需數小時）。經台大醫院 18 個月臨床驗證，偵測敏感度較人工高約 12.2%、治療規劃時間減少約 30.8%。核准狀態：獲美國 FDA 核准（放療領域首見）；台灣 TFDA 核准狀態待查。"
        },
        "tags": [
          "放療AI",
          "自動勾勒",
          "神經腫瘤",
          "FDA"
        ],
        "url": "https://www.vysioneer.com/"
      },
      {
        "slug": "taimedimg-deepmets",
        "category": "imaging",
        "title": {
          "en": "Taiwan AI Labs / TAIMedImg (DeepMets)",
          "zh": "台灣人工智慧實驗室 / 台灣醫學影像 TAIMedImg（DeepMets）"
        },
        "summary": {
          "en": "DeepMets brain-metastasis analysis AI — Taiwan's first homegrown TFDA-approved MRI AI device.",
          "zh": "DeepMets 腦轉移瘤分析 AI，台灣首套國產 TFDA 核准 MRI AI 醫材。"
        },
        "overview": {
          "en": "DeepMets (co-developed with Taipei VGH) analyzes brain MRI to infer tumor count, diameter and volume in 30s (~85% sensitivity at 4mm, ~97% accuracy at 10mm). TAIMedImg is Taiwan AI Labs' spun-off medical-imaging arm holding the clearances and sales — a model case of research-lab-to-company licensing. Allied with GE Healthcare for MRI clinical integration. Clearances: TFDA SaMD Sep 2022 (first homegrown MRI AI device), US FDA in 2025, plus Vietnam and Philippines registrations.",
          "zh": "DeepMets 與北榮共同研發，分析腦部 MRI 推論腫瘤數量、直徑、體積（30 秒內，4mm 腫瘤敏感度約 85%、10mm 準確率約 97%）。TAIMedImg 為台灣人工智慧實驗室分拆出的醫學影像公司，作為 DeepMets 的取證與銷售主體，是「研究單位→獨立公司取證上市」模式代表；與 GE 醫療結盟導入 MRI 臨床流程。核准狀態：2022-09 獲 TFDA SaMD 認證（國產首套 MRI AI 醫材）、2025 年獲美國 FDA，並完成越南、菲律賓註冊。"
        },
        "tags": [
          "腦MRI",
          "影像AI",
          "SaMD",
          "TFDA",
          "FDA",
          "國際化"
        ],
        "url": "https://www.taimedimg.tw/"
      },
      {
        "slug": "heroic-faith-airmod",
        "category": "cdss",
        "title": {
          "en": "Heroic Faith (Airmod)",
          "zh": "聿信醫療器材科技 Airmod"
        },
        "summary": {
          "en": "Pioneer in AI-driven continuous respiratory/lung-sound monitoring; Airmod cleared by TFDA and US FDA.",
          "zh": "AI 驅動連續呼吸／肺音監測先驅，產品 Airmod 獲 TFDA 與美國 FDA。"
        },
        "overview": {
          "en": "Founded 2018. Flagship Airmod is an AI respiratory-sound monitor that pairs with an electronic stethoscope for real-time, non-invasive breathing analysis — notably for airway safety during procedural anesthesia/sedation; trained on ~1.6M clinically annotated samples. Clearances: registered with both Taiwan TFDA and US FDA.",
          "zh": "2018 年成立。旗艦 Airmod 是 AI 呼吸聲音監測器，結合正音電子聽診器即時、非侵入分析呼吸聲，特別用於術中麻醉鎮靜的呼吸安全監測；訓練自約 160 萬筆臨床標註。核准狀態：已通過台灣 TFDA 與美國 FDA 註冊。"
        },
        "tags": [
          "呼吸監測",
          "肺音AI",
          "麻醉安全",
          "TFDA",
          "FDA"
        ],
        "url": "https://www.heroicfaith.com/"
      },
      {
        "slug": "qt-medical-pca500",
        "category": "cdss",
        "title": {
          "en": "QT Medical (PCA 500)",
          "zh": "宇心生醫 QT Medical PCA 500"
        },
        "summary": {
          "en": "PCA 500 — world's most compact medical-grade 12-lead ECG; cleared by FDA, TFDA and CE.",
          "zh": "全球最輕便醫療級 12 導程心電圖 PCA 500，獲 FDA、TFDA、CE。"
        },
        "overview": {
          "en": "Flagship PCA 500 weighs ~67g, uses a patented disposable patch and takes ~1 minute, operable at home by laypersons; pairs with cloud management for remote cardiac care. Clearances: US FDA, Taiwan TFDA and EU CE — one of few home 12-lead ECGs with all three; also gained TFDA clearance for auxiliary interpretation software and TFDA/FDA clearance for pediatric/all-age patches.",
          "zh": "旗艦 PCA 500 重約 67 克，採專利拋棄式貼片，1 分鐘完成量測，可由一般民眾居家操作；結合雲端管理切入遠距心臟照護。核准狀態：同時取得美國 FDA、台灣 TFDA 與歐盟 CE，是少數三證齊備的居家 12 導程心電圖；並陸續取得輔助判讀分析軟體之 TFDA 證，及兒童／全年齡貼片之 TFDA／FDA 認證。"
        },
        "tags": [
          "心電圖",
          "居家篩檢",
          "遠距醫療",
          "TFDA",
          "FDA",
          "CE"
        ],
        "url": "https://www.qtmedical.com/"
      },
      {
        "slug": "aesop-medguard",
        "category": "cdss",
        "title": {
          "en": "AESOP Technology (MedGuard)",
          "zh": "醫守科技 AESOP MedGuard"
        },
        "summary": {
          "en": "AI medication-safety CDSS; flagship MedGuard flags inappropriate prescriptions.",
          "zh": "AI 用藥安全臨床決策支援，旗艦 MedGuard 偵測不當處方。"
        },
        "overview": {
          "en": "Founded by physicians, pharmacists, medical informaticians and data scientists. MedGuard mines Taiwan's NHI database (~23M people, 5 years, 1.3B prescriptions) to alert physicians to potentially inappropriate medications at point of prescribing. A year-long trial at Tungs' Taichung MetroHarbor Hospital over 438,558 prescriptions yielded 10,006 actionable alerts at ~60% acceptance (ophthalmology 96.6%, OB/GYN 90%). Clearances: holds US FDA SaMD clearance; Taiwan TFDA status to be confirmed (TBD).",
          "zh": "由醫師、藥師、醫學資訊與資料科學家創立。MedGuard 以全民健保資料庫（約 2,300 萬人、5 年、13 億張處方）資料探勘，於開立處方時即時提醒潛在不當用藥（PIM）。在童綜合醫院門診部署，年度試驗分析 43.8 萬張處方、發出逾 1 萬則建議、醫師接受率近 60%（眼科 96.6%、婦產 90%）。核准狀態：已取得美國 FDA SaMD 核准；台灣 TFDA 狀態待查。"
        },
        "tags": [
          "CDSS",
          "用藥安全",
          "NHI大數據",
          "FDA"
        ],
        "url": "https://www.aesoptek.com/"
      },
      {
        "slug": "jellox-biotech",
        "category": "pathology",
        "title": {
          "en": "JelloX Biotech",
          "zh": "捷絡生物科技 JelloX Biotech"
        },
        "summary": {
          "en": "NTHU spin-off; 3D digital-pathology scanning + AI analysis, delivering 100x+ more information.",
          "zh": "清大團隊新創，3D 數位病理掃描加 AI 判讀，提供逾百倍資訊量。"
        },
        "overview": {
          "en": "Operating since 2019, holds patented 3D pathology tissue imaging, the JelloScope high-speed scanner and MetaLite AI software. Opened a 3D digital-pathology lab in Phoenix, Arizona in Apr 2025; partners with Intel and Roche Diagnostics Taiwan on a next-gen platform. Clearances: its tissue-clearing reagent is a world-first with US FDA recognition (reagent); passed TFDA medical-device QMS certification.",
          "zh": "2019 年起營運，擁 3D 病理組織影像專利技術、高速 3D 掃描儀 JelloScope 與 MetaLite AI 分析軟體。2025-04 於美國亞利桑那鳳凰城設 3D 數位病理實驗室；與 Intel、台灣羅氏診斷合作次世代數位病理平台。核准狀態：組織透明化試劑為全球首創並獲美國 FDA 認可（reagent）；已通過 TFDA 醫材品質管理系統（QMS）認證。"
        },
        "tags": [
          "病理AI",
          "3D病理",
          "QMS",
          "FDA-reagent"
        ],
        "url": "https://jellox.com/"
      },
      {
        "slug": "quanta-qoca",
        "category": "cdss",
        "title": {
          "en": "Quanta Computer (QOCA)",
          "zh": "廣達電腦 QOCA"
        },
        "summary": {
          "en": "ODM leader entering smart healthcare via the QOCA platform; partners NHIA and Tri-Service/NDMC.",
          "zh": "ODM 龍頭以 QOCA 平台切入智慧醫療，與健保署、三總／國防醫合作。"
        },
        "overview": {
          "en": "QOCA (Quanta Open Care AI) spans medical cloud, telemedicine and home-care platforms, with ~NT$10B invested over three years. Its ECG AI platform (tech-transferred from NDMC/Tri-Service General Hospital) interprets in 20s and aids detection of 50+ cardiopulmonary conditions; it signed an MOU with the NHIA to build a customized QOCA AIM NHI AI cloud. Also builds AIoT devices (ECG units, temperature patches, wireless stethoscopes). Clearances: specific SaMD TFDA/FDA clearances not stated in source (TBD).",
          "zh": "QOCA（Quanta Open Care AI）涵蓋 AI 醫療雲、遠距醫療與健康照護三大平台，三年投資約新台幣 100 億元。技轉自國防醫學院與三軍總醫院的「心電圖 AI 判讀平台」可 20 秒判讀、輔助辨識逾 50 種心肺疾病；並與健保署簽 MOU 客製化 QOCA AIM 健保 AI 雲。亦開發心電圖儀、體溫貼片、無線聽診器等 AIoT。核准狀態：研究檔未載明具體 SaMD 之 TFDA／FDA 取證，待查。"
        },
        "tags": [
          "AI平台",
          "心電圖AI",
          "AIoT",
          "健保署合作",
          "ODM"
        ],
        "url": "https://www.qoca.com/"
      },
      {
        "slug": "wisely-information",
        "category": "cdss",
        "title": {
          "en": "Wisely Information (AHILINK)",
          "zh": "慧誠智醫 Wisely Information (AHILINK)"
        },
        "summary": {
          "en": "Smart-hospital integration platform offering smart wards, smart ORs and AIoT clinical apps.",
          "zh": "智慧醫院整合平台，提供智慧病房、智慧手術室與 AIoT 臨床應用。"
        },
        "overview": {
          "en": "Integrates clinical resources from medical centers to build next-gen integrated-care platforms using AIoT; solutions span smart-hospital planning, smart wards, smart ORs, smart medication cabinets and AIoT clinical applications — positioned as the systems-integration/platform layer linking AI models to hospital workflows. Clearances: as a platform integrator no specific SaMD clearance stated in source (TBD).",
          "zh": "整合醫學中心臨床資源，以 AIoT 技術打造次世代整合照護平台；解決方案涵蓋智慧醫院規劃、智慧病房、智慧手術室、智慧藥櫃與 AIoT 臨床應用，定位為串接 AI 模型與醫院流程的系統整合與平台層。核准狀態：作為平台整合商，研究檔未載明具體 SaMD 取證，待查。"
        },
        "tags": [
          "智慧醫院",
          "AIoT",
          "平台整合",
          "智慧手術室"
        ],
        "url": "https://news.gbimonthly.com/tw/invest/show2.php?num=520"
      },
      {
        "slug": "wistron-medical",
        "category": "imaging",
        "title": {
          "en": "Wistron Medical Technology",
          "zh": "緯創醫學科技 Wistron Medical"
        },
        "summary": {
          "en": "Wistron's med-tech arm focusing on imaging, IVD, exoskeletons and smart hospitals.",
          "zh": "緯創旗下醫學科技公司，聚焦影像、體外檢測、外骨骼與智慧醫院。"
        },
        "overview": {
          "en": "Wistron Medical Technology focuses on life-science instruments, IVD, medical imaging, powered exoskeletons and smart-hospital systems, and is teaming with Quanta and Compal to build the medical-center-to-home care journey. Clearances: specific AI SaMD flagships and TFDA clearance details to be confirmed (TBD).",
          "zh": "緯創醫學科技聚焦生命科學儀器、體外診斷（IVD）、醫學影像、人工外骨骼與智慧醫院系統，並與廣達、仁寶聯手布局從醫學中心到居家的「照護旅程」。核准狀態：具體 AI SaMD 旗艦與 TFDA 取證細節待查。"
        },
        "tags": [
          "醫學影像",
          "智慧醫院",
          "外骨骼",
          "ODM"
        ],
        "url": "https://news.gbimonthly.com/tw/magazine/article_show.php?num=85372&range=news"
      },
      {
        "slug": "compal-healthcare",
        "category": "apps",
        "title": {
          "en": "Compal Electronics (Healthcare)",
          "zh": "仁寶電腦（醫療事業）Compal Healthcare"
        },
        "summary": {
          "en": "Notebook ODM giant expanding into medical-device manufacturing and smart-healthcare environments.",
          "zh": "NB 代工大廠跨足醫材製造與智慧醫療環境建置。"
        },
        "overview": {
          "en": "Compal has been moving into medical-device manufacturing and smart healthcare; by 2026 its non-PC high-margin businesses (AI servers/5G/medical) target ~40% of revenue, and it co-builds a hospital-to-home care network with Quanta and Wistron. Its health unit (PSE) merged with long-term-care firm Jubo effective 1 Jan 2026. Clearances: specific AI SaMD products and TFDA clearances to be confirmed (TBD).",
          "zh": "仁寶近年布局醫療器材製造與智慧醫療，2026 年非 PC 高利潤業務（含 AI 伺服器／5G／醫療）營收占比目標跳升至約 40%，並與廣達、緯創共構從醫院到居家的照護網；旗下仁寶健康（PSE）與長照業者智齡科技 Jubo 合併於 2026-01-01 生效。核准狀態：具體 AI SaMD 產品與 TFDA 取證待查。"
        },
        "tags": [
          "智慧醫療硬體",
          "居家照護",
          "ODM"
        ],
        "url": "https://www.cw.com.tw/article/5139602"
      },
      {
        "slug": "hiwin-medical-robots",
        "category": "surgery",
        "title": {
          "en": "HIWIN Technologies (Medical Robots)",
          "zh": "上銀科技（醫療機器人）HIWIN"
        },
        "summary": {
          "en": "Co-developed Taiwan's first domestically-made endoscope-holding surgical robot with Chung Shan Medical Univ.",
          "zh": "與中山醫合作開發台灣首台自製內視鏡扶持手術機器人。"
        },
        "overview": {
          "en": "HIWIN, leveraging precision motion/robotic-arm technology, entered minimally invasive surgery by co-developing the HIWIN endoscope-holding robot with Chung Shan Medical University Hospital — Taiwan's first domestically-made surgical robot for MIS. Clearances: degree of AI autonomy and TFDA/FDA clearance details to be confirmed (TBD).",
          "zh": "上銀科技以精密傳動／機械臂技術切入微創手術，與中山醫學大學附設醫院合作開發「HIWIN 內視鏡扶持機器人」，為台灣第一台自製手術機器人加入微創手術行列。核准狀態：AI 自主導航程度與 TFDA／FDA 取證細節待查。"
        },
        "tags": [
          "手術機器人",
          "內視鏡",
          "微創手術"
        ],
        "url": "https://money.udn.com/money/story/5724/5048934"
      },
      {
        "slug": "onyx-healthcare",
        "category": "imaging",
        "title": {
          "en": "Onyx Healthcare",
          "zh": "醫揚科技 Onyx Healthcare"
        },
        "summary": {
          "en": "Industrial-PC-rooted medical IT vendor shipping multiple AI medical products.",
          "zh": "工業電腦背景的醫療資訊廠，推多項 AI 醫療產品。"
        },
        "overview": {
          "en": "Onyx Healthcare, built on medical-grade computers/terminals, develops AI medical products in image analysis, medical computers and mobile nursing, with AI-medical revenue rising to ~10%; mainly supplies hardware and integration for AI imaging and clinical IT. Clearances: specific AI SaMD and TFDA clearance details to be confirmed (TBD).",
          "zh": "醫揚科技以醫療級電腦／資訊終端為基礎，發展影像分析、醫療電腦、行動護理等 AI 醫療產品，AI 醫療設備營收占比攀升至約 10%；多作為 AI 影像與臨床 IT 的硬體與整合供應商。核准狀態：具體 AI SaMD 與 TFDA 取證細節待查。"
        },
        "tags": [
          "醫療電腦",
          "影像分析",
          "行動護理"
        ],
        "url": "https://www.onyx-healthcare.com/"
      },
      {
        "slug": "act-genomics",
        "category": "cdss",
        "title": {
          "en": "ACT Genomics",
          "zh": "行動基因 ACT Genomics"
        },
        "summary": {
          "en": "Cancer-genomics SaaS firm delivering end-to-end NGS reports; Delta agreed to acquire it in 2025.",
          "zh": "癌症基因檢測 SaaS 廠，提供一條龍 NGS 報告；2025 年台達擬收購。"
        },
        "overview": {
          "en": "ACT Genomics provides NGS cancer-genomics testing via cloud SaaS, returning reports in ~1-2 weeks — one of few local players integrating SaaS, reagents and reporting end to end, using bioinformatics AI to interpret variants and therapy options. In Jun 2025 Delta Electronics' board approved acquiring ~90% of it to enter precision medicine. This is genomics/bioinformatics rather than imaging SaMD. Clearances: not detailed in source (TBD).",
          "zh": "行動基因以雲端 SaaS 提供 NGS 癌症基因檢測，醫療院所約 1–2 週可取得報告，是台灣少數能整合 SaaS、試劑與報告一條龍輸出的本土廠商；以生資 AI 解讀變異與用藥建議。2025-06 台達電董事會通過收購其約 90% 股權，切入精準醫療。屬基因檢測／生資分析，非影像 SaMD。核准狀態：研究檔未詳述，待查。"
        },
        "tags": [
          "NGS",
          "精準腫瘤",
          "生資AI",
          "SaaS"
        ],
        "url": "https://www.actgenomics.com/"
      },
      {
        "slug": "cmuh-ai-center",
        "category": "cdss",
        "title": {
          "en": "China Medical University Hospital AI Center",
          "zh": "中國醫藥大學附設醫院 AI 中心"
        },
        "summary": {
          "en": "Academic medical center self-developing multiple AIs integrated into outpatient workflows.",
          "zh": "醫學中心自研多項 AI 並整合進門診流程。"
        },
        "overview": {
          "en": "CMUH's AI Center integrates clinical data and embeds AI services — bone age, chromosomal anomalies, ECG abnormalities, chest X-ray, diabetic retinopathy and renal-failure prediction — into outpatient workflows, exemplifying in-hospital AI development with clinical deployment in Taiwan. Clearances: some models reach market through partner vendors (e.g., bone-age and ECG products); center's own clearance scope not specified (TBD).",
          "zh": "中國附醫 AI 中心整合醫療資料，將骨齡、染色體異常、心電圖異常、胸部 X 光、糖尿病視網膜病變、腎衰竭預測等 AI 服務納入門診流程，是台灣院內 AI 自研加臨床落地的代表之一。核准狀態：部分模型透過合作廠商取證上市（如骨齡與心電圖相關產品）；中心自身取證範圍未明列，待查。"
        },
        "tags": [
          "院內AI",
          "多疾病",
          "CDSS",
          "心電圖",
          "影像"
        ],
        "url": "https://www.taiwan-healthcare.org/zh/news-detail?id=0s94s8i5coug4mdf"
      },
      {
        "slug": "ndmc-tri-service-ecg-ai",
        "category": "cdss",
        "title": {
          "en": "NDMC-Tri-Service ECG AI",
          "zh": "國防醫學院／三軍總醫院 心電圖 AI"
        },
        "summary": {
          "en": "Self-developed ECG AI platform interpreting 50+ cardiopulmonary diseases in 20s; tech-transferred to Quanta.",
          "zh": "自研心電圖 AI 判讀平台，20 秒辨識逾 50 種心肺疾病，技轉廣達。"
        },
        "overview": {
          "en": "NDMC and Tri-Service General Hospital co-developed an ECG AI interpretation platform that aids detection of 50+ cardiopulmonary diseases from a single 12-lead ECG in 20s (arrhythmia, MI, stroke risk); tech-transferred to Quanta for commercialization, and explored with wearables for sudden-death prevention. Clearances: the post-commercialization TFDA clearance attribution and details to be confirmed (TBD).",
          "zh": "國防醫學院與三軍總醫院共同研發「心電圖 AI 人工智慧判讀平台」，以單張 12 導程心電圖 20 秒內輔助辨識逾 50 種心肺疾病（含心律不整、心肌梗塞、中風風險）；已技轉廣達商品化，並結合穿戴裝置探索猝死預防。核准狀態：商品化後的 TFDA 取證歸屬與細項待查。"
        },
        "tags": [
          "心電圖AI",
          "多疾病",
          "技轉",
          "穿戴裝置"
        ],
        "url": "https://health.tvbs.com.tw/medical/341058"
      },
      {
        "slug": "nhi-my-health-bank",
        "category": "apps",
        "title": {
          "en": "NHI Express (My Health Bank)",
          "zh": "全民健保行動快易通｜健康存摺 App"
        },
        "summary": {
          "en": "The NHI Administration's official app providing personal medical records, medication, lab/imaging reports and the Virtual NHI Card; ingests 30 days of wearable data.",
          "zh": "健保署官方 App，提供個人就醫紀錄、用藥、檢驗檢查、影像報告查詢與虛擬健保卡；可讀取近 30 日穿戴資料。"
        },
        "overview": {
          "en": "Offers visit history, surgeries, medications, lab/imaging results, vital-sign records, allergies, and organ-donation/hospice directives. My Health Bank 3.0 added biometric login and integrates Apple Health (blood pressure, heart rate, SpO2, height, weight, temperature). The Virtual NHI Card can bind family members and refreshes its QR code every 5 minutes. Used by the entire insured population — Taiwan's largest PHR.",
          "zh": "提供就醫紀錄、手術、用藥、檢驗檢查、生理量測、過敏、器捐與安寧意願等查詢；「健康存摺 3.0」改版加入生物辨識登入，並透過「連結健康 App」整合 Apple Health 等血壓、心律、血氧、身高、體重、體溫資料。虛擬健保卡可綁定家人、QR Code 每 5 分鐘更新。使用者為全體保險對象，是台灣最大規模 PHR。"
        },
        "tags": [
          "PHR",
          "政府",
          "健保",
          "虛擬健保卡",
          "穿戴整合"
        ],
        "url": "https://www.nhi.gov.tw/ch/cp-3166-56af4-2457-1.html"
      },
      {
        "slug": "eucare",
        "category": "telemed",
        "title": {
          "en": "EUCARE",
          "zh": "健康益友 EUCARE"
        },
        "summary": {
          "en": "An app run by MOHW-designated hospitals with the Taiwan Society of Emergency Medicine, offering 24/7 emergency consultation and video visits.",
          "zh": "衛福部指定醫院與台灣急診醫學會合作的 App，提供 24 小時緊急醫療諮詢與視訊診療。"
        },
        "overview": {
          "en": "Emergency specialists and nurse practitioners provide round-the-clock consultation. Workflow: phone verification, selecting a plan/hospital/physician, uploading the NHI card to book, then entering an online consult room for video. Afterward, a relative can collect medication with the NHI card, or a pharmacist can deliver it. It was the main channel for home-care drug delivery during COVID-19 and a key channel for rural/outlying-island emergency advice and Virtual-NHI-Card video visits.",
          "zh": "由急診專科醫師及專科護理師 24 小時提供緊急醫療諮詢。流程含手機驗證、選擇方案／院所／醫師、上傳健保卡完成預約、進入線上諮詢室視訊；完成後可由親友持健保卡至院所領藥，或經同意由藥師送藥到府。COVID-19 期間為居家照護送藥主力管道，亦為偏鄉／離島緊急諮詢與虛擬健保卡視訊看診的主要管道之一。"
        },
        "tags": [
          "遠距診療",
          "急診",
          "政府",
          "視訊看診",
          "偏鄉"
        ],
        "url": "https://eucare.twdata.com/app.html"
      },
      {
        "slug": "syndr-cht",
        "category": "telemed",
        "title": {
          "en": "SynDr. (Chunghwa Telecom)",
          "zh": "SynDr. 遠距醫療視訊平台（中華電信）"
        },
        "summary": {
          "en": "Chunghwa Telecom's telemedicine video platform that connects to hospital HIS, supports HL7 FHIR, and lets patients join via an SMS link.",
          "zh": "中華電信打造的遠距醫療視訊平台，串接醫院 HIS、支援 HL7 FHIR，患者免下載 App，以簡訊連結進入視訊。"
        },
        "overview": {
          "en": "Integrates with hospital information systems (HIS), supports HL7 FHIR data exchange, offers cloud recording, and plans e-prescription integration. Patients join the video room via an SMS link, lowering barriers for elderly and digitally underserved users. A B2B2C / B2G model serving healthcare institutions.",
          "zh": "串接醫院資訊系統（HIS）、支援 HL7 FHIR 資料交換，提供雲端錄影，規劃整合電子處方箋。患者透過簡訊連結即可進入視訊診間，降低高齡與數位弱勢的使用門檻。屬 B2B2C／B2G 模式，服務對象為醫療院所。"
        },
        "tags": [
          "遠距診療",
          "電信",
          "HIS",
          "FHIR",
          "視訊看診",
          "B2B2C"
        ],
        "url": "https://www.cht.com.tw/zh-tw/home/cht/messages/2024/0701-1400"
      },
      {
        "slug": "line-telemedicine",
        "category": "telemed",
        "title": {
          "en": "LINE One-Stop Telemedicine",
          "zh": "LINE x 健康益友一站式遠距醫療"
        },
        "summary": {
          "en": "In 2024 LINE partnered with EUCARE to launch one-stop telemedicine via LINE MINI App, letting clinics offer video consultations.",
          "zh": "2024 年 LINE 攜手健康益友推出一站式遠距醫療，透過 LINE MINI App 讓診所提供視訊診療。"
        },
        "overview": {
          "en": "Uses LINE MINI App to help grassroots clinics go digital; patients receive a consultation link by SMS, lowering adoption barriers. Targeting clinics nationwide in a B2B2C model that combines LINE's penetration with EUCARE's medical-compliance capability.",
          "zh": "透過 LINE MINI App 讓基層診所數位轉型，患者以簡訊取得診療連結即可看診，降低使用門檻。鎖定全台診所為服務對象，屬 B2B2C 模式，結合 LINE 高滲透率與健康益友的醫療合規能力。"
        },
        "tags": [
          "遠距診療",
          "LINE",
          "診所",
          "視訊看診",
          "B2B2C"
        ],
        "url": "https://www.linecorp.com/tw/pr/news/tw/2024/4721"
      },
      {
        "slug": "ntuh-remote-care",
        "category": "telemed",
        "title": {
          "en": "NTUH Remote Care Center",
          "zh": "臺大醫院遠距照護中心"
        },
        "summary": {
          "en": "NTUH's Remote Care Center combines EHR, a remote-care information network and physiological monitoring, with case managers reviewing daily measurements.",
          "zh": "台大醫院遠距照護中心結合電子病歷、遠距照護資訊網與生理監測，由個管師監看慢病患者每日量測數據。"
        },
        "overview": {
          "en": "Integrates EHR, a remote-care information network, and a physiological monitoring system; case managers track daily measurements for cardiovascular disease, diabetes, and obesity patients. A flagship hospital-built remote-care service operated by the hospital (B2C / extended-care model).",
          "zh": "整合電子病歷、遠距照護資訊網與生理監測系統，個管師監看心血管疾病、糖尿病與肥胖等慢病患者的每日量測；為國內醫院自建遠距照護的代表案例，屬醫院主導（B2C／院內延伸照護）模式。"
        },
        "tags": [
          "遠距照護",
          "醫院自建",
          "慢病",
          "生理監測"
        ],
        "url": "https://www.ntuh.gov.tw/telehealth/Fpage.action?muid=1&fid=1530"
      },
      {
        "slug": "nhi-telemedicine-reimbursement",
        "category": "telemed",
        "title": {
          "en": "NHI Telemedicine Reimbursement Program",
          "zh": "健保遠距醫療給付計畫（山地離島）"
        },
        "summary": {
          "en": "An NHI reimbursement program encouraging outlying/mountain-area clinics to partner with urban hospitals for video-based multi-specialty consultations.",
          "zh": "健保署給付計畫，鼓勵山地離島院所與都會醫院合作，由遠距端醫師以視訊提供多專科會診。"
        },
        "overview": {
          "en": "Local clinics apply; the remote hospital provides video consultations in ophthalmology, ENT, dermatology, cardiology, neurology, gastroenterology, pulmonology, and emergency medicine. The 2024 revision added home-care enrollees and new consult specialties. Taipei Veterans General, Kaohsiung Chang Gung and KMU partner with Kinmen, Penghu, Orchid Island and Green Island. A health policy/reimbursement program (not a medical device).",
          "zh": "由在地院所提出申請，遠距端院所以視訊提供眼科、耳鼻喉科、皮膚科、心臟內科、神經內科、腸胃科、胸腔科及急診會診。2024 修訂新增居家醫療收案對象及新增會診科別，改善偏鄉醫療可近性。台北榮總、高雄長庚、高醫等與金門、澎湖、蘭嶼、綠島合作。屬健保政策／給付計畫，非醫療器材。"
        },
        "tags": [
          "遠距診療",
          "健保給付",
          "山地離島",
          "偏鄉",
          "會診",
          "政策"
        ],
        "url": "https://www.nhi.gov.tw/ch/cp-3348-c61f0-2350-1.html"
      },
      {
        "slug": "hospital-at-home-pilot",
        "category": "telemed",
        "title": {
          "en": "Hospital-at-Home Acute Care Pilot",
          "zh": "在宅急症照護試辦計畫"
        },
        "summary": {
          "en": "An NHI pilot launched 1 July 2024 letting patients with pneumonia, UTIs or soft-tissue infections receive care at home, combining telemedicine with remote vital-sign monitoring.",
          "zh": "2024-07-01 上路的健保試辦，讓肺炎、尿路感染、軟組織感染等病患在家接受醫療團隊治療，結合通訊診療與遠端生命徵象監測。"
        },
        "overview": {
          "en": "A care team of physicians, nurses, pharmacists and respiratory therapists provides 24/7 emergency service and a fast-track transfer channel. Eligible: home-care cases, facility residents and ER-assessed discharges. Patients pay only 5% co-payment plus transport; catastrophic-illness/veterans/welfare/remote-island patients are exempt. Initial scope: 96 institutions forming 32 teams in Kaohsiung-Pingtung-Penghu, combining telemedicine and remote monitoring. A health policy/reimbursement pilot (not a medical device).",
          "zh": "由醫師、護理師、藥師、呼吸師組成照護小組，提供 24 小時急診服務與後送綠色通道。適用居家醫療個案、機構住民、急診評估返家 3 類；民眾僅負擔 5% 部分負擔與交通費，重大傷病／榮民／福保／山地離島免部分負擔。試辦初期高屏澎 96 家院所組 32 個醫療團隊，結合通訊診療與遠端監測。屬健保政策／給付試辦，非醫療器材。"
        },
        "tags": [
          "在宅醫療",
          "健保給付",
          "通訊診療",
          "遠端監測",
          "政策",
          "高齡"
        ],
        "url": "https://www.nhi.gov.tw/ch/np-3658-1.html"
      },
      {
        "slug": "tzuchi-foxconn-codoctor",
        "category": "telemed",
        "title": {
          "en": "Tzu Chi x Foxconn CoDoctor",
          "zh": "慈濟 x 鴻海 CoDoctor"
        },
        "summary": {
          "en": "Tzu Chi and Foxconn launched CoDoctor telemedicine equipment (medical-device licensed), planned for deployment to outlying islands and remote/indigenous areas.",
          "zh": "慈濟攜手鴻海推出 CoDoctor 遠距醫療設備，已取得醫材許可證，規劃部署至離島、原鄉與偏鄉。"
        },
        "overview": {
          "en": "CoDoctor integrates physiological measurement and video-consultation hardware, planned for 100+ outlying islands and remote/indigenous areas; phase one runs at Taipei Tzu Chi Hospital and Jing Si halls. A hospital/enterprise collaboration advancing rural medical equity, aligned with Foxconn's Taiwan Digital Health Alliance. Clearances: holds a Taiwan medical-device license (TFDA); other markets TBD.",
          "zh": "CoDoctor 整合生理量測與視訊會診設備，規劃在 100 多個離島、原鄉偏鄉部署，第一期於台北慈濟醫院及各地靜思堂等慈濟場域使用。屬醫院／企業合作推動偏鄉醫療平權，呼應鴻海發起的「台灣數位健康大聯盟」。核准狀態：已取得台灣醫材許可證（TFDA）；其餘市場待查。"
        },
        "tags": [
          "遠距診療",
          "偏鄉",
          "醫療器材",
          "慈濟",
          "鴻海",
          "智慧醫療"
        ],
        "url": "https://udn.com/news/story/7314/8231915"
      },
      {
        "slug": "health2sync",
        "category": "apps",
        "title": {
          "en": "Health2Sync",
          "zh": "Health2Sync 智抗糖"
        },
        "summary": {
          "en": "Taiwan's largest chronic-care platform supporting diabetes, blood-pressure and weight management; raised $20M+ Series C with 1M+ global users.",
          "zh": "台灣最大慢病照護平台，協助糖尿病、血壓、體重管理；C 輪募逾 2,000 萬美元、全球用戶逾百萬。"
        },
        "overview": {
          "en": "Founded 2013; offers the Health2Sync app, a cloud care platform, and multiple devices/DTx connecting patients, family and care teams. Closed $20M+ Series C in Mar 2025 (led by Taiwania, with Wistron, Pegatron, BE Health, Cathay VC), 1M+ registered users worldwide, ~50% overseas revenue, expanding to Japan/Korea/Australia. B2C and B2B2C (hospitals, pharma, insurers). Clearances: its Insultrate insulin-dose-adjustment software won TFDA clearance in Oct 2023 — Taiwan's first approved DTx.",
          "zh": "2013 年成立，提供智抗糖 App、雲端照護平台與多款裝置／數位療法，連結患者、家屬與醫療團隊。2025-03 完成逾 2,000 萬美元 C 輪（台杉領投，緯創、和碩、比翼、國泰創投參與），全球註冊用戶逾 100 萬、海外營收占比近 50%，拓展日韓澳。採 B2C 與 B2B2C（與醫院、藥廠、保險合作）。核准狀態：旗下「易速胰 Insultrate」2023-10 獲 TFDA 核准，為台灣首款數位療法（DTx）。"
        },
        "tags": [
          "慢病管理",
          "糖尿病",
          "數位療法",
          "DTx",
          "B2B2C",
          "TFDA",
          "募資"
        ],
        "url": "https://www.health2sync.com/"
      },
      {
        "slug": "h2u-healthconn",
        "category": "apps",
        "title": {
          "en": "H2U (HealthConn)",
          "zh": "H2U 永悅健康（慧康生活科技）"
        },
        "summary": {
          "en": "A platform for corporate wellness and personal health-check integration, connecting wearables, exam reports and a health calendar; serving 100+ companies.",
          "zh": "提供企業健康管理與個人健檢整合的平台，串接穿戴裝置、健檢報告與健康行事曆，服務逾百家企業數萬名員工。"
        },
        "overview": {
          "en": "Provides personalized health-risk assessments, historical exam records, and IoT integration with personal wearables; its H2U Health Calendar app links multiple exam centers from booking to reports plus medication/exercise reminders. Acer Display Technology's ~27,000 employees reached 100% adoption. A B2B2C corporate-wellness model.",
          "zh": "提供個人化健康風險評估、歷次健檢紀錄查詢，以 IoT 串接個人穿戴裝置同步生活紀錄；旗下「H2U 健康行事曆」App 整合多家健檢中心，從健檢預約到報告查詢、用藥與運動提醒。宏碁顯示科技約 2.7 萬員工 100% 使用率為代表案例。屬 B2B2C 企業健康模式。"
        },
        "tags": [
          "健康管理",
          "企業健康",
          "穿戴整合",
          "健檢",
          "B2B2C"
        ],
        "url": "https://www.h2u.io/en"
      },
      {
        "slug": "cofit",
        "category": "apps",
        "title": {
          "en": "Cofit",
          "zh": "Cofit 我的專屬營養師"
        },
        "summary": {
          "en": "Taiwan's largest online nutritionist platform offering one-on-one dietary analysis and body-composition management, focused on weight loss and chronic-disease prevention.",
          "zh": "全台最大線上營養師平台，提供一對一營養師飲食分析、體態管理，主打減重與慢性病預防。"
        },
        "overview": {
          "en": "Operated by Qunzhi Technology; offers course booking, an app, nutritionist/physician consultation, and professional body-composition analysis (InBody, etc.). Users upload daily meal photos for nutritionist feedback and dietary adjustments; recently added AI meal recognition and a nutrition chatbot. Partners with insurers (e.g., Nan Shan Life) for wellness programs — a B2C and B2B2C model.",
          "zh": "由群智科技營運，提供課程預約、App、營養師／醫師諮詢與專業體組成分析（InBody 等）。使用者上傳每日餐點照片，由營養師線上回饋與飲食調整建議；近期導入 AI 餐點辨識與智能營養聊天機器人。與保險公司（如南山人壽）合作健康管理方案，屬 B2C 與 B2B2C 模式。"
        },
        "tags": [
          "營養",
          "體重管理",
          "慢病預防",
          "AI",
          "保險合作",
          "B2B2C"
        ],
        "url": "https://events.cofit.me/"
      },
      {
        "slug": "mednet",
        "category": "apps",
        "title": {
          "en": "MedNet",
          "zh": "醫聯網 MedNet"
        },
        "summary": {
          "en": "A health-resource-sharing platform integrating health-check comparison/booking, online doctor consultation, AI health assessment and corporate/insurer member services.",
          "zh": "健康資源共享平台，整合健檢比價／預約、線上醫師諮詢、AI 健康檢測與企業／保險會員健康服務。"
        },
        "overview": {
          "en": "Founded 2017; covers five areas — health checks, assessment, promotion, medical services and care. Its app offers daily health logging (water, sleep, steps, blood pressure, blood sugar, integrated with iOS Health), a smart health-check recommender, and online consultation across 34 specialties plus an AI doctor. Provides wellness for corporate and insurer members (B2B2C).",
          "zh": "2017 年成立（前身為良醫健康事業），提供健檢、健康評估、健康促進、醫療服務、照護服務五大領域。App 提供每日健康紀錄（飲水、睡眠、步數、血壓、血糖，整合 iOS 健康資料）、智能健檢推薦系統、線上 34 科醫師與 AI 醫師諮詢。為企業與保險公司會員提供健康管理（B2B2C）。"
        },
        "tags": [
          "健康管理",
          "第二意見",
          "遠距諮詢",
          "AI",
          "健檢",
          "B2B2C"
        ],
        "url": "https://med-net.com/"
      },
      {
        "slug": "kingnet",
        "category": "apps",
        "title": {
          "en": "KingNet",
          "zh": "KingNet 國家網路醫藥"
        },
        "summary": {
          "en": "A health-media and online-consultation platform founded in 1998, offering free online medical Q&A, a drug database and health e-commerce.",
          "zh": "1998 年成立的醫藥健康媒體與線上諮詢平台，提供免費線上醫療諮詢、藥典查詢與健康電商。"
        },
        "overview": {
          "en": "Runs one of the Chinese-speaking world's larger online hospitals, with 1,500+ health professionals offering free consultation; holds 60,000+ drug entries and tens of thousands of disease/medical terms. Combines health-themed e-commerce and content marketing focused on medication safety and patient education. A content/media + consultation + e-commerce hybrid model.",
          "zh": "經營華人具規模的「網路醫院」，網羅逾 1,500 位醫事專業人員提供免費線上諮詢；擁有逾 6 萬筆中西藥藥典與上萬筆疾病／醫護名詞。結合健康主題電商與內容行銷，觸及大眾用藥安全與衛教。屬內容／媒體加諮詢加電商混合模式。"
        },
        "tags": [
          "健康媒體",
          "線上諮詢",
          "藥典",
          "衛教",
          "電商"
        ],
        "url": "https://www.kingnet.com.tw/"
      },
      {
        "slug": "everyday-health",
        "category": "apps",
        "title": {
          "en": "Everyday Health",
          "zh": "早安健康 Everyday Health"
        },
        "summary": {
          "en": "One of Taiwan's largest health-content sites, running a magazine, website, podcast, YouTube and the Everyday Health Select e-commerce shop.",
          "zh": "台灣最大健康內容網站之一，經營雜誌、網站、Podcast、YouTube 與「早安健康嚴選」健康電商。"
        },
        "overview": {
          "en": "Built on the idea that healthy living is more than treating disease, it runs the edh.tw site and a large FB community, spanning magazine, podcast (Apple/Spotify/KKBox/SoundOn), Yahoo TV and YouTube; 2024 specials covered gut health, food-drug interactions and walking. Monetizes via Everyday Health Select e-commerce and subscriptions — a content-driven B2C model.",
          "zh": "以「健康生活不只是治病」為理念，經營 edh.tw 大型健康網站與 FB 社群，跨足雜誌、Podcast（Apple／Spotify／KKBox／SoundOn）、Yahoo TV 與 YouTube 影音；2024 年推出腸道健康、食藥交互作用、走路運動等專題。透過「早安健康嚴選」電商與訂閱方案變現，屬內容驅動的 B2C 模式。"
        },
        "tags": [
          "健康媒體",
          "內容",
          "電商",
          "訂閱",
          "衛教"
        ],
        "url": "https://news.everydayhealth.com.tw/"
      },
      {
        "slug": "farhugs",
        "category": "mental",
        "title": {
          "en": "FarHugs",
          "zh": "FarHugs 遠距抱抱"
        },
        "summary": {
          "en": "A one-stop mental-growth platform by Mingyi Inc. offering one-on-one online counseling, coaching courses and an AI assistant (HugBee).",
          "zh": "鳴醫公司打造的一站式心智成長平台，提供線上一對一心理諮商、教練課程與 AI 助手 HugBee。"
        },
        "overview": {
          "en": "Connects the public, mental-health professionals and institutions with topic courses, coaching, and counseling (in-person and online). HugBee (AI) helps users explore concerns and recommends therapists; clinicians manage schedules and users book slots. It donates 1% of each completed session to free monthly services for low-income households (Charity Hugs). B2C, with insurer channels (e.g., Nan Shan Life).",
          "zh": "連結民眾、心理專業人員與機構，提供主題課程、教練與心理諮商（實體與線上）。AI 助手 HugBee 協助探索議題並推薦合適心理師；心理師可管理排程、民眾可查詢時段預約。每筆完成諮商提撥 1% 營收，提供中低收入戶每月免費心理健康服務（「公益抱抱」）。屬 B2C，並與保險（南山人壽）等通路合作。"
        },
        "tags": [
          "心理健康",
          "線上諮商",
          "AI",
          "公益",
          "保險合作",
          "B2C"
        ],
        "url": "https://www.farhugs.com/"
      },
      {
        "slug": "mohw-mental-health-program",
        "category": "mental",
        "title": {
          "en": "MOHW Mental Health Support Program",
          "zh": "衛福部心理健康支持方案"
        },
        "summary": {
          "en": "A government subsidy expanding free counseling to ages 15-45, with up to three free sessions per person.",
          "zh": "政府補助方案，將免費心理諮商適用年齡擴大至 15–45 歲青壯世代，每人最多 3 次免費諮商。"
        },
        "overview": {
          "en": "The MOHW expanded its mental-health support program, broadening eligibility to ages 15-45 with up to three free counseling sessions per person, delivered via contracted clinics/counseling centers. It is the government's main lever for mental-health access and drives demand for online platforms (e.g., FarHugs). The revised telemedicine regulation also added remote psychiatric psychotherapy. A government subsidy policy (not a medical device).",
          "zh": "衛福部擴大心理健康支持方案，適用年齡由原先青年放寬至 15–45 歲，每人最多 3 次免費心理諮商補助，搭配特約合作院所／諮商所執行；為政府推動心理健康可近性的主要措施，並帶動線上諮商平台（如 FarHugs、聊心）需求。修正《通訊診察治療辦法》亦新增精神科心理治療得遠距執行。屬政府補助政策，非醫療器材。"
        },
        "tags": [
          "心理健康",
          "政府補助",
          "青壯世代",
          "通訊診療",
          "政策"
        ],
        "url": "https://www.farhugs.com/posts/67160648ef76e70001d62a8a"
      },
      {
        "slug": "jubo-health",
        "category": "apps",
        "title": {
          "en": "Jubo Health",
          "zh": "智齡科技 Jubo"
        },
        "summary": {
          "en": "A long-term-care tech firm (founded 2018) offering institutional-care SaaS (IoT carts, smart nursing, AI management) and the JoyGood consumer health app.",
          "zh": "2018 年成立的長照科技公司，提供照護機構數位化 SaaS（IoT 推車、智慧護理、AI 管理），並推出 JoyGood 健康管理 App。"
        },
        "overview": {
          "en": "Jubo integrates IoT care carts, a smart nursing system and an AI management system across 23+ facilities serving 3,000+ residents, and published the Smart Aging Data Report 2025. With Acer Gadget it launched JoyGood, a family-shared health app tracking up to six members' blood pressure, body fat, SpO2 and blood sugar. Compal's health unit (PSE) merged with Jubo effective 1 Jan 2026. A B2B (facilities) + B2C (JoyGood) model.",
          "zh": "Jubo 整合 IoT 照護推車、智慧護理系統與智能管理系統，部署於 23 家以上長照機構、服務逾 3,000 名住民，並發布《智齡數據報告 2025》。與宏碁 Gadget 合作推出「揪顧 JoyGood 健康管理 App」，可家庭共享、追蹤最多 6 位家人之血壓、體脂、血氧、血糖。仁寶健康（PSE）與 Jubo 合併於 2026-01-01 生效，共構智慧醫療與長照生態。屬 B2B（機構）加 B2C（JoyGood）模式。"
        },
        "tags": [
          "長照科技",
          "機構照護",
          "SaaS",
          "IoT",
          "AI",
          "高齡",
          "B2B2C"
        ],
        "url": "https://jubo-health.com/"
      },
      {
        "slug": "acer-health-fitbii",
        "category": "apps",
        "title": {
          "en": "Acer Health (FitBii)",
          "zh": "宏碁健康 Acer Health (FitBii)"
        },
        "summary": {
          "en": "Acer Group's consumer health unit offering AI health-tech products and services, advancing family and community preventive medicine.",
          "zh": "宏碁集團健康事業，提供 AI 健康科技消費產品與服務，推動家庭與社區預防醫學。"
        },
        "overview": {
          "en": "Acer Health enters preventive medicine via AI health-tech consumer products and services, partnering with pharmacy chains (e.g., Evergreen) to bring precision medicine into daily life, complementing Acer Medical's device/AI capabilities within the group. Focused on home measurement, health-data management and community sites. (Product-line details and FitBii brand relationship: to be verified / TBD.)",
          "zh": "宏碁健康以 AI 健康科技消費商品與服務切入預防醫學，與長青連鎖藥局等通路合作，將精準醫療帶入日常；與宏碁智醫的醫材／AI 能力形成集團內互補。聚焦居家量測、健康數據管理與社區據點。（產品線細節與 FitBii 品牌關係待查。）"
        },
        "tags": [
          "健康管理",
          "AI健康",
          "預防醫學",
          "居家量測",
          "B2C"
        ],
        "url": "https://acerhealthcare.shoplineapp.com/"
      },
      {
        "slug": "garmin-health-taiwan",
        "category": "apps",
        "title": {
          "en": "Garmin Health (Taiwan)",
          "zh": "Garmin Health（台灣）"
        },
        "summary": {
          "en": "Garmin's wearable health-data platform with 1,000+ health/medical research collaborations, integrating with Apple Health and the NHI My Health Bank.",
          "zh": "Garmin 穿戴裝置的健康數據平台，十年累積逾千項健康醫療研究合作，並可與 Apple Health、健康存摺整合。"
        },
        "overview": {
          "en": "Garmin Health provides wearable monitoring data (heart rate, sleep, stress, SpO2, women's health tracking) with 1,000+ global research collaborations and partnerships such as Apollo Health Axis for wellness planning. In Taiwan, Garmin Connect data can be shared to Apple Health, then read by NHI My Health Bank (last 30 days of vitals), linking to the PHR. A hardware + data-platform + research-collaboration model.",
          "zh": "Garmin Health 提供穿戴裝置健康監測數據（心率、睡眠、壓力、血氧、女性健康追蹤等），累計逾千項全球研究合作，並與 Apollo Health Axis 等合作提供身心健康規劃。台灣使用者可將 Garmin Connect 數據分享至 Apple Health，進而被健保「健康存摺」讀取近 30 日生理量測，串接 PHR。屬硬體加數據平台加研究合作模式。"
        },
        "tags": [
          "穿戴整合",
          "PHR",
          "健康研究",
          "女性健康",
          "睡眠"
        ],
        "url": "https://www.garmin.com.tw/news/newscenter/news-2024-oct-garmin-health/"
      },
      {
        "slug": "fitback-cathay-life",
        "category": "apps",
        "title": {
          "en": "FitBack (Cathay Life)",
          "zh": "FitBack 健康吧（國泰人壽）"
        },
        "summary": {
          "en": "Cathay Life's health-promotion app tracking steps, sleep and other behaviors, tied to insurance wellness incentives and rewards.",
          "zh": "國泰人壽推出的健康促進 App，記錄步數、睡眠等健康行為，結合保險外溢與獎勵機制。"
        },
        "overview": {
          "en": "FitBack lets users log daily steps, sleep and other health data, paired with wellness-linked insurance policies and reward points to encourage exercise and self-management. A representative prevention + insurance play, it is a B2B2C (insurer-member) model integrated with wearables.",
          "zh": "FitBack 健康吧讓使用者輕鬆紀錄每日步數與睡眠等健康數據，搭配保險外溢保單與健康獎勵點數，鼓勵運動與健康管理。為保險業者推動「預防醫學加保險」的代表案例，屬 B2B2C（保險會員）模式，與穿戴裝置整合。"
        },
        "tags": [
          "健康管理",
          "保險外溢",
          "穿戴整合",
          "獎勵",
          "B2B2C"
        ],
        "url": "https://wellness.cathaylife.com.tw/fitback/"
      },
      {
        "slug": "womens-health-cycle-apps",
        "category": "apps",
        "title": {
          "en": "Women's Health & Cycle-Tracking Apps",
          "zh": "女性健康／經期追蹤 App（小暖健康、小月曆、Femometer）"
        },
        "summary": {
          "en": "Cycle/fertility-tracking apps available in Taiwan that log periods and auto-estimate ovulation, some using basal body temperature and AI algorithms.",
          "zh": "台灣可用的經期／備孕追蹤 App，記錄生理期、自動推算排卵與生理期，部分結合基礎體溫與 AI 演算。"
        },
        "overview": {
          "en": "Taiwan-built Nuan logs periods on a calendar, auto-estimates ovulation and adds patient education; Mini Calendar has 100M+ global users with cloud sync and a conception forum; Femometer quantifies cycle/ovulation via basal temperature, ovulation tests and AI. Mostly consumer B2C focused on reproductive monitoring and maternal-infant tracking — the dominant Femtech category in Taiwan. (Degree of local large-platform/brand integration: to be verified / TBD.)",
          "zh": "台灣團隊開發的「小暖健康」以日／月曆記錄生理期、自動推算排卵日並附衛教；「小月曆」全球用戶破億、可雲端同步並有備孕論壇；「Femometer」以基礎體溫、排卵測試與 AI 演算量化生理／排卵期管理。多屬消費性 B2C，聚焦生殖監測與母嬰追蹤，屬台灣 Femtech 主要應用類型。（本土專屬大型平台與品牌整合度仍待查。）"
        },
        "tags": [
          "女性健康",
          "Femtech",
          "經期追蹤",
          "備孕",
          "孕產",
          "B2C"
        ],
        "url": "https://apps.apple.com/tw/app/id1269972832"
      },
      {
        "slug": "sleep-tracking-apps",
        "category": "apps",
        "title": {
          "en": "Sleep-Tracking Apps (Pillow, Sleep Cycle, sleep2)",
          "zh": "睡眠追蹤 App（Pillow、Sleep Cycle、sleep²）"
        },
        "summary": {
          "en": "Common sleep-tracking tools on Taiwan's App Store that analyze sleep cycles and heart rate via phone/Apple Watch, some offering sleep training.",
          "zh": "台灣 App Store 常見睡眠追蹤工具，透過手機／Apple Watch 分析睡眠週期與心率，部分含睡眠訓練。"
        },
        "overview": {
          "en": "Pillow auto-tracks sleep cycles and heart rate via iPhone/Apple Watch; Sleep Cycle uses sound detection as a smart alarm; sleep2 combines tracking with sleep training. Mostly international B2C tools reflecting Taiwanese demand for sleep digital health. Clearances: sleep2's intensive plan is an EU-approved medical device (CE) for acute disorders like insomnia; others are consumer wellness tools, not medical devices. (Local sleep-device/smart-mattress brand details: TBD.)",
          "zh": "「Pillow」透過 iPhone／Apple Watch 自動追蹤睡眠週期與心率分析；「Sleep Cycle」以聲音偵測作為智慧鬧鐘；「sleep²」結合睡眠追蹤與睡眠訓練。多屬國際 B2C 工具，反映台灣消費者對睡眠數位健康的需求。核准狀態：sleep² 的強化方案在歐盟取得醫療器材認證（CE），針對失眠等急性睡眠障礙；其餘為消費性健康工具，非醫療器材。（台灣本土睡眠醫材／智慧床墊品牌市場細節待查。）"
        },
        "tags": [
          "睡眠",
          "數位健康",
          "穿戴",
          "醫材",
          "B2C"
        ],
        "url": "https://apps.apple.com/tw/app/id878691772"
      }
    ]
  },
  {
    "slug": "digital-ai",
    "layout": "gallery",
    "icon": "vital_signs",
    "title": {
      "en": "Digital Health Frontier",
      "zh": "數位健康前沿"
    },
    "subtitle": {
      "en": "Taiwan's 2024-2026 push into generative-AI medicine, precision genomics, medical-grade wearables, remote monitoring, digital therapeutics and smart eldercare.",
      "zh": "台灣 2024-2026 在生成式 AI 醫療、精準醫療基因、醫療級穿戴、遠端監測、數位療法與智慧長照的全面布局。"
    },
    "categories": [
      {
        "key": "genai",
        "en": "Generative AI / Medical LLM",
        "zh": "生成式 AI / 醫療 LLM"
      },
      {
        "key": "precision",
        "en": "Precision Medicine / Genomics",
        "zh": "精準醫療 / 基因"
      },
      {
        "key": "wearable",
        "en": "Wearables & Biosensing",
        "zh": "穿戴與生理感測"
      },
      {
        "key": "rpm",
        "en": "Remote Monitoring",
        "zh": "遠端監測"
      },
      {
        "key": "dtx",
        "en": "Digital Therapeutics",
        "zh": "數位療法 DTx"
      },
      {
        "key": "eldercare",
        "en": "Smart Eldercare",
        "zh": "智慧長照"
      }
    ],
    "items": [
      {
        "slug": "taide-llm",
        "category": "genai",
        "title": {
          "en": "TAIDE (Trustworthy AI Dialog Engine)",
          "zh": "國科會 TAIDE 本土大語言模型"
        },
        "summary": {
          "en": "Taiwan's national trustworthy Traditional-Chinese LLM program; open-sourced the commercially usable TAIDE-LX-7B in April 2024, with healthcare as a priority deployment domain.",
          "zh": "台灣國家級可信任繁中大語言模型計畫,2024 年 4 月開源釋出 TAIDE-LX-7B,供產學研導入生成式 AI,醫療為重點落地領域之一。"
        },
        "overview": {
          "en": "Led by the NSTC to build a trustworthy dialog model incorporating Taiwanese culture, terminology and data, plus evaluation tooling. In healthcare, Taichung Veterans General Hospital fine-tuned TAIDE on patient-education material for major illnesses (lung, breast, colorectal cancer) and integrated TAIDE-LX-7B into its Co-Healer system, using agentic AI to streamline clinical documentation and education while emphasizing Taiwanese medical terminology and data-security safeguards.",
          "zh": "由國科會主導,目標是建立納入台灣文化、用語與資料的可信任對話模型,並開發評估工具。醫療應用上,台中榮總將肺癌、乳癌、大腸癌等重大傷病衛教資料導入 TAIDE 訓練,並整合至其 Co-Healer 系統以代理型 AI 協助臨床文件與衛教生成,特色在於使用台灣慣用醫療用語並強化資安與個資防護。"
        },
        "tags": [
          "台灣本土LLM",
          "衛教",
          "臨床文件",
          "開源",
          "台中榮總"
        ],
        "url": "https://www.nstc.gov.tw/folksonomy/detail/d5a157bf-5aca-4ecf-83ce-012f351fd341?l=CH"
      },
      {
        "slug": "ghi-voice-emr",
        "category": "genai",
        "title": {
          "en": "gHi System (CMUH x Microsoft Taiwan)",
          "zh": "智海系統 gHi(中醫大附醫 x 台灣微軟)"
        },
        "summary": {
          "en": "Billed as the world's first Chinese-language generative voice medical-record system; clinicians dictate and the AI engine rapidly drafts records and treatment suggestions.",
          "zh": "號稱全球首個以華文建構的生成式語音智慧醫療系統,醫護口述即可由 AI 引擎快速撰寫病歷與生成診療建議。"
        },
        "overview": {
          "en": "Built by China Medical University Hospital with Microsoft Taiwan on Azure and Nuance speech technology. It produces record summaries in ~12 seconds at >90% accuracy, cuts charting input time ~75%, and shortens documentation from 20-30 minutes to 5-6 minutes. Use cases span new-patient interviews, nursing voice notes, inpatient records and report generation. CMUH also runs related generative-AI tools: the MIRA history-taking voice assistant, a nursing voice-writing assistant, and a chemotherapy helper.",
          "zh": "中國醫藥大學附設醫院與台灣微軟合作,運用 Azure 平台與 Nuance 語音技術,可在約 12 秒完成病歷摘要、正確率逾 9 成、減少約 75% 病歷輸入時間,並將原需 20-30 分鐘的病歷撰寫縮短至 5-6 分鐘。應用涵蓋新病人問診、護理語音紀錄、住院病歷、檢查報告輸出。中醫大附醫另推 MIRA 病史語音寫作助理、護理語音寫作助理、化療小幫手等生成式 AI 應用。"
        },
        "tags": [
          "語音病歷",
          "Microsoft Azure",
          "Nuance",
          "臨床文件",
          "護理"
        ],
        "url": "https://technews.tw/2023/07/24/ghi-system/"
      },
      {
        "slug": "microsoft-taiwan-healthcare",
        "category": "genai",
        "title": {
          "en": "Microsoft Taiwan Healthcare AI",
          "zh": "微軟醫療三面向與 Azure OpenAI 護理平台"
        },
        "summary": {
          "en": "Microsoft set up a dedicated Taiwan healthcare team in 2021, combining Azure OpenAI (ChatGPT-class) with clinical nursing expertise to drive generative-AI transformation.",
          "zh": "微軟自 2021 年成立台灣醫療產業團隊,結合 Azure OpenAI(ChatGPT 類)與臨床護理專業推動醫療生成式 AI 轉型。"
        },
        "overview": {
          "en": "Microsoft frames its hospital push around three pillars, integrating clinical nursing know-how, AI and cloud to build an intelligent nursing-information platform; gHi with CMUH is its flagship case. Multiple hospitals build charting-correction, summarization and patient-education Q&A on Azure OpenAI (full per-hospital adoption list to be verified).",
          "zh": "微軟以三面向導入 AI 挺智慧醫療,包括結合臨床護理專業、AI 與雲端服務,打造智能輔助護理資訊平台;gHi 智海即為其與中醫大附醫的旗艦合作案。多家醫院透過 Azure OpenAI 建構病歷修正、摘要、衛教問答等應用(個別醫院導入清單待查)。"
        },
        "tags": [
          "Azure OpenAI",
          "護理資訊",
          "雲端",
          "病歷摘要"
        ],
        "url": "https://news.microsoft.com/zh-tw/features/ai-medical-microsoftai/"
      },
      {
        "slug": "aesop-technology",
        "category": "genai",
        "title": {
          "en": "AESOP Technology (MedGuard / DxPrime)",
          "zh": "醫守科技 AESOP(藥御守 MedGuard / DxPrime)"
        },
        "summary": {
          "en": "Co-founded by Yu-Chuan (Jack) Li; trains AI on a very large prescription corpus for medication-safety guardrails (MedGuard) and diagnostic/charting support (DxPrime), with international traction.",
          "zh": "由李友專等創立,以全球大規模處方資料訓練 AI,提供用藥安全把關(MedGuard)與診斷/病歷輔助(DxPrime),並打入國際。"
        },
        "overview": {
          "en": "MedGuard fuses NHI big data with machine learning to flag inappropriate prescriptions in real time; it was piloted across the Taipei Medical University system (TMUH, Shuang-Ho, Wan Fang), issuing ~2.5M alerts/year, and is reported to be trained on ~1.3-1.5 billion prescription records with SaMD-related clearance (exact FDA status to be verified). DxPrime, powered by a Clinical Deep Reasoning Network Model, gives explainable real-time diagnostic feedback and auto-codes diagnoses; in October 2025 it became a qualified solution on Mayo Clinic Platform, reaching 52,000+ physicians in the Mayo Clinic Care Network.",
          "zh": "MedGuard(藥御守)整合健保大數據與機器學習,即時偵測不當處方,曾在北醫體系(北醫附醫、雙和、萬芳)試行,年發出約 250 萬次警示;報導稱以約 13-15 億筆處方紀錄訓練,並取得 SaMD 相關認證(FDA 狀態待查)。DxPrime 以臨床深度推理網路模型提供可解釋即時診斷回饋並自動轉換診斷碼,2025 年 10 月成為 Mayo Clinic Platform 合格解決方案,可服務 Mayo Clinic Care Network 逾 5.2 萬名醫師。"
        },
        "tags": [
          "用藥安全",
          "臨床決策",
          "SaMD",
          "Mayo Clinic",
          "北醫"
        ],
        "url": "https://www.prnewswire.com/news-releases/aesop-technology-announces-dxprime-is-now-a-qualified-solution-on-mayo-clinic-platform-302588738.html"
      },
      {
        "slug": "taichung-vgh-co-healer",
        "category": "genai",
        "title": {
          "en": "Taichung Veterans General Hospital (Co-Healer)",
          "zh": "台中榮總智慧醫療與 Co-Healer"
        },
        "summary": {
          "en": "Uses generative and agentic AI to support clinical operations, integrating TAIDE into its Co-Healer system; one of the MOHW/TFDA-designated clinical-AI validation centers.",
          "zh": "以生成式與代理型 AI 協助臨床作業,整合 TAIDE 建構 Co-Healer,並為衛福部/食藥署核可的臨床 AI 驗證中心之一。"
        },
        "overview": {
          "en": "Taichung VGH deployed Co-Healer on the home-grown TAIDE-LX-7B, using agentic AI to streamline clinical documentation, auto-generate surgical instructions and patient-education materials, and run smart wards; reporting credits it with the nation's lowest lab-error rate via broad AI assistance. The MOHW funded four medical centers as clinical (AI) validation centers: Taichung VGH, Kaohsiung Chang Gung, Tri-Service General Hospital, and Far Eastern Memorial Hospital.",
          "zh": "台中榮總部署 Co-Healer,串接本土 TAIDE-LX-7B,以代理型 AI 簡化臨床文件、自動生成手術說明書與病人衛教文件,並推動智慧病房;報導稱其檢驗錯誤率為全國最低,AI 廣泛協助降低醫護負擔。衛福部資訊處補助四家醫學中心建置臨床(AI)驗證中心,包含台中榮總、高雄長庚、三總、亞東。"
        },
        "tags": [
          "代理型AI",
          "TAIDE",
          "手術說明書",
          "臨床驗證中心"
        ],
        "url": "https://www.cw.com.tw/article/5139587"
      },
      {
        "slug": "tvgh-brain-llm",
        "category": "genai",
        "title": {
          "en": "Taipei Veterans General Hospital (TVGH Brain)",
          "zh": "台北榮總北榮腦 LLM 與北榮一號雲"
        },
        "summary": {
          "en": "Built its own TVGH Brain LLM and TVGH Cloud No.1 supercomputer for AI nursing records and precision-medicine compute; designated an MOHW AI-center lead hospital.",
          "zh": "自建北榮腦(TVGH Brain)大語言模型與北榮一號雲超級電腦,推動 AI 護理紀錄與精準醫療運算,並獲選衛福部 AI 中心責任醫院。"
        },
        "overview": {
          "en": "TVGH Brain is tuned on internal data for AI-assisted nursing records, running on TVGH Cloud No.1 (4 nodes, 32 A100 GPUs) to keep patient data on-premises; nurses dictate via speech recognition saving ~6.5 minutes per record, with built-in real-time bilingual translation. TVGH was named lead hospital for the MOHW's Responsible AI Execution Center and AI Impact Research Center within the next-gen digital-health platform, and ranked among Newsweek's 2025 World's Best Smart Hospitals (top 350). The cloud also powers prognosis prediction, genomic-sequence analysis and digital pathology.",
          "zh": "北榮腦以院內資料調教,用於 AI 輔助護理紀錄,運行於北榮一號雲(4 節點、32 片 A100 GPU)以確保個資不外流;護理師可語音辨識完成紀錄,平均每份省約 6.5 分鐘,並內建多國語言即時雙向翻譯。北榮獲選衛福部次世代數位醫療平臺中負責任 AI 執行中心與 AI 影響性研究中心責任醫院,並入選 2025 年 Newsweek 全球前 350 智慧醫院。北榮一號雲亦用於疾病預後、基因序列分析與數位病理。"
        },
        "tags": [
          "自建LLM",
          "AI護理紀錄",
          "超級電腦",
          "負責任AI",
          "數位病理"
        ],
        "url": "https://www.hst.org.tw/tw/story/content/5250"
      },
      {
        "slug": "chang-gung-asus-ai-cloud",
        "category": "genai",
        "title": {
          "en": "Chang Gung Memorial Hospital AI Inference Cloud (with ASUS)",
          "zh": "長庚醫院 AI 推論雲(與華碩)"
        },
        "summary": {
          "en": "Co-built an AI inference cloud with ASUS, integrating HIS and compute for imaging interpretation and ECG support, and adopting generative AI for training and clinical use.",
          "zh": "與華碩共建 AI 推論雲平台,整合醫療資訊系統與算力,提供影像判讀、心電圖輔助等,並導入生成式 AI 教學與臨床。"
        },
        "overview": {
          "en": "The Chang Gung system co-built an AI inference cloud with ASUS, integrating HIS and AI compute for imaging interpretation and ECG support. Linkou Chang Gung frames smart medicine as giving doctors more time for patients, not adoption for its own sake. Since 2019 Chang Gung has co-run a smart-healthcare program with the Taiwan AI Academy, adding hands-on generative-AI coursework in 2024; Kaohsiung Chang Gung is also a clinical-AI validation center.",
          "zh": "長庚醫療體系與華碩共建 AI 推論雲,整合醫療資訊系統與 AI 算力,提供影像判讀、心電圖輔助等功能。林口長庚強調用 AI 讓醫生留更多時間給病人,智慧醫療不為做而做。長庚自 2019 年起與台灣人工智慧學校合辦智慧醫療專班,2024 年首度納入生成式 AI 實作課程;高雄長庚亦為臨床 AI 驗證中心之一。"
        },
        "tags": [
          "華碩",
          "AI推論雲",
          "影像判讀",
          "心電圖",
          "臨床驗證中心"
        ],
        "url": "https://www.cw.com.tw/aging/article/5132361"
      },
      {
        "slug": "tvgh-nvidia-sas-automl",
        "category": "genai",
        "title": {
          "en": "TVGH x NVIDIA x SAS AutoML",
          "zh": "北榮 NVIDIA x SAS AutoML 與智慧醫院基建"
        },
        "summary": {
          "en": "TVGH partnered with NVIDIA and SAS on a visual data-mining AutoML system, deploying edge computing to speed AI such as intradialytic risk prediction.",
          "zh": "北榮聯手 NVIDIA 與 SAS 建立視覺化數據挖掘 AutoML 系統,部署邊緣運算加速洗腎中風險預測等 AI 落地。"
        },
        "overview": {
          "en": "TVGH uses AutoML to lower model-development barriers and edge devices to bring AI inference to the bedside (e.g., intradialytic risk prediction), combining with its TVGH Cloud No.1 and TVGH Brain LLM to form full smart-hospital infrastructure; it also aligns with the MOHW's three AI centers and the compute demands of precision imaging/genomic analysis.",
          "zh": "北榮以 AutoML 降低模型開發門檻,並透過邊緣運算裝置將 AI 推論帶到臨床現場(如洗腎過程中的風險預測),與其北榮一號雲、北榮腦 LLM 構成完整智慧醫院基礎建設;亦呼應衛福部三大 AI 中心與精準醫療影像/基因分析運算需求。"
        },
        "tags": [
          "AutoML",
          "NVIDIA",
          "SAS",
          "邊緣運算",
          "洗腎風險"
        ],
        "url": "https://blogs.nvidia.com.tw/blog/nvidia-case-study-taipei-veterans-general-hospital/"
      },
      {
        "slug": "mohw-emr-auto-coding",
        "category": "genai",
        "title": {
          "en": "MOHW EMR Auto-Coding Assist System",
          "zh": "衛福部電子病歷自動編碼輔助系統"
        },
        "summary": {
          "en": "The MOHW designed an EMR auto-coding assist system to advance documentation standardization, winning a Future Tech Award, amid legal/standardization debates on generative-AI records.",
          "zh": "衛福部設計電子病歷自動編碼輔助系統助攻病歷標準化,獲未來科技獎,呼應生成式 AI 病歷之法制與標準化議題。"
        },
        "overview": {
          "en": "The system supports EMR standardization and automated coding, reducing manual coding burden and improving exchange consistency; the Legislative Yuan has analyzed legal issues for generative-AI records and EMR exchange, reflecting that Taiwan's governance of privacy, liability and standardization for generative records is still being built out (details to be verified).",
          "zh": "系統協助電子病歷標準化與自動編碼,降低人工編碼負擔並提升交換一致性;立法院亦針對生成式 AI 病歷及電子病歷交換相關法制問題進行研析,反映台灣在生成式病歷的個資、責任歸屬與標準化治理仍在建構中(細節待查)。"
        },
        "tags": [
          "電子病歷",
          "自動編碼",
          "標準化",
          "法制",
          "未來科技獎"
        ],
        "url": "https://www.mohw.gov.tw/cp-16-84374-1.html"
      },
      {
        "slug": "tpmi-precision-medicine",
        "category": "precision",
        "title": {
          "en": "Taiwan Precision Medicine Initiative (TPMI)",
          "zh": "台灣精準醫療計畫 TPMI"
        },
        "summary": {
          "en": "Academia Sinica-led large-scale genome x EMR program; over 560,000 participants forming the world's largest Han-Chinese precision-medicine cohort, with Nature publications in 2025.",
          "zh": "中研院主導的大型基因體 x 電子病歷整合計畫,累積逾 56 萬人,建構全球最大漢人精準醫療族群,2025 年成果登《Nature》。"
        },
        "overview": {
          "en": "TPMI spans 16 medical systems and 33 hospitals (TVGH, Taichung VGH, TMU, KMU, Chang Gung, NTU, etc.), genotyping on a Taiwan-customized chip and integrating EMR to build a population-health and clinical-research resource. On October 22, 2025 two Nature papers identified three disease clusters at the DNA-variant level (cardiometabolic, autoimmune/infectious, renal-metabolic) and built polygenic risk scores (coverage reported from ~100 to a few hundred diseases; exact count to be verified) that outperform European-built models in Han populations. Enrollment was paused in late 2022 amid ethics/consent controversy, then adjusted and resumed.",
          "zh": "TPMI 跨 16 個醫療體系、33 家醫院(北榮、中榮、北醫、高醫、長庚、台大等),以台灣客製化基因晶片定型並整合 EMR,建立族群健康與臨床研究資源。2025 年 10 月 22 日兩篇《Nature》成果發表,揭示疾病在 DNA 序列層面歸納為心血管/代謝、自體免疫/感染、腎臟代謝三大群集,並開發多基因風險評分(報導稱涵蓋逾百種至數百種疾病,確切數字待查),在漢人族群預測表現優於歐美模型。計畫曾於 2022 年底因倫理/收案爭議暫停收案,後續調整再推進。"
        },
        "tags": [
          "基因晶片",
          "多基因風險評分",
          "漢人族群",
          "EMR整合",
          "Nature"
        ],
        "url": "https://www.sinica.edu.tw/news_content/55/3338"
      },
      {
        "slug": "taiwan-biobank",
        "category": "precision",
        "title": {
          "en": "Taiwan Biobank",
          "zh": "台灣人體生物資料庫 Taiwan Biobank"
        },
        "summary": {
          "en": "Taiwan's largest biobank with 200,000+ volunteers, integrating physicals, biochemistry, questionnaires, genomic and imaging data; over 1.5 PB.",
          "zh": "台灣最大人體生物資料庫,收案逾 20 萬名志願者,整合體檢、生化、問卷、基因與影像,資料量逾 1.5 PB。"
        },
        "overview": {
          "en": "Established in 2012 with a goal of 200,000 volunteers under longitudinal follow-up; data span physical measurements, biochemistry, health questionnaires, whole-genome genotyping/sequencing, methylation arrays and advanced imaging, linkable to NHI claims, cancer registry and death files. Data and specimens are available for research application, making it core infrastructure for Taiwan's population genomics and precision medicine.",
          "zh": "自 2012 年設立,目標收案 20 萬名志願者並逐年追蹤;資料涵蓋身體檢測、生化檢驗、健康問卷、全基因體定型/定序、甲基化晶片與進階醫學影像,並可串連健保、癌登與死因檔。資料與檢體可供研究申請,是台灣族群基因體與精準醫療研究的關鍵基礎設施。"
        },
        "tags": [
          "生物資料庫",
          "全基因體",
          "縱貫追蹤",
          "健保串連"
        ],
        "url": "https://www.biobank.org.tw/about_value.php"
      },
      {
        "slug": "act-genomics",
        "category": "precision",
        "title": {
          "en": "ACT Genomics (acquired by Delta)",
          "zh": "行動基因 ACT Genomics(台達電收購)"
        },
        "summary": {
          "en": "Asia's cancer-genomics leader; ACTOnco was the first Asia-based FDA-cleared comprehensive genomic profiling test for all solid tumors. Delta announced acquisition of a 90%+ stake in 2025.",
          "zh": "亞洲癌症基因檢測領導廠,ACTOnco 為亞洲首個獲美 FDA 許可的全固態腫瘤廣泛型基因檢測;2025 年由台達電宣布收購逾九成股權。"
        },
        "overview": {
          "en": "Founded in 2014 with offices in Taipei, Hong Kong, Singapore, Tokyo, Bangkok and the UK, it uses NGS across early screening, diagnosis, therapy selection and post-treatment monitoring; ACTOnco profiles 440+ cancer-associated genes and was FDA-cleared in January 2023 (previously a Prenetics company). Delta's board approved acquiring a 90%+ stake for up to US$71.78M (~NT$2.147B) on June 18, 2025 to enter the fast-growing precision-medicine market; deal-closing/regulatory status to be verified.",
          "zh": "成立於 2014 年,在台北、香港、新加坡、東京、曼谷與英國設點,以 NGS 提供癌症早篩、診斷、用藥選擇與治療後監控,ACTOnco 分析逾 440 個癌症相關基因,2023 年 1 月獲 FDA 許可(曾為 Prenetics 旗下)。台達電 2025 年 6 月 18 日董事會通過以至多 7,178 萬美元(約 21.47 億元)收購逾 90% 股權,藉以切入快速成長的精準醫療市場;交易完成與主管機關狀態待查。"
        },
        "tags": [
          "癌症NGS",
          "FDA",
          "ACTOnco",
          "台達電收購",
          "液態切片"
        ],
        "url": "https://www.deltaww.com/zh-tw/news/39763"
      },
      {
        "slug": "sofiva-genomics",
        "category": "precision",
        "title": {
          "en": "Sofiva Genomics",
          "zh": "慧智基因 Sofiva Genomics"
        },
        "summary": {
          "en": "Genetic-testing firm centered on maternal-fetal medicine and cancer precision medicine, offering 10+ NGS tests with multiple LDT certifications.",
          "zh": "以母胎醫學與癌症精準醫療為雙主軸的基因檢測公司,提供逾 10 類 NGS 檢測,並取得多項 LDTs 認證。"
        },
        "overview": {
          "en": "Offers 10+ NGS tests across prenatal/preconception, newborn, cancer genes, pharmacogenomics and rare disease; its cancer CGP panel sequences 324 cancer genes in one run (SNV/indel/CNV/fusion). It holds CAP, ISO15189 and LDT accreditations, and in 2025 obtained TFDA recognition for 37 LDT items across six categories. Cancer precision-medicine momentum rose with NGS reimbursement and pharma partnerships.",
          "zh": "提供超過 10 類 NGS 檢測,涵蓋產前/孕前、新生兒、癌症基因、精準用藥基因、罕病基因等;其癌症 CGP 套組以 NGS 單次檢測 324 個癌症基因(SNV/indel/CNV/fusion)。具 CAP、ISO15189 與 LDTs 認證;2025 年取得 TFDA 對 37 項 LDTs 檢測(六大類)之認可。隨 NGS 納健保與藥廠合作,癌症精準業務動能上升。"
        },
        "tags": [
          "生殖醫學",
          "癌症CGP",
          "LDTs",
          "TFDA",
          "324基因"
        ],
        "url": "https://www.sofiva.com.tw/Laboratory/LaboratoryDetail?catalogNo=TST00004"
      },
      {
        "slug": "genesis-genetics-asia",
        "category": "precision",
        "title": {
          "en": "Genesis Genetics Asia (formerly CreSource/GGA)",
          "zh": "訊聯基因數位(原創源生技 GGA)"
        },
        "summary": {
          "en": "A Healthbanks-group company (formerly CreSource/GGA) focused on precision-health genomics and digital health; serves about half of Taiwan's newborns.",
          "zh": "訊聯集團旗下,原名創源生技,主打精準健康基因醫學與數位醫療雙核心,服務全台約半數新生兒。"
        },
        "overview": {
          "en": "Founded in 2008, partnering with 500+ clinics covering ~95.5% of reproductive centers across 12 countries, with 1.6M+ genetic records; services span NIPT, reproductive medicine, cancer-risk/adult-health and pharmacogenomics. It partnered with Taizon Biotech on liquid-biopsy technology for liver-cancer early diagnosis and post-op monitoring; any 2024 listing/capital events to be verified.",
          "zh": "成立於 2008 年,合作逾 500 家院所、涵蓋約 95.5% 生殖中心,服務橫跨 12 國、累積逾 160 萬筆基因資料;服務含 NIPT、生殖醫學、癌症風險與成人健康、藥物基因等。曾與泰宗生技合作開發肝癌液態切片技術(早期診斷與術後監控);2024 年是否上市等資本事件待查。"
        },
        "tags": [
          "NIPT",
          "液態切片",
          "藥物基因",
          "數位醫療",
          "生殖醫學"
        ],
        "url": "https://www.gga.asia/en/index"
      },
      {
        "slug": "genomics-bioci-tech",
        "category": "precision",
        "title": {
          "en": "Genomics BioSci & Tech (GBPS)",
          "zh": "基龍米克斯生物科技(基米)"
        },
        "summary": {
          "en": "One of Taiwan's largest commercial genome-sequencing firms, spanning research sequencing, clinical testing and nucleic-acid/peptide CDMO; building an APAC sequencing hub.",
          "zh": "全台最大商業基因體定序公司之一,兼營科研定序、臨床檢測與核酸/胜肽 CDMO,正打造亞太基因定序中心。"
        },
        "overview": {
          "en": "Founded in 2001 (by Te-Yuan Chou and Meng-Hsien Chou), with three core lines: research services, clinical testing, and nucleic-acid/peptide CDMO. Clinically it offers NIPT, SMA and Fragile-X testing, with CAP-accredited, fully-in-Taiwan NIPT. 2024 consolidated revenue was ~NT$480M; it announced an APAC sequencing hub with an NGS leader (partner specifics to be verified).",
          "zh": "成立於 2001 年(周德源、周孟賢父子創辦),三大核心為科研服務、臨床檢測與核酸/胜肽 CDMO。臨床端提供 NIPT、SMA、X 染色體脆折症等基因檢測,NIPT 全程台灣檢測並通過 CAP。2024 年合併營收約 4.8 億元;宣布攜手 NGS 龍頭廠打造亞太基因定序中心(合作對象細節待查)。"
        },
        "tags": [
          "基因體定序",
          "NIPT",
          "CDMO",
          "亞太定序中心",
          "CAP"
        ],
        "url": "https://money.udn.com/money/story/5612/8803359"
      },
      {
        "slug": "pharmigene",
        "category": "precision",
        "title": {
          "en": "PharmiGene (pharmacogenomics)",
          "zh": "世基生醫 PharmiGene(藥物基因檢測)"
        },
        "summary": {
          "en": "Pharmacogenomics-focused firm helping avoid severe drug allergies (SJS/TEN), aligned with NHI-covered pre-prescription HLA screening.",
          "zh": "專注藥物基因檢測,協助避免嚴重藥物過敏(如 SJS/TEN),對應健保已給付的 HLA 用藥前篩檢。"
        },
        "overview": {
          "en": "Provides single-gene, multifactorial and pharmacogenomic (drug-allergy/treatment-sensitivity) testing. In Taiwan, carbamazepine (antiepileptic) and allopurinol (urate-lowering) most often trigger SJS/TEN; NHI covers pre-prescription HLA-B*1502 (carbamazepine) and HLA-B*5801 (allopurinol) testing, with HLA-B*1502 carriers facing up to ~1,300x higher adverse-reaction risk on carbamazepine.",
          "zh": "提供單基因遺傳病、多因子遺傳病與藥物基因(特定藥物過敏/治療敏感性)檢測。台灣臨床上 Carbamazepine(抗癲癇)與 Allopurinol(降尿酸)最易引發 SJS/TEN;健保已給付用藥前 HLA-B*1502(Carbamazepine)與 HLA-B*5801(Allopurinol)基因檢測,攜帶 HLA-B*1502 者用 Carbamazepine 不良反應風險可高達 1,300 倍。"
        },
        "tags": [
          "藥物基因體學",
          "HLA",
          "SJS/TEN",
          "健保給付",
          "用藥安全"
        ],
        "url": "https://pharmigene.com.tw/%E5%9F%BA%E5%9B%A0%E6%AA%A2%E6%B8%AC%E8%88%87%E7%B2%BE%E6%BA%96%E9%86%AB%E7%99%82/"
      },
      {
        "slug": "gene-health",
        "category": "precision",
        "title": {
          "en": "Gene Health",
          "zh": "台灣基康 Gene Health"
        },
        "summary": {
          "en": "Genetic-testing company centered on prenatal fetal testing and preventive medicine; partnered with Vita Genomics and BGI to bring NGS-based NIPT.",
          "zh": "以產前胎兒基因檢測與預防醫學為主的基因檢測公司,與賽亞基因、華大基因合作導入 NGS NIPT。"
        },
        "overview": {
          "en": "In 2012 it partnered with Hsi-Hsiung (Stephen) Chen's Vita Genomics to develop buccal-swab personalized testing (cancer, cardio-cerebrovascular, type-2 diabetes, Alzheimer's, Parkinson's risk); in 2014 it teamed with BGI Hong Kong to offer NGS-based NIFTY PLUS noninvasive prenatal testing, working with 200+ OB/GYN clinics nationwide.",
          "zh": "2012 年與陳奕雄博士的賽亞基因合作開發口腔黏膜個人化基因檢測(癌症、心腦血管、第二型糖尿病、阿茲海默、帕金森等風險);2014 年與華大基因(香港 BGI)合作以 NGS 提供 NIFTY PLUS 非侵入性胎兒染色體檢測,並與全台逾 200 家婦產科院所合作。"
        },
        "tags": [
          "NIPT",
          "預防醫學",
          "BGI",
          "賽亞基因",
          "產前檢測"
        ],
        "url": "https://www.genehealth.com.tw/about"
      },
      {
        "slug": "aetherai-digital-pathology",
        "category": "precision",
        "title": {
          "en": "aetherAI (digital pathology)",
          "zh": "雲象科技 aetherAI(數位病理)"
        },
        "summary": {
          "en": "Taiwan's leading digital-pathology and medical-imaging AI firm; Quanta-backed, listed on the Emerging Board in 2024, with whole-slide pathology, bone-marrow smear and colonoscopy polyp products.",
          "zh": "台灣數位病理與醫療影像 AI 領導廠,廣達投資、2024 年登興櫃,產品涵蓋全玻片病理、骨髓抹片與大腸鏡瘜肉偵測。"
        },
        "overview": {
          "en": "Products include the aetherSlide digital-pathology platform, aetherAI Hema bone-marrow smear analysis, and aetherAI Endo colorectal-polyp detection, applied across gastric, lung, blood and colorectal cancers. It holds 70%+ share among Taiwanese hospitals adopting digital pathology, with overseas (Germany, Japan) revenue at ~40-50%. It listed on the Emerging Board on Nov 26, 2024 at NT$32/share (Quanta ~15% stake); filed for the Taiwan Innovation Board on Nov 21, 2025; and launched a fully automated slide-scanning solution with Techman Robot and Hamamatsu at the 2025 Healthcare+ Expo.",
          "zh": "產品含 aetherSlide 數位病理平台、aetherAI Hema 骨髓抹片分析、aetherAI Endo 大腸瘜肉偵測,應用於胃癌、肺癌、血癌、大腸癌等多癌別。在台灣導入數位病理醫院市佔逾 70%,海外(德、日)營收占約 40-50%。2024/11/26 以每股 32 元登興櫃(廣達持股約 15%);2025/11/21 申請台灣創新板上市,並與達明機器人、Hamamatsu 合作推出全自動病理切片掃描方案(2025 醫療科技展發表)。"
        },
        "tags": [
          "數位病理",
          "全玻片影像",
          "廣達",
          "興櫃",
          "達明機器人"
        ],
        "url": "https://technews.tw/2024/11/25/ai-digital-pathology-platform/"
      },
      {
        "slug": "nhi-cancer-ngs-reimbursement",
        "category": "precision",
        "title": {
          "en": "NHI Reimbursement for Cancer NGS",
          "zh": "健保癌症 NGS 給付"
        },
        "summary": {
          "en": "From May 1, 2024, NHI reimburses cancer NGS across 19 cancer types, benefiting ~20,000+ patients per year.",
          "zh": "健保自 2024 年 5 月 1 日給付癌症次世代基因定序(NGS),涵蓋 19 類癌症,每年約 2 萬餘名癌友受惠。"
        },
        "overview": {
          "en": "Covered cancers include NSCLC, triple-negative breast, ovarian/fallopian/primary peritoneal, prostate, pancreatic, NTRK-fusion solid tumors, cholangiocarcinoma, thyroid, colorectal, urothelial, melanoma, GIST, gastric, and several hematologic malignancies. Fixed reimbursement spans three panels: BRCA 10,000 points, small (<=100 genes) 20,000, large (>100 genes) 30,000 - once per cancer type per lifetime - with hospital eligibility requirements such as a Molecular Tumor Board (MTB).",
          "zh": "適用癌別含非小細胞肺癌、三陰性乳癌、卵巢/輸卵管/原發性腹膜癌、攝護腺癌、胰臟癌、NTRK 融合實體瘤、膽管癌、甲狀腺癌、大腸直腸癌、泌尿道上皮癌、黑色素瘤、胃腸道間質瘤、胃癌及多種血液腫瘤等。分三套組定額給付:BRCA 1 萬點、小套組(<=100 基因)2 萬點、大套組(>100 基因)3 萬點,每人每癌別終生一次,且醫院須設分子腫瘤委員會(MTB)等資格。"
        },
        "tags": [
          "健保",
          "NGS給付",
          "19癌別",
          "MTB",
          "精準用藥"
        ],
        "url": "https://www.nhi.gov.tw/ch/cp-14565-e02e0-3255-1.html"
      },
      {
        "slug": "healthy-taiwan-plan",
        "category": "precision",
        "title": {
          "en": "Healthy Taiwan Deep-Cultivation Plan",
          "zh": "健康台灣 / 健康臺灣深耕計畫"
        },
        "summary": {
          "en": "The Lai administration's flagship Healthy Taiwan vision advances precision and smart-tech medicine; the deep-cultivation plan (2025-2029) carries a NT$48.9B budget.",
          "zh": "賴清德政府以健康台灣為旗艦願景,推動精準醫療與智慧科技醫療;深耕計畫(114-118 年)總經費 489 億元。"
        },
        "overview": {
          "en": "The plan targets four domains - improving working conditions, diversified talent training, smart-tech medicine, and socially responsible sustainability - operationalizing tiered care and vertical integration, healthcare-workforce retention, and facility renewal. The broader agenda includes Long-Term Care 3.0, the precision-health strategic industry and the five trusted industries framework; the MOHW also stands up clinical-AI validation centers and a Responsible AI Execution Center for institutional governance.",
          "zh": "健康臺灣深耕計畫聚焦優化醫療工作條件、多元人才培育、智慧科技醫療、社會責任永續四大範疇,落實分級醫療與垂直整合、醫事人力留任及醫療環境再造。整體政策亦含長照 3.0、精準健康戰略產業與五大信賴產業框架;衛福部並設臨床 AI 驗證中心與負責任 AI 執行中心推動制度化治理。"
        },
        "tags": [
          "健康台灣",
          "國家政策",
          "智慧醫療",
          "人才培育",
          "489億"
        ],
        "url": "https://www.ey.gov.tw/Page/5A8A0CB5B41DA11E/f1618406-1ed7-4e72-bd4f-d1b6faaf8381"
      },
      {
        "slug": "precision-health-strategic-industry",
        "category": "precision",
        "title": {
          "en": "Precision-Health Strategic Industry & Five Trusted Industries",
          "zh": "精準健康戰略產業與五大信賴產業"
        },
        "summary": {
          "en": "The government designates precision health a strategic industry within the five trusted industries, with the NSTC fostering cross-disciplinary talent and industrialization.",
          "zh": "政府將精準健康列為戰略產業並納入五大信賴產業,國科會跨領域培育人才、推動精準健康產業化。"
        },
        "overview": {
          "en": "The biotech sector frames precision health around prevention, early diagnosis and health maintenance; ITRI estimates the global precision-health market at ~US$319.8B (2020) rising to US$584.7B (2025), with Taiwan's market ~NT$14.2B in 2025. The NSTC's 12th board meeting showcased cross-disciplinary talent cultivation and industry promotion; MOEA completed nearly 70 coaching cases, 23 listing applications and 9 approvals in 2022-2024 (product specifics to be verified).",
          "zh": "生技產業以預防、早期診斷、健康維護為核心提出精準健康概念;工研院推估全球精準健康市場 2020 年約 3,198 億美元、2025 年達 5,847 億美元,台灣 2025 年市場規模約新台幣 142 億元。國科會第 12 次委員會議展現精準健康產業跨領域人才培育與促進產業發展成果;經濟部 2022-2024 完成近 70 案輔導、23 項上市申請、9 項核准(產品細節待查)。"
        },
        "tags": [
          "精準健康",
          "五大信賴產業",
          "國科會",
          "ITRI",
          "產業化"
        ],
        "url": "https://www.nstc.gov.tw/folksonomy/detail/83b0a1aa-b655-4cc4-a599-2a89d337c43e?l=ch"
      },
      {
        "slug": "qt-medical-pca-500",
        "category": "wearable",
        "title": {
          "en": "QT Medical PCA 500 (12-lead ECG)",
          "zh": "宇心生醫 PCA 500"
        },
        "summary": {
          "en": "One of the world's most compact 12-lead ECG systems, using patented snap-on electrodes to cut acquisition time and reduce lead-misplacement errors; usable both at home and in clinical settings.",
          "zh": "全球最精巧的 12 導程心電圖系統,以專利貼片電極縮短量測時間、降低貼片錯位錯誤;可個人居家或臨床使用。"
        },
        "overview": {
          "en": "QT Medical's PCA 500 first received FDA 510(k) clearance in 2018 (professional and personal non-acute use), and in Feb 2024 obtained an additional FDA 510(k) expanding its indication to all healthcare settings (hospitals, ICUs, ERs, ambulances). It holds TFDA licensing and a CE mark. The proprietary electrode set is claimed to save ~70% of procedure time. (QT Medical is a US firm with Taiwanese-background founders, established with NIH support.)",
          "zh": "宇心生醫(美商,NIH 支持設立,創辦人具台灣背景)的 PCA 500 於 2018 年首獲 FDA 510(k)(非急性照護之專業與個人使用),2024 年 2 月再獲 FDA 510(k) 擴充適應症至所有醫療場域(含醫院、ICU、急診、救護車)。具 TFDA 許可與 CE 標誌。電極設計號稱可省下約 70% 量測時間。"
        },
        "tags": [
          "ECG",
          "12導程",
          "心電圖",
          "急性照護",
          "FDA",
          "TFDA"
        ],
        "url": "https://qtmedical.com/zh-tw/"
      },
      {
        "slug": "singular-wings-beatinfo",
        "category": "wearable",
        "title": {
          "en": "Singular Wings Medical (BEATINFO ECG)",
          "zh": "奇翼醫電 BEATINFO ECG 感測器"
        },
        "summary": {
          "en": "A Hsinchu startup offering medical-grade personal health-record devices that continuously capture ECG, respiration, skin temperature and posture, with AI algorithms analysing the ECG signal.",
          "zh": "新竹新創,提供醫療級個人健康紀錄裝置,連續蒐集心電圖、呼吸、體溫與姿態,並以 AI 演算法分析 ECG 訊號。"
        },
        "overview": {
          "en": "Founded 2015. Portfolio includes the BEATINFO ECG sensor + BEATINFO Health app, Cardinova ECG, and a BEATINFO Pets app. It co-developed a group cardiovascular monitoring system with Taipei Medical University Hospital. The ECG sensor obtained TFDA approval in Feb 2023; FDA 510(k) status to be verified. ISO 13485 certified.",
          "zh": "2015 年成立。產品線含 BEATINFO ECG 感測器與必應健康 App、Cardinova 心電圖、以及寵物用 BEATINFO Pets。與北醫附醫合作開發群體心血管監測系統。ECG 感測器於 2023 年 2 月取得 TFDA 許可;FDA 510(k) 進度待查。具 ISO 13485。"
        },
        "tags": [
          "ECG",
          "心電圖貼片",
          "遠距監測",
          "AI心律分析",
          "新創",
          "北醫附醫"
        ],
        "url": "https://singularwings.com/"
      },
      {
        "slug": "giant-mobile-ecg-ai",
        "category": "rpm",
        "title": {
          "en": "Giant Mobile ECG-AI Cloud",
          "zh": "巨量移動 移動心電圖 AI 辨識 SaaS"
        },
        "summary": {
          "en": "A pure-SaaS AI cloud platform for ECG interpretation that is compatible with multiple ECG devices, including Apple Watch and 24-hour Holter monitors.",
          "zh": "提供相容多種 ECG 裝置(含 Apple Watch、24 小時 Holter)的 AI 雲端判讀平台,純 SaaS 模式。"
        },
        "overview": {
          "en": "Markets a mass mobile ECG AI-recognition SaaS service bridging consumer- and medical-grade ECG sources for cloud-based arrhythmia interpretation. It completed an FDA Third Party Review and previously targeted FDA clearance in 2023 while accelerating TFDA registration; current clearance/reimbursement status is to be verified.",
          "zh": "主打巨量移動心電圖 AI 辨識 SaaS 服務,可橋接消費級與醫療級 ECG 來源,雲端 AI 判讀心律。曾通過 FDA Third Party Review、原預計 2023 年取得 FDA 許可並加速 TFDA 取證;最新核准與給付狀態待查。"
        },
        "tags": [
          "ECG",
          "AI判讀",
          "SaaS",
          "雲端",
          "Holter",
          "AppleWatch相容"
        ],
        "url": "https://news.gbimonthly.com/tw/magazine/article_show.php?num=55803"
      },
      {
        "slug": "asus-vivowatch",
        "category": "wearable",
        "title": {
          "en": "ASUS VivoWatch (BP / ECG apps)",
          "zh": "華碩 VivoWatch 系列(血壓 / 心電圖應用軟體)"
        },
        "summary": {
          "en": "Health watches/bands integrating a pair of medical-grade ECG and PPG sensors with ASUS HealthAI, focused on blood pressure, SpO2, heart rate, sleep and mood monitoring.",
          "zh": "整合醫療級 ECG 與 PPG 雙感測器及 ASUS HealthAI 的健康手錶/手環,主打血壓、血氧、心率、睡眠與情緒監測。"
        },
        "overview": {
          "en": "The ASUS Blood Pressure App holds a TFDA SaMD licence (MOHW device licence No. 007812, to be verified), billed as Taiwan's first self-developed wearable blood-pressure app; an ASUS ECG App is also MOHW-certified. Lead models include VivoWatch 5 (HC-B05), VivoWatch SP (HC-A05) and VivoWatch 6 / 6 AERO, positioned as relatively affordable medically-certified BP wearables.",
          "zh": "華碩血壓應用軟體取得 TFDA 醫療器材軟體許可證(衛部醫器製字第 007812 號,證號待查),稱為台灣首款自主研發的穿戴血壓應用軟體;另有華碩心電圖應用軟體獲衛福部認證。主力機型含 VivoWatch 5 (HC-B05)、VivoWatch SP (HC-A05)、VivoWatch 6 / 6 AERO(市場定位為相對平價的醫材認證血壓量測穿戴)。"
        },
        "tags": [
          "智慧手錶",
          "血壓",
          "ECG",
          "血氧",
          "睡眠",
          "SaMD",
          "TFDA"
        ],
        "url": "https://www.asus.com/tw/mobile/wearable-healthcare/asus-vivowatch/"
      },
      {
        "slug": "garmin-health-taiwan",
        "category": "wearable",
        "title": {
          "en": "Garmin Health Taiwan",
          "zh": "Garmin Health(台灣)"
        },
        "summary": {
          "en": "Provides 24/7 continuous health monitoring (optical HR, HRV, Pulse Ox SpO2, advanced sleep, Body Battery) and opens its data for clinical research collaborations.",
          "zh": "以光學心率、HRV、Pulse Ox 血氧、進階睡眠與身體能量等指標提供 24 小時連續健康監測,並開放數據供臨床研究。"
        },
        "overview": {
          "en": "Garmin's advanced sleep analytics fuse HR, HRV, SpO2, respiration and activity; sleep-period HRV is used to gauge recovery. In Taiwan it partners with research bodies - e.g., the EMBRACE programme building AI prediction algorithms from Garmin wearables + smartphone + self-report data for gestational diabetes, pregnancy hypertension and antenatal depression. A 2025 Garmin Health Summit promoted digital-health integration. Garmin devices are consumer health wearables rather than diagnostic medical devices (medical-grade claims to be verified case-by-case).",
          "zh": "Garmin 進階睡眠分析整合心率、HRV、血氧、呼吸速率與活動數據;睡眠期間 HRV 用於評估恢復狀態。台灣端與研究機構合作,例如 EMBRACE 計畫以 Garmin 穿戴 + 手機 + 自陳數據開發 AI 預測演算法,應用於妊娠糖尿病、孕期高血壓與產前憂鬱等個人化健康介入。2025 年舉辦 Garmin Health 高峰會推動數位健康整合。Garmin 為消費級健康穿戴而非診斷型醫材(醫療級宣稱待個案查證)。"
        },
        "tags": [
          "智慧手錶",
          "HRV",
          "血氧",
          "睡眠",
          "健康研究",
          "EMBRACE"
        ],
        "url": "https://www.garmin.com.tw/news/newscenter/news-2025-oct-garmin-health-summit/"
      },
      {
        "slug": "apple-watch-ecg-taiwan",
        "category": "wearable",
        "title": {
          "en": "Apple Watch ECG (Taiwan)",
          "zh": "Apple Watch ECG / 心律不整通知(台灣開通)"
        },
        "summary": {
          "en": "Consumer-grade single-lead ECG and irregular-rhythm notifications, enabled in Taiwan after TFDA approval, detecting atrial fibrillation only.",
          "zh": "消費級手錶的單導程 ECG 與不規則心律通知,於台灣經 TFDA 核准後開通,僅偵測心房顫動。"
        },
        "overview": {
          "en": "The ECG App and Irregular Rhythm Notification software cleared TFDA in Aug-Sep 2020 and went live in Taiwan on 15 Dec 2020 via software update (ECG in iOS 14.3, IRN in iOS 14.4). Limited to Series 4 and later, detecting only atrial fibrillation and excluding certain user groups. A flagship example of imported consumer-wearable SaMD in Taiwan.",
          "zh": "心電圖應用軟體與心律不整通知軟體於 2020 年 8-9 月通過 TFDA 醫材許可,同年 12 月 15 日在台以軟體更新開通(ECG 於 iOS 14.3、心律不整通知於 iOS 14.4)。僅限 Series 4 以上、偵測範圍限心房顫動,並排除部分族群(如已知房顫者、特定年齡)。是台灣境外輸入消費穿戴 SaMD 的代表性案例。"
        },
        "tags": [
          "智慧手錶",
          "ECG",
          "心房顫動",
          "TFDA",
          "消費穿戴"
        ],
        "url": "https://ibmi.taiwan-healthcare.org/zh/news_detail.php?REFDOCTYPID=0o4dd9ctwhtyumw0&REFDOCID=0qgs3zo66sp6m3y4"
      },
      {
        "slug": "faceheart-vitals-rppg",
        "category": "wearable",
        "title": {
          "en": "FaceHeart Vitals (rPPG contactless)",
          "zh": "鉅怡智慧 FaceHeart Vitals(rPPG 非接觸生理量測)"
        },
        "summary": {
          "en": "Uses a standard RGB camera to scan the face and, via remote photoplethysmography (rPPG) + AI, measures HR, blood pressure, SpO2, respiration and HRV in ~50 seconds, contact-free.",
          "zh": "以一般 RGB 鏡頭做臉部掃描,透過遠程光體積描記 (rPPG) + AI 在約 50 秒內量測心率、血壓、血氧、呼吸與 HRV。"
        },
        "overview": {
          "en": "Billed as the world's first FDA-cleared contactless vital-sign product, delivered as an SDK embeddable into phones, tablets, PCs, smart TVs and smart mirrors. FDA heart-rate clearance dates to 2023; in 2025 it added FDA Class-II SaMD clearance for respiratory-rate (+/-2 breaths/min). It built a >300-million-image clinical database with NTU, Chang Gung and Taipei VGH, and plans AFib detection, heart-failure risk and cardiovascular-age parameters. TFDA status in Taiwan to be verified.",
          "zh": "號稱全球首個取得 FDA 認證的非接觸式生理量測產品。以 SDK 形式整合至手機、平板、電腦、智慧電視、智慧鏡等。FDA 心率量測認證始於 2023;2025 年再取得 FDA 第二級醫材軟體的呼吸速率量測認證(誤差正負 2 次/分鐘)。與台大、長庚、北榮等合作建置逾 3 億張影像臨床資料庫;規劃導入心房顫動偵測、心衰風險、心血管年齡等參數。TFDA 在台核准狀態待查。"
        },
        "tags": [
          "rPPG",
          "非接觸",
          "AI醫材",
          "心率",
          "血壓",
          "呼吸",
          "FDA",
          "SDK"
        ],
        "url": "https://money.udn.com/money/story/5724/8770980"
      },
      {
        "slug": "bionime-ifree-cgm",
        "category": "wearable",
        "title": {
          "en": "Bionime / RIGHTEST iFree CGM",
          "zh": "華廣生技 / 瑞特 安活 iFree CGM"
        },
        "summary": {
          "en": "A Taiwan-made continuous glucose monitoring (CGM) system updating readings every minute, with a rechargeable, reusable transmitter (5-year warranty) aimed at cutting consumable waste.",
          "zh": "台灣國產連續血糖監測 (CGM) 系統,感測值每分鐘更新,發射器可充電重複使用(5 年保固),以降低耗材浪費為訴求。"
        },
        "overview": {
          "en": "Bionime's (founded 2003) RIGHTEST brand offers the iFree CGM, one of Taiwan's few domestically made CGMs, using a patch + rechargeable Bluetooth transmitter (e.g., GM700SB). Of the three CGMs available in Taiwan - Abbott and Medtronic (imported) and Bionime (domestic) - local manufacture is seen as key to improving reimbursement access and lowering cost.",
          "zh": "華廣生技 (Bionime, 2003 年創立) 旗下品牌瑞特 (RIGHTEST) 的安活 iFree CGM 是台灣少數國產 CGM;以貼片 + 可重複使用藍牙發射器架構切入全球 CGM 市場(GM700SB 等型號)。台灣 CGM 市場目前三款:亞培、美敦力(進口)與華廣(國產);國產化被視為提高給付可近性與壓低成本的關鍵。"
        },
        "tags": [
          "CGM",
          "連續血糖",
          "國產醫材",
          "糖尿病",
          "貼片感測",
          "藍牙"
        ],
        "url": "https://www.rightest.com/zh-TW/"
      },
      {
        "slug": "cgm-nhi-reimbursement",
        "category": "rpm",
        "title": {
          "en": "CGM NHI Reimbursement (Type-1 Diabetes)",
          "zh": "CGM 健保給付(第一型糖尿病)"
        },
        "summary": {
          "en": "Since 2017 Taiwan has conditionally reimbursed CGM for eligible Type-1 diabetes patients; in 2025 the MOHW pledged to review loosening eligibility and access channels by year-end.",
          "zh": "台灣自 2017 年起對符合資格的第一型糖尿病患有條件給付 CGM;衛福部於 2025 年允諾年底前研議放寬適用對象與申請通路。"
        },
        "overview": {
          "en": "Status quo: conditional Type-1 coverage (max twice/year, >=3-month interval); Type-2 not covered. Clinicians propose letting Type-1 patients with catastrophic-illness cards choose between test strips and CGM consumables on chronic prescriptions, and allowing clinic-level claims to widen access, with paediatric Type-1 prioritised. Exact scope and timing are to be verified pending the NHIA's formal notice.",
          "zh": "現況:第一型糖尿病有條件給付(一年最多 2 次、每次間隔 >=3 個月),第二型尚無給付。學界建議讓持重大傷病證明之第一型患者於慢性病連續處方箋中血糖試紙與 CGM 耗材二選一,並開放診所申請以提高可近性;第一型兒少被列優先。放寬細節與時程屬待查(以健保署正式公告為準)。"
        },
        "tags": [
          "CGM",
          "健保給付",
          "第一型糖尿病",
          "政策",
          "待查"
        ],
        "url": "https://www.commonhealth.com.tw/article/93290"
      },
      {
        "slug": "health2sync-insulrate",
        "category": "dtx",
        "title": {
          "en": "Health2Sync InsulRate (DTx)",
          "zh": "慧康生活科技 易速胰 InsulRate(DTx)"
        },
        "summary": {
          "en": "Taiwan's first TFDA-licensed digital therapeutic - insulin-dose-titration software helping diabetes patients adjust insulin doses safely.",
          "zh": "台灣第一個取得 TFDA 許可證的數位療法 - 胰島素劑量調整軟體,協助糖尿病患安全調整胰島素劑量。"
        },
        "overview": {
          "en": "InsulRate is a Class-II SaMD developed by Health2Sync's medical-device arm; TFDA notice dated 23 Oct 2023. It is a prescription/clinical-oriented DTx. No NHI reimbursement pathway is established yet; Health2Sync is working with Sanofi to push DTx into NHI coverage, which - if approved in 2026 - would become a new revenue line.",
          "zh": "易速胰為第二等級醫療器材軟體,由慧康(智抗糖 Health2Sync)旗下慧康數位醫療器材開發,TFDA 公告日 2023-10-23。屬處方/臨床導向 DTx。健保給付路徑尚未確立;慧康與賽諾菲 (Sanofi) 合作推動 DTx 納健保,若 2026 年通過將成新營收來源。"
        },
        "tags": [
          "DTx",
          "數位療法",
          "胰島素",
          "糖尿病",
          "SaMD",
          "TFDA",
          "台灣首例"
        ],
        "url": "https://blog.health2sync.com/insultrate-tfda-approval/"
      },
      {
        "slug": "health2sync-platform",
        "category": "dtx",
        "title": {
          "en": "Health2Sync chronic-disease platform",
          "zh": "智抗糖 慢病管理平台"
        },
        "summary": {
          "en": "A large Asian chronic-disease AI platform connecting glucose and other measurements with education, providers and insurers, expanding overseas (notably Japan) via DTx and pay-for-performance models.",
          "zh": "亞洲大型慢性病 AI 平台,串接血糖等量測、衛教與醫療/保險,並以 DTx 與論質計酬模式拓展日本等海外市場。"
        },
        "overview": {
          "en": "Health2Sync listed on Taiwan's emerging-stock board on 19 Nov 2025 (ticker 7851), positioning itself as Asia's largest chronic-disease AI platform. It closed a >US$20M Series C in Mar 2025 (led by CDIB/Taishin's Buffalo III biotech fund). Since 2023 it has entered Japan's corporate-insurer (Kenpo) market on a pay-for-performance basis, partnering 55+ entities incl. Mitsubishi Electric, Hitachi, NTT and the cities of Osaka and Yokohama; Japan revenue doubled two years running and became its #2 revenue source in 2025. Pharma/device partners include Sanofi, Novo Nordisk and Abbott.",
          "zh": "慧康於 2025-11-19 登錄興櫃(代碼 7851),定位打造亞洲最大慢性病 AI 醫療平台。2025 年 3 月完成 C 輪逾 2,000 萬美元(台杉水牛三號生技基金領投)。自 2023 年起進軍日本企業健保 (Kenpo) 市場,採論質計酬,已與三菱電機、日立、NTT、大阪市、橫濱市等逾 55 家單位合作,日本營收連兩年倍增、為 2025 年第二大收入來源。與賽諾菲、諾和諾德、亞培等藥廠/醫材商合作。"
        },
        "tags": [
          "慢病管理",
          "糖尿病",
          "DTx",
          "論質計酬",
          "興櫃",
          "日本市場"
        ],
        "url": "https://www.inside.com.tw/article/40079-health2sync-to-debut-on-taiwan-otc-aiming-to-build-asias-largest-ai-platform-for-chronic-disease-care"
      },
      {
        "slug": "quanta-qoca-platform",
        "category": "rpm",
        "title": {
          "en": "Quanta QOCA platform (aim / apc / home)",
          "zh": "廣達 QOCA 醫療雲(aim / apc / home)"
        },
        "summary": {
          "en": "Quanta's family of AI medical-cloud platforms - AI Medical Cloud (aim), health care (apc) and home telecare (home) - linking vital-sign monitoring with analytics.",
          "zh": "廣達電腦的 AI 醫療雲平台群,涵蓋 AI 醫療雲 (aim)、健康照護 (apc) 與居家遠距照護 (home),串接生理數據監測與分析。"
        },
        "overview": {
          "en": "QOCA home lets seniors, chronic-disease and post-op patients self-manage at home while caregivers observe and consult via the cloud; QOCA's portable ECG lets home patients track long-term and upload daily to hospitals, while inpatient data streams to nursing stations in real time. QOCA aim provides AI tools and research workflows over medical images and structured data. Quanta positions QOCA as one of Taiwan's most widely deployed medical clouds (mascot: the quokka).",
          "zh": "QOCA home 讓長者、慢病或術後患者在家自我健康管理,照護者經雲端遠端觀測並諮詢;QOCA 的攜帶式心電圖計可讓居家患者長期追蹤、每日上傳醫院,住院患者則即時匯入護理站。QOCA aim 提供醫療影像與結構化數據的 AI 分析工具與研究流程。廣達自詡打造台灣覆蓋率大的醫療雲,吉祥物為短尾矮袋鼠 Quokka。"
        },
        "tags": [
          "醫療雲",
          "RPM",
          "居家照護",
          "攜帶式ECG",
          "AI影像",
          "廣達"
        ],
        "url": "https://www.bnext.com.tw/article/59822/quanta-qoca-aim"
      },
      {
        "slug": "smart-sleep-check",
        "category": "rpm",
        "title": {
          "en": "Smart Sleep Check (Quanta x CMUH)",
          "zh": "廣達 x 中國醫附醫 智眠檢(居家睡眠檢測)"
        },
        "summary": {
          "en": "A single-lead-ECG + AI home sleep-apnea test using one lightweight device for up to 7 nights at home, with app upload to a cloud platform that generates the report.",
          "zh": "以單導程心電圖 + AI 的居家睡眠呼吸中止檢測,單一輕巧儀器即可在家連續監測達 7 天,App 上傳雲端產生報告。"
        },
        "overview": {
          "en": "CMUH's sleep centre partners with Quanta, using Quanta's portable AI-ECG recorder and deep learning over apnea-related ECG changes: 92.7% apnea-event detection, 93.2% arousal detection and 95.8% accuracy in classifying severe sleep apnea. It helps relieve Taiwan's PSG-bed shortage (~260+ beds). Still in clinical testing, with plans to obtain TFDA smart-device clearance before clinical rollout (clearance status: to be verified).",
          "zh": "中國醫藥大學附設醫院睡眠中心與廣達合作,採廣達攜帶式 AI 心電圖測量儀,依睡眠呼吸中止時的心電訊號變化以深度學習判讀:呼吸中止事件偵測 92.7%、覺醒事件 93.2%、嚴重睡眠呼吸中止症分類 95.8% 準確度。可緩解全台 PSG 床數不足(約 260+ 張)。持續臨床測試中,規劃取得 TFDA 智慧醫材認證後導入臨床(核准狀態待查)。"
        },
        "tags": [
          "睡眠呼吸中止",
          "居家檢測",
          "單導程ECG",
          "AI",
          "廣達",
          "中國醫"
        ],
        "url": "https://www.cmuh.cmu.edu.tw/NewsInfo/NewsArticle?no=8487"
      },
      {
        "slug": "somnics-inap",
        "category": "dtx",
        "title": {
          "en": "Somnics iNAP (negative-pressure therapy)",
          "zh": "萊鎂醫 iNAP 負壓呼吸治療裝置"
        },
        "summary": {
          "en": "A sleep-apnea therapy device that uses oral negative pressure to keep the tongue from falling back and maintain an open upper airway, marketed as comfortable, quiet and portable.",
          "zh": "以口腔負壓牽引避免舌根後倒、維持上呼吸道暢通的睡眠呼吸中止治療裝置,主打舒適、安靜、可攜。"
        },
        "overview": {
          "en": "Somnics' negative-pressure therapy device (iNAP) offers a non-CPAP alternative and has won a National Innovation Award. It is among Taiwan's representative sleep-tech firms (one of the 12 promising sleep-tech companies catalogued by GBI Monthly). Per-SKU FDA/TFDA clearance and Taiwan reimbursement status: to be verified.",
          "zh": "萊鎂醫 (Somnics) 的負壓式呼吸治療裝置 (iNAP) 提供非 CPAP 的替代療法,曾獲國家新創獎。屬台灣睡眠科技代表廠商之一(環球生技盤點 12 家具潛力睡眠科技公司涵蓋之)。FDA/TFDA 個別品項核准與台灣給付狀態待查。"
        },
        "tags": [
          "睡眠呼吸中止",
          "負壓治療",
          "居家治療",
          "可攜",
          "睡眠科技"
        ],
        "url": "https://www.somnics.com/tw"
      },
      {
        "slug": "advantech-wise-paas",
        "category": "rpm",
        "title": {
          "en": "Advantech AIoT Smart Hospital (WISE-PaaS, iBuilding)",
          "zh": "研華 AIoT 智慧醫療 / 智慧病房(WISE-PaaS, iBuilding)"
        },
        "summary": {
          "en": "Builds smart-hospital infrastructure on the WISE-PaaS cloud and edge computing, integrating in-hospital information and physiological-data collection and analytics.",
          "zh": "以 WISE-PaaS 雲平台與邊緣運算打造智慧醫院基礎建設,整合院內醫療資訊與生理數據蒐集分析。"
        },
        "overview": {
          "en": "Advantech uses WISE-PaaS + WISE-STACK 300 private cloud to help Taichung Veterans General Hospital aggregate clinical information and physiological data with AI analytics; its iBuilding solution extends to hospitals and care facilities (facility/energy management, video security, dispatch/inspection). Its 2025 embedded-design forum focused on four edge-AI applications (incl. vision and LLMs). It is a healthcare IT/IoT infrastructure supplier rather than a single medical device.",
          "zh": "研華 (Advantech) 以 WISE-PaaS + WISE-STACK 300 私有雲協助台中榮總蒐集彙整院內醫療資訊與生理數據並以 AI 分析關鍵指標;iBuilding 智慧建築方案延伸至醫療院所與照護機構(設施/能源管理、影像安防、派工巡檢)。2025 年嵌入式設計論壇聚焦邊緣 AI(含影像辨識、LLM)四大應用。屬醫療 IT/IoT 基礎建設供應商而非單一醫材。"
        },
        "tags": [
          "AIoT",
          "智慧病房",
          "智慧醫院",
          "WISE-PaaS",
          "邊緣AI",
          "研華"
        ],
        "url": "https://www.advantech.tw/resources/industry-focus/wise-paas-ibuilding-solution-hospital-management-optimization"
      },
      {
        "slug": "aaeon-smart-icu",
        "category": "rpm",
        "title": {
          "en": "AAEON Smart ICU",
          "zh": "研揚科技 智慧 ICU 監控"
        },
        "summary": {
          "en": "Combines AI with medical equipment to monitor patient status and vital signs in real time in the ICU, helping ICU staff judge when to intervene.",
          "zh": "結合 AI 與醫療設備,於加護病房即時監控患者病情與生命徵象,協助 ICU 人員判斷介入時機。"
        },
        "overview": {
          "en": "AAEON partners with a US systems integrator to integrate ICU data from ECG monitors, pulse oximeters and temperature sensors, using AI to speed up detection of situations needing intervention. It is an edge-computing/medical-AIoT hardware and integration play, paired with a monitoring dashboard.",
          "zh": "研揚科技 (AAEON) 與美國系統整合商合作,整合 ICU 中的心電圖監視器、血氧儀、溫度感測等設備數據,以 AI 加速判斷需介入的情況。屬邊緣運算/醫療 AIoT 硬體與整合方案,搭配儀表板呈現。"
        },
        "tags": [
          "ICU",
          "重症監測",
          "邊緣AI",
          "生命徵象",
          "研揚"
        ],
        "url": "https://www.aaeon.com/tw/news/detail/icu_mix_q670ai_smart_medical"
      },
      {
        "slug": "zoe-critical-care-system",
        "category": "rpm",
        "title": {
          "en": "Zoe Smart Critical-Care System",
          "zh": "台中榮總 x 東海 x 研華 Zoe 智慧重症系統"
        },
        "summary": {
          "en": "An ICU AI critical-care early-warning system that flags patient deterioration so staff can intervene early and supports clinical decision-making.",
          "zh": "加護病房 AI 重症預警系統,預警病人惡化以利醫護及早介入並輔助臨床決策。"
        },
        "overview": {
          "en": "The Zoe system, co-built by Taichung VGH with Tunghai University and Advantech, won a silver award in the smart-healthcare category of the 25th SNQ National Biotechnology and Medical Care Quality Awards. It focuses on ICU deterioration warning and decision support - a representative hospital-led, academia-plus-vendor integration case.",
          "zh": "台中榮總與東海大學、研華共同打造的 Zoe 智慧重症系統,獲第 25 屆國家生技醫療品質獎 (SNQ) 醫療院所類智慧醫療組銀獎。聚焦 ICU 病況預警與決策輔助。為醫院主導 + 學研 + 廠商整合的代表案例。"
        },
        "tags": [
          "ICU",
          "重症預警",
          "AI",
          "SNQ",
          "台中榮總"
        ],
        "url": "https://expo.taiwan-healthcare.org/zh/snq/0s5c6an2sqmxcsun"
      },
      {
        "slug": "nhi-hospital-at-home",
        "category": "rpm",
        "title": {
          "en": "NHI Hospital-at-Home Acute Care Pilot",
          "zh": "健保署 在宅急症照護試辦計畫"
        },
        "summary": {
          "en": "A pilot where medical teams deliver near-hospital-level treatment at patients' homes, reimbursed via a bundled daily fee that includes an IoT vital-sign-monitoring fee - seen as the bellwether for RPM reimbursement.",
          "zh": "由醫療團隊在病人家中提供近住院等級治療的試辦計畫,以每日綑綁式醫療費含 IoT 生命徵象監測費給付,被視為 RPM 給付化試金石。"
        },
        "overview": {
          "en": "Launched July 2024 (reported as starting in 2024 and expanded in July), enrolling patients who can be hospitalised at home for conditions such as pneumonia, UTI and soft-tissue infection. Reimbursement bundles a disease-specific daily fee, a daily IoT vital-sign-monitoring equipment fee, and per-visit fees for other staff and emergency visits. In Mar 2026 it added an early-discharge model and extended outpatient IV-antibiotic courses from 5 to 7 days. It is Taiwan's key experiment in institutionalising RPM into reimbursement.",
          "zh": "自 2024 年 7 月上路(部分報導為 2024 年啟動、7 月擴大實施),收案如肺炎、泌尿道感染、軟組織感染等可在宅住院的患者。給付含依疾病別之每日醫療點數、每日 IoT 生命徵象監測設備費、其他人員到府費與急性訪視費。2026 年 3 月新增提早出院模式並把門診靜脈抗生素療程由 5 天延長至 7 天。是台灣把遠端監測 (RPM) 制度性納入給付的關鍵實驗。"
        },
        "tags": [
          "在宅急症照護",
          "RPM",
          "IoT監測",
          "健保給付",
          "居家醫療",
          "政策"
        ],
        "url": "https://www.cw.com.tw/aging/article/5130979"
      },
      {
        "slug": "nhi-telemedicine-plan",
        "category": "rpm",
        "title": {
          "en": "NHI Telemedicine Reimbursement Plan",
          "zh": "健保署 遠距醫療給付計畫"
        },
        "summary": {
          "en": "An NHI plan encouraging medical cooperation in mountain and outlying-island areas, reimbursing video specialist consultations across ophthalmology, ENT, dermatology, cardiology, neurology, GI and emergency care.",
          "zh": "鼓勵山地離島醫療合作、以視訊提供眼科、耳鼻喉、皮膚、心臟、神經、腸胃與急診等專科會診的健保給付計畫。"
        },
        "overview": {
          "en": "Announced 29 Dec 2020, it links remote/island areas with referral hospitals via video consultation. The MOHW plans to broaden eligible settings next and pursue regional joint-defence programmes, paired with a virtual NHI card for telecare. It is another pillar of Taiwan's RPM/telehealth framework, complementary to the Hospital-at-Home pilot.",
          "zh": "2020-12-29 公告,串接偏鄉/離島與後送醫院的視訊會診。衛福部規劃下一步擴大適用場域並推動區域聯防計畫;搭配虛擬健保卡推動遠距就醫。是台灣 RPM/遠距醫療制度的另一支柱(與在宅急症照護互補)。"
        },
        "tags": [
          "遠距醫療",
          "視訊看診",
          "偏鄉離島",
          "健保給付",
          "虛擬健保卡"
        ],
        "url": "https://www.nhi.gov.tw/Content_List.aspx?n=33AE596C334860DA&topn=4864A82710DE35ED"
      },
      {
        "slug": "smart-mattress-care",
        "category": "eldercare",
        "title": {
          "en": "5G+AI Smart Mattress Care",
          "zh": "資策會 x 維思感創 x 仁寶 5G/AI 智慧床墊照護系統"
        },
        "summary": {
          "en": "A fibre-optic-sensing smart mattress that predicts bed-exit ~90 seconds in advance and continuously monitors respiration, heartbeat, bed-exit and activity.",
          "zh": "內建光纖感測的智慧床墊,可在長者離床前約 90 秒發出預測通知,並全天候監測呼吸、心跳、離床與活動。"
        },
        "overview": {
          "en": "The 5G+AI Smart Mattress Care System, built by III's Software Institute with Vista Sense, Compal and the Yung-Shin Social Welfare Foundation, is deployed at the Yung-Shin Xin-Jia long-term-care facility in Qingshui, Taichung, and won a 2024 R&D 100 Award. Embedded fibre-optic sensing monitors vitals and bed-exit unobtrusively, logging turning and back-patting. Policy favours a lease-first model for smart care beds; the Executive Yuan approved a residential-facility care-quality incentive scheme in Aug 2024 to encourage adoption of smart assistive devices.",
          "zh": "由資策會軟體院偕維思感創、仁寶電腦、永信社會福利基金會打造的 5G 及 AI 賦能的智慧床墊照護系統,已佈建於台中清水永信心佳長照機構,並榮獲 2024 R&D 100 Awards。床墊內精密光纖感測在不打擾長者下監測生理與離床、記錄翻身與拍背。政策面以租賃優先鼓勵智慧照顧床;行政院 2024 年 8 月核定住宿機構照顧品質獎勵計畫,鼓勵導入智慧照顧輔具。"
        },
        "tags": [
          "智慧床墊",
          "離床偵測",
          "光纖感測",
          "長照",
          "機構照護",
          "R&D100"
        ],
        "url": "https://moda.gov.tw/ADI/news/latest-news/14128"
      },
      {
        "slug": "mmwave-radar-eldercare",
        "category": "eldercare",
        "title": {
          "en": "mmWave Radar Vital-Sign & Fall Detection",
          "zh": "毫米波雷達 生命徵象/跌倒偵測(智慧長照)"
        },
        "summary": {
          "en": "60GHz millimetre-wave radar detects heartbeat, respiration and falls regardless of light or weather, commonly used in hospitals, care facilities and home long-term care.",
          "zh": "60GHz 毫米波雷達在不受光線天候影響下偵測心跳、呼吸與跌倒,常用於醫院、照護機構與居家長照。"
        },
        "overview": {
          "en": "mmWave radar placed ~2 m from the chest can detect heart rate and respiration; ceiling-mounted (~2.7 m high) 60GHz indoor fall sensors can cover up to ~11 m, reporting falls, inactivity time and sleep-period vitals. Taiwan suppliers include LILIN (vital-sign detector / wireless radar). Driven by new spectrum rules, industrial/sensing radar is moving to the 60GHz band. It is a core sensing layer for Long-Term Care 3.0 smart assistive tech (from 2025).",
          "zh": "毫米波雷達可置於距胸口約 2 公尺處偵測心率與呼吸;天花板安裝(約 2.7 公尺高)的 60GHz 室內跌倒感測器可涵蓋最大約 11 公尺範圍,回報跌倒、無動作時間與睡眠期間生命徵象。台灣供應端例如 LILIN(利凌)生命跡象偵測器/無線雷達等。受新規影響,工業/感測雷達朝 60GHz 頻段發展。為長照 3.0(2025 起)科技輔具的重要感測基礎。"
        },
        "tags": [
          "毫米波雷達",
          "跌倒偵測",
          "非接觸",
          "生命徵象",
          "長照",
          "60GHz"
        ],
        "url": "https://www.meritlilin.com/index.php/tw/product/DS262W"
      },
      {
        "slug": "digital-cbt-i",
        "category": "dtx",
        "title": {
          "en": "Digital CBT-I (DTx opportunity)",
          "zh": "失眠認知行為治療數位化 (CBT-I / DTx 機會)"
        },
        "summary": {
          "en": "Digital cognitive behavioural therapy for insomnia (CBT-I); Taiwan clinically favours CBT-I as first-line non-drug therapy, making digitalisation a potential DTx entry point.",
          "zh": "針對慢性失眠的數位認知行為治療 (CBT-I);台灣臨床以 CBT-I 為首選非藥物療法,數位化是潛在 DTx 切入點。"
        },
        "overview": {
          "en": "About 1 in 10 people in Taiwan suffer chronic insomnia (2017 Taiwan Society of Sleep Medicine survey). Internationally, Somryst (a CBT-I app) is FDA-cleared, and hybrid models (digital + remote professional support) may improve outcomes. Whether any TFDA-cleared CBT-I/mental-health DTx exists in Taiwan for 2024-2026: to be verified (public material is mostly education and overseas cases; no clear local TFDA-cleared DTx found). A clear unmet-gap opportunity in Taiwan's DTx landscape.",
          "zh": "台灣每約 10 人就有 1 人受慢性失眠所苦(2017 年台灣睡眠醫學學會調查)。國際上 Somryst(CBT-I App)已獲 FDA 核准,混合式(數位 + 遠端專業心理支持)模式可望提升療效。台灣本地 2024-2026 是否有取得 TFDA 許可的 CBT-I/心理健康 DTx 產品待查(目前公開資料以衛教與國際案例為主,尚未見明確本土 TFDA 核准 DTx)。為台灣 DTx 的明顯未補位機會。"
        },
        "tags": [
          "DTx",
          "CBT-I",
          "失眠",
          "心理健康",
          "待查",
          "機會缺口"
        ],
        "url": "https://heho.com.tw/archives/225441"
      },
      {
        "slug": "tfda-samd-framework",
        "category": "dtx",
        "title": {
          "en": "TFDA SaMD Regulatory Framework",
          "zh": "TFDA 智慧醫療器材 / SaMD 法規框架"
        },
        "summary": {
          "en": "The TFDA has brought SaMD under the Medical Devices Act, set up a Smart Medical Device Office, and published AI/ML SaMD registration guidance and a list of cleared devices.",
          "zh": "TFDA 已將 SaMD 納入《醫療器材管理法》,成立智慧醫療器材專案辦公室並公告 AI/ML 醫材查驗登記技術指引與核准清單。"
        },
        "overview": {
          "en": "The 2021 Medical Devices Act brought SaMD under regulation; the TFDA established a Smart Medical Device Office (consultation, training, the aimd.fda.gov.tw matchmaking platform, policy guidance) and issued an AI/ML SaMD Registration Technical Guidance. A 22-Jan-2024 notice lists cleared AI/ML devices (37 domestic, 67 imported). On reimbursement, unlike Germany's DiGA, Korea's DTx-coverage guideline, or the US FDA's parallel review, Taiwan still lacks a temporary-coverage/reimbursement mechanism for DTx (an institutional gap, to be verified pending official notices).",
          "zh": "2021 年施行《醫療器材管理法》把 SaMD 納管;TFDA 成立智慧醫療器材專案辦公室(諮詢輔導、教育訓練、媒合平台 aimd.fda.gov.tw、政策指引),並公告《AI/ML 技術之醫療器材軟體查驗登記技術指引》。2024-01-22 公告核准 AI/ML 醫材清單(國產 37、輸入 67)。給付面相較德國 DiGA、韓國數位療法健保收載指引、美國 FDA 平行審查,台灣尚缺 DTx 暫時性收載/給付機制(屬待查中的制度缺口,以官方公告為準)。"
        },
        "tags": [
          "TFDA",
          "SaMD",
          "AI醫材",
          "法規",
          "DTx給付",
          "DiGA對標",
          "待查"
        ],
        "url": "https://www.mohw.gov.tw/cp-5016-59558-1.html"
      },
      {
        "slug": "mj-health",
        "category": "rpm",
        "title": {
          "en": "MJ Health (data-driven preventive medicine)",
          "zh": "美兆健康管理(健檢 + 數據驅動預防醫學)"
        },
        "summary": {
          "en": "A health-management organisation driving preventive medicine with big data, having accumulated a large health-examination dataset and extending toward digital health and personalised management.",
          "zh": "以大數據驅動預防醫學的健康管理機構,累積大量健檢資料,向數位健康與個人化健康管理延伸。"
        },
        "overview": {
          "en": "MJ Health has provided health exams to 3M+ people since 1988, positioning itself as a pioneer of Taiwanese preventive medicine and same-day reporting under a prevention-over-cure ethos. Its large longitudinal health-exam database is valuable for AI health-risk models combined with wearable/RPM data. Any specific wearable/DTx product line is to be verified (covered here for its data/platform role).",
          "zh": "美兆 (MJ Health) 自 1988 年起累積健檢服務逾 300 萬人次,定位台灣預防醫學與醫檢分離開創者,主打預防勝於治療與當日領取報告。其大型縱貫健檢資料庫對 AI 健康風險模型與穿戴/RPM 數據結合具價值。具體穿戴/DTx 產品線屬待查(本研究以其資料/平台角色定位)。"
        },
        "tags": [
          "預防醫學",
          "健檢",
          "大數據",
          "健康管理",
          "數位健康"
        ],
        "url": "https://www.majorhealth.ai/"
      }
    ]
  },
  {
    "slug": "devices",
    "layout": "gallery",
    "icon": "medical_services",
    "title": {
      "en": "Medical Devices & Hardware",
      "zh": "醫療器材與硬體"
    },
    "subtitle": {
      "en": "Taiwan's medical-device sector built on precision manufacturing and a deep electronics supply chain, upgrading from OEM/ODM toward own brands and CDMO, with electronics giants entering smart healthcare.",
      "zh": "台灣醫療器材產業以精密製造與電子供應鏈為底蘊,從 OEM/ODM 代工加速轉向自有品牌與 CDMO,並有電子大廠以軟硬整合切入智慧醫療。"
    },
    "categories": [
      {
        "key": "imaging",
        "en": "Imaging Equipment",
        "zh": "影像設備"
      },
      {
        "key": "robotics",
        "en": "Surgical Robotics",
        "zh": "手術機器人"
      },
      {
        "key": "ivd",
        "en": "IVD / Diagnostics",
        "zh": "體外診斷 IVD"
      },
      {
        "key": "implant",
        "en": "Implants / Orthopedics",
        "zh": "植入物 / 骨科"
      },
      {
        "key": "consumable",
        "en": "Consumables / Dialysis",
        "zh": "耗材 / 洗腎"
      },
      {
        "key": "optical",
        "en": "Optical / Dental",
        "zh": "光學 / 牙科"
      },
      {
        "key": "ict",
        "en": "ICT Giants in MedTech",
        "zh": "電子大廠跨足醫療"
      }
    ],
    "items": [
      {
        "slug": "benq-qisda-medical",
        "category": "imaging",
        "title": {
          "en": "BenQ Medical Technology (Qisda Medical)",
          "zh": "明基佳世達醫療事業群(明基醫)"
        },
        "summary": {
          "en": "The medical arm of the Qisda Group, with a full self-developed ultrasound line plus AI ultrasound, smart OR, AI dentistry and smart-hospital solutions.",
          "zh": "佳世達集團旗下醫療事業群,自製超音波全系列,並推 AI 超音波整合平台、智慧手術室、AI 牙科與智慧醫院方案。"
        },
        "overview": {
          "en": "Self-developed ultrasound spans tablet (H1300/T3300), portable (AL300) and flagship floor units (AC750/AC600). At the 2024 Healthcare+ Expo it showed six AI products across 14 themed zones. The unit operates as a \"fleet\" integrating multiple device and channel companies including pharmacies and device distribution. Reported medical-segment revenue and full-year guidance figures should be re-verified for unit/scope.",
          "zh": "自製超音波涵蓋平板式 H1300/T3300、攜帶式 AL300、落地旗艦 AC750/AC600。2024 醫療科技展展出六大 AI 新品、14 個主題區(智慧精準手術室、AI 智慧醫院、智慧醫療影像、AI 牙科、精準醫療等)。醫療事業群採「集團艦隊」模式整合旗下多家醫材與通路(含藥局、醫材代理)。醫療事業營收與全年看 250–260 億元等數值須再查核對單位口徑。"
        },
        "tags": [
          "超音波",
          "影像",
          "AI",
          "智慧手術室",
          "牙科",
          "集團艦隊"
        ],
        "url": "https://finance.technews.tw/2024/12/05/pharmacy-medical-materials"
      },
      {
        "slug": "miis-medimaging",
        "category": "imaging",
        "title": {
          "en": "Medimaging Integrated Solution (MiiS, 6796)",
          "zh": "晉弘科技(6796)"
        },
        "summary": {
          "en": "A handheld digital medical-imaging maker; its flagship digital ENT/eye scope integrates fundus, otoscope and dermatoscope, with portable fundus cameras and disposable cystoscopes.",
          "zh": "手持式數位醫療影像廠,主力數位五官鏡組整合眼底鏡、耳鏡、皮膚鏡,並推可攜式眼底相機與拋棄式膀胱鏡。"
        },
        "overview": {
          "en": "In 2016, with Taipei Veterans General Hospital ophthalmology, it built the world's first complete diabetic-retinopathy AI diagnostic software (sensitivity over 98%). A portable fundus camera gained China Class-II clearance in Jan 2025; a multi-function checkup device launched in 2024. Demand for its digital ENT scope is strengthening and disposable cystoscopes are shipping. It has attracted interest from a major Japanese trading house.",
          "zh": "2016 年與北榮眼科陳世真合作,開發全球首個完整糖尿病視網膜 AI 輔助診斷軟體(敏感度逾 98%)。便攜眼底相機 2025/1 取得中國二類醫材證;2024 推多功能健檢機種。數位五官鏡需求轉強、拋棄式膀胱鏡量產出貨,曾獲日本大商社青睞。"
        },
        "tags": [
          "數位影像",
          "眼底鏡",
          "五官鏡",
          "眼科",
          "AI診斷",
          "出口"
        ],
        "url": "https://www.gvm.com.tw/article/98943"
      },
      {
        "slug": "amcad-biomed",
        "category": "imaging",
        "title": {
          "en": "AmCad BioMed",
          "zh": "安克生醫"
        },
        "summary": {
          "en": "Taiwan's first AI medical-software company with its full line under EU MDR; AmCAD-UT thyroid-ultrasound CAD was the first such software to gain US FDA clearance.",
          "zh": "台灣首家全產品線通過歐盟 MDR 的智慧醫材軟體公司,AmCAD-UT 甲狀腺超音波輔助診斷為全球首個取得美國 FDA 許可的同類軟體。"
        },
        "overview": {
          "en": "It integrated real-time AI analysis into the handheld AmCAD-UT LIVE ultrasound. In 2025 it won a trial procurement from Jordan's royal medical system, to be deployed across 20-plus hospitals for clinical exams and rural outreach. A representative AI-software-plus-hardware play that bridges to a software focus.",
          "zh": "完成即時 AI 分析整合,搭載於掌上型超音波 AmCAD-UT LIVE。2025 獲約旦皇室醫療系統採購試用,將導入旗下 20 多家醫院,用於臨床檢查與偏鄉推廣。屬智慧醫材軟體與硬體(掌超)結合的代表。"
        },
        "tags": [
          "AI影像",
          "超音波",
          "甲狀腺",
          "FDA",
          "MDR",
          "智慧醫材"
        ],
        "url": "https://udn.com/news/story/7241/8794554"
      },
      {
        "slug": "asus-endoaim",
        "category": "imaging",
        "title": {
          "en": "ASUS EndoAim Endoscopy AI",
          "zh": "華碩 EndoAim 內視鏡 AI"
        },
        "summary": {
          "en": "ASUS's medical AI; the EndoAim endoscopy AI system provides real-time detection for GI endoscopy and by 2024 was deployed in nearly 30 hospitals across Taiwan.",
          "zh": "華碩電腦旗下醫療 AI,內視鏡 AI 系統 EndoAim 用於消化道內視鏡即時偵測,2024 年已導入全台近 30 家醫院。"
        },
        "overview": {
          "en": "Showcased at the 2024 Healthcare+ Expo, it represents an electronics giant entering endoscopy-assisted diagnosis via AI software plus imaging hardware, highly relevant to a medical-AI-software focus. Latest install base and certification progress should be verified.",
          "zh": "2024 台灣醫療科技展展出,屬電子大廠以 AI 軟體加影像硬體切入內視鏡輔助診斷的代表,與醫療 AI 軟體主軸高度對照。最新裝機數與認證進度待查。"
        },
        "tags": [
          "內視鏡",
          "AI影像",
          "消化道",
          "智慧醫材",
          "電子大廠"
        ],
        "url": "https://news.gbimonthly.com/tw/article/show.php?num=73163"
      },
      {
        "slug": "intuitive-davinci-taiwan",
        "category": "robotics",
        "title": {
          "en": "Intuitive Surgical Taiwan (da Vinci ecosystem)",
          "zh": "直覺手術台灣(達文西生態系)"
        },
        "summary": {
          "en": "The da Vinci surgical robot is the global leader, widely installed in Taiwan, with local firms in the instrument supply chain; in 2024 NHI added 46 reimbursed da Vinci procedures.",
          "zh": "達文西手術機器人為全球龍頭,在台廣泛裝機,本土廠參與器械供應鏈;2024 年健保新增 46 項達文西手術給付。"
        },
        "overview": {
          "en": "In 2024 da Vinci performed about 2.7 million procedures globally (up about 17%); in Q3 2025 there were 427 cumulative placements (240 of the new da Vinci 5), with procedure volume up about 19%. From Sep 1, 2024, Taiwan's NHI added 46 reimbursed procedures, saving up to about NT$120,000 per case. Local supply chains and surgical navigation are entry points for Taiwan in robotic surgery.",
          "zh": "2024 年全球達文西執行近 270 萬台手術、年增約 17%;2025 Q3 累計裝機 427 套(新一代 da Vinci 5 占 240 套)、手術量年增約 19%。台灣 2024/9/1 健保新增 46 項給付、單次最高省約 12 萬元。本土供應鏈與手術導航是台灣切入機器人手術的機會點。"
        },
        "tags": [
          "手術機器人",
          "達文西",
          "健保給付",
          "微創手術",
          "供應鏈"
        ],
        "url": "https://ck.ccgh.com.tw/department_listDetail2801.htm"
      },
      {
        "slug": "intai-technology",
        "category": "robotics",
        "title": {
          "en": "Intai Technology (1590)",
          "zh": "鐿鈦科技(1590)"
        },
        "summary": {
          "en": "A precision-metalworking firm that pivoted into medical devices, specializing in surgical blades, endoscopes and orthopedic instruments, positioned within the surgical-robot / endoscope supply chain.",
          "zh": "由精密金屬加工起家轉型醫材,專攻手術刀、內視鏡與骨科器械,是手術機器人與內視鏡供應鏈一環。"
        },
        "overview": {
          "en": "Surgical-blade gross margins reach 60-70 percent, reportedly exceeding US suppliers. It has moved into endoscopes and minimally invasive instruments and is associated with the robotic-surgery supply chain around Intuitive Surgical; specific ODM details are not fully disclosed and are to be verified. One of few local firms exporting high-margin precision devices.",
          "zh": "手術刀產品毛利率達 60–70%,宣稱超越美國供應商。切入內視鏡與微創手術器械,與達文西(Intuitive Surgical)為代表的機器人手術供應鏈具合作機會,具體 ODM 細節未完全揭露待查。屬台灣少數能做高毛利精密醫材出口的本土廠。"
        },
        "tags": [
          "手術刀",
          "內視鏡",
          "精密加工",
          "微創手術",
          "ODM",
          "出口"
        ],
        "url": "https://www.tw-ren.com/renaissance/848"
      },
      {
        "slug": "apex-biotechnology",
        "category": "ivd",
        "title": {
          "en": "Apex Biotechnology (1733)",
          "zh": "五鼎生物技術(1733)"
        },
        "summary": {
          "en": "Founded 1997 in Hsinchu Science Park; a maker of biochemical blood-glucose and uric-acid meters and test strips (strips about 64% of revenue), now developing its own home CGM products.",
          "zh": "1997 年成立於竹科,專業生化血糖、尿酸測試儀與測試片廠,測試片約占營收 6 成,並開發自有居家連續血糖監測(CGM)產品。"
        },
        "overview": {
          "en": "Test strips were about 63.76% and meters about 16.65% of revenue. Its in-house home CGM has been in development for over two years, targeting trial production by end-2024 before clinical trials; new products include HemoSmart Pro and THE EDGE Pro. FY2025 revenue was about NT$1.945 billion; May 2026 revenue fell about 18% YoY amid commoditized glucose-strip competition.",
          "zh": "測試片約占營收 63.76%、測試儀約 16.65%。自家居家 CGM 已開發 2 年以上,規劃 2024 年底完成試產後進臨床;推 HemoSmart Pro、THE EDGE Pro 等新品。2025 全年營收約 19.45 億元;2026 年 5 月營收年減約 18%(傳統血糖紅海競爭壓力)。"
        },
        "tags": [
          "血糖",
          "試片",
          "POCT",
          "CGM",
          "IVD",
          "竹科"
        ],
        "url": "http://www.genetinfo.com/investment/featured/item/76388.html"
      },
      {
        "slug": "taidoc-technology",
        "category": "ivd",
        "title": {
          "en": "Taidoc Technology (Fora, 4736)",
          "zh": "泰博科技(Fora, 4736)"
        },
        "summary": {
          "en": "One of Taiwan's leading blood-glucose testing makers; core products are glucose and multi-parameter meters, plus BP monitors, pulse oximeters and thermometers under the Fora brand.",
          "zh": "台灣血糖檢測龍頭之一,核心為血糖與多參數檢測儀,產品涵蓋血壓計、血氧計、額溫槍等,自有品牌 Fora。"
        },
        "overview": {
          "en": "Glucose/multi-parameter products are over 70% of revenue, BP/oximetry about 20%, thermometers about 3%. 2024 saw a decline (about minus 3.5% as pandemic demand normalized); first three quarters of 2025 EPS about 11.17, with 5-10% growth expected in 2026.",
          "zh": "血糖、多參數產品約占營收 7 成以上,血壓血氧等約 20%、額溫槍約 3%。2024 年呈負成長(約 −3.5%,疫情紅利退場);2025 前三季 EPS 約 11.17 元,預期 2026 年成長約 5–10%。"
        },
        "tags": [
          "血糖",
          "POCT",
          "IVD",
          "多參數",
          "自有品牌",
          "出口"
        ],
        "url": "https://blog.fugle.tw/post/earnings-call-4736-2025-11-21"
      },
      {
        "slug": "bionime",
        "category": "ivd",
        "title": {
          "en": "Bionime (4737)",
          "zh": "華廣生技(4737)"
        },
        "summary": {
          "en": "Founded 2003, an own-brand (BIONIME) glucose-meter maker with over 90% of revenue from its own brand, expanding globally with patch-style continuous glucose monitoring.",
          "zh": "2003 年成立的本土自有品牌(BIONIME)血糖儀廠,9 成以上營收來自自有品牌,並以貼片式連續血糖監測布局全球。"
        },
        "overview": {
          "en": "Moving from finger-prick meters into CGM patches to capture the fastest-growing monitoring segment. The global CGM market was about US$12 billion in 2024 and is projected to reach about US$27 billion by 2030 (about 17% CAGR); Bionime is pursuing international channels under its own brand. Latest revenue is to be verified.",
          "zh": "從傳統指尖血糖機切入 CGM 貼片,搶攻成長最快的監測市場。2024 年全球 CGM 市場約 120 億美元,估 2030 年達約 270 億美元、CAGR 約 17%,華廣以自有品牌爭取國際通路。最新營收待查。"
        },
        "tags": [
          "血糖",
          "CGM",
          "貼片",
          "IVD",
          "自有品牌",
          "出口"
        ],
        "url": "https://geneonline.news/bionime-cgm-interview/"
      },
      {
        "slug": "prodigy-biotech",
        "category": "ivd",
        "title": {
          "en": "Prodigy Biotech (4117)",
          "zh": "普生(4117)"
        },
        "summary": {
          "en": "A molecular-diagnostics and precision-testing firm with five businesses including precision testing, liquid biopsy, CDMO, testing services and the P113 antimicrobial-peptide drug; its Hsinchu plant is Taiwan's only IVD Class-III GMP facility.",
          "zh": "分子診斷與精準檢測廠,五大事業含精準檢測、液態切片、CDMO、檢測服務與 P113 抗菌肽藥物;竹科廠為台灣唯一具 IVD 第三類 GMP 認證的設施。"
        },
        "overview": {
          "en": "It is building the \"Puyu AI Smart Park\" with nine centers in Zhubei, targeted for completion in H2 2024. It is deepening its CellBio circulating-tumor-cell (CTC) testing system toward liquid-biopsy precision medicine. Its Hsinchu plant has a maximum nucleic-acid reagent capacity of about 800,000 units per month.",
          "zh": "規劃竹北「普禹 AI 智慧園區」(九大中心),預計 2024 下半年完工。深化 CellBio 循環腫瘤細胞(CTC)檢測系統,朝液態切片精準醫療發展。竹科廠核酸試劑月產能最高約 80 萬份。"
        },
        "tags": [
          "分子診斷",
          "液態切片",
          "CTC",
          "IVD",
          "CDMO",
          "竹科"
        ],
        "url": "https://expo.bioasiataiwan.com/visitorExNewsDetail.asp?id=14952"
      },
      {
        "slug": "apro-apbiocode",
        "category": "ivd",
        "title": {
          "en": "ABC Bio / apbiocode (English name to be verified)",
          "zh": "瑞磁生技(英文正名待查)"
        },
        "summary": {
          "en": "Using patented digital-barcode multiplex detection and the MDx3000 automated system, it developed gastrointestinal (GPP) and respiratory (RPP) multiplex molecular-diagnostic panels, FDA-cleared and sold in the US.",
          "zh": "以專利數位條碼多重檢測技術與自動化系統 MDx3000,開發腸胃道(GPP)與呼吸道(RPP)多重分子診斷試劑套組,已取美國 FDA 並於美國銷售。"
        },
        "overview": {
          "en": "It has developed 17 GI (GPP) and 20 respiratory (RPP) multiplex molecular-diagnostic panels, FDA-cleared and sold in the US, with Taiwan MOHW registration filed. A case of Taiwanese molecular diagnostics exporting to the US market. English name and ticker are to be verified.",
          "zh": "已開發 17 項腸胃道(GPP)與 20 項呼吸道(RPP)分子診斷試劑套組,獲 FDA 許可、於美國銷售,並申請台灣衛福部登記。代表台灣分子診斷出口美國市場的案例。公司英文正名與股號待查核對。"
        },
        "tags": [
          "分子診斷",
          "多重檢測",
          "數位條碼",
          "FDA",
          "IVD",
          "出口美國"
        ],
        "url": "https://www.apbiocode.com/tw/media_releases.htm"
      },
      {
        "slug": "united-orthopedic",
        "category": "implant",
        "title": {
          "en": "United Orthopedic Corporation (UOC, 4129)",
          "zh": "聯合骨科器材(4129)"
        },
        "summary": {
          "en": "Taiwan's flagship orthopedic implant maker, focused on artificial joints (knee/hip) and surgical instruments, with end-to-end R&D, manufacturing and global sales across 39-plus countries.",
          "zh": "台灣指標骨科植入物廠,專注人工關節(膝、髖)與手術器械,一條龍研發、製造、行銷全球,產品行銷 39 國以上。"
        },
        "overview": {
          "en": "First three quarters of 2024 revenue about NT$3.337 billion, EPS about 3.48; regional mix APAC 45%, EMEA 31%, Americas 24%. The U2 second-gen knee has over 140,000 cases; a robot-assisted version co-developed with THINK Surgical gained FDA clearance in 2020. Analysts expect about 20% revenue growth in 2025, aided by China volume-based procurement.",
          "zh": "2024 前三季營收約 33.37 億元、EPS 約 3.48 元;區域比重亞太 45%、歐非中東 31%、美洲 24%。U2 二代膝關節累計逾 14 萬案例;與美國 THINK Surgical 合作的機器人手術版本 2020 年取得 FDA 許可。法人看好 2025 營收成長約 2 成,並受惠中國二次集採新動能。"
        },
        "tags": [
          "人工關節",
          "膝關節",
          "髖關節",
          "手術機器人",
          "自有品牌",
          "出口"
        ],
        "url": "https://news.cnyes.com/news/id/5921106"
      },
      {
        "slug": "bioteque",
        "category": "consumable",
        "title": {
          "en": "Bioteque Corporation (4107)",
          "zh": "邦特生物科技(4107)"
        },
        "summary": {
          "en": "Founded 1991, Taiwan's leading dialysis-consumables maker; core products are blood tubing lines, TPU catheters and medical soft bags, exported under the BIOTEQ brand to 50-plus countries.",
          "zh": "1991 年成立,台灣洗腎耗材龍頭,主力血液迴路管、TPU 導管、藥用軟袋,自有品牌 BIOTEQ 外銷 50 多國。"
        },
        "overview": {
          "en": "Holds over 40% of Taiwan's blood-tubing market. A new Yilan plant expanded TPU-catheter capacity (mass production from Q4 2022), targeted to add NT$3.5-5.0 billion in revenue at full ramp by 2025 (company target, actuals TBD). Benefits from about 7% annual global growth in the dialysis population and active Southeast Asia expansion.",
          "zh": "國內血液迴路管市占逾 4 成。宜蘭新廠擴充 TPU 導管產能,2022 Q4 量產,預計 2025 達產可貢獻營收 35–50 億元(公司目標值,待查實績)。受惠全球洗腎人口年增約 7%,並積極拓展東南亞。"
        },
        "tags": [
          "洗腎",
          "血液透析",
          "導管",
          "TPU",
          "自有品牌",
          "出口"
        ],
        "url": "https://bioteq.com.tw/zh-tw/C108.html"
      },
      {
        "slug": "pacific-hospital-supply",
        "category": "consumable",
        "title": {
          "en": "Pacific Hospital Supply (4126)",
          "zh": "太醫科技 / 太平洋醫材(4126)"
        },
        "summary": {
          "en": "Disposable medical-consumables maker; its star product is the closed suction catheter (reduces cross-infection), with a strong tubing line exported to Japan, Europe and North America.",
          "zh": "拋棄式醫療耗材廠,明星產品為密閉式抽痰管(降低交叉感染),管類產品線強勁,外銷日本、歐洲、北美。"
        },
        "overview": {
          "en": "FY2024 revenue about NT$2.35-2.37 billion, EPS about 6.17, dividend NT$5. H1 2025 consolidated revenue about NT$1.17 billion (up 3.9% YoY); closed suction catheters were about 23% of revenue (up 12.9% YoY), with Japan and Europe driving growth (up 20% / 60% in H1). Q1 2025 gross margin about 33.3%.",
          "zh": "2024 全年營收約 23.5–23.68 億元、EPS 約 6.17 元、配息 5 元。2025 上半年合併營收約 11.7 億元、年增 3.9%,密閉式抽痰管營收占比約 23%、年增 12.9%;日本與歐洲接棒成長(上半年分別 +20%、+60%)。2025 Q1 毛利率約 33.3%。"
        },
        "tags": [
          "抽痰管",
          "拋棄式耗材",
          "呼吸照護",
          "出口",
          "日本"
        ],
        "url": "https://www.genetinfo.com/investment/featured/item/87834.html"
      },
      {
        "slug": "apex-medical-wellell",
        "category": "consumable",
        "title": {
          "en": "Apex Medical (Wellell)",
          "zh": "雃博(Wellell)"
        },
        "summary": {
          "en": "Founded 1990, focused on sleep-apnea therapy (CPAP) and anti-decubitus air mattresses, selling across Europe, Asia and the Americas; its palm-sized XT CPAP line is marketed as the world's smallest.",
          "zh": "1990 年成立,專攻睡眠呼吸中止治療(CPAP 連續陽壓呼吸器)與防褥瘡氣墊床,產品行銷歐、亞、美,掌上型 XT 系列主打世界最小。"
        },
        "overview": {
          "en": "Nearly 30 years of experience in anti-decubitus air mattresses; product lines cover respiratory therapy (CPAP, nebulizers), pressure-relief mattresses and home-care equipment. It targets the growing sleep-medicine and aged-home-care markets, also branded as Wellell. Latest revenue is to be verified.",
          "zh": "近 30 年防褥瘡氣墊床研發製造經驗,產品線涵蓋呼吸治療(CPAP、噴霧器)、減壓氣墊床與居家照護器材。鎖定睡眠醫學與高齡居家照護成長市場,品牌另用 Wellell。最新營收待查。"
        },
        "tags": [
          "CPAP",
          "睡眠呼吸中止",
          "氣墊床",
          "居家照護",
          "出口"
        ],
        "url": "https://en.wikipedia.org/wiki/Apex_Medical"
      },
      {
        "slug": "pihsiang-shoprider",
        "category": "consumable",
        "title": {
          "en": "Pihsiang Industrial (SHOPRIDER)",
          "zh": "必翔實業(SHOPRIDER)"
        },
        "summary": {
          "en": "Founded 1983; developed the world's first four-wheel electric mobility scooter in 1989. Its SHOPRIDER brand sells in 80-plus countries, making it a global leader in mobility scooters.",
          "zh": "1983 年成立,1989 年研發出全球首台四輪電動代步車,自有品牌 SHOPRIDER 行銷 80 多國,為電動代步車全球領導品牌之一。"
        },
        "overview": {
          "en": "Products span mobility scooters, power wheelchairs, wheelchairs, walkers, and rehab/transfer aids. Manufacturing is in Xinfeng, Hsinchu. It sells via nationwide dealers/stores and e-commerce, plus device distribution, brand-client and rental businesses, targeting aged-care and long-term care. Latest revenue/market share is to be verified.",
          "zh": "產品涵蓋電動代步車、電動輪椅、輪椅、助行器、復健與移位輔具。製造基地在新竹縣新豐鄉。透過全台經銷、門市與電商提供銷售、醫材通路、品牌客戶與輔具租賃服務,鎖定高齡與長照市場。最新營收、市占待查。"
        },
        "tags": [
          "電動代步車",
          "輪椅",
          "輔具",
          "長照",
          "自有品牌",
          "出口"
        ],
        "url": "https://www.pihsiang.com.tw/"
      },
      {
        "slug": "avita-corporation",
        "category": "consumable",
        "title": {
          "en": "Avita Corporation (4735)",
          "zh": "豪展醫療科技(4735)"
        },
        "summary": {
          "en": "Taiwan's first specialist ear-thermometer maker; products span forehead/ear thermometers, non-contact thermometers, BP monitors, nasal aspirators, oximeters and nebulizers, combining contract manufacturing with the niche own-brand avita.",
          "zh": "台灣首家專業耳溫槍製造商,產品涵蓋額/耳溫槍、非接觸體溫計、血壓計、吸鼻器、血氧儀、霧化器等居家電子醫材,以代工加利基自有品牌 avita 並行。"
        },
        "overview": {
          "en": "Revenue mix is about ear thermometers 23%, non-contact thermometers 42%, BP monitors 24%, nasal aspirators 10%. Facing commoditized thermometer/BP markets, it is shifting toward higher-value niche products, patent portfolios and international certifications (FDA, CE MDR, ISO 13485). Latest revenue is to be verified.",
          "zh": "營收結構約:耳溫槍 23%、非接觸體溫計 42%、血壓計 24%、吸鼻器 10%。面對體溫、血壓紅海市場,策略轉向高附加價值利基產品、專利布局與國際認證(FDA、CE MDR、ISO 13485)。最新營收待查。"
        },
        "tags": [
          "體溫計",
          "血壓計",
          "居家醫材",
          "利基",
          "代工",
          "自有品牌"
        ],
        "url": "http://www.genetinfo.com/investment/company/intro/item/1438.html"
      },
      {
        "slug": "contact-lens-cluster",
        "category": "optical",
        "title": {
          "en": "Contact-Lens Cluster: St.Shine, Pegavision, Visco, Ginko",
          "zh": "隱形眼鏡聚落:精華、晶碩、視陽、望隼"
        },
        "summary": {
          "en": "Taiwan's contact-lens cluster is an export hidden champion: key makers are St.Shine (1565), Pegavision (6491), Visco (6782) and Ginko/Wangsun (4771), led by daily disposables and silicone hydrogel, with Japan and Europe/US as top markets.",
          "zh": "台灣隱形眼鏡為出口隱形冠軍聚落,主要廠商精華(1565)、晶碩(6491)、視陽(6782)與望隼(4771),日拋與矽水膠為主力,日本與歐美為主要市場。"
        },
        "overview": {
          "en": "Pegavision (founded 2009) is Taiwan's first and only listed pure-play contact-lens manufacturer, focused on soft lenses and medical optics; in 2024 it planned EU/Japan clearances for daily silicone-hydrogel lenses. Visco's silicone-hydrogel lenses are about 80% of revenue, with Japan over 40%. The global contact-lens market topped US$10 billion in 2024, with about 6.6% CAGR to 2029. Taiwan's contact-lens exports hit a record high, with Japan about 60% of the total.",
          "zh": "晶碩 2009 年成立,是台灣首家且唯一隱形眼鏡專業製造上市公司,主攻軟性隱形眼鏡與醫用光學;2024 規劃在歐洲、日本取得日拋矽水膠證照。視陽矽水膠占營收約 8 成、日本占比逾 4 成。2024 全球隱形眼鏡市場突破 100 億美元,估至 2029 年 CAGR 約 6.6%。台灣隱形眼鏡出口額創新高、日本市場占約 6 成。"
        },
        "tags": [
          "隱形眼鏡",
          "矽水膠",
          "日拋",
          "眼科",
          "出口",
          "日本",
          "隱形冠軍"
        ],
        "url": "https://news.pchome.com.tw/finance/aday/20250923/index-75859384275764330003.html"
      },
      {
        "slug": "mei-meng-dental",
        "category": "optical",
        "title": {
          "en": "Mei-Meng Dental Orthodontics",
          "zh": "美萌(牙科矯正器出口)"
        },
        "summary": {
          "en": "Taiwan's largest orthodontic-bracket exporter; with fewer than 100 employees, it started in metal brackets and exports globally, a hidden-champion dental-materials maker.",
          "zh": "台灣最大牙齒矯正器出口商,員工不到百人,以金屬牙套(托槽)起家,外銷全球,屬隱形冠軍型牙材廠。"
        },
        "overview": {
          "en": "Founded 2008; 2022 EPS hit a record about 5.87. In Dec 2024, Hong-Ding Capital acquired a 10-30% stake at NT$66.5/share to expand its global dental footprint. Taiwan's dental sector also spans digital dentistry (intraoral scanning, 3D printing, CAD/CAM) and implant trends; the global dental-device market is projected to reach about US$36.8 billion within several years.",
          "zh": "2008 年創立,2022 年 EPS 創歷史新高約 5.87 元。2024 年 12 月閎鼎資本以每股 66.5 元收購其 10%–30% 股權,協助擴大全球牙科醫材版圖。台灣牙科醫材另含數位牙科(口掃、3D 列印、CAD/CAM)與植牙趨勢,估全球牙科醫材數年內成長至約 368 億美元。"
        },
        "tags": [
          "牙科",
          "矯正器",
          "托槽",
          "數位牙科",
          "出口",
          "隱形冠軍"
        ],
        "url": "https://www.gvm.com.tw/article/103602"
      },
      {
        "slug": "foxconn-digital-health",
        "category": "ict",
        "title": {
          "en": "Foxconn (Hon Hai) Digital Health",
          "zh": "鴻海科技集團(數位健康)"
        },
        "summary": {
          "en": "Foxconn pursues smart healthcare on three fronts via hardware-software integration: the CoDoctor home multi-test device, the Nurabot AI nursing co-robot, and smart-hospital digital twins, while leading the HiMEDt digital-health alliance.",
          "zh": "以軟硬整合三路進擊智慧醫療:居家多功能檢測儀 CoDoctor、AI 護理協作機器人 Nurabot、智慧醫院數位孿生,並主導台灣數位健康大聯盟(HiMEDt)。"
        },
        "overview": {
          "en": "CoDoctor Pro holds a TFDA Class-II clearance, integrating eight measurements (ECG, SpO2, BP, glucose, uric acid, body fat, cholesterol, temperature). Nurabot, developed with Taichung VGH and Kawasaki Heavy Industries, runs Foxconn's in-house Traditional-Chinese LLM FoxBrain for medication delivery, specimen transport and ward guidance, cutting about 30% of nursing hours. Foxconn builds digital twins with several hospitals via Omniverse; HiMEDt links 21-plus ecosystem partners.",
          "zh": "CoDoctor Pro 已取 TFDA 二類醫材證,整合八大量測(心電、血氧、血壓、血糖、尿酸、體脂、膽固醇、體溫)。Nurabot 與台中榮總、川崎重工合作,搭載自研繁中大模型 FoxBrain,可送藥、運送檢體、病房導引衛教,估減約 3 成護理工時。攜手台中榮總長青分院、白沙屯童醫院、耕莘醫院以 Omniverse 建數位孿生;HiMEDt 串聯逾 21 家生態夥伴。"
        },
        "tags": [
          "遠距醫療",
          "居家檢測",
          "護理機器人",
          "數位孿生",
          "FoxBrain",
          "AIoT"
        ],
        "url": "https://money.udn.com/money/story/5612/8756147"
      },
      {
        "slug": "quanta-smart-healthcare",
        "category": "ict",
        "title": {
          "en": "Quanta Computer Smart Healthcare",
          "zh": "廣達電腦(智慧醫療)"
        },
        "summary": {
          "en": "Chairman Barry Lam frames smart healthcare as a ten-year sword, entering hospitals via cloud, AI servers and data platforms, co-developing clinical systems with the military-medical system and academia.",
          "zh": "董事長林百里視智慧醫療為「十年磨一劍」,以雲端、AI 伺服器與資料平台切入醫院端,與國防醫學體系等產學研合作開發臨床系統。"
        },
        "overview": {
          "en": "Co-developed an electronic casualty report system with the Ministry of National Defense's Military Medical Bureau and National Defense Medical University. At COMPUTEX 2026 it launched next-gen GPU AI servers/racks for hospital self-built compute and hybrid-cloud evaluation. With Wistron and Compal, it is building care-journey infrastructure from medical centers to the home as Taiwan entered a super-aged society in 2025.",
          "zh": "與國防部軍醫局、國防醫學院合作開發「電子傷票系統」。COMPUTEX 2026 推新世代 GPU AI 伺服器與機櫃,供醫院自建算力與混合雲評估。與緯創、仁寶在 2025 台灣進入超高齡社會背景下,從醫學中心到居家共構「照護旅程」基礎建設。"
        },
        "tags": [
          "智慧醫療",
          "AI伺服器",
          "雲端",
          "高齡照護",
          "產學研"
        ],
        "url": "https://money.udn.com/money/story/11162/8821168"
      },
      {
        "slug": "wistron-compal-healthcare",
        "category": "ict",
        "title": {
          "en": "Wistron & Compal Smart Healthcare",
          "zh": "緯創 / 仁寶(智慧醫療)"
        },
        "summary": {
          "en": "Two major ODM firms enter smart healthcare from multiple angles: Wistron (incl. Wistron Medical) builds medical IT and telehealth, while Compal grows non-PC high-margin businesses (incl. healthcare) and targets home-care.",
          "zh": "兩大 ODM 廠以多角度切入智慧醫療:緯創(含緯謙、緯創醫學)布局醫療資訊與遠距,仁寶推非 PC 高毛利業務(含醫療)並從居家照護端布局。"
        },
        "overview": {
          "en": "Quanta, Wistron and Compal form a triangular care network from medical centers to the home, responding to the 2025 super-aged society. Compal targets a 40% revenue share from non-PC businesses (AI servers/5G/healthcare) by 2026, escaping the NB/PC trough. The smart-healthcare battle has shifted from single-point hardware demos toward complete care journeys and the regulatory/cultural deep end.",
          "zh": "廣達、緯創、仁寶從醫學中心到居家「築起三角照護網」,因應 2025 超高齡社會。仁寶 2026 年非 PC 業務(AI 伺服器、5G、醫療)營收占比拚 40%,正式擺脫 NB/PC 谷底。智慧醫療戰場由單點硬體展示,轉向完整「照護旅程」與法規、文化深水區。"
        },
        "tags": [
          "智慧醫療",
          "ODM",
          "遠距醫療",
          "居家照護",
          "高齡"
        ],
        "url": "https://news.gbimonthly.com/tw/magazine/article_show.php?num=85372&range=news"
      },
      {
        "slug": "advantech-ihealthcare",
        "category": "ict",
        "title": {
          "en": "Advantech Smart Healthcare (AIoT)",
          "zh": "研華科技(智慧醫療 iHealthcare)"
        },
        "summary": {
          "en": "The industrial-PC leader enters smart hospitals via its WISE-PaaS platform and iHealthcare solutions, spanning smart building management (iBuilding), medical-IT and physiological-data collection/analysis, and video security.",
          "zh": "工業電腦龍頭以 WISE-PaaS 平台與 iHealthcare 方案切入智慧醫院,涵蓋智慧建築管理(iBuilding)、醫療資訊與生理數據蒐集分析、影像安防。"
        },
        "overview": {
          "en": "Taichung VGH adopted Advantech's AI-driven WISE-PaaS platform with a WISE-STACK 300 private cloud to collect and analyze hospital IT and physiological data. The iBuilding solution covers facility management, BEMS building-energy management and intelligent video security. A representative of medical hardware (industrial PCs/gateways/medical displays) plus an AIoT software platform.",
          "zh": "台中榮總採用研華 AI 驅動 WISE-PaaS 平台搭配 WISE-STACK 300 私有雲,蒐集彙整院內醫療資訊與生理數據並做 AI 分析。iBuilding 方案含設施管理、BEMS 建築能源管理、智能影像安防。屬醫療硬體(工業電腦、閘道、醫療顯示器)加 AIoT 軟體平台的代表。"
        },
        "tags": [
          "醫療AIoT",
          "WISE-PaaS",
          "智慧醫院",
          "工業電腦",
          "私有雲"
        ],
        "url": "https://www.advantech.tw/resources/industry-focus/wise-paas-ibuilding-solution-hospital-management-optimization"
      },
      {
        "slug": "pixart-healthcare-sensing",
        "category": "ict",
        "title": {
          "en": "PixArt Imaging — Healthcare Sensing",
          "zh": "原相科技(健康感測)"
        },
        "summary": {
          "en": "A global CMOS image-sensor leader that has moved into wearable physiological sensing, with PPG optical heart-rate sensors (PAH8001/8002/8003 series) for SpO2 and heart-rate modules.",
          "zh": "全球 CMOS 影像感測器領導廠之一,跨入穿戴式生理感測,以 PPG 光學心率感測器(PAH8001/8002/8003 系列)切入血氧、心率監測模組。"
        },
        "overview": {
          "en": "Founded 1998, PixArt offers low-power, small-form-factor, low-cost PPG heart-rate sensors integrating photodetector, IC and LED for wearables. A representative of Taiwan's IC-design sector extending into medical/health sensing; its progress on medical-grade (device-certified) products should be verified.",
          "zh": "1998 年成立,原相以低功耗、小尺寸、低成本 PPG 心率感測器整合光感測器、IC 與 LED,供穿戴裝置使用。屬台灣 IC 設計業跨入醫療、健康感測的代表,但純醫療等級(醫材認證)的最新進展待查。"
        },
        "tags": [
          "PPG",
          "心率感測",
          "血氧",
          "CMOS",
          "穿戴",
          "IC設計"
        ],
        "url": "https://www.wpgholdings.com/news/detail/zhtw/99/20030"
      }
    ]
  },
  {
    "slug": "regulation",
    "layout": "article",
    "icon": "verified_user",
    "title": {
      "en": "Regulation & Certification",
      "zh": "法規與認證"
    },
    "subtitle": {
      "en": "Taiwan's regulatory and certification landscape for medical device software (SaMD/MDSW), covering classification, registration, quality systems, clinical evidence, reimbursement, security/privacy, and international comparison (2024-2026).",
      "zh": "台灣醫療器材軟體 (SaMD/MDSW) 的法規與認證全貌,涵蓋分類分級、查驗登記、品質系統、臨床證據、健保給付、資安與個資,以及國際對照 (2024-2026)。"
    },
    "sections": [
      {
        "id": "classification",
        "heading": {
          "en": "Classification & Attribute Determination",
          "zh": "分類分級與屬性判定"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "Since the Medical Device Act took effect on 2021-05-01, medical devices in Taiwan have been governed by a dedicated statute (separated from the Pharmaceutical Affairs Act), built on three layers: firm licensing/registration, product registration (查驗登記), and a quality management system (QMS/QSD). The first step for any software vendor is to determine whether the product is a regulated medical device software at all.",
              "zh": "台灣自 2021-05-01《醫療器材管理法》施行起,醫療器材脫離《藥事法》成為獨立專法管理,建立「醫療器材商許可登錄 + 產品查驗登記 + 品質管理系統 (QMS/QSD)」三層架構。對任何軟體業者而言,第一步是先判斷產品是否屬於受管制的醫療器材軟體。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "Medical Device Act (parent statute)",
              "zh": "醫療器材管理法(母法)"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "The parent statute for medical devices in Taiwan, effective 2021-05-01 (promulgated 2020-01-15). A standalone act spun off from the Pharmaceutical Affairs Act; Article 3 defines \"medical device,\" covering both hardware and software. Article 83 means device management no longer applies the Pharmaceutical Affairs Act. For software vendors, step one is determining whether the product meets the device definition; if so, the firm must obtain a medical-device-business license (manufacturer or distributor) before registering or listing the product. Manufacturing or importing unapproved devices carries criminal and administrative penalties.",
              "zh": "台灣醫療器材管理的母法,2021-05-01 施行(總統 2020-01-15 公布)。為自《藥事法》獨立出來的專法,第 3 條定義「醫療器材」,涵蓋實體器材與軟體;第 83 條使醫材管理不再適用《藥事法》。對軟體業者而言,第一步是判斷產品是否落入醫材定義;若是,須先取得醫療器材商(製造業或販賣業)許可登錄,再就產品辦理查驗登記或登錄。違規製造/輸入未經核准之醫材有刑責與罰鍰。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "Regulation Governing the Classification of Medical Devices",
              "zh": "醫療器材分類分級管理辦法"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "Devices are grouped into 16 functional categories by function/intended use/mechanism (clinical chemistry, radiology, neurology, general hospital and personal-use devices, etc.) and into Class I (low), Class II (medium), and Class III (high) by risk. For software, the class hinges on claimed intended use and the harm severity of an erroneous output.",
              "zh": "醫材依功能/用途/工作原理分為 16 大類(臨床化學、放射學、神經科學、一般醫院及個人使用裝置等),依風險分為第一級(低)、第二級(中)、第三級(高)。軟體分級取決於宣稱用途與失誤可能造成的危害程度。"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "Tie-breaking rules ensure the higher risk class always prevails:",
              "zh": "分級判定原則確保較高風險者優先:"
            }
          },
          {
            "type": "ul",
            "items": {
              "en": [
                "If a device fits multiple classes, the highest class applies.",
                "Accessories follow the main device's class.",
                "Combination products take the higher class.",
                "Drug-device combinations where the device action predominates default to Class III."
              ],
              "zh": [
                "符合二以上分級者,取較高風險等級。",
                "附配件比照主器材之分級。",
                "組合產品取較高風險等級。",
                "以醫材作用為主之含藥醫材列第三級。"
              ]
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "Medical Software Classification and Grading Reference Guideline",
              "zh": "醫用軟體分類分級參考指引"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "TFDA's core reference for deciding whether \"medical software\" is a regulated SaMD/MDSW and its risk class. \"Medical software\" broadly means software that collects, stores, analyzes, displays, or transforms health, physiological, or medical-record data; the subset regulated as devices is \"medical device software.\" Determination factors include meeting the device definition, being listed in the classification annex, claiming a diagnostic/therapeutic (or assistive) function, and the contribution to and harm severity of diagnosis/treatment.",
              "zh": "TFDA 判定「醫用軟體」是否屬「醫療器材軟體」(SaMD/MDSW) 及其分級的核心參考指引。「醫用軟體」泛指蒐集、儲存、分析、顯示、轉換人體健康/生理/醫療紀錄的軟體;其中屬醫材管理者稱「醫療器材軟體」。判定原則含:是否符合醫材定義、是否列於分類分級辦法附表、是否宣稱診斷/治療或協助診斷治療、對疾病診療的貢獻度與失誤危害程度。"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "The 2020-12-24 revision excluded heart-rate and SpO2 measurement for everyday wellness (including wearables) from device regulation, treating them as health-promotion products; a 2022-09-15 revision (FDA No. 1111609211) added more non-device examples. The single most important step for software vendors is to run this attribute determination first.",
              "zh": "2020-12-24 修訂將一般民眾日常健康管理之心率、血氧量測產品(含穿戴式)排除於醫材管理外(屬健康促進產品);2022-09-15 再修正(FDA器字第1111609211號)增列非屬醫材之軟體範例。對軟體業者最關鍵的一步:先用此指引做屬性判定,決定是否須走醫材法規。"
            }
          }
        ]
      },
      {
        "id": "registration",
        "heading": {
          "en": "Registration & the Compliance Path",
          "zh": "查驗登記與合規路徑"
        },
        "blocks": [
          {
            "type": "h3",
            "text": {
              "en": "Class II & III Medical Device Registration (查驗登記)",
              "zh": "第二、三等級醫療器材查驗登記"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "Class II/III devices (including most SaMD) need registration to obtain a \"medical device license\" before marketing, per the Review Regulations for Medical Device Registration. Required materials include application/review forms, a QMS manufacturing license or QSD, technical documentation (incl. conformity to IEC 62304/14971/62366), labeling and IFU, predicate comparison (1-2 closest predicates or a comparison table), and a clinical trial report where required. From 2025-07-01, many public applications moved fully to the e-submission system. Class I generally uses lighter \"listing,\" while Class II/III use full registration.",
              "zh": "第二、三等級醫材(含多數 SaMD)須辦理查驗登記取得「醫療器材許可證」始得上市,依《醫療器材查驗登記審查準則》辦理。應檢附:申請書/送審表、QMS 製造許可或 QSD、技術文件(含 IEC 62304/14971/62366 等符合性)、標籤仿單、類似品比對(提供 1-2 個最相似類似品或產品比較表)、必要時臨床試驗報告。自 2025-07-01 起多類人民申請案全面採「醫療器材查驗登記電子化送件系統」。第一等級多採較輕度之「登錄」,第二、三等級採「查驗登記」。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "AI/ML Medical Device Software Registration Technical Guidance",
              "zh": "人工智慧/機器學習技術之醫療器材軟體查驗登記技術指引"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "Guidance for preparing the technical dossier when registering AI/ML SaMD, announced 2020-09-11 (FDA No. 1091607253). Required technical content includes software overview and intended use, algorithm architecture, AI/ML data limitations (training/validation dataset scope and representativeness), output and use-environment/personnel constraints, and safety and performance evaluation (clinical/analytical performance). It is Taiwan's first AI-specific device guidance, making explicit that AI submissions must disclose data provenance, bias control, and validation methodology.",
              "zh": "AI/ML SaMD 申請查驗登記時準備技術性資料的指引,2020-09-11 公告(FDA器字第1091607253號)。要求檢附技術性資料包含:軟體概要與預期用途、演算法架構、AI/ML 之資料限制(訓練/驗證資料集範圍與代表性)、輸出結果與使用環境/人員限制,以及安全與效能評估資料(臨床/分析效能)。為台灣對 AI 醫材最早的專屬指引,明確要求送件須揭露資料來源、偏誤控制與效能驗證方法。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "AI/ML CADe & CADx Device Registration Technical Guidance",
              "zh": "AI/ML 電腦輔助偵測 (CADe) 及電腦輔助診斷 (CADx) 醫療器材查驗登記技術指引"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "Pathway-specific guidance for imaging AI (detection CADe / diagnosis CADx); latest revision FDA No. 1141617758 (2025-08-12), with an accompanying Q&A. It evolved from the 2021-07-07 \"CADe review-key-points guidance\" (FDA No. 1101607081). The guidance distinguishes CADe (lesion detection support) from CADx (classification/diagnosis support) and sets concrete expectations for annotation, dataset partitioning, independent test sets, clinical performance, and reader studies. It is the mainstream submission basis for medical-imaging AI (e.g., lung nodules, diabetic retinopathy, fracture detection); the 2025 revision reflects TFDA's latest expectations on performance validation and real-world data.",
              "zh": "針對影像 AI(偵測 CADe / 診斷 CADx)的專屬送件指引,最新修正公告文號 FDA器字第1141617758號(2025-08-12),並附問答集。前身為 2021-07-07 公告之「CADe 醫療器材軟體查驗登記審查要點指引」(FDA器字第1101607081號)。指引區分 CADe(協助偵測病灶)與 CADx(協助分類/診斷),對標註、資料集分割、獨立測試集、臨床效能與讀片者研究 (reader study) 有具體要求。為醫學影像 AI(如肺結節、糖尿病視網膜病變、骨折偵測)的主流送件依據;2025 修正反映 TFDA 對效能驗證與真實世界資料的最新期待。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "Compliance Path for Software Vendors (6 steps)",
              "zh": "給軟體業者的合規路徑(建議 6 步)"
            }
          },
          {
            "type": "ul",
            "items": {
              "en": [
                "Attribute & class determination: use the Medical Software Classification guideline plus the Classification Regulation to decide if it is a regulated SaMD and its class; request a TFDA attribute query if unsure.",
                "Build the QMS: implement an ISO 13485-based QMS embedding IEC 62304 (lifecycle), ISO 14971 (risk), IEC 62366 (usability), and a secure-development process; manufacturers obtain a manufacturing license, importers prepare QSD.",
                "Obtain firm licensing: complete manufacturer/distributor licensing and registration.",
                "Assemble technical & clinical evidence: software documentation, risk file, cybersecurity data, clinical evaluation report or trial (with IRB if needed); for AI devices, follow the AI/ML and CADe/CADx guidance on datasets and performance validation.",
                "Register/list: Class I listing; Class II/III full registration to obtain the license (e-submission).",
                "Post-market & reimbursement: set up UDI, adverse-event reporting, post-market performance monitoring (AI model drift), cybersecurity maintenance, and privacy compliance; plan NHI temporary payment/sandbox and RWE evidence to pursue reimbursement."
              ],
              "zh": [
                "屬性與分級判定:用「醫用軟體分類分級參考指引」加《分類分級管理辦法》判斷是否為醫療器材軟體、屬第幾等級;不確定可申請 TFDA 醫材屬性查詢。",
                "建立 QMS:依《醫療器材品質管理系統準則》(ISO 13485) 建立品質系統,內含 IEC 62304 軟體生命週期、ISO 14971 風險管理、IEC 62366 可用性、資安開發流程;製造業者取得製造許可,輸入業者備妥 QSD。",
                "取得醫療器材商許可登錄:完成製造業/販賣業許可登錄。",
                "準備技術文件與臨床證據:含軟體文件、風險檔案、資安資料、臨床評估報告或臨床試驗(必要時經 IRB);AI 醫材另依 AI/ML 與 CADe/CADx 指引備齊資料集與效能驗證。",
                "查驗登記/登錄:第一等級登錄、第二/三等級查驗登記取得許可證(電子化送件)。",
                "上市後與給付:建置 UDI、不良事件通報、上市後效能監視(AI 模型漂移)、資安維護與個資保護;並規劃健保暫時性支付/沙盒與 RWE 證據以爭取給付。"
              ]
            }
          }
        ]
      },
      {
        "id": "quality",
        "heading": {
          "en": "Quality Management & Software Standards",
          "zh": "品質管理與軟體標準"
        },
        "blocks": [
          {
            "type": "h3",
            "text": {
              "en": "Quality Management System Regulation (ISO 13485-based)",
              "zh": "醫療器材品質管理系統準則 (QMS)"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "Taiwan's QMS Regulation is modeled on ISO 13485:2016, covering facilities, equipment, organization/personnel, production, quality control, storage/distribution, and complaint handling. Domestic manufacturers must build a QMS, pass TFDA inspection, and obtain a 3-year manufacturing license (renewal filed 6-12 months before expiry) before producing. Even SaMD vendors with no physical line must implement a conformant QMS for software development, change, configuration, and nonconformity management.",
              "zh": "《醫療器材品質管理系統準則》參照 ISO 13485:2016 訂定,規範場所設施、設備、組織人事、生產、品質管制、儲存運銷、客戶申訴等。國內製造業者建立 QMS 並經 TFDA 檢查合格、取得有效期 3 年的「製造許可」(展延須於期滿前 6-12 個月提出)後始得製造。SaMD 業者即使無實體產線,仍須建立符合此準則的軟體開發/變更/組態管理/不符合管理流程。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "QSD - Quality System Documentation Review (for importers)",
              "zh": "QSD 品質系統文件審查(供輸入業者)"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "QSD (Quality System Documentation) review is one route for importers to prove a foreign manufacturer's conformity to Taiwan GMP, allowing a documentary review (leveraging MDSAP, ISO 13485 certificates, etc.) in lieu of an on-site audit. For Taiwanese firms importing foreign SaMD, QSD is prerequisite quality evidence for market entry.",
              "zh": "QSD(品質系統文件)是醫療器材輸入業者證明國外製造廠符合我國醫療器材優良製造規範的方式之一,可採文件審查(含參採 MDSAP、ISO 13485 證書等)替代實地查核。對代理/引進國外 SaMD 的台灣業者,QSD 是上市前必備的品質佐證。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "IEC 62304 - Medical Device Software Life Cycle Processes",
              "zh": "IEC 62304 醫療器材軟體生命週期流程"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "IEC 62304 covers software development planning, requirements analysis, architectural/detailed design, implementation and verification, integration and system testing, release, maintenance, and problem resolution, plus configuration management and software risk management. Process depth scales with software safety class: A (no injury), B (non-serious injury), and C (death/serious injury), linked to ISO 14971. It is the backbone of the registration technical file, recognized by both TFDA and FDA/MDR; SOUP (third-party/legacy components) require an inventory and risk assessment.",
              "zh": "IEC 62304 規範軟體開發計畫、需求分析、架構/細部設計、實作驗證、整合測試、系統測試、發行、維護及問題解決,並要求軟體組態管理與軟體風險管理。依軟體安全分級 A(不會造成傷害)、B(非嚴重傷害)、C(死亡或嚴重傷害)決定文件與測試深度,分級與 ISO 14971 風險管理連動。為查驗登記技術文件的核心,TFDA 與 FDA/MDR 均採認;SOUP(既有/第三方元件)需建立清單與風險評估。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "ISO 14971 - Medical Device Risk Management",
              "zh": "ISO 14971 醫療器材風險管理"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "ISO 14971 sets the foundational whole-lifecycle risk-management process: risk analysis, evaluation, control, residual-risk evaluation, overall benefit-risk judgment, and post-production information feedback. IEC 62304 normatively references ISO 14971. For SaMD, vendors must identify hazard scenarios arising from software faults, erroneous output, cybersecurity, and use errors, feeding into the software safety class and post-market surveillance.",
              "zh": "ISO 14971 建立醫材全生命週期風險管理的基礎流程:風險分析、評估、控制、剩餘風險評估、整體效益-風險判斷與生產後資訊回饋。IEC 62304 直接以規範性引用援用 ISO 14971。對 SaMD 而言,需識別軟體故障、錯誤輸出、網路安全、可用性錯誤等危害情境,並貫穿至軟體安全分級與上市後監督。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "IEC 62366-1 - Usability Engineering (Human Factors)",
              "zh": "IEC 62366-1 可用性工程(人因)"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "IEC 62366-1 requires identifying use-related risks, defining use scenarios and hazardous situations, and conducting formative and summative usability evaluations so the user interface reduces use errors. It matters greatly for SaMD (especially clinical decision support, mobile apps, and AI result presentation): UI misreads can directly cause clinical errors, so usability validation is commonly required in the registration and risk file.",
              "zh": "IEC 62366-1 要求識別使用相關風險、定義使用情境與危險情境、進行形成性 (formative) 與總結性 (summative) 可用性評估,確保使用者介面降低使用錯誤。對 SaMD(尤其臨床決策支援、行動 App、AI 結果呈現)意義重大:UI 誤讀可能直接導致臨床錯誤,可用性驗證常為查驗登記與風險檔案要求。"
            }
          }
        ]
      },
      {
        "id": "clinical",
        "heading": {
          "en": "Clinical Evaluation & Trials",
          "zh": "臨床評估與臨床試驗"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "Safety and efficacy can be shown via a clinical evaluation report (literature, predicate comparison, or existing clinical data) or via a clinical trial. Trials are applied to TFDA per the clinical-trial application guidance and must clear an IRB/REC. Except where the central competent authority mandates local trials, Class II no-predicate devices may be exempt from a trial report if they fully meet specified criteria.",
              "zh": "安全與效能可透過臨床評估報告(文獻/類似品比對/既有臨床資料)或臨床試驗證明。依「醫療器材臨床試驗計畫案申請須知」向 TFDA 申請臨床試驗,並須經人體試驗委員會 (IRB/REC) 審查。除中央主管機關公告須在地試驗者外,第二等級且無類似品之醫材若完全符合特定要件,得免附臨床試驗報告。"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "For AI SaMD, validation typically uses retrospective datasets plus prospective clinical validation where needed. Dataset representativeness and an external test set are review focal points.",
              "zh": "對 AI SaMD:常以回溯性資料集驗證加上必要時的前瞻性臨床驗證;資料代表性與外部驗證集為審查重點。"
            }
          },
          {
            "type": "quote",
            "text": {
              "en": "A registration license is not NHI coverage - the evidence you build for clinical evaluation also seeds the health-economics and real-world evidence needed later for reimbursement.",
              "zh": "查驗登記取得許可證不等於健保給付 - 臨床評估所累積的證據,也是日後爭取給付所需健康經濟學與真實世界證據的基礎。"
            }
          }
        ]
      },
      {
        "id": "reimbursement",
        "heading": {
          "en": "Reimbursement: NHI, Temporary Payment & DTx",
          "zh": "給付:健保、暫時性支付與數位療法"
        },
        "blocks": [
          {
            "type": "h3",
            "text": {
              "en": "NHI AI Device Reimbursement & Temporary Payment",
              "zh": "健保 AI 醫材給付與暫時性支付"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "The NHIA is assessing digital health and AI-assisted diagnosis tools under \"temporary payment,\" weighing cost-effectiveness and budget impact as a precedent for formal coverage; it also plans a \"regulatory sandbox\" to evaluate smart-device clinical benefit and reimbursement. The MOHW's smart-device incubation and value-chain program is slated to run 2026-2029, helping collect real-world data to speed adoption. Even after registration, reimbursement is a separate gate, so vendors should plan health-economics/RWE evidence early. (Specific covered items and fee schedules: TBD.)",
              "zh": "健保署將數位醫療/AI 輔助診斷工具納入「暫時性支付」評估,衡量成本效益與財務衝擊,作為後續正式納保參考;並規劃以「健保沙盒」對智慧醫材進行臨床效益與給付評估。衛福部「智慧醫材全方位輔導培育暨產業鏈結加值計畫」預計 2026 啟動、2029 止,協助收集真實世界數據加速落地。取得查驗登記許可證後,給付仍是獨立關卡,建議早期規劃健康經濟學/RWE 證據。(具體給付項目與費率:待查。)"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "Digital Therapeutics (DTx) Reimbursement Status",
              "zh": "數位療法 (DTx) 給付現況"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "In 2024 the NHIA piloted a \"digital care incentive\" sandbox (Health2Sync, WaCare, Jubo, FET), using a base fee plus performance bonuses tied to health improvement. Taiwan lacks a full prescription-DTx reimbursement scheme like Germany's DiGA; most DTx are currently self-pay or pilot-based. Germany's DiGA \"provisional listing then performance-linked\" model is a useful reference, and the sandbox is a way to accumulate clinical/real-world evidence. (Formal DTx coverage list and fees: TBD.)",
              "zh": "健保署 2024 年以沙盒試辦「數位照護獎勵計畫」(智抗糖、WaCare、智齡科技、遠傳電信),採基本費用加上達成健康改善之績效獎勵模式。台灣尚無如德國 DiGA 的完整處方數位療法 (PDT) 給付制度,多數 DTx 目前以自費或試辦為主。可參考德國 DiGA「先暫時納保、後績效連動」模式,並善用沙盒累積臨床/真實世界證據。(正式 DTx 給付清單與費率:待查。)"
            }
          }
        ]
      },
      {
        "id": "security",
        "heading": {
          "en": "Cybersecurity & Personal Data Protection",
          "zh": "資安與個人資料保護"
        },
        "blocks": [
          {
            "type": "h3",
            "text": {
              "en": "Medical Device Cybersecurity Guidance (for Manufacturers)",
              "zh": "醫療器材網路安全指引(適用於製造廠)"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "The \"Medical Device Cybersecurity Guidance for Manufacturers\" was announced 2021-05-03 (110/05/03), traceable to a first version dated 2018-12-20, and revised through a 7th version dated 2023 - a living document. It covers design-phase security requirements, interface/communication-path/component inventories (the SBOM concept), references AAMI TIR57 and ISO 14971, and aligns with international IEC 81001-5-1 (secure software development lifecycle). Pre-market submissions must include cybersecurity design and risk-management documents; post-market requires ongoing vulnerability monitoring, patching, and updates. For SaMD and connected devices, cybersecurity is now a mandatory registration section.",
              "zh": "「適用於製造廠之醫療器材網路安全指引」2021-05-03(110/05/03)公告,前身可追溯至 2018-12-20 第一版,並多次改版至第七版(2023),為持續更新的活文件。涵蓋設計階段的安全需求、介面/通訊路徑/軟硬體元件清單(含 SBOM 概念),引用 AAMI TIR57、ISO 14971,並與國際 IEC 81001-5-1(安全軟體開發生命週期)接軌。上市前申請應檢附資安設計與風險管理文件;上市後須持續漏洞監測、修補與更新。對 SaMD/聯網醫材,資安已是查驗登記必備章節。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "UDI - Unique Device Identification (TUDID)",
              "zh": "醫療器材單一識別系統 UDI (TUDID)"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "Per the \"UDI Labeling Rule\" (effective 2021-05-01 / 110/05/01), Class II/III devices must carry a UDI on the device body or unit package and upload it to the TUDID national platform, phased in from higher-risk products first. UDI accelerates adverse-event reporting, recalls, and supply-chain traceability. For SaMD, pure software also needs a UDI (including version identifiers), and software version changes may trigger UDI and registration updates.",
              "zh": "依「醫療器材標籤應刊載單一識別碼規定」(110/05/01 生效),第二、三等級醫材本體或單一包裝應標示 UDI,並上傳至「醫療器材單一識別系統資訊平台 TUDID」,由高風險產品分階段實施。UDI 使不良事件通報、回收與來源流向追溯更快速。對 SaMD:純軟體亦須建立 UDI(含版本識別),軟體版本變更可能觸發 UDI 與登記更新。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "Adverse Event Reporting & Post-Market Surveillance",
              "zh": "不良事件通報與上市後監督"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "The Medical Device Act requires firms to report serious adverse events within set deadlines (the specific day-count is TBD) and to cooperate on recalls and CAPA. For SaMD, vendors must run software-defect tracking, post-market performance monitoring (especially AI model drift/performance decay), user-feedback handling, and cybersecurity incident response, integrated with ISO 13485 post-market surveillance and ISO 14971 post-production information.",
              "zh": "《醫療器材管理法》要求醫療器材商於知悉嚴重不良事件後限期通報(具體日數待查),並配合主管機關回收/矯正預防措施 (CAPA)。對 SaMD:須建立軟體缺陷追蹤、上市後效能監視(特別是 AI 模型漂移/效能衰退)、使用者回饋與資安事件處理機制,與 ISO 13485 上市後監視、ISO 14971 生產後資訊連動。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "Personal Data Protection Act (PDPA) & the PDPC",
              "zh": "個人資料保護法 (PDPA) 與個資保護委員會"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "PDPA Article 6 lists medical records, health, genetic, and health-exam data as sensitive personal data, generally barred from processing except with consent, an explicit legal basis, or de-identified academic research. De-identified data that still permits indirect re-identification remains personal data. The Legislative Yuan passed amendments on 2025-10-17, promulgated by the President on 2025-11-11 (effective date set by the Executive Yuan - TBD): establishing an independent supervisory authority (the PDPC), mandating breach reporting, strengthening administrative inspection and penalties, and requiring a Data Protection Officer. For SaMD, processing clinical data needs a lawful basis, robust de-identification and a security-maintenance plan, and a prepared incident-reporting workflow.",
              "zh": "PDPA 第 6 條將病歷、醫療、基因、健康檢查等列為特種個資,原則不得蒐集處理利用,例外含經當事人同意、法律明文、或學術研究且去識別化。去識別化資料若仍可間接識別當事人,仍屬個人資料受規範。2025-10-17 立法院三讀通過部分條文修正、2025-11-11 總統公布(施行日由行政院定之,待查),重點:設立獨立監督機關「個人資料保護委員會」(PDPC)、明定資安事件通報義務、強化行政檢查與裁罰、要求設資料保護官。對 SaMD:處理就醫資料須有合法事由、落實去識別化與資安維護計畫、預備事件通報流程。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "Healthcare Institution & Device Cybersecurity (sectoral)",
              "zh": "醫療機構/醫材資通安全(產業別)"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "Major healthcare institutions are typically designated critical infrastructure or specified non-government agencies under the Cyber Security Management Act and must maintain a security plan, tiered protection, and incident reporting. The MOHW also issues healthcare-sector cybersecurity guidance and hospital protection baselines (exact titles and versions TBD). For SaMD vendors, products must clear hospital security review (encryption, access control, audit trails, and secure HIS/PACS integration) and meet hospitals' supply-chain security requirements.",
              "zh": "大型醫療機構多被納入《資通安全管理法》之關鍵基礎設施/特定非公務機關,須建立資安維護計畫、分級防護與事件通報。衛福部另有醫療機構資通安全相關指引與醫院資通安全防護基準(具體名稱與版本待查)。對 SaMD 業者:產品須通過醫院資安審查(資料加密、存取控制、稽核軌跡、與 HIS/PACS 介接安全),並配合醫院的供應鏈資安要求。"
            }
          }
        ]
      },
      {
        "id": "international",
        "heading": {
          "en": "International Comparison: FDA, CE/MDR & PCCP",
          "zh": "國際對照:FDA、CE/MDR 與 PCCP"
        },
        "blocks": [
          {
            "type": "h3",
            "text": {
              "en": "US FDA SaMD Pathways - 510(k) / De Novo / PMA",
              "zh": "美國 FDA SaMD 路徑 - 510(k) / De Novo / PMA"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "The US risk-classifies into three classes; most SaMD use 510(k) or De Novo, and a few high-risk products use PMA. 510(k) demonstrates substantial equivalence to a marketed predicate - the most common route. De Novo covers a novel low-to-moderate-risk device lacking a suitable predicate, creating a new classification. PMA is for high-risk Class III and requires full clinical evidence. By end-2024 the FDA had cleared roughly 95,000 devices via 510(k)/De Novo and about 1,678 via PMA; AI/ML tools are mostly SaMD. FDA's predicate-comparison logic resembles Taiwan's predicate concept in registration, though evidence thresholds and review culture differ.",
              "zh": "美國依風險分三類;多數 SaMD 走 510(k) 或 De Novo,少數高風險走 PMA。510(k):證明與已上市器材實質等同 (substantial equivalence),最常見路徑。De Novo:無適當對照器材但風險低-中度的新型器材,可建立新分類。PMA:高風險 Class III,須完整臨床證據。截至 2024 年底,FDA 已透過 510(k)/De Novo 核准約 9.5 萬件、PMA 約 1,678 件;AI/ML 醫材多屬 SaMD。FDA 510(k) 的「類似品比對」邏輯與台灣查驗登記類似品概念相近,但證據門檻與審查文化不同。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "US FDA Predetermined Change Control Plan (PCCP)",
              "zh": "美國 FDA 預定變更管控計畫 (PCCP)"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "A PCCP lets AI/ML devices pre-authorize future model changes at submission, avoiding new filings for each change. It has three elements: Description of Modifications, Modification Protocol, and Impact Assessment. In Aug 2024 the FDA extended it to all 510(k)/De Novo/PMA devices, and in Dec 2024 finalized the marketing-submission guidance for PCCPs in AI device software functions, aligned with the Good Machine Learning Practice (GMLP) framework. Change management for AI devices in Taiwan still relies on change registration; PCCP is an international reference, and whether TFDA will adopt a similar mechanism is worth watching (TBD).",
              "zh": "PCCP 允許 AI/ML 醫材在送件時預先核定未來模型變更,免逐次重新送件。含三要素:變更描述 (Description of Modifications)、變更協議 (Modification Protocol)、影響評估 (Impact Assessment)。2024-08 FDA 公告擴及所有需 510(k)/De Novo/PMA 的器材,並於 2024-12 定稿 AI 醫材軟體功能的 PCCP 行銷送件建議指引,與 GMLP(良好機器學習實務)框架配合。台灣 AI 醫材變更管理仍以變更登記為主,PCCP 是國際趨勢參考;台灣是否導入類似機制可關注 TFDA 後續動向(待查)。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "EU CE / MDR & MDSW Rule 11",
              "zh": "歐盟 CE / MDR 與 MDSW 規則 11"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "Under EU MDR (Regulation (EU) 2017/745), software is classified by Annex VIII Rule 11: software providing information for diagnostic/therapeutic decisions is generally Class IIa; if an erroneous decision could cause death or irreversible deterioration it is Class III; software monitoring vital physiological parameters can reach Class IIb. MDCG 2019-11 provides MDSW qualification and classification decision trees. Most medical-purpose software under MDR requires a Notified Body for conformity assessment, clinical evaluation, and PMS/PMCF. MDR classification is often stricter than Taiwan's (Rule 11 frequently pushes software up to IIa/IIb), so EU entry needs extra Notified Body and clinical-evaluation resourcing.",
              "zh": "歐盟 MDR(EU 2017/745)依附件 VIII 規則 11 分級:提供用於診斷/治療決策資訊的軟體原則上為 IIa;若決策錯誤可能致死或不可逆健康惡化則為 III;用於監測生理參數可能至 IIb。MDCG 2019-11 提供 MDSW 判定與分級決策樹。多數醫療目的軟體在 MDR 下需驗證機構 (Notified Body) 進行符合性評鑑、臨床評估與上市後監督 (PMS/PMCF)。MDR 分級通常較台灣嚴格(Rule 11 易使軟體升級至 IIa/IIb),進軍歐盟須額外規劃驗證機構與臨床評估資源。"
            }
          }
        ]
      }
    ]
  },
  {
    "slug": "ecosystem",
    "layout": "gallery",
    "icon": "diversity_3",
    "title": {
      "en": "Industry Ecosystem & Policy",
      "zh": "產業生態與政策"
    },
    "subtitle": {
      "en": "Taiwan's MedTech and digital-health ecosystem in 2024-2026: ICT cross-over plus strong policy backing, linking accelerators, capital, government programs, academia, corporate players, industry bodies and regional clusters.",
      "zh": "台灣醫療科技與數位健康生態系(2024-2026):ICT 跨域加上政策護航,串接加速器、資本、政府計畫、產學研、龍頭企業、產業組織與產業聚落。"
    },
    "categories": [
      {
        "key": "accelerator",
        "en": "Accelerators / Incubators",
        "zh": "加速器 / 育成"
      },
      {
        "key": "capital",
        "en": "Venture Capital / Funds",
        "zh": "創投 / 基金"
      },
      {
        "key": "policy",
        "en": "Government Programs",
        "zh": "政府計畫"
      },
      {
        "key": "academia",
        "en": "Academia & Research",
        "zh": "產學研"
      },
      {
        "key": "corporate",
        "en": "Corporate Players",
        "zh": "龍頭企業"
      },
      {
        "key": "org",
        "en": "Industry Bodies",
        "zh": "產業組織"
      },
      {
        "key": "cluster",
        "en": "Clusters",
        "zh": "產業聚落"
      }
    ],
    "items": [
      {
        "slug": "be-health-ventures",
        "category": "capital",
        "title": {
          "en": "BE Health Ventures (BE Capital)",
          "zh": "比翼生醫(比翼資本)"
        },
        "summary": {
          "en": "Taiwan's largest MedTech/HealthTech accelerator and \"hospital VC\", focused on medical devices and digital health, using clinical proof-of-concept (PoC) and proof-of-business (PoB) to help startups commercialize.",
          "zh": "台灣最大醫療生技新創加速器,定位「醫院創投」,聚焦醫材(MedTech)與數位醫療(HealthTech),以臨床場域驗證(PoC)加市場驗證(PoB)協助新創落地。"
        },
        "overview": {
          "en": "Founded 2018, resident at TTA; 33+ portfolio companies, alumni fundraising over US$300M. Runs an annual PoC accelerator and Demo Day with Taipei Medical University and Show Chwan Health System (2024 \"TMU x BE x SCHS Demo Day\", 19 teams at Nangang). The 2025 PoC program targets precision medicine, devices, digital health, AI healthcare and surgical tech, offering six months of mentoring. In April 2026 it co-led H2U's round with the National Development Fund and launched the \"H2UxBE corporate accelerator\"; it opened a Tokyo base in Oct 2025 to expand into Japan (details TBC).",
          "zh": "2018 年成立,進駐 TTA;累計投資逾 33 家、校友募資破 3 億美元。與台北醫學大學、秀傳醫療體系合作辦理年度 PoC 加速器與 Demo Day(2024「TMU x BE x SCHS Demo Day」於南港 19 隊展演)。2025 PoC 計畫聚焦精準醫療、醫材、數位健康、AI 醫療、手術技術,提供 6 個月輔導與資源。2026 年 4 月與國發基金共同領投 H2U 永悅健康並成立「H2UxBE 企業加速器」;2025 年 10 月於東京設點拓展日本市場(待查細節)。"
        },
        "tags": [
          "accelerator",
          "hospital-VC",
          "medtech",
          "digital-health",
          "PoC",
          "TTA"
        ],
        "url": "https://www.behealthventures.com/"
      },
      {
        "slug": "taiwan-tech-arena",
        "category": "accelerator",
        "title": {
          "en": "Taiwan Tech Arena (TTA)",
          "zh": "臺灣科技新創基地"
        },
        "summary": {
          "en": "National-level international startup hub set up by the NSTC (formerly MOST) in 2018 at Nangang, connecting startups, accelerators, VCs and corporates; healthcare is a key vertical.",
          "zh": "國科會(原科技部)2018 年於南港設立的國際新創基地,串接新創、加速器、創投與企業;醫療健康為重點賽道之一。"
        },
        "overview": {
          "en": "~960 ping; resident international accelerators include BE Accelerator (biomed/healthcare focus), NYCU IAPS, SOSV-MOX and SparkLabs Taipei. The \"2025 TTA international accelerator\" call closed Jan 6, 2025. It hosts healthcare-specific programs such as the LANDSEED HALL+ digital-health accelerator. Over 200 startups invested, linked to 100+ global VCs.",
          "zh": "規模約 960 坪;進駐國際級加速器含比翼(BE Accelerator,專注生技醫療照護)、陽明交大 IAPS、SOSV-MOX、SparkLabs Taipei 等。「2025 TTA 國際級加速器進駐合作」徵案於 114 年 1 月 6 日截止。另有聯新(LANDSEED HALL+)數位健康加速器等醫療專屬計畫進駐。累計投資逾 200 家新創、鏈結逾 100 家國際創投。"
        },
        "tags": [
          "accelerator",
          "government",
          "startup-hub",
          "healthcare",
          "NSTC"
        ],
        "url": "https://www.taiwanarena.tech/"
      },
      {
        "slug": "nbrp",
        "category": "academia",
        "title": {
          "en": "National Biotechnology Research Park (NBRP)",
          "zh": "國家生技研究園區"
        },
        "summary": {
          "en": "Academia Sinica-led national biomedical research ecosystem - the first to co-locate industry, government, academia and research - with an incubation center for biotech and smart-healthcare startups.",
          "zh": "中研院主導、國內第一個跨產官學研進駐的國家級生醫研究生態圈,設創服育成中心扶植生技與智慧醫療新創。"
        },
        "overview": {
          "en": "Tenants include Academia Sinica's Biomedical Translation Research Center, the TFDA, the National Laboratory Animal Center and the DCB. The BioHub incubation center (Building C) plus Building A offer independent startup space; the 2025 NBRP Demo Day was held July 21. Open to teams in biotech new drugs and smart-healthcare innovation.",
          "zh": "進駐單位含中研院生醫轉譯研究中心、衛福部食藥署、國研院國家生物模式中心、經濟部生物技術開發中心(DCB)。C 棟創服育成中心(BioHub)及 A 棟提供新創獨立育成空間;2025 NBRP Demo Day(招商暨人才與技術媒合會)於 7 月 21 日登場。申請對象含智慧醫療相關創新研發團隊。"
        },
        "tags": [
          "incubator",
          "academia-sinica",
          "biotech",
          "translational",
          "demo-day"
        ],
        "url": "https://nbrp.sinica.edu.tw/"
      },
      {
        "slug": "deepening-healthy-taiwan",
        "category": "policy",
        "title": {
          "en": "Deepening Healthy Taiwan Plan",
          "zh": "健康台灣深耕計畫"
        },
        "summary": {
          "en": "MOHW's flagship healthcare policy (2025-2029), NT$48.9bn, with four pillars covering working conditions, talent, smart-tech healthcare and sustainable healthcare.",
          "zh": "衛福部主導的旗艦醫療政策(114-118 年),總經費 489 億元,四大主軸涵蓋醫療工作條件、人才、智慧科技醫療與醫療永續。"
        },
        "overview": {
          "en": "Four pillars: (1) improve clinical working conditions; (2) multi-track talent training; (3) deploy smart-tech medicine (AI clinical support, data sharing, smart hospitals); (4) sustainable/socially-responsible healthcare (tiered care, green hospitals, ESG). Paired with Long-Term Care 3.0. ~70% incentive participation in 2024, targeting 90% in 2025; phased applications across hospital tiers from 2025. Stems from President Lai Ching-te's \"Healthy Taiwan\" platform.",
          "zh": "四大主軸:(1) 優化醫療工作條件;(2) 多元人才培訓;(3) 導入智慧科技醫療(AI 協助臨床、醫療數據共享、智慧醫院);(4) 社會責任醫療永續(分級醫療、綠色醫院、ESG)。搭配長照 3.0「智慧照顧三升五顧」。113 年獎勵參與率約七成、目標 114 年九成;114 年起各級醫療機構分梯申請。源於賴清德總統「健康台灣」政見。"
        },
        "tags": [
          "policy",
          "MOHW",
          "smart-hospital",
          "long-term-care",
          "AI"
        ],
        "url": "https://dep.mohw.gov.tw/TDU/cp-1567-82709-121.html"
      },
      {
        "slug": "precision-health-strategic-industry",
        "category": "policy",
        "title": {
          "en": "Precision Health Strategic Industry (5+2)",
          "zh": "精準健康戰略產業(5+2 生醫)"
        },
        "summary": {
          "en": "The biomedical axis of the 5+2 innovation program, evolving from the Biomedical Industry Innovation Program into the Precision Health Strategic Industry plan, integrating precision prevention, diagnosis, treatment and health big data.",
          "zh": "5+2 產業創新中的生醫主軸,自「生醫產業創新推動方案」延伸至「精準健康戰略產業發展方案」,整合精準預防、診斷、治療與健康大數據。"
        },
        "overview": {
          "en": "A cross-ministry effort (NDC, MOEA, MOHW, NSTC) linking NHI data, biobanks, NGS and AI to grow precision medicine, regenerative medicine and digital health sub-sectors. Aligned with \"Healthy Taiwan\" and the national AI blueprint (latest budget/KPIs TBC).",
          "zh": "由國發會、經濟部、衛福部、國科會跨部會推動,串接健保資料、生物資料庫、次世代定序與 AI,扶植精準醫療、再生醫療、數位醫療次領域。與「健康台灣」「AI 國家藍圖」相互呼應(具體預算與 KPI 待查最新版)。"
        },
        "tags": [
          "policy",
          "precision-health",
          "5plus2",
          "regenerative",
          "biobank"
        ],
        "url": "https://www.ndc.gov.tw/"
      },
      {
        "slug": "bio-taiwan-committee",
        "category": "policy",
        "title": {
          "en": "Bio Taiwan Committee (BTC)",
          "zh": "生技產業策略諮議委員會"
        },
        "summary": {
          "en": "The Executive Yuan's top annual strategy meeting for the biotech industry, gathering 200+ domestic and international members to set biomedical policy direction.",
          "zh": "行政院年度生技產業最高層級策略會議,匯集 200 位以上國內外委員與專家,為生醫政策定調。"
        },
        "overview": {
          "en": "The 2024 BTC focused on six strategic themes incl. AI enablement, smart healthcare, precision health and global positioning; the 2025 BTC (Aug 25) themed \"Taiwan's Sustainable Strength, New Biomedical Momentum\" with pillars of advantage continuation, application innovation and sustainable adaptation. Organized by the NSTC.",
          "zh": "2024 BTC 聚焦 AI 賦能、智慧醫療、精準健康與全球布局六大戰略;2025 BTC(8 月 25 日華南銀行國際會議中心)以「台灣永續力、生醫新動能」為題,三大主軸「優勢延續、應用創新、永續調適」。由國科會主辦。"
        },
        "tags": [
          "policy",
          "advisory",
          "NSTC",
          "precision-health",
          "AI"
        ],
        "url": "https://stp.nstc.gov.tw/btc/"
      },
      {
        "slug": "taiwania-capital",
        "category": "capital",
        "title": {
          "en": "Taiwania Capital",
          "zh": "台杉投資"
        },
        "summary": {
          "en": "National-level investment company backed by the National Development Fund (founded 2017), focused on tech and biotech within the 5+2 priority industries.",
          "zh": "國發基金支持的國家級投資公司(2017 成立),聚焦 5+2 重點產業中的科技與生技兩大領域。"
        },
        "overview": {
          "en": "Manages 6 funds totaling ~NT$25.75bn (NDF holds 40%). Biotech line: Buffalo II Biotech Fund (2018, NT$5.9bn; new drugs, regenerative medicine, devices, cell & gene therapy) and Buffalo III (2021, NT$1.64bn; digital and precision medicine); together backing 26 startups, now in the management phase.",
          "zh": "管理 6 支基金、總規模約 257.5 億元(國發基金持股 40%)。生技線:水牛二號生技基金(2018,59 億元,投新藥/再生醫療/醫材/基因細胞治療)、水牛三號(2021,16.4 億元,聚焦數位及精準醫療);兩基金累計扶植 26 家生技新創,進入管理期。"
        },
        "tags": [
          "VC",
          "national-fund",
          "NDF",
          "biotech",
          "digital-health"
        ],
        "url": "https://www.taiwaniacapital.com/"
      },
      {
        "slug": "national-development-fund",
        "category": "capital",
        "title": {
          "en": "National Development Fund (NDF)",
          "zh": "國家發展基金"
        },
        "summary": {
          "en": "The Executive Yuan's national fund-of-funds, supporting biomed and digital-health startups via direct and matching investment, and capitalizing national investment vehicles (Taiwania).",
          "zh": "行政院主導的國家級母基金,透過直接與搭配投資扶植生醫與數位健康新創,並出資國家級投資公司(台杉)。"
        },
        "overview": {
          "en": "Holds 40% of national investment companies incl. Taiwania; co-led H2U's round with BE Health in April 2026. Funds policy vehicles such as the Angel Investment Program and the Industry Innovation & Transformation Fund, frequently co-investing in early-stage health startups alongside accelerators/VCs.",
          "zh": "持有台杉等國家級投資公司 40% 股權;2026 年 4 月與比翼生醫共同領投 H2U 永悅健康。為「創業天使投資方案」「產業創新轉型基金」等政策工具的資金來源,廣泛搭配各加速器與創投投資早期醫療新創。"
        },
        "tags": [
          "government-fund",
          "co-investment",
          "NDF",
          "early-stage"
        ],
        "url": "https://www.df.gov.tw/"
      },
      {
        "slug": "dcb",
        "category": "academia",
        "title": {
          "en": "Development Center for Biotechnology (DCB)",
          "zh": "生物技術開發中心"
        },
        "summary": {
          "en": "Non-profit institute (est. 1984) building shared infrastructure, developing key technologies, training talent and incubating startups for the biomedical industry.",
          "zh": "1984 年成立的非營利法人,為生醫產業建構共用設施、開發關鍵技術、培育人才,並設新創育成。"
        },
        "overview": {
          "en": "Resident at NBRP; houses the Biotech & Pharmaceutical Industries Promotion Office (BPIPO) for policy promotion and investment attraction. Offers CDMO and incubation services across new drugs, biologics and devices.",
          "zh": "進駐國家生技研究園區;轄下含「生技醫藥產業發展推動小組(BPIPO)」,負責產業政策推動與招商。提供新藥/生物製劑/醫材的委託開發與育成服務。"
        },
        "tags": [
          "research-institute",
          "CDMO",
          "incubator",
          "BPIPO"
        ],
        "url": "https://www.dcb.org.tw/"
      },
      {
        "slug": "itri-biomedical",
        "category": "academia",
        "title": {
          "en": "ITRI Biomedical Technology and Device Research Labs",
          "zh": "工業技術研究院生醫與醫材研究所"
        },
        "summary": {
          "en": "ITRI's core biomedical research arm, driving cross-domain collaboration and startup spin-offs across cell therapy, medical devices and CDMO.",
          "zh": "工研院生醫主力研究單位,推動生醫跨域合作與新創孵化,涵蓋細胞治療、醫材與 CDMO。"
        },
        "overview": {
          "en": "ITRI has spun off 10 biotech startups (4 listed) with combined revenue over NT$8bn. In 2024 it signed a strategic partnership with PwC Taiwan for a \"Biomedical Innovation Cross-domain Platform\". It developed Taiwan's first automated adherent-cell production system. Director: Eric Chuang (biomedical EE/informatics background).",
          "zh": "工研院累計成立 10 家生技新創、4 家上市櫃,相關營收逾 80 億元。2024 年與資誠(PwC)簽署策略夥伴,共推「生醫創新跨域合作平台」。已開發台灣首座貼附型細胞自動化生產系統。所長莊曜宇(生醫電資跨域背景)。"
        },
        "tags": [
          "research-institute",
          "ITRI",
          "cell-therapy",
          "spin-off",
          "CDMO"
        ],
        "url": "https://www.itri.org.tw/"
      },
      {
        "slug": "foxconn",
        "category": "corporate",
        "title": {
          "en": "Foxconn (incl. H.Spectrum, Fugen Biotech)",
          "zh": "鴻海科技集團(含 H.Spectrum、富佳生技)"
        },
        "summary": {
          "en": "ICT giant moving into smart healthcare on three fronts - AI nursing robots, smart-hospital digital twins and medical-imaging AI - while nurturing startups via the H.Spectrum accelerator and the Yonglin Foundation.",
          "zh": "由 ICT 代工跨入智慧醫療,三路並進:AI 護理機器人、智慧醫院數位孿生、醫學影像 AI;並透過 H.Spectrum 加速器與永齡基金會培育新創。"
        },
        "overview": {
          "en": "At GTC Taipei (May 2025) it unveiled the \"Nurabot\" AI nursing robot with Taichung Veterans General Hospital and Kawasaki (running in-house Traditional-Chinese LLM FoxBrain), and contributed models to the open-source MONAI imaging platform. It co-founded the HiMEDt digital-health alliance with ITRI (3rd forum Dec 2024, \"Sovereign AI for Life Sciences\"). H.Spectrum+ (with Hon Chun and the Yonglin Foundation) targets preventive medicine, precision diagnostics and AIoT healthcare. Fugen Biotech/NISI status TBC.",
          "zh": "2025 年 5 月 GTC Taipei 發表與台中榮總、川崎重工合作的 AI 護理協作機器人「Nurabot」(搭載自研繁中 LLM FoxBrain),貢獻模型給開源醫學影像平台 MONAI。與工研院共同發起「台灣數位健康大聯盟(HiMEDt)」(2024 年 12 月第三屆研討會主題「生命科學之主權式 AI」)。H.Spectrum+(由鴻準加永齡基金會)聚焦預防醫學、精準檢測、AIoT 智慧醫療。富佳生技/NISI 具體現況待查。"
        },
        "tags": [
          "corporate",
          "foxconn",
          "nursing-robot",
          "accelerator",
          "HiMEDt",
          "AI"
        ],
        "url": "https://www.foxconn.com/"
      },
      {
        "slug": "quanta-qoca",
        "category": "corporate",
        "title": {
          "en": "Quanta Computer (QOCA)",
          "zh": "廣達電腦(QOCA / 雲達)"
        },
        "summary": {
          "en": "Enters smart precision medicine via the QOCA AI medical cloud, linking medical centers to home care, supported by the Quanta Healthcare Technology Foundation.",
          "zh": "以 QOCA AI 醫療雲平台切入智慧精準醫療,串接醫學中心到居家照護,成立廣達醫療基金會。"
        },
        "overview": {
          "en": "QOCA AIM is an automated ML platform for structured-data clinical prediction; QOCA apc is an AI home-care platform. It set up the Quanta Healthcare Technology Foundation (2019), partnered with MIT for a third time and with NTU, Chang Gung, China Medical, Taipei Veterans and NCKU hospitals, initially targeting oncology and cardiology. It forms an ICT \"care triangle\" with Wistron and Compal.",
          "zh": "QOCA AIM 為自動化機器學習平台,做結構化資料臨床預測;QOCA apc 為 AI 健康照護平台。2019 年成立廣達醫療基金會,第三度與 MIT 合作,並攜手台大、長庚、中國醫、北榮、成大等醫學中心,初期鎖定腫瘤與心臟智慧精準醫療。與緯創、仁寶並列 ICT 三角照護網。"
        },
        "tags": [
          "corporate",
          "quanta",
          "AI-cloud",
          "precision-medicine",
          "home-care"
        ],
        "url": "https://www.taiwan-healthcare.org/"
      },
      {
        "slug": "wistron-medcare",
        "category": "corporate",
        "title": {
          "en": "Wistron Medical Technology (Wistron Medcare)",
          "zh": "緯創醫學科技"
        },
        "summary": {
          "en": "Wistron's medical arm, focused on rehab/assistive exoskeletons, AI hemodialysis monitoring and non-invasive glucose measurement devices.",
          "zh": "緯創旗下醫療事業,聚焦復健/輔具外骨骼、AI 血液透析監測與非侵入式血糖量測等醫材。"
        },
        "overview": {
          "en": "Develops upper/lower-limb exoskeletons, AI dialysis-monitoring systems and non-invasive glucose devices. Together with Quanta and Compal, it forms the ICT \"medical-center-to-home\" care triangle; Wistron also pursues 5G smart-healthcare via subsidiaries.",
          "zh": "開發上下肢外骨骼機器人、AI 洗腎監測系統、非侵入式血糖量測裝置。與廣達、仁寶並列從醫學中心到居家的 ICT 三角照護網;緯創亦透過子公司布局 5G 智慧醫療。"
        },
        "tags": [
          "corporate",
          "wistron",
          "exoskeleton",
          "dialysis",
          "medical-device"
        ],
        "url": "https://news.gbimonthly.com/tw/invest/show2.php?num=516"
      },
      {
        "slug": "acer-medical",
        "category": "corporate",
        "title": {
          "en": "Acer Medical",
          "zh": "宏碁智醫"
        },
        "summary": {
          "en": "Acer's AI medical-software company specializing in AI-assisted screening SaMD for ophthalmology, bone density and kidney disease, expanding into preventive medicine and Southeast Asia.",
          "zh": "宏碁旗下 AI 醫療軟體公司,以眼科、骨密度、腎病等 AI 輔助篩檢 SaMD 為主,布局預防醫學與東南亞市場。"
        },
        "overview": {
          "en": "Products: VeriSee DR (diabetic retinopathy), VeriSee AMD, VeriSee GLC (glaucoma), VeriOsteo OP (bone density), CKD AI screening and a cloud personal-care system. In 2025, the VeriCompact portable X-ray, the VeriSee analysis platform and VeriSee GLC received TFDA approval. VeriSee/VeriOsteo are expanding into Southeast Asia.",
          "zh": "產品線:VeriSee DR(糖尿病視網膜病變)、VeriSee AMD、VeriSee GLC(青光眼)、VeriOsteo OP(骨密度)、慢性腎病 AI 篩檢及雲端個人照護系統。2025 年 VeriCompact 攜帶式 X 光、VeriSee 影像分析平台、VeriSee GLC 取得食藥署核准。VeriSee/VeriOsteo 拓展東南亞。"
        },
        "tags": [
          "corporate",
          "acer",
          "SaMD",
          "AI-screening",
          "ophthalmology"
        ],
        "url": "https://tw.linkedin.com/company/acer-medical"
      },
      {
        "slug": "advantech-wise-health",
        "category": "corporate",
        "title": {
          "en": "Advantech (WISE-Health)",
          "zh": "研華(WISE-Health)"
        },
        "summary": {
          "en": "Industrial-PC leader entering smart hospitals, medical IoT and nursing information systems through its WISE-Health/iHealthcare solutions.",
          "zh": "工業電腦龍頭,以 WISE-Health/iHealthcare 解決方案切入智慧醫院、醫療物聯網與護理資訊系統。"
        },
        "overview": {
          "en": "Provides medical-grade tablets, nursing carts, smart wards, mobile-nursing and medical-IoT platforms integrating hospital IT infrastructure; a regular exhibitor at the Taiwan Healthcare+ Expo (latest contracts/revenue TBC).",
          "zh": "提供醫療級平板、護理推車、智慧病房、行動護理與醫療 IoT 平台,串接醫院 IT 基礎建設;為台灣醫療科技展常態參展廠商(具體最新合約與營收待查)。"
        },
        "tags": [
          "corporate",
          "advantech",
          "medical-IoT",
          "smart-ward",
          "nursing"
        ],
        "url": "https://www.advantech.com/"
      },
      {
        "slug": "asus-aics",
        "category": "corporate",
        "title": {
          "en": "ASUS (AICS, Healthcare)",
          "zh": "華碩(AICS、醫療)"
        },
        "summary": {
          "en": "Enters clinical NLP, AI medical records and imaging/ultrasound devices via AICS (AI research center) and its healthcare business.",
          "zh": "以 AICS(人工智慧研究中心)與醫療事業切入臨床 NLP、AI 病歷與醫療影像/超音波裝置。"
        },
        "overview": {
          "en": "Showcased the LU800 wireless handheld ultrasound at the 2024 Expo; AICS drives clinical decision support, medical language models and health-data analytics. Delta Electronics' specific medical-imaging/energy positioning is TBC.",
          "zh": "2024 醫療科技展展出無線手持式超音波 LU800;AICS 推動臨床決策支援、醫療語言模型與健康數據分析。台達電(Delta)在醫療影像與能源管理之布局具體現況待查。"
        },
        "tags": [
          "corporate",
          "asus",
          "AICS",
          "ultrasound",
          "clinical-NLP"
        ],
        "url": "https://www.taiwanexcellence.org/"
      },
      {
        "slug": "h2u-corporation",
        "category": "corporate",
        "title": {
          "en": "H2U Corporation",
          "zh": "H2U 永悅健康"
        },
        "summary": {
          "en": "Digital-health platform company backed by Foxconn founder Terry Gou, building a full-scenario health ecosystem and services platform.",
          "zh": "鴻海創辦人郭台銘支持的數位健康平台公司,打造全場景健康生態系與健康服務平台。"
        },
        "overview": {
          "en": "Seed/first round (2021-22) led by Terry Gou and Hon Chun (~NT$220M/US$8M); Series B (2024) led by Korea's SCL with Standard Foods, Maxim Biotech and Aspeed participating, exceeding US$10M. April 2026: latest round co-led by BE Health and the NDF, plus a new \"H2UxBE corporate accelerator\" (amount TBC); targeting an overseas IPO.",
          "zh": "首輪募資(2021/22)由郭台銘攜鴻準領投,完成約 2.2 億元/800 萬美元;B 輪(2024)由韓國 SCL 領軍,佳格、偉喬生醫、上奇科技等參與,破千萬美元。2026 年 4 月由比翼生醫與國發基金共同領投最新一輪並成立「H2UxBE 企業加速器」(金額待查),目標海外上市。"
        },
        "tags": [
          "startup",
          "digital-health",
          "foxconn-linked",
          "platform",
          "funding"
        ],
        "url": "https://tw.linkedin.com/company/h2ucorp"
      },
      {
        "slug": "ibmi",
        "category": "org",
        "title": {
          "en": "Institute for Biotechnology and Medicine Industry (IBMI)",
          "zh": "生策會 / 生策中心(IBMI)"
        },
        "summary": {
          "en": "Taiwan's most influential industry-promotion body, driving biomedical policy, quality certification (SNQ) and international linkage, and organizing the Taiwan Healthcare+ Expo.",
          "zh": "台灣生醫產業最具影響力的民間策進組織,推動產業政策、品質認證(SNQ)與國際鏈結,主辦台灣醫療科技展。"
        },
        "overview": {
          "en": "Launched the National Biotech & Medical Care Quality Award (1996) and the SNQ national quality mark (Safety and Quality, 2004) as a market quality mechanism. Founder Wang Jin-pyng, with Yuan-Tseh Lee as president. Organizes the APAC Healthcare Quality Forum (with ICHOM) and the National Innovation Award, and serves as a key industry-to-government advocacy channel.",
          "zh": "1996 年推動「國家生技醫療品質獎」,2004 年發展「SNQ 國家品質標章」(Safety and Quality)為市場品質機制。創辦人王金平、會長翁啓惠。主辦亞太醫療品質年會(攜手 ICHOM)、國家新創獎,並為產業政策對政府的重要倡議窗口。"
        },
        "tags": [
          "industry-body",
          "IBMI",
          "SNQ",
          "expo",
          "policy-advocacy"
        ],
        "url": "https://ibmi.taiwan-healthcare.org/"
      },
      {
        "slug": "taiwan-healthcare-expo",
        "category": "org",
        "title": {
          "en": "Taiwan Healthcare+ Expo",
          "zh": "台灣醫療科技展"
        },
        "summary": {
          "en": "IBMI's flagship \"healthcare x technology\" expo, the largest in Asia-Pacific, mobilizing hospitals, ICT, biomed and startups annually.",
          "zh": "生策會主辦的亞太最大「醫療 X 科技」展會,串連醫院、ICT、生醫與新創,年度產業總動員。"
        },
        "overview": {
          "en": "The 8th edition (Dec 5-8, 2024, Nangang) drew 600+ institutions/companies, 2,000+ booths and ~30,000 professional visitors; it focused on five industries (smart healthcare, regenerative medicine, precision detection, biopharma, advanced devices) and ten trends. The 2025 edition spotlights precision-health themes such as cardiovascular-kidney-metabolic (CKM) syndrome. Major medical centers (NTU, Taipei Veterans, Chang Gung, Tzu Chi) showcase smart-healthcare results.",
          "zh": "2024 年(第 8 屆)12 月 5 日至 8 日於南港,逾 600 家機構與企業、逾 2,000 展位、近 3 萬專業觀眾;聚焦五大產業(智慧醫療、再生醫療、精準檢測、生技醫藥、尖端醫材)與十大趨勢。2025 年聚焦心腎代謝症候群(CKM)等精準健康主題。各大醫學中心(台大、北榮、長庚、慈濟等)設展區發表智慧醫療成果。"
        },
        "tags": [
          "expo",
          "IBMI",
          "smart-healthcare",
          "hospital",
          "B2B"
        ],
        "url": "https://expo.taiwan-healthcare.org/"
      },
      {
        "slug": "hspectrum-plus",
        "category": "accelerator",
        "title": {
          "en": "H.Spectrum+ Accelerator",
          "zh": "H.Spectrum+ / 鴻準健康加速器"
        },
        "summary": {
          "en": "Biomedical international accelerator backed by Hon Chun Precision and the Yonglin Foundation, focused on preventive medicine, precision diagnostics and AIoT healthcare.",
          "zh": "由鴻準精密與永齡基金會支持的生醫國際加速器,聚焦預防醫學、精準檢測與 AIoT 智慧醫療。"
        },
        "overview": {
          "en": "Evolved from Foxconn's H.Spectrum medical-startup platform; H.Spectrum+ (since 2022) is an investment-oriented international accelerator that has selected 10 biomedical companies, connecting them to global resources (latest cohort TBC).",
          "zh": "源自鴻海集團的 H.Spectrum 醫療新創培育平台,H.Spectrum+(2022 起)為投資型國際加速器,曾選出 10 家生醫公司,協助接軌全球資源(最新一屆狀況待查)。"
        },
        "tags": [
          "accelerator",
          "corporate",
          "foxconn-linked",
          "preventive-medicine",
          "AIoT"
        ],
        "url": "https://news.gbimonthly.com/tw/invest/show2.php?num=558"
      },
      {
        "slug": "starfab-accelerator",
        "category": "accelerator",
        "title": {
          "en": "StarFab Accelerator",
          "zh": "StarFab Accelerator / 星礦加速器"
        },
        "summary": {
          "en": "Self-described as Taiwan's largest corporate accelerator (est. 2016), with smart-health among six themes; co-launched the TAI1 AI accelerator with NVIDIA Inception in 2025.",
          "zh": "標榜全台最大產業加速器(2016 成立),六大主題含智慧健康;2025 年與 NVIDIA Inception 合推 TAI1 AI 加速器。"
        },
        "overview": {
          "en": "Six themes: smart manufacturing, smart health, smart city, smart retail, smart agriculture, smart fintech. In May 2025 it launched the TAI1 AI accelerator (StarFab + NVIDIA Inception); selected startups can receive ~NT$3M investment and link to Taiwan's strong industries and NVIDIA AI resources; it also runs a Hsinchu AIoT accelerator.",
          "zh": "六大主題:智慧製造、智慧健康、智慧城市、智慧零售、智慧農業、智慧金融。2025 年 5 月推出 TAI1 AI 加速器(StarFab 加 NVIDIA Inception),入選新創有機會獲約 300 萬元投資並對接台灣優勢產業與 NVIDIA AI 資源;另設新竹 AIoT 加速器。"
        },
        "tags": [
          "accelerator",
          "corporate",
          "smart-health",
          "NVIDIA",
          "AIoT"
        ],
        "url": "https://zh.starfabx.com/"
      },
      {
        "slug": "linkou-startup-terrace",
        "category": "accelerator",
        "title": {
          "en": "Linkou Startup Terrace (IPark)",
          "zh": "林口新創園(IPark)"
        },
        "summary": {
          "en": "NDC-backed startup cluster offering co-working space, international accelerators and hardware-software integration resources, including smart-health/health-tech teams.",
          "zh": "國發會推動的新創聚落,提供進駐空間、國際加速器與軟硬整合資源,含智慧醫療/健康科技團隊。"
        },
        "overview": {
          "en": "One of Taiwan's largest single startup bases, linking the nearby Chang Gung medical system and electronics supply chain, well suited for hardware-software MedTech and health-tech startups (resident counts/health programs TBC).",
          "zh": "為台灣最大單一新創基地之一,連結周邊長庚醫療體系與電子供應鏈,適合醫材與健康科技軟硬整合新創落地(進駐家數/醫療專案數待查)。"
        },
        "tags": [
          "incubator",
          "NDC",
          "startup-cluster",
          "chang-gung",
          "medtech"
        ],
        "url": "https://www.startupterrace.tw/"
      },
      {
        "slug": "garage-plus",
        "category": "accelerator",
        "title": {
          "en": "Garage+ (Epoch Foundation)",
          "zh": "Garage+(時代基金會)"
        },
        "summary": {
          "en": "International accelerator under the Epoch Foundation, known for early-stage deep-tech and health/biomed startups, annually selecting global teams to connect with Taiwanese corporates and hospitals.",
          "zh": "時代基金會旗下國際加速器,以早期硬科技與健康/生醫新創國際鏈結見長,年度選拔全球團隊來台對接企業與醫院。"
        },
        "overview": {
          "en": "Leverages a corporate-partner network and MIT-type international links to help global and local health startups run PoC and commercialize in Taiwan; an important gateway for internationalizing Taiwan's health-tech (2024-2026 cohort list and health share TBC).",
          "zh": "透過企業夥伴網絡與 MIT 等國際連結,協助海內外醫療健康新創在台 PoC 與商化;為台灣健康科技國際化的重要窗口(2024-2026 具體入選名單與醫療佔比待查)。"
        },
        "tags": [
          "accelerator",
          "non-profit",
          "international",
          "deep-tech",
          "health"
        ],
        "url": "https://www.garageplus.asia/"
      },
      {
        "slug": "hospital-innovation-centers",
        "category": "academia",
        "title": {
          "en": "Hospital Innovation & Incubation Centers",
          "zh": "醫學中心育成/創新中心(北醫、秀傳、台大、北榮等)"
        },
        "summary": {
          "en": "Major medical centers run innovation/incubation centers offering clinical sites, IRB and data resources, co-hosting PoC programs and Demo Days with accelerators.",
          "zh": "各大醫學中心設創新/育成中心,提供臨床場域、IRB 與資料資源,與加速器共辦 PoC 與 Demo Day。"
        },
        "overview": {
          "en": "Examples: TMU's biomedical accelerator and Show Chwan Health System co-host annual Demo Days with BE Health; NCKU Hospital's clinical innovation center deploys Quanta's QOCA AIM; NTU, Taipei Veterans, Chang Gung and China Medical run smart-healthcare/AI centers as key nodes for clinical validation and tech transfer.",
          "zh": "例:臺北醫學大學生醫加速器、秀傳醫療體系與比翼合辦年度 Demo Day;成大醫院臨床創新中心導入廣達 QOCA AIM;台大、北榮、長庚、中國醫等均設智慧醫療/AI 中心,作為新創臨床驗證與技轉的關鍵節點。"
        },
        "tags": [
          "hospital",
          "innovation-center",
          "clinical-validation",
          "PoC",
          "tech-transfer"
        ],
        "url": "https://cic.hosp.ncku.edu.tw/"
      },
      {
        "slug": "university-bme-institutes",
        "category": "academia",
        "title": {
          "en": "University BME & Biomedical EE/Informatics Institutes",
          "zh": "大學醫工/醫資/生醫電資研究所"
        },
        "summary": {
          "en": "NTU, NYCU, NTHU, NCKU, NCHU and others run biomedical engineering, biomedical EE/informatics and medical-informatics institutes - the source of talent and technology.",
          "zh": "台大、陽明交大、清大、成大、中興等校設醫學工程、生醫電子與資訊、醫療資訊研究所,為人才與技術源頭。"
        },
        "overview": {
          "en": "NTU's Institute of Biomedical Electronics & Bioinformatics, NYCU (with the IAPS accelerator) and NCHU's BME institute train cross-domain talent and spin off startups; ITRI biomed director Eric Chuang came from NTU's biomedical EE/informatics institute. Academic spin-offs reach industry via NBRP, TTA and hospital incubators.",
          "zh": "台大生醫電子與資訊學研究所、陽明交大(產業加速器 IAPS)、中興生醫工程研究所等培育跨域人才並衍生新創;工研院生醫所長莊曜宇即出身台大生醫電資所。學界 spin-off 經 NBRP、TTA、各醫院育成進入產業。"
        },
        "tags": [
          "academia",
          "BME",
          "bioinformatics",
          "talent",
          "spin-off"
        ],
        "url": "https://www.bme.nchu.edu.tw/"
      },
      {
        "slug": "hsinchu-biomedical-science-park",
        "category": "cluster",
        "title": {
          "en": "Hsinchu Biomedical Science Park",
          "zh": "新竹生物醫學園區(竹北生醫)"
        },
        "summary": {
          "en": "Biomedical cluster (Zhubei) under the Hsinchu Science Park Administration, ~38.1 ha, with 2024 biomedical revenue exceeding NT$209bn - a record.",
          "zh": "竹科管理局轄下的生醫聚落(竹北),面積約 38.1 公頃,2024 年生醫營收逾 2,090 億元創新高。"
        },
        "overview": {
          "en": "~154 biomedical companies in devices, drugs and diagnostics; the Hsinchu Science Park Administration also leads a \"north-central-south biomedical corridor\" linking CTSP and STSP (2025 thematic pavilion). Proximity to the semiconductor supply chain favors hardware-software MedTech integration.",
          "zh": "約 154 家生醫企業進駐,涵蓋醫材、新藥、檢測;竹科管理局並領銜串接中科、南科打造「北中南生醫廊帶」(2025 科學園區主題館)。鄰近半導體供應鏈,利於醫材軟硬整合。"
        },
        "tags": [
          "cluster",
          "hsinchu",
          "medical-device",
          "science-park",
          "corridor"
        ],
        "url": "https://www.sipa.gov.tw/"
      },
      {
        "slug": "tainan-shalun-science-city",
        "category": "cluster",
        "title": {
          "en": "Tainan Shalun Smart Green Energy Science City",
          "zh": "台南沙崙智慧綠能科學城(沙崙醫療服務及創新園區)"
        },
        "summary": {
          "en": "Southern Taiwan's first medical innovation park, combining a pediatric medical center with AI and big data, positioned as the region's precision-medicine strategy hub.",
          "zh": "南部首座醫療創新園區,結合兒童醫療中心、AI 與大數據,定位南部精準醫療策略中心。"
        },
        "overview": {
          "en": "~136 companies and ~2,057 jobs by end-2024; AMD moved in during 2025. The \"Shalun Medical Service & Innovation Park\" within the zone is Taiwan's first medical-innovation park, linking STSP and southern medical centers.",
          "zh": "截至 2024 年底進駐約 136 家企業、創造約 2,057 個就業機會;2025 年國際大廠 AMD 進駐。園區內「沙崙醫療服務及創新園區」為台灣首座醫療創新園區,串接南科與南部醫學中心。"
        },
        "tags": [
          "cluster",
          "tainan",
          "precision-medicine",
          "pediatric",
          "AI"
        ],
        "url": "https://www.fracdigi.com/blog/taiwan-health-deepening-plan-2025"
      },
      {
        "slug": "nangang-biomedical-cluster",
        "category": "cluster",
        "title": {
          "en": "Nangang Biomedical & Healthcare Cluster",
          "zh": "南港生技/醫療聚落"
        },
        "summary": {
          "en": "Northern biomed/digital-health hub centered on Nangang Software Park, the Nangang Exhibition Center, NBRP and Academia Sinica.",
          "zh": "以南港軟體園區、南港展覽館、國家生技研究園區、中研院為核心的北部生醫/數位健康樞紐。"
        },
        "overview": {
          "en": "TTA, the Taiwan Healthcare+ Expo, Bio Asia and the NBRP Demo Day are mostly held in Nangang, creating a dense cluster of expos, research, incubation and VC; it is close to Academia Sinica and many listed biotech headquarters.",
          "zh": "TTA、台灣醫療科技展、Bio Asia、NBRP Demo Day 多在南港舉辦,形成展會、研究、育成與創投高度集中的聚落;鄰近中研院與多家生技上市櫃公司總部。"
        },
        "tags": [
          "cluster",
          "nangang",
          "expo",
          "research",
          "VC"
        ],
        "url": "https://nbrp.sinica.edu.tw/"
      },
      {
        "slug": "kaohsiung-biomedical-cluster",
        "category": "cluster",
        "title": {
          "en": "Kaohsiung Biomedical & Smart-Health Cluster",
          "zh": "高雄生醫/智慧健康聚落"
        },
        "summary": {
          "en": "Southern Taiwan's second biomedical cluster, advanced via the \"Greater South\" smart-health expo and a \"Health Silicon Valley\" vision, linking the STSP Kaohsiung park and local medical centers.",
          "zh": "南部第二大生醫聚落,以「大南方」智慧健康展與「健康矽谷」願景推動,串接南科高雄園區與在地醫學中心。"
        },
        "overview": {
          "en": "Driven by the Southern Smart Biomedical Cluster program, leveraging Kaohsiung Medical University and Kaohsiung Veterans hospitals; the Kaohsiung Biotech Park approved in 2004 had its budget frozen amid concerns over Zhubei's performance (current status TBC).",
          "zh": "由南部智慧生醫產業聚落推動計畫等帶動,結合高雄醫學大學、高榮等醫學中心;2004 年核定的高雄生物科技園區因竹北成效顧慮一度遭凍結預算(現況待查)。"
        },
        "tags": [
          "cluster",
          "kaohsiung",
          "smart-health",
          "STSP",
          "medical-center"
        ],
        "url": "http://www.ssbmic.org.tw/about/plan_announce"
      },
      {
        "slug": "moea-rd-grants",
        "category": "policy",
        "title": {
          "en": "MOEA R&D Grants (SBIR / CITD / SIIR)",
          "zh": "經濟部研發補助(SBIR / CITD / SIIR)"
        },
        "summary": {
          "en": "MOEA's R&D grant series, widely used by MedTech and digital-health startups for early-stage tech development and service innovation.",
          "zh": "經濟部系列研發補助,常用於醫材與數位健康新創的早期技術開發與服務創新。"
        },
        "overview": {
          "en": "SBIR (small-business innovation R&D, SME Agency) has three phases - preliminary, development, value-added; CITD (Industrial Development Administration, manufacturing/technical-services tech development); SIIR (service-sector innovation, focused on smart/low-carbon, up to NT$1.5M individual / NT$8M collaborative). Smart-health startups often pair these with PoC and commercialization funding.",
          "zh": "SBIR(小型企業創新研發,中小及新創企業署)分先期研究、研發、加值應用三階段;CITD(產發署,製造業/技術服務業技術開發);SIIR(服務業創新,以智慧化、低碳化為主軸,個別創新上限 150 萬、合作創新上限 800 萬)。智慧醫療新創常以此搭配 PoC 與商化資金。"
        },
        "tags": [
          "grant",
          "MOEA",
          "SBIR",
          "CITD",
          "SIIR",
          "early-stage"
        ],
        "url": "https://sbir.org.tw/"
      },
      {
        "slug": "moda",
        "category": "policy",
        "title": {
          "en": "Ministry of Digital Affairs (MODA)",
          "zh": "數位發展部"
        },
        "summary": {
          "en": "Established 2022; oversees digital infrastructure, data governance and digital-industry development, indirectly underpinning cybersecurity, cloud and data interoperability for digital health.",
          "zh": "2022 年成立,負責數位基礎建設、資料治理與數位產業發展,間接支撐數位健康的資安、雲端與資料互通。"
        },
        "overview": {
          "en": "Connects with the MOHW's \"Healthy Taiwan\" AI/data-sharing and smart-hospital cloud/security requirements; the Administration for Digital Industries supports software and digital-service startups (dedicated digital-health grant lines TBC).",
          "zh": "與衛福部「健康台灣」AI/資料共享、智慧醫院的雲端與資安要求相銜接;數位產業署支持軟體與數位服務新創(對數位健康的專屬補助名目待查)。"
        },
        "tags": [
          "government",
          "MODA",
          "data-governance",
          "cybersecurity",
          "cloud"
        ],
        "url": "https://moda.gov.tw/"
      }
    ]
  },
  {
    "slug": "careers",
    "layout": "gallery",
    "icon": "work",
    "title": {
      "en": "Careers & Roles",
      "zh": "職涯與職務"
    },
    "subtitle": {
      "en": "A practical map of MedTech and digital-health roles in Taiwan (2024-2026) for career-changers, with duties, backgrounds, entry difficulty and pay where sources confirm it.",
      "zh": "為轉職者整理的台灣醫療科技與數位健康職務地圖（2024-2026），含職責、典型背景、入門難易與有來源佐證的薪資。"
    },
    "categories": [
      {
        "key": "engineering",
        "en": "Engineering",
        "zh": "工程"
      },
      {
        "key": "data-ai",
        "en": "Data & AI",
        "zh": "資料與 AI"
      },
      {
        "key": "product",
        "en": "Product",
        "zh": "產品"
      },
      {
        "key": "regulatory",
        "en": "Regulatory & QA",
        "zh": "法規與品保"
      },
      {
        "key": "clinical",
        "en": "Clinical",
        "zh": "臨床"
      },
      {
        "key": "design",
        "en": "Design",
        "zh": "設計"
      },
      {
        "key": "business",
        "en": "Business",
        "zh": "商務"
      },
      {
        "key": "security",
        "en": "Security",
        "zh": "資安"
      }
    ],
    "items": [
      {
        "slug": "frontend-engineer",
        "category": "engineering",
        "title": {
          "en": "Healthcare Software Engineer (Frontend)",
          "zh": "醫療軟體工程師（前端）"
        },
        "summary": {
          "en": "Builds the web and app interfaces used by clinicians and patients - HIS/EMR front-ends, telehealth apps, image viewers, health-management UIs.",
          "zh": "打造醫護與病患使用的網頁與 App 介面，例如 HIS/EMR 前端、遠距醫療 App、影像檢視器、健康管理介面。"
        },
        "overview": {
          "en": "Duties: same stack as general front-end (React/Vue/TypeScript), but the user is a clinician (fast workflows, low error tolerance) and the data is the medical record (strict privacy and permissions). Typical background: CS/IM degree or bootcamp plus a portfolio. Medical background not required - learned on the job. Entry: low. Pay tracks general front-end rates; medtech-specific figures not confirmed in sources.",
          "zh": "職責：技術棧與一般前端相同（React/Vue/TypeScript），差別在使用者是醫護（操作快、容錯低）、資料是病歷（隱私與權限嚴）。典型背景：資工/資管學歷或 bootcamp 加作品集。無需醫療背景，醫療知識上工後補。入門：低。薪資對齊一般前端行情，醫療業細分數字來源未確認。"
        },
        "tags": [
          "低難度",
          "JavaScript/TypeScript",
          "React/Vue",
          "REST/GraphQL",
          "無需醫療背景"
        ],
        "url": "https://www.cake.me/jobs"
      },
      {
        "slug": "backend-fullstack-engineer",
        "category": "engineering",
        "title": {
          "en": "Healthcare Software Engineer (Backend / Full-stack)",
          "zh": "醫療軟體工程師（後端／全端）"
        },
        "summary": {
          "en": "Builds server-side logic for HIS/EMR, NHI claims, cloud platforms, APIs and data integration; full-stack covers both ends.",
          "zh": "開發 HIS/EMR、健保申報、雲端平台、API 與資料串接的伺服器端邏輯；全端則前後端通吃。"
        },
        "overview": {
          "en": "Duties: the hallmark is data models and interoperability - you touch HL7/FHIR, DICOM, ICD-10 coding and NHI integration, not just CRUD. FHIR/HL7 is the most worthwhile head-start skill for career-changers. Typical background: CS/IM or engineering switch with strong SQL, back-end frameworks and cloud. Medical background not required. Entry: medium. Pay tracks general back-end/full-stack; medtech-specific figures not confirmed in sources.",
          "zh": "職責：特色在資料模型與互通標準，要碰 HL7/FHIR、DICOM、ICD-10 編碼與健保介接，而非單純 CRUD。FHIR/HL7 是非醫療背景者最值得提前自學的硬技能。典型背景：資工/資管或工程轉職，熟 SQL、後端框架與雲端。無需醫療背景。入門：中。薪資對齊一般後端/全端，醫療業細分數字來源未確認。"
        },
        "tags": [
          "中等難度",
          "Python/Java/Node/Go",
          "SQL",
          "HL7/FHIR/DICOM",
          "雲端",
          "無需醫療背景"
        ],
        "url": "https://www.104.com.tw/jobs/search/"
      },
      {
        "slug": "embedded-firmware-engineer",
        "category": "engineering",
        "title": {
          "en": "Medical Embedded / Firmware Engineer",
          "zh": "醫療嵌入式／韌體工程師"
        },
        "summary": {
          "en": "Develops firmware and embedded systems inside medical devices - monitors, wearables, imaging equipment, surgical-robot control.",
          "zh": "開發醫材裝置內部的韌體與嵌入式系統，如監測儀、穿戴裝置、影像設備、手術機器人控制。"
        },
        "overview": {
          "en": "Duties: vs. general embedded, must follow IEC 62304 (device software lifecycle), apply design controls and keep traceable verification/validation docs; cadence is slower and paperwork-heavy. Typical background: EE/electronics/CS. Medical background not required. Entry: medium. Firmware engineers sit in the high-pay tier on 104 (median around NT$1.19M), but that figure is all-industry, not medtech-specific.",
          "zh": "職責：相較一般嵌入式，必須遵循 IEC 62304（醫材軟體生命週期），做設計控制與可追溯的驗證/確效文件，節奏較慢且文件量大。典型背景：電機/電子/資工。無需醫療背景。入門：中。韌體工程師在 104 屬高薪群（年薪中位數約 119 萬），但為全產業口徑、非醫療專屬。"
        },
        "tags": [
          "中等難度",
          "C/C++",
          "RTOS",
          "IEC 62304",
          "風險管理",
          "無需醫療背景"
        ],
        "url": "https://www.bnext.com.tw/article/90804/taiwan-tech-jobs-shift-from-software-to-chip-design-and-ai"
      },
      {
        "slug": "devops-cloud-engineer",
        "category": "engineering",
        "title": {
          "en": "Healthcare DevOps / Cloud Engineer",
          "zh": "醫療 DevOps／雲端工程師"
        },
        "summary": {
          "en": "Builds and operates cloud infra and CI/CD for healthcare systems, ensuring compliance (privacy, audit trails), high availability and data security.",
          "zh": "建置與維運醫療系統的雲端基礎設施與 CI/CD，確保合規（隱私、稽核軌跡）、高可用與資料安全。"
        },
        "overview": {
          "en": "Duties: healthcare cloud is distinctive in data residency, privacy law, audit trails and high availability - cloud EMR and NHI integration require strict access control and logging. Tooling matches general DevOps (Docker/K8s/IaC/CI-CD); compliance learned on the job. Typical background: engineering/ops. Medical background not required. Entry: medium. Pay tracks general DevOps; medtech-specific figures not confirmed in sources.",
          "zh": "職責：醫療雲端的特殊性在資料落地、隱私法規、稽核軌跡與高可用，電子病歷上雲與健保介接都需嚴格的存取控制與紀錄。工具與一般 DevOps 相同（Docker/K8s/IaC/CI-CD），醫療合規邊做邊學。典型背景：工程/維運。無需醫療背景。入門：中。薪資對齊一般 DevOps，醫療業細分數字來源未確認。"
        },
        "tags": [
          "中等難度",
          "Docker/Kubernetes",
          "Terraform",
          "CI/CD",
          "雲端",
          "無需醫療背景"
        ],
        "url": "https://www.104.com.tw/jobs/search/"
      },
      {
        "slug": "data-scientist",
        "category": "data-ai",
        "title": {
          "en": "Data Scientist",
          "zh": "資料科學家"
        },
        "summary": {
          "en": "Models and extracts insight from clinical, imaging, physiological-signal and NHI data to power AI devices, risk prediction and clinical decision support.",
          "zh": "從臨床、影像、生理訊號與健保資料中建模、找洞見，支援 AI 醫材、風險預測與臨床決策支援。"
        },
        "overview": {
          "en": "Duties: needs understanding of data bias, label quality, clinical metrics (sensitivity/specificity/AUC) and privacy law. Typical background: a master's is effectively the baseline; a medical degree is a plus, not required, but communicating with clinicians is decisive. Entry: high. Pay: median annual around NT$1.11M, average around NT$1.22M (104), with healthcare AI typically beating general software.",
          "zh": "職責：需理解資料偏差、標註品質、臨床指標（敏感度/特異度/AUC）與隱私法規。典型背景：碩士幾乎是基本門檻；醫療學歷加分非必要，但與臨床端溝通是關鍵。入門：高。薪資：年薪中位數約 111 萬、平均約 122 萬（104），醫療 AI 通常高於一般軟體業。"
        },
        "tags": [
          "高難度",
          "Python",
          "機器學習",
          "統計",
          "醫療背景加分",
          "年薪約111萬"
        ],
        "url": "https://www.gvm.com.tw/article/42957"
      },
      {
        "slug": "ml-engineer-imaging",
        "category": "data-ai",
        "title": {
          "en": "ML Engineer (Medical Imaging)",
          "zh": "機器學習工程師（醫療影像）"
        },
        "summary": {
          "en": "Trains deep-learning medical-imaging AI (X-ray/CT/MRI/ultrasound/pathology) for detection, segmentation and classification, productized into devices.",
          "zh": "用深度學習訓練醫療影像 AI（X 光/CT/MRI/超音波/病理），做偵測、分割、分類並落地成產品/醫材。"
        },
        "overview": {
          "en": "Duties: needs computer vision (CNN/Transformer), PyTorch and DICOM handling; hard parts are costly annotation, close work with radiologists/pathologists, and clearing TFDA/FDA as SaMD. Typical background: CS/EE/applied-math master's plus a CV portfolio. Medical background a plus, not required. Entry: high. Pay: algorithm-engineer median around NT$1.066M (104), all-industry not medtech-specific.",
          "zh": "職責：需電腦視覺（CNN/Transformer）、PyTorch、DICOM 處理；難點在資料標註成本高、需與放射/病理科醫師密切合作、模型要走 TFDA/FDA 取證（SaMD）。典型背景：資工/電機/應數碩士加 CV 作品。醫療背景加分非必要。入門：高。薪資：演算法工程師年薪中位數約 106.6 萬（104，全產業）。"
        },
        "tags": [
          "高難度",
          "PyTorch/TensorFlow",
          "電腦視覺",
          "DICOM",
          "MLOps",
          "醫療背景加分",
          "年薪約107萬"
        ],
        "url": "https://www.cmuh.cmu.edu.tw/NewsInfo/NewsArticle?no=9401"
      },
      {
        "slug": "ml-engineer-nlp",
        "category": "data-ai",
        "title": {
          "en": "ML Engineer (Clinical NLP)",
          "zh": "機器學習工程師（醫療 NLP）"
        },
        "summary": {
          "en": "Works on clinical text, patient education and doctor-patient dialogue for NER, summarization, coding assistance and generative medical assistants.",
          "zh": "處理病歷文字、衛教與醫病對話，做命名實體辨識、摘要、編碼輔助與生成式醫療助手。"
        },
        "overview": {
          "en": "Duties: demand surged in 2024-2026 with LLMs - note summarization, ICD-coding assistance, speech-to-text and patient Q&A; hard parts are scarce Traditional-Chinese clinical corpora, dense terminology, hallucination risk and privacy. Needs NLP/LLM, RAG and fine-tuning. Typical background: CS/linguistics/data master's. Medical background a plus, not required. Entry: high. Medtech-specific pay not confirmed in sources.",
          "zh": "職責：2024-2026 因 LLM 興起需求大增，做病歷摘要、ICD 編碼輔助、語音轉文字、衛教問答；難點在繁中醫療語料稀缺、術語多、幻覺風險與隱私。需 NLP/LLM、RAG、fine-tuning。典型背景：資工/語言/資料碩士。醫療背景加分非必要。入門：高。醫療業細分薪資來源未確認。"
        },
        "tags": [
          "高難度",
          "NLP",
          "LLM/Transformer",
          "RAG",
          "fine-tuning",
          "醫療背景加分"
        ],
        "url": "https://www.cmuh.cmu.edu.tw/NewsInfo/NewsArticle?no=9401"
      },
      {
        "slug": "bioinformatics-engineer",
        "category": "data-ai",
        "title": {
          "en": "Bioinformatics Engineer",
          "zh": "生物資訊工程師"
        },
        "summary": {
          "en": "Analyzes genomics/NGS data, builds pipelines and reports, supporting precision medicine and cancer gene testing.",
          "zh": "分析基因體/次世代定序（NGS）資料，建立流程（pipeline）與報告，支援精準醫療與癌症基因檢測。"
        },
        "overview": {
          "en": "Duties: covers NGS analysis, variant interpretation and pipeline automation, sometimes with deep learning. Needs Python/R, Linux, biostatistics and molecular-biology basics. Typical background: a half-bio/half-tech role - life-scientists add coding or CS people add biology, but both knowledge sets are needed. Medical/life-science background a plus, not strictly required. Entry: high. Pay not confirmed in sources (academia and industry differ widely).",
          "zh": "職責：含 NGS 序列分析、變異判讀、流程自動化，部分結合深度學習。需 Python/R、Linux、生物統計與分子生物基礎。典型背景：半醫半技職務，有生科背景補程式或有資工背景補生物皆可，但兩邊知識都要。醫療/生科背景加分但非絕對門檻。入門：高。薪資來源未確認（學界與業界落差大）。"
        },
        "tags": [
          "高難度",
          "Python/R",
          "Linux",
          "NGS pipeline",
          "生物統計",
          "醫療背景加分"
        ],
        "url": "https://www.cake.me/jobs"
      },
      {
        "slug": "product-manager",
        "category": "product",
        "title": {
          "en": "Healthcare Product Manager",
          "zh": "醫療產品經理"
        },
        "summary": {
          "en": "Owns digital-health/device-software products from requirements, specs and roadmap to launch, bridging clinical, engineering, regulatory and market sides.",
          "zh": "負責數位健康/醫材軟體產品從需求、規格、roadmap 到上市，串接臨床、工程、法規與市場。"
        },
        "overview": {
          "en": "Duties: the user is a clinician, the buyer is a hospital/payer, and the product must clear regulation - long decision cycles, plus understanding of clinical workflow and reimbursement. Typical background: general PM, engineering or consulting; clinical background is a strong advantage but not required. Entry: medium. Pay (not medtech-specific): digital-sector PMs start around NT$33-40k/month, seniors reach NT$600k-1M/yr, expat seniors up to NT$200k/month.",
          "zh": "職責：使用者是醫護、客戶是醫院/健保、產品要過法規，決策週期長，需懂臨床流程與報銷（reimbursement）。典型背景：一般 PM、工程或顧問轉入；有臨床背景非常吃香但非必要。入門：中。薪資（非醫療專屬）：數位產業 PM 入門約 3.3-4 萬，資深年薪 60-100 萬，外商資深月薪上看 20 萬。"
        },
        "tags": [
          "中等難度",
          "需求訪談",
          "roadmap/優先級",
          "跨部門溝通",
          "醫療背景加分"
        ],
        "url": "https://www.yourator.co/articles/263"
      },
      {
        "slug": "project-manager",
        "category": "product",
        "title": {
          "en": "Healthcare Project Manager",
          "zh": "醫療專案經理"
        },
        "summary": {
          "en": "Owns delivery, timeline, budget and stakeholders for healthcare system/device projects - common in HIS rollouts and hospital deployment.",
          "zh": "負責醫療系統/醫材專案的導入、時程、預算與利害關係人管理，常見於 HIS 導入與醫院端落地。"
        },
        "overview": {
          "en": "Duties: many stakeholders (physicians, nursing, IT, procurement, regulatory), systems tied to patient safety, and long rollout cycles; often wants PMP, cross-functional coordination and clinical-workflow understanding. Typical background: general PM, engineering or consulting; hospital-rollout experience is most valuable. Medical background not required. Entry: medium. Pay scales with seniority; seniors reach NT$600k-1M/yr (not medtech-specific).",
          "zh": "職責：利害關係人多（醫師、護理、資訊室、採購、法規），系統與病安綁定，導入週期長；常要求 PMP、跨部門協調與醫療流程理解。典型背景：一般專案/工程/顧問轉入，醫院端導入經驗最值錢。無需醫療背景。入門：中。薪資依資歷，資深可達年薪 60-100 萬（非醫療專屬）。"
        },
        "tags": [
          "中等難度",
          "專案管理/PMP",
          "時程/預算控管",
          "利害關係人管理",
          "無需醫療背景"
        ],
        "url": "https://www.1111.com.tw/search/job"
      },
      {
        "slug": "regulatory-affairs",
        "category": "regulatory",
        "title": {
          "en": "Regulatory Affairs (RA) Specialist",
          "zh": "法規事務專員"
        },
        "summary": {
          "en": "Handles device/SaMD registration and licensing, liaises with TFDA, FDA and CE, and maintains regulatory technical files.",
          "zh": "負責醫材/SaMD 的查驗登記與許可證申請，對接 TFDA、FDA、CE，維護法規技術文件。"
        },
        "overview": {
          "en": "Duties: one of the roles most specific to medtech and least replaceable by general tech talent - it lives on regulatory knowledge, not coding; needs TFDA rules, QMS (ISO 13485), technical files and clinical evaluation reports. Typical background: biomed/pharmacy/biomedical-engineering/law favored, though some enter from science/engineering or document control. Medical background a plus. Entry: medium. Pay: common NT$45-70k/month; insiders say the ceiling is low (rarely clears NT$100k/month).",
          "zh": "職責：醫療業特有、最不可被一般科技人取代的職務之一，靠法規知識而非寫程式；需熟 TFDA 法規、QMS（ISO 13485）、技術文件、臨床評估報告。典型背景：生醫/藥學/醫工/法律較吃香，也有人從理工或文件管理轉入。醫療背景加分。入門：中。薪資：常見月薪約 4.5-7 萬；圈內普遍認為天花板偏低、難破 10 萬月薪。"
        },
        "tags": [
          "中等難度",
          "TFDA/FDA/CE 法規",
          "ISO 13485",
          "技術文件撰寫",
          "醫療背景加分",
          "月薪4.5-7萬"
        ],
        "url": "https://www.dcard.tw/f/job/p/239835806"
      },
      {
        "slug": "qa-qms-engineer",
        "category": "regulatory",
        "title": {
          "en": "Quality Assurance / QMS Engineer",
          "zh": "品保／品質系統工程師（QA/QMS）"
        },
        "summary": {
          "en": "Builds and maintains the device QMS (ISO 13485/GMP), running audits, CAPA, document control and supplier management.",
          "zh": "建立與維護醫材品質管理系統（ISO 13485/GMP），負責稽核、CAPA、文件控制與供應商管理。"
        },
        "overview": {
          "en": "Duties: often pairs with RA but leans toward process and systems compliance (audits, nonconformance, CAPA); needs ISO 13485, risk management (ISO 14971), and IEC 62304 for software devices. Typical background: industrial-engineering/QC/manufacturing transfer, or CS for software QA (SQA/V&V). Medical background a plus. Entry: medium. Pay: common NT$45-70k/month (similar to RA).",
          "zh": "職責：常與 RA 並肩，但偏過程與系統合規（稽核、不符合、矯正預防）；需熟 ISO 13485、風險管理（ISO 14971），軟體醫材還要懂 IEC 62304。典型背景：工業工程/品管/製造可平移，軟體品保（SQA/驗證確效）則資工背景可進入。醫療背景加分。入門：中。薪資：常見月薪約 4.5-7 萬（與 RA 相近）。"
        },
        "tags": [
          "中等難度",
          "ISO 13485",
          "ISO 14971",
          "稽核",
          "CAPA",
          "醫療背景加分",
          "月薪4.5-7萬"
        ],
        "url": "https://www.sgs.com.tw/news-media-resources-content/page?id=1899"
      },
      {
        "slug": "clinical-medical-affairs",
        "category": "clinical",
        "title": {
          "en": "Clinical / Medical Affairs Specialist",
          "zh": "臨床／醫務專員"
        },
        "summary": {
          "en": "Bridges clinical knowledge and product/sales inside device/digital-health firms - clinical input, training and medical communication.",
          "zh": "在醫材/數位健康公司內擔任臨床與產品/業務之間的橋樑，提供臨床觀點、教育訓練與醫病溝通。"
        },
        "overview": {
          "en": "Duties: spans medical-affairs specialists, clinical application specialists and clinical consultants - clinical-use training, intra-operative support and clinical judgment on complaints. Typical background: prefers a clinical background (nursing, med-tech, radiography, physiotherapy), making it a popular entry point for clinicians moving into industry. Medical background required. Entry: medium. Pay varies widely by company and local vs. multinational; specific figures not confirmed in sources.",
          "zh": "職責：涵蓋醫務專員、臨床應用工程師、臨床顧問等，負責產品臨床操作教育、術中支援、客訴臨床判斷。典型背景：偏好有臨床背景（護理、醫檢、放射、物治），是有醫療背景者轉數位/業界的熱門入口。需要醫療背景。入門：中。薪資視公司與外商與否落差大，細分數字來源未確認。"
        },
        "tags": [
          "中等難度",
          "臨床知識",
          "教育訓練/簡報",
          "產品操作",
          "需醫療背景"
        ],
        "url": "https://tw.indeed.com/Application-Specialist-jobs"
      },
      {
        "slug": "clinical-research-associate",
        "category": "clinical",
        "title": {
          "en": "Clinical Research Associate (CRA)",
          "zh": "臨床研究專員"
        },
        "summary": {
          "en": "Runs and monitors clinical trials at CROs/pharma, ensuring GCP and protocol compliance while managing trial sites and data quality.",
          "zh": "在 CRO/藥廠執行與監測臨床試驗，確保試驗依 GCP 與計畫書進行，管理試驗中心與資料品質。"
        },
        "overview": {
          "en": "Duties: often the suitcase-toting hospital-runner job; entry usually needs 1+ year of monitoring (MV) experience, with newcomers starting at local CROs or as interns. Typical background: medical-school majors (medicine, pharmacy, nursing, PT, med-tech, nutrition) or life sciences. Medical/life-science background required. Entry: medium. Pay around NT$38-60k/month; demand projected to grow 34.6% over five years.",
          "zh": "職責：常被形容為提行李箱跑醫院的工作；入門基本要 1 年以上監測（MV）經驗，無經驗者可從 Local CRO 或實習切入。典型背景：醫學院科系（醫、藥、護、物治、醫技、營養）或生命科學。需醫療/生科背景。入門：中。薪資：月薪約 3.8-6 萬；未來 5 年需求預估成長 34.6%。"
        },
        "tags": [
          "中等難度",
          "GCP",
          "試驗監測",
          "文件查核",
          "需醫療背景",
          "月薪3.8-6萬"
        ],
        "url": "https://careermaster.1111.com.tw/detail/250207"
      },
      {
        "slug": "medical-science-liaison",
        "category": "clinical",
        "title": {
          "en": "Medical Science Liaison (MSL)",
          "zh": "醫學聯絡人"
        },
        "summary": {
          "en": "A medical-affairs scientific role at pharma/device firms, doing scientific exchange with KOLs and supporting clinical and post-market information flow.",
          "zh": "藥廠/醫材公司醫學部的學術專員，與關鍵意見領袖（KOL）做科學溝通，支援臨床與上市後資訊交流。"
        },
        "overview": {
          "en": "Duties: work splits into individual tasks, meetings and visits; roles open only at new launches or backfills - scarce but high-value. Typical background: usually a master's or above; multinationals often want pharmacy/medicine/life-science backgrounds. Medical/life-science background strongly required. Entry: high. Pay reportedly high at multinationals - online claims like from around NT$160k/month or Roche around 102k circulate but are not authoritatively confirmed.",
          "zh": "職責：工作分個人任務、會議與拜訪三類；通常新產品上市或前人離職才開缺，職缺稀少但含金量高。典型背景：學歷多要碩士以上，外商常見要藥學/醫學/生科背景。高度需醫療/生科背景。入門：高。薪資：傳聞外商當地起薪偏高，有 16 萬月薪起、羅氏約 102k 等網路說法，但未經權威來源確認。"
        },
        "tags": [
          "高難度",
          "醫學/藥學知識",
          "文獻判讀",
          "科學溝通",
          "KOL 經營",
          "需醫療背景"
        ],
        "url": "https://www.pttweb.cc/bbs/Bioindustry/M.1671213183.A.01A"
      },
      {
        "slug": "ui-ux-designer",
        "category": "design",
        "title": {
          "en": "UI/UX Designer (Healthcare)",
          "zh": "UI/UX 設計師（醫療）"
        },
        "summary": {
          "en": "Designs clinician/patient interfaces and flows, optimizing usability and safety in high-stress, low-error clinical settings.",
          "zh": "設計醫護/病患介面與互動流程，在高壓、低容錯的臨床情境下追求可用性與安全。"
        },
        "overview": {
          "en": "Duties: the user is a clinician and misuse can endanger patient safety - needs usability engineering (IEC 62366), accessibility and clinical-workflow knowledge. Typical background: general UX; the medical domain is a plus, not a gate, so medical background not required. Entry: medium. Pay reference around NT$55-85k/month (with bonus/stock), which is general UI/UX, not medtech-specific.",
          "zh": "職責：使用者是醫護、誤用可能危及病安，要懂可用性工程（IEC 62366）、無障礙與臨床工作流。典型背景：一般 UX 即可轉入，醫療領域是加分而非門檻，故無需醫療背景。入門：中。薪資：行情參考約 5.5-8.5 萬（含獎金/股票），為一般 UI/UX 而非醫療專屬。"
        },
        "tags": [
          "中等難度",
          "Figma",
          "使用者研究",
          "可用性工程(IEC 62366)",
          "無需醫療背景",
          "月薪5.5-8.5萬"
        ],
        "url": "https://www.dcard.tw/f/design/p/233918775"
      },
      {
        "slug": "device-sales-marketing",
        "category": "business",
        "title": {
          "en": "Medical Device Sales / Marketing",
          "zh": "醫材業務／市場"
        },
        "summary": {
          "en": "Develops and maintains hospital, clinic and distributor channels, promoting devices/digital-health products with product education and business development.",
          "zh": "開拓並維護醫院、診所與經銷商通路，推廣醫材/數位健康產品，做產品教育與商機開發。"
        },
        "overview": {
          "en": "Duties: requires understanding the product's clinical use, conversing with clinicians, and knowing procurement/tendering and NHI reimbursement. Typical background: enter from a sales background and pick up clinical product knowledge on the job; science/nursing-to-sales moves are common. Medical background a plus, not required. Entry: low. Pay: probation around NT$31-41k/month, then around NT$37-47k plus performance bonus; pharma reps average around NT$40-56k+.",
          "zh": "職責：需懂產品臨床用途、能與醫護對話，並了解採購/招標與健保給付。典型背景：可從業務本職切入，產品臨床知識上工補；理工/護理轉業務也常見。醫療背景加分非必要。入門：低。薪資：試用期月薪約 3.1-4.1 萬、通過後約 3.7-4.7 萬加業績獎金；醫藥業務平均約 4-5.6 萬以上。"
        },
        "tags": [
          "低難度",
          "銷售/開發",
          "通路/客戶經營",
          "招標/健保給付",
          "醫療背景加分",
          "月薪3.7-4.7萬+獎金"
        ],
        "url": "https://www.jobsalary.com.tw/salarysummary.aspx?codeNo=120211"
      },
      {
        "slug": "security-engineer",
        "category": "security",
        "title": {
          "en": "Healthcare / Medical-Device Security Engineer",
          "zh": "醫療資安工程師"
        },
        "summary": {
          "en": "Secures hospital systems and connected devices - pre-market security design, SBOM, vulnerability reporting and post-market security maintenance.",
          "zh": "保護醫院系統與連網醫材的安全，涵蓋上市前資安設計、SBOM、漏洞通報與上市後資安維運。"
        },
        "overview": {
          "en": "Duties: demand jumped in 2024-2026 as FDA/TFDA device-security expectations rose - the FDA June-2025 guidance adds a cyber-devices chapter requiring SBOM, post-market reporting and maintenance plans; vs. general security, it adds device-lifecycle compliance and patient-safety consequences. Typical background: CS/security; medical knowledge learned later, so medical background not required. Entry: high. Pay: security-analyst median around NT$1.048M (104), all-industry not medtech-specific.",
          "zh": "職責：2024-2026 因 FDA/TFDA 醫材資安要求升級而需求大增，FDA 2025/6 版指引新增資安裝置專章，要求 SBOM、上市後通報與維護計畫；相較一般資安多了裝置全生命週期合規與病安後果。典型背景：資工/資安，醫療知識可後補，無需醫療背景。入門：高。薪資：資安分析師年薪中位數約 104.8 萬（104，全產業）。"
        },
        "tags": [
          "高難度",
          "資安基礎",
          "威脅建模",
          "SBOM/漏洞管理",
          "醫材資安法規",
          "無需醫療背景",
          "年薪約105萬"
        ],
        "url": "https://www.sgs.com.tw/news-media-resources-content/page?id=1899"
      }
    ]
  },
  {
    "slug": "expos",
    "layout": "gallery",
    "icon": "co_present",
    "title": {
      "en": "MedTech Expos & Forums",
      "zh": "醫療科技展會與論壇"
    },
    "subtitle": {
      "en": "A year-round Taiwan ecosystem of medical x technology expos and forums, from northern professional shows to the fast-rising south, with 2025-2026 dates, venues and scale.",
      "zh": "聚焦台灣的醫療 x 科技展會與論壇生態系,從北部成熟專業展到快速崛起的南臺灣,涵蓋 2025-2026 場次的時間、地點與規模。"
    },
    "categories": [
      {
        "key": "general",
        "en": "General Medical",
        "zh": "綜合醫療"
      },
      {
        "key": "digital",
        "en": "Digital Health / AI",
        "zh": "數位健康 / AI"
      },
      {
        "key": "biotech",
        "en": "Biotech",
        "zh": "生技"
      },
      {
        "key": "eldercare",
        "en": "Eldercare / Assistive",
        "zh": "長照 / 輔具"
      },
      {
        "key": "forum",
        "en": "Forums",
        "zh": "論壇"
      }
    ],
    "items": [
      {
        "slug": "healthcare-plus-expo-taiwan",
        "category": "general",
        "title": {
          "en": "Healthcare+ Expo Taiwan",
          "zh": "台灣醫療科技展"
        },
        "summary": {
          "en": "Dec (4th-7th 2025 / 3rd-6th 2026) - Nangang, Taipei",
          "zh": "12 月(2025 年 12/4-12/7、2026 年 12/3-12/6)- 台北南港"
        },
        "overview": {
          "en": "Organized by IBMI (Institute for Biotechnology and Medicine Industry) and the SIG/biomedical policy center, this is Taiwan's largest medical-tech expo and the world's first hospital-centric international medical show, ranked Taiwan's sixth-largest international exhibition. The 2025 (9th) edition scaled up to ~2,100 booths, 650+ institutions, 45 overseas delegations, 31 international associations and 9 hospital groups, spotlighting AI-into-medicine and medical-AI robotics; on-site deals included a 200M euro Czech medical-equipment MOU and SNQ becoming ICHOM's first Asia partner. The 2026 (10th) edition is projected at 650 exhibitors, 2,300 booths, ~216,000 visitors and 2,500 international buyers across smart healthcare, precision medicine, digital health, biopharma and smart hospitals, plus an animal-health zone and the M-novator startup platform. Held at Taipei Nangang Exhibition Center Hall 1, conventionally early December (Thursday-Sunday).",
          "zh": "由生醫產業創新推動聯盟(IBMI)與生策會/生策中心主辦,是全台規模最大、全球首創以醫院為核心的國際醫療科技展,被列為台灣第六大國際會展。2025 第九屆擴大至約 2,100 展位、650+ 參展機構,並有 45 個海外參訪團、31 個國際產業協會、9 個醫院組織,聚焦 AI 落地醫療與醫療 AI 機器人;展期間簽署捷克 2 億歐元醫材採購 MOU、SNQ 成為 ICHOM 亞洲首個夥伴。2026 第十屆預計 650 展商、2,300 展位、約 21.6 萬參觀人次、2,500 名國際買主,聚焦智慧醫療、精準醫學、數位健康、生技製藥與智慧醫院,並設動物醫療專區與 M-novator 新創平台。地點為台北南港展覽館一館,慣例為每年 12 月初的週四至週日。"
        },
        "tags": [
          "生策會 / IBMI",
          "醫院為核心",
          "智慧醫療",
          "精準醫學",
          "12月",
          "南港"
        ],
        "url": "https://expo.taiwan-healthcare.org/"
      },
      {
        "slug": "medical-taiwan",
        "category": "general",
        "title": {
          "en": "Medical Taiwan - International Medical & Healthcare Expo",
          "zh": "台灣國際醫療暨健康照護展 (Medical Taiwan)"
        },
        "summary": {
          "en": "Jun (5th-7th 2025 / 25th-27th 2026) - TWTC / Nangang, Taipei",
          "zh": "6 月(2025 年 6/5-6/7、2026 年 6/25-6/27)- 台北世貿 / 南港"
        },
        "overview": {
          "en": "TAITRA's Asia-Pacific benchmark medical fair focused on the greater-health industry and built around B2B international buyer matchmaking. The 2025 (19th) edition ran under \"Innovating Wellness\" with ~300 companies, 500+ booths and 7,600+ visitors across all-age care, smart healthcare, the medical-supplies hub and innovation/startups, debuting a pet-medical-device zone. The 2026 (20th) edition organizes around three pillars (Innovative Care, Smart Healthcare, Medical Supplies Hub) and nine zones, with ~330 exhibitors, 530 booths, ~1,000 overseas buyers and ~10,000 professional visitors; concurrent forums include RX FOR FUTURE, the International Trend Forum on Hospital at Home, the Domestic Market Forum and the Long-term Care Forum. The 2025 edition was at Nangang Hall 2; 2026 moves back to Taipei World Trade Center Hall 1 (venue varies by year).",
          "zh": "外貿協會(TAITRA)主辦的亞太指標性醫療展,聚焦大健康產業,以 B2B 國際買主洽談為核心,被定位為亞太採購樞紐。2025 第 19 屆以「Innovating Wellness」為主軸,集結約 300 家廠商、500+ 展位、逾 7,600 名參觀者,涵蓋全齡照護、智慧醫療、醫材廊道與創新/新創四大領域,並新增寵物醫材展區。2026 第 20 屆主打三大主軸(創新長照、智慧醫療、醫材廊道)與九大展區,預估 330 廠商、530 展位、約 1,000 海外買主與 10,000 專業觀眾;同期辦 RX FOR FUTURE、國際趨勢論壇(在宅醫療)、國內市場論壇與長照論壇。2025 於台北南港展覽館二館,2026 移回台北世貿一館(地點屆別有異動)。"
        },
        "tags": [
          "TAITRA / 外貿協會",
          "大健康",
          "B2B買主",
          "在宅醫療",
          "6月",
          "世貿 / 南港"
        ],
        "url": "https://www.medicaltaiwan.com.tw/"
      },
      {
        "slug": "greater-south-ai-smart-health-expo",
        "category": "digital",
        "title": {
          "en": "Greater South AI Smart Health Expo",
          "zh": "大南方 AI 智慧健康展"
        },
        "summary": {
          "en": "Jun (12th-13th 2026) - ICC Tainan",
          "zh": "6 月(2026 年 6/12-6/13)- 大臺南會展中心(台南)"
        },
        "overview": {
          "en": "Co-organized by the National Science and Technology Council (NSTC), the Ministry of Digital Affairs, the Ministry of Health and Welfare and the Tainan City Government, with execution by III's AI Research Institute and the Greater South New Silicon Valley office. This Tainan-based AI smart-health expo aims to extend southern Taiwan from a semiconductor heartland into a \"health Silicon Valley\" cluster. The 2026 edition centers on industry matchmaking and real-world deployment, gathering 100+ government-industry-academia-research bodies and 120+ AI smart-health applications across five themed interactive zones (home care, sports tech, elder care & smart medicine, AI-companion/smart-medicine integration, digital-health marketplace), with highlights including AI de-identification privacy tech, personalized rehab training and SMART-on-FHIR standards. It serves the Healthy Taiwan, AI Island and Greater South New Silicon Valley (2025-2029, NT$36B+) policies. Held at ICC Tainan in Guiren; the show is in Tainan, not Kaohsiung, but positioned as a southern/greater-south regional cluster. A new event; annual recurrence pending official confirmation.",
          "zh": "由國科會(NSTC)、數位發展部、衛生福利部與臺南市政府跨部會合辦,執行單位為資策會人工智慧研究院與大南方新矽谷推動辦公室。此聚焦南臺灣、以台南為主場的 AI 智慧健康展,要把南部從半導體腹地延伸為「健康矽谷」聚落。2026 場次以產業媒合與應用落地為核心,集結 100+ 家產官學研單位、展出逾 120 項 AI 智慧健康應用,規劃五大主題互動區(居家照護、運動科技、高齡照護與智慧醫療、AI 陪伴與智慧醫療整合、數位健康服務),亮點含 AI 去識別化隱私技術、個人化復能訓練、SMART on FHIR 國際標準。呼應「健康臺灣」「人工智慧之島」與「大南方新矽谷推動方案」(2025-2029 投入逾 360 億元)。地點為大臺南會展中心(ICC Tainan,歸仁區);主場在台南而非高雄。為新興展會,年度場次待官方續辦確認。"
        },
        "tags": [
          "國科會 NSTC",
          "資策會 AI 研究院",
          "健康矽谷",
          "台南",
          "6月"
        ],
        "url": "https://greatersouth.ai-expo.org.tw/"
      },
      {
        "slug": "bio-asia-taiwan",
        "category": "biotech",
        "title": {
          "en": "BIO Asia-Taiwan",
          "zh": "BIO Asia-Taiwan 亞洲生技大會"
        },
        "summary": {
          "en": "Jul (23rd-27th 2025 / 15th-19th 2026) - Nangang, Taipei",
          "zh": "7 月(2025 年 7/23-7/27、2026 年 7/15-7/19)- 台北南港"
        },
        "overview": {
          "en": "Organized by the Taiwan Bio Industry Organization in cooperation with the US BIO and co-run by Chan Chao International, this is Asia's flagship biotech convention combining a conference, international exhibition, one-on-one partnering and an investment summit. The 2025 theme \"Next Wave of Life\" set records: 19 national delegations, 850 exhibitors, 2,200 booths across 14 themed zones, ~140,000 visitors, 8,800 partnering meetings and ~600 international delegates from 50 countries, with Innovation, Investment Summit and Regional Collaboration forums plus two Demo Days. Zones span pharma/devices, CDMO, CRO, biosimilars, cell & regenerative therapy, precision medicine & genetic testing, precision health & smart medicine, and national pavilions. The 2026 theme \"Asian Innovation Leading the World\" emphasizes accelerated commercialization and AI integration. Held at Taipei Nangang Exhibition Center Hall 1 (4F); conventionally July.",
          "zh": "由臺灣生物產業協會主辦,與美國生技協會(BIO)合作,展覽執行由展昭國際協辦,是亞洲指標性生技大會,結合年會論壇、國際展覽、一對一商機媒合與投資高峰,被視為亞太生技合作樞紐。2025 主題「Next Wave of Life 生技新浪潮」規模創歷年之最:19 國代表團、850 參展商、2,200 攤位、橫跨 14 大主題展區、近 14 萬參觀人次、8,800 場媒合會議,50 國約 600 名國際代表;設創新、投資高峰、區域合作三大論壇與兩場 Demo Day。展區涵蓋醫藥醫材、CDMO、CRO、生物相似藥、細胞治療與再生醫療、精準醫療及基因檢測、精準健康與智慧醫療、國家館等。2026 主題「亞洲創新,引領全球」,聚焦加速商化與 AI 整合。地點為台北南港展覽館一館 4 樓,慣例為每年 7 月。"
        },
        "tags": [
          "臺灣生物產業協會",
          "BIO",
          "CDMO",
          "細胞治療",
          "精準醫療",
          "7月",
          "南港"
        ],
        "url": "https://bioasiataiwan.com/"
      },
      {
        "slug": "atlife",
        "category": "eldercare",
        "title": {
          "en": "ATLife - Assistive Technology & Long-term Care Expo",
          "zh": "臺灣輔具暨長期照護大展 (ATLife)"
        },
        "summary": {
          "en": "May (14th-17th 2026) - Nangang, Taipei",
          "zh": "5 月(2026 年 5/14-5/17)- 台北南港"
        },
        "overview": {
          "en": "Organized by the Taiwan Assistive Technology & Long-term Care Foundation and the industry association, run by Chan Chao International, ATLife is Taiwan's largest and most specialized dual-theme expo for assistive devices and long-term care, ranked among the world's top five care-technology shows. The 2026 (10th) edition features 220 exhibitors, 560 booths and 3,000+ assistive products with 120,000+ visitors expected; ATLife has drawn over a million cumulative visitors. It covers mobility aids, rehab equipment, home care, smart-LTC tech and barrier-free/elder-living products, with a Rental Assistive-Device Excellence Award; the Ministry of Health and Welfare and other public bodies are regular exhibitors. Held at Taipei Nangang Exhibition Center Hall 1 (1F); conventionally May (Thursday-Sunday).",
          "zh": "由財團法人臺灣輔具暨長期照護基金會與臺灣輔具暨長期照護產業發展協會主辦、展昭國際企業承辦,是台灣最專業、規模最大的輔具與長照雙主題產業展,被列為全球前五大科技照護展。2026 第十屆達 220 家參展商、560 個攤位,展出 3,000 件以上輔具,預計參觀人次突破 12 萬;ATLife 已累積上百萬人次。內容涵蓋行動輔具、復健器材、居家照護、智慧長照科技、無障礙與樂齡生活產品,並設「臺灣租賃輔具精品獎」;衛福部等公部門固定參展。地點為台北南港展覽館一館 1 樓,慣例為每年 5 月的週四至週日。"
        },
        "tags": [
          "輔具",
          "長照",
          "復健",
          "展昭",
          "全球前五大",
          "5月",
          "南港"
        ],
        "url": "https://www.chanchao.com.tw/ATLife/"
      },
      {
        "slug": "cares-expo-taipei",
        "category": "eldercare",
        "title": {
          "en": "Cares Expo Taipei",
          "zh": "Cares Expo Taipei 台北國際照顧博覽會"
        },
        "summary": {
          "en": "Autumn (Sep 25th-27th 2025 / Oct 1st-3rd 2026) - Nangang, Taipei",
          "zh": "秋季(2025 年 9/25-9/27、2026 年 10/1-10/3)- 台北南港"
        },
        "overview": {
          "en": "Organized by Ankecare, an innovation-care media group, this professional care-industry expo connects government-industry-academia-research around next-generation eldercare, rehabilitation and assistive technology. Billed as Taiwan's largest care expo with a four-way government-industry-academia-research linkage, it targets LTC institutions, home/community care, care-workforce development, smart care and assistive-device procurement, typically paired with forums, workshops and care-innovation awards for caregivers, LTC operators and social/medical professionals. The 2025 (6th) edition ran 9/25-9/27 and the 2026 edition runs 10/1-10/3 at Taipei Nangang Exhibition Center Hall 1 (4F); conventionally autumn (Sep-Oct). Exact scale figures pending official release (TBC).",
          "zh": "由創新照顧媒體安可人生(Ankecare)主辦的照顧產業專業展,串聯產官學研,聚焦高齡照護、復健與輔助科技的下世代解決方案。標榜「全台最大照顧展」「產官學研年度四大串聯」,鎖定長照機構、居家與社區照顧、照顧服務人力、智慧照護與輔具採購;展期常結合論壇、工作坊與照顧創新獎,面向照服員、長照機構經營者、社福與醫護專業人士。2025 第六屆為 9/25-9/27,2026 為 10/1-10/3,地點為台北南港展覽館一館 4 樓,慣例為每年秋季(9-10 月)。確切規模數字待官方公布(待查)。"
        },
        "tags": [
          "創新照顧",
          "長照機構",
          "智慧照護",
          "Ankecare",
          "秋季",
          "南港"
        ],
        "url": "https://www.ankecare.com/"
      },
      {
        "slug": "healthy-ageing-industry-expo",
        "category": "eldercare",
        "title": {
          "en": "Healthy Ageing Industry Expo (Re-youth)",
          "zh": "高齡健康產業博覽會 (再青春)"
        },
        "summary": {
          "en": "Aug (8th-10th 2025) - TWTC Hall 1, Taipei",
          "zh": "8 月(2025 年 8/8-8/10)- 台北世貿一館"
        },
        "overview": {
          "en": "Built by the SIG/biomedical policy center and co-organized by the Industrial Development Administration (MOEA), the Administration for Digital Industries (MODA) and the National Health Research Institutes, this consumer-facing healthy-ageing expo is themed \"Re-youth\" and addresses the longevity economy of Taiwan's 2025 super-aged society. The 2025 (2nd) edition exceeded 350 institutions/companies and 1,200 booths, organized around three elder-living needs (health care, happy living, smart services) under the slogan \"Re-youth: live long without long-term care.\" It blends smart care, preventive medicine and elder lifestyle with local-government pavilions (e.g., Kaohsiung, New Taipei), skewing toward the general public and complementing the professional year-end Healthcare+ Expo. The first edition was August 2024; held at Taipei World Trade Center Hall 1, conventionally August.",
          "zh": "由生策會、生策中心打造,經濟部產業發展署、數發部數位產業署、國家衛生研究院共同主辦,主打「再青春」的高齡健康消費型大展,面向 2025 超高齡社會的長壽新經濟。2025 第二屆規模突破 350 家機構與企業、1,200 個展位,聚焦「健康照護」「快樂生活」「智慧服務」三大高齡生活需求,以「再青春.健康長壽不長照」為號召;結合智慧照護、預防醫學、樂齡生活與地方政府主題館(如高雄館、新北館),屬偏向一般民眾的健康派對型展會,與年底專業向的台灣醫療科技展互補。首屆為 2024 年 8 月,地點為台北世貿中心一館,慣例為每年 8 月。"
        },
        "tags": [
          "生策會",
          "高齡",
          "超高齡社會",
          "再青春",
          "預防醫學",
          "8月",
          "世貿"
        ],
        "url": "https://www.taiwan-healthcare.org/hats/"
      },
      {
        "slug": "ageless-expo",
        "category": "eldercare",
        "title": {
          "en": "Ageless Expo",
          "zh": "樂。無齡博覽會"
        },
        "summary": {
          "en": "Nov 28th-30th 2025 / Oct 16th-18th 2026 - Kaohsiung Exhibition Center",
          "zh": "2025 年 11/28-11/30、2026 年 10/16-10/18 - 高雄展覽館"
        },
        "overview": {
          "en": "Organized by the Interplan Group, Ageless Expo is southern Taiwan's (Kaohsiung) flagship ageless-living expo, centered on cross-generational inclusion and smart healthy living. It covers home care, smart health tech, AI monitoring and preventive medicine, blending performances, workshops and interactive experiences for families and seniors. The 2025 edition drew ~45 exhibitors, 165 booths and 22,330 visitors with ~97% exhibitor satisfaction, one of Kaohsiung's few consumer-facing ageless/health-care expos. Held at the Kaohsiung Exhibition Center; the 2025 edition ran 11/28-11/30 and 2026 moves to 10/16-10/18 (month adjusts by year).",
          "zh": "由安益集團(Interplan Group)主辦,是南臺灣(高雄)指標性的樂齡/無齡生活展,主打跨齡共融與智慧健康生活。涵蓋居家照護、智慧健康科技、AI 監測與預防醫學,結合表演、工作坊與互動體驗,定位較貼近一般家庭與長者。2025 場次規模約 45 家參展商、165 個攤位、22,330 參觀人次,參展商滿意度約 97%;為高雄少數聚焦樂齡與健康照護的消費型大展。地點為高雄展覽館;2025 為 11/28-11/30,2026 改為 10/16-10/18(月份逐年有調整)。"
        },
        "tags": [
          "安益集團",
          "高雄",
          "樂齡",
          "無齡",
          "智慧健康",
          "南臺灣"
        ],
        "url": "https://www.eldercareasia.com/zh-tw/index.html"
      },
      {
        "slug": "kaohsiung-smart-city-expo",
        "category": "digital",
        "title": {
          "en": "Kaohsiung Smart City Expo (Smart Healthcare zone)",
          "zh": "高雄智慧城市展(智慧醫療專區)"
        },
        "summary": {
          "en": "Mar (20th-22nd 2026) - Kaohsiung Exhibition Center",
          "zh": "3 月(2026 年 3/20-3/22)- 高雄展覽館"
        },
        "overview": {
          "en": "Organized by the Kaohsiung City Government, the Taiwan Smart City Industry Alliance and the Taipei Computer Association (TCA), this is southern Taiwan's largest IoT/smart-city solutions expo, featuring a smart-healthcare zone showcasing AIoT in medical care. The expo spans AIoT, smart healthcare, smart manufacturing, smart transport and net-zero; its smart-healthcare zone focuses on telecare, smart hospitals and AIoT health monitoring, serving as a meeting point for southern medtech vendors and local providers. Not a pure medical show, but a key digital-health platform for the south alongside the Greater South AI Smart Health Expo and Ageless Expo. Held at the Kaohsiung Exhibition Center; running annually since 2022, conventionally March.",
          "zh": "由高雄市政府、台灣智慧城市產業聯盟與台北市電腦公會(TCA)主辦,是南臺灣最大的物聯網/智慧城市解決方案展,內含智慧醫療專區,展示 AIoT 於醫療照護的應用。展會橫跨 AIoT、智慧醫療、智慧製造、智慧交通與淨零轉型;智慧醫療專區聚焦遠距照護、智慧醫院與 AIoT 健康監測,是南部醫療科技廠商與地方醫療機構交流的場域。並非純醫療展,但為南臺灣數位健康的重要平台,與大南方 AI 智慧健康展、樂無齡共同構成南部健康科技聚落。地點為高雄展覽館;自 2022 起每年舉辦,慣例為每年 3 月。"
        },
        "tags": [
          "智慧城市",
          "AIoT",
          "智慧醫療",
          "高雄",
          "遠距照護",
          "3月"
        ],
        "url": "https://smartcity.org.tw/"
      },
      {
        "slug": "rx-for-future",
        "category": "forum",
        "title": {
          "en": "RX FOR FUTURE Focus Forum",
          "zh": "RX FOR FUTURE 療解未來(焦點論壇)"
        },
        "summary": {
          "en": "Jun 2026 (Medical Taiwan concurrent) - TWTC Hall 1 main stage, Taipei",
          "zh": "2026 年 6 月(Medical Taiwan 同期)- 台北世貿一館主舞台"
        },
        "overview": {
          "en": "A flagship focus forum co-hosted by Business Weekly and TAITRA on the Medical Taiwan main stage, looking ahead at the future of healthcare. The 2026 program features two sessions, a Global Insight session on worldwide Hospital-at-Home and system transformation, and \"Taiwan Smart Healthcare: from tech support to sustainable care,\" with speakers from Australia, Japan, the US and Israel plus Taiwan's Hospital-at-Home Society, the MOHW, universities and hospitals, centered on HaH, smart-healthcare deployment and sustainable care. Held on the Taipei World Trade Center Hall 1 main stage within the Medical Taiwan show in June 2026; exact dates per the official site (some sessions TBC).",
          "zh": "由商業周刊集團(Business Weekly)與外貿協會(TAITRA)合辦、依附於 Medical Taiwan 的旗艦焦點論壇,前瞻醫療產業未來。2026 規劃兩大場次:Global Insight「全球在宅醫療與制度轉型新趨勢」與「台灣智慧醫療:從科技支撐到永續照護的新藍圖」;邀集澳洲、日本、美國、以色列等國際專家,以及台灣在宅醫療學會、衛福部、大學與醫院代表。主題環繞在宅醫療(Hospital at Home)、智慧醫療落地與永續照護,是 Medical Taiwan 期間最具份量的趨勢論壇。地點為台北世貿一館主舞台(Medical Taiwan 展場內),2026 年 6 月舉行,確切日期以官網/商周公告為準(部分場次待查)。"
        },
        "tags": [
          "論壇",
          "商業周刊",
          "TAITRA",
          "在宅醫療",
          "永續照護",
          "Medical Taiwan 同期"
        ],
        "url": "https://bw.businessweekly.com.tw/event/2026/MedicalTaiwanForum/"
      },
      {
        "slug": "healthy-taiwan-summit",
        "category": "forum",
        "title": {
          "en": "Healthy Taiwan Summit",
          "zh": "健康台灣高峰論壇"
        },
        "summary": {
          "en": "Dec (4th 2025) - Nangang, Taipei (within Healthcare+ Expo)",
          "zh": "12 月(2025 年 12/4)- 台北南港(台灣醫療科技展期間)"
        },
        "overview": {
          "en": "A policy summit co-organized by ITRI (Industrial Technology Research Institute) and the ROC General Chamber of Commerce, held during the Healthcare+ Expo to forge a \"Smart Healthcare National Team.\" At the 2025 session, ITRI and the Chamber signed an MOU to combine Taiwan's ICT and medical-service strengths into an internationally competitive team, convening cross-sector leaders on policy, industry strategy and AI/biomedical big data to turn \"Healthy Taiwan\" from slogan into national strategy. Held on 12/4 2025 at Taipei Nangang Exhibition Center (within the Healthcare+ Expo venue, Room 506); an annual forum tightly tied to the year-end expo.",
          "zh": "由工業技術研究院(ITRI / 工研院)與中華民國工商協進會共同主辦,在台灣醫療科技展期間舉辦、要組「智慧醫療國家隊」的政策型高峰論壇。2025 場次工研院與工商協進會簽署 MOU,宣示串接台灣 ICT 與醫療服務雙重優勢、組智慧醫療國家隊進軍國際;聚集產官學研醫代表,從政策布局、產業策略到 AI 與生醫大數據應用,勾勒「健康台灣」從口號走向國家戰略的具體路徑。2025 年 12/4 於台北南港展覽館(台灣醫療科技展會場內,Room 506)舉行,為依附年底醫療科技展的年度論壇。"
        },
        "tags": [
          "論壇",
          "工研院 ITRI",
          "工商協進會",
          "智慧醫療國家隊",
          "ICT",
          "醫療科技展同期"
        ],
        "url": "https://expo.taiwan-healthcare.org/zh/event.php"
      },
      {
        "slug": "smart-healthcare-forum",
        "category": "forum",
        "title": {
          "en": "Smart Healthcare Forum (CIO Taiwan)",
          "zh": "智慧醫療論壇 (CIO Taiwan)"
        },
        "summary": {
          "en": "Apr (10th 2026) - Sheraton Grand Taipei",
          "zh": "4 月(2026 年 4/10)- 台北喜來登大飯店"
        },
        "overview": {
          "en": "An annual smart-healthcare forum organized by CIO Taiwan (iThome system) for hospital IT/management leaders; the 2026 theme centers on hospitals adopting AI agents. The 2026 session explores how hospitals can bring autonomous, collaborative agentic AI into clinical, process and operational domains, with speakers from the MOHW, ITRI, Chang Gung Memorial Hospital and NTUH, echoing the 2025-2026 trend of agentic AI as the \"new hospital operating system.\" A smaller, professional/paid forum with cutting-edge content. Held on 4/10 2026 at the Sheraton Grand Taipei.",
          "zh": "由 CIO Taiwan(網際先鋒/iThome 體系)主辦、面向醫院資訊與管理高層的年度智慧醫療論壇,2026 主題聚焦醫院導入 AI 代理。2026 場次探討醫院如何將具自主決策與協作能力的 AI 代理(agentic AI)導入臨床、流程與營運場域,講者含衛福部、工研院、長庚醫院與臺大醫院代表;呼應 2025-2026 代理型 AI 成為「醫院新作業系統」的趨勢。屬專業閉門/付費型論壇,規模較小但議題前沿。2026 年 4/10 於台北喜來登大飯店(Sheraton Grand Taipei)舉行。"
        },
        "tags": [
          "論壇",
          "CIO Taiwan",
          "代理型AI",
          "醫院資訊",
          "智慧醫院",
          "4月",
          "台北"
        ],
        "url": "https://www.cio.com.tw/events/hc2026/"
      },
      {
        "slug": "btc-bio-taiwan-committee",
        "category": "forum",
        "title": {
          "en": "BTC - Bio Taiwan Committee Conference",
          "zh": "BTC 生技產業策略諮議委員會議"
        },
        "summary": {
          "en": "Aug (25th-27th 2025) - Hua Nan Bank Int'l Conference Center, Taipei",
          "zh": "8 月(2025 年 8/25-8/27)- 華南銀行國際會議中心(台北)"
        },
        "overview": {
          "en": "Organized by the Executive Yuan (convened by NSTC and related ministries, chaired by the Premier), BTC is Taiwan's Executive-Yuan-level top advisory conference on biotech industry policy, where domestic and international committee members issue strategic recommendations for the biomedical sector. The 2025 (19th) theme \"Taiwan's Sustainability, New Biomedical Momentum\" focused on advantage continuity, applied innovation, and sustainability/adaptation; committee members issued 18 concrete policy recommendations across foresight applications, ecosystem building and global positioning. The conference announced a health-data services company and a NT$5B biomedical fund, targeting AI enablement and precision health. A closed-door policy meeting rather than an expo, it is a key bellwether for Taiwan's biomedical resource allocation. Held 8/25-8/27 2025 at the Hua Nan Bank International Conference Center; conventionally late August.",
          "zh": "由行政院主辦(國科會/相關部會籌辦,行政院長主持),是行政院層級的最高生技產業政策諮議會議,匯聚國內外委員為台灣生醫產業提出政策建言。2025 第 19 屆主軸「臺灣永續力 生醫新動能」,聚焦「優勢延續」「應用創新」「永續與調適」三大議題;BTC 委員針對科技前瞻應用、生態系建構與國際佈局,提出 3 項應用主軸、3 項推動力道共 18 項具體政策建言。會中宣示成立健康數據服務公司、催生 50 億元生醫基金,並鎖定 AI 賦能、精準健康等議題。屬閉門政策會議而非展覽,卻是牽動台灣生醫資源配置的關鍵風向標。2025 年 8/25-8/27 於華南銀行國際會議中心(台北)舉行,慣例為每年 8 月底。"
        },
        "tags": [
          "論壇",
          "政策",
          "行政院",
          "BTC",
          "國科會",
          "精準健康",
          "8月"
        ],
        "url": "https://investtaiwan.nat.gov.tw/"
      }
    ]
  },
  {
    "slug": "market",
    "layout": "dashboard",
    "icon": "trending_up",
    "title": {
      "en": "Market & Data",
      "zh": "市場規模與關鍵數據"
    },
    "subtitle": {
      "en": "Taiwan's healthtech sits at the crossroads of rapid aging, record public investment, and the operational arrival of AI, advancing along three legs: export manufacturing, the NHI system, and AI software.",
      "zh": "台灣醫療科技正處於高齡化、政策投入與 AI 落地三股力量的交會點,以製造出口、健保體系、AI 軟體三足並進。"
    },
    "stats": [
      {
        "label": {
          "en": "Share of population aged 65+ (super-aged threshold)",
          "zh": "65 歲以上人口占比(超高齡社會門檻)"
        },
        "value": "20.06",
        "unit": {
          "en": "%",
          "zh": "%"
        }
      },
      {
        "label": {
          "en": "2025 NHI global budget (highest-ever annual growth)",
          "zh": "2025 年健保總額(歷年最高成長)"
        },
        "value": "9,286",
        "unit": {
          "en": "NT$ bn",
          "zh": "億元"
        },
        "delta": 5.5
      },
      {
        "label": {
          "en": "Healthy Taiwan Deep-Cultivation Plan budget (2025-2029)",
          "zh": "健康台灣深耕計畫總經費(2025-2029)"
        },
        "value": "489",
        "unit": {
          "en": "NT$ bn",
          "zh": "億元"
        }
      },
      {
        "label": {
          "en": "TFDA-approved AI/ML medical devices (cumulative, end-2023)",
          "zh": "TFDA 核准 AI/ML 醫療器材(累計至 2023 年底)"
        },
        "value": "104",
        "unit": {
          "en": "devices",
          "zh": "項"
        }
      },
      {
        "label": {
          "en": "2024 medical device export value",
          "zh": "2024 年醫療器材出口值"
        },
        "value": "25.4",
        "unit": {
          "en": "US$ bn",
          "zh": "億美元"
        },
        "delta": 1.5
      },
      {
        "label": {
          "en": "Listed/OTC biotech & pharma companies",
          "zh": "生技醫藥上市櫃掛牌家數"
        },
        "value": "150",
        "unit": {
          "en": "firms",
          "zh": "家"
        }
      },
      {
        "label": {
          "en": "2024 healthtech early-stage investment",
          "zh": "2024 年健康醫療早期投資"
        },
        "value": "7.47",
        "unit": {
          "en": "US$ bn",
          "zh": "億美元"
        },
        "delta": 1
      },
      {
        "label": {
          "en": "Health expenditure as share of GDP",
          "zh": "醫療照護支出占 GDP"
        },
        "value": "7",
        "unit": {
          "en": "%",
          "zh": "%"
        }
      }
    ],
    "bars": {
      "title": {
        "en": "Health expenditure as share of GDP: Taiwan vs. peers",
        "zh": "醫療支出占 GDP 國際對照:台灣 vs 主要國家"
      },
      "series": [
        {
          "label": {
            "en": "United States",
            "zh": "美國"
          },
          "value": 16.5
        },
        {
          "label": {
            "en": "Germany",
            "zh": "德國"
          },
          "value": 12.7
        },
        {
          "label": {
            "en": "France",
            "zh": "法國"
          },
          "value": 12.1
        },
        {
          "label": {
            "en": "United Kingdom",
            "zh": "英國"
          },
          "value": 11.3
        },
        {
          "label": {
            "en": "Japan",
            "zh": "日本"
          },
          "value": 11.1
        },
        {
          "label": {
            "en": "Korea",
            "zh": "韓國"
          },
          "value": 9.7
        },
        {
          "label": {
            "en": "Taiwan",
            "zh": "台灣"
          },
          "value": 7
        }
      ]
    },
    "line": {
      "title": {
        "en": "Taiwan medical device output, NT$ billion",
        "zh": "台灣醫材產值逐年(億元新台幣)"
      },
      "points": [
        {
          "x": "2021",
          "y": 1000
        },
        {
          "x": "2022",
          "y": 1175
        },
        {
          "x": "2023",
          "y": 1054
        },
        {
          "x": "2024",
          "y": 881
        }
      ]
    },
    "table": {
      "columns": [
        {
          "key": "item",
          "label": {
            "en": "Metric",
            "zh": "指標"
          }
        },
        {
          "key": "value",
          "label": {
            "en": "Value",
            "zh": "數值"
          }
        },
        {
          "key": "year",
          "label": {
            "en": "Year",
            "zh": "年份"
          }
        },
        {
          "key": "source",
          "label": {
            "en": "Source",
            "zh": "來源"
          }
        }
      ],
      "rows": [
        {
          "item": {
            "en": "Population aged 65+ (super-aged society)",
            "zh": "65 歲以上人口(超高齡社會)"
          },
          "value": {
            "en": "4.673 million (20.06%)",
            "zh": "467.3 萬人(20.06%)"
          },
          "year": "2025",
          "source": {
            "en": "UDN News",
            "zh": "聯合新聞網"
          }
        },
        {
          "item": {
            "en": "2025 NHI global budget",
            "zh": "2025 年健保總額"
          },
          "value": {
            "en": "NT$928.6 bn (+5.5% YoY)",
            "zh": "9,286 億元(年增 5.5%)"
          },
          "year": "2025",
          "source": {
            "en": "UHO Health News",
            "zh": "優活健康網"
          }
        },
        {
          "item": {
            "en": "Hospital share of NHI budget",
            "zh": "健保總額醫院部分"
          },
          "value": {
            "en": "NT$643.7 bn (~70%)",
            "zh": "6,437 億元(約 70%)"
          },
          "year": "2025",
          "source": {
            "en": "UHO Health News",
            "zh": "優活健康網"
          }
        },
        {
          "item": {
            "en": "Healthy Taiwan Deep-Cultivation Plan (5-yr public budget)",
            "zh": "健康台灣深耕計畫(5 年公務預算)"
          },
          "value": {
            "en": "NT$48.9 bn",
            "zh": "489 億元"
          },
          "year": "2025",
          "source": {
            "en": "Executive Yuan",
            "zh": "行政院"
          }
        },
        {
          "item": {
            "en": "TFDA-approved AI/ML medical devices (cumulative)",
            "zh": "TFDA 核准 AI/ML 醫材(累計)"
          },
          "value": {
            "en": "104 (37 domestic + 67 imported)",
            "zh": "104 項(國產 37 + 輸入 67)"
          },
          "year": "2024",
          "source": {
            "en": "TFDA / HST",
            "zh": "食藥署 / HST"
          }
        },
        {
          "item": {
            "en": "Medical device output (Jan-Oct)",
            "zh": "醫材產值(1-10 月)"
          },
          "value": {
            "en": "NT$88.1 bn (+2.1% YoY)",
            "zh": "881 億元(年增 2.1%)"
          },
          "year": "2024",
          "source": {
            "en": "CTIMES / MOEA",
            "zh": "CTIMES / 經濟部"
          }
        },
        {
          "item": {
            "en": "Medical device output (historic peak)",
            "zh": "醫材產值(歷史新高)"
          },
          "value": {
            "en": "NT$117.5 bn",
            "zh": "1,175 億元"
          },
          "year": "2022",
          "source": {
            "en": "CTIMES / MOEA",
            "zh": "CTIMES / 經濟部"
          }
        },
        {
          "item": {
            "en": "Medical device exports",
            "zh": "醫療器材出口值"
          },
          "value": {
            "en": "US$2.54 bn (+1.5% YoY)",
            "zh": "25.4 億美元(年增 1.5%)"
          },
          "year": "2024",
          "source": {
            "en": "CTIMES / MOEA",
            "zh": "CTIMES / 經濟部"
          }
        },
        {
          "item": {
            "en": "Top device export market (US share)",
            "zh": "醫材最大出口市場(美國占比)"
          },
          "value": {
            "en": "United States 29.7%",
            "zh": "美國 29.7%"
          },
          "year": "2024",
          "source": {
            "en": "ITIS",
            "zh": "ITIS"
          }
        },
        {
          "item": {
            "en": "Listed/OTC biotech & pharma companies",
            "zh": "生技醫藥上市櫃掛牌家數"
          },
          "value": {
            "en": "150 firms (36 new listings in 2024)",
            "zh": "150 家(2024 新登板 36 家)"
          },
          "year": "2025",
          "source": {
            "en": "GBI Monthly",
            "zh": "環球生技月刊"
          }
        },
        {
          "item": {
            "en": "Healthtech early-stage investment",
            "zh": "健康醫療早期投資"
          },
          "value": {
            "en": "130 deals, US$747 m (+1%)",
            "zh": "130 件、7.47 億美元(年增 1%)"
          },
          "year": "2024",
          "source": {
            "en": "FINDIT",
            "zh": "FINDIT"
          }
        },
        {
          "item": {
            "en": "Largest single funding round (AltruBio Series B)",
            "zh": "最大單筆募資(全心醫藥 B 輪)"
          },
          "value": {
            "en": "US$225 m",
            "zh": "2.25 億美元"
          },
          "year": "2024",
          "source": {
            "en": "FINDIT",
            "zh": "FINDIT"
          }
        },
        {
          "item": {
            "en": "Health expenditure as share of GDP",
            "zh": "醫療照護支出占 GDP"
          },
          "value": {
            "en": "~7%",
            "zh": "約 7%"
          },
          "year": "2025",
          "source": {
            "en": "GBI Monthly",
            "zh": "環球生技月刊"
          }
        },
        {
          "item": {
            "en": "Average medical visits per person per year",
            "zh": "國人平均就醫次數"
          },
          "value": {
            "en": "~14-15 visits/yr",
            "zh": "約 14-15 次/年"
          },
          "year": "2025",
          "source": {
            "en": "Legislative Yuan",
            "zh": "立法院"
          }
        },
        {
          "item": {
            "en": "Estimated nursing workforce shortage",
            "zh": "護理人力短缺(估)"
          },
          "value": {
            "en": "~24,000 (estimate)",
            "zh": "約 2.4 萬人(推估)"
          },
          "year": "2024",
          "source": {
            "en": "Hello Yishi / PTS",
            "zh": "Hello 醫師 / 公視"
          }
        },
        {
          "item": {
            "en": "Global medical AI market (forecast)",
            "zh": "全球醫療 AI 市場(預估)"
          },
          "value": {
            "en": "US$187.7 bn (CAGR 38.5%)",
            "zh": "1,877 億美元(CAGR 38.5%)"
          },
          "year": "2030",
          "source": {
            "en": "Grand View Research",
            "zh": "Grand View Research"
          }
        }
      ]
    }
  },
  {
    "slug": "learn-map",
    "layout": "gallery",
    "icon": "explore",
    "title": {
      "en": "MedTech Skill Map",
      "zh": "轉職技能地圖"
    },
    "subtitle": {
      "en": "A skill map for non-clinical career changers entering MedTech / Digital Health in Taiwan (2024-2026)",
      "zh": "給非醫療背景者進入醫療科技/數位健康產業的技能地圖（聚焦台灣 2024-2026 可用途徑）"
    },
    "categories": [
      {
        "key": "software",
        "en": "Software Engineering",
        "zh": "軟體工程"
      },
      {
        "key": "data-ai",
        "en": "Data & AI",
        "zh": "資料與 AI"
      },
      {
        "key": "domain",
        "en": "Medical Domain",
        "zh": "醫療領域知識"
      },
      {
        "key": "regulatory",
        "en": "Regulation & Quality",
        "zh": "法規與品質"
      },
      {
        "key": "interop",
        "en": "Interoperability & Cross-domain",
        "zh": "互通與跨域"
      }
    ],
    "items": [
      {
        "slug": "programming-fundamentals",
        "category": "software",
        "title": {
          "en": "Programming Fundamentals (Python / JS / C)",
          "zh": "程式語言基礎（Python / JavaScript / C）"
        },
        "summary": {
          "en": "MedTech leans on Python (data/AI), JS/TypeScript (Web/App), and C/C++ (device firmware).",
          "zh": "醫療科技最常用 Python（資料/AI）、JS/TypeScript（Web/App）、C/C++（嵌入式醫材韌體）。"
        },
        "overview": {
          "en": "Learn variables, control flow, functions, data structures, and version control with Git. This matters because no software role in healthcare skips programming fundamentals. How to learn: pick one track first (Python for AI/data, JS for hospital systems or frontend) via free Chinese MOOCs on ewant, or paid hands-on classes at ITRI College.",
          "zh": "學什麼：變數、流程控制、函式、資料結構、版本控制（Git）。為何重要：沒有任何醫療軟體職務能跳過程式基礎。怎麼學：先選一條主線——想做 AI/資料選 Python，想做醫院系統/前端選 JS；ewant 磨課師有免費中文課，工研院產業學院有付費實作班。"
        },
        "tags": [
          "入門 Foundation",
          "適合設計/商管/護理轉數位/完全無背景"
        ],
        "url": "https://www.ewant.org/"
      },
      {
        "slug": "web-app-development",
        "category": "software",
        "title": {
          "en": "Web & App Development",
          "zh": "Web / App 開發"
        },
        "summary": {
          "en": "Front/back-end for hospital information systems (HIS), patient apps, telemedicine platforms, and health-management UIs.",
          "zh": "醫院資訊系統（HIS）、病人端 App、遠距醫療平台、健康管理介面的前後端開發。"
        },
        "overview": {
          "en": "Learn HTML/CSS/JS, one frontend framework (React/Vue), one backend (Node/Django/Spring), and REST APIs. This matters because telemedicine, online registration, and personal health records are all Web/App-shaped. How to learn: generic bootcamps cover the basics, then differentiate with a healthcare project such as a FHIR-backed form.",
          "zh": "學什麼：HTML/CSS/JS、一個前端框架（React/Vue）、一個後端（Node/Django/Spring）、RESTful API。為何重要：遠距醫療、線上掛號、個人健康紀錄都是 Web/App 形態。怎麼學：一般軟體訓練營即可入門，再用醫療專案（如串接 FHIR 表單）做差異化。"
        },
        "tags": [
          "入門到進階 Foundation-Advanced",
          "適合純軟體工程師/設計/完全無背景"
        ]
      },
      {
        "slug": "cloud-and-deployment",
        "category": "software",
        "title": {
          "en": "Cloud & Deployment",
          "zh": "雲端與部署"
        },
        "summary": {
          "en": "Deploying healthcare apps on AWS/GCP/Azure, with compliant storage and access control for medical data.",
          "zh": "在 AWS/GCP/Azure 上部署醫療應用，需理解醫療資料的合規儲存與存取控制。"
        },
        "overview": {
          "en": "Learn core cloud services (compute/storage/network), containers (Docker), IAM permissions, and audit logging. This matters because medical data on the cloud triggers privacy-law and security requirements, and misconfiguration is a compliance risk. How to learn: vendor certifications (AWS/GCP) give the base, then layer privacy and security on top.",
          "zh": "學什麼：雲端基本服務（運算/儲存/網路）、容器（Docker）、IAM 權限、稽核日誌。為何重要：醫療資料上雲牽涉個資法與資安要求，設定錯誤即合規風險。怎麼學：雲端原廠認證（AWS/GCP）為通用基礎，醫療面向再補隱私資安節點。"
        },
        "tags": [
          "進階 Advanced",
          "適合純軟體工程師/資料AI背景"
        ]
      },
      {
        "slug": "databases-and-data-modeling",
        "category": "software",
        "title": {
          "en": "Databases & Data Modeling",
          "zh": "資料庫與資料模型"
        },
        "summary": {
          "en": "SQL/NoSQL plus healthcare-specific structures such as EHR, lab results, and imaging metadata.",
          "zh": "SQL / NoSQL，以及醫療資料特有的結構（病歷、檢驗、影像 metadata）。"
        },
        "overview": {
          "en": "Learn relational design, SQL queries, indexing, and transactions, and understand the longitudinal structure and privacy tiers of medical records. This matters because healthcare systems are data at their core and correctness affects patient safety. How to learn: generic SQL courses plus studying how FHIR/HL7 models map to tables.",
          "zh": "學什麼：關聯式資料庫設計、SQL 查詢、索引、交易，理解病歷資料的縱向結構與隱私分級。為何重要：醫療系統的核心就是資料，且資料正確性攸關病人安全。怎麼學：通用 SQL 課程，搭配觀摩 FHIR/HL7 資料模型如何對應到資料表。"
        },
        "tags": [
          "入門到進階 Foundation-Advanced",
          "適合純軟體工程師/資料AI背景/商管"
        ]
      },
      {
        "slug": "devops-and-engineering-discipline",
        "category": "software",
        "title": {
          "en": "DevOps & Engineering Discipline",
          "zh": "DevOps / CI-CD 與軟體工程紀律"
        },
        "summary": {
          "en": "Version control, automated testing, and CI/CD, which in device software must map to IEC 62304's traceable processes.",
          "zh": "版本控制、自動測試、CI/CD；在醫材軟體中需對應 IEC 62304 的可追溯流程。"
        },
        "overview": {
          "en": "Learn Git workflows, unit/integration testing, CI/CD pipelines, and documentation. This matters because device software requires every line to be traceable to a requirement and a risk, so engineering discipline is itself a regulatory requirement. How to learn: learn generic DevOps first, then read how IEC 62304 shapes the software development lifecycle.",
          "zh": "學什麼：Git 流程、單元/整合測試、CI/CD pipeline、文件化。為何重要：醫材軟體要求每行程式都能追溯到需求與風險，工程紀律本身就是法規要求。怎麼學：先學通用 DevOps，再讀 IEC 62304 對 SDLC 的要求。"
        },
        "tags": [
          "進階到就業準備 Advanced-JobReady",
          "適合純軟體工程師"
        ]
      },
      {
        "slug": "embedded-device-firmware",
        "category": "software",
        "title": {
          "en": "Embedded & Device Firmware",
          "zh": "嵌入式 / 醫材韌體"
        },
        "summary": {
          "en": "MCU firmware, I2C/SPI comms, and biosignal sensor integration, the low level of wearables and bedside instruments.",
          "zh": "MCU 韌體、I2C/SPI 通訊、生醫感測整合；穿戴裝置與床邊儀器的底層。"
        },
        "overview": {
          "en": "Learn C, MCU control of I/O and comms modules, and biosignal (ECG/EEG) analog-to-digital processing. This matters because smart wearables and physiological monitors need firmware engineers. How to learn: ITRI College and ittraining run embedded and smart-medical job-prep classes with hands-on labs.",
          "zh": "學什麼：C 語言、MCU 控制 I/O 與通訊模組、生醫訊號（ECG/EEG）從類比到數位的處理。為何重要：智慧穿戴、生理監測器等硬體醫材需要韌體人才。怎麼學：工研院產業學院、艾鍗學院的智慧醫療/嵌入式就業班有完整實作。"
        },
        "tags": [
          "進階 Advanced",
          "適合純軟體工程師/完全無背景（理工底）"
        ],
        "url": "https://college.itri.org.tw/"
      },
      {
        "slug": "python-for-data-and-ai",
        "category": "data-ai",
        "title": {
          "en": "Python for Data & AI",
          "zh": "Python 資料科學基礎"
        },
        "summary": {
          "en": "NumPy/Pandas/Matplotlib plus scikit-learn, the lingua franca of medical data analysis.",
          "zh": "NumPy/Pandas/Matplotlib + scikit-learn，醫療資料分析的共同語言。"
        },
        "overview": {
          "en": "Learn data cleaning, exploratory analysis, feature engineering, and classic ML models. This matters because ninety percent of medical AI work is data wrangling and the model is the last mile. How to learn: ITRI's Python AI ML and Image Recognition class and TibaMe offer government-subsidized hands-on classes.",
          "zh": "學什麼：資料清理、探索性分析、特徵工程、傳統 ML 模型。為何重要：醫療 AI 九成的工作是資料處理，模型只是最後一哩。怎麼學：工研院 Python AI 機器學習與影像辨識實作、TibaMe 等都有政府補助實作班。"
        },
        "tags": [
          "入門 Foundation",
          "適合資料AI背景/純軟體工程師/商管/完全無背景"
        ],
        "url": "https://college.itri.org.tw/"
      },
      {
        "slug": "machine-learning",
        "category": "data-ai",
        "title": {
          "en": "Machine Learning",
          "zh": "機器學習"
        },
        "summary": {
          "en": "Supervised/unsupervised learning, evaluation, and overfitting control, with healthcare emphasizing interpretability and calibration.",
          "zh": "監督/非監督學習、模型評估、過擬合控制；醫療場景重視可解釋性與校準。"
        },
        "overview": {
          "en": "Learn classification/regression, cross-validation, ROC/AUC, and imbalanced-data handling. This matters because clinical decisions reject black boxes and metrics must map to clinical meaning (sensitivity/specificity, not just accuracy). How to learn: generic ML courses plus deliberate practice on medical datasets such as public imaging or lab data.",
          "zh": "學什麼：分類/迴歸、交叉驗證、ROC/AUC、不平衡資料處理。為何重要：臨床決策不能接受黑箱，評估指標需對應臨床意義（敏感度/特異度而非只看 accuracy）。怎麼學：通用 ML 課，刻意用醫療資料集（如公開的影像/檢驗資料）練習。"
        },
        "tags": [
          "進階 Advanced",
          "適合資料AI背景/純軟體工程師"
        ]
      },
      {
        "slug": "deep-learning",
        "category": "data-ai",
        "title": {
          "en": "Deep Learning",
          "zh": "深度學習"
        },
        "summary": {
          "en": "CNN/Transformer with TensorFlow/PyTorch, the workhorse for medical imaging and signal analysis.",
          "zh": "CNN/Transformer、TensorFlow/PyTorch；醫療影像與訊號分析的主力。"
        },
        "overview": {
          "en": "Learn neural nets, CNNs, U-Net segmentation, and transfer learning. This matters because tumor detection, image segmentation, and biosignal interpretation rely on deep learning. How to learn: TibaMe's tumor-detection class covers Keras CNN and U-Net, and ITRI's Python AI Biomedical Image Recognition Engineer course covers CT/MRI/ECG/EEG.",
          "zh": "學什麼：神經網路、CNN、U-Net 分割、遷移學習。為何重要：腫瘤偵測、影像分割、生理訊號判讀多用深度學習。怎麼學：TibaMe AI 醫療影像腫瘤偵測實作班涵蓋 Keras CNN 與 U-Net，工研院 Python AI 生醫影像辨識工程師涵蓋 CT/MRI/ECG/EEG。"
        },
        "tags": [
          "進階 Advanced",
          "適合資料AI背景/純軟體工程師"
        ],
        "url": "https://www.tibame.com/offline/medicine_image_by_deep_learning"
      },
      {
        "slug": "medical-imaging-dicom-ai",
        "category": "data-ai",
        "title": {
          "en": "Medical Imaging & DICOM (AI side)",
          "zh": "醫療影像與 DICOM（資料側）"
        },
        "summary": {
          "en": "Reading/writing the DICOM format, PACS concepts, and preprocessing for imaging AI.",
          "zh": "DICOM 影像格式的讀寫、PACS 概念，以及影像 AI 的資料前處理。"
        },
        "overview": {
          "en": "Learn DICOM file structure and metadata, pydicom I/O, windowing/normalization, and DICOMweb. This matters because CT/MRI/X-ray all use DICOM, making it the gateway to imaging AI. How to learn: DICOM Taiwan provides local training and the MI-TW Connectathon, and imaging-AI classes usually include DICOM-reading modules.",
          "zh": "學什麼：DICOM 檔案結構與 metadata、pydicom 讀寫、視窗化/正規化、與 DICOMweb。為何重要：CT/MRI/X 光皆為 DICOM，是醫療影像 AI 的入口。怎麼學：DICOM Taiwan 提供本地教育訓練與聯測（MI-TW Connectathon），影像 AI 實作班通常含 DICOM 讀取章節。"
        },
        "tags": [
          "進階 Advanced",
          "適合資料AI背景/醫檢放射師轉數位"
        ],
        "url": "https://dicomtaiwan.wordpress.com/"
      },
      {
        "slug": "clinical-nlp",
        "category": "data-ai",
        "title": {
          "en": "Clinical NLP",
          "zh": "臨床文本 NLP"
        },
        "summary": {
          "en": "NLP and information extraction over clinical notes, lab reports, and nursing records.",
          "zh": "病歷文字、檢驗報告、護理紀錄的自然語言處理與資訊抽取。"
        },
        "overview": {
          "en": "Learn tokenization, named-entity recognition (diseases/drugs), LLM applications, and mapping to medical vocabularies (SNOMED/ICD). This matters because vast clinical information hides in unstructured text and the LLM wave has spiked demand. How to learn: generic NLP/LLM courses plus the quirks of Chinese clinical text (abbreviations, code-switching), noting that medical LLMs face strong regulatory and privacy constraints.",
          "zh": "學什麼：斷詞、命名實體辨識（疾病/藥物）、LLM 應用、與醫學詞表（如 SNOMED/ICD）對應。為何重要：大量臨床資訊藏在非結構化文字，LLM 興起讓此領域需求大增。怎麼學：通用 NLP/LLM 課，加上中文醫療文本的特殊挑戰（縮寫、中英混雜）；注意醫療 LLM 受法規與隱私強約束。"
        },
        "tags": [
          "進階到就業準備 Advanced-JobReady",
          "適合資料AI背景/完全無背景（資訊底）"
        ]
      },
      {
        "slug": "data-engineering-health-data",
        "category": "data-ai",
        "title": {
          "en": "Data Engineering for Health Data",
          "zh": "資料工程與醫療資料管線"
        },
        "summary": {
          "en": "Building pipelines to extract, clean, and integrate data from HIS, sensors, and wearables.",
          "zh": "從 HIS/感測器/穿戴裝置抽取、清理、整合資料的管線設計。"
        },
        "overview": {
          "en": "Learn ETL/ELT, data quality, de-identification, and integration with FHIR/HL7 standards. This matters because health data is scattered across systems with uneven quality and pipelines are the foundation for AI and analytics. How to learn: generic data engineering plus the interoperability nodes (FHIR/HL7/DICOM).",
          "zh": "學什麼：ETL/ELT、資料品質、隱私去識別化、與 FHIR/HL7 標準對接。為何重要：醫療資料散落多系統且品質參差，管線是 AI 與分析的地基。怎麼學：通用資料工程，搭配醫療互通標準節點（FHIR/HL7/DICOM）。"
        },
        "tags": [
          "進階 Advanced",
          "適合資料AI背景/純軟體工程師"
        ]
      },
      {
        "slug": "statistics-and-biostatistics",
        "category": "data-ai",
        "title": {
          "en": "Statistics & Biostatistics",
          "zh": "統計與生物統計"
        },
        "summary": {
          "en": "Hypothesis testing, regression, survival analysis, and statistical literacy for clinical study design.",
          "zh": "假設檢定、迴歸、存活分析，以及臨床研究設計的統計素養。"
        },
        "overview": {
          "en": "Learn p-values/confidence intervals, sensitivity/specificity/PPV/NPV, and clinical-trial design concepts. This matters because medical AI and devices require clinical validation, and without statistical rigor you fail both regulators and reviewers. How to learn: university open courseware (NTU/NCKU) biostatistics plus practice on real data.",
          "zh": "學什麼：p 值/信賴區間、敏感度/特異度/PPV/NPV、臨床試驗設計概念。為何重要：醫療 AI 與器材需臨床驗證，沒有統計嚴謹度就過不了法規與審稿。怎麼學：大學開放式課程（台大/成大 OCW）的生統課，搭配實際資料練習。"
        },
        "tags": [
          "入門到進階 Foundation-Advanced",
          "適合資料AI背景/商管/護理醫檢轉數位"
        ],
        "url": "https://ocw.aca.ntu.edu.tw/"
      },
      {
        "slug": "basic-anatomy-physiology",
        "category": "domain",
        "title": {
          "en": "Basic Anatomy & Physiology",
          "zh": "解剖生理基礎"
        },
        "summary": {
          "en": "A functional grasp of body systems, enough to understand what a product measures or assists.",
          "zh": "人體系統的功能性概念，足以理解產品要量測/輔助的對象。"
        },
        "overview": {
          "en": "Learn how cardiovascular/respiratory/nervous systems work and the meaning of common biosignals (ECG/BP/SpO2). This matters because without physiology you cannot judge data plausibility or danger thresholds. How to learn: university open courseware anatomy/physiology, or intro Coursera courses (note that since Aug 2025 free access is preview only and full content requires payment).",
          "zh": "學什麼：心血管/呼吸/神經等系統的基本運作、常見生理訊號（ECG/血壓/血氧）的意義。為何重要：不懂生理就無法判斷資料合理性與危險閾值。怎麼學：大學開放式課程的人體生理學/解剖學，或 Coursera 入門課（注意 2025/8 起免費改為預覽模式，完整內容需付費）。"
        },
        "tags": [
          "入門 Foundation",
          "適合純軟體工程師/資料AI背景/設計/商管/完全無背景"
        ],
        "url": "https://ocw.aca.ntu.edu.tw/"
      },
      {
        "slug": "medical-terminology",
        "category": "domain",
        "title": {
          "en": "Medical Terminology",
          "zh": "醫學術語"
        },
        "summary": {
          "en": "Reading the abbreviations and word-roots on records and lab orders, the minimum for cross-domain communication.",
          "zh": "看懂病歷與檢驗單上的縮寫、字首字根，跨域溝通的最低門檻。"
        },
        "overview": {
          "en": "Learn common prefixes/roots/suffixes, department and exam abbreviations, and ICD/lab naming. This matters because if you cannot parse the terms, requirements interviews get distorted. How to learn: intro terminology texts plus cross-referencing with real records or FHIR sample data.",
          "zh": "學什麼：常見字首/字根/字尾、科別與檢查縮寫、ICD/檢驗項目命名。為何重要：聽不懂術語，需求訪談就會失真。怎麼學：醫學術語入門教材，搭配在真實病歷/FHIR 範例資料中對照。"
        },
        "tags": [
          "入門 Foundation",
          "適合純軟體工程師/資料AI背景/設計/商管/完全無背景"
        ]
      },
      {
        "slug": "clinical-workflows-care-process",
        "category": "domain",
        "title": {
          "en": "Clinical Workflows & Care Process",
          "zh": "臨床流程與醫護工作流"
        },
        "summary": {
          "en": "The real flow from registration to consult, orders, labs, treatment, and discharge, and clinicians' time pressure.",
          "zh": "掛號→看診→醫囑→檢驗→處置→出院的真實流程，以及醫護的時間壓力。"
        },
        "overview": {
          "en": "Learn the differences between outpatient/inpatient/ER, order and handover flows, and the cadence of nursing documentation. This matters because products that ignore workflow get abandoned at the bedside. How to learn: medical-informatics programs include hospital visits, while non-students can learn via industry talks, clinician interviews, and internships or joint projects.",
          "zh": "學什麼：門診/住院/急診的差異、醫囑與交班流程、護理紀錄節奏。為何重要：不貼合工作流的產品在臨床現場一定被棄用。怎麼學：醫資相關科系課程常含醫院實地參訪，非學生可透過產業講座、與臨床端訪談、實習/合作專案了解。"
        },
        "tags": [
          "入門到進階 Foundation-Advanced",
          "適合設計/商管/純軟體工程師/資料AI背景"
        ]
      },
      {
        "slug": "hospital-operations-his-ecosystem",
        "category": "domain",
        "title": {
          "en": "Hospital Operations & HIS Ecosystem",
          "zh": "醫院運作與 HIS 生態"
        },
        "summary": {
          "en": "How hospital systems (HIS/EMR/PACS/LIS) interconnect, plus procurement and deployment realities.",
          "zh": "醫院資訊系統（HIS/EMR/PACS/LIS）如何串接，以及採購與導入現實。"
        },
        "overview": {
          "en": "Learn each system's role, how data flows between them, and hospital IT governance and security. This matters because even great products must embed into existing HIS to land. How to learn: medical-informatics courses, TAMI events, and joint projects with hospital IT departments.",
          "zh": "學什麼：各系統角色、資料如何在系統間流動、醫院 IT 治理與資安。為何重要：再好的產品也要能嵌入既有 HIS 才有機會落地。怎麼學：醫資學系課程、台灣醫資學會（TAMI）活動、與醫院資訊室合作專案。"
        },
        "tags": [
          "進階 Advanced",
          "適合純軟體工程師/商管/護理醫檢轉數位"
        ],
        "url": "https://www.medinfo.org.tw/"
      },
      {
        "slug": "patient-safety-healthcare-quality",
        "category": "domain",
        "title": {
          "en": "Patient Safety & Healthcare Quality",
          "zh": "病人安全與醫療品質"
        },
        "summary": {
          "en": "Do-no-harm principles, error taxonomies, alert fatigue, and human factors, the core value system of medical software.",
          "zh": "不傷害原則、錯誤類型、警示疲勞、人因設計；醫療軟體的核心價值觀。"
        },
        "overview": {
          "en": "Learn safety-event types, human-error models, how usability affects safety, and adverse-event reporting. This matters because a bug in medical software can be fatal, so safety awareness drives design and testing rigor. How to learn: public patient-safety courses, reinforced by the risk thinking in IEC 62304 and ISO 14971.",
          "zh": "學什麼：病安事件類型、人為失誤模型、可用性對安全的影響、不良事件通報。為何重要：醫療軟體的 bug 可能致命，病安意識決定設計與測試的嚴謹度。怎麼學：病人安全相關公開課程，並可一併建立 IEC 62304/ISO 14971 中的風險思維。"
        },
        "tags": [
          "入門到就業準備 Foundation-JobReady",
          "適合設計/純軟體工程師/資料AI背景/商管"
        ]
      },
      {
        "slug": "samd-concepts",
        "category": "regulatory",
        "title": {
          "en": "Software as a Medical Device (SaMD)",
          "zh": "SaMD 概念（軟體即醫材）"
        },
        "summary": {
          "en": "Deciding whether your software is a medical device and which risk class, which sets the entire regulatory path.",
          "zh": "判斷你的軟體是不是醫材、屬於哪一風險等級，決定整個法規路徑。"
        },
        "overview": {
          "en": "Learn IMDRF's SaMD definition/classification, the medical-purpose test, and risk tiers. This matters because crossing the device line without regulation means illegal marketing, a frequent startup mistake. How to learn: NYCU's SaMD platform (CIBDS Lab), the TFDA AI/ML device platform, and public materials from UL/SGS.",
          "zh": "學什麼：IMDRF 的 SaMD 定義與分類、醫療目的判定、風險分級。為何重要：踩到醫材定義卻沒走法規，等於違法上市，也是新創最常誤判之處。怎麼學：陽明交大 SaMD 平台（CIBDS Lab）、TFDA 智慧醫療器材媒合平台、UL/SGS 等驗證機構的公開資料。"
        },
        "tags": [
          "入門到進階 Foundation-Advanced",
          "適合商管/純軟體工程師/資料AI背景/護理醫檢轉數位"
        ],
        "url": "https://biomedai.nycu.edu.tw/SaMD/"
      },
      {
        "slug": "iso-13485-qms",
        "category": "regulatory",
        "title": {
          "en": "ISO 13485 Quality Management System",
          "zh": "ISO 13485 品質管理系統"
        },
        "summary": {
          "en": "The QMS baseline for device companies, covering design/development, document control, and post-market surveillance.",
          "zh": "醫材公司的品質系統基準，涵蓋設計開發、文件管制、上市後監督。"
        },
        "overview": {
          "en": "Learn QMS structure, design and development controls (clause 7.3), and document/record requirements. This matters because without a 13485 QMS a product cannot get market approval. How to learn: training from isoleader, SGS, and UL, most efficient when paired with IEC 62304.",
          "zh": "學什麼：QMS 架構、設計與開發管制（7.3 條）、文件與紀錄要求。為何重要：沒有 13485 的品質系統，產品無法取得上市許可。怎麼學：領導力企管、SGS、UL 等提供 ISO 13485 訓練，與 IEC 62304 一起學最有效率。"
        },
        "tags": [
          "進階 Advanced",
          "適合商管/純軟體工程師/護理醫檢轉數位"
        ],
        "url": "https://www.isoleader.com.tw/"
      },
      {
        "slug": "iec-62304-software-lifecycle",
        "category": "regulatory",
        "title": {
          "en": "IEC 62304 Software Lifecycle",
          "zh": "IEC 62304 醫材軟體生命週期"
        },
        "summary": {
          "en": "The development-process standard for device software, with three safety classes (A/B/C).",
          "zh": "醫材軟體的開發流程標準，軟體分 A/B/C 三個安全等級。"
        },
        "overview": {
          "en": "Learn software safety classification, the five processes (requirements/architecture/implementation/verification/maintenance), and software risk management tied to ISO 14971. This matters because TFDA/FDA/CE submissions almost always require 62304, turning engineering discipline into a legal obligation and making it a software engineer's most valuable differentiator. How to learn: isoleader's IEC 62304 course and NYCU's SaMD platform.",
          "zh": "學什麼：軟體安全分類、需求/架構/實作/驗證/維護五大流程、軟體風險管理（與 ISO 14971 連動）。為何重要：申請 TFDA/FDA/CE 幾乎都要 62304，它把工程紀律變成法規義務，是軟體工程師最有價值的差異化技能。怎麼學：領導力企管 IEC 62304 訓練課程、陽明交大 SaMD 平台資料。"
        },
        "tags": [
          "進階到就業準備 Advanced-JobReady",
          "適合純軟體工程師/資料AI背景"
        ],
        "url": "https://www.isoleader.com.tw/iso-training-courses/detail/231256"
      },
      {
        "slug": "iso-14971-risk-management",
        "category": "regulatory",
        "title": {
          "en": "ISO 14971 Risk Management",
          "zh": "ISO 14971 風險管理"
        },
        "summary": {
          "en": "The risk-management framework for devices, tightly coupled with 13485 design and 62304 software processes.",
          "zh": "醫材風險管理的框架，與 13485 設計開發、62304 軟體流程緊密相扣。"
        },
        "overview": {
          "en": "Learn hazard analysis, risk assessment and control, residual-risk evaluation, and usability risk (IEC 62366). This matters because every design decision in a medical product must answer whether it could harm a patient. How to learn: it is usually taught bundled with the 13485 and 62304 packaged courses.",
          "zh": "學什麼：危害分析、風險評估與控制、剩餘風險評估、可用性風險（IEC 62366）。為何重要：醫療產品的所有設計決策都要回答會不會傷害病人。怎麼學：多與 13485/62304 套裝課程一起教授。"
        },
        "tags": [
          "進階 Advanced",
          "適合純軟體工程師/商管/設計"
        ]
      },
      {
        "slug": "tfda-fda-regulatory-basics",
        "category": "regulatory",
        "title": {
          "en": "TFDA & FDA Regulatory Basics",
          "zh": "TFDA / FDA 法規基礎"
        },
        "summary": {
          "en": "Taiwan TFDA device registration, AI/ML device guidance, and Predetermined Change Control Plans (PCCP).",
          "zh": "台灣 TFDA 醫材查驗登記流程、AI/ML 醫材指引與 PCCP 預定變更控制。"
        },
        "overview": {
          "en": "Learn device classification and registration, TFDA's AI/ML SaMD registration guidance (referencing IMDRF clinical evaluation), the 2024 PCCP mechanism, and FDA/CE differences. This matters because it decides whether a product can legally launch in Taiwan, and PCCP lets AI models update within an approved scope, directly shaping product strategy. How to learn: TFDA's AI/ML device platform, ITRI's device-guidance database, and SGS regulatory updates.",
          "zh": "學什麼：醫材分級與查驗登記流程、TFDA AI/ML 軟體醫材查驗登記技術指引（參考 IMDRF 臨床評估）、2024 起的 PCCP 機制、與 FDA/CE 差異。為何重要：這是產品能否合法在台上市的關鍵，PCCP 讓 AI 模型可在核准範圍內更新，直接影響產品策略。怎麼學：TFDA 智慧醫療器材媒合平台、工研院醫材技術基準與指引資料庫、SGS 法規動態。"
        },
        "tags": [
          "進階到就業準備 Advanced-JobReady",
          "適合商管/護理醫檢轉數位/資料AI背景/純軟體工程師"
        ],
        "url": "https://aimd.fda.gov.tw/"
      },
      {
        "slug": "privacy-and-security",
        "category": "regulatory",
        "title": {
          "en": "Privacy & Security",
          "zh": "隱私與資安（個資 / 醫療資料保護）"
        },
        "summary": {
          "en": "Personal Data Protection Act, de-identification of medical data, access control, and security governance.",
          "zh": "個資法、醫療資料去識別化、存取控制與資安治理。"
        },
        "overview": {
          "en": "Learn the PDPA and the special sensitivity of health data, de-identification methods, access/audit controls, and cloud compliance. This matters because the legal and trust costs of a medical-data breach are severe and this is often the gate for international collaboration (GDPR/HIPAA). How to learn: generic security courses plus healthcare-specific rules, complementing the cloud node.",
          "zh": "學什麼：個資法與健康資料的特別敏感性、去識別化方法、存取/稽核控制、雲端合規。為何重要：醫療資料外洩的法律與信任代價極高，且常是國際合作（GDPR/HIPAA）的門檻。怎麼學：資安通用課程，加上醫療資料特殊規範，與雲端節點互補。"
        },
        "tags": [
          "進階 Advanced",
          "適合純軟體工程師/資料AI背景/商管"
        ]
      },
      {
        "slug": "hl7-fhir-interoperability",
        "category": "interop",
        "title": {
          "en": "HL7 & FHIR Interoperability",
          "zh": "HL7 / FHIR 互通標準"
        },
        "summary": {
          "en": "The modern standard for health-data exchange (FHIR), letting different systems talk.",
          "zh": "醫療資料交換的現代標準（FHIR），讓不同系統對話。"
        },
        "overview": {
          "en": "Learn the FHIR resource model (Patient/Condition/Observation), RESTful APIs, and the relationship to legacy HL7 v2. This matters because Taiwan promotes the MI-TW Connectathon and FHIR is the official direction for interoperability. Reality check: FHIR is a Web standard, so knowing it alone does not guarantee a high salary; you still need solid software/data engineering underneath. How to learn: DICOM Taiwan's FHIR intro training, TAMI, and the MI-TW Connectathon.",
          "zh": "學什麼：FHIR 資源模型（Patient/Condition/Observation 等）、RESTful API、與舊版 HL7 v2 的關係。為何重要：台灣推動 MI-TW 聯測，FHIR 是醫療互通的官方方向。現實提醒：FHIR 本身是一套 Web 標準，會 FHIR 不等於高薪，仍需扎實的軟體/資料工程底子才有競爭力。怎麼學：DICOM Taiwan 的 FHIR 入門教育訓練、台灣醫資學會、MI-TW Connectathon。"
        },
        "tags": [
          "進階到就業準備 Advanced-JobReady",
          "適合純軟體工程師/資料AI背景/護理醫檢轉數位"
        ],
        "url": "https://dicomtaiwan.wordpress.com/"
      },
      {
        "slug": "dicom-interoperability",
        "category": "interop",
        "title": {
          "en": "DICOM Interoperability",
          "zh": "DICOM 互通標準"
        },
        "summary": {
          "en": "The transmission/storage standard for medical imaging, the basis of imaging-system interoperability.",
          "zh": "醫療影像的傳輸與儲存標準，影像系統互通的基礎。"
        },
        "overview": {
          "en": "Learn DICOM network services, DICOMweb, and integration with PACS and imaging AI. This matters because imaging products must speak DICOM to enter hospitals. How to learn: DICOM Taiwan training and the MI-TW Connectathon, complementing the data-side DICOM node (one is AI preprocessing, the other system interoperability).",
          "zh": "學什麼：DICOM 網路服務、DICOMweb、與 PACS/影像 AI 的整合。為何重要：影像產品要進醫院必須講 DICOM。怎麼學：DICOM Taiwan 教育訓練與 MI-TW 聯測，與醫療影像與 DICOM 資料節點互補（一個偏 AI 前處理，一個偏系統互通）。"
        },
        "tags": [
          "進階 Advanced",
          "適合純軟體工程師/資料AI背景/醫檢放射師轉數位"
        ],
        "url": "https://mitw.dicom.org.tw/"
      },
      {
        "slug": "cross-domain-communication",
        "category": "interop",
        "title": {
          "en": "Cross-Domain Communication & Requirements",
          "zh": "跨域溝通與需求訪談"
        },
        "summary": {
          "en": "Collaborating with clinicians, regulators, and hospital IT, the scarcest soft skill and the one that most decides success.",
          "zh": "與醫護、法規、資訊室協作的能力——產業最稀缺、最決定成敗的軟實力。"
        },
        "overview": {
          "en": "Learn to interview for clinical pain points, translate clinical needs into technical specs, speak each stakeholder's language, and manage multi-party stakeholders. This matters because official workforce projections and multiple cross-domain programs all flag hybrid communicators as the rarest talent, and products that ignore clinicians get dropped. How to learn: join TAMI and industry talks, run real projects with clinical partners, and use the hospital-visit and requirements training built into informatics programs.",
          "zh": "學什麼：臨床痛點訪談、把臨床需求翻譯成技術規格、用對方語言溝通、管理多方利害關係人。為何重要：官方人才推估與多個跨域學程都指出，產業最缺能跨界對話的複合人才，不貼合臨床的產品必被棄用。怎麼學：參與醫資學會/產業講座、與臨床端做真實專案、醫資學程常設的醫院實地參訪與需求訪談訓練。"
        },
        "tags": [
          "就業準備 JobReady",
          "適合純軟體工程師/資料AI背景/設計/商管/護理醫檢轉數位"
        ],
        "url": "https://www.medinfo.org.tw/"
      },
      {
        "slug": "ux-healthcare-human-factors",
        "category": "interop",
        "title": {
          "en": "UX & Healthcare Human Factors",
          "zh": "UX / 醫療人因設計"
        },
        "summary": {
          "en": "Designing safe, usable interfaces for high-stress, fatigue-prone clinical settings, where usability is patient safety.",
          "zh": "在高壓、易疲勞的臨床環境中設計安全可用的介面；可用性即病安。"
        },
        "overview": {
          "en": "Learn usability research in clinical contexts, alert design that avoids alert fatigue, and IEC 62366 usability engineering. This matters because interface misuse can cause harm and regulators require usability validation. How to learn: generic UX training plus the patient-safety and 62366 nodes, observing and testing in real clinical settings.",
          "zh": "學什麼：臨床情境的可用性研究、警示設計避免警示疲勞、IEC 62366 可用性工程。為何重要：介面誤用會造成醫療傷害，法規亦要求可用性驗證。怎麼學：通用 UX 訓練，加上病人安全與 62366 節點，在真實臨床場域觀察與測試。"
        },
        "tags": [
          "進階 Advanced",
          "適合設計/商管/純軟體工程師"
        ]
      },
      {
        "slug": "medtech-project-product-management",
        "category": "interop",
        "title": {
          "en": "MedTech Project & Product Management",
          "zh": "醫材專案 / 產品管理"
        },
        "summary": {
          "en": "Driving products under regulatory and quality constraints, coordinating engineering, clinical, regulatory, and market.",
          "zh": "在法規與品質約束下推進產品，協調工程、臨床、法規、市場。"
        },
        "overview": {
          "en": "Learn the device development lifecycle, project scheduling under design controls, market-entry pathways, clinical-validation planning, and cross-team coordination. This matters because medical timelines are governed by regulation and clinical validation, unlike ordinary software. How to learn: ITRI College's integrated device courses, a natural entry for business backgrounds, combined with the regulatory nodes.",
          "zh": "學什麼：醫材開發生命週期、設計管制下的專案排程、上市路徑與臨床驗證規劃、跨部門協調。為何重要：醫療產品的時程被法規與臨床驗證主導，管理方式與一般軟體不同。怎麼學：工研院產業學院醫材整合課程，商管背景者可由此切入，結合法規節點。"
        },
        "tags": [
          "就業準備 JobReady",
          "適合商管/護理醫檢轉數位/設計"
        ],
        "url": "https://college.itri.org.tw/"
      }
    ]
  },
  {
    "slug": "learn-paths",
    "layout": "article",
    "icon": "alt_route",
    "title": {
      "en": "Learning Paths & Milestones",
      "zh": "學習路線與階段"
    },
    "subtitle": {
      "en": "Five backgrounds, three stages, one map: what to add, in what order, to enter Taiwan's MedTech / digital-health industry without a clinical degree.",
      "zh": "五種起點、三個階段、一張地圖:依序該補什麼,讓非醫療背景者在沒有臨床學位的情況下進入台灣醫療科技/數位健康產業。"
    },
    "sections": [
      {
        "id": "from-software",
        "heading": {
          "en": "Starting from Pure Software Engineering",
          "zh": "起點:純軟體工程背景"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "You already hold the biggest pillar — software. What you lack is clinical context and regulation. The good news: most engineering roles need functional medical literacy, not a clinical degree. Roughly 4–6 months of targeted study can make you interview-ready.",
              "zh": "你已握有最大的軟體支柱,缺的是「醫療場域感 + 法規」。好消息是:多數工程職缺需要的是功能性醫學識讀,而非臨床學位。約 4–6 個月的針對性學習即可具備面試力。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "What to add, in order",
              "zh": "依序要補什麼"
            }
          },
          {
            "type": "ul",
            "items": {
              "en": [
                "Add medical terminology + basic physiology — one intro course each (university OCW), enough to parse records and judge data plausibility",
                "Own ONE regulatory node: IEC 62304 (software lifecycle, A/B/C safety classes) is your highest-value differentiator — it turns engineering discipline into a legal obligation",
                "Learn one interoperability standard: FHIR (for systems) or DICOM (for imaging), depending on direction",
                "Build a portfolio project that integrates FHIR/DICOM — a real artifact that proves you can connect to medical standards"
              ],
              "zh": [
                "補醫學術語 + 解剖生理基礎,各一門入門課(大學 OCW),足以讀懂病歷、判斷資料合理性",
                "主攻一個法規節點:IEC 62304(軟體生命週期,A/B/C 安全分級)是你最有價值的差異化技能——它把工程紀律變成法規義務",
                "學一個互通標準:FHIR(做系統)或 DICOM(做影像),看你的方向",
                "做一個串接 FHIR/DICOM 的醫療專案放進作品集——一個能證明你會對接醫療標準的真實成果"
              ]
            }
          },
          {
            "type": "quote",
            "text": {
              "en": "Reality check: FHIR is a Web standard. Knowing FHIR alone does not guarantee high pay — it must sit on top of solid software and data engineering.",
              "zh": "現實提醒:FHIR 是一套 Web 標準。會 FHIR 不等於高薪——它必須建立在扎實的軟體與資料工程之上。"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "Recommended bundle: DeepLearning.AI \"AI for Medicine\" if you lean AI, plus FHIR Taiwan's free resources (public HAPI FHIR test server at hapi.fhir.tw), then join the HSIL Hackathon to build a portfolio piece.",
              "zh": "推薦組合:偏 AI 者用 DeepLearning.AI「AI for Medicine」打底,搭配 FHIR Taiwan 免費資源(公開 HAPI FHIR 測試伺服器 hapi.fhir.tw),再參加 HSIL Hackathon 做出作品。"
            }
          }
        ]
      },
      {
        "id": "from-data-ai",
        "heading": {
          "en": "Starting from a Data / AI Background",
          "zh": "起點:資料/AI 背景"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "You hold the data/AI pillar, but medical data is uniquely hard — scarce, imbalanced, and high-stakes. Around 3–5 months closes the gap. Remember: 90% of medical AI work is data wrangling, validation, and regulation; the model is the last mile.",
              "zh": "你已握有資料 AI 支柱,但醫療資料有特殊難點——稀少、不平衡、且錯誤代價高。約 3–5 個月可補足缺口。記住:醫療 AI 九成的工作是資料清理、臨床驗證與法規,模型只是最後一哩。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "What to add, in order",
              "zh": "依序要補什麼"
            }
          },
          {
            "type": "ul",
            "items": {
              "en": [
                "DICOM I/O and preprocessing (pydicom, windowing/normalization) if you do imaging, OR clinical NLP (NER for diseases/drugs, mapping to SNOMED/ICD) if you do text",
                "Biostatistics and clinical-validation metrics — sensitivity/specificity/PPV/NPV and calibration, not just accuracy",
                "SaMD concepts — learn when your model crosses the line into a regulated medical device and must follow a regulatory path",
                "Basic anatomy & physiology — enough to judge whether your data and danger thresholds are plausible"
              ],
              "zh": [
                "若做影像:DICOM 讀寫與前處理(pydicom、視窗化/正規化);若做文本:臨床 NLP(疾病/藥物命名實體辨識、對應 SNOMED/ICD)",
                "生物統計與臨床驗證指標——敏感度/特異度/PPV/NPV 與校準,而非只看 accuracy",
                "SaMD 概念——理解你的模型何時跨線變成「醫材」、需走法規路徑",
                "解剖生理基礎——足以判斷資料合理性與危險閾值"
              ]
            }
          },
          {
            "type": "quote",
            "text": {
              "en": "Clinical decisions reject black boxes: evaluation metrics must map to clinical meaning, and without statistical rigor you fail both regulators and reviewers.",
              "zh": "臨床決策不能接受黑箱:評估指標必須對應臨床意義,沒有統計嚴謹度,你過不了法規,也過不了審稿。"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "Recommended bundle: practice with the MONAI open-source imaging framework (free on GitHub), earn one cloud ML cert (AWS ML Specialty or GCP Professional Data Engineer), then learn HL7 FHIR through FHIR Taiwan's free resources.",
              "zh": "推薦組合:用 MONAI 醫療影像開源框架(GitHub 免費)練手,考一張雲端 ML 證照(AWS ML Specialty 或 GCP Professional Data Engineer),再透過 FHIR Taiwan 免費資源學 HL7 FHIR。"
            }
          }
        ]
      },
      {
        "id": "from-design",
        "heading": {
          "en": "Starting from a Design Background",
          "zh": "起點:設計背景"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "Your entry point is healthcare human-factors / UX, where usability literally equals patient safety. Interface misuse can cause harm, and regulators require usability validation — so the design role here carries weight that ordinary product design does not.",
              "zh": "你的切入點是醫療人因/UX,在這裡「可用性即病安」。介面誤用會造成醫療傷害,法規亦要求可用性驗證——所以這裡的設計角色承擔著一般產品設計沒有的份量。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "What to add, in order",
              "zh": "依序要補什麼"
            }
          },
          {
            "type": "ul",
            "items": {
              "en": [
                "Basic physiology + medical terminology — to understand what the UI must carry",
                "Clinical workflows and care process — design must fit the bedside cadence and clinicians' time pressure, or it gets abandoned",
                "Patient safety + IEC 62366 usability engineering — alert design that avoids alert fatigue; this is the regulatory side of medical UX",
                "Basic programming — enough to collaborate effectively with engineers"
              ],
              "zh": [
                "基礎生理 + 醫學術語——看懂介面要承載的內容",
                "臨床流程與醫護工作流——設計要貼合現場節奏與醫護的時間壓力,否則一定被棄用",
                "病人安全 + IEC 62366 可用性工程——避免警示疲勞的警示設計;這是醫療 UX 的法規面",
                "基礎程式——足以與工程師有效協作"
              ]
            }
          },
          {
            "type": "quote",
            "text": {
              "en": "Your strongest weapon is real clinical observation plus usability testing — products that ignore the actual workflow get dropped at the bedside.",
              "zh": "你最強的武器是真實臨床觀察加上可用性測試——不貼合真實工作流的產品,在臨床現場一定被棄用。"
            }
          }
        ]
      },
      {
        "id": "from-business",
        "heading": {
          "en": "Starting from a Business / Management Background",
          "zh": "起點:商管背景"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "Your entry point is MedTech PM, regulatory affairs, market access, or business development. Business backgrounds excel on the regulatory-quality + PM track — the line that is most underrated and the strongest career moat.",
              "zh": "你的切入點是醫材 PM、法規事務、市場進入或商業開發。商管背景在「法規品質 + PM」這條線上極具優勢——這條線最被低估,也是最強的職涯護城河。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "What to add, in order",
              "zh": "依序要補什麼"
            }
          },
          {
            "type": "ul",
            "items": {
              "en": [
                "SaMD concepts + TFDA/FDA regulatory basics + ISO 13485 QMS — this regulatory line is your moat (note the 2024 PCCP mechanism that lets AI models update within an approved scope)",
                "Clinical workflows and hospital operations (HIS/EMR/PACS/LIS, procurement realities) — to understand the customer",
                "Basic statistics and data literacy — enough to read clinical-validation results",
                "MedTech project management — timelines here are governed by regulation and clinical validation, unlike ordinary software"
              ],
              "zh": [
                "SaMD 概念 + TFDA/FDA 法規基礎 + ISO 13485 品質系統——這條法規線是你的護城河(注意 2024 PCCP 機制,讓 AI 模型可在核准範圍內更新)",
                "臨床流程與醫院運作(HIS/EMR/PACS/LIS、採購現實)——理解你的客戶",
                "基礎統計與資料素養——足以看懂臨床驗證結果",
                "醫材專案管理——這裡的時程由法規與臨床驗證主導,與一般軟體不同"
              ]
            }
          },
          {
            "type": "p",
            "text": {
              "en": "Recommended bundle: subscribe to GBI Monthly and BusinessNext for industry/funding trends, earn PMP for project-management muscle, visit the Taiwan Healthcare Expo and Medical Taiwan for supply-chain partners, and pursue RAC for the highest device-career value.",
              "zh": "推薦組合:訂閱環球生技月刊與數位時代掌握產業/募資動態,考 PMP 練專案管理,逛台灣醫療科技展與 Medical Taiwan 找供應鏈夥伴,並考 RAC 法規認證——醫材職涯加分最大。"
            }
          }
        ]
      },
      {
        "id": "from-clinical",
        "heading": {
          "en": "Starting from Nursing / Med-Lab Tech → Digital",
          "zh": "起點:護理/醫檢/醫療背景轉數位"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "You already hold the scarcest pillar — clinical domain knowledge — and only lack the technical and regulatory language. You are a natural translator between clinicians and engineers; that clinical experience is something others cannot acquire, so amplify it.",
              "zh": "你已握有最稀缺的醫療領域支柱——臨床知識——缺的只是技術與法規語言。你天生就是醫護與工程之間的「翻譯者」;這份臨床經驗是別人補不來的,放大它。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "What to add, in order",
              "zh": "依序要補什麼"
            }
          },
          {
            "type": "ul",
            "items": {
              "en": [
                "Python OR SQL basics — pick one; aim first to read and analyze data",
                "FHIR/HL7 interoperability — your clinical knowledge lets you learn these faster than engineers",
                "SaMD and regulatory basics — to understand the path from clinical idea to compliant product",
                "Cross-domain communication — lean into your built-in advantage as the bridge between clinic and tech"
              ],
              "zh": [
                "Python 或 SQL 基礎——選一條,先求能看懂與分析資料",
                "FHIR/HL7 互通標準——你的臨床知識讓你學得比工程師更快",
                "SaMD 與法規基礎——理解從臨床想法到合規產品的路徑",
                "跨域溝通——發揮你「臨床與技術橋樑」的天生優勢"
              ]
            }
          },
          {
            "type": "quote",
            "text": {
              "en": "Taiwan already has an informatics-nurse path (TNIA), though role definition and certification are still maturing — an opening for early movers.",
              "zh": "台灣已有資訊護理師路徑(TNIA),但角色定義與認證仍在成熟中——這是先行者的機會。"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "Recommended bundle: take Coursera's Stanford \"AI in Healthcare\" (clinician-friendly), then pursue RAC (highest device-career value) or an ISO 13485 auditor course; for clinical trials, add ACRP/SOCRA GCP certification, and consider an NTU/NYCU BME or medical-informatics master's later.",
              "zh": "推薦組合:上 Coursera 史丹佛「AI in Healthcare」(對醫護友善),再考 RAC(醫材職涯加分最大)或 ISO 13485 稽核員課;若走臨床試驗則加 ACRP/SOCRA GCP 認證,進階可考慮台大/陽明交大醫工或醫療資訊碩士。"
            }
          }
        ]
      },
      {
        "id": "milestones",
        "heading": {
          "en": "Three-Stage Milestones: Foundation → Advancement → Job-Readiness",
          "zh": "三階段里程碑:入門 → 進階 → 就業準備"
        },
        "blocks": [
          {
            "type": "h3",
            "text": {
              "en": "Foundation (0–3 months)",
              "zh": "入門 Foundation(0–3 月)"
            }
          },
          {
            "type": "ul",
            "items": {
              "en": [
                "Pick your primary pillar (software / data-AI / clinical-domain / regulatory-quality)",
                "Finish one programming or data intro course",
                "Complete medical terminology + basic physiology",
                "Be able to articulate \"what SaMD is and which slice I want to work on\""
              ],
              "zh": [
                "選定你的主支柱(軟體 / 資料AI / 醫療領域 / 法規品質)",
                "完成一門程式或資料入門課",
                "讀完醫學術語 + 解剖生理基礎",
                "能說清楚「SaMD 是什麼、我想做哪一塊」"
              ]
            }
          },
          {
            "type": "quote",
            "text": {
              "en": "Foundation milestone: you can read and understand a FHIR/DICOM sample dataset.",
              "zh": "入門里程碑:你能讀懂一份 FHIR/DICOM 範例資料。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "Advancement (3–9 months)",
              "zh": "進階 Advancement(3–9 月)"
            }
          },
          {
            "type": "ul",
            "items": {
              "en": [
                "Build a working healthcare-related project in your pillar",
                "Add one interoperability standard (FHIR / DICOM / HL7) and one regulatory node (IEC 62304 or ISO 13485)",
                "Run one real clinical requirements interview or field observation"
              ],
              "zh": [
                "在主支柱做出一個可運作的醫療相關專案",
                "補齊一個互通標準(FHIR / DICOM / HL7)與一個法規節點(IEC 62304 或 ISO 13485)",
                "做一次真實的臨床需求訪談或場域觀察"
              ]
            }
          },
          {
            "type": "quote",
            "text": {
              "en": "Advancement milestone: your portfolio includes a project that integrates a medical standard (data or system connects to FHIR/DICOM/HL7).",
              "zh": "進階里程碑:作品集含一個「資料/系統能對接醫療標準」的專案(對接 FHIR/DICOM/HL7)。"
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "Job-Readiness (9–12+ months)",
              "zh": "就業準備 Job-Readiness(9–12 月+)"
            }
          },
          {
            "type": "ul",
            "items": {
              "en": [
                "Explain your project in language clinicians understand",
                "Understand the product's regulatory pathway and patient-safety considerations",
                "Accumulate cross-domain collaboration through industry talks, communities, and joint projects"
              ],
              "zh": [
                "能用臨床端聽得懂的語言講解你的專案",
                "理解產品的法規路徑與病安考量",
                "透過產業講座、社群、合作專案累積跨域協作經驗"
              ]
            }
          },
          {
            "type": "quote",
            "text": {
              "en": "Job-readiness milestone: in interviews, you can answer both \"how it's built\" and \"why it meets regulation and patient safety.\"",
              "zh": "就業準備里程碑:面試時能同時答出「技術怎麼做」與「為何符合法規/病安」。"
            }
          }
        ]
      },
      {
        "id": "myths",
        "heading": {
          "en": "Myth-Busting, the Fastest Start & Resource Bundles",
          "zh": "迷思破除、最短上手路徑與推薦資源組合"
        },
        "blocks": [
          {
            "type": "h3",
            "text": {
              "en": "Four myths to drop",
              "zh": "四個該丟掉的迷思"
            }
          },
          {
            "type": "ul",
            "items": {
              "en": [
                "Myth: \"You must study medicine first.\" Wrong — most engineering/data/regulatory/design/PM roles need functional medical literacy, not a clinical degree.",
                "Myth: \"Knowing FHIR alone means high pay.\" Oversimplified — FHIR is a Web standard layered on solid software/data engineering.",
                "Myth: \"Medical AI is about fancier models.\" Wrong — 90% of the work is data cleaning, clinical validation, and regulation; the model is the last mile.",
                "Myth: \"Regulation is boring, avoid it.\" Wrong — regulation and quality are the strongest career moat and differentiator; the earlier you understand it, the more you are worth."
              ],
              "zh": [
                "迷思:「要先讀醫學系才能進醫療科技。」錯——多數工程/資料/法規/設計/PM 職缺需要的是功能性醫學識讀,而非臨床學位。",
                "迷思:「會 FHIR 就能領高薪。」過度簡化——FHIR 是一套 Web 標準,須建立在扎實的軟體/資料工程之上。",
                "迷思:「醫療 AI = 訓練更厲害的模型。」錯——九成工作是資料清理、臨床驗證與法規,模型只是最後一哩。",
                "迷思:「法規很無聊、能避就避。」錯——法規與品質是最強的職涯護城河與差異化技能,越早懂越值錢。"
              ]
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "The fastest start (4 steps)",
              "zh": "最短上手路徑(4 步)"
            }
          },
          {
            "type": "ul",
            "items": {
              "en": [
                "Spend 2–3 weeks on medical terminology + intro physiology via university OCW to build functional literacy",
                "Target the pillar matching your existing strength (tech → software/data; design → UX; business → regulatory/PM; clinical → translator), and fill only that gap",
                "Learn one cross-domain language nearest your direction: FHIR (systems), DICOM (imaging), or SaMD + IEC 62304 (regulation)",
                "Ship one small project that integrates a medical standard, plus one real clinical interview — into your portfolio and résumé"
              ],
              "zh": [
                "用 2–3 週透過大學 OCW 讀完醫學術語 + 解剖生理入門,建立功能性醫學識讀",
                "鎖定你既有強項對應的支柱(技術→軟體/資料;設計→UX;商管→法規/PM;臨床→翻譯者),只補該支柱缺口",
                "學一個與你方向最近的跨域語言:FHIR(系統)、DICOM(影像)或 SaMD + IEC 62304(法規)",
                "做一個串接醫療標準的小專案,加上一次真實臨床訪談——放進作品集與履歷"
              ]
            }
          },
          {
            "type": "h3",
            "text": {
              "en": "Recommended resource bundles by background",
              "zh": "依背景的推薦資源組合"
            }
          },
          {
            "type": "ul",
            "items": {
              "en": [
                "STEM/Software → Medical AI: DeepLearning.AI \"AI for Medicine\" → practice with MONAI open source → one cloud ML cert (AWS ML Specialty or GCP Professional Data Engineer) → HL7 FHIR via free FHIR Taiwan → HSIL Hackathon; read \"AI Healthcare Future\" for domain awareness",
                "Non-major/Jobseeker → Health Informatics: apply for the MOL Industry Talent \"Smart Healthcare AI\" subsidized track → take TAMI's \"Medical Informatics Manager\" exam → add III data-analytics courses → join TAMI communities → scout jobs at the Taiwan Healthcare Expo; on a tight budget, self-study via free NTU OCW first",
                "Clinical/Life-Science → Tech & Regulation: Coursera Stanford \"AI in Healthcare\" → RAC or an ISO 13485 auditor course → add ACRP/SOCRA GCP for clinical trials → consider an NTU/NYCU BME or medical-informatics master's later",
                "Product/Startup/Business: subscribe to GBI Monthly and BusinessNext → earn PMP → visit Taiwan Healthcare Expo and Medical Taiwan for supply chain and partners → tap the IBMI ecosystem for networking → join hackathons to validate ideas"
              ],
              "zh": [
                "理工/軟體 → 醫療 AI:DeepLearning.AI「AI for Medicine」→ 用 MONAI 開源練手 → 一張雲端 ML 證照(AWS ML Specialty 或 GCP Professional Data Engineer)→ 用 FHIR Taiwan 免費資源學 HL7 FHIR → 參加 HSIL Hackathon;讀《AI 醫療大未來》建立領域認知",
                "非本科/待業青年 → 醫療資訊:申請勞動部產業新尖兵「智慧醫療 AI」職訓班(高補助)→ 考台灣醫學資訊學會「醫學資訊管理師」→ 補資策會資料分析課 → 加入台灣醫學資訊學會社群 → 逛台灣醫療科技展找職缺;預算有限可先用台大 OCW 免費自學",
                "醫護/生科 → 技術與法規:Coursera 史丹佛「AI in Healthcare」→ RAC 或 ISO 13485 稽核員課 → 走臨床試驗則加 ACRP/SOCRA GCP → 進階考慮台大/陽明交大醫工或醫療資訊碩士",
                "產品/創業/商業:訂閱環球生技與數位時代 → 考 PMP → 逛台灣醫療科技展與 Medical Taiwan 找供應鏈與夥伴 → 加入生策會生態圈累積人脈 → 參加黑客松驗證點子"
              ]
            }
          }
        ]
      }
    ]
  },
  {
    "slug": "learn-resources",
    "layout": "gallery",
    "icon": "menu_book",
    "title": {
      "en": "Courses, Certs & Resources",
      "zh": "課程證照與資源"
    },
    "subtitle": {
      "en": "Verified learning resources for breaking into Taiwan's healthcare tech and digital health industry (2024-2026): degrees, courses, certifications, communities, media and events across medical-domain, technical and regulatory skills.",
      "zh": "想進入台灣醫療科技與數位健康產業者可用的查證學習資源（2024-2026）：橫跨醫療領域、技術與法規品質的學位、課程、證照、社群、媒體與活動。"
    },
    "categories": [
      {
        "key": "course",
        "en": "Courses & Platforms",
        "zh": "課程與平台"
      },
      {
        "key": "degree",
        "en": "Degrees & Programs",
        "zh": "學位與學程"
      },
      {
        "key": "cert",
        "en": "Certifications",
        "zh": "證照"
      },
      {
        "key": "community",
        "en": "Communities",
        "zh": "社群"
      },
      {
        "key": "media",
        "en": "Media & Books",
        "zh": "媒體與書籍"
      },
      {
        "key": "event",
        "en": "Events & Hackathons",
        "zh": "活動與黑客松"
      }
    ],
    "items": [
      {
        "slug": "ntu-bme",
        "category": "degree",
        "title": {
          "en": "NTU Department & Institute of Biomedical Engineering",
          "zh": "臺灣大學醫學工程學系暨研究所"
        },
        "summary": {
          "en": "NTU's biomedical engineering department and graduate institute, an interdisciplinary program spanning medicine, EECS, mechanics and materials.",
          "zh": "台大醫工系所，整合醫學、電資、機械與材料的跨領域醫療器材與生醫工程教育。"
        },
        "overview": {
          "en": "For STEM students aiming at medical device R&D, biosensing and rehab engineering. You learn interdisciplinary device and bioengineering work spanning medicine, EECS, mechanics and materials. Offers BS/MS/PhD via university admissions or graduate entrance exams.",
          "zh": "適合想做醫療器材研發、生醫感測、復健工程的理工背景學生；學到整合醫學、電資、機械與材料的跨領域醫療器材與生醫工程。提供學士、碩士、博士，透過大學甄選或碩博士班考試入學。"
        },
        "tags": [
          "degree",
          "biomedical-engineering",
          "paid-public-university",
          "NTU"
        ],
        "url": "https://bme.ntu.edu.tw/"
      },
      {
        "slug": "ntu-bebi",
        "category": "degree",
        "title": {
          "en": "NTU Graduate Institute of Biomedical Electronics and Bioinformatics",
          "zh": "臺灣大學生醫電子與資訊學研究所"
        },
        "summary": {
          "en": "NTU's BEBI institute under the College of EECS, applying electronics and informatics to medical devices and biomedical information platforms.",
          "zh": "台大電資學院下的生醫電資所，把電子與資訊技術應用到醫療器材與生醫資訊平台。"
        },
        "overview": {
          "en": "For EE/CS/biomed backgrounds moving into medical AI, biosignals, and health information systems. You learn to apply electronics and informatics to medical devices and biomedical information platforms. MS/PhD via exam or screening admission.",
          "zh": "適合電機、資工、生醫背景想跨入醫療 AI、生醫訊號、醫療資訊系統者；學到把電子與資訊技術應用到醫療器材與生醫資訊平台。碩博士班，考試或甄試入學。"
        },
        "tags": [
          "degree",
          "biomedical-electronics",
          "medical-AI",
          "paid-public-university",
          "NTU"
        ],
        "url": "https://www.bebi.ntu.edu.tw/"
      },
      {
        "slug": "ntu-mdi",
        "category": "degree",
        "title": {
          "en": "NTU Institute of Medical Device and Imaging",
          "zh": "臺灣大學醫療器材與醫學影像研究所"
        },
        "summary": {
          "en": "NTU College of Medicine institute focused on medical devices and medical imaging, close to clinical-side device and imaging-AI development.",
          "zh": "台大醫學院下專注醫療器材與醫學影像的研究所，貼近臨床端的器材與影像 AI 開發。"
        },
        "overview": {
          "en": "For those combining clinical work, image processing, and device regulation. You learn clinical-side device and imaging-AI development. MS/PhD program under the College of Medicine.",
          "zh": "適合想結合臨床、影像處理與器材法規者；學到貼近臨床端的器材與影像 AI 開發。隸屬醫學院，碩博士班。"
        },
        "tags": [
          "degree",
          "medical-imaging",
          "medical-device",
          "paid-public-university",
          "NTU"
        ],
        "url": "https://www.mc.ntu.edu.tw/mdi/"
      },
      {
        "slug": "nycu-dmc",
        "category": "degree",
        "title": {
          "en": "NYCU Digital Medicine & Smart Healthcare Center",
          "zh": "陽明交通大學數位醫學暨智慧醫療研究中心"
        },
        "summary": {
          "en": "NYCU center integrating medicine, nursing, pharmacy, biology and informatics for digital medicine, with related graduate programs.",
          "zh": "陽明交大整合醫學、護理、藥學、生物與資訊的數位醫學研究平台與相關碩博學程。"
        },
        "overview": {
          "en": "For clinical-data translation and smart-healthcare R&D. You learn to integrate medicine, nursing, pharmacy, biology and informatics for digital medicine. Entry via the NYCU master's entrance exam; confirm specific program tracks with the center.",
          "zh": "適合想做臨床數據轉化、智慧醫療研發者；學到整合醫學、護理、藥學、生物與資訊的數位醫學。可從碩士班考試入學切入，學程細節建議向中心查詢。"
        },
        "tags": [
          "degree",
          "digital-medicine",
          "smart-healthcare",
          "paid-public-university",
          "NYCU"
        ],
        "url": "https://dmc.nycu.edu.tw/"
      },
      {
        "slug": "cmu-dbmi",
        "category": "degree",
        "title": {
          "en": "China Medical University Dept. of Biomedical Informatics",
          "zh": "中國醫藥大學醫療資訊學系"
        },
        "summary": {
          "en": "China Medical University's department of biomedical informatics, training medical-informatics and medical-AI talent.",
          "zh": "中國醫藥大學醫療資訊學系，培育醫療資訊與醫療 AI 人才。"
        },
        "overview": {
          "en": "For those wanting both medical-domain knowledge and IT skills, targeting hospital IT departments or medical-AI firms. You learn combined medical-informatics and medical-AI skills. BS/MS program.",
          "zh": "適合想兼具醫療領域知識與資訊技術、進醫院資訊室或醫療 AI 公司者；學到結合醫療領域知識與資訊技術。學士、碩士。"
        },
        "tags": [
          "degree",
          "medical-informatics",
          "medical-AI",
          "paid-private-university",
          "CMU"
        ],
        "url": "https://dbmi.cmu.edu.tw/"
      },
      {
        "slug": "mol-industry-talent",
        "category": "course",
        "title": {
          "en": "MOL Industry Talent Program (Smart Healthcare AI tracks)",
          "zh": "勞動部產業新尖兵計畫（智慧醫療 AI 等職訓）"
        },
        "summary": {
          "en": "MOL/MOEA youth vocational-training program, including ITRI's Smart Healthcare AI Application Talent course, with heavy training-fee subsidies.",
          "zh": "勞動部與經濟部合作的青年職訓計畫，含工研院智慧醫療 AI 應用技術人才養成班等課程，提供高額訓練費補助。"
        },
        "overview": {
          "en": "For ages 15-29 switching into medical AI or data analytics. You learn biomedical data analysis, medical info systems, and healthcare systems. Browse and apply via the program portal, with subsidies up to NT$100k for eligible applicants.",
          "zh": "適合 15-29 歲想轉職進醫療 AI 或資料分析的青年；學到生醫資料分析、醫用資訊系統、健康照護系統。透過產業新尖兵計畫網查詢報名，符合資格者最高補助達 10 萬元。"
        },
        "tags": [
          "government-training",
          "subsidized",
          "medical-AI",
          "data-analytics",
          "youth"
        ],
        "url": "https://elite.taiwanjobs.gov.tw/"
      },
      {
        "slug": "itri-college",
        "category": "course",
        "title": {
          "en": "ITRI College - Medical Device & Smart Healthcare Courses",
          "zh": "工研院產業學院 - 醫療器材與智慧醫療課程"
        },
        "summary": {
          "en": "ITRI College offers practical courses on device regulation, ISO 13485, and smart-healthcare AI, some counting toward MOHW-recognized training hours.",
          "zh": "工研院產業學院開設醫療器材法規、ISO 13485、智慧醫療 AI 等實務課程，部分為衛福部認可訓練時數。"
        },
        "overview": {
          "en": "For working engineers and QA/RA staff upskilling. You learn device regulation, ISO 13485 and smart-healthcare AI in practice. ITRI is an MOHW-recognized device-personnel training body, with courses eligible for hour registration.",
          "zh": "適合在職工程師、品保或法規人員補強專業；學到醫療器材法規、ISO 13485、智慧醫療 AI 實務。ITRI 為衛福部認可之醫療器材人員訓練單位，課程可申請時數登錄。"
        },
        "tags": [
          "industry-college",
          "paid",
          "partly-subsidized",
          "device-regulation",
          "ITRI"
        ],
        "url": "https://college.itri.org.tw/"
      },
      {
        "slug": "iii-digital-education",
        "category": "course",
        "title": {
          "en": "III Institute for Information Industry - Digital Education (Data Science / AI tracks)",
          "zh": "資策會數位教育研究所（資料科學 / AI / 生成式 AI 認證）"
        },
        "summary": {
          "en": "III's data analytics, AI, and generative-AI course series plus the Generative AI Competency Certification, with applications across healthcare and other domains.",
          "zh": "資策會的資料分析、AI、生成式 AI 系列課程與生成式 AI 能力認證，涵蓋醫療保健等領域應用。"
        },
        "overview": {
          "en": "For career-changers entering data or AI roles. You learn Python, Power BI, and data-science/big-data bootcamps, with healthcare as one application context. Some courses pair with government subsidies.",
          "zh": "適合非本科想轉資料或 AI 職涯者；學到 Python、Power BI、資料科學與大數據實戰，醫療為其應用情境之一。部分課程可搭配政府補助。"
        },
        "tags": [
          "course-platform",
          "paid",
          "partly-subsidized",
          "data-science",
          "AI",
          "III"
        ],
        "url": "https://www.iiiedu.org.tw/"
      },
      {
        "slug": "ntu-ocw-mooc",
        "category": "course",
        "title": {
          "en": "NTU OpenCourseWare & MOOCs",
          "zh": "臺大開放式課程 NTU OCW / 臺大 MOOC x Coursera"
        },
        "summary": {
          "en": "NTU's free OpenCourseWare and NTU MOOCs on Coursera, including biostatistics, medical humanities, and biomedical-related courses.",
          "zh": "台大免費開放式課程與 Coursera 上的台大 MOOC，含生物統計、醫學人文、生醫相關課程。"
        },
        "overview": {
          "en": "For self-learners building foundations on a tight budget. You learn biostatistics, medical humanities and biomedical topics. OCW is free to watch; MOOCs offer paid certificates. The biostatistics course by Prof. Yu-Kang Tu won a national OCW award.",
          "zh": "適合自學者打底、預算有限者；學到生物統計、醫學人文、生醫相關內容。OCW 免費觀看，MOOC 部分提供付費證書。杜裕康老師生物統計學曾獲全國開放教育特優。"
        },
        "tags": [
          "free-OCW",
          "paid-MOOC-certificate",
          "biostatistics",
          "self-study",
          "NTU"
        ],
        "url": "https://ocw.aca.ntu.edu.tw/"
      },
      {
        "slug": "hahow",
        "category": "course",
        "title": {
          "en": "Hahow (Taiwan online course platform)",
          "zh": "Hahow 好學校"
        },
        "summary": {
          "en": "Taiwan's largest online course platform (810k+ members) with Python, data analytics, AI, and design courses for technical upskilling.",
          "zh": "台灣最大線上課程平台（81 萬+ 會員），有 Python、資料分析、AI、設計等課程，可作為技術補強。"
        },
        "overview": {
          "en": "For learners wanting low-barrier Chinese-language tech foundations. You learn Python, data science and AI to pair with domain knowledge (no dedicated healthcare-tech category). Courses are one-time purchase with unlimited replay.",
          "zh": "適合想用中文、低門檻補技術基礎者；學到 Python、資料科學、AI 以搭配醫療領域知識（無專門醫療科技分類）。課程多為一次性買斷、可重複觀看。"
        },
        "tags": [
          "course-platform",
          "paid",
          "NT$400-5000",
          "Chinese-language",
          "Python"
        ],
        "url": "https://hahow.in/"
      },
      {
        "slug": "deeplearning-ai-medicine",
        "category": "course",
        "title": {
          "en": "DeepLearning.AI - AI for Medicine Specialization",
          "zh": "DeepLearning.AI - AI for Medicine 醫療 AI 專項課程"
        },
        "summary": {
          "en": "DeepLearning.AI's three-course AI for Medicine specialization, covering diagnosis, prognosis, and treatment.",
          "zh": "吳恩達 DeepLearning.AI 的三門醫療 AI 專項課程，涵蓋診斷、預後、治療三大主題。"
        },
        "overview": {
          "en": "For those with ML basics specializing in medical AI. You learn medical diagnosis (Course 1), prognosis prediction (Course 2), and treatment recommendations (Course 3), all hands-on. Delivered via Coursera; financial aid can be requested.",
          "zh": "適合有 ML 基礎、想專攻醫療 AI 者；學到醫學診斷、預後預測、治療建議，皆含實作。透過 Coursera 上課，可申請助學金。"
        },
        "tags": [
          "international-online",
          "paid",
          "Coursera-subscription",
          "financial-aid",
          "medical-AI"
        ],
        "url": "https://www.deeplearning.ai/courses/ai-for-medicine-specialization/"
      },
      {
        "slug": "coursera-stanford-ai-healthcare",
        "category": "course",
        "title": {
          "en": "Coursera - AI in Healthcare Specialization (Stanford)",
          "zh": "Coursera - AI in Healthcare 醫療 AI 專項（史丹佛）"
        },
        "summary": {
          "en": "Stanford School of Medicine's specialization on safely and ethically bringing AI into the clinic.",
          "zh": "史丹佛醫學院的醫療 AI 專項課程，從臨床安全與倫理角度教如何把 AI 帶進臨床。"
        },
        "overview": {
          "en": "For both clinicians and CS professionals, fostering cross-discipline collaboration. You learn EHR/image modeling, risk stratification, AI regulation and ethics, with a capstone. ACCME CME credit available; financial aid can be requested.",
          "zh": "同時面向醫護與資工背景，促進跨領域協作；學到 EHR 與影像資料建模、風險分層、AI 法規與倫理，含 Capstone。可獲 ACCME 繼續醫學教育學分，可申請助學金。"
        },
        "tags": [
          "international-online",
          "paid",
          "Coursera-subscription",
          "financial-aid",
          "CME-credit",
          "Stanford"
        ],
        "url": "https://www.coursera.org/specializations/ai-healthcare"
      },
      {
        "slug": "edx-health-informatics",
        "category": "course",
        "title": {
          "en": "edX - Health Informatics Courses (MIT/Harvard/GTx)",
          "zh": "edX - Health Informatics 課程群（MIT/Harvard/GTx 等）"
        },
        "summary": {
          "en": "Health-informatics courses from top schools on edX, e.g., MITx Collaborative Data Science for Healthcare and GTx Health Informatics.",
          "zh": "edX 上多所名校的醫療資訊課程，如 MITx Collaborative Data Science for Healthcare、GTx Health Informatics。"
        },
        "overview": {
          "en": "For learning health informatics, EHR, interoperability standards and health data science. You can audit courses free or pay for certificates, with online master's options also available.",
          "zh": "適合想補健康資訊、EHR、互通性標準、健康資料科學者；可免費旁聽，證書付費，也有線上碩士學程選項。"
        },
        "tags": [
          "international-online",
          "free-audit",
          "paid-certificate",
          "health-informatics",
          "edX"
        ],
        "url": "https://www.edx.org/learn/health-informatics"
      },
      {
        "slug": "bmes-roc",
        "category": "cert",
        "title": {
          "en": "Biomedical Engineering Society of the ROC (BME professional exam)",
          "zh": "中華民國生物醫學工程學會（醫工專業人員證書甄試）"
        },
        "summary": {
          "en": "Taiwan's main biomedical engineering society, running the annual conference and the BME Professional Certificate exam, a local credential for practitioners.",
          "zh": "台灣醫工最主要學會，辦理年會與醫學工程專業人員證書甄試，是醫工從業者的本土認證。"
        },
        "overview": {
          "en": "For BME students and hospital clinical-engineering staff. You earn a recognized local BME practitioner credential. Membership requires a relevant degree or 1+ year of related work; the 2025 annual meeting was held at Tzu Chi University, Hualien.",
          "zh": "適合醫工系所學生、醫院醫工室人員；取得本土醫工從業認證。個人會員需相關科系畢業或從事相關工作一年以上，2025 年會於花蓮慈濟大學舉行。"
        },
        "tags": [
          "certification",
          "society",
          "paid",
          "membership-fee",
          "biomedical-engineering"
        ],
        "url": "https://www.bmes.org.tw/"
      },
      {
        "slug": "tami-medical-informatics-cert",
        "category": "cert",
        "title": {
          "en": "TAMI Medical Informatics Manager/Analyst Certification",
          "zh": "台灣醫學資訊學會 + 醫學資訊管理師／分析師證照"
        },
        "summary": {
          "en": "Taiwan's core medical-informatics society issuing the Medical Informatics Manager/Analyst certification, and host of MedInfo 2025.",
          "zh": "台灣醫學資訊領域核心學會，發照醫學資訊管理師／分析師，並主辦 MedInfo 2025 世界醫學資訊大會。"
        },
        "overview": {
          "en": "Useful for hospital IT and HIS vendor roles. You are tested on medical informatics, terminology, information management, and standards/ethics/law. The Manager exam is open to college students/bachelors; the Analyst requires the Manager exam or a relevant graduate degree; certificates are valid 3 years.",
          "zh": "對想進醫院資訊室、HIS 廠商者實用；考醫學資訊學、醫學術語、資訊管理、標準倫理法律。管理師報考資格為大專在學或學士以上，分析師需先通過管理師檢定或具相關碩博學位，證書效期 3 年。"
        },
        "tags": [
          "certification",
          "society",
          "paid",
          "exam-fee",
          "medical-informatics",
          "3-year-validity"
        ],
        "url": "https://www.medinfo.org.tw/html/mimanager.php"
      },
      {
        "slug": "rac-raps",
        "category": "cert",
        "title": {
          "en": "RAC (Regulatory Affairs Certification) by RAPS",
          "zh": "RAC（Regulatory Affairs Certification）法規事務認證"
        },
        "summary": {
          "en": "RAPS's international regulatory-affairs certification, the benchmark credential for RA careers in drugs and devices.",
          "zh": "RAPS 發的醫藥／醫材法規事務國際認證，是法規事務（RA）職涯的指標證照。"
        },
        "overview": {
          "en": "Especially valuable for healthcare tech, highly recommended for device market access, registration and regulatory strategy. You gain benchmark RA credentials. Taiwan offers RAC prep courses via RAPS-TW and providers such as ITRI and biotech centers.",
          "zh": "對醫療科技特別有用，想做醫材上市、查驗登記、法規策略者強烈推薦；取得法規事務指標認證。台灣有 RAPS-TW 與業者（如工研院、生技中心）開設 RAC 考前培訓班。"
        },
        "tags": [
          "certification",
          "paid",
          "exam-and-training-fee",
          "regulatory-affairs",
          "medical-device"
        ],
        "url": "https://www.raps-in-taiwan.org.tw/rac.asp"
      },
      {
        "slug": "iso-13485-auditor",
        "category": "cert",
        "title": {
          "en": "ISO 13485 Medical Device QMS Auditor Training",
          "zh": "ISO 13485 醫療器材品質管理系統稽核員訓練"
        },
        "summary": {
          "en": "Internal-auditor and Lead Auditor training for the medical-device QMS standard, offered by SGS, CPC, ISO Leader, ITRI and others.",
          "zh": "針對醫療器材品質管理系統的內部稽核員與主導稽核員訓練，由 SGS、CPC、領導力企管、工研院等提供。"
        },
        "overview": {
          "en": "Especially valuable for healthcare tech, essential for device-company QA/RA and manufacturing. You learn to audit the medical-device QMS standard. Lead Auditor courses follow ISO 19011/17021, some covering MOHW QMS clauses with hour registration.",
          "zh": "對醫療科技特別有用，醫材公司品保／法規、製造端必備；學到稽核醫療器材品質管理系統。主導稽核員課程依 ISO 19011/17021 規範，部分含衛福部 QMS 條文與時數登錄。"
        },
        "tags": [
          "certification",
          "course",
          "paid",
          "QMS",
          "medical-device",
          "auditor"
        ],
        "url": "https://campaigns.sgs.com/zh-tw/taiwan/sgs-in-taiwan/training-services/iso-13485-quality-management-systems-for-medical-devices-internal-auditor-training"
      },
      {
        "slug": "pmp",
        "category": "cert",
        "title": {
          "en": "Project Management Professional (PMP)",
          "zh": "PMP 專案管理師認證"
        },
        "summary": {
          "en": "PMI's international project-management certification; the PMI Taiwan chapter and many training providers operate locally.",
          "zh": "PMI 的國際專案管理認證，台灣有 PMI 台灣分會與多家培訓機構。"
        },
        "overview": {
          "en": "Useful but not healthcare-specific, good for PM/PMO tracks. You gain project-management skills needed for device/digital-health product development, clinical-trial projects and hospital IT rollouts. Local prep is available via the PMI Taiwan chapter and providers.",
          "zh": "對醫療科技有用但非專屬，適合想走 PM/PMO 路線者；取得醫材／數位健康產品開發、臨床試驗專案、醫院資訊導入所需的專案管理能力。台灣有 PMI 台灣分會與多家培訓機構。"
        },
        "tags": [
          "certification",
          "paid",
          "exam-and-training-fee",
          "project-management",
          "PMI"
        ],
        "url": "https://www.pmi.org.tw/"
      },
      {
        "slug": "cloud-certs",
        "category": "cert",
        "title": {
          "en": "Cloud Certifications (AWS/GCP/Azure)",
          "zh": "雲端證照 AWS / GCP / Azure（含醫療資料服務）"
        },
        "summary": {
          "en": "Engineering/ML/data certs across the three major clouds, each with healthcare data services (AWS HealthLake, GCP Healthcare API, Azure Health).",
          "zh": "三大雲的工程／ML／資料證照，並各有醫療資料服務（AWS HealthLake、GCP Healthcare API、Azure Health）。"
        },
        "overview": {
          "en": "Useful for healthcare tech. You learn cloud ML/data engineering plus provider healthcare data services; GCP Healthcare API and AWS HealthLake natively support FHIR/DICOM/HL7v2 and are HIPAA-eligible. Suggested path: earn an ML/data cert first (AWS ML Specialty, Azure Data Scientist Associate, GCP Professional Data Engineer), then learn the healthcare data services.",
          "zh": "對醫療科技有用；學到雲端 ML／資料工程與各家醫療資料服務，GCP Healthcare API 與 AWS HealthLake 原生支援 FHIR/DICOM/HL7v2 且 HIPAA-eligible。建議先考 ML／Data 證照（如 AWS ML Specialty、Azure Data Scientist Associate、GCP Professional Data Engineer），再學各家醫療資料服務。"
        },
        "tags": [
          "certification",
          "paid",
          "US$150-300-per-exam",
          "cloud",
          "FHIR",
          "ML"
        ],
        "url": "https://aws.amazon.com/health/"
      },
      {
        "slug": "cdmp-dama",
        "category": "cert",
        "title": {
          "en": "Certified Data Management Professional (DAMA International)",
          "zh": "CDMP 資料管理專業認證（DAMA）"
        },
        "summary": {
          "en": "DAMA International's data-management/governance certification, with prep courses available in Taiwan (e.g., Data Governance Academy).",
          "zh": "DAMA 國際發的資料管理／資料治理認證，台灣有資料治理學院等提供考前培訓。"
        },
        "overview": {
          "en": "Useful but not healthcare-specific, good for data-governance/engineering tracks. You learn data governance, quality and privacy compliance across 14 knowledge areas as medical data governance grows in importance. Certificates are valid 3 years; prep is available via the Data Governance Academy.",
          "zh": "對醫療科技有用但非專屬，適合走資料治理／資料工程者；涵蓋 14 大知識領域，學到醫療資料治理、資料品質與隱私合規。證書效期 3 年，台灣有資料治理學院等提供考前培訓。"
        },
        "tags": [
          "certification",
          "paid",
          "exam-and-training-fee",
          "data-governance",
          "3-year-validity",
          "DAMA"
        ],
        "url": "https://datadgpro.com.tw/courses/cdmp-course"
      },
      {
        "slug": "security-certs-cissp-ceh",
        "category": "cert",
        "title": {
          "en": "Security Certs CISSP / CEH (Healthcare Security)",
          "zh": "資安證照 CISSP / CEH（醫療資安方向）"
        },
        "summary": {
          "en": "CISSP (security management) and CEH (ethical hacking) are benchmark security certs relevant to hospital and medical-device security.",
          "zh": "CISSP（資安管理）與 CEH（道德駭客）是國際資安指標認證，對應醫院與醫材資安需求。"
        },
        "overview": {
          "en": "Useful for healthcare tech, good for healthcare-security/compliance tracks. You learn security management and ethical hacking for personal-data protection and device/OT network security, areas of growing demand after new healthcare security regulations.",
          "zh": "對醫療科技有用，適合想走醫療資安／合規者；學到資安管理與道德駭客，因應醫療資安新法後醫院與醫材廠對個資保護、醫材網路安全（OT 安全）大增的需求。"
        },
        "tags": [
          "certification",
          "paid",
          "exam-and-training-fee",
          "cybersecurity",
          "compliance"
        ],
        "url": "https://www.isc2.org/Certifications/CISSP"
      },
      {
        "slug": "clinical-research-acrp-socra",
        "category": "cert",
        "title": {
          "en": "Clinical Research Certifications (ACRP / SOCRA, incl. GCP)",
          "zh": "臨床研究證照 ACRP CCRA / SOCRA CCRP（含 GCP）"
        },
        "summary": {
          "en": "ACRP (CCRA) and SOCRA (CCRP) are international clinical-research-professional certifications centered on GCP (Good Clinical Practice).",
          "zh": "ACRP（CCRA）與 SOCRA（CCRP）是國際臨床研究人員認證，核心為 GCP（優良臨床試驗規範）。"
        },
        "overview": {
          "en": "Useful for healthcare tech in clinical-trial monitoring (CRA), clinical research and device/drug clinical work. You learn GCP-centered clinical research practice. In Taiwan, GCP training is typically accessed via hospital clinical-trial centers, CROs and pharma; specific local CRA pathways are TBD.",
          "zh": "對醫療科技有用，想做臨床試驗監測（CRA）、臨床研究、醫材／藥品臨床端者適用；學到以 GCP 為核心的臨床研究實務。台灣多透過醫院臨床試驗中心、CRO 與藥廠接觸 GCP 訓練，本地 CRA 培訓管道待查。"
        },
        "tags": [
          "certification",
          "paid",
          "exam-fee",
          "clinical-research",
          "GCP"
        ],
        "url": "https://acrpnet.org/certifications/"
      },
      {
        "slug": "ibmi",
        "category": "community",
        "title": {
          "en": "Institute for Biotechnology and Medicine Industry (IBMI)",
          "zh": "國家生技醫療產業策進會（生策會 / 生策中心）"
        },
        "summary": {
          "en": "Taiwan's most influential biotech & healthcare industry-promotion body, organizer of the Taiwan Healthcare Expo.",
          "zh": "台灣生技醫療產業最具影響力的策進組織，主辦台灣醫療科技展（Healthcare Expo Taiwan）。"
        },
        "overview": {
          "en": "For mapping the whole industry and meeting company/hospital contacts. You gain industry overview and networking via the Taiwan Healthcare Expo (since 2017; 2025 edition: 600+ firms, 2,100 booths), held each December at Taipei Nangang Exhibition Center with forums and startup showcases. Founded 2002. Most expo entry is free; membership is separate.",
          "zh": "適合想了解產業全貌、找企業／醫院人脈者；透過台灣醫療科技展（2017 年起，2025 年逾 600 家企業、2,100 個攤位）取得產業全貌與人脈，展會 12 月於台北南港展覽館舉行，含論壇與新創展示。2002 年成立。展會多數免費入場，會員另計。"
        },
        "tags": [
          "community",
          "industry-association",
          "free-expo-entry",
          "networking",
          "Healthcare-Expo"
        ],
        "url": "https://ibmi.taiwan-healthcare.org/zh/"
      },
      {
        "slug": "fhir-taiwan",
        "category": "community",
        "title": {
          "en": "HL7 FHIR Standard + FHIR Taiwan Community",
          "zh": "HL7 FHIR 標準 + FHIR Taiwan 社群"
        },
        "summary": {
          "en": "FHIR is the modern healthcare interoperability standard; FHIR Taiwan offers a free public FHIR test server, registry, and community resources.",
          "zh": "FHIR 是現代醫療資訊交換標準；FHIR Taiwan 提供免費 FHIR 測試伺服器、Registry 與社群資源。"
        },
        "overview": {
          "en": "Highly practical, a must-learn for healthcare data integration and HIS/EHR interoperability. You access Taiwan's first public HAPI FHIR test server (hapi.fhir.tw) and Taiwan FHIR Registry with free subdomains. Community resources are free; DICOM/IHE/HL7 Taiwan also runs paid FHIR training and the Medical Informatics Connectathon.",
          "zh": "對醫療科技極實用，做醫療資料整合、HIS／EHR 互通者必學；可用台灣首座公開 HAPI FHIR 測試伺服器（hapi.fhir.tw）與 Taiwan FHIR Registry，免費申請二級域名。社群資源免費，DICOM/IHE/HL7 Taiwan 另有付費 FHIR 教育訓練與醫學資訊聯測 Connectathon。"
        },
        "tags": [
          "community",
          "standard",
          "free-community-resources",
          "paid-training",
          "FHIR",
          "interoperability"
        ],
        "url": "https://fhir.tw/"
      },
      {
        "slug": "monai",
        "category": "community",
        "title": {
          "en": "MONAI - Medical Open Network for AI",
          "zh": "MONAI（醫療影像 AI 開源框架與社群）"
        },
        "summary": {
          "en": "A PyTorch-based open-source medical-imaging AI framework and research community started by NVIDIA and King's College London.",
          "zh": "NVIDIA 與倫敦國王學院發起的 PyTorch 醫療影像 AI 開源框架與研究社群。"
        },
        "overview": {
          "en": "For medical-imaging AI researchers and developers. You use MONAI Core, Label, Deploy SDK and Model Zoo, maintained by 30+ institutions (NVIDIA, NIH, Mayo Clinic, Stanford). Open source on GitHub, free to use, with community contribution.",
          "zh": "適合做醫療影像 AI 研究／開發者；使用 MONAI Core、Label、Deploy SDK、Model Zoo，由 NVIDIA、NIH、Mayo Clinic、Stanford 等 30+ 機構維護。GitHub 開源、免費使用，可參與社群與貢獻。"
        },
        "tags": [
          "community",
          "open-source",
          "free",
          "medical-imaging-AI",
          "PyTorch"
        ],
        "url": "https://github.com/Project-MONAI/MONAI"
      },
      {
        "slug": "dicom-ihe-hl7-taiwan",
        "category": "community",
        "title": {
          "en": "DICOM / IHE / HL7 Education in Taiwan",
          "zh": "DICOM / IHE / HL7 Education in Taiwan"
        },
        "summary": {
          "en": "Taiwan's medical-imaging informatics standards community, running FHIR/DICOM/IHE training and the Taiwan Medical Informatics Connectathon.",
          "zh": "台灣醫學影像資訊標準推廣社群，辦理 FHIR、DICOM、IHE 教育訓練與台灣醫學資訊聯測 Connectathon。"
        },
        "overview": {
          "en": "For hands-on work with interoperability standards (FHIR/DICOMWeb APIs). You join training and the Connectathon, run in partnership with TAMI, the IHE association and the nursing-informatics society. Free for some students (NYCU, CYCU, NCKU, Tzu Chi); courses otherwise paid (from NT$1,000 members / NT$2,500 non-members).",
          "zh": "適合想實作醫療互通性標準（FHIR/DICOMWeb API）者；參與訓練與聯測，與台灣醫學資訊學會、IHE 協會、護理資訊學會合作推動。部分學生（陽明、中原、成大、慈濟）免費，課程付費（會員 NT$1,000、非會員 NT$2,500 起）。"
        },
        "tags": [
          "community",
          "course",
          "free-for-some-students",
          "paid-courses",
          "DICOM",
          "IHE",
          "interoperability"
        ],
        "url": "https://dicomtaiwan.wordpress.com/"
      },
      {
        "slug": "gbi-monthly",
        "category": "media",
        "title": {
          "en": "GBI Monthly / Global Bio & Investment",
          "zh": "環球生技月刊 GBI Monthly"
        },
        "summary": {
          "en": "The longest-running, widest-reaching Chinese-language biomedical industry media, with a monthly magazine, daily Bio News Radar, podcast, and newsletter.",
          "zh": "華文生醫產業歷史最久、覆蓋率最高的專業媒體，含月刊、每日生醫新聞雷達、Podcast 與電子報。"
        },
        "overview": {
          "en": "For continuously tracking the biotech/healthcare industry, investment and policy. You get an independent editorial team's coverage and a biomedical-company directory. Daily news is free; in-depth content is partly paid.",
          "zh": "適合想持續追蹤生技醫療產業、投資與政策動態者；取得獨立編採團隊報導與生醫公司名錄。每日新聞免費，深度內容部分付費。"
        },
        "tags": [
          "media",
          "newsletter",
          "free-daily-news",
          "paid-subscription",
          "biomedical-industry"
        ],
        "url": "https://news.gbimonthly.com/"
      },
      {
        "slug": "businessnext",
        "category": "media",
        "title": {
          "en": "BusinessNext",
          "zh": "數位時代 BusinessNext"
        },
        "summary": {
          "en": "One of Taiwan's most influential tech-business media outlets, regularly covering digital health, healthtech startups and trends.",
          "zh": "台灣最具影響力的科技財經媒體之一，常報導數位健康、醫療科技新創與趨勢。"
        },
        "overview": {
          "en": "For understanding the business side of healthcare tech, startup funding and industry trends. You read coverage of digital health, healthtech startups and trends. Most online articles are free; the magazine and premium content are paid.",
          "zh": "適合想了解醫療科技商業面、新創募資、產業趨勢者；閱讀數位健康、醫療科技新創與趨勢報導。多數線上文章免費，雜誌與深度內容付費。"
        },
        "tags": [
          "media",
          "free-some-articles",
          "paid-subscription",
          "tech-business",
          "startups"
        ],
        "url": "https://www.bnext.com.tw/"
      },
      {
        "slug": "the-reporter-health",
        "category": "media",
        "title": {
          "en": "The Reporter (Health & Medical coverage)",
          "zh": "報導者 The Reporter（醫療專題）"
        },
        "summary": {
          "en": "Taiwan's first nonprofit foundation-backed investigative media outlet, with health coverage spanning public health, medical policy, and ethics.",
          "zh": "台灣首個公益基金會成立的非營利深度報導媒體，醫療專題涵蓋公衛、醫療政策與倫理。"
        },
        "overview": {
          "en": "For understanding medical policy, ethics and social context rather than pure technology. You read critical in-depth health journalism. Completely free to read.",
          "zh": "適合想理解醫療政策、倫理與社會脈絡（而非純技術）者；閱讀醫療領域的批判性深度報導。完全免費閱讀。"
        },
        "tags": [
          "media",
          "free",
          "investigative-journalism",
          "policy",
          "ethics"
        ],
        "url": "https://www.twreporter.org/tag/576255c1d55348100006137a"
      },
      {
        "slug": "book-ai-healthcare-future",
        "category": "media",
        "title": {
          "en": "AI Healthcare Future by You-Chen Lee",
          "zh": "《AI 醫療大未來》李友專"
        },
        "summary": {
          "en": "Taiwan's first book systematically discussing medical-AI trends, by a medical-AI pioneer with dual medicine/IT backgrounds.",
          "zh": "台灣第一本系統性討論醫療 AI 趨勢的專書，作者為兼具醫學與資訊背景的醫療 AI 先驅。"
        },
        "overview": {
          "en": "For medical-AI beginners. You build domain awareness from front-line clinical observation, with standalone chapters friendly to non-technical readers. A good starting point for the field.",
          "zh": "適合醫療 AI 入門讀者；建立來自臨床第一線觀察的領域認知，章節可獨立閱讀、對非技術背景者友善。建立領域認知的好起點。"
        },
        "tags": [
          "book",
          "paid",
          "medical-AI",
          "beginner-friendly"
        ],
        "url": "https://www.books.com.tw/products/0010799181"
      },
      {
        "slug": "book-from-ai-to-smart-healthcare",
        "category": "media",
        "title": {
          "en": "From AI to Smart Healthcare by Rung-Shiang Chiang",
          "zh": "《從 AI 到智慧醫療》蔣榮先"
        },
        "summary": {
          "en": "Introduces smart-healthcare applications across 9 dimensions and 30 topics, by an AI/IT expert whose team won a WHO COVID-19 hackathon.",
          "zh": "以 9 大面向、30 個議題介紹智慧醫療應用，作者為帶隊在 WHO 防疫黑客松奪冠的 AI 資訊專家。"
        },
        "overview": {
          "en": "For a broad understanding of smart-healthcare applications. You learn across mobile health, EHR, online consultation, precision medicine, smart wards and more, organized into 9 dimensions and 30 topics.",
          "zh": "適合想全面了解智慧醫療應用面者；學到行動醫療、電子病歷、線上問診、精準醫療、智慧病房等主題，以 9 大面向、30 個議題組織。"
        },
        "tags": [
          "book",
          "paid",
          "smart-healthcare",
          "overview"
        ],
        "url": "https://www.books.com.tw/products/0010857668"
      },
      {
        "slug": "hsil-hackathon-taiwan",
        "category": "event",
        "title": {
          "en": "HSIL Hackathon (Taiwan Hub)",
          "zh": "全球健康創新黑客松 HSIL Hackathon（台灣 Hub）"
        },
        "summary": {
          "en": "A global health hackathon by Harvard T.H. Chan School's Health Systems Innovation Lab; the 2026 Taiwan Hub is hosted at NTU College of Public Health.",
          "zh": "哈佛陳曾熙公衛學院 Health Systems Innovation Lab 發起的全球健康黑客松，2026 台灣 Hub 於台大公衛學院舉辦。"
        },
        "overview": {
          "en": "For interdisciplinary students/early-career people to prototype deployable AI health solutions. You join a two-day sprint running simultaneously across 36 countries, drawing medical, engineering, data-science and public-health talent. A strong entry point for networking and portfolio building. Registration fee TBD.",
          "zh": "適合跨領域學生／新鮮人練習落地 AI 健康解方；參加橫跨全球 36 國同步、匯集醫療、工程、資料科學與公衛人才的兩天提案賽。是建立人脈與作品集的好起點。報名費待查。"
        },
        "tags": [
          "hackathon",
          "free-or-TBD-fee",
          "AI-health",
          "networking",
          "portfolio",
          "Harvard-HSIL"
        ],
        "url": "https://hsilhackathontaiwan.com/"
      },
      {
        "slug": "future-medical-design-hackathon",
        "category": "event",
        "title": {
          "en": "Future Medical Design Hackathon",
          "zh": "未來醫療設計黑客松"
        },
        "summary": {
          "en": "An AI co-creation sprint hackathon at TMU's Shuang-Ho campus (2026 edition aimed at high-school students nationwide).",
          "zh": "於臺北醫學大學雙和校區舉辦的 AI 共創極限競賽（2026 場次面向全國高中生）。"
        },
        "overview": {
          "en": "Good for students to experience medical design and AI co-creation. You join a 7-hour sprint with prizes and certificates. More advanced learners should watch for university/industry-oriented medical hackathons. Free to enter.",
          "zh": "適合學生入門體驗醫療設計與 AI 共創；參加 7 小時極限賽，提供獎金與證書。較高階者可關注其他面向大專／業界的醫療黑客松。免費參加。"
        },
        "tags": [
          "hackathon",
          "free",
          "students",
          "medical-design",
          "AI-co-creation",
          "TMU"
        ],
        "url": "https://bhuntr.com/tw/competitions/yq1okkwphc1cd1rcb2"
      },
      {
        "slug": "medical-taiwan-expo",
        "category": "event",
        "title": {
          "en": "Medical Taiwan Expo",
          "zh": "台灣國際醫療暨健康照護展 MEDICAL TAIWAN"
        },
        "summary": {
          "en": "One of Asia-Pacific's flagship medical exhibitions, focused on smart healthcare, digital health and medical devices.",
          "zh": "亞太指標性醫療展之一，聚焦智慧醫療、數位健康與醫療器材。"
        },
        "overview": {
          "en": "For viewing products and meeting supply-chain/vendor contacts. You see device manufacturing offerings and build vendor networks; it complements IBMI's Healthcare Expo (which leans hospital/biotech). Free with professional-visitor registration.",
          "zh": "適合想看產品、找供應鏈與廠商人脈者；看器材製造端產品並建立廠商人脈，與生策會的醫療科技展（偏醫院／生技端）互補。專業觀眾登記免費。"
        },
        "tags": [
          "expo",
          "free-professional-registration",
          "medical-device",
          "supply-chain",
          "networking"
        ],
        "url": "https://www.medicaltaiwan.com.tw/zh-tw/index.html"
      }
    ]
  },
  {
    "slug": "practice",
    "layout": "practice",
    "icon": "quiz",
    "title": {
      "en": "Practice & Study",
      "zh": "互動練習"
    },
    "subtitle": {
      "en": "Test and reinforce your grasp of Taiwan healthtech regulation, interoperability standards, roles, and industry facts with a quiz, flashcards, and a bilingual glossary.",
      "zh": "用測驗、字卡與中英術語表,檢測並鞏固你對台灣醫療科技法規、互通標準、職務與產業常識的掌握。"
    },
    "quiz": [
      {
        "q": {
          "en": "When did Taiwan's Medical Device Act take effect, separating devices from the Pharmaceutical Affairs Act?",
          "zh": "台灣《醫療器材管理法》(使醫材脫離《藥事法》獨立管理)於何時正式施行?"
        },
        "options": [
          {
            "en": "1 May 2021",
            "zh": "2021 年 5 月 1 日"
          },
          {
            "en": "1 January 2020",
            "zh": "2020 年 1 月 1 日"
          },
          {
            "en": "1 July 2025",
            "zh": "2025 年 7 月 1 日"
          },
          {
            "en": "12 August 2022",
            "zh": "2022 年 8 月 12 日"
          }
        ],
        "answer": 0,
        "explain": {
          "en": "The Medical Device Act took effect on 2021-05-01 (promulgated 2020-01-15), making devices a standalone statute no longer governed by the Pharmaceutical Affairs Act.",
          "zh": "《醫療器材管理法》於 2021-05-01 施行(2020-01-15 公布),自此醫材成為獨立專法,不再適用《藥事法》。"
        }
      },
      {
        "q": {
          "en": "How many risk classes does Taiwan use to classify medical devices?",
          "zh": "台灣將醫療器材依風險分為幾個等級?"
        },
        "options": [
          {
            "en": "Two classes",
            "zh": "2 個等級"
          },
          {
            "en": "Three classes (I/II/III)",
            "zh": "3 個等級(第一/二/三級)"
          },
          {
            "en": "Four classes",
            "zh": "4 個等級"
          },
          {
            "en": "Sixteen classes",
            "zh": "16 個等級"
          }
        ],
        "answer": 1,
        "explain": {
          "en": "Devices are risk-classified into Class I (low), II (medium) and III (high). The 16 is the number of functional categories, not risk classes.",
          "zh": "醫材依風險分第一級(低)、第二級(中)、第三級(高)共 3 級;16 是功能分類的大類數,不是風險等級。"
        }
      },
      {
        "q": {
          "en": "Under IEC 62304, what determines the depth of documentation and testing required?",
          "zh": "依 IEC 62304,軟體文件與測試的深度由什麼決定?"
        },
        "options": [
          {
            "en": "The programming language used",
            "zh": "使用的程式語言"
          },
          {
            "en": "The software safety class (A/B/C)",
            "zh": "軟體安全分級(A/B/C)"
          },
          {
            "en": "The company's revenue",
            "zh": "公司營收規模"
          },
          {
            "en": "The number of users",
            "zh": "使用者人數"
          }
        ],
        "answer": 1,
        "explain": {
          "en": "IEC 62304 scales process rigor by software safety class A (no injury), B (non-serious injury), C (death/serious injury), linked to ISO 14971 risk management.",
          "zh": "IEC 62304 依軟體安全分級 A(不造成傷害)、B(非嚴重傷害)、C(死亡或嚴重傷害)決定流程嚴謹度,並與 ISO 14971 風險管理連動。"
        }
      },
      {
        "q": {
          "en": "Which standard is the foundational risk-management standard that IEC 62304 normatively references?",
          "zh": "哪一項標準是 IEC 62304 以規範性引用援用的醫材風險管理基礎標準?"
        },
        "options": [
          {
            "en": "ISO 13485",
            "zh": "ISO 13485"
          },
          {
            "en": "IEC 62366",
            "zh": "IEC 62366"
          },
          {
            "en": "ISO 14971",
            "zh": "ISO 14971"
          },
          {
            "en": "ISO 27001",
            "zh": "ISO 27001"
          }
        ],
        "answer": 2,
        "explain": {
          "en": "ISO 14971 sets the device risk-management process; IEC 62304 directly references it normatively. ISO 13485 is the QMS and IEC 62366 is usability.",
          "zh": "ISO 14971 建立醫材風險管理流程,IEC 62304 直接以規範性引用援用之;ISO 13485 是品質系統、IEC 62366 是可用性。"
        }
      },
      {
        "q": {
          "en": "What is the single most important first step for a software vendor under Taiwan's medical-software rules?",
          "zh": "對軟體業者而言,台灣醫用軟體法規最關鍵的第一步是什麼?"
        },
        "options": [
          {
            "en": "Apply for NHI reimbursement",
            "zh": "申請健保給付"
          },
          {
            "en": "Run the attribute determination (is it a regulated SaMD and which class)",
            "zh": "做屬性判定(是否屬醫療器材軟體、屬第幾等級)"
          },
          {
            "en": "Build a physical production line",
            "zh": "建立實體產線"
          },
          {
            "en": "Hire a Notified Body",
            "zh": "聘請歐盟驗證機構"
          }
        ],
        "answer": 1,
        "explain": {
          "en": "Using the Medical Software Classification and Grading Reference Guideline to decide whether the product is a regulated SaMD and its class is the critical first step that sets the whole regulatory path.",
          "zh": "先以「醫用軟體分類分級參考指引」判斷是否為醫療器材軟體及其分級,是決定整條法規路徑的關鍵第一步。"
        }
      },
      {
        "q": {
          "en": "Which is the modern HL7 standard, built on a RESTful API and resources, that Taiwan promotes as the official direction for health-data interoperability?",
          "zh": "哪一項是台灣作為醫療資料互通官方方向、以 RESTful API 與資源為基礎的現代 HL7 標準?"
        },
        "options": [
          {
            "en": "DICOM",
            "zh": "DICOM"
          },
          {
            "en": "FHIR",
            "zh": "FHIR"
          },
          {
            "en": "ICD-10",
            "zh": "ICD-10"
          },
          {
            "en": "SNOMED CT",
            "zh": "SNOMED CT"
          }
        ],
        "answer": 1,
        "explain": {
          "en": "FHIR (Fast Healthcare Interoperability Resources) is the HL7 web standard at the core of TW Core IG and Taiwan's national interoperability push; DICOM is for imaging and the others are terminologies.",
          "zh": "FHIR 是 HL7 的 Web 標準,為 TW Core IG 與台灣全國互通推動的核心;DICOM 用於影像,其餘為術語標準。"
        }
      },
      {
        "q": {
          "en": "Which standard is used for medical imaging transmission and storage (e.g., CT/MRI/X-ray)?",
          "zh": "哪一項標準用於醫療影像(如 CT/MRI/X 光)的傳輸與儲存?"
        },
        "options": [
          {
            "en": "LOINC",
            "zh": "LOINC"
          },
          {
            "en": "HL7 v2",
            "zh": "HL7 v2"
          },
          {
            "en": "DICOM",
            "zh": "DICOM"
          },
          {
            "en": "RxNorm",
            "zh": "RxNorm"
          }
        ],
        "answer": 2,
        "explain": {
          "en": "DICOM is the imaging transmission/storage standard; EEC PACS exchange in Taiwan requires DICOM 3.0. LOINC codes lab/observations, RxNorm codes drugs.",
          "zh": "DICOM 是影像傳輸/儲存標準;台灣 EEC 的 PACS 影像交換要求符合 DICOM 3.0。LOINC 用於檢驗/觀察,RxNorm 用於藥品。"
        }
      },
      {
        "q": {
          "en": "What does the FDA's Predetermined Change Control Plan (PCCP) allow for AI/ML devices?",
          "zh": "FDA 的預定變更管控計畫(PCCP)允許 AI/ML 醫材做什麼?"
        },
        "options": [
          {
            "en": "Pre-authorize future model changes at submission, avoiding a new filing for each change",
            "zh": "在送件時預先核定未來模型變更,免逐次重新送件"
          },
          {
            "en": "Skip clinical evaluation entirely",
            "zh": "完全免除臨床評估"
          },
          {
            "en": "Automatically gain NHI reimbursement",
            "zh": "自動取得健保給付"
          },
          {
            "en": "Bypass the QMS requirement",
            "zh": "免除品質系統要求"
          }
        ],
        "answer": 0,
        "explain": {
          "en": "A PCCP (Description of Modifications, Modification Protocol, Impact Assessment) lets AI/ML devices pre-authorize defined future changes, aligned with the GMLP framework.",
          "zh": "PCCP(變更描述、變更協議、影響評估)讓 AI/ML 醫材預先核定特定未來變更,並配合 GMLP 良好機器學習實務框架。"
        }
      },
      {
        "q": {
          "en": "In Taiwan, what does the CADe/CADx guidance distinguish between?",
          "zh": "台灣的 CADe/CADx 指引主要區分哪兩者?"
        },
        "options": [
          {
            "en": "Hardware vs software",
            "zh": "硬體與軟體"
          },
          {
            "en": "CADe (lesion detection support) vs CADx (classification/diagnosis support)",
            "zh": "CADe(協助偵測病灶)與 CADx(協助分類/診斷)"
          },
          {
            "en": "Domestic vs imported devices",
            "zh": "國產與進口醫材"
          },
          {
            "en": "Class I vs Class II",
            "zh": "第一級與第二級"
          }
        ],
        "answer": 1,
        "explain": {
          "en": "The guidance (latest revision 2025-08-12) distinguishes CADe, which supports detecting lesions, from CADx, which supports classification/diagnosis, with specific dataset and reader-study expectations.",
          "zh": "該指引(最新 2025-08-12 修正)區分協助偵測病灶的 CADe 與協助分類/診斷的 CADx,並對資料集分割與讀片者研究有具體要求。"
        }
      },
      {
        "q": {
          "en": "Under EU MDR Annex VIII Rule 11, software providing information for diagnostic/therapeutic decisions is generally classified as at least which class?",
          "zh": "依歐盟 MDR 附件 VIII 規則 11,提供診斷/治療決策資訊的軟體原則上至少分為哪一級?"
        },
        "options": [
          {
            "en": "Class I",
            "zh": "Class I"
          },
          {
            "en": "Class IIa",
            "zh": "Class IIa"
          },
          {
            "en": "It is exempt",
            "zh": "免分級"
          },
          {
            "en": "Class III always",
            "zh": "一律 Class III"
          }
        ],
        "answer": 1,
        "explain": {
          "en": "Rule 11 generally puts decision-support software at IIa; it can reach III if an erroneous decision could cause death/irreversible deterioration, often requiring a Notified Body.",
          "zh": "規則 11 原則上將決策支援軟體列為 IIa;若決策錯誤可能致死或不可逆惡化則升至 III,且多需驗證機構參與。"
        }
      },
      {
        "q": {
          "en": "Why did Taiwan choose an indigenous FHIR-conversion route rather than wholesale adoption of a system like Epic for nationwide EMR interoperability?",
          "zh": "為何台灣選擇自主 FHIR 轉換路線,而非整套導入 Epic 等系統來達成全國電子病歷互通?"
        },
        "options": [
          {
            "en": "FHIR is illegal in Taiwan",
            "zh": "FHIR 在台灣不合法"
          },
          {
            "en": "The estimated national replacement cost exceeded NT$1.2 trillion",
            "zh": "全國汰換成本估超過新台幣 1.2 兆元"
          },
          {
            "en": "Epic refused to operate in Taiwan",
            "zh": "Epic 拒絕在台營運"
          },
          {
            "en": "Hospitals had no existing EMR systems",
            "zh": "醫院尚無任何電子病歷系統"
          }
        ],
        "answer": 1,
        "explain": {
          "en": "Taiwan has 40+ incompatible EMRs; wholesale replacement was estimated at over NT$1.2 trillion nationally, so it chose FHIR converters plus a data hub and the TW Core standard.",
          "zh": "台灣有 40+ 套互不相通的 EMR,整套汰換全國成本估逾 1.2 兆元,故選擇 FHIR 轉換器加資料中台與 TW Core 標準。"
        }
      },
      {
        "q": {
          "en": "Which of these is the medical record exchange infrastructure where clinicians can retrieve another hospital's records from the past 6 months with patient consent?",
          "zh": "下列何者是醫師經病人同意可調閱他院過去 6 個月病歷的全國跨院交換基礎設施?"
        },
        "options": [
          {
            "en": "My Health Bank (MHB)",
            "zh": "健康存摺(MHB)"
          },
          {
            "en": "Electronic Medical Record Exchange Center (EEC)",
            "zh": "電子病歷交換中心(EEC)"
          },
          {
            "en": "Taiwan Biobank",
            "zh": "臺灣人體生物資料庫"
          },
          {
            "en": "NHIRD",
            "zh": "健保資料庫"
          }
        ],
        "answer": 1,
        "explain": {
          "en": "The EEC (around 470 connected institutions) lets clinicians retrieve another hospital's past-6-month records with NHI IC card, healthcare credential and patient consent; MHB is a personal health record.",
          "zh": "EEC(約 470 家機構介接)讓醫師以健保卡、醫事憑證並經病人同意調閱他院近 6 個月病歷;健康存摺則是個人健康紀錄。"
        }
      },
      {
        "q": {
          "en": "Which roles in Taiwan's medtech sector most strongly gate on medical/life-science background rather than coding skill?",
          "zh": "台灣醫療科技中,哪一類職務最依賴醫療/生科背景而非寫程式能力?"
        },
        "options": [
          {
            "en": "Front-end and DevOps engineers",
            "zh": "前端與 DevOps 工程師"
          },
          {
            "en": "Regulatory Affairs (RA), CRA and MSL",
            "zh": "法規事務(RA)、臨床研究(CRA)、醫學聯絡人(MSL)"
          },
          {
            "en": "Cloud and security engineers",
            "zh": "雲端與資安工程師"
          },
          {
            "en": "UI/UX designers",
            "zh": "UI/UX 設計師"
          }
        ],
        "answer": 1,
        "explain": {
          "en": "Pure-tech roles rarely require a medical degree, but RA, CRA, MSL and bioinformatics trade on domain knowledge; RA in particular lives on regulatory knowledge, not coding.",
          "zh": "純技術職多不要求醫療學歷,但 RA、CRA、MSL 與生資靠領域知識吃飯;RA 尤其靠法規知識而非寫程式。"
        }
      },
      {
        "q": {
          "en": "What was VeriSee DR (Acer Medical) notable as in Taiwan?",
          "zh": "宏碁智醫的 VeriSee DR 在台灣的代表性意義為何?"
        },
        "options": [
          {
            "en": "Taiwan's first ophthalmology AI medical device (Sep 2020)",
            "zh": "台灣首張眼科 AI 醫材(2020 年 9 月)"
          },
          {
            "en": "The first surgical robot",
            "zh": "首套手術機器人"
          },
          {
            "en": "The first ECG monitor",
            "zh": "首台心電圖監測器"
          },
          {
            "en": "A digital-pathology scanner",
            "zh": "數位病理掃描儀"
          }
        ],
        "answer": 0,
        "explain": {
          "en": "VeriSee DR is a diabetic-retinopathy AI screening tool co-developed with NTUH and was Taiwan's first TFDA-approved ophthalmology AI device (Sep 2020), deployed at 100+ hospitals.",
          "zh": "VeriSee DR 是與台大合作的糖尿病視網膜病變 AI 篩檢工具,為台灣首張 TFDA 核准眼科 AI 醫材(2020 年 9 月),導入逾 100 家院所。"
        }
      },
      {
        "q": {
          "en": "What does an SaMD vendor still need to establish even with no physical production line?",
          "zh": "即使沒有實體產線,SaMD 業者仍須建立什麼?"
        },
        "options": [
          {
            "en": "A warehouse",
            "zh": "倉儲設施"
          },
          {
            "en": "An ISO 13485-conformant QMS (software development, change, configuration, nonconformity management)",
            "zh": "符合 ISO 13485 的品質系統(軟體開發、變更、組態、不符合管理)"
          },
          {
            "en": "Nothing; software is exempt from QMS",
            "zh": "不需要;軟體免品質系統"
          },
          {
            "en": "A physical retail store",
            "zh": "實體零售門市"
          }
        ],
        "answer": 1,
        "explain": {
          "en": "Taiwan's QMS Regulation (aligned to ISO 13485:2016) requires even pure-software vendors to implement a conformant QMS covering software development, change, configuration and nonconformity processes.",
          "zh": "台灣 QMS 準則(對應 ISO 13485:2016)要求純軟體業者也須建立符合規範的品質系統,涵蓋軟體開發、變更、組態與不符合流程。"
        }
      },
      {
        "q": {
          "en": "What does UDI (Unique Device Identification) primarily strengthen for medical devices?",
          "zh": "UDI(單一器材識別)主要強化醫材的什麼?"
        },
        "options": [
          {
            "en": "Marketing reach",
            "zh": "行銷觸及"
          },
          {
            "en": "Traceability, adverse-event reporting and recall management",
            "zh": "追溯、不良事件通報與回收管理"
          },
          {
            "en": "Battery life",
            "zh": "電池續航"
          },
          {
            "en": "Reimbursement rates",
            "zh": "給付費率"
          }
        ],
        "answer": 1,
        "explain": {
          "en": "UDI labels (Class II/III, effective 110/05/01) upload to the TUDID national platform, accelerating traceability, adverse-event reporting and recalls; for SaMD it includes version identifiers.",
          "zh": "UDI 標示(第二、三級,110/05/01 生效)上傳 TUDID 國家平台,加速追溯、不良事件通報與回收;SaMD 須含版本識別。"
        }
      },
      {
        "q": {
          "en": "Under Taiwan's PDPA, how is health/medical data categorized?",
          "zh": "依台灣個資法,醫療健康資料屬於哪一類?"
        },
        "options": [
          {
            "en": "Public data with no restrictions",
            "zh": "無限制的公開資料"
          },
          {
            "en": "Sensitive (special-category) personal data",
            "zh": "特種(敏感)個人資料"
          },
          {
            "en": "Anonymous data outside the law",
            "zh": "法律不規範的匿名資料"
          },
          {
            "en": "Commercial trade secrets",
            "zh": "商業營業秘密"
          }
        ],
        "answer": 1,
        "explain": {
          "en": "PDPA Article 6 lists medical records, health, genetic and health-exam data as sensitive personal data, generally barred from processing except with consent, explicit legal basis, or de-identified academic research.",
          "zh": "個資法第 6 條將病歷、醫療、基因、健康檢查列為特種個資,原則不得處理,例外含當事人同意、法律明文或去識別化學術研究。"
        }
      },
      {
        "q": {
          "en": "What is the most worthwhile head-start skill a non-medical software engineer can pre-learn to differentiate for healthcare back-end roles?",
          "zh": "非醫療背景軟體工程師最值得提前自學、用於醫療後端職務差異化的硬技能是什麼?"
        },
        "options": [
          {
            "en": "Game engine development",
            "zh": "遊戲引擎開發"
          },
          {
            "en": "HL7/FHIR (interoperability standards)",
            "zh": "HL7/FHIR(互通標準)"
          },
          {
            "en": "Blockchain mining",
            "zh": "區塊鏈挖礦"
          },
          {
            "en": "3D animation",
            "zh": "3D 動畫"
          }
        ],
        "answer": 1,
        "explain": {
          "en": "Healthcare back-end revolves around data models and interoperability standards (HL7/FHIR, DICOM, ICD-10, NHI integration); FHIR/HL7 is the most worthwhile head-start skill for career-changers.",
          "zh": "醫療後端的核心是資料模型與互通標準(HL7/FHIR、DICOM、ICD-10、健保介接);FHIR/HL7 是轉職者最值得提前自學的加分技能。"
        }
      },
      {
        "q": {
          "en": "In the US FDA framework, which pathway demonstrates substantial equivalence to a marketed predicate and is the most common route for SaMD?",
          "zh": "在美國 FDA 架構中,哪一條路徑以證明與已上市器材實質等同、是 SaMD 最常見的途徑?"
        },
        "options": [
          {
            "en": "PMA",
            "zh": "PMA"
          },
          {
            "en": "De Novo",
            "zh": "De Novo"
          },
          {
            "en": "510(k)",
            "zh": "510(k)"
          },
          {
            "en": "CE marking",
            "zh": "CE 標誌"
          }
        ],
        "answer": 2,
        "explain": {
          "en": "510(k) demonstrates substantial equivalence to a predicate device and is the most common route; De Novo creates a new classification for novel low-to-moderate-risk devices, and PMA is for high-risk Class III.",
          "zh": "510(k) 證明與類似品實質等同,為最常見途徑;De Novo 為無適當對照之新型低-中度風險器材建立新分類,PMA 用於高風險 Class III。"
        }
      },
      {
        "q": {
          "en": "What is the main goal of NHIA's 'temporary payment' and 'regulatory sandbox' approaches for AI devices and DTx?",
          "zh": "健保署對 AI 醫材與數位療法採「暫時性支付」與「健保沙盒」的主要目的為何?"
        },
        "options": [
          {
            "en": "To permanently ban AI devices",
            "zh": "永久禁止 AI 醫材"
          },
          {
            "en": "To explore reimbursement feasibility, cost-effectiveness and gather real-world evidence",
            "zh": "探索給付可行性、成本效益並蒐集真實世界證據"
          },
          {
            "en": "To replace TFDA registration",
            "zh": "取代 TFDA 查驗登記"
          },
          {
            "en": "To set device export quotas",
            "zh": "設定醫材出口配額"
          }
        ],
        "answer": 1,
        "explain": {
          "en": "NHIA assesses AI tools and DTx under temporary payment and a sandbox to weigh cost-effectiveness and budget impact and accumulate RWE before formal coverage; a registration license is not the same as reimbursement.",
          "zh": "健保署以暫時性支付與沙盒衡量 AI 工具與 DTx 的成本效益與財務衝擊、累積 RWE 作為正式納保依據;取得許可證不等於健保給付。"
        }
      }
    ],
    "flashcards": [
      {
        "front": {
          "en": "SaMD",
          "zh": "SaMD(軟體即醫材)"
        },
        "back": {
          "en": "Software as a Medical Device — software intended for medical purposes that itself meets the device definition, regulated by risk class.",
          "zh": "Software as a Medical Device,本身符合醫材定義、供醫療目的使用的軟體,依風險分級管理。"
        }
      },
      {
        "front": {
          "en": "MDSW",
          "zh": "MDSW(醫療器材軟體)"
        },
        "back": {
          "en": "Medical Device Software — the subset of medical software that is regulated as a device under Taiwan's rules.",
          "zh": "Medical Device Software,醫用軟體中屬醫材管理的子集,即醫療器材軟體。"
        }
      },
      {
        "front": {
          "en": "IEC 62304",
          "zh": "IEC 62304"
        },
        "back": {
          "en": "International standard for medical device software life-cycle processes; scales rigor by software safety class A/B/C.",
          "zh": "醫材軟體生命週期流程國際標準,依軟體安全分級 A/B/C 決定流程嚴謹度。"
        }
      },
      {
        "front": {
          "en": "ISO 13485",
          "zh": "ISO 13485"
        },
        "back": {
          "en": "Quality management system standard for medical devices; basis for Taiwan's QMS Regulation and manufacturing license.",
          "zh": "醫材品質管理系統標準,為台灣 QMS 準則與製造許可的基礎。"
        }
      },
      {
        "front": {
          "en": "ISO 14971",
          "zh": "ISO 14971"
        },
        "back": {
          "en": "Medical device risk-management standard (analysis, evaluation, control, benefit-risk); normatively referenced by IEC 62304.",
          "zh": "醫材風險管理標準(分析、評估、控制、效益風險),IEC 62304 規範性引用之。"
        }
      },
      {
        "front": {
          "en": "IEC 62366",
          "zh": "IEC 62366"
        },
        "back": {
          "en": "Usability engineering / human factors standard for devices; formative and summative usability evaluation to reduce use errors.",
          "zh": "醫材可用性工程/人因標準,以形成性與總結性可用性評估降低使用錯誤。"
        }
      },
      {
        "front": {
          "en": "HL7",
          "zh": "HL7"
        },
        "back": {
          "en": "Health Level Seven — standards body and family of health-data exchange standards; FHIR and the legacy v2 are HL7 standards.",
          "zh": "Health Level Seven,醫療資料交換標準組織與標準家族;FHIR 與舊版 v2 皆為其標準。"
        }
      },
      {
        "front": {
          "en": "FHIR",
          "zh": "FHIR"
        },
        "back": {
          "en": "Fast Healthcare Interoperability Resources — HL7's modern RESTful, resource-based exchange standard; Taiwan's official interoperability direction.",
          "zh": "HL7 的現代化標準,以 RESTful API 與資源為基礎,是台灣互通的官方方向。"
        }
      },
      {
        "front": {
          "en": "DICOM",
          "zh": "DICOM"
        },
        "back": {
          "en": "Digital Imaging and Communications in Medicine — standard for medical-image transmission/storage; EEC PACS exchange requires DICOM 3.0.",
          "zh": "醫療影像傳輸與儲存標準;台灣 EEC 的 PACS 影像交換要求 DICOM 3.0。"
        }
      },
      {
        "front": {
          "en": "SNOMED CT",
          "zh": "SNOMED CT"
        },
        "back": {
          "en": "A comprehensive clinical terminology with 1M+ concepts (vs ~98k in ICD-10); semantic foundation for FHIR interoperability.",
          "zh": "逾百萬編碼的臨床術語(ICD-10 約 9.8 萬筆),為 FHIR 互通的語意基礎。"
        }
      },
      {
        "front": {
          "en": "ICD-10",
          "zh": "ICD-10"
        },
        "back": {
          "en": "International Classification of Diseases, 10th revision; Taiwan uses ICD-10-CM/PCS for diagnosis and procedure coding led by NHI.",
          "zh": "國際疾病分類第十版;台灣由健保署主導採用 ICD-10-CM/PCS 做診斷與處置編碼。"
        }
      },
      {
        "front": {
          "en": "LOINC",
          "zh": "LOINC"
        },
        "back": {
          "en": "Logical Observation Identifiers Names and Codes — standard for lab tests and clinical observations; datasets updated monthly on Taiwan's standards platform.",
          "zh": "檢驗與臨床觀察項目的標準編碼;資料集於台灣標準大平台每月更新。"
        }
      },
      {
        "front": {
          "en": "RxNorm",
          "zh": "RxNorm"
        },
        "back": {
          "en": "Standardized nomenclature for clinical drugs; one of the terminology sets maintained on Taiwan's standards platform.",
          "zh": "臨床藥品的標準化命名;台灣標準大平台維護的術語資料集之一。"
        }
      },
      {
        "front": {
          "en": "CDSS",
          "zh": "CDSS(臨床決策支援)"
        },
        "back": {
          "en": "Clinical Decision Support System — software aiding clinical decisions, e.g., AESOP's MedGuard flagging inappropriate prescriptions.",
          "zh": "Clinical Decision Support System,輔助臨床決策的軟體,如醫守 MedGuard 偵測不當處方。"
        }
      },
      {
        "front": {
          "en": "CADe / CADx",
          "zh": "CADe / CADx"
        },
        "back": {
          "en": "Computer-Aided Detection (lesion detection support) vs Computer-Aided Diagnosis (classification/diagnosis support); Taiwan guidance last revised 2025-08.",
          "zh": "電腦輔助偵測(協助偵測病灶)與電腦輔助診斷(協助分類/診斷);台灣指引 2025-08 最新修正。"
        }
      },
      {
        "front": {
          "en": "HIS",
          "zh": "HIS(醫院資訊系統)"
        },
        "back": {
          "en": "Hospital Information System — the core IT backbone managing hospital operations, orders and records.",
          "zh": "Hospital Information System,管理醫院營運、醫囑與紀錄的核心資訊系統。"
        }
      },
      {
        "front": {
          "en": "EMR / EHR",
          "zh": "EMR / EHR(電子病歷)"
        },
        "back": {
          "en": "Electronic Medical Record (single-org) / Electronic Health Record (cross-org); Taiwan has 40+ incompatible EMR systems.",
          "zh": "電子病歷(單機構)/電子健康紀錄(跨機構);台灣有 40+ 套互不相通的 EMR。"
        }
      },
      {
        "front": {
          "en": "PACS",
          "zh": "PACS(影像儲傳系統)"
        },
        "back": {
          "en": "Picture Archiving and Communication System — stores and distributes medical images using DICOM; EBM is a leading Taiwan vendor.",
          "zh": "醫療影像儲傳系統,以 DICOM 儲存與分送影像;商之器(EBM)為台灣領先廠商。"
        }
      },
      {
        "front": {
          "en": "PHR",
          "zh": "PHR(個人健康紀錄)"
        },
        "back": {
          "en": "Personal Health Record — patient-controlled health data; Taiwan's My Health Bank (MHB) serves around 12.12M users.",
          "zh": "個人健康紀錄,由民眾掌控的健康資料;台灣健康存摺(MHB)使用者約 1,212 萬人。"
        }
      },
      {
        "front": {
          "en": "UDI / TUDID",
          "zh": "UDI / TUDID"
        },
        "back": {
          "en": "Unique Device Identification labeled on Class II/III devices and uploaded to Taiwan's TUDID national platform for traceability.",
          "zh": "單一器材識別,標示於第二、三級醫材並上傳台灣 TUDID 國家平台以利追溯。"
        }
      },
      {
        "front": {
          "en": "PCCP",
          "zh": "PCCP(預定變更管控計畫)"
        },
        "back": {
          "en": "Predetermined Change Control Plan — FDA mechanism to pre-authorize future AI/ML model changes at submission.",
          "zh": "FDA 機制,在送件時預先核定 AI/ML 模型未來變更,免逐次重新送件。"
        }
      },
      {
        "front": {
          "en": "GMLP",
          "zh": "GMLP(良好機器學習實務)"
        },
        "back": {
          "en": "Good Machine Learning Practice — framework guiding AI/ML device development, aligned with the FDA's PCCP guidance.",
          "zh": "Good Machine Learning Practice,指導 AI/ML 醫材開發的框架,與 FDA PCCP 指引配合。"
        }
      },
      {
        "front": {
          "en": "510(k)",
          "zh": "510(k)"
        },
        "back": {
          "en": "US FDA premarket route demonstrating substantial equivalence to a marketed predicate; the most common SaMD pathway.",
          "zh": "美國 FDA 上市前途徑,證明與已上市類似品實質等同,是最常見的 SaMD 路徑。"
        }
      },
      {
        "front": {
          "en": "De Novo",
          "zh": "De Novo"
        },
        "back": {
          "en": "US FDA route for novel low-to-moderate-risk devices lacking a suitable predicate, creating a new classification.",
          "zh": "美國 FDA 途徑,供無適當對照之新型低-中度風險器材使用,可建立新分類。"
        }
      },
      {
        "front": {
          "en": "PMA",
          "zh": "PMA(上市前核准)"
        },
        "back": {
          "en": "Premarket Approval — US FDA's most stringent route for high-risk Class III devices, requiring full clinical evidence.",
          "zh": "美國 FDA 最嚴格途徑,供高風險 Class III 醫材,須完整臨床證據。"
        }
      },
      {
        "front": {
          "en": "CE / MDR",
          "zh": "CE / MDR"
        },
        "back": {
          "en": "EU conformity marking under the Medical Device Regulation (EU 2017/745); software is classified by Annex VIII Rule 11.",
          "zh": "歐盟依醫療器材法規(EU 2017/745)的符合性標誌;軟體依附件 VIII 規則 11 分級。"
        }
      },
      {
        "front": {
          "en": "TFDA",
          "zh": "TFDA(食藥署)"
        },
        "back": {
          "en": "Taiwan Food and Drug Administration — regulates medical devices and runs the AI/ML device matchmaking platform (aimd.fda.gov.tw).",
          "zh": "台灣衛福部食藥署,主管醫療器材並營運智慧醫療器材媒合平台(aimd.fda.gov.tw)。"
        }
      },
      {
        "front": {
          "en": "NHI / NHIA",
          "zh": "NHI 健保 / 健保署"
        },
        "back": {
          "en": "National Health Insurance and the National Health Insurance Administration; reimbursement is a separate gate from device registration.",
          "zh": "全民健康保險與健保署;給付是與查驗登記分開的獨立關卡。"
        }
      },
      {
        "front": {
          "en": "DTx",
          "zh": "DTx(數位療法)"
        },
        "back": {
          "en": "Digital Therapeutics — software-driven therapeutic interventions; Taiwan piloted a 2024 digital-care incentive sandbox, mostly self-pay so far.",
          "zh": "數位療法,以軟體驅動的治療性介入;台灣 2024 年沙盒試辦數位照護獎勵,目前多自費。"
        }
      },
      {
        "front": {
          "en": "TW Core IG",
          "zh": "TW Core IG(臺灣核心實作指引)"
        },
        "back": {
          "en": "MOHW-led national base FHIR profile set built on FHIR R4.0.1; v1.0.0 released 2025-12-10, the baseline for nationwide interoperability.",
          "zh": "衛福部主導、以 FHIR R4.0.1 為基礎的全國核心 FHIR Profile;v1.0.0 於 2025-12-10 發布,為全國互通基準。"
        }
      }
    ],
    "glossary": [
      {
        "term": {
          "en": "SaMD",
          "zh": "SaMD 軟體即醫材"
        },
        "def": {
          "en": "Software as a Medical Device — software intended for a medical purpose that meets the device definition; risk-classified and regulated like other devices.",
          "zh": "本身供醫療目的、符合醫材定義的軟體,如同其他醫材依風險分級並受監管。"
        }
      },
      {
        "term": {
          "en": "HIS",
          "zh": "HIS 醫院資訊系統"
        },
        "def": {
          "en": "Hospital Information System — the IT backbone managing hospital administration, clinical orders, billing and records.",
          "zh": "管理醫院行政、臨床醫囑、計費與紀錄的核心資訊系統。"
        }
      },
      {
        "term": {
          "en": "EMR",
          "zh": "EMR 電子病歷"
        },
        "def": {
          "en": "Electronic Medical Record — a single organization's digital patient record; Taiwan has 40+ mutually incompatible EMR systems.",
          "zh": "單一機構的數位病歷;台灣有 40+ 套互不相通的 EMR 系統。"
        }
      },
      {
        "term": {
          "en": "EHR",
          "zh": "EHR 電子健康紀錄"
        },
        "def": {
          "en": "Electronic Health Record — a patient record designed to be shared across organizations, broader than a single-site EMR.",
          "zh": "可跨機構共享的病人健康紀錄,範圍比單機構 EMR 更廣。"
        }
      },
      {
        "term": {
          "en": "PACS",
          "zh": "PACS 影像儲傳系統"
        },
        "def": {
          "en": "Picture Archiving and Communication System — stores, retrieves and distributes medical images using DICOM.",
          "zh": "以 DICOM 儲存、調閱與分送醫療影像的系統。"
        }
      },
      {
        "term": {
          "en": "RIS",
          "zh": "RIS 放射資訊系統"
        },
        "def": {
          "en": "Radiology Information System — manages radiology workflow, scheduling and reports, typically paired with PACS.",
          "zh": "管理放射科流程、排程與報告的資訊系統,通常與 PACS 搭配。"
        }
      },
      {
        "term": {
          "en": "LIS",
          "zh": "LIS 檢驗資訊系統"
        },
        "def": {
          "en": "Laboratory Information System — manages lab test ordering, results and workflow within the clinical laboratory.",
          "zh": "管理臨床檢驗室檢驗開單、結果與流程的資訊系統。"
        }
      },
      {
        "term": {
          "en": "HL7",
          "zh": "HL7"
        },
        "def": {
          "en": "Health Level Seven — the standards organization and family of health-data exchange standards including FHIR and legacy v2.",
          "zh": "醫療資料交換標準組織與標準家族,含 FHIR 與舊版 v2。"
        }
      },
      {
        "term": {
          "en": "FHIR",
          "zh": "FHIR"
        },
        "def": {
          "en": "Fast Healthcare Interoperability Resources — HL7's modern RESTful, resource-based exchange standard; basis of Taiwan's TW Core IG.",
          "zh": "HL7 現代化、以 RESTful 與資源為基礎的交換標準,為台灣 TW Core IG 的基礎。"
        }
      },
      {
        "term": {
          "en": "DICOM",
          "zh": "DICOM"
        },
        "def": {
          "en": "Digital Imaging and Communications in Medicine — the standard for medical-image transmission and storage; EEC requires DICOM 3.0.",
          "zh": "醫療影像傳輸與儲存標準;EEC 要求符合 DICOM 3.0。"
        }
      },
      {
        "term": {
          "en": "SNOMED CT",
          "zh": "SNOMED CT"
        },
        "def": {
          "en": "A comprehensive clinical terminology with over 1 million concepts, providing fine-grained semantic coding for interoperability.",
          "zh": "逾百萬編碼的全面性臨床術語,提供細緻的語意編碼以利互通。"
        }
      },
      {
        "term": {
          "en": "ICD-10",
          "zh": "ICD-10"
        },
        "def": {
          "en": "International Classification of Diseases (10th revision); Taiwan adopts ICD-10-CM/PCS for diagnosis and procedure coding.",
          "zh": "國際疾病分類第十版;台灣採用 ICD-10-CM/PCS 做診斷與處置編碼。"
        }
      },
      {
        "term": {
          "en": "LOINC",
          "zh": "LOINC"
        },
        "def": {
          "en": "Logical Observation Identifiers Names and Codes — standard codes for lab tests and clinical observations.",
          "zh": "檢驗與臨床觀察項目的標準識別碼。"
        }
      },
      {
        "term": {
          "en": "CDSS",
          "zh": "CDSS 臨床決策支援系統"
        },
        "def": {
          "en": "Clinical Decision Support System — software that aids clinical decisions, such as flagging potentially inappropriate medications.",
          "zh": "輔助臨床決策的軟體,例如提醒潛在不當用藥。"
        }
      },
      {
        "term": {
          "en": "IVD",
          "zh": "IVD 體外診斷"
        },
        "def": {
          "en": "In Vitro Diagnostics — tests performed on samples (blood, tissue) outside the body; a focus of vendors like Wistron Medical.",
          "zh": "在體外對檢體(血液、組織)進行的診斷檢測;為緯創醫學等廠商的布局重點。"
        }
      },
      {
        "term": {
          "en": "RPM",
          "zh": "RPM 遠距病人監測"
        },
        "def": {
          "en": "Remote Patient Monitoring — collecting patient physiological data outside clinical settings for ongoing monitoring and care.",
          "zh": "在臨床場域外蒐集病人生理資料以持續監測與照護。"
        }
      },
      {
        "term": {
          "en": "PHR",
          "zh": "PHR 個人健康紀錄"
        },
        "def": {
          "en": "Personal Health Record — patient-controlled health data; Taiwan's My Health Bank serves around 12.12 million users.",
          "zh": "由民眾掌控的健康紀錄;台灣健康存摺使用者約 1,212 萬人。"
        }
      },
      {
        "term": {
          "en": "DTx",
          "zh": "DTx 數位療法"
        },
        "def": {
          "en": "Digital Therapeutics — evidence-based, software-driven therapeutic interventions; mostly self-pay or piloted in Taiwan so far.",
          "zh": "以實證、軟體驅動的治療性介入;台灣目前多為自費或試辦。"
        }
      },
      {
        "term": {
          "en": "NHI",
          "zh": "NHI 健保"
        },
        "def": {
          "en": "National Health Insurance — Taiwan's universal single-payer system; obtaining a device license does not automatically grant reimbursement.",
          "zh": "台灣全民健康保險(單一保險人);取得醫材許可證不等於自動獲得給付。"
        }
      },
      {
        "term": {
          "en": "TFDA",
          "zh": "TFDA 食藥署"
        },
        "def": {
          "en": "Taiwan Food and Drug Administration — regulates medical devices, issues AI/ML and CADe/CADx guidance, runs the device matchmaking platform.",
          "zh": "台灣食藥署,主管醫療器材、發布 AI/ML 與 CADe/CADx 指引並營運醫材媒合平台。"
        }
      },
      {
        "term": {
          "en": "FDA 510(k)",
          "zh": "FDA 510(k)"
        },
        "def": {
          "en": "US FDA premarket notification demonstrating substantial equivalence to a marketed predicate; the most common SaMD route.",
          "zh": "美國 FDA 上市前通知,證明與已上市類似品實質等同,是最常見的 SaMD 途徑。"
        }
      },
      {
        "term": {
          "en": "De Novo",
          "zh": "De Novo"
        },
        "def": {
          "en": "US FDA pathway for novel low-to-moderate-risk devices lacking a suitable predicate, creating a new device classification.",
          "zh": "美國 FDA 途徑,供無適當對照的新型低-中度風險器材,可建立新分類。"
        }
      },
      {
        "term": {
          "en": "PMA",
          "zh": "PMA 上市前核准"
        },
        "def": {
          "en": "Premarket Approval — the FDA's most stringent route for high-risk Class III devices, requiring full clinical evidence.",
          "zh": "美國 FDA 最嚴格的途徑,供高風險 Class III 醫材,須完整臨床證據。"
        }
      },
      {
        "term": {
          "en": "CE MDR",
          "zh": "CE MDR"
        },
        "def": {
          "en": "EU conformity marking under the Medical Device Regulation (EU 2017/745); software is classified by Annex VIII Rule 11, often IIa+.",
          "zh": "歐盟依醫療器材法規(EU 2017/745)的符合性標誌;軟體依附件 VIII 規則 11 分級,多落 IIa 以上。"
        }
      },
      {
        "term": {
          "en": "ISO 13485",
          "zh": "ISO 13485"
        },
        "def": {
          "en": "Quality management system standard for medical devices; basis of Taiwan's QMS Regulation and the 3-year manufacturing license.",
          "zh": "醫材品質管理系統標準,為台灣 QMS 準則與效期 3 年製造許可的基礎。"
        }
      },
      {
        "term": {
          "en": "IEC 62304",
          "zh": "IEC 62304"
        },
        "def": {
          "en": "Medical device software life-cycle standard; scales process and documentation rigor by safety class A/B/C.",
          "zh": "醫材軟體生命週期標準,依安全分級 A/B/C 決定流程與文件嚴謹度。"
        }
      },
      {
        "term": {
          "en": "ISO 14971",
          "zh": "ISO 14971"
        },
        "def": {
          "en": "Medical device risk-management standard (analysis, control, benefit-risk); normatively referenced by IEC 62304.",
          "zh": "醫材風險管理標準(分析、控制、效益風險),IEC 62304 規範性引用之。"
        }
      },
      {
        "term": {
          "en": "IEC 62366",
          "zh": "IEC 62366"
        },
        "def": {
          "en": "Usability engineering standard for medical devices, addressing human factors and use-related risk via formative/summative evaluation.",
          "zh": "醫材可用性工程標準,以形成性/總結性評估處理人因與使用相關風險。"
        }
      },
      {
        "term": {
          "en": "UDI",
          "zh": "UDI 單一器材識別"
        },
        "def": {
          "en": "Unique Device Identification — codes labeled on devices and uploaded to the TUDID national platform for traceability and recalls.",
          "zh": "標示於醫材並上傳 TUDID 國家平台的識別碼,用於追溯與回收。"
        }
      },
      {
        "term": {
          "en": "PCCP",
          "zh": "PCCP 預定變更管控計畫"
        },
        "def": {
          "en": "Predetermined Change Control Plan — FDA mechanism letting AI/ML devices pre-authorize defined future model changes at submission.",
          "zh": "FDA 機制,讓 AI/ML 醫材在送件時預先核定特定未來模型變更。"
        }
      },
      {
        "term": {
          "en": "QMS",
          "zh": "QMS 品質管理系統"
        },
        "def": {
          "en": "Quality Management System — the organized processes (per ISO 13485) for device design, production and post-market control.",
          "zh": "依 ISO 13485 建立的醫材設計、生產與上市後管控的系統化流程。"
        }
      },
      {
        "term": {
          "en": "NLP",
          "zh": "NLP 自然語言處理"
        },
        "def": {
          "en": "Natural Language Processing — extracting structure from clinical text (notes, reports); demand surged with LLMs in 2024-2026.",
          "zh": "從臨床文字(病歷、報告)抽取結構的技術;2024-2026 因 LLM 興起需求大增。"
        }
      },
      {
        "term": {
          "en": "ML",
          "zh": "ML 機器學習"
        },
        "def": {
          "en": "Machine Learning — models learned from data; in healthcare, clinical metrics (sensitivity/specificity/AUC) matter more than raw accuracy.",
          "zh": "從資料學習的模型;醫療場景中臨床指標(敏感度/特異度/AUC)比單看準確率更重要。"
        }
      },
      {
        "term": {
          "en": "CGM",
          "zh": "CGM 連續血糖監測"
        },
        "def": {
          "en": "Continuous Glucose Monitoring — wearable sensing that continuously tracks glucose levels for diabetes management.",
          "zh": "以穿戴感測持續追蹤血糖值,用於糖尿病管理。"
        }
      },
      {
        "term": {
          "en": "ECG",
          "zh": "ECG 心電圖"
        },
        "def": {
          "en": "Electrocardiogram — recording of the heart's electrical activity; Taiwan AI platforms can interpret 50+ cardiopulmonary conditions.",
          "zh": "記錄心臟電氣活動;台灣 AI 平台可輔助判讀逾 50 種心肺疾病。"
        }
      },
      {
        "term": {
          "en": "rPPG",
          "zh": "rPPG 遠端光體積描記"
        },
        "def": {
          "en": "Remote Photoplethysmography — camera-based, contactless estimation of physiological signals such as heart rate from skin color changes.",
          "zh": "以攝影機從皮膚色彩變化非接觸估測心率等生理訊號。"
        }
      },
      {
        "term": {
          "en": "NGS",
          "zh": "NGS 次世代定序"
        },
        "def": {
          "en": "Next-Generation Sequencing — high-throughput DNA sequencing underpinning precision medicine and cancer gene testing.",
          "zh": "高通量 DNA 定序,支撐精準醫療與癌症基因檢測。"
        }
      },
      {
        "term": {
          "en": "PRS",
          "zh": "PRS 多基因風險分數"
        },
        "def": {
          "en": "Polygenic Risk Score — an aggregate estimate of disease risk from many genetic variants, used in population genetics research.",
          "zh": "由眾多基因變異彙總估計疾病風險的分數,用於族群基因研究。"
        }
      },
      {
        "term": {
          "en": "Biobank",
          "zh": "Biobank 人體生物資料庫"
        },
        "def": {
          "en": "A repository of biological specimens and associated data; Taiwan Biobank holds longitudinal data for 250,000+ participants.",
          "zh": "保存生物檢體與相關資料的庫;臺灣人體生物資料庫收集逾 25 萬人縱貫性資料。"
        }
      },
      {
        "term": {
          "en": "MTB",
          "zh": "MTB 分子腫瘤委員會"
        },
        "def": {
          "en": "Molecular Tumor Board — a multidisciplinary panel interpreting genomic results to guide cancer treatment decisions.",
          "zh": "跨領域團隊解讀基因檢測結果以指引癌症治療決策的委員會。"
        }
      },
      {
        "term": {
          "en": "IRB",
          "zh": "IRB 人體試驗委員會"
        },
        "def": {
          "en": "Institutional Review Board — the ethics committee that reviews and oversees clinical trials to protect participants.",
          "zh": "審查並監督臨床試驗以保護受試者的倫理委員會。"
        }
      },
      {
        "term": {
          "en": "GCP",
          "zh": "GCP 優良臨床試驗規範"
        },
        "def": {
          "en": "Good Clinical Practice — the international standard for designing, conducting and reporting clinical trials; core to CRA work.",
          "zh": "設計、執行與報告臨床試驗的國際標準,是 CRA 工作的核心。"
        }
      },
      {
        "term": {
          "en": "RA",
          "zh": "RA 法規事務"
        },
        "def": {
          "en": "Regulatory Affairs — handles device/SaMD registration and licensing with TFDA/FDA/CE; trades on regulatory knowledge, not coding.",
          "zh": "處理醫材/SaMD 對 TFDA/FDA/CE 的查驗登記與許可;靠法規知識而非寫程式。"
        }
      },
      {
        "term": {
          "en": "QA",
          "zh": "QA 品質保證"
        },
        "def": {
          "en": "Quality Assurance — maintains process/system compliance (audits, CAPA, document control) under ISO 13485, plus IEC 62304 for software.",
          "zh": "依 ISO 13485 維護流程/系統合規(稽核、CAPA、文件控制),軟體醫材另含 IEC 62304。"
        }
      },
      {
        "term": {
          "en": "De-identification",
          "zh": "去識別化"
        },
        "def": {
          "en": "Recoding, masking or removing fields so data cannot identify individuals; data still permitting indirect re-identification remains personal data.",
          "zh": "重新編碼、模糊化或增刪欄位使資料無法識別個人;仍可間接識別者仍屬個人資料。"
        }
      },
      {
        "term": {
          "en": "Zero Trust",
          "zh": "零信任"
        },
        "def": {
          "en": "A security model that never implicitly trusts and continuously verifies identity/device (IAM, MFA, micro-segmentation); around 20% of hospitals plan adoption.",
          "zh": "不預設信任、持續驗證身分與設備的資安模型(IAM、MFA、微分段);約 2 成醫院計畫導入。"
        }
      }
    ]
  },
  {
    "slug": "games",
    "layout": "arcade",
    "icon": "sports_esports",
    "title": {
      "zh": "遊戲中心",
      "en": "Game Center"
    },
    "subtitle": {
      "zh": "醫療科技主題的休閒小遊戲合輯 —— 反應力、記憶、檢傷判斷、術語縮寫等。純瀏覽器執行、中英雙語、深淺色。",
      "en": "A wall of health-tech themed mini-games — reflex, memory, triage, acronyms and more. In-browser, bilingual, light/dark."
    }
  }
];
