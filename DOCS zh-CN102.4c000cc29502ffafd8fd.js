(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[108],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/vc-viewer.md?vue&type=template&id=f3b1af9a

const vc_viewervue_type_template_id_f3b1af9a_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_viewervue_type_template_id_f3b1af9a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcViewer");

const vc_viewervue_type_template_id_f3b1af9a_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("构建 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 应用程序的基础组件，其实质是通过 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.Viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 初始化的一个 DOM 节点，用于挂载其他 DOM 节点或者子组件。")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("例子 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签和它的一些响应属性来初始化三维场景，并挂载 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-navigation"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 导航和 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实体组件，详细 API 请查阅它们的文档。")], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "此例使用 Vue 选项式 api 写法.")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer\n    v-if=\"show\"\n    ref=\"vcViewer\"\n    :animation=\"animation\"\n    :base-layer-picker=\"baseLayerPicker\"\n    :timeline=\"timeline\"\n    :fullscreen-button=\"fullscreenButton\"\n    :fullscreen-element=\"fullscreenElement\"\n    :info-box=\"infoBox\"\n    :skyAtmosphere=\"false\"\n    :skyBox=\"false\"\n    :scene-mode-picker=\"true\"\n    :show-credit=\"showCredit\"\n    @cesium-ready=\"onCesiumReady\"\n    @ready=\"onViewerReady\"\n    @left-click=\"onLeftClick\"\n    @touch-end=\"onTouchEnd\"\n    @destroyed=\"onDestroyed\"\n  >\n    <vc-navigation :offset=\"offset\" @compass-evt=\"onNavigationEvt\" :other-opts=\"otherOpts\" @zoom-evt=\"onNavigationEvt\"></vc-navigation>\n    <vc-entity @click=\"onEntityClick\" :position=\"{lng: 108, lat: 32}\" :point=\"point\" :label=\"label\">\n      <vc-graphics-billboard image=\"https://zouyaoji.top/vue-cesium/favicon.png\" :scale=\"0.5\"></vc-graphics-billboard>\n      <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n    </vc-entity>\n    <vc-layer-imagery>\n      <vc-imagery-provider-tianditu map-style=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n    <vc-layer-imagery ref=\"layerText\">\n      <vc-imagery-provider-tianditu map-style=\"cia_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n      <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    </el-row>\n    <el-row v-if=\"!loading\">\n      <el-switch v-model=\"animation\" active-color=\"#13ce66\" inactive-text=\"动画\"> </el-switch>\n      <el-switch v-model=\"timeline\" active-color=\"#13ce66\" inactive-text=\"时间轴\"> </el-switch>\n      <el-switch v-model=\"baseLayerPicker\" active-color=\"#13ce66\" inactive-text=\"基础图层\"> </el-switch>\n      <el-switch v-model=\"fullscreenButton\" active-color=\"#13ce66\" inactive-text=\"全屏按钮\"> </el-switch>\n      <el-switch v-model=\"infoBox\" active-color=\"#13ce66\" inactive-text=\"信息提示框\"> </el-switch>\n      <el-switch v-model=\"showCredit\" active-color=\"#13ce66\" inactive-text=\"版权信息\"> </el-switch>\n    </el-row>\n  </el-row>\n</el-row>\n\n<script>\n  import { watch, ref, onMounted } from 'vue'\n  export default {\n    setup() {\n      const loading = ref(false)\n      const animation = ref(true)\n      const timeline = ref(true)\n      const baseLayerPicker = ref(false)\n      const fullscreenButton = ref(true)\n      const infoBox = ref(true)\n      const showCredit = ref(true)\n      const fullscreenElement = document.body\n      const vcViewer = ref(null)\n      const point = ref({\n        pixelSize: 28,\n        color: 'red'\n      })\n      const label = ref({\n        text: 'Hello World',\n        pixelOffset: [0, 150]\n      })\n      const billboard = ref({})\n      const offset = ref([50, 25])\n      const otherOpts = ref({\n        offset: [0, 32],\n        position: 'bottom-right'\n      })\n      const show = ref(true)\n\n      watch(timeline, val => {\n        otherOpts.value.offset = val ? [0, 30] : fullscreenButton.value ? [30, 5] : [0, 5]\n      })\n\n      watch(fullscreenButton, val => {\n        if (!timeline.value && !val) {\n          otherOpts.value.offset = [0, 5]\n        } else if (!timeline.value && val) {\n          otherOpts.value.offset = [30, 5]\n        }\n      })\n\n      const onViewerReady = ({ Cesium, viewer, vm }) => {\n        console.log('viewer is loaded.', vm)\n        vm.vcMitt.on('destroyed', e => {\n          console.log('viewer is destroyed', e)\n        })\n        loading.value = false\n        viewer.scene.globe.enableLighting = true\n      }\n      const onCesiumReady = e => {\n        console.log(e)\n      }\n      const onNavigationEvt = e => {\n        console.log(e)\n      }\n      const onEntityClick = e => {\n        console.log(e)\n      }\n      const onLeftClick = e => {\n        console.log(e)\n      }\n      const onTouchEnd = e => {\n        console.log(e)\n      }\n      const onDestroyed = e => {\n        console.log('onDestroyed', e)\n      }\n      const load = () => {\n        // vcViewer.value.load().then(e => {\n        //   console.log(e)\n        //   loading.value = false\n        // })\n        show.value = true\n      }\n      const unload = () => {\n        // this.$refs.vcViewer.unload().then(e => {\n        //   console.log(e)\n        //   this.loading = true\n        // })\n        show.value = false\n      }\n      const reload = () => {\n        loading.value = true\n        vcViewer.value.reload().then(e => {\n          console.log(e)\n          loading.value = false\n        })\n      }\n\n      return {\n        loading,\n        animation,\n        timeline,\n        baseLayerPicker,\n        fullscreenButton,\n        infoBox,\n        showCredit,\n        fullscreenElement,\n        vcViewer,\n        point,\n        label,\n        billboard,\n        offset,\n        otherOpts,\n        show,\n        onViewerReady,\n        onCesiumReady,\n        onNavigationEvt,\n        onEntityClick,\n        onLeftClick,\n        onTouchEnd,\n        onDestroyed,\n        load,\n        unload,\n        reload\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "属性名"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "类型"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "默认值"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "描述"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "可选值")])], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "camera"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "VcCamera"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定初始化场景相机位置，默认在中国。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "showCredit"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定是否显示默认 Logo 和 加载数据版权信息。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "autoSortImageryLayers"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定添加影像图层时是否根据图层的 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "sortOrder"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 属性自动排序。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "removeCesiumScript"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件销毁时是否移除CesiumJS标签。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "enableMouseEvent"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定是否触发鼠标事件。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "skeleton"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean|VcSkeletonProps"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 初始化时是否显示骨架背景。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "touchHoldArg"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "'1000'"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定在触摸屏上 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 响应按下事件的时间延迟。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "TZcode"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Timeline 日期格式化所用时区代码。默认将 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Timeline"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 格式化为本地时间，如果要显示成 UTC 世界时，将 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "UTCoffset"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 设为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "new Date().getTimezoneOffset()"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 即可。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "UTCoffset"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 本地时间与UTC时间的时差（分钟）。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "accessToken", -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "string", -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, null, -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional", -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定 accessToken，使用Cesium ion的数据源需要到");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("https://cesium.com/ion/");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("申请一个账户，获取Access Token。");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, null, -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "cesiumPath"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定用于初始化 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件的 CesiumJS 库的 Web 服务地址。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "viewerCreator"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "VcViewerCreatorFunction"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定用于初始化 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件的 viewer 对象，当引入第三方库时可以用该参数来自定义 viewer 对象的初始化方式。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "containerId"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "'cesiumContainer'")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 容器 div 元素的 id。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "mars3dConfig"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Mars3dConfig"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 仅适用于 mars3d，指定用于初始化 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件的 mars3d 库的配置参数。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "animation"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 是否显示动画控件。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "baseLayerPicker"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 是否显示基础图层切换按钮。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "fullscreenButton"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 是否显示全屏切换按钮。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vrButton"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 是否显示 VR 功能按钮。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "geocoder"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean|Array<Cesium.GeocoderService>"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 是否显示地理编码器搜索框。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "homeButton"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 是否显示主页按钮。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "infoBox"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 是否显示信息框。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "sceneModePicker"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 是否显示场景模式切换按钮。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "selectionIndicator"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 是否显示选择指示符。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "timeline"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 是否显示时间轴控件。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "navigationHelpButton"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 是否显示导航帮助按钮。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "navigationInstructionsInitiallyVisible"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 是展开导航帮助面板，否点击navigationHelpButton才能展开面板。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "scene3DOnly"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 如果为true，则每个几何实例仅以3D形式呈现以节省GPU内存。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "shouldAnimate"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("true 是否开始时间模拟。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "clockViewModel"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Cesium.ClockViewModel"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("用于控制当前时间的时钟视图模型。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "selectedImageryProviderViewModel"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Cesium.ProviderViewModel"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 使用当前基础图像层的视图模型，如果没有提供第一个可用基础层。仅当"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "baseelayerpicker"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("设置为true时有效。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "terrainProviderViewModels"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Array<Cesium.ProviderViewModel>"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 为BaseAlayerPicker中提供可选择的ProviderViewModel数组。仅当"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "baseelayerpicker"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("设置为true时有效。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "imageryProvider"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Cesium.ImageryProvider"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定初始化时加载的影像。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vue-cesium"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 已经将默认的替换成引用 Cesium 资源自带的"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "NaturalEarthII"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 了。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "terrainProvider"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Cesium.TerrainProvider"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定初始化时加载的地形。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "skyBox"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Cesium.SkyBox|false"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定初始化时加载的天空盒。 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "undefined"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 是默认的星空背景，"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("则天空盒、太阳、月亮等都不会添加。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "skyAtmosphere"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Cesium.skyAtmosphere|false"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 蓝天，地球周围的光芒。设置为false以关闭它。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "fullscreenElement"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Element | string"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "document.body")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 按下全屏按钮时要放入全屏模式的元素或ID。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "useDefaultRenderLoop"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 是否开启默认的循环渲染控制。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "targetFrameRate"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 使用默认渲染循环时的目标帧速率。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "showRenderLoopErrors"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 如果设置为true，发生渲染循环错误时，将自动给用户显示一个包含错误信息的 HTML 面板。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "useBrowserRecommendedResolution"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 如果为true，则以浏览器建议的分辨率进行渲染，并忽略window.devicePixelRatio。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "automaticallyTrackDataSourceClocks"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 如果设置为true，将自动跟踪新添加数据源的时钟设置，如果数据源的时钟变更，则更新。如需单独设置时钟，请将此项设置为false。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "contextOptions"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "VcContextOptions"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Context and WebGL 创建属性与传递给Scene匹配的选项。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "sceneMode"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number|Cesium.SceneMode"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "3")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定场景模式。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "COLUMBUS_VIEW: 1, SCENE2D: 2, SCENE3D: 3")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "1/2/3")], -1);

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "mapProjection"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Cesium.MapProjection"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 使用2D和哥伦布视图模式使用的地图投影。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "globe"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Cesium.Globe|false"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 场景使用的地球。如果设置为false，则不会添加地球。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "orderIndependentTranslucency"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 如果此项设置为true，并且使用设备支持，将使用与顺序无关的半透明。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "creditContainer"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Element | string"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定包含CreditDisplay信息的DOM元素或ID。如若未指定，credit信息将添加到部件底部。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "creditViewport"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Element | string"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定包含CreditDisplay弹出框信息的DOM元素或ID。如若未指定，credit信息将添加到部件底部。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "dataSources"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Cesium.DataSourceCollection"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定初始化时加载的数据源集合。如果指定了数据源集合，"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 销毁时不会销毁它。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "terrainExaggeration"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "1.0")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("用于夸大地形的标量。请注意，设置地形夸张不会修改其它任何数据。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "shadows"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("确定阴影是否由太阳投射形成。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "terrainShadows"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number|Cesium.ShadowMode"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "3")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("确定地形是否反射或接受来自太阳的阴影。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "0/1/2/3")], -1);

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "mapMode2D"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number|Cesium.MapMode2D"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "1")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("确定二维地图是可旋转的或是可以在在水平方向上无限滚动。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "ROTATE: 0, INFINITE_SCROLL: 1")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "0/1")], -1);

