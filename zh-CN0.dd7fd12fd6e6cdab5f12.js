(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[199],{

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--12-0!./website/pages/changelog.vue?vue&type=template&id=f3c423f8

const _hoisted_1 = {
  class: "page-changelog"
};
const _hoisted_2 = {
  class: "heading"
};

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  href: "https://github.com/zouyaoji/vue-cesium/releases",
  target: "_blank"
}, "GitHub Releases", -1);

const _hoisted_4 = {
  ref: "timeline",
  class: "timeline"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = Object(vue_esm_browser["resolveComponent"])("el-button");

  const _component_change_log_cn = Object(vue_esm_browser["resolveComponent"])("change-log-cn");

  const _component_change_log_en = Object(vue_esm_browser["resolveComponent"])("change-log-en");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("div", _hoisted_1, [Object(vue_esm_browser["createElementVNode"])("div", _hoisted_2, [Object(vue_esm_browser["createVNode"])(_component_el_button, {
    class: "fr"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_3]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(" " + Object(vue_esm_browser["toDisplayString"])($options.langConfig[1]), 1)]), Object(vue_esm_browser["createElementVNode"])("ul", _hoisted_4, null, 512), $data.lang === 'zh-CN' ? (Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createBlock"])(_component_change_log_cn, {
    key: 0,
    ref: "changeLog"
  }, null, 512)) : Object(vue_esm_browser["createCommentVNode"])("", true), $data.lang === 'en-US' ? (Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createBlock"])(_component_change_log_en, {
    key: 1,
    ref: "changeLog"
  }, null, 512)) : Object(vue_esm_browser["createCommentVNode"])("", true)]);
}
// CONCATENATED MODULE: ./website/pages/changelog.vue?vue&type=template&id=f3c423f8

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./CHANGELOG.zh-CN.md?vue&type=template&id=8ed8e95a

const md_loader_CHANGELOG_zh_CNvue_type_template_id_8ed8e95a_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const md_loader_CHANGELOG_zh_CNvue_type_template_id_8ed8e95a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("更新日志 ");

const md_loader_CHANGELOG_zh_CNvue_type_template_id_8ed8e95a_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.10 ");

const md_loader_CHANGELOG_zh_CNvue_type_template_id_8ed8e95a_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li><code>useVueCesium</code> 方法在 <code>vc-viewer</code> 外获取不了的问题。</li><li><code>vc-selection-indicator</code> 指示器显示的情况下，调用 <code>viewer.flyto</code> 方法导致指示器位置错误的问题。</li><li><code>vc-measurements</code> 高度量算报错问题。</li><li><code>vc-measurements</code>、<code>vc-drawings</code>、<code>vc-analyses</code> 浮动按钮初始化为不显示时，无法显隐的问题。</li><li><code>vc-measurements</code>、<code>vc-drawings</code> 贴地模式下面对象未贴地问题。</li></ul>", 1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.9 ");

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2022-02-14")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li><code>vc-imagery-provider-baidu</code> 组件 <code>projectionTransforms</code> 属性失效问题。</li><li><code>vc-selection-indicator</code> 组件拾取到粒子对象上卡死的问题；仰视拾取不了对象的问题。</li><li><code>vc-viewer</code> 组件 <code>baseLayerPicker</code> 属性失效问题。</li><li>部分组件 types 定义不正确的问题。</li></ul>", 1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.8 ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2022-02-08")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修复 umd 包崩溃问题。");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("#149");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.7 ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2022-01-30")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "修复 windows 平台打包不正常的问题。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "修复水平测量编辑错误问题。")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("新特性 ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加分析工具组件（");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-analyses");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("），目前包含通视分析、可视域分析。");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加积云图元组件 ");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-cloud", -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-imagery-provider-baidu"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 百度地图部分风格地图支持 https 协议，增加 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "customid"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 属性，方便切换地图服务。")], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive-tileset"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 增加自定义 shader 属性。")], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("破坏性更新 ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li><p>下列组件已经重命名，由此带来的不便敬请谅解。</p><ul><li><code>VcProviderImageryArcgis</code> -&gt; <code>VcImageryProviderArcgis</code></li><li><code>VcProviderImageryBaidumap</code> -&gt; <code>VcImageryProviderBaidu</code></li><li><code>VcProviderImageryBingmaps</code> -&gt; <code>VcImageryProviderBing</code></li><li><code>VcProviderImageryGoogle</code> -&gt; <code>VcImageryProviderGoogle</code></li><li><code>VcProviderImageryGrid</code> -&gt; <code>VcImageryProviderGrid</code></li><li><code>VcProviderImageryIon</code> -&gt; <code>VcImageryProviderIon</code></li><li><code>VcProviderImageryMapbox</code> -&gt; <code>VcImageryProviderMapbox</code></li><li><code>VcProviderImageryOsm</code> -&gt; <code>VcImageryProviderOsm</code></li><li><code>VcProviderImagerySingletile</code> -&gt; <code>VcImageryProviderSingletile</code></li><li><code>VcProviderImagerySupermap</code> -&gt; <code>VcImageryProviderSupermap</code></li><li><code>VcProviderImageryTianditu</code> -&gt; <code>VcImageryProviderTianditu</code></li><li><code>VcProviderImageryTileCoordinates</code> -&gt; <code>VcImageryProviderTileCoordinates</code></li><li><code>VcProviderImageryTms</code> -&gt; <code>VcImageryProviderTms</code></li><li><code>VcProviderImageryTiledcache</code> -&gt; <code>VcImageryProviderTiledcache</code></li><li><code>VcProviderImageryUrltemplate</code> -&gt; <code>VcImageryProviderUrltemplate</code></li><li><code>VcProviderImageryWms</code> -&gt; <code>VcImageryProviderWms</code></li><li><code>VcProviderImageryWmts</code> -&gt; <code>VcImageryProviderWmts</code></li><li><code>VcProviderTerrainCesium</code> -&gt; <code>VcTerrainProviderCesium</code></li><li><code>VcProviderTerrainArcgis</code> -&gt; <code>VcTerrainProviderArcgis</code></li><li><code>VcProviderTerrainVrTheworld</code> -&gt; <code>VcTerrainProviderVrTheworld</code></li><li><code>VcProviderTerrainTianditu</code> -&gt; <code>VcTerrainProviderTianditu</code></li><li><code>VcInstanceGeometry</code> -&gt; <code>VcGeometryInstance</code></li><li><code>VcGeometryPolylineGround</code> -&gt; <code>VcGeometryGroundPolyline</code></li><li><code>VcGeometryPolylineSimple</code> -&gt; <code>VcGeometrySimplePolyline</code></li><li><code>VcPrimitivePolylineGround</code> -&gt; <code>VcPrimitiveGroundPolyline</code></li></ul></li><li><p>量算、绘制组件去掉 <code>material</code>、<code>depthFailMaterial</code> 参数，改为 <code>appearance</code> 和 <code>depthFailAppearance</code>。</p></li></ul>", 1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.6 ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-12-31")], -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("webpack 5 的项目 loadsh 按需导入问题修复，");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("#144");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。");

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("新特性 ");

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("添加 ");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-analysis-flood", -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件。");

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.5 ");

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-12-29")], -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件添加修饰符后无法触发问题");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("#140");

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。");

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "TS 项目打包时热力图组件报错问题。", -1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.4 ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-12-23")], -1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "更改 heatmap.js 源，避免国内部分用户安装不上。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-dynamic"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件侦听 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "dynamicOverlays"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 时忽略 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "nodeTransformations"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("，避免 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "JSON.stringify"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 报循环引用问题。")])], -1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("新特性 ");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("支持最新的 ");

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("volar");

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.3 ");

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-12-18")], -1);

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-heatmap"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件报 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cannot assign to read only property 'data' of object '#<ImageData>'"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 错误的问题。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "量算绘制组件在超图平台下拾取不正常的问题。")], -1);

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.13 ");

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-12-08")], -1);

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "打包构建过程中提示循环引入的问题。")], -1);

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("新特性 ");

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("支持最新的 ");

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("volar");

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("重构 ");

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "开发工具由 yarn 改为 pnpm。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-echart"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件重命名为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-echarts"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。打包将 echarts，视为外部引入（external），所以使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-echart"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 要额外安装 echarts。")])], -1);

const _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.12 ");

const _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-11-30")], -1);

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件时间轴日期格式化错误问题。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-drawings"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 和 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-measurements"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件添加 PrerenderDatas，开启贴地模式抛出异常问题。")])], -1);

const _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("新特性 ");

const _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-dynamic"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件增加速度存储变量，并增加历史轨迹例子。")])], -1);

const _hoisted_73 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("破坏性更新 ");

const _hoisted_74 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-polygon"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件去掉 color 属性，改为支持 appearance 参数。")])], -1);

const _hoisted_75 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.11 ");

const _hoisted_76 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-11-25")], -1);

const _hoisted_77 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_78 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-selection-indicator"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件拾取部分图元对象不出指示器的问题。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修复 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "PolygonPrimitive"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 贴地报错问题。")])], -1);

const _hoisted_79 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("新特性 ");

const _hoisted_80 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加动态对象组件 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-dynamic"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("，用于加载和管理一组动态实体对象。")])], -1);

const _hoisted_81 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.10 ");

const _hoisted_82 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-11-22")], -1);

const _hoisted_83 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("新特性 ");

const _hoisted_84 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-polygon"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 面图元组件增加 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "polygonHierarchy"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 属性，以支持岛洞多边形。")])], -1);

const _hoisted_85 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_86 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-xxx"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 图元集合组件侦听逻辑错误。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-polygon"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件对象拾取 bug & "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "depthFailColor"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 属性变更 bug。")])], -1);

const _hoisted_87 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.9 ");

const _hoisted_88 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-11-20")], -1);

const _hoisted_89 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("新特性 ");

const _hoisted_90 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("数据源组件 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-datasource-xxx"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 可用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "entities"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 传入自定义属性。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-polygon"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 面图元组件，并支持用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-primitive"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 批量管理一组面图元。")])], -1);

const _hoisted_91 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.8 ");

const _hoisted_92 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-11-18")], -1);

const _hoisted_93 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_94 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "调低各控件组件的 z-index，避免因为 z-index 太高导致他们超出一些模态对话框。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "修复 makeMaterial 判断逻辑错误问题。")], -1);

const _hoisted_95 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.7 ");

const _hoisted_96 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-11-11")], -1);

const _hoisted_97 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_98 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "量算、绘制组件 Action 激活状态失效的问题。")], -1);

const _hoisted_99 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.6 ");

const _hoisted_100 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-11-10")], -1);

const _hoisted_101 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_102 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "修复量算、绘制组件改变 props 不能动态响应的问题。")], -1);

const _hoisted_103 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.5 ");

const _hoisted_104 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-11-07")], -1);

const _hoisted_105 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_106 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修复 i18n 配置不起作用的问题。");

const _hoisted_107 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("#126");

const _hoisted_108 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.4 ");

const _hoisted_109 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-11-04")], -1);

const _hoisted_110 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("新特性 ");

const _hoisted_111 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("量算绘制组件增加预加载对象参数 ");

const _hoisted_112 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "preRenderDatas", -1);

const _hoisted_113 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("，满足类似编辑服务的需求，详见");

const _hoisted_114 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-drawings 文档");

const _hoisted_115 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。");

const _hoisted_116 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_117 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修复 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-selection-indicator"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件无法主动显隐的问题。")])], -1);

const _hoisted_118 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.3 ");

const _hoisted_119 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-10-29")], -1);

const _hoisted_120 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("新特性 ");

const _hoisted_121 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "量算组件增加正多边形、圆形量算。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("绘制组件增加 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "图标点"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("、"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "正多边形绘制"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加风场 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-windmap"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件。")])], -1);

const _hoisted_122 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("优化 ");

const _hoisted_123 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "重构量算、绘制组件逻辑结构，精简代码。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-selection-indicator"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 支持 primitive 拾取。")])], -1);

const _hoisted_124 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_125 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "修复打包生成的 es 包不正确的问题。")], -1);

const _hoisted_126 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.2 ");

const _hoisted_127 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-10-12")], -1);

const _hoisted_128 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("新特性 ");

const _hoisted_129 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "量算组件增加矩形量算。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-echarts"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件。")])], -1);

const _hoisted_130 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_131 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "global 改为 globalThis，避免出现 global 为 undefined 的错误。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "打包后样式文件图片丢失问题修复。")], -1);

const _hoisted_132 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.1 ");

const _hoisted_133 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-10-10")], -1);

const _hoisted_134 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("破坏性更新 ");

const _hoisted_135 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li>通过重新组织代码使项目更加清晰，更好地组织代码，让打包产物更加清晰，由于本次改动最大的影响是对打包产物的重新组织，所以如果你以前是全量引入样式文件的话，你需要更改样式文件所在的地址:</li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">  --- <span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;vue-cesium/lib/theme-default/index.css&#39;</span>\n  +++ <span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;vue-cesium/dist/index.css&#39;</span>\n</code><span class=\"lang-mark\">js</span></pre>", 2);

const _hoisted_137 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_138 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "修复按需引入各组件报错的问题。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修复 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-selection-indicator"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件拾取报错问题。")])], -1);

const _hoisted_139 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.15 ");

const _hoisted_140 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-09-09")], -1);

const _hoisted_141 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_142 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Cesium@1.85版本天地图影像组件 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-provider-imagery-tianditu"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 报错问题修复。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "removeEmpty 方法丢掉原型链上的属性导致材质报错问题修复。")], -1);

const _hoisted_143 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("优化 ");

const _hoisted_144 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("默认 Cesium 库的 CDN 地址改为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。")])], -1);

const _hoisted_145 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.14 ");

const _hoisted_146 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-09-03")], -1);

const _hoisted_147 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_148 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "使用 EarthSDK 报错的问题， #121。")], -1);

const _hoisted_149 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("优化 ");

const _hoisted_150 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "绘制量算组件的节点渲染到最上层，避免节点被面压盖而导致没办法拾取到，没法编辑。")], -1);

const _hoisted_151 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.13 ");

const _hoisted_152 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-08-31")], -1);

const _hoisted_153 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("新特性 ");

const _hoisted_154 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "量算、绘制组件编辑按钮增加延时出现和延时消失属性。")], -1);

const _hoisted_155 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_156 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "量算、绘制组件线、面图形移除节点后异常问题。")], -1);

const _hoisted_157 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.12 ");

const _hoisted_158 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-08-23")], -1);

const _hoisted_159 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_160 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-drawings"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 绘制圆、矩形时崩溃的问题。")])], -1);

const _hoisted_161 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.11 ");

