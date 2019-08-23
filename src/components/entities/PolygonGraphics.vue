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
import polygonMixin from '../../mixins/entity/polygonMixin'
import graphicsMixin from '../../mixins/entity/graphicsMixin'
import { makeColor, makeMaterial, makeDistanceDisplayCondition, makePolygonHierarchy } from '../../util/util'
export default {
  name: 'polygon-graphics',
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
    polygonMixin,
    graphicsMixin
  ],
  props: {
    hierarchy: Array | Object
  },
  watch: {
    hierarchy (val) {
      if (!Cesium.defined(this.graphics.hierarchy._callback)) {
        this.graphics.hierarchy = makePolygonHierarchy(val)
      }
    }
  },
  methods: {
    createCesiumObject () {
      const { show, hierarchy, height, heightReference, extrudedHeight, extrudedHeightReference, stRotation, granularity, fill, material,
        outline, outlineColor, outlineWidth, perPositionHeight, closeTop, closeBottom, arcType, shadows, distanceDisplayCondition, zIndex } = this
      let options = {
        show,
        hierarchy: makePolygonHierarchy(hierarchy),
        height,
        heightReference,
        extrudedHeight,
        extrudedHeightReference,
        stRotation,
        granularity,
        fill,
        material: makeMaterial(material),
        outline,
        outlineColor: makeColor(outlineColor),
        outlineWidth,
        perPositionHeight,
        closeTop,
        closeBottom,
        arcType,
        shadows,
        distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition),
        zIndex
      }
      this.removeNullItem(options)
      return new Cesium.PolygonGraphics(options)
    }
  }
}
</script>
