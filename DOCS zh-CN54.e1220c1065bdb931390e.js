(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[149],{

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/overlays/vc-overlay-heatmap.md?vue&type=template&id=e8adcf84

const vc_overlay_heatmapvue_type_template_id_e8adcf84_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_overlay_heatmapvue_type_template_id_e8adcf84_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcOverlayHeatmap ");

const vc_overlay_heatmapvue_type_template_id_e8adcf84_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "加载热力图覆盖物。", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "基于 heatmapjs 实现。", -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "热力图覆盖物组件的基础用法。", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-heatmap"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加热力图。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"ready\" sceneModePicker>\n    <vc-overlay-heatmap\n      v-if=\"data.length\"\n      ref=\"heatmap\"\n      :data=\"data\"\n      :rectangle=\"rectangle\"\n      :max=\"max\"\n      :min=\"min\"\n      :show=\"show\"\n      :options=\"options\"\n      @ready=\"onHeatmapReady\"\n      type=\"primitive\"\n      :segments=\"segments\"\n    >\n    </vc-overlay-heatmap>\n    <vc-layer-imagery :sort-order=\"20\">\n      <vc-imagery-provider-tianditu map-style=\"cva_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n    <vc-layer-imagery :sort-order=\"10\">\n      <vc-imagery-provider-tianditu map-style=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n    <vc-datasource-geojson data=\"https://zouyaoji.top/vue-cesium/SampleData/geojson/wuhou.json\" stroke=\"red\"></vc-datasource-geojson>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        show: true,\n        data: [],\n        max: 346.05413818359375,\n        min: 0.5259535908699036,\n        rectangle: [0, 0, 0, 0],\n        segments: [\n          [10, '#4A90C3'],\n          [20, '#81AAAC'],\n          [40, '#B2C899'],\n          [60, '#E5EA84'],\n          [100, '#F8DE6D'],\n          [150, '#EFA451'],\n          [200, '#E46C38'],\n          [346, '#D53127']\n        ],\n        options: {\n          backgroundColor: 'rgba(0,0,0,0)',\n          // gradient: {\n          //   // enter n keys between 0 and 1 here\n          //   // for gradient color customization\n          //   0.0289017: '#4A90C3', // 0-10\n          //   0.0578035: '#81AAAC', // 11-20\n          //   0.1156069: '#B2C899', // 21-40\n          //   0.1734104: '#E5EA84', // 41-60\n          //   0.2890173: '#F8DE6D', // 61-100\n          //   0.433526: '#EFA451', // 101-150\n          //   0.5780347: '#E46C38', // 151-200\n          //   1: '#D53127' // 201-346\n          // },\n          opacity: 0.8,\n          radius: 10,\n          maxOpacity: 0.6,\n          minOpacity: 0.3,\n          blur: 0.75\n        }\n      }\n    },\n    methods: {\n      ready({ Cesium, viewer }) {\n        Cesium.Resource.fetchJson({ url: 'https://zouyaoji.top/vue-cesium/SampleData/heatmap/pop.json' }).then(res => {\n          this.rectangle = res.bounds\n          this.min = res.min\n          this.max = res.max\n          this.data = res.data\n        })\n      },\n      onHeatmapReady({ Cesium, viewer, cesiumObject }) {\n        this.$refs.heatmap.childRef.value.creatingPromise.then(({ Cesium, viewer, cesiumObject }) => {\n          console.log(cesiumObject)\n          if (cesiumObject instanceof Cesium.GroundPrimitive) {\n            const geometry = cesiumObject.geometryInstances.geometry.constructor.createGeometry(cesiumObject.geometryInstances.geometry)\n            viewer.scene.camera.flyToBoundingSphere(geometry.boundingSphere)\n          } else if (cesiumObject instanceof Cesium.Entity) {\n            viewer.flyTo(cesiumObject)\n          } else {\n            viewer.camera.flyTo({ destination: cesiumObject.imageryProvider.rectangle })\n          }\n        })\n      },\n      unload() {\n        this.$refs.heatmap.unload()\n      },\n      load() {\n        this.$refs.heatmap.load()\n      },\n      reload() {\n        this.$refs.heatmap.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定热力图是否显示。</td><td></td></tr><tr><td>rectangle</td><td>VcRectangle</td><td></td><td><code>optional</code> 指定热力图四至参数。</td><td></td></tr><tr><td>min</td><td>number</td><td><code>0</code></td><td><code>optional</code> 指定热力图数据最小值。</td><td></td></tr><tr><td>max</td><td>number</td><td><code>100</code></td><td><code>optional</code> 指定热力图数据最大值。</td><td></td></tr><tr><td>data</td><td>Array&lt;VcHeatMapData&gt;</td><td><code>[]</code></td><td><code>optional</code> 指定热力图数据。如果不是 x, y, value 需要在 options 属性指明字段。</td><td></td></tr><tr><td>options</td><td>HeatmapConfiguration</td><td></td><td><code>optional</code> 指定热力图参数。</td><td></td></tr><tr><td>type</td><td>&#39;primitive&#39; | &#39;entity&#39; | &#39;imagery-layer&#39;</td><td><code>&#39;primitive&#39;</code></td><td><code>optional</code> 指定热力图对象的类型。</td><td>primitive/entity/imagery-layer</td></tr><tr><td>segments</td><td>Array&lt;VcColorSegments&gt;</td><td></td><td><code>optional</code> 指定热力图颜色分段。</td><td></td></tr><tr><td>projection</td><td>&#39;3857&#39; | &#39;4326&#39;</td><td></td><td><code>optional</code> 指定投影。</td><td></td></tr></tbody></table><div class=\"tip\"><p>提示：<code>segments</code> 和 <code>options.gradient</code> 均表达颜色分段，指定其中一个就可以了。<code>segments</code> 分段是实际值，而 <code>options.gradient</code> 需要归一化处理，详见例子。</p></div><div class=\"tipflex\"><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// options 结构:</span>\n{\n  <span class=\"hljs-attr\">backgroundColor</span>: string,\n  <span class=\"hljs-attr\">gradient</span>: { [<span class=\"hljs-attr\">key</span>: string]: string }\n  <span class=\"hljs-attr\">radius</span>: number\n  <span class=\"hljs-attr\">opacity</span>: number\n  <span class=\"hljs-attr\">maxOpacity</span>: number\n  <span class=\"hljs-attr\">minOpacity</span>: number\n  <span class=\"hljs-attr\">blur</span>: number\n  <span class=\"hljs-attr\">xField</span>: string <span class=\"hljs-comment\">// x</span>\n  <span class=\"hljs-attr\">yField</span>: string <span class=\"hljs-comment\">// y</span>\n  <span class=\"hljs-attr\">valueField</span>: string <span class=\"hljs-comment\">//value</span>\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// segments 结构:</span>\n<span class=\"hljs-title class_\">Array</span>&lt;[number, [number, number, number]] | [number, string | <span class=\"hljs-title class_\">ColorInByteOption</span> | <span class=\"hljs-title class_\">Cartesian4Option</span> | <span class=\"hljs-title class_\">Cesium</span>.<span class=\"hljs-property\">Color</span>]&gt;\n</code><span class=\"lang-mark\">js</span></pre></div>", 3);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr></tbody></table>", 1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("方法 ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动加载组件。</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动重新加载组件。</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>手动卸载组件。</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>获取标志该组件是否创建成功的 Promise 对象。</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>获取该组件加载的 Cesium 对象。</td></tr></tbody></table>", 1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("资料： ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("heatmapjs");

function vc_overlay_heatmapvue_type_template_id_e8adcf84_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_overlay_heatmapvue_type_template_id_e8adcf84_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcoverlayheatmap",
    tabindex: "-1",
    content: "VcOverlayHeatmap",
    href: "#vcoverlayheatmap",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_heatmapvue_type_template_id_e8adcf84_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcoverlayheatmap"
    })]),
    _: 1
  }), vc_overlay_heatmapvue_type_template_id_e8adcf84_hoisted_3, _hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
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
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "fang-fa",
    tabindex: "-1",
    content: "方法",
    href: "#fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fang-fa"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "can-kao",
    tabindex: "-1",
    content: "参考",
    href: "#can-kao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#can-kao"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_18, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://www.patrick-wied.at/static/heatmapjs/docs.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_19]),
    _: 1
  })])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/overlays/vc-overlay-heatmap.md?vue&type=template&id=e8adcf84

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/overlays/vc-overlay-heatmap.md?vue&type=script&lang=ts

