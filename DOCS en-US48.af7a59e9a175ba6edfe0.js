(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/overlays/vc-overlay-dynamic.md?vue&type=template&id=69a609fa

const vc_overlay_dynamicvue_type_template_id_69a609fa_hoisted_1 = {
  class: "content element-doc"
};

const vc_overlay_dynamicvue_type_template_id_69a609fa_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h2", {
  id: "vcoverlaydynamic"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  class: "header-anchor",
  href: "#vcoverlaydynamic"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" VcOverlayDynamic")], -1);

const vc_overlay_dynamicvue_type_template_id_69a609fa_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Load dynamic objects.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Basic usage")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcOverlayDynamic component.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-dynamic"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to load and manage a group of dynamic entity objects on the viewer.")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer timeline animation>\n    <vc-overlay-dynamic ref=\"dynamicOverlayRef\" v-model:currentTime=\"currentTime\" :dynamicOverlays=\"dynamicOverlays\" @ready=\"ready\">\n    </vc-overlay-dynamic>\n    <vc-layer-imagery :sortOrder=\"10\">\n      <vc-provider-imagery-baidumap></vc-provider-imagery-baidumap>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, nextTick, onUnmounted } from 'vue'\n  export default {\n    setup() {\n      const generatePosition = num => {\n        let list = []\n        for (let i = 0; i < num; i++) {\n          let lng = 120.65276089 + Math.random() * 0.5\n          let lat = 31.310530293 + Math.random() * 0.5\n          list.push([lng, lat])\n        }\n        return list\n      }\n\n      const dynamicOverlays = ref([])\n      const dynamicOverlayRef = ref(null)\n      const currentTime = ref(null)\n      window.dynamicOverlays = dynamicOverlays\n      window.currentTime = currentTime\n\n      for (let i = 0; i < 50; i++) {\n        dynamicOverlays.value.push({\n          //The maximum number of buffer points, the real-time track should not be set too large; the historical track should be set to be greater than the total number of points, otherwise the data will be lost.\n          maxCacheSize: 10,\n          model: {\n            uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/Car/Car.gltf',\n            scale: 12\n          },\n          // trajectory\n          path: {\n            leadTime: 0,\n            trailTime: 0.5,\n            resolution: 1,\n            width: 3,\n            material: { fabric: { type: 'PolylineGlow', uniforms: { glowPower: 0.1, color: 'yellow' } } }\n          },\n          // A SampledProperty and a PositionProperty array.\n          sampledPositions: [\n            {\n              position: generatePosition(1)[0], // Given an initial position\n              interval: 3\n            }\n          ]\n        })\n      }\n\n      const unload = () => {\n        dynamicOverlayRef.value.unload()\n      }\n      const load = () => {\n        dynamicOverlayRef.value.load()\n      }\n      const reload = () => {\n        dynamicOverlayRef.value.reload()\n      }\n      let timer\n      const ready = ({ viewer }) => {\n        viewer.flyTo(dynamicOverlayRef.value.cesiumObject, {\n          duration: 3\n        })\n        // Change the position of all dynamic objects every 3 seconds\n        timer = setInterval(() => {\n          dynamicOverlayRef.value.overlays.value.forEach(v => v.addPosition(generatePosition(1)[0], 3))\n        }, 3000)\n      }\n\n      onUnmounted(() => {\n        clearInterval(timer)\n      })\n\n      return {\n        dynamicOverlays,\n        dynamicOverlayRef,\n        currentTime,\n        unload,\n        load,\n        reload,\n        ready\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specifies whether to display the CustomDataSource that hosts the dynamic overlays.</td><td></td></tr><tr><td>name</td><td>String</td><td><code>&#39;__vc__overlay__dynamic__&#39;</code></td><td><code>optional</code> Specifies the name of the CustomDataSource.</td><td></td></tr><tr><td>startTime</td><td>String| Cesium.JulianDate</td><td></td><td><code>optional</code> The start time of the clock.</td><td></td></tr><tr><td>stopTime</td><td>String| Cesium.JulianDate</td><td></td><td><code>optional</code> The stop time of the clock.</td><td></td></tr><tr><td>currentTime</td><td>String| Cesium.JulianDate</td><td></td><td><code>optional</code> The current time.</td><td></td></tr><tr><td>clockRange</td><td>Number| Cesium.ClockRange</td><td><code>0</code></td><td><code>optional</code> Determines how the clock should behave when Clock#startTime or Clock#stopTime is reached.</td><td></td></tr><tr><td>clockStep</td><td>Number| Cesium.ClockStep</td><td><code>1</code></td><td><code>optional</code> Determines if calls to Clock#tick are frame dependent or system clock dependent.</td><td></td></tr><tr><td>shouldAnimate</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Indicates whether Clock#tick should attempt to advance time. The clock will only tick when both Clock#canAnimate and Clock#shouldAnimate are true.</td><td></td></tr><tr><td>multiplier</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> Determines how much time advances when Clock#tick is called, negative values allow for advancing backwards.</td><td></td></tr><tr><td>dynamicOverlays</td><td>Array&lt;DynamicOverlayOpts&gt;</td><td><code>[]</code></td><td><code>optional</code> A SampledProperty and a PositionProperty array.</td><td></td></tr><tr><td>defaultInterval</td><td>Number</td><td><code>3.0</code></td><td><code>optional</code> Specify the default refresh interval of the default position information, and it is available to change the position of the dynamic overlays in real time.</td><td></td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li><a href=\"http://dc.dvgis.cn/#/editor?type=layer&amp;example=dynamic\">DC-SDK</a></li></ul>", 6);

