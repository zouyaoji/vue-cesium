(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/providers/vc-provider-imagery-arcgis.md?vue&type=template&id=6d39ce7e

var vc_provider_imagery_arcgisvue_type_template_id_6d39ce7e_hoisted_1 = {
  class: "content element-doc"
};

var vc_provider_imagery_arcgisvue_type_template_id_6d39ce7e_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcproviderimageryarcgis\"><a class=\"header-anchor\" href=\"#vcproviderimageryarcgis\">¶</a> VcProviderImageryArcgis</h2><p>Loading a tiled imagery provider that provides tiled imagery hosted by an ArcGIS MapServer. It is equivalent to initializing a <code>Cesium.ArcGisMapServerImageryProvider</code> instance.</p><p><strong>Note</strong>: It needs to be a subcomponent of <code>vc-layer-imagery</code> to load normally.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of the <code>vc-provider-imagery-arcgis</code> component.</p>", 5);

var vc_provider_imagery_arcgisvue_type_template_id_6d39ce7e_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tag to add the imagery layer with ArcGisMapServerImageryProvider to the viewer.")])], -1);

var vc_provider_imagery_arcgisvue_type_template_id_6d39ce7e_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-layer-imagery :alpha=\"alpha\" :brightness=\"brightness\" :contrast=\"contrast\">\n      <!-- https://services.arcgisonline.com/arcgis/rest/services -->\n      <!-- https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer -->\n      <!-- https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer -->\n      <vc-provider-imagery-arcgis ref=\"provider\"></vc-provider-imagery-arcgis>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n      <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    </el-row>\n    <el-row>\n      <el-col>\n        <div class=\"block\">\n          <span class=\"demonstration\">Alpha</span>\n          <el-slider v-model=\"alpha\" :min=\"0\" :max=\"1\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">Brightness</span>\n          <el-slider v-model=\"brightness\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">Contrast</span>\n          <el-slider v-model=\"contrast\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n        </div>\n      </el-col>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const provider = ref(null)\n      const alpha = ref(1)\n      const brightness = ref(1)\n      const contrast = ref(1)\n      // methods\n      const unload = () => {\n        provider.value.unload()\n      }\n      const reload = () => {\n        provider.value.reload()\n      }\n      const load = () => {\n        provider.value.load()\n      }\n      return {\n        provider,\n        unload,\n        reload,\n        load,\n        alpha,\n        brightness,\n        contrast\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>url</td><td>String</td><td><code>&#39;https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer&#39;</code></td><td><code>optional</code> The URL of the ArcGIS MapServer service.</td></tr><tr><td>token</td><td>String</td><td></td><td><code>optional</code> The ArcGIS token used to authenticate with the ArcGIS MapServer service.</td></tr><tr><td>tileDiscardPolicy</td><td>Object</td><td></td><td><code>optional</code> The policy that determines if a tile is invalid and should be discarded.</td></tr><tr><td>usePreCachedTilesIfAvailable</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> If true, the server&#39;s pre-cached tiles are used if they are available. If false, any pre-cached tiles are ignored and the &#39;export&#39; service is used.</td></tr><tr><td>layers</td><td>String</td><td></td><td><code>optional</code> A comma-separated list of the layers to show, or undefined if all layers should be shown.</td></tr><tr><td>enablePickFeatures</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> If true, ArcGisMapServerImageryProvider#pickFeatures will invoke the Identify service on the MapServer and return the features included in the response. If false, ArcGisMapServerImageryProvider#pickFeatures will immediately return undefined (indicating no pickable features) without communicating with the server. Set this property to false if you don&#39;t want this provider&#39;s features to be pickable. Can be overridden by setting the ArcGisMapServerImageryProvider#enablePickFeatures property on the object.</td></tr><tr><td>rectangle</td><td>Object|Object</td><td></td><td><code>optional</code> The rectangle of the layer. This rectangle can limit the visible portion of the imagery provider.</td></tr><tr><td>tilingScheme</td><td>Object</td><td></td><td><code>optional</code> The tiling scheme to use to divide the world into tiles. This parameter is ignored when accessing a tiled server.</td></tr><tr><td>ellipsoid</td><td>Object</td><td></td><td><code>optional</code> The ellipsoid. If the tilingScheme is specified and used, this parameter is ignored and the tiling scheme&#39;s ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.</td></tr><tr><td>tileWidth</td><td>Number</td><td><code>256</code></td><td><code>optional</code> The width of each tile in pixels. This parameter is ignored when accessing a tiled server.</td></tr><tr><td>tileHeight</td><td>Number</td><td><code>256</code></td><td><code>optional</code> The height of each tile in pixels. This parameter is ignored when accessing a tiled server.</td></tr><tr><td>maximumLevel</td><td>Number</td><td></td><td><code>optional</code> The maximum tile level to request, or undefined if there is no maximum. This parameter is ignored when accessing a tiled server.</td></tr></tbody></table><div class=\"tip\"><p>Tip: In addition to passing <code>Cesium.Rectangle</code>, the <code>rectangle</code> property can also pass <code>PlainObject(RectangleInDegreeOption|Cartesian4Option</code>) and <code>Array&lt;number&gt;</code> (degrees)</p></div><div class=\"tipflex\"><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// RectangleInDegreeOption</span>\n{\n  <span class=\"hljs-attr\">west</span>: number,\n  <span class=\"hljs-attr\">south</span>: number,\n  <span class=\"hljs-attr\">east</span>: number,\n  <span class=\"hljs-attr\">north</span>: number\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// Cartesian4Option</span>\n{\n  <span class=\"hljs-attr\">x</span>: number,\n  <span class=\"hljs-attr\">y</span>: number,\n  <span class=\"hljs-attr\">z</span>: number,\n  <span class=\"hljs-attr\">w</span>: number\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// Array&lt;number&gt; in degrees</span>\n;[number, number, number, number]\n</code></pre></div><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>errorEvent</td><td>TileProviderError</td><td>Triggers when the imagery provider encounters an asynchronous error.</td></tr><tr><td>readyPromise</td><td>ImageryProvider</td><td>Triggers when the provider is ready for use.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/ArcGisMapServerImageryProvider.html\">ArcGisMapServerImageryProvider</a></strong></li></ul>", 8);

