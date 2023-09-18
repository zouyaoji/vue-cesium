(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/overlays/vc-overlay-typhoon.md?vue&type=template&id=31ef5900

const vc_overlay_typhoonvue_type_template_id_31ef5900_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_overlay_typhoonvue_type_template_id_31ef5900_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcOverlayTyphoon ");

const vc_overlay_typhoonvue_type_template_id_31ef5900_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Typhoon cover kit.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "Note:"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Style file need to be imported: "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "import 'vue-cesium/dist/index.css';")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of Typhoon Overlay Components.", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-typhoon"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add typhoon path on viewer.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-overlay-typhoon\n      v-if=\"typhoonRoutes.length\"\n      ref=\"typhoonRef\"\n      :typhoon-routes=\"typhoonRoutes\"\n      :point-props=\"pointProps\"\n      :line-primitive-props=\"linePrimitiveProps\"\n      :label-props=\"labelProps\"\n      @ready=\"onTyphoonReady\"\n      @forecastRouteAdded=\"onForecastRouteAdded\"\n    >\n    </vc-overlay-typhoon>\n    <vc-layer-imagery :sort-order=\"20\">\n      <vc-imagery-provider-tianditu map-style=\"cva_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n    <vc-layer-imagery :sort-order=\"10\">\n      <vc-imagery-provider-tianditu map-style=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        typhoonRoutes: []\n      }\n    },\n    mounted() {},\n    methods: {\n      onViewerReady() {\n        Cesium.Resource.fetchJson({\n          url: 'https://zouyaoji.top/vue-cesium/SampleData/typhoon/202209.json'\n        }).then(res => {\n          this.typhoonRoutes = res\n        })\n      },\n      onTyphoonReady() {\n        // this.$refs.typhoonRef.flyToTyphoonRoute('202209')\n      },\n      onForecastRouteAdded(e) {\n        this.$refs.typhoonRef.flyToTyphoonRoute('202209')\n      },\n      pointProps(point) {\n        const colorDict = {\n          '热带低压(TD)': '#30fc31',\n          '热带风暴(TS)': '#307efa',\n          '强热带风暴(STS)': '#fffc00',\n          '台风(TY)': '#ff9c00',\n          '强台风(STY)': '#fb7cff',\n          '超强台风(SuperTY)': '#fa3030'\n        }\n\n        return {\n          color: colorDict[point.strong] || '#409eff',\n          pixelSize: 8,\n          outlineColor: 'rgba(0,0,0,0.6)',\n          outlineWidth: 2\n        }\n      },\n      linePrimitiveProps(typhoonDatasource) {\n        const forcColorDict = {\n          中国香港: '#f5000e',\n          日本: '#0000ff',\n          中央: '#ff0000',\n          美国: '#000000',\n          韩国: '#41c1f6',\n          广州: '#ede12c',\n          上海: '#cdf3dd',\n          福州: '#c7c7c7',\n          新德里: '#345cdc',\n          乌兰巴托: '#12a3dd',\n          莫斯科: '#4fea03',\n          河内: '#41c1fd',\n          曼谷: '#ddc1f6',\n          英国: '#E1DB1A'\n        }\n        return {\n          appearance: {\n            type: typhoonDatasource.type === 'live' ? 'PolylineColorAppearance' : 'PolylineMaterialAppearance',\n            options: {\n              material:\n                typhoonDatasource.type === 'live'\n                  ? undefined\n                  : {\n                      fabric: {\n                        type: 'PolylineDash',\n                        uniforms: {\n                          color: forcColorDict[typhoonDatasource.typhoonRoute.sets] || '#000000'\n                        }\n                      }\n                    },\n              translucent: true\n            }\n          }\n        }\n      },\n      labelProps(typhoonDatasource) {\n        return {\n          text: typhoonDatasource.typhoonRoute.name\n        }\n      },\n      unload() {\n        this.$refs.typhoonRef.unload()\n      },\n      load() {\n        this.$refs.typhoonRef.load()\n      },\n      reload() {\n        this.$refs.typhoonRef.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>typhoonRoutes</td><td>VcTyphoonRoute[]</td><td></td><td><code>required</code> Specify the routes of typhoon.</td></tr><tr><td>clampToGround</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> Specify whether the route object is attached to the ground or 3dtiles.</td></tr><tr><td>radius7Color</td><td>VcColor</td><td><code>rgba(68, 255, 230, 0.3)</code></td><td><code>optional</code> Specify the color of radius7.</td></tr><tr><td>radius10Color</td><td>VcColor</td><td><code>rgba(32, 237, 39, 0.3)</code></td><td><code>optional</code> Specify the color of radius10.</td></tr><tr><td>radius12Color</td><td>VcColor</td><td><code>rgba(255, 247, 16, 0.3)</code></td><td><code>optional</code> Specify the color of radius12.</td></tr><tr><td>pointProps</td><td>VcPointProps | ((e: VcTyphoonPoint) =&gt; VcPointProps)</td><td></td><td><code>optional</code> Specify the props of point.</td></tr><tr><td>linePrimitiveProps</td><td>VcPrimitiveProps | ((e: VcTyphoonDatasource) =&gt; VcPrimitiveProps)</td><td></td><td><code>optional</code> Specify the props of line primitive.</td></tr><tr><td>lineGeometryProps</td><td>VcGeometryPolylineProps | ((e: VcTyphoonDatasource) =&gt; VcGeometryPolylineProps)</td><td></td><td><code>optional</code> Specify the props of line geometry.</td></tr><tr><td>labelProps</td><td>VcLabelProps | ((e: VcTyphoonDatasource) =&gt; VcLabelProps)</td><td></td><td><code>optional</code> Specify the props of typhoon name label.</td></tr><tr><td>circleOverlayPosition</td><td>string | ((e: VcTyphoonPoint) =&gt; string)</td><td></td><td><code>optional</code> Specify the position of the background map of the typhoon wind circle.</td></tr><tr><td>setsArray</td><td>string[]</td><td></td><td><code>optional</code> Specify the forecasting agency.</td></tr></tbody></table>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>unready</td><td>(error: any)</td><td>Triggers when the cesiumObject is failed to load.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves over to the typhoon object.</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves out to the typhoon object.</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks on the typhoon object.</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks outside the typhoon object.</td></tr><tr><td>forecastRouteAdded</td><td>(evt: { livePoint: VcTyphoonPoint; datasource: VcTyphoonDatasource; addedByClick: boolean })</td><td>Triggers when the forecast route is added.</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Methods ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Load components manually.</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Reload components manually.</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>Destroy the loaded component manually.</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>Get the creatingPromise.</td></tr><tr><td>addTyphoonRoute</td><td>(typhoonRoute: VcTyphoonRoute) =&gt; VcTyphoonDatasource</td><td>Add typhoon track data.</td></tr><tr><td>playTyphoonRoute</td><td>(tfbh: string) =&gt; void</td><td>Play typhoon route data.</td></tr><tr><td>flyToTyphoonRoute</td><td>(tfbhs: string | string[]) =&gt; void</td><td>Fly to typhoon route data.</td></tr><tr><td>showForecast</td><td>(livePoint: VcTyphoonPoint, datasource: VcTyphoonDatasource, index?: number, fromClick?: boolean) =&gt; void</td><td>Shows the forecast typhoon track of the live point.</td></tr><tr><td>removeTyphoonData</td><td>(datasource: VcTyphoonDatasource) =&gt; void</td><td>Remove typhoon track data.</td></tr><tr><td>removeAllTyphoonData</td><td>() =&gt; void</td><td>Remove all typhoon track data.</td></tr><tr><td>getTyphoonDatasources</td><td>() =&gt; VcTyphoonDatasource[]</td><td>Get all typhoon track data.</td></tr></tbody></table>", 1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("wztf");

function vc_overlay_typhoonvue_type_template_id_31ef5900_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_overlay_typhoonvue_type_template_id_31ef5900_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcoverlaytyphoon",
    tabindex: "-1",
    content: "VcOverlayTyphoon",
    href: "#vcoverlaytyphoon",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_typhoonvue_type_template_id_31ef5900_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcoverlaytyphoon"
    })]),
    _: 1
  }), vc_overlay_typhoonvue_type_template_id_31ef5900_hoisted_3, _hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "methods",
    tabindex: "-1",
    content: "Methods",
    href: "#methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#methods"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "http://www.wztf121.com/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_16]),
    _: 1
  })])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/overlays/vc-overlay-typhoon.md?vue&type=template&id=31ef5900

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/overlays/vc-overlay-typhoon.md?vue&type=script&lang=ts

