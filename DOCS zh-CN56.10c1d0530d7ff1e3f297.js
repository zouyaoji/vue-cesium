(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[151],{

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/overlays/vc-overlay-windmap.md?vue&type=template&id=922599ce

const vc_overlay_windmapvue_type_template_id_922599ce_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_overlay_windmapvue_type_template_id_922599ce_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcOverlayWindmap ");

const vc_overlay_windmapvue_type_template_id_922599ce_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "加载风场图。", -1);

const vc_overlay_windmapvue_type_template_id_922599ce_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const vc_overlay_windmapvue_type_template_id_922599ce_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "风场图组件的基础用法。", -1);

const vc_overlay_windmapvue_type_template_id_922599ce_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-windmap"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加风场动画。")])], -1);

const vc_overlay_windmapvue_type_template_id_922599ce_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"ready\">\n    <vc-overlay-windmap ref=\"wind\" v-if=\"windData !== null\" :data=\"windData\" :options=\"particleSystemOptions\"></vc-overlay-windmap>\n    <vc-layer-imagery :sortOrder=\"20\">\n      <vc-imagery-provider-tianditu mapStyle=\"cva_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n    <vc-layer-imagery :sortOrder=\"10\">\n      <vc-imagery-provider-tianditu mapStyle=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n      <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    </el-row>\n\n    <el-row>\n      <el-col>\n        <div class=\"block\">\n          <span>maxParticles</span>\n          <el-slider v-model=\"particleSystemOptions.maxParticles\" :min=\"1\" :max=\"65536\" :step=\"1\"></el-slider>\n          <span>particleHeight</span>\n          <el-slider v-model=\"particleSystemOptions.particleHeight\" :min=\"1\" :max=\"10000\" :step=\"1\"></el-slider>\n          <span>fadeOpacity</span>\n          <el-slider v-model=\"particleSystemOptions.fadeOpacity\" :min=\"0.90\" :max=\"0.999\" :step=\"0.001\"></el-slider>\n          <span>dropRate</span>\n          <el-slider v-model=\"particleSystemOptions.dropRate\" :min=\"0.0\" :max=\"0.1\" :step=\"0.001\"></el-slider>\n          <span>dropRateBump</span>\n          <el-slider v-model=\"particleSystemOptions.dropRateBump\" :min=\"0.0\" :max=\"0.2\" :step=\"0.001\"></el-slider>\n          <span>speedFactor</span>\n          <el-slider v-model=\"particleSystemOptions.speedFactor\" :min=\"0.5\" :max=\"8\" :step=\"0.1\"></el-slider>\n          <span>lineWidth</span>\n          <el-slider v-model=\"particleSystemOptions.lineWidth\" :min=\"0.01\" :max=\"16\" :step=\"0.01\"></el-slider>\n        </div>\n      </el-col>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        windData: null,\n        particleSystemOptions: {\n          maxParticles: 64 * 64,\n          particleHeight: 100.0,\n          fadeOpacity: 0.996,\n          dropRate: 0.003,\n          dropRateBump: 0.01,\n          speedFactor: 1.0,\n          lineWidth: 4.0\n        }\n      }\n    },\n    methods: {\n      ready() {\n        window.vm = this\n        this.loadNetCDF('https://zouyaoji.top/vue-cesium/SampleData/wind/demo.nc').then(data => {\n          this.windData = data\n        })\n      },\n      unload() {\n        this.$refs.wind.unload()\n      },\n      load() {\n        this.$refs.wind.load()\n      },\n      reload() {\n        this.$refs.wind.reload()\n      },\n      async loadNetCDF(filePath) {\n        let _this = this\n        return new Promise(function (resolve) {\n          var request = new XMLHttpRequest()\n          request.open('GET', filePath)\n          request.responseType = 'arraybuffer'\n          request.onload = function () {\n            var arrayToMap = function (array) {\n              return array.reduce(function (map, object) {\n                map[object.name] = object\n                return map\n              }, {})\n            }\n            var NetCDF = new netcdfjs(request.response)\n            let data = {}\n            var dimensions = arrayToMap(NetCDF.dimensions)\n            data.dimensions = {}\n            data.dimensions.lon = dimensions['lon'].size\n            data.dimensions.lat = dimensions['lat'].size\n            data.dimensions.lev = dimensions['lev'].size\n            var variables = arrayToMap(NetCDF.variables)\n            var uAttributes = arrayToMap(variables['U'].attributes)\n            var vAttributes = arrayToMap(variables['V'].attributes)\n            data.lon = {}\n            data.lon.array = new Float32Array(NetCDF.getDataVariable('lon').flat())\n            data.lon.min = Math.min(...data.lon.array)\n            data.lon.max = Math.max(...data.lon.array)\n            data.lat = {}\n            data.lat.array = new Float32Array(NetCDF.getDataVariable('lat').flat())\n            data.lat.min = Math.min(...data.lat.array)\n            data.lat.max = Math.max(...data.lat.array)\n            data.lev = {}\n            data.lev.array = new Float32Array(NetCDF.getDataVariable('lev').flat())\n            data.lev.min = Math.min(...data.lev.array)\n            data.lev.max = Math.max(...data.lev.array)\n            data.U = {}\n            data.U.array = new Float32Array(NetCDF.getDataVariable('U').flat())\n            data.U.min = uAttributes['min'].value\n            data.U.max = uAttributes['max'].value\n            data.V = {}\n            data.V.array = new Float32Array(NetCDF.getDataVariable('V').flat())\n            data.V.min = vAttributes['min'].value\n            data.V.max = vAttributes['max'].value\n            resolve(data)\n          }\n          request.send()\n        })\n      }\n    }\n  }\n</script>\n")], -1);

