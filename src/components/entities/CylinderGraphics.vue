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
  numberOfVerticalLines,
  shadows
} from '@/mixins/entity/allProps'
import cylinderMixin from '@/mixins/entity/cylinderMixin'
import graphicsMixin from '@/mixins/entity/graphicsMixin'
import { makeMaterial, makeColor, makeDistanceDisplayCondition } from '@/util/util'
export default {
  name: 'cylinder-graphics',
  mixins: [
    show,
    distanceDisplayCondition,
    heightReference,
    fill,
    material,
    outline,
    outlineColor,
    outlineWidth,
    numberOfVerticalLines,
    shadows,
    cylinderMixin,
    graphicsMixin
  ],
  methods: {
    createCesiumObject () {
      const { show, length, topRadius, bottomRadius, heightReference, fill, material, outline,
        outlineColor, outlineWidth, numberOfVerticalLines, slices, shadows, distanceDisplayCondition } = this
      let options = {
        show,
        length,
        topRadius,
        bottomRadius,
        heightReference,
        fill,
        material: makeMaterial(material),
        outline,
        outlineColor: makeColor(outlineColor),
        outlineWidth,
        numberOfVerticalLines,
        slices,
        shadows,
        distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition)
      }
      this.removeNullItem(options)
      return new Cesium.CylinderGraphics(options)
    }
  }
}
</script>
