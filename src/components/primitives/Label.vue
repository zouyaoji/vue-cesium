<script>
import {
  id,
  position
} from '@/mixins/entity/allProps'
import labelMixin from '@/mixins/entity/labelMixin'
import collectionItemMixin from '@/mixins/primitive/collectionItemMixin'
import { makeNearFarScalar, makeColor, makeDistanceDisplayCondition, makeCartesian2, makeCartesian3 } from '@/util/util'
export default {
  name: 'label-primitive',
  mixins: [id, position, labelMixin, collectionItemMixin],
  props: {
    totalScale: Number
  },
  watch: {
    totalScale (val) {
      this.primitive.totalScale = val
    }
  },
  methods: {
    createCesiumObject () {
      const { primitiveCollection, backgroundColor, backgroundPadding, disableDepthTestDistance, distanceDisplayCondition, eyeOffset, fillColor, font, heightReference,
        horizontalOrigin, id, outlineColor, outlineWidth, pixelOffset, pixelOffsetScaleByDistance, position, scale, scaleByDistance,
        show, showBackground, labelStyle, text, totalScale, translucencyByDistance, verticalOrigin } = this
      let label = {
        backgroundColor: makeColor(backgroundColor),
        backgroundPadding: makeCartesian2(backgroundPadding),
        disableDepthTestDistance,
        distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition),
        eyeOffset: makeCartesian3(eyeOffset),
        fillColor: makeColor(fillColor),
        font,
        heightReference,
        horizontalOrigin,
        id,
        outlineColor: makeColor(outlineColor),
        outlineWidth,
        pixelOffset: makeCartesian2(pixelOffset),
        pixelOffsetScaleByDistance: makeNearFarScalar(pixelOffsetScaleByDistance),
        position: makeCartesian3(position),
        scale,
        scaleByDistance: makeNearFarScalar(scaleByDistance),
        show,
        showBackground,
        labelStyle,
        text,
        totalScale,
        translucencyByDistance: makeNearFarScalar(translucencyByDistance),
        verticalOrigin
      }
      this.removeNullItem(label)
      return primitiveCollection.add(label)
    }
  }
}
</script>
