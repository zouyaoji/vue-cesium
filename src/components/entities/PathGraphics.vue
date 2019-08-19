<script>
import { show, distanceDisplayCondition, width, material } from '../../mixins/entity/allProps'
import graphicsMixin from '../../mixins/entity/graphicsMixin'
import { makeMaterial, makeDistanceDisplayCondition } from '../../util/util'
export default {
  name: 'path-graphics',
  mixins: [show, distanceDisplayCondition, width, material, graphicsMixin],
  props: {
    leadTime: Number,
    trailTime: Number,
    resolution: {
      type: Number,
      default: 60
    }
  },
  watch: {
    leadTime (val) {
      this.graphics.leadTime = val
    },
    trailTime (val) {
      this.graphics.trailTime = val
    },
    resolution (val) {
      this.graphics.resolution = val
    }
  },
  methods: {
    createCesiumObject () {
      const { show, leadTime, trailTime, width, resolution, material, distanceDisplayCondition } = this
      let options = {
        show,
        leadTime,
        trailTime,
        width,
        resolution,
        material: makeMaterial(material),
        distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition)
      }
      this.removeNullItem(options)
      return new Cesium.PathGraphics(options)
    }
  }
}
</script>
