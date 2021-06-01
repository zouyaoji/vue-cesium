(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/providers/vc-provider-imagery-bingmaps.md?vue&type=template&id=a50f7a5a

var vc_provider_imagery_bingmapsvue_type_template_id_a50f7a5a_hoisted_1 = {
  class: "content element-doc"
};

var vc_provider_imagery_bingmapsvue_type_template_id_a50f7a5a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcproviderimagerybingmaps\"><a class=\"header-anchor\" href=\"#vcproviderimagerybingmaps\">¶</a> VcProviderImageryBingmaps</h2><p>Loading a tiled imagery provider using the Bing Maps Imagery REST API. It is equivalent to initializing a <code>Cesium.BingMapsImageryProvider</code> instance.</p><p><strong>Note</strong>: It needs to be a subcomponent of <code>vc-layer-imagery</code> to load normally.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of the <code>vc-provider-imagery-bingmaps</code> component.</p>", 5);

var vc_provider_imagery_bingmapsvue_type_template_id_a50f7a5a_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tag to add the imagery layer with BingMapsImageryProvider to the viewer.")])], -1);

var vc_provider_imagery_bingmapsvue_type_template_id_a50f7a5a_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-layer-imagery :alpha=\"alpha\" :brightness=\"brightness\" :contrast=\"contrast\">\n      <!-- (https://www.bingmapsportal.com/) Apply for Key. -->\n      <vc-provider-imagery-bingmaps\n        ref=\"provider\"\n        bmKey=\"AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-\"\n        :mapStyle=\"mapStyle\"\n      ></vc-provider-imagery-bingmaps>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n      <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    </el-row>\n    <el-row>\n      <el-col>\n        <div class=\"block\">\n          <span class=\"demonstration\">Alpha</span>\n          <el-slider v-model=\"alpha\" :min=\"0\" :max=\"1\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">Brightness</span>\n          <el-slider v-model=\"brightness\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">Contrast</span>\n          <el-slider v-model=\"contrast\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">Switch</span>\n          <el-select v-model=\"mapStyle\" placeholder=\"Select\">\n            <el-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </el-option>\n          </el-select>\n        </div>\n      </el-col>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const provider = ref(null)\n      const alpha = ref(1)\n      const brightness = ref(1)\n      const contrast = ref(1)\n      const options = [\n        {\n          value: 'Aerial',\n          label: 'Aerial'\n        },\n        {\n          value: 'AerialWithLabels',\n          label: 'AerialWithLabels'\n        },\n        {\n          value: 'Road',\n          label: 'Road'\n        },\n        {\n          value: 'CanvasDark',\n          label: 'CanvasDark'\n        }\n      ]\n      const mapStyle = ref('Aerial')\n      // methods\n      const unload = () => {\n        provider.value.unload()\n      }\n      const reload = () => {\n        provider.value.reload()\n      }\n      const load = () => {\n        provider.value.load()\n      }\n      return {\n        provider,\n        unload,\n        reload,\n        load,\n        alpha,\n        brightness,\n        contrast,\n        options,\n        mapStyle\n      }\n    }\n  }\n</script>\n")], -1);

