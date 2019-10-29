<script>
import modelMixin from '../../mixins/entity/modelMixin'
import graphicsMixin from '../../mixins/entity/graphicsMixin'
import { makeTranslationRotationScale, makeColor, makeDistanceDisplayCondition, makeCartesian2, makeCartesian3 } from '../../util/util'
export default {
  name: 'vc-graphics-model',
  mixins: [modelMixin, graphicsMixin],
  props: {
    uri: String,
    runAnimations: {
      type: Boolean,
      default: true
    },
    imageBasedLightingFactor: {
      type: Object,
      default: () => {
        return {
          x: 1.0, y: 1.0
        }
      }
    },
    lightColor: Object,
    nodeTransformations: Object,
    articulations: Object
  },
  watch: {
    uri (val) {
      this.graphics.uri = val
    },
    runAnimations (val) {
      this.graphics.runAnimations = val
    },
    nodeTransformations (val) {
      this.graphics.nodeTransformations = makeTranslationRotationScale(val)
    },
    imageBasedLightingFactor (val) {
      this.graphics.imageBasedLightingFactor = makeCartesian2(val)
    },
    lightColor (val) {
      this.graphics.lightColor = makeCartesian3(val)
    },
    articulations (val) {
      this.graphics.articulations = val
    }
  },
  methods: {
    createCesiumObject () {
      const { show, uri, scale, minimumPixelSize, maximumScale, incrementallyLoadTextures, runAnimations, clampAnimations, shadows, heightReference,
        silhouetteColor, silhouetteSize, color, colorBlendMode, colorBlendAmount, imageBasedLightingFactor, lightColor,
        distanceDisplayCondition, nodeTransformations, articulations, clippingPlanes } = this
      let options = {
        show,
        uri,
        scale,
        minimumPixelSize,
        maximumScale,
        incrementallyLoadTextures,
        runAnimations,
        clampAnimations,
        shadows,
        heightReference,
        silhouetteColor: makeColor(silhouetteColor),
        silhouetteSize,
        color: makeColor(color),
        colorBlendMode,
        colorBlendAmount,
        imageBasedLightingFactor: makeCartesian2(imageBasedLightingFactor),
        lightColor: makeColor(lightColor),
        distanceDisplayCondition: makeDistanceDisplayCondition(distanceDisplayCondition),
        nodeTransformations: makeTranslationRotationScale(nodeTransformations),
        articulations,
        clippingPlanes
      }
      this.removeNullItem(options)
      return new Cesium.ModelGraphics(options)
    }
  }
}
</script>
