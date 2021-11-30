import { hasOwn, isObject, isFunction, isArray } from './util'

import {
  makeDistanceDisplayCondition,
  makeCartesian2,
  makeCartesian2Array,
  makeCartesian3,
  makeColor,
  makeColors,
  makeNearFarScalar,
  makeMaterial,
  makeCartesian3Array,
  makeRectangle,
  makeBoundingRectangle,
  makePlane,
  makePolygonHierarchy,
  makeTranslationRotationScale,
  makeQuaternion,
  makeOptions
} from './cesium-helpers'
import { PropType } from 'vue'
import { CartographicInDegreeOption, Cartesian3Option } from './types'

// 下面属性作为实体加载时 可以传 Function
// Entity start
/**
 * @const {Object, Array, Function}  position mixin
 * 坐标位置属性。
 * @example
 * :position = { lng: number, lat: number, height: number }
 * :position = { x: number, y: number, z: number }
 * :position = [number, number, number]
 */
const position = {
  position: {
    type: [Object, Array, Function] as PropType<Cesium.Cartesian3 | Array<number>>,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3,
      deep: true
    }
  }
}

/**
 * @const {Object, Array, Function} orientation mixin
 */
const orientation = {
  orientation: {
    type: [Object, Array, Function] as PropType<Cesium.Quaternion>,
    watcherOptions: {
      cesiumObjectBuilder: makeQuaternion
    }
  }
}
// Entity end

// BillboardGraphics start
/**
 * @const {Object, Array, Function} alignedAxis mixin
 */
const alignedAxis = {
  alignedAxis: {
    type: [Object, Array, Function] as PropType<Cesium.Cartesian3 | Array<number>>,
    default: () => {
      return {
        x: 0,
        y: 0,
        z: 0
      }
    },
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3
    }
  }
}

/**
 * @const {Object, String, Array, Function} color mixin
 */
const color = {
  color: {
    type: [Object, String, Array, Function] as PropType<Cesium.Color>,
    default: 'white',
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
}
const depthFailColor = {
  depthFailColor: {
    type: [Object, String, Array, Function] as PropType<Cesium.Color>,
    default: 'white',
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
}

/**
 * @const {Number, Object, Function} disableDepthTestDistance mixin
 */
const disableDepthTestDistance = {
  disableDepthTestDistance: [Number, Object, Function]
}

/**
 * @const {Object, Array, Function}  distanceDisplayCondition mixin
 */
const distanceDisplayCondition = {
  distanceDisplayCondition: {
    type: [Object, Array, Function] as PropType<Cesium.DistanceDisplayCondition>,
    watcherOptions: {
      cesiumObjectBuilder: makeDistanceDisplayCondition
    }
  }
}

/**
 * @const {Object, Array, Function}  eyeOffset mixin
 */
const eyeOffset = {
  eyeOffset: {
    type: [Object, Array, Function] as PropType<Cesium.Cartesian3 | Array<number>>,
    default: () => {
      return {
        x: 0,
        y: 0,
        z: 0
      }
    },
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3
    }
  }
}

/**
 * @const {Number, Object, Function} height mixin
 */
const height = {
  height: [Number, Object, Function]
}

/**
 * @const {Number, Object, Function} heightReference mixin
 */
const heightReference = {
  heightReference: {
    type: [Number, Object, Function]
    // default: 0
  }
}

/**
 * @const {Number, Object, Function} horizontalOrigin mixin
 */
const horizontalOrigin = {
  horizontalOrigin: {
    type: [Number, Object, Function],
    default: 0
  }
}

/**
 * @const {String, Object, HTMLCanvasElement, Function} image mixin
 */
const image = {
  image: [String, Object, HTMLCanvasElement, Function]
}

/**
 * @const {Object, Array, Function} imageSubRegion mixin
 */
const imageSubRegion = {
  imageSubRegion: {
    type: [Object, Array, Function] as PropType<Cesium.BoundingRectangle>,
    watcherOptions: {
      cesiumObjectBuilder: makeBoundingRectangle
    }
  }
}

/**
 * @const {Object, Array, Function}  pixelOffset mixin
 */
const pixelOffset = {
  pixelOffset: {
    type: [Object, Array, Function] as PropType<Array<number> | Cesium.Cartesian2>,
    default: () => {
      return {
        x: 0,
        y: 0
      }
    },
    validator: v => {
      if (isArray(v)) {
        return v.length === 2
      }
      if (isObject(v)) {
        return hasOwn(v, 'x') && hasOwn(v, 'y')
      }

      if (isFunction(v)) {
        return true
      }

      return false
    },
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian2
    }
  }
}

