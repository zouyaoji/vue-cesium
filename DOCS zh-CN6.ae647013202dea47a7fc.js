(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[96],{

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/controls/vc-zoom-control.md?vue&type=template&id=b79f7ba8

var vc_zoom_controlvue_type_template_id_b79f7ba8_hoisted_1 = {
  class: "content element-doc"
};

var vc_zoom_controlvue_type_template_id_b79f7ba8_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h2", {
  id: "vczoomcontrol"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vczoomcontrol"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" VcZoomControl")], -1);

var vc_zoom_controlvue_type_template_id_b79f7ba8_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "缩放组件。", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 该需要引入样式文件: "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "import 'vue-cesium/lib/theme-default/index.css';")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "缩放组件的基础用法。", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("将 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-zoom-control"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签作为 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 的子组件挂载即可。")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-zoom-control ref=\"zoomControl\"></vc-zoom-control>\n    <vc-zoom-control\n      position=\"bottom\"\n      direction=\"horizontal\"\n      :offset=\"[0, 30]\"\n      :zoomResetOptions=\"{size: '48px', color: '#21BA45'}\"\n    ></vc-zoom-control>\n    <vc-zoom-control position=\"bottom\" :enableResetButton=\"false\" borderRadius=\"0\" :offset=\"[0, 120]\"></vc-zoom-control>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n<script>\n  export default {\n    methods: {\n      load() {\n        this.$refs.zoomControl.load()\n      },\n      reload() {\n        this.$refs.zoomControl.reload()\n      },\n      unload() {\n        this.$refs.zoomControl.unload()\n      },\n      onNavigationEvt(e) {\n        console.log(e)\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"vczoomcontrol-shu-xing\"><a class=\"header-anchor\" href=\"#vczoomcontrol-shu-xing\">¶</a> VcZoomControl 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>&#39;top-right&#39;</code></td><td><code>optional</code> 指定缩放控件位置</td><td></td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定缩放控件基于位置的偏移量</td><td></td></tr><tr><td>enableResetButton</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否启用重置按钮</td><td></td></tr><tr><td>zoomAmount</td><td>Number</td><td><code>2</code></td><td><code>optional</code> 指定放大缩小的数量级</td><td></td></tr><tr><td>duration</td><td>String</td><td><code>0.5</code></td><td><code>optional</code> 指定放大缩小过程时间，单位秒</td><td></td></tr><tr><td>durationReset</td><td>Number</td><td><code>1.5</code></td><td><code>optional</code> 指定重置到默认相机位置的时间，单位。</td><td></td></tr><tr><td>defaultResetView</td><td>Object</td><td></td><td><code>optional</code> 指定重置相机的位置</td><td></td></tr><tr><td>overrideViewerCamera</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定初始化时是否覆盖<code>vc-viewer</code>上的<code>camera</code>属性</td><td></td></tr><tr><td>background</td><td>String</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> 指定缩放控件背景</td><td></td></tr><tr><td>border</td><td>String</td><td><code>&#39;solid 1px rgba(255, 255, 255, 0.2)&#39;</code></td><td><code>optional</code> 指定缩放控件边框</td><td></td></tr><tr><td>borderRadius</td><td>String</td><td><code>&#39;100px&#39;</code></td><td><code>optional</code> 指定缩放控件边框圆角</td><td></td></tr><tr><td>direction</td><td>String</td><td><code>&#39;vertical&#39;</code></td><td><code>optional</code> 指定缩放控件方向</td><td>vertical /horizontal</td></tr><tr><td>zoomInOptions</td><td>Object</td><td></td><td><code>optional</code> 指定放大按钮参数</td><td></td></tr><tr><td>zoomOutOptions</td><td>Object</td><td></td><td><code>optional</code> 指定缩小按钮参数</td><td></td></tr><tr><td>zoomResetOptions</td><td>Object</td><td></td><td><code>optional</code> 指定重置按钮参数</td><td></td></tr></tbody></table><div class=\"tip\"><p>提示：<code>durationReset</code>, <code>zoomInOptions</code>, <code>zoomOutOptions</code>, <code>zoomResetOptions</code> 默认参数：</p></div><div class=\"tipflex\"><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// defaultResetView</span>\n{\n  <span class=\"hljs-attr\">position</span>: {\n    <span class=\"hljs-attr\">lng</span>: <span class=\"hljs-number\">105</span>,\n    <span class=\"hljs-attr\">lat</span>: <span class=\"hljs-number\">30</span>,\n    <span class=\"hljs-attr\">height</span>: <span class=\"hljs-number\">19059568.5</span>\n  }\n}\n<span class=\"hljs-comment\">// 结构</span>\n{\n  position?: {\n    <span class=\"hljs-attr\">lng</span>: number,\n    <span class=\"hljs-attr\">lat</span>: number,\n    <span class=\"hljs-attr\">height</span>: number\n  } | [lng, lat, height]\n  rectange?: [west,south,east,north] | {west,south,east,north}\n  <span class=\"hljs-attr\">heading</span>: number\n  <span class=\"hljs-attr\">pitch</span>: number\n  <span class=\"hljs-attr\">roll</span>: number\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// zoomInOptions</span>\n{\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;vc-icons-zoom-in&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,\n  <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-literal\">undefined</span>,\n  <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">500</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]\n  }\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// zoomResetOptions</span>\n{\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;vc-icons-reset&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,\n  <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-literal\">undefined</span>,\n  <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">500</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]\n  }\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// zoomOutOptions</span>\n{\n  <span class=\"hljs-attr\">name</span>: <span class=\"hljs-string\">&#39;vc-icons-zoom-out&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,\n  <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-literal\">undefined</span>,\n  <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">500</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]\n  }\n}\n</code></pre></div><h3 id=\"vczoomcontrol-shi-jian\"><a class=\"header-anchor\" href=\"#vczoomcontrol-shi-jian\">¶</a> VcZoomControl 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>zoomEvt</td><td>{camera, status, target, type}</td><td>操作缩放控件时触发</td></tr></tbody></table>", 6);

