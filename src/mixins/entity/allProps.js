import {
  makeDistanceDisplayCondition,
  makeCartesian2,
  makeCartesian3,
  makeColor,
  makeNearFarScalar,
  makeMaterial,
  makeCartesian3Array,
  lnglatValidator
} from '../../util/util'

/**
 * position mixin
 */
const position = {
  props: {
    position: {
      type: Object,
      validator: val => {
        return val && val.hasOwnProperty('lng') ? lnglatValidator(val.lng, val.lat) : true
      }
    }
  },
  watch: {
    position (val) {
      this.cesiumObject.position = val.hasOwnProperty('lng') ? makeCartesian3(val) : val
    }
  }
}

/**
 * show mixin
 */
const show = {
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    show (val) {
      this.cesiumObject.show = val
    }
  }
}

/**
 * distanceDisplayCondition mixin
 */
const distanceDisplayCondition = {
  props: {
    distanceDisplayCondition: Object
  },
  watch: {
    distanceDisplayCondition (val) {
      this.cesiumObject.distanceDisplayCondition = makeDistanceDisplayCondition(val)
    }
  }
}

/**
 * image mixin
 */
const image = {
  props: {
    image: String | Object
  },
  watch: {
    image (val) {
      this.cesiumObject.image = val
    }
  }
}

/**
 * scale mixin
 */
const scale = {
  props: {
    scale: {
      type: Number,
      default: 1.0
    }
  },
  watch: {
    scale (val) {
      this.cesiumObject.scale = val
    }
  }
}

/**
 * pixelOffset mixin
 */
const pixelOffset = {
  props: {
    pixelOffset: {
      type: Object,
      default: () => {
        return {
          x: 0,
          y: 0
        }
      }
    }
  },
  watch: {
    pixelOffset: {
      handler (val) {
        this.cesiumObject.pixelOffset = makeCartesian2(val)
      },
      deep: true
    }
  }
}

/**
 * eyeOffset mixin
 */
const eyeOffset = {
  props: {
    eyeOffset: {
      type: Object,
      default: () => {
        return {
          x: 0,
          y: 0,
          z: 0
        }
      }
    }
  },
  watch: {
    eyeOffset: {
      handler (val) {
        this.cesiumObject.eyeOffset = makeCartesian3(val)
      },
      deep: true
    }
  }
}

/**
 * horizontalOrigin mixin
 */
const horizontalOrigin = {
  props: {
    horizontalOrigin: {
      type: Number,
      default: 0
    }
  },
  watch: {
    horizontalOrigin (val) {
      this.cesiumObject.horizontalOrigin = val
    }
  }
}

/**
 * verticalOrigin mixin
 */
const verticalOrigin = {
  props: {
    verticalOrigin: {
      type: Number,
      default: 0
    }
  },
  watch: {
    verticalOrigin (val) {
      this.cesiumObject.verticalOrigin = val
    }
  }
}

/**
 * heightReference mixin
 */
const heightReference = {
  props: {
    heightReference: Number
  },
  watch: {
    heightReference (val) {
      this.cesiumObject.heightReference = val
    }
  }
}

/**
 * color mixin
 */
const color = {
  props: {
    color: {
      type: Object | String | Array,
      default: 'white'
    }
  },
  watch: {
    color (val) {
      this.cesiumObject.color = makeColor(val)
    }
  }
}

/**
 * rotation mixin
 */
const rotation = {
  props: {
    rotation: {
      type: Number | Object,
      default: 0
    }
  },
  watch: {
    rotation (val) {
      this.cesiumObject.rotation = val
    }
  }
}

/**
 * alignedAxis mixin
 */
const alignedAxis = {
  props: {
    alignedAxis: {
      type: Object,
      default: () => {
        return {
          x: 0,
          y: 0,
          z: 0
        }
      }
    }
  },
  watch: {
    alignedAxis: {
      handler (val) {
        this.graphics.alignedAxis = makeCartesian3(val)
      },
      deep: true
    }
  }
}

/**
 * sizeInMeters mixin
 */
const sizeInMeters = {
  props: {
    sizeInMeters: Boolean
  },
  watch: {
    sizeInMeters (val) {
      this.cesiumObject.sizeInMeters = val
    }
  }
}

/**
 * width mixin
 */
