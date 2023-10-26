(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/controls/vc-navigation-sm.md?vue&type=template&id=1c56520e

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};
const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("The navigation component that mimics the supermap. It is composed of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-compass-sm"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-zoom-control-sm"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".")], -1);
const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "Note:"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Style file need to be imported: "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "import 'vue-cesium/dist/index.css';")], -1);
const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcNavigationSm component.", -1);
const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Just mount the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-navigation-sm"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag as a subcomponent of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".")])], -1);
const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-navigation-sm @zoom-evt=\"onNavigationEvt\" @compass-evt=\"onNavigationEvt\" ref=\"navigation\"></vc-navigation-sm>\n    <vc-navigation-sm position=\"left\" :compass-opts=\"{ autoHidden: false }\" :zoom-opts=\"{ autoHidden: false }\"></vc-navigation-sm>\n    <vc-compass-sm :auto-hidden=\"false\" position=\"bottom\" :offset=\"[200, 20]\"></vc-compass-sm>\n    <vc-compass-sm position=\"bottom\" :offset=\"[-200, 20]\"></vc-compass-sm>\n    <vc-zoom-control-sm position=\"bottom\" :offset=\"[0, 50]\"></vc-zoom-control-sm>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n<script>\n  export default {\n    methods: {\n      load() {\n        this.$refs.navigation.load()\n      },\n      reload() {\n        this.$refs.navigation.reload()\n      },\n      unload() {\n        this.$refs.navigation.unload()\n      },\n      onNavigationEvt(e) {\n        console.log(e)\n      }\n    }\n  }\n</script>\n")], -1);
const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>string</td><td><code>top-right</code></td><td><code>optional</code> Specify the location of the navigation component.</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>[number, number]</td><td><code>[0, 0]</code></td><td><code>optional</code> Specifies the position-based offset of the navigation component.</td><td></td></tr><tr><td>compassOpts</td><td>false | VcCompassSmProps</td><td>Same as <code>VcCompassSm</code></td><td><code>optional</code> Specify the compass control parameters, false means not to display.</td><td></td></tr><tr><td>zoomOpts</td><td>false | VcZoomControlSmProps</td><td>Same as <code>VcZoomControlSm</code></td><td><code>optional</code> Specify the zoom control parameters, false means not display.</td><td></td></tr></tbody></table><div class=\"tip\"><p>Default parameters of <code>compassOpts</code>, <code>zoomOpts</code>:</p></div><div class=\"tipflex\"><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// compassOpts</span>\n{\n  <span class=\"hljs-attr\">enableCompassOuterRing</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">duration</span>: <span class=\"hljs-number\">1.5</span>,\n  <span class=\"hljs-attr\">autoHidden</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>],\n    <span class=\"hljs-attr\">tip</span>: <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span> <span class=\"hljs-comment\">// If not specified, the default value of the corresponding language is used</span>\n  }\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// zoomOpts</span>\n{\n  <span class=\"hljs-attr\">autoHidden</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>],\n    <span class=\"hljs-attr\">zoomInTip</span>: <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span>,\n    <span class=\"hljs-attr\">zoomOutTip</span>: <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span>,\n    <span class=\"hljs-attr\">zoomBarTip</span>: <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span>\n  }\n}\n</code><span class=\"lang-mark\">js</span></pre></div>", 3);
const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Subtags")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "This is where vc-navigation-sm sub tags content goes."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-compass-sm/vc-zoom-control-sm")])])], -1);
const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the VcNavigationSm is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the VcNavigationSm is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the VcNavigationSm is destroyed.</td></tr><tr><td>zoomEvt</td><td>(evt: VcZoomEvt)</td><td>Triggers when the zoom control is operated.</td></tr><tr><td>compassEvt</td><td>(evt: VcCompassEvt)</td><td>Triggers when the compass control is operated.</td></tr></tbody></table>", 1);
const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Load components manually.</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Reload components manually.</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>Destroy the loaded component manually.</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>Get the creatingPromise.</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>Get the Cesium object loaded by this component.</td></tr></tbody></table>", 1);
const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Compass components.", -1);
const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>string</td><td><code>top-right</code></td><td><code>optional</code> Specify the compass position.</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>[number, number]</td><td><code>[0, 0]</code></td><td><code>optional</code> Specify the position-based offset of the compass.</td><td></td></tr><tr><td>enableCompassOuterRing</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the outer ring of the compass can be operated.</td><td></td></tr><tr><td>duration</td><td>number</td><td><code>1.5</code></td><td><code>optional</code> Specify the flight time of double-clicking the compass to restore the pitch angle, in seconds.</td><td></td></tr><tr><td>tooltip</td><td>false</td><td>VcTooltipProps</td><td></td><td><code>optional</code> Specify the compass prompt information.</td></tr><tr><td>autoHidden</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether to automatically hide parts of the compass controls.</td><td></td></tr></tbody></table>", 1);
const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the VcNavigationSm is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the VcNavigationSm is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the VcNavigationSm is destroyed.</td></tr><tr><td>compassEvt</td><td>(evt: VcCompassEvt)</td><td>Triggers when the compass control is operated.</td></tr></tbody></table>", 1);
const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Load components manually.</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Reload components manually.</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>Destroy the loaded component manually.</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>Get the creatingPromise.</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>Get the Cesium object loaded by this component.</td></tr></tbody></table>", 1);
const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Zoom component.", -1);
const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>string</td><td><code>top-right</code></td><td><code>optional</code> Specify the position of the zoom component.</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>[number, number]</td><td><code>[0, 0]</code></td><td><code>optional</code> Specifies the position-based offset of the zoom control.</td><td></td></tr><tr><td>tooltip</td><td>false</td><td>(VcTooltipProps &amp; { zoomInTip: string; zoomOutTip: string; zoomBarTip: string })</td><td></td><td><code>optional</code> Specify the compass prompt information.</td></tr><tr><td>autoHidden</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether to automatically hide the zoom control.</td><td></td></tr></tbody></table>", 1);
const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the VcNavigationSm is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the VcNavigationSm is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the VcNavigationSm is destroyed.</td></tr><tr><td>zoomEvt</td><td>(evt: VcZoomEvt)</td><td>Triggers when the zoom control is operated.</td></tr></tbody></table>", 1);
const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Load components manually.</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Reload components manually.</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>Destroy the loaded component manually.</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>Get the creatingPromise.</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>Get the Cesium object loaded by this component.</td></tr></tbody></table>", 1);
function vc_navigation_smvue_type_template_id_1c56520e_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");
  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");
  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");
  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");
  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcnavigationsm",
    tabindex: "-1",
    content: "VcNavigationSm",
    href: "#vcnavigationsm",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcNavigationSm "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcnavigationsm"
    })]),
    _: 1
  }), _hoisted_2, _hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Basic usage "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_4, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcnavigationsm-props",
    tabindex: "-1",
    content: "VcNavigationSm Props",
    href: "#vcnavigationsm-props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcNavigationSm Props "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcnavigationsm-props"
    })]),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcnavigationsm-slots",
    tabindex: "-1",
    content: "VcNavigationSm Slots",
    href: "#vcnavigationsm-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcNavigationSm Slots "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcnavigationsm-slots"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcnavigationsm-events",
    tabindex: "-1",
    content: "VcNavigationSm Events",
    href: "#vcnavigationsm-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcNavigationSm Events "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcnavigationsm-events"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcnavigationsm-methods",
    tabindex: "-1",
    content: "VcNavigationSm Methods",
    href: "#vcnavigationsm-methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcNavigationSm Methods "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcnavigationsm-methods"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccompasssm",
    tabindex: "-1",
    content: "VcCompassSm",
    href: "#vccompasssm",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcCompassSm "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccompasssm"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccompasssm-props",
    tabindex: "-1",
    content: "VcCompassSm Props",
    href: "#vccompasssm-props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcCompassSm Props "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccompasssm-props"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccompasssm-events",
    tabindex: "-1",
    content: "VcCompassSm Events",
    href: "#vccompasssm-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcCompassSm Events "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccompasssm-events"
    })]),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccompasssm-methods",
    tabindex: "-1",
    content: "VcCompassSm Methods",
    href: "#vccompasssm-methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcCompassSm Methods "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccompasssm-methods"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vczoomcontrolsm",
    tabindex: "-1",
    content: "VcZoomControlSm",
    href: "#vczoomcontrolsm",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcZoomControlSm "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vczoomcontrolsm"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vczoomcontrolsm-props",
    tabindex: "-1",
    content: "VcZoomControlSm Props",
    href: "#vczoomcontrolsm-props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcZoomControlSm Props "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vczoomcontrolsm-props"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vczoomcontrolsm-events",
    tabindex: "-1",
    content: "VcZoomControlSm Events",
    href: "#vczoomcontrolsm-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcZoomControlSm Events "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vczoomcontrolsm-events"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vczoomcontrolsm-methods",
    tabindex: "-1",
    content: "VcZoomControlSm Methods",
    href: "#vczoomcontrolsm-methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcZoomControlSm Methods "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vczoomcontrolsm-methods"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/controls/vc-navigation-sm.md?vue&type=template&id=1c56520e

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/controls/vc-navigation-sm.md?vue&type=script&lang=ts

