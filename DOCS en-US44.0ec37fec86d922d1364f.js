(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-wall.md?vue&type=template&id=50050828

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcgraphicswall\"><a class=\"header-anchor\" href=\"#vcgraphicswall\">¶</a> VcGraphicsWall</h2><p>Loading a wall graphic. It is equivalent to initializing a <code>Cesium.WallGraphics</code> instance.</p><p><strong>Note:</strong> It needs to be a subcomponent of <code>vc-entity</code> to load normally.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of the VcGraphicsWall component.</p>", 5);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-graphics-wall"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add some walls to the viewer.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity description=\"Hello Vue Cesium\" @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-wall\n        ref=\"wall1\"\n        :positions=\"[[-115,44,200000],[-90,44,200000]]\"\n        material=\"red\"\n        :minimumHeights=\"[100000.0, 100000.0]\"\n      ></vc-graphics-wall>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-wall\n        ref=\"wall2\"\n        :positions=\"[-107,43,100000,-97,43,100000,-97,40,100000,-107,40,100000,-107,43,100000]\"\n        material=\"green\"\n        :outline=\"true\"\n      ></vc-graphics-wall>\n    </vc-entity>\n    <vc-entity description=\"Hello Vue Cesium\">\n      <vc-graphics-wall\n        :positions=\"[[-115,50],[-112,50],[-107.5,50],[-105,50],[-102.5,50],[-100,50],[-97.5,50],[-95,50],[-92.5,50],[-90,50]]\"\n        :material=\"[0,0,125,125]\"\n        :outline=\"true\"\n        outlineColor=\"black\"\n        :maximumHeights=\"[100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000]\"\n        :minimumHeights=\"[0, 100000,  0, 100000, 0, 100000, 0, 100000, 0, 100000]\"\n        ref=\"wall3\"\n      ></vc-graphics-wall>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const wall1 = ref(null)\n      const wall2 = ref(null)\n      const wall3 = ref(null)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n      // life cycle\n      onMounted(() => {\n        Promise.all([wall1.value.createPromise, wall2.value.createPromise, wall3.value.createPromise]).then(instances => {\n          instances[0].viewer.zoomTo(instances[0].viewer.entities)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        wall1,\n        wall2,\n        wall3,\n        onViewerReady\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying the visibility of the wall.</td><td></td></tr><tr><td>positions</td><td>Array</td><td></td><td><code>optional</code> A Property specifying the array of Cartesian3 positions which define the top of the wall.</td><td></td></tr><tr><td>minimumHeights</td><td>Array</td><td></td><td><code>optional</code> A Property specifying an array of heights to be used for the bottom of the wall instead of the globe surface.</td><td></td></tr><tr><td>maximumHeights</td><td>Array</td><td></td><td><code>optional</code> A Property specifying an array of heights to be used for the top of the wall instead of the height of each position.</td><td></td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> A numeric Property specifying the angular distance between each latitude and longitude point.</td><td></td></tr><tr><td>fill</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying whether the wall is filled with the provided material.</td><td></td></tr><tr><td>material</td><td>Object|String|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> A Property specifying the material used to fill the wall.</td><td></td></tr><tr><td>outline</td><td>Boolean</td><td>false</td><td><code>optional</code> A boolean Property specifying whether the wall is outlined.</td><td></td></tr><tr><td>outlineColor</td><td>Object|String|Array</td><td><code>&#39;black&#39;</code></td><td><code>optional</code> A Property specifying the Color of the outline.</td><td></td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> A numeric Property specifying the width of the outline.</td><td></td></tr><tr><td>shadows</td><td>Number</td><td><code>0</code></td><td><code>optional</code> An enum Property specifying whether the wall casts or receives shadows from each light source. <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> A Property specifying at what distance from the camera that this wall will be displayed.</td><td></td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>definitionChanged</td><td></td><td>Triggers whenever a property or sub-property is changed or modified.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/WallGraphics.html\">WallGraphics</a></strong></li></ul>", 6);

function vc_graphics_wallvue_type_template_id_50050828_render(_ctx, _cache, $props, $setup, $data, $options) {
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
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-wall.md?vue&type=template&id=50050828

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-wall.md?vue&type=script&lang=ts

/* harmony default export */ var vc_graphics_wallvue_type_script_lang_ts = ({
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
        const _component_vc_graphics_wall = _resolveComponent("vc-graphics-wall");

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
              description: "Hello Vue Cesium",
              onClick: _ctx.onEntityEvt,
              onMouseover: _ctx.onEntityEvt,
              onMouseout: _ctx.onEntityEvt
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_wall, {
                ref: "wall1",
                positions: [[-115, 44, 200000], [-90, 44, 200000]],
                material: "red",
                minimumHeights: [100000.0, 100000.0]
              }, null, 8, ["minimumHeights"])]),
              _: 1
            }, 8, ["onClick", "onMouseover", "onMouseout"]), _createVNode(_component_vc_entity, {
              description: "Hello Vue Cesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_wall, {
                ref: "wall2",
                positions: [-107, 43, 100000, -97, 43, 100000, -97, 40, 100000, -107, 40, 100000, -107, 43, 100000],
                material: "green",
                outline: true
              }, null, 512)]),
              _: 1
            }), _createVNode(_component_vc_entity, {
              description: "Hello Vue Cesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_wall, {
                positions: [[-115, 50], [-112, 50], [-107.5, 50], [-105, 50], [-102.5, 50], [-100, 50], [-97.5, 50], [-95, 50], [-92.5, 50], [-90, 50]],
                material: [0, 0, 125, 125],
                outline: true,
                outlineColor: "black",
                maximumHeights: [100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000, 100000, 200000],
                minimumHeights: [0, 100000, 0, 100000, 0, 100000, 0, 100000, 0, 100000],
                ref: "wall3"
              }, null, 8, ["positions"])]),
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
          const wall1 = ref(null);
          const wall2 = ref(null);
          const wall3 = ref(null); // methods

          const onEntityEvt = e => {
            console.log(e);
          };

          const onViewerReady = cesiumInstance => {
            console.log('viewer ready');
          }; // life cycle


          onMounted(() => {
            Promise.all([wall1.value.createPromise, wall2.value.createPromise, wall3.value.createPromise]).then(instances => {
              instances[0].viewer.zoomTo(instances[0].viewer.entities);
            });
          });
          return {
            onEntityEvt,
            wall1,
            wall2,
            wall3,
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
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-wall.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-wall.md



vc_graphics_wallvue_type_script_lang_ts.render = vc_graphics_wallvue_type_template_id_50050828_render

/* harmony default export */ var vc_graphics_wall = __webpack_exports__["default"] = (vc_graphics_wallvue_type_script_lang_ts);

/***/ })

}]);