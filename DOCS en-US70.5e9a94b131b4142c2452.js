(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/primitives/vc-collection-primitive.md?vue&type=template&id=1aa138f9

const vc_collection_primitivevue_type_template_id_1aa138f9_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_collection_primitivevue_type_template_id_1aa138f9_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCollectionPrimitive ");

const vc_collection_primitivevue_type_template_id_1aa138f9_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading a collection of primitives. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.PrimitiveCollection"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance.")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("A member attribute "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Scene.primitives(PrimitiveCollection)"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" of the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance that is initialized by "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(". It is also a primitive itself so collections can be added to collections forming a hierarchy.")])], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcCollectionPrimitive component.", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-primitive"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add a collection of billboard primitives and model primitives to the viewer.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-collection-primitive @click=\"onClicked\" :show=\"show\" ref=\"collectionRef\">\n      <vc-collection-billboard :billboards=\"billboards1\"></vc-collection-billboard>\n      <vc-collection-primitive>\n        <vc-collection-billboard :billboards=\"billboards2\"></vc-collection-billboard>\n      </vc-collection-primitive>\n    </vc-collection-primitive>\n    <vc-collection-primitive :polygons=\"polygons\">\n      <vc-primitive-model\n        @click=\"onClicked\"\n        url=\"https://zouyaoji.top/vue-cesium/SampleData/models/CesiumAir/Cesium_Air.glb\"\n        :modelMatrix=\"modelMatrix\"\n        :scale=\"10000\"\n        :minimumPixelSize=\"128\"\n        :maximumScale=\"200000\"\n      >\n      </vc-primitive-model>\n      <vc-polygon @click=\"onClicked\" :positions=\"positions\" color=\"yellow\"></vc-polygon>\n    </vc-collection-primitive>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    <el-switch v-model=\"show\" active-color=\"#13ce66\" inactive-text=\"Show/Hide\"> </el-switch>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const collectionRef = ref(null)\n      const billboards1 = ref([])\n      const billboards2 = ref([])\n      const modelMatrix = ref(null)\n      const show = ref(true)\n      const instance = getCurrentInstance()\n      const positions = ref([\n        [105, 32],\n        [106, 34],\n        [107, 30]\n      ])\n      const polygons = ref([\n        {\n          positions: [\n            [115, 37],\n            [115, 32],\n            [107, 33],\n            [102, 31],\n            [102, 35]\n          ],\n          appearance: {\n            type: 'MaterialAppearance',\n            options: {\n              material: 'green'\n            }\n          }\n        },\n        {\n          positions: [\n            { lng: 108.0, lat: 42.0 },\n            { lng: 100.0, lat: 42.0 },\n            { lng: 104.0, lat: 40.0 }\n          ],\n          appearance: {\n            type: 'MaterialAppearance',\n            options: {\n              material: 'red'\n            }\n          },\n          depthFailAppearance: {\n            type: 'MaterialAppearance',\n            options: {\n              material: 'red'\n            }\n          }\n        },\n        {\n          positions: [90.0, 41.0, 0.0, 85.0, 41.0, 500000.0, 80.0, 41.0, 0.0],\n          appearance: {\n            type: 'MaterialAppearance',\n            options: {\n              material: 'blue'\n            }\n          }\n        },\n        {\n          polygonHierarchy: {\n            positions: [\n              [99, 30],\n              [85, 30],\n              [85, 40],\n              [99, 40]\n            ],\n            holes: [\n              {\n                positions: [\n                  [97, 31],\n                  [97, 39],\n                  [87, 39],\n                  [87, 31]\n                ],\n                holes: [\n                  {\n                    positions: [\n                      [95, 33],\n                      [89, 33],\n                      [89, 37],\n                      [95, 37]\n                    ],\n                    holes: [\n                      {\n                        positions: [\n                          [93, 34],\n                          [91, 34],\n                          [91, 36],\n                          [93, 36]\n                        ]\n                      }\n                    ]\n                  }\n                ]\n              }\n            ]\n          },\n          appearance: {\n            type: 'MaterialAppearance',\n            options: {\n              material: 'yellow'\n            }\n          }\n        }\n      ])\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        collectionRef.value.unload()\n      }\n      const reload = () => {\n        collectionRef.value.reload()\n      }\n      const load = () => {\n        collectionRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        for (var i = 0; i < 100; i++) {\n          let billboard1 = {}\n          billboard1.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }\n          billboard1.image = 'https://zouyaoji.top/vue-cesium/favicon.png'\n          billboard1.scale = 0.1\n          billboards1.value.push(billboard1)\n\n          let billboard2 = {}\n          billboard2.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }\n          billboard2.image = 'https://zouyaoji.top/vue-cesium/favicon.png'\n          billboard2.scale = 0.15\n          billboards2.value.push(billboard2)\n        }\n\n        modelMatrix.value = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))\n      }\n\n      return {\n        unload,\n        reload,\n        load,\n        onClicked,\n        onViewerReady,\n        collectionRef,\n        billboards1,\n        billboards2,\n        modelMatrix,\n        show,\n        positions,\n        polygons\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Determines if the primitives in the collection will be shown.</td></tr><tr><td>destroyPrimitives</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Determines if primitives in the collection are destroyed when they are removed.</td></tr><tr><td>enableMouseEvent</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the mouse event takes effect.</td></tr><tr><td>polygons</td><td>Array&lt;PolygonPrimitive&gt;</td><td><code>[]</code></td><td>Specify an array of polygons collections. The structure of the array object is the same as the attribute of the <code>vc-polygon</code> component.</td></tr></tbody></table>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse is pressed on this primitive.</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse bounces up on this primitive.</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks on the primitive.</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks outside the primitive.</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>Triggers when the left mouse button double-clicks the primitive.</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves on this primitive.</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves to this primitive.</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves out of this primitive.</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Slots ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Subtags")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "This is where primitive sub tags content goes."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-primitive/vc-primitive-classfication/vc-primitive-ground/vc-primitive-ground-polyline/vc-primitive-model/vc-primitive-tileset/vc-primitive-particle/vc-collection-billboard/vc-collection-label/vc-collection-point/vc-collection-polyline/vc-collection-primitive/vc-post-process-stage/vc-post-process-stage-scan/vc-post-process-stage-collection/vc-polygon")])])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPolygon ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading the polygon primitive. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "PolygonPrimitive"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance.")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "Note:"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" It needs to be a subcomponent of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-primitive"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to load normally.")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPolygon Props ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>id</td><td>any</td><td></td><td><code>optional</code> The user-defined object to be returned when this polygon is picked.</td></tr><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> true if this polygon will be shown; otherwise, false.</td></tr><tr><td>positions</td><td>VcCartesian3Array</td><td></td><td><code>optional</code> The positions.</td></tr><tr><td>polygonHierarchy</td><td>VcPolygonHierarchy</td><td></td><td><code>optional</code> The polygonHierarchy.</td></tr><tr><td>clampToGround</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> Specify whether the polygon is attached to the ground or 3dtiles.</td></tr><tr><td>arcType</td><td>number | Cesium.ArcType</td><td></td><td><code>optional</code> The type of line the polygon edges must follow. Valid options are ArcType.GEODESIC and ArcType.RHUMB.</td></tr><tr><td>classificationType</td><td>number | Cesium.ClassificationType</td><td></td><td><code>optional</code> An enum Property specifying whether this polygon will classify terrain, 3D Tiles, or both when on the ground.</td></tr><tr><td>appearance</td><td>VcAppearance</td><td></td><td><code>optional</code> The appearance.</td></tr><tr><td>depthFailColor</td><td>VcColor|Array|string</td><td></td><td><code>optional</code> Specify the depthFailColor.</td></tr><tr><td>depthFailAppearance</td><td>VcAppearance</td><td></td><td><code>optional</code> Specify the depthFailAppearance.</td></tr><tr><td>ellipsoid</td><td>Cesium.Ellipsoid</td><td></td><td><code>optional</code> The ellipsoid to be used as a reference.</td></tr><tr><td>allowPicking</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> When true, polygon will only be pickable with Scene#pick. When false, GPU memory is saved.</td></tr><tr><td>asynchronous</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Determines if the poygon primitive will be created asynchronously or block until ready.</td></tr><tr><td>enableMouseEvent</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the mouse event takes effect.</td></tr></tbody></table>", 1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPolygon Events ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse is pressed on this primitive.</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse bounces up on this primitive.</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks on the primitive.</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks outside the primitive.</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>Triggers when the left mouse button double-clicks the primitive.</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves on this primitive.</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves to this primitive.</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves out of this primitive.</td></tr></tbody></table>", 1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPolygon Methods ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Load components manually.</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Reload components manually.</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>Destroy the loaded component manually.</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>Get the creatingPromise.</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>Get the Cesium object loaded by this component.</td></tr></tbody></table>", 1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("PrimitiveCollection");

