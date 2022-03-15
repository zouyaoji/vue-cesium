(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[176],{

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/providers/vc-imagery-provider-bing.md?vue&type=template&id=23021362

const vc_imagery_provider_bingvue_type_template_id_23021362_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_imagery_provider_bingvue_type_template_id_23021362_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcImageryProviderBing ");

const vc_imagery_provider_bingvue_type_template_id_23021362_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载微软必应地图影像服务，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.BingMapsImageryProvider"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例。")], -1);

const vc_imagery_provider_bingvue_type_template_id_23021362_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("：需要作为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的子组件才能正常加载。")], -1);

const vc_imagery_provider_bingvue_type_template_id_23021362_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const vc_imagery_provider_bingvue_type_template_id_23021362_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-imagery-provider-bing"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件的基础用法。")], -1);

const vc_imagery_provider_bingvue_type_template_id_23021362_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加由微软必应地图提供的影像瓦片服务图层。")])], -1);

const vc_imagery_provider_bingvue_type_template_id_23021362_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-layer-imagery :alpha=\"alpha\" :brightness=\"brightness\" :contrast=\"contrast\">\n      <!-- 可到(https://www.bingmapsportal.com/)申请Key。 -->\n      <vc-imagery-provider-bing\n        ref=\"provider\"\n        bm-key=\"AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-\"\n        :map-style=\"mapStyle\"\n      ></vc-imagery-provider-bing>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n      <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    </el-row>\n    <el-row>\n      <el-col>\n        <div class=\"block\">\n          <span class=\"demonstration\">透明度</span>\n          <el-slider v-model=\"alpha\" :min=\"0\" :max=\"1\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">亮度</span>\n          <el-slider v-model=\"brightness\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">对比度</span>\n          <el-slider v-model=\"contrast\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">切换风格</span>\n          <el-select v-model=\"mapStyle\" placeholder=\"请选择\">\n            <el-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </el-option>\n          </el-select>\n        </div>\n      </el-col>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const provider = ref(null)\n      const alpha = ref(1)\n      const brightness = ref(1)\n      const contrast = ref(1)\n      const options = [\n        {\n          value: 'Aerial',\n          label: 'Aerial'\n        },\n        {\n          value: 'AerialWithLabels',\n          label: 'AerialWithLabels'\n        },\n        {\n          value: 'Road',\n          label: 'Road'\n        },\n        {\n          value: 'CanvasDark',\n          label: 'CanvasDark'\n        }\n      ]\n      const mapStyle = ref('Aerial')\n      // methods\n      const unload = () => {\n        provider.value.unload()\n      }\n      const reload = () => {\n        provider.value.reload()\n      }\n      const load = () => {\n        provider.value.load()\n      }\n      return {\n        provider,\n        unload,\n        reload,\n        load,\n        alpha,\n        brightness,\n        contrast,\n        options,\n        mapStyle\n      }\n    }\n  }\n</script>\n")], -1);

const vc_imagery_provider_bingvue_type_template_id_23021362_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "属性名"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "类型"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "默认值"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "描述"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "可选值")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "url"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "String | Object"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "'https://dev.virtualearth.net'")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "required"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定服务地址。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "bmKey")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "String", -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, null, -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional", -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("指定 BingMaps 地图 API 秘钥，可到");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("https://www.bingmapsportal.com/");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("申请 Key。 ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意是bmKey", -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, null, -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "tileProtocol"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "String"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("指定地图是 http 还是 https 加载，默认与页面相同。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "mapStyle"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "String"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "'Aerial'")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("指定加载的 BingMaps 类型。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Aerial/AerialWithLabels/AerialWithLabelsOnDemand/CanvasDark/CanvasGray/CanvasLight/CollinsBart/OrdnanceSurvey/Road/RoadOnDemand")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "culture"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "String"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "''")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("指定服务的描述信息。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "ellipsoid"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Object"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考椭球体")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "tileDiscardPolicy"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Object"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("指定 tile 无效时的舍弃瓦片的方案。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td")], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<div class=\"tip\"><p>提示： <code>mapStyle</code> 可选值 <code>Aerial</code>, <code>AerialWithLabels</code>, <code>AerialWithLabelsOnDemand</code>, <code>CanvasDark</code>, <code>CanvasGray</code>, <code>CanvasLight</code>, <code>CollinsBart</code>, <code>OrdnanceSurvey</code>, <code>Road</code>, <code>RoadOnDemand</code>。</p><p><code>rectangle</code> 属性除了可传 <code>Cesium.Rectangle</code> 还可以传 <code>PlainObject(RectangleInDegreeOption|Cartesian4Option</code>) 和 <code>Array&lt;number&gt;</code> (度)</p></div><div class=\"tipflex\"><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// RectangleInDegreeOption</span>\n{\n  <span class=\"hljs-attr\">west</span>: number,\n  <span class=\"hljs-attr\">south</span>: number,\n  <span class=\"hljs-attr\">east</span>: number,\n  <span class=\"hljs-attr\">north</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// Cartesian4Option</span>\n{\n  <span class=\"hljs-attr\">x</span>: number,\n  <span class=\"hljs-attr\">y</span>: number,\n  <span class=\"hljs-attr\">z</span>: number,\n  <span class=\"hljs-attr\">w</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// Array&lt;number&gt; in degrees</span>\n;[number, number, number, number]\n</code><span class=\"lang-mark\">js</span></pre></div>", 2);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>errorEvent</td><td>TileProviderError</td><td>当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。</td></tr><tr><td>readyPromise</td><td>ImageryProvider</td><td>当图层提供者可用时触发, 返回 ImageryProvider 实例。</td></tr></tbody></table>", 1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("官方文档： ");

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("BingMapsImageryProvider");

