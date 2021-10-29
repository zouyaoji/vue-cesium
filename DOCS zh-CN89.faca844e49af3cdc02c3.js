(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[182],{

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/tools/vc-drawings.md?vue&type=template&id=441638cc

const vc_drawingsvue_type_template_id_441638cc_hoisted_1 = {
  class: "content element-doc"
};

const vc_drawingsvue_type_template_id_441638cc_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcdrawings\"><a class=\"header-anchor\" href=\"#vcdrawings\">¶</a> VcDrawings</h2><p>加载绘制工具组件，目前包含点、线、面绘制工具，其他的后续再增加。</p><p><strong>注意：</strong> 需要引入样式文件: <code>import &#39;vue-cesium/default/index.css&#39;;</code></p><div class=\"tip\"><p>提示：3.0 版本已将绘制组件重构成一个组件，简约的同时支持自定义风格。</p><p>ctrl + 右键取消绘制。</p></div><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>绘制组件的基础用法。</p>", 6);

const vc_drawingsvue_type_template_id_441638cc_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-drawings"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加绘制工具。")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- 修改定位 和 位置偏移 -->\n    <vc-drawings\n      ref=\"drawingsRef\"\n      position=\"bottom-left\"\n      :mainFabOpts=\"mainFabOpts\"\n      :offset=\"[20, 80]\"\n      :editable=\"editable\"\n      :clampToGround=\"clampToGround\"\n      @drawEvt=\"drawEvt\"\n      @activeEvt=\"activeEvt\"\n      @editorEvt=\"editorEvt\"\n      @mouseEvt=\"mouseEvt\"\n      @ready=\"drawingsReadyDefault\"\n    ></vc-drawings>\n    <!-- 结合 slot 改变默认 UI，自定义绘制方法 -->\n    <vc-drawings\n      ref=\"drawingsCustomRef\"\n      position=\"bottom-left\"\n      :mainFabOpts=\"mainFabOpts\"\n      :offset=\"[0, 20]\"\n      :editable=\"editable\"\n      :clampToGround=\"clampToGround\"\n      @ready=\"drawingsReady\"\n      :polylineDrawingOpts=\"polylineDrawingOpts\"\n      :rectangleDrawingOpts=\"rectangleDrawingOpts\"\n      :pinDrawingOpts=\"pinDrawingOpts\"\n    >\n      <template #body>\n        <div class=\"custom-drawings\">\n          <el-row>\n            <el-button\n              v-for=\"(drawingActionInstance, index) in drawingActionInstances\"\n              :key=\"index\"\n              :type=\"drawingActionInstance.isActive ? 'success' : 'primary'\"\n              round\n              @click=\"toggle(drawingActionInstance)\"\n              >{{drawingActionInstance.tip.replace('绘制', '')}}</el-button\n            >\n            <el-button type=\"danger\" round @click=\"clear\">清除</el-button>\n          </el-row>\n        </div>\n      </template>\n    </vc-drawings>\n    <vc-primitive-tileset\n      url=\"https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json\"\n      @readyPromise=\"onTilesetReady\"\n    ></vc-primitive-tileset>\n    <vc-layer-imagery>\n      <vc-provider-imagery-tianditu mapStyle=\"img_c\" :maximumLevel=\"17\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n    <vc-provider-terrain-cesium v-if=\"addTerrain\"></vc-provider-terrain-cesium>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    <el-checkbox v-model=\"editable\">可编辑</el-checkbox>\n    <el-checkbox v-model=\"addTerrain\">地形</el-checkbox>\n    <el-checkbox v-model=\"clampToGround\">贴地</el-checkbox>\n  </el-row>\n</el-row>\n\n<script>\n  let viewer = undefined\n  export default {\n    data() {\n      return {\n        addTerrain: false,\n        drawingActionInstances: [],\n        editable: false,\n        clampToGround: false,\n        mainFabOpts: {\n          direction: 'right'\n        },\n        polylineDrawingOpts: {\n          loop: true\n        },\n        rectangleDrawingOpts: {\n          regular: false\n        },\n        pinDrawingOpts: {\n          billboardOpts: {\n            image: 'https://zouyaoji.top/vue-cesium/images/grepin.png'\n          },\n          labelOpts: {\n            text: '图标点',\n            pixelOffset: [0, -60]\n          }\n        }\n      }\n    },\n    methods: {\n      drawingsReadyDefault({ Cesium, viewer, cesiumObject }) {\n        console.log('绘制选项参数：', cesiumObject)\n      },\n      clear() {\n        this.$refs.drawingsCustomRef.clearAll()\n      },\n      drawingsReady({ Cesium, viewer, cesiumObject }) {\n        this.drawingActionInstances = cesiumObject\n      },\n      toggle(drawingActionInstance) {\n        this.$refs.drawingsCustomRef.toggleAction(drawingActionInstance.name)\n      },\n      onTilesetReady(tileset, viewer) {\n        const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)\n        const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)\n        const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 5)\n        const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())\n        tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)\n        viewer.zoomTo(tileset)\n        viewer.scene.globe.depthTestAgainstTerrain = true\n        this.restoreCursorMove = 'auto'\n        this.drawing = false\n      },\n      drawEvt(e, viewer) {\n        const restoreCursor = getComputedStyle(viewer.canvas).cursor\n        if (e.finished) {\n          if (e.type === 'move') {\n            viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove}`)\n          }\n          this.drawing = false\n        } else {\n          this.drawing = true\n          if (e.type === 'move') {\n            viewer.canvas.setAttribute('style', 'cursor: move')\n          }\n          if (e.type === 'new') {\n            viewer.canvas.setAttribute('style', 'cursor: crosshair')\n          }\n        }\n      },\n      activeEvt(e, viewer) {\n        console.log(e)\n        viewer.canvas.setAttribute('style', `cursor: ${e.isActive ? 'crosshair' : 'auto'}`)\n        if (!e.isActive) {\n          this.drawing = false\n          this.restoreCursorMove = 'auto'\n        }\n      },\n      editorEvt(e, viewer) {\n        if (e.type === 'move') {\n          viewer.canvas.setAttribute('style', 'cursor: move')\n          this.drawing = true\n        } else {\n          viewer.canvas.setAttribute('style', 'cursor: auto')\n        }\n      },\n      mouseEvt(e, viewer) {\n        const restoreCursor = getComputedStyle(viewer.canvas).cursor\n        if (!this.drawing) {\n          console.log(e)\n          if (e.type === 'onmouseover') {\n            this.restoreCursorMove = restoreCursor\n            viewer.canvas.setAttribute('style', 'cursor: pointer')\n          } else {\n            viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove || 'auto'}`)\n          }\n        }\n      },\n      unload() {\n        this.$refs.drawingsRef.unload()\n      },\n      load() {\n        this.$refs.drawingsRef.load()\n      },\n      reload() {\n        this.$refs.drawingsRef.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>&#39;top-right&#39;</code></td><td><code>optional</code> 指定绘制组件的位置。</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定绘制组件基于位置的偏移量。</td><td></td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定绘制的结果是否可见。</td><td></td></tr><tr><td>mode</td><td>Number</td><td><code>1</code></td><td><code>optional</code> 指定绘制交互模式，0 代表连续绘制，1 代表绘制一次就结束。</td><td></td></tr><tr><td>drawings</td><td>Array</td><td><code>[&#39;pin&#39;, &#39;point&#39;, &#39;polyline&#39;, &#39;polygon&#39;, &#39;rectangle&#39;, &#39;circle&#39;, &#39;regular&#39;]</code></td><td><code>optional</code> 指定要加载的绘制实例。</td><td></td></tr><tr><td>activeColor</td><td>String</td><td><code>&#39;positive&#39;</code></td><td><code>optional</code> 指定绘制实例激活时的颜色。</td><td></td></tr><tr><td>editable</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定绘制结果对象是否可编辑。</td><td></td></tr><tr><td>clampToGround</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定绘制结果对象是否贴地或模型。仅线、面对象生效。</td><td></td></tr><tr><td>mainFabOpts</td><td>Object</td><td></td><td><code>optional</code> 指定绘制组件浮动按钮的样式选项。</td><td></td></tr><tr><td>pinActionOpts</td><td>Object</td><td>``</td><td><code>optional</code> 指定图标点绘制按钮的样式选项。</td><td></td></tr><tr><td>pinDrawingOpts</td><td>Object</td><td></td><td><code>optional</code> 指定图标点绘制参数。</td><td></td></tr><tr><td>pointActionOpts</td><td>Object</td><td>``</td><td><code>optional</code> 指定点绘制按钮的样式选项。</td><td></td></tr><tr><td>pointDrawingOpts</td><td>Object</td><td></td><td><code>optional</code> 指定点绘制参数。</td><td></td></tr><tr><td>polylineActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定先绘制按钮的样式选项。</td><td></td></tr><tr><td>polylineDrawingOpts</td><td>Object</td><td></td><td><code>optional</code> 指定线绘制参数。</td><td></td></tr><tr><td>polygonActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定面绘制按钮的样式选项。</td><td></td></tr><tr><td>polygonDrawingOpts</td><td>Object</td><td></td><td><code>optional</code> 指定面绘制参数。</td><td></td></tr><tr><td>rectangleActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定矩形绘制按钮的样式选项。</td><td></td></tr><tr><td>rectangleDrawingOpts</td><td>Object</td><td></td><td><code>optional</code> 指定矩形绘制参数。</td><td></td></tr><tr><td>circleActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定圆绘制按钮的样式选项。</td><td></td></tr><tr><td>circleDrawingOpts</td><td>Object</td><td></td><td><code>optional</code> 指定圆绘制参数。</td><td></td></tr><tr><td>regularActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定正多边形绘制按钮的样式选项。</td><td></td></tr><tr><td>regularDrawingOpts</td><td>Object</td><td></td><td><code>optional</code> 指定正多边形绘制参数。</td><td></td></tr><tr><td>clearActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定清除按钮的样式选项。</td><td></td></tr></tbody></table><div class=\"tip\"><p>提示：绘制组件主要由两部分构成：（1）支持展开和收缩的浮动按钮（Fab）；（2）具体绘制按钮（FabAction）。</p></div><div class=\"tipflex\"><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// 每个按钮均有以下属性</span>\n<span class=\"hljs-comment\">// ActionOpts general props</span>\n{\n  <span class=\"hljs-attr\">externalLabel</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&#39;&#39;</span>,\n  <span class=\"hljs-attr\">labelPosition</span>: <span class=\"hljs-string\">&#39;right&#39;</span>,\n  <span class=\"hljs-attr\">hideLabel</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">disable</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">outline</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">push</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">unelevated</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;primary&#39;</span>,\n  <span class=\"hljs-attr\">glossy</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">square</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">500</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [\n      <span class=\"hljs-number\">0</span>,\n      <span class=\"hljs-number\">20</span>\n    ]\n  },\n  <span class=\"hljs-comment\">// The default icons are</span>\n  <span class=\"hljs-comment\">// vc-icons-drawing-point</span>\n  <span class=\"hljs-comment\">// vc-icons-drawing-polyline</span>\n  <span class=\"hljs-comment\">// vc-icons-drawing-polygon</span>\n  <span class=\"hljs-comment\">// vc-icons-drawing-rectangle</span>\n  <span class=\"hljs-comment\">// vc-icons-drawing-circle</span>\n  <span class=\"hljs-comment\">// vc-icons-drawing-regular</span>\n  <span class=\"hljs-comment\">// vc-icons-clear</span>\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-drawing-point&#39;</span>\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// mainFabOpts 在上述的基础上多了这些属性</span>\n<span class=\"hljs-comment\">// The following properties are added to the common properties of mainFabOpts:</span>\n{\n  <span class=\"hljs-attr\">direction</span>: <span class=\"hljs-string\">&#39;left&#39;</span>,\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-drawing-button&#39;</span>,\n  <span class=\"hljs-attr\">activeIcon</span>: <span class=\"hljs-string\">&#39;vc-icons-drawing-button&#39;</span>,\n  <span class=\"hljs-attr\">verticalActionsAlign</span>: <span class=\"hljs-string\">&#39;center&#39;</span>,\n  <span class=\"hljs-attr\">hideIcon</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">persistent</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">autoExpand</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">hideActionOnClick</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;info&#39;</span>\n}\n</code></pre></div><div class=\"tip\"><p>提示：每个绘制按钮（FabAction）对应有属性 xxxDrawingOpts，用于自定义绘制对象。</p><p>详见：<a href=\"https://github.com/zouyaoji/vue-cesium/blob/dev/packages/components/drawings/src/defaultProps.ts\">defaultProps</a></p><p>各绘制结果的参数配置由于篇幅太长这儿就不一一列举了，如有自定义需要，请在当前文档页面打开控制台输出可以查看 <code>绘制按钮的默认参数</code> 和 <code>绘制结果的默认参数</code>。分别是 <code>actionOpts</code> 和 <code>cmpOpts</code> 属性。例如 <code>pointDrawingOpts</code> 参数对象结构与控制台输出 <code>绘制选项参数：</code> 中 <code>name</code> 为 <code>point</code> 项的 <code>cmpOpts</code> 结构相同。<code>pointActionOpts</code> 参数对象与控制台输出 <code>绘制选项参数：</code> 中 <code>name</code> 为 <code>point</code> 项的 <code>actionOpts</code> 结构相同。当然也可以在自己代码中参考这样输出来查看。</p></div><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>drawEvt</td><td>(drawParam, viewer)</td><td>绘制时触发。</td></tr><tr><td>activeEvt</td><td>(activeParam, viewer)</td><td>切换绘制 Action 时触发。</td></tr><tr><td>editorEvt</td><td>(editParam, viewer)</td><td>点击编辑按钮时触发。</td></tr><tr><td>mouseEvt</td><td>(mouseParam, viewer)</td><td>鼠标移进、移除绘制点时触发。</td></tr></tbody></table><h3 id=\"cha-cao\"><a class=\"header-anchor\" href=\"#cha-cao\">¶</a> 插槽</h3><table><thead><tr><th>插槽名</th><th>描述</th></tr></thead><tbody><tr><td>body</td><td>用于自定义绘制组件 UI。</td></tr></tbody></table>", 9);