const width = {
  props: {
    width: Number
  },
  watch: {
    width (val) {
      this.cesiumObject.width = val
    }
  }
}

/**
 * height mixin
 */
const height = {
  props: {
    height: Number
  },
  watch: {
    height (val) {
      this.cesiumObject.height = val
    }
  }
}

/**
 * scaleByDistance mixin
 */
const scaleByDistance = {
  props: {
    scaleByDistance: Object
  },
  watch: {
    scaleByDistance (val) {
      this.cesiumObject.scaleByDistance = makeNearFarScalar(val)
    }
  }
}

/**
 * translucencyByDistance mixin
 */
const translucencyByDistance = {
  props: {
    translucencyByDistance: Object
  },
  watch: {
    translucencyByDistance (val) {
      this.cesiumObject.translucencyByDistance = makeNearFarScalar(val)
    }
  }
}

/**
 * pixelOffsetScaleByDistance mixin
 */
const pixelOffsetScaleByDistance = {
  props: {
    pixelOffsetScaleByDistance: Object
  },
  watch: {
    pixelOffsetScaleByDistance (val) {
      this.cesiumObject.pixelOffsetScaleByDistance = makeNearFarScalar(val)
    }
  }
}

/**
 * disableDepthTestDistance mixin
 */
const disableDepthTestDistance = {
  props: {
    disableDepthTestDistance: Number
  },
  watch: {
    distanceDisplayCondition (val) {
      this.cesiumObject.disableDepthTestDistance = val
    }
  }
}

/**
 * dimensions mixin
 */
const dimensions = {
  props: {
    dimensions: Object
  },
  watch: {
    dimensions (val) {
      this.cesiumObject.dimensions = makeCartesian3(val)
    }
  }
}

/**
 * fill mixin
 */
const fill = {
  props: {
    fill: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    fill (val) {
      this.cesiumObject.fill = val
    }
  }
}

/**
 * material mixin
 */
const material = {
  props: {
    material: {
      type: Object | String | Array,
      default: 'white'
    }
  },
  watch: {
    material (val) {
      this.cesiumObject.material = makeMaterial(val)
    }
  }
}

/**
 * outline mixin
 */
const outline = {
  props: {
    outline: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    outline (val) {
      this.cesiumObject.outline = val
    }
  }
}

/**
 * outlineColor mixin
 */
const outlineColor = {
  props: {
    outlineColor: {
      type: Object | String | Array,
      default: 'black'
    }
  },
  watch: {
    outlineColor (val) {
      this.cesiumObject.outlineColor = makeColor(val)
    }
  }
}

/**
 * outlineWidth mixin
 */
const outlineWidth = {
  props: {
    outlineWidth: {
      type: Number,
      default: 1.0
    }
  },
  watch: {
    outlineWidth (val) {
      this.cesiumObject.outlineWidth = val
    }
  }
}

/**
 * shadows mixin
 */
const shadows = {
  props: {
    shadows: Number
  },
  watch: {
    shadows (val) {
      this.cesiumObject.shadows = val
    }
  }
}

/**
 * positions mixin
 */
const positions = {
  props: {
    positions: Array
  },
  watch: {
    positions (val) {
      if (Cesium.defined(this.cesiumObject.positions) && Cesium.defined(this.cesiumObject.positions._callback)) {
        return
      }
      this.cesiumObject.positions = makeCartesian3Array(val)
    }
  }
}

/**
 * extrudedHeight mixin
 */
const extrudedHeight = {
  props: {
    extrudedHeight: Number
  },
  watch: {
    extrudedHeight (val) {
      this.cesiumObject.extrudedHeight = val
    }
  }
}

/**
 * extrudedHeightReference mixin
 */
const extrudedHeightReference = {
  props: {
    extrudedHeightReference: Number
  },
  watch: {
    extrudedHeightReference (val) {
      this.cesiumObject.extrudedHeightReference = val
    }
  }
}

/**
 * cornerType mixin
 */
const cornerType = {
  props: {
    cornerType: {
      type: Number,
      default: 0
    }
  },
  watch: {
    cornerType (val) {
      this.cesiumObject.cornerType = val
    }
  }
}

/**
 * granularity mixin
 */
const granularity = {
  props: {
    granularity: Number
  },
  watch: {
    granularity (val) {
      this.cesiumObject.granularity = val
    }
  }
}

