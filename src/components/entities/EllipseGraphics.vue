<script>
import {
  show,
  distanceDisplayCondition,
  heightReference,
  extrudedHeightReference,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  numberOfVerticalLines,
  shadows,
  classificationType,
  zIndex

} from '../../mixins/entity/allProps'
import ellipseMixin from '../../mixins/entity/ellipseMixin'
import graphicsMixin from '../../mixins/entity/graphicsMixin'
import { makeColor, makeMaterial, makeDistanceDisplayCondition } from '../../util/util'
export default {
  name: 'vc-graphics-ellipse',
  mixins: [
    show,
    distanceDisplayCondition,
    heightReference,
    extrudedHeightReference,
    fill,
    material,
    outline,
    outlineColor,
    outlineWidth,
    numberOfVerticalLines,
    shadows,
    classificationType,
    zIndex,
    ellipseMixin,
    graphicsMixin
  ],
  methods: {
    createCesiumObject () {
      const { show, semiMajorAxis, semiMinorAxis, height, heightReference, extrudedHeight, extrudedHeightReference, rotation, stRotation, granularity,
        fill, material, outline, outlineColor, outlineWidth, numberOfVerticalLines, shadows, distanceDisplayCondition, classificationType, zIndex } = this
      let options = {
        show,
        semiMajorAxis,
        semiMinorAxis,
        height,
        heightReference,
        extrudedHeight,
        extrudedHeightReference,
        rotation,
        stRotation,
        granularity,
        fill,
        material: makeMaterial(material),
        outline,
        outlineColor: makeColor(outlineColor),
        outlineWidth,
        numberOfVerticalLines,
        shadows,
        distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition),
        classificationType,
        zIndex
      }
      this.removeNullItem(options)
      return new Cesium.EllipseGraphics(options)
    }
  }
}
</script>
