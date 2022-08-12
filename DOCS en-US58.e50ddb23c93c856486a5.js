(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_xtlouzbwsjm2tieu75n2ogelwy/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/platforms/vc-demo-earth-sdk.md?vue&type=template&id=6d45ab90

const vc_demo_earth_sdkvue_type_template_id_6d45ab90_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_demo_earth_sdkvue_type_template_id_6d45ab90_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("EarthSDK Demo ");

const vc_demo_earth_sdkvue_type_template_id_6d45ab90_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>When vue-cesium uses CesiumLab&#39;s EarthSDK to develop, you only need to specify the address of the EarthSDK library through the configuration item <code>cesiumPath</code> when VueCesium is introduced.</p><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">VueCesium</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;vue-cesium/dist/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">App</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = <span class=\"hljs-title function_\">createApp</span>(<span class=\"hljs-title class_\">App</span>)\napp.<span class=\"hljs-title function_\">use</span>(<span class=\"hljs-title class_\">VueCesium</span>, {\n  <span class=\"hljs-attr\">cesiumPath</span>: <span class=\"hljs-string\">&#39;https://earthsdk.com/v/last/XbsjEarth/XbsjEarth.js&#39;</span>\n})\napp.<span class=\"hljs-title function_\">mount</span>(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code><span class=\"lang-mark\">js</span></pre><p>Or specify the address of cesiumPath as the EarthSDK path on the vc-viewer component.</p><p>If <code>vc-viewer</code> is loaded successfully, it will return {Cesium, viewer, earth }, through the <code>earth</code>, use the EarthSDK API for related development, as shown in the following example:</p>", 4);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Use VueCesium to load EarthSDK", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("specifies the use of EarthSDK through the cesiumPath attribute of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".")])], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer\n    ref=\"vcViewer\"\n    :cesiumPath=\"cesiumPath\"\n    :animation=\"animation\"\n    :timeline=\"timeline\"\n    :fullscreenButton=\"fullscreenButton\"\n    :fullscreenElement=\"fullscreenElement\"\n    @ready=\"onViewerReady\"\n    @leftClick=\"onLeftClick\"\n  >\n    <vc-navigation :offset=\"offset\" @compass-evt=\"onNavigationEvt\" :otherOpts=\"otherOpts\" @zoom-evt=\"onNavigationEvt\"></vc-navigation>\n    <vc-entity v-model:billboard=\"billboard\" ref=\"entity\" @click=\"onEntityClick\" :position=\"{lng: 108, lat: 32}\" :point=\"point\" :label=\"label\">\n      <vc-graphics-billboard ref=\"billboard\" image=\"https://zouyaoji.top/vue-cesium/favicon.png\"></vc-graphics-billboard>\n      <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n    </vc-entity>\n    <vc-layer-imagery :sort-order=\"20\">\n      <vc-imagery-provider-osm></vc-imagery-provider-osm>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n      <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    </el-row>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        animation: true,\n        timeline: true,\n        fullscreenButton: true,\n        fullscreenElement: document.body,\n        point: {\n          pixelSize: 28,\n          color: 'red'\n        },\n        label: {\n          text: 'Hello World',\n          pixelOffset: [0, 150]\n        },\n        billboard: {},\n        offset: [10, 25],\n        otherOpts: {\n          offset: [0, 32],\n          position: 'bottom-right'\n        },\n        cesiumPath: 'https://earthsdk.com/v/last/XbsjEarth/XbsjEarth.js'\n      }\n    },\n    mounted() {\n      this.$refs.vcViewer.creatingPromise.then(({ Cesium, viewer }) => {\n        console.log('viewer is loaded.')\n      })\n    },\n    methods: {\n      onViewerReady({ Cesium, viewer, earth }) {\n        console.log(earth)\n        // 1.1.2 场景配置\n        earth.sceneTree.root = {\n          expand: true,\n          title: '预览场景',\n          children: [\n            {\n              ref: 'polyline1',\n              czmObject: {\n                xbsjType: 'Polyline',\n                positions: [\n                  [1.6049052178907162, 0.4547675537396452, 0],\n                  [2.266206367018494, 0.4857724702174004, -5.6841204016160695e-9],\n                  [2.8083374819013205, 0.9842980731992482, -6.859619106471648e-9]\n                ]\n              }\n            }\n            // {\n            //   czmObject: {\n            //     name: '默认影像',\n            //     xbsjType: 'Imagery',\n            //     xbsjImageryProvider: XE.Obj.Imagery.defaultImageryProviderConfig\n            //   }\n            // }\n          ]\n        }\n        var polyline1 = earth.sceneTree.$refs.polyline1.czmObject\n        // 1.1.3 设置相机位置\n        // earth.camera.position.toString()和earth.camera.toAllJSONStr()这两个方法可获取相机位置\n        earth.camera.position = [1.9801824720243058, 0.5645924417726427, 8556103.623693792]\n        earth.camera.rotation = [2.6645352591003757e-15, -1.5694528555019995, 0]\n        // 1.1.3 设置初始值\n        polyline1.width = 4\n      },\n      onNavigationEvt(e) {\n        console.log(e)\n      },\n      onEntityClick(e) {\n        console.log(e)\n      },\n      onLeftClick(e) {\n        console.log(e)\n      },\n      load() {\n        this.$refs.vcViewer.load().then(e => {\n          console.log(e)\n        })\n      },\n      unload() {\n        this.$refs.vcViewer.unload().then(e => {\n          console.log(e)\n        })\n      },\n      reload() {\n        this.$refs.vcViewer.reload().then(e => {\n          console.log(e)\n        })\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Official website: ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("EarthSDK");

function vc_demo_earth_sdkvue_type_template_id_6d45ab90_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_demo_earth_sdkvue_type_template_id_6d45ab90_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "earthsdk-demo",
    tabindex: "-1",
    content: "EarthSDK Demo",
    href: "#earthsdk-demo",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_demo_earth_sdkvue_type_template_id_6d45ab90_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#earthsdk-demo"
    })]),
    _: 1
  }), vc_demo_earth_sdkvue_type_template_id_6d45ab90_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_10]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_12, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://www.earthsdk.com/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/platforms/vc-demo-earth-sdk.md?vue&type=template&id=6d45ab90

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_xtlouzbwsjm2tieu75n2ogelwy/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/platforms/vc-demo-earth-sdk.md?vue&type=script&lang=ts

