/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-10-01 23:14:21
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\tianditu\terrain.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance, PropType } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders, useVueCesium } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { getInstanceListener } from '@vue-cesium/utils/private/vm'

export default defineComponent({
  name: 'VcProviderTerrainTianditu',
  props: {
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
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'readyPromise'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'GeoTerrainProvider'
    const providersState = useProviders(props, ctx, instance)
    const vc = useVueCesium()
    let $script
    // methods
    instance.createCesiumObject = async () => {
      return new Promise((resolve, reject) => {
        $script = document.createElement('script')
        global.document.body.appendChild($script)
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
      terrainProvider.readyPromise.then(() => {
        const listener = getInstanceListener(instance, 'readyPromise')
        listener && ctx.emit('readyPromise', terrainProvider, vc?.viewer, instance.proxy)
      })
      vc && (vc.viewer.terrainProvider = terrainProvider)
      $script?.parentNode.removeChild($script)
      return true
    }
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})
