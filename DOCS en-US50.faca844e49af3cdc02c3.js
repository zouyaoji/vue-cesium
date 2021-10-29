(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/overlays/vc-overlay-html.md?vue&type=template&id=d79406ba

const vc_overlay_htmlvue_type_template_id_d79406ba_hoisted_1 = {
  class: "content element-doc"
};

const vc_overlay_htmlvue_type_template_id_d79406ba_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h2", {
  id: "vcoverlayhtml"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  class: "header-anchor",
  href: "#vcoverlayhtml"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" VcOverlayHtml")], -1);

const vc_overlay_htmlvue_type_template_id_d79406ba_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Load HTML element overlays by geographic location.", -1);

const vc_overlay_htmlvue_type_template_id_d79406ba_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "Note:"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Style files need to be imported: "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "import 'vue-cesium/dist/index.css';")], -1);

const vc_overlay_htmlvue_type_template_id_d79406ba_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Basic usage")], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcOverlayHtml component.", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-html"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add a div tag to the viewer and set up CSS animation.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-overlay-html ref=\"html\" :position=\"[117.186419, 45.66446, 20]\">\n      <div class=\"vc-box\">aa</div>\n    </vc-overlay-html>\n    <vc-entity :position=\"[117.186419, 45.66446, 20]\">\n      <vc-graphics-point color=\"red\" :pixelSize=\"8\"></vc-graphics-point>\n    </vc-entity>\n    <vc-overlay-html :position=\"{ lng: 104.04, lat: 30.40 }\">\n      <div class=\"label-container label-container-var\">\n        <div class=\"label-animate-marker_border\">\n          <span class=\"label-animate-marker_text\">Hello World</span>\n        </div>\n      </div>\n    </vc-overlay-html>\n    <vc-layer-imagery>\n      <vc-provider-imagery-arcgis></vc-provider-imagery-arcgis>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    methods: {\n      unload() {\n        this.$refs.html.unload()\n      },\n      load() {\n        this.$refs.html.load()\n      },\n      reload() {\n        this.$refs.html.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>position</td><td>Object|Array</td><td></td><td><code>optional</code> Specify the geographic location of the HTML element.</td></tr><tr><td>pixelOffset</td><td>Object|Array</td><td></td><td><code>optional</code> Specify the pixel offset of the HTML.</td></tr><tr><td>autoHidden</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specifies whether HTML is automatically hidden when it is on the back of the earth.</td></tr><tr><td>customClass</td><td>String</td><td></td><td><code>optional</code> Specify an HTML custom class.</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Sandbox: <strong><a href=\"https://sandcastle.cesium.com/gallery/HTML%20Overlays.html\">HTML Overlays</a></strong></li></ul>", 6);

function vc_overlay_htmlvue_type_template_id_d79406ba_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_overlay_htmlvue_type_template_id_d79406ba_hoisted_1, [vc_overlay_htmlvue_type_template_id_d79406ba_hoisted_2, vc_overlay_htmlvue_type_template_id_d79406ba_hoisted_3, vc_overlay_htmlvue_type_template_id_d79406ba_hoisted_4, vc_overlay_htmlvue_type_template_id_d79406ba_hoisted_5, _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/overlays/vc-overlay-html.md?vue&type=template&id=d79406ba

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/overlays/vc-overlay-html.md?vue&type=script&lang=ts

/* harmony default export */ var vc_overlay_htmlvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("div", {
        class: "vc-box"
      }, "aa", -1);

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", {
        class: "label-container label-container-var"
      }, [/*#__PURE__*/_createElementVNode("div", {
        class: "label-animate-marker_border"
      }, [/*#__PURE__*/_createElementVNode("span", {
        class: "label-animate-marker_text"
      }, "Hello World")])], -1);

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Unload");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        const _component_vc_overlay_html = _resolveComponent("vc-overlay-html");

        const _component_vc_graphics_point = _resolveComponent("vc-graphics-point");

        const _component_vc_entity = _resolveComponent("vc-entity");

        const _component_vc_provider_imagery_arcgis = _resolveComponent("vc-provider-imagery-arcgis");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_overlay_html, {
              ref: "html",
              position: [117.186419, 45.66446, 20]
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }, 8, ["position"]), _createVNode(_component_vc_entity, {
              position: [117.186419, 45.66446, 20]
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_point, {
                color: "red",
                pixelSize: 8
              })]),
              _: 1
            }, 8, ["position"]), _createVNode(_component_vc_overlay_html, {
              position: {
                lng: 104.04,
                lat: 30.40
              }
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }, 8, ["position"]), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_arcgis)]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_hoisted_5]),
              _: 1
            }, 8, ["onClick"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const democomponentExport = {
        methods: {
          unload() {
            this.$refs.html.unload();
          },

          load() {
            this.$refs.html.load();
          },

          reload() {
            this.$refs.html.reload();
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/overlays/vc-overlay-html.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/overlays/vc-overlay-html.md



vc_overlay_htmlvue_type_script_lang_ts.render = vc_overlay_htmlvue_type_template_id_d79406ba_render

/* harmony default export */ var vc_overlay_html = __webpack_exports__["default"] = (vc_overlay_htmlvue_type_script_lang_ts);

/***/ })

}]);