const vc_overlay_windmapvue_type_template_id_922599ce_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const vc_overlay_windmapvue_type_template_id_922599ce_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>data</td><td>Object</td><td></td><td><code>required</code> 指定风场数据。</td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定风场是否显示。</td></tr><tr><td>options</td><td>Object</td><td></td><td><code>optional</code> 指定风场数据渲染参数。</td></tr></tbody></table><div class=\"tip\"><p>options 默认参数:</p><pre class=\"example-code\"><code class=\"hljs language-js\">{\n  <span class=\"hljs-attr\">maxParticles</span>: <span class=\"hljs-number\">64</span> * <span class=\"hljs-number\">64</span>,\n  <span class=\"hljs-attr\">particleHeight</span>: <span class=\"hljs-number\">100.0</span>,\n  <span class=\"hljs-attr\">fadeOpacity</span>: <span class=\"hljs-number\">0.996</span>,\n  <span class=\"hljs-attr\">dropRate</span>: <span class=\"hljs-number\">0.003</span>,\n  <span class=\"hljs-attr\">dropRateBump</span>: <span class=\"hljs-number\">0.01</span>,\n  <span class=\"hljs-attr\">speedFactor</span>: <span class=\"hljs-number\">1.0</span>,\n  <span class=\"hljs-attr\">lineWidth</span>: <span class=\"hljs-number\">4.0</span>\n}\n</code><span class=\"lang-mark\">js</span></pre></div>", 2);

const vc_overlay_windmapvue_type_template_id_922599ce_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const vc_overlay_windmapvue_type_template_id_922599ce_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3D-Wind-Field: ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("3D-Wind-Field");

