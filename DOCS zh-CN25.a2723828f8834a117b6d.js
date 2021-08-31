(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[110],{

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/geometries/vc-geometry-rectangle.md?vue&type=template&id=5e72212b

var vc_geometry_rectanglevue_type_template_id_5e72212b_hoisted_1 = {
  class: "content element-doc"
};

var vc_geometry_rectanglevue_type_template_id_5e72212b_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcgeometryrectangle\"><a class=\"header-anchor\" href=\"#vcgeometryrectangle\">¶</a> VcGeometryRectangle</h2><p>加载矩形几何图形，相当于初始化一个 <code>Cesium.RectangleGeometry</code> 实例。</p><p><strong>注意</strong>：需要作为 <code>vc-instance-geometry</code> 的子组件才能正常加载。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>矩形几何图形组件的基础用法。</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-geometry-rectangle"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 和 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-geometry-rectangle-outline"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加矩形。")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-primitive :appearance=\"appearance\" @click=\"onClicked\">\n      <vc-instance-geometry>\n        <vc-geometry-rectangle ref=\"geometryRef\" :rectangle=\"rectangle\" :vertexFormat=\"vertexFormat\"></vc-geometry-rectangle>\n      </vc-instance-geometry>\n    </vc-primitive>\n    <vc-primitive :appearance=\"appearanceOutline\" @click=\"onClicked\" v-if=\"outline\">\n      <vc-instance-geometry :attributes=\"attributesOutline\">\n        <vc-geometry-rectangle-outline ref=\"geometryOutlineRef\" :rectangle=\"rectangle\"></vc-geometry-rectangle-outline>\n      </vc-instance-geometry>\n    </vc-primitive>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    <el-switch v-model=\"outline\" active-color=\"#13ce66\" inactive-text=\"边框\"> </el-switch>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const geometryRef = ref(null)\n      const geometryOutlineRef = ref(null)\n      const appearance = ref(null)\n      const appearanceOutline = ref(null)\n      const attributesOutline = ref(null)\n      const outline = ref(true)\n      const vertexFormat = ref(null)\n      const rectangle = { west: 110.5, south: 29.5, east: 115.5, north: 34.5 }\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        geometryRef.value.unload()\n        geometryOutlineRef.value.unload()\n      }\n      const reload = () => {\n        geometryRef.value.reload()\n        geometryOutlineRef.value.reload()\n      }\n      const load = () => {\n        geometryRef.value.load()\n        geometryOutlineRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        console.log('onViewerReady')\n        const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance, Cartesian3, MaterialAppearance } = Cesium\n        attributesOutline.value = {\n          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.8)\n        }\n        appearance.value = new MaterialAppearance()\n        appearanceOutline.value = new PerInstanceColorAppearance({\n          flat: true\n        })\n        vertexFormat.value = MaterialAppearance.vertexFormat\n      }\n      // lifecycle\n      onMounted(() => {\n        Promise.all([geometryRef.value.createPromise, geometryOutlineRef.value.createPromise]).then(geometries => {\n          const { BoundingSphere } = Cesium\n          const boundingSphereUnion = geometries.reduce((prev, cur) => {\n            const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)\n            const boundingSphere = cur.vm.$parent.modelMatrix\n              ? BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)\n              : geometry.boundingSphere\n            return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere)\n          }, null)\n          geometries[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)\n          console.log('All geometries are loaded.')\n        })\n      })\n      return {\n        unload,\n        reload,\n        load,\n        onClicked,\n        onViewerReady,\n        geometryRef,\n        geometryOutlineRef,\n        appearance,\n        appearanceOutline,\n        attributesOutline,\n        outline,\n        rectangle,\n        vertexFormat\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>rectangle</td><td>Object|Array</td><td></td><td><code>required</code> 指定矩形四至参数。</td></tr><tr><td>vertexFormat</td><td>Number</td><td></td><td><code>optional</code> 指定矩形要缓存的顶点属性。</td></tr><tr><td>ellipsoid</td><td>Object</td><td></td><td><code>optional</code> 指定矩形所在的椭球体。</td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> 指定每个纬度和经度之间的距离（以弧度为单位）。</td></tr><tr><td>height</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定矩形高度。</td></tr><tr><td>rotation</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> 指定矩形的旋转角（弧度），逆时针方向为正旋转。</td></tr><tr><td>stRotation</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> 指定矩形的纹理旋转坐标（弧度）， 逆时针方向为正旋转。</td></tr><tr><td>extrudedHeight</td><td>Number</td><td></td><td><code>optional</code> 指定矩形拉伸高度。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr></tbody></table><h3 id=\"vcgeometryrectangleoutline\"><a class=\"header-anchor\" href=\"#vcgeometryrectangleoutline\">¶</a> VcGeometryRectangleOutline</h3><p>加载矩形几何图形边框，相当于初始化一个 <code>Cesium.CircleOutlineGeometry</code> 实例。</p><p><strong>注意</strong>：需要作为 <code>vc-instance-geometry</code> 的子组件才能正常加载。</p><h3 id=\"vcgeometryrectangleoutline-shu-xing\"><a class=\"header-anchor\" href=\"#vcgeometryrectangleoutline-shu-xing\">¶</a> VcGeometryRectangleOutline 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>rectangle</td><td>Object|Array</td><td></td><td><code>required</code> 指定矩形四至参数。</td></tr><tr><td>ellipsoid</td><td>Object</td><td></td><td><code>optional</code> 指定矩形所在的椭球体。</td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> 指定每个纬度和经度之间的距离（以弧度为单位）。</td></tr><tr><td>height</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定矩形高度。</td></tr><tr><td>rotation</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> 指定矩形的旋转角（弧度），逆时针方向为正旋转。</td></tr><tr><td>extrudedHeight</td><td>Number</td><td></td><td><code>optional</code> 指定矩形拉伸高度。</td></tr></tbody></table><h3 id=\"vcgeometryrectangleoutline-shi-jian\"><a class=\"header-anchor\" href=\"#vcgeometryrectangleoutline-shi-jian\">¶</a> VcGeometryRectangleOutline 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/RectangleGeometry.html\">RectangleGeometry</a>、<a href=\"https://cesium.com/docs/cesiumjs-ref-doc/RectangleOutlineGeometry.html\">RectangleOutlineGeometry</a></strong></li></ul>", 13);

