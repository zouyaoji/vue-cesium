(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/platforms/vc-demo-supermap.md?vue&type=template&id=09f20c52

const vc_demo_supermapvue_type_template_id_09f20c52_hoisted_1 = {
  class: "content element-doc"
};

const vc_demo_supermapvue_type_template_id_09f20c52_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"supermap-demo\"><a class=\"header-anchor\" href=\"#supermap-demo\">¶</a> SuperMap Demo</h2><p>When vue-cesium uses SuperMap iClient3D for WebGL to develop, you only need to specify the iClient3D library address through the configuration item <code>cesiumPath</code> when VueCesium is introduced.</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">VueCesium</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;vue-cesium/lib/theme-default/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">App</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = <span class=\"hljs-title function_\">createApp</span>(<span class=\"hljs-title class_\">App</span>)\napp.<span class=\"hljs-title function_\">use</span>(<span class=\"hljs-title class_\">VueCesium</span>, {\n  <span class=\"hljs-attr\">cesiumPath</span>: <span class=\"hljs-string\">&#39;https://www.supermapol.com/earth/Build/Cesium/Cesium.js&#39;</span>\n})\napp.<span class=\"hljs-title function_\">mount</span>(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code></pre><p>Or specify the address of cesiumPath as the iClient3D path on the vc-viewer component. Such as the following example:</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Use VueCesium to load SuperMap iClient3D for WebGL</p>", 6);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("specifies the use of SuperMap iClient3D for WebGL through the cesiumPath property of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer\n    ref=\"vcViewer\"\n    :cesiumPath=\"cesiumPath\"\n    :animation=\"animation\"\n    :timeline=\"timeline\"\n    :fullscreenButton=\"fullscreenButton\"\n    :fullscreenElement=\"fullscreenElement\"\n    @ready=\"onViewerReady\"\n    @leftClick=\"onLeftClick\"\n  >\n    <vc-navigation :offset=\"offset\" @compass-evt=\"onNavigationEvt\" :otherOpts=\"otherOpts\" @zoom-evt=\"onNavigationEvt\"></vc-navigation>\n    <!-- <vc-entity v-model:billboard=\"billboard\" ref=\"entity\" @click=\"onEntityClick\" :position=\"{lng: 108, lat: 32}\" :point=\"point\" :label=\"label\">\n      <vc-graphics-billboard ref=\"billboard\" image=\"https://zouyaoji.top/vue-cesium/favicon.png\"></vc-graphics-billboard>\n      <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n    </vc-entity> -->\n    <vc-layer-imagery :sortOrder=\"20\">\n      <vc-provider-imagery-osm></vc-provider-imagery-osm>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n      <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    </el-row>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        animation: true,\n        timeline: true,\n        fullscreenButton: true,\n        fullscreenElement: document.body,\n        point: {\n          pixelSize: 28,\n          color: 'red'\n        },\n        label: {\n          text: 'Hello World',\n          pixelOffset: [0, 150]\n        },\n        billboard: {},\n        offset: [10, 25],\n        otherOpts: {\n          offset: [0, 32],\n          position: 'bottom-right'\n        },\n        cesiumPath: 'https://www.supermapol.com/earth/Build/Cesium/Cesium.js'\n      }\n    },\n    mounted() {\n      this.$refs.vcViewer.createPromise.then(({ Cesium, viewer }) => {\n        console.log('viewer is loaded.')\n      })\n    },\n    methods: {\n      onViewerReady({ Cesium, viewer }) {\n        viewer.imageryLayers.removeAll()\n        console.log(viewer)\n      },\n      onNavigationEvt(e) {\n        console.log(e)\n      },\n      onEntityClick(e) {\n        console.log(e)\n      },\n      onLeftClick(e) {\n        console.log(e)\n      },\n      load() {\n        this.$refs.vcViewer.load().then(e => {\n          console.log(e)\n        })\n      },\n      unload() {\n        this.$refs.vcViewer.unload().then(e => {\n          console.log(e)\n        })\n      },\n      reload() {\n        this.$refs.vcViewer.reload().then(e => {\n          console.log(e)\n        })\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h3", {
  id: "reference"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  class: "header-anchor",
  href: "#reference"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Reference")], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Official website: "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  href: "http://support.supermap.com.cn:8090/webgl/web/index.html"
}, " SuperMap iClient3D for WebGL")])])], -1);

function vc_demo_supermapvue_type_template_id_09f20c52_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_demo_supermapvue_type_template_id_09f20c52_hoisted_1, [vc_demo_supermapvue_type_template_id_09f20c52_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    _: 1
  }), _hoisted_10, _hoisted_11, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/platforms/vc-demo-supermap.md?vue&type=template&id=09f20c52

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/platforms/vc-demo-supermap.md?vue&type=script&lang=ts

/* harmony default export */ var vc_demo_supermapvue_type_script_lang_ts = ({
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
        const _component_vc_navigation = _resolveComponent("vc-navigation");

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
            ref: "vcViewer",
            cesiumPath: _ctx.cesiumPath,
            animation: _ctx.animation,
            timeline: _ctx.timeline,
            fullscreenButton: _ctx.fullscreenButton,
            fullscreenElement: _ctx.fullscreenElement,
            onReady: _ctx.onViewerReady,
            onLeftClick: _ctx.onLeftClick
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_navigation, {
              offset: _ctx.offset,
              onCompassEvt: _ctx.onNavigationEvt,
              otherOpts: _ctx.otherOpts,
              onZoomEvt: _ctx.onNavigationEvt
            }, null, 8, ["offset", "onCompassEvt", "otherOpts", "onZoomEvt"]), _createVNode(_component_vc_layer_imagery, {
              sortOrder: 20
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_osm)]),
              _: 1
            })]),
            _: 1
          }, 8, ["cesiumPath", "animation", "timeline", "fullscreenButton", "fullscreenElement", "onReady", "onLeftClick"]), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_row, null, {
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
          })]),
          _: 1
        }, 512)]);
      }

      const democomponentExport = {
        data() {
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

        mounted() {
          this.$refs.vcViewer.createPromise.then(({
            Cesium,
            viewer
          }) => {
            console.log('viewer is loaded.');
          });
        },

        methods: {
          onViewerReady({
            Cesium,
            viewer
          }) {
            viewer.imageryLayers.removeAll();
            console.log(viewer);
          },

          onNavigationEvt(e) {
            console.log(e);
          },

          onEntityClick(e) {
            console.log(e);
          },

          onLeftClick(e) {
            console.log(e);
          },

          load() {
            this.$refs.vcViewer.load().then(e => {
              console.log(e);
            });
          },

          unload() {
            this.$refs.vcViewer.unload().then(e => {
              console.log(e);
            });
          },

          reload() {
            this.$refs.vcViewer.reload().then(e => {
              console.log(e);
            });
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
// CONCATENATED MODULE: ./website/docs/en-US/platforms/vc-demo-supermap.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/platforms/vc-demo-supermap.md



vc_demo_supermapvue_type_script_lang_ts.render = vc_demo_supermapvue_type_template_id_09f20c52_render

/* harmony default export */ var vc_demo_supermap = __webpack_exports__["default"] = (vc_demo_supermapvue_type_script_lang_ts);

/***/ })

}]);