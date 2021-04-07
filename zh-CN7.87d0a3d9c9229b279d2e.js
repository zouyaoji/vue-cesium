(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--11-0!./website/pages/resource.vue?vue&type=template&id=3aac7dc8&scoped=true


var _withId = /*#__PURE__*/Object(vue_esm_browser["hb" /* withScopeId */])("data-v-3aac7dc8");

Object(vue_esm_browser["I" /* pushScopeId */])("data-v-3aac7dc8");

var _hoisted_1 = {
  class: "page-container page-resource"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", {
  class: "cards"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("ul", {
  class: "container"
})], -1);

Object(vue_esm_browser["G" /* popScopeId */])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("div", _hoisted_1, [Object(vue_esm_browser["n" /* createVNode */])("h2", null, Object(vue_esm_browser["S" /* toDisplayString */])($options.langConfig[1]), 1), Object(vue_esm_browser["n" /* createVNode */])("p", null, Object(vue_esm_browser["S" /* toDisplayString */])($options.langConfig.placeholder2), 1), _hoisted_2]);
});
// CONCATENATED MODULE: ./website/pages/resource.vue?vue&type=template&id=3aac7dc8&scoped=true

// EXTERNAL MODULE: ./website/i18n/page.json
var page = __webpack_require__(525);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--11-0!./website/pages/resource.vue?vue&type=script&lang=js

/* harmony default export */ var resourcevue_type_script_lang_js = ({
  data: function data() {
    return {
      lang: this.$route.meta.lang
    };
  },
  computed: {
    langConfig: function langConfig() {
      var _this = this;

      return page.filter(function (config) {
        return config.lang === _this.lang;
      })[0].pages.resource;
    }
  }
});
// CONCATENATED MODULE: ./website/pages/resource.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(12);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./node_modules/vue-loader/dist??ref--11-0!./website/pages/resource.vue?vue&type=style&index=0&id=3aac7dc8&lang=scss&scoped=true
var resourcevue_type_style_index_0_id_3aac7dc8_lang_scss_scoped_true = __webpack_require__(534);
var resourcevue_type_style_index_0_id_3aac7dc8_lang_scss_scoped_true_default = /*#__PURE__*/__webpack_require__.n(resourcevue_type_style_index_0_id_3aac7dc8_lang_scss_scoped_true);

// CONCATENATED MODULE: ./node_modules/style-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./node_modules/vue-loader/dist??ref--11-0!./website/pages/resource.vue?vue&type=style&index=0&id=3aac7dc8&lang=scss&scoped=true

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(resourcevue_type_style_index_0_id_3aac7dc8_lang_scss_scoped_true_default.a, options);



/* harmony default export */ var pages_resourcevue_type_style_index_0_id_3aac7dc8_lang_scss_scoped_true = (resourcevue_type_style_index_0_id_3aac7dc8_lang_scss_scoped_true_default.a.locals || {});
// CONCATENATED MODULE: ./website/pages/resource.vue?vue&type=style&index=0&id=3aac7dc8&lang=scss&scoped=true

// CONCATENATED MODULE: ./website/pages/resource.vue





resourcevue_type_script_lang_js.render = render
resourcevue_type_script_lang_js.__scopeId = "data-v-3aac7dc8"

/* harmony default export */ var resource = __webpack_exports__["default"] = (resourcevue_type_script_lang_js);

/***/ }),

