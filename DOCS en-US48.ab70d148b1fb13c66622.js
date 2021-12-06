(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.23/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_b706f451d6404ce468e2858b35d8eb7f/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_b706f451d6404ce468e2858b35d8eb7f/node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/overlays/vc-overlay-dynamic.md?vue&type=template&id=438c1a75

const vc_overlay_dynamicvue_type_template_id_438c1a75_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_overlay_dynamicvue_type_template_id_438c1a75_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcOverlayDynamic ");

const vc_overlay_dynamicvue_type_template_id_438c1a75_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Load dynamic objects.", -1);

const vc_overlay_dynamicvue_type_template_id_438c1a75_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const vc_overlay_dynamicvue_type_template_id_438c1a75_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcOverlayDynamic component.", -1);

const vc_overlay_dynamicvue_type_template_id_438c1a75_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-dynamic"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to load and manage a group of dynamic entity objects on the viewer.")])], -1);

const vc_overlay_dynamicvue_type_template_id_438c1a75_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer timeline animation @ready=\"onViewerReady\">\n    <vc-overlay-dynamic\n      ref=\"dynamicOverlayRef\"\n      v-model:currentTime=\"currentTime\"\n      v-model:startTime=\"startTime\"\n      v-model:stopTime=\"stopTime\"\n      :dynamicOverlays=\"dynamicOverlays\"\n      :clockRange=\"clockRange\"\n      :multiplier=\"multiplier\"\n      @ready=\"ready\"\n    >\n    </vc-overlay-dynamic>\n    <vc-layer-imagery :sortOrder=\"10\">\n      <vc-provider-imagery-osm></vc-provider-imagery-osm>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    <el-radio-group v-model=\"radio\" @change=\"onRadioChanged\">\n      <el-radio :label=\"0\">Real Time</el-radio>\n      <el-radio :label=\"1\">History</el-radio>\n    </el-radio-group>\n    <el-row v-if=\"radio === 1\">\n      <el-button type=\"danger\" round @click=\"viewTopDown\">ViewTopDown</el-button>\n      <el-button type=\"danger\" round @click=\"viewSide\">ViewSide</el-button>\n      <el-button type=\"danger\" round @click=\"viewAircraft\">ViewAircraft</el-button>\n    </el-row>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, nextTick, onMounted, onUnmounted } from 'vue'\n  export default {\n    setup() {\n      const dynamicOverlays = ref([])\n      const dynamicOverlayRef = ref(null)\n      const currentTime = ref(null)\n      const startTime = ref(null)\n      const stopTime = ref(null)\n      const clockRange = ref(0)\n      const radio = ref(0)\n      const multiplier = ref(1.0)\n      const text = ref('yeah')\n\n      const makeRealTimeTrajectory = () => {\n        multiplier.value = 1\n        clockRange.value = Cesium.ClockRange.UNBOUNDED\n        const start = Cesium.JulianDate.fromDate(new Date())\n        const stop = Cesium.JulianDate.addHours(start, 8, new Cesium.JulianDate())\n        stopTime.value = stop.clone()\n        currentTime.value = start.clone()\n        startTime.value = start.clone()\n\n        const overlays = []\n        for (let i = 0; i < 50; i++) {\n          overlays.push({\n            maxCacheSize: 10, //The maximum number of buffer points, the real-time track should not be set too large; the historical track should be set to be greater than the total number of points, otherwise the data will be lost.\n            model: {\n              uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/Car/Car.gltf',\n              scale: 1\n            },\n            // wake\n            path: {\n              leadTime: 0,\n              trailTime: 0.5,\n              resolution: 1,\n              width: 3,\n              material: { fabric: { type: 'PolylineGlow', uniforms: { glowPower: 0.1, color: 'yellow' } } }\n            },\n            // A SampledProperty and a PositionProperty array.\n            sampledPositions: [\n              {\n                position: generatePosition(1, 0.05)[0], // Given an initial position\n                interval: 3\n              }\n            ]\n          })\n        }\n        return overlays\n      }\n\n      const makeHistoryTrajectory = async () => {\n        const datas = await Cesium.Resource.fetchJson('./SampleData/json/trajectory.json')\n        const overlays = []\n        const sampledPositions = []\n        const positions = []\n        // The time string must be in Iso8601 format\n        startTime.value = datas[0].time.replace(' ', 'T')\n        currentTime.value = datas[0].time.replace(' ', 'T')\n        stopTime.value = datas[datas.length - 1].time.replace(' ', 'T')\n        multiplier.value = 10\n        clockRange.value = Cesium.ClockRange.LOOP_STOP\n        const totalSeconds = Cesium.JulianDate.fromIso8601(stopTime.value).secondsOfDay - Cesium.JulianDate.fromIso8601(startTime.value).secondsOfDay\n        // Store the wheel's rotation over time in a SampledProperty.\n        const wheelAngleProperty = new Cesium.SampledProperty(Number)\n        let wheelAngle = 0\n\n        for (let i = 0; i < datas.length; i++) {\n          const data = datas[i]\n          sampledPositions.push({\n            position: [data.lon, data.lat],\n            time: data.time.replace(' ', 'T')\n          })\n          positions.push([data.lon, data.lat])\n\n          const metersPerSecond = Number(data.speed)\n          const wheelRadius = 0.52 //in meters.\n          const circumference = Math.PI * wheelRadius * 2\n          const rotationsPerSecond = metersPerSecond / circumference\n          const time = Cesium.JulianDate.fromIso8601(data.time.replace(' ', 'T'))\n\n          wheelAngle += ((Math.PI * 2 * totalSeconds) / datas.length) * rotationsPerSecond\n          wheelAngleProperty.addSample(time, wheelAngle)\n        }\n\n        const rotationProperty = new Cesium.CallbackProperty(function (time, result) {\n          return Cesium.Quaternion.fromAxisAngle(Cesium.Cartesian3.UNIT_X, wheelAngleProperty.getValue(time), result)\n        }, false)\n\n        const wheelTransformation = new Cesium.NodeTransformationProperty({\n          rotation: rotationProperty\n        })\n\n        const nodeTransformations = {\n          Wheels: wheelTransformation,\n          Wheels_mid: wheelTransformation,\n          Wheels_rear: wheelTransformation\n        }\n\n        overlays.push({\n          maxCacheSize: datas.length, // The maximum number of buffer points, the real-time track should not be set too large; the historical track should be set to be greater than the total number of points, otherwise the data will be lost.\n          model: {\n            uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/GroundVehicle/GroundVehicle.glb',\n            scale: 5,\n            runAnimations: false,\n            nodeTransformations: nodeTransformations\n          },\n          // wake\n          path: {\n            leadTime: 0,\n            trailTime: 25,\n            resolution: 1,\n            width: 10,\n            material: { fabric: { type: 'PolylineGlow', uniforms: { glowPower: 0.1, color: 'yellow' } } }\n          },\n          // label\n          label: {\n            text: new Cesium.CallbackProperty(time => {\n              if (dynamicOverlayRef.value.overlays.value.length) {\n                const velocityVector = dynamicOverlayRef.value.overlays.value[0]._velocityVectorProperty.getValue(time, {})\n                var metersPerSecond = Cesium.Cartesian3.magnitude(velocityVector)\n                var kmPerHour = Math.round(metersPerSecond * 3.6)\n\n                return kmPerHour + ' km/h'\n              }\n              return 'hello'\n            }, false),\n            verticalOrigin: 1,\n            showBackground: true,\n            font: '20px sans-serif',\n            distanceDisplayCondition: [0, 3000],\n            eyeOffset: { x: 0, y: 25, z: 0 }\n          },\n          // trajectory\n          polyline: {\n            positions,\n            width: 3,\n            material: '#69B273',\n            depthFailMaterial: '#69B273',\n            clampToGround: true\n          },\n          sampledPositions\n        })\n        return overlays\n      }\n\n      const generatePosition = (num, range) => {\n        let list = []\n        for (let i = 0; i < num; i++) {\n          let lng = 120.65276089 + Math.random() * range\n          let lat = 31.310530293 + Math.random() * range\n          list.push([lng, lat])\n        }\n        return list\n      }\n\n      const unload = () => {\n        dynamicOverlayRef.value.unload()\n      }\n      const load = () => {\n        dynamicOverlayRef.value.load()\n      }\n      const reload = () => {\n        dynamicOverlayRef.value.reload()\n      }\n      let timer, _viewer\n\n      const ready = ({ viewer, cesiumObject }) => {\n        viewer.flyTo(cesiumObject, {\n          duration: 3\n        })\n      }\n\n      const onRadioChanged = async e => {\n        timer && clearInterval(timer)\n        if (e === 0) {\n          dynamicOverlays.value = makeRealTimeTrajectory()\n          timer = setInterval(() => {\n            dynamicOverlayRef.value.overlays.value.forEach(v => v.addPosition(generatePosition(1, 0.05)[0], 3))\n          }, 3000)\n          nextTick(() => {\n            dynamicOverlayRef.value.cesiumObject && _viewer?.flyTo(dynamicOverlayRef.value.cesiumObject, { duration: 3 })\n            _viewer.timeline.zoomTo(_viewer.clock.startTime, _viewer.clock.stopTime)\n          })\n        } else {\n          dynamicOverlays.value = await makeHistoryTrajectory()\n\n          nextTick(() => {\n            const sampledPositions = dynamicOverlayRef.value.cesiumObject.entities.values[0].sampledPositions\n            const positions = sampledPositions.map(v => {\n              return Cesium.Cartesian3.fromDegrees(v.position[0], v.position[1])\n            })\n            _viewer.timeline.zoomTo(_viewer.clock.startTime, _viewer.clock.stopTime)\n            viewTopDown()\n          })\n        }\n      }\n\n      const onViewerReady = ({ viewer }) => {\n        _viewer = viewer\n        onRadioChanged(radio.value)\n      }\n\n      const viewTopDown = () => {\n        _viewer.trackedEntity = undefined\n        const sampledPositions = dynamicOverlayRef.value.cesiumObject.entities.values[0].sampledPositions\n        const positions = sampledPositions.map(v => {\n          return Cesium.Cartesian3.fromDegrees(v.position[0], v.position[1])\n        })\n        const boundingSphere = Cesium.BoundingSphere.fromPoints(positions)\n        _viewer.camera.flyToBoundingSphere(boundingSphere, {\n          duration: 1.5,\n          offset: new Cesium.HeadingPitchRange(Cesium.Math.toRadians(360), Cesium.Math.toRadians(-90), boundingSphere.radius * 5)\n        })\n      }\n\n      const viewSide = () => {\n        _viewer.trackedEntity = undefined\n        const sampledPositions = dynamicOverlayRef.value.cesiumObject.entities.values[0].sampledPositions\n        const positions = sampledPositions.map(v => {\n          return Cesium.Cartesian3.fromDegrees(v.position[0], v.position[1])\n        })\n        const boundingSphere = Cesium.BoundingSphere.fromPoints(positions)\n        _viewer.camera.flyToBoundingSphere(boundingSphere, {\n          duration: 1.5,\n          offset: new Cesium.HeadingPitchRange(Cesium.Math.toRadians(-90), Cesium.Math.toRadians(-15), boundingSphere.radius * 2)\n        })\n      }\n\n      const viewAircraft = () => {\n        _viewer.trackedEntity = dynamicOverlayRef.value.cesiumObject.entities.values[0]\n        const sampledPositions = dynamicOverlayRef.value.cesiumObject.entities.values[0].sampledPositions\n        const positions = sampledPositions.map(v => {\n          return Cesium.Cartesian3.fromDegrees(v.position[0], v.position[1])\n        })\n        const boundingSphere = Cesium.BoundingSphere.fromPoints(positions)\n        dynamicOverlayRef.value.cesiumObject.entities.values[0].viewFrom = new Cesium.Cartesian3(boundingSphere.radius, 0, boundingSphere.radius)\n      }\n\n      onUnmounted(() => {\n        clearInterval(timer)\n      })\n\n      return {\n        dynamicOverlays,\n        dynamicOverlayRef,\n        currentTime,\n        startTime,\n        stopTime,\n        clockRange,\n        onViewerReady,\n        unload,\n        load,\n        reload,\n        ready,\n        radio,\n        onRadioChanged,\n        multiplier,\n        viewTopDown,\n        viewSide,\n        viewAircraft\n      }\n    }\n  }\n</script>\n")], -1);