/**
 * @const {Object, Array, Function} pixelOffsetScaleByDistance mixin
 */
const pixelOffsetScaleByDistance = {
  pixelOffsetScaleByDistance: {
    type: [Object, Array, Function] as PropType<Cesium.NearFarScalar>,
    watcherOptions: {
      cesiumObjectBuilder: makeNearFarScalar
    }
  }
}

/**
 * @const {Number, Object, Function} rotation mixin
 */
const rotation = {
  rotation: {
    type: [Number, Object, Function],
    default: 0
  }
}

/**
 * @const {Number, Object, Function} scale mixin
 */
const scale = {
  scale: {
    type: [Number, Object, Function],
    default: 1.0
  }
}

/**
 * @const {Object, Array, Function} scaleByDistance mixin
 */
const scaleByDistance = {
  scaleByDistance: {
    type: [Object, Array, Function] as PropType<Cesium.NearFarScalar>,
    watcherOptions: {
      cesiumObjectBuilder: makeNearFarScalar
    }
  }
}

/**
 * @const {Boolean, Object, Function}  show mixin
 */
const show = {
  show: {
    type: [Boolean, Object, Function] as PropType<boolean>,
    default: true
  }
}

/**
 * @const {Boolean, Object, Function} sizeInMeters mixin
 */
const sizeInMeters = {
  sizeInMeters: {
    type: [Boolean, Object, Function],
    default: false
  }
}

/**
 * @const {Object, Array, Function} translucencyByDistance mixin
 */
const translucencyByDistance = {
  translucencyByDistance: {
    type: [Object, Array, Function] as PropType<Cesium.NearFarScalar>,
    watcherOptions: {
      cesiumObjectBuilder: makeNearFarScalar
    }
  }
}

/**
 * @const {Number, Object, Function}  verticalOrigin mixin
 */
const verticalOrigin = {
  verticalOrigin: {
    type: [Number, Object, Function],
    default: 0
  }
}

/**
 * @const {Number, Object, Function} width mixin
 */
const width = {
  width: [Number, Object, Function] as PropType<number>
}
// BillboardGraphics end

// BoxGraphics start
/**
 * @const {Object, Array, Function} dimensions mixin
 * // 和 PlaneGraphics.dimensions 区分
 */
const dimensions = {
  dimensions: {
    type: [Object, Array, Function] as PropType<Cesium.Cartesian3 | Array<number>>,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3
    }
  }
}

/**
 * @const {Boolean, Object, Function} fill mixin
 */
const fill = {
  fill: {
    type: [Boolean, Object, Function],
    default: true
  }
}

/**
 * @const {Object, String, Array, Function} material mixin
 */
const material = {
  material: {
    type: [Object, String, Array, Function],
    default: 'white',
    watcherOptions: {
      cesiumObjectBuilder: makeMaterial
    }
  }
}

/**
 * @const {Boolean, Object, Function} outline mixin
 */
const outline = {
  outline: {
    type: [Boolean, Object, Function],
    default: false
  }
}

/**
 * @const {Object, String, Array, Function} outlineColor mixin
 */
const outlineColor = {
  outlineColor: {
    type: [Object, String, Array, Function] as PropType<Cesium.Color>,
    default: 'black',
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
}

/**
 * @const {Number, Object, Function} outlineWidth mixin
 */
const outlineWidth = {
  outlineWidth: {
    type: [Number, Object, Function],
    default: 1.0
  }
}

/**
 * @const {Number, Object, Function} shadows mixin
 */
const shadows = {
  shadows: [Number, Object, Function]
}
// BoxGraphics end

// CorridorGraphics start
/**
 * @const {Array, Object, Function} positions mixin
 */
const positions = {
  positions: {
    type: [Array, Object, Function] as PropType<
      Array<Cesium.Cartesian3> | Array<number> | Array<Array<number>> | Array<Cartesian3Option> | Array<CartographicInDegreeOption>
    >,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3Array,
      exclude: '_callback',
      deep: true
    }
  }
}