/**
 * classificationType mixin
 */
const classificationType = {
  props: {
    classificationType: {
      type: Number,
      default: 2
    }
  },
  watch: {
    classificationType (val) {
      this.cesiumObject.classificationType = val
    }
  }
}

/**
 * zIndex mixin
 */
const zIndex = {
  props: {
    zIndex: Number
  },
  watch: {
    zIndex (val) {
      this.cesiumObject.zIndex = val
    }
  }
}

/**
 * length mixin
 */
const length = {
  props: {
    length: Number
  },
  watch: {
    length (val) {
      this.cesiumObject.length = val
    }
  }
}

/**
 * topRadius mixin
 */
const topRadius = {
  props: {
    topRadius: Number
  },
  watch: {
    topRadius (val) {
      this.cesiumObject.topRadius = val
    }
  }
}

/**
 * bottomRadius mixin
 */
const bottomRadius = {
  props: {
    bottomRadius: Number
  },
  watch: {
    bottomRadius (val) {
      this.cesiumObject.bottomRadius = val
    }
  }
}

/**
 * numberOfVerticalLines mixin
 */
const numberOfVerticalLines = {
  props: {
    numberOfVerticalLines: {
      type: Number,
      default: 16
    }
  },
  watch: {
    numberOfVerticalLines (val) {
      this.cesiumObject.numberOfVerticalLines = val
    }
  }
}

/**
 * slices mixin
 */
const slices = {
  props: {
    slices: {
      type: Number,
      default: 128
    }
  },
  watch: {
    slices (val) {
      this.cesiumObject.slices = val
    }
  }
}

/**
 * semiMajorAxis mixin
 */
const semiMajorAxis = {
  props: {
    semiMajorAxis: Number
  },
  watch: {
    semiMajorAxis (val) {
      this.cesiumObject.semiMajorAxis = val
    }
  }
}

/**
 * semiMinorAxis mixin
 */
const semiMinorAxis = {
  props: {
    semiMinorAxis: Number
  },
  watch: {
    semiMinorAxis (val) {
      this.cesiumObject.semiMinorAxis = val
    }
  }
}

/**
 * stRotation mixin
 */
const stRotation = {
  props: {
    stRotation: {
      type: [Number, Object],
      default: 0.0
    }
  },
  watch: {
    stRotation (val) {
      this.cesiumObject.stRotation = val
    }
  }
}

/**
 * radii mixin
 */
const radii = {
  props: {
    radii: Object
  },
  watch: {
    radii (val) {
      this.cesiumObject.radii = makeCartesian3(val)
    }
  }
}

/**
 * stackPartitions mixin
 */
const stackPartitions = {
  props: {
    stackPartitions: {
      type: Number,
      default: 64
    }
  },
  watch: {
    stackPartitions (val) {
      this.cesiumObject.stackPartitions = val
    }
  }
}

/**
 * slicePartitions mixin
 */
const slicePartitions = {
  props: {
    slicePartitions: {
      type: Number,
      default: 64
    }
  },
  watch: {
    slicePartitions (val) {
      this.cesiumObject.slicePartitions = val
    }
  }
}

/**
 * subdivisions mixin
 */
const subdivisions = {
  props: {
    subdivisions: {
      type: Number,
      default: 128
    }
  },
  watch: {
    subdivisions (val) {
      this.cesiumObject.subdivisions = val
    }
  }
}

/**
 * text mixin
 */
const text = {
  props: {
    text: String
  },
  watch: {
    text (val) {
      this.cesiumObject.text = val
    }
  }
}

/**
 * font mixin
 */
const font = {
  props: {
    font: {
      type: String,
      default: '30px sans-serif'
    }
  },
  watch: {
    font (val) {
      this.cesiumObject.font = val
    }
  }
}

/**
 * labelStyle mixin
 */
const labelStyle = {
  props: {
    labelStyle: {
      type: Number,
      default: 0
    }
  },
  watch: {
    labelStyle (val) {
      this.cesiumObject.style = val
    }
  }
}

/**
 * showBackground mixin
 */
const showBackground = {
  props: {
    showBackground: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    showBackground (val) {
      this.cesiumObject.showBackground = val
    }
  }
}

/**
 * backgroundColor mixin
 */
