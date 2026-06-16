/* =========================================================================
   multipage · app.js   (vanilla, no build, no chart lib)

   The PAGE-LEVEL LAYOUT ENGINE. shell.js has already injected the shared
   chrome and published window.LDW. This script:

     1. reads the current page from <body data-page="..."> (via LDW),
     2. picks a renderer from RENDERERS by that page's `layout`,
     3. paints it into <main id="page"> and wires its interactions,
     4. registers an onLang() callback so a language switch repaints the body.

   RENDERERS is the LAYOUT REGISTRY — one entry per supported page layout:
     hub | gallery | article | dashboard | timeline | table |
     bento | kanban | faq | comparison | leaderboard | scrolly | map
   To add a layout, add one renderer (returns the inner HTML for #page) and,
   if it needs interaction, one matching WIRE entry. Nothing else changes.
   ========================================================================= */
(function () {
  "use strict";

  function boot() {
    // Wait until shell.js has injected the chrome (app bar, nav, footer, #dialog)
    // and published LDW. End-of-body scripts run while readyState === "loading",
    // so the shell defers its injection to DOMContentLoaded — we must wait for it.
    if (!window.LDW || !window.LDW.ready) {
      document.addEventListener("ldw:shell-ready", boot, { once: true });
      return;
    }
    var L = window.LDW;

    var t = L.t, esc = L.escapeHtml, r = L.r;
    var pageEl = document.getElementById("page");
    var teardowns = [];   // observers / listeners to disconnect before each repaint
    var arcadeOpen = null;   // id of the mini-game currently open (survives lang re-render)

    /* ---------- shared bits ---------- */
    function head(p) {
      var sub = t(p.subtitle)
        ? '<p class="page-head__sub">' + esc(t(p.subtitle)) + "</p>" : "";
      return '<header class="page-head"><h1>' + esc(t(p.title)) + "</h1>" + sub + "</header>";
    }

    function barChart(series, accent) {
      var W = 520, H = 240, padL = 16, padR = 16, padT = 16, padB = 44;
      var plotW = W - padL - padR, plotH = H - padT - padB;
      var max = Math.max.apply(null, series.map(function (d) { return d.value; }).concat([1]));
      var n = series.length || 1, gap = 14, bw = (plotW - gap * (n - 1)) / n, baseY = padT + plotH;
      var bars = series.map(function (d, i) {
        var x = padL + i * (bw + gap), h = (d.value / max) * plotH, y = baseY - h;
        var label = esc(t(d.label)), val = esc(String(d.value));
        return '<rect class="bar-rect" x="' + r(x) + '" y="' + r(y) + '" width="' + r(bw) +
          '" height="' + r(h) + '" rx="5"' + (accent ? ' style="fill:' + esc(accent) + '"' : "") +
          '><title>' + label + ": " + val + "</title></rect>" +
          '<text class="bar-value" x="' + r(x + bw / 2) + '" y="' + r(y - 6) + '" text-anchor="middle">' + val + "</text>" +
          '<text class="bar-label" x="' + r(x + bw / 2) + '" y="' + r(baseY + 18) + '" text-anchor="middle">' + label + "</text>";
      }).join("");
      return '<svg viewBox="0 0 ' + W + " " + H + '" role="img" preserveAspectRatio="xMidYMid meet" aria-label="bar chart">' +
        '<line class="axis-line" x1="' + padL + '" y1="' + r(baseY) + '" x2="' + r(W - padR) + '" y2="' + r(baseY) + '" />' +
        bars + "</svg>";
    }

    function lineChart(points) {
      var W = 520, H = 240, padL = 28, padR = 16, padT = 16, padB = 32;
      var plotW = W - padL - padR, plotH = H - padT - padB;
      var ys = points.map(function (d) { return d.y; });
      var max = Math.max.apply(null, ys.concat([1])), min = Math.min.apply(null, ys.concat([0]));
      var span = (max - min) || 1, n = points.length || 1;
      var xy = points.map(function (d, i) {
        var x = padL + (n === 1 ? plotW / 2 : (i / (n - 1)) * plotW);
        var y = padT + plotH - ((d.y - min) / span) * plotH;
        return { x: x, y: y, d: d };
      });
      var path = xy.map(function (pt, i) { return (i ? "L" : "M") + r(pt.x) + " " + r(pt.y); }).join(" ");
      var area = path + " L" + r(xy[xy.length - 1].x) + " " + r(padT + plotH) + " L" + r(xy[0].x) + " " + r(padT + plotH) + " Z";
      var dots = xy.map(function (pt) {
        return '<circle class="line-dot" cx="' + r(pt.x) + '" cy="' + r(pt.y) + '" r="3"><title>' +
          esc(String(pt.d.x)) + ": " + esc(String(pt.d.y)) + "</title></circle>";
      }).join("");
      var labels = xy.map(function (pt) {
        return '<text class="bar-label" x="' + r(pt.x) + '" y="' + r(padT + plotH + 20) + '" text-anchor="middle">' + esc(String(pt.d.x)) + "</text>";
      }).join("");
      return '<svg viewBox="0 0 ' + W + " " + H + '" role="img" preserveAspectRatio="xMidYMid meet" aria-label="line chart">' +
        '<path class="line-area" d="' + area + '" />' +
        '<path class="line-path" d="' + path + '" fill="none" />' + dots + labels + "</svg>";
    }

    /* =====================================================================
       LAYOUT REGISTRY
       ===================================================================== */
    var RENDERERS = {

      /* ---- hub: hero stats + a card linking to every other page ---- */
      hub: function (p) {
        var stats = (p.stats || []).map(function (s) {
          return '<div class="hero__stat" data-item>' +
            '<b class="hero__stat-value" data-count="' + esc(String(s.value)) + '">0</b>' +
            '<span class="hero__stat-label">' + esc(t(s.label)) + "</span></div>";
        }).join("");
        var cards = L.pages.filter(function (q) { return q.slug !== "home"; }).map(function (q) {
          return '<a class="card card--nav" data-item href="' + esc(L.pageHref(q)) + '" ' +
              'aria-label="' + esc(t(q.title)) + '">' +
            '<span class="material-symbols-rounded card__icon" aria-hidden="true">' + esc(q.icon || "label") + "</span>" +
            '<h3 class="card__title">' + esc(t(q.title)) + "</h3>" +
            '<p class="card__summary">' + esc(t(q.subtitle)) + "</p></a>";
        }).join("");
        return head(p) +
          (stats ? '<div class="hero__stats">' + stats + "</div>" : "") +
          '<div class="grid">' + cards + "</div>";
      },

      /* ---- gallery: search + chips + card grid + dialog ---- */
      gallery: function (p) {
        var cats = (p.categories || []).map(function (c) {
          return '<button class="chip" type="button" data-cat="' + esc(c.key) + '">' +
            esc(c[L.state.lang] || c.en) + "</button>";
        }).join("");
        var allLabel = L.state.lang === "en" ? "All" : "全部";
        return head(p) +
          '<div class="toolbar">' +
            '<input id="search" class="search" type="search" autocomplete="off" ' +
              'placeholder="' + (L.state.lang === "en" ? "Search…" : "搜尋…") + '" ' +
              'aria-label="' + (L.state.lang === "en" ? "Search" : "搜尋") + '" />' +
            (cats ? '<div class="chips"><button class="chip chip--active" type="button" data-cat="">' + esc(allLabel) + "</button>" + cats + "</div>" : "") +
          "</div>" +
          '<p class="result-count" id="resultCount" aria-live="polite"></p>' +
          '<div class="grid" id="grid"></div>';
      },

      /* ---- article: sticky TOC + prose + reading progress ---- */
      article: function (p) {
        var toc = (p.sections || []).map(function (s) {
          return '<a class="toc-link" href="#' + esc(s.id) + '" data-toc="' + esc(s.id) + '">' + esc(t(s.heading)) + "</a>";
        }).join("");
        var body = (p.sections || []).map(function (s) {
          var blocks = (s.blocks || []).map(function (b) {
            if (b.type === "h3") return "<h3>" + esc(t(b.text)) + "</h3>";
            if (b.type === "quote") return "<blockquote>" + esc(t(b.text)) + "</blockquote>";
            if (b.type === "code") return "<pre><code>" + esc(t(b.text)) + "</code></pre>";
            if (b.type === "ul") {
              var arr = (b.items && (b.items[L.state.lang] || b.items.en || b.items.zh)) || [];
              return "<ul>" + arr.map(function (li) { return "<li>" + esc(li) + "</li>"; }).join("") + "</ul>";
            }
            return "<p>" + esc(t(b.text)) + "</p>";
          }).join("");
          return '<section class="article-section" id="' + esc(s.id) + '" data-item ' +
            'aria-labelledby="' + esc(s.id) + '-h"><h2 id="' + esc(s.id) + '-h">' + esc(t(s.heading)) + "</h2>" + blocks + "</section>";
        }).join("");
        return '<div class="reading-progress" id="readingProgress" aria-hidden="true"></div>' +
          head(p) +
          '<div class="article-layout">' +
            '<nav class="toc" aria-label="Contents"><div class="toc__inner">' + toc + "</div></nav>" +
            '<div class="article-body prose">' + body + "</div>" +
          "</div>";
      },

      /* ---- dashboard: stat cards + bar + line + table ---- */
      dashboard: function (p) {
        var stats = (p.stats || []).map(function (s) {
          var d = s.delta;
          var deltaHtml = (d === 0 || d) ?
            '<span class="stat-delta stat-delta--' + (d >= 0 ? "up" : "down") + '">' +
              (d >= 0 ? "▲ " : "▼ ") + esc(String(Math.abs(d))) + "%</span>" : "";
          return '<div class="stat-card" data-item>' +
            '<span class="stat-label">' + esc(t(s.label)) + "</span>" +
            '<b class="stat-value">' + esc(String(s.value)) +
              (t(s.unit) ? ' <span class="stat-unit">' + esc(t(s.unit)) + "</span>" : "") + "</b>" +
            deltaHtml + "</div>";
        }).join("");
        var bars = p.bars ? '<figure class="panel" data-item><figcaption>' + esc(t(p.bars.title)) + "</figcaption>" +
          '<div class="chart-wrap">' + barChart(p.bars.series || []) + "</div></figure>" : "";
        var line = p.line ? '<figure class="panel" data-item><figcaption>' + esc(t(p.line.title)) + "</figcaption>" +
          '<div class="chart-wrap">' + lineChart(p.line.points || []) + "</div></figure>" : "";
        var table = "";
        if (p.table) {
          var thead = (p.table.columns || []).map(function (c) { return "<th>" + esc(t(c.label)) + "</th>"; }).join("");
          var tbody = (p.table.rows || []).map(function (row) {
            return "<tr data-item>" + (p.table.columns || []).map(function (c) {
              var v = row[c.key];
              return "<td>" + esc(typeof v === "object" ? t(v) : String(v == null ? "" : v)) + "</td>";
            }).join("") + "</tr>";
          }).join("");
          table = '<div class="panel panel--wide" data-item><div class="table-wrap"><table class="data-table">' +
            "<thead><tr>" + thead + "</tr></thead><tbody>" + tbody + "</tbody></table></div></div>";
        }
        return head(p) +
          '<div class="stat-grid">' + stats + "</div>" +
          '<div class="panel-grid">' + bars + line + "</div>" + table;
      },

      /* ---- timeline: dated event cards down a rail ---- */
      timeline: function (p) {
        var items = (p.events || []).map(function (ev) {
          return '<li class="tl-item" data-item><div class="tl-dot" aria-hidden="true"></div>' +
            '<div class="tl-card"><span class="tl-date">' + esc(t(ev.date)) + "</span>" +
            '<h3 class="tl-title">' + esc(t(ev.title)) + "</h3>" +
            '<p class="tl-body">' + esc(t(ev.body)) + "</p></div></li>";
        }).join("");
        return head(p) + '<ol class="timeline">' + items + "</ol>";
      },

      /* ---- table: searchable + sortable ---- */
      table: function (p) {
        return head(p) +
          '<div class="toolbar">' +
            '<input id="search" class="search" type="search" autocomplete="off" ' +
              'placeholder="' + (L.state.lang === "en" ? "Search…" : "搜尋…") + '" ' +
              'aria-label="' + (L.state.lang === "en" ? "Search" : "搜尋") + '" />' +
            '<div class="chips" id="tableChips"></div>' +
          "</div>" +
          '<div class="table-wrap"><table class="data-table" id="dataTable"><thead></thead><tbody></tbody></table></div>';
      },

      /* ---- bento: asymmetric tile grid ---- */
      bento: function (p) {
        var tiles = (p.tiles || []).map(function (tile) {
          return '<article class="tile tile--' + esc(tile.size || "sm") + (tile.accent ? " tile--accent" : "") + '" data-item>' +
            (tile.icon ? '<span class="material-symbols-rounded tile__icon" aria-hidden="true">' + esc(tile.icon) + "</span>" : "") +
            (tile.value ? '<b class="tile__value">' + esc(tile.value) + "</b>" : "") +
            '<h3 class="tile__title">' + esc(t(tile.title)) + "</h3>" +
            (t(tile.body) ? '<p class="tile__body">' + esc(t(tile.body)) + "</p>" : "") + "</article>";
        }).join("");
        return head(p) + '<div class="bento">' + tiles + "</div>";
      },

      /* ---- kanban: cards grouped by status column ---- */
      kanban: function (p) {
        var cols = (p.columns || []).map(function (col) {
          var cards = (p.cards || []).filter(function (c) { return c.column === col.key; }).map(function (c) {
            var tags = (c.tags || []).map(function (g) { return '<span class="tag">' + esc(g) + "</span>"; }).join("");
            return '<article class="kb-card" data-item><h3 class="kb-card__title">' + esc(t(c.title)) + "</h3>" +
              (t(c.body) ? '<p class="kb-card__body">' + esc(t(c.body)) + "</p>" : "") +
              (tags ? '<div class="card__tags">' + tags + "</div>" : "") + "</article>";
          }).join("");
          var count = (p.cards || []).filter(function (c) { return c.column === col.key; }).length;
          return '<div class="kb-col"><div class="kb-col__head">' + esc(t(col.label)) +
            ' <span class="kb-col__count">' + count + "</span></div>" +
            '<div class="kb-col__body">' + cards + "</div></div>";
        }).join("");
        return head(p) + '<div class="kanban">' + cols + "</div>";
      },

      /* ---- faq: searchable accordion ---- */
      faq: function (p) {
        var items = (p.qa || []).map(function (row) {
          return '<details class="acc-item" data-item data-q="' + esc((t(row.q) + " " + t(row.a)).toLowerCase()) + '">' +
            '<summary class="acc-q"><span>' + esc(t(row.q)) + "</span>" +
            '<span class="material-symbols-rounded acc-chevron" aria-hidden="true">expand_more</span></summary>' +
            '<div class="acc-a">' + esc(t(row.a)) + "</div></details>";
        }).join("");
        return head(p) +
          '<div class="toolbar"><input id="search" class="search" type="search" autocomplete="off" ' +
            'placeholder="' + (L.state.lang === "en" ? "Search…" : "搜尋…") + '" ' +
            'aria-label="' + (L.state.lang === "en" ? "Search" : "搜尋") + '" /></div>' +
          '<div class="accordion" id="accordion">' + items + "</div>";
      },

      /* ---- comparison: plans (cols) x features (rows) ---- */
      comparison: function (p) {
        var plans = p.plans || [], feats = p.features || [];
        var thead = '<th scope="col"></th>' + plans.map(function (pl) {
          return '<th scope="col" class="' + (pl.highlight ? "cmp-col--hl" : "") + '">' +
            '<div class="cmp-plan">' + esc(t(pl.name)) + "</div>" +
            '<div class="cmp-price">' + esc(t(pl.price)) + "</div>" +
            (t(pl.note) ? '<div class="cmp-note">' + esc(t(pl.note)) + "</div>" : "") + "</th>";
        }).join("");
        var rows = feats.map(function (f) {
          var cells = plans.map(function (pl) {
            var v = f.values ? f.values[pl.key] : undefined;
            var cell;
            if (v === true) cell = '<span class="cmp-yes material-symbols-rounded" aria-label="yes">check</span>';
            else if (v === false || v == null) cell = '<span class="cmp-no" aria-label="no">—</span>';
            else cell = esc(t(v));
            return '<td class="' + (pl.highlight ? "cmp-col--hl" : "") + '">' + cell + "</td>";
          }).join("");
          return '<tr data-item><th scope="row" class="cmp-feat">' + esc(t(f.label)) + "</th>" + cells + "</tr>";
        }).join("");
        return head(p) + '<div class="table-wrap"><table class="cmp-table">' +
          "<thead><tr>" + thead + "</tr></thead><tbody>" + rows + "</tbody></table></div>";
      },

      /* ---- leaderboard: ranked list + tier grouping toggle ---- */
      leaderboard: function (p) {
        var listLabel = L.state.lang === "en" ? "List" : "排名";
        var tierLabel = L.state.lang === "en" ? "Tiers" : "階級";
        return head(p) +
          '<div class="seg" role="tablist">' +
            '<button class="seg__btn seg__btn--active" type="button" data-view="list">' + esc(listLabel) + "</button>" +
            '<button class="seg__btn" type="button" data-view="tier">' + esc(tierLabel) + "</button>" +
          "</div>" +
          '<div id="lbView"></div>';
      },

      /* ---- scrolly: sticky visual + stepped narrative ---- */
      scrolly: function (p) {
        var steps = (p.steps || []).map(function (s, i) {
          return '<div class="scrolly-step" data-item data-step="' + i + '"><p>' + esc(t(s.text)) + "</p></div>";
        }).join("");
        return head(p) +
          '<div class="scrolly">' +
            '<div class="scrolly-sticky"><div class="scrolly-visual" id="scrollyVisual"></div></div>' +
            '<div class="scrolly-steps">' + steps + "</div>" +
          "</div>";
      },

      /* ---- map: Leaflet map + list (needs Leaflet on the page) ---- */
      map: function (p) {
        return head(p) +
          '<div class="map-layout">' +
            '<div class="map-box" id="map" role="application" aria-label="Map"></div>' +
            '<ul class="map-list" id="mapList"></ul>' +
          "</div>";
      },

      /* ---- practice: quiz / flashcards / glossary, switched by a seg toggle ---- */
      practice: function (p) {
        var lang = L.state.lang;
        var quizLabel  = lang === "en" ? "Quiz" : "隨堂測驗";
        var cardLabel  = lang === "en" ? "Flashcards" : "字卡";
        var glossLabel = lang === "en" ? "Glossary" : "術語表";
        return head(p) +
          '<div class="seg" id="practiceSeg" role="tablist">' +
            '<button class="seg__btn seg__btn--active" type="button" data-view="quiz">' + esc(quizLabel) + "</button>" +
            '<button class="seg__btn" type="button" data-view="cards">' + esc(cardLabel) + "</button>" +
            '<button class="seg__btn" type="button" data-view="glossary">' + esc(glossLabel) + "</button>" +
          "</div>" +
          '<div id="practiceView" class="practice-view"></div>';
      },

      /* ---- arcade: a wall of self-registered mini-games (window.GAMES) ---- */
      /* Each game is a self-contained module in assets/games/*.js that pushes
         { id, icon, title, tagline, category, accent, mount(root, ctx) } onto
         window.GAMES. The grid + filter chips are built in WIRE.arcade. */
      arcade: function (p) {
        var n = (window.GAMES || []).length;
        var sub = t(p.subtitle)
          ? '<p class="page-head__sub">' + esc(t(p.subtitle)) + "</p>" : "";
        var counted = L.state.lang === "en"
          ? (n + " mini-games — pick one and play.")
          : ("共 " + n + " 款小遊戲,挑一個來玩。");
        return '<header class="page-head"><h1>' + esc(t(p.title)) + "</h1>" + sub +
            '<p class="page-head__sub">' + esc(counted) + "</p></header>" +
          '<div class="arcade-filters" id="arcadeFilters"></div>' +
          '<div class="arcade-grid" id="arcadeGrid"></div>' +
          '<section class="arcade-stage" id="arcadeStage" hidden>' +
            '<div class="stage-bar">' +
              '<button class="stage-back" id="stageBack" type="button">' +
                '<span class="material-symbols-rounded" aria-hidden="true">arrow_back</span>' +
                '<span id="stageBackTxt"></span></button>' +
              '<h2 class="stage-title" id="stageTitle"></h2>' +
              '<span class="stage-cat" id="stageCat"></span>' +
            '</div>' +
            '<div class="game-host" id="gameHost"></div>' +
          '</section>';
      }
    };

    /* =====================================================================
       WIRING (interactions) — keyed by layout, run after innerHTML is set
       ===================================================================== */
    var WIRE = {
      hub: function () { animateCounters(); },

      gallery: function (p) {
        var grid = document.getElementById("grid");
        var search = document.getElementById("search");
        var count = document.getElementById("resultCount");
        var chips = [].slice.call(pageEl.querySelectorAll(".chip"));
        var st = { q: "", cat: "" };

        function matches(item) {
          if (st.cat && item.category !== st.cat) return false;
          if (!st.q) return true;
          var hay = (t(item.title) + " " + t(item.summary) + " " + (item.tags || []).join(" ")).toLowerCase();
          return hay.indexOf(st.q) !== -1;
        }
        function paint() {
          var rows = (p.items || []).filter(matches);
          grid.innerHTML = rows.map(function (item) {
            var tags = (item.tags || []).map(function (g) { return '<span class="tag">' + esc(g) + "</span>"; }).join("");
            return '<article class="card" tabindex="0" role="button" data-item data-slug="' + esc(item.slug) + '" ' +
              'aria-label="' + esc(t(item.title)) + '">' +
              '<h3 class="card__title">' + esc(t(item.title)) + "</h3>" +
              '<p class="card__summary">' + esc(t(item.summary)) + "</p>" +
              (tags ? '<div class="card__tags">' + tags + "</div>" : "") + "</article>";
          }).join("");
          if (count) count.textContent = rows.length + (L.state.lang === "en" ? " result(s)" : " 筆結果");
          wireCards();
        }
        function wireCards() {
          [].forEach.call(grid.querySelectorAll(".card[data-slug]"), function (card) {
            var slug = card.dataset.slug;
            card.addEventListener("click", function () { openItem(slug); });
            card.addEventListener("keydown", function (e) {
              if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openItem(slug); }
            });
          });
        }
        function findItem(slug) {
          return (p.items || []).filter(function (it) { return it.slug === slug; })[0] || null;
        }
        function openItem(slug) {
          var item = findItem(slug); if (!item) return;
          var dlg = L.dialog(), body = document.getElementById("dialogBody");
          var tags = (item.tags || []).map(function (g) { return '<span class="tag">' + esc(g) + "</span>"; }).join("");
          body.innerHTML = '<h2 id="dialogTitle">' + esc(t(item.title)) + "</h2>" +
            (tags ? '<div class="card__tags">' + tags + "</div>" : "") +
            "<p>" + esc(t(item.overview) || t(item.summary)) + "</p>";
          if (!dlg.open) dlg.showModal();
          if (location.hash.slice(1) !== slug) history.replaceState(null, "", "#" + slug);
        }
        function syncHash() {
          var slug = location.hash.slice(1);
          if (slug && findItem(slug)) openItem(slug);
        }
        if (search) search.addEventListener("input", function () { st.q = this.value.trim().toLowerCase(); paint(); });
        chips.forEach(function (chip) {
          chip.addEventListener("click", function () {
            chips.forEach(function (c) { c.classList.remove("chip--active"); });
            chip.classList.add("chip--active");
            st.cat = chip.dataset.cat || "";
            paint();
          });
        });
        /* closing the dialog clears the #slug so the URL returns to clean state
           and a later deep link to the SAME slug fires hashchange again */
        var dlg = L.dialog();
        function onClose() {
          var slug = location.hash.slice(1);
          if (slug && findItem(slug)) history.replaceState(null, "", location.pathname + location.search);
        }
        dlg.addEventListener("close", onClose);
        var onHash = function () { syncHash(); };
        window.addEventListener("hashchange", onHash);
        teardowns.push(function () {
          window.removeEventListener("hashchange", onHash);
          dlg.removeEventListener("close", onClose);
        });
        paint();
        syncHash();
      },

      article: function () {
        var prog = document.getElementById("readingProgress");
        var links = [].slice.call(pageEl.querySelectorAll(".toc-link"));
        var secs = [].slice.call(pageEl.querySelectorAll(".article-section"));
        function onScroll() {
          var h = document.documentElement;
          var max = h.scrollHeight - h.clientHeight;
          if (prog) prog.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        teardowns.push(function () { window.removeEventListener("scroll", onScroll); });
        if ("IntersectionObserver" in window) {
          var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
              if (!en.isIntersecting) return;
              links.forEach(function (a) {
                var on = a.dataset.toc === en.target.id;
                a.classList.toggle("toc-link--active", on);
              });
            });
          }, { rootMargin: "-30% 0px -60% 0px" });
          secs.forEach(function (s) { io.observe(s); });
          teardowns.push(function () { io.disconnect(); });
        }
      },

      dashboard: function () { /* static charts; nothing to wire */ },

      table: function (p) {
        var table = document.getElementById("dataTable");
        var thead = table.querySelector("thead"), tbody = table.querySelector("tbody");
        var search = document.getElementById("search");
        var chipsBox = document.getElementById("tableChips");
        var cols = p.columns || [];
        var st = { q: "", filter: "", sortKey: null, dir: 1 };
        var filterCol = cols.filter(function (c) { return c.filter; })[0];

        function cellText(row, c) { var v = row[c.key]; return typeof v === "object" ? t(v) : String(v == null ? "" : v); }
        function rowMatches(row) {
          if (filterCol && st.filter && cellText(row, filterCol) !== st.filter) return false;
          if (!st.q) return true;
          return cols.some(function (c) { return cellText(row, c).toLowerCase().indexOf(st.q) !== -1; });
        }
        function paintHead() {
          thead.innerHTML = "<tr>" + cols.map(function (c) {
            var arrow = st.sortKey === c.key ? (st.dir > 0 ? " ▲" : " ▼") : "";
            return '<th class="th-sort" data-key="' + esc(c.key) + '" role="button" tabindex="0" aria-label="Sort by ' +
              esc(t(c.label)) + '">' + esc(t(c.label)) + esc(arrow) + "</th>";
          }).join("") + "</tr>";
          [].forEach.call(thead.querySelectorAll(".th-sort"), function (th) {
            th.addEventListener("click", function () { sortBy(th.dataset.key); });
            th.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sortBy(th.dataset.key); } });
          });
        }
        function sortBy(key) {
          if (st.sortKey === key) st.dir = -st.dir; else { st.sortKey = key; st.dir = 1; }
          paint();
        }
        function paint() {
          paintHead();
          var col = cols.filter(function (c) { return c.key === st.sortKey; })[0];
          var rows = (p.rows || []).filter(rowMatches).slice();
          if (col) {
            rows.sort(function (a, b) {
              var va = a[col.key], vb = b[col.key];
              if (col.type === "num") return (Number(va) - Number(vb)) * st.dir;
              return String(typeof va === "object" ? t(va) : va).localeCompare(String(typeof vb === "object" ? t(vb) : vb)) * st.dir;
            });
          }
          tbody.innerHTML = rows.map(function (row) {
            return "<tr data-item>" + cols.map(function (c) {
              if (c.type === "link") {
                var u = row[c.key];
                return '<td><a class="row-link" href="' + esc(u) + '" target="_blank" rel="noopener">' + esc(u) + "</a></td>";
              }
              return "<td>" + esc(cellText(row, c)) + "</td>";
            }).join("") + "</tr>";
          }).join("");
        }
        if (filterCol) {
          var vals = [];
          (p.rows || []).forEach(function (row) { var v = cellText(row, filterCol); if (vals.indexOf(v) === -1) vals.push(v); });
          var allLabel = L.state.lang === "en" ? "All" : "全部";
          chipsBox.innerHTML = '<button class="chip chip--active" type="button" data-v="">' + esc(allLabel) + "</button>" +
            vals.map(function (v) { return '<button class="chip" type="button" data-v="' + esc(v) + '">' + esc(v) + "</button>"; }).join("");
          [].forEach.call(chipsBox.querySelectorAll(".chip"), function (chip) {
            chip.addEventListener("click", function () {
              [].forEach.call(chipsBox.querySelectorAll(".chip"), function (c) { c.classList.remove("chip--active"); });
              chip.classList.add("chip--active");
              st.filter = chip.dataset.v || "";
              paint();
            });
          });
        }
        if (search) search.addEventListener("input", function () { st.q = this.value.trim().toLowerCase(); paint(); });
        paint();
      },

      bento: function () { /* static */ },
      kanban: function () { /* static */ },

      faq: function () {
        var search = document.getElementById("search");
        var items = [].slice.call(pageEl.querySelectorAll(".acc-item"));
        if (search) search.addEventListener("input", function () {
          var q = this.value.trim().toLowerCase();
          items.forEach(function (it) {
            var hit = !q || (it.dataset.q || "").indexOf(q) !== -1;
            it.style.display = hit ? "" : "none";
          });
        });
      },

      comparison: function () { /* static */ },

      leaderboard: function (p) {
        var view = document.getElementById("lbView");
        var btns = [].slice.call(pageEl.querySelectorAll(".seg__btn"));
        var entries = (p.entries || []).slice().sort(function (a, b) { return b.score - a.score; });
        function row(e, rank) {
          return '<li class="lb-row" data-item>' +
            (rank ? '<span class="lb-rank">' + rank + "</span>" : "") +
            '<span class="lb-tier lb-tier--' + esc(e.tier || "") + '">' + esc(e.tier || "") + "</span>" +
            '<span class="lb-name">' + esc(t(e.name)) + "</span>" +
            '<span class="lb-meta">' + esc(t(e.meta)) + "</span>" +
            '<span class="lb-score">' + esc(String(e.score)) + "</span></li>";
        }
        function listView() {
          view.innerHTML = '<ol class="lb-list">' + entries.map(function (e, i) { return row(e, i + 1); }).join("") + "</ol>";
        }
        function tierView() {
          var tiers = [];
          entries.forEach(function (e) { if (tiers.indexOf(e.tier) === -1) tiers.push(e.tier); });
          view.innerHTML = tiers.map(function (tier) {
            var rows = entries.filter(function (e) { return e.tier === tier; }).map(function (e) { return row(e); }).join("");
            return '<div class="lb-tier-group"><div class="lb-tier-head lb-tier--' + esc(tier) + '">' + esc(tier) + "</div>" +
              '<ol class="lb-list">' + rows + "</ol></div>";
          }).join("");
        }
        btns.forEach(function (b) {
          b.addEventListener("click", function () {
            btns.forEach(function (x) { x.classList.remove("seg__btn--active"); });
            b.classList.add("seg__btn--active");
            if (b.dataset.view === "tier") tierView(); else listView();
          });
        });
        listView();
      },

      scrolly: function (p) {
        var visual = document.getElementById("scrollyVisual");
        var steps = [].slice.call(pageEl.querySelectorAll(".scrolly-step"));
        function paintVisual(i) {
          var s = (p.steps || [])[i]; if (!s) return;
          var v = s.visual || {};
          if (v.type === "bars") {
            visual.innerHTML = '<div class="chart-wrap">' + barChart(v.bars || [], v.color) + "</div>";
          } else {
            visual.innerHTML = '<div class="scrolly-stat" style="color:' + esc(v.color || "var(--primary)") + '">' +
              esc(t(v.value)) + "</div>";
          }
        }
        paintVisual(0);
        if ("IntersectionObserver" in window) {
          var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
              if (en.isIntersecting) {
                steps.forEach(function (s) { s.classList.remove("scrolly-step--active"); });
                en.target.classList.add("scrolly-step--active");
                paintVisual(parseInt(en.target.dataset.step, 10) || 0);
              }
            });
          }, { rootMargin: "-45% 0px -45% 0px" });
          steps.forEach(function (s) { io.observe(s); });
          teardowns.push(function () { io.disconnect(); });
        }
      },

      map: function (p) {
        var listEl = document.getElementById("mapList");
        var places = p.places || [];
        listEl.innerHTML = places.map(function (pl) {
          return '<li class="place" data-item data-slug="' + esc(pl.slug) + '" tabindex="0" role="button" ' +
            'aria-label="' + esc(t(pl.name)) + '"><b>' + esc(t(pl.name)) + "</b>" +
            '<span>' + esc(t(pl.body)) + "</span></li>";
        }).join("");

        if (typeof window.L === "undefined" || !window.L.map) {
          // Leaflet not loaded (offline / blocked): list-only graceful fallback.
          document.getElementById("map").innerHTML =
            '<div class="map-fallback">' + esc(L.state.lang === "en" ? "Map unavailable offline — see the list." : "離線時地圖無法載入 — 請看清單。") + "</div>";
          return;
        }
        var map = window.L.map("map", { scrollWheelZoom: false });
        window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap", maxZoom: 19
        }).addTo(map);
        var markers = {}, group = [];
        places.forEach(function (pl) {
          /* alt + title give Leaflet's marker <img role="button"> an accessible name */
          var m = window.L.marker([pl.lat, pl.lng], { alt: t(pl.name), title: t(pl.name), keyboard: true })
            .addTo(map).bindPopup("<b>" + esc(t(pl.name)) + "</b><br>" + esc(t(pl.body)));
          markers[pl.slug] = m; group.push([pl.lat, pl.lng]);
        });
        if (group.length) map.fitBounds(group, { padding: [30, 30] });
        [].forEach.call(listEl.querySelectorAll(".place"), function (li) {
          function go() { var m = markers[li.dataset.slug]; if (m) { map.panTo(m.getLatLng()); m.openPopup(); } }
          li.addEventListener("click", go);
          li.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
        });
        teardowns.push(function () { try { map.remove(); } catch (e) {} });
      },

      /* ---- practice: build quiz / flashcards / glossary sub-views on demand ---- */
      practice: function (p) {
        var seg = pageEl.querySelector("#practiceSeg");
        var view = document.getElementById("practiceView");
        if (!seg || !view) return;

        function quizView() {
          var quiz = p.quiz || [];
          var answered = {}, score = 0;
          view.innerHTML =
            '<p class="practice-score" id="quizScore" aria-live="polite"></p>' +
            '<div class="quiz-list">' + quiz.map(function (q, qi) {
              var opts = (q.options || []).map(function (o, oi) {
                return '<button class="quiz-opt" type="button" data-qi="' + qi + '" data-oi="' + oi + '">' +
                  esc(t(o)) + "</button>";
              }).join("");
              return '<div class="quiz-q" data-item data-qi="' + qi + '">' +
                '<p class="quiz-q__text">' + (qi + 1) + ". " + esc(t(q.q)) + "</p>" +
                '<div class="quiz-opts">' + opts + "</div>" +
                '<p class="quiz-explain" hidden></p></div>';
            }).join("") + "</div>";
          var scoreEl = document.getElementById("quizScore");
          function paintScore() {
            scoreEl.textContent = (L.state.lang === "en" ? "Score: " : "得分:") + score + " / " + quiz.length;
          }
          paintScore();
          [].forEach.call(view.querySelectorAll(".quiz-opt"), function (btn) {
            btn.addEventListener("click", function () {
              var qi = +btn.dataset.qi, oi = +btn.dataset.oi;
              if (answered[qi]) return;
              answered[qi] = true;
              var q = quiz[qi];
              var qEl = view.querySelector('.quiz-q[data-qi="' + qi + '"]');
              [].forEach.call(qEl.querySelectorAll(".quiz-opt"), function (b) {
                b.disabled = true;
                var boi = +b.dataset.oi;
                if (boi === q.answer) b.classList.add("quiz-opt--correct");
                else if (boi === oi) b.classList.add("quiz-opt--wrong");
              });
              if (oi === q.answer) { score++; paintScore(); }
              var ex = qEl.querySelector(".quiz-explain");
              ex.textContent = (oi === q.answer ? "✅ " : "❌ ") + t(q.explain);
              ex.hidden = false;
            });
          });
        }

        function cardsView() {
          var cards = p.flashcards || [];
          view.innerHTML = '<p class="practice-hint gu-hint">' +
            esc(L.state.lang === "en" ? "Tap a card to flip." : "點卡片翻面看解釋。") + "</p>" +
            '<div class="flashgrid">' + cards.map(function (c, i) {
              return '<button class="flashcard" data-item type="button" data-i="' + i + '" aria-label="flashcard">' +
                '<span class="flashcard__inner">' +
                  '<span class="flashcard__face flashcard__front">' + esc(t(c.front)) + "</span>" +
                  '<span class="flashcard__face flashcard__back">' + esc(t(c.back)) + "</span>" +
                "</span></button>";
            }).join("") + "</div>";
          [].forEach.call(view.querySelectorAll(".flashcard"), function (card) {
            card.addEventListener("click", function () { card.classList.toggle("flashcard--flipped"); });
          });
        }

        function glossaryView() {
          var terms = p.glossary || [];
          view.innerHTML =
            '<div class="toolbar"><input id="glossSearch" class="search" type="search" autocomplete="off" ' +
              'placeholder="' + (L.state.lang === "en" ? "Search terms…" : "搜尋術語…") + '" ' +
              'aria-label="' + (L.state.lang === "en" ? "Search terms" : "搜尋術語") + '" /></div>' +
            '<div class="accordion" id="glossList">' + terms.map(function (g) {
              return '<details class="acc-item" data-k="' + esc((t(g.term) + " " + t(g.def)).toLowerCase()) + '">' +
                '<summary class="acc-q"><span>' + esc(t(g.term)) + "</span>" +
                '<span class="material-symbols-rounded acc-chevron" aria-hidden="true">expand_more</span></summary>' +
                '<div class="acc-a">' + esc(t(g.def)) + "</div></details>";
            }).join("") + "</div>";
          var s = document.getElementById("glossSearch");
          var items = [].slice.call(view.querySelectorAll(".acc-item"));
          if (s) s.addEventListener("input", function () {
            var q = this.value.trim().toLowerCase();
            items.forEach(function (it) {
              it.style.display = (!q || (it.dataset.k || "").indexOf(q) !== -1) ? "" : "none";
            });
          });
        }

        var views = { quiz: quizView, cards: cardsView, glossary: glossaryView };
        function show(name) {
          [].forEach.call(seg.querySelectorAll(".seg__btn"), function (b) {
            b.classList.toggle("seg__btn--active", b.dataset.view === name);
          });
          (views[name] || quizView)();
        }
        [].forEach.call(seg.querySelectorAll(".seg__btn"), function (b) {
          b.addEventListener("click", function () { show(b.dataset.view); });
        });
        show("quiz");
      },

      /* ---- arcade: build game cards from window.GAMES; open/close the stage ---- */
      arcade: function () {
        var GAMES = window.GAMES || [];
        var grid    = document.getElementById("arcadeGrid");
        var filters = document.getElementById("arcadeFilters");
        var stage   = document.getElementById("arcadeStage");
        var host    = document.getElementById("gameHost");
        if (!grid || !stage || !host) return;

        var stTitle = document.getElementById("stageTitle");
        var stCat   = document.getElementById("stageCat");
        var stBack  = document.getElementById("stageBack");
        document.getElementById("stageBackTxt").textContent = t({ zh: "返回遊戲牆", en: "All games" });

        var cleanup = null;   // current game's teardown
        var st = { cat: "" };

        function gameCtx(g) {
          var ns = "game:" + g.id + ":";
          return {
            lang: L.state.lang,
            t: t, esc: esc,
            load: function (k, fb) {
              var v = L.lsGet(ns + k);
              if (v == null) return fb;
              try { return JSON.parse(v); } catch (e) { return v; }
            },
            save: function (k, val) { L.lsSet(ns + k, JSON.stringify(val)); },
            close: closeGame
          };
        }
        function bestLabel(g) {
          var v = L.lsGet("game:" + g.id + ":best");
          if (v == null) return "";
          try { v = JSON.parse(v); } catch (e) {}
          if (v == null || v === 0 || v === "") return "";
          return (L.state.lang === "en" ? "Best: " : "最佳:") + v;
        }
        function paintCards() {
          var list = st.cat ? GAMES.filter(function (g) { return t(g.category) === st.cat; }) : GAMES;
          grid.innerHTML = list.map(function (g) {
            var accent = g.accent ? ' style="--gcard-accent:' + esc(g.accent) + '"' : "";
            var best = bestLabel(g);
            return '<button class="gcard" type="button" data-item data-game="' + esc(g.id) + '"' + accent + ">" +
              '<span class="gcard__icon"><span class="material-symbols-rounded" aria-hidden="true">' +
                esc(g.icon || "sports_esports") + "</span></span>" +
              '<span class="gcard__cat">' + esc(t(g.category)) + "</span>" +
              '<h3 class="gcard__title">' + esc(t(g.title)) + "</h3>" +
              '<p class="gcard__tag">' + esc(t(g.tagline)) + "</p>" +
              (best ? '<span class="gcard__best">' + esc(best) + "</span>" : "") +
              '<span class="gcard__play"><span class="material-symbols-rounded" aria-hidden="true">play_arrow</span>' +
                esc(t({ zh: "開始玩", en: "Play" })) + "</span></button>";
          }).join("") || '<p class="empty">' + esc(t({ zh: "尚無遊戲", en: "No games yet" })) + "</p>";
          [].forEach.call(grid.querySelectorAll(".gcard"), function (card) {
            card.addEventListener("click", function () { openGame(card.getAttribute("data-game")); });
          });
        }
        function paintFilters() {
          var cats = [];
          GAMES.forEach(function (g) { var c = t(g.category); if (c && cats.indexOf(c) < 0) cats.push(c); });
          var all = t({ zh: "全部", en: "All" });
          filters.innerHTML = ['<button class="chip' + (st.cat === "" ? " chip--active" : "") + '" data-cat="">' + esc(all) + "</button>"]
            .concat(cats.map(function (c) {
              return '<button class="chip' + (st.cat === c ? " chip--active" : "") + '" data-cat="' + esc(c) + '">' + esc(c) + "</button>";
            })).join("");
          [].forEach.call(filters.querySelectorAll(".chip"), function (chip) {
            chip.addEventListener("click", function () {
              st.cat = chip.getAttribute("data-cat") || "";
              paintFilters(); paintCards();
            });
          });
        }
        function findGame(id) {
          for (var i = 0; i < GAMES.length; i++) if (GAMES[i].id === id) return GAMES[i];
          return null;
        }
        function openGame(id) {
          var g = findGame(id);
          if (!g) return;
          arcadeOpen = id;
          if (cleanup) { try { cleanup(); } catch (e) {} cleanup = null; }
          host.innerHTML = "";
          stTitle.textContent = t(g.title);
          stCat.textContent = t(g.category);
          grid.hidden = true; filters.hidden = true; stage.hidden = false;
          try { cleanup = g.mount(host, gameCtx(g)) || null; }
          catch (e) { host.innerHTML = '<p class="empty">⚠️ ' + esc(t({ zh: "這個遊戲載入失敗", en: "This game failed to load" })) + "</p>"; }
          stage.scrollIntoView({ block: "start" });
        }
        function closeGame() {
          if (cleanup) { try { cleanup(); } catch (e) {} cleanup = null; }
          host.innerHTML = "";
          arcadeOpen = null;
          stage.hidden = true; grid.hidden = false; filters.hidden = false;
          paintCards();
        }
        stBack.addEventListener("click", closeGame);
        paintFilters();
        paintCards();
        if (arcadeOpen && findGame(arcadeOpen)) openGame(arcadeOpen);
        teardowns.push(function () { if (cleanup) { try { cleanup(); } catch (e) {} cleanup = null; } });
      }
    };

    /* ---- hero count-up (shared by hub) ---- */
    function animateCounters() {
      var els = [].slice.call(pageEl.querySelectorAll(".hero__stat-value[data-count]"));
      if (!els.length) return;
      function run(el) {
        var target = parseFloat(el.dataset.count) || 0, dur = 1000, start = null;
        function step(ts) {
          if (start === null) start = ts;
          var pr = Math.min(1, (ts - start) / dur), eased = 1 - Math.pow(1 - pr, 3);
          el.textContent = String(Math.round(target * eased));
          if (pr < 1) requestAnimationFrame(step); else el.textContent = String(target);
        }
        requestAnimationFrame(step);
      }
      if (!("IntersectionObserver" in window)) { els.forEach(run); return; }
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
      }, { threshold: 0.4 });
      els.forEach(function (el) { io.observe(el); });
      teardowns.push(function () { io.disconnect(); });
    }

    /* =====================================================================
       RENDER the current page; re-runnable on language switch
       ===================================================================== */
    function render() {
      teardowns.forEach(function (fn) { try { fn(); } catch (e) {} });
      teardowns = [];
      var p = L.currentPage();
      if (!p) { pageEl.innerHTML = '<p class="empty">No page data.</p>'; return; }
      var fn = RENDERERS[p.layout] || RENDERERS.gallery;
      pageEl.className = "page page--" + p.layout;
      pageEl.innerHTML = fn(p);
      var w = WIRE[p.layout];
      if (w) w(p);
    }

    L.onLang(render);
    render();
  }

  boot();
})();
