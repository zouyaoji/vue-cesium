(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-path.md?vue&type=template&id=0e5ea339

var vc_graphics_pathvue_type_template_id_0e5ea339_hoisted_1 = {
  class: "content element-doc"
};

var vc_graphics_pathvue_type_template_id_0e5ea339_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"lu-jing\"><a class=\"header-anchor\" href=\"#lu-jing\">¶</a> 路径</h2><p><code>vc-graphics-path</code> 组件用于加载与时间关联的路径实体，相当于初始化一个 <code>Cesium.PathGraphics</code> 实例。需要作为 <code>vc-entity</code> 的子组件才能正常加载。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>路径实体组件的基础用法。</p>", 4);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-graphics-path"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加路径实体对象。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer shouldAnimate animation timeline @ready=\"onViewerReady\">\n    <vc-entity ref=\"entity\" :availability=\"availability\" :position=\"position\" :orientation=\"orientation\" description=\"Hello Vue Cesium\">\n      <vc-graphics-path\n        ref=\"path\"\n        :resolution=\"1\"\n        :material=\"{fabric: {type: 'PolylineGlow', uniforms: {glowPower: 0.1, color: 'yellow'}}}\"\n        :width=\"10\"\n      ></vc-graphics-path>\n      <vc-graphics-model ref=\"model\" uri=\"./SampleData/models/CesiumAir/Cesium_Air.glb\" :minimumPixelSize=\"128\"></vc-graphics-model>\n    </vc-entity>\n    <vc-entity :key=\"'entity' + index\" :position=\"position\" v-for=\"(position, index) of positions\">\n      <vc-graphics-point :pixelSize=\"8\" color=\"TRANSPARENT\" outlineColor=\"YELLOW\" :outlineWidth=\"3\"></vc-graphics-point>\n    </vc-entity>\n    <vc-layer-imagery>\n      <vc-provider-imagery-arcgis-mapserver></vc-provider-imagery-arcgis-mapserver>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"viewTopDown\">俯视</el-button>\n    <el-button type=\"danger\" round @click=\"viewSide\">侧视</el-button>\n    <el-button type=\"danger\" round @click=\"viewAircraft\">跟随</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const position = ref({})\n      const positions = ref([])\n      const model = ref(null)\n      const availability = ref(null)\n      const orientation = ref(null)\n      const entity = ref(null)\n      let _viewer = undefined\n\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        console.log('viewer ready')\n        _viewer = viewer\n        //Enable lighting based on sun/moon positions\n        viewer.scene.globe.enableLighting = true\n        //Enable depth testing so things behind the terrain disappear.\n        viewer.scene.globe.depthTestAgainstTerrain = true\n        //Set the random number seed for consistent results.\n        Cesium.Math.setRandomNumberSeed(3)\n        const start = Cesium.JulianDate.fromDate(new Date(2015, 2, 25, 16))\n        const stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate())\n        viewer.clock.startTime = start.clone()\n        viewer.clock.stopTime = stop.clone()\n        viewer.clock.currentTime = start.clone()\n        viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP //Loop at the end\n        viewer.clock.multiplier = 10\n        viewer.timeline.zoomTo(start, stop)\n        position.value = computeCirclularFlight(-112.110693, 36.0994841, 0.03, start)\n        availability.value = new Cesium.TimeIntervalCollection([\n          new Cesium.TimeInterval({\n            start: start,\n            stop: stop\n          })\n        ])\n        orientation.value = new Cesium.VelocityOrientationProperty(position.value)\n      }\n\n      const computeCirclularFlight = (lon, lat, radius, start) => {\n        let property = new Cesium.SampledPositionProperty()\n        for (let i = 0; i <= 360; i += 45) {\n          let radians = Cesium.Math.toRadians(i)\n          let time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate())\n          let position = Cesium.Cartesian3.fromDegrees(\n            lon + radius * 1.5 * Math.cos(radians),\n            lat + radius * Math.sin(radians),\n            Cesium.Math.nextRandomNumber() * 500 + 1750\n          )\n          property.addSample(time, position)\n          positions.value.push(position)\n        }\n        return property\n      }\n\n      const viewTopDown = () => {\n        _viewer.trackedEntity = undefined\n        _viewer.zoomTo(_viewer.entities, new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90)))\n      }\n      const viewSide = () => {\n        _viewer.trackedEntity = undefined\n        _viewer.zoomTo(_viewer.entities, new Cesium.HeadingPitchRange(Cesium.Math.toRadians(-90), Cesium.Math.toRadians(-15), 7500))\n      }\n      const viewAircraft = () => {\n        _viewer.trackedEntity = entity.value.getCesiumObject()\n      }\n\n      // life cycle\n      onMounted(() => {\n        model.value.createPromise.then(({ Cesium, viewer }) => {\n          viewer.zoomTo(viewer.entities)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        onViewerReady,\n        model,\n        entity,\n        positions,\n        orientation,\n        availability,\n        position,\n        viewTopDown,\n        viewSide,\n        viewAircraft\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 path 是否显示。</td></tr><tr><td>leadTime</td><td>Number</td><td></td><td><code>optional</code> 指定 path 前面要显示的秒数。</td></tr><tr><td>trailTime</td><td>Number</td><td></td><td><code>optional</code> 指定 path 后面要显示的秒数。</td></tr><tr><td>width</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定 path 像素宽度。</td></tr><tr><td>resolution</td><td>Number</td><td><code>60</code></td><td><code>optional</code> 指定 path 步进最大秒数。</td></tr><tr><td>material</td><td>Object|String|Array</td><td><code>&#39;WHITE&#39;</code></td><td><code>optional</code> 指定 path 材质。</td></tr><tr><td>distanceDisplayCondition</td><td>Object</td><td></td><td><code>optional</code> 指定 path 随相机距离改变是否显示参数。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>definitionChanged</td><td></td><td>每当更改或修改属性或子属性时触发该事件。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PathGraphics.html\">PathGraphics</a></strong></li></ul>", 6);