const backgroundColor = {
  props: {
    backgroundColor: {
      type: Object | String | Array,
      default: () => {
        return [0.165, 0.165, 0.165, 0.8]
      }
    }
  },
  watch: {
    showBackground (val) {
      this.cesiumObject.backgroundColor = makeColor(val)
    }
  }
}

/**
 * backgroundPadding mixin
 */
const backgroundPadding = {
  props: {
    backgroundPadding: {
      type: Object,
      default: () => {
        return { x: 7, y: 5 }
      }
    }
  },
  watch: {
    showBackground (val) {
      this.cesiumObject.backgroundPadding = makeCartesian2(val)
    }
  }
}

/**
 * fillColor mixin
 */
const fillColor = {
  props: {
    fillColor: {
      type: Object | String | Array,
      default: 'WHITE'
    }
  },
  watch: {
    fillColor (val) {
      this.cesiumObject.fillColor = makeColor(val)
    }
  }
}

/**
 * uri mixin
 */
const uri = {
  props: {
    uri: String
  },
  watch: {
    uri (val) {
      this.cesiumObject.uri = val
    }
  }
}

/**
 * minimumPixelSize mixin
 */
const minimumPixelSize = {
  props: {
    minimumPixelSize: {
      type: Number,
      default: 0.0
    }
  },
  watch: {
    minimumPixelSize (val) {
      this.cesiumObject.minimumPixelSize = val
    }
  }
}

/**
 * maximumScale mixin
 */
const maximumScale = {
  props: {
    maximumScale: Number
  },
  watch: {
    maximumScale (val) {
      this.cesiumObject.maximumScale = val
    }
  }
}

/**
 * incrementallyLoadTextures mixin
 */
const incrementallyLoadTextures = {
  props: {
    incrementallyLoadTextures: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    incrementallyLoadTextures (val) {
      this.cesiumObject.incrementallyLoadTextures = val
    }
  }
}

/**
 * clampAnimations mixin
 */
const clampAnimations = {
  props: {
    clampAnimations: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    clampAnimations (val) {
      this.cesiumObject.clampAnimations = val
    }
  }
}

/**
 * silhouetteColor mixin
 */
const silhouetteColor = {
  props: {
    silhouetteColor: Object | String | Array
  },
  watch: {
    silhouetteColor (val) {
      this.cesiumObject.silhouetteColor = makeColor(val)
    }
  }
}

/**
 * silhouetteSize mixin
 */
const silhouetteSize = {
  props: {
    silhouetteSize: {
      type: Number,
      default: 0.0
    }
  },
  watch: {
    silhouetteSize (val) {
      this.cesiumObject.silhouetteSize = val
    }
  }
}

/**
 * colorBlendMode mixin
 */
const colorBlendMode = {
  props: {
    colorBlendMode: {
      type: Number,
      default: 0
    }
  },
  watch: {
    colorBlendMode (val) {
      this.cesiumObject.colorBlendMode = val
    }
  }
}

/**
 * colorBlendAmount mixin
 */
const colorBlendAmount = {
  props: {
    colorBlendAmount: {
      type: Number,
      default: 0.5
    }
  },
  watch: {
    colorBlendAmount (val) {
      this.cesiumObject.colorBlendAmount = val
    }
  }
}

/**
 * clippingPlanes mixin
 */
const clippingPlanes = {
  props: {
    clippingPlanes: Object
  },
  watch: {
    clippingPlanes (val) {
      this.cesiumObject.clippingPlanes = val
    }
  }
}

/**
 * pixelSize mixin
 */
const pixelSize = {
  props: {
    pixelSize: {
      type: Number,
      default: 1
    }
  },
  watch: {
    pixelSize (val) {
      this.cesiumObject.pixelSize = val
    }
  }
}

/**
 * perPositionHeight mixin
 */
const perPositionHeight = {
  props: {
    perPositionHeight: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    perPositionHeight (val) {
      this.cesiumObject.perPositionHeight = val
    }
  }
}

/**
 * closeTop mixin
 */
const closeTop = {
  props: {
    closeTop: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    closeTop (val) {
      this.cesiumObject.closeTop = val
    }
  }
}

/**
 * closeBottom mixin
 */
const closeBottom = {
  props: {
    closeBottom: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    closeBottom (val) {
      this.cesiumObject.closeBottom = val
    }
  }
}

