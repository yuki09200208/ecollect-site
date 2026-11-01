// 全ページ共通：ヘッダー・フッター・申し込み帯・画面下の固定ボタンを差し込む
(function () {
  var TEL = "090-3717-5833";
  var TELLINK = "tel:09037175833";
  var page = document.body.getAttribute("data-page") || "";

  var nav = [
    ["items", "取扱ジャンル", "index.html#genres"],
    ["price", "買取事例", "price.html"],
    ["auction", "オークション代行", "2026-10-21_auction.html"],
    ["method", "買取方法", "method-visit.html"],
    ["faq", "よくある質問", "faq.html"],
    ["shop", "会社概要", "shop.html"]
  ];
  var genres = [
    ["骨董品（陶器・ガラス）", "item-antique.html"], ["腕時計", "2026-10-21_item-watch.html"],
    ["カメラ", "item-camera.html"], ["レコード・オーディオ", "item-record.html"],
    ["ゲーム・おもちゃ", "item-game.html"], ["着物", "2026-10-21_item-kimono.html"],
    ["宝石・アクセサリー", "item-accessory.html"], ["ブランドバッグ", "2026-10-31_item-bag.html"], ["お酒・ライター", "2026-10-21_item-liquor.html"],
    ["レトロ雑貨・家電・家具", "2026-10-21_item-retro.html"], ["電化製品（製造10年未満）", "2026-10-21_item-electronics.html"], ["釣り道具", "2026-10-30_item-fishing.html"], ["ゴルフ道具", "2026-11-01_item-golf.html"]
  ];
  function navLinks() {
    return nav.map(function (n) {
      return '<a href="' + n[2] + '"' + (page === n[0] ? ' aria-current="page"' : "") + ">" + n[1] + "</a>";
    }).join("");
  }

  var header =
    '<header class="site-header"><div class="wrap head">' +
      '<a class="logo" href="index.html"><span class="logo-mark">エコ</span>' +
      '<span class="logo-text">エコレクト<small>骨董・時計・カメラ・レコード・着物ほか</small></span></a>' +
      '<nav class="gnav" aria-label="メインメニュー">' + navLinks() + "</nav>" +
      '<div class="head-tel"><small>受付 9:00〜20:00（年中無休）</small><b>' + TEL + "</b></div>" +
      '<button class="menu-btn" type="button" id="menu-btn" aria-expanded="false" aria-controls="sp-nav">メニュー</button>' +
    "</div>" +
    '<nav class="sp-nav" id="sp-nav" aria-label="メニュー"><div class="wrap">' + navLinks() +
      '<a href="flow.html">買取の流れ</a><a href="' + TELLINK + '">電話で無料査定</a></div></nav>' +
    "</header>";

  var cta =
    '<section class="cta"><div class="wrap">' +
      "<h2>まずはお気軽に無料査定</h2>" +
      "<p>対象ジャンルは<b>1点1,000円以上の最低保証</b>つき。ご相談・お申し込みはお電話でどうぞ。</p>" +
      '<div class="cta-btns">' +
        '<a class="btn btn-main" href="' + TELLINK + '">電話で無料査定</a>' +
      "</div>" +
      '<p class="tel-num">お電話でのご相談　<b>' + TEL + "</b><br>受付 9:00〜20:00（年中無休）</p>" +
    "</div></section>";

  var footer =
    '<footer class="site-footer"><div class="wrap">' +
      '<div class="foot">' +
        "<div><h3>エコレクト</h3><p>〒556-0015 大阪府大阪市浪速区敷津西2-11-12<br>TEL " + TEL + "<br>古物商許可 大阪府公安委員会 第62112R082124号</p></div>" +
        "<div><h3>取扱ジャンル</h3><ul>" +
          genres.map(function (g) { return '<li><a href="' + g[1] + '">' + g[0] + "</a></li>"; }).join("") +
        "</ul></div>" +
        "<div><h3>ご案内</h3><ul>" +
          '<li><a href="price.html">買取事例</a></li><li><a href="2026-10-21_auction.html">オークション代行プラン</a></li>' +
          '<li><a href="method-visit.html">出張買取</a></li>' +
          '<li><a href="method-delivery.html">宅配買取</a></li><li><a href="flow.html">買取の流れ</a></li>' +
          '<li><a href="faq.html">よくある質問</a></li><li><a href="shop.html">会社概要</a></li></ul></div>' +
      "</div>" +
      '<p class="copy">© エコレクト　写真：Unsplash</p>' +
    "</div></footer>" +
    '<div class="fixed-cta">' +
      '<a class="btn btn-main" href="' + TELLINK + '">電話で無料査定（' + TEL + '）</a>' +
    "</div>";

  function put(id, html) {
    var el = document.getElementById(id);
    if (el) el.outerHTML = html;
  }
  put("site-header", header);
  if (!document.body.hasAttribute("data-no-cta")) put("site-cta", cta);
  else put("site-cta", "");
  put("site-footer", footer);

  var btn = document.getElementById("menu-btn");
  var sp = document.getElementById("sp-nav");
  if (btn && sp) {
    btn.addEventListener("click", function () {
      var open = sp.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.textContent = open ? "閉じる" : "メニュー";
    });
  }
})();
