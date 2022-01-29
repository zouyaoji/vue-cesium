(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.26/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/analyses/vc-analysis-flood.md?vue&type=template&id=84f293a0

const vc_analysis_floodvue_type_template_id_84f293a0_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_analysis_floodvue_type_template_id_84f293a0_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcAnalysisFlood ");

const vc_analysis_floodvue_type_template_id_84f293a0_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading the flood analysis component. The essence is to use "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive-classification"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-geometry-polygon"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to dynamically modify the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "extrudedHeight"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" property of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-geometry-polygon"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to stretch it into a closed volume object, as a simple flood analysis simulation.")], -1);

const vc_analysis_floodvue_type_template_id_84f293a0_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "Note"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The scene needs to be loaded with terrain or 3DTiles.")], -1);

const vc_analysis_floodvue_type_template_id_84f293a0_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcAnalysisFlood component.", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-analysis-flood"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tags to add a simple flood analysis simulation on the viewer.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-analysis-flood\n      @ready=\"ready\"\n      ref=\"flood\"\n      :min-height=\"minHeight\"\n      :max-height=\"maxHeight\"\n      :speed=\"speed\"\n      :polygon-hierarchy=\"polygonHierarchy\"\n    >\n    </vc-analysis-flood>\n    <vc-layer-imagery>\n      <vc-imagery-provider-arcgis></vc-imagery-provider-arcgis>\n    </vc-layer-imagery>\n    <vc-terrain-provider-cesium></vc-terrain-provider-cesium>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    <el-button type=\"danger\" round @click=\"start\">Start</el-button>\n    <el-button type=\"danger\" round @click=\"pause\">{{pausing ? 'Play' : 'Pause'}}</el-button>\n    <el-button type=\"danger\" round @click=\"stop\">Stop</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        minHeight: -1,\n        maxHeight: 4000,\n        speed: 10,\n        polygonHierarchy: [\n          [102.1, 29.5],\n          [106.2, 29.5],\n          [106.2, 33.5],\n          [102.1, 33.5]\n        ],\n        pausing: false\n      }\n    },\n    methods: {\n      ready(cesiumInstance) {\n        console.log(cesiumInstance)\n      },\n      onViewerReady({ Cesium, viewer }) {\n        viewer.scene.globe.depthTestAgainstTerrain = true\n        viewer.camera.setView({\n          destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),\n          orientation: {\n            heading: 6.20312220367255,\n            pitch: -0.9937536846355606,\n            roll: 0.002443376981836387\n          }\n        })\n      },\n      unload() {\n        this.$refs.flood.unload()\n      },\n      load() {\n        this.$refs.flood.load()\n      },\n      reload() {\n        this.$refs.flood.reload()\n      },\n      start() {\n        this.$refs.flood.start()\n        this.pausing = false\n      },\n      pause() {\n        this.$refs.flood.pause()\n        this.pausing = !this.pausing\n      },\n      stop() {\n        this.$refs.flood.stop()\n        this.pausing = false\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>//---</p><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>polygonHierarchy</td><td>Object|Array</td><td></td><td><code>require</code> Specifies the latitude and longitude array for constructing the submerged analysis polygon.</td></tr><tr><td>minHeight</td><td>Number</td><td><code>-1 </code></td><td><code>optional</code> Specify the minimum elevation.</td></tr><tr><td>maxHeight</td><td>Number</td><td><code>8888</code></td><td><code>optional</code> Specify the maximum elevation.</td></tr><tr><td>speed</td><td>Number</td><td><code>10</code></td><td><code>optional</code> Specify the height to increase each frame.</td></tr><tr><td>color</td><td>Object|String|Array</td><td><code>&#39;rgba(40,150,200,0.6)&#39;</code></td><td><code>optional</code> Specify the color of the polygon geometry.</td></tr><tr><td>loop</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Specify whether to restart after reaching the maximum height.</td></tr></tbody></table>", 2);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Event ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>stop</td><td></td><td>Triggers when the maxHeight is reached.</td></tr></tbody></table>", 1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Methods ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>start</td><td></td><td>Start</td></tr><tr><td>pause</td><td></td><td>Pause</td></tr><tr><td>stop</td><td></td><td>Stop</td></tr></tbody></table>", 1);

function vc_analysis_floodvue_type_template_id_84f293a0_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_analysis_floodvue_type_template_id_84f293a0_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcanalysisflood",
    tabindex: "-1",
    content: "VcAnalysisFlood",
    href: "#vcanalysisflood",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_analysis_floodvue_type_template_id_84f293a0_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcanalysisflood"
    })]),
    _: 1
  }), vc_analysis_floodvue_type_template_id_84f293a0_hoisted_3, vc_analysis_floodvue_type_template_id_84f293a0_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_analysis_floodvue_type_template_id_84f293a0_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_link, {
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
    id: "event",
    tabindex: "-1",
    content: "Event",
    href: "#event",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#event"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "methods",
    tabindex: "-1",
    content: "Methods",
    href: "#methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#methods"
    })]),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/analyses/vc-analysis-flood.md?vue&type=template&id=84f293a0

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/analyses/vc-analysis-flood.md?vue&type=script&lang=ts

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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Start");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("Stop");

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
              default: _withCtx(() => [_createTextVNode(_toDisplayString(_ctx.pausing ? 'Play' : 'Pause'), 1)]),
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
// CONCATENATED MODULE: ./website/docs/en-US/analyses/vc-analysis-flood.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/analyses/vc-analysis-flood.md



vc_analysis_floodvue_type_script_lang_ts.render = vc_analysis_floodvue_type_template_id_84f293a0_render

/* harmony default export */ var vc_analysis_flood = __webpack_exports__["default"] = (vc_analysis_floodvue_type_script_lang_ts);

/***/ })

}]);