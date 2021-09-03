(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[130],{

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-rectangle.md?vue&type=template&id=22d3ef85

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcgraphicsrectangle\"><a class=\"header-anchor\" href=\"#vcgraphicsrectangle\">¶</a> VcGraphicsRectangle</h2><p>加载矩形实体，相当于初始化一个 <code>Cesium.RectangleGraphics</code> 实例。</p><p><strong>注意：</strong> 需要作为 <code>vc-entity</code> 的子组件才能正常加载。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>矩形实体组件的基础用法。</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-graphics-rectangle"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加矩形实体对象。")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity description=\"Hello Vue Cesium\" @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-rectangle\n        ref=\"rectangle1\"\n        :coordinates=\"{ west: -110, south: 20, east: -80, north: 25 }\"\n        :material=\"[255,0,0,125]\"\n      ></vc-graphics-rectangle>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\" @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-rectangle\n        :coordinates=\"[-110, 30, -100, 40]\"\n        :material=\"[0, 255, 0, 125]\"\n        :rotation=\"45/180\"\n        :extrudedHeight=\"300000.0\"\n        :height=\"100000.0\"\n        :outline=\"true\"\n        outlineColor=\"black\"\n        ref=\"rectangle2\"\n      ></vc-graphics-rectangle>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\" @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-rectangle\n        :coordinates=\"{ west: -92.0, south: 30.0, east: -82.0, north: 40.0 }\"\n        material=\"https://zouyaoji.top/vue-cesium/favicon.png\"\n        :rotation=\"getRotationValue\"\n        :stRotation=\"getRotationValue\"\n        :classificationType=\"0\"\n        ref=\"rectangle3\"\n      ></vc-graphics-rectangle>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const rectangle1 = ref(null)\n      const rectangle2 = ref(null)\n      const rectangle3 = ref(null)\n      const rotation = ref(0)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n      const getRotationValue = () => {\n        rotation.value += 0.005\n        return rotation.value\n      }\n      // life cycle\n      onMounted(() => {\n        Promise.all([rectangle1.value.createPromise, rectangle2.value.createPromise, rectangle3.value.createPromise]).then(instances => {\n          instances[0].viewer.zoomTo(instances[0].viewer.entities)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        rectangle1,\n        rectangle2,\n        rectangle3,\n        onViewerReady,\n        getRotationValue\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 rectangle 是否显示。</td><td></td></tr><tr><td>coordinates</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 rectangle 的 Rectangle 属性。</td><td></td></tr><tr><td>height</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 rectangle 高度。</td><td></td></tr><tr><td>heightReference</td><td>Number</td><td></td><td><code>optional</code> 指定 rectangle 高度模式。 <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>extrudedHeight</td><td>Number</td><td></td><td><code>optional</code> 指定 rectangle 拉伸高度。</td><td></td></tr><tr><td>extrudedHeightReference</td><td>Number</td><td></td><td><code>optional</code> 指定 rectangle 拉伸高度模式。 <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>rotation</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> 指定 rectangle 按正北顺时针的旋转角。</td><td></td></tr><tr><td>stRotation</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> 指定 rectangle 按正北逆时针旋转纹理。</td><td></td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> 指定每个经纬度之间的采样粒度。</td><td></td></tr><tr><td>fill</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 rectangle 是否填充材质。</td><td></td></tr><tr><td>material</td><td>Object|String|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> 指定 rectangle 材质。</td><td></td></tr><tr><td>outline</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定 rectangle 是否绘制轮廓线。</td><td></td></tr><tr><td>outlineColor</td><td>Object|String|Array</td><td><code>&#39;black&#39;</code></td><td><code>optional</code> 指定 rectangle 轮廓线颜色。</td><td></td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定 rectangle 轮廓线宽度。</td><td></td></tr><tr><td>shadows</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 rectangle 是否投射或接收阴影。 <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 rectangle 随相机距离改变是否显示参数。</td><td></td></tr><tr><td>classificationType</td><td>Number</td><td><code>2</code></td><td><code>optional</code> 指定 rectangle 贴对象模式 。 <strong>TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2</strong></td><td>0/1/2</td></tr><tr><td>zIndex</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 rectangle 顺序，没设置高度和拉伸高度时有效。</td><td></td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>definitionChanged</td><td></td><td>每当更改或修改属性或子属性时触发该事件。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/RectangleGraphics.html\">RectangleGraphics</a></strong></li></ul>", 6);

function vc_graphics_rectanglevue_type_template_id_22d3ef85_render(_ctx, _cache, $props, $setup, $data, $options) {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-rectangle.md?vue&type=template&id=22d3ef85

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-rectangle.md?vue&type=script&lang=ts


/* harmony default export */ var vc_graphics_rectanglevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_vc_graphics_rectangle = _resolveComponent("vc-graphics-rectangle");

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
                  description: "Hello Vue Cesium",
                  onClick: _ctx.onEntityEvt,
                  onMouseover: _ctx.onEntityEvt,
                  onMouseout: _ctx.onEntityEvt
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_rectangle, {
                      ref: "rectangle1",
                      coordinates: {
                        west: -110,
                        south: 20,
                        east: -80,
                        north: 25
                      },
                      material: [255, 0, 0, 125]
                    }, null, 512)];
                  }),
                  _: 1
                }, 8, ["onClick", "onMouseover", "onMouseout"]), _createVNode(_component_vc_entity, {
                  description: "Hello Vue Cesium",
                  onClick: _ctx.onEntityEvt,
                  onMouseover: _ctx.onEntityEvt,
                  onMouseout: _ctx.onEntityEvt
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_rectangle, {
                      coordinates: [-110, 30, -100, 40],
                      material: [0, 255, 0, 125],
                      rotation: 45 / 180,
                      extrudedHeight: 300000.0,
                      height: 100000.0,
                      outline: true,
                      outlineColor: "black",
                      ref: "rectangle2"
                    }, null, 8, ["extrudedHeight", "height"])];
                  }),
                  _: 1
                }, 8, ["onClick", "onMouseover", "onMouseout"]), _createVNode(_component_vc_entity, {
                  description: "Hello Vue Cesium",
                  onClick: _ctx.onEntityEvt,
                  onMouseover: _ctx.onEntityEvt,
                  onMouseout: _ctx.onEntityEvt
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_rectangle, {
                      coordinates: {
                        west: -92.0,
                        south: 30.0,
                        east: -82.0,
                        north: 40.0
                      },
                      material: "https://zouyaoji.top/vue-cesium/favicon.png",
                      rotation: _ctx.getRotationValue,
                      stRotation: _ctx.getRotationValue,
                      classificationType: 0,
                      ref: "rectangle3"
                    }, null, 8, ["coordinates", "rotation", "stRotation"])];
                  }),
                  _: 1
                }, 8, ["onClick", "onMouseover", "onMouseout"])];
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
          var rectangle1 = ref(null);
          var rectangle2 = ref(null);
          var rectangle3 = ref(null);
          var rotation = ref(0); // methods

          var onEntityEvt = function onEntityEvt(e) {
            console.log(e);
          };

          var onViewerReady = function onViewerReady(cesiumInstance) {
            console.log('viewer ready');
          };

          var getRotationValue = function getRotationValue() {
            rotation.value += 0.005;
            return rotation.value;
          }; // life cycle


          onMounted(function () {
            Promise.all([rectangle1.value.createPromise, rectangle2.value.createPromise, rectangle3.value.createPromise]).then(function (instances) {
              instances[0].viewer.zoomTo(instances[0].viewer.entities);
            });
          });
          return {
            onEntityEvt: onEntityEvt,
            rectangle1: rectangle1,
            rectangle2: rectangle2,
            rectangle3: rectangle3,
            onViewerReady: onViewerReady,
            getRotationValue: getRotationValue
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-rectangle.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-rectangle.md



vc_graphics_rectanglevue_type_script_lang_ts.render = vc_graphics_rectanglevue_type_template_id_22d3ef85_render

/* harmony default export */ var vc_graphics_rectangle = __webpack_exports__["default"] = (vc_graphics_rectanglevue_type_script_lang_ts);

/***/ })

}]);