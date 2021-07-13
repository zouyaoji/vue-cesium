(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[178],{

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/tools/vc-drawings.md?vue&type=template&id=3c8eaf4e

var vc_drawingsvue_type_template_id_3c8eaf4e_hoisted_1 = {
  class: "content element-doc"
};

var vc_drawingsvue_type_template_id_3c8eaf4e_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcdrawings\"><a class=\"header-anchor\" href=\"#vcdrawings\">¶</a> VcDrawings</h2><p>加载绘制工具组件，目前包含点、线、面绘制工具，其他的后续再增加。</p><p><strong>注意：</strong> 需要引入样式文件: <code>import &#39;vue-cesium/lib/theme-default/index.css&#39;;</code></p><div class=\"tip\"><p>提示：3.0 版本已将绘制组件重构成一个组件，简约的同时支持自定义风格。</p><p>ctrl + 右键取消绘制。</p></div><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>绘制组件的基础用法。</p>", 6);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-drawings"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加绘制工具。")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- 修改定位 和 位置偏移 -->\n    <vc-drawings\n      ref=\"drawingsRef\"\n      position=\"bottom-left\"\n      :mainFabOpts=\"drawingFabOptions1\"\n      :offset=\"[20, 80]\"\n      :editable=\"editable\"\n      :clampToGround=\"clampToGround\"\n    ></vc-drawings>\n    <!-- 结合 slot 改变默认 UI -->\n    <vc-drawings\n      ref=\"drawingsRef4\"\n      position=\"bottom-left\"\n      :mainFabOpts=\"drawingFabOptions1\"\n      :offset=\"[20, 20]\"\n      :editable=\"editable\"\n      :clampToGround=\"clampToGround\"\n      @ready=\"drawingsReady\"\n      :polylineDrawingOpts=\"polylineDrawingOpts2\"\n      :rectangleDrawingOpts=\"rectangleDrawingOpts2\"\n    >\n      <template #body>\n        <div class=\"custom-drawings\">\n          <el-row>\n            <el-button\n              v-for=\"(drawingOpts, index) in drawingsOpts\"\n              :key=\"index\"\n              :type=\"drawingOpts.isActive ? 'success' : 'primary'\"\n              round\n              @click=\"toggle(drawingOpts)\"\n              >{{drawingOpts.tip}}</el-button\n            >\n            <el-button type=\"danger\" round @click=\"clear\">清除</el-button>\n          </el-row>\n        </div>\n      </template>\n    </vc-drawings>\n    <vc-primitive-tileset url=\"./SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json\" @readyPromise=\"onTilesetReady\"></vc-primitive-tileset>\n    <vc-layer-imagery>\n      <vc-provider-imagery-tianditu mapStyle=\"img_c\" :maximumLevel=\"17\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    <el-checkbox v-model=\"editable\">可编辑</el-checkbox>\n    <el-checkbox v-model=\"clampToGround\">贴地</el-checkbox>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        drawingsOpts: [],\n        editable: false,\n        clampToGround: false,\n        drawingFabOptions1: {\n          direction: 'right'\n        },\n        polylineDrawingOpts2: {\n          loop: true\n        },\n        rectangleDrawingOpts2: {\n          regular: false\n        }\n      }\n    },\n    methods: {\n      clear() {\n        this.$refs.drawingsRef4.clearAll()\n      },\n      drawingsReady({ Cesium, viewer, cesiumObject }) {\n        this.drawingsOpts = cesiumObject\n      },\n      toggle(drawingOpts) {\n        this.$refs.drawingsRef4.toggleAction(drawingOpts)\n      },\n      onTilesetReady(tileset, viewer) {\n        const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)\n        const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)\n        const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 5)\n        const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())\n        tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)\n        viewer.zoomTo(tileset)\n        viewer.scene.globe.depthTestAgainstTerrain = true\n      },\n      unload() {\n        this.$refs.drawingsRef.unload()\n      },\n      load() {\n        this.$refs.drawingsRef.load()\n      },\n      reload() {\n        this.$refs.drawingsRef.reload()\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>&#39;top-right&#39;</code></td><td><code>optional</code> 指定绘制组件的位置。</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定绘制组件基于位置的偏移量。</td><td></td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定绘制的结果是否可见。</td><td></td></tr><tr><td>drawings</td><td>Array</td><td><code>[&#39;point&#39;, &#39;polyline&#39;, &#39;polygon&#39;, &#39;rectangle&#39;, &#39;circle&#39;]</code></td><td><code>optional</code> 指定要加载的绘制实例。</td><td></td></tr><tr><td>activeColor</td><td>String</td><td><code>&#39;positive&#39;</code></td><td><code>optional</code> 指定绘制实例激活时的颜色。</td><td></td></tr><tr><td>editable</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定绘制结果对象是否可编辑。</td><td></td></tr><tr><td>clampToGround</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定绘制结果对象是否贴地或模型。仅线、面对象生效。</td><td></td></tr><tr><td>mainFabOpts</td><td>Object</td><td></td><td><code>optional</code> 指定绘制组件浮动按钮的样式选项。</td><td></td></tr><tr><td>pointActionOpts</td><td>Object</td><td>``</td><td><code>optional</code> 指定点绘制按钮的样式选项。</td><td></td></tr><tr><td>pointDrawingOpts</td><td>Object</td><td></td><td><code>optional</code> 指定点绘制参数。</td><td></td></tr><tr><td>polylineActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定先绘制按钮的样式选项</td><td></td></tr><tr><td>polylineDrawingOpts</td><td>Object</td><td></td><td><code>optional</code> 指定线绘制参数。</td><td></td></tr><tr><td>polygonActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定面绘制按钮的样式选项</td><td></td></tr><tr><td>polygonDrawingOpts</td><td>Object</td><td></td><td><code>optional</code> 指定面绘制参数。</td><td></td></tr><tr><td>clearActionOpts</td><td>Object</td><td></td><td><code>optional</code> 指定清除按钮的样式选项。</td><td></td></tr></tbody></table><div class=\"tip\"><p>提示：绘制组件主要由两部分构成：（1）支持展开和收缩的浮动按钮（Fab）；（2）具体绘制按钮（FabAction）。</p></div><div class=\"tipflex\"><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// ActionOpts general props</span>\n{\n  <span class=\"hljs-attr\">externalLabel</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&#39;&#39;</span>,\n  <span class=\"hljs-attr\">labelPosition</span>: <span class=\"hljs-string\">&#39;right&#39;</span>,\n  <span class=\"hljs-attr\">hideLabel</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">disable</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">outline</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">push</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">unelevated</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;primary&#39;</span>,\n  <span class=\"hljs-attr\">glossy</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">square</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">500</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [\n      <span class=\"hljs-number\">0</span>,\n      <span class=\"hljs-number\">20</span>\n    ]\n  },\n  <span class=\"hljs-comment\">// The default icons are</span>\n  <span class=\"hljs-comment\">// vc-icons-drawing-point,</span>\n  <span class=\"hljs-comment\">// vc-icons-drawing-polyline,</span>\n  <span class=\"hljs-comment\">// vc-icons-drawing-polygon,</span>\n  <span class=\"hljs-comment\">// vc-icons-clear</span>\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-drawing-point&#39;</span>\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// The following properties are added to the common properties of ActionOpts:</span>\n{\n  <span class=\"hljs-attr\">direction</span>: <span class=\"hljs-string\">&#39;left&#39;</span>,\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-drawing-button&#39;</span>,\n  <span class=\"hljs-attr\">activeIcon</span>: <span class=\"hljs-string\">&#39;vc-icons-drawing-button&#39;</span>,\n  <span class=\"hljs-attr\">verticalActionsAlign</span>: <span class=\"hljs-string\">&#39;center&#39;</span>,\n  <span class=\"hljs-attr\">hideIcon</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">persistent</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">autoExpand</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">hideActionOnClick</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;info&#39;</span>\n}\n</code></pre></div><div class=\"tip\"><p>提示：每个绘制按钮（FabAction）对应有属性 xxxDrawingOpts，用于自定义绘制对象。</p><p>详见：<a href=\"https://github.com/zouyaoji/vue-cesium/blob/dev/packages/drawings/src/defaultProps.ts\">defaultProps</a></p></div><div class=\"tipflex\"><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// pointDrawingOpts</span>\n{\n  <span class=\"hljs-attr\">show</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">drawtip</span>: {\n    <span class=\"hljs-attr\">show</span>: <span class=\"hljs-literal\">true</span>,\n    <span class=\"hljs-attr\">pixelOffset</span>: [\n      <span class=\"hljs-number\">32</span>,\n      <span class=\"hljs-number\">32</span>\n    ]\n  },\n  <span class=\"hljs-attr\">pointOpts</span>: {\n    <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;rgb(255,229,0)&#39;</span>,\n    <span class=\"hljs-attr\">pixelSize</span>: <span class=\"hljs-number\">8</span>,\n    <span class=\"hljs-attr\">outlineColor</span>: <span class=\"hljs-string\">&#39;black&#39;</span>,\n    <span class=\"hljs-attr\">outlineWidth</span>: <span class=\"hljs-number\">1</span>,\n    <span class=\"hljs-attr\">disableDepthTestDistance</span>: <span class=\"hljs-literal\">null</span>\n  },\n  <span class=\"hljs-attr\">editorOpts</span>: {\n    <span class=\"hljs-attr\">pixelOffset</span>: [\n      <span class=\"hljs-number\">4</span>,\n      -<span class=\"hljs-number\">4</span>\n    ],\n    <span class=\"hljs-attr\">move</span>: {\n      <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-move&#39;</span>,\n      <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n      <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1296db&#39;</span>,\n      <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n      <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">dense</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">tooltip</span>: {\n        <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n        <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n        <span class=\"hljs-attr\">offset</span>: [\n          <span class=\"hljs-number\">0</span>,\n          <span class=\"hljs-number\">20</span>\n        ]\n      }\n    },\n    <span class=\"hljs-attr\">remove</span>: {\n      <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-remove&#39;</span>,\n      <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n      <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1296db&#39;</span>,\n      <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n      <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">dense</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">tooltip</span>: {\n        <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n        <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n        <span class=\"hljs-attr\">offset</span>: [\n          <span class=\"hljs-number\">0</span>,\n          <span class=\"hljs-number\">20</span>\n        ]\n      }\n    }\n  }\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// polylineDrawingOpts</span>\n{\n  <span class=\"hljs-attr\">show</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">drawtip</span>: {\n    <span class=\"hljs-attr\">show</span>: <span class=\"hljs-literal\">true</span>,\n    <span class=\"hljs-attr\">pixelOffset</span>: [\n      <span class=\"hljs-number\">32</span>,\n      <span class=\"hljs-number\">32</span>\n    ]\n  },\n  <span class=\"hljs-attr\">pointOpts</span>: {\n    <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;rgb(255,229,0)&#39;</span>,\n    <span class=\"hljs-attr\">pixelSize</span>: <span class=\"hljs-number\">8</span>,\n    <span class=\"hljs-attr\">outlineColor</span>: <span class=\"hljs-string\">&#39;black&#39;</span>,\n    <span class=\"hljs-attr\">outlineWidth</span>: <span class=\"hljs-number\">1</span>,\n    <span class=\"hljs-attr\">disableDepthTestDistance</span>: <span class=\"hljs-literal\">null</span>\n  },\n  <span class=\"hljs-attr\">polylineOpts</span>: {\n    <span class=\"hljs-attr\">material</span>: {\n      <span class=\"hljs-attr\">fabric</span>: {\n        <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">&#39;Color&#39;</span>,\n        <span class=\"hljs-attr\">uniforms</span>: {\n          <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#51ff00&#39;</span>\n        }\n      }\n    },\n    <span class=\"hljs-attr\">depthFailMaterial</span>: {\n      <span class=\"hljs-attr\">fabric</span>: {\n        <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">&#39;Color&#39;</span>,\n        <span class=\"hljs-attr\">uniforms</span>: {\n          <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#51ff00&#39;</span>\n        }\n      }\n    },\n    <span class=\"hljs-attr\">width</span>: <span class=\"hljs-number\">2</span>,\n    <span class=\"hljs-attr\">arcType</span>: <span class=\"hljs-number\">0</span>\n  },\n  <span class=\"hljs-attr\">editorOpts</span>: {\n    <span class=\"hljs-attr\">pixelOffset</span>: [\n      <span class=\"hljs-number\">4</span>,\n      -<span class=\"hljs-number\">4</span>\n    ],\n    <span class=\"hljs-attr\">move</span>: {\n      <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-move&#39;</span>,\n      <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n      <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1296db&#39;</span>,\n      <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n      <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">dense</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">tooltip</span>: {\n        <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n        <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n        <span class=\"hljs-attr\">offset</span>: [\n          <span class=\"hljs-number\">0</span>,\n          <span class=\"hljs-number\">20</span>\n        ]\n      }\n    },\n    <span class=\"hljs-attr\">insert</span>: {\n      <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-insert&#39;</span>,\n      <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n      <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1296db&#39;</span>,\n      <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n      <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">dense</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">tooltip</span>: {\n        <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n        <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n        <span class=\"hljs-attr\">offset</span>: [\n          <span class=\"hljs-number\">0</span>,\n          <span class=\"hljs-number\">20</span>\n        ]\n      }\n    },\n    <span class=\"hljs-attr\">remove</span>: {\n      <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-remove&#39;</span>,\n      <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n      <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1296db&#39;</span>,\n      <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n      <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">dense</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">tooltip</span>: {\n        <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n        <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n        <span class=\"hljs-attr\">offset</span>: [\n          <span class=\"hljs-number\">0</span>,\n          <span class=\"hljs-number\">20</span>\n        ]\n      }\n    },\n    <span class=\"hljs-attr\">removeAll</span>: {\n      <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-delete&#39;</span>,\n      <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n      <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1296db&#39;</span>,\n      <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n      <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">dense</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">tooltip</span>: {\n        <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n        <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n        <span class=\"hljs-attr\">offset</span>: [\n          <span class=\"hljs-number\">0</span>,\n          <span class=\"hljs-number\">20</span>\n        ]\n      }\n    }\n  },\n  <span class=\"hljs-attr\">loop</span>: <span class=\"hljs-literal\">false</span>\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// polygonDrawingOpts</span>\n{\n  <span class=\"hljs-attr\">show</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">drawtip</span>: {\n    <span class=\"hljs-attr\">show</span>: <span class=\"hljs-literal\">true</span>,\n    <span class=\"hljs-attr\">pixelOffset</span>: [\n      <span class=\"hljs-number\">32</span>,\n      <span class=\"hljs-number\">32</span>\n    ]\n  },\n  <span class=\"hljs-attr\">pointOpts</span>: {\n    <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;rgb(255,229,0)&#39;</span>,\n    <span class=\"hljs-attr\">pixelSize</span>: <span class=\"hljs-number\">8</span>,\n    <span class=\"hljs-attr\">outlineColor</span>: <span class=\"hljs-string\">&#39;black&#39;</span>,\n    <span class=\"hljs-attr\">outlineWidth</span>: <span class=\"hljs-number\">1</span>,\n    <span class=\"hljs-attr\">disableDepthTestDistance</span>: <span class=\"hljs-literal\">null</span>\n  },\n  <span class=\"hljs-attr\">polylineOpts</span>: {\n    <span class=\"hljs-attr\">material</span>: {\n      <span class=\"hljs-attr\">fabric</span>: {\n        <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">&#39;Color&#39;</span>,\n        <span class=\"hljs-attr\">uniforms</span>: {\n          <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#51ff00&#39;</span>\n        }\n      }\n    },\n    <span class=\"hljs-attr\">depthFailMaterial</span>: {\n      <span class=\"hljs-attr\">fabric</span>: {\n        <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">&#39;Color&#39;</span>,\n        <span class=\"hljs-attr\">uniforms</span>: {\n          <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#51ff00&#39;</span>\n        }\n      }\n    },\n    <span class=\"hljs-attr\">width</span>: <span class=\"hljs-number\">2</span>,\n    <span class=\"hljs-attr\">arcType</span>: <span class=\"hljs-number\">0</span>\n  },\n  <span class=\"hljs-attr\">polygonOpts</span>: {\n    <span class=\"hljs-attr\">material</span>: {\n      <span class=\"hljs-attr\">fabric</span>: {\n        <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">&#39;Color&#39;</span>,\n        <span class=\"hljs-attr\">uniforms</span>: {\n          <span class=\"hljs-attr\">color</span>: [\n            <span class=\"hljs-number\">255</span>,\n            <span class=\"hljs-number\">165</span>,\n            <span class=\"hljs-number\">0</span>,\n            <span class=\"hljs-number\">125</span>\n          ]\n        }\n      }\n    },\n    <span class=\"hljs-attr\">depthFailMaterial</span>: {\n      <span class=\"hljs-attr\">fabric</span>: {\n        <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">&#39;Color&#39;</span>,\n        <span class=\"hljs-attr\">uniforms</span>: {\n          <span class=\"hljs-attr\">color</span>: [\n            <span class=\"hljs-number\">255</span>,\n            <span class=\"hljs-number\">165</span>,\n            <span class=\"hljs-number\">0</span>,\n            <span class=\"hljs-number\">125</span>\n          ]\n        }\n      }\n    },\n    <span class=\"hljs-attr\">perPositionHeight</span>: <span class=\"hljs-literal\">true</span>\n  },\n  <span class=\"hljs-attr\">editorOpts</span>: {\n    <span class=\"hljs-attr\">pixelOffset</span>: [\n      <span class=\"hljs-number\">4</span>,\n      -<span class=\"hljs-number\">4</span>\n    ],\n    <span class=\"hljs-attr\">move</span>: {\n      <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-move&#39;</span>,\n      <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n      <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1296db&#39;</span>,\n      <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n      <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">dense</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">tooltip</span>: {\n        <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n        <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n        <span class=\"hljs-attr\">offset</span>: [\n          <span class=\"hljs-number\">0</span>,\n          <span class=\"hljs-number\">20</span>\n        ]\n      }\n    },\n    <span class=\"hljs-attr\">insert</span>: {\n      <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-insert&#39;</span>,\n      <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n      <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1296db&#39;</span>,\n      <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n      <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">dense</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">tooltip</span>: {\n        <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n        <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n        <span class=\"hljs-attr\">offset</span>: [\n          <span class=\"hljs-number\">0</span>,\n          <span class=\"hljs-number\">20</span>\n        ]\n      }\n    },\n    <span class=\"hljs-attr\">remove</span>: {\n      <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-remove&#39;</span>,\n      <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n      <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1296db&#39;</span>,\n      <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n      <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">dense</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">tooltip</span>: {\n        <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n        <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n        <span class=\"hljs-attr\">offset</span>: [\n          <span class=\"hljs-number\">0</span>,\n          <span class=\"hljs-number\">20</span>\n        ]\n      }\n    },\n    <span class=\"hljs-attr\">removeAll</span>: {\n      <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-delete&#39;</span>,\n      <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n      <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1296db&#39;</span>,\n      <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n      <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">dense</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">tooltip</span>: {\n        <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n        <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n        <span class=\"hljs-attr\">offset</span>: [\n          <span class=\"hljs-number\">0</span>,\n          <span class=\"hljs-number\">20</span>\n        ]\n      }\n    }\n  },\n  <span class=\"hljs-attr\">loop</span>: <span class=\"hljs-literal\">true</span>\n}\n</code></pre></div><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>drawEvt</td><td></td><td>绘制时触发。</td></tr></tbody></table><h3 id=\"cha-cao\"><a class=\"header-anchor\" href=\"#cha-cao\">¶</a> 插槽</h3><table><thead><tr><th>插槽名</th><th>描述</th></tr></thead><tbody><tr><td>body</td><td>用于自定义绘制组件 UI。</td></tr></tbody></table>", 10);

