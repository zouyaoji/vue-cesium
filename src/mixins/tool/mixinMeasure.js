import cmp from '../virtualCmp'
import { makeColor } from '../../utils/util'
const props = {
  mode: {
    type: Number,
    default: 1
  },
  font: {
    type: String,
    default: '100 20px SimSun'
  },
  fillColor: {
    type: String | Object | Array,
    default: 'WHITE'
  },
  labelStyle: {
    type: Number,
    default: 2
  },
  showBackground: {
    type: Boolean,
    default: true
  },
  backgroundColor: {
    type: String | Object | Array,
    default: 'rgba(38, 38, 38, 0.85)'
  },
  outlineWidth: {
    type: Number,
    default: 1
  },
  outlineColor: {
    type: String | Object | Array,
    default: 'BLUE'
  },
  pixelOffset: {
    type: Object,
    default: () => {
      return { x: 15, y: -20 }
    }
  },
  pointColor: {
    type: String | Object | Array,
    default: 'rgb(255,229,0)'
  },
  pointPixelSize: {
    type: Number,
    default: 8
  },
  polylineColor: {
    type: String | Object | Array,
    default: '#51ff00'
  },
  polylineWidth: {
    type: Number,
    default: 2
  },
  depthTest: {
    type: Boolean,
    default: false
  }
}
const watch = {
  measuring (val) {
    const { polylines, startNew, type } = this
    const polyline = polylines[polylines.length - 1]
    if (!val && polyline && !polyline.positions.length) {
      this.polylines.pop()
    } else if (val) {
      const measureCmpNames = []
      switch (type) {
        case 'distanceMeasuring':
          measureCmpNames.push('vc-measure-height')
          measureCmpNames.push('vc-measure-area')
          break
        case 'areaMeasuring':
          measureCmpNames.push('vc-measure-distance')
          measureCmpNames.push('vc-measure-height')
          break
        case 'heightMeasuring':
          measureCmpNames.push('vc-measure-distance')
          measureCmpNames.push('vc-measure-area')
          break
      }
      const drawCmpNames = ['vc-handler-draw-polyline', 'vc-handler-draw-point', 'vc-handler-draw-polygon']
      for (let $node of this.$parent.$slots.default || []) {
        if ($node.componentOptions && measureCmpNames.indexOf($node.componentOptions.tag) !== -1) {
          $node.child.measuring = false
        }
        if ($node.componentOptions && drawCmpNames.indexOf($node.componentOptions.tag) !== -1) {
          $node.child.drawing = false
        }
      }
      startNew()
    }
    this.viewer.canvas.setAttribute('style', val ? 'cursor: crosshair' : 'cursor: auto')
    const listener = this.$listeners['activeEvt']
    listener && this.$emit('activeEvt', { type: type, isActive: val })
  }
}

