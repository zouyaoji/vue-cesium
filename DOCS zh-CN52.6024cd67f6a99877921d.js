(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[143],{

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/platforms/vc-demo-dc-sdk.md?vue&type=template&id=3222c0b8

const vc_demo_dc_sdkvue_type_template_id_3222c0b8_hoisted_1 = {
  class: "content element-doc"
};

const vc_demo_dc_sdkvue_type_template_id_3222c0b8_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"dcsdk-demo\"><a class=\"header-anchor\" href=\"#dcsdk-demo\">¶</a> DCSDK Demo</h2><p>vue-cesium 使用数字视觉的 dc-sdk 开发时只需要在引入 VueCesium 时通过配置项 <code>cesiumPath</code> 指定为 dc-sdk 库地址即可。</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">VueCesium</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-cesium&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;vue-cesium/dist/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-title class_\">App</span> <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = <span class=\"hljs-title function_\">createApp</span>(<span class=\"hljs-title class_\">App</span>)\napp.<span class=\"hljs-title function_\">use</span>(<span class=\"hljs-title class_\">VueCesium</span>, {\n  <span class=\"hljs-attr\">cesiumPath</span>: <span class=\"hljs-string\">&#39;https://dc.dvgis.cn/libs/dc-sdk/dc.base.min.js&#39;</span>\n})\napp.<span class=\"hljs-title function_\">mount</span>(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code></pre><p>或者在 <code>vc-viewer</code> 组件上将 <code>cesiumPath</code> 地址指定为 dc-sdk 路径。 如下面的例子：</p><p><code>vc-viewer</code> 加载成功会返回 { Cesium, viewer, dcViewer }, 通过该 <code>dcViewer</code> 使用 dc-sdk API 进行相关开发即可， 如下面的例子：</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>使用 VueCesium 加载 dc-sdk</p>", 7);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("通过 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-viewer"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的 cesiumPath 属性指定使用 dc-sdk。")])], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer\n    ref=\"vcViewer\"\n    :cesiumPath=\"cesiumPath\"\n    :animation=\"animation\"\n    :timeline=\"timeline\"\n    :fullscreenButton=\"fullscreenButton\"\n    :fullscreenElement=\"fullscreenElement\"\n    @ready=\"onViewerReady\"\n    @leftClick=\"onLeftClick\"\n  >\n    <vc-navigation :offset=\"offset\" @compass-evt=\"onNavigationEvt\" :otherOpts=\"otherOpts\" @zoom-evt=\"onNavigationEvt\"></vc-navigation>\n    <vc-entity v-model:billboard=\"billboard\" ref=\"entity\" @click=\"onEntityClick\" :position=\"{lng: 108, lat: 32}\" :point=\"point\" :label=\"label\">\n      <vc-graphics-billboard ref=\"billboard\" image=\"https://zouyaoji.top/vue-cesium/favicon.png\"></vc-graphics-billboard>\n      <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n    </vc-entity>\n    <!-- 天地图注记 -->\n    <vc-layer-imagery :sortOrder=\"20\">\n      <vc-provider-imagery-tianditu mapStyle=\"cva_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n    <!-- 天地图影像 -->\n    <vc-layer-imagery :sortOrder=\"10\">\n      <vc-provider-imagery-tianditu mapStyle=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n      <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    </el-row>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        animation: true,\n        timeline: true,\n        fullscreenButton: true,\n        fullscreenElement: document.body,\n        point: {\n          pixelSize: 28,\n          color: 'red'\n        },\n        label: {\n          text: 'Hello World',\n          pixelOffset: [0, 150]\n        },\n        billboard: {},\n        offset: [10, 25],\n        otherOpts: {\n          offset: [0, 32],\n          position: 'bottom-right'\n        },\n        cesiumPath: 'https://dc.dvgis.cn/libs/dc-sdk/dc.base.min.js'\n      }\n    },\n    mounted() {\n      this.$refs.vcViewer.createPromise.then(({ Cesium, viewer }) => {\n        console.log('viewer is loaded.')\n      })\n    },\n    methods: {\n      onViewerReady({ Cesium, dcViewer }) {\n        console.log(dcViewer)\n        const baselayer = DC.ImageryLayerFactory.createAmapImageryLayer({\n          style: 'img'\n        })\n        dcViewer.addBaseLayer(baselayer)\n        const layer = new DC.HtmlLayer('layer')\n        dcViewer.addLayer(layer)\n        const positions = generatePosition(5)\n        positions.forEach((item, index) => {\n          const divIcon = new DC.DivIcon(\n            item,\n            `<div style=\"width:200px;background:rgba(255,255,0,0.2)\">我是一个div，你可以对我添加css样式和内容</div>`\n          )\n          layer.addOverlay(divIcon)\n        })\n\n        // dcViewer.flyToPosition(new DC.Position(120.472147621, 30.61004946, 65380.21, 14.0, -40.94))\n      },\n      onNavigationEvt(e) {\n        console.log(e)\n      },\n      onEntityClick(e) {\n        console.log(e)\n      },\n      onLeftClick(e) {\n        console.log(e)\n      },\n      load() {\n        this.$refs.vcViewer.load().then(e => {\n          console.log(e)\n        })\n      },\n      unload() {\n        this.$refs.vcViewer.unload().then(e => {\n          console.log(e)\n        })\n      },\n      reload() {\n        this.$refs.vcViewer.reload().then(e => {\n          console.log(e)\n        })\n      }\n    }\n  }\n  function generatePosition(num) {\n    var list = []\n    for (var i = 0; i < num; i++) {\n      var lng = 120.38105869 + Math.random() * 0.5\n      var lat = 31.10115627 + Math.random() * 0.5\n      list.push(new DC.Position(lng, lat))\n    }\n    return list\n  }\n</script>\n")], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h3", {
  id: "can-kao"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  class: "header-anchor",
  href: "#can-kao"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 参考")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("ul", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("li", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("官网："), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  href: "http://dc.dvgis.cn/#/index"
}, "dc-sdk")])])], -1);