const _hoisted_162 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-08-20")], -1);

const _hoisted_163 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("新特性 ");

const _hoisted_164 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("针对 1.83+ 版本的 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "terrainExaggeration"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 做一些兼容处理。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("数据源组件增加 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "destroy"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 属性，指明数据源在移除时是否被销毁。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("量算、绘制组件增加 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "mode"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 属性，指明量算、绘制操作是连续还是进行一次就结束。")])], -1);

const _hoisted_165 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_166 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("涉及用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Ellipsoid.WGS84"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 计算的统一改成用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "viewer.scene.globe.ellipsoid"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 计算，避免某些情况下 Ellipsoid 不是 WGS84 而导致问题，如开发月球平台。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件支持 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "skyBox"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("、 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "skyAtmosphere"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 类型增加 Boolean。")])], -1);

const _hoisted_167 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_168 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("量算、绘制组件增加 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "editorEvt"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("、"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "mouseEvt"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 事件，去掉默认修改绘制过程中鼠标光标的样式。")])], -1);

const _hoisted_169 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.10 ");

const _hoisted_170 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-07-13")], -1);

const _hoisted_171 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("新特性 ");

const _hoisted_172 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "绘制矩形增加正南正北的矩形。")], -1);

const _hoisted_173 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.9 ");

const _hoisted_174 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-07-08")], -1);

const _hoisted_175 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_176 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li>修复在超图平台上 <code>VcProviderImagerySupermap</code> 组件移除图层崩溃的问题。</li><li>修复二维和哥伦布视图下 <code>VcNavigation</code> 组件定位不准的问题，#118。</li><li>修复 <code>VcViewer</code> 组件上传非 Prop 的 Attribute 抛出警告问题。</li><li>修复 <code>VcSelectionIndicator</code> 在地球之外拾取抛出错误的问题。</li></ul>", 1);

const _hoisted_177 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.8 ");

const _hoisted_178 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-06-13")], -1);

const _hoisted_179 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("新特性 ");

const _hoisted_180 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "绘制量算组件的面、线对象支持设置显隐。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "坐标量算组件的高度支持绝对高度和相对高度。")], -1);

const _hoisted_181 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_182 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "GeoJSON 数据源组件 mouseover 和 mouseout 事件触发错误。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "折线距离量算、面积量算取消绘制上一个点偶尔崩溃。")], -1);

const _hoisted_183 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.7 ");

const _hoisted_184 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-06-13")], -1);

const _hoisted_185 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("新特性 ");

const _hoisted_186 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-selection-indicator"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 自定义选择器组件，替换 Cesium 自带的 selectionIndicator。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-ajax-bar"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" http 请求进度条控件。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-drawings"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件绘制的线面对象支持贴地，增加绘制矩形和圆形。")])], -1);

const _hoisted_187 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_188 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "infoBox"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 属性为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 时组件加载异常问题。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "修复量算组件和绘制组件中面对象编辑第一点异常的问题。")], -1);

const _hoisted_189 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.6 ");

const _hoisted_190 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-06-03")], -1);

const _hoisted_191 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("新特性 ");

const _hoisted_192 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<li><code>vc-overlay-heatmap</code>, 增加热力图组件，可用于可视化温度、降水等要素。</li><li><code>vc-measurements</code>, 增加友好的量算工具。</li><li><code>vc-drawings</code>, 增加友好的绘制工具。</li><li><code>vc-post-process-stage</code> 增加后期处理组件。</li><li><code>vc-post-process-stage-scan</code> 增加后期处理扫描组件。</li><li><code>vc-post-process-stage-collection</code> 增加后期处理集合组件。</li><li><code>vc-overview-map</code> 增加鹰眼组件。</li>", 7);

const _hoisted_199 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("新增兼容第三方");

const _hoisted_200 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("mars3d");

const _hoisted_201 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 库。");

const _hoisted_202 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("新增兼容第三方 ");

const _hoisted_203 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("dc-sdk");

const _hoisted_204 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 库。");

const _hoisted_205 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.5.2 ");

const _hoisted_206 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-04-29")], -1);

const _hoisted_207 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("新特性 ");

const _hoisted_208 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-html"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", 增加 HTML 元素覆盖物组件。")])], -1);

const _hoisted_209 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("优化 ");

const _hoisted_210 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "完善英文部分文档。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "Vetur 智能提示语言默认改为英文。")], -1);

const _hoisted_211 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.4 ");

const _hoisted_212 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-04-26")], -1);

const _hoisted_213 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug 修复 ");

const _hoisted_214 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "文档搜索功能。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "Vetur 智能提示失效。")], -1);

const _hoisted_215 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.3 ");

const _hoisted_216 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-04-23")], -1);

const _hoisted_217 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加 ");

const _hoisted_218 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li><code>vc-primitive</code></li><li><code>vc-primitive-classfication</code></li><li><code>vc-primitive-ground</code></li><li><code>vc-primitive-polyline-ground</code></li><li><code>vc-primitive-model</code></li><li><code>vc-primitive-tileset</code></li><li><code>vc-primitive-particle</code></li><li><code>vc-collection-billboard</code></li><li><code>vc-collection-label</code></li><li><code>vc-collection-point</code></li><li><code>vc-collection-polyline</code></li><li><code>vc-collection-primitive</code></li><li><code>vc-instance-geometry</code></li><li><code>vc-geometry-box</code></li><li><code>vc-geometry-box-outline</code></li><li><code>vc-geometry-circle</code></li><li><code>vc-geometry-circle-outline</code></li><li><code>vc-geometry-corridor</code></li><li><code>vc-geometry-corridor-outline</code></li><li><code>vc-geometry-cylinder</code></li><li><code>vc-geometry-cylinder-outline</code></li><li><code>vc-geometry-ellipse</code></li><li><code>vc-geometry-ellipse-outline</code></li><li><code>vc-geometry-ellipsoid</code></li><li><code>vc-geometry-ellipsoid-outline</code></li><li><code>vc-geometry-frustum</code></li><li><code>vc-geometry-frustum-outline</code></li><li><code>vc-geometry-plane</code></li><li><code>vc-geometry-plane-outline</code></li><li><code>vc-geometry-polygon</code></li><li><code>vc-geometry-polygon-outline</code></li><li><code>vc-geometry-polygon-coplanar</code></li><li><code>vc-geometry-polygon-coplanar-outline</code></li><li><code>vc-geometry-polyline</code></li><li><code>vc-geometry-polyline-ground</code></li><li><code>vc-geometry-polyline-simple</code></li><li><code>vc-geometry-polyline-volume</code></li><li><code>vc-geometry-rectangle</code></li><li><code>vc-geometry-rectangle-outline</code></li><li><code>vc-geometry-sphere</code></li><li><code>vc-geometry-sphere-outline</code></li><li><code>vc-geometry-wall</code></li><li><code>vc-geometry-wall-outline</code></li></ul>", 1);

const _hoisted_219 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.2 ");

const _hoisted_220 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-04-18")], -1);

const _hoisted_221 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加 ");

const _hoisted_222 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li><code>vc-provider-terrain-cesium</code></li><li><code>vc-provider-terrain-arcgis</code></li><li><code>vc-provider-terrain-tianditu</code></li><li><code>vc-datasource-custom</code></li><li><code>vc-datasource-czml</code></li><li><code>vc-datasource-geojson</code></li><li><code>vc-datasource-kml</code></li><li><code>vc-navigation-sm</code></li><li><code>vc-compass-sm</code></li><li><code>vc-zoom-control-sm</code></li></ul>", 1);

const _hoisted_223 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.1 ");

const _hoisted_224 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-04-07")], -1);

const _hoisted_225 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加 ");

const _hoisted_226 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li><code>vc-layer-imagery</code></li><li><code>vc-provider-imagery-arcgis-mapserver</code></li><li><code>vc-provider-imagery-baidumap</code></li><li><code>vc-provider-imagery-bingmaps</code></li><li><code>vc-provider-imagery-googleearth-enterprise</code></li><li><code>vc-provider-imagery-grid</code></li><li><code>vc-provider-imagery-ion</code></li><li><code>vc-provider-imagery-mapbox-style</code></li><li><code>vc-provider-imagery-osm</code></li><li><code>vc-provider-imagery-tile-single</code></li><li><code>vc-provider-imagery-tile-coordinates</code></li><li><code>vc-provider-imagery-tile-mapservice</code></li><li><code>vc-provider-imagery-urltemplate</code></li><li><code>vc-provider-imagery-wms</code></li><li><code>vc-provider-imagery-wmts</code></li><li><code>vc-provider-imagery-tianditu</code></li><li><code>vc-provider-imagery-supermap</code></li><li><code>vc-provider-imagery-tiledcache</code></li><li><code>vc-graphics-billboard</code></li><li><code>vc-graphics-box</code></li><li><code>vc-graphics-corridor</code></li><li><code>vc-graphics-cylinder</code></li><li><code>vc-graphics-ellipse</code></li><li><code>vc-graphics-ellipsoid</code></li><li><code>vc-graphics-label</code></li><li><code>vc-graphics-model</code></li><li><code>vc-graphics-tileset</code></li><li><code>vc-graphics-path</code></li><li><code>vc-graphics-plane</code></li><li><code>vc-graphics-point</code></li><li><code>vc-graphics-polygon</code></li><li><code>vc-graphics-polyline</code></li><li><code>vc-graphics-polyline-volume</code></li><li><code>vc-graphics-rectangle</code></li><li><code>vc-graphics-wall</code></li></ul>", 1);

const _hoisted_227 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.0 ");

const _hoisted_228 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-03-30")], -1);

const _hoisted_229 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加 ");

const _hoisted_230 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li>增加 <code>vc-viewer</code> 组件。</li><li>重构并升级 <code>vc-navigation</code> 组件，分离 <code>vc-compass</code>, <code>vc-zoom-control</code>, <code>vc-print</code>, <code>vc-my-location</code>, <code>vc-status-bar</code>, <code>vc-distance-legend</code> 为独立组件。</li><li>增加 <code>vc-entity</code> 组件。</li></ul>", 1);

const _hoisted_231 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_232 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "适配 vue 3.0，参考 Element Plus 项目，采用 TypeScript 编写，lerna 管理项目。")], -1);

const _hoisted_233 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.2.1 - 2021-03-27 ");

const _hoisted_234 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "解决 umd 打包 coordtransform 引用问题。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-heatmap"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件支持用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "breaks"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 和 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "colors"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 属性确定颜色方案。")])], -1);

const _hoisted_235 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.2.0 - 2021-01-30 ");

const _hoisted_236 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_237 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "绘制组件增加编辑功能。", -1);

const _hoisted_238 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive-model", -1);

const _hoisted_239 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("和");

const _hoisted_240 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive-tileset", -1);

const _hoisted_241 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件同步官方属性。");

const _hoisted_242 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.1.9 - 2021-01-XX ");

const _hoisted_243 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_244 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("常用属性支持传 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Array"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。")], -1);

const _hoisted_245 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("实体属性支持传 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Function"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。")], -1);

const _hoisted_246 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修复生产环境组件移除异常问题。 ");

const _hoisted_247 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("#92");

const _hoisted_248 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-ripple-circle-double", -1);

const _hoisted_249 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", ");

const _hoisted_250 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-circle-roatating-double", -1);

const _hoisted_251 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 解决设置高度异常问题。");

const _hoisted_252 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" camera 属性更新与绑定不一致的问题。")], -1);

const _hoisted_253 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.1.8 - 2021-01-04 ");

const _hoisted_254 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加 ");

const _hoisted_255 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-provider-imagery-baidumap", -1);

const _hoisted_256 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 加载百度瓦片地图服务。");

const _hoisted_257 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_258 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("影像 provider 增加属性 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "projectionTransforms"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("，用于瓦片的投影变换。")], -1);

const _hoisted_259 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-primitive-xxx", -1);

const _hoisted_260 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", ");

const _hoisted_261 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-datasource-xxx", -1);

const _hoisted_262 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的集合属性增加动态修改支持。 如");

const _hoisted_263 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-primitive-billboard", -1);

const _hoisted_264 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。");

const _hoisted_265 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<li><code>vc-navigation</code> 解决二维模式下位置坐标异常问题。</li><li>实体、图元、几何体等可拾取的对象组件事件优化，并增加 <code>moveout</code>、<code>moveover</code>、<code>clickout</code> 事件响应。</li><li><code>vc-viewer</code> 增加 <code>cesiumReady</code> 事件，当 CesiumJS 加载成功时触发。</li>", 3);

const _hoisted_268 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.1.7 - 2020-12-01 ");

const _hoisted_269 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_270 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("解决 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "umd"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 模式下鹰眼组件不正常的问题。")], -1);

const _hoisted_271 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("解决 ");

const _hoisted_272 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("#87");

const _hoisted_273 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 提到的按需引入的问题。");

const _hoisted_274 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-datasource-geojson", -1);

const _hoisted_275 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 等数据源组件都支持通过 ");

const _hoisted_276 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "entities", -1);

const _hoisted_277 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 属性添加实体集合。");

const _hoisted_278 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("实体组件 ");

const _hoisted_279 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-entity", -1);

const _hoisted_280 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", 图元组件 ");

const _hoisted_281 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive", -1);

const _hoisted_282 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", 图元集合组件 ");

const _hoisted_283 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("'vc-collection-primitive'");

const _hoisted_284 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 增加响应鼠标点击事件。");

const _hoisted_285 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-layer-imagery", -1);

const _hoisted_286 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 影像图层组件新增一个属性 ");

const _hoisted_287 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "sortOrder", -1);

const _hoisted_288 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 维护图层相对顺序。");

const _hoisted_289 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-measure-distance", -1);

const _hoisted_290 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", ");

const _hoisted_291 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-measure-area", -1);

const _hoisted_292 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", ");

const _hoisted_293 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-measure-height", -1);

const _hoisted_294 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 量算工具支持触摸屏操作。");

const _hoisted_295 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.1.6 - 2020-08-15 ");

const _hoisted_296 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加 ");

const _hoisted_297 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-html", -1);

const _hoisted_298 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" HTML 元素组件。");

const _hoisted_299 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-html", -1);

const _hoisted_300 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 鹰眼地图组件。");

const _hoisted_301 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.1.5 - 2020-08-01 ");

const _hoisted_302 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加 ");

const _hoisted_303 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-scan-circle", -1);

const _hoisted_304 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 圆形扫描效果组件。");

const _hoisted_305 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-scan-radar", -1);

const _hoisted_306 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 雷达扫描效果组件。");

const _hoisted_307 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-ripple-circle-double", -1);

