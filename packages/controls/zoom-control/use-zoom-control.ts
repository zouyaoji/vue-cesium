import { CameraObj, VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { flyToCamera } from '@vue-cesium/utils/cesium-helpers'
import { $, getInstanceListener } from '@vue-cesium/utils/private/vm'
import { ref } from 'vue'
import { VcTooltip } from '@vue-cesium/ui'

export default function (props, { emit }, vcInstance: VcComponentInternalInstance, $services) {
  // state
  const zoomInTooltipRef = ref<typeof VcTooltip>(null)
  const zoomOutTooltipRef = ref<typeof VcTooltip>(null)
  const resetTooltipRef = ref<typeof VcTooltip>(null)

  const zoomIn = () => {
    zoom(1 / props.zoomAmount)
  }

  const zoomOut = () => {
    zoom(props.zoomAmount)
  }

  const zoom = relativeAmount => {
    $(zoomInTooltipRef)?.hide()
    $(zoomOutTooltipRef)?.hide()

    const { Cartesian3, defined, IntersectionTests, Ray, SceneMode } = Cesium
    const { viewer } = $services
    if (defined(viewer)) {
      const scene = viewer.scene
      const sscc = scene.screenSpaceCameraController
      // do not zoom if it is disabled
      if (!sscc.enableInputs || !sscc.enableZoom) {
        return
      }
      // TODO
      if (scene.mode === SceneMode.COLUMBUS_VIEW && !sscc.enableTranslate) {
        return
      }

      const camera = scene.camera
      let orientation

      switch (scene.mode) {
        case SceneMode.MORPHING: {
          break
        }
        case SceneMode.SCENE2D: {
          camera.zoomIn(camera.positionCartographic.height * (1 - relativeAmount))
          break
        }
        default: {
          let focus

          if (defined(viewer.trackedEntity)) {
            focus = new Cesium.Cartesian3()
          } else {
            focus = getCameraFocus(viewer)
          }

          if (!Cesium.defined(focus)) {
            // Camera direction is not pointing at the globe, so use the ellipsoid horizon point as
            // the focal point.
            const ray = new Ray(
              camera.worldToCameraCoordinatesPoint(scene.globe.ellipsoid.cartographicToCartesian(camera.positionCartographic)),
              camera.directionWC
            )
            focus = IntersectionTests.grazingAltitudeLocation(ray, scene.globe.ellipsoid)

            orientation = {
              heading: camera.heading,
              pitch: camera.pitch,
              roll: camera.roll
            }
          } else {
            orientation = {
              direction: camera.direction,
              up: camera.up
            }
          }
          const cartesian3Scratch = new Cartesian3()
          const direction = Cartesian3.subtract(camera.position, focus, cartesian3Scratch)
          const movementVector = Cartesian3.multiplyByScalar(direction, relativeAmount, direction)
          const endPosition = Cartesian3.add(focus, movementVector, focus)
          const type = relativeAmount < 1 ? 'zoomIn' : 'zoomOut'
          const listener = getInstanceListener(vcInstance, 'zoomEvt')
          listener && emit('zoomEvt', {
            type: type,
            camera: viewer.camera,
            status: 'start'
          })
          if (Cesium.defined(viewer.trackedEntity) || scene.mode === SceneMode.COLUMBUS_VIEW) {
            // sometimes flyTo does not work (jumps to wrong position) so just set the position without any animation
            // do not use flyTo when tracking an entity because during animatiuon the position of the entity may change
            camera.position = endPosition
          } else {
            camera.flyTo({
              destination: endPosition,
              orientation: orientation,
              duration: props.duration,
              convert: false,
              complete: () => {
                listener && emit('zoomEvt', {
                  type: type,
                  camera: viewer.camera,
                  status: 'complete'
                })
              },
              cancel: () => {
                listener && emit('zoomEvt', {
                  type: type,
                  camera: viewer.camera,
                  status: 'cancel'
                })
              }
            })
          }
        }
      }
    }
  }

  const zoomReset = () => {
    $(resetTooltipRef)?.hide()
    const { viewer } = $services
    const scene = viewer.scene
    const sscc = scene.screenSpaceCameraController
    if (!sscc.enableInputs) {
      return
    }

    if (Cesium.defined(viewer.trackedEntity)) {
      // when tracking do not reset to default view but to default view of tracked entity
      const trackedEntity = viewer.trackedEntity
      viewer.trackedEntity = undefined
      viewer.trackedEntity = trackedEntity
    } else {
      const listener = getInstanceListener(vcInstance, 'zoomEvt')
      // reset to a default position or view defined in the options
      listener && emit('zoomEvt', {
        type: 'zoomReset',
        camera: viewer.camera,
        status: 'start'
      })

      const complete = () => {
        listener && emit('zoomEvt', {
          type: 'zoomReset',
          camera: viewer.camera,
          status: 'complete'
        })
      }
      const cancel = () => {
        listener && emit('zoomEvt', {
          type: 'zoomReset',
          camera: viewer.camera,
          status: 'cancel'
        })
      }

      const resetView: CameraObj = props.defaultResetView
      const options = {
        duration: props.durationReset,
        complete: complete,
        cancel: cancel
      }
      flyToCamera(viewer, resetView, options)
    }
  }

  const getCameraFocus = scene => {
    const { defined, Ellipsoid, IntersectionTests, Ray } = Cesium
    const ray = new Ray(scene.camera.positionWC, scene.camera.directionWC)
    const intersections = IntersectionTests.rayEllipsoid(ray, Ellipsoid.WGS84)
    if (defined(intersections)) {
      return Ray.getPoint(ray, intersections.start)
    }
    // Camera direction is not pointing at the globe, so use the ellipsoid horizon point as
    // the focal point.
    return IntersectionTests.grazingAltitudeLocation(ray, Ellipsoid.WGS84)
  }

  return {
    zoomIn,
    zoomOut,
    zoomReset,
    zoomInTooltipRef,
    zoomOutTooltipRef,
    resetTooltipRef
  }
}
