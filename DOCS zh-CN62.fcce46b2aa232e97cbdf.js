(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[151],{

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-primitive-classification.md?vue&type=template&id=4a9221de

var vc_primitive_classificationvue_type_template_id_4a9221de_hoisted_1 = {
  class: "content element-doc"
};

var vc_primitive_classificationvue_type_template_id_4a9221de_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h2", {
  id: "vcprimitiveclassification"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vcprimitiveclassification"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" VcPrimitiveClassification")], -1);

var vc_primitive_classificationvue_type_template_id_4a9221de_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("加载分类图元，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "Cesium.ClassificationPrimitive"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 实例，用于在场景中高亮表达一个闭合的几何体对象。")], -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 支持加载 BoxGeometry、 CylinderGeometry、 EllipsoidGeometry、PolylineVolumeGeometry 和 SphereGeometry；而 CircleGeometry、 CorridorGeometry、 EllipseGeometry、 PolygonGeometry 和 RectangleGeometry 需要拉伸才能正常渲染。")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "分类图元组件的基础用法。", -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-primitive-classification"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加拉伸的多边形。")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\" v-model:camera=\"camera\">\n    <vc-primitive-classification ref=\"primitive\" @click=\"onClicked\" :asynchronous=\"false\">\n      <vc-instance-geometry :attributes=\"attributes\">\n        <vc-geometry-polygon\n          :polygonHierarchy=\"[\n            { lng: 102.1, lat: 29.5 },\n            { lng: 106.2, lat: 29.5 },\n            { lng: 106.2, lat: 33.5 },\n            { lng: 102.1, lat: 33.5 }\n          ]\"\n          :extrudedHeight=\"6000\"\n        ></vc-geometry-polygon>\n      </vc-instance-geometry>\n    </vc-primitive-classification>\n    <vc-provider-terrain-cesium></vc-provider-terrain-cesium>\n    <vc-layer-imagery>\n      <vc-provider-imagery-arcgis></vc-provider-imagery-arcgis>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        attributes: null,\n        camera: {\n          position: {\n            x: -1432246.8223880068,\n            y: 5761224.588247942,\n            z: 3297281.1889481535\n          },\n          heading: 6.20312220367255,\n          pitch: -0.9937536846355606,\n          roll: 0.002443376981836387\n        }\n      }\n    },\n    methods: {\n      onViewerReady({ Cesium, viewer }) {\n        viewer.scene.globe.depthTestAgainstTerrain = true\n        this.attributes = {\n          color: Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color.fromBytes(64, 157, 253, 100))\n        }\n      },\n      onClicked(e) {\n        console.log(e)\n      },\n      unload() {\n        this.$refs.primitive.unload()\n      },\n      load() {\n        this.$refs.primitive.load()\n      },\n      reload() {\n        this.$refs.primitive.reload()\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>geometryInstances</td><td>Object|Array</td><td></td><td><code>optional</code> 指定要渲染的几何体实例或者几何体实例集合。</td><td></td></tr><tr><td>appearance</td><td>Object</td><td></td><td><code>optional</code> 指定图元的外观参数。</td><td></td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定图元是否显示。</td><td></td></tr><tr><td>vertexCacheOptimize</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否优化几何体顶点着色器之前和之后的缓存。</td><td></td></tr><tr><td>interleave</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否交错几何体顶点属性，true 时可以稍微改善渲染性能，但会增加加载时间。</td><td></td></tr><tr><td>compressVertices</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否压缩几何体顶点，压缩可以以节省内存。</td><td></td></tr><tr><td>releaseGeometryInstances</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否保留图元对几何体实例的输入，不保留可以节省内存。</td><td></td></tr><tr><td>allowPicking</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定图元是否可以被 Scene.pick 拾取，关闭拾取可以节省内存。</td><td></td></tr><tr><td>asynchronous</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定图元时异步加载还是同步加载。</td><td></td></tr><tr><td>classificationType</td><td>Number</td><td><code>2</code></td><td><code>optional</code> 指定是贴地形还是贴 3DTiles，还是两者都贴。 <strong>TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2</strong></td><td>0/1/2</td></tr><tr><td>debugShowBoundingVolume</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否显示图元的边界球，用于调试使用。</td><td></td></tr><tr><td>debugShowShadowVolume</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否绘制图元中每个几何图形的阴影体积，用于调试使用。</td><td></td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定鼠标事件是否生效。</td><td></td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上按下时触发。</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上弹起时触发。</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元时触发。</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元外部时触发。</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标左键双击该图元时触发。</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上移动时触发。</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移动到该图元时触发。</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移出该图元时触发。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/ClassificationPrimitive.html\">ClassificationPrimitive</a></strong></li></ul>", 6);

