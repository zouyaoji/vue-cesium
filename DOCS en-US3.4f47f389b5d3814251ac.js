(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.33/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_xtlouzbwsjm2tieu75n2ogelwy/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/analyses/vc-measurements.md?vue&type=template&id=c74beba0

const vc_measurementsvue_type_template_id_c74beba0_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_measurementsvue_type_template_id_c74beba0_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcMeasurements ");

const vc_measurementsvue_type_template_id_c74beba0_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Load measurement tool components, including distance measurement, component distance measurement, polyline distance measurement, horizontal distance measurement, vertical distance measurement, height measurement, area measurement, and point coordinate measurement.", -1);

const vc_measurementsvue_type_template_id_c74beba0_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "Note:"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Style files need to be imported: "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "import 'vue-cesium/dist/index.css';")], -1);

const vc_measurementsvue_type_template_id_c74beba0_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Tip: Version 3.0 has restructured the measurement component into one component, which is simple and supports custom styles, and optimizes the interaction."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "The drawing interaction is also optimized. The overall drawing is left-click, right-click to cancel the last drawn point, and double-click to end the drawing. Among them, horizontal measurement can also hold shift to draw a point in a fixed direction."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "ctrl + right click to cancel drawing.")], -1);

const vc_measurementsvue_type_template_id_c74beba0_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Base usage ");

const vc_measurementsvue_type_template_id_c74beba0_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of measurement components.", -1);

const vc_measurementsvue_type_template_id_c74beba0_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-measurements"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add measurement tools on the viewer.")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- Custom positioning and position offset -->\n    <vc-measurements\n      @draw-evt=\"drawEvt\"\n      @active-evt=\"activeEvt\"\n      @editor-evt=\"editorEvt\"\n      @mouse-evt=\"mouseEvt\"\n      ref=\"measurementsRef\"\n      position=\"bottom-left\"\n      :main-fab-opts=\"measurementFabOptions1\"\n      :offset=\"[10, 100]\"\n      :editable=\"editable\"\n      :clamp-to-ground=\"clampToGround\"\n      @ready=\"drawingsReadyDefault\"\n      :point-measurement-opts=\"pointMeasurementOpts\"\n      :area-measurement-opts=\"areaMeasurementOpts\"\n    >\n    </vc-measurements>\n    <!-- Custom measurement action -->\n    <vc-measurements\n      ref=\"measurementsRef2\"\n      position=\"top-right\"\n      :main-fab-opts=\"measurementFabOptions2\"\n      :editable=\"editable\"\n      :measurements=\"measurements\"\n      active-color=\"yellow\"\n    >\n    </vc-measurements>\n    <!-- Custom measurement options and decimals -->\n    <vc-measurements\n      ref=\"measurementsRef3\"\n      position=\"top-left\"\n      :main-fab-opts=\"measurementFabOptions3\"\n      :distance-measurement-opts=\"distanceMeasurementOpts3\"\n      :component-distanceMeasurement-opts=\"componentDistanceMeasurementOpts3\"\n      :point-measurement-opts=\"pointMeasurementOpts3\"\n      :editable=\"editable\"\n      :offset=\"[20, 80]\"\n    >\n    </vc-measurements>\n    <!-- Customize UI through slot -->\n    <vc-measurements ref=\"measurementsRef4\" position=\"bottom-left\" :main-fab-opts=\"measurementFabOptions4\" :offset=\"[10, 30]\" :editable=\"editable\">\n      <template #body=\"drawingActionInstances\">\n        <div class=\"custom-measurements\">\n          <el-row>\n            <vc-btn\n              v-for=\"(drawingActionInstance, index) in drawingActionInstances\"\n              :key=\"index\"\n              :color=\"drawingActionInstance.isActive ? 'amber' : 'primary'\"\n              rounded\n              @click=\"toggle(drawingActionInstance)\"\n              size=\"mini\"\n              >{{drawingActionInstance.tip}}</vc-btn\n            >\n            <vc-btn color=\"red\" rounded @click=\"clear\">Clear</vc-btn>\n          </el-row>\n        </div>\n      </template>\n    </vc-measurements>\n    <vc-primitive-tileset\n      url=\"https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json\"\n      @ready-promise=\"onTilesetReady\"\n    ></vc-primitive-tileset>\n    <vc-layer-imagery>\n      <vc-imagery-provider-osm></vc-imagery-provider-osm>\n    </vc-layer-imagery>\n    <vc-terrain-provider-cesium v-if=\"addTerrain\"></vc-terrain-provider-cesium>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    <el-checkbox v-model=\"editable\">editable</el-checkbox>\n    <el-checkbox v-model=\"addTerrain\">terrain</el-checkbox>\n    <el-checkbox v-model=\"clampToGround\">clampToGround</el-checkbox>\n  </el-row>\n</el-row>\n\n<script>\n  import { DistanceUnits, AngleUnits } from 'vue-cesium'\n  export default {\n    data() {\n      return {\n        addTerrain: false,\n        editable: false,\n        clampToGround: false,\n        measurementFabOptions1: {\n          direction: 'right'\n        },\n        measurementFabOptions2: {\n          direction: 'left',\n          color: 'accent'\n        },\n        measurementFabOptions3: {\n          direction: 'right',\n          modelValue: false,\n          color: 'primary'\n        },\n        distanceMeasurementOpts3: {\n          measureUnits: {\n            distanceUnits: DistanceUnits.KILOMETERS,\n            angleUnits: AngleUnits.RADIANS\n          },\n          decimals: {\n            distance: 4,\n            angle: 3\n          }\n        },\n        componentDistanceMeasurementOpts3: {\n          measureUnits: {\n            distanceUnits: DistanceUnits.KILOMETERS,\n            angleUnits: AngleUnits.RADIANS\n          },\n          decimals: {\n            distance: 4,\n            angle: 3\n          }\n        },\n        pointMeasurementOpts: {\n          preRenderDatas: [[108.9602, 34.21895, 500]]\n        },\n        areaMeasurementOpts: {\n          preRenderDatas: [\n            [\n              [108.95808, 34.21955, 30],\n              [108.95948, 34.22039, 20],\n              [108.9595, 34.21914, 25]\n            ],\n            [\n              [108.955, 34.21857],\n              [108.95573, 34.21856],\n              [108.95573, 34.21761],\n              [108.95499, 34.21761]\n            ]\n          ]\n        },\n        pointMeasurementOpts3: {\n          measureUnits: {\n            distanceUnits: DistanceUnits.METERS,\n            angleUnits: AngleUnits.DEGREES_MINUTES_SECONDS,\n            slopeUnits: AngleUnits.DEGREES\n          },\n          decimals: {\n            lng: 3,\n            lat: 3,\n            height: 2,\n            slope: 3\n          }\n        },\n        measurements: ['component-distance', 'polyline', 'vertical', 'area', 'point'],\n        measurementFabOptions4: {\n          direction: 'right'\n        }\n      }\n    },\n    methods: {\n      drawingsReadyDefault({ Cesium, viewer, cesiumObject }) {\n        console.log('Default Drawing Options', cesiumObject)\n      },\n      clear() {\n        this.$refs.measurementsRef4.clearAll()\n      },\n      toggle(drawingActionInstance) {\n        this.$refs.measurementsRef4.toggleAction(drawingActionInstance.name)\n      },\n      onTilesetReady(tileset, viewer) {\n        // const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)\n        // const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)\n        // const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 5)\n        // const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())\n        // tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)\n        viewer.zoomTo(tileset)\n        viewer.scene.globe.depthTestAgainstTerrain = true\n        this.restoreCursorMove = 'auto'\n        this.drawing = false\n      },\n      drawEvt(e, viewer) {\n        console.log(e)\n        const restoreCursor = getComputedStyle(viewer.canvas).cursor\n        if (e.finished) {\n          this.drawing = false\n          if (e.type === 'move') {\n            viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove}`)\n          }\n        } else {\n          this.drawing = true\n          if (e.type === 'move') {\n            viewer.canvas.setAttribute('style', 'cursor: move')\n          }\n          if (e.type === 'new') {\n            viewer.canvas.setAttribute('style', 'cursor: crosshair')\n          }\n        }\n      },\n      activeEvt(e, viewer) {\n        console.log(e)\n        viewer.canvas.setAttribute('style', `cursor: ${e.isActive ? 'crosshair' : 'auto'}`)\n        if (!e.isActive) {\n          this.drawing = false\n          this.restoreCursorMove = 'auto'\n        }\n      },\n      editorEvt(e, viewer) {\n        console.log(e)\n        if (e.type === 'move') {\n          const restoreCursor = getComputedStyle(viewer.canvas).cursor\n          viewer.canvas.setAttribute('style', 'cursor: move')\n          this.drawing = true\n        }\n      },\n      mouseEvt(e, viewer) {\n        console.log(e)\n        const restoreCursor = getComputedStyle(viewer.canvas).cursor\n        if (!this.drawing) {\n          if (e.type === 'onmouseover') {\n            this.restoreCursorMove = restoreCursor\n            viewer.canvas.setAttribute('style', 'cursor: pointer')\n          } else {\n            viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove || 'auto'}`)\n          }\n        }\n      },\n      unload() {\n        this.$refs.measurementsRef.unload()\n      },\n      load() {\n        this.$refs.measurementsRef.load()\n      },\n      reload() {\n        this.$refs.measurementsRef.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>string</td><td><code>&#39;top-right&#39;</code></td><td><code>optional</code> Specify the location of the measurement component.</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>[number, number]</td><td><code>[0, 0]</code></td><td><code>optional</code> Specify the offset based on the position.</td><td></td></tr><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the drawn measurement result is visible.</td><td></td></tr><tr><td>mode</td><td>number</td><td><code>1</code></td><td><code>optional</code> Specify the interactive drawing mode, 0 means continuous drawing, and 1 means drawing ends once.</td><td></td></tr><tr><td>measurements</td><td>Array&lt;&#39;distance&#39; | &#39;component-distance&#39; | &#39;polyline&#39; | &#39;horizontal&#39; | &#39;vertical&#39; | &#39;height&#39; | &#39;area&#39; | &#39;point&#39; | &#39;rectangle&#39; | &#39;regular&#39; | &#39;circle&#39; &gt;</td><td><code>[&#39;distance&#39;, &#39;component-distance&#39;, &#39;polyline&#39;, &#39;horizontal&#39;, &#39;vertical&#39;, &#39;height&#39;, &#39;area&#39;, &#39;point&#39;, &#39;rectangle&#39;, &#39;circle&#39;, &#39;regular&#39;]</code></td><td><code>optional</code> Specify the measurement instance to be loaded.</td><td></td></tr><tr><td>activeColor</td><td>string</td><td><code>&#39;positive&#39;</code></td><td><code>optional</code> Specify the color when the measurement instance is activated.</td><td></td></tr><tr><td>editable</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> Specify whether the measurement result can be edited.</td><td></td></tr><tr><td>mainFabOpts</td><td>VcActionTooltipProps &amp; VcFabProps</td><td></td><td><code>optional</code> Specify the style options of the floating action button of the measuring component.</td><td></td></tr><tr><td>distanceActionOpts</td><td>VcActionTooltipProps</td><td></td><td><code>optional</code> Specify the style options of the distance measurement action button.</td><td></td></tr><tr><td>distanceMeasurementOpts</td><td>VcMeasurementOpts</td><td></td><td><code>optional</code> Specify distance measurement options.</td><td></td></tr><tr><td>componentDistanceActionOpts</td><td>VcActionTooltipProps</td><td></td><td><code>optional</code> Specify the style options of the component distance measurement action button.</td><td></td></tr><tr><td>componentDistanceMeasurementOpts</td><td>VcMeasurementOpts</td><td></td><td><code>optional</code> Specify the component distance measurement options.</td><td></td></tr><tr><td>polylineActionOpts</td><td>VcActionTooltipProps</td><td></td><td><code>optional</code> Specify the style options of the polyline distance measurement action button.</td><td></td></tr><tr><td>polylineMeasurementOpts</td><td>VcMeasurementOpts</td><td></td><td><code>optional</code> Specify the polyline distance measurement options.</td><td></td></tr><tr><td>horizontalActionOpts</td><td>VcActionTooltipProps</td><td></td><td><code>optional</code> Specify the style options of the horizontal distance measurement action button.</td><td></td></tr><tr><td>horizontalMeasurementOpts</td><td>VcMeasurementOpts</td><td></td><td><code>optional</code> Specify the horizontal distance measurement options.</td><td></td></tr><tr><td>verticalActionOpts</td><td>VcActionTooltipProps</td><td></td><td><code>optional</code> Specify the style options of the vertical distance measurement action button.</td><td></td></tr><tr><td>verticalMeasurementOpts</td><td>VcMeasurementOpts</td><td></td><td><code>optional</code> Specify the vertical distance measurement options.</td><td></td></tr><tr><td>heightActionOpts</td><td>VcActionTooltipProps</td><td></td><td><code>optional</code> Specify the style options of the height measurement action button.</td><td></td></tr><tr><td>heightMeasurementOpts</td><td>VcMeasurementOpts</td><td></td><td><code>optional</code> Specify the height measurement options.</td><td></td></tr><tr><td>areaActionOpts</td><td>VcActionTooltipProps</td><td></td><td><code>optional</code> Specify the style options of the area measurement action button.</td><td></td></tr><tr><td>areaMeasurementOpts</td><td>VcMeasurementOpts</td><td></td><td><code>optional</code> Specify the area measurement options.</td><td></td></tr><tr><td>pointActionOpts</td><td>VcActionTooltipProps</td><td></td><td><code>optional</code> Specify the style options of the point measurement action button.</td><td></td></tr><tr><td>pointMeasurementOpts</td><td>VcMeasurementOpts</td><td></td><td><code>optional</code> Specify the point measurement options.</td><td></td></tr><tr><td>rectangleActionOpts</td><td>VcActionTooltipProps</td><td></td><td><code>optional</code> Specify the style options of the rectangle measurement action button.</td><td></td></tr><tr><td>rectangleMeasurementOpts</td><td>VcMeasurementOpts</td><td></td><td><code>optional</code> Specify the rectangle measurement options.</td><td></td></tr><tr><td>circleActionOpts</td><td>VcActionTooltipProps</td><td></td><td><code>optional</code> Specify the style options of the circle measurement action button.</td><td></td></tr><tr><td>circleMeasurementOpts</td><td>VcMeasurementOpts</td><td></td><td><code>optional</code> Specify the circle measurement options.</td><td></td></tr><tr><td>regularActionOpts</td><td>VcActionTooltipProps</td><td></td><td><code>optional</code> Specify the style options of the regular measurement action button.</td><td></td></tr><tr><td>regularMeasurementOpts</td><td>VcMeasurementOpts</td><td></td><td><code>optional</code> Specify the regular measurement options.</td><td></td></tr><tr><td>clearActionOpts</td><td>VcActionTooltipProps</td><td></td><td><code>optional</code> Specify the style options of the clear action button.</td><td></td></tr></tbody></table><div class=\"tip\"><p>Tip: The measurement component is mainly composed of two parts: (1) the floating action button (Fab) that supports expansion and collapse; (2) the specific measurement action button(FabAction). Below are their default props:</p></div><div class=\"tipflex\"><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// ActionOpts general props</span>\n{\n  <span class=\"hljs-attr\">externalLabel</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&#39;&#39;</span>,\n  <span class=\"hljs-attr\">labelPosition</span>: <span class=\"hljs-string\">&#39;right&#39;</span>,\n  <span class=\"hljs-attr\">hideLabel</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">disable</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">outline</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">push</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">unelevated</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;primary&#39;</span>,\n  <span class=\"hljs-attr\">glossy</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">square</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">500</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [\n      <span class=\"hljs-number\">0</span>,\n      <span class=\"hljs-number\">20</span>\n    ]\n  },\n  <span class=\"hljs-comment\">// The default icons are</span>\n  <span class=\"hljs-comment\">// vc-icons-measure-distance, vc-icons-measure-component-distance,</span>\n  <span class=\"hljs-comment\">// vc-icons-measure-polyline-distance, vc-icons-measure-horizontal-distance,</span>\n  <span class=\"hljs-comment\">// vc-icons-measure-vertical-distance, vc-icons-measure-height-from-terrain,</span>\n  <span class=\"hljs-comment\">// vc-icons-measure-area, vc-icons-measure-point-coordinates,</span>\n  <span class=\"hljs-comment\">// vc-icons-clear</span>\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-measure-distance&#39;</span>\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// The following properties are added to the common properties of ActionOpts:</span>\n{\n  <span class=\"hljs-attr\">direction</span>: <span class=\"hljs-string\">&#39;left&#39;</span>,\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-measure-button&#39;</span>,\n  <span class=\"hljs-attr\">activeIcon</span>: <span class=\"hljs-string\">&#39;vc-icons-measure-button&#39;</span>,\n  <span class=\"hljs-attr\">verticalActionsAlign</span>: <span class=\"hljs-string\">&#39;center&#39;</span>,\n  <span class=\"hljs-attr\">hideIcon</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">persistent</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">modelValue</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">hideActionOnClick</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;info&#39;</span>\n}\n</code><span class=\"lang-mark\">js</span></pre></div>", 3);

