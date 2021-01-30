import { lnglatValidator } from '../utils/util'

import {
  makeDistanceDisplayCondition,
  makeCartesian2,
  makeCartesian2Array,
  makeCartesian3,
  makeColor,
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
} from '../utils/cesiumHelpers'

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
  props: {
    position: {
      type: [Object, Array, Function],
      validator: (val) => {
        return val && Object.prototype.hasOwnProperty.call(val, 'lng') ? lnglatValidator(val.lng, val.lat) : true
      },
      watcherOptions: {
        cesiumObjectBuilder: makeCartesian3
      }
    }
  }
}

/**
 * @const {Object, Array, Function} orientation mixin
 */
const orientation = {
  props: {
    orientation: {
      type: [Object, Array, Function],
      watcherOptions: {
        cesiumObjectBuilder: makeQuaternion
      }
    }
  }
}
// Entity end

// BillboardGraphics start
/**
 * @const {Object, Array, Function} alignedAxis mixin
 */
const alignedAxis = {
  props: {
    alignedAxis: {
      type: [Object, Array, Function],
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
}

/**
 * @const {Object, String, Array, Function} color mixin
 */
const color = {
  props: {
    color: {
      type: [Object, String, Array, Function],
      default: 'white',
      watcherOptions: {
        cesiumObjectBuilder: makeColor
      }
    }
  }
}

/**
 * @const {Number, Object, Function} disableDepthTestDistance mixin
 */
const disableDepthTestDistance = {
  props: {
    disableDepthTestDistance: [Number, Object, Function]
  }
}

/**
 * @const {Object, Array, Function}  distanceDisplayCondition mixin
 */
const distanceDisplayCondition = {
  props: {
    distanceDisplayCondition: {
      type: [Object, Array, Function],
      watcherOptions: {
        cesiumObjectBuilder: makeDistanceDisplayCondition
      }
    }
  }
}

/**
 * @const {Object, Array, Function}  eyeOffset mixin
 */
const eyeOffset = {
  props: {
    eyeOffset: {
      type: [Object, Array, Function],
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
}

/**
 * @const {Number, Object, Function} height mixin
 */
const height = {
  props: {
    height: [Number, Object, Function]
  }
}

/**
 * @const {Number, Object, Function} heightReference mixin
 */
const heightReference = {
  props: {
    heightReference: [Number, Object, Function],
    default: 0
  }
}

/**
 * @const {Number, Object, Function} horizontalOrigin mixin
 */
const horizontalOrigin = {
  props: {
    horizontalOrigin: {
      type: [Number, Object, Function],
      default: 0
    }
  }
}

/**
 * @const {String, Object, HTMLCanvasElement, Function} image mixin
 */
const image = {
  props: {
    image: [String, Object, HTMLCanvasElement, Function]
  }
}

/**
 * @const {Object, Array, Function} imageSubRegion mixin
 */
const imageSubRegion = {
  props: {
    imageSubRegion: {
      type: [Object, Array, Function],
      watcherOptions: {
        cesiumObjectBuilder: makeBoundingRectangle
      }
    }
  }
}

/**
 * @const {Object, Array, Function}  pixelOffset mixin
 */
const pixelOffset = {
  props: {
    pixelOffset: {
      type: [Object, Array, Function],
      default: () => {
        return {
          x: 0,
          y: 0
        }
      },
      watcherOptions: {
        cesiumObjectBuilder: makeCartesian2
      }
    }
  }
}

/**
 * @const {Object, Array, Function} pixelOffsetScaleByDistance mixin
 */
const pixelOffsetScaleByDistance = {
  props: {
    pixelOffsetScaleByDistance: {
      type: [Object, Array, Function],
      watcherOptions: {
        cesiumObjectBuilder: makeNearFarScalar
      }
    }
  }
}

/**
 * @const {Number, Object, Function} rotation mixin
 */
const rotation = {
  props: {
    rotation: {
      type: [Number, Object, Function],
      default: 0
    }
  }
}

/**
 * @const {Number, Object, Function} scale mixin
 */
const scale = {
  props: {
    scale: {
      type: [Number, Object, Function],
      default: 1.0
    }
  }
}

/**
 * @const {Object, Array, Function} scaleByDistance mixin
 */
const scaleByDistance = {
  props: {
    scaleByDistance: {
      type: [Object, Array, Function],
      watcherOptions: {
        cesiumObjectBuilder: makeNearFarScalar
      }
    }
  }
}

/**
 * @const {Boolean, Object, Function}  show mixin
 */
const show = {
  props: {
    show: {
      type: [Boolean, Object, Function],
      default: true
    }
  }
}

/**
 * @const {Boolean, Object, Function} sizeInMeters mixin
 */
const sizeInMeters = {
  props: {
    sizeInMeters: [Boolean, Object, Function],
    default: false
  }
}

/**
 * @const {Object, Array, Function} translucencyByDistance mixin
 */
const translucencyByDistance = {
  props: {
    translucencyByDistance: {
      type: [Object, Array, Function],
      watcherOptions: {
        cesiumObjectBuilder: makeNearFarScalar
      }
    }
  }
}

/**
 * @const {Number, Object, Function}  verticalOrigin mixin
 */
const verticalOrigin = {
  props: {
    verticalOrigin: {
      type: [Number, Object, Function],
      default: 0
    }
  }
}

/**
 * @const {Number, Object, Function} width mixin
 */
const width = {
  props: {
    width: [Number, Object, Function]
  }
}
// BillboardGraphics end

// BoxGraphics start
/**
 * @const {Object, Array, Function} dimensions mixin
 * // 和 PlaneGraphics.dimensions 区分
 */
const dimensions = {
  props: {
    dimensions: {
      type: [Object, Array, Function],
      watcherOptions: {
        cesiumObjectBuilder: makeCartesian3
      }
    }
  }
}

/**
 * @const {Boolean, Object, Function} fill mixin
 */
const fill = {
  props: {
    fill: {
      type: [Boolean, Object, Function],
      default: true
    }
  }
}

/**
 * @const {Object, String, Array, Function} material mixin
 */
const material = {
  props: {
    material: {
      type: [Object, String, Array, Function],
      default: 'white',
      watcherOptions: {
        cesiumObjectBuilder: makeMaterial
      }
    }
  }
}

/**
 * @const {Boolean, Object, Function} outline mixin
 */
const outline = {
  props: {
    outline: {
      type: [Boolean, Object, Function],
      default: false
    }
  }
}

/**
 * @const {Object, String, Array, Function} outlineColor mixin
 */
const outlineColor = {
  props: {
    outlineColor: {
      type: [Object, String, Array, Function],
      default: 'black',
      watcherOptions: {
        cesiumObjectBuilder: makeColor
      }
    }
  }
}

/**
 * @const {Number, Object, Function} outlineWidth mixin
 */
const outlineWidth = {
  props: {
    outlineWidth: {
      type: [Number, Object, Function],
      default: 1.0
    }
  }
}

/**
 * @const {Number, Object, Function} shadows mixin
 */
const shadows = {
  props: {
    shadows: [Number, Object, Function]
  }
}
// BoxGraphics end

// CorridorGraphics start
/**
 * @const {Array, Object, Function} positions mixin
 */
const positions = {
  props: {
    type: [Array, Object, Function],
    positions: {
      watcherOptions: {
        cesiumObjectBuilder: makeCartesian3Array,
        exclude: '_callback'
      }
    }
  }
}

/**
 * @const {Number, Object, Function} extrudedHeight mixin
 */
const extrudedHeight = {
  props: {
    extrudedHeight: [Number, Object, Function]
  }
}

/**
 * @const {Number, Object, Function} extrudedHeightReference mixin
 */
const extrudedHeightReference = {
  props: {
    extrudedHeightReference: [Number, Object, Function]
  }
}

/**
 * @const {Number, Object, Function} cornerType mixin
 */
const cornerType = {
  props: {
    cornerType: {
      type: [Number, Object, Function],
      default: 0
    }
  }
}

/**
 * @const {Number, Object, Function} granularity mixin
 */
const granularity = {
  props: {
    granularity: [Number, Object, Function]
  }
}

/**
 * @const {Number, Object, Function} classificationType mixin
 */
const classificationType = {
  props: {
    classificationType: {
      type: [Number, Object, Function]
    }
  }
}

/**
 * @const {Number, Object, Function} zIndex mixin
 */
const zIndex = {
  props: {
    zIndex: [Number, Object, Function]
  }
}
// CorridorGraphics end

// CylinderGraphics start

/**
 * @const {Number, Object, Function} length mixin
 */
const length = {
  props: {
    length: [Number, Object, Function]
  }
}

/**
 * @const {Number, Object, Function} topRadius mixin
 */
const topRadius = {
  props: {
    topRadius: [Number, Object, Function]
  }
}

/**
 * @const {Number, Object, Function} bottomRadius mixin
 */
const bottomRadius = {
  props: {
    bottomRadius: [Number, Object, Function]
  }
}

/**
 * @const {Number, Object, Function} numberOfVerticalLines mixin
 */
const numberOfVerticalLines = {
  props: {
    numberOfVerticalLines: {
      type: [Number, Object, Function],
      default: 16
    }
  }
}

/**
 * @const {Number, Object, Function} slices mixin
 */
const slices = {
  props: {
    slices: {
      type: [Number, Object, Function],
      default: 128
    }
  }
}
// CylinderGraphics end

// EllipseGraphics start
/**
 * @const {Number, Object, Function} semiMajorAxis mixin
 */
const semiMajorAxis = {
  props: {
    semiMajorAxis: [Number, Object, Function]
  }
}

/**
 * @const {Number, Object, Function} semiMinorAxis mixin
 */
const semiMinorAxis = {
  props: {
    semiMinorAxis: [Number, Object, Function]
  }
}

/**
 * @const {Number, Object, Function} stRotation mixin
 */
const stRotation = {
  props: {
    stRotation: {
      type: [Number, Object, Function],
      default: 0.0
    }
  }
}
// EllipseGraphics end

// EllipsoidGraphics start
/**
 * @const {Number, Object, Function} radii mixin
 */
const radii = {
  props: {
    radii: {
      type: [Object, Array, Function],
      watcherOptions: {
        cesiumObjectBuilder: makeCartesian3
      }
    }
  }
}

/**
 * @const {Object, Array, Function} innerRadii mixin
 */
const innerRadii = {
  props: {
    innerRadii: {
      type: [Object, Array, Function],
      watcherOptions: {
        cesiumObjectBuilder: makeCartesian3
      }
    }
  }
}

/**
 * @const {Number, Object, Function} minimumClock mixin
 */
const minimumClock = {
  props: {
    minimumClock: {
      type: [Number, Object, Function],
      default: 0.0
    }
  }
}
/**
 * @const {Number, Object, Function} maximumClock mixin
 */
const maximumClock = {
  props: {
    maximumClock: {
      type: [Number, Object, Function],
      default: 2 * Math.PI
    }
  }
}
/**
 * @const {Number, Object, Function} minimumCone mixin
 */
const minimumCone = {
  props: {
    minimumCone: {
      type: [Number, Object, Function],
      default: 0.0
    }
  }
}
/**
 * @const {Number, Object, Function} maximumCone mixin
 */
const maximumCone = {
  props: {
    maximumCone: {
      type: [Number, Object, Function],
      default: Math.PI
    }
  }
}

/**
 * @const {Number, Object, Function} stackPartitions mixin
 */
const stackPartitions = {
  props: {
    stackPartitions: {
      type: [Number, Object, Function],
      default: 64
    }
  }
}

/**
 * @const {Number, Object, Function} slicePartitions mixin
 */
const slicePartitions = {
  props: {
    slicePartitions: {
      type: [Number, Object, Function],
      default: 64
    }
  }
}

/**
 * @const {Number, Object, Function} subdivisions mixin
 */
const subdivisions = {
  props: {
    subdivisions: {
      type: [Number, Object, Function],
      default: 128
    }
  }
}
// EllipsoidGraphics end

// LabelGraphics start
/**
 * @const {String, Object, Function} text mixin
 */
const text = {
  props: {
    text: [String, Object, Function]
  }
}

/**
 * @const {String, Object, Function} font mixin
 */
const font = {
  props: {
    font: {
      type: [String, Object, Function],
      default: '30px sans-serif'
    }
  }
}

/**
 * @const {Number, Object, Function} labelStyle mixin
 */
const labelStyle = {
  props: {
    labelStyle: {
      type: [Number, Object, Function],
      default: 0
    }
  }
}

/**
 * @const {Boolean, Object, Function} showBackground mixin
 */
const showBackground = {
  props: {
    showBackground: {
      type: [Boolean, Object, Function],
      default: false
    }
  }
}

/**
 * @const {Object, String, Array, Function} backgroundColor mixin
 */
const backgroundColor = {
  props: {
    backgroundColor: {
      type: [Object, String, Array, Function],
      default: () => {
        return [0.165, 0.165, 0.165, 0.8]
      },
      watcherOptions: {
        cesiumObjectBuilder: makeColor
      }
    }
  }
}

/**
 * @const {Object, Array, Function} backgroundPadding mixin
 */
const backgroundPadding = {
  props: {
    backgroundPadding: {
      type: [Object, Array, Function],
      default: () => {
        return { x: 7, y: 5 }
      },
      watcherOptions: {
        cesiumObjectBuilder: makeCartesian2
      }
    }
  }
}

/**
 * @const {Object, String, Array, Function} fillColor mixin
 */
const fillColor = {
  props: {
    fillColor: {
      type: [Object, String, Array, Function],
      default: 'white',
      watcherOptions: {
        cesiumObjectBuilder: makeColor
      }
    }
  }
}
// LabelGraphics end

// ModelGraphics start
/**
 * @const {String, Object, Function} uri mixin
 */
const uri = {
  props: {
    uri: [String, Object, Function]
  }
}

/**
 * @const {Number, Object, Function} minimumPixelSize mixin
 */
const minimumPixelSize = {
  props: {
    minimumPixelSize: {
      type: [Number, Object, Function],
      default: 0.0
    }
  }
}

/**
 * @const {Number, Object, Function} maximumScale mixin
 */
const maximumScale = {
  props: {
    maximumScale: [Number, Object, Function]
  }
}

/**
 * @const {Boolean, Object, Function} incrementallyLoadTextures mixin
 */
const incrementallyLoadTextures = {
  props: {
    incrementallyLoadTextures: {
      type: [Boolean, Object, Function],
      default: true
    }
  }
}

/**
 * @const {Boolean, Object, Function} clampAnimations mixin
 */
const runAnimations = {
  props: {
    clampAnimations: {
      type: [Boolean, Object, Function],
      default: true
    }
  }
}

/**
 * @const {Boolean, Object, Function} clampAnimations mixin
 */
const clampAnimations = {
  props: {
    clampAnimations: {
      type: [Boolean, Object, Function],
      default: true
    }
  }
}

/**
 * @const {Object, String, Array, Function} silhouetteColor mixin
 */
const silhouetteColor = {
  props: {
    silhouetteColor: {
      typy: [Object, String, Array, Function],
      watcherOptions: {
        cesiumObjectBuilder: makeColor
      }
    }
  }
}

/**
 * @const {Number, Object, Function} silhouetteSize mixin
 */
const silhouetteSize = {
  props: {
    silhouetteSize: {
      type: [Number, Object, Function],
      default: 0.0
    }
  }
}

/**
 * @const {Number, Object, Function} colorBlendMode mixin
 */
const colorBlendMode = {
  props: {
    colorBlendMode: {
      type: [Number, Object, Function],
      default: 0
    }
  }
}

/**
 * @const {Number, Object, Function} colorBlendAmount mixin
 */
const colorBlendAmount = {
  props: {
    colorBlendAmount: {
      type: [Number, Object, Function],
      default: 0.5
    }
  }
}

/**
 * @const {Object, Array, Function} imageBasedLightingFactor mixin
 */
const imageBasedLightingFactor = {
  props: {
    imageBasedLightingFactor: {
      type: [Object, Array, Function],
      watcherOptions: {
        cesiumObjectBuilder: makeCartesian2
      }
    }
  }
}

/**
 * @const {Object, String, Array, Function} lightColor mixin
 * 注意区别 Cesium3DTileset 的 lightColor
 */
const lightColor = {
  props: {
    lightColor: {
      typy: [Object, String, Array, Function],
      watcherOptions: {
        cesiumObjectBuilder: makeColor
      }
    }
  }
}

/**
 * @const {Object, Function} nodeTransformations mixin
 */
const nodeTransformations = {
  props: {
    nodeTransformations: {
      type: [Object, Function],
      watcherOptions: {
        cesiumObjectBuilder: makeTranslationRotationScale
      }
    }
  }
}

/**
 * @const {Object, Function} articulations mixin
 */
const articulations = {
  props: {
    articulations: [Object, Function]
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
// ModelGraphics end

// PathGraphics start
// PathGraphics end

// PlaneGraphics start
/**
 * @const {Object, Array, Function} plane mixin
 */
const plane = {
  props: {
    plane: {
      type: [Object, Array, Function],
      watcherOptions: {
        cesiumObjectBuilder: makePlane
      }
    }
  }
}
// PlaneGraphics end

// PointGraphics start
/**
 * @const {Number, Object, Function} pixelSize mixin
 */
const pixelSize = {
  props: {
    pixelSize: {
      type: [Number, Object, Function],
      default: 1
    }
  }
}
// PointGraphics end

// PolygonGraphics start

/**
 * @const {Object, Array, Function} hierarchy mixin
 */
const hierarchy = {
  props: {
    hierarchy: {
      type: [Object, Array, Function],
      watcherOptions: {
        cesiumObjectBuilder: makePolygonHierarchy,
        exclude: '_callback'
      }
    }
  }
}

/**
 * @const {Boolean, Object, Function} perPositionHeight mixin
 */
const perPositionHeight = {
  props: {
    perPositionHeight: {
      type: [Boolean, Object, Function],
      default: false
    }
  }
}

/**
 * @const {Boolean, Object, Function} closeTop mixin
 */
const closeTop = {
  props: {
    closeTop: {
      type: [Boolean, Object, Function],
      default: true
    }
  }
}

/**
 * @const {Boolean, Object, Function} closeBottom mixin
 */
const closeBottom = {
  props: {
    closeBottom: {
      type: [Boolean, Object, Function],
      default: true
    }
  }
}

/**
 * @const {Number, Object, Function} arcType mixin
 */
const arcType = {
  props: {
    arcType: {
      type: [Number, Object, Function],
      default: 1
    }
  }
}
// PolygonGraphics end

// PolylineGraphics start
/**
 * @const {Object, String, Array, Function} depthFailMaterial  mixin
 */
const depthFailMaterial = {
  props: {
    depthFailMaterial: {
      type: [Object, String, Array, Function],
      watcherOptions: {
        cesiumObjectBuilder: makeMaterial
      }
    }
  }
}

/**
 * @const {Boolean, Object, Function} clampToGround mixin
 */
const clampToGround = {
  props: {
    clampToGround: {
      type: [Boolean, Object, Function],
      default: false
    }
  }
}
// PolylineGraphics end

// PolylineVolumeGraphics start
/**
 * @const {Array, Object, Function} shape mixin
 */
const shape = {
  props: {
    shape: {
      type: [Array, Object, Function],
      watcherOptions: {
        cesiumObjectBuilder: makeCartesian2Array
      }
    }
  }
}
// PolylineVolumeGraphics end

// RectangleGraphics start
/**
 * @const {Object, Array, Function} coordinates mixin
 */
const coordinates = {
  props: {
    coordinates: {
      type: [Object, Array, Function],
      watcherOptions: {
        cesiumObjectBuilder: makeRectangle
      }
    }
  }
}
// RectangleGraphics end

// Cesium3DTilesetGraphics start
/**
 * @const {Number, Object, Function} maximumScreenSpaceError mixin
 */
const maximumScreenSpaceError = {
  props: {
    maximumScreenSpaceError: {
      type: [Number, Object, Function],
      default: 16
    }
  }
}
// Cesium3DTilesetGraphics end

// WallGraphics start
/**
 * @const {Array, Object, Function} minimumHeights mixin
 */
const minimumHeights = {
  props: {
    minimumHeights: [Array, Object, Function]
  }
}

/**
 * @const {Array, Object, Function} maximumHeights mixin
 */
const maximumHeights = {
  props: {
    maximumHeights: [Array, Object, Function]
  }
}
// WallGraphics end
// Entity end

// ImageryLayer start
/**
 * @const {Object, Array} cutoutRectangle mixin
 */
const cutoutRectangle = {
  props: {
    cutoutRectangle: {
      type: [Object, Array],
      watcherOptions: {
        cesiumObjectBuilder: makeRectangle
      }
    }
  }
}

/**
 * @const {Object, String, Array} colorToAlpha mixin
 */
const colorToAlpha = {
  props: {
    colorToAlpha: {
      type: [Object, String, Array],
      watcherOptions: {
        cesiumObjectBuilder: makeColor
      }
    }
  }
}
// ImageryLayer end

// imageryProvider
/**
 * @const {String, Object} url mixin
 */
const url = {
  props: {
    url: [String, Object]
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
 * @const {Object, Array} rectangle mixin
 */
const rectangle = {
  props: {
    rectangle: {
      type: [Object, Array],
      watcherOptions: {
        cesiumObjectBuilder: makeRectangle
      }
    }
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
 * @const {String, Object} credit mixin
 */
const credit = {
  props: {
    credit: {
      type: [String, Object],
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
 * @const {String, Array} subdomains mixin
 */
const subdomains = {
  props: {
    subdomains: [String, Array]
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
 * @const {Array, Object} geometryInstances mixin
 */
const geometryInstances = {
  props: {
    geometryInstances: [Array, Object]
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
 * @const {Object, Array} center mixin
 */
const center = {
  props: {
    center: {
      type: [Object, Array],
      watcherOptions: {
        cesiumObjectBuilder: makeCartesian3
      }
    }
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
 * @const {Object} frustum mixin
 */
const frustum = {
  props: {
    frustum: Object
  }
}

/**
 * @const {Object, Array} origin mixin
 */
const origin = {
  props: {
    origin: {
      type: [Object, Array],
      watcherOptions: {
        cesiumObjectBuilder: makeCartesian3
      }
    }
  }
}

/**
 * @const {Object} polygonHierarchy mixin
 */
const polygonHierarchy = {
  props: {
    polygonHierarchy: {
      type: [Object, Array],
      watcherOptions: {
        cesiumObjectBuilder: makePolygonHierarchy
      }
    }
  }
}

/**
 * @const {Object, String, Array} startColor mixin
 */
const startColor = {
  props: {
    startColor: {
      type: [Object, String, Array],
      watcherOptions: {
        cesiumObjectBuilder: makeColor
      }
    }
  }
}

/**
 * @const {Object, String, Array} endColor mixin
 */
const endColor = {
  props: {
    endColor: {
      type: [Object, String, Array],
      watcherOptions: {
        cesiumObjectBuilder: makeColor
      }
    }
  }
}

/**
 * @const {Object, Array} minimumImageSize mixin
 */
const minimumImageSize = {
  props: {
    minimumImageSize: {
      type: [Object, Array],
      watcherOptions: {
        cesiumObjectBuilder: makeCartesian2
      }
    }
  }
}

/**
 * @const {Object, Array} maximumImageSize mixin
 */
const maximumImageSize = {
  props: {
    maximumImageSize: {
      type: [Object, Array],
      watcherOptions: {
        cesiumObjectBuilder: makeCartesian2
      }
    }
  }
}

/**
 * @const {Object, Array} imageSize mixin
 */
const imageSize = {
  props: {
    imageSize: {
      type: [Object, Array],
      watcherOptions: {
        cesiumObjectBuilder: makeCartesian2
      }
    }
  }
}

/**
 * @const {Array} shapePositions mixin
 */
const shapePositions = {
  props: {
    shapePositions: {
      type: Array,
      watcherOptions: {
        cesiumObjectBuilder: makeCartesian2Array
      }
    }
  }
}

/**
 * @const {Array} polylinePositions mixin
 */
const polylinePositions = {
  props: {
    polylinePositions: {
      type: Array,
      watcherOptions: {
        cesiumObjectBuilder: makeCartesian3Array
      }
    }
  }
}

/**
 * @const {Object, String, Array} lightColor2 mixin
 * 用于 Cesium3DTileset 和 Model
 */
const lightColor2 = {
  props: {
    lightColor: {
      type: [Object, Array],
      watcherOptions: {
        cesiumObjectBuilder: makeCartesian3
      }
    }
  }
}

/**
 * @const {Number} luminanceAtZenith mixin
 */
const luminanceAtZenith = {
  props: {
    luminanceAtZenith: {
      type: Number,
      default: 0.2
    }
  }
}

/**
 * @const {Array, Object} sphericalHarmonicCoefficients mixin
 */
const sphericalHarmonicCoefficients = {
  props: {
    sphericalHarmonicCoefficients: {
      type: [Array, Object],
      watcherOptions: {
        cesiumObjectBuilder: makeCartesian3Array
      }
    }
  }
}

/**
 * @const {String} specularEnvironmentMaps mixin
 */
const specularEnvironmentMaps = {
  props: {
    specularEnvironmentMaps: String
  }
}

/**
 * @const {Boolean} backFaceCulling mixin
 */
const backFaceCulling = {
  props: {
    backFaceCulling: {
      type: Boolean,
      default: true
    }
  }
}

// datasouce
/**
 * @const {String, Object} data mixin
 */
const data = {
  props: {
    data: {
      type: [String, Object],
      required: true
    }
  }
}

/**
 * @const {Object} options mixin
 */
const options = {
  props: {
    options: {
      type: Object,
      watcherOptions: {
        cesiumObjectBuilder: makeOptions,
        deep: true
      }
    }
  }
}

// PostProcessStage start
/**
 * @const {String, Array, Object} glowColor mixin
 */
const glowColor = {
  props: {
    glowColor: {
      type: [String, Array, Object],
      default: () => [0.0, 1.0, 0.0, 0.05],
      watcherOptions: {
        cesiumObjectBuilder: makeColor
      }
    }
  }
}

/**
 * @const {String, Array, Object} clearColor mixin
 */
const clearColor = {
  props: {
    clearColor: {
      type: [String, Array, Object],
      watcherOptions: {
        cesiumObjectBuilder: makeColor
      }
    }
  }
}

/**
 * @const {Object, Array} scissorRectangle mixin
 */
const scissorRectangle = {
  props: {
    scissorRectangle: {
      type: [Object, Array],
      watcherOptions: {
        cesiumObjectBuilder: makeBoundingRectangle
      }
    }
  }
}

// PostProcessStage end

export {
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
