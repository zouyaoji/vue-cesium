(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.23/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_b706f451d6404ce468e2858b35d8eb7f/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_b706f451d6404ce468e2858b35d8eb7f/node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/quickstart.md?vue&type=template&id=7b7ddc23

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Quick start");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "This section describes how to use VueCesium in your project.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Usage ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Full import ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>If you don’t care about the bundle size so much, it’s more convenient to use full import.</p><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-comment\">// main.ts</span>\n<span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">VueCesium</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;vue-cesium/dist/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">App</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = <span class=\"hljs-title function_\">createApp</span>(<span class=\"hljs-title class_\">App</span>)\n\napp.<span class=\"hljs-title function_\">use</span>(<span class=\"hljs-title class_\">VueCesium</span>)\napp.<span class=\"hljs-title function_\">mount</span>(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code><span class=\"lang-mark\">ts</span></pre>", 2);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("On-demand Import ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "VueCesium", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" provides out of box ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Tree Shaking");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" functionalities based on ES Module.");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<blockquote><p>App.vue</p></blockquote><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-viewer</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-viewer</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"language-javascript\">\n  <span class=\"hljs-keyword\">import</span> { defineComponent } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n  <span class=\"hljs-keyword\">import</span> { <span class=\"hljs-title class_\">VcViewer</span> } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-title function_\">defineComponent</span>({\n    <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;app&#39;</span>\n    <span class=\"hljs-attr\">components</span>: {\n      <span class=\"hljs-title class_\">VcViewer</span>\n    }\n  })\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 2);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Import stylesheets ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("It is ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "strongly recommended", -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" that you import the ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "bundled stylesheet file", -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", even though this could increase the final output bundle size, but it requires no packaging plugins for bundling, you can use ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("CDN");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to load your stylesheet which would be much more faster than hosting the file on your own server.");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>Import via JavaScript</p><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;vue-cesium/dist/index.css&#39;</span>\n</code><span class=\"lang-mark\">ts</span></pre><p>Import via HTML <code>head</code> tag.</p><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-comment\">&lt;!-- index.html --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//cdn.jsdelivr.net/npm/vue-cesium@next/dist/index.css&quot;</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 4);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Starter Template ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("We provide a general ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Project Template");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", also a ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Vite Template");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(". For Electron users we have a ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Electron Template");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Global configuration ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>When registering VueCesium, you can pass a global config object with <code>cesiumPath</code>, <code>accessToken</code> and <code>locale</code>. <code>cesiumPath</code> is used to specify the <code>CesiumJS</code> library loaded by VueCesium, support loading the official version of Cesium or a third-party version developed based on Cesium, <strong>Note:</strong> Please use the files in the Build directory. And <code>accessToken</code> is used to set <code>Cesium.Ion.defaultAccessToken</code>. <code>locale</code> is used for internationalized languages. For details, see the next section of the document.</p><p>Full import:</p><pre class=\"example-code\"><code class=\"hljs language-ts\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">VueCesium</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;vue-cesium/dist/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">App</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = <span class=\"hljs-title function_\">createApp</span>(<span class=\"hljs-title class_\">App</span>)\napp.<span class=\"hljs-title function_\">use</span>(<span class=\"hljs-title class_\">VueCesium</span>, {\n  <span class=\"hljs-comment\">// cesiumPath is the web service address that guides the use of Cesium.js, which can be a local or CDN address such as</span>\n  <span class=\"hljs-comment\">// cesiumPath: /static/Cesium/Cesium.js</span>\n  <span class=\"hljs-comment\">// cesiumPath: &#39;https://unpkg.com/cesium/Build/Cesium/Cesium.js&#39;</span>\n  <span class=\"hljs-comment\">// cesiumPath: &#39;https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js&#39;</span>\n  <span class=\"hljs-attr\">cesiumPath</span>: <span class=\"hljs-string\">&#39;https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js&#39;</span>,\n  <span class=\"hljs-comment\">// If you need to use Cesium ion resources, you need to specify it. Go to https://cesium.com/ion/ to apply for an account and get Access Token. If it is not specified, it may cause the loading of CesiumIon&#39;s online images and terrain to fail.</span>\n  <span class=\"hljs-attr\">accessToken</span>: <span class=\"hljs-string\">&#39;Your Cesium Ion defaultAccessToken&#39;</span>\n})\napp.<span class=\"hljs-title function_\">mount</span>(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code><span class=\"lang-mark\">ts</span></pre><p>On-demand:</p><pre class=\"example-code\"><code class=\"hljs language-ts\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { <span class=\"hljs-title class_\">VcViewer</span> } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-viewer&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">App</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = <span class=\"hljs-title function_\">createApp</span>(<span class=\"hljs-title class_\">App</span>)\napp.<span class=\"hljs-property\">config</span>.<span class=\"hljs-property\">globalProperties</span>.<span class=\"hljs-property\">$VueCesium</span> = {\n  <span class=\"hljs-attr\">cesiumPath</span>: <span class=\"hljs-string\">&#39;https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js&#39;</span>\n}\napp.<span class=\"hljs-title function_\">use</span>(<span class=\"hljs-title class_\">VcViewer</span>)\napp.<span class=\"hljs-title function_\">mount</span>(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code><span class=\"lang-mark\">ts</span></pre>", 5);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("(The complete component list is subject to ");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("reference");

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(")");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Volar support ");

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>If you use volar, please add the global component type definition to <code>compilerOptions.types</code> in <code>tsconfig.json</code> or <code>jsconfig.json</code>).</p><pre class=\"example-code\"><code class=\"hljs language-json\"><span class=\"hljs-comment\">// tsconfig.json</span>\n<span class=\"hljs-punctuation\">{</span>\n  <span class=\"hljs-attr\">&quot;compilerOptions&quot;</span><span class=\"hljs-punctuation\">:</span> <span class=\"hljs-punctuation\">{</span>\n    <span class=\"hljs-comment\">// ...</span>\n    <span class=\"hljs-attr\">&quot;types&quot;</span><span class=\"hljs-punctuation\">:</span> <span class=\"hljs-punctuation\">[</span><span class=\"hljs-string\">&quot;vue-cesium/global&quot;</span><span class=\"hljs-punctuation\">]</span>\n  <span class=\"hljs-punctuation\">}</span>\n<span class=\"hljs-punctuation\">}</span>\n</code><span class=\"lang-mark\">json</span></pre>", 2);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Cesium.d.ts support ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>If you want to get Cesium api syntax hints, please add the Cesium type definition to <code>compilerOptions.types</code> in <code>tsconfig.json</code> or <code>jsconfig.json</code>).</p><pre class=\"example-code\"><code class=\"hljs language-json\"><span class=\"hljs-comment\">// tsconfig.json</span>\n<span class=\"hljs-punctuation\">{</span>\n  <span class=\"hljs-attr\">&quot;compilerOptions&quot;</span><span class=\"hljs-punctuation\">:</span> <span class=\"hljs-punctuation\">{</span>\n    <span class=\"hljs-comment\">// ...</span>\n    <span class=\"hljs-attr\">&quot;types&quot;</span><span class=\"hljs-punctuation\">:</span> <span class=\"hljs-punctuation\">[</span><span class=\"hljs-string\">&quot;vue-cesium/Cesium&quot;</span><span class=\"hljs-punctuation\">]</span>\n  <span class=\"hljs-punctuation\">}</span>\n<span class=\"hljs-punctuation\">}</span>\n</code><span class=\"lang-mark\">json</span></pre>", 2);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Let's Get Started ");

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "You can bootstrap your project from now on, for each components usage, please refer to individual component documentation.", -1);

