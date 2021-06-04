(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/primitives/vc-collection-label.md?vue&type=template&id=7ef3c106

var vc_collection_labelvue_type_template_id_7ef3c106_hoisted_1 = {
  class: "content element-doc"
};

var vc_collection_labelvue_type_template_id_7ef3c106_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h2", {
  id: "vccollectionlabel"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vccollectionlabel"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" VcCollectionLabel")], -1);

var vc_collection_labelvue_type_template_id_7ef3c106_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Loading a renderable collection of labels. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "Cesium.LabelCollection"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" instance. It is recommended to use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "labels"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" prop to express when rendering massive labels.")], -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" Basic usage")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "Basic usage of VcCollectionLabel component.", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-collection-label"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" and "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-label"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tag to add a label primitive collection object to the viewer.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-collection-label @click=\"onClicked\" ref=\"collectionRef\" :labels=\"labels\" @mouseout=\"onMouseout\" @mouseover=\"onMouseover\">\n      <vc-label\n        v-for=\"(polyline, index) of polylines\"\n        :position=\"polyline.positions[polyline.positions.length-1]\"\n        :key=\"'label'+index\"\n        :text=\"'Area'+(polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡')\"\n        showBackground\n        :horizontalOrigin=\"1\"\n      ></vc-label>\n    </vc-collection-label>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const collectionRef = ref(null)\n      const labels = ref([])\n      const instance = getCurrentInstance()\n      const polylines = [\n        {\n          positions: [\n            { lng: 105.24884033203125, lat: 25.313117980957031, height: 1183.3186645507812 },\n            { lng: 108.24906555725647, lat: 30.312892755731806, height: 1183.3186645507812 }\n          ],\n          area: 100000.3\n        },\n        {\n          positions: [\n            { lng: 109.24884033203125, lat: 30.313392639160156, height: 1183.804443359375 },\n            { lng: 112.24906555725632, lat: 35.31316741393502, height: 1183.6849884241819 }\n          ],\n          area: 8000.658\n        },\n        {\n          positions: [\n            { lng: 113.24884033203125, lat: 35.313655853271484, height: 1184.2783203125 },\n            { lng: 116.24906555725632, lat: 40.313430628046348, height: 1184.1093236654997 }\n          ],\n          area: 200000.55\n        }\n      ]\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        collectionRef.value.unload()\n      }\n      const reload = () => {\n        collectionRef.value.reload()\n      }\n      const load = () => {\n        collectionRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        for (var i = 0; i < 100; i++) {\n          let label = {}\n          label.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }\n          label.text = i.toString()\n          labels.value.push(label)\n        }\n      }\n      const onMouseover = e => {\n        console.log(e)\n        if (e.cesiumObject instanceof Cesium.Label) {\n          this.scale = 1.5 // or e.cesiumObject.scale = 1.5\n          e.pickedFeature.primitive.scale = 1.5\n        } else if (e.cesiumObject instanceof Cesium.LabelCollection) {\n          e.pickedFeature.primitive.scale = 1.5\n        }\n      }\n\n      const onMouseout = e => {\n        console.log(e)\n        if (e.cesiumObject instanceof Cesium.Label) {\n          this.scale = 1 // or e.cesiumObject.scale = 1\n        } else if (e.cesiumObject instanceof Cesium.LabelCollection) {\n          e.pickedFeature.primitive.scale = 1\n        }\n      }\n\n      return {\n        unload,\n        reload,\n        load,\n        onClicked,\n        onMouseout,\n        onMouseover,\n        onViewerReady,\n        collectionRef,\n        labels,\n        polylines\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>modelMatrix</td><td>Object</td><td></td><td><code>optional</code> The 4x4 transformation matrix that transforms each billboard from model to world coordinates.</td><td></td></tr><tr><td>debugShowBoundingVolume</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> For debugging only. Determines if this primitive&#39;s commands&#39; bounding spheres are shown.</td><td></td></tr><tr><td>scene</td><td>Object</td><td></td><td><code>optional</code> Must be passed in for billboards that use the height reference property or will be depth tested against the globe.</td><td></td></tr><tr><td>blendOption</td><td>Number</td><td></td><td><code>optional</code> The billboard blending option. The default is used for rendering both opaque and translucent billboards. However, if either all of the billboards are completely opaque or all are completely translucent, setting the technique to BlendOption.OPAQUE or BlendOption.TRANSLUCENT can improve performance by up to 2x. <strong>OPAQUE: 0, TRANSLUCENT: 1, OPAQUE_AND_TRANSLUCENT: 2</strong></td><td>0/1/2</td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Determines if the primitives in the collection will be shown.</td><td></td></tr><tr><td>labels</td><td>Array</td><td><code>[]</code></td><td><code>optional</code> Specify an array of label collections. The structure of the array object is the same as the attribute of the <code>vc-label</code> component.</td><td></td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the mouse event takes effect.</td><td></td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse is pressed on this primitive.</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse bounces up on this primitive.</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse clicks on the primitive.</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse clicks outside the primitive.</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the left mouse button double-clicks the primitive.</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves on this primitive.</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves to this primitive.</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves out of this primitive.</td></tr></tbody></table><h3 id=\"vclabel\"><a class=\"header-anchor\" href=\"#vclabel\">¶</a> VcLabel</h3><p>Loading a viewport-aligned text positioned in the 3D scene. It is equivalent to initializing a <code>Cesium.Label</code> instance.</p><p><strong>Note:</strong> It needs to be a subcomponent of <code>vc-collection-billboard</code> to load normally.</p><h3 id=\"vclabel-props\"><a class=\"header-anchor\" href=\"#vclabel-props\">¶</a> VcLabel Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>backgroundColor</td><td>Object|Array|String</td><td><code>{ x: 0.165, y: 0.165, z: 0.165, w: 0.8 }</code></td><td><code>optional</code> The background color of this label.</td><td></td></tr><tr><td>backgroundPadding</td><td>Object|Array</td><td></td><td><code>optional</code> The background padding, in pixels, of this label.</td><td></td></tr><tr><td>disableDepthTestDistance</td><td>Number</td><td></td><td><code>optional</code> The distance from the camera at which to disable the depth test to, for example, prevent clipping against terrain. When set to zero, the depth test is always applied. When set to Number.POSITIVE_INFINITY, the depth test is never applied.</td><td></td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> The condition specifying at what distance from the camera that this label will be displayed.</td><td></td></tr><tr><td>eyeOffset</td><td>Object\\Array</td><td><code>{x: 0, y: 0, z: 0}</code></td><td><code>optional</code> The 3D Cartesian offset applied to this label in eye coordinates.</td><td></td></tr><tr><td>fillColor</td><td>Object|String|Array</td><td><code>white</code></td><td><code>optional</code> The fill color of this label.</td><td></td></tr><tr><td>font</td><td>String</td><td><code>&#39;30px sans-serif&#39;</code></td><td><code>optional</code> The font used to draw this label. Fonts are specified using the same syntax as the CSS &#39;font&#39; property.</td><td></td></tr><tr><td>heightReference</td><td>Number</td><td><code>0</code></td><td><code>optional</code> The height reference of this billboard. <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>horizontalOrigin</td><td>Number</td><td><code>0</code></td><td><code>optional</code> The horizontal origin of this label, which determines if the label is drawn to the left, center, or right of its anchor position. <strong>CENTER: 0, LEFT: 1, RIGHT: -1</strong></td><td>0/1/-1</td></tr><tr><td>id</td><td>*</td><td></td><td><code>optional</code> The user-defined value returned when the label is picked.</td><td></td></tr><tr><td>outlineColor</td><td>Object|Array|String</td><td><code>&#39;black&#39;</code></td><td><code>optional</code> The outline color of this label.</td><td></td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>0</code></td><td><code>optional</code> The outline width of this label.</td><td></td></tr><tr><td>pixelOffset</td><td>Object|Array</td><td><code>{x: 0, y: 0}</code></td><td><code>optional</code> The pixel offset in screen space from the origin of this label.</td><td></td></tr><tr><td>pixelOffsetScaleByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> The near and far pixel offset scaling properties of a Label based on the Label&#39;s distance from the camera.</td><td></td></tr><tr><td>position</td><td>Object</td><td></td><td><code>optional</code> The position of this label.</td><td></td></tr><tr><td>scale</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> The uniform scale that is multiplied with the label&#39;s size in pixels.</td><td></td></tr><tr><td>scaleByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> The near and far scaling properties of a Label based on the label&#39;s distance from the camera.</td><td></td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Determines if this label will be shown. Use this to hide or show a label, instead of removing it and re-adding it to the collection.</td><td></td></tr><tr><td>showBackground</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Determines if a background behind this label will be shown.</td><td></td></tr><tr><td>labelStyle</td><td>Number</td><td><code>0</code></td><td><code>optional</code> The style of this label. <strong>FILL: 0, OUTLINE: 1, FILL_AND_OUTLINE: 2</strong></td><td>0/1/2</td></tr><tr><td>text</td><td>String</td><td></td><td><code>optional</code> The text of this label.</td><td></td></tr><tr><td>totalScale</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> The total scale of the label, which is the label&#39;s scale multiplied by the computed relative size of the desired font compared to the generated glyph size.</td><td></td></tr><tr><td>translucencyByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> The near and far translucency properties of a Label based on the Label&#39;s distance from the camera.</td><td></td></tr><tr><td>verticalOrigin</td><td>Number</td><td><code>0</code></td><td><code>optional</code> The vertical origin of this label, which determines if the label is to the above, below, or at the center of its anchor position.<strong>CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1</strong></td><td>0/1/2/-1</td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the mouse event takes effect.</td><td></td></tr></tbody></table><h3 id=\"vclabel-events\"><a class=\"header-anchor\" href=\"#vclabel-events\">¶</a> VcLabel Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse is pressed on this primitive.</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse bounces up on this primitive.</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse clicks on the primitive.</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse clicks outside the primitive.</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the left mouse button double-clicks the primitive.</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves on this primitive.</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves to this primitive.</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves out of this primitive.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/LabelCollection.html\">LabelCollection</a></strong>、<strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/Label.html\">Label</a></strong></li></ul>", 13);

