(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/vc-config-provider.md?vue&type=template&id=e44f4446

const vc_config_providervue_type_template_id_e44f4446_hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h1", null, "VcConfigProvider", -1);

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Config Provider is used for providing global configurations, which enables your entire application to access these configurations everywhere", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Basic usage")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-config-provider"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".")], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-config-provider"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to provide language configuration.")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-config-provider :locale=\"locale\">\n    <vc-viewer>\n      <vc-navigation ref=\"navigation\" :offset=\"[35, 35]\"></vc-navigation>\n      <vc-layer-imagery :sortOrder=\"20\">\n        <vc-provider-imagery-tianditu mapStyle=\"cva_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n      </vc-layer-imagery>\n      <vc-layer-imagery :sortOrder=\"10\">\n        <vc-provider-imagery-tianditu mapStyle=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\" ref=\"provider\"></vc-provider-imagery-tianditu>\n      </vc-layer-imagery>\n    </vc-viewer>\n  </vc-config-provider>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"toggleLanguage\">Switch</el-button>\n  </el-row>\n</el-row>\n<script>\n  // import enUS from 'vue-cesium/es/locale/lang/en-us'\n  const locale1 = {\n    name: 'en-us',\n    nativeName: 'English (US)',\n    vc: {\n      loadError: 'needs to be child of VcViewer',\n      navigation: {\n        compass: {\n          outerTip: 'Drag outer ring: rotate view. Double-click: reset view.',\n          innerTip: 'Drag inner gyroscope: free orbit. TIP: You can also free orbit by holding the CTRL key and dragging the map.',\n          title: 'Click and drag to rotate the camera.'\n        },\n        zoomCotrol: {\n          zoomInTip: 'Zoom in',\n          zoomResetTip: 'Reset zoom',\n          zoomOutTip: 'Zoom out'\n        },\n        print: {\n          printTip: 'Viewer screenshot/print',\n          printViewTitle: 'VueCesium Print View',\n          credit: 'Map Credits',\n          screenshot: 'Screenshot'\n        },\n        myLocation: {\n          myLocationTip: 'Centre map at your current location',\n          positioning: 'Positioning...',\n          fail: 'Positioning failed',\n          centreMap: 'My Location',\n          lat: 'Lat',\n          lng: 'Lng',\n          address: 'Address'\n        },\n        statusBar: {\n          lat: 'Lat',\n          lng: 'Lng',\n          zone: 'ZONE',\n          e: 'E',\n          n: 'N',\n          elev: 'Elev',\n          level: 'Level',\n          heading: 'H',\n          pitch: 'P',\n          roll: 'R',\n          cameraHeight: 'CameraH',\n          tip: 'Click to switch the mouse display coordinates to UTM projection coordinates'\n        }\n      }\n    }\n  }\n  const locale2 = {\n    name: 'zh-hans',\n    nativeName: '中文(简体)',\n    vc: {\n      loadError: '加载失败，必须作为 VcViewer 的子组件加载。',\n      navigation: {\n        compass: {\n          outerTip: '旋转视图：顺/逆时针方向拖拽罗盘外环。\\n重置视图：双击罗盘外环。',\n          innerTip: '翻转视图：由内环向外环拖拽罗盘。\\n 或者按住 Ctrl 键的同时拖拽地图。',\n          title: '按住鼠标拖拽旋转相机。'\n        },\n        zoomCotrol: {\n          zoomInTip: '放大',\n          zoomResetTip: '重置视图',\n          zoomOutTip: '缩小'\n        },\n        print: {\n          printTip: '场景截图/打印',\n          printViewTitle: '打印预览',\n          credit: '地图版权',\n          screenshot: '场景截图'\n        },\n        myLocation: {\n          myLocationTip: '定位您的位置',\n          positioning: '定位中...',\n          fail: '定位失败',\n          centreMap: '我的位置',\n          lat: '纬度',\n          lng: '经度',\n          address: '地址'\n        },\n        statusBar: {\n          lat: '纬度',\n          lng: '经度',\n          zone: '带号',\n          e: 'X',\n          n: 'Y',\n          elev: '高程',\n          level: '层级',\n          heading: '方位',\n          pitch: '俯仰',\n          roll: '侧翻',\n          cameraHeight: '视高',\n          tip: '点击切换鼠标显示坐标为 UTM 投影坐标'\n        }\n      }\n    }\n  }\n  export default {\n    data() {\n      return {\n        // locale: enUS\n        locale: locale1\n      }\n    },\n    methods: {\n      toggleLanguage() {\n        if (this.locale.name === 'zh-hans') {\n          this.locale = locale1\n        } else {\n          this.locale = locale2\n        }\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>locale</td><td>Object&lt;Language&gt;</td><td><a href=\"https://github.com/zouyaoji/vue-cesium/tree/dev/packages/locale/lang\">languages</a></td><td>Locale Object</td></tr></tbody></table>", 2);