/* harmony default export */ var vc_overlay_typhoonvue_type_script_lang_ts = ({
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
        createElementBlock: _createElementBlock
      } = vue_esm_browser;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        const _component_vc_overlay_typhoon = _resolveComponent("vc-overlay-typhoon");

        const _component_vc_imagery_provider_tianditu = _resolveComponent("vc-imagery-provider-tianditu");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.onViewerReady
          }, {
            default: _withCtx(() => [_ctx.typhoonRoutes.length ? (_openBlock(), _createBlock(_component_vc_overlay_typhoon, {
              key: 0,
              ref: "typhoonRef",
              "typhoon-routes": _ctx.typhoonRoutes,
              "point-props": _ctx.pointProps,
              "line-primitive-props": _ctx.linePrimitiveProps,
              "label-props": _ctx.labelProps,
              onReady: _ctx.onTyphoonReady,
              onForecastRouteAdded: _ctx.onForecastRouteAdded
            }, null, 8, ["typhoon-routes", "point-props", "line-primitive-props", "label-props", "onReady", "onForecastRouteAdded"])) : _createCommentVNode("", true), _createVNode(_component_vc_layer_imagery, {
              "sort-order": 20
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_tianditu, {
                "map-style": "cva_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            }), _createVNode(_component_vc_layer_imagery, {
              "sort-order": 10
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_tianditu, {
                "map-style": "img_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            })]),
            _: 1
          }, 8, ["onReady"]), _createVNode(_component_el_row, {
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

      const democomponentExport = {
        data() {
          return {
            typhoonRoutes: []
          };
        },

        mounted() {},

        methods: {
          onViewerReady() {
            Cesium.Resource.fetchJson({
              url: 'https://zouyaoji.top/vue-cesium/SampleData/typhoon/202209.json'
            }).then(res => {
              this.typhoonRoutes = res;
            });
          },

          onTyphoonReady() {// this.$refs.typhoonRef.flyToTyphoonRoute('202209')
          },

          onForecastRouteAdded(e) {
            this.$refs.typhoonRef.flyToTyphoonRoute('202209');
          },

          pointProps(point) {
            const colorDict = {
              '热带低压(TD)': '#30fc31',
              '热带风暴(TS)': '#307efa',
              '强热带风暴(STS)': '#fffc00',
              '台风(TY)': '#ff9c00',
              '强台风(STY)': '#fb7cff',
              '超强台风(SuperTY)': '#fa3030'
            };
            return {
              color: colorDict[point.strong] || '#409eff',
              pixelSize: 8,
              outlineColor: 'rgba(0,0,0,0.6)',
              outlineWidth: 2
            };
          },

          linePrimitiveProps(typhoonDatasource) {
            const forcColorDict = {
              中国香港: '#f5000e',
              日本: '#0000ff',
              中央: '#ff0000',
              美国: '#000000',
              韩国: '#41c1f6',
              广州: '#ede12c',
              上海: '#cdf3dd',
              福州: '#c7c7c7',
              新德里: '#345cdc',
              乌兰巴托: '#12a3dd',
              莫斯科: '#4fea03',
              河内: '#41c1fd',
              曼谷: '#ddc1f6',
              英国: '#E1DB1A'
            };
            return {
              appearance: {
                type: typhoonDatasource.type === 'live' ? 'PolylineColorAppearance' : 'PolylineMaterialAppearance',
                options: {
                  material: typhoonDatasource.type === 'live' ? undefined : {
                    fabric: {
                      type: 'PolylineDash',
                      uniforms: {
                        color: forcColorDict[typhoonDatasource.typhoonRoute.sets] || '#000000'
                      }
                    }
                  },
                  translucent: true
                }
              }
            };
          },

          labelProps(typhoonDatasource) {
            return {
              text: typhoonDatasource.typhoonRoute.name
            };
          },

          unload() {
            this.$refs.typhoonRef.unload();
          },

          load() {
            this.$refs.typhoonRef.load();
          },

          reload() {
            this.$refs.typhoonRef.reload();
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
// CONCATENATED MODULE: ./website/docs/en-US/overlays/vc-overlay-typhoon.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/overlays/vc-overlay-typhoon.md



vc_overlay_typhoonvue_type_script_lang_ts.render = vc_overlay_typhoonvue_type_template_id_31ef5900_render

/* harmony default export */ var vc_overlay_typhoon = __webpack_exports__["default"] = (vc_overlay_typhoonvue_type_script_lang_ts);

/***/ })

}]);