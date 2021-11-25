(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/geometries/vc-geometry-polygon.md?vue&type=template&id=3b3de11a

const vc_geometry_polygonvue_type_template_id_3b3de11a_hoisted_1 = {
  class: "content element-doc"
};

const vc_geometry_polygonvue_type_template_id_3b3de11a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcgeometrypolygon\"><a class=\"header-anchor\" href=\"#vcgeometrypolygon\">¶</a> VcGeometryPolygon</h2><p>Loading a polygon geometry. It is equivalent to initializing a <code>Cesium.PolygonGeometry</code> instance.</p><p><strong>Note</strong>: It needs to be a subcomponent of <code>vc-instance-geometry</code> to load normally. When loading massive polygon primitives, consider using the <code>vc-collection-primitive</code> component and its <code>polygons</code> property for rendering.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of VcGeometryPolygon component.</p>", 5);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-geometry-polygon"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-geometry-polygon-outline"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tags to add polygons on the viewer.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-primitive :appearance=\"appearance\" @click=\"onClicked\">\n      <vc-instance-geometry>\n        <vc-geometry-polygon\n          ref=\"geometryRef\"\n          :polygonHierarchy=\"polygonHierarchy\"\n          :vertexFormat=\"vertexFormat\"\n          :height=\"100000\"\n          :extrudedHeight=\"30\"\n        ></vc-geometry-polygon>\n      </vc-instance-geometry>\n    </vc-primitive>\n    <vc-primitive :appearance=\"appearanceOutline\" @click=\"onClicked\" v-if=\"outline\">\n      <vc-instance-geometry :attributes=\"attributesOutline\">\n        <vc-geometry-polygon-outline\n          ref=\"geometryOutlineRef\"\n          :polygonHierarchy=\"polygonHierarchy\"\n          :height=\"100000\"\n          :extrudedHeight=\"30\"\n        ></vc-geometry-polygon-outline>\n      </vc-instance-geometry>\n    </vc-primitive>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    <el-switch v-model=\"outline\" active-color=\"#13ce66\" inactive-text=\"Show border\"> </el-switch>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const geometryRef = ref(null)\n      const geometryOutlineRef = ref(null)\n      const appearance = ref(null)\n      const appearanceOutline = ref(null)\n      const vertexFormat = ref(null)\n      const attributesOutline = ref(null)\n      const outline = ref(true)\n      const polygonHierarchy = [\n        { lng: 102.1, lat: 29.5 },\n        { lng: 106.2, lat: 29.5 },\n        { lng: 106.2, lat: 33.5 },\n        { lng: 108.2, lat: 35.5 },\n        { lng: 102.1, lat: 33.5 }\n      ]\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        geometryRef.value.unload()\n        geometryOutlineRef.value.unload()\n      }\n      const reload = () => {\n        geometryRef.value.reload()\n        geometryOutlineRef.value.reload()\n      }\n      const load = () => {\n        geometryRef.value.load()\n        geometryOutlineRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        console.log('onViewerReady')\n        const { PerInstanceColorAppearance, EllipsoidSurfaceAppearance, Material, ColorGeometryInstanceAttribute } = Cesium\n        appearanceOutline.value = new PerInstanceColorAppearance({\n          flat: true\n        })\n        vertexFormat.value = EllipsoidSurfaceAppearance.VERTEX_FORMAT\n\n        appearance.value = new EllipsoidSurfaceAppearance({\n          material: new Material({\n            fabric: {\n              type: 'Water',\n              uniforms: {\n                normalMap: Cesium.buildModuleUrl('Assets/Textures/waterNormals.jpg'),\n                frequency: 1000.0,\n                animationSpeed: 0.05,\n                amplitude: 10.0\n              }\n            }\n          })\n        })\n\n        attributesOutline.value = {\n          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())\n        }\n      }\n      // lifecycle\n      onMounted(() => {\n        Promise.all([geometryRef.value.createPromise, geometryOutlineRef.value.createPromise]).then(geometries => {\n          const { BoundingSphere } = Cesium\n          const boundingSphereUnion = geometries.reduce((prev, cur) => {\n            const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)\n            const boundingSphere = cur.vm.$parent.modelMatrix\n              ? BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)\n              : geometry.boundingSphere\n            return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere)\n          }, null)\n          geometries[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)\n          console.log('All geometries are loaded.')\n        })\n      })\n      return {\n        unload,\n        reload,\n        load,\n        onClicked,\n        onViewerReady,\n        geometryRef,\n        geometryOutlineRef,\n        appearance,\n        appearanceOutline,\n        attributesOutline,\n        outline,\n        polygonHierarchy,\n        vertexFormat\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>polygonHierarchy</td><td>Object|Array</td><td></td><td><code>required</code> A polygon hierarchy that can include holes.</td><td></td></tr><tr><td>height</td><td>Number</td><td><code>0</code></td><td><code>optional</code> The distance in meters between the polygon and the ellipsoid surface.</td><td></td></tr><tr><td>extrudedHeight</td><td>Number</td><td></td><td><code>optional</code> The distance in meters between the polygon&#39;s extruded face and the ellipsoid surface.</td><td></td></tr><tr><td>vertexFormat</td><td>Object</td><td></td><td><code>optional</code> The vertex attributes to be computed.</td><td></td></tr><tr><td>stRotation</td><td>Number|Object</td><td><code>0.0</code></td><td><code>optional</code> The rotation of the texture coordinates, in radians. A positive rotation is counter-clockwise.</td><td></td></tr><tr><td>ellipsoid</td><td>Object</td><td></td><td><code>optional</code> The ellipsoid to be used as a reference.</td><td></td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer.</td><td></td></tr><tr><td>perPositionHeight</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Use the height of options.positions for each position instead of using options.height to determine the height.</td><td></td></tr><tr><td>closeTop</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> When false, leaves off the top of an extruded polygon open.</td><td></td></tr><tr><td>closeBottom</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> When false, leaves off the bottom of an extruded polygon open.</td><td></td></tr><tr><td>arcType</td><td>Number</td><td><code>1</code></td><td><code>optional</code> The type of line the polygon edges must follow. Valid options are ArcType.GEODESIC and ArcType.RHUMB. <strong>NONE: 0, GEODESIC: 1, RHUMB: 2</strong></td><td>0/1/2</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table><h3 id=\"vcgeometrypolygonoutline\"><a class=\"header-anchor\" href=\"#vcgeometrypolygonoutline\">¶</a> VcGeometryPolygonOutline</h3><p>Loading a polygon geometry outline. It is equivalent to initializing a <code>Cesium.PolygonOutlineGeometry</code> instance.</p><p><strong>Note</strong>: It needs to be a subcomponent of <code>vc-instance-geometry</code> to load normally.</p><h3 id=\"vcgeometrypolygonoutline-props\"><a class=\"header-anchor\" href=\"#vcgeometrypolygonoutline-props\">¶</a> VcGeometryPolygonOutline Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>polygonHierarchy</td><td>Object|Array</td><td></td><td><code>required</code> A polygon hierarchy that can include holes.</td><td></td></tr><tr><td>height</td><td>Number</td><td><code>0</code></td><td><code>optional</code> The distance in meters between the polygon and the ellipsoid surface.</td><td></td></tr><tr><td>extrudedHeight</td><td>Number</td><td></td><td><code>optional</code> The distance in meters between the polygon&#39;s extruded face and the ellipsoid surface.</td><td></td></tr><tr><td>vertexFormat</td><td>Object</td><td></td><td><code>optional</code> The vertex attributes to be computed.</td><td></td></tr><tr><td>ellipsoid</td><td>Object</td><td></td><td><code>optional</code> The ellipsoid to be used as a reference.</td><td></td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer.</td><td></td></tr><tr><td>perPositionHeight</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Use the height of options.positions for each position instead of using options.height to determine the height.</td><td></td></tr><tr><td>arcType</td><td>Number</td><td><code>1</code></td><td><code>optional</code> The type of line the polygon edges must follow. Valid options are ArcType.GEODESIC and ArcType.RHUMB. <strong>NONE: 0, GEODESIC: 1, RHUMB: 2</strong></td><td>0/1/2</td></tr></tbody></table><h3 id=\"vcgeometrypolygonoutline-events\"><a class=\"header-anchor\" href=\"#vcgeometrypolygonoutline-events\">¶</a> VcGeometryPolygonOutline Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PolygonGeometry.html\">PolygonGeometry</a>、<a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PolygonOutlineGeometry.html\">PolygonOutlineGeometry</a></strong></li></ul>", 13);

