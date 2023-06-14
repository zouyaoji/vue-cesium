(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/datasources/vc-datasource-czml.md?vue&type=template&id=4fcbd06e

const vc_datasource_czmlvue_type_template_id_4fcbd06e_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_datasource_czmlvue_type_template_id_4fcbd06e_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcDatasourceCzml ");

const vc_datasource_czmlvue_type_template_id_4fcbd06e_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载 ");

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("CZML");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 格式数据源。相当于初始化一个 ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.CzmlDataSource", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例。");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Czml 数据源组件的基础用法。", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-datasource-czml"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加 CZML 格式数据源对象。")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer shouldAnimate>\n    <vc-datasource-czml\n      ref=\"datasourceRef\"\n      czml=\"https://zouyaoji.top/vue-cesium/SampleData/simple.czml\"\n      @ready=\"onDatasourceReady\"\n      :show=\"show\"\n      @click=\"onClicked\"\n    ></vc-datasource-czml>\n    <vc-datasource-czml :czml=\"czml\"></vc-datasource-czml>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    <el-switch v-model=\"show\" active-color=\"#13ce66\" inactive-text=\"显示/隐藏\"> </el-switch>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const show = ref(true)\n      const datasourceRef = ref(null)\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        datasourceRef.value.unload()\n      }\n      const reload = () => {\n        datasourceRef.value.reload()\n      }\n      const load = () => {\n        datasourceRef.value.load()\n      }\n      const onDatasourceReady = ({ Cesium, viewer, cesiumObject }) => {\n        // viewer.zoomTo(cesiumObject)\n        viewer.camera.flyHome(0)\n      }\n      const czml = [\n        {\n          id: 'document',\n          name: 'CZML Geometries: Polyline',\n          version: '1.0'\n        },\n        {\n          id: 'redLine',\n          name: 'Red line clamped to terain',\n          polyline: {\n            positions: {\n              cartographicDegrees: [-75, 35, 0, -125, 35, 0]\n            },\n            material: {\n              solidColor: {\n                color: {\n                  rgba: [255, 0, 0, 255]\n                }\n              }\n            },\n            width: 5,\n            clampToGround: true\n          }\n        },\n        {\n          id: 'blueLine',\n          name: 'Glowing blue line on the surface',\n          polyline: {\n            positions: {\n              cartographicDegrees: [-75, 37, 0, -125, 37, 0]\n            },\n            material: {\n              polylineGlow: {\n                color: {\n                  rgba: [0, 0, 255, 255]\n                },\n                glowPower: 0.2\n              }\n            },\n            width: 10\n          }\n        },\n        {\n          id: 'orangeLine',\n          name: 'Orange line with black outline at height and following the surface',\n          polyline: {\n            positions: {\n              cartographicDegrees: [-75, 39, 250000, -125, 39, 250000]\n            },\n            material: {\n              polylineOutline: {\n                color: {\n                  rgba: [255, 165, 0, 255]\n                },\n                outlineColor: {\n                  rgba: [0, 0, 0, 255]\n                },\n                outlineWidth: 2\n              }\n            },\n            width: 5\n          }\n        },\n        {\n          id: 'purpleLine',\n          name: 'Purple arrow at height',\n          polyline: {\n            positions: {\n              cartographicDegrees: [-75, 43, 500000, -125, 43, 500000]\n            },\n            material: {\n              polylineArrow: {\n                color: {\n                  rgba: [148, 0, 211, 255]\n                }\n              }\n            },\n            followSurface: false,\n            width: 10\n          }\n        },\n        {\n          id: 'dashedLine',\n          name: 'Blue dashed line',\n          polyline: {\n            positions: {\n              cartographicDegrees: [-75, 45, 500000, -125, 45, 500000]\n            },\n            material: {\n              polylineDash: {\n                color: {\n                  rgba: [0, 255, 255, 255]\n                }\n              }\n            },\n            width: 4\n          }\n        }\n      ]\n\n      return {\n        czml,\n        unload,\n        reload,\n        load,\n        show,\n        onClicked,\n        onDatasourceReady,\n        datasourceRef\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "属性名"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "类型"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "默认值"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "描述")])], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "czml"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "string|Cesium.Resource|any[]"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "required"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定 czml 对象或者 url。")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "show"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定数据源是否可见。")])], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "enableMouseEvent"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定鼠标事件是否生效。")])], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "entities", -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Array<");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcEntityProps");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(">");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "[]")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定要添加到该数据源的实体集合。")], -1);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "sourceUri"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定引用资源 url 的相对路径。")])], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "credit"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "string|Cesium.Credit"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 指定数据源描述信息。")])], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>changedEvent</td><td></td><td>数据源改变时触发。</td></tr><tr><td>errorEvent</td><td></td><td>数据源发生错误时触发。</td></tr><tr><td>loadingEvent</td><td></td><td>数据源开始或结束加载时触发。</td></tr><tr><td>clusterEvent</td><td>(clusteredEntities, cluster)</td><td>数据源聚合事件。</td></tr><tr><td>collectionChanged</td><td>(collection, added, removed, changed)</td><td>数据源实体集合改变时触</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>鼠标在该数据源上按下时触发。</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>鼠标在该数据源上弹起时触发。</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>鼠标单击该数据源时触发。</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>鼠标单击该数据源外部时触发。</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>鼠标左键双击该数据源时触发。</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>鼠标在该数据源上移动时触发。</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>鼠标移动到该数据源时触发。</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>鼠标移出该数据源时触发。</td></tr></tbody></table>", 1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("插槽 ");

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "插槽名"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "描述"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "子组件")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "用于 vue-datasource-czml 挂载子组件。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-entity")])])], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("官方文档： ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("CzmlDataSource");

function vc_datasource_czmlvue_type_template_id_4fcbd06e_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_datasource_czmlvue_type_template_id_4fcbd06e_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcdatasourceczml",
    tabindex: "-1",
    content: "VcDatasourceCzml",
    href: "#vcdatasourceczml",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_datasource_czmlvue_type_template_id_4fcbd06e_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcdatasourceczml"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [vc_datasource_czmlvue_type_template_id_4fcbd06e_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/AnalyticalGraphicsInc/czml-writer/wiki/CZML-Guide"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_4]),
    _: 1
  }), _hoisted_5, _hoisted_6, _hoisted_7]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    tabindex: "-1",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("table", null, [_hoisted_13, Object(vue_esm_browser["createElementVNode"])("tbody", null, [_hoisted_14, _hoisted_15, _hoisted_16, Object(vue_esm_browser["createElementVNode"])("tr", null, [_hoisted_17, Object(vue_esm_browser["createElementVNode"])("td", null, [_hoisted_18, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://zouyaoji.top/vue-cesium/#/zh-CN/component/vc-entity"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_19]),
    _: 1
  }), _hoisted_20]), _hoisted_21, _hoisted_22]), _hoisted_23, _hoisted_24])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-jian",
    tabindex: "-1",
    content: "事件",
    href: "#shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_25, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), _hoisted_26, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "cha-cao",
    tabindex: "-1",
    content: "插槽",
    href: "#cha-cao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_27, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cha-cao"
    })]),
    _: 1
  }), _hoisted_28, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "can-kao",
    tabindex: "-1",
    content: "参考",
    href: "#can-kao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_29, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#can-kao"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_30, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/CzmlDataSource.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_31]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/datasources/vc-datasource-czml.md?vue&type=template&id=4fcbd06e

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/datasources/vc-datasource-czml.md?vue&type=script&lang=ts

