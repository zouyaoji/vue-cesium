(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_xtlouzbwsjm2tieu75n2ogelwy/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/vc-viewer.md?vue&type=template&id=128aefb4

const vc_viewervue_type_template_id_128aefb4_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_viewervue_type_template_id_128aefb4_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcViewer ");

const vc_viewervue_type_template_id_128aefb4_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>The basic component for building a <code>Cesium</code> application, which is essentially a DOM node initialized by <code>Cesium.Viewer</code>, which is used to mount other DOM nodes or subcomponents.The <code>Cesium</code> and <code>Viewer</code> instances returned from the <code>ready</code> event of <code>vc-viewer</code> are used for Cesium API development. You can also get the <code>creatingPromise</code> object of the component through the <code>ref</code> template reference to get the Viewer instance.</p><p><strong>Note:</strong> Other components of <code>vue-cesium</code> or custom components composed of them need to be placed under the <code>vc-viewer</code> component to load properly.</p>", 2);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag and some of its response properties to initialize the 3D earth, and mount the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-navigation"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" navigation and "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" entity component. For detailed API, please refer to their documentation.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer\n    ref=\"vcViewer\"\n    :animation=\"animation\"\n    :base-layer-picker=\"baseLayerPicker\"\n    :timeline=\"timeline\"\n    :fullscreen-button=\"fullscreenButton\"\n    :fullscreen-element=\"fullscreenElement\"\n    :info-box=\"infoBox\"\n    :show-credit=\"showCredit\"\n    @ready=\"onViewerReady\"\n    @left-click=\"onLeftClick\"\n  >\n    <vc-navigation :offset=\"offset\" @compass-evt=\"onNavigationEvt\" :other-opts=\"otherOpts\" @zoom-evt=\"onNavigationEvt\"></vc-navigation>\n    <vc-entity v-model:billboard=\"billboard\" ref=\"entity\" @click=\"onEntityClick\" :position=\"{lng: 108, lat: 32}\" :point=\"point\" :label=\"label\">\n      <vc-graphics-billboard ref=\"billboard\" image=\"https://zouyaoji.top/vue-cesium/favicon.png\"></vc-graphics-billboard>\n      <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n    </vc-entity>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">Destroy</el-button>\n      <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    </el-row>\n    <el-row v-if=\"!loading\">\n      <el-switch v-model=\"animation\" active-color=\"#13ce66\" inactive-text=\"Animation\"> </el-switch>\n      <el-switch v-model=\"timeline\" active-color=\"#13ce66\" inactive-text=\"Timeline\"> </el-switch>\n      <el-switch v-model=\"baseLayerPicker\" active-color=\"#13ce66\" inactive-text=\"BaseLayerPicker\"> </el-switch>\n      <el-switch v-model=\"fullscreenButton\" active-color=\"#13ce66\" inactive-text=\"FullscreenButton\"> </el-switch>\n      <el-switch v-model=\"infoBox\" active-color=\"#13ce66\" inactive-text=\"InfoBox\"> </el-switch>\n      <el-switch v-model=\"showCredit\" active-color=\"#13ce66\" inactive-text=\"Credit\"> </el-switch>\n    </el-row>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        loading: true,\n        animation: true,\n        timeline: true,\n        baseLayerPicker: false,\n        fullscreenButton: true,\n        infoBox: true,\n        showCredit: true,\n        fullscreenElement: document.body,\n        point: {\n          pixelSize: 28,\n          color: 'red'\n        },\n        label: {\n          text: 'Hello World',\n          pixelOffset: [0, 150]\n        },\n        billboard: {},\n        offset: [10, 25],\n        otherOpts: {\n          offset: [0, 32],\n          position: 'bottom-right'\n        }\n      }\n    },\n    watch: {\n      timeline(val) {\n        this.otherOpts.offset = val ? [0, 30] : this.fullscreenButton ? [30, 5] : [0, 5]\n      },\n      fullscreenButton(val) {\n        if (!this.timeline && !val) {\n          this.otherOpts.offset = [0, 5]\n        } else if (!this.timeline && val) {\n          this.otherOpts.offset = [30, 5]\n        }\n      }\n    },\n    mounted() {\n      this.$refs.vcViewer.creatingPromise.then(({ Cesium, viewer }) => {\n        console.log('viewer is loaded.')\n      })\n    },\n    methods: {\n      onViewerReady({ Cesium, viewer }) {\n        this.loading = false\n      },\n      onNavigationEvt(e) {\n        console.log(e)\n      },\n      onEntityClick(e) {\n        console.log(e)\n      },\n      onLeftClick(e) {\n        console.log(e)\n      },\n\n      load() {\n        this.$refs.vcViewer.load().then(e => {\n          console.log(e)\n          this.loading = false\n        })\n      },\n      unload() {\n        this.$refs.vcViewer.unload().then(e => {\n          console.log(e)\n          this.loading = true\n        })\n      },\n      reload() {\n        this.loading = true\n        this.$refs.vcViewer.reload().then(e => {\n          console.log(e)\n          this.loading = false\n        })\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Type"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Accepted Values")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "camera"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "VcCamera"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Scene camera position. Default positioning to China worldwide.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "showCredit"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Specify whether to display the default Logo and loading data copyright information.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "autoSortImageryLayers"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Specify whether to automatically sort imageLayers according to the layer's "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "sortOrder"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" property when adding imagelayer.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "removeCesiumScript"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Specify whether to remove the CesiumJS script tag when "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" is destroyed.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "enableMouseEvent"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Specifiy whether to trigger mouse events.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "skeleton"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean|VcSkeletonProps"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Specify whether to show the skeleton background during "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" initialization.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "touchHoldArg"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "'1000'"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Specify the time delay for "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to respond to press events on touchscreens.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "TZcode"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The time zone code used for timeline date formatting. By default, it is formatted as local time. If you want to display it as UTC universal time, set "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "UTCoffset"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "new Date().getTimezoneOffset()")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "UTCoffset"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The time difference (minutes) between local time and UTC time.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "accessToken", -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "string", -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, null, -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional", -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Specify the default ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Cesium ion");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" access token.");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, null, -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "cesiumPath"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Specify the web service address of the CesiumJS library used to initialize the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "viewerCreator"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "VcViewerCreatorFunction"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Specify the initialization method of the viewer when loading non-standard third-party Cesium libraries.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "containerId"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "'cesiumContainer'")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Specifies the id of the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" container div element.。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "mars3dConfig"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Mars3dConfig"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" For mars3d only, specifies configuration parameters for the mars3d library used to initialize the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "animation"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" If set to false, the Animation widget will not be created.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "baseLayerPicker"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" If set to false, the BaseLayerPicker widget will not be created.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "fullscreenButton"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" If set to false, the FullscreenButton widget will not be created.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vrButton"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" If set to true, the VRButton widget will be created.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "geocoder"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean|Array<Cesium.GeocoderService>"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" If set to false, the Geocoder widget will not be created.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "homeButton"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" If set to false, the HomeButton widget will not be created.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "infoBox"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" If set to false, the InfoBox widget will not be created.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "sceneModePicker"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" If set to false, the SceneModePicker widget will not be created.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "selectionIndicator"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" If set to false, the SelectionIndicator widget will not be created.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "timeline"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" If set to false, the Timeline widget will not be created.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "navigationHelpButton"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" If set to false, the navigation help button will not be created.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "navigationInstructionsInitiallyVisible"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" True if the navigation instructions should initially be visible, or false if the should not be shown until the user explicitly clicks the button.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "scene3DOnly"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" When true, each geometry instance will only be rendered in 3D to save GPU memory.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "shouldAnimate"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" true if the clock should attempt to advance simulation time by default, false otherwise.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "clockViewModel"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Object"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The clock view model to use to control current time.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "selectedImageryProviderViewModel"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Cesium.ProviderViewModel"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The view model for the current base imagery layer, if not supplied the first available base layer is used. This value is only valid if "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "baseLayerPicker"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" is set to true.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "terrainProviderViewModels"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Array<Cesium.ProviderViewModel>"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The array of ProviderViewModels to be selectable from the BaseLayerPicker. This value is only valid if "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "baseLayerPicker"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" is set to true.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "imageryProvider"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Cesium.ImageryProvider"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The imagery provider to use. This value is only valid if "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "baseLayerPicker"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" is set to false."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vue-cesium"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" has replaced the default one with "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "NaturalEarthII"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" that comes with Cesium resources.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "terrainProvider"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Cesium.TerrainProvider"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The terrain provider to use")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "skyBox"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Cesium.SkyBox|false"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The skybox used to render the stars. When undefined, the default stars are used. If set to false, no skyBox, Sun, or Moon will be added.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "skyAtmosphere"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Cesium.skyAtmosphere|false"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Blue sky, and the glow around the Earth's limb. Set to false to turn it off.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "fullscreenElement"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Element"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "document.body")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The element or id to be placed into fullscreen mode when the full screen button is pressed.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "useDefaultRenderLoop"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" True if this widget should control the render loop, false otherwise.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "targetFrameRate"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The target frame rate when using the default render loop.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "showRenderLoopErrors"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" If true, this widget will automatically display an HTML panel to the user containing the error, if a render loop error occurs.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "useBrowserRecommendedResolution"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" If true, render at the browser's recommended resolution and ignore window.devicePixelRatio.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "automaticallyTrackDataSourceClocks"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" If true, this widget will automatically track the clock settings of newly added DataSources, updating if the DataSource's clock changes. Set this to false if you want to configure the clock independently.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "contextOptions"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "VcContextOptions"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Context and WebGL creation properties corresponding to options passed to Scene.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "sceneMode"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number|Cesium.SceneMode"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "3")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The initial scene mode. "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "COLUMBUS_VIEW: 1, SCENE2D: 2, SCENE3D: 3")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "1/2/3")], -1);

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "mapProjection"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Cesium.MapProjection"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The map projection to use in 2D and Columbus View modes.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "globe"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Cesium.Globe|false"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The globe to use in the scene. If set to false, no globe will be added.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "orderIndependentTranslucency"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" If true and the configuration supports it, use order independent translucency.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "creditContainer"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Element | string"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The DOM element or ID that will contain the CreditDisplay. If not specified, the credits are added to the bottom of the widget itself.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "creditViewport"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Element | string"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The DOM element or ID that will contain the credit pop up created by the CreditDisplay. If not specified, it will appear over the widget itself.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "dataSources"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Cesium.DataSourceCollection"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The collection of data sources visualized by the widget. If this parameter is provided, the instance is assumed to be owned by the caller and will not be destroyed when the viewer is destroyed.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "terrainExaggeration"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "1.0")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" A scalar used to exaggerate the terrain. Note that terrain exaggeration will not modify any other primitive as they are positioned relative to the ellipsoid.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "shadows"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Determines if shadows are cast by the sun.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "terrainShadows"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number|Cesium.ShadowMode"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "3")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Determines if the terrain casts or receives shadows from the sun."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "0/1/2/3")], -1);

