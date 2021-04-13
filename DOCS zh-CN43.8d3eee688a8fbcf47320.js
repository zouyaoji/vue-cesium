(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/vc-viewer.md?vue&type=template&id=5c38651d

var vc_viewervue_type_template_id_5c38651d_hoisted_1 = {
  class: "content element-doc"
};

var vc_viewervue_type_template_id_5c38651d_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"shi-tu-chang-jing\"><a class=\"header-anchor\" href=\"#shi-tu-chang-jing\">¶</a> 视图场景</h2><p><code>vc-viewer</code> 组件。用于构建 <code>Cesium</code> 应用程序的基础组件，其实质是通过 <code>Cesium.Viewer</code> 初始化的一个 DOM 节点，用于挂载其他 DOM 节点或者组件。<strong>注意:</strong> <code>vue-cesium</code> 的其他组件或由它们构成的自定义组件都需要放在该组件下面才能正常加载。初始化完成后，可以在 <code>ready</code> 事件中获取返回的 <code>Cesium</code> 和 <code>Viewer</code> 实例用于 Cesium API 开发，也可以通过 <code>ref</code> 来获取组件的 <code>createPromise</code> 对象来得到 Viewer 实例。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>三维场景容器组件的基础用法。</p>", 4);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签和它的一些响应属性来初始化三维球，并挂载 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-navigation"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 导航和 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 实体组件，详细 API 请查阅它们的文档。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer\n    ref=\"vcViewer\"\n    :animation=\"animation\"\n    :baseLayerPicker=\"baseLayerPicker\"\n    :timeline=\"timeline\"\n    :fullscreenButton=\"fullscreenButton\"\n    :fullscreenElement=\"fullscreenElement\"\n    :infoBox=\"infoBox\"\n    :showCredit=\"showCredit\"\n    @ready=\"onViewerReady\"\n    @leftClick=\"onLeftClick\"\n  >\n    <vc-navigation\n      :offset=\"offset\"\n      @compass-evt=\"onNavigationEvt\"\n      :otherOpts=\"otherOpts\"\n      @zoom-evt=\"onNavigationEvt\"\n    ></vc-navigation>\n    <vc-entity v-model:billboard=\"billboard\" ref=\"entity\" @click=\"onEntityClick\" :position=\"{lng: 108, lat: 32}\" :point=\"point\" :label=\"label\">\n      <vc-graphics-billboard ref=\"billboard\" image=\"https://zouyaoji.top/vue-cesium/favicon.png\"></vc-graphics-billboard>\n    </vc-entity>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n      <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    </el-row>\n    <el-row v-if=\"!loading\">\n      <el-switch v-model=\"animation\" active-color=\"#13ce66\" inactive-text=\"动画\"> </el-switch>\n      <el-switch v-model=\"timeline\" active-color=\"#13ce66\" inactive-text=\"时间轴\"> </el-switch>\n      <el-switch v-model=\"baseLayerPicker\" active-color=\"#13ce66\" inactive-text=\"基础图层\"> </el-switch>\n      <el-switch v-model=\"fullscreenButton\" active-color=\"#13ce66\" inactive-text=\"全屏按钮\"> </el-switch>\n      <el-switch v-model=\"infoBox\" active-color=\"#13ce66\" inactive-text=\"信息提示框\"> </el-switch>\n      <el-switch v-model=\"showCredit\" active-color=\"#13ce66\" inactive-text=\"版权信息\"> </el-switch>\n    </el-row>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        loading: true,\n        animation: true,\n        timeline: true,\n        baseLayerPicker: false,\n        fullscreenButton: true,\n        infoBox: true,\n        showCredit: true,\n        fullscreenElement: document.body,\n        point: {\n          pixelSize: 28\n        },\n        label: {\n          text: 'Hello World',\n          pixelOffset: [0, 150]\n        },\n        billboard: {},\n        offset: [10, 25],\n        otherOpts: {\n          offset: [0, 32],\n          position: 'bottom-right'\n        }\n      }\n    },\n    watch: {\n      timeline (val) {\n        this.otherOpts.offset = val ? [0, 30] : this.fullscreenButton ?  [30, 5] : [0, 5]\n      },\n      fullscreenButton (val) {\n        if (!this.timeline && !val) {\n          this.otherOpts.offset = [0, 5]\n        } else if (!this.timeline && val){\n          this.otherOpts.offset = [30, 5]\n        }\n      }\n    },\n    mounted() {\n      this.$refs.vcViewer.createPromise.then(({ Cesium, viewer }) => {\n        console.log('viewer is loaded.')\n      })\n    },\n    methods: {\n      onViewerReady({ Cesium, viewer }) {\n        this.loading = false\n      },\n      onNavigationEvt(e) {\n        console.log(e)\n      },\n      onEntityClick(e) {\n        console.log(e)\n      },\n      onLeftClick(e) {\n        console.log(e)\n      },\n\n      load() {\n        this.$refs.vcViewer.load().then(e => {\n          console.log(e)\n          this.loading = false\n        })\n      },\n      unload() {\n        this.$refs.vcViewer.unload().then(e => {\n          console.log(e)\n          this.loading = true\n        })\n      },\n      reload() {\n        this.loading = true\n        this.$refs.vcViewer.reload().then(e => {\n          console.log(e)\n          this.loading = false\n        })\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>camera</td><td>Object</td><td></td><td><code>optional</code> 指定初始化场景相机位置，默认定位到全球范围内的中国。 <strong>结构：{ position: { lng: number, lat: number, height: number }, heading: number, pitch: number, roll: number }</strong></td></tr><tr><td>showCredit</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 是否显示默认 Logo 和 加载数据版权信息。</td></tr><tr><td>autoSortImageryLayers</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 添加影像图层时是否根据图层 <code>sortOrder</code> 属性自动排序。</td></tr><tr><td>removeCesiumScript</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定<code>vc-viewer</code> 销毁时是否移除CesiumJS标签。</td></tr><tr><td>enableEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否触发事件。</td></tr><tr><td>skeleton</td><td>Boolean|Object</td><td><code>{ dark: false, animation: &#39;wave&#39;, square: true, bordered: true, color: undefined }</code></td><td><code>optional</code> 指定初始化时是否显示骨架背景。动画可选值 <code>wave</code>, <code>pulse</code>, <code>pulse-x</code>, <code>pulse-y</code>, <code>fade</code>, <code>blink</code>, <code>none</code></td></tr><tr><td>TZcode</td><td>String</td><td><code>UTM</code></td><td><code>optional</code> 自定义 Timeline 格式化日期是所用时区代码。</td></tr><tr><td>UTCoffset</td><td>String</td><td><code>-(new Date().getTimezoneOffset())</code></td><td><code>optional</code> 本地时间与UTC时间的时差（分钟）。自定义 Timeline 格式化日期使用。</td></tr><tr><td>accessToken</td><td>String</td><td></td><td><code>optional</code>指定accessToken，使用Cesium ion的数据源需要到<a href=\"https://cesium.com/ion/\">https://cesium.com/ion/</a>申请一个账户，获取Access Token。一般是Vue.use()的时候指定。</td></tr><tr><td>cesiumPath</td><td>String</td><td><code>&#39;https://unpkg.com/cesium/Build/Cesium/Cesium.js&#39;</code></td><td><code>optional</code>指定当前场景使用的 cesium 库的例子。一般是Vue.use()的时候指定。</td></tr><tr><td></td><td>------</td><td>-----</td><td>---</td></tr><tr><td>animation</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>是否显示动画控件。</td></tr><tr><td>baseLayerPicker</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>是否显示基础图层切换按钮。</td></tr><tr><td>fullscreenButton</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>是否显示全屏切换按钮。</td></tr><tr><td>vrButton</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>是否显示 VR 功能按钮。</td></tr><tr><td>geocoder</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>是否显示地理编码器搜索框。</td></tr><tr><td>homeButton</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>是否显示主页按钮。</td></tr><tr><td>infoBox</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code>是否显示信息框。</td></tr><tr><td>sceneModePicker</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>是否显示场景模式切换按钮。</td></tr><tr><td>selectionIndicator</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code>是否显示选择指示符。</td></tr><tr><td>timeline</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>是否显示时间轴控件。</td></tr><tr><td>navigationHelpButton</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>是否显示导航帮助按钮。</td></tr><tr><td>navigationInstructionsInitiallyVisible</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>是展开导航帮助面板，否点击navigationHelpButton才能展开面板。</td></tr><tr><td>scene3DOnly</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>如果为true，则每个几何实例仅以3D形式呈现以节省GPU内存。</td></tr><tr><td>clockViewModel</td><td>Object</td><td></td><td><code>optional</code>用于控制当前时间的时钟视图模型。</td></tr><tr><td>shouldAnimate</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>true 是否开始时间模拟。</td></tr><tr><td>imageryProvider</td><td>Object</td><td></td><td><code>optional</code> 指定初始化时加载的影像。<code>vue-cesium</code> 已经将默认的替换成引用 Cesium 资源自带的<code>NaturalEarthII</code> 了。</td></tr><tr><td>terrainProvider</td><td>Object</td><td></td><td><code>optional</code> 指定初始化时加载的地形。</td></tr><tr><td>skyBox</td><td>Object|false</td><td></td><td><code>optional</code> 指定初始化时加载的天空盒。 <code>undefined</code> 是默认的星空背景，<code>false</code>则天空盒、太阳、月亮等都不会添加。</td></tr><tr><td>skyAtmosphere</td><td>Object|false</td><td></td><td><code>optional</code> 蓝天，以及围绕地球四肢的辉光。 设置为false可将其关闭。</td></tr><tr><td>fullscreenElement</td><td>Element | String</td><td><code>document.body</code></td><td><code>optional</code>按下全屏按钮时要放入全屏模式的元素或ID。</td></tr><tr><td>useDefaultRenderLoop</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 是否开启默认的循环渲染控制。</td></tr><tr><td>targetFrameRate</td><td>Number</td><td>-</td><td><code>optional</code>使用默认渲染循环时的目标帧速率。</td></tr><tr><td>showRenderLoopErrors</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code>如果设置为true，发生渲染循环错误时，将自动给用户显示一个包含错误信息的 HTML 面板。</td></tr><tr><td>useBrowserRecommendedResolution</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code>如果为true，则以浏览器建议的分辨率进行渲染，并忽略window.devicePixelRatio。</td></tr><tr><td>automaticallyTrackDataSourceClocks</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code>如果设置为true，将自动跟踪新添加数据源的时钟设置，如果数据源的时钟变更，则更新。如需单独设置时钟，请将此项设置为false。</td></tr><tr><td>contextOptions</td><td>Object</td><td></td><td><code>optional</code>Context and WebGL 创建属性与传递给Scene匹配的选项。</td></tr><tr><td>sceneMode</td><td>Number</td><td><code>3</code></td><td><code>optional</code> 指定场景模式。<code>1</code> 哥伦布视图，<code>2</code> 二维视图， <code>3</code> 三维视图。</td></tr><tr><td>orderIndependentTranslucency</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code>如果此项设置为true，并且使用设备支持，将使用与顺序无关的半透明。</td></tr><tr><td>creditContainer</td><td>Element | String</td><td></td><td><code>optional</code>指定包含CreditDisplay信息的DOM元素或ID。如若未指定，credit信息将添加到部件底部。</td></tr><tr><td>creditViewport</td><td>Element | String</td><td></td><td><code>optional</code>指定包含CreditDisplay弹出框信息的DOM元素或ID。如若未指定，credit信息将添加到部件底部。</td></tr><tr><td>dataSources</td><td>Object</td><td></td><td><code>optional</code> 指定初始化时加载的数据源集合。如果指定了数据源集合，<code>Viewer</code> 销毁时不会销毁它。</td></tr><tr><td>terrainExaggeration</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code>用于夸大地形的标量。请注意，设置地形夸张不会修改其它任何数据。</td></tr><tr><td>shadows</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>确定阴影是否由太阳投射形成。</td></tr><tr><td>terrainShadows</td><td>Number</td><td><code>3</code></td><td><code>optional</code>确定地形是否投射或接受来自太阳的阴影。<strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4</strong></td></tr><tr><td>mapMode2D</td><td>Number</td><td><code>1</code></td><td><code>optional</code>确定二维地图是可旋转的或是可以在在水平方向上无限滚动。 <strong>ROTATE: 0, INFINITE_SCROLL: 1</strong></td></tr><tr><td>projectionPicker</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>是否显示投影切换按钮。</td></tr><tr><td>requestRenderMode</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>如果为true，则仅根据场景中的更改确定是否需要渲染帧。 启用可减少应用程序的CPU / GPU使用率，并减少移动设备上的电池消耗，但需要使用Scene＃requestRender在此模式下显式渲染新帧。 在API的其他部分对场景进行更改后，在许多情况下这是必要的。</td></tr><tr><td>maximumRenderTimeChange</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code>如果requestRenderMode为true，则此值定义在请求渲染之前允许的最大模拟时间更改。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th><th>来源</th></tr></thead><tbody><tr><td>cesiumReady</td><td>Cesium</td><td>CesiumJS加载完成时触发。</td><td>-</td></tr><tr><td>beforeLoad</td><td>Vue Instance</td><td>vc-viewer 初始化前触发。</td><td>-</td></tr><tr><td>ready</td><td>{Cesium, viewer, vm}</td><td>vc-viewer 初始化完成触发。</td><td>-</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>vc-viewer 销毁完成时触发。</td><td>-</td></tr><tr><td>viewerWidgetResized</td><td></td><td>vc-viewer 上有部件发生变化时触发。</td><td>-</td></tr><tr><td>------</td><td>----</td><td>----</td><td>---</td></tr><tr><td>selectedEntityChanged</td><td>entity</td><td>场景选中实体发生改变时触发此事件。事件参数表示选中的实体，或者undefined（未选中）</td><td>Viewer</td></tr><tr><td>trackedEntityChanged</td><td>entity</td><td>场景跟踪实体发生改变时触发此事件。事件参数表示跟踪的实体。</td><td>Viewer</td></tr><tr><td>layerAdded</td><td>imageryLayer, index</td><td>场景添加某影像图层后触发该事件。事件参数表示改图层和它的索引。</td><td>Viewer.imageryLayers</td></tr><tr><td>layerMoved</td><td>imageryLayer, newIndex, oldIndex</td><td>场景某影像图层发生移动后触发该事件。事件参数表示该图层和它以前的索引以及新索引。</td><td>Viewer.imageryLayers</td></tr><tr><td>layerRemoved</td><td>imageryLayer, index</td><td>场景移除某影像图层后触发该事件。事件参数表示该图层和它的索引。</td><td>Viewer.imageryLayers</td></tr><tr><td>layerShownOrHidden</td><td>imageryLayer, index, flag</td><td>场景中某图层可见性设置ImageryLayer#show发生改变时触发该事件。事件参数表示发生改变的图层，图层索引，以及图层是否可见。</td><td>iewer.imageryLayers</td></tr><tr><td>dataSourceAdded</td><td>dataSource</td><td>场景添加某数据源后触发该事件。事件参数表示该数据源。</td><td>Viewer.dataSources</td></tr><tr><td>dataSourceMoved</td><td>dataSource</td><td>场景移动某数据源后发生后触发该事件。事件参数表示该数据源和它以前的索引以及新索引。</td><td>Viewer.dataSources</td></tr><tr><td>dataSourceRemoved</td><td>dataSource</td><td>场景移除某数据源后触发该事件。事件参数表示该数据源。</td><td>Viewer.entities</td></tr><tr><td>collectionChanged</td><td>collection, added, removed, changed</td><td>场景实体集合添加、移除或者改变实体后触发该事件。事件参数表示该实体集合，以及添加的实体数组、移除的实体数组、改变的实体数组。</td><td>Viewer.entities</td></tr><tr><td>morphComplete</td><td>object</td><td>场景投影转换完成后触发该事件。事件参数是一个包含scene的对象。</td><td>Viewer.scene</td></tr><tr><td>morphStart</td><td>object</td><td>场景投影转换开始时触发该事件。事件参数是一个包含scene的对象。</td><td>Viewer.scene</td></tr><tr><td>postRender</td><td>scene, currentTime</td><td>场景每帧渲染结束后触发该事件。事件参数是scene实例和当前时间。</td><td>Viewer.scene</td></tr><tr><td>preRender</td><td>scene, currentTime</td><td>场景刷新后但在每帧渲染开始时触发该事件。事件参数是scene实例和当前时间。</td><td>Viewer.scene</td></tr><tr><td>postUpdate</td><td>scene, currentTime</td><td>场景刷新后但在每帧渲染前触发该事件。事件参数是scene实例和当前时间。</td><td>Viewer.scene</td></tr><tr><td>preUpdate</td><td>scene, currentTime</td><td>场景刷新或者渲染前触发该事件。事件参数是scene实例和当前时间。</td><td>Viewer.scene</td></tr><tr><td>renderError</td><td>scene, error</td><td>场景抛出渲染异常时触发该事件。事件参数是scene实例和异常。</td><td>Viewer.scene</td></tr><tr><td>terrainProviderChanged</td><td></td><td>场景地形提供者发生改变时触发该事件。</td><td>Viewer.scene</td></tr><tr><td>changed</td><td>number</td><td>场景相机按percentageChanged设定比例改变后触发该事件。</td><td>Viewer.camera</td></tr><tr><td>moveEnd</td><td></td><td>场景相机停止移动后触发该事件。</td><td>Viewer.camera</td></tr><tr><td>moveStart</td><td></td><td>场景相机开始移动时触发该事件。</td><td>Viewer.camera</td></tr><tr><td>onStop</td><td></td><td>场景时钟每当到达停止时间时触发该事件。</td><td>Viewer.clock</td></tr><tr><td>onTick</td><td></td><td>场景时钟每当调用Clock#tick触发该事件。</td><td>Viewer.clock</td></tr><tr><td>errorEvent</td><td></td><td>场景地形提供者遇到异步错误时触发该事件。</td><td>Viewer.terrainProvider</td></tr><tr><td>cameraClicked</td><td></td><td>infoBox弹窗上点击相机事件。</td><td>Viewer.infoBox.viewModel</td></tr><tr><td>closeClicked</td><td></td><td>infoBox弹窗关闭事件。</td><td>Viewer.infoBox.viewModel</td></tr><tr><td>leftClick</td><td>{position: point}</td><td>鼠标左键单击事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>leftDoubleClick</td><td>{position: point}</td><td>鼠标左键双击事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>leftDown</td><td>{position: point}</td><td>鼠标左键按下事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>leftUp</td><td>{position: point}</td><td>鼠标左键弹起事件</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>middleClick</td><td>{position: point}</td><td>鼠标中键单击事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>middleDown</td><td>{position: point}</td><td>鼠标中键按下事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>middleUp</td><td>{position: point}</td><td>鼠标中键弹起事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>mouseMove</td><td>{startPosition: point, endPosition: point}</td><td>鼠标移动事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>pinchEnd</td><td></td><td>触摸设备双指操作结束事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>pinchMove</td><td>{distance: {startPosition: point, endPosition: point}, angleAndHeight: {startPosition: point, endPosition: point}}</td><td>触摸设备双指操作移动事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>pinchStart</td><td>{position1: point, position2: point}</td><td>触摸设备双指操作开始事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>rightClick</td><td>{position: point}</td><td>鼠标右键单击事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>rightDown</td><td>{position: point}</td><td>鼠标右键按下事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>rightUp</td><td>{position: point}</td><td>鼠标弹起事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>wheel</td><td>delta</td><td>鼠标中轮滚动事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>imageryLayersUpdatedEvent</td><td></td><td>在添加，显示，隐藏，移动或删除图像图层时触发。</td><td>Viewer.scene.globe</td></tr><tr><td>terrainProviderChanged</td><td></td><td>地形改变事件。这个应该和 scene 触发的一样。</td><td>Viewer.scene.globe</td></tr><tr><td>tileLoadProgressEvent</td><td></td><td>获取自上一个渲染帧以来切片加载队列的长度发生更改时引发的事件。 当加载队列为空时，当前视图的所有地形和图像均已加载。 该事件将传递图块加载队列的新长度。</td><td>Viewer.scene.globe</td></tr></tbody></table><h3 id=\"ref-fang-fa\"><a class=\"header-anchor\" href=\"#ref-fang-fa\">¶</a> ref 方法</h3><table><thead><tr><th>方法名</th><th>返回</th><th>描述</th></tr></thead><tbody><tr><td>load</td><td>{Cesium, viewer, vm} | <code>false</code></td><td>执行加载操作。成功返回 <code>ReadyObj</code>, 失败返回 <code>false。</code></td></tr><tr><td>unload</td><td>Boolean</td><td>执行销毁操作。成功返回 <code>true</code>, 失败返回 <code>false</code>。</td></tr><tr><td>reload</td><td>{Cesium, viewer, vm} | <code>false</code></td><td>执行重载操作。 成功返回 <code>ReadyObj</code>, 失败返回 <code>false。</code></td></tr><tr><td>getCesiumObject</td><td>Object</td><td>获取该组件加载的 Cesium 对象。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <a href=\"https://cesium.com/docs/cesiumjs-ref-doc/Viewer.html\">Viewer</a></li></ul>", 8);

