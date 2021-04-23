(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[123],{

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/controls/vc-print.md?vue&type=template&id=075dac36

var vc_printvue_type_template_id_075dac36_hoisted_1 = {
  class: "content element-doc"
};

var vc_printvue_type_template_id_075dac36_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h2", {
  id: "vcprint"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vcprint"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" VcPrint")], -1);

var vc_printvue_type_template_id_075dac36_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "截图打印组件。", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 该需要引入样式文件: "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "import 'vue-cesium/lib/theme-default/index.css';")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "截图打印组件的基础用法。", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("将 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-print"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签作为 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 的子组件挂载即可。")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-print ref=\"print\"></vc-print>\n    <vc-print position=\"bottom-right\" downloadAutomatically></vc-print>\n    <vc-print\n      position=\"bottom-right\"\n      :offset=\"[40, 20]\"\n      :showPrintView=\"false\"\n      printAutomatically\n      size=\"28px\"\n      :round=\"false\"\n      label=\"打印分享\"\n      background=\"#31CCEC\"\n      name=\"fa fa-print\"\n    ></vc-print>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n<script>\n  export default {\n    methods: {\n      load() {\n        this.$refs.print.load()\n      },\n      reload() {\n        this.$refs.print.reload()\n      },\n      unload() {\n        this.$refs.print.unload()\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"vcprint-shu-xing\"><a class=\"header-anchor\" href=\"#vcprint-shu-xing\">¶</a> VcPrint 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>&#39;top-right&#39;</code></td><td><code>optional</code> 指定打印控件位置</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定打印控件基于位置的偏移量</td></tr><tr><td>showCredit</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定打印图片时是否显示加载数据版权信息。</td></tr><tr><td>showPrintView</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否显示打印预览。</td></tr><tr><td>printAutomatically</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否自动打印。需要 showPrintView 设置为 false</td></tr><tr><td>downloadAutomatically</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否下载打印的图片</td></tr><tr><td>name</td><td>String</td><td><code>&#39;vc-icons-capture&#39;</code></td><td><code>optional</code> 指定打印按钮图标</td></tr><tr><td>size</td><td>String</td><td><code>&#39;24px&#39;</code></td><td><code>optional</code> 指定打印按钮尺寸</td></tr><tr><td>color</td><td>String</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> 指定打印按钮颜色</td></tr><tr><td>background</td><td>String</td><td><code>&#39;#fff&#39;</code></td><td><code>optional</code> 指定打印按钮背景</td></tr><tr><td>round</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定打印按钮是否圆形展示</td></tr><tr><td>flat</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定打印按钮是否是普通风格，不带背景、点击效果</td></tr><tr><td>label</td><td>String</td><td></td><td><code>optional</code> 指定打印按钮文字</td></tr><tr><td>stack</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定打印按钮是否堆叠显示</td></tr><tr><td>tooltip</td><td>Object</td><td></td><td><code>optional</code> 指定打印按钮提示信息参数</td></tr></tbody></table><h3 id=\"vcprint-shi-jian\"><a class=\"header-anchor\" href=\"#vcprint-shi-jian\">¶</a> VcPrint 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>printEvt</td><td>{image, status,type}</td><td>操作打印控件时触发</td></tr></tbody></table>", 4);

function vc_printvue_type_template_id_075dac36_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_printvue_type_template_id_075dac36_hoisted_1, [vc_printvue_type_template_id_075dac36_hoisted_2, vc_printvue_type_template_id_075dac36_hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-print.md?vue&type=template&id=075dac36

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/controls/vc-print.md?vue&type=script&lang=ts


/* harmony default export */ var vc_printvue_type_script_lang_ts = ({
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
        var _component_vc_print = _resolveComponent("vc-print");

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
                return [_createVNode(_component_vc_print, {
                  ref: "print"
                }, null, 512), _createVNode(_component_vc_print, {
                  position: "bottom-right",
                  downloadAutomatically: ""
                }), _createVNode(_component_vc_print, {
                  position: "bottom-right",
                  offset: [40, 20],
                  showPrintView: false,
                  printAutomatically: "",
                  size: "28px",
                  round: false,
                  label: "打印分享",
                  background: "#31CCEC",
                  name: "fa fa-print"
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
          load: function load() {
            this.$refs.print.load();
          },
          reload: function reload() {
            this.$refs.print.reload();
          },
          unload: function unload() {
            this.$refs.print.unload();
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-print.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-print.md



vc_printvue_type_script_lang_ts.render = vc_printvue_type_template_id_075dac36_render

/* harmony default export */ var vc_print = __webpack_exports__["default"] = (vc_printvue_type_script_lang_ts);

/***/ })

}]);