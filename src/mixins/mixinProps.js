import {
  lnglatValidator
} from '../utils/util'

/**
 * @const {Object}  position mixin
 */
const position = {
  props: {
    position: {
      type: Object,
      validator: val => {
        return val && Object.prototype.hasOwnProperty.call(val, 'lng') ? lnglatValidator(val.lng, val.lat) : true
      }
    }
  }
}

/**
 * @const {Boolean}  show mixin
 */
const show = {
  props: {
    show: {
      type: Boolean,
      default: true
    }
  }
}

/**
 * @const {Object}  distanceDisplayCondition mixin
 */
const distanceDisplayCondition = {
  props: {
    distanceDisplayCondition: Object
  }
}

/**
 * @const {String | Object} image mixin
 */
const image = {
  props: {
    image: String | Object
  }
}

/**
 * @const {Number} scale mixin
 */
const scale = {
  props: {
    scale: {
      type: Number,
      default: 1.0
    }
  }
}

/**
 * @const {Object}  pixelOffset mixin
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
  }
}

/**
 * @const {Object}  eyeOffset mixin
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
  }
}

/**
 * @const {Number} horizontalOrigin mixin
 */
const horizontalOrigin = {
  props: {
    horizontalOrigin: {
      type: Number,
      default: 0
    }
  }
}

/**
 * @const {Number}  verticalOrigin mixin
 */
const verticalOrigin = {
  props: {
    verticalOrigin: {
      type: Number,
      default: 0
    }
  }
}

/**
 * @const {Number} heightReference mixin
 */
const heightReference = {
  props: {
    heightReference: Number
  }
}

/**
 * @const {Object|String|Array} color mixin
 */
const color = {
  props: {
    color: {
      type: Object | String | Array,
      default: 'white'
    }
  }
}

/**
 * @const {Number|Object} rotation mixin
 */
const rotation = {
  props: {
    rotation: {
      type: Number | Object,
      default: 0
    }
  }
}

/**
 * @const {Object} alignedAxis mixin
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
  }
}

/**
 * @const {Boolean} sizeInMeters mixin
 */
const sizeInMeters = {
  props: {
    sizeInMeters: Boolean
  }
}

/**
 * @const {Number} width mixin
 */
const width = {
  props: {
    width: Number
  }
}

/**
 * @const {Number} height mixin
 */
const height = {
  props: {
    height: Number
  }
}

/**
 * @const {Object} scaleByDistance mixin
 */
const scaleByDistance = {
  props: {
    scaleByDistance: Object
  }
}

/**
 * @const {Object} translucencyByDistance mixin
 */
const translucencyByDistance = {
  props: {
    translucencyByDistance: Object
  }
}

/**
 * @const {Object} pixelOffsetScaleByDistance mixin
 */
const pixelOffsetScaleByDistance = {
  props: {
    pixelOffsetScaleByDistance: Object
  }
}

/**
 * @const {Number} disableDepthTestDistance mixin
 */
const disableDepthTestDistance = {
  props: {
    disableDepthTestDistance: Number
  }
}

/**
 * @const {Object} dimensions mixin
 */
const dimensions = {
  props: {
    dimensions: Object
  }
}

/**
 * @const {Boolean} fill mixin
 */
const fill = {
  props: {
    fill: {
      type: Boolean,
      default: true
    }
  }
}

/**
 * @const {Object|String|Array} material mixin
 */
const material = {
  props: {
    material: {
      type: Object | String | Array,
      default: 'white'
    }
  }
}

/**
 * @const {Boolean} outline mixin
 */
const outline = {
  props: {
    outline: {
      type: Boolean,
      default: false
    }
  }
}

/**
 * @const {Object|String|Array} outlineColor mixin
 */
const outlineColor = {
  props: {
    outlineColor: {
      type: Object | String | Array,
      default: 'black'
    }
  }
}

/**
 * @const {Number} outlineWidth mixin
 */
const outlineWidth = {
  props: {
    outlineWidth: {
      type: Number,
      default: 1.0
    }
  }
}

/**
 * @const {Number} shadows mixin
 */
const shadows = {
  props: {
    shadows: Number
  }
}

/**
 * @const {Array} positions mixin
 */
const positions = {
  props: {
    positions: Array
  }
}

