(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[169],{

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/controls/vc-navigation.md?vue&type=template&id=b147ce50

const vc_navigationvue_type_template_id_b147ce50_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_navigationvue_type_template_id_b147ce50_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcNavigation ");

const vc_navigationvue_type_template_id_b147ce50_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>导航组件，包括罗盘、缩放、其他悬浮按钮，位置和距离比例尺工具栏控件。由 <code>vc-compass</code>、<code>vc-zoom-control</code>、<code>vc-print</code>、<code>vc-mylocation</code>、<code>vc-status-bar</code>、<code>vc-distance-legend</code> 组合而成。</p><p><strong>注意：</strong> 需要引入样式文件: <code>import &#39;vue-cesium/dist/index.css&#39;;</code></p>", 2);

const _hoisted_5 = {
  class: "tip"
};

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("提示：3.0 版本对导航组件进行了重构，现在是一个集合组件，现在支持自定义风格，包括图标、大小、颜色位置等。如需高度定制，可分别参考各子组件的例子。自带的图标用的是 Unicode 方式，不支持多色，需要支持多色请参考阿里云 iconfont 介绍的使用 Symbol 的方法：");

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("传送门");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "导航组件的基础用法。", -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("将 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-navigation"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签作为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的子组件挂载即可。")])], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer sceneModePicker>\n    <vc-navigation ref=\"navigation\" :offset=\"[35, 35]\"></vc-navigation>\n    <!-- 自定义风格 -->\n    <vc-navigation\n      :position=\"position\"\n      :offset=\"offset\"\n      :compass-opts=\"compassOpts\"\n      :zoom-opts=\"zoomOpts\"\n      :location-opts=\"locationOpts\"\n      :other-opts=\"otherOpts\"\n      @compass-evt=\"onNavigationEvt\"\n      @zoom-evt=\"onNavigationEvt\"\n      @print-evt=\"onNavigationEvt\"\n      @location-evt=\"onNavigationEvt\"\n      @status-bar-evt=\"onNavigationEvt\"\n      @distance-legend-evt=\"onNavigationEvt\"\n    >\n    </vc-navigation>\n    <vc-layer-imagery :sort-order=\"20\">\n      <vc-imagery-provider-tianditu map-style=\"cva_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n    <vc-layer-imagery :sort-order=\"10\">\n      <vc-imagery-provider-tianditu map-style=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\" ref=\"provider\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n<script>\n  export default {\n    data() {\n      return {\n        position: 'top-left',\n        offset: [10, 80],\n        compassOpts: {\n          enableCompassOuterRing: true,\n          outerOptions: {\n            icon: 'svguse:#vc-icons-compass-outer', // svg 加载方式\n            size: '120px'\n          },\n          innerOptions: {\n            icon: 'fa fa-compass',\n            size: '24px',\n            color: '#3f4854',\n            background: '#fff',\n            tooltip: {\n              tip: 'asd'\n            }\n          },\n          markerOptions: {\n            size: '120px',\n            color: 'yellow'\n          }\n        },\n        zoomOpts: {\n          background: '#1976D2',\n          direction: 'horizontal'\n        },\n        locationOpts: {\n          color: 'red',\n          // 使用高德api定位\n          amap: {\n            key: '42d22e6ed83f077bc28b7864718726de',\n            version: '2.0',\n            options: {\n              timeout: 5000,\n              noGeoLocation: 3,\n              needAddress: true,\n              extensions: 'all'\n            },\n            transformToWGS84: true\n          }\n        },\n        otherOpts: false\n        // otherOpts: {\n        //   position: 'bottom-right',\n        //   offset: [2, 3],\n        //   statusBarOpts:  // 与 vc-status-bar 保持一致\n        //   distancelegendOpts: // 与 vc-distance-legend 保持一致\n        // }\n      }\n    },\n    mounted() {\n      // 仅调试使用 打开浏览器控制台 用 vm 获取data中的属性修改。\n      // 如 vm.offset = [0, 0]  或 vm.offset[0] = 100\n      // 甚至加一个初始化未给的属性都可以\n      // vm.zoomOpts.zoomOutOptions = {size: '40px'}\n      window.vm = this\n    },\n    methods: {\n      load() {\n        this.$refs.navigation.load()\n      },\n      reload() {\n        this.$refs.navigation.reload()\n      },\n      unload() {\n        this.$refs.navigation.unload()\n      },\n      onNavigationEvt(e) {\n        console.log(e)\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("扩展用法 ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "按需定制导航组件。", -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "按需自定义各导航组件")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-compass\n      position=\"left\"\n      :outer-options=\"{icon: 'svguse:#vc-icons-compass-outer', size: '250px'}\"\n      :inner-options=\"{icon: 'fa fa-compass', size: '60px', background: 'transparent', color: '#009688'}\"\n    ></vc-compass>\n    <vc-compass position=\"top\" :outer-options=\"{icon: 'svguse:#vc-icons-qq'}\"></vc-compass>\n    <vc-compass\n      position=\"top-right\"\n      :outer-options=\"{icon: 'fa fa-circle-o-notch'}\"\n      :inner-options=\"{icon: 'fa fa-circle', background: 'transparent'}\"\n    ></vc-compass>\n    <vc-compass position=\"right\" :enable-compass-outer-ring=\"false\"></vc-compass>\n    <vc-zoom-control\n      position=\"bottom\"\n      direction=\"horizontal\"\n      :offset=\"[0, 30]\"\n      :zoom-reset-options=\"{size: '48px', color: '#21BA45'}\"\n    ></vc-zoom-control>\n    <vc-zoom-control position=\"bottom\" :enable-reset-button=\"false\" border-radius=\"0\" :offset=\"[0, 120]\"></vc-zoom-control>\n    <vc-print position=\"bottom-right\" download-automatically :color=\"color\" :background=\"background\"></vc-print>\n    <vc-print\n      position=\"bottom-right\"\n      :offset=\"[40, 20]\"\n      :show-printView=\"false\"\n      print-automatically\n      size=\"28px\"\n      :round=\"false\"\n      label=\"打印分享\"\n      background=\"#31CCEC\"\n      icon=\"fa fa-print\"\n    ></vc-print>\n    <!-- 浏览器定位 -->\n    <vc-my-location position=\"top-left\" color=\"#C10015\"></vc-my-location>\n    <!-- 高德 API 定位 -->\n    <vc-my-location\n      color=\"#9C27B0\"\n      :amap=\"{key: '42d22e6ed83f077bc28b7864718726de',version: '2.0',options: {timeout: 5000,noGeoLocation: 3,needAddress: true,extensions: 'all'},transformToWGS84: true}\"\n      position=\"top-left\"\n      :offset=\"[0, 60]\"\n      label=\"定位\"\n      stack\n      :round=\"false\"\n      background=\"#F2C037\"\n    ></vc-my-location>\n    <!-- 自定义 API 定位 -->\n    <vc-my-location position=\"top-left\" :offset=\"[60, 0]\" :custom-a-p-i=\"() => ({lng: 108, lat: 32})\"></vc-my-location>\n    <vc-status-bar position=\"bottom\"></vc-status-bar>\n    <vc-status-bar position=\"top-left\" :offset=\"[120, 3]\" :show-mouse-info=\"false\" :show-performance-info=\"false\"></vc-status-bar>\n    <vc-distance-legend position=\"bottom-left\" :offset=\"[5, 70]\" background=\"#26A69A\" bar-background=\"#F2C037\" :width=\"80\"></vc-distance-legend>\n    <vc-distance-legend position=\"bottom-left\" :offset=\"[5, 35]\"></vc-distance-legend>\n  </vc-viewer>\n</el-row>\n<script>\n  export default {\n    data() {\n      return {\n        color: 'red',\n        background: 'yellow'\n      }\n    },\n    mounted() {\n      window.vm = this\n    }\n  }\n</script>\n")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcNavigation 属性 ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>string</td><td><code>&#39;top-right&#39;</code></td><td><code>optional</code> 指定导航组件位置。</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>[number, number]</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定导航组件基于位置的偏移量。</td><td></td></tr><tr><td>compassOpts</td><td>VcCompassProps|false</td><td>与 <code>VcCompass</code> 保持一致</td><td><code>optional</code> 指定罗盘控件参数，false 即不显示。</td><td></td></tr><tr><td>zoomOpts</td><td>VcZoomControlProps|false</td><td>与 <code>VcZoomControl</code> 保持一致</td><td><code>optional</code> 指定缩放控件参数，false 即不显示。</td><td></td></tr><tr><td>printOpts</td><td>VcPrintProps|false</td><td>与 <code>VcPrint</code> 保持一致</td><td><code>optional</code> 指定打印控件参数，false 即不显示。</td><td></td></tr><tr><td>locationOpts</td><td>VcMyLocationProps|false</td><td>与 <code>VcMyLocation</code> 保持一致</td><td><code>optional</code> 指定定位控件参数，false 即不显示。</td><td></td></tr><tr><td>otherOpts</td><td>VcNavigationOtherOpts|false</td><td></td><td><code>optional</code> 指定其他控件（位置栏和距离比例尺栏，视为一个整体）参数，false 即不显示。</td><td></td></tr></tbody></table><div class=\"tip\"><p>提示：其他控件（位置栏和距离比例尺栏，视为一个整体），位置没受 VcNavigation 控制。</p></div>", 2);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcNavigation 事件 ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>组件加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>组件加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>组件销毁时触发。</td></tr><tr><td>compassEvt</td><td>(evt: VcCompassEvt)</td><td>操作罗盘控件时触发。</td></tr><tr><td>zoomEvt</td><td>(evt: VcZoomEvt)</td><td>操作缩放控件时触发。</td></tr><tr><td>locationEvt</td><td>(evt: VcLocationEvt)</td><td>操作定位控件时触发。</td></tr><tr><td>printEvt</td><td>(evt: VcPrintEvt)</td><td>操作打印控件时触发。</td></tr><tr><td>statusBarEvt</td><td>(evt: VcStatusBarEvt)</td><td>状态控件相关参数改变时触发。</td></tr><tr><td>distanceLegendEvt</td><td>(evt: VcDistanceLegendEvt)</td><td>距离比例尺改变时触发。</td></tr></tbody></table>", 1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcNavigation 方法 ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动加载组件。</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动重新加载组件。</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>手动卸载组件。</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>获取标志该组件是否创建成功的 Promise 对象。</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>获取该组件加载的 Cesium 对象。</td></tr></tbody></table>", 1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcNavigation 插槽 ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "插槽名"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "描述"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "子组件")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "用于挂载 vc-navigation 子组件。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-compass/vc-zoom-control/vc-print/vc-my-location/vc-location-bar/vc-distance-legend")])])], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCompass ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "罗盘组件。", -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCompass 属性 ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>string</td><td><code>&#39;top-right&#39;</code></td><td><code>optional</code> 指定罗盘组件位置。</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>[number, number]</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定罗盘基于位置的偏移量。</td><td></td></tr><tr><td>enableCompassOuterRing</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定罗盘外环是否可以操作。</td><td></td></tr><tr><td>duration</td><td>number</td><td><code>1.5</code></td><td><code>optional</code> 指定双击罗盘恢复俯仰角飞行时间，单位秒。</td><td></td></tr><tr><td>outerOptions</td><td>VcBtnTooltipProps</td><td></td><td><code>optional</code> 指定罗盘外环参数。</td><td></td></tr><tr><td>innerOptions</td><td>VcBtnTooltipProps</td><td></td><td><code>optional</code> 指定罗盘内环参数。</td><td></td></tr><tr><td>markerOptions</td><td>VcBtnTooltipProps</td><td></td><td><code>optional</code> 指定罗盘旋转时圆块参数。</td><td></td></tr></tbody></table><div class=\"tip\"><p>提示 <code>outerOptions</code>、<code>innerOptions</code>、<code>markerOptions</code> 默认参数：</p></div><div class=\"tipflex\"><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// outerOptions</span>\n{\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-compass-outer&#39;</span>, <span class=\"hljs-comment\">// 图标名称</span>\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;96px&#39;</span>,                   <span class=\"hljs-comment\">// 外环尺寸</span>\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#3f4854&#39;</span>,               <span class=\"hljs-comment\">// 外环颜色</span>\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,      <span class=\"hljs-comment\">// 外环背景</span>\n  <span class=\"hljs-attr\">tooltip</span>: {                      <span class=\"hljs-comment\">// false 即为不显示</span>\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,                  <span class=\"hljs-comment\">// 鼠标悬浮多久显示提示信息</span>\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,      <span class=\"hljs-comment\">// 提示信息锚点</span>\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]               <span class=\"hljs-comment\">// 提示信息位置偏移</span>\n  }\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// innerOptions</span>\n{\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-compass-outer&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;96px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#3f4854&#39;</span>,\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">1000</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]\n  }\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// markerOptions</span>\n{\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-compass-rotation-marker&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;96px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#1976D2&#39;</span>\n}\n</code><span class=\"lang-mark\">js</span></pre></div>", 3);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCompass 事件 ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>compassEvt</td><td>(evt: VcCompassEvt)</td><td>操作罗盘控件时触发。</td></tr><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>组件加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>组件加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>组件销毁时触发。</td></tr></tbody></table>", 1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCompass 方法 ");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动加载组件。</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动重新加载组件。</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>手动卸载组件。</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>获取标志该组件是否创建成功的 Promise 对象。</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>获取该组件加载的 Cesium 对象。</td></tr></tbody></table>", 1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcZoomControl ");

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "缩放组件。", -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcZoomControl 属性 ");

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>string</td><td><code>&#39;top-right&#39;</code></td><td><code>optional</code> 指定缩放组件位置。</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>[number, number]</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定缩放控件基于位置的偏移量。</td><td></td></tr><tr><td>enableResetButton</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否启用重置按钮。</td><td></td></tr><tr><td>zoomAmount</td><td>number</td><td><code>2</code></td><td><code>optional</code> 指定放大缩小的数量级。</td><td></td></tr><tr><td>duration</td><td>string</td><td><code>0.5</code></td><td><code>optional</code> 指定放大缩小过程时间，单位秒。</td><td></td></tr><tr><td>durationReset</td><td>number</td><td><code>1.5</code></td><td><code>optional</code> 指定重置到默认相机位置的时间，单位秒。</td><td></td></tr><tr><td>defaultResetView</td><td>VcCamera</td><td></td><td><code>optional</code> 指定重置相机的位置。</td><td></td></tr><tr><td>overrideViewerCamera</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> 指定初始化时是否覆盖<code>vc-viewer</code>上的<code>camera</code>属性。</td><td></td></tr><tr><td>background</td><td>string</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> 指定缩放控件背景。</td><td></td></tr><tr><td>border</td><td>string</td><td><code>&#39;solid 1px rgba(255, 255, 255, 0.2)&#39;</code></td><td><code>optional</code> 指定缩放控件边框。</td><td></td></tr><tr><td>borderRadius</td><td>string</td><td><code>&#39;100px&#39;</code></td><td><code>optional</code> 指定缩放控件边框圆角。</td><td></td></tr><tr><td>direction</td><td>string</td><td><code>&#39;vertical&#39;</code></td><td><code>optional</code> 指定缩放控件方向。</td><td>vertical /horizontal</td></tr><tr><td>zoomInOptions</td><td>VcBtnTooltipProps</td><td></td><td><code>optional</code> 指定放大按钮参数。</td><td></td></tr><tr><td>zoomOutOptions</td><td>VcBtnTooltipProps</td><td></td><td><code>optional</code> 指定缩小按钮参数。</td><td></td></tr><tr><td>zoomResetOptions</td><td>VcBtnTooltipProps</td><td></td><td><code>optional</code> 指定重置按钮参数。</td><td></td></tr></tbody></table><div class=\"tip\"><p>提示：<code>durationReset</code>, <code>zoomInOptions</code>, <code>zoomOutOptions</code>, <code>zoomResetOptions</code> 默认参数：</p></div><div class=\"tipflex\"><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// defaultResetView</span>\n{\n  <span class=\"hljs-attr\">position</span>: {\n    <span class=\"hljs-attr\">lng</span>: <span class=\"hljs-number\">105</span>,\n    <span class=\"hljs-attr\">lat</span>: <span class=\"hljs-number\">30</span>,\n    <span class=\"hljs-attr\">height</span>: <span class=\"hljs-number\">19059568.5</span>\n  }\n}\n<span class=\"hljs-comment\">// 结构</span>\n{\n  position?: {\n    <span class=\"hljs-attr\">lng</span>: number,\n    <span class=\"hljs-attr\">lat</span>: number,\n    <span class=\"hljs-attr\">height</span>: number\n  } | [lng, lat, height]\n  rectange?: [west,south,east,north] | {west,south,east,north}\n  <span class=\"hljs-attr\">heading</span>: number\n  <span class=\"hljs-attr\">pitch</span>: number\n  <span class=\"hljs-attr\">roll</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// zoomInOptions</span>\n{\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-zoom-in&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,\n  <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-literal\">undefined</span>,\n  <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">500</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]\n  }\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// zoomResetOptions</span>\n{\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-reset&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,\n  <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-literal\">undefined</span>,\n  <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">500</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]\n  }\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// zoomOutOptions</span>\n{\n  <span class=\"hljs-attr\">icon</span>: <span class=\"hljs-string\">&#39;vc-icons-zoom-out&#39;</span>,\n  <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;24px&#39;</span>,\n  <span class=\"hljs-attr\">color</span>: <span class=\"hljs-string\">&#39;#fff&#39;</span>,\n  <span class=\"hljs-attr\">background</span>: <span class=\"hljs-string\">&#39;transparent&#39;</span>,\n  <span class=\"hljs-attr\">round</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">flat</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">label</span>: <span class=\"hljs-literal\">undefined</span>,\n  <span class=\"hljs-attr\">stack</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">tooltip</span>: {\n    <span class=\"hljs-attr\">delay</span>: <span class=\"hljs-number\">500</span>,\n    <span class=\"hljs-attr\">anchor</span>: <span class=\"hljs-string\">&#39;bottom middle&#39;</span>,\n    <span class=\"hljs-attr\">offset</span>: [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">20</span>]\n  }\n}\n</code><span class=\"lang-mark\">js</span></pre></div>", 3);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcZoomControl 事件 ");

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>组件加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>组件加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>组件销毁时触发。</td></tr><tr><td>zoomEvt</td><td>(evt: VcZoomEvt)</td><td>操作缩放控件时触发。</td></tr></tbody></table>", 1);

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcZoomControl 方法 ");

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动加载组件。</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动重新加载组件。</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>手动卸载组件。</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>获取标志该组件是否创建成功的 Promise 对象。</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>获取该组件加载的 Cesium 对象。</td></tr></tbody></table>", 1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPrint ");

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "打印组件。", -1);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPrint 属性 ");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>string</td><td><code>&#39;top-right&#39;</code></td><td><code>optional</code> 指定打印组件位置。</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>[number, number]</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定打印控件基于位置的偏移量。</td><td></td></tr><tr><td>showCredit</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定打印图片时是否显示加载数据版权信息。</td><td></td></tr><tr><td>showPrintView</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否显示打印预览。</td><td></td></tr><tr><td>printAutomatically</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否自动打印。需要 showPrintView 设置为 false。</td><td></td></tr><tr><td>downloadAutomatically</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否下载打印的图片。</td><td></td></tr><tr><td>icon</td><td>string</td><td><code>&#39;vc-icons-capture&#39;</code></td><td><code>optional</code> 指定打印按钮图标。</td><td></td></tr><tr><td>size</td><td>string</td><td><code>&#39;24px&#39;</code></td><td><code>optional</code> 指定打印按钮尺寸。</td><td></td></tr><tr><td>color</td><td>string</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> 指定打印按钮颜色。</td><td></td></tr><tr><td>background</td><td>string</td><td><code>&#39;#fff&#39;</code></td><td><code>optional</code> 指定打印按钮背景。</td><td></td></tr><tr><td>round</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定打印按钮是否圆形展示。</td><td></td></tr><tr><td>flat</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> 指定打印按钮是否是普通风格，不带背景、点击效果。</td><td></td></tr><tr><td>label</td><td>string</td><td></td><td><code>optional</code> 指定打印按钮文字。</td><td></td></tr><tr><td>stack</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> 指定打印按钮是否堆叠显示。</td><td></td></tr><tr><td>tooltip</td><td>VcTooltipProps</td><td></td><td><code>optional</code> 指定打印按钮提示信息参数。</td><td></td></tr><tr><td>screenshotName</td><td>string</td><td></td><td><code>optional</code> 指定截屏时图片文件名称。</td><td></td></tr></tbody></table>", 1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPrint 事件 ");

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>组件加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>组件加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>组件销毁时触发。</td></tr><tr><td>printEvt</td><td>(evt: VcPrintEvt)</td><td>操作打印控件时触发。</td></tr></tbody></table>", 1);

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPrint 方法 ");

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动加载组件。</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动重新加载组件。</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>手动卸载组件。</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>获取标志该组件是否创建成功的 Promise 对象。</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>获取该组件加载的 Cesium 对象。</td></tr></tbody></table>", 1);

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcMyLocation ");

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "定位组件。", -1);

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcMyLocation 属性 ");

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>string</td><td><code>&#39;top-right&#39;</code></td><td><code>optional</code> 指定定位组件位置。</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>[number, number]</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定定位按钮基于位置的偏移量。</td><td></td></tr><tr><td>geolocation</td><td>PositionOptions</td><td></td><td><code>optional</code> 指定浏览器定位参数。</td><td></td></tr><tr><td>amap</td><td>Object</td><td></td><td><code>optional</code> 指定高德定位参数。如果设置则优先使用高德定位。</td><td></td></tr><tr><td>id</td><td>string</td><td></td><td><code>optional</code> 指定定位成功后加载点的 id。</td><td></td></tr><tr><td>pointColor</td><td>VcColor</td><td></td><td><code>optional</code> 指定定位成功后加载点的颜色。</td><td></td></tr><tr><td>pixelSize</td><td>number</td><td><code>12.5</code></td><td><code>optional</code> 指定定位成功后加载点的大小。</td><td></td></tr><tr><td>outlineWidth</td><td>number</td><td><code>3</code></td><td><code>optional</code> 指定定位成功后加载点的外边框宽度。</td><td></td></tr><tr><td>outlineColor</td><td>VcColor</td><td><code>&#39;#ffffff&#39;</code></td><td><code>optional</code> 指定定位成功后加载点的外边框颜色。</td><td></td></tr><tr><td>level</td><td>number</td><td><code>6</code></td><td><code>optional</code> 指定定位成功后基于地形自动识别高度时的采样层级。</td><td></td></tr><tr><td>duration</td><td>number</td><td><code>3</code></td><td><code>optional</code> 指定定位成功后飞行时间，单位秒。</td><td></td></tr><tr><td>factor</td><td>number</td><td><code>0.01</code></td><td><code>optional</code> 将定位点转换成 rectangle 的偏差值。</td><td></td></tr><tr><td>customAPI</td><td>(errorCallback) =&gt; ({ lng: number; lat: number })</td><td></td><td><code>optional</code> 指定自定义定位 API。</td><td></td></tr><tr><td>description</td><td>(position, detail) =&gt; string</td><td></td><td><code>optional</code> 指定自定义定位成功后该点的描述文字。</td><td></td></tr><tr><td>icon</td><td>string</td><td><code>vc-icons-geolocation</code></td><td><code>optional</code> 指定定位按钮图标。</td><td></td></tr><tr><td>size</td><td>string</td><td><code>&#39;24px&#39;</code></td><td><code>optional</code> 指定定位按钮尺寸。</td><td></td></tr><tr><td>color</td><td>string</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> 指定定位按钮颜色。</td><td></td></tr><tr><td>background</td><td>string</td><td><code>&#39;#fff&#39;</code></td><td><code>optional</code> 指定定位按钮背景。</td><td></td></tr><tr><td>round</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定定位按钮是否圆形展示。</td><td></td></tr><tr><td>flat</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> 指定定位按钮是否是普通风格，不带背景、点击效果。</td><td></td></tr><tr><td>label</td><td>string</td><td></td><td><code>optional</code> 指定定位按钮文字。</td><td></td></tr><tr><td>stack</td><td>boolean</td><td></td><td><code>optional</code> 指定定位按钮是否堆叠显示。</td><td></td></tr><tr><td>tooltip</td><td>VcTooltipProps|false</td><td></td><td><code>optional</code> 指定定位按钮提示信息参数。</td><td></td></tr></tbody></table>", 1);

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcMyLocation 事件 ");

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>组件加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>组件加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>组件销毁时触发。</td></tr><tr><td>locationEvt</td><td>(evt: VcLocationEvt)</td><td>操作定位按钮时触发。</td></tr></tbody></table>", 1);

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcMyLocation 方法 ");

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动加载组件。</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动重新加载组件。</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>手动卸载组件。</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>获取标志该组件是否创建成功的 Promise 对象。</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>获取该组件加载的 Cesium 对象。</td></tr></tbody></table>", 1);

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcStatusBar ");

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "状态组件。", -1);

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcStatusBar 属性 ");

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>string</td><td><code>&#39;top-right&#39;</code></td><td><code>optional</code> 指定状态组件位置。</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>[number, number]</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定信息栏控件基于位置的偏移量。 （单独使用时有效）</td><td></td></tr><tr><td>gridFileUrl</td><td>string</td><td><code>https://zouyaoji.top/vue-cesium/SampleData/WW15MGH.DAC</code></td><td><code>optional</code> 指定鼠标拾取高度模型，用这个能提高获取的高度精度。</td><td></td></tr><tr><td>color</td><td>string</td><td><code>&#39;#fff&#39;</code></td><td><code>optional</code> 指定信息栏颜色。</td><td></td></tr><tr><td>background</td><td>string</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> 指定信息栏背景。</td><td></td></tr><tr><td>showCameraInfo</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定信息栏是否显示相机信息。</td><td></td></tr><tr><td>showMouseInfo</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定信息栏是否显示鼠标所指位置信息。</td><td></td></tr><tr><td>showPerformanceInfo</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定信息栏是否显示帧率信息。</td><td></td></tr><tr><td>useProjection</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定信息栏上的经纬度坐标是否可以切换成 UTM 投影坐标。</td><td></td></tr><tr><td>tooltip</td><td>false | VcTooltipProps</td><td></td><td><code>optional</code> 指定信息栏提示信息参数。</td><td></td></tr></tbody></table>", 1);

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcStatusBar 事件 ");

