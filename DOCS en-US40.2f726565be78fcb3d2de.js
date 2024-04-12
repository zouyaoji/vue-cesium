(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-model.md?vue&type=template&id=5b4cf6b4

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};
const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading the model graphic. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.ModelGraphics"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance.")], -1);
const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "Note:"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" It needs to be a subcomponent of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to load normally.")], -1);
const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of the VcGraphicsModel component.", -1);
const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-graphics-model"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add a model to the viewer.")])], -1);
const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity :position=\"[114, 40, 1.0]\" description=\"Hello VueCesium\" @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-model ref=\"model\" uri=\"https://zouyaoji.top/vue-cesium/SampleData/models/GroundVehicle/GroundVehicle.glb\"></vc-graphics-model>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n\n      const model = ref(null)\n\n      // life cycle\n      onMounted(() => {\n        model.value.creatingPromise.then(({ Cesium, viewer, cesiumObject }) => {\n          // viewer.zoomTo(viewer.entities)\n          viewer.zoomTo(cesiumObject._vcParent)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        onViewerReady,\n        model\n      }\n    }\n  }\n</script>\n")], -1);
const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying the visibility of the model.</td><td></td></tr><tr><td>uri</td><td>string</td><td></td><td><code>optional</code> A string or Resource Property specifying the URI of the glTF asset.</td><td></td></tr><tr><td>scale</td><td>number</td><td><code>1.0</code></td><td><code>optional</code> A numeric Property specifying a uniform linear scale.</td><td></td></tr><tr><td>minimumPixelSize</td><td>number</td><td><code>0.0</code></td><td><code>optional</code> A numeric Property specifying the approximate minimum pixel size of the model regardless of zoom.</td><td></td></tr><tr><td>maximumScale</td><td>number</td><td></td><td><code>optional</code> The maximum scale size of a model. An upper limit for minimumPixelSize.</td><td></td></tr><tr><td>incrementallyLoadTextures</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Determine if textures may continue to stream in after the model is loaded.</td><td></td></tr><tr><td>runAnimations</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying if glTF animations specified in the model should be started.</td><td></td></tr><tr><td>clampAnimations</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying if glTF animations should hold the last pose for time durations with no keyframes.</td><td></td></tr><tr><td>shadows</td><td>number</td><td><code>1</code></td><td><code>optional</code> An enum Property specifying whether the model casts or receives shadows from each light source. <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>heightReference</td><td>number</td><td><code>0</code></td><td><code>optional</code> A Property specifying what the height is relative to. <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>silhouetteColor</td><td>VcColor|string|Array</td><td><code>&#39;red&#39;</code></td><td><code>optional</code> A Property specifying the Color of the silhouette.</td><td></td></tr><tr><td>silhouetteSize</td><td>number</td><td><code>0.0</code></td><td><code>optional</code> A numeric Property specifying the size of the silhouette in pixels.</td><td></td></tr><tr><td>color</td><td>VcColor|string|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> A Property specifying the Color that blends with the model&#39;s rendered color.</td><td></td></tr><tr><td>colorBlendMode</td><td>number</td><td><code>0</code></td><td><code>optional</code> An enum Property specifying how the color blends with the model. <strong>HIGHLIGHT: 0, REPLACE: 1, MIX: 2</strong></td><td>0/1/2</td></tr><tr><td>colorBlendAmount</td><td>number</td><td><code>0.5</code></td><td><code>optional</code> A numeric Property specifying the color strength when the colorBlendMode is MIX. A value of 0.0 results in the model&#39;s rendered color while a value of 1.0 results in a solid color, with any value in-between resulting in a mix of the two.</td><td></td></tr><tr><td>imageBasedLightingFactor</td><td>VcCartesian2|Array</td><td><code>{x: 1.0, y: 1.0}</code></td><td><code>optional</code> A property specifying the contribution from diffuse and specular image-based lighting.</td><td></td></tr><tr><td>lightColor</td><td>VcColor|string|Array</td><td></td><td><code>optional</code> A property specifying the light color to use when shading the model. The default sun light color will be used when undefined.</td><td></td></tr><tr><td>distanceDisplayCondition</td><td>VcDistanceDisplayCondition|Array</td><td></td><td><code>optional</code> A NearFarScalar Property used to set pixelOffset based on distance from the camera.A Property specifying at what distance from the camera that this model will be displayed.</td><td></td></tr><tr><td>nodeTransformations</td><td>Cesium.TranslationRotationScale</td><td></td><td><code>optional</code> An object, where keys are names of nodes, and values are TranslationRotationScale Properties describing the transformation to apply to that node. The transformation is applied after the node&#39;s existing transformation as specified in the glTF, and does not replace the node&#39;s existing transformation.</td><td></td></tr><tr><td>articulations</td><td>any</td><td></td><td><code>optional</code> An object, where keys are composed of an articulation name, a single space, and a stage name, and the values are numeric properties.</td><td></td></tr><tr><td>clippingPlanes</td><td>Cesium.ClippingPlaneCollection | VcCallbackPropertyFunction&lt;Cesium.ClippingPlaneCollection&gt;</td><td></td><td><code>optional</code> A property specifying the ClippingPlaneCollection used to selectively disable rendering the model.</td><td></td></tr></tbody></table>", 1);
const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>definitionChanged</td><td></td><td>Triggers whenever a property or sub-property is changed or modified.</td></tr></tbody></table>", 1);
function vc_graphics_modelvue_type_template_id_5b4cf6b4_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");
  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");
  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");
  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");
  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcgraphicsmodel",
    tabindex: "-1",
    content: "VcGraphicsModel",
    href: "#vcgraphicsmodel",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcGraphicsModel "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcgraphicsmodel"
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
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Props "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Events "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Reference "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: "), Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/ModelGraphics.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("ModelGraphics")]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-model.md?vue&type=template&id=5b4cf6b4

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-model.md?vue&type=script&lang=ts

