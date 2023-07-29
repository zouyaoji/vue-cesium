(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[214],{

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--12-0!./website/pages/resource.vue?vue&type=template&id=2d387bdd&scoped=true


const _withScopeId = n => (Object(vue_esm_browser["pushScopeId"])("data-v-2d387bdd"), n = n(), Object(vue_esm_browser["popScopeId"])(), n);

const _hoisted_1 = {
  class: "page-container page-resource"
};

const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", {
  class: "cards"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", {
  class: "container"
})], -1));

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("div", _hoisted_1, [Object(vue_esm_browser["createElementVNode"])("h2", null, Object(vue_esm_browser["toDisplayString"])($options.langConfig[1]), 1), Object(vue_esm_browser["createElementVNode"])("p", null, Object(vue_esm_browser["toDisplayString"])($options.langConfig.placeholder2), 1), (Object(vue_esm_browser["openBlock"])(true), Object(vue_esm_browser["createElementBlock"])(vue_esm_browser["Fragment"], null, Object(vue_esm_browser["renderList"])($options.langConfig.links, (link, index) => {
    return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createBlock"])(_component_app_link, {
      key: index,
      href: link.href
    }, {
      default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])(Object(vue_esm_browser["toDisplayString"])(link.name), 1)]),
      _: 2
    }, 1032, ["href"]);
  }), 128)), _hoisted_2]);
}
// CONCATENATED MODULE: ./website/pages/resource.vue?vue&type=template&id=2d387bdd&scoped=true

// EXTERNAL MODULE: ./website/i18n/page.json
var page = __webpack_require__(857);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--12-0!./website/pages/resource.vue?vue&type=script&lang=js

/* harmony default export */ var resourcevue_type_script_lang_js = ({
  data() {
    return {
      lang: this.$route.meta.lang
    };
  },

  computed: {
    langConfig() {
      return page.filter(config => config.lang === this.lang)[0].pages.resource;
    }

  }
});
// CONCATENATED MODULE: ./website/pages/resource.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./website/pages/resource.vue?vue&type=style&index=0&id=2d387bdd&lang=scss&scoped=true
var resourcevue_type_style_index_0_id_2d387bdd_lang_scss_scoped_true = __webpack_require__(881);

// CONCATENATED MODULE: ./website/pages/resource.vue





resourcevue_type_script_lang_js.render = render
resourcevue_type_script_lang_js.__scopeId = "data-v-2d387bdd"

/* harmony default export */ var resource = __webpack_exports__["default"] = (resourcevue_type_script_lang_js);

/***/ }),

