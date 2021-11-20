(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[126],{

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-path.md?vue&type=template&id=6a5afd26

const vc_graphics_pathvue_type_template_id_6a5afd26_hoisted_1 = {
  class: "content element-doc"
};

const vc_graphics_pathvue_type_template_id_6a5afd26_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcgraphicspath\"><a class=\"header-anchor\" href=\"#vcgraphicspath\">¶</a> VcGraphicsPath</h2><p>加载与时间关联的路径实体，相当于初始化一个 <code>Cesium.PathGraphics</code> 实例。</p><p><strong>注意：</strong> 需要作为 <code>vc-entity</code> 的子组件才能正常加载。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>路径实体组件的基础用法。</p>", 5);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-graphics-path"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加路径实体对象。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer shouldAnimate animation timeline @ready=\"onViewerReady\">\n    <vc-entity ref=\"entity\" :availability=\"availability\" :position=\"position\" :orientation=\"orientation\" description=\"Hello Vue Cesium\">\n      <vc-graphics-path\n        ref=\"path\"\n        :resolution=\"1\"\n        :material=\"{fabric: {type: 'PolylineGlow', uniforms: {glowPower: 0.1, color: 'yellow'}}}\"\n        :width=\"10\"\n      ></vc-graphics-path>\n      <vc-graphics-model\n        ref=\"model\"\n        uri=\"https://zouyaoji.top/vue-cesium/SampleData/models/CesiumAir/Cesium_Air.glb\"\n        :minimumPixelSize=\"128\"\n      ></vc-graphics-model>\n    </vc-entity>\n    <vc-entity :key=\"'entity' + index\" :position=\"position\" v-for=\"(position, index) of positions\">\n      <vc-graphics-point :pixelSize=\"8\" color=\"TRANSPARENT\" outlineColor=\"YELLOW\" :outlineWidth=\"3\"></vc-graphics-point>\n    </vc-entity>\n    <vc-layer-imagery>\n      <vc-provider-imagery-arcgis></vc-provider-imagery-arcgis>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"viewTopDown\">俯视</el-button>\n    <el-button type=\"danger\" round @click=\"viewSide\">侧视</el-button>\n    <el-button type=\"danger\" round @click=\"viewAircraft\">跟随</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  import { ref, getCurrentInstance, onMounted } from 'vue'\n  export default {\n    setup() {\n      // state\n      const position = ref({})\n      const positions = ref([])\n      const model = ref(null)\n      const availability = ref(null)\n      const orientation = ref(null)\n      const entity = ref(null)\n      let _viewer = undefined\n\n      // methods\n      const onEntityEvt = e => {\n        console.log(e)\n      }\n      const onViewerReady = ({ Cesium, viewer }) => {\n        console.log('viewer ready')\n        _viewer = viewer\n        //Enable lighting based on sun/moon positions\n        viewer.scene.globe.enableLighting = true\n        //Enable depth testing so things behind the terrain disappear.\n        viewer.scene.globe.depthTestAgainstTerrain = true\n        //Set the random number seed for consistent results.\n        Cesium.Math.setRandomNumberSeed(3)\n        const start = Cesium.JulianDate.fromDate(new Date(2015, 2, 25, 16))\n        const stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate())\n        viewer.clock.startTime = start.clone()\n        viewer.clock.stopTime = stop.clone()\n        viewer.clock.currentTime = start.clone()\n        viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP //Loop at the end\n        viewer.clock.multiplier = 10\n        viewer.timeline.zoomTo(start, stop)\n        position.value = computeCirclularFlight(-112.110693, 36.0994841, 0.03, start)\n        availability.value = new Cesium.TimeIntervalCollection([\n          new Cesium.TimeInterval({\n            start: start,\n            stop: stop\n          })\n        ])\n        orientation.value = new Cesium.VelocityOrientationProperty(position.value)\n      }\n\n      const computeCirclularFlight = (lon, lat, radius, start) => {\n        let property = new Cesium.SampledPositionProperty()\n        for (let i = 0; i <= 360; i += 45) {\n          let radians = Cesium.Math.toRadians(i)\n          let time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate())\n          let position = Cesium.Cartesian3.fromDegrees(\n            lon + radius * 1.5 * Math.cos(radians),\n            lat + radius * Math.sin(radians),\n            Cesium.Math.nextRandomNumber() * 500 + 1750\n          )\n          property.addSample(time, position)\n          positions.value.push(position)\n        }\n        return property\n      }\n\n      const viewTopDown = () => {\n        _viewer.trackedEntity = undefined\n        _viewer.zoomTo(_viewer.entities, new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90)))\n      }\n      const viewSide = () => {\n        _viewer.trackedEntity = undefined\n        _viewer.zoomTo(_viewer.entities, new Cesium.HeadingPitchRange(Cesium.Math.toRadians(-90), Cesium.Math.toRadians(-15), 7500))\n      }\n      const viewAircraft = () => {\n        _viewer.trackedEntity = entity.value.getCesiumObject()\n      }\n\n      // life cycle\n      onMounted(() => {\n        model.value.createPromise.then(({ Cesium, viewer }) => {\n          viewer.zoomTo(viewer.entities)\n        })\n      })\n\n      return {\n        onEntityEvt,\n        onViewerReady,\n        model,\n        entity,\n        positions,\n        orientation,\n        availability,\n        position,\n        viewTopDown,\n        viewSide,\n        viewAircraft\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> 指定 path 是否显示。</td></tr><tr><td>leadTime</td><td>Number</td><td></td><td><code>optional</code> 指定 path 前面要显示的秒数。</td></tr><tr><td>trailTime</td><td>Number</td><td></td><td><code>optional</code> 指定 path 后面要显示的秒数。</td></tr><tr><td>width</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定 path 像素宽度。</td></tr><tr><td>resolution</td><td>Number</td><td><code>60</code></td><td><code>optional</code> 指定 path 步进最大秒数。</td></tr><tr><td>material</td><td>Object|String|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> 指定 path 材质。</td></tr><tr><td>distanceDisplayCondition</td><td>Object|Array</td><td></td><td><code>optional</code> 指定 path 随相机距离改变是否显示参数。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr><tr><td>definitionChanged</td><td></td><td>每当更改或修改属性或子属性时触发该事件。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PathGraphics.html\">PathGraphics</a></strong></li></ul>", 6);

