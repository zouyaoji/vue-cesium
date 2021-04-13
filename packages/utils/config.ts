const hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol'
export interface InstallOptions {
  cesiumPath?: string
  accessToken?: string
  lang?: any
  i18n?: (...args: any[]) => string
  scriptPromise?: Promise<unknown>
  pickScreenSpaceEventHandler?: Cesium.ScreenSpaceEventHandler
  viewerScreenSpaceEventHandler?: Cesium.ScreenSpaceEventHandler
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

export { getConfig, setConfig, vcKey }
