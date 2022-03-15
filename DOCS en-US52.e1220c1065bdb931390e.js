(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/overlays/vc-overlay-dynamic.md?vue&type=template&id=7955445a

const vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcOverlayDynamic ");

const vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Load dynamic objects.", -1);

const vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcOverlayDynamic component.", -1);

const vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-dynamic"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to load and manage a group of dynamic entity objects on the viewer.")])], -1);

const vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer timeline animation @ready=\"onViewerReady\" fullscreenButton>\n    <vc-overlay-dynamic\n      ref=\"dynamicOverlayRef\"\n      v-model:current-time=\"currentTime\"\n      v-model:start-time=\"startTime\"\n      v-model:stop-time=\"stopTime\"\n      :dynamic-overlays=\"dynamicOverlays\"\n      :clock-range=\"clockRange\"\n      :multiplier=\"multiplier\"\n      :should-animate=\"shouldAnimate\"\n      @update:should-animate=\"shouldAnimate=$event\"\n      @stop-arrived=\"stopArrived\"\n      @ready=\"ready\"\n    >\n    </vc-overlay-dynamic>\n    <vc-layer-imagery :sort-order=\"10\">\n      <vc-imagery-provider-osm></vc-imagery-provider-osm>\n    </vc-layer-imagery>\n    <vc-collection-point v-if=\"showStop\" :points=\"stops\"></vc-collection-point>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    <el-radio-group v-model=\"radio\" @change=\"onRadioChanged\">\n      <el-radio :label=\"0\">Real Time</el-radio>\n      <el-radio :label=\"1\">History</el-radio>\n    </el-radio-group>\n    <el-checkbox v-if=\"radio === 1\" v-model=\"showStop\" style=\"padding-left: 15px;\">Show Stops</el-checkbox>\n  </el-row>\n  <el-row class=\"demo-toolbar\" style=\"top: 65px\">\n    <el-button type=\"danger\" round @click=\"viewTopDown\">ViewTopDown</el-button>\n    <el-button type=\"danger\" round @click=\"viewSide\">ViewSide</el-button>\n    <el-button type=\"danger\" round @click=\"trackOverlay('TRACKED')\">Default Tracking</el-button>\n    <el-button type=\"danger\" round @click=\"trackOverlay('TP')\">Tracking(TP)</el-button>\n    <el-button type=\"danger\" round @click=\"trackOverlay('FP')\">Tracking(FP)</el-button>\n    <el-button type=\"danger\" round @click=\"trackOverlay('FREE')\">No Tracking</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, nextTick, onMounted, onUnmounted, computed } from 'vue'\n  export default {\n    setup() {\n      const dynamicOverlays = ref([])\n      const dynamicOverlayRef = ref(null)\n      const currentTime = ref(null)\n      const startTime = ref(null)\n      const stopTime = ref(null)\n      const clockRange = ref(0)\n      const radio = ref(0)\n      const multiplier = ref(1.0)\n      const text = ref('yeah')\n      const showStop = ref(false)\n      const shouldAnimate = ref(false)\n      const stops = computed(() => {\n        return dynamicOverlays.value.map(v => {\n          return v.sampledPositions.map(v => ({ position: v.position, color: 'rgb(255,229,0)' }))\n        })?.[0]\n      })\n\n      const makeRealTimeTrajectory = () => {\n        multiplier.value = 1\n        clockRange.value = Cesium.ClockRange.UNBOUNDED\n        const start = Cesium.JulianDate.fromDate(new Date())\n        const stop = Cesium.JulianDate.addHours(start, 8, new Cesium.JulianDate())\n        stopTime.value = stop.clone()\n        currentTime.value = start.clone()\n        startTime.value = start.clone()\n\n        const overlays = []\n        for (let i = 0; i < 50; i++) {\n          overlays.push({\n            maxCacheSize: 10, //The maximum number of buffer points, the real-time track should not be set too large; the historical track should be set to be greater than the total number of points, otherwise the data will be lost.\n            model: {\n              uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/Car/Car.gltf',\n              scale: 0.5\n            },\n            // wake\n            path: {\n              leadTime: 0,\n              trailTime: 0.5,\n              resolution: 1,\n              width: 3,\n              material: { fabric: { type: 'PolylineGlow', uniforms: { glowPower: 0.1, color: 'yellow' } } }\n            },\n            // A SampledProperty and a PositionProperty array.\n            sampledPositions: [\n              {\n                position: generatePosition(1, 0.05)[0], // Given an initial position\n                interval: 3,\n                id: Cesium.createGuid()\n              }\n            ]\n          })\n        }\n        return overlays\n      }\n\n      const makeHistoryTrajectory = async () => {\n        const datas = await Cesium.Resource.fetchJson('./SampleData/json/trajectory.json')\n        const overlays = []\n        const sampledPositions = []\n        const positions = []\n        startTime.value = new Date(datas[0].time)\n        currentTime.value = new Date(datas[0].time)\n        stopTime.value = new Date(datas[datas.length - 1].time)\n        multiplier.value = 10\n        clockRange.value = Cesium.ClockRange.LOOP_STOP\n        const totalSeconds = Cesium.JulianDate.fromDate(stopTime.value).secondsOfDay - Cesium.JulianDate.fromDate(startTime.value).secondsOfDay\n        // Store the wheel's rotation over time in a SampledProperty.\n        const wheelAngleProperty = new Cesium.SampledProperty(Number)\n        let wheelAngle = 0\n\n        for (let i = 0; i < datas.length; i++) {\n          const data = datas[i]\n          sampledPositions.push({\n            position: [data.lon, data.lat],\n            time: data.time,\n            id: data.id\n          })\n          positions.push([data.lon, data.lat])\n\n          const metersPerSecond = Number(data.speed)\n          const wheelRadius = 0.52 //in meters.\n          const circumference = Math.PI * wheelRadius * 2\n          const rotationsPerSecond = metersPerSecond / circumference\n          const time = Cesium.JulianDate.fromIso8601(data.time.replace(' ', 'T'))\n\n          wheelAngle += ((Math.PI * 2 * totalSeconds) / datas.length) * rotationsPerSecond\n          wheelAngleProperty.addSample(time, wheelAngle)\n        }\n\n        const rotationProperty = new Cesium.CallbackProperty(function (time, result) {\n          const wheelAngle = wheelAngleProperty.getValue(time)\n          return Cesium.defined(wheelAngle) ? Cesium.Quaternion.fromAxisAngle(Cesium.Cartesian3.UNIT_X, wheelAngle, result) : new Cesium.Quaternion()\n        }, false)\n\n        const wheelTransformation = new Cesium.NodeTransformationProperty({\n          rotation: rotationProperty\n        })\n\n        const nodeTransformations = {\n          Wheels: wheelTransformation,\n          Wheels_mid: wheelTransformation,\n          Wheels_rear: wheelTransformation\n        }\n\n        overlays.push({\n          maxCacheSize: datas.length, // The maximum number of buffer points, the real-time track should not be set too large; the historical track should be set to be greater than the total number of points, otherwise the data will be lost.\n          model: {\n            uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/GroundVehicle/GroundVehicle.glb',\n            scale: 5,\n            runAnimations: false,\n            nodeTransformations: nodeTransformations\n          },\n          // wake\n          path: {\n            leadTime: 0,\n            trailTime: 25,\n            resolution: 1,\n            width: 10,\n            material: { fabric: { type: 'PolylineGlow', uniforms: { glowPower: 0.1, color: 'yellow' } } }\n          },\n          // label\n          label: {\n            text: new Cesium.CallbackProperty(time => {\n              if (dynamicOverlayRef.value.getOverlays().length) {\n                const velocityVector = dynamicOverlayRef.value.getOverlays()[0]._velocityVectorProperty.getValue(time, {})\n                var metersPerSecond = Cesium.Cartesian3.magnitude(velocityVector)\n                var kmPerHour = Math.round(metersPerSecond * 3.6)\n\n                return kmPerHour + ' km/h'\n              }\n              return 'hello'\n            }, false),\n            verticalOrigin: 1,\n            showBackground: true,\n            font: '20px sans-serif',\n            distanceDisplayCondition: [0, 3000],\n            eyeOffset: { x: 0, y: 25, z: 0 }\n          },\n          // trajectory\n          polyline: {\n            positions,\n            width: 3,\n            material: '#69B273',\n            depthFailMaterial: '#69B273',\n            clampToGround: true\n          },\n          sampledPositions\n        })\n        return overlays\n      }\n\n      const generatePosition = (num, range) => {\n        let list = []\n        for (let i = 0; i < num; i++) {\n          let lng = 120.65276089 + Math.random() * range\n          let lat = 31.310530293 + Math.random() * range\n          list.push([lng, lat])\n        }\n        return list\n      }\n\n      const unload = () => {\n        dynamicOverlayRef.value.unload()\n      }\n      const load = () => {\n        dynamicOverlayRef.value.load()\n      }\n      const reload = () => {\n        dynamicOverlayRef.value.reload()\n      }\n      let timer, _viewer\n\n      const ready = ({ viewer, cesiumObject }) => {\n        var scene = viewer.scene\n        scene.debugShowFramesPerSecond = true\n        shouldAnimate.value = true\n        viewer.flyTo(cesiumObject, {\n          duration: 3\n        })\n      }\n\n      const onRadioChanged = async e => {\n        timer && clearInterval(timer)\n        if (e === 0) {\n          dynamicOverlays.value = makeRealTimeTrajectory()\n          timer = setInterval(() => {\n            // dynamicOverlayRef.value.getOverlays().forEach(v => v.addPosition(generatePosition(1, 0.05)[0], 3))\n            dynamicOverlays.value.forEach(v => {\n              v.sampledPositions.push({\n                position: generatePosition(1, 0.05)[0],\n                time: Cesium.JulianDate.addSeconds(Cesium.JulianDate.now(), 3, new Cesium.JulianDate()),\n                id: Cesium.createGuid()\n              })\n              v.sampledPositions.length > 10 && v.sampledPositions.splice(0, 1)\n            })\n          }, 3000)\n          nextTick(() => {\n            dynamicOverlayRef.value.cesiumObject && _viewer?.flyTo(dynamicOverlayRef.value.cesiumObject, { duration: 3 })\n            _viewer.timeline.zoomTo(_viewer.clock.startTime, _viewer.clock.stopTime)\n          })\n        } else {\n          dynamicOverlays.value = await makeHistoryTrajectory()\n\n          nextTick(() => {\n            const sampledPositions = dynamicOverlayRef.value.cesiumObject.entities.values[0].sampledPositions\n            const positions = sampledPositions.map(v => {\n              return Cesium.Cartesian3.fromDegrees(v.position[0], v.position[1])\n            })\n            _viewer.timeline.zoomTo(_viewer.clock.startTime, _viewer.clock.stopTime)\n            viewTopDown()\n          })\n        }\n      }\n\n      const onViewerReady = ({ viewer }) => {\n        _viewer = viewer\n        onRadioChanged(radio.value)\n      }\n\n      const viewTopDown = () => {\n        if (radio.value === 0) {\n          dynamicOverlayRef.value.zoomToOverlay()\n        } else {\n          dynamicOverlayRef.value.zoomToOverlay([0, -90, 1500])\n        }\n      }\n\n      const viewSide = () => {\n        if (radio.value === 0) {\n          dynamicOverlayRef.value.zoomToOverlay([-50, -20, 8000])\n        } else {\n          dynamicOverlayRef.value.zoomToOverlay([-50, -20, 1800])\n        }\n      }\n\n      const trackOverlay = mode => {\n        dynamicOverlayRef.value.trackOverlay({\n          mode,\n          viewFrom: [0, 0, 1800]\n        })\n      }\n\n      const stopArrived = (overlay, stop) => {\n        console.log('arrived stop:', overlay, stop)\n      }\n\n      onUnmounted(() => {\n        clearInterval(timer)\n      })\n\n      return {\n        dynamicOverlays,\n        dynamicOverlayRef,\n        currentTime,\n        startTime,\n        stopTime,\n        clockRange,\n        onViewerReady,\n        unload,\n        load,\n        reload,\n        ready,\n        radio,\n        onRadioChanged,\n        multiplier,\n        viewTopDown,\n        viewSide,\n        trackOverlay,\n        stops,\n        showStop,\n        stopArrived,\n        shouldAnimate\n      }\n    }\n  }\n</script>\n")], -1);

const vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether to display the CustomDataSource that hosts the dynamic overlays.</td><td></td></tr><tr><td>name</td><td>String</td><td><code>&#39;__vc__overlay__dynamic__&#39;</code></td><td><code>optional</code> Specify the name of the CustomDataSource.</td><td></td></tr><tr><td>startTime</td><td>String| Date | JulianDate</td><td></td><td><code>optional</code> Specify the start time of the clock.</td><td></td></tr><tr><td>stopTime</td><td>String| Date | JulianDate</td><td></td><td><code>optional</code> Specify the stop time of the clock.</td><td></td></tr><tr><td>currentTime</td><td>String| Date | JulianDate</td><td></td><td><code>optional</code> Specify the current time.</td><td></td></tr><tr><td>clockRange</td><td>Number| Cesium.ClockRange</td><td><code>0</code></td><td><code>optional</code> Determines how the clock should behave when Clock#startTime or Clock#stopTime is reached.</td><td></td></tr><tr><td>clockStep</td><td>Number| Cesium.ClockStep</td><td><code>1</code></td><td><code>optional</code> Determines if calls to Clock#tick are frame dependent or system clock dependent.</td><td></td></tr><tr><td>shouldAnimate</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Indicates whether Clock#tick should attempt to advance time. The clock will only tick when both Clock#canAnimate and Clock#shouldAnimate are true.</td><td></td></tr><tr><td>canAnimate</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Determines how much time advances when Clock#tick is called, negative values allow for advancing backwards.</td><td></td></tr><tr><td>multiplier</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> Determines how much time advances when Clock#tick is called, negative values allow for advancing backwards.</td><td></td></tr><tr><td>dynamicOverlays</td><td>Array&lt;DynamicOverlayOpts&gt;</td><td><code>[]</code></td><td><code>optional</code> Specify the dynamicOverlays array.</td><td></td></tr><tr><td>defaultInterval</td><td>Number</td><td><code>3.0</code></td><td><code>optional</code> Specify the default refresh interval of the default position information, and it is available to change the position of the dynamic overlays in real time.</td><td></td></tr></tbody></table>", 1);

const vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>onStop</td><td>(clock: Cesium.Clock)</td><td>Triggers when Clock#stopTime is reached.</td></tr><tr><td>stopArrived</td><td>(overlay: DynamicOverlay, position: SampledPosition)</td><td>Triggers when a stop is reached.</td></tr><tr><td>@update:currentTime</td><td>(currentTime: Cesium.JulianDate)</td><td>Triggers when currentTime changed.</td></tr><tr><td>@update:shouldAnimate</td><td>(shouldAnimate: boolean)</td><td>Triggers when shouldAnimate changed.</td></tr><tr><td>@update:canAnimate</td><td>(canAnimate: boolean)</td><td>Triggers when canAnimate changed.</td></tr><tr><td>@update:clockRange</td><td>(clockRange: number )</td><td>Triggers when clockRange changed.</td></tr><tr><td>@update:clockStep</td><td>(clockStep: number )</td><td>Triggers when clockStep changed.</td></tr><tr><td>@update:multiplier</td><td>(multiplier: number)</td><td>Triggers when multiplier changed.</td></tr><tr><td>@update:startTime</td><td>(startTime: Cesium.JulianDate)</td><td>Triggers when startTime changed.</td></tr><tr><td>@update:stopTime</td><td>(stopTime: Cesium.JulianDate)</td><td>Triggers when stopTime changed.</td></tr></tbody></table>", 1);

const vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Methods ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Load components manually.</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>Reload components manually.</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>Destroy the loaded component manually.</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>Get the creatingPromise.</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>Get the Cesium object loaded by this component.</td></tr><tr><td>getOverlays</td><td>() =&gt; Array&lt;DynamicOverlay&gt;</td><td>Get dynamic overlays.</td></tr><tr><td>zoomToOverlay</td><td>(offset?: VcHeadingPitchRange, viewOverlays?: Array&lt;DynamicOverlay&gt; | Array&lt;number | string&gt;) =&gt; Promise&lt;boolean&gt;</td><td>Zoom to dynamic objects (collections). offset: The camera offset to zoom to the object. viewOverlays: Dynamic object collection or dynamic object ID collection, if not passed, zoom to all objects.</td></tr><tr><td>trackOverlay</td><td>(trackViewOpts?: TrackViewOpts, trackOverlay?: DynamicOverlay | string | number) =&gt; void</td><td>Track a dynamic objects. trackOverlay: Tracking object or tracking object ID. If not passed, the first object is tracked by default.</td></tr></tbody></table>", 1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("DC-SDK");

function vc_overlay_dynamicvue_type_template_id_7955445a_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcoverlaydynamic",
    tabindex: "-1",
    content: "VcOverlayDynamic",
    href: "#vcoverlaydynamic",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcoverlaydynamic"
    })]),
    _: 1
  }), vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_7]),
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "methods",
    tabindex: "-1",
    content: "Methods",
    href: "#methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_dynamicvue_type_template_id_7955445a_hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#methods"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "http://dc.dvgis.cn/#/editor?type=layer&example=dynamic"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    _: 1
  })])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/overlays/vc-overlay-dynamic.md?vue&type=template&id=7955445a

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/overlays/vc-overlay-dynamic.md?vue&type=script&lang=ts

