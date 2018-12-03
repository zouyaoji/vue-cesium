<script>
import commonMixin from '../../mixins/common.js'
export default {
  name: 'polygon-geometry',
  render (h) {},
  mixins: [commonMixin('polygon-geometry')],
  props: {
    positions: {
      type: Array
    },
    holes: {
      type: Array
    },
    height: {
      type: Number,
      default: 0.0
    },
    extrudedHeight: {
      type: Number
    },
    vertexFormat: {
      type: Object
    },
    stRotation: {
      type: Number,
      default: 0.0
    },
    ellipsoid: {
      type: Object
    },
    granularity: {
      type: Number
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
        height: height,
        extrudedHeight: extrudedHeight,
        vertexFormat: vertexFormat,
        stRotation: stRotation,
        ellipsoid: ellipsoid,
        granularity: granularity,
        perPositionHeight: perPositionHeight,
        closeTop: closeTop,
        closeBottom: closeBottom
      }
      this.originInstance = this.$parent.originInstance.add(polygon)
    }
  }
}
</script>