const methods = {
  async createCesiumObject () {
    const { viewer } = this
    viewer.scene.frameState.morphTime = 0
    const handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas)
    handler.setInputAction(this.LEFT_CLICK, Cesium.ScreenSpaceEventType.LEFT_CLICK)
    handler.setInputAction(this.MOUSE_MOVE, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
    handler.setInputAction(this.RIGHT_CLICK, Cesium.ScreenSpaceEventType.RIGHT_CLICK)
    this.handler = handler
    return this.polylines
  },
  async mount () {
    return true
  },
  async unmount () {
    return true
  },
  LEFT_CLICK (movement) {
    if (!this.measuring) {
      return
    }
    const { Cesium, viewer, polylines, type, onMeasureEvt } = this
    let cartesian = viewer.scene.pickPosition(movement.position)
    if (!Cesium.defined(cartesian)) {
      return
    }

    const nIndex = polylines.length - 1
    const polyline = polylines[nIndex]

    switch (type) {
      case 'distanceMeasuring':
        polyline.positions.push(cartesian)
        let distance = polyline.distance
        polyline.distances.push(distance)
        onMeasureEvt(polyline, nIndex)
        break
      case 'areaMeasuring':
        polyline.positions.push(cartesian)
        onMeasureEvt(polyline, nIndex)
        break
      case 'heightMeasuring':
        if (polyline.positions.length === 0) {
          polyline.positions.push(cartesian)
          this.startPoint = cartesian
        }
        onMeasureEvt(polyline, this.labels)
        break
    }
  },
  async MOUSE_MOVE (movement) {
    if (!this.measuring) {
      return
    }
    const { viewer, polylines, onMeasureEvt, type } = this
    if (!polylines.length) {
      return
    }
    let nIndex = polylines.length - 1
    const polyline = polylines[nIndex]
    if (!polyline.positions.length) {
      return
    }
    let cartesian = viewer.scene.pickPosition(movement.endPosition)
    if (!Cesium.defined(cartesian)) {
      return
    }
    const listener = this.$listeners['movingEvt']
    listener && this.$emit('movingEvt', movement.endPosition, type)
    if (type === 'distanceMeasuring' || type === 'areaMeasuring') {
      if (polyline.positions.length >= 2) {
        polyline.positions.pop()
        polyline.distances && polyline.distances.pop()
      }
      polyline.positions.push(cartesian)
      if (type === 'distanceMeasuring') {
        let distance = this.getDistance(polyline.positions)
        polyline.distances.push(distance)
        polyline.distance = distance
        nIndex = polylines.reduce((pre, cur) => {
          return pre + cur.positions.length - 1
        }, 0) - 1
      } else {
        polyline.area = this.getSurfaceArea(polyline.positions)
        polyline.projectedArea = this.getProjectedArea(polyline.positions)
      }
      await this.$nextTick()
      onMeasureEvt(polyline, nIndex)
    } else {
      const { labels } = this
      let endPoint = cartesian
      let normalStart = {}
      Cesium.Cartesian3.normalize(this.startPoint, normalStart)
      let planeStart = new Cesium.Plane(normalStart, -Cesium.Cartesian3.distance(this.startPoint, new Cesium.Cartesian3(0, 0, 0)))
      let hypPoint = {}
      polyline.height = Cesium.Plane.getPointDistance(planeStart, endPoint)
      let labelPositonHeight = {}
      let labelPositonH = {}
      let labelPositonS = {}
      if (polyline.height >= 0) {
        Cesium.Plane.projectPointOntoPlane(planeStart, endPoint, hypPoint)
        Cesium.Cartesian3.midpoint(endPoint, hypPoint, labelPositonHeight)
        Cesium.Cartesian3.midpoint(this.startPoint, hypPoint, labelPositonH)
        polyline.distanceH = Cesium.Cartesian3.distance(this.startPoint, hypPoint)
      } else {
        let normalEnd = {}
        Cesium.Cartesian3.normalize(endPoint, normalEnd)
        let planeEnd = new Cesium.Plane(normalStart, -Cesium.Cartesian3.distance(endPoint, new Cesium.Cartesian3(0, 0, 0)))
        Cesium.Plane.projectPointOntoPlane(planeEnd, this.startPoint, hypPoint)
        Cesium.Cartesian3.midpoint(this.startPoint, hypPoint, labelPositonHeight)
        Cesium.Cartesian3.midpoint(endPoint, hypPoint, labelPositonH)
        polyline.distanceH = Cesium.Cartesian3.distance(endPoint, hypPoint)
      }
      polyline.distanceS = Cesium.Cartesian3.distance(this.startPoint, endPoint)
      Cesium.Cartesian3.midpoint(this.startPoint, endPoint, labelPositonS)
      polyline.height = Math.abs(polyline.height)
      if (polyline.positions.length !== 1) {
        polyline.positions.pop()
        polyline.positions.pop()
        labels.pop()
        labels.pop()
        labels.pop()
      }
      polyline.positions.push(endPoint)
      polyline.positions.push(hypPoint)
      let labelTextHeight = polyline.height > 1000 ? (polyline.height / 1000).toFixed(2) + 'km' : polyline.height.toFixed(2) + 'm'
      labels.push({
        text: this.$vc.lang.measure.verticalHeight + ': ' + labelTextHeight,
        position: labelPositonHeight
      })
      let labelTextH =
        polyline.distanceH > 1000 ? (polyline.distanceH / 1000).toFixed(2) + 'km' : polyline.distanceH.toFixed(2) + 'm'
      labels.push({
        text: this.$vc.lang.measure.horizontalDistance + ': ' + labelTextH,
        position: labelPositonH
      })
      let labelTextS =
        polyline.distanceS > 1000 ? (polyline.distanceS / 1000).toFixed(2) + 'km' : polyline.distanceS.toFixed(2) + 'm'
      labels.push({
        text: this.$vc.lang.measure.spaceDistance + ': ' + labelTextS,
        position: labelPositonS
      })
      await this.$nextTick()
      onMeasureEvt(polyline, labels)
    }
  },
  async RIGHT_CLICK (movement) {
    if (!this.measuring) {
      return
    }
    const { viewer, polylines, mode, startNew, onMeasureEvt, type } = this
    if (!polylines.length) {
      return
    }
    let nIndex = polylines.length - 1
    const polyline = polylines[nIndex]
    if (polyline.positions.length === 0) {
      return
    }
    let cartesian = viewer.scene.pickPosition(movement.position)
    if (!Cesium.defined(cartesian)) {
      return
    }
    if (type === 'distanceMeasuring') {
      polyline.positions.pop()
      polyline.distances.pop()
      const { getDistance } = this
      polyline.distance = getDistance(polyline.positions)
      if (polyline.positions.length === 1) {
        polyline.positions = []
      }
      nIndex = polylines.reduce((pre, cur) => {
        return pre + cur.positions.length - 1
      }, 0) - 1
    } else if (type === 'areaMeasuring') {
      polyline.positions.pop()
      const { getSurfaceArea, getProjectedArea } = this
      polyline.area = getSurfaceArea(polyline.positions)
      polyline.projectedArea = getProjectedArea(polyline.positions)
      if (polyline.positions.length <= 2) {
        polyline.positions = []
      }
    }

    if (mode === 0) {
      startNew()
    } else {
      this.measuring = false
    }

    await this.$nextTick()

    if (type === 'distanceMeasuring' || type === 'areaMeasuring') {
      onMeasureEvt(polyline, nIndex, true)
    } else {
      const { labels } = this
      onMeasureEvt(polyline, labels, true)
    }
  },
  startNew () {
    const { polylines, type } = this
    if (!Cesium.defined(polylines)) {
      return
    }
    const polyline = {
      positions: []
    }
    if (type === 'distanceMeasuring') {
      Object.assign(polyline, {
        distances: [],
        distance: 0
      })
    } else if (type === 'areaMeasuring') {
      Object.assign(polyline, {
        area: 0,
        projectedArea: 0
      })
    } else {
      Object.assign(polyline, {
        distanceH: 0,
        height: 0,
        distanceS: 0
      })
    }
    polylines.push(polyline)
  },
  onMeasureEvt (polyline, index, flag = false) {
    if (!this.depthTest) {
      const rs = Cesium.RenderState.fromCache({
        depthMask: true,
        depthTest: {
          enabled: false
        }
      })
      if (Cesium.SuperMapImageryProvider) {
        this.$refs.polylineCollection && (this.$refs.polylineCollection.cesiumObject._opaqueRS = rs)
      } else {
        this.$refs.polylineCollection && (this.$refs.polylineCollection.cesiumObject._opaqueRS.depthTest.enabled = false)
      }
      this.$refs.pointCollection && (this.$refs.pointCollection.cesiumObject._rsOpaque = rs)
      this.$refs.labelCollection.cesiumObject._billboardCollection._rsTranslucent = rs
      this.$refs.labelCollection.cesiumObject._backgroundBillboardCollection._rsTranslucent = rs

      const listener = this.$listeners['measureEvt']
      const { type } = this
      if (type === 'distanceMeasuring' || type === 'areaMeasuring') {
        listener &&
          this.$emit('measureEvt', {
            polyline: polyline,
            label: this.$refs.labelCollection.cesiumObject.get(index),
            type: type,
            finished: flag
          })
      } else {
        const labels = index
        let labelsResult = {
          labelHeight: this.$refs.labelCollection.cesiumObject.get(labels.length - 3),
          labelH: this.$refs.labelCollection.cesiumObject.get(labels.length - 2),
          labelS: this.$refs.labelCollection.cesiumObject.get(labels.length - 1)
        }
        listener && this.$emit('measureEvt', { polyline: polyline, label: labelsResult, type: 'heightMeasuring', finished: flag })
      }
    }
  },
  getPolylineMaterial (val) {
    return new Cesium.Material({
      fabric: {
        type: 'Color',
        uniforms: {
          color: makeColor(this.polylineColor)
        }
      }
    })
  }
}

export default {
  mixins: [cmp],
  props,
  watch,
  methods,
  created () {
    Object.defineProperties(this, {
      polyline: {
        enumerable: true,
        get: () => this.polyline
      }
    })
  },
  destroyed () {
    const { handler } = this
    if (handler) {
      handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK)
      handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE)
      handler.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK)
    }
  }
}
