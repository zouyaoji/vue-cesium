(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[133],{

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/installation.md?vue&type=template&id=56255eab

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h1>安装 VueCesium</h1><h3 id=\"huan-jing-zhi-chi\"><a class=\"header-anchor\" href=\"#huan-jing-zhi-chi\">¶</a> 环境支持</h3><ul><li>现代浏览器</li></ul><table><thead><tr><th><img src=\"https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png\" alt=\"IE\"></th><th><img src=\"https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png\" alt=\"Firefox\"></th><th><img src=\"https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png\" alt=\"Chrome\"></th><th><img src=\"https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png\" alt=\"Safari\"></th></tr></thead><tbody><tr><td>Edge</td><td>last 2 versions</td><td>last 2 versions</td><td>last 2 versions</td></tr></tbody></table><blockquote><p>由于 Vue3 及 Cesium1.85+ 不再支持 IE11，故而 VueCesium 也不支持 IE11 及之前版本。</p></blockquote><h3 id=\"dang-qian-zui-xin-ban-ben\"><a class=\"header-anchor\" href=\"#dang-qian-zui-xin-ban-ben\">¶</a> 当前最新版本</h3><p>VueCesium 目前还处于快速开发迭代中：</p><p><a href=\"https://www.npmjs.org/package/vue-cesium\"><img src=\"https://img.shields.io/npm/v/vue-cesium/next?style=flat-square\" alt=\"VueCesium version badge\"></a></p><h3 id=\"tong-guo-npm-huo-zhe-yarn-an-zhuang\"><a class=\"header-anchor\" href=\"#tong-guo-npm-huo-zhe-yarn-an-zhuang\">¶</a> 通过 npm 或者 yarn 安装</h3><p><strong>我们推荐使用包管理器的方式安装</strong>，它能更好地和 <a href=\"https://vitejs.dev\">vite</a>, <a href=\"https://webpack.js.org/\">webpack</a> 打包工具配合使用。</p><pre><code class=\"hljs language-shell\"><span class=\"hljs-meta\">$ </span><span class=\"language-bash\">npm install vue-cesium@next --save</span>\n</code></pre><pre><code class=\"hljs language-shell\"><span class=\"hljs-meta\">$ </span><span class=\"language-bash\">yarn add vue-cesium@next</span>\n</code></pre><p>如果你的网络环境不佳，推荐使用 <a href=\"https://github.com/cnpm/cnpm\">cnpm</a> 或使用 <a href=\"https://registry.npm.taobao.org\">阿里巴巴镜像</a></p><h3 id=\"liu-lan-qi-zhi-jie-yin-ru\"><a class=\"header-anchor\" href=\"#liu-lan-qi-zhi-jie-yin-ru\">¶</a> 浏览器直接引入</h3><p>通过浏览器 HTML 标签的方式直接引入 VueCesium, 在全局可以使用 <code>VueCesium</code></p><p>通过 <strong>CDN</strong> 的方式全量引入 <code>VueCesium</code>，根据不同的 <strong>CDN</strong> 提供商有不同的引入方式，我们在这里以 <a href=\"https://unpkg.com\">unpkg</a> 和<a href=\"https://jsdelivr.com\">jsdelivr</a> 举例， 你也可以使用其它的 <strong>CDN</strong> 供应商。</p><h3 id=\"shi-yong-unpkg\"><a class=\"header-anchor\" href=\"#shi-yong-unpkg\">¶</a> 使用 unpkg</h3><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入样式 --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue-cesium@next/dist/index.css&quot;</span> /&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入 Vue --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入组件库 --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue-cesium@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code></pre><h3 id=\"shi-yong-jsdelivr\"><a class=\"header-anchor\" href=\"#shi-yong-jsdelivr\">¶</a> 使用 jsDelivr</h3><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入样式 --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue-cesium@next/dist/index.css&quot;</span> /&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入 Vue --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入组件库 --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue-cesium@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code></pre><div class=\"tip\"><p>我们建议使用 <strong>CDN</strong> 引入 <code>VueCesium</code> 的用户在链接地址上锁定版本，以免将来 <code>VueCesium</code> 升级时受到非兼容性更新的影响。锁定版本的方法请查看 <a href=\"https://unpkg.com\">unpkg.com</a>。</p></div><h3 id=\"hello-world\"><a class=\"header-anchor\" href=\"#hello-world\">¶</a> Hello world</h3><p>通过 <strong>CDN</strong> 的方式我们可以很容易地使用 <code>VueCesium</code> 写出一个 Hello world 页面。<a href=\"https://codepen.io/zouyaoji/pen/bGBOyJM\">在线演示</a></p>", 23);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("iframe", {
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

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("如果是通过 npm / yarn 安装，并希望配合打包工具使用，请阅读下一节："), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  href: "./#/zh-CN/component/quickstart"
}, "快速上手"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。")], -1);

function render(_ctx, _cache) {
  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [_hoisted_2, _hoisted_25, _hoisted_26, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/installation.md?vue&type=template&id=56255eab

// CONCATENATED MODULE: ./website/docs/zh-CN/installation.md

const script = {}
script.render = render

/* harmony default export */ var installation = __webpack_exports__["default"] = (script);

/***/ })

}]);