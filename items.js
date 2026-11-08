// 取扱ジャンルのデータ。各ジャンルページは <main id="item-page" data-item="camera"> のように指定する
// page：ジャンルページのファイル名 / img：写真（ないジャンルはアイコンで表示） / guarantee：最低保証の対象か
var ICONS = {
  antique: '<path d="M9 3h6M10 3v3c-3 2-4 5-4 8 0 4 3 7 6 7s6-3 6-7c0-3-1-6-4-8V3"/><path d="M7.5 12h9"/>',
  watch: '<circle cx="12" cy="12" r="6"/><path d="M9 6.5L9.5 2h5l.5 4.5M9 17.5l.5 4.5h5l.5-4.5M12 9v3l2 1.5"/>',
  camera: '<path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="4"/>',
  record: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 6a6 6 0 016 6"/>',
  game: '<path d="M7 8h10a5 5 0 015 5 3 3 0 01-5.3 1.9L15 13H9l-1.7 1.9A3 3 0 012 13a5 5 0 015-5z"/><path d="M7 10v3M5.5 11.5h3M16 11h.01M18 12.5h.01"/>',
  kimono: '<path d="M8 3l4 5 4-5 5 3-2 5-3-1v11H8V10l-3 1-2-5z"/><path d="M12 8v13M8 14h8"/>',
  accessory: '<path d="M7 4h10l4 5-9 12L3 9z"/><path d="M3 9h18M10 4l2 5 2-5M12 9v12"/>',
  liquor: '<path d="M10 2h4v4l2 3v13H8V9l2-3z"/><path d="M8 13h8v5H8z"/>',
  retro: '<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M7 8l10-5"/><circle cx="9" cy="14" r="3"/><path d="M15 12h3M15 16h3"/>',
  electronics: '<rect x="3" y="4" width="18" height="12" rx="1"/><path d="M8 20h8M12 16v4"/>',
  fishing: '<path d="M3 21L19 3"/><path d="M19 3v10"/><path d="M19 13c0 2.5-1.5 4-3.5 4S12 15.5 12 14"/><circle cx="7" cy="17" r="2.5"/>',
  bag: '<path d="M4 9h16l-1.5 11h-13z"/><path d="M8.5 9V7a3.5 3.5 0 017 0v2"/><path d="M10 13h4"/>',
  golf: '<path d="M8 21V3l9 4-9 4"/><ellipse cx="12" cy="21" rx="7" ry="1.5"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M10.5 18.5h3"/>',
  fur: '<path d="M7 3h10l3 6-2 1v11H6V10L4 9z"/><path d="M9 3c0 2 1.5 3 3 3s3-1 3-3M8 13l1 1 1-1 1 1 1-1 1 1 1-1 1 1M8 17l1 1 1-1 1 1 1-1 1 1 1-1 1 1"/>',
  tools: '<path d="M3 8h11v5H3z"/><path d="M14 9.5h4l3 1-3 1h-4M6 13l-1 8h4l1-8"/><path d="M8 8V6h3v2"/>'
};

function iconSvg(key, size, color) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="' + (color || "currentColor") +
    '" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[key] + "</svg>";
}

