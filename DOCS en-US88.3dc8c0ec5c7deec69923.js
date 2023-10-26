(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/providers/vc-imagery-provider-tencent.md?vue&type=template&id=4bb6e68c

const vc_imagery_provider_tencentvue_type_template_id_4bb6e68c_hoisted_1 = {
  class: "content vue-cesium-doc"
};
const vc_imagery_provider_tencentvue_type_template_id_4bb6e68c_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Load the tencent tile service.", -1);
const vc_imagery_provider_tencentvue_type_template_id_4bb6e68c_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "Note"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(": It needs to be a subcomponent of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to load normally.")], -1);
const vc_imagery_provider_tencentvue_type_template_id_4bb6e68c_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage of the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-imagery-provider-tencent"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component.")], -1);
const vc_imagery_provider_tencentvue_type_template_id_4bb6e68c_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("uses the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add a tile service layer provided by Tencent on the viewer.")])], -1);
const vc_imagery_provider_tencentvue_type_template_id_4bb6e68c_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-layer-imagery :alpha=\"alpha\" :brightness=\"brightness\" :contrast=\"contrast\" :sort-order=\"10\">\n      <vc-imagery-provider-tencent\n        :mapStyle=\"mapStyle\"\n        :styleId=\"styleId\"\n        :projection-transforms=\"projectionTransforms\"\n        ref=\"provider\"\n      ></vc-imagery-provider-tencent>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n      <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    </el-row>\n    <el-row>\n      <el-col>\n        <div class=\"block\">\n          <span class=\"demonstration\">alpha</span>\n          <el-slider v-model=\"alpha\" :min=\"0\" :max=\"1\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">brightness</span>\n          <el-slider v-model=\"brightness\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">contrast</span>\n          <el-slider v-model=\"contrast\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">switch style</span>\n          <el-row>\n            <el-select v-model=\"mapStyle\" placeholder=\"mapStyle\">\n              <el-option v-for=\"item in mapStyleOptions\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </el-option>\n            </el-select>\n          </el-row>\n          <span class=\"demonstration\" v-if=\"mapStyle === 'vector'\">switch styleId</span>\n          <el-row>\n            <el-select v-model=\"styleId\" placeholder=\"styleId\" v-if=\"mapStyle === 'vector'\">\n              <el-option v-for=\"item in styleIdOptions\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </el-option>\n            </el-select>\n          </el-row>\n        </div>\n      </el-col>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const provider = ref(null)\n      const alpha = ref(1)\n      const brightness = ref(1)\n      const contrast = ref(1)\n      const mapStyleOptions = [\n        {\n          value: 'img',\n          label: 'satellite'\n        },\n        {\n          value: 'terrain',\n          label: 'terrain'\n        },\n        {\n          value: 'vector',\n          label: 'vector'\n        }\n      ]\n      const styleIdOptions = [\n        {\n          value: '1',\n          label: 'classic'\n        },\n        {\n          value: '2',\n          label: 'label 1'\n        },\n        {\n          value: '3',\n          label: 'label 2'\n        },\n        {\n          value: '4',\n          label: 'Mo Yuan'\n        },\n        {\n          value: '8',\n          label: 'Bai Qian'\n        },\n        {\n          value: '9',\n          label: 'Grey'\n        }\n      ]\n      const mapStyle = ref('vector')\n      const styleId = ref('1')\n      // methods\n      const unload = () => {\n        provider.value.unload()\n      }\n      const reload = () => {\n        provider.value.reload()\n      }\n      const load = () => {\n        provider.value.load()\n      }\n      const projectionTransforms = {\n        from: 'GCJ02',\n        to: 'WGS84'\n      }\n      return {\n        provider,\n        unload,\n        reload,\n        load,\n        alpha,\n        brightness,\n        contrast,\n        mapStyleOptions,\n        mapStyle,\n        styleIdOptions,\n        styleId,\n        projectionTransforms\n      }\n    }\n  }\n</script>\n")], -1);
const vc_imagery_provider_tencentvue_type_template_id_4bb6e68c_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>url</td><td>string</td><td></td><td><code>optional</code> Specify the URL template.</td><td></td></tr><tr><td>subdomains</td><td>Array&lt;string&gt;</td><td><code>[&#39;1&#39;, &#39;2&#39;, &#39;3&#39;]</code></td><td><code>optional</code> Specify the service polling parameters.</td><td></td></tr><tr><td>mapStyle</td><td>string</td><td><code>&#39;vector&#39;</code></td><td><code>optional</code> Specify the map style type of the tencent service.</td><td>img/terrain/vector</td></tr><tr><td>styleId</td><td>string</td><td><code>&#39;1&#39;</code></td><td><code>optional</code> Specify the map style type of the tencent service.</td><td>1/2/3/4/8/9</td></tr><tr><td>credit</td><td>string|Cesium.Credit</td><td><code>&#39;&#39;</code></td><td><code>optional</code> A credit for the data source, which is displayed on the canvas.</td><td></td></tr><tr><td>rectangle</td><td>VcRectangle</td><td></td><td><code>optional</code> The rectangle, in radians, covered by the image.</td><td></td></tr><tr><td>minimumLevel</td><td>number</td><td><code>0</code></td><td><code>optional</code> The minimum level-of-detail supported by the imagery provider.</td><td></td></tr><tr><td>maximumLevel</td><td>number</td><td><code>20</code></td><td><code>optional</code> The maximum level-of-detail supported by the imagery provider.</td><td></td></tr><tr><td>tilingScheme</td><td>Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme</td><td><code>new Cesium.WebMercatorTilingScheme()</code></td><td><code>optional</code> The tiling scheme specifying how the ellipsoidal surface is broken into tiles.</td><td></td></tr><tr><td>projectionTransforms</td><td>false|ProjectionTransforms</td><td><code>false</code></td><td><code>optional</code> Specify the projection transformation parameters.</td><td></td></tr></tbody></table>", 1);
const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>errorEvent</td><td>TileProviderError</td><td>Triggers when the imagery provider encounters an asynchronous error.</td></tr><tr><td>readyPromise</td><td>ImageryProvider</td><td>Triggers when the provider is ready for use.</td></tr></tbody></table>", 1);
function vc_imagery_provider_tencentvue_type_template_id_4bb6e68c_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");
  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");
  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");
  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");
  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_imagery_provider_tencentvue_type_template_id_4bb6e68c_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcimageryprovidertencent",
    tabindex: "-1",
    content: "VcImageryProviderTencent",
    href: "#vcimageryprovidertencent",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcImageryProviderTencent "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcimageryprovidertencent"
    })]),
    _: 1
  }), vc_imagery_provider_tencentvue_type_template_id_4bb6e68c_hoisted_2, vc_imagery_provider_tencentvue_type_template_id_4bb6e68c_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Basic usage "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), vc_imagery_provider_tencentvue_type_template_id_4bb6e68c_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [vc_imagery_provider_tencentvue_type_template_id_4bb6e68c_hoisted_6]),
    default: Object(vue_esm_browser["withCtx"])(() => [vc_imagery_provider_tencentvue_type_template_id_4bb6e68c_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Props "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), vc_imagery_provider_tencentvue_type_template_id_4bb6e68c_hoisted_7, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Events "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Reference "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createTextVNode"])("Refer to "), Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "http://dc.dvgis.cn/#/editor?type=baselayer&example=tencent"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("DCSDK")]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-imagery-provider-tencent.md?vue&type=template&id=4bb6e68c

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/providers/vc-imagery-provider-tencent.md?vue&type=script&lang=ts

