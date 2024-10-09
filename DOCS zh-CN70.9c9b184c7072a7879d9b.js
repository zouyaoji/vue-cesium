(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[175],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/registry.npmjs.org+vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmjs.org+babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/registry.npmjs.org+vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/registry.npmjs.org+vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-collection-polyline.md?vue&type=template&id=f985a00a

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};
const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载线图元集合，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.PolylineCollection"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例。渲染海量线图元时建议用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "polylines"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 属性表达。")], -1);
const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "线图元集合组件的基础用法。", -1);
const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-polyline"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加线图元集合。")])], -1);
const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-collection-polyline @click=\"onClicked\" ref=\"collectionRef\" :polylines=\"polylines\">\n      <vc-polyline\n        :positions=\"[[90, 20, 10000], [120, 20, 10000]]\"\n        :material=\"{\n          fabric: {\n            type: 'Color',\n            uniforms: {\n              color: 'red'\n            }\n          }\n        }\"\n        :width=\"5\"\n      ></vc-polyline>\n      <vc-polyline\n        :positions=\"[[90, 30, 10000], [120, 30, 10000]]\"\n        :material=\"{\n          fabric: {\n            type: 'PolylineGlow',\n            uniforms: {\n              color: 'blue'\n            }\n          }\n        }\"\n        :width=\"10\"\n      ></vc-polyline>\n      <vc-polyline\n        :positions=\"[[90, 40, 10000], [120, 40, 10000]]\"\n        :material=\"{\n          fabric: {\n            type: 'PolylineArrow',\n            uniforms: {\n              color: 'purple'\n            }\n          }\n        }\"\n        :width=\"10\"\n      ></vc-polyline>\n    </vc-collection-polyline>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const collectionRef = ref(null)\n      const polylines = ref([])\n      const instance = getCurrentInstance()\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        collectionRef.value.unload()\n      }\n      const reload = () => {\n        collectionRef.value.reload()\n      }\n      const load = () => {\n        collectionRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        for (var i = 0; i < 500; i++) {\n          let polyline = {}\n          let positions = []\n          positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })\n          positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })\n          polyline.positions = positions\n          polyline.material = '#' + Math.random().toString(16).substr(2, 6).toUpperCase()\n          polylines.value.push(polyline)\n        }\n      }\n\n      return {\n        unload,\n        reload,\n        load,\n        onClicked,\n        onViewerReady,\n        collectionRef,\n        polylines\n      }\n    }\n  }\n</script>\n")], -1);
const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>modelMatrix</td><td>Cesium.Matrix4</td><td></td><td><code>optional</code> 指定 4x4 变换矩阵，将每个点从模型转换为世界坐标。</td></tr><tr><td>debugShowBoundingVolume</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否显示此图元的 BoundingVolume， 仅调试使用。</td></tr><tr><td>enableMouseEvent</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定鼠标事件是否生效。</td></tr><tr><td>polylines</td><td>Array</td><td><code>[]</code></td><td><code>optional</code> 指定点集合数组。 数组对象结构与 <code>vc-polyline</code> 组件属性相同。</td></tr></tbody></table>", 1);
const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上按下时触发。</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上弹起时触发。</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>鼠标单击该图元时触发。</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>鼠标单击该图元外部时触发。</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>鼠标左键双击该图元时触发。</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上移动时触发。</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>鼠标移动到该图元时触发。</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>鼠标移出该图元时触发。</td></tr></tbody></table>", 1);
const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "插槽名"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "描述"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "子组件")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "用于挂载 vc-polyline 组件。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-polyline")])])], -1);
const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载线图元，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.Polyline"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例。")], -1);
const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 需要作为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-polyline"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的子组件才能正常加载。")], -1);
const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>distanceDisplayCondition</td><td>VcDistanceDisplayCondition|Array</td><td></td><td><code>optional</code> 指定 polyline 显示条件随相机距离改变的参数。</td></tr><tr><td>id</td><td>any</td><td></td><td><code>optional</code> 指定与 polyline 关联的信息，拾取时返回该属性值。</td></tr><tr><td>loop</td><td>boolean</td><td>false</td><td><code>optional</code> 指定 polyline 是否首尾相连。</td></tr><tr><td>material</td><td>VcMaterial|Array|string</td><td></td><td><code>optional</code> 指定 polyline 材质。</td></tr><tr><td>positions</td><td>Array</td><td></td><td><code>optional</code> 指定 polyline 的位置。</td></tr><tr><td>show</td><td>boolean</td><td>true</td><td><code>optional</code> 指定 polyline 是否显示。</td></tr><tr><td>width</td><td>number</td><td>1.0</td><td><code>optional</code> 指定 polyline 宽度。</td></tr><tr><td>enableMouseEvent</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定鼠标事件是否生效。</td></tr></tbody></table>", 1);
const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上按下时触发。</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上弹起时触发。</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>鼠标单击该图元时触发。</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>鼠标单击该图元外部时触发。</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>鼠标左键双击该图元时触发。</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上移动时触发。</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>鼠标移动到该图元时触发。</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>鼠标移出该图元时触发。</td></tr></tbody></table>", 1);
function vc_collection_polylinevue_type_template_id_f985a00a_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");
  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");
  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");
  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");
  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccollectionpolyline",
    tabindex: "-1",
    content: "VcCollectionPolyline",
    href: "#vccollectionpolyline",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcCollectionPolyline "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccollectionpolyline"
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
  }), _hoisted_3, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_4]),
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
  }), _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
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
  }), _hoisted_7, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
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
  }), _hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcpolyline",
    tabindex: "-1",
    content: "VcPolyline",
    href: "#vcpolyline",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcPolyline "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcpolyline"
    })]),
    _: 1
  }), _hoisted_9, _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcpolyline-shu-xing",
    tabindex: "-1",
    content: "VcPolyline 属性",
    href: "#vcpolyline-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcPolyline 属性 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcpolyline-shu-xing"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcpolyline-shi-jian",
    tabindex: "-1",
    content: "VcPolyline 事件",
    href: "#vcpolyline-shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcPolyline 事件 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcpolyline-shi-jian"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
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
    href: "https://cesium.com/docs/cesiumjs-ref-doc/PolylineCollection.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("PolylineCollection")]),
    _: 1
  })]), Object(vue_esm_browser["createTextVNode"])("、"), Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/Polyline.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Polyline")]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-polyline.md?vue&type=template&id=f985a00a

// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmjs.org+babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/registry.npmjs.org+vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-collection-polyline.md?vue&type=script&lang=ts

/* harmony default export */ var vc_collection_polylinevue_type_script_lang_ts = ({
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
        const _component_vc_polyline = _resolveComponent("vc-polyline");
        const _component_vc_collection_polyline = _resolveComponent("vc-collection-polyline");
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
            default: _withCtx(() => [_createVNode(_component_vc_collection_polyline, {
              onClick: _ctx.onClicked,
              ref: "collectionRef",
              polylines: _ctx.polylines
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_polyline, {
                positions: [[90, 20, 10000], [120, 20, 10000]],
                material: {
                  fabric: {
                    type: 'Color',
                    uniforms: {
                      color: 'red'
                    }
                  }
                },
                width: 5
              }), _createVNode(_component_vc_polyline, {
                positions: [[90, 30, 10000], [120, 30, 10000]],
                material: {
                  fabric: {
                    type: 'PolylineGlow',
                    uniforms: {
                      color: 'blue'
                    }
                  }
                },
                width: 10
              }), _createVNode(_component_vc_polyline, {
                positions: [[90, 40, 10000], [120, 40, 10000]],
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
            }, 8, ["onClick", "polylines"])]),
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
          const collectionRef = ref(null);
          const polylines = ref([]);
          const instance = getCurrentInstance();
          // methods
          const onClicked = e => {
            console.log(e);
          };
          const unload = () => {
            collectionRef.value.unload();
          };
          const reload = () => {
            collectionRef.value.reload();
          };
          const load = () => {
            collectionRef.value.load();
          };
          const onViewerReady = ({
            Cesium,
            viewer
          }) => {
            for (var i = 0; i < 500; i++) {
              let polyline = {};
              let positions = [];
              positions.push({
                lng: Math.random() * 40 + 85,
                lat: Math.random() * 30 + 21
              });
              positions.push({
                lng: Math.random() * 40 + 85,
                lat: Math.random() * 30 + 21
              });
              polyline.positions = positions;
              polyline.material = '#' + Math.random().toString(16).substr(2, 6).toUpperCase();
              polylines.value.push(polyline);
            }
          };
          return {
            unload,
            reload,
            load,
            onClicked,
            onViewerReady,
            collectionRef,
            polylines
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
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-polyline.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-polyline.md



vc_collection_polylinevue_type_script_lang_ts.render = vc_collection_polylinevue_type_template_id_f985a00a_render

/* harmony default export */ var vc_collection_polyline = __webpack_exports__["default"] = (vc_collection_polylinevue_type_script_lang_ts);

/***/ })

}]);