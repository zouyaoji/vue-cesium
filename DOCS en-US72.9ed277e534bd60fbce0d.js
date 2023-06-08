(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/primitives/vc-primitive-cluster.md?vue&type=template&id=3bf760e6

const vc_primitive_clustervue_type_template_id_3bf760e6_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_primitive_clustervue_type_template_id_3bf760e6_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPrimitiveCluster ");

const vc_primitive_clustervue_type_template_id_3bf760e6_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Clustering points, billboards, labels with primitive API.", -1);

const vc_primitive_clustervue_type_template_id_3bf760e6_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcPrimitiveCluster component.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("uses the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive-cluster"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add billboard and cluster.")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-collection-primitive>\n      <vc-primitive-cluster\n        ref=\"primitiveClusterRef\"\n        :show=\"show\"\n        :enabled=\"enabled\"\n        v-if=\"billboards.length\"\n        :billboards=\"billboards\"\n        :minimum-cluster-size=\"minimumClusterSize\"\n        @cluster-event=\"onClusterEvent\"\n        @click=\"onClicked\"\n      ></vc-primitive-cluster>\n    </vc-collection-primitive>\n\n    <vc-selection-indicator ref=\"indicatorRef\" @pickEvt=\"pickEvt\"></vc-selection-indicator>\n    <!-- lanel -->\n    <vc-layer-imagery :sort-order=\"20\">\n      <vc-imagery-provider-tianditu map-style=\"cva_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n    <vc-layer-imagery :sort-order=\"10\">\n      <vc-imagery-provider-tianditu map-style=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\" ref=\"provider\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n      <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n      <el-switch v-model=\"show\" active-color=\"#13ce66\" inactive-text=\"SHOW/HIDE\"> </el-switch>\n      <el-switch v-model=\"enabled\" active-color=\"#13ce66\" inactive-text=\"ENABLED/DISENABLED\"> </el-switch>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const show = ref(true)\n      const enabled = ref(true)\n      const billboards = ref([])\n      const primitiveClusterRef = ref(null)\n      const indicatorRef = ref(null)\n      const minimumClusterSize = ref(3)\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        primitiveClusterRef.value.unload()\n      }\n      const reload = () => {\n        primitiveClusterRef.value.reload()\n      }\n      const load = () => {\n        primitiveClusterRef.value.load()\n      }\n\n      const onViewerReady = ({ Cesium, viewer }) => {\n        Cesium.Resource.fetchJson('https://zouyaoji.top/vue-cesium/SampleData/json/schools.geojson').then(res => {\n          const { features } = res\n          for (let i = 0; i < features.length; i++) {\n            const feature = features[i]\n            const coordinates = feature.geometry.coordinates\n\n            billboards.value.push({\n              image: 'https://zouyaoji.top/vue-cesium/images/mark-icon.png',\n              width: 32,\n              height: 32,\n              position: [coordinates[0], coordinates[1]]\n            })\n          }\n        })\n      }\n\n      const onClusterEvent = (ids, cluster) => {\n        // 关闭自带的显示聚合数量的标签\n        // cluster.label.show = false\n        // cluster.billboard.show = true\n        // cluster.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM\n        // // 根据聚合数量的多少设置不同层级的图片以及大小\n        // // cluster.billboard.image = combineIconAndLabel('/images/school-icon.png', ids.length, 64)\n        // cluster.billboard.image = '/images/school-icon.png'\n        // cluster.billboard._imageHeight = 60\n        // cluster.billboard._imageWidth = 60\n        // cluster.billboard._dirty = false\n        // cluster.billboard.width = 40\n        // cluster.billboard.height = 40\n\n        cluster.billboard.show = true\n        cluster.label.show = false\n        cluster.billboard.id = cluster.label.id\n        cluster.billboard.verticalOrigin = Cesium.VerticalOrigin.CENTER\n        ids.length >= 300\n          ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/300+.png')\n          : ids.length >= 150\n          ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/150+.png')\n          : ids.length >= 90\n          ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/90+.png')\n          : ids.length >= 30\n          ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/30+.png')\n          : ids.length > 10\n          ? (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/10+.png')\n          : (cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/' + ids.length + '.png')\n      }\n\n      const combineIconAndLabel = (url, label, size) => {\n        let canvas = document.createElement('canvas')\n        canvas.width = size\n        canvas.height = size\n        let ctx = canvas.getContext('2d')\n\n        let promise = new Cesium.Resource.fetchImage(url).then(image => {\n          try {\n            ctx.drawImage(image, 0, 0)\n          } catch (e) {\n            console.log(e)\n          }\n\n          // font属性设置顺序：font-style, font-variant, font-weight, font-size, line-height, font-family\n          ctx.fillStyle = Cesium.Color.BLACK.toCssColorString()\n          ctx.font = 'bold 20px Microsoft YaHei'\n          ctx.textAlign = 'center'\n          ctx.textBaseline = 'middle'\n          ctx.fillText(label, size / 2, size / 2)\n\n          return canvas\n        })\n        return promise\n      }\n      const pickEvt = e => {\n        console.log(e)\n      }\n\n      return {\n        primitiveClusterRef,\n        show,\n        enabled,\n        unload,\n        reload,\n        load,\n        show,\n        onClicked,\n        onViewerReady,\n        billboards,\n        pickEvt,\n        indicatorRef,\n        onClusterEvent,\n        minimumClusterSize\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Type"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Description")])], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "show"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Determines if this primitive will be shown.")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "enabled"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Specify whether clustering is enabled.")])], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "pixelRange"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "80")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Specify the pixel range to extend the screen space bounding box.")])], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "minimumClusterSize"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "2")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Specify the minimum number of screen space objects that can be clustered.")])], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "clusterBillboards"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Specify whether clustering billboard primitive is enabled.")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "clusterLabels"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Specify whether clustering label primitive is enabled.")])], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "clusterPoints"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Specify whether clustering point primitive is enabled.")])], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "billboards", -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "VcBillboardProps[]", -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "[]")], -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional", -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Specify an array of billboard collections. The structure of the array object is the same as the attribute of the ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-billboard");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component.");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "labels", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "VcLabelProps[]", -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "[]")], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional", -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Specify an array of label collections. The structure of the array object is the same as the attribute of the ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-label");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component.");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "points", -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "VcPointProps[]", -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "[]")], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional", -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Specify an array of points collections. The structure of the array object is the same as the attribute of the ");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-point");

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component.");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "enableMouseEvent"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Specifies whether to respond to mouse pick events.")])], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse is pressed on this primitive.</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse bounces up on this primitive.</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks on the primitive.</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks outside the primitive.</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>Triggers when the left mouse button double-clicks the primitive.</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves on this primitive.</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves to this primitive.</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves out of this primitive.</td></tr></tbody></table>", 1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: ");

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("tingyuxuan2302/cesium-vue3-vite");

