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

define(['exports', './Matrix2-91d5b6af', './ComponentDatatype-f194c48b', './RuntimeError-346a3079', './when-4bbc8319'], function (
  exports,
  Matrix2,
  ComponentDatatype,
  RuntimeError,
  when
) {
  'use strict'

  /**
   * An enum describing the attribute type for glTF and 3D Tiles.
   *
   * @enum {String}
   *
   * @private
   */
  var AttributeType = {
    /**
     * The attribute is a single component.
     *
     * @type {String}
     * @constant
     */
    SCALAR: 'SCALAR',

    /**
     * The attribute is a two-component vector.
     *
     * @type {String}
     * @constant
     */
    VEC2: 'VEC2',

    /**
     * The attribute is a three-component vector.
     *
     * @type {String}
     * @constant
     */
    VEC3: 'VEC3',

    /**
     * The attribute is a four-component vector.
     *
     * @type {String}
     * @constant
     */
    VEC4: 'VEC4',

    /**
     * The attribute is a 2x2 matrix.
     *
     * @type {String}
     * @constant
     */
    MAT2: 'MAT2',

    /**
     * The attribute is a 3x3 matrix.
     *
     * @type {String}
     * @constant
     */
    MAT3: 'MAT3',

    /**
     * The attribute is a 4x4 matrix.
     *
     * @type {String}
     * @constant
     */
    MAT4: 'MAT4'
  }

  /**
   * Gets the scalar, vector, or matrix type for the attribute type.
   *
   * @param {AttributeType} attributeType The attribute type.
   * @returns {*} The math type.
   *
   * @private
   */
  AttributeType.getMathType = function (attributeType) {
    switch (attributeType) {
      case AttributeType.SCALAR:
        return Number
      case AttributeType.VEC2:
        return Matrix2.Cartesian2
      case AttributeType.VEC3:
        return Matrix2.Cartesian3
      case AttributeType.VEC4:
        return Matrix2.Cartesian4
      case AttributeType.MAT2:
        return Matrix2.Matrix2
      case AttributeType.MAT3:
        return Matrix2.Matrix3
      case AttributeType.MAT4:
        return Matrix2.Matrix4
      //>>includeStart('debug', pragmas.debug);
      default:
        throw new RuntimeError.DeveloperError('attributeType is not a valid value.')
      //>>includeEnd('debug');
    }
  }

  /**
   * Gets the number of components per attribute.
   *
   * @param {AttributeType} attributeType The attribute type.
   * @returns {Number} The number of components.
   *
   * @private
   */
  AttributeType.getNumberOfComponents = function (attributeType) {
    switch (attributeType) {
      case AttributeType.SCALAR:
        return 1
      case AttributeType.VEC2:
        return 2
      case AttributeType.VEC3:
        return 3
      case AttributeType.VEC4:
      case AttributeType.MAT2:
        return 4
      case AttributeType.MAT3:
        return 9
      case AttributeType.MAT4:
        return 16
      //>>includeStart('debug', pragmas.debug);
      default:
        throw new RuntimeError.DeveloperError('attributeType is not a valid value.')
      //>>includeEnd('debug');
    }
  }

  /**
   * Gets the GLSL type for the attribute type.
   *
   * @param {AttributeType} attributeType The attribute type.
   * @returns {String} The GLSL type for the attribute type.
   *
   * @private
   */
  AttributeType.getGlslType = function (attributeType) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.string('attributeType', attributeType)
    //>>includeEnd('debug');

    switch (attributeType) {
      case AttributeType.SCALAR:
        return 'float'
      case AttributeType.VEC2:
        return 'vec2'
      case AttributeType.VEC3:
        return 'vec3'
      case AttributeType.VEC4:
        return 'vec4'
      case AttributeType.MAT2:
        return 'mat2'
      case AttributeType.MAT3:
        return 'mat3'
      case AttributeType.MAT4:
        return 'mat4'
      //>>includeStart('debug', pragmas.debug);
      default:
        throw new RuntimeError.DeveloperError('attributeType is not a valid value.')
      //>>includeEnd('debug');
    }
  }

  var AttributeType$1 = Object.freeze(AttributeType)

  var RIGHT_SHIFT = 1.0 / 256.0
  var LEFT_SHIFT = 256.0

  /**
   * Attribute compression and decompression functions.
   *
   * @namespace AttributeCompression
   *
   * @private
   */
  var AttributeCompression = {}

  /**
   * Encodes a normalized vector into 2 SNORM values in the range of [0-rangeMax] following the 'oct' encoding.
   *
   * Oct encoding is a compact representation of unit length vectors.
   * The 'oct' encoding is described in "A Survey of Efficient Representations of Independent Unit Vectors",
   * Cigolle et al 2014: {@link http://jcgt.org/published/0003/02/01/}
   *
   * @param {Cartesian3} vector The normalized vector to be compressed into 2 component 'oct' encoding.
   * @param {Cartesian2} result The 2 component oct-encoded unit length vector.
   * @param {Number} rangeMax The maximum value of the SNORM range. The encoded vector is stored in log2(rangeMax+1) bits.
   * @returns {Cartesian2} The 2 component oct-encoded unit length vector.
   *
   * @exception {DeveloperError} vector must be normalized.
   *
   * @see AttributeCompression.octDecodeInRange
   */
  AttributeCompression.octEncodeInRange = function (vector, rangeMax, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('vector', vector)
    RuntimeError.Check.defined('result', result)
    var magSquared = Matrix2.Cartesian3.magnitudeSquared(vector)
    if (Math.abs(magSquared - 1.0) > ComponentDatatype.CesiumMath.EPSILON6) {
      throw new RuntimeError.DeveloperError('vector must be normalized.')
    }
    //>>includeEnd('debug');

    result.x = vector.x / (Math.abs(vector.x) + Math.abs(vector.y) + Math.abs(vector.z))
    result.y = vector.y / (Math.abs(vector.x) + Math.abs(vector.y) + Math.abs(vector.z))
    if (vector.z < 0) {
      var x = result.x
      var y = result.y
      result.x = (1.0 - Math.abs(y)) * ComponentDatatype.CesiumMath.signNotZero(x)
      result.y = (1.0 - Math.abs(x)) * ComponentDatatype.CesiumMath.signNotZero(y)
    }

    result.x = ComponentDatatype.CesiumMath.toSNorm(result.x, rangeMax)
    result.y = ComponentDatatype.CesiumMath.toSNorm(result.y, rangeMax)

    return result
  }

  /**
   * Encodes a normalized vector into 2 SNORM values in the range of [0-255] following the 'oct' encoding.
   *
   * @param {Cartesian3} vector The normalized vector to be compressed into 2 byte 'oct' encoding.
   * @param {Cartesian2} result The 2 byte oct-encoded unit length vector.
   * @returns {Cartesian2} The 2 byte oct-encoded unit length vector.
   *
   * @exception {DeveloperError} vector must be normalized.
   *
   * @see AttributeCompression.octEncodeInRange
   * @see AttributeCompression.octDecode
   */
  AttributeCompression.octEncode = function (vector, result) {
    return AttributeCompression.octEncodeInRange(vector, 255, result)
  }

  var octEncodeScratch = new Matrix2.Cartesian2()
  var uint8ForceArray = new Uint8Array(1)
  function forceUint8(value) {
    uint8ForceArray[0] = value
    return uint8ForceArray[0]
  }
  /**
   * @param {Cartesian3} vector The normalized vector to be compressed into 4 byte 'oct' encoding.
   * @param {Cartesian4} result The 4 byte oct-encoded unit length vector.
   * @returns {Cartesian4} The 4 byte oct-encoded unit length vector.
   *
   * @exception {DeveloperError} vector must be normalized.
   *
   * @see AttributeCompression.octEncodeInRange
   * @see AttributeCompression.octDecodeFromCartesian4
   */
  AttributeCompression.octEncodeToCartesian4 = function (vector, result) {
    AttributeCompression.octEncodeInRange(vector, 65535, octEncodeScratch)
    result.x = forceUint8(octEncodeScratch.x * RIGHT_SHIFT)
    result.y = forceUint8(octEncodeScratch.x)
    result.z = forceUint8(octEncodeScratch.y * RIGHT_SHIFT)
    result.w = forceUint8(octEncodeScratch.y)
    return result
  }

  /**
   * Decodes a unit-length vector in 'oct' encoding to a normalized 3-component vector.
   *
   * @param {Number} x The x component of the oct-encoded unit length vector.
   * @param {Number} y The y component of the oct-encoded unit length vector.
   * @param {Number} rangeMax The maximum value of the SNORM range. The encoded vector is stored in log2(rangeMax+1) bits.
   * @param {Cartesian3} result The decoded and normalized vector
   * @returns {Cartesian3} The decoded and normalized vector.
   *
   * @exception {DeveloperError} x and y must be unsigned normalized integers between 0 and rangeMax.
   *
   * @see AttributeCompression.octEncodeInRange
   */
  AttributeCompression.octDecodeInRange = function (x, y, rangeMax, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('result', result)
    if (x < 0 || x > rangeMax || y < 0 || y > rangeMax) {
      throw new RuntimeError.DeveloperError('x and y must be unsigned normalized integers between 0 and ' + rangeMax)
    }
    //>>includeEnd('debug');

    result.x = ComponentDatatype.CesiumMath.fromSNorm(x, rangeMax)
    result.y = ComponentDatatype.CesiumMath.fromSNorm(y, rangeMax)
    result.z = 1.0 - (Math.abs(result.x) + Math.abs(result.y))

    if (result.z < 0.0) {
      var oldVX = result.x
      result.x = (1.0 - Math.abs(result.y)) * ComponentDatatype.CesiumMath.signNotZero(oldVX)
      result.y = (1.0 - Math.abs(oldVX)) * ComponentDatatype.CesiumMath.signNotZero(result.y)
    }

    return Matrix2.Cartesian3.normalize(result, result)
  }

  /**
   * Decodes a unit-length vector in 2 byte 'oct' encoding to a normalized 3-component vector.
   *
   * @param {Number} x The x component of the oct-encoded unit length vector.
   * @param {Number} y The y component of the oct-encoded unit length vector.
   * @param {Cartesian3} result The decoded and normalized vector.
   * @returns {Cartesian3} The decoded and normalized vector.
   *
   * @exception {DeveloperError} x and y must be an unsigned normalized integer between 0 and 255.
   *
   * @see AttributeCompression.octDecodeInRange
   */
  AttributeCompression.octDecode = function (x, y, result) {
    return AttributeCompression.octDecodeInRange(x, y, 255, result)
  }

  /**
   * Decodes a unit-length vector in 4 byte 'oct' encoding to a normalized 3-component vector.
   *
   * @param {Cartesian4} encoded The oct-encoded unit length vector.
   * @param {Cartesian3} result The decoded and normalized vector.
   * @returns {Cartesian3} The decoded and normalized vector.
   *
   * @exception {DeveloperError} x, y, z, and w must be unsigned normalized integers between 0 and 255.
   *
   * @see AttributeCompression.octDecodeInRange
   * @see AttributeCompression.octEncodeToCartesian4
   */
  AttributeCompression.octDecodeFromCartesian4 = function (encoded, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.object('encoded', encoded)
    RuntimeError.Check.typeOf.object('result', result)
    //>>includeEnd('debug');
    var x = encoded.x
    var y = encoded.y
    var z = encoded.z
    var w = encoded.w
    //>>includeStart('debug', pragmas.debug);
    if (x < 0 || x > 255 || y < 0 || y > 255 || z < 0 || z > 255 || w < 0 || w > 255) {
      throw new RuntimeError.DeveloperError('x, y, z, and w must be unsigned normalized integers between 0 and 255')
    }
    //>>includeEnd('debug');

    var xOct16 = x * LEFT_SHIFT + y
    var yOct16 = z * LEFT_SHIFT + w
    return AttributeCompression.octDecodeInRange(xOct16, yOct16, 65535, result)
  }

  /**
   * Packs an oct encoded vector into a single floating-point number.
   *
   * @param {Cartesian2} encoded The oct encoded vector.
   * @returns {Number} The oct encoded vector packed into a single float.
   *
   */
  AttributeCompression.octPackFloat = function (encoded) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('encoded', encoded)
    //>>includeEnd('debug');
    return 256.0 * encoded.x + encoded.y
  }

  var scratchEncodeCart2 = new Matrix2.Cartesian2()

  /**
   * Encodes a normalized vector into 2 SNORM values in the range of [0-255] following the 'oct' encoding and
   * stores those values in a single float-point number.
   *
   * @param {Cartesian3} vector The normalized vector to be compressed into 2 byte 'oct' encoding.
   * @returns {Number} The 2 byte oct-encoded unit length vector.
   *
   * @exception {DeveloperError} vector must be normalized.
   */
  AttributeCompression.octEncodeFloat = function (vector) {
    AttributeCompression.octEncode(vector, scratchEncodeCart2)
    return AttributeCompression.octPackFloat(scratchEncodeCart2)
  }

  /**
   * Decodes a unit-length vector in 'oct' encoding packed in a floating-point number to a normalized 3-component vector.
   *
   * @param {Number} value The oct-encoded unit length vector stored as a single floating-point number.
   * @param {Cartesian3} result The decoded and normalized vector
   * @returns {Cartesian3} The decoded and normalized vector.
   *
   */
  AttributeCompression.octDecodeFloat = function (value, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('value', value)
    //>>includeEnd('debug');

    var temp = value / 256.0
    var x = Math.floor(temp)
    var y = (temp - x) * 256.0

    return AttributeCompression.octDecode(x, y, result)
  }

  /**
   * Encodes three normalized vectors into 6 SNORM values in the range of [0-255] following the 'oct' encoding and
   * packs those into two floating-point numbers.
   *
   * @param {Cartesian3} v1 A normalized vector to be compressed.
   * @param {Cartesian3} v2 A normalized vector to be compressed.
   * @param {Cartesian3} v3 A normalized vector to be compressed.
   * @param {Cartesian2} result The 'oct' encoded vectors packed into two floating-point numbers.
   * @returns {Cartesian2} The 'oct' encoded vectors packed into two floating-point numbers.
   *
   */
  AttributeCompression.octPack = function (v1, v2, v3, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('v1', v1)
    RuntimeError.Check.defined('v2', v2)
    RuntimeError.Check.defined('v3', v3)
    RuntimeError.Check.defined('result', result)
    //>>includeEnd('debug');

    var encoded1 = AttributeCompression.octEncodeFloat(v1)
    var encoded2 = AttributeCompression.octEncodeFloat(v2)

    var encoded3 = AttributeCompression.octEncode(v3, scratchEncodeCart2)
    result.x = 65536.0 * encoded3.x + encoded1
    result.y = 65536.0 * encoded3.y + encoded2
    return result
  }

  /**
   * Decodes three unit-length vectors in 'oct' encoding packed into a floating-point number to a normalized 3-component vector.
   *
   * @param {Cartesian2} packed The three oct-encoded unit length vectors stored as two floating-point number.
   * @param {Cartesian3} v1 One decoded and normalized vector.
   * @param {Cartesian3} v2 One decoded and normalized vector.
   * @param {Cartesian3} v3 One decoded and normalized vector.
   */
  AttributeCompression.octUnpack = function (packed, v1, v2, v3) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('packed', packed)
    RuntimeError.Check.defined('v1', v1)
    RuntimeError.Check.defined('v2', v2)
    RuntimeError.Check.defined('v3', v3)
    //>>includeEnd('debug');

    var temp = packed.x / 65536.0
    var x = Math.floor(temp)
    var encodedFloat1 = (temp - x) * 65536.0

    temp = packed.y / 65536.0
    var y = Math.floor(temp)
    var encodedFloat2 = (temp - y) * 65536.0

    AttributeCompression.octDecodeFloat(encodedFloat1, v1)
    AttributeCompression.octDecodeFloat(encodedFloat2, v2)
    AttributeCompression.octDecode(x, y, v3)
  }

  /**
   * Pack texture coordinates into a single float. The texture coordinates will only preserve 12 bits of precision.
   *
   * @param {Cartesian2} textureCoordinates The texture coordinates to compress.  Both coordinates must be in the range 0.0-1.0.
   * @returns {Number} The packed texture coordinates.
   *
   */
  AttributeCompression.compressTextureCoordinates = function (textureCoordinates) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('textureCoordinates', textureCoordinates)
    //>>includeEnd('debug');

    // Move x and y to the range 0-4095;
    var x = (textureCoordinates.x * 4095.0) | 0
    var y = (textureCoordinates.y * 4095.0) | 0
    return 4096.0 * x + y
  }

  /**
   * Decompresses texture coordinates that were packed into a single float.
   *
   * @param {Number} compressed The compressed texture coordinates.
   * @param {Cartesian2} result The decompressed texture coordinates.
   * @returns {Cartesian2} The modified result parameter.
   *
   */
  AttributeCompression.decompressTextureCoordinates = function (compressed, result) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('compressed', compressed)
    RuntimeError.Check.defined('result', result)
    //>>includeEnd('debug');

    var temp = compressed / 4096.0
    var xZeroTo4095 = Math.floor(temp)
    result.x = xZeroTo4095 / 4095.0
    result.y = (compressed - xZeroTo4095 * 4096) / 4095
    return result
  }

  function zigZagDecode(value) {
    return (value >> 1) ^ -(value & 1)
  }

  /**
   * Decodes delta and ZigZag encoded vertices. This modifies the buffers in place.
   *
   * @param {Uint16Array} uBuffer The buffer view of u values.
   * @param {Uint16Array} vBuffer The buffer view of v values.
   * @param {Uint16Array} [heightBuffer] The buffer view of height values.
   *
   * @see {@link https://github.com/CesiumGS/quantized-mesh|quantized-mesh-1.0 terrain format}
   */
  AttributeCompression.zigZagDeltaDecode = function (uBuffer, vBuffer, heightBuffer) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('uBuffer', uBuffer)
    RuntimeError.Check.defined('vBuffer', vBuffer)
    RuntimeError.Check.typeOf.number.equals('uBuffer.length', 'vBuffer.length', uBuffer.length, vBuffer.length)
    if (when.defined(heightBuffer)) {
      RuntimeError.Check.typeOf.number.equals('uBuffer.length', 'heightBuffer.length', uBuffer.length, heightBuffer.length)
    }
    //>>includeEnd('debug');

    var count = uBuffer.length

    var u = 0
    var v = 0
    var height = 0

    for (var i = 0; i < count; ++i) {
      u += zigZagDecode(uBuffer[i])
      v += zigZagDecode(vBuffer[i])

      uBuffer[i] = u
      vBuffer[i] = v

      if (when.defined(heightBuffer)) {
        height += zigZagDecode(heightBuffer[i])
        heightBuffer[i] = height
      }
    }
  }

  /**
   * Dequantizes a quantized typed array into a floating point typed array.
   *
   * @see {@link https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization#encoding-quantized-data}
   *
   * @param {Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array} typedArray The typed array for the quantized data.
   * @param {ComponentDatatype} componentDatatype The component datatype of the quantized data.
   * @param {AttributeType} type The attribute type of the quantized data.
   * @param {Number} count The number of attributes referenced in the dequantized array.
   *
   * @returns {Float32Array} The dequantized array.
   */
  AttributeCompression.dequantize = function (typedArray, componentDatatype, type, count) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('typedArray', typedArray)
    RuntimeError.Check.defined('componentDatatype', componentDatatype)
    RuntimeError.Check.defined('type', type)
    RuntimeError.Check.defined('count', count)
    //>>includeEnd('debug');

    var componentsPerAttribute = AttributeType$1.getNumberOfComponents(type)

    var divisor
    switch (componentDatatype) {
      case ComponentDatatype.ComponentDatatype.BYTE:
        divisor = 127.0
        break
      case ComponentDatatype.ComponentDatatype.UNSIGNED_BYTE:
        divisor = 255.0
        break
      case ComponentDatatype.ComponentDatatype.SHORT:
        divisor = 32767.0
        break
      case ComponentDatatype.ComponentDatatype.UNSIGNED_SHORT:
        divisor = 65535.0
        break
      case ComponentDatatype.ComponentDatatype.INT:
        divisor = 2147483647.0
        break
      case ComponentDatatype.ComponentDatatype.UNSIGNED_INT:
        divisor = 4294967295.0
        break
      //>>includeStart('debug', pragmas.debug);
      default:
        throw new RuntimeError.DeveloperError('Cannot dequantize component datatype: ' + componentDatatype)
      //>>includeEnd('debug');
    }

    var dequantizedTypedArray = new Float32Array(count * componentsPerAttribute)

    for (var i = 0; i < count; i++) {
      for (var j = 0; j < componentsPerAttribute; j++) {
        var index = i * componentsPerAttribute + j
        dequantizedTypedArray[index] = Math.max(typedArray[index] / divisor, -1.0)
      }
    }

    return dequantizedTypedArray
  }

  exports.AttributeCompression = AttributeCompression
})
//# sourceMappingURL=AttributeCompression-1f6679e1.js.map