const _hoisted_308 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 双圆涟漪效果组件。");

const _hoisted_309 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-shine-ellipse", -1);

const _hoisted_310 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 闪圆效果组件。");

const _hoisted_311 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-shine-point", -1);

const _hoisted_312 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 闪点效果组件。");

const _hoisted_313 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-trail-polyline", -1);

const _hoisted_314 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 流动线效果组件。");

const _hoisted_315 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-trail-wall", -1);

const _hoisted_316 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 流动墙效果组件。");

const _hoisted_317 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-provider-imagery-style-mapbox", -1);

const _hoisted_318 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 加载 mapbox 自定义地图服务。");

const _hoisted_319 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "支持引入 cesiumlab 的 earthsdk (1.4.17+).", -1);

const _hoisted_320 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.1.4 - 2020-05-26 ");

const _hoisted_321 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_322 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "量算和绘制组件 activeEvt 事件的触发顺序调整。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "量算和绘制组件中绘制的面改为双面。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "量算距离和量算面积组件解决距离单位 km 时数值不正确问题。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-navigation"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 全屏模式下位置不正确的问题。")])], -1);

const _hoisted_323 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.1.3 - 2020-05-14 ");

const _hoisted_324 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_325 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 增加 removeCesiumScript 属性，确定"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("在销毁时是否移除 CesiumJS 标签。fixed: #58")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-navigation"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 解决单页面添加多个"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 初始化不正常的问题。增加相机高度。增加 heading, pitch, roll 属性。")])], -1);

const _hoisted_326 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.1.2 - 2020-05-13 ");

const _hoisted_327 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加 ");

const _hoisted_328 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li><code>vc-navigation</code> 增加 legendChanged 事件，方便获取导航罗盘当前计算的比例尺。</li><li><code>vc-navigation</code> 增加 geolocation 事件，定位成功时返回定位结果。</li><li><code>vc-navigation</code> 鉴于国内谷歌浏览器定位被墙，增加高德定位 API 选项。</li><li><code>vc-viewer</code> 增加转发 viewr.infoBox.viewModel 的 <code>cameraClicked</code> 和 <code>closeClicked</code> 事件。</li></ul>", 1);

const _hoisted_329 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_330 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li>量算工具和绘制工具支持贴地选项。</li><li><code>vc-datasource-custom</code> 解决名称获取异常问题。</li><li><code>vc-handler-draw-polygon</code> 和 <code>vc-handler-draw-polyline</code> 增加贴地选项 <code>clampToGround</code>。</li><li><code>vc-handler-draw-polygon</code> 的 <code>polygonColor</code> 改为 <code>polygonMaterial</code>，方便自定义绘制材质。</li></ul>", 1);

const _hoisted_331 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.1.1 - 2020-05-05 ");

const _hoisted_332 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_333 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 增加 timeline 时间本地化选项。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-datasource-custom"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 可添加批量实体。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" position 属性可以传 Function，相当于是 callback。")])], -1);

const _hoisted_334 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.1.0 - 2020-04-22 ");

const _hoisted_335 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加 ");

const _hoisted_336 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-graphics-tileset"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件，对应 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium3DTilesetGraphics")])], -1);

const _hoisted_337 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_338 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li>绘制组件 <code>drawEvt</code> 事件增加鼠标左键点击反馈。</li><li>量算组件 <code>measureEvt</code> 事件增加鼠标左键点击反馈。</li><li>量算组件增加 <code>movingEvt</code> 事件反馈鼠标所在屏幕坐标。</li><li><code>vc-primitive-3dtileset</code> 组件名称改为 <code>vc-primitive-tileset</code>（参考官方的实体命名，两者保持一致）。</li><li>优化导航控件。</li></ul>", 1);

const _hoisted_339 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.0.9 - 2020-04-20 ");

const _hoisted_340 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_341 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "量算组件和绘制组件互斥。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-handler-draw-polyline"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("组件可以定义绘制的线型。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("绘制和量算的点可通过 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "depthTest"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 属性觉得是否参与深度检测。（默认不参与，即点、线不被地形和模型裁切，会一直显示）")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "加载超图平台客户端绘制的线被遮挡问题修复。")], -1);

const _hoisted_342 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.0.6 - 2020-03-17 ");

const _hoisted_343 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加 ");

const _hoisted_344 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加粒子系统组件 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive-particle"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加克里金色斑图组件 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-kriging-map")])], -1);

const _hoisted_345 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_346 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-navigation"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 缩放控件的 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "defaultResetView"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 属性初始化时会覆盖 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "camera"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 属性，增加一个属性 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "overrideViewerCamera"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 来控制是否覆盖，默认是否。")])], -1);

const _hoisted_347 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.0.5 - 2020-01-07 ");

const _hoisted_348 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_349 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-measure-distance"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件增加一个属性 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "arcType"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "0"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 代表量算时绘制的空间直线, "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "1"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 代表绘制的是测地线。")], -1);

const _hoisted_350 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修复 ");

const _hoisted_351 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("#48");

const _hoisted_352 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".");

const _hoisted_353 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.0.4 - 2019-12-28 ");

const _hoisted_354 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加 ");

const _hoisted_355 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-navigation"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件增加一个定位按钮. 用的是浏览器定位 API "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "navigator.geolocation"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", 谷歌浏览器被墙了，可能没效果， Firefox 和 Edge 测试工作正常。")])], -1);

const _hoisted_356 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_357 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "数据源聚合事件。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "数据源属性合并成一个对象。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-provider-imagery-tianditu"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("组件域名换了.")])], -1);

const _hoisted_358 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.0.3 - 2019-12-23 ");

const _hoisted_359 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加 ");

const _hoisted_360 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("国际化语言。 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Vue.use(VueCesium, {cesiumPath: cesiumPath, accessToken: accessToken, lang: lang})"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 默认加载中文。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-navigation"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 增加一个打印控件。")])], -1);

const _hoisted_361 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_362 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "css 名称统一。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "面积量算结果修正，用海伦公式计算表面积。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("距离量算结果修正，之前简单的用了 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cartesian3.distance"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 计算的是两点之间的直线距离，忽略了地球曲率，并不合理，改为计算"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "测地距离(GeodesicDistance)"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。")])], -1);

const _hoisted_363 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.0.2 - 2019-12-19 ");

const _hoisted_364 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加 ");

const _hoisted_365 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-navigation-sm"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 超图罗盘样式组件。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-stage-process-post"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 后期处理组件。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-stage-process-post"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 后期处理集合组件。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-provider-imagery-tiledcache"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件，加载 TiledCache 瓦片。")])], -1);

const _hoisted_366 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_367 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-navigation"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 样式修改了，增加了位置信息。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-analysis-flood"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" -> "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-analytics-flood")])], -1);

const _hoisted_368 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.0.1 - 2019-12-09 ");

const _hoisted_369 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_370 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("各组件加载放在 Created 生命周期，方便通过获取"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "createdPromise"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("对象进行相关逻辑操作。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "量算组件增加选项，指定测量线和文字标签是否始终显示。")], -1);

const _hoisted_371 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加 ");

const _hoisted_372 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li><code>vc-provider-imagery-supermap</code> 加载超图 iServer 影像服务。</li><li><code>vc-provider-imagery-tianditu</code> 加载天地图 WMTS 影像服务。</li><li><code>vc-handler-draw-point</code> 绘制点组件。</li><li><code>vc-handler-draw-polyline</code> 绘制线组件。</li><li><code>vc-handler-draw-polygon</code> 绘制面组件。</li><li><code>vc-geometry-xxx</code> 补充几何体对象组件。 <ul><li><code>vc-geometry-outline-box</code>: <code>BoxOutlineGeometry</code>,</li><li><code>vc-geometry-circle</code>: <code>CircleGeometry</code>,</li><li><code>vc-geometry-outline-circle</code>: <code>CircleOutlineGeometry</code>,</li><li><code>vc-geometry-polygon-coplanar</code>: <code>CoplanarPolygonGeometry</code>,</li><li><code>vc-geometry-outline-polygon-coplanar</code>: <code>CoplanarPolygonOutlineGeometry</code>,</li><li><code>vc-geometry-corridor</code>: <code>CorridorGeometry</code>,</li><li><code>vc-geometry-outline-corridor</code>: <code>CorridorOutlineGeometry</code>,</li><li><code>vc-geometry-cylinder</code>: <code>CylinderGeometry</code>,</li><li><code>vc-geometry-outline-cylinder</code>: <code>CylinderOutlineGeometry</code>,</li><li><code>vc-geometry-ellipse</code>: <code>EllipseGeometry</code>,</li><li><code>vc-geometry-outline-ellipse</code>: <code>EllipseOutlineGeometry</code>,</li><li><code>vc-geometry-ellipsoid</code>: <code>EllipsoidGeometry</code>,</li><li><code>vc-geometry-outline-ellipsoid</code>: <code>EllipsoidOutlineGeometry</code>,</li><li><code>vc-geometry-frustum</code>: <code>FrustumGeometry</code>,</li><li><code>vc-geometry-outline-frustum</code>: <code>FrustumOutlineGeometry</code>,</li><li><code>vc-geometry-polyline-ground</code>: <code>GroundPolylineGeometry</code>,</li><li><code>vc-geometry-plane</code>: <code>PlaneGeometry</code>,</li><li><code>vc-geometry-outline-plane</code>: <code>PlaneOutlineGeometry</code>,</li><li><code>vc-geometry-polygon</code>: <code>PolygonGeometry</code>,</li><li><code>vc-geometry-outline-polygon</code>: <code>PolygonOutlineGeometry</code>,</li><li><code>vc-geometry-polyline</code>: <code>PolylineGeometry</code>,</li><li><code>vc-geometry-polyline-volume</code>: <code>PolylineVolumeGeometry</code>,</li><li><code>vc-geometry-outline-polyline-volume</code>: <code>PolylineVolumeOutlineGeometry</code>,</li><li><code>vc-geometry-rectangle</code>: <code>RectangleGeometry</code>,</li><li><code>vc-geometry-outline-rectangle</code>: <code>RectangleOutlineGeometry</code>,</li><li><code>vc-geometry-polyline-simple</code>: <code>SimplePolylineGeometry</code>,</li><li><code>vc-geometry-sphere</code>: <code>SphereGeometry</code>,</li><li><code>vc-geometry-outline-sphere</code>: <code>SphereOutlineGeometry</code>,</li><li><code>vc-geometry-wall</code>: <code>WallGeometry</code>,</li><li><code>vc-geometry-outline-wall</code>: <code>WallOutlineGeometry</code></li></ul></li></ul>", 1);

const _hoisted_373 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.0.0 - 2019-12-02 ");

const _hoisted_374 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("增加 ");

const _hoisted_375 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-provider-imagery-supermap"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 加载超图 iServer 影像服务。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-provider-imagery-tianditu"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 加载天地图 WMTS 影像服务。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "支持 CDN 引用注册。")], -1);

const _hoisted_376 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.0.0-beta.3 - 2019-11-26 ");

const _hoisted_377 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_378 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "@babel/runtime-corejs2"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 依赖不正确。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件有些部件位置异常。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-provider-imagery-wmts"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件支持设置天地图服务 token。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-navigation"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件样式文件打包。")])], -1);

const _hoisted_379 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("2.0.0-beta.0 - 2019-11-20 ");

const _hoisted_380 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("这个版本将做了较大的更新，精简了代码，优化了组件加载速度，更优雅的支持局部引入，重新规范了组件命名，请谨慎升级，最新组件名称参考");

const _hoisted_381 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("在线文档");

const _hoisted_382 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。");

const _hoisted_383 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_384 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("组件打包的 babel 环境升级到 7+ 版本。参考");

const _hoisted_385 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Babel 中文网");

const _hoisted_386 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("、");

const _hoisted_387 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Babel7 学习笔记");

const _hoisted_388 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。");

const _hoisted_389 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "组件打包方式改为用 rollup 打包。", -1);

const _hoisted_390 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "组件加载、卸载方式改为异步，Vue 侦听器改为代码动态创建。", -1);

const _hoisted_391 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("组件命名重新规范，根据 Vue 推荐的");

const _hoisted_392 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("风格指南");

const _hoisted_393 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。");

const _hoisted_394 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "组件在线文档规范。", -1);

const _hoisted_395 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("1.0.6 - 2019-11-19 ");

const _hoisted_396 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_397 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("fixed ");

const _hoisted_398 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("#27");

const _hoisted_399 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。");

const _hoisted_400 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("1.0.5 - 2019-11-01 ");

const _hoisted_401 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "V2 版本会做较大更新，我会尽量将此版本现有功能维护到稳定再更新下一个版本。", -1);

const _hoisted_402 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("修改 ");

const _hoisted_403 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "解决 1.60+ 版本面绘制问题。")], -1);

