(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.26/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_84624e34ee7884f58cc7c084da9eaf0a/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_84624e34ee7884f58cc7c084da9eaf0a/node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/controls/vc-overview-map.md?vue&type=template&id=14e512c7

const vc_overview_mapvue_type_template_id_14e512c7_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_overview_mapvue_type_template_id_14e512c7_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcOverviewMap ");

const vc_overview_mapvue_type_template_id_14e512c7_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Load the overview map control.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Tip: Version 3.0 has refactored the overviewmap diagram component. The overviewmap diagram is essentially another "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", so the subcomponents of VueCesium can still be added to the overviewmap diagram.")])], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "The basic usage of the VcOverviewMap component.", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overview-map"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add a overview map component on the viewer.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- example 1 -->\n    <vc-overview-map @ready=\"onOverviewReady\" ref=\"overview\" :offset=\"[5, 5]\">\n      <vc-layer-imagery :sortOrder=\"10\">\n        <vc-provider-imagery-bingmaps\n          bmKey=\"AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-\"\n          mapStyle=\"Road\"\n        ></vc-provider-imagery-bingmaps>\n      </vc-layer-imagery>\n      <vc-entity>\n        <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n      </vc-entity>\n    </vc-overview-map>\n    <!-- example 2 -->\n    <vc-overview-map position=\"bottom-left\" width=\"300px\" height=\"300px\" :offset=\"[5, 5]\" :viewerOpts=\"{ showCredit: true, sceneMode: 3 }\">\n      <vc-layer-imagery>\n        <vc-provider-imagery-osm></vc-provider-imagery-osm>\n      </vc-layer-imagery>\n      <vc-entity>\n        <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n      </vc-entity>\n      <!-- example 3 -->\n      <vc-overview-map position=\"top-left\" :offset=\"[5, 5]\">\n        <vc-layer-imagery>\n          <vc-provider-imagery-osm></vc-provider-imagery-osm>\n        </vc-layer-imagery>\n        <vc-entity>\n          <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n        </vc-entity>\n      </vc-overview-map>\n    </vc-overview-map>\n    <vc-layer-imagery :sortOrder=\"10\">\n      <vc-provider-imagery-bingmaps bmKey=\"AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-\"></vc-provider-imagery-bingmaps>\n    </vc-layer-imagery>\n    <vc-entity\n      :billboard=\"billboard\"\n      :position=\"{lng: 108, lat: 32}\"\n      :point=\"point\"\n      :label=\"label\"\n      @click=\"onEntityEvt\"\n      @mouseover=\"onEntityEvt\"\n      @mouseout=\"onEntityEvt\"\n    >\n      <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n    </vc-entity>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        point: {\n          pixelSize: 28,\n          color: 'red'\n        },\n        label: {\n          text: 'Hello World',\n          pixelOffset: [0, 80]\n        },\n        billboard: {\n          image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n          scale: 0.5\n        },\n        projectionTransforms: {\n          from: 'GCJ02',\n          to: 'WGS84'\n        }\n      }\n    },\n    methods: {\n      onOverviewReady({ cesiumObject }) {\n        console.log(cesiumObject)\n      },\n      onEntityEvt(e) {\n        console.log(e)\n        if (e.type === 'onmouseover') {\n          this.billboard = {\n            image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n            scale: 0.6\n          }\n        } else if (e.type === 'onmouseout') {\n          this.billboard = {\n            image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n            scale: 0.5\n          }\n        }\n      },\n      unload() {\n        this.$refs.overview.unload()\n      },\n      load() {\n        this.$refs.overview.load()\n      },\n      reload() {\n        this.$refs.overview.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>&#39;bottom-right&#39;</code></td><td><code>optional</code> Specify the location of the overviewmap component.</td><td>top-right/top-left/bottom-right/bottom-left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> Specify the position-based offset of the overviewmap component.</td><td></td></tr><tr><td>width</td><td>String</td><td><code>&#39;150px&#39;</code></td><td><code>optional</code> Specify the width of the overviewmap component.</td><td></td></tr><tr><td>height</td><td>String</td><td><code>&#39;150px&#39;</code></td><td><code>optional</code> Specify the height of the overviewmap component.</td><td></td></tr><tr><td>border</td><td>String</td><td><code>&#39;solid 4px rgb(255, 255, 255)&#39;</code></td><td><code>optional</code> Specify the border of the overviewmap component.</td><td></td></tr><tr><td>borderRadius</td><td>String</td><td></td><td><code>optional</code> Specify the border radius of the overviewmap component.</td><td></td></tr><tr><td>toggleOpts</td><td>Object</td><td><code>show: true, color: &#39;#fff&#39;, background: &#39;#3f4854&#39;, icon: &#39;vc-icons-overview-toggle&#39;, size: &#39;15px&#39;, tooltip: { delay: 500, anchor: &#39;bottom middle&#39;, offset: [0, 20], tip: void 0 } }</code></td><td><code>optional</code> Specify the toggle button options of the overviewmap component.</td><td></td></tr><tr><td>viewerOpts</td><td>Object</td><td><code>{ removeCesiumScript: false, showCredit: false, sceneMode: 2 }</code></td><td><code>optional</code> Specify the vc-viewer component options in the overviewmap component.</td><td></td></tr></tbody></table><p>:::</p>", 2);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table>", 1);

