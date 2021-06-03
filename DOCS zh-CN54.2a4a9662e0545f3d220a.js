(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[140],{

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/post-processes/vc-post-process-stage.md?vue&type=template&id=c704c9d2

var vc_post_process_stagevue_type_template_id_c704c9d2_hoisted_1 = {
  class: "content element-doc"
};

var vc_post_process_stagevue_type_template_id_c704c9d2_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h2", {
  id: "vcpostprocessstage"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vcpostprocessstage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" VcPostProcessStage")], -1);

var vc_post_process_stagevue_type_template_id_c704c9d2_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("加载后期处理特效，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "Cesium.PostProcessStage"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 实例。")], -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h3", {
  id: "ji-chu-yong-fa"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-chu-yong-fa"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 基础用法")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "后期处理特效组件的基础用法。", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("使用 "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-post-process-stage"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" 标签在三维球上添加一个下雨后处理效果。")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-post-process-stage ref=\"stage\" :fragmentShader=\"fragmentShader\"></vc-post-process-stage>\n    <!-- 底图 -->\n    <vc-layer-imagery :sortOrder=\"20\">\n      <vc-provider-imagery-tianditu mapStyle=\"cva_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n    <vc-layer-imagery :sortOrder=\"10\">\n      <vc-provider-imagery-tianditu mapStyle=\"img_c\" token=\"436ce7e50d27eede2f2929307e6b33c0\"></vc-provider-imagery-tianditu>\n    </vc-layer-imagery>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        fragmentShader: `\n          uniform sampler2D colorTexture;\n          varying vec2 v_textureCoordinates;\n          float hash(float x){\n            return fract(sin(x*23.3)*13.13);\n          }\n          void main(void){\n            float time = czm_frameNumber / 60.0;\n            vec2 resolution = czm_viewport.zw;\n            vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);\n            vec3 c=vec3(.6,.7,.8);\n            float a=-.4;\n            float si=sin(a),co=cos(a);\n            uv*=mat2(co,-si,si,co);\n            uv*=length(uv+vec2(0,4.9))*.3+1.;\n            float v=1.-sin(hash(floor(uv.x*100.))*2.);\n            float b=clamp(abs(sin(20.*time*v+uv.y*(5./(2.+v))))-.95,0.,1.)*20.;\n            c*=v*b;\n            gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(c,1), 0.5);\n          }\n         `\n      }\n    },\n    methods: {\n      unload() {\n        this.$refs.stage.unload()\n      },\n      load() {\n        this.$refs.stage.load()\n      },\n      reload() {\n        this.$refs.stage.reload()\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>fragmentShader</td><td>String</td><td></td><td><code>required</code> 指定着色器代码。</td></tr><tr><td>uniforms</td><td>Object</td><td></td><td><code>optional</code> 指定着色器 uniforms 参数。uniform 变量一般用来表示：变换矩阵，材质，光照参数和颜色等信息。</td></tr><tr><td>textureScale</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> 指定纹理尺寸缩放比例，取值范围 (0.0, 1.0] 。</td></tr><tr><td>forcePowerOfTwo</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> 是否强制将纹理尺寸都等于 2 的幂。 2的幂将是最小维度中2的下一个幂。</td></tr><tr><td>sampleMode</td><td>Number</td><td><code>0</code></td><td><code>optional</code> 指定输入颜色纹理的采样方式。 <strong>{NEAREST: 0, LINEAR: 1}</strong></td></tr><tr><td>pixelFormat</td><td>Number</td><td></td><td><code>optional</code> 指定输出纹理的像素格式。</td></tr><tr><td>pixelDatatype</td><td>Number</td><td></td><td><code>optional</code> 指定输出纹理的数据类型。</td></tr><tr><td>clearColor</td><td>Object|Array|String</td><td><code>BLACK</code></td><td><code>optional</code> 指定清除输出纹理的颜色。</td></tr><tr><td>scissorRectangle</td><td>Object</td><td></td><td><code>optional</code> 指定用于测试的矩形。</td></tr><tr><td>name</td><td>String</td><td></td><td><code>optional</code> 指定唯一名称，未提供默认生成GUID。</td></tr></tbody></table><h3 id=\"shi-jian\"><a class=\"header-anchor\" href=\"#shi-jian\">¶</a> 事件</h3><table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>对象销毁时触发。</td></tr></tbody></table><h3 id=\"can-kao\"><a class=\"header-anchor\" href=\"#can-kao\">¶</a> 参考</h3><ul><li>官方文档： <a href=\"https://cesium.com/docs/cesiumjs-ref-doc/PostProcessStage.html\">PostProcessStage</a></li></ul>", 6);

