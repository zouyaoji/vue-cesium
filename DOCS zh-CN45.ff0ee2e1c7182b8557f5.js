(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[146],{

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-polyline-volume.md?vue&type=template&id=fce89a16

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcGraphicsPolylineVolume ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载线柱体，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.PolylineVolumeGraphics"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例。")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 需要作为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的子组件才能正常加载。")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "线柱体组件的基础用法。", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-graphics-polyline-volume"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加线柱体对象。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity>\n      <vc-graphics-polyline-volume\n        ref=\"polylineVolume1\"\n        :positions=\"[[-85,32],[-85,36],[-89,36]]\"\n        :shape=\"shape1\"\n        material=\"red\"\n      ></vc-graphics-polyline-volume>\n    </vc-entity>\n    <vc-entity>\n      <vc-graphics-polyline-volume\n        :positions=\"[-90,32,0,-90,36,100000,-94,36,0]\"\n        :shape=\"[{ x: -50000, y: -50000 }, { x: 50000, y: -50000 }, { x: -50000, y: 50000 }, { x: -50000, y: 50000 }]\"\n        :material=\"[0,255,0,125]\"\n        :outline=\"true\"\n        outlineColor=\"black\"\n        :cornerType=\"2\"\n        ref=\"polylineVolume2\"\n      ></vc-graphics-polyline-volume>\n    </vc-entity>\n    <vc-entity>\n      <vc-graphics-polyline-volume\n        :positions=\"[{ lng: -95.0, lat: 32.0, height: 0.0 }, { lng: -95.0, lat: 36.0, height: 100000.0 }, { lng: -99.0, lat: 36.0, height: 200000.0 }]\"\n        :shape=\"shape3\"\n        material=\"blue\"\n        :cornerType=\"0\"\n        ref=\"polylineVolume3\"\n      ></vc-graphics-polyline-volume>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const polylineVolume1 = ref(null)\n      const polylineVolume2 = ref(null)\n      const polylineVolume3 = ref(null)\n      const shape1 = ref(null)\n      const shape3 = ref(null)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n        shape1.value = computeCircle(60000)\n        shape3.value = computeStar(7, 70000, 50000)\n      }\n      const computeCircle = radius => {\n        let positions = []\n        for (let i = 0; i < 360; i++) {\n          let radians = Cesium.Math.toRadians(i)\n          positions.push({ x: radius * Math.cos(radians), y: radius * Math.sin(radians) })\n        }\n        return positions\n      }\n      const computeStar = (arms, rOuter, rInner) => {\n        let angle = Math.PI / arms\n        let length = 2 * arms\n        let positions = new Array(length)\n        for (let i = 0; i < length; i++) {\n          let r = i % 2 === 0 ? rOuter : rInner\n          positions[i] = { x: Math.cos(i * angle) * r, y: Math.sin(i * angle) * r }\n        }\n        return positions\n      }\n      // life cycle\n      onMounted(() => {\n        Promise.all([polylineVolume1.value.creatingPromise, polylineVolume2.value.creatingPromise, polylineVolume3.value.creatingPromise]).then(\n          instances => {\n            instances[0].viewer.zoomTo(instances[0].viewer.entities)\n          }\n        )\n      })\n\n      return {\n        onEntityEvt,\n        polylineVolume1,\n        polylineVolume2,\n        polylineVolume3,\n        onViewerReady,\n        shape1,\n        shape3\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定 volume 是否显示。</td><td></td></tr><tr><td>positions</td><td>Array</td><td></td><td><code>optional</code> 指定 volume 位置信息数组。</td><td></td></tr><tr><td>shape</td><td>Array</td><td></td><td><code>optional</code> 指定表达 volume 拉伸的形状参数。</td><td></td></tr><tr><td>cornerType</td><td>number</td><td><code>0</code></td><td><code>optional</code> 指定 volume 转角类型。 <strong>ROUNDED: 0, MITERED: 1, BEVELED: 2</strong></td><td>0/1/2</td></tr><tr><td>granularity</td><td>number</td><td></td><td><code>optional</code> 指定每个经度和纬度之间的角距离。</td><td></td></tr><tr><td>fill</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定 volume 是否填充材质。</td><td></td></tr><tr><td>material</td><td>VcMaterial|string|Array</td><td></td><td><code>optional</code> 指定 volume 材质。</td><td></td></tr><tr><td>outline</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> 指定 volume 是否绘制轮廓线。</td><td></td></tr><tr><td>outlineColor</td><td>VcColor|string|Array</td><td></td><td><code>optional</code> 指定 volume 轮廓线颜色。</td><td></td></tr><tr><td>outlineWidth</td><td>number</td><td><code>1.0</code></td><td><code>optional</code> 指定 volume 轮廓线宽度。</td><td></td></tr><tr><td>shadows</td><td>number</td><td><code>0</code></td><td><code>optional</code> 指定 volume 是否投射或接受每个光源的阴影。<strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>distanceDisplayCondition</td><td>VcDistanceDisplayCondition|Array</td><td></td><td><code>optional</code> 指定 volume 随相机距离改变是否显示参数。</td><td></td></tr></tbody></table>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>definitionChanged</td><td></td><td>每当更改或修改属性或子属性时触发该事件。</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("官方文档： ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("PolylineVolumeGraphics");

function vc_graphics_polyline_volumevue_type_template_id_fce89a16_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcgraphicspolylinevolume",
    tabindex: "-1",
    content: "VcGraphicsPolylineVolume",
    href: "#vcgraphicspolylinevolume",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcgraphicspolylinevolume"
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
    href: "https://cesium.com/docs/cesiumjs-ref-doc/PolylineVolumeGraphics.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-polyline-volume.md?vue&type=template&id=fce89a16

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-polyline-volume.md?vue&type=script&lang=ts

/* harmony default export */ var vc_graphics_polyline_volumevue_type_script_lang_ts = ({
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
        const _component_vc_graphics_polyline_volume = _resolveComponent("vc-graphics-polyline-volume");

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
            default: _withCtx(() => [_createVNode(_component_vc_entity, null, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polyline_volume, {
                ref: "polylineVolume1",
                positions: [[-85, 32], [-85, 36], [-89, 36]],
                shape: _ctx.shape1,
                material: "red"
              }, null, 8, ["shape"])]),
              _: 1
            }), _createVNode(_component_vc_entity, null, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polyline_volume, {
                positions: [-90, 32, 0, -90, 36, 100000, -94, 36, 0],
                shape: [{
                  x: -50000,
                  y: -50000
                }, {
                  x: 50000,
                  y: -50000
                }, {
                  x: -50000,
                  y: 50000
                }, {
                  x: -50000,
                  y: 50000
                }],
                material: [0, 255, 0, 125],
                outline: true,
                outlineColor: "black",
                cornerType: 2,
                ref: "polylineVolume2"
              }, null, 512)]),
              _: 1
            }), _createVNode(_component_vc_entity, null, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_polyline_volume, {
                positions: [{
                  lng: -95.0,
                  lat: 32.0,
                  height: 0.0
                }, {
                  lng: -95.0,
                  lat: 36.0,
                  height: 100000.0
                }, {
                  lng: -99.0,
                  lat: 36.0,
                  height: 200000.0
                }],
                shape: _ctx.shape3,
                material: "blue",
                cornerType: 0,
                ref: "polylineVolume3"
              }, null, 8, ["positions", "shape"])]),
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
          const polylineVolume1 = ref(null);
          const polylineVolume2 = ref(null);
          const polylineVolume3 = ref(null);
          const shape1 = ref(null);
          const shape3 = ref(null); // methods

          const onEntityEvt = e => {
            console.log(e);
          };

          const onViewerReady = cesiumInstance => {
            console.log('viewer ready');
            shape1.value = computeCircle(60000);
            shape3.value = computeStar(7, 70000, 50000);
          };

          const computeCircle = radius => {
            let positions = [];

            for (let i = 0; i < 360; i++) {
              let radians = Cesium.Math.toRadians(i);
              positions.push({
                x: radius * Math.cos(radians),
                y: radius * Math.sin(radians)
              });
            }

            return positions;
          };

          const computeStar = (arms, rOuter, rInner) => {
            let angle = Math.PI / arms;
            let length = 2 * arms;
            let positions = new Array(length);

            for (let i = 0; i < length; i++) {
              let r = i % 2 === 0 ? rOuter : rInner;
              positions[i] = {
                x: Math.cos(i * angle) * r,
                y: Math.sin(i * angle) * r
              };
            }

            return positions;
          }; // life cycle


          onMounted(() => {
            Promise.all([polylineVolume1.value.creatingPromise, polylineVolume2.value.creatingPromise, polylineVolume3.value.creatingPromise]).then(instances => {
              instances[0].viewer.zoomTo(instances[0].viewer.entities);
            });
          });
          return {
            onEntityEvt,
            polylineVolume1,
            polylineVolume2,
            polylineVolume3,
            onViewerReady,
            shape1,
            shape3
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
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-polyline-volume.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-polyline-volume.md



vc_graphics_polyline_volumevue_type_script_lang_ts.render = vc_graphics_polyline_volumevue_type_template_id_fce89a16_render

/* harmony default export */ var vc_graphics_polyline_volume = __webpack_exports__["default"] = (vc_graphics_polyline_volumevue_type_script_lang_ts);

/***/ })

}]);