/**
 * arcType mixin
 */
const arcType = {
  props: {
    arcType: {
      type: Number,
      default: 1
    }
  },
  watch: {
    arcType (val) {
      this.cesiumObject.arcType = val
    }
  }
}

/**
 * minimumHeights mixin
 */
const minimumHeights = {
  props: {
    minimumHeights: Array
  },
  watch: {
    minimumHeights (val) {
      this.cesiumObject.minimumHeights = val
    }
  }
}

/**
 * maximumHeights mixin
 */
const maximumHeights = {
  props: {
    maximumHeights: Array
  },
  watch: {
    maximumHeights (val) {
      this.cesiumObject.maximumHeights = val
    }
  }
}

// imageryProvider 相关
/**
 * url mixin
 */
const url = {
  props: {
    url: String | Object
  }
}

/**
 * token mixin
 */
const token = {
  props: {
    token: String
  }
}

/**
 * tileDiscardPolicy mixin
 */
const tileDiscardPolicy = {
  props: {
    tileDiscardPolicy: Object
  }
}

/**
 * layers mixin
 */
const layers = {
  props: {
    layers: String
  }
}

/**
 * enablePickFeatures mixin
 */
const enablePickFeatures = {
  props: {
    enablePickFeatures: {
      type: Boolean,
      default: true
    }
  }
}

/**
 * rectangle mixin
 */
const rectangle = {
  props: {
    rectangle: Object
  }
}

/**
 * tilingScheme mixin
 */
const tilingScheme = {
  props: {
    tilingScheme: Object
  }
}

/**
 * ellipsoid mixin
 */
const ellipsoid = {
  props: {
    ellipsoid: Object
  }
}

/**
 * credit mixin
 */
const credit = {
  props: {
    credit: {
      type: String | Object,
      default: ''
    }
  }
}

/**
 * tileWidth mixin
 */
const tileWidth = {
  props: {
    tileWidth: {
      type: Number,
      default: 256
    }
  }
}

/**
 * tileHeight mixin
 */
const tileHeight = {
  props: {
    tileHeight: {
      type: Number,
      default: 256
    }
  }
}

/**
 * maximumLevel mixin
 */
const maximumLevel = {
  props: {
    maximumLevel: Number
  }
}

/**
 * minimumLevel mixin
 */
const minimumLevel = {
  props: {
    minimumLevel: {
      type: Number,
      default: 0
    }
  }
}

/**
 * fileExtension mixin
 */
const fileExtension = {
  props: {
    fileExtension: {
      type: String,
      default: 'png'
    }
  }
}

/**
 * accessToken mixin
 */
const accessToken = {
  props: {
    accessToken: String
  }
}

/**
 * format mixin
 */
const format = {
  props: {
    format: {
      type: String,
      default: 'png'
    }
  }
}

/**
 * subdomains mixin
 */
const subdomains = {
  props: {
    subdomains: String | Array
  }
}

/**
 * getFeatureInfoFormats mixin
 */
const getFeatureInfoFormats = {
  props: {
    getFeatureInfoFormats: Array
  }
}

/**
 * clock mixin
 */
const clock = {
  props: {
    clock: Object
  }
}

/**
 * times mixin
 */
const times = {
  props: {
    times: Object
  }
}

// primitive 相关

/**
 * allowPicking
 * asynchronous
 *
 * readonly
 */
const aaMixin = {
  props: {
    allowPicking: {
      type: Boolean,
      default: true
    },
    asynchronous: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    allowPicking () {
      this.reload()
    },
    asynchronous () {
      this.reload()
    }
  }
}

/**
 * debugShowShadowVolume mixin
 */
const debugShowShadowVolume = {
  props: {
    debugShowShadowVolume: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    debugShowShadowVolume (val) {
      this.cesiumObject.debugShowShadowVolume = val
    }
  }
}

/**
 * releaseGeometryInstances mixin
 */
const releaseGeometryInstances = {
  props: {
    releaseGeometryInstances: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    releaseGeometryInstances () {
      this.reload()
    }
  }
}

/**
 * interleave mixin
 */
const interleave = {
  props: {
    interleave: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    interleave () {
      this.reload()
    }
  }
}

/**
 * appearance mixin
 */
const appearance = {
  props: {
    appearance: Object
  },
  watch: {
    appearance (val) {
      this.cesiumObject.appearance = val
    }
  }
}

