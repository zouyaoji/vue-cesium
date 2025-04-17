(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[197],{

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.26.10_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/providers/vc-imagery-provider-tianditu.md?vue&type=template&id=5044bec6

const vc_imagery_provider_tiandituvue_type_template_id_5044bec6_hoisted_1 = {
  class: "content vue-cesium-doc"
};
const vc_imagery_provider_tiandituvue_type_template_id_5044bec6_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "加载天地图瓦片服务。", -1);
const vc_imagery_provider_tiandituvue_type_template_id_5044bec6_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("：需要作为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的子组件才能正常加载。")], -1);
const vc_imagery_provider_tiandituvue_type_template_id_5044bec6_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-imagery-provider-tianditu"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件的基础用法。")], -1);
const vc_imagery_provider_tiandituvue_type_template_id_5044bec6_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加由天地图提供的瓦片服务图层。")])], -1);
const vc_imagery_provider_tiandituvue_type_template_id_5044bec6_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- 注记层 -->\n    <vc-layer-imagery :alpha=\"alpha\" :brightness=\"brightness\" :contrast=\"contrast\" :sort-order=\"20\">\n      <vc-imagery-provider-tianditu map-style=\"cva_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n    <vc-layer-imagery :alpha=\"alpha\" :brightness=\"brightness\" :contrast=\"contrast\" :sort-order=\"10\">\n      <vc-imagery-provider-tianditu :map-style=\"mapStyle\" token=\"436ce7e50d27eede2f2929307e6b33c0\" ref=\"provider\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n      <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    </el-row>\n    <el-row>\n      <el-col>\n        <div class=\"block\">\n          <span class=\"demonstration\">透明度</span>\n          <el-slider v-model=\"alpha\" :min=\"0\" :max=\"1\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">亮度</span>\n          <el-slider v-model=\"brightness\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">对比度</span>\n          <el-slider v-model=\"contrast\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">切换风格</span>\n          <el-select v-model=\"mapStyle\" placeholder=\"请选择\">\n            <el-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </el-option>\n          </el-select>\n        </div>\n      </el-col>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const provider = ref(null)\n      const alpha = ref(1)\n      const brightness = ref(1)\n      const contrast = ref(1)\n      const options = [\n        {\n          value: 'img_c',\n          label: '全球影像地图服务(经纬度)'\n        },\n        {\n          value: 'img_w',\n          label: '全球影像地图服务(墨卡托)'\n        },\n        {\n          value: 'vec_c',\n          label: '全球矢量地图服务(经纬度)'\n        },\n        {\n          value: 'vec_w',\n          label: '全球矢量地图服务(墨卡托)'\n        },\n        {\n          value: 'ter_c',\n          label: '全球地形晕渲服务(经纬度)'\n        },\n        {\n          value: 'ter_w',\n          label: '全球地形晕渲服务(墨卡托)'\n        },\n        {\n          value: 'ibo_c',\n          label: '全球境界(经纬度)'\n        },\n        {\n          value: 'ibo_w',\n          label: '全球境界(墨卡托)'\n        }\n      ]\n      const mapStyle = ref('img_c')\n      // methods\n      const unload = () => {\n        provider.value.unload()\n      }\n      const reload = () => {\n        provider.value.reload()\n      }\n      const load = () => {\n        provider.value.load()\n      }\n      return {\n        provider,\n        unload,\n        reload,\n        load,\n        alpha,\n        brightness,\n        contrast,\n        options,\n        mapStyle\n      }\n    }\n  }\n</script>\n")], -1);
const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "属性名"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "类型"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "默认值"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "描述"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "可选值")])], -1);
const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "url"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定服务 url 地址。指定了 url 时 mapStyle 将无效。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);
const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "mapStyle"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "'img_w'")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 天地图服务地图类型。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "cia_c/cia_w/cta_c/cta_w/cva_c/cva_w/eia_c/eia_w/eva_c/eva_w/img_c/img_w/ter_c/ter_w/vec_c/vec_w/ibo_c/ibo_w")], -1);
const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "credit"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "string| Cesium.Credit"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "'天地图全球影像服务'")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 服务版权描述信息。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);
const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "token", -1);
const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "string", -1);
const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, null, -1);
const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional", -1);
const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, null, -1);
const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "protocol"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "https")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定请求协议类型。可以是"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "https"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("或者"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "http"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);
const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "rectangle"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "VcRectangle"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 图层的矩形范围，此矩形限制了影像可见范围。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);
const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "minimumLevel"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "0")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 最小层级。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);
const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "maximumLevel"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "20")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 最大层级。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);
const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "projectionTransforms"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "ProjectionTransforms"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定投影变换参数。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "结构： { from: 'GCJ02', to: 'WGS84' }")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);
const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<div class=\"tip\"><p>提示：</p><ul><li>mapStyle 可取值： <ul><li>&#39;cia_c&#39;: 天地图全球中文注记服务（经纬度坐标系）。</li><li>&#39;cia_w&#39;: 天地图全球中文注记服务（墨卡托投影坐标系）。</li><li>&#39;cta_c&#39;: 天地图全球地形中文注记服务（经纬度坐标系）。</li><li>&#39;cta_w&#39;: 天地图全球地形中文注记服务（墨卡托投影坐标系）。</li><li>&#39;cva_c&#39;: 天地图全球矢量中文注记服务（经纬度坐标系）。</li><li>&#39;cva_w&#39;: 天地图全球矢量中文注记服务（墨卡托投影坐标系）。</li><li>&#39;eia_c&#39;: 天地图全球影像英文注记服务（经纬度坐标系）。</li><li>&#39;eia_w&#39;: 天地图全球影像英文注记服务（墨卡托投影坐标系）。</li><li>&#39;eva_c&#39;: 天地图全球矢量英文注记服务（经纬度坐标系）。</li><li>&#39;eva_w&#39;: 天地图全球矢量英文注记服务（墨卡托投影坐标系）。</li><li>&#39;img_c&#39;: 天地图全球影像地图服务（经纬度坐标系）。</li><li>&#39;img_w&#39;: 天地图全球影像地图服务（墨卡托投影坐标系）。</li><li>&#39;ter_c&#39;: 天地图全球地形晕渲服务（经纬度坐标系）。</li><li>&#39;ter_w&#39;: 天地图全球地形晕渲服务（墨卡托投影坐标系）。</li><li>&#39;vec_c&#39;: 天地图全球矢量地图服务（经纬度坐标系）。</li><li>&#39;vec_w&#39;: 天地图全球矢量地图服务（墨卡托投影坐标系）。</li><li>&#39;ibo_c&#39;: 天地图全球矢量地图服务（经纬度坐标系）。</li><li>&#39;ibo_w&#39;: 天地图全球境界服务（墨卡托投影坐标系）。</li></ul></li></ul></div>", 1);
const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>errorEvent</td><td>TileProviderError</td><td>当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。</td></tr><tr><td>readyPromise</td><td>ImageryProvider</td><td>当图层提供者可用时触发, 返回 ImageryProvider 实例。</td></tr></tbody></table>", 1);
function vc_imagery_provider_tiandituvue_type_template_id_5044bec6_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");
  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");
  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");
  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");
  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_imagery_provider_tiandituvue_type_template_id_5044bec6_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcimageryprovidertianditu",
    tabindex: "-1",
    content: "VcImageryProviderTianditu",
    href: "#vcimageryprovidertianditu",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcImageryProviderTianditu "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcimageryprovidertianditu"
    })]),
    _: 1
  }), vc_imagery_provider_tiandituvue_type_template_id_5044bec6_hoisted_2, vc_imagery_provider_tiandituvue_type_template_id_5044bec6_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
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
  }), vc_imagery_provider_tiandituvue_type_template_id_5044bec6_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [vc_imagery_provider_tiandituvue_type_template_id_5044bec6_hoisted_6]),
    default: Object(vue_esm_browser["withCtx"])(() => [vc_imagery_provider_tiandituvue_type_template_id_5044bec6_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    tabindex: "-1",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("属性 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("table", null, [_hoisted_7, Object(vue_esm_browser["createElementVNode"])("tbody", null, [_hoisted_8, _hoisted_9, _hoisted_10, Object(vue_esm_browser["createElementVNode"])("tr", null, [_hoisted_11, _hoisted_12, _hoisted_13, Object(vue_esm_browser["createElementVNode"])("td", null, [_hoisted_14, Object(vue_esm_browser["createTextVNode"])(" 天地图应用 key。 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "http://lbs.tianditu.gov.cn/home.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("申请地址")]),
    _: 1
  })]), _hoisted_15]), _hoisted_16, _hoisted_17, _hoisted_18, _hoisted_19, _hoisted_20])]), _hoisted_21, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-jian",
    tabindex: "-1",
    content: "事件",
    href: "#shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("事件 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
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
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createTextVNode"])("资料： "), Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "http://lbs.tianditu.gov.cn/server/MapService.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("MapService")]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-imagery-provider-tianditu.md?vue&type=template&id=5044bec6

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.26.10_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/providers/vc-imagery-provider-tianditu.md?vue&type=script&lang=ts

