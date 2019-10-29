<script>
import {
  show,
  distanceDisplayCondition,
  dimensions,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  shadows
} from '../../mixins/entity/allProps'
import graphicsMixin from '../../mixins/entity/graphicsMixin'
import { makeCartesian2, makeMaterial, makeColor, makeDistanceDisplayCondition, makePlane } from '../../util/util'
export default {
  name: 'vc-graphics-plane',
  mixins: [
    show,
    distanceDisplayCondition,
    dimensions,
    fill,
    material,
    outline,
    outlineColor,
    outlineWidth,
    shadows,
    graphicsMixin
  ],
  props: {
    plane: Object
  },
  watch: {
    plane (val) {
      this.graphics.plane = makePlane(val)
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, show, plane, dimensions, fill, material, outline, outlineColor, outlineWidth, shadows, distanceDisplayCondition } = this
      let options = {
        show,
        plane: makePlane(plane),
        dimensions: makeCartesian2(dimensions),
        fill,
        material: makeMaterial(material),
        outline,
        outlineColor: makeColor(outlineColor),
        outlineWidth,
        shadows,
        distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition)
      }
      this.removeNullItem(options)
      return new Cesium.PlaneGraphics(options)
    }
  }
}
</script>
