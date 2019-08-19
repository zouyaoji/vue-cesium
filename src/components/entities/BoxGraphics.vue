<script>
import {
  heightReference,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  shadows
} from '../../mixins/entity/allProps'
import boxMixin from '../../mixins/entity/boxMixin'
import graphicsMixin from '../../mixins/entity/graphicsMixin'
import { makeCartesian3, makeMaterial, makeColor, makeDistanceDisplayCondition } from '../../util/util'

export default {
  name: 'box-graphics',
  mixins: [
    heightReference,
    fill,
    material,
    outline,
    outlineColor,
    outlineWidth,
    shadows,
    boxMixin,
    graphicsMixin ],
  methods: {
    createCesiumObject () {
      const { show, dimensions, heightReference, fill, material, outline, outlineColor, outlineWidth, shadows, distanceDisplayCondition } = this
      let options = {
        show,
        dimensions: makeCartesian3(dimensions),
        heightReference,
        fill,
        material: makeMaterial(material),
        outline,
        outlineColor: makeColor(outlineColor),
        outlineWidth,
        shadows,
        distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition)
      }
      this.removeNullItem(options)
      return new Cesium.BoxGraphics(options)
    }
  }
}
</script>