const _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "projectionPicker"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("是否显示投影切换按钮。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "requestRenderMode"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("如果为true，则仅根据场景中的更改确定是否需要渲染帧。 启用可减少应用程序的CPU / GPU使用率，并减少移动设备上的电池消耗，但需要使用Scene＃requestRender在此模式下显式渲染新帧。 在API的其他部分对场景进行更改后，在许多情况下这是必要的。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "maximumRenderTimeChange"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "0.0")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("如果requestRenderMode为true，则此值定义在请求渲染之前允许的最大模拟时间更改。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_73 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_74 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th><th>来源</th></tr></thead><tbody><tr><td>cesiumReady</td><td>(e: typeof Cesium)</td><td>CesiumJS加载成功时触发。</td><td>-</td></tr><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td><td>-</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载完成时触发。</td><td>-</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td><td>-</td></tr><tr><td>viewerWidgetResized</td><td>(e: ViewerWidgetResizedEvent)</td><td>vc-viewer 上有部件发生变化时触发。</td><td>-</td></tr><tr><td>touchEnd</td><td>(e: any)</td><td>vc-viewer 上触摸长按结束时触发。</td><td>-</td></tr><tr><td>selectedEntityChanged</td><td>(entity: Cesium.Entity)</td><td>场景选中实体发生改变时触发此事件。事件参数表示选中的实体，或者undefined（未选中）</td><td>Viewer</td></tr><tr><td>trackedEntityChanged</td><td>(entity: Cesium.Entity)</td><td>场景跟踪实体发生改变时触发此事件。事件参数表示跟踪的实体。</td><td>Viewer</td></tr><tr><td>layerAdded</td><td>(imageryLayer: Cesium.ImageryLayer, index: number)</td><td>场景添加某影像图层后触发该事件。事件参数表示改图层和它的索引。</td><td>Viewer.imageryLayers</td></tr><tr><td>layerMoved</td><td>(imageryLayer: Cesium.ImageryLayer, newIndex: number, oldIndex: number)</td><td>场景某影像图层发生移动后触发该事件。事件参数表示该图层和它以前的索引以及新索引。</td><td>Viewer.imageryLayers</td></tr><tr><td>layerRemoved</td><td>(imageryLayer: Cesium.ImageryLayer, index: number)</td><td>场景移除某影像图层后触发该事件。事件参数表示该图层和它的索引。</td><td>Viewer.imageryLayers</td></tr><tr><td>layerShownOrHidden</td><td>(imageryLayer: Cesium.ImageryLayer, index: number, show: boolean)</td><td>场景中某图层可见性设置ImageryLayer#show发生改变时触发该事件。事件参数表示发生改变的图层，图层索引，以及图层是否可见。</td><td>iewer.imageryLayers</td></tr><tr><td>dataSourceAdded</td><td>(collection: Cesium.DataSourceCollection, dataSource: VcDatasource)</td><td>场景添加某数据源后触发该事件。事件参数表示该数据源。</td><td>Viewer.dataSources</td></tr><tr><td>dataSourceMoved</td><td>(dataSource: VcDatasource, newIndex: number, oldIndex: number)</td><td>场景移动某数据源后发生后触发该事件。事件参数表示该数据源和它以前的索引以及新索引。</td><td>Viewer.dataSources</td></tr><tr><td>dataSourceRemoved</td><td>(collection: Cesium.DataSourceCollection, dataSource: VcDatasource)</td><td>场景移除某数据源后触发该事件。事件参数表示该数据源。</td><td>Viewer.entities</td></tr><tr><td>collectionChanged</td><td>(collection: Cesium.EntityCollection, addedArray: Array&lt;Cesium.Entity&gt;, removedArray: Array&lt;Cesium.Entity&gt;, changedArray: Array&lt;Cesium.Entity&gt;)</td><td>场景实体集合添加、移除或者改变实体后触发该事件。事件参数表示该实体集合，以及添加的实体数组、移除的实体数组、改变的实体数组。</td><td>Viewer.entities</td></tr><tr><td>morphComplete</td><td>(transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean)</td><td>场景投影转换完成后触发该事件。事件参数是一个包含scene的对象。</td><td>Viewer.scene</td></tr><tr><td>morphStart</td><td>(transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean)</td><td>场景投影转换开始时触发该事件。事件参数是一个包含scene的对象。</td><td>Viewer.scene</td></tr><tr><td>postRender</td><td>(scene: Cesium.Scene, time: Cesium.JulianDate)</td><td>场景每帧渲染结束后触发该事件。事件参数是scene实例和当前时间。</td><td>Viewer.scene</td></tr><tr><td>preRender</td><td>(scene: Cesium.Scene, time: Cesium.JulianDate)</td><td>场景刷新后但在每帧渲染开始时触发该事件。事件参数是scene实例和当前时间。</td><td>Viewer.scene</td></tr><tr><td>postUpdate</td><td>(scene: Cesium.Scene, time: Cesium.JulianDate)</td><td>场景刷新后但在每帧渲染前触发该事件。事件参数是scene实例和当前时间。</td><td>Viewer.scene</td></tr><tr><td>preUpdate</td><td>(scene: Cesium.Scene, time: Cesium.JulianDate)</td><td>场景刷新或者渲染前触发该事件。事件参数是scene实例和当前时间。</td><td>Viewer.scene</td></tr><tr><td>renderError</td><td>(scene: Cesium.Scene, error: any)</td><td>场景抛出渲染异常时触发该事件。事件参数是scene实例和异常。</td><td>Viewer.scene</td></tr><tr><td>terrainProviderChanged</td><td>(provider: VcTerrainProvider)</td><td>场景地形提供者发生改变时触发该事件。</td><td>Viewer.scene</td></tr><tr><td>changed</td><td>(percent: number)</td><td>场景相机按percentageChanged设定比例改变后触发该事件。</td><td>Viewer.camera</td></tr><tr><td>moveEnd</td><td>()</td><td>场景相机停止移动后触发该事件。</td><td>Viewer.camera</td></tr><tr><td>moveStart</td><td>()</td><td>场景相机开始移动时触发该事件。</td><td>Viewer.camera</td></tr><tr><td>onStop</td><td>(clock: Cesium.Clock)</td><td>场景时钟每当到达停止时间时触发该事件。</td><td>Viewer.clock</td></tr><tr><td>onTick</td><td>(clock: Cesium.Clock)</td><td>场景时钟每当调用Clock#tick触发该事件。</td><td>Viewer.clock</td></tr><tr><td>errorEvent</td><td>(tileProviderError: any)</td><td>场景地形提供者遇到异步错误时触发该事件。</td><td>Viewer.terrainProvider</td></tr><tr><td>cameraClicked</td><td>(viewModel: Cesium.InfoBoxViewModel)</td><td>infoBox弹窗上点击相机事件。</td><td>Viewer.infoBox.viewModel</td></tr><tr><td>closeClicked</td><td>(viewModel: Cesium.InfoBoxViewModel)</td><td>infoBox弹窗关闭事件。</td><td>Viewer.infoBox.viewModel</td></tr><tr><td>leftClick</td><td>(evt: { position: Cesium.Cartesian2; })</td><td>鼠标左键单击事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>leftDoubleClick</td><td>(evt: { position: Cesium.Cartesian2; })</td><td>鼠标左键双击事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>leftDown</td><td>(evt: { position: Cesium.Cartesian2; })</td><td>鼠标左键按下事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>leftUp</td><td>(evt: { position: Cesium.Cartesian2; })</td><td>鼠标左键弹起事件</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>middleClick</td><td>(evt: { position: Cesium.Cartesian2; })</td><td>鼠标中键单击事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>middleDown</td><td>(evt: { position: Cesium.Cartesian2; })</td><td>鼠标中键按下事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>middleUp</td><td>(evt: { position: Cesium.Cartesian2; })</td><td>鼠标中键弹起事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>mouseMove</td><td>{startPosition: point, endPosition: point}</td><td>鼠标移动事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>pinchEnd</td><td>()</td><td>触摸设备双指操作结束事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>pinchMove</td><td>(evt: { distance: { startPosition: Cesium.Cartesian2; endPosition: Cesium.Cartesian2 } angleAndHeight: { startPosition: Cesium.Cartesian2 ;endPosition: Cesium.Cartesian2 }})</td><td>触摸设备双指操作移动事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>pinchStart</td><td>(evt: { position1: Cesium.Cartesian2; position2: Cesium.Cartesian2; })</td><td>触摸设备双指操作开始事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>rightClick</td><td>(evt: { position: Cesium.Cartesian2; })</td><td>鼠标右键单击事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>rightDown</td><td>(evt: { position: Cesium.Cartesian2; })</td><td>鼠标右键按下事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>rightUp</td><td>(evt: { position: Cesium.Cartesian2; })</td><td>鼠标弹起事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>wheel</td><td>(delta: number)</td><td>鼠标中轮滚动事件。</td><td>Viewer.screenSpaceEventHandler</td></tr><tr><td>imageryLayersUpdatedEvent</td><td>()</td><td>在添加，显示，隐藏，移动或删除图像图层时触发。</td><td>Viewer.scene.globe</td></tr><tr><td>tileLoadProgressEvent</td><td>(length: number)</td><td>获取自上一个渲染帧以来切片加载队列的长度发生更改时引发的事件。 当加载队列为空时，当前视图的所有地形和图像均已加载。 该事件将传递图块加载队列的新长度。</td><td>Viewer.scene.globe</td></tr></tbody></table>", 1);