function md_loader_CHANGELOG_zh_CNvue_type_template_id_8ed8e95a_render(_ctx, _cache) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", md_loader_CHANGELOG_zh_CNvue_type_template_id_8ed8e95a_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "geng-xin-ri-zhi",
    tabindex: "-1",
    content: "更新日志",
    href: "#geng-xin-ri-zhi",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_zh_CNvue_type_template_id_8ed8e95a_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#geng-xin-ri-zhi"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-onezero",
    tabindex: "-1",
    content: "3.0.10",
    href: "#three-zero-onezero",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_zh_CNvue_type_template_id_8ed8e95a_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-onezero"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_zh_CNvue_type_template_id_8ed8e95a_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-nine",
    tabindex: "-1",
    content: "3.0.9",
    href: "#three-zero-nine",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-nine"
    })]),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-1",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-1",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-1"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-eight",
    tabindex: "-1",
    content: "3.0.8",
    href: "#three-zero-eight",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-eight"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-2",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-2",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-2"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/issues/149"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_14]),
    _: 1
  })])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-seven",
    tabindex: "-1",
    content: "3.0.7",
    href: "#three-zero-seven",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-seven"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-3",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-3",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-3"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xin-te-xing",
    tabindex: "-1",
    content: "新特性",
    href: "#xin-te-xing",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xin-te-xing"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_20, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh-CN/component/controls/vc-analyses"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), _hoisted_22]), Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_23, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh-CN/component/primitives/vc-collection-cloud"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_24]),
    _: 1
  }), _hoisted_25]), _hoisted_26, _hoisted_27]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "po-pi-xing-geng-xin",
    tabindex: "-1",
    content: "破坏性更新",
    href: "#po-pi-xing-geng-xin",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_28, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#po-pi-xing-geng-xin"
    })]),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-six",
    tabindex: "-1",
    content: "3.0.6",
    href: "#three-zero-six",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_30, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-six"
    })]),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-4",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-4",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_32, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-4"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_33, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/issues/144"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_34]),
    _: 1
  }), _hoisted_35])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xin-te-xing-1",
    tabindex: "-1",
    content: "新特性",
    href: "#xin-te-xing-1",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_36, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xin-te-xing-1"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_37, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh-CN/component/analyses/vc-analysis-flood"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_38]),
    _: 1
  }), _hoisted_39])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-five",
    tabindex: "-1",
    content: "3.0.5",
    href: "#three-zero-five",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_40, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-five"
    })]),
    _: 1
  }), _hoisted_41, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-5",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-5",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_42, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-5"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_43, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/issues/140"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_44]),
    _: 1
  }), _hoisted_45]), _hoisted_46]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-four",
    tabindex: "-1",
    content: "3.0.4",
    href: "#three-zero-four",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_47, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-four"
    })]),
    _: 1
  }), _hoisted_48, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-6",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-6",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_49, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-6"
    })]),
    _: 1
  }), _hoisted_50, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xin-te-xing-2",
    tabindex: "-1",
    content: "新特性",
    href: "#xin-te-xing-2",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_51, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xin-te-xing-2"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_52, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/johnsoncodehk/volar"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_53]),
    _: 1
  })])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-three",
    tabindex: "-1",
    content: "3.0.3",
    href: "#three-zero-three",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_54, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-three"
    })]),
    _: 1
  }), _hoisted_55, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-7",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-7",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_56, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-7"
    })]),
    _: 1
  }), _hoisted_57, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-onethree",
    tabindex: "-1",
    content: "3.0.2-beta.13",
    href: "#three-zero-two-beta-onethree",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_58, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-onethree"
    })]),
    _: 1
  }), _hoisted_59, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-8",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-8",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_60, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-8"
    })]),
    _: 1
  }), _hoisted_61, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xin-te-xing-3",
    tabindex: "-1",
    content: "新特性",
    href: "#xin-te-xing-3",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_62, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xin-te-xing-3"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_63, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/johnsoncodehk/volar"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_64]),
    _: 1
  })])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "chong-gou",
    tabindex: "-1",
    content: "重构",
    href: "#chong-gou",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_65, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chong-gou"
    })]),
    _: 1
  }), _hoisted_66, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-onetwo",
    tabindex: "-1",
    content: "3.0.2-beta.12",
    href: "#three-zero-two-beta-onetwo",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_67, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-onetwo"
    })]),
    _: 1
  }), _hoisted_68, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-9",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-9",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_69, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-9"
    })]),
    _: 1
  }), _hoisted_70, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xin-te-xing-4",
    tabindex: "-1",
    content: "新特性",
    href: "#xin-te-xing-4",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_71, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xin-te-xing-4"
    })]),
    _: 1
  }), _hoisted_72, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "po-pi-xing-geng-xin-1",
    tabindex: "-1",
    content: "破坏性更新",
    href: "#po-pi-xing-geng-xin-1",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_73, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#po-pi-xing-geng-xin-1"
    })]),
    _: 1
  }), _hoisted_74, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-oneone",
    tabindex: "-1",
    content: "3.0.2-beta.11",
    href: "#three-zero-two-beta-oneone",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_75, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-oneone"
    })]),
    _: 1
  }), _hoisted_76, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-10",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-10",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_77, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-10"
    })]),
    _: 1
  }), _hoisted_78, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xin-te-xing-5",
    tabindex: "-1",
    content: "新特性",
    href: "#xin-te-xing-5",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_79, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xin-te-xing-5"
    })]),
    _: 1
  }), _hoisted_80, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-onezero",
    tabindex: "-1",
    content: "3.0.2-beta.10",
    href: "#three-zero-two-beta-onezero",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_81, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-onezero"
    })]),
    _: 1
  }), _hoisted_82, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xin-te-xing-6",
    tabindex: "-1",
    content: "新特性",
    href: "#xin-te-xing-6",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_83, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xin-te-xing-6"
    })]),
    _: 1
  }), _hoisted_84, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-11",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-11",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_85, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-11"
    })]),
    _: 1
  }), _hoisted_86, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-nine",
    tabindex: "-1",
    content: "3.0.2-beta.9",
    href: "#three-zero-two-beta-nine",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_87, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-nine"
    })]),
    _: 1
  }), _hoisted_88, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xin-te-xing-7",
    tabindex: "-1",
    content: "新特性",
    href: "#xin-te-xing-7",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_89, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xin-te-xing-7"
    })]),
    _: 1
  }), _hoisted_90, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-eight",
    tabindex: "-1",
    content: "3.0.2-beta.8",
    href: "#three-zero-two-beta-eight",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_91, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-eight"
    })]),
    _: 1
  }), _hoisted_92, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-12",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-12",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_93, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-12"
    })]),
    _: 1
  }), _hoisted_94, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-seven",
    tabindex: "-1",
    content: "3.0.2-beta.7",
    href: "#three-zero-two-beta-seven",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_95, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-seven"
    })]),
    _: 1
  }), _hoisted_96, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-13",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-13",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_97, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-13"
    })]),
    _: 1
  }), _hoisted_98, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-six",
    tabindex: "-1",
    content: "3.0.2-beta.6",
    href: "#three-zero-two-beta-six",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_99, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-six"
    })]),
    _: 1
  }), _hoisted_100, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-14",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-14",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_101, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-14"
    })]),
    _: 1
  }), _hoisted_102, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-five",
    tabindex: "-1",
    content: "3.0.2-beta.5",
    href: "#three-zero-two-beta-five",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_103, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-five"
    })]),
    _: 1
  }), _hoisted_104, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-15",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-15",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_105, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-15"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_106, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/issues/126"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_107]),
    _: 1
  })])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-four",
    tabindex: "-1",
    content: "3.0.2-beta.4",
    href: "#three-zero-two-beta-four",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_108, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-four"
    })]),
    _: 1
  }), _hoisted_109, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xin-te-xing-8",
    tabindex: "-1",
    content: "新特性",
    href: "#xin-te-xing-8",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_110, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xin-te-xing-8"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_111, _hoisted_112, _hoisted_113, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh-CN/component/tools/vc-drawings"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_114]),
    _: 1
  }), _hoisted_115])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-16",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-16",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_116, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-16"
    })]),
    _: 1
  }), _hoisted_117, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-three",
    tabindex: "-1",
    content: "3.0.2-beta.3",
    href: "#three-zero-two-beta-three",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_118, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-three"
    })]),
    _: 1
  }), _hoisted_119, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xin-te-xing-9",
    tabindex: "-1",
    content: "新特性",
    href: "#xin-te-xing-9",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_120, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xin-te-xing-9"
    })]),
    _: 1
  }), _hoisted_121, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "you-hua",
    tabindex: "-1",
    content: "优化",
    href: "#you-hua",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_122, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#you-hua"
    })]),
    _: 1
  }), _hoisted_123, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-17",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-17",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_124, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-17"
    })]),
    _: 1
  }), _hoisted_125, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-two",
    tabindex: "-1",
    content: "3.0.2-beta.2",
    href: "#three-zero-two-beta-two",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_126, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-two"
    })]),
    _: 1
  }), _hoisted_127, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xin-te-xing-10",
    tabindex: "-1",
    content: "新特性",
    href: "#xin-te-xing-10",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_128, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xin-te-xing-10"
    })]),
    _: 1
  }), _hoisted_129, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-18",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-18",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_130, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-18"
    })]),
    _: 1
  }), _hoisted_131, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-one",
    tabindex: "-1",
    content: "3.0.2-beta.1",
    href: "#three-zero-two-beta-one",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_132, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-one"
    })]),
    _: 1
  }), _hoisted_133, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "po-pi-xing-geng-xin-2",
    tabindex: "-1",
    content: "破坏性更新",
    href: "#po-pi-xing-geng-xin-2",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_134, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#po-pi-xing-geng-xin-2"
    })]),
    _: 1
  }), _hoisted_135, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-19",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-19",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_137, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-19"
    })]),
    _: 1
  }), _hoisted_138, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-onefive",
    tabindex: "-1",
    content: "3.0.1-beta.15",
    href: "#three-zero-one-beta-onefive",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_139, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-onefive"
    })]),
    _: 1
  }), _hoisted_140, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-20",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-20",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_141, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-20"
    })]),
    _: 1
  }), _hoisted_142, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "you-hua-1",
    tabindex: "-1",
    content: "优化",
    href: "#you-hua-1",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_143, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#you-hua-1"
    })]),
    _: 1
  }), _hoisted_144, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-onefour",
    tabindex: "-1",
    content: "3.0.1-beta.14",
    href: "#three-zero-one-beta-onefour",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_145, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-onefour"
    })]),
    _: 1
  }), _hoisted_146, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-21",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-21",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_147, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-21"
    })]),
    _: 1
  }), _hoisted_148, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "you-hua-2",
    tabindex: "-1",
    content: "优化",
    href: "#you-hua-2",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_149, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#you-hua-2"
    })]),
    _: 1
  }), _hoisted_150, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-onethree",
    tabindex: "-1",
    content: "3.0.1-beta.13",
    href: "#three-zero-one-beta-onethree",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_151, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-onethree"
    })]),
    _: 1
  }), _hoisted_152, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xin-te-xing-11",
    tabindex: "-1",
    content: "新特性",
    href: "#xin-te-xing-11",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_153, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xin-te-xing-11"
    })]),
    _: 1
  }), _hoisted_154, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-22",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-22",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_155, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-22"
    })]),
    _: 1
  }), _hoisted_156, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-onetwo",
    tabindex: "-1",
    content: "3.0.1-beta.12",
    href: "#three-zero-one-beta-onetwo",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_157, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-onetwo"
    })]),
    _: 1
  }), _hoisted_158, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-23",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-23",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_159, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-23"
    })]),
    _: 1
  }), _hoisted_160, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-oneone",
    tabindex: "-1",
    content: "3.0.1-beta.11",
    href: "#three-zero-one-beta-oneone",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_161, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-oneone"
    })]),
    _: 1
  }), _hoisted_162, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xin-te-xing-12",
    tabindex: "-1",
    content: "新特性",
    href: "#xin-te-xing-12",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_163, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xin-te-xing-12"
    })]),
    _: 1
  }), _hoisted_164, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-24",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-24",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_165, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-24"
    })]),
    _: 1
  }), _hoisted_166, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_167, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai"
    })]),
    _: 1
  }), _hoisted_168, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-onezero",
    tabindex: "-1",
    content: "3.0.1-beta.10",
    href: "#three-zero-one-beta-onezero",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_169, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-onezero"
    })]),
    _: 1
  }), _hoisted_170, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xin-te-xing-13",
    tabindex: "-1",
    content: "新特性",
    href: "#xin-te-xing-13",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_171, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xin-te-xing-13"
    })]),
    _: 1
  }), _hoisted_172, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-nine",
    tabindex: "-1",
    content: "3.0.1-beta.9",
    href: "#three-zero-one-beta-nine",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_173, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-nine"
    })]),
    _: 1
  }), _hoisted_174, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-25",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-25",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_175, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-25"
    })]),
    _: 1
  }), _hoisted_176, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-eight",
    tabindex: "-1",
    content: "3.0.1-beta.8",
    href: "#three-zero-one-beta-eight",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_177, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-eight"
    })]),
    _: 1
  }), _hoisted_178, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xin-te-xing-14",
    tabindex: "-1",
    content: "新特性",
    href: "#xin-te-xing-14",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_179, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xin-te-xing-14"
    })]),
    _: 1
  }), _hoisted_180, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-26",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-26",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_181, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-26"
    })]),
    _: 1
  }), _hoisted_182, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-seven",
    tabindex: "-1",
    content: "3.0.1-beta.7",
    href: "#three-zero-one-beta-seven",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_183, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-seven"
    })]),
    _: 1
  }), _hoisted_184, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xin-te-xing-15",
    tabindex: "-1",
    content: "新特性",
    href: "#xin-te-xing-15",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_185, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xin-te-xing-15"
    })]),
    _: 1
  }), _hoisted_186, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-27",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-27",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_187, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-27"
    })]),
    _: 1
  }), _hoisted_188, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-six",
    tabindex: "-1",
    content: "3.0.1-beta.6",
    href: "#three-zero-one-beta-six",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_189, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-six"
    })]),
    _: 1
  }), _hoisted_190, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xin-te-xing-16",
    tabindex: "-1",
    content: "新特性",
    href: "#xin-te-xing-16",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_191, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xin-te-xing-16"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [_hoisted_192, Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_199, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh-CN/component/platforms/vc-demo-mars3d"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_200]),
    _: 1
  }), _hoisted_201]), Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_202, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh-CN/component/platforms/vc-demo-dc-sdk"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_203]),
    _: 1
  }), _hoisted_204])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-five-two",
    tabindex: "-1",
    content: "3.0.1-beta.5.2",
    href: "#three-zero-one-beta-five-two",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_205, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-five-two"
    })]),
    _: 1
  }), _hoisted_206, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xin-te-xing-17",
    tabindex: "-1",
    content: "新特性",
    href: "#xin-te-xing-17",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_207, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xin-te-xing-17"
    })]),
    _: 1
  }), _hoisted_208, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "you-hua-3",
    tabindex: "-1",
    content: "优化",
    href: "#you-hua-3",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_209, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#you-hua-3"
    })]),
    _: 1
  }), _hoisted_210, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-four",
    tabindex: "-1",
    content: "3.0.1-beta.4",
    href: "#three-zero-one-beta-four",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_211, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-four"
    })]),
    _: 1
  }), _hoisted_212, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-xiu-fu-28",
    tabindex: "-1",
    content: "Bug 修复",
    href: "#bug-xiu-fu-28",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_213, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-xiu-fu-28"
    })]),
    _: 1
  }), _hoisted_214, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-three",
    tabindex: "-1",
    content: "3.0.1-beta.3",
    href: "#three-zero-one-beta-three",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_215, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-three"
    })]),
    _: 1
  }), _hoisted_216, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "zeng-jia",
    tabindex: "-1",
    content: "增加",
    href: "#zeng-jia",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_217, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zeng-jia"
    })]),
    _: 1
  }), _hoisted_218, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-two",
    tabindex: "-1",
    content: "3.0.1-beta.2",
    href: "#three-zero-one-beta-two",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_219, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-two"
    })]),
    _: 1
  }), _hoisted_220, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "zeng-jia-1",
    tabindex: "-1",
    content: "增加",
    href: "#zeng-jia-1",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_221, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zeng-jia-1"
    })]),
    _: 1
  }), _hoisted_222, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-one",
    tabindex: "-1",
    content: "3.0.1-beta.1",
    href: "#three-zero-one-beta-one",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_223, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-one"
    })]),
    _: 1
  }), _hoisted_224, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "zeng-jia-2",
    tabindex: "-1",
    content: "增加",
    href: "#zeng-jia-2",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_225, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zeng-jia-2"
    })]),
    _: 1
  }), _hoisted_226, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-zero",
    tabindex: "-1",
    content: "3.0.1-beta.0",
    href: "#three-zero-one-beta-zero",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_227, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-zero"
    })]),
    _: 1
  }), _hoisted_228, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "zeng-jia-3",
    tabindex: "-1",
    content: "增加",
    href: "#zeng-jia-3",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_229, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zeng-jia-3"
    })]),
    _: 1
  }), _hoisted_230, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai-1",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai-1",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_231, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-1"
    })]),
    _: 1
  }), _hoisted_232, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-two-one---twozerotwoone-zerothree-twoseven",
    tabindex: "-1",
    content: "2.2.1 - 2021-03-27",
    href: "#two-two-one---twozerotwoone-zerothree-twoseven",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_233, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-two-one---twozerotwoone-zerothree-twoseven"
    })]),
    _: 1
  }), _hoisted_234, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-two-zero---twozerotwoone-zeroone-threezero",
    tabindex: "-1",
    content: "2.2.0 - 2021-01-30",
    href: "#two-two-zero---twozerotwoone-zeroone-threezero",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_235, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-two-zero---twozerotwoone-zeroone-threezero"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai-2",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai-2",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_236, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-2"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [_hoisted_237, Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/primitive/vc-primitive-model"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_238]),
    _: 1
  }), _hoisted_239, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/primitive/vc-primitive-tileset"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_240]),
    _: 1
  }), _hoisted_241])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-one-nine---twozerotwoone-zeroone-xx",
    tabindex: "-1",
    content: "2.1.9 - 2021-01-XX",
    href: "#two-one-nine---twozerotwoone-zeroone-xx",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_242, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-one-nine---twozerotwoone-zeroone-xx"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai-3",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai-3",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_243, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-3"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [_hoisted_244, _hoisted_245, Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_246, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/issues/92"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_247]),
    _: 1
  })]), Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/extend/vc-ripple-circle-double"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_248]),
    _: 1
  }), _hoisted_249, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/extend/vc-circle-roatating-double"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_250]),
    _: 1
  }), _hoisted_251]), _hoisted_252]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-one-eight---twozerotwoone-zeroone-zerofour",
    tabindex: "-1",
    content: "2.1.8 - 2021-01-04",
    href: "#two-one-eight---twozerotwoone-zeroone-zerofour",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_253, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-one-eight---twozerotwoone-zeroone-zerofour"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "zeng-jia-4",
    tabindex: "-1",
    content: "增加",
    href: "#zeng-jia-4",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_254, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zeng-jia-4"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/imageryLayer/vc-provider-imagery-baidumap"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_255]),
    _: 1
  }), _hoisted_256])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai-4",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai-4",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_257, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-4"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [_hoisted_258, Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_259, _hoisted_260, _hoisted_261, _hoisted_262, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/primitives/vc-collection-primitive-billboard"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_263]),
    _: 1
  }), _hoisted_264]), _hoisted_265]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-one-seven---twozerotwozero-onetwo-zeroone",
    tabindex: "-1",
    content: "2.1.7 - 2020-12-01",
    href: "#two-one-seven---twozerotwozero-onetwo-zeroone",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_268, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-one-seven---twozerotwozero-onetwo-zeroone"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai-5",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai-5",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_269, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-5"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [_hoisted_270, Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_271, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/issues/87"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_272]),
    _: 1
  }), _hoisted_273]), Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/datasource/vc-datasource-geojson"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_274]),
    _: 1
  }), _hoisted_275, _hoisted_276, _hoisted_277]), Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_278, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/entity/vc-entity"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_279]),
    _: 1
  }), _hoisted_280, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/primitive/vc-primitive"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_281]),
    _: 1
  }), _hoisted_282, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/primitives/vc-collection-primitive"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_283]),
    _: 1
  }), _hoisted_284]), Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/imageryLayer/vc-layer-imagery%5D"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_285]),
    _: 1
  }), _hoisted_286, _hoisted_287, _hoisted_288]), Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/tool/vc-measuring"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_289, _hoisted_290, _hoisted_291, _hoisted_292, _hoisted_293]),
    _: 1
  }), _hoisted_294])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-one-six---twozerotwozero-zeroeight-onefive",
    tabindex: "-1",
    content: "2.1.6 - 2020-08-15",
    href: "#two-one-six---twozerotwozero-zeroeight-onefive",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_295, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-one-six---twozerotwozero-zeroeight-onefive"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "zeng-jia-5",
    tabindex: "-1",
    content: "增加",
    href: "#zeng-jia-5",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_296, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zeng-jia-5"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/extend/vc-overlay-html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_297]),
    _: 1
  }), _hoisted_298]), Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/control/vc-map-overview"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_299]),
    _: 1
  }), _hoisted_300])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-one-five---twozerotwozero-zeroeight-zeroone",
    tabindex: "-1",
    content: "2.1.5 - 2020-08-01",
    href: "#two-one-five---twozerotwozero-zeroeight-zeroone",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_301, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-one-five---twozerotwozero-zeroeight-zeroone"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "zeng-jia-6",
    tabindex: "-1",
    content: "增加",
    href: "#zeng-jia-6",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_302, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zeng-jia-6"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/extend/vc-scan-circle"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_303]),
    _: 1
  }), _hoisted_304]), Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/extend/vc-scan-radar"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_305]),
    _: 1
  }), _hoisted_306]), Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/extend/vc-ripple-circle-double"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_307]),
    _: 1
  }), _hoisted_308]), Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/extend/vc-shine-ellipse"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_309]),
    _: 1
  }), _hoisted_310]), Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/extend/vc-shine-point"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_311]),
    _: 1
  }), _hoisted_312]), Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/extend/vc-trail-polyline"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_313]),
    _: 1
  }), _hoisted_314]), Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/extend/vc-trail-polyline"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_315]),
    _: 1
  }), _hoisted_316]), Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh/imageryLayer/vc-provider-imagery-style-mapbox"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_317]),
    _: 1
  }), _hoisted_318]), _hoisted_319]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-one-four---twozerotwozero-zerofive-twosix",
    tabindex: "-1",
    content: "2.1.4 - 2020-05-26",
    href: "#two-one-four---twozerotwozero-zerofive-twosix",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_320, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-one-four---twozerotwozero-zerofive-twosix"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai-6",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai-6",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_321, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-6"
    })]),
    _: 1
  }), _hoisted_322, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-one-three---twozerotwozero-zerofive-onefour",
    tabindex: "-1",
    content: "2.1.3 - 2020-05-14",
    href: "#two-one-three---twozerotwozero-zerofive-onefour",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_323, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-one-three---twozerotwozero-zerofive-onefour"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai-7",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai-7",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_324, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-7"
    })]),
    _: 1
  }), _hoisted_325, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-one-two---twozerotwozero-zerofive-onethree",
    tabindex: "-1",
    content: "2.1.2 - 2020-05-13",
    href: "#two-one-two---twozerotwozero-zerofive-onethree",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_326, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-one-two---twozerotwozero-zerofive-onethree"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "zeng-jia-7",
    tabindex: "-1",
    content: "增加",
    href: "#zeng-jia-7",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_327, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zeng-jia-7"
    })]),
    _: 1
  }), _hoisted_328, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai-8",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai-8",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_329, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-8"
    })]),
    _: 1
  }), _hoisted_330, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-one-one---twozerotwozero-zerofive-zerofive",
    tabindex: "-1",
    content: "2.1.1 - 2020-05-05",
    href: "#two-one-one---twozerotwozero-zerofive-zerofive",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_331, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-one-one---twozerotwozero-zerofive-zerofive"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai-9",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai-9",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_332, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-9"
    })]),
    _: 1
  }), _hoisted_333, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-one-zero---twozerotwozero-zerofour-twotwo",
    tabindex: "-1",
    content: "2.1.0 - 2020-04-22",
    href: "#two-one-zero---twozerotwozero-zerofour-twotwo",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_334, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-one-zero---twozerotwozero-zerofour-twotwo"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "zeng-jia-8",
    tabindex: "-1",
    content: "增加",
    href: "#zeng-jia-8",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_335, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zeng-jia-8"
    })]),
    _: 1
  }), _hoisted_336, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai-10",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai-10",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_337, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-10"
    })]),
    _: 1
  }), _hoisted_338, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-zero-nine---twozerotwozero-zerofour-twozero",
    tabindex: "-1",
    content: "2.0.9 - 2020-04-20",
    href: "#two-zero-nine---twozerotwozero-zerofour-twozero",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_339, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-zero-nine---twozerotwozero-zerofour-twozero"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai-11",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai-11",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_340, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-11"
    })]),
    _: 1
  }), _hoisted_341, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-zero-six---twozerotwozero-zerothree-oneseven",
    tabindex: "-1",
    content: "2.0.6 - 2020-03-17",
    href: "#two-zero-six---twozerotwozero-zerothree-oneseven",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_342, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-zero-six---twozerotwozero-zerothree-oneseven"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "zeng-jia-9",
    tabindex: "-1",
    content: "增加",
    href: "#zeng-jia-9",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_343, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zeng-jia-9"
    })]),
    _: 1
  }), _hoisted_344, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai-12",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai-12",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_345, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-12"
    })]),
    _: 1
  }), _hoisted_346, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-zero-five---twozerotwozero-zeroone-zeroseven",
    tabindex: "-1",
    content: "2.0.5 - 2020-01-07",
    href: "#two-zero-five---twozerotwozero-zeroone-zeroseven",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_347, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-zero-five---twozerotwozero-zeroone-zeroseven"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai-13",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai-13",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_348, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-13"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [_hoisted_349, Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_350, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/issues/48"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_351]),
    _: 1
  }), _hoisted_352])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-zero-four---twozeroonenine-onetwo-twoeight",
    tabindex: "-1",
    content: "2.0.4 - 2019-12-28",
    href: "#two-zero-four---twozeroonenine-onetwo-twoeight",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_353, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-zero-four---twozeroonenine-onetwo-twoeight"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "zeng-jia-10",
    tabindex: "-1",
    content: "增加",
    href: "#zeng-jia-10",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_354, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zeng-jia-10"
    })]),
    _: 1
  }), _hoisted_355, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai-14",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai-14",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_356, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-14"
    })]),
    _: 1
  }), _hoisted_357, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-zero-three---twozeroonenine-onetwo-twothree",
    tabindex: "-1",
    content: "2.0.3 - 2019-12-23",
    href: "#two-zero-three---twozeroonenine-onetwo-twothree",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_358, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-zero-three---twozeroonenine-onetwo-twothree"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "zeng-jia-11",
    tabindex: "-1",
    content: "增加",
    href: "#zeng-jia-11",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_359, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zeng-jia-11"
    })]),
    _: 1
  }), _hoisted_360, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai-15",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai-15",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_361, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-15"
    })]),
    _: 1
  }), _hoisted_362, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-zero-two---twozeroonenine-onetwo-onenine",
    tabindex: "-1",
    content: "2.0.2 - 2019-12-19",
    href: "#two-zero-two---twozeroonenine-onetwo-onenine",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_363, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-zero-two---twozeroonenine-onetwo-onenine"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "zeng-jia-12",
    tabindex: "-1",
    content: "增加",
    href: "#zeng-jia-12",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_364, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zeng-jia-12"
    })]),
    _: 1
  }), _hoisted_365, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai-16",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai-16",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_366, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-16"
    })]),
    _: 1
  }), _hoisted_367, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-zero-one---twozeroonenine-onetwo-zeronine",
    tabindex: "-1",
    content: "2.0.1 - 2019-12-09",
    href: "#two-zero-one---twozeroonenine-onetwo-zeronine",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_368, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-zero-one---twozeroonenine-onetwo-zeronine"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai-17",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai-17",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_369, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-17"
    })]),
    _: 1
  }), _hoisted_370, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "zeng-jia-13",
    tabindex: "-1",
    content: "增加",
    href: "#zeng-jia-13",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_371, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zeng-jia-13"
    })]),
    _: 1
  }), _hoisted_372, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-zero-zero---twozeroonenine-onetwo-zerotwo",
    tabindex: "-1",
    content: "2.0.0 - 2019-12-02",
    href: "#two-zero-zero---twozeroonenine-onetwo-zerotwo",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_373, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-zero-zero---twozeroonenine-onetwo-zerotwo"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "zeng-jia-14",
    tabindex: "-1",
    content: "增加",
    href: "#zeng-jia-14",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_374, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zeng-jia-14"
    })]),
    _: 1
  }), _hoisted_375, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-zero-zero-beta-three---twozeroonenine-oneone-twosix",
    tabindex: "-1",
    content: "2.0.0-beta.3 - 2019-11-26",
    href: "#two-zero-zero-beta-three---twozeroonenine-oneone-twosix",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_376, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-zero-zero-beta-three---twozeroonenine-oneone-twosix"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai-18",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai-18",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_377, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-18"
    })]),
    _: 1
  }), _hoisted_378, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "two-zero-zero-beta-zero---twozeroonenine-oneone-twozero",
    tabindex: "-1",
    content: "2.0.0-beta.0 - 2019-11-20",
    href: "#two-zero-zero-beta-zero---twozeroonenine-oneone-twozero",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_379, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#two-zero-zero-beta-zero---twozeroonenine-oneone-twozero"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_380, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_381]),
    _: 1
  }), _hoisted_382]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai-19",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai-19",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_383, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-19"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_384, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://www.babeljs.cn/docs/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_385]),
    _: 1
  }), _hoisted_386, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://segmentfault.com/a/1190000017162255"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_387]),
    _: 1
  }), _hoisted_388]), _hoisted_389, _hoisted_390, Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_391, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cn.vuejs.org/v2/style-guide/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_392]),
    _: 1
  }), _hoisted_393]), _hoisted_394]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "one-zero-six---twozeroonenine-oneone-onenine",
    tabindex: "-1",
    content: "1.0.6 - 2019-11-19",
    href: "#one-zero-six---twozeroonenine-oneone-onenine",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_395, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-six---twozeroonenine-oneone-onenine"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai-20",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai-20",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_396, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-20"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_397, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/issues/27"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_398]),
    _: 1
  }), _hoisted_399])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "one-zero-five---twozeroonenine-oneone-zeroone",
    tabindex: "-1",
    content: "1.0.5 - 2019-11-01",
    href: "#one-zero-five---twozeroonenine-oneone-zeroone",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_400, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#one-zero-five---twozeroonenine-oneone-zeroone"
    })]),
    _: 1
  }), _hoisted_401, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "xiu-gai-21",
    tabindex: "-1",
    content: "修改",
    href: "#xiu-gai-21",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_402, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-21"
    })]),
    _: 1
  }), _hoisted_403, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./CHANGELOG.zh-CN.md?vue&type=template&id=8ed8e95a

