(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[182],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-primitive-particle.md?vue&type=template&id=39a0ff56

const _hoisted_1 = {
  class: "content vue-cesium-doc"
};
const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("加载粒子系统图元，相当于初始化一个 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.ParticleSystem"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 实例。")], -1);
const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "粒子系统图元组件的基础用法。", -1);
const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("使用 "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive-particle"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" 标签在三维球上添加烟花粒子效果。")])], -1);
const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\" shouldAnimate>\n    <vc-primitive-particle\n      :ref=\"setItemRef\"\n      v-for=\"(option, index) of options\"\n      :key=\"index\"\n      :image=\"option.image\"\n      :color=\"option.color\"\n      :startColor=\"option.startColor\"\n      :endColor=\"option.endColor\"\n      :particleLife=\"option.particleLife\"\n      :speed=\"option.speed\"\n      :imageSize=\"option.imageSize\"\n      :emissionRate=\"option.emissionRate\"\n      :emitter=\"option.emitter\"\n      :bursts=\"option.bursts\"\n      :lifetime=\"option.lifetime\"\n      :updateCallback=\"option.updateCallback\"\n      :modelMatrix=\"option.modelMatrix\"\n      :emitterModelMatrix=\"option.emitterModelMatrix\"\n      @click=\"onClicked\"\n      @complete=\"onComplete\"\n    >\n    </vc-primitive-particle>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">销毁</el-button>\n    <el-button type=\"danger\" round @click=\"load\">加载</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">重载</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        particleCanvas: null,\n        options: [],\n        list: []\n      }\n    },\n    methods: {\n      setItemRef(el) {\n        this.list.indexOf(el) === -1 && this.list.push(el)\n      },\n      onViewerReady({ Cesium, viewer }) {\n        window.vm = this\n        var scene = viewer.scene\n        scene.debugShowFramesPerSecond = true\n        Cesium.Math.setRandomNumberSeed(315)\n        this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108.59777, 40.03883))\n        this.emitterInitialLocation = new Cesium.Cartesian3(0.0, 0.0, 100.0)\n        this.minimumExplosionSize = 30.0\n        this.maximumExplosionSize = 100.0\n        this.particlePixelSize = new Cesium.Cartesian2(7.0, 7.0)\n        var burstSize = 400.0\n        this.lifetime = 5\n        var numberOfFireworks = 20.0\n\n        var xMin = -100.0\n        var xMax = 100.0\n        var yMin = -80.0\n        var yMax = 100.0\n        var zMin = -50.0\n        var zMax = 50.0\n\n        var colorOptions = [\n          {\n            minimumRed: 0.75,\n            green: 0.0,\n            minimumBlue: 0.8,\n            alpha: 1.0\n          },\n          {\n            red: 0.0,\n            minimumGreen: 0.75,\n            minimumBlue: 0.8,\n            alpha: 1.0\n          },\n          {\n            red: 0.0,\n            green: 0.0,\n            minimumBlue: 0.8,\n            alpha: 1.0\n          },\n          {\n            minimumRed: 0.75,\n            minimumGreen: 0.75,\n            blue: 0.0,\n            alpha: 1.0\n          }\n        ]\n\n        const options = []\n        for (var i = 0; i < numberOfFireworks; ++i) {\n          var x = Cesium.Math.randomBetween(xMin, xMax)\n          var y = Cesium.Math.randomBetween(yMin, yMax)\n          var z = Cesium.Math.randomBetween(zMin, zMax)\n          var offset = new Cesium.Cartesian3(x, y, z)\n          var color = Cesium.Color.fromRandom(colorOptions[i % colorOptions.length])\n          console.log(color)\n\n          var bursts = []\n          for (var j = 0; j < 3; ++j) {\n            bursts.push(\n              new Cesium.ParticleBurst({\n                time: Cesium.Math.nextRandomNumber() * this.lifetime,\n                minimum: burstSize,\n                maximum: burstSize\n              })\n            )\n          }\n\n          options.push(this.createFirework(offset, color, bursts))\n        }\n        this.options = options\n        var camera = viewer.scene.camera\n        var cameraOffset = new Cesium.Cartesian3(-300.0, 0.0, 0.0)\n        camera.lookAtTransform(this.modelMatrix, cameraOffset)\n        camera.lookAtTransform(Cesium.Matrix4.IDENTITY)\n\n        var toFireworks = Cesium.Cartesian3.subtract(this.emitterInitialLocation, cameraOffset, new Cesium.Cartesian3())\n        Cesium.Cartesian3.normalize(toFireworks, toFireworks)\n        var angle = Cesium.Math.PI_OVER_TWO - Math.acos(Cesium.Cartesian3.dot(toFireworks, Cesium.Cartesian3.UNIT_Z))\n        camera.lookUp(angle)\n      },\n      createFirework(offset, color, bursts) {\n        var emitterModelMatrixScratch = new Cesium.Matrix4()\n        var position = Cesium.Cartesian3.add(this.emitterInitialLocation, offset, new Cesium.Cartesian3())\n        var emitterModelMatrix = Cesium.Matrix4.fromTranslation(position, emitterModelMatrixScratch)\n        var particleToWorld = Cesium.Matrix4.multiply(this.modelMatrix, emitterModelMatrix, new Cesium.Matrix4())\n        var worldToParticle = Cesium.Matrix4.inverseTransformation(particleToWorld, particleToWorld)\n\n        var size = Cesium.Math.randomBetween(this.minimumExplosionSize, this.maximumExplosionSize)\n        var particlePositionScratch = new Cesium.Cartesian3()\n        var force = function (particle) {\n          var position = Cesium.Matrix4.multiplyByPoint(worldToParticle, particle.position, particlePositionScratch)\n          if (Cesium.Cartesian3.magnitudeSquared(position) >= size * size) {\n            Cesium.Cartesian3.clone(Cesium.Cartesian3.ZERO, particle.velocity)\n          }\n        }\n\n        var normalSize = (size - this.minimumExplosionSize) / (this.maximumExplosionSize - this.minimumExplosionSize)\n        var minLife = 0.3\n        var maxLife = 1.0\n        var life = normalSize * (maxLife - minLife) + minLife\n        return {\n          color,\n          image: this.getImage(),\n          startColor: color,\n          endColor: color.withAlpha(0.0),\n          particleLife: life,\n          speed: 100.0,\n          imageSize: this.particlePixelSize,\n          emissionRate: 0,\n          emitter: new Cesium.SphereEmitter(0.1),\n          bursts: bursts,\n          lifetime: this.lifetime,\n          updateCallback: force,\n          modelMatrix: this.modelMatrix,\n          emitterModelMatrix: emitterModelMatrix\n        }\n      },\n      getImage() {\n        let particleCanvas = this.particleCanvas\n        if (!Cesium.defined(particleCanvas)) {\n          particleCanvas = document.createElement('canvas')\n          particleCanvas.width = 20\n          particleCanvas.height = 20\n          var context2D = particleCanvas.getContext('2d')\n          context2D.beginPath()\n          context2D.arc(8, 8, 8, 0, Cesium.Math.TWO_PI, true)\n          context2D.closePath()\n          context2D.fillStyle = 'rgb(255, 255, 255)'\n          context2D.fill()\n          this.particleCanvas = particleCanvas\n        }\n        return particleCanvas\n      },\n      onComplete(e) {\n        console.log(e)\n      },\n      onClicked(e) {\n        console.log(e)\n      },\n      unload() {\n        this.list.forEach(v => {\n          v.unload()\n        })\n      },\n      load() {\n        this.list.forEach(v => {\n          v.load()\n        })\n      },\n      reload() {\n        this.list.forEach(v => {\n          v.reload()\n        })\n      }\n    }\n  }\n</script>\n")], -1);
const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>show</td><td>boolean</td><td>true</td><td><code>optional</code> 是否显示粒子。</td></tr><tr><td>updateCallback</td><td>Function</td><td></td><td><code>optional</code> 更新回调函数。</td></tr><tr><td>emitter</td><td>Cesium.ParticleEmitter</td><td></td><td><code>optional</code> 粒子触发器类型。</td></tr><tr><td>modelMatrix</td><td>Cesium.Matrix4</td><td></td><td><code>optional</code> 4x4转换矩阵，可将粒子系统从模型转换为世界坐标。</td></tr><tr><td>emitterModelMatrix</td><td>Cesium.Matrix4</td><td></td><td><code>optional</code> 4x4转换矩阵，用于转换粒子系统局部坐标系内的粒子系统发射器。</td></tr><tr><td>emissionRate</td><td>number</td><td><code>5</code></td><td><code>optional</code> 每秒要发射的粒子数。</td></tr><tr><td>bursts</td><td>Array</td><td><code>false</code></td><td><code>optional</code> ParticleBurst 数组，在周期性时间发射粒子。</td></tr><tr><td>loop</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 粒子系统完成后是否应循环其爆发。</td></tr><tr><td>scale</td><td>number</td><td><code>1.0</code></td><td><code>optional</code> 设置比例尺，以在其粒子寿命期间应用到粒子图像。</td></tr><tr><td>startScale</td><td>number</td><td></td><td><code>optional</code> 在粒子寿命开始时应用于粒子图像的初始比例。</td></tr><tr><td>endScale</td><td>number</td><td></td><td><code>optional</code> 在粒子寿命结束时应用于粒子图像的最终比例。</td></tr><tr><td>color</td><td>VcColor|Array|string</td><td></td><td><code>optional</code> 设置粒子在其粒子寿命期间的颜色。</td></tr><tr><td>startColor</td><td>VcColor|Array|string</td><td></td><td><code>optional</code> 粒子在其生命初期的颜色。</td></tr><tr><td>endColor</td><td>VcColor|Array|string</td><td></td><td><code>optional</code> 粒子寿命结束时的颜色。</td></tr><tr><td>image</td><td>HTMLImageElement | HTMLCanvasElement|string</td><td></td><td><code>optional</code> 用于广告牌的URI，HTMLImageElement或HTMLCanvasElement。</td></tr><tr><td>imageSize</td><td>VcCartesian2</td><td></td><td><code>optional</code> 如果设置，则将覆盖用来缩放粒子图像尺寸（以像素为单位）的minimumImageSize和maximumImageSize输入。</td></tr><tr><td>minimumImageSize</td><td>VcCartesian2|Array</td><td></td><td><code>optional</code> 设置宽度的最小范围，以高度为单位，在该范围之上可以随机缩放粒子图像的尺寸（以像素为单位）。</td></tr><tr><td>maximumImageSize</td><td>VcCartesian2|Array</td><td></td><td><code>optional</code> 设置最大边界（宽度乘以高度），在该边界以下可以随机缩放粒子图像的尺寸（以像素为单位）。</td></tr><tr><td>speed</td><td>number</td><td><code>1.0</code></td><td><code>optional</code> 如果设置，则用该值覆盖minimumSpeed和maximumSpeed输入。</td></tr><tr><td>minimumSpeed</td><td>number</td><td></td><td><code>optional</code> 设置以米/秒为单位的最小范围，在该范围上可以随机选择粒子的实际速度。</td></tr><tr><td>maximumSpeed</td><td>number</td><td></td><td><code>optional</code> 设置以米/秒为单位的最大范围，在该范围内将随机选择粒子的实际速度。</td></tr><tr><td>lifetime</td><td>number</td><td></td><td><code>optional</code> 粒子系统发射粒子的时间（以秒为单位）。</td></tr><tr><td>particleLife</td><td>number</td><td><code>5.0</code></td><td><code>optional</code> 如果设置，则使用此值覆盖minimumParticleLife和maximumParticleLife输入。</td></tr><tr><td>minimumParticleLife</td><td>number</td><td></td><td><code>optional</code> 设置以秒为单位的粒子寿命的可能持续时间的最小范围，在该范围内可以随机选择粒子的实际寿命。</td></tr><tr><td>maximumParticleLife</td><td>number</td><td></td><td><code>optional</code> 设置以秒为单位的粒子生命的可能持续时间的最大范围，在该范围内将随机选择粒子的实际生命。</td></tr><tr><td>mass</td><td>number</td><td><code>1.0</code></td><td><code>optional</code> 设置粒子的最小和最大质量（以千克为单位）。</td></tr><tr><td>minimumMass</td><td>number</td><td></td><td><code>optional</code> 设置粒子质量的最小范围（以千克为单位）。 粒子的实际质量将被选择为高于此值的随机量。</td></tr><tr><td>maximumMass</td><td>number</td><td></td><td><code>optional</code> 设置最大粒子质量（以千克为单位）。 粒子的实际质量将选择为低于此值的随机量。</td></tr><tr><td>enableMouseEvent</td><td>boolean</td><td><code>true</code></td><td><code>optional</code> 指定鼠标事件是否生效。</td></tr></tbody></table>", 1);
const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>对象加载前触发。</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>对象加载成功时触发。</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>对象销毁时触发。</td></tr><tr><td>readyPromise</td><td></td><td>模型对象可用时触发。</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上按下时触发。</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上弹起时触发。</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>鼠标单击该图元时触发。</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>鼠标单击该图元外部时触发。</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>鼠标左键双击该图元时触发。</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>鼠标在该图元上移动时触发。</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>鼠标移动到该图元时触发。</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>鼠标移出该图元时触发。</td></tr></tbody></table>", 1);
function vc_primitive_particlevue_type_template_id_39a0ff56_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");
  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");
  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");
  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");
  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");
  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcprimitiveparticle",
    tabindex: "-1",
    content: "VcPrimitiveParticle",
    href: "#vcprimitiveparticle",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("VcPrimitiveParticle "), Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcprimitiveparticle"
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
    href: "https://cesium.com/docs/cesiumjs-ref-doc/ParticleSystem.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createTextVNode"])("ParticleSystem")]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-primitive-particle.md?vue&type=template&id=39a0ff56

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.5_@babel+core@7.23.2_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.47_webpack@4.47.0/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/primitives/vc-primitive-particle.md?vue&type=script&lang=ts

