(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-box.md?vue&type=template&id=18188f1b

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcGraphicsBox ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading a box graphic. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.BoxGraphics"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance.")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "Note:"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" It needs to be a subcomponent of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to load normally.")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of the VcGraphicsBox component.", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-graphics-box"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add some entity with box on the viewer.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- Load through attributes and load subcomponents separately -->\n    <vc-entity\n      ref=\"entity1\"\n      :position=\"options.position1\"\n      :description=\"options.description\"\n      @click=\"onEntityEvt\"\n      @mouseover=\"onEntityEvt\"\n      @mouseout=\"onEntityEvt\"\n    >\n      <vc-graphics-box :dimensions=\"options.dimensions1\" :material=\"options.material1\"></vc-graphics-box>\n    </vc-entity>\n    <vc-entity ref=\"entity2\" :position=\"options.position2\" :description=\"options.description\">\n      <vc-graphics-box\n        :dimensions=\"options.dimensions2\"\n        :material=\"options.material2\"\n        :outline-color=\"options.outlineColor2\"\n        :outline=\"true\"\n      ></vc-graphics-box>\n    </vc-entity>\n    <vc-entity ref=\"entity3\" :position=\"options.position3\" :description=\"options.description\">\n      <vc-graphics-box :dimensions=\"options.dimensions3\" :outline-color=\"options.outlineColor3\" :fill=\"false\" :outline=\"true\"></vc-graphics-box>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const options = {\n        description: 'Hello Vue Cesium',\n\n        position1: { lng: 105.0, lat: 40.0, height: 300000.0 },\n        dimensions1: { x: 400000.0, y: 300000.0, z: 500000.0 },\n        material1: 'BLUE',\n\n        position2: { lng: 110.0, lat: 40.0, height: 300000.0 },\n        dimensions2: { x: 400000.0, y: 300000.0, z: 500000.0 },\n        material2: 'RED',\n        outlineColor2: 'BLACK',\n\n        position3: { lng: 100.0, lat: 40.0, height: 300000.0 },\n        dimensions3: { x: 400000.0, y: 300000.0, z: 500000.0 },\n        outlineColor3: 'YELLOW'\n      }\n      const entity1 = ref(null)\n      const entity2 = ref(null)\n      const entity3 = ref(null)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      // life cycle\n      onMounted(() => {\n        Promise.all([entity1.value.creatingPromise, entity2.value.creatingPromise, entity3.value.creatingPromise]).then(instances => {\n          instances[0].viewer.zoomTo(instances[0].viewer.entities)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        entity1,\n        entity2,\n        entity3,\n        options\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying the visibility of the box.</td><td></td></tr><tr><td>dimensions</td><td>VcPosition</td><td></td><td><code>optional</code> A Cartesian3 Property specifying the length, width, and height of the box.</td><td></td></tr><tr><td>heightReference</td><td>number | Cesium.HeightReference | VcCallbackPropertyFunction&lt;number&gt;</td><td><code>0</code></td><td><code>optional</code> A Property specifying what the height from the entity position is relative to. <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>fill</td><td>boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;boolean&gt;</td><td>true</td><td><code>optional</code> A boolean Property specifying whether the box is filled with the provided material.</td><td></td></tr><tr><td>material</td><td>VcMaterial</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> A Property specifying the material used to fill the box.</td><td></td></tr><tr><td>outline</td><td>boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;boolean&gt;</td><td><code>false</code></td><td><code>optional</code> A boolean Property specifying whether the box is outlined.</td><td></td></tr><tr><td>outlineColor</td><td>VcColor</td><td><code>&#39;black&#39;</code></td><td><code>optional</code> A Property specifying the Color of the outline.</td><td></td></tr><tr><td>outlineWidth</td><td>number | Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;number&gt;</td><td><code>1.0</code></td><td><code>optional</code> A numeric Property specifying the width of the outline.</td><td></td></tr><tr><td>shadows</td><td>number | Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;number&gt;</td><td><code>0</code></td><td><code>optional</code> An enum Property specifying whether the box casts or receives shadows from each light source. <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>distanceDisplayCondition</td><td>VcDistanceDisplayCondition</td><td></td><td><code>optional</code> A Property specifying at what distance from the camera that this box will be displayed.</td><td></td></tr></tbody></table>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>definitionChanged</td><td></td><td>Triggers whenever a property or sub-property is changed or modified.</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("BoxGraphics");

