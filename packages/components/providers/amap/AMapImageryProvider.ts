/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-03-30 16:10:02
 * @LastEditTime: 2022-05-14 17:58:20
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\amap\AMapImageryProvider.ts
 */

import defer from '@vue-cesium/utils/defer'

class AMapImageryProvider {
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
  _domain: any
  _lang: any
  _scl: any
  _ltype: any
  constructor(options) {
    const { Resource, Credit, Event } = Cesium
    this._url = options.url
    const resource = (Resource as any).createIfNeeded(this._url)
    resource.appendForwardSlash()

    this._ready = false
    this._resource = resource
    this._tileDiscardPolicy = options.tileDiscardPolicy
    this._tileWidth = 256
    this._tileHeight = 256
    this._minimumLevel = options.minimumLevel || 0
    this._maximumLevel = options.maximumLevel || 20
    this._tilingScheme = options.tilingScheme || new Cesium.WebMercatorTilingScheme()
    this._rectangle = options.rectangle || this._tilingScheme.rectangle
    let credit = options.credit
    if (typeof credit === 'string') {
      credit = new Credit(credit)
    }
    this._credit = credit
    this.enablePickFeatures = options.enablePickFeatures ?? false
    this._hasAlphaChannel = options.hasAlphaChannel ?? true
    this._errorEvent = new Event()
    this._readyPromise = defer()
    this._ready = true
    this._readyPromise.resolve(true)
    this._subdomains = options.subdomains || ['01', '02', '03', '04']
    this._domain = options.domain || 'webst'
    this._style = options.mapStyle || '6'
    this._lang = options.lang || 'zh_cn'
    this._scl = options.scl || '1'
    this._ltype = options.ltype || '0'
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
    .replace('{domain}', this._domain)
    .replace('{s}', subdomains[(x + y + level) % subdomains.length])
    .replace('{lang}', this._lang)
    .replace('{style}', this._style)
    .replace('{scl}', this._scl)
    .replace('{ltype}', this._ltype)
    .replace('{x}', x)
    .replace('{y}', y)
    .replace('{z}', level)
  const resource = this._resource.getDerivedResource({
    url: url,
    request: request
  })
  return resource
}

export default AMapImageryProvider
