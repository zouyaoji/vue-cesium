(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/vc-entity.md?vue&type=template&id=a39daee8

var vc_entityvue_type_template_id_a39daee8_hoisted_1 = {
  class: "content element-doc"
};

var vc_entityvue_type_template_id_a39daee8_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcentity\"><a class=\"header-anchor\" href=\"#vcentity\">¶</a> VcEntity</h2><p>Load the solid graphics. It is equivalent to initializing a <code>Cesium.Entity</code> instance.</p><p>It needs to be a sub-component of <code>vc-viewer</code>, <code>vc-datasource-custom</code>, <code>vc-datasource-geojson</code>, <code>vc-datasource-kml</code>, <code>vc-datasource-czml</code> to load normally. When using, you can directly specify the various <code>graphic</code> attributes of <code>vc-entity</code>, and use the <code>vc-graphics-xxx</code> series components provided by VueCesium as the <code>vc-entity</code> sub-components to mount each <code>graphic</code>, but under one entity Only one of the same type <code>grahpic</code> can be mounted. If you need to load a large collection of entity instances, it is recommended to add them under the data source component.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of <code>vc-entity</code>.</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tag to add points, billboards, labels, and rectangle instances on the viewer, and respond to some mouse events.")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-entity\n      ref=\"entity\"\n      :billboard=\"billboard\"\n      :position=\"{lng: 108, lat: 32}\"\n      :point=\"point\"\n      :label=\"label\"\n      @click=\"onEntityEvt\"\n      @mouseover=\"onEntityEvt\"\n      @mouseout=\"onEntityEvt\"\n    >\n      <!-- :coordinates = \"{ west: 130, south: 20, east: 80, north: 25 }\" -->\n      <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n    </vc-entity>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        point: {\n          pixelSize: 28,\n          color: 'red'\n        },\n        label: {\n          text: 'Hello World',\n          pixelOffset: [0, 80]\n        },\n        billboard: {\n          image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n          scale: 0.5\n        }\n      }\n    },\n    methods: {\n      onEntityEvt(e) {\n        console.log(e)\n        if (e.type === 'onmouseover') {\n          this.billboard = {\n            image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n            scale: 0.6\n          }\n        } else if (e.type === 'onmouseout') {\n          this.billboard = {\n            image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n            scale: 0.5\n          }\n        }\n      },\n      unload() {\n        this.$refs.entity.unload()\n      },\n      load() {\n        this.$refs.entity.load()\n      },\n      reload() {\n        this.$refs.entity.reload()\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td></td><td><code>optional</code> A unique identifier for this object. If none is provided, a GUID is generated.</td></tr><tr><td>name</td><td>String</td><td></td><td><code>optional</code> A human readable name to display to users. It does not have to be unique.</td></tr><tr><td>availability</td><td></td><td></td><td><code>optional</code> The availability, if any, associated with this object.</td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean value indicating if the entity and its children are displayed.</td></tr><tr><td>description</td><td></td><td></td><td><code>optional</code> A string Property specifying an HTML description for this entity.</td></tr><tr><td>position</td><td>Object|Array|Function</td><td></td><td><code>optional</code> A Property specifying the entity position.</td></tr><tr><td>orientation</td><td></td><td></td><td><code>optional</code> A Property specifying the entity orientation.</td></tr><tr><td>viewFrom</td><td></td><td></td><td><code>optional</code> A suggested initial offset for viewing this object.</td></tr><tr><td>parent</td><td></td><td></td><td><code>optional</code> A parent entity to associate with this entity.</td></tr><tr><td>billboard</td><td></td><td></td><td><code>optional</code> A billboard to associate with this entity.</td></tr><tr><td>box</td><td></td><td></td><td><code>optional</code> A box to associate with this entity.</td></tr><tr><td>corridor</td><td></td><td></td><td><code>optional</code> A corridor to associate with this entity.</td></tr><tr><td>cylinder</td><td></td><td></td><td><code>optional</code> A cylinder to associate with this entity.</td></tr><tr><td>ellipse</td><td></td><td></td><td><code>optional</code> A ellipse to associate with this entity.</td></tr><tr><td>ellipsoid</td><td></td><td></td><td><code>optional</code> A ellipsoid to associate with this entity.</td></tr><tr><td>label</td><td></td><td></td><td><code>optional</code> A options.label to associate with this entity.</td></tr><tr><td>model</td><td></td><td></td><td><code>optional</code> A model to associate with this entity.</td></tr><tr><td>tileset</td><td></td><td></td><td><code>optional</code> A tileset to associate with this entity.</td></tr><tr><td>path</td><td></td><td></td><td><code>optional</code> A path to associate with this entity.</td></tr><tr><td>plane</td><td></td><td></td><td><code>optional</code> A plane to associate with this entity.</td></tr><tr><td>point</td><td></td><td></td><td><code>optional</code> A point to associate with this entity.</td></tr><tr><td>polygon</td><td></td><td></td><td><code>optional</code> A polygon to associate with this entity.</td></tr><tr><td>polyline</td><td></td><td></td><td><code>optional</code> A polyline to associate with this entity.</td></tr><tr><td>properties</td><td></td><td></td><td><code>optional</code> Arbitrary properties to associate with this entity.</td></tr><tr><td>polylineVolume</td><td></td><td></td><td><code>optional</code> A polylineVolume to associate with this entity.</td></tr><tr><td>rectangle</td><td></td><td></td><td><code>optional</code> A rectangle to associate with this entity.</td></tr><tr><td>wall</td><td></td><td></td><td><code>optional</code> A wall to associate with this entity.</td></tr></tbody></table><div class=\"tip\"><p>Tip: In addition to passing <code>Cesium.Cartesian3</code>, <code>position</code> property can also pass a <code>PlainObject(CartographicInDegreeOption|Cartesian3Option</code>) or <code>Array&lt;number&gt;</code> (degrees)</p></div><div class=\"tipflex\"><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// CartographicInDegreeOption</span>\n{\n  <span class=\"hljs-attr\">lng</span>: number,\n  <span class=\"hljs-attr\">lat</span>: number,\n  <span class=\"hljs-attr\">height</span>: number\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// Cartesian3Option</span>\n{\n  <span class=\"hljs-attr\">x</span>: number,\n  <span class=\"hljs-attr\">y</span>: number,\n  <span class=\"hljs-attr\">z</span>: number\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// Array&lt;number&gt; in degrees</span>\n;[number, number, number]\n</code></pre></div><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>definitionChanged</td><td></td><td>Triggers whenever a property or sub-property is changed or modified.</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse is pressed on the entity.</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse bounces on the entity.</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse clicks on the entity.</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse clicks outside the entity.</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the left mouse button double-clicks the entity.</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves on this entity.</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves to this entity.</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves out of the entity.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/Entity.html\">Entity</a></strong></li></ul>", 8);

