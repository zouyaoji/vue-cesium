/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-16 18:52:39
 * @LastEditTime: 2024-10-09 14:57:31
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\packages\shared\analyses\Viewshed.ts
 */

import type { VcViewshedOpts } from '@vue-cesium/utils/drawing-types'
import { DebugCameraPrimitive } from '../src'

class Viewshed {
  _scene: Cesium.Scene
  _frustum: Cesium.PerspectiveFrustum
  _spotLightCamera: Cesium.Camera
  _viewshedShadowMap: Cesium.ShadowMap
  _debugCameraPrimitive: DebugCameraPrimitive
  _enabledChangedEvent: Cesium.Event
  _position: Cesium.Cartesian3
  _offsetHeight: number
  _visibleColor: Cesium.Color
  _invisibleColor: Cesium.Color
  _showGridLine: boolean
  _fovH: number
  _fovV: number
  constructor(scene: Cesium.Scene, options?: VcViewshedOpts) {
    const {
      defined,
      DeveloperError,
      PerspectiveFrustum,
      Math: CesiumMath,
      Camera,
      ShadowMap,
      ShadowMode,
      Event,
      Cartesian3,
      Color
    } = Cesium
    if (!defined(scene)) {
      throw new DeveloperError('scene is required.')
    }
    this._scene = scene
    this._frustum = new PerspectiveFrustum()
    this._frustum.fov = CesiumMath.PI / 3
    this._frustum.aspectRatio = 3
    this._frustum.near = 1
    this._frustum.far = 400
    this._spotLightCamera = new Camera(this._scene)
    this._frustum.clone(this._spotLightCamera.frustum as Cesium.PerspectiveFrustum)
    this._viewshedShadowMap = new ShadowMap({
      context: (this._scene as any).context,
      lightCamera: this._spotLightCamera,
      cascadesEnabled: !1
    })
    options = options || {}
    this._scene.globe.shadows = ShadowMode.ENABLED
    ;(this._viewshedShadowMap as any)._terrainBias.depthBias = 0
    this._debugCameraPrimitive = new DebugCameraPrimitive({})
    this._enabledChangedEvent = new Event()
    this._position = new Cartesian3()
    this._offsetHeight = options.offsetHeight ?? 1.8
    this._visibleColor = options.visibleColor as Cesium.Color ?? new Color(0, 1, 0, 1)
    this._invisibleColor = options.invisibleColor as Cesium.Color ?? new Color(1, 0, 0, 1)
    ;(this._viewshedShadowMap as any)._viewshedColors = {
      visible: this._visibleColor,
      invisible: this._invisibleColor
    }
    this._showGridLine = options.showGridLine
    this._debugCameraPrimitive.show = this._showGridLine
    this._debugCameraPrimitive.lineColor = options.lineColor as Cesium.Color ?? new Color(1, 1, 1, 0.4)
    this._debugCameraPrimitive.faceColor = options.faceColor as Cesium.Color ?? new Color(1, 1, 1, 0.1)
  }

  get frustum() {
    return this._frustum
  }

  get fovH() {
    return this._fovH
  }

  set fovH(e) {
    if (Number.isNaN(e) || void 0 === e || e == null || e < 0 || e >= Math.PI) {
      throw new Error('fovH must be in the range [0, PI).')
    }
    this._fovH = Number(e)
    this.frustum.aspectRatio = Math.tan(0.5 * this._fovH) / Math.tan(0.5 * this._fovV)
    this.frustum.fov = this._fovH > this._fovV ? this._fovH : this._fovV
  }

  get fovV() {
    return this._fovV
  }

  set fovV(e) {
    if (Number.isNaN(e) || void 0 === e || e == null || e < 0 || e >= Math.PI) {
      throw new Error('fovV must be in the range [0, PI).')
    }

    this._fovV = Number(e)
    this.frustum.aspectRatio = Math.tan(0.5 * this._fovH) / Math.tan(0.5 * this._fovV)
    this.frustum.fov = this._fovH > this._fovV ? this._fovH : this._fovV
  }

  get near() {
    return this.frustum.near
  }

  set near(e) {
    this.frustum.near !== e && (this.frustum.near = e)
  }

  get far() {
    return this.far.near
  }

  set far(e) {
    this.frustum.far !== e && (this.frustum.far = e)
  }

  get position() {
    return this._position
  }

  set position(e) {
    if (e instanceof Cesium.Cartesian3) {
      this.setView({
        destination: e.clone(),
        orientation: {
          heading: this._spotLightCamera.heading,
          pitch: this._spotLightCamera.pitch,
          roll: this._spotLightCamera.roll
        }
      })
    }
  }

  get offsetHeight() {
    return this._offsetHeight
  }

  set offsetHeight(e) {
    if (Number.isNaN(e) || e == null || e == null) {
      throw new Error('Unacceptable offset.')
    }

    this._offsetHeight = Number(e)
    this.setView({
      destination: this._position.clone(),
      orientation: {
        heading: this._spotLightCamera.heading,
        pitch: this._spotLightCamera.pitch,
        roll: this._spotLightCamera.roll
      }
    })
  }

  get heading() {
    return this._spotLightCamera.heading
  }

  set heading(e) {
    this._spotLightCamera.heading !== e
    && this._spotLightCamera.setView({
      destination: this._spotLightCamera.positionWC,
      orientation: {
        heading: e,
        pitch: this._spotLightCamera.pitch,
        roll: this._spotLightCamera.roll
      }
    })
  }

  get pitch() {
    return this._spotLightCamera.pitch
  }

