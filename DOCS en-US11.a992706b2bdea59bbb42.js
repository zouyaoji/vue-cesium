(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.26/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/datasources/vc-datasource-czml.md?vue&type=template&id=43b04b80

const vc_datasource_czmlvue_type_template_id_43b04b80_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_datasource_czmlvue_type_template_id_43b04b80_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcDatasourceCzml ");

const vc_datasource_czmlvue_type_template_id_43b04b80_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Load ");

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("CZML");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" format datasource. It is equivalent to initializing a ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.CzmlDataSource", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance.");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcDatasourceCzml component.", -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-datasource-czml"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add CZML format datasource objects on the viewer.")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer shouldAnimate>\n    <vc-datasource-czml\n      ref=\"datasourceRef\"\n      czml=\"https://zouyaoji.top/vue-cesium/SampleData/simple.czml\"\n      @ready=\"onDatasourceReady\"\n      :show=\"show\"\n      @click=\"onClicked\"\n    ></vc-datasource-czml>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    <el-switch v-model=\"show\" active-color=\"#13ce66\" inactive-text=\"Show/Hide\"> </el-switch>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const show = ref(true)\n      const datasourceRef = ref(null)\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        datasourceRef.value.unload()\n      }\n      const reload = () => {\n        datasourceRef.value.reload()\n      }\n      const load = () => {\n        datasourceRef.value.load()\n      }\n      const onDatasourceReady = ({ Cesium, viewer, cesiumObject }) => {\n        // viewer.zoomTo(cesiumObject)\n        viewer.camera.flyHome(0)\n      }\n\n      return {\n        unload,\n        reload,\n        load,\n        show,\n        onClicked,\n        onDatasourceReady,\n        datasourceRef\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>czml</td><td>String|Object</td><td></td><td><code>required</code> An optional name for the data source. This value will be overwritten if a loaded document contains a name.</td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specifies whether the datasource is visible.</td></tr><tr><td>entities</td><td>Array</td><td><code>[]</code></td><td><code>optional</code> Specify the collection of entities to be added to this datasource.</td></tr><tr><td>sourceUri</td><td>String</td><td></td><td><code>optional</code> Overrides the url to use for resolving relative links.</td></tr><tr><td>credit</td><td>String|Object</td><td></td><td><code>optional</code> A credit for the data source, which is displayed on the canvas.</td></tr></tbody></table>", 1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>changedEvent</td><td></td><td>Gets an event that will be raised when the underlying data changes.</td></tr><tr><td>errorEvent</td><td></td><td>Gets an event that will be raised if an error is encountered during processing.</td></tr><tr><td>loadingEvent</td><td></td><td>Gets an event that will be raised when the data source either starts or stops loading.</td></tr><tr><td>clusterEvent</td><td>(clusteredEntities, cluster)</td><td>Gets the event that will be raised when a new cluster will be displayed</td></tr><tr><td>collectionChanged</td><td>(collection, added, removed, changed)</td><td>Gets the event that is fired when entities are added or removed from the collection.</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse is pressed on the data source.</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse bounces up on the data source.</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks on the data source.</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks outside the data source.</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>Triggers when the left mouse button double-clicks the data source.</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves on the data source.</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves to the data source.</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves out of the data source.</td></tr></tbody></table>", 1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Slots ");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Subtags")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "This is where vue-datasource-czml sub tags content goes."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-entity")])])], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: ");

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("CzmlDataSource");

function vc_datasource_czmlvue_type_template_id_43b04b80_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_datasource_czmlvue_type_template_id_43b04b80_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcdatasourceczml",
    tabindex: "-1",
    content: "VcDatasourceCzml",
    href: "#vcdatasourceczml",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_datasource_czmlvue_type_template_id_43b04b80_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcdatasourceczml"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("p", null, [vc_datasource_czmlvue_type_template_id_43b04b80_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://github.com/AnalyticalGraphicsInc/czml-writer/wiki/CZML-Guide"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_4]),
    _: 1
  }), _hoisted_5, _hoisted_6, _hoisted_7]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_11]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "slots",
    tabindex: "-1",
    content: "Slots",
    href: "#slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slots"
    })]),
    _: 1
  }), _hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_19, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/CzmlDataSource.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_20]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/datasources/vc-datasource-czml.md?vue&type=template&id=43b04b80

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/datasources/vc-datasource-czml.md?vue&type=script&lang=ts

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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

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
            }, null, 8, ["onReady", "show", "onClick"])]),
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
              "inactive-text": "Show/Hide"
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

          return {
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
// CONCATENATED MODULE: ./website/docs/en-US/datasources/vc-datasource-czml.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/datasources/vc-datasource-czml.md



vc_datasource_czmlvue_type_script_lang_ts.render = vc_datasource_czmlvue_type_template_id_43b04b80_render

/* harmony default export */ var vc_datasource_czml = __webpack_exports__["default"] = (vc_datasource_czmlvue_type_script_lang_ts);

/***/ })

}]);