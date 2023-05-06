(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[182],{

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/controls/vc-overview-map.md?vue&type=template&id=2a82e6f2

const vc_overview_mapvue_type_template_id_2a82e6f2_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_overview_mapvue_type_template_id_2a82e6f2_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcOverviewMap ");

const vc_overview_mapvue_type_template_id_2a82e6f2_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "加载鹰眼图控件。", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("提示：3.0 版本对鹰眼图组件进行了重构，鹰眼图实质是另外一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("，所以鹰眼图中仍然能加 VueCesium 的各子组件。")])], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "鹰眼图组件的基础用法。", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overview-map"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上加载鹰眼图组件。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- 鹰眼图示例 1 -->\n    <vc-overview-map @ready=\"onOverviewReady\" ref=\"overview\" :offset=\"[5, 5]\" v-model=\"show\">\n      <vc-layer-imagery :sort-order=\"10\">\n        <vc-imagery-provider-amap map-style=\"7\" :projection-transforms=\"{ from: 'GCJ02', to: 'WGS84' }\"></vc-imagery-provider-amap>\n      </vc-layer-imagery>\n      <vc-entity>\n        <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n      </vc-entity>\n    </vc-overview-map>\n    <!-- 鹰眼图示例 2 -->\n    <vc-overview-map position=\"bottom-left\" width=\"300px\" height=\"300px\" :offset=\"[5, 5]\">\n      <vc-layer-imagery>\n        <vc-imagery-provider-osm></vc-imagery-provider-osm>\n      </vc-layer-imagery>\n      <vc-entity>\n        <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n      </vc-entity>\n    </vc-overview-map>\n\n    <vc-primitive-tileset url=\"https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json\"></vc-primitive-tileset>\n    <vc-layer-imagery :sort-order=\"10\">\n      <vc-imagery-provider-tianditu map-style=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n    <vc-entity\n      :billboard=\"billboard\"\n      :position=\"{lng: 108, lat: 32}\"\n      :point=\"point\"\n      :label=\"label\"\n      @click=\"onEntityEvt\"\n      @mouseover=\"onEntityEvt\"\n      @mouseout=\"onEntityEvt\"\n    >\n      <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n    </vc-entity>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        show: false,\n        point: {\n          pixelSize: 28,\n          color: 'red'\n        },\n        label: {\n          text: 'Hello World',\n          pixelOffset: [0, 80]\n        },\n        billboard: {\n          image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n          scale: 0.5\n        },\n        projectionTransforms: {\n          from: 'GCJ02',\n          to: 'WGS84'\n        },\n        centerRectColor: 'red'\n      }\n    },\n    methods: {\n      onOverviewReady({ cesiumObject }) {\n        console.log(cesiumObject)\n      },\n      onEntityEvt(e) {\n        console.log(e)\n        if (e.type === 'onmouseover') {\n          this.billboard = {\n            image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n            scale: 0.6\n          }\n        } else if (e.type === 'onmouseout') {\n          this.billboard = {\n            image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n            scale: 0.5\n          }\n        }\n      },\n      unload() {\n        this.$refs.overview.unload()\n      },\n      load() {\n        this.$refs.overview.load()\n      },\n      reload() {\n        this.$refs.overview.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>string</td><td><code>&#39;bottom-right&#39;</code></td><td><code>optional</code> 指定鹰眼组件位置。</td><td>top-right/top-left/bottom-right/bottom-left</td></tr><tr><td>offset</td><td>[number, number]</td><td><code>[0, 0]</code></td><td><code>optional</code> 指定鹰眼组件基于位置的偏移量。</td><td></td></tr><tr><td>width</td><td>string</td><td><code>&#39;150px&#39;</code></td><td><code>optional</code> 指定鹰眼组件宽度。</td><td></td></tr><tr><td>height</td><td>string</td><td><code>&#39;150px&#39;</code></td><td><code>optional</code> 指定鹰眼组件高度。</td><td></td></tr><tr><td>border</td><td>string</td><td><code>&#39;solid 4px rgb(255, 255, 255)&#39;</code></td><td><code>optional</code> 指定鹰眼组件边框。</td><td></td></tr><tr><td>borderRadius</td><td>string</td><td></td><td><code>optional</code> 指定鹰眼组件圆角。</td><td></td></tr><tr><td>toggleOpts</td><td>VcBtnTooltipProps</td><td><code>show: true, color: &#39;#fff&#39;, background: &#39;#3f4854&#39;, icon: &#39;vc-icons-overview-toggle&#39;, size: &#39;15px&#39;, tooltip: { delay: 500, anchor: &#39;bottom middle&#39;, offset: [0, 20], tip: void 0 } }</code></td><td><code>optional</code> 指定鹰眼组件切换按钮参数。</td><td></td></tr><tr><td>viewerOpts</td><td>VcViewerProps</td><td><code>{ removeCesiumScript: false, showCredit: false, sceneMode: 2 }</code></td><td><code>optional</code> 指定鹰眼组件中 vc-viewer 组件参数。</td><td></td></tr><tr><td>centerRectColor</td><td>VcColor</td><td><code>&#39;#ff000080&#39;</code></td><td><code>optional</code> 指定矩形颜色。</td><td></td></tr><tr><td>widthFactor</td><td>number</td><td><code>2</code></td><td><code>optional</code> 指定矩形宽度因子。</td><td></td></tr><tr><td>heightFactor</td><td>number</td><td><code>2</code></td><td><code>optional</code> 指定矩形高度因子。</td><td></td></tr><tr><td>modelValue</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定鹰眼是展开还是收拢。</td><td></td></tr></tbody></table><p>:::</p>", 2);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr></tbody></table>", 1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("方法 ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动加载组件。</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动重新加载组件。</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>手动卸载组件。</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>获取标志该组件是否创建成功的 Promise 对象。</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>获取该组件加载的 Cesium 对象。</td></tr></tbody></table>", 1);

function vc_overview_mapvue_type_template_id_2a82e6f2_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_overview_mapvue_type_template_id_2a82e6f2_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcoverviewmap",
    tabindex: "-1",
    content: "VcOverviewMap",
    href: "#vcoverviewmap",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overview_mapvue_type_template_id_2a82e6f2_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcoverviewmap"
    })]),
    _: 1
  }), vc_overview_mapvue_type_template_id_2a82e6f2_hoisted_3, _hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    tabindex: "-1",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-jian",
    tabindex: "-1",
    content: "事件",
    href: "#shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "fang-fa",
    tabindex: "-1",
    content: "方法",
    href: "#fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fang-fa"
    })]),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-overview-map.md?vue&type=template&id=2a82e6f2

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/controls/vc-overview-map.md?vue&type=script&lang=ts