/**
 * @const {Number, Object, Function} extrudedHeight mixin
 */
const extrudedHeight = {
  extrudedHeight: [Number, Object, Function]
}

/**
 * @const {Number, Object, Function} extrudedHeightReference mixin
 */
const extrudedHeightReference = {
  extrudedHeightReference: [Number, Object, Function]
}

/**
 * @const {Number, Object, Function} cornerType mixin
 */
const cornerType = {
  cornerType: {
    type: [Number, Object, Function],
    default: 0
  }
}

/**
 * @const {Number, Object, Function} granularity mixin
 */
const granularity = {
  granularity: [Number, Object, Function]
}

/**
 * @const {Number, Object, Function} classificationType mixin
 */
const classificationType = {
  classificationType: {
    type: [Number, Object, Function]
  }
}

/**
 * @const {Number, Object, Function} zIndex mixin
 */
const zIndex = {
  zIndex: [Number, Object, Function]
}
// CorridorGraphics end

// CylinderGraphics start

/**
 * @const {Number, Object, Function} length mixin
 */
const length = {
  length: [Number, Object, Function]
}

/**
 * @const {Number, Object, Function} topRadius mixin
 */
const topRadius = {
  topRadius: [Number, Object, Function]
}

/**
 * @const {Number, Object, Function} bottomRadius mixin
 */
const bottomRadius = {
  bottomRadius: [Number, Object, Function]
}

/**
 * @const {Number, Object, Function} numberOfVerticalLines mixin
 */
const numberOfVerticalLines = {
  numberOfVerticalLines: {
    type: [Number, Object, Function],
    default: 16
  }
}

/**
 * @const {Number, Object, Function} slices mixin
 */
const slices = {
  slices: {
    type: [Number, Object, Function],
    default: 128
  }
}
// CylinderGraphics end

// EllipseGraphics start
/**
 * @const {Number, Object, Function} semiMajorAxis mixin
 */
const semiMajorAxis = {
  semiMajorAxis: [Number, Object, Function]
}

/**
 * @const {Number, Object, Function} semiMinorAxis mixin
 */
const semiMinorAxis = {
  semiMinorAxis: [Number, Object, Function]
}

/**
 * @const {Number, Object, Function} stRotation mixin
 */
const stRotation = {
  stRotation: {
    type: [Number, Object, Function],
    default: 0.0
  }
}
// EllipseGraphics end

// EllipsoidGraphics start
/**
 * @const {Number, Object, Function} radii mixin
 */
const radii = {
  radii: {
    type: [Object, Array, Function] as PropType<Cesium.Cartesian3 | Array<number>>,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3
    }
  }
}

/**
 * @const {Object, Array, Function} innerRadii mixin
 */
const innerRadii = {
  innerRadii: {
    type: [Object, Array, Function] as PropType<Cesium.Cartesian3 | Array<number>>,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3
    }
  }
}

/**
 * @const {Number, Object, Function} minimumClock mixin
 */
const minimumClock = {
  minimumClock: {
    type: [Number, Object, Function],
    default: 0.0
  }
}
/**
 * @const {Number, Object, Function} maximumClock mixin
 */
const maximumClock = {
  maximumClock: {
    type: [Number, Object, Function],
    default: 2 * Math.PI
  }
}
/**
 * @const {Number, Object, Function} minimumCone mixin
 */
const minimumCone = {
  minimumCone: {
    type: [Number, Object, Function],
    default: 0.0
  }
}
/**
 * @const {Number, Object, Function} maximumCone mixin
 */
const maximumCone = {
  maximumCone: {
    type: [Number, Object, Function],
    default: Math.PI
  }
}

/**
 * @const {Number, Object, Function} stackPartitions mixin
 */
const stackPartitions = {
  stackPartitions: {
    type: [Number, Object, Function],
    default: 64
  }
}

/**
 * @const {Number, Object, Function} slicePartitions mixin
 */
const slicePartitions = {
  slicePartitions: {
    type: [Number, Object, Function],
    default: 64
  }
}

