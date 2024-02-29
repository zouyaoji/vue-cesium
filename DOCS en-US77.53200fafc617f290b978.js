(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/primitives/vc-primitive-tileset.md?vue&type=template&id=8e36841c

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};
const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading a 3D Tiles tileset, used for streaming massive heterogeneous 3D geospatial datasets. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.Cesium3DTileset"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance.")], -1);
const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcPrimitiveTileset component.", -1);
const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive-tileset"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add a 3DTiles model to the viewer.")])], -1);
const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-primitive-tileset\n      ref=\"primitive\"\n      url=\"https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json\"\n      @ready=\"onReady\"\n      @click=\"onClicked\"\n    >\n    </vc-primitive-tileset>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    methods: {\n      onReady({ cesiumObject: tileset, viewer }) {\n        const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)\n        const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)\n        const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0)\n        const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())\n        tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)\n        viewer.zoomTo(tileset)\n      },\n      onClicked(e) {\n        console.log(e)\n      },\n      unload() {\n        this.$refs.primitive.unload()\n      },\n      load() {\n        this.$refs.primitive.load()\n      },\n      reload() {\n        this.$refs.primitive.reload()\n      }\n    }\n  }\n</script>\n")], -1);
const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th><th>Accepted Values</th></tr></thead><tbody><tr><td>url</td><td>string</td><td></td><td><code>optional</code> The url to a tileset JSON file.</td><td></td></tr><tr><td>assetId</td><td>number</td><td></td><td><code>optional</code> The assetId to a tileset from a Cesium ion asset ID.</td><td></td></tr><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Determines if the tileset will be shown.</td><td></td></tr><tr><td>modelMatrix</td><td>Cesium.Matrix4</td><td><code>Matrix4.IDENTITY</code></td><td><code>optional</code> A 4x4 transformation matrix that transforms the tileset&#39;s root tile.</td><td></td></tr><tr><td>shadows</td><td>number</td><td><code>1</code></td><td><code>optional</code> Determines whether the tileset casts or receives shadows from light sources. <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>modelUpAxis</td><td>Cesium.Axis| number</td><td>``</td><td><code>optional</code> Which axis is considered up when loading models for tile contents.</td><td></td></tr><tr><td>maximumScreenSpaceError</td><td>number</td><td><code>16</code></td><td><code>optional</code> The maximum screen space error used to drive level of detail refinement.</td><td></td></tr><tr><td>maximumMemoryUsage</td><td>number</td><td><code>512</code></td><td><code>optional</code> The maximum amount of memory in MB that can be used by the tileset.</td><td></td></tr><tr><td>cullWithChildrenBounds</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Optimization option. Whether to cull tiles using the union of their children bounding volumes.</td><td></td></tr><tr><td>cullRequestsWhileMoving</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Optimization option. Don&#39;t request tiles that will likely be unused when they come back because of the camera&#39;s movement. This optimization only applies to stationary tilesets.</td><td></td></tr><tr><td>cacheBytes</td><td>number</td><td><code>536870912</code></td><td><code>optional</code> tileset The size (in bytes) to which the tile cache will be trimmed, if the cache contains tiles not needed for the current view.</td><td></td></tr><tr><td>maximumCacheOverflowBytes</td><td>number</td><td><code>536870912</code></td><td><code>optional</code> The maximum additional memory (in bytes) to allow for cache headroom, if more than Cesium3DTileset#cacheBytes are needed for the current view.</td><td></td></tr><tr><td>cullRequestsWhileMovingMultiplier</td><td>number</td><td><code>60.0</code></td><td><code>optional</code> Optimization option. Multiplier used in culling requests while moving. Larger is more aggressive culling, smaller less aggressive culling.</td><td></td></tr><tr><td>preloadWhenHidden</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> Preload tiles when tileset.show is false. Loads tiles as if the tileset is visible but does not render them.</td><td></td></tr><tr><td>preloadFlightDestinations</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Optimization option. Preload tiles at the camera&#39;s flight destination while the camera is in flight.</td><td></td></tr><tr><td>preferLeaves</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> Optimization option. Prefer loading of leaves first.</td><td></td></tr><tr><td>dynamicScreenSpaceError</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> Optimization option. Reduce the screen space error for tiles that are further away from the camera.</td><td></td></tr><tr><td>dynamicScreenSpaceErrorDensity</td><td>number</td><td><code>0.00278</code></td><td><code>optional</code> Density used to adjust the dynamic screen space error, similar to fog density.</td><td></td></tr><tr><td>dynamicScreenSpaceErrorFactor</td><td>number</td><td><code>4.0</code></td><td><code>optional</code> A factor used to increase the computed dynamic screen space error.</td><td></td></tr><tr><td>dynamicScreenSpaceErrorHeightFalloff</td><td>number</td><td><code>0.25</code></td><td><code>optional</code> A ratio of the tileset&#39;s height at which the density starts to falloff.</td><td></td></tr><tr><td>progressiveResolutionHeightFraction</td><td>number</td><td><code>0.3</code></td><td><code>optional</code> Optimization option. If between (0.0, 0.5], tiles at or above the screen space error for the reduced screen resolution of progressiveResolutionHeightFraction*screenHeight will be prioritized first. This can help get a quick layer of tiles down while full resolution tiles continue to load.</td><td></td></tr><tr><td>foveatedScreenSpaceError</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Optimization option. Prioritize loading tiles in the center of the screen by temporarily raising the screen space error for tiles around the edge of the screen. Screen space error returns to normal once all the tiles in the center of the screen as determined by the Cesium3DTileset#foveatedConeSize are loaded.</td><td></td></tr><tr><td>foveatedConeSize</td><td>number</td><td><code>0.1</code></td><td><code>optional</code> Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control the cone size that determines which tiles are deferred. Tiles that are inside this cone are loaded immediately. Tiles outside the cone are potentially deferred based on how far outside the cone they are and their screen space error. This is controlled by Cesium3DTileset#foveatedInterpolationCallback and Cesium3DTileset#foveatedMinimumScreenSpaceErrorRelaxation. Setting this to 0.0 means the cone will be the line formed by the camera position and its view direction. Setting this to 1.0 means the cone encompasses the entire field of view of the camera, disabling the effect.</td><td></td></tr><tr><td>foveatedMinimumScreenSpaceErrorRelaxation</td><td>number</td><td><code>0.0</code></td><td><code>optional</code> Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control the starting screen space error relaxation for tiles outside the foveated cone. The screen space error will be raised starting with tileset value up to Cesium3DTileset#maximumScreenSpaceError based on the provided Cesium3DTileset#foveatedInterpolationCallback.</td><td></td></tr><tr><td>foveatedInterpolationCallback</td><td>Function</td><td></td><td><code>optional</code> Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control how much to raise the screen space error for tiles outside the foveated cone, interpolating between Cesium3DTileset#foveatedMinimumScreenSpaceErrorRelaxation and Cesium3DTileset#maximumScreenSpaceError</td><td></td></tr><tr><td>foveatedTimeDelay</td><td>number</td><td><code>0.2</code></td><td><code>optional</code> Optimization option. Used when Cesium3DTileset#foveatedScreenSpaceError is true to control how long in seconds to wait after the camera stops moving before deferred tiles start loading in. This time delay prevents requesting tiles around the edges of the screen when the camera is moving. Setting this to 0.0 will immediately request all tiles in any given view.</td><td></td></tr><tr><td>skipLevelOfDetail</td><td>boolean</td><td>true</td><td><code>optional</code> Optimization option. Determines if level of detail skipping should be applied during the traversal.</td><td></td></tr><tr><td>baseScreenSpaceError</td><td>number</td><td><code>1024</code></td><td><code>optional</code> When skipLevelOfDetail is true, the screen space error that must be reached before skipping levels of detail.</td><td></td></tr><tr><td>skipScreenSpaceErrorFactor</td><td>number</td><td><code>16</code></td><td><code>optional</code> When skipLevelOfDetail is true, a multiplier defining the minimum screen space error to skip. Used in conjunction with skipLevels to determine which tiles to load.</td><td></td></tr><tr><td>skipLevels</td><td>number</td><td>1</td><td><code>optional</code> When skipLevelOfDetail is true, a constant defining the minimum number of levels to skip when loading tiles. When it is 0, no levels are skipped. Used in conjunction with skipScreenSpaceErrorFactor to determine which tiles to load.</td><td></td></tr><tr><td>immediatelyLoadDesiredLevelOfDetail</td><td>boolean</td><td>false</td><td><code>optional</code> When skipLevelOfDetail is true, only tiles that meet the maximum screen space error will ever be downloaded. Skipping factors are ignored and just the desired tiles are loaded.</td><td></td></tr><tr><td>loadSiblings</td><td>boolean</td><td>false</td><td><code>optional</code> When skipLevelOfDetail is true, determines whether siblings of visible tiles are always downloaded during traversal.</td><td></td></tr><tr><td>clippingPlanes</td><td>Cesium.ClippingPlaneCollection | VcCallbackPropertyFunction&lt;Cesium.ClippingPlaneCollection&gt;</td><td></td><td><code>optional</code> The ClippingPlaneCollection used to selectively disable rendering the tileset.</td><td></td></tr><tr><td>classificationType</td><td>number</td><td></td><td><code>optional</code> Determines whether terrain, 3D Tiles or both will be classified by this tileset. See Cesium3DTileset#classificationType for details about restrictions and limitations. <strong>TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2</strong></td><td>0/1/2</td></tr><tr><td>ellipsoid</td><td>Cesium.Ellipsoid</td><td>Ellipsoid.WGS84</td><td><code>optional</code> The ellipsoid determining the size and shape of the globe.</td><td></td></tr><tr><td>pointCloudShading</td><td>Cesium.PointCloudShading</td><td></td><td><code>optional</code> Options for constructing a PointCloudShading object to control point attenuation based on geometric error and lighting.</td><td></td></tr><tr><td>imageBasedLightingFactor</td><td>VcCartesian2|Array</td><td><code>[1.0, 1.0]</code></td><td><code>optional</code> Scales the diffuse and specular image-based lighting from the earth, sky, atmosphere and star skybox.</td><td></td></tr><tr><td>lightColor</td><td>VcColor|Array</td><td></td><td><code>optional</code> The light color when shading models. When undefined the scene&#39;s light color is used instead.</td><td></td></tr><tr><td>luminanceAtZenith</td><td>number</td><td><code>0.2</code></td><td><code>optional</code> The sun&#39;s luminance at the zenith in kilo candela per meter squared to use for this model&#39;s procedural environment map.</td><td></td></tr><tr><td>sphericalHarmonicCoefficients</td><td>Array</td><td></td><td><code>optional</code> The third order spherical harmonic coefficients used for the diffuse color of image-based lighting.</td><td></td></tr><tr><td>specularEnvironmentMaps</td><td>string</td><td></td><td><code>optional</code> A URL to a KTX file that contains a cube map of the specular lighting and the convoluted specular mipmaps.</td><td></td></tr><tr><td>imageBasedLighting</td><td>string</td><td></td><td><code>optional</code> The properties for managing image-based lighting for this tileset.</td><td></td></tr><tr><td>backFaceCulling</td><td>boolean</td><td><code>false</code></td><td><code>optional</code>Whether to cull back-facing geometry. When true, back face culling is determined by the glTF material&#39;s doubleSided property; when false, back face culling is disabled.</td><td></td></tr><tr><td>enableShowOutline</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Whether to enable outlines for models using the CESIUM_primitive_outline extension. This can be set to false to avoid the additional processing of geometry at load time. When false, the showOutlines and outlineColor options are ignored.</td><td></td></tr><tr><td>showOutline</td><td>boolean</td><td><code>true</code></td><td><code>optional</code>Whether to display the outline for models using the CESIUM_primitive_outline extension. When true, outlines are displayed. When false, outlines are not displayed.</td><td></td></tr><tr><td>vectorKeepDecodedPositions</td><td>boolean</td><td><code>false</code></td><td><code>optional</code>Whether vector tiles should keep decoded positions in memory. This is used with Cesium3DTileFeature.getPolylinePositions.</td><td></td></tr><tr><td>vectorClassificationOnly</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> Indicates that only the tileset&#39;s vector tiles should be used for classification.</td><td></td></tr><tr><td>debugHeatmapTilePropertyName</td><td>string</td><td></td><td><code>optional</code> The tile variable to colorize as a heatmap. All rendered tiles will be colorized relative to each other&#39;s specified variable value.</td><td></td></tr><tr><td>featureIdLabel</td><td>string | number</td><td></td><td><code>optional</code> Label of the feature ID set to use for picking and styling. For EXT_mesh_features, this is the feature ID&#39;s label property, or &quot;featureId_N&quot; (where N is the index in the featureIds array) when not specified. EXT_feature_metadata did not have a label field, so such feature ID sets are always labeled &quot;featureId_N&quot; where N is the index in the list of all feature Ids, where feature ID attributes are listed before feature ID textures. If featureIdLabel is an integer N, it is converted to the string &quot;featureId_N&quot; automatically. If both per-primitive and per-instance feature IDs are present, the instance feature IDs take priority.</td><td></td></tr><tr><td>instanceFeatureIdLabel</td><td>string | number</td><td></td><td><code>optional</code> Label of the instance feature ID set used for picking and styling. If instanceFeatureIdLabel is set to an integer N, it is converted to the string &quot;instanceFeatureId_N&quot; automatically. If both per-primitive and per-instance feature IDs are present, the instance feature IDs take priority.</td><td></td></tr><tr><td>splitDirection</td><td>number| Cesium.SplitDirection</td><td>``</td><td><code>optional</code>The SplitDirection split to apply to this tileset.</td><td></td></tr><tr><td>projectTo2D</td><td>boolean</td><td>false</td><td><code>optional</code>Whether to accurately project the tileset to 2D. If this is true, the tileset will be projected accurately to 2D, but it will use more memory to do so. If this is false, the tileset will use less memory and will still render in 2D / CV mode, but its projected positions may be inaccurate. This cannot be set after the tileset has loaded.</td><td></td></tr><tr><td>debugFreezeFrame</td><td>boolean</td><td>false</td><td><code>optional</code> For debugging only. Determines if only the tiles from last frame should be used for rendering.</td><td></td></tr><tr><td>debugColorizeTiles</td><td>boolean</td><td>false</td><td><code>optional</code> For debugging only. When true, assigns a random color to each tile.</td><td></td></tr><tr><td>debugWireframe</td><td>boolean</td><td>false</td><td><code>optional</code> For debugging only. When true, render&#39;s each tile&#39;s content as a wireframe.</td><td></td></tr><tr><td>debugShowBoundingVolume</td><td>boolean</td><td>false</td><td><code>optional</code> For debugging only. When true, renders the bounding volume for each tile.</td><td></td></tr><tr><td>debugShowContentBoundingVolume</td><td>boolean</td><td>false</td><td><code>optional</code> For debugging only. When true, renders the bounding volume for each tile&#39;s content.</td><td></td></tr><tr><td>debugShowViewerRequestVolume</td><td>boolean</td><td>false</td><td><code>optional</code> For debugging only. When true, renders the viewer request volume for each tile.</td><td></td></tr><tr><td>debugShowGeometricError</td><td>boolean</td><td>false</td><td><code>optional</code> For debugging only. When true, draws labels to indicate the geometric error of each tile.</td><td></td></tr><tr><td>debugShowRenderingStatistics</td><td>boolean</td><td>false</td><td><code>optional</code> For debugging only. When true, draws labels to indicate the number of commands, points, triangles and features for each tile.</td><td></td></tr><tr><td>debugShowMemoryUsage</td><td>boolean</td><td>false</td><td><code>optional</code> For debugging only. When true, draws labels to indicate the texture and geometry memory in megabytes used by each tile.</td><td></td></tr><tr><td>debugShowUrl</td><td>boolean</td><td>false</td><td><code>optional</code> For debugging only. When true, draws labels to indicate the url of each tile.</td><td></td></tr><tr><td>enableMouseEvent</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the mouse event takes effect.</td><td></td></tr></tbody></table>", 1);
const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>readyPromise</td><td></td><td>Triggers when the primitive is ready to render.cesium 1.107+ use ready event instead.</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse is pressed on this primitive.</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse bounces up on this primitive.</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks on the primitive.</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks outside the primitive.</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>Triggers when the left mouse button double-clicks the primitive.</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves on this primitive.</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves to this primitive.</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves out of this primitive.</td></tr></tbody></table>", 1);
function vc_primitive_tilesetvue_type_template_id_8e36841c_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");
  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");
  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");
  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");
  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcprimitivetileset",
    tabindex: "-1",
    content: "VcPrimitiveTileset",
    href: "#vcprimitivetileset",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcPrimitiveTileset "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcprimitivetileset"
    })]),
    _: 1
  }), _hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Basic usage "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_5]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_4]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Props "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Events "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Reference "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: "), Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/Cesium3DTileset.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Cesium3DTileset")]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-tileset.md?vue&type=template&id=8e36841c

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/primitives/vc-primitive-tileset.md?vue&type=script&lang=ts