// CONCATENATED MODULE: ./CHANGELOG.zh-CN.md

const script = {}
script.render = md_loader_CHANGELOG_zh_CNvue_type_template_id_8ed8e95a_render

/* harmony default export */ var CHANGELOG_zh_CN = (script);
// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./CHANGELOG.en-US.md?vue&type=template&id=d867e1b0

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Changelog ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.10 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li><code>useVueCesium</code> method is not available outside <code>vc-viewer</code>.</li><li>When the <code>vc-selection-indicator</code> indicator is displayed, calling the <code>viewer.flyto</code> method causes the indicator position to be wrong.</li><li><code>vc-measurements</code> height measurement error.</li><li><code>vc-measurements</code>, <code>vc-drawings</code>, <code>vc-analyses</code> floating buttons cannot be displayed or hidden when they are initialized to be hidden.</li><li>The clampToGround property of <code>vc-measurements</code> and <code>vc-drawings</code> is invalid.</li></ul>", 1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.9 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2022-02-14")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li>The <code>projectionTransforms</code> property of the <code>vc-imagery-provider-baidu</code> component is invalid.</li><li><code>vc-selection-indicator</code> component crashes when picking up ParticleSystem; Picking up objects failed when looking up.</li><li>The <code>baseLayerPicker</code> property of the <code>vc-viewer</code> component is invalid.</li><li>Some component types are incorrectly defined.</li></ul>", 1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.8 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2022-02-08")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("umd package demo is broken. ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("#149");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.7 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2022-01-30")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "simplify build & compatible to build on windows."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "horizontal measurement editing error.")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("New feature ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Added ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vc-analyses");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", includes line of sight analysis and field of view analysis.");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Added ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-cloud", -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-imagery-provider-baidu"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" supports https protocol, Added customid attribute.")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive-tileset"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" added customShader props.")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Breaking changes: ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li><p>The following components have been renamed, sorry for the inconvenience.</p><ul><li><code>VcProviderImageryArcgis</code> -&gt; <code>VcImageryProviderArcgis</code></li><li><code>VcProviderImageryBaidumap</code> -&gt; <code>VcImageryProviderBaidu</code></li><li><code>VcProviderImageryBingmaps</code> -&gt; <code>VcImageryProviderBing</code></li><li><code>VcProviderImageryGoogle</code> -&gt; <code>VcImageryProviderGoogle</code></li><li><code>VcProviderImageryGrid</code> -&gt; <code>VcImageryProviderGrid</code></li><li><code>VcProviderImageryIon</code> -&gt; <code>VcImageryProviderIon</code></li><li><code>VcProviderImageryMapbox</code> -&gt; <code>VcImageryProviderMapbox</code></li><li><code>VcProviderImageryOsm</code> -&gt; <code>VcImageryProviderOsm</code></li><li><code>VcProviderImagerySingletile</code> -&gt; <code>VcImageryProviderSingletile</code></li><li><code>VcProviderImagerySupermap</code> -&gt; <code>VcImageryProviderSupermap</code></li><li><code>VcProviderImageryTianditu</code> -&gt; <code>VcImageryProviderTianditu</code></li><li><code>VcProviderImageryTileCoordinates</code> -&gt; <code>VcImageryProviderTileCoordinates</code></li><li><code>VcProviderImageryTms</code> -&gt; <code>VcImageryProviderTms</code></li><li><code>VcProviderImageryTiledcache</code> -&gt; <code>VcImageryProviderTiledcache</code></li><li><code>VcProviderImageryUrltemplate</code> -&gt; <code>VcImageryProviderUrltemplate</code></li><li><code>VcProviderImageryWms</code> -&gt; <code>VcImageryProviderWms</code></li><li><code>VcProviderImageryWmts</code> -&gt; <code>VcImageryProviderWmts</code></li><li><code>VcProviderTerrainCesium</code> -&gt; <code>VcTerrainProviderCesium</code></li><li><code>VcProviderTerrainArcgis</code> -&gt; <code>VcTerrainProviderArcgis</code></li><li><code>VcProviderTerrainVrTheworld</code> -&gt; <code>VcTerrainProviderVrTheworld</code></li><li><code>VcProviderTerrainTianditu</code> -&gt; <code>VcTerrainProviderTianditu</code></li><li><code>VcInstanceGeometry</code> -&gt; <code>VcGeometryInstance</code></li><li><code>VcGeometryPolylineGround</code> -&gt; <code>VcGeometryGroundPolyline</code></li><li><code>VcGeometryPolylineSimple</code> -&gt; <code>VcGeometrySimplePolyline</code></li><li><code>VcPrimitivePolylineGround</code> -&gt; <code>VcPrimitiveGroundPolyline</code></li></ul></li><li><p>The <code>material</code>, <code>depthFailMaterial</code> parameters in the <code>vc-mearements</code>, <code>vc-drawings</code> component related properties are changed to <code>appearance</code> and <code>depthFailAppearance</code>.</p></li></ul>", 1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.6 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-12-31")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("webpack 5 project loadsh imports bugs on demand, ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("#144");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("New feature ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Added ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-analysis-flood", -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_40 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.5 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_41 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-12-29")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_42 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_43 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events cannot be triggered after adding modifiers");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_44 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("#140");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_45 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_46 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "Building error of heatmapjs in the TS project.", -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_47 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.4 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_48 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-12-23")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_49 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_50 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "Change the heatmapjs source."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("The "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-dynamic"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component ignores the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "nodeTransformations"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" property when listening to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "dynamicOverlays"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to avoid the circular reference problem reported by "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "JSON.stringify"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_51 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.3 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_52 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-12-18")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_53 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_54 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-heatmap"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" throws "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cannot assign to read only property'data' of object'#<ImageData>'"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" error.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "The measurement & drawing component does not work properly on the SuperMap platform.")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_55 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.13 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_56 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-12-08")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_57 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_58 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "suppress Circular dependency errors.")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_59 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("New feature ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_60 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Support latest ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_61 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("volar");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_62 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Refactors ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_63 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "Replace yarn with pnpm"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Renamed to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-echart"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-echarts"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", it requires additional installation of echart")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_64 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.12 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_65 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-11-30")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_66 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_67 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("The "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component Timeline Date Format Error.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("The "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-drawings"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-measurements"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" throws an an exception when clamptoGround is true and PrerenderDatas are assigned.")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_68 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("New feature ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_69 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("The "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-dynamic"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component Add Speed Storage Variables and increases historical trajectory examples.")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_70 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Breaking changes: ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_71 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("The "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-polygon"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component removes the color attribute and supports the appearance parameter instead.")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_72 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.11 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_73 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-11-25")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_74 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_75 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("The "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-selection-indicator"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component picks up some primitive objects without indicators.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Suppress synchronous GroundPrimitives DeveloperError of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "PolygonPrimitive"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_76 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("New feature ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_77 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Add dynamic object component "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-dynamic"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", which is used to load and manage a group of dynamic entity objects.")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_78 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.10 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_79 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-11-22")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_80 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("New feature ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_81 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Added the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "polygonHierarchy"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" attribute to the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-polygon"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component to support island hole polygons.")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_82 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_83 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-xxx"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" primitive collection component listening logic error.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-polygon"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component object pick up bug & "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "depthFailColor"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" property change bug.")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_84 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.9 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_85 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-11-20")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_86 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("New feature ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_87 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("DataSource component "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-datasource-xxx"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" can use "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "entities"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to pass in custom attributes.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Added "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-polygon"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component, and supports batch management of a group of polygon primitives with "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-primitive"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_88 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.8 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_89 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-11-18")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_90 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_91 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "Lower the z-index of each control component to prevent them from exceeding some modal dialog because the z-index is too high."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "Fix the problem that the makeMaterial method judges the logic error.")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_92 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.7 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_93 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-11-11")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_94 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_95 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("The active state of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-drawngs"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-measurement"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" does not work.")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_96 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.6 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_97 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-11-10")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_98 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_99 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-measurements"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-drawings"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" modify the assignment methods of default options.")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_100 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.5 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_101 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-11-07")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_102 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_103 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Fix ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_104 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("#126");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_105 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", i18n configuration does not work.");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_106 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.4 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_107 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-11-04")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_108 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("New feature ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_109 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-measurements", -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_110 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_111 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-drawings", -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_112 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" add a ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_113 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "preRenderDatas", -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_114 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" prop to preload cesiumObject. See the ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_115 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("document");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_116 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" for details.");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_117 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_118 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-selection-indicator"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" expose animateAppear & animateDepart as public methods, otherwise, it cannot be called externally.")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_119 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.3 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_120 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-10-29")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_121 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("New feature ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_122 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li>The <code>vc-measurements</code> component adds regular polygon and circle measurement.</li><li>The <code>vc-drawings</code> component adds <code>pin</code> and <code>regular</code> drawing.</li><li>Added <code>vc-overlay-windmap</code> component.</li></ul>", 1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_123 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Optimization ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_124 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Refactor "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-measurements"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-drawings"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", streamline the code. -"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-selection-indicator"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" supports primitive picking.")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_125 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_126 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "fix: compile to esm package errors.")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_127 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.2 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_128 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-10-12")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_129 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("New feature ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_130 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("The "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-measurements"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component added rectangle measurement.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Added "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-echarts"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component.")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_131 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_132 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "Change global to globalThis to avoid the error that global is undefined."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "Fixed the problem that the pictures of style files are lost after packaging.")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_133 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.2-beta.1 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_134 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-10-10")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_135 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Breaking changes: ");

const _hoisted_136 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li>Making the project more clear via reorganizing the code. Better organizable code. Make the publish bundle more legit and clear. Because that this breaking change mainly impact publish bundle, if you were using the full bundled style file, you will going to change the resource path in your project:</li></ul><pre class=\"example-code\"><code class=\"hljs language-js\">  --- <span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;vue-cesium/lib/theme-default/index.css&#39;</span>\n  +++ <span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;vue-cesium/dist/index.css&#39;</span>\n</code><span class=\"lang-mark\">js</span></pre>", 2);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_138 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_139 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "Fix the problem of registering errors for each component on demand."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Fix the problem of picking up errors in the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-selection-indicator"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component.")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_140 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.15 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_141 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-09-09")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_142 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_143 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("The "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-provider-imagery-tianditu"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component reporting problem in Cesium@1.85 version.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "The removeEmpty method loses the attributes on the prototype chain and causes the material to report an error.")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_144 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Optimization ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_145 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("The CDN address of the Cesium library is changed to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_146 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.14 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_147 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-09-03")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_148 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_149 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "The problem of using EarthSDK to report an error, #121.")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_150 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Optimization ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_151 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("The point of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "VcDrawings"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "VcMeasurements"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component is rendered to the top to avoid the point being covered by the polygon and cannot be picked up and make it can not be edited.")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_152 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.13 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_153 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-08-31")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_154 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("New feature ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_155 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Adding the properties of delayed appearance and delayed disappearance for the edit buttons of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "VcDrawings"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "VcMeasurements"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" components.")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_156 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_157 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("The abnormal problems after removing nodes of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "VcDrawings"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "VcMeasurements"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_158 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.12 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_159 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-08-23")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_160 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_161 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-drawings"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Fix the crash when drawing circles and rectangles.")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_162 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.11 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_163 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-08-20")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_164 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("New feature ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_165 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Do some compatibility processing for the 1.83+ version of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "terrainExaggeration"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("The datasource component adds a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "destroy"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" attribute to indicate whether the datasource is destroyed when it is removed.")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_166 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_167 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li>The unified calculation involving the use of <code>Ellipsoid.WGS84</code> is changed to the calculation using <code>scene.globe.ellipsoid</code> to avoid problems caused by Ellipsoid not WGS84 in some cases, such as the development of a lunar platform.</li><li>The <code>vc-viewer</code> component supports <code>skyBox</code> and <code>skyAtmosphere</code> types, adding Boolean.</li></ul>", 1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_168 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Optimization ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_169 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Adding "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "editorEvt"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "mouseEvt"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" events to measuring and drawing components, remove the default and modify the mouse cursor style during drawing.")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_170 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.10 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_171 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-07-13")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_172 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("New feature ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_173 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "Draw a rectangle to add a rectangle that is true south and true north.")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_174 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.9 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_175 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-07-07")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_176 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_177 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li>Fixed the issue that the <code>VcProviderImagerySupermap</code> component on the Supermap platform crashed when the layer was removed.</li><li>Fixed the issue that the <code>VcNavigation</code> component positioning error in 2D and Columbus views, #118.</li><li>Fixed the issue that the <code>VcViewer</code> component pass non-Prop Attributes and throws warnings.</li><li>Fixed the issue when picking up outside earth viewer the <code>VcSelectionIndicator</code> throws an error.</li></ul>", 1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_178 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.8 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_179 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-06-28")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_180 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("New feature ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_181 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "The polyline and polygon of vc-drawings, vc-measurements support the setting of display and hidden."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "The height of the coordinate measuring component supports absolute height and relative height.")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_182 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_183 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "The mouseover and mouseout events of the GeoJSON data source component trigger errors."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "The distance measurement and area measurement cancel the drawing of the previous point occasionally crash.")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_184 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.7 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_185 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-06-13")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_186 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("New feature ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_187 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-selection-indicator"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" a custom selector component to replace the selectionIndicator that comes with Cesium.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-ajax-bar"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" http request progress bar control.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-drawings"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" supports grounding, and add the function of drawing rectangles and circles.")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_188 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_189 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("When the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "infoBox"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" property of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" is set to "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", the component is loaded abnormally.")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "Fix the problem that the first point of the area object editing in the measuring component and drawing component is abnormal.")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_190 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.6 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_191 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-06-03")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_192 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("New feature ");