/**
 * @const {Number, Object, Function} subdivisions mixin
 */
const subdivisions = {
  subdivisions: {
    type: [Number, Object, Function],
    default: 128
  }
}
// EllipsoidGraphics end

// LabelGraphics start
/**
 * @const {String, Object, Function} text mixin
 */
const text = {
  text: [String, Object, Function]
}

/**
 * @const {String, Object, Function} font mixin
 */
const font = {
  font: {
    type: [String, Object, Function],
    default: '30px sans-serif'
  }
}

/**
 * @const {Number, Object, Function} labelStyle mixin
 */
const labelStyle = {
  labelStyle: {
    type: [Number, Object, Function],
    default: 0
  }
}

/**
 * @const {Boolean, Object, Function} showBackground mixin
 */
const showBackground = {
  showBackground: {
    type: [Boolean, Object, Function],
    default: false
  }
}

/**
 * @const {Object, String, Array, Function} backgroundColor mixin
 */
const backgroundColor = {
  backgroundColor: {
    type: [Object, String, Array, Function] as PropType<Cesium.Color>,
    default: () => {
      return { x: 0.165, y: 0.165, z: 0.165, w: 0.8 }
    },
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
}

/**
 * @const {Object, Array, Function} backgroundPadding mixin
 */
const backgroundPadding = {
  backgroundPadding: {
    type: [Object, Array, Function] as PropType<Array<number> | Cesium.Cartesian2>,
    default: () => {
      return { x: 7, y: 5 }
    },
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian2
    }
  }
}

/**
 * @const {Object, String, Array, Function} fillColor mixin
 */
