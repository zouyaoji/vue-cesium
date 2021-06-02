(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/primitives/vc-primitive-tileset.md?vue&type=template&id=7d906408

var vc_primitive_tilesetvue_type_template_id_7d906408_hoisted_1 = {
  class: "content element-doc"
};

var vc_primitive_tilesetvue_type_template_id_7d906408_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h2", {
  id: "vcprimitivetileset"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vcprimitivetileset"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" VcPrimitiveTileset")], -1);

var vc_primitive_tilesetvue_type_template_id_7d906408_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Loading a 3D Tiles tileset, used for streaming massive heterogeneous 3D geospatial datasets. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "Cesium.Cesium3DTileset"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" instance.")], -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" Basic usage")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "Basic usage of VcPrimitiveTileset component.", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-primitive-tileset"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tag to add a 3DTiles model to the viewer.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-primitive-tileset\n      ref=\"primitive\"\n      url=\"./SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json\"\n      @readyPromise=\"onReadyPromise\"\n      @click=\"onClicked\"\n    >\n    </vc-primitive-tileset>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    methods: {\n      onReadyPromise(tileset, viewer) {\n        const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)\n        const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)\n        const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0)\n        const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())\n        tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)\n        viewer.zoomTo(tileset)\n      },\n      onClicked(e) {\n        console.log(e)\n      },\n      unload() {\n        this.$refs.primitive.unload()\n      },\n      load() {\n        this.$refs.primitive.load()\n      },\n      reload() {\n        this.$refs.primitive.reload()\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>url</td><td>String</td><td></td><td><code>required</code> The url to a tileset JSON file.</td><td></td></tr><tr><td>show</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Determines if the tileset will be shown.</td><td></td></tr><tr><td>modelMatrix</td><td>Object</td><td><code>Matrix4.IDENTITY</code></td><td><code>optional</code> A 4x4 transformation matrix that transforms the tileset&#39;s root tile.</td><td></td></tr><tr><td>shadows</td><td>Number</td><td><code>1</code></td><td><code>optional</code> Determines whether the tileset casts or receives shadows from light sources. <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>maximumScreenSpaceError</td><td>Number</td><td><code>16</code></td><td><code>optional</code> The maximum screen space error used to drive level of detail refinement.</td><td></td></tr><tr><td>maximumMemoryUsage</td><td>Number</td><td><code>512</code></td><td><code>optional</code> The maximum amount of memory in MB that can be used by the tileset.</td><td></td></tr><tr><td>cullWithChildrenBounds</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Optimization option. Whether to cull tiles using the union of their children bounding volumes.</td><td></td></tr><tr><td>cullRequestsWhileMoving</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Optimization option. Don&#39;t request tiles that will likely be unused when they come back because of the camera&#39;s movement. This optimization only applies to stationary tilesets.</td><td></td></tr><tr><td>cullRequestsWhileMovingMultiplier</td><td>Number</td><td><code>60.0</code></td><td><code>optional</code> Optimization option. Multiplier used in culling requests while moving. Larger is more aggressive culling, smaller less aggressive culling.</td><td></td></tr><tr><td>preloadWhenHidden</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Preload tiles when tileset.show is false. Loads tiles as if the tileset is visible but does not render them.</td><td></td></tr><tr><td>preloadFlightDestinations</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Optimization option. Preload tiles at the camera&#39;s flight destination while the camera is in flight.</td><td></td></tr><tr><td>preferLeaves</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Optimization option. Prefer loading of leaves first.</td><td></td></tr><tr><td>dynamicScreenSpaceError</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Optimization option. Reduce the screen space error for tiles that are further away from the camera.</td><td></td></tr><tr><td>dynamicScreenSpaceErrorDensity</td><td>Number</td><td><code>0.00278</code></td><td><code>optional</code> Density used to adjust the dynamic screen space error, similar to fog density.</td><td></td></tr><tr><td>dynamicScreenSpaceErrorFactor</td><td>Number</td><td><code>4.0</code></td><td><code>optional</code> A factor used to increase the computed dynamic screen space error.</td><td></td></tr><tr><td>dynamicScreenSpaceErrorHeightFalloff</td><td>Number</td><td><code>0.25</code></td><td><code>optional</code> A ratio of the tileset&#39;s height at which the density starts to falloff.</td><td></td></tr><tr><td>progressiveResolutionHeightFraction</td><td>Number</td><td><code>0.3</code></td><td><code>optional</code> Optimization option. If between (0.0, 0.5], tiles at or above the screen space error for the reduced screen resolution of progressiveResolutionHeightFraction*screenHeight will be prioritized first. This can help get a quick layer of tiles down while full resolution tiles continue to load.</td><td></td></tr><tr><td>foveatedScreenSpaceError</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Optimization option. Prioritize loading tiles in the center of the screen by temporarily raising the screen space error for tiles around the edge of the screen. Screen space error returns to normal once all the tiles in the center of the screen as determined by the Cesium3DTileset#foveatedConeSize are loaded.</td><td></td></tr><tr><td>foveatedConeSize</td><td>Number</td><td><code>0.1</code></td><td><code>optional</code> Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control the cone size that determines which tiles are deferred. Tiles that are inside this cone are loaded immediately. Tiles outside the cone are potentially deferred based on how far outside the cone they are and their screen space error. This is controlled by Cesium3DTileset#foveatedInterpolationCallback and Cesium3DTileset#foveatedMinimumScreenSpaceErrorRelaxation. Setting this to 0.0 means the cone will be the line formed by the camera position and its view direction. Setting this to 1.0 means the cone encompasses the entire field of view of the camera, disabling the effect.</td><td></td></tr><tr><td>foveatedMinimumScreenSpaceErrorRelaxation</td><td>Number</td><td><code>0.0</code></td><td><code>optional</code> Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control the starting screen space error relaxation for tiles outside the foveated cone. The screen space error will be raised starting with tileset value up to Cesium3DTileset#maximumScreenSpaceError based on the provided Cesium3DTileset#foveatedInterpolationCallback.</td><td></td></tr><tr><td>foveatedInterpolationCallback</td><td>Function</td><td></td><td><code>optional</code> Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control how much to raise the screen space error for tiles outside the foveated cone, interpolating between Cesium3DTileset#foveatedMinimumScreenSpaceErrorRelaxation and Cesium3DTileset#maximumScreenSpaceError</td><td></td></tr><tr><td>foveatedTimeDelay</td><td>Number</td><td><code>0.2</code></td><td><code>optional</code> Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control how long in seconds to wait after the camera stops moving before deferred tiles start loading in. This time delay prevents requesting tiles around the edges of the screen when the camera is moving. Setting this to 0.0 will immediately request all tiles in any given view.</td><td></td></tr><tr><td>skipLevelOfDetail</td><td>Boolean</td><td>true</td><td><code>optional</code> Optimization option. Determines if level of detail skipping should be applied during the traversal.</td><td></td></tr><tr><td>baseScreenSpaceError</td><td>Number</td><td><code>1024</code></td><td><code>optional</code> When skipLevelOfDetail is true, the screen space error that must be reached before skipping levels of detail.</td><td></td></tr><tr><td>skipScreenSpaceErrorFactor</td><td>Number</td><td><code>16</code></td><td><code>optional</code> When skipLevelOfDetail is true, a multiplier defining the minimum screen space error to skip. Used in conjunction with skipLevels to determine which tiles to load.</td><td></td></tr><tr><td>skipLevels</td><td>Number</td><td>1</td><td><code>optional</code> When skipLevelOfDetail is true, a constant defining the minimum number of levels to skip when loading tiles. When it is 0, no levels are skipped. Used in conjunction with skipScreenSpaceErrorFactor to determine which tiles to load.</td><td></td></tr><tr><td>immediatelyLoadDesiredLevelOfDetail</td><td>Boolean</td><td>false</td><td><code>optional</code> When skipLevelOfDetail is true, only tiles that meet the maximum screen space error will ever be downloaded. Skipping factors are ignored and just the desired tiles are loaded.</td><td></td></tr><tr><td>loadSiblings</td><td>Boolean</td><td>false</td><td><code>optional</code> When skipLevelOfDetail is true, determines whether siblings of visible tiles are always downloaded during traversal.</td><td></td></tr><tr><td>clippingPlanes</td><td>Object</td><td></td><td><code>optional</code> The ClippingPlaneCollection used to selectively disable rendering the tileset.</td><td></td></tr><tr><td>classificationType</td><td>Number</td><td></td><td><code>optional</code> Determines whether terrain, 3D Tiles or both will be classified by this tileset. See Cesium3DTileset#classificationType for details about restrictions and limitations. <strong>TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2</strong></td><td>0/1/2</td></tr><tr><td>ellipsoid</td><td>Object</td><td>Ellipsoid.WGS84</td><td><code>optional</code> The ellipsoid determining the size and shape of the globe.</td><td></td></tr><tr><td>pointCloudShading</td><td>Object</td><td></td><td><code>optional</code> Options for constructing a PointCloudShading object to control point attenuation based on geometric error and lighting.</td><td></td></tr><tr><td>imageBasedLightingFactor</td><td>Object|Array</td><td><code>[1.0, 1.0]</code></td><td><code>optional</code> Scales the diffuse and specular image-based lighting from the earth, sky, atmosphere and star skybox.</td><td></td></tr><tr><td>lightColor</td><td>Object|Array</td><td></td><td><code>optional</code> The light color when shading models. When undefined the scene&#39;s light color is used instead.</td><td></td></tr><tr><td>luminanceAtZenith</td><td>Number</td><td><code>0.2</code></td><td><code>optional</code> The sun&#39;s luminance at the zenith in kilo candela per meter squared to use for this model&#39;s procedural environment map.</td><td></td></tr><tr><td>sphericalHarmonicCoefficients</td><td>Array</td><td></td><td><code>optional</code> The third order spherical harmonic coefficients used for the diffuse color of image-based lighting.</td><td></td></tr><tr><td>specularEnvironmentMaps</td><td>String</td><td></td><td><code>optional</code> A URL to a KTX file that contains a cube map of the specular lighting and the convoluted specular mipmaps.</td><td></td></tr><tr><td>backFaceCulling</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code>Whether to cull back-facing geometry. When true, back face culling is determined by the glTF material&#39;s doubleSided property; when false, back face culling is disabled.</td><td></td></tr><tr><td>vectorClassificationOnly</td><td>Boolean</td><td><code>false</code></td><td><code>optional</code> Indicates that only the tileset&#39;s vector tiles should be used for classification.</td><td></td></tr><tr><td>debugHeatmapTilePropertyName</td><td>String</td><td></td><td><code>optional</code> The tile variable to colorize as a heatmap. All rendered tiles will be colorized relative to each other&#39;s specified variable value.</td><td></td></tr><tr><td>debugFreezeFrame</td><td>Boolean</td><td>false</td><td><code>optional</code> For debugging only. Determines if only the tiles from last frame should be used for rendering.</td><td></td></tr><tr><td>debugColorizeTiles</td><td>Boolean</td><td>false</td><td><code>optional</code> For debugging only. When true, assigns a random color to each tile.</td><td></td></tr><tr><td>debugWireframe</td><td>Boolean</td><td>false</td><td><code>optional</code> For debugging only. When true, render&#39;s each tile&#39;s content as a wireframe.</td><td></td></tr><tr><td>debugShowBoundingVolume</td><td>Boolean</td><td>false</td><td><code>optional</code> For debugging only. When true, renders the bounding volume for each tile.</td><td></td></tr><tr><td>debugShowContentBoundingVolume</td><td>Boolean</td><td>false</td><td><code>optional</code> For debugging only. When true, renders the bounding volume for each tile&#39;s content.</td><td></td></tr><tr><td>debugShowViewerRequestVolume</td><td>Boolean</td><td>false</td><td><code>optional</code> For debugging only. When true, renders the viewer request volume for each tile.</td><td></td></tr><tr><td>debugShowGeometricError</td><td>Boolean</td><td>false</td><td><code>optional</code> For debugging only. When true, draws labels to indicate the geometric error of each tile.</td><td></td></tr><tr><td>debugShowRenderingStatistics</td><td>Boolean</td><td>false</td><td><code>optional</code> For debugging only. When true, draws labels to indicate the number of commands, points, triangles and features for each tile.</td><td></td></tr><tr><td>debugShowMemoryUsage</td><td>Boolean</td><td>false</td><td><code>optional</code> For debugging only. When true, draws labels to indicate the texture and geometry memory in megabytes used by each tile.</td><td></td></tr><tr><td>debugShowUrl</td><td>Boolean</td><td>false</td><td><code>optional</code> For debugging only. When true, draws labels to indicate the url of each tile.</td><td></td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the mouse event takes effect.</td><td></td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>readyPromise</td><td></td><td>Triggers when the primitive is ready to render.</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse is pressed on this primitive.</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse bounces up on this primitive.</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse clicks on the primitive.</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse clicks outside the primitive.</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the left mouse button double-clicks the primitive.</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves on this primitive.</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves to this primitive.</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves out of this primitive.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/Cesium3DTileset.html\">Cesium3DTileset</a></strong></li></ul>", 6);