const _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "mapMode2D"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number|Cesium.MapMode2D"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "1")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Determines if the 2D map is rotatable or can be scrolled infinitely in the horizontal direction."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "ROTATE: 0, INFINITE_SCROLL: 1")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "0/1")], -1);

const _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "projectionPicker"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" If set to true, the ProjectionPicker widget will be created.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "requestRenderMode"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" If true, rendering a frame will only occur when needed as determined by changes within the scene. Enabling reduces the CPU/GPU usage of your application and uses less battery on mobile, but requires using Scene#requestRender to render a new frame explicitly in this mode. This will be necessary in many cases after making changes to the scene in other parts of the API. See Improving Performance with Explicit Rendering.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_73 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "maximumRenderTimeChange"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "0.0")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" If requestRenderMode is true, this value defines the maximum change in simulation time allowed before a render is requested. See Improving Performance with Explicit Rendering.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_74 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_75 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th><th>Source</th></tr></thead><tbody><tr><td>cesiumReady</td><td>(e: typeof Cesium)</td><td>Triggers when CesiumJS is successfully loaded.</td><td>-</td></tr><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before vc-viewer is loaded.</td><td>-</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when vc-viewer is successfully loaded.</td><td>-</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when vc-viewer is destroyed.</td><td>-</td></tr><tr><td>viewerWidgetResized</td><td>(e: ViewerWidgetResizedEvent)</td><td>Triggers when a component changes on vc-viewer.</td><td>-</td></tr><tr><td>touchEnd</td><td>(e: any)</td><td>Triggers when the vc-viewer touch ends..</td><td>-</td></tr><tr><td>selectedEntityChanged</td><td>(entity: Cesium.Entity)</td><td>Triggers when the selected entity changes.</td><td>Viewer</td></tr><tr><td>trackedEntityChanged</td><td>(entity: Cesium.Entity)</td><td>Triggers when the tracked entity changes.</td><td>Viewer</td></tr><tr><td>layerAdded</td><td>(imageryLayer: Cesium.ImageryLayer, index: number)</td><td>Triggers when a layer is added to the collection. Event handlers are passed the layer that was added and the index at which it was added.</td><td>Viewer.imageryLayers</td></tr><tr><td>layerMoved</td><td>(imageryLayer: Cesium.ImageryLayer, newIndex: number, oldIndex: number)</td><td>Triggers when a layer changes position in the collection. Event handlers are passed the layer that was moved, its new index after the move, and its old index prior to the move.</td><td>Viewer.imageryLayers</td></tr><tr><td>layerRemoved</td><td>(imageryLayer: Cesium.ImageryLayer, index: number)</td><td>Triggers when a layer is removed from the collection. Event handlers are passed the layer that was removed and the index from which it was removed.</td><td>Viewer.imageryLayers</td></tr><tr><td>layerShownOrHidden</td><td>(imageryLayer: Cesium.ImageryLayer, index: number, show: boolean)</td><td>Triggers when a layer is shown or hidden by setting the ImageryLayer#show property. Event handlers are passed a reference to this layer, the index of the layer in the collection, and a flag that is true if the layer is now shown or false if it is now hidden.</td><td>iewer.imageryLayers</td></tr><tr><td>dataSourceAdded</td><td>(collection: Cesium.DataSourceCollection, dataSource: VcDatasource)</td><td>Triggers when a data source is added to the collection. Event handlers are passed the data source that was added.</td><td>Viewer.dataSources</td></tr><tr><td>dataSourceMoved</td><td>(dataSource: VcDatasource, newIndex: number, oldIndex: number)</td><td>Triggers when a data source changes position in the collection. Event handlers are passed the data source that was moved, its new index after the move, and its old index prior to the move.</td><td>Viewer.dataSources</td></tr><tr><td>dataSourceRemoved</td><td>(collection: Cesium.DataSourceCollection, dataSource: VcDatasource)</td><td>Triggers when a data source is removed from the collection. Event handlers are passed the data source that was removed.</td><td>Viewer.entities</td></tr><tr><td>collectionChanged</td><td>(collection: Cesium.EntityCollection, addedArray: Array&lt;Cesium.Entity&gt;, removedArray: Array&lt;Cesium.Entity&gt;, changedArray: Array&lt;Cesium.Entity&gt;)</td><td>Triggers when when entities are added or removed from the collection. The generated event is a EntityCollection.collectionChangedEventCallback.</td><td>Viewer.entities</td></tr><tr><td>morphComplete</td><td>(transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean)</td><td>Triggers at the completion of a scene transition.</td><td>Viewer.scene</td></tr><tr><td>morphStart</td><td>(transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean)</td><td>Triggers at the beginning of a scene transition.</td><td>Viewer.scene</td></tr><tr><td>postRender</td><td>(scene: Cesium.Scene, time: Cesium.JulianDate)</td><td>Triggers immediately after the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.</td><td>Viewer.scene</td></tr><tr><td>preRender</td><td>(scene: Cesium.Scene, time: Cesium.JulianDate)</td><td>Triggers after the scene is updated and immediately before the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.</td><td>Viewer.scene</td></tr><tr><td>postUpdate</td><td>(scene: Cesium.Scene, time: Cesium.JulianDate)</td><td>Triggers immediately after the scene is updated and before the scene is rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.</td><td>Viewer.scene</td></tr><tr><td>preUpdate</td><td>(scene: Cesium.Scene, time: Cesium.JulianDate)</td><td>Triggers before the scene is updated or rendered. Subscribers to the event receive the Scene instance as the first parameter and the current time as the second parameter.</td><td>Viewer.scene</td></tr><tr><td>renderError</td><td>(scene: Cesium.Scene, error: any)</td><td>Triggers when an error is thrown inside the render function. The Scene instance and the thrown error are the only two parameters passed to the event handler. By default, errors are not rethrown after this event is raised, but that can be changed by setting the rethrowRenderErrors property.</td><td>Viewer.scene</td></tr><tr><td>terrainProviderChanged</td><td>(provider: VcTerrainProvider)</td><td>Triggers when the terrain provider is changed.</td><td>Viewer.scene</td></tr><tr><td>changed</td><td>(percent: number)</td><td>Triggers when the camera has changed by percentageChanged.</td><td>Viewer.camera</td></tr><tr><td>moveEnd</td><td>()</td><td>Triggers when the camera has stopped moving.</td><td>Viewer.camera</td></tr><tr><td>moveStart</td><td>()</td><td>Triggers when the camera starts to move.</td><td>Viewer.camera</td></tr><tr><td>onStop</td><td>(clock: Cesium.Clock)</td><td>Triggers when Clock#stopTime is reached.</td><td>Viewer.clock</td></tr><tr><td>onTick</td><td>(clock: Cesium.Clock)</td><td>Triggers when Clock#tick is called.</td><td>Viewer.clock</td></tr><tr><td>errorEvent</td><td>(tileProviderError: any)</td><td>Triggers when the terrain provider encounters an asynchronous error. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError.</td><td>Viewer.terrainProvider</td></tr><tr><td>cameraClicked</td><td>(viewModel: Cesium.InfoBoxViewModel)</td><td>Triggers when the user clicks the camera icon.</td><td>Viewer.infoBox.viewModel</td></tr><tr><td>closeClicked</td><td>(viewModel: Cesium.InfoBoxViewModel)</td><td>Triggers when the user closes the info box.</td><td>Viewer.infoBox.viewModel</td></tr><tr><td>leftClick</td><td>(evt: { position: Cesium.Cartesian2; })</td><td>Triggers when the mouse left button clicked.</td><td>ScreenSpaceEventType</td></tr><tr><td>leftDoubleClick</td><td>(evt: { position: Cesium.Cartesian2; })</td><td>Triggered when the mouse left button double clicked.</td><td>ScreenSpaceEventType</td></tr><tr><td>leftDown</td><td>(evt: { position: Cesium.Cartesian2; })</td><td>Triggered when the mouse left button down.</td><td>ScreenSpaceEventType</td></tr><tr><td>leftUp</td><td>(evt: { position: Cesium.Cartesian2; })</td><td>Triggered when the mouse left button up.</td><td>ScreenSpaceEventType</td></tr><tr><td>middleClick</td><td>(evt: { position: Cesium.Cartesian2; })</td><td>Triggers when the mouse middle button clicked.</td><td>ScreenSpaceEventType</td></tr><tr><td>middleDown</td><td>(evt: { position: Cesium.Cartesian2; })</td><td>Triggers when the mouse middle button down.</td><td>ScreenSpaceEventType</td></tr><tr><td>middleUp</td><td>(evt: { position: Cesium.Cartesian2; })</td><td>Triggers when the mouse middle button up.</td><td>ScreenSpaceEventType</td></tr><tr><td>mouseMove</td><td>{startPosition: point, endPosition: point}</td><td>Triggers when the mouse move.</td><td>ScreenSpaceEventType</td></tr><tr><td>pinchEnd</td><td>()</td><td>Triggers when end of a two-finger on a touch surface.</td><td>ScreenSpaceEventType</td></tr><tr><td>pinchMove</td><td>(evt: { distance: { startPosition: Cesium.Cartesian2; endPosition: Cesium.Cartesian2 } angleAndHeight: { startPosition: Cesium.Cartesian2 ;endPosition: Cesium.Cartesian2 }})</td><td>Triggers when a change of a two-finger on a touch surface.</td><td>ScreenSpaceEventType</td></tr><tr><td>pinchStart</td><td>(evt: { position1: Cesium.Cartesian2; position2: Cesium.Cartesian2; })</td><td>Triggers when the start of a two-finger on a touch surface.</td><td>ScreenSpaceEventType</td></tr><tr><td>rightClick</td><td>(evt: { position: Cesium.Cartesian2; })</td><td>Triggers when the mouse right click.</td><td>ScreenSpaceEventType</td></tr><tr><td>rightDown</td><td>(evt: { position: Cesium.Cartesian2; })</td><td>Triggers when the mouse right button down.</td><td>ScreenSpaceEventType</td></tr><tr><td>rightUp</td><td>(evt: { position: Cesium.Cartesian2; })</td><td>Triggers when the mouse right button up.</td><td>ScreenSpaceEventType</td></tr><tr><td>wheel</td><td>(delta: number)</td><td>Triggers when the mouse wheel.</td><td>ScreenSpaceEventType</td></tr><tr><td>imageryLayersUpdatedEvent</td><td>()</td><td>Triggers when an imagery layer is added, shown, hidden, moved, or removed.</td><td>Viewer.scene.globe</td></tr><tr><td>tileLoadProgressEvent</td><td>(length: number)</td><td>Triggers when the length of the tile load queue has changed since the last render frame. When the load queue is empty, all terrain and imagery for the current view have been loaded. The event passes the new length of the tile load queue.</td><td>Viewer.scene.globe</td></tr></tbody></table>", 1);

