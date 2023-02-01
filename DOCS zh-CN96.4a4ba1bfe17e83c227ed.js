(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[198],{

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.33/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_xtlouzbwsjm2tieu75n2ogelwy/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/quickstart.md?vue&type=template&id=3cd84e9d

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("快速开始");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 完成了 CesiumJS 的 Vue 组件化，你可以在你的 Vue 项目中使用这个库提供的各个组件。本库本身不含 CesiumJS，所以在引入时通常需要配置 CesiumJS 本身，见 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("配置 Vue for Cesium（本篇下文）");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。");

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("接下来将介绍如何在使用 Vue3 项目中引入 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("全量导入 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("如果你对打包后的文件大小不是很在乎，那么你可以使用 Vue 的 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("插件");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 安装方式配置到全局。");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-ts\"><span class=\"hljs-comment\">// main.ts</span>\n<span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">VueCesium</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">App</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;vue-cesium/dist/index.css&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = <span class=\"hljs-title function_\">createApp</span>(<span class=\"hljs-title class_\">App</span>)\napp.<span class=\"hljs-title function_\">use</span>(<span class=\"hljs-title class_\">VueCesium</span>)\n\napp.<span class=\"hljs-title function_\">mount</span>(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code><span class=\"lang-mark\">ts</span></pre><div class=\"tip\"><p>将默认使用 https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js</p></div>", 2);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("按需导入 ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium", -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 提供了基于 ES Module 开箱即用的 ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Tree Shaking");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 功能。");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>例如，你可以在任意单文件组件中使用 Vue for Cesium，这里以 <code>VcViewer</code> 组件为例。</p><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-config-provider</span> <span class=\"hljs-attr\">:cesium-path</span>=<span class=\"hljs-string\">&quot;vcConfig.cesiumPath&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-viewer</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-viewer</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-config-provider</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">setup</span>&gt;</span><span class=\"language-javascript\">\n  <span class=\"hljs-keyword\">import</span> { reactive } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n  <span class=\"hljs-keyword\">import</span> { <span class=\"hljs-title class_\">VcConfigProvider</span>, <span class=\"hljs-title class_\">VcViewer</span> } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n\n  <span class=\"hljs-keyword\">const</span> vcConfig = <span class=\"hljs-title function_\">reactive</span>({\n    <span class=\"hljs-attr\">cesiumPath</span>: <span class=\"hljs-string\">&#39;https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js&#39;</span>\n  })\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre><p>按需导入需要使用配置提供器 <code>VcConfigProvider</code> 组件，向下传递配置参数。</p>", 3);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("（完整组件列表以 ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("reference");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 为准）");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("配置 Vue for Cesium ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>你可以对 Vue for Cesium 做一些自定义的配置：</p><pre class=\"example-code\"><code class=\"hljs language-ts\"><span class=\"hljs-keyword\">import</span> enUS <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium/es/locale/lang/en-us&#39;</span>\n\napp.<span class=\"hljs-title function_\">use</span>(<span class=\"hljs-title class_\">VueCesium</span>, {\n  <span class=\"hljs-attr\">cesiumPath</span>: <span class=\"hljs-string\">&#39;path/to/Cesium.js&#39;</span>,\n  <span class=\"hljs-attr\">accessToken</span>: <span class=\"hljs-string\">&#39;你的 Cesium Ion 访问令牌&#39;</span>,\n  <span class=\"hljs-attr\">locale</span>: enUS <span class=\"hljs-comment\">// 改成英文</span>\n})\n</code><span class=\"lang-mark\">ts</span></pre><p>其中：</p>", 3);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "cesiumPath"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("，"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "string"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 类型，是打包后你的页面访问 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "CesiumJS"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 库的主文件（也就是 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.js"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("）的 URL；")], -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "accessToken", -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("，");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "string", -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 类型，Cesium 的访问令牌，当你需要访问 Cesium 官方地形服务等资源时，你需要传递此令牌，你可以到 ");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Cesium AccessToken");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 页面自行注册账号申请。");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "locale", -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("，");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Language", -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 类型（见 ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "packages/locale/index.ts", -1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("），指定各个组件的语言，当前默认支持简体中文、英文，具体内容见下一节文档。");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "请确保 cesiumPath 必须是 Web 服务地址，且在浏览器地址栏输入后能正常访问。")], -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("导入样式 ");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("我们强烈建议"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("span", {
  style: {
    "color": "rgb(66 184 131)"
  }
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("b", null, "直接引入全部的样式文件")]), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("，虽然这看起来会增大整个应用的体积，但这样做可以避免引入额外的打包工具插件（减少负担）。")], -1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "样式的导入可确保各个有自己 UI 的功能组件显示正常。", -1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("你还可以通过 ");

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("CDN");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的方式来加载样式文件，从而使得你的应用加载更快。下面列举两个引入方式。");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li>通过 ESModule 的方式引入</li></ul><pre class=\"example-code\"><code class=\"hljs language-typescript\"><span class=\"hljs-comment\">// main.ts</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;vue-cesium/dist/index.css&#39;</span>\n</code><span class=\"lang-mark\">ts</span></pre><ul><li>通过 CDN 引入</li></ul><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-comment\">&lt;!-- index.html --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">link</span> <span class=\"hljs-attr\">rel</span>=<span class=\"hljs-string\">&quot;stylesheet&quot;</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue-cesium@next/dist/index.css&quot;</span> /&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 4);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("TypeScript 及代码智能提示支持 ");

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>请在 <code>tsconfig.json</code> 或者 <code>jsconfig.json</code> 文件中 <code>compilerOptions.types</code> 和 <code>includes</code> 中添加如下配置：</p><pre class=\"example-code\"><code class=\"hljs language-json\"><span class=\"hljs-comment\">// tsconfig.json</span>\n<span class=\"hljs-punctuation\">{</span>\n  <span class=\"hljs-attr\">&quot;compilerOptions&quot;</span><span class=\"hljs-punctuation\">:</span> <span class=\"hljs-punctuation\">{</span>\n    <span class=\"hljs-comment\">// ...</span>\n    <span class=\"hljs-attr\">&quot;types&quot;</span><span class=\"hljs-punctuation\">:</span> <span class=\"hljs-punctuation\">[</span>\n      <span class=\"hljs-comment\">// ...</span>\n      <span class=\"hljs-string\">&quot;vue-cesium/global&quot;</span><span class=\"hljs-punctuation\">,</span>\n      <span class=\"hljs-string\">&quot;vue-cesium/Cesium&quot;</span>\n    <span class=\"hljs-punctuation\">]</span>\n  <span class=\"hljs-punctuation\">}</span><span class=\"hljs-punctuation\">,</span>\n  <span class=\"hljs-attr\">&quot;include&quot;</span><span class=\"hljs-punctuation\">:</span> <span class=\"hljs-punctuation\">[</span><span class=\"hljs-string\">&quot;src/**/*&quot;</span><span class=\"hljs-punctuation\">,</span> <span class=\"hljs-string\">&quot;node_modules/vue-cesium/Cesium.d.ts&quot;</span><span class=\"hljs-punctuation\">,</span> <span class=\"hljs-string\">&quot;node_modules/vue-cesium/global.d.ts&quot;</span><span class=\"hljs-punctuation\">]</span>\n<span class=\"hljs-punctuation\">}</span>\n</code><span class=\"lang-mark\">json</span></pre><p>以上配置将适配 vscode 的 Volar 插件，并得到 CesiumJS API 提示。</p>", 3);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("如何在 Vue for Cesium 中继续使用原生 CesiumJS API 开发？ ");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>Vue for Cesium 可能并不完全能提供你所需的功能，但是保留了访问由 Vue for Cesium 创建的 Cesium 有关实例对象的访问权限。</p><p>通常，<code>VcViewer</code> 组件是创建 Cesium 观察者窗口的根组件，它的 <code>ready</code> 事件回调函数的参数可以解构成 <code>Cesium</code> 和 <code>viewer</code> 两个变量，用于原生 Cesium API 开发。</p><p>你也可以使用 ref 模板引用在组件生命周期内随时获取这两个变量。</p><pre class=\"example-code\"><code class=\"hljs language-ts\">&lt;template&gt;\n  <span class=\"language-xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-viewer</span> <span class=\"hljs-attr\">ref</span>=<span class=\"hljs-string\">&quot;viewerRef&quot;</span> @<span class=\"hljs-attr\">ready</span>=<span class=\"hljs-string\">&quot;onViewerReady&quot;</span>&gt;</span> <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-viewer</span>&gt;</span></span>\n&lt;/template&gt;\n\n<span class=\"language-xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">setup</span>&gt;</span><span class=\"language-javascript\">\n  <span class=\"hljs-keyword\">import</span> { ref, onMounted } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n  <span class=\"hljs-keyword\">import</span> { <span class=\"hljs-title class_\">VcViewer</span> } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n  <span class=\"hljs-keyword\">import</span> type { <span class=\"hljs-title class_\">VcReadyObject</span> } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium/es/utils/types&#39;</span>\n\n  <span class=\"hljs-keyword\">const</span> viewerRef = ref&lt;<span class=\"hljs-title class_\">HTMLElement</span>&gt;(<span class=\"hljs-literal\">null</span>)\n\n  <span class=\"hljs-title function_\">onMounted</span>(<span class=\"hljs-function\">() =&gt;</span> {\n    viewerRef.<span class=\"hljs-property\">value</span>.<span class=\"hljs-property\">creatingPromise</span>.<span class=\"hljs-title function_\">then</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">readyObj: VcReadyObject</span>) =&gt;</span> {\n      <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(readyObj.<span class=\"hljs-property\">Cesium</span>) <span class=\"hljs-comment\">// Cesium namespace object</span>\n      <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(readyObj.<span class=\"hljs-property\">viewer</span>) <span class=\"hljs-comment\">// instanceof Cesium.Viewer</span>\n    })\n  })\n\n  <span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">onViewerReady</span> = (<span class=\"hljs-params\">readyObj: VcReadyObject</span>) =&gt; {\n    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(readyObj.<span class=\"hljs-property\">Cesium</span>) <span class=\"hljs-comment\">// Cesium namespace object</span>\n    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(readyObj.<span class=\"hljs-property\">viewer</span>) <span class=\"hljs-comment\">// instanceof Cesium.Viewer</span>\n  }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</span></code><span class=\"lang-mark\">ts</span></pre><div class=\"tip\"><p><code>Cesium</code> 变量即命名空间，你可以通过它访问 CesiumJS 原生的 API，例如 <code>Cesium.Cartesian3</code>；而 <code>viewer</code> 参数则是观察者实例，参考 CesiumJS 官方文档即可。</p></div>", 5);

const _hoisted_63 = {
  class: "tip"
};

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("实际上 Vue for Cesium 是通过动态标签引入 Cesium 的，所以 Cesium 变量其实是全局的。只是它最快需要在 vc-viewer 的 ");

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "cesiumReady", -1);

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 事件之后才成为可访问的全局变量。如果您觉得这样不方便，也可以考虑将其直接写到项目模板文件 index.html 的 ");

const _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "head", -1);

