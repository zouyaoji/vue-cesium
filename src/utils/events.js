/**
 * @const {Array} Cesium 事件集合。
 */
export const Events = {
  'vc-viewer': ['selectedEntityChanged', 'trackedEntityChanged'],
  'viewer-property-events': [
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
      events: [
        'morphComplete',
        'morphStart',
        'postRender',
        'postUpdate',
        'preRender',
        'preUpdate',
        'renderError',
        'terrainProviderChanged'
      ]
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
  ],
  'viewer-mouse-events': [
    'LEFT_CLICK',
    'LEFT_DOUBLE_CLICK',
    'LEFT_DOWN',
    'LEFT_UP',
    'MIDDLE_CLICK',
    'MIDDLE_DOWN',
    'MIDDLE_UP',
    'MOUSE_MOVE',
    'PINCH_END',
    'PINCH_MOVE',
    'PINCH_START',
    'RIGHT_CLICK',
    'RIGHT_DOWN',
    'RIGHT_UP',
    'WHEEL'
  ],
  'vc-primitive-tileset': [
    'allTilesLoaded',
    'initialTilesLoaded',
    'loadProgress',
    'tileFailed',
    'tileLoad',
    'tileUnload',
    'tileVisible'
  ],
  'vc-primitive-particle': [
    'complete'
  ],
  'imagery-layer-events': ['errorEvent'],
  'entity-events': ['definitionChanged'],
  'datasource-events': ['changedEvent', 'errorEvent', 'loadingEvent'],
  'datasource-property-events': [
    {
      name: 'clock',
      events: ['definitionChanged']
    },
    {
      name: 'clustering',
      events: ['clusterEvent']
    },
    {
      name: 'entities',
      events: ['collectionChanged']
    }
  ],
  'mouse-events': [
    'mousedown',
    'mouseup',
    'click',
    'clickout',
    'dblclick',
    'mousemove',
    'mouseover',
    'mouseout'
  ]
}
