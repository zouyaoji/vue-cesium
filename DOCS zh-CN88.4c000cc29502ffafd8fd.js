(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[193],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/providers/vc-imagery-provider-tencent.md?vue&type=template&id=09ea2cde

const vc_imagery_provider_tencentvue_type_template_id_09ea2cde_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_imagery_provider_tencentvue_type_template_id_09ea2cde_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcImageryProviderTencent ");

const vc_imagery_provider_tencentvue_type_template_id_09ea2cde_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "加载腾讯地图瓦片服务。", -1);

const vc_imagery_provider_tencentvue_type_template_id_09ea2cde_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("：需要作为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的子组件才能正常加载。")], -1);

const vc_imagery_provider_tencentvue_type_template_id_09ea2cde_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const vc_imagery_provider_tencentvue_type_template_id_09ea2cde_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-imagery-provider-tencent"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件的基础用法。")], -1);

const vc_imagery_provider_tencentvue_type_template_id_09ea2cde_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加由腾讯提供的瓦片服务图层。")])], -1);

const vc_imagery_provider_tencentvue_type_template_id_09ea2cde_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-layer-imagery :alpha=\"alpha\" :brightness=\"brightness\" :contrast=\"contrast\" :sort-order=\"10\">\n      <vc-imagery-provider-tencent\n        :mapStyle=\"mapStyle\"\n        :styleId=\"styleId\"\n        :projection-transforms=\"projectionTransforms\"\n        ref=\"provider\"\n      ></vc-imagery-provider-tencent>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n      <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    </el-row>\n    <el-row>\n      <el-col>\n        <div class=\"block\">\n          <span class=\"demonstration\">透明度</span>\n          <el-slider v-model=\"alpha\" :min=\"0\" :max=\"1\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">亮度</span>\n          <el-slider v-model=\"brightness\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">对比度</span>\n          <el-slider v-model=\"contrast\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">切换风格</span>\n          <el-row>\n            <el-select v-model=\"mapStyle\" placeholder=\"请选择\">\n              <el-option v-for=\"item in mapStyleOptions\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </el-option>\n            </el-select>\n          </el-row>\n          <span class=\"demonstration\" v-if=\"mapStyle === 'vector'\">切换类型</span>\n          <el-row>\n            <el-select v-model=\"styleId\" placeholder=\"请选择\" v-if=\"mapStyle === 'vector'\">\n              <el-option v-for=\"item in styleIdOptions\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </el-option>\n            </el-select>\n          </el-row>\n        </div>\n      </el-col>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const provider = ref(null)\n      const alpha = ref(1)\n      const brightness = ref(1)\n      const contrast = ref(1)\n      const mapStyleOptions = [\n        {\n          value: 'img',\n          label: '卫星影像'\n        },\n        {\n          value: 'terrain',\n          label: '地形图'\n        },\n        {\n          value: 'vector',\n          label: '道路图'\n        }\n      ]\n      const styleIdOptions = [\n        {\n          value: '1',\n          label: '经典'\n        },\n        {\n          value: '2',\n          label: '标签1'\n        },\n        {\n          value: '3',\n          label: '标签2'\n        },\n        {\n          value: '4',\n          label: '墨渊'\n        },\n        {\n          value: '8',\n          label: '白浅'\n        },\n        {\n          value: '9',\n          label: '浅灰'\n        }\n      ]\n      const mapStyle = ref('vector')\n      const styleId = ref('1')\n      // methods\n      const unload = () => {\n        provider.value.unload()\n      }\n      const reload = () => {\n        provider.value.reload()\n      }\n      const load = () => {\n        provider.value.load()\n      }\n      const projectionTransforms = {\n        from: 'GCJ02',\n        to: 'WGS84'\n      }\n      return {\n        provider,\n        unload,\n        reload,\n        load,\n        alpha,\n        brightness,\n        contrast,\n        mapStyleOptions,\n        mapStyle,\n        styleIdOptions,\n        styleId,\n        projectionTransforms\n      }\n    }\n  }\n</script>\n")], -1);