function vc_collection_labelvue_type_template_id_7ef3c106_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_collection_labelvue_type_template_id_7ef3c106_hoisted_1, [vc_collection_labelvue_type_template_id_7ef3c106_hoisted_2, vc_collection_labelvue_type_template_id_7ef3c106_hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_vue_cesium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_7];
    }),
    default: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_6];
    }),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-collection-label.md?vue&type=template&id=7ef3c106

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/primitives/vc-collection-label.md?vue&type=script&lang=ts


/* harmony default export */ var vc_collection_labelvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _renderList = vue_esm_browser["M" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        var _component_vc_label = _resolveComponent("vc-label");

        var _component_vc_collection_label = _resolveComponent("vc-collection-label");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

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
                return [_createVNode(_component_vc_collection_label, {
                  onClick: _ctx.onClicked,
                  ref: "collectionRef",
                  labels: _ctx.labels,
                  onMouseout: _ctx.onMouseout,
                  onMouseover: _ctx.onMouseover
                }, {
                  default: _withCtx(function () {
                    return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.polylines, function (polyline, index) {
                      return _openBlock(), _createBlock(_component_vc_label, {
                        position: polyline.positions[polyline.positions.length - 1],
                        key: 'label' + index,
                        text: 'Area' + (polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡'),
                        showBackground: "",
                        horizontalOrigin: 1
                      }, null, 8, ["position", "text"]);
                    }), 128))];
                  }),
                  _: 1
                }, 8, ["onClick", "labels", "onMouseout", "onMouseover"])];
              }),
              _: 1
            }, 8, ["onReady"]), _createVNode(_component_el_row, {
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
                }, 8, ["onClick"])];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 512)]);
      }

      var ref = vue_esm_browser["K" /* ref */],
          reactive = vue_esm_browser["J" /* reactive */],
          getCurrentInstance = vue_esm_browser["q" /* getCurrentInstance */],
          onMounted = vue_esm_browser["C" /* onMounted */],
          watch = vue_esm_browser["bb" /* watch */];
      var democomponentExport = {
        setup: function setup() {
          var _this = this;

          // state
          var collectionRef = ref(null);
          var labels = ref([]);
          var instance = getCurrentInstance();
          var polylines = [{
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

          var onClicked = function onClicked(e) {
            console.log(e);
          };

          var unload = function unload() {
            collectionRef.value.unload();
          };

          var reload = function reload() {
            collectionRef.value.reload();
          };

          var load = function load() {
            collectionRef.value.load();
          };

          var onViewerReady = function onViewerReady(_ref) {
            var Cesium = _ref.Cesium,
                viewer = _ref.viewer;

            for (var i = 0; i < 100; i++) {
              var label = {};
              label.position = {
                lng: Math.random() * 40 + 85,
                lat: Math.random() * 30 + 21
              };
              label.text = i.toString();
              labels.value.push(label);
            }
          };

          var onMouseover = function onMouseover(e) {
            console.log(e);

            if (e.cesiumObject instanceof Cesium.Label) {
              _this.scale = 1.5; // or e.cesiumObject.scale = 1.5

              e.pickedFeature.primitive.scale = 1.5;
            } else if (e.cesiumObject instanceof Cesium.LabelCollection) {
              e.pickedFeature.primitive.scale = 1.5;
            }
          };

          var onMouseout = function onMouseout(e) {
            console.log(e);

            if (e.cesiumObject instanceof Cesium.Label) {
              _this.scale = 1; // or e.cesiumObject.scale = 1
            } else if (e.cesiumObject instanceof Cesium.LabelCollection) {
              e.pickedFeature.primitive.scale = 1;
            }
          };

          return {
            unload: unload,
            reload: reload,
            load: load,
            onClicked: onClicked,
            onMouseout: onMouseout,
            onMouseover: onMouseover,
            onViewerReady: onViewerReady,
            collectionRef: collectionRef,
            labels: labels,
            polylines: polylines
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-collection-label.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-collection-label.md



vc_collection_labelvue_type_script_lang_ts.render = vc_collection_labelvue_type_template_id_7ef3c106_render

/* harmony default export */ var vc_collection_label = __webpack_exports__["default"] = (vc_collection_labelvue_type_script_lang_ts);

/***/ })

}]);