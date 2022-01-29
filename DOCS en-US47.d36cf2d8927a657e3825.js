(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.26/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-rectangle.md?vue&type=template&id=1dd90cbe

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcGraphicsRectangle ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading a rectangle graphic. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.RectangleGraphics"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance.")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "Note:"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" It needs to be a subcomponent of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to load normally.")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcGraphicsRectangle component.", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-graphics-rectangle"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add some rectangles to the viewer.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity description=\"Hello Vue Cesium\" @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-rectangle\n        ref=\"rectangle1\"\n        :coordinates=\"{ west: -110, south: 20, east: -80, north: 25 }\"\n        :material=\"[255,0,0,125]\"\n      ></vc-graphics-rectangle>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\" @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-rectangle\n        :coordinates=\"[-110, 30, -100, 40]\"\n        :material=\"[0, 255, 0, 125]\"\n        :rotation=\"45/180\"\n        :extrudedHeight=\"300000.0\"\n        :height=\"100000.0\"\n        :outline=\"true\"\n        outlineColor=\"black\"\n        ref=\"rectangle2\"\n      ></vc-graphics-rectangle>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\" @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-rectangle\n        :coordinates=\"{ west: -92.0, south: 30.0, east: -82.0, north: 40.0 }\"\n        material=\"https://zouyaoji.top/vue-cesium/favicon.png\"\n        :rotation=\"getRotationValue\"\n        :stRotation=\"getRotationValue\"\n        :classificationType=\"0\"\n        ref=\"rectangle3\"\n      ></vc-graphics-rectangle>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const rectangle1 = ref(null)\n      const rectangle2 = ref(null)\n      const rectangle3 = ref(null)\n      const rotation = ref(0)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n      const getRotationValue = () => {\n        rotation.value += 0.005\n        return rotation.value\n      }\n      // life cycle\n      onMounted(() => {\n        Promise.all([rectangle1.value.createPromise, rectangle2.value.createPromise, rectangle3.value.createPromise]).then(instances => {\n          instances[0].viewer.zoomTo(instances[0].viewer.entities)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        rectangle1,\n        rectangle2,\n        rectangle3,\n        onViewerReady,\n        getRotationValue\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying the visibility of the rectangle.</td><td></td></tr><tr><td>coordinates</td><td>Object|Array</td><td></td><td><code>optional</code> The Property specifying the Rectangle.</td><td></td></tr><tr><td>height</td><td>Number</td><td><code>0</code></td><td><code>optional</code> A numeric Property specifying the altitude of the rectangle relative to the ellipsoid surface.</td><td></td></tr><tr><td>heightReference</td><td>Number</td><td><code>true</code></td><td><code>optional</code> A Property specifying what the height is relative to. <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>extrudedHeight</td><td>Number</td><td></td><td><code>optional</code> A numeric Property specifying the altitude of the rectangle&#39;s extruded face relative to the ellipsoid surface.</td><td></td></tr><tr><td>extrudedHeightReference</td><td>Number</td><td></td><td><code>optional</code> A Property specifying what the extrudedHeight is relative to. <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>rotation</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> A numeric property specifying the rotation of the rectangle clockwise from north.</td><td></td></tr><tr><td>stRotation</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> A numeric property specifying the rotation of the rectangle texture counter-clockwise from north.</td><td></td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> A numeric Property specifying the angular distance between points on the rectangle.</td><td></td></tr><tr><td>fill</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying whether the rectangle is filled with the provided material.</td><td></td></tr><tr><td>material</td><td>Object|String|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> A Property specifying the material used to fill the rectangle.</td><td></td></tr><tr><td>outline</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> A boolean Property specifying whether the rectangle is outlined.</td><td></td></tr><tr><td>outlineColor</td><td>Object|String|Array</td><td><code>&#39;black&#39;</code></td><td><code>optional</code> A Property specifying the Color of the outline.</td><td></td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> A numeric Property specifying the width of the outline.</td><td></td></tr><tr><td>shadows</td><td>Number</td><td><code>0</code></td><td><code>optional</code> An enum Property specifying whether the rectangle casts or receives shadows from each light source. <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> A Property specifying at what distance from the camera that this box will be displayed.</td><td></td></tr><tr><td>classificationType</td><td>Number</td><td><code>2</code></td><td><code>optional</code> An enum Property specifying whether this rectangle will classify terrain, 3D Tiles, or both when on the ground. <strong>TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2</strong></td><td>0/1/2</td></tr><tr><td>zIndex</td><td>Number</td><td><code>0</code></td><td><code>optional</code> A Property specifying the zIndex used for ordering ground geometry. Only has an effect if the rectangle is constant and neither height or extrudedHeight are specified.</td><td></td></tr></tbody></table>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>definitionChanged</td><td></td><td>Triggers whenever a property or sub-property is changed or modified.</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("RectangleGraphics");

