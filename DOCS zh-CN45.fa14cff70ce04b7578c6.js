(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[136],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/i18n.md?vue&type=template&id=1a374ec1

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"guo-ji-hua\"><a class=\"header-anchor\" href=\"#guo-ji-hua\">¶</a> 国际化</h2><p>VueCesium 组件内部<strong>默认</strong>使用英语，若希望使用其他语言，可以参考下面的方案。</p><h3 id=\"quan-ju-pei-zhi\"><a class=\"header-anchor\" href=\"#quan-ju-pei-zhi\">¶</a> 全局配置</h3><p>VueCesium 提供了全局配置国际化的设置。</p><pre><code class=\"hljs language-typescript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">VueCesium</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n<span class=\"hljs-keyword\">import</span> enUS <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium/es/locale/lang/en-us&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = <span class=\"hljs-title function_\">createApp</span>(<span class=\"hljs-title class_\">App</span>)\napp.<span class=\"hljs-title function_\">use</span>(<span class=\"hljs-title class_\">VueCesium</span>, {\n  <span class=\"hljs-attr\">locale</span>: enUS\n})\napp.<span class=\"hljs-title function_\">mount</span>(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code></pre><h3 id=\"vcconfigprovider\"><a class=\"header-anchor\" href=\"#vcconfigprovider\">¶</a> VcConfigProvider</h3><p>VueCesium 还提供了一个 Vue 组件 <a href=\"/#/zh-CN/component/vc-config-provider\">VcConfigProvider</a> 用于全局配置国际化的设置。</p><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-config-provider</span> <span class=\"hljs-attr\">:locale</span>=<span class=\"hljs-string\">&quot;locale&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-viewer</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-navigation</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-navigation</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-viewer</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-config-provider</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"language-javascript\">\n  <span class=\"hljs-keyword\">import</span> { defineComponent } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n  <span class=\"hljs-keyword\">import</span> { <span class=\"hljs-title class_\">VcConfigProvider</span>, <span class=\"hljs-title class_\">VcViewer</span>, <span class=\"hljs-title class_\">VcNavigation</span> } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n\n  <span class=\"hljs-keyword\">import</span> enUS <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium/es/locale/lang/en-us&#39;</span>\n\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-title function_\">defineComponent</span>({\n    <span class=\"hljs-attr\">components</span>: {\n      <span class=\"hljs-title class_\">VcConfigProvider</span>,\n      <span class=\"hljs-title class_\">VcViewer</span>,\n      <span class=\"hljs-title class_\">VcNavigation</span>\n    },\n    <span class=\"hljs-title function_\">setup</span>(<span class=\"hljs-params\"></span>) {\n      <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-attr\">locale</span>: enUS\n      }\n    }\n  })\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre><p><a href=\"https://github.com/zouyaoji/vue-cesium/tree/dev/packages/locale/lang\">支持的语言列表</a></p><ul class=\"language-list\"><li>简体中文（zh-hans）</li><li>英文（en-us）</li></ul><p>如果你需要使用其他的语言，欢迎贡献 <a href=\"https://github.com/zouyaoji/vue-cesium/pulls\">PR</a> 只需在<a href=\"https://github.com/zouyaoji/vue-cesium/tree/dev/packages/locale/lang\">这里</a> 添加一个语言配置文件即可。</p><h3 id=\"chang-jian-wen-ti\"><a class=\"header-anchor\" href=\"#chang-jian-wen-ti\">¶</a> 常见问题</h3><h4 id=\"ru-guo-wo-xiang-yao-ti-huan-mo-ren-yu-yan-bao-lai-jian-xiao-da-bao-ti-ji-ying-gai-zen-me-zuo\"><a class=\"header-anchor\" href=\"#ru-guo-wo-xiang-yao-ti-huan-mo-ren-yu-yan-bao-lai-jian-xiao-da-bao-ti-ji-ying-gai-zen-me-zuo\">¶</a> 如果我想要替换默认语言包来减小打包体积，应该怎么做？</h4><p>当你的应用默认不是使用<strong>中文</strong>的时候，你需要额外引入一个新的语言，这样会使得没有用到的语言文件被打包，会增加最终产物的文件大小，如果你非常在意最终产物文件的大小，你可以使用 <a href=\"https://webpack.js.org\">webpack</a> 提供的 <a href=\"https://webpack.js.org/plugins/normal-module-replacement-plugin/#root\">NormalModuleReplacementPlugin</a> 插件替换默认语言包。你可以把以下代码添加进 <code>webpack.config.js</code> 文件中来应用这个插件。</p><blockquote><p>webpack.config.js</p></blockquote><pre><code class=\"hljs language-typescript\">{\n  <span class=\"hljs-attr\">plugins</span>: [<span class=\"hljs-keyword\">new</span> webpack.<span class=\"hljs-title class_\">NormalModuleReplacementPlugin</span>(<span class=\"hljs-regexp\">/vue-cesium[\\/\\\\]lib[\\/\\\\]locale[\\/\\\\]lang[\\/\\\\]zh-hans/</span>, <span class=\"hljs-string\">&#39;vue-cesium/lib/locale/lang/en-us&#39;</span>)]\n}\n</code></pre>", 16);

function render(_ctx, _cache) {
  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/i18n.md?vue&type=template&id=1a374ec1

// CONCATENATED MODULE: ./website/docs/zh-CN/i18n.md

const script = {}
script.render = render

/* harmony default export */ var i18n = __webpack_exports__["default"] = (script);

/***/ })

}]);