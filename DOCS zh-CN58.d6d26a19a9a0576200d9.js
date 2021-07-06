(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[146],{

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-collection-label.md?vue&type=template&id=318dba88

var vc_collection_labelvue_type_template_id_318dba88_hoisted_1 = {
  class: "content element-doc"
};

var vc_collection_labelvue_type_template_id_318dba88_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h2", {
  id: "vccollectionlabel"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vccollectionlabel"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" VcCollectionLabel")], -1);

var vc_collection_labelvue_type_template_id_318dba88_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("加载标签图元集合，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "Cesium.LabelCollection"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 实例。渲染海量文本标签时建议用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "labels"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 属性表达。")], -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "文本标签图元集合组件的基础用法。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-collection-label"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加标签图元集合。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-collection-label @click=\"onClicked\" ref=\"collectionRef\" :labels=\"labels\" @mouseout=\"onMouseout\" @mouseover=\"onMouseover\">\n      <vc-label\n        v-for=\"(polyline, index) of polylines\"\n        :position=\"polyline.positions[polyline.positions.length-1]\"\n        :key=\"'label'+index\"\n        :text=\"'面积'+(polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡')\"\n        showBackground\n        :horizontalOrigin=\"1\"\n      ></vc-label>\n    </vc-collection-label>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const collectionRef = ref(null)\n      const labels = ref([])\n      const instance = getCurrentInstance()\n      const polylines = [\n        {\n          positions: [\n            { lng: 105.24884033203125, lat: 25.313117980957031, height: 1183.3186645507812 },\n            { lng: 108.24906555725647, lat: 30.312892755731806, height: 1183.3186645507812 }\n          ],\n          area: 100000.3\n        },\n        {\n          positions: [\n            { lng: 109.24884033203125, lat: 30.313392639160156, height: 1183.804443359375 },\n            { lng: 112.24906555725632, lat: 35.31316741393502, height: 1183.6849884241819 }\n          ],\n          area: 8000.658\n        },\n        {\n          positions: [\n            { lng: 113.24884033203125, lat: 35.313655853271484, height: 1184.2783203125 },\n            { lng: 116.24906555725632, lat: 40.313430628046348, height: 1184.1093236654997 }\n          ],\n          area: 200000.55\n        }\n      ]\n      // methods\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        collectionRef.value.unload()\n      }\n      const reload = () => {\n        collectionRef.value.reload()\n      }\n      const load = () => {\n        collectionRef.value.load()\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        for (var i = 0; i < 100; i++) {\n          let label = {}\n          label.position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }\n          label.text = i.toString()\n          labels.value.push(label)\n        }\n      }\n      const onMouseover = e => {\n        console.log(e)\n        if (e.cesiumObject instanceof Cesium.Label) {\n          this.scale = 1.5 // or e.cesiumObject.scale = 1.5\n          e.pickedFeature.primitive.scale = 1.5\n        } else if (e.cesiumObject instanceof Cesium.LabelCollection) {\n          e.pickedFeature.primitive.scale = 1.5\n        }\n      }\n\n      const onMouseout = e => {\n        console.log(e)\n        if (e.cesiumObject instanceof Cesium.Label) {\n          this.scale = 1 // or e.cesiumObject.scale = 1\n        } else if (e.cesiumObject instanceof Cesium.LabelCollection) {\n          e.pickedFeature.primitive.scale = 1\n        }\n      }\n\n      return {\n        unload,\n        reload,\n        load,\n        onClicked,\n        onMouseout,\n        onMouseover,\n        onViewerReady,\n        collectionRef,\n        labels,\n        polylines\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>modelMatrix</td><td>Object</td><td></td><td><code>optional</code> 指定 4x4 变换矩阵，将每个点从模型转换为世界坐标。</td><td></td></tr><tr><td>debugShowBoundingVolume</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定是否显示此图元的 BoundingVolume， 仅调试使用。</td><td></td></tr><tr><td>blendOption</td><td>Number</td><td><code>2</code></td><td><code>optional</code> 指定颜色混合选项。 <strong>OPAQUE: 0, TRANSLUCENT: 1, OPAQUE_AND_TRANSLUCENT: 2</strong></td><td>0/1/2</td></tr><tr><td>scene</td><td>Object</td><td></td><td><code>optional</code> 指定场景参数，使用深度检测或者高度参考时必须传该属性。</td><td></td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定该图元集合是否显示。</td><td></td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定鼠标事件是否生效。</td><td></td></tr><tr><td>labels</td><td>Array</td><td><code>[]</code></td><td><code>optional</code> 指定标签集合数组。 数组对象结构与 <code>vc-label</code> 组件属性相同。</td><td></td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上按下时触发。</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上弹起时触发。</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元时触发。</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元外部时触发。</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标左键双击该图元时触发。</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上移动时触发。</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移动到该图元时触发。</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移出该图元时触发。</td></tr></tbody></table><h3 id=\"vclabel\"><a class=\"header-anchor\" href=\"#vclabel\">¶</a> VcLabel</h3><p>加载文本标签图元，相当于初始化一个 <code>Cesium.Label</code> 实例。</p><p><strong>注意：</strong> 需要作为 <code>vc-collection-label</code> 的子组件才能正常加载。</p><h3 id=\"vclabel-shu-xing\"><a class=\"header-anchor\" href=\"#vclabel-shu-xing\">¶</a> VcLabel 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>backgroundColor</td><td>Object|Array|String</td><td>{ x: 0.165, y: 0.165, z: 0.165, w: 0.8 }</td><td><code>optional</code> 指定 label 背景颜色。</td><td></td></tr><tr><td>backgroundPadding</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 label 背景x、y方向偏移量。</td><td></td></tr><tr><td>disableDepthTestDistance</td><td>Number</td><td></td><td><code>optional</code> 指定 label 的深度检测距离。</td><td></td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 label 显示条件随相机距离改变的参数。</td><td></td></tr><tr><td>eyeOffset</td><td>Object\\Array</td><td><code>{x: 0, y: 0, z: 0}</code></td><td><code>optional</code> 指定 label 视角偏移量。</td><td></td></tr><tr><td>fillColor</td><td>Object|String|Array</td><td><code>white</code></td><td><code>optional</code> 指定 label 填充颜色。</td><td></td></tr><tr><td>font</td><td>String</td><td><code>&#39;30px sans-serif&#39;</code></td><td><code>optional</code> 指定 label CSS 字体。</td><td></td></tr><tr><td>heightReference</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 label 高度模式。<strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>horizontalOrigin</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 label 水平对齐方式。<strong>CENTER: 0, LEFT: 1, RIGHT: -1</strong></td><td>0/1/-1</td></tr><tr><td>id</td><td>*</td><td></td><td><code>optional</code> 指定与 label 关联的信息，拾取时返回该属性值。</td><td></td></tr><tr><td>outlineColor</td><td>Object|Array|String</td><td><code>&#39;black&#39;</code></td><td><code>optional</code> 指定 label 的轮廓颜色。</td><td></td></tr><tr><td>outlineWidth</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 label 的轮廓宽度。</td><td></td></tr><tr><td>pixelOffset</td><td>Object|Array</td><td><code>{x: 0, y: 0}</code></td><td><code>optional</code> 指定 label 像素偏移量。</td><td></td></tr><tr><td>pixelOffsetScaleByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 label 像素偏移量随相机距离改变的参数。</td><td></td></tr><tr><td>position</td><td>Object</td><td></td><td><code>optional</code> 指定 label 的位置。</td><td></td></tr><tr><td>scale</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定 label 缩放比例。</td><td></td></tr><tr><td>scaleByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 label 的缩放比例随相机距离改变的参数。</td><td></td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 label 是否显示。</td><td></td></tr><tr><td>showBackground</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 指定 label 是否显示背景。</td><td></td></tr><tr><td>labelStyle</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 label 绘制风格。<strong>FILL: 0, OUTLINE: 1, FILL_AND_OUTLINE: 2</strong></td><td>0/1/2</td></tr><tr><td>text</td><td>String</td><td></td><td><code>optional</code> 指定 label 文字，支持&#39;\\n&#39;换行符。</td><td></td></tr><tr><td>totalScale</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 获取 label 的总比例，该比例是标签的比例乘以所计算的所需字体的相对大小与生成的字形大小的比例。</td><td></td></tr><tr><td>translucencyByDistance</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 label 透明度随相机距离改变的参数。</td><td></td></tr><tr><td>verticalOrigin</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定 label 垂直对齐方式。<strong>CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1</strong></td><td>0/1/2/-1</td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定鼠标事件是否生效。</td><td></td></tr></tbody></table><h3 id=\"vclabel-shi-jian\"><a class=\"header-anchor\" href=\"#vclabel-shi-jian\">¶</a> VcLabel 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上按下时触发。</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上弹起时触发。</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元时触发。</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标单击该图元外部时触发。</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标左键双击该图元时触发。</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标在该图元上移动时触发。</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移动到该图元时触发。</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>鼠标移出该图元时触发。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/LabelCollection.html\">LabelCollection</a></strong>、<strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/Label.html\">Label</a></strong></li></ul>", 13);

function vc_collection_labelvue_type_template_id_318dba88_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_collection_labelvue_type_template_id_318dba88_hoisted_1, [vc_collection_labelvue_type_template_id_318dba88_hoisted_2, vc_collection_labelvue_type_template_id_318dba88_hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-label.md?vue&type=template&id=318dba88

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-collection-label.md?vue&type=script&lang=ts


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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

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
                        text: '面积' + (polyline.area > 1000000 ? (polyline.area / 1000000).toFixed(2) + 'km²' : polyline.area.toFixed(2) + '㎡'),
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
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-label.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-collection-label.md



vc_collection_labelvue_type_script_lang_ts.render = vc_collection_labelvue_type_template_id_318dba88_render

/* harmony default export */ var vc_collection_label = __webpack_exports__["default"] = (vc_collection_labelvue_type_script_lang_ts);

/***/ })

}]);