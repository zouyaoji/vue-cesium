(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-label.md?vue&type=template&id=ecd8223e

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcGraphicsLabel ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading a label graphic. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.LabelGraphics"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance.")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "Note:"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" It needs to be a subcomponent of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to load normally.")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of the VcGraphicsLabel component.", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-graphics-label"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add a label to the viewer.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity :position=\"[114, 40, 300000]\" description=\"Hello Vue Cesium\" @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-label text=\"Hello Vue Cesium\" font=\"20px sans-serif\" :pixelOffset=\"[0, 20]\" fillColor=\"red\"></vc-graphics-label>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n\n      return {\n        onEntityEvt,\n        onViewerReady\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying the visibility of the label.</td><td></td></tr><tr><td>text</td><td>String</td><td></td><td><code>optional</code> A Property specifying the text. Explicit newlines &#39;\\n&#39; are supported.</td><td></td></tr><tr><td>font</td><td>String</td><td><code>&#39;30px sans-serif&#39;</code></td><td><code>optional</code> A Property specifying the CSS font.</td><td></td></tr><tr><td>labelStyle</td><td>Number</td><td><code>0</code></td><td><code>optional</code> A Property specifying the LabelStyle. <strong>FILL: 0, OUTLINE: 1, FILL_AND_OUTLINE: 2</strong></td><td>0/1/2</td></tr><tr><td>scale</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> A numeric Property specifying the scale to apply to the text.</td><td></td></tr><tr><td>showBackground</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> A boolean Property specifying the visibility of the background behind the label.</td><td></td></tr><tr><td>backgroundColor</td><td>Object|String|Array</td><td><code>{ x: 0.165, y: 0.165, z: 0.165, w: 0.8 }</code></td><td><code>optional</code> A Property specifying the background Color.</td><td></td></tr><tr><td>backgroundPadding</td><td>Object|Array</td><td><code>{x: 7, y: 5}</code></td><td><code>optional</code> A Cartesian2 Property specifying the horizontal and vertical background padding in pixels.</td><td></td></tr><tr><td>pixelOffset</td><td>Object|Array</td><td><code>{x: 0, y: 0 }</code></td><td><code>optional</code> A Cartesian2 Property specifying the pixel offset.</td><td></td></tr><tr><td>eyeOffset</td><td>Object|Array</td><td><code>{x: 0, y: 0, z: 0}</code></td><td><code>optional</code> A Cartesian3 Property specifying the eye offset.</td><td></td></tr><tr><td>horizontalOrigin</td><td>Number</td><td><code>0</code></td><td><code>optional</code> A Property specifying the HorizontalOrigin.</td><td></td></tr><tr><td>verticalOrigin</td><td>Number</td><td><code>0</code></td><td><code>optional</code> A Property specifying the VerticalOrigin.</td><td></td></tr><tr><td>heightReference</td><td>Number</td><td><code>0</code></td><td><code>optional</code> A Property specifying what the height is relative to.</td><td></td></tr><tr><td>fillColor</td><td>Object|String|Array</td><td><code>white</code></td><td><code>optional</code> A Property specifying the fill Color.</td><td></td></tr><tr><td>outlineColor</td><td>Object|String|Array</td><td><code>black</code></td><td><code>optional</code> A Property specifying the outline Color.</td><td></td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> A numeric Property specifying the outline width.</td><td></td></tr><tr><td>translucencyByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> A NearFarScalar Property used to set translucency based on distance from the camera.</td><td></td></tr><tr><td>pixelOffsetScaleByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> A NearFarScalar Property used to set pixelOffset based on distance from the camera.</td><td></td></tr><tr><td>scaleByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> A NearFarScalar Property used to set scale based on distance from the camera.</td><td></td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> A Property specifying at what distance from the camera that this label will be displayed.</td><td></td></tr><tr><td>disableDepthTestDistance</td><td>Number</td><td></td><td><code>optional</code> A Property specifying the distance from the camera at which to disable the depth test to.</td><td></td></tr></tbody></table>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>definitionChanged</td><td></td><td>Triggers whenever a property or sub-property is changed or modified.</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("LabelGraphics");

function vc_graphics_labelvue_type_template_id_ecd8223e_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcgraphicslabel",
    tabindex: "-1",
    content: "VcGraphicsLabel",
    href: "#vcgraphicslabel",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcgraphicslabel"
    })]),
    _: 1
  }), _hoisted_3, _hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_14, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/LabelGraphics.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-label.md?vue&type=template&id=ecd8223e

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-label.md?vue&type=script&lang=ts

/* harmony default export */ var vc_graphics_labelvue_type_script_lang_ts = ({
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
        const _component_vc_graphics_label = _resolveComponent("vc-graphics-label");

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
              position: [114, 40, 300000],
              description: "Hello Vue Cesium",
              onClick: _ctx.onEntityEvt,
              onMouseover: _ctx.onEntityEvt,
              onMouseout: _ctx.onEntityEvt
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_label, {
                text: "Hello Vue Cesium",
                font: "20px sans-serif",
                pixelOffset: [0, 20],
                fillColor: "red"
              })]),
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
          // methods
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
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-label.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-label.md



vc_graphics_labelvue_type_script_lang_ts.render = vc_graphics_labelvue_type_template_id_ecd8223e_render

/* harmony default export */ var vc_graphics_label = __webpack_exports__["default"] = (vc_graphics_labelvue_type_script_lang_ts);

/***/ })

}]);