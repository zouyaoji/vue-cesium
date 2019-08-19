<script>
import { heightReference } from '../../mixins/entity/allProps'
import pointMixin from '../../mixins/entity/pointMixin'
import graphicsMixin from '../../mixins/entity/graphicsMixin'
import { makeColor, makeDistanceDisplayCondition, makeNearFarScalar } from '../../util/util'
export default {
  name: 'point-graphics',
  mixins: [heightReference, pointMixin, graphicsMixin],
  methods: {
    createCesiumObject () {
      const { show, pixelSize, heightReference, color, outlineColor, outlineWidth, scaleByDistance, translucencyByDistance,
        distanceDisplayCondition, disableDepthTestDistance } = this
      let options = {
        show,
        pixelSize,
        heightReference,
        color: makeColor(color),
        outlineColor: makeColor(outlineColor),
        outlineWidth,
        scaleByDistance: makeNearFarScalar(scaleByDistance),
        translucencyByDistance: makeNearFarScalar(translucencyByDistance),
        distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition),
        disableDepthTestDistance
      }
      this.removeNullItem(options)
      return new Cesium.PointGraphics(options)
    }
  }
}
</script>