const _hoisted_193 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<li><code>vc-overlay-heatmap</code>, The heat map component is added, which can be used to visualize factors such as temperature and precipitation.</li><li><code>vc-measurements</code>, Add friendly measuring tools.</li><li><code>vc-drawings</code>, Add friendly drawing tools.</li><li><code>vc-post-process-stage</code> Add post-processing component.</li><li><code>vc-post-process-stage-scan</code> Add post-processing scanning component.</li><li><code>vc-post-process-stage-collection</code> Add post-processing assembly component.</li><li><code>vc-overview-map</code> Add overview map control component.</li>", 7);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_200 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Added compatible third-party ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_201 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("mars3d");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_202 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" library.");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_203 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Added compatible third-party ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_204 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("dc-sdk");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_205 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" library.");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_206 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.5.2 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_207 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-04-29")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_208 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("New feature ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_209 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-html"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", Load HTML element overlays by geographic location.")])], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_210 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Optimization ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_211 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "Improve some English documents."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "The language of Vetur's smart prompt is changed to English by default.")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_212 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.4 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_213 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-04-26")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_214 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Bug fixes ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_215 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "Document search function."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "The intellisense of Vetur is invalid.")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_216 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.3 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_217 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-04-23")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_218 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("New feature ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_219 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li><code>vc-primitive</code></li><li><code>vc-primitive-classfication</code></li><li><code>vc-primitive-ground</code></li><li><code>vc-primitive-polyline-ground</code></li><li><code>vc-primitive-model</code></li><li><code>vc-primitive-tileset</code></li><li><code>vc-primitive-particle</code></li><li><code>vc-collection-billboard</code></li><li><code>vc-collection-label</code></li><li><code>vc-collection-point</code></li><li><code>vc-collection-polyline</code></li><li><code>vc-collection-primitive</code></li><li><code>vc-instance-geometry</code></li><li><code>vc-geometry-box</code></li><li><code>vc-geometry-box-outline</code></li><li><code>vc-geometry-circle</code></li><li><code>vc-geometry-circle-outline</code></li><li><code>vc-geometry-corridor</code></li><li><code>vc-geometry-corridor-outline</code></li><li><code>vc-geometry-cylinder</code></li><li><code>vc-geometry-cylinder-outline</code></li><li><code>vc-geometry-ellipse</code></li><li><code>vc-geometry-ellipse-outline</code></li><li><code>vc-geometry-ellipsoid</code></li><li><code>vc-geometry-ellipsoid-outline</code></li><li><code>vc-geometry-frustum</code></li><li><code>vc-geometry-frustum-outline</code></li><li><code>vc-geometry-plane</code></li><li><code>vc-geometry-plane-outline</code></li><li><code>vc-geometry-polygon</code></li><li><code>vc-geometry-polygon-outline</code></li><li><code>vc-geometry-polygon-coplanar</code></li><li><code>vc-geometry-polygon-coplanar-outline</code></li><li><code>vc-geometry-polyline</code></li><li><code>vc-geometry-polyline-ground</code></li><li><code>vc-geometry-polyline-simple</code></li><li><code>vc-geometry-polyline-volume</code></li><li><code>vc-geometry-rectangle</code></li><li><code>vc-geometry-rectangle-outline</code></li><li><code>vc-geometry-sphere</code></li><li><code>vc-geometry-sphere-outline</code></li><li><code>vc-geometry-wall</code></li><li><code>vc-geometry-wall-outline</code></li></ul>", 1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_220 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.2 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_221 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-04-18")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_222 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("New feature ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_223 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li><code>vc-provider-terrain-cesium</code></li><li><code>vc-provider-terrain-arcgis</code></li><li><code>vc-provider-terrain-tianditu</code></li><li><code>vc-datasource-custom</code></li><li><code>vc-datasource-czml</code></li><li><code>vc-datasource-geojson</code></li><li><code>vc-datasource-kml</code></li><li><code>vc-navigation-sm</code></li><li><code>vc-compass-sm</code></li><li><code>vc-zoom-control-sm</code></li></ul>", 1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_224 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.1 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_225 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-04-07")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_226 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("New feature ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_227 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li><code>vc-layer-imagery</code></li><li><code>vc-provider-imagery-arcgis-mapserver</code></li><li><code>vc-provider-imagery-baidumap</code></li><li><code>vc-provider-imagery-bingmaps</code></li><li><code>vc-provider-imagery-googleearth-enterprise</code></li><li><code>vc-provider-imagery-grid</code></li><li><code>vc-provider-imagery-ion</code></li><li><code>vc-provider-imagery-mapbox-style</code></li><li><code>vc-provider-imagery-osm</code></li><li><code>vc-provider-imagery-tile-single</code></li><li><code>vc-provider-imagery-tile-coordinates</code></li><li><code>vc-provider-imagery-tile-mapservice</code></li><li><code>vc-provider-imagery-urltemplate</code></li><li><code>vc-provider-imagery-wms</code></li><li><code>vc-provider-imagery-wmts</code></li><li><code>vc-provider-imagery-tianditu</code></li><li><code>vc-provider-imagery-supermap</code></li><li><code>vc-provider-imagery-tiledcache</code></li><li><code>vc-graphics-billboard</code></li><li><code>vc-graphics-box</code></li><li><code>vc-graphics-corridor</code></li><li><code>vc-graphics-cylinder</code></li><li><code>vc-graphics-ellipse</code></li><li><code>vc-graphics-ellipsoid</code></li><li><code>vc-graphics-label</code></li><li><code>vc-graphics-model</code></li><li><code>vc-graphics-tileset</code></li><li><code>vc-graphics-path</code></li><li><code>vc-graphics-plane</code></li><li><code>vc-graphics-point</code></li><li><code>vc-graphics-polygon</code></li><li><code>vc-graphics-polyline</code></li><li><code>vc-graphics-polyline-volume</code></li><li><code>vc-graphics-rectangle</code></li><li><code>vc-graphics-wall</code></li></ul>", 1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_228 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3.0.1-beta.0 ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_229 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("em", null, "2021-03-30")], -1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_230 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("New feature ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_231 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<ul><li>Added <code>vc-viewer</code> component.</li><li>Refactor and upgrade the <code>vc-navigation</code> component, separate <code>vc-compass</code>, <code>vc-zoom-control</code>, <code>vc-print</code>, <code>vc-my-location</code>, <code>vc-status-bar</code>, <code>vc -distance-legend</code> is an independent component.</li><li>Added <code>vc-entity</code> component.</li></ul>", 1);

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_232 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Chore updates ");