function vc_config_providervue_type_template_id_e44f4446_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_config_providervue_type_template_id_e44f4446_hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/vc-config-provider.md?vue&type=template&id=e44f4446

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/vc-config-provider.md?vue&type=script&lang=ts

/* harmony default export */ var vc_config_providervue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Switch");

      function render(_ctx, _cache) {
        const _component_vc_navigation = _resolveComponent("vc-navigation");

        const _component_vc_provider_imagery_tianditu = _resolveComponent("vc-provider-imagery-tianditu");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_vc_config_provider = _resolveComponent("vc-config-provider");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_config_provider, {
            locale: _ctx.locale
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
              default: _withCtx(() => [_createVNode(_component_vc_navigation, {
                ref: "navigation",
                offset: [35, 35]
              }, null, 512), _createVNode(_component_vc_layer_imagery, {
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
                  token: "436ce7e50d27eede2f2929307e6b33c0",
                  ref: "provider"
                }, null, 512)]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }, 8, ["locale"]), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.toggleLanguage
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }, 8, ["onClick"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      } // import enUS from 'vue-cesium/es/locale/lang/en-us'


      const locale1 = {
        name: 'en-us',
        nativeName: 'English (US)',
        vc: {
          loadError: 'needs to be child of VcViewer',
          navigation: {
            compass: {
              outerTip: 'Drag outer ring: rotate view. Double-click: reset view.',
              innerTip: 'Drag inner gyroscope: free orbit. TIP: You can also free orbit by holding the CTRL key and dragging the map.',
              title: 'Click and drag to rotate the camera.'
            },
            zoomCotrol: {
              zoomInTip: 'Zoom in',
              zoomResetTip: 'Reset zoom',
              zoomOutTip: 'Zoom out'
            },
            print: {
              printTip: 'Viewer screenshot/print',
              printViewTitle: 'VueCesium Print View',
              credit: 'Map Credits',
              screenshot: 'Screenshot'
            },
            myLocation: {
              myLocationTip: 'Centre map at your current location',
              positioning: 'Positioning...',
              fail: 'Positioning failed',
              centreMap: 'My Location',
              lat: 'Lat',
              lng: 'Lng',
              address: 'Address'
            },
            statusBar: {
              lat: 'Lat',
              lng: 'Lng',
              zone: 'ZONE',
              e: 'E',
              n: 'N',
              elev: 'Elev',
              level: 'Level',
              heading: 'H',
              pitch: 'P',
              roll: 'R',
              cameraHeight: 'CameraH',
              tip: 'Click to switch the mouse display coordinates to UTM projection coordinates'
            }
          }
        }
      };
      const locale2 = {
        name: 'zh-hans',
        nativeName: '中文(简体)',
        vc: {
          loadError: '加载失败，必须作为 VcViewer 的子组件加载。',
          navigation: {
            compass: {
              outerTip: '旋转视图：顺/逆时针方向拖拽罗盘外环。\n重置视图：双击罗盘外环。',
              innerTip: '翻转视图：由内环向外环拖拽罗盘。\n 或者按住 Ctrl 键的同时拖拽地图。',
              title: '按住鼠标拖拽旋转相机。'
            },
            zoomCotrol: {
              zoomInTip: '放大',
              zoomResetTip: '重置视图',
              zoomOutTip: '缩小'
            },
            print: {
              printTip: '场景截图/打印',
              printViewTitle: '打印预览',
              credit: '地图版权',
              screenshot: '场景截图'
            },
            myLocation: {
              myLocationTip: '定位您的位置',
              positioning: '定位中...',
              fail: '定位失败',
              centreMap: '我的位置',
              lat: '纬度',
              lng: '经度',
              address: '地址'
            },
            statusBar: {
              lat: '纬度',
              lng: '经度',
              zone: '带号',
              e: 'X',
              n: 'Y',
              elev: '高程',
              level: '层级',
              heading: '方位',
              pitch: '俯仰',
              roll: '侧翻',
              cameraHeight: '视高',
              tip: '点击切换鼠标显示坐标为 UTM 投影坐标'
            }
          }
        }
      };
      const democomponentExport = {
        data() {
          return {
            // locale: enUS
            locale: locale1
          };
        },

        methods: {
          toggleLanguage() {
            if (this.locale.name === 'zh-hans') {
              this.locale = locale1;
            } else {
              this.locale = locale2;
            }
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
// CONCATENATED MODULE: ./website/docs/en-US/vc-config-provider.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/vc-config-provider.md



vc_config_providervue_type_script_lang_ts.render = vc_config_providervue_type_template_id_e44f4446_render

/* harmony default export */ var vc_config_provider = __webpack_exports__["default"] = (vc_config_providervue_type_script_lang_ts);

/***/ })

}]);