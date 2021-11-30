(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[149],{

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/post-processes/vc-post-process-stage-collection.md?vue&type=template&id=3879a778

const vc_post_process_stage_collectionvue_type_template_id_3879a778_hoisted_1 = {
  class: "content element-doc"
};

const vc_post_process_stage_collectionvue_type_template_id_3879a778_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h2 id=\"vcpostprocessstagecollection\"><a class=\"header-anchor\" href=\"#vcpostprocessstagecollection\">¶</a> VcPostProcessStageCollection</h2><p>加载后期处理特效集合，管理一组后期处理特效。</p><p>可用于挂载 <code>vc-post-process-stage</code> 和 <code>vc-post-process-stage-scan</code> 组件。</p><h3 id=\"ji-chu-yong-fa\"><a class=\"header-anchor\" href=\"#ji-chu-yong-fa\">¶</a> 基础用法</h3><p>后期处理特效集合组件的基础用法。</p>", 5);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-post-process-stage-collection"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加一组后处理效果。")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"ready\">\n    <vc-post-process-stage-collection ref=\"stage\" :postProcesses=\"postProcesses\">\n      <vc-post-process-stage-scan type=\"radar\" :options=\"options1\"></vc-post-process-stage-scan>\n      <vc-post-process-stage-scan type=\"circle\" :options=\"options2\"></vc-post-process-stage-scan>\n    </vc-post-process-stage-collection>\n    <!-- 底图 -->\n    <vc-layer-imagery :sortOrder=\"20\">\n      <vc-provider-imagery-tianditu mapStyle=\"cva_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n    <vc-layer-imagery :sortOrder=\"10\">\n      <vc-provider-imagery-tianditu mapStyle=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        options1: {\n          position: [117.217124, 31.809777],\n          radius: 1500,\n          interval: 1500,\n          color: [255, 255, 0, 255]\n        },\n        options2: {\n          position: [117.257124, 31.809777],\n          radius: 1500,\n          interval: 1500,\n          color: [255, 0, 0, 255]\n        },\n        postProcesses: [\n          {\n            fragmentShader: `\n              uniform sampler2D colorTexture;\n              varying vec2 v_textureCoordinates;\n              float hash(float x){\n                return fract(sin(x*23.3)*13.13);\n              }\n              void main(void){\n                float time = czm_frameNumber / 60.0;\n                vec2 resolution = czm_viewport.zw;\n                vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);\n                vec3 c=vec3(.6,.7,.8);\n                float a=-.4;\n                float si=sin(a),co=cos(a);\n                uv*=mat2(co,-si,si,co);\n                uv*=length(uv+vec2(0,4.9))*.3+1.;\n                float v=1.-sin(hash(floor(uv.x*100.))*2.);\n                float b=clamp(abs(sin(20.*time*v+uv.y*(5./(2.+v))))-.95,0.,1.)*20.;\n                c*=v*b;\n                gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(c,1), 0.5);\n              }\n            `\n          }\n        ]\n      }\n    },\n    methods: {\n      ready({ viewer }) {\n        viewer.scene.globe.depthTestAgainstTerrain = true\n        viewer.camera.flyTo({\n          destination: Cesium.Cartesian3.fromDegrees(117.237124, 31.809777, 10000.0),\n          orientation: {\n            heading: Cesium.Math.toRadians(0), // east, default value is 0.0 (north) //东西南北朝向\n            pitch: Cesium.Math.toRadians(-90), // default value (looking down)  //俯视仰视视觉\n            roll: 0.0 // default value\n          },\n          duration: 3 //3秒到达战场\n        })\n      },\n      unload() {\n        this.$refs.stage.unload()\n      },\n      load() {\n        this.$refs.stage.load()\n      },\n      reload() {\n        this.$refs.stage.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>postProcesses</td><td>Array</td><td></td><td><code>optional</code> 指定后处理集合。 属性与 <code>vc-post-process-stage</code> 保持一致。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PostProcessStageCollection.html\">PostProcessStageCollection</a></li></ul>", 6);

