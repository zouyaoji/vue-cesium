(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/geometries/vc-geometry-sphere.md?vue&type=template&id=172fd83f

var vc_geometry_spherevue_type_template_id_172fd83f_hoisted_1 = {
  class: "content element-doc"
};

var vc_geometry_spherevue_type_template_id_172fd83f_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcgeometrysphere\"><a class=\"header-anchor\" href=\"#vcgeometrysphere\">¶</a> VcGeometrySphere</h2><p>Loading a sphere geometry. It is equivalent to initializing a <code>Cesium.SphereGeometry</code> instance.</p><p><strong>Note</strong>: It needs to be a subcomponent of <code>vc-instance-geometry</code> to load normally.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>The basic usage of VcGeometrySphere component.</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-geometry-sphere"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-geometry-sphere-outline"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tags to add a sphere to the viewer.")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-primitive :appearance=\"appearance\" @click=\"onClicked\">\n      <vc-instance-geometry :attributes=\"attributes\" :modelMatrix=\"modelMatrix\">\n        <vc-geometry-sphere ref=\"geometryRef\" :radius=\"200000\" :vertexFormat=\"vertexFormat\"></vc-geometry-sphere>\n      </vc-instance-geometry>\n    </vc-primitive>\n    <vc-primitive :appearance=\"appearance\" @click=\"onClicked\" v-if=\"outline\">\n      <vc-instance-geometry :attributes=\"attributesOutline\" :modelMatrix=\"modelMatrix\">\n        <vc-geometry-sphere-outline ref=\"geometryOutlineRef\" :radius=\"200000\"></vc-geometry-sphere-outline>\n      </vc-instance-geometry>\n    </vc-primitive>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    <el-switch v-model=\"outline\" active-color=\"#13ce66\" inactive-text=\"Show border\"> </el-switch>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const geometryRef = ref(null)\n      const geometryOutlineRef = ref(null)\n      const appearance = ref(null)\n      const attributes = ref(null)\n      const attributesOutline = ref(null)\n      const modelMatrix = ref(null)\n      const outline = ref(true)\n      const vertexFormat = ref(null)\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        geometryRef.value.unload()\n        geometryOutlineRef.value.unload()\n      }\n      const reload = () => {\n        geometryRef.value.reload()\n        geometryOutlineRef.value.reload()\n      }\n      const load = () => {\n        geometryRef.value.load()\n        geometryOutlineRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        console.log('onViewerReady')\n        const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance, Matrix4, Cartesian3, Transforms } = Cesium\n        appearance.value = new PerInstanceColorAppearance({\n          flat: true\n        })\n        attributes.value = {\n          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)\n        }\n        attributesOutline.value = {\n          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())\n        }\n        vertexFormat.value = PerInstanceColorAppearance.VERTEX_FORMAT\n        modelMatrix.value = Matrix4.multiplyByTranslation(\n          Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(105.0, 35.0)),\n          new Cartesian3(0, 0, 100000),\n          new Matrix4()\n        )\n      }\n      // lifecycle\n      onMounted(() => {\n        Promise.all([geometryRef.value.createPromise, geometryOutlineRef.value.createPromise]).then(geometries => {\n          const { BoundingSphere } = Cesium\n          const boundingSphereUnion = geometries.reduce((prev, cur) => {\n            const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)\n            const boundingSphere = cur.vm.$parent.modelMatrix\n              ? BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)\n              : geometry.boundingSphere\n            return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere)\n          }, null)\n          geometries[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)\n          console.log('All geometries are loaded.')\n        })\n      })\n      return {\n        unload,\n        reload,\n        load,\n        onClicked,\n        onViewerReady,\n        geometryRef,\n        geometryOutlineRef,\n        appearance,\n        attributes,\n        attributesOutline,\n        outline,\n        modelMatrix,\n        vertexFormat\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>radius</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> The radius of the sphere.</td></tr><tr><td>stackPartitions</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> The number of times to partition the ellipsoid into stacks.</td></tr><tr><td>slicePartitions</td><td>Number</td><td><code>10</code></td><td><code>optional</code> The number of times to partition the ellipsoid into radial slices.</td></tr><tr><td>vertexFormat</td><td>Object</td><td></td><td><code>optional</code> The vertex attributes to be computed.</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table><h3 id=\"vcgeometrysphereoutline\"><a class=\"header-anchor\" href=\"#vcgeometrysphereoutline\">¶</a> VcGeometrySphereOutline</h3><p>Loading a sphere geometry outline. It is equivalent to initializing a <code>Cesium.SphereOutlineGeometry</code> instance.</p><p><strong>Note</strong>: It needs to be a subcomponent of <code>vc-instance-geometry</code> to load normally.</p><h3 id=\"vcgeometrysphereoutline-props\"><a class=\"header-anchor\" href=\"#vcgeometrysphereoutline-props\">¶</a> VcGeometrySphereOutline Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>radius</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> The radius of the sphere.</td></tr><tr><td>stackPartitions</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> The number of times to partition the ellipsoid into stacks.</td></tr><tr><td>slicePartitions</td><td>Number</td><td><code>10</code></td><td><code>optional</code> The number of times to partition the ellipsoid into radial slices.</td></tr><tr><td>subdivisions</td><td>Number</td><td><code>200</code></td><td><code>optional</code> The number of points per line, determining the granularity of the curvature .</td></tr></tbody></table><h3 id=\"vcgeometrysphereoutline-events\"><a class=\"header-anchor\" href=\"#vcgeometrysphereoutline-events\">¶</a> VcGeometrySphereOutline Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/SphereGeometry.html\">SphereGeometry</a>、<a href=\"https://cesium.com/docs/cesiumjs-ref-doc/SphereOutlineGeometry.html\">SphereOutlineGeometry</a></strong></li></ul>", 13);

