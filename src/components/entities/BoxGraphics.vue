<script>
import entityGraphics from '../../mixins/entityGraphics.js'
export default {
  name: 'box-graphics',
  mixins: [entityGraphics],
  props: {
    heightReference: Number,
    dimensions: Object,
    show: {
      type: Boolean,
      default: true
    },
    fill: {
      type: Boolean,
      default: true
    },
    material: Object,
    outline: {
      type: Boolean,
      default: false
    },
    outlineColor: Object,
    outlineWidth: {
      type: Number,
      default: 1.0
    },
    shadows: {
      type: Number,
      default: 0
    },
    distanceDisplayCondition: {
      type: Number
    }
  },
  watch: {
    heightReference (val) {
      this.graphics.heightReference = val
    },
    dimensions (val) {
      this.graphics.dimensions = val
    },
    show (val) {
      this.graphics.show = val
    },
    fill (val) {
      this.graphics.fill = val
    },
    material (val) {
      this.graphics.material = val
    },
    outline (val) {
      this.graphics.outline = val
    },
    outlineColor (val) {
      this.graphics.pixelOffset = val
    },
    outlineWidth (val) {
      this.graphics.rotation = val
    },
    shadows (val) {
      this.graphics.alignedAxis = val
    },
    distanceDisplayCondition (val) {
      this.graphics.width = val
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, heightReference, dimensions, show, fill, material, outline, outlineColor, outlineWidth, shadows, distanceDisplayCondition } = this
      let box = new Cesium.BoxGraphics({
        heightReference: heightReference,
        dimensions: dimensions,
        show: show,
        fill: fill,
        material: material,
        outline: outline,
        outlineColor: outlineColor,
        outlineWidth: outlineWidth,
        shadows: shadows,
        distanceDisplayCondition: distanceDisplayCondition
      })

      return box
    }
  }
}
</script>
