(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[122],{

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/geometries/vc-geometry-instance.md?vue&type=template&id=6e1fcde5

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};
const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>加载实例化的几何体，相当于初始化一个 <code>Cesium.GeometryInstance</code> 实例。</p><p><strong>注意</strong>：需要作为 <code>vc-primitive</code>、<code>vc-primitive-classification</code>、<code>vc-primitive-ground</code>、<code>vc-primitive-ground-polyline</code> 的子组件才能正常加载。</p>", 2);
const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "几何体实例组件的基础用法。", -1);
const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-geometry-instance"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加立方盒几何体对象。")])], -1);
const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-primitive :appearance=\"appearance\" @click=\"onClicked\">\n      <vc-geometry-instance ref=\"instanceBoxTop\" id=\"top\" :geometry=\"geometry\" :attributes=\"attributes\" :modelMatrix=\"modelMatrixTop\">\n      </vc-geometry-instance>\n      <vc-geometry-instance ref=\"instanceBoxBottom\" id=\"bottom\" :geometry=\"geometry\" :attributes=\"attributes\" :modelMatrix=\"modelMatrixBottom\">\n      </vc-geometry-instance>\n    </vc-primitive>\n    <vc-primitive :appearance=\"appearance2\" @click=\"onClicked\">\n      <vc-geometry-instance>\n        <vc-geometry-rectangle ref=\"instanceRectangle\" :rectangle=\"[110.5, 29.5, 115.5, 34.5]\"></vc-geometry-rectangle>\n      </vc-geometry-instance>\n      <vc-geometry-instance>\n        <vc-geometry-polygon\n          ref=\"instancePolygon\"\n          :polygonHierarchy=\"[\n          { lng: 102.1, lat: 29.5 },\n          { lng: 106.2, lat: 29.5 },\n          { lng: 106.2, lat: 33.5 },\n          { lng: 108.2, lat: 35.5 },\n          { lng: 102.1, lat: 33.5 }\n        ]\"\n          :height=\"20000\"\n        ></vc-geometry-polygon>\n      </vc-geometry-instance>\n    </vc-primitive>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const geometry = ref(null)\n      const appearance = ref(null)\n      const appearance2 = ref(null)\n      const attributes = ref(null)\n      const modelMatrixTop = ref(null)\n      const modelMatrixBottom = ref(null)\n      const instanceBoxTop = ref(null)\n      const instanceBoxBottom = ref(null)\n      const instanceRectangle = ref(null)\n      const instancePolygon = ref(null)\n\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        instanceBoxBottom.value.unload()\n        instanceBoxTop.value.unload()\n        instanceRectangle.value.unload()\n        // instancePolygon.value.unload()\n      }\n      const reload = () => {\n        instanceBoxBottom.value.reload()\n        instanceBoxTop.value.reload()\n        instanceRectangle.value.reload()\n        // instancePolygon.value.reload()\n      }\n      const load = () => {\n        instanceBoxBottom.value.load()\n        instanceBoxTop.value.load()\n        instanceRectangle.value.load()\n        // instancePolygon.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        geometry.value = Cesium.BoxGeometry.fromDimensions({\n          vertexFormat: Cesium.VertexFormat.POSITION_AND_NORMAL,\n          dimensions: new Cesium.Cartesian3(1000000.0, 1000000.0, 250000.0)\n        })\n        appearance.value = new Cesium.PerInstanceColorAppearance()\n        attributes.value = {\n          color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.AQUA)\n        }\n        modelMatrixBottom.value = Cesium.Matrix4.multiplyByTranslation(\n          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)),\n          new Cesium.Cartesian3(0.0, 0.0, 100000.0),\n          new Cesium.Matrix4()\n        )\n        modelMatrixTop.value = Cesium.Matrix4.multiplyByTranslation(\n          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)),\n          new Cesium.Cartesian3(0.0, 0.0, 1500000.0),\n          new Cesium.Matrix4()\n        )\n        appearance2.value = new Cesium.MaterialAppearance({\n          material: Cesium.Material.fromType('Checkerboard', {\n            repeat: new Cesium.Cartesian2(20.0, 6.0)\n          }),\n          materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED\n        })\n      }\n      // lifecycle\n      onMounted(() => {\n        Promise.all([\n          instanceBoxTop.value.creatingPromise,\n          instanceBoxBottom.value.creatingPromise,\n          instanceRectangle.value.creatingPromise,\n          instancePolygon.value.creatingPromise\n        ]).then(instances => {\n          const { BoundingSphere } = Cesium\n          const boundingSphereUnion = instances.reduce((prev, cur) => {\n            const geometry = cur.cesiumObject.geometry || cur.cesiumObject\n            const computGeometry = geometry.constructor.createGeometry(geometry)\n            const boundingSphere = cur.cesiumObject.geometry\n              ? BoundingSphere.transform(computGeometry.boundingSphere, cur.cesiumObject.modelMatrix || cur.vm.proxy.$parent.modelMatrix)\n              : computGeometry.boundingSphere\n            return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere)\n          }, null)\n          instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)\n          console.log('All instances are loaded.')\n        })\n      })\n      return {\n        unload,\n        reload,\n        load,\n        geometry,\n        appearance,\n        appearance2,\n        attributes,\n        modelMatrixBottom,\n        modelMatrixTop,\n        onClicked,\n        onViewerReady,\n        instanceBoxTop,\n        instanceBoxBottom,\n        instanceRectangle,\n        instancePolygon\n      }\n    }\n  }\n</script>\n")], -1);
const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>geometry</td><td>Cesium.Geometry | Cesium.GeometryFactory</td><td></td><td><code>required</code> 指定 geometry。</td></tr><tr><td>modelMatrix</td><td>Cesium.Matrix4</td><td></td><td><code>optional</code> 指定将几何图形从模型坐标转换为世界坐标的模型矩阵。</td></tr><tr><td>id</td><td>*</td><td></td><td><code>optional</code> 指定与 geometry 关联的信息，拾取时或者 Primitive#getGeometryInstanceAttributes 方法将返回该属性值。</td></tr><tr><td>attributes</td><td>any</td><td></td><td><code>optional</code> 指定每个实例的属性。</td></tr></tbody></table>", 1);
const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr></tbody></table>", 1);
const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动加载组件。</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动重新加载组件。</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>手动卸载组件。</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>获取标志该组件是否创建成功的 Promise 对象。</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>获取通过该组件加载的 Cesium 对象。</td></tr></tbody></table>", 1);
const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "插槽名"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "描述"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "子组件")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "用于挂载 vc-geometry-xxx 子组件。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-geometry-box/vc-geometry-box-outline/vc-geometry-circle/vc-geometry-circle-outline/vc-geometry-corridor/vc-geometry-corridor-outline/vc-geometry-cylinder/vc-geometry-cylinder-outline/vc-geometry-ellipse/vc-geometry-ellipse-outline/vc-geometry-ellipsoid/vc-geometry-ellipsoid-outline/vc-geometry-frustum/vc-geometry-frustum-outline/vc-geometry-plane/vc-geometry-plane-outline/vc-geometry-polygon/vc-geometry-polygon-outline/vc-geometry-polygon-coplanar/vc-geometry-polygon-coplanar-outline/vc-geometry-polyline/vc-geometry-ground-polyline/vc-geometry-simple-polyline/vc-geometry-polyline-volume/vc-geometry-rectangle/vc-geometry-rectangle-outline/vc-geometry-sphere/vc-geometry-sphere-outline/vc-geometry-wall/vc-geometry-wall-outline")])])], -1);
function vc_geometry_instancevue_type_template_id_6e1fcde5_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");
  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");
  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");
  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");
  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcgeometryinstance",
    tabindex: "-1",
    content: "VcGeometryInstance",
    href: "#vcgeometryinstance",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcGeometryInstance "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcgeometryinstance"
    })]),
    _: 1
  }), _hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("基础用法 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), _hoisted_4, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    tabindex: "-1",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("属性 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-jian",
    tabindex: "-1",
    content: "事件",
    href: "#shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("事件 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "fang-fa",
    tabindex: "-1",
    content: "方法",
    href: "#fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("方法 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fang-fa"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "cha-cao",
    tabindex: "-1",
    content: "插槽",
    href: "#cha-cao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("插槽 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cha-cao"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "can-kao",
    tabindex: "-1",
    content: "参考",
    href: "#can-kao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("参考 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#can-kao"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createTextVNode"])("官方文档： "), Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/GeometryInstance.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("GeometryInstance")]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/geometries/vc-geometry-instance.md?vue&type=template&id=6e1fcde5

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/geometries/vc-geometry-instance.md?vue&type=script&lang=ts

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
              default: _withCtx(() => [_createTextVNode("销毁")]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_createTextVNode("加载")]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_createTextVNode("重载")]),
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
          const instancePolygon = ref(null);

          // methods
          const onClicked = e => {
            console.log(e);
          };
          const unload = () => {
            instanceBoxBottom.value.unload();
            instanceBoxTop.value.unload();
            instanceRectangle.value.unload();
            // instancePolygon.value.unload()
          };

          const reload = () => {
            instanceBoxBottom.value.reload();
            instanceBoxTop.value.reload();
            instanceRectangle.value.reload();
            // instancePolygon.value.reload()
          };

          const load = () => {
            instanceBoxBottom.value.load();
            instanceBoxTop.value.load();
            instanceRectangle.value.load();
            // instancePolygon.value.load()
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
          };
          // lifecycle
          onMounted(() => {
            Promise.all([instanceBoxTop.value.creatingPromise, instanceBoxBottom.value.creatingPromise, instanceRectangle.value.creatingPromise, instancePolygon.value.creatingPromise]).then(instances => {
              const {
                BoundingSphere
              } = Cesium;
              const boundingSphereUnion = instances.reduce((prev, cur) => {
                const geometry = cur.cesiumObject.geometry || cur.cesiumObject;
                const computGeometry = geometry.constructor.createGeometry(geometry);
                const boundingSphere = cur.cesiumObject.geometry ? BoundingSphere.transform(computGeometry.boundingSphere, cur.cesiumObject.modelMatrix || cur.vm.proxy.$parent.modelMatrix) : computGeometry.boundingSphere;
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
// CONCATENATED MODULE: ./website/docs/zh-CN/geometries/vc-geometry-instance.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/geometries/vc-geometry-instance.md



vc_geometry_instancevue_type_script_lang_ts.render = vc_geometry_instancevue_type_template_id_6e1fcde5_render

/* harmony default export */ var vc_geometry_instance = __webpack_exports__["default"] = (vc_geometry_instancevue_type_script_lang_ts);

/***/ })

}]);