(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.2.47/node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/primitives/vc-primitive-particle.md?vue&type=template&id=ce1e8934

const vc_primitive_particlevue_type_template_id_ce1e8934_hoisted_1 = {
  class: "content vue-cesium-doc"
};

const vc_primitive_particlevue_type_template_id_ce1e8934_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("VcPrimitiveParticle ");

const vc_primitive_particlevue_type_template_id_ce1e8934_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Loading a ParticleSystem manages the updating and display of a collection of particles. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "Cesium.ParticleSystem"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" instance.")], -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Basic usage ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, "Basic usage of VcPrimitiveParticle component.", -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Use the "), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "vc-primitive-particle"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" tag to add firework particle effects to the viewer.")])], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\" shouldAnimate>\n    <vc-primitive-particle\n      :ref=\"setItemRef\"\n      v-for=\"(option, index) of options\"\n      :key=\"index\"\n      :image=\"option.image\"\n      :color=\"option.color\"\n      :startColor=\"option.startColor\"\n      :endColor=\"option.endColor\"\n      :particleLife=\"option.particleLife\"\n      :speed=\"option.speed\"\n      :imageSize=\"option.imageSize\"\n      :emissionRate=\"option.emissionRate\"\n      :emitter=\"option.emitter\"\n      :bursts=\"option.bursts\"\n      :lifetime=\"option.lifetime\"\n      :updateCallback=\"option.updateCallback\"\n      :modelMatrix=\"option.modelMatrix\"\n      :emitterModelMatrix=\"option.emitterModelMatrix\"\n      @click=\"onClicked\"\n      @complete=\"onComplete\"\n    >\n    </vc-primitive-particle>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        particleCanvas: null,\n        options: [],\n        list: []\n      }\n    },\n    methods: {\n      setItemRef(el) {\n        this.list.indexOf(el) === -1 && this.list.push(el)\n      },\n      onViewerReady({ Cesium, viewer }) {\n        var scene = viewer.scene\n        scene.debugShowFramesPerSecond = true\n        Cesium.Math.setRandomNumberSeed(315)\n        this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108.59777, 40.03883))\n        this.emitterInitialLocation = new Cesium.Cartesian3(0.0, 0.0, 100.0)\n        this.minimumExplosionSize = 30.0\n        this.maximumExplosionSize = 100.0\n        this.particlePixelSize = new Cesium.Cartesian2(7.0, 7.0)\n        var burstSize = 400.0\n        this.lifetime = 5\n        var numberOfFireworks = 20.0\n\n        var xMin = -100.0\n        var xMax = 100.0\n        var yMin = -80.0\n        var yMax = 100.0\n        var zMin = -50.0\n        var zMax = 50.0\n\n        var colorOptions = [\n          {\n            minimumRed: 0.75,\n            green: 0.0,\n            minimumBlue: 0.8,\n            alpha: 1.0\n          },\n          {\n            red: 0.0,\n            minimumGreen: 0.75,\n            minimumBlue: 0.8,\n            alpha: 1.0\n          },\n          {\n            red: 0.0,\n            green: 0.0,\n            minimumBlue: 0.8,\n            alpha: 1.0\n          },\n          {\n            minimumRed: 0.75,\n            minimumGreen: 0.75,\n            blue: 0.0,\n            alpha: 1.0\n          }\n        ]\n\n        const options = []\n        for (var i = 0; i < numberOfFireworks; ++i) {\n          var x = Cesium.Math.randomBetween(xMin, xMax)\n          var y = Cesium.Math.randomBetween(yMin, yMax)\n          var z = Cesium.Math.randomBetween(zMin, zMax)\n          var offset = new Cesium.Cartesian3(x, y, z)\n          var color = Cesium.Color.fromRandom(colorOptions[i % colorOptions.length])\n\n          var bursts = []\n          for (var j = 0; j < 3; ++j) {\n            bursts.push(\n              new Cesium.ParticleBurst({\n                time: Cesium.Math.nextRandomNumber() * this.lifetime,\n                minimum: burstSize,\n                maximum: burstSize\n              })\n            )\n          }\n\n          options.push(this.createFirework(offset, color, bursts))\n        }\n        this.options = options\n        var camera = viewer.scene.camera\n        var cameraOffset = new Cesium.Cartesian3(-300.0, 0.0, 0.0)\n        camera.lookAtTransform(this.modelMatrix, cameraOffset)\n        camera.lookAtTransform(Cesium.Matrix4.IDENTITY)\n\n        var toFireworks = Cesium.Cartesian3.subtract(this.emitterInitialLocation, cameraOffset, new Cesium.Cartesian3())\n        Cesium.Cartesian3.normalize(toFireworks, toFireworks)\n        var angle = Cesium.Math.PI_OVER_TWO - Math.acos(Cesium.Cartesian3.dot(toFireworks, Cesium.Cartesian3.UNIT_Z))\n        camera.lookUp(angle)\n      },\n      createFirework(offset, color, bursts) {\n        var emitterModelMatrixScratch = new Cesium.Matrix4()\n        var position = Cesium.Cartesian3.add(this.emitterInitialLocation, offset, new Cesium.Cartesian3())\n        var emitterModelMatrix = Cesium.Matrix4.fromTranslation(position, emitterModelMatrixScratch)\n        var particleToWorld = Cesium.Matrix4.multiply(this.modelMatrix, emitterModelMatrix, new Cesium.Matrix4())\n        var worldToParticle = Cesium.Matrix4.inverseTransformation(particleToWorld, particleToWorld)\n\n        var size = Cesium.Math.randomBetween(this.minimumExplosionSize, this.maximumExplosionSize)\n        var particlePositionScratch = new Cesium.Cartesian3()\n        var force = function (particle) {\n          var position = Cesium.Matrix4.multiplyByPoint(worldToParticle, particle.position, particlePositionScratch)\n          if (Cesium.Cartesian3.magnitudeSquared(position) >= size * size) {\n            Cesium.Cartesian3.clone(Cesium.Cartesian3.ZERO, particle.velocity)\n          }\n        }\n\n        var normalSize = (size - this.minimumExplosionSize) / (this.maximumExplosionSize - this.minimumExplosionSize)\n        var minLife = 0.3\n        var maxLife = 1.0\n        var life = normalSize * (maxLife - minLife) + minLife\n        return {\n          color: {},\n          image: this.getImage(),\n          startColor: color,\n          endColor: color.withAlpha(0.0),\n          particleLife: life,\n          speed: 100.0,\n          imageSize: this.particlePixelSize,\n          emissionRate: 0,\n          emitter: new Cesium.SphereEmitter(0.1),\n          bursts: bursts,\n          lifetime: this.lifetime,\n          updateCallback: force,\n          modelMatrix: this.modelMatrix,\n          emitterModelMatrix: emitterModelMatrix\n        }\n      },\n      getImage() {\n        let particleCanvas = this.particleCanvas\n        if (!Cesium.defined(particleCanvas)) {\n          particleCanvas = document.createElement('canvas')\n          particleCanvas.width = 20\n          particleCanvas.height = 20\n          var context2D = particleCanvas.getContext('2d')\n          context2D.beginPath()\n          context2D.arc(8, 8, 8, 0, Cesium.Math.TWO_PI, true)\n          context2D.closePath()\n          context2D.fillStyle = 'rgb(255, 255, 255)'\n          context2D.fill()\n          this.particleCanvas = particleCanvas\n        }\n        return particleCanvas\n      },\n      onComplete(e) {\n        console.log(e)\n      },\n      onClicked(e) {\n        console.log(e)\n      },\n      unload() {\n        this.list.forEach(v => {\n          v.unload()\n        })\n      },\n      load() {\n        this.list.forEach(v => {\n          v.load()\n        })\n      },\n      reload() {\n        this.list.forEach(v => {\n          v.reload()\n        })\n      }\n    }\n  }\n</script>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Props ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Type"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Default"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("th", null, "Description")])], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "show"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "true"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Whether to display the particle system.")])], -1);

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "updateCallback"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Function"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The callback function to be called each frame to update a particle.")])], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "emitter"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Cesium.ParticleEmitter"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The particle emitter for this system.")])], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "modelMatrix"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Cesium.Matrix4"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The 4x4 transformation matrix that transforms the particle system from model to world coordinates.")])], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "emitterModelMatrix"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Cesium.Matrix4"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The 4x4 transformation matrix that transforms the particle system emitter within the particle systems local coordinate system.")])], -1);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "emissionRate"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "5")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The number of particles to emit per second.")])], -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "bursts", -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "Array", -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "false")], -1);

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional", -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" An array of ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("ParticleBurst");

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(", emitting bursts of particles at periodic times.");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "loop"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Whether the particle system should loop its bursts when it is complete.")])], -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "scale"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "1.0")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Sets the scale to apply to the image of the particle for the duration of its particleLife.")])], -1);

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "startScale"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The final scale to apply to the image of the particle at the end of its life.")])], -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "endScale"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Sets the color of a particle for the duration of its particleLife.")])], -1);

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "color"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "VcColor|Array|string"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Sets the color of a particle for the duration of its particleLife.")])], -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "startColor"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "VcColor|Array|string"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The color of the particle at the beginning of its life.")])], -1);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "endColor"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "VcColor|Array|string"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The color of the particle at the end of its life.")])], -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "image"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "HTMLImageElement | HTMLCanvasElement|string"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" The URI, HTMLImageElement, or HTMLCanvasElement to use for the billboard.")])], -1);

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "imageSize"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "VcCartesian2"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" If set, overrides the minimumImageSize and maximumImageSize inputs that scale the particle image's dimensions in pixels.")])], -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "minimumImageSize"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "VcCartesian2"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Sets the minimum bound, width by height, above which to randomly scale the particle image's dimensions in pixels.")])], -1);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "maximumImageSize"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "VcCartesian2"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Sets the maximum bound, width by height, below which to randomly scale the particle image's dimensions in pixels.")])], -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "speed"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "1.0")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" If set, overrides the minimumSpeed and maximumSpeed inputs with this value.")])], -1);

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "minimumSpeed"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Sets the minimum bound in meters per second above which a particle's actual speed will be randomly chosen.")])], -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "maximumSpeed"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Sets the maximum bound in meters per second below which a particle's actual speed will be randomly chosen.")])], -1);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "lifetime"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" How long the particle system will emit particles, in seconds.")])], -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "particleLife"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "5.0")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" If set, overrides the minimumParticleLife and maximumParticleLife inputs with this value.")])], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "minimumParticleLife"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Sets the minimum bound in seconds for the possible duration of a particle's life above which a particle's actual life will be randomly chosen.")])], -1);

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "maximumParticleLife"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Sets the maximum bound in seconds for the possible duration of a particle's life below which a particle's actual life will be randomly chosen.")])], -1);

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "mass"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "1.0")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Sets the minimum and maximum mass of particles in kilograms.")])], -1);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "minimumMass"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Sets the minimum bound for the mass of a particle in kilograms. A particle's actual mass will be chosen as a random amount above this value.")])], -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "maximumMass"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "number"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Sets the maximum mass of particles in kilograms. A particle's actual mass will be chosen as a random amount below this value.")])], -1);

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "enableMouseEvent"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser["createElementVNode"])("code", null, "optional"), /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])(" Specify whether the mouse event takes effect.")])], -1);

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Events ");

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>(readyObj: VcReadyObject)</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>(instance: VcComponentInternalInstance)</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>readyPromise</td><td></td><td>Triggers when the primitive is ready to render.</td></tr><tr><td>mousedown</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse is pressed on this primitive.</td></tr><tr><td>mouseup</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse bounces up on this primitive.</td></tr><tr><td>click</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks on the primitive.</td></tr><tr><td>clickout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse clicks outside the primitive.</td></tr><tr><td>dblclick</td><td>(evt: VcPickEvent)</td><td>Triggers when the left mouse button double-clicks the primitive.</td></tr><tr><td>mousemove</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves on this primitive.</td></tr><tr><td>mouseover</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves to this primitive.</td></tr><tr><td>mouseout</td><td>(evt: VcPickEvent)</td><td>Triggers when the mouse moves out of this primitive.</td></tr></tbody></table>", 1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Reference ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("Refer to the official documentation: ");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser["createTextVNode"])("ParticleSystem");

