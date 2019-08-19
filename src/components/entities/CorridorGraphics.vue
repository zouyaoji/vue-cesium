<script>
import {
  show, distanceDisplayCondition, heightReference, extrudedHeightReference, fill, material, outline, outlineColor,
  outlineWidth, shadows, classificationType, zIndex
} from '../../mixins/entity/allProps'
import corridorMixin from '../../mixins/entity/corridorMixin'
import graphicsMixin from '../../mixins/entity/graphicsMixin'
import { makeColor, makeMaterial, makeDistanceDisplayCondition, makeCartesian3Array } from '../../util/util'
export default {
  name: 'corridor-graphics',
  mixins: [corridorMixin, heightReference, extrudedHeightReference, fill, material, outline,
    outlineColor, outlineWidth, shadows, classificationType, zIndex, graphicsMixin, show, distanceDisplayCondition],
  methods: {
    createCesiumObject () {
      const { positions, width, cornerType, height, heightReference, extrudedHeight, extrudedHeightReference, show, fill, material,
        outline, outlineColor, outlineWidth, granularity, shadows, distanceDisplayCondition, classificationType, zIndex } = this
      let options = {
        show,
        positions: makeCartesian3Array(positions),
        width,
        cornerType,
        height,
        heightReference,
        extrudedHeight,
        extrudedHeightReference,
        fill,
        material: makeMaterial(material),
        outline,
        outlineColor: makeColor(outlineColor),
        outlineWidth,
        granularity,
        shadows,
        distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition),
        classificationType,
        zIndex
      }
      this.removeNullItem(options)
      return new Cesium.CorridorGraphics(options)
    }
  }
}
</script>
