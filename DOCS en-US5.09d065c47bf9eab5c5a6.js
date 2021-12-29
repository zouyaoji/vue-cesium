(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.26/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_84624e34ee7884f58cc7c084da9eaf0a/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_84624e34ee7884f58cc7c084da9eaf0a/node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/controls/vc-selection-indicator.md?vue&type=template&id=20d2993e

const vc_selection_indicatorvue_type_template_id_20d2993e_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_selection_indicatorvue_type_template_id_20d2993e_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcSelectionIndicator ");

const vc_selection_indicatorvue_type_template_id_20d2993e_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Load a custom selector component to replace the selectionIndicator that comes with Cesium.", -1);

const vc_selection_indicatorvue_type_template_id_20d2993e_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "Note:"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Picking up the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive-particle"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component object is not supported.")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of the selector component.", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-selection-indicator"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add a selector component to the viewer.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer :selectionIndicator=\"false\" :infoBox=\"false\">\n    <vc-selection-indicator ref=\"selectionIndicator\" @pickEvt=\"pickEvt\"></vc-selection-indicator>\n    <vc-entity ref=\"entity\" :billboard=\"billboard\" :position=\"{lng: 108, lat: 32}\" :point=\"point\" :label=\"label\">\n      <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n    </vc-entity>\n    <vc-layer-imagery>\n      <vc-provider-imagery-osm></vc-provider-imagery-osm>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    <el-button type=\"danger\" round @click=\"clear\">Clear</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        point: {\n          pixelSize: 28,\n          color: 'red'\n        },\n        label: {\n          text: 'Hello World',\n          pixelOffset: [0, 80]\n        },\n        billboard: {\n          image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n          scale: 0.5\n        }\n      }\n    },\n    methods: {\n      clear() {\n        this.$refs.selectionIndicator.selectedFeature.value = undefined\n      },\n      pickEvt(e) {\n        console.log(e)\n      },\n      unload() {\n        this.$refs.selectionIndicator.unload()\n      },\n      load() {\n        this.$refs.selectionIndicator.load()\n      },\n      reload() {\n        this.$refs.selectionIndicator.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specifies whether the selection indicator is visible.</td></tr><tr><td>width</td><td>Number</td><td><code>50</code></td><td><code>optional</code> Specify the width of the selection indicator.</td></tr><tr><td>height</td><td>Number</td><td><code>50</code></td><td><code>optional</code> Specify the height of the selection indicator.</td></tr><tr><td>allowFeatureInfoRequests</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Asynchronously determines the imagery layer features that are intersected by a pick ray.</td></tr></tbody></table>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>pickEvt</td><td>selectedFeature</td><td>Triggered when picked up.</td></tr></tbody></table>", 1);

function vc_selection_indicatorvue_type_template_id_20d2993e_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_selection_indicatorvue_type_template_id_20d2993e_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcselectionindicator",
    tabindex: "-1",
    content: "VcSelectionIndicator",
    href: "#vcselectionindicator",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_selection_indicatorvue_type_template_id_20d2993e_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcselectionindicator"
    })]),
    _: 1
  }), vc_selection_indicatorvue_type_template_id_20d2993e_hoisted_3, vc_selection_indicatorvue_type_template_id_20d2993e_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
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
  }), _hoisted_12, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/controls/vc-selection-indicator.md?vue&type=template&id=20d2993e

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_84624e34ee7884f58cc7c084da9eaf0a/node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/controls/vc-selection-indicator.md?vue&type=script&lang=ts

/* harmony default export */ var vc_selection_indicatorvue_type_script_lang_ts = ({
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

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Clear");

      function render(_ctx, _cache) {
        const _component_vc_selection_indicator = _resolveComponent("vc-selection-indicator");

        const _component_vc_graphics_rectangle = _resolveComponent("vc-graphics-rectangle");

        const _component_vc_entity = _resolveComponent("vc-entity");

        const _component_vc_provider_imagery_osm = _resolveComponent("vc-provider-imagery-osm");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            selectionIndicator: false,
            infoBox: false
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_selection_indicator, {
              ref: "selectionIndicator",
              onPickEvt: _ctx.pickEvt
            }, null, 8, ["onPickEvt"]), _createVNode(_component_vc_entity, {
              ref: "entity",
              billboard: _ctx.billboard,
              position: {
                lng: 108,
                lat: 32
              },
              point: _ctx.point,
              label: _ctx.label
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_rectangle, {
                coordinates: [130, 20, 80, 25],
                material: "green"
              })]),
              _: 1
            }, 8, ["billboard", "point", "label"]), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_osm)]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_row, {
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
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.clear
            }, {
              default: _withCtx(() => [_hoisted_4]),
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
            point: {
              pixelSize: 28,
              color: 'red'
            },
            label: {
              text: 'Hello World',
              pixelOffset: [0, 80]
            },
            billboard: {
              image: 'https://zouyaoji.top/vue-cesium/favicon.png',
              scale: 0.5
            }
          };
        },

        methods: {
          clear() {
            this.$refs.selectionIndicator.selectedFeature.value = undefined;
          },

          pickEvt(e) {
            console.log(e);
          },

          unload() {
            this.$refs.selectionIndicator.unload();
          },

          load() {
            this.$refs.selectionIndicator.load();
          },

          reload() {
            this.$refs.selectionIndicator.reload();
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
// CONCATENATED MODULE: ./website/docs/en-US/controls/vc-selection-indicator.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/controls/vc-selection-indicator.md



vc_selection_indicatorvue_type_script_lang_ts.render = vc_selection_indicatorvue_type_template_id_20d2993e_render

/* harmony default export */ var vc_selection_indicator = __webpack_exports__["default"] = (vc_selection_indicatorvue_type_script_lang_ts);

/***/ })

}]);