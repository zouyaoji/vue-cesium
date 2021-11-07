(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/vc-layer-imagery.md?vue&type=template&id=5adc4e3a

const vc_layer_imageryvue_type_template_id_5adc4e3a_hoisted_1 = {
  class: "content element-doc"
};

const vc_layer_imageryvue_type_template_id_5adc4e3a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vclayerimagery\"><a class=\"header-anchor\" href=\"#vclayerimagery\">¶</a> VcLayerImagery</h2><p>Loading an image layer is equivalent to initializing a <code>Cesium.ImageryLayer</code> instance.</p><p>It needs to be a child component of <code>vc-viewer</code> to load normally. You can directly specify the <code>imageryProvider</code> property of <code>vc-layer-imagery</code>, and use the <code>vc-provider-xxx</code> series components provided by VueCesium as the <code>vc-layer-imagery</code> sub-components to mount each <code>imageryProvider</code>, but an image Only one <code>provider</code> can be attached to a layer.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>The basic usage of the image layer component.</p>", 5);

const vc_layer_imageryvue_type_template_id_5adc4e3a_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component to add the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "OpenStreetMapImageryProvider"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" image service tile layer on the viewer.")])], -1);

const vc_layer_imageryvue_type_template_id_5adc4e3a_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-layer-imagery ref=\"layer\" :imageryProvider=\"imageryProvider\" :alpha=\"alpha\" :brightness=\"brightness\" :contrast=\"contrast\"></vc-layer-imagery>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n      <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    </el-row>\n    <el-row>\n      <el-col>\n        <div class=\"block\">\n          <span class=\"demonstration\">Alpha</span>\n          <el-slider v-model=\"alpha\" :min=\"0\" :max=\"1\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">Brightness</span>\n          <el-slider v-model=\"brightness\" :min=\"0\" :max=\"3\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">Contrast</span>\n          <el-slider v-model=\"contrast\" :min=\"0\" :max=\"3\" :step=\"0.01\"></el-slider>\n        </div>\n      </el-col>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const imageryProvider = ref(null)\n      const layer = ref(null)\n      const alpha = ref(1)\n      const brightness = ref(1)\n      const contrast = ref(1)\n      // methods\n      const onViewerReady = ({ Cesium, viewer }) => {\n        imageryProvider.value = new Cesium.OpenStreetMapImageryProvider({\n          url: 'https://a.tile.openstreetmap.org/'\n        })\n      }\n      const unload = () => {\n        layer.value.unload()\n      }\n      const reload = () => {\n        layer.value.reload()\n      }\n      const load = () => {\n        layer.value.load()\n      }\n      return {\n        imageryProvider,\n        layer,\n        onViewerReady,\n        unload,\n        reload,\n        load,\n        alpha,\n        brightness,\n        contrast\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>sortOrder</td><td>Number</td><td></td><td><code>optional</code> Specify the relative order of the layers.</td><td></td></tr><tr><td>imageryProvider</td><td>Object</td><td></td><td><code>optional</code> The imagery provider to use.</td><td></td></tr><tr><td>rectangle</td><td>Rectangle</td><td><code>imageryProvider.rectangle</code></td><td><code>optional</code> The rectangle of the layer. This rectangle can limit the visible portion of the imagery provider.</td><td></td></tr><tr><td>alpha</td><td>Number|function</td><td><code>1.0</code></td><td><code>optional</code> The alpha blending value of this layer, from 0.0 to 1.0.</td><td></td></tr><tr><td>nightAlpha</td><td>Number|function</td><td><code>1.0</code></td><td><code>optional</code> The alpha blending value of this layer on the night side of the globe, from 0.0 to 1.0.</td><td></td></tr><tr><td>dayAlpha</td><td>Number|function</td><td><code>1.0</code></td><td><code>optional</code> The alpha blending value of this layer on the day side of the globe, from 0.0 to 1.0.</td><td></td></tr><tr><td>brightness</td><td>Number|function</td><td><code>1.0</code></td><td><code>optional</code> The brightness of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 makes the imagery darker while greater than 1.0 makes it brighter.</td><td></td></tr><tr><td>contrast</td><td>Number|function</td><td><code>1.0</code></td><td><code>optional</code> The contrast of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the contrast while greater than 1.0 increases it.</td><td></td></tr><tr><td>hue</td><td>Number|function</td><td><code>0.0</code></td><td><code>optional</code> The hue of this layer. 0.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level).</td><td></td></tr><tr><td>saturation</td><td>Number|function</td><td><code>1.0</code></td><td><code>optional</code> The saturation of this layer. 1.0 uses the unmodified imagery color. Less than 1.0 reduces the saturation while greater than 1.0 increases it.</td><td></td></tr><tr><td>gamma</td><td>Number|function</td><td><code>1.0</code></td><td><code>optional</code>The gamma correction to apply to this layer. 1.0 uses the unmodified imagery color. This can either be a simple number or a function with the signature function(frameState, layer, x, y, level). The function is passed the current frame state, this layer, and the x, y, and level coordinates of the imagery tile for which the gamma is required, and it is expected to return the gamma value to use for the tile. The function is executed for every frame and for every tile, so it must be fast.</td><td></td></tr><tr><td>splitDirection</td><td>Number</td><td><code>0</code></td><td><code>optional</code>The ImagerySplitDirection split to apply to this layer. <strong>LEFT: -1, NONE: 0, RIGHT: 1</strong></td><td>-1/0/1</td></tr><tr><td>minificationFilter</td><td>Number</td><td><code>9729</code></td><td><code>optional</code> The texture minification filter to apply to this layer. Possible values are TextureMinificationFilter.LINEAR and TextureMinificationFilter.NEAREST. <strong>NEAREST: 9728, LINEAR: 9729, NEAREST_MIPMAP_NEAREST: 9984, LINEAR_MIPMAP_NEAREST: 9985, NEAREST_MIPMAP_LINEAR: 9986, NEAREST_MIPMAP_NEAREST: 9984</strong></td><td>9728/9729/9984/9985/9986</td></tr><tr><td>magnificationFilter</td><td>Number</td><td><code>9729</code></td><td><code>optional</code> The texture minification filter to apply to this layer. Possible values are TextureMagnificationFilter.LINEAR and TextureMagnificationFilter.NEAREST. <strong>NEAREST: 9728, LINEAR: 9729</strong></td><td>9728/9729</td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> True if the layer is shown; otherwise, false.</td><td></td></tr><tr><td>maximumAnisotropy</td><td>Number</td><td>maximum supported</td><td><code>optional</code> The maximum anisotropy level to use for texture filtering. If this parameter is not specified, the maximum anisotropy supported by the WebGL stack will be used. Larger values make the imagery look better in horizon views.</td><td></td></tr><tr><td>minimumTerrainLevel</td><td>Number</td><td></td><td><code>optional</code>The minimum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.</td><td></td></tr><tr><td>maximumTerrainLevel</td><td>Number</td><td></td><td><code>optional</code>The maximum terrain level-of-detail at which to show this imagery layer, or undefined to show it at all levels. Level zero is the least-detailed level.</td><td></td></tr><tr><td>cutoutRectangle</td><td>Rectangle</td><td></td><td><code>optional</code> Cartographic rectangle for cutting out a portion of this ImageryLayer.</td><td></td></tr><tr><td>colorToAlpha</td><td>Object</td><td></td><td><code>optional</code> Color to be used as alpha.</td><td></td></tr><tr><td>colorToAlphaThreshold</td><td>Number</td><td><code>0.004</code></td><td><code>optional</code> Threshold for color-to-alpha.</td><td></td></tr></tbody></table><div class=\"tip\"><p>Tip: In addition to passing <code>Cesium.Rectangle</code>, the <code>rectangle</code> property can also pass <code>PlainObject(RectangleInDegreeOption|Cartesian4Option</code>) and <code>Array&lt;number&gt;</code> (degrees)</p></div><div class=\"tipflex\"><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// RectangleInDegreeOption</span>\n{\n  <span class=\"hljs-attr\">west</span>: number,\n  <span class=\"hljs-attr\">south</span>: number,\n  <span class=\"hljs-attr\">east</span>: number,\n  <span class=\"hljs-attr\">north</span>: number\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// Cartesian4Option</span>\n{\n  <span class=\"hljs-attr\">x</span>: number,\n  <span class=\"hljs-attr\">y</span>: number,\n  <span class=\"hljs-attr\">z</span>: number,\n  <span class=\"hljs-attr\">w</span>: number\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// Array&lt;number&gt; in degrees</span>\n;[number, number, number, number]\n</code></pre></div><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the object is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the object is loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the object is destroyed.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Official documents: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/ImageryLayer.html\">ImageryLayer</a></strong></li></ul>", 8);

