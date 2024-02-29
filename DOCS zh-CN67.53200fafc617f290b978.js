(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[171],{

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-collection-cloud.md?vue&type=template&id=499a9fb2

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};
const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载积云图元集合，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.CloudCollection"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例。渲染多个积云图元时建议用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "clouds"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 属性表达。")], -1);
const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "积云图元集合组件的基础用法。", -1);
const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-cloud"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加积云图元集合对象。")])], -1);
const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-collection-cloud ref=\"cloudCollectionRef\" :clouds=\"clouds\">\n      <vc-cumulus-Cloud :position=\"[-122.6908, 45.496, 300]\" :maximumSize=\"{x: 50, y: 15, z: 13}\" :slice=\"0.3\" :scale=\"[1500,250]\"></vc-cumulus-Cloud>\n    </vc-collection-cloud>\n    <vc-layer-imagery>\n      <vc-imagery-provider-bing\n        ref=\"provider\"\n        bm-key=\"AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-\"\n        map-style=\"Aerial\"\n      ></vc-imagery-provider-bing>\n    </vc-layer-imagery>\n    <vc-selection-indicator ref=\"selectionIndicator\" @pick-evt=\"pickEvt\"></vc-selection-indicator>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const cloudCollectionRef = ref(null)\n      const clouds = ref([])\n      const instance = getCurrentInstance()\n      // methods\n      const unload = () => {\n        cloudCollectionRef.value.unload()\n      }\n      const reload = () => {\n        cloudCollectionRef.value.reload()\n      }\n      const load = () => {\n        cloudCollectionRef.value.load()\n      }\n      const onViewerReady = async ({ Cesium, viewer }) => {\n        window.viewer = viewer\n        const scene = viewer.scene\n        scene.primitives.add(await Cesium.createOsmBuildingsAsync())\n        // clouds.value.push({\n        //   position: [-122.6908, 45.496, 300],\n        //   scale: [1500, 250],\n        //   maximumSize: { x: 50, y: 15, z: 13 },\n        //   slice: 0.3\n        // })\n        clouds.value.push({\n          position: [-122.72, 45.5, 335],\n          scale: [1500, 300],\n          maximumSize: { x: 50, y: 12, z: 15 },\n          slice: 0.36\n        })\n        clouds.value.push({\n          position: [-122.72, 45.51, 260],\n          scale: [2000, 300],\n          maximumSize: { x: 50, y: 12, z: 15 },\n          slice: 0.49\n        })\n        clouds.value.push({\n          position: [-122.705, 45.52, 250],\n          scale: [230, 110],\n          maximumSize: { x: 13, y: 13, z: 13 },\n          slice: 0.2\n        })\n        clouds.value.push({\n          position: [-122.71, 45.522, 270],\n          scale: [1700, 300],\n          maximumSize: { x: 50, y: 12, z: 15 },\n          slice: 0.6\n        })\n        clouds.value.push({\n          position: [-122.705, 45.525, 250],\n          scale: [230, 110],\n          maximumSize: { x: 15, y: 13, z: 15 },\n          slice: 0.35\n        })\n        clouds.value.push({\n          position: [-122.721, 45.53, 220],\n          scale: [1500, 500],\n          maximumSize: { x: 30, y: 20, z: 17 },\n          slice: 0.45\n        })\n\n        viewer.scene.camera.flyTo({\n          destination: Cesium.Cartesian3.fromDegrees(-122.6515, 45.5252, 525),\n          orientation: {\n            heading: Cesium.Math.toRadians(-115),\n            pitch: Cesium.Math.toRadians(-12),\n            roll: 0.0\n          }\n        })\n      }\n\n      return {\n        unload,\n        reload,\n        load,\n        onViewerReady,\n        cloudCollectionRef,\n        clouds\n      }\n    }\n  }\n</script>\n")], -1);
const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定该积云图元集合是否显示。</td></tr><tr><td>noiseDetail</td><td>number</td><td><code>16.0</code></td><td><code>optional</code> 指定噪声纹理数值。</td></tr><tr><td>noiseOffset</td><td>VcPosition: VcPosition</td><td><code>{x: 0, y: 0, z: 0}</code></td><td><code>optional</code> 指定噪声纹理数值的平移参数。</td></tr><tr><td>debugBillboards</td><td>boolean</td><td><code>16.0</code></td><td><code>optional</code> 仅用于调试。确定广告牌是否以不透明颜色呈现。</td></tr><tr><td>debugEllipsoids</td><td>boolean</td><td><code>16.0</code></td><td><code>optional</code> 仅用于调试。确定云是否将作为不透明椭圆体呈现。</td></tr><tr><td>clouds</td><td>Array&lt;VcCumulusCloudProps&gt;</td><td><code>[]</code></td><td><code>optional</code> 指定积云集合数组。 数组对象结构与 <code>vc-cumulus-cloud</code> 组件属性相同。</td></tr></tbody></table>", 1);
const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr></tbody></table>", 1);
const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动加载组件。</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动重新加载组件。</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>手动卸载组件。</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>获取标志该组件是否创建成功的 Promise 对象。</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>获取该组件加载的 Cesium 对象。</td></tr></tbody></table>", 1);
const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "插槽名"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "描述"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "子组件")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "用于挂载 vc-cumulus-cloud 组件。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-cumulus-cloud")])])], -1);
const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载积云图元，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.CumulusCloud"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例。")], -1);
const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 需要作为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-cloud"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的子组件才能正常加载。")], -1);
const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>brightness</td><td>number</td><td><code>1.0</code></td><td><code>optional</code> 指定积云的亮度。</td><td></td></tr><tr><td>color</td><td>VcColor</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> 指定基于的颜色。</td><td></td></tr><tr><td>maximumSize</td><td>VcPosition</td><td></td><td><code>optional</code> 指定积云云的最大大小。</td><td></td></tr><tr><td>position</td><td>VcPosition</td><td></td><td><code>optional</code> 指定积云的位置。</td><td></td></tr><tr><td>scale</td><td>VcCartesian2</td><td></td><td><code>optional</code> 指定积云布告板的缩放。单位米。</td><td></td></tr><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定积云是否可见。</td><td></td></tr><tr><td>slice</td><td>number</td><td><code>-1.0</code></td><td><code>optional</code> 指定基于广告牌上的“切片”。</td><td></td></tr></tbody></table>", 1);
const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr></tbody></table>", 1);
const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动加载组件。</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动重新加载组件。</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>手动卸载组件。</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>获取标志该组件是否创建成功的 Promise 对象。</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>获取该组件加载的 Cesium 对象。</td></tr></tbody></table>", 1);
function vc_collection_cloudvue_type_template_id_499a9fb2_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");
  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");
  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");
  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");
  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccollectioncloud",
    tabindex: "-1",
    content: "VcCollectionCloud",
    href: "#vccollectioncloud",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcCollectionCloud "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccollectioncloud"
    })]),
    _: 1
  }), _hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("基础用法 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_4]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccollectioncloud-shu-xing",
    tabindex: "-1",
    content: "VcCollectionCloud 属性",
    href: "#vccollectioncloud-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcCollectionCloud 属性 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccollectioncloud-shu-xing"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccollectioncloud-shi-jian",
    tabindex: "-1",
    content: "VcCollectionCloud 事件",
    href: "#vccollectioncloud-shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcCollectionCloud 事件 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccollectioncloud-shi-jian"
    })]),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccollectioncloud-fang-fa",
    tabindex: "-1",
    content: "VcCollectionCloud 方法",
    href: "#vccollectioncloud-fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcCollectionCloud 方法 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccollectioncloud-fang-fa"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccollectioncloud-cha-cao",
    tabindex: "-1",
    content: "VcCollectionCloud 插槽",
    href: "#vccollectioncloud-cha-cao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcCollectionCloud 插槽 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccollectioncloud-cha-cao"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccumuluscloud",
    tabindex: "-1",
    content: "VcCumulusCloud",
    href: "#vccumuluscloud",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcCumulusCloud "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccumuluscloud"
    })]),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccumuluscloud-shu-xing",
    tabindex: "-1",
    content: "VcCumulusCloud 属性",
    href: "#vccumuluscloud-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcCumulusCloud 属性 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccumuluscloud-shu-xing"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccumuluscloud-shi-jian",
    tabindex: "-1",
    content: "VcCumulusCloud 事件",
    href: "#vccumuluscloud-shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcCumulusCloud 事件 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccumuluscloud-shi-jian"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccumuluscloud-fang-fa",
    tabindex: "-1",
    content: "VcCumulusCloud 方法",
    href: "#vccumuluscloud-fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcCumulusCloud 方法 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccumuluscloud-fang-fa"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "can-kao",
    tabindex: "-1",
    content: "参考",
    href: "#can-kao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("参考 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#can-kao"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createTextVNode"])("官方文档： "), Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/CloudCollection.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("CloudCollection")]),
    _: 1
  })]), Object(vue_esm_browser["createTextVNode"])("、"), Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/CumulusCloud.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("CumulusCloud")]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-cloud.md?vue&type=template&id=499a9fb2

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-collection-cloud.md?vue&type=script&lang=ts