const _hoisted_75 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("方法 ");

const _hoisted_76 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动加载组件。</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动重新加载组件。</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>手动卸载组件。</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>获取标志该组件是否创建成功的 Promise 对象。</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>获取该组件加载的 Cesium 对象。</td></tr></tbody></table>", 1);

const _hoisted_77 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("插槽 ");

const _hoisted_78 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "插槽名"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "描述"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "子组件")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vue-cesium 子组件均要放在vc-viewer下。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-navigation/vc-compass/vc-zoom-control/vc-print/vc-my-location/vc-location-bar/vc-distance-legend/vc-navigation-sm/vc-compass-sm/vc-zoom-control-sm/vc-layer-imagery/vc-entity/vc-terrain-provider-cesium/vc-terrain-provider-arcgis/vc-terrain-provider-tianditu/vc-datasource-custom/vc-datasource-czml/vc-datasource-geojson/vc-datasource-kml/vc-primitive/vc-primitive-classfication/vc-primitive-ground/vc-primitive-ground-polyline/vc-primitive-model/vc-primitive-tileset/vc-primitive-particle/vc-collection-billboard/vc-collection-label/vc-collection-point/vc-collection-polyline/vc-collection-primitive/vc-post-process-stage/vc-post-process-stage-scan/vc-post-process-stage-collection/vc-overlay-html/vc-overlay-heatmap/vc-overlay-wind/vc-overlay-echarts/vc-polygon")])])], -1);

