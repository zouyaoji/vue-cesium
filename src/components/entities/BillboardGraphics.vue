<script>
import billboardMixin from '@/mixins/entity/billboardMixin'
import graphicsMixin from '@/mixins/entity/graphicsMixin'
import { makeNearFarScalar, makeColor, makeDistanceDisplayCondition, makeCartesian2, makeCartesian3, makeBoundingRectangle } from '@/util/util'

export default {
  name: 'billboard-graphics',
  mixins: [billboardMixin, graphicsMixin],
  props: {
    imageSubRegion: Object
  },
  watch: {
    imageSubRegion (val) {
      this.graphics.imageSubRegion = val
    }
  },
  methods: {
    createCesiumObject () {
      const { image, show, scale, horizontalOrigin, verticalOrigin, eyeOffset, pixelOffset, rotation, alignedAxis, width, height,
        color, scaleByDistance, translucencyByDistance, pixelOffsetScaleByDistance, imageSubRegion, sizeInMeters, heightReference, distanceDisplayCondition,
        disableDepthTestDistance } = this
      let options = {
        image,
        show,
        scale,
        horizontalOrigin,
        verticalOrigin,
        eyeOffset: makeCartesian3(eyeOffset),
        pixelOffset: makeCartesian2(pixelOffset),
        rotation,
        alignedAxis: makeCartesian3(alignedAxis),
        width,
        height,
        color: makeColor(color),
        scaleByDistance: makeNearFarScalar(scaleByDistance),
        translucencyByDistance: makeNearFarScalar(translucencyByDistance),
        pixelOffsetScaleByDistance: makeNearFarScalar(pixelOffsetScaleByDistance),
        imageSubRegion: makeBoundingRectangle(imageSubRegion),
        sizeInMeters,
        heightReference,
        distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition),
        disableDepthTestDistance
      }
      this.removeNullItem(options)
      return new Cesium.BillboardGraphics(options)
    }
  }
}
</script>
