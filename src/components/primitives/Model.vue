<script>
import primitive from '../../mixins/primitive'
export default {
  name: 'model-primitive',
  mixins: [primitive],
  props: {
    url: {
      type: String
    },
    basePath: {
      type: String
    },
    show: {
      type: Boolean,
      default: true
    },
    modelMatrix: {
      type: Object
    },
    scale: {
      type: Number,
      default: 1
    },
    minimumPixelSize: {
      type: Number,
      default: 0
    },
    maximumScale: {
      type: Number
    },
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
      type: Number
    },
    debugShowBoundingVolume: {
      type: Boolean,
      default: false
    },
    debugWireframe: {
      type: Boolean,
      default: false
    },
    heightReference: {
      type: Object
    },
    scene: {
      type: Object
    },
    distanceDisplayCondition: {
      type: Object
    },
    color: {
      type: Object
    },
    colorBlendMode: {
      type: Number
    },
    colorBlendAmount: {
      type: Number,
      default: 0.5
    },
    silhouetteColor: {
      type: Object
    },
    silhouetteSize: {
      type: Number,
      default: 0.0
    },
    clippingPlanes: {
      type: Object
    },
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
    // reload
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

      let model = Cesium.Model.fromGltf({
        url: url,
        basePath: basePath,
        show: show,
        modelMatrix: modelMatrix,
        scale: scale,
        minimumPixelSize: minimumPixelSize,
        maximumScale: maximumScale,
        id: id,
        allowPicking: allowPicking,
        incrementallyLoadTextures: incrementallyLoadTextures,
        asynchronous: asynchronous,
        clampAnimations: clampAnimations,
        shadows: shadows,
        debugShowBoundingVolume: debugShowBoundingVolume,
        debugWireframe: debugWireframe,
        heightReference: heightReference,
        scene: scene,
        distanceDisplayCondition: distanceDisplayCondition,
        color: color,
        colorBlendMode: colorBlendMode,
        colorBlendAmount: colorBlendAmount,
        silhouetteColor: silhouetteColor,
        silhouetteSize: silhouetteSize,
        clippingPlanes: clippingPlanes,
        dequantizeInShader: dequantizeInShader
      })
      return model
    }
  }
}
</script>