function vc_entityvue_type_template_id_a39daee8_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_entityvue_type_template_id_a39daee8_hoisted_1, [vc_entityvue_type_template_id_a39daee8_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/en-US/vc-entity.md?vue&type=template&id=a39daee8

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/vc-entity.md?vue&type=script&lang=ts


/* harmony default export */ var vc_entityvue_type_script_lang_ts = ({
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
        var _component_vc_graphics_rectangle = _resolveComponent("vc-graphics-rectangle");

        var _component_vc_entity = _resolveComponent("vc-entity");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

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
                  billboard: _ctx.billboard,
                  position: {
                    lng: 108,
                    lat: 32
                  },
                  point: _ctx.point,
                  label: _ctx.label,
                  onClick: _ctx.onEntityEvt,
                  onMouseover: _ctx.onEntityEvt,
                  onMouseout: _ctx.onEntityEvt
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_rectangle, {
                      coordinates: [130, 20, 80, 25],
                      material: "green"
                    })];
                  }),
                  _: 1
                }, 8, ["billboard", "point", "label", "onClick", "onMouseover", "onMouseout"])];
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
                }, 8, ["onClick"])];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 512)]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            point: {
              pixelSize: 28,
              color: 'red'
            },
            label: {
              text: 'Hello World',
              pixelOffset: [0, 80]
            },
            billboard: {
              image: 'https://zouyaoji.top/vue-cesium/favicon.png',
              scale: 0.5
            }
          };
        },
        methods: {
          onEntityEvt: function onEntityEvt(e) {
            console.log(e);

            if (e.type === 'onmouseover') {
              this.billboard = {
                image: 'https://zouyaoji.top/vue-cesium/favicon.png',
                scale: 0.6
              };
            } else if (e.type === 'onmouseout') {
              this.billboard = {
                image: 'https://zouyaoji.top/vue-cesium/favicon.png',
                scale: 0.5
              };
            }
          },
          unload: function unload() {
            this.$refs.entity.unload();
          },
          load: function load() {
            this.$refs.entity.load();
          },
          reload: function reload() {
            this.$refs.entity.reload();
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/vc-entity.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/vc-entity.md



vc_entityvue_type_script_lang_ts.render = vc_entityvue_type_template_id_a39daee8_render

/* harmony default export */ var vc_entity = __webpack_exports__["default"] = (vc_entityvue_type_script_lang_ts);

/***/ })

}]);