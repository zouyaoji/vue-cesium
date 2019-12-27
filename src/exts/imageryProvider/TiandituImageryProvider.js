import TiandituMapsStyle from './TiandituMapsStyle'
const TiandituMapsStyleUrl = {}
const TiandituMapsStyleLayer = {}
const TiandituMapsStyleID = {}
const TiandituMapsStyleFormat = {}
const TiandituMapsStyleEPSG = {}
const TiandituMapsStyleLabels = {}

class TiandituImageryProvider {
  constructor (options) {
    Object.keys(TiandituMapsStyle).forEach(key => {
      TiandituMapsStyleUrl[TiandituMapsStyle[key]] = options.protocol + '://[subdomain].tianditu.gov.cn/' + TiandituMapsStyle[key] + '/wmts'
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
          TiandituMapsStyleLabels[TiandituMapsStyle[key]] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
          break
        case 'vec_w':
        case 'vec_c':
        case 'cva_w':
        case 'cva_c':
          TiandituMapsStyleLabels[TiandituMapsStyle[key]] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19']
          break
        case 'ter_w':
        case 'ter_c':
          TiandituMapsStyleLabels[TiandituMapsStyle[key]] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']
          break
        case 'eia_w':
        case 'eia_c':
        case 'eva_w':
        case 'eva_c':
          TiandituMapsStyleLabels[TiandituMapsStyle[key]] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
          break
      }
    })
    const { Credit, defaultValue, Event, GeographicTilingScheme, WebMercatorTilingScheme, when } = Cesium
    options = defaultValue(options, {})
    this.m_mapStyle = defaultValue(options.mapStyle, TiandituMapsStyle.IMG_W)
    this.m_url = defaultValue(options.url, TiandituMapsStyleUrl[this.m_mapStyle])
    this.m_token = options.token
    this.m_layer = defaultValue(options.layer, TiandituMapsStyleLayer[this.m_mapStyle])
    this.m_style = defaultValue(options.style, 'default')
    this.m_tileMatrixSetID = defaultValue(options.tileMatrixSetID, TiandituMapsStyleID[this.m_mapStyle])
    this.m_tileMatrixLabels = defaultValue(options.tileMatrixLabels, TiandituMapsStyleLabels[this.m_mapStyle])
    this.m_format = defaultValue(options.format, TiandituMapsStyleFormat[this.m_mapStyle])
    this.m_epsgCode = TiandituMapsStyleEPSG[this.m_mapStyle]
    this.m_tilingScheme = this.m_epsgCode === '900913' ? new WebMercatorTilingScheme() : new GeographicTilingScheme()
    this.m_tileWidth = defaultValue(options.tileWidth, 256)
    this.m_tileHeight = defaultValue(options.tileHeight, 256)
    this.m_minimumLevel = defaultValue(options.minimumLevel, 0)
    this.m_maximumLevel = defaultValue(options.maximumLevel, TiandituMapsStyleLabels[this.m_mapStyle].length)
    this.m_rectangle = defaultValue(options.rectangle, this.tilingScheme.rectangle)
    this.m_readyPromise = when.resolve(true)
    this.m_errorEvent = new Event()
    const credit = defaultValue(options.credit, '天地图全球影像服务')
    this.m_credit = typeof credit === 'string' ? new Credit(credit) : credit
    this.m_subdomains = defaultValue(options.subdomains, ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'])
    this.m_tileDiscardPolicy = options.tileDiscardPolicy
  }

  requestImage (x, y, level) {
    const url = buildImageResource.call(this, x, y, level)
    return Cesium.ImageryProvider.loadImage(this, url)
  }

  pickFeatures () { }

  get url () {
    return this.m_url
  }
  get mapStyle () {
    return this.m_mapStyle
  }
  get tileWidth () {
    return this.m_tileWidth
  }
  get tileHeight () {
    return this.m_tileHeight
  }
  get maximumLevel () {
    return this.m_maximumLevel
  }
  get minimumLevel () {
    return this.m_minimumLevel
  }
  get tilingScheme () {
    return this.m_tilingScheme
  }
  get rectangle () {
    return this.m_rectangle
  }
  get errorEvent () {
    return this.m_errorEvent
  }
  get ready () {
    return true
  }
  get readyPromise () {
    return this.m_readyPromise
  }
  get credit () {
    return this.m_credit
  }
  get hasAlphaChannel () {
    return true
  }
  get tileDiscardPolicy () {
    return this.m_tileDiscardPolicy
  }
}

/**
 * 构建天地图影像服务url, 调用时需要改变 this 指向为 TiandituImageryProvider
 * @param {number} x
 * @param {number} y
 * @param {number} level
 * @private
 */
function buildImageResource (x, y, level) {
  const { combine, defined, defaultValue, freezeObject, queryToObject, objectToQuery, Uri } = Cesium
  const options = freezeObject({
    service: 'WMTS',
    version: '1.0.0',
    request: 'GetTile'
  })
  this.m_epsgCode === '900913' && (level -= 1)
  const tileMatrixLabels = this.m_tileMatrixLabels
  const tileMatrixLabel = defined(tileMatrixLabels) ? tileMatrixLabels[level] : level.toString()
  const subdomains = this.m_subdomains
  let url = this.m_url.replace('[subdomain]', subdomains[(x + y + level) % subdomains.length])
  const uri = new Uri(url)
  let obj = queryToObject(defaultValue(uri.query, ''))
  obj = combine(options, obj)
  obj.tilematrix = tileMatrixLabel
  obj.layer = this.m_layer
  obj.style = this.m_style
  obj.tilerow = y
  obj.tilecol = x
  obj.tilematrixset = this.m_tileMatrixSetID
  obj.format = this.m_format
  uri.query = objectToQuery(obj)
  url = uri.toString()
  defined(this.m_proxy) && (url = this.m_proxy.getURL(url))
  defined(this.m_token) && (url += '&tk=' + this.m_token)
  return url
}

export default TiandituImageryProvider
