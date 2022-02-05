(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[163],{

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.26/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-collection-point.md?vue&type=template&id=4f3678e5

const vc_collection_pointvue_type_template_id_4f3678e5_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_collection_pointvue_type_template_id_4f3678e5_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcCollectionPoint ");

const vc_collection_pointvue_type_template_id_4f3678e5_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载点图元集合，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.PointPrimitiveCollection"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例。渲染海量点时建议用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "points"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 属性表达。")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "点图元集合组件的基础用法。", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-point"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加点图元集合。")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-collection-point @click=\"onClicked\" ref=\"collectionRef\" :points=\"points\">\n      <template v-for=\"(polyline, index) of polylines\">\n        <template v-for=\"(position, subIndex) of polyline.positions\">\n          <vc-point :position=\"position\" :color=\"[255, 229, 0]\" :pixelSize=\"32\"></vc-point>\n        </template>\n      </template>\n    </vc-collection-point>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const collectionRef = ref(null)\n      const points = ref([])\n      const instance = getCurrentInstance()\n      const polylines = [\n        {\n          positions: [\n            { lng: 105.24884033203125, lat: 25.313117980957031, height: 1183.3186645507812 },\n            { lng: 108.24906555725647, lat: 30.312892755731806, height: 1183.3186645507812 }\n          ],\n          area: 100000.3\n        },\n        {\n          positions: [\n            { lng: 109.24884033203125, lat: 30.313392639160156, height: 1183.804443359375 },\n            { lng: 112.24906555725632, lat: 35.31316741393502, height: 1183.6849884241819 }\n          ],\n          area: 8000.658\n        },\n        {\n          positions: [\n            { lng: 113.24884033203125, lat: 35.313655853271484, height: 1184.2783203125 },\n            { lng: 116.24906555725632, lat: 40.313430628046348, height: 1184.1093236654997 }\n          ],\n          area: 200000.55\n        }\n      ]\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        collectionRef.value.unload()\n      }\n      const reload = () => {\n        collectionRef.value.reload()\n      }\n      const load = () => {\n        collectionRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        for (var i = 0; i < 10000; i++) {\n          let point = {}\n          point.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }\n          point.color = 'rgb(255,229,0)'\n          point.pixelSize = 8\n          points.value.push(point)\n        }\n      }\n\n      return {\n        unload,\n        reload,\n        load,\n        onClicked,\n        onViewerReady,\n        collectionRef,\n        points,\n        polylines\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>modelMatrix</td><td>Object</td><td></td><td><code>optional</code> 指定 4x4 变换矩阵，将每个点从模型转换为世界坐标。</td><td></td></tr><tr><td>debugShowBoundingVolume</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否显示此图元的 BoundingVolume， 仅调试使用。</td><td></td></tr><tr><td>blendOption</td><td>Number</td><td><code>2</code></td><td><code>optional</code> 指定颜色混合选项。 <strong>OPAQUE: 0, TRANSLUCENT: 1, OPAQUE_AND_TRANSLUCENT: 2</strong></td><td>0/1/2</td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定该图元集合是否显示。</td><td></td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定鼠标事件是否生效。</td><td></td></tr><tr><td>points</td><td>Array</td><td><code>[]</code></td><td><code>optional</code> 指定点集合数组。 数组对象结构与 <code>vc-point</code> 组件属性相同。</td><td></td></tr></tbody></table>", 1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上按下时触发。</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上弹起时触发。</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>鼠标单击该图元时触发。</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>鼠标单击该图元外部时触发。</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>鼠标左键双击该图元时触发。</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上移动时触发。</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>鼠标移动到该图元时触发。</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>鼠标移出该图元时触发。</td></tr></tbody></table>", 1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("插槽 ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "插槽名"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "描述"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "子组件")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "用于挂载 vc-point 组件。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-point")])])], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPoint ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载点图元，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.PointPrimitive"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例。")], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 需要作为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-point"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的子组件才能正常加载。")], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPoint 属性 ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>color</td><td>Object|Array|String</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> 指定 point 的颜色。</td></tr><tr><td>disableDepthTestDistance</td><td>Number</td><td></td><td><code>optional</code> 指定 point 深度检测距离。</td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 point 显示条件随相机距离改变的参数。</td></tr><tr><td>id</td><td>*</td><td></td><td><code>optional</code> 指定与 point 关联的信息，拾取时返回该属性值。</td></tr><tr><td>outlineColor</td><td>Object | Array | String</td><td><code>&#39;black&#39;</code></td><td><code>optional</code> 指定 point 的轮廓颜色。</td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 point 的轮廓宽度。</td></tr><tr><td>pixelSize</td><td>Number</td><td><code>1</code></td><td><code>optional</code> 指定 point 的像素大小。</td></tr><tr><td>position</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 point 的位置。</td></tr><tr><td>scaleByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 point 缩放比例随相机距离改变的参数。</td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 point 是否显示。</td></tr><tr><td>translucencyByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 point 透明度随相机距离改变的参数。</td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定鼠标事件是否生效。</td></tr></tbody></table>", 1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPoint 事件 ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上按下时触发。</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上弹起时触发。</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>鼠标单击该图元时触发。</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>鼠标单击该图元外部时触发。</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>鼠标左键双击该图元时触发。</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上移动时触发。</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>鼠标移动到该图元时触发。</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>鼠标移出该图元时触发。</td></tr></tbody></table>", 1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("官方文档： ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("PointPrimitiveCollection");

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("、");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("PointPrimitive");

