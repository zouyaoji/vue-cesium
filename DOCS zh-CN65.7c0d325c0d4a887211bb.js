(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[161],{

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-collection-cloud.md?vue&type=template&id=3b6d3e13

const vc_collection_cloudvue_type_template_id_3b6d3e13_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_collection_cloudvue_type_template_id_3b6d3e13_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCollectionCloud ");

const vc_collection_cloudvue_type_template_id_3b6d3e13_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载积云图元集合，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.CloudCollection"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例。渲染多个积云图元时建议用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "clouds"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 属性表达。")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "积云图元集合组件的基础用法。", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-cloud"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加积云图元集合对象。")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-collection-cloud ref=\"cloudCollectionRef\" @mouseout=\"onMouseout\" @mouseover=\"onMouseover\" :clouds=\"clouds\">\n      <vc-cumulus-Cloud :position=\"[-122.6908, 45.496, 300]\" :maximumSize=\"{x: 50, y: 15, z: 13}\" :slice=\"0.3\" :scale=\"[1500,250]\"></vc-cumulus-Cloud>\n    </vc-collection-cloud>\n    <vc-layer-imagery>\n      <vc-imagery-provider-bing\n        ref=\"provider\"\n        bmKey=\"AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-\"\n        mapStyle=\"Aerial\"\n      ></vc-imagery-provider-bing>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const cloudCollectionRef = ref(null)\n      const clouds = ref([])\n      const instance = getCurrentInstance()\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        cloudCollectionRef.value.unload()\n      }\n      const reload = () => {\n        cloudCollectionRef.value.reload()\n      }\n      const load = () => {\n        cloudCollectionRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        window.viewer = viewer\n        const scene = viewer.scene\n        scene.primitives.add(Cesium.createOsmBuildings())\n        // clouds.value.push({\n        //   position: [-122.6908, 45.496, 300],\n        //   scale: [1500, 250],\n        //   maximumSize: { x: 50, y: 15, z: 13 },\n        //   slice: 0.3\n        // })\n        clouds.value.push({\n          position: [-122.72, 45.5, 335],\n          scale: [1500, 300],\n          maximumSize: { x: 50, y: 12, z: 15 },\n          slice: 0.36\n        })\n        clouds.value.push({\n          position: [-122.72, 45.51, 260],\n          scale: [2000, 300],\n          maximumSize: { x: 50, y: 12, z: 15 },\n          slice: 0.49\n        })\n        clouds.value.push({\n          position: [-122.705, 45.52, 250],\n          scale: [230, 110],\n          maximumSize: { x: 13, y: 13, z: 13 },\n          slice: 0.2\n        })\n        clouds.value.push({\n          position: [-122.71, 45.522, 270],\n          scale: [1700, 300],\n          maximumSize: { x: 50, y: 12, z: 15 },\n          slice: 0.6\n        })\n        clouds.value.push({\n          position: [-122.705, 45.525, 250],\n          scale: [230, 110],\n          maximumSize: { x: 15, y: 13, z: 15 },\n          slice: 0.35\n        })\n        clouds.value.push({\n          position: [-122.721, 45.53, 220],\n          scale: [1500, 500],\n          maximumSize: { x: 30, y: 20, z: 17 },\n          slice: 0.45\n        })\n\n        viewer.scene.camera.flyTo({\n          destination: Cesium.Cartesian3.fromDegrees(-122.6515, 45.5252, 525),\n          orientation: {\n            heading: Cesium.Math.toRadians(-115),\n            pitch: Cesium.Math.toRadians(-12),\n            roll: 0.0\n          }\n        })\n      }\n\n      const onMouseover = e => {\n        console.log(e)\n        if (e.cesiumObject instanceof Cesium.Billboard) {\n          this.scale = 0.5 // or e.cesiumObject.scale = 0.5\n          e.pickedFeature.primitive.scale = 0.5\n        } else if (e.cesiumObject instanceof Cesium.BillboardCollection) {\n          e.pickedFeature.primitive.scale = 0.5\n        }\n      }\n\n      const onMouseout = e => {\n        console.log(e)\n        if (e.cesiumObject instanceof Cesium.Billboard) {\n          this.scale = 0.25 // or e.cesiumObject.scale = 0.25\n        } else if (e.cesiumObject instanceof Cesium.BillboardCollection) {\n          e.pickedFeature.primitive.scale = 0.25\n        }\n      }\n\n      return {\n        unload,\n        reload,\n        load,\n        onClicked,\n        onMouseout,\n        onMouseover,\n        onViewerReady,\n        cloudCollectionRef,\n        clouds\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定该积云图元集合是否显示。</td></tr><tr><td>noiseDetail</td><td>Number</td><td><code>16.0</code></td><td><code>optional</code> 指定噪声纹理数值。</td></tr><tr><td>noiseOffset</td><td>Object: VcPosition</td><td><code>{x: 0, y: 0, z: 0}</code></td><td><code>optional</code> 指定噪声纹理数值的平移参数。</td></tr><tr><td>debugBillboards</td><td>Boolean</td><td><code>16.0</code></td><td><code>optional</code> 仅用于调试。确定广告牌是否以不透明颜色呈现。</td></tr><tr><td>debugEllipsoids</td><td>Boolean</td><td><code>16.0</code></td><td><code>optional</code> 仅用于调试。确定云是否将作为不透明椭圆体呈现。</td></tr><tr><td>clouds</td><td>Array&lt;VcCumulusCloudProps&gt;</td><td><code>[]</code></td><td><code>optional</code> 指定积云集合数组。 数组对象结构与 <code>vc-cumulus-cloud</code> 组件属性相同。</td></tr></tbody></table>", 1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr></tbody></table>", 1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("插槽 ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "插槽名"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "描述"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "子组件")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "用于挂载 vc-cumulus-cloud 组件。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-cumulus-cloud")])])], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCumulusCloud ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载积云图元，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.CumulusCloud"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例。")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 需要作为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-cloud"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的子组件才能正常加载。")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCumulusCloud 属性 ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>brightness</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定积云的亮度。</td><td></td></tr><tr><td>color</td><td>VcColor</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> 指定基于的颜色。</td><td></td></tr><tr><td>maximumSize</td><td>VcPosition</td><td></td><td><code>optional</code> 指定积云云的最大大小。</td><td></td></tr><tr><td>position</td><td>VcPosition</td><td></td><td><code>optional</code> 指定积云的位置。</td><td></td></tr><tr><td>scale</td><td>VcCartesian2</td><td></td><td><code>optional</code> 指定积云布告板的缩放。单位米。</td><td></td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定积云是否可见。</td><td></td></tr><tr><td>slice</td><td>Number</td><td><code>-1.0</code></td><td><code>optional</code> 指定基于广告牌上的“切片”。</td><td></td></tr></tbody></table>", 1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCumulusCloud 事件 ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr></tbody></table>", 1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("官方文档： ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("CloudCollection");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("、");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("CumulusCloud");

function vc_collection_cloudvue_type_template_id_3b6d3e13_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_collection_cloudvue_type_template_id_3b6d3e13_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccollectioncloud",
    tabindex: "-1",
    content: "VcCollectionCloud",
    href: "#vccollectioncloud",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_collection_cloudvue_type_template_id_3b6d3e13_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccollectioncloud"
    })]),
    _: 1
  }), vc_collection_cloudvue_type_template_id_3b6d3e13_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
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
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-jian",
    tabindex: "-1",
    content: "事件",
    href: "#shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "cha-cao",
    tabindex: "-1",
    content: "插槽",
    href: "#cha-cao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cha-cao"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccumuluscloud",
    tabindex: "-1",
    content: "VcCumulusCloud",
    href: "#vccumuluscloud",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccumuluscloud"
    })]),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccumuluscloud-shu-xing",
    tabindex: "-1",
    content: "VcCumulusCloud 属性",
    href: "#vccumuluscloud-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccumuluscloud-shu-xing"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccumuluscloud-shi-jian",
    tabindex: "-1",
    content: "VcCumulusCloud 事件",
    href: "#vccumuluscloud-shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccumuluscloud-shi-jian"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "can-kao",
    tabindex: "-1",
    content: "参考",
    href: "#can-kao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#can-kao"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_22, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/CloudCollection.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_23]),
    _: 1
  })]), _hoisted_24, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/CumulusCloud.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_25]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-cloud.md?vue&type=template&id=3b6d3e13

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-collection-cloud.md?vue&type=script&lang=ts

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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

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
              onMouseout: _ctx.onMouseout,
              onMouseover: _ctx.onMouseover,
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
            }, 8, ["onMouseout", "onMouseover", "clouds"]), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_bing, {
                ref: "provider",
                bmKey: "AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-",
                mapStyle: "Aerial"
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

          const onClicked = e => {
            console.log(e);
          };

          const unload = () => {
            cloudCollectionRef.value.unload();
          };

          const reload = () => {
            cloudCollectionRef.value.reload();
          };

          const load = () => {
            cloudCollectionRef.value.load();
          };

          const onViewerReady = _ref => {
            let {
              Cesium,
              viewer
            } = _ref;
            window.viewer = viewer;
            const scene = viewer.scene;
            scene.primitives.add(Cesium.createOsmBuildings()); // clouds.value.push({
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

          const onMouseover = e => {
            console.log(e);

            if (e.cesiumObject instanceof Cesium.Billboard) {
              this.scale = 0.5; // or e.cesiumObject.scale = 0.5

              e.pickedFeature.primitive.scale = 0.5;
            } else if (e.cesiumObject instanceof Cesium.BillboardCollection) {
              e.pickedFeature.primitive.scale = 0.5;
            }
          };

          const onMouseout = e => {
            console.log(e);

            if (e.cesiumObject instanceof Cesium.Billboard) {
              this.scale = 0.25; // or e.cesiumObject.scale = 0.25
            } else if (e.cesiumObject instanceof Cesium.BillboardCollection) {
              e.pickedFeature.primitive.scale = 0.25;
            }
          };

          return {
            unload,
            reload,
            load,
            onClicked,
            onMouseout,
            onMouseover,
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



vc_collection_cloudvue_type_script_lang_ts.render = vc_collection_cloudvue_type_template_id_3b6d3e13_render

/* harmony default export */ var vc_collection_cloud = __webpack_exports__["default"] = (vc_collection_cloudvue_type_script_lang_ts);

/***/ })

}]);