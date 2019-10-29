<script>
import {
  show,
  distanceDisplayCondition,
  positions,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  shadows
} from '../../mixins/entity/allProps'
import polylineVolumeMixin from '../../mixins/entity/polylineVolumeMixin'
import graphicsMixin from '../../mixins/entity/graphicsMixin'
import { makeCartesian2Array, makeMaterial, makeColor, makeDistanceDisplayCondition, makeCartesian3Array } from '../../util/util'
export default {
  name: 'vc-polyline-volume-graphics',
  mixins: [
    show,
    distanceDisplayCondition,
    positions,
    fill,
    material,
    outline,
    outlineColor,
    outlineWidth,
    shadows,
    polylineVolumeMixin,
    graphicsMixin
  ],
  props: {
    shape: Array
  },
  watch: {
    shape (val) {
      this.graphics.shape = makeCartesian2Array(val)
    }
  },
  methods: {
    createCesiumObject () {
      const { show, positions, shape, cornerType, granularity, fill, material, outline,
        outlineColor, outlineWidth, shadows, distanceDisplayCondition } = this
      let options = {
        show,
        positions: makeCartesian3Array(positions),
        shape: makeCartesian2Array(shape),
        cornerType,
        granularity,
        fill,
        material: makeMaterial(material),
        outline,
        outlineColor: makeColor(outlineColor),
        outlineWidth,
        shadows,
        distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition)
      }
      this.removeNullItem(options)
      return new Cesium.PolylineVolumeGraphics(options)
    }
  }
}
</script>
