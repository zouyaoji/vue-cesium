<script>
// import commonMixin from '../../mixins/common.js'
export default {
  name: 'polygon-geometry',
  render (h) {},
  // mixins: [commonMixin('polygon-geometry')],
  props: {
    positions: Array,
    holes: Array,
    height: {
      type: Number,
      default: 0.0
    },
    extrudedHeight: Number,
    vertexFormat: Object,
    stRotation: {
      type: [Number, Object],
      default: 0.0
    },
    ellipsoid: Object,
    granularity: {
      type: Number,
      default: Math.PI / 180.0
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
    }
  },
  watch: {

  },
  methods: {
    load () {
      const { Cesium, positions, holes, height, extrudedHeight, vertexFormat, stRotation, ellipsoid,
        granularity, perPositionHeight, closeTop, closeBottom } = this
      let polygon = {
        polygonHierarchy: new Cesium.PolygonHierarchy(positions, holes),
        height,
        extrudedHeight,
        vertexFormat,
        stRotation,
        ellipsoid,
        granularity,
        perPositionHeight,
        closeTop,
        closeBottom
      }
      this.removeNullItem(polygon)
      this.originInstance = this.$parent.originInstance.add(polygon)
    }
  }
}
</script>
