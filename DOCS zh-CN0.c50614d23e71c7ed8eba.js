(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[103],{

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/analyses/vc-analyses.md?vue&type=template&id=3e71b169

const vc_analysesvue_type_template_id_3e71b169_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_analysesvue_type_template_id_3e71b169_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcAnalyses ");

const vc_analysesvue_type_template_id_3e71b169_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "加载分析工具组件。包含通视分析、可视域分析（3DTiles)。", -1);

const vc_analysesvue_type_template_id_3e71b169_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 需要引入样式文件: "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "import 'vue-cesium/dist/index.css';")], -1);

const vc_analysesvue_type_template_id_3e71b169_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "分析工具组件的基础用法。", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-analyses"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加分析工具。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- 修改定位 和 位置偏移 -->\n    <vc-analyses\n      ref=\"analysesRef\"\n      position=\"bottom-left\"\n      :main-fab-opts=\"mainFabOpts\"\n      :offset=\"[10, 30]\"\n      :editable=\"editable\"\n      @draw-evt=\"drawEvt\"\n      @active-evt=\"activeEvt\"\n      @editor-evt=\"editorEvt\"\n      @mouse-evt=\"mouseEvt\"\n      @ready=\"analysesReadyDefault\"\n    ></vc-analyses>\n    <vc-primitive-tileset\n      url=\"https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json\"\n      @ready-promise=\"onTilesetReady\"\n    ></vc-primitive-tileset>\n    <vc-layer-imagery>\n      <vc-imagery-provider-tianditu map-style=\"img_c\" :maximum-level=\"17\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n    <vc-terrain-provider-cesium v-if=\"addTerrain\"></vc-terrain-provider-cesium>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    <el-checkbox v-model=\"editable\">可编辑</el-checkbox>\n    <el-checkbox v-model=\"addTerrain\">地形</el-checkbox>\n  </el-row>\n</el-row>\n\n<script>\n  let viewer = undefined\n  export default {\n    data() {\n      return {\n        addTerrain: false,\n        drawingActionInstances: [],\n        editable: false,\n        mainFabOpts: {\n          direction: 'right'\n        }\n      }\n    },\n    methods: {\n      analysesReadyDefault({ Cesium, viewer, cesiumObject }) {\n        console.log('分析选项参数：', cesiumObject)\n        window.viewer = viewer\n        window.vm = this\n      },\n      clear() {\n        this.$refs.drawingsCustomRef.clearAll()\n      },\n      drawingsReady({ Cesium, viewer, cesiumObject }) {\n        this.drawingActionInstances = cesiumObject\n      },\n      toggle(drawingActionInstance) {\n        this.$refs.drawingsCustomRef.toggleAction(drawingActionInstance.name)\n      },\n      onTilesetReady(tileset, viewer) {\n        viewer.zoomTo(tileset)\n        viewer.scene.globe.depthTestAgainstTerrain = true\n        this.restoreCursorMove = 'auto'\n        this.drawing = false\n        window.viewer = viewer\n      },\n      drawEvt(e, viewer) {\n        const restoreCursor = getComputedStyle(viewer.canvas).cursor\n        if (e.finished) {\n          if (e.type === 'move') {\n            viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove}`)\n          }\n          this.drawing = false\n        } else {\n          this.drawing = true\n          if (e.type === 'move') {\n            viewer.canvas.setAttribute('style', 'cursor: move')\n          }\n          if (e.type === 'new') {\n            viewer.canvas.setAttribute('style', 'cursor: crosshair')\n          }\n        }\n      },\n      activeEvt(e, viewer) {\n        console.log(e)\n        viewer.canvas.setAttribute('style', `cursor: ${e.isActive ? 'crosshair' : 'auto'}`)\n        if (!e.isActive) {\n          this.drawing = false\n          this.restoreCursorMove = 'auto'\n        }\n      },\n      editorEvt(e, viewer) {\n        if (e.type === 'move') {\n          viewer.canvas.setAttribute('style', 'cursor: move')\n          this.drawing = true\n        } else {\n          viewer.canvas.setAttribute('style', 'cursor: auto')\n        }\n      },\n      mouseEvt(e, viewer) {\n        const restoreCursor = getComputedStyle(viewer.canvas).cursor\n        if (!this.drawing) {\n          console.log(e)\n          if (e.type === 'onmouseover') {\n            this.restoreCursorMove = restoreCursor\n            viewer.canvas.setAttribute('style', 'cursor: pointer')\n          } else {\n            viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove || 'auto'}`)\n          }\n        }\n      },\n      unload() {\n        this.$refs.analysesRef.unload()\n      },\n      load() {\n        this.$refs.analysesRef.load()\n      },\n      reload() {\n        this.$refs.analysesRef.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>string</td><td><code>&#39;top-right&#39;</code></td><td><code>optional</code> 指定分析组件的位置。</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>[number, number]</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定分析组件基于位置的偏移量。</td><td></td></tr><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定分析的结果是否可见。</td><td></td></tr><tr><td>mode</td><td>number</td><td><code>1</code></td><td><code>optional</code> 指定绘制交互模式，0 代表连续绘制，1 代表绘制一次就结束。</td><td></td></tr><tr><td>analyses</td><td>Array&lt;&#39;sightline&#39; | &#39;viewshed&#39;&gt;</td><td><code>[&#39;sightline&#39;, &#39;viewshed&#39;]</code></td><td><code>optional</code> 指定要加载的分析实例。</td><td></td></tr><tr><td>activeColor</td><td>string</td><td><code>&#39;positive&#39;</code></td><td><code>optional</code> 指定绘制实例激活时的颜色。</td><td></td></tr><tr><td>editable</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> 指定绘制结果对象是否可编辑。</td><td></td></tr><tr><td>mainFabOpts</td><td>VcActionTooltipProps &amp; VcFabProps</td><td></td><td><code>optional</code> 指定分析组件浮动按钮的样式选项。</td><td></td></tr><tr><td>fabActionOpts</td><td>VcActionTooltipProps</td><td></td><td><code>optional</code> 指定其他分析按钮的公共样式选项。</td><td></td></tr><tr><td>sightlineActionOpts</td><td>VcActionTooltipProps</td><td></td><td><code>optional</code> 指定通视分析绘制按钮的样式选项。</td><td></td></tr><tr><td>sightlineAnalysisOpts</td><td>VcDrawingOpts</td><td></td><td><code>optional</code> 指定通视分析绘制参数。</td><td></td></tr><tr><td>viewshedActionOpts</td><td>VcActionTooltipProps</td><td></td><td><code>optional</code> 指定可视域分析按钮的样式选项。</td><td></td></tr><tr><td>viewshedAnalysisOpts</td><td>VcViewshedAnalysisOpts</td><td></td><td><code>optional</code> 指定可视域分析参数。</td><td></td></tr><tr><td>clearActionOpts</td><td>VcActionTooltipProps</td><td></td><td><code>optional</code> 指定清除按钮的样式选项。</td><td></td></tr></tbody></table><div class=\"tip\"><p>提示：绘制组件主要由两部分构成：（1）支持展开和收缩的浮动按钮（Fab）；（2）具体绘制按钮（FabAction）。</p></div>", 2);