/**
 * @const {Number} extrudedHeight mixin
 */
const extrudedHeight = {
  props: {
    extrudedHeight: Number
  }
}

/**
 * @const {Number} extrudedHeightReference mixin
 */
const extrudedHeightReference = {
  props: {
    extrudedHeightReference: Number
  }
}

/**
 * @const {Number} cornerType mixin
 */
const cornerType = {
  props: {
    cornerType: {
      type: Number,
      default: 0
    }
  }
}

/**
 * @const {Number} granularity mixin
 */
const granularity = {
  props: {
    granularity: Number
  }
}

/**
 * @const {Number} classificationType mixin
 */
const classificationType = {
  props: {
    classificationType: {
      type: Number,
      default: 2
    }
  }
}

/**
 * @const {Number} zIndex mixin
 */
const zIndex = {
  props: {
    zIndex: Number
  }
}

/**
 * @const {Number} length mixin
 */
const length = {
  props: {
    length: Number
  }
}

/**
 * @const {Number} topRadius mixin
 */
const topRadius = {
  props: {
    topRadius: Number
  }
}

/**
 * @const {Number} bottomRadius mixin
 */
const bottomRadius = {
  props: {
    bottomRadius: Number
  }
}

/**
 * @const {Number} numberOfVerticalLines mixin
 */
const numberOfVerticalLines = {
  props: {
    numberOfVerticalLines: {
      type: Number,
      default: 16
    }
  }
}

/**
 * @const {Number} slices mixin
 */
const slices = {
  props: {
    slices: {
      type: Number,
      default: 128
    }
  }
}

/**
 * @const {Number} semiMajorAxis mixin
 */
const semiMajorAxis = {
  props: {
    semiMajorAxis: Number
  }
}

/**
 * @const {Number} semiMinorAxis mixin
 */
const semiMinorAxis = {
  props: {
    semiMinorAxis: Number
  }
}

/**
 * @const {Number|Object} stRotation mixin
 */
const stRotation = {
  props: {
    stRotation: {
      type: [Number, Object],
      default: 0.0
    }
  }
}

/**
 * @const {Number} radii mixin
 */
const radii = {
  props: {
    radii: Object
  }
}

/**
 * @const {Number} stackPartitions mixin
 */
const stackPartitions = {
  props: {
    stackPartitions: {
      type: Number,
      default: 64
    }
  }
}

/**
 * @const {Number} slicePartitions mixin
 */
const slicePartitions = {
  props: {
    slicePartitions: {
      type: Number,
      default: 64
    }
  }
}

/**
 * @const {Number} subdivisions mixin
 */
const subdivisions = {
  props: {
    subdivisions: {
      type: Number,
      default: 128
    }
  }
}

/**
 * @const {String} text mixin
 */
const text = {
  props: {
    text: String
  }
}

/**
 * @const {String} font mixin
 */
const font = {
  props: {
    font: {
      type: String,
      default: '30px sans-serif'
    }
  }
}

/**
 * @const {Number} labelStyle mixin
 */
const labelStyle = {
  props: {
    labelStyle: {
      type: Number,
      default: 0
    }
  }
}

/**
 * @const {Boolean} showBackground mixin
 */
const showBackground = {
  props: {
    showBackground: {
      type: Boolean,
      default: false
    }
  }
}

/**
 * @const {Object/String/Array} backgroundColor mixin
 */
const backgroundColor = {
  props: {
    backgroundColor: {
      type: Object | String | Array,
      default: () => {
        return [0.165, 0.165, 0.165, 0.8]
      }
    }
  }
}

/**
 * @const {Object} backgroundPadding mixin
 */
const backgroundPadding = {
  props: {
    backgroundPadding: {
      type: Object,
      default: () => {
        return { x: 7, y: 5 }
      }
    }
  }
}

/**
 * @const {Object|String|Array} fillColor mixin
 */
const fillColor = {
  props: {
    fillColor: {
      type: Object | String | Array,
      default: 'WHITE'
    }
  }
}

/**
 * @const {String} uri mixin
 */
const uri = {
  props: {
    uri: String
  }
}

/**
 * @const {Number} minimumPixelSize mixin
 */
const minimumPixelSize = {
  props: {
    minimumPixelSize: {
      type: Number,
      default: 0.0
    }
  }
}

