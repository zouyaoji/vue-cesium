<template>
  <div class="zoomControl">
    <ul class="list">
      <li>
        <button :title="$vc.lang.navigation.zoomCotrol.zoomIn" @click="zoomIn" class="increase" type="button">
          <vc-icon-svg name="increase"></vc-icon-svg>
        </button>
      </li>
      <li>
        <button :title="$vc.lang.navigation.zoomCotrol.zoomReset" @click="zoomReset" class="refresh" type="button">
          <vc-icon-svg name="refresh"></vc-icon-svg>
        </button>
      </li>
      <li>
        <button :title="$vc.lang.navigation.zoomCotrol.zoomOut" @click="zoomOut" class="decrease" type="button">
          <vc-icon-svg name="decrease"></vc-icon-svg>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import './icon/increase'
import './icon/decrease'
import './icon/refresh'
import '../../../assets/styles/components/zoomControl.scss'
import VcIconSvg from './icon/VcIconSvg.vue'
export default {
  name: 'vc-zoomControl',
  components: {
    VcIconSvg
  },
  props: {
    defaultResetView: Object,
    zoomAmount: Number
  },
  mounted () {
    this.$parent.createPromise.then(({ Cesium, viewer, cesiumObject }) => {
      this.viewer = viewer
    })
  },
  methods: {
    zoomIn () {
      this.zoom(1 / this.zoomAmount)
    },
    zoomOut () {
      this.zoom(this.zoomAmount)
    },
    zoom (relativeAmount) {
      const { Cartesian3, defined, IntersectionTests, Ray, SceneMode } = Cesium
      if (defined(this.viewer)) {
        const scene = this.viewer.scene
        const sscc = scene.screenSpaceCameraController
        // do not zoom if it is disabled
        if (!sscc.enableInputs || !sscc.enableZoom) {
          return
        }
        // TODO
        //            if(scene.mode == SceneMode.COLUMBUS_VIEW && !sscc.enableTranslate) {
        //                return;
        //            }

        var camera = scene.camera
        var orientation

        switch (scene.mode) {
          case SceneMode.MORPHING:
            break
          case SceneMode.SCENE2D:
            camera.zoomIn(camera.positionCartographic.height * (1 - relativeAmount))
            break
          default:
            let focus

            if (defined(this.viewer.trackedEntity)) {
              focus = new Cesium.Cartesian3()
            } else {
              focus = this.getCameraFocus(this.viewer, false)
            }

            if (!Cesium.defined(focus)) {
              // Camera direction is not pointing at the globe, so use the ellipsoid horizon point as
              // the focal point.
              const ray = new Ray(
                camera.worldToCameraCoordinatesPoint(
                  scene.globe.ellipsoid.cartographicToCartesian(camera.positionCartographic)
                ),
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
            const movementVector = Cartesian3.multiplyByScalar(
              direction,
              relativeAmount,
              direction
            )
            const endPosition = Cartesian3.add(focus, movementVector, focus)

            if (
              Cesium.defined(this.viewer.trackedEntity) ||
              scene.mode === SceneMode.COLUMBUS_VIEW
            ) {
              // sometimes flyTo does not work (jumps to wrong position) so just set the position without any animation
              // do not use flyTo when tracking an entity because during animatiuon the position of the entity may change
              camera.position = endPosition
            } else {
              camera.flyTo({
                destination: endPosition,
                orientation: orientation,
                duration: 0.5,
                convert: false
              })
            }
        }
      }
    },
    zoomReset () {
      const scene = this.viewer.scene
      const sscc = scene.screenSpaceCameraController
      if (!sscc.enableInputs) {
        return
      }
      const { Cartesian3, Math: CesiumMath, Rectangle } = Cesium
      const camera = scene.camera

      if (Cesium.defined(this.viewer.trackedEntity)) {
        // when tracking do not reset to default view but to default view of tracked entity
        const trackedEntity = this.viewer.trackedEntity
        this.viewer.trackedEntity = undefined
        this.viewer.trackedEntity = trackedEntity
      } else {
        // reset to a default position or view defined in the options
        const resetView = this.defaultResetView
        if (resetView && resetView.lng) {
          camera.flyTo({
            destination: Cartesian3.fromDegrees(resetView.lng, resetView.lat, resetView.height)
          })
        } else if (resetView && resetView.west) {
          try {
            const rectangle = Rectangle.fromDegrees(resetView.west, resetView.south, resetView.east, resetView.north)
            Rectangle.validate(rectangle)
            camera.flyTo({
              destination: rectangle,
              orientation: {
                heading: CesiumMath.toRadians(5.729578)
              }
            })
          } catch (e) {
            console.error(`[C_PKG_FULLNAME] ERROR: options.defaultResetView Cesium rectangle is  invalid!`)
          }
        } else {
          camera.flyTo({
            destination: Cartesian3.fromDegrees(105, 29.999999999999993, 19059568.497290563)
          })
        }
      }
    },
    getCameraFocus (scene) {
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

  }

}
</script>
