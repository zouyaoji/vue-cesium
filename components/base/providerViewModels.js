export const createDefaultImageryProviderViewModels = (Cesium, cesiumPath) => {
  var providerViewModels = []

  // localImage
  providerViewModels.push(
    new Cesium.ProviderViewModel({
      name: '本地图片',
      iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/bingAerial.png`,
      tooltip: '本地图片',
      creationFunction: () => {
        return new Cesium.SingleTileImageryProvider({
          url: `${cesiumPath}Assets/Textures/GlobalBkLayer.jpg`
        })
      }
    })
  )

  if (Cesium.defined(Cesium.SuperMapImageryProvider)) {
    providerViewModels.push(
      new Cesium.ProviderViewModel({
        name: '天地图全球影像地图服务',
        iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/bingAerial.png`,
        tooltip: '天地图全球影像地图服务',
        creationFunction: () => {
          return new Cesium.TiandituImageryProvider({
            credit: new Cesium.Credit(
              '天地图全球影像地图服务 \n 数据来源：国家地理信息公共服务平台 & 四川省测绘地理信息局'
            )
          })
        }
      })
    )

    providerViewModels.push(
      new Cesium.ProviderViewModel({
        name: '天地图全球矢量地图服务',
        iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/bingAerial.png`,
        tooltip: '天地图全球矢量地图服务',
        creationFunction: () => {
          return new Cesium.TiandituImageryProvider({
            credit: new Cesium.Credit(
              '天地图全球矢量地图服务 \n 数据来源：国家地理信息公共服务平台 & 四川省测绘地理信息局'
            ),
            mapStyle: Cesium.TiandituMapsStyle.VEC_C
          })
        }
      })
    )
  } else {
    providerViewModels.push(
      new Cesium.ProviderViewModel({
        name: '天地图全球影像服务',
        iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/bingAerial.png`,
        tooltip: '全球天地图影像服务',
        creationFunction: () => {
          return new Cesium.WebMapTileServiceImageryProvider({
            url: 'http://t0.tianditu.com/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles',
            layer: 'img',
            style: 'default',
            format: 'tiles',
            tileMatrixSetID: 'c',
            credit: new Cesium.Credit(
              '天地图全球影像服务。 \n 数据来源：国家地理信息公共服务平台 & 四川省测绘地理信息局'
            ),
            subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
            maximumLevel: 20,
            tilingScheme: new Cesium.GeographicTilingScheme(),
            tileMatrixLabels: [
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
          })
        }
      })
    )
  }

  providerViewModels.push(
    new Cesium.ProviderViewModel({
      name: '高德影像',
      iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/bingAerial.png`,
      tooltip: '高德影像',
      creationFunction: function () {
        return createAMapByUrl(Cesium)
      }
    })
  )

  providerViewModels.push(
    new Cesium.ProviderViewModel({
      name: '高德矢量',
      iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/bingAerial.png`,
      tooltip: '高德矢量',
      creationFunction: function () {
        return createAMapByUrl(Cesium, {
          url: 'http://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}'
        })
      }
    })
  )

  // providerViewModels.push(
  //   new Cesium.ProviderViewModel({
  //     name: '高德道路',
  //     iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/bingAerial.png`,
  //     tooltip: '高德道路',
  //     creationFunction: function () {
  //       return createAMapByUrl(Cesium, {
  //         url:
  //           'http://wprd04.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=8&ltype=11'
  //       })
  //     }
  //   })
  // )

  // providerViewModels.push(
  //   new Cesium.ProviderViewModel({
  //     name: '高德文字',
  //     iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/bingAerial.png`,
  //     tooltip: '高德文字',
  //     creationFunction: function () {
  //       return createAMapByUrl(Cesium, {
  //         url:
  //           'http://wprd04.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=8&ltype=12'
  //       })
  //     }
  //   })
  // )

  providerViewModels.push(
    new Cesium.ProviderViewModel({
      name: '百度地图服务',
      iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/bingAerial.png`,
      tooltip: '百度地图服务',
      creationFunction: function () {
        return new BDImageryProvider()
      }
    })
  )

  providerViewModels.push(
    new Cesium.ProviderViewModel({
      name: 'Bing Maps Aerial',
      iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/bingAerial.png`,
      tooltip: 'Bing Maps aerial imagery \nhttp://www.bing.com/maps',
      creationFunction: function () {
        return new Cesium.BingMapsImageryProvider({
          url: 'https://dev.virtualearth.net',
          mapStyle: Cesium.BingMapsStyle.AERIAL
        })
      }
    })
  )

  providerViewModels.push(
    new Cesium.ProviderViewModel({
      name: 'Bing Maps Aerial with Labels',
      iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/bingAerialLabels.png`,
      tooltip: 'Bing Maps aerial imagery with label overlays \nhttp://www.bing.com/maps',
      creationFunction: function () {
        return new Cesium.BingMapsImageryProvider({
          url: 'https://dev.virtualearth.net',
          mapStyle: Cesium.BingMapsStyle.AERIAL_WITH_LABELS
        })
      }
    })
  )

  providerViewModels.push(
    new Cesium.ProviderViewModel({
      name: 'Bing Maps Roads',
      iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/bingRoads.png`,
      tooltip: 'Bing Maps standard road maps\nhttp://www.bing.com/maps',
      creationFunction: function () {
        return new Cesium.BingMapsImageryProvider({
          url: 'https://dev.virtualearth.net',
          mapStyle: Cesium.BingMapsStyle.ROAD
        })
      }
    })
  )

  providerViewModels.push(
    new Cesium.ProviderViewModel({
      name: 'Mapbox Satellite',
      tooltip: 'Mapbox satellite imagery https://www.mapbox.com/maps/',
      iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/mapboxSatellite.png`,
      creationFunction: function () {
        return new Cesium.MapboxImageryProvider({
          mapId: 'mapbox.satellite'
        })
      }
    })
  )

  providerViewModels.push(
    new Cesium.ProviderViewModel({
      name: 'Mapbox Streets',
      tooltip: 'Mapbox streets imagery https://www.mapbox.com/maps/',
      iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/mapboxTerrain.png`,
      creationFunction: function () {
        return new Cesium.MapboxImageryProvider({
          mapId: 'mapbox.streets'
        })
      }
    })
  )

  providerViewModels.push(
    new Cesium.ProviderViewModel({
      name: 'ESRI World Imagery',
      iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/esriWorldImagery.png`,
      tooltip: `\
World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution \
satellite imagery worldwide.  The map includes NASA Blue Marble: Next Generation 500m resolution imagery at small scales \
(above 1:1,000,000), i-cubed 15m eSAT imagery at medium-to-large scales (down to 1:70,000) for the world, and USGS 15m Landsat \
imagery for Antarctica. The map features 0.3m resolution imagery in the continental United States and 0.6m resolution imagery in \
parts of Western Europe from DigitalGlobe. In other parts of the world, 1 meter resolution imagery is available from GeoEye IKONOS, \
i-cubed Nationwide Prime, Getmapping, AeroGRID, IGN Spain, and IGP Portugal.  Additionally, imagery at different resolutions has been \
contributed by the GIS User Community.\nhttp://www.esri.com`,
      creationFunction: function () {
        return new Cesium.ArcGisMapServerImageryProvider({
          url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer',
          enablePickFeatures: false
        })
      }
    })
  )

  providerViewModels.push(
    new Cesium.ProviderViewModel({
      name: 'ESRI World Street Map',
      iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/esriWorldStreetMap.png`,
      tooltip: `\
This worldwide street map presents highway-level data for the world. Street-level data includes the United States; much of \
Canada; Japan; most countries in Europe; Australia and New Zealand; India; parts of South America including Argentina, Brazil, \
Chile, Colombia, and Venezuela; Ghana; and parts of southern Africa including Botswana, Lesotho, Namibia, South Africa, and Swaziland.\n\
http://www.esri.com`,
      creationFunction: function () {
        return new Cesium.ArcGisMapServerImageryProvider({
          url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer',
          enablePickFeatures: false
        })
      }
    })
  )

  providerViewModels.push(
    new Cesium.ProviderViewModel({
      name: 'ESRI National Geographic',
      iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/esriNationalGeographic.png`,
      tooltip: `\
This web map contains the National Geographic World Map service. This map service is designed to be used as a general reference map \
for informational and educational purposes as well as a basemap by GIS professionals and other users for creating web maps and web \
mapping applications.\nhttp://www.esri.com`,
      creationFunction: function () {
        return new Cesium.ArcGisMapServerImageryProvider({
          url: 'https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/',
          enablePickFeatures: false
        })
      }
    })
  )

  providerViewModels.push(
    new Cesium.ProviderViewModel({
      name: 'Open\u00adStreet\u00adMap',
      iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/openStreetMap.png`,
      tooltip: `OpenStreetMap (OSM) is a collaborative project to create a free editable map \
of the world.\nhttp://www.openstreetmap.org`,
      creationFunction: function () {
        return Cesium.createOpenStreetMapImageryProvider({
          url: 'https://a.tile.openstreetmap.org/'
        })
      }
    })
  )

  providerViewModels.push(
    new Cesium.ProviderViewModel({
      name: 'Stamen Watercolor',
      iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/stamenWatercolor.png`,
      tooltip: `Reminiscent of hand drawn maps, Stamen watercolor maps apply raster effect \
area washes and organic edges over a paper texture to add warm pop to any map.\nhttp://maps.stamen.com`,
      creationFunction: function () {
        return Cesium.createOpenStreetMapImageryProvider({
          url: 'https://stamen-tiles.a.ssl.fastly.net/watercolor/',
          credit: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.'
        })
      }
    })
  )

  providerViewModels.push(
    new Cesium.ProviderViewModel({
      name: 'Stamen Toner',
      iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/stamenToner.png`,
      tooltip: 'A high contrast black and white map.\nhttp://maps.stamen.com',
      creationFunction: function () {
        return Cesium.createOpenStreetMapImageryProvider({
          url: 'https://stamen-tiles.a.ssl.fastly.net/toner/',
          credit: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.'
        })
      }
    })
  )

  providerViewModels.push(
    new Cesium.ProviderViewModel({
      name: 'The Black Marble',
      iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/blackMarble.png`,
      tooltip: `The lights of cities and villages trace the outlines of civilization in this global view of the \
Earth at night as seen by NASA/NOAA's Suomi NPP satellite.`,
      creationFunction: function () {
        return Cesium.createTileMapServiceImageryProvider({
          url: 'https://cesiumjs.org/blackmarble',
          flipXY: true,
          credit: 'Black Marble imagery courtesy NASA Earth Observatory'
        })
      }
    })
  )

  providerViewModels.push(
    new Cesium.ProviderViewModel({
      name: 'Natural Earth\u00a0II',
      iconUrl: `${cesiumPath}Widgets/Images/ImageryProviders/naturalEarthII.png`,
      tooltip: 'Natural Earth II, darkened for contrast.\nhttp://www.naturalearthdata.com/',
      creationFunction: function () {
        return Cesium.createTileMapServiceImageryProvider({
          url: `${cesiumPath}Assets/Textures/NaturalEarthII`
        })
      }
    })
  )

  function BDImageryProvider (options) {
    this._url = 'http://online1.map.bdimg.com/onlinelabel/?qt=tile'

    this._tileWidth = 256
    this._tileHeight = 256
    this._maximumLevel = 18

    var rectangleSouthwestInMeters = new Cesium.Cartesian2(-25165824, -25165824)
    var rectangleNortheastInMeters = new Cesium.Cartesian2(25165824, 25165824)
    this._tilingScheme = new Cesium.WebMercatorTilingScheme({
      rectangleSouthwestInMeters: rectangleSouthwestInMeters,
      rectangleNortheastInMeters: rectangleNortheastInMeters
    })

    // var rectangleSouthwestInMeters = new Cesium.Cartesian2(-25165824, -25165824);
    // var rectangleNortheastInMeters = new Cesium.Cartesian2(25165824, 25165824);
    // this._tilingScheme = new Cesium.WebMercatorTilingScheme();

    this._credit = undefined
    this._rectangle = this._tilingScheme.rectangle
    this._ready = true
  }

  function buildImageUrl (imageryProvider, x, y, level) {
    var url = imageryProvider._url + '&x={x}&y={y}&z={z}'
    var tileW = imageryProvider._tilingScheme.getNumberOfXTilesAtLevel(level)
    var tileH = imageryProvider._tilingScheme.getNumberOfYTilesAtLevel(level)

    url = url
      .replace('{x}', x - tileW / 2)
      .replace('{y}', tileH / 2 - y)
      .replace('{z}', level)

    return url
  }

  Cesium.defineProperties(BDImageryProvider.prototype, {
    url: {
      get: function () {
        return this._url
      }
    },

    token: {
      get: function () {
        return this._token
      }
    },

    proxy: {
      get: function () {
        return this._proxy
      }
    },

    tileWidth: {
      get: function () {
        // >>includeStart('debug', pragmas.debug);
        if (!this._ready) {
          throw new Cesium.DeveloperError(
            'tileWidth must not be called before the imagery provider is ready.'
          )
        }
        // >>includeEnd('debug');

        return this._tileWidth
      }
    },

    tileHeight: {
      get: function () {
        // >>includeStart('debug', pragmas.debug);
        if (!this._ready) {
          throw new Cesium.DeveloperError(
            'tileHeight must not be called before the imagery provider is ready.'
          )
        }
        // >>includeEnd('debug');

        return this._tileHeight
      }
    },

    maximumLevel: {
      get: function () {
        // >>includeStart('debug', pragmas.debug);
        if (!this._ready) {
          throw new Cesium.DeveloperError(
            'maximumLevel must not be called before the imagery provider is ready.'
          )
        }
        // >>includeEnd('debug');

        return this._maximumLevel
      }
    },

    minimumLevel: {
      get: function () {
        // >>includeStart('debug', pragmas.debug);
        if (!this._ready) {
          throw new Cesium.DeveloperError(
            'minimumLevel must not be called before the imagery provider is ready.'
          )
        }
        // >>includeEnd('debug');

        return 0
      }
    },

    tilingScheme: {
      get: function () {
        // >>includeStart('debug', pragmas.debug);
        if (!this._ready) {
          throw new Cesium.DeveloperError(
            'tilingScheme must not be called before the imagery provider is ready.'
          )
        }
        // >>includeEnd('debug');

        return this._tilingScheme
      }
    },

    rectangle: {
      get: function () {
        // >>includeStart('debug', pragmas.debug);
        if (!this._ready) {
          throw new Cesium.DeveloperError(
            'rectangle must not be called before the imagery provider is ready.'
          )
        }
        // >>includeEnd('debug');

        return this._rectangle
      }
    },

    tileDiscardPolicy: {
      get: function () {
        // >>includeStart('debug', pragmas.debug);
        if (!this._ready) {
          throw new Cesium.DeveloperError(
            'tileDiscardPolicy must not be called before the imagery provider is ready.'
          )
        }
        // >>includeEnd('debug');

        return this._tileDiscardPolicy
      }
    },

    errorEvent: {
      get: function () {
        return this._errorEvent
      }
    },

    ready: {
      get: function () {
        return this._ready
      }
    },

    readyPromise: {
      get: function () {
        return this._readyPromise.promise
      }
    },

    credit: {
      get: function () {
        return this._credit
      }
    },

    usingPrecachedTiles: {
      get: function () {
        return this._useTiles
      }
    },

    hasAlphaChannel: {
      get: function () {
        return true
      }
    },

    layers: {
      get: function () {
        return this._layers
      }
    }
  })

  BDImageryProvider.prototype.getTileCredits = function (x, y, level) {
    return undefined
  }

  BDImageryProvider.prototype.requestImage = function (x, y, level) {
    if (!this._ready) {
      throw new Cesium.DeveloperError(
        'requestImage must not be called before the imagery provider is ready.'
      )
    }

    var url = buildImageUrl(this, x, y, level)
    return Cesium.ImageryProvider.loadImage(this, url)
  }

  return providerViewModels
}