function vc_geometry_rectanglevue_type_template_id_5e72212b_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_geometry_rectanglevue_type_template_id_5e72212b_hoisted_1, [vc_geometry_rectanglevue_type_template_id_5e72212b_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/geometries/vc-geometry-rectangle.md?vue&type=template&id=5e72212b

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/geometries/vc-geometry-rectangle.md?vue&type=script&lang=ts


/* harmony default export */ var vc_geometry_rectanglevue_type_script_lang_ts = ({
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
        var _component_vc_geometry_rectangle = _resolveComponent("vc-geometry-rectangle");

        var _component_vc_instance_geometry = _resolveComponent("vc-instance-geometry");

        var _component_vc_primitive = _resolveComponent("vc-primitive");

        var _component_vc_geometry_rectangle_outline = _resolveComponent("vc-geometry-rectangle-outline");

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
                    return [_createVNode(_component_vc_instance_geometry, null, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_vc_geometry_rectangle, {
                          ref: "geometryRef",
                          rectangle: _ctx.rectangle,
                          vertexFormat: _ctx.vertexFormat
                        }, null, 8, ["rectangle", "vertexFormat"])];
                      }),
                      _: 1
                    })];
                  }),
                  _: 1
                }, 8, ["appearance", "onClick"]), _ctx.outline ? (_openBlock(), _createBlock(_component_vc_primitive, {
                  key: 0,
                  appearance: _ctx.appearanceOutline,
                  onClick: _ctx.onClicked
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_instance_geometry, {
                      attributes: _ctx.attributesOutline
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_vc_geometry_rectangle_outline, {
                          ref: "geometryOutlineRef",
                          rectangle: _ctx.rectangle
                        }, null, 8, ["rectangle"])];
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
          var appearanceOutline = ref(null);
          var attributesOutline = ref(null);
          var outline = ref(true);
          var vertexFormat = ref(null);
          var rectangle = {
            west: 110.5,
            south: 29.5,
            east: 115.5,
            north: 34.5
          }; // methods

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
                Cartesian3 = Cesium.Cartesian3,
                MaterialAppearance = Cesium.MaterialAppearance;
            attributesOutline.value = {
              color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.8)
            };
            appearance.value = new MaterialAppearance();
            appearanceOutline.value = new PerInstanceColorAppearance({
              flat: true
            });
            vertexFormat.value = MaterialAppearance.vertexFormat;
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
            appearanceOutline: appearanceOutline,
            attributesOutline: attributesOutline,
            outline: outline,
            rectangle: rectangle,
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
// CONCATENATED MODULE: ./website/docs/zh-CN/geometries/vc-geometry-rectangle.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/geometries/vc-geometry-rectangle.md



vc_geometry_rectanglevue_type_script_lang_ts.render = vc_geometry_rectanglevue_type_template_id_5e72212b_render

/* harmony default export */ var vc_geometry_rectangle = __webpack_exports__["default"] = (vc_geometry_rectanglevue_type_script_lang_ts);

/***/ })

}]);