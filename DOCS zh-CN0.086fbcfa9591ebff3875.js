(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/base.md?vue&type=template&id=5a193bd9

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h1>基础</h1><h2 id=\"quan-ju-zu-jian-shi-jian\"><a class=\"header-anchor\" href=\"#quan-ju-zu-jian-shi-jian\">¶</a> 全局组件事件</h2><div class=\"tip\"><p>提示： vue-cesium 所有组件都包含这 3 个事件，后续文档可能不会再列出。</p><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>初始化前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, vm}</td><td>初始化完成触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>销毁完成时触发。</td></tr></tbody></table></div><h2 id=\"quan-ju-zu-jian-shi-li-fang-fa\"><a class=\"header-anchor\" href=\"#quan-ju-zu-jian-shi-li-fang-fa\">¶</a> 全局组件实例方法</h2><div class=\"tip\"><p>提示： vue-cesium 所有组件都包含这 4 个方法，后续文档可能不会再列出。</p><table><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>load</td><td></td><td>加载组件。</td></tr><tr><td>unload</td><td></td><td>卸载组件。</td></tr><tr><td>reload</td><td></td><td>完成一次组件卸载 / 重新加载的方法。</td></tr><tr><td>getCesiumObject</td><td>Object</td><td>获取该组件加载的 Cesium 对象 或者 HTMLElement。</td></tr></tbody></table></div><h2 id=\"chang-liang\"><a class=\"header-anchor\" href=\"#chang-liang\">¶</a> 常量</h2><ul><li>待完善</li></ul><h2 id=\"lei-xing\"><a class=\"header-anchor\" href=\"#lei-xing\">¶</a> 类型</h2><ul><li>待完善</li></ul><h3 id=\"polygonhierarchy\"><a class=\"header-anchor\" href=\"#polygonhierarchy\">¶</a> PolygonHierarchy</h3><pre><code class=\"hljs language-JavaScript\"><span class=\"hljs-comment\">// Array</span>\n[{<span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, <span class=\"hljs-attr\">height</span>: number},...,{<span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, <span class=\"hljs-attr\">height</span>: number}]\n<span class=\"hljs-comment\">// Object</span>\n{\n  <span class=\"hljs-attr\">positions</span>: [{<span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, <span class=\"hljs-attr\">height</span>: number},...,{<span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, <span class=\"hljs-attr\">height</span>: number}],\n  <span class=\"hljs-attr\">holes</span>: [\n    {\n      <span class=\"hljs-attr\">positions</span>: [{<span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, <span class=\"hljs-attr\">height</span>: number},...,{<span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, <span class=\"hljs-attr\">height</span>: number}],\n      <span class=\"hljs-attr\">holes</span>: [\n        positions: [{<span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, <span class=\"hljs-attr\">height</span>: number},...,{<span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, <span class=\"hljs-attr\">height</span>: number}]\n        <span class=\"hljs-comment\">// ...</span>\n      ]\n    }\n  ]\n}\n\n</code></pre><h2 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h2><blockquote><p><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/index.html\">Cesium 官方文档</a></p></blockquote>", 13);

function render(_ctx, _cache) {
  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/base.md?vue&type=template&id=5a193bd9

// CONCATENATED MODULE: ./website/docs/zh-CN/base.md

const script = {}
script.render = render

/* harmony default export */ var base = __webpack_exports__["default"] = (script);

/***/ })

}]);