function vc_overlay_dynamicvue_type_template_id_69a609fa_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_overlay_dynamicvue_type_template_id_69a609fa_hoisted_1, [vc_overlay_dynamicvue_type_template_id_69a609fa_hoisted_2, vc_overlay_dynamicvue_type_template_id_69a609fa_hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/overlays/vc-overlay-dynamic.md?vue&type=template&id=69a609fa

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/overlays/vc-overlay-dynamic.md?vue&type=script&lang=ts

/* harmony default export */ var vc_overlay_dynamicvue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        const _component_vc_overlay_dynamic = _resolveComponent("vc-overlay-dynamic");

        const _component_vc_provider_imagery_baidumap = _resolveComponent("vc-provider-imagery-baidumap");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            timeline: "",
            animation: ""
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_overlay_dynamic, {
              ref: "dynamicOverlayRef",
              currentTime: _ctx.currentTime,
              "onUpdate:currentTime": _cache[0] || (_cache[0] = $event => _ctx.currentTime = $event),
              dynamicOverlays: _ctx.dynamicOverlays,
              onReady: _ctx.ready
            }, null, 8, ["currentTime", "dynamicOverlays", "onReady"]), _createVNode(_component_vc_layer_imagery, {
              sortOrder: 10
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_baidumap)]),
              _: 1
            })]),
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
            }, 8, ["onClick"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const {
        ref,
        nextTick,
        onUnmounted
      } = vue_esm_browser;
      const democomponentExport = {
        setup() {
          const generatePosition = num => {
            let list = [];

            for (let i = 0; i < num; i++) {
              let lng = 120.65276089 + Math.random() * 0.5;
              let lat = 31.310530293 + Math.random() * 0.5;
              list.push([lng, lat]);
            }

            return list;
          };

          const dynamicOverlays = ref([]);
          const dynamicOverlayRef = ref(null);
          const currentTime = ref(null);
          window.dynamicOverlays = dynamicOverlays;
          window.currentTime = currentTime;

          for (let i = 0; i < 50; i++) {
            dynamicOverlays.value.push({
              //The maximum number of buffer points, the real-time track should not be set too large; the historical track should be set to be greater than the total number of points, otherwise the data will be lost.
              maxCacheSize: 10,
              model: {
                uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/Car/Car.gltf',
                scale: 12
              },
              // trajectory
              path: {
                leadTime: 0,
                trailTime: 0.5,
                resolution: 1,
                width: 3,
                material: {
                  fabric: {
                    type: 'PolylineGlow',
                    uniforms: {
                      glowPower: 0.1,
                      color: 'yellow'
                    }
                  }
                }
              },
              // A SampledProperty and a PositionProperty array.
              sampledPositions: [{
                position: generatePosition(1)[0],
                // Given an initial position
                interval: 3
              }]
            });
          }

          const unload = () => {
            dynamicOverlayRef.value.unload();
          };

          const load = () => {
            dynamicOverlayRef.value.load();
          };

          const reload = () => {
            dynamicOverlayRef.value.reload();
          };

          let timer;

          const ready = ({
            viewer
          }) => {
            viewer.flyTo(dynamicOverlayRef.value.cesiumObject, {
              duration: 3
            }); // Change the position of all dynamic objects every 3 seconds

            timer = setInterval(() => {
              dynamicOverlayRef.value.overlays.value.forEach(v => v.addPosition(generatePosition(1)[0], 3));
            }, 3000);
          };

          onUnmounted(() => {
            clearInterval(timer);
          });
          return {
            dynamicOverlays,
            dynamicOverlayRef,
            currentTime,
            unload,
            load,
            reload,
            ready
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
// CONCATENATED MODULE: ./website/docs/en-US/overlays/vc-overlay-dynamic.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/overlays/vc-overlay-dynamic.md



vc_overlay_dynamicvue_type_script_lang_ts.render = vc_overlay_dynamicvue_type_template_id_69a609fa_render

/* harmony default export */ var vc_overlay_dynamic = __webpack_exports__["default"] = (vc_overlay_dynamicvue_type_script_lang_ts);

/***/ })

}]);