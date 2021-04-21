import { VcComponentPublicInstance, ReadyObj } from '@vue-cesium/utils/types'
import { mount, config } from '@vue/test-utils'
import VcViewer from '@vue-cesium/viewer'
import VcLayerImagery from '@vue-cesium/imagery-layer'
import {
  VcProviderImageryArcgis,
  VcProviderImageryBaidumap,
  VcProviderImageryBingmaps,
  VcProviderImageryGrid,
  VcProviderImageryIon,
  VcProviderImageryMapbox,
  VcProviderImageryOsm,
  VcProviderImagerySingletile,
  VcProviderImagerySupermap,
  VcProviderImageryTianditu,
  VcProviderImageryTileCoordinates,
  VcProviderImageryTilemap,
  VcProviderImageryTiledcache,
  VcProviderImageryUrltemplate,
  VcProviderImageryWms,
  VcProviderImageryWmts,

  VcProviderTerrainCesium,
  VcProviderTerrainArcgis,
  VcProviderTerrainTianditu
} from '../index'

const option = {
  cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js',
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5Y2U0ZTk2Ni1jNzdkLTQ3OWYtYjVmYS0yMGM3YTk3NjgzMmUiLCJpZCI6Njk5Nywic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0ODA1MTc0OH0.Csy6yyAnv6JSBppH0Ou3ahshqcHFEhP27iOz5gjQMEo'
}

config.global.config.globalProperties = {}
config.global.config.globalProperties.$VueCesium = option

const arcgisApp = {
  components: {
    VcViewer,
    VcLayerImagery,
    VcProviderImageryArcgis
  },
  template: `
    <div class="test-viewer">
      <vc-viewer>
        <vc-layer-imagery>
          <vc-provider-imagery-arcgis ref="provider"></vc-provider-imagery-arcgis>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  `
}

