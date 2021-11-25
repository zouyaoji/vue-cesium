(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/overlays/vc-overlay-echart.md?vue&type=template&id=5a6fea25

const vc_overlay_echartvue_type_template_id_5a6fea25_hoisted_1 = {
  class: "content element-doc"
};

const vc_overlay_echartvue_type_template_id_5a6fea25_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcoverlayechart\"><a class=\"header-anchor\" href=\"#vcoverlayechart\">¶</a> VcOverlayEchart</h2><p>Load the Echart overlay according to the Cesium coordinate system.</p><p><strong>Note:</strong> This component depends on echart, it is not loaded by default and needs to be registered separately:</p><pre><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;vue-cesium/default/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> { <span class=\"hljs-title class_\">VcOverlayEchart</span> } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\napp.<span class=\"hljs-title function_\">use</span>(<span class=\"hljs-title class_\">VcOverlayEchart</span>)\n</code></pre><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of VcOverlayEchart component.</p>", 6);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-echart"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add a chart overlay to the viewer.")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer :camera=\"camera\">\n    <vc-overlay-echart ref=\"echartOverlay\" :options=\"options\"> </vc-overlay-echart>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref } from 'vue'\n  export default {\n    setup() {\n      const camera = ref({\n        position: [107.033, 26.976, 5725046.53],\n        heading: 14,\n        pitch: -79,\n        roll: 0.06\n      })\n      const echartOverlay = ref(null)\n      const datas = [\n        {\n          level: 1,\n          name: 'Beijing',\n          label: 'beijing',\n          value: [116.4551, 40.2539],\n          symbol: '',\n          symbolSize: [30, 30]\n        },\n        {\n          level: 1,\n          symbol: '',\n          name: 'Langfang',\n          label: 'langfang',\n          category: 0,\n          active: !0,\n          speed: 6,\n          value: [116.521, 39.0509],\n          belong: 'Beijing'\n        },\n        {\n          level: 1,\n          symbol: '',\n          name: 'Urumqi',\n          category: 0,\n          active: !0,\n          speed: 6,\n          value: [87.9236, 43.5883],\n          belong: 'Beijing'\n        },\n        {\n          level: 1,\n          symbol: '',\n          name: 'Lanzhou',\n          category: 0,\n          active: !0,\n          speed: 6,\n          value: [103.5901, 36.3043],\n          belong: 'Beijing'\n        },\n        {\n          level: 1,\n          symbol: '',\n          name: 'Hangzhou',\n          category: 0,\n          active: !0,\n          speed: 6,\n          value: [119.5313, 29.8773],\n          belong: 'Beijing'\n        },\n        {\n          level: 1,\n          symbol: '',\n          name: 'Sichuan',\n          category: 0,\n          active: !0,\n          speed: 6,\n          value: [103.9526, 30.7617],\n          belong: 'Beijing'\n        },\n        {\n          level: 2,\n          symbol: '',\n          name: 'Chongqing',\n          category: 0,\n          active: !0,\n          speed: 6,\n          value: [107.7539, 30.1904],\n          belong: 'Chongqing'\n        },\n        {\n          level: 1,\n          symbol: '',\n          name: 'Xiamen',\n          category: 0,\n          active: !0,\n          speed: 6,\n          value: [118.1689, 24.6478],\n          belong: 'Beijing'\n        },\n        {\n          level: 1,\n          symbol: '',\n          name: 'Baotou',\n          category: 0,\n          active: !0,\n          speed: 6,\n          value: [110.3467, 41.4899],\n          belong: 'Beijing'\n        },\n        {\n          level: 1,\n          symbol: '',\n          name: 'Wenzhou',\n          category: 0,\n          active: !0,\n          speed: 6,\n          value: [120.498, 27.8119],\n          belong: 'Hangzhou'\n        },\n        {\n          level: 2,\n          symbol: '',\n          name: 'Zhoushan',\n          category: 0,\n          active: !0,\n          speed: 6,\n          value: [122.2559, 30.2234],\n          belong: 'Hangzhou'\n        }\n      ]\n\n      const lineColors = ['#fff', '#f6fb05', '#00fcff']\n      const stationSymbols = ['image://./images/station-blue.png', 'image://./images/station-yellow.png']\n      const lineSymbols = ['image://./images/symbol-white.png', 'image://./images/symbol-yellow.png']\n      datas.forEach(data => {\n        data.symbol = stationSymbols[data.level - 1]\n      })\n\n      const arrs = [[], [], []]\n\n      datas.forEach(data => {\n        if (data.belong) {\n          const belongs = Array.isArray(data.belong) ? data.belong : [data.belong]\n          belongs.forEach(belong => {\n            datas.forEach(item => {\n              if (belong === item.name) {\n                arrs[data.level - 1].push([\n                  {\n                    coord: item.value\n                  },\n                  {\n                    coord: data.value\n                  }\n                ])\n              }\n            })\n          })\n        }\n      })\n\n      const seriesEffectScatter = [\n        {\n          type: 'effectScatter',\n          coordinateSystem: 'cesium',\n          symbolSize: [20, 20],\n          symbolOffset: [0, -10],\n          z: 3,\n          circular: { rotateLabel: !0 },\n          label: {\n            normal: {\n              show: !0,\n              position: 'right',\n              formatter: '{b}',\n              fontSize: 24,\n              color: '#fff',\n              textBorderColor: '#2aa4e8',\n              textBorderWidth: 2,\n              offset: [0, 20]\n            }\n          },\n          itemStyle: { normal: { shadowColor: 'none' } },\n          data: datas\n        }\n      ]\n      const seriesLines = []\n      arrs.forEach((arr, index) => {\n        console.log(arr)\n        seriesLines.push({\n          name: '',\n          type: 'lines',\n          coordinateSystem: 'cesium',\n          z: 1,\n          effect: {\n            show: !0,\n            smooth: !1,\n            trailLength: 0,\n            symbol: lineSymbols[index],\n            symbolSize: [10, 30],\n            period: 4\n          },\n          lineStyle: { width: 2, color: lineColors[index], curveness: -0.2 },\n          data: arr\n        })\n      })\n\n      const options = { animation: !1, series: [...seriesEffectScatter, ...seriesLines] }\n      const unload = () => {\n        echartOverlay.value.unload()\n      }\n      const load = () => {\n        echartOverlay.value.load()\n      }\n      const reload = () => {\n        echartOverlay.value.reload()\n      }\n      return {\n        camera,\n        options,\n        unload,\n        load,\n        reload,\n        echartOverlay\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>options</td><td>Object</td><td></td><td><code>required</code> Specify the configuration items of the Echart.</td><td></td></tr><tr><td>autoHidden</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether Echart elements are automatically hidden when they are on the back of the viewer.</td><td></td></tr><tr><td>coordinateSystem</td><td>String</td><td><code>&#39;cesium&#39;</code></td><td><code>optional</code> Specify the name of the custom coordinate system when Echart is initialized.</td><td></td></tr><tr><td>customClass</td><td>String</td><td></td><td><code>optional</code> Specify div class of echart.</td><td></td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table>", 4);

