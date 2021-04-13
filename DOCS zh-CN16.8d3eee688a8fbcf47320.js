(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-polyline.md?vue&type=template&id=2c23cf66

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"xian\"><a class=\"header-anchor\" href=\"#xian\">¶</a> 线</h2><p><code>vc-graphics-polyline</code> 组件用于加载点实体，相当于初始化一个 <code>Cesium.PolylineGraphics</code> 实例。需要作为 <code>vc-entity</code> 的子组件才能正常加载。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>线实体组件的基础用法。</p>", 4);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-graphics-polyline"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加线实体对象。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-polyline\n        :positions=\"[{ lng: 90, lat: 20, height: 10000 }, { lng: 120, lat: 20, height: 10000 }]\"\n        material=\"red\"\n        :width=\"5\"\n        :clampToGround=\"false\"\n      ></vc-graphics-polyline>\n    </vc-entity>\n    <vc-entity>\n      <vc-graphics-polyline\n        :positions=\"[90, 30, 1000, 120, 30, 1000]\"\n        :material=\"{fabric: { type: 'PolylineGlow', uniforms: { glowPower: 0.2, color: 'blue' }}}\"\n        :width=\"10\"\n      ></vc-graphics-polyline>\n    </vc-entity>\n    <vc-entity>\n      <vc-graphics-polyline\n        :positions=\"[[90, 40, 1000], [120, 40, 1000]]\"\n        :material=\"{fabric: { type: 'PolylineArrow', uniforms: { color: 'purple' }}}\"\n        :width=\"10\"\n      ></vc-graphics-polyline>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const point1 = ref(null)\n      const point2 = ref(null)\n      const point3 = ref(null)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n      return {\n        onEntityEvt,\n        onViewerReady\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定线是否可显示。</td></tr><tr><td>positions</td><td>Array</td><td></td><td><code>optional</code> 指定表示线条的位置数组。</td></tr><tr><td>width</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定线的宽度（像素）。</td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> 指定每个经纬度之间的采样粒度。 arcType 不是 ArcType.NONE 时有效。</td></tr><tr><td>material</td><td>Object|String|Array</td><td><code>&#39;WHITE&#39;</code></td><td><code>optional</code> 指定用于绘制线的材质。</td></tr><tr><td>depthFailMaterial</td><td>Object|String|Array</td><td></td><td><code>optional</code> 指定用于绘制低于地形的线的材质。</td></tr><tr><td>arcType</td><td>Number</td><td><code>1</code></td><td><code>optional</code> 指定线条类型。</td></tr><tr><td>clampToGround</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定线是否贴地。</td></tr><tr><td>shadows</td><td>Number</td><td></td><td><code>optional</code> 指定这些是否投射或接收来自每个光源的阴影。</td></tr><tr><td>classificationType</td><td>Number</td><td><code>2</code></td><td><code>optional</code> 指定相机到线的距离。</td></tr><tr><td>distanceDisplayCondition</td><td>Object</td><td></td><td><code>optional</code> 指定相机到线的距离。</td></tr><tr><td>zIndex</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定用于排序地面几何的 zIndex。 仅当<code>clampToGround</code>为真且支持地形上的折线时才有效。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>definitionChanged</td><td></td><td>每当更改或修改属性或子属性时触发该事件。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PolylineGraphics.html\">PolylineGraphics</a></strong></li></ul>", 6);

function vc_graphics_polylinevue_type_template_id_2c23cf66_render(_ctx, _cache, $props, $setup, $data, $options) {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-polyline.md?vue&type=template&id=2c23cf66

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-polyline.md?vue&type=script&lang=ts


/* harmony default export */ var vc_graphics_polylinevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_vc_graphics_polyline = _resolveComponent("vc-graphics-polyline");

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
                  onClick: _ctx.onEntityEvt,
                  onMouseover: _ctx.onEntityEvt,
                  onMouseout: _ctx.onEntityEvt
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_polyline, {
                      positions: [{
                        lng: 90,
                        lat: 20,
                        height: 10000
                      }, {
                        lng: 120,
                        lat: 20,
                        height: 10000
                      }],
                      material: "red",
                      width: 5,
                      clampToGround: false
                    })];
                  }),
                  _: 1
                }, 8, ["onClick", "onMouseover", "onMouseout"]), _createVNode(_component_vc_entity, null, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_polyline, {
                      positions: [90, 30, 1000, 120, 30, 1000],
                      material: {
                        fabric: {
                          type: 'PolylineGlow',
                          uniforms: {
                            glowPower: 0.2,
                            color: 'blue'
                          }
                        }
                      },
                      width: 10
                    }, null, 8, ["material"])];
                  }),
                  _: 1
                }), _createVNode(_component_vc_entity, null, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_polyline, {
                      positions: [[90, 40, 1000], [120, 40, 1000]],
                      material: {
                        fabric: {
                          type: 'PolylineArrow',
                          uniforms: {
                            color: 'purple'
                          }
                        }
                      },
                      width: 10
                    })];
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
          var point1 = ref(null);
          var point2 = ref(null);
          var point3 = ref(null); // methods

          var onEntityEvt = function onEntityEvt(e) {
            console.log(e);
          };

          var onViewerReady = function onViewerReady(cesiumInstance) {
            console.log('viewer ready');
          };

          return {
            onEntityEvt: onEntityEvt,
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
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-polyline.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-polyline.md



vc_graphics_polylinevue_type_script_lang_ts.render = vc_graphics_polylinevue_type_template_id_2c23cf66_render

/* harmony default export */ var vc_graphics_polyline = __webpack_exports__["default"] = (vc_graphics_polylinevue_type_script_lang_ts);

/***/ })

}]);