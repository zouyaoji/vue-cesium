(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/primitives/vc-primitive-classification.md?vue&type=template&id=07b3f8eb

var vc_primitive_classificationvue_type_template_id_07b3f8eb_hoisted_1 = {
  class: "content element-doc"
};

var vc_primitive_classificationvue_type_template_id_07b3f8eb_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcprimitiveclassification\"><a class=\"header-anchor\" href=\"#vcprimitiveclassification\">¶</a> VcPrimitiveClassification</h2><p>Loading a volume enclosing geometry in the Scene to be highlighted. It is equivalent to initializing a <code>Cesium.ClassificationPrimitive</code> instance.</p><p>A primitive combines geometry instances with an Appearance that describes the full shading, including Material and RenderState. Roughly, the geometry instance defines the structure and placement, and the appearance defines the visual characteristics. Decoupling geometry and appearance allows us to mix and match most of them and add a new geometry or appearance independently of each other. Only PerInstanceColorAppearance with the same color across all instances is supported at this time when using ClassificationPrimitive directly. For full Appearance support when classifying terrain or 3D Tiles use GroundPrimitive instead.</p><p>For correct rendering, this feature requires the EXT_frag_depth WebGL extension. For hardware that do not support this extension, there will be rendering artifacts for some viewing angles.</p><p>Valid geometries are BoxGeometry, CylinderGeometry, EllipsoidGeometry, PolylineVolumeGeometry, and SphereGeometry.</p><p>Geometries that follow the surface of the ellipsoid, such as CircleGeometry, CorridorGeometry, EllipseGeometry, PolygonGeometry, and RectangleGeometry, are also valid if they are extruded volumes; otherwise, they will not be rendered.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of VcPrimitiveClassification component.</p>", 8);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-primitive-classification"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(", "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-instance-geometry"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-geometry-polygon"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tag to add a highlighted closed and extruded polygon to the viewer.")])], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\" v-model:camera=\"camera\">\n    <vc-primitive-classification ref=\"primitive\" @click=\"onClicked\" :asynchronous=\"false\">\n      <vc-instance-geometry :attributes=\"attributes\">\n        <vc-geometry-polygon\n          :polygonHierarchy=\"[\n            { lng: 102.1, lat: 29.5 },\n            { lng: 106.2, lat: 29.5 },\n            { lng: 106.2, lat: 33.5 },\n            { lng: 102.1, lat: 33.5 }\n          ]\"\n          :extrudedHeight=\"6000\"\n        ></vc-geometry-polygon>\n      </vc-instance-geometry>\n    </vc-primitive-classification>\n    <vc-provider-terrain-cesium></vc-provider-terrain-cesium>\n    <vc-layer-imagery>\n      <vc-provider-imagery-arcgis></vc-provider-imagery-arcgis>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        attributes: null,\n        camera: {\n          position: {\n            x: -1432246.8223880068,\n            y: 5761224.588247942,\n            z: 3297281.1889481535\n          },\n          heading: 6.20312220367255,\n          pitch: -0.9937536846355606,\n          roll: 0.002443376981836387\n        }\n      }\n    },\n    methods: {\n      onViewerReady({ Cesium, viewer }) {\n        viewer.scene.globe.depthTestAgainstTerrain = true\n        this.attributes = {\n          color: Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color.fromBytes(64, 157, 253, 100))\n        }\n      },\n      onClicked(e) {\n        console.log(e)\n      },\n      unload() {\n        this.$refs.primitive.unload()\n      },\n      load() {\n        this.$refs.primitive.load()\n      },\n      reload() {\n        this.$refs.primitive.reload()\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>geometryInstances</td><td>Object|Array</td><td></td><td><code>optional</code> The geometry instances to render. This can either be a single instance or an array of length one.</td><td></td></tr><tr><td>appearance</td><td>Object</td><td></td><td><code>optional</code> The appearance used to render the primitive. Defaults to a flat PerInstanceColorAppearance when GeometryInstances have a color attribute.</td><td></td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Determines if this primitive will be shown.</td><td></td></tr><tr><td>vertexCacheOptimize</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> When true, geometry vertices are optimized for the pre and post-vertex-shader caches.</td><td></td></tr><tr><td>interleave</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> When true, geometry vertex attributes are interleaved, which can slightly improve rendering performance but increases load time.</td><td></td></tr><tr><td>compressVertices</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> When true, the geometry vertices are compressed, which will save memory.</td><td></td></tr><tr><td>releaseGeometryInstances</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> When true, the primitive does not keep a reference to the input geometryInstances to save memory.</td><td></td></tr><tr><td>allowPicking</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> When true, each geometry instance will only be pickable with Scene#pick. When false, GPU memory is saved.</td><td></td></tr><tr><td>asynchronous</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Determines if the primitive will be created asynchronously or block until ready.</td><td></td></tr><tr><td>classificationType</td><td>Number</td><td><code>2</code></td><td><code>optional</code>Determines whether terrain, 3D Tiles or both will be classified. <strong>TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2</strong></td><td>0/1/2</td></tr><tr><td>debugShowBoundingVolume</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> For debugging only. Determines if this primitive&#39;s commands&#39; bounding spheres are shown.</td><td></td></tr><tr><td>debugShowShadowVolume</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> For debugging only. Determines if the shadow volume for each geometry in the primitive is drawn. Must be true on creation for the volumes to be created before the geometry is released or options.releaseGeometryInstance must be false.</td><td></td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the mouse event takes effect.</td><td></td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse is pressed on this primitive.</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse bounces up on this primitive.</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse clicks on the primitive.</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse clicks outside the primitive.</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the left mouse button double-clicks the primitive.</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves on this primitive.</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves to this primitive.</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves out of this primitive.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/ClassificationPrimitive.html\">ClassificationPrimitive</a></strong></li></ul>", 6);