const fillColor = {
  fillColor: {
    type: [Object, String, Array, Function] as PropType<Cesium.Color>,
    default: 'white',
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
}
// LabelGraphics end

// ModelGraphics start
/**
 * @const {String, Object, Function} uri mixin
 */
const uri = {
  uri: [String, Object, Function]
}

/**
 * @const {Number, Object, Function} minimumPixelSize mixin
 */
const minimumPixelSize = {
  minimumPixelSize: {
    type: [Number, Object, Function],
    default: 0.0
  }
}

/**
 * @const {Number, Object, Function} maximumScale mixin
 */
const maximumScale = {
  maximumScale: [Number, Object, Function]
}

/**
 * @const {Boolean, Object, Function} incrementallyLoadTextures mixin
 */
const incrementallyLoadTextures = {
  incrementallyLoadTextures: {
    type: [Boolean, Object, Function],
    default: true
  }
}

/**
 * @const {Boolean, Object, Function} clampAnimations mixin
 */
const runAnimations = {
  clampAnimations: {
    type: [Boolean, Object, Function],
    default: true
  }
}

/**
 * @const {Boolean, Object, Function} clampAnimations mixin
 */
const clampAnimations = {
  clampAnimations: {
    type: [Boolean, Object, Function],
    default: true
  }
}

/**
 * @const {Object, String, Array, Function} silhouetteColor mixin
 */
const silhouetteColor = {
  silhouetteColor: {
    type: [Object, String, Array, Function] as PropType<Cesium.Color>,
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
}

/**
 * @const {Number, Object, Function} silhouetteSize mixin
 */
const silhouetteSize = {
  silhouetteSize: {
    type: [Number, Object, Function],
    default: 0.0
  }
}

/**
 * @const {Number, Object, Function} colorBlendMode mixin
 */
const colorBlendMode = {
  colorBlendMode: {
    type: [Number, Object, Function],
    default: 0
  }
}

/**
 * @const {Number, Object, Function} colorBlendAmount mixin
 */
const colorBlendAmount = {
  colorBlendAmount: {
    type: [Number, Object, Function],
    default: 0.5
  }
}

/**
 * @const {Object, Array, Function} imageBasedLightingFactor mixin
 */
const imageBasedLightingFactor = {
  imageBasedLightingFactor: {
    type: [Object, Array, Function] as PropType<Array<number> | Cesium.Cartesian2>,
    default: () => [1.0, 1.0],
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian2
    }
  }
}

/**
 * @const {Object, String, Array, Function} lightColor mixin
 * 注意区别 Cesium3DTileset 的 lightColor
 */
const lightColor = {
  lightColor: {
    type: [Object, String, Array, Function] as PropType<Cesium.Color>,
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
}

/**
 * @const {Object, Function} nodeTransformations mixin
 */
const nodeTransformations = {
  nodeTransformations: {
    type: [Object, Function] as PropType<Cesium.TranslationRotationScale>,
    watcherOptions: {
      cesiumObjectBuilder: makeTranslationRotationScale
    }
  }
}

/**
 * @const {Object, Function} articulations mixin
 */
const articulations = {
  articulations: [Object, Function]
}

/**
 * @const {Object} clippingPlanes mixin
 */
const clippingPlanes = {
  clippingPlanes: Object
}
// ModelGraphics end

// PathGraphics start
// PathGraphics end

// PlaneGraphics start
/**
 * @const {Object, Array, Function} plane mixin
 */
const plane = {
  plane: {
    type: [Object, Array, Function] as PropType<Cesium.Plane>,
    watcherOptions: {
      cesiumObjectBuilder: makePlane
    }
  }
}
// PlaneGraphics end

// PointGraphics start
/**
 * @const {Number, Object, Function} pixelSize mixin
 */
const pixelSize = {
  pixelSize: {
    type: [Number, Object, Function],
    default: 1
  }
}
// PointGraphics end

// PolygonGraphics start

/**
 * @const {Object, Array, Function} hierarchy mixin
 */
const hierarchy = {
  hierarchy: {
    type: [Object, Array, Function] as PropType<Cesium.PolygonHierarchy>,
    watcherOptions: {
      cesiumObjectBuilder: makePolygonHierarchy,
      deep: true,
      exclude: '_callback'
    }
  }
}

/**
 * @const {Boolean, Object, Function} perPositionHeight mixin
 */
const perPositionHeight = {
  perPositionHeight: {
    type: [Boolean, Object, Function],
    default: false
  }
}

/**
 * @const {Boolean, Object, Function} closeTop mixin
 */
const closeTop = {
  closeTop: {
    type: [Boolean, Object, Function],
    default: true
  }
}

/**
 * @const {Boolean, Object, Function} closeBottom mixin
 */
const closeBottom = {
  closeBottom: {
    type: [Boolean, Object, Function],
    default: true
  }
}

/**
 * @const {Number, Object, Function} arcType mixin
 */
const arcType = {
  arcType: {
    type: [Number, Object, Function],
    default: 1
  }
}
// PolygonGraphics end

// PolylineGraphics start
/**
 * @const {Object, String, Array, Function} depthFailMaterial  mixin
 */
const depthFailMaterial = {
  depthFailMaterial: {
    type: [Object, String, Array, Function],
    watcherOptions: {
      cesiumObjectBuilder: makeMaterial
    }
  }
}

/**
 * @const {Boolean, Object, Function} clampToGround mixin
 */
const clampToGround = {
  clampToGround: {
    type: [Boolean, Object, Function],
    default: false
  }
}
// PolylineGraphics end

// PolylineVolumeGraphics start
/**
 * @const {Array, Object, Function} shape mixin
 */
const shape = {
  shape: {
    type: [Array, Object, Function] as PropType<Array<Cesium.Cartesian2>>,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian2Array
    }
  }
}
// PolylineVolumeGraphics end

// RectangleGraphics start
/**
 * @const {Object, Array, Function} coordinates mixin
 */
const coordinates = {
  coordinates: {
    type: [Object, Array, Function] as PropType<Cesium.Rectangle>,
    watcherOptions: {
      cesiumObjectBuilder: makeRectangle
    }
  }
}
// RectangleGraphics end

// Cesium3DTilesetGraphics start
/**
 * @const {Number, Object, Function} maximumScreenSpaceError mixin
 */
const maximumScreenSpaceError = {
  maximumScreenSpaceError: {
    type: [Number, Object, Function],
    default: 16
  }
}
// Cesium3DTilesetGraphics end

// WallGraphics start
/**
 * @const {Array, Object, Function} minimumHeights mixin
 */
const minimumHeights = {
  minimumHeights: [Array, Object, Function]
}

/**
 * @const {Array, Object, Function} maximumHeights mixin
 */
const maximumHeights = {
  maximumHeights: [Array, Object, Function]
}
// WallGraphics end
// Entity end

// ImageryLayer start
/**
 * @const {Object, Array} cutoutRectangle mixin
 */
const cutoutRectangle = {
  cutoutRectangle: {
    type: [Object, Array] as PropType<Cesium.Rectangle>,
    watcherOptions: {
      cesiumObjectBuilder: makeRectangle
    }
  }
}

/**
 * @const {Object, String, Array} colorToAlpha mixin
 */
const colorToAlpha = {
  colorToAlpha: {
    type: [Object, String, Array] as PropType<Cesium.Color>,
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
}
// ImageryLayer end

// imageryProvider
/**
 * @const {String, Object} url mixin
 */
const url = {
  url: [String, Object] as PropType<string | Cesium.Resource>
}

/**
 * @const {String} token mixin
 */
const token = {
  token: String
}

/**
 * @const {Object} tileDiscardPolicy mixin
 */
const tileDiscardPolicy = {
  tileDiscardPolicy: Object
}

/**
 * @const {String} layers mixin
 */
const layers = {
  layers: String
}

/**
 * @const {Boolean} enablePickFeatures mixin
 */
const enablePickFeatures = {
  enablePickFeatures: {
    type: Boolean,
    default: true
  }
}

/**
 * @const {Object, Array} rectangle mixin
 */
const rectangle = {
  rectangle: {
    type: [Object, Array] as PropType<Cesium.Rectangle>,
    watcherOptions: {
      cesiumObjectBuilder: makeRectangle
    }
  }
}

/**
 * @const {Object} tilingScheme mixin
 */
const tilingScheme = {
  tilingScheme: Object
}

/**
 * @const {Object} ellipsoid mixin
 */
const ellipsoid = {
  ellipsoid: Object
}

/**
 * @const {String, Object} credit mixin
 */
const credit = {
  credit: {
    type: [String, Object] as PropType<string | Cesium.Credit>,
    default: ''
  }
}

/**
 * @const {Number} tileWidth mixin
 */
const tileWidth = {
  tileWidth: {
    type: Number,
    default: 256
  }
}

/**
 * @const {Number} tileHeight mixin
 */
const tileHeight = {
  tileHeight: {
    type: Number,
    default: 256
  }
}

/**
 * @const {Number} maximumLevel mixin
 */
const maximumLevel = {
  maximumLevel: Number
}

/**
 * @const {Number} minimumLevel mixin
 */
const minimumLevel = {
  minimumLevel: {
    type: Number,
    default: 0
  }
}

/**
 * @const {String} fileExtension mixin
 */
const fileExtension = {
  fileExtension: {
    type: String,
    default: 'png'
  }
}

/**
 * @const {String} accessToken mixin
 */
const accessToken = {
  accessToken: String
}

/**
 * @const {String} format mixin
 */
const format = {
  format: {
    type: String,
    default: 'png'
  }
}

/**
 * @const {String, Array} subdomains mixin
 */
const subdomains = {
  subdomains: [String, Array]
}

/**
 * @const {Array} getFeatureInfoFormats mixin
 */
const getFeatureInfoFormats = {
  getFeatureInfoFormats: Array
}

/**
 * @const {Object} clock mixin
 */
const clock = {
  clock: Object
}

/**
 * @const {Object} times mixin
 */
const times = {
  times: Object
}

const projectionTransforms = {
  projectionTransforms: {
    type: [Boolean, Object],
    default: false
  }
}
// primitive 相关

/**
 * @const {Boolean}
 * allowPicking
 */
const allowPicking = {
  allowPicking: {
    type: Boolean,
    default: true
  }
}

/**
 * @const {Boolean}
 * asynchronous
 */
const asynchronous = {
  asynchronous: {
    type: Boolean,
    default: true
  }
}

/**
 * @const {Boolean} debugShowShadowVolume mixin
 */
const debugShowShadowVolume = {
  debugShowShadowVolume: {
    type: Boolean,
    default: false
  }
}

/**
 * @const {Boolean} releaseGeometryInstances mixin
 */
const releaseGeometryInstances = {
  releaseGeometryInstances: {
    type: Boolean,
    default: true
  }
}

/**
 * @const {Boolean} interleave mixin
 */
const interleave = {
  interleave: {
    type: Boolean,
    default: false
  }
}

/**
 * @const {Object} appearance mixin
 */
const appearance = {
  appearance: Object as PropType<Cesium.Appearance>
}

const depthFailAppearance = {
  depthFailAppearance: Object as PropType<Cesium.Appearance>
}

/**
 * @const {Array, Object} geometryInstances mixin
 */
const geometryInstances = {
  geometryInstances: [Array, Object]
}

/**
 * @const {Boolean}
 * vertexCacheOptimize
 */
const vertexCacheOptimize = {
  vertexCacheOptimize: {
    type: Boolean,
    default: false
  }
}
/**
 * @const {Boolean}
 * compressVertices
 */
const compressVertices = {
  compressVertices: {
    type: Boolean,
    default: true
  }
}

/**
 * @const {Object} modelMatrix mixin
 */
const modelMatrix = {
  modelMatrix: Object as PropType<Cesium.Matrix4>
}

/**
 * @const {Boolean} debugShowBoundingVolume mixin
 */
const debugShowBoundingVolume = {
  debugShowBoundingVolume: {
    tyep: Boolean,
    default: false
  }
}

/**
 * @const {Object} scene mixin
 */
const scene = {
  scene: Object as PropType<Cesium.Scene>
}

/**
 * @const {Number} blendOption mixin
 */
const blendOption = {
  blendOption: {
    type: Number,
    default: 2
  }
}

/**
 * @const {*} id mixin
 */
const id = {
  id: null as unknown as PropType<any>
}

/**
 * @const {Boolean} loop mixin
 */
const loop = {
  loop: {
    type: Boolean,
    default: false
  }
}

/**
 * @const {Boolean} debugWireframe mixin
 */
const debugWireframe = {
  debugWireframe: {
    type: Boolean,
    default: false
  }
}

// geometry 相关

/**
 * @const {Object} vertexFormat mixin
 */
const vertexFormat = {
  vertexFormat: Object
}

/**
 * @const {Object, Array} center mixin
 */
const center = {
  center: {
    type: [Object, Array] as PropType<Cesium.Cartesian3 | Array<number>>,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3
    }
  }
}

/**
 * @const {Object} radius mixin
 */
const radius = {
  radius: Number
}

/**
 * @const {Object} frustum mixin
 */
const frustum = {
  frustum: Object
}

/**
 * @const {Object, Array} origin mixin
 */
const origin = {
  origin: {
    type: [Object, Array] as PropType<Cesium.Cartesian3 | Array<number>>,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3
    }
  }
}