function vc_imagery_provider_bingvue_type_template_id_23021362_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_imagery_provider_bingvue_type_template_id_23021362_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcimageryproviderbing",
    tabindex: "-1",
    content: "VcImageryProviderBing",
    href: "#vcimageryproviderbing",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_imagery_provider_bingvue_type_template_id_23021362_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcimageryproviderbing"
    })]),
    _: 1
  }), vc_imagery_provider_bingvue_type_template_id_23021362_hoisted_3, vc_imagery_provider_bingvue_type_template_id_23021362_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_imagery_provider_bingvue_type_template_id_23021362_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), vc_imagery_provider_bingvue_type_template_id_23021362_hoisted_6, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [vc_imagery_provider_bingvue_type_template_id_23021362_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [vc_imagery_provider_bingvue_type_template_id_23021362_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    tabindex: "-1",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_imagery_provider_bingvue_type_template_id_23021362_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("table", null, [_hoisted_10, Object(vue_esm_browser["createElementVNode"])("tbody", null, [_hoisted_11, Object(vue_esm_browser["createElementVNode"])("tr", null, [_hoisted_12, _hoisted_13, _hoisted_14, Object(vue_esm_browser["createElementVNode"])("td", null, [_hoisted_15, _hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://www.bingmapsportal.com/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), _hoisted_18, _hoisted_19]), _hoisted_20]), _hoisted_21, _hoisted_22, _hoisted_23, _hoisted_24, _hoisted_25])]), _hoisted_26, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-jian",
    tabindex: "-1",
    content: "事件",
    href: "#shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_28, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "can-kao",
    tabindex: "-1",
    content: "参考",
    href: "#can-kao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_30, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#can-kao"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_31, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/BingMapsImageryProvider.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_32]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-imagery-provider-bing.md?vue&type=template&id=23021362

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/providers/vc-imagery-provider-bing.md?vue&type=script&lang=ts

/* harmony default export */ var vc_imagery_provider_bingvue_type_script_lang_ts = ({
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

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("重载");

      const _hoisted_5 = {
        class: "block"
      };

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "透明度", -1);

      const _hoisted_7 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "亮度", -1);

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "对比度", -1);

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "切换风格", -1);

      function render(_ctx, _cache) {
        const _component_vc_imagery_provider_bing = _resolveComponent("vc-imagery-provider-bing");

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
              contrast: _ctx.contrast
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_bing, {
                ref: "provider",
                "bm-key": "AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-",
                "map-style": _ctx.mapStyle
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
            }, 8, ["onClick"])]),
            _: 1
          }), _createVNode(_component_el_row, null, {
            default: _withCtx(() => [_createVNode(_component_el_col, null, {
              default: _withCtx(() => [_createElementVNode("div", _hoisted_5, [_hoisted_6, _createVNode(_component_el_slider, {
                modelValue: _ctx.alpha,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.alpha = $event),
                min: 0,
                max: 1,
                step: 0.01
              }, null, 8, ["modelValue", "step"]), _hoisted_7, _createVNode(_component_el_slider, {
                modelValue: _ctx.brightness,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.brightness = $event),
                min: 0,
                max: 5,
                step: 0.01
              }, null, 8, ["modelValue", "step"]), _hoisted_8, _createVNode(_component_el_slider, {
                modelValue: _ctx.contrast,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.contrast = $event),
                min: 0,
                max: 5,
                step: 0.01
              }, null, 8, ["modelValue", "step"]), _hoisted_9, _createVNode(_component_el_select, {
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
            value: 'Aerial',
            label: 'Aerial'
          }, {
            value: 'AerialWithLabels',
            label: 'AerialWithLabels'
          }, {
            value: 'Road',
            label: 'Road'
          }, {
            value: 'CanvasDark',
            label: 'CanvasDark'
          }];
          const mapStyle = ref('Aerial'); // methods

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
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-imagery-provider-bing.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-imagery-provider-bing.md



vc_imagery_provider_bingvue_type_script_lang_ts.render = vc_imagery_provider_bingvue_type_template_id_23021362_render

/* harmony default export */ var vc_imagery_provider_bing = __webpack_exports__["default"] = (vc_imagery_provider_bingvue_type_script_lang_ts);

/***/ })

}]);