/* harmony default export */ var vc_imagery_provider_tencentvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        createElementVNode: _createElementVNode,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        createBlock: _createBlock,
        createCommentVNode: _createCommentVNode
      } = vue_esm_browser;
      const _hoisted_1 = {
        class: "demo-toolbar"
      };
      const _hoisted_2 = {
        class: "block"
      };
      const _hoisted_3 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "alpha", -1);
      const _hoisted_4 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "brightness", -1);
      const _hoisted_5 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "contrast", -1);
      const _hoisted_6 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "switch style", -1);
      const _hoisted_7 = {
        key: 0,
        class: "demonstration"
      };
      function render(_ctx, _cache) {
        const _component_vc_imagery_provider_tencent = _resolveComponent("vc-imagery-provider-tencent");
        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");
        const _component_vc_viewer = _resolveComponent("vc-viewer");
        const _component_el_button = _resolveComponent("el-button");
        const _component_el_row = _resolveComponent("el-row");
        const _component_el_slider = _resolveComponent("el-slider");
        const _component_el_option = _resolveComponent("el-option");
        const _component_el_select = _resolveComponent("el-select");
        const _component_el_col = _resolveComponent("el-col");
        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_layer_imagery, {
              alpha: _ctx.alpha,
              brightness: _ctx.brightness,
              contrast: _ctx.contrast,
              "sort-order": 10
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_tencent, {
                mapStyle: _ctx.mapStyle,
                styleId: _ctx.styleId,
                "projection-transforms": _ctx.projectionTransforms,
                ref: "provider"
              }, null, 8, ["mapStyle", "styleId", "projection-transforms"])]),
              _: 1
            }, 8, ["alpha", "brightness", "contrast"])]),
            _: 1
          }), _createElementVNode("div", _hoisted_1, [_createVNode(_component_el_row, null, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_createTextVNode("Unload")]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_createTextVNode("Load")]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_createTextVNode("Reload")]),
              _: 1
            }, 8, ["onClick"])]),
            _: 1
          }), _createVNode(_component_el_row, null, {
            default: _withCtx(() => [_createVNode(_component_el_col, null, {
              default: _withCtx(() => [_createElementVNode("div", _hoisted_2, [_hoisted_3, _createVNode(_component_el_slider, {
                modelValue: _ctx.alpha,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.alpha = $event),
                min: 0,
                max: 1,
                step: 0.01
              }, null, 8, ["modelValue", "step"]), _hoisted_4, _createVNode(_component_el_slider, {
                modelValue: _ctx.brightness,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.brightness = $event),
                min: 0,
                max: 5,
                step: 0.01
              }, null, 8, ["modelValue", "step"]), _hoisted_5, _createVNode(_component_el_slider, {
                modelValue: _ctx.contrast,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.contrast = $event),
                min: 0,
                max: 5,
                step: 0.01
              }, null, 8, ["modelValue", "step"]), _hoisted_6, _createVNode(_component_el_row, null, {
                default: _withCtx(() => [_createVNode(_component_el_select, {
                  modelValue: _ctx.mapStyle,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.mapStyle = $event),
                  placeholder: "mapStyle"
                }, {
                  default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.mapStyleOptions, item => {
                    return _openBlock(), _createBlock(_component_el_option, {
                      key: item.value,
                      label: item.label,
                      value: item.value
                    }, null, 8, ["label", "value"]);
                  }), 128))]),
                  _: 1
                }, 8, ["modelValue"])]),
                _: 1
              }), _ctx.mapStyle === 'vector' ? (_openBlock(), _createElementBlock("span", _hoisted_7, "switch styleId")) : _createCommentVNode("", true), _createVNode(_component_el_row, null, {
                default: _withCtx(() => [_ctx.mapStyle === 'vector' ? (_openBlock(), _createBlock(_component_el_select, {
                  key: 0,
                  modelValue: _ctx.styleId,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.styleId = $event),
                  placeholder: "styleId"
                }, {
                  default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.styleIdOptions, item => {
                    return _openBlock(), _createBlock(_component_el_option, {
                      key: item.value,
                      label: item.label,
                      value: item.value
                    }, null, 8, ["label", "value"]);
                  }), 128))]),
                  _: 1
                }, 8, ["modelValue"])) : _createCommentVNode("", true)]),
                _: 1
              })])]),
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
          const mapStyleOptions = [{
            value: 'img',
            label: 'satellite'
          }, {
            value: 'terrain',
            label: 'terrain'
          }, {
            value: 'vector',
            label: 'vector'
          }];
          const styleIdOptions = [{
            value: '1',
            label: 'classic'
          }, {
            value: '2',
            label: 'label 1'
          }, {
            value: '3',
            label: 'label 2'
          }, {
            value: '4',
            label: 'Mo Yuan'
          }, {
            value: '8',
            label: 'Bai Qian'
          }, {
            value: '9',
            label: 'Grey'
          }];
          const mapStyle = ref('vector');
          const styleId = ref('1');
          // methods
          const unload = () => {
            provider.value.unload();
          };
          const reload = () => {
            provider.value.reload();
          };
          const load = () => {
            provider.value.load();
          };
          const projectionTransforms = {
            from: 'GCJ02',
            to: 'WGS84'
          };
          return {
            provider,
            unload,
            reload,
            load,
            alpha,
            brightness,
            contrast,
            mapStyleOptions,
            mapStyle,
            styleIdOptions,
            styleId,
            projectionTransforms
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
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-imagery-provider-tencent.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-imagery-provider-tencent.md



vc_imagery_provider_tencentvue_type_script_lang_ts.render = vc_imagery_provider_tencentvue_type_template_id_4bb6e68c_render

/* harmony default export */ var vc_imagery_provider_tencent = __webpack_exports__["default"] = (vc_imagery_provider_tencentvue_type_script_lang_ts);

/***/ })

}]);