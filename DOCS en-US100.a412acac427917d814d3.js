(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/registry.npmjs.org+vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmjs.org+babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/registry.npmjs.org+vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/registry.npmjs.org+vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/vc-entity.md?vue&type=template&id=6120e111

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};
const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>Load the solid graphics. It is equivalent to initializing a <code>Cesium.Entity</code> instance.</p><p>It needs to be a sub-component of <code>vc-viewer</code>, <code>vc-datasource-custom</code>, <code>vc-datasource-geojson</code>, <code>vc-datasource-kml</code>, <code>vc-datasource-czml</code> to load normally. When using, you can directly specify the various <code>graphic</code> attributes of <code>vc-entity</code>, and use the <code>vc-graphics-xxx</code> series components provided by VueCesium as the <code>vc-entity</code> sub-components to mount each <code>graphic</code>, but under one entity Only one of the same type <code>grahpic</code> can be mounted. If you need to load a large collection of entity instances, it is recommended to add them under the data source component.</p>", 2);
const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(".")], -1);
const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add points, billboards, labels, and rectangle instances on the viewer, and respond to some mouse events.")])], -1);
const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-entity\n      ref=\"entity\"\n      :billboard=\"billboard\"\n      :position=\"{lng: 108, lat: 32}\"\n      :point=\"point\"\n      :label=\"label\"\n      @click=\"onEntityEvt\"\n      @mouseover=\"onEntityEvt\"\n      @mouseout=\"onEntityEvt\"\n    >\n      <!-- :coordinates = \"{ west: 130, south: 20, east: 80, north: 25 }\" -->\n      <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n    </vc-entity>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        point: {\n          pixelSize: 28,\n          color: 'red'\n        },\n        label: {\n          text: 'Hello World',\n          pixelOffset: [0, 80]\n        },\n        billboard: {\n          image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n          scale: 0.5\n        }\n      }\n    },\n    methods: {\n      onEntityEvt(e) {\n        console.log(e)\n        if (e.type === 'onmouseover') {\n          this.billboard = {\n            image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n            scale: 0.6\n          }\n        } else if (e.type === 'onmouseout') {\n          this.billboard = {\n            image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n            scale: 0.5\n          }\n        }\n      },\n      unload() {\n        this.$refs.entity.unload()\n      },\n      load() {\n        this.$refs.entity.load()\n      },\n      reload() {\n        this.$refs.entity.reload()\n      }\n    }\n  }\n</script>\n")], -1);
const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>id</td><td>string</td><td></td><td><code>optional</code> A unique identifier for this object. If none is provided, a GUID is generated.</td></tr><tr><td>name</td><td>string</td><td></td><td><code>optional</code> A human readable name to display to users. It does not have to be unique.</td></tr><tr><td>availability</td><td>Cesium.TimeIntervalCollection</td><td></td><td><code>optional</code> The availability, if any, associated with this object.</td></tr><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> A boolean value indicating if the entity and its children are displayed.</td></tr><tr><td>description</td><td>string | Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;string&gt;</td><td></td><td><code>optional</code> A string Property specifying an HTML description for this entity.</td></tr><tr><td>position</td><td>VcPosition|Array|Function</td><td></td><td><code>optional</code> A Property specifying the entity position.</td></tr><tr><td>orientation</td><td>Cesium.Quaternion | Cesium.VelocityOrientationProperty | Cesium.CallbackProperty</td><td></td><td><code>optional</code> A Property specifying the entity orientation.</td></tr><tr><td>viewFrom</td><td>VcPosition | Cesium.CallbackProperty</td><td></td><td><code>optional</code> A suggested initial offset for viewing this object.</td></tr><tr><td>parent</td><td>Cesium.Entity</td><td></td><td><code>optional</code> A parent entity to associate with this entity.</td></tr><tr><td>billboard</td><td>Cesium.BillboardGraphics | VcGraphicsBillboardProps</td><td></td><td><code>optional</code> A billboard to associate with this entity.</td></tr><tr><td>box</td><td>Cesium.BoxGraphics | VcGraphicsBoxProps</td><td></td><td><code>optional</code> A box to associate with this entity.</td></tr><tr><td>corridor</td><td>Cesium.CorridorGraphics | VcGraphicsCorridorProps</td><td></td><td><code>optional</code> A corridor to associate with this entity.</td></tr><tr><td>cylinder</td><td>Cesium.CylinderGraphics | VcGraphicsCylinderProps</td><td></td><td><code>optional</code> A cylinder to associate with this entity.</td></tr><tr><td>ellipse</td><td>Cesium.EllipseGraphics | VcGraphicsEllipseProps</td><td></td><td><code>optional</code> A ellipse to associate with this entity.</td></tr><tr><td>ellipsoid</td><td>Cesium.EllipsoidGraphics | VcGraphicsEllipsoidProps</td><td></td><td><code>optional</code> A ellipsoid to associate with this entity.</td></tr><tr><td>label</td><td>Cesium.LabelGraphics | VcGraphicsLabelProps</td><td></td><td><code>optional</code> A options.label to associate with this entity.</td></tr><tr><td>model</td><td>Cesium.ModelGraphics | VcGraphicsModelProps</td><td></td><td><code>optional</code> A model to associate with this entity.</td></tr><tr><td>tileset</td><td>Cesium.Cesium3DTilesetGraphics | VcGraphicsTilesetProps</td><td></td><td><code>optional</code> A tileset to associate with this entity.</td></tr><tr><td>path</td><td>Cesium.PathGraphics | VcGraphicsPathProps</td><td></td><td><code>optional</code> A path to associate with this entity.</td></tr><tr><td>plane</td><td>Cesium.PlaneGraphics | VcGraphicsPlaneProps</td><td></td><td><code>optional</code> A plane to associate with this entity.</td></tr><tr><td>point</td><td>Cesium.PointGraphics | VcGraphicsPointProps</td><td></td><td><code>optional</code> A point to associate with this entity.</td></tr><tr><td>polygon</td><td>Cesium.PolygonGraphics | VcGraphicsPolygonProps</td><td></td><td><code>optional</code> A polygon to associate with this entity.</td></tr><tr><td>polyline</td><td>Cesium.PolylineGraphics | VcGraphicsPolylineProps</td><td></td><td><code>optional</code> A polyline to associate with this entity.</td></tr><tr><td>properties</td><td>AnyObject</td><td></td><td><code>optional</code> Arbitrary properties to associate with this entity.</td></tr><tr><td>polylineVolume</td><td>Cesium.PolylineVolumeGraphics | VcGraphicsPolylineVolumeProps</td><td></td><td><code>optional</code> A polylineVolume to associate with this entity.</td></tr><tr><td>rectangle</td><td>Cesium.RectangleGraphics | VcGraphicsRectangleProps</td><td></td><td><code>optional</code> A rectangle to associate with this entity.</td></tr><tr><td>wall</td><td>Cesium.WallGraphics | VcGraphicsWallProps</td><td></td><td><code>optional</code> A wall to associate with this entity.</td></tr></tbody></table><div class=\"tip\"><p>Tip: In addition to passing <code>Cesium.Cartesian3</code>, <code>position</code> property can also pass a <code>PlainObject(CartographicInDegreeOption|Cartesian3Option</code>) or <code>Array&lt;number&gt;</code> (degrees)</p></div><div class=\"tipflex\"><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// CartographicInDegreeOption</span>\n{\n  <span class=\"hljs-attr\">lng</span>: number,\n  <span class=\"hljs-attr\">lat</span>: number,\n  <span class=\"hljs-attr\">height</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// Cartesian3Option</span>\n{\n  <span class=\"hljs-attr\">x</span>: number,\n  <span class=\"hljs-attr\">y</span>: number,\n  <span class=\"hljs-attr\">z</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// Array&lt;number&gt; in degrees</span>\n;[number, number, number]\n</code><span class=\"lang-mark\">js</span></pre></div>", 3);
const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>definitionChanged</td><td>(property: Cesium.Property)</td><td>Triggers whenever a property or sub-property is changed or modified.</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse is pressed on the entity.</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse bounces on the entity.</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks on the entity.</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks outside the entity.</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>Triggers when the left mouse button double-clicks the entity.</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves on this entity.</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves to this entity.</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves out of the entity.</td></tr></tbody></table>", 1);
const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Subtags")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "This is where vc-graphic-xxx content goes."), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-graphic-billboard/vc-graphic-box/vc-graphic-corridor/vc-graphic-cylinder/vc-graphic-ellipse/vc-graphic-ellipsoid/vc-graphic-label/vc-graphic-model/vc-graphic-tileset/vc-graphic-path/vc-graphic-plane/vc-graphic-point/vc-graphic-polygon/vc-graphic-polyline/vc-graphic-polylineVolume/vc-graphic-rectangle/vc-graphic-wall")])])], -1);
function vc_entityvue_type_template_id_6120e111_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");
  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");
  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");
  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");
  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcentity",
    tabindex: "-1",
    content: "VcEntity",
    href: "#vcentity",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcEntity "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcentity"
    })]),
    _: 1
  }), _hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Basic usage "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_4, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Props "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Events "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "slots",
    tabindex: "-1",
    content: "Slots",
    href: "#slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Slots "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slots"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Reference "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: "), Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/Entity.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Entity")]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/vc-entity.md?vue&type=template&id=6120e111

// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmjs.org+babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/registry.npmjs.org+vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/vc-entity.md?vue&type=script&lang=ts

/* harmony default export */ var vc_entityvue_type_script_lang_ts = ({
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
      function render(_ctx, _cache) {
        const _component_vc_graphics_rectangle = _resolveComponent("vc-graphics-rectangle");
        const _component_vc_entity = _resolveComponent("vc-entity");
        const _component_vc_viewer = _resolveComponent("vc-viewer");
        const _component_el_button = _resolveComponent("el-button");
        const _component_el_row = _resolveComponent("el-row");
        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_entity, {
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
              default: _withCtx(() => [_createVNode(_component_vc_graphics_rectangle, {
                coordinates: [130, 20, 80, 25],
                material: "green"
              })]),
              _: 1
            }, 8, ["billboard", "point", "label", "onClick", "onMouseover", "onMouseout"])]),
            _: 1
          }), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_createTextVNode("Unload")]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_createTextVNode("Load")]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_createTextVNode("Reload")]),
              _: 1
            }, 8, ["onClick"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }
      const democomponentExport = {
        data() {
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
          onEntityEvt(e) {
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
          unload() {
            this.$refs.entity.unload();
          },
          load() {
            this.$refs.entity.load();
          },
          reload() {
            this.$refs.entity.reload();
          }
        }
      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/vc-entity.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/vc-entity.md



vc_entityvue_type_script_lang_ts.render = vc_entityvue_type_template_id_6120e111_render

/* harmony default export */ var vc_entity = __webpack_exports__["default"] = (vc_entityvue_type_script_lang_ts);

/***/ })

}]);