function vc_geometry_spherevue_type_template_id_172fd83f_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_geometry_spherevue_type_template_id_172fd83f_hoisted_1, [vc_geometry_spherevue_type_template_id_172fd83f_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/en-US/geometries/vc-geometry-sphere.md?vue&type=template&id=172fd83f

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/geometries/vc-geometry-sphere.md?vue&type=script&lang=ts


/* harmony default export */ var vc_geometry_spherevue_type_script_lang_ts = ({
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        var _component_vc_geometry_sphere = _resolveComponent("vc-geometry-sphere");

        var _component_vc_instance_geometry = _resolveComponent("vc-instance-geometry");

        var _component_vc_primitive = _resolveComponent("vc-primitive");

        var _component_vc_geometry_sphere_outline = _resolveComponent("vc-geometry-sphere-outline");

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
                      attributes: _ctx.attributes,
                      modelMatrix: _ctx.modelMatrix
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_vc_geometry_sphere, {
                          ref: "geometryRef",
                          radius: 200000,
                          vertexFormat: _ctx.vertexFormat
                        }, null, 8, ["vertexFormat"])];
                      }),
                      _: 1
                    }, 8, ["attributes", "modelMatrix"])];
                  }),
                  _: 1
                }, 8, ["appearance", "onClick"]), _ctx.outline ? (_openBlock(), _createBlock(_component_vc_primitive, {
                  key: 0,
                  appearance: _ctx.appearance,
                  onClick: _ctx.onClicked
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_instance_geometry, {
                      attributes: _ctx.attributesOutline,
                      modelMatrix: _ctx.modelMatrix
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_vc_geometry_sphere_outline, {
                          ref: "geometryOutlineRef",
                          radius: 200000
                        }, null, 512)];
                      }),
                      _: 1
                    }, 8, ["attributes", "modelMatrix"])];
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
                  "inactive-text": "Show border"
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
          var modelMatrix = ref(null);
          var outline = ref(true);
          var vertexFormat = ref(null); // methods

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
                Transforms = Cesium.Transforms;
            appearance.value = new PerInstanceColorAppearance({
              flat: true
            });
            attributes.value = {
              color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
            };
            attributesOutline.value = {
              color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
            };
            vertexFormat.value = PerInstanceColorAppearance.VERTEX_FORMAT;
            modelMatrix.value = Matrix4.multiplyByTranslation(Transforms.eastNorthUpToFixedFrame(Cartesian3.fromDegrees(105.0, 35.0)), new Cartesian3(0, 0, 100000), new Matrix4());
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
            modelMatrix: modelMatrix,
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
// CONCATENATED MODULE: ./website/docs/en-US/geometries/vc-geometry-sphere.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/geometries/vc-geometry-sphere.md



vc_geometry_spherevue_type_script_lang_ts.render = vc_geometry_spherevue_type_template_id_172fd83f_render

/* harmony default export */ var vc_geometry_sphere = __webpack_exports__["default"] = (vc_geometry_spherevue_type_script_lang_ts);

/***/ })

}]);