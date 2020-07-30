class PolylineTrailMaterialProperty {
  constructor (color, duration, imageUrl, loop) {
    if (!Object.getOwnPropertyDescriptor(PolylineTrailMaterialProperty.prototype, 'color')) {
      Object.defineProperties(PolylineTrailMaterialProperty.prototype, {
        color: Cesium.createPropertyDescriptor('color')
      })
    }
    this._definitionChanged = new Cesium.Event()
    this._color = undefined
    this.color = color
    this._duration = duration
    this._time = (new Date()).getTime()
    this._imageUrl = imageUrl
    this._loop = loop
    this.init()
  }

  init () {
    const PolylineTrailType = 'PolylineTrail'
    const PolylineTrailImage = this._imageUrl
    const PolylineTrailSource = `
      czm_material czm_getMaterial(czm_materialInput materialInput)
      {
          czm_material material = czm_getDefaultMaterial(materialInput);
          vec2 st = materialInput.st;\n\
          vec4 colorImage = texture2D(image, vec2(fract(st.s - time), st.t));
          material.alpha = colorImage.a * color.a;
          material.diffuse = (colorImage.rgb+color.rgb)/2.0;
          return material;
      }`
    // material.alpha:透明度; material.diffuse：颜色;
    Cesium.Material._materialCache.addMaterial(PolylineTrailType, {
      fabric: {
        type: PolylineTrailType,
        uniforms: {
          color: new Cesium.Color(1, 0, 0, 1),
          image: PolylineTrailImage,
          time: 0,
          repeat: new Cesium.Cartesian2(1, 1),
          axisY: false
        },
        source: PolylineTrailSource
      },
      translucent () {
        return true
      }
    })
  }

  getType () {
    return 'PolylineTrail'
  }

  getValue (time, result) {
    if (!Cesium.defined(result)) {
      result = {}
    }

    if (this.lastTime >= 0.99 && !this._loop) {
      return result
    }
    result.color = Cesium.Property.getValueOrClonedDefault(this._color, time, Cesium.Color.WHITE, result.color)
    result.image = this._imageUrl
    result.time = (((new Date()).getTime() - this._time) % this._duration) / this._duration
    this.lastTime = result.time
    return result
  }

  equals (other) {
    return this === other || (other instanceof PolylineTrailMaterialProperty && Cesium.Property.equals(this._color, other._other))
  }

  get isConstant () {
    return false
  }

  get definitionChanged () {
    return this._definitionChanged
  }
}
export default PolylineTrailMaterialProperty
