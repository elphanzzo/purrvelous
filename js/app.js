/* ============================================================
   PURRVELOUS PROTOTYPE APP
   Phase 1: everything runs in the browser. Cart, wishlist,
   accounts, orders and reviews are kept in this browser only.
   Phase 2 replaces the "DB" helpers below with real API calls.
   ============================================================ */
(function () {
"use strict";

/* ---------- storage (swap for API in Phase 2) ---------- */
const DB = {
  get(k, d) { try { const v = localStorage.getItem("pv_" + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem("pv_" + k, JSON.stringify(v)); } catch (e) {} }
};

const S = {
  lang: DB.get("lang", "en"),
  notes: DB.get("notes", true),
  cart: DB.get("cart", []),
  wish: DB.get("wish", []),
  users: DB.get("users", []),
  session: DB.get("session", null),
  orders: DB.get("orders", []),
  reviews: DB.get("reviews", {}),
  shop: { pet: "all", cat: "all", sort: "feat" },
  pdp: { img: 0, tab: "desc", qty: 1, stars: 0 },
  authTab: "login",
  lastHash: null
};
const save = (k) => DB.set(k, S[k]);

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const T = (k) => (UI[S.lang] && UI[S.lang][k] != null ? UI[S.lang][k] : UI.en[k] != null ? UI.en[k] : k);
const L = (o) => (o == null ? "" : typeof o === "string" ? o : (o[S.lang] != null ? o[S.lang] : o.en));
const BN_DIGITS = "০১২৩৪৫৬৭৮৯";
const D = (v) => (S.lang === "bn" ? String(v).replace(/\d/g, (d) => BN_DIGITS[d]) : String(v));
const money = (n) => "৳" + D(Number(n).toLocaleString("en-IN"));
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fmtDate = (iso) => { try { return new Date(iso).toLocaleDateString(S.lang === "bn" ? "bn-BD" : "en-GB", { day: "numeric", month: "short", year: "numeric" }); } catch (e) { return iso; } };
const plural = (n, one, many) => D(n) + (S.lang === "bn" ? "" : " ") + (n === 1 ? T(one) : T(many));
const hash = (s) => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return "h" + (h >>> 0).toString(36); };
const product = (id) => PRODUCTS.find((p) => p.id === id);
const category = (id) => CATEGORIES.find((c) => c.id === id);
const user = () => S.users.find((u) => u.id === S.session) || null;
const go = (h) => { location.hash = h; };
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
const phoneOk = (v) => /^(?:\+?88)?01[3-9]\d{8}$/.test(v.replace(/[\s-]/g, ""));
const cartCount = () => S.cart.reduce((a, c) => a + c.qty, 0);
const cartSubtotal = () => S.cart.reduce((a, c) => { const p = product(c.id); return a + (p ? p.price * c.qty : 0); }, 0);

/* ---------- icons ---------- */
const P = {
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
  heart: '<path d="M12 20s-7-4.4-9.2-8.6C1.3 8.5 3 5 6.3 5c2 0 3.2 1.1 3.9 2.2L12 9l1.8-1.8C14.5 6.1 15.7 5 17.7 5 21 5 22.7 8.5 21.2 11.4 19 15.6 12 20 12 20z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
  cart: '<path d="M5 8h14l-1.2 12H6.2L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  truck: '<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  cash: '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 9v.01M18 15v.01"/>',
  ret: '<path d="M4 12a8 8 0 1 0 2.3-5.7"/><path d="M4 4v4h4"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8M8 13h5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
  copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 0 1 1-1h9"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
  camera: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7l2-3h4l2 3"/><circle cx="12" cy="13.5" r="3.5"/>',
  home: '<path d="M4 11l8-7 8 7v9H4z"/><path d="M10 20v-5h4v5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  logout: '<path d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  box: '<path d="M3 8l9-5 9 5v8l-9 5-9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
  fb: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v7h4v-7h3l1-4h-4V8z"/>',
  /* category art */
  bag: '<rect x="3" y="8" width="18" height="12" rx="3"/><path d="M8 8V6.5a4 4 0 0 1 8 0V8"/><rect x="6" y="11" width="7" height="6" rx="1"/><path d="M8.3 11v6M10.7 11v6M6 14h7"/><path d="M16 12v4"/>',
  food: '<path d="M3 12h18c0 4-4 7-9 7s-9-3-9-7z"/><circle cx="9" cy="9" r="1.6"/><circle cx="13" cy="7.5" r="1.6"/><circle cx="15.8" cy="10" r="1.3"/><circle cx="11.5" cy="10.3" r="1.2"/>',
  litter: '<path d="M3 10h18l-2 9H5z"/><path d="M5 10c2-2 4-2 6 0s4 2 6 0"/><path d="M15 3l3 5"/>',
  toy: '<circle cx="11" cy="12" r="7"/><path d="M5.5 9c4 .5 8 3.5 10 8.5M8.5 5.6c1 4 4 7.8 9.3 9.5M4.5 14c3-1 6-.5 9 2"/><path d="M18 12c2 0 3.5 2 2.5 4.5"/>',
  brush: '<path d="M14 3l7 7-5 5-7-7z"/><path d="M9 8l-5 5 2 2M11 10l-5 5 2 2M13 12l-5 5"/>',
  bed: '<path d="M3 15c0-3 2-4.5 4-4.5h10c2 0 4 1.5 4 4.5v3H3z"/><path d="M3 18v2M21 18v2M7 10.5c0-2 2-3.5 5-3.5s5 1.5 5 3.5"/>',
  bowl: '<path d="M3 12h18M5 12l1.8 7h10.4L19 12"/><path d="M12 3c2 3 3 4 3 5.5a3 3 0 0 1-6 0C9 7 10 6 12 3z"/>',
  leash: '<circle cx="6.5" cy="17.5" r="3"/><path d="M9 15.5L18.5 5"/><path d="M16 3.5h4.5V8"/>',
  paw: '<ellipse cx="12" cy="15.5" rx="4.6" ry="3.8"/><circle cx="6" cy="10" r="1.9"/><circle cx="9.6" cy="6" r="1.9"/><circle cx="14.4" cy="6" r="1.9"/><circle cx="18" cy="10" r="1.9"/>'
};
const I = (n, cls = "") => `<svg class="ico ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || ""}</svg>`;
const STAR = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8z"/></svg>';
const STAR_O = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8z"/></svg>';
const stars = (r) => `<span class="stars" aria-label="${r} / 5">${[1, 2, 3, 4, 5].map((i) => (i <= Math.round(r) ? STAR : STAR_O)).join("")}</span>`;
const WA_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6a9.4 9.4 0 0 0-8.1 14.2L2.6 21.4l4.7-1.2A9.4 9.4 0 1 0 12 2.6z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path fill="currentColor" d="M8.7 7.3c.3-.3.7-.3.9 0l1.1 1.7c.2.3.2.6 0 .9l-.6.7c.6 1.3 1.6 2.3 2.9 2.9l.7-.6c.3-.2.6-.2.9 0l1.7 1.1c.3.2.3.6 0 .9l-.7.8c-.5.5-1.3.7-2 .4-2.6-1-4.7-3.1-5.7-5.7-.3-.7-.1-1.5.4-2z"/></svg>';

/* ---------- photo slot ---------- */
const ph = (brief, extra = "", style = "") =>
  `<div class="ph ${extra}" style="${style}" role="img" aria-label="${esc(L(brief))}"><span class="tag">${I("camera")}${S.lang === "bn" ? "ছবি" : "Photo"}</span><span class="m-cat"></span><div class="brief"><b>${S.lang === "bn" ? "যে ছবি তুলবেন" : "Shot to take"}</b>${esc(L(brief))}</div></div>`;

/* ---------- Facebook Pixel ---------- */
/* Phase 2: load the official fbq script with STORE.pixelId in <head>.
   Every event below already fires through this one function. */
function track(ev, params) {
  try { if (window.fbq && STORE.pixelId) window.fbq("track", ev, params || {}); } catch (e) {}
  if (S.notes && ev !== "PageView") toast(`<span><b>${T("pixel")}</b> · ${ev}${params && params.value ? " · ৳" + params.value : ""}</span>`, { px: true, ms: 1800 });
}

/* ---------- toast ---------- */
function toast(html, o = {}) {
  const el = document.createElement("div");
  el.className = "toast" + (o.px ? " px" : "");
  el.innerHTML = html + (o.action ? `<a href="${o.action.href}">${o.action.label}</a>` : "");
  $("#toasts").appendChild(el);
  setTimeout(() => el.remove(), o.ms || 3200);
}

/* ---------- WhatsApp ---------- */
const waLink = (text) => `https://wa.me/${STORE.wa}?text=${encodeURIComponent(text)}`;
const waProduct = (p, qty) => waLink(
  S.lang === "bn"
    ? `হ্যালো পারভেলাস! আমি অর্ডার করতে চাই:\n${L(p.name)} x ${qty}\nদাম: ৳${p.price * qty}\nলিংক: https://www.purrvelous.com/#/p/${p.id}`
    : `Hi Purrvelous! I would like to order:\n${p.name.en} x ${qty}\nPrice: ৳${p.price * qty}\nLink: https://www.purrvelous.com/#/p/${p.id}`
);

/* ============================================================
   SHARED PIECES
   ============================================================ */
function crumbs(list) {
  return `<nav class="crumbs wrap" aria-label="Breadcrumb"><a href="#/">${T("home")}</a>${list.map((c) => ` <span aria-hidden="true">/</span> ${c[1] ? `<a href="${c[1]}">${esc(c[0])}</a>` : `<span>${esc(c[0])}</span>`}`).join("")}</nav>`;
}
function heartBtn(id, extra = "") {
  const on = S.wish.includes(id);
  return `<button class="icon-btn heart ${extra}" data-act="wish" data-id="${id}" aria-pressed="${on}" aria-label="${T("wishlist")}">${I("heart")}</button>`;
}
function productCard(p) {
  const rv = S.reviews[p.id] || [];
  const avg = rv.length ? rv.reduce((a, r) => a + r.r, 0) / rv.length : 0;
  return `<article class="pcard">
    <a href="#/p/${p.id}" aria-label="${esc(L(p.name))}">${ph(p.photos[0])}</a>
    ${heartBtn(p.id)}
    <span class="eyebrow">${esc(L(category(p.cat).name))}</span>
    <a class="t" href="#/p/${p.id}">${esc(L(p.name))}</a>
    ${rv.length ? `<div class="muted" style="display:flex;gap:6px;align-items:center;font-size:.85rem">${stars(avg)} ${D(rv.length)}</div>` : ""}
    <div class="row"><span class="price num">${money(p.price)}</span><button class="btn sm" data-act="add" data-id="${p.id}">${I("cart", "ico-sm")}${T("addToCart")}</button></div>
  </article>`;
}
function soonCard(c) {
  return `<article class="pcard soon">
    <div class="art">${I(c.icon)}</div>
    <span class="eyebrow">${esc(L(PETS.find((x) => x.id === c.pet).name))}</span>
    <a class="t" href="#/c/${c.id}">${esc(L(c.name))}</a>
    <div class="row"><span class="status soon">${T("comingSoon")}</span><a class="link" href="#/c/${c.id}">${T("notifyMe")}</a></div>
  </article>`;
}
function catTile(c, span) {
  const n = PRODUCTS.filter((p) => p.cat === c.id).length;
  const live = c.status === "live";
  return `<a class="cat-tile ${live ? "live" : "soon"} ${span ? "span2" : ""}" href="#/c/${c.id}">
    ${span ? ph(PRODUCTS.find((p) => p.cat === c.id).photos[1]) : `<div class="art" data-soon="${esc(T("soon"))}">${I(c.icon)}</div>`}
    <h3>${esc(L(c.name))}</h3>
    <div class="row"><span>${live ? plural(n, "product1", "products") : T("comingSoon")}</span><span class="status ${live ? "live" : "soon"}">${live ? T("live") : T("soon")}</span></div>
  </a>`;
}
function notifyForm(tag) {
  return `<form class="notify" data-form="notify" data-tag="${tag}" novalidate>
    <input class="input" type="email" id="notify-${tag}" placeholder="${esc(T("nlPh"))}" aria-label="${esc(T("nlPh"))}" required>
    <button class="btn" type="submit">${T("notifyMe")}</button>
  </form>`;
}
const slug = (t) => "s-" + String(t).toLowerCase().replace(/[^\wঀ-৿]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
function inl(t) {
  return esc(t)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\((#[^)\s]+)\)/g, '<a href="$2">$1</a>');
}
function renderBlocks(blocks) {
  return blocks.map(([k, v]) => {
    if (k === "p") return `<p>${inl(v)}</p>`;
    if (k === "h") return `<h2 id="${slug(v)}">${inl(v)}</h2>`;
    if (k === "h3") return `<h3>${inl(v)}</h3>`;
    if (k === "ul") return `<ul>${v.map((x) => `<li>${inl(x)}</li>`).join("")}</ul>`;
    if (k === "ol") return `<ol>${v.map((x) => `<li>${inl(x)}</li>`).join("")}</ol>`;
    if (k === "tip") return `<div class="tip"><span class="ic">${I("bulb")}</span><p>${inl(v)}</p></div>`;
    if (k === "table") return `<div class="tbl-wrap"><table class="tbl"><thead><tr>${v.head.map((h) => `<th scope="col">${esc(h)}</th>`).join("")}</tr></thead><tbody>${v.rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${inl(c)}</th>` : `<td>${inl(c)}</td>`)).join("")}</tr>`).join("")}</tbody></table></div>`;
    return "";
  }).join("");
}
const readMins = (p) => {
  const words = p.body.en.reduce((n, b) => n + JSON.stringify(b[1]).split(/\s+/).length, 0) + (p.faq || []).reduce((n, f) => n + (f.q.en + " " + f.a.en).split(/\s+/).length, 0);
  return Math.max(2, Math.round(words / 220));
};
const postsSorted = () => POSTS.slice().sort((a, b) => (a.date < b.date ? 1 : -1));
function postCard(p, big) {
  return `<a class="post-card ${big ? "feat" : ""}" href="#/blog/${p.id}">
    ${ph(p.photo, "alt")}
    <div class="pc-body">
      <div class="meta"><span class="topic">${esc(L(p.tag))}</span><span>${fmtDate(p.date)}</span><span>${D(readMins(p))} ${T("minRead")}</span></div>
      <h3>${esc(L(p.title))}</h3>
      <p>${esc(L(p.ex))}</p>
      ${big ? `<span class="go">${T("readArticle")} ${I("arrow", "ico-sm")}</span>` : ""}
    </div>
  </a>`;
}
function emptyState(title, desc, cta) {
  return `<div class="empty"><span class="m-cat"></span><h3>${esc(title)}</h3><p>${esc(desc)}</p>${cta || ""}</div>`;
}

/* ============================================================
   PAGES
   ============================================================ */
const PAGES = {};

/* ---------- HOME ---------- */
PAGES.home = () => {
  const p = PRODUCTS[0];
  const cats = CATEGORIES.filter((c) => c.pet === "cats");
  const local = Object.entries(S.reviews).flatMap(([pid, arr]) => arr.map((r) => ({ ...r, pid }))).slice(-3).reverse();
  return `
  <section class="hero"><div class="wrap">
    <div>
      <span class="eyebrow">${T("heroEyebrow")}</span>
      <h1 style="margin-top:14px">${T("heroTitle")}</h1>
      <p class="lede">${T("heroLede")}</p>
      <div class="ctas"><a class="btn" href="#/p/${p.id}">${T("heroCta1")} ${I("arrow", "ico-sm")}</a><a class="btn ghost" href="#/shop">${T("heroCta2")}</a></div>
      <div class="meta"><span>${I("cash", "ico-sm")} ${T("heroMeta1")}</span><span>${I("chat", "ico-sm")} ${T("heroMeta2")}</span></div>
    </div>
    <div class="hero-art">
      <span class="m-pets" aria-hidden="true"></span>
      ${ph({ en: "Lifestyle hero: person walking outdoors wearing the grey bag on their back, cat peeking out. Golden hour light, leave space on one side for text.", bn: "লাইফস্টাইল মূল ছবি: একজন বাইরে হাঁটছেন, পিঠে ধূসর ব্যাগ, বিড়াল উঁকি দিচ্ছে। বিকেলের সোনালি আলো, এক পাশে লেখার জন্য ফাঁকা জায়গা রাখুন।" })}
      <a class="float-card" href="#/p/${p.id}">${ph(p.photos[0], "small")}<span><small>${T("newIn")}</small><strong>${esc(L(p.name))}</strong><span class="price num">${money(p.price)}</span></span></a>
    </div>
  </div></section>

  <section class="trust" aria-label="Why shop with us"><div class="wrap">
    <div class="t"><span class="ic">${I("cash")}</span><div><b>${T("t1b")}</b><span>${T("t1s")}</span></div></div>
    <div class="t"><span class="ic">${I("truck")}</span><div><b>${T("t2b")}</b><span>${T("t2s")}</span></div></div>
    <div class="t"><span class="ic">${I("chat")}</span><div><b>${T("t3b")}</b><span>${T("t3s")}</span></div></div>
    <div class="t"><span class="ic">${I("ret")}</span><div><b class="smp">${T("t4b")}</b><span>${T("t4s")}</span></div></div>
  </div></section>

  <section class="sec"><div class="wrap">
    <div class="sec-head"><div><h2>${T("shopByPet")}</h2><p>${T("shopByPetSub")}</p></div></div>
    <div class="pets">
      <a class="pet-card cats" href="#/shop/cats"><span class="pill">${T("live")}</span><div><h3>${T("catsTitle")}</h3><p>${T("catsSub")}</p><span class="go">${T("shopCats")} ${I("arrow", "ico-sm")}</span></div><span class="m-cat" aria-hidden="true"></span></a>
      <a class="pet-card dogs" href="#/shop/dogs"><span class="pill">${T("comingSoon")}</span><div><h3>${T("dogsTitle")}</h3><p>${T("dogsSub")}</p><span class="go">${T("notifyMe")} ${I("arrow", "ico-sm")}</span></div><span class="m-pets" aria-hidden="true"></span></a>
    </div>
  </div></section>

  <section class="sec" style="padding-top:0"><div class="wrap">
    <div class="sec-head"><div><h2>${T("shopByCat")}</h2><p>${T("shopByCatSub")}</p></div><a class="btn ghost sm" href="#/shop">${T("allCats")}</a></div>
    <div class="cats-grid">${cats.map((c, i) => catTile(c, i === 0)).join("")}</div>
  </div></section>

  <section class="sec" style="padding-top:0"><div class="wrap">
    <div class="spot">
      <div class="gal">${ph(p.photos[1])}${ph(p.photos[2], "alt")}${ph(p.photos[3])}</div>
      <div>
        <span class="eyebrow">${T("spotEyebrow")}</span>
        <h2>${esc(L(p.name))}</h2>
        <div class="price num">${money(p.price)}</div>
        <ul class="feat-list">${p.features.map((f) => `<li><span class="dot">${I("check", "ico-sm")}</span><div><b>${esc(L(f.t))}</b><span>${esc(L(f.d))}</span></div></li>`).join("")}</ul>
        <div class="ctas"><button class="btn" data-act="add" data-id="${p.id}">${I("cart", "ico-sm")} ${T("addToCart")}</button><a class="btn wa" href="${waProduct(p, 1)}" target="_blank" rel="noopener" data-act="wa">${WA_ICON.replace("<svg", '<svg class="ico ico-sm"')} ${T("orderWa")}</a></div>
      </div>
    </div>
  </div></section>

  <section class="sec" style="padding-top:0"><div class="wrap why">
    ${ph({ en: "Founder or team packing an order at a table, cat nearby. Real and unpolished, natural light.", bn: "টেবিলে প্রতিষ্ঠাতা বা টিম অর্ডার প্যাক করছেন, পাশে বিড়াল। স্বাভাবিক, সাজানো নয়, প্রাকৃতিক আলো।" })}
    <div>
      <span class="eyebrow">${T("whyEyebrow")}</span>
      <h2 style="font-size:clamp(1.8rem,3.2vw,2.5rem);margin-top:10px">${T("whyTitle")}</h2>
      <div class="why-list">
        <div><span class="ic">${I("home")}</span><div><h3>${T("why1t")}</h3><p>${T("why1d")}</p></div></div>
        <div><span class="ic">${I("paw")}</span><div><h3>${T("why2t")}</h3><p>${T("why2d")}</p></div></div>
        <div><span class="ic">${I("chat")}</span><div><h3>${T("why3t")}</h3><p>${T("why3d")}</p></div></div>
      </div>
    </div>
  </div></section>

  <section class="sec" style="padding-top:0"><div class="wrap">
    <div class="sec-head"><div><span class="eyebrow">${T("revEyebrow")}</span><h2 style="margin-top:8px">${T("revTitle")}</h2>${local.length ? "" : `<p>${T("revSub")}</p>`}</div></div>
    <div class="revs">${(local.length ? local.map((r) => ({ r: r.r, who: r.name, city: "", t: r.text, real: true })) : SAMPLE_REVIEWS).map((r) => `
      <figure class="rev" style="margin:0">
        <div class="top">${stars(r.r)}${r.real ? "" : `<span class="sample-pill">${T("sampleReview")}</span>`}</div>
        <q>${esc(r.real ? r.t : L(r.t))}</q>
        <figcaption class="who"><span class="av">${esc(String(r.who).slice(0, 2).toUpperCase())}</span><span><b>${esc(r.who)}</b>${r.city ? `<br><span class="muted">${esc(L(r.city))}</span>` : ""}</span></figcaption>
      </figure>`).join("")}</div>
  </div></section>

  <section class="sec" style="padding-top:0"><div class="wrap">
    <div class="sec-head"><div><span class="eyebrow">${T("blogEyebrow")}</span><h2 style="margin-top:8px">${T("blogTitle")}</h2></div><a class="btn ghost sm" href="#/blog">${T("readMore")}</a></div>
    <div class="posts">${postsSorted().slice(0, 3).map((p) => postCard(p)).join("")}</div>
  </div></section>

  ${newsletter()}`;
};
function newsletter() {
  return `<section class="band"><div class="wrap">
    <div><h2>${T("nlTitle")}</h2><p>${T("nlSub")}</p></div>
    <form data-form="notify" data-tag="newsletter" novalidate><input type="email" id="nl-email" placeholder="${esc(T("nlPh"))}" aria-label="${esc(T("nlPh"))}" required><button class="btn" type="submit">${T("nlBtn")}</button></form>
  </div></section>`;
}

/* ---------- SHOP ---------- */
PAGES.shop = (args) => {
  const petArg = args[0] && PETS.find((x) => x.id === args[0]) ? args[0] : "all";
  if (S.shop.pet !== petArg) { S.shop.pet = petArg; S.shop.cat = "all"; }
  const sh = S.shop;
  const petCats = CATEGORIES.filter((c) => sh.pet === "all" || c.pet === sh.pet);
  let list = PRODUCTS.filter((p) => (sh.pet === "all" || p.pet === sh.pet) && (sh.cat === "all" || p.cat === sh.cat));
  if (sh.sort === "low") list = list.slice().sort((a, b) => a.price - b.price);
  if (sh.sort === "high") list = list.slice().sort((a, b) => b.price - a.price);
  const soon = petCats.filter((c) => c.status === "soon" && (sh.cat === "all" || c.id === sh.cat));
  const selCat = sh.cat !== "all" ? category(sh.cat) : null;
  const petName = sh.pet === "all" ? T("shopTitle") : L(PETS.find((x) => x.id === sh.pet).name);
  const opt = (kind, id, label, count, on) => `<button class="opt ${on ? "on" : ""}" data-act="filter" data-kind="${kind}" data-id="${id}">${esc(label)}${count != null ? `<small>${D(count)}</small>` : ""}</button>`;
  return `
  ${crumbs([[T("shopTitle"), sh.pet === "all" ? "" : "#/shop"]].concat(sh.pet === "all" ? [] : [[petName, ""]]))}
  <div class="wrap page-head"><h1>${esc(petName)}</h1><p>${T("shopSub")}</p></div>
  <div class="wrap shop">
    <aside class="filters" aria-label="Filters">
      <div><h4>${T("pet")}</h4>${opt("pet", "all", T("allPets"), null, sh.pet === "all")}${PETS.map((x) => opt("pet", x.id, L(x.name), null, sh.pet === x.id)).join("")}</div>
      <div><h4>${T("category")}</h4>${opt("cat", "all", T("allCategories"), null, sh.cat === "all")}${petCats.map((c) => opt("cat", c.id, L(c.name), PRODUCTS.filter((p) => p.cat === c.id).length, sh.cat === c.id)).join("")}</div>
    </aside>
    <div style="min-width:0">
      <div class="fchips">${[["pet", "all", T("allPets")]].concat(PETS.map((x) => ["pet", x.id, L(x.name)])).map(([k, id, l]) => `<button class="${sh.pet === id ? "on" : ""}" data-act="filter" data-kind="${k}" data-id="${id}">${esc(l)}</button>`).join("")}</div>
      <div class="fchips">${[["cat", "all", T("allCategories")]].concat(petCats.map((c) => ["cat", c.id, L(c.name)])).map(([k, id, l]) => `<button class="${sh.cat === id ? "on" : ""}" data-act="filter" data-kind="${k}" data-id="${id}">${esc(l)}</button>`).join("")}</div>
      <div class="toolbar"><span class="muted">${T("showing")} ${plural(list.length, "result1", "results")}</span>
        <label style="display:flex;gap:8px;align-items:center"><span class="sr">${T("sort")}</span><span class="sel"><select id="sort" data-act="sort">
          <option value="feat" ${sh.sort === "feat" ? "selected" : ""}>${T("sortFeat")}</option>
          <option value="low" ${sh.sort === "low" ? "selected" : ""}>${T("sortLow")}</option>
          <option value="high" ${sh.sort === "high" ? "selected" : ""}>${T("sortHigh")}</option></select><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></span></label></div>
      ${list.length ? `<div class="pgrid">${list.map(productCard).join("")}</div>` :
        selCat ? emptyState(T("catEmptyT"), T("catEmptyD"), notifyForm(selCat.id)) : emptyState(T("catEmptyT"), T("catEmptyD"), notifyForm(sh.pet))}
      ${soon.length && !(selCat && selCat.status === "soon") ? `<div style="margin-top:48px"><div class="sec-head" style="margin-bottom:18px"><div><h2 style="font-size:1.7rem">${T("soonShelves")}</h2><p>${T("soonShelvesSub")}</p></div></div><div class="pgrid">${soon.map(soonCard).join("")}</div></div>` : ""}
    </div>
  </div>`;
};

/* ---------- CATEGORY ---------- */
PAGES.c = (args) => {
  const c = category(args[0]);
  if (!c) return PAGES.notfound();
  const pet = PETS.find((x) => x.id === c.pet);
  const list = PRODUCTS.filter((p) => p.cat === c.id);
  const siblings = CATEGORIES.filter((x) => x.pet === c.pet && x.id !== c.id);
  return `
  ${crumbs([[T("shopTitle"), "#/shop"], [L(pet.name), "#/shop/" + pet.id], [L(c.name), ""]])}
  <div class="wrap">
    <div class="cat-banner"><div><span class="status ${c.status}" style="${c.status === "live" ? "" : "background:var(--mustard);color:#13372A;box-shadow:none"}">${c.status === "live" ? T("live") : T("comingSoon")}</span><h1 style="margin-top:12px">${esc(L(c.name))}</h1><p>${esc(L(c.desc))}</p></div><div class="art">${I(c.icon)}</div></div>
  </div>
  <section class="sec tight"><div class="wrap">
    ${list.length ? `<div class="pgrid">${list.map(productCard).join("")}</div>` : emptyState(T("catEmptyT"), T("catEmptyD"), notifyForm(c.id))}
  </div></section>
  <section class="sec" style="padding-top:0"><div class="wrap">
    <div class="sec-head"><div><h2 style="font-size:1.7rem">${esc(L(pet.name))}: ${T("allCategories").toLowerCase()}</h2></div></div>
    <div class="pgrid">${siblings.map((s) => (s.status === "live" ? productCard(PRODUCTS.find((p) => p.cat === s.id)) : soonCard(s))).join("")}</div>
  </div></section>`;
};

/* ---------- PRODUCT ---------- */
PAGES.p = (args) => {
  const p = product(args[0]);
  if (!p) return PAGES.notfound();
  if (S.pdp._id !== p.id) { S.pdp = { _id: p.id, img: 0, tab: "desc", qty: 1, stars: 0 }; track("ViewContent", { content_ids: [p.id], content_type: "product", value: p.price, currency: "BDT" }); }
  const c = category(p.cat);
  const rv = S.reviews[p.id] || [];
  const avg = rv.length ? rv.reduce((a, r) => a + r.r, 0) / rv.length : 0;
  const tab = S.pdp.tab;
  const tabs = [["desc", T("descTab")], ["specs", T("specsTab")], ["ship", T("shipTab")], ["reviews", `${T("reviewsTab")} (${D(rv.length)})`]];
  const u = user();
  let panel = "";
  if (tab === "desc") panel = `<div class="prose">${p.desc[S.lang].map((x) => `<p>${esc(x)}</p>`).join("")}<h3>${S.lang === "bn" ? "কেন এই ব্যাগ" : "Why this bag"}</h3><ul>${p.features.map((f) => `<li><b>${esc(L(f.t))}.</b> ${esc(L(f.d))}</li>`).join("")}</ul></div>`;
  if (tab === "specs") panel = `<div style="overflow-x:auto"><table class="specs"><tbody>${p.specs.map((s) => `<tr><th scope="row">${esc(L(s.k))}</th><td><span class="${s.s ? "smp" : ""}">${esc(L(s.v))}</span></td></tr>`).join("")}</tbody></table></div><p class="note" style="margin-top:16px;max-width:620px">${S.lang === "bn" ? "<b>হাইলাইট করা মানগুলো নমুনা।</b> আসল মাপ ও তথ্য দিয়ে বদলে দিন। ছবির নোট বন্ধ করলে হাইলাইট লুকিয়ে যাবে।" : "<b>Highlighted values are samples.</b> Replace them with the real measurements. Turn photo notes off to hide the highlights."}</p>`;
  if (tab === "ship") panel = `<div class="prose"><h3>${T("delivery")}</h3><ul><li>${T("insideDhaka")}: ${money(STORE.delivery.inside)} <span class="smp">(${S.lang === "bn" ? "১ থেকে ২ দিন" : "1 to 2 days"})</span></li><li>${T("outsideDhaka")}: ${money(STORE.delivery.outside)} <span class="smp">(${S.lang === "bn" ? "২ থেকে ৪ দিন" : "2 to 4 days"})</span></li><li>${T("codAvail")}</li></ul><h3>${T("returns")}</h3><p class="smp">${L(FAQ[3].q[0].a)}</p><p><a class="link" href="#/policy/shipping">${T("shipping")}</a> · <a class="link" href="#/policy/returns">${T("returns")}</a></p></div>`;
  if (tab === "reviews") panel = `
    <div class="rev-sum">${rv.length ? `<span class="big num">${D(avg.toFixed(1))}</span><div>${stars(avg)}<div class="muted">${plural(rv.length, "review1", "reviewsCount")}</div></div>` : `<div><h3 style="margin:0">${T("noReviews")}</h3><p class="muted" style="margin-top:6px">${T("beFirst")}</p></div>`}</div>
    <div class="rev-list">${rv.slice().reverse().map((r) => `<div class="rev"><div class="top">${stars(r.r)}<span class="muted" style="font-size:.85rem">${fmtDate(r.date)}</span></div><p>${esc(r.text)}</p><div class="who"><span class="av">${esc(r.name.slice(0, 2).toUpperCase())}</span><b>${esc(r.name)}</b></div></div>`).join("")}</div>
    <form class="rev-form" data-form="review" data-id="${p.id}" novalidate>
      <h3 style="margin:0">${T("writeReview")}</h3>
      <div class="field"><span style="font-weight:600;font-size:.9rem">${T("yourRating")}</span><div class="star-in" role="radiogroup" aria-label="${T("yourRating")}">${[1, 2, 3, 4, 5].map((i) => `<button type="button" class="${i <= S.pdp.stars ? "on" : ""}" data-act="rate" data-n="${i}" role="radio" aria-checked="${i === S.pdp.stars}" aria-label="${i}">${STAR}</button>`).join("")}</div></div>
      <div class="field"><label for="rv-name">${T("yourName")}</label><input id="rv-name" value="${esc(u ? u.name : "")}" autocomplete="name"></div>
      <div class="field"><label for="rv-text">${T("yourReview")}</label><textarea id="rv-text"></textarea><span class="err" id="rv-err">${T("reviewNeed")}</span></div>
      <p class="note">${S.lang === "bn" ? "প্রোটোটাইপ: রিভিউ শুধু এই ব্রাউজারে থাকে। ফেজ ২-তে অ্যাডমিন প্যানেল থেকে অনুমোদন দিয়ে প্রকাশ হবে।" : "Prototype: reviews stay in this browser. In Phase 2 they go to your admin panel for approval before going live."}</p>
      <div><button class="btn" type="submit">${T("submitReview")}</button></div>
    </form>`;
  return `
  ${crumbs([[T("shopTitle"), "#/shop"], [L(c.name), "#/c/" + c.id], [L(p.name), ""]])}
  <div class="wrap pdp">
    <div class="gallery">
      <div class="thumbs" role="tablist" aria-label="Photos">${p.photos.map((b, i) => `<button class="${i === S.pdp.img ? "on" : ""}" data-act="img" data-i="${i}" aria-label="Photo ${i + 1}">${ph(b, "small" + (i % 2 ? " alt" : ""))}</button>`).join("")}</div>
      <div class="main-img">${ph(p.photos[S.pdp.img], S.pdp.img % 2 ? "alt" : "")}</div>
    </div>
    <div class="pinfo">
      <span class="eyebrow">${esc(L(c.name))}</span>
      <h1>${esc(L(p.name))}</h1>
      <div class="rating">${rv.length ? `${stars(avg)} <span>${D(avg.toFixed(1))} · <button class="link" data-act="tab" data-tab="reviews">${plural(rv.length, "review1", "reviewsCount")}</button></span>` : `<button class="link" data-act="tab" data-tab="reviews">${T("writeReview")}</button>`}</div>
      <div class="price num">${money(p.price)} <span class="stock">${T("inStock")}</span></div>
      <p class="short">${esc(L(p.short))}</p>
      <div class="opt-row"><span style="font-weight:700">${T("color")}:</span><span class="swatch"><i></i>${T("grey")}</span></div>
      <div class="buy">
        <div class="qty" aria-label="${T("qty")}"><button data-act="qty" data-d="-1" aria-label="-">${I("minus", "ico-sm")}</button><input id="pdp-qty" type="number" min="1" max="10" value="${S.pdp.qty}" aria-label="${T("qty")}"><button data-act="qty" data-d="1" aria-label="+">${I("plus", "ico-sm")}</button></div>
        <button class="btn" data-act="add" data-id="${p.id}" data-qty="pdp">${I("cart", "ico-sm")} ${T("addToCart")}</button>
        ${heartBtn(p.id)}
        <a class="btn wa" href="${waProduct(p, S.pdp.qty)}" target="_blank" rel="noopener" data-act="wa">${WA_ICON.replace("<svg", '<svg class="ico ico-sm"')} ${T("orderWa")}</a>
      </div>
      <div class="ship-box">
        <div>${I("truck")}<span>${T("insideDhaka")}</span><b class="num">${money(STORE.delivery.inside)}</b></div>
        <div>${I("pin")}<span>${T("outsideDhaka")}</span><b class="num">${money(STORE.delivery.outside)}</b></div>
        <div>${I("cash")}<span>${T("codAvail")}</span></div>
      </div>
    </div>
  </div>
  <div class="wrap tabs" id="tabs">
    <div class="tablist" role="tablist">${tabs.map(([k, l]) => `<button role="tab" aria-selected="${tab === k}" data-act="tab" data-tab="${k}">${l}</button>`).join("")}</div>
    <div class="tabpanel" role="tabpanel">${panel}</div>
  </div>
  <section class="sec tight"><div class="wrap">
    <div class="sec-head"><div><h2 style="font-size:1.7rem">${T("related")}</h2></div></div>
    <div class="pgrid">${CATEGORIES.filter((x) => x.pet === "cats" && x.status === "soon").slice(0, 3).map(soonCard).join("")}</div>
  </div></section>`;
};

/* ---------- CART ---------- */
PAGES.cart = () => {
  if (!S.cart.length) return `${crumbs([[T("cart"), ""]])}<div class="wrap page-head"><h1>${T("cartTitle")}</h1></div><div class="wrap" style="padding-block:20px 72px">${emptyState(T("cartEmpty"), T("cartEmptyD"), `<a class="btn" href="#/p/${PRODUCTS[0].id}">${T("heroCta1")}</a>`)}</div>`;
  const sub = cartSubtotal();
  return `
  ${crumbs([[T("cart"), ""]])}
  <div class="wrap page-head"><h1>${T("cartTitle")}</h1></div>
  <div class="wrap cart-layout">
    <div>${S.cart.map((c) => { const p = product(c.id); if (!p) return ""; return `
      <div class="line">
        <a href="#/p/${p.id}">${ph(p.photos[0], "small")}</a>
        <div style="min-width:0"><a class="name" href="#/p/${p.id}">${esc(L(p.name))}</a><div class="sub">${T("color")}: ${T("grey")} · ${money(p.price)} ${T("each")}</div>
          <div class="ctl"><div class="qty"><button data-act="cqty" data-id="${p.id}" data-d="-1" aria-label="-">${I("minus", "ico-sm")}</button><input value="${c.qty}" readonly aria-label="${T("qty")}" class="num"><button data-act="cqty" data-id="${p.id}" data-d="1" aria-label="+">${I("plus", "ico-sm")}</button></div>
          <button class="link" data-act="rm" data-id="${p.id}">${T("remove")}</button></div></div>
        <div class="tot num">${money(p.price * c.qty)}</div>
      </div>`; }).join("")}
      <a class="link" href="#/shop" style="display:inline-block;margin-top:18px">← ${T("continueShopping")}</a>
    </div>
    <aside class="summary">
      <h3>${T("orderSummary")}</h3>
      <div class="r"><span>${T("subtotal")}</span><b class="num">${money(sub)}</b></div>
      <div class="r"><span>${T("delivery")}</span><span class="muted">${T("deliveryCalc")}</span></div>
      <div class="r muted" style="font-size:.88rem"><span>${T("insideDhaka")} ${money(STORE.delivery.inside)} · ${T("outsideDhaka")} ${money(STORE.delivery.outside)}</span></div>
      <a class="btn block" href="#/checkout">${T("checkout")} ${I("arrow", "ico-sm")}</a>
      <p class="muted" style="font-size:.85rem;display:flex;gap:8px;align-items:center">${I("cash", "ico-sm")} ${T("cartNoteCod")}</p>
    </aside>
  </div>`;
};

/* ---------- CHECKOUT ---------- */
PAGES.checkout = () => {
  if (!S.cart.length) { setTimeout(() => go("#/cart"), 0); return ""; }
  if (S._coTracked !== S.lastHash) { S._coTracked = S.lastHash; track("InitiateCheckout", { value: cartSubtotal(), currency: "BDT", num_items: cartCount() }); }
  const u = user() || {};
  const a = u.address || {};
  const area = S.coArea || a.area || "inside";
  const sub = cartSubtotal();
  const del = STORE.delivery[area];
  return `
  ${crumbs([[T("cart"), "#/cart"], [T("checkoutTitle"), ""]])}
  <div class="wrap page-head"><h1>${T("checkoutTitle")}</h1></div>
  <form class="wrap cart-layout" data-form="checkout" novalidate>
    <div>
      <section class="co-sec"><h3><span class="n">${D(1)}</span>${T("coContact")}</h3>
        <div class="grid2">
          <div class="field"><label for="co-name">${T("fullName")}</label><input id="co-name" autocomplete="name" value="${esc(u.name || "")}"><span class="err">${T("errName")}</span></div>
          <div class="field"><label for="co-phone">${T("phone")}</label><input id="co-phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="01XXXXXXXXX" value="${esc(u.phone || "")}"><span class="hint">${T("phoneHint")}</span><span class="err">${T("errPhone")}</span></div>
        </div>
        <div class="field"><label for="co-email">${T("email")} <span class="muted">(${T("optional")})</span></label><input id="co-email" type="email" autocomplete="email" value="${esc(u.email || "")}"></div>
      </section>
      <section class="co-sec"><h3><span class="n">${D(2)}</span>${T("coArea")}</h3>
        <label class="radio-card"><input type="radio" name="area" value="inside" ${area === "inside" ? "checked" : ""} data-act="area"><span class="grow"><b>${T("insideDhaka")}</b><small class="smp">${S.lang === "bn" ? "১ থেকে ২ দিন" : "1 to 2 days"}</small></span><b class="p num">${money(STORE.delivery.inside)}</b></label>
        <label class="radio-card"><input type="radio" name="area" value="outside" ${area === "outside" ? "checked" : ""} data-act="area"><span class="grow"><b>${T("outsideDhaka")}</b><small class="smp">${S.lang === "bn" ? "২ থেকে ৪ দিন" : "2 to 4 days"}</small></span><b class="p num">${money(STORE.delivery.outside)}</b></label>
      </section>
      <section class="co-sec"><h3><span class="n">${D(3)}</span>${T("coAddress")}</h3>
        <div class="field"><label for="co-district">${T("district")}</label><input id="co-district" autocomplete="address-level2" placeholder="${esc(T("districtPh"))}" value="${esc(a.district || "")}"><span class="err">${T("errDistrict")}</span></div>
        <div class="field"><label for="co-address">${T("address")}</label><textarea id="co-address" autocomplete="street-address" placeholder="${esc(T("addressPh"))}" style="min-height:90px">${esc(a.address || "")}</textarea><span class="err">${T("errAddress")}</span></div>
        <div class="field"><label for="co-note">${T("note")} <span class="muted">(${T("optional")})</span></label><input id="co-note" placeholder="${esc(T("notePh"))}"></div>
      </section>
      <section class="co-sec"><h3><span class="n">${D(4)}</span>${T("coPay")}</h3>
        <label class="radio-card"><input type="radio" name="pay" value="cod" checked><span class="grow"><b>${T("cod")}</b><small>${T("codD")}</small></span>${I("cash")}</label>
        <label class="radio-card disabled"><input type="radio" name="pay" value="online" disabled><span class="grow"><b>${T("onlineSoon")}</b><small>${T("onlineSoonD")}</small></span></label>
      </section>
    </div>
    <aside class="summary">
      <h3>${T("orderSummary")}</h3>
      ${S.cart.map((c) => { const p = product(c.id); return `<div class="mini">${ph(p.photos[0], "small")}<div><b>${esc(L(p.name))}</b><br><span class="muted">${T("qty")}: ${D(c.qty)}</span></div><b class="num">${money(p.price * c.qty)}</b></div>`; }).join("")}
      <div class="r" style="border-top:1px solid var(--line);padding-top:12px"><span>${T("subtotal")}</span><span class="num">${money(sub)}</span></div>
      <div class="r"><span>${T("delivery")} (${area === "inside" ? T("insideDhaka") : T("outsideDhaka")})</span><span class="num">${money(del)}</span></div>
      <div class="r total"><span>${T("total")}</span><span class="num">${money(sub + del)}</span></div>
      <button class="btn block" type="submit">${T("placeOrder")} · ${money(sub + del)}</button>
      <p class="muted" style="font-size:.8rem">${T("agree")} <a href="#/policy/terms">${T("terms")}</a> ${T("and")} <a href="#/policy/returns">${S.lang === "bn" ? "রিটার্ন নীতিতে" : T("returnsPolicy")}</a>${S.lang === "bn" ? " সম্মতি দিচ্ছেন।" : "."}</p>
    </aside>
  </form>`;
};

/* ---------- ORDER CONFIRMATION ---------- */
PAGES.order = (args) => {
  const o = S.orders.find((x) => x.id === args[0]);
  if (!o) return `<div class="wrap">${emptyState(T("orderNotFound"), "", `<a class="btn" href="#/">${T("goHome")}</a>`)}</div>`;
  return `<div class="wrap done">
    <span class="check">${I("check")}</span>
    <h1>${T("thanksTitle")}</h1>
    <p class="muted" style="font-size:1.05rem">${T("thanksSub")}</p>
    <div class="order-box">
      <div class="r" style="display:flex;justify-content:space-between"><span class="muted">${T("orderNo")}</span><b class="num">${esc(o.id)}</b></div>
      ${o.items.map((it) => `<div style="display:flex;justify-content:space-between;gap:12px"><span>${esc(L(product(it.id).name))} × ${D(it.qty)}</span><span class="num">${money(it.price * it.qty)}</span></div>`).join("")}
      <div style="display:flex;justify-content:space-between"><span class="muted">${T("delivery")}</span><span class="num">${money(o.delivery)}</span></div>
      <div style="display:flex;justify-content:space-between;border-top:1.5px solid var(--line);padding-top:10px;font-weight:800"><span>${T("total")} (${T("cod")})</span><span class="num">${money(o.total)}</span></div>
    </div>
    <div class="steps-mini"><div><b>${D(1)}. ${T("next1t")}</b>${T("next1d")}</div><div><b>${D(2)}. ${T("next2t")}</b><span class="smp">${T("next2d")}</span></div><div><b>${D(3)}. ${T("next3t")}</b>${T("next3d")}</div></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">${user() ? `<a class="btn" href="#/account/orders">${T("viewOrders")}</a>` : ""}<a class="btn ghost" href="#/shop">${T("continueShopping")}</a></div>
    <p class="note" style="text-align:left">${S.lang === "bn" ? "প্রোটোটাইপ: অর্ডার শুধু এই ব্রাউজারে সেভ হয়েছে। ফেজ ২-তে অর্ডার আপনার অ্যাডমিন প্যানেলে যাবে এবং চাইলে ক্রেতা SMS পাবেন।" : "Prototype: this order is saved in this browser only. In Phase 2 it lands in your admin panel and the customer can get an SMS."}</p>
  </div>`;
};

/* ---------- AUTH ---------- */
PAGES.login = () => authPage("login");
PAGES.register = () => authPage("register");
function authPage(mode) {
  const reg = mode === "register";
  return `<div class="wrap"><div class="auth">
    <div class="side"><div><h2>${T("authSideT")}</h2><ul style="margin-top:20px">${["authSide1", "authSide2", "authSide3", "authSide4"].map((k) => `<li>${I("check", "ico-sm")} ${T(k)}</li>`).join("")}</ul></div><span class="m-cat" aria-hidden="true"></span></div>
    <div class="main">
      <div class="seg" role="tablist"><button role="tab" aria-selected="${!reg}" data-act="nav" data-href="#/login">${T("login")}</button><button role="tab" aria-selected="${reg}" data-act="nav" data-href="#/register">${T("register")}</button></div>
      <form data-form="${mode}" novalidate style="display:grid;gap:14px">
        ${reg ? `<div class="field"><label for="au-name">${T("fullName")}</label><input id="au-name" autocomplete="name"><span class="err">${T("errName")}</span></div>
        <div class="field"><label for="au-phone">${T("phone")}</label><input id="au-phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="01XXXXXXXXX"><span class="err">${T("errPhone")}</span></div>
        <div class="field"><label for="au-email">${T("email")} <span class="muted">(${T("optional")})</span></label><input id="au-email" type="email" autocomplete="email"><span class="err">${T("invalidEmail")}</span></div>`
        : `<div class="field"><label for="au-id">${T("emailOrPhone")}</label><input id="au-id" autocomplete="username"></div>`}
        <div class="field"><label for="au-pw">${T("password")}</label><input id="au-pw" type="password" autocomplete="${reg ? "new-password" : "current-password"}"><span class="hint">${reg ? T("pwHint") : ""}</span><span class="err" id="au-err">${reg ? T("errPw") : T("errLogin")}</span></div>
        <button class="btn block" type="submit">${reg ? T("register") : T("login")}</button>
        <p class="muted" style="text-align:center">${reg ? T("haveAccount") : T("noAccount")} <a class="link" href="${reg ? "#/login" : "#/register"}">${reg ? T("login") : T("register")}</a></p>
        <p class="note">${S.lang === "bn" ? "প্রোটোটাইপ: অ্যাকাউন্ট শুধু এই ব্রাউজারে থাকে। আসল পাসওয়ার্ড দেবেন না। ফেজ ২-তে নিরাপদ সার্ভারে যাবে।" : "Prototype: accounts live in this browser only. Do not use a real password. Phase 2 moves this to a secure server."}</p>
      </form>
    </div>
  </div></div>`;
}

/* ---------- ACCOUNT ---------- */
PAGES.account = (args) => {
  const u = user();
  if (!u) { S.afterLogin = "#/account"; setTimeout(() => go("#/login"), 0); return ""; }
  const tab = args[0] || "orders";
  const mine = S.orders.filter((o) => o.user === u.id).slice().reverse();
  const myRv = Object.entries(S.reviews).flatMap(([pid, arr]) => arr.filter((r) => r.user === u.id).map((r) => ({ ...r, pid })));
  let body = "";
  if (tab === "orders") body = `<div class="panel"><h2 style="font-size:1.6rem">${T("myOrders")}</h2>${mine.length ? mine.map((o) => `<div class="order-row"><div><b class="num">${esc(o.id)}</b><div class="muted" style="font-size:.88rem">${fmtDate(o.date)} · ${plural(o.items.reduce((a, i) => a + i.qty, 0), "item1", "items")}</div></div><div style="text-align:right"><b class="num">${money(o.total)}</b><div class="s">${T("processing")}</div></div></div>`).join("") : emptyState(T("noOrders"), T("noOrdersD"), `<a class="btn" href="#/shop">${T("nav_shop")}</a>`)}</div>`;
  if (tab === "address") body = `<div class="panel"><h2 style="font-size:1.6rem">${T("addresses")}</h2>${u.address ? `<div class="c-card"><span class="ic">${I("pin")}</span><div class="grow"><small>${u.address.area === "inside" ? T("insideDhaka") : T("outsideDhaka")} · ${esc(u.address.district)}</small><strong style="user-select:text">${esc(u.address.address)}</strong></div></div>` : `<p class="muted">${T("noAddress")}</p>`}</div>`;
  if (tab === "profile") body = `<form class="panel" data-form="profile" novalidate><h2 style="font-size:1.6rem">${T("profile")}</h2>
    <div class="grid2"><div class="field"><label for="pf-name">${T("fullName")}</label><input id="pf-name" value="${esc(u.name)}"><span class="err">${T("errName")}</span></div>
    <div class="field"><label for="pf-phone">${T("phone")}</label><input id="pf-phone" value="${esc(u.phone)}" readonly></div></div>
    <div class="field"><label for="pf-email">${T("email")}</label><input id="pf-email" type="email" value="${esc(u.email || "")}"><span class="err">${T("invalidEmail")}</span></div>
    <div><button class="btn" type="submit">${T("save")}</button></div></form>`;
  if (tab === "reviews") body = `<div class="panel"><h2 style="font-size:1.6rem">${T("myReviews")}</h2>${myRv.length ? myRv.map((r) => `<div class="rev"><div class="top">${stars(r.r)}<a class="link" href="#/p/${r.pid}">${esc(L(product(r.pid).name))}</a></div><p>${esc(r.text)}</p></div>`).join("") : `<p class="muted">${T("noMyReviews")}</p>`}</div>`;
  const link = (k, ic, l) => `<a href="#/account/${k}" class="${tab === k ? "on" : ""}">${I(ic, "ico-sm")} ${l}</a>`;
  return `${crumbs([[T("account"), ""]])}
  <div class="wrap acct">
    <nav aria-label="${T("account")}">
      <div class="hello"><span class="av">${esc(u.name.slice(0, 1).toUpperCase())}</span><div><span class="muted" style="font-size:.85rem">${T("welcomeBack")}</span><br><b>${esc(u.name)}</b></div></div>
      ${link("orders", "box", T("myOrders"))}${link("address", "pin", T("addresses"))}${link("profile", "user", T("profile"))}${link("reviews", "chat", T("myReviews"))}
      <a href="#/wishlist">${I("heart", "ico-sm")} ${T("wishlist")}</a>
      <button data-act="logout">${I("logout", "ico-sm")} ${T("logout")}</button>
    </nav>
    <div style="min-width:0">${body}</div>
  </div>`;
};

/* ---------- WISHLIST ---------- */
PAGES.wishlist = () => {
  const list = S.wish.map(product).filter(Boolean);
  return `${crumbs([[T("wishlist"), ""]])}<div class="wrap page-head"><h1>${T("wishTitle")}</h1></div>
  <div class="wrap" style="padding-block:20px 72px">${list.length ? `<div class="pgrid">${list.map(productCard).join("")}</div>` : emptyState(T("wishEmpty"), T("wishEmptyD"), `<a class="btn" href="#/shop">${T("nav_shop")}</a>`)}</div>`;
};

/* ---------- ABOUT ---------- */
PAGES.about = () => `
  ${crumbs([[T("nav_about"), ""]])}
  <div class="wrap about-hero">
    <div><span class="eyebrow">${T("aboutEyebrow")}</span><h1 style="font-size:clamp(2.2rem,4.6vw,3.4rem);margin-top:12px">${esc(L(ABOUT.title))}</h1><p style="font-size:1.15rem;color:var(--muted);margin-top:16px;max-width:48ch">${esc(L(ABOUT.lede))}</p></div>
    ${ph(ABOUT.photo)}
  </div>
  <section class="sec" style="padding-top:0"><div class="wrap"><div class="prose" style="font-size:1.1rem;margin:0 auto">${ABOUT.body[S.lang].map((x) => `<p>${esc(x)}</p>`).join("")}</div>
    <p class="note" style="max-width:68ch;margin:18px auto 0">${S.lang === "bn" ? "<b>নমুনা গল্প।</b> নিজের কথায় বদলে দিন, যেমন প্রথম বিড়াল, প্রথম অর্ডার, কেন শুরু করলেন।" : "<b>Sample story.</b> Rewrite it in your own words: your first cat, your first order, why you started."}</p>
  </div></section>
  <section class="sec" style="padding-top:0"><div class="wrap"><div class="values">${ABOUT.values.map((v) => `<div><span class="ic">${I(v.icon)}</span><h3>${esc(L(v.t))}</h3><p>${esc(L(v.d))}</p></div>`).join("")}</div></div></section>
  <section class="sec" style="padding-top:0"><div class="wrap"><div class="quote-band"><span class="m-cat" aria-hidden="true"></span><p>${esc(L(ABOUT.quote))}</p></div></div></section>
  ${newsletter()}`;

/* ---------- CONTACT ---------- */
PAGES.contact = () => `
  ${crumbs([[T("nav_contact"), ""]])}
  <div class="wrap page-head"><h1>${T("contactTitle")}</h1><p>${T("contactSub")}</p></div>
  <div class="wrap contact">
    <div style="display:grid;gap:12px">
      <a class="btn wa" href="${waLink(S.lang === "bn" ? "হ্যালো পারভেলাস! আমার একটা প্রশ্ন আছে।" : "Hi Purrvelous! I have a question.")}" target="_blank" rel="noopener" data-act="wa" style="justify-content:flex-start;padding:16px 20px">${WA_ICON.replace("<svg", '<svg class="ico"')} ${T("chatWa")}</a>
      <div class="c-card"><span class="ic">${I("phone")}</span><div class="grow"><small>${T("callUs")} / WhatsApp</small><strong class="num">${STORE.phoneDisplay}</strong></div><button class="btn ghost sm" data-act="copy" data-v="${STORE.phone}">${I("copy", "ico-sm")} ${T("copy")}</button></div>
      <div class="c-card"><span class="ic">${I("mail")}</span><div class="grow"><small>${T("emailUs")}</small><strong>${STORE.email}</strong></div><button class="btn ghost sm" data-act="copy" data-v="${STORE.email}">${I("copy", "ico-sm")} ${T("copy")}</button></div>
      <div class="c-card"><span class="ic">${I("clock")}</span><div class="grow"><small>${T("hours")}</small><strong class="smp">${T("hoursV")}</strong></div></div>
    </div>
    <form class="panel" data-form="contact" novalidate id="contact-form">
      <div class="grid2"><div class="field"><label for="ct-name">${T("cName")}</label><input id="ct-name" autocomplete="name"><span class="err">${T("errName")}</span></div>
      <div class="field"><label for="ct-reach">${T("cPhoneEmail")}</label><input id="ct-reach"><span class="err">${T("errPhone")}</span></div></div>
      <div class="field"><label for="ct-subj">${T("cSubject")}</label><span class="sel"><select id="ct-subj">${T("subjects").map((s) => `<option>${esc(s)}</option>`).join("")}</select><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></span></div>
      <div class="field"><label for="ct-msg">${T("cMsg")}</label><textarea id="ct-msg"></textarea><span class="err">${T("errMsg")}</span></div>
      <div><button class="btn" type="submit">${T("cSend")}</button></div>
      <p class="note">${S.lang === "bn" ? "প্রোটোটাইপ: এই ফর্ম এখনো কোথাও পাঠায় না। ফেজ ২-তে মেসেজ আপনার ইমেইলে যাবে।" : "Prototype: this form does not send anywhere yet. In Phase 2 messages go to your email."}</p>
    </form>
  </div>`;

/* ---------- FAQ ---------- */
PAGES.faq = () => `
  ${crumbs([[T("nav_faq"), ""]])}
  <div class="wrap page-head"><h1>${T("faqTitle")}</h1><p>${T("faqSub")}</p></div>
  <div class="wrap faq">
    <nav aria-label="FAQ">${FAQ.map((g) => `<a href="#/faq" data-act="jump" data-to="faq-${g.id}">${esc(L(g.g))}</a>`).join("")}</nav>
    <div style="min-width:0">${FAQ.map((g) => `<section class="faq-group" id="faq-${g.id}"><h2>${esc(L(g.g))}</h2>${g.q.map((x) => `<details class="qa"><summary>${esc(L(x.q))}<span class="pm">${I("plus", "ico-sm")}</span></summary><div class="a"><span class="${x.s ? "smp" : ""}">${esc(L(x.a))}</span></div></details>`).join("")}</section>`).join("")}
      <div class="c-card" style="margin-top:36px"><span class="ic">${I("chat")}</span><div class="grow"><strong style="user-select:text">${T("faqSub")}</strong></div><a class="btn wa sm" href="${waLink("Hi Purrvelous!")}" target="_blank" rel="noopener" data-act="wa">${T("chatWa")}</a></div>
    </div>
  </div>`;

/* ---------- BLOG ---------- */
PAGES.blog = (args) => {
  if (args[0]) return blogPost(args[0]);
  const all = postsSorted();
  const topics = [];
  all.forEach((p) => { if (!topics.find((t) => t.en === p.tag.en)) topics.push(p.tag); });
  const sel = S.blogTopic || "all";
  const list = sel === "all" ? all : all.filter((p) => p.tag.en === sel);
  const [first, ...rest] = list;
  return `${crumbs([[T("nav_blog"), ""]])}
  <div class="wrap page-head"><h1>${T("blogPageTitle")}</h1><p>${T("blogPageSub")}</p></div>
  <div class="wrap"><div class="topic-chips" role="group" aria-label="${T("topics")}">
    <button class="${sel === "all" ? "on" : ""}" data-act="topic" data-t="all">${T("allTopics")} <small>${D(all.length)}</small></button>
    ${topics.map((t) => `<button class="${sel === t.en ? "on" : ""}" data-act="topic" data-t="${esc(t.en)}">${esc(L(t))} <small>${D(all.filter((p) => p.tag.en === t.en).length)}</small></button>`).join("")}
  </div></div>
  <section class="sec tight"><div class="wrap">
    ${first ? postCard(first, true) : ""}
    ${rest.length ? `<div class="posts" style="margin-top:36px">${rest.map((p) => postCard(p)).join("")}</div>` : ""}
  </div></section>
  ${newsletter()}`;
};
function blogPost(id) {
  const p = POSTS.find((x) => x.id === id);
  if (!p) return PAGES.notfound();
  const pr = p.product ? product(p.product) : null;
  const body = p.body[S.lang];
  const heads = body.filter((b) => b[0] === "h").map((b) => b[1]);
  const faq = p.faq || [];
  const related = postsSorted().filter((x) => x.id !== p.id).sort((a, b) => (b.tag.en === p.tag.en) - (a.tag.en === p.tag.en)).slice(0, 3);
  const mt = L(p.metaTitle), md = L(p.metaDesc);
  return `${crumbs([[T("nav_blog"), "#/blog"], [L(p.title), ""]])}
  <article class="article wrap">
    <a class="topic" href="#/blog" data-act="topic" data-t="${esc(p.tag.en)}">${esc(L(p.tag))}</a>
    <h1>${esc(L(p.title))}</h1>
    <p class="standfirst">${esc(L(p.ex))}</p>
    <div class="meta"><span>Purrvelous</span><span>${fmtDate(p.date)}</span><span>${D(readMins(p))} ${T("minRead")}</span></div>
    ${ph(p.photo, "alt")}
    <div class="note seo-note">
      <b>${T("seoPanel")}</b>
      <dl>
        <dt>${T("seoKeyword")}</dt><dd>${esc(L(p.keyword))}</dd>
        <dt>${T("seoTitle")} <span class="muted num">(${D(mt.length)}/60)</span></dt><dd>${esc(mt)}</dd>
        <dt>${T("seoDesc")} <span class="muted num">(${D(md.length)}/160)</span></dt><dd>${esc(md)}</dd>
        <dt>URL</dt><dd>purrvelous.com/blog/${p.id}</dd>
      </dl>
      ${p.medical ? `<p style="margin-top:8px"><b>${T("vetReview")}</b></p>` : ""}
    </div>
    ${heads.length > 2 ? `<nav class="toc" aria-label="${T("inThisArticle")}"><b>${T("inThisArticle")}</b><ol>${heads.map((h) => `<li><a href="#/blog/${p.id}" data-act="jump" data-to="${slug(h)}">${esc(h)}</a></li>`).join("")}${faq.length ? `<li><a href="#/blog/${p.id}" data-act="jump" data-to="post-faq">${T("faqShort")}</a></li>` : ""}</ol></nav>` : ""}
    <div class="prose">${renderBlocks(body)}</div>
    ${faq.length ? `<section class="post-faq" id="post-faq"><h2>${T("faqShort")}</h2>${faq.map((f) => `<details class="qa"><summary>${esc(L(f.q))}<span class="pm">${I("plus", "ico-sm")}</span></summary><div class="a">${esc(L(f.a))}</div></details>`).join("")}</section>` : ""}
    ${pr ? `<span class="eyebrow" style="display:block;margin-top:40px">${T("featuredIn")}</span><a class="product-plug" href="#/p/${pr.id}">${ph(pr.photos[0], "small")}<div><b>${esc(L(pr.name))}</b><div class="num">${money(pr.price)}</div></div>${I("arrow")}</a>` : ""}
    ${p.medical ? `<p class="disclaimer">${T("medDisclaimer")}</p>` : ""}
  </article>
  <section class="sec" style="padding-top:0"><div class="wrap"><div class="sec-head"><h2 style="font-size:1.7rem">${T("keepReading")}</h2><a class="btn ghost sm" href="#/blog">${T("backBlog")}</a></div><div class="posts">${related.map((x) => postCard(x)).join("")}</div></div></section>`;
}

/* ---------- SEO head tags (title, description, JSON-LD) ---------- */
const DEFAULT_DESC = "Purrvelous: pet supplies delivered across Bangladesh. Cash on delivery.";
function setHead(title, desc, ld) {
  document.title = title;
  let m = document.querySelector('meta[name="description"]');
  if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); }
  m.content = desc || DEFAULT_DESC;
  let s = document.getElementById("ld-json");
  if (ld) {
    if (!s) { s = document.createElement("script"); s.type = "application/ld+json"; s.id = "ld-json"; document.head.appendChild(s); }
    s.textContent = JSON.stringify(ld);
  } else if (s) s.remove();
}
function postSchema(p) {
  const url = "https://www.purrvelous.com/blog/" + p.id;
  const g = [
    { "@type": "BlogPosting", headline: L(p.title), description: L(p.metaDesc), datePublished: p.date, dateModified: p.date, inLanguage: S.lang === "bn" ? "bn-BD" : "en", mainEntityOfPage: url, keywords: L(p.keyword), author: { "@type": "Organization", name: "Purrvelous" }, publisher: { "@type": "Organization", name: "Purrvelous", url: "https://www.purrvelous.com" } },
    { "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "Home", item: "https://www.purrvelous.com/" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.purrvelous.com/blog" }, { "@type": "ListItem", position: 3, name: L(p.title), item: url } ] }
  ];
  if (p.faq && p.faq.length) g.push({ "@type": "FAQPage", mainEntity: p.faq.map((f) => ({ "@type": "Question", name: L(f.q), acceptedAnswer: { "@type": "Answer", text: L(f.a) } })) });
  return { "@context": "https://schema.org", "@graph": g };
}

/* ---------- POLICY ---------- */
PAGES.policy = (args) => {
  const key = POLICIES[args[0]] ? args[0] : "shipping";
  const pol = POLICIES[key];
  const names = { shipping: T("shipping"), returns: T("returns"), privacy: T("privacy"), terms: T("termsT") };
  return `${crumbs([[T("policies"), ""], [L(pol.t), ""]])}
  <div class="wrap page-head"><h1>${esc(L(pol.t))}</h1></div>
  <div class="wrap policy">
    <nav aria-label="${T("policies")}">${Object.keys(POLICIES).map((k) => `<a href="#/policy/${k}" class="${k === key ? "on" : ""}">${names[k]}</a>`).join("")}</nav>
    <div style="min-width:0"><p class="note" style="margin-bottom:20px">${T("policyNote")}</p><div class="prose">${renderBlocks(pol.body[S.lang])}</div></div>
  </div>`;
};

/* ---------- SEARCH ---------- */
PAGES.search = (args) => {
  const q = decodeURIComponent(args.join("/") || "").trim();
  const ql = q.toLowerCase();
  const hit = (o) => o && (String(o.en).toLowerCase().includes(ql) || String(o.bn).toLowerCase().includes(ql));
  const prods = ql ? PRODUCTS.filter((p) => hit(p.name) || hit(p.short) || hit(category(p.cat).name)) : [];
  const cats = ql ? CATEGORIES.filter((c) => hit(c.name) || hit(c.desc)) : [];
  const posts = ql ? POSTS.filter((p) => hit(p.title) || hit(p.ex)) : [];
  const none = !prods.length && !cats.length && !posts.length;
  return `${crumbs([[T("search"), ""]])}
  <div class="wrap page-head"><h1>${T("searchTitle")} “${esc(q)}”</h1></div>
  <div class="wrap" style="padding-block:20px 72px;display:grid;gap:40px">
    ${none ? emptyState(T("searchNone"), T("searchNoneD"), `<a class="btn" href="#/shop">${T("nav_shop")}</a>`) : ""}
    ${prods.length ? `<div><h2 style="font-size:1.5rem;margin-bottom:16px">${T("inProducts")}</h2><div class="pgrid">${prods.map(productCard).join("")}</div></div>` : ""}
    ${cats.length ? `<div><h2 style="font-size:1.5rem;margin-bottom:16px">${T("inCats")}</h2><div class="pgrid">${cats.map((c) => (c.status === "live" ? `<a class="cat-tile live" href="#/c/${c.id}"><div class="art">${I(c.icon)}</div><h3>${esc(L(c.name))}</h3></a>` : soonCard(c))).join("")}</div></div>` : ""}
    ${posts.length ? `<div><h2 style="font-size:1.5rem;margin-bottom:16px">${T("inPosts")}</h2><div class="posts">${posts.map((p) => postCard(p)).join("")}</div></div>` : ""}
  </div>`;
};

/* ---------- 404 ---------- */
PAGES.notfound = () => `<div class="wrap nf"><span class="m-cat" aria-hidden="true"></span><span class="eyebrow">404</span><h1>${T("nfTitle")}</h1><p class="muted" style="max-width:44ch">${T("nfSub")}</p><div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center"><a class="btn" href="#/">${T("goHome")}</a><a class="btn ghost" href="#/shop">${T("nav_shop")}</a></div></div>`;

/* ============================================================
   CHROME (header, footer, drawer)
   ============================================================ */
function chrome() {
  document.documentElement.lang = S.lang === "bn" ? "bn" : "en";
  document.body.classList.toggle("bn", S.lang === "bn");
  document.body.classList.toggle("notes", !!S.notes);
  $("#tb-msg").textContent = T("topbar");
  const nt = $("#notes-btn"); nt.textContent = S.notes ? T("notesOn") : T("notesOff"); nt.setAttribute("aria-pressed", String(!!S.notes));
  $$(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === S.lang)));
  const route = (location.hash.replace(/^#\/?/, "").split("/")[0]) || "";
  const sub = location.hash.split("/")[2] || "";
  const navItems = [
    ["#/shop", T("nav_shop"), route === "shop" && !sub],
    ["#/shop/cats", T("nav_cats"), route === "shop" && sub === "cats"],
    ["#/shop/dogs", T("nav_dogs") + `<span class="soon">${T("soon")}</span>`, route === "shop" && sub === "dogs"],
    ["#/blog", T("nav_blog"), route === "blog"],
    ["#/about", T("nav_about"), route === "about"]
  ];
  $("#nav").innerHTML = navItems.map(([h, l, on]) => `<a href="${h}" class="${on ? "on" : ""}">${l}</a>`).join("");
  $("#drawer-links").innerHTML = navItems.map(([h, l]) => `<a href="${h}">${l}${I("arrow", "ico-sm")}</a>`).join("") +
    [["#/faq", T("nav_faq")], ["#/contact", T("nav_contact")], ["#/wishlist", T("wishlist")], [user() ? "#/account" : "#/login", user() ? T("account") : T("login")]].map(([h, l]) => `<a href="${h}">${l}${I("arrow", "ico-sm")}</a>`).join("");
  const cc = cartCount(); const cb = $("#cart-badge"); cb.textContent = cc ? D(cc) : ""; cb.dataset.n = cc;
  const wc = S.wish.length; const wb = $("#wish-badge"); wb.textContent = wc ? D(wc) : ""; wb.dataset.n = wc;
  $("#acct-link").href = user() ? "#/account" : "#/login";
  $("#search-input").placeholder = T("searchPh");
  ["search-btn", "search-close"].forEach((id) => $("#" + id).setAttribute("aria-label", id === "search-btn" ? T("search") : T("close")));
  $("#wa-label").textContent = T("chatWa");
  $("#wa-float").href = waLink(S.lang === "bn" ? "হ্যালো পারভেলাস!" : "Hi Purrvelous!");
  // footer
  $("#ftr").innerHTML = `
    <div class="cols">
      <div><a class="brand" href="#/"><span class="m-cat" aria-hidden="true"></span><b>PURRVELOUS</b></a><p>${T("fAbout")}</p><span class="tag">${S.lang === "bn" ? "কারণ ওরা আরও ভালো কিছুর যোগ্য" : "Because they deserve better"}</span></div>
      <div><h4>${T("fShop")}</h4><ul><li><a href="#/shop">${T("nav_shop")}</a></li><li><a href="#/shop/cats">${T("nav_cats")}</a></li><li><a href="#/shop/dogs">${T("nav_dogs")}</a></li><li><a href="#/c/bags">${L(category("bags").name)}</a></li><li><a href="#/blog">${T("nav_blog")}</a></li></ul></div>
      <div><h4>${T("fHelp")}</h4><ul><li><a href="#/faq">${T("nav_faq")}</a></li><li><a href="#/policy/shipping">${T("shipping")}</a></li><li><a href="#/policy/returns">${T("returns")}</a></li><li><a href="#/about">${T("nav_about")}</a></li><li><a href="#/contact">${T("nav_contact")}</a></li></ul></div>
      <div><h4>${T("fContact")}</h4><ul class="cinfo"><li>${I("phone", "ico-sm")}<span class="num">${STORE.phoneDisplay}</span></li><li>${I("mail", "ico-sm")}<span>${STORE.email}</span></li><li>${I("fb", "ico-sm")}<a href="${STORE.facebook}" target="_blank" rel="noopener">Facebook</a></li><li>${I("clock", "ico-sm")}<span class="smp">${T("hoursV")}</span></li></ul></div>
    </div>
    <div class="bottom"><span>© ${D(new Date().getFullYear())} Purrvelous. ${T("fRights")} · <a href="#/policy/privacy" style="color:inherit">${T("privacy")}</a> · <a href="#/policy/terms" style="color:inherit">${T("termsT")}</a></span><span class="pay">${T("fPay")}: <span>${T("cod")}</span></span></div>`;
}

/* ============================================================
   ROUTER
   ============================================================ */
function render() {
  const h = location.hash || "#/";
  const parts = h.replace(/^#\/?/, "").split("/").filter(Boolean);
  const r = parts[0] || "home";
  const fn = PAGES[r] || PAGES.notfound;
  const changed = S.lastHash !== h;
  S.lastHash = h;
  $("#main").innerHTML = fn(parts.slice(1));
  chrome();
  closeOverlays();
  if (changed) {
    window.scrollTo(0, 0);
    track("PageView");
    const titles = { home: "Purrvelous", shop: T("shopTitle"), p: (product(parts[1]) && L(product(parts[1]).name)), c: (category(parts[1]) && L(category(parts[1]).name)), cart: T("cart"), checkout: T("checkoutTitle"), blog: T("nav_blog"), about: T("nav_about"), contact: T("nav_contact"), faq: T("nav_faq"), wishlist: T("wishlist"), account: T("account"), login: T("login"), register: T("register") };
    const post = r === "blog" && parts[1] && POSTS.find((x) => x.id === parts[1]);
    if (post) setHead(L(post.metaTitle), L(post.metaDesc), postSchema(post));
    else setHead((titles[r] && r !== "home" ? titles[r] + " · " : "") + "Purrvelous Store", null, null);
  }
}
function rerender() { const y = window.scrollY; { const pp = location.hash.replace(/^#\/?/, "").split("/"); const post = pp[0] === "blog" && pp[1] && POSTS.find((x) => x.id === pp[1]); if (post) setHead(L(post.metaTitle), L(post.metaDesc), postSchema(post)); } $("#main").innerHTML = (PAGES[(location.hash.replace(/^#\/?/, "").split("/")[0]) || "home"] || PAGES.notfound)(location.hash.replace(/^#\/?/, "").split("/").filter(Boolean).slice(1)); chrome(); window.scrollTo(0, y); }

/* ============================================================
   ACTIONS
   ============================================================ */
function addToCart(id, qty) {
  const it = S.cart.find((c) => c.id === id);
  if (it) it.qty = Math.min(10, it.qty + qty); else S.cart.push({ id, qty });
  save("cart"); chrome();
  const p = product(id);
  toast(`<span>${T("added")}</span>`, { action: { href: "#/cart", label: T("viewCart") } });
  track("AddToCart", { content_ids: [id], content_type: "product", value: p.price * qty, currency: "BDT" });
}
function closeOverlays() { ["#drawer", "#scrim", "#search-pop"].forEach((s) => $(s).classList.remove("open")); }
function setFieldErr(id, bad) { const f = $("#" + id); if (f) f.closest(".field").classList.toggle("invalid", !!bad); return !bad; }

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-act]");
  if (!el) return;
  const a = el.dataset.act;
  if (a === "wa") { track("Contact", { method: "whatsapp" }); return; }
  if (a === "area") return;
  if (a === "nav") { e.preventDefault(); go(el.dataset.href); return; }
  if (a === "add") {
    e.preventDefault();
    const q = el.dataset.qty === "pdp" ? Math.max(1, Math.min(10, parseInt($("#pdp-qty").value, 10) || 1)) : 1;
    addToCart(el.dataset.id, q); return;
  }
  if (a === "wish") {
    e.preventDefault();
    const id = el.dataset.id; const i = S.wish.indexOf(id);
    if (i > -1) { S.wish.splice(i, 1); toast(T("removedWish")); }
    else { S.wish.push(id); toast(T("savedWish"), { action: { href: "#/wishlist", label: T("wishlist") } }); track("AddToWishlist", { content_ids: [id] }); }
    save("wish"); rerender(); return;
  }
  if (a === "filter") {
    if (el.dataset.kind === "pet") { const h = "#/shop" + (el.dataset.id === "all" ? "" : "/" + el.dataset.id); if (location.hash !== h) { go(h); return; } }
    else S.shop.cat = el.dataset.id;
    rerender(); return;
  }
  if (a === "topic") { e.preventDefault(); S.blogTopic = el.dataset.t; if (location.hash !== "#/blog") go("#/blog"); else rerender(); return; }
  if (a === "img") { S.pdp.img = +el.dataset.i; rerender(); return; }
  if (a === "tab") { S.pdp.tab = el.dataset.tab; rerender(); const t = $("#tabs"); if (t && el.closest(".pinfo")) t.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
  if (a === "qty") { S.pdp.qty = Math.max(1, Math.min(10, (parseInt($("#pdp-qty").value, 10) || 1) + +el.dataset.d)); rerender(); return; }
  if (a === "rate") { S.pdp.stars = +el.dataset.n; $$(".star-in button").forEach((b) => { b.classList.toggle("on", +b.dataset.n <= S.pdp.stars); b.setAttribute("aria-checked", String(+b.dataset.n === S.pdp.stars)); }); return; }
  if (a === "cqty") { const it = S.cart.find((c) => c.id === el.dataset.id); it.qty = Math.max(1, Math.min(10, it.qty + +el.dataset.d)); save("cart"); rerender(); return; }
  if (a === "rm") { S.cart = S.cart.filter((c) => c.id !== el.dataset.id); save("cart"); rerender(); return; }
  if (a === "logout") { S.session = null; save("session"); go("#/"); return; }
  if (a === "copy") {
    const v = el.dataset.v; const done = () => { const o = el.innerHTML; el.innerHTML = I("check", "ico-sm") + " " + T("copied"); setTimeout(() => (el.innerHTML = o), 1500); };
    try { navigator.clipboard.writeText(v).then(done, () => { const s = el.parentElement.querySelector("strong"); const r = document.createRange(); r.selectNodeContents(s); const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); }); } catch (err) {}
    return;
  }
  if (a === "jump") { e.preventDefault(); const t = document.getElementById(el.dataset.to); if (t) t.scrollIntoView({ behavior: "smooth" }); return; }
});
document.addEventListener("change", (e) => {
  if (e.target.id === "sort") { S.shop.sort = e.target.value; rerender(); }
  if (e.target.name === "area") { S.coArea = e.target.value; const keep = {}; ["co-name", "co-phone", "co-email", "co-district", "co-address", "co-note"].forEach((id) => (keep[id] = $("#" + id).value)); rerender(); Object.entries(keep).forEach(([id, v]) => ($("#" + id).value = v)); }
  if (e.target.id === "pdp-qty") { S.pdp.qty = Math.max(1, Math.min(10, parseInt(e.target.value, 10) || 1)); rerender(); }
});

/* ---------- forms ---------- */
document.addEventListener("submit", (e) => {
  const f = e.target.closest("[data-form]");
  if (!f) return;
  e.preventDefault();
  const k = f.dataset.form;

  if (k === "notify") {
    const inp = f.querySelector("input");
    if (!emailOk(inp.value)) { inp.focus(); toast(T("invalidEmail")); return; }
    const list = DB.get("notify", []); list.push({ email: inp.value.trim(), tag: f.dataset.tag, date: new Date().toISOString() }); DB.set("notify", list);
    f.outerHTML = `<p style="font-weight:700;display:flex;gap:8px;align-items:center">${I("check", "ico-sm")} ${f.dataset.tag === "newsletter" ? T("nlDone") : T("notifyDone")}</p>`;
    track("Lead", { content_name: f.dataset.tag }); return;
  }

  if (k === "review") {
    const name = $("#rv-name").value.trim(), text = $("#rv-text").value.trim();
    if (!S.pdp.stars || !name || text.length < 3) { $("#rv-text").closest(".field").classList.add("invalid"); return; }
    const id = f.dataset.id; (S.reviews[id] = S.reviews[id] || []).push({ r: S.pdp.stars, name, text, date: new Date().toISOString(), user: S.session });
    save("reviews"); S.pdp.stars = 0; toast(T("reviewThanks")); rerender(); return;
  }

  if (k === "checkout") {
    const v = (id) => $("#" + id).value.trim();
    let ok = true;
    ok = setFieldErr("co-name", !v("co-name")) && ok;
    ok = setFieldErr("co-phone", !phoneOk(v("co-phone"))) && ok;
    ok = setFieldErr("co-district", !v("co-district")) && ok;
    ok = setFieldErr("co-address", v("co-address").length < 6) && ok;
    if (!ok) { const bad = $(".field.invalid input, .field.invalid textarea"); if (bad) bad.focus(); return; }
    const area = (f.querySelector('input[name="area"]:checked') || {}).value || "inside";
    const sub = cartSubtotal(), del = STORE.delivery[area];
    const o = { id: "PV-" + String(Date.now()).slice(-6), date: new Date().toISOString(), items: S.cart.map((c) => ({ id: c.id, qty: c.qty, price: product(c.id).price })), area, delivery: del, subtotal: sub, total: sub + del, name: v("co-name"), phone: v("co-phone"), email: v("co-email"), district: v("co-district"), address: v("co-address"), note: v("co-note"), pay: "cod", status: "processing", user: S.session };
    S.orders.push(o); save("orders");
    const u = user(); if (u) { u.address = { area, district: o.district, address: o.address }; save("users"); }
    track("Purchase", { value: o.total, currency: "BDT", content_ids: o.items.map((i) => i.id), num_items: o.items.reduce((a, i) => a + i.qty, 0) });
    S.cart = []; save("cart"); S.coArea = null;
    go("#/order/" + o.id); return;
  }

  if (k === "register") {
    const name = $("#au-name").value.trim(), phone = $("#au-phone").value.replace(/[\s-]/g, ""), email = $("#au-email").value.trim(), pw = $("#au-pw").value;
    let ok = true;
    ok = setFieldErr("au-name", !name) && ok;
    ok = setFieldErr("au-phone", !phoneOk(phone)) && ok;
    ok = setFieldErr("au-email", email && !emailOk(email)) && ok;
    if (pw.length < 6) { $("#au-err").textContent = T("errPw"); setFieldErr("au-pw", true); ok = false; } else setFieldErr("au-pw", false);
    if (!ok) return;
    if (S.users.some((u) => u.phone === phone || (email && u.email === email))) { $("#au-err").textContent = T("errExists"); setFieldErr("au-pw", true); return; }
    const u = { id: "u" + Date.now(), name, phone, email, pw: hash(pw), address: null };
    S.users.push(u); save("users"); S.session = u.id; save("session");
    track("CompleteRegistration");
    toast(`${T("welcome")}, ${esc(name.split(" ")[0])}!`);
    go(S.afterLogin || "#/account"); S.afterLogin = null; return;
  }

  if (k === "login") {
    const id = $("#au-id").value.trim().replace(/[\s-]/g, ""), pw = hash($("#au-pw").value);
    const u = S.users.find((x) => (x.phone === id || (x.email && x.email.toLowerCase() === id.toLowerCase())) && x.pw === pw);
    if (!u) { setFieldErr("au-pw", true); return; }
    S.session = u.id; save("session"); toast(`${T("welcomeBack")}, ${esc(u.name.split(" ")[0])}!`);
    go(S.afterLogin || "#/account"); S.afterLogin = null; return;
  }

  if (k === "profile") {
    const u = user(); const name = $("#pf-name").value.trim(), email = $("#pf-email").value.trim();
    let ok = setFieldErr("pf-name", !name); ok = setFieldErr("pf-email", email && !emailOk(email)) && ok;
    if (!ok) return;
    u.name = name; u.email = email; save("users"); toast(T("saved")); rerender(); return;
  }

  if (k === "contact") {
    const name = $("#ct-name").value.trim(), reach = $("#ct-reach").value.trim(), msg = $("#ct-msg").value.trim();
    let ok = setFieldErr("ct-name", !name);
    ok = setFieldErr("ct-reach", !(phoneOk(reach) || emailOk(reach))) && ok;
    ok = setFieldErr("ct-msg", msg.length < 3) && ok;
    if (!ok) return;
    f.innerHTML = `<div class="empty" style="border:0;padding:24px"><span class="check" style="width:56px;height:56px;border-radius:99px;background:var(--mustard);color:#13372A;display:grid;place-items:center">${I("check")}</span><h3>${T("cDone")}</h3></div>`;
    track("Contact", { method: "form" }); return;
  }
});

/* ---------- header controls ---------- */
$("#notes-btn").addEventListener("click", () => { S.notes = !S.notes; save("notes"); chrome(); });
$$(".lang button").forEach((b) => b.addEventListener("click", () => { S.lang = b.dataset.lang; save("lang"); rerender(); }));
$("#menu-btn").addEventListener("click", () => { $("#drawer").classList.add("open"); $("#scrim").classList.add("open"); });
$("#drawer-close").addEventListener("click", closeOverlays);
$("#scrim").addEventListener("click", closeOverlays);
$("#search-btn").addEventListener("click", () => { $("#search-pop").classList.add("open"); setTimeout(() => $("#search-input").focus(), 50); });
$("#search-close").addEventListener("click", closeOverlays);
$("#search-form").addEventListener("submit", (e) => { e.preventDefault(); const q = $("#search-input").value.trim(); if (q) { track("Search", { search_string: q }); go("#/search/" + encodeURIComponent(q)); } });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeOverlays(); });
$("#wa-float").addEventListener("click", () => track("Contact", { method: "whatsapp" }));

window.addEventListener("hashchange", render);
render();
})();