function vc_drawingsvue_type_template_id_441638cc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_drawingsvue_type_template_id_441638cc_hoisted_1, [vc_drawingsvue_type_template_id_441638cc_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser["withCtx"])(() => [vc_drawingsvue_type_template_id_441638cc_hoisted_8]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/tools/vc-drawings.md?vue&type=template&id=441638cc

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/tools/vc-drawings.md?vue&type=script&lang=ts

/* harmony default export */ var vc_drawingsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createTextVNode: _createTextVNode,
        withCtx: _withCtx,
        createBlock: _createBlock,
        createElementVNode: _createElementVNode,
        createCommentVNode: _createCommentVNode
      } = vue_esm_browser;
      const _hoisted_1 = {
        class: "custom-drawings"
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("清除");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("重载");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("可编辑");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("地形");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("贴地");

      function render(_ctx, _cache) {
        const _component_vc_drawings = _resolveComponent("vc-drawings");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        const _component_vc_primitive_tileset = _resolveComponent("vc-primitive-tileset");

        const _component_vc_provider_imagery_tianditu = _resolveComponent("vc-provider-imagery-tianditu");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_provider_terrain_cesium = _resolveComponent("vc-provider-terrain-cesium");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_checkbox = _resolveComponent("el-checkbox");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_drawings, {
              ref: "drawingsRef",
              position: "bottom-left",
              mainFabOpts: _ctx.mainFabOpts,
              offset: [20, 80],
              editable: _ctx.editable,
              clampToGround: _ctx.clampToGround,
              onDrawEvt: _ctx.drawEvt,
              onActiveEvt: _ctx.activeEvt,
              onEditorEvt: _ctx.editorEvt,
              onMouseEvt: _ctx.mouseEvt,
              onReady: _ctx.drawingsReadyDefault
            }, null, 8, ["mainFabOpts", "editable", "clampToGround", "onDrawEvt", "onActiveEvt", "onEditorEvt", "onMouseEvt", "onReady"]), _createVNode(_component_vc_drawings, {
              ref: "drawingsCustomRef",
              position: "bottom-left",
              mainFabOpts: _ctx.mainFabOpts,
              offset: [0, 20],
              editable: _ctx.editable,
              clampToGround: _ctx.clampToGround,
              onReady: _ctx.drawingsReady,
              polylineDrawingOpts: _ctx.polylineDrawingOpts,
              rectangleDrawingOpts: _ctx.rectangleDrawingOpts,
              pinDrawingOpts: _ctx.pinDrawingOpts
            }, {
              body: _withCtx(() => [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_row, null, {
                default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.drawingActionInstances, (drawingActionInstance, index) => {
                  return _openBlock(), _createBlock(_component_el_button, {
                    key: index,
                    type: drawingActionInstance.isActive ? 'success' : 'primary',
                    round: "",
                    onClick: $event => _ctx.toggle(drawingActionInstance)
                  }, {
                    default: _withCtx(() => [_createTextVNode(_toDisplayString(drawingActionInstance.tip.replace('绘制', '')), 1)]),
                    _: 2
                  }, 1032, ["type", "onClick"]);
                }), 128)), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.clear
                }, {
                  default: _withCtx(() => [_hoisted_2]),
                  _: 1
                }, 8, ["onClick"])]),
                _: 1
              })])]),
              _: 1
            }, 8, ["mainFabOpts", "editable", "clampToGround", "onReady", "polylineDrawingOpts", "rectangleDrawingOpts", "pinDrawingOpts"]), _createVNode(_component_vc_primitive_tileset, {
              url: "https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json",
              onReadyPromise: _ctx.onTilesetReady
            }, null, 8, ["onReadyPromise"]), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_tianditu, {
                mapStyle: "img_c",
                maximumLevel: 17,
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            }), _ctx.addTerrain ? (_openBlock(), _createBlock(_component_vc_provider_terrain_cesium, {
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
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_hoisted_5]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_checkbox, {
              modelValue: _ctx.editable,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.editable = $event)
            }, {
              default: _withCtx(() => [_hoisted_6]),
              _: 1
            }, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
              modelValue: _ctx.addTerrain,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.addTerrain = $event)
            }, {
              default: _withCtx(() => [_hoisted_7]),
              _: 1
            }, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
              modelValue: _ctx.clampToGround,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.clampToGround = $event)
            }, {
              default: _withCtx(() => [_hoisted_8]),
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
            clampToGround: false,
            mainFabOpts: {
              direction: 'right'
            },
            polylineDrawingOpts: {
              loop: true
            },
            rectangleDrawingOpts: {
              regular: false
            },
            pinDrawingOpts: {
              billboardOpts: {
                image: 'https://zouyaoji.top/vue-cesium/images/grepin.png'
              },
              labelOpts: {
                text: '图标点',
                pixelOffset: [0, -60]
              }
            }
          };
        },

        methods: {
          drawingsReadyDefault({
            Cesium,
            viewer,
            cesiumObject
          }) {
            console.log('绘制选项参数：', cesiumObject);
          },

          clear() {
            this.$refs.drawingsCustomRef.clearAll();
          },

          drawingsReady({
            Cesium,
            viewer,
            cesiumObject
          }) {
            this.drawingActionInstances = cesiumObject;
          },

          toggle(drawingActionInstance) {
            this.$refs.drawingsCustomRef.toggleAction(drawingActionInstance.name);
          },

          onTilesetReady(tileset, viewer) {
            const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center);
            const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height);
            const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 5);
            const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
            tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
            viewer.zoomTo(tileset);
            viewer.scene.globe.depthTestAgainstTerrain = true;
            this.restoreCursorMove = 'auto';
            this.drawing = false;
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
            this.$refs.drawingsRef.unload();
          },

          load() {
            this.$refs.drawingsRef.load();
          },

          reload() {
            this.$refs.drawingsRef.reload();
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
// CONCATENATED MODULE: ./website/docs/zh-CN/tools/vc-drawings.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/tools/vc-drawings.md



vc_drawingsvue_type_script_lang_ts.render = vc_drawingsvue_type_template_id_441638cc_render

/* harmony default export */ var vc_drawings = __webpack_exports__["default"] = (vc_drawingsvue_type_script_lang_ts);

/***/ })

}]);