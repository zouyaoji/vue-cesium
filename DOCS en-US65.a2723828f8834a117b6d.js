(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/primitives/vc-primitive-particle.md?vue&type=template&id=4e9b3426

var vc_primitive_particlevue_type_template_id_4e9b3426_hoisted_1 = {
  class: "content element-doc"
};

var vc_primitive_particlevue_type_template_id_4e9b3426_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h2", {
  id: "vcprimitiveparticle"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#vcprimitiveparticle"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" VcPrimitiveParticle")], -1);

var vc_primitive_particlevue_type_template_id_4e9b3426_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Loading a ParticleSystem manages the updating and display of a collection of particles. It is equivalent to initializing a "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "Cesium.ParticleSystem"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" instance.")], -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h3", {
  id: "basic-usage"
}, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#basic-usage"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" Basic usage")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "Basic usage of VcPrimitiveParticle component.", -1);

var _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])("Use the "), /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", null, "vc-primitive-particle"), /*#__PURE__*/Object(vue_esm_browser["m" /* createTextVNode */])(" tag to add firework particle effects to the viewer.")])], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  class: "html"
}, "<el-row ref=\"viewerContainer\" class=\"demo-viewer\">\n  <vc-viewer @ready=\"onViewerReady\" shouldAnimate>\n    <vc-primitive-particle\n      :ref=\"setItemRef\"\n      v-for=\"(option, index) of options\"\n      :key=\"index\"\n      :image=\"option.image\"\n      :color=\"option.color\"\n      :startColor=\"option.startColor\"\n      :endColor=\"option.endColor\"\n      :particleLife=\"option.particleLife\"\n      :speed=\"option.speed\"\n      :imageSize=\"option.imageSize\"\n      :emissionRate=\"option.emissionRate\"\n      :emitter=\"option.emitter\"\n      :bursts=\"option.bursts\"\n      :lifetime=\"option.lifetime\"\n      :updateCallback=\"option.updateCallback\"\n      :modelMatrix=\"option.modelMatrix\"\n      :emitterModelMatrix=\"option.emitterModelMatrix\"\n      @click=\"onClicked\"\n      @complete=\"onComplete\"\n    >\n    </vc-primitive-particle>\n  </vc-viewer>\n  <el-row class=\"demo-toolbar\">\n    <el-button type=\"danger\" round @click=\"unload\">Unload</el-button>\n    <el-button type=\"danger\" round @click=\"load\">Load</el-button>\n    <el-button type=\"danger\" round @click=\"reload\">Reload</el-button>\n  </el-row>\n</el-row>\n\n<script>\n  export default {\n    data() {\n      return {\n        particleCanvas: null,\n        options: [],\n        list: []\n      }\n    },\n    methods: {\n      setItemRef(el) {\n        this.list.indexOf(el) === -1 && this.list.push(el)\n      },\n      onViewerReady({ Cesium, viewer }) {\n        var scene = viewer.scene\n        scene.debugShowFramesPerSecond = true\n        Cesium.Math.setRandomNumberSeed(315)\n        this.modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(108.59777, 40.03883))\n        this.emitterInitialLocation = new Cesium.Cartesian3(0.0, 0.0, 100.0)\n        this.minimumExplosionSize = 30.0\n        this.maximumExplosionSize = 100.0\n        this.particlePixelSize = new Cesium.Cartesian2(7.0, 7.0)\n        var burstSize = 400.0\n        this.lifetime = 5\n        var numberOfFireworks = 20.0\n\n        var xMin = -100.0\n        var xMax = 100.0\n        var yMin = -80.0\n        var yMax = 100.0\n        var zMin = -50.0\n        var zMax = 50.0\n\n        var colorOptions = [\n          {\n            minimumRed: 0.75,\n            green: 0.0,\n            minimumBlue: 0.8,\n            alpha: 1.0\n          },\n          {\n            red: 0.0,\n            minimumGreen: 0.75,\n            minimumBlue: 0.8,\n            alpha: 1.0\n          },\n          {\n            red: 0.0,\n            green: 0.0,\n            minimumBlue: 0.8,\n            alpha: 1.0\n          },\n          {\n            minimumRed: 0.75,\n            minimumGreen: 0.75,\n            blue: 0.0,\n            alpha: 1.0\n          }\n        ]\n\n        const options = []\n        for (var i = 0; i < numberOfFireworks; ++i) {\n          var x = Cesium.Math.randomBetween(xMin, xMax)\n          var y = Cesium.Math.randomBetween(yMin, yMax)\n          var z = Cesium.Math.randomBetween(zMin, zMax)\n          var offset = new Cesium.Cartesian3(x, y, z)\n          var color = Cesium.Color.fromRandom(colorOptions[i % colorOptions.length])\n\n          var bursts = []\n          for (var j = 0; j < 3; ++j) {\n            bursts.push(\n              new Cesium.ParticleBurst({\n                time: Cesium.Math.nextRandomNumber() * this.lifetime,\n                minimum: burstSize,\n                maximum: burstSize\n              })\n            )\n          }\n\n          options.push(this.createFirework(offset, color, bursts))\n        }\n        this.options = options\n        var camera = viewer.scene.camera\n        var cameraOffset = new Cesium.Cartesian3(-300.0, 0.0, 0.0)\n        camera.lookAtTransform(this.modelMatrix, cameraOffset)\n        camera.lookAtTransform(Cesium.Matrix4.IDENTITY)\n\n        var toFireworks = Cesium.Cartesian3.subtract(this.emitterInitialLocation, cameraOffset, new Cesium.Cartesian3())\n        Cesium.Cartesian3.normalize(toFireworks, toFireworks)\n        var angle = Cesium.Math.PI_OVER_TWO - Math.acos(Cesium.Cartesian3.dot(toFireworks, Cesium.Cartesian3.UNIT_Z))\n        camera.lookUp(angle)\n      },\n      createFirework(offset, color, bursts) {\n        var emitterModelMatrixScratch = new Cesium.Matrix4()\n        var position = Cesium.Cartesian3.add(this.emitterInitialLocation, offset, new Cesium.Cartesian3())\n        var emitterModelMatrix = Cesium.Matrix4.fromTranslation(position, emitterModelMatrixScratch)\n        var particleToWorld = Cesium.Matrix4.multiply(this.modelMatrix, emitterModelMatrix, new Cesium.Matrix4())\n        var worldToParticle = Cesium.Matrix4.inverseTransformation(particleToWorld, particleToWorld)\n\n        var size = Cesium.Math.randomBetween(this.minimumExplosionSize, this.maximumExplosionSize)\n        var particlePositionScratch = new Cesium.Cartesian3()\n        var force = function(particle) {\n          var position = Cesium.Matrix4.multiplyByPoint(worldToParticle, particle.position, particlePositionScratch)\n          if (Cesium.Cartesian3.magnitudeSquared(position) >= size * size) {\n            Cesium.Cartesian3.clone(Cesium.Cartesian3.ZERO, particle.velocity)\n          }\n        }\n\n        var normalSize = (size - this.minimumExplosionSize) / (this.maximumExplosionSize - this.minimumExplosionSize)\n        var minLife = 0.3\n        var maxLife = 1.0\n        var life = normalSize * (maxLife - minLife) + minLife\n        return {\n          color: {},\n          image: this.getImage(),\n          startColor: color,\n          endColor: color.withAlpha(0.0),\n          particleLife: life,\n          speed: 100.0,\n          imageSize: this.particlePixelSize,\n          emissionRate: 0,\n          emitter: new Cesium.SphereEmitter(0.1),\n          bursts: bursts,\n          lifetime: this.lifetime,\n          updateCallback: force,\n          modelMatrix: this.modelMatrix,\n          emitterModelMatrix: emitterModelMatrix\n        }\n      },\n      getImage() {\n        let particleCanvas = this.particleCanvas\n        if (!Cesium.defined(particleCanvas)) {\n          particleCanvas = document.createElement('canvas')\n          particleCanvas.width = 20\n          particleCanvas.height = 20\n          var context2D = particleCanvas.getContext('2d')\n          context2D.beginPath()\n          context2D.arc(8, 8, 8, 0, Cesium.Math.TWO_PI, true)\n          context2D.closePath()\n          context2D.fillStyle = 'rgb(255, 255, 255)'\n          context2D.fill()\n          this.particleCanvas = particleCanvas\n        }\n        return particleCanvas\n      },\n      onComplete(e) {\n        console.log(e)\n      },\n      onClicked(e) {\n        console.log(e)\n      },\n      unload() {\n        this.list.forEach(v => {\n          v.unload()\n        })\n      },\n      load() {\n        this.list.forEach(v => {\n          v.load()\n        })\n      },\n      reload() {\n        this.list.forEach(v => {\n          v.reload()\n        })\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["l" /* createStaticVNode */])("<h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> Props</h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>show</td><td>Boolean</td><td>true</td><td><code>optional</code>Whether to display the particle system.</td></tr><tr><td>updateCallback</td><td>Function</td><td></td><td><code>optional</code> The callback function to be called each frame to update a particle.</td></tr><tr><td>emitter</td><td>Object</td><td></td><td><code>optional</code> The particle emitter for this system.</td></tr><tr><td>modelMatrix</td><td>Object</td><td></td><td><code>optional</code> The 4x4 transformation matrix that transforms the particle system from model to world coordinates.</td></tr><tr><td>emitterModelMatrix</td><td>Object</td><td></td><td><code>optional</code> The 4x4 transformation matrix that transforms the particle system emitter within the particle systems local coordinate system.</td></tr><tr><td>emissionRate</td><td>Number</td><td><code>5</code></td><td><code>optional</code> The number of particles to emit per second.</td></tr><tr><td>bursts</td><td>Array</td><td><code>false</code></td><td><code>optional</code> An array of <a href=\"https://cesium.com/docs/cesiumjs-ref-doc/ParticleBurst.html\">ParticleBurst</a>, emitting bursts of particles at periodic times.</td></tr><tr><td>loop</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Whether the particle system should loop its bursts when it is complete.</td></tr><tr><td>scale</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> Sets the scale to apply to the image of the particle for the duration of its particleLife.</td></tr><tr><td>startScale</td><td>Number</td><td></td><td><code>optional</code> The final scale to apply to the image of the particle at the end of its life.</td></tr><tr><td>endScale</td><td>Number</td><td></td><td><code>optional</code> Sets the color of a particle for the duration of its particleLife.</td></tr><tr><td>color</td><td>Object|Array|String</td><td></td><td><code>optional</code> Sets the color of a particle for the duration of its particleLife.</td></tr><tr><td>startColor</td><td>Object|Array|String</td><td></td><td><code>optional</code> The color of the particle at the beginning of its life.</td></tr><tr><td>endColor</td><td>Object|Array|String</td><td></td><td><code>optional</code> The color of the particle at the end of its life.</td></tr><tr><td>image</td><td>Object|String</td><td></td><td><code>optional</code> The URI, HTMLImageElement, or HTMLCanvasElement to use for the billboard.</td></tr><tr><td>imageSize</td><td>Object</td><td></td><td><code>optional</code> If set, overrides the minimumImageSize and maximumImageSize inputs that scale the particle image&#39;s dimensions in pixels.</td></tr><tr><td>minimumImageSize</td><td>Object</td><td></td><td><code>optional</code> Sets the minimum bound, width by height, above which to randomly scale the particle image&#39;s dimensions in pixels.</td></tr><tr><td>maximumImageSize</td><td>Object</td><td></td><td><code>optional</code> Sets the maximum bound, width by height, below which to randomly scale the particle image&#39;s dimensions in pixels.</td></tr><tr><td>speed</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> If set, overrides the minimumSpeed and maximumSpeed inputs with this value.</td></tr><tr><td>minimumSpeed</td><td>Number</td><td></td><td><code>optional</code> Sets the minimum bound in meters per second above which a particle&#39;s actual speed will be randomly chosen.</td></tr><tr><td>maximumSpeed</td><td>Number</td><td></td><td><code>optional</code> Sets the maximum bound in meters per second below which a particle&#39;s actual speed will be randomly chosen.</td></tr><tr><td>lifetime</td><td>Number</td><td></td><td><code>optional</code> How long the particle system will emit particles, in seconds.</td></tr><tr><td>particleLife</td><td>Number</td><td><code>5.0</code></td><td><code>optional</code> If set, overrides the minimumParticleLife and maximumParticleLife inputs with this value.</td></tr><tr><td>minimumParticleLife</td><td>Number</td><td></td><td><code>optional</code> Sets the minimum bound in seconds for the possible duration of a particle&#39;s life above which a particle&#39;s actual life will be randomly chosen.</td></tr><tr><td>maximumParticleLife</td><td>Number</td><td></td><td><code>optional</code> Sets the maximum bound in seconds for the possible duration of a particle&#39;s life below which a particle&#39;s actual life will be randomly chosen.</td></tr><tr><td>mass</td><td>Number</td><td><code>1.0</code></td><td><code>optional</code> Sets the minimum and maximum mass of particles in kilograms.</td></tr><tr><td>minimumMass</td><td>Number</td><td></td><td><code>optional</code> Sets the minimum bound for the mass of a particle in kilograms. A particle&#39;s actual mass will be chosen as a random amount above this value.</td></tr><tr><td>maximumMass</td><td>Number</td><td></td><td><code>optional</code> Sets the maximum mass of particles in kilograms. A particle&#39;s actual mass will be chosen as a random amount below this value.</td></tr><tr><td>enableMouseEvent</td><td>Boolean</td><td><code>true</code></td><td><code>optional</code> Specify whether the mouse event takes effect.</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>beforeLoad</td><td>Vue Instance</td><td>Triggers before the cesiumObject is loaded.</td></tr><tr><td>ready</td><td>{Cesium, viewer, cesiumObject, vm}</td><td>Triggers when the cesiumObject is successfully loaded.</td></tr><tr><td>destroyed</td><td>Vue Instance</td><td>Triggers when the cesiumObject is destroyed.</td></tr><tr><td>readyPromise</td><td></td><td>Triggers when the primitive is ready to render.</td></tr><tr><td>mousedown</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse is pressed on this primitive.</td></tr><tr><td>mouseup</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse bounces up on this primitive.</td></tr><tr><td>click</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse clicks on the primitive.</td></tr><tr><td>clickout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse clicks outside the primitive.</td></tr><tr><td>dblclick</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the left mouse button double-clicks the primitive.</td></tr><tr><td>mousemove</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves on this primitive.</td></tr><tr><td>mouseover</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves to this primitive.</td></tr><tr><td>mouseout</td><td>{button,surfacePosition,pickedFeature,type,windowPosition}</td><td>Triggers when the mouse moves out of this primitive.</td></tr></tbody></table><h3 id=\"reference\"><a class=\"header-anchor\" href=\"#reference\">¶</a> Reference</h3><ul><li>Refer to the official documentation: <strong><a href=\"https://cesium.com/docs/cesiumjs-ref-doc/ParticleSystem.html\">ParticleSystem</a></strong></li></ul>", 6);

