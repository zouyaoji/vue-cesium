(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-label.md?vue&type=template&id=91257a62

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcgraphicslabel\"><a class=\"header-anchor\" href=\"#vcgraphicslabel\">¶</a> VcGraphicsLabel</h2><p>Loading a label graphic. It is equivalent to initializing a <code>Cesium.LabelGraphics</code> instance.</p><p><strong>Note:</strong> It needs to be a subcomponent of <code>vc-entity</code> to load normally.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of the VcGraphicsLabel component.</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-graphics-label"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tag to add a label to the viewer.")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity :position=\"[114, 40, 300000]\" description=\"Hello Vue Cesium\" @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-label text=\"Hello Vue Cesium\" font=\"20px sans-serif\" :pixelOffset=\"[0, 20]\" fillColor=\"red\"></vc-graphics-label>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n\n      return {\n        onEntityEvt,\n        onViewerReady\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying the visibility of the label.</td><td></td></tr><tr><td>text</td><td>String</td><td></td><td><code>optional</code> A Property specifying the text. Explicit newlines &#39;\\n&#39; are supported.</td><td></td></tr><tr><td>font</td><td>String</td><td><code>&#39;30px sans-serif&#39;</code></td><td><code>optional</code> A Property specifying the CSS font.</td><td></td></tr><tr><td>labelStyle</td><td>Number</td><td><code>0</code></td><td><code>optional</code> A Property specifying the LabelStyle. <strong>FILL: 0, OUTLINE: 1, FILL_AND_OUTLINE: 2</strong></td><td>0/1/2</td></tr><tr><td>scale</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> A numeric Property specifying the scale to apply to the text.</td><td></td></tr><tr><td>showBackground</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> A boolean Property specifying the visibility of the background behind the label.</td><td></td></tr><tr><td>backgroundColor</td><td>Object|String|Array</td><td><code>{ x: 0.165, y: 0.165, z: 0.165, w: 0.8 }</code></td><td><code>optional</code> A Property specifying the background Color.</td><td></td></tr><tr><td>backgroundPadding</td><td>Object|Array</td><td><code>{x: 7, y: 5}</code></td><td><code>optional</code> A Cartesian2 Property specifying the horizontal and vertical background padding in pixels.</td><td></td></tr><tr><td>pixelOffset</td><td>Object|Array</td><td><code>{x: 0, y: 0 }</code></td><td><code>optional</code> A Cartesian2 Property specifying the pixel offset.</td><td></td></tr><tr><td>eyeOffset</td><td>Object|Array</td><td><code>{x: 0, y: 0, z: 0}</code></td><td><code>optional</code> A Cartesian3 Property specifying the eye offset.</td><td></td></tr><tr><td>horizontalOrigin</td><td>Number</td><td><code>0</code></td><td><code>optional</code> A Property specifying the HorizontalOrigin.</td><td></td></tr><tr><td>verticalOrigin</td><td>Number</td><td><code>0</code></td><td><code>optional</code> A Property specifying the VerticalOrigin.</td><td></td></tr><tr><td>heightReference</td><td>Number</td><td><code>0</code></td><td><code>optional</code> A Property specifying what the height is relative to.</td><td></td></tr><tr><td>fillColor</td><td>Object|String|Array</td><td><code>white</code></td><td><code>optional</code> A Property specifying the fill Color.</td><td></td></tr><tr><td>outlineColor</td><td>Object|String|Array</td><td><code>black</code></td><td><code>optional</code> A Property specifying the outline Color.</td><td></td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> A numeric Property specifying the outline width.</td><td></td></tr><tr><td>translucencyByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> A NearFarScalar Property used to set translucency based on distance from the camera.</td><td></td></tr><tr><td>pixelOffsetScaleByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> A NearFarScalar Property used to set pixelOffset based on distance from the camera.</td><td></td></tr><tr><td>scaleByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> A NearFarScalar Property used to set scale based on distance from the camera.</td><td></td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> A Property specifying at what distance from the camera that this label will be displayed.</td><td></td></tr><tr><td>disableDepthTestDistance</td><td>Number</td><td></td><td><code>optional</code> A Property specifying the distance from the camera at which to disable the depth test to.</td><td></td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>definitionChanged</td><td></td><td>Triggers whenever a property or sub-property is changed or modified.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/LabelGraphics.html\">LabelGraphics</a></strong></li></ul>", 6);

function vc_graphics_labelvue_type_template_id_91257a62_render(_ctx, _cache, $props, $setup, $data, $options) {
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
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-label.md?vue&type=template&id=91257a62

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-label.md?vue&type=script&lang=ts


/* harmony default export */ var vc_graphics_labelvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_vc_graphics_label = _resolveComponent("vc-graphics-label");

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
                  position: [114, 40, 300000],
                  description: "Hello Vue Cesium",
                  onClick: _ctx.onEntityEvt,
                  onMouseover: _ctx.onEntityEvt,
                  onMouseout: _ctx.onEntityEvt
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_label, {
                      text: "Hello Vue Cesium",
                      font: "20px sans-serif",
                      pixelOffset: [0, 20],
                      fillColor: "red"
                    })];
                  }),
                  _: 1
                }, 8, ["onClick", "onMouseover", "onMouseout"])];
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
          // methods
          var onEntityEvt = function onEntityEvt(e) {
            console.log(e);
          };

          var onViewerReady = function onViewerReady(cesiumInstance) {
            console.log('viewer ready');
          };

          return {
            onEntityEvt: onEntityEvt,
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
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-label.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-label.md



vc_graphics_labelvue_type_script_lang_ts.render = vc_graphics_labelvue_type_template_id_91257a62_render

/* harmony default export */ var vc_graphics_label = __webpack_exports__["default"] = (vc_graphics_labelvue_type_script_lang_ts);

/***/ })

}]);