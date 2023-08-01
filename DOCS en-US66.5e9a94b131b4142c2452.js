(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/primitives/vc-collection-cloud.md?vue&type=template&id=50bbf825

const vc_collection_cloudvue_type_template_id_50bbf825_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_collection_cloudvue_type_template_id_50bbf825_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCollectionCloud ");

const vc_collection_cloudvue_type_template_id_50bbf825_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading a cloud primitive collection is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.CloudCollection"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance. When rendering multiple cloud primitives, it is recommended to use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "clouds"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" attribute.")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcCollectionCloud component.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-cloud"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-cumulus-cloud"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add a CloudCollection object to the viewer.")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-collection-cloud ref=\"cloudCollectionRef\" :clouds=\"clouds\">\n      <vc-cumulus-Cloud :position=\"[-122.6908, 45.496, 300]\" :maximumSize=\"{x: 50, y: 15, z: 13}\" :slice=\"0.3\" :scale=\"[1500,250]\"></vc-cumulus-Cloud>\n    </vc-collection-cloud>\n    <vc-layer-imagery>\n      <vc-imagery-provider-bing\n        ref=\"provider\"\n        bm-key=\"AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-\"\n        map-style=\"Aerial\"\n      ></vc-imagery-provider-bing>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const cloudCollectionRef = ref(null)\n      const clouds = ref([])\n      const instance = getCurrentInstance()\n      // methods\n      const unload = () => {\n        cloudCollectionRef.value.unload()\n      }\n      const reload = () => {\n        cloudCollectionRef.value.reload()\n      }\n      const load = () => {\n        cloudCollectionRef.value.load()\n      }\n      const onViewerReady = async ({ Cesium, viewer }) => {\n        const scene = viewer.scene\n        scene.primitives.add(await Cesium.createOsmBuildingsAsync())\n        // clouds.value.push({\n        //   position: [-122.6908, 45.496, 300],\n        //   scale: [1500, 250],\n        //   maximumSize: { x: 50, y: 15, z: 13 },\n        //   slice: 0.3\n        // })\n        clouds.value.push({\n          position: [-122.72, 45.5, 335],\n          scale: [1500, 300],\n          maximumSize: { x: 50, y: 12, z: 15 },\n          slice: 0.36\n        })\n        clouds.value.push({\n          position: [-122.72, 45.51, 260],\n          scale: [2000, 300],\n          maximumSize: { x: 50, y: 12, z: 15 },\n          slice: 0.49\n        })\n        clouds.value.push({\n          position: [-122.705, 45.52, 250],\n          scale: [230, 110],\n          maximumSize: { x: 13, y: 13, z: 13 },\n          slice: 0.2\n        })\n        clouds.value.push({\n          position: [-122.71, 45.522, 270],\n          scale: [1700, 300],\n          maximumSize: { x: 50, y: 12, z: 15 },\n          slice: 0.6\n        })\n        clouds.value.push({\n          position: [-122.705, 45.525, 250],\n          scale: [230, 110],\n          maximumSize: { x: 15, y: 13, z: 15 },\n          slice: 0.35\n        })\n        clouds.value.push({\n          position: [-122.721, 45.53, 220],\n          scale: [1500, 500],\n          maximumSize: { x: 30, y: 20, z: 17 },\n          slice: 0.45\n        })\n\n        viewer.scene.camera.flyTo({\n          destination: Cesium.Cartesian3.fromDegrees(-122.6515, 45.5252, 525),\n          orientation: {\n            heading: Cesium.Math.toRadians(-115),\n            pitch: Cesium.Math.toRadians(-12),\n            roll: 0.0\n          }\n        })\n      }\n\n      return {\n        unload,\n        reload,\n        load,\n        onViewerReady,\n        cloudCollectionRef,\n        clouds\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCollectionCloud Props ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Whether to display the clouds.</td></tr><tr><td>noiseDetail</td><td>number</td><td><code>16.0</code></td><td><code>optional</code> Desired amount of detail in the noise texture.</td></tr><tr><td>noiseOffset</td><td>VcPosition: VcPosition</td><td><code>{x: 0, y: 0, z: 0}</code></td><td><code>optional</code> Desired translation of data in noise texture.</td></tr><tr><td>debugBillboards</td><td>boolean</td><td><code>16.0</code></td><td><code>optional</code> For debugging only. Determines if the billboards are rendered with an opaque color.</td></tr><tr><td>debugEllipsoids</td><td>boolean</td><td><code>16.0</code></td><td><code>optional</code> For debugging only. Determines if the clouds will be rendered as opaque ellipsoids.</td></tr><tr><td>clouds</td><td>Array&lt;VcCumulusCloudProps&gt;</td><td><code>[]</code></td><td><code>optional</code> Specifies an array of cumulus collections. The array object structure is the same as the <code>vc-cumulus-cloud</code> component properties.</td></tr></tbody></table>", 1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCollectionCloud Events ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table>", 1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCollectionCloud Methods ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Load components manually.</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Reload components manually.</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>Destroy the loaded component manually.</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>Get the creatingPromise.</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>Get the Cesium object loaded by this component.</td></tr></tbody></table>", 1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCollectionCloud Slots ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Subtags")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "This is where vc-cumulus-cloud tag content goes."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-cumulus-cloud")])])], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCumulusCloud ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading cumulus cloud. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.CumulusCloud"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance.")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "Note:"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" It needs to be a subcomponent of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-cloud"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to load normally.")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCumulusCloud Props ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>brightness</td><td>number</td><td><code>1.0</code></td><td><code>optional</code> Specify the brightness of the cloud. This can be used to give clouds a darker, grayer appearance.</td><td></td></tr><tr><td>color</td><td>VcColor</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> Specify the color of the cloud.</td><td></td></tr><tr><td>maximumSize</td><td>VcPosition</td><td></td><td><code>optional</code> Specify the maximum size of the cumulus cloud rendered on the billboard. This defines a maximum ellipsoid volume that the cloud can appear in. Rather than guaranteeing a specific size, this specifies a boundary for the cloud to appear in, and changing it can affect the shape of the cloud.</td><td></td></tr><tr><td>position</td><td>VcPosition</td><td></td><td><code>optional</code> Specify the Cartesian position of this cumulus cloud.</td><td></td></tr><tr><td>scale</td><td>VcCartesian2</td><td></td><td><code>optional</code> Specify the scale of the cumulus cloud billboard in meters. The scale property will affect the size of the billboard, but not the cloud&#39;s actual appearance.</td><td></td></tr><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Determines if this cumulus cloud will be shown. Use this to hide or show a cloud, instead of removing it and re-adding it to the collection.</td><td></td></tr><tr><td>slice</td><td>number</td><td><code>-1.0</code></td><td><code>optional</code> If slice is set to a negative number, the cloud will not render a cross-section. Instead, it will render the outside of the ellipsoid that is visible. For clouds with small values of <code>maximumSize.z</code>, this can produce good-looking results, but for larger clouds, this can result in a cloud that is undesirably warped to the ellipsoid volume.</td><td></td></tr></tbody></table>", 1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCumulusCloud Events ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table>", 1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCumulusCloud Methods ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Load components manually.</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Reload components manually.</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>Destroy the loaded component manually.</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>Get the creatingPromise.</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>Get the Cesium object loaded by this component.</td></tr></tbody></table>", 1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("CloudCollection");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("、");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("CumulusCloud");

