(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-path.md?vue&type=template&id=51c910a9

var vc_graphics_pathvue_type_template_id_51c910a9_hoisted_1 = {
  class: "content element-doc"
};

var vc_graphics_pathvue_type_template_id_51c910a9_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h2 id=\"vcgraphicspath\"><a class=\"header-anchor\" href=\"#vcgraphicspath\">¶</a> VcGraphicsPath</h2><p>Loading a path graphic. It is equivalent to initializing a <code>Cesium.PathGraphics</code> instance.</p><p><strong>Note:</strong> It needs to be a subcomponent of <code>vc-entity</code> to load normally.</p><h3 id=\"basic-usage\"><a class=\"header-anchor\" href=\"#basic-usage\">¶</a> Basic usage</h3><p>Basic usage of the VcGraphicsPath component.</p>", 5);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-graphics-path"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tag to add a path to the viewer.")])], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer shouldAnimate animation timeline @ready=\"onViewerReady\">\n    <vc-entity ref=\"entity\" :availability=\"availability\" :position=\"position\" :orientation=\"orientation\" description=\"Hello Vue Cesium\">\n      <vc-graphics-path\n        ref=\"path\"\n        :resolution=\"1\"\n        :material=\"{fabric: {type: 'PolylineGlow', uniforms: {glowPower: 0.1, color: 'yellow'}}}\"\n        :width=\"10\"\n      ></vc-graphics-path>\n      <vc-graphics-model ref=\"model\" uri=\"./SampleData/models/CesiumAir/Cesium_Air.glb\" :minimumPixelSize=\"128\"></vc-graphics-model>\n    </vc-entity>\n    <vc-entity :key=\"'entity' + index\" :position=\"position\" v-for=\"(position, index) of positions\">\n      <vc-graphics-point :pixelSize=\"8\" color=\"TRANSPARENT\" outlineColor=\"YELLOW\" :outlineWidth=\"3\"></vc-graphics-point>\n    </vc-entity>\n    <vc-layer-imagery>\n      <vc-provider-imagery-arcgis-mapserver></vc-provider-imagery-arcgis-mapserver>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"viewTopDown\">ViewTopDown</el-button>\n    <el-button type=\"danger\" round @click=\"viewSide\">ViewSide</el-button>\n    <el-button type=\"danger\" round @click=\"viewAircraft\">ViewAircraft</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const position = ref({})\n      const positions = ref([])\n      const model = ref(null)\n      const availability = ref(null)\n      const orientation = ref(null)\n      const entity = ref(null)\n      let _viewer = undefined\n\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        console.log('viewer ready')\n        _viewer = viewer\n        //Enable lighting based on sun/moon positions\n        viewer.scene.globe.enableLighting = true\n        //Enable depth testing so things behind the terrain disappear.\n        viewer.scene.globe.depthTestAgainstTerrain = true\n        //Set the random number seed for consistent results.\n        Cesium.Math.setRandomNumberSeed(3)\n        const start = Cesium.JulianDate.fromDate(new Date(2015, 2, 25, 16))\n        const stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate())\n        viewer.clock.startTime = start.clone()\n        viewer.clock.stopTime = stop.clone()\n        viewer.clock.currentTime = start.clone()\n        viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP //Loop at the end\n        viewer.clock.multiplier = 10\n        viewer.timeline.zoomTo(start, stop)\n        position.value = computeCirclularFlight(-112.110693, 36.0994841, 0.03, start)\n        availability.value = new Cesium.TimeIntervalCollection([\n          new Cesium.TimeInterval({\n            start: start,\n            stop: stop\n          })\n        ])\n        orientation.value = new Cesium.VelocityOrientationProperty(position.value)\n      }\n\n      const computeCirclularFlight = (lon, lat, radius, start) => {\n        let property = new Cesium.SampledPositionProperty()\n        for (let i = 0; i <= 360; i += 45) {\n          let radians = Cesium.Math.toRadians(i)\n          let time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate())\n          let position = Cesium.Cartesian3.fromDegrees(\n            lon + radius * 1.5 * Math.cos(radians),\n            lat + radius * Math.sin(radians),\n            Cesium.Math.nextRandomNumber() * 500 + 1750\n          )\n          property.addSample(time, position)\n          positions.value.push(position)\n        }\n        return property\n      }\n\n      const viewTopDown = () => {\n        _viewer.trackedEntity = undefined\n        _viewer.zoomTo(_viewer.entities, new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90)))\n      }\n      const viewSide = () => {\n        _viewer.trackedEntity = undefined\n        _viewer.zoomTo(_viewer.entities, new Cesium.HeadingPitchRange(Cesium.Math.toRadians(-90), Cesium.Math.toRadians(-15), 7500))\n      }\n      const viewAircraft = () => {\n        _viewer.trackedEntity = entity.value.getCesiumObject()\n      }\n\n      // life cycle\n      onMounted(() => {\n        model.value.createPromise.then(({ Cesium, viewer }) => {\n          viewer.zoomTo(viewer.entities)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        onViewerReady,\n        model,\n        entity,\n        positions,\n        orientation,\n        availability,\n        position,\n        viewTopDown,\n        viewSide,\n        viewAircraft\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying the visibility of the path.</td></tr><tr><td>leadTime</td><td>Object</td><td></td><td><code>optional</code> A Property specifying the number of seconds behind the object to show.</td></tr><tr><td>trailTime</td><td>Object</td><td></td><td><code>optional</code> A Property specifying the number of seconds in front of the object to show.</td></tr><tr><td>width</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> A numeric Property specifying the width in pixels.</td></tr><tr><td>resolution</td><td>Number</td><td><code>60</code></td><td><code>optional</code> A numeric Property specifying the maximum number of seconds to step when sampling the position.</td></tr><tr><td>material</td><td>Object|String|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> A Property specifying the material used to draw the path.</td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> A Property specifying at what distance from the camera that this path will be displayed.</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>definitionChanged</td><td></td><td>Triggers whenever a property or sub-property is changed or modified.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PathGraphics.html\">PathGraphics</a></strong></li></ul>", 6);

function vc_graphics_pathvue_type_template_id_51c910a9_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_graphics_pathvue_type_template_id_51c910a9_hoisted_1, [vc_graphics_pathvue_type_template_id_51c910a9_hoisted_2, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-path.md?vue&type=template&id=51c910a9

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-path.md?vue&type=script&lang=ts


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

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("ViewTopDown");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("ViewSide");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("ViewAircraft");

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
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-path.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-path.md



vc_graphics_pathvue_type_script_lang_ts.render = vc_graphics_pathvue_type_template_id_51c910a9_render

/* harmony default export */ var vc_graphics_path = __webpack_exports__["default"] = (vc_graphics_pathvue_type_script_lang_ts);

/***/ })

}]);