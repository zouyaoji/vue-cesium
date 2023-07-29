(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/primitives/vc-primitive-model.md?vue&type=template&id=2e7141da

const vc_primitive_modelvue_type_template_id_2e7141da_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_primitive_modelvue_type_template_id_2e7141da_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPrimitiveModel ");

const vc_primitive_modelvue_type_template_id_2e7141da_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading a 3D model based on glTF, the runtime asset format for WebGL, OpenGL ES, and OpenGL. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.Model"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance.")], -1);

const vc_primitive_modelvue_type_template_id_2e7141da_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Cesium includes support for geometry and materials, glTF animations, and glTF skinning. In addition, individual glTF nodes are pickable with Scene#pick and animatable with Model#getNode. glTF cameras and lights are not currently supported.", -1);

const vc_primitive_modelvue_type_template_id_2e7141da_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "An external glTF asset is created with Model.fromGltf. glTF JSON can also be created at runtime and passed to this constructor function. In either case, the Model#readyPromise is resolved when the model is ready to render, i.e., when the external binary, image, and shader files are downloaded and the WebGL resources are created.", -1);

const vc_primitive_modelvue_type_template_id_2e7141da_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const vc_primitive_modelvue_type_template_id_2e7141da_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcPrimitiveGround component.", -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive-model"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add a model to the viewer and change its lighting.")])], -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\">\n    <vc-primitive-model\n      ref=\"primitive\"\n      :url=\"url\"\n      @textures-ready-event=\"onTexturesReadyEvent\"\n      @ready-event=\"onReadyEvent\"\n      :modelMatrix=\"modelMatrix\"\n      :scale=\"10000\"\n      :minimumPixelSize=\"128\"\n      :maximumScale=\"200000\"\n      @click=\"onClicked\"\n      :luminanceAtZenith=\"luminanceAtZenith\"\n      :specularEnvironmentMaps=\"specularEnvironmentMaps\"\n      :sphericalHarmonicCoefficients=\"sphericalHarmonicCoefficients\"\n    >\n    </vc-primitive-model>\n  </vc-viewer>\n  <div class=\"demo-toolbar\">\n    <el-row>\n      <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n      <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n      <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n    </el-row>\n    <el-row>\n      <el-col>\n        <div class=\"block\">\n          <span class=\"demonstration\">Luminance at Zenith</span>\n          <el-slider v-model=\"luminanceAtZenith\" :min=\"0\" :max=\"2\" :step=\"0.01\"></el-slider>\n          <el-checkbox v-model=\"proceduralEnvironmentLighting\" :min=\"0\" :max=\"5\" :step=\"0.01\">Use procedural environment lighting</el-checkbox>\n        </div>\n      </el-col>\n    </el-row>\n  </div>\n</el-row>\n\n<script>\n  let _viewer = undefined\n  const coefficients = [\n    [-0.066550267689383, -0.022088055746048, 0.078835009246127],\n    [0.038364097478591, 0.045714300098753, 0.063498904606215],\n    [-0.01436536331281, -0.026490613715151, -0.05018940406602],\n    [-0.05153278691789, -0.050777795729986, -0.056449044453032],\n    [0.043454596136534, 0.046672590104157, 0.05753010764661],\n    [-0.00164046627411, 0.001286638231156, 0.007228908989616],\n    [-0.042260855700641, -0.046394335094707, -0.057562936365585],\n    [-0.004953478914091, -0.000479681664876, 0.008508150106928]\n  ]\n  const environmentMapURL = 'https://zouyaoji.top/vue-cesium/SampleData/EnvironmentMap/kiara_6_afternoon_2k_ibl.ktx'\n  export default {\n    data() {\n      return {\n        url: 'https://zouyaoji.top/vue-cesium/SampleData/models/Pawns/Pawns.glb',\n        modelMatrix: {},\n        proceduralEnvironmentLighting: false,\n        luminanceAtZenith: 0.2,\n        specularEnvironmentMaps: environmentMapURL,\n        sphericalHarmonicCoefficients: coefficients\n      }\n    },\n    watch: {\n      proceduralEnvironmentLighting(val) {\n        if (val) {\n          this.specularEnvironmentMaps = undefined\n          this.sphericalHarmonicCoefficients = undefined\n        } else {\n          this.specularEnvironmentMaps = environmentMapURL\n          this.sphericalHarmonicCoefficients = coefficients\n        }\n      }\n    },\n    methods: {\n      onViewerReady({ Cesium, viewer }) {\n        this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(105, 38, 10000))\n        _viewer = viewer\n        window.viewer = viewer\n      },\n      onClicked(e) {\n        console.log(e)\n      },\n      unload() {\n        this.$refs.primitive.unload()\n      },\n      load() {\n        this.$refs.primitive.load()\n      },\n      reload() {\n        this.$refs.primitive.reload()\n      },\n      onTexturesReadyEvent(model) {\n        console.log(model)\n      },\n      onReadyEvent(model) {\n        _viewer.scene.camera.flyToBoundingSphere(model.boundingSphere)\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>url</td><td>string</td><td></td><td><code>required</code> The url to the .gltf file.</td><td></td></tr><tr><td>basePath</td><td>string</td><td></td><td><code>optional</code> The base path that paths in the glTF JSON are relative to.</td><td></td></tr><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Determines if the model primitive will be shown.</td><td></td></tr><tr><td>modelMatrix</td><td>Cesium.Matrix4</td><td></td><td><code>optional</code> The 4x4 transformation matrix that transforms the model from model to world coordinates.</td><td></td></tr><tr><td>scale</td><td>number</td><td><code>1.0</code></td><td><code>optional</code> A uniform scale applied to this model.</td><td></td></tr><tr><td>minimumPixelSize</td><td>number</td><td><code>0.0</code></td><td><code>optional</code> The approximate minimum pixel size of the model regardless of zoom.</td><td></td></tr><tr><td>maximumScale</td><td>number</td><td></td><td><code>optional</code> The maximum scale for the model.</td><td></td></tr><tr><td>id</td><td>*</td><td></td><td><code>optional</code> A user-defined object to return when the model is picked with Scene#pick.</td><td></td></tr><tr><td>allowPicking</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> When true, each glTF mesh and primitive is pickable with Scene#pick.</td><td></td></tr><tr><td>incrementallyLoadTextures</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Determine if textures may continue to stream in after the model is loaded.</td><td></td></tr><tr><td>asynchronous</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Determines if model WebGL resource creation will be spread out over several frames or block until completion once all glTF files are loaded.</td><td></td></tr><tr><td>clampAnimations</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Determines if the model&#39;s animations should hold a pose over frames where no keyframes are specified.</td><td></td></tr><tr><td>shadows</td><td>number</td><td><code>1</code></td><td><code>optional</code> Determines whether the model casts or receives shadows from each light source. <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>debugShowBoundingVolume</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> For debugging only. Draws the bounding sphere for each DrawCommand in the model.</td><td></td></tr><tr><td>debugWireframe</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> For debugging only. Draws the model in wireframe.</td><td></td></tr><tr><td>heightReference</td><td>number</td><td><code>0</code></td><td><code>optional</code> Determines how the model is drawn relative to terrain. <strong>NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2</strong></td><td></td></tr><tr><td>scene</td><td>Cesium.Scene</td><td><code>false</code></td><td><code>optional</code> Must be passed in for models that use the height reference property.</td><td></td></tr><tr><td>distanceDisplayCondition</td><td>VcDistanceDisplayCondition|Array</td><td></td><td><code>optional</code> The condition specifying at what distance from the camera that this model will be displayed.</td><td></td></tr><tr><td>color</td><td>VcColor|string|Array</td><td><code>&#39;white&#39;</code></td><td><code>optional</code> A color that blends with the model&#39;s rendered color.</td><td></td></tr><tr><td>colorBlendMode</td><td>number</td><td><code>0</code></td><td><code>optional</code> Defines how the color blends with the model. <strong>HIGHLIGHT: 0, REPLACE: 1, MIX: 2</strong></td><td>0/1/2</td></tr><tr><td>colorBlendAmount</td><td>number</td><td><code>0.5</code></td><td><code>optional</code> Value used to determine the color strength when the colorBlendMode is MIX. A value of 0.0 results in the model&#39;s rendered color while a value of 1.0 results in a solid color, with any value in-between resulting in a mix of the two.</td><td></td></tr><tr><td>silhouetteColor</td><td>VcColor|string|Array</td><td><code>&#39;red&#39;</code></td><td><code>optional</code> The silhouette color. If more than 256 models have silhouettes enabled, there is a small chance that overlapping models will have minor artifacts.</td><td></td></tr><tr><td>silhouetteSize</td><td>number</td><td><code>0.0</code></td><td><code>optional</code> The size of the silhouette in pixels.</td><td></td></tr><tr><td>clippingPlanes</td><td>Cesium.ClippingPlaneCollection | VcCallbackPropertyFunction&lt;Cesium.ClippingPlaneCollection&gt;</td><td></td><td><code>optional</code> The ClippingPlaneCollection used to selectively disable rendering the model.</td><td></td></tr><tr><td>dequantizeInShader</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Determines if a Draco encoded model is dequantized on the GPU. This decreases total memory usage for encoded models.</td><td></td></tr><tr><td>imageBasedLightingFactor</td><td>VcCartesian2</td><td></td><td><code>optional</code> Scales diffuse and specular image-based lighting from the earth, sky, atmosphere and star skybox.</td><td></td></tr><tr><td>lightColor</td><td>VcColor</td><td></td><td><code>optional</code> The light color when shading the model. When undefined the scene&#39;s light color is used instead.</td><td></td></tr><tr><td>luminanceAtZenith</td><td>number</td><td><code>0.2</code></td><td><code>optional</code> The sun&#39;s luminance at the zenith in kilo candela per meter squared to use for this model&#39;s procedural environment map.</td><td></td></tr><tr><td>sphericalHarmonicCoefficients</td><td>VcCartesian3Array</td><td></td><td><code>optional</code> The third order spherical harmonic coefficients used for the diffuse color of image-based lighting.</td><td></td></tr><tr><td>specularEnvironmentMaps</td><td>string</td><td></td><td><code>optional</code> A URL to a KTX file that contains a cube map of the specular lighting and the convoluted specular mipmaps.</td><td></td></tr><tr><td>credit</td><td>Cesium.Credit|string</td><td></td><td><code>optional</code> A credit for the model, which is displayed on the canvas.</td><td></td></tr><tr><td>backFaceCulling</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Whether to cull back-facing geometry. When true, back face culling is determined by the material&#39;s doubleSided property; when false, back face culling is disabled. Back faces are not culled if Model#color is translucent or Model#silhouetteSize is greater than 0.0.</td><td></td></tr><tr><td>enableMouseEvent</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the mouse event takes effect.</td><td></td></tr></tbody></table>", 1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>readyPromise</td><td></td><td>Triggers when the primitive is ready to render.</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse is pressed on this primitive.</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse bounces up on this primitive.</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks on the primitive.</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks outside the primitive.</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>Triggers when the left mouse button double-clicks the primitive.</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves on this primitive.</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves to this primitive.</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves out of this primitive.</td></tr></tbody></table>", 1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Model");

