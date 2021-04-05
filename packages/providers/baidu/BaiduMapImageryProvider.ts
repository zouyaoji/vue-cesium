import BaiduMapMercatorTilingScheme from './BaiduMapTilingScheme'

class BaiduMapImageryProvider {
  _url: string
  _ready: boolean
  _resource: any
  _tileDiscardPolicy: any
  _tileWidth: number
  _tileHeight: number
  _minimumLevel: any
  _maximumLevel: any
  _tilingScheme: BaiduMapMercatorTilingScheme
  _rectangle: any
  _credit: any
  enablePickFeatures: any
  _hasAlphaChannel: any
  _subdomains: any
  _errorEvent: any
  _readyPromise: any
  constructor(options) {
    const { Resource, defaultValue, Credit, when, Event } = Cesium
    this._url = options.url || `${options.protocol}://{s}.map.bdimg.com/onlinelabel/?qt=tile&styles=pl&x={x}&y={y}&z={z}`
    const resource = (Resource as any).createIfNeeded(this._url)
    resource.appendForwardSlash()

    this._ready = false
    this._resource = resource
    this._tileDiscardPolicy = options.tileDiscardPolicy
    this._tileWidth = 256
    this._tileHeight = 256
    this._minimumLevel = options.maximumLevel || 0
    this._maximumLevel = options.maximumLevel || 18
    this._tilingScheme = new BaiduMapMercatorTilingScheme(options)
    this._rectangle = defaultValue(options.rectangle, this._tilingScheme.rectangle)
    let credit = options.credit
    if (typeof credit === 'string') {
      credit = new Credit(credit)
    }
    this._credit = credit
    this.enablePickFeatures = defaultValue(options.enablePickFeatures, false)
    this._hasAlphaChannel = defaultValue(options.hasAlphaChannel, true)
    this._subdomains = defaultValue(options.subdomains, ['online0', 'online1', 'online2', 'online3', 'online4', 'online5', 'online6', 'online7', 'online8', 'online9'])
    this._errorEvent = new Event()
    this._readyPromise = when.defer()
    this._ready = true
    this._readyPromise.resolve(true)
  }

  get url () {
    return this._resource._url
  }

  get proxy () {
    return this._resource.proxy
  }

  get tileWidth () {
    if (!this._ready) {
      throw new Cesium.DeveloperError('tileWidth must not be called before the imagery provider is ready.')
    }
    return this._tileWidth
  }

  get tileHeight () {
    if (!this._ready) {
      throw new Cesium.DeveloperError('tileHeight must not be called before the imagery provider is ready.')
    }
    return this._tileHeight
  }

  get maximumLevel () {
    if (!this._ready) {
      throw new Cesium.DeveloperError('maximumLevel must not be called before the imagery provider is ready.')
    }
    return this._maximumLevel
  }

  get minimumLevel () {
    if (!this.ready) {
      throw new Cesium.DeveloperError('minimumLevel must not be called before the imagery provider is ready.')
    }
    return this._minimumLevel
  }

  get tilingScheme () {
    if (!this._ready) {
      throw new Cesium.DeveloperError('tilingScheme must not be called before the imagery provider is ready.')
    }
    return this._tilingScheme
  }

  get rectangle () {
    if (!this.ready) {
      throw new Cesium.DeveloperError('rectangle must not be called before the imagery provider is ready.')
    }
    return this._rectangle
  }

  get tileDiscardPolicy () {
    if (!this.ready) {
      throw new Cesium.DeveloperError(
        'tileDiscardPolicy must not be called before the imagery provider is ready.'
      )
    }
    return this._tileDiscardPolicy
  }

  get errorEvent () {
    return this._errorEvent
  }

  get ready () {
    return this._ready
  }

  get readyPromise () {
    return this._readyPromise.promise
  }

  get credit () {
    if (!this.ready) {
      throw new Cesium.DeveloperError(
        'credit must not be called before the imagery provider is ready.'
      )
    }
    return this._credit
  }

  get hasAlphaChannel () {
    if (!this.ready) {
      throw new Cesium.DeveloperError(
        'hasAlphaChannel must not be called before the imagery provider is ready.'
      )
    }
    return this._hasAlphaChannel
  }

  getTileCredits (x, y, level) {
    if (!this.ready) {
      throw new Cesium.DeveloperError(
        'getTileCredits must not be called before the imagery provider is ready.'
      )
    }
    return undefined
  }

  requestImage (x, y, level, request) {
    if (!this.ready) {
      throw new Cesium.DeveloperError(
        'requestImage must not be called before the imagery provider is ready.'
      )
    }
    return Cesium.ImageryProvider.loadImage(
      (this as any),
      buildImageResource.call(this, x, y, level, request)
    )
  }
}

function buildImageResource (x, y, level, request) {
  let url = this._url
  const subdomains = this._subdomains
  url = url.replace('{s}', subdomains[(x + y + level) % subdomains.length]).replace('{x}', x).replace('{y}', -y).replace('{z}', level)
  const resource = this._resource.getDerivedResource({
    url: url,
    request: request
  })
  return resource
}

export default BaiduMapImageryProvider
