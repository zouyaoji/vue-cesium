export const Events = {
  // Vue组件
  'cesium-viewer': [
    'selectedEntityChanged',
    'trackedEntityChanged'
  ],
  'cesium-3dtileset': [
    'allTilesLoaded',
    'initialTilesLoaded',
    'loadProgress',
    'tileFailed',
    'tileLoad',
    'tileUnload',
    'tileVisible'
  ]
}

export const ImageryLayerEvents = {
  // Vue组件
  'imagery-layer': [
    'errorEvent'
  ]
}

export const CollectionEvents = [
  {
    // viewer.imageryLayers
    'name': 'imageryLayers',
    'events': [
      'layerAdded',
      'layerMoved',
      'layerRemoved',
      'layerShownOrHidden'
    ]
  },
  {
    // viewer.dataSources
    'name': 'dataSources',
    'events': [
      'dataSourceAdded',
      'dataSourceMoved',
      'dataSourceRemoved'
    ]
  },
  {
    // viewer.entities
    'name': 'entities',
    'events': [
      'collectionChanged'
    ]
  },
  {
    // viewer.scene
    'name': 'scene',
    'events': [
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
    'name': 'camera',
    'events': [
      'changed',
      'moveEnd',
      'moveStart'
    ]
  },
  {
    // viewer.clock
    'name': 'clock',
    'events': [
      'onStop',
      'onTick'
    ]
  },
  {
    // viewer.terrainProvider
    'name': 'terrainProvider',
    'events': [
      'errorEvent'
    ]
  }
]
