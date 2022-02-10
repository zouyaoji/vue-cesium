import { VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { mount, config } from '@vue/test-utils'
import VcViewer from '@vue-cesium/components/viewer'
import VcLayerImagery from '@vue-cesium/components/imagery-layer'
import {
  VcImageryProviderArcgis,
  VcImageryProviderBaidu,
  VcImageryProviderBing,
  VcImageryProviderGrid,
  VcImageryProviderIon,
  VcImageryProviderMapbox,
  VcImageryProviderOsm,
  VcImageryProviderSingletile,
  VcImageryProviderSupermap,
  VcImageryProviderTianditu,
  VcImageryProviderTileCoordinates,
  VcImageryProviderTms,
  VcImageryProviderTiledcache,
  VcImageryProviderUrltemplate,
  VcImageryProviderWms,
  VcImageryProviderWmts,
  VcTerrainProviderCesium,
  VcTerrainProviderArcgis
  // VcTerrainProviderTianditu
} from '../index'

import { VcConfigProvider } from '../../config-provider'

const arcgisApp = {
  components: {
    VcViewer,
    VcLayerImagery,
    VcImageryProviderArcgis,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-layer-imagery>
            <vc-imagery-provider-arcgis ref="provider"></vc-imagery-provider-arcgis>
          </vc-layer-imagery>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcImageryProviderArcgis', () => {
  test('render test', async () => {
    const wrapper = mount(arcgisApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: VcReadyObject = await testVm.createPromise
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
    VcImageryProviderBaidu,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-layer-imagery>
            <vc-imagery-provider-baidu
            ref="provider"
            url="https://www.songluck.com/map/data/maptile-baidu-chengdu/{z}/{x}/{y}.png"
            :projectionTransforms="{ form: 'BD09', to: 'WGS84' }"
            >
            </vc-imagery-provider-baidu>
          </vc-layer-imagery>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcImageryProviderBaidu', () => {
  test('render test', async () => {
    const wrapper = mount(baiduApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: VcReadyObject = await testVm.createPromise
    let provider = readyObj.cesiumObject as any
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
    VcImageryProviderBing,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-layer-imagery>
            <vc-imagery-provider-bing
            ref="provider"
            bmKey="AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-"
            mapStyle="Aerial"
          ></vc-imagery-provider-bing>
          </vc-layer-imagery>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcImageryProviderBing', () => {
  test('render test', async () => {
    const wrapper = mount(bingmapsApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: VcReadyObject = await testVm.createPromise
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
    VcImageryProviderGrid,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-layer-imagery>
            <vc-imagery-provider-grid ref="provider"></vc-imagery-provider-grid>
          </vc-layer-imagery>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcImageryProviderGrid', () => {
  test('render test', async () => {
    const wrapper = mount(gridApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: VcReadyObject = await testVm.createPromise
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
    VcImageryProviderIon,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-layer-imagery>
            <vc-imagery-provider-ion
            ref="provider"
            :assetId="4"
            accessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5Y2U0ZTk2Ni1jNzdkLTQ3OWYtYjVmYS0yMGM3YTk3NjgzMmUiLCJpZCI6Njk5Nywic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0ODA1MTc0OH0.Csy6yyAnv6JSBppH0Ou3ahshqcHFEhP27iOz5gjQMEo"
          ></vc-imagery-provider-ion>
          </vc-layer-imagery>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcImageryProviderIon', () => {
  test('render test', async () => {
    const wrapper = mount(cesiumIonApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: VcReadyObject = await testVm.createPromise
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
    VcImageryProviderMapbox,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-layer-imagery>
            <vc-imagery-provider-mapbox
              ref="provider"
              url="https://api.mapbox.com/styles/v1"
              username="zouyaoji"
              styleId="ckd49hwdn0u641irz36komsmt"
              accessToken="pk.eyJ1Ijoiem91eWFvamkiLCJhIjoiY2tjdjlha3pzMDIxeDJ1bWxhaWNnaGNkdSJ9.WaGuuQT8YcWTPx3KNQfF7A"
            ></vc-imagery-provider-mapbox>
          </vc-layer-imagery>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcImageryProviderMapbox', () => {
  test('render test', async () => {
    const wrapper = mount(mapboxApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: VcReadyObject = await testVm.createPromise
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
    VcImageryProviderOsm,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-layer-imagery>
            <vc-imagery-provider-osm ref="provider"></vc-imagery-provider-osm>
          </vc-layer-imagery>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcImageryProviderOsm', () => {
  test('render test', async () => {
    const wrapper = mount(osmApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: VcReadyObject = await testVm.createPromise
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
    VcImageryProviderSingletile,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-layer-imagery>
            <vc-imagery-provider-singletile ref="provider" url="https://zouyaoji.top/vue-cesium/SampleData/images/worldimage.jpg"></vc-imagery-provider-singletile>
          </vc-layer-imagery>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcImageryProviderSingletile', () => {
  test('render test', async () => {
    const wrapper = mount(singletileApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: VcReadyObject = await testVm.createPromise
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
    VcImageryProviderSupermap,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-layer-imagery>
            <vc-imagery-provider-supermap
              ref="provider"
              url="https://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult"
            ></vc-imagery-provider-supermap>
          </vc-layer-imagery>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcImageryProviderSupermap', () => {
  test('render test', async () => {
    const wrapper = mount(supermapApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: VcReadyObject = await testVm.createPromise
    let provider = readyObj.cesiumObject as any
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
    VcImageryProviderTianditu,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-layer-imagery>
            <vc-imagery-provider-tianditu ref="provider" mapStyle="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-imagery-provider-tianditu>
          </vc-layer-imagery>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcImageryProviderTianditu', () => {
  test('render test', async () => {
    const wrapper = mount(tiandituApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: VcReadyObject = await testVm.createPromise
    let provider = readyObj.cesiumObject as any
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
    VcImageryProviderTileCoordinates,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-layer-imagery>
            <vc-imagery-provider-tile-coordinates ref="provider"></vc-imagery-provider-tile-coordinates>
          </vc-layer-imagery>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcImageryProviderTileCoordinates', () => {
  test('render test', async () => {
    const wrapper = mount(tileCoordinatesApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: VcReadyObject = await testVm.createPromise
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
    VcImageryProviderTms,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-layer-imagery>
            <vc-imagery-provider-tms
              ref="provider"
              url="https://zouyaoji.top/vue-cesium/SampleData/images/cesium_maptiler/Cesium_Logo_Color"
              :rectangle="[-120, 20, -60, 40]"
              :maximumLevel="4"
            ></vc-imagery-provider-tms>
          </vc-layer-imagery>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcImageryProviderTms', () => {
  test('render test', async () => {
    const wrapper = mount(tileMapApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: VcReadyObject = await testVm.createPromise
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
    VcImageryProviderTiledcache,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-layer-imagery>
            <vc-imagery-provider-tiledcache
              ref="provider"
              url="https://songluck.com/gis/TiledCacheService/TiledCacheServlet"
              dir="WhiteMap"
            ></vc-imagery-provider-tiledcache>
          </vc-layer-imagery>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcImageryProviderTiledcache', () => {
  test('render test', async () => {
    const wrapper = mount(tiledCacheApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: VcReadyObject = await testVm.createPromise
    let provider = readyObj.cesiumObject as any
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
    VcImageryProviderUrltemplate,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-layer-imagery>
            <vc-imagery-provider-urltemplate ref="provider"
              :projectionTransforms="{from: 'GCJ02', to: 'WGS84'}"
              url="https://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}"
            ></vc-imagery-provider-urltemplate>
          </vc-layer-imagery>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcImageryProviderUrltemplate', () => {
  test('render test', async () => {
    const wrapper = mount(urlTemplateApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: VcReadyObject = await testVm.createPromise
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
    VcImageryProviderWms,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-layer-imagery>
            <vc-imagery-provider-wms
              ref="provider"
              url="http://geoserver.nationalmap.nicta.com.au/geotopo_250k/ows"
              layers="Hydrography:bores"
              :parameters="{transparent: true, format: 'image/png'}"
            ></vc-imagery-provider-wms>
          </vc-layer-imagery>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcImageryProviderWms', () => {
  test('render test', async () => {
    const wrapper = mount(wmsApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: VcReadyObject = await testVm.createPromise
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
    VcImageryProviderWmts,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-layer-imagery>
            <vc-imagery-provider-wmts
              ref="provider"
              url="https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/WMTS/tile/1.0.0/World_Street_Map/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg"
              layer="World_Street_Map"
              format="image/jpeg"
              wmtsStyle="default"
              tileMatrixSetID="default028mm"
            ></vc-imagery-provider-wmts>
          </vc-layer-imagery>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcImageryProviderWmts', () => {
  test('render test', async () => {
    const wrapper = mount(wmtsApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: VcReadyObject = await testVm.createPromise
    let provider = readyObj.cesiumObject as Cesium.WebMapTileServiceImageryProvider
    expect(provider).toBeDefined()
    await provider.readyPromise
    expect(provider.url).toEqual(
      'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/WMTS/tile/1.0.0/World_Street_Map/default/default028mm/{TileMatrix}/{TileRow}/{TileCol}.jpg'
    )
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
    VcTerrainProviderCesium,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider access-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5Y2U0ZTk2Ni1jNzdkLTQ3OWYtYjVmYS0yMGM3YTk3NjgzMmUiLCJpZCI6Njk5Nywic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0ODA1MTc0OH0.Csy6yyAnv6JSBppH0Ou3ahshqcHFEhP27iOz5gjQMEo">
        <vc-viewer>
          <vc-terrain-provider-cesium ref="provider"></vc-terrain-provider-cesium>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcTerrainProviderCesium', () => {
  test('render test', async () => {
    const wrapper = mount(cesiumTerrainApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: VcReadyObject = await testVm.createPromise
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
    VcTerrainProviderArcgis,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-terrain-provider-arcgis ref="provider"></vc-terrain-provider-arcgis>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcTerrainProviderArcgis', () => {
  test('render test', async () => {
    const wrapper = mount(arcgisTiledElevationApp)
    const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
    const readyObj: VcReadyObject = await testVm.createPromise
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
//     VcTerrainProviderTianditu
//   },
//   template: `
//     <div class="test-viewer">
//       <vc-viewer>
//         <vc-terrain-provider-tianditu ref="provider" token="436ce7e50d27eede2f2929307e6b33c0"></vc-terrain-provider-tianditu>
//       </vc-viewer>
//     </div>
//   `
// }

// describe('VcTerrainProviderTianditu', () => {
//   test('render test', async () => {
//     const wrapper = mount(tiandituTerrainApp)
//     const testVm = wrapper.vm.$refs.provider as VcComponentPublicInstance
//     const readyObj: VcReadyObject = await testVm.createPromise
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