  set pitch(e) {
    this._spotLightCamera.pitch !== e
    && this._spotLightCamera.setView({
      destination: this._spotLightCamera.positionWC,
      orientation: {
        heading: this._spotLightCamera.heading,
        pitch: e,
        roll: this._spotLightCamera.roll
      }
    })
  }

  get roll() {
    return this._spotLightCamera.roll
  }

  set roll(e) {
    this._spotLightCamera.roll !== e
    && this._spotLightCamera.setView({
      destination: this._spotLightCamera.positionWC,
      orientation: {
        heading: this._spotLightCamera.heading,
        pitch: this._spotLightCamera.pitch,
        roll: e
      }
    })
  }

  get shadowMap() {
    return this._viewshedShadowMap
  }

  get lightCamera() {
    return this._spotLightCamera
  }

  get enabled() {
    return this._viewshedShadowMap.enabled
  }

  set enabled(e) {
    if (this._viewshedShadowMap.enabled !== e) {
      if (e) {
        // this._debugCameraPrimitive.show = true
        this._viewshedShadowMap.enabled = true
        this._viewshedShadowMap._pointLightRadius = this._spotLightCamera.frustum.far
      }
      else {
        // this._debugCameraPrimitive.show = false
        this._viewshedShadowMap.enabled = false
      }
      this._enabledChangedEvent.raiseEvent(e)
    }
  }

  get enabledChangedEvent() {
    return this._enabledChangedEvent
  }

  get visibleColor() {
    return this._visibleColor
  }

  set visibleColor(e: Cesium.Color) {
    this._visibleColor = e
    ;(this._viewshedShadowMap as any)._viewshedColors.visible = e
  }

  get invisibleColor() {
    return this._invisibleColor
  }

  set invisibleColor(e: Cesium.Color) {
    this._invisibleColor = e
    ;(this._viewshedShadowMap as any)._viewshedColors.invisible = e
  }

  get showGridLine() {
    return this._showGridLine
  }

  set showGridLine(e) {
    this._showGridLine = e
    this._debugCameraPrimitive.show = e
  }

  get faceColor() {
    return this._debugCameraPrimitive.faceColor
  }

  set faceColor(e) {
    this._debugCameraPrimitive.faceColor = e
  }

  get lineColor() {
    return this._debugCameraPrimitive.lineColor
  }

  set lineColor(e) {
    this._debugCameraPrimitive.lineColor = e
  }

  update(frameState) {
    if (this._viewshedShadowMap.enabled) {
      const { ShadowMode, Matrix3, Matrix4, Math: CesiumMath } = Cesium
      this._scene.globe.shadows !== ShadowMode.ENABLED && (this._scene.globe.shadows = ShadowMode.ENABLED)
      frameState.shadowMaps.unshift(this._viewshedShadowMap)
      if (!this._frustum.equals(this._spotLightCamera.frustum as Cesium.PerspectiveFrustum)) {
        this._frustum.clone(this._spotLightCamera.frustum as Cesium.PerspectiveFrustum)
        this._viewshedShadowMap._pointLightRadius = this._frustum.far
        ;(this.shadowMap as any)._boundingSphere.radius = Math.random()
      }

      if (this._debugCameraPrimitive.show) {
        const modelMatrix = this._debugCameraPrimitive.modelMatrix
        Matrix4.clone(this._spotLightCamera.inverseViewMatrix, modelMatrix)
        const r0 = Matrix3.fromRotationZ(0.5 * CesiumMath.PI)
        const r1 = Matrix3.fromRotationY(0.5 * CesiumMath.PI)
        const rotation = new Matrix3()
        Matrix3.multiply(r0, r1, rotation)
        Matrix4.multiplyByMatrix3(modelMatrix, rotation, modelMatrix)
        Matrix4.multiplyByUniformScale(modelMatrix, this._spotLightCamera.frustum.far, modelMatrix)
        const frustum = this._spotLightCamera.frustum as Cesium.PerspectiveFrustum
        this._debugCameraPrimitive.fovV = frustum.aspectRatio <= 1 ? frustum.fov : 2 * Math.atan(Math.tan(0.5 * frustum.fov) / frustum.aspectRatio)
        this._debugCameraPrimitive.fovH = frustum.aspectRatio > 1 ? frustum.fov : 2 * Math.atan(Math.tan(0.5 * frustum.fov) * frustum.aspectRatio)
        this._debugCameraPrimitive.segmentH = Number.parseInt(String(this._debugCameraPrimitive.fovH / (Math.PI / 30))) || 1
        this._debugCameraPrimitive.segmentV = Number.parseInt(String(this._debugCameraPrimitive.fovV / (Math.PI / 30))) || 1
        this._debugCameraPrimitive.update(frameState)
      }
    }
  }

  setView(options) {
    options = options || {}
    const destination = options.destination
    if (destination instanceof Cesium.Cartesian3) {
      this._position = destination.clone()
      const offsetHeight = this._offsetHeight
      const cartographic = Cesium.Cartographic.fromCartesian(destination, this._scene.globe.ellipsoid)
      if (cartographic) {
        cartographic.height = cartographic.height + offsetHeight
        const cartesian = Cesium.Cartesian3.fromRadians(
          cartographic.longitude,
          cartographic.latitude,
          cartographic.height,
          this._scene.globe.ellipsoid
        )
        options.destination = cartesian
      }
    }

    this._spotLightCamera.setView(options)
  }

  isDestroyed() {
    return false
  }

  destroy() {
    this._debugCameraPrimitive && this._debugCameraPrimitive.destroy()
    this._viewshedShadowMap && this._viewshedShadowMap.destroy()
    Cesium.destroyObject(this)
  }
}

export default Viewshed
