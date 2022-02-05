(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ 1012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.26/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/base.md?vue&type=template&id=6407db93

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Base ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Global component events ");

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<div class=\"tip\"><p>Tip: All components of vue-cesium include these events, and subsequent documents may not list them again.</p></div><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table>", 2);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Global component instance method ");

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<div class=\"tip\"><p>Tip: All components of vue-cesium include these 4 methods, which may not be listed in subsequent documents.</p></div><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>load</td><td></td><td>Load the component.</td></tr><tr><td>unload</td><td></td><td>Uninstall the component.</td></tr><tr><td>reload</td><td></td><td>Complete a component unloading/reloading method.</td></tr><tr><td>getCesiumObject</td><td>Object</td><td>Get the Cesium object or HTMLElement loaded by this component.</td></tr></tbody></table>", 2);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Types ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCartesian2 ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li><code>Cartesian2Option</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">Cartesian2Option</span> {\n  <span class=\"hljs-attr\">x</span>: number\n  <span class=\"hljs-attr\">y</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;number&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">;[number, number]\n</code><span class=\"lang-mark\">js</span></pre>", 4);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Array<Cartesian2> ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>There are 2 ways to express <code>Array&lt;Cartesian2&gt;</code>:</p><ul><li><code>Array&lt;Cartesian2Option&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">[{ <span class=\"hljs-attr\">x</span>: number,  <span class=\"hljs-attr\">y</span>: number }, ..., { <span class=\"hljs-attr\">x</span>: number,  <span class=\"hljs-attr\">y</span>: number }]\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;Array&lt;number&gt;&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">[[<span class=\"hljs-attr\">x</span>: number, <span class=\"hljs-attr\">y</span>: number],..., [<span class=\"hljs-attr\">x</span>: number, <span class=\"hljs-attr\">y</span>: number]]\n</code><span class=\"lang-mark\">js</span></pre>", 5);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Cartesian3 ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>There are 3 ways to express <code>Cesium.Cartesian3</code>:</p><ul><li><code>Cartesian3Option</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">Cartesian3Option</span> {\n  <span class=\"hljs-attr\">x</span>: number\n  <span class=\"hljs-attr\">y</span>: number\n  <span class=\"hljs-attr\">z</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>CartographicInDegreeOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// in degrees</span>\ninterface <span class=\"hljs-title class_\">CartographicInDegreeOption</span> {\n  <span class=\"hljs-attr\">lng</span>: number\n  <span class=\"hljs-attr\">lat</span>: number\n  height?: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;number&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// in degrees</span>\n;[(<span class=\"hljs-attr\">lng</span>: number), (<span class=\"hljs-attr\">lat</span>: number), (<span class=\"hljs-attr\">height</span>: number)]\n</code><span class=\"lang-mark\">js</span></pre>", 7);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Array<Cartesian3> ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>There are 4 ways to express <code>Array&lt;Cartesian3&gt;</code>:</p><ul><li><code>Array&lt;Cartesian3Option&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">\n[{ <span class=\"hljs-attr\">x</span>: number, <span class=\"hljs-attr\">y</span>: number, <span class=\"hljs-attr\">z</span>: number },...,{ <span class=\"hljs-attr\">x</span>: number, <span class=\"hljs-attr\">y</span>: number, <span class=\"hljs-attr\">z</span>: number }]\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;CartographicInDegreeOption&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// in degrees</span>\n[{ <span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, height?: number },..., { <span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, height?: number }]\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;number&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// in degrees</span>\n[<span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, <span class=\"hljs-attr\">height</span>: number, ..., <span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, <span class=\"hljs-attr\">height</span>: number]\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;Array&lt;number&gt;&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// in degrees</span>\n[[<span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, <span class=\"hljs-attr\">height</span>: number], ..., [<span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, <span class=\"hljs-attr\">height</span>: number]]\n</code><span class=\"lang-mark\">js</span></pre>", 9);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Cartesian4 ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>There are 2 ways to express <code>Cesium.Cartesian4</code>:</p><ul><li><code>Cartesian4Option</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">Cartesian4Option</span> {\n  x?: number\n  y?: number\n  z?: number\n  w?: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;number&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">;[(<span class=\"hljs-attr\">x</span>: number), (<span class=\"hljs-attr\">y</span>: number), (<span class=\"hljs-attr\">z</span>: number), (<span class=\"hljs-attr\">w</span>: number)]\n</code><span class=\"lang-mark\">js</span></pre>", 5);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Rectange(coordinates) ");

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>There are 3 ways to express <code>Cesium.Rectange</code>:</p><ul><li><code>RectangleInDegreeOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// in degrees</span>\ninterface <span class=\"hljs-title class_\">RectangleInDegreeOption</span> {\n  <span class=\"hljs-attr\">west</span>: number\n  <span class=\"hljs-attr\">south</span>: number\n  <span class=\"hljs-attr\">east</span>: number\n  <span class=\"hljs-attr\">north</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Cartesian4Option</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// in radian</span>\ninterface <span class=\"hljs-title class_\">Cartesian4Option</span> {\n  x?: number\n  y?: number\n  z?: number\n  w?: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;number&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// // in degrees</span>\n;[(<span class=\"hljs-attr\">west</span>: number), (<span class=\"hljs-attr\">south</span>: number), (<span class=\"hljs-attr\">east</span>: number), (<span class=\"hljs-attr\">north</span>: number)]\n</code><span class=\"lang-mark\">js</span></pre>", 7);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Camera ");

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>There are 1 ways to express <code>Cesium.Camera</code>:</p><ul><li><code>CameraOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">CameraOption</span> {\n  position?: <span class=\"hljs-title class_\">Cartesian3Option</span> | <span class=\"hljs-title class_\">CartographicInDegreeOption</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt;\n  retangle?: <span class=\"hljs-title class_\">RectangleInDegreeOption</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt;\n  heading?: number\n  pitch?: number\n  roll?: number\n}\n</code><span class=\"lang-mark\">js</span></pre>", 3);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("PolygonHierarchy ");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>There are 2 ways to express <code>Cesium.PolygonHierarchy</code>:</p><ul><li><code>PolygonHierarchyOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">PolygonHierarchyOption</span> {\n  <span class=\"hljs-attr\">positions</span>: <span class=\"hljs-title class_\">Array</span>&lt;<span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Cartesian3</span>&gt; | <span class=\"hljs-title class_\">Array</span>&lt;<span class=\"hljs-title class_\">Cartesian3Option</span>&gt; | <span class=\"hljs-title class_\">Array</span>&lt;<span class=\"hljs-title class_\">Array</span>&lt;number&gt;&gt;\n  holes?: <span class=\"hljs-title class_\">Array</span>&lt;<span class=\"hljs-title class_\">PolygonHierarchyOption</span>&gt;\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;Cartesian3Option&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">[{<span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, <span class=\"hljs-attr\">height</span>: number},...,{<span class=\"hljs-attr\">lng</span>: number, <span class=\"hljs-attr\">lat</span>: number, <span class=\"hljs-attr\">height</span>: number}]\n</code><span class=\"lang-mark\">js</span></pre>", 5);

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("NearFarScalar ");

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>There are 2 ways to express <code>Cesium.NearFarScalar</code>:</p><ul><li><code>NearFarScalarOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">NearFarScalarOption</span> {\n  <span class=\"hljs-attr\">near</span>: number\n  <span class=\"hljs-attr\">nearValue</span>: number\n  <span class=\"hljs-attr\">far</span>: number\n  <span class=\"hljs-attr\">farValue</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;number&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">[<span class=\"hljs-attr\">near</span>: number, <span class=\"hljs-attr\">nearValue</span>: number, <span class=\"hljs-attr\">far</span>: number, <span class=\"hljs-attr\">farValue</span>: number, ..., <span class=\"hljs-attr\">near</span>: number, <span class=\"hljs-attr\">nearValue</span>: number, <span class=\"hljs-attr\">far</span>: number, <span class=\"hljs-attr\">farValue</span>: number]\n</code><span class=\"lang-mark\">js</span></pre>", 5);

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("DistanceDisplayCondition ");

const _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>There are 2 ways to express <code>Cesium.DistanceDisplayCondition</code>:</p><ul><li><code>DistanceDisplayConditionOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">DistanceDisplayConditionOption</span> {\n  <span class=\"hljs-attr\">near</span>: number\n  <span class=\"hljs-attr\">far</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;number&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">[<span class=\"hljs-attr\">near</span>: number, <span class=\"hljs-attr\">far</span>: number, ..., <span class=\"hljs-attr\">near</span>: number, <span class=\"hljs-attr\">far</span>: number]\n</code><span class=\"lang-mark\">js</span></pre>", 5);

const _hoisted_75 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Color ");

const _hoisted_76 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>There are 4 ways to express <code>Cesium.Color</code>:</p><ul><li><code>string</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// css color</span>\n<span class=\"hljs-string\">&#39;white&#39;</span>\n<span class=\"hljs-string\">&#39;#fff&#39;</span>\n<span class=\"hljs-string\">&#39;rgba(255,255,255,0)&#39;</span>\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;number&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// in byte</span>\n;[(<span class=\"hljs-attr\">r</span>: number), (<span class=\"hljs-attr\">g</span>: number), (<span class=\"hljs-attr\">b</span>: number), (<span class=\"hljs-attr\">a</span>: number)]\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>ColorInByteOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">ColorInByteOption</span> {\n  <span class=\"hljs-attr\">red</span>: number\n  <span class=\"hljs-attr\">green</span>: number\n  <span class=\"hljs-attr\">blue</span>: number\n  alpha?: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Cartesian4Option</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// The range is from 0 (no intensity) to 1.0 (full intensity).</span>\ninterface <span class=\"hljs-title class_\">Cartesian4Option</span> {\n  x?: number\n  y?: number\n  z?: number\n  w?: number\n}\n</code><span class=\"lang-mark\">js</span></pre>", 9);

const _hoisted_85 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Material ");

const _hoisted_86 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>There are 3 ways to express <code>Cesium.Material</code>, <code>Cesium.MaterialProperty</code>:</p><ul><li><code>string</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// color or image url</span>\n<span class=\"hljs-string\">&#39;red&#39;</span>\n<span class=\"hljs-string\">&#39;https://zouyaoji.top/vue-cesium/favicon.png&#39;</span>\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;number&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// color</span>\n;[<span class=\"hljs-number\">255</span>, <span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">255</span>]\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>MaterialOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">MaterialOption</span> {\n    <span class=\"hljs-attr\">fabric</span>: {\n    <span class=\"hljs-attr\">type</span>: string\n    <span class=\"hljs-attr\">uniforms</span>: {\n      color?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Color</span> | string | <span class=\"hljs-title class_\">Array</span>&lt;number&gt; | <span class=\"hljs-title class_\">ColorInByteOption</span> | <span class=\"hljs-title class_\">Cartesian4Option</span>\n      image?: string | <span class=\"hljs-title class_\">HTMLImageElement</span> | <span class=\"hljs-title class_\">HTMLCanvasElement</span> | <span class=\"hljs-title class_\">HTMLVideoElement</span>\n      repeat?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Cartesian2</span> | <span class=\"hljs-title class_\">Cartesian2Option</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt; | number\n      transparent?: boolean\n      evenColor?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Color</span> | string | <span class=\"hljs-title class_\">Array</span>&lt;number&gt; | <span class=\"hljs-title class_\">ColorInByteOption</span> | <span class=\"hljs-title class_\">Cartesian4Option</span>\n      oddColor?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Color</span> | string | <span class=\"hljs-title class_\">Array</span>&lt;number&gt; | <span class=\"hljs-title class_\">ColorInByteOption</span> | <span class=\"hljs-title class_\">Cartesian4Option</span>\n      gapColor?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Color</span> | string | <span class=\"hljs-title class_\">Array</span>&lt;number&gt; | <span class=\"hljs-title class_\">ColorInByteOption</span> | <span class=\"hljs-title class_\">Cartesian4Option</span>\n      dashLength?: number\n      dashPattern?: number\n      glowPower?: number\n      taperPower?: number\n      outlineColor?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Color</span> | string | <span class=\"hljs-title class_\">Array</span>&lt;number&gt; | <span class=\"hljs-title class_\">ColorInByteOption</span> | <span class=\"hljs-title class_\">Cartesian4Option</span>\n      outlineWidth?: number\n      cellAlpha?: number\n      lineCount?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Cartesian2</span> | <span class=\"hljs-title class_\">Cartesian2Option</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt; | number\n      lineThickness?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Cartesian2</span> | <span class=\"hljs-title class_\">Cartesian2Option</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt; | number\n      lineOffset?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Cartesian2</span> | <span class=\"hljs-title class_\">Cartesian2Option</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt; | number\n      orientation?: number | <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">StripeOrientation</span>\n      offset?: number\n    }\n  }\n  strict?: boolean\n  translucent?: boolean | <span class=\"hljs-title class_\">AnyFunction</span>\n  minificationFilter?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">TextureMinificationFilter</span>\n  magnificationFilter?: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">TextureMagnificationFilter</span>\n}\n</code><span class=\"lang-mark\">js</span></pre>", 7);

const _hoisted_93 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("BoundingRectangle ");

const _hoisted_94 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>There are 2 ways to express <code>Cesium.BoundingRectangle</code>:</p><ul><li><code>BoundingRectangleOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">BoundingRectangleOption</span> {\n  <span class=\"hljs-attr\">x</span>: number\n  <span class=\"hljs-attr\">y</span>: number\n  <span class=\"hljs-attr\">width</span>: number\n  <span class=\"hljs-attr\">height</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;number&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">;[(<span class=\"hljs-attr\">x</span>: number), (<span class=\"hljs-attr\">y</span>: number), (<span class=\"hljs-attr\">width</span>: number), (<span class=\"hljs-attr\">height</span>: number)]\n</code><span class=\"lang-mark\">js</span></pre>", 5);

const _hoisted_99 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Plane ");

const _hoisted_100 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>There are 2 ways to express <code>Cesium.Plane</code>:</p><ul><li><code>PlaneOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">PlaneOption</span> {\n  <span class=\"hljs-attr\">normal</span>: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Cartesian3</span> | <span class=\"hljs-title class_\">Cartesian3Option</span> | <span class=\"hljs-title class_\">CartographicInDegreeOption</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt;\n  <span class=\"hljs-attr\">distance</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;any&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">;[(<span class=\"hljs-attr\">plane</span>: <span class=\"hljs-title class_\">Array</span>&lt;number&gt; | <span class=\"hljs-title class_\">Array</span>&lt;<span class=\"hljs-title class_\">Cartesian3Option</span>&gt;), (<span class=\"hljs-attr\">distance</span>: number)]\n</code><span class=\"lang-mark\">js</span></pre>", 5);

const _hoisted_105 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("TranslationRotationScale ");

const _hoisted_106 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>There are 2 ways to express <code>Cesium.TranslationRotationScale</code>:</p><ul><li><code>TranslationRotationScaleOption</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">interface <span class=\"hljs-title class_\">TranslationRotationScaleOption</span> {\n  <span class=\"hljs-attr\">translation</span>: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Cartesian3</span> | <span class=\"hljs-title class_\">Cartesian3Option</span> | <span class=\"hljs-title class_\">CartographicInDegreeOption</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt;\n  <span class=\"hljs-attr\">rotation</span>: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Quaternion</span> | <span class=\"hljs-title class_\">Cartesian4Option</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt;\n  <span class=\"hljs-attr\">scale</span>: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Cartesian3</span> | <span class=\"hljs-title class_\">Cartesian3Option</span> | <span class=\"hljs-title class_\">CartographicInDegreeOption</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt;\n}\n</code><span class=\"lang-mark\">js</span></pre><ul><li><code>Array&lt;any&gt;</code></li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">;[\n  (<span class=\"hljs-attr\">translation</span>: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Cartesian3</span> | <span class=\"hljs-title class_\">Cartesian3Option</span> | <span class=\"hljs-title class_\">CartographicInDegreeOption</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt;),\n  (<span class=\"hljs-attr\">rotation</span>: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Quaternion</span> | <span class=\"hljs-title class_\">Cartesian4Option</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt;),\n  (<span class=\"hljs-attr\">scale</span>: <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Cartesian3</span> | <span class=\"hljs-title class_\">Cartesian3Option</span> | <span class=\"hljs-title class_\">CartographicInDegreeOption</span> | <span class=\"hljs-title class_\">Array</span>&lt;number&gt;)\n]\n</code><span class=\"lang-mark\">js</span></pre>", 5);

const _hoisted_111 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Constants ");

const _hoisted_112 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>Since Cesium cannot be obtained before the initialization of the <code>vc-viewer</code> component is completed, some constants of Cesium cannot be obtained directly through Cesium when the component is bound, but it is still possible to pass their values directly.</p><div class=\"tipflex\"><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-comment\">&lt;!-- Wrong way --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-viewer</span> <span class=\"hljs-attr\">:sceneMode</span>=<span class=\"hljs-string\">&quot;Cesium.SceneMode.SCENE3D&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-viewer</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-comment\">&lt;!-- Right way --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-viewer</span> <span class=\"hljs-attr\">:sceneMode</span>=<span class=\"hljs-string\">&quot;3&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-viewer</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre></div>", 2);

const _hoisted_114 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("HorizontalOrigin ");

const _hoisted_115 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>The horizontal location of an origin relative to an object, e.g., a Billboard or Label. For example, setting the horizontal origin to LEFT or RIGHT will display a billboard to the left or right (in screen space) of the anchor position.</p><table><thead><tr><th>Name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>CENTER</td><td>0</td><td>The origin is at the horizontal center of the object.</td></tr><tr><td>LEFT</td><td>1</td><td>The origin is on the left side of the object.</td></tr><tr><td>RIGHT</td><td>-1</td><td>The origin is on the right side of the object.</td></tr></tbody></table>", 2);

const _hoisted_117 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VerticalOrigin ");

const _hoisted_118 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>The vertical location of an origin relative to an object, e.g., a Billboard or Label. For example, setting the vertical origin to TOP or BOTTOM will display a billboard above or below (in screen space) the anchor position.</p><table><thead><tr><th>Name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>CENTER</td><td>0</td><td>The origin is at the vertical center between BASELINE and TOP.</td></tr><tr><td>BOTTOM</td><td>1</td><td>The origin is at the bottom of the object.</td></tr><tr><td>BASELINE</td><td>2</td><td>If the object contains text, the origin is at the baseline of the text, else the origin is at the bottom of the object.</td></tr><tr><td>TOP</td><td>-1</td><td>The origin is at the top of the object.</td></tr></tbody></table>", 2);

const _hoisted_120 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("HeightReference ");

const _hoisted_121 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>Represents the position relative to the terrain.</p><table><thead><tr><th>Name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>NONE</td><td>0</td><td>The position is absolute.</td></tr><tr><td>CLAMP_TO_GROUND</td><td>1</td><td>The position is clamped to the terrain.</td></tr><tr><td>RELATIVE_TO_GROUND</td><td>2</td><td>The position height is the height above the terrain.</td></tr></tbody></table>", 2);

const _hoisted_123 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("ShadowMode ");

const _hoisted_124 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>Specifies whether the object casts or receives shadows from light sources when shadows are enabled.</p><table><thead><tr><th>Name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>DISABLED</td><td>0</td><td>The object does not cast or receive shadows.</td></tr><tr><td>ENABLED</td><td>1</td><td>The object casts and receives shadows.</td></tr><tr><td>CAST_ONLY</td><td>2</td><td>The object casts shadows only.</td></tr><tr><td>RECEIVE_ONLY</td><td>3</td><td>The object receives shadows only.</td></tr></tbody></table>", 2);

const _hoisted_126 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("CornerType ");

const _hoisted_127 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>Style options for corners.</p><table><thead><tr><th>Name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>ROUNDED</td><td>0</td><td>Corner has a smooth edge.</td></tr><tr><td>MITERED</td><td>1</td><td>Corner point is the intersection of adjacent edges.</td></tr><tr><td>BEVELED</td><td>2</td><td>Corner is clipped.</td></tr></tbody></table>", 2);

const _hoisted_129 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("ClassificationType ");

const _hoisted_130 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>Whether a classification affects terrain, 3D Tiles or both.</p><table><thead><tr><th>Name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>TERRAIN</td><td>0</td><td>Only terrain will be classified.</td></tr><tr><td>CESIUM_3D_TILE</td><td>1</td><td>Only 3D Tiles will be classified.</td></tr><tr><td>BOTH</td><td>2</td><td>Both terrain and 3D Tiles will be classified.</td></tr></tbody></table>", 2);

const _hoisted_132 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("BingMapsStyle ");

const _hoisted_133 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>The types of imagery provided by Bing Maps.</p><table><thead><tr><th>Name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>AERIAL</td><td>&#39;Aerial&#39;</td><td>Aerial imagery.</td></tr><tr><td>AERIAL_WITH_LABELS</td><td>&#39;AerialWithLabels&#39;</td><td>Aerial imagery with a road overlay.</td></tr><tr><td>AERIAL_WITH_LABELS_ON_DEMAND</td><td>&#39;AerialWithLabelsOnDemand&#39;</td><td>Aerial imagery with a road overlay.</td></tr><tr><td>ROAD</td><td>&#39;Road&#39;</td><td>Roads without additional imagery.</td></tr><tr><td>ROAD_ON_DEMAND</td><td>&#39;RoadOnDemand&#39;</td><td>Roads without additional imagery.</td></tr><tr><td>CANVAS_DARK</td><td>&#39;CanvasDark&#39;</td><td>A dark version of the road maps.</td></tr><tr><td>CANVAS_LIGHT</td><td>&#39;CanvasGray&#39;</td><td>A lighter version of the road maps.</td></tr><tr><td>CANVAS_GRAY</td><td>&#39;CanvasLight&#39;</td><td>A grayscale version of the road maps.</td></tr><tr><td>ORDNANCE_SURVEY</td><td>&#39;OrdnanceSurvey&#39;</td><td>Ordnance Survey imagery. This imagery is visible only for the London, UK area.</td></tr><tr><td>COLLINS_BART</td><td>&#39;CollinsBart&#39;</td><td>Collins Bart imagery.</td></tr></tbody></table>", 2);

const _hoisted_135 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("LabelStyle ");

const _hoisted_136 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>Describes how to draw a label.</p><table><thead><tr><th>Name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>FILL</td><td>0</td><td>Fill the text of the label, but do not outline.</td></tr><tr><td>OUTLINE</td><td>1</td><td>Outline the text of the label, but do not fill.</td></tr><tr><td>FILL_AND_OUTLINE</td><td>2</td><td>Fill and outline the text of the label.</td></tr></tbody></table>", 2);

const _hoisted_138 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("ArcType ");

const _hoisted_139 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>ArcType defines the path that should be taken connecting vertices.</p><table><thead><tr><th>Name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>NONE</td><td>0</td><td>Straight line that does not conform to the surface of the ellipsoid.</td></tr><tr><td>GEODESIC</td><td>1</td><td>Follow geodesic path.</td></tr><tr><td>RHUMB</td><td>2</td><td>Follow rhumb or loxodrome path.</td></tr></tbody></table>", 2);

const _hoisted_141 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("SceneMode ");

const _hoisted_142 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>Indicates if the scene is viewed in 3D, 2D, or 2.5D Columbus view.</p><table><thead><tr><th>Name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>MORPHING</td><td>0</td><td>Morphing between mode, e.g., 3D to 2D.</td></tr><tr><td>COLUMBUS_VIEW</td><td>1</td><td>Columbus View mode. A 2.5D perspective view where the map is laid out flat and objects with non-zero height are drawn above it.</td></tr><tr><td>SCENE2D</td><td>2</td><td>2D mode. The map is viewed top-down with an orthographic projection.</td></tr><tr><td>SCENE3D</td><td>3</td><td>3D mode. A traditional 3D perspective view of the globe.</td></tr></tbody></table>", 2);

const _hoisted_144 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("MapMode2D ");

const _hoisted_145 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>Describes how the map will operate in 2D.</p><table><thead><tr><th>Name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>ROTATE</td><td>0</td><td>The 2D map can be rotated about the z axis.</td></tr><tr><td>INFINITE_SCROLL</td><td>1</td><td>The 2D map can be scrolled infinitely in the horizontal direction.</td></tr></tbody></table>", 2);

const _hoisted_147 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_148 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Official document");

function render(_ctx, _cache) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "base",
    tabindex: "-1",
    content: "Base",
    href: "#base",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#base"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "global-component-events",
    tabindex: "-1",
    content: "Global component events",
    href: "#global-component-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#global-component-events"
    })]),
    _: 1
  }), _hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "global-component-instance-method",
    tabindex: "-1",
    content: "Global component instance method",
    href: "#global-component-instance-method",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#global-component-instance-method"
    })]),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "types",
    tabindex: "-1",
    content: "Types",
    href: "#types",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#types"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccartesiantwo",
    tabindex: "-1",
    content: "VcCartesian2",
    href: "#vccartesiantwo",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccartesiantwo"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "array-cartesiantwo",
    tabindex: "-1",
    content: "Array<Cartesian2>",
    href: "#array-cartesiantwo",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#array-cartesiantwo"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "cartesianthree",
    tabindex: "-1",
    content: "Cartesian3",
    href: "#cartesianthree",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cartesianthree"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "array-cartesianthree",
    tabindex: "-1",
    content: "Array<Cartesian3>",
    href: "#array-cartesianthree",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#array-cartesianthree"
    })]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "cartesianfour",
    tabindex: "-1",
    content: "Cartesian4",
    href: "#cartesianfour",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_39, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cartesianfour"
    })]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "rectange-coordinates",
    tabindex: "-1",
    content: "Rectange(coordinates)",
    href: "#rectange-coordinates",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_45, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#rectange-coordinates"
    })]),
    _: 1
  }), _hoisted_46, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "camera",
    tabindex: "-1",
    content: "Camera",
    href: "#camera",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_53, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#camera"
    })]),
    _: 1
  }), _hoisted_54, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "polygonhierarchy",
    tabindex: "-1",
    content: "PolygonHierarchy",
    href: "#polygonhierarchy",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_57, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#polygonhierarchy"
    })]),
    _: 1
  }), _hoisted_58, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "nearfarscalar",
    tabindex: "-1",
    content: "NearFarScalar",
    href: "#nearfarscalar",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_63, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#nearfarscalar"
    })]),
    _: 1
  }), _hoisted_64, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "distancedisplaycondition",
    tabindex: "-1",
    content: "DistanceDisplayCondition",
    href: "#distancedisplaycondition",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_69, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#distancedisplaycondition"
    })]),
    _: 1
  }), _hoisted_70, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "color",
    tabindex: "-1",
    content: "Color",
    href: "#color",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_75, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#color"
    })]),
    _: 1
  }), _hoisted_76, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "material",
    tabindex: "-1",
    content: "Material",
    href: "#material",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_85, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#material"
    })]),
    _: 1
  }), _hoisted_86, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "boundingrectangle",
    tabindex: "-1",
    content: "BoundingRectangle",
    href: "#boundingrectangle",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_93, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#boundingrectangle"
    })]),
    _: 1
  }), _hoisted_94, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "plane",
    tabindex: "-1",
    content: "Plane",
    href: "#plane",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_99, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#plane"
    })]),
    _: 1
  }), _hoisted_100, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "translationrotationscale",
    tabindex: "-1",
    content: "TranslationRotationScale",
    href: "#translationrotationscale",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_105, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#translationrotationscale"
    })]),
    _: 1
  }), _hoisted_106, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "constants",
    tabindex: "-1",
    content: "Constants",
    href: "#constants",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_111, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#constants"
    })]),
    _: 1
  }), _hoisted_112, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "horizontalorigin",
    tabindex: "-1",
    content: "HorizontalOrigin",
    href: "#horizontalorigin",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_114, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#horizontalorigin"
    })]),
    _: 1
  }), _hoisted_115, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "verticalorigin",
    tabindex: "-1",
    content: "VerticalOrigin",
    href: "#verticalorigin",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_117, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#verticalorigin"
    })]),
    _: 1
  }), _hoisted_118, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "heightreference",
    tabindex: "-1",
    content: "HeightReference",
    href: "#heightreference",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_120, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#heightreference"
    })]),
    _: 1
  }), _hoisted_121, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shadowmode",
    tabindex: "-1",
    content: "ShadowMode",
    href: "#shadowmode",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_123, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shadowmode"
    })]),
    _: 1
  }), _hoisted_124, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "cornertype",
    tabindex: "-1",
    content: "CornerType",
    href: "#cornertype",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_126, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cornertype"
    })]),
    _: 1
  }), _hoisted_127, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "classificationtype",
    tabindex: "-1",
    content: "ClassificationType",
    href: "#classificationtype",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_129, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#classificationtype"
    })]),
    _: 1
  }), _hoisted_130, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bingmapsstyle",
    tabindex: "-1",
    content: "BingMapsStyle",
    href: "#bingmapsstyle",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_132, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bingmapsstyle"
    })]),
    _: 1
  }), _hoisted_133, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "labelstyle",
    tabindex: "-1",
    content: "LabelStyle",
    href: "#labelstyle",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_135, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#labelstyle"
    })]),
    _: 1
  }), _hoisted_136, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "arctype",
    tabindex: "-1",
    content: "ArcType",
    href: "#arctype",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_138, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#arctype"
    })]),
    _: 1
  }), _hoisted_139, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "scenemode",
    tabindex: "-1",
    content: "SceneMode",
    href: "#scenemode",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_141, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#scenemode"
    })]),
    _: 1
  }), _hoisted_142, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "mapmodetwod",
    tabindex: "-1",
    content: "MapMode2D",
    href: "#mapmodetwod",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_144, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#mapmodetwod"
    })]),
    _: 1
  }), _hoisted_145, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_147, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("blockquote", null, [Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/global.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_148]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/base.md?vue&type=template&id=6407db93

// CONCATENATED MODULE: ./website/docs/en-US/base.md

const script = {}
script.render = render

/* harmony default export */ var base = __webpack_exports__["default"] = (script);

/***/ })

}]);