function vc_overlay_windmapvue_type_template_id_922599ce_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_overlay_windmapvue_type_template_id_922599ce_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcoverlaywindmap",
    tabindex: "-1",
    content: "VcOverlayWindmap",
    href: "#vcoverlaywindmap",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_windmapvue_type_template_id_922599ce_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcoverlaywindmap"
    })]),
    _: 1
  }), vc_overlay_windmapvue_type_template_id_922599ce_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_windmapvue_type_template_id_922599ce_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), vc_overlay_windmapvue_type_template_id_922599ce_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_windmapvue_type_template_id_922599ce_hoisted_7]),
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_windmapvue_type_template_id_922599ce_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    tabindex: "-1",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_windmapvue_type_template_id_922599ce_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), vc_overlay_windmapvue_type_template_id_922599ce_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-jian",
    tabindex: "-1",
    content: "事件",
    href: "#shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_windmapvue_type_template_id_922599ce_hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), vc_overlay_windmapvue_type_template_id_922599ce_hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "can-kao",
    tabindex: "-1",
    content: "参考",
    href: "#can-kao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#can-kao"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/RaymanNg/3D-Wind-Field"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    _: 1
  })])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/overlays/vc-overlay-windmap.md?vue&type=template&id=922599ce

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/overlays/vc-overlay-windmap.md?vue&type=script&lang=ts