function vc_demo_dc_sdkvue_type_template_id_3222c0b8_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_demo_dc_sdkvue_type_template_id_3222c0b8_hoisted_1, [vc_demo_dc_sdkvue_type_template_id_3222c0b8_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_10]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9]),
    _: 1
  }), _hoisted_11, _hoisted_12, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/platforms/vc-demo-dc-sdk.md?vue&type=template&id=3222c0b8

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/platforms/vc-demo-dc-sdk.md?vue&type=script&lang=ts

/* harmony default export */ var vc_demo_dc_sdkvue_type_script_lang_ts = ({
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

        const _component_vc_provider_imagery_tianditu = _resolveComponent("vc-provider-imagery-tianditu");

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
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_tianditu, {
                mapStyle: "cva_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            }), _createVNode(_component_vc_layer_imagery, {
              sortOrder: 10
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_tianditu, {
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
            cesiumPath: 'https://dc.dvgis.cn/libs/dc-sdk/dc.base.min.js'
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
            dcViewer
          }) {
            console.log(dcViewer);
            const baselayer = DC.ImageryLayerFactory.createAmapImageryLayer({
              style: 'img'
            });
            dcViewer.addBaseLayer(baselayer);
            const layer = new DC.HtmlLayer('layer');
            dcViewer.addLayer(layer);
            const positions = generatePosition(5);
            positions.forEach((item, index) => {
              const divIcon = new DC.DivIcon(item, `<div style="width:200px;background:rgba(255,255,0,0.2)">我是一个div，你可以对我添加css样式和内容</div>`);
              layer.addOverlay(divIcon);
            }); // dcViewer.flyToPosition(new DC.Position(120.472147621, 30.61004946, 65380.21, 14.0, -40.94))
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

      function generatePosition(num) {
        var list = [];

        for (var i = 0; i < num; i++) {
          var lng = 120.38105869 + Math.random() * 0.5;
          var lat = 31.10115627 + Math.random() * 0.5;
          list.push(new DC.Position(lng, lat));
        }

        return list;
      }

      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/platforms/vc-demo-dc-sdk.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/platforms/vc-demo-dc-sdk.md



vc_demo_dc_sdkvue_type_script_lang_ts.render = vc_demo_dc_sdkvue_type_template_id_3222c0b8_render

/* harmony default export */ var vc_demo_dc_sdk = __webpack_exports__["default"] = (vc_demo_dc_sdkvue_type_script_lang_ts);

/***/ })

}]);