(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-billboard.md?vue&type=template&id=22b912d6

var vc_graphics_billboardvue_type_template_id_22b912d6_hoisted_1 = {
  class: "content element-doc"
};

var vc_graphics_billboardvue_type_template_id_22b912d6_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcgraphicsbillboard\"><a class=\"header-anchor\" href=\"#vcgraphicsbillboard\">¶</a> VcGraphicsBillboard</h2><p>Loading a billboard graphic. It is equivalent to initializing a <code>Cesium.BillboardGraphics</code> instance.</p><p><strong>Note:</strong> It needs to be a subcomponent of <code>vc-entity</code> to load normally.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of VcGraphicsBillboard component.</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-graphics-billboard"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tag to add a billboard with entity on the viwewer.")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- Load through attributes and load subcomponents separately -->\n    <vc-entity ref=\"entity\" :position=\"position\" @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-billboard\n        ref=\"billboard\"\n        :image=\"image\"\n        :scale=\"scale\"\n        :show=\"show\"\n        :distanceDisplayCondition=\"distanceDisplayCondition\"\n        :horizontalOrigin=\"horizontalOrigin\"\n      ></vc-graphics-billboard>\n    </vc-entity>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    <el-switch v-model=\"show\" active-color=\"#13ce66\" inactive-text=\"Show/Hide\"> </el-switch>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const image = 'https://zouyaoji.top/vue-cesium/favicon.png'\n      const position = { lng: 90, lat: 40, height: 10000 } // [90, 40, 10000]\n      const distanceDisplayCondition = { near: 0, far: 20000000 }\n      const horizontalOrigin = 0\n      const scale = ref(0.25)\n      const show = ref(true)\n      const entity = ref(null)\n      const billboard = ref(null)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n        if (e.type === 'onmouseover') {\n          scale.value = 0.5\n        } else if (e.type === 'onmouseout') {\n          scale.value = 0.25\n        }\n      }\n      const unload = () => {\n        billboard.value.unload()\n      }\n      const reload = () => {\n        billboard.value.reload()\n      }\n      const load = () => {\n        billboard.value.load()\n      }\n      // life cycle\n      onMounted(() => {\n        entity.value.createPromise.then(({ Cesium, viewer, cesiumObject }) => {\n          viewer.zoomTo(cesiumObject)\n        })\n      })\n\n      return {\n        image,\n        position,\n        distanceDisplayCondition,\n        horizontalOrigin,\n        scale,\n        show,\n        onEntityEvt,\n        unload,\n        reload,\n        load,\n        billboard,\n        entity\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying the visibility of the billboard.</td><td></td></tr><tr><td>image</td><td>String|Object</td><td></td><td><code>optional</code> A Property specifying the Image, URI, or Canvas to use for the billboard.</td><td></td></tr><tr><td>scale</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> A numeric Property specifying the scale to apply to the image size.</td><td></td></tr><tr><td>pixelOffset</td><td>Object|Array|Function</td><td><code>{x: 0, y: 0}</code></td><td><code>optional</code> A Cartesian2 Property specifying the pixel offset.</td><td></td></tr><tr><td>eyeOffset</td><td>Object|Array|Function</td><td><code>{x: 0, y: 0, z: 0}</code></td><td><code>optional</code> A Cartesian3 Property specifying the eye offset.</td><td></td></tr><tr><td>horizontalOrigin</td><td>Number</td><td><code>0</code></td><td><code>optional</code> A Property specifying the HorizontalOrigin. <strong>CENTER: 0, LEFT: 1, RIGHT: -1</strong></td><td>0/1/-1</td></tr><tr><td>verticalOrigin</td><td>Number</td><td><code>0</code></td><td><code>optional</code> A Property specifying the VerticalOrigin. <strong>CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1</strong></td><td>0/1/2/-1</td></tr><tr><td>heightReference</td><td>Number</td><td><code>0</code></td><td><code>optional</code> A Property specifying what the height is relative to. <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>color</td><td>Color</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> A Property specifying the tint Color of the image.</td><td></td></tr><tr><td>rotation</td><td>Number</td><td><code>0</code></td><td><code>optional</code> A numeric Property specifying the rotation about the alignedAxis.</td><td></td></tr><tr><td>alignedAxis</td><td>Object|Array|Function</td><td><code>{x: 0, y: 0, z: 0}</code></td><td><code>optional</code> A Cartesian3 Property specifying the unit vector axis of rotation.</td><td></td></tr><tr><td>sizeInMeters</td><td>Boolean</td><td></td><td><code>optional</code> A boolean Property specifying whether this billboard&#39;s size should be measured in meters.</td><td></td></tr><tr><td>width</td><td>Number</td><td></td><td><code>optional</code> A numeric Property specifying the width of the billboard in pixels, overriding the native size.</td><td></td></tr><tr><td>height</td><td>Number</td><td></td><td><code>optional</code> A numeric Property specifying the height of the billboard in pixels, overriding the native size.</td><td></td></tr><tr><td>scaleByDistance</td><td>Object|Array|Function</td><td></td><td><code>optional</code> A NearFarScalar Property used to scale the point based on distance from the camera.</td><td></td></tr><tr><td>translucencyByDistance</td><td>Object|Array|Function</td><td></td><td><code>optional</code> A NearFarScalar Property used to set translucency based on distance from the camera.</td><td></td></tr><tr><td>pixelOffsetScaleByDistance</td><td>Object|Array|Function</td><td></td><td><code>optional</code> A NearFarScalar Property used to set pixelOffset based on distance from the camera.</td><td></td></tr><tr><td>imageSubRegion</td><td>Object</td><td></td><td><code>optional</code> A Property specifying a BoundingRectangle that defines a sub-region of the image to use for the billboard, rather than the entire image, measured in pixels from the bottom-left.</td><td></td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array|Function</td><td></td><td><code>optional</code> A Property specifying at what distance from the camera that this billboard will be displayed.</td><td></td></tr><tr><td>disableDepthTestDistance</td><td>Number</td><td></td><td><code>optional</code> A Property specifying the distance from the camera at which to disable the depth test to.</td><td></td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>definitionChanged</td><td></td><td>Triggers whenever a property or sub-property is changed or modified.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/BillboardGraphics.html\">BillboardGraphics</a></strong></li></ul>", 6);