/* harmony default export */ var vc_primitive_tilesetvue_type_script_lang_ts = ({
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
      function render(_ctx, _cache) {
        const _component_vc_primitive_tileset = _resolveComponent("vc-primitive-tileset");
        const _component_vc_viewer = _resolveComponent("vc-viewer");
        const _component_el_button = _resolveComponent("el-button");
        const _component_el_row = _resolveComponent("el-row");
        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, null, {
            default: _withCtx(() => [_createVNode(_component_vc_primitive_tileset, {
              ref: "primitive",
              url: "https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json",
              onReady: _ctx.onReady,
              onClick: _ctx.onClicked
            }, null, 8, ["onReady", "onClick"])]),
            _: 1
          }), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.unload
            }, {
              default: _withCtx(() => [_createTextVNode("Unload")]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.load
            }, {
              default: _withCtx(() => [_createTextVNode("Load")]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "danger",
              round: "",
              onClick: _ctx.reload
            }, {
              default: _withCtx(() => [_createTextVNode("Reload")]),
              _: 1
            }, 8, ["onClick"])]),
            _: 1
          })]),
          _: 1
        }, 512)]);
      }
      const democomponentExport = {
        methods: {
          onReady(_ref) {
            let {
              cesiumObject: tileset,
              viewer
            } = _ref;
            const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center);
            const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height);
            const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0);
            const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
            tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
            viewer.zoomTo(tileset);
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
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-tileset.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-tileset.md



vc_primitive_tilesetvue_type_script_lang_ts.render = vc_primitive_tilesetvue_type_template_id_8e36841c_render

/* harmony default export */ var vc_primitive_tileset = __webpack_exports__["default"] = (vc_primitive_tilesetvue_type_script_lang_ts);

/***/ })

}]);