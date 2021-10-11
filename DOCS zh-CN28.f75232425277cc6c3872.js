(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[113],{

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/geometries/vc-instance-geometry.md?vue&type=template&id=5d1f36b2

const vc_instance_geometryvue_type_template_id_5d1f36b2_hoisted_1 = {
  class: "content element-doc"
};

const vc_instance_geometryvue_type_template_id_5d1f36b2_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcinstancegeometry\"><a class=\"header-anchor\" href=\"#vcinstancegeometry\">¶</a> VcInstanceGeometry</h2><p>加载实例化的几何体，相当于初始化一个 <code>Cesium.GeometryInstance</code> 实例。</p><p><strong>注意</strong>：需要作为 <code>vc-primitive</code>、<code>vc-primitive-classification</code>、<code>vc-primitive-ground</code>、<code>vc-primitive-polyline-ground</code> 的子组件才能正常加载。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>几何体实例组件的基础用法。</p>", 5);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-instance-geometry"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加立方盒几何体对象。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-primitive :appearance=\"appearance\" @click=\"onClicked\">\n      <vc-instance-geometry ref=\"instanceBoxTop\" id=\"top\" :geometry=\"geometry\" :attributes=\"attributes\" :modelMatrix=\"modelMatrixTop\">\n      </vc-instance-geometry>\n      <vc-instance-geometry ref=\"instanceBoxBottom\" id=\"bottom\" :geometry=\"geometry\" :attributes=\"attributes\" :modelMatrix=\"modelMatrixBottom\">\n      </vc-instance-geometry>\n    </vc-primitive>\n    <vc-primitive :appearance=\"appearance2\" @click=\"onClicked\">\n      <vc-instance-geometry>\n        <vc-geometry-rectangle ref=\"instanceRectangle\" :rectangle=\"[110.5, 29.5, 115.5, 34.5]\"></vc-geometry-rectangle>\n      </vc-instance-geometry>\n      <vc-instance-geometry>\n        <vc-geometry-polygon\n          ref=\"instancePolygon\"\n          :polygonHierarchy=\"[\n          { lng: 102.1, lat: 29.5 },\n          { lng: 106.2, lat: 29.5 },\n          { lng: 106.2, lat: 33.5 },\n          { lng: 108.2, lat: 35.5 },\n          { lng: 102.1, lat: 33.5 }\n        ]\"\n          :height=\"20000\"\n        ></vc-geometry-polygon>\n      </vc-instance-geometry>\n    </vc-primitive>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const geometry = ref(null)\n      const appearance = ref(null)\n      const appearance2 = ref(null)\n      const attributes = ref(null)\n      const modelMatrixTop = ref(null)\n      const modelMatrixBottom = ref(null)\n      const instanceBoxTop = ref(null)\n      const instanceBoxBottom = ref(null)\n      const instanceRectangle = ref(null)\n      const instancePolygon = ref(null)\n\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        instanceBoxBottom.value.unload()\n        instanceBoxTop.value.unload()\n        instanceRectangle.value.unload()\n        // instancePolygon.value.unload()\n      }\n      const reload = () => {\n        instanceBoxBottom.value.reload()\n        instanceBoxTop.value.reload()\n        instanceRectangle.value.reload()\n        // instancePolygon.value.reload()\n      }\n      const load = () => {\n        instanceBoxBottom.value.load()\n        instanceBoxTop.value.load()\n        instanceRectangle.value.load()\n        // instancePolygon.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        geometry.value = Cesium.BoxGeometry.fromDimensions({\n          vertexFormat: Cesium.VertexFormat.POSITION_AND_NORMAL,\n          dimensions: new Cesium.Cartesian3(1000000.0, 1000000.0, 250000.0)\n        })\n        appearance.value = new Cesium.PerInstanceColorAppearance()\n        attributes.value = {\n          color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.AQUA)\n        }\n        modelMatrixBottom.value = Cesium.Matrix4.multiplyByTranslation(\n          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)),\n          new Cesium.Cartesian3(0.0, 0.0, 100000.0),\n          new Cesium.Matrix4()\n        )\n        modelMatrixTop.value = Cesium.Matrix4.multiplyByTranslation(\n          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108, 40.03883)),\n          new Cesium.Cartesian3(0.0, 0.0, 1500000.0),\n          new Cesium.Matrix4()\n        )\n        appearance2.value = new Cesium.MaterialAppearance({\n          material: Cesium.Material.fromType('Checkerboard', {\n            repeat: new Cesium.Cartesian2(20.0, 6.0)\n          }),\n          materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED\n        })\n      }\n      // lifecycle\n      onMounted(() => {\n        Promise.all([\n          instanceBoxTop.value.createPromise,\n          instanceBoxBottom.value.createPromise,\n          instanceRectangle.value.createPromise,\n          instancePolygon.value.createPromise\n        ]).then(instances => {\n          const { BoundingSphere } = Cesium\n          const boundingSphereUnion = instances.reduce((prev, cur) => {\n            const geometry = cur.cesiumObject.geometry || cur.cesiumObject\n            const computGeometry = geometry.constructor.createGeometry(geometry)\n            const boundingSphere =\n              cur.cesiumObject.modelMatrix || cur.vm.$parent.modelMatrix\n                ? BoundingSphere.transform(computGeometry.boundingSphere, cur.cesiumObject.modelMatrix || cur.vm.$parent.modelMatrix)\n                : computGeometry.boundingSphere\n            return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere)\n          }, null)\n          instances[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)\n          console.log('All instances are loaded.')\n        })\n      })\n      return {\n        unload,\n        reload,\n        load,\n        geometry,\n        appearance,\n        appearance2,\n        attributes,\n        modelMatrixBottom,\n        modelMatrixTop,\n        onClicked,\n        onViewerReady,\n        instanceBoxTop,\n        instanceBoxBottom,\n        instanceRectangle,\n        instancePolygon\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>geometry</td><td>Object</td><td></td><td><code>required</code> 指定 geometry。</td></tr><tr><td>modelMatrix</td><td>Object</td><td></td><td><code>optional</code> 指定将几何图形从模型坐标转换为世界坐标的模型矩阵。</td></tr><tr><td>id</td><td>*</td><td></td><td><code>optional</code> 指定与 geometry 关联的信息，拾取时或者 Primitive#getGeometryInstanceAttributes 方法将返回该属性值。</td></tr><tr><td>attributes</td><td>Object</td><td></td><td><code>optional</code> 指定每个实例的属性。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/GeometryInstance.html\">GeometryInstance</a></strong></li></ul>", 6);

