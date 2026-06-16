/* =========================================================================
   triage.js — 檢傷快判 / Triage Rush

   玩法:每回合出現一個病患情境,在倒數結束前點出正確的檢傷級別
   (危急 / 緊急 / 一般)。答對得分、連對加成;答錯或逾時扣一條命,3 條命用完結束。
   純娛樂教學用,情境刻意設計為明確可判,非真實醫療指引。
   依遊戲契約:IIFE、window.GAMES.push、scoped CSS(g-triage-)、ctx.t 雙語、
   ctx.load/save 持久化最佳分、回傳 cleanup 清掉 timer/listener。
   ========================================================================= */
(function () {
  "use strict";

  function injectCSS() {
    if (document.getElementById("g-triage-css")) return;
    var s = document.createElement("style");
    s.id = "g-triage-css";
    s.textContent = [
      ".g-triage-wrap{width:100%;max-width:560px;margin:0 auto;}",
      ".g-triage-case{background:var(--surface-container);border:1px solid var(--outline-variant);",
        "border-radius:var(--radius-lg);padding:24px 20px;text-align:center;min-height:120px;",
        "display:flex;align-items:center;justify-content:center;font-size:1.15rem;font-weight:600;",
        "color:var(--on-surface);line-height:1.5;}",
      ".g-triage-bar{height:8px;border-radius:999px;background:var(--surface-variant);overflow:hidden;margin:14px 0;}",
      ".g-triage-bar__fill{height:100%;width:100%;background:var(--primary);transition:width .1s linear;}",
      ".g-triage-opts{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;}",
      ".g-triage-opt{padding:16px 8px;border-radius:var(--radius);border:none;cursor:pointer;font:inherit;",
        "font-weight:700;color:#fff;font-size:.95rem;transition:transform .08s,opacity .15s;}",
      ".g-triage-opt:active{transform:scale(.96);}",
      ".g-triage-opt:disabled{opacity:.55;cursor:default;}",
      ".g-triage-opt--red{background:#B3261E;}",
      ".g-triage-opt--yellow{background:#B26A00;}",
      ".g-triage-opt--green{background:#2E7D32;}",
      ".g-triage-fb{min-height:1.4em;margin:12px 0 0;text-align:center;font-weight:600;color:var(--on-surface);}",
      ".g-triage-over{text-align:center;}"
    ].join("");
    document.head.appendChild(s);
  }

  var CASES = [
    { level: "red",    zh: "患者倒地、沒有呼吸也沒有脈搏", en: "Collapsed — no breathing, no pulse" },
    { level: "red",    zh: "劇烈胸痛、冒冷汗,疑似心肌梗塞", en: "Crushing chest pain, cold sweat — suspected heart attack" },
    { level: "red",    zh: "嚴重呼吸困難、嘴唇發紫", en: "Severe trouble breathing, lips turning blue" },
    { level: "red",    zh: "叫喚無反應、意識喪失", en: "Unresponsive, loss of consciousness" },
    { level: "red",    zh: "大面積燒燙傷、休克徵象", en: "Major burns with signs of shock" },
    { level: "red",    zh: "大量出血止不住", en: "Uncontrolled heavy bleeding" },
    { level: "yellow", zh: "高燒 39°C 但意識清楚、能對答", en: "Fever 39°C but alert and responsive" },
    { level: "yellow", zh: "手臂明顯變形、劇痛但生命徵象穩定", en: "Deformed arm, severe pain, stable vitals" },
    { level: "yellow", zh: "腹痛數小時、可走動", en: "Abdominal pain for hours, able to walk" },
    { level: "yellow", zh: "氣喘發作、仍可說完整句子", en: "Asthma flare-up, can still speak full sentences" },
    { level: "yellow", zh: "持續嘔吐、開始脫水", en: "Persistent vomiting, becoming dehydrated" },
    { level: "green",  zh: "感冒流鼻水三天、精神不錯", en: "Runny nose for 3 days, feeling fine" },
    { level: "green",  zh: "慢性病回診、只是來拿藥", en: "Routine follow-up, just here for a refill" },
    { level: "green",  zh: "腳踝輕微扭傷、可自行行走", en: "Mild ankle sprain, walking on it fine" },
    { level: "green",  zh: "手指小割傷、出血已止", en: "Small finger cut, bleeding already stopped" },
    { level: "green",  zh: "輕微頭痛、無其他症狀", en: "Mild headache, no other symptoms" }
  ];

  (window.GAMES = window.GAMES || []).push({
    id: "triage",
    icon: "emergency",
    accent: "#B3261E",
    category: { zh: "急救判斷", en: "Triage" },
    title:   { zh: "檢傷快判", en: "Triage Rush" },
    tagline: { zh: "倒數內判斷病患的檢傷級別,救命要快也要準。",
               en: "Sort each patient by urgency before the clock runs out." },

    mount: function (root, ctx) {
      injectCSS();
      var t = ctx.t, esc = ctx.esc;
      var ROUND_MS = 6000;
      var best = Number(ctx.load("best", 0)) || 0;

      var lives, score, idx, lastIdx, timer, timeLeft, locked;

      root.innerHTML =
        '<div class="g-triage-wrap gu-center">' +
          '<div class="gu-statbar">' +
            '<div class="gu-stat"><span class="gu-stat__v" id="g-triage-lives">❤❤❤</span>' +
              '<span class="gu-stat__k">' + esc(t({ zh: "生命", en: "Lives" })) + '</span></div>' +
            '<div class="gu-stat"><span class="gu-stat__v" id="g-triage-score">0</span>' +
              '<span class="gu-stat__k">' + esc(t({ zh: "得分", en: "Score" })) + '</span></div>' +
            '<div class="gu-stat"><span class="gu-stat__v" id="g-triage-best">' + (best || "—") + '</span>' +
              '<span class="gu-stat__k">' + esc(t({ zh: "最佳", en: "Best" })) + '</span></div>' +
          '</div>' +
          '<div class="g-triage-case" id="g-triage-case"></div>' +
          '<div class="g-triage-bar"><div class="g-triage-bar__fill" id="g-triage-fill"></div></div>' +
          '<div class="g-triage-opts">' +
            '<button class="g-triage-opt g-triage-opt--red" data-l="red" type="button">' + esc(t({ zh: "危急", en: "Critical" })) + '</button>' +
            '<button class="g-triage-opt g-triage-opt--yellow" data-l="yellow" type="button">' + esc(t({ zh: "緊急", en: "Urgent" })) + '</button>' +
            '<button class="g-triage-opt g-triage-opt--green" data-l="green" type="button">' + esc(t({ zh: "一般", en: "Routine" })) + '</button>' +
          '</div>' +
          '<p class="g-triage-fb gu-hint" id="g-triage-fb"></p>' +
        '</div>';

      var caseEl = root.querySelector("#g-triage-case");
      var fillEl = root.querySelector("#g-triage-fill");
      var fbEl   = root.querySelector("#g-triage-fb");
      var livesEl = root.querySelector("#g-triage-lives");
      var scoreEl = root.querySelector("#g-triage-score");
      var bestEl  = root.querySelector("#g-triage-best");
      var optBtns = [].slice.call(root.querySelectorAll(".g-triage-opt"));

      function clearTimer() { if (timer) { clearInterval(timer); timer = null; } }
      function setOpts(disabled) { optBtns.forEach(function (b) { b.disabled = disabled; }); }
      function hud() {
        livesEl.textContent = lives > 0 ? Array(lives + 1).join("❤") : "—";
        scoreEl.textContent = score;
      }
      function levelText(l) {
        return t(l === "red" ? { zh: "危急", en: "Critical" }
          : l === "yellow" ? { zh: "緊急", en: "Urgent" } : { zh: "一般", en: "Routine" });
      }

      function nextRound() {
        clearTimer();
        fbEl.textContent = "";
        setOpts(false);
        do { idx = Math.floor(Math.random() * CASES.length); } while (idx === lastIdx && CASES.length > 1);
        lastIdx = idx;
        locked = false;
        caseEl.textContent = t(CASES[idx]);
        timeLeft = ROUND_MS;
        fillEl.style.width = "100%";
        timer = setInterval(function () {
          timeLeft -= 100;
          fillEl.style.width = Math.max(0, (timeLeft / ROUND_MS) * 100) + "%";
          if (timeLeft <= 0) answer(null);
        }, 100);
      }

      function answer(level) {
        if (locked) return;
        locked = true;
        clearTimer();
        setOpts(true);
        var correct = CASES[idx].level;
        if (level === correct) {
          score++; hud();
          if (score > best) { best = score; ctx.save("best", best); bestEl.textContent = best; }
          fbEl.textContent = "✅ " + t({ zh: "正確!", en: "Correct!" });
        } else {
          lives--; hud();
          fbEl.textContent = (level === null ? "⏱ " : "❌ ") +
            t({ zh: "正確答案:", en: "Answer: " }) + levelText(correct);
        }
        if (lives <= 0) { gameOver(); return; }
        timer = setTimeout(nextRound, 1100);
      }

      function gameOver() {
        clearTimer();
        caseEl.innerHTML = '<div class="g-triage-over"><b style="font-size:1.4rem">' +
          esc(t({ zh: "結束!得分 ", en: "Game over — score " })) + score + "</b></div>";
        fillEl.style.width = "0%";
        fbEl.innerHTML = '<button class="gu-btn gu-btn--primary" id="g-triage-again" type="button">' +
          esc(t({ zh: "再玩一次", en: "Play again" })) + "</button>";
        var again = root.querySelector("#g-triage-again");
        again.addEventListener("click", start);
      }

      function start() {
        lives = 3; score = 0; lastIdx = -1;
        hud();
        nextRound();
      }

      optBtns.forEach(function (b) {
        b.addEventListener("click", function () { answer(b.getAttribute("data-l")); });
      });
      start();

      return function cleanup() { clearTimer(); };
    }
  });
})();