const _hoisted_79 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("注意 ");

const _hoisted_80 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p><code>VueCesium</code> 的其他功能性组件，或由这些功能性组件构成的自定义组件，必须是 <code>VcViewer</code> 组件的子组件。</p><p>例如下面的代码是错误的：</p><pre class=\"example-code\"><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-viewer</span> @<span class=\"hljs-attr\">ready</span>=<span class=\"hljs-string\">&quot;onViewerReady&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-viewer</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">vc-entity</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">vc-entity</span>&gt;</span>\n    <span class=\"hljs-comment\">&lt;!-- 错误用法！ --&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n</code><span class=\"lang-mark\">html</span></pre>", 3);

const _hoisted_83 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考");

const _hoisted_84 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("官方文档： ");

const _hoisted_85 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Viewer");

function vc_viewervue_type_template_id_f3b1af9a_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_viewervue_type_template_id_f3b1af9a_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    content: "VcViewer",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_viewervue_type_template_id_f3b1af9a_hoisted_2]),
    _: 1
  }), vc_viewervue_type_template_id_f3b1af9a_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "li-zi",
    tabindex: "-1",
    content: "例子",
    href: "#li-zi",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#li-zi"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    tabindex: "-1",
    content: "属性",
    href: "#shu-xing",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("table", null, [_hoisted_9, Object(vue_esm_browser["createElementVNode"])("tbody", null, [_hoisted_10, _hoisted_11, _hoisted_12, _hoisted_13, _hoisted_14, _hoisted_15, _hoisted_16, _hoisted_17, _hoisted_18, Object(vue_esm_browser["createElementVNode"])("tr", null, [_hoisted_19, _hoisted_20, _hoisted_21, Object(vue_esm_browser["createElementVNode"])("td", null, [_hoisted_22, _hoisted_23, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/ion/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_24]),
    _: 1
  }), _hoisted_25]), _hoisted_26]), _hoisted_27, _hoisted_28, _hoisted_29, _hoisted_30, _hoisted_31, _hoisted_32, _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, _hoisted_39, _hoisted_40, _hoisted_41, _hoisted_42, _hoisted_43, _hoisted_44, _hoisted_45, _hoisted_46, _hoisted_47, _hoisted_48, _hoisted_49, _hoisted_50, _hoisted_51, _hoisted_52, _hoisted_53, _hoisted_54, _hoisted_55, _hoisted_56, _hoisted_57, _hoisted_58, _hoisted_59, _hoisted_60, _hoisted_61, _hoisted_62, _hoisted_63, _hoisted_64, _hoisted_65, _hoisted_66, _hoisted_67, _hoisted_68, _hoisted_69, _hoisted_70, _hoisted_71, _hoisted_72])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-jian",
    tabindex: "-1",
    content: "事件",
    href: "#shi-jian",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_73, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), _hoisted_74, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "fang-fa",
    tabindex: "-1",
    content: "方法",
    href: "#fang-fa",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_75, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fang-fa"
    })]),
    _: 1
  }), _hoisted_76, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "cha-cao",
    tabindex: "-1",
    content: "插槽",
    href: "#cha-cao",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_77, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cha-cao"
    })]),
    _: 1
  }), _hoisted_78, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "zhu-yi",
    tabindex: "-1",
    content: "注意",
    href: "#zhu-yi",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_79, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zhu-yi"
    })]),
    _: 1
  }), _hoisted_80, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    content: "参考",
    href: "",
    level: "1"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_83]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_84, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/Viewer.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_85]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/vc-viewer.md?vue&type=template&id=f3b1af9a

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/vc-viewer.md?vue&type=script&lang=ts