/* harmony default export */ var vc_graphics_modelvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;
      function render(_ctx, _cache) {
        const _component_vc_graphics_model = _resolveComponent("vc-graphics-model");
        const _component_vc_entity = _resolveComponent("vc-entity");
        const _component_vc_viewer = _resolveComponent("vc-viewer");
        const _component_el_row = _resolveComponent("el-row");
        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.onViewerReady
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_entity, {
              position: [114, 40, 1.0],
              description: "Hello VueCesium",
              onClick: _ctx.onEntityEvt,
              onMouseover: _ctx.onEntityEvt,
              onMouseout: _ctx.onEntityEvt
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_model, {
                ref: "model",
                uri: "https://zouyaoji.top/vue-cesium/SampleData/models/GroundVehicle/GroundVehicle.glb"
              }, null, 512)]),
              _: 1
            }, 8, ["position", "onClick", "onMouseover", "onMouseout"])]),
            _: 1
          }, 8, ["onReady"])]),
          _: 1
        }, 512)]);
      }
      const {
        ref,
        getCurrentInstance,
        onMounted
      } = vue_esm_browser;
      const democomponentExport = {
        setup() {
          // methods
          const onEntityEvt = e => {
            console.log(e);
          };
          const onViewerReady = cesiumInstance => {
            console.log('viewer ready');
          };
          const model = ref(null);

          // life cycle
          onMounted(() => {
            model.value.creatingPromise.then(_ref => {
              let {
                Cesium,
                viewer,
                cesiumObject
              } = _ref;
              // viewer.zoomTo(viewer.entities)
              viewer.zoomTo(cesiumObject._vcParent);
            });
          });
          return {
            onEntityEvt,
            onViewerReady,
            model
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
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-model.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-model.md



vc_graphics_modelvue_type_script_lang_ts.render = vc_graphics_modelvue_type_template_id_5b4cf6b4_render

/* harmony default export */ var vc_graphics_model = __webpack_exports__["default"] = (vc_graphics_modelvue_type_script_lang_ts);

/***/ })

}]);