/**
 * @const {Object} polygonHierarchy mixin
 */
const polygonHierarchy = {
  polygonHierarchy: {
    type: [Object, Array] as PropType<Cesium.PolygonHierarchy | Array<Cesium.Cartesian3>>,
    watcherOptions: {
      cesiumObjectBuilder: makePolygonHierarchy,
      deep: true
    }
  }
}

/**
 * @const {Object, String, Array} startColor mixin
 */
const startColor = {
  startColor: {
    type: [Object, String, Array] as PropType<Cesium.Color>,
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
}

/**
 * @const {Object, String, Array} endColor mixin
 */
const endColor = {
  endColor: {
    type: [Object, String, Array] as PropType<Cesium.Color>,
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
}

/**
 * @const {Object, Array} minimumImageSize mixin
 */
const minimumImageSize = {
  minimumImageSize: {
    type: [Object, Array] as PropType<Array<number> | Cesium.Cartesian2>,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian2
    }
  }
}

/**
 * @const {Object, Array} maximumImageSize mixin
 */
const maximumImageSize = {
  maximumImageSize: {
    type: [Object, Array] as PropType<Array<number> | Cesium.Cartesian2>,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian2
    }
  }
}

/**
 * @const {Object, Array} imageSize mixin
 */
const imageSize = {
  imageSize: {
    type: [Object, Array] as PropType<Array<number> | Cesium.Cartesian2>,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian2
    }
  }
}