function vc_collection_primitivevue_type_template_id_1aa138f9_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_collection_primitivevue_type_template_id_1aa138f9_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccollectionprimitive",
    tabindex: "-1",
    content: "VcCollectionPrimitive",
    href: "#vccollectionprimitive",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_collection_primitivevue_type_template_id_1aa138f9_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccollectionprimitive"
    })]),
    _: 1
  }), vc_collection_primitivevue_type_template_id_1aa138f9_hoisted_3, _hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "slots",
    tabindex: "-1",
    content: "Slots",
    href: "#slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slots"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcpolygon",
    tabindex: "-1",
    content: "VcPolygon",
    href: "#vcpolygon",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcpolygon"
    })]),
    _: 1
  }), _hoisted_16, _hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcpolygon-props",
    tabindex: "-1",
    content: "VcPolygon Props",
    href: "#vcpolygon-props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcpolygon-props"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcpolygon-events",
    tabindex: "-1",
    content: "VcPolygon Events",
    href: "#vcpolygon-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcpolygon-events"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcpolygon-methods",
    tabindex: "-1",
    content: "VcPolygon Methods",
    href: "#vcpolygon-methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcpolygon-methods"
    })]),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_25, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/PrimitiveCollection.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_26]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-collection-primitive.md?vue&type=template&id=1aa138f9

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/primitives/vc-collection-primitive.md?vue&type=script&lang=ts

