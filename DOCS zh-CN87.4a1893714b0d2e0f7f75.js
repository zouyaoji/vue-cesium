(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[175],{

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/vc-layer-imagery.md?vue&type=template&id=3fc45d72

var vc_layer_imageryvue_type_template_id_3fc45d72_hoisted_1 = {
  class: "content element-doc"
};

var vc_layer_imageryvue_type_template_id_3fc45d72_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vclayerimagery\"><a class=\"header-anchor\" href=\"#vclayerimagery\">¶</a> VcLayerImagery</h2><p>加载影像图层，相当于初始化一个 <code>Cesium.ImageryLayer</code> 实例。</p><p>需要作为 <code>vc-viewer</code> 的子组件才能正常加载。可以直接指定 <code>vc-layer-imagery</code> 的 <code>imageryProvider</code> 属性，也用 VueCesium 提供的 <code>vc-provider-xxx</code> 系列组件作为 <code>vc-layer-imagery</code> 子组件挂载各个 <code>imageryProvider</code>，但一个影像图层只能挂载一个 <code>provider</code>。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>影像图层组件的基础用法。</p>", 5);

var vc_layer_imageryvue_type_template_id_3fc45d72_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 组件在三维球上添加 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "OpenStreetMapImageryProvider"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 影像服务瓦片图层。")])], -1);

var vc_layer_imageryvue_type_template_id_3fc45d72_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-layer-imagery ref=\"layer\" :imageryProvider=\"imageryProvider\" :alpha=\"alpha\" :brightness=\"brightness\" :contrast=\"contrast\"></vc-layer-imagery>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n      <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    </el-row>\n    <el-row>\n      <el-col>\n        <div class=\"block\">\n          <span class=\"demonstration\">透明度</span>\n          <el-slider v-model=\"alpha\" :min=\"0\" :max=\"1\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">亮度</span>\n          <el-slider v-model=\"brightness\" :min=\"0\" :max=\"3\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">对比度</span>\n          <el-slider v-model=\"contrast\" :min=\"0\" :max=\"3\" :step=\"0.01\"></el-slider>\n        </div>\n      </el-col>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const imageryProvider = ref(null)\n      const layer = ref(null)\n      const alpha = ref(1)\n      const brightness = ref(1)\n      const contrast = ref(1)\n      // methods\n      const onViewerReady = ({ Cesium, viewer }) => {\n        imageryProvider.value = new Cesium.OpenStreetMapImageryProvider({\n          url: 'https://a.tile.openstreetmap.org/'\n        })\n      }\n      const unload = () => {\n        layer.value.unload()\n      }\n      const reload = () => {\n        layer.value.reload()\n      }\n      const load = () => {\n        layer.value.load()\n      }\n      return {\n        imageryProvider,\n        layer,\n        onViewerReady,\n        unload,\n        reload,\n        load,\n        alpha,\n        brightness,\n        contrast\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>sortOrder</td><td>Number</td><td></td><td><code>optional</code> 指定图层相对顺序。</td><td></td></tr><tr><td>imageryProvider</td><td>Object</td><td></td><td><code>optional</code> 指定影像图层的瓦片提供方式。</td><td></td></tr><tr><td>rectangle</td><td>Rectangle</td><td><code>imageryProvider.rectangle</code></td><td><code>optional</code> 指定影像图层的矩形范围，此矩形限制了影像可见范围。</td><td></td></tr><tr><td>alpha</td><td>Number|function</td><td><code>1.0</code></td><td><code>optional</code> 指定影像图层透明度值，取值范围为 0.0~1.0。</td><td></td></tr><tr><td>nightAlpha</td><td>Number|function</td><td><code>1.0</code></td><td><code>optional</code> 指定影像图层透明度值，取值范围为 0.0~1.0。</td><td></td></tr><tr><td>dayAlpha</td><td>Number|function</td><td><code>1.0</code></td><td><code>optional</code> 指定影像图层透明度值，取值范围为 0.0~1.0。</td><td></td></tr><tr><td>brightness</td><td>Number|function</td><td><code>1.0</code></td><td><code>optional</code> 指定影像图层亮度值。值为 1.0 表示使用原图；值大于 1.0 时图像将变亮；值小于 1.0 时图像将变暗。</td><td></td></tr><tr><td>contrast</td><td>Number|function</td><td><code>1.0</code></td><td><code>optional</code> 指定影像图层对比度。值为 1.0 表示使用原图；值大于 1.0 表示增加对比度；值小于 1.0 表示降低对比度。</td><td></td></tr><tr><td>hue</td><td>Number|function</td><td><code>0.0</code></td><td><code>optional</code> 指定影像图层色调。值为 0.0 表示使用原图。</td><td></td></tr><tr><td>saturation</td><td>Number|function</td><td><code>1.0</code></td><td><code>optional</code> 指定影像图层饱和度。值为 1.0 表示使用原图；值大于 1.0 表示增加饱和度；值小于 1.0 表示降低饱和度。</td><td></td></tr><tr><td>gamma</td><td>Number|function</td><td><code>1.0</code></td><td><code>optional</code> 指定影像图层伽马校正。值为 1.0 表示使用原图。</td><td></td></tr><tr><td>splitDirection</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定影像图层分割方向。 <strong>LEFT: -1, NONE: 0, RIGHT: 1</strong></td><td>-1/0/1</td></tr><tr><td>minificationFilter</td><td>Number</td><td><code>9729</code></td><td><code>optional</code> 指定影像图层纹理缩小过滤器。 <strong>NEAREST: 9728, LINEAR: 9729, NEAREST_MIPMAP_NEAREST: 9984, LINEAR_MIPMAP_NEAREST: 9985, NEAREST_MIPMAP_LINEAR: 9986</strong></td><td>9728/9729/9984/9985/9986</td></tr><tr><td>magnificationFilter</td><td>Number</td><td><code>9729</code></td><td><code>optional</code> 指定影像图层纹理缩小过滤器。<strong>NEAREST: 9728, LINEAR: 9729</strong></td><td>9728/9729</td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定图层是否显示，如果显示图层，则为 true; 否则，false</td><td></td></tr><tr><td>maximumAnisotropy</td><td>Number</td><td></td><td><code>optional</code> 指定纹理过滤的最大各向异性级别。 如果未指定此参数，则将使用 WebGL 堆栈支持的最大各向异性。 较大的值使图像在水平视图中看起来更好。</td><td></td></tr><tr><td>minimumTerrainLevel</td><td>Number</td><td></td><td><code>optional</code> 指定最小地形细节层次。level 0 是最小细节层次。</td><td></td></tr><tr><td>maximumTerrainLevel</td><td>Number</td><td></td><td><code>optional</code> 指定最大地形细节层次。</td><td></td></tr><tr><td>cutoutRectangle</td><td>Rectangle</td><td></td><td><code>optional</code> 指定裁剪此影像图层的矩形范围。</td><td></td></tr><tr><td>colorToAlpha</td><td>Object</td><td></td><td><code>optional</code> 指定透明时的颜色。</td><td></td></tr><tr><td>colorToAlphaThreshold</td><td>Number</td><td><code>0.004</code></td><td><code>optional</code> 指定颜色到 alpha 的阈值。</td><td></td></tr></tbody></table><div class=\"tip\"><p>提示：<code>rectangle</code> 属性除了可传 <code>Cesium.Rectangle</code> 还可以传 <code>PlainObject(RectangleInDegreeOption|Cartesian4Option</code>) 和 <code>Array&lt;number&gt;</code> (度)</p></div><div class=\"tipflex\"><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// RectangleInDegreeOption</span>\n{\n  <span class=\"hljs-attr\">west</span>: number,\n  <span class=\"hljs-attr\">south</span>: number,\n  <span class=\"hljs-attr\">east</span>: number,\n  <span class=\"hljs-attr\">north</span>: number\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// Cartesian4Option</span>\n{\n  <span class=\"hljs-attr\">x</span>: number,\n  <span class=\"hljs-attr\">y</span>: number,\n  <span class=\"hljs-attr\">z</span>: number,\n  <span class=\"hljs-attr\">w</span>: number\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// Array&lt;number&gt; in degrees</span>\n;[number, number, number, number]\n</code></pre></div><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载完成触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/ImageryLayer.html\">ImageryLayer</a></strong></li></ul>", 8);

