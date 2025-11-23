import type { VcColor, VcComponentInternalInstance } from '@vue-cesium/utils/types'
import type { PropType, WatchStopHandle } from 'vue'
import { useCommon } from '@vue-cesium/composables'
import { Viewshed } from '@vue-cesium/shared'
import fragmentShader from '@vue-cesium/shared/shaders/Viewshed'
import { makeCartesian3, makeColor } from '@vue-cesium/utils/cesium-helpers'
import { scene } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
import { createCommentVNode, defineComponent, getCurrentInstance, onUnmounted, toRaw, watch } from 'vue'

export const viewshedProps = {
  ...scene,
  fovH: {
    type: Number,
    default: 90
  },
  fovV: {
    type: Number,
    default: 60
  },
  offsetHeight: {
    type: Number,
    default: 1.8
  },
  visibleColor: {
    type: [Object, Array, String] as PropType<VcColor>,
    default: '#00ff00'
  },
  invisibleColor: {
    type: [Object, Array, String] as PropType<VcColor>,
    default: '#ff0000'
  },
  showGridLine: {
    type: Boolean,
    default: true
  },
  lineColor: {
    type: [Object, Array, String] as PropType<VcColor>,
    default: 'rgba(255,255,255,0.4)'
  },
  faceColor: {
    type: [Object, Array, String] as PropType<VcColor>,
    default: 'rgba(255,255,255,0.1)'
  },
  show: {
    type: Boolean,
    default: true
  },
  startPosition: {
    type: Object as PropType<Cesium.Cartesian3>
  },
  endPosition: {
    type: Object as PropType<Cesium.Cartesian3>
  },
  fragmentShader: {
    type: String
  },
  uniforms: Object
}

