(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[150],{

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.30/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/overlays/vc-overlay-dynamic.md?vue&type=template&id=28a6d9a4

const vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcOverlayDynamic ");

const vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "加载动态对象。", -1);

const vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("基础用法 ");

const vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "动态对象组件的基础用法。", -1);

const vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-overlay-dynamic"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上加载并管理一组动态实体对象。")])], -1);

const vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer timeline animation @ready=\"onViewerReady\" fullscreenButton>\n    <vc-overlay-dynamic\n      ref=\"dynamicOverlayRef\"\n      v-model:current-time=\"currentTime\"\n      v-model:start-time=\"startTime\"\n      v-model:stop-time=\"stopTime\"\n      :dynamic-overlays=\"dynamicOverlays\"\n      :clock-range=\"clockRange\"\n      :multiplier=\"multiplier\"\n      :should-animate=\"shouldAnimate\"\n      @update:should-animate=\"shouldAnimate=$event\"\n      @stop-arrived=\"stopArrived\"\n      @ready=\"ready\"\n    >\n    </vc-overlay-dynamic>\n    <vc-layer-imagery :sort-order=\"10\">\n      <vc-imagery-provider-tianditu map-style=\"vec_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-imagery-provider-tianditu>\n    </vc-layer-imagery>\n    <vc-collection-point v-if=\"showStop\" :points=\"stops\"></vc-collection-point>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    <el-button type=\"danger\" round @click=\"viewTopDown\">俯视</el-button>\n    <el-button type=\"danger\" round @click=\"viewSide\">侧视</el-button>\n    <el-button type=\"danger\" round @click=\"trackOverlay('TRACKED')\">默认跟随</el-button>\n    <el-button type=\"danger\" round @click=\"trackOverlay('TP')\">俯视跟随</el-button>\n    <el-button type=\"danger\" round @click=\"trackOverlay('FP')\">第一人称跟随</el-button>\n    <el-button type=\"danger\" round @click=\"trackOverlay('FREE')\">取消跟随</el-button>\n    <el-radio-group v-model=\"radio\" @change=\"onRadioChanged\">\n      <el-radio :label=\"0\">实时轨迹</el-radio>\n      <el-radio :label=\"1\">历史轨迹</el-radio>\n    </el-radio-group>\n    <el-checkbox v-if=\"radio === 1\" v-model=\"showStop\" style=\"padding-left: 15px;\">显示站点</el-checkbox>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, nextTick, onMounted, onUnmounted, computed } from 'vue'\n  export default {\n    setup() {\n      const dynamicOverlays = ref([])\n      const dynamicOverlayRef = ref(null)\n      const currentTime = ref(null)\n      const startTime = ref(null)\n      const stopTime = ref(null)\n      const clockRange = ref(0)\n      const radio = ref(1)\n      const multiplier = ref(1.0)\n      const text = ref('yeah')\n      const showStop = ref(false)\n      const shouldAnimate = ref(false)\n      const stops = computed(() => {\n        return dynamicOverlays.value.map(v => {\n          return v.sampledPositions.map(v => ({ position: v.position, color: 'rgb(255,229,0)' }))\n        })?.[0]\n      })\n\n      const makeRealTimeTrajectory = () => {\n        multiplier.value = 1\n        clockRange.value = Cesium.ClockRange.UNBOUNDED\n        const start = Cesium.JulianDate.fromDate(new Date())\n        const stop = Cesium.JulianDate.addHours(start, 8, new Cesium.JulianDate())\n        stopTime.value = stop.clone()\n        currentTime.value = start.clone()\n        startTime.value = start.clone()\n\n        const overlays = []\n        for (let i = 0; i < 50; i++) {\n          overlays.push({\n            maxCacheSize: 10, // 最大缓存点位数，实时轨迹不要设置太大；历史轨迹要设置得大于总点位数，不然要丢失数据。\n            model: {\n              uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/Car/Car.gltf',\n              scale: 0.5\n            },\n            // 轨迹\n            path: {\n              leadTime: 0,\n              trailTime: 0.5,\n              resolution: 1,\n              width: 3,\n              material: { fabric: { type: 'PolylineGlow', uniforms: { glowPower: 0.1, color: 'yellow' } } }\n            },\n            // 采样位置\n            sampledPositions: [\n              {\n                position: generatePosition(1, 0.05)[0], // 给一个初始位置 ready 事件才能定位 否则要延后\n                interval: 3,\n                id: Cesium.createGuid()\n              }\n            ]\n          })\n        }\n        return overlays\n      }\n\n      const makeHistoryTrajectory = async () => {\n        const datas = await Cesium.Resource.fetchJson('./SampleData/json/trajectory.json')\n        const overlays = []\n        const sampledPositions = []\n        const positions = []\n        startTime.value = new Date(datas[0].time)\n        currentTime.value = new Date(datas[0].time)\n        stopTime.value = new Date(datas[datas.length - 1].time)\n        multiplier.value = 10\n        clockRange.value = Cesium.ClockRange.LOOP_STOP\n        const totalSeconds = Cesium.JulianDate.fromDate(stopTime.value).secondsOfDay - Cesium.JulianDate.fromDate(startTime.value).secondsOfDay\n        // Store the wheel's rotation over time in a SampledProperty.\n        const wheelAngleProperty = new Cesium.SampledProperty(Number)\n        let wheelAngle = 0\n\n        for (let i = 0; i < datas.length; i++) {\n          const data = datas[i]\n          sampledPositions.push({\n            position: [data.lon, data.lat],\n            time: data.time,\n            id: data.id\n          })\n          positions.push([data.lon, data.lat])\n\n          const metersPerSecond = Number(data.speed)\n          const wheelRadius = 0.52 //in meters.\n          const circumference = Math.PI * wheelRadius * 2\n          const rotationsPerSecond = metersPerSecond / circumference\n          const time = Cesium.JulianDate.fromIso8601(data.time.replace(' ', 'T'))\n\n          wheelAngle += ((Math.PI * 2 * totalSeconds) / datas.length) * rotationsPerSecond\n          wheelAngleProperty.addSample(time, wheelAngle)\n        }\n\n        const rotationProperty = new Cesium.CallbackProperty(function (time, result) {\n          const wheelAngle = wheelAngleProperty.getValue(time)\n          return Cesium.defined(wheelAngle) ? Cesium.Quaternion.fromAxisAngle(Cesium.Cartesian3.UNIT_X, wheelAngle, result) : new Cesium.Quaternion()\n        }, false)\n\n        const wheelTransformation = new Cesium.NodeTransformationProperty({\n          rotation: rotationProperty\n        })\n\n        const nodeTransformations = {\n          Wheels: wheelTransformation,\n          Wheels_mid: wheelTransformation,\n          Wheels_rear: wheelTransformation\n        }\n\n        overlays.push({\n          maxCacheSize: datas.length, // 最大缓存点位数，实时轨迹不要设置太大；历史轨迹要设置得大于总点位数，不然要丢失数据。\n          model: {\n            uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/GroundVehicle/GroundVehicle.glb',\n            scale: 5,\n            runAnimations: false,\n            nodeTransformations: nodeTransformations\n          },\n          // 尾迹\n          path: {\n            leadTime: 0,\n            trailTime: 25,\n            resolution: 1,\n            width: 10,\n            material: { fabric: { type: 'PolylineGlow', uniforms: { glowPower: 0.1, color: 'yellow' } } }\n          },\n          // 标签\n          label: {\n            text: new Cesium.CallbackProperty(time => {\n              if (dynamicOverlayRef.value.getOverlays().length) {\n                const velocityVector = dynamicOverlayRef.value.getOverlays()[0]._velocityVectorProperty.getValue(time, {})\n                var metersPerSecond = Cesium.Cartesian3.magnitude(velocityVector)\n                var kmPerHour = Math.round(metersPerSecond * 3.6)\n\n                return kmPerHour + ' km/h'\n              }\n              return 'hello'\n            }, false),\n            verticalOrigin: 1,\n            showBackground: true,\n            font: '20px sans-serif',\n            distanceDisplayCondition: [0, 3000],\n            eyeOffset: { x: 0, y: 25, z: 0 }\n          },\n          // 轨迹\n          polyline: {\n            positions,\n            width: 3,\n            material: '#69B273',\n            depthFailMaterial: '#69B273',\n            clampToGround: true\n          },\n          rectangle: {\n            material: 'red',\n            coordinates: () => {\n              return Cesium.Rectangle.fromDegrees(102, 32, 104, 34)\n            }\n            // coordinates: [102, 32, 104, 34]\n          },\n          sampledPositions\n        })\n        return overlays\n      }\n\n      const generatePosition = (num, range) => {\n        let list = []\n        for (let i = 0; i < num; i++) {\n          let lng = 120.65276089 + Math.random() * range\n          let lat = 31.310530293 + Math.random() * range\n          list.push([lng, lat])\n        }\n        return list\n      }\n\n      const unload = () => {\n        dynamicOverlayRef.value.unload()\n      }\n      const load = () => {\n        dynamicOverlayRef.value.load()\n      }\n      const reload = () => {\n        dynamicOverlayRef.value.reload()\n      }\n      let timer, _viewer\n\n      const ready = ({ viewer, cesiumObject }) => {\n        var scene = viewer.scene\n        scene.debugShowFramesPerSecond = true\n        shouldAnimate.value = true\n        viewer.flyTo(cesiumObject, {\n          duration: 3\n        })\n      }\n\n      const onRadioChanged = async e => {\n        timer && clearInterval(timer)\n        if (e === 0) {\n          dynamicOverlays.value = makeRealTimeTrajectory()\n          timer = setInterval(() => {\n            // dynamicOverlayRef.value.getOverlays().forEach(v => v.addPosition(generatePosition(1, 0.05)[0], 3))\n            dynamicOverlays.value.forEach(v => {\n              v.sampledPositions.push({\n                position: generatePosition(1, 0.05)[0],\n                time: Cesium.JulianDate.addSeconds(Cesium.JulianDate.now(), 3, new Cesium.JulianDate()),\n                id: Cesium.createGuid()\n              })\n              v.sampledPositions.length > 10 && v.sampledPositions.splice(0, 1)\n            })\n          }, 3000)\n          nextTick(() => {\n            dynamicOverlayRef.value.cesiumObject && _viewer?.flyTo(dynamicOverlayRef.value.cesiumObject, { duration: 3 })\n            _viewer.timeline.zoomTo(_viewer.clock.startTime, _viewer.clock.stopTime)\n          })\n        } else {\n          dynamicOverlays.value = await makeHistoryTrajectory()\n\n          nextTick(() => {\n            const sampledPositions = dynamicOverlayRef.value.cesiumObject.entities.values[0].sampledPositions\n            const positions = sampledPositions.map(v => {\n              return Cesium.Cartesian3.fromDegrees(v.position[0], v.position[1])\n            })\n            _viewer.timeline.zoomTo(_viewer.clock.startTime, _viewer.clock.stopTime)\n            viewTopDown()\n          })\n        }\n      }\n\n      const onViewerReady = ({ viewer }) => {\n        _viewer = viewer\n        onRadioChanged(radio.value)\n      }\n\n      const viewTopDown = () => {\n        if (radio.value === 0) {\n          dynamicOverlayRef.value.zoomToOverlay()\n        } else {\n          dynamicOverlayRef.value.zoomToOverlay([], [0, -90, 1500])\n        }\n      }\n\n      const viewSide = () => {\n        if (radio.value === 0) {\n          dynamicOverlayRef.value.zoomToOverlay([], [-50, -20, 8000])\n        } else {\n          dynamicOverlayRef.value.zoomToOverlay([], [-50, -20, 1800])\n        }\n      }\n\n      const trackOverlay = mode => {\n        dynamicOverlayRef.value.trackOverlay(0, {\n          mode,\n          viewFrom: [0, 0, 1800]\n        })\n      }\n\n      const stopArrived = (overlay, stop) => {\n        console.log('到达站点：', overlay, stop)\n      }\n\n      onUnmounted(() => {\n        clearInterval(timer)\n      })\n\n      return {\n        dynamicOverlays,\n        dynamicOverlayRef,\n        currentTime,\n        startTime,\n        stopTime,\n        clockRange,\n        onViewerReady,\n        unload,\n        load,\n        reload,\n        ready,\n        radio,\n        onRadioChanged,\n        multiplier,\n        viewTopDown,\n        viewSide,\n        trackOverlay,\n        stops,\n        showStop,\n        stopArrived,\n        shouldAnimate\n      }\n    }\n  }\n</script>\n")], -1);

const vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("属性 ");

const vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定加载的动态对象数据源对象是否显示。</td></tr><tr><td>name</td><td>string</td><td><code>&#39;__vc__overlay__dynamic__&#39;</code></td><td><code>optional</code> 指定加载的动态对象数据源名字。</td></tr><tr><td>startTime</td><td>string|Date|JulianDate</td><td></td><td><code>optional</code> 指定 <code>viewer.clock</code> 时钟的开始时间。</td></tr><tr><td>stopTime</td><td>string| Date|JulianDate</td><td></td><td><code>optional</code> 指定 <code>viewer.clock</code> 时钟的结束时间。</td></tr><tr><td>currentTime</td><td>string| Date|JulianDate</td><td></td><td><code>optional</code> 指定 <code>viewer.clock</code> 时钟当前时间。</td></tr><tr><td>clockRange</td><td>number| Cesium.ClockRange</td><td><code>0</code></td><td><code>optional</code> 指定 <code>viewer.clock</code> 时钟走到结束时间时采取的决策。</td></tr><tr><td>clockStep</td><td>number| Cesium.ClockStep</td><td><code>1</code></td><td><code>optional</code> 指定 <code>viewer.clock</code> 时钟的运行是按帧还是按系统时间。</td></tr><tr><td>shouldAnimate</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定 <code>viewer.clock#tick</code> 是否改变 <code>viewer.clock</code> 时钟当前时间。</td></tr><tr><td>canAnimate</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定 Clock#tick 是否可以驱动时间。</td></tr><tr><td>multiplier</td><td>number</td><td><code>1.0</code></td><td><code>optional</code> 指定 <code>viewer.clock#tick</code> 改变 <code>viewer.clock</code> 当前时间的倍数。</td></tr><tr><td>dynamicOverlays</td><td>Array&lt;DynamicOverlayOpts&gt;</td><td><code>[]</code></td><td><code>optional</code> 指定动态对象采样位置数组。</td></tr><tr><td>defaultInterval</td><td>number</td><td><code>3.0</code></td><td><code>optional</code> 指定默认位置信息默认刷新间隔，实时改变动态模型位置可用。</td></tr><tr><td>stopArrivedFlag</td><td>string</td><td><code>&#39;time&#39;</code></td><td><code>optional</code> 指定到达站点的判定标志。</td></tr><tr><td>positionPrecision</td><td>number</td><td><code>0.0000001</code></td><td><code>optional</code> 指定位置判定精度。</td></tr><tr><td>timePrecision</td><td>number</td><td><code>0.01</code></td><td><code>optional</code> 指定时间判定精度。</td></tr></tbody></table>", 1);

const vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("事件 ");

const vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>onStop</td><td>(clock: Cesium.Clock)</td><td>时钟到达结束时间时触发。</td></tr><tr><td>stopArrived</td><td>(overlay: DynamicOverlay, position: SampledPosition)</td><td>到达站点时触发。</td></tr><tr><td>@update:currentTime</td><td>(currentTime: Cesium.JulianDate)</td><td>currentTime 改变时触发。</td></tr><tr><td>@update:shouldAnimate</td><td>(shouldAnimate: boolean)</td><td>shouldAnimate 改变时触发。</td></tr><tr><td>@update:canAnimate</td><td>(canAnimate: boolean)</td><td>canAnimate 改变时触发。</td></tr><tr><td>@update:clockRange</td><td>(clockRange: number )</td><td>clockRange 改变时触发。</td></tr><tr><td>@update:clockStep</td><td>(clockStep: number )</td><td>clockStep 改变时触发。</td></tr><tr><td>@update:multiplier</td><td>(multiplier: number)</td><td>multiplier 改变时触发。</td></tr><tr><td>@update:startTime</td><td>(startTime: Cesium.JulianDate)</td><td>startTime 改变时触发。</td></tr><tr><td>@update:stopTime</td><td>(stopTime: Cesium.JulianDate)</td><td>stopTime 改变时触发。</td></tr></tbody></table>", 1);

const vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("方法 ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>load</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动加载组件。</td></tr><tr><td>reload</td><td>() =&gt; Promise&lt;false | VcReadyObject&gt;</td><td>手动重新加载组件。</td></tr><tr><td>unload</td><td>() =&gt; Promise&lt;boolean&gt;</td><td>手动卸载组件。</td></tr><tr><td>getCreatingPromise</td><td>() =&gt; Promise&lt;boolean | VcReadyObject&gt;</td><td>获取标志该组件是否创建成功的 Promise 对象。</td></tr><tr><td>getCesiumObject</td><td>() =&gt; VcCesiumObject</td><td>获取该组件加载的 Cesium 对象。</td></tr><tr><td>getOverlay</td><td>(e: number | string | DynamicOverlay) =&gt; DynamicOverlay</td><td>根据 id 或者索引获取动态对象。 e: 对象 id 或者索引。</td></tr><tr><td>getOverlays</td><td>() =&gt; Array&lt;DynamicOverlay&gt;</td><td>获取所有的动态对象。</td></tr><tr><td>flyToOverlay</td><td>(overlays?: DynamicOverlay | number | string | Array&lt;DynamicOverlay | number | string&gt;, options?: { duration?: number; maximumHeight?: number; offset?: VcHeadingPitchRange }) =&gt; Promise&lt;boolean&gt;</td><td>飞行到动态对象（集合）。 overlays: 动态对象（索引、id）或者动态对象（索引、id）集合。不传或者传入空数组（空对象）则缩放到所有对象。offset: 缩放到对象的相机偏移。</td></tr><tr><td>zoomToOverlay</td><td>(overlays?: DynamicOverlay | number | string | Array&lt;DynamicOverlay | number | string&gt;, offset?: VcHeadingPitchRange) =&gt; Promise&lt;boolean&gt;</td><td>缩放到动态对象（集合）。 overlays: 动态对象（索引、id）或者动态对象（索引、id）集合。不传或者传入空数组（空对象）则缩放到所有对象。offset: 缩放到对象的相机偏移。</td></tr><tr><td>trackOverlay</td><td>(trackOverlay?: DynamicOverlay | string | number, trackViewOpts?: TrackViewOpts) =&gt; void</td><td>跟踪动态对象。trackOverlay: 跟踪对象或者跟踪对象的 id 或者 索引。不传则默认跟踪第一个对象。trackViewOpts: 视角参数。</td></tr></tbody></table>", 1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("参考 ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("DC-SDK");

function vc_overlay_dynamicvue_type_template_id_28a6d9a4_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcoverlaydynamic",
    tabindex: "-1",
    content: "VcOverlayDynamic",
    href: "#vcoverlaydynamic",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcoverlaydynamic"
    })]),
    _: 1
  }), vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_7]),
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    tabindex: "-1",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_9, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-jian",
    tabindex: "-1",
    content: "事件",
    href: "#shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "fang-fa",
    tabindex: "-1",
    content: "方法",
    href: "#fang-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_overlay_dynamicvue_type_template_id_28a6d9a4_hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fang-fa"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "can-kao",
    tabindex: "-1",
    content: "参考",
    href: "#can-kao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#can-kao"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "http://dc.dvgis.cn/#/editor?type=layer&example=dynamic"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_15]),
    _: 1
  })])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/overlays/vc-overlay-dynamic.md?vue&type=template&id=28a6d9a4

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_bcd6ea64369259a9a094ff5ba7188bb6/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_2a2707c7f6fb238ee6d53f3ae7e6e321/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/overlays/vc-overlay-dynamic.md?vue&type=script&lang=ts

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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("俯视");

      const _hoisted_5 = /*#__PURE__*/_createTextVNode("侧视");

      const _hoisted_6 = /*#__PURE__*/_createTextVNode("默认跟随");

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("俯视跟随");

      const _hoisted_8 = /*#__PURE__*/_createTextVNode("第一人称跟随");

      const _hoisted_9 = /*#__PURE__*/_createTextVNode("取消跟随");

      const _hoisted_10 = /*#__PURE__*/_createTextVNode("实时轨迹");

      const _hoisted_11 = /*#__PURE__*/_createTextVNode("历史轨迹");

      const _hoisted_12 = /*#__PURE__*/_createTextVNode("显示站点");

      function render(_ctx, _cache) {
        const _component_vc_overlay_dynamic = _resolveComponent("vc-overlay-dynamic");

        const _component_vc_imagery_provider_tianditu = _resolveComponent("vc-imagery-provider-tianditu");

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
              default: _withCtx(() => [_createVNode(_component_vc_imagery_provider_tianditu, {
                "map-style": "vec_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
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
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.viewTopDown
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.viewSide
            }, {
              default: _withCtx(() => [_hoisted_5]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _cache[4] || (_cache[4] = $event => _ctx.trackOverlay('TRACKED'))
            }, {
              default: _withCtx(() => [_hoisted_6]),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _cache[5] || (_cache[5] = $event => _ctx.trackOverlay('TP'))
            }, {
              default: _withCtx(() => [_hoisted_7]),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _cache[6] || (_cache[6] = $event => _ctx.trackOverlay('FP'))
            }, {
              default: _withCtx(() => [_hoisted_8]),
              _: 1
            }), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _cache[7] || (_cache[7] = $event => _ctx.trackOverlay('FREE'))
            }, {
              default: _withCtx(() => [_hoisted_9]),
              _: 1
            }), _createVNode(_component_el_radio_group, {
              modelValue: _ctx.radio,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => _ctx.radio = $event),
              onChange: _ctx.onRadioChanged
            }, {
              default: _withCtx(() => [_createVNode(_component_el_radio, {
                label: 0
              }, {
                default: _withCtx(() => [_hoisted_10]),
                _: 1
              }), _createVNode(_component_el_radio, {
                label: 1
              }, {
                default: _withCtx(() => [_hoisted_11]),
                _: 1
              })]),
              _: 1
            }, 8, ["modelValue", "onChange"]), _ctx.radio === 1 ? (_openBlock(), _createBlock(_component_el_checkbox, {
              key: 0,
              modelValue: _ctx.showStop,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => _ctx.showStop = $event),
              style: {
                "padding-left": "15px"
              }
            }, {
              default: _withCtx(() => [_hoisted_12]),
              _: 1
            }, 8, ["modelValue"])) : _createCommentVNode("", true)]),
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
          const radio = ref(1);
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
                // 最大缓存点位数，实时轨迹不要设置太大；历史轨迹要设置得大于总点位数，不然要丢失数据。
                model: {
                  uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/Car/Car.gltf',
                  scale: 0.5
                },
                // 轨迹
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
                // 采样位置
                sampledPositions: [{
                  position: generatePosition(1, 0.05)[0],
                  // 给一个初始位置 ready 事件才能定位 否则要延后
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
              // 最大缓存点位数，实时轨迹不要设置太大；历史轨迹要设置得大于总点位数，不然要丢失数据。
              model: {
                uri: 'https://zouyaoji.top/vue-cesium/SampleData/models/GroundVehicle/GroundVehicle.glb',
                scale: 5,
                runAnimations: false,
                nodeTransformations: nodeTransformations
              },
              // 尾迹
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
              // 标签
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
              // 轨迹
              polyline: {
                positions,
                width: 3,
                material: '#69B273',
                depthFailMaterial: '#69B273',
                clampToGround: true
              },
              rectangle: {
                material: 'red',
                coordinates: () => {
                  return Cesium.Rectangle.fromDegrees(102, 32, 104, 34);
                } // coordinates: [102, 32, 104, 34]

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
              dynamicOverlayRef.value.zoomToOverlay([], [0, -90, 1500]);
            }
          };

          const viewSide = () => {
            if (radio.value === 0) {
              dynamicOverlayRef.value.zoomToOverlay([], [-50, -20, 8000]);
            } else {
              dynamicOverlayRef.value.zoomToOverlay([], [-50, -20, 1800]);
            }
          };

          const trackOverlay = mode => {
            dynamicOverlayRef.value.trackOverlay(0, {
              mode,
              viewFrom: [0, 0, 1800]
            });
          };

          const stopArrived = (overlay, stop) => {
            console.log('到达站点：', overlay, stop);
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
// CONCATENATED MODULE: ./website/docs/zh-CN/overlays/vc-overlay-dynamic.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/overlays/vc-overlay-dynamic.md



vc_overlay_dynamicvue_type_script_lang_ts.render = vc_overlay_dynamicvue_type_template_id_28a6d9a4_render

/* harmony default export */ var vc_overlay_dynamic = __webpack_exports__["default"] = (vc_overlay_dynamicvue_type_script_lang_ts);

/***/ })

}]);