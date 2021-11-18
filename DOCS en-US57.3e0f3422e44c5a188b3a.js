(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/post-processes/vc-post-process-stage-scan.md?vue&type=template&id=1e762040

const vc_post_process_stage_scanvue_type_template_id_1e762040_hoisted_1 = {
  class: "content element-doc"
};

const vc_post_process_stage_scanvue_type_template_id_1e762040_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h2", {
  id: "vcpostprocessstagescan"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  class: "header-anchor",
  href: "#vcpostprocessstagescan"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" VcPostProcessStageScan")], -1);

const vc_post_process_stage_scanvue_type_template_id_1e762040_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Packaged scanning effects, radar scanning and circular scanning.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Basic usage")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcPostProcessStageScan component.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-post-process-stage-scan"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add post-processing scanning effects on the viewer.")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-post-process-stage-scan ref=\"radar\" type=\"radar\" :options=\"options1\"></vc-post-process-stage-scan>\n    <vc-post-process-stage-scan ref=\"circle\" type=\"circle\" :options=\"options2\"></vc-post-process-stage-scan>\n    <vc-layer-imagery>\n      <vc-provider-imagery-osm></vc-provider-imagery-osm>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        options1: {\n          position: [117.217124, 31.809777],\n          radius: 1500,\n          interval: 1500,\n          color: [255, 255, 0, 255]\n        },\n        options2: {\n          position: [117.257124, 31.809777],\n          radius: 1500,\n          interval: 1500,\n          color: [255, 0, 0, 255]\n        }\n      }\n    },\n    methods: {\n      onViewerReady({ viewer }) {\n        viewer.scene.globe.depthTestAgainstTerrain = true\n        viewer.camera.flyTo({\n          destination: Cesium.Cartesian3.fromDegrees(117.237124, 31.809777, 10000.0),\n          orientation: {\n            heading: Cesium.Math.toRadians(0), // east, default value is 0.0 (north)\n            pitch: Cesium.Math.toRadians(-90), // default value (looking down)\n            roll: 0.0 // default value\n          },\n          duration: 3\n        })\n      },\n      unload() {\n        this.$refs.circle.unload()\n        this.$refs.radar.unload()\n      },\n      load() {\n        this.$refs.circle.load()\n        this.$refs.radar.load()\n      },\n      reload() {\n        this.$refs.circle.reload()\n        this.$refs.radar.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td><code>&#39;radar&#39;</code></td><td><code>optional</code> Specify the scan type, optional values are&#39;radar&#39;,&#39;circle&#39;.</td></tr><tr><td>options</td><td>Object</td><td><code>{ position: [0, 0], radius: 1500, interval: 3500, color: [0, 0, 0, 255] }</code></td><td><code>optional</code> Specify optional parameters.</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table>", 4);

function vc_post_process_stage_scanvue_type_template_id_1e762040_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_post_process_stage_scanvue_type_template_id_1e762040_hoisted_1, [vc_post_process_stage_scanvue_type_template_id_1e762040_hoisted_2, vc_post_process_stage_scanvue_type_template_id_1e762040_hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/post-processes/vc-post-process-stage-scan.md?vue&type=template&id=1e762040

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/post-processes/vc-post-process-stage-scan.md?vue&type=script&lang=ts

/* harmony default export */ var vc_post_process_stage_scanvue_type_script_lang_ts = ({
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
        const _component_vc_post_process_stage_scan = _resolveComponent("vc-post-process-stage-scan");

        const _component_vc_provider_imagery_osm = _resolveComponent("vc-provider-imagery-osm");

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
            default: _withCtx(() => [_createVNode(_component_vc_post_process_stage_scan, {
              ref: "radar",
              type: "radar",
              options: _ctx.options1
            }, null, 8, ["options"]), _createVNode(_component_vc_post_process_stage_scan, {
              ref: "circle",
              type: "circle",
              options: _ctx.options2
            }, null, 8, ["options"]), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_osm)]),
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
              onClick: _ctx.load
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
            options1: {
              position: [117.217124, 31.809777],
              radius: 1500,
              interval: 1500,
              color: [255, 255, 0, 255]
            },
            options2: {
              position: [117.257124, 31.809777],
              radius: 1500,
              interval: 1500,
              color: [255, 0, 0, 255]
            }
          };
        },

        methods: {
          onViewerReady({
            viewer
          }) {
            viewer.scene.globe.depthTestAgainstTerrain = true;
            viewer.camera.flyTo({
              destination: Cesium.Cartesian3.fromDegrees(117.237124, 31.809777, 10000.0),
              orientation: {
                heading: Cesium.Math.toRadians(0),
                // east, default value is 0.0 (north)
                pitch: Cesium.Math.toRadians(-90),
                // default value (looking down)
                roll: 0.0 // default value

              },
              duration: 3
            });
          },

          unload() {
            this.$refs.circle.unload();
            this.$refs.radar.unload();
          },

          load() {
            this.$refs.circle.load();
            this.$refs.radar.load();
          },

          reload() {
            this.$refs.circle.reload();
            this.$refs.radar.reload();
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
// CONCATENATED MODULE: ./website/docs/en-US/post-processes/vc-post-process-stage-scan.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/post-processes/vc-post-process-stage-scan.md



vc_post_process_stage_scanvue_type_script_lang_ts.render = vc_post_process_stage_scanvue_type_template_id_1e762040_render

/* harmony default export */ var vc_post_process_stage_scan = __webpack_exports__["default"] = (vc_post_process_stage_scanvue_type_script_lang_ts);

/***/ })

}]);