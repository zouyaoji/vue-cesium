const hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol'
export interface InstallOptions {
  cesiumPath?: string
  accessToken?: string
  lang?: any
  i18n?: (...args: any[]) => string
  scriptPromise?: Promise<unknown>
  pickScreenSpaceEventHandler?: Cesium.ScreenSpaceEventHandler
  viewerScreenSpaceEventHandler?: Cesium.ScreenSpaceEventHandler
  measurementMouseHandler?: Cesium.ScreenSpaceEventHandler
  viewerUnloadingPromise?: Promise<boolean>
}

let $VueCesium = {} as InstallOptions

const setConfig = (option: InstallOptions): void => {
  $VueCesium = option
}

const getConfig = (key: keyof InstallOptions): unknown => {
  return $VueCesium[key]
}

const vcKey = hasSymbol ? Symbol('VueCesium') : 'VueCesium'

const fabKey = hasSymbol ? Symbol('_vc_f_') : '_vc_f_'

const measurementKey = hasSymbol ? Symbol('_vc_measurement_') : '_vc_measurement_'

export { getConfig, setConfig, vcKey, fabKey, measurementKey }
