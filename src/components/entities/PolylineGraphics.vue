<script>
import {
  granularity,
  arcType,
  classificationType,
  zIndex
} from '../../mixins/entity/allProps'
import polylineMixin from '../../mixins/entity/polylineMixin'
import graphicsMixin from '../../mixins/entity/graphicsMixin'
import { makeDistanceDisplayCondition, makeCartesian3Array, makeMaterial } from '../../util/util'

export default {
  name: 'polyline-graphics',
  mixins: [
    granularity,
    arcType,
    classificationType,
    zIndex,
    polylineMixin,
    graphicsMixin
  ],
  props: {
    clampToGround: {
      type: Boolean,
      default: false
    },
    depthFailMaterial: Object | Array | String
  },
  watch: {
    clampToGround (val) {
      this.graphics.clampToGround = val
    },
    depthFailMaterial (val) {
      this.graphics.depthFailMaterial = makeMaterial(val)
    }
  },
  methods: {
    createCesiumObject () {
      const { show, positions, width, granularity, material, depthFailMaterial, arcType,
        clampToGround, shadows, distanceDisplayCondition, classificationType, zIndex } = this
      let options = {
        show,
        positions: makeCartesian3Array(positions),
        width,
        granularity,
        material: makeMaterial(material),
        depthFailMaterial: makeMaterial(depthFailMaterial),
        arcType,
        clampToGround,
        shadows,
        distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition),
        classificationType,
        zIndex
      }
      this.removeNullItem(options)
      return new Cesium.PolylineGraphics(options)
    }
  }
}
</script>
