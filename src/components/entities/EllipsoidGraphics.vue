<script>
import {
  show,
  distanceDisplayCondition,
  heightReference,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  subdivisions,
  shadows
} from '../../mixins/entity/allProps'
import ellipsoidMixin from '../../mixins/entity/ellipsoidMixin'
import graphicsMixin from '../../mixins/entity/graphicsMixin'
import { makeCartesian3, makeMaterial, makeColor, makeDistanceDisplayCondition } from '../../util/util'
export default {
  name: 'vc-graphics-ellipsoid',
  mixins: [
    show,
    distanceDisplayCondition,
    heightReference,
    fill,
    material,
    outline,
    outlineColor,
    outlineWidth,
    subdivisions,
    shadows,
    ellipsoidMixin,
    graphicsMixin
  ],
  methods: {
    createCesiumObject () {
      const { show, radii, heightReference, fill, material, outline, outlineColor, outlineWidth, stackPartitions,
        slicePartitions, subdivisions, shadows, distanceDisplayCondition } = this
      let options = {
        show,
        radii: makeCartesian3(radii),
        heightReference,
        fill,
        material: makeMaterial(material),
        outline,
        outlineColor: makeColor(outlineColor),
        outlineWidth,
        stackPartitions,
        slicePartitions,
        subdivisions,
        shadows,
        distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition)
      }
      this.removeNullItem(options)
      return new Cesium.EllipsoidGraphics(options)
    }
  }
}
</script>