/* harmony default export */ var vc_navigation_smvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;
      function render(_ctx, _cache) {
        const _component_vc_navigation_sm = _resolveComponent("vc-navigation-sm");
        const _component_vc_compass_sm = _resolveComponent("vc-compass-sm");
        const _component_vc_zoom_control_sm = _resolveComponent("vc-zoom-control-sm");
        const _component_vc_viewer = _resolveComponent("vc-viewer");
        const _component_el_button = _resolveComponent("el-button");
        const _component_el_row = _resolveComponent("el-row");
        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_navigation_sm, {
              onZoomEvt: _ctx.onNavigationEvt,
              onCompassEvt: _ctx.onNavigationEvt,
              ref: "navigation"
            }, null, 8, ["onZoomEvt", "onCompassEvt"]), _createVNode(_component_vc_navigation_sm, {
              position: "left",
              "compass-opts": {
                autoHidden: false
              },
              "zoom-opts": {
                autoHidden: false
              }
            }), _createVNode(_component_vc_compass_sm, {
              "auto-hidden": false,
              position: "bottom",
              offset: [200, 20]
            }), _createVNode(_component_vc_compass_sm, {
              position: "bottom",
              offset: [-200, 20]
            }), _createVNode(_component_vc_zoom_control_sm, {
              position: "bottom",
              offset: [0, 50]
            })]),
            _: 1
          }), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_createTextVNode("Unload")]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_createTextVNode("Load")]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_createTextVNode("Reload")]),
              _: 1
            }, 8, ["onClick"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }
      const democomponentExport = {
        methods: {
          load() {
            this.$refs.navigation.load();
          },
          reload() {
            this.$refs.navigation.reload();
          },
          unload() {
            this.$refs.navigation.unload();
          },
          onNavigationEvt(e) {
            console.log(e);
          }
        }
      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/controls/vc-navigation-sm.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/controls/vc-navigation-sm.md



vc_navigation_smvue_type_script_lang_ts.render = vc_navigation_smvue_type_template_id_1c56520e_render

/* harmony default export */ var vc_navigation_sm = __webpack_exports__["default"] = (vc_navigation_smvue_type_script_lang_ts);

/***/ })

}]);