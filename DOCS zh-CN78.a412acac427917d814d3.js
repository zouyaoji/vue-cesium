(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[183],{

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/registry.npmjs.org+vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmjs.org+babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/registry.npmjs.org+vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/registry.npmjs.org+vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-primitive-tileset.md?vue&type=template&id=3376d91c

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};
const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载 3DTiles 图元，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.Cesium3DTileset"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例。")], -1);
const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "3DTiles 模型图元组件的基础用法。", -1);
const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive-tileset"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加 3DTiles 模型。")])], -1);
const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer>\n    <vc-primitive-tileset\n      ref=\"primitive\"\n      url=\"https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json\"\n      @ready=\"onReady\"\n      @click=\"onClicked\"\n      @all-tiles-loaded=\"allTilesLoaded\"\n    >\n    </vc-primitive-tileset>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    methods: {\n      onReady({ cesiumObject: tileset, viewer }) {\n        const cartographic = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center)\n        const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height)\n        const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0)\n        const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())\n        tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)\n        viewer.zoomTo(tileset)\n      },\n      onClicked(e) {\n        console.log(e)\n      },\n      allTilesLoaded(e) {\n        console.log('allTilesLoaded')\n      },\n      unload() {\n        this.$refs.primitive.unload()\n      },\n      load() {\n        this.$refs.primitive.load()\n      },\n      reload() {\n        this.$refs.primitive.reload()\n      }\n    }\n  }\n</script>\n")], -1);
const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th><th>可选值</th></tr></thead><tbody><tr><td>url</td><td>string</td><td></td><td><code>optional</code> 指定 tileset JSON 文件地址。</td><td></td></tr><tr><td>assetId</td><td>number</td><td></td><td><code>optional</code> 指定 Cesium ion 上模型的 assetId 。</td><td></td></tr><tr><td>show</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 是否显示 tileset 模型。</td><td></td></tr><tr><td>modelMatrix</td><td>Cesium.Matrix4</td><td><code>Matrix4.IDENTITY</code></td><td><code>optional</code> 一个 4x4 变换矩阵，用于转换 tileset 的根块。</td><td></td></tr><tr><td>modelUpAxis</td><td>Cesium.Axis| number</td><td>``</td><td><code>optional</code> 加载图块内容的模型时会考虑哪个轴。</td><td></td></tr><tr><td>modelForwardAxis</td><td>Cesium.Axis| number</td><td>``</td><td><code>optional</code> 加载图块内容的模型时，哪个轴被视为向前。</td><td></td></tr><tr><td>shadows</td><td>number</td><td><code>1</code></td><td><code>optional</code> 确定 tileset 是否投射或接收来自每个光源的阴影。 <strong>DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3</strong></td><td>0/1/2/3</td></tr><tr><td>maximumScreenSpaceError</td><td>number</td><td><code>16</code></td><td><code>optional</code> 用于驱动细节细化级别的最大屏幕空间错误。</td><td></td></tr><tr><td>maximumMemoryUsage</td><td>number</td><td><code>512</code></td><td><code>optional</code> tileset 可以使用的最大内存量（MB）。</td><td></td></tr><tr><td>cacheBytes</td><td>number</td><td><code>536870912</code></td><td><code>optional</code> tileset 如果缓存包含当前视图不需要的切片，则切片缓存将被修剪到的大小（以字节为单位）。</td><td></td></tr><tr><td>maximumCacheOverflowBytes</td><td>number</td><td><code>536870912</code></td><td><code>optional</code> 如果当前视图需要超过 Cesium3DTileset#cacheBytes，则允许缓存空间的最大附加内存（以字节为单位）。</td><td></td></tr><tr><td>cullWithChildrenBounds</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 优化选项。 是否使用子绑定卷的并集来剔除切片。</td><td></td></tr><tr><td>cullRequestsWhileMoving</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 优化选项。 请勿请求由于相机的移动而可能回来的未使用的图块。 此优化仅适用于固定图块集。</td><td></td></tr><tr><td>cullRequestsWhileMovingMultiplier</td><td>number</td><td><code>60.0</code></td><td><code>optional</code> 优化选项。 移动时用于剔除请求的乘数。 较大的代表更积极的剔除，较小的代表较不积极的剔除。</td><td></td></tr><tr><td>preloadWhenHidden</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> tileet.show 为 false 时预加载图块。 加载图块时，好像图块集可见但不渲染它们。</td><td></td></tr><tr><td>preloadFlightDestinations</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 优化选项。 在相机飞行过程中是否预加载瓦片。</td><td></td></tr><tr><td>preferLeaves</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> 优化选项。 是否优先加载第一层级。</td><td></td></tr><tr><td>dynamicScreenSpaceError</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> 优化选项。 减少远离相机的瓷砖的屏幕空间错误。</td><td></td></tr><tr><td>dynamicScreenSpaceErrorDensity</td><td>number</td><td><code>0.00278</code></td><td><code>optional</code> 用于调整动态屏幕空间误差密度，类似于雾密度。</td><td></td></tr><tr><td>dynamicScreenSpaceErrorFactor</td><td>number</td><td><code>4.0</code></td><td><code>optional</code> 用于增加计算的动态屏幕空间错误的因子。</td><td></td></tr><tr><td>dynamicScreenSpaceErrorHeightFalloff</td><td>number</td><td><code>0.25</code></td><td><code>optional</code> tileset 高度开始下降的比率。</td><td></td></tr><tr><td>progressiveResolutionHeightFraction</td><td>number</td><td><code>0.3</code></td><td><code>optional</code> 优化选项。 如果介于（0.0，0.5]之间，则将优先考虑屏幕空间错误或高于屏幕空间错误的图块，以降低 ProgressiveResolutionHeightFraction * screenHeight 的屏幕分辨率，这有助于在继续加载全分辨率图块的同时快速缩小图块层。</td><td></td></tr><tr><td>foveatedScreenSpaceError</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 优化选项。 通过暂时提高屏幕边缘周围的图块的屏幕空间错误，可以优先在屏幕中央加载图块。 加载由 Cesium3DTileset#foveatedConeSize 确定的屏幕中心的所有图块后，屏幕空间错误将恢复正常。</td><td></td></tr><tr><td>foveatedConeSize</td><td>number</td><td><code>0.1</code></td><td><code>optional</code> 优化选项。 当 Cesium3DTileset#foveatedScreenSpaceError 为 true 时使用，以控制确定延迟哪些图块的圆锥体大小。 此圆锥体内部的瓷砖会立即加载。 圆锥体外部的图块可能会根据其在圆锥体外部的距离和其屏幕空间误差而推迟。 这由 Cesium3DTileset#foveatedInterpolationCallback 和 Cesium3DTileset#foveatedMinimumScreenSpaceErrorRelaxation 控制。 将该值设置为 0.0 表示圆锥将是由相机位置及其视图方向形成的线。 将此值设置为 1.0 意味着圆锥体将覆盖相机的整个视场，从而禁用效果。</td><td></td></tr><tr><td>foveatedMinimumScreenSpaceErrorRelaxation</td><td>number</td><td><code>0.0</code></td><td><code>optional</code> 优化选项。 当 Cesium3DTileset#foveatedScreenSpaceError 为 true 时使用，以控制凹入圆锥体外部的图块的起始屏幕空间误差松弛。 屏幕空间错误将根据提供的 Cesium3DTileset#foveatedInterpolationCallback，从图块值开始直至 Cesium3DTileset＃maximumScreenSpaceError 引发。</td><td></td></tr><tr><td>foveatedInterpolationCallback</td><td>Function</td><td></td><td><code>optional</code> 优化选项。 当 Cesium3DTileset#foveatedScreenSpaceError 为 true 时使用，以控制在凹入圆锥体外部的图块引发屏幕空间误差的程度，并在 Cesium3DTileset#foveatedMinimumScreenSpaceErrorRelaxation 和 Cesium3DTileset#maximumScreenSpaceError 之间进行插值</td><td></td></tr><tr><td>foveatedTimeDelay</td><td>number</td><td><code>0.2</code></td><td><code>optional</code> 优化选项。 当 Cesium3DTileset#foveatedScreenSpaceError 为 true 时使用，用于控制相机停止移动之后要等待多长时间（秒）才开始加载延迟的图块。此时间延迟可防止在相机移动时在屏幕边缘周围请求图块。 将此设置为 0.0 将立即请求任何给定视图中的所有图块。</td><td></td></tr><tr><td>skipLevelOfDetail</td><td>boolean</td><td>true</td><td><code>optional</code> 优化选项。 确定在遍历期间是否应该应用详细信息跳过级别。</td><td></td></tr><tr><td>baseScreenSpaceError</td><td>number</td><td><code>1024</code></td><td><code>optional</code> 当 skipLevelOfDetail 为 true 时，在跳过详细级别之前必须达到的屏幕空间错误。</td><td></td></tr><tr><td>skipScreenSpaceErrorFactor</td><td>number</td><td><code>16</code></td><td><code>optional</code> 当 skipLevelOfDetail 为 true 时，定义要跳过的最小屏幕空间错误的乘数。 与 skipLevels 结合使用以确定要加载的切片。</td><td></td></tr><tr><td>skipLevels</td><td>number</td><td>1</td><td><code>optional</code>当 skipLevelOfDetail 为 true 时，一个常量定义加载切片时要跳过的最小级别数。 当它为 0 时，不会跳过任何级别。与 skipScreenSpaceErrorFactor 结合使用以确定要加载的切片。</td><td></td></tr><tr><td>immediatelyLoadDesiredLevelOfDetail</td><td>boolean</td><td>false</td><td><code>optional</code> 当 skipLevelOfDetail 为 true 时，将只下载满足最大屏幕空间错误的切片。跳过因子将被忽略，并且只加载所需的切片。</td><td></td></tr><tr><td>loadSiblings</td><td>boolean</td><td>false</td><td><code>optional</code> 当 skipLevelOfDetail 为 true 时，确定在遍历期间是否始终下载可见切片的兄弟节点。</td><td></td></tr><tr><td>clippingPlanes</td><td>Cesium.ClippingPlaneCollection | VcCallbackPropertyFunction&lt;Cesium.ClippingPlaneCollection&gt;</td><td></td><td><code>optional</code> ClippingPlaneCollection 用于有选择地禁用渲染 tileset。</td><td></td></tr><tr><td>classificationType</td><td>number</td><td></td><td><code>optional</code> 确定此 tileset 是否会对 terrain，3D Tiles 或两者进行分类。 有关限制和限制的详细信息，请参阅 Cesium3DTileset＃classificationType。<strong>TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2</strong></td><td>0/1/2</td></tr><tr><td>ellipsoid</td><td>Cesium.Ellipsoid</td><td></td><td><code>optional</code> 决定地球的大小和形状参考椭球体。</td><td></td></tr><tr><td>pointCloudShading</td><td>Cesium.PointCloudShading</td><td></td><td><code>optional</code> 用于构造 PointCloudShading 对象以基于几何误差和光照控制点衰减的选项。</td><td></td></tr><tr><td>imageBasedLightingFactor</td><td>VcCartesian2|Array</td><td><code>[1.0, 1.0]</code></td><td><code>optional</code> 地球、天空、大气层的光照缩放因子。</td><td></td></tr><tr><td>lightColor</td><td>VcColor|Array</td><td></td><td><code>optional</code> 模型阴影的颜色和强度。</td><td></td></tr><tr><td>luminanceAtZenith</td><td>number</td><td><code>0.2</code></td><td><code>optional</code> 太阳在天顶的亮度，以每平方米千坎德拉为单位，用于该模型的过程环境图。</td><td></td></tr><tr><td>sphericalHarmonicCoefficients</td><td>Array</td><td></td><td><code>optional</code> 用于基于图像的照明的漫反射颜色的三阶球面谐波系数。</td><td></td></tr><tr><td>specularEnvironmentMaps</td><td>VcImageBasedLighting</td><td></td><td><code>optional</code> KTX 文件的 URL，其中包含镜面照明的立方体贴图和卷积的镜面 mipmap。</td><td></td></tr><tr><td>imageBasedLighting</td><td>string</td><td></td><td><code>optional</code> 用于管理此图块集基于图像的照明的属性。</td><td></td></tr><tr><td>backFaceCulling</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> 是否剔除背面几何。 如果为 true，则背面剔除取决于 glTF 材料的 doubleSided 属性； 如果为假，则禁用背面剔除。</td><td></td></tr><tr><td>enableShowOutline</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 是否使用CESIUM_primitive_outline扩展启用模型的轮廓。 可以将其设置为 false 以避免在加载时对几何体进行额外的处理。 如果为 false，则忽略 showOutlines 和outlineColor 选项。</td><td></td></tr><tr><td>showOutline</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 是否使用 cesium_primity_outline 扩展显示模型的轮廓。</td><td></td></tr><tr><td>vectorKeepDecodedPositions</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> 是否应在内存中保持解码位置。这与 Cesium3DTileFeature.getPolylinePositions 一起使用。</td><td></td></tr><tr><td>vectorClassificationOnly</td><td>boolean</td><td><code>false</code></td><td><code>optional</code> 是否仅应使用图块集的矢量图块进行分类。</td><td></td></tr><tr><td>featureIdLabel</td><td>string | number</td><td></td><td><code>optional</code> 用于拾取和设计样式的要素 ID 集的标签。 对于 EXT_mesh_features，这是要素 ID 的标签属性，如果未指定，则为“featureId_N”（其中 N 是 featureIds 数组中的索引）。 EXT_feature_metadata 没有标签字段，因此此类要素 ID 集始终标记为“featureId_N”，其中 N 是所有要素 Id 列表中的索引，其中要素 ID 属性列在要素 ID 纹理之前。 如果featureIdLabel是整数N，则自动转换为字符串“featureId_N”。 如果每个基元和每个实例的功能 ID 均存在，则实例功能 ID 优先。</td><td></td></tr><tr><td>instanceFeatureIdLabel</td><td>string | number</td><td></td><td><code>optional</code> 用于拾取和样式化的实例功能 ID 集的标签。 如果instanceFeatureIdLabel设置为整数N，则会自动转换为字符串“instanceFeatureId_N”。 如果每个基元和每个实例的功能 ID 均存在，则实例功能 ID 优先。</td><td></td></tr><tr><td>splitDirection</td><td>number| Cesium.SplitDirection</td><td>``</td><td><code>optional</code> 要应用于此图块集的 SplitDirection 分割。</td><td></td></tr><tr><td>projectTo2D</td><td>boolean</td><td>false</td><td><code>optional</code> 是否将图块集精确投影为 2D。 如果这是真的，则图块集将准确投影为 2D，但会使用更多内存。 如果这是 false，则图块集将使用较少的内存，并且仍将以 2D/CV 模式渲染，但其投影位置可能不准确。 加载图块集后无法设置此设置。</td><td></td></tr><tr><td>debugHeatmapTilePropertyName</td><td>string</td><td></td><td><code>optional</code>tile 变量以着色为热图。 所有渲染的图块将相对于彼此的指定变量值进行着色。</td><td></td></tr><tr><td>debugFreezeFrame</td><td>boolean</td><td>false</td><td><code>optional</code>仅调试可用，确定是否只使用最后一帧的切片进行渲染。</td><td></td></tr><tr><td>debugShowBoundingVolume</td><td>boolean</td><td>false</td><td><code>optional</code>仅调试可用，如果为 true，则渲染每个 tile 的边界体积。</td><td></td></tr><tr><td>debugShowGeometricError</td><td>boolean</td><td>false</td><td><code>optional</code>仅调试可用，如果为 true，则绘制标签表示每个 tile 的几何误差。</td><td></td></tr><tr><td>debugShowRenderingStatistics</td><td>boolean</td><td>false</td><td><code>optional</code>仅调试可用，如果为 true，则绘制标签以表示每个 tile 的 commonds、points、triangles、features 的数量。</td><td></td></tr><tr><td>debugShowMemoryUsage</td><td>boolean</td><td>false</td><td><code>optional</code>仅调试可用，如果为 true，则绘制标签表示每个 tile 的纹理和几何内存，以 mb 为单位。</td><td></td></tr><tr><td>enableMouseEvent</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定鼠标事件是否生效。</td><td></td></tr></tbody></table>", 1);
const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>readyPromise</td><td></td><td>模型对象可用时触发。cesium 1.107+ 版本废弃。用 ready 事件代替。</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上按下时触发。</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上弹起时触发。</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>鼠标单击该图元时触发。</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>鼠标单击该图元外部时触发。</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>鼠标左键双击该图元时触发。</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上移动时触发。</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>鼠标移动到该图元时触发。</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>鼠标移出该图元时触发。</td></tr></tbody></table>", 1);
function vc_primitive_tilesetvue_type_template_id_3376d91c_render(_ctx, _cache, $props, $setup, $data, $options) {
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
  }), _hoisted_3, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
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
    href: "https://cesium.com/docs/cesiumjs-ref-doc/Cesium3DTileset.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("Cesium3DTileset")]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-primitive-tileset.md?vue&type=template&id=3376d91c

// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmjs.org+babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/registry.npmjs.org+vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-primitive-tileset.md?vue&type=script&lang=ts

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
              onClick: _ctx.onClicked,
              onAllTilesLoaded: _ctx.allTilesLoaded
            }, null, 8, ["onReady", "onClick", "onAllTilesLoaded"])]),
            _: 1
          }), _createVNode(_component_el_row, {
            class: "demo-toolbar"
          }, {
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
          })]),
          _: 1
        }, 512)]);
      }
      const democomponentExport = {
        methods: {
          onReady({
            cesiumObject: tileset,
            viewer
          }) {
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
          allTilesLoaded(e) {
            console.log('allTilesLoaded');
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
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-primitive-tileset.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-primitive-tileset.md



vc_primitive_tilesetvue_type_script_lang_ts.render = vc_primitive_tilesetvue_type_template_id_3376d91c_render

/* harmony default export */ var vc_primitive_tileset = __webpack_exports__["default"] = (vc_primitive_tilesetvue_type_script_lang_ts);

/***/ })

}]);