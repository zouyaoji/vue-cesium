import { getInstanceListener, getVcParentInstance } from '@vue-cesium/utils/private/vm'
import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import * as coordtransform from '@vue-cesium/utils/coordtransform'
import useCommon from '../use-common'

export default function (props, ctx, vcInstance: VcComponentInternalInstance) {
  // state
  vcInstance.cesiumEvents = ['errorEvent']
  const commonState = useCommon(props, ctx, vcInstance)

  // methods
  vcInstance.mount = async () => {
    const { viewer } = commonState.$services
    if (vcInstance.cesiumClass.indexOf('ImageryProvider') !== -1) {
      vcInstance.renderByParent = true
      const imageryProvider = vcInstance.cesiumObject as Cesium.ImageryProvider
      imageryProvider.readyPromise.then(() => {
        const listener = getInstanceListener(vcInstance, 'readyPromise')
        listener && ctx.emit('readyPromise', imageryProvider, viewer, vcInstance.proxy)
      })

      if (props.projectionTransforms && props.projectionTransforms.from !== props.projectionTransforms.to) {
        const ignoreTransforms =
          vcInstance.proxy.$options.name === 'VcProviderImageryBaidumap' ||
          (vcInstance.proxy.$options.name === 'VcProviderImageryTianditu' && (imageryProvider as any)._epsgCode === '4490')
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
              return nativeProject.call(this, new Cartographic(CesiumMath.toRadians(result[0]), CesiumMath.toRadians(result[1])))
            }
            projection.unproject = function (cartesian2, result) {
              result = result || new Cartographic()
              const cartographic = nativeUnProject.call(this, cartesian2)
              result = coordtransform[unprojectMethods](CesiumMath.toDegrees(cartographic.longitude), CesiumMath.toDegrees(cartographic.latitude))
              return new Cartographic(CesiumMath.toRadians(result[0]), CesiumMath.toRadians(result[1]))
            }
            ; (imageryProvider as any)._tilingScheme = tilingScheme
          }
        }
      }
      const parentVM = getVcParentInstance(vcInstance).proxy as VcComponentPublicInstance
      return parentVM && parentVM.__updateProvider(imageryProvider)
    } else {
      const terrainProvider = vcInstance.cesiumObject as Cesium.TerrainProvider
      terrainProvider.readyPromise.then(() => {
        const listener = getInstanceListener(vcInstance, 'readyPromise')
        listener && ctx.emit('readyPromise', terrainProvider, viewer, vcInstance.proxy)
      })
      viewer.terrainProvider = terrainProvider
      return true
    }
  }
  vcInstance.unmount = async () => {
    const { viewer } = commonState.$services
    if (vcInstance.cesiumClass.indexOf('ImageryProvider') !== -1) {
      const parentVM = getVcParentInstance(vcInstance).proxy as VcComponentPublicInstance
      return parentVM && parentVM.__updateProvider(undefined)
    } else {
      const terrainProvider = new Cesium.EllipsoidTerrainProvider()
      terrainProvider.readyPromise.then(() => {
        const listener = getInstanceListener(vcInstance, 'readyPromise')
        listener && ctx.emit('readyPromise', terrainProvider, viewer, vcInstance.proxy)
      })
      viewer.terrainProvider = terrainProvider
      return true
    }
  }

  // expose public methods
  Object.assign(vcInstance.proxy, {
    createPromise: commonState.createPromise,
    load: commonState.load,
    unload: commonState.unload,
    reload: commonState.reload,
    cesiumObject: vcInstance.cesiumObject,
    getCesiumObject: () => vcInstance.cesiumObject
  })

  return {
    transformProps: commonState.transformProps,
    unwatchFns: commonState.unwatchFns,
    setPropsWatcher: commonState.setPropsWatcher
  }
}
