(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/controls/vc-navigation.md?vue&type=template&id=bd3e0cbc

var vc_navigationvue_type_template_id_bd3e0cbc_hoisted_1 = {
  class: "content element-doc"
};

var vc_navigationvue_type_template_id_bd3e0cbc_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcnavigation\"><a class=\"header-anchor\" href=\"#vcnavigation\">¶</a> VcNavigation</h2><p>Navigation components, including compass, zoom, other floating buttons, position and distance scale toolbar controls. It is composed of <code>vc-compass</code>, <code>vc-zoom-control</code>, <code>vc-print</code>, <code>vc-mylocation</code>, <code>vc-status-bar</code>, and <code>vc-distance-legend</code>.</p><p><strong>Note:</strong> Style files need to be imported: <code>import&#39;vue-cesium/lib/theme-default/index.css&#39;;</code></p><div class=\"tip\"><p>Tip: The navigation component has been refactored in version 3.0. It is now a collection component and now supports custom styles, including icons, sizes, color positions, etc. The icon currently uses Unicode and does not support multi-color. If you need to support multi-color, please refer to the method of using Symbol introduced by Alibaba Cloud iconfont: <a href=\"https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&amp;helptype=code\">Portal</a></p></div><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of navigation components.</p>", 6);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Just mount the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-navigation"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tag as a subcomponent of "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(".")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-navigation ref=\"navigation\"></vc-navigation>\n    <!-- custom style -->\n    <vc-navigation\n      :position=\"position\"\n      :offset=\"offset\"\n      :compassOpts=\"compassOpts\"\n      :zoomOpts=\"zoomOpts\"\n      :locationOpts=\"locationOpts\"\n      :otherOpts=\"otherOpts\"\n      @compassEvt=\"onNavigationEvt\"\n      @zoomEvt=\"onNavigationEvt\"\n      @printEvt=\"onNavigationEvt\"\n      @locationEvt=\"onNavigationEvt\"\n      @statusBarEvt=\"onNavigationEvt\"\n      @distanceLegendEvt=\"onNavigationEvt\"\n    >\n    </vc-navigation>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n<script>\n  export default {\n    data() {\n      return {\n        position: 'top-left',\n        offset: [10, 80],\n        compassOpts: {\n          enableCompassOuterRing: true,\n          outerOptions: {\n            name: 'svguse:#vc-icons-compass-outer', // svg 加载方式\n            size: '120px'\n          },\n          innerOptions: {\n            name: 'fa fa-compass',\n            size: '24px',\n            color: '#3f4854',\n            background: '#fff'\n          },\n          markerOptions: {\n            size: '120px',\n            color: 'yellow'\n          }\n        },\n        zoomOpts: {\n          background: '#1976D2',\n          direction: 'horizontal'\n        },\n        locationOpts: {\n          color: 'red'\n        },\n        otherOpts: false\n        // otherOpts: {\n        //   position: 'bottom-right',\n        //   offset: [2, 3],\n        //   statusBarOpts:  // Same as vc-status-bar\n        //   distancelegendOpts: // Same as vc-distance-legend\n        // }\n      }\n    },\n    mounted() {\n      // For debugging only, open the browser console and use vm to get the attribute modification in data.\n      // such as vm.offset = [0, 0] or vm.offset[0] = 100\n      // You can even add an attribute that is not initialized\n      // vm.zoomOpts.zoomOutOptions = {size: '40px'}\n      window.vm = this\n    },\n    methods: {\n      load() {\n        this.$refs.navigation.load()\n      },\n      reload() {\n        this.$refs.navigation.reload()\n      },\n      unload() {\n        this.$refs.navigation.unload()\n      },\n      onNavigationEvt(e) {\n        console.log(e)\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"extended-usage\"><a class=\"header-anchor\" href=\"#extended-usage\">¶</a> Extended usage</h3><p>Customize navigation components as needed. The available components are: <code>vc-compass</code>, <code>vc-zoom-control</code>, <code>vc-print</code>, <code>vc-mylocation</code>, <code>vc-status-bar</code>, <code>vc-distance-legend</code>.</p>", 2);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "Customize each navigation component as needed")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-compass\n      position=\"left\"\n      :outerOptions=\"{name: 'svguse:#vc-icons-compass-outer', size: '250px'}\"\n      :innerOptions=\"{name: 'fa fa-compass', size: '60px', background: 'transparent', color: '#009688'}\"\n    ></vc-compass>\n    <vc-compass position=\"top\" :outerOptions=\"{name: 'svguse:#vc-icons-qq'}\"></vc-compass>\n    <vc-compass\n      position=\"top-right\"\n      :outerOptions=\"{name: 'fa fa-circle-o-notch'}\"\n      :innerOptions=\"{name: 'fa fa-circle', background: 'transparent'}\"\n    ></vc-compass>\n    <vc-compass position=\"right\" :enableCompassOuterRing=\"false\"></vc-compass>\n    <vc-zoom-control\n      position=\"bottom\"\n      direction=\"horizontal\"\n      :offset=\"[0, 30]\"\n      :zoomResetOptions=\"{size: '48px', color: '#21BA45'}\"\n    ></vc-zoom-control>\n    <vc-zoom-control position=\"bottom\" :enableResetButton=\"false\" borderRadius=\"0\" :offset=\"[0, 120]\"></vc-zoom-control>\n    <vc-print position=\"bottom-right\" downloadAutomatically></vc-print>\n    <vc-print\n      position=\"bottom-right\"\n      :offset=\"[40, 60]\"\n      :showPrintView=\"false\"\n      printAutomatically\n      size=\"28px\"\n      :round=\"false\"\n      label=\"Print/Share\"\n      background=\"#31CCEC\"\n      name=\"fa fa-print\"\n    ></vc-print>\n    <vc-my-location position=\"top-left\" color=\"#C10015\"></vc-my-location>\n    <vc-my-location color=\"#9C27B0\" position=\"top-left\" :offset=\"[0, 60]\" label=\"Location\" stack :round=\"false\" background=\"#F2C037\"></vc-my-location>\n    <!-- custom API -->\n    <vc-my-location position=\"top-left\" :offset=\"[60, 0]\" :customAPI=\"() => ({lng: 108, lat: 32})\"></vc-my-location>\n    <vc-status-bar position=\"bottom\"></vc-status-bar>\n    <vc-status-bar position=\"bottom\" :offset=\"[300, 35]\" :showCameraInfo=\"false\" :showPerformanceInfo=\"false\"></vc-status-bar>\n    <vc-status-bar position=\"bottom\" :offset=\"[-300, 35]\" :showCameraInfo=\"false\" :showMouseInfo=\"false\"></vc-status-bar>\n    <vc-status-bar position=\"top-left\" :offset=\"[120, 3]\" :showMouseInfo=\"false\" :showPerformanceInfo=\"false\"></vc-status-bar>\n    <vc-distance-legend position=\"bottom-left\" :offset=\"[5, 70]\" background=\"#26A69A\" barBackground=\"#F2C037\" :width=\"80\"></vc-distance-legend>\n    <vc-distance-legend position=\"bottom-left\" :offset=\"[5, 35]\"></vc-distance-legend>\n  </vc-viewer>\n</el-row>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"vcnavigation-props\"><a class=\"header-anchor\" href=\"#vcnavigation-props\">¶</a> VcNavigation Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> Specify the position of the component.</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> Specify the offset of the component.</td><td></td></tr><tr><td>compassOpts</td><td>Object|false</td><td>Same as <code>VcCompass</code></td><td><code>optional</code> Specify the compass options of the component. false means no display.</td><td></td></tr><tr><td>zoomOpts</td><td>Object|false</td><td>Same as <code>VcZoomControl</code></td><td><code>optional</code> Specify the zoom options of the component. false means no display.</td><td></td></tr><tr><td>printOpts</td><td>Object|false</td><td>Same as <code>VcPrint</code></td><td><code>optional</code> Specify the print options of the component. false means no display.</td><td></td></tr><tr><td>locationOpts</td><td>Object|false</td><td>Same as <code>VcMyLocation</code></td><td><code>optional</code> Specify the location options of the component. false means no display.</td><td></td></tr><tr><td>otherOpts</td><td>Object|false</td><td></td><td><code>optional</code> Specify the other controls options of the component. false means no display.</td><td></td></tr></tbody></table><div class=\"tip\"><p>Tip: For other controls (position bar and distance scale bar, regarded as a whole), the position is not controlled by VcNavigation. Default parameters:</p><pre><code class=\"hljs\">otherOpts: {\n  position: &#39;botttom-right&#39;,\n  offset:[2, 3],\n  statusBarOpts: {}, // Same as VcStatusBar\n  distancelegendOpts: {} // Same as VcDistanceLegend\n}\n</code></pre></div><h3 id=\"vcnavigation-events\"><a class=\"header-anchor\" href=\"#vcnavigation-events\">¶</a> VcNavigation Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>zoomEvt</td><td>{camera, status, target, type}</td><td>Triggered when the zoom control is operated.</td></tr><tr><td>compassEvt</td><td>{camera, status, target, type}</td><td>Triggered when the compass control is operated.</td></tr><tr><td>locationEvt</td><td>{detail, entity, position, type}</td><td>Triggered when the positioning control is operated.</td></tr><tr><td>printEvt</td><td>{image, status, type}</td><td>Triggered when the print control is operated.</td></tr><tr><td>statusBarEvt</td><td>{cameraInfo, mouseCoordsInfo, performanceInfo, status, type}</td><td>Triggered when the related parameters of the position control change.</td></tr><tr><td>distanceLegendEvt</td><td>{distance,status,type}</td><td>Triggered when the distance scale changes.</td></tr><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggered before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggered when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggered when the cesiumObject is destroyed.</td></tr></tbody></table><h3 id=\"vccompass\"><a class=\"header-anchor\" href=\"#vccompass\">¶</a> VcCompass</h3><p>Compass component.</p><h3 id=\"vccompass-props\"><a class=\"header-anchor\" href=\"#vccompass-props\">¶</a> VcCompass Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> Specify the position of the component.</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> Specifies the position-based offset of the compass.</td><td></td></tr><tr><td>enableCompassOuterRing</td><td>String</td><td><code>true</code></td><td><code>optional</code> Specify whether the outer ring of the compass can be operated.</td><td></td></tr><tr><td>duration</td><td>Number</td><td><code>1.5</code></td><td><code>optional</code> Specify the flight time to restore the pitch angle, in seconds.</td><td></td></tr><tr><td>outerOptions</td><td>Object</td><td></td><td><code>optional</code> Specify the parameters of the compass outer ring.</td><td></td></tr><tr><td>innerOptions</td><td>Object</td><td></td><td><code>optional</code> Specify the parameters of the inner circle of the compass.</td><td></td></tr><tr><td>markerOptions</td><td>Object</td><td></td><td><code>optional</code> Specify the parameters of the maker when the compass rotates.</td><td></td></tr></tbody></table><div class=\"tip\"><p>Tips <code>outerOptions</code>, <code>innerOptions</code>, <code>markerOptions</code> default parameters:</p></div><div class=\"tipflex\"><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// outerOptions</span>\n{\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;vc-icons-compass-outer&#39;</span>, <span class=\"hljs-comment\">// Icon name</span>\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;96px&#39;</span>,                   <span class=\"hljs-comment\">// Outer ring size</span>\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#3f4854&#39;</span>,               <span class=\"hljs-comment\">// Outer ring color</span>\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,      <span class=\"hljs-comment\">// Outer ring background</span>\n  <span class=\"hljs-attr\">tooltip</span>: {                      <span class=\"hljs-comment\">// false means not to display</span>\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,                  <span class=\"hljs-comment\">// How long does the mouse hover show the tooltip message</span>\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,      <span class=\"hljs-comment\">// anchor of the tooltip</span>\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]               <span class=\"hljs-comment\">// offset of the tooltip</span>\n  }\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// innerOptions</span>\n{\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;vc-icons-compass-outer&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;96px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#3f4854&#39;</span>,\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]\n  }\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// markerOptions</span>\n{\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;vc-icons-compass-rotation-marker&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;96px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1976D2&#39;</span>\n}\n</code></pre></div><h3 id=\"vccompass-events\"><a class=\"header-anchor\" href=\"#vccompass-events\">¶</a> VcCompass Events</h3><table><thead><tr><th>Name</th><th>parameters</th><th>Description</th></tr></thead><tbody><tr><td>compassEvt</td><td>{camera, status, target, type}</td><td>Triggered when the compass control is operated.</td></tr><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggered before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggered when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggered when the cesiumObject is destroyed.</td></tr></tbody></table><h3 id=\"vczoomcontrol-props\"><a class=\"header-anchor\" href=\"#vczoomcontrol-props\">¶</a> VcZoomControl Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> Specify the position of the component.</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> Specifies the offset of the zoom control.</td><td></td></tr><tr><td>enableResetButton</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether to enable the reset button.</td><td></td></tr><tr><td>zoomAmount</td><td>Number</td><td><code>2</code></td><td><code>optional</code> Specify the zoom amount of zoom in and zoom out.</td><td></td></tr><tr><td>duration</td><td>String</td><td><code>0.5</code></td><td><code>optional</code> Specify the time of the zoom-in and zoom-out process, in seconds.</td><td></td></tr><tr><td>durationReset</td><td>Number</td><td><code>1.5</code></td><td><code>optional</code> Specify the time to reset to the default camera position, in seconds.</td><td></td></tr><tr><td>defaultResetView</td><td>Object</td><td></td><td><code>optional</code> Specify where to reset the camera.</td><td></td></tr><tr><td>overrideViewerCamera</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Specify whether to override the <code>camera</code> attribute on the <code>vc-viewer</code> during initialization.</td><td></td></tr><tr><td>background</td><td>String</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> Specifies the background of the zoom control.</td><td></td></tr><tr><td>border</td><td>String</td><td><code>&#39;solid 1px rgba(255, 255, 255, 0.2)&#39;</code></td><td><code>optional</code> Specifies the border of the zoom control.</td><td></td></tr><tr><td>borderRadius</td><td>String</td><td><code>&#39;100px&#39;</code></td><td><code>optional</code> Specify the rounded corners of the zoom control border.</td><td></td></tr><tr><td>direction</td><td>String</td><td><code>&#39;vertical&#39;</code></td><td><code>optional</code> Specify the direction of the zoom control. Optional <code>&#39;vertical&#39;,&#39;horizontal&#39;</code></td><td></td></tr><tr><td>zoomInOptions</td><td>Object</td><td></td><td><code>optional</code> Specify the zoom button parameters.</td><td></td></tr><tr><td>zoomOutOptions</td><td>Object</td><td></td><td><code>optional</code> Specify the zoom out button parameters.</td><td></td></tr><tr><td>zoomResetOptions</td><td>Object</td><td></td><td><code>optional</code> Specify the reset button parameters.</td><td></td></tr></tbody></table><div class=\"tip\"><p>Tips: <code>durationReset</code>, <code>zoomInOptions</code>, <code>zoomOutOptions</code>, <code>zoomResetOptions</code> default parameters:</p></div><div class=\"tipflex\"><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// defaultResetView</span>\n{\n  <span class=\"hljs-attr\">position</span>: {\n    <span class=\"hljs-attr\">lng</span>: <span class=\"hljs-number\">105</span>,\n    <span class=\"hljs-attr\">lat</span>: <span class=\"hljs-number\">30</span>,\n    <span class=\"hljs-attr\">height</span>: <span class=\"hljs-number\">19059568.5</span>\n  }\n}\n<span class=\"hljs-comment\">// structure</span>\n{\n  position?: {\n    <span class=\"hljs-attr\">lng</span>: number,\n    <span class=\"hljs-attr\">lat</span>: number,\n    <span class=\"hljs-attr\">height</span>: number\n  } | [lng, lat, height]\n  rectange?: [west,south,east,north] | {west,south,east,north}\n  <span class=\"hljs-attr\">heading</span>: number\n  <span class=\"hljs-attr\">pitch</span>: number\n  <span class=\"hljs-attr\">roll</span>: number\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// zoomInOptions</span>\n{\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;vc-icons-zoom-in&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,\n  <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-literal\">undefined</span>,\n  <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">500</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]\n  }\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// zoomResetOptions</span>\n{\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;vc-icons-reset&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,\n  <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-literal\">undefined</span>,\n  <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">500</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]\n  }\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// zoomOutOptions</span>\n{\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;vc-icons-zoom-out&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,\n  <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-literal\">undefined</span>,\n  <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">500</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]\n  }\n}\n</code></pre></div><h3 id=\"vczoomcontrol-events\"><a class=\"header-anchor\" href=\"#vczoomcontrol-events\">¶</a> VcZoomControl Events</h3><table><thead><tr><th>name</th><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>zoomEvt</td><td>{camera, status, target, type}</td><td>Triggered when the zoom control is operated.</td></tr><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggered before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggered when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggered when the cesiumObject is destroyed.</td></tr></tbody></table><h3 id=\"vcprint-props\"><a class=\"header-anchor\" href=\"#vcprint-props\">¶</a> VcPrint Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> Specify the position of the component.</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> Specifies the offset of the print control. (Valid when used independently)</td><td></td></tr><tr><td>showCredit</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether to display the copyright information of the loaded data when printing pictures.</td><td></td></tr><tr><td>showPrintView</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether to display the print preview.</td><td></td></tr><tr><td>printAutomatically</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Specify whether to print automatically. Need to set showPrintView to false.</td><td></td></tr><tr><td>downloadAutomatically</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Specify whether to download the printed pictures.</td><td></td></tr><tr><td>name</td><td>String</td><td><code>&#39;vc-icons-capture&#39;</code></td><td><code>optional</code> Specify the print button icon.</td><td></td></tr><tr><td>size</td><td>String</td><td><code>&#39;24px&#39;</code></td><td><code>optional</code> Specify the size of the print button.</td><td></td></tr><tr><td>color</td><td>String</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> Specify the color of the print button.</td><td></td></tr><tr><td>background</td><td>String</td><td><code>&#39;#fff&#39;</code></td><td><code>optional</code> Specify the background of the print button.</td><td></td></tr><tr><td>round</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the print button is displayed in a circle.</td><td></td></tr><tr><td>flat</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Specify whether the print button is in normal style, without background and click effect.</td><td></td></tr><tr><td>label</td><td>String</td><td></td><td><code>optional</code> Specify the text of the print button.</td><td></td></tr><tr><td>stack</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Specify whether the print buttons are displayed stacked.</td><td></td></tr><tr><td>tooltip</td><td>Object</td><td></td><td><code>optional</code> Specify the tooltip parameters of the print button.</td><td></td></tr></tbody></table><h3 id=\"vcprint-events\"><a class=\"header-anchor\" href=\"#vcprint-events\">¶</a> VcPrint Events</h3><table><thead><tr><th>name</th><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>printEvt</td><td>{image, status,type}</td><td>Triggered when the print control is operated.</td></tr><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggered before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggered when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggered when the cesiumObject is destroyed.</td></tr></tbody></table><h3 id=\"vcmylocation-props\"><a class=\"header-anchor\" href=\"#vcmylocation-props\">¶</a> VcMyLocation Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> Specify the position of the component.</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> Specifies the offset of the positioning button based on the position.</td><td></td></tr><tr><td>geolocation</td><td>Object</td><td></td><td><code>optional</code> Specify the browser geolocation positioning parameters.</td><td></td></tr><tr><td>id</td><td>String</td><td></td><td><code>optional</code> Specify the id of the loading point after the positioning is successful.</td><td></td></tr><tr><td>pointColor</td><td>Array|Object|String</td><td></td><td><code>optional</code> Specify the color of the loading point after the positioning is successful.</td><td></td></tr><tr><td>pixelSize</td><td>Number</td><td><code>12.5</code></td><td><code>optional</code> Specify the pixel size of the loading point after the positioning is successful.</td><td></td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>3</code></td><td><code>optional</code> Specify the outline width of the loading point after the positioning is successful</td><td></td></tr><tr><td>outlineColor</td><td>Array|Object|String</td><td><code>&#39;#ffffff&#39;</code></td><td><code>optional</code> Specify the outline border of the loading point after the positioning is successful</td><td></td></tr><tr><td>level</td><td>Number</td><td><code>6</code></td><td><code>optional</code> Specify the sampling level when the altitude is automatically recognized based on the terrain after the positioning is successful.</td><td></td></tr><tr><td>duration</td><td>Number</td><td><code>3</code></td><td><code>optional</code> Specify the flight time after successful positioning, in seconds.</td><td></td></tr><tr><td>customAPI</td><td>Function</td><td></td><td><code>optional</code> Specify a custom API for positioning.</td><td></td></tr><tr><td>description</td><td>Function</td><td><code>0.01</code></td><td><code>optional</code> Specify the method of customizing the description text of the point after successful positioning.</td><td></td></tr><tr><td>name</td><td>String</td><td><code>vc-icons-geolocation</code></td><td><code>optional</code> Specify the positioning button icon.</td><td></td></tr><tr><td>size</td><td>String</td><td><code>&#39;24px&#39;</code></td><td><code>optional</code> Specify the positioning button size.</td><td></td></tr><tr><td>color</td><td>String</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> Specify the positioning button color.</td><td></td></tr><tr><td>background</td><td>String</td><td><code>&#39;#fff&#39;</code></td><td><code>optional</code> Specify the positioning button background.</td><td></td></tr><tr><td>round</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the positioning button is displayed in a circle.</td><td></td></tr><tr><td>flat</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Specify whether the positioning button is a normal style, without background, and click effect.</td><td></td></tr><tr><td>label</td><td>String</td><td></td><td><code>optional</code> Specify the positioning button text.</td><td></td></tr><tr><td>stack</td><td>Boolean</td><td></td><td><code>optional</code> Specify whether the positioning buttons are displayed stacked.</td><td></td></tr><tr><td>tooltip</td><td>Object</td><td></td><td><code>optional</code> Specify the positioning button prompt information parameter.</td><td></td></tr></tbody></table><h3 id=\"vcmylocation-events\"><a class=\"header-anchor\" href=\"#vcmylocation-events\">¶</a> VcMyLocation Events</h3><table><thead><tr><th>name</th><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>locationEvt</td><td>{detail,entity,position, type}</td><td>Triggered when the positioning button is operated.</td></tr><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggered before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggered when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggered when the cesiumObject is destroyed.</td></tr></tbody></table><h3 id=\"vcstatusbar-props\"><a class=\"header-anchor\" href=\"#vcstatusbar-props\">¶</a> VcStatusBar Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> Specify the position of the component.</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> Specifies the position-based offset of the information bar control.</td><td></td></tr><tr><td>gridFileUrl</td><td>String</td><td><code>https://zouyaoji.top/vue-cesium/statics/SampleData/WW15MGH.DAC</code></td><td><code>optional</code> Specify the mouse to pick up the height model, use this to improve the accuracy of the height obtained.</td><td></td></tr><tr><td>color</td><td>String</td><td><code>&#39;#fff&#39;</code></td><td><code>optional</code> Specify the color of the information bar.</td><td></td></tr><tr><td>background</td><td>String</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> Specify the background of the information bar.</td><td></td></tr><tr><td>showCameraInfo</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether to display camera information in the information bar.</td><td></td></tr><tr><td>showMouseInfo</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the information bar displays the location information pointed by the mouse.</td><td></td></tr><tr><td>showPerformanceInfo</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether to display frame rate information in the information bar.</td><td></td></tr><tr><td>tooltip</td><td>Object</td><td></td><td><code>optional</code> Specify the prompt information parameters of the information bar.</td><td></td></tr></tbody></table><h3 id=\"vcmylocation-events-2\"><a class=\"header-anchor\" href=\"#vcmylocation-events-2\">¶</a> VcMyLocation Events</h3><table><thead><tr><th>name</th><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>statusBarEvt</td><td>{cameraInfo, mouseCoordsInfo, performanceInfo, status, type}</td><td>Triggered when the status bar parameter changes.</td></tr><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggered before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggered when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggered when the cesiumObject is destroyed.</td></tr></tbody></table><h3 id=\"vcdistancelegend-props\"><a class=\"header-anchor\" href=\"#vcdistancelegend-props\">¶</a> VcDistanceLegend Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> Specify the position of the component.</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> Specifies the offset of the distance scale control based on the position.</td><td></td></tr><tr><td>color</td><td>String</td><td><code>&#39;#fff&#39;</code></td><td><code>optional</code> Specify the color of the distance scale control.</td><td></td></tr><tr><td>background</td><td>String</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> Specify the distance scale background.</td><td></td></tr><tr><td>width</td><td>Number</td><td><code>100</code></td><td><code>optional</code> Specify the width of the distance scale.</td><td></td></tr><tr><td>barBackground</td><td>String</td><td><code>&#39;#ffffff&#39;</code></td><td><code>optional</code> Specify the color of the horizontal line on the distance scale.</td><td></td></tr></tbody></table><h3 id=\"vcdistancelegend-events\"><a class=\"header-anchor\" href=\"#vcdistancelegend-events\">¶</a> VcDistanceLegend Events</h3><table><thead><tr><th>name</th><th>parameter</th><th>description</th></tr></thead><tbody><tr><td>distanceLegendEvt</td><td>{distance,status,type}</td><td>Triggered when the distance scale changes.</td></tr><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggered before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggered when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggered when the cesiumObject is destroyed.</td></tr></tbody></table>", 35);

