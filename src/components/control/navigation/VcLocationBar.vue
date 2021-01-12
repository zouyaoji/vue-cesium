<template>
  <button @click="toggleUseProjection" class="vc-legend vc-bar-location" type="button">
    <template v-if="!mouseCoords.useProjection">
      <div class="vc-section">
        <span>{{ $vc.lang.navigation.legend.lon }}</span>
        <span>{{ mouseCoords.longitude }}</span>
      </div>
      <div class="vc-section">
        <span>{{ $vc.lang.navigation.legend.lat }}</span>
        <span>{{ mouseCoords.latitude }}</span>
      </div>
    </template>
    <template v-else>
      <div class="vc-section-short">
        <span>{{ $vc.lang.navigation.legend.zone }}</span>
        <span>{{ mouseCoords.utmZone }}</span>
      </div>
      <div class="vc-section">
        <span>{{ $vc.lang.navigation.legend.e }}</span>
        <span>{{ mouseCoords.east }}</span>
      </div>
      <div class="vc-section">
        <span>{{ $vc.lang.navigation.legend.n }}</span>
        <span>{{ mouseCoords.north }}</span>
      </div>
    </template>
    <div class="vc-section-long" v-if="mouseCoords.elevation">
      <span>{{ $vc.lang.navigation.legend.elev }}</span>
      <span>{{ mouseCoords.elevation }}</span>
    </div>
    <div class="vc-section-long" v-if="cameraHeight < 20000000">
      <span>{{ $vc.lang.navigation.legend.cameraHeight }}</span>
      <span>{{ cameraHeight }}</span>
    </div>
  </button>
</template>

<script>
import '../../../assets/styles/components/legend.scss'
export default {
  name: 'vc-bar-location',
  data () {
    return {
      cameraHeight: 0
    }
  },
  props: {
    showUtmZone: {
      type: Boolean,
      default: true
    },
    mouseCoords: Object
  },
  mounted () {
    this.$parent.createPromise.then(({ Cesium, viewer }) => {
      this.viewer = viewer
      this.lastMouseX = -1
      this.lastMouseY = -1
      this.viewer._element.addEventListener('mousemove', this.onMouseMove, false)
      this.viewer._element.addEventListener('touchmove', this.onMouseMove, false)
      this.cameraHeight = this.viewer.camera.positionCartographic.height.toFixed(2)
      this.viewer.camera.changed.addEventListener(() => {
        this.cameraHeight = this.viewer.camera.positionCartographic.height.toFixed(2)
      })
      extend()
    })
  },
  methods: {
    toggleUseProjection () {
      this.mouseCoords.toggleUseProjection()
    },
    onMouseMove (event) {
      const { Cartesian2 } = Cesium

      const clientX = event.type === 'mousemove' ? event.clientX : event.changedTouches[0].clientX
      const clientY = event.type === 'mousemove' ? event.clientY : event.changedTouches[0].clientY
      if (clientX === this.lastMouseX && clientY === this.lastMouseY) {
        return
      }

      this.lastMouseX = clientX
      this.lastMouseY = clientY

      if (this.viewer) {
        const rect = this.viewer._element.getBoundingClientRect()
        const position = new Cartesian2(clientX - rect.left, clientY - rect.top)
        this.mouseCoords.updateCoordinatesFromCesium(this.viewer, position)
      }
    }
  },
  destroyed () {
    this.viewer._element.removeEventListener('mousemove', this.onMouseMove, false)
    this.viewer._element.removeEventListener('touchmove', this.onMouseMove, false)
  }
}

const scratchArray = []
const scratchSphereIntersectionResult = {
  start: 0.0,
  stop: 0.0
}