const _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签中，详见");

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("#155");

const _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。一旦这样写，在 Vue for Cesium 在初始化时 Cesium 变量就已经存在了，就不会再去通过动态标签再次引入 Cesium 了。");

const _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("只是在 JS 项目中，如果配置了 ESLint ，我们需要告诉 ESLint Cesium 已经是全局变量了，而 TS 项目中则需要声明 Cesium 为全局变量或者引入 Cesium.d.ts (推荐后者) ，两者的配置请分别参考");

const _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("ESLint 配置");

const _hoisted_73 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 和 ");

const _hoisted_74 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("TS 配置");

const _hoisted_75 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。");

const _hoisted_76 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("如何在其他 Vue 组件中获取 viewer 实例？ ");

const _hoisted_77 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>不推荐粗暴的直接挂在 window 上，当然调试除外。通常我们需要维护一个全局的 viewer 实例，以方便其他组件（页面）获取到并使用。Vue2 中可以直接挂到 Vue 原型链上 或者 Vuex 中。</p><p>Vue3 中在组合式 API 的加持下可以通过 <code>useVueCesium</code> 很方便的获取到，这也是我们比较推荐的做法。</p><pre class=\"example-code\"><code class=\"hljs language-ts\"><span class=\"hljs-comment\">// business-component.vue</span>\n&lt;template&gt;\n  <span class=\"language-xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">&quot;business-component&quot;</span>&gt;</span>\n    Hellow VueCesium\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">button</span> @<span class=\"hljs-attr\">click</span>=<span class=\"hljs-string\">&quot;onButtonClick&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">button</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span>\n&lt;/template&gt;\n\n<span class=\"language-xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">setup</span>&gt;</span><span class=\"language-javascript\">\n  <span class=\"hljs-keyword\">import</span> { ref, onMounted } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n  <span class=\"hljs-keyword\">import</span> { useVueCesium } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n  <span class=\"hljs-keyword\">import</span> type { <span class=\"hljs-title class_\">VcViewerProvider</span>, <span class=\"hljs-title class_\">VcReadyObject</span> } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium/es/utils/types&#39;</span>\n\n  <span class=\"hljs-keyword\">const</span> <span class=\"hljs-attr\">$vc</span>: <span class=\"hljs-title class_\">VcViewerProvider</span> = <span class=\"hljs-title function_\">useVueCesium</span>()\n\n  <span class=\"hljs-keyword\">const</span> <span class=\"hljs-title function_\">onButtonClick</span> = (<span class=\"hljs-params\"></span>) =&gt; {\n    <span class=\"hljs-comment\">// 注1：business-component 为 vc-viewer 的子组件</span>\n    <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>($vc.<span class=\"hljs-property\">viewer</span>) <span class=\"hljs-comment\">// instanceof Cesium.Viewer</span>\n    <span class=\"hljs-comment\">// 注2： business-component 不是 vc-viewer 的子组件</span>\n    $vc.<span class=\"hljs-property\">creatingPromise</span>.<span class=\"hljs-title function_\">then</span>(<span class=\"hljs-function\">(<span class=\"hljs-params\">readyObj: VcReadyObject</span>) =&gt;</span> {\n      <span class=\"hljs-variable language_\">console</span>.<span class=\"hljs-title function_\">log</span>(readyObj.<span class=\"hljs-property\">viewer</span>) <span class=\"hljs-comment\">// instanceof Cesium.Viewer</span>\n    })\n  }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span></span>\n</code><span class=\"lang-mark\">ts</span></pre>", 3);