/* harmony default export */ var vc_overview_mapvue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

      function render(_ctx, _cache) {
        const _component_vc_imagery_provider_amap = _resolveComponent("vc-imagery-provider-amap");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_graphics_rectangle = _resolveComponent("vc-graphics-rectangle");

        const _component_vc_entity = _resolveComponent("vc-entity");

        const _component_vc_overview_map = _resolveComponent("vc-overview-map");

        const _component_vc_imagery_provider_osm = _resolveComponent("vc-imagery-provider-osm");

        const _component_vc_primitive_tileset = _resolveComponent("vc-primitive-tileset");

        const _component_vc_imagery_provider_tianditu = _resolveComponent("vc-imagery-provider-tianditu");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_overview_map, {
              onReady: _ctx.onOverviewReady,
              ref: "overview",
              offset: [5, 5],
              modelValue: _ctx.show,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.show = $event)
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_layer_imagery, {
                "sort-order": 10
              }, {
                default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_amap, {
                  "map-style": "7",
                  "projection-transforms": {
                    from: 'GCJ02',
                    to: 'WGS84'
                  }
                })]),
                _: 1
              }), _createVNode(_component_vc_entity, null, {
                default: _withCtx(() => [_createVNode(_component_vc_graphics_rectangle, {
                  coordinates: [130, 20, 80, 25],
                  material: "green"
                })]),
                _: 1
              })]),
              _: 1
            }, 8, ["onReady", "modelValue"]), _createVNode(_component_vc_overview_map, {
              position: "bottom-left",
              width: "300px",
              height: "300px",
              offset: [5, 5]
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_layer_imagery, null, {
                default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_osm)]),
                _: 1
              }), _createVNode(_component_vc_entity, null, {
                default: _withCtx(() => [_createVNode(_component_vc_graphics_rectangle, {
                  coordinates: [130, 20, 80, 25],
                  material: "green"
                })]),
                _: 1
              })]),
              _: 1
            }), _createVNode(_component_vc_primitive_tileset, {
              url: "https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json"
            }), _createVNode(_component_vc_layer_imagery, {
              "sort-order": 10
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_tianditu, {
                "map-style": "img_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            }), _createVNode(_component_vc_entity, {
              billboard: _ctx.billboard,
              position: {
                lng: 108,
                lat: 32
              },
              point: _ctx.point,
              label: _ctx.label,
              onClick: _ctx.onEntityEvt,
              onMouseover: _ctx.onEntityEvt,
              onMouseout: _ctx.onEntityEvt
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_rectangle, {
                coordinates: [130, 20, 80, 25],
                material: "green"
              })]),
              _: 1
            }, 8, ["billboard", "point", "label", "onClick", "onMouseover", "onMouseout"])]),
            _: 1
          }), _createVNode(_component_el_row, {
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
            show: false,
            point: {
              pixelSize: 28,
              color: 'red'
            },
            label: {
              text: 'Hello World',
              pixelOffset: [0, 80]
            },
            billboard: {
              image: 'https://zouyaoji.top/vue-cesium/favicon.png',
              scale: 0.5
            },
            projectionTransforms: {
              from: 'GCJ02',
              to: 'WGS84'
            },
            centerRectColor: 'red'
          };
        },

        methods: {
          onOverviewReady(_ref) {
            let {
              cesiumObject
            } = _ref;
            console.log(cesiumObject);
          },

          onEntityEvt(e) {
            console.log(e);

            if (e.type === 'onmouseover') {
              this.billboard = {
                image: 'https://zouyaoji.top/vue-cesium/favicon.png',
                scale: 0.6
              };
            } else if (e.type === 'onmouseout') {
              this.billboard = {
                image: 'https://zouyaoji.top/vue-cesium/favicon.png',
                scale: 0.5
              };
            }
          },

          unload() {
            this.$refs.overview.unload();
          },

          load() {
            this.$refs.overview.load();
          },

          reload() {
            this.$refs.overview.reload();
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
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-overview-map.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-overview-map.md



vc_overview_mapvue_type_script_lang_ts.render = vc_overview_mapvue_type_template_id_2a82e6f2_render

/* harmony default export */ var vc_overview_map = __webpack_exports__["default"] = (vc_overview_mapvue_type_script_lang_ts);

/***/ })

}]);