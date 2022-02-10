import { VcCamera, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import { kebabCase } from '@vue-cesium/utils/util'
import { mount, config } from '@vue/test-utils'
import VcViewer from '../src'
import { VcConfigProvider } from '../../config-provider'
// import { createPointerEvent } from '@vue-cesium/utils/private/test-util'

const viewerApp = {
  components: {
    VcViewer,
    VcConfigProvider
  },
  template: `
    <div class="test-viewer">
      <vc-config-provider>
        <vc-viewer ref="viewer"></vc-viewer>
      </vc-config-provider>
    </div>
 `
}

describe('VcViewer', () => {
  test('render test default', async () => {
    const wrapper = mount(viewerApp)
    const testVm = wrapper.vm.$refs.viewer as VcComponentPublicInstance
    expect(wrapper.find(`.${kebabCase(testVm.$options.name || '')}`).exists()).toBe(true)
    await testVm.createPromise
    const viewer = testVm.getCesiumObject() as Cesium.Viewer
    expect(viewer instanceof Cesium.Viewer).toBe(true)
    expect((viewer.bottomContainer as HTMLElement).style.display !== 'inline').toBe(true)
    expect(viewer.animation).toBeUndefined()
    expect(viewer.timeline).toBeUndefined()
    expect(viewer.clock.shouldAnimate).toBe(false)
  }, 10000)

  // test('render test custom', async () => {
  //   let viewerReady = false
  //   const onViewerReady = e => {
  //     viewerReady = true
  //   }
  //   const onDestroyed = () => {
  //     viewerReady = false
  //   }
  //   let clicked = false
  //   const onLeftClick = () => {
  //     clicked = true
  //   }

  //   const wrapper = mount(viewerApp, {
  //     props: {
  //       showCredit: false,
  //       animation: true,
  //       timeline: true,
  //       shouldAnimate: true,
  //       fullscreenButton: true,
  //       baseLayerPicker: true,
  //       vrButton: true,
  //       geocoder: true,
  //       homeButton: true,
  //       infoBox: true,
  //       sceneModePicker: true,
  //       selectionIndicator: true,
  //       navigationHelpButton: true,
  //       navigationInstructionsInitiallyVisible: true,
  //       projectionPicker: true,
  //       camera: {
  //         position: [108, 32, 10000]
  //       },
  //       cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js',
  //       onReady: onViewerReady,
  //       onDestroyed: onDestroyed,
  //       onLeftClick: onLeftClick,
  //       onClick: onLeftClick
  //     } as any
  //   })
  //   const vm = wrapper.vm as unknown as VcComponentPublicInstance
  //   expect(wrapper.find(`.${kebabCase(vm.$options.name || '')}`).exists()).toBe(true)
  //   await vm.createPromise
  //   let viewer = vm.getCesiumObject() as Cesium.Viewer
  //   expect(viewer instanceof Cesium.Viewer).toBe(true)
  //   // showCredit
  //   expect((viewer.bottomContainer as HTMLElement).style.display === 'none').toBe(true)
  //   await wrapper.setProps({ showCredit: true })
  //   expect((viewer.bottomContainer as HTMLElement).style.display === 'inline').toBe(true)
  //   // animation
  //   expect(viewer.animation instanceof Cesium.Animation).toBe(true)
  //   await wrapper.setProps({ animation: false })
  //   expect(viewer.animation).toBeUndefined()
  //   await wrapper.setProps({ animation: true })
  //   expect(viewer.animation).toBeDefined()
  //   // fullscreenButton
  //   expect(viewer.fullscreenButton instanceof Cesium.FullscreenButton).toBe(true)
  //   await wrapper.setProps({ fullscreenButton: false })
  //   expect(viewer.fullscreenButton).toBeUndefined()
  //   await wrapper.setProps({ fullscreenButton: true })
  //   expect(viewer.fullscreenButton).toBeDefined()
  //   // vrButton
  //   expect(viewer.vrButton instanceof Cesium.VRButton).toBe(true)
  //   await wrapper.setProps({ vrButton: false })
  //   expect(viewer.vrButton).toBeUndefined()
  //   await wrapper.setProps({ vrButton: true })
  //   expect(viewer.vrButton).toBeDefined()
  //   // geocoder
  //   expect(viewer.geocoder instanceof Cesium.Geocoder).toBe(true)
  //   await wrapper.setProps({ geocoder: false })
  //   expect(viewer.geocoder).toBeUndefined()
  //   await wrapper.setProps({ geocoder: true })
  //   expect(viewer.geocoder).toBeDefined()
  //   // homeButton
  //   expect(viewer.homeButton instanceof Cesium.HomeButton).toBe(true)
  //   await wrapper.setProps({ homeButton: false })
  //   expect(viewer.homeButton).toBeUndefined()
  //   await wrapper.setProps({ homeButton: true })
  //   expect(viewer.homeButton).toBeDefined()
  //   // infoBox
  //   expect(viewer.infoBox instanceof Cesium.InfoBox).toBe(true)
  //   await wrapper.setProps({ infoBox: false })
  //   expect(viewer.infoBox).toBeUndefined()
  //   await wrapper.setProps({ infoBox: true })
  //   expect(viewer.infoBox).toBeDefined()
  //   // sceneModePicker
  //   expect(viewer.sceneModePicker instanceof Cesium.SceneModePicker).toBe(true)
  //   await wrapper.setProps({ sceneModePicker: false })
  //   expect(viewer.sceneModePicker).toBeUndefined()
  //   await wrapper.setProps({ sceneModePicker: true })
  //   expect(viewer.sceneModePicker).toBeDefined()
  //   // selectionIndicator
  //   expect(viewer.selectionIndicator instanceof Cesium.SelectionIndicator).toBe(true)
  //   await wrapper.setProps({ selectionIndicator: false })
  //   expect(viewer.selectionIndicator).toBeUndefined()
  //   await wrapper.setProps({ selectionIndicator: true })
  //   expect(viewer.selectionIndicator).toBeDefined()
  //   // timeline
  //   expect(viewer.timeline instanceof Cesium.Timeline).toBe(true)
  //   await wrapper.setProps({ timeline: false })
  //   expect(viewer.timeline).toBeUndefined()
  //   await wrapper.setProps({ timeline: true })
  //   expect(viewer.timeline).toBeDefined()
  //   // navigationHelpButton
  //   expect(viewer.navigationHelpButton instanceof Cesium.NavigationHelpButton).toBe(true)
  //   await wrapper.setProps({ navigationHelpButton: false })
  //   expect(viewer.navigationHelpButton).toBeUndefined()
  //   await wrapper.setProps({ navigationHelpButton: true })
  //   expect(viewer.navigationHelpButton).toBeDefined()
  //   // projectionPicker
  //   expect(viewer.projectionPicker instanceof Cesium.ProjectionPicker).toBe(true)
  //   await wrapper.setProps({ projectionPicker: false })
  //   expect(viewer.projectionPicker).toBeUndefined()
  //   await wrapper.setProps({ projectionPicker: true })
  //   expect(viewer.projectionPicker).toBeDefined()
  //   // shouldAnimate
  //   expect(viewer.clock.shouldAnimate).toBe(true)
  //   await wrapper.setProps({ shouldAnimate: false })
  //   expect(viewer.clock.shouldAnimate).toBe(false)
  //   await wrapper.setProps({ shouldAnimate: true })
  //   expect(viewer.clock.shouldAnimate).toBe(true)
  //   // camera
  //   expect(Cesium.Math.equalsEpsilon(viewer.camera.positionCartographic.height, 10000, Cesium.Math.EPSILON6)).toBe(true)
  //   // click event
  //   // const pointerdownEvent = createPointerEvent('pointerdown')
  //   // const pointerupEvent = createPointerEvent('pointerup')
  //   // wrapper.find('canvas').element.dispatchEvent(pointerdownEvent) // InvalidStateError: Failed to execute 'setPointerCapture' on 'Element': InvalidStateErrorError: Failed to execute 'setPointerCapture' on 'Element': InvalidStateError
  //   // wrapper.find('canvas').element.dispatchEvent(pointerupEvent)
  //   // expect(clicked).toBe(true)
  //   // ready event
  //   expect(viewerReady).toBe(true)
  //   await vm.unload()
  //   expect(viewerReady).toBe(false)
  //   viewer = vm.getCesiumObject() as Cesium.Viewer
  //   expect(viewer).toBeUndefined()
  //   await vm.load()
  //   expect(viewerReady).toBe(true)
  //   viewer = vm.getCesiumObject() as Cesium.Viewer
  //   expect(viewer instanceof Cesium.Viewer).toBe(true)
  // }, 20000)
})
