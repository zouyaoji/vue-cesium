(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[203],{

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.26.10_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/providers/vc-terrain-provider-cesium.md?vue&type=template&id=250e80c0

const vc_terrain_provider_cesiumvue_type_template_id_250e80c0_hoisted_1 = {
  class: "content vue-cesium-doc"
};
const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.CesiumTerrainProvider", -1);
const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "url", -1);
const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.createWorldTerrain", -1);
const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "https://cesium.com/ion/", -1);
const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-terrain-provider-cesium"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件的基础用法。")], -1);
const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-terrain-provider-cesium"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加由 Cesium Ion 提供的在线地形瓦片服务。")])], -1);
const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-terrain-provider-cesium ref=\"provider\"></vc-terrain-provider-cesium>\n    <vc-layer-imagery>\n      <vc-imagery-provider-arcgis></vc-imagery-provider-arcgis>\n    </vc-layer-imagery>\n    <vc-navigation></vc-navigation>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n      <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const provider = ref(null)\n      let viewer = undefined\n      // methods\n      const unload = () => {\n        provider.value.unload()\n      }\n      const reload = () => {\n        provider.value.reload()\n      }\n      const load = () => {\n        provider.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        var target = new Cesium.Cartesian3(300770.50872389384, 5634912.131394585, 2978152.2865545116)\n        var offset = new Cesium.Cartesian3(6344.974098678562, -793.3419798081741, 2499.9508860763162)\n        viewer.camera.lookAt(target, offset)\n        viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)\n      }\n      return {\n        provider,\n        unload,\n        reload,\n        load,\n        onViewerReady\n      }\n    }\n  }\n</script>\n")], -1);
const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>url</td><td>string</td><td></td><td><code>required</code> 指定服务地址。</td></tr><tr><td>requestVertexNormals</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否请求其他光照信息，否则使用每个顶点法线。</td></tr><tr><td>requestWaterMask</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否请求水面数据。</td></tr><tr><td>requestMetadata</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否请求每个切片元数据。</td></tr><tr><td>ellipsoid</td><td>Cesium.Ellipsoid</td><td></td><td><code>optional</code> 指定参考椭球体。</td></tr><tr><td>credit</td><td>string</td><td></td><td><code>optional</code> 指定服务的描述信息</td></tr></tbody></table>", 1);
const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>errorEvent</td><td>TileProviderError</td><td>当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。</td></tr><tr><td>readyPromise</td><td>TerrainProvider</td><td>当图层提供者可用时触发, 返回 TerrainProvider 实例。</td></tr></tbody></table>", 1);
function vc_terrain_provider_cesiumvue_type_template_id_250e80c0_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");
  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");
  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");
  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");
  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_terrain_provider_cesiumvue_type_template_id_250e80c0_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcterrainprovidercesium",
    tabindex: "-1",
    content: "VcTerrainProviderCesium",
    href: "#vcterrainprovidercesium",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcTerrainProviderCesium "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcterrainprovidercesium"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [Object(vue_esm_browser["createTextVNode"])("加载 Cesium 格式地形，相当于初始化一个 "), _hoisted_2, Object(vue_esm_browser["createTextVNode"])(" 实例。如果 "), _hoisted_3, Object(vue_esm_browser["createTextVNode"])(" 为空，默认通过 "), _hoisted_4, Object(vue_esm_browser["createTextVNode"])(" 加载 CesiumIon 在线全球地形，需要 CesiumIon 授权， 具体可以到 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/ion/"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser["createTextVNode"])(" 申请一个账户，获取 Access Token。")]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("基础用法 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
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
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("属性 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-jian",
    tabindex: "-1",
    content: "事件",
    href: "#shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("事件 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "can-kao",
    tabindex: "-1",
    content: "参考",
    href: "#can-kao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("参考 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#can-kao"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createTextVNode"])("官方文档： "), Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/CesiumTerrainProvider.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("CesiumTerrainProvider")]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-terrain-provider-cesium.md?vue&type=template&id=250e80c0

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.26.10_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/providers/vc-terrain-provider-cesium.md?vue&type=script&lang=ts

/* harmony default export */ var vc_terrain_provider_cesiumvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;
      const _hoisted_1 = {
        class: "demo-toolbar"
      };
      function render(_ctx, _cache) {
        const _component_vc_terrain_provider_cesium = _resolveComponent("vc-terrain-provider-cesium");
        const _component_vc_imagery_provider_arcgis = _resolveComponent("vc-imagery-provider-arcgis");
        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");
        const _component_vc_navigation = _resolveComponent("vc-navigation");
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
            default: _withCtx(() => [_createVNode(_component_vc_terrain_provider_cesium, {
              ref: "provider"
            }, null, 512), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_arcgis)]),
              _: 1
            }), _createVNode(_component_vc_navigation)]),
            _: 1
          }, 8, ["onReady"]), _createElementVNode("div", _hoisted_1, [_createVNode(_component_el_row, null, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_createTextVNode("销毁")]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_createTextVNode("加载")]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_createTextVNode("重载")]),
              _: 1
            }, 8, ["onClick"])]),
            _: 1
          })])]),
          _: 1
        }, 512)]);
      }
      const {
        ref,
        getCurrentInstance
      } = vue_esm_browser;
      const democomponentExport = {
        setup() {
          // state
          const instance = getCurrentInstance();
          const provider = ref(null);
          let viewer = undefined;
          // methods
          const unload = () => {
            provider.value.unload();
          };
          const reload = () => {
            provider.value.reload();
          };
          const load = () => {
            provider.value.load();
          };
          const onViewerReady = ({
            Cesium,
            viewer
          }) => {
            var target = new Cesium.Cartesian3(300770.50872389384, 5634912.131394585, 2978152.2865545116);
            var offset = new Cesium.Cartesian3(6344.974098678562, -793.3419798081741, 2499.9508860763162);
            viewer.camera.lookAt(target, offset);
            viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
          };
          return {
            provider,
            unload,
            reload,
            load,
            onViewerReady
          };
        }
      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-terrain-provider-cesium.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-terrain-provider-cesium.md



vc_terrain_provider_cesiumvue_type_script_lang_ts.render = vc_terrain_provider_cesiumvue_type_template_id_250e80c0_render

/* harmony default export */ var vc_terrain_provider_cesium = __webpack_exports__["default"] = (vc_terrain_provider_cesiumvue_type_script_lang_ts);

/***/ })

}]);