function vc_primitive_classificationvue_type_template_id_07b3f8eb_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_primitive_classificationvue_type_template_id_07b3f8eb_hoisted_1, [vc_primitive_classificationvue_type_template_id_07b3f8eb_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-classification.md?vue&type=template&id=07b3f8eb

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/primitives/vc-primitive-classification.md?vue&type=script&lang=ts


/* harmony default export */ var vc_primitive_classificationvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        var _component_vc_geometry_polygon = _resolveComponent("vc-geometry-polygon");

        var _component_vc_instance_geometry = _resolveComponent("vc-instance-geometry");

        var _component_vc_primitive_classification = _resolveComponent("vc-primitive-classification");

        var _component_vc_provider_terrain_cesium = _resolveComponent("vc-provider-terrain-cesium");

        var _component_vc_provider_imagery_arcgis = _resolveComponent("vc-provider-imagery-arcgis");

        var _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, {
              onReady: _ctx.onViewerReady,
              camera: _ctx.camera,
              "onUpdate:camera": _cache[1] || (_cache[1] = function ($event) {
                return _ctx.camera = $event;
              })
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_primitive_classification, {
                  ref: "primitive",
                  onClick: _ctx.onClicked,
                  asynchronous: false
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_instance_geometry, {
                      attributes: _ctx.attributes
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_vc_geometry_polygon, {
                          polygonHierarchy: [{
                            lng: 102.1,
                            lat: 29.5
                          }, {
                            lng: 106.2,
                            lat: 29.5
                          }, {
                            lng: 106.2,
                            lat: 33.5
                          }, {
                            lng: 102.1,
                            lat: 33.5
                          }],
                          extrudedHeight: 6000
                        }, null, 8, ["polygonHierarchy"])];
                      }),
                      _: 1
                    }, 8, ["attributes"])];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_vc_provider_terrain_cesium), _createVNode(_component_vc_layer_imagery, null, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_arcgis)];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }, 8, ["onReady", "camera"]), _createVNode(_component_el_row, {
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
            attributes: null,
            camera: {
              position: {
                x: -1432246.8223880068,
                y: 5761224.588247942,
                z: 3297281.1889481535
              },
              heading: 6.20312220367255,
              pitch: -0.9937536846355606,
              roll: 0.002443376981836387
            }
          };
        },
        methods: {
          onViewerReady: function onViewerReady(_ref) {
            var Cesium = _ref.Cesium,
                viewer = _ref.viewer;
            viewer.scene.globe.depthTestAgainstTerrain = true;
            this.attributes = {
              color: Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color.fromBytes(64, 157, 253, 100))
            };
          },
          onClicked: function onClicked(e) {
            console.log(e);
          },
          unload: function unload() {
            this.$refs.primitive.unload();
          },
          load: function load() {
            this.$refs.primitive.load();
          },
          reload: function reload() {
            this.$refs.primitive.reload();
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-classification.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-classification.md



vc_primitive_classificationvue_type_script_lang_ts.render = vc_primitive_classificationvue_type_template_id_07b3f8eb_render

/* harmony default export */ var vc_primitive_classification = __webpack_exports__["default"] = (vc_primitive_classificationvue_type_script_lang_ts);

/***/ })

}]);