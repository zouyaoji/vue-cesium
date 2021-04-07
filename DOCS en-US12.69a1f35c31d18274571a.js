(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-plane.md?vue&type=template&id=34abf036

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"ping-mian\"><a class=\"header-anchor\" href=\"#ping-mian\">¶</a> 平面</h2><p><code>vc-graphics-plane</code> 组件用于加载平面实体，相当于初始化一个 <code>Cesium.PlaneGraphics</code> 实例。需要作为 <code>vc-entity</code> 的子组件才能正常加载。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>平面实体组件的基础用法。</p>", 4);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-graphics-plane"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加平面实体对象。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity :position=\"[114, 40, 300000]\" description=\"Hello Vue Cesium\">\n      <vc-graphics-plane\n        ref=\"plane1\"\n        :plane=\"{normal: { x: 1, y: 0, z: 0 }, distance: 0.0}\"\n        :dimensions=\"[400000, 300000]\"\n        material=\"blue\"\n      ></vc-graphics-plane>\n    </vc-entity>\n    <vc-entity :position=\"[107,40, 300000]\" description=\"Hello Vue Cesium\">\n      <vc-graphics-plane\n        ref=\"plane2\"\n        :plane=\"[{ x: 0, y: 1, z: 0 }, 0]\"\n        :dimensions=\"[400000, 300000]\"\n        :material=\"[255, 0, 0, 125]\"\n        :outline=\"true\"\n        outlineColor=\"black\"\n      ></vc-graphics-plane>\n    </vc-entity>\n    <vc-entity :position=\"[100, 40, 300000]\" description=\"Hello Vue Cesium\">\n      <vc-graphics-plane\n        ref=\"plane3\"\n        :plane=\"{ normal: { x: 0, y: 0, z: 1 }, distance: 0.0 }\"\n        :dimensions=\"{ x: 400000.0, y: 300000.0 }\"\n        :fill=\"false\"\n        :outline=\"true\"\n        outlineColor=\"yellow\"\n      ></vc-graphics-plane>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const plane1 = ref(null)\n      const plane2 = ref(null)\n      const plane3 = ref(null)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n      // life cycle\n      onMounted(() => {\n        Promise.all([plane1.value.createPromise, plane2.value.createPromise, plane3.value.createPromise]).then(instances => {\n          instances[0].viewer.zoomTo(instances[0].viewer.entities)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        plane1,\n        plane2,\n        plane3,\n        onViewerReady\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 plane 是否显示。</td></tr><tr><td>plane</td><td>Object</td><td></td><td><code>optional</code> 指定 plane 的法线和距离。</td></tr><tr><td>dimensions</td><td>Object</td><td></td><td><code>optional</code> 指定 plane 的宽和高。</td></tr><tr><td>fill</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 plane 是否填充材质。</td></tr><tr><td>material</td><td>Object|String|Array</td><td><code>&#39;WHITE&#39;</code></td><td><code>optional</code> 指定 plane 的材质。</td></tr><tr><td>outline</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定 plane 是否绘制轮廓线。</td></tr><tr><td>outlineColor</td><td>Object|String|Array</td><td><code>&#39;BLACK&#39;</code></td><td><code>optional</code> 指定 plane 轮廓线颜色。</td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定 plane 轮廓线宽度。</td></tr><tr><td>shadows</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 plane 是否投射或接收阴影。</td></tr><tr><td>distanceDisplayCondition</td><td>Object</td><td></td><td><code>optional</code> 指定 plane 随相机距离改变的显示条件。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>definitionChanged</td><td></td><td>每当更改或修改属性或子属性时触发该事件。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PlaneGraphics.html\">PlaneGraphics</a></strong></li></ul>", 6);

function vc_graphics_planevue_type_template_id_34abf036_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-plane.md?vue&type=template&id=34abf036

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-plane.md?vue&type=script&lang=ts


/* harmony default export */ var vc_graphics_planevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_vc_graphics_plane = _resolveComponent("vc-graphics-plane");

        var _component_vc_entity = _resolveComponent("vc-entity");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

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
                return [_createVNode(_component_vc_entity, {
                  position: [114, 40, 300000],
                  description: "Hello Vue Cesium"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_plane, {
                      ref: "plane1",
                      plane: {
                        normal: {
                          x: 1,
                          y: 0,
                          z: 0
                        },
                        distance: 0.0
                      },
                      dimensions: [400000, 300000],
                      material: "blue"
                    }, null, 8, ["plane"])];
                  }),
                  _: 1
                }), _createVNode(_component_vc_entity, {
                  position: [107, 40, 300000],
                  description: "Hello Vue Cesium"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_plane, {
                      ref: "plane2",
                      plane: [{
                        x: 0,
                        y: 1,
                        z: 0
                      }, 0],
                      dimensions: [400000, 300000],
                      material: [255, 0, 0, 125],
                      outline: true,
                      outlineColor: "black"
                    }, null, 512)];
                  }),
                  _: 1
                }), _createVNode(_component_vc_entity, {
                  position: [100, 40, 300000],
                  description: "Hello Vue Cesium"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_plane, {
                      ref: "plane3",
                      plane: {
                        normal: {
                          x: 0,
                          y: 0,
                          z: 1
                        },
                        distance: 0.0
                      },
                      dimensions: {
                        x: 400000.0,
                        y: 300000.0
                      },
                      fill: false,
                      outline: true,
                      outlineColor: "yellow"
                    }, null, 8, ["plane", "dimensions"])];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }, 8, ["onReady"])];
          }),
          _: 1
        }, 512)]);
      }

      var ref = vue_esm_browser["K" /* ref */],
          getCurrentInstance = vue_esm_browser["q" /* getCurrentInstance */],
          onMounted = vue_esm_browser["C" /* onMounted */];
      var democomponentExport = {
        setup: function setup() {
          // state
          var plane1 = ref(null);
          var plane2 = ref(null);
          var plane3 = ref(null); // methods

          var onEntityEvt = function onEntityEvt(e) {
            console.log(e);
          };

          var onViewerReady = function onViewerReady(cesiumInstance) {
            console.log('viewer ready');
          }; // life cycle


          onMounted(function () {
            Promise.all([plane1.value.createPromise, plane2.value.createPromise, plane3.value.createPromise]).then(function (instances) {
              instances[0].viewer.zoomTo(instances[0].viewer.entities);
            });
          });
          return {
            onEntityEvt: onEntityEvt,
            plane1: plane1,
            plane2: plane2,
            plane3: plane3,
            onViewerReady: onViewerReady
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-plane.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-plane.md



vc_graphics_planevue_type_script_lang_ts.render = vc_graphics_planevue_type_template_id_34abf036_render

/* harmony default export */ var vc_graphics_plane = __webpack_exports__["default"] = (vc_graphics_planevue_type_script_lang_ts);

/***/ })

}]);