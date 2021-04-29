(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/datasources/vc-datasource-czml.md?vue&type=template&id=68e97588

var vc_datasource_czmlvue_type_template_id_68e97588_hoisted_1 = {
  class: "content element-doc"
};

var vc_datasource_czmlvue_type_template_id_68e97588_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcdatasourceczml\"><a class=\"header-anchor\" href=\"#vcdatasourceczml\">¶</a> VcDatasourceCzml</h2><p>Load <a href=\"https://github.com/AnalyticalGraphicsInc/czml-writer/wiki/CZML-Guide\">CZML</a> format datasource. It is equivalent to initializing a <code>Cesium.CzmlDataSource</code> instance.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of VcDatasourceCzml component.</p>", 4);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-datasource-czml"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tag to add CZML format datasource objects on the viewer.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer shouldAnimate>\n    <vc-datasource-czml\n      ref=\"datasourceRef\"\n      czml=\"./SampleData/simple.czml\"\n      @ready=\"onDatasourceReady\"\n      :show=\"show\"\n      @click=\"onClicked\"\n    ></vc-datasource-czml>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    <el-switch v-model=\"show\" active-color=\"#13ce66\" inactive-text=\"Show/Hide\"> </el-switch>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'\n  export default {\n    setup() {\n      // state\n      const show = ref(true)\n      const datasourceRef = ref(null)\n      const onClicked = e => {\n        console.log(e)\n      }\n      const unload = () => {\n        datasourceRef.value.unload()\n      }\n      const reload = () => {\n        datasourceRef.value.reload()\n      }\n      const load = () => {\n        datasourceRef.value.load()\n      }\n      const onDatasourceReady = ({ Cesium, viewer, cesiumObject }) => {\n        // viewer.zoomTo(cesiumObject)\n        viewer.camera.flyHome(0)\n      }\n\n      return {\n        unload,\n        reload,\n        load,\n        show,\n        onClicked,\n        onDatasourceReady,\n        datasourceRef\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>czml</td><td>String|Object</td><td></td><td><code>required</code> An optional name for the data source. This value will be overwritten if a loaded document contains a name.</td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specifies whether the datasource is visible.</td></tr><tr><td>entities</td><td>Array</td><td><code>[]</code></td><td><code>optional</code> Specify the collection of entities to be added to this datasource.</td></tr><tr><td>sourceUri</td><td>String</td><td></td><td><code>optional</code> Overrides the url to use for resolving relative links.</td></tr><tr><td>credit</td><td>String|Object</td><td></td><td><code>optional</code> A credit for the data source, which is displayed on the canvas.</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>changedEvent</td><td></td><td>Gets an event that will be raised when the underlying data changes.</td></tr><tr><td>errorEvent</td><td></td><td>Gets an event that will be raised if an error is encountered during processing.</td></tr><tr><td>loadingEvent</td><td></td><td>Gets an event that will be raised when the data source either starts or stops loading.</td></tr><tr><td>clusterEvent</td><td>(clusteredEntities, cluster)</td><td>Gets the event that will be raised when a new cluster will be displayed</td></tr><tr><td>collectionChanged</td><td>(collection, added, removed, changed)</td><td>Gets the event that is fired when entities are added or removed from the collection.</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse is pressed on the data source.</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse bounces up on the data source.</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse clicks on the data source.</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse clicks outside the data source.</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the left mouse button double-clicks the data source.</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves on the data source.</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves to the data source.</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves out of the data source.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/CzmlDataSource.html\">CzmlDataSource</a></strong></li></ul>", 6);

function vc_datasource_czmlvue_type_template_id_68e97588_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_datasource_czmlvue_type_template_id_68e97588_hoisted_1, [vc_datasource_czmlvue_type_template_id_68e97588_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/en-US/datasources/vc-datasource-czml.md?vue&type=template&id=68e97588

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(3);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/datasources/vc-datasource-czml.md?vue&type=script&lang=ts


/* harmony default export */ var vc_datasource_czmlvue_type_script_lang_ts = ({
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
        var _component_vc_datasource_czml = _resolveComponent("vc-datasource-czml");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_switch = _resolveComponent("el-switch");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, {
              shouldAnimate: ""
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_datasource_czml, {
                  ref: "datasourceRef",
                  czml: "./SampleData/simple.czml",
                  onReady: _ctx.onDatasourceReady,
                  show: _ctx.show,
                  onClick: _ctx.onClicked
                }, null, 8, ["onReady", "show", "onClick"])];
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
                }, 8, ["onClick"]), _createVNode(_component_el_switch, {
                  modelValue: _ctx.show,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                    return _ctx.show = $event;
                  }),
                  "active-color": "#13ce66",
                  "inactive-text": "Show/Hide"
                }, null, 8, ["modelValue"])];
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
          var show = ref(true);
          var datasourceRef = ref(null);

          var onClicked = function onClicked(e) {
            console.log(e);
          };

          var unload = function unload() {
            datasourceRef.value.unload();
          };

          var reload = function reload() {
            datasourceRef.value.reload();
          };

          var load = function load() {
            datasourceRef.value.load();
          };

          var onDatasourceReady = function onDatasourceReady(_ref) {
            var Cesium = _ref.Cesium,
                viewer = _ref.viewer,
                cesiumObject = _ref.cesiumObject;
            // viewer.zoomTo(cesiumObject)
            viewer.camera.flyHome(0);
          };

          return {
            unload: unload,
            reload: reload,
            load: load,
            show: show,
            onClicked: onClicked,
            onDatasourceReady: onDatasourceReady,
            datasourceRef: datasourceRef
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/datasources/vc-datasource-czml.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/datasources/vc-datasource-czml.md



vc_datasource_czmlvue_type_script_lang_ts.render = vc_datasource_czmlvue_type_template_id_68e97588_render

/* harmony default export */ var vc_datasource_czml = __webpack_exports__["default"] = (vc_datasource_czmlvue_type_script_lang_ts);

/***/ })

}]);