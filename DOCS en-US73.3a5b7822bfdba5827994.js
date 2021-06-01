(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/providers/vc-provider-imagery-urltemplate.md?vue&type=template&id=9c67973a

var vc_provider_imagery_urltemplatevue_type_template_id_9c67973a_hoisted_1 = {
  class: "content element-doc"
};

var vc_provider_imagery_urltemplatevue_type_template_id_9c67973a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcproviderimageryurltemplate\"><a class=\"header-anchor\" href=\"#vcproviderimageryurltemplate\">¶</a> VcProviderImageryUrltemplate</h2><p>Loading a tiled imagery provider that provides imagery by requesting tiles using a specified URL template. It is equivalent to initializing a <code>Cesium.UrlTemplateImageryProvider</code> instance.</p><p><strong>Note</strong>: It needs to be a subcomponent of <code>vc-layer-imagery</code> to load normally.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of the <code>vc-provider-imagery-urltemplate</code> component.</p>", 5);

var vc_provider_imagery_urltemplatevue_type_template_id_9c67973a_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tag to add the imagery layer with UrlTemplateImageryProvider to the viewer.")])], -1);

var vc_provider_imagery_urltemplatevue_type_template_id_9c67973a_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-layer-imagery :alpha=\"alpha\" :brightness=\"brightness\" :contrast=\"contrast\" :sortOrder=\"10\">\n      <vc-provider-imagery-urltemplate ref=\"provider\" :projectionTransforms=\"projectionTransforms\" :url=\"url\"></vc-provider-imagery-urltemplate>\n    </vc-layer-imagery>\n    <!-- 用于测试 projectionTransforms  -->\n    <vc-layer-imagery :sortOrder=\"5\">\n      <vc-provider-imagery-tianditu mapStyle=\"img_w\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n      <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    </el-row>\n    <el-row>\n      <el-col>\n        <div class=\"block\">\n          <span class=\"demonstration\">Alpha</span>\n          <el-slider v-model=\"alpha\" :min=\"0\" :max=\"1\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">Brightness</span>\n          <el-slider v-model=\"brightness\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">Contrast</span>\n          <el-slider v-model=\"contrast\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">Switch</span>\n          <el-select v-model=\"url\" placeholder=\"Select\">\n            <el-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </el-option>\n          </el-select>\n        </div>\n      </el-col>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const provider = ref(null)\n      const alpha = ref(1)\n      const brightness = ref(1)\n      const contrast = ref(1)\n      const projectionTransforms = ref(null)\n      projectionTransforms.value = {\n        from: 'GCJ02',\n        to: 'WGS84'\n      }\n      const options = [\n        {\n          value: 'https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',\n          label: 'amap-image'\n        },\n        {\n          value: 'https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}',\n          label: 'amap-vector'\n        },\n        {\n          value: 'https://www.songluck.com/raster/osm_chengdu/{z}/{x}/{y}.png',\n          label: 'custom mapbox'\n        }\n      ]\n      const url = ref('https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}')\n      // methods\n      const unload = () => {\n        provider.value.unload()\n      }\n      const reload = () => {\n        provider.value.reload()\n      }\n      const load = () => {\n        provider.value.load()\n      }\n      return {\n        provider,\n        unload,\n        reload,\n        load,\n        alpha,\n        brightness,\n        contrast,\n        projectionTransforms,\n        url,\n        options\n      }\n    }\n  }\n</script>\n")], -1);

