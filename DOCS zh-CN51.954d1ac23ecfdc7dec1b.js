(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[139],{

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/platforms/vc-demo-earth-sdk.md?vue&type=template&id=a3410156

var vc_demo_earth_sdkvue_type_template_id_a3410156_hoisted_1 = {
  class: "content element-doc"
};

var vc_demo_earth_sdkvue_type_template_id_a3410156_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"earthsdk-demo\"><a class=\"header-anchor\" href=\"#earthsdk-demo\">¶</a> EarthSDK Demo</h2><p>vue-cesium 使用 CesiumLab 的 EarthSDK 开发时只需要在引入 VueCesium 时通过配置项 <code>cesiumPath</code> 指定为 EarthSDK 库地址即可。</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> VueCesium <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;vue-cesium/lib/theme-default/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(VueCesium, {\n  <span class=\"hljs-attr\">cesiumPath</span>: <span class=\"hljs-string\">&#39;https://earthsdk.com/v/last/XbsjEarth/XbsjEarth.js&#39;</span>\n})\napp.mount(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code></pre><p>或者在 <code>vc-viewer</code> 组件上将 <code>cesiumPath</code> 地址指定为 EarthSDK 路径。</p><p><code>vc-viewer</code> 加载成功会返回 { Cesium, viewer, earth }, 通过该 <code>earth</code> 使用 EarthSDK API 进行相关开发即可， 如下面的例子：</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>使用 VueCesium 加载 EarthSDK</p>", 7);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("通过 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 的 cesiumPath 属性指定使用 EarthSDK。")])], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer\n    ref=\"vcViewer\"\n    :cesiumPath=\"cesiumPath\"\n    :animation=\"animation\"\n    :timeline=\"timeline\"\n    :fullscreenButton=\"fullscreenButton\"\n    :fullscreenElement=\"fullscreenElement\"\n    @ready=\"onViewerReady\"\n    @leftClick=\"onLeftClick\"\n  >\n    <vc-navigation :offset=\"offset\" @compass-evt=\"onNavigationEvt\" :otherOpts=\"otherOpts\" @zoom-evt=\"onNavigationEvt\"></vc-navigation>\n    <vc-entity v-model:billboard=\"billboard\" ref=\"entity\" @click=\"onEntityClick\" :position=\"{lng: 108, lat: 32}\" :point=\"point\" :label=\"label\">\n      <vc-graphics-billboard ref=\"billboard\" image=\"https://zouyaoji.top/vue-cesium/favicon.png\"></vc-graphics-billboard>\n      <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n    </vc-entity>\n    <!-- 天地图注记 -->\n    <vc-layer-imagery :sortOrder=\"20\">\n      <vc-provider-imagery-tianditu mapStyle=\"cva_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n    <!-- 天地图影像 -->\n    <vc-layer-imagery :sortOrder=\"10\">\n      <vc-provider-imagery-tianditu mapStyle=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n      <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    </el-row>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        animation: true,\n        timeline: true,\n        fullscreenButton: true,\n        fullscreenElement: document.body,\n        point: {\n          pixelSize: 28,\n          color: 'red'\n        },\n        label: {\n          text: 'Hello World',\n          pixelOffset: [0, 150]\n        },\n        billboard: {},\n        offset: [10, 25],\n        otherOpts: {\n          offset: [0, 32],\n          position: 'bottom-right'\n        },\n        cesiumPath: 'https://earthsdk.com/v/last/XbsjEarth/XbsjEarth.js'\n      }\n    },\n    mounted() {\n      this.$refs.vcViewer.createPromise.then(({ Cesium, viewer }) => {\n        console.log('viewer is loaded.')\n      })\n    },\n    methods: {\n      onViewerReady({ Cesium, viewer, earth }) {\n        console.log(earth)\n        // 1.1.2 场景配置\n        earth.sceneTree.root = {\n          expand: true,\n          title: '预览场景',\n          children: [\n            {\n              ref: 'polyline1',\n              czmObject: {\n                xbsjType: 'Polyline',\n                positions: [\n                  [1.6049052178907162, 0.4547675537396452, 0],\n                  [2.266206367018494, 0.4857724702174004, -5.6841204016160695e-9],\n                  [2.8083374819013205, 0.9842980731992482, -6.859619106471648e-9]\n                ]\n              }\n            },\n            {\n              czmObject: {\n                name: '默认影像',\n                xbsjType: 'Imagery',\n                xbsjImageryProvider: XE.Obj.Imagery.defaultImageryProviderConfig\n              }\n            }\n          ]\n        }\n        var polyline1 = earth.sceneTree.$refs.polyline1.czmObject\n        // 1.1.3 设置相机位置\n        // earth.camera.position.toString()和earth.camera.toAllJSONStr()这两个方法可获取相机位置\n        earth.camera.position = [1.9801824720243058, 0.5645924417726427, 8556103.623693792]\n        earth.camera.rotation = [2.6645352591003757e-15, -1.5694528555019995, 0]\n        // 1.1.3 设置初始值\n        polyline1.width = 4\n      },\n      onNavigationEvt(e) {\n        console.log(e)\n      },\n      onEntityClick(e) {\n        console.log(e)\n      },\n      onLeftClick(e) {\n        console.log(e)\n      },\n      load() {\n        this.$refs.vcViewer.load().then(e => {\n          console.log(e)\n        })\n      },\n      unload() {\n        this.$refs.vcViewer.unload().then(e => {\n          console.log(e)\n        })\n      },\n      reload() {\n        this.$refs.vcViewer.reload().then(e => {\n          console.log(e)\n        })\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h3", {
  id: "can-kao"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#can-kao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 参考")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("li", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("EarthSDK 官网： "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("strong", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  href: "https://www.earthsdk.com/"
}, "EarthSDK")])])], -1);