function vc_drawingsvue_type_template_id_3c8eaf4e_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_drawingsvue_type_template_id_3c8eaf4e_hoisted_1, [vc_drawingsvue_type_template_id_3c8eaf4e_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/tools/vc-drawings.md?vue&type=template&id=3c8eaf4e

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/tools/vc-drawings.md?vue&type=script&lang=ts


/* harmony default export */ var vc_drawingsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _renderList = vue_esm_browser["M" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */],
          _toDisplayString = vue_esm_browser["S" /* toDisplayString */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */];
      var _hoisted_1 = {
        class: "custom-drawings"
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("清除");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("销毁");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("加载");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("重载");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("可编辑");

      var _hoisted_7 = /*#__PURE__*/_createTextVNode("贴地");

      function render(_ctx, _cache) {
        var _component_vc_drawings = _resolveComponent("vc-drawings");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_row = _resolveComponent("el-row");

        var _component_vc_primitive_tileset = _resolveComponent("vc-primitive-tileset");

        var _component_vc_provider_imagery_tianditu = _resolveComponent("vc-provider-imagery-tianditu");

        var _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_checkbox = _resolveComponent("el-checkbox");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_drawings, {
                  ref: "drawingsRef",
                  position: "bottom-left",
                  mainFabOpts: _ctx.drawingFabOptions1,
                  offset: [20, 80],
                  editable: _ctx.editable,
                  clampToGround: _ctx.clampToGround
                }, null, 8, ["mainFabOpts", "editable", "clampToGround"]), _createVNode(_component_vc_drawings, {
                  ref: "drawingsRef4",
                  position: "bottom-left",
                  mainFabOpts: _ctx.drawingFabOptions1,
                  offset: [20, 20],
                  editable: _ctx.editable,
                  clampToGround: _ctx.clampToGround,
                  onReady: _ctx.drawingsReady,
                  polylineDrawingOpts: _ctx.polylineDrawingOpts2,
                  rectangleDrawingOpts: _ctx.rectangleDrawingOpts2
                }, {
                  body: _withCtx(function () {
                    return [_createVNode("div", _hoisted_1, [_createVNode(_component_el_row, null, {
                      default: _withCtx(function () {
                        return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.drawingsOpts, function (drawingOpts, index) {
                          return _openBlock(), _createBlock(_component_el_button, {
                            key: index,
                            type: drawingOpts.isActive ? 'success' : 'primary',
                            round: "",
                            onClick: function onClick($event) {
                              return _ctx.toggle(drawingOpts);
                            }
                          }, {
                            default: _withCtx(function () {
                              return [_createTextVNode(_toDisplayString(drawingOpts.tip), 1)];
                            }),
                            _: 2
                          }, 1032, ["type", "onClick"]);
                        }), 128)), _createVNode(_component_el_button, {
                          type: "danger",
                          round: "",
                          onClick: _ctx.clear
                        }, {
                          default: _withCtx(function () {
                            return [_hoisted_2];
                          }),
                          _: 1
                        }, 8, ["onClick"])];
                      }),
                      _: 1
                    })])];
                  }),
                  _: 1
                }, 8, ["mainFabOpts", "editable", "clampToGround", "onReady", "polylineDrawingOpts", "rectangleDrawingOpts"]), _createVNode(_component_vc_primitive_tileset, {
                  url: "./SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json",
                  onReadyPromise: _ctx.onTilesetReady
                }, null, 8, ["onReadyPromise"]), _createVNode(_component_vc_layer_imagery, null, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_tianditu, {
                      mapStyle: "img_c",
                      maximumLevel: 17,
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
                }, 8, ["onClick"]), _createVNode(_component_el_checkbox, {
                  modelValue: _ctx.editable,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.editable = $event;
                  })
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_6];
                  }),
                  _: 1
                }, 8, ["modelValue"]), _createVNode(_component_el_checkbox, {
                  modelValue: _ctx.clampToGround,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                    return _ctx.clampToGround = $event;
                  })
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_7];
                  }),
                  _: 1
                }, 8, ["modelValue"])];
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
            drawingsOpts: [],
            editable: false,
            clampToGround: false,
            drawingFabOptions1: {
              direction: 'right'
            },
            polylineDrawingOpts2: {
              loop: true
            },
            rectangleDrawingOpts2: {
              regular: false
            }
          };
        },
        methods: {
          clear: function clear() {
            this.$refs.drawingsRef4.clearAll();
          },
          drawingsReady: function drawingsReady(_ref) {
            var Cesium = _ref.Cesium,
                viewer = _ref.viewer,
                cesiumObject = _ref.cesiumObject;
            this.drawingsOpts = cesiumObject;
          },
          toggle: function toggle(drawingOpts) {
            this.$refs.drawingsRef4.toggleAction(drawingOpts);
          },
          onTilesetReady: function onTilesetReady(tileset, viewer) {
            var cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center);
            var surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height);
            var offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 5);
            var translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
            tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
            viewer.zoomTo(tileset);
            viewer.scene.globe.depthTestAgainstTerrain = true;
          },
          unload: function unload() {
            this.$refs.drawingsRef.unload();
          },
          load: function load() {
            this.$refs.drawingsRef.load();
          },
          reload: function reload() {
            this.$refs.drawingsRef.reload();
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/tools/vc-drawings.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/tools/vc-drawings.md



vc_drawingsvue_type_script_lang_ts.render = vc_drawingsvue_type_template_id_3c8eaf4e_render

/* harmony default export */ var vc_drawings = __webpack_exports__["default"] = (vc_drawingsvue_type_script_lang_ts);

/***/ })

}]);