function vc_graphics_rectanglevue_type_template_id_1dd90cbe_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcgraphicsrectangle",
    tabindex: "-1",
    content: "VcGraphicsRectangle",
    href: "#vcgraphicsrectangle",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcgraphicsrectangle"
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
    href: "https://cesium.com/docs/cesiumjs-ref-doc/RectangleGraphics.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-rectangle.md?vue&type=template&id=1dd90cbe

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-rectangle.md?vue&type=script&lang=ts

/* harmony default export */ var vc_graphics_rectanglevue_type_script_lang_ts = ({
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
        const _component_vc_graphics_rectangle = _resolveComponent("vc-graphics-rectangle");

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
              description: "Hello Vue Cesium",
              onClick: _ctx.onEntityEvt,
              onMouseover: _ctx.onEntityEvt,
              onMouseout: _ctx.onEntityEvt
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_rectangle, {
                ref: "rectangle1",
                coordinates: {
                  west: -110,
                  south: 20,
                  east: -80,
                  north: 25
                },
                material: [255, 0, 0, 125]
              }, null, 512)]),
              _: 1
            }, 8, ["onClick", "onMouseover", "onMouseout"]), _createVNode(_component_vc_entity, {
              description: "Hello Vue Cesium",
              onClick: _ctx.onEntityEvt,
              onMouseover: _ctx.onEntityEvt,
              onMouseout: _ctx.onEntityEvt
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_rectangle, {
                coordinates: [-110, 30, -100, 40],
                material: [0, 255, 0, 125],
                rotation: 45 / 180,
                extrudedHeight: 300000.0,
                height: 100000.0,
                outline: true,
                outlineColor: "black",
                ref: "rectangle2"
              }, null, 8, ["extrudedHeight", "height"])]),
              _: 1
            }, 8, ["onClick", "onMouseover", "onMouseout"]), _createVNode(_component_vc_entity, {
              description: "Hello Vue Cesium",
              onClick: _ctx.onEntityEvt,
              onMouseover: _ctx.onEntityEvt,
              onMouseout: _ctx.onEntityEvt
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_rectangle, {
                coordinates: {
                  west: -92.0,
                  south: 30.0,
                  east: -82.0,
                  north: 40.0
                },
                material: "https://zouyaoji.top/vue-cesium/favicon.png",
                rotation: _ctx.getRotationValue,
                stRotation: _ctx.getRotationValue,
                classificationType: 0,
                ref: "rectangle3"
              }, null, 8, ["coordinates", "rotation", "stRotation"])]),
              _: 1
            }, 8, ["onClick", "onMouseover", "onMouseout"])]),
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
          const rectangle1 = ref(null);
          const rectangle2 = ref(null);
          const rectangle3 = ref(null);
          const rotation = ref(0); // methods

          const onEntityEvt = e => {
            console.log(e);
          };

          const onViewerReady = cesiumInstance => {
            console.log('viewer ready');
          };

          const getRotationValue = () => {
            rotation.value += 0.005;
            return rotation.value;
          }; // life cycle


          onMounted(() => {
            Promise.all([rectangle1.value.createPromise, rectangle2.value.createPromise, rectangle3.value.createPromise]).then(instances => {
              instances[0].viewer.zoomTo(instances[0].viewer.entities);
            });
          });
          return {
            onEntityEvt,
            rectangle1,
            rectangle2,
            rectangle3,
            onViewerReady,
            getRotationValue
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
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-rectangle.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-rectangle.md



vc_graphics_rectanglevue_type_script_lang_ts.render = vc_graphics_rectanglevue_type_template_id_1dd90cbe_render

/* harmony default export */ var vc_graphics_rectangle = __webpack_exports__["default"] = (vc_graphics_rectanglevue_type_script_lang_ts);

/***/ })

}]);