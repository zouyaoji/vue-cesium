<script>
import entityGraphics from '../../mixins/entityGraphics.js'
export default {
  name: 'model-graphics',
  mixins: [entityGraphics],
  props: {
    uri: String,
    show: {
      type: Boolean,
      default: true
    },
    scale: {
      type: Number,
      default: 1.0
    },
    minimumPixelSize: {
      type: Number,
      default: 0.0
    },
    maximumScale: Number,
    incrementallyLoadTextures: {
      type: Boolean,
      default: true
    },
    runAnimations: {
      type: Boolean,
      default: true
    },
    clampAnimations: {
      type: Boolean,
      default: true
    },
    nodeTransformations: Object,
    shadows: {
      type: Number,
      default: 1
    },
    heightReference: {
      type: Number,
      default: 0
    },
    distanceDisplayCondition: Object,
    silhouetteColor: Object,
    silhouetteSize: {
      type: Number,
      default: 0.0
    },
    color: Object,
    colorBlendMode: {
      type: Number,
      default: 0
    },
    colorBlendAmount: {
      type: Number,
      default: 0.5
    },
    clippingPlanes: Object,
    imageBasedLightingFactor: Object,
    lightColor: Object
  },
  watch: {
    uri (val) {
      this.graphics.uri = val
    },
    show (val) {
      this.graphics.show = val
    },
    scale (val) {
      this.graphics.scale = val
    },
    minimumPixelSize (val) {
      this.graphics.minimumPixelSize = val
    },
    maximumScale (val) {
      this.graphics.maximumScale = val
    },
    incrementallyLoadTextures (val) {
      this.graphics.incrementallyLoadTextures = val
    },
    runAnimations (val) {
      this.graphics.runAnimations = val
    },
    clampAnimations (val) {
      this.graphics.clampAnimations = val
    },
    nodeTransformations (val) {
      this.graphics.nodeTransformations = val
    },
    shadows (val) {
      this.graphics.shadows = val
    },
    heightReference (val) {
      this.graphics.heightReference = val
    },
    distanceDisplayCondition (val) {
      this.graphics.distanceDisplayCondition = val
    },
    silhouetteColor (val) {
      this.graphics.silhouetteColor = val
    },
    silhouetteSize (val) {
      this.graphics.silhouetteSize = val
    },
    color (val) {
      this.graphics.color = val
    },
    colorBlendMode (val) {
      this.graphics.colorBlendMode = val
    },
    colorBlendAmount (val) {
      this.graphics.colorBlendAmount = val
    },
    clippingPlanes (val) {
      this.graphics.clippingPlanes = val
    },
    imageBasedLightingFactor (val) {
      this.graphics.imageBasedLightingFactor = val
    },
    lightColor (val) {
      this.graphics.lightColor = val
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, uri, show, scale, minimumPixelSize, maximumScale, incrementallyLoadTextures, runAnimations, clampAnimations, nodeTransformations,
        shadows, heightReference, distanceDisplayCondition, silhouetteColor, silhouetteSize, color, colorBlendMode, colorBlendAmount, clippingPlanes,
        imageBasedLightingFactor, lightColor } = this
      let model = new Cesium.ModelGraphics({
        uri,
        show,
        scale,
        minimumPixelSize,
        maximumScale,
        incrementallyLoadTextures,
        runAnimations,
        clampAnimations,
        nodeTransformations,
        shadows,
        heightReference,
        distanceDisplayCondition,
        silhouetteColor,
        silhouetteSize,
        color,
        colorBlendMode,
        colorBlendAmount,
        clippingPlanes,
        imageBasedLightingFactor,
        lightColor
      })

      return model
    }
  }
}
</script>