const _hoisted_76 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Methods ");

const _hoisted_77 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Load components manually.</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Reload components manually.</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>Destroy the loaded component manually.</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>Get the creatingPromise.</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>Get the Cesium object loaded by this component.</td></tr></tbody></table>", 1);

const _hoisted_78 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Slots ");

const _hoisted_79 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Subtags")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "This is where vue-cesium sub tags content goes."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-navigation/vc-compass/vc-zoom-control/vc-print/vc-my-location/vc-location-bar/vc-distance-legend/vc-navigation-sm/vc-compass-sm/vc-zoom-control-sm/vc-layer-imagery/vc-entity/vc-terrain-provider-cesium/vc-terrain-provider-arcgis/vc-terrain-provider-tianditu/vc-datasource-custom/vc-datasource-czml/vc-datasource-geojson/vc-datasource-kml/vc-primitive/vc-primitive-classfication/vc-primitive-ground/vc-primitive-ground-polyline/vc-primitive-model/vc-primitive-tileset/vc-primitive-particle/vc-collection-billboard/vc-collection-label/vc-collection-point/vc-collection-polyline/vc-collection-primitive/vc-post-process-stage/vc-post-process-stage-scan/vc-post-process-stage-collection/vc-overlay-html/vc-overlay-heatmap/vc-overlay-wind/vc-overlay-echarts/vc-polygon")])])], -1);

