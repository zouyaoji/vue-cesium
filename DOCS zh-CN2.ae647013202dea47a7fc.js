(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/controls/vc-compass.md?vue&type=template&id=3e882a61

var vc_compassvue_type_template_id_3e882a61_hoisted_1 = {
  class: "content element-doc"
};

var vc_compassvue_type_template_id_3e882a61_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h2", {
  id: "vccompass"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vccompass"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" VcCompass")], -1);

var vc_compassvue_type_template_id_3e882a61_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "罗盘组件。", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 该需要引入样式文件: "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "import 'vue-cesium/lib/theme-default/index.css';")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "罗盘组件的基础用法。", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("将 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-compass"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签作为 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 的子组件挂载即可。")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-compass></vc-compass>\n    <vc-compass\n      ref=\"compass\"\n      position=\"left\"\n      :outerOptions=\"{name: 'svguse:#vc-icons-compass-outer', size: '250px'}\"\n      :innerOptions=\"{name: 'fa fa-compass', size: '60px', background: 'transparent', color: '#009688'}\"\n    ></vc-compass>\n    <vc-compass position=\"top\" :outerOptions=\"{name: 'svguse:#vc-icons-qq'}\"></vc-compass>\n    <vc-compass\n      position=\"bottom\"\n      :outerOptions=\"{name: 'fa fa-circle-o-notch'}\"\n      :innerOptions=\"{name: 'fa fa-circle', background: 'transparent'}\"\n    ></vc-compass>\n    <vc-compass position=\"right\" :enableCompassOuterRing=\"false\"></vc-compass>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n<script>\n  export default {\n    methods: {\n      load() {\n        this.$refs.compass.load()\n      },\n      reload() {\n        this.$refs.compass.reload()\n      },\n      unload() {\n        this.$refs.compass.unload()\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"vccompass-shu-xing\"><a class=\"header-anchor\" href=\"#vccompass-shu-xing\">¶</a> VcCompass 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> 指定罗盘位置</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定罗盘基于位置的偏移量）</td></tr><tr><td>enableCompassOuterRing</td><td>String</td><td><code>true</code></td><td><code>optional</code> 指定罗盘外环是否可以操作</td></tr><tr><td>duration</td><td>Number</td><td><code>1.5</code></td><td><code>optional</code> 指定双击罗盘恢复俯仰角飞行时间，单位秒</td></tr><tr><td>outerOptions</td><td>Object</td><td></td><td><code>optional</code> 指定罗盘外环参数</td></tr><tr><td>innerOptions</td><td>Object</td><td></td><td><code>optional</code> 指定罗盘内环参数</td></tr><tr><td>markerOptions</td><td>Object</td><td></td><td><code>optional</code> 指定罗盘旋转时圆块参数</td></tr></tbody></table><div class=\"tip\"><p>提示 <code>outerOptions</code>、<code>innerOptions</code>、<code>markerOptions</code> 默认参数：</p></div><div class=\"tipflex\"><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// outerOptions</span>\n{\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;vc-icons-compass-outer&#39;</span>, <span class=\"hljs-comment\">// 图标名称</span>\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;96px&#39;</span>,                   <span class=\"hljs-comment\">// 外环尺寸</span>\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#3f4854&#39;</span>,               <span class=\"hljs-comment\">// 外环颜色</span>\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,      <span class=\"hljs-comment\">// 外环背景</span>\n  <span class=\"hljs-attr\">tooltip</span>: {                      <span class=\"hljs-comment\">// false 即为不显示</span>\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,                  <span class=\"hljs-comment\">// 鼠标悬浮多久显示提示信息</span>\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,      <span class=\"hljs-comment\">// 提示信息锚点</span>\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]               <span class=\"hljs-comment\">// 提示信息位置偏移</span>\n  }\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// innerOptions</span>\n{\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;vc-icons-compass-outer&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;96px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#3f4854&#39;</span>,\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]\n  }\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// markerOptions</span>\n{\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;vc-icons-compass-rotation-marker&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;96px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1976D2&#39;</span>\n}\n</code></pre></div><h3 id=\"vccompass-shi-jian\"><a class=\"header-anchor\" href=\"#vccompass-shi-jian\">¶</a> VcCompass 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>compassEvt</td><td>{camera, status, target, type}</td><td>操作罗盘控件时触发</td></tr></tbody></table>", 6);

function vc_compassvue_type_template_id_3e882a61_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_compassvue_type_template_id_3e882a61_hoisted_1, [vc_compassvue_type_template_id_3e882a61_hoisted_2, vc_compassvue_type_template_id_3e882a61_hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-compass.md?vue&type=template&id=3e882a61

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/controls/vc-compass.md?vue&type=script&lang=ts


/* harmony default export */ var vc_compassvue_type_script_lang_ts = ({
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
        var _component_vc_compass = _resolveComponent("vc-compass");

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
                return [_createVNode(_component_vc_compass), _createVNode(_component_vc_compass, {
                  ref: "compass",
                  position: "left",
                  outerOptions: {
                    name: 'svguse:#vc-icons-compass-outer',
                    size: '250px'
                  },
                  innerOptions: {
                    name: 'fa fa-compass',
                    size: '60px',
                    background: 'transparent',
                    color: '#009688'
                  }
                }, null, 512), _createVNode(_component_vc_compass, {
                  position: "top",
                  outerOptions: {
                    name: 'svguse:#vc-icons-qq'
                  }
                }), _createVNode(_component_vc_compass, {
                  position: "bottom",
                  outerOptions: {
                    name: 'fa fa-circle-o-notch'
                  },
                  innerOptions: {
                    name: 'fa fa-circle',
                    background: 'transparent'
                  }
                }), _createVNode(_component_vc_compass, {
                  position: "right",
                  enableCompassOuterRing: false
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
            this.$refs.compass.load();
          },
          reload: function reload() {
            this.$refs.compass.reload();
          },
          unload: function unload() {
            this.$refs.compass.unload();
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-compass.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-compass.md



vc_compassvue_type_script_lang_ts.render = vc_compassvue_type_template_id_3e882a61_render

/* harmony default export */ var vc_compass = __webpack_exports__["default"] = (vc_compassvue_type_script_lang_ts);

/***/ })

}]);