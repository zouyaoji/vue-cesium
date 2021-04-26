(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[125],{

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-collection-point.md?vue&type=template&id=0180a2dc

var vc_collection_pointvue_type_template_id_0180a2dc_hoisted_1 = {
  class: "content element-doc"
};

var vc_collection_pointvue_type_template_id_0180a2dc_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h2", {
  id: "vccollectionpoint"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vccollectionpoint"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" VcCollectionPoint")], -1);

var vc_collection_pointvue_type_template_id_0180a2dc_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("加载点图元集合，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "Cesium.PointPrimitiveCollection"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 实例。渲染海量点时建议用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "points"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 属性表达。")], -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "点图元集合组件的基础用法。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-collection-point"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加点图元集合。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-collection-point @click=\"onClicked\" ref=\"collectionRef\" :points=\"points\">\n      <template v-for=\"(polyline, index) of polylines\">\n        <template v-for=\"(position, subIndex) of polyline.positions\">\n          <vc-point :position=\"position\" :color=\"[255, 229, 0]\" :pixelSize=\"32\"></vc-point>\n        </template>\n      </template>\n    </vc-collection-point>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const collectionRef = ref(null)\n      const points = ref([])\n      const instance = getCurrentInstance()\n      const polylines = [\n        {\n          positions: [\n            { lng: 105.24884033203125, lat: 25.313117980957031, height: 1183.3186645507812 },\n            { lng: 108.24906555725647, lat: 30.312892755731806, height: 1183.3186645507812 }\n          ],\n          area: 100000.3\n        },\n        {\n          positions: [\n            { lng: 109.24884033203125, lat: 30.313392639160156, height: 1183.804443359375 },\n            { lng: 112.24906555725632, lat: 35.31316741393502, height: 1183.6849884241819 }\n          ],\n          area: 8000.658\n        },\n        {\n          positions: [\n            { lng: 113.24884033203125, lat: 35.313655853271484, height: 1184.2783203125 },\n            { lng: 116.24906555725632, lat: 40.313430628046348, height: 1184.1093236654997 }\n          ],\n          area: 200000.55\n        }\n      ]\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        collectionRef.value.unload()\n      }\n      const reload = () => {\n        collectionRef.value.reload()\n      }\n      const load = () => {\n        collectionRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        for (var i = 0; i < 10000; i++) {\n          let point = {}\n          point.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }\n          point.color = 'rgb(255,229,0)'\n          point.pixelSize = 8\n          points.value.push(point)\n        }\n      }\n\n      return {\n        unload,\n        reload,\n        load,\n        onClicked,\n        onViewerReady,\n        collectionRef,\n        points,\n        polylines\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>modelMatrix</td><td>Object</td><td></td><td><code>optional</code> 指定 4x4 变换矩阵，将每个点从模型转换为世界坐标。</td></tr><tr><td>debugShowBoundingVolume</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否显示此图元的 BoundingVolume， 仅调试使用。</td></tr><tr><td>blendOption</td><td>Number</td><td></td><td><code>optional</code> 指定颜色混合选项。</td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定鼠标事件是否生效。</td></tr><tr><td>points</td><td>Array</td><td><code>[]</code></td><td><code>optional</code> 指定点集合数组。 数组对象结构与 <code>vc-point</code> 组件属性相同。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上按下时触发。</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上弹起时触发。</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元时触发。</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元外部时触。</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标左键双击该图元时触发。</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上移动时触发。</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移动到该图元时触发。</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移出该图元时触发。</td></tr></tbody></table><h3 id=\"vcpoint\"><a class=\"header-anchor\" href=\"#vcpoint\">¶</a> VcPoint</h3><p>加载点图元，相当于初始化一个 <code>Cesium.PointPrimitive</code> 实例。</p><p><strong>注意：</strong> 需要作为 <code>vc-collection-point</code> 的子组件才能正常加载。</p><h3 id=\"vcpoint-shu-xing\"><a class=\"header-anchor\" href=\"#vcpoint-shu-xing\">¶</a> VcPoint 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>color</td><td>Object|Array|String</td><td><code>&#39;WHITE&#39;</code></td><td><code>optional</code> 指定 point 的颜色。</td></tr><tr><td>disableDepthTestDistance</td><td>Number</td><td></td><td><code>optional</code> 指定 point 深度检测距离。</td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 point 显示条件随相机距离改变的参数。</td></tr><tr><td>id</td><td>*</td><td></td><td><code>optional</code> 指定与 point 关联的信息，拾取时返回该属性值。</td></tr><tr><td>outlineColor</td><td>Object | Array | String</td><td><code>&#39;BLACK&#39;</code></td><td><code>optional</code> 指定 point 的轮廓颜色。</td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 point 的轮廓宽度。</td></tr><tr><td>pixelSize</td><td>Number</td><td><code>1</code></td><td><code>optional</code> 指定 point 的像素大小。</td></tr><tr><td>position</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 point 的位置。</td></tr><tr><td>scaleByDistance</td><td>Object</td><td></td><td><code>optional</code> 指定 point 缩放比例随相机距离改变的参数。</td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 point 是否显示。</td></tr><tr><td>translucencyByDistance</td><td>Object</td><td></td><td><code>optional</code> 指定 point 透明度随相机距离改变的参数。</td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定鼠标事件是否生效。</td></tr></tbody></table><h3 id=\"vcpoint-shi-jian\"><a class=\"header-anchor\" href=\"#vcpoint-shi-jian\">¶</a> VcPoint 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上按下时触发。</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上弹起时触发。</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元时触发。</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元外部时触。</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标左键双击该图元时触发。</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上移动时触发。</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移动到该图元时触发。</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移出该图元时触发。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PointPrimitiveCollection.html\">PointPrimitiveCollection</a></strong>、<strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PointPrimitive.html\">PointPrimitive</a></strong></li></ul>", 13);

