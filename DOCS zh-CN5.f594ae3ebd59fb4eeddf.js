(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[149],{

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/controls/vc-ajax-bar.md?vue&type=template&id=497f3ff5

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcAjaxBar ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "加载请求进度条控件。", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-ajax-bar"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件的基础用法。")], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-ajax-bar"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签添加请求进度条控件。")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- default -->\n    <vc-ajax-bar></vc-ajax-bar>\n    <!-- custom -->\n    <vc-ajax-bar position=\"bottom\" color=\"#21BA45\" size=\"5px\" positioning=\"fixed\"></vc-ajax-bar>\n    <vc-layer-imagery>\n      <vc-imagery-provider-arcgis ref=\"provider\"></vc-imagery-provider-arcgis>\n    </vc-layer-imagery>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const provider = ref(null)\n      const alpha = ref(1)\n      const brightness = ref(1)\n      const contrast = ref(1)\n      // methods\n      const unload = () => {\n        provider.value.unload()\n      }\n      const reload = () => {\n        provider.value.reload()\n      }\n      const load = () => {\n        provider.value.load()\n      }\n      return {\n        provider,\n        unload,\n        reload,\n        load,\n        alpha,\n        brightness,\n        contrast\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>string</td><td><code>&#39;top&#39;</code></td><td><code>optional</code> 指定进度条位置。</td><td>top/right/bottom/left</td></tr><tr><td>size</td><td>string</td><td><code>&#39;2px&#39;</code></td><td><code>optional</code> 指定进度条尺寸。</td><td></td></tr><tr><td>color</td><td>string</td><td></td><td><code>optional</code> 指定进度条颜色。</td><td></td></tr><tr><td>skipHijack</td><td>boolean</td><td></td><td><code>optional</code> 指定是否忽略 ajax hijacking。</td><td></td></tr><tr><td>reverse</td><td>boolean</td><td></td><td><code>optional</code> 指定进度条是否反向。</td><td></td></tr><tr><td>positioning</td><td>string</td><td><code>&#39;absolute&#39;</code></td><td><code>optional</code> 指定进度条定位。</td><td>absolute/fixed</td></tr><tr><td>hijackFilter</td><td>((url: string) =&gt; boolean)</td><td></td><td><code>optional</code> 指定哪些 url 可以触发 start 和 end 方法。</td><td></td></tr></tbody></table>", 1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>start</td><td></td><td>当进度条出现时触发。</td></tr><tr><td>end</td><td></td><td>当进度条完成时触发。</td></tr></tbody></table>", 1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("方法 ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>start</td><td>(speed?: number) =&gt; void</td><td>开始等待新的请求进程完成。</td></tr><tr><td>increment</td><td>(amount?: number) =&gt; void</td><td>手动触发进度条增量。</td></tr><tr><td>stop</td><td>() =&gt; void</td><td>完成等待。</td></tr></tbody></table>", 1);

function vc_ajax_barvue_type_template_id_497f3ff5_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcajaxbar",
    tabindex: "-1",
    content: "VcAjaxBar",
    href: "#vcajaxbar",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcajaxbar"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    tabindex: "-1",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
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
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "fang-fa",
    tabindex: "-1",
    content: "方法",
    href: "#fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fang-fa"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-ajax-bar.md?vue&type=template&id=497f3ff5

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/controls/vc-ajax-bar.md?vue&type=script&lang=ts

/* harmony default export */ var vc_ajax_barvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;

      function render(_ctx, _cache) {
        const _component_vc_ajax_bar = _resolveComponent("vc-ajax-bar");

        const _component_vc_imagery_provider_arcgis = _resolveComponent("vc-imagery-provider-arcgis");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_ajax_bar), _createVNode(_component_vc_ajax_bar, {
              position: "bottom",
              color: "#21BA45",
              size: "5px",
              positioning: "fixed"
            }), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_arcgis, {
                ref: "provider"
              }, null, 512)]),
              _: 1
            })]),
            _: 1
          })]),
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
          const alpha = ref(1);
          const brightness = ref(1);
          const contrast = ref(1); // methods

          const unload = () => {
            provider.value.unload();
          };

          const reload = () => {
            provider.value.reload();
          };

          const load = () => {
            provider.value.load();
          };

          return {
            provider,
            unload,
            reload,
            load,
            alpha,
            brightness,
            contrast
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
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-ajax-bar.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/controls/vc-ajax-bar.md



vc_ajax_barvue_type_script_lang_ts.render = vc_ajax_barvue_type_template_id_497f3ff5_render

/* harmony default export */ var vc_ajax_bar = __webpack_exports__["default"] = (vc_ajax_barvue_type_script_lang_ts);

/***/ })

}]);