/**
 * @const {Number} maximumScale mixin
 */
const maximumScale = {
  props: {
    maximumScale: Number
  }
}

/**
 * @const {Boolean} incrementallyLoadTextures mixin
 */
const incrementallyLoadTextures = {
  props: {
    incrementallyLoadTextures: {
      type: Boolean,
      default: true
    }
  }
}

/**
 * @const {Boolean} clampAnimations mixin
 */
const clampAnimations = {
  props: {
    clampAnimations: {
      type: Boolean,
      default: true
    }
  }
}

/**
 * @const {Object|String|Array} silhouetteColor mixin
 */
const silhouetteColor = {
  props: {
    silhouetteColor: Object | String | Array
  }
}

/**
 * @const {Number} silhouetteSize mixin
 */
const silhouetteSize = {
  props: {
    silhouetteSize: {
      type: Number,
      default: 0.0
    }
  }
}

/**
 * @const {Number} colorBlendMode mixin
 */
const colorBlendMode = {
  props: {
    colorBlendMode: {
      type: Number,
      default: 0
    }
  }
}

/**
 * @const {Number} colorBlendAmount mixin
 */
const colorBlendAmount = {
  props: {
    colorBlendAmount: {
      type: Number,
      default: 0.5
    }
  }
}

/**
 * @const {Object} clippingPlanes mixin
 */
const clippingPlanes = {
  props: {
    clippingPlanes: Object
  }
}

/**
 * @const {Number} pixelSize mixin
 */
const pixelSize = {
  props: {
    pixelSize: {
      type: Number,
      default: 1
    }
  }
}

/**
 * @const {Boolean} perPositionHeight mixin
 */
const perPositionHeight = {
  props: {
    perPositionHeight: {
      type: Boolean,
      default: false
    }
  }
}

/**
 * @const {Boolean} closeTop mixin
 */
const closeTop = {
  props: {
    closeTop: {
      type: Boolean,
      default: true
    }
  }
}

/**
 * @const {Boolean} closeBottom mixin
 */
const closeBottom = {
  props: {
    closeBottom: {
      type: Boolean,
      default: true
    }
  }
}

/**
 * @const {Number} arcType mixin
 */
const arcType = {
  props: {
    arcType: {
      type: Number,
      default: 1
    }
  }
}

/**
 * @const Array{} minimumHeights mixin
 */
const minimumHeights = {
  props: {
    minimumHeights: Array
  }
}

/**
 * @const {Array} maximumHeights mixin
 */
const maximumHeights = {
  props: {
    maximumHeights: Array
  }
}

// imageryProvider
/**
 * @const {String|Object} url mixin
 */
const url = {
  props: {
    url: String | Object
  }
}

/**
 * @const {String} token mixin
 */
const token = {
  props: {
    token: String
  }
}

/**
 * @const {Object} tileDiscardPolicy mixin
 */
const tileDiscardPolicy = {
  props: {
    tileDiscardPolicy: Object
  }
}

/**
 * @const {String} layers mixin
 */
const layers = {
  props: {
    layers: String
  }
}

/**
 * @const {Boolean} enablePickFeatures mixin
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
 * @const {Object} rectangle mixin
 */
const rectangle = {
  props: {
    rectangle: Object
  }
}

/**
 * @const {Object} tilingScheme mixin
 */
const tilingScheme = {
  props: {
    tilingScheme: Object
  }
}

/**
 * @const {Object} ellipsoid mixin
 */
const ellipsoid = {
  props: {
    ellipsoid: Object
  }
}

/**
 * @const {String|Object} credit mixin
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
 * @const {Number} tileWidth mixin
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
 * @const {Number} tileHeight mixin
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
 * @const {Number} maximumLevel mixin
 */
const maximumLevel = {
  props: {
    maximumLevel: Number
  }
}

/**
 * @const {Number} minimumLevel mixin
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
 * @const {String} fileExtension mixin
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
 * @const {String} accessToken mixin
 */
const accessToken = {
  props: {
    accessToken: String
  }
}

/**
 * @const {String} format mixin
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
 * @const {String|Array} subdomains mixin
 */
const subdomains = {
  props: {
    subdomains: String | Array
  }
}

/**
 * @const {Array} getFeatureInfoFormats mixin
 */
