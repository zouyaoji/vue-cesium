(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/controls/vc-navigation.md?vue&type=template&id=36730202

const vc_navigationvue_type_template_id_36730202_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_navigationvue_type_template_id_36730202_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcNavigation ");

const vc_navigationvue_type_template_id_36730202_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>Navigation components, including compass, zoom, other floating buttons, position and distance scale toolbar controls. It is composed of <code>vc-compass</code>, <code>vc-zoom-control</code>, <code>vc-print</code>, <code>vc-mylocation</code>, <code>vc-status-bar</code>, and <code>vc-distance-legend</code>.</p><p><strong>Note:</strong> Style files need to be imported: <code>import &#39;vue-cesium/dist/index.css&#39;;</code></p>", 2);

const _hoisted_5 = {
  class: "tip"
};

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Tip: The navigation component has been refactored in version 3.0. It is now a collection component and now supports custom styles, including icons, sizes, color positions, etc. The icon currently uses Unicode and does not support multi-color. If you need to support multi-color, please refer to the method of using Symbol introduced by Alibaba Cloud iconfont: ");

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Portal");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcNavigation component.", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Just mount the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-navigation"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag as a subcomponent of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer sceneModePicker>\n    <vc-navigation ref=\"navigation\" :offset=\"[35, 35]\"></vc-navigation>\n    <!-- custom style -->\n    <vc-navigation\n      :position=\"position\"\n      :offset=\"offset\"\n      :compassOpts=\"compassOpts\"\n      :zoomOpts=\"zoomOpts\"\n      :locationOpts=\"locationOpts\"\n      :otherOpts=\"otherOpts\"\n      @compassEvt=\"onNavigationEvt\"\n      @zoomEvt=\"onNavigationEvt\"\n      @printEvt=\"onNavigationEvt\"\n      @locationEvt=\"onNavigationEvt\"\n      @statusBarEvt=\"onNavigationEvt\"\n      @distanceLegendEvt=\"onNavigationEvt\"\n    >\n    </vc-navigation>\n    <vc-layer-imagery>\n      <vc-imagery-provider-osm></vc-imagery-provider-osm>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n<script>\n  export default {\n    data() {\n      return {\n        position: 'top-left',\n        offset: [10, 80],\n        compassOpts: {\n          enableCompassOuterRing: true,\n          outerOptions: {\n            icon: 'svguse:#vc-icons-compass-outer', // svg 加载方式\n            size: '120px'\n          },\n          innerOptions: {\n            icon: 'fa fa-compass',\n            size: '24px',\n            color: '#3f4854',\n            background: '#fff'\n          },\n          markerOptions: {\n            size: '120px',\n            color: 'yellow'\n          }\n        },\n        zoomOpts: {\n          background: '#1976D2',\n          direction: 'horizontal'\n        },\n        locationOpts: {\n          color: 'red'\n        },\n        otherOpts: false\n        // otherOpts: {\n        //   position: 'bottom-right',\n        //   offset: [2, 3],\n        //   statusBarOpts:  // Same as vc-status-bar\n        //   distancelegendOpts: // Same as vc-distance-legend\n        // }\n      }\n    },\n    mounted() {\n      // For debugging only, open the browser console and use vm to get the attribute modification in data.\n      // such as vm.offset = [0, 0] or vm.offset[0] = 100\n      // You can even add an attribute that is not initialized\n      // vm.zoomOpts.zoomOutOptions = {size: '40px'}\n      window.vm = this\n    },\n    methods: {\n      load() {\n        this.$refs.navigation.load()\n      },\n      reload() {\n        this.$refs.navigation.reload()\n      },\n      unload() {\n        this.$refs.navigation.unload()\n      },\n      onNavigationEvt(e) {\n        console.log(e)\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Extended usage ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>Customize navigation components as needed. The available components are: <code>vc-compass</code>, <code>vc-zoom-control</code>, <code>vc-print</code>, <code>vc-mylocation</code>, <code>vc-status-bar</code>, <code>vc-distance-legend</code>.</p>", 1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Customize each navigation component as needed")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-compass\n      position=\"left\"\n      :outerOptions=\"{icon: 'svguse:#vc-icons-compass-outer', size: '250px'}\"\n      :innerOptions=\"{icon: 'fa fa-compass', size: '60px', background: 'transparent', color: '#009688'}\"\n    ></vc-compass>\n    <vc-compass position=\"top\" :outerOptions=\"{icon: 'svguse:#vc-icons-qq'}\"></vc-compass>\n    <vc-compass\n      position=\"top-right\"\n      :outerOptions=\"{icon: 'fa fa-circle-o-notch'}\"\n      :innerOptions=\"{icon: 'fa fa-circle', background: 'transparent'}\"\n    ></vc-compass>\n    <vc-compass position=\"right\" :enableCompassOuterRing=\"false\"></vc-compass>\n    <vc-zoom-control\n      position=\"bottom\"\n      direction=\"horizontal\"\n      :offset=\"[0, 30]\"\n      :zoomResetOptions=\"{size: '48px', color: '#21BA45'}\"\n    ></vc-zoom-control>\n    <vc-zoom-control position=\"bottom\" :enableResetButton=\"false\" borderRadius=\"0\" :offset=\"[0, 120]\"></vc-zoom-control>\n    <vc-print position=\"bottom-right\" downloadAutomatically></vc-print>\n    <vc-print\n      position=\"bottom-right\"\n      :offset=\"[40, 60]\"\n      :showPrintView=\"false\"\n      printAutomatically\n      size=\"28px\"\n      :round=\"false\"\n      label=\"Print/Share\"\n      background=\"#31CCEC\"\n      icon=\"fa fa-print\"\n    ></vc-print>\n    <vc-my-location position=\"top-left\" color=\"#C10015\"></vc-my-location>\n    <vc-my-location color=\"#9C27B0\" position=\"top-left\" :offset=\"[0, 60]\" label=\"Location\" stack :round=\"false\" background=\"#F2C037\"></vc-my-location>\n    <!-- custom API -->\n    <vc-my-location position=\"top-left\" :offset=\"[60, 0]\" :customAPI=\"() => ({lng: 108, lat: 32})\"></vc-my-location>\n    <vc-status-bar position=\"bottom\"></vc-status-bar>\n    <vc-status-bar position=\"bottom\" :offset=\"[300, 35]\" :showCameraInfo=\"false\" :showPerformanceInfo=\"false\"></vc-status-bar>\n    <vc-status-bar position=\"bottom\" :offset=\"[-300, 35]\" :showCameraInfo=\"false\" :showMouseInfo=\"false\"></vc-status-bar>\n    <vc-status-bar position=\"top-left\" :offset=\"[120, 3]\" :showMouseInfo=\"false\" :showPerformanceInfo=\"false\"></vc-status-bar>\n    <vc-distance-legend position=\"bottom-left\" :offset=\"[5, 70]\" background=\"#26A69A\" barBackground=\"#F2C037\" :width=\"80\"></vc-distance-legend>\n    <vc-distance-legend position=\"bottom-left\" :offset=\"[5, 35]\"></vc-distance-legend>\n  </vc-viewer>\n</el-row>\n")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcNavigation Props ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> Specify the position of the component.</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> Specify the offset of the component.</td><td></td></tr><tr><td>compassOpts</td><td>Object|false</td><td>Same as <code>VcCompass</code></td><td><code>optional</code> Specify the compass options of the component. false means no display.</td><td></td></tr><tr><td>zoomOpts</td><td>Object|false</td><td>Same as <code>VcZoomControl</code></td><td><code>optional</code> Specify the zoom options of the component. false means no display.</td><td></td></tr><tr><td>printOpts</td><td>Object|false</td><td>Same as <code>VcPrint</code></td><td><code>optional</code> Specify the print options of the component. false means no display.</td><td></td></tr><tr><td>locationOpts</td><td>Object|false</td><td>Same as <code>VcMyLocation</code></td><td><code>optional</code> Specify the location options of the component. false means no display.</td><td></td></tr><tr><td>otherOpts</td><td>Object|false</td><td></td><td><code>optional</code> Specify the other controls options of the component. false means no display.</td><td></td></tr></tbody></table><div class=\"tip\"><p>Tip: For other controls (position bar and distance scale bar, regarded as a whole), the position is not controlled by VcNavigation. Default parameters:</p><pre class=\"example-code\"><code class=\"hljs\">otherOpts: {\n  position: &#39;botttom-right&#39;,\n  offset:[2, 3],\n  statusBarOpts: {}, // Same as VcStatusBar\n  distancelegendOpts: {} // Same as VcDistanceLegend\n}\n</code><span class=\"lang-mark\"></span></pre></div>", 2);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcNavigation Events ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>zoomEvt</td><td>{camera, status, target, type}</td><td>Triggers when the zoom control is operated.</td></tr><tr><td>compassEvt</td><td>{camera, status, target, type}</td><td>Triggers when the compass control is operated.</td></tr><tr><td>locationEvt</td><td>{detail, entity, position, type}</td><td>Triggers when the positioning control is operated.</td></tr><tr><td>printEvt</td><td>{image, status, type}</td><td>Triggers when the print control is operated.</td></tr><tr><td>statusBarEvt</td><td>{cameraInfo, mouseCoordsInfo, performanceInfo, status, type}</td><td>Triggers when the related parameters of the position control change.</td></tr><tr><td>distanceLegendEvt</td><td>{distance,status,type}</td><td>Triggers when the distance scale changes.</td></tr><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table>", 1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcNavigation Slots ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Subtags")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "This is where vc-navigation sub tags content goes."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-compass/vc-zoom-control/vc-print/vc-my-location/vc-location-bar/vc-distance-legend")])])], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCompass ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Compass component.", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCompass Props ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> Specify the position of the component.</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> Specifies the position-based offset of the compass.</td><td></td></tr><tr><td>enableCompassOuterRing</td><td>String</td><td><code>true</code></td><td><code>optional</code> Specify whether the outer ring of the compass can be operated.</td><td></td></tr><tr><td>duration</td><td>Number</td><td><code>1.5</code></td><td><code>optional</code> Specify the flight time to restore the pitch angle, in seconds.</td><td></td></tr><tr><td>outerOptions</td><td>Object</td><td></td><td><code>optional</code> Specify the parameters of the compass outer ring.</td><td></td></tr><tr><td>innerOptions</td><td>Object</td><td></td><td><code>optional</code> Specify the parameters of the inner circle of the compass.</td><td></td></tr><tr><td>markerOptions</td><td>Object</td><td></td><td><code>optional</code> Specify the parameters of the maker when the compass rotates.</td><td></td></tr></tbody></table><div class=\"tip\"><p>Tips <code>outerOptions</code>, <code>innerOptions</code>, <code>markerOptions</code> default parameters:</p></div><div class=\"tipflex\"><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// outerOptions</span>\n{\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-compass-outer&#39;</span>, <span class=\"hljs-comment\">// Icon name</span>\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;96px&#39;</span>,                   <span class=\"hljs-comment\">// Outer ring size</span>\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#3f4854&#39;</span>,               <span class=\"hljs-comment\">// Outer ring color</span>\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,      <span class=\"hljs-comment\">// Outer ring background</span>\n  <span class=\"hljs-attr\">tooltip</span>: {                      <span class=\"hljs-comment\">// false means not to display</span>\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,                  <span class=\"hljs-comment\">// How long does the mouse hover show the tooltip message</span>\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,      <span class=\"hljs-comment\">// anchor of the tooltip</span>\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]               <span class=\"hljs-comment\">// offset of the tooltip</span>\n  }\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// innerOptions</span>\n{\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-compass-outer&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;96px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#3f4854&#39;</span>,\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]\n  }\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// markerOptions</span>\n{\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-compass-rotation-marker&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;96px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1976D2&#39;</span>\n}\n</code><span class=\"lang-mark\">js</span></pre></div>", 3);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCompass Events ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>parameters</th><th>Description</th></tr></thead><tbody><tr><td>compassEvt</td><td>{camera, status, target, type}</td><td>Triggers when the compass control is operated.</td></tr><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table>", 1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcZoomControl Props ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> Specify the position of the component.</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> Specifies the offset of the zoom control.</td><td></td></tr><tr><td>enableResetButton</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether to enable the reset button.</td><td></td></tr><tr><td>zoomAmount</td><td>Number</td><td><code>2</code></td><td><code>optional</code> Specify the zoom amount of zoom in and zoom out.</td><td></td></tr><tr><td>duration</td><td>String</td><td><code>0.5</code></td><td><code>optional</code> Specify the time of the zoom-in and zoom-out process, in seconds.</td><td></td></tr><tr><td>durationReset</td><td>Number</td><td><code>1.5</code></td><td><code>optional</code> Specify the time to reset to the default camera position, in seconds.</td><td></td></tr><tr><td>defaultResetView</td><td>Object</td><td></td><td><code>optional</code> Specify where to reset the camera.</td><td></td></tr><tr><td>overrideViewerCamera</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Specify whether to override the <code>camera</code> attribute on the <code>vc-viewer</code> during initialization.</td><td></td></tr><tr><td>background</td><td>String</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> Specifies the background of the zoom control.</td><td></td></tr><tr><td>border</td><td>String</td><td><code>&#39;solid 1px rgba(255, 255, 255, 0.2)&#39;</code></td><td><code>optional</code> Specifies the border of the zoom control.</td><td></td></tr><tr><td>borderRadius</td><td>String</td><td><code>&#39;100px&#39;</code></td><td><code>optional</code> Specify the rounded corners of the zoom control border.</td><td></td></tr><tr><td>direction</td><td>String</td><td><code>&#39;vertical&#39;</code></td><td><code>optional</code> Specify the direction of the zoom control. Optional <code>&#39;vertical&#39;,&#39;horizontal&#39;</code></td><td></td></tr><tr><td>zoomInOptions</td><td>Object</td><td></td><td><code>optional</code> Specify the zoom button parameters.</td><td></td></tr><tr><td>zoomOutOptions</td><td>Object</td><td></td><td><code>optional</code> Specify the zoom out button parameters.</td><td></td></tr><tr><td>zoomResetOptions</td><td>Object</td><td></td><td><code>optional</code> Specify the reset button parameters.</td><td></td></tr></tbody></table><div class=\"tip\"><p>Tips: <code>durationReset</code>, <code>zoomInOptions</code>, <code>zoomOutOptions</code>, <code>zoomResetOptions</code> default parameters:</p></div><div class=\"tipflex\"><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// defaultResetView</span>\n{\n  <span class=\"hljs-attr\">position</span>: {\n    <span class=\"hljs-attr\">lng</span>: <span class=\"hljs-number\">105</span>,\n    <span class=\"hljs-attr\">lat</span>: <span class=\"hljs-number\">30</span>,\n    <span class=\"hljs-attr\">height</span>: <span class=\"hljs-number\">19059568.5</span>\n  }\n}\n<span class=\"hljs-comment\">// structure</span>\n{\n  position?: {\n    <span class=\"hljs-attr\">lng</span>: number,\n    <span class=\"hljs-attr\">lat</span>: number,\n    <span class=\"hljs-attr\">height</span>: number\n  } | [lng, lat, height]\n  rectange?: [west,south,east,north] | {west,south,east,north}\n  <span class=\"hljs-attr\">heading</span>: number\n  <span class=\"hljs-attr\">pitch</span>: number\n  <span class=\"hljs-attr\">roll</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// zoomInOptions</span>\n{\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-zoom-in&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,\n  <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-literal\">undefined</span>,\n  <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">500</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]\n  }\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// zoomResetOptions</span>\n{\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-reset&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,\n  <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-literal\">undefined</span>,\n  <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">500</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]\n  }\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// zoomOutOptions</span>\n{\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-zoom-out&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,\n  <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-literal\">undefined</span>,\n  <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">500</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]\n  }\n}\n</code><span class=\"lang-mark\">js</span></pre></div>", 3);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcZoomControl Events ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>zoomEvt</td><td>{camera, status, target, type}</td><td>Triggers when the zoom control is operated.</td></tr><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table>", 1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPrint Props ");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> Specify the position of the component.</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> Specifies the offset of the print control. (Valid when used independently)</td><td></td></tr><tr><td>showCredit</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether to display the copyright information of the loaded data when printing pictures.</td><td></td></tr><tr><td>showPrintView</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether to display the print preview.</td><td></td></tr><tr><td>printAutomatically</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Specify whether to print automatically. Need to set showPrintView to false.</td><td></td></tr><tr><td>downloadAutomatically</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Specify whether to download the printed pictures.</td><td></td></tr><tr><td>icon</td><td>String</td><td><code>&#39;vc-icons-capture&#39;</code></td><td><code>optional</code> Specify the print button icon.</td><td></td></tr><tr><td>size</td><td>String</td><td><code>&#39;24px&#39;</code></td><td><code>optional</code> Specify the size of the print button.</td><td></td></tr><tr><td>color</td><td>String</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> Specify the color of the print button.</td><td></td></tr><tr><td>background</td><td>String</td><td><code>&#39;#fff&#39;</code></td><td><code>optional</code> Specify the background of the print button.</td><td></td></tr><tr><td>round</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the print button is displayed in a circle.</td><td></td></tr><tr><td>flat</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Specify whether the print button is in normal style, without background and click effect.</td><td></td></tr><tr><td>label</td><td>String</td><td></td><td><code>optional</code> Specify the text of the print button.</td><td></td></tr><tr><td>stack</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Specify whether the print buttons are displayed stacked.</td><td></td></tr><tr><td>tooltip</td><td>Object</td><td></td><td><code>optional</code> Specify the tooltip parameters of the print button.</td><td></td></tr></tbody></table>", 1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPrint Events ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>printEvt</td><td>{image, status,type}</td><td>Triggers when the print control is operated.</td></tr><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table>", 1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcMyLocation Props ");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> Specify the position of the component.</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> Specifies the offset of the positioning button based on the position.</td><td></td></tr><tr><td>geolocation</td><td>Object</td><td></td><td><code>optional</code> Specify the browser geolocation positioning parameters.</td><td></td></tr><tr><td>id</td><td>String</td><td></td><td><code>optional</code> Specify the id of the loading point after the positioning is successful.</td><td></td></tr><tr><td>pointColor</td><td>Array|Object|String</td><td></td><td><code>optional</code> Specify the color of the loading point after the positioning is successful.</td><td></td></tr><tr><td>pixelSize</td><td>Number</td><td><code>12.5</code></td><td><code>optional</code> Specify the pixel size of the loading point after the positioning is successful.</td><td></td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>3</code></td><td><code>optional</code> Specify the outline width of the loading point after the positioning is successful</td><td></td></tr><tr><td>outlineColor</td><td>Array|Object|String</td><td><code>&#39;#ffffff&#39;</code></td><td><code>optional</code> Specify the outline border of the loading point after the positioning is successful</td><td></td></tr><tr><td>level</td><td>Number</td><td><code>6</code></td><td><code>optional</code> Specify the sampling level when the altitude is automatically recognized based on the terrain after the positioning is successful.</td><td></td></tr><tr><td>duration</td><td>Number</td><td><code>3</code></td><td><code>optional</code> Specify the flight time after successful positioning, in seconds.</td><td></td></tr><tr><td>customAPI</td><td>Function</td><td></td><td><code>optional</code> Specify a custom API for positioning.</td><td></td></tr><tr><td>description</td><td>Function</td><td></td><td><code>optional</code> Specify the method of customizing the description text of the point after successful positioning.</td><td></td></tr><tr><td>icon</td><td>String</td><td><code>vc-icons-geolocation</code></td><td><code>optional</code> Specify the positioning button icon.</td><td></td></tr><tr><td>size</td><td>String</td><td><code>&#39;24px&#39;</code></td><td><code>optional</code> Specify the positioning button size.</td><td></td></tr><tr><td>color</td><td>String</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> Specify the positioning button color.</td><td></td></tr><tr><td>background</td><td>String</td><td><code>&#39;#fff&#39;</code></td><td><code>optional</code> Specify the positioning button background.</td><td></td></tr><tr><td>round</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the positioning button is displayed in a circle.</td><td></td></tr><tr><td>flat</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Specify whether the positioning button is a normal style, without background, and click effect.</td><td></td></tr><tr><td>label</td><td>String</td><td></td><td><code>optional</code> Specify the positioning button text.</td><td></td></tr><tr><td>stack</td><td>Boolean</td><td></td><td><code>optional</code> Specify whether the positioning buttons are displayed stacked.</td><td></td></tr><tr><td>tooltip</td><td>Object</td><td></td><td><code>optional</code> Specify the positioning button prompt information parameter.</td><td></td></tr></tbody></table>", 1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcMyLocation Events ");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>locationEvt</td><td>{detail,entity,position, type}</td><td>Triggers when the positioning button is operated.</td></tr><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table>", 1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcStatusBar Props ");

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> Specify the position of the component.</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> Specifies the position-based offset of the information bar control.</td><td></td></tr><tr><td>gridFileUrl</td><td>String</td><td><code>https://zouyaoji.top/vue-cesium/statics/SampleData/WW15MGH.DAC</code></td><td><code>optional</code> Specify the mouse to pick up the height model, use this to improve the accuracy of the height obtained.</td><td></td></tr><tr><td>color</td><td>String</td><td><code>&#39;#fff&#39;</code></td><td><code>optional</code> Specify the color of the information bar.</td><td></td></tr><tr><td>background</td><td>String</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> Specify the background of the information bar.</td><td></td></tr><tr><td>showCameraInfo</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether to display camera information in the information bar.</td><td></td></tr><tr><td>showMouseInfo</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the information bar displays the location information pointed by the mouse.</td><td></td></tr><tr><td>showPerformanceInfo</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether to display frame rate information in the information bar.</td><td></td></tr><tr><td>tooltip</td><td>Object</td><td></td><td><code>optional</code> Specify the prompt information parameters of the information bar.</td><td></td></tr></tbody></table>", 1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcStatusBar Events ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>statusBarEvt</td><td>{cameraInfo, mouseCoordsInfo, performanceInfo, status, type}</td><td>Triggers when the status bar parameter changes.</td></tr><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table>", 1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcDistanceLegend Props ");

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> Specify the position of the component.</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> Specifies the offset of the distance scale control based on the position.</td><td></td></tr><tr><td>color</td><td>String</td><td><code>&#39;#fff&#39;</code></td><td><code>optional</code> Specify the color of the distance scale control.</td><td></td></tr><tr><td>background</td><td>String</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> Specify the distance scale background.</td><td></td></tr><tr><td>width</td><td>Number</td><td><code>100</code></td><td><code>optional</code> Specify the width of the distance scale.</td><td></td></tr><tr><td>barBackground</td><td>String</td><td><code>&#39;#ffffff&#39;</code></td><td><code>optional</code> Specify the color of the horizontal line on the distance scale.</td><td></td></tr></tbody></table>", 1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcDistanceLegend Events ");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>distanceLegendEvt</td><td>{distance,status,type}</td><td>Triggers when the distance scale changes.</td></tr><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table>", 1);

