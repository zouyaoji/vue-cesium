(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ 979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/primitives/vc-primitive-classification.md?vue&type=template&id=9e04c8d4

const vc_primitive_classificationvue_type_template_id_9e04c8d4_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_primitive_classificationvue_type_template_id_9e04c8d4_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPrimitiveClassification ");

const vc_primitive_classificationvue_type_template_id_9e04c8d4_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading a volume enclosing geometry in the Scene to be highlighted. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.ClassificationPrimitive"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance.")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "A primitive combines geometry instances with an Appearance that describes the full shading, including Material and RenderState. Roughly, the geometry instance defines the structure and placement, and the appearance defines the visual characteristics. Decoupling geometry and appearance allows us to mix and match most of them and add a new geometry or appearance independently of each other. Only PerInstanceColorAppearance with the same color across all instances is supported at this time when using ClassificationPrimitive directly. For full Appearance support when classifying terrain or 3D Tiles use GroundPrimitive instead.", -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "For correct rendering, this feature requires the EXT_frag_depth WebGL extension. For hardware that do not support this extension, there will be rendering artifacts for some viewing angles.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Valid geometries are BoxGeometry, CylinderGeometry, EllipsoidGeometry, PolylineVolumeGeometry, and SphereGeometry.", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Geometries that follow the surface of the ellipsoid, such as CircleGeometry, CorridorGeometry, EllipseGeometry, PolygonGeometry, and RectangleGeometry, are also valid if they are extruded volumes; otherwise, they will not be rendered.", -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcPrimitiveClassification component.", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive-classification"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-geometry-instance"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-geometry-polygon"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add a highlighted closed and extruded polygon to the viewer.")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\" v-model:camera=\"camera\">\n    <vc-primitive-classification ref=\"primitive\" @click=\"onClicked\" :asynchronous=\"false\">\n      <vc-geometry-instance :attributes=\"attributes\">\n        <vc-geometry-polygon\n          :polygonHierarchy=\"[\n            { lng: 102.1, lat: 29.5 },\n            { lng: 106.2, lat: 29.5 },\n            { lng: 106.2, lat: 33.5 },\n            { lng: 102.1, lat: 33.5 }\n          ]\"\n          :extrudedHeight=\"6000\"\n        ></vc-geometry-polygon>\n      </vc-geometry-instance>\n    </vc-primitive-classification>\n    <vc-terrain-provider-cesium></vc-terrain-provider-cesium>\n    <vc-layer-imagery>\n      <vc-imagery-provider-arcgis></vc-imagery-provider-arcgis>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        attributes: null,\n        camera: {\n          position: {\n            x: -1432246.8223880068,\n            y: 5761224.588247942,\n            z: 3297281.1889481535\n          },\n          heading: 6.20312220367255,\n          pitch: -0.9937536846355606,\n          roll: 0.002443376981836387\n        }\n      }\n    },\n    methods: {\n      onViewerReady({ Cesium, viewer }) {\n        viewer.scene.globe.depthTestAgainstTerrain = true\n        this.attributes = {\n          color: Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color.fromBytes(64, 157, 253, 100))\n        }\n      },\n      onClicked(e) {\n        console.log(e)\n      },\n      unload() {\n        this.$refs.primitive.unload()\n      },\n      load() {\n        this.$refs.primitive.load()\n      },\n      reload() {\n        this.$refs.primitive.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>geometryInstances</td><td>Object|Array</td><td></td><td><code>optional</code> The geometry instances to render. This can either be a single instance or an array of length one.</td><td></td></tr><tr><td>appearance</td><td>Object</td><td></td><td><code>optional</code> The appearance used to render the primitive. Defaults to a flat PerInstanceColorAppearance when GeometryInstances have a color attribute.</td><td></td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Determines if this primitive will be shown.</td><td></td></tr><tr><td>vertexCacheOptimize</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> When true, geometry vertices are optimized for the pre and post-vertex-shader caches.</td><td></td></tr><tr><td>interleave</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> When true, geometry vertex attributes are interleaved, which can slightly improve rendering performance but increases load time.</td><td></td></tr><tr><td>compressVertices</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> When true, the geometry vertices are compressed, which will save memory.</td><td></td></tr><tr><td>releaseGeometryInstances</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> When true, the primitive does not keep a reference to the input geometryInstances to save memory.</td><td></td></tr><tr><td>allowPicking</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> When true, each geometry instance will only be pickable with Scene#pick. When false, GPU memory is saved.</td><td></td></tr><tr><td>asynchronous</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Determines if the primitive will be created asynchronously or block until ready.</td><td></td></tr><tr><td>classificationType</td><td>Number</td><td><code>2</code></td><td><code>optional</code>Determines whether terrain, 3D Tiles or both will be classified. <strong>TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2</strong></td><td>0/1/2</td></tr><tr><td>debugShowBoundingVolume</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> For debugging only. Determines if this primitive&#39;s commands&#39; bounding spheres are shown.</td><td></td></tr><tr><td>debugShowShadowVolume</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> For debugging only. Determines if the shadow volume for each geometry in the primitive is drawn. Must be true on creation for the volumes to be created before the geometry is released or options.releaseGeometryInstance must be false.</td><td></td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the mouse event takes effect.</td><td></td></tr></tbody></table>", 1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse is pressed on this primitive.</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse bounces up on this primitive.</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks on the primitive.</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks outside the primitive.</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>Triggers when the left mouse button double-clicks the primitive.</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves on this primitive.</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves to this primitive.</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves out of this primitive.</td></tr></tbody></table>", 1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Slots ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Subtags")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "This is where vc-geometry-instance tag content goes."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-geometry-instance")])])], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("ClassificationPrimitive");