const _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>组件加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>组件加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>组件销毁时触发。</td></tr><tr><td>statusBarEvt</td><td>(evt: VcStatusBarEvt)</td><td>状态栏参数改变时触发。</td></tr></tbody></table>", 1);

const _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcStatusBar 方法 ");

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动加载组件。</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动重新加载组件。</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>手动卸载组件。</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>获取标志该组件是否创建成功的 Promise 对象。</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>获取该组件加载的 Cesium 对象。</td></tr><tr><td>getMouseCoordsInfo</td><td>() =&gt; MouseCoords</td><td>获取鼠标坐标信息。</td></tr><tr><td>getCameraInfo</td><td>() =&gt; { heading: string; pitch: string; roll: string; height: string; level: string }</td><td>获取相机信息。</td></tr><tr><td>getPerformanceInfo</td><td>() =&gt; { fps: string; ms: string }</td><td>获取性能参数信息。</td></tr></tbody></table>", 1);

const _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcDistanceLegend ");

const _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "距离比例尺组件。", -1);

const _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcDistanceLegend 属性 ");

const _hoisted_73 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>string</td><td><code>&#39;top-right&#39;</code></td><td><code>optional</code> 指定距离比例尺组件位置。</td><td>top-right/top-left/bottom-right/bottom-left/top/right/bottom/left</td></tr><tr><td>offset</td><td>[number, number]</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定距离比例尺控件基于位置的偏移量。</td><td></td></tr><tr><td>color</td><td>string</td><td><code>&#39;#fff&#39;</code></td><td><code>optional</code> 指定距离比例尺控件颜色。</td><td></td></tr><tr><td>background</td><td>string</td><td><code>&#39;#3f4854&#39;</code></td><td><code>optional</code> 指定距离比例尺背景。</td><td></td></tr><tr><td>width</td><td>number</td><td><code>100</code></td><td><code>optional</code> 指定距离比例尺宽度。</td><td></td></tr><tr><td>barBackground</td><td>string</td><td><code>&#39;#ffffff&#39;</code></td><td><code>optional</code> 指定距离比例尺上横线颜色。</td><td></td></tr></tbody></table>", 1);

