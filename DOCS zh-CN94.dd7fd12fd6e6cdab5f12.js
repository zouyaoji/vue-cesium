(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[193],{

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/quickstart.md?vue&type=template&id=201cfb69

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("快速开始");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "本节将介绍如何在项目中使用 VueCesium。", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("用法 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("完整引入 ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。</p><p>在引入 <code>VueCesium</code> 时，可以传入一个全局的配置对象。该对象目前支持 <code>cesiumPath</code> 、 <code>accessToken</code> 以及 <code>locale</code> 字段。<code>cesiumPath</code> 用于改变组件默认加载的 <code>Cesium</code> 库，<code>accessToken</code> 设置 <code>Cesium.Ion.defaultAccessToken</code> 的值；而 <code>locale</code> 用于国际化语言，具体使用方式见下一节文档。</p><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-comment\">// main.ts</span>\n<span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">VueCesium</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;vue-cesium/dist/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">App</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = <span class=\"hljs-title function_\">createApp</span>(<span class=\"hljs-title class_\">App</span>)\n\napp.<span class=\"hljs-title function_\">use</span>(<span class=\"hljs-title class_\">VueCesium</span>)\n<span class=\"hljs-comment\">// // or</span>\n<span class=\"hljs-comment\">// app.use(VueCesium, {</span>\n<span class=\"hljs-comment\">//   // cesiumPath 是指引用 Cesium.js 的Web服务地址，确保在浏览器地址栏输入url后能直接打开，可以是本地或者 CDN 地址如</span>\n<span class=\"hljs-comment\">//   // cesiumPath: /static/Cesium/Cesium.js</span>\n<span class=\"hljs-comment\">//   // cesiumPath: &#39;https://unpkg.com/cesium/Build/Cesium/Cesium.js&#39;</span>\n<span class=\"hljs-comment\">//   // cesiumPath: &#39;https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js&#39;</span>\n<span class=\"hljs-comment\">//   cesiumPath: &#39;https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js&#39;,</span>\n<span class=\"hljs-comment\">//   // 如果需要使用 Cesium ion 的资源时需要指定。到 https://cesium.com/ion/ 申请一个账户，获取Access Token。不指定的话可能导致 CesiumIon 的在线影像、地形加载失败。</span>\n<span class=\"hljs-comment\">//   accessToken: &#39;Your Cesium Ion defaultAccessToken&#39;</span>\n<span class=\"hljs-comment\">// })</span>\napp.<span class=\"hljs-title function_\">mount</span>(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code><span class=\"lang-mark\">ts</span></pre>", 3);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("按需导入 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "VueCesium", -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 提供了基于 ES Module 开箱即用的 ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Tree Shaking");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("功能。");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<blockquote><p>xxx.vue</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-config-provider</span> <span class=\"hljs-attr\">:cesium-path</span>=<span class=\"hljs-string\">&quot;cesiumPath&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-viewer</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-viewer</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-config-provider</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">setup</span>&gt;</span><span class=\"language-javascript\">\n  <span class=\"hljs-keyword\">import</span> { defineComponent } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n  <span class=\"hljs-keyword\">import</span> { <span class=\"hljs-title class_\">VcConfigProvider</span>, <span class=\"hljs-title class_\">VcViewer</span> } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-title function_\">defineComponent</span>({\n    <span class=\"hljs-attr\">components</span>: {\n      <span class=\"hljs-title class_\">VcConfigProvider</span>,\n      <span class=\"hljs-title class_\">VcViewer</span>\n    },\n    <span class=\"hljs-title function_\">setup</span>(<span class=\"hljs-params\"></span>) {\n      <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-attr\">cesiumPath</span>: <span class=\"hljs-string\">&#39;https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js&#39;</span>\n      }\n    }\n  })\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 2);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("（完整组件列表以 ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("reference");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 为准）");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("导入样式 ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("我们");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "强烈建议直接引入全部的样式文件", -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("，虽然这看起来会增大整个应用的体积，但这样做可以避免引入额外的打包工具插件（减少负担），你还可以通过 ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("CDN");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的方式来加载样式文件，从而使得你的应用加载更快。");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>通过 JS 的方式引入</p><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;vue-cesium/dist/index.css&#39;</span>\n</code><span class=\"lang-mark\">ts</span></pre><p>通过 HTML 的头文件引入</p><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-comment\">&lt;!-- index.html --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue-cesium@next/dist/index.css&quot;</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 4);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("TypeScript 支持 ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>请在 <code>tsconfig.json</code> 或者 <code>jsconfig.json</code> 文件中添加如下配置：</p><pre class=\"example-code\"><code class=\"hljs language-json\"><span class=\"hljs-comment\">// tsconfig.json</span>\n<span class=\"hljs-punctuation\">{</span>\n  <span class=\"hljs-attr\">&quot;compilerOptions&quot;</span><span class=\"hljs-punctuation\">:</span> <span class=\"hljs-punctuation\">{</span>\n    <span class=\"hljs-comment\">// ...</span>\n    <span class=\"hljs-attr\">&quot;types&quot;</span><span class=\"hljs-punctuation\">:</span> <span class=\"hljs-punctuation\">[</span><span class=\"hljs-string\">&quot;vue-cesium/global&quot;</span><span class=\"hljs-punctuation\">,</span> <span class=\"hljs-string\">&quot;vue-cesium/Cesium&quot;</span><span class=\"hljs-punctuation\">]</span>\n  <span class=\"hljs-punctuation\">}</span><span class=\"hljs-punctuation\">,</span>\n  <span class=\"hljs-attr\">&quot;include&quot;</span><span class=\"hljs-punctuation\">:</span> <span class=\"hljs-punctuation\">[</span><span class=\"hljs-string\">&quot;src/**/*&quot;</span><span class=\"hljs-punctuation\">,</span> <span class=\"hljs-string\">&quot;node_modules/vue-cesium/Cesium.d.ts&quot;</span><span class=\"hljs-punctuation\">]</span>\n<span class=\"hljs-punctuation\">}</span>\n</code><span class=\"lang-mark\">json</span></pre><p>以上配置将适配 volar 插件，并得到 Cesium API 提示。</p>", 3);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用模板 ");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("我们提供了通用的");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("项目模板");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("，你可以直接使用，另外我们还提供了 ");

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Vite 模板");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 和 ");

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Vite + Electron 模板");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。以及一个 Vue 3 + Typescript + Vite 的综合性案例 ");

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vue-cesium-demo");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("，同样可下载使用。");

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("开始使用 ");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "您可以从现在起启动您的项目。 对于每个组件的用法，请参考单个组件对应的文档。", -1);

