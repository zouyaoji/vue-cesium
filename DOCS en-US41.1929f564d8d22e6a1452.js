(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-path.md?vue&type=template&id=050d36d1

const vc_graphics_pathvue_type_template_id_050d36d1_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_graphics_pathvue_type_template_id_050d36d1_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcGraphicsPath ");

const vc_graphics_pathvue_type_template_id_050d36d1_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading a path graphic. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.PathGraphics"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance.")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("strong", null, "Note:"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" It needs to be a subcomponent of "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-entity"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" to load normally.")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of the VcGraphicsPath component.", -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-graphics-path"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add a path to the viewer.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer shouldAnimate animation timeline @ready=\"onViewerReady\">\n    <vc-entity ref=\"entity\" :availability=\"availability\" :position=\"position\" :orientation=\"orientation\" description=\"Hello VueCesium\">\n      <vc-graphics-path\n        ref=\"path\"\n        :resolution=\"1\"\n        :material=\"{fabric: {type: 'PolylineGlow', uniforms: {glowPower: 0.1, color: 'yellow'}}}\"\n        :width=\"10\"\n      ></vc-graphics-path>\n      <vc-graphics-model\n        ref=\"model\"\n        uri=\"https://zouyaoji.top/vue-cesium/SampleData/models/CesiumAir/Cesium_Air.glb\"\n        :minimumPixelSize=\"128\"\n      ></vc-graphics-model>\n    </vc-entity>\n    <vc-entity :key=\"'entity' + index\" :position=\"position\" v-for=\"(position, index) of positions\">\n      <vc-graphics-point :pixel-size=\"8\" color=\"TRANSPARENT\" outlineColor=\"YELLOW\" :outlineWidth=\"3\"></vc-graphics-point>\n    </vc-entity>\n    <vc-layer-imagery>\n      <vc-imagery-provider-arcgis></vc-imagery-provider-arcgis>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"viewTopDown\">ViewTopDown</el-button>\n    <el-button type=\"danger\" round @click=\"viewSide\">ViewSide</el-button>\n    <el-button type=\"danger\" round @click=\"viewAircraft\">ViewAircraft</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const position = ref({})\n      const positions = ref([])\n      const model = ref(null)\n      const availability = ref(null)\n      const orientation = ref(null)\n      const entity = ref(null)\n      let _viewer = undefined\n\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        console.log('viewer ready')\n        _viewer = viewer\n        //Enable lighting based on sun/moon positions\n        viewer.scene.globe.enableLighting = true\n        //Enable depth testing so things behind the terrain disappear.\n        viewer.scene.globe.depthTestAgainstTerrain = true\n        //Set the random number seed for consistent results.\n        Cesium.Math.setRandomNumberSeed(3)\n        const start = Cesium.JulianDate.fromDate(new Date(2015, 2, 25, 16))\n        const stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate())\n        viewer.clock.startTime = start.clone()\n        viewer.clock.stopTime = stop.clone()\n        viewer.clock.currentTime = start.clone()\n        viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP //Loop at the end\n        viewer.clock.multiplier = 10\n        viewer.timeline.zoomTo(start, stop)\n        position.value = computeCirclularFlight(-112.110693, 36.0994841, 0.03, start)\n        availability.value = new Cesium.TimeIntervalCollection([\n          new Cesium.TimeInterval({\n            start: start,\n            stop: stop\n          })\n        ])\n        orientation.value = new Cesium.VelocityOrientationProperty(position.value)\n      }\n\n      const computeCirclularFlight = (lon, lat, radius, start) => {\n        let property = new Cesium.SampledPositionProperty()\n        for (let i = 0; i <= 360; i += 45) {\n          let radians = Cesium.Math.toRadians(i)\n          let time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate())\n          let position = Cesium.Cartesian3.fromDegrees(\n            lon + radius * 1.5 * Math.cos(radians),\n            lat + radius * Math.sin(radians),\n            Cesium.Math.nextRandomNumber() * 500 + 1750\n          )\n          property.addSample(time, position)\n          positions.value.push(position)\n        }\n        return property\n      }\n\n      const viewTopDown = () => {\n        _viewer.trackedEntity = undefined\n        _viewer.zoomTo(_viewer.entities, new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90)))\n      }\n      const viewSide = () => {\n        _viewer.trackedEntity = undefined\n        _viewer.zoomTo(_viewer.entities, new Cesium.HeadingPitchRange(Cesium.Math.toRadians(-90), Cesium.Math.toRadians(-15), 7500))\n      }\n      const viewAircraft = () => {\n        _viewer.trackedEntity = entity.value.getCesiumObject()\n      }\n\n      // life cycle\n      onMounted(() => {\n        model.value.creatingPromise.then(({ Cesium, viewer }) => {\n          viewer.zoomTo(viewer.entities)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        onViewerReady,\n        model,\n        entity,\n        positions,\n        orientation,\n        availability,\n        position,\n        viewTopDown,\n        viewSide,\n        viewAircraft\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> A boolean Property specifying the visibility of the path.</td></tr><tr><td>leadTime</td><td>number | Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;number&gt;</td><td></td><td><code>optional</code> A Property specifying the number of seconds behind the object to show.</td></tr><tr><td>trailTime</td><td>number | Cesium.CallbackProperty | VcCallbackPropertyFunction&lt;number&gt;</td><td></td><td><code>optional</code> A Property specifying the number of seconds in front of the object to show.</td></tr><tr><td>width</td><td>number</td><td><code>1.0</code></td><td><code>optional</code> A numeric Property specifying the width in pixels.</td></tr><tr><td>resolution</td><td>number</td><td><code>60</code></td><td><code>optional</code> A numeric Property specifying the maximum number of seconds to step when sampling the position.</td></tr><tr><td>material</td><td>VcMaterial|string|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> A Property specifying the material used to draw the path.</td></tr><tr><td>distanceDisplayCondition</td><td>VcDistanceDisplayCondition|Array</td><td></td><td><code>optional</code> A Property specifying at what distance from the camera that this path will be displayed.</td></tr></tbody></table>", 1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>definitionChanged</td><td></td><td>Triggers whenever a property or sub-property is changed or modified.</td></tr></tbody></table>", 1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("PathGraphics");

function vc_graphics_pathvue_type_template_id_050d36d1_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_graphics_pathvue_type_template_id_050d36d1_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcgraphicspath",
    tabindex: "-1",
    content: "VcGraphicsPath",
    href: "#vcgraphicspath",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_graphics_pathvue_type_template_id_050d36d1_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcgraphicspath"
    })]),
    _: 1
  }), vc_graphics_pathvue_type_template_id_050d36d1_hoisted_3, _hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_14, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/PathGraphics.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-path.md?vue&type=template&id=050d36d1

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/graphics/vc-graphics-path.md?vue&type=script&lang=ts

