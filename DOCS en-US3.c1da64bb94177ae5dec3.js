(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/controls/vc-overview-map.md?vue&type=template&id=3f6ce534

var vc_overview_mapvue_type_template_id_3f6ce534_hoisted_1 = {
  class: "content element-doc"
};

var vc_overview_mapvue_type_template_id_3f6ce534_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcoverviewmap\"><a class=\"header-anchor\" href=\"#vcoverviewmap\">¶</a> VcOverviewMap</h2><p>Load the overview map control.</p><div class=\"tip\"><p>Tip: Version 3.0 has refactored the overviewmap diagram component. The overviewmap diagram is essentially another <code>vc-viewer</code>, so the subcomponents of VueCesium can still be added to the overviewmap diagram.</p></div><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>The basic usage of the VcOverviewMap component.</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-overview-map"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tag to add a overview map component on the viewer.")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- example 1 -->\n    <vc-overview-map @ready=\"onOverviewReady\" ref=\"overview\" :offset=\"[5, 5]\">\n      <vc-layer-imagery :sortOrder=\"10\">\n        <vc-provider-imagery-bingmaps\n          bmKey=\"AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-\"\n          mapStyle=\"Road\"\n        ></vc-provider-imagery-bingmaps>\n      </vc-layer-imagery>\n      <vc-entity>\n        <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n      </vc-entity>\n    </vc-overview-map>\n    <!-- example 2 -->\n    <vc-overview-map position=\"bottom-left\" width=\"300px\" height=\"300px\" :offset=\"[5, 5]\" :viewerOpts=\"{ showCredit: true, sceneMode: 3 }\">\n      <vc-layer-imagery>\n        <vc-provider-imagery-osm></vc-provider-imagery-osm>\n      </vc-layer-imagery>\n      <vc-entity>\n        <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n      </vc-entity>\n      <!-- example 3 -->\n      <vc-overview-map position=\"top-left\" :offset=\"[5, 5]\">\n        <vc-layer-imagery>\n          <vc-provider-imagery-osm></vc-provider-imagery-osm>\n        </vc-layer-imagery>\n        <vc-entity>\n          <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n        </vc-entity>\n      </vc-overview-map>\n    </vc-overview-map>\n    <vc-layer-imagery :sortOrder=\"10\">\n      <vc-provider-imagery-bingmaps bmKey=\"AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-\"></vc-provider-imagery-bingmaps>\n    </vc-layer-imagery>\n    <vc-entity\n      :billboard=\"billboard\"\n      :position=\"{lng: 108, lat: 32}\"\n      :point=\"point\"\n      :label=\"label\"\n      @click=\"onEntityEvt\"\n      @mouseover=\"onEntityEvt\"\n      @mouseout=\"onEntityEvt\"\n    >\n      <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n    </vc-entity>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        point: {\n          pixelSize: 28,\n          color: 'red'\n        },\n        label: {\n          text: 'Hello World',\n          pixelOffset: [0, 80]\n        },\n        billboard: {\n          image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n          scale: 0.5\n        },\n        projectionTransforms: {\n          from: 'GCJ02',\n          to: 'WGS84'\n        }\n      }\n    },\n    methods: {\n      onOverviewReady({ cesiumObject }) {\n        console.log(cesiumObject)\n      },\n      onEntityEvt(e) {\n        console.log(e)\n        if (e.type === 'onmouseover') {\n          this.billboard = {\n            image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n            scale: 0.6\n          }\n        } else if (e.type === 'onmouseout') {\n          this.billboard = {\n            image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n            scale: 0.5\n          }\n        }\n      },\n      unload() {\n        this.$refs.overview.unload()\n      },\n      load() {\n        this.$refs.overview.load()\n      },\n      reload() {\n        this.$refs.overview.reload()\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>&#39;bottom-right&#39;</code></td><td><code>optional</code> Specify the location of the overviewmap component.</td><td>top-right/top-left/bottom-right/bottom-left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> Specify the position-based offset of the overviewmap component.</td><td></td></tr><tr><td>width</td><td>String</td><td><code>&#39;150px&#39;</code></td><td><code>optional</code> Specify the width of the overviewmap component.</td><td></td></tr><tr><td>height</td><td>String</td><td><code>&#39;150px&#39;</code></td><td><code>optional</code> Specify the height of the overviewmap component.</td><td></td></tr><tr><td>border</td><td>String</td><td><code>&#39;solid 4px rgb(255, 255, 255)&#39;</code></td><td><code>optional</code> Specify the border of the overviewmap component.</td><td></td></tr><tr><td>borderRadius</td><td>String</td><td></td><td><code>optional</code> Specify the border radius of the overviewmap component.</td><td></td></tr><tr><td>toggleOpts</td><td>Object</td><td><code>show: true, color: &#39;#fff&#39;, background: &#39;#3f4854&#39;, icon: &#39;vc-icons-overview-toggle&#39;, size: &#39;15px&#39;, tooltip: { delay: 500, anchor: &#39;bottom middle&#39;, offset: [0, 20], tip: void 0 } }</code></td><td><code>optional</code> Specify the toggle button options of the overviewmap component.</td><td></td></tr><tr><td>viewerOpts</td><td>Object</td><td><code>{ removeCesiumScript: false, showCredit: false, sceneMode: 2 }</code></td><td><code>optional</code> Specify the vc-viewer component options in the overviewmap component.</td><td></td></tr></tbody></table><p>:::</p><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table>", 5);