const _hoisted_80 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_81 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: ");

const _hoisted_82 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Viewer");

function vc_viewervue_type_template_id_128aefb4_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_viewervue_type_template_id_128aefb4_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcviewer",
    tabindex: "-1",
    content: "VcViewer",
    href: "#vcviewer",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_viewervue_type_template_id_128aefb4_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcviewer"
    })]),
    _: 1
  }), vc_viewervue_type_template_id_128aefb4_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("table", null, [_hoisted_10, Object(vue_esm_browser["createElementVNode"])("tbody", null, [_hoisted_11, _hoisted_12, _hoisted_13, _hoisted_14, _hoisted_15, _hoisted_16, _hoisted_17, _hoisted_18, _hoisted_19, Object(vue_esm_browser["createElementVNode"])("tr", null, [_hoisted_20, _hoisted_21, _hoisted_22, Object(vue_esm_browser["createElementVNode"])("td", null, [_hoisted_23, _hoisted_24, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/ion/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_25]),
    _: 1
  }), _hoisted_26]), _hoisted_27]), _hoisted_28, _hoisted_29, _hoisted_30, _hoisted_31, _hoisted_32, _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, _hoisted_39, _hoisted_40, _hoisted_41, _hoisted_42, _hoisted_43, _hoisted_44, _hoisted_45, _hoisted_46, _hoisted_47, _hoisted_48, _hoisted_49, _hoisted_50, _hoisted_51, _hoisted_52, _hoisted_53, _hoisted_54, _hoisted_55, _hoisted_56, _hoisted_57, _hoisted_58, _hoisted_59, _hoisted_60, _hoisted_61, _hoisted_62, _hoisted_63, _hoisted_64, _hoisted_65, _hoisted_66, _hoisted_67, _hoisted_68, _hoisted_69, _hoisted_70, _hoisted_71, _hoisted_72, _hoisted_73])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_74, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_75, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "methods",
    tabindex: "-1",
    content: "Methods",
    href: "#methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_76, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#methods"
    })]),
    _: 1
  }), _hoisted_77, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "slots",
    tabindex: "-1",
    content: "Slots",
    href: "#slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_78, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slots"
    })]),
    _: 1
  }), _hoisted_79, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_80, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_81, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/Viewer.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_82]),
    _: 1
  })])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/vc-viewer.md?vue&type=template&id=128aefb4

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_xtlouzbwsjm2tieu75n2ogelwy/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/vc-viewer.md?vue&type=script&lang=ts