/* harmony default export */ var vc_graphics_pathvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        createBlock: _createBlock,
        createTextVNode: _createTextVNode
      } = vue_esm_browser;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("ViewTopDown");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("ViewSide");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("ViewAircraft");

      function render(_ctx, _cache) {
        const _component_vc_graphics_path = _resolveComponent("vc-graphics-path");

        const _component_vc_graphics_model = _resolveComponent("vc-graphics-model");

        const _component_vc_entity = _resolveComponent("vc-entity");

        const _component_vc_graphics_point = _resolveComponent("vc-graphics-point");

        const _component_vc_imagery_provider_arcgis = _resolveComponent("vc-imagery-provider-arcgis");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            shouldAnimate: "",
            animation: "",
            timeline: "",
            onReady: _ctx.onViewerReady
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_entity, {
              ref: "entity",
              availability: _ctx.availability,
              position: _ctx.position,
              orientation: _ctx.orientation,
              description: "Hello VueCesium"
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_graphics_path, {
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
                uri: "https://zouyaoji.top/vue-cesium/SampleData/models/CesiumAir/Cesium_Air.glb",
                minimumPixelSize: 128
              }, null, 512)]),
              _: 1
            }, 8, ["availability", "position", "orientation"]), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.positions, (position, index) => {
              return _openBlock(), _createBlock(_component_vc_entity, {
                key: 'entity' + index,
                position: position
              }, {
                default: _withCtx(() => [_createVNode(_component_vc_graphics_point, {
                  "pixel-size": 8,
                  color: "TRANSPARENT",
                  outlineColor: "YELLOW",
                  outlineWidth: 3
                })]),
                _: 2
              }, 1032, ["position"]);
            }), 128)), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_arcgis)]),
              _: 1
            })]),
            _: 1
          }, 8, ["onReady"]), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.viewTopDown
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.viewSide
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.viewAircraft
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
        getCurrentInstance,
        onMounted
      } = vue_esm_browser;
      const democomponentExport = {
        setup() {
          // state
          const position = ref({});
          const positions = ref([]);
          const model = ref(null);
          const availability = ref(null);
          const orientation = ref(null);
          const entity = ref(null);
          let _viewer = undefined; // methods

          const onEntityEvt = e => {
            console.log(e);
          };

          const onViewerReady = _ref => {
            let {
              Cesium,
              viewer
            } = _ref;
            console.log('viewer ready');
            _viewer = viewer; //Enable lighting based on sun/moon positions

            viewer.scene.globe.enableLighting = true; //Enable depth testing so things behind the terrain disappear.

            viewer.scene.globe.depthTestAgainstTerrain = true; //Set the random number seed for consistent results.

            Cesium.Math.setRandomNumberSeed(3);
            const start = Cesium.JulianDate.fromDate(new Date(2015, 2, 25, 16));
            const stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate());
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

          const computeCirclularFlight = (lon, lat, radius, start) => {
            let property = new Cesium.SampledPositionProperty();

            for (let i = 0; i <= 360; i += 45) {
              let radians = Cesium.Math.toRadians(i);
              let time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate());
              let position = Cesium.Cartesian3.fromDegrees(lon + radius * 1.5 * Math.cos(radians), lat + radius * Math.sin(radians), Cesium.Math.nextRandomNumber() * 500 + 1750);
              property.addSample(time, position);
              positions.value.push(position);
            }

            return property;
          };

          const viewTopDown = () => {
            _viewer.trackedEntity = undefined;

            _viewer.zoomTo(_viewer.entities, new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90)));
          };

          const viewSide = () => {
            _viewer.trackedEntity = undefined;

            _viewer.zoomTo(_viewer.entities, new Cesium.HeadingPitchRange(Cesium.Math.toRadians(-90), Cesium.Math.toRadians(-15), 7500));
          };

          const viewAircraft = () => {
            _viewer.trackedEntity = entity.value.getCesiumObject();
          }; // life cycle


          onMounted(() => {
            model.value.creatingPromise.then(_ref2 => {
              let {
                Cesium,
                viewer
              } = _ref2;
              viewer.zoomTo(viewer.entities);
            });
          });
          return {
            onEntityEvt,
            onViewerReady,
            model,
            entity,
            positions,
            orientation,
            availability,
            position,
            viewTopDown,
            viewSide,
            viewAircraft
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
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-path.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/graphics/vc-graphics-path.md



vc_graphics_pathvue_type_script_lang_ts.render = vc_graphics_pathvue_type_template_id_050d36d1_render

/* harmony default export */ var vc_graphics_path = __webpack_exports__["default"] = (vc_graphics_pathvue_type_script_lang_ts);

/***/ })

}]);