var ITEMS = {
  antique: {
    name: "骨董品", sub: "陶器・ガラス製品など", en: "ANTIQUE", page: "item-antique.html", img: "img/2026-10-30_iwachu_nanbu_tetsubin_sq.jpg", guarantee: true,
    lead: "陶器・磁器・ガラス製品・茶道具・掛け軸など、ご実家の蔵や押し入れに眠っている骨董品を一点ずつ丁寧に査定します。",
    tags: ["陶器・磁器", "ガラス製品", "切子・ぎやまん", "茶道具", "掛け軸", "鉄瓶", "漆器", "仏像・仏具", "古時計", "蓄音機"],
    points: [
      ["箱や書付はそのまま", "作家名が書かれた共箱や鑑定書は、価値を判断する大事な手がかりです。中身と一緒にお出しください。"],
      ["無理に磨かない", "古い品物は、汚れや錆を落とそうとすると表面を傷めることがあります。そのままの状態でお出しください。"],
      ["割れ物は1点ずつ包む", "宅配で送る陶器やガラスは、新聞紙などで一つずつ包んでください。量が多い時や大きな物は出張買取が安心です。"]
    ]
  },
  watch: {
    name: "腕時計", sub: "ブランド時計・アンティーク時計", en: "WATCH", page: "2026-10-21_item-watch.html", img: "img/2026-10-31_rolex_datejust_sq.jpg", guarantee: true,
    lead: "ブランド時計から国産の古い腕時計、懐中時計まで。止まっている時計やベルトが切れた時計も査定します。",
    tags: ["ブランド腕時計", "国産腕時計", "機械式時計", "クオーツ時計", "懐中時計", "アンティーク時計", "置時計"],
    points: [
      ["保証書・箱をそろえる", "ギャランティカードや元箱、余りのコマがあると評価が上がりやすくなります。"],
      ["止まっていてもOK", "電池切れや故障で止まっている時計も、そのままお出しください。"],
      ["ベルトも一緒に", "純正ベルトを外して保管している場合は、一緒にお出しください。"]
    ]
  },
  camera: {
    name: "カメラ", sub: "フィルム・デジタル・レンズ", en: "CAMERA", page: "item-camera.html", img: "img/2026-10-30_hasselblad_907x_cfv100c_sq.jpg", guarantee: true,
    lead: "フィルムカメラ・デジタルカメラ・交換レンズ・二眼レフなど、古いカメラやレンズも動作と状態を見て査定します。",
    tags: ["フィルムカメラ", "一眼レフ", "レンジファインダー", "二眼レフ", "デジタルカメラ", "交換レンズ", "三脚", "8mmカメラ"],
    points: [
      ["レンズ・付属品はまとめて", "ボディとレンズ、ストラップや元箱をそろえると、セットとして評価しやすくなります。"],
      ["動かなくても大丈夫", "シャッターが切れない、カビがあるといった品物も、部品としての価値を見て査定します。"],
      ["電池は抜いておく", "長く使っていない電池は液漏れの原因になります。抜いた状態でお出しください。"]
    ]
  },
  record: {
    name: "レコード・オーディオ", sub: "LP・EP・プレーヤー・アンプ", en: "RECORD & AUDIO", page: "item-record.html", img: "img/2026-10-30_beatles_in_mono_box_sq.jpg", guarantee: true,
    lead: "LP・EP・帯付きの国内盤から海外盤、レコードプレーヤー・アンプ・スピーカーなどのオーディオ機器まで査定します。",
    tags: ["LP", "EP（シングル）", "帯付き国内盤", "海外盤", "レコードプレーヤー", "アンプ", "スピーカー", "カセットデッキ"],
    points: [
      ["帯・歌詞カードを残す", "帯やライナーノーツが付いているかどうかで、価格が大きく変わることがあります。"],
      ["立てて保管する", "平積みにすると反りの原因になります。査定まで立てて保管してください。"],
      ["大きい機器は出張で", "スピーカーやアンプなど重い物は、出張買取が便利です。"]
    ]
  },
  game: {
    name: "ゲーム・おもちゃ", sub: "レトロゲーム・フィギュア", en: "GAME & TOY", page: "item-game.html", img: "img/2026-10-30_panasonic_q_sl-gc10_sq.jpg", guarantee: true,
    lead: "レトロゲームから最近のゲーム機、ソフト、フィギュア・ブリキのおもちゃ・プラモデルなどを査定します。",
    tags: ["ゲーム機本体", "ゲームソフト", "携帯ゲーム機", "フィギュア", "ブリキのおもちゃ", "プラモデル", "ミニカー", "カード"],
    points: [
      ["箱と説明書をそろえる", "レトロゲームやおもちゃは、箱・説明書の有無で価値が変わります。見つかった物は一緒にお出しください。"],
      ["セーブデータは消しておく", "個人のデータが残っている場合は、事前に消去をお願いします。分からない場合は査定のときに対応します。"],
      ["未開封品はそのまま", "未開封のおもちゃやプラモデルは、開けずにお出しください。"]
    ]
  },
  kimono: {
    name: "着物", sub: "着物・帯・和装小物", en: "KIMONO", page: "2026-10-21_item-kimono.html", img: "img/2026-10-30_obi_gray_blue_sq.jpg", guarantee: true,
    lead: "訪問着・振袖・留袖・紬などの着物、帯、和装小物を査定します。たとう紙に入ったままでお出しください。",
    tags: ["訪問着", "振袖", "留袖", "紬", "小紋", "帯", "帯留め・かんざし", "和装小物", "反物"],
    points: [
      ["証紙を一緒に", "産地や作家を示す証紙があると、価値を判断しやすくなります。"],
      ["たとう紙ごと査定に", "畳んだ状態のまま、たとう紙に入れてお出しください。"],
      ["まとめて査定", "着物と帯、小物をまとめてお出しいただくと、セットで評価できる場合があります。"]
    ]
  },
  accessory: {
    name: "宝石・アクセサリー", sub: "指輪・ネックレス・ブローチ", en: "JEWELRY", page: "item-accessory.html", img: "img/2026-10-31_emerald_ring_sq.jpg", guarantee: true,
    lead: "宝石の付いた指輪やネックレス、金・プラチナ製品、ブローチ、ヴィンテージアクセサリーまで査定します。",
    tags: ["指輪", "ネックレス", "ブローチ", "イヤリング・ピアス", "ダイヤモンド", "色石", "金・プラチナ", "真珠", "ヴィンテージ品"],
    points: [
      ["壊れていても査定OK", "チェーンが切れている、石が取れているといった物も、素材の価値で査定します。"],
      ["鑑定書があれば一緒に", "宝石の鑑定書・鑑別書があると、評価が上がりやすくなります。"],
      ["片方だけでもOK", "片方だけのイヤリングやピアスも、素材として査定します。"]
    ]
  },
  bag: {
    name: "ブランドバッグ", sub: "バッグ・財布・小物", en: "BRAND BAG", page: "2026-10-31_item-bag.html", img: "img/2026-10-31_chanel_turnlock_lambskin_sq.jpg", guarantee: false,
    lead: "シャネル・グッチ・フェンディ・ルイ・ヴィトン・エルメスなどのブランドバッグ、財布、ブランド小物を査定します。古いデザインや使用感のある物もご相談ください。",
    tags: ["ショルダーバッグ", "ハンドバッグ", "チェーンバッグ", "トートバッグ", "クラッチバッグ", "財布", "キーケース・小物", "ヴィンテージバッグ"],
    points: [
      ["付属品をそろえる", "保存袋・箱・ギャランティカード・ショルダーストラップがあると評価が上がりやすくなります。"],
      ["中身を出して", "ポケットの中まで空にして、軽くほこりを払ってからお出しください。"],
      ["傷や汚れはそのまま", "角すれや持ち手の傷みも、無理に直さずそのままお出しください。"]
    ]
  },
  liquor: {
    name: "お酒・ライター", sub: "洋酒・日本酒・喫煙具", en: "LIQUOR & LIGHTER", page: "2026-10-21_item-liquor.html", img: "img/2026-10-30_suntory_hibiki_17_sq.jpg", guarantee: true,
    lead: "未開封のウイスキー・ブランデー・ワイン・日本酒・焼酎、ブランドライターや喫煙具を査定します。",
    tags: ["ウイスキー", "ブランデー", "ワイン", "日本酒", "焼酎", "ブランドライター", "オイルライター", "パイプ・喫煙具"],
    points: [
      ["お酒は未開封のみ", "お酒は未開封の物に限ります。箱や冊子が付いていれば一緒にお出しください。"],
      ["立てて涼しい所に保管", "直射日光を避け、立てた状態で保管してください。液面の低下を防げます。"],
      ["ライターは火が付かなくてもOK", "着火しないライターも査定します。ガスやオイルは抜いた状態でお出しください。"]
    ]
  },
  retro: {
    name: "レトロ雑貨・家電・家具", sub: "昭和レトロ・古道具", en: "RETRO", page: "2026-10-21_item-retro.html", img: "img/2026-10-30_asuka_keyaki_tansu_sq.jpg", guarantee: true,
    lead: "昭和レトロの雑貨・ホーロー看板・古いラジオや扇風機などの家電、ちゃぶ台・水屋箪笥などの家具を査定します。",
    tags: ["昭和レトロ雑貨", "ホーロー看板", "真空管ラジオ", "古い扇風機", "レトロ食器", "ちゃぶ台", "水屋箪笥", "古道具"],
    points: [
      ["動かなくても大丈夫", "電源が入らない古い家電も、見た目や部品の価値で査定します。"],
      ["家具はお電話で事前相談", "大きな家具は、お電話で大きさや点数をお伝えいただくと出張の段取りがスムーズです。"],
      ["まとめて片付け", "古道具や雑貨はまとめて査定できます。蔵や倉庫の片付けにもご利用ください。"]
    ]
  },
  electronics: {
    name: "電化製品", chip: "製造から10年以内の電化製品", sub: "製造から10年以内", en: "ELECTRONICS", page: "2026-10-21_item-electronics.html", img: "img/electronics.jpg", guarantee: true,
    lead: "製造から10年以内の電化製品を査定します。生活家電・キッチン家電・パソコン・スマートフォン・テレビなどが対象です。",
    tags: ["テレビ", "パソコン", "タブレット", "スマートフォン", "生活家電", "キッチン家電", "美容家電", "オーディオ家電"],
    points: [
      ["製造年を確認", "本体の裏や側面のシールに製造年が書かれています。製造から10年以内の物が対象です。"],
      ["付属品をそろえる", "リモコン・充電器・説明書・元箱があると評価が上がりやすくなります。"],
      ["データは消去して", "パソコンやスマートフォンは、初期化してからお出しください。分からない場合はご相談ください。"]
    ]
  },
  fishing: {
    name: "釣り道具", sub: "リール・ロッド・ルアー", en: "FISHING TACKLE", page: "2026-10-30_item-fishing.html", img: "img/2026-10-30_daiwa_24_luvias_sq.jpg", guarantee: true,
    lead: "リール・ロッド（竿）・ルアー・電動リール・クーラーボックスなど、海釣り・川釣り・ルアー釣りの道具を査定します。古いリールや使い込んだ道具もご相談ください。",
    tags: ["スピニングリール", "ベイトリール", "電動リール", "ロッド（竿）", "ルアー", "釣り糸・仕掛け", "タックルボックス", "クーラーボックス", "ウェア・ライフジャケット", "オールドタックル"],
    points: [
      ["汚れと塩を落とす", "海で使ったリールや竿は、真水で軽く塩を落として乾かしてからお出しください。サビを防げます。"],
      ["箱・替えスプールをそろえる", "リールの元箱や替えスプール、竿の袋や保証書があると評価が上がりやすくなります。"],
      ["ルアーはまとめて", "ルアーや小物は1つでは値段がつきにくくても、まとめると金額をお出しできる場合があります。"]
    ]
  },
  golf: {
    name: "ゴルフ道具", sub: "クラブ・バッグ・用品", en: "GOLF", page: "2026-11-01_item-golf.html",
    img: "img/2026-11-01_free_golf_bag.jpg", imgNote: "写真はイメージです", guarantee: true,
    lead: "ドライバー・アイアン・パター・キャディバッグ・ゴルフシューズなど、ゴルフ道具を査定します。古いクラブや使い込んだ道具もご相談ください。",
    tags: ["ドライバー", "フェアウェイウッド", "ユーティリティ", "アイアンセット", "ウェッジ", "パター", "キャディバッグ", "ゴルフシューズ", "距離計", "ゴルフウェア"],
    points: [
      ["汚れを軽く落とす", "クラブの泥や芝は、乾いた布で軽くふいてからお出しください。"],
      ["ヘッドカバー・付属品をそろえる", "ヘッドカバーや調整用のレンチ、元箱があると評価が上がりやすくなります。"],
      ["セットはまとめて", "アイアンはセットのまま、バッグと一緒にまとめてお出しいただくと査定がスムーズです。"]
    ]
  },
  phone: {
    name: "スマホ", sub: "スマートフォン", en: "SMARTPHONE", page: "2026-11-05_item-phone.html", guarantee: true,
    lead: "スマートフォンを査定いたします。画面が割れているお品物や、使わなくなった古い機種もご相談ください。",
    tags: ["iPhone", "Android スマートフォン", "画面割れ", "電源が入らない物", "古い機種", "充電器・ケーブル", "元箱・付属品"],
    points: [
      ["データは消してから", "お預けいただく前に、初期化（データの消去）をお願いいたします。わからない場合は、お気軽にご相談ください。"],
      ["付属品をそろえる", "元箱・充電器・ケーブルがあると、評価が上がりやすくなります。"],
      ["割れていてもそのまま", "画面割れや電源が入らない物も、そのままお出しください。"]
    ]
  },
  fur: {
    name: "毛皮", sub: "コート・ストール・帽子など", en: "FUR", page: "2026-11-09_item-fur.html", guarantee: true,
    lead: "毛皮のコート・ジャケット・ストール・マフラー・帽子などを査定いたします。古いデザインや長く仕舞い込んでいたお品物もご相談ください。",
    tags: ["ミンク", "フォックス", "セーブル", "チンチラ", "ラビット", "毛皮のコート", "ジャケット", "ストール・ショール", "マフラー", "帽子"],
    points: [
      ["そのままお出しください", "においや毛の抜け、裏地の傷みがあっても、無理に手入れをせずそのままお出しください。"],
      ["付属品をそろえる", "カバー・ハンガー・購入時のタグや証明書があると、評価が上がりやすくなります。"],
      ["まとめてご相談を", "コートと小物など、いくつかまとめてお出しいただくと査定がスムーズです。"]
    ]
  },
  tools: {
    name: "電動工具", sub: "ドリル・インパクト・丸ノコなど", en: "POWER TOOLS", page: "2026-11-09_item-tools.html", guarantee: true,
    lead: "電動ドリル・インパクトドライバー・丸ノコ・グラインダー・充電器やバッテリーなど、電動工具を査定いたします。使い込んだ工具もご相談ください。",
    tags: ["インパクトドライバー", "電動ドリル", "丸ノコ", "グラインダー", "電動サンダー", "ハンマードリル", "バッテリー・充電器", "工具セット", "エア工具"],
    points: [
      ["バッテリー・充電器も一緒に", "充電式の工具は、バッテリーと充電器がそろっていると評価が上がりやすくなります。"],
      ["ケース・付属品をそろえる", "専用ケースや替え刃、取扱説明書があればお出しください。"],
      ["動かなくてもそのまま", "電源が入らない物や古い型も、そのままお出しください。"]
    ]
  }
};

