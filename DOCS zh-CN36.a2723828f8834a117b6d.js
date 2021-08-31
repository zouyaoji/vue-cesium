(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[122],{

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-model.md?vue&type=template&id=11b6b2f0

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcgraphicsmodel\"><a class=\"header-anchor\" href=\"#vcgraphicsmodel\">¶</a> VcGraphicsModel</h2><p>加载模型实体，相当于初始化一个 <code>Cesium.ModelGraphics</code> 实例。</p><p><strong>注意：</strong> 需要作为 <code>vc-entity</code> 的子组件才能正常加载。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>模型实体组件的基础用法。</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-graphics-model"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加模型实体对象。")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity :position=\"[114, 40, 1.0]\" description=\"Hello Vue Cesium\" @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-model ref=\"model\" uri=\"./SampleData/models/GroundVehicle/GroundVehicle.glb\"></vc-graphics-model>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n\n      const model = ref(null)\n\n      // life cycle\n      onMounted(() => {\n        model.value.createPromise.then(({ Cesium, viewer, cesiumObject }) => {\n          // viewer.zoomTo(viewer.entities)\n          viewer.zoomTo(cesiumObject._vcParent)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        onViewerReady,\n        model\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 model 是否显示。</td><td></td></tr><tr><td>uri</td><td>String</td><td></td><td><code>optional</code> 指定 model 的 url 地址。</td><td></td></tr><tr><td>scale</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定 model 缩放比例。</td><td></td></tr><tr><td>minimumPixelSize</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> 指定 model 的最小像素。</td><td></td></tr><tr><td>maximumScale</td><td>Number</td><td></td><td><code>optional</code> 指定 model 最大像素。</td><td></td></tr><tr><td>incrementallyLoadTextures</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定在加载模型后纹理是否可以继续流入。</td><td></td></tr><tr><td>runAnimations</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否启动模型中的动画。</td><td></td></tr><tr><td>clampAnimations</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定动画在没有帧动画的时候保持最后一个姿势。</td><td></td></tr><tr><td>shadows</td><td>Number</td><td><code>1</code></td><td><code>optional</code> 指定 model 是否投射或接收每个光源的阴影。<strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>heightReference</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 model 的高度模式。<strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>silhouetteColor</td><td>Object|String|Array</td><td><code>&#39;red&#39;</code></td><td><code>optional</code> 指定 model 轮廓线颜色。</td><td></td></tr><tr><td>silhouetteSize</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> 指定 model 轮廓线像素尺寸。</td><td></td></tr><tr><td>color</td><td>Object|String|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> 指定 model 渲染混合的颜色。</td><td></td></tr><tr><td>colorBlendMode</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 model 与颜色混合模式。 <strong>HIGHLIGHT: 0, REPLACE: 1, MIX: 2</strong></td><td>0/1/2</td></tr><tr><td>colorBlendAmount</td><td>Number</td><td><code>0.5</code></td><td><code>optional</code> 指定 colorBlendMode 为 MIX 的颜色强度。0 表示模型颜色，1 表示纯色，0-1 表示混合。</td><td></td></tr><tr><td>imageBasedLightingFactor</td><td>Object|Array</td><td><code>{x: 1.0, y: 1.0}</code></td><td><code>optional</code> 指定漫反射和镜面反射因子。</td><td></td></tr><tr><td>lightColor</td><td>Object|String|Array</td><td></td><td><code>optional</code> 指定着色模型时要使用的灯光颜色的属性。未指定是太阳颜色。</td><td></td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> 指定模型随相机改变的显示条件。</td><td></td></tr><tr><td>nodeTransformations</td><td>Object</td><td></td><td><code>optional</code> 设置 TranslationRotationScale 节点转换参数。</td><td></td></tr><tr><td>articulations</td><td>Object</td><td></td><td><code>optional</code></td><td></td></tr><tr><td>clippingPlanes</td><td>Object</td><td></td><td><code>optional</code> 指定模型屏幕裁剪参数。</td><td></td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>definitionChanged</td><td></td><td>每当更改或修改属性或子属性时触发该事件。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/ModelGraphics.html\">ModelGraphics</a></strong></li></ul>", 6);

function vc_graphics_modelvue_type_template_id_11b6b2f0_render(_ctx, _cache, $props, $setup, $data, $options) {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-model.md?vue&type=template&id=11b6b2f0

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-model.md?vue&type=script&lang=ts


/* harmony default export */ var vc_graphics_modelvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_vc_graphics_model = _resolveComponent("vc-graphics-model");

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
                  position: [114, 40, 1.0],
                  description: "Hello Vue Cesium",
                  onClick: _ctx.onEntityEvt,
                  onMouseover: _ctx.onEntityEvt,
                  onMouseout: _ctx.onEntityEvt
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_model, {
                      ref: "model",
                      uri: "./SampleData/models/GroundVehicle/GroundVehicle.glb"
                    }, null, 512)];
                  }),
                  _: 1
                }, 8, ["position", "onClick", "onMouseover", "onMouseout"])];
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
          // methods
          var onEntityEvt = function onEntityEvt(e) {
            console.log(e);
          };

          var onViewerReady = function onViewerReady(cesiumInstance) {
            console.log('viewer ready');
          };

          var model = ref(null); // life cycle

          onMounted(function () {
            model.value.createPromise.then(function (_ref) {
              var Cesium = _ref.Cesium,
                  viewer = _ref.viewer,
                  cesiumObject = _ref.cesiumObject;
              // viewer.zoomTo(viewer.entities)
              viewer.zoomTo(cesiumObject._vcParent);
            });
          });
          return {
            onEntityEvt: onEntityEvt,
            onViewerReady: onViewerReady,
            model: model
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-model.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-model.md



vc_graphics_modelvue_type_script_lang_ts.render = vc_graphics_modelvue_type_template_id_11b6b2f0_render

/* harmony default export */ var vc_graphics_model = __webpack_exports__["default"] = (vc_graphics_modelvue_type_script_lang_ts);

/***/ })

}]);