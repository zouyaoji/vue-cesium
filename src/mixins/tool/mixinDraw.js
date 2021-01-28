import cmp from '../virtualCmp'
import '../../components/control/navigation/icon/icon-move'
import '../../components/control/navigation/icon/icon-add'
import '../../components/control/navigation/icon/icon-delete'
import VcIconSvg from '../../components/control/navigation/icon/VcIconSvg.vue'

const props = {
  mode: {
    type: Number,
    default: 1
  },
  show: {
    type: Boolean,
    default: true
  },
  pointColor: {
    type: String | Object | Array,
    default: 'rgb(255,229,0)'
  },
  pointPixelSize: {
    type: Number,
    default: 8
  },
  editable: {
    type: Boolean,
    default: false
  },
  showDrawTip: {
    type: Boolean,
    default: true
  }
}
const watch = {
  editable (val) {
    if (!val) {
      this.showToolbar = false
    } else {
      this.drawing = false
    }
  },
  async drawing (val) {
    let nextTick = false
    const { polylines, startNew, drawType, $parent, getParent } = this
    const polyline = polylines[polylines.length - 1]
    if (!val && polyline && !polyline.positions.length) {
      this.polylines.pop()
      this.showTooltip = false
    } else if (val) {
      const drawCmpNames = []
      switch (drawType) {
        case 'pointDrawing':
          drawCmpNames.push('vc-handler-draw-polyline')
          drawCmpNames.push('vc-handler-draw-polygon')
          break
        case 'polylineDrawing':
          drawCmpNames.push('vc-handler-draw-point')
          drawCmpNames.push('vc-handler-draw-polygon')
          break
        case 'polygonDrawing':
          drawCmpNames.push('vc-handler-draw-polyline')
          drawCmpNames.push('vc-handler-draw-point')
          break
      }
      const measureCmpNames = ['vc-measure-height', 'vc-measure-distance', 'vc-measure-area']
      for (const $node of getParent($parent).$slots.default || []) {
        if ($node.componentOptions && drawCmpNames.indexOf($node.componentOptions.tag) !== -1) {
          $node.child.drawing = false
          nextTick = true
        }
        if ($node.componentOptions && measureCmpNames.indexOf($node.componentOptions.tag) !== -1) {
          $node.child.measuring = false
          nextTick = true
        }
      }

      startNew()
      this.showTooltip = true
    } else {
      this.showTooltip = false
    }

    if (!this.showTooltip) {
      this.tooltipPosition = [0, 0, 0]
    }
    nextTick && await this.$nextTick()
    this.viewer.canvas.setAttribute('style', val ? 'cursor: crosshair' : 'cursor: auto')
    const listener = this.$listeners.activeEvt
    listener && this.$emit('activeEvt', { type: drawType, isActive: val })
  }
}