// ジャンルの写真（またはアイコン）を表示する部品
function genreThumb(key) {
  var d = ITEMS[key];
  return d.img
    ? '<img src="' + d.img + '" alt="">' + (d.imgNote ? '<span class="img-note">イメージ</span>' : "")
    : '<span class="genre-icon">' + iconSvg(key, 56) + "</span>";
}

// 買取事例の1件分のカード
function resultCard(r) {
  var d = ITEMS[r.genre];
  var thumb = r.img
    ? '<img src="' + r.img + '" alt="' + r.title + (r.imgNote ? "（" + r.imgNote + "）" : "") + '">' +
      (r.imgNote ? '<span class="img-note">イメージ</span>' : "")
    : genreThumb(r.genre);
  var meta = [r.method, r.date].filter(Boolean).map(function (m) { return "<span>" + m + "</span>"; }).join("");
  return '<article class="result' + (r.real ? " real" : "") + '">' +
    '<div class="result-thumb">' + thumb + "</div>" +
    '<div class="result-body">' +
      '<div class="result-meta"><span class="cat">' + d.name + "</span>" + meta + "</div>" +
      "<h3>" + r.title + "</h3>" +
      (r.cond ? '<p class="result-cond">' + r.cond + "</p>" : "") +
      '<p class="result-price">買取価格 <b>' + r.price + "</b></p>" +
      (r.imgNote ? '<p class="result-cond">※' + r.imgNote + "</p>" : "") +
    "</div></article>";
}

