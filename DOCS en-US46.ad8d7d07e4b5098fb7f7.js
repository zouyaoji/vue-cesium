(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/installation.md?vue&type=template&id=65424f0c

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h1>Installation VueCesium</h1><h3 id=\"environment\"><a class=\"header-anchor\" href=\"#environment\">¶</a> Environment</h3><ul><li>Modern browser</li></ul><table><thead><tr><th><img src=\"https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png\" alt=\"IE\"></th><th><img src=\"https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png\" alt=\"Firefox\"></th><th><img src=\"https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png\" alt=\"Chrome\"></th><th><img src=\"https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png\" alt=\"Safari\"></th></tr></thead><tbody><tr><td>Edge</td><td>last 2 versions</td><td>last 2 versions</td><td>last 2 versions</td></tr></tbody></table><blockquote><p>Since Vue3 and Cesium@1.85+ no longer supports IE11, VueCesium does not support IE11 and previous versions.</p></blockquote><h3 id=\"current-latest-version\"><a class=\"header-anchor\" href=\"#current-latest-version\">¶</a> Current latest version</h3><p>VueCesium is currently in a rapid development iteration:</p><p><a href=\"https://www.npmjs.org/package/vue-cesium\"><img src=\"https://img.shields.io/npm/v/vue-cesium/next?style=flat-square\" alt=\"VueCesium version badge\"></a></p><h3 id=\"install-via-npm-or-yarn\"><a class=\"header-anchor\" href=\"#install-via-npm-or-yarn\">¶</a> Install via npm or yarn</h3><p><strong>We recommend using the package manager to install VueCesium</strong>, so that you can utilize bundlers like <a href=\"https://vitejs.dev\">vite</a> and <a href=\"https://webpack.js.org/\">webpack</a>.</p><pre><code class=\"hljs language-shell\"><span class=\"hljs-meta\">$ </span><span class=\"language-bash\">npm install vue-cesium@next --save</span>\n</code></pre><pre><code class=\"hljs language-shell\"><span class=\"hljs-meta\">$ </span><span class=\"language-bash\">yarn add vue-cesium@next</span>\n</code></pre><h3 id=\"browser-direct-introducing\"><a class=\"header-anchor\" href=\"#browser-direct-introducing\">¶</a> Browser direct introducing</h3><p>Directly import VueCesium through browser HTML tags, and use <code>VueCesium</code> globally</p><p>Introduce <code>VueCesium</code> in full through <strong>CDN</strong>. According to different <strong>CDN</strong> providers, there are different introduction methods. Here we use <a href=\"https://unpkg.com\">unpkg</a> and<a href=\"https://jsdelivr.com\">jsdelivr</a> For example, You can also use other <strong>CDN</strong> providers.</p><h2 id=\"use-unpkg\"><a class=\"header-anchor\" href=\"#use-unpkg\">¶</a> Use unpkg</h2><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce style --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue-cesium@next/dist/index.css&quot;</span> /&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce Vue --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce component library --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue-cesium@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code></pre><h2 id=\"use-jsdelivr\"><a class=\"header-anchor\" href=\"#use-jsdelivr\">¶</a> Use jsDelivr</h2><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce style --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue-cesium@next/dist/index.css&quot;</span> /&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce Vue --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- Introduce component library --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue-cesium@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code></pre><div class=\"tip\"><p>We recommend using <strong>CDN</strong> to introduce <code>VueCesium</code> users to lock the version on the link address, so as not to be affected by incompatible updates when <code>VueCesium</code> is upgraded in the future. Please check <a href=\"https://unpkg.com\">unpkg.com</a> for the method to lock the version.</p></div><h3 id=\"hello-world\"><a class=\"header-anchor\" href=\"#hello-world\">¶</a> Hello world</h3><p>With <strong>CDN</strong>, we can easily use <code>VueCesium</code> to write a Hello world page. <a href=\"https://codepen.io/zouyaoji/pen/bGBOyJM\">Online Demo</a></p>", 22);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("iframe", {
  height: "500",
  style: {
    "width": "100%"
  },
  scrolling: "no",
  title: "VueCesium Demo",
  src: "https://codepen.io/zouyaoji/embed/bGBOyJM?height=265&theme-id=light&default-tab=html,result",
  frameborder: "no",
  loading: "lazy",
  allowtransparency: "true",
  allowfullscreen: "true"
}, "\n  See the Pen <a href='https://codepen.io/zouyaoji/pen/bGBOyJM'>VueCesium Demo</a> by zouyaoji\n  (<a href='https://codepen.io/zouyaoji'>@zouyaoji</a>) on <a href='https://codepen.io'>CodePen</a>.\n", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("If you are installing via npm / yarn and want to use it with a packaging tool, please read the next section: "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  href: "./#/en-US/component/quickstart"
}, "Quick Start"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".")], -1);

function render(_ctx, _cache) {
  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [_hoisted_2, _hoisted_24, _hoisted_25, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/installation.md?vue&type=template&id=65424f0c

// CONCATENATED MODULE: ./website/docs/en-US/installation.md

const script = {}
script.render = render

/* harmony default export */ var installation = __webpack_exports__["default"] = (script);

/***/ })

}]);