const vc_imagery_provider_tencentvue_type_template_id_09ea2cde_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const vc_imagery_provider_tencentvue_type_template_id_09ea2cde_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>url</td><td>string</td><td></td><td><code>optional</code> 指定服务地址。</td><td></td></tr><tr><td>subdomains</td><td>Array&lt;string&gt;</td><td><code>[&#39;1&#39;, &#39;2&#39;, &#39;3&#39;]</code></td><td><code>optional</code> 指定服务轮询参数。</td><td></td></tr><tr><td>mapStyle</td><td>string</td><td><code>&#39;vector&#39;</code></td><td><code>optional</code> 指定腾讯地图服务地图风格类型。&#39;img&#39;: 卫星影像; &#39;terrain&#39;: 地形图; &#39;vector&#39;: 道路图</td><td>img/terrain/vector</td></tr><tr><td>styleId</td><td>string</td><td><code>&#39;1&#39;</code></td><td>指定风格id，mapStyle 为 vector 时有效。1: 经典; 2: 标签; 3: 标签; 4: 墨渊; 8: 白浅; 9: 灰色</td><td>1/2/3/4/8/9</td></tr><tr><td>protocol</td><td>string</td><td></td><td><code>optional</code> 指定服务协议。</td><td>http/https</td></tr><tr><td>credit</td><td>string|Cesium.Credit</td><td><code>&#39;&#39;</code></td><td><code>optional</code> 服务版权描述信息。</td><td></td></tr><tr><td>rectangle</td><td>VcRectangle</td><td></td><td><code>optional</code> 图层的矩形范围，此矩形限制了影像可见范围。</td><td></td></tr><tr><td>minimumLevel</td><td>number</td><td><code>0</code></td><td><code>optional</code> 最小层级。</td><td></td></tr><tr><td>maximumLevel</td><td>number</td><td><code>20</code></td><td><code>optional</code> 最大层级。</td><td></td></tr><tr><td>tilingScheme</td><td>Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme</td><td><code>new Cesium.WebMercatorTilingScheme()</code></td><td><code>optional</code> 指定将影像瓦片展开到地球的投影方案。</td><td></td></tr><tr><td>projectionTransforms</td><td>boolean|ProjectionTransforms</td><td><code>false</code></td><td><code>optional</code> 指定投影变换参数。<strong>结构： { from: &#39;GCJ02&#39;, to: &#39;WGS84&#39; }</strong></td><td></td></tr></tbody></table>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>errorEvent</td><td>TileProviderError</td><td>当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。</td></tr><tr><td>readyPromise</td><td>ImageryProvider</td><td>当图层提供者可用时触发, 返回 ImageryProvider 实例。</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("资料： ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("DCSDK");

function vc_imagery_provider_tencentvue_type_template_id_09ea2cde_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_imagery_provider_tencentvue_type_template_id_09ea2cde_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcimageryprovidertencent",
    tabindex: "-1",
    content: "VcImageryProviderTencent",
    href: "#vcimageryprovidertencent",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_imagery_provider_tencentvue_type_template_id_09ea2cde_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcimageryprovidertencent"
    })]),
    _: 1
  }), vc_imagery_provider_tencentvue_type_template_id_09ea2cde_hoisted_3, vc_imagery_provider_tencentvue_type_template_id_09ea2cde_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_imagery_provider_tencentvue_type_template_id_09ea2cde_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), vc_imagery_provider_tencentvue_type_template_id_09ea2cde_hoisted_6, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [vc_imagery_provider_tencentvue_type_template_id_09ea2cde_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [vc_imagery_provider_tencentvue_type_template_id_09ea2cde_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    tabindex: "-1",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_imagery_provider_tencentvue_type_template_id_09ea2cde_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), vc_imagery_provider_tencentvue_type_template_id_09ea2cde_hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
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
    id: "can-kao",
    tabindex: "-1",
    content: "参考",
    href: "#can-kao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#can-kao"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_14, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "http://dc.dvgis.cn/#/editor?type=baselayer&example=tencent"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-imagery-provider-tencent.md?vue&type=template&id=09ea2cde

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/providers/vc-imagery-provider-tencent.md?vue&type=script&lang=ts

/* harmony default export */ var vc_imagery_provider_tencentvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        createElementVNode: _createElementVNode,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        createBlock: _createBlock,
        createCommentVNode: _createCommentVNode
      } = vue_esm_browser;
      const _hoisted_1 = {
        class: "demo-toolbar"
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("重载");

      const _hoisted_5 = {
        class: "block"
      };

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "透明度", -1);

      const _hoisted_7 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "亮度", -1);

      const _hoisted_8 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "对比度", -1);

      const _hoisted_9 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "切换风格", -1);

      const _hoisted_10 = {
        key: 0,
        class: "demonstration"
      };

      function render(_ctx, _cache) {
        const _component_vc_imagery_provider_tencent = _resolveComponent("vc-imagery-provider-tencent");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        const _component_el_slider = _resolveComponent("el-slider");

        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        const _component_el_col = _resolveComponent("el-col");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_layer_imagery, {
              alpha: _ctx.alpha,
              brightness: _ctx.brightness,
              contrast: _ctx.contrast,
              "sort-order": 10
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_tencent, {
                mapStyle: _ctx.mapStyle,
                styleId: _ctx.styleId,
                "projection-transforms": _ctx.projectionTransforms,
                ref: "provider"
              }, null, 8, ["mapStyle", "styleId", "projection-transforms"])]),
              _: 1
            }, 8, ["alpha", "brightness", "contrast"])]),
            _: 1
          }), _createElementVNode("div", _hoisted_1, [_createVNode(_component_el_row, null, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }, 8, ["onClick"])]),
            _: 1
          }), _createVNode(_component_el_row, null, {
            default: _withCtx(() => [_createVNode(_component_el_col, null, {
              default: _withCtx(() => [_createElementVNode("div", _hoisted_5, [_hoisted_6, _createVNode(_component_el_slider, {
                modelValue: _ctx.alpha,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.alpha = $event),
                min: 0,
                max: 1,
                step: 0.01
              }, null, 8, ["modelValue", "step"]), _hoisted_7, _createVNode(_component_el_slider, {
                modelValue: _ctx.brightness,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.brightness = $event),
                min: 0,
                max: 5,
                step: 0.01
              }, null, 8, ["modelValue", "step"]), _hoisted_8, _createVNode(_component_el_slider, {
                modelValue: _ctx.contrast,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.contrast = $event),
                min: 0,
                max: 5,
                step: 0.01
              }, null, 8, ["modelValue", "step"]), _hoisted_9, _createVNode(_component_el_row, null, {
                default: _withCtx(() => [_createVNode(_component_el_select, {
                  modelValue: _ctx.mapStyle,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.mapStyle = $event),
                  placeholder: "请选择"
                }, {
                  default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.mapStyleOptions, item => {
                    return _openBlock(), _createBlock(_component_el_option, {
                      key: item.value,
                      label: item.label,
                      value: item.value
                    }, null, 8, ["label", "value"]);
                  }), 128))]),
                  _: 1
                }, 8, ["modelValue"])]),
                _: 1
              }), _ctx.mapStyle === 'vector' ? (_openBlock(), _createElementBlock("span", _hoisted_10, "切换类型")) : _createCommentVNode("", true), _createVNode(_component_el_row, null, {
                default: _withCtx(() => [_ctx.mapStyle === 'vector' ? (_openBlock(), _createBlock(_component_el_select, {
                  key: 0,
                  modelValue: _ctx.styleId,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.styleId = $event),
                  placeholder: "请选择"
                }, {
                  default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.styleIdOptions, item => {
                    return _openBlock(), _createBlock(_component_el_option, {
                      key: item.value,
                      label: item.label,
                      value: item.value
                    }, null, 8, ["label", "value"]);
                  }), 128))]),
                  _: 1
                }, 8, ["modelValue"])) : _createCommentVNode("", true)]),
                _: 1
              })])]),
              _: 1
            })]),
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
          const alpha = ref(1);
          const brightness = ref(1);
          const contrast = ref(1);
          const mapStyleOptions = [{
            value: 'img',
            label: '卫星影像'
          }, {
            value: 'terrain',
            label: '地形图'
          }, {
            value: 'vector',
            label: '道路图'
          }];
          const styleIdOptions = [{
            value: '1',
            label: '经典'
          }, {
            value: '2',
            label: '标签1'
          }, {
            value: '3',
            label: '标签2'
          }, {
            value: '4',
            label: '墨渊'
          }, {
            value: '8',
            label: '白浅'
          }, {
            value: '9',
            label: '浅灰'
          }];
          const mapStyle = ref('vector');
          const styleId = ref('1'); // methods

          const unload = () => {
            provider.value.unload();
          };

          const reload = () => {
            provider.value.reload();
          };

          const load = () => {
            provider.value.load();
          };

          const projectionTransforms = {
            from: 'GCJ02',
            to: 'WGS84'
          };
          return {
            provider,
            unload,
            reload,
            load,
            alpha,
            brightness,
            contrast,
            mapStyleOptions,
            mapStyle,
            styleIdOptions,
            styleId,
            projectionTransforms
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
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-imagery-provider-tencent.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-imagery-provider-tencent.md



vc_imagery_provider_tencentvue_type_script_lang_ts.render = vc_imagery_provider_tencentvue_type_template_id_09ea2cde_render

/* harmony default export */ var vc_imagery_provider_tencent = __webpack_exports__["default"] = (vc_imagery_provider_tencentvue_type_script_lang_ts);

/***/ })

}]);