/* harmony default export */ var vc_overlay_windmapvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        openBlock: _openBlock,
        createBlock: _createBlock,
        createCommentVNode: _createCommentVNode,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        createElementVNode: _createElementVNode,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;
      const _hoisted_1 = {
        class: "demo-toolbar"
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("重载");

      const _hoisted_5 = {
        class: "block"
      };

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("span", null, "maxParticles", -1);

      const _hoisted_7 = /*#__PURE__*/_createElementVNode("span", null, "particleHeight", -1);

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("span", null, "fadeOpacity", -1);

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("span", null, "dropRate", -1);

      const _hoisted_10 = /*#__PURE__*/_createElementVNode("span", null, "dropRateBump", -1);

      const _hoisted_11 = /*#__PURE__*/_createElementVNode("span", null, "speedFactor", -1);

      const _hoisted_12 = /*#__PURE__*/_createElementVNode("span", null, "lineWidth", -1);

      function render(_ctx, _cache) {
        const _component_vc_overlay_windmap = _resolveComponent("vc-overlay-windmap");

        const _component_vc_imagery_provider_tianditu = _resolveComponent("vc-imagery-provider-tianditu");

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
            onReady: _ctx.ready
          }, {
            default: _withCtx(() => [_ctx.windData !== null ? (_openBlock(), _createBlock(_component_vc_overlay_windmap, {
              key: 0,
              ref: "wind",
              data: _ctx.windData,
              options: _ctx.particleSystemOptions
            }, null, 8, ["data", "options"])) : _createCommentVNode("", true), _createVNode(_component_vc_layer_imagery, {
              sortOrder: 20
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_tianditu, {
                mapStyle: "cva_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            }), _createVNode(_component_vc_layer_imagery, {
              sortOrder: 10
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_tianditu, {
                mapStyle: "img_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            })]),
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
                modelValue: _ctx.particleSystemOptions.maxParticles,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.particleSystemOptions.maxParticles = $event),
                min: 1,
                max: 65536,
                step: 1
              }, null, 8, ["modelValue"]), _hoisted_7, _createVNode(_component_el_slider, {
                modelValue: _ctx.particleSystemOptions.particleHeight,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.particleSystemOptions.particleHeight = $event),
                min: 1,
                max: 10000,
                step: 1
              }, null, 8, ["modelValue"]), _hoisted_8, _createVNode(_component_el_slider, {
                modelValue: _ctx.particleSystemOptions.fadeOpacity,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.particleSystemOptions.fadeOpacity = $event),
                min: 0.90,
                max: 0.999,
                step: 0.001
              }, null, 8, ["modelValue", "min", "max", "step"]), _hoisted_9, _createVNode(_component_el_slider, {
                modelValue: _ctx.particleSystemOptions.dropRate,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.particleSystemOptions.dropRate = $event),
                min: 0.0,
                max: 0.1,
                step: 0.001
              }, null, 8, ["modelValue", "min", "max", "step"]), _hoisted_10, _createVNode(_component_el_slider, {
                modelValue: _ctx.particleSystemOptions.dropRateBump,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.particleSystemOptions.dropRateBump = $event),
                min: 0.0,
                max: 0.2,
                step: 0.001
              }, null, 8, ["modelValue", "min", "max", "step"]), _hoisted_11, _createVNode(_component_el_slider, {
                modelValue: _ctx.particleSystemOptions.speedFactor,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.particleSystemOptions.speedFactor = $event),
                min: 0.5,
                max: 8,
                step: 0.1
              }, null, 8, ["modelValue", "min", "step"]), _hoisted_12, _createVNode(_component_el_slider, {
                modelValue: _ctx.particleSystemOptions.lineWidth,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.particleSystemOptions.lineWidth = $event),
                min: 0.01,
                max: 16,
                step: 0.01
              }, null, 8, ["modelValue", "min", "step"])])]),
              _: 1
            })]),
            _: 1
          })])]),
          _: 1
        }, 512)]);
      }

      const democomponentExport = {
        data() {
          return {
            windData: null,
            particleSystemOptions: {
              maxParticles: 64 * 64,
              particleHeight: 100.0,
              fadeOpacity: 0.996,
              dropRate: 0.003,
              dropRateBump: 0.01,
              speedFactor: 1.0,
              lineWidth: 4.0
            }
          };
        },

        methods: {
          ready() {
            window.vm = this;
            this.loadNetCDF('https://zouyaoji.top/vue-cesium/SampleData/wind/demo.nc').then(data => {
              this.windData = data;
            });
          },

          unload() {
            this.$refs.wind.unload();
          },

          load() {
            this.$refs.wind.load();
          },

          reload() {
            this.$refs.wind.reload();
          },

          async loadNetCDF(filePath) {
            let _this = this;

            return new Promise(function (resolve) {
              var request = new XMLHttpRequest();
              request.open('GET', filePath);
              request.responseType = 'arraybuffer';

              request.onload = function () {
                var arrayToMap = function (array) {
                  return array.reduce(function (map, object) {
                    map[object.name] = object;
                    return map;
                  }, {});
                };

                var NetCDF = new netcdfjs(request.response);
                let data = {};
                var dimensions = arrayToMap(NetCDF.dimensions);
                data.dimensions = {};
                data.dimensions.lon = dimensions['lon'].size;
                data.dimensions.lat = dimensions['lat'].size;
                data.dimensions.lev = dimensions['lev'].size;
                var variables = arrayToMap(NetCDF.variables);
                var uAttributes = arrayToMap(variables['U'].attributes);
                var vAttributes = arrayToMap(variables['V'].attributes);
                data.lon = {};
                data.lon.array = new Float32Array(NetCDF.getDataVariable('lon').flat());
                data.lon.min = Math.min(...data.lon.array);
                data.lon.max = Math.max(...data.lon.array);
                data.lat = {};
                data.lat.array = new Float32Array(NetCDF.getDataVariable('lat').flat());
                data.lat.min = Math.min(...data.lat.array);
                data.lat.max = Math.max(...data.lat.array);
                data.lev = {};
                data.lev.array = new Float32Array(NetCDF.getDataVariable('lev').flat());
                data.lev.min = Math.min(...data.lev.array);
                data.lev.max = Math.max(...data.lev.array);
                data.U = {};
                data.U.array = new Float32Array(NetCDF.getDataVariable('U').flat());
                data.U.min = uAttributes['min'].value;
                data.U.max = uAttributes['max'].value;
                data.V = {};
                data.V.array = new Float32Array(NetCDF.getDataVariable('V').flat());
                data.V.min = vAttributes['min'].value;
                data.V.max = vAttributes['max'].value;
                resolve(data);
              };

              request.send();
            });
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
// CONCATENATED MODULE: ./website/docs/zh-CN/overlays/vc-overlay-windmap.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/overlays/vc-overlay-windmap.md



vc_overlay_windmapvue_type_script_lang_ts.render = vc_overlay_windmapvue_type_template_id_922599ce_render

/* harmony default export */ var vc_overlay_windmap = __webpack_exports__["default"] = (vc_overlay_windmapvue_type_script_lang_ts);

/***/ })

}]);