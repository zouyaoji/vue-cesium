(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-polyline.md?vue&type=template&id=afa603a2

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcgraphicspolyline\"><a class=\"header-anchor\" href=\"#vcgraphicspolyline\">¶</a> VcGraphicsPolyline</h2><p>Loading a polyline graphic. It is equivalent to initializing a <code>Cesium.PolylineGraphics</code> instance.</p><p><strong>Note:</strong> It needs to be a subcomponent of <code>vc-entity</code> to load normally.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of VcGraphicsPolyline component.</p>", 5);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-graphics-polyline"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add some polylines to the viewer.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-polyline\n        :positions=\"[{ lng: 90, lat: 20, height: 10000 }, { lng: 120, lat: 20, height: 10000 }]\"\n        material=\"red\"\n        :width=\"5\"\n        :clampToGround=\"false\"\n      ></vc-graphics-polyline>\n    </vc-entity>\n    <vc-entity>\n      <vc-graphics-polyline\n        :positions=\"[90, 30, 1000, 120, 30, 1000]\"\n        :material=\"{fabric: { type: 'PolylineGlow', uniforms: { glowPower: 0.2, color: 'blue' }}}\"\n        :width=\"10\"\n      ></vc-graphics-polyline>\n    </vc-entity>\n    <vc-entity>\n      <vc-graphics-polyline\n        :positions=\"[[90, 40, 1000], [120, 40, 1000]]\"\n        :material=\"{fabric: { type: 'PolylineArrow', uniforms: { color: 'purple' }}}\"\n        :width=\"10\"\n      ></vc-graphics-polyline>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const point1 = ref(null)\n      const point2 = ref(null)\n      const point3 = ref(null)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n      return {\n        onEntityEvt,\n        onViewerReady\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying the visibility of the polyline.</td><td></td></tr><tr><td>positions</td><td>Array</td><td></td><td><code>optional</code> A Property specifying the array of Cartesian3 positions that define the line strip.</td><td></td></tr><tr><td>width</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> A numeric Property specifying the width in pixels.</td><td></td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> A numeric Property specifying the angular distance between each latitude and longitude if arcType is not ArcType.NONE.</td><td></td></tr><tr><td>material</td><td>Object|String|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> A Property specifying the material used to draw the polyline.</td><td></td></tr><tr><td>depthFailMaterial</td><td>Object|String|Array</td><td></td><td><code>optional</code> A property specifying the material used to draw the polyline when it is below the terrain.</td><td></td></tr><tr><td>arcType</td><td>Number</td><td><code>1</code></td><td><code>optional</code> The type of line the polyline segments must follow. <strong>NONE: 0, GEODESIC: 1, RHUMB: 2</strong></td><td>0/1/2</td></tr><tr><td>clampToGround</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> A boolean Property specifying whether the Polyline should be clamped to the ground.</td><td></td></tr><tr><td>shadows</td><td>Number</td><td></td><td><code>optional</code> An enum Property specifying whether the polyline casts or receives shadows from each light source. <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>classificationType</td><td>Number</td><td><code>2</code></td><td><code>optional</code> An enum Property specifying whether this polyline will classify terrain, 3D Tiles, or both when on the ground. <strong>TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2</strong></td><td>0/1/2</td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> A Property specifying at what distance from the camera that this polyline will be displayed.</td><td></td></tr><tr><td>zIndex</td><td>Number</td><td><code>0</code></td><td><code>optional</code> A Property specifying the zIndex used for ordering ground geometry. Only has an effect if <code>clampToGround</code> is true and polylines on terrain is supported.</td><td></td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>definitionChanged</td><td></td><td>Triggers whenever a property or sub-property is changed or modified.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PolylineGraphics.html\">PolylineGraphics</a></strong></li></ul>", 6);

function vc_graphics_polylinevue_type_template_id_afa603a2_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-polyline.md?vue&type=template&id=afa603a2

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-polyline.md?vue&type=script&lang=ts

/* harmony default export */ var vc_graphics_polylinevue_type_script_lang_ts = ({
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
        const _component_vc_graphics_polyline = _resolveComponent("vc-graphics-polyline");

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
              onClick: _ctx.onEntityEvt,
              onMouseover: _ctx.onEntityEvt,
              onMouseout: _ctx.onEntityEvt
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polyline, {
                positions: [{
                  lng: 90,
                  lat: 20,
                  height: 10000
                }, {
                  lng: 120,
                  lat: 20,
                  height: 10000
                }],
                material: "red",
                width: 5,
                clampToGround: false
              })]),
              _: 1
            }, 8, ["onClick", "onMouseover", "onMouseout"]), _createVNode(_component_vc_entity, null, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polyline, {
                positions: [90, 30, 1000, 120, 30, 1000],
                material: {
                  fabric: {
                    type: 'PolylineGlow',
                    uniforms: {
                      glowPower: 0.2,
                      color: 'blue'
                    }
                  }
                },
                width: 10
              }, null, 8, ["material"])]),
              _: 1
            }), _createVNode(_component_vc_entity, null, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polyline, {
                positions: [[90, 40, 1000], [120, 40, 1000]],
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
            })]),
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
          // state
          const point1 = ref(null);
          const point2 = ref(null);
          const point3 = ref(null); // methods

          const onEntityEvt = e => {
            console.log(e);
          };

          const onViewerReady = cesiumInstance => {
            console.log('viewer ready');
          };

          return {
            onEntityEvt,
            onViewerReady
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
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-polyline.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-polyline.md



vc_graphics_polylinevue_type_script_lang_ts.render = vc_graphics_polylinevue_type_template_id_afa603a2_render

/* harmony default export */ var vc_graphics_polyline = __webpack_exports__["default"] = (vc_graphics_polylinevue_type_script_lang_ts);

/***/ })

}]);