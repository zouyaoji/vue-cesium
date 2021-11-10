(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/providers/vc-provider-imagery-tianditu.md?vue&type=template&id=cb8a7366

const vc_provider_imagery_tiandituvue_type_template_id_cb8a7366_hoisted_1 = {
  class: "content element-doc"
};

const vc_provider_imagery_tiandituvue_type_template_id_cb8a7366_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcproviderimagerytianditu\"><a class=\"header-anchor\" href=\"#vcproviderimagerytianditu\">¶</a> VcProviderImageryTianditu</h2><p>Loading a tiled imagery provider that provides tiled imagery hosted by a Tianditu REST API.</p><p><strong>Note</strong>: It needs to be a subcomponent of <code>vc-layer-imagery</code> to load normally.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of the <code>vc-provider-imagery-tianditu</code> component.</p>", 5);

const vc_provider_imagery_tiandituvue_type_template_id_cb8a7366_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add the imagery layer with VcProviderImageryTianditu to the viewer.")])], -1);

const vc_provider_imagery_tiandituvue_type_template_id_cb8a7366_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- Annotation layer -->\n    <vc-layer-imagery :alpha=\"alpha\" :brightness=\"brightness\" :contrast=\"contrast\" :sortOrder=\"20\">\n      <vc-provider-imagery-tianditu mapStyle=\"cva_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n    <vc-layer-imagery :alpha=\"alpha\" :brightness=\"brightness\" :contrast=\"contrast\" :sortOrder=\"10\">\n      <vc-provider-imagery-tianditu :mapStyle=\"mapStyle\" token=\"436ce7e50d27eede2f2929307e6b33c0\" ref=\"provider\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n      <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    </el-row>\n    <el-row>\n      <el-col>\n        <div class=\"block\">\n          <span class=\"demonstration\">Alpha</span>\n          <el-slider v-model=\"alpha\" :min=\"0\" :max=\"1\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">Brightness</span>\n          <el-slider v-model=\"brightness\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">Contrast</span>\n          <el-slider v-model=\"contrast\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">Switch</span>\n          <el-select v-model=\"mapStyle\" placeholder=\"Select\">\n            <el-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </el-option>\n          </el-select>\n        </div>\n      </el-col>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const provider = ref(null)\n      const alpha = ref(1)\n      const brightness = ref(1)\n      const contrast = ref(1)\n      const options = [\n        {\n          value: 'img_c',\n          label: 'img_c'\n        },\n        {\n          value: 'img_w',\n          label: 'img_w'\n        },\n        {\n          value: 'vec_c',\n          label: 'vec_c'\n        },\n        {\n          value: 'vec_w',\n          label: 'vec_w'\n        },\n        {\n          value: 'ter_c',\n          label: 'ter_c'\n        },\n        {\n          value: 'ter_w',\n          label: 'ter_w'\n        },\n        {\n          value: 'ibo_c',\n          label: 'ibo_c'\n        },\n        {\n          value: 'ibo_w',\n          label: 'ibo_w'\n        },\n      ]\n      const mapStyle = ref('img_c')\n      // methods\n      const unload = () => {\n        provider.value.unload()\n      }\n      const reload = () => {\n        provider.value.reload()\n      }\n      const load = () => {\n        provider.value.load()\n      }\n      return {\n        provider,\n        unload,\n        reload,\n        load,\n        alpha,\n        brightness,\n        contrast,\n        options,\n        mapStyle\n      }\n    }\n  }\n</script>\n")], -1);

