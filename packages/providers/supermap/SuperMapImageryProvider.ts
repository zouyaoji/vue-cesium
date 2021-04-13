import IndexedDBScheduler from './IndexedDBScheduler'
class SuperMapImageryProvider {
  tablename: string
  _indexedDBScheduler: any
  _indexedDBSetting: { isOpen: boolean; clear: () => void; }
  isSci: boolean
  isTileMap: boolean
  layersID: string
  _url: string
  _resource: any
  _transparent: boolean
  _name: string
  _urlTemplate: string
  _errorEvent: any
  _fileExtension: string
  _tileWidth: number
  _tileHeight: number
  _minimumLevel: number
  _maximumLevel: number
  _rectangle: any
  _tilingScheme: any
  _tileDiscardPolicy: any
  _fRatio: any
  _scales: any[]
  _coordUnit: string
  _credit: any
  _ready: boolean
  _readyPromise: any
  _options: any
  constructor(options) {
    const { appendForwardSlash, Credit, defaultValue, defined, DeveloperError, Event, Resource, when, Math } = Cesium
    options = defaultValue(options, {})
    const { url } = options
    if (!defined(url)) {
      throw new DeveloperError('options.url is required.')
    }
    const rootNodeUrlRealspace3D = url.substring(0, url.indexOf('datas'))
    this.tablename = url.substring(0, url.indexOf('datas/') + 6, url.length)
    const that = this
    const dbPromise = new IndexedDBScheduler({
      name: rootNodeUrlRealspace3D + this.tablename
    })
    ;(dbPromise as any).then(e => {
      that._indexedDBScheduler = e
    })
    this._indexedDBSetting = {
      isOpen: false,
      clear: () => {
        that._indexedDBScheduler.clear(that.tablename)
      }
    }
    this.isSci = false
    this.isTileMap = false
    const forwardSlashUrl = appendForwardSlash(url)
    if (forwardSlashUrl.indexOf('rest/maps') > -1) {
      this.isTileMap = true
      this.layersID = options.layersID
    } else {
      if (!(forwardSlashUrl.indexOf('rest/realspace') > -1)) {
        throw new DeveloperError('The url type is not supported!')
      }
      this.isSci = true
    }
    this._url = forwardSlashUrl
    this._resource = (Resource as any).createIfNeeded(forwardSlashUrl)
    this._transparent = defaultValue(options.transparent, true)
    this._name = options.name || ''
    this._urlTemplate = undefined
    this._errorEvent = new Event()
    this._fileExtension = 'png'
    this._tileWidth = 256
    this._tileHeight = 256
    this._minimumLevel = defaultValue(options.minimumLevel, 0)
    this._maximumLevel = options.maximumLevel
    this._rectangle = undefined
    this._tilingScheme = undefined
    this._tileDiscardPolicy = options.tileDiscardPolicy
    this._fRatio = defaultValue(options.ratio, Math.DEGREES_PER_RADIAN / 6378137.0)
    this._scales = []
    this._coordUnit = 'DEGREE'
    let credit = defaultValue(options.credit, new Credit('MapQuest, SuperMap iServer Imagery'))
    if (typeof credit === 'string') {
      credit = new Credit(credit)
    }
    this._credit = credit
    this._ready = false
    this._readyPromise = when.defer()
    this._options = options
    init.call(this)
  }

  get url () {
    return this._url
  }

  get name () {
    return this._name
  }

