(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/overlays/vc-overlay-html.md?vue&type=template&id=3b8dba00

var vc_overlay_htmlvue_type_template_id_3b8dba00_hoisted_1 = {
  class: "content element-doc"
};

var vc_overlay_htmlvue_type_template_id_3b8dba00_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h2", {
  id: "vcoverlayhtml"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vcoverlayhtml"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" VcOverlayHtml")], -1);

var vc_overlay_htmlvue_type_template_id_3b8dba00_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "按地理位置加载 HTML 元素覆盖物。", -1);

var vc_overlay_htmlvue_type_template_id_3b8dba00_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 需要引入样式文件: "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "import 'vue-cesium/lib/theme-default/index.css';")], -1);

var vc_overlay_htmlvue_type_template_id_3b8dba00_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "HTML 覆盖物组件的基础用法。", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-overlay-html"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加 div 标签，并设置 CSS 动画。")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-overlay-html ref=\"html\" :position=\"[117.186419, 45.66446, 20]\">\n      <div class=\"vc-box\">aa</div>\n    </vc-overlay-html>\n    <vc-entity :position=\"[117.186419, 45.66446, 20]\">\n      <vc-graphics-point color=\"red\" :pixelSize=\"8\"></vc-graphics-point>\n    </vc-entity>\n    <vc-overlay-html :position=\"{ lng: 104.04, lat: 30.40 }\">\n      <div class=\"label-container label-container-var\">\n        <div class=\"label-animate-marker_border\">\n          <span class=\"label-animate-marker_text\">成都欢迎您</span>\n        </div>\n      </div>\n    </vc-overlay-html>\n    <vc-layer-imagery :sortOrder=\"20\">\n      <vc-provider-imagery-tianditu mapStyle=\"cva_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n    <vc-layer-imagery :sortOrder=\"10\">\n      <vc-provider-imagery-tianditu mapStyle=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    methods: {\n      unload() {\n        this.$refs.html.unload()\n      },\n      load() {\n        this.$refs.html.load()\n      },\n      reload() {\n        this.$refs.html.reload()\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>position</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 HTML 元素的地理位置。</td></tr><tr><td>pixelOffset</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 HTML 的像素偏移。</td></tr><tr><td>autoHidden</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 HTML 在地球背面时是否自动隐藏。</td></tr><tr><td>customClass</td><td>String</td><td></td><td><code>optional</code> 指定 HTML 自定义 class 。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方沙盒： <a href=\"https://sandcastle.cesium.com/gallery/HTML%20Overlays.html\">HTML Overlays</a></li></ul>", 6);

function vc_overlay_htmlvue_type_template_id_3b8dba00_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_overlay_htmlvue_type_template_id_3b8dba00_hoisted_1, [vc_overlay_htmlvue_type_template_id_3b8dba00_hoisted_2, vc_overlay_htmlvue_type_template_id_3b8dba00_hoisted_3, vc_overlay_htmlvue_type_template_id_3b8dba00_hoisted_4, vc_overlay_htmlvue_type_template_id_3b8dba00_hoisted_5, _hoisted_6, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/overlays/vc-overlay-html.md?vue&type=template&id=3b8dba00

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/overlays/vc-overlay-html.md?vue&type=script&lang=ts


/* harmony default export */ var vc_overlay_htmlvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _createVNode = vue_esm_browser["n" /* createVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        class: "vc-box"
      }, "aa", -1);

      var _hoisted_2 = /*#__PURE__*/_createVNode("div", {
        class: "label-container label-container-var"
      }, [/*#__PURE__*/_createVNode("div", {
        class: "label-animate-marker_border"
      }, [/*#__PURE__*/_createVNode("span", {
        class: "label-animate-marker_text"
      }, "成都欢迎您")])], -1);

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("销毁");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("加载");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("重载");

      function render(_ctx, _cache) {
        var _component_vc_overlay_html = _resolveComponent("vc-overlay-html");

        var _component_vc_graphics_point = _resolveComponent("vc-graphics-point");

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
            return [_createVNode(_component_vc_viewer, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_overlay_html, {
                  ref: "html",
                  position: [117.186419, 45.66446, 20]
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }, 8, ["position"]), _createVNode(_component_vc_entity, {
                  position: [117.186419, 45.66446, 20]
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_point, {
                      color: "red",
                      pixelSize: 8
                    })];
                  }),
                  _: 1
                }, 8, ["position"]), _createVNode(_component_vc_overlay_html, {
                  position: {
                    lng: 104.04,
                    lat: 30.40
                  }
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }, 8, ["position"]), _createVNode(_component_vc_layer_imagery, {
                  sortOrder: 20
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_tianditu, {
                      mapStyle: "cva_c",
                      token: "436ce7e50d27eede2f2929307e6b33c0"
                    })];
                  }),
                  _: 1
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
                    return [_hoisted_3];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.load
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.reload
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_5];
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
        methods: {
          unload: function unload() {
            this.$refs.html.unload();
          },
          load: function load() {
            this.$refs.html.load();
          },
          reload: function reload() {
            this.$refs.html.reload();
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/overlays/vc-overlay-html.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/overlays/vc-overlay-html.md



vc_overlay_htmlvue_type_script_lang_ts.render = vc_overlay_htmlvue_type_template_id_3b8dba00_render

/* harmony default export */ var vc_overlay_html = __webpack_exports__["default"] = (vc_overlay_htmlvue_type_script_lang_ts);

/***/ })

}]);