/* harmony default export */ var vc_datasource_czmlvue_type_script_lang_ts = ({
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
        const _component_vc_datasource_czml = _resolveComponent("vc-datasource-czml");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_switch = _resolveComponent("el-switch");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            shouldAnimate: ""
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_datasource_czml, {
              ref: "datasourceRef",
              czml: "https://zouyaoji.top/vue-cesium/SampleData/simple.czml",
              onReady: _ctx.onDatasourceReady,
              show: _ctx.show,
              onClick: _ctx.onClicked
            }, null, 8, ["onReady", "show", "onClick"]), _createVNode(_component_vc_datasource_czml, {
              czml: _ctx.czml
            }, null, 8, ["czml"])]),
            _: 1
          }), _createVNode(_component_el_row, {
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
              modelValue: _ctx.show,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.show = $event),
              "active-color": "#13ce66",
              "inactive-text": "显示/隐藏"
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
          const show = ref(true);
          const datasourceRef = ref(null);

          const onClicked = e => {
            console.log(e);
          };

          const unload = () => {
            datasourceRef.value.unload();
          };

          const reload = () => {
            datasourceRef.value.reload();
          };

          const load = () => {
            datasourceRef.value.load();
          };

          const onDatasourceReady = _ref => {
            let {
              Cesium,
              viewer,
              cesiumObject
            } = _ref;
            // viewer.zoomTo(cesiumObject)
            viewer.camera.flyHome(0);
          };

          const czml = [{
            id: 'document',
            name: 'CZML Geometries: Polyline',
            version: '1.0'
          }, {
            id: 'redLine',
            name: 'Red line clamped to terain',
            polyline: {
              positions: {
                cartographicDegrees: [-75, 35, 0, -125, 35, 0]
              },
              material: {
                solidColor: {
                  color: {
                    rgba: [255, 0, 0, 255]
                  }
                }
              },
              width: 5,
              clampToGround: true
            }
          }, {
            id: 'blueLine',
            name: 'Glowing blue line on the surface',
            polyline: {
              positions: {
                cartographicDegrees: [-75, 37, 0, -125, 37, 0]
              },
              material: {
                polylineGlow: {
                  color: {
                    rgba: [0, 0, 255, 255]
                  },
                  glowPower: 0.2
                }
              },
              width: 10
            }
          }, {
            id: 'orangeLine',
            name: 'Orange line with black outline at height and following the surface',
            polyline: {
              positions: {
                cartographicDegrees: [-75, 39, 250000, -125, 39, 250000]
              },
              material: {
                polylineOutline: {
                  color: {
                    rgba: [255, 165, 0, 255]
                  },
                  outlineColor: {
                    rgba: [0, 0, 0, 255]
                  },
                  outlineWidth: 2
                }
              },
              width: 5
            }
          }, {
            id: 'purpleLine',
            name: 'Purple arrow at height',
            polyline: {
              positions: {
                cartographicDegrees: [-75, 43, 500000, -125, 43, 500000]
              },
              material: {
                polylineArrow: {
                  color: {
                    rgba: [148, 0, 211, 255]
                  }
                }
              },
              followSurface: false,
              width: 10
            }
          }, {
            id: 'dashedLine',
            name: 'Blue dashed line',
            polyline: {
              positions: {
                cartographicDegrees: [-75, 45, 500000, -125, 45, 500000]
              },
              material: {
                polylineDash: {
                  color: {
                    rgba: [0, 255, 255, 255]
                  }
                }
              },
              width: 4
            }
          }];
          return {
            czml,
            unload,
            reload,
            load,
            show,
            onClicked,
            onDatasourceReady,
            datasourceRef
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
// CONCATENATED MODULE: ./website/docs/zh-CN/datasources/vc-datasource-czml.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/datasources/vc-datasource-czml.md



vc_datasource_czmlvue_type_script_lang_ts.render = vc_datasource_czmlvue_type_template_id_4fcbd06e_render

/* harmony default export */ var vc_datasource_czml = __webpack_exports__["default"] = (vc_datasource_czmlvue_type_script_lang_ts);

/***/ })

}]);