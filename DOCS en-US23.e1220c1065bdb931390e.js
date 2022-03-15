(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/geometries/vc-geometry-instance.md?vue&type=template&id=9c947732

const vc_geometry_instancevue_type_template_id_9c947732_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_geometry_instancevue_type_template_id_9c947732_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcGeometryInstance ");

const vc_geometry_instancevue_type_template_id_9c947732_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>Loading a geometry instance, which allows one Geometry object to be positions in several different locations and colored uniquely. It is equivalent to initializing a <code>Cesium.GeometryInstance</code> instance.</p><p><strong>Note</strong>: It needs to be a sub-component of <code>vc-primitive</code>, <code>vc-primitive-classification</code>, <code>vc-primitive-ground</code>, and <code>vc-primitive-ground-polyline</code> to load normally.</p>", 2);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of geometry instance components.", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-geometry-instance"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add a cube box geometry object on the viewer.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-primitive :appearance=\"appearance\" @click=\"onClicked\">\n      <vc-geometry-instance ref=\"instanceBoxTop\" id=\"top\" :geometry=\"geometry\" :attributes=\"attributes\" :modelMatrix=\"modelMatrixTop\">\n      </vc-geometry-instance>\n      <vc-geometry-instance ref=\"instanceBoxBottom\" id=\"bottom\" :geometry=\"geometry\" :attributes=\"attributes\" :modelMatrix=\"modelMatrixBottom\">\n      </vc-geometry-instance>\n    </vc-primitive>\n    <vc-primitive :appearance=\"appearance2\" @click=\"onClicked\">\n      <vc-geometry-instance>\n        <vc-geometry-rectangle ref=\"instanceRectangle\" :rectangle=\"[110.5, 29.5, 115.5, 34.5]\"></vc-geometry-rectangle>\n      </vc-geometry-instance>\n      <vc-geometry-instance>\n        <vc-geometry-polygon\n          ref=\"instancePolygon\"\n          :polygonHierarchy=\"[\n          { lng: 102.1, lat: 29.5 },\n          { lng: 106.2, lat: 29.5 },\n          { lng: 106.2, lat: 33.5 },\n          { lng: 108.2, lat: 35.5 },\n          { lng: 102.1, lat: 33.5 }\n        ]\"\n          :height=\"20000\"\n        ></vc-geometry-polygon>\n      </vc-geometry-instance>\n    </vc-primitive>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const geometry = ref(null)\n      const appearance = ref(null)\n      const appearance2 = ref(null)\n      const attributes = ref(null)\n      const modelMatrixTop = ref(null)\n      const modelMatrixBottom = ref(null)\n      const instanceBoxTop = ref(null)\n      const instanceBoxBottom = ref(null)\n      const instanceRectangle = ref(null)\n      const instancePolygon = ref(null)\n\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        instanceBoxBottom.value.unload()\n        instanceBoxTop.value.unload()\n        instanceRectangle.value.unload()\n        // instancePolygon.value.unload()\n      }\n      const reload = () => {\n        instanceBoxBottom.value.reload()\n        instanceBoxTop.value.reload()\n        instanceRectangle.value.reload()\n        // instancePolygon.value.reload()\n      }\n      const load = () => {\n        instanceBoxBottom.value.load()\n        instanceBoxTop.value.load()\n        instanceRectangle.value.load()\n        // instancePolygon.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        geometry.value = Cesium.BoxGeometry.fromDimensions({\n          vertexFormat: Cesium.VertexFormat.POSITION_AND_NORMAL,\n          dimensions: new Cesium.Cartesian3(1000000.0, 1000000.0, 250000.0)\n        })\n        appearance.value = new Cesium.PerInstanceColorAppearance()\n        attributes.value = {\n          color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.AQUA)\n        }\n        modelMatrixBottom.value = Cesium.Matrix4.multiplyByTranslation(\n          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)),\n          new Cesium.Cartesian3(0.0, 0.0, 100000.0),\n          new Cesium.Matrix4()\n        )\n        modelMatrixTop.value = Cesium.Matrix4.multiplyByTranslation(\n          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)),\n          new Cesium.Cartesian3(0.0, 0.0, 1500000.0),\n          new Cesium.Matrix4()\n        )\n        appearance2.value = new Cesium.MaterialAppearance({\n          material: Cesium.Material.fromType('Checkerboard', {\n            repeat: new Cesium.Cartesian2(20.0, 6.0)\n          }),\n          materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED\n        })\n      }\n      // lifecycle\n      onMounted(() => {\n        Promise.all([\n          instanceBoxTop.value.creatingPromise,\n          instanceBoxBottom.value.creatingPromise,\n          instanceRectangle.value.creatingPromise,\n          instancePolygon.value.creatingPromise\n        ]).then(instances => {\n          const { BoundingSphere } = Cesium\n          const boundingSphereUnion = instances.reduce((prev, cur) => {\n            const geometry = cur.cesiumObject.geometry || cur.cesiumObject\n            const computGeometry = geometry.constructor.createGeometry(geometry)\n            const boundingSphere =\n              cur.cesiumObject.modelMatrix || cur.vm.$parent.modelMatrix\n                ? BoundingSphere.transform(computGeometry.boundingSphere, cur.cesiumObject.modelMatrix || cur.vm.$parent.modelMatrix)\n                : computGeometry.boundingSphere\n            return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere)\n          }, null)\n          instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)\n          console.log('All instances are loaded.')\n        })\n      })\n      return {\n        unload,\n        reload,\n        load,\n        geometry,\n        appearance,\n        appearance2,\n        attributes,\n        modelMatrixBottom,\n        modelMatrixTop,\n        onClicked,\n        onViewerReady,\n        instanceBoxTop,\n        instanceBoxBottom,\n        instanceRectangle,\n        instancePolygon\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>geometry</td><td>Object</td><td></td><td><code>optional</code> The geometry to instance.</td></tr><tr><td>modelMatrix</td><td>Object</td><td></td><td><code>optional</code> The model matrix that transforms to transform the geometry from model to world coordinates.</td></tr><tr><td>id</td><td>Object</td><td></td><td><code>optional</code> A user-defined object to return when the instance is picked with <code>Scene#pick</code>.</td></tr><tr><td>attributes</td><td>Object</td><td></td><td><code>optional</code> Per-instance attributes like a show or color attribute shown in the example below.</td></tr></tbody></table>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Methods ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Load components manually.</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Reload components manually.</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>Destroy the loaded component manually.</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>Get the creatingPromise.</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>Get the Cesium object loaded by this component.</td></tr></tbody></table>", 1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Slots ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Subtags")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "This is where geometry sub tags content goes."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-geometry-box/vc-geometry-box-outline/vc-geometry-circle/vc-geometry-circle-outline/vc-geometry-corridor/vc-geometry-corridor-outline/vc-geometry-cylinder/vc-geometry-cylinder-outline/vc-geometry-ellipse/vc-geometry-ellipse-outline/vc-geometry-ellipsoid/vc-geometry-ellipsoid-outline/vc-geometry-frustum/vc-geometry-frustum-outline/vc-geometry-plane/vc-geometry-plane-outline/vc-geometry-polygon/vc-geometry-polygon-outline/vc-geometry-polygon-coplanar/vc-geometry-polygon-coplanar-outline/vc-geometry-polyline/vc-geometry-ground-polyline/vc-geometry-simple-polyline/vc-geometry-polyline-volume/vc-geometry-rectangle/vc-geometry-rectangle-outline/vc-geometry-sphere/vc-geometry-sphere-outline/vc-geometry-wall/vc-geometry-wall-outline")])])], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("GeometryInstance");