/**
 * geometryInstances mixin
 */
const geometryInstances = {
  props: {
    geometryInstances: Array | Object
  },
  watch: {
    geometryInstances () {
      this.reload()
    }
  }
}

/**
 * vertexCacheOptimize
 * compressVertices
 */
const vcMixin = {
  props: {
    vertexCacheOptimize: {
      type: Boolean,
      default: false
    },
    compressVertices: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    vertexCacheOptimize () {
      this.reload()
    },
    compressVertices () {
      this.reload()
    }
  }
}

/**
 * modelMatrix mixin
 */
const modelMatrix = {
  props: {
    modelMatrix: Object
  },
  watch: {
    modelMatrix (val) {
      this.cesiumObject.modelMatrix = val
    }
  }
}

/**
 * debugShowBoundingVolume mixin
 */
const debugShowBoundingVolume = {
  props: {
    debugShowBoundingVolume: {
      tyep: Boolean,
      default: false
    }
  },
  watch: {
    debugShowBoundingVolume (val) {
      this.cesiumObject.debugShowBoundingVolume = val
    }
  }
}

/**
 * scene mixin
 */
const scene = {
  props: {
    scene: Object
  },
  watch: {
    scene (val) {
      this.cesiumObject.scene = val
    }
  }
}

/**
 * blendOption mixin
 */
const blendOption = {
  props: {
    blendOption: {
      type: Number,
      default: 2
    }
  },
  watch: {
    blendOption (val) {
      this.cesiumObject.blendOption = val
    }
  }
}

/**
 * id mixin
 */
const id = {
  props: {
    id: null
  },
  watch: {
    id (val) {
      this.cesiumObject.id = val
    }
  }
}

/**
 * loop mixin
 */
const loop = {
  props: {
    loop: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    loop (val) {
      this.cesiumObject.loop = val
    }
  }
}

/**
 * debugWireframe mixin
 */
const debugWireframe = {
  props: {
    debugWireframe: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    debugWireframe (val) {
      this.primitive.debugWireframe = val
    }
  }
}

// geometry 相关

/**
 * vertexFormat mixin
 */
const vertexFormat = {
  props: {
    vertexFormat: Object
  }
}

export {
  debugWireframe,
  vertexFormat,
  position,
  loop,
  geometryInstances,
  appearance,
  interleave,
  releaseGeometryInstances,
  debugShowShadowVolume,
  id,
  aaMixin,
  vcMixin,
  modelMatrix,
  debugShowBoundingVolume,
  scene,
  blendOption,
  maximumHeights,
  minimumHeights,
  arcType,
  closeBottom,
  closeTop,
  perPositionHeight,
  pixelSize,
  clippingPlanes,
  colorBlendAmount,
  colorBlendMode,
  silhouetteSize,
  silhouetteColor,
  clampAnimations,
  incrementallyLoadTextures,
  maximumScale,
  minimumPixelSize,
  uri,
  fillColor,
  backgroundPadding,
  backgroundColor,
  showBackground,
  labelStyle,
  font,
  text,
  subdivisions,
  slicePartitions,
  stackPartitions,
  radii,
  stRotation,
  semiMinorAxis,
  semiMajorAxis,
  slices,
  numberOfVerticalLines,
  bottomRadius,
  topRadius,
  length,
  zIndex,
  classificationType,
  granularity,
  cornerType,
  extrudedHeightReference,
  extrudedHeight,
  positions,
  image,
  scale,
  pixelOffset,
  eyeOffset,
  horizontalOrigin,
  verticalOrigin,
  heightReference,
  color,
  rotation,
  alignedAxis,
  sizeInMeters,
  width,
  height,
  scaleByDistance,
  translucencyByDistance,
  pixelOffsetScaleByDistance,
  disableDepthTestDistance,
  dimensions,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  shadows,
  distanceDisplayCondition,
  show,
  times,
  clock,
  getFeatureInfoFormats,
  subdomains,
  format,
  accessToken,
  fileExtension,
  minimumLevel,
  maximumLevel,
  tileHeight,
  url,
  token,
  tileDiscardPolicy,
  layers,
  enablePickFeatures,
  rectangle,
  tilingScheme,
  ellipsoid,
  credit,
  tileWidth
}
