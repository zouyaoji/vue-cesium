(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[156],{

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-collection-polyline.md?vue&type=template&id=ed2b2a1c

const vc_collection_polylinevue_type_template_id_ed2b2a1c_hoisted_1 = {
  class: "content element-doc"
};

const vc_collection_polylinevue_type_template_id_ed2b2a1c_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h2", {
  id: "vccollectionpolyline"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  class: "header-anchor",
  href: "#vccollectionpolyline"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" VcCollectionPolyline")], -1);

const vc_collection_polylinevue_type_template_id_ed2b2a1c_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载线图元集合，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.PolylineCollection"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例。渲染海量线图元时建议用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "polylines"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 属性表达。")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 基础用法")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "线图元集合组件的基础用法。", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-collection-polyline"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加线图元集合。")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-collection-polyline @click=\"onClicked\" ref=\"collectionRef\" :polylines=\"polylines\">\n      <vc-polyline\n        :positions=\"[[90, 20, 10000], [120, 20, 10000]]\"\n        :material=\"{\n          fabric: {\n            type: 'Color',\n            uniforms: {\n              color: 'red'\n            }\n          }\n        }\"\n        :width=\"5\"\n      ></vc-polyline>\n      <vc-polyline\n        :positions=\"[[90, 30, 10000], [120, 30, 10000]]\"\n        :material=\"{\n          fabric: {\n            type: 'PolylineGlow',\n            uniforms: {\n              color: 'blue'\n            }\n          }\n        }\"\n        :width=\"10\"\n      ></vc-polyline>\n      <vc-polyline\n        :positions=\"[[90, 40, 10000], [120, 40, 10000]]\"\n        :material=\"{\n          fabric: {\n            type: 'PolylineArrow',\n            uniforms: {\n              color: 'purple'\n            }\n          }\n        }\"\n        :width=\"10\"\n      ></vc-polyline>\n    </vc-collection-polyline>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const collectionRef = ref(null)\n      const polylines = ref([])\n      const instance = getCurrentInstance()\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        collectionRef.value.unload()\n      }\n      const reload = () => {\n        collectionRef.value.reload()\n      }\n      const load = () => {\n        collectionRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        for (var i = 0; i < 500; i++) {\n          let polyline = {}\n          let positions = []\n          positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })\n          positions.push({ lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 })\n          polyline.positions = positions\n          polyline.material = '#' + Math.random().toString(16).substr(2, 6).toUpperCase()\n          polylines.value.push(polyline)\n        }\n      }\n\n      return {\n        unload,\n        reload,\n        load,\n        onClicked,\n        onViewerReady,\n        collectionRef,\n        polylines\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>modelMatrix</td><td>Object</td><td></td><td><code>optional</code> 指定 4x4 变换矩阵，将每个点从模型转换为世界坐标。</td></tr><tr><td>debugShowBoundingVolume</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否显示此图元的 BoundingVolume， 仅调试使用。</td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定鼠标事件是否生效。</td></tr><tr><td>polylines</td><td>Array</td><td><code>[]</code></td><td><code>optional</code> 指定点集合数组。 数组对象结构与 <code>vc-polyline</code> 组件属性相同。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上按下时触发。</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上弹起时触发。</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元时触发。</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元外部时触发。</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标左键双击该图元时触发。</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上移动时触发。</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移动到该图元时触发。</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移出该图元时触发。</td></tr></tbody></table><h3 id=\"vcpolyline\"><a class=\"header-anchor\" href=\"#vcpolyline\">¶</a> VcPolyline</h3><p>加载线图元，相当于初始化一个 <code>Cesium.Polyline</code> 实例。</p><p><strong>注意：</strong> 需要作为 <code>vc-collection-polyline</code> 的子组件才能正常加载。</p><h3 id=\"vcpolyline-shu-xing\"><a class=\"header-anchor\" href=\"#vcpolyline-shu-xing\">¶</a> VcPolyline 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 polyline 显示条件随相机距离改变的参数。</td></tr><tr><td>id</td><td>Object</td><td></td><td><code>optional</code> 指定与 polyline 关联的信息，拾取时返回该属性值。</td></tr><tr><td>loop</td><td>Boolean</td><td>false</td><td><code>optional</code> 指定 polyline 是否首尾相连。</td></tr><tr><td>material</td><td>Object|Array|String</td><td></td><td><code>optional</code> 指定 polyline 材质。</td></tr><tr><td>positions</td><td>Array</td><td></td><td><code>optional</code> 指定 polyline 的位置。</td></tr><tr><td>show</td><td>Boolean</td><td>true</td><td><code>optional</code> 指定 polyline 是否显示。</td></tr><tr><td>width</td><td>Number</td><td>1.0</td><td><code>optional</code> 指定 polyline 宽度。</td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定鼠标事件是否生效。</td></tr></tbody></table><h3 id=\"vcpolyline-shi-jian\"><a class=\"header-anchor\" href=\"#vcpolyline-shi-jian\">¶</a> VcPolyline 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上按下时触发。</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上弹起时触发。</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元时触发。</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元外部时触发。</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标左键双击该图元时触发。</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上移动时触发。</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移动到该图元时触发。</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移出该图元时触发。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PolylineCollection.html\">PolylineCollection</a></strong>、<strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/Polyline.html\">Polyline</a></strong></li></ul>", 13);