/* harmony default export */ var vc_collection_cloudvue_type_script_lang_ts = ({
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
      function render(_ctx, _cache) {
        const _component_vc_cumulus_Cloud = _resolveComponent("vc-cumulus-Cloud");
        const _component_vc_collection_cloud = _resolveComponent("vc-collection-cloud");
        const _component_vc_imagery_provider_bing = _resolveComponent("vc-imagery-provider-bing");
        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");
        const _component_vc_selection_indicator = _resolveComponent("vc-selection-indicator");
        const _component_vc_viewer = _resolveComponent("vc-viewer");
        const _component_el_button = _resolveComponent("el-button");
        const _component_el_row = _resolveComponent("el-row");
        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.onViewerReady
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_collection_cloud, {
              ref: "cloudCollectionRef",
              clouds: _ctx.clouds
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_cumulus_Cloud, {
                position: [-122.6908, 45.496, 300],
                maximumSize: {
                  x: 50,
                  y: 15,
                  z: 13
                },
                slice: 0.3,
                scale: [1500, 250]
              }, null, 8, ["position", "slice"])]),
              _: 1
            }, 8, ["clouds"]), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_bing, {
                ref: "provider",
                "bm-key": "AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-",
                "map-style": "Aerial"
              }, null, 512)]),
              _: 1
            }), _createVNode(_component_vc_selection_indicator, {
              ref: "selectionIndicator",
              onPickEvt: _ctx.pickEvt
            }, null, 8, ["onPickEvt"])]),
            _: 1
          }, 8, ["onReady"]), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_createTextVNode("销毁")]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_createTextVNode("加载")]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_createTextVNode("重载")]),
              _: 1
            }, 8, ["onClick"])]),
            _: 1
          })]),
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
          const cloudCollectionRef = ref(null);
          const clouds = ref([]);
          const instance = getCurrentInstance();
          // methods
          const unload = () => {
            cloudCollectionRef.value.unload();
          };
          const reload = () => {
            cloudCollectionRef.value.reload();
          };
          const load = () => {
            cloudCollectionRef.value.load();
          };
          const onViewerReady = async _ref => {
            let {
              Cesium,
              viewer
            } = _ref;
            window.viewer = viewer;
            const scene = viewer.scene;
            scene.primitives.add(await Cesium.createOsmBuildingsAsync());
            // clouds.value.push({
            //   position: [-122.6908, 45.496, 300],
            //   scale: [1500, 250],
            //   maximumSize: { x: 50, y: 15, z: 13 },
            //   slice: 0.3
            // })
            clouds.value.push({
              position: [-122.72, 45.5, 335],
              scale: [1500, 300],
              maximumSize: {
                x: 50,
                y: 12,
                z: 15
              },
              slice: 0.36
            });
            clouds.value.push({
              position: [-122.72, 45.51, 260],
              scale: [2000, 300],
              maximumSize: {
                x: 50,
                y: 12,
                z: 15
              },
              slice: 0.49
            });
            clouds.value.push({
              position: [-122.705, 45.52, 250],
              scale: [230, 110],
              maximumSize: {
                x: 13,
                y: 13,
                z: 13
              },
              slice: 0.2
            });
            clouds.value.push({
              position: [-122.71, 45.522, 270],
              scale: [1700, 300],
              maximumSize: {
                x: 50,
                y: 12,
                z: 15
              },
              slice: 0.6
            });
            clouds.value.push({
              position: [-122.705, 45.525, 250],
              scale: [230, 110],
              maximumSize: {
                x: 15,
                y: 13,
                z: 15
              },
              slice: 0.35
            });
            clouds.value.push({
              position: [-122.721, 45.53, 220],
              scale: [1500, 500],
              maximumSize: {
                x: 30,
                y: 20,
                z: 17
              },
              slice: 0.45
            });
            viewer.scene.camera.flyTo({
              destination: Cesium.Cartesian3.fromDegrees(-122.6515, 45.5252, 525),
              orientation: {
                heading: Cesium.Math.toRadians(-115),
                pitch: Cesium.Math.toRadians(-12),
                roll: 0.0
              }
            });
          };
          return {
            unload,
            reload,
            load,
            onViewerReady,
            cloudCollectionRef,
            clouds
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
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-cloud.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-cloud.md



vc_collection_cloudvue_type_script_lang_ts.render = vc_collection_cloudvue_type_template_id_499a9fb2_render

/* harmony default export */ var vc_collection_cloud = __webpack_exports__["default"] = (vc_collection_cloudvue_type_script_lang_ts);

/***/ })

}]);