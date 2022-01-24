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

define(['exports', './RuntimeError-346a3079', './when-4bbc8319', './ComponentDatatype-f194c48b'], function (
  exports,
  RuntimeError,
  when,
  ComponentDatatype
) {
  'use strict'

  /**
   * A 3D Cartesian point.
   * @alias Cartesian3
   * @constructor
   *
   * @param {Number} [x=0.0] The X component.
   * @param {Number} [y=0.0] The Y component.
   * @param {Number} [z=0.0] The Z component.
   *
   * @see Cartesian2
   * @see Cartesian4
   * @see Packable
   */
  function Cartesian3(x, y, z) {
    /**
     * The X component.
     * @type {Number}
     * @default 0.0
     */
    this.x = when.defaultValue(x, 0.0)

    /**
     * The Y component.
     * @type {Number}
     * @default 0.0
     */
    this.y = when.defaultValue(y, 0.0)

    /**
     * The Z component.
     * @type {Number}
     * @default 0.0
     */
    this.z = when.defaultValue(z, 0.0)
  }

  /**
   * Converts the provided Spherical into Cartesian3 coordinates.
   *
   * @param {Spherical} spherical The Spherical to be converted to Cartesian3.
   * @param {Cartesian3} [result] The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
   */
  Cartesian3.fromSpherical = function (spherical, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('spherical', spherical)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      result = new Cartesian3()
    }

    var clock = spherical.clock
    var cone = spherical.cone
    var magnitude = when.defaultValue(spherical.magnitude, 1.0)
    var radial = magnitude * Math.sin(cone)
    result.x = radial * Math.cos(clock)
    result.y = radial * Math.sin(clock)
    result.z = magnitude * Math.cos(cone)
    return result
  }

  /**
   * Creates a Cartesian3 instance from x, y and z coordinates.
   *
   * @param {Number} x The x coordinate.
   * @param {Number} y The y coordinate.
   * @param {Number} z The z coordinate.
   * @param {Cartesian3} [result] The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
   */
  Cartesian3.fromElements = function (x, y, z, result) {
    if (!when.defined(result)) {
      return new Cartesian3(x, y, z)
    }

    result.x = x
    result.y = y
    result.z = z
    return result
  }

  /**
   * Duplicates a Cartesian3 instance.
   *
   * @param {Cartesian3} cartesian The Cartesian to duplicate.
   * @param {Cartesian3} [result] The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided. (Returns undefined if cartesian is undefined)
   */
  Cartesian3.clone = function (cartesian, result) {
    if (!when.defined(cartesian)) {
      return undefined
    }
    if (!when.defined(result)) {
      return new Cartesian3(cartesian.x, cartesian.y, cartesian.z)
    }

    result.x = cartesian.x
    result.y = cartesian.y
    result.z = cartesian.z
    return result
  }

  /**
   * Creates a Cartesian3 instance from an existing Cartesian4.  This simply takes the
   * x, y, and z properties of the Cartesian4 and drops w.
   * @function
   *
   * @param {Cartesian4} cartesian The Cartesian4 instance to create a Cartesian3 instance from.
   * @param {Cartesian3} [result] The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
   */
  Cartesian3.fromCartesian4 = Cartesian3.clone

  /**
   * The number of elements used to pack the object into an array.
   * @type {Number}
   */
  Cartesian3.packedLength = 3

  /**
   * Stores the provided instance into the provided array.
   *
   * @param {Cartesian3} value The value to pack.
   * @param {Number[]} array The array to pack into.
   * @param {Number} [startingIndex=0] The index into the array at which to start packing the elements.
   *
   * @returns {Number[]} The array that was packed into
   */
  Cartesian3.pack = function (value, array, startingIndex) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('value', value)
    RuntimeError.Check.defined('array', array)
    //>>includeEnd('debug');

    startingIndex = when.defaultValue(startingIndex, 0)

    array[startingIndex++] = value.x
    array[startingIndex++] = value.y
    array[startingIndex] = value.z

    return array
  }

  /**
   * Retrieves an instance from a packed array.
   *
   * @param {Number[]} array The packed array.
   * @param {Number} [startingIndex=0] The starting index of the element to be unpacked.
   * @param {Cartesian3} [result] The object into which to store the result.
   * @returns {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
   */
  Cartesian3.unpack = function (array, startingIndex, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('array', array)
    //>>includeEnd('debug');

    startingIndex = when.defaultValue(startingIndex, 0)

    if (!when.defined(result)) {
      result = new Cartesian3()
    }
    result.x = array[startingIndex++]
    result.y = array[startingIndex++]
    result.z = array[startingIndex]
    return result
  }

  /**
   * Flattens an array of Cartesian3s into an array of components.
   *
   * @param {Cartesian3[]} array The array of cartesians to pack.
   * @param {Number[]} [result] The array onto which to store the result. If this is a typed array, it must have array.length * 3 components, else a {@link DeveloperError} will be thrown. If it is a regular array, it will be resized to have (array.length * 3) elements.
   * @returns {Number[]} The packed array.
   */
  Cartesian3.packArray = function (array, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('array', array)
    //>>includeEnd('debug');

    var length = array.length
    var resultLength = length * 3
    if (!when.defined(result)) {
      result = new Array(resultLength)
    } else if (!Array.isArray(result) && result.length !== resultLength) {
      throw new RuntimeError.DeveloperError('If result is a typed array, it must have exactly array.length * 3 elements')
    } else if (result.length !== resultLength) {
      result.length = resultLength
    }

    for (var i = 0; i < length; ++i) {
      Cartesian3.pack(array[i], result, i * 3)
    }
    return result
  }

  /**
   * Unpacks an array of cartesian components into an array of Cartesian3s.
   *
   * @param {Number[]} array The array of components to unpack.
   * @param {Cartesian3[]} [result] The array onto which to store the result.
   * @returns {Cartesian3[]} The unpacked array.
   */
  Cartesian3.unpackArray = function (array, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('array', array)
    RuntimeError.Check.typeOf.number.greaterThanOrEquals('array.length', array.length, 3)
    if (array.length % 3 !== 0) {
      throw new RuntimeError.DeveloperError('array length must be a multiple of 3.')
    }
    //>>includeEnd('debug');

    var length = array.length
    if (!when.defined(result)) {
      result = new Array(length / 3)
    } else {
      result.length = length / 3
    }

    for (var i = 0; i < length; i += 3) {
      var index = i / 3
      result[index] = Cartesian3.unpack(array, i, result[index])
    }
    return result
  }

  /**
   * Creates a Cartesian3 from three consecutive elements in an array.
   * @function
   *
   * @param {Number[]} array The array whose three consecutive elements correspond to the x, y, and z components, respectively.
   * @param {Number} [startingIndex=0] The offset into the array of the first element, which corresponds to the x component.
   * @param {Cartesian3} [result] The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
   *
   * @example
   * // Create a Cartesian3 with (1.0, 2.0, 3.0)
   * var v = [1.0, 2.0, 3.0];
   * var p = Cesium.Cartesian3.fromArray(v);
   *
   * // Create a Cartesian3 with (1.0, 2.0, 3.0) using an offset into an array
   * var v2 = [0.0, 0.0, 1.0, 2.0, 3.0];
   * var p2 = Cesium.Cartesian3.fromArray(v2, 2);
   */
  Cartesian3.fromArray = Cartesian3.unpack

  /**
   * Computes the value of the maximum component for the supplied Cartesian.
   *
   * @param {Cartesian3} cartesian The cartesian to use.
   * @returns {Number} The value of the maximum component.
   */
  Cartesian3.maximumComponent = function (cartesian) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    //>>includeEnd('debug');

    return Math.max(cartesian.x, cartesian.y, cartesian.z)
  }

  /**
   * Computes the value of the minimum component for the supplied Cartesian.
   *
   * @param {Cartesian3} cartesian The cartesian to use.
   * @returns {Number} The value of the minimum component.
   */
  Cartesian3.minimumComponent = function (cartesian) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    //>>includeEnd('debug');

    return Math.min(cartesian.x, cartesian.y, cartesian.z)
  }

  /**
   * Compares two Cartesians and computes a Cartesian which contains the minimum components of the supplied Cartesians.
   *
   * @param {Cartesian3} first A cartesian to compare.
   * @param {Cartesian3} second A cartesian to compare.
   * @param {Cartesian3} result The object into which to store the result.
   * @returns {Cartesian3} A cartesian with the minimum components.
   */
  Cartesian3.minimumByComponent = function (first, second, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('first', first)
    RuntimeError.Check.typeOf.object('second', second)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = Math.min(first.x, second.x)
    result.y = Math.min(first.y, second.y)
    result.z = Math.min(first.z, second.z)

    return result
  }

  /**
   * Compares two Cartesians and computes a Cartesian which contains the maximum components of the supplied Cartesians.
   *
   * @param {Cartesian3} first A cartesian to compare.
   * @param {Cartesian3} second A cartesian to compare.
   * @param {Cartesian3} result The object into which to store the result.
   * @returns {Cartesian3} A cartesian with the maximum components.
   */
  Cartesian3.maximumByComponent = function (first, second, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('first', first)
    RuntimeError.Check.typeOf.object('second', second)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = Math.max(first.x, second.x)
    result.y = Math.max(first.y, second.y)
    result.z = Math.max(first.z, second.z)
    return result
  }

  /**
   * Computes the provided Cartesian's squared magnitude.
   *
   * @param {Cartesian3} cartesian The Cartesian instance whose squared magnitude is to be computed.
   * @returns {Number} The squared magnitude.
   */
  Cartesian3.magnitudeSquared = function (cartesian) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    //>>includeEnd('debug');

    return cartesian.x * cartesian.x + cartesian.y * cartesian.y + cartesian.z * cartesian.z
  }

  /**
   * Computes the Cartesian's magnitude (length).
   *
   * @param {Cartesian3} cartesian The Cartesian instance whose magnitude is to be computed.
   * @returns {Number} The magnitude.
   */
  Cartesian3.magnitude = function (cartesian) {
    return Math.sqrt(Cartesian3.magnitudeSquared(cartesian))
  }

  var distanceScratch$2 = new Cartesian3()

  /**
   * Computes the distance between two points.
   *
   * @param {Cartesian3} left The first point to compute the distance from.
   * @param {Cartesian3} right The second point to compute the distance to.
   * @returns {Number} The distance between two points.
   *
   * @example
   * // Returns 1.0
   * var d = Cesium.Cartesian3.distance(new Cesium.Cartesian3(1.0, 0.0, 0.0), new Cesium.Cartesian3(2.0, 0.0, 0.0));
   */
  Cartesian3.distance = function (left, right) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    //>>includeEnd('debug');

    Cartesian3.subtract(left, right, distanceScratch$2)
    return Cartesian3.magnitude(distanceScratch$2)
  }

  /**
   * Computes the squared distance between two points.  Comparing squared distances
   * using this function is more efficient than comparing distances using {@link Cartesian3#distance}.
   *
   * @param {Cartesian3} left The first point to compute the distance from.
   * @param {Cartesian3} right The second point to compute the distance to.
   * @returns {Number} The distance between two points.
   *
   * @example
   * // Returns 4.0, not 2.0
   * var d = Cesium.Cartesian3.distanceSquared(new Cesium.Cartesian3(1.0, 0.0, 0.0), new Cesium.Cartesian3(3.0, 0.0, 0.0));
   */
  Cartesian3.distanceSquared = function (left, right) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    //>>includeEnd('debug');

    Cartesian3.subtract(left, right, distanceScratch$2)
    return Cartesian3.magnitudeSquared(distanceScratch$2)
  }

  /**
   * Computes the normalized form of the supplied Cartesian.
   *
   * @param {Cartesian3} cartesian The Cartesian to be normalized.
   * @param {Cartesian3} result The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter.
   */
  Cartesian3.normalize = function (cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var magnitude = Cartesian3.magnitude(cartesian)

    result.x = cartesian.x / magnitude
    result.y = cartesian.y / magnitude
    result.z = cartesian.z / magnitude

    //>>includeStart('debug', pragmas.debug);
    if (isNaN(result.x) || isNaN(result.y) || isNaN(result.z)) {
      throw new RuntimeError.DeveloperError('normalized result is not a number')
    }
    //>>includeEnd('debug');

    return result
  }

  /**
   * Computes the dot (scalar) product of two Cartesians.
   *
   * @param {Cartesian3} left The first Cartesian.
   * @param {Cartesian3} right The second Cartesian.
   * @returns {Number} The dot product.
   */
  Cartesian3.dot = function (left, right) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    //>>includeEnd('debug');

    return left.x * right.x + left.y * right.y + left.z * right.z
  }

  /**
   * Computes the componentwise product of two Cartesians.
   *
   * @param {Cartesian3} left The first Cartesian.
   * @param {Cartesian3} right The second Cartesian.
   * @param {Cartesian3} result The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter.
   */
  Cartesian3.multiplyComponents = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = left.x * right.x
    result.y = left.y * right.y
    result.z = left.z * right.z
    return result
  }

  /**
   * Computes the componentwise quotient of two Cartesians.
   *
   * @param {Cartesian3} left The first Cartesian.
   * @param {Cartesian3} right The second Cartesian.
   * @param {Cartesian3} result The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter.
   */
  Cartesian3.divideComponents = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = left.x / right.x
    result.y = left.y / right.y
    result.z = left.z / right.z
    return result
  }

  /**
   * Computes the componentwise sum of two Cartesians.
   *
   * @param {Cartesian3} left The first Cartesian.
   * @param {Cartesian3} right The second Cartesian.
   * @param {Cartesian3} result The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter.
   */
  Cartesian3.add = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = left.x + right.x
    result.y = left.y + right.y
    result.z = left.z + right.z
    return result
  }

  /**
   * Computes the componentwise difference of two Cartesians.
   *
   * @param {Cartesian3} left The first Cartesian.
   * @param {Cartesian3} right The second Cartesian.
   * @param {Cartesian3} result The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter.
   */
  Cartesian3.subtract = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = left.x - right.x
    result.y = left.y - right.y
    result.z = left.z - right.z
    return result
  }

  /**
   * Multiplies the provided Cartesian componentwise by the provided scalar.
   *
   * @param {Cartesian3} cartesian The Cartesian to be scaled.
   * @param {Number} scalar The scalar to multiply with.
   * @param {Cartesian3} result The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter.
   */
  Cartesian3.multiplyByScalar = function (cartesian, scalar, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.number('scalar', scalar)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = cartesian.x * scalar
    result.y = cartesian.y * scalar
    result.z = cartesian.z * scalar
    return result
  }

  /**
   * Divides the provided Cartesian componentwise by the provided scalar.
   *
   * @param {Cartesian3} cartesian The Cartesian to be divided.
   * @param {Number} scalar The scalar to divide by.
   * @param {Cartesian3} result The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter.
   */
  Cartesian3.divideByScalar = function (cartesian, scalar, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.number('scalar', scalar)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = cartesian.x / scalar
    result.y = cartesian.y / scalar
    result.z = cartesian.z / scalar
    return result
  }

  /**
   * Negates the provided Cartesian.
   *
   * @param {Cartesian3} cartesian The Cartesian to be negated.
   * @param {Cartesian3} result The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter.
   */
  Cartesian3.negate = function (cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = -cartesian.x
    result.y = -cartesian.y
    result.z = -cartesian.z
    return result
  }

  /**
   * Computes the absolute value of the provided Cartesian.
   *
   * @param {Cartesian3} cartesian The Cartesian whose absolute value is to be computed.
   * @param {Cartesian3} result The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter.
   */
  Cartesian3.abs = function (cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = Math.abs(cartesian.x)
    result.y = Math.abs(cartesian.y)
    result.z = Math.abs(cartesian.z)
    return result
  }

  var lerpScratch$2 = new Cartesian3()
  /**
   * Computes the linear interpolation or extrapolation at t using the provided cartesians.
   *
   * @param {Cartesian3} start The value corresponding to t at 0.0.
   * @param {Cartesian3} end The value corresponding to t at 1.0.
   * @param {Number} t The point along t at which to interpolate.
   * @param {Cartesian3} result The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter.
   */
  Cartesian3.lerp = function (start, end, t, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('start', start)
    RuntimeError.Check.typeOf.object('end', end)
    RuntimeError.Check.typeOf.number('t', t)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    Cartesian3.multiplyByScalar(end, t, lerpScratch$2)
    result = Cartesian3.multiplyByScalar(start, 1.0 - t, result)
    return Cartesian3.add(lerpScratch$2, result, result)
  }

  var angleBetweenScratch$1 = new Cartesian3()
  var angleBetweenScratch2$1 = new Cartesian3()
  /**
   * Returns the angle, in radians, between the provided Cartesians.
   *
   * @param {Cartesian3} left The first Cartesian.
   * @param {Cartesian3} right The second Cartesian.
   * @returns {Number} The angle between the Cartesians.
   */
  Cartesian3.angleBetween = function (left, right) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    //>>includeEnd('debug');

    Cartesian3.normalize(left, angleBetweenScratch$1)
    Cartesian3.normalize(right, angleBetweenScratch2$1)
    var cosine = Cartesian3.dot(angleBetweenScratch$1, angleBetweenScratch2$1)
    var sine = Cartesian3.magnitude(Cartesian3.cross(angleBetweenScratch$1, angleBetweenScratch2$1, angleBetweenScratch$1))
    return Math.atan2(sine, cosine)
  }

  var mostOrthogonalAxisScratch$2 = new Cartesian3()
  /**
   * Returns the axis that is most orthogonal to the provided Cartesian.
   *
   * @param {Cartesian3} cartesian The Cartesian on which to find the most orthogonal axis.
   * @param {Cartesian3} result The object onto which to store the result.
   * @returns {Cartesian3} The most orthogonal axis.
   */
  Cartesian3.mostOrthogonalAxis = function (cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var f = Cartesian3.normalize(cartesian, mostOrthogonalAxisScratch$2)
    Cartesian3.abs(f, f)

    if (f.x <= f.y) {
      if (f.x <= f.z) {
        result = Cartesian3.clone(Cartesian3.UNIT_X, result)
      } else {
        result = Cartesian3.clone(Cartesian3.UNIT_Z, result)
      }
    } else if (f.y <= f.z) {
      result = Cartesian3.clone(Cartesian3.UNIT_Y, result)
    } else {
      result = Cartesian3.clone(Cartesian3.UNIT_Z, result)
    }

    return result
  }

  /**
   * Projects vector a onto vector b
   * @param {Cartesian3} a The vector that needs projecting
   * @param {Cartesian3} b The vector to project onto
   * @param {Cartesian3} result The result cartesian
   * @returns {Cartesian3} The modified result parameter
   */
  Cartesian3.projectVector = function (a, b, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('a', a)
    RuntimeError.Check.defined('b', b)
    RuntimeError.Check.defined('result', result)
    //>>includeEnd('debug');

    var scalar = Cartesian3.dot(a, b) / Cartesian3.dot(b, b)
    return Cartesian3.multiplyByScalar(b, scalar, result)
  }

  /**
   * Compares the provided Cartesians componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Cartesian3} [left] The first Cartesian.
   * @param {Cartesian3} [right] The second Cartesian.
   * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
   */
  Cartesian3.equals = function (left, right) {
    return left === right || (when.defined(left) && when.defined(right) && left.x === right.x && left.y === right.y && left.z === right.z)
  }

  /**
   * @private
   */
  Cartesian3.equalsArray = function (cartesian, array, offset) {
    return cartesian.x === array[offset] && cartesian.y === array[offset + 1] && cartesian.z === array[offset + 2]
  }

  /**
   * Compares the provided Cartesians componentwise and returns
   * <code>true</code> if they pass an absolute or relative tolerance test,
   * <code>false</code> otherwise.
   *
   * @param {Cartesian3} [left] The first Cartesian.
   * @param {Cartesian3} [right] The second Cartesian.
   * @param {Number} [relativeEpsilon=0] The relative epsilon tolerance to use for equality testing.
   * @param {Number} [absoluteEpsilon=relativeEpsilon] The absolute epsilon tolerance to use for equality testing.
   * @returns {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
   */
  Cartesian3.equalsEpsilon = function (left, right, relativeEpsilon, absoluteEpsilon) {
    return (
      left === right ||
      (when.defined(left) &&
        when.defined(right) &&
        ComponentDatatype.CesiumMath.equalsEpsilon(left.x, right.x, relativeEpsilon, absoluteEpsilon) &&
        ComponentDatatype.CesiumMath.equalsEpsilon(left.y, right.y, relativeEpsilon, absoluteEpsilon) &&
        ComponentDatatype.CesiumMath.equalsEpsilon(left.z, right.z, relativeEpsilon, absoluteEpsilon))
    )
  }

  /**
   * Computes the cross (outer) product of two Cartesians.
   *
   * @param {Cartesian3} left The first Cartesian.
   * @param {Cartesian3} right The second Cartesian.
   * @param {Cartesian3} result The object onto which to store the result.
   * @returns {Cartesian3} The cross product.
   */
  Cartesian3.cross = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var leftX = left.x
    var leftY = left.y
    var leftZ = left.z
    var rightX = right.x
    var rightY = right.y
    var rightZ = right.z

    var x = leftY * rightZ - leftZ * rightY
    var y = leftZ * rightX - leftX * rightZ
    var z = leftX * rightY - leftY * rightX

    result.x = x
    result.y = y
    result.z = z
    return result
  }

  /**
   * Computes the midpoint between the right and left Cartesian.
   * @param {Cartesian3} left The first Cartesian.
   * @param {Cartesian3} right The second Cartesian.
   * @param {Cartesian3} result The object onto which to store the result.
   * @returns {Cartesian3} The midpoint.
   */
  Cartesian3.midpoint = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = (left.x + right.x) * 0.5
    result.y = (left.y + right.y) * 0.5
    result.z = (left.z + right.z) * 0.5

    return result
  }

  /**
   * Returns a Cartesian3 position from longitude and latitude values given in degrees.
   *
   * @param {Number} longitude The longitude, in degrees
   * @param {Number} latitude The latitude, in degrees
   * @param {Number} [height=0.0] The height, in meters, above the ellipsoid.
   * @param {Ellipsoid} [ellipsoid=Ellipsoid.WGS84] The ellipsoid on which the position lies.
   * @param {Cartesian3} [result] The object onto which to store the result.
   * @returns {Cartesian3} The position
   *
   * @example
   * var position = Cesium.Cartesian3.fromDegrees(-115.0, 37.0);
   */
  Cartesian3.fromDegrees = function (longitude, latitude, height, ellipsoid, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number('longitude', longitude)
    RuntimeError.Check.typeOf.number('latitude', latitude)
    //>>includeEnd('debug');

    longitude = ComponentDatatype.CesiumMath.toRadians(longitude)
    latitude = ComponentDatatype.CesiumMath.toRadians(latitude)
    return Cartesian3.fromRadians(longitude, latitude, height, ellipsoid, result)
  }

  var scratchN = new Cartesian3()
  var scratchK = new Cartesian3()
  var wgs84RadiiSquared = new Cartesian3(6378137.0 * 6378137.0, 6378137.0 * 6378137.0, 6356752.3142451793 * 6356752.3142451793)

  /**
   * Returns a Cartesian3 position from longitude and latitude values given in radians.
   *
   * @param {Number} longitude The longitude, in radians
   * @param {Number} latitude The latitude, in radians
   * @param {Number} [height=0.0] The height, in meters, above the ellipsoid.
   * @param {Ellipsoid} [ellipsoid=Ellipsoid.WGS84] The ellipsoid on which the position lies.
   * @param {Cartesian3} [result] The object onto which to store the result.
   * @returns {Cartesian3} The position
   *
   * @example
   * var position = Cesium.Cartesian3.fromRadians(-2.007, 0.645);
   */
  Cartesian3.fromRadians = function (longitude, latitude, height, ellipsoid, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number('longitude', longitude)
    RuntimeError.Check.typeOf.number('latitude', latitude)
    //>>includeEnd('debug');

    height = when.defaultValue(height, 0.0)
    var radiiSquared = when.defined(ellipsoid) ? ellipsoid.radiiSquared : wgs84RadiiSquared

    var cosLatitude = Math.cos(latitude)
    scratchN.x = cosLatitude * Math.cos(longitude)
    scratchN.y = cosLatitude * Math.sin(longitude)
    scratchN.z = Math.sin(latitude)
    scratchN = Cartesian3.normalize(scratchN, scratchN)

    Cartesian3.multiplyComponents(radiiSquared, scratchN, scratchK)
    var gamma = Math.sqrt(Cartesian3.dot(scratchN, scratchK))
    scratchK = Cartesian3.divideByScalar(scratchK, gamma, scratchK)
    scratchN = Cartesian3.multiplyByScalar(scratchN, height, scratchN)

    if (!when.defined(result)) {
      result = new Cartesian3()
    }
    return Cartesian3.add(scratchK, scratchN, result)
  }

  /**
   * Returns an array of Cartesian3 positions given an array of longitude and latitude values given in degrees.
   *
   * @param {Number[]} coordinates A list of longitude and latitude values. Values alternate [longitude, latitude, longitude, latitude...].
   * @param {Ellipsoid} [ellipsoid=Ellipsoid.WGS84] The ellipsoid on which the coordinates lie.
   * @param {Cartesian3[]} [result] An array of Cartesian3 objects to store the result.
   * @returns {Cartesian3[]} The array of positions.
   *
   * @example
   * var positions = Cesium.Cartesian3.fromDegreesArray([-115.0, 37.0, -107.0, 33.0]);
   */
  Cartesian3.fromDegreesArray = function (coordinates, ellipsoid, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('coordinates', coordinates)
    if (coordinates.length < 2 || coordinates.length % 2 !== 0) {
      throw new RuntimeError.DeveloperError('the number of coordinates must be a multiple of 2 and at least 2')
    }
    //>>includeEnd('debug');

    var length = coordinates.length
    if (!when.defined(result)) {
      result = new Array(length / 2)
    } else {
      result.length = length / 2
    }

    for (var i = 0; i < length; i += 2) {
      var longitude = coordinates[i]
      var latitude = coordinates[i + 1]
      var index = i / 2
      result[index] = Cartesian3.fromDegrees(longitude, latitude, 0, ellipsoid, result[index])
    }

    return result
  }

  /**
   * Returns an array of Cartesian3 positions given an array of longitude and latitude values given in radians.
   *
   * @param {Number[]} coordinates A list of longitude and latitude values. Values alternate [longitude, latitude, longitude, latitude...].
   * @param {Ellipsoid} [ellipsoid=Ellipsoid.WGS84] The ellipsoid on which the coordinates lie.
   * @param {Cartesian3[]} [result] An array of Cartesian3 objects to store the result.
   * @returns {Cartesian3[]} The array of positions.
   *
   * @example
   * var positions = Cesium.Cartesian3.fromRadiansArray([-2.007, 0.645, -1.867, .575]);
   */
  Cartesian3.fromRadiansArray = function (coordinates, ellipsoid, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('coordinates', coordinates)
    if (coordinates.length < 2 || coordinates.length % 2 !== 0) {
      throw new RuntimeError.DeveloperError('the number of coordinates must be a multiple of 2 and at least 2')
    }
    //>>includeEnd('debug');

    var length = coordinates.length
    if (!when.defined(result)) {
      result = new Array(length / 2)
    } else {
      result.length = length / 2
    }

    for (var i = 0; i < length; i += 2) {
      var longitude = coordinates[i]
      var latitude = coordinates[i + 1]
      var index = i / 2
      result[index] = Cartesian3.fromRadians(longitude, latitude, 0, ellipsoid, result[index])
    }

    return result
  }

  /**
   * Returns an array of Cartesian3 positions given an array of longitude, latitude and height values where longitude and latitude are given in degrees.
   *
   * @param {Number[]} coordinates A list of longitude, latitude and height values. Values alternate [longitude, latitude, height, longitude, latitude, height...].
   * @param {Ellipsoid} [ellipsoid=Ellipsoid.WGS84] The ellipsoid on which the position lies.
   * @param {Cartesian3[]} [result] An array of Cartesian3 objects to store the result.
   * @returns {Cartesian3[]} The array of positions.
   *
   * @example
   * var positions = Cesium.Cartesian3.fromDegreesArrayHeights([-115.0, 37.0, 100000.0, -107.0, 33.0, 150000.0]);
   */
  Cartesian3.fromDegreesArrayHeights = function (coordinates, ellipsoid, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('coordinates', coordinates)
    if (coordinates.length < 3 || coordinates.length % 3 !== 0) {
      throw new RuntimeError.DeveloperError('the number of coordinates must be a multiple of 3 and at least 3')
    }
    //>>includeEnd('debug');

    var length = coordinates.length
    if (!when.defined(result)) {
      result = new Array(length / 3)
    } else {
      result.length = length / 3
    }

    for (var i = 0; i < length; i += 3) {
      var longitude = coordinates[i]
      var latitude = coordinates[i + 1]
      var height = coordinates[i + 2]
      var index = i / 3
      result[index] = Cartesian3.fromDegrees(longitude, latitude, height, ellipsoid, result[index])
    }

    return result
  }

  /**
   * Returns an array of Cartesian3 positions given an array of longitude, latitude and height values where longitude and latitude are given in radians.
   *
   * @param {Number[]} coordinates A list of longitude, latitude and height values. Values alternate [longitude, latitude, height, longitude, latitude, height...].
   * @param {Ellipsoid} [ellipsoid=Ellipsoid.WGS84] The ellipsoid on which the position lies.
   * @param {Cartesian3[]} [result] An array of Cartesian3 objects to store the result.
   * @returns {Cartesian3[]} The array of positions.
   *
   * @example
   * var positions = Cesium.Cartesian3.fromRadiansArrayHeights([-2.007, 0.645, 100000.0, -1.867, .575, 150000.0]);
   */
  Cartesian3.fromRadiansArrayHeights = function (coordinates, ellipsoid, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('coordinates', coordinates)
    if (coordinates.length < 3 || coordinates.length % 3 !== 0) {
      throw new RuntimeError.DeveloperError('the number of coordinates must be a multiple of 3 and at least 3')
    }
    //>>includeEnd('debug');

    var length = coordinates.length
    if (!when.defined(result)) {
      result = new Array(length / 3)
    } else {
      result.length = length / 3
    }

    for (var i = 0; i < length; i += 3) {
      var longitude = coordinates[i]
      var latitude = coordinates[i + 1]
      var height = coordinates[i + 2]
      var index = i / 3
      result[index] = Cartesian3.fromRadians(longitude, latitude, height, ellipsoid, result[index])
    }

    return result
  }

  /**
   * An immutable Cartesian3 instance initialized to (0.0, 0.0, 0.0).
   *
   * @type {Cartesian3}
   * @constant
   */
  Cartesian3.ZERO = Object.freeze(new Cartesian3(0.0, 0.0, 0.0))

  /**
   * An immutable Cartesian3 instance initialized to (1.0, 1.0, 1.0).
   *
   * @type {Cartesian3}
   * @constant
   */
  Cartesian3.ONE = Object.freeze(new Cartesian3(1.0, 1.0, 1.0))

  /**
   * An immutable Cartesian3 instance initialized to (1.0, 0.0, 0.0).
   *
   * @type {Cartesian3}
   * @constant
   */
  Cartesian3.UNIT_X = Object.freeze(new Cartesian3(1.0, 0.0, 0.0))

  /**
   * An immutable Cartesian3 instance initialized to (0.0, 1.0, 0.0).
   *
   * @type {Cartesian3}
   * @constant
   */
  Cartesian3.UNIT_Y = Object.freeze(new Cartesian3(0.0, 1.0, 0.0))

  /**
   * An immutable Cartesian3 instance initialized to (0.0, 0.0, 1.0).
   *
   * @type {Cartesian3}
   * @constant
   */
  Cartesian3.UNIT_Z = Object.freeze(new Cartesian3(0.0, 0.0, 1.0))

  /**
   * Duplicates this Cartesian3 instance.
   *
   * @param {Cartesian3} [result] The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
   */
  Cartesian3.prototype.clone = function (result) {
    return Cartesian3.clone(this, result)
  }

  /**
   * Compares this Cartesian against the provided Cartesian componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Cartesian3} [right] The right hand side Cartesian.
   * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
   */
  Cartesian3.prototype.equals = function (right) {
    return Cartesian3.equals(this, right)
  }

  /**
   * Compares this Cartesian against the provided Cartesian componentwise and returns
   * <code>true</code> if they pass an absolute or relative tolerance test,
   * <code>false</code> otherwise.
   *
   * @param {Cartesian3} [right] The right hand side Cartesian.
   * @param {Number} [relativeEpsilon=0] The relative epsilon tolerance to use for equality testing.
   * @param {Number} [absoluteEpsilon=relativeEpsilon] The absolute epsilon tolerance to use for equality testing.
   * @returns {Boolean} <code>true</code> if they are within the provided epsilon, <code>false</code> otherwise.
   */
  Cartesian3.prototype.equalsEpsilon = function (right, relativeEpsilon, absoluteEpsilon) {
    return Cartesian3.equalsEpsilon(this, right, relativeEpsilon, absoluteEpsilon)
  }

  /**
   * Creates a string representing this Cartesian in the format '(x, y, z)'.
   *
   * @returns {String} A string representing this Cartesian in the format '(x, y, z)'.
   */
  Cartesian3.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ', ' + this.z + ')'
  }

  var scaleToGeodeticSurfaceIntersection = new Cartesian3()
  var scaleToGeodeticSurfaceGradient = new Cartesian3()

  /**
   * Scales the provided Cartesian position along the geodetic surface normal
   * so that it is on the surface of this ellipsoid.  If the position is
   * at the center of the ellipsoid, this function returns undefined.
   *
   * @param {Cartesian3} cartesian The Cartesian position to scale.
   * @param {Cartesian3} oneOverRadii One over radii of the ellipsoid.
   * @param {Cartesian3} oneOverRadiiSquared One over radii squared of the ellipsoid.
   * @param {Number} centerToleranceSquared Tolerance for closeness to the center.
   * @param {Cartesian3} [result] The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter, a new Cartesian3 instance if none was provided, or undefined if the position is at the center.
   *
   * @function scaleToGeodeticSurface
   *
   * @private
   */
  function scaleToGeodeticSurface(cartesian, oneOverRadii, oneOverRadiiSquared, centerToleranceSquared, result) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(cartesian)) {
      throw new RuntimeError.DeveloperError('cartesian is required.')
    }
    if (!when.defined(oneOverRadii)) {
      throw new RuntimeError.DeveloperError('oneOverRadii is required.')
    }
    if (!when.defined(oneOverRadiiSquared)) {
      throw new RuntimeError.DeveloperError('oneOverRadiiSquared is required.')
    }
    if (!when.defined(centerToleranceSquared)) {
      throw new RuntimeError.DeveloperError('centerToleranceSquared is required.')
    }
    //>>includeEnd('debug');

    var positionX = cartesian.x
    var positionY = cartesian.y
    var positionZ = cartesian.z

    var oneOverRadiiX = oneOverRadii.x
    var oneOverRadiiY = oneOverRadii.y
    var oneOverRadiiZ = oneOverRadii.z

    var x2 = positionX * positionX * oneOverRadiiX * oneOverRadiiX
    var y2 = positionY * positionY * oneOverRadiiY * oneOverRadiiY
    var z2 = positionZ * positionZ * oneOverRadiiZ * oneOverRadiiZ

    // Compute the squared ellipsoid norm.
    var squaredNorm = x2 + y2 + z2
    var ratio = Math.sqrt(1.0 / squaredNorm)

    // As an initial approximation, assume that the radial intersection is the projection point.
    var intersection = Cartesian3.multiplyByScalar(cartesian, ratio, scaleToGeodeticSurfaceIntersection)

    // If the position is near the center, the iteration will not converge.
    if (squaredNorm < centerToleranceSquared) {
      return !isFinite(ratio) ? undefined : Cartesian3.clone(intersection, result)
    }

    var oneOverRadiiSquaredX = oneOverRadiiSquared.x
    var oneOverRadiiSquaredY = oneOverRadiiSquared.y
    var oneOverRadiiSquaredZ = oneOverRadiiSquared.z

    // Use the gradient at the intersection point in place of the true unit normal.
    // The difference in magnitude will be absorbed in the multiplier.
    var gradient = scaleToGeodeticSurfaceGradient
    gradient.x = intersection.x * oneOverRadiiSquaredX * 2.0
    gradient.y = intersection.y * oneOverRadiiSquaredY * 2.0
    gradient.z = intersection.z * oneOverRadiiSquaredZ * 2.0

    // Compute the initial guess at the normal vector multiplier, lambda.
    var lambda = ((1.0 - ratio) * Cartesian3.magnitude(cartesian)) / (0.5 * Cartesian3.magnitude(gradient))
    var correction = 0.0

    var func
    var denominator
    var xMultiplier
    var yMultiplier
    var zMultiplier
    var xMultiplier2
    var yMultiplier2
    var zMultiplier2
    var xMultiplier3
    var yMultiplier3
    var zMultiplier3

    do {
      lambda -= correction

      xMultiplier = 1.0 / (1.0 + lambda * oneOverRadiiSquaredX)
      yMultiplier = 1.0 / (1.0 + lambda * oneOverRadiiSquaredY)
      zMultiplier = 1.0 / (1.0 + lambda * oneOverRadiiSquaredZ)

      xMultiplier2 = xMultiplier * xMultiplier
      yMultiplier2 = yMultiplier * yMultiplier
      zMultiplier2 = zMultiplier * zMultiplier

      xMultiplier3 = xMultiplier2 * xMultiplier
      yMultiplier3 = yMultiplier2 * yMultiplier
      zMultiplier3 = zMultiplier2 * zMultiplier

      func = x2 * xMultiplier2 + y2 * yMultiplier2 + z2 * zMultiplier2 - 1.0

      // "denominator" here refers to the use of this expression in the velocity and acceleration
      // computations in the sections to follow.
      denominator = x2 * xMultiplier3 * oneOverRadiiSquaredX + y2 * yMultiplier3 * oneOverRadiiSquaredY + z2 * zMultiplier3 * oneOverRadiiSquaredZ

      var derivative = -2.0 * denominator

      correction = func / derivative
    } while (Math.abs(func) > ComponentDatatype.CesiumMath.EPSILON12)

    if (!when.defined(result)) {
      return new Cartesian3(positionX * xMultiplier, positionY * yMultiplier, positionZ * zMultiplier)
    }
    result.x = positionX * xMultiplier
    result.y = positionY * yMultiplier
    result.z = positionZ * zMultiplier
    return result
  }

  /**
   * A position defined by longitude, latitude, and height.
   * @alias Cartographic
   * @constructor
   *
   * @param {Number} [longitude=0.0] The longitude, in radians.
   * @param {Number} [latitude=0.0] The latitude, in radians.
   * @param {Number} [height=0.0] The height, in meters, above the ellipsoid.
   *
   * @see Ellipsoid
   */
  function Cartographic(longitude, latitude, height) {
    /**
     * The longitude, in radians.
     * @type {Number}
     * @default 0.0
     */
    this.longitude = when.defaultValue(longitude, 0.0)

    /**
     * The latitude, in radians.
     * @type {Number}
     * @default 0.0
     */
    this.latitude = when.defaultValue(latitude, 0.0)

    /**
     * The height, in meters, above the ellipsoid.
     * @type {Number}
     * @default 0.0
     */
    this.height = when.defaultValue(height, 0.0)
  }

  /**
   * Creates a new Cartographic instance from longitude and latitude
   * specified in radians.
   *
   * @param {Number} longitude The longitude, in radians.
   * @param {Number} latitude The latitude, in radians.
   * @param {Number} [height=0.0] The height, in meters, above the ellipsoid.
   * @param {Cartographic} [result] The object onto which to store the result.
   * @returns {Cartographic} The modified result parameter or a new Cartographic instance if one was not provided.
   */
  Cartographic.fromRadians = function (longitude, latitude, height, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number('longitude', longitude)
    RuntimeError.Check.typeOf.number('latitude', latitude)
    //>>includeEnd('debug');

    height = when.defaultValue(height, 0.0)

    if (!when.defined(result)) {
      return new Cartographic(longitude, latitude, height)
    }

    result.longitude = longitude
    result.latitude = latitude
    result.height = height
    return result
  }

  /**
   * Creates a new Cartographic instance from longitude and latitude
   * specified in degrees.  The values in the resulting object will
   * be in radians.
   *
   * @param {Number} longitude The longitude, in degrees.
   * @param {Number} latitude The latitude, in degrees.
   * @param {Number} [height=0.0] The height, in meters, above the ellipsoid.
   * @param {Cartographic} [result] The object onto which to store the result.
   * @returns {Cartographic} The modified result parameter or a new Cartographic instance if one was not provided.
   */
  Cartographic.fromDegrees = function (longitude, latitude, height, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number('longitude', longitude)
    RuntimeError.Check.typeOf.number('latitude', latitude)
    //>>includeEnd('debug');
    longitude = ComponentDatatype.CesiumMath.toRadians(longitude)
    latitude = ComponentDatatype.CesiumMath.toRadians(latitude)

    return Cartographic.fromRadians(longitude, latitude, height, result)
  }

  var cartesianToCartographicN$1 = new Cartesian3()
  var cartesianToCartographicP$1 = new Cartesian3()
  var cartesianToCartographicH$1 = new Cartesian3()
  var wgs84OneOverRadii = new Cartesian3(1.0 / 6378137.0, 1.0 / 6378137.0, 1.0 / 6356752.3142451793)
  var wgs84OneOverRadiiSquared = new Cartesian3(
    1.0 / (6378137.0 * 6378137.0),
    1.0 / (6378137.0 * 6378137.0),
    1.0 / (6356752.3142451793 * 6356752.3142451793)
  )
  var wgs84CenterToleranceSquared = ComponentDatatype.CesiumMath.EPSILON1

  /**
   * Creates a new Cartographic instance from a Cartesian position. The values in the
   * resulting object will be in radians.
   *
   * @param {Cartesian3} cartesian The Cartesian position to convert to cartographic representation.
   * @param {Ellipsoid} [ellipsoid=Ellipsoid.WGS84] The ellipsoid on which the position lies.
   * @param {Cartographic} [result] The object onto which to store the result.
   * @returns {Cartographic} The modified result parameter, new Cartographic instance if none was provided, or undefined if the cartesian is at the center of the ellipsoid.
   */
  Cartographic.fromCartesian = function (cartesian, ellipsoid, result) {
    var oneOverRadii = when.defined(ellipsoid) ? ellipsoid.oneOverRadii : wgs84OneOverRadii
    var oneOverRadiiSquared = when.defined(ellipsoid) ? ellipsoid.oneOverRadiiSquared : wgs84OneOverRadiiSquared
    var centerToleranceSquared = when.defined(ellipsoid) ? ellipsoid._centerToleranceSquared : wgs84CenterToleranceSquared

    //`cartesian is required.` is thrown from scaleToGeodeticSurface
    var p = scaleToGeodeticSurface(cartesian, oneOverRadii, oneOverRadiiSquared, centerToleranceSquared, cartesianToCartographicP$1)

    if (!when.defined(p)) {
      return undefined
    }

    var n = Cartesian3.multiplyComponents(p, oneOverRadiiSquared, cartesianToCartographicN$1)
    n = Cartesian3.normalize(n, n)

    var h = Cartesian3.subtract(cartesian, p, cartesianToCartographicH$1)

    var longitude = Math.atan2(n.y, n.x)
    var latitude = Math.asin(n.z)
    var height = ComponentDatatype.CesiumMath.sign(Cartesian3.dot(h, cartesian)) * Cartesian3.magnitude(h)

    if (!when.defined(result)) {
      return new Cartographic(longitude, latitude, height)
    }
    result.longitude = longitude
    result.latitude = latitude
    result.height = height
    return result
  }

  /**
   * Creates a new Cartesian3 instance from a Cartographic input. The values in the inputted
   * object should be in radians.
   *
   * @param {Cartographic} cartographic Input to be converted into a Cartesian3 output.
   * @param {Ellipsoid} [ellipsoid=Ellipsoid.WGS84] The ellipsoid on which the position lies.
   * @param {Cartesian3} [result] The object onto which to store the result.
   * @returns {Cartesian3} The position
   */
  Cartographic.toCartesian = function (cartographic, ellipsoid, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('cartographic', cartographic)
    //>>includeEnd('debug');

    return Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height, ellipsoid, result)
  }

  /**
   * Duplicates a Cartographic instance.
   *
   * @param {Cartographic} cartographic The cartographic to duplicate.
   * @param {Cartographic} [result] The object onto which to store the result.
   * @returns {Cartographic} The modified result parameter or a new Cartographic instance if one was not provided. (Returns undefined if cartographic is undefined)
   */
  Cartographic.clone = function (cartographic, result) {
    if (!when.defined(cartographic)) {
      return undefined
    }
    if (!when.defined(result)) {
      return new Cartographic(cartographic.longitude, cartographic.latitude, cartographic.height)
    }
    result.longitude = cartographic.longitude
    result.latitude = cartographic.latitude
    result.height = cartographic.height
    return result
  }

  /**
   * Compares the provided cartographics componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Cartographic} [left] The first cartographic.
   * @param {Cartographic} [right] The second cartographic.
   * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
   */
  Cartographic.equals = function (left, right) {
    return (
      left === right ||
      (when.defined(left) &&
        when.defined(right) &&
        left.longitude === right.longitude &&
        left.latitude === right.latitude &&
        left.height === right.height)
    )
  }

  /**
   * Compares the provided cartographics componentwise and returns
   * <code>true</code> if they are within the provided epsilon,
   * <code>false</code> otherwise.
   *
   * @param {Cartographic} [left] The first cartographic.
   * @param {Cartographic} [right] The second cartographic.
   * @param {Number} [epsilon=0] The epsilon to use for equality testing.
   * @returns {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
   */
  Cartographic.equalsEpsilon = function (left, right, epsilon) {
    epsilon = when.defaultValue(epsilon, 0)

    return (
      left === right ||
      (when.defined(left) &&
        when.defined(right) &&
        Math.abs(left.longitude - right.longitude) <= epsilon &&
        Math.abs(left.latitude - right.latitude) <= epsilon &&
        Math.abs(left.height - right.height) <= epsilon)
    )
  }

  /**
   * An immutable Cartographic instance initialized to (0.0, 0.0, 0.0).
   *
   * @type {Cartographic}
   * @constant
   */
  Cartographic.ZERO = Object.freeze(new Cartographic(0.0, 0.0, 0.0))

  /**
   * Duplicates this instance.
   *
   * @param {Cartographic} [result] The object onto which to store the result.
   * @returns {Cartographic} The modified result parameter or a new Cartographic instance if one was not provided.
   */
  Cartographic.prototype.clone = function (result) {
    return Cartographic.clone(this, result)
  }

  /**
   * Compares the provided against this cartographic componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Cartographic} [right] The second cartographic.
   * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
   */
  Cartographic.prototype.equals = function (right) {
    return Cartographic.equals(this, right)
  }

  /**
   * Compares the provided against this cartographic componentwise and returns
   * <code>true</code> if they are within the provided epsilon,
   * <code>false</code> otherwise.
   *
   * @param {Cartographic} [right] The second cartographic.
   * @param {Number} [epsilon=0] The epsilon to use for equality testing.
   * @returns {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
   */
  Cartographic.prototype.equalsEpsilon = function (right, epsilon) {
    return Cartographic.equalsEpsilon(this, right, epsilon)
  }

  /**
   * Creates a string representing this cartographic in the format '(longitude, latitude, height)'.
   *
   * @returns {String} A string representing the provided cartographic in the format '(longitude, latitude, height)'.
   */
  Cartographic.prototype.toString = function () {
    return '(' + this.longitude + ', ' + this.latitude + ', ' + this.height + ')'
  }

  function initialize(ellipsoid, x, y, z) {
    x = when.defaultValue(x, 0.0)
    y = when.defaultValue(y, 0.0)
    z = when.defaultValue(z, 0.0)

    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number.greaterThanOrEquals('x', x, 0.0)
    RuntimeError.Check.typeOf.number.greaterThanOrEquals('y', y, 0.0)
    RuntimeError.Check.typeOf.number.greaterThanOrEquals('z', z, 0.0)
    //>>includeEnd('debug');

    ellipsoid._radii = new Cartesian3(x, y, z)

    ellipsoid._radiiSquared = new Cartesian3(x * x, y * y, z * z)

    ellipsoid._radiiToTheFourth = new Cartesian3(x * x * x * x, y * y * y * y, z * z * z * z)

    ellipsoid._oneOverRadii = new Cartesian3(x === 0.0 ? 0.0 : 1.0 / x, y === 0.0 ? 0.0 : 1.0 / y, z === 0.0 ? 0.0 : 1.0 / z)

    ellipsoid._oneOverRadiiSquared = new Cartesian3(x === 0.0 ? 0.0 : 1.0 / (x * x), y === 0.0 ? 0.0 : 1.0 / (y * y), z === 0.0 ? 0.0 : 1.0 / (z * z))

    ellipsoid._minimumRadius = Math.min(x, y, z)

    ellipsoid._maximumRadius = Math.max(x, y, z)

    ellipsoid._centerToleranceSquared = ComponentDatatype.CesiumMath.EPSILON1

    if (ellipsoid._radiiSquared.z !== 0) {
      ellipsoid._squaredXOverSquaredZ = ellipsoid._radiiSquared.x / ellipsoid._radiiSquared.z
    }
  }

  /**
   * A quadratic surface defined in Cartesian coordinates by the equation
   * <code>(x / a)^2 + (y / b)^2 + (z / c)^2 = 1</code>.  Primarily used
   * by Cesium to represent the shape of planetary bodies.
   *
   * Rather than constructing this object directly, one of the provided
   * constants is normally used.
   * @alias Ellipsoid
   * @constructor
   *
   * @param {Number} [x=0] The radius in the x direction.
   * @param {Number} [y=0] The radius in the y direction.
   * @param {Number} [z=0] The radius in the z direction.
   *
   * @exception {DeveloperError} All radii components must be greater than or equal to zero.
   *
   * @see Ellipsoid.fromCartesian3
   * @see Ellipsoid.WGS84
   * @see Ellipsoid.UNIT_SPHERE
   */
  function Ellipsoid(x, y, z) {
    this._radii = undefined
    this._radiiSquared = undefined
    this._radiiToTheFourth = undefined
    this._oneOverRadii = undefined
    this._oneOverRadiiSquared = undefined
    this._minimumRadius = undefined
    this._maximumRadius = undefined
    this._centerToleranceSquared = undefined
    this._squaredXOverSquaredZ = undefined

    initialize(this, x, y, z)
  }

  Object.defineProperties(Ellipsoid.prototype, {
    /**
     * Gets the radii of the ellipsoid.
     * @memberof Ellipsoid.prototype
     * @type {Cartesian3}
     * @readonly
     */
    radii: {
      get: function () {
        return this._radii
      }
    },
    /**
     * Gets the squared radii of the ellipsoid.
     * @memberof Ellipsoid.prototype
     * @type {Cartesian3}
     * @readonly
     */
    radiiSquared: {
      get: function () {
        return this._radiiSquared
      }
    },
    /**
     * Gets the radii of the ellipsoid raise to the fourth power.
     * @memberof Ellipsoid.prototype
     * @type {Cartesian3}
     * @readonly
     */
    radiiToTheFourth: {
      get: function () {
        return this._radiiToTheFourth
      }
    },
    /**
     * Gets one over the radii of the ellipsoid.
     * @memberof Ellipsoid.prototype
     * @type {Cartesian3}
     * @readonly
     */
    oneOverRadii: {
      get: function () {
        return this._oneOverRadii
      }
    },
    /**
     * Gets one over the squared radii of the ellipsoid.
     * @memberof Ellipsoid.prototype
     * @type {Cartesian3}
     * @readonly
     */
    oneOverRadiiSquared: {
      get: function () {
        return this._oneOverRadiiSquared
      }
    },
    /**
     * Gets the minimum radius of the ellipsoid.
     * @memberof Ellipsoid.prototype
     * @type {Number}
     * @readonly
     */
    minimumRadius: {
      get: function () {
        return this._minimumRadius
      }
    },
    /**
     * Gets the maximum radius of the ellipsoid.
     * @memberof Ellipsoid.prototype
     * @type {Number}
     * @readonly
     */
    maximumRadius: {
      get: function () {
        return this._maximumRadius
      }
    }
  })

  /**
   * Duplicates an Ellipsoid instance.
   *
   * @param {Ellipsoid} ellipsoid The ellipsoid to duplicate.
   * @param {Ellipsoid} [result] The object onto which to store the result, or undefined if a new
   *                    instance should be created.
   * @returns {Ellipsoid} The cloned Ellipsoid. (Returns undefined if ellipsoid is undefined)
   */
  Ellipsoid.clone = function (ellipsoid, result) {
    if (!when.defined(ellipsoid)) {
      return undefined
    }
    var radii = ellipsoid._radii

    if (!when.defined(result)) {
      return new Ellipsoid(radii.x, radii.y, radii.z)
    }

    Cartesian3.clone(radii, result._radii)
    Cartesian3.clone(ellipsoid._radiiSquared, result._radiiSquared)
    Cartesian3.clone(ellipsoid._radiiToTheFourth, result._radiiToTheFourth)
    Cartesian3.clone(ellipsoid._oneOverRadii, result._oneOverRadii)
    Cartesian3.clone(ellipsoid._oneOverRadiiSquared, result._oneOverRadiiSquared)
    result._minimumRadius = ellipsoid._minimumRadius
    result._maximumRadius = ellipsoid._maximumRadius
    result._centerToleranceSquared = ellipsoid._centerToleranceSquared

    return result
  }

  /**
   * Computes an Ellipsoid from a Cartesian specifying the radii in x, y, and z directions.
   *
   * @param {Cartesian3} [cartesian=Cartesian3.ZERO] The ellipsoid's radius in the x, y, and z directions.
   * @param {Ellipsoid} [result] The object onto which to store the result, or undefined if a new
   *                    instance should be created.
   * @returns {Ellipsoid} A new Ellipsoid instance.
   *
   * @exception {DeveloperError} All radii components must be greater than or equal to zero.
   *
   * @see Ellipsoid.WGS84
   * @see Ellipsoid.UNIT_SPHERE
   */
  Ellipsoid.fromCartesian3 = function (cartesian, result) {
    if (!when.defined(result)) {
      result = new Ellipsoid()
    }

    if (!when.defined(cartesian)) {
      return result
    }

    initialize(result, cartesian.x, cartesian.y, cartesian.z)
    return result
  }

  /**
   * An Ellipsoid instance initialized to the WGS84 standard.
   *
   * @type {Ellipsoid}
   * @constant
   */
  Ellipsoid.WGS84 = Object.freeze(new Ellipsoid(6378137.0, 6378137.0, 6356752.3142451793))

  /**
   * An Ellipsoid instance initialized to radii of (1.0, 1.0, 1.0).
   *
   * @type {Ellipsoid}
   * @constant
   */
  Ellipsoid.UNIT_SPHERE = Object.freeze(new Ellipsoid(1.0, 1.0, 1.0))

  /**
   * An Ellipsoid instance initialized to a sphere with the lunar radius.
   *
   * @type {Ellipsoid}
   * @constant
   */
  Ellipsoid.MOON = Object.freeze(
    new Ellipsoid(ComponentDatatype.CesiumMath.LUNAR_RADIUS, ComponentDatatype.CesiumMath.LUNAR_RADIUS, ComponentDatatype.CesiumMath.LUNAR_RADIUS)
  )

  /**
   * Duplicates an Ellipsoid instance.
   *
   * @param {Ellipsoid} [result] The object onto which to store the result, or undefined if a new
   *                    instance should be created.
   * @returns {Ellipsoid} The cloned Ellipsoid.
   */
  Ellipsoid.prototype.clone = function (result) {
    return Ellipsoid.clone(this, result)
  }

  /**
   * The number of elements used to pack the object into an array.
   * @type {Number}
   */
  Ellipsoid.packedLength = Cartesian3.packedLength

  /**
   * Stores the provided instance into the provided array.
   *
   * @param {Ellipsoid} value The value to pack.
   * @param {Number[]} array The array to pack into.
   * @param {Number} [startingIndex=0] The index into the array at which to start packing the elements.
   *
   * @returns {Number[]} The array that was packed into
   */
  Ellipsoid.pack = function (value, array, startingIndex) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('value', value)
    RuntimeError.Check.defined('array', array)
    //>>includeEnd('debug');

    startingIndex = when.defaultValue(startingIndex, 0)

    Cartesian3.pack(value._radii, array, startingIndex)

    return array
  }

  /**
   * Retrieves an instance from a packed array.
   *
   * @param {Number[]} array The packed array.
   * @param {Number} [startingIndex=0] The starting index of the element to be unpacked.
   * @param {Ellipsoid} [result] The object into which to store the result.
   * @returns {Ellipsoid} The modified result parameter or a new Ellipsoid instance if one was not provided.
   */
  Ellipsoid.unpack = function (array, startingIndex, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('array', array)
    //>>includeEnd('debug');

    startingIndex = when.defaultValue(startingIndex, 0)

    var radii = Cartesian3.unpack(array, startingIndex)
    return Ellipsoid.fromCartesian3(radii, result)
  }

  /**
   * Computes the unit vector directed from the center of this ellipsoid toward the provided Cartesian position.
   * @function
   *
   * @param {Cartesian3} cartesian The Cartesian for which to to determine the geocentric normal.
   * @param {Cartesian3} [result] The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter or a new Cartesian3 instance if none was provided.
   */
  Ellipsoid.prototype.geocentricSurfaceNormal = Cartesian3.normalize

  /**
   * Computes the normal of the plane tangent to the surface of the ellipsoid at the provided position.
   *
   * @param {Cartographic} cartographic The cartographic position for which to to determine the geodetic normal.
   * @param {Cartesian3} [result] The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter or a new Cartesian3 instance if none was provided.
   */
  Ellipsoid.prototype.geodeticSurfaceNormalCartographic = function (cartographic, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartographic', cartographic)
    //>>includeEnd('debug');

    var longitude = cartographic.longitude
    var latitude = cartographic.latitude
    var cosLatitude = Math.cos(latitude)

    var x = cosLatitude * Math.cos(longitude)
    var y = cosLatitude * Math.sin(longitude)
    var z = Math.sin(latitude)

    if (!when.defined(result)) {
      result = new Cartesian3()
    }
    result.x = x
    result.y = y
    result.z = z
    return Cartesian3.normalize(result, result)
  }

  /**
   * Computes the normal of the plane tangent to the surface of the ellipsoid at the provided position.
   *
   * @param {Cartesian3} cartesian The Cartesian position for which to to determine the surface normal.
   * @param {Cartesian3} [result] The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter or a new Cartesian3 instance if none was provided, or undefined if a normal cannot be found.
   */
  Ellipsoid.prototype.geodeticSurfaceNormal = function (cartesian, result) {
    if (Cartesian3.equalsEpsilon(cartesian, Cartesian3.ZERO, ComponentDatatype.CesiumMath.EPSILON14)) {
      return undefined
    }
    if (!when.defined(result)) {
      result = new Cartesian3()
    }
    result = Cartesian3.multiplyComponents(cartesian, this._oneOverRadiiSquared, result)
    return Cartesian3.normalize(result, result)
  }

  var cartographicToCartesianNormal = new Cartesian3()
  var cartographicToCartesianK = new Cartesian3()

  /**
   * Converts the provided cartographic to Cartesian representation.
   *
   * @param {Cartographic} cartographic The cartographic position.
   * @param {Cartesian3} [result] The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter or a new Cartesian3 instance if none was provided.
   *
   * @example
   * //Create a Cartographic and determine it's Cartesian representation on a WGS84 ellipsoid.
   * var position = new Cesium.Cartographic(Cesium.Math.toRadians(21), Cesium.Math.toRadians(78), 5000);
   * var cartesianPosition = Cesium.Ellipsoid.WGS84.cartographicToCartesian(position);
   */
  Ellipsoid.prototype.cartographicToCartesian = function (cartographic, result) {
    //`cartographic is required` is thrown from geodeticSurfaceNormalCartographic.
    var n = cartographicToCartesianNormal
    var k = cartographicToCartesianK
    this.geodeticSurfaceNormalCartographic(cartographic, n)
    Cartesian3.multiplyComponents(this._radiiSquared, n, k)
    var gamma = Math.sqrt(Cartesian3.dot(n, k))
    Cartesian3.divideByScalar(k, gamma, k)
    Cartesian3.multiplyByScalar(n, cartographic.height, n)

    if (!when.defined(result)) {
      result = new Cartesian3()
    }
    return Cartesian3.add(k, n, result)
  }

  /**
   * Converts the provided array of cartographics to an array of Cartesians.
   *
   * @param {Cartographic[]} cartographics An array of cartographic positions.
   * @param {Cartesian3[]} [result] The object onto which to store the result.
   * @returns {Cartesian3[]} The modified result parameter or a new Array instance if none was provided.
   *
   * @example
   * //Convert an array of Cartographics and determine their Cartesian representation on a WGS84 ellipsoid.
   * var positions = [new Cesium.Cartographic(Cesium.Math.toRadians(21), Cesium.Math.toRadians(78), 0),
   *                  new Cesium.Cartographic(Cesium.Math.toRadians(21.321), Cesium.Math.toRadians(78.123), 100),
   *                  new Cesium.Cartographic(Cesium.Math.toRadians(21.645), Cesium.Math.toRadians(78.456), 250)];
   * var cartesianPositions = Cesium.Ellipsoid.WGS84.cartographicArrayToCartesianArray(positions);
   */
  Ellipsoid.prototype.cartographicArrayToCartesianArray = function (cartographics, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('cartographics', cartographics)
    //>>includeEnd('debug')

    var length = cartographics.length
    if (!when.defined(result)) {
      result = new Array(length)
    } else {
      result.length = length
    }
    for (var i = 0; i < length; i++) {
      result[i] = this.cartographicToCartesian(cartographics[i], result[i])
    }
    return result
  }

  var cartesianToCartographicN = new Cartesian3()
  var cartesianToCartographicP = new Cartesian3()
  var cartesianToCartographicH = new Cartesian3()

  /**
   * Converts the provided cartesian to cartographic representation.
   * The cartesian is undefined at the center of the ellipsoid.
   *
   * @param {Cartesian3} cartesian The Cartesian position to convert to cartographic representation.
   * @param {Cartographic} [result] The object onto which to store the result.
   * @returns {Cartographic} The modified result parameter, new Cartographic instance if none was provided, or undefined if the cartesian is at the center of the ellipsoid.
   *
   * @example
   * //Create a Cartesian and determine it's Cartographic representation on a WGS84 ellipsoid.
   * var position = new Cesium.Cartesian3(17832.12, 83234.52, 952313.73);
   * var cartographicPosition = Cesium.Ellipsoid.WGS84.cartesianToCartographic(position);
   */
  Ellipsoid.prototype.cartesianToCartographic = function (cartesian, result) {
    //`cartesian is required.` is thrown from scaleToGeodeticSurface
    var p = this.scaleToGeodeticSurface(cartesian, cartesianToCartographicP)

    if (!when.defined(p)) {
      return undefined
    }

    var n = this.geodeticSurfaceNormal(p, cartesianToCartographicN)
    var h = Cartesian3.subtract(cartesian, p, cartesianToCartographicH)

    var longitude = Math.atan2(n.y, n.x)
    var latitude = Math.asin(n.z)
    var height = ComponentDatatype.CesiumMath.sign(Cartesian3.dot(h, cartesian)) * Cartesian3.magnitude(h)

    if (!when.defined(result)) {
      return new Cartographic(longitude, latitude, height)
    }
    result.longitude = longitude
    result.latitude = latitude
    result.height = height
    return result
  }

  /**
   * Converts the provided array of cartesians to an array of cartographics.
   *
   * @param {Cartesian3[]} cartesians An array of Cartesian positions.
   * @param {Cartographic[]} [result] The object onto which to store the result.
   * @returns {Cartographic[]} The modified result parameter or a new Array instance if none was provided.
   *
   * @example
   * //Create an array of Cartesians and determine their Cartographic representation on a WGS84 ellipsoid.
   * var positions = [new Cesium.Cartesian3(17832.12, 83234.52, 952313.73),
   *                  new Cesium.Cartesian3(17832.13, 83234.53, 952313.73),
   *                  new Cesium.Cartesian3(17832.14, 83234.54, 952313.73)]
   * var cartographicPositions = Cesium.Ellipsoid.WGS84.cartesianArrayToCartographicArray(positions);
   */
  Ellipsoid.prototype.cartesianArrayToCartographicArray = function (cartesians, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('cartesians', cartesians)
    //>>includeEnd('debug');

    var length = cartesians.length
    if (!when.defined(result)) {
      result = new Array(length)
    } else {
      result.length = length
    }
    for (var i = 0; i < length; ++i) {
      result[i] = this.cartesianToCartographic(cartesians[i], result[i])
    }
    return result
  }

  /**
   * Scales the provided Cartesian position along the geodetic surface normal
   * so that it is on the surface of this ellipsoid.  If the position is
   * at the center of the ellipsoid, this function returns undefined.
   *
   * @param {Cartesian3} cartesian The Cartesian position to scale.
   * @param {Cartesian3} [result] The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter, a new Cartesian3 instance if none was provided, or undefined if the position is at the center.
   */
  Ellipsoid.prototype.scaleToGeodeticSurface = function (cartesian, result) {
    return scaleToGeodeticSurface(cartesian, this._oneOverRadii, this._oneOverRadiiSquared, this._centerToleranceSquared, result)
  }

  /**
   * Scales the provided Cartesian position along the geocentric surface normal
   * so that it is on the surface of this ellipsoid.
   *
   * @param {Cartesian3} cartesian The Cartesian position to scale.
   * @param {Cartesian3} [result] The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter or a new Cartesian3 instance if none was provided.
   */
  Ellipsoid.prototype.scaleToGeocentricSurface = function (cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      result = new Cartesian3()
    }

    var positionX = cartesian.x
    var positionY = cartesian.y
    var positionZ = cartesian.z
    var oneOverRadiiSquared = this._oneOverRadiiSquared

    var beta =
      1.0 /
      Math.sqrt(
        positionX * positionX * oneOverRadiiSquared.x + positionY * positionY * oneOverRadiiSquared.y + positionZ * positionZ * oneOverRadiiSquared.z
      )

    return Cartesian3.multiplyByScalar(cartesian, beta, result)
  }

  /**
   * Transforms a Cartesian X, Y, Z position to the ellipsoid-scaled space by multiplying
   * its components by the result of {@link Ellipsoid#oneOverRadii}.
   *
   * @param {Cartesian3} position The position to transform.
   * @param {Cartesian3} [result] The position to which to copy the result, or undefined to create and
   *        return a new instance.
   * @returns {Cartesian3} The position expressed in the scaled space.  The returned instance is the
   *          one passed as the result parameter if it is not undefined, or a new instance of it is.
   */
  Ellipsoid.prototype.transformPositionToScaledSpace = function (position, result) {
    if (!when.defined(result)) {
      result = new Cartesian3()
    }

    return Cartesian3.multiplyComponents(position, this._oneOverRadii, result)
  }

  /**
   * Transforms a Cartesian X, Y, Z position from the ellipsoid-scaled space by multiplying
   * its components by the result of {@link Ellipsoid#radii}.
   *
   * @param {Cartesian3} position The position to transform.
   * @param {Cartesian3} [result] The position to which to copy the result, or undefined to create and
   *        return a new instance.
   * @returns {Cartesian3} The position expressed in the unscaled space.  The returned instance is the
   *          one passed as the result parameter if it is not undefined, or a new instance of it is.
   */
  Ellipsoid.prototype.transformPositionFromScaledSpace = function (position, result) {
    if (!when.defined(result)) {
      result = new Cartesian3()
    }

    return Cartesian3.multiplyComponents(position, this._radii, result)
  }

  /**
   * Compares this Ellipsoid against the provided Ellipsoid componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Ellipsoid} [right] The other Ellipsoid.
   * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
   */
  Ellipsoid.prototype.equals = function (right) {
    return this === right || (when.defined(right) && Cartesian3.equals(this._radii, right._radii))
  }

  /**
   * Creates a string representing this Ellipsoid in the format '(radii.x, radii.y, radii.z)'.
   *
   * @returns {String} A string representing this ellipsoid in the format '(radii.x, radii.y, radii.z)'.
   */
  Ellipsoid.prototype.toString = function () {
    return this._radii.toString()
  }

  /**
   * Computes a point which is the intersection of the surface normal with the z-axis.
   *
   * @param {Cartesian3} position the position. must be on the surface of the ellipsoid.
   * @param {Number} [buffer = 0.0] A buffer to subtract from the ellipsoid size when checking if the point is inside the ellipsoid.
   *                                In earth case, with common earth datums, there is no need for this buffer since the intersection point is always (relatively) very close to the center.
   *                                In WGS84 datum, intersection point is at max z = +-42841.31151331382 (0.673% of z-axis).
   *                                Intersection point could be outside the ellipsoid if the ratio of MajorAxis / AxisOfRotation is bigger than the square root of 2
   * @param {Cartesian3} [result] The cartesian to which to copy the result, or undefined to create and
   *        return a new instance.
   * @returns {Cartesian3 | undefined} the intersection point if it's inside the ellipsoid, undefined otherwise
   *
   * @exception {DeveloperError} position is required.
   * @exception {DeveloperError} Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y).
   * @exception {DeveloperError} Ellipsoid.radii.z must be greater than 0.
   */
  Ellipsoid.prototype.getSurfaceNormalIntersectionWithZAxis = function (position, buffer, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('position', position)

    if (!ComponentDatatype.CesiumMath.equalsEpsilon(this._radii.x, this._radii.y, ComponentDatatype.CesiumMath.EPSILON15)) {
      throw new RuntimeError.DeveloperError('Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y)')
    }

    RuntimeError.Check.typeOf.number.greaterThan('Ellipsoid.radii.z', this._radii.z, 0)
    //>>includeEnd('debug');

    buffer = when.defaultValue(buffer, 0.0)

    var squaredXOverSquaredZ = this._squaredXOverSquaredZ

    if (!when.defined(result)) {
      result = new Cartesian3()
    }

    result.x = 0.0
    result.y = 0.0
    result.z = position.z * (1 - squaredXOverSquaredZ)

    if (Math.abs(result.z) >= this._radii.z - buffer) {
      return undefined
    }

    return result
  }

  var abscissas = [0.14887433898163, 0.43339539412925, 0.67940956829902, 0.86506336668898, 0.97390652851717, 0.0]
  var weights = [0.29552422471475, 0.26926671930999, 0.21908636251598, 0.14945134915058, 0.066671344308684, 0.0]

  /**
   * Compute the 10th order Gauss-Legendre Quadrature of the given definite integral.
   *
   * @param {Number} a The lower bound for the integration.
   * @param {Number} b The upper bound for the integration.
   * @param {Ellipsoid~RealValuedScalarFunction} func The function to integrate.
   * @returns {Number} The value of the integral of the given function over the given domain.
   *
   * @private
   */
  function gaussLegendreQuadrature(a, b, func) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number('a', a)
    RuntimeError.Check.typeOf.number('b', b)
    RuntimeError.Check.typeOf.func('func', func)
    //>>includeEnd('debug');

    // The range is half of the normal range since the five weights add to one (ten weights add to two).
    // The values of the abscissas are multiplied by two to account for this.
    var xMean = 0.5 * (b + a)
    var xRange = 0.5 * (b - a)

    var sum = 0.0
    for (var i = 0; i < 5; i++) {
      var dx = xRange * abscissas[i]
      sum += weights[i] * (func(xMean + dx) + func(xMean - dx))
    }

    // Scale the sum to the range of x.
    sum *= xRange
    return sum
  }

  /**
   * A real valued scalar function.
   * @callback Ellipsoid~RealValuedScalarFunction
   *
   * @param {Number} x The value used to evaluate the function.
   * @returns {Number} The value of the function at x.
   *
   * @private
   */

  /**
   * Computes an approximation of the surface area of a rectangle on the surface of an ellipsoid using
   * Gauss-Legendre 10th order quadrature.
   *
   * @param {Rectangle} rectangle The rectangle used for computing the surface area.
   * @returns {Number} The approximate area of the rectangle on the surface of this ellipsoid.
   */
  Ellipsoid.prototype.surfaceArea = function (rectangle) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('rectangle', rectangle)
    //>>includeEnd('debug');
    var minLongitude = rectangle.west
    var maxLongitude = rectangle.east
    var minLatitude = rectangle.south
    var maxLatitude = rectangle.north

    while (maxLongitude < minLongitude) {
      maxLongitude += ComponentDatatype.CesiumMath.TWO_PI
    }

    var radiiSquared = this._radiiSquared
    var a2 = radiiSquared.x
    var b2 = radiiSquared.y
    var c2 = radiiSquared.z
    var a2b2 = a2 * b2
    return gaussLegendreQuadrature(minLatitude, maxLatitude, function (lat) {
      // phi represents the angle measured from the north pole
      // sin(phi) = sin(pi / 2 - lat) = cos(lat), cos(phi) is similar
      var sinPhi = Math.cos(lat)
      var cosPhi = Math.sin(lat)
      return (
        Math.cos(lat) *
        gaussLegendreQuadrature(minLongitude, maxLongitude, function (lon) {
          var cosTheta = Math.cos(lon)
          var sinTheta = Math.sin(lon)
          return Math.sqrt(a2b2 * cosPhi * cosPhi + c2 * (b2 * cosTheta * cosTheta + a2 * sinTheta * sinTheta) * sinPhi * sinPhi)
        })
      )
    })
  }

  /**
   * A 3x3 matrix, indexable as a column-major order array.
   * Constructor parameters are in row-major order for code readability.
   * @alias Matrix3
   * @constructor
   * @implements {ArrayLike<number>}
   *
   * @param {Number} [column0Row0=0.0] The value for column 0, row 0.
   * @param {Number} [column1Row0=0.0] The value for column 1, row 0.
   * @param {Number} [column2Row0=0.0] The value for column 2, row 0.
   * @param {Number} [column0Row1=0.0] The value for column 0, row 1.
   * @param {Number} [column1Row1=0.0] The value for column 1, row 1.
   * @param {Number} [column2Row1=0.0] The value for column 2, row 1.
   * @param {Number} [column0Row2=0.0] The value for column 0, row 2.
   * @param {Number} [column1Row2=0.0] The value for column 1, row 2.
   * @param {Number} [column2Row2=0.0] The value for column 2, row 2.
   *
   * @see Matrix3.fromColumnMajorArray
   * @see Matrix3.fromRowMajorArray
   * @see Matrix3.fromQuaternion
   * @see Matrix3.fromScale
   * @see Matrix3.fromUniformScale
   * @see Matrix2
   * @see Matrix4
   */
  function Matrix3(column0Row0, column1Row0, column2Row0, column0Row1, column1Row1, column2Row1, column0Row2, column1Row2, column2Row2) {
    this[0] = when.defaultValue(column0Row0, 0.0)
    this[1] = when.defaultValue(column0Row1, 0.0)
    this[2] = when.defaultValue(column0Row2, 0.0)
    this[3] = when.defaultValue(column1Row0, 0.0)
    this[4] = when.defaultValue(column1Row1, 0.0)
    this[5] = when.defaultValue(column1Row2, 0.0)
    this[6] = when.defaultValue(column2Row0, 0.0)
    this[7] = when.defaultValue(column2Row1, 0.0)
    this[8] = when.defaultValue(column2Row2, 0.0)
  }

  /**
   * The number of elements used to pack the object into an array.
   * @type {Number}
   */
  Matrix3.packedLength = 9

  /**
   * Stores the provided instance into the provided array.
   *
   * @param {Matrix3} value The value to pack.
   * @param {Number[]} array The array to pack into.
   * @param {Number} [startingIndex=0] The index into the array at which to start packing the elements.
   *
   * @returns {Number[]} The array that was packed into
   */
  Matrix3.pack = function (value, array, startingIndex) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('value', value)
    RuntimeError.Check.defined('array', array)
    //>>includeEnd('debug');

    startingIndex = when.defaultValue(startingIndex, 0)

    array[startingIndex++] = value[0]
    array[startingIndex++] = value[1]
    array[startingIndex++] = value[2]
    array[startingIndex++] = value[3]
    array[startingIndex++] = value[4]
    array[startingIndex++] = value[5]
    array[startingIndex++] = value[6]
    array[startingIndex++] = value[7]
    array[startingIndex++] = value[8]

    return array
  }

  /**
   * Retrieves an instance from a packed array.
   *
   * @param {Number[]} array The packed array.
   * @param {Number} [startingIndex=0] The starting index of the element to be unpacked.
   * @param {Matrix3} [result] The object into which to store the result.
   * @returns {Matrix3} The modified result parameter or a new Matrix3 instance if one was not provided.
   */
  Matrix3.unpack = function (array, startingIndex, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('array', array)
    //>>includeEnd('debug');

    startingIndex = when.defaultValue(startingIndex, 0)

    if (!when.defined(result)) {
      result = new Matrix3()
    }

    result[0] = array[startingIndex++]
    result[1] = array[startingIndex++]
    result[2] = array[startingIndex++]
    result[3] = array[startingIndex++]
    result[4] = array[startingIndex++]
    result[5] = array[startingIndex++]
    result[6] = array[startingIndex++]
    result[7] = array[startingIndex++]
    result[8] = array[startingIndex++]
    return result
  }

  /**
   * Duplicates a Matrix3 instance.
   *
   * @param {Matrix3} matrix The matrix to duplicate.
   * @param {Matrix3} [result] The object onto which to store the result.
   * @returns {Matrix3} The modified result parameter or a new Matrix3 instance if one was not provided. (Returns undefined if matrix is undefined)
   */
  Matrix3.clone = function (matrix, result) {
    if (!when.defined(matrix)) {
      return undefined
    }
    if (!when.defined(result)) {
      return new Matrix3(matrix[0], matrix[3], matrix[6], matrix[1], matrix[4], matrix[7], matrix[2], matrix[5], matrix[8])
    }
    result[0] = matrix[0]
    result[1] = matrix[1]
    result[2] = matrix[2]
    result[3] = matrix[3]
    result[4] = matrix[4]
    result[5] = matrix[5]
    result[6] = matrix[6]
    result[7] = matrix[7]
    result[8] = matrix[8]
    return result
  }

  /**
   * Creates a Matrix3 from 9 consecutive elements in an array.
   *
   * @param {Number[]} array The array whose 9 consecutive elements correspond to the positions of the matrix.  Assumes column-major order.
   * @param {Number} [startingIndex=0] The offset into the array of the first element, which corresponds to first column first row position in the matrix.
   * @param {Matrix3} [result] The object onto which to store the result.
   * @returns {Matrix3} The modified result parameter or a new Matrix3 instance if one was not provided.
   *
   * @example
   * // Create the Matrix3:
   * // [1.0, 2.0, 3.0]
   * // [1.0, 2.0, 3.0]
   * // [1.0, 2.0, 3.0]
   *
   * var v = [1.0, 1.0, 1.0, 2.0, 2.0, 2.0, 3.0, 3.0, 3.0];
   * var m = Cesium.Matrix3.fromArray(v);
   *
   * // Create same Matrix3 with using an offset into an array
   * var v2 = [0.0, 0.0, 1.0, 1.0, 1.0, 2.0, 2.0, 2.0, 3.0, 3.0, 3.0];
   * var m2 = Cesium.Matrix3.fromArray(v2, 2);
   */
  Matrix3.fromArray = function (array, startingIndex, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('array', array)
    //>>includeEnd('debug');

    startingIndex = when.defaultValue(startingIndex, 0)

    if (!when.defined(result)) {
      result = new Matrix3()
    }

    result[0] = array[startingIndex]
    result[1] = array[startingIndex + 1]
    result[2] = array[startingIndex + 2]
    result[3] = array[startingIndex + 3]
    result[4] = array[startingIndex + 4]
    result[5] = array[startingIndex + 5]
    result[6] = array[startingIndex + 6]
    result[7] = array[startingIndex + 7]
    result[8] = array[startingIndex + 8]
    return result
  }

  /**
   * Creates a Matrix3 instance from a column-major order array.
   *
   * @param {Number[]} values The column-major order array.
   * @param {Matrix3} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix3} The modified result parameter, or a new Matrix3 instance if one was not provided.
   */
  Matrix3.fromColumnMajorArray = function (values, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('values', values)
    //>>includeEnd('debug');

    return Matrix3.clone(values, result)
  }

  /**
   * Creates a Matrix3 instance from a row-major order array.
   * The resulting matrix will be in column-major order.
   *
   * @param {Number[]} values The row-major order array.
   * @param {Matrix3} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix3} The modified result parameter, or a new Matrix3 instance if one was not provided.
   */
  Matrix3.fromRowMajorArray = function (values, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('values', values)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      return new Matrix3(values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8])
    }
    result[0] = values[0]
    result[1] = values[3]
    result[2] = values[6]
    result[3] = values[1]
    result[4] = values[4]
    result[5] = values[7]
    result[6] = values[2]
    result[7] = values[5]
    result[8] = values[8]
    return result
  }

  /**
   * Computes a 3x3 rotation matrix from the provided quaternion.
   *
   * @param {Quaternion} quaternion the quaternion to use.
   * @param {Matrix3} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix3} The 3x3 rotation matrix from this quaternion.
   */
  Matrix3.fromQuaternion = function (quaternion, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('quaternion', quaternion)
    //>>includeEnd('debug');

    var x2 = quaternion.x * quaternion.x
    var xy = quaternion.x * quaternion.y
    var xz = quaternion.x * quaternion.z
    var xw = quaternion.x * quaternion.w
    var y2 = quaternion.y * quaternion.y
    var yz = quaternion.y * quaternion.z
    var yw = quaternion.y * quaternion.w
    var z2 = quaternion.z * quaternion.z
    var zw = quaternion.z * quaternion.w
    var w2 = quaternion.w * quaternion.w

    var m00 = x2 - y2 - z2 + w2
    var m01 = 2.0 * (xy - zw)
    var m02 = 2.0 * (xz + yw)

    var m10 = 2.0 * (xy + zw)
    var m11 = -x2 + y2 - z2 + w2
    var m12 = 2.0 * (yz - xw)

    var m20 = 2.0 * (xz - yw)
    var m21 = 2.0 * (yz + xw)
    var m22 = -x2 - y2 + z2 + w2

    if (!when.defined(result)) {
      return new Matrix3(m00, m01, m02, m10, m11, m12, m20, m21, m22)
    }
    result[0] = m00
    result[1] = m10
    result[2] = m20
    result[3] = m01
    result[4] = m11
    result[5] = m21
    result[6] = m02
    result[7] = m12
    result[8] = m22
    return result
  }

  /**
   * Computes a 3x3 rotation matrix from the provided headingPitchRoll. (see http://en.wikipedia.org/wiki/Conversion_between_quaternions_and_Euler_angles )
   *
   * @param {HeadingPitchRoll} headingPitchRoll the headingPitchRoll to use.
   * @param {Matrix3} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix3} The 3x3 rotation matrix from this headingPitchRoll.
   */
  Matrix3.fromHeadingPitchRoll = function (headingPitchRoll, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('headingPitchRoll', headingPitchRoll)
    //>>includeEnd('debug');

    var cosTheta = Math.cos(-headingPitchRoll.pitch)
    var cosPsi = Math.cos(-headingPitchRoll.heading)
    var cosPhi = Math.cos(headingPitchRoll.roll)
    var sinTheta = Math.sin(-headingPitchRoll.pitch)
    var sinPsi = Math.sin(-headingPitchRoll.heading)
    var sinPhi = Math.sin(headingPitchRoll.roll)

    var m00 = cosTheta * cosPsi
    var m01 = -cosPhi * sinPsi + sinPhi * sinTheta * cosPsi
    var m02 = sinPhi * sinPsi + cosPhi * sinTheta * cosPsi

    var m10 = cosTheta * sinPsi
    var m11 = cosPhi * cosPsi + sinPhi * sinTheta * sinPsi
    var m12 = -sinPhi * cosPsi + cosPhi * sinTheta * sinPsi

    var m20 = -sinTheta
    var m21 = sinPhi * cosTheta
    var m22 = cosPhi * cosTheta

    if (!when.defined(result)) {
      return new Matrix3(m00, m01, m02, m10, m11, m12, m20, m21, m22)
    }
    result[0] = m00
    result[1] = m10
    result[2] = m20
    result[3] = m01
    result[4] = m11
    result[5] = m21
    result[6] = m02
    result[7] = m12
    result[8] = m22
    return result
  }

  /**
   * Computes a Matrix3 instance representing a non-uniform scale.
   *
   * @param {Cartesian3} scale The x, y, and z scale factors.
   * @param {Matrix3} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix3} The modified result parameter, or a new Matrix3 instance if one was not provided.
   *
   * @example
   * // Creates
   * //   [7.0, 0.0, 0.0]
   * //   [0.0, 8.0, 0.0]
   * //   [0.0, 0.0, 9.0]
   * var m = Cesium.Matrix3.fromScale(new Cesium.Cartesian3(7.0, 8.0, 9.0));
   */
  Matrix3.fromScale = function (scale, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('scale', scale)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      return new Matrix3(scale.x, 0.0, 0.0, 0.0, scale.y, 0.0, 0.0, 0.0, scale.z)
    }

    result[0] = scale.x
    result[1] = 0.0
    result[2] = 0.0
    result[3] = 0.0
    result[4] = scale.y
    result[5] = 0.0
    result[6] = 0.0
    result[7] = 0.0
    result[8] = scale.z
    return result
  }

  /**
   * Computes a Matrix3 instance representing a uniform scale.
   *
   * @param {Number} scale The uniform scale factor.
   * @param {Matrix3} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix3} The modified result parameter, or a new Matrix3 instance if one was not provided.
   *
   * @example
   * // Creates
   * //   [2.0, 0.0, 0.0]
   * //   [0.0, 2.0, 0.0]
   * //   [0.0, 0.0, 2.0]
   * var m = Cesium.Matrix3.fromUniformScale(2.0);
   */
  Matrix3.fromUniformScale = function (scale, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number('scale', scale)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      return new Matrix3(scale, 0.0, 0.0, 0.0, scale, 0.0, 0.0, 0.0, scale)
    }

    result[0] = scale
    result[1] = 0.0
    result[2] = 0.0
    result[3] = 0.0
    result[4] = scale
    result[5] = 0.0
    result[6] = 0.0
    result[7] = 0.0
    result[8] = scale
    return result
  }

  /**
   * Computes a Matrix3 instance representing the cross product equivalent matrix of a Cartesian3 vector.
   *
   * @param {Cartesian3} vector the vector on the left hand side of the cross product operation.
   * @param {Matrix3} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix3} The modified result parameter, or a new Matrix3 instance if one was not provided.
   *
   * @example
   * // Creates
   * //   [0.0, -9.0,  8.0]
   * //   [9.0,  0.0, -7.0]
   * //   [-8.0, 7.0,  0.0]
   * var m = Cesium.Matrix3.fromCrossProduct(new Cesium.Cartesian3(7.0, 8.0, 9.0));
   */
  Matrix3.fromCrossProduct = function (vector, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('vector', vector)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      return new Matrix3(0.0, -vector.z, vector.y, vector.z, 0.0, -vector.x, -vector.y, vector.x, 0.0)
    }

    result[0] = 0.0
    result[1] = vector.z
    result[2] = -vector.y
    result[3] = -vector.z
    result[4] = 0.0
    result[5] = vector.x
    result[6] = vector.y
    result[7] = -vector.x
    result[8] = 0.0
    return result
  }

  /**
   * Creates a rotation matrix around the x-axis.
   *
   * @param {Number} angle The angle, in radians, of the rotation.  Positive angles are counterclockwise.
   * @param {Matrix3} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix3} The modified result parameter, or a new Matrix3 instance if one was not provided.
   *
   * @example
   * // Rotate a point 45 degrees counterclockwise around the x-axis.
   * var p = new Cesium.Cartesian3(5, 6, 7);
   * var m = Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(45.0));
   * var rotated = Cesium.Matrix3.multiplyByVector(m, p, new Cesium.Cartesian3());
   */
  Matrix3.fromRotationX = function (angle, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number('angle', angle)
    //>>includeEnd('debug');

    var cosAngle = Math.cos(angle)
    var sinAngle = Math.sin(angle)

    if (!when.defined(result)) {
      return new Matrix3(1.0, 0.0, 0.0, 0.0, cosAngle, -sinAngle, 0.0, sinAngle, cosAngle)
    }

    result[0] = 1.0
    result[1] = 0.0
    result[2] = 0.0
    result[3] = 0.0
    result[4] = cosAngle
    result[5] = sinAngle
    result[6] = 0.0
    result[7] = -sinAngle
    result[8] = cosAngle

    return result
  }

  /**
   * Creates a rotation matrix around the y-axis.
   *
   * @param {Number} angle The angle, in radians, of the rotation.  Positive angles are counterclockwise.
   * @param {Matrix3} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix3} The modified result parameter, or a new Matrix3 instance if one was not provided.
   *
   * @example
   * // Rotate a point 45 degrees counterclockwise around the y-axis.
   * var p = new Cesium.Cartesian3(5, 6, 7);
   * var m = Cesium.Matrix3.fromRotationY(Cesium.Math.toRadians(45.0));
   * var rotated = Cesium.Matrix3.multiplyByVector(m, p, new Cesium.Cartesian3());
   */
  Matrix3.fromRotationY = function (angle, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number('angle', angle)
    //>>includeEnd('debug');

    var cosAngle = Math.cos(angle)
    var sinAngle = Math.sin(angle)

    if (!when.defined(result)) {
      return new Matrix3(cosAngle, 0.0, sinAngle, 0.0, 1.0, 0.0, -sinAngle, 0.0, cosAngle)
    }

    result[0] = cosAngle
    result[1] = 0.0
    result[2] = -sinAngle
    result[3] = 0.0
    result[4] = 1.0
    result[5] = 0.0
    result[6] = sinAngle
    result[7] = 0.0
    result[8] = cosAngle

    return result
  }

  /**
   * Creates a rotation matrix around the z-axis.
   *
   * @param {Number} angle The angle, in radians, of the rotation.  Positive angles are counterclockwise.
   * @param {Matrix3} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix3} The modified result parameter, or a new Matrix3 instance if one was not provided.
   *
   * @example
   * // Rotate a point 45 degrees counterclockwise around the z-axis.
   * var p = new Cesium.Cartesian3(5, 6, 7);
   * var m = Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(45.0));
   * var rotated = Cesium.Matrix3.multiplyByVector(m, p, new Cesium.Cartesian3());
   */
  Matrix3.fromRotationZ = function (angle, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number('angle', angle)
    //>>includeEnd('debug');

    var cosAngle = Math.cos(angle)
    var sinAngle = Math.sin(angle)

    if (!when.defined(result)) {
      return new Matrix3(cosAngle, -sinAngle, 0.0, sinAngle, cosAngle, 0.0, 0.0, 0.0, 1.0)
    }

    result[0] = cosAngle
    result[1] = sinAngle
    result[2] = 0.0
    result[3] = -sinAngle
    result[4] = cosAngle
    result[5] = 0.0
    result[6] = 0.0
    result[7] = 0.0
    result[8] = 1.0

    return result
  }

  /**
   * Creates an Array from the provided Matrix3 instance.
   * The array will be in column-major order.
   *
   * @param {Matrix3} matrix The matrix to use..
   * @param {Number[]} [result] The Array onto which to store the result.
   * @returns {Number[]} The modified Array parameter or a new Array instance if one was not provided.
   */
  Matrix3.toArray = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      return [matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5], matrix[6], matrix[7], matrix[8]]
    }
    result[0] = matrix[0]
    result[1] = matrix[1]
    result[2] = matrix[2]
    result[3] = matrix[3]
    result[4] = matrix[4]
    result[5] = matrix[5]
    result[6] = matrix[6]
    result[7] = matrix[7]
    result[8] = matrix[8]
    return result
  }

  /**
   * Computes the array index of the element at the provided row and column.
   *
   * @param {Number} row The zero-based index of the row.
   * @param {Number} column The zero-based index of the column.
   * @returns {Number} The index of the element at the provided row and column.
   *
   * @exception {DeveloperError} row must be 0, 1, or 2.
   * @exception {DeveloperError} column must be 0, 1, or 2.
   *
   * @example
   * var myMatrix = new Cesium.Matrix3();
   * var column1Row0Index = Cesium.Matrix3.getElementIndex(1, 0);
   * var column1Row0 = myMatrix[column1Row0Index]
   * myMatrix[column1Row0Index] = 10.0;
   */
  Matrix3.getElementIndex = function (column, row) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number.greaterThanOrEquals('row', row, 0)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('row', row, 2)
    RuntimeError.Check.typeOf.number.greaterThanOrEquals('column', column, 0)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('column', column, 2)
    //>>includeEnd('debug');

    return column * 3 + row
  }

  /**
   * Retrieves a copy of the matrix column at the provided index as a Cartesian3 instance.
   *
   * @param {Matrix3} matrix The matrix to use.
   * @param {Number} index The zero-based index of the column to retrieve.
   * @param {Cartesian3} result The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter.
   *
   * @exception {DeveloperError} index must be 0, 1, or 2.
   */
  Matrix3.getColumn = function (matrix, index, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.number.greaterThanOrEquals('index', index, 0)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('index', index, 2)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var startIndex = index * 3
    var x = matrix[startIndex]
    var y = matrix[startIndex + 1]
    var z = matrix[startIndex + 2]

    result.x = x
    result.y = y
    result.z = z
    return result
  }

  /**
   * Computes a new matrix that replaces the specified column in the provided matrix with the provided Cartesian3 instance.
   *
   * @param {Matrix3} matrix The matrix to use.
   * @param {Number} index The zero-based index of the column to set.
   * @param {Cartesian3} cartesian The Cartesian whose values will be assigned to the specified column.
   * @param {Matrix3} result The object onto which to store the result.
   * @returns {Matrix3} The modified result parameter.
   *
   * @exception {DeveloperError} index must be 0, 1, or 2.
   */
  Matrix3.setColumn = function (matrix, index, cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.number.greaterThanOrEquals('index', index, 0)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('index', index, 2)
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result = Matrix3.clone(matrix, result)
    var startIndex = index * 3
    result[startIndex] = cartesian.x
    result[startIndex + 1] = cartesian.y
    result[startIndex + 2] = cartesian.z
    return result
  }

  /**
   * Retrieves a copy of the matrix row at the provided index as a Cartesian3 instance.
   *
   * @param {Matrix3} matrix The matrix to use.
   * @param {Number} index The zero-based index of the row to retrieve.
   * @param {Cartesian3} result The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter.
   *
   * @exception {DeveloperError} index must be 0, 1, or 2.
   */
  Matrix3.getRow = function (matrix, index, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.number.greaterThanOrEquals('index', index, 0)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('index', index, 2)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var x = matrix[index]
    var y = matrix[index + 3]
    var z = matrix[index + 6]

    result.x = x
    result.y = y
    result.z = z
    return result
  }

  /**
   * Computes a new matrix that replaces the specified row in the provided matrix with the provided Cartesian3 instance.
   *
   * @param {Matrix3} matrix The matrix to use.
   * @param {Number} index The zero-based index of the row to set.
   * @param {Cartesian3} cartesian The Cartesian whose values will be assigned to the specified row.
   * @param {Matrix3} result The object onto which to store the result.
   * @returns {Matrix3} The modified result parameter.
   *
   * @exception {DeveloperError} index must be 0, 1, or 2.
   */
  Matrix3.setRow = function (matrix, index, cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.number.greaterThanOrEquals('index', index, 0)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('index', index, 2)
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result = Matrix3.clone(matrix, result)
    result[index] = cartesian.x
    result[index + 3] = cartesian.y
    result[index + 6] = cartesian.z
    return result
  }

  var scratchColumn$2 = new Cartesian3()

  /**
   * Extracts the non-uniform scale assuming the matrix is an affine transformation.
   *
   * @param {Matrix3} matrix The matrix.
   * @param {Cartesian3} result The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter.
   */
  Matrix3.getScale = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = Cartesian3.magnitude(Cartesian3.fromElements(matrix[0], matrix[1], matrix[2], scratchColumn$2))
    result.y = Cartesian3.magnitude(Cartesian3.fromElements(matrix[3], matrix[4], matrix[5], scratchColumn$2))
    result.z = Cartesian3.magnitude(Cartesian3.fromElements(matrix[6], matrix[7], matrix[8], scratchColumn$2))
    return result
  }

  var scratchScale$2 = new Cartesian3()

  /**
   * Computes the maximum scale assuming the matrix is an affine transformation.
   * The maximum scale is the maximum length of the column vectors.
   *
   * @param {Matrix3} matrix The matrix.
   * @returns {Number} The maximum scale.
   */
  Matrix3.getMaximumScale = function (matrix) {
    Matrix3.getScale(matrix, scratchScale$2)
    return Cartesian3.maximumComponent(scratchScale$2)
  }

  /**
   * Computes the product of two matrices.
   *
   * @param {Matrix3} left The first matrix.
   * @param {Matrix3} right The second matrix.
   * @param {Matrix3} result The object onto which to store the result.
   * @returns {Matrix3} The modified result parameter.
   */
  Matrix3.multiply = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var column0Row0 = left[0] * right[0] + left[3] * right[1] + left[6] * right[2]
    var column0Row1 = left[1] * right[0] + left[4] * right[1] + left[7] * right[2]
    var column0Row2 = left[2] * right[0] + left[5] * right[1] + left[8] * right[2]

    var column1Row0 = left[0] * right[3] + left[3] * right[4] + left[6] * right[5]
    var column1Row1 = left[1] * right[3] + left[4] * right[4] + left[7] * right[5]
    var column1Row2 = left[2] * right[3] + left[5] * right[4] + left[8] * right[5]

    var column2Row0 = left[0] * right[6] + left[3] * right[7] + left[6] * right[8]
    var column2Row1 = left[1] * right[6] + left[4] * right[7] + left[7] * right[8]
    var column2Row2 = left[2] * right[6] + left[5] * right[7] + left[8] * right[8]

    result[0] = column0Row0
    result[1] = column0Row1
    result[2] = column0Row2
    result[3] = column1Row0
    result[4] = column1Row1
    result[5] = column1Row2
    result[6] = column2Row0
    result[7] = column2Row1
    result[8] = column2Row2
    return result
  }

  /**
   * Computes the sum of two matrices.
   *
   * @param {Matrix3} left The first matrix.
   * @param {Matrix3} right The second matrix.
   * @param {Matrix3} result The object onto which to store the result.
   * @returns {Matrix3} The modified result parameter.
   */
  Matrix3.add = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result[0] = left[0] + right[0]
    result[1] = left[1] + right[1]
    result[2] = left[2] + right[2]
    result[3] = left[3] + right[3]
    result[4] = left[4] + right[4]
    result[5] = left[5] + right[5]
    result[6] = left[6] + right[6]
    result[7] = left[7] + right[7]
    result[8] = left[8] + right[8]
    return result
  }

  /**
   * Computes the difference of two matrices.
   *
   * @param {Matrix3} left The first matrix.
   * @param {Matrix3} right The second matrix.
   * @param {Matrix3} result The object onto which to store the result.
   * @returns {Matrix3} The modified result parameter.
   */
  Matrix3.subtract = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result[0] = left[0] - right[0]
    result[1] = left[1] - right[1]
    result[2] = left[2] - right[2]
    result[3] = left[3] - right[3]
    result[4] = left[4] - right[4]
    result[5] = left[5] - right[5]
    result[6] = left[6] - right[6]
    result[7] = left[7] - right[7]
    result[8] = left[8] - right[8]
    return result
  }

  /**
   * Computes the product of a matrix and a column vector.
   *
   * @param {Matrix3} matrix The matrix.
   * @param {Cartesian3} cartesian The column.
   * @param {Cartesian3} result The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter.
   */
  Matrix3.multiplyByVector = function (matrix, cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var vX = cartesian.x
    var vY = cartesian.y
    var vZ = cartesian.z

    var x = matrix[0] * vX + matrix[3] * vY + matrix[6] * vZ
    var y = matrix[1] * vX + matrix[4] * vY + matrix[7] * vZ
    var z = matrix[2] * vX + matrix[5] * vY + matrix[8] * vZ

    result.x = x
    result.y = y
    result.z = z
    return result
  }

  /**
   * Computes the product of a matrix and a scalar.
   *
   * @param {Matrix3} matrix The matrix.
   * @param {Number} scalar The number to multiply by.
   * @param {Matrix3} result The object onto which to store the result.
   * @returns {Matrix3} The modified result parameter.
   */
  Matrix3.multiplyByScalar = function (matrix, scalar, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.number('scalar', scalar)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result[0] = matrix[0] * scalar
    result[1] = matrix[1] * scalar
    result[2] = matrix[2] * scalar
    result[3] = matrix[3] * scalar
    result[4] = matrix[4] * scalar
    result[5] = matrix[5] * scalar
    result[6] = matrix[6] * scalar
    result[7] = matrix[7] * scalar
    result[8] = matrix[8] * scalar
    return result
  }

  /**
   * Computes the product of a matrix times a (non-uniform) scale, as if the scale were a scale matrix.
   *
   * @param {Matrix3} matrix The matrix on the left-hand side.
   * @param {Cartesian3} scale The non-uniform scale on the right-hand side.
   * @param {Matrix3} result The object onto which to store the result.
   * @returns {Matrix3} The modified result parameter.
   *
   *
   * @example
   * // Instead of Cesium.Matrix3.multiply(m, Cesium.Matrix3.fromScale(scale), m);
   * Cesium.Matrix3.multiplyByScale(m, scale, m);
   *
   * @see Matrix3.fromScale
   * @see Matrix3.multiplyByUniformScale
   */
  Matrix3.multiplyByScale = function (matrix, scale, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('scale', scale)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result[0] = matrix[0] * scale.x
    result[1] = matrix[1] * scale.x
    result[2] = matrix[2] * scale.x
    result[3] = matrix[3] * scale.y
    result[4] = matrix[4] * scale.y
    result[5] = matrix[5] * scale.y
    result[6] = matrix[6] * scale.z
    result[7] = matrix[7] * scale.z
    result[8] = matrix[8] * scale.z
    return result
  }

  /**
   * Creates a negated copy of the provided matrix.
   *
   * @param {Matrix3} matrix The matrix to negate.
   * @param {Matrix3} result The object onto which to store the result.
   * @returns {Matrix3} The modified result parameter.
   */
  Matrix3.negate = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result[0] = -matrix[0]
    result[1] = -matrix[1]
    result[2] = -matrix[2]
    result[3] = -matrix[3]
    result[4] = -matrix[4]
    result[5] = -matrix[5]
    result[6] = -matrix[6]
    result[7] = -matrix[7]
    result[8] = -matrix[8]
    return result
  }

  /**
   * Computes the transpose of the provided matrix.
   *
   * @param {Matrix3} matrix The matrix to transpose.
   * @param {Matrix3} result The object onto which to store the result.
   * @returns {Matrix3} The modified result parameter.
   */
  Matrix3.transpose = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var column0Row0 = matrix[0]
    var column0Row1 = matrix[3]
    var column0Row2 = matrix[6]
    var column1Row0 = matrix[1]
    var column1Row1 = matrix[4]
    var column1Row2 = matrix[7]
    var column2Row0 = matrix[2]
    var column2Row1 = matrix[5]
    var column2Row2 = matrix[8]

    result[0] = column0Row0
    result[1] = column0Row1
    result[2] = column0Row2
    result[3] = column1Row0
    result[4] = column1Row1
    result[5] = column1Row2
    result[6] = column2Row0
    result[7] = column2Row1
    result[8] = column2Row2
    return result
  }

  var UNIT = new Cartesian3(1, 1, 1)

  /**
   * Extracts the rotation assuming the matrix is an affine transformation.
   *
   * @param {Matrix3} matrix The matrix.
   * @param {Matrix3} result The object onto which to store the result.
   * @returns {Matrix3} The modified result parameter
   */
  Matrix3.getRotation = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var inverseScale = Cartesian3.divideComponents(UNIT, Matrix3.getScale(matrix, scratchScale$2), scratchScale$2)
    result = Matrix3.multiplyByScale(matrix, inverseScale, result)

    return result
  }

  function computeFrobeniusNorm(matrix) {
    var norm = 0.0
    for (var i = 0; i < 9; ++i) {
      var temp = matrix[i]
      norm += temp * temp
    }

    return Math.sqrt(norm)
  }

  var rowVal = [1, 0, 0]
  var colVal = [2, 2, 1]

  function offDiagonalFrobeniusNorm(matrix) {
    // Computes the "off-diagonal" Frobenius norm.
    // Assumes matrix is symmetric.

    var norm = 0.0
    for (var i = 0; i < 3; ++i) {
      var temp = matrix[Matrix3.getElementIndex(colVal[i], rowVal[i])]
      norm += 2.0 * temp * temp
    }

    return Math.sqrt(norm)
  }

  function shurDecomposition(matrix, result) {
    // This routine was created based upon Matrix Computations, 3rd ed., by Golub and Van Loan,
    // section 8.4.2 The 2by2 Symmetric Schur Decomposition.
    //
    // The routine takes a matrix, which is assumed to be symmetric, and
    // finds the largest off-diagonal term, and then creates
    // a matrix (result) which can be used to help reduce it

    var tolerance = ComponentDatatype.CesiumMath.EPSILON15

    var maxDiagonal = 0.0
    var rotAxis = 1

    // find pivot (rotAxis) based on max diagonal of matrix
    for (var i = 0; i < 3; ++i) {
      var temp = Math.abs(matrix[Matrix3.getElementIndex(colVal[i], rowVal[i])])
      if (temp > maxDiagonal) {
        rotAxis = i
        maxDiagonal = temp
      }
    }

    var c = 1.0
    var s = 0.0

    var p = rowVal[rotAxis]
    var q = colVal[rotAxis]

    if (Math.abs(matrix[Matrix3.getElementIndex(q, p)]) > tolerance) {
      var qq = matrix[Matrix3.getElementIndex(q, q)]
      var pp = matrix[Matrix3.getElementIndex(p, p)]
      var qp = matrix[Matrix3.getElementIndex(q, p)]

      var tau = (qq - pp) / 2.0 / qp
      var t

      if (tau < 0.0) {
        t = -1.0 / (-tau + Math.sqrt(1.0 + tau * tau))
      } else {
        t = 1.0 / (tau + Math.sqrt(1.0 + tau * tau))
      }

      c = 1.0 / Math.sqrt(1.0 + t * t)
      s = t * c
    }

    result = Matrix3.clone(Matrix3.IDENTITY, result)

    result[Matrix3.getElementIndex(p, p)] = result[Matrix3.getElementIndex(q, q)] = c
    result[Matrix3.getElementIndex(q, p)] = s
    result[Matrix3.getElementIndex(p, q)] = -s

    return result
  }

  var jMatrix = new Matrix3()
  var jMatrixTranspose = new Matrix3()

  /**
   * Computes the eigenvectors and eigenvalues of a symmetric matrix.
   * <p>
   * Returns a diagonal matrix and unitary matrix such that:
   * <code>matrix = unitary matrix * diagonal matrix * transpose(unitary matrix)</code>
   * </p>
   * <p>
   * The values along the diagonal of the diagonal matrix are the eigenvalues. The columns
   * of the unitary matrix are the corresponding eigenvectors.
   * </p>
   *
   * @param {Matrix3} matrix The matrix to decompose into diagonal and unitary matrix. Expected to be symmetric.
   * @param {Object} [result] An object with unitary and diagonal properties which are matrices onto which to store the result.
   * @returns {Object} An object with unitary and diagonal properties which are the unitary and diagonal matrices, respectively.
   *
   * @example
   * var a = //... symetric matrix
   * var result = {
   *     unitary : new Cesium.Matrix3(),
   *     diagonal : new Cesium.Matrix3()
   * };
   * Cesium.Matrix3.computeEigenDecomposition(a, result);
   *
   * var unitaryTranspose = Cesium.Matrix3.transpose(result.unitary, new Cesium.Matrix3());
   * var b = Cesium.Matrix3.multiply(result.unitary, result.diagonal, new Cesium.Matrix3());
   * Cesium.Matrix3.multiply(b, unitaryTranspose, b); // b is now equal to a
   *
   * var lambda = Cesium.Matrix3.getColumn(result.diagonal, 0, new Cesium.Cartesian3()).x;  // first eigenvalue
   * var v = Cesium.Matrix3.getColumn(result.unitary, 0, new Cesium.Cartesian3());          // first eigenvector
   * var c = Cesium.Cartesian3.multiplyByScalar(v, lambda, new Cesium.Cartesian3());        // equal to Cesium.Matrix3.multiplyByVector(a, v)
   */
  Matrix3.computeEigenDecomposition = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    //>>includeEnd('debug');

    // This routine was created based upon Matrix Computations, 3rd ed., by Golub and Van Loan,
    // section 8.4.3 The Classical Jacobi Algorithm

    var tolerance = ComponentDatatype.CesiumMath.EPSILON20
    var maxSweeps = 10

    var count = 0
    var sweep = 0

    if (!when.defined(result)) {
      result = {}
    }

    var unitaryMatrix = (result.unitary = Matrix3.clone(Matrix3.IDENTITY, result.unitary))
    var diagMatrix = (result.diagonal = Matrix3.clone(matrix, result.diagonal))

    var epsilon = tolerance * computeFrobeniusNorm(diagMatrix)

    while (sweep < maxSweeps && offDiagonalFrobeniusNorm(diagMatrix) > epsilon) {
      shurDecomposition(diagMatrix, jMatrix)
      Matrix3.transpose(jMatrix, jMatrixTranspose)
      Matrix3.multiply(diagMatrix, jMatrix, diagMatrix)
      Matrix3.multiply(jMatrixTranspose, diagMatrix, diagMatrix)
      Matrix3.multiply(unitaryMatrix, jMatrix, unitaryMatrix)

      if (++count > 2) {
        ++sweep
        count = 0
      }
    }

    return result
  }

  /**
   * Computes a matrix, which contains the absolute (unsigned) values of the provided matrix's elements.
   *
   * @param {Matrix3} matrix The matrix with signed elements.
   * @param {Matrix3} result The object onto which to store the result.
   * @returns {Matrix3} The modified result parameter.
   */
  Matrix3.abs = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result[0] = Math.abs(matrix[0])
    result[1] = Math.abs(matrix[1])
    result[2] = Math.abs(matrix[2])
    result[3] = Math.abs(matrix[3])
    result[4] = Math.abs(matrix[4])
    result[5] = Math.abs(matrix[5])
    result[6] = Math.abs(matrix[6])
    result[7] = Math.abs(matrix[7])
    result[8] = Math.abs(matrix[8])

    return result
  }

  /**
   * Computes the determinant of the provided matrix.
   *
   * @param {Matrix3} matrix The matrix to use.
   * @returns {Number} The value of the determinant of the matrix.
   */
  Matrix3.determinant = function (matrix) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    //>>includeEnd('debug');

    var m11 = matrix[0]
    var m21 = matrix[3]
    var m31 = matrix[6]
    var m12 = matrix[1]
    var m22 = matrix[4]
    var m32 = matrix[7]
    var m13 = matrix[2]
    var m23 = matrix[5]
    var m33 = matrix[8]

    return m11 * (m22 * m33 - m23 * m32) + m12 * (m23 * m31 - m21 * m33) + m13 * (m21 * m32 - m22 * m31)
  }

  /**
   * Computes the inverse of the provided matrix.
   *
   * @param {Matrix3} matrix The matrix to invert.
   * @param {Matrix3} result The object onto which to store the result.
   * @returns {Matrix3} The modified result parameter.
   *
   * @exception {DeveloperError} matrix is not invertible.
   */
  Matrix3.inverse = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var m11 = matrix[0]
    var m21 = matrix[1]
    var m31 = matrix[2]
    var m12 = matrix[3]
    var m22 = matrix[4]
    var m32 = matrix[5]
    var m13 = matrix[6]
    var m23 = matrix[7]
    var m33 = matrix[8]

    var determinant = Matrix3.determinant(matrix)

    //>>includeStart('debug', pragmas.debug);
    if (Math.abs(determinant) <= ComponentDatatype.CesiumMath.EPSILON15) {
      throw new RuntimeError.DeveloperError('matrix is not invertible')
    }
    //>>includeEnd('debug');

    result[0] = m22 * m33 - m23 * m32
    result[1] = m23 * m31 - m21 * m33
    result[2] = m21 * m32 - m22 * m31
    result[3] = m13 * m32 - m12 * m33
    result[4] = m11 * m33 - m13 * m31
    result[5] = m12 * m31 - m11 * m32
    result[6] = m12 * m23 - m13 * m22
    result[7] = m13 * m21 - m11 * m23
    result[8] = m11 * m22 - m12 * m21

    var scale = 1.0 / determinant
    return Matrix3.multiplyByScalar(result, scale, result)
  }

  var scratchTransposeMatrix$1 = new Matrix3()

  /**
   * Computes the inverse transpose of a matrix.
   *
   * @param {Matrix3} matrix The matrix to transpose and invert.
   * @param {Matrix3} result The object onto which to store the result.
   * @returns {Matrix3} The modified result parameter.
   */
  Matrix3.inverseTranspose = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    return Matrix3.inverse(Matrix3.transpose(matrix, scratchTransposeMatrix$1), result)
  }

  /**
   * Compares the provided matrices componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Matrix3} [left] The first matrix.
   * @param {Matrix3} [right] The second matrix.
   * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
   */
  Matrix3.equals = function (left, right) {
    return (
      left === right ||
      (when.defined(left) &&
        when.defined(right) &&
        left[0] === right[0] &&
        left[1] === right[1] &&
        left[2] === right[2] &&
        left[3] === right[3] &&
        left[4] === right[4] &&
        left[5] === right[5] &&
        left[6] === right[6] &&
        left[7] === right[7] &&
        left[8] === right[8])
    )
  }

  /**
   * Compares the provided matrices componentwise and returns
   * <code>true</code> if they are within the provided epsilon,
   * <code>false</code> otherwise.
   *
   * @param {Matrix3} [left] The first matrix.
   * @param {Matrix3} [right] The second matrix.
   * @param {Number} [epsilon=0] The epsilon to use for equality testing.
   * @returns {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
   */
  Matrix3.equalsEpsilon = function (left, right, epsilon) {
    epsilon = when.defaultValue(epsilon, 0)

    return (
      left === right ||
      (when.defined(left) &&
        when.defined(right) &&
        Math.abs(left[0] - right[0]) <= epsilon &&
        Math.abs(left[1] - right[1]) <= epsilon &&
        Math.abs(left[2] - right[2]) <= epsilon &&
        Math.abs(left[3] - right[3]) <= epsilon &&
        Math.abs(left[4] - right[4]) <= epsilon &&
        Math.abs(left[5] - right[5]) <= epsilon &&
        Math.abs(left[6] - right[6]) <= epsilon &&
        Math.abs(left[7] - right[7]) <= epsilon &&
        Math.abs(left[8] - right[8]) <= epsilon)
    )
  }

  /**
   * An immutable Matrix3 instance initialized to the identity matrix.
   *
   * @type {Matrix3}
   * @constant
   */
  Matrix3.IDENTITY = Object.freeze(new Matrix3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0))

  /**
   * An immutable Matrix3 instance initialized to the zero matrix.
   *
   * @type {Matrix3}
   * @constant
   */
  Matrix3.ZERO = Object.freeze(new Matrix3(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0))

  /**
   * The index into Matrix3 for column 0, row 0.
   *
   * @type {Number}
   * @constant
   */
  Matrix3.COLUMN0ROW0 = 0

  /**
   * The index into Matrix3 for column 0, row 1.
   *
   * @type {Number}
   * @constant
   */
  Matrix3.COLUMN0ROW1 = 1

  /**
   * The index into Matrix3 for column 0, row 2.
   *
   * @type {Number}
   * @constant
   */
  Matrix3.COLUMN0ROW2 = 2

  /**
   * The index into Matrix3 for column 1, row 0.
   *
   * @type {Number}
   * @constant
   */
  Matrix3.COLUMN1ROW0 = 3

  /**
   * The index into Matrix3 for column 1, row 1.
   *
   * @type {Number}
   * @constant
   */
  Matrix3.COLUMN1ROW1 = 4

  /**
   * The index into Matrix3 for column 1, row 2.
   *
   * @type {Number}
   * @constant
   */
  Matrix3.COLUMN1ROW2 = 5

  /**
   * The index into Matrix3 for column 2, row 0.
   *
   * @type {Number}
   * @constant
   */
  Matrix3.COLUMN2ROW0 = 6

  /**
   * The index into Matrix3 for column 2, row 1.
   *
   * @type {Number}
   * @constant
   */
  Matrix3.COLUMN2ROW1 = 7

  /**
   * The index into Matrix3 for column 2, row 2.
   *
   * @type {Number}
   * @constant
   */
  Matrix3.COLUMN2ROW2 = 8

  Object.defineProperties(Matrix3.prototype, {
    /**
     * Gets the number of items in the collection.
     * @memberof Matrix3.prototype
     *
     * @type {Number}
     */
    length: {
      get: function () {
        return Matrix3.packedLength
      }
    }
  })

  /**
   * Duplicates the provided Matrix3 instance.
   *
   * @param {Matrix3} [result] The object onto which to store the result.
   * @returns {Matrix3} The modified result parameter or a new Matrix3 instance if one was not provided.
   */
  Matrix3.prototype.clone = function (result) {
    return Matrix3.clone(this, result)
  }

  /**
   * Compares this matrix to the provided matrix componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Matrix3} [right] The right hand side matrix.
   * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
   */
  Matrix3.prototype.equals = function (right) {
    return Matrix3.equals(this, right)
  }

  /**
   * @private
   */
  Matrix3.equalsArray = function (matrix, array, offset) {
    return (
      matrix[0] === array[offset] &&
      matrix[1] === array[offset + 1] &&
      matrix[2] === array[offset + 2] &&
      matrix[3] === array[offset + 3] &&
      matrix[4] === array[offset + 4] &&
      matrix[5] === array[offset + 5] &&
      matrix[6] === array[offset + 6] &&
      matrix[7] === array[offset + 7] &&
      matrix[8] === array[offset + 8]
    )
  }

  /**
   * Compares this matrix to the provided matrix componentwise and returns
   * <code>true</code> if they are within the provided epsilon,
   * <code>false</code> otherwise.
   *
   * @param {Matrix3} [right] The right hand side matrix.
   * @param {Number} [epsilon=0] The epsilon to use for equality testing.
   * @returns {Boolean} <code>true</code> if they are within the provided epsilon, <code>false</code> otherwise.
   */
  Matrix3.prototype.equalsEpsilon = function (right, epsilon) {
    return Matrix3.equalsEpsilon(this, right, epsilon)
  }

  /**
   * Creates a string representing this Matrix with each row being
   * on a separate line and in the format '(column0, column1, column2)'.
   *
   * @returns {String} A string representing the provided Matrix with each row being on a separate line and in the format '(column0, column1, column2)'.
   */
  Matrix3.prototype.toString = function () {
    return (
      '(' +
      this[0] +
      ', ' +
      this[3] +
      ', ' +
      this[6] +
      ')\n' +
      '(' +
      this[1] +
      ', ' +
      this[4] +
      ', ' +
      this[7] +
      ')\n' +
      '(' +
      this[2] +
      ', ' +
      this[5] +
      ', ' +
      this[8] +
      ')'
    )
  }

  /**
   * A 4D Cartesian point.
   * @alias Cartesian4
   * @constructor
   *
   * @param {Number} [x=0.0] The X component.
   * @param {Number} [y=0.0] The Y component.
   * @param {Number} [z=0.0] The Z component.
   * @param {Number} [w=0.0] The W component.
   *
   * @see Cartesian2
   * @see Cartesian3
   * @see Packable
   */
  function Cartesian4(x, y, z, w) {
    /**
     * The X component.
     * @type {Number}
     * @default 0.0
     */
    this.x = when.defaultValue(x, 0.0)

    /**
     * The Y component.
     * @type {Number}
     * @default 0.0
     */
    this.y = when.defaultValue(y, 0.0)

    /**
     * The Z component.
     * @type {Number}
     * @default 0.0
     */
    this.z = when.defaultValue(z, 0.0)

    /**
     * The W component.
     * @type {Number}
     * @default 0.0
     */
    this.w = when.defaultValue(w, 0.0)
  }

  /**
   * Creates a Cartesian4 instance from x, y, z and w coordinates.
   *
   * @param {Number} x The x coordinate.
   * @param {Number} y The y coordinate.
   * @param {Number} z The z coordinate.
   * @param {Number} w The w coordinate.
   * @param {Cartesian4} [result] The object onto which to store the result.
   * @returns {Cartesian4} The modified result parameter or a new Cartesian4 instance if one was not provided.
   */
  Cartesian4.fromElements = function (x, y, z, w, result) {
    if (!when.defined(result)) {
      return new Cartesian4(x, y, z, w)
    }

    result.x = x
    result.y = y
    result.z = z
    result.w = w
    return result
  }

  /**
   * Creates a Cartesian4 instance from a {@link Color}. <code>red</code>, <code>green</code>, <code>blue</code>,
   * and <code>alpha</code> map to <code>x</code>, <code>y</code>, <code>z</code>, and <code>w</code>, respectively.
   *
   * @param {Color} color The source color.
   * @param {Cartesian4} [result] The object onto which to store the result.
   * @returns {Cartesian4} The modified result parameter or a new Cartesian4 instance if one was not provided.
   */
  Cartesian4.fromColor = function (color, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('color', color)
    //>>includeEnd('debug');
    if (!when.defined(result)) {
      return new Cartesian4(color.red, color.green, color.blue, color.alpha)
    }

    result.x = color.red
    result.y = color.green
    result.z = color.blue
    result.w = color.alpha
    return result
  }

  /**
   * Duplicates a Cartesian4 instance.
   *
   * @param {Cartesian4} cartesian The Cartesian to duplicate.
   * @param {Cartesian4} [result] The object onto which to store the result.
   * @returns {Cartesian4} The modified result parameter or a new Cartesian4 instance if one was not provided. (Returns undefined if cartesian is undefined)
   */
  Cartesian4.clone = function (cartesian, result) {
    if (!when.defined(cartesian)) {
      return undefined
    }

    if (!when.defined(result)) {
      return new Cartesian4(cartesian.x, cartesian.y, cartesian.z, cartesian.w)
    }

    result.x = cartesian.x
    result.y = cartesian.y
    result.z = cartesian.z
    result.w = cartesian.w
    return result
  }

  /**
   * The number of elements used to pack the object into an array.
   * @type {Number}
   */
  Cartesian4.packedLength = 4

  /**
   * Stores the provided instance into the provided array.
   *
   * @param {Cartesian4} value The value to pack.
   * @param {Number[]} array The array to pack into.
   * @param {Number} [startingIndex=0] The index into the array at which to start packing the elements.
   *
   * @returns {Number[]} The array that was packed into
   */
  Cartesian4.pack = function (value, array, startingIndex) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('value', value)
    RuntimeError.Check.defined('array', array)
    //>>includeEnd('debug');

    startingIndex = when.defaultValue(startingIndex, 0)

    array[startingIndex++] = value.x
    array[startingIndex++] = value.y
    array[startingIndex++] = value.z
    array[startingIndex] = value.w

    return array
  }

  /**
   * Retrieves an instance from a packed array.
   *
   * @param {Number[]} array The packed array.
   * @param {Number} [startingIndex=0] The starting index of the element to be unpacked.
   * @param {Cartesian4} [result] The object into which to store the result.
   * @returns {Cartesian4}  The modified result parameter or a new Cartesian4 instance if one was not provided.
   */
  Cartesian4.unpack = function (array, startingIndex, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('array', array)
    //>>includeEnd('debug');

    startingIndex = when.defaultValue(startingIndex, 0)

    if (!when.defined(result)) {
      result = new Cartesian4()
    }
    result.x = array[startingIndex++]
    result.y = array[startingIndex++]
    result.z = array[startingIndex++]
    result.w = array[startingIndex]
    return result
  }

  /**
       * Flattens an array of Cartesian4s into and array of components.
       *
       * @param {Cartesian4[]} array The array of cartesians to pack.
       * @param {Number[]} [result] The array onto which to store the result. If this is a typed array, it must have array.length * 4 components, else a {@link DeveloperError} will be thrown. If it is a regular array, it will be resized to have (array.length * 4) elements.

       * @returns {Number[]} The packed array.
       */
  Cartesian4.packArray = function (array, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('array', array)
    //>>includeEnd('debug');

    var length = array.length
    var resultLength = length * 4
    if (!when.defined(result)) {
      result = new Array(resultLength)
    } else if (!Array.isArray(result) && result.length !== resultLength) {
      throw new RuntimeError.DeveloperError('If result is a typed array, it must have exactly array.length * 4 elements')
    } else if (result.length !== resultLength) {
      result.length = resultLength
    }

    for (var i = 0; i < length; ++i) {
      Cartesian4.pack(array[i], result, i * 4)
    }
    return result
  }

  /**
   * Unpacks an array of cartesian components into and array of Cartesian4s.
   *
   * @param {Number[]} array The array of components to unpack.
   * @param {Cartesian4[]} [result] The array onto which to store the result.
   * @returns {Cartesian4[]} The unpacked array.
   */
  Cartesian4.unpackArray = function (array, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('array', array)
    RuntimeError.Check.typeOf.number.greaterThanOrEquals('array.length', array.length, 4)
    if (array.length % 4 !== 0) {
      throw new RuntimeError.DeveloperError('array length must be a multiple of 4.')
    }
    //>>includeEnd('debug');

    var length = array.length
    if (!when.defined(result)) {
      result = new Array(length / 4)
    } else {
      result.length = length / 4
    }

    for (var i = 0; i < length; i += 4) {
      var index = i / 4
      result[index] = Cartesian4.unpack(array, i, result[index])
    }
    return result
  }

  /**
   * Creates a Cartesian4 from four consecutive elements in an array.
   * @function
   *
   * @param {Number[]} array The array whose four consecutive elements correspond to the x, y, z, and w components, respectively.
   * @param {Number} [startingIndex=0] The offset into the array of the first element, which corresponds to the x component.
   * @param {Cartesian4} [result] The object onto which to store the result.
   * @returns {Cartesian4}  The modified result parameter or a new Cartesian4 instance if one was not provided.
   *
   * @example
   * // Create a Cartesian4 with (1.0, 2.0, 3.0, 4.0)
   * var v = [1.0, 2.0, 3.0, 4.0];
   * var p = Cesium.Cartesian4.fromArray(v);
   *
   * // Create a Cartesian4 with (1.0, 2.0, 3.0, 4.0) using an offset into an array
   * var v2 = [0.0, 0.0, 1.0, 2.0, 3.0, 4.0];
   * var p2 = Cesium.Cartesian4.fromArray(v2, 2);
   */
  Cartesian4.fromArray = Cartesian4.unpack

  /**
   * Computes the value of the maximum component for the supplied Cartesian.
   *
   * @param {Cartesian4} cartesian The cartesian to use.
   * @returns {Number} The value of the maximum component.
   */
  Cartesian4.maximumComponent = function (cartesian) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    //>>includeEnd('debug');

    return Math.max(cartesian.x, cartesian.y, cartesian.z, cartesian.w)
  }

  /**
   * Computes the value of the minimum component for the supplied Cartesian.
   *
   * @param {Cartesian4} cartesian The cartesian to use.
   * @returns {Number} The value of the minimum component.
   */
  Cartesian4.minimumComponent = function (cartesian) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    //>>includeEnd('debug');

    return Math.min(cartesian.x, cartesian.y, cartesian.z, cartesian.w)
  }

  /**
   * Compares two Cartesians and computes a Cartesian which contains the minimum components of the supplied Cartesians.
   *
   * @param {Cartesian4} first A cartesian to compare.
   * @param {Cartesian4} second A cartesian to compare.
   * @param {Cartesian4} result The object into which to store the result.
   * @returns {Cartesian4} A cartesian with the minimum components.
   */
  Cartesian4.minimumByComponent = function (first, second, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('first', first)
    RuntimeError.Check.typeOf.object('second', second)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = Math.min(first.x, second.x)
    result.y = Math.min(first.y, second.y)
    result.z = Math.min(first.z, second.z)
    result.w = Math.min(first.w, second.w)

    return result
  }

  /**
   * Compares two Cartesians and computes a Cartesian which contains the maximum components of the supplied Cartesians.
   *
   * @param {Cartesian4} first A cartesian to compare.
   * @param {Cartesian4} second A cartesian to compare.
   * @param {Cartesian4} result The object into which to store the result.
   * @returns {Cartesian4} A cartesian with the maximum components.
   */
  Cartesian4.maximumByComponent = function (first, second, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('first', first)
    RuntimeError.Check.typeOf.object('second', second)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = Math.max(first.x, second.x)
    result.y = Math.max(first.y, second.y)
    result.z = Math.max(first.z, second.z)
    result.w = Math.max(first.w, second.w)

    return result
  }

  /**
   * Computes the provided Cartesian's squared magnitude.
   *
   * @param {Cartesian4} cartesian The Cartesian instance whose squared magnitude is to be computed.
   * @returns {Number} The squared magnitude.
   */
  Cartesian4.magnitudeSquared = function (cartesian) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    //>>includeEnd('debug');

    return cartesian.x * cartesian.x + cartesian.y * cartesian.y + cartesian.z * cartesian.z + cartesian.w * cartesian.w
  }

  /**
   * Computes the Cartesian's magnitude (length).
   *
   * @param {Cartesian4} cartesian The Cartesian instance whose magnitude is to be computed.
   * @returns {Number} The magnitude.
   */
  Cartesian4.magnitude = function (cartesian) {
    return Math.sqrt(Cartesian4.magnitudeSquared(cartesian))
  }

  var distanceScratch$1 = new Cartesian4()

  /**
   * Computes the 4-space distance between two points.
   *
   * @param {Cartesian4} left The first point to compute the distance from.
   * @param {Cartesian4} right The second point to compute the distance to.
   * @returns {Number} The distance between two points.
   *
   * @example
   * // Returns 1.0
   * var d = Cesium.Cartesian4.distance(
   *   new Cesium.Cartesian4(1.0, 0.0, 0.0, 0.0),
   *   new Cesium.Cartesian4(2.0, 0.0, 0.0, 0.0));
   */
  Cartesian4.distance = function (left, right) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    //>>includeEnd('debug');

    Cartesian4.subtract(left, right, distanceScratch$1)
    return Cartesian4.magnitude(distanceScratch$1)
  }

  /**
   * Computes the squared distance between two points.  Comparing squared distances
   * using this function is more efficient than comparing distances using {@link Cartesian4#distance}.
   *
   * @param {Cartesian4} left The first point to compute the distance from.
   * @param {Cartesian4} right The second point to compute the distance to.
   * @returns {Number} The distance between two points.
   *
   * @example
   * // Returns 4.0, not 2.0
   * var d = Cesium.Cartesian4.distance(
   *   new Cesium.Cartesian4(1.0, 0.0, 0.0, 0.0),
   *   new Cesium.Cartesian4(3.0, 0.0, 0.0, 0.0));
   */
  Cartesian4.distanceSquared = function (left, right) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    //>>includeEnd('debug');

    Cartesian4.subtract(left, right, distanceScratch$1)
    return Cartesian4.magnitudeSquared(distanceScratch$1)
  }

  /**
   * Computes the normalized form of the supplied Cartesian.
   *
   * @param {Cartesian4} cartesian The Cartesian to be normalized.
   * @param {Cartesian4} result The object onto which to store the result.
   * @returns {Cartesian4} The modified result parameter.
   */
  Cartesian4.normalize = function (cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var magnitude = Cartesian4.magnitude(cartesian)

    result.x = cartesian.x / magnitude
    result.y = cartesian.y / magnitude
    result.z = cartesian.z / magnitude
    result.w = cartesian.w / magnitude

    //>>includeStart('debug', pragmas.debug);
    if (isNaN(result.x) || isNaN(result.y) || isNaN(result.z) || isNaN(result.w)) {
      throw new RuntimeError.DeveloperError('normalized result is not a number')
    }
    //>>includeEnd('debug');

    return result
  }

  /**
   * Computes the dot (scalar) product of two Cartesians.
   *
   * @param {Cartesian4} left The first Cartesian.
   * @param {Cartesian4} right The second Cartesian.
   * @returns {Number} The dot product.
   */
  Cartesian4.dot = function (left, right) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    //>>includeEnd('debug');

    return left.x * right.x + left.y * right.y + left.z * right.z + left.w * right.w
  }

  /**
   * Computes the componentwise product of two Cartesians.
   *
   * @param {Cartesian4} left The first Cartesian.
   * @param {Cartesian4} right The second Cartesian.
   * @param {Cartesian4} result The object onto which to store the result.
   * @returns {Cartesian4} The modified result parameter.
   */
  Cartesian4.multiplyComponents = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = left.x * right.x
    result.y = left.y * right.y
    result.z = left.z * right.z
    result.w = left.w * right.w
    return result
  }

  /**
   * Computes the componentwise quotient of two Cartesians.
   *
   * @param {Cartesian4} left The first Cartesian.
   * @param {Cartesian4} right The second Cartesian.
   * @param {Cartesian4} result The object onto which to store the result.
   * @returns {Cartesian4} The modified result parameter.
   */
  Cartesian4.divideComponents = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = left.x / right.x
    result.y = left.y / right.y
    result.z = left.z / right.z
    result.w = left.w / right.w
    return result
  }

  /**
   * Computes the componentwise sum of two Cartesians.
   *
   * @param {Cartesian4} left The first Cartesian.
   * @param {Cartesian4} right The second Cartesian.
   * @param {Cartesian4} result The object onto which to store the result.
   * @returns {Cartesian4} The modified result parameter.
   */
  Cartesian4.add = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = left.x + right.x
    result.y = left.y + right.y
    result.z = left.z + right.z
    result.w = left.w + right.w
    return result
  }

  /**
   * Computes the componentwise difference of two Cartesians.
   *
   * @param {Cartesian4} left The first Cartesian.
   * @param {Cartesian4} right The second Cartesian.
   * @param {Cartesian4} result The object onto which to store the result.
   * @returns {Cartesian4} The modified result parameter.
   */
  Cartesian4.subtract = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = left.x - right.x
    result.y = left.y - right.y
    result.z = left.z - right.z
    result.w = left.w - right.w
    return result
  }

  /**
   * Multiplies the provided Cartesian componentwise by the provided scalar.
   *
   * @param {Cartesian4} cartesian The Cartesian to be scaled.
   * @param {Number} scalar The scalar to multiply with.
   * @param {Cartesian4} result The object onto which to store the result.
   * @returns {Cartesian4} The modified result parameter.
   */
  Cartesian4.multiplyByScalar = function (cartesian, scalar, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.number('scalar', scalar)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = cartesian.x * scalar
    result.y = cartesian.y * scalar
    result.z = cartesian.z * scalar
    result.w = cartesian.w * scalar
    return result
  }

  /**
   * Divides the provided Cartesian componentwise by the provided scalar.
   *
   * @param {Cartesian4} cartesian The Cartesian to be divided.
   * @param {Number} scalar The scalar to divide by.
   * @param {Cartesian4} result The object onto which to store the result.
   * @returns {Cartesian4} The modified result parameter.
   */
  Cartesian4.divideByScalar = function (cartesian, scalar, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.number('scalar', scalar)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = cartesian.x / scalar
    result.y = cartesian.y / scalar
    result.z = cartesian.z / scalar
    result.w = cartesian.w / scalar
    return result
  }

  /**
   * Negates the provided Cartesian.
   *
   * @param {Cartesian4} cartesian The Cartesian to be negated.
   * @param {Cartesian4} result The object onto which to store the result.
   * @returns {Cartesian4} The modified result parameter.
   */
  Cartesian4.negate = function (cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = -cartesian.x
    result.y = -cartesian.y
    result.z = -cartesian.z
    result.w = -cartesian.w
    return result
  }

  /**
   * Computes the absolute value of the provided Cartesian.
   *
   * @param {Cartesian4} cartesian The Cartesian whose absolute value is to be computed.
   * @param {Cartesian4} result The object onto which to store the result.
   * @returns {Cartesian4} The modified result parameter.
   */
  Cartesian4.abs = function (cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = Math.abs(cartesian.x)
    result.y = Math.abs(cartesian.y)
    result.z = Math.abs(cartesian.z)
    result.w = Math.abs(cartesian.w)
    return result
  }

  var lerpScratch$1 = new Cartesian4()
  /**
   * Computes the linear interpolation or extrapolation at t using the provided cartesians.
   *
   * @param {Cartesian4} start The value corresponding to t at 0.0.
   * @param {Cartesian4}end The value corresponding to t at 1.0.
   * @param {Number} t The point along t at which to interpolate.
   * @param {Cartesian4} result The object onto which to store the result.
   * @returns {Cartesian4} The modified result parameter.
   */
  Cartesian4.lerp = function (start, end, t, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('start', start)
    RuntimeError.Check.typeOf.object('end', end)
    RuntimeError.Check.typeOf.number('t', t)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    Cartesian4.multiplyByScalar(end, t, lerpScratch$1)
    result = Cartesian4.multiplyByScalar(start, 1.0 - t, result)
    return Cartesian4.add(lerpScratch$1, result, result)
  }

  var mostOrthogonalAxisScratch$1 = new Cartesian4()
  /**
   * Returns the axis that is most orthogonal to the provided Cartesian.
   *
   * @param {Cartesian4} cartesian The Cartesian on which to find the most orthogonal axis.
   * @param {Cartesian4} result The object onto which to store the result.
   * @returns {Cartesian4} The most orthogonal axis.
   */
  Cartesian4.mostOrthogonalAxis = function (cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var f = Cartesian4.normalize(cartesian, mostOrthogonalAxisScratch$1)
    Cartesian4.abs(f, f)

    if (f.x <= f.y) {
      if (f.x <= f.z) {
        if (f.x <= f.w) {
          result = Cartesian4.clone(Cartesian4.UNIT_X, result)
        } else {
          result = Cartesian4.clone(Cartesian4.UNIT_W, result)
        }
      } else if (f.z <= f.w) {
        result = Cartesian4.clone(Cartesian4.UNIT_Z, result)
      } else {
        result = Cartesian4.clone(Cartesian4.UNIT_W, result)
      }
    } else if (f.y <= f.z) {
      if (f.y <= f.w) {
        result = Cartesian4.clone(Cartesian4.UNIT_Y, result)
      } else {
        result = Cartesian4.clone(Cartesian4.UNIT_W, result)
      }
    } else if (f.z <= f.w) {
      result = Cartesian4.clone(Cartesian4.UNIT_Z, result)
    } else {
      result = Cartesian4.clone(Cartesian4.UNIT_W, result)
    }

    return result
  }

  /**
   * Compares the provided Cartesians componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Cartesian4} [left] The first Cartesian.
   * @param {Cartesian4} [right] The second Cartesian.
   * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
   */
  Cartesian4.equals = function (left, right) {
    return (
      left === right ||
      (when.defined(left) && when.defined(right) && left.x === right.x && left.y === right.y && left.z === right.z && left.w === right.w)
    )
  }

  /**
   * @private
   */
  Cartesian4.equalsArray = function (cartesian, array, offset) {
    return (
      cartesian.x === array[offset] && cartesian.y === array[offset + 1] && cartesian.z === array[offset + 2] && cartesian.w === array[offset + 3]
    )
  }

  /**
   * Compares the provided Cartesians componentwise and returns
   * <code>true</code> if they pass an absolute or relative tolerance test,
   * <code>false</code> otherwise.
   *
   * @param {Cartesian4} [left] The first Cartesian.
   * @param {Cartesian4} [right] The second Cartesian.
   * @param {Number} [relativeEpsilon=0] The relative epsilon tolerance to use for equality testing.
   * @param {Number} [absoluteEpsilon=relativeEpsilon] The absolute epsilon tolerance to use for equality testing.
   * @returns {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
   */
  Cartesian4.equalsEpsilon = function (left, right, relativeEpsilon, absoluteEpsilon) {
    return (
      left === right ||
      (when.defined(left) &&
        when.defined(right) &&
        ComponentDatatype.CesiumMath.equalsEpsilon(left.x, right.x, relativeEpsilon, absoluteEpsilon) &&
        ComponentDatatype.CesiumMath.equalsEpsilon(left.y, right.y, relativeEpsilon, absoluteEpsilon) &&
        ComponentDatatype.CesiumMath.equalsEpsilon(left.z, right.z, relativeEpsilon, absoluteEpsilon) &&
        ComponentDatatype.CesiumMath.equalsEpsilon(left.w, right.w, relativeEpsilon, absoluteEpsilon))
    )
  }

  /**
   * An immutable Cartesian4 instance initialized to (0.0, 0.0, 0.0, 0.0).
   *
   * @type {Cartesian4}
   * @constant
   */
  Cartesian4.ZERO = Object.freeze(new Cartesian4(0.0, 0.0, 0.0, 0.0))

  /**
   * An immutable Cartesian4 instance initialized to (1.0, 1.0, 1.0, 1.0).
   *
   * @type {Cartesian4}
   * @constant
   */
  Cartesian4.ONE = Object.freeze(new Cartesian4(1.0, 1.0, 1.0, 1.0))

  /**
   * An immutable Cartesian4 instance initialized to (1.0, 0.0, 0.0, 0.0).
   *
   * @type {Cartesian4}
   * @constant
   */
  Cartesian4.UNIT_X = Object.freeze(new Cartesian4(1.0, 0.0, 0.0, 0.0))

  /**
   * An immutable Cartesian4 instance initialized to (0.0, 1.0, 0.0, 0.0).
   *
   * @type {Cartesian4}
   * @constant
   */
  Cartesian4.UNIT_Y = Object.freeze(new Cartesian4(0.0, 1.0, 0.0, 0.0))

  /**
   * An immutable Cartesian4 instance initialized to (0.0, 0.0, 1.0, 0.0).
   *
   * @type {Cartesian4}
   * @constant
   */
  Cartesian4.UNIT_Z = Object.freeze(new Cartesian4(0.0, 0.0, 1.0, 0.0))

  /**
   * An immutable Cartesian4 instance initialized to (0.0, 0.0, 0.0, 1.0).
   *
   * @type {Cartesian4}
   * @constant
   */
  Cartesian4.UNIT_W = Object.freeze(new Cartesian4(0.0, 0.0, 0.0, 1.0))

  /**
   * Duplicates this Cartesian4 instance.
   *
   * @param {Cartesian4} [result] The object onto which to store the result.
   * @returns {Cartesian4} The modified result parameter or a new Cartesian4 instance if one was not provided.
   */
  Cartesian4.prototype.clone = function (result) {
    return Cartesian4.clone(this, result)
  }

  /**
   * Compares this Cartesian against the provided Cartesian componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Cartesian4} [right] The right hand side Cartesian.
   * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
   */
  Cartesian4.prototype.equals = function (right) {
    return Cartesian4.equals(this, right)
  }

  /**
   * Compares this Cartesian against the provided Cartesian componentwise and returns
   * <code>true</code> if they pass an absolute or relative tolerance test,
   * <code>false</code> otherwise.
   *
   * @param {Cartesian4} [right] The right hand side Cartesian.
   * @param {Number} [relativeEpsilon=0] The relative epsilon tolerance to use for equality testing.
   * @param {Number} [absoluteEpsilon=relativeEpsilon] The absolute epsilon tolerance to use for equality testing.
   * @returns {Boolean} <code>true</code> if they are within the provided epsilon, <code>false</code> otherwise.
   */
  Cartesian4.prototype.equalsEpsilon = function (right, relativeEpsilon, absoluteEpsilon) {
    return Cartesian4.equalsEpsilon(this, right, relativeEpsilon, absoluteEpsilon)
  }

  /**
   * Creates a string representing this Cartesian in the format '(x, y, z, w)'.
   *
   * @returns {String} A string representing the provided Cartesian in the format '(x, y, z, w)'.
   */
  Cartesian4.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ')'
  }

  // scratchU8Array and scratchF32Array are views into the same buffer
  var scratchF32Array = new Float32Array(1)
  var scratchU8Array = new Uint8Array(scratchF32Array.buffer)

  var testU32 = new Uint32Array([0x11223344])
  var testU8 = new Uint8Array(testU32.buffer)
  var littleEndian = testU8[0] === 0x44

  /**
   * Packs an arbitrary floating point value to 4 values representable using uint8.
   *
   * @param {Number} value A floating point number.
   * @param {Cartesian4} [result] The Cartesian4 that will contain the packed float.
   * @returns {Cartesian4} A Cartesian4 representing the float packed to values in x, y, z, and w.
   */
  Cartesian4.packFloat = function (value, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number('value', value)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      result = new Cartesian4()
    }

    // scratchU8Array and scratchF32Array are views into the same buffer
    scratchF32Array[0] = value

    if (littleEndian) {
      result.x = scratchU8Array[0]
      result.y = scratchU8Array[1]
      result.z = scratchU8Array[2]
      result.w = scratchU8Array[3]
    } else {
      // convert from big-endian to little-endian
      result.x = scratchU8Array[3]
      result.y = scratchU8Array[2]
      result.z = scratchU8Array[1]
      result.w = scratchU8Array[0]
    }
    return result
  }

  /**
   * Unpacks a float packed using Cartesian4.packFloat.
   *
   * @param {Cartesian4} packedFloat A Cartesian4 containing a float packed to 4 values representable using uint8.
   * @returns {Number} The unpacked float.
   * @private
   */
  Cartesian4.unpackFloat = function (packedFloat) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('packedFloat', packedFloat)
    //>>includeEnd('debug');

    // scratchU8Array and scratchF32Array are views into the same buffer
    if (littleEndian) {
      scratchU8Array[0] = packedFloat.x
      scratchU8Array[1] = packedFloat.y
      scratchU8Array[2] = packedFloat.z
      scratchU8Array[3] = packedFloat.w
    } else {
      // convert from little-endian to big-endian
      scratchU8Array[0] = packedFloat.w
      scratchU8Array[1] = packedFloat.z
      scratchU8Array[2] = packedFloat.y
      scratchU8Array[3] = packedFloat.x
    }
    return scratchF32Array[0]
  }

  /**
   * A 4x4 matrix, indexable as a column-major order array.
   * Constructor parameters are in row-major order for code readability.
   * @alias Matrix4
   * @constructor
   * @implements {ArrayLike<number>}
   *
   * @param {Number} [column0Row0=0.0] The value for column 0, row 0.
   * @param {Number} [column1Row0=0.0] The value for column 1, row 0.
   * @param {Number} [column2Row0=0.0] The value for column 2, row 0.
   * @param {Number} [column3Row0=0.0] The value for column 3, row 0.
   * @param {Number} [column0Row1=0.0] The value for column 0, row 1.
   * @param {Number} [column1Row1=0.0] The value for column 1, row 1.
   * @param {Number} [column2Row1=0.0] The value for column 2, row 1.
   * @param {Number} [column3Row1=0.0] The value for column 3, row 1.
   * @param {Number} [column0Row2=0.0] The value for column 0, row 2.
   * @param {Number} [column1Row2=0.0] The value for column 1, row 2.
   * @param {Number} [column2Row2=0.0] The value for column 2, row 2.
   * @param {Number} [column3Row2=0.0] The value for column 3, row 2.
   * @param {Number} [column0Row3=0.0] The value for column 0, row 3.
   * @param {Number} [column1Row3=0.0] The value for column 1, row 3.
   * @param {Number} [column2Row3=0.0] The value for column 2, row 3.
   * @param {Number} [column3Row3=0.0] The value for column 3, row 3.
   *
   * @see Matrix4.fromColumnMajorArray
   * @see Matrix4.fromRowMajorArray
   * @see Matrix4.fromRotationTranslation
   * @see Matrix4.fromTranslationRotationScale
   * @see Matrix4.fromTranslationQuaternionRotationScale
   * @see Matrix4.fromTranslation
   * @see Matrix4.fromScale
   * @see Matrix4.fromUniformScale
   * @see Matrix4.fromCamera
   * @see Matrix4.computePerspectiveFieldOfView
   * @see Matrix4.computeOrthographicOffCenter
   * @see Matrix4.computePerspectiveOffCenter
   * @see Matrix4.computeInfinitePerspectiveOffCenter
   * @see Matrix4.computeViewportTransformation
   * @see Matrix4.computeView
   * @see Matrix2
   * @see Matrix3
   * @see Packable
   */
  function Matrix4(
    column0Row0,
    column1Row0,
    column2Row0,
    column3Row0,
    column0Row1,
    column1Row1,
    column2Row1,
    column3Row1,
    column0Row2,
    column1Row2,
    column2Row2,
    column3Row2,
    column0Row3,
    column1Row3,
    column2Row3,
    column3Row3
  ) {
    this[0] = when.defaultValue(column0Row0, 0.0)
    this[1] = when.defaultValue(column0Row1, 0.0)
    this[2] = when.defaultValue(column0Row2, 0.0)
    this[3] = when.defaultValue(column0Row3, 0.0)
    this[4] = when.defaultValue(column1Row0, 0.0)
    this[5] = when.defaultValue(column1Row1, 0.0)
    this[6] = when.defaultValue(column1Row2, 0.0)
    this[7] = when.defaultValue(column1Row3, 0.0)
    this[8] = when.defaultValue(column2Row0, 0.0)
    this[9] = when.defaultValue(column2Row1, 0.0)
    this[10] = when.defaultValue(column2Row2, 0.0)
    this[11] = when.defaultValue(column2Row3, 0.0)
    this[12] = when.defaultValue(column3Row0, 0.0)
    this[13] = when.defaultValue(column3Row1, 0.0)
    this[14] = when.defaultValue(column3Row2, 0.0)
    this[15] = when.defaultValue(column3Row3, 0.0)
  }

  /**
   * The number of elements used to pack the object into an array.
   * @type {Number}
   */
  Matrix4.packedLength = 16

  /**
   * Stores the provided instance into the provided array.
   *
   * @param {Matrix4} value The value to pack.
   * @param {Number[]} array The array to pack into.
   * @param {Number} [startingIndex=0] The index into the array at which to start packing the elements.
   *
   * @returns {Number[]} The array that was packed into
   */
  Matrix4.pack = function (value, array, startingIndex) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('value', value)
    RuntimeError.Check.defined('array', array)
    //>>includeEnd('debug');

    startingIndex = when.defaultValue(startingIndex, 0)

    array[startingIndex++] = value[0]
    array[startingIndex++] = value[1]
    array[startingIndex++] = value[2]
    array[startingIndex++] = value[3]
    array[startingIndex++] = value[4]
    array[startingIndex++] = value[5]
    array[startingIndex++] = value[6]
    array[startingIndex++] = value[7]
    array[startingIndex++] = value[8]
    array[startingIndex++] = value[9]
    array[startingIndex++] = value[10]
    array[startingIndex++] = value[11]
    array[startingIndex++] = value[12]
    array[startingIndex++] = value[13]
    array[startingIndex++] = value[14]
    array[startingIndex] = value[15]

    return array
  }

  /**
   * Retrieves an instance from a packed array.
   *
   * @param {Number[]} array The packed array.
   * @param {Number} [startingIndex=0] The starting index of the element to be unpacked.
   * @param {Matrix4} [result] The object into which to store the result.
   * @returns {Matrix4} The modified result parameter or a new Matrix4 instance if one was not provided.
   */
  Matrix4.unpack = function (array, startingIndex, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('array', array)
    //>>includeEnd('debug');

    startingIndex = when.defaultValue(startingIndex, 0)

    if (!when.defined(result)) {
      result = new Matrix4()
    }

    result[0] = array[startingIndex++]
    result[1] = array[startingIndex++]
    result[2] = array[startingIndex++]
    result[3] = array[startingIndex++]
    result[4] = array[startingIndex++]
    result[5] = array[startingIndex++]
    result[6] = array[startingIndex++]
    result[7] = array[startingIndex++]
    result[8] = array[startingIndex++]
    result[9] = array[startingIndex++]
    result[10] = array[startingIndex++]
    result[11] = array[startingIndex++]
    result[12] = array[startingIndex++]
    result[13] = array[startingIndex++]
    result[14] = array[startingIndex++]
    result[15] = array[startingIndex]
    return result
  }

  /**
   * Duplicates a Matrix4 instance.
   *
   * @param {Matrix4} matrix The matrix to duplicate.
   * @param {Matrix4} [result] The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter or a new Matrix4 instance if one was not provided. (Returns undefined if matrix is undefined)
   */
  Matrix4.clone = function (matrix, result) {
    if (!when.defined(matrix)) {
      return undefined
    }
    if (!when.defined(result)) {
      return new Matrix4(
        matrix[0],
        matrix[4],
        matrix[8],
        matrix[12],
        matrix[1],
        matrix[5],
        matrix[9],
        matrix[13],
        matrix[2],
        matrix[6],
        matrix[10],
        matrix[14],
        matrix[3],
        matrix[7],
        matrix[11],
        matrix[15]
      )
    }
    result[0] = matrix[0]
    result[1] = matrix[1]
    result[2] = matrix[2]
    result[3] = matrix[3]
    result[4] = matrix[4]
    result[5] = matrix[5]
    result[6] = matrix[6]
    result[7] = matrix[7]
    result[8] = matrix[8]
    result[9] = matrix[9]
    result[10] = matrix[10]
    result[11] = matrix[11]
    result[12] = matrix[12]
    result[13] = matrix[13]
    result[14] = matrix[14]
    result[15] = matrix[15]
    return result
  }

  /**
   * Creates a Matrix4 from 16 consecutive elements in an array.
   * @function
   *
   * @param {Number[]} array The array whose 16 consecutive elements correspond to the positions of the matrix.  Assumes column-major order.
   * @param {Number} [startingIndex=0] The offset into the array of the first element, which corresponds to first column first row position in the matrix.
   * @param {Matrix4} [result] The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter or a new Matrix4 instance if one was not provided.
   *
   * @example
   * // Create the Matrix4:
   * // [1.0, 2.0, 3.0, 4.0]
   * // [1.0, 2.0, 3.0, 4.0]
   * // [1.0, 2.0, 3.0, 4.0]
   * // [1.0, 2.0, 3.0, 4.0]
   *
   * var v = [1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 2.0, 2.0, 3.0, 3.0, 3.0, 3.0, 4.0, 4.0, 4.0, 4.0];
   * var m = Cesium.Matrix4.fromArray(v);
   *
   * // Create same Matrix4 with using an offset into an array
   * var v2 = [0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 2.0, 2.0, 3.0, 3.0, 3.0, 3.0, 4.0, 4.0, 4.0, 4.0];
   * var m2 = Cesium.Matrix4.fromArray(v2, 2);
   */
  Matrix4.fromArray = Matrix4.unpack

  /**
   * Computes a Matrix4 instance from a column-major order array.
   *
   * @param {Number[]} values The column-major order array.
   * @param {Matrix4} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix4} The modified result parameter, or a new Matrix4 instance if one was not provided.
   */
  Matrix4.fromColumnMajorArray = function (values, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('values', values)
    //>>includeEnd('debug');

    return Matrix4.clone(values, result)
  }

  /**
   * Computes a Matrix4 instance from a row-major order array.
   * The resulting matrix will be in column-major order.
   *
   * @param {Number[]} values The row-major order array.
   * @param {Matrix4} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix4} The modified result parameter, or a new Matrix4 instance if one was not provided.
   */
  Matrix4.fromRowMajorArray = function (values, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('values', values)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      return new Matrix4(
        values[0],
        values[1],
        values[2],
        values[3],
        values[4],
        values[5],
        values[6],
        values[7],
        values[8],
        values[9],
        values[10],
        values[11],
        values[12],
        values[13],
        values[14],
        values[15]
      )
    }
    result[0] = values[0]
    result[1] = values[4]
    result[2] = values[8]
    result[3] = values[12]
    result[4] = values[1]
    result[5] = values[5]
    result[6] = values[9]
    result[7] = values[13]
    result[8] = values[2]
    result[9] = values[6]
    result[10] = values[10]
    result[11] = values[14]
    result[12] = values[3]
    result[13] = values[7]
    result[14] = values[11]
    result[15] = values[15]
    return result
  }

  /**
   * Computes a Matrix4 instance from a Matrix3 representing the rotation
   * and a Cartesian3 representing the translation.
   *
   * @param {Matrix3} rotation The upper left portion of the matrix representing the rotation.
   * @param {Cartesian3} [translation=Cartesian3.ZERO] The upper right portion of the matrix representing the translation.
   * @param {Matrix4} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix4} The modified result parameter, or a new Matrix4 instance if one was not provided.
   */
  Matrix4.fromRotationTranslation = function (rotation, translation, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('rotation', rotation)
    //>>includeEnd('debug');

    translation = when.defaultValue(translation, Cartesian3.ZERO)

    if (!when.defined(result)) {
      return new Matrix4(
        rotation[0],
        rotation[3],
        rotation[6],
        translation.x,
        rotation[1],
        rotation[4],
        rotation[7],
        translation.y,
        rotation[2],
        rotation[5],
        rotation[8],
        translation.z,
        0.0,
        0.0,
        0.0,
        1.0
      )
    }

    result[0] = rotation[0]
    result[1] = rotation[1]
    result[2] = rotation[2]
    result[3] = 0.0
    result[4] = rotation[3]
    result[5] = rotation[4]
    result[6] = rotation[5]
    result[7] = 0.0
    result[8] = rotation[6]
    result[9] = rotation[7]
    result[10] = rotation[8]
    result[11] = 0.0
    result[12] = translation.x
    result[13] = translation.y
    result[14] = translation.z
    result[15] = 1.0
    return result
  }

  /**
   * Computes a Matrix4 instance from a translation, rotation, and scale (TRS)
   * representation with the rotation represented as a quaternion.
   *
   * @param {Cartesian3} translation The translation transformation.
   * @param {Quaternion} rotation The rotation transformation.
   * @param {Cartesian3} scale The non-uniform scale transformation.
   * @param {Matrix4} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix4} The modified result parameter, or a new Matrix4 instance if one was not provided.
   *
   * @example
   * var result = Cesium.Matrix4.fromTranslationQuaternionRotationScale(
   *   new Cesium.Cartesian3(1.0, 2.0, 3.0), // translation
   *   Cesium.Quaternion.IDENTITY,           // rotation
   *   new Cesium.Cartesian3(7.0, 8.0, 9.0), // scale
   *   result);
   */
  Matrix4.fromTranslationQuaternionRotationScale = function (translation, rotation, scale, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('translation', translation)
    RuntimeError.Check.typeOf.object('rotation', rotation)
    RuntimeError.Check.typeOf.object('scale', scale)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      result = new Matrix4()
    }

    var scaleX = scale.x
    var scaleY = scale.y
    var scaleZ = scale.z

    var x2 = rotation.x * rotation.x
    var xy = rotation.x * rotation.y
    var xz = rotation.x * rotation.z
    var xw = rotation.x * rotation.w
    var y2 = rotation.y * rotation.y
    var yz = rotation.y * rotation.z
    var yw = rotation.y * rotation.w
    var z2 = rotation.z * rotation.z
    var zw = rotation.z * rotation.w
    var w2 = rotation.w * rotation.w

    var m00 = x2 - y2 - z2 + w2
    var m01 = 2.0 * (xy - zw)
    var m02 = 2.0 * (xz + yw)

    var m10 = 2.0 * (xy + zw)
    var m11 = -x2 + y2 - z2 + w2
    var m12 = 2.0 * (yz - xw)

    var m20 = 2.0 * (xz - yw)
    var m21 = 2.0 * (yz + xw)
    var m22 = -x2 - y2 + z2 + w2

    result[0] = m00 * scaleX
    result[1] = m10 * scaleX
    result[2] = m20 * scaleX
    result[3] = 0.0
    result[4] = m01 * scaleY
    result[5] = m11 * scaleY
    result[6] = m21 * scaleY
    result[7] = 0.0
    result[8] = m02 * scaleZ
    result[9] = m12 * scaleZ
    result[10] = m22 * scaleZ
    result[11] = 0.0
    result[12] = translation.x
    result[13] = translation.y
    result[14] = translation.z
    result[15] = 1.0

    return result
  }

  /**
   * Creates a Matrix4 instance from a {@link TranslationRotationScale} instance.
   *
   * @param {TranslationRotationScale} translationRotationScale The instance.
   * @param {Matrix4} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix4} The modified result parameter, or a new Matrix4 instance if one was not provided.
   */
  Matrix4.fromTranslationRotationScale = function (translationRotationScale, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('translationRotationScale', translationRotationScale)
    //>>includeEnd('debug');

    return Matrix4.fromTranslationQuaternionRotationScale(
      translationRotationScale.translation,
      translationRotationScale.rotation,
      translationRotationScale.scale,
      result
    )
  }

  /**
   * Creates a Matrix4 instance from a Cartesian3 representing the translation.
   *
   * @param {Cartesian3} translation The upper right portion of the matrix representing the translation.
   * @param {Matrix4} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix4} The modified result parameter, or a new Matrix4 instance if one was not provided.
   *
   * @see Matrix4.multiplyByTranslation
   */
  Matrix4.fromTranslation = function (translation, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('translation', translation)
    //>>includeEnd('debug');

    return Matrix4.fromRotationTranslation(Matrix3.IDENTITY, translation, result)
  }

  /**
   * Computes a Matrix4 instance representing a non-uniform scale.
   *
   * @param {Cartesian3} scale The x, y, and z scale factors.
   * @param {Matrix4} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix4} The modified result parameter, or a new Matrix4 instance if one was not provided.
   *
   * @example
   * // Creates
   * //   [7.0, 0.0, 0.0, 0.0]
   * //   [0.0, 8.0, 0.0, 0.0]
   * //   [0.0, 0.0, 9.0, 0.0]
   * //   [0.0, 0.0, 0.0, 1.0]
   * var m = Cesium.Matrix4.fromScale(new Cesium.Cartesian3(7.0, 8.0, 9.0));
   */
  Matrix4.fromScale = function (scale, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('scale', scale)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      return new Matrix4(scale.x, 0.0, 0.0, 0.0, 0.0, scale.y, 0.0, 0.0, 0.0, 0.0, scale.z, 0.0, 0.0, 0.0, 0.0, 1.0)
    }

    result[0] = scale.x
    result[1] = 0.0
    result[2] = 0.0
    result[3] = 0.0
    result[4] = 0.0
    result[5] = scale.y
    result[6] = 0.0
    result[7] = 0.0
    result[8] = 0.0
    result[9] = 0.0
    result[10] = scale.z
    result[11] = 0.0
    result[12] = 0.0
    result[13] = 0.0
    result[14] = 0.0
    result[15] = 1.0
    return result
  }

  /**
   * Computes a Matrix4 instance representing a uniform scale.
   *
   * @param {Number} scale The uniform scale factor.
   * @param {Matrix4} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix4} The modified result parameter, or a new Matrix4 instance if one was not provided.
   *
   * @example
   * // Creates
   * //   [2.0, 0.0, 0.0, 0.0]
   * //   [0.0, 2.0, 0.0, 0.0]
   * //   [0.0, 0.0, 2.0, 0.0]
   * //   [0.0, 0.0, 0.0, 1.0]
   * var m = Cesium.Matrix4.fromUniformScale(2.0);
   */
  Matrix4.fromUniformScale = function (scale, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number('scale', scale)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      return new Matrix4(scale, 0.0, 0.0, 0.0, 0.0, scale, 0.0, 0.0, 0.0, 0.0, scale, 0.0, 0.0, 0.0, 0.0, 1.0)
    }

    result[0] = scale
    result[1] = 0.0
    result[2] = 0.0
    result[3] = 0.0
    result[4] = 0.0
    result[5] = scale
    result[6] = 0.0
    result[7] = 0.0
    result[8] = 0.0
    result[9] = 0.0
    result[10] = scale
    result[11] = 0.0
    result[12] = 0.0
    result[13] = 0.0
    result[14] = 0.0
    result[15] = 1.0
    return result
  }

  var fromCameraF = new Cartesian3()
  var fromCameraR = new Cartesian3()
  var fromCameraU = new Cartesian3()

  /**
   * Computes a Matrix4 instance from a Camera.
   *
   * @param {Camera} camera The camera to use.
   * @param {Matrix4} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix4} The modified result parameter, or a new Matrix4 instance if one was not provided.
   */
  Matrix4.fromCamera = function (camera, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('camera', camera)
    //>>includeEnd('debug');

    var position = camera.position
    var direction = camera.direction
    var up = camera.up

    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('camera.position', position)
    RuntimeError.Check.typeOf.object('camera.direction', direction)
    RuntimeError.Check.typeOf.object('camera.up', up)
    //>>includeEnd('debug');

    Cartesian3.normalize(direction, fromCameraF)
    Cartesian3.normalize(Cartesian3.cross(fromCameraF, up, fromCameraR), fromCameraR)
    Cartesian3.normalize(Cartesian3.cross(fromCameraR, fromCameraF, fromCameraU), fromCameraU)

    var sX = fromCameraR.x
    var sY = fromCameraR.y
    var sZ = fromCameraR.z
    var fX = fromCameraF.x
    var fY = fromCameraF.y
    var fZ = fromCameraF.z
    var uX = fromCameraU.x
    var uY = fromCameraU.y
    var uZ = fromCameraU.z
    var positionX = position.x
    var positionY = position.y
    var positionZ = position.z
    var t0 = sX * -positionX + sY * -positionY + sZ * -positionZ
    var t1 = uX * -positionX + uY * -positionY + uZ * -positionZ
    var t2 = fX * positionX + fY * positionY + fZ * positionZ

    // The code below this comment is an optimized
    // version of the commented lines.
    // Rather that create two matrices and then multiply,
    // we just bake in the multiplcation as part of creation.
    // var rotation = new Matrix4(
    //                 sX,  sY,  sZ, 0.0,
    //                 uX,  uY,  uZ, 0.0,
    //                -fX, -fY, -fZ, 0.0,
    //                 0.0,  0.0,  0.0, 1.0);
    // var translation = new Matrix4(
    //                 1.0, 0.0, 0.0, -position.x,
    //                 0.0, 1.0, 0.0, -position.y,
    //                 0.0, 0.0, 1.0, -position.z,
    //                 0.0, 0.0, 0.0, 1.0);
    // return rotation.multiply(translation);
    if (!when.defined(result)) {
      return new Matrix4(sX, sY, sZ, t0, uX, uY, uZ, t1, -fX, -fY, -fZ, t2, 0.0, 0.0, 0.0, 1.0)
    }
    result[0] = sX
    result[1] = uX
    result[2] = -fX
    result[3] = 0.0
    result[4] = sY
    result[5] = uY
    result[6] = -fY
    result[7] = 0.0
    result[8] = sZ
    result[9] = uZ
    result[10] = -fZ
    result[11] = 0.0
    result[12] = t0
    result[13] = t1
    result[14] = t2
    result[15] = 1.0
    return result
  }

  /**
   * Computes a Matrix4 instance representing a perspective transformation matrix.
   *
   * @param {Number} fovY The field of view along the Y axis in radians.
   * @param {Number} aspectRatio The aspect ratio.
   * @param {Number} near The distance to the near plane in meters.
   * @param {Number} far The distance to the far plane in meters.
   * @param {Matrix4} result The object in which the result will be stored.
   * @returns {Matrix4} The modified result parameter.
   *
   * @exception {DeveloperError} fovY must be in (0, PI].
   * @exception {DeveloperError} aspectRatio must be greater than zero.
   * @exception {DeveloperError} near must be greater than zero.
   * @exception {DeveloperError} far must be greater than zero.
   */
  Matrix4.computePerspectiveFieldOfView = function (fovY, aspectRatio, near, far, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number.greaterThan('fovY', fovY, 0.0)
    RuntimeError.Check.typeOf.number.lessThan('fovY', fovY, Math.PI)
    RuntimeError.Check.typeOf.number.greaterThan('near', near, 0.0)
    RuntimeError.Check.typeOf.number.greaterThan('far', far, 0.0)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var bottom = Math.tan(fovY * 0.5)

    var column1Row1 = 1.0 / bottom
    var column0Row0 = column1Row1 / aspectRatio
    var column2Row2 = (far + near) / (near - far)
    var column3Row2 = (2.0 * far * near) / (near - far)

    result[0] = column0Row0
    result[1] = 0.0
    result[2] = 0.0
    result[3] = 0.0
    result[4] = 0.0
    result[5] = column1Row1
    result[6] = 0.0
    result[7] = 0.0
    result[8] = 0.0
    result[9] = 0.0
    result[10] = column2Row2
    result[11] = -1.0
    result[12] = 0.0
    result[13] = 0.0
    result[14] = column3Row2
    result[15] = 0.0
    return result
  }

  /**
   * Computes a Matrix4 instance representing an orthographic transformation matrix.
   *
   * @param {Number} left The number of meters to the left of the camera that will be in view.
   * @param {Number} right The number of meters to the right of the camera that will be in view.
   * @param {Number} bottom The number of meters below of the camera that will be in view.
   * @param {Number} top The number of meters above of the camera that will be in view.
   * @param {Number} near The distance to the near plane in meters.
   * @param {Number} far The distance to the far plane in meters.
   * @param {Matrix4} result The object in which the result will be stored.
   * @returns {Matrix4} The modified result parameter.
   */
  Matrix4.computeOrthographicOffCenter = function (left, right, bottom, top, near, far, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number('left', left)
    RuntimeError.Check.typeOf.number('right', right)
    RuntimeError.Check.typeOf.number('bottom', bottom)
    RuntimeError.Check.typeOf.number('top', top)
    RuntimeError.Check.typeOf.number('near', near)
    RuntimeError.Check.typeOf.number('far', far)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var a = 1.0 / (right - left)
    var b = 1.0 / (top - bottom)
    var c = 1.0 / (far - near)

    var tx = -(right + left) * a
    var ty = -(top + bottom) * b
    var tz = -(far + near) * c
    a *= 2.0
    b *= 2.0
    c *= -2.0

    result[0] = a
    result[1] = 0.0
    result[2] = 0.0
    result[3] = 0.0
    result[4] = 0.0
    result[5] = b
    result[6] = 0.0
    result[7] = 0.0
    result[8] = 0.0
    result[9] = 0.0
    result[10] = c
    result[11] = 0.0
    result[12] = tx
    result[13] = ty
    result[14] = tz
    result[15] = 1.0
    return result
  }

  /**
   * Computes a Matrix4 instance representing an off center perspective transformation.
   *
   * @param {Number} left The number of meters to the left of the camera that will be in view.
   * @param {Number} right The number of meters to the right of the camera that will be in view.
   * @param {Number} bottom The number of meters below of the camera that will be in view.
   * @param {Number} top The number of meters above of the camera that will be in view.
   * @param {Number} near The distance to the near plane in meters.
   * @param {Number} far The distance to the far plane in meters.
   * @param {Matrix4} result The object in which the result will be stored.
   * @returns {Matrix4} The modified result parameter.
   */
  Matrix4.computePerspectiveOffCenter = function (left, right, bottom, top, near, far, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number('left', left)
    RuntimeError.Check.typeOf.number('right', right)
    RuntimeError.Check.typeOf.number('bottom', bottom)
    RuntimeError.Check.typeOf.number('top', top)
    RuntimeError.Check.typeOf.number('near', near)
    RuntimeError.Check.typeOf.number('far', far)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var column0Row0 = (2.0 * near) / (right - left)
    var column1Row1 = (2.0 * near) / (top - bottom)
    var column2Row0 = (right + left) / (right - left)
    var column2Row1 = (top + bottom) / (top - bottom)
    var column2Row2 = -(far + near) / (far - near)
    var column2Row3 = -1.0
    var column3Row2 = (-2.0 * far * near) / (far - near)

    result[0] = column0Row0
    result[1] = 0.0
    result[2] = 0.0
    result[3] = 0.0
    result[4] = 0.0
    result[5] = column1Row1
    result[6] = 0.0
    result[7] = 0.0
    result[8] = column2Row0
    result[9] = column2Row1
    result[10] = column2Row2
    result[11] = column2Row3
    result[12] = 0.0
    result[13] = 0.0
    result[14] = column3Row2
    result[15] = 0.0
    return result
  }

  /**
   * Computes a Matrix4 instance representing an infinite off center perspective transformation.
   *
   * @param {Number} left The number of meters to the left of the camera that will be in view.
   * @param {Number} right The number of meters to the right of the camera that will be in view.
   * @param {Number} bottom The number of meters below of the camera that will be in view.
   * @param {Number} top The number of meters above of the camera that will be in view.
   * @param {Number} near The distance to the near plane in meters.
   * @param {Matrix4} result The object in which the result will be stored.
   * @returns {Matrix4} The modified result parameter.
   */
  Matrix4.computeInfinitePerspectiveOffCenter = function (left, right, bottom, top, near, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number('left', left)
    RuntimeError.Check.typeOf.number('right', right)
    RuntimeError.Check.typeOf.number('bottom', bottom)
    RuntimeError.Check.typeOf.number('top', top)
    RuntimeError.Check.typeOf.number('near', near)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var column0Row0 = (2.0 * near) / (right - left)
    var column1Row1 = (2.0 * near) / (top - bottom)
    var column2Row0 = (right + left) / (right - left)
    var column2Row1 = (top + bottom) / (top - bottom)
    var column2Row2 = -1.0
    var column2Row3 = -1.0
    var column3Row2 = -2.0 * near

    result[0] = column0Row0
    result[1] = 0.0
    result[2] = 0.0
    result[3] = 0.0
    result[4] = 0.0
    result[5] = column1Row1
    result[6] = 0.0
    result[7] = 0.0
    result[8] = column2Row0
    result[9] = column2Row1
    result[10] = column2Row2
    result[11] = column2Row3
    result[12] = 0.0
    result[13] = 0.0
    result[14] = column3Row2
    result[15] = 0.0
    return result
  }

  /**
   * Computes a Matrix4 instance that transforms from normalized device coordinates to window coordinates.
   *
   * @param {Object} [viewport = { x : 0.0, y : 0.0, width : 0.0, height : 0.0 }] The viewport's corners as shown in Example 1.
   * @param {Number} [nearDepthRange=0.0] The near plane distance in window coordinates.
   * @param {Number} [farDepthRange=1.0] The far plane distance in window coordinates.
   * @param {Matrix4} [result] The object in which the result will be stored.
   * @returns {Matrix4} The modified result parameter.
   *
   * @example
   * // Create viewport transformation using an explicit viewport and depth range.
   * var m = Cesium.Matrix4.computeViewportTransformation({
   *     x : 0.0,
   *     y : 0.0,
   *     width : 1024.0,
   *     height : 768.0
   * }, 0.0, 1.0, new Cesium.Matrix4());
   */
  Matrix4.computeViewportTransformation = function (viewport, nearDepthRange, farDepthRange, result) {
    if (!when.defined(result)) {
      result = new Matrix4()
    }

    viewport = when.defaultValue(viewport, when.defaultValue.EMPTY_OBJECT)
    var x = when.defaultValue(viewport.x, 0.0)
    var y = when.defaultValue(viewport.y, 0.0)
    var width = when.defaultValue(viewport.width, 0.0)
    var height = when.defaultValue(viewport.height, 0.0)
    nearDepthRange = when.defaultValue(nearDepthRange, 0.0)
    farDepthRange = when.defaultValue(farDepthRange, 1.0)

    var halfWidth = width * 0.5
    var halfHeight = height * 0.5
    var halfDepth = (farDepthRange - nearDepthRange) * 0.5

    var column0Row0 = halfWidth
    var column1Row1 = halfHeight
    var column2Row2 = halfDepth
    var column3Row0 = x + halfWidth
    var column3Row1 = y + halfHeight
    var column3Row2 = nearDepthRange + halfDepth
    var column3Row3 = 1.0

    result[0] = column0Row0
    result[1] = 0.0
    result[2] = 0.0
    result[3] = 0.0
    result[4] = 0.0
    result[5] = column1Row1
    result[6] = 0.0
    result[7] = 0.0
    result[8] = 0.0
    result[9] = 0.0
    result[10] = column2Row2
    result[11] = 0.0
    result[12] = column3Row0
    result[13] = column3Row1
    result[14] = column3Row2
    result[15] = column3Row3
    return result
  }

  /**
   * Computes a Matrix4 instance that transforms from world space to view space.
   *
   * @param {Cartesian3} position The position of the camera.
   * @param {Cartesian3} direction The forward direction.
   * @param {Cartesian3} up The up direction.
   * @param {Cartesian3} right The right direction.
   * @param {Matrix4} result The object in which the result will be stored.
   * @returns {Matrix4} The modified result parameter.
   */
  Matrix4.computeView = function (position, direction, up, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('position', position)
    RuntimeError.Check.typeOf.object('direction', direction)
    RuntimeError.Check.typeOf.object('up', up)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result[0] = right.x
    result[1] = up.x
    result[2] = -direction.x
    result[3] = 0.0
    result[4] = right.y
    result[5] = up.y
    result[6] = -direction.y
    result[7] = 0.0
    result[8] = right.z
    result[9] = up.z
    result[10] = -direction.z
    result[11] = 0.0
    result[12] = -Cartesian3.dot(right, position)
    result[13] = -Cartesian3.dot(up, position)
    result[14] = Cartesian3.dot(direction, position)
    result[15] = 1.0
    return result
  }

  /**
   * Computes an Array from the provided Matrix4 instance.
   * The array will be in column-major order.
   *
   * @param {Matrix4} matrix The matrix to use..
   * @param {Number[]} [result] The Array onto which to store the result.
   * @returns {Number[]} The modified Array parameter or a new Array instance if one was not provided.
   *
   * @example
   * //create an array from an instance of Matrix4
   * // m = [10.0, 14.0, 18.0, 22.0]
   * //     [11.0, 15.0, 19.0, 23.0]
   * //     [12.0, 16.0, 20.0, 24.0]
   * //     [13.0, 17.0, 21.0, 25.0]
   * var a = Cesium.Matrix4.toArray(m);
   *
   * // m remains the same
   * //creates a = [10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0, 22.0, 23.0, 24.0, 25.0]
   */
  Matrix4.toArray = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      return [
        matrix[0],
        matrix[1],
        matrix[2],
        matrix[3],
        matrix[4],
        matrix[5],
        matrix[6],
        matrix[7],
        matrix[8],
        matrix[9],
        matrix[10],
        matrix[11],
        matrix[12],
        matrix[13],
        matrix[14],
        matrix[15]
      ]
    }
    result[0] = matrix[0]
    result[1] = matrix[1]
    result[2] = matrix[2]
    result[3] = matrix[3]
    result[4] = matrix[4]
    result[5] = matrix[5]
    result[6] = matrix[6]
    result[7] = matrix[7]
    result[8] = matrix[8]
    result[9] = matrix[9]
    result[10] = matrix[10]
    result[11] = matrix[11]
    result[12] = matrix[12]
    result[13] = matrix[13]
    result[14] = matrix[14]
    result[15] = matrix[15]
    return result
  }

  /**
   * Computes the array index of the element at the provided row and column.
   *
   * @param {Number} row The zero-based index of the row.
   * @param {Number} column The zero-based index of the column.
   * @returns {Number} The index of the element at the provided row and column.
   *
   * @exception {DeveloperError} row must be 0, 1, 2, or 3.
   * @exception {DeveloperError} column must be 0, 1, 2, or 3.
   *
   * @example
   * var myMatrix = new Cesium.Matrix4();
   * var column1Row0Index = Cesium.Matrix4.getElementIndex(1, 0);
   * var column1Row0 = myMatrix[column1Row0Index];
   * myMatrix[column1Row0Index] = 10.0;
   */
  Matrix4.getElementIndex = function (column, row) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number.greaterThanOrEquals('row', row, 0)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('row', row, 3)

    RuntimeError.Check.typeOf.number.greaterThanOrEquals('column', column, 0)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('column', column, 3)
    //>>includeEnd('debug');

    return column * 4 + row
  }

  /**
   * Retrieves a copy of the matrix column at the provided index as a Cartesian4 instance.
   *
   * @param {Matrix4} matrix The matrix to use.
   * @param {Number} index The zero-based index of the column to retrieve.
   * @param {Cartesian4} result The object onto which to store the result.
   * @returns {Cartesian4} The modified result parameter.
   *
   * @exception {DeveloperError} index must be 0, 1, 2, or 3.
   *
   * @example
   * //returns a Cartesian4 instance with values from the specified column
   * // m = [10.0, 11.0, 12.0, 13.0]
   * //     [14.0, 15.0, 16.0, 17.0]
   * //     [18.0, 19.0, 20.0, 21.0]
   * //     [22.0, 23.0, 24.0, 25.0]
   *
   * //Example 1: Creates an instance of Cartesian
   * var a = Cesium.Matrix4.getColumn(m, 2, new Cesium.Cartesian4());
   *
   * @example
   * //Example 2: Sets values for Cartesian instance
   * var a = new Cesium.Cartesian4();
   * Cesium.Matrix4.getColumn(m, 2, a);
   *
   * // a.x = 12.0; a.y = 16.0; a.z = 20.0; a.w = 24.0;
   */
  Matrix4.getColumn = function (matrix, index, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)

    RuntimeError.Check.typeOf.number.greaterThanOrEquals('index', index, 0)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('index', index, 3)

    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var startIndex = index * 4
    var x = matrix[startIndex]
    var y = matrix[startIndex + 1]
    var z = matrix[startIndex + 2]
    var w = matrix[startIndex + 3]

    result.x = x
    result.y = y
    result.z = z
    result.w = w
    return result
  }

  /**
   * Computes a new matrix that replaces the specified column in the provided matrix with the provided Cartesian4 instance.
   *
   * @param {Matrix4} matrix The matrix to use.
   * @param {Number} index The zero-based index of the column to set.
   * @param {Cartesian4} cartesian The Cartesian whose values will be assigned to the specified column.
   * @param {Matrix4} result The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter.
   *
   * @exception {DeveloperError} index must be 0, 1, 2, or 3.
   *
   * @example
   * //creates a new Matrix4 instance with new column values from the Cartesian4 instance
   * // m = [10.0, 11.0, 12.0, 13.0]
   * //     [14.0, 15.0, 16.0, 17.0]
   * //     [18.0, 19.0, 20.0, 21.0]
   * //     [22.0, 23.0, 24.0, 25.0]
   *
   * var a = Cesium.Matrix4.setColumn(m, 2, new Cesium.Cartesian4(99.0, 98.0, 97.0, 96.0), new Cesium.Matrix4());
   *
   * // m remains the same
   * // a = [10.0, 11.0, 99.0, 13.0]
   * //     [14.0, 15.0, 98.0, 17.0]
   * //     [18.0, 19.0, 97.0, 21.0]
   * //     [22.0, 23.0, 96.0, 25.0]
   */
  Matrix4.setColumn = function (matrix, index, cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)

    RuntimeError.Check.typeOf.number.greaterThanOrEquals('index', index, 0)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('index', index, 3)

    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result = Matrix4.clone(matrix, result)
    var startIndex = index * 4
    result[startIndex] = cartesian.x
    result[startIndex + 1] = cartesian.y
    result[startIndex + 2] = cartesian.z
    result[startIndex + 3] = cartesian.w
    return result
  }

  /**
   * Computes a new matrix that replaces the translation in the rightmost column of the provided
   * matrix with the provided translation. This assumes the matrix is an affine transformation.
   *
   * @param {Matrix4} matrix The matrix to use.
   * @param {Cartesian3} translation The translation that replaces the translation of the provided matrix.
   * @param {Matrix4} result The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter.
   */
  Matrix4.setTranslation = function (matrix, translation, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('translation', translation)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result[0] = matrix[0]
    result[1] = matrix[1]
    result[2] = matrix[2]
    result[3] = matrix[3]

    result[4] = matrix[4]
    result[5] = matrix[5]
    result[6] = matrix[6]
    result[7] = matrix[7]

    result[8] = matrix[8]
    result[9] = matrix[9]
    result[10] = matrix[10]
    result[11] = matrix[11]

    result[12] = translation.x
    result[13] = translation.y
    result[14] = translation.z
    result[15] = matrix[15]

    return result
  }

  var scaleScratch = new Cartesian3()
  /**
   * Computes a new matrix that replaces the scale with the provided scale.
   * This assumes the matrix is an affine transformation.
   *
   * @param {Matrix4} matrix The matrix to use.
   * @param {Cartesian3} scale The scale that replaces the scale of the provided matrix.
   * @param {Matrix4} result The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter.
   */
  Matrix4.setScale = function (matrix, scale, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('scale', scale)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var existingScale = Matrix4.getScale(matrix, scaleScratch)
    var newScale = Cartesian3.divideComponents(scale, existingScale, scaleScratch)
    return Matrix4.multiplyByScale(matrix, newScale, result)
  }

  /**
   * Retrieves a copy of the matrix row at the provided index as a Cartesian4 instance.
   *
   * @param {Matrix4} matrix The matrix to use.
   * @param {Number} index The zero-based index of the row to retrieve.
   * @param {Cartesian4} result The object onto which to store the result.
   * @returns {Cartesian4} The modified result parameter.
   *
   * @exception {DeveloperError} index must be 0, 1, 2, or 3.
   *
   * @example
   * //returns a Cartesian4 instance with values from the specified column
   * // m = [10.0, 11.0, 12.0, 13.0]
   * //     [14.0, 15.0, 16.0, 17.0]
   * //     [18.0, 19.0, 20.0, 21.0]
   * //     [22.0, 23.0, 24.0, 25.0]
   *
   * //Example 1: Returns an instance of Cartesian
   * var a = Cesium.Matrix4.getRow(m, 2, new Cesium.Cartesian4());
   *
   * @example
   * //Example 2: Sets values for a Cartesian instance
   * var a = new Cesium.Cartesian4();
   * Cesium.Matrix4.getRow(m, 2, a);
   *
   * // a.x = 18.0; a.y = 19.0; a.z = 20.0; a.w = 21.0;
   */
  Matrix4.getRow = function (matrix, index, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)

    RuntimeError.Check.typeOf.number.greaterThanOrEquals('index', index, 0)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('index', index, 3)

    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var x = matrix[index]
    var y = matrix[index + 4]
    var z = matrix[index + 8]
    var w = matrix[index + 12]

    result.x = x
    result.y = y
    result.z = z
    result.w = w
    return result
  }

  /**
   * Computes a new matrix that replaces the specified row in the provided matrix with the provided Cartesian4 instance.
   *
   * @param {Matrix4} matrix The matrix to use.
   * @param {Number} index The zero-based index of the row to set.
   * @param {Cartesian4} cartesian The Cartesian whose values will be assigned to the specified row.
   * @param {Matrix4} result The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter.
   *
   * @exception {DeveloperError} index must be 0, 1, 2, or 3.
   *
   * @example
   * //create a new Matrix4 instance with new row values from the Cartesian4 instance
   * // m = [10.0, 11.0, 12.0, 13.0]
   * //     [14.0, 15.0, 16.0, 17.0]
   * //     [18.0, 19.0, 20.0, 21.0]
   * //     [22.0, 23.0, 24.0, 25.0]
   *
   * var a = Cesium.Matrix4.setRow(m, 2, new Cesium.Cartesian4(99.0, 98.0, 97.0, 96.0), new Cesium.Matrix4());
   *
   * // m remains the same
   * // a = [10.0, 11.0, 12.0, 13.0]
   * //     [14.0, 15.0, 16.0, 17.0]
   * //     [99.0, 98.0, 97.0, 96.0]
   * //     [22.0, 23.0, 24.0, 25.0]
   */
  Matrix4.setRow = function (matrix, index, cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)

    RuntimeError.Check.typeOf.number.greaterThanOrEquals('index', index, 0)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('index', index, 3)

    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result = Matrix4.clone(matrix, result)
    result[index] = cartesian.x
    result[index + 4] = cartesian.y
    result[index + 8] = cartesian.z
    result[index + 12] = cartesian.w
    return result
  }

  var scratchColumn$1 = new Cartesian3()

  /**
   * Extracts the non-uniform scale assuming the matrix is an affine transformation.
   *
   * @param {Matrix4} matrix The matrix.
   * @param {Cartesian3} result The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter
   */
  Matrix4.getScale = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = Cartesian3.magnitude(Cartesian3.fromElements(matrix[0], matrix[1], matrix[2], scratchColumn$1))
    result.y = Cartesian3.magnitude(Cartesian3.fromElements(matrix[4], matrix[5], matrix[6], scratchColumn$1))
    result.z = Cartesian3.magnitude(Cartesian3.fromElements(matrix[8], matrix[9], matrix[10], scratchColumn$1))
    return result
  }

  var scratchScale$1 = new Cartesian3()

  /**
   * Computes the maximum scale assuming the matrix is an affine transformation.
   * The maximum scale is the maximum length of the column vectors in the upper-left
   * 3x3 matrix.
   *
   * @param {Matrix4} matrix The matrix.
   * @returns {Number} The maximum scale.
   */
  Matrix4.getMaximumScale = function (matrix) {
    Matrix4.getScale(matrix, scratchScale$1)
    return Cartesian3.maximumComponent(scratchScale$1)
  }

  /**
   * Computes the product of two matrices.
   *
   * @param {Matrix4} left The first matrix.
   * @param {Matrix4} right The second matrix.
   * @param {Matrix4} result The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter.
   */
  Matrix4.multiply = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var left0 = left[0]
    var left1 = left[1]
    var left2 = left[2]
    var left3 = left[3]
    var left4 = left[4]
    var left5 = left[5]
    var left6 = left[6]
    var left7 = left[7]
    var left8 = left[8]
    var left9 = left[9]
    var left10 = left[10]
    var left11 = left[11]
    var left12 = left[12]
    var left13 = left[13]
    var left14 = left[14]
    var left15 = left[15]

    var right0 = right[0]
    var right1 = right[1]
    var right2 = right[2]
    var right3 = right[3]
    var right4 = right[4]
    var right5 = right[5]
    var right6 = right[6]
    var right7 = right[7]
    var right8 = right[8]
    var right9 = right[9]
    var right10 = right[10]
    var right11 = right[11]
    var right12 = right[12]
    var right13 = right[13]
    var right14 = right[14]
    var right15 = right[15]

    var column0Row0 = left0 * right0 + left4 * right1 + left8 * right2 + left12 * right3
    var column0Row1 = left1 * right0 + left5 * right1 + left9 * right2 + left13 * right3
    var column0Row2 = left2 * right0 + left6 * right1 + left10 * right2 + left14 * right3
    var column0Row3 = left3 * right0 + left7 * right1 + left11 * right2 + left15 * right3

    var column1Row0 = left0 * right4 + left4 * right5 + left8 * right6 + left12 * right7
    var column1Row1 = left1 * right4 + left5 * right5 + left9 * right6 + left13 * right7
    var column1Row2 = left2 * right4 + left6 * right5 + left10 * right6 + left14 * right7
    var column1Row3 = left3 * right4 + left7 * right5 + left11 * right6 + left15 * right7

    var column2Row0 = left0 * right8 + left4 * right9 + left8 * right10 + left12 * right11
    var column2Row1 = left1 * right8 + left5 * right9 + left9 * right10 + left13 * right11
    var column2Row2 = left2 * right8 + left6 * right9 + left10 * right10 + left14 * right11
    var column2Row3 = left3 * right8 + left7 * right9 + left11 * right10 + left15 * right11

    var column3Row0 = left0 * right12 + left4 * right13 + left8 * right14 + left12 * right15
    var column3Row1 = left1 * right12 + left5 * right13 + left9 * right14 + left13 * right15
    var column3Row2 = left2 * right12 + left6 * right13 + left10 * right14 + left14 * right15
    var column3Row3 = left3 * right12 + left7 * right13 + left11 * right14 + left15 * right15

    result[0] = column0Row0
    result[1] = column0Row1
    result[2] = column0Row2
    result[3] = column0Row3
    result[4] = column1Row0
    result[5] = column1Row1
    result[6] = column1Row2
    result[7] = column1Row3
    result[8] = column2Row0
    result[9] = column2Row1
    result[10] = column2Row2
    result[11] = column2Row3
    result[12] = column3Row0
    result[13] = column3Row1
    result[14] = column3Row2
    result[15] = column3Row3
    return result
  }

  /**
   * Computes the sum of two matrices.
   *
   * @param {Matrix4} left The first matrix.
   * @param {Matrix4} right The second matrix.
   * @param {Matrix4} result The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter.
   */
  Matrix4.add = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result[0] = left[0] + right[0]
    result[1] = left[1] + right[1]
    result[2] = left[2] + right[2]
    result[3] = left[3] + right[3]
    result[4] = left[4] + right[4]
    result[5] = left[5] + right[5]
    result[6] = left[6] + right[6]
    result[7] = left[7] + right[7]
    result[8] = left[8] + right[8]
    result[9] = left[9] + right[9]
    result[10] = left[10] + right[10]
    result[11] = left[11] + right[11]
    result[12] = left[12] + right[12]
    result[13] = left[13] + right[13]
    result[14] = left[14] + right[14]
    result[15] = left[15] + right[15]
    return result
  }

  /**
   * Computes the difference of two matrices.
   *
   * @param {Matrix4} left The first matrix.
   * @param {Matrix4} right The second matrix.
   * @param {Matrix4} result The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter.
   */
  Matrix4.subtract = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result[0] = left[0] - right[0]
    result[1] = left[1] - right[1]
    result[2] = left[2] - right[2]
    result[3] = left[3] - right[3]
    result[4] = left[4] - right[4]
    result[5] = left[5] - right[5]
    result[6] = left[6] - right[6]
    result[7] = left[7] - right[7]
    result[8] = left[8] - right[8]
    result[9] = left[9] - right[9]
    result[10] = left[10] - right[10]
    result[11] = left[11] - right[11]
    result[12] = left[12] - right[12]
    result[13] = left[13] - right[13]
    result[14] = left[14] - right[14]
    result[15] = left[15] - right[15]
    return result
  }

  /**
   * Computes the product of two matrices assuming the matrices are affine transformation matrices,
   * where the upper left 3x3 elements are any matrix, and
   * the upper three elements in the fourth column are the translation.
   * The bottom row is assumed to be [0, 0, 0, 1].
   * The matrix is not verified to be in the proper form.
   * This method is faster than computing the product for general 4x4
   * matrices using {@link Matrix4.multiply}.
   *
   * @param {Matrix4} left The first matrix.
   * @param {Matrix4} right The second matrix.
   * @param {Matrix4} result The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter.
   *
   * @example
   * var m1 = new Cesium.Matrix4(1.0, 6.0, 7.0, 0.0, 2.0, 5.0, 8.0, 0.0, 3.0, 4.0, 9.0, 0.0, 0.0, 0.0, 0.0, 1.0);
   * var m2 = Cesium.Transforms.eastNorthUpToFixedFrame(new Cesium.Cartesian3(1.0, 1.0, 1.0));
   * var m3 = Cesium.Matrix4.multiplyTransformation(m1, m2, new Cesium.Matrix4());
   */
  Matrix4.multiplyTransformation = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var left0 = left[0]
    var left1 = left[1]
    var left2 = left[2]
    var left4 = left[4]
    var left5 = left[5]
    var left6 = left[6]
    var left8 = left[8]
    var left9 = left[9]
    var left10 = left[10]
    var left12 = left[12]
    var left13 = left[13]
    var left14 = left[14]

    var right0 = right[0]
    var right1 = right[1]
    var right2 = right[2]
    var right4 = right[4]
    var right5 = right[5]
    var right6 = right[6]
    var right8 = right[8]
    var right9 = right[9]
    var right10 = right[10]
    var right12 = right[12]
    var right13 = right[13]
    var right14 = right[14]

    var column0Row0 = left0 * right0 + left4 * right1 + left8 * right2
    var column0Row1 = left1 * right0 + left5 * right1 + left9 * right2
    var column0Row2 = left2 * right0 + left6 * right1 + left10 * right2

    var column1Row0 = left0 * right4 + left4 * right5 + left8 * right6
    var column1Row1 = left1 * right4 + left5 * right5 + left9 * right6
    var column1Row2 = left2 * right4 + left6 * right5 + left10 * right6

    var column2Row0 = left0 * right8 + left4 * right9 + left8 * right10
    var column2Row1 = left1 * right8 + left5 * right9 + left9 * right10
    var column2Row2 = left2 * right8 + left6 * right9 + left10 * right10

    var column3Row0 = left0 * right12 + left4 * right13 + left8 * right14 + left12
    var column3Row1 = left1 * right12 + left5 * right13 + left9 * right14 + left13
    var column3Row2 = left2 * right12 + left6 * right13 + left10 * right14 + left14

    result[0] = column0Row0
    result[1] = column0Row1
    result[2] = column0Row2
    result[3] = 0.0
    result[4] = column1Row0
    result[5] = column1Row1
    result[6] = column1Row2
    result[7] = 0.0
    result[8] = column2Row0
    result[9] = column2Row1
    result[10] = column2Row2
    result[11] = 0.0
    result[12] = column3Row0
    result[13] = column3Row1
    result[14] = column3Row2
    result[15] = 1.0
    return result
  }

  /**
   * Multiplies a transformation matrix (with a bottom row of <code>[0.0, 0.0, 0.0, 1.0]</code>)
   * by a 3x3 rotation matrix.  This is an optimization
   * for <code>Matrix4.multiply(m, Matrix4.fromRotationTranslation(rotation), m);</code> with less allocations and arithmetic operations.
   *
   * @param {Matrix4} matrix The matrix on the left-hand side.
   * @param {Matrix3} rotation The 3x3 rotation matrix on the right-hand side.
   * @param {Matrix4} result The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter.
   *
   * @example
   * // Instead of Cesium.Matrix4.multiply(m, Cesium.Matrix4.fromRotationTranslation(rotation), m);
   * Cesium.Matrix4.multiplyByMatrix3(m, rotation, m);
   */
  Matrix4.multiplyByMatrix3 = function (matrix, rotation, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('rotation', rotation)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var left0 = matrix[0]
    var left1 = matrix[1]
    var left2 = matrix[2]
    var left4 = matrix[4]
    var left5 = matrix[5]
    var left6 = matrix[6]
    var left8 = matrix[8]
    var left9 = matrix[9]
    var left10 = matrix[10]

    var right0 = rotation[0]
    var right1 = rotation[1]
    var right2 = rotation[2]
    var right4 = rotation[3]
    var right5 = rotation[4]
    var right6 = rotation[5]
    var right8 = rotation[6]
    var right9 = rotation[7]
    var right10 = rotation[8]

    var column0Row0 = left0 * right0 + left4 * right1 + left8 * right2
    var column0Row1 = left1 * right0 + left5 * right1 + left9 * right2
    var column0Row2 = left2 * right0 + left6 * right1 + left10 * right2

    var column1Row0 = left0 * right4 + left4 * right5 + left8 * right6
    var column1Row1 = left1 * right4 + left5 * right5 + left9 * right6
    var column1Row2 = left2 * right4 + left6 * right5 + left10 * right6

    var column2Row0 = left0 * right8 + left4 * right9 + left8 * right10
    var column2Row1 = left1 * right8 + left5 * right9 + left9 * right10
    var column2Row2 = left2 * right8 + left6 * right9 + left10 * right10

    result[0] = column0Row0
    result[1] = column0Row1
    result[2] = column0Row2
    result[3] = 0.0
    result[4] = column1Row0
    result[5] = column1Row1
    result[6] = column1Row2
    result[7] = 0.0
    result[8] = column2Row0
    result[9] = column2Row1
    result[10] = column2Row2
    result[11] = 0.0
    result[12] = matrix[12]
    result[13] = matrix[13]
    result[14] = matrix[14]
    result[15] = matrix[15]
    return result
  }

  /**
   * Multiplies a transformation matrix (with a bottom row of <code>[0.0, 0.0, 0.0, 1.0]</code>)
   * by an implicit translation matrix defined by a {@link Cartesian3}.  This is an optimization
   * for <code>Matrix4.multiply(m, Matrix4.fromTranslation(position), m);</code> with less allocations and arithmetic operations.
   *
   * @param {Matrix4} matrix The matrix on the left-hand side.
   * @param {Cartesian3} translation The translation on the right-hand side.
   * @param {Matrix4} result The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter.
   *
   * @example
   * // Instead of Cesium.Matrix4.multiply(m, Cesium.Matrix4.fromTranslation(position), m);
   * Cesium.Matrix4.multiplyByTranslation(m, position, m);
   */
  Matrix4.multiplyByTranslation = function (matrix, translation, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('translation', translation)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var x = translation.x
    var y = translation.y
    var z = translation.z

    var tx = x * matrix[0] + y * matrix[4] + z * matrix[8] + matrix[12]
    var ty = x * matrix[1] + y * matrix[5] + z * matrix[9] + matrix[13]
    var tz = x * matrix[2] + y * matrix[6] + z * matrix[10] + matrix[14]

    result[0] = matrix[0]
    result[1] = matrix[1]
    result[2] = matrix[2]
    result[3] = matrix[3]
    result[4] = matrix[4]
    result[5] = matrix[5]
    result[6] = matrix[6]
    result[7] = matrix[7]
    result[8] = matrix[8]
    result[9] = matrix[9]
    result[10] = matrix[10]
    result[11] = matrix[11]
    result[12] = tx
    result[13] = ty
    result[14] = tz
    result[15] = matrix[15]
    return result
  }

  var uniformScaleScratch = new Cartesian3()

  /**
   * Multiplies an affine transformation matrix (with a bottom row of <code>[0.0, 0.0, 0.0, 1.0]</code>)
   * by an implicit uniform scale matrix.  This is an optimization
   * for <code>Matrix4.multiply(m, Matrix4.fromUniformScale(scale), m);</code>, where
   * <code>m</code> must be an affine matrix.
   * This function performs fewer allocations and arithmetic operations.
   *
   * @param {Matrix4} matrix The affine matrix on the left-hand side.
   * @param {Number} scale The uniform scale on the right-hand side.
   * @param {Matrix4} result The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter.
   *
   *
   * @example
   * // Instead of Cesium.Matrix4.multiply(m, Cesium.Matrix4.fromUniformScale(scale), m);
   * Cesium.Matrix4.multiplyByUniformScale(m, scale, m);
   *
   * @see Matrix4.fromUniformScale
   * @see Matrix4.multiplyByScale
   */
  Matrix4.multiplyByUniformScale = function (matrix, scale, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.number('scale', scale)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    uniformScaleScratch.x = scale
    uniformScaleScratch.y = scale
    uniformScaleScratch.z = scale
    return Matrix4.multiplyByScale(matrix, uniformScaleScratch, result)
  }

  /**
   * Multiplies an affine transformation matrix (with a bottom row of <code>[0.0, 0.0, 0.0, 1.0]</code>)
   * by an implicit non-uniform scale matrix. This is an optimization
   * for <code>Matrix4.multiply(m, Matrix4.fromUniformScale(scale), m);</code>, where
   * <code>m</code> must be an affine matrix.
   * This function performs fewer allocations and arithmetic operations.
   *
   * @param {Matrix4} matrix The affine matrix on the left-hand side.
   * @param {Cartesian3} scale The non-uniform scale on the right-hand side.
   * @param {Matrix4} result The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter.
   *
   *
   * @example
   * // Instead of Cesium.Matrix4.multiply(m, Cesium.Matrix4.fromScale(scale), m);
   * Cesium.Matrix4.multiplyByScale(m, scale, m);
   *
   * @see Matrix4.fromScale
   * @see Matrix4.multiplyByUniformScale
   */
  Matrix4.multiplyByScale = function (matrix, scale, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('scale', scale)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var scaleX = scale.x
    var scaleY = scale.y
    var scaleZ = scale.z

    // Faster than Cartesian3.equals
    if (scaleX === 1.0 && scaleY === 1.0 && scaleZ === 1.0) {
      return Matrix4.clone(matrix, result)
    }

    result[0] = scaleX * matrix[0]
    result[1] = scaleX * matrix[1]
    result[2] = scaleX * matrix[2]
    result[3] = 0.0
    result[4] = scaleY * matrix[4]
    result[5] = scaleY * matrix[5]
    result[6] = scaleY * matrix[6]
    result[7] = 0.0
    result[8] = scaleZ * matrix[8]
    result[9] = scaleZ * matrix[9]
    result[10] = scaleZ * matrix[10]
    result[11] = 0.0
    result[12] = matrix[12]
    result[13] = matrix[13]
    result[14] = matrix[14]
    result[15] = 1.0
    return result
  }

  /**
   * Computes the product of a matrix and a column vector.
   *
   * @param {Matrix4} matrix The matrix.
   * @param {Cartesian4} cartesian The vector.
   * @param {Cartesian4} result The object onto which to store the result.
   * @returns {Cartesian4} The modified result parameter.
   */
  Matrix4.multiplyByVector = function (matrix, cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var vX = cartesian.x
    var vY = cartesian.y
    var vZ = cartesian.z
    var vW = cartesian.w

    var x = matrix[0] * vX + matrix[4] * vY + matrix[8] * vZ + matrix[12] * vW
    var y = matrix[1] * vX + matrix[5] * vY + matrix[9] * vZ + matrix[13] * vW
    var z = matrix[2] * vX + matrix[6] * vY + matrix[10] * vZ + matrix[14] * vW
    var w = matrix[3] * vX + matrix[7] * vY + matrix[11] * vZ + matrix[15] * vW

    result.x = x
    result.y = y
    result.z = z
    result.w = w
    return result
  }

  /**
   * Computes the product of a matrix and a {@link Cartesian3}.  This is equivalent to calling {@link Matrix4.multiplyByVector}
   * with a {@link Cartesian4} with a <code>w</code> component of zero.
   *
   * @param {Matrix4} matrix The matrix.
   * @param {Cartesian3} cartesian The point.
   * @param {Cartesian3} result The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter.
   *
   * @example
   * var p = new Cesium.Cartesian3(1.0, 2.0, 3.0);
   * var result = Cesium.Matrix4.multiplyByPointAsVector(matrix, p, new Cesium.Cartesian3());
   * // A shortcut for
   * //   Cartesian3 p = ...
   * //   Cesium.Matrix4.multiplyByVector(matrix, new Cesium.Cartesian4(p.x, p.y, p.z, 0.0), result);
   */
  Matrix4.multiplyByPointAsVector = function (matrix, cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var vX = cartesian.x
    var vY = cartesian.y
    var vZ = cartesian.z

    var x = matrix[0] * vX + matrix[4] * vY + matrix[8] * vZ
    var y = matrix[1] * vX + matrix[5] * vY + matrix[9] * vZ
    var z = matrix[2] * vX + matrix[6] * vY + matrix[10] * vZ

    result.x = x
    result.y = y
    result.z = z
    return result
  }

  /**
   * Computes the product of a matrix and a {@link Cartesian3}. This is equivalent to calling {@link Matrix4.multiplyByVector}
   * with a {@link Cartesian4} with a <code>w</code> component of 1, but returns a {@link Cartesian3} instead of a {@link Cartesian4}.
   *
   * @param {Matrix4} matrix The matrix.
   * @param {Cartesian3} cartesian The point.
   * @param {Cartesian3} result The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter.
   *
   * @example
   * var p = new Cesium.Cartesian3(1.0, 2.0, 3.0);
   * var result = Cesium.Matrix4.multiplyByPoint(matrix, p, new Cesium.Cartesian3());
   */
  Matrix4.multiplyByPoint = function (matrix, cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var vX = cartesian.x
    var vY = cartesian.y
    var vZ = cartesian.z

    var x = matrix[0] * vX + matrix[4] * vY + matrix[8] * vZ + matrix[12]
    var y = matrix[1] * vX + matrix[5] * vY + matrix[9] * vZ + matrix[13]
    var z = matrix[2] * vX + matrix[6] * vY + matrix[10] * vZ + matrix[14]

    result.x = x
    result.y = y
    result.z = z
    return result
  }

  /**
   * Computes the product of a matrix and a scalar.
   *
   * @param {Matrix4} matrix The matrix.
   * @param {Number} scalar The number to multiply by.
   * @param {Matrix4} result The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter.
   *
   * @example
   * //create a Matrix4 instance which is a scaled version of the supplied Matrix4
   * // m = [10.0, 11.0, 12.0, 13.0]
   * //     [14.0, 15.0, 16.0, 17.0]
   * //     [18.0, 19.0, 20.0, 21.0]
   * //     [22.0, 23.0, 24.0, 25.0]
   *
   * var a = Cesium.Matrix4.multiplyByScalar(m, -2, new Cesium.Matrix4());
   *
   * // m remains the same
   * // a = [-20.0, -22.0, -24.0, -26.0]
   * //     [-28.0, -30.0, -32.0, -34.0]
   * //     [-36.0, -38.0, -40.0, -42.0]
   * //     [-44.0, -46.0, -48.0, -50.0]
   */
  Matrix4.multiplyByScalar = function (matrix, scalar, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.number('scalar', scalar)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result[0] = matrix[0] * scalar
    result[1] = matrix[1] * scalar
    result[2] = matrix[2] * scalar
    result[3] = matrix[3] * scalar
    result[4] = matrix[4] * scalar
    result[5] = matrix[5] * scalar
    result[6] = matrix[6] * scalar
    result[7] = matrix[7] * scalar
    result[8] = matrix[8] * scalar
    result[9] = matrix[9] * scalar
    result[10] = matrix[10] * scalar
    result[11] = matrix[11] * scalar
    result[12] = matrix[12] * scalar
    result[13] = matrix[13] * scalar
    result[14] = matrix[14] * scalar
    result[15] = matrix[15] * scalar
    return result
  }

  /**
   * Computes a negated copy of the provided matrix.
   *
   * @param {Matrix4} matrix The matrix to negate.
   * @param {Matrix4} result The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter.
   *
   * @example
   * //create a new Matrix4 instance which is a negation of a Matrix4
   * // m = [10.0, 11.0, 12.0, 13.0]
   * //     [14.0, 15.0, 16.0, 17.0]
   * //     [18.0, 19.0, 20.0, 21.0]
   * //     [22.0, 23.0, 24.0, 25.0]
   *
   * var a = Cesium.Matrix4.negate(m, new Cesium.Matrix4());
   *
   * // m remains the same
   * // a = [-10.0, -11.0, -12.0, -13.0]
   * //     [-14.0, -15.0, -16.0, -17.0]
   * //     [-18.0, -19.0, -20.0, -21.0]
   * //     [-22.0, -23.0, -24.0, -25.0]
   */
  Matrix4.negate = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result[0] = -matrix[0]
    result[1] = -matrix[1]
    result[2] = -matrix[2]
    result[3] = -matrix[3]
    result[4] = -matrix[4]
    result[5] = -matrix[5]
    result[6] = -matrix[6]
    result[7] = -matrix[7]
    result[8] = -matrix[8]
    result[9] = -matrix[9]
    result[10] = -matrix[10]
    result[11] = -matrix[11]
    result[12] = -matrix[12]
    result[13] = -matrix[13]
    result[14] = -matrix[14]
    result[15] = -matrix[15]
    return result
  }

  /**
   * Computes the transpose of the provided matrix.
   *
   * @param {Matrix4} matrix The matrix to transpose.
   * @param {Matrix4} result The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter.
   *
   * @example
   * //returns transpose of a Matrix4
   * // m = [10.0, 11.0, 12.0, 13.0]
   * //     [14.0, 15.0, 16.0, 17.0]
   * //     [18.0, 19.0, 20.0, 21.0]
   * //     [22.0, 23.0, 24.0, 25.0]
   *
   * var a = Cesium.Matrix4.transpose(m, new Cesium.Matrix4());
   *
   * // m remains the same
   * // a = [10.0, 14.0, 18.0, 22.0]
   * //     [11.0, 15.0, 19.0, 23.0]
   * //     [12.0, 16.0, 20.0, 24.0]
   * //     [13.0, 17.0, 21.0, 25.0]
   */
  Matrix4.transpose = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var matrix1 = matrix[1]
    var matrix2 = matrix[2]
    var matrix3 = matrix[3]
    var matrix6 = matrix[6]
    var matrix7 = matrix[7]
    var matrix11 = matrix[11]

    result[0] = matrix[0]
    result[1] = matrix[4]
    result[2] = matrix[8]
    result[3] = matrix[12]
    result[4] = matrix1
    result[5] = matrix[5]
    result[6] = matrix[9]
    result[7] = matrix[13]
    result[8] = matrix2
    result[9] = matrix6
    result[10] = matrix[10]
    result[11] = matrix[14]
    result[12] = matrix3
    result[13] = matrix7
    result[14] = matrix11
    result[15] = matrix[15]
    return result
  }

  /**
   * Computes a matrix, which contains the absolute (unsigned) values of the provided matrix's elements.
   *
   * @param {Matrix4} matrix The matrix with signed elements.
   * @param {Matrix4} result The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter.
   */
  Matrix4.abs = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result[0] = Math.abs(matrix[0])
    result[1] = Math.abs(matrix[1])
    result[2] = Math.abs(matrix[2])
    result[3] = Math.abs(matrix[3])
    result[4] = Math.abs(matrix[4])
    result[5] = Math.abs(matrix[5])
    result[6] = Math.abs(matrix[6])
    result[7] = Math.abs(matrix[7])
    result[8] = Math.abs(matrix[8])
    result[9] = Math.abs(matrix[9])
    result[10] = Math.abs(matrix[10])
    result[11] = Math.abs(matrix[11])
    result[12] = Math.abs(matrix[12])
    result[13] = Math.abs(matrix[13])
    result[14] = Math.abs(matrix[14])
    result[15] = Math.abs(matrix[15])

    return result
  }

  /**
   * Compares the provided matrices componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Matrix4} [left] The first matrix.
   * @param {Matrix4} [right] The second matrix.
   * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
   *
   * @example
   * //compares two Matrix4 instances
   *
   * // a = [10.0, 14.0, 18.0, 22.0]
   * //     [11.0, 15.0, 19.0, 23.0]
   * //     [12.0, 16.0, 20.0, 24.0]
   * //     [13.0, 17.0, 21.0, 25.0]
   *
   * // b = [10.0, 14.0, 18.0, 22.0]
   * //     [11.0, 15.0, 19.0, 23.0]
   * //     [12.0, 16.0, 20.0, 24.0]
   * //     [13.0, 17.0, 21.0, 25.0]
   *
   * if(Cesium.Matrix4.equals(a,b)) {
   *      console.log("Both matrices are equal");
   * } else {
   *      console.log("They are not equal");
   * }
   *
   * //Prints "Both matrices are equal" on the console
   */
  Matrix4.equals = function (left, right) {
    // Given that most matrices will be transformation matrices, the elements
    // are tested in order such that the test is likely to fail as early
    // as possible.  I _think_ this is just as friendly to the L1 cache
    // as testing in index order.  It is certainty faster in practice.
    return (
      left === right ||
      (when.defined(left) &&
        when.defined(right) &&
        // Translation
        left[12] === right[12] &&
        left[13] === right[13] &&
        left[14] === right[14] &&
        // Rotation/scale
        left[0] === right[0] &&
        left[1] === right[1] &&
        left[2] === right[2] &&
        left[4] === right[4] &&
        left[5] === right[5] &&
        left[6] === right[6] &&
        left[8] === right[8] &&
        left[9] === right[9] &&
        left[10] === right[10] &&
        // Bottom row
        left[3] === right[3] &&
        left[7] === right[7] &&
        left[11] === right[11] &&
        left[15] === right[15])
    )
  }

  /**
   * Compares the provided matrices componentwise and returns
   * <code>true</code> if they are within the provided epsilon,
   * <code>false</code> otherwise.
   *
   * @param {Matrix4} [left] The first matrix.
   * @param {Matrix4} [right] The second matrix.
   * @param {Number} [epsilon=0] The epsilon to use for equality testing.
   * @returns {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
   *
   * @example
   * //compares two Matrix4 instances
   *
   * // a = [10.5, 14.5, 18.5, 22.5]
   * //     [11.5, 15.5, 19.5, 23.5]
   * //     [12.5, 16.5, 20.5, 24.5]
   * //     [13.5, 17.5, 21.5, 25.5]
   *
   * // b = [10.0, 14.0, 18.0, 22.0]
   * //     [11.0, 15.0, 19.0, 23.0]
   * //     [12.0, 16.0, 20.0, 24.0]
   * //     [13.0, 17.0, 21.0, 25.0]
   *
   * if(Cesium.Matrix4.equalsEpsilon(a,b,0.1)){
   *      console.log("Difference between both the matrices is less than 0.1");
   * } else {
   *      console.log("Difference between both the matrices is not less than 0.1");
   * }
   *
   * //Prints "Difference between both the matrices is not less than 0.1" on the console
   */
  Matrix4.equalsEpsilon = function (left, right, epsilon) {
    epsilon = when.defaultValue(epsilon, 0)

    return (
      left === right ||
      (when.defined(left) &&
        when.defined(right) &&
        Math.abs(left[0] - right[0]) <= epsilon &&
        Math.abs(left[1] - right[1]) <= epsilon &&
        Math.abs(left[2] - right[2]) <= epsilon &&
        Math.abs(left[3] - right[3]) <= epsilon &&
        Math.abs(left[4] - right[4]) <= epsilon &&
        Math.abs(left[5] - right[5]) <= epsilon &&
        Math.abs(left[6] - right[6]) <= epsilon &&
        Math.abs(left[7] - right[7]) <= epsilon &&
        Math.abs(left[8] - right[8]) <= epsilon &&
        Math.abs(left[9] - right[9]) <= epsilon &&
        Math.abs(left[10] - right[10]) <= epsilon &&
        Math.abs(left[11] - right[11]) <= epsilon &&
        Math.abs(left[12] - right[12]) <= epsilon &&
        Math.abs(left[13] - right[13]) <= epsilon &&
        Math.abs(left[14] - right[14]) <= epsilon &&
        Math.abs(left[15] - right[15]) <= epsilon)
    )
  }

  /**
   * Gets the translation portion of the provided matrix, assuming the matrix is an affine transformation matrix.
   *
   * @param {Matrix4} matrix The matrix to use.
   * @param {Cartesian3} result The object onto which to store the result.
   * @returns {Cartesian3} The modified result parameter.
   */
  Matrix4.getTranslation = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = matrix[12]
    result.y = matrix[13]
    result.z = matrix[14]
    return result
  }

  /**
   * Gets the upper left 3x3 matrix of the provided matrix.
   *
   * @param {Matrix4} matrix The matrix to use.
   * @param {Matrix3} result The object onto which to store the result.
   * @returns {Matrix3} The modified result parameter.
   *
   * @example
   * // returns a Matrix3 instance from a Matrix4 instance
   *
   * // m = [10.0, 14.0, 18.0, 22.0]
   * //     [11.0, 15.0, 19.0, 23.0]
   * //     [12.0, 16.0, 20.0, 24.0]
   * //     [13.0, 17.0, 21.0, 25.0]
   *
   * var b = new Cesium.Matrix3();
   * Cesium.Matrix4.getMatrix3(m,b);
   *
   * // b = [10.0, 14.0, 18.0]
   * //     [11.0, 15.0, 19.0]
   * //     [12.0, 16.0, 20.0]
   */
  Matrix4.getMatrix3 = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result[0] = matrix[0]
    result[1] = matrix[1]
    result[2] = matrix[2]
    result[3] = matrix[4]
    result[4] = matrix[5]
    result[5] = matrix[6]
    result[6] = matrix[8]
    result[7] = matrix[9]
    result[8] = matrix[10]
    return result
  }

  var scratchInverseRotation = new Matrix3()
  var scratchMatrix3Zero = new Matrix3()
  var scratchBottomRow = new Cartesian4()
  var scratchExpectedBottomRow = new Cartesian4(0.0, 0.0, 0.0, 1.0)

  /**
   * Computes the inverse of the provided matrix using Cramers Rule.
   * If the determinant is zero, the matrix can not be inverted, and an exception is thrown.
   * If the matrix is a proper rigid transformation, it is more efficient
   * to invert it with {@link Matrix4.inverseTransformation}.
   *
   * @param {Matrix4} matrix The matrix to invert.
   * @param {Matrix4} result The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter.
   *
   * @exception {RuntimeError} matrix is not invertible because its determinate is zero.
   */
  Matrix4.inverse = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');
    //
    // Ported from:
    //   ftp://download.intel.com/design/PentiumIII/sml/24504301.pdf
    //
    var src0 = matrix[0]
    var src1 = matrix[4]
    var src2 = matrix[8]
    var src3 = matrix[12]
    var src4 = matrix[1]
    var src5 = matrix[5]
    var src6 = matrix[9]
    var src7 = matrix[13]
    var src8 = matrix[2]
    var src9 = matrix[6]
    var src10 = matrix[10]
    var src11 = matrix[14]
    var src12 = matrix[3]
    var src13 = matrix[7]
    var src14 = matrix[11]
    var src15 = matrix[15]

    // calculate pairs for first 8 elements (cofactors)
    var tmp0 = src10 * src15
    var tmp1 = src11 * src14
    var tmp2 = src9 * src15
    var tmp3 = src11 * src13
    var tmp4 = src9 * src14
    var tmp5 = src10 * src13
    var tmp6 = src8 * src15
    var tmp7 = src11 * src12
    var tmp8 = src8 * src14
    var tmp9 = src10 * src12
    var tmp10 = src8 * src13
    var tmp11 = src9 * src12

    // calculate first 8 elements (cofactors)
    var dst0 = tmp0 * src5 + tmp3 * src6 + tmp4 * src7 - (tmp1 * src5 + tmp2 * src6 + tmp5 * src7)
    var dst1 = tmp1 * src4 + tmp6 * src6 + tmp9 * src7 - (tmp0 * src4 + tmp7 * src6 + tmp8 * src7)
    var dst2 = tmp2 * src4 + tmp7 * src5 + tmp10 * src7 - (tmp3 * src4 + tmp6 * src5 + tmp11 * src7)
    var dst3 = tmp5 * src4 + tmp8 * src5 + tmp11 * src6 - (tmp4 * src4 + tmp9 * src5 + tmp10 * src6)
    var dst4 = tmp1 * src1 + tmp2 * src2 + tmp5 * src3 - (tmp0 * src1 + tmp3 * src2 + tmp4 * src3)
    var dst5 = tmp0 * src0 + tmp7 * src2 + tmp8 * src3 - (tmp1 * src0 + tmp6 * src2 + tmp9 * src3)
    var dst6 = tmp3 * src0 + tmp6 * src1 + tmp11 * src3 - (tmp2 * src0 + tmp7 * src1 + tmp10 * src3)
    var dst7 = tmp4 * src0 + tmp9 * src1 + tmp10 * src2 - (tmp5 * src0 + tmp8 * src1 + tmp11 * src2)

    // calculate pairs for second 8 elements (cofactors)
    tmp0 = src2 * src7
    tmp1 = src3 * src6
    tmp2 = src1 * src7
    tmp3 = src3 * src5
    tmp4 = src1 * src6
    tmp5 = src2 * src5
    tmp6 = src0 * src7
    tmp7 = src3 * src4
    tmp8 = src0 * src6
    tmp9 = src2 * src4
    tmp10 = src0 * src5
    tmp11 = src1 * src4

    // calculate second 8 elements (cofactors)
    var dst8 = tmp0 * src13 + tmp3 * src14 + tmp4 * src15 - (tmp1 * src13 + tmp2 * src14 + tmp5 * src15)
    var dst9 = tmp1 * src12 + tmp6 * src14 + tmp9 * src15 - (tmp0 * src12 + tmp7 * src14 + tmp8 * src15)
    var dst10 = tmp2 * src12 + tmp7 * src13 + tmp10 * src15 - (tmp3 * src12 + tmp6 * src13 + tmp11 * src15)
    var dst11 = tmp5 * src12 + tmp8 * src13 + tmp11 * src14 - (tmp4 * src12 + tmp9 * src13 + tmp10 * src14)
    var dst12 = tmp2 * src10 + tmp5 * src11 + tmp1 * src9 - (tmp4 * src11 + tmp0 * src9 + tmp3 * src10)
    var dst13 = tmp8 * src11 + tmp0 * src8 + tmp7 * src10 - (tmp6 * src10 + tmp9 * src11 + tmp1 * src8)
    var dst14 = tmp6 * src9 + tmp11 * src11 + tmp3 * src8 - (tmp10 * src11 + tmp2 * src8 + tmp7 * src9)
    var dst15 = tmp10 * src10 + tmp4 * src8 + tmp9 * src9 - (tmp8 * src9 + tmp11 * src10 + tmp5 * src8)

    // calculate determinant
    var det = src0 * dst0 + src1 * dst1 + src2 * dst2 + src3 * dst3

    if (Math.abs(det) < ComponentDatatype.CesiumMath.EPSILON21) {
      // Special case for a zero scale matrix that can occur, for example,
      // when a model's node has a [0, 0, 0] scale.
      if (
        Matrix3.equalsEpsilon(Matrix4.getMatrix3(matrix, scratchInverseRotation), scratchMatrix3Zero, ComponentDatatype.CesiumMath.EPSILON7) &&
        Cartesian4.equals(Matrix4.getRow(matrix, 3, scratchBottomRow), scratchExpectedBottomRow)
      ) {
        result[0] = 0.0
        result[1] = 0.0
        result[2] = 0.0
        result[3] = 0.0
        result[4] = 0.0
        result[5] = 0.0
        result[6] = 0.0
        result[7] = 0.0
        result[8] = 0.0
        result[9] = 0.0
        result[10] = 0.0
        result[11] = 0.0
        result[12] = -matrix[12]
        result[13] = -matrix[13]
        result[14] = -matrix[14]
        result[15] = 1.0
        return result
      }

      throw new RuntimeError.RuntimeError('matrix is not invertible because its determinate is zero.')
    }

    // calculate matrix inverse
    det = 1.0 / det

    result[0] = dst0 * det
    result[1] = dst1 * det
    result[2] = dst2 * det
    result[3] = dst3 * det
    result[4] = dst4 * det
    result[5] = dst5 * det
    result[6] = dst6 * det
    result[7] = dst7 * det
    result[8] = dst8 * det
    result[9] = dst9 * det
    result[10] = dst10 * det
    result[11] = dst11 * det
    result[12] = dst12 * det
    result[13] = dst13 * det
    result[14] = dst14 * det
    result[15] = dst15 * det
    return result
  }

  /**
   * Computes the inverse of the provided matrix assuming it is a proper rigid matrix,
   * where the upper left 3x3 elements are a rotation matrix,
   * and the upper three elements in the fourth column are the translation.
   * The bottom row is assumed to be [0, 0, 0, 1].
   * The matrix is not verified to be in the proper form.
   * This method is faster than computing the inverse for a general 4x4
   * matrix using {@link Matrix4.inverse}.
   *
   * @param {Matrix4} matrix The matrix to invert.
   * @param {Matrix4} result The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter.
   */
  Matrix4.inverseTransformation = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    //This function is an optimized version of the below 4 lines.
    //var rT = Matrix3.transpose(Matrix4.getMatrix3(matrix));
    //var rTN = Matrix3.negate(rT);
    //var rTT = Matrix3.multiplyByVector(rTN, Matrix4.getTranslation(matrix));
    //return Matrix4.fromRotationTranslation(rT, rTT, result);

    var matrix0 = matrix[0]
    var matrix1 = matrix[1]
    var matrix2 = matrix[2]
    var matrix4 = matrix[4]
    var matrix5 = matrix[5]
    var matrix6 = matrix[6]
    var matrix8 = matrix[8]
    var matrix9 = matrix[9]
    var matrix10 = matrix[10]

    var vX = matrix[12]
    var vY = matrix[13]
    var vZ = matrix[14]

    var x = -matrix0 * vX - matrix1 * vY - matrix2 * vZ
    var y = -matrix4 * vX - matrix5 * vY - matrix6 * vZ
    var z = -matrix8 * vX - matrix9 * vY - matrix10 * vZ

    result[0] = matrix0
    result[1] = matrix4
    result[2] = matrix8
    result[3] = 0.0
    result[4] = matrix1
    result[5] = matrix5
    result[6] = matrix9
    result[7] = 0.0
    result[8] = matrix2
    result[9] = matrix6
    result[10] = matrix10
    result[11] = 0.0
    result[12] = x
    result[13] = y
    result[14] = z
    result[15] = 1.0
    return result
  }

  var scratchTransposeMatrix = new Matrix4()

  /**
   * Computes the inverse transpose of a matrix.
   *
   * @param {Matrix4} matrix The matrix to transpose and invert.
   * @param {Matrix4} result The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter.
   */
  Matrix4.inverseTranspose = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    return Matrix4.inverse(Matrix4.transpose(matrix, scratchTransposeMatrix), result)
  }

  /**
   * An immutable Matrix4 instance initialized to the identity matrix.
   *
   * @type {Matrix4}
   * @constant
   */
  Matrix4.IDENTITY = Object.freeze(new Matrix4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0))

  /**
   * An immutable Matrix4 instance initialized to the zero matrix.
   *
   * @type {Matrix4}
   * @constant
   */
  Matrix4.ZERO = Object.freeze(new Matrix4(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0))

  /**
   * The index into Matrix4 for column 0, row 0.
   *
   * @type {Number}
   * @constant
   */
  Matrix4.COLUMN0ROW0 = 0

  /**
   * The index into Matrix4 for column 0, row 1.
   *
   * @type {Number}
   * @constant
   */
  Matrix4.COLUMN0ROW1 = 1

  /**
   * The index into Matrix4 for column 0, row 2.
   *
   * @type {Number}
   * @constant
   */
  Matrix4.COLUMN0ROW2 = 2

  /**
   * The index into Matrix4 for column 0, row 3.
   *
   * @type {Number}
   * @constant
   */
  Matrix4.COLUMN0ROW3 = 3

  /**
   * The index into Matrix4 for column 1, row 0.
   *
   * @type {Number}
   * @constant
   */
  Matrix4.COLUMN1ROW0 = 4

  /**
   * The index into Matrix4 for column 1, row 1.
   *
   * @type {Number}
   * @constant
   */
  Matrix4.COLUMN1ROW1 = 5

  /**
   * The index into Matrix4 for column 1, row 2.
   *
   * @type {Number}
   * @constant
   */
  Matrix4.COLUMN1ROW2 = 6

  /**
   * The index into Matrix4 for column 1, row 3.
   *
   * @type {Number}
   * @constant
   */
  Matrix4.COLUMN1ROW3 = 7

  /**
   * The index into Matrix4 for column 2, row 0.
   *
   * @type {Number}
   * @constant
   */
  Matrix4.COLUMN2ROW0 = 8

  /**
   * The index into Matrix4 for column 2, row 1.
   *
   * @type {Number}
   * @constant
   */
  Matrix4.COLUMN2ROW1 = 9

  /**
   * The index into Matrix4 for column 2, row 2.
   *
   * @type {Number}
   * @constant
   */
  Matrix4.COLUMN2ROW2 = 10

  /**
   * The index into Matrix4 for column 2, row 3.
   *
   * @type {Number}
   * @constant
   */
  Matrix4.COLUMN2ROW3 = 11

  /**
   * The index into Matrix4 for column 3, row 0.
   *
   * @type {Number}
   * @constant
   */
  Matrix4.COLUMN3ROW0 = 12

  /**
   * The index into Matrix4 for column 3, row 1.
   *
   * @type {Number}
   * @constant
   */
  Matrix4.COLUMN3ROW1 = 13

  /**
   * The index into Matrix4 for column 3, row 2.
   *
   * @type {Number}
   * @constant
   */
  Matrix4.COLUMN3ROW2 = 14

  /**
   * The index into Matrix4 for column 3, row 3.
   *
   * @type {Number}
   * @constant
   */
  Matrix4.COLUMN3ROW3 = 15

  Object.defineProperties(Matrix4.prototype, {
    /**
     * Gets the number of items in the collection.
     * @memberof Matrix4.prototype
     *
     * @type {Number}
     */
    length: {
      get: function () {
        return Matrix4.packedLength
      }
    }
  })

  /**
   * Duplicates the provided Matrix4 instance.
   *
   * @param {Matrix4} [result] The object onto which to store the result.
   * @returns {Matrix4} The modified result parameter or a new Matrix4 instance if one was not provided.
   */
  Matrix4.prototype.clone = function (result) {
    return Matrix4.clone(this, result)
  }

  /**
   * Compares this matrix to the provided matrix componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Matrix4} [right] The right hand side matrix.
   * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
   */
  Matrix4.prototype.equals = function (right) {
    return Matrix4.equals(this, right)
  }

  /**
   * @private
   */
  Matrix4.equalsArray = function (matrix, array, offset) {
    return (
      matrix[0] === array[offset] &&
      matrix[1] === array[offset + 1] &&
      matrix[2] === array[offset + 2] &&
      matrix[3] === array[offset + 3] &&
      matrix[4] === array[offset + 4] &&
      matrix[5] === array[offset + 5] &&
      matrix[6] === array[offset + 6] &&
      matrix[7] === array[offset + 7] &&
      matrix[8] === array[offset + 8] &&
      matrix[9] === array[offset + 9] &&
      matrix[10] === array[offset + 10] &&
      matrix[11] === array[offset + 11] &&
      matrix[12] === array[offset + 12] &&
      matrix[13] === array[offset + 13] &&
      matrix[14] === array[offset + 14] &&
      matrix[15] === array[offset + 15]
    )
  }

  /**
   * Compares this matrix to the provided matrix componentwise and returns
   * <code>true</code> if they are within the provided epsilon,
   * <code>false</code> otherwise.
   *
   * @param {Matrix4} [right] The right hand side matrix.
   * @param {Number} [epsilon=0] The epsilon to use for equality testing.
   * @returns {Boolean} <code>true</code> if they are within the provided epsilon, <code>false</code> otherwise.
   */
  Matrix4.prototype.equalsEpsilon = function (right, epsilon) {
    return Matrix4.equalsEpsilon(this, right, epsilon)
  }

  /**
   * Computes a string representing this Matrix with each row being
   * on a separate line and in the format '(column0, column1, column2, column3)'.
   *
   * @returns {String} A string representing the provided Matrix with each row being on a separate line and in the format '(column0, column1, column2, column3)'.
   */
  Matrix4.prototype.toString = function () {
    return (
      '(' +
      this[0] +
      ', ' +
      this[4] +
      ', ' +
      this[8] +
      ', ' +
      this[12] +
      ')\n' +
      '(' +
      this[1] +
      ', ' +
      this[5] +
      ', ' +
      this[9] +
      ', ' +
      this[13] +
      ')\n' +
      '(' +
      this[2] +
      ', ' +
      this[6] +
      ', ' +
      this[10] +
      ', ' +
      this[14] +
      ')\n' +
      '(' +
      this[3] +
      ', ' +
      this[7] +
      ', ' +
      this[11] +
      ', ' +
      this[15] +
      ')'
    )
  }

  /**
   * A two dimensional region specified as longitude and latitude coordinates.
   *
   * @alias Rectangle
   * @constructor
   *
   * @param {Number} [west=0.0] The westernmost longitude, in radians, in the range [-Pi, Pi].
   * @param {Number} [south=0.0] The southernmost latitude, in radians, in the range [-Pi/2, Pi/2].
   * @param {Number} [east=0.0] The easternmost longitude, in radians, in the range [-Pi, Pi].
   * @param {Number} [north=0.0] The northernmost latitude, in radians, in the range [-Pi/2, Pi/2].
   *
   * @see Packable
   */
  function Rectangle(west, south, east, north) {
    /**
     * The westernmost longitude in radians in the range [-Pi, Pi].
     *
     * @type {Number}
     * @default 0.0
     */
    this.west = when.defaultValue(west, 0.0)

    /**
     * The southernmost latitude in radians in the range [-Pi/2, Pi/2].
     *
     * @type {Number}
     * @default 0.0
     */
    this.south = when.defaultValue(south, 0.0)

    /**
     * The easternmost longitude in radians in the range [-Pi, Pi].
     *
     * @type {Number}
     * @default 0.0
     */
    this.east = when.defaultValue(east, 0.0)

    /**
     * The northernmost latitude in radians in the range [-Pi/2, Pi/2].
     *
     * @type {Number}
     * @default 0.0
     */
    this.north = when.defaultValue(north, 0.0)
  }

  Object.defineProperties(Rectangle.prototype, {
    /**
     * Gets the width of the rectangle in radians.
     * @memberof Rectangle.prototype
     * @type {Number}
     * @readonly
     */
    width: {
      get: function () {
        return Rectangle.computeWidth(this)
      }
    },

    /**
     * Gets the height of the rectangle in radians.
     * @memberof Rectangle.prototype
     * @type {Number}
     * @readonly
     */
    height: {
      get: function () {
        return Rectangle.computeHeight(this)
      }
    }
  })

  /**
   * The number of elements used to pack the object into an array.
   * @type {Number}
   */
  Rectangle.packedLength = 4

  /**
   * Stores the provided instance into the provided array.
   *
   * @param {Rectangle} value The value to pack.
   * @param {Number[]} array The array to pack into.
   * @param {Number} [startingIndex=0] The index into the array at which to start packing the elements.
   *
   * @returns {Number[]} The array that was packed into
   */
  Rectangle.pack = function (value, array, startingIndex) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('value', value)
    RuntimeError.Check.defined('array', array)
    //>>includeEnd('debug');

    startingIndex = when.defaultValue(startingIndex, 0)

    array[startingIndex++] = value.west
    array[startingIndex++] = value.south
    array[startingIndex++] = value.east
    array[startingIndex] = value.north

    return array
  }

  /**
   * Retrieves an instance from a packed array.
   *
   * @param {Number[]} array The packed array.
   * @param {Number} [startingIndex=0] The starting index of the element to be unpacked.
   * @param {Rectangle} [result] The object into which to store the result.
   * @returns {Rectangle} The modified result parameter or a new Rectangle instance if one was not provided.
   */
  Rectangle.unpack = function (array, startingIndex, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('array', array)
    //>>includeEnd('debug');

    startingIndex = when.defaultValue(startingIndex, 0)

    if (!when.defined(result)) {
      result = new Rectangle()
    }

    result.west = array[startingIndex++]
    result.south = array[startingIndex++]
    result.east = array[startingIndex++]
    result.north = array[startingIndex]
    return result
  }

  /**
   * Computes the width of a rectangle in radians.
   * @param {Rectangle} rectangle The rectangle to compute the width of.
   * @returns {Number} The width.
   */
  Rectangle.computeWidth = function (rectangle) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('rectangle', rectangle)
    //>>includeEnd('debug');
    var east = rectangle.east
    var west = rectangle.west
    if (east < west) {
      east += ComponentDatatype.CesiumMath.TWO_PI
    }
    return east - west
  }

  /**
   * Computes the height of a rectangle in radians.
   * @param {Rectangle} rectangle The rectangle to compute the height of.
   * @returns {Number} The height.
   */
  Rectangle.computeHeight = function (rectangle) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('rectangle', rectangle)
    //>>includeEnd('debug');
    return rectangle.north - rectangle.south
  }

  /**
   * Creates a rectangle given the boundary longitude and latitude in degrees.
   *
   * @param {Number} [west=0.0] The westernmost longitude in degrees in the range [-180.0, 180.0].
   * @param {Number} [south=0.0] The southernmost latitude in degrees in the range [-90.0, 90.0].
   * @param {Number} [east=0.0] The easternmost longitude in degrees in the range [-180.0, 180.0].
   * @param {Number} [north=0.0] The northernmost latitude in degrees in the range [-90.0, 90.0].
   * @param {Rectangle} [result] The object onto which to store the result, or undefined if a new instance should be created.
   * @returns {Rectangle} The modified result parameter or a new Rectangle instance if none was provided.
   *
   * @example
   * var rectangle = Cesium.Rectangle.fromDegrees(0.0, 20.0, 10.0, 30.0);
   */
  Rectangle.fromDegrees = function (west, south, east, north, result) {
    west = ComponentDatatype.CesiumMath.toRadians(when.defaultValue(west, 0.0))
    south = ComponentDatatype.CesiumMath.toRadians(when.defaultValue(south, 0.0))
    east = ComponentDatatype.CesiumMath.toRadians(when.defaultValue(east, 0.0))
    north = ComponentDatatype.CesiumMath.toRadians(when.defaultValue(north, 0.0))

    if (!when.defined(result)) {
      return new Rectangle(west, south, east, north)
    }

    result.west = west
    result.south = south
    result.east = east
    result.north = north

    return result
  }

  /**
   * Creates a rectangle given the boundary longitude and latitude in radians.
   *
   * @param {Number} [west=0.0] The westernmost longitude in radians in the range [-Math.PI, Math.PI].
   * @param {Number} [south=0.0] The southernmost latitude in radians in the range [-Math.PI/2, Math.PI/2].
   * @param {Number} [east=0.0] The easternmost longitude in radians in the range [-Math.PI, Math.PI].
   * @param {Number} [north=0.0] The northernmost latitude in radians in the range [-Math.PI/2, Math.PI/2].
   * @param {Rectangle} [result] The object onto which to store the result, or undefined if a new instance should be created.
   * @returns {Rectangle} The modified result parameter or a new Rectangle instance if none was provided.
   *
   * @example
   * var rectangle = Cesium.Rectangle.fromRadians(0.0, Math.PI/4, Math.PI/8, 3*Math.PI/4);
   */
  Rectangle.fromRadians = function (west, south, east, north, result) {
    if (!when.defined(result)) {
      return new Rectangle(west, south, east, north)
    }

    result.west = when.defaultValue(west, 0.0)
    result.south = when.defaultValue(south, 0.0)
    result.east = when.defaultValue(east, 0.0)
    result.north = when.defaultValue(north, 0.0)

    return result
  }

  /**
   * Creates the smallest possible Rectangle that encloses all positions in the provided array.
   *
   * @param {Cartographic[]} cartographics The list of Cartographic instances.
   * @param {Rectangle} [result] The object onto which to store the result, or undefined if a new instance should be created.
   * @returns {Rectangle} The modified result parameter or a new Rectangle instance if none was provided.
   */
  Rectangle.fromCartographicArray = function (cartographics, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('cartographics', cartographics)
    //>>includeEnd('debug');

    var west = Number.MAX_VALUE
    var east = -Number.MAX_VALUE
    var westOverIDL = Number.MAX_VALUE
    var eastOverIDL = -Number.MAX_VALUE
    var south = Number.MAX_VALUE
    var north = -Number.MAX_VALUE

    for (var i = 0, len = cartographics.length; i < len; i++) {
      var position = cartographics[i]
      west = Math.min(west, position.longitude)
      east = Math.max(east, position.longitude)
      south = Math.min(south, position.latitude)
      north = Math.max(north, position.latitude)

      var lonAdjusted = position.longitude >= 0 ? position.longitude : position.longitude + ComponentDatatype.CesiumMath.TWO_PI
      westOverIDL = Math.min(westOverIDL, lonAdjusted)
      eastOverIDL = Math.max(eastOverIDL, lonAdjusted)
    }

    if (east - west > eastOverIDL - westOverIDL) {
      west = westOverIDL
      east = eastOverIDL

      if (east > ComponentDatatype.CesiumMath.PI) {
        east = east - ComponentDatatype.CesiumMath.TWO_PI
      }
      if (west > ComponentDatatype.CesiumMath.PI) {
        west = west - ComponentDatatype.CesiumMath.TWO_PI
      }
    }

    if (!when.defined(result)) {
      return new Rectangle(west, south, east, north)
    }

    result.west = west
    result.south = south
    result.east = east
    result.north = north
    return result
  }

  /**
   * Creates the smallest possible Rectangle that encloses all positions in the provided array.
   *
   * @param {Cartesian3[]} cartesians The list of Cartesian instances.
   * @param {Ellipsoid} [ellipsoid=Ellipsoid.WGS84] The ellipsoid the cartesians are on.
   * @param {Rectangle} [result] The object onto which to store the result, or undefined if a new instance should be created.
   * @returns {Rectangle} The modified result parameter or a new Rectangle instance if none was provided.
   */
  Rectangle.fromCartesianArray = function (cartesians, ellipsoid, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('cartesians', cartesians)
    //>>includeEnd('debug');
    ellipsoid = when.defaultValue(ellipsoid, Ellipsoid.WGS84)

    var west = Number.MAX_VALUE
    var east = -Number.MAX_VALUE
    var westOverIDL = Number.MAX_VALUE
    var eastOverIDL = -Number.MAX_VALUE
    var south = Number.MAX_VALUE
    var north = -Number.MAX_VALUE

    for (var i = 0, len = cartesians.length; i < len; i++) {
      var position = ellipsoid.cartesianToCartographic(cartesians[i])
      west = Math.min(west, position.longitude)
      east = Math.max(east, position.longitude)
      south = Math.min(south, position.latitude)
      north = Math.max(north, position.latitude)

      var lonAdjusted = position.longitude >= 0 ? position.longitude : position.longitude + ComponentDatatype.CesiumMath.TWO_PI
      westOverIDL = Math.min(westOverIDL, lonAdjusted)
      eastOverIDL = Math.max(eastOverIDL, lonAdjusted)
    }

    if (east - west > eastOverIDL - westOverIDL) {
      west = westOverIDL
      east = eastOverIDL

      if (east > ComponentDatatype.CesiumMath.PI) {
        east = east - ComponentDatatype.CesiumMath.TWO_PI
      }
      if (west > ComponentDatatype.CesiumMath.PI) {
        west = west - ComponentDatatype.CesiumMath.TWO_PI
      }
    }

    if (!when.defined(result)) {
      return new Rectangle(west, south, east, north)
    }

    result.west = west
    result.south = south
    result.east = east
    result.north = north
    return result
  }

  /**
   * Duplicates a Rectangle.
   *
   * @param {Rectangle} rectangle The rectangle to clone.
   * @param {Rectangle} [result] The object onto which to store the result, or undefined if a new instance should be created.
   * @returns {Rectangle} The modified result parameter or a new Rectangle instance if none was provided. (Returns undefined if rectangle is undefined)
   */
  Rectangle.clone = function (rectangle, result) {
    if (!when.defined(rectangle)) {
      return undefined
    }

    if (!when.defined(result)) {
      return new Rectangle(rectangle.west, rectangle.south, rectangle.east, rectangle.north)
    }

    result.west = rectangle.west
    result.south = rectangle.south
    result.east = rectangle.east
    result.north = rectangle.north
    return result
  }

  /**
   * Compares the provided Rectangles componentwise and returns
   * <code>true</code> if they pass an absolute or relative tolerance test,
   * <code>false</code> otherwise.
   *
   * @param {Rectangle} [left] The first Rectangle.
   * @param {Rectangle} [right] The second Rectangle.
   * @param {Number} [absoluteEpsilon=0] The absolute epsilon tolerance to use for equality testing.
   * @returns {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
   */
  Rectangle.equalsEpsilon = function (left, right, absoluteEpsilon) {
    absoluteEpsilon = when.defaultValue(absoluteEpsilon, 0)

    return (
      left === right ||
      (when.defined(left) &&
        when.defined(right) &&
        Math.abs(left.west - right.west) <= absoluteEpsilon &&
        Math.abs(left.south - right.south) <= absoluteEpsilon &&
        Math.abs(left.east - right.east) <= absoluteEpsilon &&
        Math.abs(left.north - right.north) <= absoluteEpsilon)
    )
  }

  /**
   * Duplicates this Rectangle.
   *
   * @param {Rectangle} [result] The object onto which to store the result.
   * @returns {Rectangle} The modified result parameter or a new Rectangle instance if none was provided.
   */
  Rectangle.prototype.clone = function (result) {
    return Rectangle.clone(this, result)
  }

  /**
   * Compares the provided Rectangle with this Rectangle componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Rectangle} [other] The Rectangle to compare.
   * @returns {Boolean} <code>true</code> if the Rectangles are equal, <code>false</code> otherwise.
   */
  Rectangle.prototype.equals = function (other) {
    return Rectangle.equals(this, other)
  }

  /**
   * Compares the provided rectangles and returns <code>true</code> if they are equal,
   * <code>false</code> otherwise.
   *
   * @param {Rectangle} [left] The first Rectangle.
   * @param {Rectangle} [right] The second Rectangle.
   * @returns {Boolean} <code>true</code> if left and right are equal; otherwise <code>false</code>.
   */
  Rectangle.equals = function (left, right) {
    return (
      left === right ||
      (when.defined(left) &&
        when.defined(right) &&
        left.west === right.west &&
        left.south === right.south &&
        left.east === right.east &&
        left.north === right.north)
    )
  }

  /**
   * Compares the provided Rectangle with this Rectangle componentwise and returns
   * <code>true</code> if they are within the provided epsilon,
   * <code>false</code> otherwise.
   *
   * @param {Rectangle} [other] The Rectangle to compare.
   * @param {Number} [epsilon=0] The epsilon to use for equality testing.
   * @returns {Boolean} <code>true</code> if the Rectangles are within the provided epsilon, <code>false</code> otherwise.
   */
  Rectangle.prototype.equalsEpsilon = function (other, epsilon) {
    return Rectangle.equalsEpsilon(this, other, epsilon)
  }

  /**
   * Checks a Rectangle's properties and throws if they are not in valid ranges.
   *
   * @param {Rectangle} rectangle The rectangle to validate
   *
   * @exception {DeveloperError} <code>north</code> must be in the interval [<code>-Pi/2</code>, <code>Pi/2</code>].
   * @exception {DeveloperError} <code>south</code> must be in the interval [<code>-Pi/2</code>, <code>Pi/2</code>].
   * @exception {DeveloperError} <code>east</code> must be in the interval [<code>-Pi</code>, <code>Pi</code>].
   * @exception {DeveloperError} <code>west</code> must be in the interval [<code>-Pi</code>, <code>Pi</code>].
   */
  Rectangle.validate = function (rectangle) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('rectangle', rectangle)

    var north = rectangle.north
    RuntimeError.Check.typeOf.number.greaterThanOrEquals('north', north, -ComponentDatatype.CesiumMath.PI_OVER_TWO)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('north', north, ComponentDatatype.CesiumMath.PI_OVER_TWO)

    var south = rectangle.south
    RuntimeError.Check.typeOf.number.greaterThanOrEquals('south', south, -ComponentDatatype.CesiumMath.PI_OVER_TWO)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('south', south, ComponentDatatype.CesiumMath.PI_OVER_TWO)

    var west = rectangle.west
    RuntimeError.Check.typeOf.number.greaterThanOrEquals('west', west, -Math.PI)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('west', west, Math.PI)

    var east = rectangle.east
    RuntimeError.Check.typeOf.number.greaterThanOrEquals('east', east, -Math.PI)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('east', east, Math.PI)
    //>>includeEnd('debug');
  }

  /**
   * Computes the southwest corner of a rectangle.
   *
   * @param {Rectangle} rectangle The rectangle for which to find the corner
   * @param {Cartographic} [result] The object onto which to store the result.
   * @returns {Cartographic} The modified result parameter or a new Cartographic instance if none was provided.
   */
  Rectangle.southwest = function (rectangle, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('rectangle', rectangle)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      return new Cartographic(rectangle.west, rectangle.south)
    }
    result.longitude = rectangle.west
    result.latitude = rectangle.south
    result.height = 0.0
    return result
  }

  /**
   * Computes the northwest corner of a rectangle.
   *
   * @param {Rectangle} rectangle The rectangle for which to find the corner
   * @param {Cartographic} [result] The object onto which to store the result.
   * @returns {Cartographic} The modified result parameter or a new Cartographic instance if none was provided.
   */
  Rectangle.northwest = function (rectangle, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('rectangle', rectangle)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      return new Cartographic(rectangle.west, rectangle.north)
    }
    result.longitude = rectangle.west
    result.latitude = rectangle.north
    result.height = 0.0
    return result
  }

  /**
   * Computes the northeast corner of a rectangle.
   *
   * @param {Rectangle} rectangle The rectangle for which to find the corner
   * @param {Cartographic} [result] The object onto which to store the result.
   * @returns {Cartographic} The modified result parameter or a new Cartographic instance if none was provided.
   */
  Rectangle.northeast = function (rectangle, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('rectangle', rectangle)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      return new Cartographic(rectangle.east, rectangle.north)
    }
    result.longitude = rectangle.east
    result.latitude = rectangle.north
    result.height = 0.0
    return result
  }

  /**
   * Computes the southeast corner of a rectangle.
   *
   * @param {Rectangle} rectangle The rectangle for which to find the corner
   * @param {Cartographic} [result] The object onto which to store the result.
   * @returns {Cartographic} The modified result parameter or a new Cartographic instance if none was provided.
   */
  Rectangle.southeast = function (rectangle, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('rectangle', rectangle)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      return new Cartographic(rectangle.east, rectangle.south)
    }
    result.longitude = rectangle.east
    result.latitude = rectangle.south
    result.height = 0.0
    return result
  }

  /**
   * Computes the center of a rectangle.
   *
   * @param {Rectangle} rectangle The rectangle for which to find the center
   * @param {Cartographic} [result] The object onto which to store the result.
   * @returns {Cartographic} The modified result parameter or a new Cartographic instance if none was provided.
   */
  Rectangle.center = function (rectangle, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('rectangle', rectangle)
    //>>includeEnd('debug');

    var east = rectangle.east
    var west = rectangle.west

    if (east < west) {
      east += ComponentDatatype.CesiumMath.TWO_PI
    }

    var longitude = ComponentDatatype.CesiumMath.negativePiToPi((west + east) * 0.5)
    var latitude = (rectangle.south + rectangle.north) * 0.5

    if (!when.defined(result)) {
      return new Cartographic(longitude, latitude)
    }

    result.longitude = longitude
    result.latitude = latitude
    result.height = 0.0
    return result
  }

  /**
   * Computes the intersection of two rectangles.  This function assumes that the rectangle's coordinates are
   * latitude and longitude in radians and produces a correct intersection, taking into account the fact that
   * the same angle can be represented with multiple values as well as the wrapping of longitude at the
   * anti-meridian.  For a simple intersection that ignores these factors and can be used with projected
   * coordinates, see {@link Rectangle.simpleIntersection}.
   *
   * @param {Rectangle} rectangle On rectangle to find an intersection
   * @param {Rectangle} otherRectangle Another rectangle to find an intersection
   * @param {Rectangle} [result] The object onto which to store the result.
   * @returns {Rectangle|undefined} The modified result parameter, a new Rectangle instance if none was provided or undefined if there is no intersection.
   */
  Rectangle.intersection = function (rectangle, otherRectangle, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('rectangle', rectangle)
    RuntimeError.Check.typeOf.object('otherRectangle', otherRectangle)
    //>>includeEnd('debug');

    var rectangleEast = rectangle.east
    var rectangleWest = rectangle.west

    var otherRectangleEast = otherRectangle.east
    var otherRectangleWest = otherRectangle.west

    if (rectangleEast < rectangleWest && otherRectangleEast > 0.0) {
      rectangleEast += ComponentDatatype.CesiumMath.TWO_PI
    } else if (otherRectangleEast < otherRectangleWest && rectangleEast > 0.0) {
      otherRectangleEast += ComponentDatatype.CesiumMath.TWO_PI
    }

    if (rectangleEast < rectangleWest && otherRectangleWest < 0.0) {
      otherRectangleWest += ComponentDatatype.CesiumMath.TWO_PI
    } else if (otherRectangleEast < otherRectangleWest && rectangleWest < 0.0) {
      rectangleWest += ComponentDatatype.CesiumMath.TWO_PI
    }

    var west = ComponentDatatype.CesiumMath.negativePiToPi(Math.max(rectangleWest, otherRectangleWest))
    var east = ComponentDatatype.CesiumMath.negativePiToPi(Math.min(rectangleEast, otherRectangleEast))

    if ((rectangle.west < rectangle.east || otherRectangle.west < otherRectangle.east) && east <= west) {
      return undefined
    }

    var south = Math.max(rectangle.south, otherRectangle.south)
    var north = Math.min(rectangle.north, otherRectangle.north)

    if (south >= north) {
      return undefined
    }

    if (!when.defined(result)) {
      return new Rectangle(west, south, east, north)
    }
    result.west = west
    result.south = south
    result.east = east
    result.north = north
    return result
  }

  /**
   * Computes a simple intersection of two rectangles.  Unlike {@link Rectangle.intersection}, this function
   * does not attempt to put the angular coordinates into a consistent range or to account for crossing the
   * anti-meridian.  As such, it can be used for rectangles where the coordinates are not simply latitude
   * and longitude (i.e. projected coordinates).
   *
   * @param {Rectangle} rectangle On rectangle to find an intersection
   * @param {Rectangle} otherRectangle Another rectangle to find an intersection
   * @param {Rectangle} [result] The object onto which to store the result.
   * @returns {Rectangle|undefined} The modified result parameter, a new Rectangle instance if none was provided or undefined if there is no intersection.
   */
  Rectangle.simpleIntersection = function (rectangle, otherRectangle, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('rectangle', rectangle)
    RuntimeError.Check.typeOf.object('otherRectangle', otherRectangle)
    //>>includeEnd('debug');

    var west = Math.max(rectangle.west, otherRectangle.west)
    var south = Math.max(rectangle.south, otherRectangle.south)
    var east = Math.min(rectangle.east, otherRectangle.east)
    var north = Math.min(rectangle.north, otherRectangle.north)

    if (south >= north || west >= east) {
      return undefined
    }

    if (!when.defined(result)) {
      return new Rectangle(west, south, east, north)
    }

    result.west = west
    result.south = south
    result.east = east
    result.north = north
    return result
  }

  /**
   * Computes a rectangle that is the union of two rectangles.
   *
   * @param {Rectangle} rectangle A rectangle to enclose in rectangle.
   * @param {Rectangle} otherRectangle A rectangle to enclose in a rectangle.
   * @param {Rectangle} [result] The object onto which to store the result.
   * @returns {Rectangle} The modified result parameter or a new Rectangle instance if none was provided.
   */
  Rectangle.union = function (rectangle, otherRectangle, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('rectangle', rectangle)
    RuntimeError.Check.typeOf.object('otherRectangle', otherRectangle)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      result = new Rectangle()
    }

    var rectangleEast = rectangle.east
    var rectangleWest = rectangle.west

    var otherRectangleEast = otherRectangle.east
    var otherRectangleWest = otherRectangle.west

    if (rectangleEast < rectangleWest && otherRectangleEast > 0.0) {
      rectangleEast += ComponentDatatype.CesiumMath.TWO_PI
    } else if (otherRectangleEast < otherRectangleWest && rectangleEast > 0.0) {
      otherRectangleEast += ComponentDatatype.CesiumMath.TWO_PI
    }

    if (rectangleEast < rectangleWest && otherRectangleWest < 0.0) {
      otherRectangleWest += ComponentDatatype.CesiumMath.TWO_PI
    } else if (otherRectangleEast < otherRectangleWest && rectangleWest < 0.0) {
      rectangleWest += ComponentDatatype.CesiumMath.TWO_PI
    }

    var west = ComponentDatatype.CesiumMath.negativePiToPi(Math.min(rectangleWest, otherRectangleWest))
    var east = ComponentDatatype.CesiumMath.negativePiToPi(Math.max(rectangleEast, otherRectangleEast))

    result.west = west
    result.south = Math.min(rectangle.south, otherRectangle.south)
    result.east = east
    result.north = Math.max(rectangle.north, otherRectangle.north)

    return result
  }

  /**
   * Computes a rectangle by enlarging the provided rectangle until it contains the provided cartographic.
   *
   * @param {Rectangle} rectangle A rectangle to expand.
   * @param {Cartographic} cartographic A cartographic to enclose in a rectangle.
   * @param {Rectangle} [result] The object onto which to store the result.
   * @returns {Rectangle} The modified result parameter or a new Rectangle instance if one was not provided.
   */
  Rectangle.expand = function (rectangle, cartographic, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('rectangle', rectangle)
    RuntimeError.Check.typeOf.object('cartographic', cartographic)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      result = new Rectangle()
    }

    result.west = Math.min(rectangle.west, cartographic.longitude)
    result.south = Math.min(rectangle.south, cartographic.latitude)
    result.east = Math.max(rectangle.east, cartographic.longitude)
    result.north = Math.max(rectangle.north, cartographic.latitude)

    return result
  }

  /**
   * Returns true if the cartographic is on or inside the rectangle, false otherwise.
   *
   * @param {Rectangle} rectangle The rectangle
   * @param {Cartographic} cartographic The cartographic to test.
   * @returns {Boolean} true if the provided cartographic is inside the rectangle, false otherwise.
   */
  Rectangle.contains = function (rectangle, cartographic) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('rectangle', rectangle)
    RuntimeError.Check.typeOf.object('cartographic', cartographic)
    //>>includeEnd('debug');

    var longitude = cartographic.longitude
    var latitude = cartographic.latitude

    var west = rectangle.west
    var east = rectangle.east

    if (east < west) {
      east += ComponentDatatype.CesiumMath.TWO_PI
      if (longitude < 0.0) {
        longitude += ComponentDatatype.CesiumMath.TWO_PI
      }
    }
    return (
      (longitude > west || ComponentDatatype.CesiumMath.equalsEpsilon(longitude, west, ComponentDatatype.CesiumMath.EPSILON14)) &&
      (longitude < east || ComponentDatatype.CesiumMath.equalsEpsilon(longitude, east, ComponentDatatype.CesiumMath.EPSILON14)) &&
      latitude >= rectangle.south &&
      latitude <= rectangle.north
    )
  }

  var subsampleLlaScratch = new Cartographic()
  /**
   * Samples a rectangle so that it includes a list of Cartesian points suitable for passing to
   * {@link BoundingSphere#fromPoints}.  Sampling is necessary to account
   * for rectangles that cover the poles or cross the equator.
   *
   * @param {Rectangle} rectangle The rectangle to subsample.
   * @param {Ellipsoid} [ellipsoid=Ellipsoid.WGS84] The ellipsoid to use.
   * @param {Number} [surfaceHeight=0.0] The height of the rectangle above the ellipsoid.
   * @param {Cartesian3[]} [result] The array of Cartesians onto which to store the result.
   * @returns {Cartesian3[]} The modified result parameter or a new Array of Cartesians instances if none was provided.
   */
  Rectangle.subsample = function (rectangle, ellipsoid, surfaceHeight, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('rectangle', rectangle)
    //>>includeEnd('debug');

    ellipsoid = when.defaultValue(ellipsoid, Ellipsoid.WGS84)
    surfaceHeight = when.defaultValue(surfaceHeight, 0.0)

    if (!when.defined(result)) {
      result = []
    }
    var length = 0

    var north = rectangle.north
    var south = rectangle.south
    var east = rectangle.east
    var west = rectangle.west

    var lla = subsampleLlaScratch
    lla.height = surfaceHeight

    lla.longitude = west
    lla.latitude = north
    result[length] = ellipsoid.cartographicToCartesian(lla, result[length])
    length++

    lla.longitude = east
    result[length] = ellipsoid.cartographicToCartesian(lla, result[length])
    length++

    lla.latitude = south
    result[length] = ellipsoid.cartographicToCartesian(lla, result[length])
    length++

    lla.longitude = west
    result[length] = ellipsoid.cartographicToCartesian(lla, result[length])
    length++

    if (north < 0.0) {
      lla.latitude = north
    } else if (south > 0.0) {
      lla.latitude = south
    } else {
      lla.latitude = 0.0
    }

    for (var i = 1; i < 8; ++i) {
      lla.longitude = -Math.PI + i * ComponentDatatype.CesiumMath.PI_OVER_TWO
      if (Rectangle.contains(rectangle, lla)) {
        result[length] = ellipsoid.cartographicToCartesian(lla, result[length])
        length++
      }
    }

    if (lla.latitude === 0.0) {
      lla.longitude = west
      result[length] = ellipsoid.cartographicToCartesian(lla, result[length])
      length++
      lla.longitude = east
      result[length] = ellipsoid.cartographicToCartesian(lla, result[length])
      length++
    }
    result.length = length
    return result
  }

  /**
   * The largest possible rectangle.
   *
   * @type {Rectangle}
   * @constant
   */
  Rectangle.MAX_VALUE = Object.freeze(
    new Rectangle(-Math.PI, -ComponentDatatype.CesiumMath.PI_OVER_TWO, Math.PI, ComponentDatatype.CesiumMath.PI_OVER_TWO)
  )

  /**
   * A 2D Cartesian point.
   * @alias Cartesian2
   * @constructor
   *
   * @param {Number} [x=0.0] The X component.
   * @param {Number} [y=0.0] The Y component.
   *
   * @see Cartesian3
   * @see Cartesian4
   * @see Packable
   */
  function Cartesian2(x, y) {
    /**
     * The X component.
     * @type {Number}
     * @default 0.0
     */
    this.x = when.defaultValue(x, 0.0)

    /**
     * The Y component.
     * @type {Number}
     * @default 0.0
     */
    this.y = when.defaultValue(y, 0.0)
  }

  /**
   * Creates a Cartesian2 instance from x and y coordinates.
   *
   * @param {Number} x The x coordinate.
   * @param {Number} y The y coordinate.
   * @param {Cartesian2} [result] The object onto which to store the result.
   * @returns {Cartesian2} The modified result parameter or a new Cartesian2 instance if one was not provided.
   */
  Cartesian2.fromElements = function (x, y, result) {
    if (!when.defined(result)) {
      return new Cartesian2(x, y)
    }

    result.x = x
    result.y = y
    return result
  }

  /**
   * Duplicates a Cartesian2 instance.
   *
   * @param {Cartesian2} cartesian The Cartesian to duplicate.
   * @param {Cartesian2} [result] The object onto which to store the result.
   * @returns {Cartesian2} The modified result parameter or a new Cartesian2 instance if one was not provided. (Returns undefined if cartesian is undefined)
   */
  Cartesian2.clone = function (cartesian, result) {
    if (!when.defined(cartesian)) {
      return undefined
    }
    if (!when.defined(result)) {
      return new Cartesian2(cartesian.x, cartesian.y)
    }

    result.x = cartesian.x
    result.y = cartesian.y
    return result
  }

  /**
   * Creates a Cartesian2 instance from an existing Cartesian3.  This simply takes the
   * x and y properties of the Cartesian3 and drops z.
   * @function
   *
   * @param {Cartesian3} cartesian The Cartesian3 instance to create a Cartesian2 instance from.
   * @param {Cartesian2} [result] The object onto which to store the result.
   * @returns {Cartesian2} The modified result parameter or a new Cartesian2 instance if one was not provided.
   */
  Cartesian2.fromCartesian3 = Cartesian2.clone

  /**
   * Creates a Cartesian2 instance from an existing Cartesian4.  This simply takes the
   * x and y properties of the Cartesian4 and drops z and w.
   * @function
   *
   * @param {Cartesian4} cartesian The Cartesian4 instance to create a Cartesian2 instance from.
   * @param {Cartesian2} [result] The object onto which to store the result.
   * @returns {Cartesian2} The modified result parameter or a new Cartesian2 instance if one was not provided.
   */
  Cartesian2.fromCartesian4 = Cartesian2.clone

  /**
   * The number of elements used to pack the object into an array.
   * @type {Number}
   */
  Cartesian2.packedLength = 2

  /**
   * Stores the provided instance into the provided array.
   *
   * @param {Cartesian2} value The value to pack.
   * @param {Number[]} array The array to pack into.
   * @param {Number} [startingIndex=0] The index into the array at which to start packing the elements.
   *
   * @returns {Number[]} The array that was packed into
   */
  Cartesian2.pack = function (value, array, startingIndex) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('value', value)
    RuntimeError.Check.defined('array', array)
    //>>includeEnd('debug');

    startingIndex = when.defaultValue(startingIndex, 0)

    array[startingIndex++] = value.x
    array[startingIndex] = value.y

    return array
  }

  /**
   * Retrieves an instance from a packed array.
   *
   * @param {Number[]} array The packed array.
   * @param {Number} [startingIndex=0] The starting index of the element to be unpacked.
   * @param {Cartesian2} [result] The object into which to store the result.
   * @returns {Cartesian2} The modified result parameter or a new Cartesian2 instance if one was not provided.
   */
  Cartesian2.unpack = function (array, startingIndex, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('array', array)
    //>>includeEnd('debug');

    startingIndex = when.defaultValue(startingIndex, 0)

    if (!when.defined(result)) {
      result = new Cartesian2()
    }
    result.x = array[startingIndex++]
    result.y = array[startingIndex]
    return result
  }

  /**
       * Flattens an array of Cartesian2s into and array of components.
       *
       * @param {Cartesian2[]} array The array of cartesians to pack.
       * @param {Number[]} [result] The array onto which to store the result. If this is a typed array, it must have array.length * 2 components, else a {@link DeveloperError} will be thrown. If it is a regular array, it will be resized to have (array.length * 2) elements.

       * @returns {Number[]} The packed array.
       */
  Cartesian2.packArray = function (array, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('array', array)
    //>>includeEnd('debug');

    var length = array.length
    var resultLength = length * 2
    if (!when.defined(result)) {
      result = new Array(resultLength)
    } else if (!Array.isArray(result) && result.length !== resultLength) {
      throw new RuntimeError.DeveloperError('If result is a typed array, it must have exactly array.length * 2 elements')
    } else if (result.length !== resultLength) {
      result.length = resultLength
    }

    for (var i = 0; i < length; ++i) {
      Cartesian2.pack(array[i], result, i * 2)
    }
    return result
  }

  /**
   * Unpacks an array of cartesian components into and array of Cartesian2s.
   *
   * @param {Number[]} array The array of components to unpack.
   * @param {Cartesian2[]} [result] The array onto which to store the result.
   * @returns {Cartesian2[]} The unpacked array.
   */
  Cartesian2.unpackArray = function (array, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('array', array)
    RuntimeError.Check.typeOf.number.greaterThanOrEquals('array.length', array.length, 2)
    if (array.length % 2 !== 0) {
      throw new RuntimeError.DeveloperError('array length must be a multiple of 2.')
    }
    //>>includeEnd('debug');

    var length = array.length
    if (!when.defined(result)) {
      result = new Array(length / 2)
    } else {
      result.length = length / 2
    }

    for (var i = 0; i < length; i += 2) {
      var index = i / 2
      result[index] = Cartesian2.unpack(array, i, result[index])
    }
    return result
  }

  /**
   * Creates a Cartesian2 from two consecutive elements in an array.
   * @function
   *
   * @param {Number[]} array The array whose two consecutive elements correspond to the x and y components, respectively.
   * @param {Number} [startingIndex=0] The offset into the array of the first element, which corresponds to the x component.
   * @param {Cartesian2} [result] The object onto which to store the result.
   * @returns {Cartesian2} The modified result parameter or a new Cartesian2 instance if one was not provided.
   *
   * @example
   * // Create a Cartesian2 with (1.0, 2.0)
   * var v = [1.0, 2.0];
   * var p = Cesium.Cartesian2.fromArray(v);
   *
   * // Create a Cartesian2 with (1.0, 2.0) using an offset into an array
   * var v2 = [0.0, 0.0, 1.0, 2.0];
   * var p2 = Cesium.Cartesian2.fromArray(v2, 2);
   */
  Cartesian2.fromArray = Cartesian2.unpack

  /**
   * Computes the value of the maximum component for the supplied Cartesian.
   *
   * @param {Cartesian2} cartesian The cartesian to use.
   * @returns {Number} The value of the maximum component.
   */
  Cartesian2.maximumComponent = function (cartesian) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    //>>includeEnd('debug');

    return Math.max(cartesian.x, cartesian.y)
  }

  /**
   * Computes the value of the minimum component for the supplied Cartesian.
   *
   * @param {Cartesian2} cartesian The cartesian to use.
   * @returns {Number} The value of the minimum component.
   */
  Cartesian2.minimumComponent = function (cartesian) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    //>>includeEnd('debug');

    return Math.min(cartesian.x, cartesian.y)
  }

  /**
   * Compares two Cartesians and computes a Cartesian which contains the minimum components of the supplied Cartesians.
   *
   * @param {Cartesian2} first A cartesian to compare.
   * @param {Cartesian2} second A cartesian to compare.
   * @param {Cartesian2} result The object into which to store the result.
   * @returns {Cartesian2} A cartesian with the minimum components.
   */
  Cartesian2.minimumByComponent = function (first, second, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('first', first)
    RuntimeError.Check.typeOf.object('second', second)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = Math.min(first.x, second.x)
    result.y = Math.min(first.y, second.y)

    return result
  }

  /**
   * Compares two Cartesians and computes a Cartesian which contains the maximum components of the supplied Cartesians.
   *
   * @param {Cartesian2} first A cartesian to compare.
   * @param {Cartesian2} second A cartesian to compare.
   * @param {Cartesian2} result The object into which to store the result.
   * @returns {Cartesian2} A cartesian with the maximum components.
   */
  Cartesian2.maximumByComponent = function (first, second, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('first', first)
    RuntimeError.Check.typeOf.object('second', second)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = Math.max(first.x, second.x)
    result.y = Math.max(first.y, second.y)
    return result
  }

  /**
   * Computes the provided Cartesian's squared magnitude.
   *
   * @param {Cartesian2} cartesian The Cartesian instance whose squared magnitude is to be computed.
   * @returns {Number} The squared magnitude.
   */
  Cartesian2.magnitudeSquared = function (cartesian) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    //>>includeEnd('debug');

    return cartesian.x * cartesian.x + cartesian.y * cartesian.y
  }

  /**
   * Computes the Cartesian's magnitude (length).
   *
   * @param {Cartesian2} cartesian The Cartesian instance whose magnitude is to be computed.
   * @returns {Number} The magnitude.
   */
  Cartesian2.magnitude = function (cartesian) {
    return Math.sqrt(Cartesian2.magnitudeSquared(cartesian))
  }

  var distanceScratch = new Cartesian2()

  /**
   * Computes the distance between two points.
   *
   * @param {Cartesian2} left The first point to compute the distance from.
   * @param {Cartesian2} right The second point to compute the distance to.
   * @returns {Number} The distance between two points.
   *
   * @example
   * // Returns 1.0
   * var d = Cesium.Cartesian2.distance(new Cesium.Cartesian2(1.0, 0.0), new Cesium.Cartesian2(2.0, 0.0));
   */
  Cartesian2.distance = function (left, right) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    //>>includeEnd('debug');

    Cartesian2.subtract(left, right, distanceScratch)
    return Cartesian2.magnitude(distanceScratch)
  }

  /**
   * Computes the squared distance between two points.  Comparing squared distances
   * using this function is more efficient than comparing distances using {@link Cartesian2#distance}.
   *
   * @param {Cartesian2} left The first point to compute the distance from.
   * @param {Cartesian2} right The second point to compute the distance to.
   * @returns {Number} The distance between two points.
   *
   * @example
   * // Returns 4.0, not 2.0
   * var d = Cesium.Cartesian2.distance(new Cesium.Cartesian2(1.0, 0.0), new Cesium.Cartesian2(3.0, 0.0));
   */
  Cartesian2.distanceSquared = function (left, right) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    //>>includeEnd('debug');

    Cartesian2.subtract(left, right, distanceScratch)
    return Cartesian2.magnitudeSquared(distanceScratch)
  }

  /**
   * Computes the normalized form of the supplied Cartesian.
   *
   * @param {Cartesian2} cartesian The Cartesian to be normalized.
   * @param {Cartesian2} result The object onto which to store the result.
   * @returns {Cartesian2} The modified result parameter.
   */
  Cartesian2.normalize = function (cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var magnitude = Cartesian2.magnitude(cartesian)

    result.x = cartesian.x / magnitude
    result.y = cartesian.y / magnitude

    //>>includeStart('debug', pragmas.debug);
    if (isNaN(result.x) || isNaN(result.y)) {
      throw new RuntimeError.DeveloperError('normalized result is not a number')
    }
    //>>includeEnd('debug');

    return result
  }

  /**
   * Computes the dot (scalar) product of two Cartesians.
   *
   * @param {Cartesian2} left The first Cartesian.
   * @param {Cartesian2} right The second Cartesian.
   * @returns {Number} The dot product.
   */
  Cartesian2.dot = function (left, right) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    //>>includeEnd('debug');

    return left.x * right.x + left.y * right.y
  }

  /**
   * Computes the magnitude of the cross product that would result from implicitly setting the Z coordinate of the input vectors to 0
   *
   * @param {Cartesian2} left The first Cartesian.
   * @param {Cartesian2} right The second Cartesian.
   * @returns {Number} The cross product.
   */
  Cartesian2.cross = function (left, right) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    //>>includeEnd('debug');

    return left.x * right.y - left.y * right.x
  }

  /**
   * Computes the componentwise product of two Cartesians.
   *
   * @param {Cartesian2} left The first Cartesian.
   * @param {Cartesian2} right The second Cartesian.
   * @param {Cartesian2} result The object onto which to store the result.
   * @returns {Cartesian2} The modified result parameter.
   */
  Cartesian2.multiplyComponents = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = left.x * right.x
    result.y = left.y * right.y
    return result
  }

  /**
   * Computes the componentwise quotient of two Cartesians.
   *
   * @param {Cartesian2} left The first Cartesian.
   * @param {Cartesian2} right The second Cartesian.
   * @param {Cartesian2} result The object onto which to store the result.
   * @returns {Cartesian2} The modified result parameter.
   */
  Cartesian2.divideComponents = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = left.x / right.x
    result.y = left.y / right.y
    return result
  }

  /**
   * Computes the componentwise sum of two Cartesians.
   *
   * @param {Cartesian2} left The first Cartesian.
   * @param {Cartesian2} right The second Cartesian.
   * @param {Cartesian2} result The object onto which to store the result.
   * @returns {Cartesian2} The modified result parameter.
   */
  Cartesian2.add = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = left.x + right.x
    result.y = left.y + right.y
    return result
  }

  /**
   * Computes the componentwise difference of two Cartesians.
   *
   * @param {Cartesian2} left The first Cartesian.
   * @param {Cartesian2} right The second Cartesian.
   * @param {Cartesian2} result The object onto which to store the result.
   * @returns {Cartesian2} The modified result parameter.
   */
  Cartesian2.subtract = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = left.x - right.x
    result.y = left.y - right.y
    return result
  }

  /**
   * Multiplies the provided Cartesian componentwise by the provided scalar.
   *
   * @param {Cartesian2} cartesian The Cartesian to be scaled.
   * @param {Number} scalar The scalar to multiply with.
   * @param {Cartesian2} result The object onto which to store the result.
   * @returns {Cartesian2} The modified result parameter.
   */
  Cartesian2.multiplyByScalar = function (cartesian, scalar, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.number('scalar', scalar)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = cartesian.x * scalar
    result.y = cartesian.y * scalar
    return result
  }

  /**
   * Divides the provided Cartesian componentwise by the provided scalar.
   *
   * @param {Cartesian2} cartesian The Cartesian to be divided.
   * @param {Number} scalar The scalar to divide by.
   * @param {Cartesian2} result The object onto which to store the result.
   * @returns {Cartesian2} The modified result parameter.
   */
  Cartesian2.divideByScalar = function (cartesian, scalar, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.number('scalar', scalar)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = cartesian.x / scalar
    result.y = cartesian.y / scalar
    return result
  }

  /**
   * Negates the provided Cartesian.
   *
   * @param {Cartesian2} cartesian The Cartesian to be negated.
   * @param {Cartesian2} result The object onto which to store the result.
   * @returns {Cartesian2} The modified result parameter.
   */
  Cartesian2.negate = function (cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = -cartesian.x
    result.y = -cartesian.y
    return result
  }

  /**
   * Computes the absolute value of the provided Cartesian.
   *
   * @param {Cartesian2} cartesian The Cartesian whose absolute value is to be computed.
   * @param {Cartesian2} result The object onto which to store the result.
   * @returns {Cartesian2} The modified result parameter.
   */
  Cartesian2.abs = function (cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = Math.abs(cartesian.x)
    result.y = Math.abs(cartesian.y)
    return result
  }

  var lerpScratch = new Cartesian2()
  /**
   * Computes the linear interpolation or extrapolation at t using the provided cartesians.
   *
   * @param {Cartesian2} start The value corresponding to t at 0.0.
   * @param {Cartesian2} end The value corresponding to t at 1.0.
   * @param {Number} t The point along t at which to interpolate.
   * @param {Cartesian2} result The object onto which to store the result.
   * @returns {Cartesian2} The modified result parameter.
   */
  Cartesian2.lerp = function (start, end, t, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('start', start)
    RuntimeError.Check.typeOf.object('end', end)
    RuntimeError.Check.typeOf.number('t', t)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    Cartesian2.multiplyByScalar(end, t, lerpScratch)
    result = Cartesian2.multiplyByScalar(start, 1.0 - t, result)
    return Cartesian2.add(lerpScratch, result, result)
  }

  var angleBetweenScratch = new Cartesian2()
  var angleBetweenScratch2 = new Cartesian2()
  /**
   * Returns the angle, in radians, between the provided Cartesians.
   *
   * @param {Cartesian2} left The first Cartesian.
   * @param {Cartesian2} right The second Cartesian.
   * @returns {Number} The angle between the Cartesians.
   */
  Cartesian2.angleBetween = function (left, right) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    //>>includeEnd('debug');

    Cartesian2.normalize(left, angleBetweenScratch)
    Cartesian2.normalize(right, angleBetweenScratch2)
    return ComponentDatatype.CesiumMath.acosClamped(Cartesian2.dot(angleBetweenScratch, angleBetweenScratch2))
  }

  var mostOrthogonalAxisScratch = new Cartesian2()
  /**
   * Returns the axis that is most orthogonal to the provided Cartesian.
   *
   * @param {Cartesian2} cartesian The Cartesian on which to find the most orthogonal axis.
   * @param {Cartesian2} result The object onto which to store the result.
   * @returns {Cartesian2} The most orthogonal axis.
   */
  Cartesian2.mostOrthogonalAxis = function (cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var f = Cartesian2.normalize(cartesian, mostOrthogonalAxisScratch)
    Cartesian2.abs(f, f)

    if (f.x <= f.y) {
      result = Cartesian2.clone(Cartesian2.UNIT_X, result)
    } else {
      result = Cartesian2.clone(Cartesian2.UNIT_Y, result)
    }

    return result
  }

  /**
   * Compares the provided Cartesians componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Cartesian2} [left] The first Cartesian.
   * @param {Cartesian2} [right] The second Cartesian.
   * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
   */
  Cartesian2.equals = function (left, right) {
    return left === right || (when.defined(left) && when.defined(right) && left.x === right.x && left.y === right.y)
  }

  /**
   * @private
   */
  Cartesian2.equalsArray = function (cartesian, array, offset) {
    return cartesian.x === array[offset] && cartesian.y === array[offset + 1]
  }

  /**
   * Compares the provided Cartesians componentwise and returns
   * <code>true</code> if they pass an absolute or relative tolerance test,
   * <code>false</code> otherwise.
   *
   * @param {Cartesian2} [left] The first Cartesian.
   * @param {Cartesian2} [right] The second Cartesian.
   * @param {Number} [relativeEpsilon=0] The relative epsilon tolerance to use for equality testing.
   * @param {Number} [absoluteEpsilon=relativeEpsilon] The absolute epsilon tolerance to use for equality testing.
   * @returns {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
   */
  Cartesian2.equalsEpsilon = function (left, right, relativeEpsilon, absoluteEpsilon) {
    return (
      left === right ||
      (when.defined(left) &&
        when.defined(right) &&
        ComponentDatatype.CesiumMath.equalsEpsilon(left.x, right.x, relativeEpsilon, absoluteEpsilon) &&
        ComponentDatatype.CesiumMath.equalsEpsilon(left.y, right.y, relativeEpsilon, absoluteEpsilon))
    )
  }

  /**
   * An immutable Cartesian2 instance initialized to (0.0, 0.0).
   *
   * @type {Cartesian2}
   * @constant
   */
  Cartesian2.ZERO = Object.freeze(new Cartesian2(0.0, 0.0))

  /**
   * An immutable Cartesian2 instance initialized to (1.0, 1.0).
   *
   * @type {Cartesian2}
   * @constant
   */
  Cartesian2.ONE = Object.freeze(new Cartesian2(1.0, 1.0))

  /**
   * An immutable Cartesian2 instance initialized to (1.0, 0.0).
   *
   * @type {Cartesian2}
   * @constant
   */
  Cartesian2.UNIT_X = Object.freeze(new Cartesian2(1.0, 0.0))

  /**
   * An immutable Cartesian2 instance initialized to (0.0, 1.0).
   *
   * @type {Cartesian2}
   * @constant
   */
  Cartesian2.UNIT_Y = Object.freeze(new Cartesian2(0.0, 1.0))

  /**
   * Duplicates this Cartesian2 instance.
   *
   * @param {Cartesian2} [result] The object onto which to store the result.
   * @returns {Cartesian2} The modified result parameter or a new Cartesian2 instance if one was not provided.
   */
  Cartesian2.prototype.clone = function (result) {
    return Cartesian2.clone(this, result)
  }

  /**
   * Compares this Cartesian against the provided Cartesian componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Cartesian2} [right] The right hand side Cartesian.
   * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
   */
  Cartesian2.prototype.equals = function (right) {
    return Cartesian2.equals(this, right)
  }

  /**
   * Compares this Cartesian against the provided Cartesian componentwise and returns
   * <code>true</code> if they pass an absolute or relative tolerance test,
   * <code>false</code> otherwise.
   *
   * @param {Cartesian2} [right] The right hand side Cartesian.
   * @param {Number} [relativeEpsilon=0] The relative epsilon tolerance to use for equality testing.
   * @param {Number} [absoluteEpsilon=relativeEpsilon] The absolute epsilon tolerance to use for equality testing.
   * @returns {Boolean} <code>true</code> if they are within the provided epsilon, <code>false</code> otherwise.
   */
  Cartesian2.prototype.equalsEpsilon = function (right, relativeEpsilon, absoluteEpsilon) {
    return Cartesian2.equalsEpsilon(this, right, relativeEpsilon, absoluteEpsilon)
  }

  /**
   * Creates a string representing this Cartesian in the format '(x, y)'.
   *
   * @returns {String} A string representing the provided Cartesian in the format '(x, y)'.
   */
  Cartesian2.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')'
  }

  /**
   * A 2x2 matrix, indexable as a column-major order array.
   * Constructor parameters are in row-major order for code readability.
   * @alias Matrix2
   * @constructor
   * @implements {ArrayLike<number>}
   *
   * @param {Number} [column0Row0=0.0] The value for column 0, row 0.
   * @param {Number} [column1Row0=0.0] The value for column 1, row 0.
   * @param {Number} [column0Row1=0.0] The value for column 0, row 1.
   * @param {Number} [column1Row1=0.0] The value for column 1, row 1.
   *
   * @see Matrix2.fromColumnMajorArray
   * @see Matrix2.fromRowMajorArray
   * @see Matrix2.fromScale
   * @see Matrix2.fromUniformScale
   * @see Matrix3
   * @see Matrix4
   */
  function Matrix2(column0Row0, column1Row0, column0Row1, column1Row1) {
    this[0] = when.defaultValue(column0Row0, 0.0)
    this[1] = when.defaultValue(column0Row1, 0.0)
    this[2] = when.defaultValue(column1Row0, 0.0)
    this[3] = when.defaultValue(column1Row1, 0.0)
  }

  /**
   * The number of elements used to pack the object into an array.
   * @type {Number}
   */
  Matrix2.packedLength = 4

  /**
   * Stores the provided instance into the provided array.
   *
   * @param {Matrix2} value The value to pack.
   * @param {Number[]} array The array to pack into.
   * @param {Number} [startingIndex=0] The index into the array at which to start packing the elements.
   *
   * @returns {Number[]} The array that was packed into
   */
  Matrix2.pack = function (value, array, startingIndex) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('value', value)
    RuntimeError.Check.defined('array', array)
    //>>includeEnd('debug');

    startingIndex = when.defaultValue(startingIndex, 0)

    array[startingIndex++] = value[0]
    array[startingIndex++] = value[1]
    array[startingIndex++] = value[2]
    array[startingIndex++] = value[3]

    return array
  }

  /**
   * Retrieves an instance from a packed array.
   *
   * @param {Number[]} array The packed array.
   * @param {Number} [startingIndex=0] The starting index of the element to be unpacked.
   * @param {Matrix2} [result] The object into which to store the result.
   * @returns {Matrix2} The modified result parameter or a new Matrix2 instance if one was not provided.
   */
  Matrix2.unpack = function (array, startingIndex, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('array', array)
    //>>includeEnd('debug');

    startingIndex = when.defaultValue(startingIndex, 0)

    if (!when.defined(result)) {
      result = new Matrix2()
    }

    result[0] = array[startingIndex++]
    result[1] = array[startingIndex++]
    result[2] = array[startingIndex++]
    result[3] = array[startingIndex++]
    return result
  }

  /**
   * Duplicates a Matrix2 instance.
   *
   * @param {Matrix2} matrix The matrix to duplicate.
   * @param {Matrix2} [result] The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter or a new Matrix2 instance if one was not provided. (Returns undefined if matrix is undefined)
   */
  Matrix2.clone = function (matrix, result) {
    if (!when.defined(matrix)) {
      return undefined
    }
    if (!when.defined(result)) {
      return new Matrix2(matrix[0], matrix[2], matrix[1], matrix[3])
    }
    result[0] = matrix[0]
    result[1] = matrix[1]
    result[2] = matrix[2]
    result[3] = matrix[3]
    return result
  }

  /**
   * Creates a Matrix2 from 4 consecutive elements in an array.
   *
   * @param {Number[]} array The array whose 4 consecutive elements correspond to the positions of the matrix.  Assumes column-major order.
   * @param {Number} [startingIndex=0] The offset into the array of the first element, which corresponds to first column first row position in the matrix.
   * @param {Matrix2} [result] The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter or a new Matrix2 instance if one was not provided.
   *
   * @example
   * // Create the Matrix2:
   * // [1.0, 2.0]
   * // [1.0, 2.0]
   *
   * var v = [1.0, 1.0, 2.0, 2.0];
   * var m = Cesium.Matrix2.fromArray(v);
   *
   * // Create same Matrix2 with using an offset into an array
   * var v2 = [0.0, 0.0, 1.0, 1.0, 2.0, 2.0];
   * var m2 = Cesium.Matrix2.fromArray(v2, 2);
   */
  Matrix2.fromArray = function (array, startingIndex, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('array', array)
    //>>includeEnd('debug');

    startingIndex = when.defaultValue(startingIndex, 0)

    if (!when.defined(result)) {
      result = new Matrix2()
    }

    result[0] = array[startingIndex]
    result[1] = array[startingIndex + 1]
    result[2] = array[startingIndex + 2]
    result[3] = array[startingIndex + 3]
    return result
  }

  /**
   * Creates a Matrix2 instance from a column-major order array.
   *
   * @param {Number[]} values The column-major order array.
   * @param {Matrix2} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix2} The modified result parameter, or a new Matrix2 instance if one was not provided.
   */
  Matrix2.fromColumnMajorArray = function (values, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('values', values)
    //>>includeEnd('debug');

    return Matrix2.clone(values, result)
  }

  /**
   * Creates a Matrix2 instance from a row-major order array.
   * The resulting matrix will be in column-major order.
   *
   * @param {Number[]} values The row-major order array.
   * @param {Matrix2} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix2} The modified result parameter, or a new Matrix2 instance if one was not provided.
   */
  Matrix2.fromRowMajorArray = function (values, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('values', values)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      return new Matrix2(values[0], values[1], values[2], values[3])
    }
    result[0] = values[0]
    result[1] = values[2]
    result[2] = values[1]
    result[3] = values[3]
    return result
  }

  /**
   * Computes a Matrix2 instance representing a non-uniform scale.
   *
   * @param {Cartesian2} scale The x and y scale factors.
   * @param {Matrix2} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix2} The modified result parameter, or a new Matrix2 instance if one was not provided.
   *
   * @example
   * // Creates
   * //   [7.0, 0.0]
   * //   [0.0, 8.0]
   * var m = Cesium.Matrix2.fromScale(new Cesium.Cartesian2(7.0, 8.0));
   */
  Matrix2.fromScale = function (scale, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('scale', scale)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      return new Matrix2(scale.x, 0.0, 0.0, scale.y)
    }

    result[0] = scale.x
    result[1] = 0.0
    result[2] = 0.0
    result[3] = scale.y
    return result
  }

  /**
   * Computes a Matrix2 instance representing a uniform scale.
   *
   * @param {Number} scale The uniform scale factor.
   * @param {Matrix2} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix2} The modified result parameter, or a new Matrix2 instance if one was not provided.
   *
   * @example
   * // Creates
   * //   [2.0, 0.0]
   * //   [0.0, 2.0]
   * var m = Cesium.Matrix2.fromUniformScale(2.0);
   */
  Matrix2.fromUniformScale = function (scale, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number('scale', scale)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      return new Matrix2(scale, 0.0, 0.0, scale)
    }

    result[0] = scale
    result[1] = 0.0
    result[2] = 0.0
    result[3] = scale
    return result
  }

  /**
   * Creates a rotation matrix.
   *
   * @param {Number} angle The angle, in radians, of the rotation.  Positive angles are counterclockwise.
   * @param {Matrix2} [result] The object in which the result will be stored, if undefined a new instance will be created.
   * @returns {Matrix2} The modified result parameter, or a new Matrix2 instance if one was not provided.
   *
   * @example
   * // Rotate a point 45 degrees counterclockwise.
   * var p = new Cesium.Cartesian2(5, 6);
   * var m = Cesium.Matrix2.fromRotation(Cesium.Math.toRadians(45.0));
   * var rotated = Cesium.Matrix2.multiplyByVector(m, p, new Cesium.Cartesian2());
   */
  Matrix2.fromRotation = function (angle, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number('angle', angle)
    //>>includeEnd('debug');

    var cosAngle = Math.cos(angle)
    var sinAngle = Math.sin(angle)

    if (!when.defined(result)) {
      return new Matrix2(cosAngle, -sinAngle, sinAngle, cosAngle)
    }
    result[0] = cosAngle
    result[1] = sinAngle
    result[2] = -sinAngle
    result[3] = cosAngle
    return result
  }

  /**
   * Creates an Array from the provided Matrix2 instance.
   * The array will be in column-major order.
   *
   * @param {Matrix2} matrix The matrix to use..
   * @param {Number[]} [result] The Array onto which to store the result.
   * @returns {Number[]} The modified Array parameter or a new Array instance if one was not provided.
   */
  Matrix2.toArray = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    //>>includeEnd('debug');

    if (!when.defined(result)) {
      return [matrix[0], matrix[1], matrix[2], matrix[3]]
    }
    result[0] = matrix[0]
    result[1] = matrix[1]
    result[2] = matrix[2]
    result[3] = matrix[3]
    return result
  }

  /**
   * Computes the array index of the element at the provided row and column.
   *
   * @param {Number} row The zero-based index of the row.
   * @param {Number} column The zero-based index of the column.
   * @returns {Number} The index of the element at the provided row and column.
   *
   * @exception {DeveloperError} row must be 0 or 1.
   * @exception {DeveloperError} column must be 0 or 1.
   *
   * @example
   * var myMatrix = new Cesium.Matrix2();
   * var column1Row0Index = Cesium.Matrix2.getElementIndex(1, 0);
   * var column1Row0 = myMatrix[column1Row0Index]
   * myMatrix[column1Row0Index] = 10.0;
   */
  Matrix2.getElementIndex = function (column, row) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number.greaterThanOrEquals('row', row, 0)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('row', row, 1)

    RuntimeError.Check.typeOf.number.greaterThanOrEquals('column', column, 0)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('column', column, 1)
    //>>includeEnd('debug');

    return column * 2 + row
  }

  /**
   * Retrieves a copy of the matrix column at the provided index as a Cartesian2 instance.
   *
   * @param {Matrix2} matrix The matrix to use.
   * @param {Number} index The zero-based index of the column to retrieve.
   * @param {Cartesian2} result The object onto which to store the result.
   * @returns {Cartesian2} The modified result parameter.
   *
   * @exception {DeveloperError} index must be 0 or 1.
   */
  Matrix2.getColumn = function (matrix, index, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)

    RuntimeError.Check.typeOf.number.greaterThanOrEquals('index', index, 0)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('index', index, 1)

    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var startIndex = index * 2
    var x = matrix[startIndex]
    var y = matrix[startIndex + 1]

    result.x = x
    result.y = y
    return result
  }

  /**
   * Computes a new matrix that replaces the specified column in the provided matrix with the provided Cartesian2 instance.
   *
   * @param {Matrix2} matrix The matrix to use.
   * @param {Number} index The zero-based index of the column to set.
   * @param {Cartesian2} cartesian The Cartesian whose values will be assigned to the specified column.
   * @param {Cartesian2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   *
   * @exception {DeveloperError} index must be 0 or 1.
   */
  Matrix2.setColumn = function (matrix, index, cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)

    RuntimeError.Check.typeOf.number.greaterThanOrEquals('index', index, 0)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('index', index, 1)

    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result = Matrix2.clone(matrix, result)
    var startIndex = index * 2
    result[startIndex] = cartesian.x
    result[startIndex + 1] = cartesian.y
    return result
  }

  /**
   * Retrieves a copy of the matrix row at the provided index as a Cartesian2 instance.
   *
   * @param {Matrix2} matrix The matrix to use.
   * @param {Number} index The zero-based index of the row to retrieve.
   * @param {Cartesian2} result The object onto which to store the result.
   * @returns {Cartesian2} The modified result parameter.
   *
   * @exception {DeveloperError} index must be 0 or 1.
   */
  Matrix2.getRow = function (matrix, index, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)

    RuntimeError.Check.typeOf.number.greaterThanOrEquals('index', index, 0)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('index', index, 1)

    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var x = matrix[index]
    var y = matrix[index + 2]

    result.x = x
    result.y = y
    return result
  }

  /**
   * Computes a new matrix that replaces the specified row in the provided matrix with the provided Cartesian2 instance.
   *
   * @param {Matrix2} matrix The matrix to use.
   * @param {Number} index The zero-based index of the row to set.
   * @param {Cartesian2} cartesian The Cartesian whose values will be assigned to the specified row.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   *
   * @exception {DeveloperError} index must be 0 or 1.
   */
  Matrix2.setRow = function (matrix, index, cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)

    RuntimeError.Check.typeOf.number.greaterThanOrEquals('index', index, 0)
    RuntimeError.Check.typeOf.number.lessThanOrEquals('index', index, 1)

    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result = Matrix2.clone(matrix, result)
    result[index] = cartesian.x
    result[index + 2] = cartesian.y
    return result
  }

  var scratchColumn = new Cartesian2()

  /**
   * Extracts the non-uniform scale assuming the matrix is an affine transformation.
   *
   * @param {Matrix2} matrix The matrix.
   * @param {Cartesian2} result The object onto which to store the result.
   * @returns {Cartesian2} The modified result parameter.
   */
  Matrix2.getScale = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result.x = Cartesian2.magnitude(Cartesian2.fromElements(matrix[0], matrix[1], scratchColumn))
    result.y = Cartesian2.magnitude(Cartesian2.fromElements(matrix[2], matrix[3], scratchColumn))
    return result
  }

  var scratchScale = new Cartesian2()

  /**
   * Computes the maximum scale assuming the matrix is an affine transformation.
   * The maximum scale is the maximum length of the column vectors.
   *
   * @param {Matrix2} matrix The matrix.
   * @returns {Number} The maximum scale.
   */
  Matrix2.getMaximumScale = function (matrix) {
    Matrix2.getScale(matrix, scratchScale)
    return Cartesian2.maximumComponent(scratchScale)
  }

  /**
   * Computes the product of two matrices.
   *
   * @param {Matrix2} left The first matrix.
   * @param {Matrix2} right The second matrix.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   */
  Matrix2.multiply = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var column0Row0 = left[0] * right[0] + left[2] * right[1]
    var column1Row0 = left[0] * right[2] + left[2] * right[3]
    var column0Row1 = left[1] * right[0] + left[3] * right[1]
    var column1Row1 = left[1] * right[2] + left[3] * right[3]

    result[0] = column0Row0
    result[1] = column0Row1
    result[2] = column1Row0
    result[3] = column1Row1
    return result
  }

  /**
   * Computes the sum of two matrices.
   *
   * @param {Matrix2} left The first matrix.
   * @param {Matrix2} right The second matrix.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   */
  Matrix2.add = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result[0] = left[0] + right[0]
    result[1] = left[1] + right[1]
    result[2] = left[2] + right[2]
    result[3] = left[3] + right[3]
    return result
  }

  /**
   * Computes the difference of two matrices.
   *
   * @param {Matrix2} left The first matrix.
   * @param {Matrix2} right The second matrix.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   */
  Matrix2.subtract = function (left, right, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('left', left)
    RuntimeError.Check.typeOf.object('right', right)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result[0] = left[0] - right[0]
    result[1] = left[1] - right[1]
    result[2] = left[2] - right[2]
    result[3] = left[3] - right[3]
    return result
  }

  /**
   * Computes the product of a matrix and a column vector.
   *
   * @param {Matrix2} matrix The matrix.
   * @param {Cartesian2} cartesian The column.
   * @param {Cartesian2} result The object onto which to store the result.
   * @returns {Cartesian2} The modified result parameter.
   */
  Matrix2.multiplyByVector = function (matrix, cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('cartesian', cartesian)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var x = matrix[0] * cartesian.x + matrix[2] * cartesian.y
    var y = matrix[1] * cartesian.x + matrix[3] * cartesian.y

    result.x = x
    result.y = y
    return result
  }

  /**
   * Computes the product of a matrix and a scalar.
   *
   * @param {Matrix2} matrix The matrix.
   * @param {Number} scalar The number to multiply by.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   */
  Matrix2.multiplyByScalar = function (matrix, scalar, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.number('scalar', scalar)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result[0] = matrix[0] * scalar
    result[1] = matrix[1] * scalar
    result[2] = matrix[2] * scalar
    result[3] = matrix[3] * scalar
    return result
  }

  /**
   * Computes the product of a matrix times a (non-uniform) scale, as if the scale were a scale matrix.
   *
   * @param {Matrix2} matrix The matrix on the left-hand side.
   * @param {Cartesian2} scale The non-uniform scale on the right-hand side.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   *
   *
   * @example
   * // Instead of Cesium.Matrix2.multiply(m, Cesium.Matrix2.fromScale(scale), m);
   * Cesium.Matrix2.multiplyByScale(m, scale, m);
   *
   * @see Matrix2.fromScale
   * @see Matrix2.multiplyByUniformScale
   */
  Matrix2.multiplyByScale = function (matrix, scale, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('scale', scale)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result[0] = matrix[0] * scale.x
    result[1] = matrix[1] * scale.x
    result[2] = matrix[2] * scale.y
    result[3] = matrix[3] * scale.y
    return result
  }

  /**
   * Creates a negated copy of the provided matrix.
   *
   * @param {Matrix2} matrix The matrix to negate.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   */
  Matrix2.negate = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result[0] = -matrix[0]
    result[1] = -matrix[1]
    result[2] = -matrix[2]
    result[3] = -matrix[3]
    return result
  }

  /**
   * Computes the transpose of the provided matrix.
   *
   * @param {Matrix2} matrix The matrix to transpose.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   */
  Matrix2.transpose = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    var column0Row0 = matrix[0]
    var column0Row1 = matrix[2]
    var column1Row0 = matrix[1]
    var column1Row1 = matrix[3]

    result[0] = column0Row0
    result[1] = column0Row1
    result[2] = column1Row0
    result[3] = column1Row1
    return result
  }

  /**
   * Computes a matrix, which contains the absolute (unsigned) values of the provided matrix's elements.
   *
   * @param {Matrix2} matrix The matrix with signed elements.
   * @param {Matrix2} result The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter.
   */
  Matrix2.abs = function (matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('matrix', matrix)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');

    result[0] = Math.abs(matrix[0])
    result[1] = Math.abs(matrix[1])
    result[2] = Math.abs(matrix[2])
    result[3] = Math.abs(matrix[3])

    return result
  }

  /**
   * Compares the provided matrices componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Matrix2} [left] The first matrix.
   * @param {Matrix2} [right] The second matrix.
   * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
   */
  Matrix2.equals = function (left, right) {
    return (
      left === right ||
      (when.defined(left) && when.defined(right) && left[0] === right[0] && left[1] === right[1] && left[2] === right[2] && left[3] === right[3])
    )
  }

  /**
   * @private
   */
  Matrix2.equalsArray = function (matrix, array, offset) {
    return matrix[0] === array[offset] && matrix[1] === array[offset + 1] && matrix[2] === array[offset + 2] && matrix[3] === array[offset + 3]
  }

  /**
   * Compares the provided matrices componentwise and returns
   * <code>true</code> if they are within the provided epsilon,
   * <code>false</code> otherwise.
   *
   * @param {Matrix2} [left] The first matrix.
   * @param {Matrix2} [right] The second matrix.
   * @param {Number} [epsilon=0] The epsilon to use for equality testing.
   * @returns {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
   */
  Matrix2.equalsEpsilon = function (left, right, epsilon) {
    epsilon = when.defaultValue(epsilon, 0)
    return (
      left === right ||
      (when.defined(left) &&
        when.defined(right) &&
        Math.abs(left[0] - right[0]) <= epsilon &&
        Math.abs(left[1] - right[1]) <= epsilon &&
        Math.abs(left[2] - right[2]) <= epsilon &&
        Math.abs(left[3] - right[3]) <= epsilon)
    )
  }

  /**
   * An immutable Matrix2 instance initialized to the identity matrix.
   *
   * @type {Matrix2}
   * @constant
   */
  Matrix2.IDENTITY = Object.freeze(new Matrix2(1.0, 0.0, 0.0, 1.0))

  /**
   * An immutable Matrix2 instance initialized to the zero matrix.
   *
   * @type {Matrix2}
   * @constant
   */
  Matrix2.ZERO = Object.freeze(new Matrix2(0.0, 0.0, 0.0, 0.0))

  /**
   * The index into Matrix2 for column 0, row 0.
   *
   * @type {Number}
   * @constant
   *
   * @example
   * var matrix = new Cesium.Matrix2();
   * matrix[Cesium.Matrix2.COLUMN0ROW0] = 5.0; // set column 0, row 0 to 5.0
   */
  Matrix2.COLUMN0ROW0 = 0

  /**
   * The index into Matrix2 for column 0, row 1.
   *
   * @type {Number}
   * @constant
   *
   * @example
   * var matrix = new Cesium.Matrix2();
   * matrix[Cesium.Matrix2.COLUMN0ROW1] = 5.0; // set column 0, row 1 to 5.0
   */
  Matrix2.COLUMN0ROW1 = 1

  /**
   * The index into Matrix2 for column 1, row 0.
   *
   * @type {Number}
   * @constant
   *
   * @example
   * var matrix = new Cesium.Matrix2();
   * matrix[Cesium.Matrix2.COLUMN1ROW0] = 5.0; // set column 1, row 0 to 5.0
   */
  Matrix2.COLUMN1ROW0 = 2

  /**
   * The index into Matrix2 for column 1, row 1.
   *
   * @type {Number}
   * @constant
   *
   * @example
   * var matrix = new Cesium.Matrix2();
   * matrix[Cesium.Matrix2.COLUMN1ROW1] = 5.0; // set column 1, row 1 to 5.0
   */
  Matrix2.COLUMN1ROW1 = 3

  Object.defineProperties(Matrix2.prototype, {
    /**
     * Gets the number of items in the collection.
     * @memberof Matrix2.prototype
     *
     * @type {Number}
     */
    length: {
      get: function () {
        return Matrix2.packedLength
      }
    }
  })

  /**
   * Duplicates the provided Matrix2 instance.
   *
   * @param {Matrix2} [result] The object onto which to store the result.
   * @returns {Matrix2} The modified result parameter or a new Matrix2 instance if one was not provided.
   */
  Matrix2.prototype.clone = function (result) {
    return Matrix2.clone(this, result)
  }

  /**
   * Compares this matrix to the provided matrix componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {Matrix2} [right] The right hand side matrix.
   * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
   */
  Matrix2.prototype.equals = function (right) {
    return Matrix2.equals(this, right)
  }

  /**
   * Compares this matrix to the provided matrix componentwise and returns
   * <code>true</code> if they are within the provided epsilon,
   * <code>false</code> otherwise.
   *
   * @param {Matrix2} [right] The right hand side matrix.
   * @param {Number} [epsilon=0] The epsilon to use for equality testing.
   * @returns {Boolean} <code>true</code> if they are within the provided epsilon, <code>false</code> otherwise.
   */
  Matrix2.prototype.equalsEpsilon = function (right, epsilon) {
    return Matrix2.equalsEpsilon(this, right, epsilon)
  }

  /**
   * Creates a string representing this Matrix with each row being
   * on a separate line and in the format '(column0, column1)'.
   *
   * @returns {String} A string representing the provided Matrix with each row being on a separate line and in the format '(column0, column1)'.
   */
  Matrix2.prototype.toString = function () {
    return '(' + this[0] + ', ' + this[2] + ')\n' + '(' + this[1] + ', ' + this[3] + ')'
  }

  exports.Cartesian2 = Cartesian2
  exports.Cartesian3 = Cartesian3
  exports.Cartesian4 = Cartesian4
  exports.Cartographic = Cartographic
  exports.Ellipsoid = Ellipsoid
  exports.Matrix2 = Matrix2
  exports.Matrix3 = Matrix3
  exports.Matrix4 = Matrix4
  exports.Rectangle = Rectangle
})
//# sourceMappingURL=Matrix2-91d5b6af.js.map