function vc_collection_polylinevue_type_template_id_ed2b2a1c_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_collection_polylinevue_type_template_id_ed2b2a1c_hoisted_1, [vc_collection_polylinevue_type_template_id_ed2b2a1c_hoisted_2, vc_collection_polylinevue_type_template_id_ed2b2a1c_hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-polyline.md?vue&type=template&id=ed2b2a1c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-collection-polyline.md?vue&type=script&lang=ts

/* harmony default export */ var vc_collection_polylinevue_type_script_lang_ts = ({
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
        const _component_vc_polyline = _resolveComponent("vc-polyline");

        const _component_vc_collection_polyline = _resolveComponent("vc-collection-polyline");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.onViewerReady
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_collection_polyline, {
              onClick: _ctx.onClicked,
              ref: "collectionRef",
              polylines: _ctx.polylines
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_polyline, {
                positions: [[90, 20, 10000], [120, 20, 10000]],
                material: {
                  fabric: {
                    type: 'Color',
                    uniforms: {
                      color: 'red'
                    }
                  }
                },
                width: 5
              }), _createVNode(_component_vc_polyline, {
                positions: [[90, 30, 10000], [120, 30, 10000]],
                material: {
                  fabric: {
                    type: 'PolylineGlow',
                    uniforms: {
                      color: 'blue'
                    }
                  }
                },
                width: 10
              }), _createVNode(_component_vc_polyline, {
                positions: [[90, 40, 10000], [120, 40, 10000]],
                material: {
                  fabric: {
                    type: 'PolylineArrow',
                    uniforms: {
                      color: 'purple'
                    }
                  }
                },
                width: 10
              })]),
              _: 1
            }, 8, ["onClick", "polylines"])]),
            _: 1
          }, 8, ["onReady"]), _createVNode(_component_el_row, {
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

      const {
        ref,
        reactive,
        getCurrentInstance,
        onMounted,
        watch
      } = vue_esm_browser;
      const democomponentExport = {
        setup() {
          // state
          const collectionRef = ref(null);
          const polylines = ref([]);
          const instance = getCurrentInstance(); // methods

          const onClicked = e => {
            console.log(e);
          };

          const unload = () => {
            collectionRef.value.unload();
          };

          const reload = () => {
            collectionRef.value.reload();
          };

          const load = () => {
            collectionRef.value.load();
          };

          const onViewerReady = ({
            Cesium,
            viewer
          }) => {
            for (var i = 0; i < 500; i++) {
              let polyline = {};
              let positions = [];
              positions.push({
                lng: Math.random() * 40 + 85,
                lat: Math.random() * 30 + 21
              });
              positions.push({
                lng: Math.random() * 40 + 85,
                lat: Math.random() * 30 + 21
              });
              polyline.positions = positions;
              polyline.material = '#' + Math.random().toString(16).substr(2, 6).toUpperCase();
              polylines.value.push(polyline);
            }
          };

          return {
            unload,
            reload,
            load,
            onClicked,
            onViewerReady,
            collectionRef,
            polylines
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
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-polyline.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-polyline.md



vc_collection_polylinevue_type_script_lang_ts.render = vc_collection_polylinevue_type_template_id_ed2b2a1c_render

/* harmony default export */ var vc_collection_polyline = __webpack_exports__["default"] = (vc_collection_polylinevue_type_script_lang_ts);

/***/ })

}]);