function vc_geometry_instancevue_type_template_id_9c947732_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_geometry_instancevue_type_template_id_9c947732_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcgeometryinstance",
    tabindex: "-1",
    content: "VcGeometryInstance",
    href: "#vcgeometryinstance",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_geometry_instancevue_type_template_id_9c947732_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcgeometryinstance"
    })]),
    _: 1
  }), vc_geometry_instancevue_type_template_id_9c947732_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "methods",
    tabindex: "-1",
    content: "Methods",
    href: "#methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#methods"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "slots",
    tabindex: "-1",
    content: "Slots",
    href: "#slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slots"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_18, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/GeometryInstance.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_19]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/geometries/vc-geometry-instance.md?vue&type=template&id=9c947732

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/geometries/vc-geometry-instance.md?vue&type=script&lang=ts

/* harmony default export */ var vc_geometry_instancevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        const _component_vc_geometry_instance = _resolveComponent("vc-geometry-instance");

        const _component_vc_primitive = _resolveComponent("vc-primitive");

        const _component_vc_geometry_rectangle = _resolveComponent("vc-geometry-rectangle");

        const _component_vc_geometry_polygon = _resolveComponent("vc-geometry-polygon");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

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
              default: _withCtx(() => [_createVNode(_component_vc_geometry_instance, {
                ref: "instanceBoxTop",
                id: "top",
                geometry: _ctx.geometry,
                attributes: _ctx.attributes,
                modelMatrix: _ctx.modelMatrixTop
              }, null, 8, ["geometry", "attributes", "modelMatrix"]), _createVNode(_component_vc_geometry_instance, {
                ref: "instanceBoxBottom",
                id: "bottom",
                geometry: _ctx.geometry,
                attributes: _ctx.attributes,
                modelMatrix: _ctx.modelMatrixBottom
              }, null, 8, ["geometry", "attributes", "modelMatrix"])]),
              _: 1
            }, 8, ["appearance", "onClick"]), _createVNode(_component_vc_primitive, {
              appearance: _ctx.appearance2,
              onClick: _ctx.onClicked
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_geometry_instance, null, {
                default: _withCtx(() => [_createVNode(_component_vc_geometry_rectangle, {
                  ref: "instanceRectangle",
                  rectangle: [110.5, 29.5, 115.5, 34.5]
                }, null, 8, ["rectangle"])]),
                _: 1
              }), _createVNode(_component_vc_geometry_instance, null, {
                default: _withCtx(() => [_createVNode(_component_vc_geometry_polygon, {
                  ref: "instancePolygon",
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
                    lng: 108.2,
                    lat: 35.5
                  }, {
                    lng: 102.1,
                    lat: 33.5
                  }],
                  height: 20000
                }, null, 8, ["polygonHierarchy"])]),
                _: 1
              })]),
              _: 1
            }, 8, ["appearance", "onClick"])]),
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
            }, 8, ["onClick"])]),
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
          const geometry = ref(null);
          const appearance = ref(null);
          const appearance2 = ref(null);
          const attributes = ref(null);
          const modelMatrixTop = ref(null);
          const modelMatrixBottom = ref(null);
          const instanceBoxTop = ref(null);
          const instanceBoxBottom = ref(null);
          const instanceRectangle = ref(null);
          const instancePolygon = ref(null); // methods

          const onClicked = e => {
            console.log(e);
          };

          const unload = () => {
            instanceBoxBottom.value.unload();
            instanceBoxTop.value.unload();
            instanceRectangle.value.unload(); // instancePolygon.value.unload()
          };

          const reload = () => {
            instanceBoxBottom.value.reload();
            instanceBoxTop.value.reload();
            instanceRectangle.value.reload(); // instancePolygon.value.reload()
          };

          const load = () => {
            instanceBoxBottom.value.load();
            instanceBoxTop.value.load();
            instanceRectangle.value.load(); // instancePolygon.value.load()
          };

          const onViewerReady = _ref => {
            let {
              Cesium,
              viewer
            } = _ref;
            geometry.value = Cesium.BoxGeometry.fromDimensions({
              vertexFormat: Cesium.VertexFormat.POSITION_AND_NORMAL,
              dimensions: new Cesium.Cartesian3(1000000.0, 1000000.0, 250000.0)
            });
            appearance.value = new Cesium.PerInstanceColorAppearance();
            attributes.value = {
              color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.AQUA)
            };
            modelMatrixBottom.value = Cesium.Matrix4.multiplyByTranslation(Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)), new Cesium.Cartesian3(0.0, 0.0, 100000.0), new Cesium.Matrix4());
            modelMatrixTop.value = Cesium.Matrix4.multiplyByTranslation(Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)), new Cesium.Cartesian3(0.0, 0.0, 1500000.0), new Cesium.Matrix4());
            appearance2.value = new Cesium.MaterialAppearance({
              material: Cesium.Material.fromType('Checkerboard', {
                repeat: new Cesium.Cartesian2(20.0, 6.0)
              }),
              materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED
            });
          }; // lifecycle


          onMounted(() => {
            Promise.all([instanceBoxTop.value.creatingPromise, instanceBoxBottom.value.creatingPromise, instanceRectangle.value.creatingPromise, instancePolygon.value.creatingPromise]).then(instances => {
              const {
                BoundingSphere
              } = Cesium;
              const boundingSphereUnion = instances.reduce((prev, cur) => {
                const geometry = cur.cesiumObject.geometry || cur.cesiumObject;
                const computGeometry = geometry.constructor.createGeometry(geometry);
                const boundingSphere = cur.cesiumObject.modelMatrix || cur.vm.$parent.modelMatrix ? BoundingSphere.transform(computGeometry.boundingSphere, cur.cesiumObject.modelMatrix || cur.vm.$parent.modelMatrix) : computGeometry.boundingSphere;
                return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere);
              }, null);
              instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion);
              console.log('All instances are loaded.');
            });
          });
          return {
            unload,
            reload,
            load,
            geometry,
            appearance,
            appearance2,
            attributes,
            modelMatrixBottom,
            modelMatrixTop,
            onClicked,
            onViewerReady,
            instanceBoxTop,
            instanceBoxBottom,
            instanceRectangle,
            instancePolygon
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
// CONCATENATED MODULE: ./website/docs/en-US/geometries/vc-geometry-instance.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/geometries/vc-geometry-instance.md



vc_geometry_instancevue_type_script_lang_ts.render = vc_geometry_instancevue_type_template_id_9c947732_render

/* harmony default export */ var vc_geometry_instance = __webpack_exports__["default"] = (vc_geometry_instancevue_type_script_lang_ts);

/***/ })

}]);