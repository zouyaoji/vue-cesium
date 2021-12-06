(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.23/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_b706f451d6404ce468e2858b35d8eb7f/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_b706f451d6404ce468e2858b35d8eb7f/node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-polygon.md?vue&type=template&id=5e1598a0

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcGraphicsPolygon ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading a polygon graphic. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.PolygonGraphics"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance.")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "Note:"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" It needs to be a subcomponent of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to load normally.")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcGraphicsPolygon component.", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-graphics-polygon"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add some polygons to the viewer.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-polygon ref=\"polygon1\" :hierarchy=\"[[-115,37],[-115,32],[-107,33],[-102,31],[-102,35]]\" material=\"red\"></vc-graphics-polygon>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-polygon\n        :hierarchy=\"[{ lng: -108.0, lat: 42.0 }, { lng: -100.0, lat: 42.0 }, { lng: -104.0, lat: 40.0 }]\"\n        material=\"green\"\n        :extrudedHeight=\"500000.0\"\n        :closeTop=\"false\"\n        :closeBottom=\"false\"\n        ref=\"polygon2\"\n      ></vc-graphics-polygon>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-polygon\n        :hierarchy=\"[[-108,25,100000],[-100,25,100000],[-100,30,100000],[-108,30,100000]]\"\n        :material=\"[255,165,0,125]\"\n        :extrudedHeight=\"0\"\n        :perPositionHeight=\"true\"\n        :outline=\"true\"\n        outlineColor=\"black\"\n        ref=\"polygon3\"\n      ></vc-graphics-polygon>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-polygon :hierarchy=\"hierarchy4\" :material=\"[0,0,255,125]\" :height=\"0\" :outline=\"true\" ref=\"polygon4\"></vc-graphics-polygon>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-polygon\n        :hierarchy=\"[-90.0, 41.0, 0.0, -85.0, 41.0, 500000.0, -80.0, 41.0, 0.0]\"\n        :material=\"[0,255,255,125]\"\n        :perPositionHeight=\"true\"\n        :outline=\"true\"\n        outlineColor=\"black\"\n        ref=\"polygon5\"\n      ></vc-graphics-polygon>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-polygon\n        :hierarchy=\"[[-120,45],[-80,45],[-80,55],[-120,55]]\"\n        material=\"purple\"\n        :extrudedHeight=\"50000\"\n        :outline=\"true\"\n        outlineColor=\"magenta\"\n        ref=\"polygon6\"\n      ></vc-graphics-polygon>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const polygon1 = ref(null)\n      const polygon2 = ref(null)\n      const polygon3 = ref(null)\n      const polygon4 = ref(null)\n      const polygon5 = ref(null)\n      const polygon6 = ref(null)\n      const hierarchy4 = {\n        positions: [\n          { lng: -99.0, lat: 30.0 },\n          { lng: -85.0, lat: 30.0 },\n          { lng: -85.0, lat: 40.0 },\n          { lng: -99.0, lat: 40.0 }\n        ],\n        holes: [\n          {\n            positions: [\n              { lng: -97.0, lat: 31.0 },\n              { lng: -97.0, lat: 39.0 },\n              { lng: -87.0, lat: 39.0 },\n              { lng: -87.0, lat: 31.0 }\n            ],\n            holes: [\n              {\n                positions: [\n                  { lng: -95.0, lat: 33.0 },\n                  { lng: -89.0, lat: 33.0 },\n                  { lng: -89.0, lat: 37.0 },\n                  { lng: -95.0, lat: 37.0 }\n                ],\n                holes: [\n                  {\n                    positions: [\n                      { lng: -93.0, lat: 34.0 },\n                      { lng: -91.0, lat: 34.0 },\n                      { lng: -91.0, lat: 36.0 },\n                      { lng: -93.0, lat: 36.0 }\n                    ]\n                  }\n                ]\n              }\n            ]\n          }\n        ]\n      }\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n      // life cycle\n      onMounted(() => {\n        Promise.all([\n          polygon1.value.createPromise,\n          polygon1.value.createPromise,\n          polygon1.value.createPromise,\n          polygon4.value.createPromise,\n          polygon5.value.createPromise,\n          polygon6.value.createPromise\n        ]).then(instances => {\n          instances[0].viewer.zoomTo(instances[0].viewer.entities)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        polygon1,\n        polygon2,\n        polygon3,\n        polygon4,\n        polygon5,\n        polygon6,\n        onViewerReady,\n        hierarchy4\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying the visibility of the polygon.</td><td></td></tr><tr><td>hierarchy</td><td>Object|Array</td><td></td><td><code>optional</code> A Property specifying the PolygonHierarchy.</td><td></td></tr><tr><td>height</td><td>Number</td><td><code>0</code></td><td><code>optional</code> A numeric Property specifying the altitude of the polygon relative to the ellipsoid surface.</td><td></td></tr><tr><td>heightReference</td><td>Number</td><td></td><td><code>optional</code> A Property specifying what the height is relative to. <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>extrudedHeight</td><td>Number</td><td></td><td><code>optional</code> A numeric Property specifying the altitude of the polygon&#39;s extruded face relative to the ellipsoid surface.</td><td></td></tr><tr><td>extrudedHeightReference</td><td>Number</td><td></td><td><code>optional</code> A Property specifying what the extrudedHeight is relative to. <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>stRotation</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> A numeric property specifying the rotation of the polygon texture counter-clockwise from north.</td><td></td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> A numeric Property specifying the angular distance between each latitude and longitude point.</td><td></td></tr><tr><td>fill</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying whether the polygon is filled with the provided material.</td><td></td></tr><tr><td>material</td><td>Object|String|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> A Property specifying the material used to fill the polygon.</td><td></td></tr><tr><td>outline</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> A boolean Property specifying whether the polygon is outlined.</td><td></td></tr><tr><td>outlineColor</td><td>Object|String|Array</td><td><code>&#39;black&#39;</code></td><td><code>optional</code> A Property specifying the Color of the outline.</td><td></td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>0</code></td><td><code>optional</code> A numeric Property specifying the the outline width in pixels.</td><td></td></tr><tr><td>perPositionHeight</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> A boolean specifying whether or not the the height of each position is used.</td><td></td></tr><tr><td>closeTop</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> When false, leaves off the top of an extruded polygon open.</td><td></td></tr><tr><td>closeBottom</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> When false, leaves off the bottom of an extruded polygon open.</td><td></td></tr><tr><td>arcType</td><td>Number</td><td><code>1</code></td><td><code>optional</code> The type of line the polygon edges must follow. <strong>NONE: 0, GEODESIC: 1, RHUMB: 2</strong></td><td>0/1/2</td></tr><tr><td>shadows</td><td>Number</td><td><code>0</code></td><td><code>optional</code> An enum Property specifying whether the polygon casts or receives shadows from each light source. <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2</td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> A Property specifying at what distance from the camera that this polygon will be displayed.</td><td></td></tr><tr><td>classificationType</td><td>Number</td><td><code>2</code></td><td><code>optional</code> An enum Property specifying whether this polygon will classify terrain, 3D Tiles, or both when on the ground. <strong>TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2</strong></td><td>0/1/2</td></tr><tr><td>zIndex</td><td>Number</td><td><code>0</code></td><td><code>optional</code> A property specifying the zIndex used for ordering ground geometry. Only has an effect if the polygon is constant and neither height or extrudedHeight are specified.</td><td></td></tr></tbody></table>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>definitionChanged</td><td></td><td>Triggers whenever a property or sub-property is changed or modified.</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("PolygonGraphics");

