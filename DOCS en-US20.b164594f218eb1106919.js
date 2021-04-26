(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/geometries/vc-geometry-polyline-volume.md?vue&type=template&id=587a8454

var vc_geometry_polyline_volumevue_type_template_id_587a8454_hoisted_1 = {
  class: "content element-doc"
};

var vc_geometry_polyline_volumevue_type_template_id_587a8454_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcgeometrypolylinevolume\"><a class=\"header-anchor\" href=\"#vcgeometrypolylinevolume\">¶</a> VcGeometryPolylineVolume</h2><p>加载线柱体，相当于初始化一个 <code>Cesium.PolylineVolumeGeometry</code> 实例。</p><p><strong>注意</strong>：需要作为 <code>vc-instance-geometry</code> 的子组件才能正常加载。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>线柱体几何图形组件的基础用法。</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-geometry-polyline-volume"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 和 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-geometry-polyline-volume-outline"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加线柱体。")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-primitive :appearance=\"appearance\" @click=\"onClicked\">\n      <vc-instance-geometry :attributes=\"attributes\">\n        <vc-geometry-polyline-volume\n          ref=\"geometryRef\"\n          :polylinePositions=\"polylinePositions\"\n          :shapePositions=\"shape\"\n          :vertexFormat=\"vertexFormat\"\n        ></vc-geometry-polyline-volume>\n      </vc-instance-geometry>\n    </vc-primitive>\n    <vc-primitive :appearance=\"appearance\" @click=\"onClicked\" v-if=\"outline\">\n      <vc-instance-geometry :attributes=\"attributesOutline\">\n        <vc-geometry-polyline-volume-outline\n          ref=\"geometryOutlineRef\"\n          :polylinePositions=\"polylinePositions\"\n          :shapePositions=\"shape\"\n        ></vc-geometry-polyline-volume-outline>\n      </vc-instance-geometry>\n    </vc-primitive>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    <el-switch v-model=\"outline\" active-color=\"#13ce66\" inactive-text=\"边框\"> </el-switch>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const geometryRef = ref(null)\n      const geometryOutlineRef = ref(null)\n      const appearance = ref(null)\n      const attributes = ref(null)\n      const attributesOutline = ref(null)\n      const outline = ref(true)\n      const vertexFormat = ref(null)\n      const shape = ref([])\n      const polylinePositions = [\n        { lng: 105.0, lat: 32.0 },\n        { lng: 105.0, lat: 36.0 },\n        { lng: 108.0, lat: 36.0 }\n      ]\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        geometryRef.value.unload()\n        geometryOutlineRef.value.unload()\n      }\n      const reload = () => {\n        geometryRef.value.reload()\n        geometryOutlineRef.value.reload()\n      }\n      const load = () => {\n        geometryRef.value.load()\n        geometryOutlineRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        console.log('onViewerReady')\n        const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance, Matrix4, Cartesian3, PerspectiveFrustum } = Cesium\n        attributes.value = {\n          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)\n        }\n        attributesOutline.value = {\n          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())\n        }\n        appearance.value = new PerInstanceColorAppearance({\n          flat: true\n        })\n        vertexFormat.value = PerInstanceColorAppearance.FLAT_VERTEX_FORMAT\n        shape.value = computeCircle(60000.0)\n      }\n      const computeCircle = radius => {\n        let positions = []\n        for (let i = 0; i < 360; i++) {\n          let radians = Cesium.Math.toRadians(i)\n          positions.push({ x: radius * Math.cos(radians), y: radius * Math.sin(radians) })\n        }\n        return positions\n      }\n      // lifecycle\n      onMounted(() => {\n        Promise.all([geometryRef.value.createPromise, geometryOutlineRef.value.createPromise]).then(geometries => {\n          const { BoundingSphere } = Cesium\n          const boundingSphereUnion = geometries.reduce((prev, cur) => {\n            const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)\n            const boundingSphere = cur.vm.$parent.modelMatrix\n              ? BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)\n              : geometry.boundingSphere\n            return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere)\n          }, null)\n          geometries[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)\n          console.log('All geometries are loaded.')\n        })\n      })\n      return {\n        unload,\n        reload,\n        load,\n        onClicked,\n        onViewerReady,\n        geometryRef,\n        geometryOutlineRef,\n        appearance,\n        attributes,\n        attributesOutline,\n        outline,\n        vertexFormat,\n        shape,\n        polylinePositions\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>polylinePositions</td><td>Array</td><td></td><td><code>required</code> 指定 polyline volume 位置信息。</td><td></td></tr><tr><td>shapePositions</td><td>Array</td><td></td><td><code>required</code> 指定 polyline volume 拉伸的形状数组。</td><td></td></tr><tr><td>ellipsoid</td><td>Object</td><td></td><td><code>optional</code> 指定 polyline volume 参考椭球体。</td><td></td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> 指定 polyline volume 每个经纬度之间的距离（弧度）。</td><td></td></tr><tr><td>vertexFormat</td><td>Object</td><td></td><td><code>optional</code> 指定 polyline volume 顶点属性渲染方式。</td><td></td></tr><tr><td>cornerType</td><td>Number</td><td></td><td><code>optional</code> 指定 polyline volume 转角类型。 <strong>ROUNDED: 0, MITERED: 1, BEVELED: 2</strong></td><td>0/1/2</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr></tbody></table><h3 id=\"vcgeometrypolylinevolumeoutline\"><a class=\"header-anchor\" href=\"#vcgeometrypolylinevolumeoutline\">¶</a> VcGeometryPolylineVolumeOutline</h3><p>加载线柱体几何图形边框，相当于初始化一个 <code>Cesium.PolylineVolumeOutlineGeometry</code> 实例。</p><p><strong>注意</strong>：需要作为 <code>vc-instance-geometry</code> 的子组件才能正常加载。</p><h3 id=\"vcgeometrypolylinevolumeoutline-shu-xing\"><a class=\"header-anchor\" href=\"#vcgeometrypolylinevolumeoutline-shu-xing\">¶</a> VcGeometryPolylineVolumeOutline 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>polylinePositions</td><td>Array</td><td></td><td><code>required</code> 指定 polyline volume 位置信息。</td><td></td></tr><tr><td>shapePositions</td><td>Array</td><td></td><td><code>required</code> 指定 polyline volume 拉伸的形状数组。</td><td></td></tr><tr><td>ellipsoid</td><td>Object</td><td></td><td><code>optional</code> 指定 polyline volume 参考椭球体。</td><td></td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> 指定 polyline volume 每个经纬度之间的距离（弧度）。</td><td></td></tr><tr><td>cornerType</td><td>Number</td><td></td><td><code>optional</code> 指定 polyline volume 转角类型。 <strong>ROUNDED: 0, MITERED: 1, BEVELED: 2</strong></td><td>0/1/2</td></tr></tbody></table><h3 id=\"vcgeometrypolylinevolumeoutline-shi-jian\"><a class=\"header-anchor\" href=\"#vcgeometrypolylinevolumeoutline-shi-jian\">¶</a> VcGeometryPolylineVolumeOutline 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PolylineVolumeGeometry.html\">PolylineVolumeGeometry</a>、<a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PolylineVolumeOutlineGeometry.html\">PolylineVolumeOutlineGeometry</a></strong></li></ul>", 13);

