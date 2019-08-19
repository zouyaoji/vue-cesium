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
  shadows,
  classificationType,
  zIndex
} from '../../mixins/entity/allProps'
import rectangleMixin from '../../mixins/entity/rectangleMixin'
import graphicsMixin from '../../mixins/entity/graphicsMixin'
import { makeColor, makeRectangle, makeMaterial, makeDistanceDisplayCondition } from '../../util/util'
export default {
  name: 'rectangle-graphics',
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
    shadows,
    classificationType,
    zIndex,
    rectangleMixin,
    graphicsMixin
  ],
  props: {
    coordinates: Object
  },
  watch: {
    coordinates (val) {
      this.graphics.coordinates = makeRectangle(val)
    }
  },
  methods: {
    createCesiumObject () {
      const { show, coordinates, height, heightReference, extrudedHeight, extrudedHeightReference, rotation, stRotation, granularity, fill, material, outline, outlineColor,
        outlineWidth, shadows, distanceDisplayCondition, classificationType, zIndex } = this
      let options = {
        show,
        coordinates: makeRectangle(coordinates),
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
        shadows,
        distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition),
        classificationType,
        zIndex

      }
      this.removeNullItem(options)
      return new Cesium.RectangleGraphics(options)
    }
  }
}
</script>
