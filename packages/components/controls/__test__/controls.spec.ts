import { VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { mount, config } from '@vue/test-utils'
import VcViewer from '@vue-cesium/components/viewer'
import {
  VcCompass,
  VcCompassSm,
  VcZoomControl,
  VcZoomControlSm,
  VcPrint,
  VcMyLocation,
  VcStatusBar,
  VcDistanceLegend,
  VcNavigation,
  VcNavigationSm
} from '../index'
import { VcConfigProvider } from '../../config-provider'

const compassApp = {
  components: {
    VcViewer,
    VcCompass,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-compass
            ref="compass"
            :position="compassOptions.position"
            :outerOptions="compassOptions.outerOptions"
            :innerOptions="compassOptions.innerOptions"
            :markerOptions="compassOptions.markerOptions"
          ></vc-compass>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `,
  data() {
    return {
      compassOptions: {
        position: 'left',
        outerOptions: { name: 'svguse:#vc-icons-compass-outer', size: '250px' },
        innerOptions: { name: 'fa fa-compass', size: '60px', background: 'transparent', color: '#009688' },
        markerOptions: { name: 'vc-icons-compass-rotation-marker', size: '96px', color: '#1976D2' }
      }
    }
  }
}

describe('VcCompass', () => {
  test('render test', async () => {
    const wrapperApp = mount(compassApp)
    const compassVm = wrapperApp.vm.$refs.compass as VcComponentPublicInstance
    const redyObj: VcReadyObject | undefined = await compassVm.creatingPromise
    let compassEl = redyObj?.cesiumObject
    expect(compassEl instanceof HTMLElement).toBe(true)
    expect(wrapperApp.find('.vc-compass').exists()).toBe(true)
    expect(wrapperApp.find('.vc-compass').classes()).toContain('absolute-left')
    const outerEl = wrapperApp.find('.vc-compass-outerRing').element as HTMLElement
    expect(outerEl.style.fontSize).toEqual('250px')
    expect(outerEl.style.background).toEqual('transparent')

    const innerEl = wrapperApp.find('.vc-compass-innerRing').element as HTMLElement
    expect(innerEl.style.fontSize).toEqual('60px')
    expect(innerEl.style.background).toEqual('transparent')

    await compassVm.unload?.()
    compassEl = compassVm.getCesiumObject?.()
    expect(compassEl).toBeUndefined()
    await compassVm.load?.()
    compassEl = compassVm.getCesiumObject?.()
    expect(compassEl).toBeDefined()
  }, 10000)
})

const compassSmApp = {
  components: {
    VcViewer,
    VcCompassSm,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-compass-sm ref="compass" position="bottom" :offset="[-200, 20]"></vc-compass-sm>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcCompassSm', () => {
  test('render test', async () => {
    const wrapperApp = mount(compassSmApp)
    const compassVm = wrapperApp.vm.$refs.compass as VcComponentPublicInstance
    const redyObj: VcReadyObject | undefined = await compassVm.creatingPromise
    let compassEl = redyObj?.cesiumObject
    expect(compassEl instanceof HTMLElement).toBe(true)
    expect(wrapperApp.find('.vc-compass-sm').exists()).toBe(true)
    expect(wrapperApp.find('.vc-compass-sm').classes()).toContain('absolute-bottom')
    await compassVm.unload?.()
    compassEl = compassVm.getCesiumObject?.()
    expect(compassEl).toBeUndefined()
    await compassVm.load?.()
    compassEl = compassVm.getCesiumObject?.()
    expect(compassEl).toBeDefined()
  }, 10000)
})

const zoomControlApp = {
  components: {
    VcViewer,
    VcZoomControl,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-zoom-control
            ref="zoomControl"
            :position="position"
            :offset="offset"
            :enableResetButton="enableResetButton"
            :zoomInOptions="zoomInOptions"
            :zoomOutOptions="zoomOutOptions"
          ></vc-zoom-control>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `,
  data() {
    return {
      position: 'bottom',
      offset: [10, 10],
      enableResetButton: false,
      zoomInOptions: {
        name: 'vc-icons-zoom-in',
        size: '32px',
        color: '#fff',
        background: 'transparent',
        round: true,
        flat: true,
        label: undefined,
        stack: false
      },
      zoomOutOptions: {
        name: 'vc-icons-zoom-out',
        size: '32px',
        color: '#fff',
        background: 'transparent',
        round: true,
        flat: true,
        label: undefined,
        stack: false
      }
    }
  }
}

describe('VcZoomControl', () => {
  test('render test', async () => {
    const wrapperApp = mount(zoomControlApp)
    const zoomControlVm = wrapperApp.vm.$refs.zoomControl as VcComponentPublicInstance
    const redyObj: VcReadyObject | undefined = await zoomControlVm.creatingPromise
    let zoomControlEl = redyObj?.cesiumObject
    expect(zoomControlEl instanceof HTMLElement).toBe(true)
    expect(wrapperApp.find('.vc-zoom-control').classes()).toContain('absolute-bottom')
    const zoomInEl = wrapperApp.find('.vc-zoom-in').element as HTMLElement
    expect(zoomInEl.style.fontSize).toEqual('32px')
    expect(zoomInEl.style.background).toEqual('transparent')

    const zoomOutEl = wrapperApp.find('.vc-zoom-out').element as HTMLElement
    expect(zoomOutEl.style.fontSize).toEqual('32px')
    expect(zoomOutEl.style.background).toEqual('transparent')

    await zoomControlVm.unload?.()
    zoomControlEl = zoomControlVm.getCesiumObject?.()
    expect(zoomControlEl).toBeUndefined()
    await zoomControlVm.load?.()
    zoomControlEl = zoomControlVm.getCesiumObject?.()
    expect(zoomControlEl).toBeDefined()
  }, 10000)
})

const zoomControlSmApp = {
  components: {
    VcViewer,
    VcZoomControlSm,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-zoom-control-sm ref="zoomControl" position="bottom" :offset="[0, 50]"></vc-zoom-control-sm>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcZoomControlSm', () => {
  test('render test', async () => {
    const wrapperApp = mount(zoomControlSmApp)
    const zoomControlVm = wrapperApp.vm.$refs.zoomControl as VcComponentPublicInstance
    const redyObj: VcReadyObject | undefined = await zoomControlVm.creatingPromise
    let compassEl = redyObj?.cesiumObject
    expect(compassEl instanceof HTMLElement).toBe(true)
    expect(wrapperApp.find('.vc-zoom-control-sm').exists()).toBe(true)
    expect(wrapperApp.find('.vc-zoom-control-sm').classes()).toContain('absolute-bottom')
    await zoomControlVm.unload?.()
    compassEl = zoomControlVm.getCesiumObject?.()
    expect(compassEl).toBeUndefined()
    await zoomControlVm.load?.()
    compassEl = zoomControlVm.getCesiumObject?.()
    expect(compassEl).toBeDefined()
  }, 10000)
})

const printApp = {
  components: {
    VcViewer,
    VcPrint,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-print
            ref="print"
            position="bottom-right"
            :offset="[40, 20]"
            :showPrintView="false"
            printAutomatically
            size="28px"
            :round="false"
            label="打印分享"
            background="#31CCEC"
            name="fa fa-print"
          ></vc-print>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcPrint', () => {
  test('render test', async () => {
    const wrapperApp = mount(printApp)
    const printVm = wrapperApp.vm.$refs.print as VcComponentPublicInstance
    const redyObj: VcReadyObject | undefined = await printVm.creatingPromise
    let printEl = redyObj?.cesiumObject
    expect(printEl instanceof HTMLElement).toBe(true)
    expect(wrapperApp.find('.vc-print').classes()).toContain('absolute-bottom-right')
    const btnEl = wrapperApp.find('.vc-btn').element as HTMLElement
    expect(btnEl.style.fontSize).toEqual('28px')
    expect(wrapperApp.html()).toContain('打印分享')

    await printVm.unload?.()
    printEl = printVm.getCesiumObject?.()
    expect(printEl).toBeUndefined()
    await printVm.load?.()
    printEl = printVm.getCesiumObject?.()
    expect(printEl).toBeDefined()
  }, 10000)
})

const myLocationApp = {
  components: {
    VcViewer,
    VcMyLocation,
    VcConfigProvider
  },
  template: `
    <vc-config-provider>
      <vc-viewer>
        <vc-my-location
          ref="myLocation"
          color="#9C27B0"
          :amap="{key: '39c28158066d532d372391c5a0c7d9ba',version: '2.0',options: {timeout: 5000,noGeoLocation: 3,needAddress: true,extensions: 'all'},transformToWGS84: true}"
          position="top-left"
          :offset="[0, 60]"
          label="定位"
          stack
          :round="false"
          background="#F2C037"
          size="28px"
        ></vc-my-location>
      </vc-viewer>
    </vc-config-provider>
  `
}

describe('VcMyLocation', () => {
  test('render test', async () => {
    const wrapperApp = mount(myLocationApp)
    const myLocationVm = wrapperApp.vm.$refs.myLocation as VcComponentPublicInstance
    const redyObj: VcReadyObject | undefined = await myLocationVm.creatingPromise
    let myLocationEl = redyObj?.cesiumObject
    expect(myLocationEl instanceof HTMLElement).toBe(true)
    expect(wrapperApp.find('.vc-my-location').classes()).toContain('absolute-top-left')
    const btnEl = wrapperApp.find('.vc-btn').element as HTMLElement
    expect(btnEl.style.fontSize).toEqual('28px')
    expect(wrapperApp.html()).toContain('定位')

    await myLocationVm.unload?.()
    myLocationEl = myLocationVm.getCesiumObject?.()
    expect(myLocationEl).toBeUndefined()
    await myLocationVm.load?.()
    myLocationEl = myLocationVm.getCesiumObject?.()
    expect(myLocationEl).toBeDefined()
  }, 10000)
})

const statusBarApp = {
  components: {
    VcViewer,
    VcStatusBar,
    VcConfigProvider
  },
  template: `
    <vc-config-provider>
      <vc-viewer>
        <vc-status-bar ref="statusBar" position="bottom"></vc-status-bar>
      </vc-viewer>
    </vc-config-provider>
  `
}

describe('VcStatusBar', () => {
  test('render test', async () => {
    const wrapperApp = mount(statusBarApp)
    const statusBarVm = wrapperApp.vm.$refs.statusBar as VcComponentPublicInstance
    const redyObj: VcReadyObject | undefined = await statusBarVm.creatingPromise
    let statusBarEl = redyObj?.cesiumObject
    expect(statusBarEl instanceof HTMLElement).toBe(true)
    expect(wrapperApp.find('.vc-status-bar').classes()).toContain('absolute-bottom')

    await statusBarVm.unload?.()
    statusBarEl = statusBarVm.getCesiumObject?.()
    expect(statusBarEl).toBeUndefined()
    await statusBarVm.load?.()
    statusBarEl = statusBarVm.getCesiumObject?.()
    expect(statusBarEl).toBeDefined()
  }, 10000)
})

const distanceLegendApp = {
  components: {
    VcViewer,
    VcDistanceLegend,
    VcConfigProvider
  },
  template: `
    <vc-config-provider>
      <vc-viewer>
        <vc-distance-legend ref="distanceLegend" position="bottom-left" :offset="[5, 35]"></vc-distance-legend>
      </vc-viewer>
    </vc-config-provider>
  `
}

describe('VcDistanceLegend', () => {
  test('render test', async () => {
    const wrapperApp = mount(distanceLegendApp)
    const distanceLegendVm = wrapperApp.vm.$refs.distanceLegend as VcComponentPublicInstance
    const redyObj: VcReadyObject | undefined = await distanceLegendVm.creatingPromise
    let distanceLegendEl = redyObj?.cesiumObject
    expect(distanceLegendEl instanceof HTMLElement).toBe(true)
    expect(wrapperApp.find('.vc-distance-legend').classes()).toContain('absolute-bottom-left')

    await distanceLegendVm.unload?.()
    distanceLegendEl = distanceLegendVm.getCesiumObject?.()
    expect(distanceLegendEl).toBeUndefined()
    await distanceLegendVm.load?.()
    distanceLegendEl = distanceLegendVm.getCesiumObject?.()
    expect(distanceLegendEl).toBeDefined()
  }, 10000)
})

const navigationApp = {
  components: {
    VcViewer,
    VcNavigation,
    VcConfigProvider
  },
  template: `
    <vc-config-provider>
      <vc-viewer>
        <vc-navigation ref="navigation"></vc-navigation>
      </vc-viewer>
    </vc-config-provider>
  `
}

describe('VcNavigation', () => {
  test('render test', async () => {
    const wrapperApp = mount(navigationApp)
    const navigationVm = wrapperApp.vm.$refs.navigation as VcComponentPublicInstance
    const redyObj: VcReadyObject | undefined = await navigationVm.creatingPromise
    let navigationEl = redyObj?.cesiumObject?.[0]
    expect(navigationEl instanceof HTMLElement).toBe(true)
    expect(wrapperApp.find('.vc-navigation').classes()).toContain('absolute-top-right')
    expect(wrapperApp.find('.vc-compass').exists()).toBe(true)
    expect(wrapperApp.find('.vc-zoom-control').exists()).toBe(true)
    expect(wrapperApp.find('.vc-print').exists()).toBe(true)
    expect(wrapperApp.find('.vc-my-location').exists()).toBe(true)

    await navigationVm.unload?.()
    navigationEl = navigationVm.getCesiumObject?.()
    expect(navigationEl).toBeUndefined()
    await navigationVm.load?.()
    navigationEl = navigationVm.getCesiumObject?.()
    expect(navigationEl).toBeDefined()
  }, 10000)
})

const navigationSmApp = {
  components: {
    VcViewer,
    VcNavigationSm,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer>
          <vc-navigation-sm ref="navigation"></vc-navigation-sm>
        </vc-viewer>
      </vc-config-provider>
    </div>
  `
}

describe('VcNavigationSm', () => {
  test('render test', async () => {
    const wrapperApp = mount(navigationSmApp)
    const navigationVm = wrapperApp.vm.$refs.navigation as VcComponentPublicInstance
    const redyObj: VcReadyObject | undefined = await navigationVm.creatingPromise
    let navigationEl = redyObj?.cesiumObject
    expect(navigationEl instanceof HTMLElement).toBe(true)
    expect(wrapperApp.find('.vc-navigation-sm').classes()).toContain('absolute-top-right')
    expect(wrapperApp.find('.vc-compass-sm').exists()).toBe(true)
    expect(wrapperApp.find('.vc-zoom-control-sm').exists()).toBe(true)

    await navigationVm.unload?.()
    navigationEl = navigationVm.getCesiumObject?.()
    expect(navigationEl).toBeUndefined()
    await navigationVm.load?.()
    navigationEl = navigationVm.getCesiumObject?.()
    expect(navigationEl).toBeDefined()
  }, 10000)
})