const _hoisted_14 = {
  class: "tip"
};

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Tip: Each measurement button (FabAction) corresponds to the measurement options xxxMeasurementOpts, used to customize drawing objects..", -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("See: ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("defaultProps");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>The parameter configuration of each drawing result is too long to list here. If you need to customize it, please open the console output on the current document page to view <code>default options of drawing buttons</code> and <code>default options of drawing results</code> . These are the <code>actionOpts</code> and <code>cmpOpts</code> attributes. For example, the structure of the parameter object of <code>pointMeasurementOpts</code> is the same as the structure of <code>cmpOpts</code> in which the <code>name</code> is the item of <code>point</code> in the console output of <code>Default Drawing Options:</code>. The <code>pointActionOpts</code> parameter object is the same as the <code>actionOpts</code> structure where the <code>name</code> is the <code>point</code> item in the console output <code>Default Drawing Options:</code>. Of course, you can also refer to this output in your own code to view.</p>", 1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>drawEvt</td><td>(evt: VcDrawingDrawEvt, viewer: Cesium.Viewer)</td><td>Triggers when measuring.</td></tr><tr><td>activeEvt</td><td>(evt: VcDrawingActiveEvt, viewer: Cesium.Viewer)</td><td>Triggers when the measurement action is switched.</td></tr><tr><td>editorEvt</td><td>(evt: VcDrawingEditorEvt, viewer: Cesium.Viewer)</td><td>Triggers when the edit button is clicked.</td></tr><tr><td>mouseEvt</td><td>(evt: VcDrawingMouseEvt, viewer: Cesium.Viewer)</td><td>Triggers when the mouse is mouse over or mouse out on the drawing point.</td></tr><tr><td>onFabUpdated</td><td>(value: boolean)</td><td>Triggers when the floating button is expanded or collapsed.</td></tr></tbody></table>", 1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Methods ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Load components manually.</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Reload components manually.</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>Destroy the loaded component manually.</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>Get the creatingPromise.</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>Get the Cesium object loaded by this component.</td></tr><tr><td>clearAll</td><td>() =&gt; void</td><td>Clear all drawing results.</td></tr><tr><td>activate</td><td>() =&gt; void</td><td>End listening for the ScreenSpaceEventHandler events.</td></tr><tr><td>deactivate</td><td>() =&gt; void</td><td>Start listening for ScreenSpaceEventHandler events.</td></tr><tr><td>toggleAction</td><td>(drawingOption: VcDrawingActionInstance | string) =&gt; void</td><td>Toggle drawing instance.</td></tr><tr><td>getFabRef</td><td>() =&gt; VcFabRef</td><td>Get the float action button template reference.</td></tr><tr><td>getDrawingActionInstance</td><td>(actionName: string) =&gt; VcDrawingActionInstance</td><td>Get the drawingActionInstance by action name.</td></tr><tr><td>getDrawingActionInstances</td><td>() =&gt; Array&lt;VcDrawingActionInstance&gt;</td><td>Get the drawing action instances.</td></tr><tr><td>getSelectedDrawingActionInstance</td><td>() =&gt; VcDrawingActionInstance</td><td>Get the selected drawing action instance.</td></tr></tbody></table>", 1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Slots ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "name"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "body"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Used to customize the measurement component UI.")])])], -1);

