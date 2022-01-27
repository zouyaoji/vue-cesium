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
  'exports',
  './Matrix2-91d5b6af',
  './PolylineVolumeGeometryLibrary-7c5a0257',
  './when-4bbc8319',
  './ComponentDatatype-f194c48b',
  './PolylinePipeline-3cab578f',
  './Transforms-86b6fa28'
], function (exports, Matrix2, PolylineVolumeGeometryLibrary, when, ComponentDatatype, PolylinePipeline, Transforms) {
  'use strict'

  /**
   * @private
   */
  var CorridorGeometryLibrary = {}

  var scratch1 = new Matrix2.Cartesian3()
  var scratch2 = new Matrix2.Cartesian3()
  var scratch3 = new Matrix2.Cartesian3()
  var scratch4 = new Matrix2.Cartesian3()

  var scaleArray2 = [new Matrix2.Cartesian3(), new Matrix2.Cartesian3()]

  var cartesian1 = new Matrix2.Cartesian3()
  var cartesian2 = new Matrix2.Cartesian3()
  var cartesian3 = new Matrix2.Cartesian3()
  var cartesian4 = new Matrix2.Cartesian3()
  var cartesian5 = new Matrix2.Cartesian3()
  var cartesian6 = new Matrix2.Cartesian3()
  var cartesian7 = new Matrix2.Cartesian3()
  var cartesian8 = new Matrix2.Cartesian3()
  var cartesian9 = new Matrix2.Cartesian3()
  var cartesian10 = new Matrix2.Cartesian3()

  var quaterion = new Transforms.Quaternion()
  var rotMatrix = new Matrix2.Matrix3()
  function computeRoundCorner(cornerPoint, startPoint, endPoint, cornerType, leftIsOutside) {
    var angle = Matrix2.Cartesian3.angleBetween(
      Matrix2.Cartesian3.subtract(startPoint, cornerPoint, scratch1),
      Matrix2.Cartesian3.subtract(endPoint, cornerPoint, scratch2)
    )
    var granularity =
      cornerType === PolylineVolumeGeometryLibrary.CornerType.BEVELED ? 1 : Math.ceil(angle / ComponentDatatype.CesiumMath.toRadians(5)) + 1

    var size = granularity * 3
    var array = new Array(size)

    array[size - 3] = endPoint.x
    array[size - 2] = endPoint.y
    array[size - 1] = endPoint.z

    var m
    if (leftIsOutside) {
      m = Matrix2.Matrix3.fromQuaternion(
        Transforms.Quaternion.fromAxisAngle(Matrix2.Cartesian3.negate(cornerPoint, scratch1), angle / granularity, quaterion),
        rotMatrix
      )
    } else {
      m = Matrix2.Matrix3.fromQuaternion(Transforms.Quaternion.fromAxisAngle(cornerPoint, angle / granularity, quaterion), rotMatrix)
    }

    var index = 0
    startPoint = Matrix2.Cartesian3.clone(startPoint, scratch1)
    for (var i = 0; i < granularity; i++) {
      startPoint = Matrix2.Matrix3.multiplyByVector(m, startPoint, startPoint)
      array[index++] = startPoint.x
      array[index++] = startPoint.y
      array[index++] = startPoint.z
    }

    return array
  }

  function addEndCaps(calculatedPositions) {
    var cornerPoint = cartesian1
    var startPoint = cartesian2
    var endPoint = cartesian3

    var leftEdge = calculatedPositions[1]
    startPoint = Matrix2.Cartesian3.fromArray(calculatedPositions[1], leftEdge.length - 3, startPoint)
    endPoint = Matrix2.Cartesian3.fromArray(calculatedPositions[0], 0, endPoint)
    cornerPoint = Matrix2.Cartesian3.midpoint(startPoint, endPoint, cornerPoint)
    var firstEndCap = computeRoundCorner(cornerPoint, startPoint, endPoint, PolylineVolumeGeometryLibrary.CornerType.ROUNDED, false)

    var length = calculatedPositions.length - 1
    var rightEdge = calculatedPositions[length - 1]
    leftEdge = calculatedPositions[length]
    startPoint = Matrix2.Cartesian3.fromArray(rightEdge, rightEdge.length - 3, startPoint)
    endPoint = Matrix2.Cartesian3.fromArray(leftEdge, 0, endPoint)
    cornerPoint = Matrix2.Cartesian3.midpoint(startPoint, endPoint, cornerPoint)
    var lastEndCap = computeRoundCorner(cornerPoint, startPoint, endPoint, PolylineVolumeGeometryLibrary.CornerType.ROUNDED, false)

    return [firstEndCap, lastEndCap]
  }

  function computeMiteredCorner(position, leftCornerDirection, lastPoint, leftIsOutside) {
    var cornerPoint = scratch1
    if (leftIsOutside) {
      cornerPoint = Matrix2.Cartesian3.add(position, leftCornerDirection, cornerPoint)
    } else {
      leftCornerDirection = Matrix2.Cartesian3.negate(leftCornerDirection, leftCornerDirection)
      cornerPoint = Matrix2.Cartesian3.add(position, leftCornerDirection, cornerPoint)
    }
    return [cornerPoint.x, cornerPoint.y, cornerPoint.z, lastPoint.x, lastPoint.y, lastPoint.z]
  }

  function addShiftedPositions(positions, left, scalar, calculatedPositions) {
    var rightPositions = new Array(positions.length)
    var leftPositions = new Array(positions.length)
    var scaledLeft = Matrix2.Cartesian3.multiplyByScalar(left, scalar, scratch1)
    var scaledRight = Matrix2.Cartesian3.negate(scaledLeft, scratch2)
    var rightIndex = 0
    var leftIndex = positions.length - 1

    for (var i = 0; i < positions.length; i += 3) {
      var pos = Matrix2.Cartesian3.fromArray(positions, i, scratch3)
      var rightPos = Matrix2.Cartesian3.add(pos, scaledRight, scratch4)
      rightPositions[rightIndex++] = rightPos.x
      rightPositions[rightIndex++] = rightPos.y
      rightPositions[rightIndex++] = rightPos.z

      var leftPos = Matrix2.Cartesian3.add(pos, scaledLeft, scratch4)
      leftPositions[leftIndex--] = leftPos.z
      leftPositions[leftIndex--] = leftPos.y
      leftPositions[leftIndex--] = leftPos.x
    }
    calculatedPositions.push(rightPositions, leftPositions)

    return calculatedPositions
  }

  /**
   * @private
   */
  CorridorGeometryLibrary.addAttribute = function (attribute, value, front, back) {
    var x = value.x
    var y = value.y
    var z = value.z
    if (when.defined(front)) {
      attribute[front] = x
      attribute[front + 1] = y
      attribute[front + 2] = z
    }
    if (when.defined(back)) {
      attribute[back] = z
      attribute[back - 1] = y
      attribute[back - 2] = x
    }
  }

  var scratchForwardProjection = new Matrix2.Cartesian3()
  var scratchBackwardProjection = new Matrix2.Cartesian3()

  /**
   * @private
   */
  CorridorGeometryLibrary.computePositions = function (params) {
    var granularity = params.granularity
    var positions = params.positions
    var ellipsoid = params.ellipsoid
    var width = params.width / 2
    var cornerType = params.cornerType
    var saveAttributes = params.saveAttributes
    var normal = cartesian1
    var forward = cartesian2
    var backward = cartesian3
    var left = cartesian4
    var cornerDirection = cartesian5
    var startPoint = cartesian6
    var previousPos = cartesian7
    var rightPos = cartesian8
    var leftPos = cartesian9
    var center = cartesian10
    var calculatedPositions = []
    var calculatedLefts = saveAttributes ? [] : undefined
    var calculatedNormals = saveAttributes ? [] : undefined
    var position = positions[0] //add first point
    var nextPosition = positions[1]

    forward = Matrix2.Cartesian3.normalize(Matrix2.Cartesian3.subtract(nextPosition, position, forward), forward)
    normal = ellipsoid.geodeticSurfaceNormal(position, normal)
    left = Matrix2.Cartesian3.normalize(Matrix2.Cartesian3.cross(normal, forward, left), left)
    if (saveAttributes) {
      calculatedLefts.push(left.x, left.y, left.z)
      calculatedNormals.push(normal.x, normal.y, normal.z)
    }
    previousPos = Matrix2.Cartesian3.clone(position, previousPos)
    position = nextPosition
    backward = Matrix2.Cartesian3.negate(forward, backward)

    var subdividedPositions
    var corners = []
    var i
    var length = positions.length
    for (i = 1; i < length - 1; i++) {
      // add middle points and corners
      normal = ellipsoid.geodeticSurfaceNormal(position, normal)
      nextPosition = positions[i + 1]
      forward = Matrix2.Cartesian3.normalize(Matrix2.Cartesian3.subtract(nextPosition, position, forward), forward)
      cornerDirection = Matrix2.Cartesian3.normalize(Matrix2.Cartesian3.add(forward, backward, cornerDirection), cornerDirection)

      var forwardProjection = Matrix2.Cartesian3.multiplyByScalar(normal, Matrix2.Cartesian3.dot(forward, normal), scratchForwardProjection)
      Matrix2.Cartesian3.subtract(forward, forwardProjection, forwardProjection)
      Matrix2.Cartesian3.normalize(forwardProjection, forwardProjection)

      var backwardProjection = Matrix2.Cartesian3.multiplyByScalar(normal, Matrix2.Cartesian3.dot(backward, normal), scratchBackwardProjection)
      Matrix2.Cartesian3.subtract(backward, backwardProjection, backwardProjection)
      Matrix2.Cartesian3.normalize(backwardProjection, backwardProjection)

      var doCorner = !ComponentDatatype.CesiumMath.equalsEpsilon(
        Math.abs(Matrix2.Cartesian3.dot(forwardProjection, backwardProjection)),
        1.0,
        ComponentDatatype.CesiumMath.EPSILON7
      )

      if (doCorner) {
        cornerDirection = Matrix2.Cartesian3.cross(cornerDirection, normal, cornerDirection)
        cornerDirection = Matrix2.Cartesian3.cross(normal, cornerDirection, cornerDirection)
        cornerDirection = Matrix2.Cartesian3.normalize(cornerDirection, cornerDirection)
        var scalar = width / Math.max(0.25, Matrix2.Cartesian3.magnitude(Matrix2.Cartesian3.cross(cornerDirection, backward, scratch1)))
        var leftIsOutside = PolylineVolumeGeometryLibrary.PolylineVolumeGeometryLibrary.angleIsGreaterThanPi(forward, backward, position, ellipsoid)
        cornerDirection = Matrix2.Cartesian3.multiplyByScalar(cornerDirection, scalar, cornerDirection)
        if (leftIsOutside) {
          rightPos = Matrix2.Cartesian3.add(position, cornerDirection, rightPos)
          center = Matrix2.Cartesian3.add(rightPos, Matrix2.Cartesian3.multiplyByScalar(left, width, center), center)
          leftPos = Matrix2.Cartesian3.add(rightPos, Matrix2.Cartesian3.multiplyByScalar(left, width * 2, leftPos), leftPos)
          scaleArray2[0] = Matrix2.Cartesian3.clone(previousPos, scaleArray2[0])
          scaleArray2[1] = Matrix2.Cartesian3.clone(center, scaleArray2[1])
          subdividedPositions = PolylinePipeline.PolylinePipeline.generateArc({
            positions: scaleArray2,
            granularity: granularity,
            ellipsoid: ellipsoid
          })
          calculatedPositions = addShiftedPositions(subdividedPositions, left, width, calculatedPositions)
          if (saveAttributes) {
            calculatedLefts.push(left.x, left.y, left.z)
            calculatedNormals.push(normal.x, normal.y, normal.z)
          }
          startPoint = Matrix2.Cartesian3.clone(leftPos, startPoint)
          left = Matrix2.Cartesian3.normalize(Matrix2.Cartesian3.cross(normal, forward, left), left)
          leftPos = Matrix2.Cartesian3.add(rightPos, Matrix2.Cartesian3.multiplyByScalar(left, width * 2, leftPos), leftPos)
          previousPos = Matrix2.Cartesian3.add(rightPos, Matrix2.Cartesian3.multiplyByScalar(left, width, previousPos), previousPos)
          if (cornerType === PolylineVolumeGeometryLibrary.CornerType.ROUNDED || cornerType === PolylineVolumeGeometryLibrary.CornerType.BEVELED) {
            corners.push({
              leftPositions: computeRoundCorner(rightPos, startPoint, leftPos, cornerType, leftIsOutside)
            })
          } else {
            corners.push({
              leftPositions: computeMiteredCorner(position, Matrix2.Cartesian3.negate(cornerDirection, cornerDirection), leftPos, leftIsOutside)
            })
          }
        } else {
          leftPos = Matrix2.Cartesian3.add(position, cornerDirection, leftPos)
          center = Matrix2.Cartesian3.add(
            leftPos,
            Matrix2.Cartesian3.negate(Matrix2.Cartesian3.multiplyByScalar(left, width, center), center),
            center
          )
          rightPos = Matrix2.Cartesian3.add(
            leftPos,
            Matrix2.Cartesian3.negate(Matrix2.Cartesian3.multiplyByScalar(left, width * 2, rightPos), rightPos),
            rightPos
          )
          scaleArray2[0] = Matrix2.Cartesian3.clone(previousPos, scaleArray2[0])
          scaleArray2[1] = Matrix2.Cartesian3.clone(center, scaleArray2[1])
          subdividedPositions = PolylinePipeline.PolylinePipeline.generateArc({
            positions: scaleArray2,
            granularity: granularity,
            ellipsoid: ellipsoid
          })
          calculatedPositions = addShiftedPositions(subdividedPositions, left, width, calculatedPositions)
          if (saveAttributes) {
            calculatedLefts.push(left.x, left.y, left.z)
            calculatedNormals.push(normal.x, normal.y, normal.z)
          }
          startPoint = Matrix2.Cartesian3.clone(rightPos, startPoint)
          left = Matrix2.Cartesian3.normalize(Matrix2.Cartesian3.cross(normal, forward, left), left)
          rightPos = Matrix2.Cartesian3.add(
            leftPos,
            Matrix2.Cartesian3.negate(Matrix2.Cartesian3.multiplyByScalar(left, width * 2, rightPos), rightPos),
            rightPos
          )
          previousPos = Matrix2.Cartesian3.add(
            leftPos,
            Matrix2.Cartesian3.negate(Matrix2.Cartesian3.multiplyByScalar(left, width, previousPos), previousPos),
            previousPos
          )
          if (cornerType === PolylineVolumeGeometryLibrary.CornerType.ROUNDED || cornerType === PolylineVolumeGeometryLibrary.CornerType.BEVELED) {
            corners.push({
              rightPositions: computeRoundCorner(leftPos, startPoint, rightPos, cornerType, leftIsOutside)
            })
          } else {
            corners.push({
              rightPositions: computeMiteredCorner(position, cornerDirection, rightPos, leftIsOutside)
            })
          }
        }
        backward = Matrix2.Cartesian3.negate(forward, backward)
      }
      position = nextPosition
    }

    normal = ellipsoid.geodeticSurfaceNormal(position, normal)
    scaleArray2[0] = Matrix2.Cartesian3.clone(previousPos, scaleArray2[0])
    scaleArray2[1] = Matrix2.Cartesian3.clone(position, scaleArray2[1])
    subdividedPositions = PolylinePipeline.PolylinePipeline.generateArc({
      positions: scaleArray2,
      granularity: granularity,
      ellipsoid: ellipsoid
    })
    calculatedPositions = addShiftedPositions(subdividedPositions, left, width, calculatedPositions)
    if (saveAttributes) {
      calculatedLefts.push(left.x, left.y, left.z)
      calculatedNormals.push(normal.x, normal.y, normal.z)
    }

    var endPositions
    if (cornerType === PolylineVolumeGeometryLibrary.CornerType.ROUNDED) {
      endPositions = addEndCaps(calculatedPositions)
    }

    return {
      positions: calculatedPositions,
      corners: corners,
      lefts: calculatedLefts,
      normals: calculatedNormals,
      endPositions: endPositions
    }
  }

  exports.CorridorGeometryLibrary = CorridorGeometryLibrary
})
//# sourceMappingURL=CorridorGeometryLibrary-da07850e.js.map