function vc_overview_mapvue_type_template_id_3f6ce534_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_overview_mapvue_type_template_id_3f6ce534_hoisted_1, [vc_overview_mapvue_type_template_id_3f6ce534_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/controls/vc-overview-map.md?vue&type=template&id=3f6ce534

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/controls/vc-overview-map.md?vue&type=script&lang=ts


/* harmony default export */ var vc_overview_mapvue_type_script_lang_ts = ({
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
        var _component_vc_provider_imagery_bingmaps = _resolveComponent("vc-provider-imagery-bingmaps");

        var _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        var _component_vc_graphics_rectangle = _resolveComponent("vc-graphics-rectangle");

        var _component_vc_entity = _resolveComponent("vc-entity");

        var _component_vc_overview_map = _resolveComponent("vc-overview-map");

        var _component_vc_provider_imagery_osm = _resolveComponent("vc-provider-imagery-osm");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_overview_map, {
                  onReady: _ctx.onOverviewReady,
                  ref: "overview",
                  offset: [5, 5]
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_layer_imagery, {
                      sortOrder: 10
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_vc_provider_imagery_bingmaps, {
                          bmKey: "AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-",
                          mapStyle: "Road"
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_vc_entity, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_vc_graphics_rectangle, {
                          coordinates: [130, 20, 80, 25],
                          material: "green"
                        })];
                      }),
                      _: 1
                    })];
                  }),
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
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_layer_imagery, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_vc_provider_imagery_osm)];
                      }),
                      _: 1
                    }), _createVNode(_component_vc_entity, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_vc_graphics_rectangle, {
                          coordinates: [130, 20, 80, 25],
                          material: "green"
                        })];
                      }),
                      _: 1
                    }), _createVNode(_component_vc_overview_map, {
                      position: "top-left",
                      offset: [5, 5]
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_vc_layer_imagery, null, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_vc_provider_imagery_osm)];
                          }),
                          _: 1
                        }), _createVNode(_component_vc_entity, null, {
                          default: _withCtx(function () {
                            return [_createVNode(_component_vc_graphics_rectangle, {
                              coordinates: [130, 20, 80, 25],
                              material: "green"
                            })];
                          }),
                          _: 1
                        })];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }), _createVNode(_component_vc_layer_imagery, {
                  sortOrder: 10
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_bingmaps, {
                      bmKey: "AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-"
                    })];
                  }),
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
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_rectangle, {
                      coordinates: [130, 20, 80, 25],
                      material: "green"
                    })];
                  }),
                  _: 1
                }, 8, ["billboard", "point", "label", "onClick", "onMouseover", "onMouseout"])];
              }),
              _: 1
            }), _createVNode(_component_el_row, {
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
          onOverviewReady: function onOverviewReady(_ref) {
            var cesiumObject = _ref.cesiumObject;
            console.log(cesiumObject);
          },
          onEntityEvt: function onEntityEvt(e) {
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
          unload: function unload() {
            this.$refs.overview.unload();
          },
          load: function load() {
            this.$refs.overview.load();
          },
          reload: function reload() {
            this.$refs.overview.reload();
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/controls/vc-overview-map.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/controls/vc-overview-map.md



vc_overview_mapvue_type_script_lang_ts.render = vc_overview_mapvue_type_template_id_3f6ce534_render

/* harmony default export */ var vc_overview_map = __webpack_exports__["default"] = (vc_overview_mapvue_type_script_lang_ts);

/***/ })

}]);