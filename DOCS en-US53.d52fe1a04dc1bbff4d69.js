(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/platforms/vc-demo-supermap.md?vue&type=template&id=76f5bd72

var vc_demo_supermapvue_type_template_id_76f5bd72_hoisted_1 = {
  class: "content element-doc"
};

var vc_demo_supermapvue_type_template_id_76f5bd72_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"supermap-demo\"><a class=\"header-anchor\" href=\"#supermap-demo\">¶</a> SuperMap Demo</h2><p>When vue-cesium uses SuperMap iClient3D for WebGL to develop, you only need to specify the iClient3D library address through the configuration item <code>cesiumPath</code> when VueCesium is introduced.</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> VueCesium <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;vue-cesium/lib/theme-default/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(VueCesium, {\n  <span class=\"hljs-attr\">cesiumPath</span>: <span class=\"hljs-string\">&#39;https://www.supermapol.com/earth/Build/Cesium/Cesium.js&#39;</span>\n})\napp.mount(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code></pre><p>Or specify the address of cesiumPath as the iClient3D path on the vc-viewer component. Such as the following example:</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Use VueCesium to load SuperMap iClient3D for WebGL</p>", 6);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("specifies the use of SuperMap iClient3D for WebGL through the cesiumPath property of "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(".")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer\n    ref=\"vcViewer\"\n    :cesiumPath=\"cesiumPath\"\n    :animation=\"animation\"\n    :timeline=\"timeline\"\n    :fullscreenButton=\"fullscreenButton\"\n    :fullscreenElement=\"fullscreenElement\"\n    @ready=\"onViewerReady\"\n    @leftClick=\"onLeftClick\"\n  >\n    <vc-navigation :offset=\"offset\" @compass-evt=\"onNavigationEvt\" :otherOpts=\"otherOpts\" @zoom-evt=\"onNavigationEvt\"></vc-navigation>\n    <!-- <vc-entity v-model:billboard=\"billboard\" ref=\"entity\" @click=\"onEntityClick\" :position=\"{lng: 108, lat: 32}\" :point=\"point\" :label=\"label\">\n      <vc-graphics-billboard ref=\"billboard\" image=\"https://zouyaoji.top/vue-cesium/favicon.png\"></vc-graphics-billboard>\n      <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n    </vc-entity> -->\n    <vc-layer-imagery :sortOrder=\"20\">\n      <vc-provider-imagery-osm></vc-provider-imagery-osm>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n      <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    </el-row>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        animation: true,\n        timeline: true,\n        fullscreenButton: true,\n        fullscreenElement: document.body,\n        point: {\n          pixelSize: 28,\n          color: 'red'\n        },\n        label: {\n          text: 'Hello World',\n          pixelOffset: [0, 150]\n        },\n        billboard: {},\n        offset: [10, 25],\n        otherOpts: {\n          offset: [0, 32],\n          position: 'bottom-right'\n        },\n        cesiumPath: 'https://www.supermapol.com/earth/Build/Cesium/Cesium.js'\n      }\n    },\n    mounted() {\n      this.$refs.vcViewer.createPromise.then(({ Cesium, viewer }) => {\n        console.log('viewer is loaded.')\n      })\n    },\n    methods: {\n      onViewerReady({ Cesium, viewer }) {\n        viewer.imageryLayers.removeAll()\n        console.log(viewer)\n      },\n      onNavigationEvt(e) {\n        console.log(e)\n      },\n      onEntityClick(e) {\n        console.log(e)\n      },\n      onLeftClick(e) {\n        console.log(e)\n      },\n      load() {\n        this.$refs.vcViewer.load().then(e => {\n          console.log(e)\n        })\n      },\n      unload() {\n        this.$refs.vcViewer.unload().then(e => {\n          console.log(e)\n        })\n      },\n      reload() {\n        this.$refs.vcViewer.reload().then(e => {\n          console.log(e)\n        })\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h3", {
  id: "reference"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#reference"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" Reference")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("li", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Official website: "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("strong", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  href: "http://support.supermap.com.cn:8090/webgl/web/index.html"
}, " SuperMap iClient3D for WebGL")])])], -1);

