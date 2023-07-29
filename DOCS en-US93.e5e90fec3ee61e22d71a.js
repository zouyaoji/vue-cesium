(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[96],{

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/providers/vc-imagery-provider-wmts.md?vue&type=template&id=e8b125c0

const vc_imagery_provider_wmtsvue_type_template_id_e8b125c0_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_imagery_provider_wmtsvue_type_template_id_e8b125c0_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcImageryProviderWmts ");

const vc_imagery_provider_wmtsvue_type_template_id_e8b125c0_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading a tiled imagery provider that provides tiled imagery served by ");

const vc_imagery_provider_wmtsvue_type_template_id_e8b125c0_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("WMTS 1.0.0");

const vc_imagery_provider_wmtsvue_type_template_id_e8b125c0_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" compliant servers. It is equivalent to initializing a ");

const vc_imagery_provider_wmtsvue_type_template_id_e8b125c0_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.WebMapTileServiceImageryProvider", -1);

const vc_imagery_provider_wmtsvue_type_template_id_e8b125c0_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance.");

const vc_imagery_provider_wmtsvue_type_template_id_e8b125c0_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "Note"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(": It needs to be a subcomponent of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to load normally.")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage of the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-imagery-provider-wmts"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component.")], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add the imagery layer with WebMapTileServiceImageryProvider to the viewer.")])], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-layer-imagery :alpha=\"alpha\" :brightness=\"brightness\" :contrast=\"contrast\">\n      <!-- https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/WMTS/1.0.0/WMTSCapabilities.xml -->\n      <vc-imagery-provider-wmts\n        ref=\"provider\"\n        url=\"https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/WMTS/tile/1.0.0/World_Street_Map/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg\"\n        layer=\"World_Street_Map\"\n        format=\"image/jpeg\"\n        wmtsStyle=\"default\"\n        tileMatrixSetID=\"default028mm\"\n      ></vc-imagery-provider-wmts>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n      <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    </el-row>\n    <el-row>\n      <el-col>\n        <div class=\"block\">\n          <span class=\"demonstration\">Alpha</span>\n          <el-slider v-model=\"alpha\" :min=\"0\" :max=\"1\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">Brightness</span>\n          <el-slider v-model=\"brightness\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">Contrast</span>\n          <el-slider v-model=\"contrast\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n        </div>\n      </el-col>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const provider = ref(null)\n      const alpha = ref(1)\n      const brightness = ref(1)\n      const contrast = ref(1)\n      let viewer = undefined\n      // methods\n      const unload = () => {\n        provider.value.unload()\n      }\n      const reload = () => {\n        provider.value.reload()\n      }\n      const load = () => {\n        provider.value.load()\n      }\n      return {\n        provider,\n        unload,\n        reload,\n        load,\n        alpha,\n        brightness,\n        contrast\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>url</td><td>string|Cesium.Resource</td><td></td><td><code>required</code>The base URL for the WMTS GetTile operation (for KVP-encoded requests) or the tile-URL template (for RESTful requests). The tile-URL template should contain the following variables: {style}, {TileMatrixSet}, {TileMatrix}, {TileRow}, {TileCol}. The first two are optional if actual values are hardcoded or not required by the server. The {s} keyword may be used to specify subdomains.。</td></tr><tr><td>format</td><td>string</td><td><code>&#39;image/jpeg&#39;</code></td><td><code>optional</code> The MIME type for images to retrieve from the server.</td></tr><tr><td>wmtsStyle</td><td>string</td><td></td><td><code>required</code>The layer name for WMTS requests.</td></tr><tr><td>style</td><td>string</td><td></td><td><code>required</code>The style name for WMTS requests.</td></tr><tr><td>tileMatrixSetID</td><td>string</td><td></td><td><code>required</code>The identifier of the TileMatrixSet to use for WMTS requests.</td></tr><tr><td>tileMatrixLabels</td><td>Array</td><td></td><td><code>optional</code> A list of identifiers in the TileMatrix to use for WMTS requests, one per TileMatrix level.</td></tr><tr><td>clock</td><td>Clock</td><td></td><td><code>optional</code> A Clock instance that is used when determining the value for the time dimension. Required when options.times is specified.</td></tr><tr><td>times</td><td>TimeIntervalCollection</td><td></td><td><code>optional</code> TimeIntervalCollection with its data property being an object containing time dynamic dimension and their values.</td></tr><tr><td>dimensions</td><td>VcPosition</td><td></td><td><code>optional</code> A object containing static dimensions and their values.</td></tr><tr><td>tileWidth</td><td>number</td><td><code>256</code></td><td><code>optional</code> The tile width in pixels.</td></tr><tr><td>tileHeight</td><td>number</td><td><code>256</code></td><td><code>optional</code> The tile height in pixels.</td></tr><tr><td>tilingScheme</td><td>TilingScheme</td><td></td><td><code>optional</code> The tiling scheme corresponding to the organization of the tiles in the TileMatrixSet.</td></tr><tr><td>rectangle</td><td>VcRectangle|Array</td><td></td><td><code>optional</code> The rectangle covered by the layer.</td></tr><tr><td>minimumLevel</td><td>number</td><td><code>0</code></td><td><code>optional</code> The minimum level-of-detail supported by the imagery provider.</td></tr><tr><td>maximumLevel</td><td>number</td><td></td><td><code>optional</code> The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit.</td></tr><tr><td>ellipsoid</td><td>Ellipsoid</td><td></td><td><code>optional</code> The ellipsoid. If not specified, the WGS84 ellipsoid is used.</td></tr><tr><td>credit</td><td>Credit</td><td>string</td><td></td></tr><tr><td>subdomains</td><td>string | Array</td><td><code>&#39;abc&#39;</code></td><td><code>optional</code> The subdomains to use for the {s} placeholder in the URL template. If this parameter is a single string, each character in the string is a subdomain. If it is an array, each element in the array is a subdomain.</td></tr></tbody></table>", 1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>errorEvent</td><td>TileProviderError</td><td>Triggers when the imagery provider encounters an asynchronous error.</td></tr><tr><td>readyPromise</td><td>ImageryProvider</td><td>Triggers when the provider is ready for use.</td></tr></tbody></table>", 1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("WebMapTileServiceImageryProvider");