function vc_zoom_controlvue_type_template_id_b79f7ba8_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_zoom_controlvue_type_template_id_b79f7ba8_hoisted_1, [vc_zoom_controlvue_type_template_id_b79f7ba8_hoisted_2, vc_zoom_controlvue_type_template_id_b79f7ba8_hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-zoom-control.md?vue&type=template&id=b79f7ba8

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/controls/vc-zoom-control.md?vue&type=script&lang=ts


/* harmony default export */ var vc_zoom_controlvue_type_script_lang_ts = ({
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
        var _component_vc_zoom_control = _resolveComponent("vc-zoom-control");

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
                return [_createVNode(_component_vc_zoom_control, {
                  ref: "zoomControl"
                }, null, 512), _createVNode(_component_vc_zoom_control, {
                  position: "bottom",
                  direction: "horizontal",
                  offset: [0, 30],
                  zoomResetOptions: {
                    size: '48px',
                    color: '#21BA45'
                  }
                }), _createVNode(_component_vc_zoom_control, {
                  position: "bottom",
                  enableResetButton: false,
                  borderRadius: "0",
                  offset: [0, 120]
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
            this.$refs.zoomControl.load();
          },
          reload: function reload() {
            this.$refs.zoomControl.reload();
          },
          unload: function unload() {
            this.$refs.zoomControl.unload();
          },
          onNavigationEvt: function onNavigationEvt(e) {
            console.log(e);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-zoom-control.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-zoom-control.md



vc_zoom_controlvue_type_script_lang_ts.render = vc_zoom_controlvue_type_template_id_b79f7ba8_render

/* harmony default export */ var vc_zoom_control = __webpack_exports__["default"] = (vc_zoom_controlvue_type_script_lang_ts);

/***/ })

}]);