function vc_graphics_pathvue_type_template_id_6a5afd26_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_graphics_pathvue_type_template_id_6a5afd26_hoisted_1, [vc_graphics_pathvue_type_template_id_6a5afd26_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-path.md?vue&type=template&id=6a5afd26

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/graphics/vc-graphics-path.md?vue&type=script&lang=ts

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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("俯视");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("侧视");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("跟随");

      function render(_ctx, _cache) {
        const _component_vc_graphics_path = _resolveComponent("vc-graphics-path");

        const _component_vc_graphics_model = _resolveComponent("vc-graphics-model");

        const _component_vc_entity = _resolveComponent("vc-entity");

        const _component_vc_graphics_point = _resolveComponent("vc-graphics-point");

        const _component_vc_provider_imagery_arcgis = _resolveComponent("vc-provider-imagery-arcgis");

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
              description: "Hello Vue Cesium"
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
                  pixelSize: 8,
                  color: "TRANSPARENT",
                  outlineColor: "YELLOW",
                  outlineWidth: 3
                })]),
                _: 2
              }, 1032, ["position"]);
            }), 128)), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_arcgis)]),
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

          const onViewerReady = ({
            Cesium,
            viewer
          }) => {
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
            model.value.createPromise.then(({
              Cesium,
              viewer
            }) => {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-path.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/graphics/vc-graphics-path.md



vc_graphics_pathvue_type_script_lang_ts.render = vc_graphics_pathvue_type_template_id_6a5afd26_render

/* harmony default export */ var vc_graphics_path = __webpack_exports__["default"] = (vc_graphics_pathvue_type_script_lang_ts);

/***/ })

}]);