describe('VcProviderImageryArcgis', () => {
  test('render test', async () => {
    const wrapper = mount(arcgisApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: ReadyObj = await testVm.createPromise
    let provider = readyObj.cesiumObject as Cesium.ArcGisMapServerImageryProvider
    expect(provider instanceof Cesium.ArcGisMapServerImageryProvider).toBe(true)
    expect(provider.url).toEqual('https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/')
    await provider.readyPromise
    expect(provider.ready).toBe(true)
    await testVm.unload()
    provider = testVm.getCesiumObject() as Cesium.ArcGisMapServerImageryProvider
    expect(provider).toBeUndefined()
    await testVm.load()
    provider = testVm.getCesiumObject() as Cesium.ArcGisMapServerImageryProvider
    expect(provider).toBeDefined()
  }, 10000)
})

const baiduApp = {
  components: {
    VcViewer,
    VcLayerImagery,
    VcProviderImageryBaidumap
  },
  template: `
    <div class="test-viewer">
      <vc-viewer>
        <vc-layer-imagery>
          <vc-provider-imagery-baidumap
          ref="provider"
          url="https://www.songluck.com/map/data/maptile-baidu-chengdu/{z}/{x}/{y}.png"
          :projectionTransforms="{ form: 'BD09', to: 'WGS84' }"
          >
          </vc-provider-imagery-baidumap>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  `
}

describe('VcProviderImageryBaidumap', () => {
  test('render test', async () => {
    const wrapper = mount(baiduApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: ReadyObj = await testVm.createPromise
    let provider = readyObj.cesiumObject
    expect(provider).toBeDefined()
    expect(provider.url).toEqual('https://www.songluck.com/map/data/maptile-baidu-chengdu/{z}/{x}/{y}.png/')
    await provider.readyPromise
    expect(provider.ready).toBe(true)
    await testVm.unload()
    provider = testVm.getCesiumObject()
    expect(provider).toBeUndefined()
    await testVm.load()
    provider = testVm.getCesiumObject()
    expect(provider).toBeDefined()
  }, 10000)
})

const bingmapsApp = {
  components: {
    VcViewer,
    VcLayerImagery,
    VcProviderImageryBingmaps
  },
  template: `
    <div class="test-viewer">
      <vc-viewer>
        <vc-layer-imagery>
          <vc-provider-imagery-bingmaps
          ref="provider"
          bmKey="AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-"
          mapStyle="Aerial"
        ></vc-provider-imagery-bingmaps>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  `
}

describe('VcProviderImageryBingmaps', () => {
  test('render test', async () => {
    const wrapper = mount(bingmapsApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: ReadyObj = await testVm.createPromise
    let provider = readyObj.cesiumObject as Cesium.BingMapsImageryProvider
    expect(provider).toBeDefined()
    expect(provider.url).toEqual('https://dev.virtualearth.net/')
    await provider.readyPromise
    expect(provider.ready).toBe(true)
    await testVm.unload()
    provider = testVm.getCesiumObject() as Cesium.BingMapsImageryProvider
    expect(provider).toBeUndefined()
    await testVm.load()
    provider = testVm.getCesiumObject() as Cesium.BingMapsImageryProvider
    expect(provider).toBeDefined()
  }, 10000)
})

const gridApp = {
  components: {
    VcViewer,
    VcLayerImagery,
    VcProviderImageryGrid
  },
  template: `
    <div class="test-viewer">
      <vc-viewer>
        <vc-layer-imagery>
          <vc-provider-imagery-grid ref="provider"></vc-provider-imagery-grid>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  `
}

describe('VcProviderImageryGrid', () => {
  test('render test', async () => {
    const wrapper = mount(gridApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: ReadyObj = await testVm.createPromise
    let provider = readyObj.cesiumObject as Cesium.GridImageryProvider
    expect(provider).toBeDefined()
    await provider.readyPromise
    expect(provider.ready).toBe(true)
    await testVm.unload()
    provider = testVm.getCesiumObject() as Cesium.GridImageryProvider
    expect(provider).toBeUndefined()
    await testVm.load()
    provider = testVm.getCesiumObject() as Cesium.GridImageryProvider
    expect(provider).toBeDefined()
  }, 10000)
})

const cesiumIonApp = {
  components: {
    VcViewer,
    VcLayerImagery,
    VcProviderImageryIon
  },
  template: `
    <div class="test-viewer">
      <vc-viewer>
        <vc-layer-imagery>
          <vc-provider-imagery-ion
          ref="provider"
          :assetId="4"
          accessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5Y2U0ZTk2Ni1jNzdkLTQ3OWYtYjVmYS0yMGM3YTk3NjgzMmUiLCJpZCI6Njk5Nywic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0ODA1MTc0OH0.Csy6yyAnv6JSBppH0Ou3ahshqcHFEhP27iOz5gjQMEo"
        ></vc-provider-imagery-ion>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  `
}

describe('VcProviderImageryIon', () => {
  test('render test', async () => {
    const wrapper = mount(cesiumIonApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: ReadyObj = await testVm.createPromise
    let provider = readyObj.cesiumObject as Cesium.IonImageryProvider
    expect(provider).toBeDefined()
    await provider.readyPromise
    expect(provider.ready).toBe(true)
    await testVm.unload()
    provider = testVm.getCesiumObject() as Cesium.IonImageryProvider
    expect(provider).toBeUndefined()
    await testVm.load()
    provider = testVm.getCesiumObject() as Cesium.IonImageryProvider
    expect(provider).toBeDefined()
  }, 10000)
})

const mapboxApp = {
  components: {
    VcViewer,
    VcLayerImagery,
    VcProviderImageryMapbox
  },
  template: `
    <div class="test-viewer">
      <vc-viewer>
        <vc-layer-imagery>
          <vc-provider-imagery-mapbox
            ref="provider"
            url="https://api.mapbox.com/styles/v1"
            username="zouyaoji"
            styleId="ckd49hwdn0u641irz36komsmt"
            accessToken="pk.eyJ1Ijoiem91eWFvamkiLCJhIjoiY2tjdjlha3pzMDIxeDJ1bWxhaWNnaGNkdSJ9.WaGuuQT8YcWTPx3KNQfF7A"
          ></vc-provider-imagery-mapbox>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  `
}

describe('VcProviderImageryMapbox', () => {
  test('render test', async () => {
    const wrapper = mount(mapboxApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: ReadyObj = await testVm.createPromise
    let provider = readyObj.cesiumObject as Cesium.MapboxStyleImageryProvider
    expect(provider).toBeDefined()
    expect(provider.url).toEqual(
      'https://api.mapbox.com/styles/v1/zouyaoji/ckd49hwdn0u641irz36komsmt/tiles/512/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiem91eWFvamkiLCJhIjoiY2tjdjlha3pzMDIxeDJ1bWxhaWNnaGNkdSJ9.WaGuuQT8YcWTPx3KNQfF7A'
    )
    await provider.readyPromise
    expect(provider.ready).toBe(true)
    await testVm.unload()
    provider = testVm.getCesiumObject() as Cesium.MapboxStyleImageryProvider
    expect(provider).toBeUndefined()
    await testVm.load()
    provider = testVm.getCesiumObject() as Cesium.MapboxStyleImageryProvider
    expect(provider).toBeDefined()
  }, 10000)
})

const osmApp = {
  components: {
    VcViewer,
    VcLayerImagery,
    VcProviderImageryOsm
  },
  template: `
    <div class="test-viewer">
      <vc-viewer>
        <vc-layer-imagery>
          <vc-provider-imagery-osm ref="provider"></vc-provider-imagery-osm>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  `
}

describe('VcProviderImageryOsm', () => {
  test('render test', async () => {
    const wrapper = mount(osmApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: ReadyObj = await testVm.createPromise
    let provider = readyObj.cesiumObject as Cesium.OpenStreetMapImageryProvider
    expect(provider).toBeDefined()
    expect(provider.url).toEqual('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png')
    await provider.readyPromise
    expect(provider.ready).toBe(true)
    await testVm.unload()
    provider = testVm.getCesiumObject() as Cesium.OpenStreetMapImageryProvider
    expect(provider).toBeUndefined()
    await testVm.load()
    provider = testVm.getCesiumObject() as Cesium.OpenStreetMapImageryProvider
    expect(provider).toBeDefined()
  }, 10000)
})

const singletileApp = {
  components: {
    VcViewer,
    VcLayerImagery,
    VcProviderImagerySingletile
  },
  template: `
    <div class="test-viewer">
      <vc-viewer>
        <vc-layer-imagery>
          <vc-provider-imagery-singletile ref="provider" url="https://zouyaoji.top/vue-cesium/SampleData/images/worldimage.jpg"></vc-provider-imagery-singletile>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  `
}

describe('VcProviderImagerySingletile', () => {
  test('render test', async () => {
    const wrapper = mount(singletileApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: ReadyObj = await testVm.createPromise
    let provider = readyObj.cesiumObject as Cesium.SingleTileImageryProvider
    expect(provider).toBeDefined()
    expect(provider.url).toEqual('https://zouyaoji.top/vue-cesium/SampleData/images/worldimage.jpg')
    await provider.readyPromise
    expect(provider.ready).toBe(true)
    await testVm.unload()
    provider = testVm.getCesiumObject() as Cesium.SingleTileImageryProvider
    expect(provider).toBeUndefined()
    await testVm.load()
    provider = testVm.getCesiumObject() as Cesium.SingleTileImageryProvider
    expect(provider).toBeDefined()
  }, 10000)
})

const supermapApp = {
  components: {
    VcViewer,
    VcLayerImagery,
    VcProviderImagerySupermap
  },
  template: `
    <div class="test-viewer">
      <vc-viewer>
        <vc-layer-imagery>
          <vc-provider-imagery-supermap
            ref="provider"
            url="https://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult"
          ></vc-provider-imagery-supermap>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  `
}

describe('VcProviderImagerySupermap', () => {
  test('render test', async () => {
    const wrapper = mount(supermapApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: ReadyObj = await testVm.createPromise
    let provider = readyObj.cesiumObject
    expect(provider).toBeDefined()
    expect(provider.url).toEqual('https://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult/')
    await provider.readyPromise
    expect(provider.ready).toBe(true)
    await testVm.unload()
    provider = testVm.getCesiumObject()
    expect(provider).toBeUndefined()
    await testVm.load()
    provider = testVm.getCesiumObject()
    expect(provider).toBeDefined()
  }, 10000)
})

const tiandituApp = {
  components: {
    VcViewer,
    VcLayerImagery,
    VcProviderImageryTianditu
  },
  template: `
    <div class="test-viewer">
      <vc-viewer>
        <vc-layer-imagery>
          <vc-provider-imagery-tianditu ref="provider" mapStyle="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  `
}

describe('VcProviderImageryTianditu', () => {
  test('render test', async () => {
    const wrapper = mount(tiandituApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: ReadyObj = await testVm.createPromise
    let provider = readyObj.cesiumObject
    expect(provider).toBeDefined()
    expect(provider.url).toEqual('https://{s}.tianditu.gov.cn/cva_c/wmts')
    await provider.readyPromise
    expect(provider.ready).toBe(true)
    await testVm.unload()
    provider = testVm.getCesiumObject()
    expect(provider).toBeUndefined()
    await testVm.load()
    provider = testVm.getCesiumObject()
    expect(provider).toBeDefined()
  }, 10000)
})

const tileCoordinatesApp = {
  components: {
    VcViewer,
    VcLayerImagery,
    VcProviderImageryTileCoordinates
  },
  template: `
    <div class="test-viewer">
      <vc-viewer>
        <vc-layer-imagery>
          <vc-provider-imagery-tile-coordinates ref="provider"></vc-provider-imagery-tile-coordinates>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  `
}

describe('VcProviderImageryTileCoordinates', () => {
  test('render test', async () => {
    const wrapper = mount(tileCoordinatesApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: ReadyObj = await testVm.createPromise
    let provider = readyObj.cesiumObject as Cesium.TileCoordinatesImageryProvider
    expect(provider).toBeDefined()
    await provider.readyPromise
    expect(provider.ready).toBe(true)
    await testVm.unload()
    provider = testVm.getCesiumObject() as Cesium.TileCoordinatesImageryProvider
    expect(provider).toBeUndefined()
    await testVm.load()
    provider = testVm.getCesiumObject() as Cesium.TileCoordinatesImageryProvider
    expect(provider).toBeDefined()
  }, 10000)
})

const tileMapApp = {
  components: {
    VcViewer,
    VcLayerImagery,
    VcProviderImageryTilemap
  },
  template: `
    <div class="test-viewer">
      <vc-viewer>
        <vc-layer-imagery>
          <vc-provider-imagery-tilemap
            ref="provider"
            url="https://zouyaoji.top/vue-cesium/SampleData/images/cesium_maptiler/Cesium_Logo_Color"
            :rectangle="[-120, 20, -60, 40]"
            :maximumLevel="4"
          ></vc-provider-imagery-tilemap>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  `
}

describe('VcProviderImageryTilemap', () => {
  test('render test', async () => {
    const wrapper = mount(tileMapApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: ReadyObj = await testVm.createPromise
    let provider = readyObj.cesiumObject as Cesium.TileMapServiceImageryProvider
    expect(provider).toBeDefined()
    await provider.readyPromise
    expect(provider.url).toEqual('https://zouyaoji.top/vue-cesium/SampleData/images/cesium_maptiler/Cesium_Logo_Color/{z}/{x}/{reverseY}.png')
    expect(provider.ready).toBe(true)
    await testVm.unload()
    provider = testVm.getCesiumObject() as Cesium.TileMapServiceImageryProvider
    expect(provider).toBeUndefined()
    await testVm.load()
    provider = testVm.getCesiumObject() as Cesium.TileMapServiceImageryProvider
    expect(provider).toBeDefined()
  }, 10000)
})


const tiledCacheApp = {
  components: {
    VcViewer,
    VcLayerImagery,
    VcProviderImageryTiledcache
  },
  template: `
    <div class="test-viewer">
      <vc-viewer>
        <vc-layer-imagery>
          <vc-provider-imagery-tiledcache
            ref="provider"
            url="https://songluck.com/gis/TiledCacheService/TiledCacheServlet"
            dir="WhiteMap"
          ></vc-provider-imagery-tiledcache>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  `
}

describe('VcProviderImageryTiledcache', () => {
  test('render test', async () => {
    const wrapper = mount(tiledCacheApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: ReadyObj = await testVm.createPromise
    let provider = readyObj.cesiumObject
    expect(provider).toBeDefined()
    await provider.readyPromise
    expect(provider.url).toEqual('https://songluck.com/gis/TiledCacheService/TiledCacheServlet?dir=WhiteMap&scale={scale}&col={x}&row={y}&format=png')
    expect(provider.ready).toBe(true)
    await testVm.unload()
    provider = testVm.getCesiumObject()
    expect(provider).toBeUndefined()
    await testVm.load()
    provider = testVm.getCesiumObject()
    expect(provider).toBeDefined()
  }, 10000)
})


const urlTemplateApp = {
  components: {
    VcViewer,
    VcLayerImagery,
    VcProviderImageryUrltemplate
  },
  template: `
    <div class="test-viewer">
      <vc-viewer>
        <vc-layer-imagery>
          <vc-provider-imagery-urltemplate ref="provider"
            :projectionTransforms="{from: 'GCJ02', to: 'WGS84'}"
            url="https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}"
          ></vc-provider-imagery-urltemplate>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  `
}

describe('VcProviderImageryUrltemplate', () => {
  test('render test', async () => {
    const wrapper = mount(urlTemplateApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: ReadyObj = await testVm.createPromise
    let provider = readyObj.cesiumObject as Cesium.UrlTemplateImageryProvider
    expect(provider).toBeDefined()
    await provider.readyPromise
    expect(provider.url).toEqual('https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}')
    expect(provider.ready).toBe(true)
    await testVm.unload()
    provider = testVm.getCesiumObject() as Cesium.UrlTemplateImageryProvider
    expect(provider).toBeUndefined()
    await testVm.load()
    provider = testVm.getCesiumObject() as Cesium.UrlTemplateImageryProvider
    expect(provider).toBeDefined()
  }, 10000)
})

const wmsApp = {
  components: {
    VcViewer,
    VcLayerImagery,
    VcProviderImageryWms
  },
  template: `
    <div class="test-viewer">
      <vc-viewer>
        <vc-layer-imagery>
          <vc-provider-imagery-wms
            ref="provider"
            url="http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows"
            layers="Hydrography:bores"
            :parameters="{transparent: true, format: 'image/png'}"
          ></vc-provider-imagery-wms>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  `
}

describe('VcProviderImageryWms', () => {
  test('render test', async () => {
    const wrapper = mount(wmsApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: ReadyObj = await testVm.createPromise
    let provider = readyObj.cesiumObject as Cesium.WebMapServiceImageryProvider
    expect(provider).toBeDefined()
    await provider.readyPromise
    expect(provider.url).toEqual('http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows')
    expect(provider.ready).toBe(true)
    await testVm.unload()
    provider = testVm.getCesiumObject() as Cesium.WebMapServiceImageryProvider
    expect(provider).toBeUndefined()
    await testVm.load()
    provider = testVm.getCesiumObject() as Cesium.WebMapServiceImageryProvider
    expect(provider).toBeDefined()
  }, 10000)
})

const wmtsApp = {
  components: {
    VcViewer,
    VcLayerImagery,
    VcProviderImageryWmts
  },
  template: `
    <div class="test-viewer">
      <vc-viewer>
        <vc-layer-imagery>
          <vc-provider-imagery-wmts
            ref="provider"
            url="https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/WMTS/tile/1.0.0/World_Street_Map/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg"
            layer="World_Street_Map"
            format="image/jpeg"
            wmtsStyle="default"
            tileMatrixSetID="default028mm"
          ></vc-provider-imagery-wmts>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  `
}

describe('VcProviderImageryWmts', () => {
  test('render test', async () => {
    const wrapper = mount(wmtsApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: ReadyObj = await testVm.createPromise
    let provider = readyObj.cesiumObject as Cesium.WebMapTileServiceImageryProvider
    expect(provider).toBeDefined()
    await provider.readyPromise
    expect(provider.url).toEqual('https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/WMTS/tile/1.0.0/World_Street_Map/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg')
    expect(provider.ready).toBe(true)
    await testVm.unload()
    provider = testVm.getCesiumObject() as Cesium.WebMapTileServiceImageryProvider
    expect(provider).toBeUndefined()
    await testVm.load()
    provider = testVm.getCesiumObject() as Cesium.WebMapTileServiceImageryProvider
    expect(provider).toBeDefined()
  }, 10000)
})

const cesiumTerrainApp = {
  components: {
    VcViewer,
    VcProviderTerrainCesium
  },
  template: `
    <div class="test-viewer">
      <vc-viewer>
        <vc-provider-terrain-cesium ref="provider"></vc-provider-terrain-cesium>
      </vc-viewer>
    </div>
  `
}

describe('VcProviderTerrainCesium', () => {
  test('render test', async () => {
    const wrapper = mount(cesiumTerrainApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: ReadyObj = await testVm.createPromise
    let provider = readyObj.cesiumObject as Cesium.CesiumTerrainProvider
    expect(provider).toBeDefined()
    await provider.readyPromise
    expect(provider.ready).toBe(true)
    await testVm.unload()
    provider = testVm.getCesiumObject() as Cesium.CesiumTerrainProvider
    expect(provider).toBeUndefined()
    await testVm.load()
    provider = testVm.getCesiumObject() as Cesium.CesiumTerrainProvider
    expect(provider).toBeDefined()
  }, 10000)
})


const arcgisTiledElevationApp = {
  components: {
    VcViewer,
    VcProviderTerrainArcgis
  },
  template: `
    <div class="test-viewer">
      <vc-viewer>
        <vc-provider-terrain-arcgis ref="provider"></vc-provider-terrain-arcgis>
      </vc-viewer>
    </div>
  `
}

describe('VcProviderTerrainArcgis', () => {
  test('render test', async () => {
    const wrapper = mount(arcgisTiledElevationApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: ReadyObj = await testVm.createPromise
    let provider = readyObj.cesiumObject as Cesium.ArcGISTiledElevationTerrainProvider
    expect(provider).toBeDefined()
    await provider.readyPromise
    expect(provider.ready).toBe(true)
    await testVm.unload()
    provider = testVm.getCesiumObject() as Cesium.ArcGISTiledElevationTerrainProvider
    expect(provider).toBeUndefined()
    await testVm.load()
    provider = testVm.getCesiumObject() as Cesium.ArcGISTiledElevationTerrainProvider
    expect(provider).toBeDefined()
  }, 10000)
})

// const tiandituTerrainApp = {
//   components: {
//     VcViewer,
//     VcProviderTerrainTianditu
//   },
//   template: `
//     <div class="test-viewer">
//       <vc-viewer>
//         <vc-provider-terrain-tianditu ref="provider" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-terrain-tianditu>
//       </vc-viewer>
//     </div>
//   `
// }

// describe('VcProviderTerrainTianditu', () => {
//   test('render test', async () => {
//     const wrapper = mount(tiandituTerrainApp)
//     const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
//     const readyObj: ReadyObj = await testVm.createPromise
//     let provider = readyObj.cesiumObject
//     expect(provider).toBeDefined()
//     await provider.readyPromise
//     expect(provider.ready).toBe(true)
//     await testVm.unload()
//     provider = testVm.getCesiumObject()
//     expect(provider).toBeUndefined()
//     await testVm.load()
//     provider = testVm.getCesiumObject()
//     expect(provider).toBeDefined()
//   }, 10000)
// })