// Terrain
export const createDefaultTerrainProviderViewModels = (Cesium, cesiumPath) => {
  var providerViewModels = []
  providerViewModels.push(
    new Cesium.ProviderViewModel({
      name: 'WGS84 Ellipsoid',
      iconUrl: `${cesiumPath}Widgets/Images/TerrainProviders/Ellipsoid.png`,
      tooltip: 'WGS84 standard ellipsoid, also known as EPSG:4326',
      creationFunction: function () {
        return new Cesium.EllipsoidTerrainProvider()
      }
    })
  )

  providerViewModels.push(
    new Cesium.ProviderViewModel({
      name: 'STK World Terrain meshes',
      iconUrl: `${cesiumPath}Widgets/Images/TerrainProviders/STK.png`,
      tooltip: 'High-resolution, mesh-based terrain for the entire globe. Free for use on the Internet. Closed-network options are available.\nhttp://www.agi.com',
      creationFunction: function () {
        return new Cesium.CesiumTerrainProvider({
          url: 'https://assets.agi.com/stk-terrain/v1/tilesets/world/tiles',
          requestWaterMask: true,
          requestVertexNormals: true
        })
      }
    })
  )

  return providerViewModels
}

function createAMapByUrl (Cesium, options) {
  options = Cesium.defaultValue(options, {})

  var templateUrl = Cesium.defaultValue(
    options.url,
    'http://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}'
  )

  // var trailingSlashRegex = /\/$/
  var defaultCredit = new Cesium.Credit('AMap')

  var tilingScheme = new Cesium.WebMercatorTilingScheme({
    ellipsoid: options.ellipsoid
  })

  var tileWidth = 256
  var tileHeight = 256

  var minimumLevel = Cesium.defaultValue(options.minimumLevel, 0)
  var maximumLevel = Cesium.defaultValue(options.minimumLevel, 18)

  var rectangle = Cesium.defaultValue(options.rectangle, tilingScheme.rectangle)

  // Check the number of tiles at the minimum level.  If it's more than four,
  // throw an exception, because starting at the higher minimum
  // level will cause too many tiles to be downloaded and rendered.
  var swTile = tilingScheme.positionToTileXY(
    Cesium.Rectangle.southwest(rectangle),
    minimumLevel
  )
  var neTile = tilingScheme.positionToTileXY(
    Cesium.Rectangle.northeast(rectangle),
    minimumLevel
  )
  var tileCount =
    (Math.abs(neTile.x - swTile.x) + 1) * (Math.abs(neTile.y - swTile.y) + 1)
  // >>includeStart('debug', pragmas.debug);
  if (tileCount > 4) {
    throw new Cesium.DeveloperError(
      'The rectangle and minimumLevel indicate that there are ' +
      tileCount +
      ' tiles at the minimum level. Imagery providers with more than four tiles at the minimum level are not supported.'
    )
  }
  // >>includeEnd('debug');

  var credit = Cesium.defaultValue(options.credit, defaultCredit)
  if (typeof credit === 'string') {
    credit = new Cesium.Credit(credit)
  }

  return new Cesium.UrlTemplateImageryProvider({
    url: templateUrl,
    proxy: options.proxy,
    credit: credit,
    tilingScheme: tilingScheme,
    tileWidth: tileWidth,
    tileHeight: tileHeight,
    minimumLevel: minimumLevel,
    maximumLevel: maximumLevel,
    rectangle: rectangle
  })
}
