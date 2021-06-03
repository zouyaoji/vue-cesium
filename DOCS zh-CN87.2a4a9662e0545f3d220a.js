(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[176],{

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/vc-entity.md?vue&type=template&id=478b7650

var vc_entityvue_type_template_id_478b7650_hoisted_1 = {
  class: "content element-doc"
};

var vc_entityvue_type_template_id_478b7650_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcentity\"><a class=\"header-anchor\" href=\"#vcentity\">¶</a> VcEntity</h2><p>加载实体图形，相当于初始化一个 <code>Cesium.Entity</code> 实例。</p><p>需要作为 <code>vc-viewer</code>, <code>vc-datasource-custom</code>, <code>vc-datasource-geojson</code>, <code>vc-datasource-kml</code>, <code>vc-datasource-czml</code> 的子组件才能正常加载。使用时可以直接指定 <code>vc-entity</code> 的各个 <code>graphic</code> 属性，也用 VueCesium 提供的 <code>vc-graphics-xxx</code> 系列组件作为 <code>vc-entity</code> 子组件挂载各个 <code>graphic</code>，但一个实体下同类型 <code>grahpic</code> 只能挂载一个。如果需要加载大量实体实例集合，建议添加到数据源组件下。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>实体实例组件的基础用法。</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加点、布告板、标签、矩形实体实例，并响应一些鼠标事件。")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- 通过属性加载 和 子组件分别加载 -->\n    <vc-entity\n      ref=\"entity\"\n      :billboard=\"billboard\"\n      :position=\"{lng: 108, lat: 32}\"\n      :point=\"point\"\n      :label=\"label\"\n      @click=\"onEntityEvt\"\n      @mouseover=\"onEntityEvt\"\n      @mouseout=\"onEntityEvt\"\n    >\n      <!-- :coordinates = \"{ west: 130, south: 20, east: 80, north: 25 }\" -->\n      <vc-graphics-rectangle :coordinates=\"[130, 20, 80, 25]\" material=\"green\"></vc-graphics-rectangle>\n    </vc-entity>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        point: {\n          pixelSize: 28,\n          color: 'red'\n        },\n        label: {\n          text: 'Hello World',\n          pixelOffset: [0, 80]\n        },\n        billboard: {\n          image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n          scale: 0.5\n        }\n      }\n    },\n    methods: {\n      onEntityEvt(e) {\n        console.log(e)\n        if (e.type === 'onmouseover') {\n          this.billboard = {\n            image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n            scale: 0.6\n          }\n        } else if (e.type === 'onmouseout') {\n          this.billboard = {\n            image: 'https://zouyaoji.top/vue-cesium/favicon.png',\n            scale: 0.5\n          }\n        }\n      },\n      unload() {\n        this.$refs.entity.unload()\n      },\n      load() {\n        this.$refs.entity.load()\n      },\n      reload() {\n        this.$refs.entity.reload()\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>String</td><td></td><td><code>optional</code> 指定 entity 的唯一标识符。如果没有提供，则生成 GUID。</td></tr><tr><td>name</td><td>String</td><td></td><td><code>optional</code> 指定 entity 名称，名称可不必唯一。</td></tr><tr><td>availability</td><td></td><td></td><td><code>optional</code> 指定 entity 关联的可用性参数。</td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 entity 及其子项是否显示。</td></tr><tr><td>description</td><td></td><td></td><td><code>optional</code> 指定 entity 的 HTML 描述信息。</td></tr><tr><td>position</td><td>Object|Array|Function</td><td></td><td><code>optional</code> 指定 entity 的位置。</td></tr><tr><td>orientation</td><td></td><td></td><td><code>optional</code> 指定 entity 的方向。</td></tr><tr><td>viewFrom</td><td></td><td></td><td><code>optional</code> 指定 entity 的初始偏移量。</td></tr><tr><td>parent</td><td></td><td></td><td><code>optional</code> 指定 entity 关联的父实体。</td></tr><tr><td>billboard</td><td></td><td></td><td><code>optional</code> 指定 entity 关联的布告板。</td></tr><tr><td>box</td><td></td><td></td><td><code>optional</code> 指定 entity 关联的盒子对象。</td></tr><tr><td>corridor</td><td></td><td></td><td><code>optional</code> 指定 entity 关联的走廊对象。</td></tr><tr><td>cylinder</td><td></td><td></td><td><code>optional</code> 指定 entity 关联的圆柱对象。</td></tr><tr><td>ellipse</td><td></td><td></td><td><code>optional</code> 指定 entity 关联的椭圆对象。</td></tr><tr><td>ellipsoid</td><td></td><td></td><td><code>optional</code> 指定 entity 关联的椭球体对象。</td></tr><tr><td>label</td><td></td><td></td><td><code>optional</code> 指定 entity 关联的标签对象。</td></tr><tr><td>model</td><td></td><td></td><td><code>optional</code> 指定 entity 关联的模型对象。</td></tr><tr><td>tileset</td><td></td><td></td><td><code>optional</code> 指定 entity 关联的 tileset 对象。</td></tr><tr><td>path</td><td></td><td></td><td><code>optional</code> 指定 entity 关联的路径对象。</td></tr><tr><td>plane</td><td></td><td></td><td><code>optional</code> 指定 entity 关联的平面对象。</td></tr><tr><td>point</td><td></td><td></td><td><code>optional</code> 指定 entity 关联的点对象。</td></tr><tr><td>polygon</td><td></td><td></td><td><code>optional</code> 指定 entity 关联的多边形对象。</td></tr><tr><td>polyline</td><td></td><td></td><td><code>optional</code> 指定 entity 关联的折线对象。</td></tr><tr><td>properties</td><td></td><td></td><td><code>optional</code> 指定 entity 关联的属性。</td></tr><tr><td>polylineVolume</td><td></td><td></td><td><code>optional</code> 指定 entity 关联的多线段柱体对象。</td></tr><tr><td>rectangle</td><td></td><td></td><td><code>optional</code> 指定 entity 关联的矩形对象。</td></tr><tr><td>wall</td><td></td><td></td><td><code>optional</code> 指定 entity 关联的墙对象。</td></tr></tbody></table><div class=\"tip\"><p>提示：<code>position</code> 属性除了可传 <code>Cesium.Cartesian3</code> 还可以传 <code>PlainObject(CartographicInDegreeOption|Cartesian3Option</code>) 和 <code>Array&lt;number&gt;</code> (度)</p></div><div class=\"tipflex\"><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// CartographicInDegreeOption</span>\n{\n  <span class=\"hljs-attr\">lng</span>: number,\n  <span class=\"hljs-attr\">lat</span>: number,\n  <span class=\"hljs-attr\">height</span>: number\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// Cartesian3Option</span>\n{\n  <span class=\"hljs-attr\">x</span>: number,\n  <span class=\"hljs-attr\">y</span>: number,\n  <span class=\"hljs-attr\">z</span>: number\n}\n</code></pre><pre><code class=\"hljs language-js\"><span class=\"hljs-comment\">// Array&lt;number&gt; in degrees</span>\n;[number, number, number]\n</code></pre></div><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>definitionChanged</td><td></td><td>每当更改或修改属性或子属性时触发该事件。</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该实体上按下时触发。</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该实体上弹起时触发。</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该实体时触发。</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该实体外部时触发。</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标左键双击该实体时触发。</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该实体上移动时触发。</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移动到该实体时触发。</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移出该实体时触发。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <a href=\"https://cesium.com/docs/cesiumjs-ref-doc/Entity.html\">Entity</a></li></ul>", 8);

function vc_entityvue_type_template_id_478b7650_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_entityvue_type_template_id_478b7650_hoisted_1, [vc_entityvue_type_template_id_478b7650_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/vc-entity.md?vue&type=template&id=478b7650

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/vc-entity.md?vue&type=script&lang=ts


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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

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
// CONCATENATED MODULE: ./website/docs/zh-CN/vc-entity.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/vc-entity.md



vc_entityvue_type_script_lang_ts.render = vc_entityvue_type_template_id_478b7650_render

/* harmony default export */ var vc_entity = __webpack_exports__["default"] = (vc_entityvue_type_script_lang_ts);

/***/ })

}]);