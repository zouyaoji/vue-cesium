(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/primitives/vc-collection-polyline.md?vue&type=template&id=3d20ac16

const vc_collection_polylinevue_type_template_id_3d20ac16_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_collection_polylinevue_type_template_id_3d20ac16_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCollectionPolyline ");

const vc_collection_polylinevue_type_template_id_3d20ac16_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading a renderable collection of polylines. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.PolylineCollection"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance. It is recommended to use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "polylines"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" prop to express when rendering massive polylines.")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcCollectionPolyline component.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-polyline"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-polyline"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add a polyline primitive collection object to the viewer.")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-collection-polyline @click=\"onClicked\" ref=\"collectionRef\" :polylines=\"polylines\">\n      <vc-polyline\n        :positions=\"[[90, 20, 10000], [120, 20, 10000]]\"\n        :material=\"{\n          fabric: {\n            type: 'Color',\n            uniforms: {\n              color: 'red'\n            }\n          }\n        }\"\n        :width=\"5\"\n      ></vc-polyline>\n      <vc-polyline\n        :positions=\"[[90, 30, 10000], [120, 30, 10000]]\"\n        :material=\"{\n          fabric: {\n            type: 'PolylineGlow',\n            uniforms: {\n              color: 'blue'\n            }\n          }\n        }\"\n        :width=\"10\"\n      ></vc-polyline>\n      <vc-polyline\n        :positions=\"[[90, 40, 10000], [120, 40, 10000]]\"\n        :material=\"{\n          fabric: {\n            type: 'PolylineArrow',\n            uniforms: {\n              color: 'purple'\n            }\n          }\n        }\"\n        :width=\"10\"\n      ></vc-polyline>\n    </vc-collection-polyline>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const collectionRef = ref(null)\n      const polylines = ref([])\n      const instance = getCurrentInstance()\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        collectionRef.value.unload()\n      }\n      const reload = () => {\n        collectionRef.value.reload()\n      }\n      const load = () => {\n        collectionRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        for (var i = 0; i < 500; i++) {\n          let polyline = {}\n          let positions = []\n          positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })\n          positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })\n          polyline.positions = positions\n          polyline.material = '#' + Math.random().toString(16).substr(2, 6).toUpperCase()\n          polylines.value.push(polyline)\n        }\n      }\n\n      return {\n        unload,\n        reload,\n        load,\n        onClicked,\n        onViewerReady,\n        collectionRef,\n        polylines\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>modelMatrix</td><td>Object</td><td></td><td><code>optional</code> The 4x4 transformation matrix that transforms each billboard from model to world coordinates.</td></tr><tr><td>debugShowBoundingVolume</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> For debugging only. Determines if this primitive&#39;s commands&#39; bounding spheres are shown.</td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Determines if the primitives in the collection will be shown.</td></tr><tr><td>polylines</td><td>Array</td><td><code>[]</code></td><td><code>optional</code> Specify an array of polylines collections. The structure of the array object is the same as the attribute of the <code>vc-point</code> component.</td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the mouse event takes effect.</td></tr></tbody></table>", 1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse is pressed on this primitive.</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse bounces up on this primitive.</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks on the primitive.</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks outside the primitive.</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>Triggers when the left mouse button double-clicks the primitive.</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves on this primitive.</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves to this primitive.</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves out of this primitive.</td></tr></tbody></table>", 1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Slots ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Subtags")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "This is where vc-point tag content goes."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-point")])])], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPolyline ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading a renderable polyline. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.Polyline"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance.")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "Note:"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" It needs to be a subcomponent of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-polyline"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to load normally.")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPolyline Props ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> The condition specifying at what distance from the camera that this polyline will be displayed.</td></tr><tr><td>id</td><td>Object</td><td></td><td><code>optional</code> The user-defined value returned when the polyline is picked.</td></tr><tr><td>loop</td><td>Boolean</td><td>false</td><td><code>optional</code> Whether a line segment will be added between the first and last polyline positions.</td></tr><tr><td>material</td><td>Object|Array|String</td><td></td><td><code>optional</code> The surface appearance of the polyline.This can be one of several built-in Material objects or a custom material, scripted with Fabric.</td></tr><tr><td>positions</td><td>Array</td><td></td><td><code>optional</code> The positions of the polyline.</td></tr><tr><td>show</td><td>Boolean</td><td>true</td><td><code>optional</code> Determines if this polyline will be shown. Use this to hide or show a polyline, instead of removing it and re-adding it to the collection.</td></tr><tr><td>width</td><td>Number</td><td>1.0</td><td><code>optional</code> The width of the polyline.</td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the mouse event takes effect.</td></tr></tbody></table>", 1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPolyline Events ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse is pressed on this primitive.</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse bounces up on this primitive.</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks on the primitive.</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks outside the primitive.</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>Triggers when the left mouse button double-clicks the primitive.</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves on this primitive.</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves to this primitive.</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves out of this primitive.</td></tr></tbody></table>", 1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("PolylineCollection");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("、");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Polyline");