var vc_provider_imagery_bingmapsvue_type_template_id_a50f7a5a_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>url</td><td>String | Object</td><td><code>&#39;https://dev.virtualearth.net&#39;</code></td><td><code>required</code> The url of the Bing Maps server hosting the imagery.</td><td></td></tr><tr><td><strong>bmKey</strong></td><td>String</td><td></td><td><code>optional</code> The Bing Maps key for your application, which can be created at <a href=\"https://www.bingmapsportal.com/\">https://www.bingmapsportal.com/</a>. <strong>Note that it is bmKey</strong></td><td></td></tr><tr><td>tileProtocol</td><td>String</td><td></td><td><code>optional</code> The protocol to use when loading tiles, e.g. &#39;http:&#39; or &#39;https:&#39;. By default, tiles are loaded using the same protocol as the page.</td><td></td></tr><tr><td>mapStyle</td><td>String</td><td><code>&#39;Aerial&#39;</code></td><td><code>optional</code> The type of Bing Maps imagery to load.</td><td>Aerial/AerialWithLabels/AerialWithLabelsOnDemand/CanvasDark/CanvasGray/CanvasLight/</td></tr><tr><td>culture</td><td>String</td><td><code>&#39;&#39;</code></td><td><code>optional</code> The culture to use when requesting Bing Maps imagery. Not all cultures are supported. See http://msdn.microsoft.com/en-us/library/hh441729.aspx for information on the supported cultures.</td><td></td></tr><tr><td>ellipsoid</td><td>Object</td><td></td><td><code>optional</code> The ellipsoid. If not specified, the WGS84 ellipsoid is used.</td><td></td></tr><tr><td>tileDiscardPolicy</td><td>Object</td><td></td><td><code>optional</code> The policy that determines if a tile is invalid and should be discarded. By default, a DiscardEmptyTileImagePolicy will be used, with the expectation that the Bing Maps server will send a zero-length response for missing tiles. To ensure that no tiles are discarded, construct and pass a NeverTileDiscardPolicy for this parameter.</td><td></td></tr></tbody></table><div class=\"tip\"><p>Tip: In addition to passing <code>Cesium.Rectangle</code>, the <code>rectangle</code> property can also pass <code>PlainObject(RectangleInDegreeOption|Cartesian4Option</code>) and <code>Array&lt;number&gt;</code> (degrees)</p></div><div class=\"tipflex\"><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// RectangleInDegreeOption</span>\n{\n  <span class=\"hljs-attr\">west</span>: number,\n  <span class=\"hljs-attr\">south</span>: number,\n  <span class=\"hljs-attr\">east</span>: number,\n  <span class=\"hljs-attr\">north</span>: number\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// Cartesian4Option</span>\n{\n  <span class=\"hljs-attr\">x</span>: number,\n  <span class=\"hljs-attr\">y</span>: number,\n  <span class=\"hljs-attr\">z</span>: number,\n  <span class=\"hljs-attr\">w</span>: number\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// Array&lt;number&gt; in degrees</span>\n;[number, number, number, number]\n</code></pre></div><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>errorEvent</td><td>TileProviderError</td><td>Triggers when the imagery provider encounters an asynchronous error.</td></tr><tr><td>readyPromise</td><td>ImageryProvider</td><td>Triggers when the provider is ready for use.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/BingMapsImageryProvider.html\">BingMapsImageryProvider</a></strong></li></ul>", 8);

function vc_provider_imagery_bingmapsvue_type_template_id_a50f7a5a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_provider_imagery_bingmapsvue_type_template_id_a50f7a5a_hoisted_1, [vc_provider_imagery_bingmapsvue_type_template_id_a50f7a5a_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [vc_provider_imagery_bingmapsvue_type_template_id_a50f7a5a_hoisted_8];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [vc_provider_imagery_bingmapsvue_type_template_id_a50f7a5a_hoisted_7];
    }),
    _: 1
  }), vc_provider_imagery_bingmapsvue_type_template_id_a50f7a5a_hoisted_9, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-provider-imagery-bingmaps.md?vue&type=template&id=a50f7a5a

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/providers/vc-provider-imagery-bingmaps.md?vue&type=script&lang=ts


/* harmony default export */ var vc_provider_imagery_bingmapsvue_type_script_lang_ts = ({
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
        var _component_vc_provider_imagery_bingmaps = _resolveComponent("vc-provider-imagery-bingmaps");

        var _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

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
                  contrast: _ctx.contrast
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_bingmaps, {
                      ref: "provider",
                      bmKey: "AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-",
                      mapStyle: _ctx.mapStyle
                    }, null, 8, ["mapStyle"])];
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
                    }, null, 8, ["modelValue", "step"]), _hoisted_9, _createVNode(_component_el_select, {
                      modelValue: _ctx.mapStyle,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                        return _ctx.mapStyle = $event;
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
          var options = [{
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
          var mapStyle = ref('Aerial'); // methods

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
            options: options,
            mapStyle: mapStyle
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-provider-imagery-bingmaps.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-provider-imagery-bingmaps.md



vc_provider_imagery_bingmapsvue_type_script_lang_ts.render = vc_provider_imagery_bingmapsvue_type_template_id_a50f7a5a_render

/* harmony default export */ var vc_provider_imagery_bingmaps = __webpack_exports__["default"] = (vc_provider_imagery_bingmapsvue_type_script_lang_ts);

/***/ })

}]);