const getFeatureInfoFormats = {
  props: {
    getFeatureInfoFormats: Array
  }
}

/**
 * @const {Object} clock mixin
 */
const clock = {
  props: {
    clock: Object
  }
}

/**
 * @const {Object} times mixin
 */
const times = {
  props: {
    times: Object
  }
}

// primitive 相关

/**
 * @const {Boolean}
 * allowPicking
 * asynchronous
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
  }
}

/**
 * @const {Boolean} debugShowShadowVolume mixin
 */
const debugShowShadowVolume = {
  props: {
    debugShowShadowVolume: {
      type: Boolean,
      default: false
    }
  }
}

/**
 * @const {Boolean} releaseGeometryInstances mixin
 */
const releaseGeometryInstances = {
  props: {
    releaseGeometryInstances: {
      type: Boolean,
      default: true
    }
  }
}

/**
 * @const {Boolean} interleave mixin
 */
const interleave = {
  props: {
    interleave: {
      type: Boolean,
      default: false
    }
  }
}

/**
 * @const {Object} appearance mixin
 */
const appearance = {
  props: {
    appearance: Object
  }
}

/**
 * @const {Array|Object} geometryInstances mixin
 */
const geometryInstances = {
  props: {
    geometryInstances: Array | Object
  }
}

/**
 * @const {Boolean}
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
  }
}

/**
 * @const {Object} modelMatrix mixin
 */
const modelMatrix = {
  props: {
    modelMatrix: Object
  }
}

/**
 * @const {Boolean} debugShowBoundingVolume mixin
 */
const debugShowBoundingVolume = {
  props: {
    debugShowBoundingVolume: {
      tyep: Boolean,
      default: false
    }
  }
}

/**
 * @const {Object} scene mixin
 */
const scene = {
  props: {
    scene: Object
  }
}

/**
 * @const {Number} blendOption mixin
 */
const blendOption = {
  props: {
    blendOption: {
      type: Number,
      default: 2
    }
  }
}

/**
 * @const {*} id mixin
 */
const id = {
  props: {
    id: null
  }
}

/**
 * @const {Boolean} loop mixin
 */
const loop = {
  props: {
    loop: {
      type: Boolean,
      default: false
    }
  }
}

/**
 * @const {Boolean} debugWireframe mixin
 */
const debugWireframe = {
  props: {
    debugWireframe: {
      type: Boolean,
      default: false
    }
  }
}

// geometry 相关

/**
 * @const {Object} vertexFormat mixin
 */
const vertexFormat = {
  props: {
    vertexFormat: Object
  }
}

/**
 * @const {Object} center mixin
 */
const center = {
  props: {
    center: Object
  }
}

/**
 * @const {Object} radius mixin
 */
const radius = {
  props: {
    radius: Number
  }
}
/**
 * @const {Object} innerRadii mixin
 */
const innerRadii = {
  props: {
    innerRadii: Object
  }
}
/**
 * @const {Object} minimumClock mixin
 */
const minimumClock = {
  props: {
    minimumClock: {
      type: Number,
      default: 0.0
    }
  }
}
/**
 * @const {Object} maximumClock mixin
 */
const maximumClock = {
  props: {
    maximumClock: {
      type: Number,
      default: 2 * Math.PI
    }
  }
}
/**
 * @const {Object} minimumCone mixin
 */
const minimumCone = {
  props: {
    minimumCone: {
      type: Number,
      default: 0.0
    }
  }
}
/**
 * @const {Object} maximumCone mixin
 */
const maximumCone = {
  props: {
    maximumCone: {
      type: Number,
      default: Math.PI
    }
  }
}

/**
 * @const {Object} frustum mixin
 */
const frustum = {
  props: {
    frustum: Object
  }
}

/**
 * @const {Object} origin mixin
 */
const origin = {
  props: {
    origin: Object
  }
}

/**
 * @const {Object} orientation mixin
 */
const orientation = {
  props: {
    orientation: Object
  }
}

/**
 * @const {Object} polygonHierarchy mixin
 */
const polygonHierarchy = {
  props: {
    polygonHierarchy: Object | Array
  }
}

export {
  polygonHierarchy,
  orientation,
  origin,
  frustum,
  maximumCone,
  minimumCone,
  maximumClock,
  minimumClock,
  innerRadii,
  radius,
  center,
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