/* harmony default export */ var vc_overlay_dynamicvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createBlock: _createBlock,
        createCommentVNode: _createCommentVNode,
        createTextVNode: _createTextVNode,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Real Time");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("History");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("Show Stops");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("ViewTopDown");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("ViewSide");

      const _hoisted_9 = /*#__PURE__*/_createTextVNode("Default Tracking");

      const _hoisted_10 = /*#__PURE__*/_createTextVNode("Tracking(TP)");

      const _hoisted_11 = /*#__PURE__*/_createTextVNode("Tracking(FP)");

      const _hoisted_12 = /*#__PURE__*/_createTextVNode("No Tracking");

      function render(_ctx, _cache) {
        const _component_vc_overlay_dynamic = _resolveComponent("vc-overlay-dynamic");

        const _component_vc_imagery_provider_osm = _resolveComponent("vc-imagery-provider-osm");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_collection_point = _resolveComponent("vc-collection-point");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_radio = _resolveComponent("el-radio");

        const _component_el_radio_group = _resolveComponent("el-radio-group");

        const _component_el_checkbox = _resolveComponent("el-checkbox");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            timeline: "",
            animation: "",
            onReady: _ctx.onViewerReady,
            fullscreenButton: ""
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_overlay_dynamic, {
              ref: "dynamicOverlayRef",
              "current-time": _ctx.currentTime,
              "onUpdate:current-time": _cache[0] || (_cache[0] = $event => _ctx.currentTime = $event),
              "start-time": _ctx.startTime,
              "onUpdate:start-time": _cache[1] || (_cache[1] = $event => _ctx.startTime = $event),
              "stop-time": _ctx.stopTime,
              "onUpdate:stop-time": _cache[2] || (_cache[2] = $event => _ctx.stopTime = $event),
              "dynamic-overlays": _ctx.dynamicOverlays,
              "clock-range": _ctx.clockRange,
              multiplier: _ctx.multiplier,
              "should-animate": _ctx.shouldAnimate,
              "onUpdate:shouldAnimate": _cache[3] || (_cache[3] = $event => _ctx.shouldAnimate = $event),
              onStopArrived: _ctx.stopArrived,
              onReady: _ctx.ready
            }, null, 8, ["current-time", "start-time", "stop-time", "dynamic-overlays", "clock-range", "multiplier", "should-animate", "onStopArrived", "onReady"]), _createVNode(_component_vc_layer_imagery, {
              "sort-order": 10
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_osm)]),
              _: 1
            }), _ctx.showStop ? (_openBlock(), _createBlock(_component_vc_collection_point, {
              key: 0,
              points: _ctx.stops
            }, null, 8, ["points"])) : _createCommentVNode("", true)]),
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
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.radio = $event),
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
            }, 8, ["modelValue", "onChange"]), _ctx.radio === 1 ? (_openBlock(), _createBlock(_component_el_checkbox, {
              key: 0,
              modelValue: _ctx.showStop,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.showStop = $event),
              style: {
                "padding-left": "15px"
              }
            }, {
              default: _withCtx(() => [_hoisted_6]),
              _: 1
            }, 8, ["modelValue"])) : _createCommentVNode("", true)]),
            _: 1
          }), _createVNode(_component_el_row, {
            class: "demo-toolbar",
            style: {
              "top": "65px"
            }
          }, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.viewTopDown
            }, {
              default: _withCtx(() => [_hoisted_7]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.viewSide
            }, {
              default: _withCtx(() => [_hoisted_8]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _cache[6] || (_cache[6] = $event => _ctx.trackOverlay('TRACKED'))
            }, {
              default: _withCtx(() => [_hoisted_9]),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _cache[7] || (_cache[7] = $event => _ctx.trackOverlay('TP'))
            }, {
              default: _withCtx(() => [_hoisted_10]),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _cache[8] || (_cache[8] = $event => _ctx.trackOverlay('FP'))
            }, {
              default: _withCtx(() => [_hoisted_11]),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _cache[9] || (_cache[9] = $event => _ctx.trackOverlay('FREE'))
            }, {
              default: _withCtx(() => [_hoisted_12]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const {
        ref,
        nextTick,
        onMounted,
        onUnmounted,
        computed
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
          const showStop = ref(false);
          const shouldAnimate = ref(false);
          const stops = computed(() => {
            var _dynamicOverlays$valu;

            return (_dynamicOverlays$valu = dynamicOverlays.value.map(v => {
              return v.sampledPositions.map(v => ({
                position: v.position,
                color: 'rgb(255,229,0)'
              }));
            })) === null || _dynamicOverlays$valu === void 0 ? void 0 : _dynamicOverlays$valu[0];
          });

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
                  scale: 0.5
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
                  interval: 3,
                  id: Cesium.createGuid()
                }]
              });
            }

            return overlays;
          };

          const makeHistoryTrajectory = async () => {
            const datas = await Cesium.Resource.fetchJson('./SampleData/json/trajectory.json');
            const overlays = [];
            const sampledPositions = [];
            const positions = [];
            startTime.value = new Date(datas[0].time);
            currentTime.value = new Date(datas[0].time);
            stopTime.value = new Date(datas[datas.length - 1].time);
            multiplier.value = 10;
            clockRange.value = Cesium.ClockRange.LOOP_STOP;
            const totalSeconds = Cesium.JulianDate.fromDate(stopTime.value).secondsOfDay - Cesium.JulianDate.fromDate(startTime.value).secondsOfDay; // Store the wheel's rotation over time in a SampledProperty.

            const wheelAngleProperty = new Cesium.SampledProperty(Number);
            let wheelAngle = 0;

            for (let i = 0; i < datas.length; i++) {
              const data = datas[i];
              sampledPositions.push({
                position: [data.lon, data.lat],
                time: data.time,
                id: data.id
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
              const wheelAngle = wheelAngleProperty.getValue(time);
              return Cesium.defined(wheelAngle) ? Cesium.Quaternion.fromAxisAngle(Cesium.Cartesian3.UNIT_X, wheelAngle, result) : new Cesium.Quaternion();
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
                  if (dynamicOverlayRef.value.getOverlays().length) {
                    const velocityVector = dynamicOverlayRef.value.getOverlays()[0]._velocityVectorProperty.getValue(time, {});

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
            var scene = viewer.scene;
            scene.debugShowFramesPerSecond = true;
            shouldAnimate.value = true;
            viewer.flyTo(cesiumObject, {
              duration: 3
            });
          };

          const onRadioChanged = async e => {
            timer && clearInterval(timer);

            if (e === 0) {
              dynamicOverlays.value = makeRealTimeTrajectory();
              timer = setInterval(() => {
                // dynamicOverlayRef.value.getOverlays().forEach(v => v.addPosition(generatePosition(1, 0.05)[0], 3))
                dynamicOverlays.value.forEach(v => {
                  v.sampledPositions.push({
                    position: generatePosition(1, 0.05)[0],
                    time: Cesium.JulianDate.addSeconds(Cesium.JulianDate.now(), 3, new Cesium.JulianDate()),
                    id: Cesium.createGuid()
                  });
                  v.sampledPositions.length > 10 && v.sampledPositions.splice(0, 1);
                });
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
            if (radio.value === 0) {
              dynamicOverlayRef.value.zoomToOverlay();
            } else {
              dynamicOverlayRef.value.zoomToOverlay([0, -90, 1500]);
            }
          };

          const viewSide = () => {
            if (radio.value === 0) {
              dynamicOverlayRef.value.zoomToOverlay([-50, -20, 8000]);
            } else {
              dynamicOverlayRef.value.zoomToOverlay([-50, -20, 1800]);
            }
          };

          const trackOverlay = mode => {
            dynamicOverlayRef.value.trackOverlay({
              mode,
              viewFrom: [0, 0, 1800]
            });
          };

          const stopArrived = (overlay, stop) => {
            console.log('arrived stop:', overlay, stop);
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
            trackOverlay,
            stops,
            showStop,
            stopArrived,
            shouldAnimate
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



vc_overlay_dynamicvue_type_script_lang_ts.render = vc_overlay_dynamicvue_type_template_id_7955445a_render

/* harmony default export */ var vc_overlay_dynamic = __webpack_exports__["default"] = (vc_overlay_dynamicvue_type_script_lang_ts);

/***/ })

}]);