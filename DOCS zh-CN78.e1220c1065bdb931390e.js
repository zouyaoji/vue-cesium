(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[175],{

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/providers/vc-imagery-provider-baidu.md?vue&type=template&id=c19aca8c

const vc_imagery_provider_baiduvue_type_template_id_c19aca8c_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_imagery_provider_baiduvue_type_template_id_c19aca8c_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcImageryProviderBaidu ");

const vc_imagery_provider_baiduvue_type_template_id_c19aca8c_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载百度地图或者跟百度地图一样的切片方案的瓦片服务，支持用"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "projectionTransforms"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "纠偏"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("。")], -1);

const vc_imagery_provider_baiduvue_type_template_id_c19aca8c_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("：需要作为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的子组件才能正常加载。")], -1);

const vc_imagery_provider_baiduvue_type_template_id_c19aca8c_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const vc_imagery_provider_baiduvue_type_template_id_c19aca8c_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-imagery-provider-baidu"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件的基础用法。")], -1);

const vc_imagery_provider_baiduvue_type_template_id_c19aca8c_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-layer-imagery"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加由百度地图提供的影像瓦片服务图层。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("： 暂未找到 https 服务，示例只处理了几层。")])], -1);

const vc_imagery_provider_baiduvue_type_template_id_c19aca8c_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-layer-imagery :alpha=\"alpha\" :brightness=\"brightness\" :contrast=\"contrast\">\n      <vc-imagery-provider-baidu\n        ref=\"provider\"\n        :customid=\"customid\"\n        :projectionTransforms=\"{ form: 'BD09', to: 'WGS84' }\"\n      ></vc-imagery-provider-baidu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n      <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    </el-row>\n    <el-row>\n      <el-col>\n        <div class=\"block\">\n          <span class=\"demonstration\">透明度</span>\n          <el-slider v-model=\"alpha\" :min=\"0\" :max=\"1\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">亮度</span>\n          <el-slider v-model=\"brightness\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">对比度</span>\n          <el-slider v-model=\"contrast\" :min=\"0\" :max=\"5\" :step=\"0.01\"></el-slider>\n          <span class=\"demonstration\">切换服务</span>\n          <el-select v-model=\"customid\" placeholder=\"请选择\">\n            <el-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\"> </el-option>\n          </el-select>\n        </div>\n      </el-col>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const provider = ref(null)\n      const alpha = ref(1)\n      const brightness = ref(1)\n      const contrast = ref(1)\n      const options = [\n        {\n          value: 'normal',\n          label: '默认样式'\n        },\n        {\n          value: 'img',\n          label: '百度影像' // 不支持https\n        },\n        {\n          value: 'dark',\n          label: '黑夜风格'\n        },\n        {\n          value: 'midnight',\n          label: '午夜蓝'\n        },\n        {\n          value: 'traffic',\n          label: '百度路况'\n        }\n      ]\n      const customid = ref('normal')\n      // methods\n      const unload = () => {\n        provider.value.unload()\n      }\n      const reload = () => {\n        provider.value.reload()\n      }\n      const load = () => {\n        provider.value.load()\n      }\n      return {\n        provider,\n        unload,\n        reload,\n        load,\n        alpha,\n        brightness,\n        contrast,\n        options,\n        customid\n      }\n    }\n  }\n</script>\n")], -1);