const _hoisted_74 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcDistanceLegend 事件 ");

const _hoisted_75 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>组件加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>组件加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>组件销毁时触发。</td></tr><tr><td>distanceLegendEvt</td><td>(evt: VcDistanceLegendEvt)</td><td>距离比例尺改变时触发。</td></tr></tbody></table>", 1);

const _hoisted_76 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcDistanceLegend 方法 ");

const _hoisted_77 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动加载组件。</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动重新加载组件。</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>手动卸载组件。</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>获取标志该组件是否创建成功的 Promise 对象。</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>获取该组件加载的 Cesium 对象。</td></tr></tbody></table>", 1);

function vc_navigationvue_type_template_id_b147ce50_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_vue_cesium_demo1 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo1");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_navigationvue_type_template_id_b147ce50_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcnavigation",
    tabindex: "-1",
    content: "VcNavigation",
    href: "#vcnavigation",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_navigationvue_type_template_id_b147ce50_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcnavigation"
    })]),
    _: 1
  }), vc_navigationvue_type_template_id_b147ce50_hoisted_3, Object(vue_esm_browser["createElementVNode"])("div", _hoisted_5, [Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_6, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), _hoisted_8])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_12]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_11]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "kuo-zhan-yong-fa",
    tabindex: "-1",
    content: "扩展用法",
    href: "#kuo-zhan-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#kuo-zhan-yong-fa"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo1)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_16]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcnavigation-shu-xing",
    tabindex: "-1",
    content: "VcNavigation 属性",
    href: "#vcnavigation-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcnavigation-shu-xing"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcnavigation-shi-jian",
    tabindex: "-1",
    content: "VcNavigation 事件",
    href: "#vcnavigation-shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcnavigation-shi-jian"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcnavigation-fang-fa",
    tabindex: "-1",
    content: "VcNavigation 方法",
    href: "#vcnavigation-fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcnavigation-fang-fa"
    })]),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcnavigation-cha-cao",
    tabindex: "-1",
    content: "VcNavigation 插槽",
    href: "#vcnavigation-cha-cao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcnavigation-cha-cao"
    })]),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccompass",
    tabindex: "-1",
    content: "VcCompass",
    href: "#vccompass",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_26, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccompass"
    })]),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccompass-shu-xing",
    tabindex: "-1",
    content: "VcCompass 属性",
    href: "#vccompass-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_28, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccompass-shu-xing"
    })]),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccompass-shi-jian",
    tabindex: "-1",
    content: "VcCompass 事件",
    href: "#vccompass-shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_32, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccompass-shi-jian"
    })]),
    _: 1
  }), _hoisted_33, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccompass-fang-fa",
    tabindex: "-1",
    content: "VcCompass 方法",
    href: "#vccompass-fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_34, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccompass-fang-fa"
    })]),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vczoomcontrol",
    tabindex: "-1",
    content: "VcZoomControl",
    href: "#vczoomcontrol",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_36, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vczoomcontrol"
    })]),
    _: 1
  }), _hoisted_37, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vczoomcontrol-shu-xing",
    tabindex: "-1",
    content: "VcZoomControl 属性",
    href: "#vczoomcontrol-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_38, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vczoomcontrol-shu-xing"
    })]),
    _: 1
  }), _hoisted_39, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vczoomcontrol-shi-jian",
    tabindex: "-1",
    content: "VcZoomControl 事件",
    href: "#vczoomcontrol-shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_42, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vczoomcontrol-shi-jian"
    })]),
    _: 1
  }), _hoisted_43, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vczoomcontrol-fang-fa",
    tabindex: "-1",
    content: "VcZoomControl 方法",
    href: "#vczoomcontrol-fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_44, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vczoomcontrol-fang-fa"
    })]),
    _: 1
  }), _hoisted_45, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcprint",
    tabindex: "-1",
    content: "VcPrint",
    href: "#vcprint",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_46, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcprint"
    })]),
    _: 1
  }), _hoisted_47, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcprint-shu-xing",
    tabindex: "-1",
    content: "VcPrint 属性",
    href: "#vcprint-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_48, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcprint-shu-xing"
    })]),
    _: 1
  }), _hoisted_49, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcprint-shi-jian",
    tabindex: "-1",
    content: "VcPrint 事件",
    href: "#vcprint-shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_50, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcprint-shi-jian"
    })]),
    _: 1
  }), _hoisted_51, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcprint-fang-fa",
    tabindex: "-1",
    content: "VcPrint 方法",
    href: "#vcprint-fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_52, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcprint-fang-fa"
    })]),
    _: 1
  }), _hoisted_53, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcmylocation",
    tabindex: "-1",
    content: "VcMyLocation",
    href: "#vcmylocation",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_54, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcmylocation"
    })]),
    _: 1
  }), _hoisted_55, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcmylocation-shu-xing",
    tabindex: "-1",
    content: "VcMyLocation 属性",
    href: "#vcmylocation-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_56, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcmylocation-shu-xing"
    })]),
    _: 1
  }), _hoisted_57, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcmylocation-shi-jian",
    tabindex: "-1",
    content: "VcMyLocation 事件",
    href: "#vcmylocation-shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_58, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcmylocation-shi-jian"
    })]),
    _: 1
  }), _hoisted_59, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcmylocation-fang-fa",
    tabindex: "-1",
    content: "VcMyLocation 方法",
    href: "#vcmylocation-fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_60, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcmylocation-fang-fa"
    })]),
    _: 1
  }), _hoisted_61, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcstatusbar",
    tabindex: "-1",
    content: "VcStatusBar",
    href: "#vcstatusbar",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_62, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcstatusbar"
    })]),
    _: 1
  }), _hoisted_63, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcstatusbar-shu-xing",
    tabindex: "-1",
    content: "VcStatusBar 属性",
    href: "#vcstatusbar-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_64, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcstatusbar-shu-xing"
    })]),
    _: 1
  }), _hoisted_65, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcstatusbar-shi-jian",
    tabindex: "-1",
    content: "VcStatusBar 事件",
    href: "#vcstatusbar-shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_66, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcstatusbar-shi-jian"
    })]),
    _: 1
  }), _hoisted_67, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcstatusbar-fang-fa",
    tabindex: "-1",
    content: "VcStatusBar 方法",
    href: "#vcstatusbar-fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_68, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcstatusbar-fang-fa"
    })]),
    _: 1
  }), _hoisted_69, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcdistancelegend",
    tabindex: "-1",
    content: "VcDistanceLegend",
    href: "#vcdistancelegend",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_70, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcdistancelegend"
    })]),
    _: 1
  }), _hoisted_71, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcdistancelegend-shu-xing",
    tabindex: "-1",
    content: "VcDistanceLegend 属性",
    href: "#vcdistancelegend-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_72, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcdistancelegend-shu-xing"
    })]),
    _: 1
  }), _hoisted_73, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcdistancelegend-shi-jian",
    tabindex: "-1",
    content: "VcDistanceLegend 事件",
    href: "#vcdistancelegend-shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_74, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcdistancelegend-shi-jian"
    })]),
    _: 1
  }), _hoisted_75, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcdistancelegend-fang-fa",
    tabindex: "-1",
    content: "VcDistanceLegend 方法",
    href: "#vcdistancelegend-fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_76, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcdistancelegend-fang-fa"
    })]),
    _: 1
  }), _hoisted_77, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-navigation.md?vue&type=template&id=b147ce50

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/controls/vc-navigation.md?vue&type=script&lang=ts

