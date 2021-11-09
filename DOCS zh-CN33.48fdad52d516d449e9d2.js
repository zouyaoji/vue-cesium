(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[122],{

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-ellipse.md?vue&type=template&id=f6ab67de

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcgraphicsellipse\"><a class=\"header-anchor\" href=\"#vcgraphicsellipse\">¶</a> VcGraphicsEllipse</h2><p>加载圆柱、圆锥、圆台实体，相当于初始化一个 <code>Cesium.EllipseGraphics</code> 实例。</p><p><strong>注意：</strong> 需要作为 <code>vc-entity</code> 的子组件才能正常加载。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>椭圆实体组件的基础用法。</p>", 5);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-graphics-ellipse"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加圆柱和圆锥体。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-entity\n      ref=\"entity1\"\n      :position=\"[111, 40, 150000]\"\n      description=\"Hello Vue Cesium\"\n      @click=\"onEntityEvt\"\n      @mouseover=\"onEntityEvt\"\n      @mouseout=\"onEntityEvt\"\n    >\n      <vc-graphics-ellipse\n        :semiMinorAxis=\"300000.0\"\n        :semiMajorAxis=\"300000.0\"\n        :height=\"200000.0\"\n        material=\"green\"\n        :outline=\"true\"\n      ></vc-graphics-ellipse>\n    </vc-entity>\n    <vc-entity ref=\"entity2\" :position=\"[103, 40]\" description=\"Hello Vue Cesium\">\n      <vc-graphics-ellipse :semiMinorAxis=\"250000.0\" :semiMajorAxis=\"400000.0\" :material=\"[255, 0, 0, 125]\"></vc-graphics-ellipse>\n    </vc-entity>\n    <vc-entity ref=\"entity3\" :position=\"[95, 40, 100000]\" description=\"Hello Vue Cesium\">\n      <vc-graphics-ellipse\n        :semiMinorAxis=\"150000.0\"\n        :semiMajorAxis=\"300000.0\"\n        :extrudedHeight=\"200000.0\"\n        :rotation=\"45/180\"\n        :material=\"[0, 0, 255, 125]\"\n        :outline=\"true\"\n      ></vc-graphics-ellipse>\n    </vc-entity>\n  </vc-viewer>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const entity1 = ref(null)\n      const entity2 = ref(null)\n      const entity3 = ref(null)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = cesiumInstance => {\n        console.log('viewer ready')\n      }\n      // life cycle\n      onMounted(() => {\n        Promise.all([entity1.value.createPromise, entity2.value.createPromise, entity3.value.createPromise]).then(instances => {\n          instances[0].viewer.zoomTo(instances[0].viewer.entities)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        entity1,\n        entity2,\n        entity3,\n        onViewerReady\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 ellipse 是否显示。</td><td></td></tr><tr><td>semiMajorAxis</td><td>Number</td><td></td><td><code>optional</code> 指定 ellipse 长半轴。</td><td></td></tr><tr><td>semiMinorAxis</td><td>Number</td><td></td><td><code>optional</code> 指定 ellipse 短半轴。</td><td></td></tr><tr><td>height</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 ellipse 高度。</td><td></td></tr><tr><td>heightReference</td><td>Number</td><td></td><td><code>optional</code> 指定 ellipse 高度模式。 <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>extrudedHeight</td><td>Number</td><td></td><td><code>optional</code> 指定 ellipse 拉伸高度。</td><td></td></tr><tr><td>extrudedHeightReference</td><td>Number</td><td></td><td><code>optional</code> 指定 ellipse 拉伸高度模式。 <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>rotation</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> 指定 ellipse 正北逆时针旋转角度。</td><td></td></tr><tr><td>stRotation</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> 指定 ellipse 纹理正北逆时针旋转角度。</td><td></td></tr><tr><td>granularity</td><td>Number</td><td></td><td><code>optional</code> 指定每个经纬度之间的采样粒度。</td><td></td></tr><tr><td>fill</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 ellipse 是否填充材质。</td><td></td></tr><tr><td>material</td><td>Object|String|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> 指定 ellipse 材质。</td><td></td></tr><tr><td>outline</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定 ellipse 是否绘制轮廓线。</td><td></td></tr><tr><td>outlineColor</td><td>Object|String|Array</td><td><code>&#39;black&#39;</code></td><td><code>optional</code> 指定 ellipse 轮廓线颜色。</td><td></td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定 ellipse 轮廓线宽度。</td><td></td></tr><tr><td>numberOfVerticalLines</td><td>Number</td><td><code>16</code></td><td><code>optional</code> 指定 ellipse 沿轮廓周长绘制的垂直线数。</td><td></td></tr><tr><td>shadows</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 ellipse 是否投射接收每一个光源的阴影。 <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 ellipse 随相机距离的显示条件。</td><td></td></tr><tr><td>classificationType</td><td>Number</td><td><code>2</code></td><td><code>optional</code> 指定 ellipse 的贴地模式。 <strong>TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2</strong></td><td>0/1/2</td></tr><tr><td>zIndex</td><td>Number</td><td></td><td><code>optional</code> 指定 ellipse 顺序，没有高度和拉伸高度才有效。</td><td></td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>definitionChanged</td><td></td><td>每当更改或修改属性或子属性时触发该事件。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/EllipseGraphics.html\">EllipseGraphics</a></strong></li></ul>", 6);

function vc_graphics_ellipsevue_type_template_id_f6ab67de_render(_ctx, _cache, $props, $setup, $data, $options) {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-ellipse.md?vue&type=template&id=f6ab67de

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-ellipse.md?vue&type=script&lang=ts

/* harmony default export */ var vc_graphics_ellipsevue_type_script_lang_ts = ({
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
        const _component_vc_graphics_ellipse = _resolveComponent("vc-graphics-ellipse");

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
              position: [111, 40, 150000],
              description: "Hello Vue Cesium",
              onClick: _ctx.onEntityEvt,
              onMouseover: _ctx.onEntityEvt,
              onMouseout: _ctx.onEntityEvt
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_ellipse, {
                semiMinorAxis: 300000.0,
                semiMajorAxis: 300000.0,
                height: 200000.0,
                material: "green",
                outline: true
              }, null, 8, ["semiMinorAxis", "semiMajorAxis", "height"])]),
              _: 1
            }, 8, ["onClick", "onMouseover", "onMouseout"]), _createVNode(_component_vc_entity, {
              ref: "entity2",
              position: [103, 40],
              description: "Hello Vue Cesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_ellipse, {
                semiMinorAxis: 250000.0,
                semiMajorAxis: 400000.0,
                material: [255, 0, 0, 125]
              }, null, 8, ["semiMinorAxis", "semiMajorAxis"])]),
              _: 1
            }, 512), _createVNode(_component_vc_entity, {
              ref: "entity3",
              position: [95, 40, 100000],
              description: "Hello Vue Cesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_ellipse, {
                semiMinorAxis: 150000.0,
                semiMajorAxis: 300000.0,
                extrudedHeight: 200000.0,
                rotation: 45 / 180,
                material: [0, 0, 255, 125],
                outline: true
              }, null, 8, ["semiMinorAxis", "semiMajorAxis", "extrudedHeight"])]),
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
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-ellipse.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-ellipse.md



vc_graphics_ellipsevue_type_script_lang_ts.render = vc_graphics_ellipsevue_type_template_id_f6ab67de_render

/* harmony default export */ var vc_graphics_ellipse = __webpack_exports__["default"] = (vc_graphics_ellipsevue_type_script_lang_ts);

/***/ })

}]);