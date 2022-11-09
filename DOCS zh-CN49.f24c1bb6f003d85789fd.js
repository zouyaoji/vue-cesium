(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[146],{

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_xtlouzbwsjm2tieu75n2ogelwy/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/i18n.md?vue&type=template&id=2fa78f07

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("国际化 ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VueCesium 组件内部"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "默认"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用英语，若希望使用其他语言，可以参考下面的方案。")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("全局配置 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>VueCesium 提供了全局配置国际化的设置。</p><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">VueCesium</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n<span class=\"hljs-keyword\">import</span> enUS <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium/es/locale/lang/en-us&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = <span class=\"hljs-title function_\">createApp</span>(<span class=\"hljs-title class_\">App</span>)\napp.<span class=\"hljs-title function_\">use</span>(<span class=\"hljs-title class_\">VueCesium</span>, {\n  <span class=\"hljs-attr\">locale</span>: enUS\n})\napp.<span class=\"hljs-title function_\">mount</span>(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code><span class=\"lang-mark\">ts</span></pre>", 2);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcConfigProvider ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VueCesium 还提供了一个 Vue 组件 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcConfigProvider");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 用于全局配置国际化的设置。");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-config-provider</span> <span class=\"hljs-attr\">:locale</span>=<span class=\"hljs-string\">&quot;locale&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-viewer</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-navigation</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-navigation</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-viewer</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-config-provider</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"language-javascript\">\n  <span class=\"hljs-keyword\">import</span> { defineComponent } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n  <span class=\"hljs-keyword\">import</span> { <span class=\"hljs-title class_\">VcConfigProvider</span>, <span class=\"hljs-title class_\">VcViewer</span>, <span class=\"hljs-title class_\">VcNavigation</span> } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n\n  <span class=\"hljs-keyword\">import</span> enUS <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium/es/locale/lang/en-us&#39;</span>\n\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-title function_\">defineComponent</span>({\n    <span class=\"hljs-attr\">components</span>: {\n      <span class=\"hljs-title class_\">VcConfigProvider</span>,\n      <span class=\"hljs-title class_\">VcViewer</span>,\n      <span class=\"hljs-title class_\">VcNavigation</span>\n    },\n    <span class=\"hljs-title function_\">setup</span>(<span class=\"hljs-params\"></span>) {\n      <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-attr\">locale</span>: enUS\n      }\n    }\n  })\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("支持的语言列表");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", {
  class: "language-list"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "简体中文（zh-hans）"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "英文（en-us）")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("如果你需要使用其他的语言，欢迎贡献 ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("PR");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 只需在");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("这里");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 添加一个语言配置文件即可。");

function render(_ctx, _cache) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "guo-ji-hua",
    tabindex: "-1",
    content: "国际化",
    href: "#guo-ji-hua",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#guo-ji-hua"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "quan-ju-pei-zhi",
    tabindex: "-1",
    content: "全局配置",
    href: "#quan-ju-pei-zhi",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#quan-ju-pei-zhi"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcconfigprovider",
    tabindex: "-1",
    content: "VcConfigProvider",
    href: "#vcconfigprovider",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcconfigprovider"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "/#/zh-CN/component/vc-config-provider"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9]),
    _: 1
  }), _hoisted_10]), _hoisted_11, Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/tree/dev/packages/locale/lang"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_12]),
    _: 1
  })]), _hoisted_13, Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/pulls"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/tree/dev/packages/locale/lang"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), _hoisted_18]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/i18n.md?vue&type=template&id=2fa78f07

// CONCATENATED MODULE: ./website/docs/zh-CN/i18n.md

const script = {}
script.render = render

/* harmony default export */ var i18n = __webpack_exports__["default"] = (script);

/***/ })

}]);