function vc_instance_geometryvue_type_template_id_5d1f36b2_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_instance_geometryvue_type_template_id_5d1f36b2_hoisted_1, [vc_instance_geometryvue_type_template_id_5d1f36b2_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/geometries/vc-instance-geometry.md?vue&type=template&id=5d1f36b2

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/geometries/vc-instance-geometry.md?vue&type=script&lang=ts

/* harmony default export */ var vc_instance_geometryvue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

      function render(_ctx, _cache) {
        const _component_vc_instance_geometry = _resolveComponent("vc-instance-geometry");

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
              default: _withCtx(() => [_createVNode(_component_vc_instance_geometry, {
                ref: "instanceBoxTop",
                id: "top",
                geometry: _ctx.geometry,
                attributes: _ctx.attributes,
                modelMatrix: _ctx.modelMatrixTop
              }, null, 8, ["geometry", "attributes", "modelMatrix"]), _createVNode(_component_vc_instance_geometry, {
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
              default: _withCtx(() => [_createVNode(_component_vc_instance_geometry, null, {
                default: _withCtx(() => [_createVNode(_component_vc_geometry_rectangle, {
                  ref: "instanceRectangle",
                  rectangle: [110.5, 29.5, 115.5, 34.5]
                }, null, 8, ["rectangle"])]),
                _: 1
              }), _createVNode(_component_vc_instance_geometry, null, {
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

          const onViewerReady = ({
            Cesium,
            viewer
          }) => {
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
            Promise.all([instanceBoxTop.value.createPromise, instanceBoxBottom.value.createPromise, instanceRectangle.value.createPromise, instancePolygon.value.createPromise]).then(instances => {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/geometries/vc-instance-geometry.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/geometries/vc-instance-geometry.md



vc_instance_geometryvue_type_script_lang_ts.render = vc_instance_geometryvue_type_template_id_5d1f36b2_render

/* harmony default export */ var vc_instance_geometry = __webpack_exports__["default"] = (vc_instance_geometryvue_type_script_lang_ts);

/***/ })

}]);