import bindEvents from '../../utils/bindEvent'
import { Events } from '../../utils/events'
import cmp from '../virtualCmp'
const coordtransform = require('coordtransform')

const methods = {
  async mount () {
    const { imageryProvider, providerContainer, projectionTransforms } = this
    imageryProvider.readyPromise.then(() => {
      const listener = this.$listeners.readyPromise
      listener && this.$emit('readyPromise', imageryProvider)
    }).otherwise(error => {
      throw new Cesium.DeveloperError(error)
    })
    if (projectionTransforms && projectionTransforms.from !== projectionTransforms.to) {
      const ignoreTransforms = this.$options.name === 'vc-provider-imagery-baidumap' ||
        (this.$options.name === 'vc-provider-imagery-tianditu' && imageryProvider._epsgCode === '4490')
      if (!ignoreTransforms) {
        const { WebMercatorTilingScheme, Cartographic, Math: CesiumMath } = Cesium
        const tilingScheme = new WebMercatorTilingScheme()
        const projection = tilingScheme.projection
        const nativeProject = projection.project
        const nativeUnProject = projection.unproject
        let projectMethods
        let unprojectMethods
        if (projectionTransforms.to.toUpperCase() === 'WGS84') {
          projectMethods = 'wgs84togcj02'
          unprojectMethods = 'gcj02towgs84'
        } else if (projectionTransforms.to.toUpperCase() === 'GCJ02') {
          projectMethods = 'gcj02towgs84'
          unprojectMethods = 'wgs84togcj02'
        }

        if (projectMethods && unprojectMethods) {
          projection.project = function (cartographic, result) {
            result = result || {}
            result = coordtransform[projectMethods](CesiumMath.toDegrees(cartographic.longitude), CesiumMath.toDegrees(cartographic.latitude))
            return nativeProject.call(this, new Cartographic(CesiumMath.toRadians(result[0]), CesiumMath.toRadians(result[1])))
          }
          projection.unproject = function (cartesian2, result) {
            result = result || {}
            const cartographic = nativeUnProject.call(this, cartesian2)
            result = coordtransform[unprojectMethods](CesiumMath.toDegrees(cartographic.longitude), CesiumMath.toDegrees(cartographic.latitude))
            return new Cartographic(CesiumMath.toRadians(result[0]), CesiumMath.toRadians(result[1]))
          }

          imageryProvider._tilingScheme = tilingScheme
        }
      }
    }

    bindEvents.call(this, imageryProvider, Events['imagery-layer-events'], true)
    return providerContainer && providerContainer.setProvider(imageryProvider)
  },
  async unmount () {
    const { imageryProvider, providerContainer } = this
    bindEvents.call(this, imageryProvider, Events['imagery-layer-events'], false)
    return providerContainer && providerContainer.setProvider(undefined)
  }
}
export default {
  mixins: [cmp],
  methods,
  stubVNode: {
    empty () {
      return this.$options.name
    }
  },
  props: {
    projectionTransforms: {
      type: Boolean | Object,
      default: false
    }
  },
  created () {
    this.renderByParent = true
    Object.defineProperties(this, {
      imageryProvider: {
        enumerable: true,
        get: () => this.cesiumObject
      },
      providerContainer: {
        enumerable: true,
        get: () => this.$services && this.$services.providerContainer
      }
    })
  }
}