function vc_primitive_tilesetvue_type_template_id_7d906408_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_primitive_tilesetvue_type_template_id_7d906408_hoisted_1, [vc_primitive_tilesetvue_type_template_id_7d906408_hoisted_2, vc_primitive_tilesetvue_type_template_id_7d906408_hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-tileset.md?vue&type=template&id=7d906408

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/primitives/vc-primitive-tileset.md?vue&type=script&lang=ts


/* harmony default export */ var vc_primitive_tilesetvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        var _component_vc_primitive_tileset = _resolveComponent("vc-primitive-tileset");

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
                return [_createVNode(_component_vc_primitive_tileset, {
                  ref: "primitive",
                  url: "./SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json",
                  onReadyPromise: _ctx.onReadyPromise,
                  onClick: _ctx.onClicked
                }, null, 8, ["onReadyPromise", "onClick"])];
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
        methods: {
          onReadyPromise: function onReadyPromise(tileset, viewer) {
            var cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center);
            var surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height);
            var offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0);
            var translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
            tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
            viewer.zoomTo(tileset);
          },
          onClicked: function onClicked(e) {
            console.log(e);
          },
          unload: function unload() {
            this.$refs.primitive.unload();
          },
          load: function load() {
            this.$refs.primitive.load();
          },
          reload: function reload() {
            this.$refs.primitive.reload();
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-tileset.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-tileset.md



vc_primitive_tilesetvue_type_script_lang_ts.render = vc_primitive_tilesetvue_type_template_id_7d906408_render

/* harmony default export */ var vc_primitive_tileset = __webpack_exports__["default"] = (vc_primitive_tilesetvue_type_script_lang_ts);

/***/ })

}]);