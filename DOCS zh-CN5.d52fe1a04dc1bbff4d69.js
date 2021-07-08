(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[137],{

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/controls/vc-selection-indicator.md?vue&type=template&id=6eb3db60

var vc_selection_indicatorvue_type_template_id_6eb3db60_hoisted_1 = {
  class: "content element-doc"
};

var vc_selection_indicatorvue_type_template_id_6eb3db60_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h2", {
  id: "vcselectionindicator"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vcselectionindicator"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" VcSelectionIndicator")], -1);

var vc_selection_indicatorvue_type_template_id_6eb3db60_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "加载自定义选择器组件，替换 Cesium 自带的 selectionIndicator。", -1);

var vc_selection_indicatorvue_type_template_id_6eb3db60_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "选择器组件的基础用法。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-selection-indicator"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加选择器组件。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer :selectionIndicator=\"false\" :infoBox=\"false\">\n    <vc-selection-indicator ref=\"selectionIndicator\" @pickEvt=\"pickEvt\"></vc-selection-indicator>\n    <vc-entity ref=\"entity\" :billboard=\"billboard\" :position=\"{lng: 108, lat: 32}\" :point=\"point\" :label=\"label\">\n      <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n    </vc-entity>\n    <vc-layer-imagery :sortOrder=\"10\">\n      <vc-provider-imagery-tianditu mapStyle=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    <el-button type=\"danger\" round @click=\"clear\">清除</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        point: {\n          pixelSize: 28,\n          color: 'red'\n        },\n        label: {\n          text: 'Hello World',\n          pixelOffset: [0, 80]\n        },\n        billboard: {\n          image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n          scale: 0.5\n        }\n      }\n    },\n    methods: {\n      clear() {\n        this.$refs.selectionIndicator.selectedFeature.value = undefined\n      },\n      pickEvt(e) {\n        console.log(e)\n      },\n      unload() {\n        this.$refs.selectionIndicator.unload()\n      },\n      load() {\n        this.$refs.selectionIndicator.load()\n      },\n      reload() {\n        this.$refs.selectionIndicator.reload()\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定选择指示器是否可见。</td></tr><tr><td>width</td><td>Number</td><td><code>50</code></td><td><code>optional</code> 指定选择指示器宽度。</td></tr><tr><td>height</td><td>Number</td><td><code>50</code></td><td><code>optional</code> 指定选择指示器高度。</td></tr><tr><td>allowFeatureInfoRequests</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否异步请求该点射线相交影像图层属性。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>pickEvt</td><td>selectedFeature</td><td>拾取时触发。</td></tr></tbody></table>", 4);

function vc_selection_indicatorvue_type_template_id_6eb3db60_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_selection_indicatorvue_type_template_id_6eb3db60_hoisted_1, [vc_selection_indicatorvue_type_template_id_6eb3db60_hoisted_2, vc_selection_indicatorvue_type_template_id_6eb3db60_hoisted_3, vc_selection_indicatorvue_type_template_id_6eb3db60_hoisted_4, _hoisted_5, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-selection-indicator.md?vue&type=template&id=6eb3db60

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/controls/vc-selection-indicator.md?vue&type=script&lang=ts


/* harmony default export */ var vc_selection_indicatorvue_type_script_lang_ts = ({
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

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("清除");

      function render(_ctx, _cache) {
        var _component_vc_selection_indicator = _resolveComponent("vc-selection-indicator");

        var _component_vc_graphics_rectangle = _resolveComponent("vc-graphics-rectangle");

        var _component_vc_entity = _resolveComponent("vc-entity");

        var _component_vc_provider_imagery_tianditu = _resolveComponent("vc-provider-imagery-tianditu");

        var _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, {
              selectionIndicator: false,
              infoBox: false
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_selection_indicator, {
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
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_rectangle, {
                      coordinates: [130, 20, 80, 25],
                      material: "green"
                    })];
                  }),
                  _: 1
                }, 8, ["billboard", "point", "label"]), _createVNode(_component_vc_layer_imagery, {
                  sortOrder: 10
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_tianditu, {
                      mapStyle: "img_c",
                      token: "436ce7e50d27eede2f2929307e6b33c0"
                    })];
                  }),
                  _: 1
                })];
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
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.clear
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
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
            }
          };
        },
        methods: {
          clear: function clear() {
            this.$refs.selectionIndicator.selectedFeature.value = undefined;
          },
          pickEvt: function pickEvt(e) {
            console.log(e);
          },
          unload: function unload() {
            this.$refs.selectionIndicator.unload();
          },
          load: function load() {
            this.$refs.selectionIndicator.load();
          },
          reload: function reload() {
            this.$refs.selectionIndicator.reload();
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-selection-indicator.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-selection-indicator.md



vc_selection_indicatorvue_type_script_lang_ts.render = vc_selection_indicatorvue_type_template_id_6eb3db60_render

/* harmony default export */ var vc_selection_indicator = __webpack_exports__["default"] = (vc_selection_indicatorvue_type_script_lang_ts);

/***/ })

}]);