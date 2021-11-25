(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/providers/vc-provider-imagery-wms.md?vue&type=template&id=664f45ea

const vc_provider_imagery_wmsvue_type_template_id_664f45ea_hoisted_1 = {
  class: "content element-doc"
};

const vc_provider_imagery_wmsvue_type_template_id_664f45ea_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcproviderimagerywms\"><a class=\"header-anchor\" href=\"#vcproviderimagerywms\">¶</a> VcProviderImageryWms</h2><p>Loading a tiled imagery provider that provides tiled imagery hosted by a Web Map Service (WMS) server. It is equivalent to initializing a <code>Cesium.WebMapServiceImageryProvider</code> instance.</p><p><strong>Note</strong>: It needs to be a subcomponent of <code>vc-layer-imagery</code> to load normally.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of the <code>vc-provider-imagery-wms</code> component.</p>", 5);

const vc_provider_imagery_wmsvue_type_template_id_664f45ea_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add the imagery layer with WebMapServiceImageryProvider to the viewer.")])], -1);

const vc_provider_imagery_wmsvue_type_template_id_664f45ea_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-layer-imagery :alpha=\"alpha\" :brightness=\"brightness\" :contrast=\"contrast\">\n      <vc-provider-imagery-wms\n        ref=\"provider\"\n        url=\"http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows\"\n        layers=\"Hydrography:bores\"\n        :parameters=\"{transparent: true, format: 'image/png'}\"\n      ></vc-provider-imagery-wms>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n      <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    </el-row>\n    <el-row>\n      <el-col>\n        <div class=\"block\">\n          <span class=\"demonstration\">Alpha</span>\n          <el-slider v-model=\"alpha\" :min=\"0\" :max=\"1\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">Brightness</span>\n          <el-slider v-model=\"brightness\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">Contrast</span>\n          <el-slider v-model=\"contrast\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n        </div>\n      </el-col>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const provider = ref(null)\n      const alpha = ref(1)\n      const brightness = ref(1)\n      const contrast = ref(1)\n      let viewer = undefined\n      // methods\n      const unload = () => {\n        provider.value.unload()\n      }\n      const reload = () => {\n        provider.value.reload()\n      }\n      const load = () => {\n        provider.value.load()\n      }\n      const onViewerReady = cesiumInstance => {\n        cesiumInstance.viewer.camera.setView({\n          destination: Cesium.Rectangle.fromDegrees(114.591, -45.837, 148.97, -5.73)\n        })\n      }\n      return {\n        provider,\n        unload,\n        reload,\n        load,\n        alpha,\n        brightness,\n        contrast,\n        onViewerReady\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>url</td><td>String|Object</td><td></td><td><code>required</code> The URL of the WMS service. The URL supports the same keywords as the UrlTemplateImageryProvider.</td></tr><tr><td>layers</td><td>String</td><td></td><td><code>required</code> The layers to include, separated by commas.</td></tr><tr><td>parameters</td><td>Object</td><td></td><td><code>optional</code> Additional parameters to pass to the WMS server in the GetMap URL.</td></tr><tr><td>getFeatureInfoParameters</td><td>Object</td><td></td><td><code>optional</code> Additional parameters to pass to the WMS server in the GetFeatureInfo URL.</td></tr><tr><td>enablePickFeatures</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> If true, WebMapServiceImageryProvider#pickFeatures will invoke the GetFeatureInfo operation on the WMS server and return the features included in the response. If false, WebMapServiceImageryProvider#pickFeatures will immediately return undefined (indicating no pickable features) without communicating with the server. Set this property to false if you know your WMS server does not support GetFeatureInfo or if you don&#39;t want this provider&#39;s features to be pickable. Note that this can be dynamically overridden by modifying the WebMapServiceImageryProvider#enablePickFeatures property.</td></tr><tr><td>getFeatureInfoFormats</td><td>Array</td><td></td><td><code>optional</code> The formats in which to try WMS GetFeatureInfo requests.</td></tr><tr><td>rectangle</td><td>Object|Array</td><td></td><td><code>optional</code> The rectangle of the layer.</td></tr><tr><td>tilingScheme</td><td>Object</td><td></td><td><code>optional</code> The tiling scheme to use to divide the world into tiles.</td></tr><tr><td>ellipsoid</td><td>Object</td><td></td><td><code>optional</code> The ellipsoid. If the tilingScheme is specified, this parameter is ignored and the tiling scheme&#39;s ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.</td></tr><tr><td>tileWidth</td><td>Number</td><td><code>256</code></td><td><code>optional</code> The width of each tile in pixels.</td></tr><tr><td>tileHeight</td><td>Number</td><td><code>256</code></td><td><code>optional</code> The height of each tile in pixels.</td></tr><tr><td>minimumLevel</td><td>Number</td><td><code>0</code></td><td><code>optional</code> The minimum level-of-detail supported by the imagery provider. Take care when specifying this that the number of tiles at the minimum level is small, such as four or less. A larger number is likely to result in rendering problems.</td></tr><tr><td>maximumLevel</td><td>Number</td><td></td><td><code>optional</code> The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit. If not specified, there is no limit.</td></tr><tr><td>crs</td><td>String</td><td></td><td><code>optional</code> CRS specification, for use with WMS specification &gt;= 1.3.0.</td></tr><tr><td>srs</td><td>String</td><td></td><td><code>optional</code> SRS specification, for use with WMS specification 1.1.0 or 1.1.1</td></tr><tr><td>credit</td><td>Credit| String</td><td></td><td><code>optional</code> A credit for the data source, which is displayed on the canvas.</td></tr><tr><td>subdomains</td><td>String| Array</td><td><code>&#39;abc&#39;</code></td><td><code>optional</code> The subdomains to use for the {s} placeholder in the URL template. If this parameter is a single string, each character in the string is a subdomain. If it is an array, each element in the array is a subdomain.</td></tr><tr><td>clock</td><td>Object</td><td></td><td><code>optional</code> A Clock instance that is used when determining the value for the time dimension. Required when options.times is specified.</td></tr><tr><td>times</td><td>Object</td><td></td><td><code>optional</code> TimeIntervalCollection with its data property being an object containing time dynamic dimension and their values.</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>errorEvent</td><td>TileProviderError</td><td>Triggers when the imagery provider encounters an asynchronous error.</td></tr><tr><td>readyPromise</td><td>ImageryProvider</td><td>Triggers when the provider is ready for use.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/WebMapServiceImageryProvider.html\">WebMapServiceImageryProvider</a></strong></li></ul>", 6);

