(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/primitives/vc-collection-primitive.md?vue&type=template&id=82df73ae

const vc_collection_primitivevue_type_template_id_82df73ae_hoisted_1 = {
  class: "content element-doc"
};

const vc_collection_primitivevue_type_template_id_82df73ae_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vccollectionprimitive\"><a class=\"header-anchor\" href=\"#vccollectionprimitive\">¶</a> VcCollectionPrimitive</h2><p>Loading a collection of primitives. It is equivalent to initializing a <code>Cesium.PrimitiveCollection</code> instance.</p><div class=\"tip\"><p>A member attribute <code>Scene.primitives(PrimitiveCollection)</code> of the <code>Viewer</code> instance that is initialized by <code>vc-viewer</code>. It is also a primitive itself so collections can be added to collections forming a hierarchy.</p></div><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of VcCollectionPrimitive component.</p>", 5);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-primitive"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add a collection of billboard primitives and model primitives to the viewer.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-collection-primitive @click=\"onClicked\" :show=\"show\" ref=\"collectionRef\">\n      <vc-collection-billboard :billboards=\"billboards1\"></vc-collection-billboard>\n      <vc-collection-primitive>\n        <vc-collection-billboard :billboards=\"billboards2\"></vc-collection-billboard>\n      </vc-collection-primitive>\n    </vc-collection-primitive>\n    <vc-collection-primitive>\n      <vc-primitive-model\n        @click=\"onClicked\"\n        url=\"https://zouyaoji.top/vue-cesium/SampleData/models/CesiumAir/Cesium_Air.glb\"\n        :modelMatrix=\"modelMatrix\"\n        :scale=\"10000\"\n        :minimumPixelSize=\"128\"\n        :maximumScale=\"200000\"\n      >\n      </vc-primitive-model>\n    </vc-collection-primitive>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    <el-switch v-model=\"show\" active-color=\"#13ce66\" inactive-text=\"Show/Hide\"> </el-switch>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const collectionRef = ref(null)\n      const billboards1 = ref([])\n      const billboards2 = ref([])\n      const modelMatrix = ref(null)\n      const show = ref(true)\n      const instance = getCurrentInstance()\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        collectionRef.value.unload()\n      }\n      const reload = () => {\n        collectionRef.value.reload()\n      }\n      const load = () => {\n        collectionRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        for (var i = 0; i < 100; i++) {\n          let billboard1 = {}\n          billboard1.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }\n          billboard1.image = 'https://zouyaoji.top/vue-cesium/favicon.png'\n          billboard1.scale = 0.1\n          billboards1.value.push(billboard1)\n\n          let billboard2 = {}\n          billboard2.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }\n          billboard2.image = 'https://zouyaoji.top/vue-cesium/favicon.png'\n          billboard2.scale = 0.15\n          billboards2.value.push(billboard2)\n        }\n\n        modelMatrix.value = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))\n      }\n\n      return {\n        unload,\n        reload,\n        load,\n        onClicked,\n        onViewerReady,\n        collectionRef,\n        billboards1,\n        billboards2,\n        modelMatrix,\n        show\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Determines if the primitives in the collection will be shown.</td></tr><tr><td>destroyPrimitives</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Determines if primitives in the collection are destroyed when they are removed.</td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the mouse event takes effect.</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse is pressed on this primitive.</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse bounces up on this primitive.</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse clicks on the primitive.</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse clicks outside the primitive.</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the left mouse button double-clicks the primitive.</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves on this primitive.</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves to this primitive.</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves out of this primitive.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PrimitiveCollection.html\">PrimitiveCollection</a></strong></li></ul>", 6);

function vc_collection_primitivevue_type_template_id_82df73ae_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_collection_primitivevue_type_template_id_82df73ae_hoisted_1, [vc_collection_primitivevue_type_template_id_82df73ae_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-collection-primitive.md?vue&type=template&id=82df73ae

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/primitives/vc-collection-primitive.md?vue&type=script&lang=ts

/* harmony default export */ var vc_collection_primitivevue_type_script_lang_ts = ({
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
        const _component_vc_collection_billboard = _resolveComponent("vc-collection-billboard");

        const _component_vc_collection_primitive = _resolveComponent("vc-collection-primitive");

        const _component_vc_primitive_model = _resolveComponent("vc-primitive-model");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_switch = _resolveComponent("el-switch");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.onViewerReady
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_collection_primitive, {
              onClick: _ctx.onClicked,
              show: _ctx.show,
              ref: "collectionRef"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_collection_billboard, {
                billboards: _ctx.billboards1
              }, null, 8, ["billboards"]), _createVNode(_component_vc_collection_primitive, null, {
                default: _withCtx(() => [_createVNode(_component_vc_collection_billboard, {
                  billboards: _ctx.billboards2
                }, null, 8, ["billboards"])]),
                _: 1
              })]),
              _: 1
            }, 8, ["onClick", "show"]), _createVNode(_component_vc_collection_primitive, null, {
              default: _withCtx(() => [_createVNode(_component_vc_primitive_model, {
                onClick: _ctx.onClicked,
                url: "https://zouyaoji.top/vue-cesium/SampleData/models/CesiumAir/Cesium_Air.glb",
                modelMatrix: _ctx.modelMatrix,
                scale: 10000,
                minimumPixelSize: 128,
                maximumScale: 200000
              }, null, 8, ["onClick", "modelMatrix"])]),
              _: 1
            })]),
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
          const collectionRef = ref(null);
          const billboards1 = ref([]);
          const billboards2 = ref([]);
          const modelMatrix = ref(null);
          const show = ref(true);
          const instance = getCurrentInstance(); // methods

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
            for (var i = 0; i < 100; i++) {
              let billboard1 = {};
              billboard1.position = {
                lng: Math.random() * 40 + 85,
                lat: Math.random() * 30 + 21
              };
              billboard1.image = 'https://zouyaoji.top/vue-cesium/favicon.png';
              billboard1.scale = 0.1;
              billboards1.value.push(billboard1);
              let billboard2 = {};
              billboard2.position = {
                lng: Math.random() * 40 + 85,
                lat: Math.random() * 30 + 21
              };
              billboard2.image = 'https://zouyaoji.top/vue-cesium/favicon.png';
              billboard2.scale = 0.15;
              billboards2.value.push(billboard2);
            }

            modelMatrix.value = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000));
          };

          return {
            unload,
            reload,
            load,
            onClicked,
            onViewerReady,
            collectionRef,
            billboards1,
            billboards2,
            modelMatrix,
            show
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
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-collection-primitive.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-collection-primitive.md



vc_collection_primitivevue_type_script_lang_ts.render = vc_collection_primitivevue_type_template_id_82df73ae_render

/* harmony default export */ var vc_collection_primitive = __webpack_exports__["default"] = (vc_collection_primitivevue_type_script_lang_ts);

/***/ })

}]);