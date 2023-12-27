(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[101],{

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/quickstart.md?vue&type=template&id=441b972f

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};
const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium", -1);
const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-ts\"><span class=\"hljs-comment\">// main.ts</span>\n<span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">VueCesium</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">App</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;vue-cesium/dist/index.css&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = <span class=\"hljs-title function_\">createApp</span>(<span class=\"hljs-title class_\">App</span>)\napp.<span class=\"hljs-title function_\">use</span>(<span class=\"hljs-title class_\">VueCesium</span>) <span class=\"hljs-comment\">// The Cesium version at https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js is used by default</span>\n\napp.<span class=\"hljs-title function_\">mount</span>(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n\n<span class=\"hljs-comment\">// Since the Cesium version update may have broken updates, it is recommended to lock the Cesium version in the production environment.</span>\n<span class=\"hljs-comment\">// app.use(VueCesium, {</span>\n<span class=\"hljs-comment\">//   cesiumPath: &#39;https://unpkg.com/cesium@1.104.0/Build/Cesium/Cesium.js&#39;</span>\n<span class=\"hljs-comment\">// })</span>\n</code><span class=\"lang-mark\">ts</span></pre>", 1);
const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium", -1);
const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>For example, you can use Vue for Cesium in any single-file component, such as the <code>VcViewer</code> component.</p><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-config-provider</span> <span class=\"hljs-attr\">:cesium-path</span>=<span class=\"hljs-string\">&quot;vcConfig.cesiumPath&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-viewer</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-viewer</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-config-provider</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">setup</span>&gt;</span><span class=\"language-javascript\">\n  <span class=\"hljs-keyword\">import</span> { reactive } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n  <span class=\"hljs-keyword\">import</span> { <span class=\"hljs-title class_\">VcConfigProvider</span>, <span class=\"hljs-title class_\">VcViewer</span> } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n\n  <span class=\"hljs-keyword\">const</span> vcConfig = <span class=\"hljs-title function_\">reactive</span>({\n    <span class=\"hljs-attr\">cesiumPath</span>: <span class=\"hljs-string\">&#39;https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js&#39;</span>\n  })\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 2);
const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>You can do some custom configuration to Vue for Cesium:</p><pre class=\"example-code\"><code class=\"hljs language-ts\"><span class=\"hljs-keyword\">import</span> enUS <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium/es/locale/lang/en-us&#39;</span>\n\napp.<span class=\"hljs-title function_\">use</span>(<span class=\"hljs-title class_\">VueCesium</span>, {\n  <span class=\"hljs-attr\">cesiumPath</span>: <span class=\"hljs-string\">&#39;path/to/Cesium.js&#39;</span>,\n  <span class=\"hljs-attr\">accessToken</span>: <span class=\"hljs-string\">&#39;your Cesium Ion access token&#39;</span>,\n  <span class=\"hljs-attr\">locale</span>: enUS <span class=\"hljs-comment\">// change to English</span>\n})\n</code><span class=\"lang-mark\">ts</span></pre>", 2);
const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<li><code>cesiumPath</code>, <code>string</code> type, is the URL where your app accesses the main file of the <code>CesiumJS</code> library (that is, <code>Cesium.js</code>);</li><li><code>accessToken</code>, <code>string</code> type, Cesium Ion&#39;s access token, when you need to access Cesium official terrain services and other resources, you need to pass this token, you can go to [Cesium AccessToken](https://cesium.com /ion/tokens) page to register an account to apply.</li>", 2);
const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "locale", -1);
const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Language", -1);
const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "packages/locale/index.ts", -1);
const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Please make sure that cesiumPath must be the web service address, and it can be accessed normally after entering it in the browser address bar.")], -1);
const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("span", {
  style: {
    "color": "rgb(66 184 131)"
  }
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("b", null, "strongly recommended")], -1);
const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("span", {
  style: {
    "color": "rgb(66 184 131)"
  }
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("b", null, "bundled stylesheet file")], -1);
const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>Import via JavaScript</p><pre class=\"example-code\"><code class=\"hljs language-ts\"><span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;vue-cesium/dist/index.css&#39;</span>\n</code><span class=\"lang-mark\">ts</span></pre><p>Import via HTML <code>head</code> tag.</p><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-comment\">&lt;!-- index.html --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue-cesium/dist/index.css&quot;</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 4);
const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>Please add the following configuration to the <code>tsconfig.json</code> or <code>jsconfig.json</code> file:</p><pre class=\"example-code\"><code class=\"hljs language-json\"><span class=\"hljs-comment\">// tsconfig.json</span>\n<span class=\"hljs-punctuation\">{</span>\n  <span class=\"hljs-attr\">&quot;compilerOptions&quot;</span><span class=\"hljs-punctuation\">:</span> <span class=\"hljs-punctuation\">{</span>\n    <span class=\"hljs-comment\">// ...</span>\n    <span class=\"hljs-attr\">&quot;types&quot;</span><span class=\"hljs-punctuation\">:</span> <span class=\"hljs-punctuation\">[</span><span class=\"hljs-string\">&quot;vue-cesium/global&quot;</span><span class=\"hljs-punctuation\">,</span> <span class=\"hljs-string\">&quot;vue-cesium/Cesium&quot;</span><span class=\"hljs-punctuation\">]</span>\n  <span class=\"hljs-punctuation\">}</span><span class=\"hljs-punctuation\">,</span>\n  <span class=\"hljs-attr\">&quot;include&quot;</span><span class=\"hljs-punctuation\">:</span> <span class=\"hljs-punctuation\">[</span><span class=\"hljs-string\">&quot;src/**/*&quot;</span><span class=\"hljs-punctuation\">,</span> <span class=\"hljs-string\">&quot;node_modules/vue-cesium/Cesium.d.ts&quot;</span><span class=\"hljs-punctuation\">,</span> <span class=\"hljs-string\">&quot;node_modules/vue-cesium/global.d.ts&quot;</span><span class=\"hljs-punctuation\">]</span>\n<span class=\"hljs-punctuation\">}</span>\n</code><span class=\"lang-mark\">json</span></pre><p>The above configuration will be adapted to the volar plugin of vscode and will be prompted by the Cesium API.</p>", 3);
const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>Vue for Cesium may not provide exactly what you need, but retains access to Cesium-related instance objects created by Vue for Cesium.</p><p>Usually, the <code>VcViewer</code> component is the root component for creating a Cesium observer window, and the parameters of its <code>ready</code> event callback function can be decomposed into two variables, <code>Cesium</code> and <code>viewer</code>, for native Cesium API development.</p><p>You can also use ref template references to access these two variables at any time during the component&#39;s lifecycle.</p><pre class=\"example-code\"><code class=\"hljs language-ts\">&lt;template&gt;\n  <span class=\"language-xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-viewer</span> <span class=\"hljs-attr\">ref</span>=<span class=\"hljs-string\">&quot;viewerRef&quot;</span> @<span class=\"hljs-attr\">ready</span>=<span class=\"hljs-string\">&quot;onViewerReady&quot;</span>&gt;</span> <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-viewer</span>&gt;</span></span>\n&lt;/template&gt;\n\n<span class=\"language-xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">setup</span>&gt;</span><span class=\"language-javascript\">\n  <span class=\"hljs-keyword\">import</span> { ref, onMounted } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n  <span class=\"hljs-keyword\">import</span> { <span class=\"hljs-title class_\">VcViewer</span> } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n  <span class=\"hljs-keyword\">import</span> type { <span class=\"hljs-title class_\">VcReadyObject</span> } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium/es/utils/types&#39;</span>\n\n  <span class=\"hljs-keyword\">const</span> viewerRef = ref&lt;<span class=\"hljs-title class_\">HTMLElement</span>&gt;(<span class=\"hljs-literal\">null</span>)\n\n  <span class=\"hljs-title function_\">onMounted</span>(<span class=\"hljs-function\">() =&gt;</span> {\n    viewerRef.<span class=\"hljs-property\">value</span>.<span class=\"hljs-property\">creatingPromise</span>.<span class=\"hljs-title function_\">then</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">readyObj: VcReadyObject</span>) =&gt;</span> {\n      <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(readyObj.<span class=\"hljs-property\">Cesium</span>) <span class=\"hljs-comment\">// Cesium namespace object</span>\n      <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(readyObj.<span class=\"hljs-property\">viewer</span>) <span class=\"hljs-comment\">// instanceof Cesium.Viewer</span>\n    })\n  })\n\n  <span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">onViewerReady</span> = (<span class=\"hljs-params\">readyObj: VcReadyObject</span>) =&gt; {\n    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(readyObj.<span class=\"hljs-property\">Cesium</span>) <span class=\"hljs-comment\">// Cesium namespace object</span>\n    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(readyObj.<span class=\"hljs-property\">viewer</span>) <span class=\"hljs-comment\">// instanceof Cesium.Viewer</span>\n  }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</span></code><span class=\"lang-mark\">ts</span></pre><div class=\"tip\"><p>The <code>Cesium</code> variable is the namespace, through which you can access CesiumJS native API, such as <code>Cesium.Cartesian3</code>; and the <code>viewer</code> parameter is the observer instance, please refer to the official CesiumJS documentation.</p></div>", 5);
const _hoisted_29 = {
  class: "tip"
};
const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "cesiumReady", -1);
const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "head", -1);
const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>It is not recommended to hang directly on the window rudely, except for debugging, of course. Usually we need to maintain a global viewer instance so that other components (pages) can get and use it. Vue2 can be directly linked to the Vue prototype chain or Vuex.</p><p>In Vue3, with the blessing of Composition API, it can be easily obtained through <code>useVueCesium</code>, which is also our recommended practice.</p><pre class=\"example-code\"><code class=\"hljs language-ts\"><span class=\"hljs-comment\">// business-component.vue</span>\n&lt;template&gt;\n  <span class=\"language-xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">&quot;business-component&quot;</span>&gt;</span>\n    Hellow Vue for Cesium\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> @<span class=\"hljs-attr\">click</span>=<span class=\"hljs-string\">&quot;onButtonClick&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span>\n&lt;/template&gt;\n\n<span class=\"language-xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">setup</span>&gt;</span><span class=\"language-javascript\">\n  <span class=\"hljs-keyword\">import</span> { ref, onMounted } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n  <span class=\"hljs-keyword\">import</span> { useVueCesium } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n  <span class=\"hljs-keyword\">import</span> type { <span class=\"hljs-title class_\">VcViewerProvider</span>, <span class=\"hljs-title class_\">VcReadyObject</span> } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium/es/utils/types&#39;</span>\n\n  <span class=\"hljs-keyword\">const</span> <span class=\"hljs-attr\">$vc</span>: <span class=\"hljs-title class_\">VcViewerProvider</span> = <span class=\"hljs-title function_\">useVueCesium</span>()\n\n  <span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">onButtonClick</span> = (<span class=\"hljs-params\"></span>) =&gt; {\n    <span class=\"hljs-comment\">// Note 1: business-component is a sub-component of vc-viewer</span>\n    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>($vc.<span class=\"hljs-property\">viewer</span>) <span class=\"hljs-comment\">// instanceof Cesium.Viewer</span>\n    <span class=\"hljs-comment\">// Note 2: business-component is not a subcomponent of vc-viewer</span>\n    $vc.<span class=\"hljs-property\">creatingPromise</span>.<span class=\"hljs-title function_\">then</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">readyObj: VcReadyObject</span>) =&gt;</span> {\n      <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(readyObj.<span class=\"hljs-property\">viewer</span>) <span class=\"hljs-comment\">// instanceof Cesium.Viewer</span>\n    })\n  }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span></span>\n</code><span class=\"lang-mark\">ts</span></pre>", 3);
const _hoisted_35 = {
  class: "tip"
};
const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Note 2: If the business-component component is not a sub-component of vc-viewer, vc-viewer may not be initialized yet, and you need to wait for the $vc.creatingPromise state to be fulfilled before you can get the viewer.", -1);
const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Note 3: If there are multiple vc-viewer components and the business-component component is not a subcomponent of vc-viewer, please bind "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "containerId"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to a different value for each vc-viewer component, and then call useVueCesium(containerId) to get the corresponding $vc.")], -1);
const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Since Vue2 will gradually enter the maintenance period, please create your own project to use "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".")], -1);
const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "You can bootstrap your project from now on, for each components usage, please refer to individual component documentation.", -1);
function render(_ctx, _cache) {
  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");
  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");
  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    content: "Quick start",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Quick start")]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_2, Object(vue_esm_browser["createTextVNode"])(" completes the Vue componentization of CesiumJS, you can use each component provided by this library in your Vue project. This library itself does not contain CesiumJS, so it is usually necessary to configure CesiumJS itself when importing, see "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "./#/en-US/component/quickstart#configure-vuecesium"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Configuring Vue for Cesium (below this article)")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(".")]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "full-import",
    tabindex: "-1",
    content: "Full import",
    href: "#full-import",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Full import "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#full-import"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("If you don’t care about the bundle size so much, it’s more convenient to use full import. And you can use Vue's "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://vuejs.org/guide/reusability/plugins.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("plugin")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(" installation method to configure it globally.")]), _hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "on-demand-import",
    tabindex: "-1",
    content: "On-demand Import",
    href: "#on-demand-import",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("On-demand Import "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#on-demand-import"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_4, Object(vue_esm_browser["createTextVNode"])(" provides out of box "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://webpack.js.org/guides/tree-shaking/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Tree Shaking")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(" functionalities based on ES Module.")]), _hoisted_5, Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("(The complete component list is subject to "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/blob/dev/packages/vue-cesium/component.ts"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("reference")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(")")]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "configure-vue-for-cesium",
    tabindex: "-1",
    content: "Configure Vue for Cesium",
    href: "#configure-vue-for-cesium",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Configure Vue for Cesium "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#configure-vue-for-cesium"
    })]),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["createElementVNode"])("ul", null, [_hoisted_9, Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_11, Object(vue_esm_browser["createTextVNode"])(", "), _hoisted_12, Object(vue_esm_browser["createTextVNode"])(" type (see "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/blob/dev/packages/locale/index.ts"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])("), specify the language of each component, currently supports Simplified Chinese and English by default, see the next section of the document for details.")])]), _hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "import-stylesheets",
    tabindex: "-1",
    content: "Import stylesheets",
    href: "#import-stylesheets",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Import stylesheets "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#import-stylesheets"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("It is "), _hoisted_15, Object(vue_esm_browser["createTextVNode"])(" that you import the "), _hoisted_16, Object(vue_esm_browser["createTextVNode"])(", even though this could increase the final output bundle size, but it requires no packaging plugins for bundling. you can use "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("CDN")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(" to load your stylesheet which would be much more faster than hosting the file on your own server.")]), _hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "typescript-and-code-intellisense-support",
    tabindex: "-1",
    content: "TypeScript and code intellisense support",
    href: "#typescript-and-code-intellisense-support",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("TypeScript and code intellisense support "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#typescript-and-code-intellisense-support"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "how-to-continue-developing-with-native-cesiumjs-api-in-vue-for-cesium",
    tabindex: "-1",
    content: "How to continue developing with native CesiumJS API in Vue for Cesium?",
    href: "#how-to-continue-developing-with-native-cesiumjs-api-in-vue-for-cesium",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("How to continue developing with native CesiumJS API in Vue for Cesium? "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#how-to-continue-developing-with-native-cesiumjs-api-in-vue-for-cesium"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser["createElementVNode"])("div", _hoisted_29, [Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("In fact, Vue for Cesium is introduced into Cesium through dynamic tags, so Cesium variables are actually global. It's just that it needs to become an accessible global variable after the "), _hoisted_30, Object(vue_esm_browser["createTextVNode"])(" event of vc-viewer at the earliest. If you find this inconvenient, you can also consider writing it directly into the "), _hoisted_31, Object(vue_esm_browser["createTextVNode"])(" tag of the project template file index.html, see "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/issues/155#issuecomment-1042470701"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("#155")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(". Once written like this, the Cesium variable already exists when Vue for Cesium is initialized, and Cesium will not be introduced again through dynamic tags.")]), Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("Just in the JS project, if ESLint is configured, we need to tell ESLint that Cesium is a global variable, and in the TS project, we need to declare Cesium as a global variable or introduce Cesium.d.ts (the latter is recommended), the configuration of the two Please refer to "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium-starter/blob/main/.eslintrc.js#L11"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("ESLint configuration")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(" and "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium-demo/blob/main/tsconfig.json"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("TS configuration")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(".")])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "how-to-get-viewer-instance-in-other-vue-components",
    tabindex: "-1",
    content: "How to get viewer instance in other Vue components?",
    href: "#how-to-get-viewer-instance-in-other-vue-components",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("How to get viewer instance in other Vue components? "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#how-to-get-viewer-instance-in-other-vue-components"
    })]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser["createElementVNode"])("div", _hoisted_35, [Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("Note 1: It is recommended to mount the business-component component as a subcomponent of vc-viewer, as written in "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium-demo"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("vue-cesium-demo")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(".")]), _hoisted_36, _hoisted_37]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "use-template",
    tabindex: "-1",
    content: "use template",
    href: "#use-template",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("use template "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#use-template"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "prefer-vuecli",
    tabindex: "-1",
    content: "Prefer VueCLI",
    href: "#prefer-vuecli",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Prefer VueCLI "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#prefer-vuecli"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("We provide a general "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium-starter"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VueCLI4 + Vue3Js + Vuex4 + VueRouter4 project template")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(", you can download and use it directly.")]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "try-vite",
    tabindex: "-1",
    content: "Try Vite",
    href: "#try-vite",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Try Vite "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#try-vite"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("In addition, we also provide "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium-vite-starter"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Vite2 + Vue3Ts template")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(".")]), Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("There is also a "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium-demo"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Vite2 + Vue3Ts + Vuex4 + VueRouter4 comprehensive case")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(", which can also be downloaded and used.")]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "desktop-development",
    tabindex: "-1",
    content: "Desktop Development",
    href: "#desktop-development",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Desktop Development "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#desktop-development"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("If you are interested in desktop applications, you can refer to "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium-electron-vite-starter"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Vite2 + Vue3Ts + Electron13 template")]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(".")]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "about-vuetwo",
    tabindex: "-1",
    content: "About Vue2",
    href: "#about-vuetwo",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("About Vue2 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#about-vuetwo"
    })]),
    _: 1
  }), _hoisted_38, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "let-s-get-started",
    tabindex: "-1",
    content: "Let's Get Started",
    href: "#let-s-get-started",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Let's Get Started "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#let-s-get-started"
    })]),
    _: 1
  }), _hoisted_39, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/quickstart.md?vue&type=template&id=441b972f

// CONCATENATED MODULE: ./website/docs/en-US/quickstart.md

const script = {}
script.render = render

/* harmony default export */ var quickstart = __webpack_exports__["default"] = (script);

/***/ })

}]);