function vc_geometry_polyline_volumevue_type_template_id_587a8454_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_geometry_polyline_volumevue_type_template_id_587a8454_hoisted_1, [vc_geometry_polyline_volumevue_type_template_id_587a8454_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/en-US/geometries/vc-geometry-polyline-volume.md?vue&type=template&id=587a8454

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/geometries/vc-geometry-polyline-volume.md?vue&type=script&lang=ts


/* harmony default export */ var vc_geometry_polyline_volumevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */],
          _createCommentVNode = vue_esm_browser["j" /* createCommentVNode */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

      function render(_ctx, _cache) {
        var _component_vc_geometry_polyline_volume = _resolveComponent("vc-geometry-polyline-volume");

        var _component_vc_instance_geometry = _resolveComponent("vc-instance-geometry");

        var _component_vc_primitive = _resolveComponent("vc-primitive");

        var _component_vc_geometry_polyline_volume_outline = _resolveComponent("vc-geometry-polyline-volume-outline");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_switch = _resolveComponent("el-switch");

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
                    return [_createVNode(_component_vc_instance_geometry, {
                      attributes: _ctx.attributes
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_vc_geometry_polyline_volume, {
                          ref: "geometryRef",
                          polylinePositions: _ctx.polylinePositions,
                          shapePositions: _ctx.shape,
                          vertexFormat: _ctx.vertexFormat
                        }, null, 8, ["polylinePositions", "shapePositions", "vertexFormat"])];
                      }),
                      _: 1
                    }, 8, ["attributes"])];
                  }),
                  _: 1
                }, 8, ["appearance", "onClick"]), _ctx.outline ? (_openBlock(), _createBlock(_component_vc_primitive, {
                  key: 0,
                  appearance: _ctx.appearance,
                  onClick: _ctx.onClicked
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_instance_geometry, {
                      attributes: _ctx.attributesOutline
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_vc_geometry_polyline_volume_outline, {
                          ref: "geometryOutlineRef",
                          polylinePositions: _ctx.polylinePositions,
                          shapePositions: _ctx.shape
                        }, null, 8, ["polylinePositions", "shapePositions"])];
                      }),
                      _: 1
                    }, 8, ["attributes"])];
                  }),
                  _: 1
                }, 8, ["appearance", "onClick"])) : _createCommentVNode("", true)];
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
                }, 8, ["onClick"]), _createVNode(_component_el_switch, {
                  modelValue: _ctx.outline,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.outline = $event;
                  }),
                  "active-color": "#13ce66",
                  "inactive-text": "边框"
                }, null, 8, ["modelValue"])];
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
          var geometryOutlineRef = ref(null);
          var appearance = ref(null);
          var attributes = ref(null);
          var attributesOutline = ref(null);
          var outline = ref(true);
          var vertexFormat = ref(null);
          var shape = ref([]);
          var polylinePositions = [{
            lng: 105.0,
            lat: 32.0
          }, {
            lng: 105.0,
            lat: 36.0
          }, {
            lng: 108.0,
            lat: 36.0
          }]; // methods

          var onClicked = function onClicked(e) {
            console.log(e);
          };

          var unload = function unload() {
            geometryRef.value.unload();
            geometryOutlineRef.value.unload();
          };

          var reload = function reload() {
            geometryRef.value.reload();
            geometryOutlineRef.value.reload();
          };

          var load = function load() {
            geometryRef.value.load();
            geometryOutlineRef.value.load();
          };

          var onViewerReady = function onViewerReady(_ref) {
            var Cesium = _ref.Cesium,
                viewer = _ref.viewer;
            console.log('onViewerReady');
            var ColorGeometryInstanceAttribute = Cesium.ColorGeometryInstanceAttribute,
                PerInstanceColorAppearance = Cesium.PerInstanceColorAppearance,
                Matrix4 = Cesium.Matrix4,
                Cartesian3 = Cesium.Cartesian3,
                PerspectiveFrustum = Cesium.PerspectiveFrustum;
            attributes.value = {
              color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
            };
            attributesOutline.value = {
              color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
            };
            appearance.value = new PerInstanceColorAppearance({
              flat: true
            });
            vertexFormat.value = PerInstanceColorAppearance.FLAT_VERTEX_FORMAT;
            shape.value = computeCircle(60000.0);
          };

          var computeCircle = function computeCircle(radius) {
            var positions = [];

            for (var i = 0; i < 360; i++) {
              var radians = Cesium.Math.toRadians(i);
              positions.push({
                x: radius * Math.cos(radians),
                y: radius * Math.sin(radians)
              });
            }

            return positions;
          }; // lifecycle


          onMounted(function () {
            Promise.all([geometryRef.value.createPromise, geometryOutlineRef.value.createPromise]).then(function (geometries) {
              var _Cesium = Cesium,
                  BoundingSphere = _Cesium.BoundingSphere;
              var boundingSphereUnion = geometries.reduce(function (prev, cur) {
                var geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject);
                var boundingSphere = cur.vm.$parent.modelMatrix ? BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix) : geometry.boundingSphere;
                return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere);
              }, null);
              geometries[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion);
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
            geometryOutlineRef: geometryOutlineRef,
            appearance: appearance,
            attributes: attributes,
            attributesOutline: attributesOutline,
            outline: outline,
            vertexFormat: vertexFormat,
            shape: shape,
            polylinePositions: polylinePositions
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/geometries/vc-geometry-polyline-volume.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/geometries/vc-geometry-polyline-volume.md



vc_geometry_polyline_volumevue_type_script_lang_ts.render = vc_geometry_polyline_volumevue_type_template_id_587a8454_render

/* harmony default export */ var vc_geometry_polyline_volume = __webpack_exports__["default"] = (vc_geometry_polyline_volumevue_type_script_lang_ts);

/***/ })

}]);