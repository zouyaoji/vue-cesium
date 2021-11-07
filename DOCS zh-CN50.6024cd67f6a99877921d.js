(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[141],{

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/overlays/vc-overlay-html.md?vue&type=template&id=2069a78a

const vc_overlay_htmlvue_type_template_id_2069a78a_hoisted_1 = {
  class: "content element-doc"
};

const vc_overlay_htmlvue_type_template_id_2069a78a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h2", {
  id: "vcoverlayhtml"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  class: "header-anchor",
  href: "#vcoverlayhtml"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" VcOverlayHtml")], -1);

const vc_overlay_htmlvue_type_template_id_2069a78a_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "按地理位置加载 HTML 元素覆盖物。", -1);

const vc_overlay_htmlvue_type_template_id_2069a78a_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 需要引入样式文件: "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "import 'vue-cesium/default/index.css';")], -1);

const vc_overlay_htmlvue_type_template_id_2069a78a_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 基础用法")], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "HTML 覆盖物组件的基础用法。", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-html"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加 div 标签，并设置 CSS 动画。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-overlay-html ref=\"html\" :position=\"[117.186419, 45.66446, 20]\">\n      <div class=\"vc-box\">aa</div>\n    </vc-overlay-html>\n    <vc-entity :position=\"[117.186419, 45.66446, 20]\">\n      <vc-graphics-point color=\"red\" :pixelSize=\"8\"></vc-graphics-point>\n    </vc-entity>\n    <vc-overlay-html :position=\"{ lng: 104.04, lat: 30.40 }\">\n      <div class=\"label-container label-container-var\">\n        <div class=\"label-animate-marker_border\">\n          <span class=\"label-animate-marker_text\">成都欢迎您</span>\n        </div>\n      </div>\n    </vc-overlay-html>\n    <vc-layer-imagery :sortOrder=\"20\">\n      <vc-provider-imagery-tianditu mapStyle=\"cva_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n    <vc-layer-imagery :sortOrder=\"10\">\n      <vc-provider-imagery-tianditu mapStyle=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    methods: {\n      unload() {\n        this.$refs.html.unload()\n      },\n      load() {\n        this.$refs.html.load()\n      },\n      reload() {\n        this.$refs.html.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>position</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 HTML 元素的地理位置。</td></tr><tr><td>pixelOffset</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 HTML 的像素偏移。</td></tr><tr><td>autoHidden</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 HTML 在地球背面时是否自动隐藏。</td></tr><tr><td>customClass</td><td>String</td><td></td><td><code>optional</code> 指定 HTML 自定义 class 。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方沙盒： <a href=\"https://sandcastle.cesium.com/gallery/HTML%20Overlays.html\">HTML Overlays</a></li></ul>", 6);

function vc_overlay_htmlvue_type_template_id_2069a78a_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_overlay_htmlvue_type_template_id_2069a78a_hoisted_1, [vc_overlay_htmlvue_type_template_id_2069a78a_hoisted_2, vc_overlay_htmlvue_type_template_id_2069a78a_hoisted_3, vc_overlay_htmlvue_type_template_id_2069a78a_hoisted_4, vc_overlay_htmlvue_type_template_id_2069a78a_hoisted_5, _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/overlays/vc-overlay-html.md?vue&type=template&id=2069a78a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/overlays/vc-overlay-html.md?vue&type=script&lang=ts

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

      function render(_ctx, _cache) {
        const _component_vc_overlay_html = _resolveComponent("vc-overlay-html");

        const _component_vc_graphics_point = _resolveComponent("vc-graphics-point");

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
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_overlay_html, {
              ref: "html",
              position: [117.186419, 45.66446, 20]
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }, 8, ["position"]), _createVNode(_component_vc_entity, {
              position: [117.186419, 45.66446, 20]
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_point, {
                color: "red",
                pixelSize: 8
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
            }, 8, ["onClick"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const democomponentExport = {
        methods: {
          unload() {
            this.$refs.html.unload();
          },

          load() {
            this.$refs.html.load();
          },

          reload() {
            this.$refs.html.reload();
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



vc_overlay_htmlvue_type_script_lang_ts.render = vc_overlay_htmlvue_type_template_id_2069a78a_render

/* harmony default export */ var vc_overlay_html = __webpack_exports__["default"] = (vc_overlay_htmlvue_type_script_lang_ts);

/***/ })

}]);