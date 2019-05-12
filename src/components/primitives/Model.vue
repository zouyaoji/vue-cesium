<script>
import primitive from '../../mixins/primitive'
export default {
  name: 'model-primitive',
  mixins: [primitive],
  props: {
    url: String,
    basePath: String,
    show: {
      type: Boolean,
      default: true
    },
    modelMatrix: Object,
    scale: {
      type: Number,
      default: 1
    },
    minimumPixelSize: {
      type: Number,
      default: 0
    },
    maximumScale: Number,
    id: null,
    allowPicking: {
      type: Boolean,
      default: true
    },
    incrementallyLoadTextures: {
      type: Boolean,
      default: true
    },
    asynchronous: {
      type: Boolean,
      default: true
    },
    clampAnimations: {
      type: Boolean,
      default: true
    },
    shadows: {
      type: Number,
      default: 1
    },
    debugShowBoundingVolume: {
      type: Boolean,
      default: false
    },
    debugWireframe: {
      type: Boolean,
      default: false
    },
    heightReference: Object,
    scene: Object,
    distanceDisplayCondition: Object,
    color: Object,
    colorBlendMode: {
      type: Number,
      default: 0
    },
    colorBlendAmount: {
      type: Number,
      default: 0.5
    },
    silhouetteColor: Object,
    silhouetteSize: {
      type: Number,
      default: 0.0
    },
    clippingPlanes: Object,
    dequantizeInShader: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    url (val) {
      this.reload()
    },
    basePath (val) {
      this.reload()
    },
    show (val) {
      this.originInstance.show = val
    },
    modelMatrix (val) {
      this.originInstance.modelMatrix = val
    },
    scale (val) {
      this.originInstance.scale = val
    },
    minimumPixelSize (val) {
      this.originInstance.minimumPixelSize = val
    },
    maximumScale (val) {
      this.originInstance.maximumScale = val
    },
    id (val) {
      this.originInstance.id = val
    },
    allowPicking (val) {
      this.originInstance.allowPicking = val
    },
    incrementallyLoadTextures (val) {
      this.originInstance.incrementallyLoadTextures = val
    },
    asynchronous (val) {
      this.originInstance.asynchronous = val
    },
    clampAnimations (val) {
      this.originInstance.clampAnimations = val
    },
    shadows (val) {
      this.originInstance.shadows = val
    },
    debugShowBoundingVolume (val) {
      this.originInstance.debugShowBoundingVolume = val
    },
    debugWireframe (val) {
      this.originInstance.debugWireframe = val
    },
    heightReference (val) {
      this.originInstance.heightReference = val
    },
    scene (val) {
      this.reload()
    },
    distanceDisplayCondition (val) {
      this.originInstance.distanceDisplayCondition = val
    },
    color (val) {
      this.originInstance.color = val
    },
    colorBlendMode (val) {
      this.originInstance.colorBlendMode = val
    },
    colorBlendAmount (val) {
      this.originInstance.colorBlendAmount = val
    },
    silhouetteColor (val) {
      this.originInstance.silhouetteColor = val
    },
    silhouetteSize (val) {
      this.originInstance.silhouetteSize = val
    },
    clippingPlanes (val) {
      this.originInstance.clippingPlanes = val
    },
    dequantizeInShader (val) {
      this.originInstance.dequantizeInShader = val
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, url, basePath, show, modelMatrix, scale, minimumPixelSize, maximumScale, id, allowPicking, incrementallyLoadTextures,
        asynchronous, clampAnimations, shadows, debugShowBoundingVolume, debugWireframe, heightReference, scene, distanceDisplayCondition, color,
        colorBlendMode, colorBlendAmount, silhouetteColor, silhouetteSize, clippingPlanes, dequantizeInShader } = this
      let options = {
        url,
        basePath,
        show,
        modelMatrix,
        scale,
        minimumPixelSize,
        maximumScale,
        id,
        allowPicking,
        incrementallyLoadTextures,
        asynchronous,
        clampAnimations,
        shadows,
        debugShowBoundingVolume,
        debugWireframe,
        heightReference,
        scene,
        distanceDisplayCondition,
        color,
        colorBlendMode,
        colorBlendAmount,
        silhouetteColor,
        silhouetteSize,
        clippingPlanes,
        dequantizeInShader
      }
      this.removeNullItem(options)
      let model = Cesium.Model.fromGltf(options)
      return model
    }
  }
}
</script>
