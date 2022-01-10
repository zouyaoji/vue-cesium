/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-11-19 14:20:47
 * @LastEditTime: 2022-01-07 11:40:33
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\shared\src\PolygonPrimitive.ts
 */

class PolygonPrimitive {
  show: boolean
  _id: string
  _positions: Array<Cesium.Cartesian3>
  _boundingSphere: Cesium.BoundingSphere
  _primitive: Cesium.Primitive | Cesium.GroundPrimitive | undefined
  _update: boolean
  _ellipsoid: Cesium.Ellipsoid
  _clampToGround: boolean
  _classificationType: number
  _allowPicking: boolean
  _asynchronous: boolean
  _polygonHierarchy: Cesium.PolygonHierarchy
  _appearance: Cesium.Appearance
  _depthFailAppearance: Cesium.Appearance

  constructor(options) {
    const { defined, defaultValue, Color, createGuid, BoundingSphere, Ellipsoid, ClassificationType } = Cesium
    options = defaultValue(options, {})
    this.show = defaultValue(options.show, true)
    this._id = defined(options.id) ? options.id : createGuid()
    this._ellipsoid = defaultValue(options.ellipsoid, Ellipsoid.WGS84)
    this._appearance = defaultValue(options.appearance, new Cesium.MaterialAppearance())
    this._depthFailAppearance = options.depthFailAppearance
    this._positions = defaultValue(options.positions, [])
    this._polygonHierarchy = options.polygonHierarchy
    this._clampToGround = defaultValue(options.clampToGround, false)
    this._classificationType = defaultValue(options.classificationType, ClassificationType.BOTH)
    this._allowPicking = defaultValue(options.allowPicking, true)
    this._asynchronous = defaultValue(options.asynchronous, false)
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

  get polygonHierarchy() {
    return this._polygonHierarchy
  }
  set polygonHierarchy(val) {
    this._polygonHierarchy = val
    this._update = true
  }

  get appearance() {
    return this._appearance
  }
  set appearance(val) {
    this._appearance = val
    if (this._primitive !== undefined) {
      this._primitive.appearance = val
    }
  }

  get depthFailAppearance() {
    return this._depthFailAppearance
  }
  set depthFailAppearance(val) {
    this._depthFailAppearance = val
    if (this._primitive !== undefined && this._primitive instanceof Cesium.Primitive) {
      this._primitive.depthFailAppearance = val
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
  set clampToGround(val) {
    this._clampToGround = val
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
  set allowPicking(val) {
    this._allowPicking = val
  }

  get asynchronous() {
    return this._asynchronous
  }
  set asynchronous(val) {
    this._asynchronous = val
  }

  async update(frameState) {
    if (this.show) {
      const positions = this._polygonHierarchy ? this._polygonHierarchy.positions : this._positions
      if (positions.length < 3) {
        this._primitive && this._primitive.destroy()
        this._primitive = undefined
      } else {
        if (this._update) {
          this._update = false

          let promise
          if (this._clampToGround) {
            promise = this._createGroundPolygon()
          } else {
            promise = this._createPolygon()
          }
          promise.then(primitive => {
            this._primitive && this._primitive.destroy()
            this._primitive = undefined
            this._primitive = primitive
            ;(this._primitive as any)._vcParent = this
            this._boundingSphere = Cesium.BoundingSphere.fromPoints(positions, this._boundingSphere)
          })
        }
        this._primitive && (this._primitive as any).update(frameState)
      }
    }
  }

  async _createPolygon() {
    const { Primitive, GeometryInstance, CoplanarPolygonGeometry, Cartesian3 } = Cesium
    return new Primitive({
      geometryInstances: new GeometryInstance({
        geometry: this._polygonHierarchy
          ? new CoplanarPolygonGeometry({
              polygonHierarchy: this._polygonHierarchy,
              ellipsoid: this._ellipsoid
            })
          : CoplanarPolygonGeometry.fromPositions({
              positions: this._positions.map(function (e) {
                return Cartesian3.clone(e)
              }),
              ellipsoid: this._ellipsoid
            }),
        id: this._id
      }),
      appearance: this._appearance,
      depthFailAppearance: this._depthFailAppearance,
      allowPicking: this._allowPicking,
      asynchronous: this._asynchronous
    })
  }

  async _createGroundPolygon() {
    const { GroundPrimitive, GeometryInstance, PolygonGeometry, Cartesian3 } = Cesium
    await Cesium.GroundPrimitive.initializeTerrainHeights()
    return new GroundPrimitive({
      geometryInstances: new GeometryInstance({
        geometry: this._polygonHierarchy
          ? new PolygonGeometry({
              polygonHierarchy: this._polygonHierarchy,
              ellipsoid: this._ellipsoid
            })
          : PolygonGeometry.fromPositions({
              positions: this._positions.map(function (e) {
                return Cartesian3.clone(e)
              }),
              ellipsoid: this._ellipsoid
            }),
        id: this._id
      }),
      appearance: this._appearance,
      allowPicking: this._allowPicking,
      asynchronous: this._asynchronous,
      classificationType: this._classificationType
    })
  }

  isDestroyed() {
    return false
  }

  destroy() {
    this._primitive && this._primitive.destroy()
    this._primitive = undefined
    return Cesium.destroyObject(this)
  }
}

export default PolygonPrimitive
