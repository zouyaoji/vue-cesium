(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[153],{

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.26.10_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/installation.md?vue&type=template&id=44158f11

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};
const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "由于 Vue3 及 CesiumJS 1.85+ 不再支持 IE11，所以 Vue for Cesium 也不再支持 IE 浏览器。", -1);
const _hoisted_3 = {
  style: {
    "text-align": "center"
  }
};
const _hoisted_4 = {
  style: {
    "text-align": "center"
  }
};
const _hoisted_5 = {
  style: {
    "text-align": "center"
  }
};
const _hoisted_6 = {
  style: {
    "text-align": "center"
  }
};
const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", {
  style: {
    "text-align": "center"
  }
}, "Edge ≥ 79"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", {
  style: {
    "text-align": "center"
  }
}, "Firefox ≥ 78"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", {
  style: {
    "text-align": "center"
  }
}, "Chrome ≥ 64"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", {
  style: {
    "text-align": "center"
  }
}, "Safari ≥ 12")])], -1);
const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("span", {
  style: {
    "color": "rgb(66 184 131)"
  }
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("b", null, "使用包管理器")], -1);
const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium", -1);
const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-shell\"><span class=\"hljs-meta prompt_\"># </span><span class=\"language-bash\">选择一个你喜欢的包管理器</span>\n<span class=\"hljs-meta prompt_\">\n# </span><span class=\"language-bash\">npm</span>\n<span class=\"hljs-meta prompt_\">$ </span><span class=\"language-bash\">npm install vue-cesium --save</span>\n<span class=\"hljs-meta prompt_\">\n# </span><span class=\"language-bash\">yarn</span>\n<span class=\"hljs-meta prompt_\">$ </span><span class=\"language-bash\">yarn add vue-cesium</span>\n<span class=\"hljs-meta prompt_\">\n# </span><span class=\"language-bash\">pnpm</span>\n<span class=\"hljs-meta prompt_\">$ </span><span class=\"language-bash\">pnpm add vue-cesium</span>\n</code><span class=\"lang-mark\">sh</span></pre><p>如果您的网络环境不好，建议使用 <code>nrm</code> 切换所用的包管理器的资源地址，或直接手动更改。</p>", 2);
const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Vue for Cesium 支持 CDN 方式引入 Vue for Cesium，这样在 window 上下文中就可以使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 了。")], -1);
const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "如果你的项目使用环境相对封闭，你可以在部署的环境中自己配置 CesiumJS 并引入。", -1);
const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入样式 --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue-cesium/dist/index.css&quot;</span> /&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入 Vue3 --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入组件库 --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue-cesium&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 1);
const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入样式 --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue-cesium/dist/index.css&quot;</span> /&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入 Vue --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 引入组件库 --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue-cesium@next&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 1);
const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium", -1);
const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium", -1);
const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "CDN", -1);
const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium", -1);
const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("iframe", {
  height: "500",
  style: {
    "width": "100%"
  },
  scrolling: "no",
  title: "Vue for Cesium Demo",
  src: "https://codepen.io/zouyaoji/embed/bGBOyJM?height=265&theme-id=light&default-tab=html,result",
  frameborder: "no",
  loading: "lazy",
  allowtransparency: "true",
  allowfullscreen: "true"
}, "\n  See the Pen <a href='https://codepen.io/zouyaoji/pen/bGBOyJM'>Vue for Cesium Demo</a> by zouyaoji\n  (<a href='https://codepen.io/zouyaoji'>@zouyaoji</a>) on <a href='https://codepen.io'>CodePen</a>.\n", -1);
function render(_ctx, _cache) {
  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");
  const _component_app_img = Object(vue_esm_browser["resolveComponent"])("app-img");
  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");
  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    content: "环境支持",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("环境支持")]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("Vue for Cesium 可以在支持 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("ES2018")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(" 和 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://caniuse.com/webgl"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("WebGL")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(" 的浏览器上运行。 如果您确实需要支持旧版本的浏览器，请自行添加 Babel 和相应的 Polyfill.")]), _hoisted_2, Object(vue_esm_browser["createElementVNode"])("table", null, [Object(vue_esm_browser["createElementVNode"])("thead", null, [Object(vue_esm_browser["createElementVNode"])("tr", null, [Object(vue_esm_browser["createElementVNode"])("th", _hoisted_3, [Object(vue_esm_browser["createElementVNode"])("div", null, [Object(vue_esm_browser["createVNode"])(_component_app_img, {
    src: "https://unpkg.com/@browser-logos/edge/edge_32x32.png",
    alt: "edge",
    title: "null"
  })])]), Object(vue_esm_browser["createElementVNode"])("th", _hoisted_4, [Object(vue_esm_browser["createElementVNode"])("div", null, [Object(vue_esm_browser["createVNode"])(_component_app_img, {
    src: "https://unpkg.com/@browser-logos/firefox/firefox_32x32.png",
    alt: "Firefox",
    title: "null"
  })])]), Object(vue_esm_browser["createElementVNode"])("th", _hoisted_5, [Object(vue_esm_browser["createElementVNode"])("div", null, [Object(vue_esm_browser["createVNode"])(_component_app_img, {
    src: "https://unpkg.com/@browser-logos/chrome/chrome_32x32.png",
    alt: "Chrome",
    title: "null"
  })])]), Object(vue_esm_browser["createElementVNode"])("th", _hoisted_6, [Object(vue_esm_browser["createElementVNode"])("div", null, [Object(vue_esm_browser["createVNode"])(_component_app_img, {
    src: "https://unpkg.com/@browser-logos/safari/safari_32x32.png",
    alt: "Safari",
    title: "null"
  })])])])]), _hoisted_7]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    content: "安装",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("安装")]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-yong-bao-guan-li-qi-an-zhuang",
    tabindex: "-1",
    content: "使用包管理器安装",
    href: "#shi-yong-bao-guan-li-qi-an-zhuang",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("使用包管理器安装 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-yong-bao-guan-li-qi-an-zhuang"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("我们建议您"), _hoisted_8, Object(vue_esm_browser["createTextVNode"])("（npm，"), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://classic.yarnpkg.com/lang/en/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("yarn")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])("，"), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://pnpm.io/zh/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("pnpm")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])("）安装 "), _hoisted_9, Object(vue_esm_browser["createTextVNode"])("，然后您就可以使用打包工具，例如 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://vitejs.dev"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("vite")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(", "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://webpack.js.org/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("webpack")]),
    _: 1
  })]), _hoisted_10, Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("如果是通过包管理器安装，并希望配合打包工具使用，请阅读下一节："), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "./#/zh-CN/component/quickstart"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("快速上手")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])("。")]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "cdn-yin-ru",
    tabindex: "-1",
    content: "CDN 引入",
    href: "#cdn-yin-ru",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("CDN 引入 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cdn-yin-ru"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("不同的 CDN 提供商有不同的引入方式，我们在这里以 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://unpkg.com"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("unpkg")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(" 和 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://jsdelivr.com"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("jsdelivr")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(" 举例，你也可以使用其它的 CDN 供应商。")]), _hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-yong-unpkg",
    tabindex: "-1",
    content: "使用 unpkg",
    href: "#shi-yong-unpkg",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("使用 unpkg "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-yong-unpkg"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-yong-jsdelivr",
    tabindex: "-1",
    content: "使用 jsDelivr",
    href: "#shi-yong-jsdelivr",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("使用 jsDelivr "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-yong-jsdelivr"
    })]),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("如果你使用 CDN 引入 "), _hoisted_16, Object(vue_esm_browser["createTextVNode"])(" ，我们建议在链接地址上锁定版本，以免将来 "), _hoisted_17, Object(vue_esm_browser["createTextVNode"])(" 升级时受到非兼容性更新的影响。锁定版本的方法请查看 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://unpkg.com"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("unpkg.com")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(" 官方资料。")]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    content: "Hello world",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Hello world")]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("通过 "), _hoisted_18, Object(vue_esm_browser["createTextVNode"])(" 的方式我们可以很容易地使用 "), _hoisted_19, Object(vue_esm_browser["createTextVNode"])(" 写出一个 Hello world 页面。"), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://codepen.io/zouyaoji/pen/bGBOyJM"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("在线演示")]),
    _: 1
  })]), _hoisted_20, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/installation.md?vue&type=template&id=44158f11

// CONCATENATED MODULE: ./website/docs/zh-CN/installation.md

const script = {}
script.render = render

/* harmony default export */ var installation = __webpack_exports__["default"] = (script);

/***/ })

}]);