function vc_provider_imagery_wmsvue_type_template_id_664f45ea_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_provider_imagery_wmsvue_type_template_id_664f45ea_hoisted_1, [vc_provider_imagery_wmsvue_type_template_id_664f45ea_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [vc_provider_imagery_wmsvue_type_template_id_664f45ea_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [vc_provider_imagery_wmsvue_type_template_id_664f45ea_hoisted_7]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-provider-imagery-wms.md?vue&type=template&id=664f45ea

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/providers/vc-provider-imagery-wms.md?vue&type=script&lang=ts

/* harmony default export */ var vc_provider_imagery_wmsvue_type_script_lang_ts = ({
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
        const _component_vc_provider_imagery_wms = _resolveComponent("vc-provider-imagery-wms");

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
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.onViewerReady
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_layer_imagery, {
              alpha: _ctx.alpha,
              brightness: _ctx.brightness,
              contrast: _ctx.contrast
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_wms, {
                ref: "provider",
                url: "http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows",
                layers: "Hydrography:bores",
                parameters: {
                  transparent: true,
                  format: 'image/png'
                }
              }, null, 512)]),
              _: 1
            }, 8, ["alpha", "brightness", "contrast"])]),
            _: 1
          }, 8, ["onReady"]), _createElementVNode("div", _hoisted_1, [_createVNode(_component_el_row, null, {
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

          const onViewerReady = cesiumInstance => {
            cesiumInstance.viewer.camera.setView({
              destination: Cesium.Rectangle.fromDegrees(114.591, -45.837, 148.97, -5.73)
            });
          };

          return {
            provider,
            unload,
            reload,
            load,
            alpha,
            brightness,
            contrast,
            onViewerReady
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
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-provider-imagery-wms.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-provider-imagery-wms.md



vc_provider_imagery_wmsvue_type_script_lang_ts.render = vc_provider_imagery_wmsvue_type_template_id_664f45ea_render

/* harmony default export */ var vc_provider_imagery_wms = __webpack_exports__["default"] = (vc_provider_imagery_wmsvue_type_script_lang_ts);

/***/ })

}]);