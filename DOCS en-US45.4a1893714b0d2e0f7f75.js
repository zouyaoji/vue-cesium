(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/overlays/vc-overlay-heatmap.md?vue&type=template&id=31c3dd23

var vc_overlay_heatmapvue_type_template_id_31c3dd23_hoisted_1 = {
  class: "content element-doc"
};

var vc_overlay_heatmapvue_type_template_id_31c3dd23_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h2", {
  id: "vcoverlayheatmap"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vcoverlayheatmap"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" VcOverlayHeatmap")], -1);

var vc_overlay_heatmapvue_type_template_id_31c3dd23_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "Load a heatmap overlay to viewer.", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "Based on heatmapjs implementation.", -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" Basic usage")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "Basic usage of VcOverlayHeatmap component.", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-overlay-heatmap"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tag to add a heatmap overlay to the viewer.")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"ready\" sceneModePicker>\n    <vc-overlay-heatmap\n      v-if=\"data.length\"\n      ref=\"heatmap\"\n      :data=\"data\"\n      :rectangle=\"rectangle\"\n      :max=\"max\"\n      :min=\"min\"\n      :show=\"show\"\n      :options=\"options\"\n      @ready=\"onHeatmapReady\"\n      type=\"primitive\"\n      :segments=\"segments\"\n    >\n    </vc-overlay-heatmap>\n    <vc-layer-imagery>\n      <vc-provider-imagery-osm></vc-provider-imagery-osm>\n    </vc-layer-imagery>\n    <vc-datasource-geojson data=\"./SampleData/geojson/wuhou.json\" stroke=\"red\"></vc-datasource-geojson>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        show: true,\n        data: [],\n        max: 346.05413818359375,\n        min: 0.5259535908699036,\n        rectangle: [0, 0, 0, 0],\n        segments: [\n          [10, '#4A90C3'],\n          [20, '#81AAAC'],\n          [40, '#B2C899'],\n          [60, '#E5EA84'],\n          [100, '#F8DE6D'],\n          [150, '#EFA451'],\n          [200, '#E46C38'],\n          [346, '#D53127']\n        ],\n        options: {\n          backgroundColor: 'rgba(0,0,0,0)',\n          // gradient: {\n          //   // enter n keys between 0 and 1 here\n          //   // for gradient color customization\n          //   0.0289017: '#4A90C3', // 0-10\n          //   0.0578035: '#81AAAC', // 11-20\n          //   0.1156069: '#B2C899', // 21-40\n          //   0.1734104: '#E5EA84', // 41-60\n          //   0.2890173: '#F8DE6D', // 61-100\n          //   0.433526: '#EFA451', // 101-150\n          //   0.5780347: '#E46C38', // 151-200\n          //   1: '#D53127' // 201-346\n          // },\n          opacity: 0.8,\n          radius: 10,\n          maxOpacity: 0.6,\n          minOpacity: 0.3,\n          blur: 0.75\n        }\n      }\n    },\n    methods: {\n      ready({ Cesium, viewer }) {\n        Cesium.Resource.fetchJson({ url: './SampleData/heatmap/pop.json' }).then(res => {\n          this.rectangle = res.bounds\n          this.min = res.min\n          this.max = res.max\n          this.data = res.data\n        })\n      },\n      onHeatmapReady({ Cesium, viewer, cesiumObject }) {\n        this.$refs.heatmap.childRef.value.createPromise.then(({ Cesium, viewer, cesiumObject }) => {\n          console.log(cesiumObject)\n          if (cesiumObject instanceof Cesium.GroundPrimitive) {\n            const geometry = cesiumObject.geometryInstances.geometry.constructor.createGeometry(cesiumObject.geometryInstances.geometry)\n            viewer.scene.camera.flyToBoundingSphere(geometry.boundingSphere)\n          } else if (cesiumObject instanceof Cesium.Entity) {\n            viewer.flyTo(cesiumObject)\n          } else {\n            viewer.camera.flyTo({ destination: cesiumObject.imageryProvider.rectangle })\n          }\n        })\n      },\n      unload() {\n        this.$refs.heatmap.unload()\n      },\n      load() {\n        this.$refs.heatmap.load()\n      },\n      reload() {\n        this.$refs.heatmap.reload()\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether to display the heatmap overlay.</td><td></td></tr><tr><td>rectangle</td><td>Object|Array</td><td></td><td><code>optional</code> Specify a rectangle with north, south, east and west properties.</td><td></td></tr><tr><td>min</td><td>Number</td><td><code>true</code></td><td><code>optional</code> Specify the minimum value of the heat map data.</td><td></td></tr><tr><td>max</td><td>Number</td><td></td><td><code>optional</code> Specify the maximum value of the heat map data.</td><td></td></tr><tr><td>data</td><td>Array&lt;{x: number, y: number, value: number}&gt;</td><td><code>[]</code></td><td><code>optional</code> Specify the heat map data. If it is not x, y, value, you need to specify the fields in the options attribute.</td><td></td></tr><tr><td>options</td><td>Object|HeatmapConfiguration</td><td></td><td><code>optional</code> Specify the heatmap configs.</td><td></td></tr><tr><td>type</td><td>String</td><td><code>&#39;primitive&#39;</code></td><td><code>optional</code> Specify the type of heat map object. <strong>Primitive: primitive, entity: entity, image layer: imagery-layer</strong></td><td>primitive/entity/imagery-layer</td></tr><tr><td>segments</td><td>Array&lt;ColorSegments&gt;</td><td></td><td><code>optional</code> Specify the color segment of the heatmap.</td><td></td></tr></tbody></table><div class=\"tip\"><p>Tip: <code>segments</code> and <code>options.gradient</code> both express color segments, just specify one of them. The <code>segments</code> segment is the actual value, and <code>options.gradient</code> needs to be normalized, see the example for details.</p></div><div class=\"tipflex\"><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// options</span>\n{\n  <span class=\"hljs-attr\">backgroundColor</span>: string,\n  <span class=\"hljs-attr\">gradient</span>: { [key: string]: string }\n  <span class=\"hljs-attr\">radius</span>: number\n  <span class=\"hljs-attr\">opacity</span>: number\n  <span class=\"hljs-attr\">maxOpacity</span>: number\n  <span class=\"hljs-attr\">minOpacity</span>: number\n  <span class=\"hljs-attr\">blur</span>: number\n  <span class=\"hljs-attr\">xField</span>: string <span class=\"hljs-comment\">// x</span>\n  <span class=\"hljs-attr\">yField</span>: string <span class=\"hljs-comment\">// y</span>\n  <span class=\"hljs-attr\">valueField</span>: string <span class=\"hljs-comment\">//value</span>\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// segments</span>\n<span class=\"hljs-built_in\">Array</span>&lt;[number, [number, number, number]] | [number, string | ColorInByteOption | Cartesian4Option | Cesium.Color]&gt;\n</code></pre></div><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Docs <a href=\"https://www.patrick-wied.at/static/heatmapjs/docs.html\">heatmapjs</a></li></ul>", 8);