function vc_imagery_provider_wmtsvue_type_template_id_e8b125c0_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_imagery_provider_wmtsvue_type_template_id_e8b125c0_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcimageryproviderwmts",
    tabindex: "-1",
    content: "VcImageryProviderWmts",
    href: "#vcimageryproviderwmts",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_imagery_provider_wmtsvue_type_template_id_e8b125c0_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcimageryproviderwmts"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [vc_imagery_provider_wmtsvue_type_template_id_e8b125c0_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "http://www.opengeospatial.org/standards/wmts"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_imagery_provider_wmtsvue_type_template_id_e8b125c0_hoisted_4]),
    _: 1
  }), vc_imagery_provider_wmtsvue_type_template_id_e8b125c0_hoisted_5, vc_imagery_provider_wmtsvue_type_template_id_e8b125c0_hoisted_6, vc_imagery_provider_wmtsvue_type_template_id_e8b125c0_hoisted_7]), vc_imagery_provider_wmtsvue_type_template_id_e8b125c0_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_12]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_11]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_18, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/WebMapTileServiceImageryProvider.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_19]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-imagery-provider-wmts.md?vue&type=template&id=e8b125c0

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/providers/vc-imagery-provider-wmts.md?vue&type=script&lang=ts

/* harmony default export */ var vc_imagery_provider_wmtsvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;
      const _hoisted_1 = {
        class: "demo-toolbar"
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Unload");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Reload");

      const _hoisted_5 = {
        class: "block"
      };

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Alpha", -1);

      const _hoisted_7 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Brightness", -1);

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Contrast", -1);

      function render(_ctx, _cache) {
        const _component_vc_imagery_provider_wmts = _resolveComponent("vc-imagery-provider-wmts");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        const _component_el_slider = _resolveComponent("el-slider");

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
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_wmts, {
                ref: "provider",
                url: "https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/WMTS/tile/1.0.0/World_Street_Map/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
                layer: "World_Street_Map",
                format: "image/jpeg",
                wmtsStyle: "default",
                tileMatrixSetID: "default028mm"
              }, null, 512)]),
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
              }, null, 8, ["modelValue", "step"])])]),
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
          let viewer = undefined; // methods

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
            contrast
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
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-imagery-provider-wmts.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-imagery-provider-wmts.md



vc_imagery_provider_wmtsvue_type_script_lang_ts.render = vc_imagery_provider_wmtsvue_type_template_id_e8b125c0_render

/* harmony default export */ var vc_imagery_provider_wmts = __webpack_exports__["default"] = (vc_imagery_provider_wmtsvue_type_script_lang_ts);

/***/ })

}]);