function vc_primitive_clustervue_type_template_id_3bf760e6_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_primitive_clustervue_type_template_id_3bf760e6_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcprimitivecluster",
    tabindex: "-1",
    content: "VcPrimitiveCluster",
    href: "#vcprimitivecluster",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_primitive_clustervue_type_template_id_3bf760e6_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcprimitivecluster"
    })]),
    _: 1
  }), vc_primitive_clustervue_type_template_id_3bf760e6_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_primitive_clustervue_type_template_id_3bf760e6_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("table", null, [_hoisted_9, Object(vue_esm_browser["createElementVNode"])("tbody", null, [_hoisted_10, _hoisted_11, _hoisted_12, _hoisted_13, _hoisted_14, _hoisted_15, _hoisted_16, Object(vue_esm_browser["createElementVNode"])("tr", null, [_hoisted_17, _hoisted_18, _hoisted_19, Object(vue_esm_browser["createElementVNode"])("td", null, [_hoisted_20, _hoisted_21, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/en-US/component/primitives/vc-collection-billboard#vcbillboard-props"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_22]),
    _: 1
  }), _hoisted_23])]), Object(vue_esm_browser["createElementVNode"])("tr", null, [_hoisted_24, _hoisted_25, _hoisted_26, Object(vue_esm_browser["createElementVNode"])("td", null, [_hoisted_27, _hoisted_28, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/en-US/component/primitives/vc-collection-label#vclabel-props"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_29]),
    _: 1
  }), _hoisted_30])]), Object(vue_esm_browser["createElementVNode"])("tr", null, [_hoisted_31, _hoisted_32, _hoisted_33, Object(vue_esm_browser["createElementVNode"])("td", null, [_hoisted_34, _hoisted_35, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/en-US/component/primitives/vc-collection-point#vcpoint-props"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_36]),
    _: 1
  }), _hoisted_37])]), _hoisted_38])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_39, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_41, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_42, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/tingyuxuan2302/cesium-vue3-vite/blob/github/src/utils/cesiumCtrl/primitiveCluster.js"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_43]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-cluster.md?vue&type=template&id=3bf760e6

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/primitives/vc-primitive-cluster.md?vue&type=script&lang=ts

