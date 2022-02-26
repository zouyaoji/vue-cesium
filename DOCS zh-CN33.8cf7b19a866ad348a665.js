(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[126],{

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-billboard.md?vue&type=template&id=1e9f5773

const vc_graphics_billboardvue_type_template_id_1e9f5773_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_graphics_billboardvue_type_template_id_1e9f5773_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcGraphicsBillboard ");

const vc_graphics_billboardvue_type_template_id_1e9f5773_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载布告板实体，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.BillboardGraphics"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例。")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "注意："), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 需要作为 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 的子组件挂载才能正常加载。")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "布告板组件的基础用法。", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-graphics-billboard"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加实体布告板。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <!-- 通过属性加载 和 子组件分别加载 -->\n    <vc-entity ref=\"entity\" :position=\"position\" @click=\"onEntityEvt\" @mouseover=\"onEntityEvt\" @mouseout=\"onEntityEvt\">\n      <vc-graphics-billboard\n        ref=\"billboard\"\n        :image=\"image\"\n        :scale=\"scale\"\n        :show=\"show\"\n        :distance-display-condition=\"distanceDisplayCondition\"\n        :horizontal-origin=\"horizontalOrigin\"\n      ></vc-graphics-billboard>\n    </vc-entity>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    <el-switch v-model=\"show\" active-color=\"#13ce66\" inactive-text=\"显示/隐藏\"> </el-switch>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const image = 'https://zouyaoji.top/vue-cesium/favicon.png'\n      const position = { lng: 90, lat: 40, height: 10000 } // [90, 40, 10000]\n      const distanceDisplayCondition = { near: 0, far: 20000000 }\n      const horizontalOrigin = 0\n      const scale = ref(0.25)\n      const show = ref(true)\n      const entity = ref(null)\n      const billboard = ref(null)\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n        if (e.type === 'onmouseover') {\n          scale.value = 0.5\n        } else if (e.type === 'onmouseout') {\n          scale.value = 0.25\n        }\n      }\n      const unload = () => {\n        billboard.value.unload()\n      }\n      const reload = () => {\n        billboard.value.reload()\n      }\n      const load = () => {\n        billboard.value.load()\n      }\n      // life cycle\n      onMounted(() => {\n        entity.value.createPromise.then(({ Cesium, viewer, cesiumObject }) => {\n          viewer.zoomTo(cesiumObject)\n        })\n      })\n\n      return {\n        image,\n        position,\n        distanceDisplayCondition,\n        horizontalOrigin,\n        scale,\n        show,\n        onEntityEvt,\n        unload,\n        reload,\n        load,\n        billboard,\n        entity\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定 billboard 是否显示。</td><td></td></tr><tr><td>image</td><td>string | HTMLCanvasElement |Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;string&gt;</td><td></td><td><code>optional</code> 指定 billboard 加载的的 Image、 URI 或者 Canvas。</td><td></td></tr><tr><td>scale</td><td>number | Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;number&gt;</td><td><code>1.0</code></td><td><code>optional</code> 指定 billboard 图片的缩放比例。</td><td></td></tr><tr><td>pixelOffset</td><td>VcCartesian2</td><td><code>{x: 0, y: 0}</code></td><td><code>optional</code> 指定 billboard 像素偏移。</td><td></td></tr><tr><td>eyeOffset</td><td>VcPosition</td><td><code>{x: 0, y: 0, z: 0}</code></td><td><code>optional</code> 指定 billboard 视角偏移。</td><td></td></tr><tr><td>horizontalOrigin</td><td>number | Cesium.HorizontalOrigin | VcCallbackPropertyFunction&lt;number&gt;</td><td><code>0</code></td><td><code>optional</code> 指定 billboard 水平对齐方式。 <strong>CENTER: 0, LEFT: 1, RIGHT: -1</strong></td><td>0/1/-1</td></tr><tr><td>verticalOrigin</td><td>number | Cesium.VerticalOrigin | VcCallbackPropertyFunction&lt;number&gt;</td><td><code>0</code></td><td><code>optional</code> 指定 billboard 垂直对齐方式。<strong>CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1</strong></td><td>0/1/2/-1</td></tr><tr><td>heightReference</td><td>number | Cesium.HeightReference | VcCallbackPropertyFunction&lt;number&gt;</td><td><code>0</code></td><td><code>optional</code> 指定 billboard 高度模式。<strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>color</td><td>VcColor</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> 指定 billboard 图片的颜色。</td><td></td></tr><tr><td>rotation</td><td>number | Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;number&gt;</td><td><code>0</code></td><td><code>optional</code> 指定 billboard 沿 x 轴方向旋转的角度。</td><td></td></tr><tr><td>alignedAxis</td><td>VcPosition</td><td><code>{x: 0, y: 0, z: 0}</code></td><td><code>optional</code> 指定 billboard 按单位矢量轴旋转参数。</td><td></td></tr><tr><td>sizeInMeters</td><td>boolean | Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;boolean&gt;</td><td></td><td><code>optional</code> 指定 billboard 的单位是否是米。</td><td></td></tr><tr><td>width</td><td>number | Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;number&gt;</td><td></td><td><code>optional</code> 指定 billboard 的宽度（像素）。</td><td></td></tr><tr><td>height</td><td>number | Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;number&gt;</td><td></td><td><code>optional</code> 指定 billboard 的高度（像素）。</td><td></td></tr><tr><td>scaleByDistance</td><td>VcNearFarScalar</td><td></td><td><code>optional</code> 指定 billboard 随相机距离缩放的参数。</td><td></td></tr><tr><td>translucencyByDistance</td><td>VcNearFarScalar</td><td></td><td><code>optional</code> 指定 billboard 随相机距离透明度改变的参数。</td><td></td></tr><tr><td>pixelOffsetScaleByDistance</td><td>VcNearFarScalar</td><td></td><td><code>optional</code> 指定 billboard 随相机距离像素偏移改变的参数。</td><td></td></tr><tr><td>imageSubRegion</td><td>VcBoundingRectangle</td><td></td><td><code>optional</code> 指定 billboard 的子区域，相对于左下角。</td><td></td></tr><tr><td>distanceDisplayCondition</td><td>VcDistanceDisplayCondition</td><td></td><td><code>optional</code> 指定 billboard 随相机距离改变是否显示参数。</td><td></td></tr><tr><td>disableDepthTestDistance</td><td>number | Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;number&gt;</td><td></td><td><code>optional</code> 指定 billboard 深度检测距离。</td><td></td></tr></tbody></table>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>definitionChanged</td><td>(property: Cesium.Property)</td><td>每当更改或修改属性或子属性时触发该事件。</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("官方文档： ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("BillboardGraphics");

