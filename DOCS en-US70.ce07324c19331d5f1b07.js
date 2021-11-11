(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/primitives/vc-primitive.md?vue&type=template&id=2f6f3772

const vc_primitivevue_type_template_id_2f6f3772_hoisted_1 = {
  class: "content element-doc"
};

const vc_primitivevue_type_template_id_2f6f3772_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcprimitive\"><a class=\"header-anchor\" href=\"#vcprimitive\">¶</a> VcPrimitive</h2><p>Loading a geometry of primitive, the geometry can be from a single <code>GeometryInstance</code> or from an array of instances, or <code>vc-geometry-xxx</code> component. It is equivalent to initializing a <code>Cesium.Primitive</code> instance.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of VcPrimitive component.</p>", 4);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-instance-geometry"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-geometry-circle"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add a rectangle and circle to the viewer.")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-primitive ref=\"primitive\" @click=\"onClicked\" :appearance=\"appearance\" :geometryInstances=\"geometryInstances\">\n      <vc-instance-geometry>\n        <vc-geometry-circle ref=\"geometryRef\" :center=\"[103, 32]\" :radius=\"250000\"></vc-geometry-circle>\n      </vc-instance-geometry>\n    </vc-primitive>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        geometryInstances: {},\n        appearance: {}\n      }\n    },\n    methods: {\n      onViewerReady({ Cesium, viewer }) {\n        const rectangle = { west: 105.5, south: 29.5, east: 115.5, north: 35.5 }\n        this.geometryInstances = new Cesium.GeometryInstance({\n          geometry: new Cesium.RectangleGeometry({\n            rectangle: Cesium.Rectangle.fromDegrees(rectangle.west, rectangle.south, rectangle.east, rectangle.north)\n          })\n        })\n        this.appearance = new Cesium.MaterialAppearance({\n          material: Cesium.Material.fromType('Checkerboard', {\n            repeat: new Cesium.Cartesian2(20.0, 6.0)\n          }),\n          materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED\n        })\n      },\n      onClicked(e) {\n        console.log(e)\n      },\n      unload() {\n        this.$refs.primitive.unload()\n      },\n      load() {\n        this.$refs.primitive.load()\n      },\n      reload() {\n        this.$refs.primitive.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>geometryInstances</td><td>Object|Array</td><td></td><td><code>optional</code> The geometry instances - or a single geometry instance - to render.</td><td></td></tr><tr><td>appearance</td><td>Object</td><td></td><td><code>optional</code> The appearance used to render the primitive.</td><td></td></tr><tr><td>depthFailAppearance</td><td>Object</td><td></td><td><code>optional</code> The appearance used to shade this primitive when it fails the depth test.</td><td></td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Determines if this primitive will be shown.</td><td></td></tr><tr><td>modelMatrix</td><td>Object</td><td></td><td><code>optional</code> The 4x4 transformation matrix that transforms the primitive (all geometry instances) from model to world coordinates.</td><td></td></tr><tr><td>vertexCacheOptimize</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> When true, geometry vertices are optimized for the pre and post-vertex-shader caches.</td><td></td></tr><tr><td>interleave</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> When true, geometry vertex attributes are interleaved, which can slightly improve rendering performance but increases load time.</td><td></td></tr><tr><td>compressVertices</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> When true, the geometry vertices are compressed, which will save memory.</td><td></td></tr><tr><td>releaseGeometryInstances</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> When true, the primitive does not keep a reference to the input geometryInstances to save memory.</td><td></td></tr><tr><td>allowPicking</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> When true, each geometry instance will only be pickable with Scene#pick. When false, GPU memory is saved.</td><td></td></tr><tr><td>cull</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> When true, the renderer frustum culls and horizon culls the primitive&#39;s commands based on their bounding volume. Set this to false for a small performance gain if you are manually culling the primitive.</td><td></td></tr><tr><td>asynchronous</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Determines if the primitive will be created asynchronously or block until ready.</td><td></td></tr><tr><td>debugShowBoundingVolume</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> For debugging only. Determines if this primitive&#39;s commands&#39; bounding spheres are shown.</td><td></td></tr><tr><td>shadows</td><td>Number</td><td><code>0</code></td><td><code>optional</code> Determines whether this primitive casts or receives shadows from each light source. <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the mouse event takes effect.</td><td></td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse is pressed on this primitive.</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse bounces up on this primitive.</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse clicks on the primitive.</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse clicks outside the primitive.</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the left mouse button double-clicks the primitive.</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves on this primitive.</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves to this primitive.</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves out of this primitive.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/Primitive.html\">Primitive</a></strong></li></ul>", 6);

function vc_primitivevue_type_template_id_2f6f3772_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_primitivevue_type_template_id_2f6f3772_hoisted_1, [vc_primitivevue_type_template_id_2f6f3772_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive.md?vue&type=template&id=2f6f3772

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/primitives/vc-primitive.md?vue&type=script&lang=ts

/* harmony default export */ var vc_primitivevue_type_script_lang_ts = ({
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
        const _component_vc_geometry_circle = _resolveComponent("vc-geometry-circle");

        const _component_vc_instance_geometry = _resolveComponent("vc-instance-geometry");

        const _component_vc_primitive = _resolveComponent("vc-primitive");

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
            default: _withCtx(() => [_createVNode(_component_vc_primitive, {
              ref: "primitive",
              onClick: _ctx.onClicked,
              appearance: _ctx.appearance,
              geometryInstances: _ctx.geometryInstances
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_instance_geometry, null, {
                default: _withCtx(() => [_createVNode(_component_vc_geometry_circle, {
                  ref: "geometryRef",
                  center: [103, 32],
                  radius: 250000
                }, null, 512)]),
                _: 1
              })]),
              _: 1
            }, 8, ["onClick", "appearance", "geometryInstances"])]),
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

      const democomponentExport = {
        data() {
          return {
            geometryInstances: {},
            appearance: {}
          };
        },

        methods: {
          onViewerReady({
            Cesium,
            viewer
          }) {
            const rectangle = {
              west: 105.5,
              south: 29.5,
              east: 115.5,
              north: 35.5
            };
            this.geometryInstances = new Cesium.GeometryInstance({
              geometry: new Cesium.RectangleGeometry({
                rectangle: Cesium.Rectangle.fromDegrees(rectangle.west, rectangle.south, rectangle.east, rectangle.north)
              })
            });
            this.appearance = new Cesium.MaterialAppearance({
              material: Cesium.Material.fromType('Checkerboard', {
                repeat: new Cesium.Cartesian2(20.0, 6.0)
              }),
              materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED
            });
          },

          onClicked(e) {
            console.log(e);
          },

          unload() {
            this.$refs.primitive.unload();
          },

          load() {
            this.$refs.primitive.load();
          },

          reload() {
            this.$refs.primitive.reload();
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
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive.md



vc_primitivevue_type_script_lang_ts.render = vc_primitivevue_type_template_id_2f6f3772_render

/* harmony default export */ var vc_primitive = __webpack_exports__["default"] = (vc_primitivevue_type_script_lang_ts);

/***/ })

}]);