function vc_geometry_polygonvue_type_template_id_3b3de11a_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_geometry_polygonvue_type_template_id_3b3de11a_hoisted_1, [vc_geometry_polygonvue_type_template_id_3b3de11a_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/geometries/vc-geometry-polygon.md?vue&type=template&id=3b3de11a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/geometries/vc-geometry-polygon.md?vue&type=script&lang=ts

/* harmony default export */ var vc_geometry_polygonvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createBlock: _createBlock,
        createCommentVNode: _createCommentVNode,
        createTextVNode: _createTextVNode,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        const _component_vc_geometry_polygon = _resolveComponent("vc-geometry-polygon");

        const _component_vc_instance_geometry = _resolveComponent("vc-instance-geometry");

        const _component_vc_primitive = _resolveComponent("vc-primitive");

        const _component_vc_geometry_polygon_outline = _resolveComponent("vc-geometry-polygon-outline");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_switch = _resolveComponent("el-switch");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.onViewerReady
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_primitive, {
              appearance: _ctx.appearance,
              onClick: _ctx.onClicked
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_instance_geometry, null, {
                default: _withCtx(() => [_createVNode(_component_vc_geometry_polygon, {
                  ref: "geometryRef",
                  polygonHierarchy: _ctx.polygonHierarchy,
                  vertexFormat: _ctx.vertexFormat,
                  height: 100000,
                  extrudedHeight: 30
                }, null, 8, ["polygonHierarchy", "vertexFormat"])]),
                _: 1
              })]),
              _: 1
            }, 8, ["appearance", "onClick"]), _ctx.outline ? (_openBlock(), _createBlock(_component_vc_primitive, {
              key: 0,
              appearance: _ctx.appearanceOutline,
              onClick: _ctx.onClicked
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_instance_geometry, {
                attributes: _ctx.attributesOutline
              }, {
                default: _withCtx(() => [_createVNode(_component_vc_geometry_polygon_outline, {
                  ref: "geometryOutlineRef",
                  polygonHierarchy: _ctx.polygonHierarchy,
                  height: 100000,
                  extrudedHeight: 30
                }, null, 8, ["polygonHierarchy"])]),
                _: 1
              }, 8, ["attributes"])]),
              _: 1
            }, 8, ["appearance", "onClick"])) : _createCommentVNode("", true)]),
            _: 1
          }, 8, ["onReady"]), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_switch, {
              modelValue: _ctx.outline,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.outline = $event),
              "active-color": "#13ce66",
              "inactive-text": "Show border"
            }, null, 8, ["modelValue"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const {
        ref,
        reactive,
        getCurrentInstance,
        onMounted,
        watch
      } = vue_esm_browser;
      const democomponentExport = {
        setup() {
          // state
          const instance = getCurrentInstance();
          const geometryRef = ref(null);
          const geometryOutlineRef = ref(null);
          const appearance = ref(null);
          const appearanceOutline = ref(null);
          const vertexFormat = ref(null);
          const attributesOutline = ref(null);
          const outline = ref(true);
          const polygonHierarchy = [{
            lng: 102.1,
            lat: 29.5
          }, {
            lng: 106.2,
            lat: 29.5
          }, {
            lng: 106.2,
            lat: 33.5
          }, {
            lng: 108.2,
            lat: 35.5
          }, {
            lng: 102.1,
            lat: 33.5
          }]; // methods

          const onClicked = e => {
            console.log(e);
          };

          const unload = () => {
            geometryRef.value.unload();
            geometryOutlineRef.value.unload();
          };

          const reload = () => {
            geometryRef.value.reload();
            geometryOutlineRef.value.reload();
          };

          const load = () => {
            geometryRef.value.load();
            geometryOutlineRef.value.load();
          };

          const onViewerReady = ({
            Cesium,
            viewer
          }) => {
            console.log('onViewerReady');
            const {
              PerInstanceColorAppearance,
              EllipsoidSurfaceAppearance,
              Material,
              ColorGeometryInstanceAttribute
            } = Cesium;
            appearanceOutline.value = new PerInstanceColorAppearance({
              flat: true
            });
            vertexFormat.value = EllipsoidSurfaceAppearance.VERTEX_FORMAT;
            appearance.value = new EllipsoidSurfaceAppearance({
              material: new Material({
                fabric: {
                  type: 'Water',
                  uniforms: {
                    normalMap: Cesium.buildModuleUrl('Assets/Textures/waterNormals.jpg'),
                    frequency: 1000.0,
                    animationSpeed: 0.05,
                    amplitude: 10.0
                  }
                }
              })
            });
            attributesOutline.value = {
              color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
            };
          }; // lifecycle


          onMounted(() => {
            Promise.all([geometryRef.value.createPromise, geometryOutlineRef.value.createPromise]).then(geometries => {
              const {
                BoundingSphere
              } = Cesium;
              const boundingSphereUnion = geometries.reduce((prev, cur) => {
                const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject);
                const boundingSphere = cur.vm.$parent.modelMatrix ? BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix) : geometry.boundingSphere;
                return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere);
              }, null);
              geometries[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion);
              console.log('All geometries are loaded.');
            });
          });
          return {
            unload,
            reload,
            load,
            onClicked,
            onViewerReady,
            geometryRef,
            geometryOutlineRef,
            appearance,
            appearanceOutline,
            attributesOutline,
            outline,
            polygonHierarchy,
            vertexFormat
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/geometries/vc-geometry-polygon.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/geometries/vc-geometry-polygon.md



vc_geometry_polygonvue_type_script_lang_ts.render = vc_geometry_polygonvue_type_template_id_3b3de11a_render

/* harmony default export */ var vc_geometry_polygon = __webpack_exports__["default"] = (vc_geometry_polygonvue_type_script_lang_ts);

/***/ })

}]);