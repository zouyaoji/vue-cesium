(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ 957:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-polyline-volume.md?vue&type=template&id=17e7794e

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcGraphicsPolylineVolume ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading a polyline volume graphic. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.PolylineVolumeGraphics"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance.")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "Note:"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" It needs to be a subcomponent of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to load normally.")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of the VcGraphicsPolylineVolume component.", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-graphics-polyline-volume"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add some polyline volumes to the viewer.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity>\n      <vc-graphics-polyline-volume\n        ref=\"polylineVolume1\"\n        :positions=\"[[-85,32],[-85,36],[-89,36]]\"\n        :shape=\"shape1\"\n        material=\"red\"\n      ></vc-graphics-polyline-volume>\n    </vc-entity>\n    <vc-entity>\n      <vc-graphics-polyline-volume\n        :positions=\"[-90,32,0,-90,36,100000,-94,36,0]\"\n        :shape=\"[{ x: -50000, y: -50000 }, { x: 50000, y: -50000 }, { x: -50000, y: 50000 }, { x: -50000, y: 50000 }]\"\n        :material=\"[0,255,0,125]\"\n        :outline=\"true\"\n        outlineColor=\"black\"\n        :cornerType=\"2\"\n        ref=\"polylineVolume2\"\n      ></vc-graphics-polyline-volume>\n    </vc-entity>\n    <vc-entity>\n      <vc-graphics-polyline-volume\n        :positions=\"[{ lng: -95.0, lat: 32.0, height: 0.0 }, { lng: -95.0, lat: 36.0, height: 100000.0 }, { lng: -99.0, lat: 36.0, height: 200000.0 }]\"\n        :shape=\"shape3\"\n        material=\"blue\"\n        :cornerType=\"0\"\n        ref=\"polylineVolume3\"\n      ></vc-graphics-polyline-volume>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const polylineVolume1 = ref(null)\n      const polylineVolume2 = ref(null)\n      const polylineVolume3 = ref(null)\n      const shape1 = ref(null)\n      const shape3 = ref(null)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n        shape1.value = computeCircle(60000)\n        shape3.value = computeStar(7, 70000, 50000)\n      }\n      const computeCircle = radius => {\n        let positions = []\n        for (let i = 0; i < 360; i++) {\n          let radians = Cesium.Math.toRadians(i)\n          positions.push({ x: radius * Math.cos(radians), y: radius * Math.sin(radians) })\n        }\n        return positions\n      }\n      const computeStar = (arms, rOuter, rInner) => {\n        let angle = Math.PI / arms\n        let length = 2 * arms\n        let positions = new Array(length)\n        for (let i = 0; i < length; i++) {\n          let r = i % 2 === 0 ? rOuter : rInner\n          positions[i] = { x: Math.cos(i * angle) * r, y: Math.sin(i * angle) * r }\n        }\n        return positions\n      }\n      // life cycle\n      onMounted(() => {\n        Promise.all([polylineVolume1.value.createPromise, polylineVolume2.value.createPromise, polylineVolume3.value.createPromise]).then(\n          instances => {\n            instances[0].viewer.zoomTo(instances[0].viewer.entities)\n          }\n        )\n      })\n\n      return {\n        onEntityEvt,\n        polylineVolume1,\n        polylineVolume2,\n        polylineVolume3,\n        onViewerReady,\n        shape1,\n        shape3\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying the visibility of the volume.</td><td></td></tr><tr><td>positions</td><td>Array</td><td></td><td><code>optional</code> A Property specifying the array of Cartesian3 positions which define the line strip.</td><td></td></tr><tr><td>shape</td><td>Array</td><td></td><td><code>optional</code> A Property specifying the array of Cartesian2 positions which define the shape to be extruded.</td><td></td></tr><tr><td>cornerType</td><td>Number</td><td><code>0</code></td><td><code>optional</code> A CornerType Property specifying the style of the corners. <strong>ROUNDED: 0, MITERED: 1, BEVELED: 2</strong></td><td>0/1/2</td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> A numeric Property specifying the angular distance between each latitude and longitude point.</td><td></td></tr><tr><td>fill</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying whether the volume is filled with the provided material.</td><td></td></tr><tr><td>material</td><td>Object|String|Array</td><td></td><td><code>optional</code> A Property specifying the material used to fill the volume.</td><td></td></tr><tr><td>outline</td><td>Boolean</td><td>false</td><td><code>optional</code> A boolean Property specifying whether the volume is outlined.</td><td></td></tr><tr><td>outlineColor</td><td>Object|String|Array</td><td></td><td><code>optional</code> A Property specifying the Color of the outline.</td><td></td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> A numeric Property specifying the width of the outline.</td><td></td></tr><tr><td>shadows</td><td>Number</td><td></td><td><code>optional</code> An enum Property specifying whether the box casts or receives shadows from each light source. <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> A Property specifying at what distance from the camera that this volume will be displayed.</td><td></td></tr></tbody></table>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>definitionChanged</td><td></td><td>Triggers whenever a property or sub-property is changed or modified.</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("PolylineVolumeGraphics");