const _hoisted_12 = {
  class: "tip"
};

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "提示：每个绘制按钮（FabAction）对应有属性 xxxOpts，用于自定义分析参数。", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("详见：");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("defaultProps");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>各绘制结果的参数配置由于篇幅太长这儿就不一一列举了，如有自定义需要，请在当前文档页面打开控制台输出可以查看 <code>绘制按钮的默认参数</code> 和 <code>绘制结果的默认参数</code>。分别是 <code>actionOpts</code> 和 <code>cmpOpts</code> 属性。例如 <code>sightlineAnalysisOpts</code> 参数对象结构与控制台输出 <code>绘制选项参数：</code> 中 <code>name</code> 为 <code>sightline</code> 项的 <code>cmpOpts</code> 结构相同。<code>sightlineActionOpts</code> 参数对象与控制台输出 <code>绘制选项参数：</code> 中 <code>name</code> 为 <code>sightline</code> 项的 <code>actionOpts</code> 结构相同。当然也可以在自己代码中参考这样输出来查看。</p>", 1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>drawEvt</td><td>(evt: VcDrawingActiveEvt, viewer: Cesium.Viewer)</td><td>绘制时触发。</td></tr><tr><td>activeEvt</td><td>(evt: VcDrawingDrawEvt, viewer: Cesium.Viewer)</td><td>切换分析 Action 时触发。</td></tr><tr><td>editorEvt</td><td>(evt: VcDrawingEditorEvt, viewer: Cesium.Viewer)</td><td>点击编辑按钮时触发。</td></tr><tr><td>mouseEvt</td><td>(evt: VcDrawingMouseEvt, viewer: Cesium.Viewer)</td><td>鼠标移进、移出绘制点时触发。</td></tr><tr><td>fabUpdated</td><td>(value: boolean)</td><td>浮动按钮展开、收拢时触发。</td></tr><tr><td>clearEvt</td><td>(evt: object, viewer: Cesium.Viewer)</td><td>清除绘制时触发。</td></tr></tbody></table>", 1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("方法 ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动加载组件。</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动重新加载组件。</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>手动卸载组件。</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>获取标志该组件是否创建成功的 Promise 对象。</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>获取通过该组件加载的 Cesium 对象。</td></tr><tr><td>clearAll</td><td>() =&gt; void</td><td>清除所有的绘制对象。</td></tr><tr><td>activate</td><td>() =&gt; void</td><td>激活绘制事件。</td></tr><tr><td>deactivate</td><td>() =&gt; void</td><td>取消激活绘制事件。</td></tr><tr><td>toggleAction</td><td>(drawingOption: VcDrawingActionInstance | string) =&gt; void</td><td>切换绘制实例。</td></tr><tr><td>getFabRef</td><td>() =&gt; VcFabRef</td><td>获取浮动按钮模板引用。</td></tr><tr><td>getDrawingActionInstance</td><td>(actionName: string) =&gt; VcDrawingActionInstance</td><td>根据action名称获取绘制实例。</td></tr><tr><td>getDrawingActionInstances</td><td>() =&gt; Array&lt;VcDrawingActionInstance&gt;</td><td>获取所有绘制实例。</td></tr><tr><td>getSelectedDrawingActionInstance</td><td>() =&gt; VcDrawingActionInstance</td><td>获取选中的绘制实例。</td></tr></tbody></table>", 1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("插槽 ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "插槽名"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "描述")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "body"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "用于自定义绘制组件 UI。")])])], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("可视域分析： ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Helsing 博文");

function vc_analysesvue_type_template_id_3e71b169_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_analysesvue_type_template_id_3e71b169_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcanalyses",
    tabindex: "-1",
    content: "VcAnalyses",
    href: "#vcanalyses",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_analysesvue_type_template_id_3e71b169_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcanalyses"
    })]),
    _: 1
  }), vc_analysesvue_type_template_id_3e71b169_hoisted_3, vc_analysesvue_type_template_id_3e71b169_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_analysesvue_type_template_id_3e71b169_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_link, {
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
    id: "shu-xing",
    tabindex: "-1",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createElementVNode"])("div", _hoisted_12, [_hoisted_13, Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/blob/dev/packages/components/analyses/src/defaultProps.ts"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    _: 1
  })]), _hoisted_16]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-jian",
    tabindex: "-1",
    content: "事件",
    href: "#shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "fang-fa",
    tabindex: "-1",
    content: "方法",
    href: "#fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fang-fa"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "cha-cao",
    tabindex: "-1",
    content: "插槽",
    href: "#cha-cao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cha-cao"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "can-kao",
    tabindex: "-1",
    content: "参考",
    href: "#can-kao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#can-kao"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_24, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://blog.csdn.net/fywindmoon/article/details/108415116"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_25]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/analyses/vc-analyses.md?vue&type=template&id=3e71b169

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/analyses/vc-analyses.md?vue&type=script&lang=ts

