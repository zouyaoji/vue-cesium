(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[127],{

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-polygon.md?vue&type=template&id=1aadb830

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcgraphicspolygon\"><a class=\"header-anchor\" href=\"#vcgraphicspolygon\">¶</a> VcGraphicsPolygon</h2><p>加载面实体，相当于初始化一个 <code>Cesium.PolygonGraphics</code> 实例。</p><p><strong>注意：</strong> 需要作为 <code>vc-entity</code> 的子组件才能正常加载。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>面实体组件的基础用法。</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-graphics-polygon"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加面实体对象。")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-polygon ref=\"polygon1\" :hierarchy=\"[[-115,37],[-115,32],[-107,33],[-102,31],[-102,35]]\" material=\"red\"></vc-graphics-polygon>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-polygon\n        :hierarchy=\"[{ lng: -108.0, lat: 42.0 }, { lng: -100.0, lat: 42.0 }, { lng: -104.0, lat: 40.0 }]\"\n        material=\"green\"\n        :extrudedHeight=\"500000.0\"\n        :closeTop=\"false\"\n        :closeBottom=\"false\"\n        ref=\"polygon2\"\n      ></vc-graphics-polygon>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-polygon\n        :hierarchy=\"[[-108,25,100000],[-100,25,100000],[-100,30,100000],[-108,30,100000]]\"\n        :material=\"[255,165,0,125]\"\n        :extrudedHeight=\"0\"\n        :perPositionHeight=\"true\"\n        :outline=\"true\"\n        outlineColor=\"black\"\n        ref=\"polygon3\"\n      ></vc-graphics-polygon>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-polygon :hierarchy=\"hierarchy4\" :material=\"[0,0,255,125]\" :height=\"0\" :outline=\"true\" ref=\"polygon4\"></vc-graphics-polygon>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-polygon\n        :hierarchy=\"[-90.0, 41.0, 0.0, -85.0, 41.0, 500000.0, -80.0, 41.0, 0.0]\"\n        :material=\"[0,255,255,125]\"\n        :perPositionHeight=\"true\"\n        :outline=\"true\"\n        outlineColor=\"black\"\n        ref=\"polygon5\"\n      ></vc-graphics-polygon>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-polygon\n        :hierarchy=\"[[-120,45],[-80,45],[-80,55],[-120,55]]\"\n        material=\"purple\"\n        :extrudedHeight=\"50000\"\n        :outline=\"true\"\n        outlineColor=\"magenta\"\n        ref=\"polygon6\"\n      ></vc-graphics-polygon>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const polygon1 = ref(null)\n      const polygon2 = ref(null)\n      const polygon3 = ref(null)\n      const polygon4 = ref(null)\n      const polygon5 = ref(null)\n      const polygon6 = ref(null)\n      const hierarchy4 = {\n        positions: [\n          { lng: -99.0, lat: 30.0 },\n          { lng: -85.0, lat: 30.0 },\n          { lng: -85.0, lat: 40.0 },\n          { lng: -99.0, lat: 40.0 }\n        ],\n        holes: [\n          {\n            positions: [\n              { lng: -97.0, lat: 31.0 },\n              { lng: -97.0, lat: 39.0 },\n              { lng: -87.0, lat: 39.0 },\n              { lng: -87.0, lat: 31.0 }\n            ],\n            holes: [\n              {\n                positions: [\n                  { lng: -95.0, lat: 33.0 },\n                  { lng: -89.0, lat: 33.0 },\n                  { lng: -89.0, lat: 37.0 },\n                  { lng: -95.0, lat: 37.0 }\n                ],\n                holes: [\n                  {\n                    positions: [\n                      { lng: -93.0, lat: 34.0 },\n                      { lng: -91.0, lat: 34.0 },\n                      { lng: -91.0, lat: 36.0 },\n                      { lng: -93.0, lat: 36.0 }\n                    ]\n                  }\n                ]\n              }\n            ]\n          }\n        ]\n      }\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n      // life cycle\n      onMounted(() => {\n        Promise.all([\n          polygon1.value.createPromise,\n          polygon1.value.createPromise,\n          polygon1.value.createPromise,\n          polygon4.value.createPromise,\n          polygon5.value.createPromise,\n          polygon6.value.createPromise\n        ]).then(instances => {\n          instances[0].viewer.zoomTo(instances[0].viewer.entities)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        polygon1,\n        polygon2,\n        polygon3,\n        polygon4,\n        polygon5,\n        polygon6,\n        onViewerReady,\n        hierarchy4\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 polygon 是否显示。</td><td></td></tr><tr><td>hierarchy</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 polygon 的 PolygonHierarchy 属性。</td><td></td></tr><tr><td>height</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 polygon 的高度。</td><td></td></tr><tr><td>heightReference</td><td>Number</td><td></td><td><code>optional</code> 指定 polygon 高度模式。 <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>extrudedHeight</td><td>Number</td><td></td><td><code>optional</code> 指定 polygon 拉伸高度。</td><td></td></tr><tr><td>extrudedHeightReference</td><td>Number</td><td></td><td><code>optional</code> 指定 polygon 拉伸的高度模式。 <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>stRotation</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> 指定 polygon 纹理按正北方向逆时针旋转角度。</td><td></td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> 指定每个经纬度之间的采样粒度。</td><td></td></tr><tr><td>fill</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 polygon 是否填充材质。</td><td></td></tr><tr><td>material</td><td>Object|String|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> 指定 polygon 材质。</td><td></td></tr><tr><td>outline</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定 polygon 是否绘制轮廓线。</td><td></td></tr><tr><td>outlineColor</td><td>Object|String|Array</td><td><code>&#39;black&#39;</code></td><td><code>optional</code> 指定 polygon 轮廓线颜色。</td><td></td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定 polygon 轮廓线宽度。</td><td></td></tr><tr><td>perPositionHeight</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定 polygon 是否使用每个位置的高度。</td><td></td></tr><tr><td>closeTop</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 polygon 拉伸出来的顶部是否闭合。</td><td></td></tr><tr><td>closeBottom</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 polygon 拉伸出来的底部是否闭合。</td><td></td></tr><tr><td>arcType</td><td>Number</td><td><code>1</code></td><td><code>optional</code> 指定 polygon 线条类型。 <strong>NONE: 0, GEODESIC: 1, RHUMB: 2</strong></td><td>0/1/2</td></tr><tr><td>shadows</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 polygon 是否投射或接收阴影。 <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 polygon 随相机距离改变是否显示参数。</td><td></td></tr><tr><td>classificationType</td><td>Number</td><td><code>2</code></td><td><code>optional</code> 指定 polygon 贴对象模式。 <strong>TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2</strong></td><td>0/1/2</td></tr><tr><td>zIndex</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 polygon 顺序，没有高度和拉伸高度时有效。</td><td></td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>definitionChanged</td><td></td><td>每当更改或修改属性或子属性时触发该事件。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PolygonGraphics.html\">PolygonGraphics</a></strong></li></ul>", 6);

function vc_graphics_polygonvue_type_template_id_1aadb830_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-polygon.md?vue&type=template&id=1aadb830

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-polygon.md?vue&type=script&lang=ts


/* harmony default export */ var vc_graphics_polygonvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_vc_graphics_polygon = _resolveComponent("vc-graphics-polygon");

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
                  description: "Hello Vue Cesium"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_polygon, {
                      ref: "polygon1",
                      hierarchy: [[-115, 37], [-115, 32], [-107, 33], [-102, 31], [-102, 35]],
                      material: "red"
                    }, null, 512)];
                  }),
                  _: 1
                }), _createVNode(_component_vc_entity, {
                  description: "Hello Vue Cesium"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_polygon, {
                      hierarchy: [{
                        lng: -108.0,
                        lat: 42.0
                      }, {
                        lng: -100.0,
                        lat: 42.0
                      }, {
                        lng: -104.0,
                        lat: 40.0
                      }],
                      material: "green",
                      extrudedHeight: 500000.0,
                      closeTop: false,
                      closeBottom: false,
                      ref: "polygon2"
                    }, null, 8, ["hierarchy", "extrudedHeight"])];
                  }),
                  _: 1
                }), _createVNode(_component_vc_entity, {
                  description: "Hello Vue Cesium"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_polygon, {
                      hierarchy: [[-108, 25, 100000], [-100, 25, 100000], [-100, 30, 100000], [-108, 30, 100000]],
                      material: [255, 165, 0, 125],
                      extrudedHeight: 0,
                      perPositionHeight: true,
                      outline: true,
                      outlineColor: "black",
                      ref: "polygon3"
                    }, null, 512)];
                  }),
                  _: 1
                }), _createVNode(_component_vc_entity, {
                  description: "Hello Vue Cesium"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_polygon, {
                      hierarchy: _ctx.hierarchy4,
                      material: [0, 0, 255, 125],
                      height: 0,
                      outline: true,
                      ref: "polygon4"
                    }, null, 8, ["hierarchy"])];
                  }),
                  _: 1
                }), _createVNode(_component_vc_entity, {
                  description: "Hello Vue Cesium"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_polygon, {
                      hierarchy: [-90.0, 41.0, 0.0, -85.0, 41.0, 500000.0, -80.0, 41.0, 0.0],
                      material: [0, 255, 255, 125],
                      perPositionHeight: true,
                      outline: true,
                      outlineColor: "black",
                      ref: "polygon5"
                    }, null, 8, ["hierarchy"])];
                  }),
                  _: 1
                }), _createVNode(_component_vc_entity, {
                  description: "Hello Vue Cesium"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_polygon, {
                      hierarchy: [[-120, 45], [-80, 45], [-80, 55], [-120, 55]],
                      material: "purple",
                      extrudedHeight: 50000,
                      outline: true,
                      outlineColor: "magenta",
                      ref: "polygon6"
                    }, null, 512)];
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
          var polygon1 = ref(null);
          var polygon2 = ref(null);
          var polygon3 = ref(null);
          var polygon4 = ref(null);
          var polygon5 = ref(null);
          var polygon6 = ref(null);
          var hierarchy4 = {
            positions: [{
              lng: -99.0,
              lat: 30.0
            }, {
              lng: -85.0,
              lat: 30.0
            }, {
              lng: -85.0,
              lat: 40.0
            }, {
              lng: -99.0,
              lat: 40.0
            }],
            holes: [{
              positions: [{
                lng: -97.0,
                lat: 31.0
              }, {
                lng: -97.0,
                lat: 39.0
              }, {
                lng: -87.0,
                lat: 39.0
              }, {
                lng: -87.0,
                lat: 31.0
              }],
              holes: [{
                positions: [{
                  lng: -95.0,
                  lat: 33.0
                }, {
                  lng: -89.0,
                  lat: 33.0
                }, {
                  lng: -89.0,
                  lat: 37.0
                }, {
                  lng: -95.0,
                  lat: 37.0
                }],
                holes: [{
                  positions: [{
                    lng: -93.0,
                    lat: 34.0
                  }, {
                    lng: -91.0,
                    lat: 34.0
                  }, {
                    lng: -91.0,
                    lat: 36.0
                  }, {
                    lng: -93.0,
                    lat: 36.0
                  }]
                }]
              }]
            }]
          }; // methods

          var onEntityEvt = function onEntityEvt(e) {
            console.log(e);
          };

          var onViewerReady = function onViewerReady(cesiumInstance) {
            console.log('viewer ready');
          }; // life cycle


          onMounted(function () {
            Promise.all([polygon1.value.createPromise, polygon1.value.createPromise, polygon1.value.createPromise, polygon4.value.createPromise, polygon5.value.createPromise, polygon6.value.createPromise]).then(function (instances) {
              instances[0].viewer.zoomTo(instances[0].viewer.entities);
            });
          });
          return {
            onEntityEvt: onEntityEvt,
            polygon1: polygon1,
            polygon2: polygon2,
            polygon3: polygon3,
            polygon4: polygon4,
            polygon5: polygon5,
            polygon6: polygon6,
            onViewerReady: onViewerReady,
            hierarchy4: hierarchy4
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-polygon.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-polygon.md



vc_graphics_polygonvue_type_script_lang_ts.render = vc_graphics_polygonvue_type_template_id_1aadb830_render

/* harmony default export */ var vc_graphics_polygon = __webpack_exports__["default"] = (vc_graphics_polygonvue_type_script_lang_ts);

/***/ })

}]);