function vc_graphics_polyline_volumevue_type_template_id_17e7794e_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcgraphicspolylinevolume",
    tabindex: "-1",
    content: "VcGraphicsPolylineVolume",
    href: "#vcgraphicspolylinevolume",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcgraphicspolylinevolume"
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
    href: "https://cesium.com/docs/cesiumjs-ref-doc/PolylineVolumeGraphics.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-polyline-volume.md?vue&type=template&id=17e7794e

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-polyline-volume.md?vue&type=script&lang=ts

/* harmony default export */ var vc_graphics_polyline_volumevue_type_script_lang_ts = ({
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
        const _component_vc_graphics_polyline_volume = _resolveComponent("vc-graphics-polyline-volume");

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
            default: _withCtx(() => [_createVNode(_component_vc_entity, null, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polyline_volume, {
                ref: "polylineVolume1",
                positions: [[-85, 32], [-85, 36], [-89, 36]],
                shape: _ctx.shape1,
                material: "red"
              }, null, 8, ["shape"])]),
              _: 1
            }), _createVNode(_component_vc_entity, null, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polyline_volume, {
                positions: [-90, 32, 0, -90, 36, 100000, -94, 36, 0],
                shape: [{
                  x: -50000,
                  y: -50000
                }, {
                  x: 50000,
                  y: -50000
                }, {
                  x: -50000,
                  y: 50000
                }, {
                  x: -50000,
                  y: 50000
                }],
                material: [0, 255, 0, 125],
                outline: true,
                outlineColor: "black",
                cornerType: 2,
                ref: "polylineVolume2"
              }, null, 512)]),
              _: 1
            }), _createVNode(_component_vc_entity, null, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polyline_volume, {
                positions: [{
                  lng: -95.0,
                  lat: 32.0,
                  height: 0.0
                }, {
                  lng: -95.0,
                  lat: 36.0,
                  height: 100000.0
                }, {
                  lng: -99.0,
                  lat: 36.0,
                  height: 200000.0
                }],
                shape: _ctx.shape3,
                material: "blue",
                cornerType: 0,
                ref: "polylineVolume3"
              }, null, 8, ["positions", "shape"])]),
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
          const polylineVolume1 = ref(null);
          const polylineVolume2 = ref(null);
          const polylineVolume3 = ref(null);
          const shape1 = ref(null);
          const shape3 = ref(null); // methods

          const onEntityEvt = e => {
            console.log(e);
          };

          const onViewerReady = cesiumInstance => {
            console.log('viewer ready');
            shape1.value = computeCircle(60000);
            shape3.value = computeStar(7, 70000, 50000);
          };

          const computeCircle = radius => {
            let positions = [];

            for (let i = 0; i < 360; i++) {
              let radians = Cesium.Math.toRadians(i);
              positions.push({
                x: radius * Math.cos(radians),
                y: radius * Math.sin(radians)
              });
            }

            return positions;
          };

          const computeStar = (arms, rOuter, rInner) => {
            let angle = Math.PI / arms;
            let length = 2 * arms;
            let positions = new Array(length);

            for (let i = 0; i < length; i++) {
              let r = i % 2 === 0 ? rOuter : rInner;
              positions[i] = {
                x: Math.cos(i * angle) * r,
                y: Math.sin(i * angle) * r
              };
            }

            return positions;
          }; // life cycle


          onMounted(() => {
            Promise.all([polylineVolume1.value.createPromise, polylineVolume2.value.createPromise, polylineVolume3.value.createPromise]).then(instances => {
              instances[0].viewer.zoomTo(instances[0].viewer.entities);
            });
          });
          return {
            onEntityEvt,
            polylineVolume1,
            polylineVolume2,
            polylineVolume3,
            onViewerReady,
            shape1,
            shape3
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
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-polyline-volume.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-polyline-volume.md



vc_graphics_polyline_volumevue_type_script_lang_ts.render = vc_graphics_polyline_volumevue_type_template_id_17e7794e_render

/* harmony default export */ var vc_graphics_polyline_volume = __webpack_exports__["default"] = (vc_graphics_polyline_volumevue_type_script_lang_ts);

/***/ })

}]);