function vc_primitive_particlevue_type_template_id_4e9b3426_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_cesium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("vue-cesium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", vc_primitive_particlevue_type_template_id_4e9b3426_hoisted_1, [vc_primitive_particlevue_type_template_id_4e9b3426_hoisted_2, vc_primitive_particlevue_type_template_id_4e9b3426_hoisted_3, _hoisted_4, _hoisted_5, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-particle.md?vue&type=template&id=4e9b3426

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/en-US/primitives/vc-primitive-particle.md?vue&type=script&lang=ts


/* harmony default export */ var vc_primitive_particlevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "vue-cesium-demo0": function () {
      var _renderList = vue_esm_browser["M" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _createVNode = vue_esm_browser["n" /* createVNode */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _createTextVNode = vue_esm_browser["m" /* createTextVNode */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Unload");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Load");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("Reload");

      function render(_ctx, _cache) {
        var _component_vc_primitive_particle = _resolveComponent("vc-primitive-particle");

        var _component_vc_viewer = _resolveComponent("vc-viewer");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_row, {
          ref: "viewerContainer",
          class: "demo-viewer"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_vc_viewer, {
              onReady: _ctx.onViewerReady,
              shouldAnimate: ""
            }, {
              default: _withCtx(function () {
                return [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.options, function (option, index) {
                  return _openBlock(), _createBlock(_component_vc_primitive_particle, {
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
                }), 128))];
              }),
              _: 1
            }, 8, ["onReady"]), _createVNode(_component_el_row, {
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
            particleCanvas: null,
            options: [],
            list: []
          };
        },
        methods: {
          setItemRef: function setItemRef(el) {
            this.list.indexOf(el) === -1 && this.list.push(el);
          },
          onViewerReady: function onViewerReady(_ref) {
            var Cesium = _ref.Cesium,
                viewer = _ref.viewer;
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
            var options = [];

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
          createFirework: function createFirework(offset, color, bursts) {
            var emitterModelMatrixScratch = new Cesium.Matrix4();
            var position = Cesium.Cartesian3.add(this.emitterInitialLocation, offset, new Cesium.Cartesian3());
            var emitterModelMatrix = Cesium.Matrix4.fromTranslation(position, emitterModelMatrixScratch);
            var particleToWorld = Cesium.Matrix4.multiply(this.modelMatrix, emitterModelMatrix, new Cesium.Matrix4());
            var worldToParticle = Cesium.Matrix4.inverseTransformation(particleToWorld, particleToWorld);
            var size = Cesium.Math.randomBetween(this.minimumExplosionSize, this.maximumExplosionSize);
            var particlePositionScratch = new Cesium.Cartesian3();

            var force = function force(particle) {
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
          getImage: function getImage() {
            var particleCanvas = this.particleCanvas;

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
          onComplete: function onComplete(e) {
            console.log(e);
          },
          onClicked: function onClicked(e) {
            console.log(e);
          },
          unload: function unload() {
            this.list.forEach(function (v) {
              v.unload();
            });
          },
          load: function load() {
            this.list.forEach(function (v) {
              v.load();
            });
          },
          reload: function reload() {
            this.list.forEach(function (v) {
              v.reload();
            });
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-particle.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/primitives/vc-primitive-particle.md



vc_primitive_particlevue_type_script_lang_ts.render = vc_primitive_particlevue_type_template_id_4e9b3426_render

/* harmony default export */ var vc_primitive_particle = __webpack_exports__["default"] = (vc_primitive_particlevue_type_script_lang_ts);

/***/ })

}]);