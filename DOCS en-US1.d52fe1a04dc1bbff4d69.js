(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/controls/vc-ajax-bar.md?vue&type=template&id=d3969ba0

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h2", {
  id: "vcajaxbar"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vcajaxbar"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" VcAjaxBar")], -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "Loading request progress bar control.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" Basic usage")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Basic usage of the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-ajax-bar"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" component.")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-ajax-bar"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tag to add a request progress bar control.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- default -->\n    <vc-ajax-bar></vc-ajax-bar>\n    <!-- custom -->\n    <vc-ajax-bar position=\"bottom\" color=\"#21BA45\" size=\"5px\" positioning=\"fixed\"></vc-ajax-bar>\n    <vc-layer-imagery>\n      <vc-provider-imagery-arcgis ref=\"provider\"></vc-provider-imagery-arcgis>\n    </vc-layer-imagery>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const provider = ref(null)\n      const alpha = ref(1)\n      const brightness = ref(1)\n      const contrast = ref(1)\n      // methods\n      const unload = () => {\n        provider.value.unload()\n      }\n      const reload = () => {\n        provider.value.reload()\n      }\n      const load = () => {\n        provider.value.load()\n      }\n      return {\n        provider,\n        unload,\n        reload,\n        load,\n        alpha,\n        brightness,\n        contrast\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>position</td><td>String</td><td><code>&#39;top&#39;</code></td><td><code>optional</code> Specify the position of the progress bar.</td><td>top/right/bottom/left</td></tr><tr><td>size</td><td>String</td><td><code>&#39;2px&#39;</code></td><td><code>optional</code> Specify the size of the progress bar.</td><td></td></tr><tr><td>color</td><td>String</td><td></td><td><code>optional</code> Specify the color of the progress bar.</td><td></td></tr><tr><td>skipHijack</td><td>Boolean</td><td></td><td><code>optional</code> Specify whether to ignore ajax hijacking.</td><td></td></tr><tr><td>reverse</td><td>Boolean</td><td></td><td><code>optional</code> Specifies whether the progress bar is reversed.</td><td></td></tr><tr><td>positioning</td><td>String</td><td><code>&#39;absolute&#39;</code></td><td><code>optional</code> Specify the positioning of the progress bar.</td><td>absolute/fixed</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>start</td><td></td><td>Triggered when the progress bar appears.</td></tr><tr><td>end</td><td></td><td>Triggered when the progress bar is complete.</td></tr></tbody></table>", 4);

function vc_ajax_barvue_type_template_id_d3969ba0_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", _hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/controls/vc-ajax-bar.md?vue&type=template&id=d3969ba0

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/controls/vc-ajax-bar.md?vue&type=script&lang=ts


/* harmony default export */ var vc_ajax_barvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_vc_ajax_bar = _resolveComponent("vc-ajax-bar");

        var _component_vc_provider_imagery_arcgis = _resolveComponent("vc-provider-imagery-arcgis");

        var _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_ajax_bar), _createVNode(_component_vc_ajax_bar, {
                  position: "bottom",
                  color: "#21BA45",
                  size: "5px",
                  positioning: "fixed"
                }), _createVNode(_component_vc_layer_imagery, null, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_arcgis, {
                      ref: "provider"
                    }, null, 512)];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 512)]);
      }

      var ref = vue_esm_browser["K" /* ref */],
          getCurrentInstance = vue_esm_browser["q" /* getCurrentInstance */];
      var democomponentExport = {
        setup: function setup() {
          // state
          var instance = getCurrentInstance();
          var provider = ref(null);
          var alpha = ref(1);
          var brightness = ref(1);
          var contrast = ref(1); // methods

          var unload = function unload() {
            provider.value.unload();
          };

          var reload = function reload() {
            provider.value.reload();
          };

          var load = function load() {
            provider.value.load();
          };

          return {
            provider: provider,
            unload: unload,
            reload: reload,
            load: load,
            alpha: alpha,
            brightness: brightness,
            contrast: contrast
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/controls/vc-ajax-bar.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/controls/vc-ajax-bar.md



vc_ajax_barvue_type_script_lang_ts.render = vc_ajax_barvue_type_template_id_d3969ba0_render

/* harmony default export */ var vc_ajax_bar = __webpack_exports__["default"] = (vc_ajax_barvue_type_script_lang_ts);

/***/ })

}]);