(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ 973:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.26/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/primitives/vc-collection-billboard.md?vue&type=template&id=6c4f6be8

const vc_collection_billboardvue_type_template_id_6c4f6be8_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_collection_billboardvue_type_template_id_6c4f6be8_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCollectionBillboard ");

const vc_collection_billboardvue_type_template_id_6c4f6be8_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading a renderable collection of billboards. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.BillboardCollection"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance. It is recommended to use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "billboards"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" prop to express when rendering massive billboards.")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcCollectionBillboard component.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-billboard"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-billboard"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add a billboard primitive collection object to the viewer.")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-collection-billboard ref=\"billboardCollectionRef\" @mouseout=\"onMouseout\" @mouseover=\"onMouseover\" :billboards=\"billboards\">\n      <vc-billboard\n        :position=\"[108, 35, 10000]\"\n        :distanceDisplayCondition=\"[0, 20000000]\"\n        :scale=\"0.25\"\n        image=\"https://zouyaoji.top/vue-cesium/favicon.png\"\n      ></vc-billboard>\n    </vc-collection-billboard>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const billboardCollectionRef = ref(null)\n      const billboards = ref([])\n      const instance = getCurrentInstance()\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        billboardCollectionRef.value.unload()\n      }\n      const reload = () => {\n        billboardCollectionRef.value.reload()\n      }\n      const load = () => {\n        billboardCollectionRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        for (var i = 0; i < 50; i++) {\n          const billboard = {}\n          billboard.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }\n          billboard.image = Cesium.writeTextToCanvas(i + 1, {\n            font: '100px sans-serif',\n            strokeWidth: 2\n          }).toDataURL()\n          billboard.scale = 0.25\n          billboard.id = i\n          billboards.value.push(billboard)\n        }\n      }\n\n      const onMouseover = e => {\n        console.log(e)\n        if (e.cesiumObject instanceof Cesium.Billboard) {\n          this.scale = 0.5 // or e.cesiumObject.scale = 0.5\n          e.pickedFeature.primitive.scale = 0.5\n        } else if (e.cesiumObject instanceof Cesium.BillboardCollection) {\n          e.pickedFeature.primitive.scale = 0.5\n        }\n      }\n\n      const onMouseout = e => {\n        console.log(e)\n        if (e.cesiumObject instanceof Cesium.Billboard) {\n          this.scale = 0.25 // or e.cesiumObject.scale = 0.25\n        } else if (e.cesiumObject instanceof Cesium.BillboardCollection) {\n          e.pickedFeature.primitive.scale = 0.25\n        }\n      }\n\n      return {\n        unload,\n        reload,\n        load,\n        onClicked,\n        onMouseout,\n        onMouseover,\n        onViewerReady,\n        billboardCollectionRef,\n        billboards\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>modelMatrix</td><td>Object</td><td></td><td><code>optional</code> The 4x4 transformation matrix that transforms each billboard from model to world coordinates.</td><td></td></tr><tr><td>debugShowBoundingVolume</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> For debugging only. Determines if this primitive&#39;s commands&#39; bounding spheres are shown.</td><td></td></tr><tr><td>scene</td><td>Object</td><td></td><td><code>optional</code> Must be passed in for billboards that use the height reference property or will be depth tested against the globe.</td><td></td></tr><tr><td>blendOption</td><td>Number</td><td></td><td><code>optional</code> The billboard blending option. The default is used for rendering both opaque and translucent billboards. However, if either all of the billboards are completely opaque or all are completely translucent, setting the technique to BlendOption.OPAQUE or BlendOption.TRANSLUCENT can improve performance by up to 2x. <strong>OPAQUE: 0, TRANSLUCENT: 1, OPAQUE_AND_TRANSLUCENT: 2</strong></td><td>0/1/2</td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Determines if the primitives in the collection will be shown.</td><td></td></tr><tr><td>billboards</td><td>Array</td><td><code>[]</code></td><td><code>optional</code> Specify an array of billboard collections. The structure of the array object is the same as the attribute of the <code>vc-billboard</code> component.</td><td></td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the mouse event takes effect.</td><td></td></tr></tbody></table>", 1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse is pressed on this primitive.</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse bounces up on this primitive.</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks on the primitive.</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks outside the primitive.</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>Triggers when the left mouse button double-clicks the primitive.</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves on this primitive.</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves to this primitive.</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves out of this primitive.</td></tr></tbody></table>", 1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Slots ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Subtags")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "This is where vc-billboard tag content goes."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-billboard")])])], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcBillboard ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading a viewport-aligned image positioned in the 3D scene. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.Billboard"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance.")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "Note:"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" It needs to be a subcomponent of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-billboard"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to load normally.")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcBillboard Props ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>alignedAxis</td><td>Object|Array</td><td><code>{x: 0, y: 0, z: 0}</code></td><td><code>optional</code> The aligned axis in world space. The aligned axis is the unit vector that the billboard up vector points towards. The default is the zero vector, which means the billboard is aligned to the screen up vector.</td><td></td></tr><tr><td>color</td><td>Object|String|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> The color that is multiplied with the billboard&#39;s texture.</td><td></td></tr><tr><td>disableDepthTestDistance</td><td>Number</td><td></td><td><code>optional</code> The distance from the camera at which to disable the depth test to, for example, prevent clipping against terrain. When set to zero, the depth test is always applied. When set to Number.POSITIVE_INFINITY, the depth test is never applied.</td><td></td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> The condition specifying at what distance from the camera that this billboard will be displayed.</td><td></td></tr><tr><td>eyeOffset</td><td>Object|Array</td><td><code>{x: 0, y: 0, z: 0}</code></td><td><code>optional</code> The 3D Cartesian offset applied to this billboard in eye coordinates.</td><td></td></tr><tr><td>height</td><td>Number</td><td></td><td><code>optional</code> The height for the billboard. If undefined, the image height will be used.</td><td></td></tr><tr><td>heightReference</td><td>Number</td><td><code>0</code></td><td><code>optional</code> The height reference of this billboard. <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>horizontalOrigin</td><td>Number</td><td><code>0</code></td><td><code>optional</code> The horizontal origin of this billboard, which determines if the billboard is to the left, center, or right of its anchor position. <strong>CENTER: 0, LEFT: 1, RIGHT: -1</strong></td><td>0/1/2</td></tr><tr><td>id</td><td>*</td><td></td><td><code>optional</code> The user-defined object returned when the billboard is picked.</td><td></td></tr><tr><td>image</td><td>String|Object</td><td></td><td><code>optional</code> The image to be used for this billboard. If a texture has already been created for the given image, the existing texture is used.</td><td></td></tr><tr><td>pixelOffset</td><td>Object|Array</td><td><code>{x: 0, y: 0}</code></td><td><code>optional</code> The pixel offset in screen space from the origin of this billboard.</td><td></td></tr><tr><td>pixelOffsetScaleByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> The near and far pixel offset scaling properties of a Billboard based on the billboard&#39;s distance from the camera.</td><td></td></tr><tr><td>position</td><td>Object|Array</td><td></td><td><code>optional</code> The position of this billboard.</td><td></td></tr><tr><td>rotation</td><td>Number</td><td><code>0</code></td><td><code>optional</code> The rotation angle in radians.</td><td></td></tr><tr><td>scale</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> The uniform scale that is multiplied with the billboard&#39;s image size in pixels.</td><td></td></tr><tr><td>scaleByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> The near and far scaling properties of a Billboard based on the billboard&#39;s distance from the camera.</td><td></td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Determines if this billboard will be shown. Use this to hide or show a billboard, instead of removing it and re-adding it to the collection.</td><td></td></tr><tr><td>sizeInMeters</td><td>Boolean</td><td></td><td><code>optional</code> Determines if the billboard size is in meters or pixels. true to size the billboard in meters; otherwise, the size is in pixels.</td><td></td></tr><tr><td>translucencyByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> The near and far translucency properties of a Billboard based on the billboard&#39;s distance from the camera.</td><td></td></tr><tr><td>verticalOrigin</td><td>Number</td><td><code>0</code></td><td><code>optional</code> The vertical origin of this billboard, which determines if the billboard is to the above, below, or at the center of its anchor position. <strong>CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1</strong></td><td>0/1/2/-1</td></tr><tr><td>width</td><td>Number</td><td></td><td><code>optional</code> The width for the billboard. If undefined, the image width will be used.</td><td></td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the mouse event takes effect.</td><td></td></tr></tbody></table>", 1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcBillboard Events ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse is pressed on this primitive.</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse bounces up on this primitive.</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks on the primitive.</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks outside the primitive.</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>Triggers when the left mouse button double-clicks the primitive.</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves on this primitive.</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves to this primitive.</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves out of this primitive.</td></tr></tbody></table>", 1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("BillboardCollection");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("、");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Billboard");

