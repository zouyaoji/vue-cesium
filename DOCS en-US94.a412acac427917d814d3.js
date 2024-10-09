(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/registry.npmjs.org+vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmjs.org+babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/registry.npmjs.org+vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/registry.npmjs.org+vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/providers/vc-terrain-provider-arcgis.md?vue&type=template&id=3e928260

const vc_terrain_provider_arcgisvue_type_template_id_3e928260_hoisted_1 = {
  class: "content vue-cesium-doc"
};
const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading a terrain provider that produces terrain geometry by tessellating height maps retrieved from Elevation Tiles of an ArcGIS ImageService. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.ArcGISTiledElevationTerrainProvider"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance.")], -1);
const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage of the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-terrain-provider-arcgis"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" component.")], -1);
const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-terrain-provider-arcgis"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add the online terrain tile provided by an ArcGIS ImageService.")])], -1);
const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\" :imageryProvider=\"imageryProvider\">\n    <vc-terrain-provider-arcgis ref=\"provider\"></vc-terrain-provider-arcgis>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n      <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const provider = ref(null)\n      const imageryProvider = ref(null)\n      let viewer = undefined\n      // methods\n      const unload = () => {\n        provider.value.unload()\n      }\n      const reload = () => {\n        provider.value.reload()\n      }\n      const load = () => {\n        provider.value.load()\n      }\n      const onViewerReady = async ({ Cesium, viewer }) => {\n        imageryProvider.value = await Cesium.ArcGisMapServerImageryProvider.fromUrl(\n          'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'\n        )\n        var target = new Cesium.Cartesian3(300770.50872389384, 5634912.131394585, 2978152.2865545116)\n        var offset = new Cesium.Cartesian3(6344.974098678562, -793.3419798081741, 2499.9508860763162)\n        viewer.camera.lookAt(target, offset)\n        viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)\n      }\n      return {\n        provider,\n        unload,\n        reload,\n        load,\n        imageryProvider,\n        onViewerReady\n      }\n    }\n  }\n</script>\n")], -1);
const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>url</td><td>string | Cesium.Resource</td><td><code>&#39;https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer&#39;</code></td><td><code>required</code> The URL of the ArcGIS ImageServer service.</td></tr><tr><td>token</td><td>string</td><td></td><td><code>optional</code> The authorization token to use to connect to the service.</td></tr><tr><td>ellipsoid</td><td>Cesium.Ellipsoid</td><td></td><td><code>optional</code> The ellipsoid. If the tilingScheme is specified, this parameter is ignored and the tiling scheme&#39;s ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.</td></tr></tbody></table>", 1);
const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the VcTerrainProviderArcgis is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the VcTerrainProviderArcgis is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the VcTerrainProviderArcgis is destroyed.</td></tr><tr><td>errorEvent</td><td>(evt: Cesium.TileProviderError)</td><td>Triggers when the terrrain provider encounters an asynchronous error.</td></tr><tr><td>readyPromise</td><td>(evt: boolean)</td><td>Triggers when the provider is ready for use.</td></tr></tbody></table>", 1);
function vc_terrain_provider_arcgisvue_type_template_id_3e928260_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");
  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");
  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");
  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");
  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_terrain_provider_arcgisvue_type_template_id_3e928260_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcterrainproviderarcgis",
    tabindex: "-1",
    content: "VcTerrainProviderArcgis",
    href: "#vcterrainproviderarcgis",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcTerrainProviderArcgis "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcterrainproviderarcgis"
    })]),
    _: 1
  }), _hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Basic usage "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_4]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Props "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Events "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Reference "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: "), Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/ArcGISTiledElevationTerrainProvider.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("ArcGISTiledElevationTerrainProvider")]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-terrain-provider-arcgis.md?vue&type=template&id=3e928260

// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmjs.org+babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/registry.npmjs.org+vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/providers/vc-terrain-provider-arcgis.md?vue&type=script&lang=ts

/* harmony default export */ var vc_terrain_provider_arcgisvue_type_script_lang_ts = ({
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
        const _component_vc_terrain_provider_arcgis = _resolveComponent("vc-terrain-provider-arcgis");
        const _component_vc_viewer = _resolveComponent("vc-viewer");
        const _component_el_button = _resolveComponent("el-button");
        const _component_el_row = _resolveComponent("el-row");
        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.onViewerReady,
            imageryProvider: _ctx.imageryProvider
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_terrain_provider_arcgis, {
              ref: "provider"
            }, null, 512)]),
            _: 1
          }, 8, ["onReady", "imageryProvider"]), _createElementVNode("div", _hoisted_1, [_createVNode(_component_el_row, null, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_createTextVNode("Unload")]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_createTextVNode("Load")]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_createTextVNode("Reload")]),
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
          const imageryProvider = ref(null);
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
          const onViewerReady = async ({
            Cesium,
            viewer
          }) => {
            imageryProvider.value = await Cesium.ArcGisMapServerImageryProvider.fromUrl('https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer');
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
            imageryProvider,
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
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-terrain-provider-arcgis.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/providers/vc-terrain-provider-arcgis.md



vc_terrain_provider_arcgisvue_type_script_lang_ts.render = vc_terrain_provider_arcgisvue_type_template_id_3e928260_render

/* harmony default export */ var vc_terrain_provider_arcgis = __webpack_exports__["default"] = (vc_terrain_provider_arcgisvue_type_script_lang_ts);

/***/ })

}]);