function vc_graphics_billboardvue_type_template_id_22b912d6_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_graphics_billboardvue_type_template_id_22b912d6_hoisted_1, [vc_graphics_billboardvue_type_template_id_22b912d6_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-billboard.md?vue&type=template&id=22b912d6

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-billboard.md?vue&type=script&lang=ts


/* harmony default export */ var vc_graphics_billboardvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        var _component_vc_graphics_billboard = _resolveComponent("vc-graphics-billboard");

        var _component_vc_entity = _resolveComponent("vc-entity");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_switch = _resolveComponent("el-switch");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_entity, {
                  ref: "entity",
                  position: _ctx.position,
                  onClick: _ctx.onEntityEvt,
                  onMouseover: _ctx.onEntityEvt,
                  onMouseout: _ctx.onEntityEvt
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_billboard, {
                      ref: "billboard",
                      image: _ctx.image,
                      scale: _ctx.scale,
                      show: _ctx.show,
                      distanceDisplayCondition: _ctx.distanceDisplayCondition,
                      horizontalOrigin: _ctx.horizontalOrigin
                    }, null, 8, ["image", "scale", "show", "distanceDisplayCondition", "horizontalOrigin"])];
                  }),
                  _: 1
                }, 8, ["position", "onClick", "onMouseover", "onMouseout"])];
              }),
              _: 1
            }), _createVNode(_component_el_row, {
              class: "demo-toolbar"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.unload
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.load
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.reload
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_3];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_switch, {
                  modelValue: _ctx.show,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.show = $event;
                  }),
                  "active-color": "#13ce66",
                  "inactive-text": "Show/Hide"
                }, null, 8, ["modelValue"])];
              }),
              _: 1
            })];
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
          var image = 'https://zouyaoji.top/vue-cesium/favicon.png';
          var position = {
            lng: 90,
            lat: 40,
            height: 10000
          }; // [90, 40, 10000]

          var distanceDisplayCondition = {
            near: 0,
            far: 20000000
          };
          var horizontalOrigin = 0;
          var scale = ref(0.25);
          var show = ref(true);
          var entity = ref(null);
          var billboard = ref(null); // methods

          var onEntityEvt = function onEntityEvt(e) {
            console.log(e);

            if (e.type === 'onmouseover') {
              scale.value = 0.5;
            } else if (e.type === 'onmouseout') {
              scale.value = 0.25;
            }
          };

          var unload = function unload() {
            billboard.value.unload();
          };

          var reload = function reload() {
            billboard.value.reload();
          };

          var load = function load() {
            billboard.value.load();
          }; // life cycle


          onMounted(function () {
            entity.value.createPromise.then(function (_ref) {
              var Cesium = _ref.Cesium,
                  viewer = _ref.viewer,
                  cesiumObject = _ref.cesiumObject;
              viewer.zoomTo(cesiumObject);
            });
          });
          return {
            image: image,
            position: position,
            distanceDisplayCondition: distanceDisplayCondition,
            horizontalOrigin: horizontalOrigin,
            scale: scale,
            show: show,
            onEntityEvt: onEntityEvt,
            unload: unload,
            reload: reload,
            load: load,
            billboard: billboard,
            entity: entity
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-billboard.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-billboard.md



vc_graphics_billboardvue_type_script_lang_ts.render = vc_graphics_billboardvue_type_template_id_22b912d6_render

/* harmony default export */ var vc_graphics_billboard = __webpack_exports__["default"] = (vc_graphics_billboardvue_type_script_lang_ts);

/***/ })

}]);