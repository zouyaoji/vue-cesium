(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[153],{

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.33/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_xtlouzbwsjm2tieu75n2ogelwy/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/overlays/vc-overlay-html.md?vue&type=template&id=7942d17b

const vc_overlay_htmlvue_type_template_id_7942d17b_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_overlay_htmlvue_type_template_id_7942d17b_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcOverlayHtml ");

const vc_overlay_htmlvue_type_template_id_7942d17b_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "按地理位置加载 HTML 元素覆盖物。", -1);

const vc_overlay_htmlvue_type_template_id_7942d17b_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 需要引入样式文件: "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "import 'vue-cesium/dist/index.css';")], -1);

const vc_overlay_htmlvue_type_template_id_7942d17b_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const vc_overlay_htmlvue_type_template_id_7942d17b_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "HTML 覆盖物组件的基础用法。", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-html"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加 div 标签，并设置 CSS 动画。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-overlay-html ref=\"html\" :position=\"[117.186419, 45.66446, 20]\" :show=\"show\">\n      <div class=\"vc-box\">aa</div>\n    </vc-overlay-html>\n    <vc-entity :position=\"[117.186419, 45.66446, 20]\">\n      <vc-graphics-point color=\"red\" :pixel-size=\"8\"></vc-graphics-point>\n    </vc-entity>\n    <vc-overlay-html :position=\"{ lng: 104.04, lat: 30.40 }\">\n      <div class=\"label-container label-container-var\">\n        <div class=\"label-animate-marker_border\">\n          <span class=\"label-animate-marker_text\">成都欢迎您</span>\n        </div>\n      </div>\n    </vc-overlay-html>\n    <vc-layer-imagery :sort-order=\"20\">\n      <vc-imagery-provider-tianditu map-style=\"cva_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n    <vc-layer-imagery :sort-order=\"10\">\n      <vc-imagery-provider-tianditu map-style=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    <el-button type=\"danger\" round @click=\"toggle\">显/隐</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        show: true\n      }\n    },\n    methods: {\n      unload() {\n        this.$refs.html.unload()\n      },\n      load() {\n        this.$refs.html.load()\n      },\n      reload() {\n        this.$refs.html.reload()\n      },\n      toggle() {\n        this.show = !this.show\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定 HTML 是否显示。</td></tr><tr><td>position</td><td>VcPosition</td><td></td><td><code>optional</code> 指定 HTML 元素的地理位置。</td></tr><tr><td>pixelOffset</td><td>VcCartesian2</td><td></td><td><code>optional</code> 指定 HTML 的像素偏移。</td></tr><tr><td>autoHidden</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定 HTML 在地球背面时是否自动隐藏。</td></tr><tr><td>customClass</td><td>string</td><td></td><td><code>optional</code> 指定 HTML 自定义 class 。</td></tr><tr><td>teleport</td><td>TeleportProps</td><td></td><td><code>optional</code> 指定 teleport 参数。</td></tr></tbody></table>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("方法 ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动加载组件。</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动重新加载组件。</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>手动卸载组件。</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>获取标志该组件是否创建成功的 Promise 对象。</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>获取该组件加载的 Cesium 对象。</td></tr></tbody></table>", 1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("官方沙盒： ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("HTML Overlays");

function vc_overlay_htmlvue_type_template_id_7942d17b_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_overlay_htmlvue_type_template_id_7942d17b_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcoverlayhtml",
    tabindex: "-1",
    content: "VcOverlayHtml",
    href: "#vcoverlayhtml",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_htmlvue_type_template_id_7942d17b_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcoverlayhtml"
    })]),
    _: 1
  }), vc_overlay_htmlvue_type_template_id_7942d17b_hoisted_3, vc_overlay_htmlvue_type_template_id_7942d17b_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_htmlvue_type_template_id_7942d17b_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), vc_overlay_htmlvue_type_template_id_7942d17b_hoisted_6, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
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
  }), _hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "fang-fa",
    tabindex: "-1",
    content: "方法",
    href: "#fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fang-fa"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "can-kao",
    tabindex: "-1",
    content: "参考",
    href: "#can-kao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#can-kao"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://sandcastle.cesium.com/gallery/HTML%20Overlays.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17]),
    _: 1
  })])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/overlays/vc-overlay-html.md?vue&type=template&id=7942d17b

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_xtlouzbwsjm2tieu75n2ogelwy/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/overlays/vc-overlay-html.md?vue&type=script&lang=ts

/* harmony default export */ var vc_overlay_htmlvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("div", {
        class: "vc-box"
      }, "aa", -1);

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", {
        class: "label-container label-container-var"
      }, [/*#__PURE__*/_createElementVNode("div", {
        class: "label-animate-marker_border"
      }, [/*#__PURE__*/_createElementVNode("span", {
        class: "label-animate-marker_text"
      }, "成都欢迎您")])], -1);

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("重载");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("显/隐");

      function render(_ctx, _cache) {
        const _component_vc_overlay_html = _resolveComponent("vc-overlay-html");

        const _component_vc_graphics_point = _resolveComponent("vc-graphics-point");

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
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_overlay_html, {
              ref: "html",
              position: [117.186419, 45.66446, 20],
              show: _ctx.show
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }, 8, ["position", "show"]), _createVNode(_component_vc_entity, {
              position: [117.186419, 45.66446, 20]
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_point, {
                color: "red",
                "pixel-size": 8
              })]),
              _: 1
            }, 8, ["position"]), _createVNode(_component_vc_overlay_html, {
              position: {
                lng: 104.04,
                lat: 30.40
              }
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }, 8, ["position"]), _createVNode(_component_vc_layer_imagery, {
              "sort-order": 20
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_tianditu, {
                "map-style": "cva_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            }), _createVNode(_component_vc_layer_imagery, {
              "sort-order": 10
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_tianditu, {
                "map-style": "img_c",
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
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_hoisted_5]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.toggle
            }, {
              default: _withCtx(() => [_hoisted_6]),
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
            show: true
          };
        },

        methods: {
          unload() {
            this.$refs.html.unload();
          },

          load() {
            this.$refs.html.load();
          },

          reload() {
            this.$refs.html.reload();
          },

          toggle() {
            this.show = !this.show;
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
// CONCATENATED MODULE: ./website/docs/zh-CN/overlays/vc-overlay-html.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/overlays/vc-overlay-html.md



vc_overlay_htmlvue_type_script_lang_ts.render = vc_overlay_htmlvue_type_template_id_7942d17b_render

/* harmony default export */ var vc_overlay_html = __webpack_exports__["default"] = (vc_overlay_htmlvue_type_script_lang_ts);

/***/ })

}]);