(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/post-processes/vc-post-process-stage.md?vue&type=template&id=80974e64

const vc_post_process_stagevue_type_template_id_80974e64_hoisted_1 = {
  class: "content element-doc"
};

const vc_post_process_stagevue_type_template_id_80974e64_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h2", {
  id: "vcpostprocessstage"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  class: "header-anchor",
  href: "#vcpostprocessstage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" VcPostProcessStage")], -1);

const vc_post_process_stagevue_type_template_id_80974e64_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading post-processing effects. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.PostProcessStage"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance.")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Basic usage")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcPostProcessStage component.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-post-process-stage"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add a raining effect on the viewer.")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-post-process-stage ref=\"stage\" :fragmentShader=\"fragmentShader\"></vc-post-process-stage>\n    <vc-layer-imagery>\n      <vc-provider-imagery-osm></vc-provider-imagery-osm>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        fragmentShader: `\n          uniform sampler2D colorTexture;\n          varying vec2 v_textureCoordinates;\n          float hash(float x){\n            return fract(sin(x*23.3)*13.13);\n          }\n          void main(void){\n            float time = czm_frameNumber / 60.0;\n            vec2 resolution = czm_viewport.zw;\n            vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);\n            vec3 c=vec3(.6,.7,.8);\n            float a=-.4;\n            float si=sin(a),co=cos(a);\n            uv*=mat2(co,-si,si,co);\n            uv*=length(uv+vec2(0,4.9))*.3+1.;\n            float v=1.-sin(hash(floor(uv.x*100.))*2.);\n            float b=clamp(abs(sin(20.*time*v+uv.y*(5./(2.+v))))-.95,0.,1.)*20.;\n            c*=v*b;\n            gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(c,1), 0.5);\n          }\n         `\n      }\n    },\n    methods: {\n      unload() {\n        this.$refs.stage.unload()\n      },\n      load() {\n        this.$refs.stage.load()\n      },\n      reload() {\n        this.$refs.stage.reload()\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>fragmentShader</td><td>String</td><td></td><td><code>required</code> The fragment shader to use. The default sampler2D uniforms are colorTexture and depthTexture. The color texture is the output of rendering the scene or the previous stage. The depth texture is the output from rendering the scene. The shader should contain one or both uniforms. There is also a vec2 varying named v_textureCoordinates that can be used to sample the textures.</td></tr><tr><td>uniforms</td><td>Object</td><td></td><td><code>optional</code> An object whose properties will be used to set the shaders uniforms. The properties can be constant values or a function. A constant value can also be a URI, data URI, or HTML element to use as a texture.</td></tr><tr><td>textureScale</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> A number in the range (0.0, 1.0] used to scale the texture dimensions. A scale of 1.0 will render this post-process stage to a texture the size of the viewport.</td></tr><tr><td>forcePowerOfTwo</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Whether or not to force the texture dimensions to be both equal powers of two. The power of two will be the next power of two of the minimum of the dimensions.</td></tr><tr><td>sampleMode</td><td>Number</td><td><code>0</code></td><td><code>optional</code> How to sample the input color texture. <strong>{NEAREST: 0, LINEAR: 1}</strong></td></tr><tr><td>pixelFormat</td><td>Number</td><td></td><td><code>optional</code> The color pixel format of the output texture.</td></tr><tr><td>pixelDatatype</td><td>Number</td><td></td><td><code>optional</code> The pixel data type of the output texture.</td></tr><tr><td>clearColor</td><td>Object|Array|String</td><td><code>BLACK</code></td><td><code>optional</code> The color to clear the output texture to.</td></tr><tr><td>scissorRectangle</td><td>Object</td><td></td><td><code>optional</code> The rectangle to use for the scissor test.</td></tr><tr><td>name</td><td>String</td><td></td><td><code>optional</code> The unique name of this post-process stage for reference by other stages in a composite. If a name is not supplied, a GUID will be generated.</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PostProcessStage.html\">PostProcessStage</a></li></ul>", 6);

function vc_post_process_stagevue_type_template_id_80974e64_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_post_process_stagevue_type_template_id_80974e64_hoisted_1, [vc_post_process_stagevue_type_template_id_80974e64_hoisted_2, vc_post_process_stagevue_type_template_id_80974e64_hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/post-processes/vc-post-process-stage.md?vue&type=template&id=80974e64

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/post-processes/vc-post-process-stage.md?vue&type=script&lang=ts

/* harmony default export */ var vc_post_process_stagevue_type_script_lang_ts = ({
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
        const _component_vc_post_process_stage = _resolveComponent("vc-post-process-stage");

        const _component_vc_provider_imagery_osm = _resolveComponent("vc-provider-imagery-osm");

        const _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        const _component_vc_viewer = _resolveComponent("vc-viewer");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_post_process_stage, {
              ref: "stage",
              fragmentShader: _ctx.fragmentShader
            }, null, 8, ["fragmentShader"]), _createVNode(_component_vc_layer_imagery, null, {
              default: _withCtx(() => [_createVNode(_component_vc_provider_imagery_osm)]),
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
              onClick: _ctx.load
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
          };
        },

        methods: {
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
// CONCATENATED MODULE: ./website/docs/en-US/post-processes/vc-post-process-stage.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/post-processes/vc-post-process-stage.md



vc_post_process_stagevue_type_script_lang_ts.render = vc_post_process_stagevue_type_template_id_80974e64_render

/* harmony default export */ var vc_post_process_stage = __webpack_exports__["default"] = (vc_post_process_stagevue_type_script_lang_ts);

/***/ })

}]);