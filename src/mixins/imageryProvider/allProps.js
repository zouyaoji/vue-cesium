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

export {
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
