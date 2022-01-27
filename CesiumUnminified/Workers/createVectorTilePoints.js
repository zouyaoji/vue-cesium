/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

define([
  './AttributeCompression-1f6679e1',
  './Matrix2-91d5b6af',
  './ComponentDatatype-f194c48b',
  './createTaskProcessorWorker',
  './RuntimeError-346a3079',
  './when-4bbc8319',
  './WebGLConstants-1c8239cc'
], function (AttributeCompression, Matrix2, ComponentDatatype, createTaskProcessorWorker, RuntimeError, when, WebGLConstants) {
  'use strict'

  var maxShort = 32767

  var scratchBVCartographic = new Matrix2.Cartographic()
  var scratchEncodedPosition = new Matrix2.Cartesian3()

  var scratchRectangle = new Matrix2.Rectangle()
  var scratchEllipsoid = new Matrix2.Ellipsoid()
  var scratchMinMaxHeights = {
    min: undefined,
    max: undefined
  }

  function unpackBuffer(packedBuffer) {
    packedBuffer = new Float64Array(packedBuffer)

    var offset = 0
    scratchMinMaxHeights.min = packedBuffer[offset++]
    scratchMinMaxHeights.max = packedBuffer[offset++]

    Matrix2.Rectangle.unpack(packedBuffer, offset, scratchRectangle)
    offset += Matrix2.Rectangle.packedLength

    Matrix2.Ellipsoid.unpack(packedBuffer, offset, scratchEllipsoid)
  }

  function createVectorTilePoints(parameters, transferableObjects) {
    var positions = new Uint16Array(parameters.positions)

    unpackBuffer(parameters.packedBuffer)
    var rectangle = scratchRectangle
    var ellipsoid = scratchEllipsoid
    var minimumHeight = scratchMinMaxHeights.min
    var maximumHeight = scratchMinMaxHeights.max

    var positionsLength = positions.length / 3
    var uBuffer = positions.subarray(0, positionsLength)
    var vBuffer = positions.subarray(positionsLength, 2 * positionsLength)
    var heightBuffer = positions.subarray(2 * positionsLength, 3 * positionsLength)
    AttributeCompression.AttributeCompression.zigZagDeltaDecode(uBuffer, vBuffer, heightBuffer)

    var decoded = new Float64Array(positions.length)
    for (var i = 0; i < positionsLength; ++i) {
      var u = uBuffer[i]
      var v = vBuffer[i]
      var h = heightBuffer[i]

      var lon = ComponentDatatype.CesiumMath.lerp(rectangle.west, rectangle.east, u / maxShort)
      var lat = ComponentDatatype.CesiumMath.lerp(rectangle.south, rectangle.north, v / maxShort)
      var alt = ComponentDatatype.CesiumMath.lerp(minimumHeight, maximumHeight, h / maxShort)

      var cartographic = Matrix2.Cartographic.fromRadians(lon, lat, alt, scratchBVCartographic)
      var decodedPosition = ellipsoid.cartographicToCartesian(cartographic, scratchEncodedPosition)
      Matrix2.Cartesian3.pack(decodedPosition, decoded, i * 3)
    }

    transferableObjects.push(decoded.buffer)

    return {
      positions: decoded.buffer
    }
  }
  var createVectorTilePoints$1 = createTaskProcessorWorker(createVectorTilePoints)

  return createVectorTilePoints$1
})
//# sourceMappingURL=createVectorTilePoints.js.map
