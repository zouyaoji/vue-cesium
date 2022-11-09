import { VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { mount, config } from '@vue/test-utils'
import VcViewer from '@vue-cesium/components/viewer'
import VcEntity from '@vue-cesium/components/entity'
import { VcDatasourceCustom, VcDatasourceCzml, VcDatasourceGeojson, VcDatasourceKml } from '../index'
import { VcConfigProvider } from '../../config-provider'

const customApp = {
  components: {
    VcViewer,
    VcDatasourceCustom,
    VcEntity,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-datasource-custom ref="datasource" name="custom" :entities="entities" @click="onClicked" :show="show">
            <vc-entity
              ref="entity1"
              @click="onClicked"
              :position="[108, 35, 100]"
              :billboard="{
                image: 'https://zouyaoji.top/vue-cesium/favicon.png',
                show: true,
                pixelOffset: [0, -20],
                eyeOffset: {x: 0, y: 0, z: 0},
                horizontalOrigin: 0,
                verticalOrigin: 1,
                scale: 0.25,
                color: 'lime'
              }"
              description="Hello VueCesium"
              id="This is a billboard"
            >
            </vc-entity>
          </vc-datasource-custom>
        </vc-viewer>
      </vc-config-provider>
    </div>
 `,
  data() {
    return {
      show: true,
      entities: [
        {
          position: { lng: 105, lat: 35, height: 200 },
          point: {
            pixelSize: 5,
            color: 'red'
          }
        },
        {
          position: { lng: 105, lat: 36, height: 300 },
          point: {
            pixelSize: 8,
            color: 'yellow'
          }
        },
        {
          position: { lng: 105, lat: 37, height: 400 },
          billboard: {
            image: 'https://zouyaoji.top/vue-cesium/favicon.png',
            scale: 0.25
          }
        }
      ]
    }
  },
  methods: {
    onClicked(e) {
      console.log(e)
    }
  }
}

describe('VcDatasourceCustom', () => {
  test('render test', async () => {
    const wrapper = mount(customApp)
    expect(wrapper.vm.$refs.datasource).toBeDefined()
    const testVm = wrapper.vm.$refs.datasource as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.creatingPromise
    let datasource = readyObj?.cesiumObject as Cesium.CustomDataSource
    expect(datasource instanceof Cesium.CustomDataSource).toBe(true)
    expect(datasource.entities.values.length).toEqual(3)
    const entity1Vm = wrapper.vm.$refs.entity1 as VcComponentPublicInstance
    await entity1Vm.creatingPromise
    expect(datasource.entities.values.length).toEqual(4)
    await testVm.unload?.()
    datasource = testVm.getCesiumObject?.() as Cesium.CustomDataSource
    expect(datasource).toBeUndefined()
    await testVm.load?.()
    datasource = testVm.getCesiumObject?.() as Cesium.CustomDataSource
    expect(datasource).toBeDefined()
  }, 10000)
})

const czmlApp = {
  components: {
    VcViewer,
    VcDatasourceCzml,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-datasource-czml
            ref="datasource"
            czml="https://zouyaoji.top/vue-cesium/SampleData/simple.czml"
          ></vc-datasource-czml>
        </vc-viewer>
      </vc-config-provider>
    </div>
 `
}

describe('VcDatasourceCzml', () => {
  test('render test', async () => {
    const wrapper = mount(czmlApp)
    expect(wrapper.vm.$refs.datasource).toBeDefined()
    const testVm = wrapper.vm.$refs.datasource as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.creatingPromise
    let datasource = readyObj?.cesiumObject as Cesium.CzmlDataSource
    expect(datasource instanceof Cesium.CzmlDataSource).toBe(true)
    await testVm.unload?.()
    datasource = testVm.getCesiumObject?.() as Cesium.CzmlDataSource
    expect(datasource).toBeUndefined()
    await testVm.load?.()
    datasource = testVm.getCesiumObject?.() as Cesium.CzmlDataSource
    expect(datasource).toBeDefined()
  }, 10000)
})

const geojsonApp = {
  components: {
    VcViewer,
    VcDatasourceGeojson,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-datasource-geojson
            ref="datasource"
            data="https://zouyaoji.top/vue-cesium/SampleData/geojson/china.json"
            :show="show"
            :options="options"
          ></vc-datasource-geojson>
        </vc-viewer>
      </vc-config-provider>
    </div>
 `,
  data() {
    return {
      show: true,
      options: {
        stroke: 'red'
      }
    }
  }
}

describe('VcDatasourceGeojson', () => {
  test('render test', async () => {
    const wrapper = mount(geojsonApp)
    expect(wrapper.vm.$refs.datasource).toBeDefined()
    const testVm = wrapper.vm.$refs.datasource as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.creatingPromise
    let datasource = readyObj?.cesiumObject as Cesium.GeoJsonDataSource
    expect(datasource instanceof Cesium.GeoJsonDataSource).toBe(true)
    await testVm.unload?.()
    datasource = testVm.getCesiumObject?.() as Cesium.GeoJsonDataSource
    expect(datasource).toBeUndefined()
    await testVm.load?.()
    datasource = testVm.getCesiumObject?.() as Cesium.GeoJsonDataSource
    expect(datasource).toBeDefined()
  }, 10000)
})

const kmlApp = {
  components: {
    VcViewer,
    VcDatasourceKml,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-datasource-kml
            ref="datasource"
            data="https://zouyaoji.top/vue-cesium/SampleData/kml/gdpPerCapita2008.kmz"
          ></vc-datasource-kml>
        </vc-viewer>
      </vc-config-provider>
    </div>
 `
}

describe('VcDatasourceKml', () => {
  test('render test', async () => {
    const wrapper = mount(kmlApp)
    expect(wrapper.vm.$refs.datasource).toBeDefined()
    const testVm = wrapper.vm.$refs.datasource as VcComponentPublicInstance
    const readyObj: VcReadyObject | undefined = await testVm.creatingPromise
    let datasource = readyObj?.cesiumObject as Cesium.KmlDataSource
    expect(datasource instanceof Cesium.KmlDataSource).toBe(true)
    await testVm.unload?.()
    datasource = testVm.getCesiumObject?.() as Cesium.KmlDataSource
    expect(datasource).toBeUndefined()
    await testVm.load?.()
    datasource = testVm.getCesiumObject?.() as Cesium.KmlDataSource
    expect(datasource).toBeDefined()
  }, 20000)
})
