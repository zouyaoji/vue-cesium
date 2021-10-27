(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-ellipsoid.md?vue&type=template&id=917450f8

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcgraphicsellipsoid\"><a class=\"header-anchor\" href=\"#vcgraphicsellipsoid\">¶</a> VcGraphicsEllipsoid</h2><p>Loading an ellipsoid graphic. It is equivalent to initializing a <code>Cesium.EllipsoidGraphics</code> instance.</p><p><strong>Note:</strong> It needs to be a subcomponent of <code>vc-entity</code> to load normally.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of the VcGraphicsEllipsoid component.</p>", 5);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-graphics-ellipsoid"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add some ellipsoids to the viewer.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity\n      ref=\"entity1\"\n      :position=\"[114, 40, 300000]\"\n      description=\"Hello Vue Cesium\"\n      @click=\"onEntityEvt\"\n      @mouseover=\"onEntityEvt\"\n      @mouseout=\"onEntityEvt\"\n    >\n      <vc-graphics-ellipsoid :radii=\"{ x: 200000.0, y: 200000.0, z: 300000.0 }\" material=\"blue\" :outline=\"true\"></vc-graphics-ellipsoid>\n    </vc-entity>\n    <vc-entity ref=\"entity2\" :position=\"{lng: 107, lat: 40, height: 300000}\" description=\"Hello Vue Cesium\">\n      <vc-graphics-ellipsoid\n        :radii=\"{ x: 300000.0, y: 300000.0, z: 300000.0 }\"\n        :outline=\"true\"\n        :material=\"[255, 0, 0, 125]\"\n        outlineColor=\"black\"\n      ></vc-graphics-ellipsoid>\n    </vc-entity>\n    <vc-entity ref=\"entity3\" :position=\"[100, 40, 300000]\" description=\"Hello Vue Cesium\">\n      <vc-graphics-ellipsoid\n        :radii=\"{ x: 200000.0, y: 200000.0, z: 300000.0 }\"\n        :fill=\"false\"\n        :outline=\"true\"\n        outlineColor=\"yellow\"\n        :slicePartitions=\"24\"\n        :stackPartitions=\"36\"\n      ></vc-graphics-ellipsoid>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const entity1 = ref(null)\n      const entity2 = ref(null)\n      const entity3 = ref(null)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n      // life cycle\n      onMounted(() => {\n        Promise.all([entity1.value.createPromise, entity2.value.createPromise, entity3.value.createPromise]).then(instances => {\n          instances[0].viewer.zoomTo(instances[0].viewer.entities)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        entity1,\n        entity2,\n        entity3,\n        onViewerReady\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying the visibility of the ellipsoid.</td><td></td></tr><tr><td>radii</td><td>Object</td><td></td><td><code>optional</code> A Cartesian3 Property specifying the radii of the ellipsoid.</td><td></td></tr><tr><td>heightReference</td><td>Number</td><td></td><td><code>optional</code> A Property specifying what the height from the entity position is relative to. <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>fill</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying whether the ellipsoid is filled with the provided material.</td><td></td></tr><tr><td>material</td><td>Object|String|Array</td><td><code>&#39;WHITE&#39;</code></td><td><code>optional</code> A Property specifying the material used to fill the ellipsoid.</td><td></td></tr><tr><td>outline</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> A boolean Property specifying whether the ellipsoid is outlined.</td><td></td></tr><tr><td>outlineColor</td><td>Object|String|Array</td><td><code>&#39;BLACK&#39;</code></td><td><code>optional</code> A Property specifying the Color of the outline.</td><td></td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> A numeric Property specifying the width of the outline.</td><td></td></tr><tr><td>stackPartitions</td><td>Number</td><td><code>64</code></td><td><code>optional</code> A Property specifying the number of stacks.</td><td></td></tr><tr><td>slicePartitions</td><td>Number</td><td><code>64</code></td><td><code>optional</code> A Property specifying the number of radial slices.</td><td></td></tr><tr><td>subdivisions</td><td>Number</td><td><code>128</code></td><td><code>optional</code> A Property specifying the number of samples per outline ring, determining the granularity of the curvature.</td><td></td></tr><tr><td>shadows</td><td>Number</td><td><code>0</code></td><td><code>optional</code> An enum Property specifying whether the ellipsoid casts or receives shadows from each light source. <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> A Property specifying at what distance from the camera that this ellipsoid will be displayed.</td><td></td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>definitionChanged</td><td></td><td>Triggers whenever a property or sub-property is changed or modified.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/EllipsoidGraphics.html\">EllipsoidGraphics</a></strong></li></ul>", 6);

function vc_graphics_ellipsoidvue_type_template_id_917450f8_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-ellipsoid.md?vue&type=template&id=917450f8

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-ellipsoid.md?vue&type=script&lang=ts

/* harmony default export */ var vc_graphics_ellipsoidvue_type_script_lang_ts = ({
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
        const _component_vc_graphics_ellipsoid = _resolveComponent("vc-graphics-ellipsoid");

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
              position: [114, 40, 300000],
              description: "Hello Vue Cesium",
              onClick: _ctx.onEntityEvt,
              onMouseover: _ctx.onEntityEvt,
              onMouseout: _ctx.onEntityEvt
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_ellipsoid, {
                radii: {
                  x: 200000.0,
                  y: 200000.0,
                  z: 300000.0
                },
                material: "blue",
                outline: true
              }, null, 8, ["radii"])]),
              _: 1
            }, 8, ["onClick", "onMouseover", "onMouseout"]), _createVNode(_component_vc_entity, {
              ref: "entity2",
              position: {
                lng: 107,
                lat: 40,
                height: 300000
              },
              description: "Hello Vue Cesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_ellipsoid, {
                radii: {
                  x: 300000.0,
                  y: 300000.0,
                  z: 300000.0
                },
                outline: true,
                material: [255, 0, 0, 125],
                outlineColor: "black"
              }, null, 8, ["radii"])]),
              _: 1
            }, 512), _createVNode(_component_vc_entity, {
              ref: "entity3",
              position: [100, 40, 300000],
              description: "Hello Vue Cesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_ellipsoid, {
                radii: {
                  x: 200000.0,
                  y: 200000.0,
                  z: 300000.0
                },
                fill: false,
                outline: true,
                outlineColor: "yellow",
                slicePartitions: 24,
                stackPartitions: 36
              }, null, 8, ["radii"])]),
              _: 1
            }, 512)]),
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
          const entity1 = ref(null);
          const entity2 = ref(null);
          const entity3 = ref(null); // methods

          const onEntityEvt = e => {
            console.log(e);
          };

          const onViewerReady = cesiumInstance => {
            console.log('viewer ready');
          }; // life cycle


          onMounted(() => {
            Promise.all([entity1.value.createPromise, entity2.value.createPromise, entity3.value.createPromise]).then(instances => {
              instances[0].viewer.zoomTo(instances[0].viewer.entities);
            });
          });
          return {
            onEntityEvt,
            entity1,
            entity2,
            entity3,
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
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-ellipsoid.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-ellipsoid.md



vc_graphics_ellipsoidvue_type_script_lang_ts.render = vc_graphics_ellipsoidvue_type_template_id_917450f8_render

/* harmony default export */ var vc_graphics_ellipsoid = __webpack_exports__["default"] = (vc_graphics_ellipsoidvue_type_script_lang_ts);

/***/ })

}]);