/* harmony default export */ var vc_viewervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createBlock: _createBlock,
        createCommentVNode: _createCommentVNode,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Destroy");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        const _component_vc_navigation = _resolveComponent("vc-navigation");

        const _component_vc_graphics_billboard = _resolveComponent("vc-graphics-billboard");

        const _component_vc_graphics_rectangle = _resolveComponent("vc-graphics-rectangle");

        const _component_vc_entity = _resolveComponent("vc-entity");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        const _component_el_switch = _resolveComponent("el-switch");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            ref: "vcViewer",
            animation: _ctx.animation,
            "base-layer-picker": _ctx.baseLayerPicker,
            timeline: _ctx.timeline,
            "fullscreen-button": _ctx.fullscreenButton,
            "fullscreen-element": _ctx.fullscreenElement,
            "info-box": _ctx.infoBox,
            "show-credit": _ctx.showCredit,
            onReady: _ctx.onViewerReady,
            onLeftClick: _ctx.onLeftClick
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_navigation, {
              offset: _ctx.offset,
              onCompassEvt: _ctx.onNavigationEvt,
              "other-opts": _ctx.otherOpts,
              onZoomEvt: _ctx.onNavigationEvt
            }, null, 8, ["offset", "onCompassEvt", "other-opts", "onZoomEvt"]), _createVNode(_component_vc_entity, {
              billboard: _ctx.billboard,
              "onUpdate:billboard": _cache[0] || (_cache[0] = $event => _ctx.billboard = $event),
              ref: "entity",
              onClick: _ctx.onEntityClick,
              position: {
                lng: 108,
                lat: 32
              },
              point: _ctx.point,
              label: _ctx.label
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_billboard, {
                ref: "billboard",
                image: "https://zouyaoji.top/vue-cesium/favicon.png"
              }, null, 512), _createVNode(_component_vc_graphics_rectangle, {
                coordinates: [130, 20, 80, 25],
                material: "green"
              })]),
              _: 1
            }, 8, ["billboard", "onClick", "point", "label"])]),
            _: 1
          }, 8, ["animation", "base-layer-picker", "timeline", "fullscreen-button", "fullscreen-element", "info-box", "show-credit", "onReady", "onLeftClick"]), _createVNode(_component_el_row, {
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
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.animation = $event),
                "active-color": "#13ce66",
                "inactive-text": "Animation"
              }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
                modelValue: _ctx.timeline,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.timeline = $event),
                "active-color": "#13ce66",
                "inactive-text": "Timeline"
              }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
                modelValue: _ctx.baseLayerPicker,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.baseLayerPicker = $event),
                "active-color": "#13ce66",
                "inactive-text": "BaseLayerPicker"
              }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
                modelValue: _ctx.fullscreenButton,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.fullscreenButton = $event),
                "active-color": "#13ce66",
                "inactive-text": "FullscreenButton"
              }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
                modelValue: _ctx.infoBox,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.infoBox = $event),
                "active-color": "#13ce66",
                "inactive-text": "InfoBox"
              }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
                modelValue: _ctx.showCredit,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.showCredit = $event),
                "active-color": "#13ce66",
                "inactive-text": "Credit"
              }, null, 8, ["modelValue"])]),
              _: 1
            })) : _createCommentVNode("", true)]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const democomponentExport = {
        data() {
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
              pixelSize: 28,
              color: 'red'
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
          timeline(val) {
            this.otherOpts.offset = val ? [0, 30] : this.fullscreenButton ? [30, 5] : [0, 5];
          },

          fullscreenButton(val) {
            if (!this.timeline && !val) {
              this.otherOpts.offset = [0, 5];
            } else if (!this.timeline && val) {
              this.otherOpts.offset = [30, 5];
            }
          }

        },

        mounted() {
          this.$refs.vcViewer.creatingPromise.then(_ref => {
            let {
              Cesium,
              viewer
            } = _ref;
            console.log('viewer is loaded.');
          });
        },

        methods: {
          onViewerReady(_ref2) {
            let {
              Cesium,
              viewer
            } = _ref2;
            this.loading = false;
          },

          onNavigationEvt(e) {
            console.log(e);
          },

          onEntityClick(e) {
            console.log(e);
          },

          onLeftClick(e) {
            console.log(e);
          },

          load() {
            this.$refs.vcViewer.load().then(e => {
              console.log(e);
              this.loading = false;
            });
          },

          unload() {
            this.$refs.vcViewer.unload().then(e => {
              console.log(e);
              this.loading = true;
            });
          },

          reload() {
            this.loading = true;
            this.$refs.vcViewer.reload().then(e => {
              console.log(e);
              this.loading = false;
            });
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
// CONCATENATED MODULE: ./website/docs/en-US/vc-viewer.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/vc-viewer.md



vc_viewervue_type_script_lang_ts.render = vc_viewervue_type_template_id_128aefb4_render

/* harmony default export */ var vc_viewer = __webpack_exports__["default"] = (vc_viewervue_type_script_lang_ts);

/***/ })

}]);