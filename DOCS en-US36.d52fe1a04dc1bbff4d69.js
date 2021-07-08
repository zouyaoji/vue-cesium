(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-model.md?vue&type=template&id=6b14d03b

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcgraphicsmodel\"><a class=\"header-anchor\" href=\"#vcgraphicsmodel\">¶</a> VcGraphicsModel</h2><p>Loading the model graphic. It is equivalent to initializing a <code>Cesium.ModelGraphics</code> instance.</p><p><strong>Note:</strong> It needs to be a subcomponent of <code>vc-entity</code> to load normally.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of the VcGraphicsModel component.</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-graphics-model"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tag to add a model to the viewer.")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity :position=\"[114, 40, 1.0]\" description=\"Hello Vue Cesium\" @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-model ref=\"model\" uri=\"./SampleData/models/GroundVehicle/GroundVehicle.glb\"></vc-graphics-model>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n\n      const model = ref(null)\n\n      // life cycle\n      onMounted(() => {\n        model.value.createPromise.then(({ Cesium, viewer, cesiumObject }) => {\n          // viewer.zoomTo(viewer.entities)\n          viewer.zoomTo(cesiumObject._vcParent)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        onViewerReady,\n        model\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying the visibility of the model.</td><td></td></tr><tr><td>uri</td><td>String</td><td></td><td><code>optional</code> A string or Resource Property specifying the URI of the glTF asset.</td><td></td></tr><tr><td>scale</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> A numeric Property specifying a uniform linear scale.</td><td></td></tr><tr><td>minimumPixelSize</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> A numeric Property specifying the approximate minimum pixel size of the model regardless of zoom.</td><td></td></tr><tr><td>maximumScale</td><td>Number</td><td></td><td><code>optional</code> The maximum scale size of a model. An upper limit for minimumPixelSize.</td><td></td></tr><tr><td>incrementallyLoadTextures</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Determine if textures may continue to stream in after the model is loaded.</td><td></td></tr><tr><td>runAnimations</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying if glTF animations specified in the model should be started.</td><td></td></tr><tr><td>clampAnimations</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying if glTF animations should hold the last pose for time durations with no keyframes.</td><td></td></tr><tr><td>shadows</td><td>Number</td><td><code>1</code></td><td><code>optional</code> An enum Property specifying whether the model casts or receives shadows from each light source. <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>heightReference</td><td>Number</td><td><code>0</code></td><td><code>optional</code> A Property specifying what the height is relative to. <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>silhouetteColor</td><td>Object|String|Array</td><td><code>&#39;red&#39;</code></td><td><code>optional</code> A Property specifying the Color of the silhouette.</td><td></td></tr><tr><td>silhouetteSize</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> A numeric Property specifying the size of the silhouette in pixels.</td><td></td></tr><tr><td>color</td><td>Object|String|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> A Property specifying the Color that blends with the model&#39;s rendered color.</td><td></td></tr><tr><td>colorBlendMode</td><td>Number</td><td><code>0</code></td><td><code>optional</code> An enum Property specifying how the color blends with the model. <strong>HIGHLIGHT: 0, REPLACE: 1, MIX: 2</strong></td><td>0/1/2</td></tr><tr><td>colorBlendAmount</td><td>Number</td><td><code>0.5</code></td><td><code>optional</code> A numeric Property specifying the color strength when the colorBlendMode is MIX. A value of 0.0 results in the model&#39;s rendered color while a value of 1.0 results in a solid color, with any value in-between resulting in a mix of the two.</td><td></td></tr><tr><td>imageBasedLightingFactor</td><td>Object|Array</td><td><code>{x: 1.0, y: 1.0}</code></td><td><code>optional</code> A property specifying the contribution from diffuse and specular image-based lighting.</td><td></td></tr><tr><td>lightColor</td><td>Object|String|Array</td><td></td><td><code>optional</code> A property specifying the light color to use when shading the model. The default sun light color will be used when undefined.</td><td></td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> A NearFarScalar Property used to set pixelOffset based on distance from the camera.A Property specifying at what distance from the camera that this model will be displayed.</td><td></td></tr><tr><td>nodeTransformations</td><td>Object</td><td></td><td><code>optional</code> An object, where keys are names of nodes, and values are TranslationRotationScale Properties describing the transformation to apply to that node. The transformation is applied after the node&#39;s existing transformation as specified in the glTF, and does not replace the node&#39;s existing transformation.</td><td></td></tr><tr><td>articulations</td><td>Object</td><td></td><td><code>optional</code> An object, where keys are composed of an articulation name, a single space, and a stage name, and the values are numeric properties.</td><td></td></tr><tr><td>clippingPlanes</td><td>Object</td><td></td><td><code>optional</code> A property specifying the ClippingPlaneCollection used to selectively disable rendering the model.</td><td></td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>definitionChanged</td><td></td><td>Triggers whenever a property or sub-property is changed or modified.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/ModelGraphics.html\">ModelGraphics</a></strong></li></ul>", 6);

function vc_graphics_modelvue_type_template_id_6b14d03b_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-model.md?vue&type=template&id=6b14d03b

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-model.md?vue&type=script&lang=ts


/* harmony default export */ var vc_graphics_modelvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_vc_graphics_model = _resolveComponent("vc-graphics-model");

        var _component_vc_entity = _resolveComponent("vc-entity");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, {
              onReady: _ctx.onViewerReady
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_entity, {
                  position: [114, 40, 1.0],
                  description: "Hello Vue Cesium",
                  onClick: _ctx.onEntityEvt,
                  onMouseover: _ctx.onEntityEvt,
                  onMouseout: _ctx.onEntityEvt
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_model, {
                      ref: "model",
                      uri: "./SampleData/models/GroundVehicle/GroundVehicle.glb"
                    }, null, 512)];
                  }),
                  _: 1
                }, 8, ["position", "onClick", "onMouseover", "onMouseout"])];
              }),
              _: 1
            }, 8, ["onReady"])];
          }),
          _: 1
        }, 512)]);
      }

      var ref = vue_esm_browser["K" /* ref */],
          getCurrentInstance = vue_esm_browser["q" /* getCurrentInstance */],
          onMounted = vue_esm_browser["C" /* onMounted */];
      var democomponentExport = {
        setup: function setup() {
          // methods
          var onEntityEvt = function onEntityEvt(e) {
            console.log(e);
          };

          var onViewerReady = function onViewerReady(cesiumInstance) {
            console.log('viewer ready');
          };

          var model = ref(null); // life cycle

          onMounted(function () {
            model.value.createPromise.then(function (_ref) {
              var Cesium = _ref.Cesium,
                  viewer = _ref.viewer,
                  cesiumObject = _ref.cesiumObject;
              // viewer.zoomTo(viewer.entities)
              viewer.zoomTo(cesiumObject._vcParent);
            });
          });
          return {
            onEntityEvt: onEntityEvt,
            onViewerReady: onViewerReady,
            model: model
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-model.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-model.md



vc_graphics_modelvue_type_script_lang_ts.render = vc_graphics_modelvue_type_template_id_6b14d03b_render

/* harmony default export */ var vc_graphics_model = __webpack_exports__["default"] = (vc_graphics_modelvue_type_script_lang_ts);

/***/ })

}]);