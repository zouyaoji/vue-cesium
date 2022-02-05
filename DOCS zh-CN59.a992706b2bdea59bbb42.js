(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[154],{

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.26/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/platforms/vc-demo-mars3d.md?vue&type=template&id=348d9bc2

const vc_demo_mars3dvue_type_template_id_348d9bc2_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_demo_mars3dvue_type_template_id_348d9bc2_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Mars3D Demo ");

const vc_demo_mars3dvue_type_template_id_348d9bc2_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("vue-cesium 使用火星科技的 ");

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Mars3D");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 开发时只需要在引入 VueCesium 时通过配置项 ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "cesiumPath", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定为 mars3d 库的");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "目录", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("地址。");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">VueCesium</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;vue-cesium/dist/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">App</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = <span class=\"hljs-title function_\">createApp</span>(<span class=\"hljs-title class_\">App</span>)\napp.<span class=\"hljs-title function_\">use</span>(<span class=\"hljs-title class_\">VueCesium</span>, {\n  <span class=\"hljs-attr\">cesiumPath</span>: <span class=\"hljs-string\">&#39;https://mars3d.cn/lib/&#39;</span>,\n  <span class=\"hljs-comment\">// 要引入的资源库,可选。不指定的话只加载 mars3d 必要资源</span>\n  <span class=\"hljs-attr\">cfg</span>: {\n    <span class=\"hljs-attr\">include</span>: <span class=\"hljs-string\">&#39;turf,mars3d&#39;</span>\n  }\n})\napp.<span class=\"hljs-title function_\">mount</span>(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code><span class=\"lang-mark\">js</span></pre><p>或者在 <code>vc-viewer</code> 组件上将 <code>cesiumPath</code> 地址指定为 mars3d 库的<strong>目录</strong>。</p>", 2);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer", -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 加载成功会返回 { Cesium, viewer, map }, 通过该 ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "map", -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 使用 ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("mars3d 教程");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 和 ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("mars3d API");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 进行相关开发即可， 如下面的例子：");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "使用 VueCesium 加载火星科技 Mars3D", -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("通过 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的 cesiumPath 属性指定使用 Mars3D")])], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer\n    ref=\"vcViewer\"\n    :cesiumPath=\"cesiumPath\"\n    :animation=\"animation\"\n    :timeline=\"timeline\"\n    :fullscreenButton=\"fullscreenButton\"\n    :fullscreenElement=\"fullscreenElement\"\n    @ready=\"onViewerReady\"\n    @leftClick=\"onLeftClick\"\n  >\n    <vc-navigation :offset=\"offset\" @compass-evt=\"onNavigationEvt\" :otherOpts=\"otherOpts\" @zoom-evt=\"onNavigationEvt\"></vc-navigation>\n    <vc-entity v-model:billboard=\"billboard\" ref=\"entity\" @click=\"onEntityClick\" :position=\"{lng: 108, lat: 32}\" :point=\"point\" :label=\"label\">\n      <vc-graphics-billboard ref=\"billboard\" image=\"https://zouyaoji.top/vue-cesium/favicon.png\"></vc-graphics-billboard>\n      <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n    </vc-entity>\n    <!-- 天地图注记 -->\n    <vc-layer-imagery :sortOrder=\"20\">\n      <vc-imagery-provider-tianditu mapStyle=\"cva_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n    <!-- 天地图影像 -->\n    <vc-layer-imagery :sortOrder=\"10\">\n      <vc-imagery-provider-tianditu mapStyle=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n      <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    </el-row>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        animation: true,\n        timeline: true,\n        fullscreenButton: true,\n        fullscreenElement: document.body,\n        point: {\n          pixelSize: 28,\n          color: 'red'\n        },\n        label: {\n          text: 'Hello World',\n          pixelOffset: [0, 150]\n        },\n        billboard: {},\n        offset: [10, 25],\n        otherOpts: {\n          offset: [0, 32],\n          position: 'bottom-right'\n        },\n        cesiumPath: 'https://mars3d.cn/lib/'\n      }\n    },\n    mounted() {\n      this.$refs.vcViewer.createPromise.then(({ Cesium, viewer }) => {\n        console.log('viewer is loaded.')\n      })\n    },\n    methods: {\n      onViewerReady({ Cesium, viewer, map }) {\n        console.log(map)\n      },\n      onNavigationEvt(e) {\n        console.log(e)\n      },\n      onEntityClick(e) {\n        console.log(e)\n      },\n      onLeftClick(e) {\n        console.log(e)\n      },\n      load() {\n        this.$refs.vcViewer.load().then(e => {\n          console.log(e)\n        })\n      },\n      unload() {\n        this.$refs.vcViewer.unload().then(e => {\n          console.log(e)\n        })\n      },\n      reload() {\n        this.$refs.vcViewer.reload().then(e => {\n          console.log(e)\n        })\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Mars3D 平台官网： ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("http://mars3d.cn");

function vc_demo_mars3dvue_type_template_id_348d9bc2_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_demo_mars3dvue_type_template_id_348d9bc2_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "marsthreed-demo",
    tabindex: "-1",
    content: "Mars3D Demo",
    href: "#marsthreed-demo",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_demo_mars3dvue_type_template_id_348d9bc2_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#marsthreed-demo"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [vc_demo_mars3dvue_type_template_id_348d9bc2_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "http://mars3d.cn/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_4]),
    _: 1
  }), _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9]), _hoisted_10, Object(vue_esm_browser["createElementVNode"])("p", null, [_hoisted_12, _hoisted_13, _hoisted_14, _hoisted_15, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "http://mars3d.cn/doc"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_16]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "http://mars3d.cn/api/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_18]),
    _: 1
  }), _hoisted_19]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_23]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_22]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "can-kao",
    tabindex: "-1",
    content: "参考",
    href: "#can-kao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_24, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#can-kao"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_25, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "http://mars3d.cn/example"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_26]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/platforms/vc-demo-mars3d.md?vue&type=template&id=348d9bc2

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/platforms/vc-demo-mars3d.md?vue&type=script&lang=ts

/* harmony default export */ var vc_demo_mars3dvue_type_script_lang_ts = ({
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
        const _component_vc_navigation = _resolveComponent("vc-navigation");

        const _component_vc_graphics_billboard = _resolveComponent("vc-graphics-billboard");

        const _component_vc_graphics_rectangle = _resolveComponent("vc-graphics-rectangle");

        const _component_vc_entity = _resolveComponent("vc-entity");

        const _component_vc_imagery_provider_tianditu = _resolveComponent("vc-imagery-provider-tianditu");

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
              sortOrder: 20
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_tianditu, {
                mapStyle: "cva_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            }), _createVNode(_component_vc_layer_imagery, {
              sortOrder: 10
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_tianditu, {
                mapStyle: "img_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
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
            cesiumPath: 'https://mars3d.cn/lib/'
          };
        },

        mounted() {
          this.$refs.vcViewer.createPromise.then(_ref => {
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
              map
            } = _ref2;
            console.log(map);
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
// CONCATENATED MODULE: ./website/docs/zh-CN/platforms/vc-demo-mars3d.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/platforms/vc-demo-mars3d.md



vc_demo_mars3dvue_type_script_lang_ts.render = vc_demo_mars3dvue_type_template_id_348d9bc2_render

/* harmony default export */ var vc_demo_mars3d = __webpack_exports__["default"] = (vc_demo_mars3dvue_type_script_lang_ts);

/***/ })

}]);