function vc_viewervue_type_template_id_5c38651d_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_viewervue_type_template_id_5c38651d_hoisted_1, [vc_viewervue_type_template_id_5c38651d_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/vc-viewer.md?vue&type=template&id=5c38651d

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/vc-viewer.md?vue&type=script&lang=ts


/* harmony default export */ var vc_viewervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */],
          _createCommentVNode = vue_esm_browser["j" /* createCommentVNode */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

      function render(_ctx, _cache) {
        var _component_vc_navigation = _resolveComponent("vc-navigation");

        var _component_vc_graphics_billboard = _resolveComponent("vc-graphics-billboard");

        var _component_vc_entity = _resolveComponent("vc-entity");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_row = _resolveComponent("el-row");

        var _component_el_switch = _resolveComponent("el-switch");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, {
              ref: "vcViewer",
              animation: _ctx.animation,
              baseLayerPicker: _ctx.baseLayerPicker,
              timeline: _ctx.timeline,
              fullscreenButton: _ctx.fullscreenButton,
              fullscreenElement: _ctx.fullscreenElement,
              infoBox: _ctx.infoBox,
              showCredit: _ctx.showCredit,
              onReady: _ctx.onViewerReady,
              onLeftClick: _ctx.onLeftClick
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_navigation, {
                  offset: _ctx.offset,
                  onCompassEvt: _ctx.onNavigationEvt,
                  otherOpts: _ctx.otherOpts,
                  onZoomEvt: _ctx.onNavigationEvt
                }, null, 8, ["offset", "onCompassEvt", "otherOpts", "onZoomEvt"]), _createVNode(_component_vc_entity, {
                  billboard: _ctx.billboard,
                  "onUpdate:billboard": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.billboard = $event;
                  }),
                  ref: "entity",
                  onClick: _ctx.onEntityClick,
                  position: {
                    lng: 108,
                    lat: 32
                  },
                  point: _ctx.point,
                  label: _ctx.label
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_billboard, {
                      ref: "billboard",
                      image: "https://zouyaoji.top/vue-cesium/favicon.png"
                    }, null, 512)];
                  }),
                  _: 1
                }, 8, ["billboard", "onClick", "point", "label"])];
              }),
              _: 1
            }, 8, ["animation", "baseLayerPicker", "timeline", "fullscreenButton", "fullscreenElement", "infoBox", "showCredit", "onReady", "onLeftClick"]), _createVNode(_component_el_row, {
              class: "demo-toolbar"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_row, null, {
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
                }), !_ctx.loading ? (_openBlock(), _createBlock(_component_el_row, {
                  key: 0
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_switch, {
                      modelValue: _ctx.animation,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                        return _ctx.animation = $event;
                      }),
                      "active-color": "#13ce66",
                      "inactive-text": "动画"
                    }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
                      modelValue: _ctx.timeline,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                        return _ctx.timeline = $event;
                      }),
                      "active-color": "#13ce66",
                      "inactive-text": "时间轴"
                    }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
                      modelValue: _ctx.baseLayerPicker,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                        return _ctx.baseLayerPicker = $event;
                      }),
                      "active-color": "#13ce66",
                      "inactive-text": "基础图层"
                    }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
                      modelValue: _ctx.fullscreenButton,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                        return _ctx.fullscreenButton = $event;
                      }),
                      "active-color": "#13ce66",
                      "inactive-text": "全屏按钮"
                    }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
                      modelValue: _ctx.infoBox,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                        return _ctx.infoBox = $event;
                      }),
                      "active-color": "#13ce66",
                      "inactive-text": "信息提示框"
                    }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
                      modelValue: _ctx.showCredit,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
                        return _ctx.showCredit = $event;
                      }),
                      "active-color": "#13ce66",
                      "inactive-text": "版权信息"
                    }, null, 8, ["modelValue"])];
                  }),
                  _: 1
                })) : _createCommentVNode("", true)];
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
            loading: true,
            animation: true,
            timeline: true,
            baseLayerPicker: false,
            fullscreenButton: true,
            infoBox: true,
            showCredit: true,
            fullscreenElement: document.body,
            point: {
              pixelSize: 28
            },
            label: {
              text: 'Hello World',
              pixelOffset: [0, 150]
            },
            billboard: {},
            offset: [10, 25],
            otherOpts: {
              offset: [0, 32],
              position: 'bottom-right'
            }
          };
        },
        watch: {
          timeline: function timeline(val) {
            this.otherOpts.offset = val ? [0, 30] : this.fullscreenButton ? [30, 5] : [0, 5];
          },
          fullscreenButton: function fullscreenButton(val) {
            if (!this.timeline && !val) {
              this.otherOpts.offset = [0, 5];
            } else if (!this.timeline && val) {
              this.otherOpts.offset = [30, 5];
            }
          }
        },
        mounted: function mounted() {
          this.$refs.vcViewer.createPromise.then(function (_ref) {
            var Cesium = _ref.Cesium,
                viewer = _ref.viewer;
            console.log('viewer is loaded.');
          });
        },
        methods: {
          onViewerReady: function onViewerReady(_ref2) {
            var Cesium = _ref2.Cesium,
                viewer = _ref2.viewer;
            this.loading = false;
          },
          onNavigationEvt: function onNavigationEvt(e) {
            console.log(e);
          },
          onEntityClick: function onEntityClick(e) {
            console.log(e);
          },
          onLeftClick: function onLeftClick(e) {
            console.log(e);
          },
          load: function load() {
            var _this = this;

            this.$refs.vcViewer.load().then(function (e) {
              console.log(e);
              _this.loading = false;
            });
          },
          unload: function unload() {
            var _this2 = this;

            this.$refs.vcViewer.unload().then(function (e) {
              console.log(e);
              _this2.loading = true;
            });
          },
          reload: function reload() {
            var _this3 = this;

            this.loading = true;
            this.$refs.vcViewer.reload().then(function (e) {
              console.log(e);
              _this3.loading = false;
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/vc-viewer.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/vc-viewer.md



vc_viewervue_type_script_lang_ts.render = vc_viewervue_type_template_id_5c38651d_render

/* harmony default export */ var vc_viewer = __webpack_exports__["default"] = (vc_viewervue_type_script_lang_ts);

/***/ })

}]);