function vc_collection_pointvue_type_template_id_0180a2dc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_collection_pointvue_type_template_id_0180a2dc_hoisted_1, [vc_collection_pointvue_type_template_id_0180a2dc_hoisted_2, vc_collection_pointvue_type_template_id_0180a2dc_hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-point.md?vue&type=template&id=0180a2dc

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-collection-point.md?vue&type=script&lang=ts


/* harmony default export */ var vc_collection_pointvue_type_script_lang_ts = ({
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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

      function render(_ctx, _cache) {
        var _component_vc_point = _resolveComponent("vc-point");

        var _component_vc_collection_point = _resolveComponent("vc-collection-point");

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
                return [_createVNode(_component_vc_collection_point, {
                  onClick: _ctx.onClicked,
                  ref: "collectionRef",
                  points: _ctx.points
                }, {
                  default: _withCtx(function () {
                    return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.polylines, function (polyline, index) {
                      return _openBlock(), _createBlock(_Fragment, null, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(polyline.positions, function (position, subIndex) {
                        return _openBlock(), _createBlock(_component_vc_point, {
                          position: position,
                          color: [255, 229, 0],
                          pixelSize: 32
                        }, null, 8, ["position"]);
                      }), 256))], 64);
                    }), 256))];
                  }),
                  _: 1
                }, 8, ["onClick", "points"])];
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
          // state
          var collectionRef = ref(null);
          var points = ref([]);
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

            for (var i = 0; i < 10000; i++) {
              var point = {};
              point.position = {
                lng: Math.random() * 40 + 85,
                lat: Math.random() * 30 + 21
              };
              point.color = 'rgb(255,229,0)';
              point.pixelSize = 8;
              points.value.push(point);
            }
          };

          return {
            unload: unload,
            reload: reload,
            load: load,
            onClicked: onClicked,
            onViewerReady: onViewerReady,
            collectionRef: collectionRef,
            points: points,
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
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-point.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-point.md



vc_collection_pointvue_type_script_lang_ts.render = vc_collection_pointvue_type_template_id_0180a2dc_render

/* harmony default export */ var vc_collection_point = __webpack_exports__["default"] = (vc_collection_pointvue_type_script_lang_ts);

/***/ })

}]);