function vc_layer_imageryvue_type_template_id_3fc45d72_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_layer_imageryvue_type_template_id_3fc45d72_hoisted_1, [vc_layer_imageryvue_type_template_id_3fc45d72_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [vc_layer_imageryvue_type_template_id_3fc45d72_hoisted_8];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [vc_layer_imageryvue_type_template_id_3fc45d72_hoisted_7];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/vc-layer-imagery.md?vue&type=template&id=3fc45d72

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/vc-layer-imagery.md?vue&type=script&lang=ts


/* harmony default export */ var vc_layer_imageryvue_type_script_lang_ts = ({
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

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("销毁");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("加载");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("重载");

      var _hoisted_5 = {
        class: "block"
      };

      var _hoisted_6 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "透明度", -1);

      var _hoisted_7 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "亮度", -1);

      var _hoisted_8 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "对比度", -1);

      function render(_ctx, _cache) {
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
            return [_createVNode(_component_vc_viewer, {
              onReady: _ctx.onViewerReady
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_layer_imagery, {
                  ref: "layer",
                  imageryProvider: _ctx.imageryProvider,
                  alpha: _ctx.alpha,
                  brightness: _ctx.brightness,
                  contrast: _ctx.contrast
                }, null, 8, ["imageryProvider", "alpha", "brightness", "contrast"])];
              }),
              _: 1
            }, 8, ["onReady"]), _createVNode("div", _hoisted_1, [_createVNode(_component_el_row, null, {
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
                      max: 3,
                      step: 0.01
                    }, null, 8, ["modelValue", "step"]), _hoisted_8, _createVNode(_component_el_slider, {
                      modelValue: _ctx.contrast,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                        return _ctx.contrast = $event;
                      }),
                      min: 0,
                      max: 3,
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
          var imageryProvider = ref(null);
          var layer = ref(null);
          var alpha = ref(1);
          var brightness = ref(1);
          var contrast = ref(1); // methods

          var onViewerReady = function onViewerReady(_ref) {
            var Cesium = _ref.Cesium,
                viewer = _ref.viewer;
            imageryProvider.value = new Cesium.OpenStreetMapImageryProvider({
              url: 'https://a.tile.openstreetmap.org/'
            });
          };

          var unload = function unload() {
            layer.value.unload();
          };

          var reload = function reload() {
            layer.value.reload();
          };

          var load = function load() {
            layer.value.load();
          };

          return {
            imageryProvider: imageryProvider,
            layer: layer,
            onViewerReady: onViewerReady,
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
// CONCATENATED MODULE: ./website/docs/zh-CN/vc-layer-imagery.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/vc-layer-imagery.md



vc_layer_imageryvue_type_script_lang_ts.render = vc_layer_imageryvue_type_template_id_3fc45d72_render

/* harmony default export */ var vc_layer_imagery = __webpack_exports__["default"] = (vc_layer_imageryvue_type_script_lang_ts);

/***/ })

}]);