/* harmony default export */ var vc_primitive_clustervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        openBlock: _openBlock,
        createBlock: _createBlock,
        createCommentVNode: _createCommentVNode,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createTextVNode: _createTextVNode,
        createElementVNode: _createElementVNode,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;
      const _hoisted_1 = {
        class: "demo-toolbar"
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Unload");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        const _component_vc_primitive_cluster = _resolveComponent("vc-primitive-cluster");

        const _component_vc_collection_primitive = _resolveComponent("vc-collection-primitive");

        const _component_vc_selection_indicator = _resolveComponent("vc-selection-indicator");

        const _component_vc_imagery_provider_tianditu = _resolveComponent("vc-imagery-provider-tianditu");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_switch = _resolveComponent("el-switch");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.onViewerReady
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_collection_primitive, null, {
              default: _withCtx(() => [_ctx.billboards.length ? (_openBlock(), _createBlock(_component_vc_primitive_cluster, {
                key: 0,
                ref: "primitiveClusterRef",
                show: _ctx.show,
                enabled: _ctx.enabled,
                billboards: _ctx.billboards,
                "minimum-cluster-size": _ctx.minimumClusterSize,
                onClusterEvent: _ctx.onClusterEvent,
                onClick: _ctx.onClicked
              }, null, 8, ["show", "enabled", "billboards", "minimum-cluster-size", "onClusterEvent", "onClick"])) : _createCommentVNode("", true)]),
              _: 1
            }), _createVNode(_component_vc_selection_indicator, {
              ref: "indicatorRef",
              onPickEvt: _ctx.pickEvt
            }, null, 8, ["onPickEvt"]), _createVNode(_component_vc_layer_imagery, {
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
          }, 8, ["onReady"]), _createElementVNode("div", _hoisted_1, [_createVNode(_component_el_row, null, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_switch, {
              modelValue: _ctx.show,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.show = $event),
              "active-color": "#13ce66",
              "inactive-text": "SHOW/HIDE"
            }, null, 8, ["modelValue"]), _createVNode(_component_el_switch, {
              modelValue: _ctx.enabled,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.enabled = $event),
              "active-color": "#13ce66",
              "inactive-text": "ENABLED/DISENABLED"
            }, null, 8, ["modelValue"])]),
            _: 1
          })])]),
          _: 1
        }, 512)]);
      }

      const {
        ref,
        reactive,
        getCurrentInstance,
        onMounted,
        watch
      } = vue_esm_browser;
      const democomponentExport = {
        setup() {
          // state
          const show = ref(true);
          const enabled = ref(true);
          const billboards = ref([]);
          const primitiveClusterRef = ref(null);
          const indicatorRef = ref(null);
          const minimumClusterSize = ref(3); // methods

          const onClicked = e => {
            console.log(e);
          };

          const unload = () => {
            primitiveClusterRef.value.unload();
          };

          const reload = () => {
            primitiveClusterRef.value.reload();
          };

          const load = () => {
            primitiveClusterRef.value.load();
          };

          const onViewerReady = _ref => {
            let {
              Cesium,
              viewer
            } = _ref;
            Cesium.Resource.fetchJson('https://zouyaoji.top/vue-cesium/SampleData/json/schools.geojson').then(res => {
              const {
                features
              } = res;

              for (let i = 0; i < features.length; i++) {
                const feature = features[i];
                const coordinates = feature.geometry.coordinates;
                billboards.value.push({
                  image: 'https://zouyaoji.top/vue-cesium/images/mark-icon.png',
                  width: 32,
                  height: 32,
                  position: [coordinates[0], coordinates[1]]
                });
              }
            });
          };

          const onClusterEvent = (ids, cluster) => {
            // 关闭自带的显示聚合数量的标签
            // cluster.label.show = false
            // cluster.billboard.show = true
            // cluster.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM
            // // 根据聚合数量的多少设置不同层级的图片以及大小
            // // cluster.billboard.image = combineIconAndLabel('/images/school-icon.png', ids.length, 64)
            // cluster.billboard.image = '/images/school-icon.png'
            // cluster.billboard._imageHeight = 60
            // cluster.billboard._imageWidth = 60
            // cluster.billboard._dirty = false
            // cluster.billboard.width = 40
            // cluster.billboard.height = 40
            cluster.billboard.show = true;
            cluster.label.show = false;
            cluster.billboard.id = cluster.label.id;
            cluster.billboard.verticalOrigin = Cesium.VerticalOrigin.CENTER;
            ids.length >= 300 ? cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/300+.png' : ids.length >= 150 ? cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/150+.png' : ids.length >= 90 ? cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/90+.png' : ids.length >= 30 ? cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/30+.png' : ids.length > 10 ? cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/10+.png' : cluster.billboard.image = 'https://zouyaoji.top/vue-cesium/SampleData/images/cluser/' + ids.length + '.png';
          };

          const combineIconAndLabel = (url, label, size) => {
            let canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            let ctx = canvas.getContext('2d');
            let promise = new Cesium.Resource.fetchImage(url).then(image => {
              try {
                ctx.drawImage(image, 0, 0);
              } catch (e) {
                console.log(e);
              } // font属性设置顺序：font-style, font-variant, font-weight, font-size, line-height, font-family


              ctx.fillStyle = Cesium.Color.BLACK.toCssColorString();
              ctx.font = 'bold 20px Microsoft YaHei';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText(label, size / 2, size / 2);
              return canvas;
            });
            return promise;
          };

          const pickEvt = e => {
            console.log(e);
          };

          return {
            primitiveClusterRef,
            show,
            enabled,
            unload,
            reload,
            load,
            show,
            onClicked,
            onViewerReady,
            billboards,
            pickEvt,
            indicatorRef,
            onClusterEvent,
            minimumClusterSize
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
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-cluster.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-cluster.md



vc_primitive_clustervue_type_script_lang_ts.render = vc_primitive_clustervue_type_template_id_3bf760e6_render

/* harmony default export */ var vc_primitive_cluster = __webpack_exports__["default"] = (vc_primitive_clustervue_type_script_lang_ts);

/***/ })

}]);