/***/ 525:
/***/ (function(module) {

module.exports = JSON.parse("[{\"lang\":\"zh-CN\",\"pages\":{\"index\":{\"1\":\"三维网站快速成型工具\",\"2\":\"VueCesium，一套为 GISer 准备的基于 Vue 3.x 的 CesiumJS 组件库\",\"3\":\"指南\",\"4\":\"了解设计指南，帮助开发人员搭建逻辑清晰、结构合理且高效易用的应用。\",\"5\":\"查看详情\",\"6\":\"组件\",\"7\":\"使用 Demo 快速体验三维场景；使用前端框架封装的代码帮助工程师快速开发。\",\"8\":\"资源\",\"9\":\"下载相关资源，用其快速搭建页面原型或高保真视觉稿，提升产品设计效率。\",\"lang\":\"zh-CN\",\"titleSize\":\"34\",\"paraSize\":\"18\"},\"component\":{},\"theme-preview\":{\"1\":\"返回\"},\"changelog\":{\"1\":\"更新日志\",\"2\":\"zh-CN\"},\"donations\":{\"1\":\"捐赠\",\"2\":\"zh-CN\"},\"design\":{\"1\":\"设计原则\",\"2\":\"一致\",\"3\":\"Consistency\",\"6\":\"效率\",\"7\":\"Efficiency\",\"8\":\"可控\",\"9\":\"Controllability\",\"10\":\"一致性 Consistency\",\"11\":\"API 一致：\",\"12\":\"与加载的 Cesium 库的 API 一致；\",\"13\":\"规范一致：\",\"14\":\"遵循 Vue 风格指南。\",\"20\":\"效率 Efficiency\",\"21\":\"清晰明确：\",\"22\":\"采用 Vue 组合式 API 开发，代码可读性高；\",\"23\":\"简化流程：\",\"24\":\"MVVM 数据驱动 + 组件复用，极大简化代码量。\",\"27\":\"可控 Controllability\",\"28\":\"开源可控：\",\"29\":\"VueCesium 采用 MIT 开源协议；\",\"30\":\"产品可控：\",\"31\":\"用户可根据需求加载原生 Cesium 库、自己修改的 Cesium 库以及第三方扩展的 Cesium 库均可。\"},\"guide\":{\"1\":\"设计原则\",\"2\":\"导航\"},\"resource\":{\"1\":\"资源\",\"2\":\"整理中\",\"paraHeight\":\"1.8\",\"placeholder1\":\"整理中\",\"placeholder2\":\"资源正在整理和完善中\"}}},{\"lang\":\"en-US\",\"pages\":{\"index\":{\"1\":\"Vue 3.x components for CesiumJS\",\"2\":\"VueCesium, a Vue 3.x based component library of CesiumJS for GISer\",\"3\":\"Guide\",\"4\":\"Understand the design guidelines, helping designers build product that's logically sound, reasonably structured and easy to use.\",\"5\":\"View Detail\",\"6\":\"Component\",\"7\":\"Experience the 3D scene by strolling through component demos. Use encapsulated code to improve developing efficiency.\",\"8\":\"Resource\",\"9\":\"Download relevant design resources for shaping page prototype or visual draft, increasing design efficiency.\",\"10\":\"Theme\",\"11\":\"Online theme roller, visualize custom and manage site themes and component styles\",\"12\":\"Theme customization is available!\",\"13\":\"Click here\",\"14\":\"Make your own theme\",\"lang\":\"en-US\",\"titleSize\":\"34\",\"paraSize\":\"18\"},\"component\":{},\"theme\":{\"1\":\"Official Theme\",\"2\":\"My Theme\",\"3\":\"Theme name\"},\"theme-preview\":{\"1\":\"Back\"},\"theme-nav\":{},\"changelog\":{\"1\":\"Changelog\",\"2\":\"en-US\"},\"donations\":{\"1\":\"Donations\",\"2\":\"en-US\"},\"design\":{\"1\":\"Design Disciplines\",\"2\":\"Consistency\",\"3\":\"\",\"4\":\"Feedback\",\"5\":\"\",\"6\":\"Efficiency\",\"7\":\"\",\"8\":\"Controllability\",\"9\":\"\",\"10\":\"Consistency\",\"11\":\"Consistent with API: \",\"12\":\"Consistent with the API of the loaded Cesium library.\",\"13\":\"Consistent norms: \",\"14\":\"Follow the Vue style guide.\",\"21\":\"Definite and clear: \",\"22\":\"Developed with Vue Composition API, high readability.\",\"23\":\"Simplify the process: \",\"24\":\"MVVM data drive + component reuse, greatly simplifying the amount of code.\",\"25\":\"Easy to identify: \",\"26\":\"the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.\",\"27\":\"Controllability\",\"28\":\"Open source: \",\"29\":\"MIT open source agreement, the related technology cited will also indicate the source.\",\"30\":\"Controlled product: \",\"31\":\"users can load native Cesium, self-modified Cesium, and third-party extended Cesium according to their needs.\"},\"guide\":{\"1\":\"Design Disciplines\",\"2\":\"Navigation\"},\"resource\":{\"1\":\"Resource\",\"2\":\"Under construction.\",\"paraHeight\":\"1.6\",\"placeholder1\":\"Under construction\",\"placeholder2\":\"More resources are being developed\"}}}]");

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);