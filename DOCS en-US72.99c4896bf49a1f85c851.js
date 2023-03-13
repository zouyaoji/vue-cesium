(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.33/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_xtlouzbwsjm2tieu75n2ogelwy/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/primitives/vc-primitive-ground.md?vue&type=template&id=34e0593d

const vc_primitive_groundvue_type_template_id_34e0593d_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_primitive_groundvue_type_template_id_34e0593d_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPrimitiveGround ");

const vc_primitive_groundvue_type_template_id_34e0593d_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading a geometry draped over terrain or 3D Tiles in the Scene. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.GroundPrimitive"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance.")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "A primitive combines geometry instances with an Appearance that describes the full shading, including Material and RenderState. Roughly, the geometry instance defines the structure and placement, and the appearance defines the visual characteristics. Decoupling geometry and appearance allows us to mix and match most of them and add a new geometry or appearance independently of each other.", -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Support for the WEBGL_depth_texture extension is required to use GeometryInstances with different PerInstanceColors or materials besides PerInstanceColorAppearance.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Textured GroundPrimitives were designed for notional patterns and are not meant for precisely mapping textures to terrain - for that use case, use SingleTileImageryProvider.", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "For correct rendering, this feature requires the EXT_frag_depth WebGL extension. For hardware that do not support this extension, there will be rendering artifacts for some viewing angles.", -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Valid geometries are CircleGeometry, CorridorGeometry, EllipseGeometry, PolygonGeometry, and RectangleGeometry.", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcPrimitiveGround component.", -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive-classification"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-geometry-instance"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-geometry-rectangle"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add a rectangle to the viewer.")])], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\" v-model:camera=\"camera\">\n    <vc-primitive-ground ref=\"primitive\" @click=\"onClicked\" :appearance=\"appearance\" :asynchronous=\"false\" interleave>\n      <vc-geometry-instance>\n        <vc-geometry-rectangle :rectangle=\"[102.5, 29.5, 106.5, 33.5]\"></vc-geometry-rectangle>\n      </vc-geometry-instance>\n    </vc-primitive-ground>\n    <vc-terrain-provider-cesium></vc-terrain-provider-cesium>\n    <vc-layer-imagery>\n      <vc-imagery-provider-arcgis></vc-imagery-provider-arcgis>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        appearance: null,\n        camera: {\n          position: {\n            x: -1432246.8223880068,\n            y: 5761224.588247942,\n            z: 3297281.1889481535\n          },\n          heading: 6.20312220367255,\n          pitch: -0.9937536846355606,\n          roll: 0.002443376981836387\n        }\n      }\n    },\n    methods: {\n      onViewerReady({ Cesium, viewer }) {\n        viewer.scene.globe.depthTestAgainstTerrain = true\n        this.appearance = new Cesium.MaterialAppearance({\n          material: new Cesium.Material({\n            fabric: {\n              type: 'Image',\n              uniforms: {\n                image: 'https://zouyaoji.top/vue-cesium/SampleData/images/radar/1.png'\n              }\n            }\n          })\n        })\n\n        const urls = [\n          'https://zouyaoji.top/vue-cesium/SampleData/images/radar/1.png',\n          'https://zouyaoji.top/vue-cesium/SampleData/images/radar/2.png',\n          'https://zouyaoji.top/vue-cesium/SampleData/images/radar/3.png',\n          'https://zouyaoji.top/vue-cesium/SampleData/images/radar/4.png',\n          'https://zouyaoji.top/vue-cesium/SampleData/images/radar/5.png',\n          'https://zouyaoji.top/vue-cesium/SampleData/images/radar/6.png',\n          'https://zouyaoji.top/vue-cesium/SampleData/images/radar/7.png',\n          'https://zouyaoji.top/vue-cesium/SampleData/images/radar/8.png',\n          'https://zouyaoji.top/vue-cesium/SampleData/images/radar/9.png',\n          'https://zouyaoji.top/vue-cesium/SampleData/images/radar/10.png'\n        ]\n        let i = 0\n        let that = this\n        setInterval(function () {\n          that.appearance.material.uniforms.image = urls[i]\n          i++\n          if (i === 10) i = 0\n        }, 500)\n      },\n      onClicked(e) {\n        console.log(e)\n      },\n      unload() {\n        this.$refs.primitive.unload()\n      },\n      load() {\n        this.$refs.primitive.load()\n      },\n      reload() {\n        this.$refs.primitive.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>geometryInstances</td><td>Cesium.GeometryInstance | Array&lt;Cesium.GeometryInstance&gt;|Array</td><td></td><td><code>optional</code> The geometry instances to render. This can either be a single instance or an array of length one.</td><td></td></tr><tr><td>appearance</td><td>VcAppearance</td><td></td><td><code>optional</code> The appearance used to render the primitive. Defaults to a flat PerInstanceColorAppearance when GeometryInstances have a color attribute.</td><td></td></tr><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Determines if this primitive will be shown.</td><td></td></tr><tr><td>vertexCacheOptimize</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> When true, geometry vertices are optimized for the pre and post-vertex-shader caches.</td><td></td></tr><tr><td>interleave</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> When true, geometry vertex attributes are interleaved, which can slightly improve rendering performance but increases load time.</td><td></td></tr><tr><td>compressVertices</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> When true, the geometry vertices are compressed, which will save memory.</td><td></td></tr><tr><td>releaseGeometryInstances</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> When true, the primitive does not keep a reference to the input geometryInstances to save memory.</td><td></td></tr><tr><td>allowPicking</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> When true, each geometry instance will only be pickable with Scene#pick. When false, GPU memory is saved.</td><td></td></tr><tr><td>asynchronous</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Determines if the primitive will be created asynchronously or block until ready.</td><td></td></tr><tr><td>classificationType</td><td>number</td><td><code>2</code></td><td><code>optional</code>Determines whether terrain, 3D Tiles or both will be classified. <strong>TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2</strong></td><td>0/1/2</td></tr><tr><td>debugShowBoundingVolume</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> For debugging only. Determines if this primitive&#39;s commands&#39; bounding spheres are shown.</td><td></td></tr><tr><td>debugShowShadowVolume</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> For debugging only. Determines if the shadow volume for each geometry in the primitive is drawn. Must be true on creation for the volumes to be created before the geometry is released or options.releaseGeometryInstance must be false.</td><td></td></tr><tr><td>enableMouseEvent</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the mouse event takes effect.</td><td></td></tr></tbody></table>", 1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse is pressed on this primitive.</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse bounces up on this primitive.</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks on the primitive.</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks outside the primitive.</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>Triggers when the left mouse button double-clicks the primitive.</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves on this primitive.</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves to this primitive.</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves out of this primitive.</td></tr></tbody></table>", 1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Slots ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Subtags")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "This is where vc-geometry-instance tag content goes."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-geometry-instance")])])], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("GroundPrimitive");

