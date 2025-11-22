(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[196],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.26.10_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/controls/vc-selection-indicator.md?vue&type=template&id=b561d702

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};
const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "加载自定义选择器组件，替换 Cesium 自带的 selectionIndicator。", -1);
const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 如果是拾取到的对象是 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium3DTileFeature"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指示器的位置是该对象的包围盒的中心点。如果是手工模型并且想要更精准的位置请在建筑属性字段用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "position"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 属性描述该要素的位置信息，如 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "'[108, 32]'"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 。")], -1);
const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "选择器组件的基础用法。", -1);
const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-selection-indicator"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加选择器组件。")])], -1);
const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer :selection-indicator=\"true\" :info-box=\"true\">\n    <vc-selection-indicator ref=\"selectionIndicator\" @pick-evt=\"pickEvt\"></vc-selection-indicator>\n    <vc-terrain-provider-cesium></vc-terrain-provider-cesium>\n    <vc-entity ref=\"entity\" :billboard=\"billboard\" :position=\"{lng: 98, lat: 28.4}\" :point=\"point\" :label=\"label\">\n      <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n    </vc-entity>\n    <vc-layer-imagery :sort-order=\"10\">\n      <vc-imagery-provider-tianditu map-style=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n    <vc-layer-imagery vcId=\"testId\">\n      <vc-imagery-provider-wms\n        ref=\"provider\"\n        url=\"https://nationalmap.gov.au/proxy/http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows\"\n        layers=\"Hydrography:bores\"\n        :parameters=\"{transparent: true, format: 'image/png'}\"\n      ></vc-imagery-provider-wms>\n    </vc-layer-imagery>\n    <vc-layer-imagery vcId=\"testId2\">\n      <vc-imagery-provider-wms\n        ref=\"provider\"\n        url=\"https://nationalmap.gov.au/proxy/http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows\"\n        layers=\"Hydrography:bores\"\n        :parameters=\"{transparent: true, format: 'image/png'}\"\n      ></vc-imagery-provider-wms>\n    </vc-layer-imagery>\n    <vc-primitive-tileset url=\"https://resource.dvgis.cn/data/3dtiles/ljz/tileset.json\"> </vc-primitive-tileset>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    <el-button type=\"danger\" round @click=\"clear\">清除</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        point: {\n          pixelSize: 28,\n          color: 'red',\n          heightReference: 1\n        },\n        label: {\n          text: 'Hello World',\n          pixelOffset: [0, 80]\n        },\n        billboard: {\n          image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n          scale: 0.2,\n          heightReference: 1\n        }\n      }\n    },\n    methods: {\n      clear() {\n        this.$refs.selectionIndicator.selectedFeature.value = undefined\n      },\n      pickEvt(e) {\n        console.log(e)\n      },\n      unload() {\n        this.$refs.selectionIndicator.unload()\n      },\n      load() {\n        this.$refs.selectionIndicator.load()\n      },\n      reload() {\n        this.$refs.selectionIndicator.reload()\n      }\n    }\n  }\n</script>\n")], -1);
const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定选择指示器是否可见。</td></tr><tr><td>width</td><td>number</td><td><code>50</code></td><td><code>optional</code> 指定选择指示器宽度。</td></tr><tr><td>height</td><td>number</td><td><code>50</code></td><td><code>optional</code> 指定选择指示器高度。</td></tr><tr><td>allowFeatureInfoRequests</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否异步请求该点射线相交影像图层属性。</td></tr><tr><td>limit</td><td>number</td><td><code>25</code></td><td><code>optional</code> 指定最大拾取对象数量。</td></tr><tr><td>includeImageryIds</td><td>string[]</td><td></td><td><code>optional</code> 指定拾取影像要素时包含的 vcId 数组。</td></tr><tr><td>excludeImageryIds</td><td>string[]</td><td><code>[]</code></td><td><code>optional</code> 指定拾取影像要素时排除的 vcId 数组。</td></tr></tbody></table>", 1);
const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>组件加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>组件加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>组件销毁时触发。</td></tr><tr><td>pickEvt</td><td>selectedFeature</td><td>拾取时触发。</td></tr></tbody></table>", 1);
const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动加载组件。</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动重新加载组件。</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>手动卸载组件。</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>获取标志该组件是否创建成功的 Promise 对象。</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>获取该组件加载的 Cesium 对象。</td></tr><tr><td>computeScreenSpacePosition</td><td>() =&gt; Cesium.Cartesian2</td><td>计算屏幕位置。</td></tr><tr><td>update</td><td>() =&gt; void</td><td>更新指示器位置。</td></tr><tr><td>animateAppear</td><td>() =&gt; void</td><td>显示指示器。</td></tr><tr><td>animateDepart</td><td>() =&gt; void</td><td>隐藏指示器。</td></tr><tr><td>getPickedFeatures</td><td>() =&gt; PickedFeatures</td><td>获取拾取对象集合。</td></tr></tbody></table>", 1);
const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "名称"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "描述")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "position: Cesium.Cartesian3"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "获取或者设置选择指示器的位置。")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "selectedFeature:Feature | Cesium.Entity"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "获取或者设置选中对象。")])])], -1);
function vc_selection_indicatorvue_type_template_id_b561d702_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");
  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");
  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");
  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");
  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcselectionindicator",
    tabindex: "-1",
    content: "VcSelectionIndicator",
    href: "#vcselectionindicator",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcSelectionIndicator "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcselectionindicator"
    })]),
    _: 1
  }), _hoisted_2, _hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("基础用法 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), _hoisted_4, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    tabindex: "-1",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("属性 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-jian",
    tabindex: "-1",
    content: "事件",
    href: "#shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("事件 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "fang-fa",
    tabindex: "-1",
    content: "方法",
    href: "#fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("方法 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fang-fa"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "cheng-yuan",
    tabindex: "-1",
    content: "成员",
    href: "#cheng-yuan",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("成员 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cheng-yuan"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-selection-indicator.md?vue&type=template&id=b561d702

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.26.10_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/controls/vc-selection-indicator.md?vue&type=script&lang=ts

/* harmony default export */ var vc_selection_indicatorvue_type_script_lang_ts = ({
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
      function render(_ctx, _cache) {
        const _component_vc_selection_indicator = _resolveComponent("vc-selection-indicator");
        const _component_vc_terrain_provider_cesium = _resolveComponent("vc-terrain-provider-cesium");
        const _component_vc_graphics_rectangle = _resolveComponent("vc-graphics-rectangle");
        const _component_vc_entity = _resolveComponent("vc-entity");
        const _component_vc_imagery_provider_tianditu = _resolveComponent("vc-imagery-provider-tianditu");
        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");
        const _component_vc_imagery_provider_wms = _resolveComponent("vc-imagery-provider-wms");
        const _component_vc_primitive_tileset = _resolveComponent("vc-primitive-tileset");
        const _component_vc_viewer = _resolveComponent("vc-viewer");
        const _component_el_button = _resolveComponent("el-button");
        const _component_el_row = _resolveComponent("el-row");
        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            "selection-indicator": true,
            "info-box": true
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_selection_indicator, {
              ref: "selectionIndicator",
              onPickEvt: _ctx.pickEvt
            }, null, 8, ["onPickEvt"]), _createVNode(_component_vc_terrain_provider_cesium), _createVNode(_component_vc_entity, {
              ref: "entity",
              billboard: _ctx.billboard,
              position: {
                lng: 98,
                lat: 28.4
              },
              point: _ctx.point,
              label: _ctx.label
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_rectangle, {
                coordinates: [130, 20, 80, 25],
                material: "green"
              })]),
              _: 1
            }, 8, ["billboard", "position", "point", "label"]), _createVNode(_component_vc_layer_imagery, {
              "sort-order": 10
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_tianditu, {
                "map-style": "img_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            }), _createVNode(_component_vc_layer_imagery, {
              vcId: "testId"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_wms, {
                ref: "provider",
                url: "https://nationalmap.gov.au/proxy/http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows",
                layers: "Hydrography:bores",
                parameters: {
                  transparent: true,
                  format: 'image/png'
                }
              }, null, 512)]),
              _: 1
            }), _createVNode(_component_vc_layer_imagery, {
              vcId: "testId2"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_wms, {
                ref: "provider",
                url: "https://nationalmap.gov.au/proxy/http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows",
                layers: "Hydrography:bores",
                parameters: {
                  transparent: true,
                  format: 'image/png'
                }
              }, null, 512)]),
              _: 1
            }), _createVNode(_component_vc_primitive_tileset, {
              url: "https://resource.dvgis.cn/data/3dtiles/ljz/tileset.json"
            })]),
            _: 1
          }), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_createTextVNode("销毁")]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_createTextVNode("加载")]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_createTextVNode("重载")]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.clear
            }, {
              default: _withCtx(() => [_createTextVNode("清除")]),
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
            point: {
              pixelSize: 28,
              color: 'red',
              heightReference: 1
            },
            label: {
              text: 'Hello World',
              pixelOffset: [0, 80]
            },
            billboard: {
              image: 'https://zouyaoji.top/vue-cesium/favicon.png',
              scale: 0.2,
              heightReference: 1
            }
          };
        },
        methods: {
          clear() {
            this.$refs.selectionIndicator.selectedFeature.value = undefined;
          },
          pickEvt(e) {
            console.log(e);
          },
          unload() {
            this.$refs.selectionIndicator.unload();
          },
          load() {
            this.$refs.selectionIndicator.load();
          },
          reload() {
            this.$refs.selectionIndicator.reload();
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
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-selection-indicator.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-selection-indicator.md



vc_selection_indicatorvue_type_script_lang_ts.render = vc_selection_indicatorvue_type_template_id_b561d702_render

/* harmony default export */ var vc_selection_indicator = __webpack_exports__["default"] = (vc_selection_indicatorvue_type_script_lang_ts);

/***/ })

}]);