function vc_measurementsvue_type_template_id_c74beba0_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_measurementsvue_type_template_id_c74beba0_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcmeasurements",
    tabindex: "-1",
    content: "VcMeasurements",
    href: "#vcmeasurements",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_measurementsvue_type_template_id_c74beba0_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcmeasurements"
    })]),
    _: 1
  }), vc_measurementsvue_type_template_id_c74beba0_hoisted_3, vc_measurementsvue_type_template_id_c74beba0_hoisted_4, vc_measurementsvue_type_template_id_c74beba0_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "base-usage",
    tabindex: "-1",
    content: "Base usage",
    href: "#base-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_measurementsvue_type_template_id_c74beba0_hoisted_6, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#base-usage"
    })]),
    _: 1
  }), vc_measurementsvue_type_template_id_c74beba0_hoisted_7, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser["withCtx"])(() => [vc_measurementsvue_type_template_id_c74beba0_hoisted_8]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser["createElementVNode"])("div", _hoisted_14, [_hoisted_15, Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/blob/dev/packages/components/measurements/src/defaultProps.ts"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17]),
    _: 1
  })]), _hoisted_18]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "methods",
    tabindex: "-1",
    content: "Methods",
    href: "#methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#methods"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "slots",
    tabindex: "-1",
    content: "Slots",
    href: "#slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slots"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/analyses/vc-measurements.md?vue&type=template&id=c74beba0

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_xtlouzbwsjm2tieu75n2ogelwy/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/analyses/vc-measurements.md?vue&type=script&lang=ts

