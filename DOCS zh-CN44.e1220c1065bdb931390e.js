(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[138],{

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-polygon.md?vue&type=template&id=18c8ead6

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcGraphicsPolygon ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载面实体，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.PolygonGraphics"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例。")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 需要作为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的子组件才能正常加载。")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "面实体组件的基础用法。", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-graphics-polygon"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加面实体对象。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-polygon ref=\"polygon1\" :hierarchy=\"[[-115,37],[-115,32],[-107,33],[-102,31],[-102,35]]\" material=\"red\"></vc-graphics-polygon>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-polygon\n        :hierarchy=\"[{ lng: -108.0, lat: 42.0 }, { lng: -100.0, lat: 42.0 }, { lng: -104.0, lat: 40.0 }]\"\n        material=\"green\"\n        :extrudedHeight=\"500000.0\"\n        :closeTop=\"false\"\n        :closeBottom=\"false\"\n        ref=\"polygon2\"\n      ></vc-graphics-polygon>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-polygon\n        :hierarchy=\"[[-108,25,100000],[-100,25,100000],[-100,30,100000],[-108,30,100000]]\"\n        :material=\"[255,165,0,125]\"\n        :extrudedHeight=\"0\"\n        :perPositionHeight=\"true\"\n        :outline=\"true\"\n        outlineColor=\"black\"\n        ref=\"polygon3\"\n      ></vc-graphics-polygon>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-polygon :hierarchy=\"hierarchy4\" :material=\"[0,0,255,125]\" :height=\"0\" :outline=\"true\" ref=\"polygon4\"></vc-graphics-polygon>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-polygon\n        :hierarchy=\"[-90.0, 41.0, 0.0, -85.0, 41.0, 500000.0, -80.0, 41.0, 0.0]\"\n        :material=\"[0,255,255,125]\"\n        :perPositionHeight=\"true\"\n        :outline=\"true\"\n        outlineColor=\"black\"\n        ref=\"polygon5\"\n      ></vc-graphics-polygon>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-polygon\n        :hierarchy=\"[[-120,45],[-80,45],[-80,55],[-120,55]]\"\n        material=\"purple\"\n        :extrudedHeight=\"50000\"\n        :outline=\"true\"\n        outlineColor=\"magenta\"\n        ref=\"polygon6\"\n      ></vc-graphics-polygon>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const polygon1 = ref(null)\n      const polygon2 = ref(null)\n      const polygon3 = ref(null)\n      const polygon4 = ref(null)\n      const polygon5 = ref(null)\n      const polygon6 = ref(null)\n      const hierarchy4 = {\n        positions: [\n          { lng: -99.0, lat: 30.0 },\n          { lng: -85.0, lat: 30.0 },\n          { lng: -85.0, lat: 40.0 },\n          { lng: -99.0, lat: 40.0 }\n        ],\n        holes: [\n          {\n            positions: [\n              { lng: -97.0, lat: 31.0 },\n              { lng: -97.0, lat: 39.0 },\n              { lng: -87.0, lat: 39.0 },\n              { lng: -87.0, lat: 31.0 }\n            ],\n            holes: [\n              {\n                positions: [\n                  { lng: -95.0, lat: 33.0 },\n                  { lng: -89.0, lat: 33.0 },\n                  { lng: -89.0, lat: 37.0 },\n                  { lng: -95.0, lat: 37.0 }\n                ],\n                holes: [\n                  {\n                    positions: [\n                      { lng: -93.0, lat: 34.0 },\n                      { lng: -91.0, lat: 34.0 },\n                      { lng: -91.0, lat: 36.0 },\n                      { lng: -93.0, lat: 36.0 }\n                    ]\n                  }\n                ]\n              }\n            ]\n          }\n        ]\n      }\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n      // life cycle\n      onMounted(() => {\n        Promise.all([\n          polygon1.value.creatingPromise,\n          polygon1.value.creatingPromise,\n          polygon1.value.creatingPromise,\n          polygon4.value.creatingPromise,\n          polygon5.value.creatingPromise,\n          polygon6.value.creatingPromise\n        ]).then(instances => {\n          instances[0].viewer.zoomTo(instances[0].viewer.entities)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        polygon1,\n        polygon2,\n        polygon3,\n        polygon4,\n        polygon5,\n        polygon6,\n        onViewerReady,\n        hierarchy4\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 polygon 是否显示。</td><td></td></tr><tr><td>hierarchy</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 polygon 的 PolygonHierarchy 属性。</td><td></td></tr><tr><td>height</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 polygon 的高度。</td><td></td></tr><tr><td>heightReference</td><td>Number</td><td></td><td><code>optional</code> 指定 polygon 高度模式。 <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>extrudedHeight</td><td>Number</td><td></td><td><code>optional</code> 指定 polygon 拉伸高度。</td><td></td></tr><tr><td>extrudedHeightReference</td><td>Number</td><td></td><td><code>optional</code> 指定 polygon 拉伸的高度模式。 <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>stRotation</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> 指定 polygon 纹理按正北方向逆时针旋转角度。</td><td></td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> 指定每个经纬度之间的采样粒度。</td><td></td></tr><tr><td>fill</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 polygon 是否填充材质。</td><td></td></tr><tr><td>material</td><td>Object|String|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> 指定 polygon 材质。</td><td></td></tr><tr><td>outline</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定 polygon 是否绘制轮廓线。</td><td></td></tr><tr><td>outlineColor</td><td>Object|String|Array</td><td><code>&#39;black&#39;</code></td><td><code>optional</code> 指定 polygon 轮廓线颜色。</td><td></td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定 polygon 轮廓线宽度。</td><td></td></tr><tr><td>perPositionHeight</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定 polygon 是否使用每个位置的高度。</td><td></td></tr><tr><td>closeTop</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 polygon 拉伸出来的顶部是否闭合。</td><td></td></tr><tr><td>closeBottom</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 polygon 拉伸出来的底部是否闭合。</td><td></td></tr><tr><td>arcType</td><td>Number</td><td><code>1</code></td><td><code>optional</code> 指定 polygon 线条类型。 <strong>NONE: 0, GEODESIC: 1, RHUMB: 2</strong></td><td>0/1/2</td></tr><tr><td>shadows</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 polygon 是否投射或接收阴影。 <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 polygon 随相机距离改变是否显示参数。</td><td></td></tr><tr><td>classificationType</td><td>Number</td><td><code>2</code></td><td><code>optional</code> 指定 polygon 贴对象模式。 <strong>TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2</strong></td><td>0/1/2</td></tr><tr><td>zIndex</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 polygon 顺序，没有高度和拉伸高度时有效。</td><td></td></tr></tbody></table>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>definitionChanged</td><td></td><td>每当更改或修改属性或子属性时触发该事件。</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("官方文档： ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("PolygonGraphics");

function vc_graphics_polygonvue_type_template_id_18c8ead6_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcgraphicspolygon",
    tabindex: "-1",
    content: "VcGraphicsPolygon",
    href: "#vcgraphicspolygon",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcgraphicspolygon"
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
    href: "https://cesium.com/docs/cesiumjs-ref-doc/PolygonGraphics.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-polygon.md?vue&type=template&id=18c8ead6

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-polygon.md?vue&type=script&lang=ts

/* harmony default export */ var vc_graphics_polygonvue_type_script_lang_ts = ({
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
        const _component_vc_graphics_polygon = _resolveComponent("vc-graphics-polygon");

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
              description: "Hello Vue Cesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polygon, {
                ref: "polygon1",
                hierarchy: [[-115, 37], [-115, 32], [-107, 33], [-102, 31], [-102, 35]],
                material: "red"
              }, null, 512)]),
              _: 1
            }), _createVNode(_component_vc_entity, {
              description: "Hello Vue Cesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polygon, {
                hierarchy: [{
                  lng: -108.0,
                  lat: 42.0
                }, {
                  lng: -100.0,
                  lat: 42.0
                }, {
                  lng: -104.0,
                  lat: 40.0
                }],
                material: "green",
                extrudedHeight: 500000.0,
                closeTop: false,
                closeBottom: false,
                ref: "polygon2"
              }, null, 8, ["hierarchy", "extrudedHeight"])]),
              _: 1
            }), _createVNode(_component_vc_entity, {
              description: "Hello Vue Cesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polygon, {
                hierarchy: [[-108, 25, 100000], [-100, 25, 100000], [-100, 30, 100000], [-108, 30, 100000]],
                material: [255, 165, 0, 125],
                extrudedHeight: 0,
                perPositionHeight: true,
                outline: true,
                outlineColor: "black",
                ref: "polygon3"
              }, null, 512)]),
              _: 1
            }), _createVNode(_component_vc_entity, {
              description: "Hello Vue Cesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polygon, {
                hierarchy: _ctx.hierarchy4,
                material: [0, 0, 255, 125],
                height: 0,
                outline: true,
                ref: "polygon4"
              }, null, 8, ["hierarchy"])]),
              _: 1
            }), _createVNode(_component_vc_entity, {
              description: "Hello Vue Cesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polygon, {
                hierarchy: [-90.0, 41.0, 0.0, -85.0, 41.0, 500000.0, -80.0, 41.0, 0.0],
                material: [0, 255, 255, 125],
                perPositionHeight: true,
                outline: true,
                outlineColor: "black",
                ref: "polygon5"
              }, null, 8, ["hierarchy"])]),
              _: 1
            }), _createVNode(_component_vc_entity, {
              description: "Hello Vue Cesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polygon, {
                hierarchy: [[-120, 45], [-80, 45], [-80, 55], [-120, 55]],
                material: "purple",
                extrudedHeight: 50000,
                outline: true,
                outlineColor: "magenta",
                ref: "polygon6"
              }, null, 512)]),
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
          const polygon1 = ref(null);
          const polygon2 = ref(null);
          const polygon3 = ref(null);
          const polygon4 = ref(null);
          const polygon5 = ref(null);
          const polygon6 = ref(null);
          const hierarchy4 = {
            positions: [{
              lng: -99.0,
              lat: 30.0
            }, {
              lng: -85.0,
              lat: 30.0
            }, {
              lng: -85.0,
              lat: 40.0
            }, {
              lng: -99.0,
              lat: 40.0
            }],
            holes: [{
              positions: [{
                lng: -97.0,
                lat: 31.0
              }, {
                lng: -97.0,
                lat: 39.0
              }, {
                lng: -87.0,
                lat: 39.0
              }, {
                lng: -87.0,
                lat: 31.0
              }],
              holes: [{
                positions: [{
                  lng: -95.0,
                  lat: 33.0
                }, {
                  lng: -89.0,
                  lat: 33.0
                }, {
                  lng: -89.0,
                  lat: 37.0
                }, {
                  lng: -95.0,
                  lat: 37.0
                }],
                holes: [{
                  positions: [{
                    lng: -93.0,
                    lat: 34.0
                  }, {
                    lng: -91.0,
                    lat: 34.0
                  }, {
                    lng: -91.0,
                    lat: 36.0
                  }, {
                    lng: -93.0,
                    lat: 36.0
                  }]
                }]
              }]
            }]
          }; // methods

          const onEntityEvt = e => {
            console.log(e);
          };

          const onViewerReady = cesiumInstance => {
            console.log('viewer ready');
          }; // life cycle


          onMounted(() => {
            Promise.all([polygon1.value.creatingPromise, polygon1.value.creatingPromise, polygon1.value.creatingPromise, polygon4.value.creatingPromise, polygon5.value.creatingPromise, polygon6.value.creatingPromise]).then(instances => {
              instances[0].viewer.zoomTo(instances[0].viewer.entities);
            });
          });
          return {
            onEntityEvt,
            polygon1,
            polygon2,
            polygon3,
            polygon4,
            polygon5,
            polygon6,
            onViewerReady,
            hierarchy4
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
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-polygon.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-polygon.md



vc_graphics_polygonvue_type_script_lang_ts.render = vc_graphics_polygonvue_type_template_id_18c8ead6_render

/* harmony default export */ var vc_graphics_polygon = __webpack_exports__["default"] = (vc_graphics_polygonvue_type_script_lang_ts);

/***/ })

}]);