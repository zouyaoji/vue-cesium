/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-12 14:56:24
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\viewer\src\index.ts
 */
import { defineComponent, provide, getCurrentInstance, h, createCommentVNode, withDirectives } from 'vue'
import type { VNode } from 'vue'
import useViewer, { viewerProps } from './useViewer'
import type { VcViewerProps } from './useViewer'
import type {
  VcComponentInternalInstance,
  VcDatasource,
  VcTerrainProvider,
  VcViewerProvider,
  ViewerWidgetResizedEvent
} from '@vue-cesium/utils/types'
import { vcKey } from '@vue-cesium/utils/config'
import { viewerEvents } from './events'
import { VcSkeleton } from '@vue-cesium/components/ui'
import { hSlot } from '@vue-cesium/utils/private/render'
import { isPlainObject, kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'
import { TouchHold } from '@vue-cesium/directives'

const emits = {
  ...commonEmits,
  cesiumReady: (payload: typeof Cesium) => true,
  viewerWidgetResized: (payload: ViewerWidgetResizedEvent) => true,
  selectedEntityChanged: (entity: Cesium.Entity) => true,
  trackedEntityChanged: (entity: Cesium.Entity) => true,
  layerAdded: (imageryLayer: Cesium.ImageryLayer, index: number) => true,
  layerMoved: (imageryLayer: Cesium.ImageryLayer, newIndex: number, oldIndex: number) => true,
  layerRemoved: (imageryLayer: Cesium.ImageryLayer, index: number) => true,
  layerShownOrHidden: (imageryLayer: Cesium.ImageryLayer, index: number, show: boolean) => true,
  dataSourceAdded: (collection: Cesium.DataSourceCollection, dataSource: VcDatasource) => true,
  dataSourceMoved: (dataSource: VcDatasource, newIndex: number, oldIndex: number) => true,
  dataSourceRemoved: (collection: Cesium.DataSourceCollection, dataSource: VcDatasource) => true,
  collectionChanged: (
    collection: Cesium.EntityCollection,
    addedArray: Array<Cesium.Entity>,
    removedArray: Array<Cesium.Entity>,
    changedArray: Array<Cesium.Entity>
  ) => true,
  morphComplete: (transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean) => true,
  morphStart: (transitioner: any, preceneModeMode: Cesium.SceneMode, sceneMode: Cesium.SceneMode, wasMorphing: boolean) => true,
  postRender: (scene: Cesium.Scene, time: Cesium.JulianDate) => true,
  preRender: (scene: Cesium.Scene, time: Cesium.JulianDate) => true,
  postUpdate: (scene: Cesium.Scene, time: Cesium.JulianDate) => true,
  preUpdate: (scene: Cesium.Scene, time: Cesium.JulianDate) => true,
  renderError: (scene: Cesium.Scene, error: any) => true,
  terrainProviderChanged: (provider: VcTerrainProvider) => true,
  changed: (percent: number) => true,
  moveEnd: () => true,
  moveStart: () => true,
  onStop: (clock: Cesium.Clock) => true,
  onTick: (clock: Cesium.Clock) => true,
  errorEvent: (tileProviderError: any) => true,
  cameraClicked: (viewModel: Cesium.InfoBoxViewModel) => true,
  closeClicked: (viewModel: Cesium.InfoBoxViewModel) => true,
  leftClick: (mouseClickEvent: { position: Cesium.Cartesian2 }) => true,
  leftDoubleClick: (mouseClickEvent: { position: Cesium.Cartesian2 }) => true,
  leftDown: (mouseClickEvent: { position: Cesium.Cartesian2 }) => true,
  leftUp: (mouseClickEvent: { position: Cesium.Cartesian2 }) => true,
  middleClick: (mouseClickEvent: { position: Cesium.Cartesian2 }) => true,
  middleDown: (mouseClickEvent: { position: Cesium.Cartesian2 }) => true,
  middleUp: (mouseClickEvent: { position: Cesium.Cartesian2 }) => true,
  mouseMove: (mouseClickEvent: { startPosition: Cesium.Cartesian2; endPosition: Cesium.Cartesian2 }) => true,
  pinchStart: (touch2StartEvent: { position1: Cesium.Cartesian2; position2: Cesium.Cartesian2 }) => true,
  pinchMove: (touchPinchMovementEvent: {
    distance: {
      startPosition: Cesium.Cartesian2
      endPosition: Cesium.Cartesian2
    }
    angleAndHeight: {
      startPosition: Cesium.Cartesian2
      endPosition: Cesium.Cartesian2
    }
  }) => true,
  pinchEnd: () => true,
  rightClick: (mouseClickEvent: { position: Cesium.Cartesian2 }) => true,
  rightDown: (mouseClickEvent: { position: Cesium.Cartesian2 }) => true,
  rightUp: (mouseClickEvent: { position: Cesium.Cartesian2 }) => true,
  wheel: (delta: number) => true,
  imageryLayersUpdatedEvent: () => true,
  tileLoadProgressEvent: (length: number) => true,
  touchEnd: evt => true
}
export default defineComponent({
  name: 'VcViewer',
  props: viewerProps,
  emits: emits,
  setup(props: VcViewerProps, ctx) {
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumEvents = ['selectedEntityChanged', 'trackedEntityChanged']
    instance.cesiumMembersEvents = viewerEvents
    const viewerStates = useViewer(props, ctx, instance)

    // provide
    provide<VcViewerProvider>(vcKey, viewerStates.getServices())
    instance.appContext.config.globalProperties.$VueCesium = viewerStates.getServices()
    // expose public methods
    Object.assign(instance.proxy, {
      creatingPromise: viewerStates.creatingPromise,
      load: viewerStates.load,
      unload: viewerStates.unload,
      reload: viewerStates.reload,
      cesiumObject: instance.cesiumObject,
      getCesiumObject: () => instance.cesiumObject
    })

    const onTouchHold = e => {
      ctx.emit('touchEnd', e)
    }

    return () => {
      const children: Array<VNode> = []
      if (isPlainObject(props.skeleton) && !viewerStates.isReady.value) {
        children.push(
          h(VcSkeleton, {
            ...props.skeleton,
            style: { background: props.skeleton.color, width: '100%', height: '100%' }
          })
        )
      } else {
        children.push(createCommentVNode('v-if'))
      }
      children.push(
        createCommentVNode('vc-viewer'),
        withDirectives(
          h(
            'div',
            {
              ref: viewerStates.viewerRef,
              class: kebabCase(instance.proxy?.$options.name || ''),
              id: ctx.attrs.id || 'cesiumContainer',
              style: ctx.attrs.style || { width: '100%', height: '100%' }
            },
            hSlot(ctx.slots.default)
          ),
          [[TouchHold, onTouchHold, props.touchHoldArg]]
        )
      )
      return children
    }
  }
})

export type VcViewerEmits = typeof emits
export * from './useViewer'