function vc_primitive_classificationvue_type_template_id_4a9221de_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_primitive_classificationvue_type_template_id_4a9221de_hoisted_1, [vc_primitive_classificationvue_type_template_id_4a9221de_hoisted_2, vc_primitive_classificationvue_type_template_id_4a9221de_hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-primitive-classification.md?vue&type=template&id=4a9221de

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-primitive-classification.md?vue&type=script&lang=ts


/* harmony default export */ var vc_primitive_classificationvue_type_script_lang_ts = ({
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
        var _component_vc_geometry_polygon = _resolveComponent("vc-geometry-polygon");

        var _component_vc_instance_geometry = _resolveComponent("vc-instance-geometry");

        var _component_vc_primitive_classification = _resolveComponent("vc-primitive-classification");

        var _component_vc_provider_terrain_cesium = _resolveComponent("vc-provider-terrain-cesium");

        var _component_vc_provider_imagery_arcgis = _resolveComponent("vc-provider-imagery-arcgis");

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
              onReady: _ctx.onViewerReady,
              camera: _ctx.camera,
              "onUpdate:camera": _cache[1] || (_cache[1] = function ($event) {
                return _ctx.camera = $event;
              })
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_primitive_classification, {
                  ref: "primitive",
                  onClick: _ctx.onClicked,
                  asynchronous: false
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_instance_geometry, {
                      attributes: _ctx.attributes
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_vc_geometry_polygon, {
                          polygonHierarchy: [{
                            lng: 102.1,
                            lat: 29.5
                          }, {
                            lng: 106.2,
                            lat: 29.5
                          }, {
                            lng: 106.2,
                            lat: 33.5
                          }, {
                            lng: 102.1,
                            lat: 33.5
                          }],
                          extrudedHeight: 6000
                        }, null, 8, ["polygonHierarchy"])];
                      }),
                      _: 1
                    }, 8, ["attributes"])];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_vc_provider_terrain_cesium), _createVNode(_component_vc_layer_imagery, null, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_arcgis)];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }, 8, ["onReady", "camera"]), _createVNode(_component_el_row, {
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
            attributes: null,
            camera: {
              position: {
                x: -1432246.8223880068,
                y: 5761224.588247942,
                z: 3297281.1889481535
              },
              heading: 6.20312220367255,
              pitch: -0.9937536846355606,
              roll: 0.002443376981836387
            }
          };
        },
        methods: {
          onViewerReady: function onViewerReady(_ref) {
            var Cesium = _ref.Cesium,
                viewer = _ref.viewer;
            viewer.scene.globe.depthTestAgainstTerrain = true;
            this.attributes = {
              color: Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color.fromBytes(64, 157, 253, 100))
            };
          },
          onClicked: function onClicked(e) {
            console.log(e);
          },
          unload: function unload() {
            this.$refs.primitive.unload();
          },
          load: function load() {
            this.$refs.primitive.load();
          },
          reload: function reload() {
            this.$refs.primitive.reload();
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-primitive-classification.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-primitive-classification.md



vc_primitive_classificationvue_type_script_lang_ts.render = vc_primitive_classificationvue_type_template_id_4a9221de_render

/* harmony default export */ var vc_primitive_classification = __webpack_exports__["default"] = (vc_primitive_classificationvue_type_script_lang_ts);

/***/ })

}]);