/* harmony default export */ var vc_imagery_provider_tiandituvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        createElementVNode: _createElementVNode,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        createBlock: _createBlock
      } = vue_esm_browser;
      const _hoisted_1 = {
        class: "demo-toolbar"
      };
      const _hoisted_2 = {
        class: "block"
      };
      const _hoisted_3 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "透明度", -1);
      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "亮度", -1);
      const _hoisted_5 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "对比度", -1);
      const _hoisted_6 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "切换风格", -1);
      function render(_ctx, _cache) {
        const _component_vc_imagery_provider_tianditu = _resolveComponent("vc-imagery-provider-tianditu");
        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");
        const _component_vc_viewer = _resolveComponent("vc-viewer");
        const _component_el_button = _resolveComponent("el-button");
        const _component_el_row = _resolveComponent("el-row");
        const _component_el_slider = _resolveComponent("el-slider");
        const _component_el_option = _resolveComponent("el-option");
        const _component_el_select = _resolveComponent("el-select");
        const _component_el_col = _resolveComponent("el-col");
        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_layer_imagery, {
              alpha: _ctx.alpha,
              brightness: _ctx.brightness,
              contrast: _ctx.contrast,
              "sort-order": 20
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_tianditu, {
                "map-style": "cva_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            }, 8, ["alpha", "brightness", "contrast"]), _createVNode(_component_vc_layer_imagery, {
              alpha: _ctx.alpha,
              brightness: _ctx.brightness,
              contrast: _ctx.contrast,
              "sort-order": 10
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_tianditu, {
                "map-style": _ctx.mapStyle,
                token: "436ce7e50d27eede2f2929307e6b33c0",
                ref: "provider"
              }, null, 8, ["map-style"])]),
              _: 1
            }, 8, ["alpha", "brightness", "contrast"])]),
            _: 1
          }), _createElementVNode("div", _hoisted_1, [_createVNode(_component_el_row, null, {
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
          }), _createVNode(_component_el_row, null, {
            default: _withCtx(() => [_createVNode(_component_el_col, null, {
              default: _withCtx(() => [_createElementVNode("div", _hoisted_2, [_hoisted_3, _createVNode(_component_el_slider, {
                modelValue: _ctx.alpha,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.alpha = $event),
                min: 0,
                max: 1,
                step: 0.01
              }, null, 8, ["modelValue", "step"]), _hoisted_4, _createVNode(_component_el_slider, {
                modelValue: _ctx.brightness,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.brightness = $event),
                min: 0,
                max: 5,
                step: 0.01
              }, null, 8, ["modelValue", "step"]), _hoisted_5, _createVNode(_component_el_slider, {
                modelValue: _ctx.contrast,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.contrast = $event),
                min: 0,
                max: 5,
                step: 0.01
              }, null, 8, ["modelValue", "step"]), _hoisted_6, _createVNode(_component_el_select, {
                modelValue: _ctx.mapStyle,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.mapStyle = $event),
                placeholder: "请选择"
              }, {
                default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
                  return _openBlock(), _createBlock(_component_el_option, {
                    key: item.value,
                    label: item.label,
                    value: item.value
                  }, null, 8, ["label", "value"]);
                }), 128))]),
                _: 1
              }, 8, ["modelValue"])])]),
              _: 1
            })]),
            _: 1
          })])]),
          _: 1
        }, 512)]);
      }
      const {
        ref,
        getCurrentInstance
      } = vue_esm_browser;
      const democomponentExport = {
        setup() {
          // state
          const instance = getCurrentInstance();
          const provider = ref(null);
          const alpha = ref(1);
          const brightness = ref(1);
          const contrast = ref(1);
          const options = [{
            value: 'img_c',
            label: '全球影像地图服务(经纬度)'
          }, {
            value: 'img_w',
            label: '全球影像地图服务(墨卡托)'
          }, {
            value: 'vec_c',
            label: '全球矢量地图服务(经纬度)'
          }, {
            value: 'vec_w',
            label: '全球矢量地图服务(墨卡托)'
          }, {
            value: 'ter_c',
            label: '全球地形晕渲服务(经纬度)'
          }, {
            value: 'ter_w',
            label: '全球地形晕渲服务(墨卡托)'
          }, {
            value: 'ibo_c',
            label: '全球境界(经纬度)'
          }, {
            value: 'ibo_w',
            label: '全球境界(墨卡托)'
          }];
          const mapStyle = ref('img_c');
          // methods
          const unload = () => {
            provider.value.unload();
          };
          const reload = () => {
            provider.value.reload();
          };
          const load = () => {
            provider.value.load();
          };
          return {
            provider,
            unload,
            reload,
            load,
            alpha,
            brightness,
            contrast,
            options,
            mapStyle
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
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-imagery-provider-tianditu.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-imagery-provider-tianditu.md



vc_imagery_provider_tiandituvue_type_script_lang_ts.render = vc_imagery_provider_tiandituvue_type_template_id_5044bec6_render

/* harmony default export */ var vc_imagery_provider_tianditu = __webpack_exports__["default"] = (vc_imagery_provider_tiandituvue_type_script_lang_ts);

/***/ })

}]);