function vc_collection_polylinevue_type_template_id_3d20ac16_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_collection_polylinevue_type_template_id_3d20ac16_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccollectionpolyline",
    tabindex: "-1",
    content: "VcCollectionPolyline",
    href: "#vccollectionpolyline",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_collection_polylinevue_type_template_id_3d20ac16_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccollectionpolyline"
    })]),
    _: 1
  }), vc_collection_polylinevue_type_template_id_3d20ac16_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
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
    id: "vcpolyline",
    tabindex: "-1",
    content: "VcPolyline",
    href: "#vcpolyline",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcpolyline"
    })]),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcpolyline-props",
    tabindex: "-1",
    content: "VcPolyline Props",
    href: "#vcpolyline-props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcpolyline-props"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcpolyline-events",
    tabindex: "-1",
    content: "VcPolyline Events",
    href: "#vcpolyline-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcpolyline-events"
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
    href: "https://cesium.com/docs/cesiumjs-ref-doc/PolylineCollection.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_23]),
    _: 1
  })]), _hoisted_24, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/Polyline.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_25]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-collection-polyline.md?vue&type=template&id=3d20ac16

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/primitives/vc-collection-polyline.md?vue&type=script&lang=ts

/* harmony default export */ var vc_collection_polylinevue_type_script_lang_ts = ({
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
        const _component_vc_polyline = _resolveComponent("vc-polyline");

        const _component_vc_collection_polyline = _resolveComponent("vc-collection-polyline");

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
            default: _withCtx(() => [_createVNode(_component_vc_collection_polyline, {
              onClick: _ctx.onClicked,
              ref: "collectionRef",
              polylines: _ctx.polylines
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_polyline, {
                positions: [[90, 20, 10000], [120, 20, 10000]],
                material: {
                  fabric: {
                    type: 'Color',
                    uniforms: {
                      color: 'red'
                    }
                  }
                },
                width: 5
              }), _createVNode(_component_vc_polyline, {
                positions: [[90, 30, 10000], [120, 30, 10000]],
                material: {
                  fabric: {
                    type: 'PolylineGlow',
                    uniforms: {
                      color: 'blue'
                    }
                  }
                },
                width: 10
              }), _createVNode(_component_vc_polyline, {
                positions: [[90, 40, 10000], [120, 40, 10000]],
                material: {
                  fabric: {
                    type: 'PolylineArrow',
                    uniforms: {
                      color: 'purple'
                    }
                  }
                },
                width: 10
              })]),
              _: 1
            }, 8, ["onClick", "polylines"])]),
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
          const collectionRef = ref(null);
          const polylines = ref([]);
          const instance = getCurrentInstance(); // methods

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

            for (var i = 0; i < 500; i++) {
              let polyline = {};
              let positions = [];
              positions.push({
                lng: Math.random() * 40 + 85,
                lat: Math.random() * 30 + 21
              });
              positions.push({
                lng: Math.random() * 40 + 85,
                lat: Math.random() * 30 + 21
              });
              polyline.positions = positions;
              polyline.material = '#' + Math.random().toString(16).substr(2, 6).toUpperCase();
              polylines.value.push(polyline);
            }
          };

          return {
            unload,
            reload,
            load,
            onClicked,
            onViewerReady,
            collectionRef,
            polylines
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
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-collection-polyline.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-collection-polyline.md



vc_collection_polylinevue_type_script_lang_ts.render = vc_collection_polylinevue_type_template_id_3d20ac16_render

/* harmony default export */ var vc_collection_polyline = __webpack_exports__["default"] = (vc_collection_polylinevue_type_script_lang_ts);

/***/ })

}]);