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

      let clientX = event.type === 'mousemove' ? event.clientX : event.changedTouches[0].clientX
      let clientY = event.type === 'mousemove' ? event.clientY : event.changedTouches[0].clientY
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

var scratchArray = []
var scratchSphereIntersectionResult = {
  start: 0.0,
  stop: 0.0
}

var scratchV0 = {}
var scratchV1 = {}
var scratchV2 = {}
var scratchResult = {}
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

      var mode = scene.mode
      var projection = scene.mapProjection

      var sphereIntersections = scratchArray
      sphereIntersections.length = 0

      var tilesToRender = this._surface._tilesToRender
      var length = tilesToRender.length

      var tile
      var i

      for (i = 0; i < length; ++i) {
        tile = tilesToRender[i]
        var surfaceTile = tile.data

        if (!defined(surfaceTile)) {
          continue
        }

        var boundingVolume = surfaceTile.pickBoundingSphere
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

        var boundingSphereIntersection = IntersectionTests.raySphere(ray, boundingVolume, scratchSphereIntersectionResult)
        if (defined(boundingSphereIntersection)) {
          sphereIntersections.push(tile)
        }
      }

      sphereIntersections.sort(createComparePickTileFunction(ray.origin))

      var intersection
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
      var mesh = this.renderedMesh
      if (!defined(mesh)) {
        return undefined
      }

      var vertices = mesh.vertices
      var indices = mesh.indices
      var encoding = mesh.encoding

      var length = indices.length
      for (var i = 0; i < length; i += 3) {
        var i0 = indices[i]
        var i1 = indices[i + 1]
        var i2 = indices[i + 2]

        var v0 = getPosition(encoding, mode, projection, vertices, i0, scratchV0)
        var v1 = getPosition(encoding, mode, projection, vertices, i1, scratchV1)
        var v2 = getPosition(encoding, mode, projection, vertices, i2, scratchV2)

        var intersection = IntersectionTests.rayTriangle(ray, v0, v1, v2, cullBackFaces, scratchResult)
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
    var aDist = BoundingSphere.distanceSquaredTo(a.data.pickBoundingSphere, rayOrigin)
    var bDist = BoundingSphere.distanceSquaredTo(b.data.pickBoundingSphere, rayOrigin)

    return aDist - bDist
  }
}

function getPosition (encoding, mode, projection, vertices, index, result) {
  encoding.decodePosition(vertices, index, result)
  const { Cartesian3, defined, SceneMode } = Cesium
  if (defined(mode) && mode !== SceneMode.SCENE3D) {
    var ellipsoid = projection.ellipsoid
    var positionCart = ellipsoid.cartesianToCartographic(result)
    projection.project(positionCart, result)
    Cartesian3.fromElements(result.z, result.x, result.y, result)
  }

  return result
}
</script>
