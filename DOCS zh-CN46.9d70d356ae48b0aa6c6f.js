(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[120],{

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-collection-billboard.md?vue&type=template&id=51bade20

var vc_collection_billboardvue_type_template_id_51bade20_hoisted_1 = {
  class: "content element-doc"
};

var vc_collection_billboardvue_type_template_id_51bade20_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h2", {
  id: "vccollectionbillboard"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vccollectionbillboard"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" VcCollectionBillboard")], -1);

var vc_collection_billboardvue_type_template_id_51bade20_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("加载布告板图元集合，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "Cesium.BillboardCollection"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 实例。渲染海量布告板时建议用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "billboards"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 属性表达。")], -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "布告板图元集合组件的基础用法。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-collection-billboard"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加布告板图元集合对象。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-collection-billboard ref=\"billboardCollectionRef\" @mouseout=\"onMouseout\" @mouseover=\"onMouseover\" :billboards=\"billboards\">\n      <vc-billboard\n        :position=\"[108, 35, 10000]\"\n        :distanceDisplayCondition=\"[0, 20000000]\"\n        :scale=\"0.25\"\n        image=\"https://zouyaoji.top/vue-cesium/favicon.png\"\n      ></vc-billboard>\n    </vc-collection-billboard>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const billboardCollectionRef = ref(null)\n      const billboards = ref([])\n      const instance = getCurrentInstance()\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        billboardCollectionRef.value.unload()\n      }\n      const reload = () => {\n        billboardCollectionRef.value.reload()\n      }\n      const load = () => {\n        billboardCollectionRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        for (var i = 0; i < 50; i++) {\n          const billboard = {}\n          billboard.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }\n          billboard.image = Cesium.writeTextToCanvas(i + 1, {\n            font: '100px sans-serif',\n            strokeWidth: 2\n          }).toDataURL()\n          billboard.scale = 0.25\n          billboard.id = i\n          billboards.value.push(billboard)\n        }\n      }\n\n      const onMouseover = e => {\n        console.log(e)\n        if (e.cesiumObject instanceof Cesium.Billboard) {\n          this.scale = 0.5 // or e.cesiumObject.scale = 0.5\n          e.pickedFeature.primitive.scale = 0.5\n        } else if (e.cesiumObject instanceof Cesium.BillboardCollection) {\n          e.pickedFeature.primitive.scale = 0.5\n        }\n      }\n\n      const onMouseout = e => {\n        console.log(e)\n        if (e.cesiumObject instanceof Cesium.Billboard) {\n          this.scale = 0.25 // or e.cesiumObject.scale = 0.25\n        } else if (e.cesiumObject instanceof Cesium.BillboardCollection) {\n          e.pickedFeature.primitive.scale = 0.25\n        }\n      }\n\n      return {\n        unload,\n        reload,\n        load,\n        onClicked,\n        onMouseout,\n        onMouseover,\n        onViewerReady,\n        billboardCollectionRef,\n        billboards\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>modelMatrix</td><td>Object</td><td></td><td><code>optional</code> 指定 4x4 变换矩阵，将每个点从模型转换为世界坐标。</td><td></td></tr><tr><td>debugShowBoundingVolume</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否显示此图元的 BoundingVolume， 仅调试使用。</td><td></td></tr><tr><td>blendOption</td><td>Number</td><td><code>2</code></td><td><code>optional</code> 指定颜色混合选项。 <strong>OPAQUE: 0, TRANSLUCENT: 1, OPAQUE_AND_TRANSLUCENT: 2</strong></td><td>0/1/2</td></tr><tr><td>scene</td><td>Object</td><td></td><td><code>optional</code> 指定场景参数，使用深度检测或者高度参考时必须传该属性。</td><td></td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定该图元集合是否显示。</td><td></td></tr><tr><td>billboards</td><td>Array</td><td><code>[]</code></td><td><code>optional</code> 指定布告板集合数组。 数组对象结构与 <code>vc-billboard</code> 组件属性相同。</td><td></td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定鼠标事件是否生效。</td><td></td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上按下时触发。</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上弹起时触发。</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元时触发。</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元外部时触发。</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标左键双击该图元时触发。</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上移动时触发。</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移动到该图元时触发。</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移出该图元时触发。</td></tr></tbody></table><h3 id=\"vcbillboard\"><a class=\"header-anchor\" href=\"#vcbillboard\">¶</a> VcBillboard</h3><p>加载布告板图元，相当于初始化一个 <code>Cesium.Billboard</code> 实例。</p><p><strong>注意：</strong> 需要作为 <code>vc-collection-billboard</code> 的子组件才能正常加载。</p><h3 id=\"vcbillboard-shu-xing\"><a class=\"header-anchor\" href=\"#vcbillboard-shu-xing\">¶</a> VcBillboard 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>alignedAxis</td><td>Object|Array</td><td><code>{x: 0, y: 0, z: 0}</code></td><td><code>optional</code> 指定 billboard 按单位矢量轴旋转参数。</td><td></td></tr><tr><td>color</td><td>Object|String|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> 指定 billboard 图片的颜色。</td><td></td></tr><tr><td>disableDepthTestDistance</td><td>Number</td><td></td><td><code>optional</code> 指定 billboard 的深度检测距离。</td><td></td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 billboard 显示条件随相机距离改变的参数。</td><td></td></tr><tr><td>eyeOffset</td><td>Object|Array</td><td><code>{x: 0, y: 0, z: 0}</code></td><td><code>optional</code> 指定 billboard 视角偏移量。</td><td></td></tr><tr><td>height</td><td>Number</td><td></td><td><code>optional</code> 指定 billboard 的高度（像素）。</td><td></td></tr><tr><td>heightReference</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 billboard 高度模式。<strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>horizontalOrigin</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 billboard 水平对齐方式。<strong>CENTER: 0, LEFT: 1, RIGHT: -1</strong></td><td>0/1/2</td></tr><tr><td>id</td><td>*</td><td></td><td><code>optional</code> 指定与 billboard 关联的信息，拾取时返回该属性值。</td><td></td></tr><tr><td>image</td><td>String|Object</td><td></td><td><code>optional</code> 指定 billboard 加载的的 Image、 URI 或者 Canvas。</td><td></td></tr><tr><td>pixelOffset</td><td>Object|Array</td><td><code>{x: 0, y: 0}</code></td><td><code>optional</code> 指定 billboard 像素偏移量。</td><td></td></tr><tr><td>pixelOffsetScaleByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 billboard 像素偏移量随相机距离改变的参数。</td><td></td></tr><tr><td>position</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 billboard 的位置。</td><td></td></tr><tr><td>rotation</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 billboard 沿 x 轴方向旋转的角度。</td><td></td></tr><tr><td>scale</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定 billboard 缩放比例。</td><td></td></tr><tr><td>scaleByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 billboard 随缩比例随相机距离改变的参数。</td><td></td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 billboard 是否显示。</td><td></td></tr><tr><td>sizeInMeters</td><td>Boolean</td><td></td><td><code>optional</code> 指定 billboard 的单位是否是米。</td><td></td></tr><tr><td>translucencyByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 billboard 透明度随相机距离改变参数。</td><td></td></tr><tr><td>verticalOrigin</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 billboard 垂直对齐方式。<strong>CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1</strong></td><td>0/1/2/-1</td></tr><tr><td>width</td><td>Number</td><td></td><td><code>optional</code> 指定 billboard 的宽度（像素）。</td><td></td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定鼠标事件是否生效。</td><td></td></tr></tbody></table><h3 id=\"vcbillboard-shi-jian\"><a class=\"header-anchor\" href=\"#vcbillboard-shi-jian\">¶</a> VcBillboard 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上按下时触发。</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上弹起时触发。</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元时触发。</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元外部时触发。</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标左键双击该图元时触发。</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上移动时触发。</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移动到该图元时触发。</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移出该图元时触发。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/BillboardCollection.html\">BillboardCollection</a></strong>、<strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/Billboard.html\">Billboard</a></strong></li></ul>", 13);