function vc_collection_pointvue_type_template_id_4f3678e5_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_collection_pointvue_type_template_id_4f3678e5_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vccollectionpoint",
    tabindex: "-1",
    content: "VcCollectionPoint",
    href: "#vccollectionpoint",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_collection_pointvue_type_template_id_4f3678e5_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vccollectionpoint"
    })]),
    _: 1
  }), vc_collection_pointvue_type_template_id_4f3678e5_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
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
    id: "vcpoint",
    tabindex: "-1",
    content: "VcPoint",
    href: "#vcpoint",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcpoint"
    })]),
    _: 1
  }), _hoisted_15, _hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcpoint-shu-xing",
    tabindex: "-1",
    content: "VcPoint 属性",
    href: "#vcpoint-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcpoint-shu-xing"
    })]),
    _: 1
  }), _hoisted_18, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcpoint-shi-jian",
    tabindex: "-1",
    content: "VcPoint 事件",
    href: "#vcpoint-shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_19, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcpoint-shi-jian"
    })]),
    _: 1
  }), _hoisted_20, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "can-kao",
    tabindex: "-1",
    content: "参考",
    href: "#can-kao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_21, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#can-kao"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_22, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/PointPrimitiveCollection.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_23]),
    _: 1
  })]), _hoisted_24, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/PointPrimitive.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_25]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-point.md?vue&type=template&id=4f3678e5

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-collection-point.md?vue&type=script&lang=ts

/* harmony default export */ var vc_collection_pointvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createTextVNode: _createTextVNode
      } = vue_esm_browser;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

      function render(_ctx, _cache) {
        const _component_vc_point = _resolveComponent("vc-point");

        const _component_vc_collection_point = _resolveComponent("vc-collection-point");

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
            default: _withCtx(() => [_createVNode(_component_vc_collection_point, {
              onClick: _ctx.onClicked,
              ref: "collectionRef",
              points: _ctx.points
            }, {
              default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.polylines, (polyline, index) => {
                return _openBlock(), _createElementBlock(_Fragment, null, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(polyline.positions, (position, subIndex) => {
                  return _openBlock(), _createBlock(_component_vc_point, {
                    position: position,
                    color: [255, 229, 0],
                    pixelSize: 32
                  }, null, 8, ["position"]);
                }), 256))], 64);
              }), 256))]),
              _: 1
            }, 8, ["onClick", "points"])]),
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
          const collectionRef = ref(null);
          const points = ref([]);
          const instance = getCurrentInstance();
          const polylines = [{
            positions: [{
              lng: 105.24884033203125,
              lat: 25.313117980957031,
              height: 1183.3186645507812
            }, {
              lng: 108.24906555725647,
              lat: 30.312892755731806,
              height: 1183.3186645507812
            }],
            area: 100000.3
          }, {
            positions: [{
              lng: 109.24884033203125,
              lat: 30.313392639160156,
              height: 1183.804443359375
            }, {
              lng: 112.24906555725632,
              lat: 35.31316741393502,
              height: 1183.6849884241819
            }],
            area: 8000.658
          }, {
            positions: [{
              lng: 113.24884033203125,
              lat: 35.313655853271484,
              height: 1184.2783203125
            }, {
              lng: 116.24906555725632,
              lat: 40.313430628046348,
              height: 1184.1093236654997
            }],
            area: 200000.55
          }]; // methods

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

          const onViewerReady = _ref => {
            let {
              Cesium,
              viewer
            } = _ref;

            for (var i = 0; i < 10000; i++) {
              let point = {};
              point.position = {
                lng: Math.random() * 40 + 85,
                lat: Math.random() * 30 + 21
              };
              point.color = 'rgb(255,229,0)';
              point.pixelSize = 8;
              points.value.push(point);
            }
          };

          return {
            unload,
            reload,
            load,
            onClicked,
            onViewerReady,
            collectionRef,
            points,
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
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-point.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-point.md



vc_collection_pointvue_type_script_lang_ts.render = vc_collection_pointvue_type_template_id_4f3678e5_render

/* harmony default export */ var vc_collection_point = __webpack_exports__["default"] = (vc_collection_pointvue_type_script_lang_ts);

/***/ })

}]);