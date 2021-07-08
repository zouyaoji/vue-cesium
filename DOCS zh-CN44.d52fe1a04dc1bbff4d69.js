(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[131],{

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-wall.md?vue&type=template&id=46e92ba6

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcgraphicswall\"><a class=\"header-anchor\" href=\"#vcgraphicswall\">¶</a> VcGraphicsWall</h2><p>加载墙实体，相当于初始化一个 <code>Cesium.WallGraphics</code> 实例。</p><p><strong>注意：</strong> 需要作为 <code>vc-entity</code> 的子组件才能正常加载。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>墙体组件的基础用法。</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-graphics-wall"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加墙体对象。")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity description=\"Hello Vue Cesium\" @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-wall\n        ref=\"wall1\"\n        :positions=\"[[-115,44,200000],[-90,44,200000]]\"\n        material=\"red\"\n        :minimumHeights=\"[100000.0, 100000.0]\"\n      ></vc-graphics-wall>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-wall\n        ref=\"wall2\"\n        :positions=\"[-107,43,100000,-97,43,100000,-97,40,100000,-107,40,100000,-107,43,100000]\"\n        material=\"green\"\n        :outline=\"true\"\n      ></vc-graphics-wall>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-wall\n        :positions=\"[[-115,50],[-112,50],[-107.5,50],[-105,50],[-102.5,50],[-100,50],[-97.5,50],[-95,50],[-92.5,50],[-90,50]]\"\n        :material=\"[0,0,125,125]\"\n        :outline=\"true\"\n        outlineColor=\"black\"\n        :maximumHeights=\"[100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000]\"\n        :minimumHeights=\"[0, 100000,  0, 100000, 0, 100000, 0, 100000, 0, 100000]\"\n        ref=\"wall3\"\n      ></vc-graphics-wall>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const wall1 = ref(null)\n      const wall2 = ref(null)\n      const wall3 = ref(null)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n      // life cycle\n      onMounted(() => {\n        Promise.all([wall1.value.createPromise, wall2.value.createPromise, wall3.value.createPromise]).then(instances => {\n          instances[0].viewer.zoomTo(instances[0].viewer.entities)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        wall1,\n        wall2,\n        wall3,\n        onViewerReady\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 wall 是否显示。</td><td></td></tr><tr><td>positions</td><td>Array</td><td></td><td><code>optional</code> 指定 wall 顶部的位置数组。</td><td></td></tr><tr><td>minimumHeights</td><td>Array</td><td></td><td><code>optional</code> 指定 wall 底部的高度数组。</td><td></td></tr><tr><td>maximumHeights</td><td>Array</td><td></td><td><code>optional</code> 指定 wall 顶部的高度数组。</td><td></td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> 指定每个纬度和经度之间的角距离。</td><td></td></tr><tr><td>fill</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 wall 是否填充材质。</td><td></td></tr><tr><td>material</td><td>Object|String|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> 指定 wall 材质。</td><td></td></tr><tr><td>outline</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定 wall 是否绘制轮廓线。</td><td></td></tr><tr><td>outlineColor</td><td>Object|String|Array</td><td><code>&#39;black&#39;</code></td><td><code>optional</code> 指定 wall 轮廓线颜色。</td><td></td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定 wall 轮廓线宽度。</td><td></td></tr><tr><td>shadows</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 wall 是否投射或接收阴影。<strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 wall 随相机距离改变的显示条件。</td><td></td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>definitionChanged</td><td></td><td>每当更改或修改属性或子属性时触发该事件。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/WallGraphics.html\">WallGraphics</a></strong></li></ul>", 6);

function vc_graphics_wallvue_type_template_id_46e92ba6_render(_ctx, _cache, $props, $setup, $data, $options) {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-wall.md?vue&type=template&id=46e92ba6

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-wall.md?vue&type=script&lang=ts


/* harmony default export */ var vc_graphics_wallvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_vc_graphics_wall = _resolveComponent("vc-graphics-wall");

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
                    return [_createVNode(_component_vc_graphics_wall, {
                      ref: "wall1",
                      positions: [[-115, 44, 200000], [-90, 44, 200000]],
                      material: "red",
                      minimumHeights: [100000.0, 100000.0]
                    }, null, 8, ["minimumHeights"])];
                  }),
                  _: 1
                }, 8, ["onClick", "onMouseover", "onMouseout"]), _createVNode(_component_vc_entity, {
                  description: "Hello Vue Cesium"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_wall, {
                      ref: "wall2",
                      positions: [-107, 43, 100000, -97, 43, 100000, -97, 40, 100000, -107, 40, 100000, -107, 43, 100000],
                      material: "green",
                      outline: true
                    }, null, 512)];
                  }),
                  _: 1
                }), _createVNode(_component_vc_entity, {
                  description: "Hello Vue Cesium"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_wall, {
                      positions: [[-115, 50], [-112, 50], [-107.5, 50], [-105, 50], [-102.5, 50], [-100, 50], [-97.5, 50], [-95, 50], [-92.5, 50], [-90, 50]],
                      material: [0, 0, 125, 125],
                      outline: true,
                      outlineColor: "black",
                      maximumHeights: [100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000],
                      minimumHeights: [0, 100000, 0, 100000, 0, 100000, 0, 100000, 0, 100000],
                      ref: "wall3"
                    }, null, 8, ["positions"])];
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
          var wall1 = ref(null);
          var wall2 = ref(null);
          var wall3 = ref(null); // methods

          var onEntityEvt = function onEntityEvt(e) {
            console.log(e);
          };

          var onViewerReady = function onViewerReady(cesiumInstance) {
            console.log('viewer ready');
          }; // life cycle


          onMounted(function () {
            Promise.all([wall1.value.createPromise, wall2.value.createPromise, wall3.value.createPromise]).then(function (instances) {
              instances[0].viewer.zoomTo(instances[0].viewer.entities);
            });
          });
          return {
            onEntityEvt: onEntityEvt,
            wall1: wall1,
            wall2: wall2,
            wall3: wall3,
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
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-wall.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-wall.md



vc_graphics_wallvue_type_script_lang_ts.render = vc_graphics_wallvue_type_template_id_46e92ba6_render

/* harmony default export */ var vc_graphics_wall = __webpack_exports__["default"] = (vc_graphics_wallvue_type_script_lang_ts);

/***/ })

}]);