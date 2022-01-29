(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[188],{

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.26/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/controls/vc-selection-indicator.md?vue&type=template&id=7468543c

const vc_selection_indicatorvue_type_template_id_7468543c_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_selection_indicatorvue_type_template_id_7468543c_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcSelectionIndicator ");

const vc_selection_indicatorvue_type_template_id_7468543c_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "加载自定义选择器组件，替换 Cesium 自带的 selectionIndicator。", -1);

const vc_selection_indicatorvue_type_template_id_7468543c_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "选择器组件的基础用法。", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 不支持拾取 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive-particle"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件对象。")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-selection-indicator"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加选择器组件。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer :selectionIndicator=\"false\" :infoBox=\"false\">\n    <vc-selection-indicator ref=\"selectionIndicator\" @pickEvt=\"pickEvt\"></vc-selection-indicator>\n    <vc-entity ref=\"entity\" :billboard=\"billboard\" :position=\"{lng: 108, lat: 32}\" :point=\"point\" :label=\"label\">\n      <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n    </vc-entity>\n    <vc-layer-imagery :sortOrder=\"10\">\n      <vc-imagery-provider-tianditu mapStyle=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    <el-button type=\"danger\" round @click=\"clear\">清除</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        point: {\n          pixelSize: 28,\n          color: 'red'\n        },\n        label: {\n          text: 'Hello World',\n          pixelOffset: [0, 80]\n        },\n        billboard: {\n          image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n          scale: 0.5\n        }\n      }\n    },\n    methods: {\n      clear() {\n        this.$refs.selectionIndicator.selectedFeature.value = undefined\n      },\n      pickEvt(e) {\n        console.log(e)\n      },\n      unload() {\n        this.$refs.selectionIndicator.unload()\n      },\n      load() {\n        this.$refs.selectionIndicator.load()\n      },\n      reload() {\n        this.$refs.selectionIndicator.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定选择指示器是否可见。</td></tr><tr><td>width</td><td>Number</td><td><code>50</code></td><td><code>optional</code> 指定选择指示器宽度。</td></tr><tr><td>height</td><td>Number</td><td><code>50</code></td><td><code>optional</code> 指定选择指示器高度。</td></tr><tr><td>allowFeatureInfoRequests</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否异步请求该点射线相交影像图层属性。</td></tr></tbody></table>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>pickEvt</td><td>selectedFeature</td><td>拾取时触发。</td></tr></tbody></table>", 1);

function vc_selection_indicatorvue_type_template_id_7468543c_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_selection_indicatorvue_type_template_id_7468543c_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcselectionindicator",
    tabindex: "-1",
    content: "VcSelectionIndicator",
    href: "#vcselectionindicator",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_selection_indicatorvue_type_template_id_7468543c_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcselectionindicator"
    })]),
    _: 1
  }), vc_selection_indicatorvue_type_template_id_7468543c_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_selection_indicatorvue_type_template_id_7468543c_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), _hoisted_5, _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
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
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-jian",
    tabindex: "-1",
    content: "事件",
    href: "#shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-selection-indicator.md?vue&type=template&id=7468543c

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/controls/vc-selection-indicator.md?vue&type=script&lang=ts

/* harmony default export */ var vc_selection_indicatorvue_type_script_lang_ts = ({
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

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("清除");

      function render(_ctx, _cache) {
        const _component_vc_selection_indicator = _resolveComponent("vc-selection-indicator");

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
            selectionIndicator: false,
            infoBox: false
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_selection_indicator, {
              ref: "selectionIndicator",
              onPickEvt: _ctx.pickEvt
            }, null, 8, ["onPickEvt"]), _createVNode(_component_vc_entity, {
              ref: "entity",
              billboard: _ctx.billboard,
              position: {
                lng: 108,
                lat: 32
              },
              point: _ctx.point,
              label: _ctx.label
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_rectangle, {
                coordinates: [130, 20, 80, 25],
                material: "green"
              })]),
              _: 1
            }, 8, ["billboard", "point", "label"]), _createVNode(_component_vc_layer_imagery, {
              sortOrder: 10
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_tianditu, {
                mapStyle: "img_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
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
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.clear
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }, 8, ["onClick"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const democomponentExport = {
        data() {
          return {
            point: {
              pixelSize: 28,
              color: 'red'
            },
            label: {
              text: 'Hello World',
              pixelOffset: [0, 80]
            },
            billboard: {
              image: 'https://zouyaoji.top/vue-cesium/favicon.png',
              scale: 0.5
            }
          };
        },

        methods: {
          clear() {
            this.$refs.selectionIndicator.selectedFeature.value = undefined;
          },

          pickEvt(e) {
            console.log(e);
          },

          unload() {
            this.$refs.selectionIndicator.unload();
          },

          load() {
            this.$refs.selectionIndicator.load();
          },

          reload() {
            this.$refs.selectionIndicator.reload();
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
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-selection-indicator.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-selection-indicator.md



vc_selection_indicatorvue_type_script_lang_ts.render = vc_selection_indicatorvue_type_template_id_7468543c_render

/* harmony default export */ var vc_selection_indicator = __webpack_exports__["default"] = (vc_selection_indicatorvue_type_script_lang_ts);

/***/ })

}]);