(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/geometries/vc-geometry-polyline.md?vue&type=template&id=d4c42008

var vc_geometry_polylinevue_type_template_id_d4c42008_hoisted_1 = {
  class: "content element-doc"
};

var vc_geometry_polylinevue_type_template_id_d4c42008_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcgeometrypolyline\"><a class=\"header-anchor\" href=\"#vcgeometrypolyline\">¶</a> VcGeometryPolyline</h2><p>加载多段线几何图形，相当于初始化一个 <code>Cesium.PolylineGeometry</code> 实例。</p><p><strong>注意</strong>：需要作为 <code>vc-instance-geometry</code> 的子组件才能正常加载。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>多段线几何图形组件的基础用法。</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-geometry-polyline"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加多段线。")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-primitive :appearance=\"appearance\" @click=\"onClicked\">\n      <vc-instance-geometry>\n        <vc-geometry-polyline\n          ref=\"geometryRef\"\n          :positions=\"positions1\"\n          :colors=\"colors1\"\n          :width=\"4\"\n          :vertexFormat=\"vertexFormat\"\n        ></vc-geometry-polyline>\n      </vc-instance-geometry>\n      <vc-instance-geometry>\n        <vc-geometry-polyline\n          ref=\"geometryRef\"\n          :positions=\"positions2\"\n          :colors=\"colors2\"\n          :width=\"4\"\n          :vertexFormat=\"vertexFormat\"\n          colorsPerVertex\n        ></vc-geometry-polyline>\n      </vc-instance-geometry>\n    </vc-primitive>\n    <vc-layer-imagery>\n      <vc-provider-imagery-arcgis></vc-provider-imagery-arcgis>\n    </vc-layer-imagery>\n    <vc-provider-terrain-cesium></vc-provider-terrain-cesium>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const geometryRef = ref(null)\n      const appearance = ref(null)\n      const positions1 = ref([])\n      const colors1 = ref([])\n      const positions2 = ref([])\n      const colors2 = ref([])\n      const vertexFormat = ref(null)\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        geometryRef.value.unload()\n      }\n      const reload = () => {\n        geometryRef.value.reload()\n      }\n      const load = () => {\n        geometryRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        console.log('onViewerReady')\n        for (let i = 0; i < 12; ++i) {\n          positions1.value.push(Cesium.Cartesian3.fromDegrees(105.0 + 5 * i, 35.0))\n          colors1.value.push(Cesium.Color.fromRandom({ alpha: 1.0 }))\n\n          positions2.value.push(Cesium.Cartesian3.fromDegrees(105.0 + 5 * i, 30.0))\n          colors2.value.push(Cesium.Color.fromRandom({ alpha: 1.0 }))\n        }\n        appearance.value = new Cesium.PolylineColorAppearance()\n        vertexFormat.value = Cesium.PolylineColorAppearance.VERTEX_FORMAT\n      }\n      // lifecycle\n      onMounted(() => {\n        geometryRef.value.createPromise.then(({ Cesium, viewer, cesiumObject }) => {\n          const boundingSphere = Cesium.BoundingSphere.fromPoints(cesiumObject._positions)\n          viewer.scene.camera.flyToBoundingSphere(boundingSphere)\n          console.log('All geometries are loaded.')\n        })\n      })\n      return {\n        unload,\n        reload,\n        load,\n        onClicked,\n        onViewerReady,\n        geometryRef,\n        appearance,\n        positions1,\n        colors1,\n        positions2,\n        colors2,\n        vertexFormat\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>positions</td><td>Array</td><td></td><td><code>required</code> 指定表示线条的位置数组。</td><td></td></tr><tr><td>width</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定线的宽度（像素）。</td><td></td></tr><tr><td>colors</td><td>Array</td><td></td><td><code>optional</code> 指定每个顶点或每个线段的颜色数组。</td><td></td></tr><tr><td>colorsPerVertex</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定颜色数组是根据线段数取均值还是通过线段顶点插值。</td><td></td></tr><tr><td>arcType</td><td>Number</td><td><code>1</code></td><td><code>optional</code> 指定线条类型。 <strong>NONE: 0, GEODESIC: 1, RHUMB: 2</strong></td><td>0/1/2</td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> 指定每个纬度和经度之间的距离（以弧度为单位），arcType 不为 0 时有效。</td><td></td></tr><tr><td>vertexFormat</td><td>Object</td><td></td><td><code>optional</code> 指定要缓存的顶点属性类型。</td><td></td></tr><tr><td>ellipsoid</td><td>Object</td><td></td><td><code>optional</code> 指定参考椭球体。</td><td></td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PolylineGeometry.html\">PolylineGeometry</a></strong></li></ul>", 6);