function vc_graphics_boxvue_type_template_id_18188f1b_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcgraphicsbox",
    tabindex: "-1",
    content: "VcGraphicsBox",
    href: "#vcgraphicsbox",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcgraphicsbox"
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
    href: "https://cesium.com/docs/cesiumjs-ref-doc/BoxGraphics.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-box.md?vue&type=template&id=18188f1b

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-box.md?vue&type=script&lang=ts

/* harmony default export */ var vc_graphics_boxvue_type_script_lang_ts = ({
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
        const _component_vc_graphics_box = _resolveComponent("vc-graphics-box");

        const _component_vc_entity = _resolveComponent("vc-entity");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_entity, {
              ref: "entity1",
              position: _ctx.options.position1,
              description: _ctx.options.description,
              onClick: _ctx.onEntityEvt,
              onMouseover: _ctx.onEntityEvt,
              onMouseout: _ctx.onEntityEvt
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_box, {
                dimensions: _ctx.options.dimensions1,
                material: _ctx.options.material1
              }, null, 8, ["dimensions", "material"])]),
              _: 1
            }, 8, ["position", "description", "onClick", "onMouseover", "onMouseout"]), _createVNode(_component_vc_entity, {
              ref: "entity2",
              position: _ctx.options.position2,
              description: _ctx.options.description
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_box, {
                dimensions: _ctx.options.dimensions2,
                material: _ctx.options.material2,
                "outline-color": _ctx.options.outlineColor2,
                outline: true
              }, null, 8, ["dimensions", "material", "outline-color"])]),
              _: 1
            }, 8, ["position", "description"]), _createVNode(_component_vc_entity, {
              ref: "entity3",
              position: _ctx.options.position3,
              description: _ctx.options.description
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_box, {
                dimensions: _ctx.options.dimensions3,
                "outline-color": _ctx.options.outlineColor3,
                fill: false,
                outline: true
              }, null, 8, ["dimensions", "outline-color"])]),
              _: 1
            }, 8, ["position", "description"])]),
            _: 1
          })]),
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
          const options = {
            description: 'Hello Vue Cesium',
            position1: {
              lng: 105.0,
              lat: 40.0,
              height: 300000.0
            },
            dimensions1: {
              x: 400000.0,
              y: 300000.0,
              z: 500000.0
            },
            material1: 'BLUE',
            position2: {
              lng: 110.0,
              lat: 40.0,
              height: 300000.0
            },
            dimensions2: {
              x: 400000.0,
              y: 300000.0,
              z: 500000.0
            },
            material2: 'RED',
            outlineColor2: 'BLACK',
            position3: {
              lng: 100.0,
              lat: 40.0,
              height: 300000.0
            },
            dimensions3: {
              x: 400000.0,
              y: 300000.0,
              z: 500000.0
            },
            outlineColor3: 'YELLOW'
          };
          const entity1 = ref(null);
          const entity2 = ref(null);
          const entity3 = ref(null); // methods

          const onEntityEvt = e => {
            console.log(e);
          }; // life cycle


          onMounted(() => {
            Promise.all([entity1.value.creatingPromise, entity2.value.creatingPromise, entity3.value.creatingPromise]).then(instances => {
              instances[0].viewer.zoomTo(instances[0].viewer.entities);
            });
          });
          return {
            onEntityEvt,
            entity1,
            entity2,
            entity3,
            options
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
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-box.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-box.md



vc_graphics_boxvue_type_script_lang_ts.render = vc_graphics_boxvue_type_template_id_18188f1b_render

/* harmony default export */ var vc_graphics_box = __webpack_exports__["default"] = (vc_graphics_boxvue_type_script_lang_ts);

/***/ })

}]);