const md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_233 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, "Adapt to vue 3.0, refer to the Element Plus project, written in TypeScript, and manage the project in lerna.")], -1);

function md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_render(_ctx, _cache) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "changelog",
    tabindex: "-1",
    content: "Changelog",
    href: "#changelog",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#changelog"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-onezero",
    tabindex: "-1",
    content: "3.0.10",
    href: "#three-zero-onezero",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-onezero"
    })]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-nine",
    tabindex: "-1",
    content: "3.0.9",
    href: "#three-zero-nine",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_6, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-nine"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_7, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-1",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-1",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-1"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-eight",
    tabindex: "-1",
    content: "3.0.8",
    href: "#three-zero-eight",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-eight"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-2",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-2",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-2"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/issues/149"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_14]),
    _: 1
  })])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-seven",
    tabindex: "-1",
    content: "3.0.7",
    href: "#three-zero-seven",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_15, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-seven"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-3",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-3",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-3"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_18, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "new-feature",
    tabindex: "-1",
    content: "New feature",
    href: "#new-feature",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_19, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_20, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/en-US/component/controls/vc-analyses"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_21]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_22]), Object(vue_esm_browser["createElementVNode"])("li", null, [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_23, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh-CN/component/primitives/vc-collection-cloud"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_24]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_25]), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_26, md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_27]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "breaking-changes",
    tabindex: "-1",
    content: "Breaking changes:",
    href: "#breaking-changes",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_28, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#breaking-changes"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_29, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-six",
    tabindex: "-1",
    content: "3.0.6",
    href: "#three-zero-six",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_30, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-six"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_31, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-4",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-4",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_32, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-4"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_33, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/issues/144"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_34]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_35])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "new-feature-1",
    tabindex: "-1",
    content: "New feature",
    href: "#new-feature-1",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_36, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-1"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_37, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/en-US/component/analyses/vc-analysis-flood"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_38]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_39])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-five",
    tabindex: "-1",
    content: "3.0.5",
    href: "#three-zero-five",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_40, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-five"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_41, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-5",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-5",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_42, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-5"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_43, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/issues/140"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_44]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_45]), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_46]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-four",
    tabindex: "-1",
    content: "3.0.4",
    href: "#three-zero-four",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_47, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-four"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_48, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-6",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-6",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_49, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-6"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_50, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-three",
    tabindex: "-1",
    content: "3.0.3",
    href: "#three-zero-three",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_51, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-three"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_52, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-7",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-7",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_53, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-7"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_54, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-onethree",
    tabindex: "-1",
    content: "3.0.2-beta.13",
    href: "#three-zero-two-beta-onethree",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_55, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-onethree"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_56, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-8",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-8",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_57, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-8"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_58, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "new-feature-2",
    tabindex: "-1",
    content: "New feature",
    href: "#new-feature-2",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_59, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-2"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_60, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/johnsoncodehk/volar"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_61]),
    _: 1
  })])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "refactors",
    tabindex: "-1",
    content: "Refactors",
    href: "#refactors",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_62, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#refactors"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_63, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-onetwo",
    tabindex: "-1",
    content: "3.0.2-beta.12",
    href: "#three-zero-two-beta-onetwo",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_64, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-onetwo"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_65, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-9",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-9",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_66, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-9"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_67, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "new-feature-3",
    tabindex: "-1",
    content: "New feature",
    href: "#new-feature-3",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_68, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-3"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_69, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "breaking-changes-1",
    tabindex: "-1",
    content: "Breaking changes:",
    href: "#breaking-changes-1",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_70, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#breaking-changes-1"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_71, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-oneone",
    tabindex: "-1",
    content: "3.0.2-beta.11",
    href: "#three-zero-two-beta-oneone",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_72, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-oneone"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_73, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-10",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-10",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_74, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-10"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_75, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "new-feature-4",
    tabindex: "-1",
    content: "New feature",
    href: "#new-feature-4",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_76, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-4"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_77, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-onezero",
    tabindex: "-1",
    content: "3.0.2-beta.10",
    href: "#three-zero-two-beta-onezero",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_78, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-onezero"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_79, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "new-feature-5",
    tabindex: "-1",
    content: "New feature",
    href: "#new-feature-5",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_80, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-5"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_81, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-11",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-11",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_82, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-11"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_83, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-nine",
    tabindex: "-1",
    content: "3.0.2-beta.9",
    href: "#three-zero-two-beta-nine",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_84, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-nine"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_85, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "new-feature-6",
    tabindex: "-1",
    content: "New feature",
    href: "#new-feature-6",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_86, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-6"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_87, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-eight",
    tabindex: "-1",
    content: "3.0.2-beta.8",
    href: "#three-zero-two-beta-eight",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_88, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-eight"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_89, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-12",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-12",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_90, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-12"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_91, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-seven",
    tabindex: "-1",
    content: "3.0.2-beta.7",
    href: "#three-zero-two-beta-seven",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_92, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-seven"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_93, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-13",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-13",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_94, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-13"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_95, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-six",
    tabindex: "-1",
    content: "3.0.2-beta.6",
    href: "#three-zero-two-beta-six",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_96, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-six"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_97, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-14",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-14",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_98, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-14"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_99, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-five",
    tabindex: "-1",
    content: "3.0.2-beta.5",
    href: "#three-zero-two-beta-five",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_100, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-five"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_101, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-15",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-15",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_102, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-15"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_103, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/zouyaoji/vue-cesium/issues/126"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_104]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_105])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-four",
    tabindex: "-1",
    content: "3.0.2-beta.4",
    href: "#three-zero-two-beta-four",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_106, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-four"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_107, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "new-feature-7",
    tabindex: "-1",
    content: "New feature",
    href: "#new-feature-7",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_108, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-7"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_109, md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_110, md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_111, md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_112, md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_113, md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_114, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/en-US/component/tools/vc-drawings"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_115]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_116])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-16",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-16",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_117, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-16"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_118, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-three",
    tabindex: "-1",
    content: "3.0.2-beta.3",
    href: "#three-zero-two-beta-three",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_119, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-three"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_120, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "new-feature-8",
    tabindex: "-1",
    content: "New feature",
    href: "#new-feature-8",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_121, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-8"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_122, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "optimization",
    tabindex: "-1",
    content: "Optimization",
    href: "#optimization",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_123, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#optimization"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_124, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-17",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-17",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_125, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-17"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_126, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-two",
    tabindex: "-1",
    content: "3.0.2-beta.2",
    href: "#three-zero-two-beta-two",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_127, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-two"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_128, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "new-feature-9",
    tabindex: "-1",
    content: "New feature",
    href: "#new-feature-9",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_129, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-9"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_130, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-18",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-18",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_131, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-18"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_132, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-two-beta-one",
    tabindex: "-1",
    content: "3.0.2-beta.1",
    href: "#three-zero-two-beta-one",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_133, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-two-beta-one"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_134, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "breaking-changes-2",
    tabindex: "-1",
    content: "Breaking changes:",
    href: "#breaking-changes-2",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_135, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#breaking-changes-2"
    })]),
    _: 1
  }), _hoisted_136, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-19",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-19",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_138, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-19"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_139, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-onefive",
    tabindex: "-1",
    content: "3.0.1-beta.15",
    href: "#three-zero-one-beta-onefive",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_140, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-onefive"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_141, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-20",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-20",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_142, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-20"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_143, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "optimization-1",
    tabindex: "-1",
    content: "Optimization",
    href: "#optimization-1",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_144, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#optimization-1"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_145, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-onefour",
    tabindex: "-1",
    content: "3.0.1-beta.14",
    href: "#three-zero-one-beta-onefour",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_146, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-onefour"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_147, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-21",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-21",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_148, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-21"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_149, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "optimization-2",
    tabindex: "-1",
    content: "Optimization",
    href: "#optimization-2",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_150, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#optimization-2"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_151, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-onethree",
    tabindex: "-1",
    content: "3.0.1-beta.13",
    href: "#three-zero-one-beta-onethree",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_152, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-onethree"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_153, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "new-feature-10",
    tabindex: "-1",
    content: "New feature",
    href: "#new-feature-10",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_154, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-10"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_155, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-22",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-22",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_156, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-22"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_157, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-onetwo",
    tabindex: "-1",
    content: "3.0.1-beta.12",
    href: "#three-zero-one-beta-onetwo",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_158, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-onetwo"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_159, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-23",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-23",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_160, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-23"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_161, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-oneone",
    tabindex: "-1",
    content: "3.0.1-beta.11",
    href: "#three-zero-one-beta-oneone",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_162, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-oneone"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_163, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "new-feature-11",
    tabindex: "-1",
    content: "New feature",
    href: "#new-feature-11",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_164, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-11"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_165, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-24",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-24",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_166, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-24"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_167, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "optimization-3",
    tabindex: "-1",
    content: "Optimization",
    href: "#optimization-3",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_168, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#optimization-3"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_169, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-onezero",
    tabindex: "-1",
    content: "3.0.1-beta.10",
    href: "#three-zero-one-beta-onezero",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_170, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-onezero"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_171, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "new-feature-12",
    tabindex: "-1",
    content: "New feature",
    href: "#new-feature-12",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_172, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-12"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_173, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-nine",
    tabindex: "-1",
    content: "3.0.1-beta.9",
    href: "#three-zero-one-beta-nine",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_174, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-nine"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_175, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-25",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-25",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_176, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-25"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_177, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-eight",
    tabindex: "-1",
    content: "3.0.1-beta.8",
    href: "#three-zero-one-beta-eight",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_178, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-eight"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_179, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "new-feature-13",
    tabindex: "-1",
    content: "New feature",
    href: "#new-feature-13",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_180, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-13"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_181, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-26",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-26",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_182, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-26"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_183, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-seven",
    tabindex: "-1",
    content: "3.0.1-beta.7",
    href: "#three-zero-one-beta-seven",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_184, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-seven"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_185, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "new-feature-14",
    tabindex: "-1",
    content: "New feature",
    href: "#new-feature-14",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_186, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-14"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_187, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-27",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-27",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_188, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-27"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_189, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-six",
    tabindex: "-1",
    content: "3.0.1-beta.6",
    href: "#three-zero-one-beta-six",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_190, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-six"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_191, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "new-feature-15",
    tabindex: "-1",
    content: "New feature",
    href: "#new-feature-15",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_192, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-15"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [_hoisted_193, Object(vue_esm_browser["createElementVNode"])("li", null, [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_200, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/en-US/component/platforms/vc-demo-mars3d"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_201]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_202]), Object(vue_esm_browser["createElementVNode"])("li", null, [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_203, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/en-US/component/platforms/vc-demo-dc-sdk"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_204]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_205])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-five-two",
    tabindex: "-1",
    content: "3.0.1-beta.5.2",
    href: "#three-zero-one-beta-five-two",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_206, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-five-two"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_207, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "new-feature-16",
    tabindex: "-1",
    content: "New feature",
    href: "#new-feature-16",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_208, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-16"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_209, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "optimization-4",
    tabindex: "-1",
    content: "Optimization",
    href: "#optimization-4",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_210, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#optimization-4"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_211, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-four",
    tabindex: "-1",
    content: "3.0.1-beta.4",
    href: "#three-zero-one-beta-four",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_212, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-four"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_213, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "bug-fixes-28",
    tabindex: "-1",
    content: "Bug fixes",
    href: "#bug-fixes-28",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_214, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bug-fixes-28"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_215, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-three",
    tabindex: "-1",
    content: "3.0.1-beta.3",
    href: "#three-zero-one-beta-three",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_216, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-three"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_217, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "new-feature-17",
    tabindex: "-1",
    content: "New feature",
    href: "#new-feature-17",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_218, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-17"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_219, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-two",
    tabindex: "-1",
    content: "3.0.1-beta.2",
    href: "#three-zero-one-beta-two",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_220, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-two"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_221, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "new-feature-18",
    tabindex: "-1",
    content: "New feature",
    href: "#new-feature-18",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_222, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-18"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_223, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-one",
    tabindex: "-1",
    content: "3.0.1-beta.1",
    href: "#three-zero-one-beta-one",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_224, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-one"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_225, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "new-feature-19",
    tabindex: "-1",
    content: "New feature",
    href: "#new-feature-19",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_226, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-19"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_227, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "three-zero-one-beta-zero",
    tabindex: "-1",
    content: "3.0.1-beta.0",
    href: "#three-zero-one-beta-zero",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_228, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#three-zero-one-beta-zero"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_229, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "new-feature-20",
    tabindex: "-1",
    content: "New feature",
    href: "#new-feature-20",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_230, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#new-feature-20"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_231, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "chore-updates",
    tabindex: "-1",
    content: "Chore updates",
    href: "#chore-updates",
    level: "4"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_232, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chore-updates"
    })]),
    _: 1
  }), md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_hoisted_233, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./CHANGELOG.en-US.md?vue&type=template&id=d867e1b0

