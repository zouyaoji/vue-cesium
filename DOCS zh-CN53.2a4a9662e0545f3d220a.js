(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[139],{

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/post-processes/vc-post-process-stage-scan.md?vue&type=template&id=3cc67460

var vc_post_process_stage_scanvue_type_template_id_3cc67460_hoisted_1 = {
  class: "content element-doc"
};

var vc_post_process_stage_scanvue_type_template_id_3cc67460_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h2", {
  id: "vcpostprocessstagescan"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vcpostprocessstagescan"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" VcPostProcessStageScan")], -1);

var vc_post_process_stage_scanvue_type_template_id_3cc67460_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "通过后期处理封装的扫描特效，雷达扫描和圆形扫描。", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "扫描特效组件的基础用法。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-post-process-stage-scan"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加后处理扫描效果。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-post-process-stage-scan ref=\"radar\" type=\"radar\" :options=\"options1\"></vc-post-process-stage-scan>\n    <vc-post-process-stage-scan ref=\"circle\" type=\"circle\" :options=\"options2\"></vc-post-process-stage-scan>\n    <!-- 底图 -->\n    <vc-layer-imagery :sortOrder=\"20\">\n      <vc-provider-imagery-tianditu mapStyle=\"cva_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n    <vc-layer-imagery :sortOrder=\"10\">\n      <vc-provider-imagery-tianditu mapStyle=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        options1: {\n          position: [117.217124, 31.809777],\n          radius: 1500,\n          interval: 1500,\n          color: [255, 255, 0, 255]\n        },\n        options2: {\n          position: [117.257124, 31.809777],\n          radius: 1500,\n          interval: 1500,\n          color: [255, 0, 0, 255]\n        }\n      }\n    },\n    methods: {\n      onViewerReady({ viewer }) {\n        viewer.scene.globe.depthTestAgainstTerrain = true\n        viewer.camera.flyTo({\n          destination: Cesium.Cartesian3.fromDegrees(117.237124, 31.809777, 10000.0),\n          orientation: {\n            heading: Cesium.Math.toRadians(0), // east, default value is 0.0 (north) //东西南北朝向\n            pitch: Cesium.Math.toRadians(-90), // default value (looking down)  //俯视仰视视觉\n            roll: 0.0 // default value\n          },\n          duration: 3 //3秒到达战场\n        })\n      },\n      unload() {\n        this.$refs.circle.unload()\n        this.$refs.radar.unload()\n      },\n      load() {\n        this.$refs.circle.load()\n        this.$refs.radar.load()\n      },\n      reload() {\n        this.$refs.circle.reload()\n        this.$refs.radar.reload()\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>type</td><td>String</td><td><code>&#39;radar&#39;</code></td><td><code>optional</code> 指定扫描类型，可选值 &#39;radar&#39;, &#39;circle&#39;。</td></tr><tr><td>options</td><td>Object</td><td><code>{ position: [0, 0], radius: 1500, interval: 3500, color: [0, 0, 0, 255] }</code></td><td><code>optional</code> 指定可选参数。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr></tbody></table>", 4);

function vc_post_process_stage_scanvue_type_template_id_3cc67460_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_post_process_stage_scanvue_type_template_id_3cc67460_hoisted_1, [vc_post_process_stage_scanvue_type_template_id_3cc67460_hoisted_2, vc_post_process_stage_scanvue_type_template_id_3cc67460_hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/post-processes/vc-post-process-stage-scan.md?vue&type=template&id=3cc67460

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/post-processes/vc-post-process-stage-scan.md?vue&type=script&lang=ts


/* harmony default export */ var vc_post_process_stage_scanvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

      function render(_ctx, _cache) {
        var _component_vc_post_process_stage_scan = _resolveComponent("vc-post-process-stage-scan");

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
              onReady: _ctx.onViewerReady
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_post_process_stage_scan, {
                  ref: "radar",
                  type: "radar",
                  options: _ctx.options1
                }, null, 8, ["options"]), _createVNode(_component_vc_post_process_stage_scan, {
                  ref: "circle",
                  type: "circle",
                  options: _ctx.options2
                }, null, 8, ["options"]), _createVNode(_component_vc_layer_imagery, {
                  sortOrder: 20
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_tianditu, {
                      mapStyle: "cva_c",
                      token: "436ce7e50d27eede2f2929307e6b33c0"
                    })];
                  }),
                  _: 1
                }), _createVNode(_component_vc_layer_imagery, {
                  sortOrder: 10
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_tianditu, {
                      mapStyle: "img_c",
                      token: "436ce7e50d27eede2f2929307e6b33c0"
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }, 8, ["onReady"]), _createVNode(_component_el_row, {
              class: "demo-toolbar"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.unload
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.load
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.reload
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }, 8, ["onClick"])];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 512)]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            options1: {
              position: [117.217124, 31.809777],
              radius: 1500,
              interval: 1500,
              color: [255, 255, 0, 255]
            },
            options2: {
              position: [117.257124, 31.809777],
              radius: 1500,
              interval: 1500,
              color: [255, 0, 0, 255]
            }
          };
        },
        methods: {
          onViewerReady: function onViewerReady(_ref) {
            var viewer = _ref.viewer;
            viewer.scene.globe.depthTestAgainstTerrain = true;
            viewer.camera.flyTo({
              destination: Cesium.Cartesian3.fromDegrees(117.237124, 31.809777, 10000.0),
              orientation: {
                heading: Cesium.Math.toRadians(0),
                // east, default value is 0.0 (north) //东西南北朝向
                pitch: Cesium.Math.toRadians(-90),
                // default value (looking down)  //俯视仰视视觉
                roll: 0.0 // default value

              },
              duration: 3 //3秒到达战场

            });
          },
          unload: function unload() {
            this.$refs.circle.unload();
            this.$refs.radar.unload();
          },
          load: function load() {
            this.$refs.circle.load();
            this.$refs.radar.load();
          },
          reload: function reload() {
            this.$refs.circle.reload();
            this.$refs.radar.reload();
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/post-processes/vc-post-process-stage-scan.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/post-processes/vc-post-process-stage-scan.md



vc_post_process_stage_scanvue_type_script_lang_ts.render = vc_post_process_stage_scanvue_type_template_id_3cc67460_render

/* harmony default export */ var vc_post_process_stage_scan = __webpack_exports__["default"] = (vc_post_process_stage_scanvue_type_script_lang_ts);

/***/ })

}]);