/* harmony default export */ var vc_analysesvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createBlock: _createBlock,
        createCommentVNode: _createCommentVNode,
        createTextVNode: _createTextVNode,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("可编辑");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("地形");

      function render(_ctx, _cache) {
        const _component_vc_analyses = _resolveComponent("vc-analyses");

        const _component_vc_primitive_tileset = _resolveComponent("vc-primitive-tileset");

        const _component_vc_imagery_provider_tianditu = _resolveComponent("vc-imagery-provider-tianditu");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_terrain_provider_cesium = _resolveComponent("vc-terrain-provider-cesium");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_checkbox = _resolveComponent("el-checkbox");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_analyses, {
              ref: "analysesRef",
              position: "bottom-left",
              "main-fab-opts": _ctx.mainFabOpts,
              offset: [10, 30],
              editable: _ctx.editable,
              onDrawEvt: _ctx.drawEvt,
              onActiveEvt: _ctx.activeEvt,
              onEditorEvt: _ctx.editorEvt,
              onMouseEvt: _ctx.mouseEvt,
              onReady: _ctx.analysesReadyDefault
            }, null, 8, ["main-fab-opts", "editable", "onDrawEvt", "onActiveEvt", "onEditorEvt", "onMouseEvt", "onReady"]), _createVNode(_component_vc_primitive_tileset, {
              url: "https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json",
              onReadyPromise: _ctx.onTilesetReady
            }, null, 8, ["onReadyPromise"]), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_tianditu, {
                "map-style": "img_c",
                "maximum-level": 17,
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            }), _ctx.addTerrain ? (_openBlock(), _createBlock(_component_vc_terrain_provider_cesium, {
              key: 0
            })) : _createCommentVNode("", true)]),
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
            }, 8, ["onClick"]), _createVNode(_component_el_checkbox, {
              modelValue: _ctx.editable,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.editable = $event)
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
              modelValue: _ctx.addTerrain,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.addTerrain = $event)
            }, {
              default: _withCtx(() => [_hoisted_5]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      let viewer = undefined;
      const democomponentExport = {
        data() {
          return {
            addTerrain: false,
            drawingActionInstances: [],
            editable: false,
            mainFabOpts: {
              direction: 'right'
            }
          };
        },

        methods: {
          analysesReadyDefault(_ref) {
            let {
              Cesium,
              viewer,
              cesiumObject
            } = _ref;
            console.log('分析选项参数：', cesiumObject);
            window.viewer = viewer;
            window.vm = this;
          },

          clear() {
            this.$refs.drawingsCustomRef.clearAll();
          },

          drawingsReady(_ref2) {
            let {
              Cesium,
              viewer,
              cesiumObject
            } = _ref2;
            this.drawingActionInstances = cesiumObject;
          },

          toggle(drawingActionInstance) {
            this.$refs.drawingsCustomRef.toggleAction(drawingActionInstance.name);
          },

          onTilesetReady(tileset, viewer) {
            viewer.zoomTo(tileset);
            viewer.scene.globe.depthTestAgainstTerrain = true;
            this.restoreCursorMove = 'auto';
            this.drawing = false;
            window.viewer = viewer;
          },

          drawEvt(e, viewer) {
            const restoreCursor = getComputedStyle(viewer.canvas).cursor;

            if (e.finished) {
              if (e.type === 'move') {
                viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove}`);
              }

              this.drawing = false;
            } else {
              this.drawing = true;

              if (e.type === 'move') {
                viewer.canvas.setAttribute('style', 'cursor: move');
              }

              if (e.type === 'new') {
                viewer.canvas.setAttribute('style', 'cursor: crosshair');
              }
            }
          },

          activeEvt(e, viewer) {
            console.log(e);
            viewer.canvas.setAttribute('style', `cursor: ${e.isActive ? 'crosshair' : 'auto'}`);

            if (!e.isActive) {
              this.drawing = false;
              this.restoreCursorMove = 'auto';
            }
          },

          editorEvt(e, viewer) {
            if (e.type === 'move') {
              viewer.canvas.setAttribute('style', 'cursor: move');
              this.drawing = true;
            } else {
              viewer.canvas.setAttribute('style', 'cursor: auto');
            }
          },

          mouseEvt(e, viewer) {
            const restoreCursor = getComputedStyle(viewer.canvas).cursor;

            if (!this.drawing) {
              console.log(e);

              if (e.type === 'onmouseover') {
                this.restoreCursorMove = restoreCursor;
                viewer.canvas.setAttribute('style', 'cursor: pointer');
              } else {
                viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove || 'auto'}`);
              }
            }
          },

          unload() {
            this.$refs.analysesRef.unload();
          },

          load() {
            this.$refs.analysesRef.load();
          },

          reload() {
            this.$refs.analysesRef.reload();
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
// CONCATENATED MODULE: ./website/docs/zh-CN/analyses/vc-analyses.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/analyses/vc-analyses.md



vc_analysesvue_type_script_lang_ts.render = vc_analysesvue_type_template_id_3e71b169_render

/* harmony default export */ var vc_analyses = __webpack_exports__["default"] = (vc_analysesvue_type_script_lang_ts);

/***/ })

}]);