function vc_primitive_modelvue_type_template_id_2e7141da_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_primitive_modelvue_type_template_id_2e7141da_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcprimitivemodel",
    tabindex: "-1",
    content: "VcPrimitiveModel",
    href: "#vcprimitivemodel",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_primitive_modelvue_type_template_id_2e7141da_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcprimitivemodel"
    })]),
    _: 1
  }), vc_primitive_modelvue_type_template_id_2e7141da_hoisted_3, vc_primitive_modelvue_type_template_id_2e7141da_hoisted_4, vc_primitive_modelvue_type_template_id_2e7141da_hoisted_5, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_primitive_modelvue_type_template_id_2e7141da_hoisted_6, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), vc_primitive_modelvue_type_template_id_2e7141da_hoisted_7, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_9]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
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
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_15, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/Model.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_16]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-model.md?vue&type=template&id=2e7141da

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/primitives/vc-primitive-model.md?vue&type=script&lang=ts

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

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Unload");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Reload");

      const _hoisted_5 = {
        class: "block"
      };

      const _hoisted_6 = /*#__PURE__*/_createElementVNode("span", {
        class: "demonstration"
      }, "Luminance at Zenith", -1);

      const _hoisted_7 = /*#__PURE__*/_createTextVNode("Use procedural environment lighting");

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
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            }, 8, ["onClick"])]),
            _: 1
          }), _createVNode(_component_el_row, null, {
            default: _withCtx(() => [_createVNode(_component_el_col, null, {
              default: _withCtx(() => [_createElementVNode("div", _hoisted_5, [_hoisted_6, _createVNode(_component_el_slider, {
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
                default: _withCtx(() => [_hoisted_7]),
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
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-model.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-model.md



vc_primitive_modelvue_type_script_lang_ts.render = vc_primitive_modelvue_type_template_id_2e7141da_render

/* harmony default export */ var vc_primitive_model = __webpack_exports__["default"] = (vc_primitive_modelvue_type_script_lang_ts);

/***/ })

}]);