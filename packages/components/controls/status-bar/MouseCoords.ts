import { debounce } from 'lodash-unified'
import prettifyCoordinates from './prettifyCoordinates'
import prettifyProjection from './prettifyProjection'
import EarthGravityModel1996 from './EarthGravityModel1996'
interface MouseCoords {
  proj4Projection: string
  projectionUnits: string
  proj4longlat: string
  lastHeightSamplePosition: Cesium.Cartographic
  accurateSamplingDebounceTime: number
  tileRequestInFlight: any
  elevation: string
  utmZone: string
  latitude: string
  longitude: string
  north: string
  east: string
  geoidModel: EarthGravityModel1996
  useProjection: boolean
  debounceSampleAccurateHeight: any
  decimal: number
  rangeType: number
}
interface MouseCoordsOption {
  gridFileUrl: string
  proj4Projection: string
  projectionUnits: string
  proj4longlat: string
  decimal: number
  rangeType: number
}
class MouseCoords {
  constructor(options: MouseCoordsOption) {
    const { Cartographic, knockout } = Cesium
    const gridFileUrl = options.gridFileUrl
    gridFileUrl && (this.geoidModel = new EarthGravityModel1996(gridFileUrl))

    this.proj4Projection = options.proj4Projection
    this.projectionUnits = options.projectionUnits
    this.proj4longlat = options.proj4longlat

    this.lastHeightSamplePosition = new Cartographic()
    this.accurateSamplingDebounceTime = 250
    this.tileRequestInFlight = undefined

    this.elevation = ''
    this.utmZone = ''
    this.latitude = ''
    this.longitude = ''
    this.north = ''
    this.east = ''
    this.useProjection = false
    this.debounceSampleAccurateHeight = debounce(this.sampleAccurateHeight, this.accurateSamplingDebounceTime)
    this.decimal = options.decimal || 5
    this.rangeType = options.rangeType || 0

    knockout.track(this, ['elevation', 'utmZone', 'latitude', 'longitude', 'north', 'east', 'useProjection'])
  }

  toggleUseProjection() {
    this.useProjection = !this.useProjection
  }

  updateCoordinatesFromCesium(viewer, position) {
    const { Cartographic, defined, EllipsoidTerrainProvider, Intersections2D, SceneMode } = Cesium
    const scene = viewer.scene
    const camera = scene.camera
    const pickRay = camera.getPickRay(position)
    const globe = scene.globe
    const pickedTriangle = globe.pickTriangle(pickRay, scene)
    if (defined(pickedTriangle)) {
      // Get a fast, accurate-ish height every time the mouse moves.
      const ellipsoid = globe.ellipsoid

      const v0 = ellipsoid.cartesianToCartographic(pickedTriangle.v0)
      const v1 = ellipsoid.cartesianToCartographic(pickedTriangle.v1)
      const v2 = ellipsoid.cartesianToCartographic(pickedTriangle.v2)
      const intersection = ellipsoid.cartesianToCartographic(
        scene.mode === SceneMode.SCENE3D ? pickedTriangle.intersection : scene.globe.pick(pickRay, scene)
      )
      let errorBar

      if (globe.terrainProvider instanceof EllipsoidTerrainProvider) {
        intersection.height = undefined
      } else {
        const barycentric = Intersections2D.computeBarycentricCoordinates(
          intersection.longitude,
          intersection.latitude,
          v0.longitude,
          v0.latitude,
          v1.longitude,
          v1.latitude,
          v2.longitude,
          v2.latitude
        )

        if (barycentric.x >= -1e-15 && barycentric.y >= -1e-15 && barycentric.z >= -1e-15) {
          const height = barycentric.x * v0.height + barycentric.y * v1.height + barycentric.z * v2.height
          intersection.height = height
        }
        const geometricError = globe.terrainProvider.getLevelMaximumGeometricError(pickedTriangle.tile.level)
        const approximateHeight = intersection.height
        const minHeight = Math.max(pickedTriangle.tile.data.tileBoundingRegion.minimumHeight, approximateHeight - geometricError)
        const maxHeight = Math.min(pickedTriangle.tile.data.tileBoundingRegion.maximumHeight, approximateHeight + geometricError)
        const minHeightGeoid = minHeight - (this.geoidModel ? this.geoidModel.minimumHeight : 0.0)
        const maxHeightGeoid = maxHeight + (this.geoidModel ? this.geoidModel.maximumHeight : 0.0)
        errorBar = Math.max(Math.abs(approximateHeight - minHeightGeoid), Math.abs(maxHeightGeoid - approximateHeight))
      }
      Cartographic.clone(intersection, this.lastHeightSamplePosition)
      const terrainProvider = globe.terrainProvider

      this.cartographicToFields(intersection, errorBar)
      if (!(terrainProvider instanceof EllipsoidTerrainProvider)) {
        this.debounceSampleAccurateHeight(terrainProvider, intersection)
      }
    } else {
      this.elevation = ''
      this.utmZone = ''
      this.latitude = ''
      this.longitude = ''
      this.north = ''
      this.east = ''
    }
  }

