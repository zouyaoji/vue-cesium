<template>
  <vc-btn
    v-if="canRender && distanceLabel !== void 0"
    ref="rootRef"
    class="vc-distance-legend"
    :class="classes"
    :style="rootStyle"
    stack
    no-caps
  >
    <label>{{ distanceLabel }}</label>
    <div :style="barStyle" class="vc-bar"></div>
  </vc-btn>
</template>

<script lang="ts">
import { computed, CSSProperties, defineComponent, getCurrentInstance, nextTick, ref } from 'vue'
import { $, getVcParentInstance, getInstanceListener } from '@vue-cesium/utils/private/vm'
import usePosition from '@vue-cesium/composables/private/use-position'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import throttle from '@vue-cesium/utils/private/throttle'
import { useCommon } from '@vue-cesium/composables'
import defaultProps from './defaultProps'
import { VcBtn } from '@vue-cesium/ui'

export default defineComponent({
  name: 'VcDistanceLegend',
  components: { VcBtn },
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'legendDistanceEvt'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcDistanceLegend'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const rootRef = ref<typeof VcBtn>(null)
    const distanceLabel = ref(undefined)
    const positionState = usePosition(props, $services)
    const parentInstance = getVcParentInstance(instance)
    const canRender = ref(false)
    let lastLegendUpdate = 0
    const barWidth = ref(0)
    let distance = 0
    // computed
    const rootStyle = computed(() => {
      const css: CSSProperties = positionState.style.value
      css.background = props.background
      css.color = props.color

      const side = positionState.attach.value

      if ((side.bottom || side.top) && !side.left && !side.right) {
        css.left = '50%'
        css.transform = 'translate(-50%, 0)'
      }

      if ((side.left || side.right) && !side.top && !side.bottom) {
        css.top = '50%'
        css.transform = 'translate(0, -50%)'
      }
      css.width = `${props.width}px`
      return css
    })
    const barStyle = computed(() => {
      return {
        width: `${barWidth.value}px`,
        left: `${5 + (props.width + 15 - barWidth.value) / 2}px`,
        height: '2px',
        background: props.barBackground
      }
    })
    // methods
    instance.createCesiumObject = async () => {
      canRender.value = true
      distanceLabel.value = ''
      return new Promise((resolve, reject) => {
        nextTick(() => {
          const { viewer } = $services
          const viewerElement = (viewer as any)._element as HTMLElement
          viewerElement.appendChild($(rootRef)?.$el)
          resolve($(rootRef)?.$el)

          viewer.scene.postRender.addEventListener(onScenePostRender)

          viewer.viewerWidgetResized.raiseEvent({
            type: instance.cesiumClass,
            status: 'added',
            target: $(rootRef)?.$el
          })
        })
      })
    }
    instance.unmount = async () => {
      const { viewer } = $services
      viewer.scene.postRender.removeEventListener(onScenePostRender)
      const viewerElement = (viewer as any)._element as HTMLElement
      const child = instance.cesiumObject as HTMLElement
      viewerElement.contains(child) && viewerElement.removeChild(child)

      viewer.viewerWidgetResized.raiseEvent({
        type: instance.cesiumClass,
        status: 'removed',
        target: $(rootRef)?.$el
      })

      return true
    }

    const onScenePostRender = throttle(scene => {
      const { Cartesian2, defined, getTimestamp, EllipsoidGeodesic } = Cesium
      const now = getTimestamp()
      if (now < lastLegendUpdate + 250) {
        return
      }

      lastLegendUpdate = now
      const geodesic = new EllipsoidGeodesic()
      // Find the distance between two pixels at the bottom center of the screen.
      const width = scene.canvas.clientWidth
      const height = scene.canvas.clientHeight

      const left = scene.camera.getPickRay(new Cartesian2((width / 2) | 0, height - 1))
      const right = scene.camera.getPickRay(new Cartesian2((1 + width / 2) | 0, height - 1))

      const globe = scene.globe
      const leftPosition = globe.pick(left, scene)
      const rightPosition = globe.pick(right, scene)

      if (!defined(leftPosition) || !defined(rightPosition)) {
        barWidth.value = 0
        distanceLabel.value = undefined
        return
      }

      const leftCartographic = globe.ellipsoid.cartesianToCartographic(leftPosition)
      const rightCartographic = globe.ellipsoid.cartesianToCartographic(rightPosition)

      geodesic.setEndPoints(leftCartographic, rightCartographic)
      const pixelDistance = geodesic.surfaceDistance

      // Find the first distance that makes the scale bar less than 100 pixels.
      const maxBarWidth = props.width - 10
      let _distance
      for (let i = distances.length - 1; !defined(_distance) && i >= 0; --i) {
        if (distances[i] / pixelDistance < maxBarWidth) {
          _distance = distances[i]
          if (distance !== _distance) {
            distance = _distance
            const listener = getInstanceListener(instance, 'legendDistanceEvt')
            listener &&
              ctx.emit('legendDistanceEvt', {
                type: 'distanceLegend',
                distance,
                statue: 'legendChanged'
              })
          }
        }
      }

      if (defined(_distance)) {
        let label
        if (distance >= 1000) {
          label = (_distance / 1000).toString() + ' km'
        } else {
          label = _distance.toString() + ' m'
        }

        barWidth.value = (_distance / pixelDistance) | 0
        distanceLabel.value = label
      } else {
        barWidth.value = 0
        distanceLabel.value = undefined
      }
    }, 500)

    return {
      createPromise: commonState.createPromise,
      load: commonState.load,
      unload: commonState.unload,
      reload: commonState.reload,
      getCesiumObject: () => instance.cesiumObject,
      classes: positionState.classes,
      rootStyle,
      barStyle,
      canRender,
      rootRef,
      distanceLabel,
      barWidth
    }
  }
})

const distances = [
  1,
  2,
  3,
  5,
  10,
  20,
  30,
  50,
  100,
  200,
  300,
  500,
  1000,
  2000,
  3000,
  5000,
  10000,
  20000,
  30000,
  50000,
  100000,
  200000,
  300000,
  500000,
  1000000,
  2000000,
  3000000,
  5000000,
  10000000,
  20000000,
  30000000,
  50000000
]
</script>
