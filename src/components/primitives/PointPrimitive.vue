<script>
import { id, position } from '@/mixins/entity/allProps'
import pointMixin from '@/mixins/entity/pointMixin'
import collectionItemMixin from '@/mixins/primitive/collectionItemMixin'
import { makeNearFarScalar, makeColor, makeDistanceDisplayCondition, makeCartesian3 } from '@/util/util'
export default {
  name: 'point-primitive',
  mixins: [id, position, pointMixin, collectionItemMixin],
  methods: {
    createCesiumObject () {
      const { primitiveCollection, color, disableDepthTestDistance, distanceDisplayCondition, id, outlineColor, outlineWidth, pixelSize,
        position, scaleByDistance, show, translucencyByDistance } = this
      let point = {
        color: makeColor(color),
        disableDepthTestDistance,
        distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition),
        id,
        outlineColor: makeColor(outlineColor),
        outlineWidth,
        pixelSize,
        position: makeCartesian3(position),
        scaleByDistance: makeNearFarScalar(scaleByDistance),
        show,
        translucencyByDistance: makeNearFarScalar(translucencyByDistance)
      }
      this.removeNullItem(point)
      return primitiveCollection.add(point)
    }
  }
}
</script>