function vc_post_process_stagevue_type_template_id_c704c9d2_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_post_process_stagevue_type_template_id_c704c9d2_hoisted_1, [vc_post_process_stagevue_type_template_id_c704c9d2_hoisted_2, vc_post_process_stagevue_type_template_id_c704c9d2_hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/post-processes/vc-post-process-stage.md?vue&type=template&id=c704c9d2

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/post-processes/vc-post-process-stage.md?vue&type=script&lang=ts


/* harmony default export */ var vc_post_process_stagevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("销毁");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("加载");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("重载");

      function render(_ctx, _cache) {
        var _component_vc_post_process_stage = _resolveComponent("vc-post-process-stage");

        var _component_vc_provider_imagery_tianditu = _resolveComponent("vc-provider-imagery-tianditu");

        var _component_vc_layer_imagery = _resolveComponent("vc-layer-imagery");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, null, {
              default: _withCtx(function () {
                return [_createVNode(_component_vc_post_process_stage, {
                  ref: "stage",
                  fragmentShader: _ctx.fragmentShader
                }, null, 8, ["fragmentShader"]), _createVNode(_component_vc_layer_imagery, {
                  sortOrder: 20
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_tianditu, {
                      mapStyle: "cva_c",
                      token: "436ce7e50d27eede2f2929307e6b33c0"
                    })];
                  }),
                  _: 1
                }), _createVNode(_component_vc_layer_imagery, {
                  sortOrder: 10
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_vc_provider_imagery_tianditu, {
                      mapStyle: "img_c",
                      token: "436ce7e50d27eede2f2929307e6b33c0"
                    })];
                  }),
                  _: 1
                })];
              }),
              _: 1
            }), _createVNode(_component_el_row, {
              class: "demo-toolbar"
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.unload
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_1];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.load
                }, {
                  default: _withCtx(function () {
                    return [_hoisted_2];
                  }),
                  _: 1
                }, 8, ["onClick"]), _createVNode(_component_el_button, {
                  type: "danger",
                  round: "",
                  onClick: _ctx.reload
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

      var democomponentExport = {
        data: function data() {
          return {
            fragmentShader: "\n          uniform sampler2D colorTexture;\n          varying vec2 v_textureCoordinates;\n          float hash(float x){\n            return fract(sin(x*23.3)*13.13);\n          }\n          void main(void){\n            float time = czm_frameNumber / 60.0;\n            vec2 resolution = czm_viewport.zw;\n            vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);\n            vec3 c=vec3(.6,.7,.8);\n            float a=-.4;\n            float si=sin(a),co=cos(a);\n            uv*=mat2(co,-si,si,co);\n            uv*=length(uv+vec2(0,4.9))*.3+1.;\n            float v=1.-sin(hash(floor(uv.x*100.))*2.);\n            float b=clamp(abs(sin(20.*time*v+uv.y*(5./(2.+v))))-.95,0.,1.)*20.;\n            c*=v*b;\n            gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(c,1), 0.5);\n          }\n         "
          };
        },
        methods: {
          unload: function unload() {
            this.$refs.stage.unload();
          },
          load: function load() {
            this.$refs.stage.load();
          },
          reload: function reload() {
            this.$refs.stage.reload();
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/post-processes/vc-post-process-stage.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/post-processes/vc-post-process-stage.md



vc_post_process_stagevue_type_script_lang_ts.render = vc_post_process_stagevue_type_template_id_c704c9d2_render

/* harmony default export */ var vc_post_process_stage = __webpack_exports__["default"] = (vc_post_process_stagevue_type_script_lang_ts);

/***/ })

}]);