/* harmony default export */ var vc_collection_primitivevue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        const _component_vc_collection_billboard = _resolveComponent("vc-collection-billboard");

        const _component_vc_collection_primitive = _resolveComponent("vc-collection-primitive");

        const _component_vc_primitive_model = _resolveComponent("vc-primitive-model");

        const _component_vc_polygon = _resolveComponent("vc-polygon");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_switch = _resolveComponent("el-switch");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.onViewerReady
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_collection_primitive, {
              onClick: _ctx.onClicked,
              show: _ctx.show,
              ref: "collectionRef"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_collection_billboard, {
                billboards: _ctx.billboards1
              }, null, 8, ["billboards"]), _createVNode(_component_vc_collection_primitive, null, {
                default: _withCtx(() => [_createVNode(_component_vc_collection_billboard, {
                  billboards: _ctx.billboards2
                }, null, 8, ["billboards"])]),
                _: 1
              })]),
              _: 1
            }, 8, ["onClick", "show"]), _createVNode(_component_vc_collection_primitive, {
              polygons: _ctx.polygons
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_primitive_model, {
                onClick: _ctx.onClicked,
                url: "https://zouyaoji.top/vue-cesium/SampleData/models/CesiumAir/Cesium_Air.glb",
                modelMatrix: _ctx.modelMatrix,
                scale: 10000,
                minimumPixelSize: 128,
                maximumScale: 200000
              }, null, 8, ["onClick", "modelMatrix"]), _createVNode(_component_vc_polygon, {
                onClick: _ctx.onClicked,
                positions: _ctx.positions,
                color: "yellow"
              }, null, 8, ["onClick", "positions"])]),
              _: 1
            }, 8, ["polygons"])]),
            _: 1
          }, 8, ["onReady"]), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
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
            }, 8, ["onClick"]), _createVNode(_component_el_switch, {
              modelValue: _ctx.show,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.show = $event),
              "active-color": "#13ce66",
              "inactive-text": "Show/Hide"
            }, null, 8, ["modelValue"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const {
        ref,
        reactive,
        getCurrentInstance,
        onMounted,
        watch
      } = vue_esm_browser;
      const democomponentExport = {
        setup() {
          // state
          const collectionRef = ref(null);
          const billboards1 = ref([]);
          const billboards2 = ref([]);
          const modelMatrix = ref(null);
          const show = ref(true);
          const instance = getCurrentInstance();
          const positions = ref([[105, 32], [106, 34], [107, 30]]);
          const polygons = ref([{
            positions: [[115, 37], [115, 32], [107, 33], [102, 31], [102, 35]],
            appearance: {
              type: 'MaterialAppearance',
              options: {
                material: 'green'
              }
            }
          }, {
            positions: [{
              lng: 108.0,
              lat: 42.0
            }, {
              lng: 100.0,
              lat: 42.0
            }, {
              lng: 104.0,
              lat: 40.0
            }],
            appearance: {
              type: 'MaterialAppearance',
              options: {
                material: 'red'
              }
            },
            depthFailAppearance: {
              type: 'MaterialAppearance',
              options: {
                material: 'red'
              }
            }
          }, {
            positions: [90.0, 41.0, 0.0, 85.0, 41.0, 500000.0, 80.0, 41.0, 0.0],
            appearance: {
              type: 'MaterialAppearance',
              options: {
                material: 'blue'
              }
            }
          }, {
            polygonHierarchy: {
              positions: [[99, 30], [85, 30], [85, 40], [99, 40]],
              holes: [{
                positions: [[97, 31], [97, 39], [87, 39], [87, 31]],
                holes: [{
                  positions: [[95, 33], [89, 33], [89, 37], [95, 37]],
                  holes: [{
                    positions: [[93, 34], [91, 34], [91, 36], [93, 36]]
                  }]
                }]
              }]
            },
            appearance: {
              type: 'MaterialAppearance',
              options: {
                material: 'yellow'
              }
            }
          }]); // methods

          const onClicked = e => {
            console.log(e);
          };

          const unload = () => {
            collectionRef.value.unload();
          };

          const reload = () => {
            collectionRef.value.reload();
          };

          const load = () => {
            collectionRef.value.load();
          };

          const onViewerReady = _ref => {
            let {
              Cesium,
              viewer
            } = _ref;

            for (var i = 0; i < 100; i++) {
              let billboard1 = {};
              billboard1.position = {
                lng: Math.random() * 40 + 85,
                lat: Math.random() * 30 + 21
              };
              billboard1.image = 'https://zouyaoji.top/vue-cesium/favicon.png';
              billboard1.scale = 0.1;
              billboards1.value.push(billboard1);
              let billboard2 = {};
              billboard2.position = {
                lng: Math.random() * 40 + 85,
                lat: Math.random() * 30 + 21
              };
              billboard2.image = 'https://zouyaoji.top/vue-cesium/favicon.png';
              billboard2.scale = 0.15;
              billboards2.value.push(billboard2);
            }

            modelMatrix.value = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000));
          };

          return {
            unload,
            reload,
            load,
            onClicked,
            onViewerReady,
            collectionRef,
            billboards1,
            billboards2,
            modelMatrix,
            show,
            positions,
            polygons
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-collection-primitive.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-collection-primitive.md



vc_collection_primitivevue_type_script_lang_ts.render = vc_collection_primitivevue_type_template_id_1aa138f9_render

/* harmony default export */ var vc_collection_primitive = __webpack_exports__["default"] = (vc_collection_primitivevue_type_script_lang_ts);

/***/ })

}]);