function vc_collection_billboardvue_type_template_id_6c4f6be8_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_collection_billboardvue_type_template_id_6c4f6be8_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccollectionbillboard",
    tabindex: "-1",
    content: "VcCollectionBillboard",
    href: "#vccollectionbillboard",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_collection_billboardvue_type_template_id_6c4f6be8_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccollectionbillboard"
    })]),
    _: 1
  }), vc_collection_billboardvue_type_template_id_6c4f6be8_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "slots",
    tabindex: "-1",
    content: "Slots",
    href: "#slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slots"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcbillboard",
    tabindex: "-1",
    content: "VcBillboard",
    href: "#vcbillboard",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcbillboard"
    })]),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcbillboard-props",
    tabindex: "-1",
    content: "VcBillboard Props",
    href: "#vcbillboard-props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcbillboard-props"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcbillboard-events",
    tabindex: "-1",
    content: "VcBillboard Events",
    href: "#vcbillboard-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcbillboard-events"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_22, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/BillboardCollection.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_23]),
    _: 1
  })]), _hoisted_24, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/Billboard.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_25]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-collection-billboard.md?vue&type=template&id=6c4f6be8

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/primitives/vc-collection-billboard.md?vue&type=script&lang=ts

/* harmony default export */ var vc_collection_billboardvue_type_script_lang_ts = ({
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
        const _component_vc_billboard = _resolveComponent("vc-billboard");

        const _component_vc_collection_billboard = _resolveComponent("vc-collection-billboard");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.onViewerReady
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_collection_billboard, {
              ref: "billboardCollectionRef",
              onMouseout: _ctx.onMouseout,
              onMouseover: _ctx.onMouseover,
              billboards: _ctx.billboards
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_billboard, {
                position: [108, 35, 10000],
                distanceDisplayCondition: [0, 20000000],
                scale: 0.25,
                image: "https://zouyaoji.top/vue-cesium/favicon.png"
              }, null, 8, ["scale"])]),
              _: 1
            }, 8, ["onMouseout", "onMouseover", "billboards"])]),
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
            }, 8, ["onClick"])]),
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
          const billboardCollectionRef = ref(null);
          const billboards = ref([]);
          const instance = getCurrentInstance(); // methods

          const onClicked = e => {
            console.log(e);
          };

          const unload = () => {
            billboardCollectionRef.value.unload();
          };

          const reload = () => {
            billboardCollectionRef.value.reload();
          };

          const load = () => {
            billboardCollectionRef.value.load();
          };

          const onViewerReady = _ref => {
            let {
              Cesium,
              viewer
            } = _ref;

            for (var i = 0; i < 50; i++) {
              const billboard = {};
              billboard.position = {
                lng: Math.random() * 40 + 85,
                lat: Math.random() * 30 + 21
              };
              billboard.image = Cesium.writeTextToCanvas(i + 1, {
                font: '100px sans-serif',
                strokeWidth: 2
              }).toDataURL();
              billboard.scale = 0.25;
              billboard.id = i;
              billboards.value.push(billboard);
            }
          };

          const onMouseover = e => {
            console.log(e);

            if (e.cesiumObject instanceof Cesium.Billboard) {
              this.scale = 0.5; // or e.cesiumObject.scale = 0.5

              e.pickedFeature.primitive.scale = 0.5;
            } else if (e.cesiumObject instanceof Cesium.BillboardCollection) {
              e.pickedFeature.primitive.scale = 0.5;
            }
          };

          const onMouseout = e => {
            console.log(e);

            if (e.cesiumObject instanceof Cesium.Billboard) {
              this.scale = 0.25; // or e.cesiumObject.scale = 0.25
            } else if (e.cesiumObject instanceof Cesium.BillboardCollection) {
              e.pickedFeature.primitive.scale = 0.25;
            }
          };

          return {
            unload,
            reload,
            load,
            onClicked,
            onMouseout,
            onMouseover,
            onViewerReady,
            billboardCollectionRef,
            billboards
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
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-collection-billboard.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-collection-billboard.md



vc_collection_billboardvue_type_script_lang_ts.render = vc_collection_billboardvue_type_template_id_6c4f6be8_render

/* harmony default export */ var vc_collection_billboard = __webpack_exports__["default"] = (vc_collection_billboardvue_type_script_lang_ts);

/***/ })

}]);