function vc_overlay_echartvue_type_template_id_5a6fea25_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_overlay_echartvue_type_template_id_5a6fea25_hoisted_1, [vc_overlay_echartvue_type_template_id_5a6fea25_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/overlays/vc-overlay-echart.md?vue&type=template&id=5a6fea25

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/overlays/vc-overlay-echart.md?vue&type=script&lang=ts

/* harmony default export */ var vc_overlay_echartvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        const _component_vc_overlay_echart = _resolveComponent("vc-overlay-echart");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            camera: _ctx.camera
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_overlay_echart, {
              ref: "echartOverlay",
              options: _ctx.options
            }, null, 8, ["options"])]),
            _: 1
          }, 8, ["camera"]), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }, 8, ["onClick"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const {
        ref
      } = vue_esm_browser;
      const democomponentExport = {
        setup() {
          const camera = ref({
            position: [107.033, 26.976, 5725046.53],
            heading: 14,
            pitch: -79,
            roll: 0.06
          });
          const echartOverlay = ref(null);
          const datas = [{
            level: 1,
            name: 'Beijing',
            label: 'beijing',
            value: [116.4551, 40.2539],
            symbol: '',
            symbolSize: [30, 30]
          }, {
            level: 1,
            symbol: '',
            name: 'Langfang',
            label: 'langfang',
            category: 0,
            active: !0,
            speed: 6,
            value: [116.521, 39.0509],
            belong: 'Beijing'
          }, {
            level: 1,
            symbol: '',
            name: 'Urumqi',
            category: 0,
            active: !0,
            speed: 6,
            value: [87.9236, 43.5883],
            belong: 'Beijing'
          }, {
            level: 1,
            symbol: '',
            name: 'Lanzhou',
            category: 0,
            active: !0,
            speed: 6,
            value: [103.5901, 36.3043],
            belong: 'Beijing'
          }, {
            level: 1,
            symbol: '',
            name: 'Hangzhou',
            category: 0,
            active: !0,
            speed: 6,
            value: [119.5313, 29.8773],
            belong: 'Beijing'
          }, {
            level: 1,
            symbol: '',
            name: 'Sichuan',
            category: 0,
            active: !0,
            speed: 6,
            value: [103.9526, 30.7617],
            belong: 'Beijing'
          }, {
            level: 2,
            symbol: '',
            name: 'Chongqing',
            category: 0,
            active: !0,
            speed: 6,
            value: [107.7539, 30.1904],
            belong: 'Chongqing'
          }, {
            level: 1,
            symbol: '',
            name: 'Xiamen',
            category: 0,
            active: !0,
            speed: 6,
            value: [118.1689, 24.6478],
            belong: 'Beijing'
          }, {
            level: 1,
            symbol: '',
            name: 'Baotou',
            category: 0,
            active: !0,
            speed: 6,
            value: [110.3467, 41.4899],
            belong: 'Beijing'
          }, {
            level: 1,
            symbol: '',
            name: 'Wenzhou',
            category: 0,
            active: !0,
            speed: 6,
            value: [120.498, 27.8119],
            belong: 'Hangzhou'
          }, {
            level: 2,
            symbol: '',
            name: 'Zhoushan',
            category: 0,
            active: !0,
            speed: 6,
            value: [122.2559, 30.2234],
            belong: 'Hangzhou'
          }];
          const lineColors = ['#fff', '#f6fb05', '#00fcff'];
          const stationSymbols = ['image://./images/station-blue.png', 'image://./images/station-yellow.png'];
          const lineSymbols = ['image://./images/symbol-white.png', 'image://./images/symbol-yellow.png'];
          datas.forEach(data => {
            data.symbol = stationSymbols[data.level - 1];
          });
          const arrs = [[], [], []];
          datas.forEach(data => {
            if (data.belong) {
              const belongs = Array.isArray(data.belong) ? data.belong : [data.belong];
              belongs.forEach(belong => {
                datas.forEach(item => {
                  if (belong === item.name) {
                    arrs[data.level - 1].push([{
                      coord: item.value
                    }, {
                      coord: data.value
                    }]);
                  }
                });
              });
            }
          });
          const seriesEffectScatter = [{
            type: 'effectScatter',
            coordinateSystem: 'cesium',
            symbolSize: [20, 20],
            symbolOffset: [0, -10],
            z: 3,
            circular: {
              rotateLabel: !0
            },
            label: {
              normal: {
                show: !0,
                position: 'right',
                formatter: '{b}',
                fontSize: 24,
                color: '#fff',
                textBorderColor: '#2aa4e8',
                textBorderWidth: 2,
                offset: [0, 20]
              }
            },
            itemStyle: {
              normal: {
                shadowColor: 'none'
              }
            },
            data: datas
          }];
          const seriesLines = [];
          arrs.forEach((arr, index) => {
            console.log(arr);
            seriesLines.push({
              name: '',
              type: 'lines',
              coordinateSystem: 'cesium',
              z: 1,
              effect: {
                show: !0,
                smooth: !1,
                trailLength: 0,
                symbol: lineSymbols[index],
                symbolSize: [10, 30],
                period: 4
              },
              lineStyle: {
                width: 2,
                color: lineColors[index],
                curveness: -0.2
              },
              data: arr
            });
          });
          const options = {
            animation: !1,
            series: [...seriesEffectScatter, ...seriesLines]
          };

          const unload = () => {
            echartOverlay.value.unload();
          };

          const load = () => {
            echartOverlay.value.load();
          };

          const reload = () => {
            echartOverlay.value.reload();
          };

          return {
            camera,
            options,
            unload,
            load,
            reload,
            echartOverlay
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
// CONCATENATED MODULE: ./website/docs/en-US/overlays/vc-overlay-echart.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/overlays/vc-overlay-echart.md



vc_overlay_echartvue_type_script_lang_ts.render = vc_overlay_echartvue_type_template_id_5a6fea25_render

/* harmony default export */ var vc_overlay_echart = __webpack_exports__["default"] = (vc_overlay_echartvue_type_script_lang_ts);

/***/ })

}]);