function vc_primitive_particlevue_type_template_id_ce1e8934_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser["resolveComponent"])("app-heading");

  const _component_vue_cesium_demo0 = Object(vue_esm_browser["resolveComponent"])("vue-cesium-demo0");

  const _component_demo_block = Object(vue_esm_browser["resolveComponent"])("demo-block");

  const _component_right_nav = Object(vue_esm_browser["resolveComponent"])("right-nav");

  return Object(vue_esm_browser["openBlock"])(), Object(vue_esm_browser["createElementBlock"])("section", vc_primitive_particlevue_type_template_id_ce1e8934_hoisted_1, [Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "vcprimitiveparticle",
    tabindex: "-1",
    content: "VcPrimitiveParticle",
    href: "#vcprimitiveparticle",
    level: "2"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [vc_primitive_particlevue_type_template_id_ce1e8934_hoisted_2, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#vcprimitiveparticle"
    })]),
    _: 1
  }), vc_primitive_particlevue_type_template_id_ce1e8934_hoisted_3, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    tabindex: "-1",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), _hoisted_5, Object(vue_esm_browser["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser["withCtx"])(() => [Object(vue_esm_browser["createVNode"])(_component_vue_cesium_demo0)]),
    highlight: Object(vue_esm_browser["withCtx"])(() => [_hoisted_7]),
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "props",
    tabindex: "-1",
    content: "Props",
    href: "#props",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#props"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("table", null, [_hoisted_9, Object(vue_esm_browser["createElementVNode"])("tbody", null, [_hoisted_10, _hoisted_11, _hoisted_12, _hoisted_13, _hoisted_14, _hoisted_15, Object(vue_esm_browser["createElementVNode"])("tr", null, [_hoisted_16, _hoisted_17, _hoisted_18, Object(vue_esm_browser["createElementVNode"])("td", null, [_hoisted_19, _hoisted_20, Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/ParticleBurst.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_21]),
    _: 1
  }), _hoisted_22])]), _hoisted_23, _hoisted_24, _hoisted_25, _hoisted_26, _hoisted_27, _hoisted_28, _hoisted_29, _hoisted_30, _hoisted_31, _hoisted_32, _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, _hoisted_39, _hoisted_40, _hoisted_41, _hoisted_42, _hoisted_43, _hoisted_44])]), Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "events",
    tabindex: "-1",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_45, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_46, Object(vue_esm_browser["createVNode"])(_component_app_heading, {
    id: "reference",
    tabindex: "-1",
    content: "Reference",
    href: "#reference",
    level: "3"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_47, Object(vue_esm_browser["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#reference"
    })]),
    _: 1
  }), Object(vue_esm_browser["createElementVNode"])("ul", null, [Object(vue_esm_browser["createElementVNode"])("li", null, [_hoisted_48, Object(vue_esm_browser["createElementVNode"])("strong", null, [Object(vue_esm_browser["createVNode"])(_component_app_link, {
    href: "https://cesium.com/docs/cesiumjs-ref-doc/ParticleSystem.html"
  }, {
    default: Object(vue_esm_browser["withCtx"])(() => [_hoisted_49]),
    _: 1
  })])])]), Object(vue_esm_browser["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-particle.md?vue&type=template&id=ce1e8934

// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@8.2.3_@babel+core@7.16.0_webpack@4.44.1/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.5.0_@vue+compiler-sfc@3.2.30_webpack@4.44.1/node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/primitives/vc-primitive-particle.md?vue&type=script&lang=ts

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

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

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
              color: {},
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
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-particle.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-particle.md



vc_primitive_particlevue_type_script_lang_ts.render = vc_primitive_particlevue_type_template_id_ce1e8934_render

/* harmony default export */ var vc_primitive_particle = __webpack_exports__["default"] = (vc_primitive_particlevue_type_script_lang_ts);

/***/ })

}]);