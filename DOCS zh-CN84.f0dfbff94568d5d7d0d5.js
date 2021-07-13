(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[175],{

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/providers/vc-provider-terrain-tianditu.md?vue&type=template&id=5fd57a63

var vc_provider_terrain_tiandituvue_type_template_id_5fd57a63_hoisted_1 = {
  class: "content element-doc"
};

var vc_provider_terrain_tiandituvue_type_template_id_5fd57a63_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h2", {
  id: "vcproviderterraintianditu"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vcproviderterraintianditu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" VcProviderTerrainTianditu")], -1);

var vc_provider_terrain_tiandituvue_type_template_id_5fd57a63_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "加载天地图在线地形。", -1);

var vc_provider_terrain_tiandituvue_type_template_id_5fd57a63_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-provider-terrain-tianditu"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 组件的基础用法。")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-provider-terrain-tianditu"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加由天地图提供的在线地形瓦片服务。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"ready\" :camera=\"{position: [102.8,30.57,6000],heading: 162, pitch: -18.25, roll: 0.05}\">\n    <vc-provider-terrain-tianditu ref=\"provider\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-terrain-tianditu>\n    <vc-layer-imagery>\n      <vc-provider-imagery-tianditu mapStyle=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n    <vc-layer-imagery>\n      <vc-provider-imagery-tianditu mapStyle=\"cva_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n      <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const provider = ref(null)\n      let viewer = undefined\n      // methods\n      const unload = () => {\n        provider.value.unload()\n      }\n      const reload = () => {\n        provider.value.reload()\n      }\n      const load = () => {\n        provider.value.load()\n      }\n      const ready = ({ Cesium, viewer }) => {\n      }\n      return {\n        ready,\n        provider,\n        unload,\n        reload,\n        load\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>url</td><td>String</td><td><code>&#39;https://{s}.tianditu.gov.cn/&#39;</code></td><td><code>required</code> 指定服务地址。</td></tr><tr><td>subdomains</td><td>Array</td><td><code>false</code></td><td><code>[&#39;t0&#39;, &#39;t1&#39;, &#39;t2&#39;, &#39;t3&#39;, &#39;t4&#39;, &#39;t5&#39;, &#39;t6&#39;, &#39;t7&#39;]</code> 指定轮询子域名。</td></tr><tr><td>pluginPath</td><td>String</td><td><code>&#39;https://api.tianditu.gov.cn/cdn/plugins/cesium/cesiumTdt.js&#39;</code></td><td><code>optional</code> 指定天地图地形插件库地址。</td></tr><tr><td>dataType</td><td>String</td><td><code>int</code></td><td><code>optional</code> 指定数据类型。</td></tr><tr><td>tileType</td><td>String</td><td><code>heightmap</code></td><td><code>optional</code> 指定瓦片类型。</td></tr><tr><td>token</td><td>String</td><td></td><td><code>optional</code> 指定天地图服务秘钥。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>errorEvent</td><td>TileProviderError</td><td>当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。</td></tr><tr><td>readyPromise</td><td>TerrainProvider</td><td>当图层提供者可用时触发, 返回 TerrainProvider 实例。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>资料： <strong><a href=\"http://lbs.tianditu.gov.cn/docs/#/sanwei/\">天地图帮助文档</a></strong></li></ul>", 6);

function vc_provider_terrain_tiandituvue_type_template_id_5fd57a63_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_provider_terrain_tiandituvue_type_template_id_5fd57a63_hoisted_1, [vc_provider_terrain_tiandituvue_type_template_id_5fd57a63_hoisted_2, vc_provider_terrain_tiandituvue_type_template_id_5fd57a63_hoisted_3, vc_provider_terrain_tiandituvue_type_template_id_5fd57a63_hoisted_4, _hoisted_5, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-provider-terrain-tianditu.md?vue&type=template&id=5fd57a63

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/providers/vc-provider-terrain-tianditu.md?vue&type=script&lang=ts


/* harmony default export */ var vc_provider_terrain_tiandituvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-toolbar"
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("销毁");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("加载");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("重载");

      function render(_ctx, _cache) {
        var _component_vc_provider_terrain_tianditu = _resolveComponent("vc-provider-terrain-tianditu");

        var _component_vc_provider_imagery_tianditu = _resolveComponent("vc-provider-imagery-tianditu");

        var _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, {
              onReady: _ctx.ready,
              camera: {
                position: [102.8, 30.57, 6000],
                heading: 162,
                pitch: -18.25,
                roll: 0.05
              }
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_provider_terrain_tianditu, {
                  ref: "provider",
                  token: "436ce7e50d27eede2f2929307e6b33c0"
                }, null, 512), _createVNode(_component_vc_layer_imagery, null, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_tianditu, {
                      mapStyle: "img_c",
                      token: "436ce7e50d27eede2f2929307e6b33c0"
                    })];
                  }),
                  _: 1
                }), _createVNode(_component_vc_layer_imagery, null, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_tianditu, {
                      mapStyle: "cva_c",
                      token: "436ce7e50d27eede2f2929307e6b33c0"
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }, 8, ["onReady", "camera"]), _createVNode("div", _hoisted_1, [_createVNode(_component_el_row, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.unload
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.load
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.reload
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_4];
                  }),
                  _: 1
                }, 8, ["onClick"])];
              }),
              _: 1
            })])];
          }),
          _: 1
        }, 512)]);
      }

      var ref = vue_esm_browser["K" /* ref */],
          getCurrentInstance = vue_esm_browser["q" /* getCurrentInstance */];
      var democomponentExport = {
        setup: function setup() {
          // state
          var instance = getCurrentInstance();
          var provider = ref(null);
          var viewer = undefined; // methods

          var unload = function unload() {
            provider.value.unload();
          };

          var reload = function reload() {
            provider.value.reload();
          };

          var load = function load() {
            provider.value.load();
          };

          var ready = function ready(_ref) {
            var Cesium = _ref.Cesium,
                viewer = _ref.viewer;
          };

          return {
            ready: ready,
            provider: provider,
            unload: unload,
            reload: reload,
            load: load
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-provider-terrain-tianditu.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/providers/vc-provider-terrain-tianditu.md



vc_provider_terrain_tiandituvue_type_script_lang_ts.render = vc_provider_terrain_tiandituvue_type_template_id_5fd57a63_render

/* harmony default export */ var vc_provider_terrain_tianditu = __webpack_exports__["default"] = (vc_provider_terrain_tiandituvue_type_script_lang_ts);

/***/ })

}]);