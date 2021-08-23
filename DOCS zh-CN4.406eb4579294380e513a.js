(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[126],{

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/controls/vc-overview-map.md?vue&type=template&id=0ca3dd22

var vc_overview_mapvue_type_template_id_0ca3dd22_hoisted_1 = {
  class: "content element-doc"
};

var vc_overview_mapvue_type_template_id_0ca3dd22_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcoverviewmap\"><a class=\"header-anchor\" href=\"#vcoverviewmap\">¶</a> VcOverviewMap</h2><p>加载鹰眼图控件。</p><div class=\"tip\"><p>提示：3.0 版本对鹰眼图组件进行了重构，鹰眼图实质是另外一个 <code>vc-viewer</code>，所以鹰眼图中仍然能加 VueCesium 的各子组件。</p></div><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>鹰眼图组件的基础用法。</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-overview-map"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上加载鹰眼图组件。")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- 鹰眼图示例 1 -->\n    <vc-overview-map @ready=\"onOverviewReady\" ref=\"overview\" :offset=\"[5, 5]\">\n      <vc-layer-imagery :sortOrder=\"10\">\n        <vc-provider-imagery-urltemplate\n          :projectionTransforms=\"projectionTransforms\"\n          url=\"https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}\"\n        ></vc-provider-imagery-urltemplate>\n      </vc-layer-imagery>\n      <vc-primitive-tileset url=\"./SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json\"></vc-primitive-tileset>\n      <vc-entity>\n        <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n      </vc-entity>\n    </vc-overview-map>\n    <!-- 鹰眼图示例 2 -->\n    <vc-overview-map position=\"bottom-left\" width=\"300px\" height=\"300px\" :offset=\"[5, 5]\" :viewerOpts=\"{ showCredit: true, sceneMode: 3 }\">\n      <vc-layer-imagery>\n        <vc-provider-imagery-osm></vc-provider-imagery-osm>\n      </vc-layer-imagery>\n      <vc-entity>\n        <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n      </vc-entity>\n      <!-- 鹰眼图示例 3 -->\n      <vc-overview-map position=\"top-left\" :offset=\"[5, 5]\">\n        <vc-layer-imagery>\n          <vc-provider-imagery-osm></vc-provider-imagery-osm>\n        </vc-layer-imagery>\n        <vc-entity>\n          <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n        </vc-entity>\n      </vc-overview-map>\n    </vc-overview-map>\n    <vc-primitive-tileset url=\"./SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json\"></vc-primitive-tileset>\n    <vc-layer-imagery :sortOrder=\"10\">\n      <vc-provider-imagery-tianditu mapStyle=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n    <vc-entity\n      :billboard=\"billboard\"\n      :position=\"{lng: 108, lat: 32}\"\n      :point=\"point\"\n      :label=\"label\"\n      @click=\"onEntityEvt\"\n      @mouseover=\"onEntityEvt\"\n      @mouseout=\"onEntityEvt\"\n    >\n      <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n    </vc-entity>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        point: {\n          pixelSize: 28,\n          color: 'red'\n        },\n        label: {\n          text: 'Hello World',\n          pixelOffset: [0, 80]\n        },\n        billboard: {\n          image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n          scale: 0.5\n        },\n        projectionTransforms: {\n          from: 'GCJ02',\n          to: 'WGS84'\n        }\n      }\n    },\n    methods: {\n      onOverviewReady({ cesiumObject }) {\n        console.log(cesiumObject)\n      },\n      onEntityEvt(e) {\n        console.log(e)\n        if (e.type === 'onmouseover') {\n          this.billboard = {\n            image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n            scale: 0.6\n          }\n        } else if (e.type === 'onmouseout') {\n          this.billboard = {\n            image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n            scale: 0.5\n          }\n        }\n      },\n      unload() {\n        this.$refs.overview.unload()\n      },\n      load() {\n        this.$refs.overview.load()\n      },\n      reload() {\n        this.$refs.overview.reload()\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>&#39;bottom-right&#39;</code></td><td><code>optional</code> 指定鹰眼组件位置。</td><td>top-right/top-left/bottom-right/bottom-left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定鹰眼组件基于位置的偏移量。</td><td></td></tr><tr><td>width</td><td>String</td><td><code>&#39;150px&#39;</code></td><td><code>optional</code> 指定鹰眼组件宽度。</td><td></td></tr><tr><td>height</td><td>String</td><td><code>&#39;150px&#39;</code></td><td><code>optional</code> 指定鹰眼组件高度。</td><td></td></tr><tr><td>border</td><td>String</td><td><code>&#39;solid 4px rgb(255, 255, 255)&#39;</code></td><td><code>optional</code> 指定鹰眼组件边框。</td><td></td></tr><tr><td>borderRadius</td><td>String</td><td></td><td><code>optional</code> 指定鹰眼组件圆角。</td><td></td></tr><tr><td>toggleOpts</td><td>Object</td><td><code>show: true, color: &#39;#fff&#39;, background: &#39;#3f4854&#39;, icon: &#39;vc-icons-overview-toggle&#39;, size: &#39;15px&#39;, tooltip: { delay: 500, anchor: &#39;bottom middle&#39;, offset: [0, 20], tip: void 0 } }</code></td><td><code>optional</code> 指定鹰眼组件切换按钮参数。</td><td></td></tr><tr><td>viewerOpts</td><td>Object</td><td><code>{ removeCesiumScript: false, showCredit: false, sceneMode: 2 }</code></td><td><code>optional</code> 指定鹰眼组件中 vc-viewer 组件参数。</td><td></td></tr></tbody></table><p>:::</p><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr></tbody></table>", 5);

function vc_overview_mapvue_type_template_id_0ca3dd22_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_overview_mapvue_type_template_id_0ca3dd22_hoisted_1, [vc_overview_mapvue_type_template_id_0ca3dd22_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-overview-map.md?vue&type=template&id=0ca3dd22

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/controls/vc-overview-map.md?vue&type=script&lang=ts


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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

      function render(_ctx, _cache) {
        var _component_vc_provider_imagery_urltemplate = _resolveComponent("vc-provider-imagery-urltemplate");

        var _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        var _component_vc_primitive_tileset = _resolveComponent("vc-primitive-tileset");

        var _component_vc_graphics_rectangle = _resolveComponent("vc-graphics-rectangle");

        var _component_vc_entity = _resolveComponent("vc-entity");

        var _component_vc_overview_map = _resolveComponent("vc-overview-map");

        var _component_vc_provider_imagery_osm = _resolveComponent("vc-provider-imagery-osm");

        var _component_vc_provider_imagery_tianditu = _resolveComponent("vc-provider-imagery-tianditu");

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
                        return [_createVNode(_component_vc_provider_imagery_urltemplate, {
                          projectionTransforms: _ctx.projectionTransforms,
                          url: "https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}"
                        }, null, 8, ["projectionTransforms"])];
                      }),
                      _: 1
                    }), _createVNode(_component_vc_primitive_tileset, {
                      url: "./SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json"
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
                }), _createVNode(_component_vc_primitive_tileset, {
                  url: "./SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json"
                }), _createVNode(_component_vc_layer_imagery, {
                  sortOrder: 10
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_tianditu, {
                      mapStyle: "img_c",
                      token: "436ce7e50d27eede2f2929307e6b33c0"
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
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-overview-map.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-overview-map.md



vc_overview_mapvue_type_script_lang_ts.render = vc_overview_mapvue_type_template_id_0ca3dd22_render

/* harmony default export */ var vc_overview_map = __webpack_exports__["default"] = (vc_overview_mapvue_type_script_lang_ts);

/***/ })

}]);