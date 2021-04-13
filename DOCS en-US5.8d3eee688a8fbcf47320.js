(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-corridor.md?vue&type=template&id=f60c9aba

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"zou-lang\"><a class=\"header-anchor\" href=\"#zou-lang\">¶</a> 走廊</h2><p><code>vc-graphics-corridor</code> 组件用于加载走廊实体，相当于初始化一个 <code>Cesium.CorridorGraphics</code> 实例。需要作为 <code>vc-entity</code> 的子组件才能正常加载。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>走廊实体组件的基础用法。</p>", 4);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-graphics-corridor"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加走廊实体。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity\n      ref=\"entity1\"\n      :name=\"options.name1\"\n      :description=\"options.description\"\n      @click=\"onEntityEvt\"\n      @mouseover=\"onEntityEvt\"\n      @mouseout=\"onEntityEvt\"\n    >\n      <vc-graphics-corridor :positions=\"options.positions1\" :material=\"options.material1\" :width=\"200000.0\"></vc-graphics-corridor>\n    </vc-entity>\n    <vc-entity ref=\"entity2\" :name=\"options.name2\" :description=\"options.description\">\n      <vc-graphics-corridor\n        :positions=\"options.positions2\"\n        :height=\"100000.0\"\n        :width=\"200000.0\"\n        :cornerType=\"0\"\n        material=\"GREEN\"\n        :outline=\"true\"\n      ></vc-graphics-corridor>\n    </vc-entity>\n    <vc-entity ref=\"entity3\" :name=\"options.name3\" :description=\"options.description\">\n      <vc-graphics-corridor\n        :positions=\"options.positions3\"\n        :material=\"options.material3\"\n        outlineColor=\"WHITE\"\n        :outline=\"true\"\n        :height=\"200000.0\"\n        :extrudedHeight=\"100000.0\"\n        :width=\"200000.0\"\n        :cornerType=\"options.cornerType3\"\n      ></vc-graphics-corridor>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted, reactive } from 'vue'\n  export default {\n    setup() {\n      // state\n      const options = reactive({\n        description: 'Hello Vue Cesium',\n\n        corridor1: {},\n        name1: 'Red corridor on surface with rounded corners',\n        positions1: [\n          { lng: 100.0, lat: 40.0 },\n          { lng: 105.0, lat: 40.0 },\n          { lng: 105.0, lat: 35.0 }\n        ],\n        material1: {},\n\n        corridor2: {},\n        name2: 'Green corridor at height with mitered corners and outline',\n        positions2: [\n          { lng: 90.0, lat: 40.0 },\n          { lng: 95.0, lat: 40.0 },\n          { lng: 95.0, lat: 35.0 }\n        ],\n        cornerType2: 0,\n\n        corridor3: {},\n        name3: 'Blue extruded corridor with beveled corners and outline',\n        positions3: [\n          { lng: 80.0, lat: 40.0 },\n          { lng: 85.0, lat: 40.0 },\n          { lng: 85.0, lat: 35.0 }\n        ],\n        cornerType3: 0,\n        material3: {}\n      })\n      const entity1 = ref(null)\n      const entity2 = ref(null)\n      const entity3 = ref(null)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        const { Cesium, viewer } = cesiumInstance\n        options.material1 = Cesium.Color.RED.withAlpha(0.5)\n\n        options.cornerType2 = Cesium.CornerType.MITERED\n\n        options.cornerType3 = Cesium.CornerType.BEVELED\n        options.material3 = Cesium.Color.BLUE.withAlpha(0.5)\n      }\n      // life cycle\n      onMounted(() => {\n        Promise.all([entity1.value.createPromise, entity2.value.createPromise, entity3.value.createPromise]).then(instances => {\n          instances[0].viewer.zoomTo(instances[0].viewer.entities)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        entity1,\n        entity2,\n        entity3,\n        options,\n        onViewerReady\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 corridor 是否显示。</td></tr><tr><td>positions</td><td>Array&lt;Cartesian3&gt;</td><td></td><td><code>optional</code> 指定描述 corridor 位置的经纬度(高度)数组。</td></tr><tr><td>width</td><td>Number</td><td></td><td><code>optional</code> 指定 corridor 边之间的距离。</td></tr><tr><td>height</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 corridor 高度。</td></tr><tr><td>heightReference</td><td>HeightReference</td><td></td><td><code>optional</code> 指定 corridor 高度模式。</td></tr><tr><td>extrudedHeight</td><td>Number</td><td></td><td><code>optional</code> 指定 corridor 拉伸高度。</td></tr><tr><td>extrudedHeightReference</td><td>HeightReference</td><td></td><td><code>optional</code> 指定 corridor 拉伸高度模式。</td></tr><tr><td>cornerType</td><td>CornerType</td><td><code>0</code></td><td><code>optional</code> 指定 corridor 转角样式。</td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> 指定每个经纬度之间的采样粒度。</td></tr><tr><td>fill</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 corridor 是否填充材质。</td></tr><tr><td>material</td><td>Object|String|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> 指定 corridor 的材质。</td></tr><tr><td>outline</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定 corridor 是否绘制轮廓线。</td></tr><tr><td>outlineColor</td><td>Object|String|Array</td><td><code>&#39;black&#39;</code></td><td><code>optional</code> 指定 corridor 轮廓线颜色。</td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定 corridor 轮廓线宽度。</td></tr><tr><td>shadows</td><td>ShadowMode</td><td><code>0</code></td><td><code>optional</code> 指定 corridor 是否接收或者发射每个点光源的阴影。</td></tr><tr><td>distanceDisplayCondition</td><td>DistanceDisplayCondition</td><td></td><td><code>optional</code> 指定 corridor 随相机距离改变是否显示参数。</td></tr><tr><td>classificationType</td><td>ClassificationType</td><td><code>2</code></td><td><code>optional</code> 指定 corridor 的贴对象模式。</td></tr><tr><td>zIndex</td><td>Number</td><td></td><td><code>optional</code> 指定 corridor 顺序，没有高度和拉伸高度才有效。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>definitionChanged</td><td></td><td>每当更改或修改属性或子属性时触发该事件。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/CorridorGraphics.html\">CorridorGraphics</a></strong></li></ul>", 6);

