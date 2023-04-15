/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2023-04-08 14:09:32
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\packages\components\providers\tianditu\terrain.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance, PropType } from 'vue'
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { useProviders, useVueCesium } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { getInstanceListener } from '@vue-cesium/utils/private/vm'
import { providerEmits } from '@vue-cesium/utils/emits'

export const tiandituTerrainProviderProps = {
  url: {
    type: String,
    default: 'https://{s}.tianditu.gov.cn/'
  },
  subdomains: {
    type: Array as PropType<Array<string>>,
    default: () => ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7']
  },
  pluginPath: {
    type: String,
    default: 'https://api.tianditu.gov.cn/cdn/plugins/cesium/cesiumTdt.js'
  },
  dataType: {
    type: String,
    default: 'int',
    validator: (v: string) => ['int', 'float'].includes(v)
  },
  tileType: {
    type: String,
    default: 'heightmap',
    validator: (v: string) => ['heightmap', 'quantized-mesh'].includes(v)
  },
  token: String
}
export default defineComponent({
  name: 'VcTerrainProviderTianditu',
  props: tiandituTerrainProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'GeoTerrainProvider'
    const providersState = useProviders(props, ctx, instance)

    if (undefined === providersState) {
      return
    }

    const { emit } = ctx
    const vc = useVueCesium()
    let $script
    // methods
    instance.createCesiumObject = async () => {
      return new Promise((resolve, reject) => {
        $script = document.createElement('script')
        document.body.appendChild($script)
        $script.src = props.pluginPath
        $script.onload = () => {
          if (providersState.unwatchFns.length === 0) {
            providersState.setPropsWatcher(true)
          }
          const terrainUrls: Array<string> = []

          for (let i = 0; i < props.subdomains.length; i++) {
            const url = props.url.replace('{s}', props.subdomains[i]) + 'mapservice/swdx?tk=' + props.token
            terrainUrls.push(url)
          }

          resolve(
            new Cesium.GeoTerrainProvider({
              urls: terrainUrls
            })
          )
        }
      })
    }
    instance.unmount = async () => {
      const terrainProvider = new Cesium.EllipsoidTerrainProvider()
      terrainProvider?.readyPromise?.then(() => {
        const listener = getInstanceListener(instance, 'readyPromise')
        listener && emit('readyPromise', terrainProvider, vc?.viewer, instance.proxy as VcComponentPublicInstance)
      })
      vc && (vc.viewer.terrainProvider = terrainProvider)
      $script?.parentNode.removeChild($script)
      return true
    }
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcTerrainProviderTiandituProps = {
  /**
   * Specify the service address.
   * Default value: https://{s}.tianditu.gov.cn
   */
  url?: string
  /**
   * Specify the polling subdomain name.
   * Default value: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7']
   */
  subdomains?: Array<string>
  /**
   * Specify the address of the Tiantu terrain plugin library.
   * Default value: https://api.tianditu.gov.cn/cdn/plugins/cesium/cesiumTdt.js
   */
  pluginPath?: string
  /**
   * Specify the data type.
   * Default value: init
   */
  dataType?: 'int' | 'float'
  /**
   * Specify the tile type.
   * Default value: heightmap
   */
  tileType?: 'heightmap' | 'quantized-mesh'
  /**
   * Specify the Tiantu service secret key.
   */
  token?: string
  /**
   * Triggers before the VcTerrainProviderTianditu is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcTerrainProviderTianditu is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcTerrainProviderTianditu is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the terrain provider encounters an asynchronous error.
   */
  onErrorEvent?: (evt: Cesium.TileProviderError) => void
  /**
   * Triggers when the provider is ready for use.
   */
  onReadyPromise?: (evt: boolean, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) => void
}

export type VcTerrainProviderTiandituRef = VcComponentPublicInstance<VcTerrainProviderTiandituProps>