function vc_primitive_groundvue_type_template_id_34e0593d_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_primitive_groundvue_type_template_id_34e0593d_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcprimitiveground",
    tabindex: "-1",
    content: "VcPrimitiveGround",
    href: "#vcprimitiveground",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_primitive_groundvue_type_template_id_34e0593d_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcprimitiveground"
    })]),
    _: 1
  }), vc_primitive_groundvue_type_template_id_34e0593d_hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_12]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_11]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "slots",
    tabindex: "-1",
    content: "Slots",
    href: "#slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slots"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_20, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/GroundPrimitive.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_21]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-ground.md?vue&type=template&id=34e0593d

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_xtlouzbwsjm2tieu75n2ogelwy/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/primitives/vc-primitive-ground.md?vue&type=script&lang=ts

/* harmony default export */ var vc_primitive_groundvue_type_script_lang_ts = ({
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
        const _component_vc_geometry_rectangle = _resolveComponent("vc-geometry-rectangle");

        const _component_vc_geometry_instance = _resolveComponent("vc-geometry-instance");

        const _component_vc_primitive_ground = _resolveComponent("vc-primitive-ground");

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
            default: _withCtx(() => [_createVNode(_component_vc_primitive_ground, {
              ref: "primitive",
              onClick: _ctx.onClicked,
              appearance: _ctx.appearance,
              asynchronous: false,
              interleave: ""
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_geometry_instance, null, {
                default: _withCtx(() => [_createVNode(_component_vc_geometry_rectangle, {
                  rectangle: [102.5, 29.5, 106.5, 33.5]
                }, null, 8, ["rectangle"])]),
                _: 1
              })]),
              _: 1
            }, 8, ["onClick", "appearance"]), _createVNode(_component_vc_terrain_provider_cesium), _createVNode(_component_vc_layer_imagery, null, {
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
            appearance: null,
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
            this.appearance = new Cesium.MaterialAppearance({
              material: new Cesium.Material({
                fabric: {
                  type: 'Image',
                  uniforms: {
                    image: 'https://zouyaoji.top/vue-cesium/SampleData/images/radar/1.png'
                  }
                }
              })
            });
            const urls = ['https://zouyaoji.top/vue-cesium/SampleData/images/radar/1.png', 'https://zouyaoji.top/vue-cesium/SampleData/images/radar/2.png', 'https://zouyaoji.top/vue-cesium/SampleData/images/radar/3.png', 'https://zouyaoji.top/vue-cesium/SampleData/images/radar/4.png', 'https://zouyaoji.top/vue-cesium/SampleData/images/radar/5.png', 'https://zouyaoji.top/vue-cesium/SampleData/images/radar/6.png', 'https://zouyaoji.top/vue-cesium/SampleData/images/radar/7.png', 'https://zouyaoji.top/vue-cesium/SampleData/images/radar/8.png', 'https://zouyaoji.top/vue-cesium/SampleData/images/radar/9.png', 'https://zouyaoji.top/vue-cesium/SampleData/images/radar/10.png'];
            let i = 0;
            let that = this;
            setInterval(function () {
              that.appearance.material.uniforms.image = urls[i];
              i++;
              if (i === 10) i = 0;
            }, 500);
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
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-ground.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-ground.md



vc_primitive_groundvue_type_script_lang_ts.render = vc_primitive_groundvue_type_template_id_34e0593d_render

/* harmony default export */ var vc_primitive_ground = __webpack_exports__["default"] = (vc_primitive_groundvue_type_script_lang_ts);

/***/ })

}]);