var vc_provider_imagery_urltemplatevue_type_template_id_9c67973a_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>url</td><td>String|Object</td><td></td><td><code>required</code> The URL template to use to request tiles.</td></tr><tr><td>pickFeaturesUrl</td><td>String|Object</td><td></td><td><code>optional</code> The URL template to use to pick features.</td></tr><tr><td>urlSchemeZeroPadding</td><td>Object</td><td></td><td><code>optional</code> Gets the URL scheme zero padding for each tile coordinate.</td></tr><tr><td>subdomains</td><td>String|Array</td><td><code>&#39;abc&#39;</code></td><td><code>optional</code> The subdomains to use for the {s} placeholder in the URL template. If this parameter is a single string, each character in the string is a subdomain. If it is an array, each element in the array is a subdomain.</td></tr><tr><td>credit</td><td>String|Object</td><td><code>&#39;&#39;</code></td><td><code>optional</code> A credit for the data source, which is displayed on the canvas.</td></tr><tr><td>minimumLevel</td><td>Number</td><td><code>0</code></td><td><code>optional</code> The minimum level-of-detail supported by the imagery provider. Take care when specifying this that the number of tiles at the minimum level is small, such as four or less. A larger number is likely to result in rendering problems.</td></tr><tr><td>maximumLevel</td><td>Number</td><td></td><td><code>optional</code> The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit.</td></tr><tr><td>rectangle</td><td>Object</td><td></td><td><code>optional</code> The rectangle, in radians, covered by the image.</td></tr><tr><td>tilingScheme</td><td>Object</td><td></td><td><code>optional</code> The tiling scheme specifying how the ellipsoidal surface is broken into tiles. If this parameter is not provided, a WebMercatorTilingScheme is used.</td></tr><tr><td>ellipsoid</td><td>Object</td><td></td><td><code>optional</code> The ellipsoid. If the tilingScheme is specified, this parameter is ignored and the tiling scheme&#39;s ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.</td></tr><tr><td>tileWidth</td><td>Number</td><td><code>256</code></td><td><code>optional</code> Pixel width of image tiles.</td></tr><tr><td>tileHeight</td><td>Number</td><td><code>256</code></td><td><code>optional</code> Pixel height of image tiles.</td></tr><tr><td>hasAlphaChannel</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> true if the images provided by this imagery provider include an alpha channel; otherwise, false. If this property is false, an alpha channel, if present, will be ignored. If this property is true, any images without an alpha channel will be treated as if their alpha is 1.0 everywhere. When this property is false, memory usage and texture upload time are potentially reduced.</td></tr><tr><td>getFeatureInfoFormats</td><td>Array</td><td></td><td><code>optional</code> The formats in which to get feature information at a specific location when UrlTemplateImageryProvider#pickFeatures is invoked. If this parameter is not specified, feature picking is disabled.</td></tr><tr><td>enablePickFeatures</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> If true, UrlTemplateImageryProvider#pickFeatures will request the options.pickFeaturesUrl and attempt to interpret the features included in the response. If false, UrlTemplateImageryProvider#pickFeatures will immediately return undefined (indicating no pickable features) without communicating with the server. Set this property to false if you know your data source does not support picking features or if you don&#39;t want this provider&#39;s features to be pickable. Note that this can be dynamically overridden by modifying the UriTemplateImageryProvider#enablePickFeatures property.</td></tr><tr><td>customTags</td><td>Object</td><td></td><td><code>optional</code> Allow to replace custom keywords in the URL template. The object must have strings as keys and functions as values.</td></tr><tr><td>projectionTransforms</td><td>Boolean|Object</td><td><code>false</code></td><td><code>optional</code> Specify the projection transformation parameters.</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>errorEvent</td><td>TileProviderError</td><td>Triggers when the imagery provider encounters an asynchronous error.</td></tr><tr><td>readyPromise</td><td>ImageryProvider</td><td>Triggers when the provider is ready for use.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/UrlTemplateImageryProvider.html\">UrlTemplateImageryProvider</a></strong></li></ul>", 6);

function vc_provider_imagery_urltemplatevue_type_template_id_9c67973a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_provider_imagery_urltemplatevue_type_template_id_9c67973a_hoisted_1, [vc_provider_imagery_urltemplatevue_type_template_id_9c67973a_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [vc_provider_imagery_urltemplatevue_type_template_id_9c67973a_hoisted_8];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [vc_provider_imagery_urltemplatevue_type_template_id_9c67973a_hoisted_7];
    }),
    _: 1
  }), vc_provider_imagery_urltemplatevue_type_template_id_9c67973a_hoisted_9, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-provider-imagery-urltemplate.md?vue&type=template&id=9c67973a

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/providers/vc-provider-imagery-urltemplate.md?vue&type=script&lang=ts