const _hoisted_80 = {
  class: "tip"
};

const _hoisted_81 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("注 1：推荐将 business-component 组件作为 vc-viewer 的子组件挂载，正如 ");

const _hoisted_82 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vue-cesium-demo");

const _hoisted_83 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 中的写法。");

const _hoisted_84 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "注 2：如果 business-component 组件不是 vc-viewer 的子组件，vc-viewer 可能就还没初始化完成，需要等 $vc.creatingPromise 状态为 fulfilled 后才能获取到 viewer 。", -1);

const _hoisted_85 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("注 3：如果有多个 vc-viewer 组件，且 business-component 组件不是 vc-viewer 的子组件，请给每个 vc-viewer 组件绑定 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "containerId"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 为不同的值，然后通过传参调用 useVueCesium(containerId) 以便获取对应的 $vc 。")], -1);

const _hoisted_86 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用模板 ");

const _hoisted_87 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("更喜欢 VueCLI ");

const _hoisted_88 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("我们提供了通用的 ");

const _hoisted_89 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VueCLI4 + Vue3Js + Vuex4 + VueRouter4 项目模板");

const _hoisted_90 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("，你可以直接下载使用。");

const _hoisted_91 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("试试 Vite ");

const _hoisted_92 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("另外我们还提供了 ");

