<script>
import primitiveCollectionItem from '../../mixins/primitiveCollectionItem'
export default {
  name: 'point-primitive',
  mixins: [primitiveCollectionItem],
  props: {
    color: {
      type: Object
    },
    disableDepthTestDistance: {
      type: Number
    },
    distanceDisplayCondition: {
      type: Object
    },
    id: {
      type: Object
    },
    outlineColor: {
      type: Object
    },
    outlineWidth: {
      type: Number,
      default: 1.0
    },
    pixelSize: {
      type: Number
    },
    position: {
      type: Object
    },
    scaleByDistance: {
      type: Object
    },
    show: {
      type: Boolean,
      default: true
    },
    translucencyByDistance: {
      type: Object
    }
  },
  watch: {
    color  (val) {
      this.originInstance.color = val
    },
    disableDepthTestDistance (val) {
      this.originInstance.disableDepthTestDistance = val
    },
    distanceDisplayCondition (val) {
      this.originInstance.distanceDisplayCondition = val
    },
    id (val) {
      this.originInstance.id = val
    },
    outlineColor  (val) {
      this.originInstance.outlineColor = val
    },
    outlineWidth (val) {
      this.originInstance.outlineWidth = val
    },
    pixelSize  (val) {
      this.originInstance.pixelSize = val
    },
    position (val) {
      this.originInstance.position = val
    },
    scaleByDistance (val) {
      this.originInstance.scaleByDistance = val
    },
    show (val) {
      this.originInstance.show = val
    },
    translucencyByDistance (val) {
      this.originInstance.translucencyByDistance = val
    }
  },
  methods: {
    createCesiumObject () {
      const { primitiveCollection, color, disableDepthTestDistance, distanceDisplayCondition, id, outlineColor, outlineWidth, pixelSize,
        position, scaleByDistance, show, translucencyByDistance } = this
      let point = {
        color: color,
        disableDepthTestDistance: disableDepthTestDistance,
        distanceDisplayCondition: distanceDisplayCondition,
        id: id,
        outlineColor: outlineColor,
        outlineWidth: outlineWidth,
        pixelSize: pixelSize,
        position: position,
        scaleByDistance: scaleByDistance,
        show: show,
        translucencyByDistance: translucencyByDistance
      }
      return primitiveCollection.add(point)
    }
  }
}
</script>
