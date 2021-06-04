(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[111],{

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-box.md?vue&type=template&id=f1b402b0

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcgraphicsbox\"><a class=\"header-anchor\" href=\"#vcgraphicsbox\">¶</a> VcGraphicsBox</h2><p>加载立方盒实体，相当于初始化一个 <code>Cesium.BoxGraphics</code> 实例。</p><p><strong>注意：</strong> 需要作为 <code>vc-entity</code> 的子组件才能正常加载。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>立方盒组件的基础用法。</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-graphics-box"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加实体立方盒。")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- 通过属性加载 和 子组件分别加载 -->\n    <vc-entity\n      ref=\"entity1\"\n      :position=\"options.position1\"\n      :description=\"options.description\"\n      @click=\"onEntityEvt\"\n      @mouseover=\"onEntityEvt\"\n      @mouseout=\"onEntityEvt\"\n    >\n      <vc-graphics-box :dimensions=\"options.dimensions1\" :material=\"options.material1\"></vc-graphics-box>\n    </vc-entity>\n    <vc-entity ref=\"entity2\" :position=\"options.position2\" :description=\"options.description\">\n      <vc-graphics-box\n        :dimensions=\"options.dimensions2\"\n        :material=\"options.material2\"\n        :outlineColor=\"options.outlineColor2\"\n        :outline=\"true\"\n      ></vc-graphics-box>\n    </vc-entity>\n    <vc-entity ref=\"entity3\" :position=\"options.position3\" :description=\"options.description\">\n      <vc-graphics-box :dimensions=\"options.dimensions3\" :outlineColor=\"options.outlineColor3\" :fill=\"false\" :outline=\"true\"></vc-graphics-box>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const options = {\n        description: 'Hello Vue Cesium',\n\n        position1: { lng: 105.0, lat: 40.0, height: 300000.0 },\n        dimensions1: { x: 400000.0, y: 300000.0, z: 500000.0 },\n        material1: 'BLUE',\n\n        position2: { lng: 110.0, lat: 40.0, height: 300000.0 },\n        dimensions2: { x: 400000.0, y: 300000.0, z: 500000.0 },\n        material2: 'RED',\n        outlineColor2: 'BLACK',\n\n        position3: { lng: 100.0, lat: 40.0, height: 300000.0 },\n        dimensions3: { x: 400000.0, y: 300000.0, z: 500000.0 },\n        outlineColor3: 'YELLOW'\n      }\n      const entity1 = ref(null)\n      const entity2 = ref(null)\n      const entity3 = ref(null)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      // life cycle\n      onMounted(() => {\n        Promise.all([entity1.value.createPromise, entity2.value.createPromise, entity3.value.createPromise]).then(instances => {\n          instances[0].viewer.zoomTo(instances[0].viewer.entities)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        entity1,\n        entity2,\n        entity3,\n        options\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 box 是否可见。</td><td></td></tr><tr><td>dimensions</td><td>Object|Array|Function</td><td></td><td><code>optional</code> 指定 box 的长宽高。</td><td></td></tr><tr><td>heightReference</td><td>Number</td><td></td><td><code>optional</code> 指定 box 高度模式。 <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>fill</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 box 是否按提供的材质填充。</td><td></td></tr><tr><td>material</td><td>String|Object|Array|Function</td><td><code>&#39;WHITE&#39;</code></td><td><code>optional</code> 指定 box 材质。</td><td></td></tr><tr><td>outline</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否绘制 box 轮廓线。</td><td></td></tr><tr><td>outlineColor</td><td>Object|Array|Function</td><td><code>&#39;BLACK&#39;</code></td><td><code>optional</code> 指定是否绘制 box 轮廓线的颜色。</td><td></td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定绘制 box 轮廓线的宽度。</td><td></td></tr><tr><td>shadows</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定这些是否投射或接收来自每个光源的阴影。<strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>distanceDisplayCondition</td><td>DistanceDisplayCondition</td><td></td><td><code>optional</code> 指定 box 显示条件。</td><td></td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>definitionChanged</td><td></td><td>每当更改或修改属性或子属性时触发该事件。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/BoxGraphics.html\">BoxGraphics</a></strong></li></ul>", 6);

function vc_graphics_boxvue_type_template_id_f1b402b0_render(_ctx, _cache, $props, $setup, $data, $options) {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-box.md?vue&type=template&id=f1b402b0

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-box.md?vue&type=script&lang=ts


/* harmony default export */ var vc_graphics_boxvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_vc_graphics_box = _resolveComponent("vc-graphics-box");

        var _component_vc_entity = _resolveComponent("vc-entity");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_entity, {
                  ref: "entity1",
                  position: _ctx.options.position1,
                  description: _ctx.options.description,
                  onClick: _ctx.onEntityEvt,
                  onMouseover: _ctx.onEntityEvt,
                  onMouseout: _ctx.onEntityEvt
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_box, {
                      dimensions: _ctx.options.dimensions1,
                      material: _ctx.options.material1
                    }, null, 8, ["dimensions", "material"])];
                  }),
                  _: 1
                }, 8, ["position", "description", "onClick", "onMouseover", "onMouseout"]), _createVNode(_component_vc_entity, {
                  ref: "entity2",
                  position: _ctx.options.position2,
                  description: _ctx.options.description
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_box, {
                      dimensions: _ctx.options.dimensions2,
                      material: _ctx.options.material2,
                      outlineColor: _ctx.options.outlineColor2,
                      outline: true
                    }, null, 8, ["dimensions", "material", "outlineColor"])];
                  }),
                  _: 1
                }, 8, ["position", "description"]), _createVNode(_component_vc_entity, {
                  ref: "entity3",
                  position: _ctx.options.position3,
                  description: _ctx.options.description
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_box, {
                      dimensions: _ctx.options.dimensions3,
                      outlineColor: _ctx.options.outlineColor3,
                      fill: false,
                      outline: true
                    }, null, 8, ["dimensions", "outlineColor"])];
                  }),
                  _: 1
                }, 8, ["position", "description"])];
              }),
              _: 1
            })];
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
          var options = {
            description: 'Hello Vue Cesium',
            position1: {
              lng: 105.0,
              lat: 40.0,
              height: 300000.0
            },
            dimensions1: {
              x: 400000.0,
              y: 300000.0,
              z: 500000.0
            },
            material1: 'BLUE',
            position2: {
              lng: 110.0,
              lat: 40.0,
              height: 300000.0
            },
            dimensions2: {
              x: 400000.0,
              y: 300000.0,
              z: 500000.0
            },
            material2: 'RED',
            outlineColor2: 'BLACK',
            position3: {
              lng: 100.0,
              lat: 40.0,
              height: 300000.0
            },
            dimensions3: {
              x: 400000.0,
              y: 300000.0,
              z: 500000.0
            },
            outlineColor3: 'YELLOW'
          };
          var entity1 = ref(null);
          var entity2 = ref(null);
          var entity3 = ref(null); // methods

          var onEntityEvt = function onEntityEvt(e) {
            console.log(e);
          }; // life cycle


          onMounted(function () {
            Promise.all([entity1.value.createPromise, entity2.value.createPromise, entity3.value.createPromise]).then(function (instances) {
              instances[0].viewer.zoomTo(instances[0].viewer.entities);
            });
          });
          return {
            onEntityEvt: onEntityEvt,
            entity1: entity1,
            entity2: entity2,
            entity3: entity3,
            options: options
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-box.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-box.md



vc_graphics_boxvue_type_script_lang_ts.render = vc_graphics_boxvue_type_template_id_f1b402b0_render

/* harmony default export */ var vc_graphics_box = __webpack_exports__["default"] = (vc_graphics_boxvue_type_script_lang_ts);

/***/ })

}]);