function vc_graphics_polygonvue_type_template_id_5e1598a0_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcgraphicspolygon",
    tabindex: "-1",
    content: "VcGraphicsPolygon",
    href: "#vcgraphicspolygon",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcgraphicspolygon"
    })]),
    _: 1
  }), _hoisted_3, _hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
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
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_14, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/PolygonGraphics.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-polygon.md?vue&type=template&id=5e1598a0

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_b706f451d6404ce468e2858b35d8eb7f/node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-polygon.md?vue&type=script&lang=ts

/* harmony default export */ var vc_graphics_polygonvue_type_script_lang_ts = ({
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
        const _component_vc_graphics_polygon = _resolveComponent("vc-graphics-polygon");

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
              description: "Hello Vue Cesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polygon, {
                ref: "polygon1",
                hierarchy: [[-115, 37], [-115, 32], [-107, 33], [-102, 31], [-102, 35]],
                material: "red"
              }, null, 512)]),
              _: 1
            }), _createVNode(_component_vc_entity, {
              description: "Hello Vue Cesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polygon, {
                hierarchy: [{
                  lng: -108.0,
                  lat: 42.0
                }, {
                  lng: -100.0,
                  lat: 42.0
                }, {
                  lng: -104.0,
                  lat: 40.0
                }],
                material: "green",
                extrudedHeight: 500000.0,
                closeTop: false,
                closeBottom: false,
                ref: "polygon2"
              }, null, 8, ["hierarchy", "extrudedHeight"])]),
              _: 1
            }), _createVNode(_component_vc_entity, {
              description: "Hello Vue Cesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polygon, {
                hierarchy: [[-108, 25, 100000], [-100, 25, 100000], [-100, 30, 100000], [-108, 30, 100000]],
                material: [255, 165, 0, 125],
                extrudedHeight: 0,
                perPositionHeight: true,
                outline: true,
                outlineColor: "black",
                ref: "polygon3"
              }, null, 512)]),
              _: 1
            }), _createVNode(_component_vc_entity, {
              description: "Hello Vue Cesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polygon, {
                hierarchy: _ctx.hierarchy4,
                material: [0, 0, 255, 125],
                height: 0,
                outline: true,
                ref: "polygon4"
              }, null, 8, ["hierarchy"])]),
              _: 1
            }), _createVNode(_component_vc_entity, {
              description: "Hello Vue Cesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polygon, {
                hierarchy: [-90.0, 41.0, 0.0, -85.0, 41.0, 500000.0, -80.0, 41.0, 0.0],
                material: [0, 255, 255, 125],
                perPositionHeight: true,
                outline: true,
                outlineColor: "black",
                ref: "polygon5"
              }, null, 8, ["hierarchy"])]),
              _: 1
            }), _createVNode(_component_vc_entity, {
              description: "Hello Vue Cesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polygon, {
                hierarchy: [[-120, 45], [-80, 45], [-80, 55], [-120, 55]],
                material: "purple",
                extrudedHeight: 50000,
                outline: true,
                outlineColor: "magenta",
                ref: "polygon6"
              }, null, 512)]),
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
          const polygon1 = ref(null);
          const polygon2 = ref(null);
          const polygon3 = ref(null);
          const polygon4 = ref(null);
          const polygon5 = ref(null);
          const polygon6 = ref(null);
          const hierarchy4 = {
            positions: [{
              lng: -99.0,
              lat: 30.0
            }, {
              lng: -85.0,
              lat: 30.0
            }, {
              lng: -85.0,
              lat: 40.0
            }, {
              lng: -99.0,
              lat: 40.0
            }],
            holes: [{
              positions: [{
                lng: -97.0,
                lat: 31.0
              }, {
                lng: -97.0,
                lat: 39.0
              }, {
                lng: -87.0,
                lat: 39.0
              }, {
                lng: -87.0,
                lat: 31.0
              }],
              holes: [{
                positions: [{
                  lng: -95.0,
                  lat: 33.0
                }, {
                  lng: -89.0,
                  lat: 33.0
                }, {
                  lng: -89.0,
                  lat: 37.0
                }, {
                  lng: -95.0,
                  lat: 37.0
                }],
                holes: [{
                  positions: [{
                    lng: -93.0,
                    lat: 34.0
                  }, {
                    lng: -91.0,
                    lat: 34.0
                  }, {
                    lng: -91.0,
                    lat: 36.0
                  }, {
                    lng: -93.0,
                    lat: 36.0
                  }]
                }]
              }]
            }]
          }; // methods

          const onEntityEvt = e => {
            console.log(e);
          };

          const onViewerReady = cesiumInstance => {
            console.log('viewer ready');
          }; // life cycle


          onMounted(() => {
            Promise.all([polygon1.value.createPromise, polygon1.value.createPromise, polygon1.value.createPromise, polygon4.value.createPromise, polygon5.value.createPromise, polygon6.value.createPromise]).then(instances => {
              instances[0].viewer.zoomTo(instances[0].viewer.entities);
            });
          });
          return {
            onEntityEvt,
            polygon1,
            polygon2,
            polygon3,
            polygon4,
            polygon5,
            polygon6,
            onViewerReady,
            hierarchy4
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
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-polygon.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-polygon.md



vc_graphics_polygonvue_type_script_lang_ts.render = vc_graphics_polygonvue_type_template_id_5e1598a0_render

/* harmony default export */ var vc_graphics_polygon = __webpack_exports__["default"] = (vc_graphics_polygonvue_type_script_lang_ts);

/***/ })

}]);