
const methods = {
  registerEvents (flag) {
    const { viewer, enbaleEvent } = this
    if (!enbaleEvent) {
      return
    }
    if (flag) {
      const handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas)

      const listenerMousedown = this.$listeners['mousedown']
      if (Cesium.defined(listenerMousedown)) {
        handler.setInputAction(this.LEFT_DOWN, Cesium.ScreenSpaceEventType.LEFT_DOWN)
        handler.setInputAction(this.RIGHT_DOWN, Cesium.ScreenSpaceEventType.RIGHT_DOWN)
        handler.setInputAction(this.MIDDLE_DOWN, Cesium.ScreenSpaceEventType.MIDDLE_DOWN)
      }

      const listenerMouseup = this.$listeners['mouseup']
      if (Cesium.defined(listenerMouseup)) {
        handler.setInputAction(this.LEFT_UP, Cesium.ScreenSpaceEventType.LEFT_UP)
        handler.setInputAction(this.RIGHT_UP, Cesium.ScreenSpaceEventType.RIGHT_UP)
        handler.setInputAction(this.MIDDLE_UP, Cesium.ScreenSpaceEventType.MIDDLE_UP)
      }

      const listenerClick = this.$listeners['click']
      if (Cesium.defined(listenerClick)) {
        handler.setInputAction(this.LEFT_CLICK, Cesium.ScreenSpaceEventType.LEFT_CLICK)
        handler.setInputAction(this.RIGHT_CLICK, Cesium.ScreenSpaceEventType.RIGHT_CLICK)
        handler.setInputAction(this.MIDDLE_CLICK, Cesium.ScreenSpaceEventType.MIDDLE_CLICK)
      }

      const listenerDblclick = this.$listeners['dblclick']
      if (Cesium.defined(listenerDblclick)) {
        handler.setInputAction(this.LEFT_DOUBLE_CLICK, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
      }

      const listenerMousemove = this.$listeners['mousemove']
      if (Cesium.defined(listenerMousemove)) {
        handler.setInputAction(this.MOUSE_MOVE, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
      }

      // handler.setInputAction(this.PINCH_START, Cesium.ScreenSpaceEventType.PINCH_START)
      // handler.setInputAction(this.PINCH_END, Cesium.ScreenSpaceEventType.PINCH_END)
      // handler.setInputAction(this.PINCH_MOVE, Cesium.ScreenSpaceEventType.PINCH_MOVE)
      this.handler = handler
    } else {
      this.handler.destroy()
    }
  },
  LEFT_DOWN (movement) {
    this.getPickedFeature('mousedown', movement.position, 0)
  },
  RIGHT_DOWN (movement) {
    this.getPickedFeature('mousedown', movement.position, 2)
  },
  MIDDLE_DOWN (movement) {
    this.getPickedFeature('mousedown', movement.position, 1)
  },
  LEFT_UP (movement) {
    this.getPickedFeature('mouseup', movement.position, 0)
  },
  RIGHT_UP (movement) {
    this.getPickedFeature('mouseup', movement.position, 2)
  },
  MIDDLE_UP (movement) {
    this.getPickedFeature('mouseup', movement.position, 1)
  },
  LEFT_CLICK (movement) {
    this.getPickedFeature('click', movement.position, 0)
  },
  RIGHT_CLICK (movement) {
    this.getPickedFeature('click', movement.position, 2)
  },
  MIDDLE_CLICK (movement) {
    this.getPickedFeature('click', movement.position, 1)
  },
  LEFT_DOUBLE_CLICK (movement) {
    this.getPickedFeature('dblclick', movement.position, 0)
  },
  MOUSE_MOVE (movement) {
    this.getPickedFeature('mousemove', movement.endPosition, 0)
  },
  getPickedFeature (type, position, button) {
    const { viewer, cesiumObject } = this
    var pickedFeature = viewer.scene.pick(position)
    if (!Cesium.defined(pickedFeature)) {
      return
    }
    let intersection
    const scene = viewer.scene
    if (scene.mode === Cesium.SceneMode.SCENE3D) {
      let ray = scene.camera.getPickRay(position)
      intersection = scene.globe.pick(ray, scene)
    } else {
      intersection = scene.camera.pickEllipsoid(
        position,
        Cesium.Ellipsoid.WGS84
      )
    }

    if (pickedFeature.id === cesiumObject || pickedFeature.primitive === cesiumObject || pickedFeature.collection === cesiumObject ||
      getParentCollection(pickedFeature.collection || pickedFeature.primitive, cesiumObject) === cesiumObject ||
      (cesiumObject._billboardCollection && cesiumObject._billboardCollection === pickedFeature.collection)) {
      this.$emit(type, { type: `on${type}`, windowPosition: position, surfacePosition: intersection, target: pickedFeature, button })
    }
  }
}
const getParentCollection = (e, parent) =>
  e._vcParent && e !== parent ? getParentCollection(e._vcParent, parent) : e

export default {
  methods
}