/* harmony default export */ var vc_measurementsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        withCtx: _withCtx,
        createBlock: _createBlock,
        createElementVNode: _createElementVNode,
        createCommentVNode: _createCommentVNode
      } = vue_esm_browser;
      const _hoisted_1 = {
        class: "custom-measurements"
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Clear");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Unload");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Reload");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("editable");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("terrain");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("clampToGround");

      function render(_ctx, _cache) {
        const _component_vc_measurements = _resolveComponent("vc-measurements");

        const _component_vc_btn = _resolveComponent("vc-btn");

        const _component_el_row = _resolveComponent("el-row");

        const _component_vc_primitive_tileset = _resolveComponent("vc-primitive-tileset");

        const _component_vc_imagery_provider_osm = _resolveComponent("vc-imagery-provider-osm");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_terrain_provider_cesium = _resolveComponent("vc-terrain-provider-cesium");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_checkbox = _resolveComponent("el-checkbox");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_measurements, {
              onDrawEvt: _ctx.drawEvt,
              onActiveEvt: _ctx.activeEvt,
              onEditorEvt: _ctx.editorEvt,
              onMouseEvt: _ctx.mouseEvt,
              ref: "measurementsRef",
              position: "bottom-left",
              "main-fab-opts": _ctx.measurementFabOptions1,
              offset: [10, 100],
              editable: _ctx.editable,
              "clamp-to-ground": _ctx.clampToGround,
              onReady: _ctx.drawingsReadyDefault,
              "point-measurement-opts": _ctx.pointMeasurementOpts,
              "area-measurement-opts": _ctx.areaMeasurementOpts
            }, null, 8, ["onDrawEvt", "onActiveEvt", "onEditorEvt", "onMouseEvt", "main-fab-opts", "editable", "clamp-to-ground", "onReady", "point-measurement-opts", "area-measurement-opts"]), _createVNode(_component_vc_measurements, {
              ref: "measurementsRef2",
              position: "top-right",
              "main-fab-opts": _ctx.measurementFabOptions2,
              editable: _ctx.editable,
              measurements: _ctx.measurements,
              "active-color": "yellow"
            }, null, 8, ["main-fab-opts", "editable", "measurements"]), _createVNode(_component_vc_measurements, {
              ref: "measurementsRef3",
              position: "top-left",
              "main-fab-opts": _ctx.measurementFabOptions3,
              "distance-measurement-opts": _ctx.distanceMeasurementOpts3,
              "component-distanceMeasurement-opts": _ctx.componentDistanceMeasurementOpts3,
              "point-measurement-opts": _ctx.pointMeasurementOpts3,
              editable: _ctx.editable,
              offset: [20, 80]
            }, null, 8, ["main-fab-opts", "distance-measurement-opts", "component-distanceMeasurement-opts", "point-measurement-opts", "editable"]), _createVNode(_component_vc_measurements, {
              ref: "measurementsRef4",
              position: "bottom-left",
              "main-fab-opts": _ctx.measurementFabOptions4,
              offset: [10, 30],
              editable: _ctx.editable
            }, {
              body: _withCtx(drawingActionInstances => [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_row, null, {
                default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(drawingActionInstances, (drawingActionInstance, index) => {
                  return _openBlock(), _createBlock(_component_vc_btn, {
                    key: index,
                    color: drawingActionInstance.isActive ? 'amber' : 'primary',
                    rounded: "",
                    onClick: $event => _ctx.toggle(drawingActionInstance),
                    size: "mini"
                  }, {
                    default: _withCtx(() => [_createTextVNode(_toDisplayString(drawingActionInstance.tip), 1)]),
                    _: 2
                  }, 1032, ["color", "onClick"]);
                }), 128)), _createVNode(_component_vc_btn, {
                  color: "red",
                  rounded: "",
                  onClick: _ctx.clear
                }, {
                  default: _withCtx(() => [_hoisted_2]),
                  _: 1
                }, 8, ["onClick"])]),
                _: 2
              }, 1024)])]),
              _: 1
            }, 8, ["main-fab-opts", "editable"]), _createVNode(_component_vc_primitive_tileset, {
              url: "https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json",
              onReadyPromise: _ctx.onTilesetReady
            }, null, 8, ["onReadyPromise"]), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_osm)]),
              _: 1
            }), _ctx.addTerrain ? (_openBlock(), _createBlock(_component_vc_terrain_provider_cesium, {
              key: 0
            })) : _createCommentVNode("", true)]),
            _: 1
          }), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_hoisted_5]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_checkbox, {
              modelValue: _ctx.editable,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.editable = $event)
            }, {
              default: _withCtx(() => [_hoisted_6]),
              _: 1
            }, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
              modelValue: _ctx.addTerrain,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.addTerrain = $event)
            }, {
              default: _withCtx(() => [_hoisted_7]),
              _: 1
            }, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
              modelValue: _ctx.clampToGround,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.clampToGround = $event)
            }, {
              default: _withCtx(() => [_hoisted_8]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const {
        DistanceUnits,
        AngleUnits
      } = __webpack_require__(38);

      const democomponentExport = {
        data() {
          return {
            addTerrain: false,
            editable: false,
            clampToGround: false,
            measurementFabOptions1: {
              direction: 'right'
            },
            measurementFabOptions2: {
              direction: 'left',
              color: 'accent'
            },
            measurementFabOptions3: {
              direction: 'right',
              modelValue: false,
              color: 'primary'
            },
            distanceMeasurementOpts3: {
              measureUnits: {
                distanceUnits: DistanceUnits.KILOMETERS,
                angleUnits: AngleUnits.RADIANS
              },
              decimals: {
                distance: 4,
                angle: 3
              }
            },
            componentDistanceMeasurementOpts3: {
              measureUnits: {
                distanceUnits: DistanceUnits.KILOMETERS,
                angleUnits: AngleUnits.RADIANS
              },
              decimals: {
                distance: 4,
                angle: 3
              }
            },
            pointMeasurementOpts: {
              preRenderDatas: [[108.9602, 34.21895, 500]]
            },
            areaMeasurementOpts: {
              preRenderDatas: [[[108.95808, 34.21955, 30], [108.95948, 34.22039, 20], [108.9595, 34.21914, 25]], [[108.955, 34.21857], [108.95573, 34.21856], [108.95573, 34.21761], [108.95499, 34.21761]]]
            },
            pointMeasurementOpts3: {
              measureUnits: {
                distanceUnits: DistanceUnits.METERS,
                angleUnits: AngleUnits.DEGREES_MINUTES_SECONDS,
                slopeUnits: AngleUnits.DEGREES
              },
              decimals: {
                lng: 3,
                lat: 3,
                height: 2,
                slope: 3
              }
            },
            measurements: ['component-distance', 'polyline', 'vertical', 'area', 'point'],
            measurementFabOptions4: {
              direction: 'right'
            }
          };
        },

        methods: {
          drawingsReadyDefault(_ref) {
            let {
              Cesium,
              viewer,
              cesiumObject
            } = _ref;
            console.log('Default Drawing Options', cesiumObject);
          },

          clear() {
            this.$refs.measurementsRef4.clearAll();
          },

          toggle(drawingActionInstance) {
            this.$refs.measurementsRef4.toggleAction(drawingActionInstance.name);
          },

          onTilesetReady(tileset, viewer) {
            // const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)
            // const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)
            // const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 5)
            // const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())
            // tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)
            viewer.zoomTo(tileset);
            viewer.scene.globe.depthTestAgainstTerrain = true;
            this.restoreCursorMove = 'auto';
            this.drawing = false;
          },

          drawEvt(e, viewer) {
            console.log(e);
            const restoreCursor = getComputedStyle(viewer.canvas).cursor;

            if (e.finished) {
              this.drawing = false;

              if (e.type === 'move') {
                viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove}`);
              }
            } else {
              this.drawing = true;

              if (e.type === 'move') {
                viewer.canvas.setAttribute('style', 'cursor: move');
              }

              if (e.type === 'new') {
                viewer.canvas.setAttribute('style', 'cursor: crosshair');
              }
            }
          },

          activeEvt(e, viewer) {
            console.log(e);
            viewer.canvas.setAttribute('style', `cursor: ${e.isActive ? 'crosshair' : 'auto'}`);

            if (!e.isActive) {
              this.drawing = false;
              this.restoreCursorMove = 'auto';
            }
          },

          editorEvt(e, viewer) {
            console.log(e);

            if (e.type === 'move') {
              const restoreCursor = getComputedStyle(viewer.canvas).cursor;
              viewer.canvas.setAttribute('style', 'cursor: move');
              this.drawing = true;
            }
          },

          mouseEvt(e, viewer) {
            console.log(e);
            const restoreCursor = getComputedStyle(viewer.canvas).cursor;

            if (!this.drawing) {
              if (e.type === 'onmouseover') {
                this.restoreCursorMove = restoreCursor;
                viewer.canvas.setAttribute('style', 'cursor: pointer');
              } else {
                viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove || 'auto'}`);
              }
            }
          },

          unload() {
            this.$refs.measurementsRef.unload();
          },

          load() {
            this.$refs.measurementsRef.load();
          },

          reload() {
            this.$refs.measurementsRef.reload();
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
// CONCATENATED MODULE: ./website/docs/en-US/analyses/vc-measurements.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/analyses/vc-measurements.md



vc_measurementsvue_type_script_lang_ts.render = vc_measurementsvue_type_template_id_c74beba0_render

/* harmony default export */ var vc_measurements = __webpack_exports__["default"] = (vc_measurementsvue_type_script_lang_ts);

/***/ })

}]);