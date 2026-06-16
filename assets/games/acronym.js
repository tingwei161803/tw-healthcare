/* =========================================================================
   acronym.js — 縮寫對對碰 / Acronym Match

   玩法:畫面顯示一個醫療科技名詞的全稱與中文意義,在倒數結束前從四個縮寫中
   點出正確的那一個。答對連發、答錯或逾時扣命,3 條命用完結束。
   依遊戲契約:IIFE、window.GAMES.push、scoped CSS(g-acronym-)、ctx.t 雙語、
   ctx.load/save 最佳分、回傳 cleanup 清掉 timer/listener。
   ========================================================================= */
(function () {
  "use strict";

  function injectCSS() {
    if (document.getElementById("g-acronym-css")) return;
    var s = document.createElement("style");
    s.id = "g-acronym-css";
    s.textContent = [
      ".g-acronym-wrap{width:100%;max-width:560px;margin:0 auto;}",
      ".g-acronym-q{background:var(--surface-container);border:1px solid var(--outline-variant);",
        "border-radius:var(--radius-lg);padding:22px 20px;text-align:center;min-height:104px;",
        "display:flex;flex-direction:column;gap:6px;align-items:center;justify-content:center;color:var(--on-surface);}",
      ".g-acronym-q__full{font-size:1.1rem;font-weight:700;line-height:1.4;}",
      ".g-acronym-q__zh{font-size:.95rem;color:var(--on-surface-variant);}",
      ".g-acronym-bar{height:8px;border-radius:999px;background:var(--surface-variant);overflow:hidden;margin:14px 0;}",
      ".g-acronym-bar__fill{height:100%;width:100%;background:var(--primary);transition:width .1s linear;}",
      ".g-acronym-opts{display:grid;grid-template-columns:1fr 1fr;gap:10px;}",
      ".g-acronym-opt{padding:16px 10px;border-radius:var(--radius);border:1px solid var(--outline-variant);",
        "background:var(--surface-container-high);color:var(--on-surface);cursor:pointer;font:inherit;",
        "font-weight:700;font-size:1rem;letter-spacing:.02em;transition:transform .08s,background .15s,border-color .15s;}",
      ".g-acronym-opt:hover:not(:disabled){background:var(--surface-variant);border-color:var(--primary);}",
      ".g-acronym-opt:active{transform:scale(.97);}",
      ".g-acronym-opt:disabled{cursor:default;}",
      ".g-acronym-opt--correct{background:color-mix(in srgb,var(--success) 24%,var(--surface));border-color:var(--success);}",
      ".g-acronym-opt--wrong{background:color-mix(in srgb,var(--error) 20%,var(--surface));border-color:var(--error);}",
      ".g-acronym-fb{min-height:1.4em;margin:12px 0 0;text-align:center;font-weight:600;color:var(--on-surface);}"
    ].join("");
    document.head.appendChild(s);
  }

  var TERMS = [
    { a: "SaMD",  full: "Software as a Medical Device", zh: "醫療器材軟體" },
    { a: "HIS",   full: "Hospital Information System", zh: "醫院資訊系統" },
    { a: "EMR",   full: "Electronic Medical Record", zh: "電子病歷" },
    { a: "PACS",  full: "Picture Archiving and Communication System", zh: "醫學影像儲傳系統" },
    { a: "HL7",   full: "Health Level Seven", zh: "醫療資訊交換標準" },
    { a: "FHIR",  full: "Fast Healthcare Interoperability Resources", zh: "快速醫療互通資源" },
    { a: "DICOM", full: "Digital Imaging and Communications in Medicine", zh: "醫學數位影像與傳輸" },
    { a: "CDSS",  full: "Clinical Decision Support System", zh: "臨床決策支援系統" },
    { a: "IVD",   full: "In Vitro Diagnostics", zh: "體外診斷" },
    { a: "DTx",   full: "Digital Therapeutics", zh: "數位療法" },
    { a: "NHI",   full: "National Health Insurance", zh: "全民健康保險" },
    { a: "TFDA",  full: "Taiwan Food and Drug Administration", zh: "衛福部食藥署" },
    { a: "UDI",   full: "Unique Device Identification", zh: "醫療器材單一識別碼" },
    { a: "CGM",   full: "Continuous Glucose Monitoring", zh: "連續血糖監測" },
    { a: "RPM",   full: "Remote Patient Monitoring", zh: "遠端病人監測" },
    { a: "PHR",   full: "Personal Health Record", zh: "個人健康紀錄" },
    { a: "QMS",   full: "Quality Management System", zh: "品質管理系統" },
    { a: "NGS",   full: "Next-Generation Sequencing", zh: "次世代定序" }
  ];

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  (window.GAMES = window.GAMES || []).push({
    id: "acronym",
    icon: "abc",
    accent: "#00696E",
    category: { zh: "術語", en: "Terminology" },
    title:   { zh: "縮寫對對碰", en: "Acronym Match" },
    tagline: { zh: "看全名,選出正確的醫療科技縮寫,測你的黑話熟度。",
               en: "Match the medtech acronym to its meaning against the clock." },

    mount: function (root, ctx) {
      injectCSS();
      var t = ctx.t, esc = ctx.esc;
      var ROUND_MS = 7000;
      var best = Number(ctx.load("best", 0)) || 0;
      var lives, score, timer, timeLeft, locked, lastIdx, current;

      root.innerHTML =
        '<div class="g-acronym-wrap gu-center">' +
          '<div class="gu-statbar">' +
            '<div class="gu-stat"><span class="gu-stat__v" id="g-acronym-lives">❤❤❤</span>' +
              '<span class="gu-stat__k">' + esc(t({ zh: "生命", en: "Lives" })) + '</span></div>' +
            '<div class="gu-stat"><span class="gu-stat__v" id="g-acronym-score">0</span>' +
              '<span class="gu-stat__k">' + esc(t({ zh: "得分", en: "Score" })) + '</span></div>' +
            '<div class="gu-stat"><span class="gu-stat__v" id="g-acronym-best">' + (best || "—") + '</span>' +
              '<span class="gu-stat__k">' + esc(t({ zh: "最佳", en: "Best" })) + '</span></div>' +
          '</div>' +
          '<div class="g-acronym-q">' +
            '<span class="g-acronym-q__full" id="g-acronym-full"></span>' +
            '<span class="g-acronym-q__zh" id="g-acronym-zh"></span>' +
          '</div>' +
          '<div class="g-acronym-bar"><div class="g-acronym-bar__fill" id="g-acronym-fill"></div></div>' +
          '<div class="g-acronym-opts" id="g-acronym-opts"></div>' +
          '<p class="g-acronym-fb gu-hint" id="g-acronym-fb"></p>' +
        '</div>';

      var fullEl = root.querySelector("#g-acronym-full");
      var zhEl   = root.querySelector("#g-acronym-zh");
      var fillEl = root.querySelector("#g-acronym-fill");
      var optsEl = root.querySelector("#g-acronym-opts");
      var fbEl   = root.querySelector("#g-acronym-fb");
      var livesEl = root.querySelector("#g-acronym-lives");
      var scoreEl = root.querySelector("#g-acronym-score");
      var bestEl  = root.querySelector("#g-acronym-best");

      function clearTimer() { if (timer) { clearInterval(timer); timer = null; } }
      function hud() {
        livesEl.textContent = lives > 0 ? Array(lives + 1).join("❤") : "—";
        scoreEl.textContent = score;
      }

      function nextRound() {
        clearTimer();
        fbEl.textContent = "";
        locked = false;
        do { current = Math.floor(Math.random() * TERMS.length); } while (current === lastIdx && TERMS.length > 1);
        lastIdx = current;
        var correct = TERMS[current];
        fullEl.textContent = correct.full;
        zhEl.textContent = correct.zh;

        // build 4 options: correct + 3 distractor acronyms
        var others = shuffle(TERMS.filter(function (x) { return x.a !== correct.a; })).slice(0, 3);
        var opts = shuffle(others.concat([correct]));
        optsEl.innerHTML = opts.map(function (o) {
          return '<button class="g-acronym-opt" type="button" data-a="' + esc(o.a) + '">' + esc(o.a) + "</button>";
        }).join("");
        [].forEach.call(optsEl.querySelectorAll(".g-acronym-opt"), function (b) {
          b.addEventListener("click", function () { answer(b, correct.a); });
        });

        timeLeft = ROUND_MS;
        fillEl.style.width = "100%";
        timer = setInterval(function () {
          timeLeft -= 100;
          fillEl.style.width = Math.max(0, (timeLeft / ROUND_MS) * 100) + "%";
          if (timeLeft <= 0) answer(null, correct.a);
        }, 100);
      }

      function answer(btn, correctA) {
        if (locked) return;
        locked = true;
        clearTimer();
        var btns = [].slice.call(optsEl.querySelectorAll(".g-acronym-opt"));
        btns.forEach(function (b) {
          b.disabled = true;
          if (b.getAttribute("data-a") === correctA) b.classList.add("g-acronym-opt--correct");
        });
        var chosen = btn ? btn.getAttribute("data-a") : null;
        if (chosen === correctA) {
          score++; hud();
          if (score > best) { best = score; ctx.save("best", best); bestEl.textContent = best; }
          fbEl.textContent = "✅ " + t({ zh: "答對!", en: "Correct!" });
        } else {
          if (btn) btn.classList.add("g-acronym-opt--wrong");
          lives--; hud();
          fbEl.textContent = (btn ? "❌ " : "⏱ ") + t({ zh: "正解:", en: "Answer: " }) + correctA;
        }
        if (lives <= 0) { gameOver(); return; }
        timer = setTimeout(nextRound, 1100);
      }

      function gameOver() {
        clearTimer();
        fullEl.textContent = t({ zh: "結束!得分 ", en: "Game over — score " }) + score;
        zhEl.textContent = "";
        fillEl.style.width = "0%";
        optsEl.innerHTML = "";
        fbEl.innerHTML = '<button class="gu-btn gu-btn--primary" id="g-acronym-again" type="button">' +
          esc(t({ zh: "再玩一次", en: "Play again" })) + "</button>";
        root.querySelector("#g-acronym-again").addEventListener("click", start);
      }

      function start() {
        lives = 3; score = 0; lastIdx = -1;
        hud();
        nextRound();
      }
      start();

      return function cleanup() { clearTimer(); };
    }
  });
})();