function vc_overview_mapvue_type_template_id_14e512c7_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_overview_mapvue_type_template_id_14e512c7_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcoverviewmap",
    tabindex: "-1",
    content: "VcOverviewMap",
    href: "#vcoverviewmap",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overview_mapvue_type_template_id_14e512c7_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcoverviewmap"
    })]),
    _: 1
  }), vc_overview_mapvue_type_template_id_14e512c7_hoisted_3, _hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
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
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/controls/vc-overview-map.md?vue&type=template&id=14e512c7

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_84624e34ee7884f58cc7c084da9eaf0a/node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/controls/vc-overview-map.md?vue&type=script&lang=ts

/* harmony default export */ var vc_overview_mapvue_type_script_lang_ts = ({
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
        const _component_vc_provider_imagery_bingmaps = _resolveComponent("vc-provider-imagery-bingmaps");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_graphics_rectangle = _resolveComponent("vc-graphics-rectangle");

        const _component_vc_entity = _resolveComponent("vc-entity");

        const _component_vc_overview_map = _resolveComponent("vc-overview-map");

        const _component_vc_provider_imagery_osm = _resolveComponent("vc-provider-imagery-osm");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_overview_map, {
              onReady: _ctx.onOverviewReady,
              ref: "overview",
              offset: [5, 5]
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_layer_imagery, {
                sortOrder: 10
              }, {
                default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_bingmaps, {
                  bmKey: "AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-",
                  mapStyle: "Road"
                })]),
                _: 1
              }), _createVNode(_component_vc_entity, null, {
                default: _withCtx(() => [_createVNode(_component_vc_graphics_rectangle, {
                  coordinates: [130, 20, 80, 25],
                  material: "green"
                })]),
                _: 1
              })]),
              _: 1
            }, 8, ["onReady"]), _createVNode(_component_vc_overview_map, {
              position: "bottom-left",
              width: "300px",
              height: "300px",
              offset: [5, 5],
              viewerOpts: {
                showCredit: true,
                sceneMode: 3
              }
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_layer_imagery, null, {
                default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_osm)]),
                _: 1
              }), _createVNode(_component_vc_entity, null, {
                default: _withCtx(() => [_createVNode(_component_vc_graphics_rectangle, {
                  coordinates: [130, 20, 80, 25],
                  material: "green"
                })]),
                _: 1
              }), _createVNode(_component_vc_overview_map, {
                position: "top-left",
                offset: [5, 5]
              }, {
                default: _withCtx(() => [_createVNode(_component_vc_layer_imagery, null, {
                  default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_osm)]),
                  _: 1
                }), _createVNode(_component_vc_entity, null, {
                  default: _withCtx(() => [_createVNode(_component_vc_graphics_rectangle, {
                    coordinates: [130, 20, 80, 25],
                    material: "green"
                  })]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            }), _createVNode(_component_vc_layer_imagery, {
              sortOrder: 10
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_bingmaps, {
                bmKey: "AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-"
              })]),
              _: 1
            }), _createVNode(_component_vc_entity, {
              billboard: _ctx.billboard,
              position: {
                lng: 108,
                lat: 32
              },
              point: _ctx.point,
              label: _ctx.label,
              onClick: _ctx.onEntityEvt,
              onMouseover: _ctx.onEntityEvt,
              onMouseout: _ctx.onEntityEvt
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_rectangle, {
                coordinates: [130, 20, 80, 25],
                material: "green"
              })]),
              _: 1
            }, 8, ["billboard", "point", "label", "onClick", "onMouseover", "onMouseout"])]),
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
            },
            projectionTransforms: {
              from: 'GCJ02',
              to: 'WGS84'
            }
          };
        },

        methods: {
          onOverviewReady(_ref) {
            let {
              cesiumObject
            } = _ref;
            console.log(cesiumObject);
          },

          onEntityEvt(e) {
            console.log(e);

            if (e.type === 'onmouseover') {
              this.billboard = {
                image: 'https://zouyaoji.top/vue-cesium/favicon.png',
                scale: 0.6
              };
            } else if (e.type === 'onmouseout') {
              this.billboard = {
                image: 'https://zouyaoji.top/vue-cesium/favicon.png',
                scale: 0.5
              };
            }
          },

          unload() {
            this.$refs.overview.unload();
          },

          load() {
            this.$refs.overview.load();
          },

          reload() {
            this.$refs.overview.reload();
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
// CONCATENATED MODULE: ./website/docs/en-US/controls/vc-overview-map.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/controls/vc-overview-map.md



vc_overview_mapvue_type_script_lang_ts.render = vc_overview_mapvue_type_template_id_14e512c7_render

/* harmony default export */ var vc_overview_map = __webpack_exports__["default"] = (vc_overview_mapvue_type_script_lang_ts);

/***/ })

}]);