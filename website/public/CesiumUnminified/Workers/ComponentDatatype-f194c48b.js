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

define(['exports', './RuntimeError-346a3079', './when-4bbc8319', './WebGLConstants-1c8239cc'], function (
  exports,
  RuntimeError,
  when,
  WebGLConstants
) {
  'use strict'

  /* This file is automatically rebuilt by the Cesium build process. */
  /*
	  https://github.com/banksean wrapped Makoto Matsumoto and Takuji Nishimura's code in a namespace
	  so it's better encapsulated. Now you can have multiple random number generators
	  and they won't stomp all over eachother's state.

	  If you want to use this as a substitute for Math.random(), use the random()
	  method like so:

	  var m = new MersenneTwister();
	  var randomNumber = m.random();

	  You can also call the other genrand_{foo}() methods on the instance.

	  If you want to use a specific seed in order to get a repeatable random
	  sequence, pass an integer into the constructor:

	  var m = new MersenneTwister(123);

	  and that will always produce the same random sequence.

	  Sean McCullough (banksean@gmail.com)
	*/

  /*
	   A C-program for MT19937, with initialization improved 2002/1/26.
	   Coded by Takuji Nishimura and Makoto Matsumoto.

	   Before using, initialize the state by using init_seed(seed)
	   or init_by_array(init_key, key_length).

	   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
	   All rights reserved.

	   Redistribution and use in source and binary forms, with or without
	   modification, are permitted provided that the following conditions
	   are met:

	     1. Redistributions of source code must retain the above copyright
	        notice, this list of conditions and the following disclaimer.

	     2. Redistributions in binary form must reproduce the above copyright
	        notice, this list of conditions and the following disclaimer in the
	        documentation and/or other materials provided with the distribution.

	     3. The names of its contributors may not be used to endorse or promote
	        products derived from this software without specific prior written
	        permission.

	   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
	   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
	   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


	   Any feedback is very welcome.
	   http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html
	   email: m-mat @ math.sci.hiroshima-u.ac.jp (remove space)
	*/

  var MersenneTwister = function (seed) {
    if (seed == undefined) {
      seed = new Date().getTime()
    }

    /* Period parameters */
    this.N = 624
    this.M = 397
    this.MATRIX_A = 0x9908b0df /* constant vector a */
    this.UPPER_MASK = 0x80000000 /* most significant w-r bits */
    this.LOWER_MASK = 0x7fffffff /* least significant r bits */

    this.mt = new Array(this.N) /* the array for the state vector */
    this.mti = this.N + 1 /* mti==N+1 means mt[N] is not initialized */

    if (seed.constructor == Array) {
      this.init_by_array(seed, seed.length)
    } else {
      this.init_seed(seed)
    }
  }

  /* initializes mt[N] with a seed */
  /* origin name init_genrand */
  MersenneTwister.prototype.init_seed = function (s) {
    this.mt[0] = s >>> 0
    for (this.mti = 1; this.mti < this.N; this.mti++) {
      var s = this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30)
      this.mt[this.mti] = ((((s & 0xffff0000) >>> 16) * 1812433253) << 16) + (s & 0x0000ffff) * 1812433253 + this.mti
      /* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */
      /* In the previous versions, MSBs of the seed affect   */
      /* only MSBs of the array mt[].                        */
      /* 2002/01/09 modified by Makoto Matsumoto             */
      this.mt[this.mti] >>>= 0
      /* for >32 bit machines */
    }
  }

  /* initialize by an array with array-length */
  /* init_key is the array for initializing keys */
  /* key_length is its length */
  /* slight change for C++, 2004/2/26 */
  MersenneTwister.prototype.init_by_array = function (init_key, key_length) {
    var i, j, k
    this.init_seed(19650218)
    i = 1
    j = 0
    k = this.N > key_length ? this.N : key_length
    for (; k; k--) {
      var s = this.mt[i - 1] ^ (this.mt[i - 1] >>> 30)
      this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1664525) << 16) + (s & 0x0000ffff) * 1664525)) + init_key[j] + j /* non linear */
      this.mt[i] >>>= 0 /* for WORDSIZE > 32 machines */
      i++
      j++
      if (i >= this.N) {
        this.mt[0] = this.mt[this.N - 1]
        i = 1
      }
      if (j >= key_length) j = 0
    }
    for (k = this.N - 1; k; k--) {
      var s = this.mt[i - 1] ^ (this.mt[i - 1] >>> 30)
      this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1566083941) << 16) + (s & 0x0000ffff) * 1566083941)) - i /* non linear */
      this.mt[i] >>>= 0 /* for WORDSIZE > 32 machines */
      i++
      if (i >= this.N) {
        this.mt[0] = this.mt[this.N - 1]
        i = 1
      }
    }

    this.mt[0] = 0x80000000 /* MSB is 1; assuring non-zero initial array */
  }

  /* generates a random number on [0,0xffffffff]-interval */
  /* origin name genrand_int32 */
  MersenneTwister.prototype.random_int = function () {
    var y
    var mag01 = new Array(0x0, this.MATRIX_A)
    /* mag01[x] = x * MATRIX_A  for x=0,1 */

    if (this.mti >= this.N) {
      /* generate N words at one time */
      var kk

      if (this.mti == this.N + 1) /* if init_seed() has not been called, */ this.init_seed(5489) /* a default initial seed is used */

      for (kk = 0; kk < this.N - this.M; kk++) {
        y = (this.mt[kk] & this.UPPER_MASK) | (this.mt[kk + 1] & this.LOWER_MASK)
        this.mt[kk] = this.mt[kk + this.M] ^ (y >>> 1) ^ mag01[y & 0x1]
      }
      for (; kk < this.N - 1; kk++) {
        y = (this.mt[kk] & this.UPPER_MASK) | (this.mt[kk + 1] & this.LOWER_MASK)
        this.mt[kk] = this.mt[kk + (this.M - this.N)] ^ (y >>> 1) ^ mag01[y & 0x1]
      }
      y = (this.mt[this.N - 1] & this.UPPER_MASK) | (this.mt[0] & this.LOWER_MASK)
      this.mt[this.N - 1] = this.mt[this.M - 1] ^ (y >>> 1) ^ mag01[y & 0x1]

      this.mti = 0
    }

    y = this.mt[this.mti++]

    /* Tempering */
    y ^= y >>> 11
    y ^= (y << 7) & 0x9d2c5680
    y ^= (y << 15) & 0xefc60000
    y ^= y >>> 18

    return y >>> 0
  }

  /* generates a random number on [0,0x7fffffff]-interval */
  /* origin name genrand_int31 */
  MersenneTwister.prototype.random_int31 = function () {
    return this.random_int() >>> 1
  }

  /* generates a random number on [0,1]-real-interval */
  /* origin name genrand_real1 */
  MersenneTwister.prototype.random_incl = function () {
    return this.random_int() * (1.0 / 4294967295.0)
    /* divided by 2^32-1 */
  }

  /* generates a random number on [0,1)-real-interval */
  MersenneTwister.prototype.random = function () {
    return this.random_int() * (1.0 / 4294967296.0)
    /* divided by 2^32 */
  }

  /* generates a random number on (0,1)-real-interval */
  /* origin name genrand_real3 */
  MersenneTwister.prototype.random_excl = function () {
    return (this.random_int() + 0.5) * (1.0 / 4294967296.0)
    /* divided by 2^32 */
  }

  /* generates a random number on [0,1) with 53-bit resolution*/
  /* origin name genrand_res53 */
  MersenneTwister.prototype.random_long = function () {
    var a = this.random_int() >>> 5,
      b = this.random_int() >>> 6
    return (a * 67108864.0 + b) * (1.0 / 9007199254740992.0)
  }

  /* These real versions are due to Isaku Wada, 2002/01/09 added */

  var mersenneTwister = MersenneTwister

  /**
   * Math functions.
   *
   * @exports CesiumMath
   * @alias Math
   */
  var CesiumMath = {}

  /**
   * 0.1
   * @type {Number}
   * @constant
   */
  CesiumMath.EPSILON1 = 0.1

  /**
   * 0.01
   * @type {Number}
   * @constant
   */
  CesiumMath.EPSILON2 = 0.01

  /**
   * 0.001
   * @type {Number}
   * @constant
   */
  CesiumMath.EPSILON3 = 0.001

  /**
   * 0.0001
   * @type {Number}
   * @constant
   */
  CesiumMath.EPSILON4 = 0.0001

  /**
   * 0.00001
   * @type {Number}
   * @constant
   */
  CesiumMath.EPSILON5 = 0.00001

  /**
   * 0.000001
   * @type {Number}
   * @constant
   */
  CesiumMath.EPSILON6 = 0.000001

  /**
   * 0.0000001
   * @type {Number}
   * @constant
   */
  CesiumMath.EPSILON7 = 0.0000001

  /**
   * 0.00000001
   * @type {Number}
   * @constant
   */
  CesiumMath.EPSILON8 = 0.00000001

  /**
   * 0.000000001
   * @type {Number}
   * @constant
   */
  CesiumMath.EPSILON9 = 0.000000001

  /**
   * 0.0000000001
   * @type {Number}
   * @constant
   */
  CesiumMath.EPSILON10 = 0.0000000001

  /**
   * 0.00000000001
   * @type {Number}
   * @constant
   */
  CesiumMath.EPSILON11 = 0.00000000001

  /**
   * 0.000000000001
   * @type {Number}
   * @constant
   */
  CesiumMath.EPSILON12 = 0.000000000001

  /**
   * 0.0000000000001
   * @type {Number}
   * @constant
   */
  CesiumMath.EPSILON13 = 0.0000000000001

  /**
   * 0.00000000000001
   * @type {Number}
   * @constant
   */
  CesiumMath.EPSILON14 = 0.00000000000001

  /**
   * 0.000000000000001
   * @type {Number}
   * @constant
   */
  CesiumMath.EPSILON15 = 0.000000000000001

  /**
   * 0.0000000000000001
   * @type {Number}
   * @constant
   */
  CesiumMath.EPSILON16 = 0.0000000000000001

  /**
   * 0.00000000000000001
   * @type {Number}
   * @constant
   */
  CesiumMath.EPSILON17 = 0.00000000000000001

  /**
   * 0.000000000000000001
   * @type {Number}
   * @constant
   */
  CesiumMath.EPSILON18 = 0.000000000000000001

  /**
   * 0.0000000000000000001
   * @type {Number}
   * @constant
   */
  CesiumMath.EPSILON19 = 0.0000000000000000001

  /**
   * 0.00000000000000000001
   * @type {Number}
   * @constant
   */
  CesiumMath.EPSILON20 = 0.00000000000000000001

  /**
   * 0.000000000000000000001
   * @type {Number}
   * @constant
   */
  CesiumMath.EPSILON21 = 0.000000000000000000001

  /**
   * The gravitational parameter of the Earth in meters cubed
   * per second squared as defined by the WGS84 model: 3.986004418e14
   * @type {Number}
   * @constant
   */
  CesiumMath.GRAVITATIONALPARAMETER = 3.986004418e14

  /**
   * Radius of the sun in meters: 6.955e8
   * @type {Number}
   * @constant
   */
  CesiumMath.SOLAR_RADIUS = 6.955e8

  /**
   * The mean radius of the moon, according to the "Report of the IAU/IAG Working Group on
   * Cartographic Coordinates and Rotational Elements of the Planets and satellites: 2000",
   * Celestial Mechanics 82: 83-110, 2002.
   * @type {Number}
   * @constant
   */
  CesiumMath.LUNAR_RADIUS = 1737400.0

  /**
   * 64 * 1024
   * @type {Number}
   * @constant
   */
  CesiumMath.SIXTY_FOUR_KILOBYTES = 64 * 1024

  /**
   * 4 * 1024 * 1024 * 1024
   * @type {Number}
   * @constant
   */
  CesiumMath.FOUR_GIGABYTES = 4 * 1024 * 1024 * 1024

  /**
   * Returns the sign of the value; 1 if the value is positive, -1 if the value is
   * negative, or 0 if the value is 0.
   *
   * @function
   * @param {Number} value The value to return the sign of.
   * @returns {Number} The sign of value.
   */
  // eslint-disable-next-line es/no-math-sign
  CesiumMath.sign = when.defaultValue(Math.sign, function sign(value) {
    value = +value // coerce to number
    if (value === 0 || value !== value) {
      // zero or NaN
      return value
    }
    return value > 0 ? 1 : -1
  })

  /**
   * Returns 1.0 if the given value is positive or zero, and -1.0 if it is negative.
   * This is similar to {@link CesiumMath#sign} except that returns 1.0 instead of
   * 0.0 when the input value is 0.0.
   * @param {Number} value The value to return the sign of.
   * @returns {Number} The sign of value.
   */
  CesiumMath.signNotZero = function (value) {
    return value < 0.0 ? -1.0 : 1.0
  }

  /**
   * Converts a scalar value in the range [-1.0, 1.0] to a SNORM in the range [0, rangeMaximum]
   * @param {Number} value The scalar value in the range [-1.0, 1.0]
   * @param {Number} [rangeMaximum=255] The maximum value in the mapped range, 255 by default.
   * @returns {Number} A SNORM value, where 0 maps to -1.0 and rangeMaximum maps to 1.0.
   *
   * @see CesiumMath.fromSNorm
   */
  CesiumMath.toSNorm = function (value, rangeMaximum) {
    rangeMaximum = when.defaultValue(rangeMaximum, 255)
    return Math.round((CesiumMath.clamp(value, -1.0, 1.0) * 0.5 + 0.5) * rangeMaximum)
  }

  /**
   * Converts a SNORM value in the range [0, rangeMaximum] to a scalar in the range [-1.0, 1.0].
   * @param {Number} value SNORM value in the range [0, rangeMaximum]
   * @param {Number} [rangeMaximum=255] The maximum value in the SNORM range, 255 by default.
   * @returns {Number} Scalar in the range [-1.0, 1.0].
   *
   * @see CesiumMath.toSNorm
   */
  CesiumMath.fromSNorm = function (value, rangeMaximum) {
    rangeMaximum = when.defaultValue(rangeMaximum, 255)
    return (CesiumMath.clamp(value, 0.0, rangeMaximum) / rangeMaximum) * 2.0 - 1.0
  }

  /**
   * Converts a scalar value in the range [rangeMinimum, rangeMaximum] to a scalar in the range [0.0, 1.0]
   * @param {Number} value The scalar value in the range [rangeMinimum, rangeMaximum]
   * @param {Number} rangeMinimum The minimum value in the mapped range.
   * @param {Number} rangeMaximum The maximum value in the mapped range.
   * @returns {Number} A scalar value, where rangeMinimum maps to 0.0 and rangeMaximum maps to 1.0.
   */
  CesiumMath.normalize = function (value, rangeMinimum, rangeMaximum) {
    rangeMaximum = Math.max(rangeMaximum - rangeMinimum, 0.0)
    return rangeMaximum === 0.0 ? 0.0 : CesiumMath.clamp((value - rangeMinimum) / rangeMaximum, 0.0, 1.0)
  }

  /**
   * Returns the hyperbolic sine of a number.
   * The hyperbolic sine of <em>value</em> is defined to be
   * (<em>e<sup>x</sup>&nbsp;-&nbsp;e<sup>-x</sup></em>)/2.0
   * where <i>e</i> is Euler's number, approximately 2.71828183.
   *
   * <p>Special cases:
   *   <ul>
   *     <li>If the argument is NaN, then the result is NaN.</li>
   *
   *     <li>If the argument is infinite, then the result is an infinity
   *     with the same sign as the argument.</li>
   *
   *     <li>If the argument is zero, then the result is a zero with the
   *     same sign as the argument.</li>
   *   </ul>
   *</p>
   *
   * @function
   * @param {Number} value The number whose hyperbolic sine is to be returned.
   * @returns {Number} The hyperbolic sine of <code>value</code>.
   */
  // eslint-disable-next-line es/no-math-sinh
  CesiumMath.sinh = when.defaultValue(Math.sinh, function sinh(value) {
    return (Math.exp(value) - Math.exp(-value)) / 2.0
  })

  /**
   * Returns the hyperbolic cosine of a number.
   * The hyperbolic cosine of <strong>value</strong> is defined to be
   * (<em>e<sup>x</sup>&nbsp;+&nbsp;e<sup>-x</sup></em>)/2.0
   * where <i>e</i> is Euler's number, approximately 2.71828183.
   *
   * <p>Special cases:
   *   <ul>
   *     <li>If the argument is NaN, then the result is NaN.</li>
   *
   *     <li>If the argument is infinite, then the result is positive infinity.</li>
   *
   *     <li>If the argument is zero, then the result is 1.0.</li>
   *   </ul>
   *</p>
   *
   * @function
   * @param {Number} value The number whose hyperbolic cosine is to be returned.
   * @returns {Number} The hyperbolic cosine of <code>value</code>.
   */
  // eslint-disable-next-line es/no-math-cosh
  CesiumMath.cosh = when.defaultValue(Math.cosh, function cosh(value) {
    return (Math.exp(value) + Math.exp(-value)) / 2.0
  })

  /**
   * Computes the linear interpolation of two values.
   *
   * @param {Number} p The start value to interpolate.
   * @param {Number} q The end value to interpolate.
   * @param {Number} time The time of interpolation generally in the range <code>[0.0, 1.0]</code>.
   * @returns {Number} The linearly interpolated value.
   *
   * @example
   * var n = Cesium.Math.lerp(0.0, 2.0, 0.5); // returns 1.0
   */
  CesiumMath.lerp = function (p, q, time) {
    return (1.0 - time) * p + time * q
  }

  /**
   * pi
   *
   * @type {Number}
   * @constant
   */
  CesiumMath.PI = Math.PI

  /**
   * 1/pi
   *
   * @type {Number}
   * @constant
   */
  CesiumMath.ONE_OVER_PI = 1.0 / Math.PI

  /**
   * pi/2
   *
   * @type {Number}
   * @constant
   */
  CesiumMath.PI_OVER_TWO = Math.PI / 2.0

  /**
   * pi/3
   *
   * @type {Number}
   * @constant
   */
  CesiumMath.PI_OVER_THREE = Math.PI / 3.0

  /**
   * pi/4
   *
   * @type {Number}
   * @constant
   */
  CesiumMath.PI_OVER_FOUR = Math.PI / 4.0

  /**
   * pi/6
   *
   * @type {Number}
   * @constant
   */
  CesiumMath.PI_OVER_SIX = Math.PI / 6.0

  /**
   * 3pi/2
   *
   * @type {Number}
   * @constant
   */
  CesiumMath.THREE_PI_OVER_TWO = (3.0 * Math.PI) / 2.0

  /**
   * 2pi
   *
   * @type {Number}
   * @constant
   */
  CesiumMath.TWO_PI = 2.0 * Math.PI

  /**
   * 1/2pi
   *
   * @type {Number}
   * @constant
   */
  CesiumMath.ONE_OVER_TWO_PI = 1.0 / (2.0 * Math.PI)

  /**
   * The number of radians in a degree.
   *
   * @type {Number}
   * @constant
   */
  CesiumMath.RADIANS_PER_DEGREE = Math.PI / 180.0

  /**
   * The number of degrees in a radian.
   *
   * @type {Number}
   * @constant
   */
  CesiumMath.DEGREES_PER_RADIAN = 180.0 / Math.PI

  /**
   * The number of radians in an arc second.
   *
   * @type {Number}
   * @constant
   */
  CesiumMath.RADIANS_PER_ARCSECOND = CesiumMath.RADIANS_PER_DEGREE / 3600.0

  /**
   * Converts degrees to radians.
   * @param {Number} degrees The angle to convert in degrees.
   * @returns {Number} The corresponding angle in radians.
   */
  CesiumMath.toRadians = function (degrees) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(degrees)) {
      throw new RuntimeError.DeveloperError('degrees is required.')
    }
    //>>includeEnd('debug');
    return degrees * CesiumMath.RADIANS_PER_DEGREE
  }

  /**
   * Converts radians to degrees.
   * @param {Number} radians The angle to convert in radians.
   * @returns {Number} The corresponding angle in degrees.
   */
  CesiumMath.toDegrees = function (radians) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(radians)) {
      throw new RuntimeError.DeveloperError('radians is required.')
    }
    //>>includeEnd('debug');
    return radians * CesiumMath.DEGREES_PER_RADIAN
  }

  /**
   * Converts a longitude value, in radians, to the range [<code>-Math.PI</code>, <code>Math.PI</code>).
   *
   * @param {Number} angle The longitude value, in radians, to convert to the range [<code>-Math.PI</code>, <code>Math.PI</code>).
   * @returns {Number} The equivalent longitude value in the range [<code>-Math.PI</code>, <code>Math.PI</code>).
   *
   * @example
   * // Convert 270 degrees to -90 degrees longitude
   * var longitude = Cesium.Math.convertLongitudeRange(Cesium.Math.toRadians(270.0));
   */
  CesiumMath.convertLongitudeRange = function (angle) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(angle)) {
      throw new RuntimeError.DeveloperError('angle is required.')
    }
    //>>includeEnd('debug');
    var twoPi = CesiumMath.TWO_PI

    var simplified = angle - Math.floor(angle / twoPi) * twoPi

    if (simplified < -Math.PI) {
      return simplified + twoPi
    }
    if (simplified >= Math.PI) {
      return simplified - twoPi
    }

    return simplified
  }

  /**
   * Convenience function that clamps a latitude value, in radians, to the range [<code>-Math.PI/2</code>, <code>Math.PI/2</code>).
   * Useful for sanitizing data before use in objects requiring correct range.
   *
   * @param {Number} angle The latitude value, in radians, to clamp to the range [<code>-Math.PI/2</code>, <code>Math.PI/2</code>).
   * @returns {Number} The latitude value clamped to the range [<code>-Math.PI/2</code>, <code>Math.PI/2</code>).
   *
   * @example
   * // Clamp 108 degrees latitude to 90 degrees latitude
   * var latitude = Cesium.Math.clampToLatitudeRange(Cesium.Math.toRadians(108.0));
   */
  CesiumMath.clampToLatitudeRange = function (angle) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(angle)) {
      throw new RuntimeError.DeveloperError('angle is required.')
    }
    //>>includeEnd('debug');

    return CesiumMath.clamp(angle, -1 * CesiumMath.PI_OVER_TWO, CesiumMath.PI_OVER_TWO)
  }

  /**
   * Produces an angle in the range -Pi <= angle <= Pi which is equivalent to the provided angle.
   *
   * @param {Number} angle in radians
   * @returns {Number} The angle in the range [<code>-CesiumMath.PI</code>, <code>CesiumMath.PI</code>].
   */
  CesiumMath.negativePiToPi = function (angle) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(angle)) {
      throw new RuntimeError.DeveloperError('angle is required.')
    }
    //>>includeEnd('debug');
    if (angle >= -CesiumMath.PI && angle <= CesiumMath.PI) {
      // Early exit if the input is already inside the range. This avoids
      // unnecessary math which could introduce floating point error.
      return angle
    }
    return CesiumMath.zeroToTwoPi(angle + CesiumMath.PI) - CesiumMath.PI
  }

  /**
   * Produces an angle in the range 0 <= angle <= 2Pi which is equivalent to the provided angle.
   *
   * @param {Number} angle in radians
   * @returns {Number} The angle in the range [0, <code>CesiumMath.TWO_PI</code>].
   */
  CesiumMath.zeroToTwoPi = function (angle) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(angle)) {
      throw new RuntimeError.DeveloperError('angle is required.')
    }
    //>>includeEnd('debug');
    if (angle >= 0 && angle <= CesiumMath.TWO_PI) {
      // Early exit if the input is already inside the range. This avoids
      // unnecessary math which could introduce floating point error.
      return angle
    }
    var mod = CesiumMath.mod(angle, CesiumMath.TWO_PI)
    if (Math.abs(mod) < CesiumMath.EPSILON14 && Math.abs(angle) > CesiumMath.EPSILON14) {
      return CesiumMath.TWO_PI
    }
    return mod
  }

  /**
   * The modulo operation that also works for negative dividends.
   *
   * @param {Number} m The dividend.
   * @param {Number} n The divisor.
   * @returns {Number} The remainder.
   */
  CesiumMath.mod = function (m, n) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(m)) {
      throw new RuntimeError.DeveloperError('m is required.')
    }
    if (!when.defined(n)) {
      throw new RuntimeError.DeveloperError('n is required.')
    }
    if (n === 0.0) {
      throw new RuntimeError.DeveloperError('divisor cannot be 0.')
    }
    //>>includeEnd('debug');
    if (CesiumMath.sign(m) === CesiumMath.sign(n) && Math.abs(m) < Math.abs(n)) {
      // Early exit if the input does not need to be modded. This avoids
      // unnecessary math which could introduce floating point error.
      return m
    }

    return ((m % n) + n) % n
  }

  /**
   * Determines if two values are equal using an absolute or relative tolerance test. This is useful
   * to avoid problems due to roundoff error when comparing floating-point values directly. The values are
   * first compared using an absolute tolerance test. If that fails, a relative tolerance test is performed.
   * Use this test if you are unsure of the magnitudes of left and right.
   *
   * @param {Number} left The first value to compare.
   * @param {Number} right The other value to compare.
   * @param {Number} [relativeEpsilon=0] The maximum inclusive delta between <code>left</code> and <code>right</code> for the relative tolerance test.
   * @param {Number} [absoluteEpsilon=relativeEpsilon] The maximum inclusive delta between <code>left</code> and <code>right</code> for the absolute tolerance test.
   * @returns {Boolean} <code>true</code> if the values are equal within the epsilon; otherwise, <code>false</code>.
   *
   * @example
   * var a = Cesium.Math.equalsEpsilon(0.0, 0.01, Cesium.Math.EPSILON2); // true
   * var b = Cesium.Math.equalsEpsilon(0.0, 0.1, Cesium.Math.EPSILON2);  // false
   * var c = Cesium.Math.equalsEpsilon(3699175.1634344, 3699175.2, Cesium.Math.EPSILON7); // true
   * var d = Cesium.Math.equalsEpsilon(3699175.1634344, 3699175.2, Cesium.Math.EPSILON9); // false
   */
  CesiumMath.equalsEpsilon = function (left, right, relativeEpsilon, absoluteEpsilon) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(left)) {
      throw new RuntimeError.DeveloperError('left is required.')
    }
    if (!when.defined(right)) {
      throw new RuntimeError.DeveloperError('right is required.')
    }
    //>>includeEnd('debug');

    relativeEpsilon = when.defaultValue(relativeEpsilon, 0.0)
    absoluteEpsilon = when.defaultValue(absoluteEpsilon, relativeEpsilon)
    var absDiff = Math.abs(left - right)
    return absDiff <= absoluteEpsilon || absDiff <= relativeEpsilon * Math.max(Math.abs(left), Math.abs(right))
  }

  /**
   * Determines if the left value is less than the right value. If the two values are within
   * <code>absoluteEpsilon</code> of each other, they are considered equal and this function returns false.
   *
   * @param {Number} left The first number to compare.
   * @param {Number} right The second number to compare.
   * @param {Number} absoluteEpsilon The absolute epsilon to use in comparison.
   * @returns {Boolean} <code>true</code> if <code>left</code> is less than <code>right</code> by more than
   *          <code>absoluteEpsilon<code>. <code>false</code> if <code>left</code> is greater or if the two
   *          values are nearly equal.
   */
  CesiumMath.lessThan = function (left, right, absoluteEpsilon) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(left)) {
      throw new RuntimeError.DeveloperError('first is required.')
    }
    if (!when.defined(right)) {
      throw new RuntimeError.DeveloperError('second is required.')
    }
    if (!when.defined(absoluteEpsilon)) {
      throw new RuntimeError.DeveloperError('absoluteEpsilon is required.')
    }
    //>>includeEnd('debug');
    return left - right < -absoluteEpsilon
  }

  /**
   * Determines if the left value is less than or equal to the right value. If the two values are within
   * <code>absoluteEpsilon</code> of each other, they are considered equal and this function returns true.
   *
   * @param {Number} left The first number to compare.
   * @param {Number} right The second number to compare.
   * @param {Number} absoluteEpsilon The absolute epsilon to use in comparison.
   * @returns {Boolean} <code>true</code> if <code>left</code> is less than <code>right</code> or if the
   *          the values are nearly equal.
   */
  CesiumMath.lessThanOrEquals = function (left, right, absoluteEpsilon) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(left)) {
      throw new RuntimeError.DeveloperError('first is required.')
    }
    if (!when.defined(right)) {
      throw new RuntimeError.DeveloperError('second is required.')
    }
    if (!when.defined(absoluteEpsilon)) {
      throw new RuntimeError.DeveloperError('absoluteEpsilon is required.')
    }
    //>>includeEnd('debug');
    return left - right < absoluteEpsilon
  }

  /**
   * Determines if the left value is greater the right value. If the two values are within
   * <code>absoluteEpsilon</code> of each other, they are considered equal and this function returns false.
   *
   * @param {Number} left The first number to compare.
   * @param {Number} right The second number to compare.
   * @param {Number} absoluteEpsilon The absolute epsilon to use in comparison.
   * @returns {Boolean} <code>true</code> if <code>left</code> is greater than <code>right</code> by more than
   *          <code>absoluteEpsilon<code>. <code>false</code> if <code>left</code> is less or if the two
   *          values are nearly equal.
   */
  CesiumMath.greaterThan = function (left, right, absoluteEpsilon) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(left)) {
      throw new RuntimeError.DeveloperError('first is required.')
    }
    if (!when.defined(right)) {
      throw new RuntimeError.DeveloperError('second is required.')
    }
    if (!when.defined(absoluteEpsilon)) {
      throw new RuntimeError.DeveloperError('absoluteEpsilon is required.')
    }
    //>>includeEnd('debug');
    return left - right > absoluteEpsilon
  }

  /**
   * Determines if the left value is greater than or equal to the right value. If the two values are within
   * <code>absoluteEpsilon</code> of each other, they are considered equal and this function returns true.
   *
   * @param {Number} left The first number to compare.
   * @param {Number} right The second number to compare.
   * @param {Number} absoluteEpsilon The absolute epsilon to use in comparison.
   * @returns {Boolean} <code>true</code> if <code>left</code> is greater than <code>right</code> or if the
   *          the values are nearly equal.
   */
  CesiumMath.greaterThanOrEquals = function (left, right, absoluteEpsilon) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(left)) {
      throw new RuntimeError.DeveloperError('first is required.')
    }
    if (!when.defined(right)) {
      throw new RuntimeError.DeveloperError('second is required.')
    }
    if (!when.defined(absoluteEpsilon)) {
      throw new RuntimeError.DeveloperError('absoluteEpsilon is required.')
    }
    //>>includeEnd('debug');
    return left - right > -absoluteEpsilon
  }

  var factorials = [1]

  /**
   * Computes the factorial of the provided number.
   *
   * @param {Number} n The number whose factorial is to be computed.
   * @returns {Number} The factorial of the provided number or undefined if the number is less than 0.
   *
   * @exception {DeveloperError} A number greater than or equal to 0 is required.
   *
   *
   * @example
   * //Compute 7!, which is equal to 5040
   * var computedFactorial = Cesium.Math.factorial(7);
   *
   * @see {@link http://en.wikipedia.org/wiki/Factorial|Factorial on Wikipedia}
   */
  CesiumMath.factorial = function (n) {
    //>>includeStart('debug', pragmas.debug);
    if (typeof n !== 'number' || n < 0) {
      throw new RuntimeError.DeveloperError('A number greater than or equal to 0 is required.')
    }
    //>>includeEnd('debug');

    var length = factorials.length
    if (n >= length) {
      var sum = factorials[length - 1]
      for (var i = length; i <= n; i++) {
        var next = sum * i
        factorials.push(next)
        sum = next
      }
    }
    return factorials[n]
  }

  /**
   * Increments a number with a wrapping to a minimum value if the number exceeds the maximum value.
   *
   * @param {Number} [n] The number to be incremented.
   * @param {Number} [maximumValue] The maximum incremented value before rolling over to the minimum value.
   * @param {Number} [minimumValue=0.0] The number reset to after the maximum value has been exceeded.
   * @returns {Number} The incremented number.
   *
   * @exception {DeveloperError} Maximum value must be greater than minimum value.
   *
   * @example
   * var n = Cesium.Math.incrementWrap(5, 10, 0); // returns 6
   * var n = Cesium.Math.incrementWrap(10, 10, 0); // returns 0
   */
  CesiumMath.incrementWrap = function (n, maximumValue, minimumValue) {
    minimumValue = when.defaultValue(minimumValue, 0.0)

    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(n)) {
      throw new RuntimeError.DeveloperError('n is required.')
    }
    if (maximumValue <= minimumValue) {
      throw new RuntimeError.DeveloperError('maximumValue must be greater than minimumValue.')
    }
    //>>includeEnd('debug');

    ++n
    if (n > maximumValue) {
      n = minimumValue
    }
    return n
  }

  /**
   * Determines if a non-negative integer is a power of two.
   * The maximum allowed input is (2^32)-1 due to 32-bit bitwise operator limitation in Javascript.
   *
   * @param {Number} n The integer to test in the range [0, (2^32)-1].
   * @returns {Boolean} <code>true</code> if the number if a power of two; otherwise, <code>false</code>.
   *
   * @exception {DeveloperError} A number between 0 and (2^32)-1 is required.
   *
   * @example
   * var t = Cesium.Math.isPowerOfTwo(16); // true
   * var f = Cesium.Math.isPowerOfTwo(20); // false
   */
  CesiumMath.isPowerOfTwo = function (n) {
    //>>includeStart('debug', pragmas.debug);
    if (typeof n !== 'number' || n < 0 || n > 4294967295) {
      throw new RuntimeError.DeveloperError('A number between 0 and (2^32)-1 is required.')
    }
    //>>includeEnd('debug');

    return n !== 0 && (n & (n - 1)) === 0
  }

  /**
   * Computes the next power-of-two integer greater than or equal to the provided non-negative integer.
   * The maximum allowed input is 2^31 due to 32-bit bitwise operator limitation in Javascript.
   *
   * @param {Number} n The integer to test in the range [0, 2^31].
   * @returns {Number} The next power-of-two integer.
   *
   * @exception {DeveloperError} A number between 0 and 2^31 is required.
   *
   * @example
   * var n = Cesium.Math.nextPowerOfTwo(29); // 32
   * var m = Cesium.Math.nextPowerOfTwo(32); // 32
   */
  CesiumMath.nextPowerOfTwo = function (n) {
    //>>includeStart('debug', pragmas.debug);
    if (typeof n !== 'number' || n < 0 || n > 2147483648) {
      throw new RuntimeError.DeveloperError('A number between 0 and 2^31 is required.')
    }
    //>>includeEnd('debug');

    // From http://graphics.stanford.edu/~seander/bithacks.html#RoundUpPowerOf2
    --n
    n |= n >> 1
    n |= n >> 2
    n |= n >> 4
    n |= n >> 8
    n |= n >> 16
    ++n

    return n
  }

  /**
   * Computes the previous power-of-two integer less than or equal to the provided non-negative integer.
   * The maximum allowed input is (2^32)-1 due to 32-bit bitwise operator limitation in Javascript.
   *
   * @param {Number} n The integer to test in the range [0, (2^32)-1].
   * @returns {Number} The previous power-of-two integer.
   *
   * @exception {DeveloperError} A number between 0 and (2^32)-1 is required.
   *
   * @example
   * var n = Cesium.Math.previousPowerOfTwo(29); // 16
   * var m = Cesium.Math.previousPowerOfTwo(32); // 32
   */
  CesiumMath.previousPowerOfTwo = function (n) {
    //>>includeStart('debug', pragmas.debug);
    if (typeof n !== 'number' || n < 0 || n > 4294967295) {
      throw new RuntimeError.DeveloperError('A number between 0 and (2^32)-1 is required.')
    }
    //>>includeEnd('debug');

    n |= n >> 1
    n |= n >> 2
    n |= n >> 4
    n |= n >> 8
    n |= n >> 16
    n |= n >> 32

    // The previous bitwise operations implicitly convert to signed 32-bit. Use `>>>` to convert to unsigned
    n = (n >>> 0) - (n >>> 1)

    return n
  }

  /**
   * Constraint a value to lie between two values.
   *
   * @param {Number} value The value to constrain.
   * @param {Number} min The minimum value.
   * @param {Number} max The maximum value.
   * @returns {Number} The value clamped so that min <= value <= max.
   */
  CesiumMath.clamp = function (value, min, max) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(value)) {
      throw new RuntimeError.DeveloperError('value is required')
    }
    if (!when.defined(min)) {
      throw new RuntimeError.DeveloperError('min is required.')
    }
    if (!when.defined(max)) {
      throw new RuntimeError.DeveloperError('max is required.')
    }
    //>>includeEnd('debug');
    return value < min ? min : value > max ? max : value
  }

  var randomNumberGenerator = new mersenneTwister()

  /**
   * Sets the seed used by the random number generator
   * in {@link CesiumMath#nextRandomNumber}.
   *
   * @param {Number} seed An integer used as the seed.
   */
  CesiumMath.setRandomNumberSeed = function (seed) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(seed)) {
      throw new RuntimeError.DeveloperError('seed is required.')
    }
    //>>includeEnd('debug');

    randomNumberGenerator = new mersenneTwister(seed)
  }

  /**
   * Generates a random floating point number in the range of [0.0, 1.0)
   * using a Mersenne twister.
   *
   * @returns {Number} A random number in the range of [0.0, 1.0).
   *
   * @see CesiumMath.setRandomNumberSeed
   * @see {@link http://en.wikipedia.org/wiki/Mersenne_twister|Mersenne twister on Wikipedia}
   */
  CesiumMath.nextRandomNumber = function () {
    return randomNumberGenerator.random()
  }

  /**
   * Generates a random number between two numbers.
   *
   * @param {Number} min The minimum value.
   * @param {Number} max The maximum value.
   * @returns {Number} A random number between the min and max.
   */
  CesiumMath.randomBetween = function (min, max) {
    return CesiumMath.nextRandomNumber() * (max - min) + min
  }

  /**
   * Computes <code>Math.acos(value)</code>, but first clamps <code>value</code> to the range [-1.0, 1.0]
   * so that the function will never return NaN.
   *
   * @param {Number} value The value for which to compute acos.
   * @returns {Number} The acos of the value if the value is in the range [-1.0, 1.0], or the acos of -1.0 or 1.0,
   *          whichever is closer, if the value is outside the range.
   */
  CesiumMath.acosClamped = function (value) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(value)) {
      throw new RuntimeError.DeveloperError('value is required.')
    }
    //>>includeEnd('debug');
    return Math.acos(CesiumMath.clamp(value, -1.0, 1.0))
  }

  /**
   * Computes <code>Math.asin(value)</code>, but first clamps <code>value</code> to the range [-1.0, 1.0]
   * so that the function will never return NaN.
   *
   * @param {Number} value The value for which to compute asin.
   * @returns {Number} The asin of the value if the value is in the range [-1.0, 1.0], or the asin of -1.0 or 1.0,
   *          whichever is closer, if the value is outside the range.
   */
  CesiumMath.asinClamped = function (value) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(value)) {
      throw new RuntimeError.DeveloperError('value is required.')
    }
    //>>includeEnd('debug');
    return Math.asin(CesiumMath.clamp(value, -1.0, 1.0))
  }

  /**
   * Finds the chord length between two points given the circle's radius and the angle between the points.
   *
   * @param {Number} angle The angle between the two points.
   * @param {Number} radius The radius of the circle.
   * @returns {Number} The chord length.
   */
  CesiumMath.chordLength = function (angle, radius) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(angle)) {
      throw new RuntimeError.DeveloperError('angle is required.')
    }
    if (!when.defined(radius)) {
      throw new RuntimeError.DeveloperError('radius is required.')
    }
    //>>includeEnd('debug');
    return 2.0 * radius * Math.sin(angle * 0.5)
  }

  /**
   * Finds the logarithm of a number to a base.
   *
   * @param {Number} number The number.
   * @param {Number} base The base.
   * @returns {Number} The result.
   */
  CesiumMath.logBase = function (number, base) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(number)) {
      throw new RuntimeError.DeveloperError('number is required.')
    }
    if (!when.defined(base)) {
      throw new RuntimeError.DeveloperError('base is required.')
    }
    //>>includeEnd('debug');
    return Math.log(number) / Math.log(base)
  }

  /**
   * Finds the cube root of a number.
   * Returns NaN if <code>number</code> is not provided.
   *
   * @function
   * @param {Number} [number] The number.
   * @returns {Number} The result.
   */
  // eslint-disable-next-line es/no-math-cbrt
  CesiumMath.cbrt = when.defaultValue(Math.cbrt, function cbrt(number) {
    var result = Math.pow(Math.abs(number), 1.0 / 3.0)
    return number < 0.0 ? -result : result
  })

  /**
   * Finds the base 2 logarithm of a number.
   *
   * @function
   * @param {Number} number The number.
   * @returns {Number} The result.
   */
  // eslint-disable-next-line es/no-math-log2
  CesiumMath.log2 = when.defaultValue(Math.log2, function log2(number) {
    return Math.log(number) * Math.LOG2E
  })

  /**
   * @private
   */
  CesiumMath.fog = function (distanceToCamera, density) {
    var scalar = distanceToCamera * density
    return 1.0 - Math.exp(-(scalar * scalar))
  }

  /**
   * Computes a fast approximation of Atan for input in the range [-1, 1].
   *
   * Based on Michal Drobot's approximation from ShaderFastLibs,
   * which in turn is based on "Efficient approximations for the arctangent function,"
   * Rajan, S. Sichun Wang Inkol, R. Joyal, A., May 2006.
   * Adapted from ShaderFastLibs under MIT License.
   *
   * @param {Number} x An input number in the range [-1, 1]
   * @returns {Number} An approximation of atan(x)
   */
  CesiumMath.fastApproximateAtan = function (x) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number('x', x)
    //>>includeEnd('debug');

    return x * (-0.1784 * Math.abs(x) - 0.0663 * x * x + 1.0301)
  }

  /**
   * Computes a fast approximation of Atan2(x, y) for arbitrary input scalars.
   *
   * Range reduction math based on nvidia's cg reference implementation: http://developer.download.nvidia.com/cg/atan2.html
   *
   * @param {Number} x An input number that isn't zero if y is zero.
   * @param {Number} y An input number that isn't zero if x is zero.
   * @returns {Number} An approximation of atan2(x, y)
   */
  CesiumMath.fastApproximateAtan2 = function (x, y) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.typeOf.number('x', x)
    RuntimeError.Check.typeOf.number('y', y)
    //>>includeEnd('debug');

    // atan approximations are usually only reliable over [-1, 1]
    // So reduce the range by flipping whether x or y is on top based on which is bigger.
    var opposite
    var adjacent
    var t = Math.abs(x) // t used as swap and atan result.
    opposite = Math.abs(y)
    adjacent = Math.max(t, opposite)
    opposite = Math.min(t, opposite)

    var oppositeOverAdjacent = opposite / adjacent
    //>>includeStart('debug', pragmas.debug);
    if (isNaN(oppositeOverAdjacent)) {
      throw new RuntimeError.DeveloperError('either x or y must be nonzero')
    }
    //>>includeEnd('debug');
    t = CesiumMath.fastApproximateAtan(oppositeOverAdjacent)

    // Undo range reduction
    t = Math.abs(y) > Math.abs(x) ? CesiumMath.PI_OVER_TWO - t : t
    t = x < 0.0 ? CesiumMath.PI - t : t
    t = y < 0.0 ? -t : t
    return t
  }

  /**
   * WebGL component datatypes.  Components are intrinsics,
   * which form attributes, which form vertices.
   *
   * @enum {Number}
   */
  var ComponentDatatype = {
    /**
     * 8-bit signed byte corresponding to <code>gl.BYTE</code> and the type
     * of an element in <code>Int8Array</code>.
     *
     * @type {Number}
     * @constant
     */
    BYTE: WebGLConstants.WebGLConstants.BYTE,

    /**
     * 8-bit unsigned byte corresponding to <code>UNSIGNED_BYTE</code> and the type
     * of an element in <code>Uint8Array</code>.
     *
     * @type {Number}
     * @constant
     */
    UNSIGNED_BYTE: WebGLConstants.WebGLConstants.UNSIGNED_BYTE,

    /**
     * 16-bit signed short corresponding to <code>SHORT</code> and the type
     * of an element in <code>Int16Array</code>.
     *
     * @type {Number}
     * @constant
     */
    SHORT: WebGLConstants.WebGLConstants.SHORT,

    /**
     * 16-bit unsigned short corresponding to <code>UNSIGNED_SHORT</code> and the type
     * of an element in <code>Uint16Array</code>.
     *
     * @type {Number}
     * @constant
     */
    UNSIGNED_SHORT: WebGLConstants.WebGLConstants.UNSIGNED_SHORT,

    /**
     * 32-bit signed int corresponding to <code>INT</code> and the type
     * of an element in <code>Int32Array</code>.
     *
     * @memberOf ComponentDatatype
     *
     * @type {Number}
     * @constant
     */
    INT: WebGLConstants.WebGLConstants.INT,

    /**
     * 32-bit unsigned int corresponding to <code>UNSIGNED_INT</code> and the type
     * of an element in <code>Uint32Array</code>.
     *
     * @memberOf ComponentDatatype
     *
     * @type {Number}
     * @constant
     */
    UNSIGNED_INT: WebGLConstants.WebGLConstants.UNSIGNED_INT,

    /**
     * 32-bit floating-point corresponding to <code>FLOAT</code> and the type
     * of an element in <code>Float32Array</code>.
     *
     * @type {Number}
     * @constant
     */
    FLOAT: WebGLConstants.WebGLConstants.FLOAT,

    /**
     * 64-bit floating-point corresponding to <code>gl.DOUBLE</code> (in Desktop OpenGL;
     * this is not supported in WebGL, and is emulated in Cesium via {@link GeometryPipeline.encodeAttribute})
     * and the type of an element in <code>Float64Array</code>.
     *
     * @memberOf ComponentDatatype
     *
     * @type {Number}
     * @constant
     * @default 0x140A
     */
    DOUBLE: WebGLConstants.WebGLConstants.DOUBLE
  }

  /**
   * Returns the size, in bytes, of the corresponding datatype.
   *
   * @param {ComponentDatatype} componentDatatype The component datatype to get the size of.
   * @returns {Number} The size in bytes.
   *
   * @exception {DeveloperError} componentDatatype is not a valid value.
   *
   * @example
   * // Returns Int8Array.BYTES_PER_ELEMENT
   * var size = Cesium.ComponentDatatype.getSizeInBytes(Cesium.ComponentDatatype.BYTE);
   */
  ComponentDatatype.getSizeInBytes = function (componentDatatype) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(componentDatatype)) {
      throw new RuntimeError.DeveloperError('value is required.')
    }
    //>>includeEnd('debug');

    switch (componentDatatype) {
      case ComponentDatatype.BYTE:
        return Int8Array.BYTES_PER_ELEMENT
      case ComponentDatatype.UNSIGNED_BYTE:
        return Uint8Array.BYTES_PER_ELEMENT
      case ComponentDatatype.SHORT:
        return Int16Array.BYTES_PER_ELEMENT
      case ComponentDatatype.UNSIGNED_SHORT:
        return Uint16Array.BYTES_PER_ELEMENT
      case ComponentDatatype.INT:
        return Int32Array.BYTES_PER_ELEMENT
      case ComponentDatatype.UNSIGNED_INT:
        return Uint32Array.BYTES_PER_ELEMENT
      case ComponentDatatype.FLOAT:
        return Float32Array.BYTES_PER_ELEMENT
      case ComponentDatatype.DOUBLE:
        return Float64Array.BYTES_PER_ELEMENT
      //>>includeStart('debug', pragmas.debug);
      default:
        throw new RuntimeError.DeveloperError('componentDatatype is not a valid value.')
      //>>includeEnd('debug');
    }
  }

  /**
   * Gets the {@link ComponentDatatype} for the provided TypedArray instance.
   *
   * @param {Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} array The typed array.
   * @returns {ComponentDatatype} The ComponentDatatype for the provided array, or undefined if the array is not a TypedArray.
   */
  ComponentDatatype.fromTypedArray = function (array) {
    if (array instanceof Int8Array) {
      return ComponentDatatype.BYTE
    }
    if (array instanceof Uint8Array) {
      return ComponentDatatype.UNSIGNED_BYTE
    }
    if (array instanceof Int16Array) {
      return ComponentDatatype.SHORT
    }
    if (array instanceof Uint16Array) {
      return ComponentDatatype.UNSIGNED_SHORT
    }
    if (array instanceof Int32Array) {
      return ComponentDatatype.INT
    }
    if (array instanceof Uint32Array) {
      return ComponentDatatype.UNSIGNED_INT
    }
    if (array instanceof Float32Array) {
      return ComponentDatatype.FLOAT
    }
    if (array instanceof Float64Array) {
      return ComponentDatatype.DOUBLE
    }
  }

  /**
   * Validates that the provided component datatype is a valid {@link ComponentDatatype}
   *
   * @param {ComponentDatatype} componentDatatype The component datatype to validate.
   * @returns {Boolean} <code>true</code> if the provided component datatype is a valid value; otherwise, <code>false</code>.
   *
   * @example
   * if (!Cesium.ComponentDatatype.validate(componentDatatype)) {
   *   throw new Cesium.DeveloperError('componentDatatype must be a valid value.');
   * }
   */
  ComponentDatatype.validate = function (componentDatatype) {
    return (
      when.defined(componentDatatype) &&
      (componentDatatype === ComponentDatatype.BYTE ||
        componentDatatype === ComponentDatatype.UNSIGNED_BYTE ||
        componentDatatype === ComponentDatatype.SHORT ||
        componentDatatype === ComponentDatatype.UNSIGNED_SHORT ||
        componentDatatype === ComponentDatatype.INT ||
        componentDatatype === ComponentDatatype.UNSIGNED_INT ||
        componentDatatype === ComponentDatatype.FLOAT ||
        componentDatatype === ComponentDatatype.DOUBLE)
    )
  }

  /**
   * Creates a typed array corresponding to component data type.
   *
   * @param {ComponentDatatype} componentDatatype The component data type.
   * @param {Number|Array} valuesOrLength The length of the array to create or an array.
   * @returns {Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} A typed array.
   *
   * @exception {DeveloperError} componentDatatype is not a valid value.
   *
   * @example
   * // creates a Float32Array with length of 100
   * var typedArray = Cesium.ComponentDatatype.createTypedArray(Cesium.ComponentDatatype.FLOAT, 100);
   */
  ComponentDatatype.createTypedArray = function (componentDatatype, valuesOrLength) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(componentDatatype)) {
      throw new RuntimeError.DeveloperError('componentDatatype is required.')
    }
    if (!when.defined(valuesOrLength)) {
      throw new RuntimeError.DeveloperError('valuesOrLength is required.')
    }
    //>>includeEnd('debug');

    switch (componentDatatype) {
      case ComponentDatatype.BYTE:
        return new Int8Array(valuesOrLength)
      case ComponentDatatype.UNSIGNED_BYTE:
        return new Uint8Array(valuesOrLength)
      case ComponentDatatype.SHORT:
        return new Int16Array(valuesOrLength)
      case ComponentDatatype.UNSIGNED_SHORT:
        return new Uint16Array(valuesOrLength)
      case ComponentDatatype.INT:
        return new Int32Array(valuesOrLength)
      case ComponentDatatype.UNSIGNED_INT:
        return new Uint32Array(valuesOrLength)
      case ComponentDatatype.FLOAT:
        return new Float32Array(valuesOrLength)
      case ComponentDatatype.DOUBLE:
        return new Float64Array(valuesOrLength)
      //>>includeStart('debug', pragmas.debug);
      default:
        throw new RuntimeError.DeveloperError('componentDatatype is not a valid value.')
      //>>includeEnd('debug');
    }
  }

  /**
   * Creates a typed view of an array of bytes.
   *
   * @param {ComponentDatatype} componentDatatype The type of the view to create.
   * @param {ArrayBuffer} buffer The buffer storage to use for the view.
   * @param {Number} [byteOffset] The offset, in bytes, to the first element in the view.
   * @param {Number} [length] The number of elements in the view.
   * @returns {Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} A typed array view of the buffer.
   *
   * @exception {DeveloperError} componentDatatype is not a valid value.
   */
  ComponentDatatype.createArrayBufferView = function (componentDatatype, buffer, byteOffset, length) {
    //>>includeStart('debug', pragmas.debug);
    if (!when.defined(componentDatatype)) {
      throw new RuntimeError.DeveloperError('componentDatatype is required.')
    }
    if (!when.defined(buffer)) {
      throw new RuntimeError.DeveloperError('buffer is required.')
    }
    //>>includeEnd('debug');

    byteOffset = when.defaultValue(byteOffset, 0)
    length = when.defaultValue(length, (buffer.byteLength - byteOffset) / ComponentDatatype.getSizeInBytes(componentDatatype))

    switch (componentDatatype) {
      case ComponentDatatype.BYTE:
        return new Int8Array(buffer, byteOffset, length)
      case ComponentDatatype.UNSIGNED_BYTE:
        return new Uint8Array(buffer, byteOffset, length)
      case ComponentDatatype.SHORT:
        return new Int16Array(buffer, byteOffset, length)
      case ComponentDatatype.UNSIGNED_SHORT:
        return new Uint16Array(buffer, byteOffset, length)
      case ComponentDatatype.INT:
        return new Int32Array(buffer, byteOffset, length)
      case ComponentDatatype.UNSIGNED_INT:
        return new Uint32Array(buffer, byteOffset, length)
      case ComponentDatatype.FLOAT:
        return new Float32Array(buffer, byteOffset, length)
      case ComponentDatatype.DOUBLE:
        return new Float64Array(buffer, byteOffset, length)
      //>>includeStart('debug', pragmas.debug);
      default:
        throw new RuntimeError.DeveloperError('componentDatatype is not a valid value.')
      //>>includeEnd('debug');
    }
  }

  /**
   * Get the ComponentDatatype from its name.
   *
   * @param {String} name The name of the ComponentDatatype.
   * @returns {ComponentDatatype} The ComponentDatatype.
   *
   * @exception {DeveloperError} name is not a valid value.
   */
  ComponentDatatype.fromName = function (name) {
    switch (name) {
      case 'BYTE':
        return ComponentDatatype.BYTE
      case 'UNSIGNED_BYTE':
        return ComponentDatatype.UNSIGNED_BYTE
      case 'SHORT':
        return ComponentDatatype.SHORT
      case 'UNSIGNED_SHORT':
        return ComponentDatatype.UNSIGNED_SHORT
      case 'INT':
        return ComponentDatatype.INT
      case 'UNSIGNED_INT':
        return ComponentDatatype.UNSIGNED_INT
      case 'FLOAT':
        return ComponentDatatype.FLOAT
      case 'DOUBLE':
        return ComponentDatatype.DOUBLE
      //>>includeStart('debug', pragmas.debug);
      default:
        throw new RuntimeError.DeveloperError('name is not a valid value.')
      //>>includeEnd('debug');
    }
  }
  var ComponentDatatype$1 = Object.freeze(ComponentDatatype)

  exports.CesiumMath = CesiumMath
  exports.ComponentDatatype = ComponentDatatype$1
})
//# sourceMappingURL=ComponentDatatype-f194c48b.js.map
