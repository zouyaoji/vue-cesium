(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[175],{

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/providers/vc-provider-terrain-tianditu.md?vue&type=template&id=6914ef6e

const vc_provider_terrain_tiandituvue_type_template_id_6914ef6e_hoisted_1 = {
  class: "content element-doc"
};

const vc_provider_terrain_tiandituvue_type_template_id_6914ef6e_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h2", {
  id: "vcproviderterraintianditu"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  class: "header-anchor",
  href: "#vcproviderterraintianditu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" VcProviderTerrainTianditu")], -1);

const vc_provider_terrain_tiandituvue_type_template_id_6914ef6e_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "加载天地图在线地形。", -1);

const vc_provider_terrain_tiandituvue_type_template_id_6914ef6e_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 基础用法")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-provider-terrain-tianditu"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 组件的基础用法。")], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-provider-terrain-tianditu"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加由天地图提供的在线地形瓦片服务。")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"ready\" :camera=\"{position: [102.8,30.57,6000],heading: 162, pitch: -18.25, roll: 0.05}\">\n    <vc-provider-terrain-tianditu ref=\"provider\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-terrain-tianditu>\n    <vc-layer-imagery>\n      <vc-provider-imagery-tianditu mapStyle=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n    <vc-layer-imagery>\n      <vc-provider-imagery-tianditu mapStyle=\"cva_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n      <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const provider = ref(null)\n      let viewer = undefined\n      // methods\n      const unload = () => {\n        provider.value.unload()\n      }\n      const reload = () => {\n        provider.value.reload()\n      }\n      const load = () => {\n        provider.value.load()\n      }\n      const ready = ({ Cesium, viewer }) => {\n      }\n      return {\n        ready,\n        provider,\n        unload,\n        reload,\n        load\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>url</td><td>String</td><td><code>&#39;https://{s}.tianditu.gov.cn/&#39;</code></td><td><code>required</code> 指定服务地址。</td></tr><tr><td>subdomains</td><td>Array</td><td><code>false</code></td><td><code>[&#39;t0&#39;, &#39;t1&#39;, &#39;t2&#39;, &#39;t3&#39;, &#39;t4&#39;, &#39;t5&#39;, &#39;t6&#39;, &#39;t7&#39;]</code> 指定轮询子域名。</td></tr><tr><td>pluginPath</td><td>String</td><td><code>&#39;https://api.tianditu.gov.cn/cdn/plugins/cesium/cesiumTdt.js&#39;</code></td><td><code>optional</code> 指定天地图地形插件库地址。</td></tr><tr><td>dataType</td><td>String</td><td><code>int</code></td><td><code>optional</code> 指定数据类型。</td></tr><tr><td>tileType</td><td>String</td><td><code>heightmap</code></td><td><code>optional</code> 指定瓦片类型。</td></tr><tr><td>token</td><td>String</td><td></td><td><code>optional</code> 指定天地图服务秘钥。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>errorEvent</td><td>TileProviderError</td><td>当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。</td></tr><tr><td>readyPromise</td><td>TerrainProvider</td><td>当图层提供者可用时触发, 返回 TerrainProvider 实例。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>资料： <strong><a href=\"http://lbs.tianditu.gov.cn/docs/#/sanwei/\">天地图帮助文档</a></strong></li></ul><h3 id=\"yi-zhi-wen-ti\"><a class=\"header-anchor\" href=\"#yi-zhi-wen-ti\">¶</a> 已知问题</h3><ul><li>使用未压缩的构建库 <code>/CesiumUnminified/Cesium.js</code> 会抛出异常。<pre><code class=\"hljs language-html\">cesiumTdt.js:12 Uncaught ReferenceError: Zlib is not defined\n  at cesiumTdt.js:12\n  at XMLHttpRequest.i.onreadystatechange (cesiumTdt.js:12)\n</code></pre> 引入 <code>/Cesium/Cesium.js</code> 即可解决。</li></ul>", 8);

function vc_provider_terrain_tiandituvue_type_template_id_6914ef6e_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_provider_terrain_tiandituvue_type_template_id_6914ef6e_hoisted_1, [vc_provider_terrain_tiandituvue_type_template_id_6914ef6e_hoisted_2, vc_provider_terrain_tiandituvue_type_template_id_6914ef6e_hoisted_3, vc_provider_terrain_tiandituvue_type_template_id_6914ef6e_hoisted_4, _hoisted_5, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-provider-terrain-tianditu.md?vue&type=template&id=6914ef6e

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/providers/vc-provider-terrain-tianditu.md?vue&type=script&lang=ts

/* harmony default export */ var vc_provider_terrain_tiandituvue_type_script_lang_ts = ({
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

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("重载");

      function render(_ctx, _cache) {
        const _component_vc_provider_terrain_tianditu = _resolveComponent("vc-provider-terrain-tianditu");

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
            onReady: _ctx.ready,
            camera: {
              position: [102.8, 30.57, 6000],
              heading: 162,
              pitch: -18.25,
              roll: 0.05
            }
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_provider_terrain_tianditu, {
              ref: "provider",
              token: "436ce7e50d27eede2f2929307e6b33c0"
            }, null, 512), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_tianditu, {
                mapStyle: "img_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            }), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_tianditu, {
                mapStyle: "cva_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            })]),
            _: 1
          }, 8, ["onReady", "camera"]), _createElementVNode("div", _hoisted_1, [_createVNode(_component_el_row, null, {
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
          let viewer = undefined; // methods

          const unload = () => {
            provider.value.unload();
          };

          const reload = () => {
            provider.value.reload();
          };

          const load = () => {
            provider.value.load();
          };

          const ready = ({
            Cesium,
            viewer
          }) => {};

          return {
            ready,
            provider,
            unload,
            reload,
            load
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
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-provider-terrain-tianditu.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-provider-terrain-tianditu.md



vc_provider_terrain_tiandituvue_type_script_lang_ts.render = vc_provider_terrain_tiandituvue_type_template_id_6914ef6e_render

/* harmony default export */ var vc_provider_terrain_tianditu = __webpack_exports__["default"] = (vc_provider_terrain_tiandituvue_type_script_lang_ts);

/***/ })

}]);