<script>
import labelMixin from '@/mixins/entity/labelMixin'
import graphicsMixin from '@/mixins/entity/graphicsMixin'
import { makeNearFarScalar, makeColor, makeDistanceDisplayCondition, makeCartesian2, makeCartesian3 } from '@/util/util'

export default {
  name: 'label-graphics',
  mixins: [labelMixin, graphicsMixin],
  methods: {
    createCesiumObject () {
      const { text, font, labelStyle, fillColor, outlineColor, outlineWidth, show, showBackground, backgroundColor, backgroundPadding, scale,
        horizontalOrigin, verticalOrigin, eyeOffset, pixelOffset, translucencyByDistance, pixelOffsetScaleByDistance, scaleByDistance, heightReference,
        distanceDisplayCondition, disableDepthTestDistance } = this
      let options = {
        text,
        font,
        style: labelStyle,
        fillColor: makeColor(fillColor),
        outlineColor: makeColor(outlineColor),
        outlineWidth,
        show,
        showBackground,
        backgroundColor: makeColor(backgroundColor),
        backgroundPadding: makeCartesian2(backgroundPadding),
        scale,
        horizontalOrigin,
        verticalOrigin,
        eyeOffset: makeCartesian3(eyeOffset),
        pixelOffset: makeCartesian2(pixelOffset),
        scaleByDistance: makeNearFarScalar(scaleByDistance),
        translucencyByDistance: makeNearFarScalar(translucencyByDistance),
        pixelOffsetScaleByDistance: makeNearFarScalar(pixelOffsetScaleByDistance),
        heightReference,
        distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition),
        disableDepthTestDistance
      }
      this.removeNullItem(options)
      return new Cesium.LabelGraphics(options)
    }
  }
}
</script>