function vc_navigationvue_type_template_id_36730202_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_vue_cesium_demo1 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo1");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_navigationvue_type_template_id_36730202_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcnavigation",
    tabindex: "-1",
    content: "VcNavigation",
    href: "#vcnavigation",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_navigationvue_type_template_id_36730202_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcnavigation"
    })]),
    _: 1
  }), vc_navigationvue_type_template_id_36730202_hoisted_3, Object(vue_esm_browser["createElementVNode"])("div", _hoisted_5, [Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_6, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  })])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "extended-usage",
    tabindex: "-1",
    content: "Extended usage",
    href: "#extended-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#extended-usage"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo1)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_14]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcnavigation-props",
    tabindex: "-1",
    content: "VcNavigation Props",
    href: "#vcnavigation-props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcnavigation-props"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcnavigation-events",
    tabindex: "-1",
    content: "VcNavigation Events",
    href: "#vcnavigation-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcnavigation-events"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcnavigation-slots",
    tabindex: "-1",
    content: "VcNavigation Slots",
    href: "#vcnavigation-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcnavigation-slots"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccompass",
    tabindex: "-1",
    content: "VcCompass",
    href: "#vccompass",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccompass"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccompass-props",
    tabindex: "-1",
    content: "VcCompass Props",
    href: "#vccompass-props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_25, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccompass-props"
    })]),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccompass-events",
    tabindex: "-1",
    content: "VcCompass Events",
    href: "#vccompass-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccompass-events"
    })]),
    _: 1
  }), _hoisted_30, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vczoomcontrol-props",
    tabindex: "-1",
    content: "VcZoomControl Props",
    href: "#vczoomcontrol-props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_31, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vczoomcontrol-props"
    })]),
    _: 1
  }), _hoisted_32, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vczoomcontrol-events",
    tabindex: "-1",
    content: "VcZoomControl Events",
    href: "#vczoomcontrol-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_35, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vczoomcontrol-events"
    })]),
    _: 1
  }), _hoisted_36, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcprint-props",
    tabindex: "-1",
    content: "VcPrint Props",
    href: "#vcprint-props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_37, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcprint-props"
    })]),
    _: 1
  }), _hoisted_38, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcprint-events",
    tabindex: "-1",
    content: "VcPrint Events",
    href: "#vcprint-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_39, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcprint-events"
    })]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcmylocation-props",
    tabindex: "-1",
    content: "VcMyLocation Props",
    href: "#vcmylocation-props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_41, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcmylocation-props"
    })]),
    _: 1
  }), _hoisted_42, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcmylocation-events",
    tabindex: "-1",
    content: "VcMyLocation Events",
    href: "#vcmylocation-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_43, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcmylocation-events"
    })]),
    _: 1
  }), _hoisted_44, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcstatusbar-props",
    tabindex: "-1",
    content: "VcStatusBar Props",
    href: "#vcstatusbar-props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_45, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcstatusbar-props"
    })]),
    _: 1
  }), _hoisted_46, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcstatusbar-events",
    tabindex: "-1",
    content: "VcStatusBar Events",
    href: "#vcstatusbar-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_47, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcstatusbar-events"
    })]),
    _: 1
  }), _hoisted_48, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcdistancelegend-props",
    tabindex: "-1",
    content: "VcDistanceLegend Props",
    href: "#vcdistancelegend-props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_49, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcdistancelegend-props"
    })]),
    _: 1
  }), _hoisted_50, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcdistancelegend-events",
    tabindex: "-1",
    content: "VcDistanceLegend Events",
    href: "#vcdistancelegend-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_51, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcdistancelegend-events"
    })]),
    _: 1
  }), _hoisted_52, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/controls/vc-navigation.md?vue&type=template&id=36730202

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/controls/vc-navigation.md?vue&type=script&lang=ts