(function () {
  var main = document.getElementById("item-page");
  if (!main) return;
  var key = main.getAttribute("data-item");
  var d = ITEMS[key];
  if (!d) return;
  document.title = d.name + "の買取｜エコレクト";

  var head = d.img
    ? '<div class="page-head with-photo"><img src="' + d.img + '" alt="">' +
        '<div class="wrap"><span class="eyebrow">' + d.en + "</span><h1>" + d.name + "の買取</h1><p>" + d.lead + "</p>" +
        (d.imgNote ? '<p class="head-note">※' + d.imgNote + "</p>" : "") + "</div></div>"
    : '<div class="page-head with-icon"><div class="wrap"><span class="head-icon">' + iconSvg(key, 64, "#fff") + "</span>" +
        '<div><span class="eyebrow">' + d.en + "</span><h1>" + d.name + "の買取</h1><p>" + d.lead + "</p></div></div></div>";

  var results = (typeof RESULTS !== "undefined" ? RESULTS : []).filter(function (r) { return r.real && r.genre === key; });

  var others = Object.keys(ITEMS).filter(function (k) { return k !== key; }).map(function (k) {
    var o = ITEMS[k];
    return '<a class="genre" href="' + o.page + '"><span class="genre-photo">' + genreThumb(k) + "</span><b>" + o.name + "</b></a>";
  }).join("");

  main.innerHTML = head +
    '<div class="wrap crumbs"><ol><li><a href="index.html">トップ</a></li><li><a href="index.html#genres">取扱ジャンル</a></li><li>' + d.name + "</li></ol></div>" +

    (d.guarantee ? '<div class="guarantee-band"><div class="wrap"><b>最低保証</b><span>' + d.name + 'は<strong>1点 1,000円以上</strong>で買い取ります</span><a href="faq.html#guarantee">条件を見る</a></div></div>' : "") +

    '<section class="sec"><div class="wrap">' +
      '<h2 class="sec-title"><small>ITEMS</small>こんな' + d.name + "を買い取っています</h2>" +
      '<div class="chips" style="justify-content:center">' + d.tags.map(function (t) { return "<span>" + t + "</span>"; }).join("") + "</div>" +
      '<p class="lead-text" style="margin-top:20px">ここにない物も査定できます。分からない物はお気軽にご相談ください。</p>' +
    "</div></section>" +

    // 本物の事例だけを出す。まだないジャンルは欄ごと出さない
    (results.length
      ? '<section class="sec alt"><div class="wrap">' +
          '<h2 class="sec-title"><small>RESULTS</small>' + d.name + "の買取事例</h2>" +
          '<div class="results">' + results.slice(0, 4).map(resultCard).join("") + "</div>" +
        "</div></section>"
      : "") +

    '<section class="sec"><div class="wrap">' +
      '<h2 class="sec-title"><small>POINT</small>' + d.name + "を高く売るポイント</h2>" +
      '<div class="cards3">' + d.points.map(function (p, i) {
        return '<div class="card"><span class="label">ポイント ' + (i + 1) + "</span><h3>" + p[0] + "</h3><p>" + p[1] + "</p></div>";
      }).join("") + "</div>" +
    "</div></section>" +

    '<section class="sec alt"><div class="wrap auction-mini">' +
      "<div><h2>すぐに売らずに、高く売りたい方へ</h2><p>フリマサイトやオークションで、エコレクトが代わりに出品します。売れた金額の<b>70%</b>をお支払いします。</p></div>" +
      '<a class="btn btn-main" href="2026-10-21_auction.html">オークション代行プランを見る</a>' +
    "</div></section>" +

    '<section class="sec"><div class="wrap">' +
      '<h2 class="sec-title"><small>OTHER</small>ほかの取扱ジャンル</h2>' +
      '<div class="genres">' + others + "</div>" +
    "</div></section>";
})();
