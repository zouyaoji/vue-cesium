(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[200],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.33/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_xtlouzbwsjm2tieu75n2ogelwy/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/vc-entity.md?vue&type=template&id=53c87597

const vc_entityvue_type_template_id_53c87597_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_entityvue_type_template_id_53c87597_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcEntity ");

const vc_entityvue_type_template_id_53c87597_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<p>加载实体图形，相当于初始化一个 <code>Cesium.Entity</code> 实例。</p><p>需要作为 <code>vc-viewer</code>, <code>vc-datasource-custom</code>, <code>vc-datasource-geojson</code>, <code>vc-datasource-kml</code>, <code>vc-datasource-czml</code> 的子组件才能正常加载。使用时可以直接指定 <code>vc-entity</code> 的各个 <code>graphic</code> 属性，也用 VueCesium 提供的 <code>vc-graphics-xxx</code> 系列组件作为 <code>vc-entity</code> 子组件挂载各个 <code>graphic</code>，但一个实体下同类型 <code>grahpic</code> 只能挂载一个。如果需要加载大量实体实例集合，建议添加到数据源组件下。</p>", 2);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "实体实例组件的基础用法。", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加点、布告板、标签、矩形实体实例，并响应一些鼠标事件。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- 通过属性加载 和 子组件分别加载 -->\n    <vc-entity\n      ref=\"entity\"\n      :billboard=\"billboard\"\n      :position=\"position\"\n      :point=\"point\"\n      :label=\"label\"\n      @click=\"onEntityEvt\"\n      @mouseover=\"onEntityEvt\"\n      @mouseout=\"onEntityEvt\"\n    >\n      <!-- :coordinates = \"{ west: 130, south: 20, east: 80, north: 25 }\" -->\n      <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n    </vc-entity>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        point: {\n          pixelSize: 28,\n          color: 'red'\n        },\n        label: {\n          text: 'Hello World',\n          pixelOffset: [0, 80]\n        },\n        billboard: {\n          image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n          scale: 0.5\n        },\n        position: { lng: 108, lat: 32 }\n      }\n    },\n    methods: {\n      onEntityEvt(e) {\n        console.log(e)\n        window.vm = this\n        if (e.type === 'onmouseover') {\n          this.billboard = {\n            image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n            scale: 0.6\n          }\n        } else if (e.type === 'onmouseout') {\n          this.billboard = {\n            image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n            scale: 0.5\n          }\n        }\n      },\n      unload() {\n        this.$refs.entity.unload()\n      },\n      load() {\n        this.$refs.entity.load()\n      },\n      reload() {\n        this.$refs.entity.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>string</td><td></td><td><code>optional</code> 指定 entity 的唯一标识符。如果没有提供，则生成 GUID。</td></tr><tr><td>name</td><td>string</td><td></td><td><code>optional</code> 指定 entity 名称，名称可不必唯一。</td></tr><tr><td>availability</td><td>Cesium.TimeIntervalCollection</td><td></td><td><code>optional</code> 指定 entity 关联的可用性参数。</td></tr><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定 entity 及其子项是否显示。</td></tr><tr><td>description</td><td>string | Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;string&gt;</td><td></td><td><code>optional</code> 指定 entity 的 HTML 描述信息。</td></tr><tr><td>position</td><td>VcPosition|Array|Function</td><td></td><td><code>optional</code> 指定 entity 的位置。</td></tr><tr><td>orientation</td><td>Cesium.Quaternion | Cesium.VelocityOrientationProperty | Cesium.CallbackProperty</td><td></td><td><code>optional</code> 指定 entity 的方向。</td></tr><tr><td>viewFrom</td><td>VcPosition | Cesium.CallbackProperty</td><td></td><td><code>optional</code> 指定 entity 的初始偏移量。</td></tr><tr><td>parent</td><td>Cesium.Entity</td><td></td><td><code>optional</code> 指定 entity 关联的父实体。</td></tr><tr><td>billboard</td><td>Cesium.BillboardGraphics | VcGraphicsBillboardProps</td><td></td><td><code>optional</code> 指定 entity 关联的布告板。</td></tr><tr><td>box</td><td>Cesium.BoxGraphics | VcGraphicsBoxProps</td><td></td><td><code>optional</code> 指定 entity 关联的盒子对象。</td></tr><tr><td>corridor</td><td>Cesium.CorridorGraphics | VcGraphicsCorridorProps</td><td></td><td><code>optional</code> 指定 entity 关联的走廊对象。</td></tr><tr><td>cylinder</td><td>Cesium.CylinderGraphics | VcGraphicsCylinderProps</td><td></td><td><code>optional</code> 指定 entity 关联的圆柱对象。</td></tr><tr><td>ellipse</td><td>Cesium.EllipseGraphics | VcGraphicsEllipseProps</td><td></td><td><code>optional</code> 指定 entity 关联的椭圆对象。</td></tr><tr><td>ellipsoid</td><td>Cesium.EllipsoidGraphics | VcGraphicsEllipsoidProps</td><td></td><td><code>optional</code> 指定 entity 关联的椭球体对象。</td></tr><tr><td>label</td><td>Cesium.LabelGraphics | VcGraphicsLabelProps</td><td></td><td><code>optional</code> 指定 entity 关联的标签对象。</td></tr><tr><td>model</td><td>Cesium.ModelGraphics | VcGraphicsModelProps</td><td></td><td><code>optional</code> 指定 entity 关联的模型对象。</td></tr><tr><td>tileset</td><td>Cesium.Cesium3DTilesetGraphics | VcGraphicsTilesetProps</td><td></td><td><code>optional</code> 指定 entity 关联的 tileset 对象。</td></tr><tr><td>path</td><td>Cesium.PathGraphics | VcGraphicsPathProps</td><td></td><td><code>optional</code> 指定 entity 关联的路径对象。</td></tr><tr><td>plane</td><td>Cesium.PlaneGraphics | VcGraphicsPlaneProps</td><td></td><td><code>optional</code> 指定 entity 关联的平面对象。</td></tr><tr><td>point</td><td>Cesium.PointGraphics | VcGraphicsPointProps</td><td></td><td><code>optional</code> 指定 entity 关联的点对象。</td></tr><tr><td>polygon</td><td>Cesium.PolygonGraphics | VcGraphicsPolygonProps</td><td></td><td><code>optional</code> 指定 entity 关联的多边形对象。</td></tr><tr><td>polyline</td><td>Cesium.PolylineGraphics | VcGraphicsPolylineProps</td><td></td><td><code>optional</code> 指定 entity 关联的折线对象。</td></tr><tr><td>properties</td><td>AnyObject</td><td></td><td><code>optional</code> 指定 entity 关联的属性。</td></tr><tr><td>polylineVolume</td><td>Cesium.PolylineVolumeGraphics | VcGraphicsPolylineVolumeProps</td><td></td><td><code>optional</code> 指定 entity 关联的多线段柱体对象。</td></tr><tr><td>rectangle</td><td>Cesium.RectangleGraphics | VcGraphicsRectangleProps</td><td></td><td><code>optional</code> 指定 entity 关联的矩形对象。</td></tr><tr><td>wall</td><td>Cesium.WallGraphics | VcGraphicsWallProps</td><td></td><td><code>optional</code> 指定 entity 关联的墙对象。</td></tr></tbody></table><div class=\"tip\"><p>提示：<code>position</code> 属性除了可传 <code>Cesium.Cartesian3</code> 还可以传 <code>PlainObject(CartographicInDegreeOption|Cartesian3Option</code>) 和 <code>Array&lt;number&gt;</code> (度)</p></div><div class=\"tipflex\"><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// CartographicInDegreeOption</span>\n{\n  <span class=\"hljs-attr\">lng</span>: number,\n  <span class=\"hljs-attr\">lat</span>: number,\n  <span class=\"hljs-attr\">height</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// Cartesian3Option</span>\n{\n  <span class=\"hljs-attr\">x</span>: number,\n  <span class=\"hljs-attr\">y</span>: number,\n  <span class=\"hljs-attr\">z</span>: number\n}\n</code><span class=\"lang-mark\">js</span></pre><pre class=\"example-code\"><code class=\"hljs language-js\"><span class=\"hljs-comment\">// Array&lt;number&gt; in degrees</span>\n;[number, number, number]\n</code><span class=\"lang-mark\">js</span></pre></div>", 3);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>definitionChanged</td><td>(property: Cesium.Property)</td><td>每当更改或修改属性或子属性时触发该事件。</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>鼠标在该实体上按下时触发。</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>鼠标在该实体上弹起时触发。</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>鼠标单击该实体时触发。</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>鼠标单击该实体外部时触发。</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>鼠标左键双击该实体时触发。</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>鼠标在该实体上移动时触发。</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>鼠标移动到该实体时触发。</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>鼠标移出该实体时触发。</td></tr></tbody></table>", 1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("插槽 ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "插槽名"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "描述"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "子组件")])]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "可放 vc-graphic-xxx 子组件。"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "vc-graphic-billboard/vc-graphic-box/vc-graphic-corridor/vc-graphic-cylinder/vc-graphic-ellipse/vc-graphic-ellipsoid/vc-graphic-label/vc-graphic-model/vc-graphic-tileset/vc-graphic-path/vc-graphic-plane/vc-graphic-point/vc-graphic-polygon/vc-graphic-polyline/vc-graphic-polylineVolume/vc-graphic-rectangle/vc-graphic-wall")])])], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("官方文档： ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Entity");

