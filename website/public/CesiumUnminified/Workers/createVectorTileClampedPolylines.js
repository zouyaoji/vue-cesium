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
  './combine-83860057',
  './IndexDatatype-ee69f1fd',
  './ComponentDatatype-f194c48b',
  './createTaskProcessorWorker',
  './RuntimeError-346a3079',
  './when-4bbc8319',
  './WebGLConstants-1c8239cc'
], function (
  AttributeCompression,
  Matrix2,
  combine,
  IndexDatatype,
  ComponentDatatype,
  createTaskProcessorWorker,
  RuntimeError,
  when,
  WebGLConstants
) {
  'use strict'

  var MAX_SHORT = 32767
  var MITER_BREAK = Math.cos(ComponentDatatype.CesiumMath.toRadians(150.0))

  var scratchBVCartographic = new Matrix2.Cartographic()
  var scratchEncodedPosition = new Matrix2.Cartesian3()

  function decodePositions(uBuffer, vBuffer, heightBuffer, rectangle, minimumHeight, maximumHeight, ellipsoid) {
    var positionsLength = uBuffer.length
    var decodedPositions = new Float64Array(positionsLength * 3)
    for (var i = 0; i < positionsLength; ++i) {
      var u = uBuffer[i]
      var v = vBuffer[i]
      var h = heightBuffer[i]

      var lon = ComponentDatatype.CesiumMath.lerp(rectangle.west, rectangle.east, u / MAX_SHORT)
      var lat = ComponentDatatype.CesiumMath.lerp(rectangle.south, rectangle.north, v / MAX_SHORT)
      var alt = ComponentDatatype.CesiumMath.lerp(minimumHeight, maximumHeight, h / MAX_SHORT)

      var cartographic = Matrix2.Cartographic.fromRadians(lon, lat, alt, scratchBVCartographic)
      var decodedPosition = ellipsoid.cartographicToCartesian(cartographic, scratchEncodedPosition)
      Matrix2.Cartesian3.pack(decodedPosition, decodedPositions, i * 3)
    }
    return decodedPositions
  }

  function getPositionOffsets(counts) {
    var countsLength = counts.length
    var positionOffsets = new Uint32Array(countsLength + 1)
    var offset = 0
    for (var i = 0; i < countsLength; ++i) {
      positionOffsets[i] = offset
      offset += counts[i]
    }
    positionOffsets[countsLength] = offset
    return positionOffsets
  }

  var previousCompressedCartographicScratch = new Matrix2.Cartographic()
  var currentCompressedCartographicScratch = new Matrix2.Cartographic()
  function removeDuplicates(uBuffer, vBuffer, heightBuffer, counts) {
    var countsLength = counts.length
    var positionsLength = uBuffer.length
    var markRemoval = new Uint8Array(positionsLength)
    var previous = previousCompressedCartographicScratch
    var current = currentCompressedCartographicScratch
    var offset = 0
    for (var i = 0; i < countsLength; i++) {
      var count = counts[i]
      var updatedCount = count
      for (var j = 1; j < count; j++) {
        var index = offset + j
        var previousIndex = index - 1
        current.longitude = uBuffer[index]
        current.latitude = vBuffer[index]
        previous.longitude = uBuffer[previousIndex]
        previous.latitude = vBuffer[previousIndex]

        if (Matrix2.Cartographic.equals(current, previous)) {
          updatedCount--
          markRemoval[previousIndex] = 1
        }
      }
      counts[i] = updatedCount
      offset += count
    }

    var nextAvailableIndex = 0
    for (var k = 0; k < positionsLength; k++) {
      if (markRemoval[k] !== 1) {
        uBuffer[nextAvailableIndex] = uBuffer[k]
        vBuffer[nextAvailableIndex] = vBuffer[k]
        heightBuffer[nextAvailableIndex] = heightBuffer[k]
        nextAvailableIndex++
      }
    }
  }

  function VertexAttributesAndIndices(volumesCount) {
    var vertexCount = volumesCount * 8
    var vec3Floats = vertexCount * 3
    var vec4Floats = vertexCount * 4
    this.startEllipsoidNormals = new Float32Array(vec3Floats)
    this.endEllipsoidNormals = new Float32Array(vec3Floats)
    this.startPositionAndHeights = new Float32Array(vec4Floats)
    this.startFaceNormalAndVertexCornerIds = new Float32Array(vec4Floats)
    this.endPositionAndHeights = new Float32Array(vec4Floats)
    this.endFaceNormalAndHalfWidths = new Float32Array(vec4Floats)
    this.vertexBatchIds = new Uint16Array(vertexCount)

    this.indices = IndexDatatype.IndexDatatype.createTypedArray(vertexCount, 36 * volumesCount)

    this.vec3Offset = 0
    this.vec4Offset = 0
    this.batchIdOffset = 0
    this.indexOffset = 0

    this.volumeStartIndex = 0
  }

  var towardCurrScratch = new Matrix2.Cartesian3()
  var towardNextScratch = new Matrix2.Cartesian3()
  function computeMiteredNormal(previousPosition, position, nextPosition, ellipsoidSurfaceNormal, result) {
    var towardNext = Matrix2.Cartesian3.subtract(nextPosition, position, towardNextScratch)
    var towardCurr = Matrix2.Cartesian3.subtract(position, previousPosition, towardCurrScratch)
    Matrix2.Cartesian3.normalize(towardNext, towardNext)
    Matrix2.Cartesian3.normalize(towardCurr, towardCurr)

    if (Matrix2.Cartesian3.dot(towardNext, towardCurr) < MITER_BREAK) {
      towardCurr = Matrix2.Cartesian3.multiplyByScalar(towardCurr, -1.0, towardCurrScratch)
    }

    Matrix2.Cartesian3.add(towardNext, towardCurr, result)
    if (Matrix2.Cartesian3.equals(result, Matrix2.Cartesian3.ZERO)) {
      result = Matrix2.Cartesian3.subtract(previousPosition, position)
    }

    // Make sure the normal is orthogonal to the ellipsoid surface normal
    Matrix2.Cartesian3.cross(result, ellipsoidSurfaceNormal, result)
    Matrix2.Cartesian3.cross(ellipsoidSurfaceNormal, result, result)
    Matrix2.Cartesian3.normalize(result, result)
    return result
  }

  // Winding order is reversed so each segment's volume is inside-out
  //          3-----------7
  //         /|   left   /|
  //        / | 1       / |
  //       2-----------6  5  end
  //       | /         | /
  // start |/  right   |/
  //       0-----------4
  //
  var REFERENCE_INDICES = [
    0,
    2,
    6,
    0,
    6,
    4, // right
    0,
    1,
    3,
    0,
    3,
    2, // start face
    0,
    4,
    5,
    0,
    5,
    1, // bottom
    5,
    3,
    1,
    5,
    7,
    3, // left
    7,
    5,
    4,
    7,
    4,
    6, // end face
    7,
    6,
    2,
    7,
    2,
    3 // top
  ]
  var REFERENCE_INDICES_LENGTH = REFERENCE_INDICES.length

  var positionScratch = new Matrix2.Cartesian3()
  var scratchStartEllipsoidNormal = new Matrix2.Cartesian3()
  var scratchStartFaceNormal = new Matrix2.Cartesian3()
  var scratchEndEllipsoidNormal = new Matrix2.Cartesian3()
  var scratchEndFaceNormal = new Matrix2.Cartesian3()
  VertexAttributesAndIndices.prototype.addVolume = function (
    preStartRTC,
    startRTC,
    endRTC,
    postEndRTC,
    startHeight,
    endHeight,
    halfWidth,
    batchId,
    center,
    ellipsoid
  ) {
    var position = Matrix2.Cartesian3.add(startRTC, center, positionScratch)
    var startEllipsoidNormal = ellipsoid.geodeticSurfaceNormal(position, scratchStartEllipsoidNormal)
    position = Matrix2.Cartesian3.add(endRTC, center, positionScratch)
    var endEllipsoidNormal = ellipsoid.geodeticSurfaceNormal(position, scratchEndEllipsoidNormal)

    var startFaceNormal = computeMiteredNormal(preStartRTC, startRTC, endRTC, startEllipsoidNormal, scratchStartFaceNormal)
    var endFaceNormal = computeMiteredNormal(postEndRTC, endRTC, startRTC, endEllipsoidNormal, scratchEndFaceNormal)

    var startEllipsoidNormals = this.startEllipsoidNormals
    var endEllipsoidNormals = this.endEllipsoidNormals
    var startPositionAndHeights = this.startPositionAndHeights
    var startFaceNormalAndVertexCornerIds = this.startFaceNormalAndVertexCornerIds
    var endPositionAndHeights = this.endPositionAndHeights
    var endFaceNormalAndHalfWidths = this.endFaceNormalAndHalfWidths
    var vertexBatchIds = this.vertexBatchIds

    var batchIdOffset = this.batchIdOffset
    var vec3Offset = this.vec3Offset
    var vec4Offset = this.vec4Offset

    var i
    for (i = 0; i < 8; i++) {
      Matrix2.Cartesian3.pack(startEllipsoidNormal, startEllipsoidNormals, vec3Offset)
      Matrix2.Cartesian3.pack(endEllipsoidNormal, endEllipsoidNormals, vec3Offset)

      Matrix2.Cartesian3.pack(startRTC, startPositionAndHeights, vec4Offset)
      startPositionAndHeights[vec4Offset + 3] = startHeight

      Matrix2.Cartesian3.pack(endRTC, endPositionAndHeights, vec4Offset)
      endPositionAndHeights[vec4Offset + 3] = endHeight

      Matrix2.Cartesian3.pack(startFaceNormal, startFaceNormalAndVertexCornerIds, vec4Offset)
      startFaceNormalAndVertexCornerIds[vec4Offset + 3] = i

      Matrix2.Cartesian3.pack(endFaceNormal, endFaceNormalAndHalfWidths, vec4Offset)
      endFaceNormalAndHalfWidths[vec4Offset + 3] = halfWidth

      vertexBatchIds[batchIdOffset++] = batchId

      vec3Offset += 3
      vec4Offset += 4
    }

    this.batchIdOffset = batchIdOffset
    this.vec3Offset = vec3Offset
    this.vec4Offset = vec4Offset
    var indices = this.indices
    var volumeStartIndex = this.volumeStartIndex

    var indexOffset = this.indexOffset
    for (i = 0; i < REFERENCE_INDICES_LENGTH; i++) {
      indices[indexOffset + i] = REFERENCE_INDICES[i] + volumeStartIndex
    }

    this.volumeStartIndex += 8
    this.indexOffset += REFERENCE_INDICES_LENGTH
  }

  var scratchRectangle = new Matrix2.Rectangle()
  var scratchEllipsoid = new Matrix2.Ellipsoid()
  var scratchCenter = new Matrix2.Cartesian3()

  var scratchPrev = new Matrix2.Cartesian3()
  var scratchP0 = new Matrix2.Cartesian3()
  var scratchP1 = new Matrix2.Cartesian3()
  var scratchNext = new Matrix2.Cartesian3()
  function createVectorTileClampedPolylines(parameters, transferableObjects) {
    var encodedPositions = new Uint16Array(parameters.positions)
    var widths = new Uint16Array(parameters.widths)
    var counts = new Uint32Array(parameters.counts)
    var batchIds = new Uint16Array(parameters.batchIds)

    // Unpack tile decoding parameters
    var rectangle = scratchRectangle
    var ellipsoid = scratchEllipsoid
    var center = scratchCenter
    var packedBuffer = new Float64Array(parameters.packedBuffer)

    var offset = 0
    var minimumHeight = packedBuffer[offset++]
    var maximumHeight = packedBuffer[offset++]

    Matrix2.Rectangle.unpack(packedBuffer, offset, rectangle)
    offset += Matrix2.Rectangle.packedLength

    Matrix2.Ellipsoid.unpack(packedBuffer, offset, ellipsoid)
    offset += Matrix2.Ellipsoid.packedLength

    Matrix2.Cartesian3.unpack(packedBuffer, offset, center)

    var i

    // Unpack positions and generate volumes
    var positionsLength = encodedPositions.length / 3
    var uBuffer = encodedPositions.subarray(0, positionsLength)
    var vBuffer = encodedPositions.subarray(positionsLength, 2 * positionsLength)
    var heightBuffer = encodedPositions.subarray(2 * positionsLength, 3 * positionsLength)
    AttributeCompression.AttributeCompression.zigZagDeltaDecode(uBuffer, vBuffer, heightBuffer)

    removeDuplicates(uBuffer, vBuffer, heightBuffer, counts)

    // Figure out how many volumes and how many vertices there will be.
    var countsLength = counts.length
    var volumesCount = 0
    for (i = 0; i < countsLength; i++) {
      var polylinePositionCount = counts[i]
      volumesCount += polylinePositionCount - 1
    }

    var attribsAndIndices = new VertexAttributesAndIndices(volumesCount)

    var positions = decodePositions(uBuffer, vBuffer, heightBuffer, rectangle, minimumHeight, maximumHeight, ellipsoid)

    positionsLength = uBuffer.length
    var positionsRTC = new Float32Array(positionsLength * 3)
    for (i = 0; i < positionsLength; ++i) {
      positionsRTC[i * 3] = positions[i * 3] - center.x
      positionsRTC[i * 3 + 1] = positions[i * 3 + 1] - center.y
      positionsRTC[i * 3 + 2] = positions[i * 3 + 2] - center.z
    }

    var currentPositionIndex = 0
    var currentHeightIndex = 0
    for (i = 0; i < countsLength; i++) {
      var polylineVolumeCount = counts[i] - 1
      var halfWidth = widths[i] * 0.5
      var batchId = batchIds[i]
      var volumeFirstPositionIndex = currentPositionIndex
      for (var j = 0; j < polylineVolumeCount; j++) {
        var volumeStart = Matrix2.Cartesian3.unpack(positionsRTC, currentPositionIndex, scratchP0)
        var volumeEnd = Matrix2.Cartesian3.unpack(positionsRTC, currentPositionIndex + 3, scratchP1)

        var startHeight = heightBuffer[currentHeightIndex]
        var endHeight = heightBuffer[currentHeightIndex + 1]
        startHeight = ComponentDatatype.CesiumMath.lerp(minimumHeight, maximumHeight, startHeight / MAX_SHORT)
        endHeight = ComponentDatatype.CesiumMath.lerp(minimumHeight, maximumHeight, endHeight / MAX_SHORT)

        currentHeightIndex++

        var preStart = scratchPrev
        var postEnd = scratchNext
        if (j === 0) {
          // Check if this volume is like a loop
          var finalPositionIndex = volumeFirstPositionIndex + polylineVolumeCount * 3
          var finalPosition = Matrix2.Cartesian3.unpack(positionsRTC, finalPositionIndex, scratchPrev)
          if (Matrix2.Cartesian3.equals(finalPosition, volumeStart)) {
            Matrix2.Cartesian3.unpack(positionsRTC, finalPositionIndex - 3, preStart)
          } else {
            var offsetPastStart = Matrix2.Cartesian3.subtract(volumeStart, volumeEnd, scratchPrev)
            preStart = Matrix2.Cartesian3.add(offsetPastStart, volumeStart, scratchPrev)
          }
        } else {
          Matrix2.Cartesian3.unpack(positionsRTC, currentPositionIndex - 3, preStart)
        }

        if (j === polylineVolumeCount - 1) {
          // Check if this volume is like a loop
          var firstPosition = Matrix2.Cartesian3.unpack(positionsRTC, volumeFirstPositionIndex, scratchNext)
          if (Matrix2.Cartesian3.equals(firstPosition, volumeEnd)) {
            Matrix2.Cartesian3.unpack(positionsRTC, volumeFirstPositionIndex + 3, postEnd)
          } else {
            var offsetPastEnd = Matrix2.Cartesian3.subtract(volumeEnd, volumeStart, scratchNext)
            postEnd = Matrix2.Cartesian3.add(offsetPastEnd, volumeEnd, scratchNext)
          }
        } else {
          Matrix2.Cartesian3.unpack(positionsRTC, currentPositionIndex + 6, postEnd)
        }

        attribsAndIndices.addVolume(preStart, volumeStart, volumeEnd, postEnd, startHeight, endHeight, halfWidth, batchId, center, ellipsoid)

        currentPositionIndex += 3
      }
      currentPositionIndex += 3
      currentHeightIndex++
    }

    var indices = attribsAndIndices.indices

    transferableObjects.push(attribsAndIndices.startEllipsoidNormals.buffer)
    transferableObjects.push(attribsAndIndices.endEllipsoidNormals.buffer)
    transferableObjects.push(attribsAndIndices.startPositionAndHeights.buffer)
    transferableObjects.push(attribsAndIndices.startFaceNormalAndVertexCornerIds.buffer)
    transferableObjects.push(attribsAndIndices.endPositionAndHeights.buffer)
    transferableObjects.push(attribsAndIndices.endFaceNormalAndHalfWidths.buffer)
    transferableObjects.push(attribsAndIndices.vertexBatchIds.buffer)
    transferableObjects.push(indices.buffer)

    var results = {
      indexDatatype: indices.BYTES_PER_ELEMENT === 2 ? IndexDatatype.IndexDatatype.UNSIGNED_SHORT : IndexDatatype.IndexDatatype.UNSIGNED_INT,
      startEllipsoidNormals: attribsAndIndices.startEllipsoidNormals.buffer,
      endEllipsoidNormals: attribsAndIndices.endEllipsoidNormals.buffer,
      startPositionAndHeights: attribsAndIndices.startPositionAndHeights.buffer,
      startFaceNormalAndVertexCornerIds: attribsAndIndices.startFaceNormalAndVertexCornerIds.buffer,
      endPositionAndHeights: attribsAndIndices.endPositionAndHeights.buffer,
      endFaceNormalAndHalfWidths: attribsAndIndices.endFaceNormalAndHalfWidths.buffer,
      vertexBatchIds: attribsAndIndices.vertexBatchIds.buffer,
      indices: indices.buffer
    }

    if (parameters.keepDecodedPositions) {
      var positionOffsets = getPositionOffsets(counts)
      transferableObjects.push(positions.buffer, positionOffsets.buffer)
      results = combine.combine(results, {
        decodedPositions: positions.buffer,
        decodedPositionOffsets: positionOffsets.buffer
      })
    }

    return results
  }
  var createVectorTileClampedPolylines$1 = createTaskProcessorWorker(createVectorTileClampedPolylines)

  return createVectorTileClampedPolylines$1
})
//# sourceMappingURL=createVectorTileClampedPolylines.js.map