function vc_collection_cloudvue_type_template_id_50bbf825_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_collection_cloudvue_type_template_id_50bbf825_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccollectioncloud",
    tabindex: "-1",
    content: "VcCollectionCloud",
    href: "#vccollectioncloud",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_collection_cloudvue_type_template_id_50bbf825_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccollectioncloud"
    })]),
    _: 1
  }), vc_collection_cloudvue_type_template_id_50bbf825_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_link, {
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
    id: "vccollectioncloud-props",
    tabindex: "-1",
    content: "VcCollectionCloud Props",
    href: "#vccollectioncloud-props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccollectioncloud-props"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccollectioncloud-events",
    tabindex: "-1",
    content: "VcCollectionCloud Events",
    href: "#vccollectioncloud-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccollectioncloud-events"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccollectioncloud-methods",
    tabindex: "-1",
    content: "VcCollectionCloud Methods",
    href: "#vccollectioncloud-methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccollectioncloud-methods"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccollectioncloud-slots",
    tabindex: "-1",
    content: "VcCollectionCloud Slots",
    href: "#vccollectioncloud-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccollectioncloud-slots"
    })]),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccumuluscloud",
    tabindex: "-1",
    content: "VcCumulusCloud",
    href: "#vccumuluscloud",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccumuluscloud"
    })]),
    _: 1
  }), _hoisted_17, _hoisted_18, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccumuluscloud-props",
    tabindex: "-1",
    content: "VcCumulusCloud Props",
    href: "#vccumuluscloud-props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccumuluscloud-props"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccumuluscloud-events",
    tabindex: "-1",
    content: "VcCumulusCloud Events",
    href: "#vccumuluscloud-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccumuluscloud-events"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccumuluscloud-methods",
    tabindex: "-1",
    content: "VcCumulusCloud Methods",
    href: "#vccumuluscloud-methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_23, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccumuluscloud-methods"
    })]),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_25, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_26, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/CloudCollection.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_27]),
    _: 1
  })]), _hoisted_28, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/CumulusCloud.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_29]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-collection-cloud.md?vue&type=template&id=50bbf825

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/primitives/vc-collection-cloud.md?vue&type=script&lang=ts

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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        const _component_vc_cumulus_Cloud = _resolveComponent("vc-cumulus-Cloud");

        const _component_vc_collection_cloud = _resolveComponent("vc-collection-cloud");

        const _component_vc_imagery_provider_bing = _resolveComponent("vc-imagery-provider-bing");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

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
            })]),
            _: 1
          }, 8, ["onReady"]), _createVNode(_component_el_row, {
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
          const instance = getCurrentInstance(); // methods

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
            const scene = viewer.scene;
            scene.primitives.add(await Cesium.createOsmBuildingsAsync()); // clouds.value.push({
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
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-collection-cloud.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-collection-cloud.md



vc_collection_cloudvue_type_script_lang_ts.render = vc_collection_cloudvue_type_template_id_50bbf825_render

/* harmony default export */ var vc_collection_cloud = __webpack_exports__["default"] = (vc_collection_cloudvue_type_script_lang_ts);

/***/ })

}]);