function vc_navigationvue_type_template_id_bd3e0cbc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_vue_cesium_demo1 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo1");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_navigationvue_type_template_id_bd3e0cbc_hoisted_1, [vc_navigationvue_type_template_id_bd3e0cbc_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo1)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/controls/vc-navigation.md?vue&type=template&id=bd3e0cbc

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/controls/vc-navigation.md?vue&type=script&lang=ts


/* harmony default export */ var vc_navigationvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Load");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Unload");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        var _component_vc_navigation = _resolveComponent("vc-navigation");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_navigation, {
                  ref: "navigation"
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
                }, null, 8, ["position", "offset", "compassOpts", "zoomOpts", "locationOpts", "otherOpts", "onCompassEvt", "onZoomEvt", "onPrintEvt", "onLocationEvt", "onStatusBarEvt", "onDistanceLegendEvt"])];
              }),
              _: 1
            }), _createVNode(_component_el_row, {
              class: "demo-toolbar"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.unload
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.load
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.reload
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }, 8, ["onClick"])];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 512)]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            position: 'top-left',
            offset: [10, 80],
            compassOpts: {
              enableCompassOuterRing: true,
              outerOptions: {
                name: 'svguse:#vc-icons-compass-outer',
                // svg 加载方式
                size: '120px'
              },
              innerOptions: {
                name: 'fa fa-compass',
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
        mounted: function mounted() {
          // For debugging only, open the browser console and use vm to get the attribute modification in data.
          // such as vm.offset = [0, 0] or vm.offset[0] = 100
          // You can even add an attribute that is not initialized
          // vm.zoomOpts.zoomOutOptions = {size: '40px'}
          window.vm = this;
        },
        methods: {
          load: function load() {
            this.$refs.navigation.load();
          },
          reload: function reload() {
            this.$refs.navigation.reload();
          },
          unload: function unload() {
            this.$refs.navigation.unload();
          },
          onNavigationEvt: function onNavigationEvt(e) {
            console.log(e);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "vue-cesium-demo1": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_vc_compass = _resolveComponent("vc-compass");

        var _component_vc_zoom_control = _resolveComponent("vc-zoom-control");

        var _component_vc_print = _resolveComponent("vc-print");

        var _component_vc_my_location = _resolveComponent("vc-my-location");

        var _component_vc_status_bar = _resolveComponent("vc-status-bar");

        var _component_vc_distance_legend = _resolveComponent("vc-distance-legend");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_compass, {
                  position: "left",
                  outerOptions: {
                    name: 'svguse:#vc-icons-compass-outer',
                    size: '250px'
                  },
                  innerOptions: {
                    name: 'fa fa-compass',
                    size: '60px',
                    background: 'transparent',
                    color: '#009688'
                  }
                }), _createVNode(_component_vc_compass, {
                  position: "top",
                  outerOptions: {
                    name: 'svguse:#vc-icons-qq'
                  }
                }), _createVNode(_component_vc_compass, {
                  position: "top-right",
                  outerOptions: {
                    name: 'fa fa-circle-o-notch'
                  },
                  innerOptions: {
                    name: 'fa fa-circle',
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
                  name: "fa fa-print"
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
                  customAPI: function customAPI() {
                    return {
                      lng: 108,
                      lat: 32
                    };
                  }
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
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 512)]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/controls/vc-navigation.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/controls/vc-navigation.md



vc_navigationvue_type_script_lang_ts.render = vc_navigationvue_type_template_id_bd3e0cbc_render

/* harmony default export */ var vc_navigation = __webpack_exports__["default"] = (vc_navigationvue_type_script_lang_ts);

/***/ })

}]);