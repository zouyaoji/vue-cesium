(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[181],{

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-primitive-model.md?vue&type=template&id=5fe4ce11

const vc_primitive_modelvue_type_template_id_5fe4ce11_hoisted_1 = {
  class: "content vue-cesium-doc"
};
const vc_primitive_modelvue_type_template_id_5fe4ce11_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载模型图元，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.Model"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例。")], -1);
const vc_primitive_modelvue_type_template_id_5fe4ce11_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "模型图元组件的基础用法。", -1);
const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive-model"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加模型并改变它的光照。")])], -1);
const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-primitive-model\n      ref=\"primitive\"\n      :url=\"url\"\n      id=\"test\"\n      @textures-ready-event=\"onTexturesReadyEvent\"\n      @ready-event=\"onReadyEvent\"\n      :modelMatrix=\"modelMatrix\"\n      :scale=\"10000\"\n      :minimumPixelSize=\"128\"\n      :maximumScale=\"200000\"\n      @click=\"onClicked\"\n      :luminanceAtZenith=\"luminanceAtZenith\"\n      :specularEnvironmentMaps=\"specularEnvironmentMaps\"\n      :sphericalHarmonicCoefficients=\"sphericalHarmonicCoefficients\"\n    >\n    </vc-primitive-model>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n      <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n    </el-row>\n    <el-row>\n      <el-col>\n        <div class=\"block\">\n          <span class=\"demonstration\">顶点亮度</span>\n          <el-slider v-model=\"luminanceAtZenith\" :min=\"0\" :max=\"2\" :step=\"0.01\"></el-slider>\n          <el-checkbox v-model=\"proceduralEnvironmentLighting\" :min=\"0\" :max=\"5\" :step=\"0.01\">使用程序内置的环境光照</el-checkbox>\n        </div>\n      </el-col>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  let _viewer = undefined\n  const coefficients = [\n    [-0.066550267689383, -0.022088055746048, 0.078835009246127],\n    [0.038364097478591, 0.045714300098753, 0.063498904606215],\n    [-0.01436536331281, -0.026490613715151, -0.05018940406602],\n    [-0.05153278691789, -0.050777795729986, -0.056449044453032],\n    [0.043454596136534, 0.046672590104157, 0.05753010764661],\n    [-0.00164046627411, 0.001286638231156, 0.007228908989616],\n    [-0.042260855700641, -0.046394335094707, -0.057562936365585],\n    [-0.004953478914091, -0.000479681664876, 0.008508150106928]\n  ]\n  const environmentMapURL = 'https://zouyaoji.top/vue-cesium/SampleData/EnvironmentMap/kiara_6_afternoon_2k_ibl.ktx'\n  export default {\n    data() {\n      return {\n        url: 'https://zouyaoji.top/vue-cesium/SampleData/models/Pawns/Pawns.glb',\n        modelMatrix: {},\n        proceduralEnvironmentLighting: false,\n        luminanceAtZenith: 0.2,\n        specularEnvironmentMaps: environmentMapURL,\n        sphericalHarmonicCoefficients: coefficients\n      }\n    },\n    watch: {\n      proceduralEnvironmentLighting(val) {\n        if (val) {\n          this.specularEnvironmentMaps = undefined\n          this.sphericalHarmonicCoefficients = undefined\n        } else {\n          this.specularEnvironmentMaps = environmentMapURL\n          this.sphericalHarmonicCoefficients = coefficients\n        }\n      }\n    },\n    methods: {\n      onViewerReady({ Cesium, viewer }) {\n        this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))\n        _viewer = viewer\n        window.viewer = viewer\n      },\n      onClicked(e) {\n        console.log(e)\n      },\n      unload() {\n        this.$refs.primitive.unload()\n      },\n      load() {\n        this.$refs.primitive.load()\n      },\n      reload() {\n        this.$refs.primitive.reload()\n      },\n      onTexturesReadyEvent(model) {\n        console.log(model)\n      },\n      onReadyEvent(model) {\n        _viewer.scene.camera.flyToBoundingSphere(model.boundingSphere)\n      }\n    }\n  }\n</script>\n")], -1);
const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>url</td><td>string</td><td></td><td><code>required</code> 指定 gltf 文件的 url 地址。</td><td></td></tr><tr><td>basePath</td><td>string</td><td></td><td><code>optional</code> 指定 glTF JSON 中 url 的相对路径。</td><td></td></tr><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定 model 图元是否显示。</td><td></td></tr><tr><td>modelMatrix</td><td>Cesium.Matrix4</td><td></td><td><code>optional</code> 指定将模型从模型坐标转换为世界坐标的 4x4 矩阵。</td><td></td></tr><tr><td>scale</td><td>number</td><td><code>1.0</code></td><td><code>optional</code> 指定 model 缩放比例。</td><td></td></tr><tr><td>minimumPixelSize</td><td>number</td><td><code>0.0</code></td><td><code>optional</code> 指定 model 的最小像素。</td><td></td></tr><tr><td>maximumScale</td><td>number</td><td></td><td><code>optional</code> 指定 model 最大像素。</td><td></td></tr><tr><td>id</td><td>*</td><td></td><td><code>optional</code> 指定与 model 关联的信息，拾取时将返回该属性。</td><td></td></tr><tr><td>allowPicking</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定与 model 是否可以被拾取。</td><td></td></tr><tr><td>incrementallyLoadTextures</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定在加载模型后纹理是否可以继续加载。</td><td></td></tr><tr><td>asynchronous</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 确定在加载所有 glTF 文件后，是否将模型 WebGL 资源创建分散在几个帧或块上，直到完成。</td><td></td></tr><tr><td>clampAnimations</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定动画在没有帧动画的时候保持最后一个姿势。</td><td></td></tr><tr><td>shadows</td><td>number</td><td><code>1</code></td><td><code>optional</code> 指定 model 是否投射或接收每个光源的阴影。 <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>debugShowBoundingVolume</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> 可选的仅用于调试。 为模型中的每个 DrawCommand 绘制边界球。</td><td></td></tr><tr><td>debugWireframe</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> 可选的仅用于调试。 仅用于调试。 在线框中绘制模型。</td><td></td></tr><tr><td>heightReference</td><td>number</td><td><code>0</code></td><td><code>optional</code> 指定 model 的高度模式。 <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td>0/1/2</td></tr><tr><td>scene</td><td>Cesium.Scene</td><td><code>false</code></td><td><code>optional</code> 指定model的scene参数，使用 heightReference 属性的模型必须传递。</td><td></td></tr><tr><td>distanceDisplayCondition</td><td>VcDistanceDisplayCondition|Array</td><td></td><td><code>optional</code> 指定 model 随相机改变的显示条件。</td><td></td></tr><tr><td>color</td><td>VcColor|string|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> 指定 model 渲染混合的颜色。</td><td></td></tr><tr><td>colorBlendMode</td><td>number</td><td><code>0</code></td><td><code>optional</code> 指定 model 与颜色混合模式。 <strong>HIGHLIGHT: 0, REPLACE: 1, MIX: 2</strong></td><td></td></tr><tr><td>colorBlendAmount</td><td>number</td><td><code>0.5</code></td><td><code>optional</code> 指定 colorBlendMode 为 MIX 的颜色强度。0 表示模型颜色，1 表示纯色，0-1 表示混合。</td><td></td></tr><tr><td>silhouetteColor</td><td>VcColor|string|Array</td><td><code>&#39;red&#39;</code></td><td><code>optional</code> 指定 model 轮廓线颜色。</td><td></td></tr><tr><td>silhouetteSize</td><td>number</td><td><code>0.0</code></td><td><code>optional</code> 指定 model 轮廓线像素尺寸。</td><td></td></tr><tr><td>clippingPlanes</td><td>Cesium.ClippingPlaneCollection | VcCallbackPropertyFunction&lt;Cesium.ClippingPlaneCollection&gt;</td><td></td><td><code>optional</code> 指定 model 屏幕裁剪参数。</td><td></td></tr><tr><td>dequantizeInShader</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 确定是否在 GPU 上对 Draco 编码的模型进行了反量化。 这减少了编码模型的总内存使用量。</td><td></td></tr><tr><td>imageBasedLightingFactor</td><td>VcColor</td><td></td><td><code>optional</code> 缩放来自地球，天空，大气层和星空盒的基于漫反射和镜面反射图像的照明。</td><td></td></tr><tr><td>lightColor</td><td>VcColor</td><td></td><td><code>optional</code> 为模型着色时的浅色。 未定义时，将使用场景的灯光颜色。</td><td></td></tr><tr><td>luminanceAtZenith</td><td>number</td><td><code>0.2</code></td><td><code>optional</code> 太阳在天顶的亮度，以每平方米千坎德拉为单位，用于该模型的过程环境图。</td><td></td></tr><tr><td>sphericalHarmonicCoefficients</td><td>VcCartesian3Array</td><td></td><td><code>optional</code> 用于基于图像的照明的漫反射颜色的三阶球面谐波系数。</td><td></td></tr><tr><td>specularEnvironmentMaps</td><td>string</td><td></td><td><code>optional</code> KTX 文件的 URL，其中包含镜面照明的立方体贴图和卷积的镜面 mipmap。</td><td></td></tr><tr><td>credit</td><td>Cesium.Credit|string</td><td></td><td><code>optional</code> 指定 model 的描述信息。</td><td></td></tr><tr><td>backFaceCulling</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 是否剔除背面几何。 如果为 true，则背面剔除取决于材质的 doubleSided 属性； 如果为假，则禁用背面剔除。 如果 Model#color 是半透明的或 Model#silhouetteSize 大于 0.0，则不会剔除背面</td><td></td></tr><tr><td>enableMouseEvent</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定鼠标事件是否生效。</td><td></td></tr></tbody></table>", 1);
const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>readyPromise</td><td></td><td>模型对象可用时触发。</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上按下时触发。</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上弹起时触发。</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>鼠标单击该图元时触发。</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>鼠标单击该图元外部时触发。</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>鼠标左键双击该图元时触发。</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上移动时触发。</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>鼠标移动到该图元时触发。</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>鼠标移出该图元时触发。</td></tr></tbody></table>", 1);
function vc_primitive_modelvue_type_template_id_5fe4ce11_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");
  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");
  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");
  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");
  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_primitive_modelvue_type_template_id_5fe4ce11_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcprimitivemodel",
    tabindex: "-1",
    content: "VcPrimitiveModel",
    href: "#vcprimitivemodel",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcPrimitiveModel "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcprimitivemodel"
    })]),
    _: 1
  }), vc_primitive_modelvue_type_template_id_5fe4ce11_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "ji-chu-yong-fa",
    tabindex: "-1",
    content: "基础用法",
    href: "#ji-chu-yong-fa",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("基础用法 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ji-chu-yong-fa"
    })]),
    _: 1
  }), vc_primitive_modelvue_type_template_id_5fe4ce11_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_4]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shu-xing",
    tabindex: "-1",
    content: "属性",
    href: "#shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("属性 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shu-xing"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "shi-jian",
    tabindex: "-1",
    content: "事件",
    href: "#shi-jian",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("事件 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-jian"
    })]),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "can-kao",
    tabindex: "-1",
    content: "参考",
    href: "#can-kao",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("参考 "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#can-kao"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createTextVNode"])("官方文档： "), Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/Model.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Model")]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-primitive-model.md?vue&type=template&id=5fe4ce11

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-primitive-model.md?vue&type=script&lang=ts

/* harmony default export */ var vc_primitive_modelvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser;
      const _hoisted_1 = {
        class: "demo-toolbar"
      };
      const _hoisted_2 = {
        class: "block"
      };
      const _hoisted_3 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "顶点亮度", -1);
      function render(_ctx, _cache) {
        const _component_vc_primitive_model = _resolveComponent("vc-primitive-model");
        const _component_vc_viewer = _resolveComponent("vc-viewer");
        const _component_el_button = _resolveComponent("el-button");
        const _component_el_row = _resolveComponent("el-row");
        const _component_el_slider = _resolveComponent("el-slider");
        const _component_el_checkbox = _resolveComponent("el-checkbox");
        const _component_el_col = _resolveComponent("el-col");
        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.onViewerReady
          }, {
            default: _withCtx(() => [_createVNode(_component_vc_primitive_model, {
              ref: "primitive",
              url: _ctx.url,
              id: "test",
              onTexturesReadyEvent: _ctx.onTexturesReadyEvent,
              onReadyEvent: _ctx.onReadyEvent,
              modelMatrix: _ctx.modelMatrix,
              scale: 10000,
              minimumPixelSize: 128,
              maximumScale: 200000,
              onClick: _ctx.onClicked,
              luminanceAtZenith: _ctx.luminanceAtZenith,
              specularEnvironmentMaps: _ctx.specularEnvironmentMaps,
              sphericalHarmonicCoefficients: _ctx.sphericalHarmonicCoefficients
            }, null, 8, ["url", "onTexturesReadyEvent", "onReadyEvent", "modelMatrix", "onClick", "luminanceAtZenith", "specularEnvironmentMaps", "sphericalHarmonicCoefficients"])]),
            _: 1
          }, 8, ["onReady"]), _createElementVNode("div", _hoisted_1, [_createVNode(_component_el_row, null, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_createTextVNode("销毁")]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_createTextVNode("加载")]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_createTextVNode("重载")]),
              _: 1
            }, 8, ["onClick"])]),
            _: 1
          }), _createVNode(_component_el_row, null, {
            default: _withCtx(() => [_createVNode(_component_el_col, null, {
              default: _withCtx(() => [_createElementVNode("div", _hoisted_2, [_hoisted_3, _createVNode(_component_el_slider, {
                modelValue: _ctx.luminanceAtZenith,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.luminanceAtZenith = $event),
                min: 0,
                max: 2,
                step: 0.01
              }, null, 8, ["modelValue", "step"]), _createVNode(_component_el_checkbox, {
                modelValue: _ctx.proceduralEnvironmentLighting,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.proceduralEnvironmentLighting = $event),
                min: 0,
                max: 5,
                step: 0.01
              }, {
                default: _withCtx(() => [_createTextVNode("使用程序内置的环境光照")]),
                _: 1
              }, 8, ["modelValue", "step"])])]),
              _: 1
            })]),
            _: 1
          })])]),
          _: 1
        }, 512)]);
      }
      let _viewer = undefined;
      const coefficients = [[-0.066550267689383, -0.022088055746048, 0.078835009246127], [0.038364097478591, 0.045714300098753, 0.063498904606215], [-0.01436536331281, -0.026490613715151, -0.05018940406602], [-0.05153278691789, -0.050777795729986, -0.056449044453032], [0.043454596136534, 0.046672590104157, 0.05753010764661], [-0.00164046627411, 0.001286638231156, 0.007228908989616], [-0.042260855700641, -0.046394335094707, -0.057562936365585], [-0.004953478914091, -0.000479681664876, 0.008508150106928]];
      const environmentMapURL = 'https://zouyaoji.top/vue-cesium/SampleData/EnvironmentMap/kiara_6_afternoon_2k_ibl.ktx';
      const democomponentExport = {
        data() {
          return {
            url: 'https://zouyaoji.top/vue-cesium/SampleData/models/Pawns/Pawns.glb',
            modelMatrix: {},
            proceduralEnvironmentLighting: false,
            luminanceAtZenith: 0.2,
            specularEnvironmentMaps: environmentMapURL,
            sphericalHarmonicCoefficients: coefficients
          };
        },
        watch: {
          proceduralEnvironmentLighting(val) {
            if (val) {
              this.specularEnvironmentMaps = undefined;
              this.sphericalHarmonicCoefficients = undefined;
            } else {
              this.specularEnvironmentMaps = environmentMapURL;
              this.sphericalHarmonicCoefficients = coefficients;
            }
          }
        },
        methods: {
          onViewerReady(_ref) {
            let {
              Cesium,
              viewer
            } = _ref;
            this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000));
            _viewer = viewer;
            window.viewer = viewer;
          },
          onClicked(e) {
            console.log(e);
          },
          unload() {
            this.$refs.primitive.unload();
          },
          load() {
            this.$refs.primitive.load();
          },
          reload() {
            this.$refs.primitive.reload();
          },
          onTexturesReadyEvent(model) {
            console.log(model);
          },
          onReadyEvent(model) {
            _viewer.scene.camera.flyToBoundingSphere(model.boundingSphere);
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
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-primitive-model.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-primitive-model.md



vc_primitive_modelvue_type_script_lang_ts.render = vc_primitive_modelvue_type_template_id_5fe4ce11_render

/* harmony default export */ var vc_primitive_model = __webpack_exports__["default"] = (vc_primitive_modelvue_type_script_lang_ts);

/***/ })

}]);