function vc_entityvue_type_template_id_53c87597_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_entityvue_type_template_id_53c87597_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcentity",
    tabindex: "-1",
    content: "VcEntity",
    href: "#vcentity",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_entityvue_type_template_id_53c87597_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcentity"
    })]),
    _: 1
  }), vc_entityvue_type_template_id_53c87597_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    tabindex: "-1",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-jian",
    tabindex: "-1",
    content: "事件",
    href: "#shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), _hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "cha-cao",
    tabindex: "-1",
    content: "插槽",
    href: "#cha-cao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#cha-cao"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "can-kao",
    tabindex: "-1",
    content: "参考",
    href: "#can-kao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_17, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#can-kao"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_18, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/Entity.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_19]),
    _: 1
  })])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/vc-entity.md?vue&type=template&id=53c87597

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_xtlouzbwsjm2tieu75n2ogelwy/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_fitqpr7w7mry5zwvh45opzxdee/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/vc-entity.md?vue&type=script&lang=ts

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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

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
              position: _ctx.position,
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
            }, 8, ["billboard", "position", "point", "label", "onClick", "onMouseover", "onMouseout"])]),
            _: 1
          }), _createVNode(_component_el_row, {
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
            },
            position: {
              lng: 108,
              lat: 32
            }
          };
        },

        methods: {
          onEntityEvt(e) {
            console.log(e);
            window.vm = this;

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
// CONCATENATED MODULE: ./website/docs/zh-CN/vc-entity.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/vc-entity.md



vc_entityvue_type_script_lang_ts.render = vc_entityvue_type_template_id_53c87597_render

/* harmony default export */ var vc_entity = __webpack_exports__["default"] = (vc_entityvue_type_script_lang_ts);

/***/ })

}]);