const vc_overlay_dynamicvue_type_template_id_438c1a75_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specifies whether to display the CustomDataSource that hosts the dynamic overlays.</td><td></td></tr><tr><td>name</td><td>String</td><td><code>&#39;__vc__overlay__dynamic__&#39;</code></td><td><code>optional</code> Specifies the name of the CustomDataSource.</td><td></td></tr><tr><td>startTime</td><td>String| Date | JulianDate</td><td></td><td><code>optional</code> The start time of the clock.</td><td></td></tr><tr><td>stopTime</td><td>String| Date | JulianDate</td><td></td><td><code>optional</code> The stop time of the clock.</td><td></td></tr><tr><td>currentTime</td><td>String| Date | JulianDate</td><td></td><td><code>optional</code> The current time.</td><td></td></tr><tr><td>clockRange</td><td>Number| Cesium.ClockRange</td><td><code>0</code></td><td><code>optional</code> Determines how the clock should behave when Clock#startTime or Clock#stopTime is reached.</td><td></td></tr><tr><td>clockStep</td><td>Number| Cesium.ClockStep</td><td><code>1</code></td><td><code>optional</code> Determines if calls to Clock#tick are frame dependent or system clock dependent.</td><td></td></tr><tr><td>shouldAnimate</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Indicates whether Clock#tick should attempt to advance time. The clock will only tick when both Clock#canAnimate and Clock#shouldAnimate are true.</td><td></td></tr><tr><td>multiplier</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> Determines how much time advances when Clock#tick is called, negative values allow for advancing backwards.</td><td></td></tr><tr><td>dynamicOverlays</td><td>Array&lt;DynamicOverlayOpts&gt;</td><td><code>[]</code></td><td><code>optional</code> A SampledProperty and a PositionProperty array.</td><td></td></tr><tr><td>defaultInterval</td><td>Number</td><td><code>3.0</code></td><td><code>optional</code> Specify the default refresh interval of the default position information, and it is available to change the position of the dynamic overlays in real time.</td><td></td></tr></tbody></table>", 1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table>", 1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("DC-SDK");