function vc_graphics_corridorvue_type_template_id_f60c9aba_render(_ctx, _cache, $props, $setup, $data, $options) {
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
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-corridor.md?vue&type=template&id=f60c9aba

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-corridor.md?vue&type=script&lang=ts


/* harmony default export */ var vc_graphics_corridorvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_vc_graphics_corridor = _resolveComponent("vc-graphics-corridor");

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
                  ref: "entity1",
                  name: _ctx.options.name1,
                  description: _ctx.options.description,
                  onClick: _ctx.onEntityEvt,
                  onMouseover: _ctx.onEntityEvt,
                  onMouseout: _ctx.onEntityEvt
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_corridor, {
                      positions: _ctx.options.positions1,
                      material: _ctx.options.material1,
                      width: 200000.0
                    }, null, 8, ["positions", "material", "width"])];
                  }),
                  _: 1
                }, 8, ["name", "description", "onClick", "onMouseover", "onMouseout"]), _createVNode(_component_vc_entity, {
                  ref: "entity2",
                  name: _ctx.options.name2,
                  description: _ctx.options.description
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_corridor, {
                      positions: _ctx.options.positions2,
                      height: 100000.0,
                      width: 200000.0,
                      cornerType: 0,
                      material: "GREEN",
                      outline: true
                    }, null, 8, ["positions", "height", "width"])];
                  }),
                  _: 1
                }, 8, ["name", "description"]), _createVNode(_component_vc_entity, {
                  ref: "entity3",
                  name: _ctx.options.name3,
                  description: _ctx.options.description
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_corridor, {
                      positions: _ctx.options.positions3,
                      material: _ctx.options.material3,
                      outlineColor: "WHITE",
                      outline: true,
                      height: 200000.0,
                      extrudedHeight: 100000.0,
                      width: 200000.0,
                      cornerType: _ctx.options.cornerType3
                    }, null, 8, ["positions", "material", "height", "extrudedHeight", "width", "cornerType"])];
                  }),
                  _: 1
                }, 8, ["name", "description"])];
              }),
              _: 1
            }, 8, ["onReady"])];
          }),
          _: 1
        }, 512)]);
      }

      var ref = vue_esm_browser["K" /* ref */],
          getCurrentInstance = vue_esm_browser["q" /* getCurrentInstance */],
          onMounted = vue_esm_browser["C" /* onMounted */],
          reactive = vue_esm_browser["J" /* reactive */];
      var democomponentExport = {
        setup: function setup() {
          // state
          var options = reactive({
            description: 'Hello Vue Cesium',
            corridor1: {},
            name1: 'Red corridor on surface with rounded corners',
            positions1: [{
              lng: 100.0,
              lat: 40.0
            }, {
              lng: 105.0,
              lat: 40.0
            }, {
              lng: 105.0,
              lat: 35.0
            }],
            material1: {},
            corridor2: {},
            name2: 'Green corridor at height with mitered corners and outline',
            positions2: [{
              lng: 90.0,
              lat: 40.0
            }, {
              lng: 95.0,
              lat: 40.0
            }, {
              lng: 95.0,
              lat: 35.0
            }],
            cornerType2: 0,
            corridor3: {},
            name3: 'Blue extruded corridor with beveled corners and outline',
            positions3: [{
              lng: 80.0,
              lat: 40.0
            }, {
              lng: 85.0,
              lat: 40.0
            }, {
              lng: 85.0,
              lat: 35.0
            }],
            cornerType3: 0,
            material3: {}
          });
          var entity1 = ref(null);
          var entity2 = ref(null);
          var entity3 = ref(null); // methods

          var onEntityEvt = function onEntityEvt(e) {
            console.log(e);
          };

          var onViewerReady = function onViewerReady(cesiumInstance) {
            var Cesium = cesiumInstance.Cesium,
                viewer = cesiumInstance.viewer;
            options.material1 = Cesium.Color.RED.withAlpha(0.5);
            options.cornerType2 = Cesium.CornerType.MITERED;
            options.cornerType3 = Cesium.CornerType.BEVELED;
            options.material3 = Cesium.Color.BLUE.withAlpha(0.5);
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
            options: options,
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
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-corridor.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-corridor.md



vc_graphics_corridorvue_type_script_lang_ts.render = vc_graphics_corridorvue_type_template_id_f60c9aba_render

/* harmony default export */ var vc_graphics_corridor = __webpack_exports__["default"] = (vc_graphics_corridorvue_type_script_lang_ts);

/***/ })

}]);