/* harmony default export */ var vc_viewervue_type_script_lang_ts = ({
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

      function render(_ctx, _cache) {
        const _component_vc_navigation = _resolveComponent("vc-navigation");

        const _component_vc_graphics_billboard = _resolveComponent("vc-graphics-billboard");

        const _component_vc_graphics_rectangle = _resolveComponent("vc-graphics-rectangle");

        const _component_vc_entity = _resolveComponent("vc-entity");

        const _component_vc_imagery_provider_tianditu = _resolveComponent("vc-imagery-provider-tianditu");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        const _component_el_switch = _resolveComponent("el-switch");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_ctx.show ? (_openBlock(), _createBlock(_component_vc_viewer, {
            key: 0,
            ref: "vcViewer",
            animation: _ctx.animation,
            "base-layer-picker": _ctx.baseLayerPicker,
            timeline: _ctx.timeline,
            "fullscreen-button": _ctx.fullscreenButton,
            "fullscreen-element": _ctx.fullscreenElement,
            "info-box": _ctx.infoBox,
            skyAtmosphere: false,
            skyBox: false,
            "scene-mode-picker": true,
            "show-credit": _ctx.showCredit,
            onCesiumReady: _ctx.onCesiumReady,
            onReady: _ctx.onViewerReady,
            onLeftClick: _ctx.onLeftClick,
            onTouchEnd: _ctx.onTouchEnd,
            onDestroyed: _ctx.onDestroyed
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_navigation, {
              offset: _ctx.offset,
              onCompassEvt: _ctx.onNavigationEvt,
              "other-opts": _ctx.otherOpts,
              onZoomEvt: _ctx.onNavigationEvt
            }, null, 8, ["offset", "onCompassEvt", "other-opts", "onZoomEvt"]), _createVNode(_component_vc_entity, {
              onClick: _ctx.onEntityClick,
              position: {
                lng: 108,
                lat: 32
              },
              point: _ctx.point,
              label: _ctx.label
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_billboard, {
                image: "https://zouyaoji.top/vue-cesium/favicon.png",
                scale: 0.5
              }, null, 8, ["scale"]), _createVNode(_component_vc_graphics_rectangle, {
                coordinates: [130, 20, 80, 25],
                material: "green"
              })]),
              _: 1
            }, 8, ["onClick", "point", "label"]), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_tianditu, {
                "map-style": "img_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            }), _createVNode(_component_vc_layer_imagery, {
              ref: "layerText"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_tianditu, {
                "map-style": "cia_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            }, 512)]),
            _: 1
          }, 8, ["animation", "base-layer-picker", "timeline", "fullscreen-button", "fullscreen-element", "info-box", "show-credit", "onCesiumReady", "onReady", "onLeftClick", "onTouchEnd", "onDestroyed"])) : _createCommentVNode("", true), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_row, null, {
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
            }), !_ctx.loading ? (_openBlock(), _createBlock(_component_el_row, {
              key: 0
            }, {
              default: _withCtx(() => [_createVNode(_component_el_switch, {
                modelValue: _ctx.animation,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.animation = $event),
                "active-color": "#13ce66",
                "inactive-text": "动画"
              }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
                modelValue: _ctx.timeline,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.timeline = $event),
                "active-color": "#13ce66",
                "inactive-text": "时间轴"
              }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
                modelValue: _ctx.baseLayerPicker,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.baseLayerPicker = $event),
                "active-color": "#13ce66",
                "inactive-text": "基础图层"
              }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
                modelValue: _ctx.fullscreenButton,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.fullscreenButton = $event),
                "active-color": "#13ce66",
                "inactive-text": "全屏按钮"
              }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
                modelValue: _ctx.infoBox,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.infoBox = $event),
                "active-color": "#13ce66",
                "inactive-text": "信息提示框"
              }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
                modelValue: _ctx.showCredit,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.showCredit = $event),
                "active-color": "#13ce66",
                "inactive-text": "版权信息"
              }, null, 8, ["modelValue"])]),
              _: 1
            })) : _createCommentVNode("", true)]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const {
        watch,
        ref,
        onMounted
      } = vue_esm_browser;
      const democomponentExport = {
        setup() {
          const loading = ref(false);
          const animation = ref(true);
          const timeline = ref(true);
          const baseLayerPicker = ref(false);
          const fullscreenButton = ref(true);
          const infoBox = ref(true);
          const showCredit = ref(true);
          const fullscreenElement = document.body;
          const vcViewer = ref(null);
          const point = ref({
            pixelSize: 28,
            color: 'red'
          });
          const label = ref({
            text: 'Hello World',
            pixelOffset: [0, 150]
          });
          const billboard = ref({});
          const offset = ref([50, 25]);
          const otherOpts = ref({
            offset: [0, 32],
            position: 'bottom-right'
          });
          const show = ref(true);
          watch(timeline, val => {
            otherOpts.value.offset = val ? [0, 30] : fullscreenButton.value ? [30, 5] : [0, 5];
          });
          watch(fullscreenButton, val => {
            if (!timeline.value && !val) {
              otherOpts.value.offset = [0, 5];
            } else if (!timeline.value && val) {
              otherOpts.value.offset = [30, 5];
            }
          });

          const onViewerReady = _ref => {
            let {
              Cesium,
              viewer,
              vm
            } = _ref;
            console.log('viewer is loaded.', vm);
            vm.vcMitt.on('destroyed', e => {
              console.log('viewer is destroyed', e);
            });
            loading.value = false;
            viewer.scene.globe.enableLighting = true;
          };

          const onCesiumReady = e => {
            console.log(e);
          };

          const onNavigationEvt = e => {
            console.log(e);
          };

          const onEntityClick = e => {
            console.log(e);
          };

          const onLeftClick = e => {
            console.log(e);
          };

          const onTouchEnd = e => {
            console.log(e);
          };

          const onDestroyed = e => {
            console.log('onDestroyed', e);
          };

          const load = () => {
            // vcViewer.value.load().then(e => {
            //   console.log(e)
            //   loading.value = false
            // })
            show.value = true;
          };

          const unload = () => {
            // this.$refs.vcViewer.unload().then(e => {
            //   console.log(e)
            //   this.loading = true
            // })
            show.value = false;
          };

          const reload = () => {
            loading.value = true;
            vcViewer.value.reload().then(e => {
              console.log(e);
              loading.value = false;
            });
          };

          return {
            loading,
            animation,
            timeline,
            baseLayerPicker,
            fullscreenButton,
            infoBox,
            showCredit,
            fullscreenElement,
            vcViewer,
            point,
            label,
            billboard,
            offset,
            otherOpts,
            show,
            onViewerReady,
            onCesiumReady,
            onNavigationEvt,
            onEntityClick,
            onLeftClick,
            onTouchEnd,
            onDestroyed,
            load,
            unload,
            reload
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/vc-viewer.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/vc-viewer.md



vc_viewervue_type_script_lang_ts.render = vc_viewervue_type_template_id_f3b1af9a_render

/* harmony default export */ var vc_viewer = __webpack_exports__["default"] = (vc_viewervue_type_script_lang_ts);

/***/ })

}]);