/* harmony default export */ var vc_demo_earth_sdkvue_type_script_lang_ts = ({
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

        const _component_vc_graphics_billboard = _resolveComponent("vc-graphics-billboard");

        const _component_vc_graphics_rectangle = _resolveComponent("vc-graphics-rectangle");

        const _component_vc_entity = _resolveComponent("vc-entity");

        const _component_vc_imagery_provider_osm = _resolveComponent("vc-imagery-provider-osm");

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
            }, null, 8, ["offset", "onCompassEvt", "otherOpts", "onZoomEvt"]), _createVNode(_component_vc_entity, {
              billboard: _ctx.billboard,
              "onUpdate:billboard": _cache[0] || (_cache[0] = $event => _ctx.billboard = $event),
              ref: "entity",
              onClick: _ctx.onEntityClick,
              position: {
                lng: 108,
                lat: 32
              },
              point: _ctx.point,
              label: _ctx.label
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_billboard, {
                ref: "billboard",
                image: "https://zouyaoji.top/vue-cesium/favicon.png"
              }, null, 512), _createVNode(_component_vc_graphics_rectangle, {
                coordinates: [130, 20, 80, 25],
                material: "green"
              })]),
              _: 1
            }, 8, ["billboard", "onClick", "point", "label"]), _createVNode(_component_vc_layer_imagery, {
              "sort-order": 20
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_osm)]),
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
            cesiumPath: 'https://earthsdk.com/v/last/XbsjEarth/XbsjEarth.js'
          };
        },

        mounted() {
          this.$refs.vcViewer.creatingPromise.then(_ref => {
            let {
              Cesium,
              viewer
            } = _ref;
            console.log('viewer is loaded.');
          });
        },

        methods: {
          onViewerReady(_ref2) {
            let {
              Cesium,
              viewer,
              earth
            } = _ref2;
            console.log(earth); // 1.1.2 场景配置

            earth.sceneTree.root = {
              expand: true,
              title: '预览场景',
              children: [{
                ref: 'polyline1',
                czmObject: {
                  xbsjType: 'Polyline',
                  positions: [[1.6049052178907162, 0.4547675537396452, 0], [2.266206367018494, 0.4857724702174004, -5.6841204016160695e-9], [2.8083374819013205, 0.9842980731992482, -6.859619106471648e-9]]
                }
              } // {
              //   czmObject: {
              //     name: '默认影像',
              //     xbsjType: 'Imagery',
              //     xbsjImageryProvider: XE.Obj.Imagery.defaultImageryProviderConfig
              //   }
              // }
              ]
            };
            var polyline1 = earth.sceneTree.$refs.polyline1.czmObject; // 1.1.3 设置相机位置
            // earth.camera.position.toString()和earth.camera.toAllJSONStr()这两个方法可获取相机位置

            earth.camera.position = [1.9801824720243058, 0.5645924417726427, 8556103.623693792];
            earth.camera.rotation = [2.6645352591003757e-15, -1.5694528555019995, 0]; // 1.1.3 设置初始值

            polyline1.width = 4;
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
// CONCATENATED MODULE: ./website/docs/en-US/platforms/vc-demo-earth-sdk.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/platforms/vc-demo-earth-sdk.md



vc_demo_earth_sdkvue_type_script_lang_ts.render = vc_demo_earth_sdkvue_type_template_id_6d45ab90_render

/* harmony default export */ var vc_demo_earth_sdk = __webpack_exports__["default"] = (vc_demo_earth_sdkvue_type_script_lang_ts);

/***/ })

}]);