/**
 * @const {Array} shapePositions mixin
 */
const shapePositions = {
  shapePositions: {
    type: Array,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian2Array
    }
  }
}

/**
 * @const {Array} polylinePositions mixin
 */
const polylinePositions = {
  polylinePositions: {
    type: Array as PropType<Array<Cesium.Cartesian3>>,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3Array
    }
  }
}

/**
 * @const {Object, String, Array} lightColor2 mixin
 * 用于 Cesium3DTileset 和 Model
 */
const lightColor2 = {
  lightColor: {
    type: [Object, Array] as PropType<Cesium.Cartesian3 | Array<number>>,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3
    }
  }
}

/**
 * @const {Number} luminanceAtZenith mixin
 */
const luminanceAtZenith = {
  luminanceAtZenith: {
    type: Number,
    default: 0.2
  }
}

/**
 * @const {Array, Object} sphericalHarmonicCoefficients mixin
 */
const sphericalHarmonicCoefficients = {
  sphericalHarmonicCoefficients: {
    type: [Array, Object] as PropType<Array<Cesium.Cartesian3>>,
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian3Array
    }
  }
}

/**
 * @const {String} specularEnvironmentMaps mixin
 */
const specularEnvironmentMaps = {
  specularEnvironmentMaps: String
}