export default defineComponent({
  name: 'VcViewshed',
  props: viewshedProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcViewshed'
    // state
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }

    const unwatchFns: Array<WatchStopHandle> = []
    let attachedViewshedStage: Cesium.PostProcessStage

    unwatchFns.push(
      watch(
        [() => props.startPosition, () => props.endPosition],
        ([newStartPosition, newEndPosition]) => {
          if (!instance.mounted) {
            return
          }

          updateViewshed(makeCartesian3(toRaw(newStartPosition)), makeCartesian3(toRaw(newEndPosition)))
        },
        {
          deep: true
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.fovH,
        (val) => {
          if (!instance.mounted) {
            return
          }

          const viewshed = instance.cesiumObject as Viewshed
          viewshed.fovH = val
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.fovV,
        (val) => {
          if (!instance.mounted) {
            return
          }

          const viewshed = instance.cesiumObject as Viewshed
          viewshed.fovV = val
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.fovV,
        (val) => {
          if (!instance.mounted) {
            return
          }

          const viewshed = instance.cesiumObject as Viewshed
          viewshed.fovV = val
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.offsetHeight,
        (val) => {
          if (!instance.mounted) {
            return
          }

          const viewshed = instance.cesiumObject as Viewshed
          viewshed.offsetHeight = val
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.visibleColor,
        (val) => {
          if (!instance.mounted) {
            return
          }

          const viewshed = instance.cesiumObject as Viewshed
          viewshed.visibleColor = makeColor(val) as Cesium.Color
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.invisibleColor,
        (val) => {
          if (!instance.mounted) {
            return
          }

          const viewshed = instance.cesiumObject as Viewshed
          viewshed.invisibleColor = makeColor(val) as Cesium.Color
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.showGridLine,
        (val) => {
          if (!instance.mounted) {
            return
          }

          const viewshed = instance.cesiumObject as Viewshed
          viewshed.showGridLine = val
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.show,
        (val) => {
          if (!instance.mounted) {
            return
          }

          const viewshed = instance.cesiumObject as Viewshed
          viewshed.enabled = val
        }
      )
    )

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns.length = 0
    })

    // methods
    instance.createCesiumObject = async () => {
      const viewer = commonState.$services.viewer
      const viewshed = new Viewshed(viewer.scene, {
        fovH: 120,
        fovV: 60,
        offsetHeight: 1.8,
        visibleColor: makeColor(props.visibleColor),
        invisibleColor: makeColor(props.invisibleColor),
        showGridLine: props.showGridLine
      })
      ;(viewshed._viewshedShadowMap as any).cascadesEnabled = false
      viewshed._viewshedShadowMap.softShadows = false
      viewshed._viewshedShadowMap.normalOffset = false
      ;(viewshed._viewshedShadowMap as any).fromLightSource = false
      viewshed._viewshedShadowMap.enabled = false
      viewshed.fovH = Cesium.Math.toRadians(props.fovH)
      viewshed.fovV = Cesium.Math.toRadians(props.fovV)
      viewshed.offsetHeight = props.offsetHeight
      viewshed.showGridLine = props.showGridLine
      viewshed.enabled = props.show
      viewshed.lineColor = makeColor(props.lineColor) as Cesium.Color
      viewshed.faceColor = makeColor(props.faceColor) as Cesium.Color
      return viewshed
    }

    instance.mount = async () => {
      const viewer = commonState.$services.viewer
      const viewshed = instance.cesiumObject as Viewshed
      const { Cartesian4, PostProcessStage, Cartesian2 } = Cesium

      const webgl2 = commonState.$services.viewer.scene.context?.webgl2
      let shaderSourceText = fragmentShader
      if (!webgl2) {
        shaderSourceText = shaderSourceText.replace('in vec2 v_textureCoordinates;', 'varying vec2 v_textureCoordinates;')
        shaderSourceText = shaderSourceText.replace(/texture\(/g, 'texture2D(')
        shaderSourceText = shaderSourceText.replace(/out_FragColor/g, 'gl_FragColor')
      }

      updateViewshed(makeCartesian3(toRaw(props.startPosition)), makeCartesian3(toRaw(props.endPosition)))
      attachedViewshedStage = new PostProcessStage({
        fragmentShader: props.fragmentShader || shaderSourceText,
        uniforms: props.uniforms || {
          u_color1() {
            return viewshed.visibleColor
          },
          u_color2() {
            return viewshed.invisibleColor
          },
          u_isShed() {
            return viewshed.shadowMap.enabled
          },
          u_radius() {
            return viewshed.lightCamera.frustum.far
          },
          shadowMap_depthTexture() {
            return viewshed.shadowMap.enabled ? viewshed.shadowMap._shadowMapTexture : (viewer.scene as any).context.defaultTexture
          },
          shadowMap_matrix() {
            return viewshed.shadowMap._shadowMapMatrix
          },
          shadowMap_cascadeSplits() {
            return (viewshed.shadowMap as any)._cascadeSplits
          },
          shadowMap_cascadeMatrices() {
            return (viewshed.shadowMap as any)._cascadeMatrices
          },
          shadowMap_lightDirectionEC() {
            return (viewshed.shadowMap as any)._lightDirectionEC
          },
          shadowMap_lightPositionEC() {
            return viewshed.shadowMap._lightPositionEC
          },
          shadowMap_cascadeDistances() {
            return (viewshed.shadowMap as any)._cascadeDistances
          },
          shadowMap_normalOffsetScaleDistanceMaxDistanceAndDarkness() {
            const e = viewshed.shadowMap._pointBias
            return Cartesian4.fromElements(e.normalOffsetScale, viewshed.shadowMap._distance, viewshed.shadowMap.maximumDistance, 0, new Cartesian4())
          },
          shadowMap_texelSizeDepthBiasAndNormalShadingSmooth() {
            const e = viewshed.shadowMap._pointBias
            const t = new Cartesian2()
            t.x = 1 / viewshed.shadowMap._textureSize.x
            t.y = 1 / viewshed.shadowMap._textureSize.y
            return Cartesian4.fromElements(t.x, t.y, e.depthBias, e.normalShadingSmooth, new Cartesian4())
          },
          czzj() {
            return (viewshed.lightCamera.frustum as Cesium.PerspectiveFrustum).fov
          },
          spzj() {
            return (viewshed.lightCamera.frustum as Cesium.PerspectiveFrustum).fov
          },
          mixNum() {
            return 0.5
          },
          shadowMap_lightUp() {
            return viewshed.lightCamera.up
          },
          shadowMap_lightDir() {
            return viewshed.lightCamera.direction
          },
          shadowMap_lightRight() {
            return viewshed.lightCamera.right
          }
        }
      })

      viewer.scene.postProcessStages.add(attachedViewshedStage)
      const primitives = commonState.$services.primitives
      return primitives && primitives.add(viewshed)
    }

    instance.unmount = async () => {
      const viewer = commonState.$services.viewer
      attachedViewshedStage && viewer.scene.postProcessStages.remove(attachedViewshedStage)

      const primitives = commonState.$services.primitives
      const viewshed = instance.cesiumObject as Viewshed
      return primitives && primitives.remove(viewshed)
    }

    const updateViewshed = (startPosition, endPosition) => {
      const viewshed = instance.cesiumObject as Viewshed

      const { Cartesian3 } = Cesium
      let diffrence = Cartesian3.subtract(endPosition, startPosition, new Cartesian3())
      const magnitudeSquared = Cartesian3.magnitudeSquared(diffrence)
      const distance = Cartesian3.distance(endPosition, startPosition)

      if (magnitudeSquared < 0.01 || viewshed.frustum.near > distance) {
        viewshed.enabled = false
      }
      else {
        viewshed.enabled = true
        diffrence = Cartesian3.normalize(diffrence, diffrence)
        const up = Cartesian3.normalize(endPosition, new Cartesian3())

        viewshed.setView({
          destination: startPosition,
          orientation: {
            direction: diffrence,
            up
          }
        })
        viewshed.frustum.far = Math.max(distance, 1.1)
      }
    }

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})