function vc_layer_imageryvue_type_template_id_5adc4e3a_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_layer_imageryvue_type_template_id_5adc4e3a_hoisted_1, [vc_layer_imageryvue_type_template_id_5adc4e3a_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [vc_layer_imageryvue_type_template_id_5adc4e3a_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [vc_layer_imageryvue_type_template_id_5adc4e3a_hoisted_7]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/vc-layer-imagery.md?vue&type=template&id=5adc4e3a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/vc-layer-imagery.md?vue&type=script&lang=ts

/* harmony default export */ var vc_layer_imageryvue_type_script_lang_ts = ({
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
              ref: "layer",
              imageryProvider: _ctx.imageryProvider,
              alpha: _ctx.alpha,
              brightness: _ctx.brightness,
              contrast: _ctx.contrast
            }, null, 8, ["imageryProvider", "alpha", "brightness", "contrast"])]),
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
                max: 3,
                step: 0.01
              }, null, 8, ["modelValue", "step"]), _hoisted_8, _createVNode(_component_el_slider, {
                modelValue: _ctx.contrast,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.contrast = $event),
                min: 0,
                max: 3,
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
          const imageryProvider = ref(null);
          const layer = ref(null);
          const alpha = ref(1);
          const brightness = ref(1);
          const contrast = ref(1); // methods

          const onViewerReady = ({
            Cesium,
            viewer
          }) => {
            imageryProvider.value = new Cesium.OpenStreetMapImageryProvider({
              url: 'https://a.tile.openstreetmap.org/'
            });
          };

          const unload = () => {
            layer.value.unload();
          };

          const reload = () => {
            layer.value.reload();
          };

          const load = () => {
            layer.value.load();
          };

          return {
            imageryProvider,
            layer,
            onViewerReady,
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
// CONCATENATED MODULE: ./website/docs/en-US/vc-layer-imagery.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/vc-layer-imagery.md



vc_layer_imageryvue_type_script_lang_ts.render = vc_layer_imageryvue_type_template_id_5adc4e3a_render

/* harmony default export */ var vc_layer_imagery = __webpack_exports__["default"] = (vc_layer_imageryvue_type_script_lang_ts);

/***/ })

}]);