const vc_provider_imagery_tiandituvue_type_template_id_cb8a7366_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>mapStyle</td><td>String</td><td><code>&#39;img_w&#39;</code></td><td><code>optional</code> The map type of Tianditu service.</td><td>cia_c/cia_w/cta_c/cta_w/cva_c/cva_w/ela_c/ela_w/eva_c/eva_w/img_c/img_w/ter_c/ter_w/vec_c/vec_w/ibo_c/ibo_w</td></tr><tr><td>credit</td><td>String|Object</td><td><code>&#39;天地图全球影像服务&#39;</code></td><td><code>optional</code> A credit for the data source, which is displayed on the canvas.</td><td></td></tr><tr><td>token</td><td>String</td><td></td><td><code>optional</code> Tianditu application key. <a href=\"http://lbs.tianditu.gov.cn/home.html\">Application Address</a></td><td></td></tr><tr><td>protocol</td><td>String</td><td><code>https</code></td><td><code>optional</code> Specify the request protocol type. Can be <code>https</code> or <code>http</code>.</td><td></td></tr><tr><td>rectangle</td><td>Object</td><td></td><td><code>optional</code> The rectangle of the layer. This rectangle can limit the visible portion of the imagery provider.</td><td></td></tr><tr><td>minimumLevel</td><td>Number</td><td><code>0</code></td><td><code>optional</code> The minimum tile level to request, or undefined if there is no minimum.</td><td></td></tr><tr><td>maximumLevel</td><td>Number</td><td><code>20</code></td><td><code>optional</code> The maximum tile level to request, or undefined if there is no maximum.</td><td></td></tr><tr><td>projectionTransforms</td><td>Boolean|Object</td><td><code>false</code></td><td><code>optional</code> Specify the projection transformation parameters.</td><td></td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>errorEvent</td><td>TileProviderError</td><td>Triggers when the imagery provider encounters an asynchronous error.</td></tr><tr><td>readyPromise</td><td>ImageryProvider</td><td>Triggers when the provider is ready for use.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li><strong><a href=\"http://lbs.tianditu.gov.cn/server/MapService.html\">MapService</a></strong></li></ul>", 6);

function vc_provider_imagery_tiandituvue_type_template_id_cb8a7366_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_provider_imagery_tiandituvue_type_template_id_cb8a7366_hoisted_1, [vc_provider_imagery_tiandituvue_type_template_id_cb8a7366_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [vc_provider_imagery_tiandituvue_type_template_id_cb8a7366_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [vc_provider_imagery_tiandituvue_type_template_id_cb8a7366_hoisted_7]),
    _: 1
  }), vc_provider_imagery_tiandituvue_type_template_id_cb8a7366_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-provider-imagery-tianditu.md?vue&type=template&id=cb8a7366

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/providers/vc-provider-imagery-tianditu.md?vue&type=script&lang=ts

/* harmony default export */ var vc_provider_imagery_tiandituvue_type_script_lang_ts = ({
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
        createBlock: _createBlock
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

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Switch", -1);

      function render(_ctx, _cache) {
        const _component_vc_provider_imagery_tianditu = _resolveComponent("vc-provider-imagery-tianditu");

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
              sortOrder: 20
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_tianditu, {
                mapStyle: "cva_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            }, 8, ["alpha", "brightness", "contrast"]), _createVNode(_component_vc_layer_imagery, {
              alpha: _ctx.alpha,
              brightness: _ctx.brightness,
              contrast: _ctx.contrast,
              sortOrder: 10
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_tianditu, {
                mapStyle: _ctx.mapStyle,
                token: "436ce7e50d27eede2f2929307e6b33c0",
                ref: "provider"
              }, null, 8, ["mapStyle"])]),
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
              }, null, 8, ["modelValue", "step"]), _hoisted_9, _createVNode(_component_el_select, {
                modelValue: _ctx.mapStyle,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.mapStyle = $event),
                placeholder: "Select"
              }, {
                default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
                  return _openBlock(), _createBlock(_component_el_option, {
                    key: item.value,
                    label: item.label,
                    value: item.value
                  }, null, 8, ["label", "value"]);
                }), 128))]),
                _: 1
              }, 8, ["modelValue"])])]),
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
          const options = [{
            value: 'img_c',
            label: 'img_c'
          }, {
            value: 'img_w',
            label: 'img_w'
          }, {
            value: 'vec_c',
            label: 'vec_c'
          }, {
            value: 'vec_w',
            label: 'vec_w'
          }, {
            value: 'ter_c',
            label: 'ter_c'
          }, {
            value: 'ter_w',
            label: 'ter_w'
          }, {
            value: 'ibo_c',
            label: 'ibo_c'
          }, {
            value: 'ibo_w',
            label: 'ibo_w'
          }];
          const mapStyle = ref('img_c'); // methods

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
            contrast,
            options,
            mapStyle
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
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-provider-imagery-tianditu.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-provider-imagery-tianditu.md



vc_provider_imagery_tiandituvue_type_script_lang_ts.render = vc_provider_imagery_tiandituvue_type_template_id_cb8a7366_render

/* harmony default export */ var vc_provider_imagery_tianditu = __webpack_exports__["default"] = (vc_provider_imagery_tiandituvue_type_script_lang_ts);

/***/ })

}]);