  set name (val) {
    this._name = val
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
    if (!this._ready) {
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
    if (!this._ready) {
      throw new Cesium.DeveloperError('rectangle must not be called before the imagery provider is ready.')
    }
    return this._rectangle
  }

  get errorEvent () {
    return this._errorEvent
  }

  get ready () {
    return this._ready
  }

  get credit () {
    return this._credit
  }

  get hasAlphaChannel () {
    return true
  }

  get readyPromise () {
    return this._readyPromise
  }

  get ratio () {
    return this._fRatio
  }

  set ratio (val) {
    this._fRatio = val
  }

  get tileDiscardPolicy () {
    return this._tileDiscardPolicy
  }

  getTileCredits (x, y, level) {
    if (!this.ready) {
      throw new Cesium.DeveloperError('getTileCredits must not be called before the imagery provider is ready.')
    }
    return undefined
  }

  requestImage (x, y, level, request) {
    const { defined, DeveloperError, ImageryProvider, when } = Cesium
    if (!this.ready) {
      throw new DeveloperError('requestImage must not be called before the imagery provider is ready.')
    }

    const url = buildImageResource.call(this, x, y, level)
    const resource = this._resource.getDerivedResource({
      url: url,
      request: request
    })
    const that: any = this
    if (this._indexedDBSetting.isOpen) {
      if (defined(this._indexedDBScheduler)) {
        const promise = this._indexedDBScheduler.getElementFromDB(this.tablename, url)
        return defined(promise)
          ? when(
            promise,
            value => {
              if (defined(value)) {
                const image = new Image()
                image.src = value
                return image
              }
              return ImageryProvider.loadImage(that, resource)
            },
            e => {
              return ImageryProvider.loadImage(that, resource)
            }
          )
          : ImageryProvider.loadImage(that, resource)
      }
    }
    return ImageryProvider.loadImage(this as any, resource)
  }

  pickFeatures () {
    //
  }
}

let previousError: any = {}
const ScaleTexts = [
  '1.690163571602655E-9',
  '3.3803271432053056E-9',
  '6.760654286410611E-9',
  '1.3521308572821242E-8',
  '2.7042617145642484E-8',
  '5.408523429128511E-8',
  '1.0817046858256998E-7',
  '2.1634093716513974E-7',
  '4.3268187433028044E-7',
  '8.653637486605571E-7',
  '1.7307274973211203E-6',
  '3.4614549946422405E-6',
  '6.9229099892844565E-6',
  '1.3845819978568952E-5',
  '2.7691639957137904E-5',
  '5.53832799142758E-5',
  '1.107665598285516E-4',
  '2.215331196571032E-4',
  '4.430662393142064E-4',
  '8.861324786284128E-4',
  '1.772264957256826E-3',
  '3.544529914513652E-3'
]
const Scales = [
  1.690163571602655e-9,
  3.3803271432053056e-9,
  6.760654286410611e-9,
  1.3521308572821242e-8,
  2.7042617145642484e-8,
  5.408523429128511e-8,
  1.0817046858256998e-7,
  2.1634093716513974e-7,
  4.3268187433028044e-7,
  8.653637486605571e-7,
  0.0000017307274973211203,
  0.0000034614549946422405,
  0.0000069229099892844565,
  0.000013845819978568952,
  0.000027691639957137904,
  0.0000553832799142758,
  0.0001107665598285516,
  0.0002215331196571032,
  0.0004430662393142064,
  0.0008861324786284128,
  0.001772264957256826,
  0.003544529914513652
]

function buildImageResource (x, y, level) {
  let url
  if (this.isTileMap) {
    if (this._coordUnit === 'DEGREE') {
      const scaleText = ScaleTexts[level + 1] || ScaleTexts[level]
      url = this._urlTemplate
        .replace('{x}', x)
        .replace('{y}', y)
        .replace('{scale}', scaleText)
    } else if (this._coordUnit === 'METER') {
      const scaleText = ScaleTexts[level]
      url = this._urlTemplate
        .replace('{x}', x)
        .replace('{y}', y)
        .replace('{scale}', scaleText)
    }
  } else {
    url = this._urlTemplate
      .replace('{x}', x)
      .replace('{y}', y)
      .replace('{level}', level)
      .replace('{fileExtension}', this._fileExtension)
  }
  return url
}

function init () {
  const { Resource, when } = Cesium
  if (this.isTileMap) {
    const promise = Resource.fetchJsonp({
      url: this._options.url + '.jsonp',
      queryParameters: {
        f: 'json'
      }
    })
    when(promise, onFulfilledTileMap.bind(this), onRejected.bind(this))
  } else {
    // r(c.CREDENTIAL) && (o = c.addToken(o)),
    when(
      Resource.fetchText({
        url: this.url + 'config'
      }),
      onFulfilledRest3D.bind(this),
      onRejected.bind(this)
    )
  }
}
function getMaximumLevelbyScale (scale) {
  for (let t = Scales.length; t--;) {
    if (scale[t] <= scale) {
      return t
    }
  }
}

function onFulfilledRest3D (xmlText) {
  const options = parseConfigFromXmlText.call(this, xmlText)
  const { defaultValue, defined, GeographicTilingScheme, Math, Rectangle } = Cesium
  this._fileExtension = defaultValue(options.fileExtentName, 'png')
  this._tileWidth = defaultValue(options.imageSizeWidth, 256)
  this._tileHeight = defaultValue(options.imageSizeHeight, 256)
  const levels = options.levels
  const length = levels.length
  this._minimumLevel = defaultValue(levels[0], 0)
  this._maximumLevel = defaultValue(levels[length - 1], length - 1)
  if (!defined(this._tilingScheme)) {
    this._tilingScheme = new GeographicTilingScheme({
      ellipsoid: this._options.ellipsoid
    })
  }
  if (!defined(this._rectangle)) {
    if (options.left && options.right && options.top && options.bottom) {
      const left = Math.toRadians(options.left)
      const right = Math.toRadians(options.right)
      const bottom = Math.toRadians(options.bottom)
      const top = Math.toRadians(options.top)
      this._rectangle = new Rectangle(left, bottom, right, top)
    }
  }
  const tilingScheme = this._tilingScheme
  this._rectangle.west < tilingScheme.rectangle.west && (this._rectangle.west = tilingScheme.rectangle.west)
  this._rectangle.east > tilingScheme.rectangle.east && (this._rectangle.east = tilingScheme.rectangle.east)
  this._rectangle.south < tilingScheme.rectangle.south && (this._rectangle.south = tilingScheme.rectangle.south)
  this._rectangle.north > tilingScheme.rectangle.north && (this._rectangle.north = tilingScheme.rectangle.north)

  const swTile = tilingScheme.positionToTileXY(Rectangle.southwest(this._rectangle), this._minimumLevel)
  const neTile = tilingScheme.positionToTileXY(Rectangle.northeast(this._rectangle), this._minimumLevel)
  const tileCount = (window.Math.abs(neTile.x - swTile.x) + 1) * (window.Math.abs(neTile.y - swTile.y) + 1)
  tileCount > 4 && (this._minimumLevel = 0)
  this._tilingScheme = tilingScheme
  this._urlTemplate = this._url + 'data/index/{y}/{x}.{fileExtension}?level={level}'
  this._ready = true
  this._readyPromise.resolve(true)
}

function parseConfigFromXmlText (xmlText) {
  const domParser = new DOMParser()
  xmlText = domParser.parseFromString(xmlText, 'application/xml')
  const namespaceURI = 'http://www.supermap.com/SuperMapCache/sci3d'
  const rootNode = xmlText.childNodes[0]
  // let version = queryNumericAttribute(rootNode, 'Version', namespaceURI)
  const levelsNode = queryFirstNode(rootNode, 'Levels', namespaceURI)
  const levelsNodes = queryNodes(levelsNode, 'Level', namespaceURI)
  const levels = []
  for (let i = 0; i < levelsNodes.length; i++) {
    levels.push(parseInt(levelsNodes[i].textContent, 10))
  }
  const boundsNode = queryFirstNode(rootNode, 'Bounds', namespaceURI)
  const left = queryNumericAttribute(boundsNode, 'Left', namespaceURI)
  const right = queryNumericAttribute(boundsNode, 'Right', namespaceURI)
  const top = queryNumericAttribute(boundsNode, 'Top', namespaceURI)
  const bottom = queryNumericAttribute(boundsNode, 'Bottom', namespaceURI)
  const fileExtentName = queryStringValue(rootNode, 'FileExtentName', namespaceURI)
  const cellWidth = queryNumericAttribute(rootNode, 'CellWidth', namespaceURI)
  const cellHeight = queryNumericAttribute(rootNode, 'CellHeight', namespaceURI)
  const cacheName = queryStringValue(rootNode, 'CacheName', namespaceURI)
  this._name = cacheName || ''
  return {
    left: left,
    right: right,
    top: top,
    bottom: bottom,
    fileExtentName: fileExtentName,
    levels: levels,
    imageSizeWidth: cellWidth,
    imageSizeHeight: cellHeight
  }
}
function queryStringValue (xmlNode, attribute, namespaceURI) {
  const node = queryFirstNode(xmlNode, attribute, namespaceURI)
  return Cesium.defined(node) ? node.textContent.trim() : undefined
}

function queryNumericAttribute (xmlNode, attribute, namespaceURI) {
  const node = queryFirstNode(xmlNode, attribute, namespaceURI)
  if (Cesium.defined(node)) {
    const number = parseFloat(node.textContent)
    return isNaN(number) ? undefined : number
  }
}
function queryFirstNode (xmlNode, attribute, namespaceURI) {
  if (Cesium.defined(xmlNode)) {
    const nodes = xmlNode.childNodes
    const length = nodes.length
    for (let i = 0; i < length; i++) {
      const node = nodes[i]
      if (node.localName === attribute && namespaceURI.indexOf(node.namespaceURI) !== -1) {
        return node
      }
    }
  }
}

function queryNodes (xmlNode, attribute, namespaceURI) {
  if (Cesium.defined(xmlNode)) {
    const nodes = []
    const nodeList = xmlNode.getElementsByTagNameNS('*', attribute)
    const length = nodeList.length
    for (let i = 0; i < length; i++) {
      const node = nodeList[i]
      node.localName === attribute && namespaceURI.indexOf(node.namespaceURI) !== -1 && nodes.push(node)
    }
    return nodes
  }
}

function onFulfilledTileMap (response) {
  const { Cartesian3, defaultValue, defined, GeographicTilingScheme, Math: CesiumMath, Rectangle, WebMercatorTilingScheme } = Cesium
  const coordUnit = response.prjCoordSys.coordUnit
  this._coordUnit = coordUnit
  const bounds = response.bounds
  const visibleScales = response.visibleScales
  if (defined(visibleScales) && visibleScales.length > 1 && defined(this._maximumLevel)) {
    const lastVisibleScale = visibleScales[visibleScales.length - 1]
    this._maximumLevel = getMaximumLevelbyScale(lastVisibleScale)
  }
  if (coordUnit === 'DEGREE') {
    this._tilingScheme = new GeographicTilingScheme()
    bounds.left = CesiumMath.clamp(bounds.left, -180, 180)
    bounds.bottom = CesiumMath.clamp(bounds.bottom, -90, 90)
    bounds.right = CesiumMath.clamp(bounds.right, -180, 180)
    bounds.top = CesiumMath.clamp(bounds.top, -90, 90)
    this._rectangle = Rectangle.fromDegrees(bounds.left, bounds.bottom, bounds.right, bounds.top)
    this._urlTemplate =
      this._url +
      'tileImage.png?transparent={transparent}&cacheEnabled=true&width=256&height=256&x={x}&y={y}&scale={scale}&redirect=false&overlapDisplayed=false&origin={"x":-180,"y":90}'
  } else {
    const pointLB = new Cartesian3(bounds.left, bounds.bottom, 0)
    pointLB.x = Math.max(-20037508.342789244, pointLB.x)
    pointLB.y = Math.max(-20037508.342789244, pointLB.y)
    const pointRT = new Cartesian3(bounds.right, bounds.top, 0)
    pointRT.x = Math.min(20037508.342789244, pointRT.x)
    pointRT.y = Math.min(20037508.342789244, pointRT.y)
    this._tilingScheme = new WebMercatorTilingScheme()
    const f = this._tilingScheme.projection.unproject(pointLB)
    const p = this._tilingScheme.projection.unproject(pointRT)
    this._rectangle = new Rectangle(f.longitude, f.latitude, p.longitude, p.latitude)
    this._urlTemplate =
      this._url +
      'tileImage.png?transparent={transparent}&cacheEnabled=true&width=256&height=256&x={x}&y={y}&scale={scale}&redirect=false&overlapDisplayed=false&origin={"x":-20037508.342789248 ,"y":20037508.342789095}'
  }
  this._urlTemplate = this._urlTemplate.replace('{transparent}', this._transparent)
  this.layersID && (this._urlTemplate = this._urlTemplate + '&layersID=' + this.layersID)
  this._rectangle || (this._rectangle = defaultValue(this._options.rectangle, this._tilingScheme.rectangle))
  this._ready = true
  this._readyPromise.resolve(true)
}

function onRejected () {
  const { TileProviderError, RuntimeError } = Cesium
  const message = 'An error occurred while accessing ' + this._url + '.'
  previousError = TileProviderError.handleError(
    previousError,
    this,
    this._errorEvent,
    message,
    undefined,
    undefined,
    undefined,
    init.bind(this)
  )
  this._readyPromise.reject(new RuntimeError(message))
}

export default SuperMapImageryProvider
