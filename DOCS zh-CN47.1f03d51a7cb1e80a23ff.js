(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[144],{

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_xtlouzbwsjm2tieu75n2ogelwy/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-rectangle.md?vue&type=template&id=2b94d886

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcGraphicsRectangle ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载矩形实体，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.RectangleGraphics"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例。")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 需要作为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的子组件才能正常加载。")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "矩形实体组件的基础用法。", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-graphics-rectangle"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加矩形实体对象。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity description=\"Hello VueCesium\" @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-rectangle\n        ref=\"rectangle1\"\n        :coordinates=\"{ west: -180, south: -90, east: 180, north: 90 }\"\n        :material=\"[255,0,0,125]\"\n      ></vc-graphics-rectangle>\n    </vc-entity>\n    <vc-entity description=\"Hello VueCesium\" @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-rectangle\n        :coordinates=\"[-110, 30, -100, 40]\"\n        :material=\"[0, 255, 0, 125]\"\n        :rotation=\"45/180\"\n        :extrudedHeight=\"300000.0\"\n        :height=\"100000.0\"\n        :outline=\"true\"\n        outlineColor=\"black\"\n        ref=\"rectangle2\"\n      ></vc-graphics-rectangle>\n    </vc-entity>\n    <vc-entity description=\"Hello VueCesium\" @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-rectangle\n        :coordinates=\"{ west: -92.0, south: 30.0, east: -82.0, north: 40.0 }\"\n        material=\"https://zouyaoji.top/vue-cesium/favicon.png\"\n        :rotation=\"getRotationValue\"\n        :stRotation=\"getRotationValue\"\n        :classificationType=\"0\"\n        ref=\"rectangle3\"\n      ></vc-graphics-rectangle>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const rectangle1 = ref(null)\n      const rectangle2 = ref(null)\n      const rectangle3 = ref(null)\n      const rotation = ref(0)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n      const getRotationValue = () => {\n        rotation.value += 0.005\n        return rotation.value\n      }\n      // life cycle\n      onMounted(() => {\n        Promise.all([rectangle1.value.creatingPromise, rectangle2.value.creatingPromise, rectangle3.value.creatingPromise]).then(instances => {\n          instances[0].viewer.zoomTo(instances[0].viewer.entities)\n          window.viewer = instances[0].viewer\n        })\n      })\n\n      return {\n        onEntityEvt,\n        rectangle1,\n        rectangle2,\n        rectangle3,\n        onViewerReady,\n        getRotationValue\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定 rectangle 是否显示。</td><td></td></tr><tr><td>coordinates</td><td>VcRectangle|Array</td><td></td><td><code>optional</code> 指定 rectangle 的 Rectangle 属性。</td><td></td></tr><tr><td>height</td><td>number</td><td><code>0</code></td><td><code>optional</code> 指定 rectangle 高度。</td><td></td></tr><tr><td>heightReference</td><td>number</td><td></td><td><code>optional</code> 指定 rectangle 高度模式。 <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>extrudedHeight</td><td>number</td><td></td><td><code>optional</code> 指定 rectangle 拉伸高度。</td><td></td></tr><tr><td>extrudedHeightReference</td><td>number</td><td></td><td><code>optional</code> 指定 rectangle 拉伸高度模式。 <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>rotation</td><td>number</td><td><code>0.0</code></td><td><code>optional</code> 指定 rectangle 按正北顺时针的旋转角。</td><td></td></tr><tr><td>stRotation</td><td>number</td><td><code>0.0</code></td><td><code>optional</code> 指定 rectangle 按正北逆时针旋转纹理。</td><td></td></tr><tr><td>granularity</td><td>number</td><td></td><td><code>optional</code> 指定每个经纬度之间的采样粒度。</td><td></td></tr><tr><td>fill</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定 rectangle 是否填充材质。</td><td></td></tr><tr><td>material</td><td>VcMaterial|string|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> 指定 rectangle 材质。</td><td></td></tr><tr><td>outline</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> 指定 rectangle 是否绘制轮廓线。</td><td></td></tr><tr><td>outlineColor</td><td>VcColor|string|Array</td><td><code>&#39;black&#39;</code></td><td><code>optional</code> 指定 rectangle 轮廓线颜色。</td><td></td></tr><tr><td>outlineWidth</td><td>number</td><td><code>1.0</code></td><td><code>optional</code> 指定 rectangle 轮廓线宽度。</td><td></td></tr><tr><td>shadows</td><td>number</td><td><code>0</code></td><td><code>optional</code> 指定 rectangle 是否投射或接收阴影。 <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>distanceDisplayCondition</td><td>VcDistanceDisplayCondition|Array</td><td></td><td><code>optional</code> 指定 rectangle 随相机距离改变是否显示参数。</td><td></td></tr><tr><td>classificationType</td><td>number</td><td><code>2</code></td><td><code>optional</code> 指定 rectangle 贴对象模式 。 <strong>TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2</strong></td><td>0/1/2</td></tr><tr><td>zIndex</td><td>number</td><td><code>0</code></td><td><code>optional</code> 指定 rectangle 顺序，没设置高度和拉伸高度时有效。</td><td></td></tr></tbody></table>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>definitionChanged</td><td></td><td>每当更改或修改属性或子属性时触发该事件。</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("官方文档： ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("RectangleGraphics");

function vc_graphics_rectanglevue_type_template_id_2b94d886_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcgraphicsrectangle",
    tabindex: "-1",
    content: "VcGraphicsRectangle",
    href: "#vcgraphicsrectangle",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcgraphicsrectangle"
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
    href: "https://cesium.com/docs/cesiumjs-ref-doc/RectangleGraphics.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-rectangle.md?vue&type=template&id=2b94d886

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_xtlouzbwsjm2tieu75n2ogelwy/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-rectangle.md?vue&type=script&lang=ts

/* harmony default export */ var vc_graphics_rectanglevue_type_script_lang_ts = ({
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
        const _component_vc_graphics_rectangle = _resolveComponent("vc-graphics-rectangle");

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
              description: "Hello VueCesium",
              onClick: _ctx.onEntityEvt,
              onMouseover: _ctx.onEntityEvt,
              onMouseout: _ctx.onEntityEvt
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_rectangle, {
                ref: "rectangle1",
                coordinates: {
                  west: -180,
                  south: -90,
                  east: 180,
                  north: 90
                },
                material: [255, 0, 0, 125]
              }, null, 512)]),
              _: 1
            }, 8, ["onClick", "onMouseover", "onMouseout"]), _createVNode(_component_vc_entity, {
              description: "Hello VueCesium",
              onClick: _ctx.onEntityEvt,
              onMouseover: _ctx.onEntityEvt,
              onMouseout: _ctx.onEntityEvt
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_rectangle, {
                coordinates: [-110, 30, -100, 40],
                material: [0, 255, 0, 125],
                rotation: 45 / 180,
                extrudedHeight: 300000.0,
                height: 100000.0,
                outline: true,
                outlineColor: "black",
                ref: "rectangle2"
              }, null, 8, ["extrudedHeight", "height"])]),
              _: 1
            }, 8, ["onClick", "onMouseover", "onMouseout"]), _createVNode(_component_vc_entity, {
              description: "Hello VueCesium",
              onClick: _ctx.onEntityEvt,
              onMouseover: _ctx.onEntityEvt,
              onMouseout: _ctx.onEntityEvt
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_rectangle, {
                coordinates: {
                  west: -92.0,
                  south: 30.0,
                  east: -82.0,
                  north: 40.0
                },
                material: "https://zouyaoji.top/vue-cesium/favicon.png",
                rotation: _ctx.getRotationValue,
                stRotation: _ctx.getRotationValue,
                classificationType: 0,
                ref: "rectangle3"
              }, null, 8, ["coordinates", "rotation", "stRotation"])]),
              _: 1
            }, 8, ["onClick", "onMouseover", "onMouseout"])]),
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
          const rectangle1 = ref(null);
          const rectangle2 = ref(null);
          const rectangle3 = ref(null);
          const rotation = ref(0); // methods

          const onEntityEvt = e => {
            console.log(e);
          };

          const onViewerReady = cesiumInstance => {
            console.log('viewer ready');
          };

          const getRotationValue = () => {
            rotation.value += 0.005;
            return rotation.value;
          }; // life cycle


          onMounted(() => {
            Promise.all([rectangle1.value.creatingPromise, rectangle2.value.creatingPromise, rectangle3.value.creatingPromise]).then(instances => {
              instances[0].viewer.zoomTo(instances[0].viewer.entities);
              window.viewer = instances[0].viewer;
            });
          });
          return {
            onEntityEvt,
            rectangle1,
            rectangle2,
            rectangle3,
            onViewerReady,
            getRotationValue
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
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-rectangle.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-rectangle.md



vc_graphics_rectanglevue_type_script_lang_ts.render = vc_graphics_rectanglevue_type_template_id_2b94d886_render

/* harmony default export */ var vc_graphics_rectangle = __webpack_exports__["default"] = (vc_graphics_rectanglevue_type_script_lang_ts);

/***/ })

}]);