/**
 * @const {Boolean} backFaceCulling mixin
 */
const backFaceCulling = {
  backFaceCulling: {
    type: Boolean,
    default: true
  }
}

const colors = {
  colors: {
    type: Array as PropType<Array<Cesium.Color>>,
    watcherOptions: {
      cesiumObjectBuilder: makeColors
    }
  }
}

// datasouce
/**
 * @const {String, Object} data mixin
 */
const data = {
  data: {
    type: [String, Object] as PropType<string | Cesium.Resource>,
    required: true
  }
}

const sourceUri = {
  sourceUri: {
    type: [String, Object] as PropType<string | Cesium.Resource>
  }
}

/**
 * @const {Object} options mixin
 */
const options = {
  options: {
    type: Object,
    watcherOptions: {
      cesiumObjectBuilder: makeOptions,
      deep: true
    }
  }
}

// PostProcessStage start
/**
 * @const {String, Array, Object} glowColor mixin
 */
const glowColor = {
  glowColor: {
    type: [String, Array, Object] as PropType<Cesium.Color>,
    default: () => [0.0, 1.0, 0.0, 0.05],
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
}

/**
 * @const {String, Array, Object} clearColor mixin
 */
const clearColor = {
  clearColor: {
    type: [String, Array, Object] as PropType<Cesium.Color>,
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  }
}

/**
 * @const {Object, Array} scissorRectangle mixin
 */
const scissorRectangle = {
  scissorRectangle: {
    type: [Object, Array] as PropType<Cesium.BoundingRectangle>,
    watcherOptions: {
      cesiumObjectBuilder: makeBoundingRectangle
    }
  }
}

// PostProcessStage end

// custom
const enableMouseEvent = {
  enableMouseEvent: {
    type: Boolean,
    default: true
  }
}
export {
  projectionTransforms,
  sourceUri,
  colors,
  enableMouseEvent,
  backFaceCulling,
  specularEnvironmentMaps,
  sphericalHarmonicCoefficients,
  luminanceAtZenith,
  maximumScreenSpaceError,
  runAnimations,
  articulations,
  scissorRectangle,
  clearColor,
  glowColor,
  options,
  data,
  imageSubRegion,
  coordinates,
  nodeTransformations,
  hierarchy,
  plane,
  colorToAlpha,
  cutoutRectangle,
  polylinePositions,
  shapePositions,
  imageSize,
  maximumImageSize,
  minimumImageSize,
  endColor,
  startColor,
  shape,
  lightColor,
  lightColor2,
  imageBasedLightingFactor,
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
  depthFailAppearance,
  appearance,
  interleave,
  releaseGeometryInstances,
  debugShowShadowVolume,
  id,
  allowPicking,
  asynchronous,
  vertexCacheOptimize,
  compressVertices,
  modelMatrix,
  debugShowBoundingVolume,
  scene,
  blendOption,
  maximumHeights,
  minimumHeights,
  arcType,
  clampToGround,
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
  depthFailColor,
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
  depthFailMaterial,
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