/* harmony default export */ var vc_provider_imagery_urltemplatevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */],
          _renderList = vue_esm_browser["M" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-toolbar"
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Unload");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Load");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("Reload");

      var _hoisted_5 = {
        class: "block"
      };

      var _hoisted_6 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Alpha", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Brightness", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Contrast", -1);

      var _hoisted_9 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Switch", -1);

      function render(_ctx, _cache) {
        var _component_vc_provider_imagery_urltemplate = _resolveComponent("vc-provider-imagery-urltemplate");

        var _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        var _component_vc_provider_imagery_tianditu = _resolveComponent("vc-provider-imagery-tianditu");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_row = _resolveComponent("el-row");

        var _component_el_slider = _resolveComponent("el-slider");

        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        var _component_el_col = _resolveComponent("el-col");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_layer_imagery, {
                  alpha: _ctx.alpha,
                  brightness: _ctx.brightness,
                  contrast: _ctx.contrast,
                  sortOrder: 10
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_urltemplate, {
                      ref: "provider",
                      projectionTransforms: _ctx.projectionTransforms,
                      url: _ctx.url
                    }, null, 8, ["projectionTransforms", "url"])];
                  }),
                  _: 1
                }, 8, ["alpha", "brightness", "contrast"]), _createVNode(_component_vc_layer_imagery, {
                  sortOrder: 5
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_tianditu, {
                      mapStyle: "img_w",
                      token: "436ce7e50d27eede2f2929307e6b33c0"
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode("div", _hoisted_1, [_createVNode(_component_el_row, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.unload
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.load
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.reload
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }, 8, ["onClick"])];
              }),
              _: 1
            }), _createVNode(_component_el_row, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_col, null, {
                  default: _withCtx(function () {
                    return [_createVNode("div", _hoisted_5, [_hoisted_6, _createVNode(_component_el_slider, {
                      modelValue: _ctx.alpha,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                        return _ctx.alpha = $event;
                      }),
                      min: 0,
                      max: 1,
                      step: 0.01
                    }, null, 8, ["modelValue", "step"]), _hoisted_7, _createVNode(_component_el_slider, {
                      modelValue: _ctx.brightness,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                        return _ctx.brightness = $event;
                      }),
                      min: 0,
                      max: 5,
                      step: 0.01
                    }, null, 8, ["modelValue", "step"]), _hoisted_8, _createVNode(_component_el_slider, {
                      modelValue: _ctx.contrast,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                        return _ctx.contrast = $event;
                      }),
                      min: 0,
                      max: 5,
                      step: 0.01
                    }, null, 8, ["modelValue", "step"]), _hoisted_9, _createVNode(_component_el_select, {
                      modelValue: _ctx.url,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                        return _ctx.url = $event;
                      }),
                      placeholder: "Select"
                    }, {
                      default: _withCtx(function () {
                        return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (item) {
                          return _openBlock(), _createBlock(_component_el_option, {
                            key: item.value,
                            label: item.label,
                            value: item.value
                          }, null, 8, ["label", "value"]);
                        }), 128))];
                      }),
                      _: 1
                    }, 8, ["modelValue"])])];
                  }),
                  _: 1
                })];
              }),
              _: 1
            })])];
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
          var contrast = ref(1);
          var projectionTransforms = ref(null);
          projectionTransforms.value = {
            from: 'GCJ02',
            to: 'WGS84'
          };
          var options = [{
            value: 'https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
            label: 'amap-image'
          }, {
            value: 'https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}',
            label: 'amap-vector'
          }, {
            value: 'https://www.songluck.com/raster/osm_chengdu/{z}/{x}/{y}.png',
            label: 'custom mapbox'
          }];
          var url = ref('https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}'); // methods

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
            contrast: contrast,
            projectionTransforms: projectionTransforms,
            url: url,
            options: options
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-provider-imagery-urltemplate.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-provider-imagery-urltemplate.md



vc_provider_imagery_urltemplatevue_type_script_lang_ts.render = vc_provider_imagery_urltemplatevue_type_template_id_9c67973a_render

/* harmony default export */ var vc_provider_imagery_urltemplate = __webpack_exports__["default"] = (vc_provider_imagery_urltemplatevue_type_script_lang_ts);

/***/ })

}]);