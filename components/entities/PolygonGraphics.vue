<script>
import bindEvents from '../base/bindEvent'
import { Events } from '../base/events.js'
import commonMixin from '../base/mixins/common.js'
export default {
  name: 'polygon-entity',
  render (h) {},
  mixins: [commonMixin('entities')],
  props: {
    id: {
      type: String
    },
    name: {
      type: String
    },
    availability: {
      type: Object
    },
    description: {
      type: String
    },
    position: {
      type: Object
    },
    orientation: {
      type: Object
    },
    viewFrom: {
      type: Object
    },
    parent: {
      type: Object
    },
    hierarchy: {
      type: Array
    },
    height: {
      type: Number
    },
    heightReference: {
      type: Number
    },
    extrudedHeight: {
      type: Number
    },
    extrudedHeightReference: {
      type: Number
    },
    show: {
      type: Boolean,
      default: true
    },
    fill: {
      type: Boolean,
      default: true
    },
    material: {
      type: Object
    },
    outline: {
      type: Boolean,
      default: false
    },
    outlineColor: {
      type: Object
    },
    outlineWidth: {
      type: Number,
      default: 1.0
    },
    stRotation: {
      type: Number,
      default: 0.0
    },
    granularity: {
      type: Number,
      default: 0.017453292519943295
    },
    perPositionHeight: {
      type: Boolean,
      default: false
    },
    closeTop: {
      type: Boolean,
      default: true
    },
    closeBottom: {
      type: Boolean,
      default: true
    },
    shadows: {
      type: Number,
      default: 0
    },
    distanceDisplayCondition: {
      type: Number
    },
    zIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {

  },
  methods: {
    load () {
      const { Cesium, viewer, id, name, availability, description, position, orientation, viewFrom, parent, hierarchy, height,
        heightReference, extrudedHeight, extrudedHeightReference, show, fill, material, outline, outlineColor, outlineWidth,
        stRotation, granularity, perPositionHeight, closeTop, closeBottom, shadows, distanceDisplayCondition, zIndex } = this
      let polygon = {
        hierarchy: hierarchy,
        height: height,
        heightReference: heightReference,
        extrudedHeight: extrudedHeight,
        extrudedHeightReference: extrudedHeightReference,
        show: show,
        fill: fill,
        material: material,
        outline: outline,
        outlineColor: outlineColor,
        outlineWidth: outlineWidth,
        stRotation: stRotation,
        granularity: granularity,
        perPositionHeight: perPositionHeight,
        closeTop: closeTop,
        closeBottom: closeBottom,
        shadows: shadows,
        distanceDisplayCondition: distanceDisplayCondition,
        zIndex: zIndex
      }

      polygon.hierarchy = new Cesium.CallbackProperty(() => this.hierarchy, false)
      this.originInstance = viewer.entities.add({
        id: id,
        name: name,
        availability: availability,
        show: show,
        description: description,
        position: position,
        orientation: orientation,
        viewFrom: viewFrom,
        parent: parent,
        polygon: polygon
      })
      bindEvents.call(this, this.originInstance, Events['entity-events'])
    }
  }
}
</script>
