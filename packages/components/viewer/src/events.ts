import { viewerScreenSpaceEvents, pickEvents } from '@vue-cesium/composables/use-events'
import { camelCase, capitalize } from '@vue-cesium/utils/util'

const viewerEvents = [
  {
    // viewer.imageryLayers
    name: 'imageryLayers',
    events: ['layerAdded', 'layerMoved', 'layerRemoved', 'layerShownOrHidden']
  },
  {
    // viewer.dataSources
    name: 'dataSources',
    events: ['dataSourceAdded', 'dataSourceMoved', 'dataSourceRemoved']
  },
  {
    // viewer.entities
    name: 'entities',
    events: ['collectionChanged']
  },
  {
    // viewer.scene
    name: 'scene',
    events: ['morphComplete', 'morphStart', 'postRender', 'postUpdate', 'preRender', 'preUpdate', 'renderError', 'terrainProviderChanged']
  },
  {
    // viewer.camera
    name: 'camera',
    events: ['changed', 'moveEnd', 'moveStart']
  },
  {
    // viewer.clock
    name: 'clock',
    events: ['onStop', 'onTick']
  },
  {
    // viewer.terrainProvider
    name: 'terrainProvider',
    events: ['errorEvent']
  },
  {
    // viewer.infoBox.viewModel
    name: ['infoBox', 'viewModel'],
    events: ['cameraClicked', 'closeClicked']
  },
  // viewer.scene.globe
  {
    name: ['scene', 'globe'],
    events: ['imageryLayersUpdatedEvent', 'terrainProviderChanged', 'tileLoadProgressEvent']
  }
]

const viewerScreenSpaceEventsCamel = viewerScreenSpaceEvents.map(v => camelCase(v))

const cmpEvents = [
  'beforeLoad',
  'cesiumReady',
  'ready',
  'destroyed',
  'update:camera',
  'viewerWidgetResized',
  ...viewerScreenSpaceEvents,
  ...viewerScreenSpaceEventsCamel,
  ...pickEvents
]

const emits = viewerEvents.reduce((pre, cur) => {
  return pre.concat(cur.events)
}, cmpEvents)

export { viewerEvents, emits }
