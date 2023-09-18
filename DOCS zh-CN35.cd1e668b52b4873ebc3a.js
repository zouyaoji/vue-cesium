(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[135],{

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-corridor.md?vue&type=template&id=1fbbc64a

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcGraphicsCorridor ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载走廊实体，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.CorridorGraphics"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例。")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 需要作为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的子组件才能正常加载。")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "走廊实体组件的基础用法。", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-graphics-corridor"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加走廊实体。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity\n      ref=\"entity1\"\n      :name=\"options.name1\"\n      :description=\"options.description\"\n      @click=\"onEntityEvt\"\n      @mouseover=\"onEntityEvt\"\n      @mouseout=\"onEntityEvt\"\n    >\n      <vc-graphics-corridor :positions=\"options.positions1\" :material=\"options.material1\" :width=\"200000.0\"></vc-graphics-corridor>\n    </vc-entity>\n    <vc-entity ref=\"entity2\" :name=\"options.name2\" :description=\"options.description\">\n      <vc-graphics-corridor\n        :positions=\"options.positions2\"\n        :height=\"100000.0\"\n        :width=\"200000.0\"\n        :corner-type=\"0\"\n        material=\"GREEN\"\n        :outline=\"true\"\n      ></vc-graphics-corridor>\n    </vc-entity>\n    <vc-entity ref=\"entity3\" :name=\"options.name3\" :description=\"options.description\">\n      <vc-graphics-corridor\n        :positions=\"options.positions3\"\n        :material=\"options.material3\"\n        outline-color=\"WHITE\"\n        :outline=\"true\"\n        :height=\"200000.0\"\n        :extruded-height=\"100000.0\"\n        :width=\"200000.0\"\n        :corner-type=\"options.cornerType3\"\n      ></vc-graphics-corridor>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted, reactive } from 'vue'\n  export default {\n    setup() {\n      // state\n      const options = reactive({\n        description: 'Hello VueCesium',\n\n        corridor1: {},\n        name1: 'Red corridor on surface with rounded corners',\n        positions1: [\n          { lng: 100.0, lat: 40.0 },\n          { lng: 105.0, lat: 40.0 },\n          { lng: 105.0, lat: 35.0 }\n        ],\n        material1: {},\n\n        corridor2: {},\n        name2: 'Green corridor at height with mitered corners and outline',\n        positions2: [\n          { lng: 90.0, lat: 40.0 },\n          { lng: 95.0, lat: 40.0 },\n          { lng: 95.0, lat: 35.0 }\n        ],\n        cornerType2: 0,\n\n        corridor3: {},\n        name3: 'Blue extruded corridor with beveled corners and outline',\n        positions3: [\n          { lng: 80.0, lat: 40.0 },\n          { lng: 85.0, lat: 40.0 },\n          { lng: 85.0, lat: 35.0 }\n        ],\n        cornerType3: 0,\n        material3: {}\n      })\n      const entity1 = ref(null)\n      const entity2 = ref(null)\n      const entity3 = ref(null)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        const { Cesium, viewer } = cesiumInstance\n        options.material1 = Cesium.Color.RED.withAlpha(0.5)\n\n        options.cornerType2 = Cesium.CornerType.MITERED\n\n        options.cornerType3 = Cesium.CornerType.BEVELED\n        options.material3 = Cesium.Color.BLUE.withAlpha(0.5)\n      }\n      // life cycle\n      onMounted(() => {\n        Promise.all([entity1.value.creatingPromise, entity2.value.creatingPromise, entity3.value.creatingPromise]).then(instances => {\n          instances[0].viewer.zoomTo(instances[0].viewer.entities)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        entity1,\n        entity2,\n        entity3,\n        options,\n        onViewerReady\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定 corridor 是否显示。</td><td></td></tr><tr><td>positions</td><td>VcCartesian3Array</td><td></td><td><code>optional</code> 指定描述 corridor 位置的经纬度(高度)数组。</td><td></td></tr><tr><td>width</td><td>number | Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;number&gt;</td><td></td><td><code>optional</code> 指定 corridor 边之间的距离。</td><td></td></tr><tr><td>height</td><td>number | Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;number&gt;</td><td></td><td><code>optional</code> 指定 corridor 高度。</td><td></td></tr><tr><td>heightReference</td><td>number | Cesium.HeightReference | Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;number&gt;</td><td></td><td><code>optional</code> 指定 corridor 高度模式。<strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>extrudedHeight</td><td>number</td><td></td><td><code>optional</code> 指定 corridor 拉伸高度。</td><td></td></tr><tr><td>extrudedHeightReference</td><td>number</td><td></td><td><code>optional</code> 指定 corridor 拉伸高度模式。 <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>cornerType</td><td>number | Cesium.CornerType | Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;number&gt;</td><td><code>0</code></td><td><code>optional</code> 指定 corridor 转角样式。</td><td></td></tr><tr><td>granularity</td><td>number</td><td></td><td><code>optional</code> 指定每个经纬度之间的采样粒度。</td><td></td></tr><tr><td>fill</td><td>boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;boolean&gt;</td><td><code>true</code></td><td><code>optional</code> 指定 corridor 是否填充材质。</td><td></td></tr><tr><td>material</td><td>VcMaterial</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> 指定 corridor 的材质。</td><td></td></tr><tr><td>outline</td><td>boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;boolean&gt;</td><td><code>false</code></td><td><code>optional</code> 指定 corridor 是否绘制轮廓线。</td><td></td></tr><tr><td>outlineColor</td><td>VcColor</td><td><code>&#39;black&#39;</code></td><td><code>optional</code> 指定 corridor 轮廓线颜色。</td><td></td></tr><tr><td>outlineWidth</td><td>number | Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;number&gt;</td><td><code>1.0</code></td><td><code>optional</code> 指定 corridor 轮廓线宽度。</td><td></td></tr><tr><td>shadows</td><td>number | Cesium.ShadowMode | VcCallbackPropertyFunction&lt;number&gt;</td><td><code>0</code></td><td><code>optional</code> 指定 corridor 是否接收或者发射每个点光源的阴影。 <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>distanceDisplayCondition</td><td>VcDistanceDisplayCondition</td><td></td><td><code>optional</code> 指定 corridor 随相机距离改变是否显示参数。</td><td></td></tr><tr><td>classificationType</td><td>number | Cesium.ClassificationType | VcCallbackPropertyFunction&lt;Cesium.ClassificationType&gt;</td><td><code>2</code></td><td><code>optional</code> 指定 corridor 的贴对象模式。 <strong>TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2</strong></td><td>0/1/2</td></tr><tr><td>zIndex</td><td>number</td><td></td><td><code>optional</code> 指定 corridor 顺序，没有高度和拉伸高度才有效。</td><td></td></tr></tbody></table>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>definitionChanged</td><td></td><td>每当更改或修改属性或子属性时触发该事件。</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("官方文档： ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("CorridorGraphics");

function vc_graphics_corridorvue_type_template_id_1fbbc64a_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcgraphicscorridor",
    tabindex: "-1",
    content: "VcGraphicsCorridor",
    href: "#vcgraphicscorridor",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcgraphicscorridor"
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
    href: "https://cesium.com/docs/cesiumjs-ref-doc/CorridorGraphics.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-corridor.md?vue&type=template&id=1fbbc64a

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-corridor.md?vue&type=script&lang=ts

/* harmony default export */ var vc_graphics_corridorvue_type_script_lang_ts = ({
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
        const _component_vc_graphics_corridor = _resolveComponent("vc-graphics-corridor");

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
              ref: "entity1",
              name: _ctx.options.name1,
              description: _ctx.options.description,
              onClick: _ctx.onEntityEvt,
              onMouseover: _ctx.onEntityEvt,
              onMouseout: _ctx.onEntityEvt
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_corridor, {
                positions: _ctx.options.positions1,
                material: _ctx.options.material1,
                width: 200000.0
              }, null, 8, ["positions", "material", "width"])]),
              _: 1
            }, 8, ["name", "description", "onClick", "onMouseover", "onMouseout"]), _createVNode(_component_vc_entity, {
              ref: "entity2",
              name: _ctx.options.name2,
              description: _ctx.options.description
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_corridor, {
                positions: _ctx.options.positions2,
                height: 100000.0,
                width: 200000.0,
                "corner-type": 0,
                material: "GREEN",
                outline: true
              }, null, 8, ["positions", "height", "width"])]),
              _: 1
            }, 8, ["name", "description"]), _createVNode(_component_vc_entity, {
              ref: "entity3",
              name: _ctx.options.name3,
              description: _ctx.options.description
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_corridor, {
                positions: _ctx.options.positions3,
                material: _ctx.options.material3,
                "outline-color": "WHITE",
                outline: true,
                height: 200000.0,
                "extruded-height": 100000.0,
                width: 200000.0,
                "corner-type": _ctx.options.cornerType3
              }, null, 8, ["positions", "material", "height", "extruded-height", "width", "corner-type"])]),
              _: 1
            }, 8, ["name", "description"])]),
            _: 1
          }, 8, ["onReady"])]),
          _: 1
        }, 512)]);
      }

      const {
        ref,
        getCurrentInstance,
        onMounted,
        reactive
      } = vue_esm_browser;
      const democomponentExport = {
        setup() {
          // state
          const options = reactive({
            description: 'Hello VueCesium',
            corridor1: {},
            name1: 'Red corridor on surface with rounded corners',
            positions1: [{
              lng: 100.0,
              lat: 40.0
            }, {
              lng: 105.0,
              lat: 40.0
            }, {
              lng: 105.0,
              lat: 35.0
            }],
            material1: {},
            corridor2: {},
            name2: 'Green corridor at height with mitered corners and outline',
            positions2: [{
              lng: 90.0,
              lat: 40.0
            }, {
              lng: 95.0,
              lat: 40.0
            }, {
              lng: 95.0,
              lat: 35.0
            }],
            cornerType2: 0,
            corridor3: {},
            name3: 'Blue extruded corridor with beveled corners and outline',
            positions3: [{
              lng: 80.0,
              lat: 40.0
            }, {
              lng: 85.0,
              lat: 40.0
            }, {
              lng: 85.0,
              lat: 35.0
            }],
            cornerType3: 0,
            material3: {}
          });
          const entity1 = ref(null);
          const entity2 = ref(null);
          const entity3 = ref(null); // methods

          const onEntityEvt = e => {
            console.log(e);
          };

          const onViewerReady = cesiumInstance => {
            const {
              Cesium,
              viewer
            } = cesiumInstance;
            options.material1 = Cesium.Color.RED.withAlpha(0.5);
            options.cornerType2 = Cesium.CornerType.MITERED;
            options.cornerType3 = Cesium.CornerType.BEVELED;
            options.material3 = Cesium.Color.BLUE.withAlpha(0.5);
          }; // life cycle


          onMounted(() => {
            Promise.all([entity1.value.creatingPromise, entity2.value.creatingPromise, entity3.value.creatingPromise]).then(instances => {
              instances[0].viewer.zoomTo(instances[0].viewer.entities);
            });
          });
          return {
            onEntityEvt,
            entity1,
            entity2,
            entity3,
            options,
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
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-corridor.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-corridor.md



vc_graphics_corridorvue_type_script_lang_ts.render = vc_graphics_corridorvue_type_template_id_1fbbc64a_render

/* harmony default export */ var vc_graphics_corridor = __webpack_exports__["default"] = (vc_graphics_corridorvue_type_script_lang_ts);

/***/ })

}]);