function vc_graphics_billboardvue_type_template_id_1e9f5773_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_graphics_billboardvue_type_template_id_1e9f5773_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcgraphicsbillboard",
    tabindex: "-1",
    content: "VcGraphicsBillboard",
    href: "#vcgraphicsbillboard",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_graphics_billboardvue_type_template_id_1e9f5773_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcgraphicsbillboard"
    })]),
    _: 1
  }), vc_graphics_billboardvue_type_template_id_1e9f5773_hoisted_3, _hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
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
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "can-kao",
    tabindex: "-1",
    content: "参考",
    href: "#can-kao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#can-kao"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_14, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/BillboardGraphics.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-billboard.md?vue&type=template&id=1e9f5773

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-billboard.md?vue&type=script&lang=ts

/* harmony default export */ var vc_graphics_billboardvue_type_script_lang_ts = ({
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
        const _component_vc_graphics_billboard = _resolveComponent("vc-graphics-billboard");

        const _component_vc_entity = _resolveComponent("vc-entity");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_switch = _resolveComponent("el-switch");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_entity, {
              ref: "entity",
              position: _ctx.position,
              onClick: _ctx.onEntityEvt,
              onMouseover: _ctx.onEntityEvt,
              onMouseout: _ctx.onEntityEvt
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_billboard, {
                ref: "billboard",
                image: _ctx.image,
                scale: _ctx.scale,
                show: _ctx.show,
                "distance-display-condition": _ctx.distanceDisplayCondition,
                "horizontal-origin": _ctx.horizontalOrigin
              }, null, 8, ["image", "scale", "show", "distance-display-condition", "horizontal-origin"])]),
              _: 1
            }, 8, ["position", "onClick", "onMouseover", "onMouseout"])]),
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
            }, 8, ["onClick"]), _createVNode(_component_el_switch, {
              modelValue: _ctx.show,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.show = $event),
              "active-color": "#13ce66",
              "inactive-text": "显示/隐藏"
            }, null, 8, ["modelValue"])]),
            _: 1
          })]),
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
          const image = 'https://zouyaoji.top/vue-cesium/favicon.png';
          const position = {
            lng: 90,
            lat: 40,
            height: 10000
          }; // [90, 40, 10000]

          const distanceDisplayCondition = {
            near: 0,
            far: 20000000
          };
          const horizontalOrigin = 0;
          const scale = ref(0.25);
          const show = ref(true);
          const entity = ref(null);
          const billboard = ref(null); // methods

          const onEntityEvt = e => {
            console.log(e);

            if (e.type === 'onmouseover') {
              scale.value = 0.5;
            } else if (e.type === 'onmouseout') {
              scale.value = 0.25;
            }
          };

          const unload = () => {
            billboard.value.unload();
          };

          const reload = () => {
            billboard.value.reload();
          };

          const load = () => {
            billboard.value.load();
          }; // life cycle


          onMounted(() => {
            entity.value.createPromise.then(_ref => {
              let {
                Cesium,
                viewer,
                cesiumObject
              } = _ref;
              viewer.zoomTo(cesiumObject);
            });
          });
          return {
            image,
            position,
            distanceDisplayCondition,
            horizontalOrigin,
            scale,
            show,
            onEntityEvt,
            unload,
            reload,
            load,
            billboard,
            entity
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
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-billboard.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-billboard.md



vc_graphics_billboardvue_type_script_lang_ts.render = vc_graphics_billboardvue_type_template_id_1e9f5773_render

/* harmony default export */ var vc_graphics_billboard = __webpack_exports__["default"] = (vc_graphics_billboardvue_type_script_lang_ts);

/***/ })

}]);