/* harmony default export */ var vc_overlay_heatmapvue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

      function render(_ctx, _cache) {
        const _component_vc_overlay_heatmap = _resolveComponent("vc-overlay-heatmap");

        const _component_vc_imagery_provider_tianditu = _resolveComponent("vc-imagery-provider-tianditu");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_datasource_geojson = _resolveComponent("vc-datasource-geojson");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.ready,
            sceneModePicker: ""
          }, {
            default: _withCtx(() => [_ctx.data.length ? (_openBlock(), _createBlock(_component_vc_overlay_heatmap, {
              key: 0,
              ref: "heatmap",
              data: _ctx.data,
              rectangle: _ctx.rectangle,
              max: _ctx.max,
              min: _ctx.min,
              show: _ctx.show,
              options: _ctx.options,
              onReady: _ctx.onHeatmapReady,
              type: "primitive",
              segments: _ctx.segments
            }, null, 8, ["data", "rectangle", "max", "min", "show", "options", "onReady", "segments"])) : _createCommentVNode("", true), _createVNode(_component_vc_layer_imagery, {
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
            }), _createVNode(_component_vc_datasource_geojson, {
              data: "https://zouyaoji.top/vue-cesium/SampleData/geojson/wuhou.json",
              stroke: "red"
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
            show: true,
            data: [],
            max: 346.05413818359375,
            min: 0.5259535908699036,
            rectangle: [0, 0, 0, 0],
            segments: [[10, '#4A90C3'], [20, '#81AAAC'], [40, '#B2C899'], [60, '#E5EA84'], [100, '#F8DE6D'], [150, '#EFA451'], [200, '#E46C38'], [346, '#D53127']],
            options: {
              backgroundColor: 'rgba(0,0,0,0)',
              // gradient: {
              //   // enter n keys between 0 and 1 here
              //   // for gradient color customization
              //   0.0289017: '#4A90C3', // 0-10
              //   0.0578035: '#81AAAC', // 11-20
              //   0.1156069: '#B2C899', // 21-40
              //   0.1734104: '#E5EA84', // 41-60
              //   0.2890173: '#F8DE6D', // 61-100
              //   0.433526: '#EFA451', // 101-150
              //   0.5780347: '#E46C38', // 151-200
              //   1: '#D53127' // 201-346
              // },
              opacity: 0.8,
              radius: 10,
              maxOpacity: 0.6,
              minOpacity: 0.3,
              blur: 0.75
            }
          };
        },

        methods: {
          ready(_ref) {
            let {
              Cesium,
              viewer
            } = _ref;
            Cesium.Resource.fetchJson({
              url: 'https://zouyaoji.top/vue-cesium/SampleData/heatmap/pop.json'
            }).then(res => {
              this.rectangle = res.bounds;
              this.min = res.min;
              this.max = res.max;
              this.data = res.data;
            });
          },

          onHeatmapReady(_ref2) {
            let {
              Cesium,
              viewer,
              cesiumObject
            } = _ref2;
            this.$refs.heatmap.childRef.value.creatingPromise.then(_ref3 => {
              let {
                Cesium,
                viewer,
                cesiumObject
              } = _ref3;
              console.log(cesiumObject);

              if (cesiumObject instanceof Cesium.GroundPrimitive) {
                const geometry = cesiumObject.geometryInstances.geometry.constructor.createGeometry(cesiumObject.geometryInstances.geometry);
                viewer.scene.camera.flyToBoundingSphere(geometry.boundingSphere);
              } else if (cesiumObject instanceof Cesium.Entity) {
                viewer.flyTo(cesiumObject);
              } else {
                viewer.camera.flyTo({
                  destination: cesiumObject.imageryProvider.rectangle
                });
              }
            });
          },

          unload() {
            this.$refs.heatmap.unload();
          },

          load() {
            this.$refs.heatmap.load();
          },

          reload() {
            this.$refs.heatmap.reload();
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
// CONCATENATED MODULE: ./website/docs/zh-CN/overlays/vc-overlay-heatmap.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/overlays/vc-overlay-heatmap.md



vc_overlay_heatmapvue_type_script_lang_ts.render = vc_overlay_heatmapvue_type_template_id_e8adcf84_render

/* harmony default export */ var vc_overlay_heatmap = __webpack_exports__["default"] = (vc_overlay_heatmapvue_type_script_lang_ts);

/***/ })

}]);