/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-09-23 13:36:07
 * @LastEditTime: 2022-09-23 14:59:21
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\controls\selection-indicator\util.ts
 */
const applicableRectangleScratch = undefined
export function pickImageryHelper(scene, pickedLocation, pickFeatures, callback) {
  const { defined, Rectangle, Math: CesiumMath } = Cesium
  // Find the terrain tile containing the picked location.
  const tilesToRender = scene.globe._surface._tilesToRender
  let pickedTile

  for (let textureIndex = 0; !defined(pickedTile) && textureIndex < tilesToRender.length; ++textureIndex) {
    const tile = tilesToRender[textureIndex]
    if (Rectangle.contains(tile.rectangle, pickedLocation)) {
      pickedTile = tile
    }
  }

  if (!defined(pickedTile)) {
    return
  }

  // Pick against all attached imagery tiles containing the pickedLocation.
  const imageryTiles = pickedTile.data.imagery

  for (let i = imageryTiles.length - 1; i >= 0; --i) {
    const terrainImagery = imageryTiles[i]
    const imagery = terrainImagery.readyImagery
    if (!defined(imagery)) {
      continue
    }
    const provider = imagery.imageryLayer.imageryProvider
    if (pickFeatures && !defined(provider.pickFeatures)) {
      continue
    }

    if (!Rectangle.contains(imagery.rectangle, pickedLocation)) {
      continue
    }

    // If this imagery came from a parent, it may not be applicable to its entire rectangle.
    // Check the textureCoordinateRectangle.
    const applicableRectangle = applicableRectangleScratch || new Rectangle()

    const epsilon = 1 / 1024 // 1/4 of a pixel in a typical 256x256 tile.
    applicableRectangle.west = CesiumMath.lerp(
      pickedTile.rectangle.west,
      pickedTile.rectangle.east,
      terrainImagery.textureCoordinateRectangle.x - epsilon
    )
    applicableRectangle.east = CesiumMath.lerp(
      pickedTile.rectangle.west,
      pickedTile.rectangle.east,
      terrainImagery.textureCoordinateRectangle.z + epsilon
    )
    applicableRectangle.south = CesiumMath.lerp(
      pickedTile.rectangle.south,
      pickedTile.rectangle.north,
      terrainImagery.textureCoordinateRectangle.y - epsilon
    )
    applicableRectangle.north = CesiumMath.lerp(
      pickedTile.rectangle.south,
      pickedTile.rectangle.north,
      terrainImagery.textureCoordinateRectangle.w + epsilon
    )
    if (!Rectangle.contains(applicableRectangle, pickedLocation)) {
      continue
    }

    callback(imagery)
  }
}

export function pickImageryLayerFeatures(ray, scene, includeImageryIds = [], excludeImageryIds = []) {
  const { defined } = Cesium
  // Find the picked location on the globe.
  const pickedPosition = scene.globe.pick(ray, scene)
  if (!defined(pickedPosition)) {
    return
  }

  const pickedLocation = scene.globe.ellipsoid.cartesianToCartographic(pickedPosition)

  const promises = []
  const imageryLayers = []

  pickImageryHelper(scene, pickedLocation, true, function (imagery) {
    if (excludeImageryIds.indexOf(imagery.imageryLayer.vcId) !== -1) {
      return
    }

    if (includeImageryIds.length && includeImageryIds.indexOf(imagery.imageryLayer.vcId) === -1) {
      return
    }

    const provider = imagery.imageryLayer.imageryProvider
    const promise = provider.pickFeatures(imagery.x, imagery.y, imagery.level, pickedLocation.longitude, pickedLocation.latitude)
    if (defined(promise)) {
      promises.push(promise)
      imageryLayers.push(imagery.imageryLayer)
    }
  })

  if (promises.length === 0) {
    return undefined
  }
  return Promise.all(promises).then(function (results) {
    const features = []
    for (let resultIndex = 0; resultIndex < results.length; ++resultIndex) {
      const result = results[resultIndex]
      const image = imageryLayers[resultIndex]
      if (defined(result) && result.length > 0) {
        for (let featureIndex = 0; featureIndex < result.length; ++featureIndex) {
          const feature = result[featureIndex]
          feature.imageryLayer = image
          // For features without a position, use the picked location.
          if (!defined(feature.position)) {
            feature.position = pickedLocation
          }
          features.push(feature)
        }
      }
    }
    return features
  })
}