/* harmony default export */ var vc_primitive_particlevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        resolveComponent: _resolveComponent,
        createBlock: _createBlock,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createTextVNode: _createTextVNode
      } = vue_esm_browser;
      function render(_ctx, _cache) {
        const _component_vc_primitive_particle = _resolveComponent("vc-primitive-particle");
        const _component_vc_viewer = _resolveComponent("vc-viewer");
        const _component_el_button = _resolveComponent("el-button");
        const _component_el_row = _resolveComponent("el-row");
        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(() => [_createVNode(_component_vc_viewer, {
            onReady: _ctx.onViewerReady,
            shouldAnimate: ""
          }, {
            default: _withCtx(() => [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.options, (option, index) => {
              return _openBlock(), _createBlock(_component_vc_primitive_particle, {
                ref_for: true,
                ref: _ctx.setItemRef,
                key: index,
                image: option.image,
                color: option.color,
                startColor: option.startColor,
                endColor: option.endColor,
                particleLife: option.particleLife,
                speed: option.speed,
                imageSize: option.imageSize,
                emissionRate: option.emissionRate,
                emitter: option.emitter,
                bursts: option.bursts,
                lifetime: option.lifetime,
                updateCallback: option.updateCallback,
                modelMatrix: option.modelMatrix,
                emitterModelMatrix: option.emitterModelMatrix,
                onClick: _ctx.onClicked,
                onComplete: _ctx.onComplete
              }, null, 8, ["image", "color", "startColor", "endColor", "particleLife", "speed", "imageSize", "emissionRate", "emitter", "bursts", "lifetime", "updateCallback", "modelMatrix", "emitterModelMatrix", "onClick", "onComplete"]);
            }), 128))]),
            _: 1
          }, 8, ["onReady"]), _createVNode(_component_el_row, {
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
        data() {
          return {
            particleCanvas: null,
            options: [],
            list: []
          };
        },
        methods: {
          setItemRef(el) {
            this.list.indexOf(el) === -1 && this.list.push(el);
          },
          onViewerReady(_ref) {
            let {
              Cesium,
              viewer
            } = _ref;
            window.vm = this;
            var scene = viewer.scene;
            scene.debugShowFramesPerSecond = true;
            Cesium.Math.setRandomNumberSeed(315);
            this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108.59777, 40.03883));
            this.emitterInitialLocation = new Cesium.Cartesian3(0.0, 0.0, 100.0);
            this.minimumExplosionSize = 30.0;
            this.maximumExplosionSize = 100.0;
            this.particlePixelSize = new Cesium.Cartesian2(7.0, 7.0);
            var burstSize = 400.0;
            this.lifetime = 5;
            var numberOfFireworks = 20.0;
            var xMin = -100.0;
            var xMax = 100.0;
            var yMin = -80.0;
            var yMax = 100.0;
            var zMin = -50.0;
            var zMax = 50.0;
            var colorOptions = [{
              minimumRed: 0.75,
              green: 0.0,
              minimumBlue: 0.8,
              alpha: 1.0
            }, {
              red: 0.0,
              minimumGreen: 0.75,
              minimumBlue: 0.8,
              alpha: 1.0
            }, {
              red: 0.0,
              green: 0.0,
              minimumBlue: 0.8,
              alpha: 1.0
            }, {
              minimumRed: 0.75,
              minimumGreen: 0.75,
              blue: 0.0,
              alpha: 1.0
            }];
            const options = [];
            for (var i = 0; i < numberOfFireworks; ++i) {
              var x = Cesium.Math.randomBetween(xMin, xMax);
              var y = Cesium.Math.randomBetween(yMin, yMax);
              var z = Cesium.Math.randomBetween(zMin, zMax);
              var offset = new Cesium.Cartesian3(x, y, z);
              var color = Cesium.Color.fromRandom(colorOptions[i % colorOptions.length]);
              console.log(color);
              var bursts = [];
              for (var j = 0; j < 3; ++j) {
                bursts.push(new Cesium.ParticleBurst({
                  time: Cesium.Math.nextRandomNumber() * this.lifetime,
                  minimum: burstSize,
                  maximum: burstSize
                }));
              }
              options.push(this.createFirework(offset, color, bursts));
            }
            this.options = options;
            var camera = viewer.scene.camera;
            var cameraOffset = new Cesium.Cartesian3(-300.0, 0.0, 0.0);
            camera.lookAtTransform(this.modelMatrix, cameraOffset);
            camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
            var toFireworks = Cesium.Cartesian3.subtract(this.emitterInitialLocation, cameraOffset, new Cesium.Cartesian3());
            Cesium.Cartesian3.normalize(toFireworks, toFireworks);
            var angle = Cesium.Math.PI_OVER_TWO - Math.acos(Cesium.Cartesian3.dot(toFireworks, Cesium.Cartesian3.UNIT_Z));
            camera.lookUp(angle);
          },
          createFirework(offset, color, bursts) {
            var emitterModelMatrixScratch = new Cesium.Matrix4();
            var position = Cesium.Cartesian3.add(this.emitterInitialLocation, offset, new Cesium.Cartesian3());
            var emitterModelMatrix = Cesium.Matrix4.fromTranslation(position, emitterModelMatrixScratch);
            var particleToWorld = Cesium.Matrix4.multiply(this.modelMatrix, emitterModelMatrix, new Cesium.Matrix4());
            var worldToParticle = Cesium.Matrix4.inverseTransformation(particleToWorld, particleToWorld);
            var size = Cesium.Math.randomBetween(this.minimumExplosionSize, this.maximumExplosionSize);
            var particlePositionScratch = new Cesium.Cartesian3();
            var force = function (particle) {
              var position = Cesium.Matrix4.multiplyByPoint(worldToParticle, particle.position, particlePositionScratch);
              if (Cesium.Cartesian3.magnitudeSquared(position) >= size * size) {
                Cesium.Cartesian3.clone(Cesium.Cartesian3.ZERO, particle.velocity);
              }
            };
            var normalSize = (size - this.minimumExplosionSize) / (this.maximumExplosionSize - this.minimumExplosionSize);
            var minLife = 0.3;
            var maxLife = 1.0;
            var life = normalSize * (maxLife - minLife) + minLife;
            return {
              color,
              image: this.getImage(),
              startColor: color,
              endColor: color.withAlpha(0.0),
              particleLife: life,
              speed: 100.0,
              imageSize: this.particlePixelSize,
              emissionRate: 0,
              emitter: new Cesium.SphereEmitter(0.1),
              bursts: bursts,
              lifetime: this.lifetime,
              updateCallback: force,
              modelMatrix: this.modelMatrix,
              emitterModelMatrix: emitterModelMatrix
            };
          },
          getImage() {
            let particleCanvas = this.particleCanvas;
            if (!Cesium.defined(particleCanvas)) {
              particleCanvas = document.createElement('canvas');
              particleCanvas.width = 20;
              particleCanvas.height = 20;
              var context2D = particleCanvas.getContext('2d');
              context2D.beginPath();
              context2D.arc(8, 8, 8, 0, Cesium.Math.TWO_PI, true);
              context2D.closePath();
              context2D.fillStyle = 'rgb(255, 255, 255)';
              context2D.fill();
              this.particleCanvas = particleCanvas;
            }
            return particleCanvas;
          },
          onComplete(e) {
            console.log(e);
          },
          onClicked(e) {
            console.log(e);
          },
          unload() {
            this.list.forEach(v => {
              v.unload();
            });
          },
          load() {
            this.list.forEach(v => {
              v.load();
            });
          },
          reload() {
            this.list.forEach(v => {
              v.reload();
            });
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
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-primitive-particle.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/primitives/vc-primitive-particle.md



vc_primitive_particlevue_type_script_lang_ts.render = vc_primitive_particlevue_type_template_id_39a0ff56_render

/* harmony default export */ var vc_primitive_particle = __webpack_exports__["default"] = (vc_primitive_particlevue_type_script_lang_ts);

/***/ })

}]);