function vc_collection_billboardvue_type_template_id_51bade20_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_collection_billboardvue_type_template_id_51bade20_hoisted_1, [vc_collection_billboardvue_type_template_id_51bade20_hoisted_2, vc_collection_billboardvue_type_template_id_51bade20_hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-billboard.md?vue&type=template&id=51bade20

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-collection-billboard.md?vue&type=script&lang=ts


/* harmony default export */ var vc_collection_billboardvue_type_script_lang_ts = ({
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
        var _component_vc_billboard = _resolveComponent("vc-billboard");

        var _component_vc_collection_billboard = _resolveComponent("vc-collection-billboard");

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
                return [_createVNode(_component_vc_collection_billboard, {
                  ref: "billboardCollectionRef",
                  onMouseout: _ctx.onMouseout,
                  onMouseover: _ctx.onMouseover,
                  billboards: _ctx.billboards
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_billboard, {
                      position: [108, 35, 10000],
                      distanceDisplayCondition: [0, 20000000],
                      scale: 0.25,
                      image: "https://zouyaoji.top/vue-cesium/favicon.png"
                    }, null, 8, ["scale"])];
                  }),
                  _: 1
                }, 8, ["onMouseout", "onMouseover", "billboards"])];
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
          var billboardCollectionRef = ref(null);
          var billboards = ref([]);
          var instance = getCurrentInstance(); // methods

          var onClicked = function onClicked(e) {
            console.log(e);
          };

          var unload = function unload() {
            billboardCollectionRef.value.unload();
          };

          var reload = function reload() {
            billboardCollectionRef.value.reload();
          };

          var load = function load() {
            billboardCollectionRef.value.load();
          };

          var onViewerReady = function onViewerReady(_ref) {
            var Cesium = _ref.Cesium,
                viewer = _ref.viewer;

            for (var i = 0; i < 50; i++) {
              var billboard = {};
              billboard.position = {
                lng: Math.random() * 40 + 85,
                lat: Math.random() * 30 + 21
              };
              billboard.image = Cesium.writeTextToCanvas(i + 1, {
                font: '100px sans-serif',
                strokeWidth: 2
              }).toDataURL();
              billboard.scale = 0.25;
              billboard.id = i;
              billboards.value.push(billboard);
            }
          };

          var onMouseover = function onMouseover(e) {
            console.log(e);

            if (e.cesiumObject instanceof Cesium.Billboard) {
              _this.scale = 0.5; // or e.cesiumObject.scale = 0.5

              e.pickedFeature.primitive.scale = 0.5;
            } else if (e.cesiumObject instanceof Cesium.BillboardCollection) {
              e.pickedFeature.primitive.scale = 0.5;
            }
          };

          var onMouseout = function onMouseout(e) {
            console.log(e);

            if (e.cesiumObject instanceof Cesium.Billboard) {
              _this.scale = 0.25; // or e.cesiumObject.scale = 0.25
            } else if (e.cesiumObject instanceof Cesium.BillboardCollection) {
              e.pickedFeature.primitive.scale = 0.25;
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
            billboardCollectionRef: billboardCollectionRef,
            billboards: billboards
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-billboard.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-billboard.md



vc_collection_billboardvue_type_script_lang_ts.render = vc_collection_billboardvue_type_template_id_51bade20_render

/* harmony default export */ var vc_collection_billboard = __webpack_exports__["default"] = (vc_collection_billboardvue_type_script_lang_ts);

/***/ })

}]);