function vc_demo_earth_sdkvue_type_template_id_a3410156_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_demo_earth_sdkvue_type_template_id_a3410156_hoisted_1, [vc_demo_earth_sdkvue_type_template_id_a3410156_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_11, _hoisted_12, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/platforms/vc-demo-earth-sdk.md?vue&type=template&id=a3410156

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/platforms/vc-demo-earth-sdk.md?vue&type=script&lang=ts


/* harmony default export */ var vc_demo_earth_sdkvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

      function render(_ctx, _cache) {
        var _component_vc_navigation = _resolveComponent("vc-navigation");

        var _component_vc_graphics_billboard = _resolveComponent("vc-graphics-billboard");

        var _component_vc_graphics_rectangle = _resolveComponent("vc-graphics-rectangle");

        var _component_vc_entity = _resolveComponent("vc-entity");

        var _component_vc_provider_imagery_tianditu = _resolveComponent("vc-provider-imagery-tianditu");

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
                }, null, 8, ["offset", "onCompassEvt", "otherOpts", "onZoomEvt"]), _createVNode(_component_vc_entity, {
                  billboard: _ctx.billboard,
                  "onUpdate:billboard": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.billboard = $event;
                  }),
                  ref: "entity",
                  onClick: _ctx.onEntityClick,
                  position: {
                    lng: 108,
                    lat: 32
                  },
                  point: _ctx.point,
                  label: _ctx.label
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_billboard, {
                      ref: "billboard",
                      image: "https://zouyaoji.top/vue-cesium/favicon.png"
                    }, null, 512), _createVNode(_component_vc_graphics_rectangle, {
                      coordinates: [130, 20, 80, 25],
                      material: "green"
                    })];
                  }),
                  _: 1
                }, 8, ["billboard", "onClick", "point", "label"]), _createVNode(_component_vc_layer_imagery, {
                  sortOrder: 20
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_tianditu, {
                      mapStyle: "cva_c",
                      token: "436ce7e50d27eede2f2929307e6b33c0"
                    })];
                  }),
                  _: 1
                }), _createVNode(_component_vc_layer_imagery, {
                  sortOrder: 10
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_tianditu, {
                      mapStyle: "img_c",
                      token: "436ce7e50d27eede2f2929307e6b33c0"
                    })];
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
            cesiumPath: 'https://earthsdk.com/v/last/XbsjEarth/XbsjEarth.js'
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
                viewer = _ref2.viewer,
                earth = _ref2.earth;
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
              }, {
                czmObject: {
                  name: '默认影像',
                  xbsjType: 'Imagery',
                  xbsjImageryProvider: XE.Obj.Imagery.defaultImageryProviderConfig
                }
              }]
            };
            var polyline1 = earth.sceneTree.$refs.polyline1.czmObject; // 1.1.3 设置相机位置
            // earth.camera.position.toString()和earth.camera.toAllJSONStr()这两个方法可获取相机位置

            earth.camera.position = [1.9801824720243058, 0.5645924417726427, 8556103.623693792];
            earth.camera.rotation = [2.6645352591003757e-15, -1.5694528555019995, 0]; // 1.1.3 设置初始值

            polyline1.width = 4;
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
// CONCATENATED MODULE: ./website/docs/zh-CN/platforms/vc-demo-earth-sdk.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/platforms/vc-demo-earth-sdk.md



vc_demo_earth_sdkvue_type_script_lang_ts.render = vc_demo_earth_sdkvue_type_template_id_a3410156_render

/* harmony default export */ var vc_demo_earth_sdk = __webpack_exports__["default"] = (vc_demo_earth_sdkvue_type_script_lang_ts);

/***/ })

}]);