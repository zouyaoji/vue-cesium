(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[143],{

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-plane.md?vue&type=template&id=9c93a5a8

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcGraphicsPlane ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载平面实体，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.PlaneGraphics"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例。")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 需要作为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的子组件才能正常加载。")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "平面实体组件的基础用法。", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-graphics-plane"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加平面实体对象。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity :position=\"[114, 40, 300000]\" description=\"Hello VueCesium\">\n      <vc-graphics-plane\n        ref=\"plane1\"\n        :plane=\"{normal: { x: 1, y: 0, z: 0 }, distance: 0.0}\"\n        :dimensions=\"[400000, 300000]\"\n        material=\"blue\"\n      ></vc-graphics-plane>\n    </vc-entity>\n    <vc-entity :position=\"[107,40, 300000]\" description=\"Hello VueCesium\">\n      <vc-graphics-plane\n        ref=\"plane2\"\n        :plane=\"[{ x: 0, y: 1, z: 0 }, 0]\"\n        :dimensions=\"[400000, 300000]\"\n        :material=\"[255, 0, 0, 125]\"\n        :outline=\"true\"\n        outlineColor=\"black\"\n      ></vc-graphics-plane>\n    </vc-entity>\n    <vc-entity :position=\"[100, 40, 300000]\" description=\"Hello VueCesium\">\n      <vc-graphics-plane\n        ref=\"plane3\"\n        :plane=\"{ normal: { x: 0, y: 0, z: 1 }, distance: 0.0 }\"\n        :dimensions=\"{ x: 400000.0, y: 300000.0 }\"\n        :fill=\"false\"\n        :outline=\"true\"\n        outlineColor=\"yellow\"\n      ></vc-graphics-plane>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const plane1 = ref(null)\n      const plane2 = ref(null)\n      const plane3 = ref(null)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n      // life cycle\n      onMounted(() => {\n        Promise.all([plane1.value.creatingPromise, plane2.value.creatingPromise, plane3.value.creatingPromise]).then(instances => {\n          instances[0].viewer.zoomTo(instances[0].viewer.entities)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        plane1,\n        plane2,\n        plane3,\n        onViewerReady\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定 plane 是否显示。</td><td></td></tr><tr><td>plane</td><td>VcPlane|Array</td><td></td><td><code>optional</code> 指定 plane 的法线和距离。</td><td></td></tr><tr><td>dimensions</td><td>VcPosition|Array</td><td></td><td><code>optional</code> 指定 plane 的宽和高。</td><td></td></tr><tr><td>fill</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定 plane 是否填充材质。</td><td></td></tr><tr><td>material</td><td>VcMaterial|string|Array</td><td><code>&#39;WHITE&#39;</code></td><td><code>optional</code> 指定 plane 的材质。</td><td></td></tr><tr><td>outline</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> 指定 plane 是否绘制轮廓线。</td><td></td></tr><tr><td>outlineColor</td><td>VcColor|string|Array</td><td><code>&#39;BLACK&#39;</code></td><td><code>optional</code> 指定 plane 轮廓线颜色。</td><td></td></tr><tr><td>outlineWidth</td><td>number</td><td><code>1.0</code></td><td><code>optional</code> 指定 plane 轮廓线宽度。</td><td></td></tr><tr><td>shadows</td><td>number</td><td><code>0</code></td><td><code>optional</code> 指定 plane 是否投射或接收阴影。 <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>distanceDisplayCondition</td><td>VcDistanceDisplayCondition|Array</td><td></td><td><code>optional</code> 指定 plane 随相机距离改变的显示条件。</td><td></td></tr></tbody></table>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>definitionChanged</td><td></td><td>每当更改或修改属性或子属性时触发该事件。</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("官方文档： ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("PlaneGraphics");

function vc_graphics_planevue_type_template_id_9c93a5a8_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcgraphicsplane",
    tabindex: "-1",
    content: "VcGraphicsPlane",
    href: "#vcgraphicsplane",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcgraphicsplane"
    })]),
    _: 1
  }), _hoisted_3, _hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    tabindex: "-1",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-jian",
    tabindex: "-1",
    content: "事件",
    href: "#shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "can-kao",
    tabindex: "-1",
    content: "参考",
    href: "#can-kao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#can-kao"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_14, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/PlaneGraphics.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-plane.md?vue&type=template&id=9c93a5a8

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-plane.md?vue&type=script&lang=ts

/* harmony default export */ var vc_graphics_planevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;

      function render(_ctx, _cache) {
        const _component_vc_graphics_plane = _resolveComponent("vc-graphics-plane");

        const _component_vc_entity = _resolveComponent("vc-entity");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.onViewerReady
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_entity, {
              position: [114, 40, 300000],
              description: "Hello VueCesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_plane, {
                ref: "plane1",
                plane: {
                  normal: {
                    x: 1,
                    y: 0,
                    z: 0
                  },
                  distance: 0.0
                },
                dimensions: [400000, 300000],
                material: "blue"
              }, null, 8, ["plane"])]),
              _: 1
            }), _createVNode(_component_vc_entity, {
              position: [107, 40, 300000],
              description: "Hello VueCesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_plane, {
                ref: "plane2",
                plane: [{
                  x: 0,
                  y: 1,
                  z: 0
                }, 0],
                dimensions: [400000, 300000],
                material: [255, 0, 0, 125],
                outline: true,
                outlineColor: "black"
              }, null, 512)]),
              _: 1
            }), _createVNode(_component_vc_entity, {
              position: [100, 40, 300000],
              description: "Hello VueCesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_plane, {
                ref: "plane3",
                plane: {
                  normal: {
                    x: 0,
                    y: 0,
                    z: 1
                  },
                  distance: 0.0
                },
                dimensions: {
                  x: 400000.0,
                  y: 300000.0
                },
                fill: false,
                outline: true,
                outlineColor: "yellow"
              }, null, 8, ["plane", "dimensions"])]),
              _: 1
            })]),
            _: 1
          }, 8, ["onReady"])]),
          _: 1
        }, 512)]);
      }

      const {
        ref,
        getCurrentInstance,
        onMounted
      } = vue_esm_browser;
      const democomponentExport = {
        setup() {
          // state
          const plane1 = ref(null);
          const plane2 = ref(null);
          const plane3 = ref(null); // methods

          const onEntityEvt = e => {
            console.log(e);
          };

          const onViewerReady = cesiumInstance => {
            console.log('viewer ready');
          }; // life cycle


          onMounted(() => {
            Promise.all([plane1.value.creatingPromise, plane2.value.creatingPromise, plane3.value.creatingPromise]).then(instances => {
              instances[0].viewer.zoomTo(instances[0].viewer.entities);
            });
          });
          return {
            onEntityEvt,
            plane1,
            plane2,
            plane3,
            onViewerReady
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
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-plane.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-plane.md



vc_graphics_planevue_type_script_lang_ts.render = vc_graphics_planevue_type_template_id_9c93a5a8_render

/* harmony default export */ var vc_graphics_plane = __webpack_exports__["default"] = (vc_graphics_planevue_type_script_lang_ts);

/***/ })

}]);