function vc_primitive_classificationvue_type_template_id_9e04c8d4_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_primitive_classificationvue_type_template_id_9e04c8d4_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcprimitiveclassification",
    tabindex: "-1",
    content: "VcPrimitiveClassification",
    href: "#vcprimitiveclassification",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_primitive_classificationvue_type_template_id_9e04c8d4_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcprimitiveclassification"
    })]),
    _: 1
  }), vc_primitive_classificationvue_type_template_id_9e04c8d4_hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "slots",
    tabindex: "-1",
    content: "Slots",
    href: "#slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slots"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_19, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/ClassificationPrimitive.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_20]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-classification.md?vue&type=template&id=9e04c8d4

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/primitives/vc-primitive-classification.md?vue&type=script&lang=ts

/* harmony default export */ var vc_primitive_classificationvue_type_script_lang_ts = ({
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
        const _component_vc_geometry_polygon = _resolveComponent("vc-geometry-polygon");

        const _component_vc_geometry_instance = _resolveComponent("vc-geometry-instance");

        const _component_vc_primitive_classification = _resolveComponent("vc-primitive-classification");

        const _component_vc_terrain_provider_cesium = _resolveComponent("vc-terrain-provider-cesium");

        const _component_vc_imagery_provider_arcgis = _resolveComponent("vc-imagery-provider-arcgis");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.onViewerReady,
            camera: _ctx.camera,
            "onUpdate:camera": _cache[0] || (_cache[0] = $event => _ctx.camera = $event)
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_primitive_classification, {
              ref: "primitive",
              onClick: _ctx.onClicked,
              asynchronous: false
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_geometry_instance, {
                attributes: _ctx.attributes
              }, {
                default: _withCtx(() => [_createVNode(_component_vc_geometry_polygon, {
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
                }, null, 8, ["polygonHierarchy"])]),
                _: 1
              }, 8, ["attributes"])]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_vc_terrain_provider_cesium), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_arcgis)]),
              _: 1
            })]),
            _: 1
          }, 8, ["onReady", "camera"]), _createVNode(_component_el_row, {
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
          onViewerReady(_ref) {
            let {
              Cesium,
              viewer
            } = _ref;
            viewer.scene.globe.depthTestAgainstTerrain = true;
            this.attributes = {
              color: Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color.fromBytes(64, 157, 253, 100))
            };
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
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-classification.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-classification.md



vc_primitive_classificationvue_type_script_lang_ts.render = vc_primitive_classificationvue_type_template_id_9e04c8d4_render

/* harmony default export */ var vc_primitive_classification = __webpack_exports__["default"] = (vc_primitive_classificationvue_type_script_lang_ts);

/***/ })

}]);