(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/tools/vc-drawings.md?vue&type=template&id=45806edc

const vc_drawingsvue_type_template_id_45806edc_hoisted_1 = {
  class: "content element-doc"
};

const vc_drawingsvue_type_template_id_45806edc_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcdrawings\"><a class=\"header-anchor\" href=\"#vcdrawings\">¶</a> VcDrawings</h2><p>Load the drawing tool components, which currently include point, polyline, and polygon drawing tools, and others will be added later.</p><p><strong>Note:</strong> Style files need to be imported: <code>import&#39;vue-cesium/lib/theme-default/index.css&#39;;</code></p><div class=\"tip\"><p>Tip: Version 3.0 has reorganized the drawing component into a single component, which is simple and supports custom styles.</p><p>The drawing interaction is also optimized. The overall drawing is left-click, right-click to cancel the last drawn point, and double-click to end the drawing.</p><p>ctrl + right click to cancel drawing.</p></div><h3 id=\"base-usage\"><a class=\"header-anchor\" href=\"#base-usage\">¶</a> Base usage</h3><p>Basic usage of drawing components.</p>", 6);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-drawings"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add drawing tools on the viewer.")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- Custom positioning and position offset -->\n    <vc-drawings\n      ref=\"drawingsRef\"\n      position=\"bottom-left\"\n      :mainFabOpts=\"drawingFabOptions1\"\n      :offset=\"[20, 80]\"\n      :editable=\"editable\"\n      :clampToGround=\"clampToGround\"\n      @drawEvt=\"drawEvt\"\n      @activeEvt=\"activeEvt\"\n      @editorEvt=\"editorEvt\"\n      @mouseEvt=\"mouseEvt\"\n    ></vc-drawings>\n    <!-- Customize UI through slot -->\n    <vc-drawings\n      ref=\"drawingsRef4\"\n      position=\"bottom-left\"\n      :mainFabOpts=\"drawingFabOptions1\"\n      :polylineDrawingOpts=\"polylineDrawingOpts2\"\n      :rectangleDrawingOpts=\"rectangleDrawingOpts2\"\n      :offset=\"[20, 20]\"\n      :editable=\"editable\"\n      :clampToGround=\"clampToGround\"\n      @ready=\"drawingsReady\"\n    >\n      <template #body>\n        <div class=\"custom-drawings\">\n          <el-row>\n            <el-button\n              v-for=\"(drawingOpts, index) in drawingsOpts\"\n              :key=\"index\"\n              :type=\"drawingOpts.isActive ? 'success' : 'primary'\"\n              round\n              @click=\"toggle(drawingOpts)\"\n              >{{drawingOpts.tip}}</el-button\n            >\n            <el-button type=\"danger\" round @click=\"clear\">Clear</el-button>\n          </el-row>\n        </div>\n      </template>\n    </vc-drawings>\n    <vc-primitive-tileset url=\"./SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json\" @readyPromise=\"onTilesetReady\"></vc-primitive-tileset>\n    <vc-layer-imagery>\n      <vc-provider-imagery-tianditu mapStyle=\"img_c\" :maximumLevel=\"17\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    <el-checkbox v-model=\"editable\">editable</el-checkbox>\n    <el-checkbox v-model=\"clampToGround\">clampToGround</el-checkbox>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        drawingsOpts: [],\n        editable: false,\n        clampToGround: false,\n        drawingFabOptions1: {\n          direction: 'right'\n        },\n        polylineDrawingOpts2: {\n          loop: true\n        },\n        rectangleDrawingOpts2: {\n          regular: false\n        }\n      }\n    },\n    methods: {\n      clear() {\n        this.$refs.drawingsRef4.clearAll()\n      },\n      drawingsReady({ Cesium, viewer, cesiumObject }) {\n        this.drawingsOpts = cesiumObject\n      },\n      toggle(drawingOpts) {\n        this.$refs.drawingsRef4.toggleAction(drawingOpts)\n      },\n      onTilesetReady(tileset, viewer) {\n        const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)\n        const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)\n        const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 5)\n        const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())\n        tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)\n        viewer.zoomTo(tileset)\n        viewer.scene.globe.depthTestAgainstTerrain = true\n      },\n      drawEvt(e, viewer) {\n        const restoreCursor = getComputedStyle(viewer.canvas).cursor\n        if (e.finished) {\n          if (e.type === 'move') {\n            viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove}`)\n          }\n          this.drawing = false\n        } else {\n          this.drawing = true\n          if (e.type === 'move') {\n            viewer.canvas.setAttribute('style', 'cursor: move')\n          }\n          if (e.type === 'new') {\n            viewer.canvas.setAttribute('style', 'cursor: crosshair')\n          }\n        }\n      },\n      activeEvt(e, viewer) {\n        console.log(e)\n        viewer.canvas.setAttribute('style', `cursor: ${e.isActive ? 'crosshair' : 'auto'}`)\n        if (!e.isActive) {\n          this.drawing = false\n          this.restoreCursorMove = 'auto'\n        }\n      },\n      editorEvt(e, viewer) {\n        if (e.type === 'move') {\n          viewer.canvas.setAttribute('style', 'cursor: move')\n          this.drawing = true\n        } else {\n          viewer.canvas.setAttribute('style', 'cursor: auto')\n        }\n      },\n      mouseEvt(e, viewer) {\n        const restoreCursor = getComputedStyle(viewer.canvas).cursor\n        if (!this.drawing) {\n          console.log(e)\n          if (e.type === 'onmouseover') {\n            this.restoreCursorMove = restoreCursor\n            viewer.canvas.setAttribute('style', 'cursor: pointer')\n          } else {\n            viewer.canvas.setAttribute('style', `cursor: ${this.restoreCursorMove || 'auto'}`)\n          }\n        }\n      },\n      unload() {\n        this.$refs.drawingsRef.unload()\n      },\n      load() {\n        this.$refs.drawingsRef.load()\n      },\n      reload() {\n        this.$refs.drawingsRef.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>&#39;top-right&#39;</code></td><td><code>optional</code> Specify the location of the drawing component.</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>Array</td><td><code>[0, 0]</code></td><td><code>optional</code> Specify the offset based on the position.</td><td></td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the drawn result is visible.</td><td></td></tr><tr><td>mode</td><td>Number</td><td><code>1</code></td><td><code>optional</code> Specify the interactive drawing mode, 0 means continuous drawing, and 1 means drawing ends once.</td><td></td></tr><tr><td>drawings</td><td>Array</td><td><code>[&#39;point&#39;, &#39;polyline&#39;, &#39;polygon&#39;, &#39;rectangle&#39;, &#39;circle&#39;]</code></td><td><code>optional</code> Specify the drawing instance to be loaded.</td><td></td></tr><tr><td>activeColor</td><td>String</td><td><code>&#39;positive&#39;</code></td><td><code>optional</code> Specify the color when the drawing instance is activated.</td><td></td></tr><tr><td>editable</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Specify whether the drawing result can be edited.</td><td></td></tr><tr><td>clampToGround</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Specify whether the drawing result object is attached to the ground or 3dtiles. Only line and area objects work.</td><td></td></tr><tr><td>mainFabOpts</td><td>Object</td><td></td><td><code>optional</code> Specify the style options of the floating action button of the drawing component.</td><td></td></tr><tr><td>pointActionOpts</td><td>Object</td><td>``</td><td><code>optional</code> Specify the style options of the poingt drawing action button.</td><td></td></tr><tr><td>pointDrawingOpts</td><td>Object</td><td></td><td><code>optional</code> Specify poingt drawing parameters.</td><td></td></tr><tr><td>polylineActionOpts</td><td>Object</td><td></td><td><code>optional</code> Specify the style options of the polyline drawing action button.</td><td></td></tr><tr><td>polylineDrawingOpts</td><td>Object</td><td></td><td><code>optional</code> Specify the polyline drawing parameters.</td><td></td></tr><tr><td>polygonActionOpts</td><td>Object</td><td></td><td><code>optional</code> Specify the style options of the polygon drawing action button.</td><td></td></tr><tr><td>polygonDrawingOpts</td><td>Object</td><td></td><td><code>optional</code> Specify the polygon drawing parameters.</td><td></td></tr><tr><td>clearActionOpts</td><td>Object</td><td></td><td><code>optional</code> Specify the style options of the clear action button.</td><td></td></tr></tbody></table><div class=\"tip\"><p>Tip: The drawing component is mainly composed of two parts: (1) the floating action button (Fab) that supports expansion and collapse; (2) the specific drawing action button(FabAction). Below are their default props:</p></div><div class=\"tipflex\"><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// ActionOpts general props</span>\n{\n  <span class=\"hljs-attr\">externalLabel</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">&#39;&#39;</span>,\n  <span class=\"hljs-attr\">labelPosition</span>: <span class=\"hljs-string\">&#39;right&#39;</span>,\n  <span class=\"hljs-attr\">hideLabel</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">disable</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">outline</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">push</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">unelevated</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;primary&#39;</span>,\n  <span class=\"hljs-attr\">glossy</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">square</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">500</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [\n      <span class=\"hljs-number\">0</span>,\n      <span class=\"hljs-number\">20</span>\n    ]\n  },\n  <span class=\"hljs-comment\">// The default icons are</span>\n  <span class=\"hljs-comment\">// vc-icons-drawing-point,</span>\n  <span class=\"hljs-comment\">// vc-icons-drawing-polyline,</span>\n  <span class=\"hljs-comment\">// vc-icons-drawing-polygon,</span>\n  <span class=\"hljs-comment\">// vc-icons-clear</span>\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-drawing-point&#39;</span>\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// The following properties are added to the common properties of ActionOpts:</span>\n{\n  <span class=\"hljs-attr\">direction</span>: <span class=\"hljs-string\">&#39;left&#39;</span>,\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-drawing-button&#39;</span>,\n  <span class=\"hljs-attr\">activeIcon</span>: <span class=\"hljs-string\">&#39;vc-icons-drawing-button&#39;</span>,\n  <span class=\"hljs-attr\">verticalActionsAlign</span>: <span class=\"hljs-string\">&#39;center&#39;</span>,\n  <span class=\"hljs-attr\">hideIcon</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">persistent</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">autoExpand</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">hideActionOnClick</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;info&#39;</span>\n}\n</code></pre></div><div class=\"tip\"><p>Tip: Each drawing button (FabAction) corresponds to the drawing parameters xxxDrawingOpts, used to customize drawing objects.</p><p>See: <a href=\"https://github.com/zouyaoji/vue-cesium/blob/dev/packages/drawings/src/defaultProps.ts\">defaultProps</a></p></div><div class=\"tipflex\"><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// pointDrawingOpts</span>\n{\n  <span class=\"hljs-attr\">show</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">drawtip</span>: {\n    <span class=\"hljs-attr\">show</span>: <span class=\"hljs-literal\">true</span>,\n    <span class=\"hljs-attr\">pixelOffset</span>: [\n      <span class=\"hljs-number\">32</span>,\n      <span class=\"hljs-number\">32</span>\n    ]\n  },\n  <span class=\"hljs-attr\">pointOpts</span>: {\n    <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;rgb(255,229,0)&#39;</span>,\n    <span class=\"hljs-attr\">pixelSize</span>: <span class=\"hljs-number\">8</span>,\n    <span class=\"hljs-attr\">outlineColor</span>: <span class=\"hljs-string\">&#39;black&#39;</span>,\n    <span class=\"hljs-attr\">outlineWidth</span>: <span class=\"hljs-number\">1</span>,\n    <span class=\"hljs-attr\">disableDepthTestDistance</span>: <span class=\"hljs-literal\">null</span>\n  },\n  <span class=\"hljs-attr\">editorOpts</span>: {\n    <span class=\"hljs-attr\">pixelOffset</span>: [\n      <span class=\"hljs-number\">4</span>,\n      -<span class=\"hljs-number\">4</span>\n    ],\n    <span class=\"hljs-attr\">move</span>: {\n      <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-move&#39;</span>,\n      <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n      <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1296db&#39;</span>,\n      <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n      <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">dense</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">tooltip</span>: {\n        <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n        <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n        <span class=\"hljs-attr\">offset</span>: [\n          <span class=\"hljs-number\">0</span>,\n          <span class=\"hljs-number\">20</span>\n        ]\n      }\n    },\n    <span class=\"hljs-attr\">remove</span>: {\n      <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-remove&#39;</span>,\n      <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n      <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1296db&#39;</span>,\n      <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n      <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">dense</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">tooltip</span>: {\n        <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n        <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n        <span class=\"hljs-attr\">offset</span>: [\n          <span class=\"hljs-number\">0</span>,\n          <span class=\"hljs-number\">20</span>\n        ]\n      }\n    }\n  }\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// polylineDrawingOpts</span>\n{\n  <span class=\"hljs-attr\">show</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">drawtip</span>: {\n    <span class=\"hljs-attr\">show</span>: <span class=\"hljs-literal\">true</span>,\n    <span class=\"hljs-attr\">pixelOffset</span>: [\n      <span class=\"hljs-number\">32</span>,\n      <span class=\"hljs-number\">32</span>\n    ]\n  },\n  <span class=\"hljs-attr\">pointOpts</span>: {\n    <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;rgb(255,229,0)&#39;</span>,\n    <span class=\"hljs-attr\">pixelSize</span>: <span class=\"hljs-number\">8</span>,\n    <span class=\"hljs-attr\">outlineColor</span>: <span class=\"hljs-string\">&#39;black&#39;</span>,\n    <span class=\"hljs-attr\">outlineWidth</span>: <span class=\"hljs-number\">1</span>,\n    <span class=\"hljs-attr\">disableDepthTestDistance</span>: <span class=\"hljs-literal\">null</span>\n  },\n  <span class=\"hljs-attr\">polylineOpts</span>: {\n    <span class=\"hljs-attr\">material</span>: {\n      <span class=\"hljs-attr\">fabric</span>: {\n        <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">&#39;Color&#39;</span>,\n        <span class=\"hljs-attr\">uniforms</span>: {\n          <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#51ff00&#39;</span>\n        }\n      }\n    },\n    <span class=\"hljs-attr\">depthFailMaterial</span>: {\n      <span class=\"hljs-attr\">fabric</span>: {\n        <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">&#39;Color&#39;</span>,\n        <span class=\"hljs-attr\">uniforms</span>: {\n          <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#51ff00&#39;</span>\n        }\n      }\n    },\n    <span class=\"hljs-attr\">width</span>: <span class=\"hljs-number\">2</span>,\n    <span class=\"hljs-attr\">arcType</span>: <span class=\"hljs-number\">0</span>\n  },\n  <span class=\"hljs-attr\">editorOpts</span>: {\n    <span class=\"hljs-attr\">pixelOffset</span>: [\n      <span class=\"hljs-number\">4</span>,\n      -<span class=\"hljs-number\">4</span>\n    ],\n    <span class=\"hljs-attr\">move</span>: {\n      <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-move&#39;</span>,\n      <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n      <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1296db&#39;</span>,\n      <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n      <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">dense</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">tooltip</span>: {\n        <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n        <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n        <span class=\"hljs-attr\">offset</span>: [\n          <span class=\"hljs-number\">0</span>,\n          <span class=\"hljs-number\">20</span>\n        ]\n      }\n    },\n    <span class=\"hljs-attr\">insert</span>: {\n      <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-insert&#39;</span>,\n      <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n      <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1296db&#39;</span>,\n      <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n      <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">dense</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">tooltip</span>: {\n        <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n        <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n        <span class=\"hljs-attr\">offset</span>: [\n          <span class=\"hljs-number\">0</span>,\n          <span class=\"hljs-number\">20</span>\n        ]\n      }\n    },\n    <span class=\"hljs-attr\">remove</span>: {\n      <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-remove&#39;</span>,\n      <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n      <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1296db&#39;</span>,\n      <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n      <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">dense</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">tooltip</span>: {\n        <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n        <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n        <span class=\"hljs-attr\">offset</span>: [\n          <span class=\"hljs-number\">0</span>,\n          <span class=\"hljs-number\">20</span>\n        ]\n      }\n    },\n    <span class=\"hljs-attr\">removeAll</span>: {\n      <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-delete&#39;</span>,\n      <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n      <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1296db&#39;</span>,\n      <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n      <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">dense</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">tooltip</span>: {\n        <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n        <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n        <span class=\"hljs-attr\">offset</span>: [\n          <span class=\"hljs-number\">0</span>,\n          <span class=\"hljs-number\">20</span>\n        ]\n      }\n    }\n  },\n  <span class=\"hljs-attr\">loop</span>: <span class=\"hljs-literal\">false</span>\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// polygonDrawingOpts</span>\n{\n  <span class=\"hljs-attr\">show</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">drawtip</span>: {\n    <span class=\"hljs-attr\">show</span>: <span class=\"hljs-literal\">true</span>,\n    <span class=\"hljs-attr\">pixelOffset</span>: [\n      <span class=\"hljs-number\">32</span>,\n      <span class=\"hljs-number\">32</span>\n    ]\n  },\n  <span class=\"hljs-attr\">pointOpts</span>: {\n    <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;rgb(255,229,0)&#39;</span>,\n    <span class=\"hljs-attr\">pixelSize</span>: <span class=\"hljs-number\">8</span>,\n    <span class=\"hljs-attr\">outlineColor</span>: <span class=\"hljs-string\">&#39;black&#39;</span>,\n    <span class=\"hljs-attr\">outlineWidth</span>: <span class=\"hljs-number\">1</span>,\n    <span class=\"hljs-attr\">disableDepthTestDistance</span>: <span class=\"hljs-literal\">null</span>\n  },\n  <span class=\"hljs-attr\">polylineOpts</span>: {\n    <span class=\"hljs-attr\">material</span>: {\n      <span class=\"hljs-attr\">fabric</span>: {\n        <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">&#39;Color&#39;</span>,\n        <span class=\"hljs-attr\">uniforms</span>: {\n          <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#51ff00&#39;</span>\n        }\n      }\n    },\n    <span class=\"hljs-attr\">depthFailMaterial</span>: {\n      <span class=\"hljs-attr\">fabric</span>: {\n        <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">&#39;Color&#39;</span>,\n        <span class=\"hljs-attr\">uniforms</span>: {\n          <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#51ff00&#39;</span>\n        }\n      }\n    },\n    <span class=\"hljs-attr\">width</span>: <span class=\"hljs-number\">2</span>,\n    <span class=\"hljs-attr\">arcType</span>: <span class=\"hljs-number\">0</span>\n  },\n  <span class=\"hljs-attr\">polygonOpts</span>: {\n    <span class=\"hljs-attr\">material</span>: {\n      <span class=\"hljs-attr\">fabric</span>: {\n        <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">&#39;Color&#39;</span>,\n        <span class=\"hljs-attr\">uniforms</span>: {\n          <span class=\"hljs-attr\">color</span>: [\n            <span class=\"hljs-number\">255</span>,\n            <span class=\"hljs-number\">165</span>,\n            <span class=\"hljs-number\">0</span>,\n            <span class=\"hljs-number\">125</span>\n          ]\n        }\n      }\n    },\n    <span class=\"hljs-attr\">depthFailMaterial</span>: {\n      <span class=\"hljs-attr\">fabric</span>: {\n        <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">&#39;Color&#39;</span>,\n        <span class=\"hljs-attr\">uniforms</span>: {\n          <span class=\"hljs-attr\">color</span>: [\n            <span class=\"hljs-number\">255</span>,\n            <span class=\"hljs-number\">165</span>,\n            <span class=\"hljs-number\">0</span>,\n            <span class=\"hljs-number\">125</span>\n          ]\n        }\n      }\n    },\n    <span class=\"hljs-attr\">perPositionHeight</span>: <span class=\"hljs-literal\">true</span>\n  },\n  <span class=\"hljs-attr\">editorOpts</span>: {\n    <span class=\"hljs-attr\">pixelOffset</span>: [\n      <span class=\"hljs-number\">4</span>,\n      -<span class=\"hljs-number\">4</span>\n    ],\n    <span class=\"hljs-attr\">move</span>: {\n      <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-move&#39;</span>,\n      <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n      <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1296db&#39;</span>,\n      <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n      <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">dense</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">tooltip</span>: {\n        <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n        <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n        <span class=\"hljs-attr\">offset</span>: [\n          <span class=\"hljs-number\">0</span>,\n          <span class=\"hljs-number\">20</span>\n        ]\n      }\n    },\n    <span class=\"hljs-attr\">insert</span>: {\n      <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-insert&#39;</span>,\n      <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n      <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1296db&#39;</span>,\n      <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n      <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">dense</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">tooltip</span>: {\n        <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n        <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n        <span class=\"hljs-attr\">offset</span>: [\n          <span class=\"hljs-number\">0</span>,\n          <span class=\"hljs-number\">20</span>\n        ]\n      }\n    },\n    <span class=\"hljs-attr\">remove</span>: {\n      <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-remove&#39;</span>,\n      <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n      <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1296db&#39;</span>,\n      <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n      <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">dense</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">tooltip</span>: {\n        <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n        <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n        <span class=\"hljs-attr\">offset</span>: [\n          <span class=\"hljs-number\">0</span>,\n          <span class=\"hljs-number\">20</span>\n        ]\n      }\n    },\n    <span class=\"hljs-attr\">removeAll</span>: {\n      <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-delete&#39;</span>,\n      <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n      <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1296db&#39;</span>,\n      <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n      <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n      <span class=\"hljs-attr\">dense</span>: <span class=\"hljs-literal\">true</span>,\n      <span class=\"hljs-attr\">tooltip</span>: {\n        <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n        <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n        <span class=\"hljs-attr\">offset</span>: [\n          <span class=\"hljs-number\">0</span>,\n          <span class=\"hljs-number\">20</span>\n        ]\n      }\n    }\n  },\n  <span class=\"hljs-attr\">loop</span>: <span class=\"hljs-literal\">true</span>\n}\n\n</code></pre></div><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>drawEvt</td><td>(drawParam, viewer)</td><td>Triggered when drawing.</td></tr><tr><td>activeEvt</td><td>(activeParam, viewer)</td><td>Triggered when the drawing action is switched.</td></tr><tr><td>editorEvt</td><td>(editParam, viewer)</td><td>Triggered when the edit button is clicked.</td></tr><tr><td>mouseEvt</td><td>(mouseParam, viewer)</td><td>Triggered when the mouse is mouse over or mouse out on the drawing point.</td></tr></tbody></table><h3 id=\"slots\"><a class=\"header-anchor\" href=\"#slots\">¶</a> Slots</h3><table><thead><tr><th>name</th><th>Description</th></tr></thead><tbody><tr><td>body</td><td>Used to customize the drawing component UI.</td></tr></tbody></table>", 10);