const vc_imagery_provider_baiduvue_type_template_id_c19aca8c_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>url</td><td>String</td><td></td><td><code>optional</code> 指定服务地址。 指定了 <code>url</code> 将忽略 <code>customid</code> 属性。</td></tr><tr><td>rectangle</td><td>Object|Object</td><td></td><td><code>optional</code> 指定影像图层的矩形范围，此矩形限制了影像可见范围。</td></tr><tr><td>credit</td><td>String|Object</td><td><code>&#39;&#39;</code></td><td><code>optional</code> 服务版权描述信息。</td></tr><tr><td>minimumLevel</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 最小层级。</td></tr><tr><td>maximumLevel</td><td>Number</td><td><code>18</code></td><td><code>optional</code> 最大层级。</td></tr><tr><td>scale</td><td>Number</td><td><code>1</code></td><td><code>optional</code> 指定缩放。</td></tr><tr><td>ak</td><td>String</td><td><code>E4805d16520de693a3fe707cdc962045</code></td><td><code>optional</code> 指定百度地图key。</td></tr><tr><td>customid</td><td>String</td><td><code>normal</code></td><td><code>optional</code> 指定自定义风格id。</td></tr><tr><td>projectionTransforms</td><td>Boolean|Object</td><td></td><td><code>optional</code> 指定投影变换参数。<strong>结构： { from: &#39;BD09&#39;, to: &#39;WGS84&#39; }</strong></td></tr><tr><td>protocol</td><td>String</td><td><code>&#39;https&#39;</code></td><td><code>optional</code> 指定服务协议。</td></tr></tbody></table><div class=\"tip\"><p>提示：<code>rectangle</code> 属性除了可传 <code>Cesium.Rectangle</code> 还可以传 <code>PlainObject(RectangleInDegreeOption|Cartesian4Option</code>) 和 <code>Array&lt;number&gt;</code> (度)</p></div><div class=\"tipflex\"><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// RectangleInDegreeOption</span>\n{\n  <span class=\"hljs-attr\">west</span>: number,\n  <span class=\"hljs-attr\">south</span>: number,\n  <span class=\"hljs-attr\">east</span>: number,\n  <span class=\"hljs-attr\">north</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// Cartesian4Option</span>\n{\n  <span class=\"hljs-attr\">x</span>: number,\n  <span class=\"hljs-attr\">y</span>: number,\n  <span class=\"hljs-attr\">z</span>: number,\n  <span class=\"hljs-attr\">w</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// Array&lt;number&gt; in degrees</span>\n;[number, number, number, number]\n</code><span class=\"lang-mark\">js</span></pre></div>", 3);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>errorEvent</td><td>(evt: Cesium.TileProviderError)</td><td>当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。</td></tr><tr><td>readyPromise</td><td>(provider: VcTerrainProvider)</td><td>VcImageryProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance)</td></tr></tbody></table>", 1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("资料： ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("openlayers#3522");

function vc_imagery_provider_baiduvue_type_template_id_c19aca8c_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_imagery_provider_baiduvue_type_template_id_c19aca8c_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcimageryproviderbaidu",
    tabindex: "-1",
    content: "VcImageryProviderBaidu",
    href: "#vcimageryproviderbaidu",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_imagery_provider_baiduvue_type_template_id_c19aca8c_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcimageryproviderbaidu"
    })]),
    _: 1
  }), vc_imagery_provider_baiduvue_type_template_id_c19aca8c_hoisted_3, vc_imagery_provider_baiduvue_type_template_id_c19aca8c_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_imagery_provider_baiduvue_type_template_id_c19aca8c_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), vc_imagery_provider_baiduvue_type_template_id_c19aca8c_hoisted_6, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [vc_imagery_provider_baiduvue_type_template_id_c19aca8c_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [vc_imagery_provider_baiduvue_type_template_id_c19aca8c_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    tabindex: "-1",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_imagery_provider_baiduvue_type_template_id_c19aca8c_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
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
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
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
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_16, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/openlayers/openlayers/issues/3522"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-imagery-provider-baidu.md?vue&type=template&id=c19aca8c

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/providers/vc-imagery-provider-baidu.md?vue&type=script&lang=ts

/* harmony default export */ var vc_imagery_provider_baiduvue_type_script_lang_ts = ({
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
        createBlock: _createBlock
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
      }, "切换服务", -1);

      function render(_ctx, _cache) {
        const _component_vc_imagery_provider_baidu = _resolveComponent("vc-imagery-provider-baidu");

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
              contrast: _ctx.contrast
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_baidu, {
                ref: "provider",
                customid: _ctx.customid,
                projectionTransforms: {
                  form: 'BD09',
                  to: 'WGS84'
                }
              }, null, 8, ["customid"])]),
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
              }, null, 8, ["modelValue", "step"]), _hoisted_9, _createVNode(_component_el_select, {
                modelValue: _ctx.customid,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.customid = $event),
                placeholder: "请选择"
              }, {
                default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, item => {
                  return _openBlock(), _createBlock(_component_el_option, {
                    key: item.value,
                    label: item.label,
                    value: item.value
                  }, null, 8, ["label", "value"]);
                }), 128))]),
                _: 1
              }, 8, ["modelValue"])])]),
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
          const options = [{
            value: 'normal',
            label: '默认样式'
          }, {
            value: 'img',
            label: '百度影像' // 不支持https

          }, {
            value: 'dark',
            label: '黑夜风格'
          }, {
            value: 'midnight',
            label: '午夜蓝'
          }, {
            value: 'traffic',
            label: '百度路况'
          }];
          const customid = ref('normal'); // methods

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
            contrast,
            options,
            customid
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
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-imagery-provider-baidu.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-imagery-provider-baidu.md



vc_imagery_provider_baiduvue_type_script_lang_ts.render = vc_imagery_provider_baiduvue_type_template_id_c19aca8c_render

/* harmony default export */ var vc_imagery_provider_baidu = __webpack_exports__["default"] = (vc_imagery_provider_baiduvue_type_script_lang_ts);

/***/ })

}]);