function vc_graphics_pathvue_type_template_id_0e5ea339_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_graphics_pathvue_type_template_id_0e5ea339_hoisted_1, [vc_graphics_pathvue_type_template_id_0e5ea339_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-path.md?vue&type=template&id=0e5ea339

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-path.md?vue&type=script&lang=ts


/* harmony default export */ var vc_graphics_pathvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _renderList = vue_esm_browser["M" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("俯视");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("侧视");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("跟随");

      function render(_ctx, _cache) {
        var _component_vc_graphics_path = _resolveComponent("vc-graphics-path");

        var _component_vc_graphics_model = _resolveComponent("vc-graphics-model");

        var _component_vc_entity = _resolveComponent("vc-entity");

        var _component_vc_graphics_point = _resolveComponent("vc-graphics-point");

        var _component_vc_provider_imagery_arcgis_mapserver = _resolveComponent("vc-provider-imagery-arcgis-mapserver");

        var _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, {
              shouldAnimate: "",
              animation: "",
              timeline: "",
              onReady: _ctx.onViewerReady
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_entity, {
                  ref: "entity",
                  availability: _ctx.availability,
                  position: _ctx.position,
                  orientation: _ctx.orientation,
                  description: "Hello Vue Cesium"
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_graphics_path, {
                      ref: "path",
                      resolution: 1,
                      material: {
                        fabric: {
                          type: 'PolylineGlow',
                          uniforms: {
                            glowPower: 0.1,
                            color: 'yellow'
                          }
                        }
                      },
                      width: 10
                    }, null, 8, ["material"]), _createVNode(_component_vc_graphics_model, {
                      ref: "model",
                      uri: "./SampleData/models/CesiumAir/Cesium_Air.glb",
                      minimumPixelSize: 128
                    }, null, 512)];
                  }),
                  _: 1
                }, 8, ["availability", "position", "orientation"]), (_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.positions, function (position, index) {
                  return _openBlock(), _createBlock(_component_vc_entity, {
                    key: 'entity' + index,
                    position: position
                  }, {
                    default: _withCtx(function () {
                      return [_createVNode(_component_vc_graphics_point, {
                        pixelSize: 8,
                        color: "TRANSPARENT",
                        outlineColor: "YELLOW",
                        outlineWidth: 3
                      })];
                    }),
                    _: 2
                  }, 1032, ["position"]);
                }), 128)), _createVNode(_component_vc_layer_imagery, null, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_arcgis_mapserver)];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }, 8, ["onReady"]), _createVNode(_component_el_row, {
              class: "demo-toolbar"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.viewTopDown
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.viewSide
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.viewAircraft
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
          getCurrentInstance = vue_esm_browser["q" /* getCurrentInstance */],
          onMounted = vue_esm_browser["C" /* onMounted */];
      var democomponentExport = {
        setup: function setup() {
          // state
          var position = ref({});
          var positions = ref([]);
          var model = ref(null);
          var availability = ref(null);
          var orientation = ref(null);
          var entity = ref(null);
          var _viewer = undefined; // methods

          var onEntityEvt = function onEntityEvt(e) {
            console.log(e);
          };

          var onViewerReady = function onViewerReady(_ref) {
            var Cesium = _ref.Cesium,
                viewer = _ref.viewer;
            console.log('viewer ready');
            _viewer = viewer; //Enable lighting based on sun/moon positions

            viewer.scene.globe.enableLighting = true; //Enable depth testing so things behind the terrain disappear.

            viewer.scene.globe.depthTestAgainstTerrain = true; //Set the random number seed for consistent results.

            Cesium.Math.setRandomNumberSeed(3);
            var start = Cesium.JulianDate.fromDate(new Date(2015, 2, 25, 16));
            var stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate());
            viewer.clock.startTime = start.clone();
            viewer.clock.stopTime = stop.clone();
            viewer.clock.currentTime = start.clone();
            viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP; //Loop at the end

            viewer.clock.multiplier = 10;
            viewer.timeline.zoomTo(start, stop);
            position.value = computeCirclularFlight(-112.110693, 36.0994841, 0.03, start);
            availability.value = new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
              start: start,
              stop: stop
            })]);
            orientation.value = new Cesium.VelocityOrientationProperty(position.value);
          };

          var computeCirclularFlight = function computeCirclularFlight(lon, lat, radius, start) {
            var property = new Cesium.SampledPositionProperty();

            for (var i = 0; i <= 360; i += 45) {
              var radians = Cesium.Math.toRadians(i);
              var time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate());

              var _position = Cesium.Cartesian3.fromDegrees(lon + radius * 1.5 * Math.cos(radians), lat + radius * Math.sin(radians), Cesium.Math.nextRandomNumber() * 500 + 1750);

              property.addSample(time, _position);
              positions.value.push(_position);
            }

            return property;
          };

          var viewTopDown = function viewTopDown() {
            _viewer.trackedEntity = undefined;

            _viewer.zoomTo(_viewer.entities, new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90)));
          };

          var viewSide = function viewSide() {
            _viewer.trackedEntity = undefined;

            _viewer.zoomTo(_viewer.entities, new Cesium.HeadingPitchRange(Cesium.Math.toRadians(-90), Cesium.Math.toRadians(-15), 7500));
          };

          var viewAircraft = function viewAircraft() {
            _viewer.trackedEntity = entity.value.getCesiumObject();
          }; // life cycle


          onMounted(function () {
            model.value.createPromise.then(function (_ref2) {
              var Cesium = _ref2.Cesium,
                  viewer = _ref2.viewer;
              viewer.zoomTo(viewer.entities);
            });
          });
          return {
            onEntityEvt: onEntityEvt,
            onViewerReady: onViewerReady,
            model: model,
            entity: entity,
            positions: positions,
            orientation: orientation,
            availability: availability,
            position: position,
            viewTopDown: viewTopDown,
            viewSide: viewSide,
            viewAircraft: viewAircraft
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-path.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-path.md



vc_graphics_pathvue_type_script_lang_ts.render = vc_graphics_pathvue_type_template_id_0e5ea339_render

/* harmony default export */ var vc_graphics_path = __webpack_exports__["default"] = (vc_graphics_pathvue_type_script_lang_ts);

/***/ })

}]);