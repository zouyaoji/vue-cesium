<script>
import primitiveCollectionItem from '../../mixins/primitiveCollectionItem'
export default {
  name: 'point-primitive',
  mixins: [primitiveCollectionItem],
  props: {
    color: Object,
    disableDepthTestDistance: [Object, Number],
    distanceDisplayCondition: Object,
    id: null,
    outlineColor: Object,
    outlineWidth: {
      type: Number,
      default: 1.0
    },
    pixelSize: Number,
    position: Object,
    scaleByDistance: Object,
    show: {
      type: Boolean,
      default: true
    },
    translucencyByDistance: Object
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
        color,
        disableDepthTestDistance,
        distanceDisplayCondition,
        id,
        outlineColor,
        outlineWidth,
        pixelSize,
        position,
        scaleByDistance,
        show,
        translucencyByDistance
      }
      this.removeNullItem(point)
      return primitiveCollection.add(point)
    }
  }
}
</script>