/* harmony default export */ var vc_navigationvue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Unload");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        const _component_vc_navigation = _resolveComponent("vc-navigation");

        const _component_vc_imagery_provider_osm = _resolveComponent("vc-imagery-provider-osm");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            sceneModePicker: ""
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_navigation, {
              ref: "navigation",
              offset: [35, 35]
            }, null, 512), _createVNode(_component_vc_navigation, {
              position: _ctx.position,
              offset: _ctx.offset,
              compassOpts: _ctx.compassOpts,
              zoomOpts: _ctx.zoomOpts,
              locationOpts: _ctx.locationOpts,
              otherOpts: _ctx.otherOpts,
              onCompassEvt: _ctx.onNavigationEvt,
              onZoomEvt: _ctx.onNavigationEvt,
              onPrintEvt: _ctx.onNavigationEvt,
              onLocationEvt: _ctx.onNavigationEvt,
              onStatusBarEvt: _ctx.onNavigationEvt,
              onDistanceLegendEvt: _ctx.onNavigationEvt
            }, null, 8, ["position", "offset", "compassOpts", "zoomOpts", "locationOpts", "otherOpts", "onCompassEvt", "onZoomEvt", "onPrintEvt", "onLocationEvt", "onStatusBarEvt", "onDistanceLegendEvt"]), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_osm)]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }, 8, ["onClick"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const democomponentExport = {
        data() {
          return {
            position: 'top-left',
            offset: [10, 80],
            compassOpts: {
              enableCompassOuterRing: true,
              outerOptions: {
                icon: 'svguse:#vc-icons-compass-outer',
                // svg 加载方式
                size: '120px'
              },
              innerOptions: {
                icon: 'fa fa-compass',
                size: '24px',
                color: '#3f4854',
                background: '#fff'
              },
              markerOptions: {
                size: '120px',
                color: 'yellow'
              }
            },
            zoomOpts: {
              background: '#1976D2',
              direction: 'horizontal'
            },
            locationOpts: {
              color: 'red'
            },
            otherOpts: false // otherOpts: {
            //   position: 'bottom-right',
            //   offset: [2, 3],
            //   statusBarOpts:  // Same as vc-status-bar
            //   distancelegendOpts: // Same as vc-distance-legend
            // }

          };
        },

        mounted() {
          // For debugging only, open the browser console and use vm to get the attribute modification in data.
          // such as vm.offset = [0, 0] or vm.offset[0] = 100
          // You can even add an attribute that is not initialized
          // vm.zoomOpts.zoomOutOptions = {size: '40px'}
          window.vm = this;
        },

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
    }(),
    "vue-cesium-demo1": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;

      function render(_ctx, _cache) {
        const _component_vc_compass = _resolveComponent("vc-compass");

        const _component_vc_zoom_control = _resolveComponent("vc-zoom-control");

        const _component_vc_print = _resolveComponent("vc-print");

        const _component_vc_my_location = _resolveComponent("vc-my-location");

        const _component_vc_status_bar = _resolveComponent("vc-status-bar");

        const _component_vc_distance_legend = _resolveComponent("vc-distance-legend");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_compass, {
              position: "left",
              outerOptions: {
                icon: 'svguse:#vc-icons-compass-outer',
                size: '250px'
              },
              innerOptions: {
                icon: 'fa fa-compass',
                size: '60px',
                background: 'transparent',
                color: '#009688'
              }
            }), _createVNode(_component_vc_compass, {
              position: "top",
              outerOptions: {
                icon: 'svguse:#vc-icons-qq'
              }
            }), _createVNode(_component_vc_compass, {
              position: "top-right",
              outerOptions: {
                icon: 'fa fa-circle-o-notch'
              },
              innerOptions: {
                icon: 'fa fa-circle',
                background: 'transparent'
              }
            }), _createVNode(_component_vc_compass, {
              position: "right",
              enableCompassOuterRing: false
            }), _createVNode(_component_vc_zoom_control, {
              position: "bottom",
              direction: "horizontal",
              offset: [0, 30],
              zoomResetOptions: {
                size: '48px',
                color: '#21BA45'
              }
            }), _createVNode(_component_vc_zoom_control, {
              position: "bottom",
              enableResetButton: false,
              borderRadius: "0",
              offset: [0, 120]
            }), _createVNode(_component_vc_print, {
              position: "bottom-right",
              downloadAutomatically: ""
            }), _createVNode(_component_vc_print, {
              position: "bottom-right",
              offset: [40, 60],
              showPrintView: false,
              printAutomatically: "",
              size: "28px",
              round: false,
              label: "Print/Share",
              background: "#31CCEC",
              icon: "fa fa-print"
            }), _createVNode(_component_vc_my_location, {
              position: "top-left",
              color: "#C10015"
            }), _createVNode(_component_vc_my_location, {
              color: "#9C27B0",
              position: "top-left",
              offset: [0, 60],
              label: "Location",
              stack: "",
              round: false,
              background: "#F2C037"
            }), _createVNode(_component_vc_my_location, {
              position: "top-left",
              offset: [60, 0],
              customAPI: () => ({
                lng: 108,
                lat: 32
              })
            }, null, 8, ["customAPI"]), _createVNode(_component_vc_status_bar, {
              position: "bottom"
            }), _createVNode(_component_vc_status_bar, {
              position: "bottom",
              offset: [300, 35],
              showCameraInfo: false,
              showPerformanceInfo: false
            }), _createVNode(_component_vc_status_bar, {
              position: "bottom",
              offset: [-300, 35],
              showCameraInfo: false,
              showMouseInfo: false
            }), _createVNode(_component_vc_status_bar, {
              position: "top-left",
              offset: [120, 3],
              showMouseInfo: false,
              showPerformanceInfo: false
            }), _createVNode(_component_vc_distance_legend, {
              position: "bottom-left",
              offset: [5, 70],
              background: "#26A69A",
              barBackground: "#F2C037",
              width: 80
            }), _createVNode(_component_vc_distance_legend, {
              position: "bottom-left",
              offset: [5, 35]
            })]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/controls/vc-navigation.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/controls/vc-navigation.md



vc_navigationvue_type_script_lang_ts.render = vc_navigationvue_type_template_id_36730202_render

/* harmony default export */ var vc_navigation = __webpack_exports__["default"] = (vc_navigationvue_type_script_lang_ts);

/***/ })

}]);