function render(_ctx, _cache) {
  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    content: "快速开始",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_2]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "yong-fa",
    tabindex: "-1",
    content: "用法",
    href: "#yong-fa",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#yong-fa"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "wan-zheng-yin-ru",
    tabindex: "-1",
    content: "完整引入",
    href: "#wan-zheng-yin-ru",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#wan-zheng-yin-ru"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "an-xu-dao-ru",
    tabindex: "-1",
    content: "按需导入",
    href: "#an-xu-dao-ru",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#an-xu-dao-ru"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_10, _hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://webpack.js.org/guides/tree-shaking/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_12]),
    _: 1
  }), _hoisted_13]), _hoisted_14, Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/blob/dev/packages/vue-cesium/component.ts"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), _hoisted_18]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "dao-ru-yang-shi",
    tabindex: "-1",
    content: "导入样式",
    href: "#dao-ru-yang-shi",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dao-ru-yang-shi"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_20, _hoisted_21, _hoisted_22, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_23]),
    _: 1
  }), _hoisted_24]), _hoisted_25, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "typescript-zhi-chi",
    tabindex: "-1",
    content: "TypeScript 支持",
    href: "#typescript-zhi-chi",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#typescript-zhi-chi"
    })]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-yong-mo-ban",
    tabindex: "-1",
    content: "使用模板",
    href: "#shi-yong-mo-ban",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_33, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-yong-mo-ban"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_34, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium-starter"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_35]),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium-vite-starter"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_37]),
    _: 1
  }), _hoisted_38, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium-electron-vite-starter"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_39]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium-demo"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_41]),
    _: 1
  }), _hoisted_42]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "kai-shi-shi-yong",
    tabindex: "-1",
    content: "开始使用",
    href: "#kai-shi-shi-yong",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_43, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kai-shi-shi-yong"
    })]),
    _: 1
  }), _hoisted_44, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/quickstart.md?vue&type=template&id=201cfb69

// CONCATENATED MODULE: ./website/docs/zh-CN/quickstart.md

const script = {}
script.render = render

/* harmony default export */ var quickstart = __webpack_exports__["default"] = (script);

/***/ })

}]);