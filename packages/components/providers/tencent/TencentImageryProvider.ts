import defer from '@vue-cesium/utils/defer'

/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-03-30 16:10:02
 * @LastEditTime: 2022-05-14 17:58:25
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\tencent\TencentImageryProvider.ts
 */
const TILE_URL = {
  img: '//p{s}.map.gtimg.com/sateTiles/{z}/{sx}/{sy}/{x}_{reverseY}.jpg&scene=0',
  terrain: '//p{s}.map.gtimg.com/demTiles/{z}/{sx}/{sy}/{x}_{reverseY}.jpg&scene=0',
  vector: '//rt{s}.map.gtimg.com/tile?z={z}&x={x}&y={reverseY}&type=vector&styleid={style}&scene=0'
}

class TencentImageryProvider {
  _url: string
  _ready: boolean
  _resource: any
  _tileDiscardPolicy: any
  _tileWidth: number
  _tileHeight: number
  _minimumLevel: any
  _maximumLevel: any
  _tilingScheme: Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme
  _rectangle: any
  _credit: any
  enablePickFeatures: any
  _hasAlphaChannel: any
  _subdomains: any
  _errorEvent: any
  _readyPromise: any
  _style: string
  constructor(options) {
    const { Resource, defaultValue, Credit, Event } = Cesium
    this._subdomains = options.subdomains || ['1', '2', '3']
    this._url = options.url || [options.protocol || '', TILE_URL[options.mapStyle] || TILE_URL['vector']].join('')

    const resource = (Resource as any).createIfNeeded(this._url)
    resource.appendForwardSlash()

    this._ready = false
    this._resource = resource
    this._tileDiscardPolicy = options.tileDiscardPolicy
    this._tileWidth = 256
    this._tileHeight = 256
    this._minimumLevel = options.minimumLevel || 0
    this._maximumLevel = options.maximumLevel || 20
    this._tilingScheme = new Cesium.WebMercatorTilingScheme()
    this._rectangle = defaultValue(options.rectangle, this._tilingScheme.rectangle)
    let credit = options.credit
    if (typeof credit === 'string') {
      credit = new Credit(credit)
    }
    this._credit = credit
    this.enablePickFeatures = defaultValue(options.enablePickFeatures, false)
    this._hasAlphaChannel = defaultValue(options.hasAlphaChannel, true)
    this._errorEvent = new Event()
    this._readyPromise = defer()
    this._ready = true
    this._readyPromise.resolve(true)
    this._style = options.styleId
  }

  get url() {
    return this._resource._url
  }

  get proxy() {
    return this._resource.proxy
  }

  get tileWidth() {
    if (!this._ready) {
      throw new Cesium.DeveloperError('tileWidth must not be called before the imagery provider is ready.')
    }
    return this._tileWidth
  }

  get tileHeight() {
    if (!this._ready) {
      throw new Cesium.DeveloperError('tileHeight must not be called before the imagery provider is ready.')
    }
    return this._tileHeight
  }

  get maximumLevel() {
    if (!this._ready) {
      throw new Cesium.DeveloperError('maximumLevel must not be called before the imagery provider is ready.')
    }
    return this._maximumLevel
  }

  get minimumLevel() {
    if (!this.ready) {
      throw new Cesium.DeveloperError('minimumLevel must not be called before the imagery provider is ready.')
    }
    return this._minimumLevel
  }

  get tilingScheme() {
    if (!this._ready) {
      throw new Cesium.DeveloperError('tilingScheme must not be called before the imagery provider is ready.')
    }
    return this._tilingScheme
  }

  get rectangle() {
    if (!this.ready) {
      throw new Cesium.DeveloperError('rectangle must not be called before the imagery provider is ready.')
    }
    return this._rectangle
  }

  get tileDiscardPolicy() {
    if (!this.ready) {
      throw new Cesium.DeveloperError('tileDiscardPolicy must not be called before the imagery provider is ready.')
    }
    return this._tileDiscardPolicy
  }

  get errorEvent() {
    return this._errorEvent
  }

  get ready() {
    return this._ready
  }

  get readyPromise() {
    return this._readyPromise.promise
  }

  get credit() {
    if (!this.ready) {
      throw new Cesium.DeveloperError('credit must not be called before the imagery provider is ready.')
    }
    return this._credit
  }

  get hasAlphaChannel() {
    if (!this.ready) {
      throw new Cesium.DeveloperError('hasAlphaChannel must not be called before the imagery provider is ready.')
    }
    return this._hasAlphaChannel
  }

  getTileCredits(x, y, level) {
    if (!this.ready) {
      throw new Cesium.DeveloperError('getTileCredits must not be called before the imagery provider is ready.')
    }
    return undefined
  }

  requestImage(x, y, level, request) {
    if (!this.ready) {
      throw new Cesium.DeveloperError('requestImage must not be called before the imagery provider is ready.')
    }
    return Cesium.ImageryProvider.loadImage(this as any, buildImageResource.call(this, x, y, level, request))
  }

  pickFeatures(x, y, level, longitude, latitude) {
    return undefined
  }
}

function buildImageResource(this, x, y, level, request) {
  let url = this._url
  const subdomains = this._subdomains
  const reverseY = this.tilingScheme.getNumberOfYTilesAtLevel(level) - y - 1
  url = url
    .replace('{s}', subdomains[(x + y + level) % subdomains.length])
    .replace('{style}', this._style)
    .replace('{x}', x)
    .replace('{y}', -y)
    .replace('{z}', level)
    .replace('{sx}', x >> 4)
    .replace('{sy}', ((1 << level) - y) >> 4)
    .replace('{reverseY}', reverseY)
  const resource = this._resource.getDerivedResource({
    url: url,
    request: request
  })
  return resource
}

export default TencentImageryProvider
