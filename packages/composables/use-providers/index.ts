/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-06-01 18:06:23
 * @LastEditTime: 2022-03-11 11:36:37
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\use-providers\index.ts
 */
import { getInstanceListener, getVcParentInstance } from '@vue-cesium/utils/private/vm'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import * as coordtransform from '@vue-cesium/utils/coordtransform'
import useCommon from '../use-common'
import type { SetupContext } from 'vue'
import type { ProviderEmits } from '@vue-cesium/utils/emits'
import { VcLayerImageryRef } from '@vue-cesium/components'

export default function (props, ctx: SetupContext<ProviderEmits>, vcInstance: VcComponentInternalInstance) {
  // state
  vcInstance.cesiumEvents = ['errorEvent']
  const commonState = useCommon(props, ctx, vcInstance)
  if (commonState === void 0) {
    return
  }

  const { emit } = ctx

  // methods
  vcInstance.mount = async () => {
    const { viewer } = commonState.$services
    if (vcInstance.cesiumClass.indexOf('ImageryProvider') !== -1) {
      vcInstance.renderByParent = true
      const imageryProvider = vcInstance.cesiumObject as Cesium.ImageryProvider
      imageryProvider?.readyPromise?.then(() => {
        const listener = getInstanceListener(vcInstance, 'readyPromise')
        listener && emit('readyPromise', imageryProvider, viewer, vcInstance.proxy as VcLayerImageryRef)
      })

      if (props.projectionTransforms && props.projectionTransforms.from !== props.projectionTransforms.to) {
        const ignoreTransforms =
          vcInstance.proxy?.$options.name === 'VcImageryProviderBaidu' ||
          (vcInstance.proxy?.$options.name === 'VcImageryProviderTianditu' && (imageryProvider as any)._epsgCode === '4490')
        if (!ignoreTransforms) {
          const { WebMercatorTilingScheme, Cartographic, Math: CesiumMath } = Cesium
          const tilingScheme = new WebMercatorTilingScheme()
          const projection = tilingScheme.projection
          const nativeProject = projection.project
          const nativeUnProject = projection.unproject
          let projectMethods
          let unprojectMethods
          if (props.projectionTransforms.to.toUpperCase() === 'WGS84') {
            projectMethods = 'wgs84togcj02'
            unprojectMethods = 'gcj02towgs84'
          } else if (props.projectionTransforms.to.toUpperCase() === 'GCJ02') {
            projectMethods = 'gcj02towgs84'
            unprojectMethods = 'wgs84togcj02'
          }

          if (projectMethods && unprojectMethods) {
            projection.project = function (cartographic, result) {
              result = result || new Cesium.Cartesian3()
              result = coordtransform[projectMethods](CesiumMath.toDegrees(cartographic.longitude), CesiumMath.toDegrees(cartographic.latitude))
              return nativeProject.call(this, new Cartographic(CesiumMath.toRadians(result?.[0]), CesiumMath.toRadians(result?.[1])))
            }
            projection.unproject = function (cartesian2, result) {
              result = result || new Cartographic()
              const cartographic = nativeUnProject.call(this, cartesian2)
              result = coordtransform[unprojectMethods](CesiumMath.toDegrees(cartographic.longitude), CesiumMath.toDegrees(cartographic.latitude))
              return new Cartographic(CesiumMath.toRadians(result?.[0]), CesiumMath.toRadians(result?.[1]))
            }
            ;(imageryProvider as any)._tilingScheme = tilingScheme
          }
        }
      }
      const parentVM = getVcParentInstance(vcInstance).proxy as VcLayerImageryRef
      return parentVM && parentVM.__updateProvider?.(imageryProvider)
    } else {
      const terrainProvider = vcInstance.cesiumObject as Cesium.TerrainProvider
      terrainProvider.readyPromise.then(() => {
        const listener = getInstanceListener(vcInstance, 'readyPromise')
        listener && emit('readyPromise', terrainProvider, viewer, vcInstance.proxy as VcLayerImageryRef)
      })
      viewer.terrainProvider = terrainProvider
      return true
    }
  }
  vcInstance.unmount = async () => {
    const { viewer } = commonState.$services
    if (vcInstance.cesiumClass.indexOf('ImageryProvider') !== -1) {
      const parentVM = getVcParentInstance(vcInstance).proxy as VcLayerImageryRef
      return parentVM && parentVM.__updateProvider?.(undefined)
    } else {
      const terrainProvider = new Cesium.EllipsoidTerrainProvider()
      terrainProvider.readyPromise.then(() => {
        const listener = getInstanceListener(vcInstance, 'readyPromise')
        listener && emit('readyPromise', terrainProvider, viewer, vcInstance.proxy as VcLayerImageryRef)
      })
      viewer.terrainProvider = terrainProvider
      return true
    }
  }

  return {
    transformProps: commonState.transformProps,
    unwatchFns: commonState.unwatchFns,
    setPropsWatcher: commonState.setPropsWatcher
  }
}