function render(_ctx, _cache) {
  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    content: "Quick start",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_2]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "usage",
    tabindex: "-1",
    content: "Usage",
    href: "#usage",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#usage"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "full-import",
    tabindex: "-1",
    content: "Full import",
    href: "#full-import",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#full-import"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "on-demand-import",
    tabindex: "-1",
    content: "On-demand Import",
    href: "#on-demand-import",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#on-demand-import"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_9, _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://webpack.js.org/guides/tree-shaking/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_11]),
    _: 1
  }), _hoisted_12]), _hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "import-stylesheets",
    tabindex: "-1",
    content: "Import stylesheets",
    href: "#import-stylesheets",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#import-stylesheets"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_16, _hoisted_17, _hoisted_18, _hoisted_19, _hoisted_20, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), _hoisted_22]), _hoisted_23, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "starter-template",
    tabindex: "-1",
    content: "Starter Template",
    href: "#starter-template",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#starter-template"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_28, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium-starter"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_29]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium-vite-starter"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_31]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium-electron-vite-starter"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_33]),
    _: 1
  }), _hoisted_34]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "global-configuration",
    tabindex: "-1",
    content: "Global configuration",
    href: "#global-configuration",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_35, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#global-configuration"
    })]),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_41, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/blob/dev/packages/vue-cesium/component.ts"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_42]),
    _: 1
  }), _hoisted_43]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "volar-support",
    tabindex: "-1",
    content: "Volar support",
    href: "#volar-support",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_44, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#volar-support"
    })]),
    _: 1
  }), _hoisted_45, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "cesium-d-ts-support",
    tabindex: "-1",
    content: "Cesium.d.ts support",
    href: "#cesium-d-ts-support",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_47, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cesium-d-ts-support"
    })]),
    _: 1
  }), _hoisted_48, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "let-s-get-started",
    tabindex: "-1",
    content: "Let's Get Started",
    href: "#let-s-get-started",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_50, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#let-s-get-started"
    })]),
    _: 1
  }), _hoisted_51, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/quickstart.md?vue&type=template&id=7b7ddc23

// CONCATENATED MODULE: ./website/docs/en-US/quickstart.md

const script = {}
script.render = render

/* harmony default export */ var quickstart = __webpack_exports__["default"] = (script);

/***/ })

}]);