  cartographicToFields(coordinates, errorBar?) {
    const { Math: CesiumMath } = Cesium
    const latitude = CesiumMath.toDegrees(coordinates.latitude)
    const longitude = CesiumMath.toDegrees(coordinates.longitude)

    if (this.useProjection) {
      const prettyProjection = prettifyProjection(longitude, latitude, this.proj4Projection, this.proj4longlat, this.projectionUnits)
      this.utmZone = prettyProjection.utmZone
      this.north = prettyProjection.north
      this.east = prettyProjection.east
    }

    const prettyCoordinate = prettifyCoordinates(longitude, latitude, {
      height: coordinates.height,
      errorBar: errorBar,
      decimal: this.decimal,
      rangeType: this.rangeType
    })

    this.latitude = prettyCoordinate.latitude
    this.longitude = prettyCoordinate.longitude
    this.elevation = prettyCoordinate.elevation
  }

  sampleAccurateHeight(terrainProvider, position) {
    const { Cartographic, sampleTerrainMostDetailed, when } = Cesium
    if (this.tileRequestInFlight) {
      // A tile request is already in flight, so reschedule for later.
      this.debounceSampleAccurateHeight.cancel()
      this.debounceSampleAccurateHeight(terrainProvider, position)
      return
    }

    const positionWithHeight = Cartographic.clone(position)

    const geoidHeightPromise = this.geoidModel ? this.geoidModel.getHeight(position.longitude, position.latitude) : undefined
    const terrainPromise = sampleTerrainMostDetailed(terrainProvider, [positionWithHeight])
    this.tileRequestInFlight = Promise.all([geoidHeightPromise, terrainPromise])
      .then(result => {
        const geoidHeight = result[0] || 0.0
        this.tileRequestInFlight = undefined
        if (Cartographic.equals(position, this.lastHeightSamplePosition)) {
          position.height = positionWithHeight.height - geoidHeight
          this.cartographicToFields(position)
        } else {
          // Mouse moved since we started this request, so the result isn't useful.  Try again next time.
        }
      })
      .catch(() => {
        this.tileRequestInFlight = undefined
      })
  }
}

const scratchArray: Array<any> = []
const scratchSphereIntersectionResult = {
  start: 0.0,
  stop: 0.0
}
const scratchV0 = {}
const scratchV1 = {}
const scratchV2 = {}

export function extendForMouseCoords() {
  const { Globe, GlobeSurfaceTile, BoundingSphere, defaultValue, Cartesian3, defined, DeveloperError, IntersectionTests, SceneMode } = Cesium
  Globe.prototype.pickTriangle =
    Globe.prototype.pickTriangle ||
    function (this, ray, scene, cullBackFaces, result) {
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
          BoundingSphere.fromRectangleWithHeights2D(tile.rectangle, projection, surfaceTile.minimumHeight, surfaceTile.maximumHeight, boundingVolume)
          Cartesian3.fromElements(boundingVolume.center.z, boundingVolume.center.x, boundingVolume.center.y, boundingVolume.center)
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
    function (this: any, ray, mode, projection, cullBackFaces) {
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

        const intersection = IntersectionTests.rayTriangle(ray, v0, v1, v2, cullBackFaces, new Cartesian3())
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

function createComparePickTileFunction(rayOrigin) {
  const { BoundingSphere } = Cesium
  return function (a, b) {
    const aDist = BoundingSphere.distanceSquaredTo(a.data.pickBoundingSphere, rayOrigin)
    const bDist = BoundingSphere.distanceSquaredTo(b.data.pickBoundingSphere, rayOrigin)

    return aDist - bDist
  }
}

function getPosition(encoding, mode, projection, vertices, index, result) {
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

export default MouseCoords