const scratchV0 = {}
const scratchV1 = {}
const scratchV2 = {}
const scratchResult = {}
function extend () {
  const {
    Globe,
    GlobeSurfaceTile,
    BoundingSphere,
    defaultValue,
    Cartesian3,
    defined,
    DeveloperError,
    IntersectionTests,
    SceneMode
  } = Cesium
  Globe.prototype.pickTriangle =
    Globe.prototype.pickTriangle ||
    function (ray, scene, cullBackFaces, result) {
      // >>includeStart('debug', pragmas.debug);
      if (!defined(ray)) {
        throw new DeveloperError('ray is required')
      }
      if (!defined(scene)) {
        throw new DeveloperError('scene is required')
      }
      // >>includeEnd('debug');

      cullBackFaces = defaultValue(cullBackFaces, true)

      const mode = scene.mode
      const projection = scene.mapProjection

      const sphereIntersections = scratchArray
      sphereIntersections.length = 0

      const tilesToRender = this._surface._tilesToRender
      let length = tilesToRender.length

      let tile
      let i

      for (i = 0; i < length; ++i) {
        tile = tilesToRender[i]
        const surfaceTile = tile.data

        if (!defined(surfaceTile)) {
          continue
        }

        const boundingVolume = surfaceTile.pickBoundingSphere
        if (mode !== SceneMode.SCENE3D) {
          BoundingSphere.fromRectangleWithHeights2D(
            tile.rectangle,
            projection,
            surfaceTile.minimumHeight,
            surfaceTile.maximumHeight,
            boundingVolume
          )
          Cartesian3.fromElements(
            boundingVolume.center.z,
            boundingVolume.center.x,
            boundingVolume.center.y,
            boundingVolume.center
          )
        } else {
          BoundingSphere.clone(surfaceTile.boundingSphere3D, boundingVolume)
        }

        const boundingSphereIntersection = IntersectionTests.raySphere(ray, boundingVolume, scratchSphereIntersectionResult)
        if (defined(boundingSphereIntersection)) {
          sphereIntersections.push(tile)
        }
      }

      sphereIntersections.sort(createComparePickTileFunction(ray.origin))

      let intersection
      length = sphereIntersections.length
      for (i = 0; i < length; ++i) {
        intersection = sphereIntersections[i].data.pickTriangle(ray, scene.mode, scene.mapProjection, cullBackFaces, result)
        if (defined(intersection)) {
          intersection.tile = sphereIntersections[i]
          break
        }
      }

      return intersection
    }

  GlobeSurfaceTile.prototype.pickTriangle =
    GlobeSurfaceTile.prototype.pickTriangle ||
    function (ray, mode, projection, cullBackFaces) {
      const mesh = this.renderedMesh
      if (!defined(mesh)) {
        return undefined
      }

      const vertices = mesh.vertices
      const indices = mesh.indices
      const encoding = mesh.encoding

      const length = indices.length
      for (let i = 0; i < length; i += 3) {
        const i0 = indices[i]
        const i1 = indices[i + 1]
        const i2 = indices[i + 2]

        const v0 = getPosition(encoding, mode, projection, vertices, i0, scratchV0)
        const v1 = getPosition(encoding, mode, projection, vertices, i1, scratchV1)
        const v2 = getPosition(encoding, mode, projection, vertices, i2, scratchV2)

        const intersection = IntersectionTests.rayTriangle(ray, v0, v1, v2, cullBackFaces, scratchResult)
        if (defined(intersection)) {
          return {
            intersection: intersection,
            v0: v0,
            v1: v1,
            v2: v2
          }
        }
      }

      return undefined
    }
}

function createComparePickTileFunction (rayOrigin) {
  const { BoundingSphere } = Cesium
  return function (a, b) {
    const aDist = BoundingSphere.distanceSquaredTo(a.data.pickBoundingSphere, rayOrigin)
    const bDist = BoundingSphere.distanceSquaredTo(b.data.pickBoundingSphere, rayOrigin)

    return aDist - bDist
  }
}

function getPosition (encoding, mode, projection, vertices, index, result) {
  encoding.decodePosition(vertices, index, result)
  const { Cartesian3, defined, SceneMode } = Cesium
  if (defined(mode) && mode !== SceneMode.SCENE3D) {
    const ellipsoid = projection.ellipsoid
    const positionCart = ellipsoid.cartesianToCartographic(result)
    projection.project(positionCart, result)
    Cartesian3.fromElements(result.z, result.x, result.y, result)
  }

  return result
}
</script>