function vc_demo_supermapvue_type_template_id_76f5bd72_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_demo_supermapvue_type_template_id_76f5bd72_hoisted_1, [vc_demo_supermapvue_type_template_id_76f5bd72_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/platforms/vc-demo-supermap.md?vue&type=template&id=76f5bd72

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/platforms/vc-demo-supermap.md?vue&type=script&lang=ts


/* harmony default export */ var vc_demo_supermapvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        var _component_vc_navigation = _resolveComponent("vc-navigation");

        var _component_vc_provider_imagery_osm = _resolveComponent("vc-provider-imagery-osm");

        var _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, {
              ref: "vcViewer",
              cesiumPath: _ctx.cesiumPath,
              animation: _ctx.animation,
              timeline: _ctx.timeline,
              fullscreenButton: _ctx.fullscreenButton,
              fullscreenElement: _ctx.fullscreenElement,
              onReady: _ctx.onViewerReady,
              onLeftClick: _ctx.onLeftClick
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_navigation, {
                  offset: _ctx.offset,
                  onCompassEvt: _ctx.onNavigationEvt,
                  otherOpts: _ctx.otherOpts,
                  onZoomEvt: _ctx.onNavigationEvt
                }, null, 8, ["offset", "onCompassEvt", "otherOpts", "onZoomEvt"]), _createVNode(_component_vc_layer_imagery, {
                  sortOrder: 20
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_osm)];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }, 8, ["cesiumPath", "animation", "timeline", "fullscreenButton", "fullscreenElement", "onReady", "onLeftClick"]), _createVNode(_component_el_row, {
              class: "demo-toolbar"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_row, null, {
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
            })];
          }),
          _: 1
        }, 512)]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            animation: true,
            timeline: true,
            fullscreenButton: true,
            fullscreenElement: document.body,
            point: {
              pixelSize: 28,
              color: 'red'
            },
            label: {
              text: 'Hello World',
              pixelOffset: [0, 150]
            },
            billboard: {},
            offset: [10, 25],
            otherOpts: {
              offset: [0, 32],
              position: 'bottom-right'
            },
            cesiumPath: 'https://www.supermapol.com/earth/Build/Cesium/Cesium.js'
          };
        },
        mounted: function mounted() {
          this.$refs.vcViewer.createPromise.then(function (_ref) {
            var Cesium = _ref.Cesium,
                viewer = _ref.viewer;
            console.log('viewer is loaded.');
          });
        },
        methods: {
          onViewerReady: function onViewerReady(_ref2) {
            var Cesium = _ref2.Cesium,
                viewer = _ref2.viewer;
            viewer.imageryLayers.removeAll();
            console.log(viewer);
          },
          onNavigationEvt: function onNavigationEvt(e) {
            console.log(e);
          },
          onEntityClick: function onEntityClick(e) {
            console.log(e);
          },
          onLeftClick: function onLeftClick(e) {
            console.log(e);
          },
          load: function load() {
            this.$refs.vcViewer.load().then(function (e) {
              console.log(e);
            });
          },
          unload: function unload() {
            this.$refs.vcViewer.unload().then(function (e) {
              console.log(e);
            });
          },
          reload: function reload() {
            this.$refs.vcViewer.reload().then(function (e) {
              console.log(e);
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/platforms/vc-demo-supermap.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/platforms/vc-demo-supermap.md



vc_demo_supermapvue_type_script_lang_ts.render = vc_demo_supermapvue_type_template_id_76f5bd72_render

/* harmony default export */ var vc_demo_supermap = __webpack_exports__["default"] = (vc_demo_supermapvue_type_script_lang_ts);

/***/ })

}]);