function vc_overlay_dynamicvue_type_template_id_438c1a75_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_overlay_dynamicvue_type_template_id_438c1a75_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcoverlaydynamic",
    tabindex: "-1",
    content: "VcOverlayDynamic",
    href: "#vcoverlaydynamic",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_dynamicvue_type_template_id_438c1a75_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcoverlaydynamic"
    })]),
    _: 1
  }), vc_overlay_dynamicvue_type_template_id_438c1a75_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_dynamicvue_type_template_id_438c1a75_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), vc_overlay_dynamicvue_type_template_id_438c1a75_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_dynamicvue_type_template_id_438c1a75_hoisted_7]),
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_dynamicvue_type_template_id_438c1a75_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_dynamicvue_type_template_id_438c1a75_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "http://dc.dvgis.cn/#/editor?type=layer&example=dynamic"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_13]),
    _: 1
  })])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/overlays/vc-overlay-dynamic.md?vue&type=template&id=438c1a75

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_b706f451d6404ce468e2858b35d8eb7f/node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/overlays/vc-overlay-dynamic.md?vue&type=script&lang=ts

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
        createBlock: _createBlock,
        createCommentVNode: _createCommentVNode,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Real Time");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("History");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("ViewTopDown");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("ViewSide");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("ViewAircraft");

      function render(_ctx, _cache) {
        const _component_vc_overlay_dynamic = _resolveComponent("vc-overlay-dynamic");

        const _component_vc_provider_imagery_osm = _resolveComponent("vc-provider-imagery-osm");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_radio = _resolveComponent("el-radio");

        const _component_el_radio_group = _resolveComponent("el-radio-group");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            timeline: "",
            animation: "",
            onReady: _ctx.onViewerReady
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_overlay_dynamic, {
              ref: "dynamicOverlayRef",
              currentTime: _ctx.currentTime,
              "onUpdate:currentTime": _cache[0] || (_cache[0] = $event => _ctx.currentTime = $event),
              startTime: _ctx.startTime,
              "onUpdate:startTime": _cache[1] || (_cache[1] = $event => _ctx.startTime = $event),
              stopTime: _ctx.stopTime,
              "onUpdate:stopTime": _cache[2] || (_cache[2] = $event => _ctx.stopTime = $event),
              dynamicOverlays: _ctx.dynamicOverlays,
              clockRange: _ctx.clockRange,
              multiplier: _ctx.multiplier,
              onReady: _ctx.ready
            }, null, 8, ["currentTime", "startTime", "stopTime", "dynamicOverlays", "clockRange", "multiplier", "onReady"]), _createVNode(_component_vc_layer_imagery, {
              sortOrder: 10
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_osm)]),
              _: 1
            })]),
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
            }, 8, ["onClick"]), _createVNode(_component_el_radio_group, {
              modelValue: _ctx.radio,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.radio = $event),
              onChange: _ctx.onRadioChanged
            }, {
              default: _withCtx(() => [_createVNode(_component_el_radio, {
                label: 0
              }, {
                default: _withCtx(() => [_hoisted_4]),
                _: 1
              }), _createVNode(_component_el_radio, {
                label: 1
              }, {
                default: _withCtx(() => [_hoisted_5]),
                _: 1
              })]),
              _: 1
            }, 8, ["modelValue", "onChange"]), _ctx.radio === 1 ? (_openBlock(), _createBlock(_component_el_row, {
              key: 0
            }, {
              default: _withCtx(() => [_createVNode(_component_el_button, {
                type: "danger",
                round: "",
                onClick: _ctx.viewTopDown
              }, {
                default: _withCtx(() => [_hoisted_6]),
                _: 1
              }, 8, ["onClick"]), _createVNode(_component_el_button, {
                type: "danger",
                round: "",
                onClick: _ctx.viewSide
              }, {
                default: _withCtx(() => [_hoisted_7]),
                _: 1
              }, 8, ["onClick"]), _createVNode(_component_el_button, {
                type: "danger",
                round: "",
                onClick: _ctx.viewAircraft
              }, {
                default: _withCtx(() => [_hoisted_8]),
                _: 1
              }, 8, ["onClick"])]),
              _: 1
            })) : _createCommentVNode("", true)]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const {
        ref,
        nextTick,
        onMounted,
        onUnmounted
      } = vue_esm_browser;
      const democomponentExport = {
        setup() {
          const dynamicOverlays = ref([]);
          const dynamicOverlayRef = ref(null);
          const currentTime = ref(null);
          const startTime = ref(null);
          const stopTime = ref(null);
          const clockRange = ref(0);
          const radio = ref(0);
          const multiplier = ref(1.0);
          const text = ref('yeah');

          const makeRealTimeTrajectory = () => {
            multiplier.value = 1;
            clockRange.value = Cesium.ClockRange.UNBOUNDED;
            const start = Cesium.JulianDate.fromDate(new Date());
            const stop = Cesium.JulianDate.addHours(start, 8, new Cesium.JulianDate());
            stopTime.value = stop.clone();
            currentTime.value = start.clone();
            startTime.value = start.clone();
            const overlays = [];

            for (let i = 0; i < 50; i++) {
              overlays.push({
                maxCacheSize: 10,
                //The maximum number of buffer points, the real-time track should not be set too large; the historical track should be set to be greater than the total number of points, otherwise the data will be lost.
                model: {
                  uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/Car/Car.gltf',
                  scale: 1
                },
                // wake
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
                  position: generatePosition(1, 0.05)[0],
                  // Given an initial position
                  interval: 3
                }]
              });
            }

            return overlays;
          };

          const makeHistoryTrajectory = async () => {
            const datas = await Cesium.Resource.fetchJson('./SampleData/json/trajectory.json');
            const overlays = [];
            const sampledPositions = [];
            const positions = []; // The time string must be in Iso8601 format

            startTime.value = datas[0].time.replace(' ', 'T');
            currentTime.value = datas[0].time.replace(' ', 'T');
            stopTime.value = datas[datas.length - 1].time.replace(' ', 'T');
            multiplier.value = 10;
            clockRange.value = Cesium.ClockRange.LOOP_STOP;
            const totalSeconds = Cesium.JulianDate.fromIso8601(stopTime.value).secondsOfDay - Cesium.JulianDate.fromIso8601(startTime.value).secondsOfDay; // Store the wheel's rotation over time in a SampledProperty.

            const wheelAngleProperty = new Cesium.SampledProperty(Number);
            let wheelAngle = 0;

            for (let i = 0; i < datas.length; i++) {
              const data = datas[i];
              sampledPositions.push({
                position: [data.lon, data.lat],
                time: data.time.replace(' ', 'T')
              });
              positions.push([data.lon, data.lat]);
              const metersPerSecond = Number(data.speed);
              const wheelRadius = 0.52; //in meters.

              const circumference = Math.PI * wheelRadius * 2;
              const rotationsPerSecond = metersPerSecond / circumference;
              const time = Cesium.JulianDate.fromIso8601(data.time.replace(' ', 'T'));
              wheelAngle += Math.PI * 2 * totalSeconds / datas.length * rotationsPerSecond;
              wheelAngleProperty.addSample(time, wheelAngle);
            }

            const rotationProperty = new Cesium.CallbackProperty(function (time, result) {
              return Cesium.Quaternion.fromAxisAngle(Cesium.Cartesian3.UNIT_X, wheelAngleProperty.getValue(time), result);
            }, false);
            const wheelTransformation = new Cesium.NodeTransformationProperty({
              rotation: rotationProperty
            });
            const nodeTransformations = {
              Wheels: wheelTransformation,
              Wheels_mid: wheelTransformation,
              Wheels_rear: wheelTransformation
            };
            overlays.push({
              maxCacheSize: datas.length,
              // The maximum number of buffer points, the real-time track should not be set too large; the historical track should be set to be greater than the total number of points, otherwise the data will be lost.
              model: {
                uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/GroundVehicle/GroundVehicle.glb',
                scale: 5,
                runAnimations: false,
                nodeTransformations: nodeTransformations
              },
              // wake
              path: {
                leadTime: 0,
                trailTime: 25,
                resolution: 1,
                width: 10,
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
              // label
              label: {
                text: new Cesium.CallbackProperty(time => {
                  if (dynamicOverlayRef.value.overlays.value.length) {
                    const velocityVector = dynamicOverlayRef.value.overlays.value[0]._velocityVectorProperty.getValue(time, {});

                    var metersPerSecond = Cesium.Cartesian3.magnitude(velocityVector);
                    var kmPerHour = Math.round(metersPerSecond * 3.6);
                    return kmPerHour + ' km/h';
                  }

                  return 'hello';
                }, false),
                verticalOrigin: 1,
                showBackground: true,
                font: '20px sans-serif',
                distanceDisplayCondition: [0, 3000],
                eyeOffset: {
                  x: 0,
                  y: 25,
                  z: 0
                }
              },
              // trajectory
              polyline: {
                positions,
                width: 3,
                material: '#69B273',
                depthFailMaterial: '#69B273',
                clampToGround: true
              },
              sampledPositions
            });
            return overlays;
          };

          const generatePosition = (num, range) => {
            let list = [];

            for (let i = 0; i < num; i++) {
              let lng = 120.65276089 + Math.random() * range;
              let lat = 31.310530293 + Math.random() * range;
              list.push([lng, lat]);
            }

            return list;
          };

          const unload = () => {
            dynamicOverlayRef.value.unload();
          };

          const load = () => {
            dynamicOverlayRef.value.load();
          };

          const reload = () => {
            dynamicOverlayRef.value.reload();
          };

          let timer, _viewer;

          const ready = _ref => {
            let {
              viewer,
              cesiumObject
            } = _ref;
            viewer.flyTo(cesiumObject, {
              duration: 3
            });
          };

          const onRadioChanged = async e => {
            timer && clearInterval(timer);

            if (e === 0) {
              dynamicOverlays.value = makeRealTimeTrajectory();
              timer = setInterval(() => {
                dynamicOverlayRef.value.overlays.value.forEach(v => v.addPosition(generatePosition(1, 0.05)[0], 3));
              }, 3000);
              nextTick(() => {
                var _viewer2;

                dynamicOverlayRef.value.cesiumObject && ((_viewer2 = _viewer) === null || _viewer2 === void 0 ? void 0 : _viewer2.flyTo(dynamicOverlayRef.value.cesiumObject, {
                  duration: 3
                }));

                _viewer.timeline.zoomTo(_viewer.clock.startTime, _viewer.clock.stopTime);
              });
            } else {
              dynamicOverlays.value = await makeHistoryTrajectory();
              nextTick(() => {
                const sampledPositions = dynamicOverlayRef.value.cesiumObject.entities.values[0].sampledPositions;
                const positions = sampledPositions.map(v => {
                  return Cesium.Cartesian3.fromDegrees(v.position[0], v.position[1]);
                });

                _viewer.timeline.zoomTo(_viewer.clock.startTime, _viewer.clock.stopTime);

                viewTopDown();
              });
            }
          };

          const onViewerReady = _ref2 => {
            let {
              viewer
            } = _ref2;
            _viewer = viewer;
            onRadioChanged(radio.value);
          };

          const viewTopDown = () => {
            _viewer.trackedEntity = undefined;
            const sampledPositions = dynamicOverlayRef.value.cesiumObject.entities.values[0].sampledPositions;
            const positions = sampledPositions.map(v => {
              return Cesium.Cartesian3.fromDegrees(v.position[0], v.position[1]);
            });
            const boundingSphere = Cesium.BoundingSphere.fromPoints(positions);

            _viewer.camera.flyToBoundingSphere(boundingSphere, {
              duration: 1.5,
              offset: new Cesium.HeadingPitchRange(Cesium.Math.toRadians(360), Cesium.Math.toRadians(-90), boundingSphere.radius * 5)
            });
          };

          const viewSide = () => {
            _viewer.trackedEntity = undefined;
            const sampledPositions = dynamicOverlayRef.value.cesiumObject.entities.values[0].sampledPositions;
            const positions = sampledPositions.map(v => {
              return Cesium.Cartesian3.fromDegrees(v.position[0], v.position[1]);
            });
            const boundingSphere = Cesium.BoundingSphere.fromPoints(positions);

            _viewer.camera.flyToBoundingSphere(boundingSphere, {
              duration: 1.5,
              offset: new Cesium.HeadingPitchRange(Cesium.Math.toRadians(-90), Cesium.Math.toRadians(-15), boundingSphere.radius * 2)
            });
          };

          const viewAircraft = () => {
            _viewer.trackedEntity = dynamicOverlayRef.value.cesiumObject.entities.values[0];
            const sampledPositions = dynamicOverlayRef.value.cesiumObject.entities.values[0].sampledPositions;
            const positions = sampledPositions.map(v => {
              return Cesium.Cartesian3.fromDegrees(v.position[0], v.position[1]);
            });
            const boundingSphere = Cesium.BoundingSphere.fromPoints(positions);
            dynamicOverlayRef.value.cesiumObject.entities.values[0].viewFrom = new Cesium.Cartesian3(boundingSphere.radius, 0, boundingSphere.radius);
          };

          onUnmounted(() => {
            clearInterval(timer);
          });
          return {
            dynamicOverlays,
            dynamicOverlayRef,
            currentTime,
            startTime,
            stopTime,
            clockRange,
            onViewerReady,
            unload,
            load,
            reload,
            ready,
            radio,
            onRadioChanged,
            multiplier,
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
// CONCATENATED MODULE: ./website/docs/en-US/overlays/vc-overlay-dynamic.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/overlays/vc-overlay-dynamic.md



vc_overlay_dynamicvue_type_script_lang_ts.render = vc_overlay_dynamicvue_type_template_id_438c1a75_render

/* harmony default export */ var vc_overlay_dynamic = __webpack_exports__["default"] = (vc_overlay_dynamicvue_type_script_lang_ts);

/***/ })

}]);