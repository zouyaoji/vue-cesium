(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[140],{

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-polyline.md?vue&type=template&id=4b33f0f0

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcGraphicsPolyline ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载线实体，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.PolylineGraphics"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例。")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 需要作为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的子组件才能正常加载。")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "线实体组件的基础用法。", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-graphics-polyline"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加线实体对象。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-polyline\n        :positions=\"[{ lng: 90, lat: 20, height: 10000 }, { lng: 120, lat: 20, height: 10000 }]\"\n        material=\"red\"\n        :width=\"5\"\n        :clampToGround=\"false\"\n      ></vc-graphics-polyline>\n    </vc-entity>\n    <vc-entity>\n      <vc-graphics-polyline\n        :positions=\"[90, 30, 1000, 120, 30, 1000]\"\n        :material=\"{fabric: { type: 'PolylineGlow', uniforms: { glowPower: 0.2, color: 'blue' }}}\"\n        :width=\"10\"\n      ></vc-graphics-polyline>\n    </vc-entity>\n    <vc-entity>\n      <vc-graphics-polyline\n        :positions=\"[[90, 40, 1000], [120, 40, 1000]]\"\n        :material=\"{fabric: { type: 'PolylineArrow', uniforms: { color: 'purple' }}}\"\n        :width=\"10\"\n      ></vc-graphics-polyline>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const point1 = ref(null)\n      const point2 = ref(null)\n      const point3 = ref(null)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n      return {\n        onEntityEvt,\n        onViewerReady\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定线是否可显示。</td><td></td></tr><tr><td>positions</td><td>Array</td><td></td><td><code>optional</code> 指定表示线条的位置数组。</td><td></td></tr><tr><td>width</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定线的宽度（像素）。</td><td></td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> 指定每个经纬度之间的采样粒度。 arcType 不是 ArcType.NONE 时有效。</td><td></td></tr><tr><td>material</td><td>Object|String|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> 指定用于绘制线的材质。</td><td></td></tr><tr><td>depthFailMaterial</td><td>Object|String|Array</td><td></td><td><code>optional</code> 指定用于绘制低于地形的线的材质。</td><td></td></tr><tr><td>arcType</td><td>Number</td><td><code>1</code></td><td><code>optional</code> 指定线条类型。 <strong>NONE: 0, GEODESIC: 1, RHUMB: 2</strong></td><td>0/1/2</td></tr><tr><td>clampToGround</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定线是否贴地。</td><td></td></tr><tr><td>shadows</td><td>Number</td><td></td><td><code>optional</code> 指定这些是否投射或接收来自每个光源的阴影。<strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>classificationType</td><td>Number</td><td><code>2</code></td><td><code>optional</code> 指定相机到线的距离。 <strong>TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2</strong></td><td>0/1/2</td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> 指定相机到线的距离。</td><td></td></tr><tr><td>zIndex</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定用于排序地面几何的 zIndex。 仅当<code>clampToGround</code>为真且支持地形上的折线时才有效。</td><td></td></tr></tbody></table>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>definitionChanged</td><td></td><td>每当更改或修改属性或子属性时触发该事件。</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("官方文档： ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("PolylineGraphics");

function vc_graphics_polylinevue_type_template_id_4b33f0f0_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcgraphicspolyline",
    tabindex: "-1",
    content: "VcGraphicsPolyline",
    href: "#vcgraphicspolyline",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcgraphicspolyline"
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
    href: "https://cesium.com/docs/cesiumjs-ref-doc/PolylineGraphics.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-polyline.md?vue&type=template&id=4b33f0f0

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-polyline.md?vue&type=script&lang=ts

/* harmony default export */ var vc_graphics_polylinevue_type_script_lang_ts = ({
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
        const _component_vc_graphics_polyline = _resolveComponent("vc-graphics-polyline");

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
              onClick: _ctx.onEntityEvt,
              onMouseover: _ctx.onEntityEvt,
              onMouseout: _ctx.onEntityEvt
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polyline, {
                positions: [{
                  lng: 90,
                  lat: 20,
                  height: 10000
                }, {
                  lng: 120,
                  lat: 20,
                  height: 10000
                }],
                material: "red",
                width: 5,
                clampToGround: false
              })]),
              _: 1
            }, 8, ["onClick", "onMouseover", "onMouseout"]), _createVNode(_component_vc_entity, null, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polyline, {
                positions: [90, 30, 1000, 120, 30, 1000],
                material: {
                  fabric: {
                    type: 'PolylineGlow',
                    uniforms: {
                      glowPower: 0.2,
                      color: 'blue'
                    }
                  }
                },
                width: 10
              }, null, 8, ["material"])]),
              _: 1
            }), _createVNode(_component_vc_entity, null, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polyline, {
                positions: [[90, 40, 1000], [120, 40, 1000]],
                material: {
                  fabric: {
                    type: 'PolylineArrow',
                    uniforms: {
                      color: 'purple'
                    }
                  }
                },
                width: 10
              })]),
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
          const point1 = ref(null);
          const point2 = ref(null);
          const point3 = ref(null); // methods

          const onEntityEvt = e => {
            console.log(e);
          };

          const onViewerReady = cesiumInstance => {
            console.log('viewer ready');
          };

          return {
            onEntityEvt,
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
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-polyline.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-polyline.md



vc_graphics_polylinevue_type_script_lang_ts.render = vc_graphics_polylinevue_type_template_id_4b33f0f0_render

/* harmony default export */ var vc_graphics_polyline = __webpack_exports__["default"] = (vc_graphics_polylinevue_type_script_lang_ts);

/***/ })

}]);