// CONCATENATED MODULE: ./CHANGELOG.en-US.md

const CHANGELOG_en_US_script = {}
CHANGELOG_en_US_script.render = md_loader_CHANGELOG_en_USvue_type_template_id_d867e1b0_render

/* harmony default export */ var CHANGELOG_en_US = (CHANGELOG_en_US_script);
// EXTERNAL MODULE: ./website/i18n/page.json
var page = __webpack_require__(979);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--12-0!./website/pages/changelog.vue?vue&type=script&lang=js



/* harmony default export */ var changelogvue_type_script_lang_js = ({
  components: {
    ChangeLogCn: CHANGELOG_zh_CN,
    ChangeLogEn: CHANGELOG_en_US
  },

  data() {
    return {
      lang: this.$route.meta.lang
    };
  },

  computed: {
    langConfig() {
      return page.filter(config => config.lang === this.lang)[0].pages.changelog;
    }

  },

  mounted() {
    const changeLog = this.$refs.changeLog;
    const changeLogNodes = changeLog.$el.children;
    let a = changeLogNodes[1].querySelector('a');
    a && a.remove();
    let release = changeLogNodes[1].textContent.trim();
    let fragments = `<li><h3><a href="https://github.com/zouyaoji/vue-cesium/releases/tag/v${release}" target="_blank">${release}</a></h3>`;

    for (let len = changeLogNodes.length, i = 2; i < len; i++) {
      let node = changeLogNodes[i];
      a = changeLogNodes[i].querySelector('a');
      a && a.getAttribute('class') === 'header-anchor' && a.remove();

      if (node.tagName !== 'H3') {
        fragments += changeLogNodes[i].outerHTML;
      } else {
        release = changeLogNodes[i].textContent.trim();
        fragments += `</li><li><h3><a href="https://github.com/zouyaoji/vue-cesium/releases/tag/v${release}" target="_blank">${release}</a></h3>`;
      }
    }

    fragments = fragments.replace(/#(\d+)/g, '<a href="https://github.com/zouyaoji/vue-cesium/issues/$1" target="_blank">#$1</a>');
    fragments = fragments.replace(/@([\w-]+)/g, '<a href="https://github.com/$1" target="_blank">@$1</a>');
    this.$refs.timeline.innerHTML = `${fragments}</li>`;
    changeLog.$el.remove();
  }

});
// CONCATENATED MODULE: ./website/pages/changelog.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./website/pages/changelog.vue?vue&type=style&index=0&id=f3c423f8&lang=scss
var changelogvue_type_style_index_0_id_f3c423f8_lang_scss = __webpack_require__(990);

// CONCATENATED MODULE: ./website/pages/changelog.vue





changelogvue_type_script_lang_js.render = render

/* harmony default export */ var changelog = __webpack_exports__["default"] = (changelogvue_type_script_lang_js);

/***/ }),

/***/ 979:
/***/ (function(module) {

module.exports = JSON.parse("[{\"lang\":\"zh-CN\",\"pages\":{\"index\":{\"1\":\"三维网站快速成型工具\",\"2\":\"VueCesium，一套为 GISer 准备的基于 Vue 2.x & Vue 3.x 的 CesiumJS 组件库\",\"3\":\"指南\",\"4\":\"了解设计指南，帮助开发人员搭建逻辑清晰、结构合理且高效易用的应用。\",\"5\":\"查看详情\",\"6\":\"组件\",\"7\":\"使用 Demo 快速体验三维场景；使用前端框架封装的代码帮助工程师快速开发。\",\"8\":\"资源\",\"9\":\"下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。\",\"lang\":\"zh-CN\",\"titleSize\":\"34\",\"paraSize\":\"18\"},\"component\":{},\"theme-preview\":{\"1\":\"返回\"},\"changelog\":{\"1\":\"更新日志\",\"2\":\"zh-CN\"},\"donations\":{\"1\":\"赞助\",\"2\":\"zh-CN\"},\"design\":{\"1\":\"设计原则\",\"2\":\"一致\",\"3\":\"Consistency\",\"6\":\"效率\",\"7\":\"Efficiency\",\"8\":\"可控\",\"9\":\"Controllability\",\"10\":\"一致性 Consistency\",\"11\":\"API 一致：\",\"12\":\"与加载的 Cesium 库的 API 一致；\",\"13\":\"规范一致：\",\"14\":\"遵循 Vue 风格指南。\",\"20\":\"效率 Efficiency\",\"21\":\"清晰明确：\",\"22\":\"采用 Vue 组合式 API 开发，代码可读性高；\",\"23\":\"简化流程：\",\"24\":\"MVVM 数据驱动 + 组件复用，极大简化代码量。\",\"27\":\"可控 Controllability\",\"28\":\"开源可控：\",\"29\":\"VueCesium 采用 MIT 开源协议；\",\"30\":\"产品可控：\",\"31\":\"用户可根据需求加载原生 Cesium 库、自己修改的 Cesium 库以及第三方扩展的 Cesium 库均可。\"},\"guide\":{\"1\":\"设计原则\",\"2\":\"导航\"},\"resource\":{\"1\":\"资源\",\"2\":\"整理中\",\"paraHeight\":\"1.8\",\"placeholder1\":\"整理中\",\"placeholder2\":\"资源正在整理和完善中\"}}},{\"lang\":\"en-US\",\"pages\":{\"index\":{\"1\":\"A component library of CesiumJS\",\"2\":\"VueCesium, a Vue 2.x & Vue 3.x based component library of CesiumJS for GISer\",\"3\":\"Guide\",\"4\":\"Understand the design guidelines, helping designers build product that's logically sound, reasonably structured and easy to use.\",\"5\":\"View Detail\",\"6\":\"Component\",\"7\":\"Experience the 3D scene by strolling through component demos. Use encapsulated code to improve developing efficiency.\",\"8\":\"Resource\",\"9\":\"Download relevant design resources for shaping page prototype or visual draft, increasing design efficiency.\",\"10\":\"Theme\",\"11\":\"Online theme roller, visualize custom and manage site themes and component styles\",\"12\":\"Theme customization is available!\",\"13\":\"Click here\",\"14\":\"Make your own theme\",\"lang\":\"en-US\",\"titleSize\":\"34\",\"paraSize\":\"18\"},\"component\":{},\"theme\":{\"1\":\"Official Theme\",\"2\":\"My Theme\",\"3\":\"Theme name\"},\"theme-preview\":{\"1\":\"Back\"},\"theme-nav\":{},\"changelog\":{\"1\":\"Changelog\",\"2\":\"en-US\"},\"donations\":{\"1\":\"Donation\",\"2\":\"en-US\"},\"design\":{\"1\":\"Design Disciplines\",\"2\":\"Consistency\",\"3\":\"\",\"4\":\"Feedback\",\"5\":\"\",\"6\":\"Efficiency\",\"7\":\"\",\"8\":\"Controllability\",\"9\":\"\",\"10\":\"Consistency\",\"11\":\"Consistent with API: \",\"12\":\"Consistent with the API of the loaded Cesium library.\",\"13\":\"Consistent norms: \",\"14\":\"Follow the Vue style guide.\",\"21\":\"Definite and clear: \",\"22\":\"Developed with Vue Composition API, high readability.\",\"23\":\"Simplify the process: \",\"24\":\"MVVM data drive + component reuse, greatly simplifying the amount of code.\",\"25\":\"Easy to identify: \",\"26\":\"the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.\",\"27\":\"Controllability\",\"28\":\"Open source: \",\"29\":\"MIT open source agreement, the related technology cited will also indicate the source.\",\"30\":\"Controlled product: \",\"31\":\"users can load native Cesium, self-modified Cesium, and third-party extended Cesium according to their needs.\"},\"guide\":{\"1\":\"Design Disciplines\",\"2\":\"Navigation\"},\"resource\":{\"1\":\"Resource\",\"2\":\"Under construction.\",\"paraHeight\":\"1.6\",\"placeholder1\":\"Under construction\",\"placeholder2\":\"More resources are being developed\"}}}]");

/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(18);
            var content = __webpack_require__(991);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_pnpm_style_loader_1_3_0_webpack_4_44_1_node_modules_style_loader_dist_cjs_js_node_modules_pnpm_mini_css_extract_plugin_0_11_2_webpack_4_44_1_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_pnpm_css_loader_4_3_0_webpack_4_44_1_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_vue_loader_16_5_0_2a2707c7f6fb238ee6d53f3ae7e6e321_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_sass_loader_10_2_0_sass_1_49_7_webpack_4_44_1_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_pnpm_vue_loader_16_5_0_2a2707c7f6fb238ee6d53f3ae7e6e321_node_modules_vue_loader_dist_index_js_ref_12_0_changelog_vue_vue_type_style_index_0_id_f3c423f8_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(981);
/* harmony import */ var _node_modules_pnpm_style_loader_1_3_0_webpack_4_44_1_node_modules_style_loader_dist_cjs_js_node_modules_pnpm_mini_css_extract_plugin_0_11_2_webpack_4_44_1_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_pnpm_css_loader_4_3_0_webpack_4_44_1_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_vue_loader_16_5_0_2a2707c7f6fb238ee6d53f3ae7e6e321_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_sass_loader_10_2_0_sass_1_49_7_webpack_4_44_1_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_pnpm_vue_loader_16_5_0_2a2707c7f6fb238ee6d53f3ae7e6e321_node_modules_vue_loader_dist_index_js_ref_12_0_changelog_vue_vue_type_style_index_0_id_f3c423f8_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_1_3_0_webpack_4_44_1_node_modules_style_loader_dist_cjs_js_node_modules_pnpm_mini_css_extract_plugin_0_11_2_webpack_4_44_1_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_pnpm_css_loader_4_3_0_webpack_4_44_1_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_vue_loader_16_5_0_2a2707c7f6fb238ee6d53f3ae7e6e321_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_sass_loader_10_2_0_sass_1_49_7_webpack_4_44_1_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_pnpm_vue_loader_16_5_0_2a2707c7f6fb238ee6d53f3ae7e6e321_node_modules_vue_loader_dist_index_js_ref_12_0_changelog_vue_vue_type_style_index_0_id_f3c423f8_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);