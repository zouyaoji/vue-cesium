(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-cylinder.md?vue&type=template&id=69f81a5a

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcgraphicscylinder\"><a class=\"header-anchor\" href=\"#vcgraphicscylinder\">¶</a> VcGraphicsCylinder</h2><p>Loading a cylinder graphic. It is equivalent to initializing a <code>Cesium.CylinderGraphics</code> instance.</p><p><strong>Note:</strong> It needs to be a subcomponent of <code>vc-entity</code> to load normally.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of the VcGraphicsCylinder component.</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-graphics-cylinder"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tag to add some cylinders to the viewer.")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity\n      ref=\"entity1\"\n      :position=\"[105, 40, 200000]\"\n      description=\"Hello Vue Cesium\"\n      @click=\"onEntityEvt\"\n      @mouseover=\"onEntityEvt\"\n      @mouseout=\"onEntityEvt\"\n    >\n      <vc-graphics-cylinder\n        :length=\"400000.0\"\n        :topRadius=\"200000.0\"\n        :bottomRadius=\"200000.0\"\n        :material=\"[0,128,0,125]\"\n        :outline=\"true\"\n        outlineColor=\"#006400\"\n      ></vc-graphics-cylinder>\n    </vc-entity>\n    <vc-entity ref=\"entity2\" :position=\"[110, 40, 200000]\" description=\"Hello Vue Cesium\">\n      <vc-graphics-cylinder :length=\"400000.0\" :topRadius=\"0.0\" :bottomRadius=\"200000.0\" material=\"RED\"></vc-graphics-cylinder>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const entity1 = ref(null)\n      const entity2 = ref(null)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n      // life cycle\n      onMounted(() => {\n        Promise.all([entity1.value.createPromise, entity2.value.createPromise]).then(instances => {\n          instances[0].viewer.zoomTo(instances[0].viewer.entities)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        entity1,\n        entity2,\n        onViewerReady\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying the visibility of the cylinder.</td><td></td></tr><tr><td>length</td><td>Array</td><td></td><td><code>optional</code> A numeric Property specifying the length of the cylinder.</td><td></td></tr><tr><td>topRadius</td><td>Number</td><td></td><td><code>optional</code> A numeric Property specifying the radius of the top of the cylinder.</td><td></td></tr><tr><td>bottomRadius</td><td>Number</td><td></td><td><code>optional</code> A numeric Property specifying the radius of the bottom of the cylinder.</td><td></td></tr><tr><td>heightReference</td><td>Number</td><td><code>0</code></td><td><code>optional</code> A Property specifying what the height from the entity position is relative to. <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>fill</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying whether the cylinder is filled with the provided material.</td><td></td></tr><tr><td>material</td><td>Object|String|Array</td><td><code>&#39;WHITE&#39;</code></td><td><code>optional</code> A Property specifying the material used to fill the cylinder.</td><td></td></tr><tr><td>outline</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> A boolean Property specifying whether the cylinder is outlined.</td><td></td></tr><tr><td>outlineColor</td><td>Object|String|Array</td><td><code>&#39;BLACK&#39;</code></td><td><code>optional</code> A Property specifying the Color of the outline.</td><td></td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> A numeric Property specifying the width of the outline.</td><td></td></tr><tr><td>numberOfVerticalLines</td><td>Number</td><td><code>16</code></td><td><code>optional</code> A numeric Property specifying the number of vertical lines to draw along the perimeter for the outline.</td><td></td></tr><tr><td>slices</td><td>Number</td><td><code>128</code></td><td><code>optional</code> The number of edges around the perimeter of the cylinder.</td><td></td></tr><tr><td>shadows</td><td>Number</td><td><code>0</code></td><td><code>optional</code> An enum Property specifying whether the cylinder casts or receives shadows from each light source. <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> A Property specifying at what distance from the camera that this cylinder will be displayed.</td><td></td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>definitionChanged</td><td></td><td>Triggers whenever a property or sub-property is changed or modified.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/CylinderGraphics.html\">CylinderGraphics</a></strong></li></ul>", 6);

function vc_graphics_cylindervue_type_template_id_69f81a5a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-cylinder.md?vue&type=template&id=69f81a5a

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-cylinder.md?vue&type=script&lang=ts


/* harmony default export */ var vc_graphics_cylindervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_vc_graphics_cylinder = _resolveComponent("vc-graphics-cylinder");

        var _component_vc_entity = _resolveComponent("vc-entity");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, {
              onReady: _ctx.onViewerReady
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_entity, {
                  ref: "entity1",
                  position: [105, 40, 200000],
                  description: "Hello Vue Cesium",
                  onClick: _ctx.onEntityEvt,
                  onMouseover: _ctx.onEntityEvt,
                  onMouseout: _ctx.onEntityEvt
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_cylinder, {
                      length: 400000.0,
                      topRadius: 200000.0,
                      bottomRadius: 200000.0,
                      material: [0, 128, 0, 125],
                      outline: true,
                      outlineColor: "#006400"
                    }, null, 8, ["length", "topRadius", "bottomRadius"])];
                  }),
                  _: 1
                }, 8, ["onClick", "onMouseover", "onMouseout"]), _createVNode(_component_vc_entity, {
                  ref: "entity2",
                  position: [110, 40, 200000],
                  description: "Hello Vue Cesium"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_cylinder, {
                      length: 400000.0,
                      topRadius: 0.0,
                      bottomRadius: 200000.0,
                      material: "RED"
                    }, null, 8, ["length", "topRadius", "bottomRadius"])];
                  }),
                  _: 1
                }, 512)];
              }),
              _: 1
            }, 8, ["onReady"])];
          }),
          _: 1
        }, 512)]);
      }

      var ref = vue_esm_browser["K" /* ref */],
          getCurrentInstance = vue_esm_browser["q" /* getCurrentInstance */],
          onMounted = vue_esm_browser["C" /* onMounted */];
      var democomponentExport = {
        setup: function setup() {
          // state
          var entity1 = ref(null);
          var entity2 = ref(null); // methods

          var onEntityEvt = function onEntityEvt(e) {
            console.log(e);
          };

          var onViewerReady = function onViewerReady(cesiumInstance) {
            console.log('viewer ready');
          }; // life cycle


          onMounted(function () {
            Promise.all([entity1.value.createPromise, entity2.value.createPromise]).then(function (instances) {
              instances[0].viewer.zoomTo(instances[0].viewer.entities);
            });
          });
          return {
            onEntityEvt: onEntityEvt,
            entity1: entity1,
            entity2: entity2,
            onViewerReady: onViewerReady
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-cylinder.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-cylinder.md



vc_graphics_cylindervue_type_script_lang_ts.render = vc_graphics_cylindervue_type_template_id_69f81a5a_render

/* harmony default export */ var vc_graphics_cylinder = __webpack_exports__["default"] = (vc_graphics_cylindervue_type_script_lang_ts);

/***/ })

}]);