function vc_overlay_heatmapvue_type_template_id_31c3dd23_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_overlay_heatmapvue_type_template_id_31c3dd23_hoisted_1, [vc_overlay_heatmapvue_type_template_id_31c3dd23_hoisted_2, vc_overlay_heatmapvue_type_template_id_31c3dd23_hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/overlays/vc-overlay-heatmap.md?vue&type=template&id=31c3dd23

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/overlays/vc-overlay-heatmap.md?vue&type=script&lang=ts


/* harmony default export */ var vc_overlay_heatmapvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */],
          _createCommentVNode = vue_esm_browser["j" /* createCommentVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        var _component_vc_overlay_heatmap = _resolveComponent("vc-overlay-heatmap");

        var _component_vc_provider_imagery_osm = _resolveComponent("vc-provider-imagery-osm");

        var _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        var _component_vc_datasource_geojson = _resolveComponent("vc-datasource-geojson");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, {
              onReady: _ctx.ready,
              sceneModePicker: ""
            }, {
              default: _withCtx(function () {
                return [_ctx.data.length ? (_openBlock(), _createBlock(_component_vc_overlay_heatmap, {
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
                }, null, 8, ["data", "rectangle", "max", "min", "show", "options", "onReady", "segments"])) : _createCommentVNode("", true), _createVNode(_component_vc_layer_imagery, null, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_osm)];
                  }),
                  _: 1
                }), _createVNode(_component_vc_datasource_geojson, {
                  data: "./SampleData/geojson/wuhou.json",
                  stroke: "red"
                })];
              }),
              _: 1
            }, 8, ["onReady"]), _createVNode(_component_el_row, {
              class: "demo-toolbar"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.unload
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.load
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.reload
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }, 8, ["onClick"])];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 512)]);
      }

      var democomponentExport = {
        data: function data() {
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
          ready: function ready(_ref) {
            var _this = this;

            var Cesium = _ref.Cesium,
                viewer = _ref.viewer;
            Cesium.Resource.fetchJson({
              url: './SampleData/heatmap/pop.json'
            }).then(function (res) {
              _this.rectangle = res.bounds;
              _this.min = res.min;
              _this.max = res.max;
              _this.data = res.data;
            });
          },
          onHeatmapReady: function onHeatmapReady(_ref2) {
            var Cesium = _ref2.Cesium,
                viewer = _ref2.viewer,
                cesiumObject = _ref2.cesiumObject;
            this.$refs.heatmap.childRef.value.createPromise.then(function (_ref3) {
              var Cesium = _ref3.Cesium,
                  viewer = _ref3.viewer,
                  cesiumObject = _ref3.cesiumObject;
              console.log(cesiumObject);

              if (cesiumObject instanceof Cesium.GroundPrimitive) {
                var geometry = cesiumObject.geometryInstances.geometry.constructor.createGeometry(cesiumObject.geometryInstances.geometry);
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
          unload: function unload() {
            this.$refs.heatmap.unload();
          },
          load: function load() {
            this.$refs.heatmap.load();
          },
          reload: function reload() {
            this.$refs.heatmap.reload();
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/overlays/vc-overlay-heatmap.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/overlays/vc-overlay-heatmap.md



vc_overlay_heatmapvue_type_script_lang_ts.render = vc_overlay_heatmapvue_type_template_id_31c3dd23_render

/* harmony default export */ var vc_overlay_heatmap = __webpack_exports__["default"] = (vc_overlay_heatmapvue_type_script_lang_ts);

/***/ })

}]);