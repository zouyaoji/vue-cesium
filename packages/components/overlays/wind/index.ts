/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-28 13:42:09
 * @LastEditTime: 2022-03-09 23:31:53
 * @LastEditors: zouyaoji
 * @Description: from 3D-Wind-Field - https://github.com/RaymanNg/3D-Wind-Field
 * @FilePath: \vue-cesium@next\packages\components\overlays\wind\index.ts
 */
import type { PropType, WatchStopHandle } from 'vue'
import { useCommon } from '@vue-cesium/composables'
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { computed, createCommentVNode, defineComponent, getCurrentInstance, onUnmounted, watch } from 'vue'
import ParticleSystem from './particleSystem'
import { viewRectangleToLonLatRange } from './util'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'
import { ParticleSystemOptions, VcWindData, ViewerParameters } from './types'
import { makeCartesian2 } from '@vue-cesium/utils/cesium-helpers'
import { regularGrid } from './grid/regular'

export const windmapOverlayProps = {
  show: {
    type: Boolean,
    default: true
  },
  data: {
    type: Object as PropType<VcWindData>,
    required: true
  },
  options: {
    type: Object as PropType<ParticleSystemOptions>,
    default: () =>
      ({
        maxParticles: 64 * 64,
        particleHeight: 100.0,
        fadeOpacity: 0.996,
        dropRate: 0.003,
        dropRateBump: 0.01,
        speedFactor: 1.0,
        lineWidth: 4.0
      } as ParticleSystemOptions)
  },
  viewerParameters: Object as PropType<ViewerParameters>
}
export default defineComponent({
  name: 'VcOverlayWindmap',
  props: windmapOverlayProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcOverlayHtml'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }

    const { $services } = commonState
    let viewerParameters: ViewerParameters
    let globeBoundingSphere: Cesium.BoundingSphere
    let primitiveCollection: Cesium.PrimitiveCollection
    let grid

    // computed
    const particleSystemOptions = computed<ParticleSystemOptions>(() => {
      // make sure maxParticles is exactly the square of particlesTextureSize
      const particlesTextureSize = Math.ceil(Math.sqrt(props.options.maxParticles))
      const maxParticles = particlesTextureSize * particlesTextureSize
      return {
        particlesTextureSize: particlesTextureSize,
        maxParticles: maxParticles,
        particleHeight: props.options.particleHeight,
        fadeOpacity: props.options.fadeOpacity,
        dropRate: props.options.dropRate,
        dropRateBump: props.options.dropRateBump,
        speedFactor: props.options.speedFactor,
        lineWidth: props.options.lineWidth
      }
    })

    // watcch
    let unwatchFns: Array<WatchStopHandle> = []
    unwatchFns.push(
      watch(
        () => props.show,
        val => {
          primitiveCollection.show = val
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.data,
        val => {
          ;(instance.proxy as VcComponentPublicInstance).reload()
        }
      )
    )

    unwatchFns.push(
      watch(
        () => particleSystemOptions.value,
        val => {
          const particleSystem = instance.cesiumObject as ParticleSystem
          if (!particleSystem) return
          particleSystem.applyParticleSystemOptions(val)
        },
        {
          deep: true
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.viewerParameters,
        val => {
          updateViewerParameters()
          const particleSystem = instance.cesiumObject as ParticleSystem
          particleSystem.applyViewerParameters(viewerParameters)
        },
        {
          deep: true
        }
      )
    )

    // methods
    instance.createCesiumObject = async () => {
      const { viewer } = $services
      primitiveCollection = new Cesium.PrimitiveCollection()
      // use a smaller earth radius to make sure distance to camera > 0
      globeBoundingSphere = new Cesium.BoundingSphere(Cesium.Cartesian3.ZERO, 0.99 * 6378137.0)
      viewerParameters = {
        lonRange: new Cesium.Cartesian2(),
        latRange: new Cesium.Cartesian2(),
        pixelSize: 0.0
      }
      const sequenceLon = { start: props.data.lon.array[0], delta: props.data.lon.delta, size: props.data.lon.array.length }
      const sequenceLat = { start: props.data.lat.array[0], delta: props.data.lat.delta, size: props.data.lat.array.length }
      grid = regularGrid(sequenceLon, sequenceLat)
      updateViewerParameters()
      return new ParticleSystem((viewer.scene as any).context, props.data, particleSystemOptions.value, viewerParameters)
    }

    instance.mount = async () => {
      const { viewer } = $services
      viewer.scene.primitives.add(primitiveCollection)
      const scene = viewer.scene
      const camera = scene.camera
      addPrimitives()
      camera.moveStart.addEventListener(moveStartListener)
      camera.moveEnd.addEventListener(moveEndListener)
      window.addEventListener('resize', resizeListener)
      scene.preRender.addEventListener(preRenderListener)
      return true
    }

    instance.unmount = async () => {
      removePrimitives()
      const { viewer } = $services
      const scene = viewer.scene
      const camera = scene.camera
      removePrimitives()
      viewer.scene.primitives.remove(primitiveCollection)
      camera.moveStart.removeEventListener(moveStartListener)
      camera.moveEnd.removeEventListener(moveEndListener)
      window.removeEventListener('resize', resizeListener)
      scene.preRender.removeEventListener(preRenderListener)
      return true
    }

    const addPrimitives = () => {
      const particleSystem = instance.cesiumObject as ParticleSystem

      // the order of primitives.add() should respect the dependency of primitives
      primitiveCollection.add(particleSystem.particlesComputing.primitives.calculateSpeed)
      primitiveCollection.add(particleSystem.particlesComputing.primitives.updatePosition)
      primitiveCollection.add(particleSystem.particlesComputing.primitives.postProcessingPosition)

      primitiveCollection.add(particleSystem.particlesRendering.primitives.segments)
      primitiveCollection.add(particleSystem.particlesRendering.primitives.trails)
      primitiveCollection.add(particleSystem.particlesRendering.primitives.screen)
    }

    const removePrimitives = () => {
      const particleSystem = instance.cesiumObject as ParticleSystem
      primitiveCollection.remove(particleSystem.particlesComputing.primitives.calculateSpeed)
      primitiveCollection.remove(particleSystem.particlesComputing.primitives.updatePosition)
      primitiveCollection.remove(particleSystem.particlesComputing.primitives.postProcessingPosition)

      primitiveCollection.remove(particleSystem.particlesRendering.primitives.segments)
      primitiveCollection.remove(particleSystem.particlesRendering.primitives.trails)
      primitiveCollection.remove(particleSystem.particlesRendering.primitives.screen)
    }

    const moveStartListener = () => {
      primitiveCollection.show = false
    }

    const moveEndListener = () => {
      updateViewerParameters()
      const particleSystem = instance.cesiumObject as ParticleSystem
      particleSystem.applyViewerParameters(viewerParameters)
      primitiveCollection.show = true
    }

    let resized = false
    const resizeListener = () => {
      resized = true
      primitiveCollection.show = false
      primitiveCollection.removeAll()
    }

    const preRenderListener = () => {
      if (resized) {
        const { viewer } = $services
        const scene = viewer.scene
        const particleSystem = instance.cesiumObject as ParticleSystem
        particleSystem.canvasResize((scene as any).context)
        resized = false
        addPrimitives()
        primitiveCollection.show = true
      }
    }

    const updateViewerParameters = () => {
      const { viewer } = $services
      const scene = viewer.scene
      const camera = scene.camera

      if (
        Cesium.defined(props.viewerParameters) &&
        Cesium.defined(props.viewerParameters.latRange) &&
        Cesium.defined(props.viewerParameters.lonRange)
      ) {
        viewerParameters.lonRange = makeCartesian2(props.viewerParameters.lonRange)
        viewerParameters.latRange = makeCartesian2(props.viewerParameters.latRange)
      } else {
        const viewRectangle = camera.computeViewRectangle(scene.globe.ellipsoid)
        const lonLatRange = viewRectangleToLonLatRange(viewRectangle)
        ;(viewerParameters.lonRange as Cesium.Cartesian2).x = lonLatRange.lon.min
        ;(viewerParameters.lonRange as Cesium.Cartesian2).y = lonLatRange.lon.max
        ;(viewerParameters.latRange as Cesium.Cartesian2).x = lonLatRange.lat.min
        ;(viewerParameters.latRange as Cesium.Cartesian2).y = lonLatRange.lat.max
      }

      const pixelSize =
        Cesium.defined(props.viewerParameters) && Cesium.defined(props.viewerParameters.pixelSize)
          ? props.viewerParameters.pixelSize
          : camera.getPixelSize(globeBoundingSphere, scene.drawingBufferWidth, scene.drawingBufferHeight)

      if (pixelSize > 0) {
        viewerParameters.pixelSize = pixelSize
      }
    }

    const getNearestUV = (longitude: number, latitude: number) => {
      const index = grid.closest(longitude, latitude)
      if (Cesium.defined(index)) {
        return [props.data.U.array[index], props.data.V.array[index]]
      }
      return undefined
    }

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns = []
    })

    // expose public methods
    Object.assign(instance.proxy, {
      getNearestUV
    })

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export interface VcOverlayWindmapProps {
  /**
   * Specify wind map data.
   */
  data: VcWindData
  /**
   * Specify whether to display the wind map.
   * Default value: true
   */
  show?: boolean
  /**
   * Specify the rendering parameters of the wind map.
   */
  options?: ParticleSystemOptions
  /**
   * Specify the wind field display range.
   */
  viewerParameters?: ViewerParameters
  /**
   * Triggers before the VcOverlayWindmap is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcOverlayWindmap is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcOverlayWindmap is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export interface VcOverlayWindmapRef extends VcComponentPublicInstance<VcOverlayWindmapProps> {
  /**
   * Get near UV values.
   * @param longitude longitude (degrees)
   * @param latitude latitude (degrees)
   */
  getNearestUV: (longitude: number, latitude: number) => [number, number]
}
