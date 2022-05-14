import defer from '@vue-cesium/utils/defer'
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
  _hasAlphaChannel: boolean
  _subdomains: any
  _errorEvent: any
  _readyPromise: any
  _labelStyle: any
  _qt: 'tile' | 'vtile'
  _styles: 'sl' | 'pl'
  _scale: '1' | '2'
  _ak: string
  _mapStyle:
    | 'img'
    | 'vec'
    | 'traffic'
    | 'normal'
    | 'light'
    | 'dark'
    | 'redalert'
    | 'googlelite'
    | 'grassgreen'
    | 'midnight'
    | 'pink'
    | 'darkgreen'
    | 'bluish'
    | 'grayscale'
    | 'hardedge'
  constructor(options) {
    const { Resource, defaultValue, Credit, Event } = Cesium
    this._subdomains = defaultValue(options.subdomains, ['0', '1', '2', '3'])
    if (options.url) {
      this._url = options.url
    } else {
      if (options.mapStyle === 'img') {
        this._url = `//maponline{s}.bdimg.com/starpic/u=x={x};y={y};z={z};v=009;type=sate&qt=satepc&app=webearth2&udt={udt}&fm=46&v=009`
      } else if (options.mapStyle === 'vec') {
        this._url = `//maponline{s}.bdimg.com/tile/?qt={qt}&x={x}&y={y}&z={z}&styles={styles}&scaler={scale}&udt={udt}&from=jsapi2_0`
      } else if (options.mapStyle === 'traffic') {
        this._url = `https://its.map.baidu.com/traffic/TrafficTileService?time={time}&label={labelStyle}&v=016&level={z}&x={x}&y={y}&scaler={scale}`
      } else {
        this._url = `//api.map.baidu.com/customimage/tile?&x={x}&y={y}&z={z}&udt={udt}&scale={scale}&ak={ak}&customid={mapStyle}`
      }
    }

    const resource = (Resource as any).createIfNeeded(this._url)
    resource.appendForwardSlash()

    this._ready = false
    this._resource = resource
    this._tileDiscardPolicy = options.tileDiscardPolicy
    this._tileWidth = 256
    this._tileHeight = 256
    this._minimumLevel = options.minimumLevel || 0
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
    this._errorEvent = new Event()
    this._readyPromise = defer()
    this._ready = true
    this._readyPromise.resolve(true)
    this._labelStyle = options.labelStyle || 'web2D'
    this._qt = options.qt
    this._styles = options.styles
    this._scale = options.scale
    this._ak = options.ak
    this._mapStyle = options.mapStyle
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
  url = url
    .replace('{s}', subdomains[(x + y + level) % subdomains.length])
    .replace('{qt}', this._qt)
    .replace('{x}', x)
    .replace('{y}', -y)
    .replace('{z}', level)
    .replace('{styles}', this._styles)
    .replace('{scale}', this._scale)
    .replace('{mapStyle}', this._mapStyle)
    .replace('{labelStyle}', this._labelStyle)
    .replace('{time}', String(new Date().getTime()))
    .replace('{udt}', String(new Date().getTime()))
  const resource = this._resource.getDerivedResource({
    url: url,
    request: request
  })
  return resource
}

export default BaiduMapImageryProvider