function vc_geometry_polylinevue_type_template_id_d4c42008_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_geometry_polylinevue_type_template_id_d4c42008_hoisted_1, [vc_geometry_polylinevue_type_template_id_d4c42008_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/geometries/vc-geometry-polyline.md?vue&type=template&id=d4c42008

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/geometries/vc-geometry-polyline.md?vue&type=script&lang=ts


/* harmony default export */ var vc_geometry_polylinevue_type_script_lang_ts = ({
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
        var _component_vc_geometry_polyline = _resolveComponent("vc-geometry-polyline");

        var _component_vc_instance_geometry = _resolveComponent("vc-instance-geometry");

        var _component_vc_primitive = _resolveComponent("vc-primitive");

        var _component_vc_provider_imagery_arcgis = _resolveComponent("vc-provider-imagery-arcgis");

        var _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        var _component_vc_provider_terrain_cesium = _resolveComponent("vc-provider-terrain-cesium");

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
                return [_createVNode(_component_vc_primitive, {
                  appearance: _ctx.appearance,
                  onClick: _ctx.onClicked
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_instance_geometry, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_vc_geometry_polyline, {
                          ref: "geometryRef",
                          positions: _ctx.positions1,
                          colors: _ctx.colors1,
                          width: 4,
                          vertexFormat: _ctx.vertexFormat
                        }, null, 8, ["positions", "colors", "vertexFormat"])];
                      }),
                      _: 1
                    }), _createVNode(_component_vc_instance_geometry, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_vc_geometry_polyline, {
                          ref: "geometryRef",
                          positions: _ctx.positions2,
                          colors: _ctx.colors2,
                          width: 4,
                          vertexFormat: _ctx.vertexFormat,
                          colorsPerVertex: ""
                        }, null, 8, ["positions", "colors", "vertexFormat"])];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }, 8, ["appearance", "onClick"]), _createVNode(_component_vc_layer_imagery, null, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_arcgis)];
                  }),
                  _: 1
                }), _createVNode(_component_vc_provider_terrain_cesium)];
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

      var ref = vue_esm_browser["K" /* ref */],
          reactive = vue_esm_browser["J" /* reactive */],
          getCurrentInstance = vue_esm_browser["q" /* getCurrentInstance */],
          onMounted = vue_esm_browser["C" /* onMounted */],
          watch = vue_esm_browser["bb" /* watch */];
      var democomponentExport = {
        setup: function setup() {
          // state
          var instance = getCurrentInstance();
          var geometryRef = ref(null);
          var appearance = ref(null);
          var positions1 = ref([]);
          var colors1 = ref([]);
          var positions2 = ref([]);
          var colors2 = ref([]);
          var vertexFormat = ref(null); // methods

          var onClicked = function onClicked(e) {
            console.log(e);
          };

          var unload = function unload() {
            geometryRef.value.unload();
          };

          var reload = function reload() {
            geometryRef.value.reload();
          };

          var load = function load() {
            geometryRef.value.load();
          };

          var onViewerReady = function onViewerReady(_ref) {
            var Cesium = _ref.Cesium,
                viewer = _ref.viewer;
            console.log('onViewerReady');

            for (var i = 0; i < 12; ++i) {
              positions1.value.push(Cesium.Cartesian3.fromDegrees(105.0 + 5 * i, 35.0));
              colors1.value.push(Cesium.Color.fromRandom({
                alpha: 1.0
              }));
              positions2.value.push(Cesium.Cartesian3.fromDegrees(105.0 + 5 * i, 30.0));
              colors2.value.push(Cesium.Color.fromRandom({
                alpha: 1.0
              }));
            }

            appearance.value = new Cesium.PolylineColorAppearance();
            vertexFormat.value = Cesium.PolylineColorAppearance.VERTEX_FORMAT;
          }; // lifecycle


          onMounted(function () {
            geometryRef.value.createPromise.then(function (_ref2) {
              var Cesium = _ref2.Cesium,
                  viewer = _ref2.viewer,
                  cesiumObject = _ref2.cesiumObject;
              var boundingSphere = Cesium.BoundingSphere.fromPoints(cesiumObject._positions);
              viewer.scene.camera.flyToBoundingSphere(boundingSphere);
              console.log('All geometries are loaded.');
            });
          });
          return {
            unload: unload,
            reload: reload,
            load: load,
            onClicked: onClicked,
            onViewerReady: onViewerReady,
            geometryRef: geometryRef,
            appearance: appearance,
            positions1: positions1,
            colors1: colors1,
            positions2: positions2,
            colors2: colors2,
            vertexFormat: vertexFormat
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/geometries/vc-geometry-polyline.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/geometries/vc-geometry-polyline.md



vc_geometry_polylinevue_type_script_lang_ts.render = vc_geometry_polylinevue_type_template_id_d4c42008_render

/* harmony default export */ var vc_geometry_polyline = __webpack_exports__["default"] = (vc_geometry_polylinevue_type_script_lang_ts);

/***/ })

}]);