function vc_provider_imagery_arcgisvue_type_template_id_6d39ce7e_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_provider_imagery_arcgisvue_type_template_id_6d39ce7e_hoisted_1, [vc_provider_imagery_arcgisvue_type_template_id_6d39ce7e_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [vc_provider_imagery_arcgisvue_type_template_id_6d39ce7e_hoisted_8];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [vc_provider_imagery_arcgisvue_type_template_id_6d39ce7e_hoisted_7];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-provider-imagery-arcgis.md?vue&type=template&id=6d39ce7e

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/providers/vc-provider-imagery-arcgis.md?vue&type=script&lang=ts


/* harmony default export */ var vc_provider_imagery_arcgisvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */],
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

      function render(_ctx, _cache) {
        var _component_vc_provider_imagery_arcgis = _resolveComponent("vc-provider-imagery-arcgis");

        var _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_row = _resolveComponent("el-row");

        var _component_el_slider = _resolveComponent("el-slider");

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
                  contrast: _ctx.contrast
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_arcgis, {
                      ref: "provider"
                    }, null, 512)];
                  }),
                  _: 1
                }, 8, ["alpha", "brightness", "contrast"])];
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
                    }, null, 8, ["modelValue", "step"])])];
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
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-provider-imagery-arcgis.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-provider-imagery-arcgis.md



vc_provider_imagery_arcgisvue_type_script_lang_ts.render = vc_provider_imagery_arcgisvue_type_template_id_6d39ce7e_render

/* harmony default export */ var vc_provider_imagery_arcgis = __webpack_exports__["default"] = (vc_provider_imagery_arcgisvue_type_script_lang_ts);

/***/ })

}]);