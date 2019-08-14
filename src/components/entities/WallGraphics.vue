<script>
import {
  show,
  distanceDisplayCondition,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  shadows
} from '@/mixins/entity/allProps'
import wallMixin from '@/mixins/entity/wallMixin'
import graphicsMixin from '@/mixins/entity/graphicsMixin'
import { makeMaterial, makeColor, makeDistanceDisplayCondition, makeCartesian3Array } from '@/util/util'
export default {
  name: 'wall-graphics',
  mixins: [
    show,
    distanceDisplayCondition,
    fill,
    material,
    outline,
    outlineColor,
    outlineWidth,
    shadows,
    wallMixin,
    graphicsMixin
  ],
  methods: {
    createCesiumObject () {
      const { show, positions, maximumHeights, minimumHeights, granularity, fill, material, outline, outlineColor,
        outlineWidth, shadows, distanceDisplayCondition } = this
      let options = {
        show,
        positions: makeCartesian3Array(positions),
        maximumHeights,
        minimumHeights,
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
      return new Cesium.WallGraphics(options)
    }
  }
}
</script>