const _hoisted_93 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Vite2 + Vue3Ts 模板");

const _hoisted_94 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。");

const _hoisted_95 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("这里还有一个 ");

const _hoisted_96 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Vite2 + Vue3Ts + Vuex4 + VueRouter4 综合案例");

const _hoisted_97 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("，同样可下载使用。");

const _hoisted_98 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("桌面开发 ");

const _hoisted_99 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("如果你对桌面应用感兴趣，你可以参考 ");

const _hoisted_100 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Vite2 + Vue3Ts + Electron13 模板");

const _hoisted_101 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。");

const _hoisted_102 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("关于 Vue2 ");

const _hoisted_103 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("由于 Vue2 将逐渐进入维护期，所以劳请自行创建项目使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue for Cesium"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".")], -1);

const _hoisted_104 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("开始使用 ");

const _hoisted_105 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "您可以从现在起启动您的项目。", -1);

const _hoisted_106 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "对于每个组件的用法，请参考单个组件对应的文档。", -1);

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
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_3, _hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "./#/zh-CN/component/quickstart#pei-zhi-vuecesium"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5]),
    _: 1
  }), _hoisted_6]), _hoisted_7, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "quan-liang-dao-ru",
    tabindex: "-1",
    content: "全量导入",
    href: "#quan-liang-dao-ru",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#quan-liang-dao-ru"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://staging-cn.vuejs.org/guide/reusability/plugins.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), _hoisted_11]), _hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "an-xu-dao-ru",
    tabindex: "-1",
    content: "按需导入",
    href: "#an-xu-dao-ru",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#an-xu-dao-ru"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_15, _hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://webpack.js.org/guides/tree-shaking/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), _hoisted_18]), _hoisted_19, Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_22, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/blob/dev/packages/vue-cesium/component.ts"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_23]),
    _: 1
  }), _hoisted_24]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "pei-zhi-vue-for-cesium",
    tabindex: "-1",
    content: "配置 Vue for Cesium",
    href: "#pei-zhi-vue-for-cesium",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_25, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#pei-zhi-vue-for-cesium"
    })]),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser["createElementVNode"])("ul", null, [_hoisted_29, Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_30, _hoisted_31, _hoisted_32, _hoisted_33, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/ion/tokens"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_34]),
    _: 1
  }), _hoisted_35]), Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_36, _hoisted_37, _hoisted_38, _hoisted_39, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/blob/dev/packages/locale/index.ts"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_40]),
    _: 1
  }), _hoisted_41])]), _hoisted_42, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "dao-ru-yang-shi",
    tabindex: "-1",
    content: "导入样式",
    href: "#dao-ru-yang-shi",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_43, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#dao-ru-yang-shi"
    })]),
    _: 1
  }), _hoisted_44, _hoisted_45, Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_46, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_47]),
    _: 1
  }), _hoisted_48]), _hoisted_49, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "typescript-ji-dai-ma-zhi-neng-ti-shi-zhi-chi",
    tabindex: "-1",
    content: "TypeScript 及代码智能提示支持",
    href: "#typescript-ji-dai-ma-zhi-neng-ti-shi-zhi-chi",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_53, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#typescript-ji-dai-ma-zhi-neng-ti-shi-zhi-chi"
    })]),
    _: 1
  }), _hoisted_54, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ru-he-zai-vue-for-cesium-zhong-ji-xu-shi-yong-yuan-sheng-cesiumjs-api-kai-fa",
    tabindex: "-1",
    content: "如何在 Vue for Cesium 中继续使用原生 CesiumJS API 开发？",
    href: "#ru-he-zai-vue-for-cesium-zhong-ji-xu-shi-yong-yuan-sheng-cesiumjs-api-kai-fa",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_57, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ru-he-zai-vue-for-cesium-zhong-ji-xu-shi-yong-yuan-sheng-cesiumjs-api-kai-fa"
    })]),
    _: 1
  }), _hoisted_58, Object(vue_esm_browser["createElementVNode"])("div", _hoisted_63, [Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_64, _hoisted_65, _hoisted_66, _hoisted_67, _hoisted_68, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/issues/155#issuecomment-1042470701"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_69]),
    _: 1
  }), _hoisted_70]), Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_71, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium-starter/blob/main/.eslintrc.js#L11"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_72]),
    _: 1
  }), _hoisted_73, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium-demo/blob/main/tsconfig.json"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_74]),
    _: 1
  }), _hoisted_75])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ru-he-zai-qi-ta-vue-zu-jian-zhong-huo-qu-viewer-shi-li",
    tabindex: "-1",
    content: "如何在其他 Vue 组件中获取 viewer 实例？",
    href: "#ru-he-zai-qi-ta-vue-zu-jian-zhong-huo-qu-viewer-shi-li",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_76, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ru-he-zai-qi-ta-vue-zu-jian-zhong-huo-qu-viewer-shi-li"
    })]),
    _: 1
  }), _hoisted_77, Object(vue_esm_browser["createElementVNode"])("div", _hoisted_80, [Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_81, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium-demo"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_82]),
    _: 1
  }), _hoisted_83]), _hoisted_84, _hoisted_85]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-yong-mo-ban",
    tabindex: "-1",
    content: "使用模板",
    href: "#shi-yong-mo-ban",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_86, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-yong-mo-ban"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "geng-xi-huan-vuecli",
    tabindex: "-1",
    content: "更喜欢 VueCLI",
    href: "#geng-xi-huan-vuecli",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_87, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#geng-xi-huan-vuecli"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_88, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium-starter"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_89]),
    _: 1
  }), _hoisted_90]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-shi-vite",
    tabindex: "-1",
    content: "试试 Vite",
    href: "#shi-shi-vite",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_91, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-shi-vite"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_92, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium-vite-starter"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_93]),
    _: 1
  }), _hoisted_94]), Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_95, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium-demo"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_96]),
    _: 1
  }), _hoisted_97]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "zhuo-mian-kai-fa",
    tabindex: "-1",
    content: "桌面开发",
    href: "#zhuo-mian-kai-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_98, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zhuo-mian-kai-fa"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_99, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium-electron-vite-starter"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_100]),
    _: 1
  }), _hoisted_101]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "guan-yu-vuetwo",
    tabindex: "-1",
    content: "关于 Vue2",
    href: "#guan-yu-vuetwo",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_102, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#guan-yu-vuetwo"
    })]),
    _: 1
  }), _hoisted_103, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "kai-shi-shi-yong",
    tabindex: "-1",
    content: "开始使用",
    href: "#kai-shi-shi-yong",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_104, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kai-shi-shi-yong"
    })]),
    _: 1
  }), _hoisted_105, _hoisted_106, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/quickstart.md?vue&type=template&id=3cd84e9d

// CONCATENATED MODULE: ./website/docs/zh-CN/quickstart.md

const script = {}
script.render = render

/* harmony default export */ var quickstart = __webpack_exports__["default"] = (script);

/***/ })

}]);