(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[142],{

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.26/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_84624e34ee7884f58cc7c084da9eaf0a/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_84624e34ee7884f58cc7c084da9eaf0a/node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/controls/vc-navigation-sm.md?vue&type=template&id=4cce582c

const vc_navigation_smvue_type_template_id_4cce582c_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_navigation_smvue_type_template_id_4cce582c_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcNavigationSm ");

const vc_navigation_smvue_type_template_id_4cce582c_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("导航组件 —— 高仿超图样式。由 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-compass-sm"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("、"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-zoom-control-sm"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组合而成。")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 需要引入样式文件: "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "import 'vue-cesium/default/index.css';")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "导航组件的基础用法。", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("将 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-navigation-sm"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签作为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的子组件挂载即可。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-navigation-sm @zoomEvt=\"onNavigationEvt\" @compassEvt=\"onNavigationEvt\" ref=\"navigation\"></vc-navigation-sm>\n    <vc-navigation-sm position=\"left\" :compassOpts=\"{ autoHidden: false }\" :zoomOpts=\"{ autoHidden: false }\"></vc-navigation-sm>\n    <vc-compass-sm :autoHidden=\"false\" position=\"bottom\" :offset=\"[200, 20]\"></vc-compass-sm>\n    <vc-compass-sm position=\"bottom\" :offset=\"[-200, 20]\"></vc-compass-sm>\n    <vc-zoom-control-sm position=\"bottom\" :offset=\"[0, 50]\"></vc-zoom-control-sm>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n<script>\n  export default {\n    methods: {\n      load() {\n        this.$refs.navigation.load()\n      },\n      reload() {\n        this.$refs.navigation.reload()\n      },\n      unload() {\n        this.$refs.navigation.unload()\n      },\n      onNavigationEvt(e) {\n        console.log(e)\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcNavigationSm 属性 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> 指定导航组件位置。</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定导航组件基于位置的偏移量。</td><td></td></tr><tr><td>compassOpts</td><td>Object|false</td><td>与 <code>VcCompassSm</code> 保持一致</td><td><code>optional</code> 指定罗盘控件参数，false 即不显示。</td><td></td></tr><tr><td>zoomOpts</td><td>Object|false</td><td>与 <code>VcZoomControlSm</code> 保持一致</td><td><code>optional</code> 指定缩放控件参数，false 即不显示。</td><td></td></tr></tbody></table><div class=\"tip\"><p>提示 <code>compassOpts</code>、<code>zoomOpts</code> 默认参数：</p></div><div class=\"tipflex\"><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// compassOpts</span>\n{\n  <span class=\"hljs-attr\">enableCompassOuterRing</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">duration</span>: <span class=\"hljs-number\">1.5</span>,\n  <span class=\"hljs-attr\">autoHidden</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>],\n    <span class=\"hljs-attr\">tip</span>: <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span> <span class=\"hljs-comment\">// 未指定则用对应语言的默认值</span>\n  }\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// zoomOpts</span>\n{\n  <span class=\"hljs-attr\">autoHidden</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>],\n    <span class=\"hljs-attr\">zoomInTip</span>: <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span>,\n    <span class=\"hljs-attr\">zoomOutTip</span>: <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span>,\n    <span class=\"hljs-attr\">zoomBarTip</span>: <span class=\"hljs-keyword\">void</span> <span class=\"hljs-number\">0</span>\n  }\n}\n</code><span class=\"lang-mark\">js</span></pre></div>", 3);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcNavigationSm 事件 ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>zoomEvt</td><td></td><td>操作缩放控件时触发。</td></tr><tr><td>compassEvt</td><td></td><td>操作罗盘控件时触发。</td></tr></tbody></table>", 1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcNavigationSm 插槽 ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "插槽名"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "描述"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "子组件")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "用于挂载 vc-navigation-sm 子组件。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-compass-sm/vc-zoom-control-sm")])])], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCompassSm ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "罗盘组件。", -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCompassSm 属性 ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> 指定罗盘位置。</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定罗盘基于位置的偏移量。</td><td></td></tr><tr><td>enableCompassOuterRing</td><td>String</td><td><code>true</code></td><td><code>optional</code> 指定罗盘外环是否可以操作。</td><td></td></tr><tr><td>duration</td><td>Number</td><td><code>1.5</code></td><td><code>optional</code> 指定双击罗盘恢复俯仰角飞行时间，单位秒。</td><td></td></tr><tr><td>tooltip</td><td>Object</td><td></td><td><code>optional</code> 指定罗盘提示信息参数。</td><td></td></tr><tr><td>autoHidden</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否自动隐藏罗盘部分控件。</td><td></td></tr></tbody></table>", 1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCompassSm 事件 ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "事件名"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "参数"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "描述")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "compassEvt"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "操作罗盘控件时触发。")])])], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcZoomControlSm ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "缩放组件。", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcZoomControlSm 属性 ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>top-right</code></td><td><code>optional</code> 指定缩放控件位置。</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定缩放控件基于位置的偏移量。</td><td></td></tr><tr><td>tooltip</td><td>Object</td><td></td><td><code>optional</code> 指定罗盘提示信息参数。</td><td></td></tr><tr><td>autoHidden</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否自动隐藏放大控件。</td><td></td></tr></tbody></table>", 1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcZoomControlSm 事件 ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "事件名"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "参数"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "描述")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "zoomEvt"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "操作缩放控件时触发。")])])], -1);