/* harmony default export */ var vc_navigationvue_type_script_lang_ts = ({
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
        const _component_vc_navigation = _resolveComponent("vc-navigation");

        const _component_vc_imagery_provider_tianditu = _resolveComponent("vc-imagery-provider-tianditu");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            sceneModePicker: ""
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_navigation, {
              ref: "navigation",
              offset: [35, 35]
            }, null, 512), _createVNode(_component_vc_navigation, {
              position: _ctx.position,
              offset: _ctx.offset,
              "compass-opts": _ctx.compassOpts,
              "zoom-opts": _ctx.zoomOpts,
              "location-opts": _ctx.locationOpts,
              "other-opts": _ctx.otherOpts,
              onCompassEvt: _ctx.onNavigationEvt,
              onZoomEvt: _ctx.onNavigationEvt,
              onPrintEvt: _ctx.onNavigationEvt,
              onLocationEvt: _ctx.onNavigationEvt,
              onStatusBarEvt: _ctx.onNavigationEvt,
              onDistanceLegendEvt: _ctx.onNavigationEvt
            }, null, 8, ["position", "offset", "compass-opts", "zoom-opts", "location-opts", "other-opts", "onCompassEvt", "onZoomEvt", "onPrintEvt", "onLocationEvt", "onStatusBarEvt", "onDistanceLegendEvt"]), _createVNode(_component_vc_layer_imagery, {
              "sort-order": 20
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_tianditu, {
                "map-style": "cva_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            }), _createVNode(_component_vc_layer_imagery, {
              "sort-order": 10
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_tianditu, {
                "map-style": "img_c",
                token: "436ce7e50d27eede2f2929307e6b33c0",
                ref: "provider"
              }, null, 512)]),
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
        data() {
          return {
            position: 'top-left',
            offset: [10, 80],
            compassOpts: {
              enableCompassOuterRing: true,
              outerOptions: {
                icon: 'svguse:#vc-icons-compass-outer',
                // svg 加载方式
                size: '120px'
              },
              innerOptions: {
                icon: 'fa fa-compass',
                size: '24px',
                color: '#3f4854',
                background: '#fff',
                tooltip: {
                  tip: 'asd'
                }
              },
              markerOptions: {
                size: '120px',
                color: 'yellow'
              }
            },
            zoomOpts: {
              background: '#1976D2',
              direction: 'horizontal'
            },
            locationOpts: {
              color: 'red',
              // 使用高德api定位
              amap: {
                key: '42d22e6ed83f077bc28b7864718726de',
                version: '2.0',
                options: {
                  timeout: 5000,
                  noGeoLocation: 3,
                  needAddress: true,
                  extensions: 'all'
                },
                transformToWGS84: true
              }
            },
            otherOpts: false // otherOpts: {
            //   position: 'bottom-right',
            //   offset: [2, 3],
            //   statusBarOpts:  // 与 vc-status-bar 保持一致
            //   distancelegendOpts: // 与 vc-distance-legend 保持一致
            // }

          };
        },

        mounted() {
          // 仅调试使用 打开浏览器控制台 用 vm 获取data中的属性修改。
          // 如 vm.offset = [0, 0]  或 vm.offset[0] = 100
          // 甚至加一个初始化未给的属性都可以
          // vm.zoomOpts.zoomOutOptions = {size: '40px'}
          window.vm = this;
        },

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
    }(),
    "vue-cesium-demo1": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;

      function render(_ctx, _cache) {
        const _component_vc_compass = _resolveComponent("vc-compass");

        const _component_vc_zoom_control = _resolveComponent("vc-zoom-control");

        const _component_vc_print = _resolveComponent("vc-print");

        const _component_vc_my_location = _resolveComponent("vc-my-location");

        const _component_vc_status_bar = _resolveComponent("vc-status-bar");

        const _component_vc_distance_legend = _resolveComponent("vc-distance-legend");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_compass, {
              position: "left",
              "outer-options": {
                icon: 'svguse:#vc-icons-compass-outer',
                size: '250px'
              },
              "inner-options": {
                icon: 'fa fa-compass',
                size: '60px',
                background: 'transparent',
                color: '#009688'
              }
            }), _createVNode(_component_vc_compass, {
              position: "top",
              "outer-options": {
                icon: 'svguse:#vc-icons-qq'
              }
            }), _createVNode(_component_vc_compass, {
              position: "top-right",
              "outer-options": {
                icon: 'fa fa-circle-o-notch'
              },
              "inner-options": {
                icon: 'fa fa-circle',
                background: 'transparent'
              }
            }), _createVNode(_component_vc_compass, {
              position: "right",
              "enable-compass-outer-ring": false
            }), _createVNode(_component_vc_zoom_control, {
              position: "bottom",
              direction: "horizontal",
              offset: [0, 30],
              "zoom-reset-options": {
                size: '48px',
                color: '#21BA45'
              }
            }), _createVNode(_component_vc_zoom_control, {
              position: "bottom",
              "enable-reset-button": false,
              "border-radius": "0",
              offset: [0, 120]
            }), _createVNode(_component_vc_print, {
              position: "bottom-right",
              "download-automatically": "",
              color: _ctx.color,
              background: _ctx.background
            }, null, 8, ["color", "background"]), _createVNode(_component_vc_print, {
              position: "bottom-right",
              offset: [40, 20],
              "show-printView": false,
              "print-automatically": "",
              size: "28px",
              round: false,
              label: "打印分享",
              background: "#31CCEC",
              icon: "fa fa-print"
            }), _createVNode(_component_vc_my_location, {
              position: "top-left",
              color: "#C10015"
            }), _createVNode(_component_vc_my_location, {
              color: "#9C27B0",
              amap: {
                key: '42d22e6ed83f077bc28b7864718726de',
                version: '2.0',
                options: {
                  timeout: 5000,
                  noGeoLocation: 3,
                  needAddress: true,
                  extensions: 'all'
                },
                transformToWGS84: true
              },
              position: "top-left",
              offset: [0, 60],
              label: "定位",
              stack: "",
              round: false,
              background: "#F2C037"
            }, null, 8, ["amap"]), _createVNode(_component_vc_my_location, {
              position: "top-left",
              offset: [60, 0],
              "custom-a-p-i": () => ({
                lng: 108,
                lat: 32
              })
            }, null, 8, ["custom-a-p-i"]), _createVNode(_component_vc_status_bar, {
              position: "bottom"
            }), _createVNode(_component_vc_status_bar, {
              position: "top-left",
              offset: [120, 3],
              "show-mouse-info": false,
              "show-performance-info": false
            }), _createVNode(_component_vc_distance_legend, {
              position: "bottom-left",
              offset: [5, 70],
              background: "#26A69A",
              "bar-background": "#F2C037",
              width: 80
            }), _createVNode(_component_vc_distance_legend, {
              position: "bottom-left",
              offset: [5, 35]
            })]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const democomponentExport = {
        data() {
          return {
            color: 'red',
            background: 'yellow'
          };
        },

        mounted() {
          window.vm = this;
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-navigation.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-navigation.md



vc_navigationvue_type_script_lang_ts.render = vc_navigationvue_type_template_id_b147ce50_render

/* harmony default export */ var vc_navigation = __webpack_exports__["default"] = (vc_navigationvue_type_script_lang_ts);

/***/ })

}]);