function vc_post_process_stage_collectionvue_type_template_id_3879a778_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_post_process_stage_collectionvue_type_template_id_3879a778_hoisted_1, [vc_post_process_stage_collectionvue_type_template_id_3879a778_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/post-processes/vc-post-process-stage-collection.md?vue&type=template&id=3879a778

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/post-processes/vc-post-process-stage-collection.md?vue&type=script&lang=ts

/* harmony default export */ var vc_post_process_stage_collectionvue_type_script_lang_ts = ({
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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

      function render(_ctx, _cache) {
        const _component_vc_post_process_stage_scan = _resolveComponent("vc-post-process-stage-scan");

        const _component_vc_post_process_stage_collection = _resolveComponent("vc-post-process-stage-collection");

        const _component_vc_provider_imagery_tianditu = _resolveComponent("vc-provider-imagery-tianditu");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.ready
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_post_process_stage_collection, {
              ref: "stage",
              postProcesses: _ctx.postProcesses
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_post_process_stage_scan, {
                type: "radar",
                options: _ctx.options1
              }, null, 8, ["options"]), _createVNode(_component_vc_post_process_stage_scan, {
                type: "circle",
                options: _ctx.options2
              }, null, 8, ["options"])]),
              _: 1
            }, 8, ["postProcesses"]), _createVNode(_component_vc_layer_imagery, {
              sortOrder: 20
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_tianditu, {
                mapStyle: "cva_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
              _: 1
            }), _createVNode(_component_vc_layer_imagery, {
              sortOrder: 10
            }, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_tianditu, {
                mapStyle: "img_c",
                token: "436ce7e50d27eede2f2929307e6b33c0"
              })]),
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
            }, 8, ["onClick"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }

      const democomponentExport = {
        data() {
          return {
            options1: {
              position: [117.217124, 31.809777],
              radius: 1500,
              interval: 1500,
              color: [255, 255, 0, 255]
            },
            options2: {
              position: [117.257124, 31.809777],
              radius: 1500,
              interval: 1500,
              color: [255, 0, 0, 255]
            },
            postProcesses: [{
              fragmentShader: `
              uniform sampler2D colorTexture;
              varying vec2 v_textureCoordinates;
              float hash(float x){
                return fract(sin(x*23.3)*13.13);
              }
              void main(void){
                float time = czm_frameNumber / 60.0;
                vec2 resolution = czm_viewport.zw;
                vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);
                vec3 c=vec3(.6,.7,.8);
                float a=-.4;
                float si=sin(a),co=cos(a);
                uv*=mat2(co,-si,si,co);
                uv*=length(uv+vec2(0,4.9))*.3+1.;
                float v=1.-sin(hash(floor(uv.x*100.))*2.);
                float b=clamp(abs(sin(20.*time*v+uv.y*(5./(2.+v))))-.95,0.,1.)*20.;
                c*=v*b;
                gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(c,1), 0.5);
              }
            `
            }]
          };
        },

        methods: {
          ready({
            viewer
          }) {
            viewer.scene.globe.depthTestAgainstTerrain = true;
            viewer.camera.flyTo({
              destination: Cesium.Cartesian3.fromDegrees(117.237124, 31.809777, 10000.0),
              orientation: {
                heading: Cesium.Math.toRadians(0),
                // east, default value is 0.0 (north) //东西南北朝向
                pitch: Cesium.Math.toRadians(-90),
                // default value (looking down)  //俯视仰视视觉
                roll: 0.0 // default value

              },
              duration: 3 //3秒到达战场

            });
          },

          unload() {
            this.$refs.stage.unload();
          },

          load() {
            this.$refs.stage.load();
          },

          reload() {
            this.$refs.stage.reload();
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/post-processes/vc-post-process-stage-collection.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/post-processes/vc-post-process-stage-collection.md



vc_post_process_stage_collectionvue_type_script_lang_ts.render = vc_post_process_stage_collectionvue_type_template_id_3879a778_render

/* harmony default export */ var vc_post_process_stage_collection = __webpack_exports__["default"] = (vc_post_process_stage_collectionvue_type_script_lang_ts);

/***/ })

}]);