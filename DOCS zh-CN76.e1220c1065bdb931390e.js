(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[173],{

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-primitive.md?vue&type=template&id=3a016b74

const vc_primitivevue_type_template_id_3a016b74_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_primitivevue_type_template_id_3a016b74_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPrimitive ");

const vc_primitivevue_type_template_id_3a016b74_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载通用图元，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.Primitive"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例，通常用于挂载几何体("), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-geometry-xxx"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(")对象。")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "图元组件的基础用法。", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加矩形和圆。")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-primitive ref=\"primitive\" @click=\"onClicked\" :appearance=\"appearance\" :geometryInstances=\"geometryInstances\">\n      <vc-geometry-instance>\n        <vc-geometry-circle ref=\"geometryRef\" :center=\"[103, 32]\" :radius=\"250000\"></vc-geometry-circle>\n      </vc-geometry-instance>\n    </vc-primitive>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        geometryInstances: {},\n        appearance: {}\n      }\n    },\n    methods: {\n      onViewerReady({ Cesium, viewer }) {\n        const rectangle = { west: 105.5, south: 29.5, east: 115.5, north: 35.5 }\n        this.geometryInstances = new Cesium.GeometryInstance({\n          geometry: new Cesium.RectangleGeometry({\n            rectangle: Cesium.Rectangle.fromDegrees(rectangle.west, rectangle.south, rectangle.east, rectangle.north)\n          })\n        })\n        this.appearance = new Cesium.MaterialAppearance({\n          material: Cesium.Material.fromType('Checkerboard', {\n            repeat: new Cesium.Cartesian2(20.0, 6.0)\n          }),\n          materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED\n        })\n      },\n      onClicked(e) {\n        console.log(e)\n      },\n      unload() {\n        this.$refs.primitive.unload()\n      },\n      load() {\n        this.$refs.primitive.load()\n      },\n      reload() {\n        this.$refs.primitive.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>geometryInstances</td><td>Object|Array</td><td></td><td><code>optional</code> 指定要渲染的几何体实例或者几何体实例集合。</td><td></td></tr><tr><td>appearance</td><td>Object</td><td></td><td><code>optional</code> 指定图元的外观参数。</td><td></td></tr><tr><td>depthFailAppearance</td><td>Object</td><td></td><td><code>optional</code> 指定图元在深度测试失败后的外观。</td><td></td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定图元是否显示。</td><td></td></tr><tr><td>modelMatrix</td><td>Object</td><td></td><td><code>optional</code> 指定图元从模型坐标转换为世界坐标的 4 x 4 矩阵。</td><td></td></tr><tr><td>vertexCacheOptimize</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否优化几何体顶点着色器之前和之后的缓存。</td><td></td></tr><tr><td>interleave</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否交错几何体顶点属性，true 时可以稍微改善渲染性能，但会增加加载时间。</td><td></td></tr><tr><td>compressVertices</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否压缩几何体顶点，压缩可以以节省内存。</td><td></td></tr><tr><td>releaseGeometryInstances</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否保留图元对几何体实例的输入，不保留可以节省内存。</td><td></td></tr><tr><td>allowPicking</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定图元是否可以被 Scene.pick 拾取，关闭拾取可以节省内存。</td><td></td></tr><tr><td>cull</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定是否能被渲染器视锥体剔除。</td><td></td></tr><tr><td>asynchronous</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定图元时异步加载还是同步加载。</td><td></td></tr><tr><td>debugShowBoundingVolume</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否显示图元的边界球，用于调试使用。</td><td></td></tr><tr><td>shadows</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定图元是否投射或接收来自每个光源的阴影。 <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定鼠标事件是否生效。</td><td></td></tr></tbody></table>", 1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上按下时触发。</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上弹起时触发。</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>鼠标单击该图元时触发。</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>鼠标单击该图元外部时触发。</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>鼠标左键双击该图元时触发。</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上移动时触发。</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>鼠标移动到该图元时触发。</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>鼠标移出该图元时触发。</td></tr></tbody></table>", 1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("插槽 ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "插槽名"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "描述"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "子组件")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "用于挂载 vc-geometry-instance 组件。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-geometry-instance")])])], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("官方文档： ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Primitive");

function vc_primitivevue_type_template_id_3a016b74_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_primitivevue_type_template_id_3a016b74_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcprimitive",
    tabindex: "-1",
    content: "VcPrimitive",
    href: "#vcprimitive",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_primitivevue_type_template_id_3a016b74_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcprimitive"
    })]),
    _: 1
  }), vc_primitivevue_type_template_id_3a016b74_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    tabindex: "-1",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-jian",
    tabindex: "-1",
    content: "事件",
    href: "#shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "cha-cao",
    tabindex: "-1",
    content: "插槽",
    href: "#cha-cao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cha-cao"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "can-kao",
    tabindex: "-1",
    content: "参考",
    href: "#can-kao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#can-kao"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_15, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/Primitive.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_16]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-primitive.md?vue&type=template&id=3a016b74

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-primitive.md?vue&type=script&lang=ts

/* harmony default export */ var vc_primitivevue_type_script_lang_ts = ({
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
        const _component_vc_geometry_circle = _resolveComponent("vc-geometry-circle");

        const _component_vc_geometry_instance = _resolveComponent("vc-geometry-instance");

        const _component_vc_primitive = _resolveComponent("vc-primitive");

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
              ref: "primitive",
              onClick: _ctx.onClicked,
              appearance: _ctx.appearance,
              geometryInstances: _ctx.geometryInstances
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_geometry_instance, null, {
                default: _withCtx(() => [_createVNode(_component_vc_geometry_circle, {
                  ref: "geometryRef",
                  center: [103, 32],
                  radius: 250000
                }, null, 512)]),
                _: 1
              })]),
              _: 1
            }, 8, ["onClick", "appearance", "geometryInstances"])]),
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

      const democomponentExport = {
        data() {
          return {
            geometryInstances: {},
            appearance: {}
          };
        },

        methods: {
          onViewerReady(_ref) {
            let {
              Cesium,
              viewer
            } = _ref;
            const rectangle = {
              west: 105.5,
              south: 29.5,
              east: 115.5,
              north: 35.5
            };
            this.geometryInstances = new Cesium.GeometryInstance({
              geometry: new Cesium.RectangleGeometry({
                rectangle: Cesium.Rectangle.fromDegrees(rectangle.west, rectangle.south, rectangle.east, rectangle.north)
              })
            });
            this.appearance = new Cesium.MaterialAppearance({
              material: Cesium.Material.fromType('Checkerboard', {
                repeat: new Cesium.Cartesian2(20.0, 6.0)
              }),
              materialSupport: Cesium.MaterialAppearance.MaterialSupport.TEXTURED
            });
          },

          onClicked(e) {
            console.log(e);
          },

          unload() {
            this.$refs.primitive.unload();
          },

          load() {
            this.$refs.primitive.load();
          },

          reload() {
            this.$refs.primitive.reload();
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-primitive.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-primitive.md



vc_primitivevue_type_script_lang_ts.render = vc_primitivevue_type_template_id_3a016b74_render

/* harmony default export */ var vc_primitive = __webpack_exports__["default"] = (vc_primitivevue_type_script_lang_ts);

/***/ })

}]);