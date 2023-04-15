import TiandituMapsStyle from './TiandituMapsStyle'
import Uri from 'urijs'
import defer from '@vue-cesium/utils/defer'

const TiandituMapsStyleUrl = {}
const TiandituMapsStyleLayer = {}
const TiandituMapsStyleID = {}
const TiandituMapsStyleFormat = {}
const TiandituMapsStyleEPSG = {}
const TiandituMapsStyleLabels = {}

class TiandituImageryProvider {
  _mapStyle: string
  _url: string
  _token: string
  _layer: string
  _style: string
  _tileMatrixSetID: string
  _tileMatrixLabels: string
  _format: string
  _epsgCode: string
  _tilingScheme: Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme
  _tileWidth: number
  _tileHeight: number
  _minimumLevel: number
  _maximumLevel: number
  _rectangle: Cesium.Rectangle
  // _readyPromise?: Promise<boolean>
  _errorEvent: Cesium.Event
  _credit: Cesium.Credit
  _subdomains: string[]
  _tileDiscardPolicy: any
  _ready: boolean
  _resource: Cesium.Resource
  constructor(options) {
    Object.keys(TiandituMapsStyle).forEach(key => {
      TiandituMapsStyleUrl[TiandituMapsStyle[key]] = options.protocol + '://{s}.tianditu.gov.cn/' + TiandituMapsStyle[key] + '/wmts'
      TiandituMapsStyleLayer[TiandituMapsStyle[key]] = TiandituMapsStyle[key].slice(0, 3)
      TiandituMapsStyleID[TiandituMapsStyle[key]] = TiandituMapsStyle[key].slice(4)
      TiandituMapsStyleFormat[TiandituMapsStyle[key]] = 'tiles'

      if (TiandituMapsStyleID[TiandituMapsStyle[key]] === 'w') {
        TiandituMapsStyleEPSG[TiandituMapsStyle[key]] = '900913'
      } else {
        TiandituMapsStyleEPSG[TiandituMapsStyle[key]] = '4490'
      }
      switch (TiandituMapsStyle[key]) {
        case 'img_w':
        case 'img_c':
        case 'cia_w':
        case 'cia_c':
        case 'cta_w':
        case 'cta_c':
          TiandituMapsStyleLabels[TiandituMapsStyle[key]] = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18'
          ]
          break
        case 'vec_w':
        case 'vec_c':
        case 'cva_w':
        case 'cva_c':
          TiandituMapsStyleLabels[TiandituMapsStyle[key]] = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19'
          ]
          break
        case 'ter_w':
        case 'ter_c':
          TiandituMapsStyleLabels[TiandituMapsStyle[key]] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']
          break
        case 'eia_w':
        case 'eia_c':
        case 'eva_w':
        case 'eva_c':
        case 'ibo_c':
        case 'ibo_w':
          TiandituMapsStyleLabels[TiandituMapsStyle[key]] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
          break
      }
    })
    const { Credit, Resource, defaultValue, Event, GeographicTilingScheme, WebMercatorTilingScheme } = Cesium
    options = defaultValue(options, {})
    this._mapStyle = defaultValue(options.mapStyle, TiandituMapsStyle.IMG_W)
    this._url = options.url || defaultValue(options.url, TiandituMapsStyleUrl[this._mapStyle])

    const resource = (Resource as any).createIfNeeded(this._url)
    resource.appendForwardSlash()

    this._ready = false
    this._resource = resource
    this._token = options.token
    this._layer = defaultValue(options.layer, TiandituMapsStyleLayer[this._mapStyle])
    this._style = defaultValue(options.style, 'default')
    this._tileMatrixSetID = defaultValue(options.tileMatrixSetID, TiandituMapsStyleID[this._mapStyle])
    this._tileMatrixLabels = defaultValue(options.tileMatrixLabels, TiandituMapsStyleLabels[this._mapStyle])
    this._format = defaultValue(options.format, TiandituMapsStyleFormat[this._mapStyle])
    this._epsgCode = TiandituMapsStyleEPSG[this._mapStyle]
    this._tilingScheme = this._epsgCode === '900913' ? new WebMercatorTilingScheme() : new GeographicTilingScheme()
    this._tileWidth = defaultValue(options.tileWidth, 256)
    this._tileHeight = defaultValue(options.tileHeight, 256)
    this._minimumLevel = defaultValue(options.minimumLevel, 0)
    this._maximumLevel = defaultValue(options.maximumLevel, TiandituMapsStyleLabels[this._mapStyle].length)
    this._rectangle = defaultValue(options.rectangle, this._tilingScheme.rectangle)
    // this._readyPromise = defer()
    this._errorEvent = new Event()
    const credit = defaultValue(options.credit, '天地图全球影像服务')
    this._credit = typeof credit === 'string' ? new Credit(credit) : credit
    this._subdomains = defaultValue(options.subdomains, ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'])
    this._tileDiscardPolicy = options.tileDiscardPolicy
    this._ready = true
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

    const url = buildImageResource.call(this, x, y, level, request)
    return Cesium.ImageryProvider.loadImage(this as any, url)
  }

  pickFeatures(x, y, level, longitude, latitude) {
    return undefined
  }

  get url() {
    return this._resource.url
  }

  get proxy() {
    return this._resource.proxy
  }

  get mapStyle() {
    return this._mapStyle
  }

  get tileWidth() {
    return this._tileWidth
  }

  get tileHeight() {
    return this._tileHeight
  }

  get maximumLevel() {
    return this._maximumLevel
  }

  get minimumLevel() {
    return this._minimumLevel
  }

  get tilingScheme() {
    return this._tilingScheme
  }

  get rectangle() {
    return this._rectangle
  }

  get errorEvent() {
    return this._errorEvent
  }

  get ready() {
    return true
  }

  // get readyPromise() {
  //   // return this._readyPromise
  // }

  get credit() {
    return this._credit
  }

  get hasAlphaChannel() {
    return true
  }

  get tileDiscardPolicy() {
    return this._tileDiscardPolicy
  }
}

/**
 * 构建天地图影像服务url, 调用时需要改变 this 指向为 TiandituImageryProvider
 * @param {number} x
 * @param {number} y
 * @param {number} level
 * @private
 */
function buildImageResource(this, x, y, level, request) {
  const { combine, defined, defaultValue, queryToObject, objectToQuery } = Cesium
  const freezeObject = Object.freeze
  const options = freezeObject({
    service: 'WMTS',
    version: '1.0.0',
    request: 'GetTile'
  })
  this._epsgCode === '900913' && (level -= 1)
  const tileMatrixLabels = this._tileMatrixLabels
  const tileMatrixLabel = defined(tileMatrixLabels) ? tileMatrixLabels[level] : level.toString()
  const subdomains = this._subdomains
  let url = this._url.replace('{s}', subdomains[(x + y + level) % subdomains.length])
  const uri = new Uri(url)
  let obj = queryToObject(defaultValue(uri.query?.(), ''))
  obj = combine(options, obj)
  obj.tilematrix = tileMatrixLabel
  obj.layer = this._layer
  obj.style = this._style
  obj.tilerow = y
  obj.tilecol = x
  obj.tilematrixset = this._tileMatrixSetID
  obj.format = this._format
  const query = objectToQuery(obj)
  url = uri.toString() + '?' + query
  defined(this._proxy) && (url = this._proxy.getURL(url))
  defined(this._token) && (url += '&tk=' + this._token)

  const resource = this._resource.getDerivedResource({
    url: url,
    request: request
  })
  return resource
}

export default TiandituImageryProvider