function vc_drawingsvue_type_template_id_45806edc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_drawingsvue_type_template_id_45806edc_hoisted_1, [vc_drawingsvue_type_template_id_45806edc_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/tools/vc-drawings.md?vue&type=template&id=45806edc

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/tools/vc-drawings.md?vue&type=script&lang=ts

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
        createElementVNode: _createElementVNode
      } = vue_esm_browser;
      const _hoisted_1 = {
        class: "custom-drawings"
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Clear");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Unload");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Reload");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("editable");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("clampToGround");

      function render(_ctx, _cache) {
        const _component_vc_drawings = _resolveComponent("vc-drawings");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        const _component_vc_primitive_tileset = _resolveComponent("vc-primitive-tileset");

        const _component_vc_provider_imagery_tianditu = _resolveComponent("vc-provider-imagery-tianditu");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

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
              mainFabOpts: _ctx.drawingFabOptions1,
              offset: [20, 80],
              editable: _ctx.editable,
              clampToGround: _ctx.clampToGround,
              onDrawEvt: _ctx.drawEvt,
              onActiveEvt: _ctx.activeEvt,
              onEditorEvt: _ctx.editorEvt,
              onMouseEvt: _ctx.mouseEvt
            }, null, 8, ["mainFabOpts", "editable", "clampToGround", "onDrawEvt", "onActiveEvt", "onEditorEvt", "onMouseEvt"]), _createVNode(_component_vc_drawings, {
              ref: "drawingsRef4",
              position: "bottom-left",
              mainFabOpts: _ctx.drawingFabOptions1,
              polylineDrawingOpts: _ctx.polylineDrawingOpts2,
              rectangleDrawingOpts: _ctx.rectangleDrawingOpts2,
              offset: [20, 20],
              editable: _ctx.editable,
              clampToGround: _ctx.clampToGround,
              onReady: _ctx.drawingsReady
            }, {
              body: _withCtx(() => [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_row, null, {
                default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.drawingsOpts, (drawingOpts, index) => {
                  return _openBlock(), _createBlock(_component_el_button, {
                    key: index,
                    type: drawingOpts.isActive ? 'success' : 'primary',
                    round: "",
                    onClick: $event => _ctx.toggle(drawingOpts)
                  }, {
                    default: _withCtx(() => [_createTextVNode(_toDisplayString(drawingOpts.tip), 1)]),
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
            }, 8, ["mainFabOpts", "polylineDrawingOpts", "rectangleDrawingOpts", "editable", "clampToGround", "onReady"]), _createVNode(_component_vc_primitive_tileset, {
              url: "./SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json",
              onReadyPromise: _ctx.onTilesetReady
            }, null, 8, ["onReadyPromise"]), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_tianditu, {
                mapStyle: "img_c",
                maximumLevel: 17,
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
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
              modelValue: _ctx.clampToGround,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.clampToGround = $event)
            }, {
              default: _withCtx(() => [_hoisted_7]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const democomponentExport = {
        data() {
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
          clear() {
            this.$refs.drawingsRef4.clearAll();
          },

          drawingsReady({
            Cesium,
            viewer,
            cesiumObject
          }) {
            this.drawingsOpts = cesiumObject;
          },

          toggle(drawingOpts) {
            this.$refs.drawingsRef4.toggleAction(drawingOpts);
          },

          onTilesetReady(tileset, viewer) {
            const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center);
            const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height);
            const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 5);
            const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
            tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
            viewer.zoomTo(tileset);
            viewer.scene.globe.depthTestAgainstTerrain = true;
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
// CONCATENATED MODULE: ./website/docs/en-US/tools/vc-drawings.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/tools/vc-drawings.md



vc_drawingsvue_type_script_lang_ts.render = vc_drawingsvue_type_template_id_45806edc_render

/* harmony default export */ var vc_drawings = __webpack_exports__["default"] = (vc_drawingsvue_type_script_lang_ts);

/***/ })

}]);