function vc_navigation_smvue_type_template_id_4cce582c_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_navigation_smvue_type_template_id_4cce582c_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcnavigationsm",
    tabindex: "-1",
    content: "VcNavigationSm",
    href: "#vcnavigationsm",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_navigation_smvue_type_template_id_4cce582c_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcnavigationsm"
    })]),
    _: 1
  }), vc_navigation_smvue_type_template_id_4cce582c_hoisted_3, _hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcnavigationsm-shu-xing",
    tabindex: "-1",
    content: "VcNavigationSm 属性",
    href: "#vcnavigationsm-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcnavigationsm-shu-xing"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcnavigationsm-shi-jian",
    tabindex: "-1",
    content: "VcNavigationSm 事件",
    href: "#vcnavigationsm-shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcnavigationsm-shi-jian"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcnavigationsm-cha-cao",
    tabindex: "-1",
    content: "VcNavigationSm 插槽",
    href: "#vcnavigationsm-cha-cao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcnavigationsm-cha-cao"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccompasssm",
    tabindex: "-1",
    content: "VcCompassSm",
    href: "#vccompasssm",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccompasssm"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccompasssm-shu-xing",
    tabindex: "-1",
    content: "VcCompassSm 属性",
    href: "#vccompasssm-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccompasssm-shu-xing"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccompasssm-shi-jian",
    tabindex: "-1",
    content: "VcCompassSm 事件",
    href: "#vccompasssm-shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccompasssm-shi-jian"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vczoomcontrolsm",
    tabindex: "-1",
    content: "VcZoomControlSm",
    href: "#vczoomcontrolsm",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vczoomcontrolsm"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vczoomcontrolsm-shu-xing",
    tabindex: "-1",
    content: "VcZoomControlSm 属性",
    href: "#vczoomcontrolsm-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_25, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vczoomcontrolsm-shu-xing"
    })]),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vczoomcontrolsm-shi-jian",
    tabindex: "-1",
    content: "VcZoomControlSm 事件",
    href: "#vczoomcontrolsm-shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vczoomcontrolsm-shi-jian"
    })]),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-navigation-sm.md?vue&type=template&id=4cce582c

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_84624e34ee7884f58cc7c084da9eaf0a/node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/controls/vc-navigation-sm.md?vue&type=script&lang=ts

/* harmony default export */ var vc_navigation_smvue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

      function render(_ctx, _cache) {
        const _component_vc_navigation_sm = _resolveComponent("vc-navigation-sm");

        const _component_vc_compass_sm = _resolveComponent("vc-compass-sm");

        const _component_vc_zoom_control_sm = _resolveComponent("vc-zoom-control-sm");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_navigation_sm, {
              onZoomEvt: _ctx.onNavigationEvt,
              onCompassEvt: _ctx.onNavigationEvt,
              ref: "navigation"
            }, null, 8, ["onZoomEvt", "onCompassEvt"]), _createVNode(_component_vc_navigation_sm, {
              position: "left",
              compassOpts: {
                autoHidden: false
              },
              zoomOpts: {
                autoHidden: false
              }
            }), _createVNode(_component_vc_compass_sm, {
              autoHidden: false,
              position: "bottom",
              offset: [200, 20]
            }), _createVNode(_component_vc_compass_sm, {
              position: "bottom",
              offset: [-200, 20]
            }), _createVNode(_component_vc_zoom_control_sm, {
              position: "bottom",
              offset: [0, 50]
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
            }, 8, ["onClick"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const democomponentExport = {
        methods: {
          load() {
            this.$refs.navigation.load();
          },

          reload() {
            this.$refs.navigation.reload();
          },

          unload() {
            this.$refs.navigation.unload();
          },

          onNavigationEvt(e) {
            console.log(e);
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
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-navigation-sm.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-navigation-sm.md



vc_navigation_smvue_type_script_lang_ts.render = vc_navigation_smvue_type_template_id_4cce582c_render

/* harmony default export */ var vc_navigation_sm = __webpack_exports__["default"] = (vc_navigation_smvue_type_script_lang_ts);

/***/ })

}]);