const computed = {
  points () {
    const points = []
    this.polylines.forEach((polyline, index) => {
      polyline.positions.forEach((position, subIndex) => {
        const point = {
          color: this.pointColor,
          pixelSize: this.pointPixelSize,
          position: position,
          polylineIndex: index,
          positionIndex: subIndex
        }
        points.push(point)
      })
    })
    return points
  }
}
const methods = {
  async createCesiumObject () {
    const { viewer } = this
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
  async unload () {
    return true
  },
  LEFT_CLICK (movement) {
    if (!this.drawing) {
      return
    }

    if (this.editingPoint) {
      this.RIGHT_CLICK(movement)
      return
    }

    const { Cesium, viewer, polylines, onDrawingEvt } = this
    const cartesian = viewer.scene.pickPosition(movement.position)
    if (!Cesium.defined(cartesian)) {
      return
    }
    const nIndex = polylines.length - 1
    const polyline = polylines[nIndex]
    polyline.positions.push(cartesian)
    onDrawingEvt(polyline, nIndex)
  },
  async MOUSE_MOVE (movement) {
    if (!this.drawing) {
      return
    }
    const { Cesium, viewer, polylines, onDrawingEvt, drawType } = this

    const cartesian = viewer.scene.pickPosition(movement.endPosition)
    if (!Cesium.defined(cartesian)) {
      return
    }

    this.tooltipPosition = cartesian
    this.tooltip = this.$vc.lang.draw.drawingTip1
    if (!polylines.length) {
      return
    }
    const nIndex = this.editingPoint ? this.editingPoint.polylineIndex : polylines.length - 1
    const polyline = polylines[nIndex]
    if (!polyline.positions.length) {
      return
    }

    if (polyline.positions.length >= 2) {
      this.tooltip = this.editingPoint ? this.$vc.lang.draw.drawingTip3 : this.$vc.lang.draw.drawingTip2
    }

    if (this.editingPoint) {
      polyline.positions.splice(this.editingPoint.positionIndex, 1, cartesian)
    } else {
      if (polyline.positions.length >= 2) {
        polyline.positions.pop()
      }
      polyline.positions.push(cartesian)
    }

    const listener = this.$listeners.movingEvt
    listener && this.$emit('movingEvt', movement.endPosition, drawType)
    onDrawingEvt(polyline, nIndex)
  },
  async RIGHT_CLICK (movement) {
    if (!this.drawing) {
      return
    }
    const { viewer, polylines, mode, startNew, onDrawingEvt } = this
    if (!polylines.length) {
      return
    }
    const nIndex = this.editingPoint ? this.editingPoint.polylineIndex : polylines.length - 1
    // const nIndex = polylines.length - 1
    const polyline = polylines[nIndex]
    if (polyline.positions.length === 0) {
      return
    }
    const cartesian = viewer.scene.pickPosition(movement.position)
    if (!Cesium.defined(cartesian)) {
      return
    }
    if (!this.editingPoint) {
      if (polyline.positions.length > 1) {
        polyline.positions.pop()
      }

      if (mode === 0) {
        startNew()
      } else {
        this.drawing = false
      }
    } else {
      this.editingPoint = undefined
      this.drawing = false
    }

    await this.$nextTick()
    onDrawingEvt(polyline, nIndex, true)
  },
  startNew () {
    const { polylines } = this
    const poyline = {
      positions: []
    }
    Cesium.defined(polylines) && polylines.push(poyline)
  },
  clear () {
    this.polylines = []
    this.drawing = false
  },
  onDrawingEvt (polyline, index, flag = false) {
    this.index = index
    if (!this.depthTest) {
      const rs = Cesium.RenderState.fromCache({
        depthMask: true,
        depthTest: {
          enabled: false
        }
      })
      this.$refs.pointCollection && (this.$refs.pointCollection.cesiumObject._rsOpaque = rs)
      if (Cesium.SuperMapImageryProvider) {
        this.$refs.polylineCollection && (this.$refs.polylineCollection.cesiumObject._opaqueRS = rs)
      } else {
        this.$refs.polylineCollection && (this.$refs.polylineCollection.cesiumObject._opaqueRS.depthTest.enabled = false)
      }
    }
    const listener = this.$listeners.drawEvt
    listener &&
      this.$emit('drawEvt', {
        polyline: polyline,
        type: this.drawType,
        finished: flag
      })
  },
  pointMouseOver (e) {
    if (!this.editable) {
      return
    }

    if (this.editingPoint) {
      return
    }

    e.pickedFeature.primitive.pixelSize = this.pointPixelSize * 2.0
    this.toolbarPosition = e.pickedFeature.primitive.position
    this.showToolbar = true
    this.mouseoverPoint = e.pickedFeature.primitive
  },
  pointMouseOut (e) {
    if (!this.editable) {
      return
    }
    e.pickedFeature.primitive.pixelSize = this.pointPixelSize * 1.0
    this.toolbarPosition = [0, 0, 0]
    this.showToolbar = false
    this.mouseoverPoint = undefined
  },
  onEditClick (e) {
    this.editType = e
    this.toolbarPosition = [0, 0, 0]
    this.showToolbar = false

    if (!this.editable) {
      return
    }

    this.drawing = false

    if (e === 'delete') {
      const nIndex = this.mouseoverPoint.polylineIndex
      const polyline = this.polylines[nIndex]
      polyline.positions.splice(this.mouseoverPoint.positionIndex, 1)
    } else if (e === 'insert') {
      const nIndex = this.mouseoverPoint.polylineIndex
      const polyline = this.polylines[nIndex]
      polyline.positions.splice(this.mouseoverPoint.positionIndex, 0, this.mouseoverPoint.position)
      this.editingPoint = this.mouseoverPoint
      this.drawing = true
    } else {
      this.editingPoint = this.mouseoverPoint
      this.drawing = true
    }
  }
}

export default {
  mixins: [cmp],
  data () {
    return {
      drawing: false,
      polylines: [],
      toolbarPosition: [0, 0, 0],
      showToolbar: false,
      tooltipPosition: [0, 0, 0],
      showTooltip: false,
      tooltip: '',
      nowaiting: true
    }
  },
  components: {
    VcIconSvg
  },
  props,
  watch,
  computed,
  methods,
  destroyed () {
    const { handler } = this
    if (handler) {
      handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK)
      handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE)
      handler.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK)
      handler.destroy()
    }
  }
}