/***/ 857:
/***/ (function(module) {

module.exports = JSON.parse("[{\"lang\":\"zh-CN\",\"pages\":{\"index\":{\"1\":\"Vue for Cesium\",\"2\":\"基于 Vue 3，面向开发者的 CesiumJS 组件库。\",\"3\":\"指南\",\"4\":\"了解设计指南，帮助开发人员搭建逻辑清晰、结构合理且高效易用的应用。\",\"5\":\"查看详情\",\"6\":\"组件\",\"7\":\"使用 Demo 快速体验三维场景；使用前端框架封装的代码帮助工程师快速开发。\",\"8\":\"资源\",\"9\":\"下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。\",\"10\":\"已加入 Cesium 认证开发者计划\",\"lang\":\"zh-CN\",\"titleSize\":\"34\",\"paraSize\":\"18\"},\"component\":{},\"theme-preview\":{\"1\":\"返回\"},\"changelog\":{\"1\":\"更新日志\",\"2\":\"zh-CN\"},\"donations\":{\"1\":\"赞助\",\"2\":\"zh-CN\"},\"design\":{\"1\":\"设计原则\",\"2\":\"一致\",\"3\":\"Consistency\",\"6\":\"效率\",\"7\":\"Efficiency\",\"8\":\"可控\",\"9\":\"Controllability\",\"10\":\"一致性 Consistency\",\"11\":\"API 一致：\",\"12\":\"与加载的 Cesium 库的 API 一致；\",\"13\":\"规范一致：\",\"14\":\"遵循 Vue 风格指南。\",\"20\":\"效率 Efficiency\",\"21\":\"清晰明确：\",\"22\":\"采用 Vue 组合式 API 开发，代码可读性高；\",\"23\":\"简化流程：\",\"24\":\"MVVM 数据驱动 + 组件复用，极大简化代码量。\",\"27\":\"可控 Controllability\",\"28\":\"开源可控：\",\"29\":\"Vue for Cesium 采用 MIT 开源协议；\",\"30\":\"产品可控：\",\"31\":\"用户可根据需求加载原生 Cesium 库、自己修改的 Cesium 库以及第三方扩展的 Cesium 库均可。\"},\"guide\":{\"1\":\"设计原则\",\"2\":\"导航\"},\"resource\":{\"1\":\"资源\",\"2\":\"整理中\",\"paraHeight\":\"1.8\",\"placeholder1\":\"整理中\",\"placeholder2\":\"资源正在整理和完善中...\",\"links\":[{\"name\":\"超图 iClent3D-Cesium\",\"href\":\"http://support.supermap.com.cn:8090/iserver/iClient/for3D/webgl/zh/examples/webgl/examples.html#layer\"}]}}},{\"lang\":\"en-US\",\"pages\":{\"index\":{\"1\":\"Vue for Cesium\",\"2\":\"A Vue3 based component library of CesiumJS for developers.\",\"3\":\"Guide\",\"4\":\"Understand the design guidelines, helping designers build product that's logically sound, reasonably structured and easy to use.\",\"5\":\"View Detail\",\"6\":\"Component\",\"7\":\"Experience the 3D scene by strolling through component demos. Use encapsulated code to improve developing efficiency.\",\"8\":\"Resource\",\"9\":\"Download relevant design resources for shaping page prototype or visual draft, increasing design efficiency.\",\"10\":\"Joined the Cesium Certified Developer Program\",\"lang\":\"en-US\",\"titleSize\":\"34\",\"paraSize\":\"18\"},\"component\":{},\"theme\":{\"1\":\"Official Theme\",\"2\":\"My Theme\",\"3\":\"Theme name\"},\"theme-preview\":{\"1\":\"Back\"},\"theme-nav\":{},\"changelog\":{\"1\":\"Changelog\",\"2\":\"en-US\"},\"donations\":{\"1\":\"Donation\",\"2\":\"en-US\"},\"design\":{\"1\":\"Design Disciplines\",\"2\":\"Consistency\",\"3\":\"\",\"4\":\"Feedback\",\"5\":\"\",\"6\":\"Efficiency\",\"7\":\"\",\"8\":\"Controllability\",\"9\":\"\",\"10\":\"Consistency\",\"11\":\"Consistent with API: \",\"12\":\"Consistent with the API of the loaded Cesium library.\",\"13\":\"Consistent norms: \",\"14\":\"Follow the Vue style guide.\",\"21\":\"Definite and clear: \",\"22\":\"Developed with Vue Composition API, high readability.\",\"23\":\"Simplify the process: \",\"24\":\"MVVM data drive + component reuse, greatly simplifying the amount of code.\",\"25\":\"Easy to identify: \",\"26\":\"the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.\",\"27\":\"Controllability\",\"28\":\"Open source: \",\"29\":\"MIT open source agreement, the related technology cited will also indicate the source.\",\"30\":\"Controlled product: \",\"31\":\"users can load native Cesium, self-modified Cesium, and third-party extended Cesium according to their needs.\"},\"guide\":{\"1\":\"Design Disciplines\",\"2\":\"Navigation\"},\"resource\":{\"1\":\"Resource\",\"2\":\"Under construction.\",\"paraHeight\":\"1.6\",\"placeholder1\":\"Under construction\",\"placeholder2\":\"More resources are being developed...\",\"links\":[{\"name\":\"SuperMap's iClent3D-Cesium\",\"href\":\"http://support.supermap.com.cn:8090/iserver/iClient/for3D/webgl/zh/examples/webgl/examples.html#layer\"}]}}}]");

/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(25);
            var content = __webpack_require__(882);

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

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_pnpm_style_loader_1_3_0_webpack_4_44_1_node_modules_style_loader_dist_cjs_js_node_modules_pnpm_mini_css_extract_plugin_0_11_2_webpack_4_44_1_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_pnpm_css_loader_4_3_0_webpack_4_44_1_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_vue_loader_16_5_0_vue_compiler_sfc_3_2_30_webpack_4_44_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_sass_loader_10_2_0_sass_1_49_7_webpack_4_44_1_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_pnpm_vue_loader_16_5_0_vue_compiler_sfc_3_2_30_webpack_4_44_1_node_modules_vue_loader_dist_index_js_ref_12_0_resource_vue_vue_type_style_index_0_id_2d387bdd_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(866);
/* harmony import */ var _node_modules_pnpm_style_loader_1_3_0_webpack_4_44_1_node_modules_style_loader_dist_cjs_js_node_modules_pnpm_mini_css_extract_plugin_0_11_2_webpack_4_44_1_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_pnpm_css_loader_4_3_0_webpack_4_44_1_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_vue_loader_16_5_0_vue_compiler_sfc_3_2_30_webpack_4_44_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_sass_loader_10_2_0_sass_1_49_7_webpack_4_44_1_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_pnpm_vue_loader_16_5_0_vue_compiler_sfc_3_2_30_webpack_4_44_1_node_modules_vue_loader_dist_index_js_ref_12_0_resource_vue_vue_type_style_index_0_id_2d387bdd_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_1_3_0_webpack_4_44_1_node_modules_style_loader_dist_cjs_js_node_modules_pnpm_mini_css_extract_plugin_0_11_2_webpack_4_44_1_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_pnpm_css_loader_4_3_0_webpack_4_44_1_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_vue_loader_16_5_0_vue_compiler_sfc_3_2_30_webpack_4_44_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_sass_loader_10_2_0_sass_1_49_7_webpack_4_44_1_node_modules_sass_loader_dist_cjs_js_ref_5_3_node_modules_pnpm_vue_loader_16_5_0_vue_compiler_sfc_3_2_30_webpack_4_44_1_node_modules_vue_loader_dist_index_js_ref_12_0_resource_vue_vue_type_style_index_0_id_2d387bdd_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);