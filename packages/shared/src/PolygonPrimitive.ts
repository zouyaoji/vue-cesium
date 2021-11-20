/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-11-19 14:20:47
 * @LastEditTime: 2021-11-20 20:43:02
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\shared\src\PolygonPrimitive.ts
 */

class PolygonPrimitive {
  show: boolean
  _id: string
  _color: Cesium.Color
  _depthFailColor: Cesium.Color
  _positions: Array<Cesium.Cartesian3>
  _boundingSphere: Cesium.BoundingSphere
  _primitive: Cesium.Primitive | Cesium.GroundPrimitive | void
  _update: boolean
  _ellipsoid: Cesium.Ellipsoid
  _clampToGround: boolean
  _classificationType: number
  _allowPicking: boolean
  constructor(options) {
    const { defined, defaultValue, Color, createGuid, BoundingSphere, Ellipsoid, ClassificationType } = Cesium
    options = defaultValue(options, {})
    this.show = defaultValue(options.show, true)
    this._id = defined(options.id) ? options.id : createGuid()
    this._ellipsoid = defaultValue(options.ellipsoid, Ellipsoid.WGS84)
    this._color = Color.clone(defaultValue(options.color, Color.WHITE))
    this._depthFailColor = Color.clone(defaultValue(options.depthFailColor, this._color))
    this._positions = defaultValue(options.positions, [])
    this._clampToGround = defaultValue(options.clampToGround, false)
    this._classificationType = defaultValue(options.classificationType, ClassificationType.BOTH)
    this._allowPicking = defaultValue(options.allowPicking, true)
    this._boundingSphere = new BoundingSphere()
    this._primitive = void 0
    this._update = true
  }

  get positions() {
    return this._positions
  }
  set positions(val) {
    this._positions = val
    this._update = true
  }

  get color() {
    return this._color
  }
  set color(e: Cesium.Color) {
    const { Color } = Cesium
    !Color.equals(this._color, e) && (this._color = Color.clone(e, this._color))
    if (this._primitive !== undefined) {
      let t = this._primitive.getGeometryInstanceAttributes(this._id).color
      t = e.toBytes(t)
      this._primitive.getGeometryInstanceAttributes(this._id).color = t
    }
  }

  get depthFailColor() {
    return this._depthFailColor
  }
  set depthFailColor(e: Cesium.Color) {
    const { Color } = Cesium
    !Color.equals(this._depthFailColor, e) && (this._depthFailColor = Color.clone(e, this._depthFailColor))
    if (this._primitive !== undefined) {
      let t = this._primitive.getGeometryInstanceAttributes(this._id)._depthFailColor
      t = e.toBytes(t)
      this._primitive.getGeometryInstanceAttributes(this._id)._depthFailColor = t
    }
  }

  get id() {
    return this._id
  }
  set id(id) {
    this._id = id
  }

  get boundingVolume() {
    return this._boundingSphere
  }

  get ellipsoid() {
    return this._ellipsoid
  }

  get clampToGround() {
    return this._clampToGround
  }

  get classificationType() {
    return this._classificationType
  }
  set classificationType(e) {
    this._classificationType = e
    this._update = true
  }

  get allowPicking() {
    return this._allowPicking
  }

  update(frameState) {
    if (this.show) {
      const positions = this._positions
      if (positions.length < 3) {
        this._primitive = this._primitive && this._primitive.destroy()
      } else {
        if (this._update) {
          this._primitive = this._primitive && this._primitive.destroy()
          this._primitive = this._clampToGround ? this._createGroundPolygon() : this._createPolygon()
          ;(this._primitive as any)._vcParent = this
          this._boundingSphere = Cesium.BoundingSphere.fromPoints(positions, this._boundingSphere)
        }
        ;(this._primitive as any).update(frameState)
      }
    }
  }

  _createPolygon() {
    const { Primitive, GeometryInstance, CoplanarPolygonGeometry, Cartesian3, PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium
    return new Primitive({
      geometryInstances: new GeometryInstance({
        geometry: CoplanarPolygonGeometry.fromPositions({
          positions: this._positions.map(function (e) {
            return Cartesian3.clone(e)
          }),
          vertexFormat: PerInstanceColorAppearance.FLAT_VERTEX_FORMAT,
          ellipsoid: this._ellipsoid
        }),
        attributes: {
          color: ColorGeometryInstanceAttribute.fromColor(this._color),
          depthFailColor: ColorGeometryInstanceAttribute.fromColor(this._depthFailColor)
        },
        id: this._id
      }),
      appearance: createAppearance(this._color),
      depthFailAppearance: createAppearance(this._color),
      allowPicking: this._allowPicking,
      asynchronous: !1
    })
  }

  _createGroundPolygon() {
    const { GroundPrimitive, GeometryInstance, PolygonGeometry, Cartesian3, PerInstanceColorAppearance, ColorGeometryInstanceAttribute } = Cesium
    return new GroundPrimitive({
      geometryInstances: new GeometryInstance({
        geometry: PolygonGeometry.fromPositions({
          positions: this._positions.map(function (e) {
            return Cartesian3.clone(e)
          }),
          vertexFormat: PerInstanceColorAppearance.FLAT_VERTEX_FORMAT,
          ellipsoid: this._ellipsoid
        }),
        attributes: {
          color: ColorGeometryInstanceAttribute.fromColor(this._color)
        },
        id: this._id
      }),
      appearance: createAppearance(this._color),
      allowPicking: this._allowPicking,
      asynchronous: !1,
      classificationType: this._classificationType
    })
  }

  isDestroyed() {
    return false
  }

  destroy() {
    this._primitive = this._primitive && this._primitive.destroy()
    return Cesium.destroyObject(this)
  }
}

function createAppearance(color: Cesium.Color) {
  return new Cesium.PerInstanceColorAppearance({
    flat: true,
    closed: false,
    translucent: color.alpha < 1
  })
}

export default PolygonPrimitive
