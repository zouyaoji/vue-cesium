<script>
import {
  id,
  position
} from '@/mixins/entity/allProps'
import billboardMixin from '@/mixins/entity/billboardMixin'
import collectionItemMixin from '@/mixins/primitive/collectionItemMixin'
import { makeNearFarScalar, makeColor, makeDistanceDisplayCondition, makeCartesian2, makeCartesian3 } from '@/util/util'
export default {
  name: 'billboard-primitive',
  mixins: [id, position, billboardMixin, collectionItemMixin],
  methods: {
    createCesiumObject () {
      const { primitiveCollection, alignedAxis, color, disableDepthTestDistance, distanceDisplayCondition, eyeOffset, height, heightReference, horizontalOrigin, id,
        image, pixelOffset, pixelOffsetScaleByDistance, position, rotation, scale, scaleByDistance, show, sizeInMeters, translucencyByDistance, verticalOrigin, width } = this
      let billboard = {
        alignedAxis: makeCartesian3(alignedAxis),
        color: makeColor(color),
        disableDepthTestDistance,
        distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition),
        eyeOffset: makeCartesian3(eyeOffset),
        height,
        heightReference,
        horizontalOrigin,
        id,
        image,
        pixelOffset: makeCartesian2(pixelOffset),
        pixelOffsetScaleByDistance: makeNearFarScalar(pixelOffsetScaleByDistance),
        position: makeCartesian3(position),
        rotation,
        scale,
        scaleByDistance: makeNearFarScalar(scaleByDistance),
        show,
        sizeInMeters,
        translucencyByDistance: makeNearFarScalar(translucencyByDistance),
        verticalOrigin,
        width
      }
      this.removeNullItem(billboard)
      return primitiveCollection.add(billboard)
    }
  }
}
</script>
