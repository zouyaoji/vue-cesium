<script>
import bindEvents from '../../util/bindEvent'
import {
  show,
  modelMatrix,
  shadows,
  clippingPlanes,
  debugShowBoundingVolume,
  debugWireframe
} from '../../mixins/entity/allProps'
import primitiveMixin from '../../mixins/primitive/primitiveMixin'
import { makeCartesian2, makeCartesian3 } from '../../util/util'
export default {
  name: 'vc-primitive-3dtileset',
  mixins: [
    show,
    modelMatrix,
    shadows,
    clippingPlanes,
    debugShowBoundingVolume,
    debugWireframe,
    primitiveMixin
  ],
  props: {
    url: String,
    maximumScreenSpaceError: {
      type: Number,
      default: 16
    },
    maximumMemoryUsage: {
      type: Number,
      default: 512
    },
    cullWithChildrenBounds: {
      type: Boolean,
      default: true
    },
    dynamicScreenSpaceError: {
      type: Boolean,
      default: false
    },
    dynamicScreenSpaceErrorDensity: {
      type: Number,
      default: 0.00278
    },
    dynamicScreenSpaceErrorFactor: {
      type: Number,
      default: 4.0
    },
    dynamicScreenSpaceErrorHeightFalloff: {
      type: Number,
      default: 0.25
    },
    skipLevelOfDetail: {
      type: Boolean,
      default: true
    },
    baseScreenSpaceError: {
      type: Number,
      default: 1024
    },
    skipScreenSpaceErrorFactor: {
      type: Number,
      default: 16
    },
    skipLevels: {
      type: Number,
      default: 1
    },
    immediatelyLoadDesiredLevelOfDetail: {
      type: Boolean,
      default: false
    },
    loadSiblings: {
      type: Boolean,
      default: false
    },
    classificationType: Number,
    ellipsoid: Object,
    pointCloudShading: Object,
    imageBasedLightingFactor: Object,
    lightColor: Object,
    debugFreezeFrame: {
      type: Boolean,
      default: false
    },
    debugColorizeTiles: {
      type: Boolean,
      default: false
    },
    debugShowContentBoundingVolume: {
      type: Boolean,
      default: false
    },
    debugShowViewerRequestVolume: {
      type: Boolean,
      default: false
    },
    debugShowGeometricError: {
      type: Boolean,
      default: false
    },
    debugShowRenderingStatistics: {
      type: Boolean,
      default: false
    },
    debugShowMemoryUsage: {
      type: Boolean,
      default: false
    },
    debugShowUrl: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    url () {
      this.reload()
    },
    maximumScreenSpaceError (val) {
      this.primitive.maximumScreenSpaceError = val
    },
    maximumMemoryUsage (val) {
      this.primitive.maximumMemoryUsage = val
    },
    cullWithChildrenBounds (val) {
      this.primitive.cullWithChildrenBounds = val
    },
    dynamicScreenSpaceError (val) {
      this.primitive.dynamicScreenSpaceError = val
    },
    dynamicScreenSpaceErrorDensity (val) {
      this.primitive.dynamicScreenSpaceErrorDensity = val
    },
    dynamicScreenSpaceErrorFactor (val) {
      this.primitive.dynamicScreenSpaceErrorFactor = val
    },
    dynamicScreenSpaceErrorHeightFalloff (val) {
      this.primitive.dynamicScreenSpaceErrorHeightFalloff = val
    },
    skipLevelOfDetail (val) {
      this.primitive.skipLevelOfDetail = val
    },
    baseScreenSpaceError (val) {
      this.primitive.baseScreenSpaceError = val
    },
    skipScreenSpaceErrorFactor (val) {
      this.primitive.skipScreenSpaceErrorFactor = val
    },
    skipLevels (val) {
      this.primitive.skipLevels = val
    },
    immediatelyLoadDesiredLevelOfDetail (val) {
      this.primitive.immediatelyLoadDesiredLevelOfDetail = val
    },
    loadSiblings (val) {
      this.primitive.loadSiblings = val
    },
    classificationType () {
      this.reload()
    },
    ellipsoid () {
      this.reload()
    },
    pointCloudShading (val) {
      this.primitive.pointCloudShading = val
    },
    imageBasedLightingFactor (val) {
      this.primitive.imageBasedLightingFactor = makeCartesian2(val)
    },
    lightColor (val) {
      this.primitive.lightColor = makeCartesian3(val)
    },
    debugFreezeFrame (val) {
      this.primitive.debugFreezeFrame = val
    },
    debugColorizeTiles (val) {
      this.primitive.debugColorizeTiles = val
    },
    debugShowContentBoundingVolume (val) {
      this.primitive.debugShowContentBoundingVolume = val
    },
    debugShowViewerRequestVolume (val) {
      this.primitive.debugShowViewerRequestVolume = val
    },
    debugShowGeometricError (val) {
      this.primitive.debugShowGeometricError = val
    },
    debugShowRenderingStatistics (val) {
      this.primitive.debugShowRenderingStatistics = val
    },
    debugShowMemoryUsage (val) {
      this.primitive.debugShowMemoryUsage = val
    },
    debugShowUrl (val) {
      this.primitive.debugShowUrl = val
    }
  },
  methods: {
    createCesiumObject () {
      const { url, show, modelMatrix, shadows, maximumScreenSpaceError, maximumMemoryUsage, cullWithChildrenBounds, dynamicScreenSpaceError,
        dynamicScreenSpaceErrorDensity, dynamicScreenSpaceErrorFactor, dynamicScreenSpaceErrorHeightFalloff, skipLevelOfDetail, baseScreenSpaceError,
        skipScreenSpaceErrorFactor, skipLevels, immediatelyLoadDesiredLevelOfDetail, loadSiblings, clippingPlanes, classificationType, ellipsoid, pointCloudShading,
        imageBasedLightingFactor, lightColor, debugFreezeFrame, debugColorizeTiles, debugWireframe, debugShowBoundingVolume, debugShowContentBoundingVolume,
        debugShowViewerRequestVolume, debugShowGeometricError, debugShowRenderingStatistics, debugShowMemoryUsage, debugShowUrl } = this
      let options = {
        url,
        show,
        modelMatrix,
        shadows,
        maximumScreenSpaceError,
        maximumMemoryUsage,
        cullWithChildrenBounds,
        dynamicScreenSpaceError,
        dynamicScreenSpaceErrorDensity,
        dynamicScreenSpaceErrorFactor,
        dynamicScreenSpaceErrorHeightFalloff,
        skipLevelOfDetail,
        baseScreenSpaceError,
        skipScreenSpaceErrorFactor,
        skipLevels,
        immediatelyLoadDesiredLevelOfDetail,
        loadSiblings,
        clippingPlanes,
        classificationType,
        ellipsoid,
        pointCloudShading,
        imageBasedLightingFactor: makeCartesian2(imageBasedLightingFactor),
        lightColor: makeCartesian3(lightColor),
        debugFreezeFrame,
        debugColorizeTiles,
        debugWireframe,
        debugShowBoundingVolume,
        debugShowContentBoundingVolume,
        debugShowViewerRequestVolume,
        debugShowGeometricError,
        debugShowRenderingStatistics,
        debugShowMemoryUsage,
        debugShowUrl
      }
      this.removeNullItem(options)
      let tileset = new Cesium.Cesium3DTileset(options)
      bindEvents.call(this, tileset)
      return tileset
    }
  }
}
</script>
