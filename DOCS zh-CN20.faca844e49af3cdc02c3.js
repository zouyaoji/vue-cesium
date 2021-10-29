(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[107],{

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/geometries/vc-geometry-polygon.md?vue&type=template&id=83745c66

const vc_geometry_polygonvue_type_template_id_83745c66_hoisted_1 = {
  class: "content element-doc"
};

const vc_geometry_polygonvue_type_template_id_83745c66_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcgeometrypolygon\"><a class=\"header-anchor\" href=\"#vcgeometrypolygon\">¶</a> VcGeometryPolygon</h2><p>加载多边形，相当于初始化一个 <code>Cesium.PolygonGeometry</code> 实例。</p><p><strong>注意</strong>：需要作为 <code>vc-instance-geometry</code> 的子组件才能正常加载。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>多边形几何图形组件的基础用法。</p>", 5);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-geometry-polygon"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 和 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-geometry-polygon-outline"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加多边形。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-primitive :appearance=\"appearance\" @click=\"onClicked\">\n      <vc-instance-geometry>\n        <vc-geometry-polygon\n          ref=\"geometryRef\"\n          :polygonHierarchy=\"polygonHierarchy\"\n          :vertexFormat=\"vertexFormat\"\n          :height=\"100000\"\n          :extrudedHeight=\"30\"\n        ></vc-geometry-polygon>\n      </vc-instance-geometry>\n    </vc-primitive>\n    <vc-primitive :appearance=\"appearanceOutline\" @click=\"onClicked\" v-if=\"outline\">\n      <vc-instance-geometry :attributes=\"attributesOutline\">\n        <vc-geometry-polygon-outline\n          ref=\"geometryOutlineRef\"\n          :polygonHierarchy=\"polygonHierarchy\"\n          :height=\"100000\"\n          :extrudedHeight=\"30\"\n        ></vc-geometry-polygon-outline>\n      </vc-instance-geometry>\n    </vc-primitive>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    <el-switch v-model=\"outline\" active-color=\"#13ce66\" inactive-text=\"边框\"> </el-switch>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const instance = getCurrentInstance()\n      const geometryRef = ref(null)\n      const geometryOutlineRef = ref(null)\n      const appearance = ref(null)\n      const appearanceOutline = ref(null)\n      const vertexFormat = ref(null)\n      const attributesOutline = ref(null)\n      const outline = ref(true)\n      const polygonHierarchy = [\n        { lng: 102.1, lat: 29.5 },\n        { lng: 106.2, lat: 29.5 },\n        { lng: 106.2, lat: 33.5 },\n        { lng: 108.2, lat: 35.5 },\n        { lng: 102.1, lat: 33.5 }\n      ]\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        geometryRef.value.unload()\n        geometryOutlineRef.value.unload()\n      }\n      const reload = () => {\n        geometryRef.value.reload()\n        geometryOutlineRef.value.reload()\n      }\n      const load = () => {\n        geometryRef.value.load()\n        geometryOutlineRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        console.log('onViewerReady')\n        const { PerInstanceColorAppearance, EllipsoidSurfaceAppearance, Material, ColorGeometryInstanceAttribute } = Cesium\n        appearanceOutline.value = new PerInstanceColorAppearance({\n          flat: true\n        })\n        vertexFormat.value = EllipsoidSurfaceAppearance.VERTEX_FORMAT\n\n        appearance.value = new EllipsoidSurfaceAppearance({\n          material: new Material({\n            fabric: {\n              type: 'Water',\n              uniforms: {\n                normalMap: Cesium.buildModuleUrl('Assets/Textures/waterNormals.jpg'),\n                frequency: 1000.0,\n                animationSpeed: 0.05,\n                amplitude: 10.0\n              }\n            }\n          })\n        })\n\n        attributesOutline.value = {\n          color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())\n        }\n      }\n      // lifecycle\n      onMounted(() => {\n        Promise.all([geometryRef.value.createPromise, geometryOutlineRef.value.createPromise]).then(geometries => {\n          const { BoundingSphere } = Cesium\n          const boundingSphereUnion = geometries.reduce((prev, cur) => {\n            const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)\n            const boundingSphere = cur.vm.$parent.modelMatrix\n              ? BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)\n              : geometry.boundingSphere\n            return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere)\n          }, null)\n          geometries[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)\n          console.log('All geometries are loaded.')\n        })\n      })\n      return {\n        unload,\n        reload,\n        load,\n        onClicked,\n        onViewerReady,\n        geometryRef,\n        geometryOutlineRef,\n        appearance,\n        appearanceOutline,\n        attributesOutline,\n        outline,\n        polygonHierarchy,\n        vertexFormat\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>polygonHierarchy</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 polygon 的 PolygonHierarchy 属性，可以包含岛洞。</td><td></td></tr><tr><td>height</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 polygon 的高度。</td><td></td></tr><tr><td>extrudedHeight</td><td>Number</td><td></td><td><code>optional</code> 指定 polygon 拉伸高度。</td><td></td></tr><tr><td>vertexFormat</td><td>Object</td><td></td><td><code>optional</code> 指定 polygon 要缓存的顶点属性。</td><td></td></tr><tr><td>stRotation</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> 指定 polygon 纹理按正北方向逆时针旋转角度。</td><td></td></tr><tr><td>ellipsoid</td><td>Object</td><td></td><td><code>optional</code> 指定 polygon 参考椭球体。</td><td></td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> 指定 polygon 每个纬度和经度之间的距离（以弧度为单位）。</td><td></td></tr><tr><td>perPositionHeight</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定 polygon 是否使用每个位置的高度。</td><td></td></tr><tr><td>closeTop</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 polygon 拉伸出来的顶部是否闭合。</td><td></td></tr><tr><td>closeBottom</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 polygon 拉伸出来的底部是否闭合。</td><td></td></tr><tr><td>arcType</td><td>Number</td><td><code>1</code></td><td><code>optional</code> 指定 polygon 线条类型。<strong>NONE: 0, GEODESIC: 1, RHUMB: 2</strong></td><td>0/1/2</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr></tbody></table><h3 id=\"vcgeometrypolygonoutline\"><a class=\"header-anchor\" href=\"#vcgeometrypolygonoutline\">¶</a> VcGeometryPolygonOutline</h3><p>加载多边形几何图形边框，相当于初始化一个 <code>Cesium.PolygonOutlineGeometry</code> 实例。</p><p><strong>注意</strong>：需要作为 <code>vc-instance-geometry</code> 的子组件才能正常加载。</p><h3 id=\"vcgeometrypolygonoutline-shu-xing\"><a class=\"header-anchor\" href=\"#vcgeometrypolygonoutline-shu-xing\">¶</a> VcGeometryPolygonOutline 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>polygonHierarchy</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 polygon 的 PolygonHierarchy 属性。</td><td></td></tr><tr><td>height</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 polygon 的高度。</td><td></td></tr><tr><td>extrudedHeight</td><td>Number</td><td></td><td><code>optional</code> 指定 polygon 拉伸高度。</td><td></td></tr><tr><td>vertexFormat</td><td>Object</td><td></td><td><code>optional</code> 指定 polygon 要缓存的顶点属性。</td><td></td></tr><tr><td>ellipsoid</td><td>Object</td><td></td><td><code>optional</code> 指定 polygon 参考椭球体。</td><td></td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> 指定 polygon 每个纬度和经度之间的距离（以弧度为单位）。</td><td></td></tr><tr><td>perPositionHeight</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定 polygon 是否使用每个位置的高度。</td><td></td></tr><tr><td>arcType</td><td>Number</td><td><code>1</code></td><td><code>optional</code> 指定 polygon 线条类型。<strong>NONE: 0, GEODESIC: 1, RHUMB: 2</strong></td><td>0/1/2</td></tr></tbody></table><h3 id=\"vcgeometrypolygonoutline-shi-jian\"><a class=\"header-anchor\" href=\"#vcgeometrypolygonoutline-shi-jian\">¶</a> VcGeometryPolygonOutline 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PolygonGeometry.html\">PolygonGeometry</a>、<a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PolygonOutlineGeometry.html\">PolygonOutlineGeometry</a></strong></li></ul>", 13);

function vc_geometry_polygonvue_type_template_id_83745c66_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_geometry_polygonvue_type_template_id_83745c66_hoisted_1, [vc_geometry_polygonvue_type_template_id_83745c66_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/geometries/vc-geometry-polygon.md?vue&type=template&id=83745c66

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/geometries/vc-geometry-polygon.md?vue&type=script&lang=ts

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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

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
              "inactive-text": "边框"
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
// CONCATENATED MODULE: ./website/docs/zh-CN/geometries/vc-geometry-polygon.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/geometries/vc-geometry-polygon.md



vc_geometry_polygonvue_type_script_lang_ts.render = vc_geometry_polygonvue_type_template_id_83745c66_render

/* harmony default export */ var vc_geometry_polygon = __webpack_exports__["default"] = (vc_geometry_polygonvue_type_script_lang_ts);

/***/ })

}]);