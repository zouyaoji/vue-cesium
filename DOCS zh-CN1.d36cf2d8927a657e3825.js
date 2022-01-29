(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[100],{

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.26/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/analyses/vc-analysis-flood.md?vue&type=template&id=6a8aef26

const vc_analysis_floodvue_type_template_id_6a8aef26_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_analysis_floodvue_type_template_id_6a8aef26_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcAnalysisFlood ");

const vc_analysis_floodvue_type_template_id_6a8aef26_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载淹没分析组件。实质是用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive-classification"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 加载 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-geometry-polygon"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("，通过动态修改 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-geometry-polygon"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "extrudedHeight"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 属性拉伸成一个闭合体对象，从而简易模拟淹没分析。")], -1);

const vc_analysis_floodvue_type_template_id_6a8aef26_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 需要场景加载地形或 3DTiles。")], -1);

const vc_analysis_floodvue_type_template_id_6a8aef26_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "淹没分析组件的基础用法。", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-analysis-flood"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件模拟淹没效果。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-analysis-flood\n      @ready=\"ready\"\n      ref=\"flood\"\n      :min-height=\"minHeight\"\n      :max-height=\"maxHeight\"\n      :speed=\"speed\"\n      :polygon-hierarchy=\"polygonHierarchy\"\n    >\n    </vc-analysis-flood>\n    <vc-layer-imagery>\n      <vc-imagery-provider-arcgis></vc-imagery-provider-arcgis>\n    </vc-layer-imagery>\n    <vc-terrain-provider-cesium></vc-terrain-provider-cesium>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    <el-button type=\"danger\" round @click=\"start\">开始</el-button>\n    <el-button type=\"danger\" round @click=\"pause\">{{pausing ? '继续' : '暂停'}}</el-button>\n    <el-button type=\"danger\" round @click=\"stop\">结束</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        minHeight: -1,\n        maxHeight: 4000,\n        speed: 10,\n        polygonHierarchy: [\n          [102.1, 29.5],\n          [106.2, 29.5],\n          [106.2, 33.5],\n          [102.1, 33.5]\n        ],\n        pausing: false\n      }\n    },\n    methods: {\n      ready(cesiumInstance) {\n        console.log(cesiumInstance)\n      },\n      onViewerReady({ Cesium, viewer }) {\n        viewer.scene.globe.depthTestAgainstTerrain = true\n        viewer.camera.setView({\n          destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),\n          orientation: {\n            heading: 6.20312220367255,\n            pitch: -0.9937536846355606,\n            roll: 0.002443376981836387\n          }\n        })\n      },\n      unload() {\n        this.$refs.flood.unload()\n      },\n      load() {\n        this.$refs.flood.load()\n      },\n      reload() {\n        this.$refs.flood.reload()\n      },\n      start() {\n        this.$refs.flood.start()\n        this.pausing = false\n      },\n      pause() {\n        this.$refs.flood.pause()\n        this.pausing = !this.pausing\n      },\n      stop() {\n        this.$refs.flood.stop()\n        this.pausing = false\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>polygonHierarchy</td><td>Object|Array</td><td></td><td><code>require</code> 指定构建淹没分析多边形的经纬度数组。</td></tr><tr><td>minHeight</td><td>Number</td><td><code>-1 </code></td><td><code>optional</code> 指定最小高程。</td></tr><tr><td>maxHeight</td><td>Number</td><td><code>8888</code></td><td><code>optional</code> 指定最大高程。</td></tr><tr><td>speed</td><td>Number</td><td><code>10</code></td><td><code>optional</code> 指定每帧增加的高度。</td></tr><tr><td>color</td><td>Object|String|Array</td><td><code>&#39;rgba(40,150,200,0.6)&#39;</code></td><td><code>optional</code> 指定淹没分析对象颜色。</td></tr><tr><td>loop</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定到达最大高度后是否重新开始。</td></tr></tbody></table>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>stop</td><td></td><td>到达最大高度时触发。</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("方法 ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>方法</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>start</td><td></td><td>开始</td></tr><tr><td>pause</td><td></td><td>暂停/继续</td></tr><tr><td>stop</td><td></td><td>结束</td></tr></tbody></table>", 1);

function vc_analysis_floodvue_type_template_id_6a8aef26_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_analysis_floodvue_type_template_id_6a8aef26_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcanalysisflood",
    tabindex: "-1",
    content: "VcAnalysisFlood",
    href: "#vcanalysisflood",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_analysis_floodvue_type_template_id_6a8aef26_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcanalysisflood"
    })]),
    _: 1
  }), vc_analysis_floodvue_type_template_id_6a8aef26_hoisted_3, vc_analysis_floodvue_type_template_id_6a8aef26_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_analysis_floodvue_type_template_id_6a8aef26_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_link, {
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
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "fang-fa",
    tabindex: "-1",
    content: "方法",
    href: "#fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fang-fa"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/analyses/vc-analysis-flood.md?vue&type=template&id=6a8aef26

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/analyses/vc-analysis-flood.md?vue&type=script&lang=ts

/* harmony default export */ var vc_analysis_floodvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        toDisplayString: _toDisplayString,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("开始");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("结束");

      function render(_ctx, _cache) {
        const _component_vc_analysis_flood = _resolveComponent("vc-analysis-flood");

        const _component_vc_imagery_provider_arcgis = _resolveComponent("vc-imagery-provider-arcgis");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_terrain_provider_cesium = _resolveComponent("vc-terrain-provider-cesium");

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
            default: _withCtx(() => [_createVNode(_component_vc_analysis_flood, {
              onReady: _ctx.ready,
              ref: "flood",
              "min-height": _ctx.minHeight,
              "max-height": _ctx.maxHeight,
              speed: _ctx.speed,
              "polygon-hierarchy": _ctx.polygonHierarchy
            }, null, 8, ["onReady", "min-height", "max-height", "speed", "polygon-hierarchy"]), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_arcgis)]),
              _: 1
            }), _createVNode(_component_vc_terrain_provider_cesium)]),
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
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.start
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.pause
            }, {
              default: _withCtx(() => [_createTextVNode(_toDisplayString(_ctx.pausing ? '继续' : '暂停'), 1)]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.stop
            }, {
              default: _withCtx(() => [_hoisted_5]),
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
            minHeight: -1,
            maxHeight: 4000,
            speed: 10,
            polygonHierarchy: [[102.1, 29.5], [106.2, 29.5], [106.2, 33.5], [102.1, 33.5]],
            pausing: false
          };
        },

        methods: {
          ready(cesiumInstance) {
            console.log(cesiumInstance);
          },

          onViewerReady(_ref) {
            let {
              Cesium,
              viewer
            } = _ref;
            viewer.scene.globe.depthTestAgainstTerrain = true;
            viewer.camera.setView({
              destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
              orientation: {
                heading: 6.20312220367255,
                pitch: -0.9937536846355606,
                roll: 0.002443376981836387
              }
            });
          },

          unload() {
            this.$refs.flood.unload();
          },

          load() {
            this.$refs.flood.load();
          },

          reload() {
            this.$refs.flood.reload();
          },

          start() {
            this.$refs.flood.start();
            this.pausing = false;
          },

          pause() {
            this.$refs.flood.pause();
            this.pausing = !this.pausing;
          },

          stop() {
            this.$refs.flood.stop();
            this.pausing = false;
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
// CONCATENATED MODULE: ./website/docs/zh-CN/analyses/vc-analysis-flood.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/analyses/vc-analysis-flood.md



vc_analysis_floodvue_type_script_lang_ts.render = vc_analysis_floodvue_type_template_id_6a8aef26_render

/* harmony default export */ var vc_analysis_flood = __webpack_exports__["default"] = (vc_analysis_floodvue_type_script_lang_ts);

/***/ })

}]);