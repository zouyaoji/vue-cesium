/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.138.0
 *
 * Copyright 2011-2022 Cesium Contributors
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

import {
  Cartesian3_default
} from "./chunk-LYBNPUEI.js";
import {
  Math_default
} from "./chunk-BO22JHBX.js";
import {
  Check_default,
  DeveloperError_default
} from "./chunk-FS42VX2H.js";
import {
  defined_default
} from "./chunk-7U5YNLF3.js";

// packages/engine/Source/Core/scaleToGeodeticSurface.js
var scaleToGeodeticSurfaceIntersection = new Cartesian3_default();
var scaleToGeodeticSurfaceGradient = new Cartesian3_default();
function scaleToGeodeticSurface(cartesian, oneOverRadii, oneOverRadiiSquared, centerToleranceSquared, result) {
  if (!defined_default(cartesian)) {
    throw new DeveloperError_default("cartesian is required.");
  }
  if (!defined_default(oneOverRadii)) {
    throw new DeveloperError_default("oneOverRadii is required.");
  }
  if (!defined_default(oneOverRadiiSquared)) {
    throw new DeveloperError_default("oneOverRadiiSquared is required.");
  }
  if (!defined_default(centerToleranceSquared)) {
    throw new DeveloperError_default("centerToleranceSquared is required.");
  }
  const positionX = cartesian.x;
  const positionY = cartesian.y;
  const positionZ = cartesian.z;
  const oneOverRadiiX = oneOverRadii.x;
  const oneOverRadiiY = oneOverRadii.y;
  const oneOverRadiiZ = oneOverRadii.z;
  const x2 = positionX * positionX * oneOverRadiiX * oneOverRadiiX;
  const y2 = positionY * positionY * oneOverRadiiY * oneOverRadiiY;
  const z2 = positionZ * positionZ * oneOverRadiiZ * oneOverRadiiZ;
  const squaredNorm = x2 + y2 + z2;
  const ratio = Math.sqrt(1 / squaredNorm);
  const intersection = Cartesian3_default.multiplyByScalar(
    cartesian,
    ratio,
    scaleToGeodeticSurfaceIntersection
  );
  if (squaredNorm < centerToleranceSquared) {
    return !isFinite(ratio) ? void 0 : Cartesian3_default.clone(intersection, result);
  }
  const oneOverRadiiSquaredX = oneOverRadiiSquared.x;
  const oneOverRadiiSquaredY = oneOverRadiiSquared.y;
  const oneOverRadiiSquaredZ = oneOverRadiiSquared.z;
  const gradient = scaleToGeodeticSurfaceGradient;
  gradient.x = intersection.x * oneOverRadiiSquaredX * 2;
  gradient.y = intersection.y * oneOverRadiiSquaredY * 2;
  gradient.z = intersection.z * oneOverRadiiSquaredZ * 2;
  let lambda = (1 - ratio) * Cartesian3_default.magnitude(cartesian) / (0.5 * Cartesian3_default.magnitude(gradient));
  let correction = 0;
  let func;
  let denominator;
  let xMultiplier;
  let yMultiplier;
  let zMultiplier;
  let xMultiplier2;
  let yMultiplier2;
  let zMultiplier2;
  let xMultiplier3;
  let yMultiplier3;
  let zMultiplier3;
  do {
    lambda -= correction;
    xMultiplier = 1 / (1 + lambda * oneOverRadiiSquaredX);
    yMultiplier = 1 / (1 + lambda * oneOverRadiiSquaredY);
    zMultiplier = 1 / (1 + lambda * oneOverRadiiSquaredZ);
    xMultiplier2 = xMultiplier * xMultiplier;
    yMultiplier2 = yMultiplier * yMultiplier;
    zMultiplier2 = zMultiplier * zMultiplier;
    xMultiplier3 = xMultiplier2 * xMultiplier;
    yMultiplier3 = yMultiplier2 * yMultiplier;
    zMultiplier3 = zMultiplier2 * zMultiplier;
    func = x2 * xMultiplier2 + y2 * yMultiplier2 + z2 * zMultiplier2 - 1;
    denominator = x2 * xMultiplier3 * oneOverRadiiSquaredX + y2 * yMultiplier3 * oneOverRadiiSquaredY + z2 * zMultiplier3 * oneOverRadiiSquaredZ;
    const derivative = -2 * denominator;
    correction = func / derivative;
  } while (Math.abs(func) > Math_default.EPSILON12);
  if (!defined_default(result)) {
    return new Cartesian3_default(
      positionX * xMultiplier,
      positionY * yMultiplier,
      positionZ * zMultiplier
    );
  }
  result.x = positionX * xMultiplier;
  result.y = positionY * yMultiplier;
  result.z = positionZ * zMultiplier;
  return result;
}
var scaleToGeodeticSurface_default = scaleToGeodeticSurface;

// packages/engine/Source/Core/Cartographic.js
function Cartographic(longitude, latitude, height) {
  this.longitude = longitude ?? 0;
  this.latitude = latitude ?? 0;
  this.height = height ?? 0;
}
Cartographic.fromRadians = function(longitude, latitude, height, result) {
  Check_default.typeOf.number("longitude", longitude);
  Check_default.typeOf.number("latitude", latitude);
  height = height ?? 0;
  if (!defined_default(result)) {
    return new Cartographic(longitude, latitude, height);
  }
  result.longitude = longitude;
  result.latitude = latitude;
  result.height = height;
  return result;
};
Cartographic.fromDegrees = function(longitude, latitude, height, result) {
  Check_default.typeOf.number("longitude", longitude);
  Check_default.typeOf.number("latitude", latitude);
  longitude = Math_default.toRadians(longitude);
  latitude = Math_default.toRadians(latitude);
  return Cartographic.fromRadians(longitude, latitude, height, result);
};
var cartesianToCartographicN = new Cartesian3_default();
var cartesianToCartographicP = new Cartesian3_default();
var cartesianToCartographicH = new Cartesian3_default();
Cartographic._ellipsoidOneOverRadii = new Cartesian3_default(
  1 / 6378137,
  1 / 6378137,
  1 / 6356752314245179e-9
);
Cartographic._ellipsoidOneOverRadiiSquared = new Cartesian3_default(
  1 / (6378137 * 6378137),
  1 / (6378137 * 6378137),
  1 / (6356752314245179e-9 * 6356752314245179e-9)
);
Cartographic._ellipsoidCenterToleranceSquared = Math_default.EPSILON1;
Cartographic.fromCartesian = function(cartesian, ellipsoid, result) {
  const oneOverRadii = defined_default(ellipsoid) ? ellipsoid.oneOverRadii : Cartographic._ellipsoidOneOverRadii;
  const oneOverRadiiSquared = defined_default(ellipsoid) ? ellipsoid.oneOverRadiiSquared : Cartographic._ellipsoidOneOverRadiiSquared;
  const centerToleranceSquared = defined_default(ellipsoid) ? ellipsoid._centerToleranceSquared : Cartographic._ellipsoidCenterToleranceSquared;
  const p = scaleToGeodeticSurface_default(
    cartesian,
    oneOverRadii,
    oneOverRadiiSquared,
    centerToleranceSquared,
    cartesianToCartographicP
  );
  if (!defined_default(p)) {
    return void 0;
  }
  let n = Cartesian3_default.multiplyComponents(
    p,
    oneOverRadiiSquared,
    cartesianToCartographicN
  );
  n = Cartesian3_default.normalize(n, n);
  const h = Cartesian3_default.subtract(cartesian, p, cartesianToCartographicH);
  const longitude = Math.atan2(n.y, n.x);
  const latitude = Math.asin(n.z);
  const height = Math_default.sign(Cartesian3_default.dot(h, cartesian)) * Cartesian3_default.magnitude(h);
  if (!defined_default(result)) {
    return new Cartographic(longitude, latitude, height);
  }
  result.longitude = longitude;
  result.latitude = latitude;
  result.height = height;
  return result;
};
Cartographic.toCartesian = function(cartographic, ellipsoid, result) {
  Check_default.defined("cartographic", cartographic);
  return Cartesian3_default.fromRadians(
    cartographic.longitude,
    cartographic.latitude,
    cartographic.height,
    ellipsoid,
    result
  );
};
Cartographic.clone = function(cartographic, result) {
  if (!defined_default(cartographic)) {
    return void 0;
  }
  if (!defined_default(result)) {
    return new Cartographic(
      cartographic.longitude,
      cartographic.latitude,
      cartographic.height
    );
  }
  result.longitude = cartographic.longitude;
  result.latitude = cartographic.latitude;
  result.height = cartographic.height;
  return result;
};
Cartographic.equals = function(left, right) {
  return left === right || defined_default(left) && defined_default(right) && left.longitude === right.longitude && left.latitude === right.latitude && left.height === right.height;
};
Cartographic.equalsEpsilon = function(left, right, epsilon) {
  epsilon = epsilon ?? 0;
  return left === right || defined_default(left) && defined_default(right) && Math.abs(left.longitude - right.longitude) <= epsilon && Math.abs(left.latitude - right.latitude) <= epsilon && Math.abs(left.height - right.height) <= epsilon;
};
Cartographic.ZERO = Object.freeze(new Cartographic(0, 0, 0));
Cartographic.prototype.clone = function(result) {
  return Cartographic.clone(this, result);
};
Cartographic.prototype.equals = function(right) {
  return Cartographic.equals(this, right);
};
Cartographic.prototype.equalsEpsilon = function(right, epsilon) {
  return Cartographic.equalsEpsilon(this, right, epsilon);
};
Cartographic.prototype.toString = function() {
  return `(${this.longitude}, ${this.latitude}, ${this.height})`;
};
var Cartographic_default = Cartographic;

// packages/engine/Source/Core/Cartesian2.js
function Cartesian2(x, y) {
  this.x = x ?? 0;
  this.y = y ?? 0;
}
Cartesian2.fromElements = function(x, y, result) {
  if (!defined_default(result)) {
    return new Cartesian2(x, y);
  }
  result.x = x;
  result.y = y;
  return result;
};
Cartesian2.clone = function(cartesian, result) {
  if (!defined_default(cartesian)) {
    return void 0;
  }
  if (!defined_default(result)) {
    return new Cartesian2(cartesian.x, cartesian.y);
  }
  result.x = cartesian.x;
  result.y = cartesian.y;
  return result;
};
Cartesian2.fromCartesian3 = Cartesian2.clone;
Cartesian2.fromCartesian4 = Cartesian2.clone;
Cartesian2.packedLength = 2;
Cartesian2.pack = function(value, array, startingIndex) {
  Check_default.typeOf.object("value", value);
  Check_default.defined("array", array);
  startingIndex = startingIndex ?? 0;
  array[startingIndex++] = value.x;
  array[startingIndex] = value.y;
  return array;
};
Cartesian2.unpack = function(array, startingIndex, result) {
  Check_default.defined("array", array);
  startingIndex = startingIndex ?? 0;
  if (!defined_default(result)) {
    result = new Cartesian2();
  }
  result.x = array[startingIndex++];
  result.y = array[startingIndex];
  return result;
};
Cartesian2.packArray = function(array, result) {
  Check_default.defined("array", array);
  const length = array.length;
  const resultLength = length * 2;
  if (!defined_default(result)) {
    result = new Array(resultLength);
  } else if (!Array.isArray(result) && result.length !== resultLength) {
    throw new DeveloperError_default(
      "If result is a typed array, it must have exactly array.length * 2 elements"
    );
  } else if (result.length !== resultLength) {
    result.length = resultLength;
  }
  for (let i = 0; i < length; ++i) {
    Cartesian2.pack(array[i], result, i * 2);
  }
  return result;
};
Cartesian2.unpackArray = function(array, result) {
  Check_default.defined("array", array);
  Check_default.typeOf.number.greaterThanOrEquals("array.length", array.length, 2);
  if (array.length % 2 !== 0) {
    throw new DeveloperError_default("array length must be a multiple of 2.");
  }
  const length = array.length;
  if (!defined_default(result)) {
    result = new Array(length / 2);
  } else {
    result.length = length / 2;
  }
  for (let i = 0; i < length; i += 2) {
    const index = i / 2;
    result[index] = Cartesian2.unpack(array, i, result[index]);
  }
  return result;
};
Cartesian2.fromArray = Cartesian2.unpack;
Cartesian2.maximumComponent = function(cartesian) {
  Check_default.typeOf.object("cartesian", cartesian);
  return Math.max(cartesian.x, cartesian.y);
};
Cartesian2.minimumComponent = function(cartesian) {
  Check_default.typeOf.object("cartesian", cartesian);
  return Math.min(cartesian.x, cartesian.y);
};
Cartesian2.minimumByComponent = function(first, second, result) {
  Check_default.typeOf.object("first", first);
  Check_default.typeOf.object("second", second);
  Check_default.typeOf.object("result", result);
  result.x = Math.min(first.x, second.x);
  result.y = Math.min(first.y, second.y);
  return result;
};
Cartesian2.maximumByComponent = function(first, second, result) {
  Check_default.typeOf.object("first", first);
  Check_default.typeOf.object("second", second);
  Check_default.typeOf.object("result", result);
  result.x = Math.max(first.x, second.x);
  result.y = Math.max(first.y, second.y);
  return result;
};
Cartesian2.clamp = function(value, min, max, result) {
  Check_default.typeOf.object("value", value);
  Check_default.typeOf.object("min", min);
  Check_default.typeOf.object("max", max);
  Check_default.typeOf.object("result", result);
  const x = Math_default.clamp(value.x, min.x, max.x);
  const y = Math_default.clamp(value.y, min.y, max.y);
  result.x = x;
  result.y = y;
  return result;
};
Cartesian2.magnitudeSquared = function(cartesian) {
  Check_default.typeOf.object("cartesian", cartesian);
  return cartesian.x * cartesian.x + cartesian.y * cartesian.y;
};
Cartesian2.magnitude = function(cartesian) {
  return Math.sqrt(Cartesian2.magnitudeSquared(cartesian));
};
var distanceScratch = new Cartesian2();
Cartesian2.distance = function(left, right) {
  Check_default.typeOf.object("left", left);
  Check_default.typeOf.object("right", right);
  Cartesian2.subtract(left, right, distanceScratch);
  return Cartesian2.magnitude(distanceScratch);
};
Cartesian2.distanceSquared = function(left, right) {
  Check_default.typeOf.object("left", left);
  Check_default.typeOf.object("right", right);
  Cartesian2.subtract(left, right, distanceScratch);
  return Cartesian2.magnitudeSquared(distanceScratch);
};
Cartesian2.normalize = function(cartesian, result) {
  Check_default.typeOf.object("cartesian", cartesian);
  Check_default.typeOf.object("result", result);
  const magnitude = Cartesian2.magnitude(cartesian);
  result.x = cartesian.x / magnitude;
  result.y = cartesian.y / magnitude;
  if (isNaN(result.x) || isNaN(result.y)) {
    throw new DeveloperError_default("normalized result is not a number");
  }
  return result;
};
Cartesian2.dot = function(left, right) {
  Check_default.typeOf.object("left", left);
  Check_default.typeOf.object("right", right);
  return left.x * right.x + left.y * right.y;
};
Cartesian2.cross = function(left, right) {
  Check_default.typeOf.object("left", left);
  Check_default.typeOf.object("right", right);
  return left.x * right.y - left.y * right.x;
};
Cartesian2.multiplyComponents = function(left, right, result) {
  Check_default.typeOf.object("left", left);
  Check_default.typeOf.object("right", right);
  Check_default.typeOf.object("result", result);
  result.x = left.x * right.x;
  result.y = left.y * right.y;
  return result;
};
Cartesian2.divideComponents = function(left, right, result) {
  Check_default.typeOf.object("left", left);
  Check_default.typeOf.object("right", right);
  Check_default.typeOf.object("result", result);
  result.x = left.x / right.x;
  result.y = left.y / right.y;
  return result;
};
Cartesian2.add = function(left, right, result) {
  Check_default.typeOf.object("left", left);
  Check_default.typeOf.object("right", right);
  Check_default.typeOf.object("result", result);
  result.x = left.x + right.x;
  result.y = left.y + right.y;
  return result;
};
Cartesian2.subtract = function(left, right, result) {
  Check_default.typeOf.object("left", left);
  Check_default.typeOf.object("right", right);
  Check_default.typeOf.object("result", result);
  result.x = left.x - right.x;
  result.y = left.y - right.y;
  return result;
};
Cartesian2.multiplyByScalar = function(cartesian, scalar, result) {
  Check_default.typeOf.object("cartesian", cartesian);
  Check_default.typeOf.number("scalar", scalar);
  Check_default.typeOf.object("result", result);
  result.x = cartesian.x * scalar;
  result.y = cartesian.y * scalar;
  return result;
};
Cartesian2.divideByScalar = function(cartesian, scalar, result) {
  Check_default.typeOf.object("cartesian", cartesian);
  Check_default.typeOf.number("scalar", scalar);
  Check_default.typeOf.object("result", result);
  result.x = cartesian.x / scalar;
  result.y = cartesian.y / scalar;
  return result;
};
Cartesian2.negate = function(cartesian, result) {
  Check_default.typeOf.object("cartesian", cartesian);
  Check_default.typeOf.object("result", result);
  result.x = -cartesian.x;
  result.y = -cartesian.y;
  return result;
};
Cartesian2.abs = function(cartesian, result) {
  Check_default.typeOf.object("cartesian", cartesian);
  Check_default.typeOf.object("result", result);
  result.x = Math.abs(cartesian.x);
  result.y = Math.abs(cartesian.y);
  return result;
};
var lerpScratch = new Cartesian2();
Cartesian2.lerp = function(start, end, t, result) {
  Check_default.typeOf.object("start", start);
  Check_default.typeOf.object("end", end);
  Check_default.typeOf.number("t", t);
  Check_default.typeOf.object("result", result);
  Cartesian2.multiplyByScalar(end, t, lerpScratch);
  result = Cartesian2.multiplyByScalar(start, 1 - t, result);
  return Cartesian2.add(lerpScratch, result, result);
};
var angleBetweenScratch = new Cartesian2();
var angleBetweenScratch2 = new Cartesian2();
Cartesian2.angleBetween = function(left, right) {
  Check_default.typeOf.object("left", left);
  Check_default.typeOf.object("right", right);
  Cartesian2.normalize(left, angleBetweenScratch);
  Cartesian2.normalize(right, angleBetweenScratch2);
  return Math_default.acosClamped(
    Cartesian2.dot(angleBetweenScratch, angleBetweenScratch2)
  );
};
var mostOrthogonalAxisScratch = new Cartesian2();
Cartesian2.mostOrthogonalAxis = function(cartesian, result) {
  Check_default.typeOf.object("cartesian", cartesian);
  Check_default.typeOf.object("result", result);
  const f = Cartesian2.normalize(cartesian, mostOrthogonalAxisScratch);
  Cartesian2.abs(f, f);
  if (f.x <= f.y) {
    result = Cartesian2.clone(Cartesian2.UNIT_X, result);
  } else {
    result = Cartesian2.clone(Cartesian2.UNIT_Y, result);
  }
  return result;
};
Cartesian2.equals = function(left, right) {
  return left === right || defined_default(left) && defined_default(right) && left.x === right.x && left.y === right.y;
};
Cartesian2.equalsArray = function(cartesian, array, offset) {
  return cartesian.x === array[offset] && cartesian.y === array[offset + 1];
};
Cartesian2.equalsEpsilon = function(left, right, relativeEpsilon, absoluteEpsilon) {
  return left === right || defined_default(left) && defined_default(right) && Math_default.equalsEpsilon(
    left.x,
    right.x,
    relativeEpsilon,
    absoluteEpsilon
  ) && Math_default.equalsEpsilon(
    left.y,
    right.y,
    relativeEpsilon,
    absoluteEpsilon
  );
};
Cartesian2.ZERO = Object.freeze(new Cartesian2(0, 0));
Cartesian2.ONE = Object.freeze(new Cartesian2(1, 1));
Cartesian2.UNIT_X = Object.freeze(new Cartesian2(1, 0));
Cartesian2.UNIT_Y = Object.freeze(new Cartesian2(0, 1));
Cartesian2.prototype.clone = function(result) {
  return Cartesian2.clone(this, result);
};
Cartesian2.prototype.equals = function(right) {
  return Cartesian2.equals(this, right);
};
Cartesian2.prototype.equalsEpsilon = function(right, relativeEpsilon, absoluteEpsilon) {
  return Cartesian2.equalsEpsilon(
    this,
    right,
    relativeEpsilon,
    absoluteEpsilon
  );
};
Cartesian2.prototype.toString = function() {
  return `(${this.x}, ${this.y})`;
};
var Cartesian2_default = Cartesian2;

// packages/engine/Source/Core/Ellipsoid.js
function initialize(ellipsoid, x, y, z) {
  x = x ?? 0;
  y = y ?? 0;
  z = z ?? 0;
  Check_default.typeOf.number.greaterThanOrEquals("x", x, 0);
  Check_default.typeOf.number.greaterThanOrEquals("y", y, 0);
  Check_default.typeOf.number.greaterThanOrEquals("z", z, 0);
  ellipsoid._radii = new Cartesian3_default(x, y, z);
  ellipsoid._radiiSquared = new Cartesian3_default(x * x, y * y, z * z);
  ellipsoid._radiiToTheFourth = new Cartesian3_default(
    x * x * x * x,
    y * y * y * y,
    z * z * z * z
  );
  ellipsoid._oneOverRadii = new Cartesian3_default(
    x === 0 ? 0 : 1 / x,
    y === 0 ? 0 : 1 / y,
    z === 0 ? 0 : 1 / z
  );
  ellipsoid._oneOverRadiiSquared = new Cartesian3_default(
    x === 0 ? 0 : 1 / (x * x),
    y === 0 ? 0 : 1 / (y * y),
    z === 0 ? 0 : 1 / (z * z)
  );
  ellipsoid._minimumRadius = Math.min(x, y, z);
  ellipsoid._maximumRadius = Math.max(x, y, z);
  ellipsoid._centerToleranceSquared = Math_default.EPSILON1;
  if (ellipsoid._radiiSquared.z !== 0) {
    ellipsoid._squaredXOverSquaredZ = ellipsoid._radiiSquared.x / ellipsoid._radiiSquared.z;
  }
}
function Ellipsoid(x, y, z) {
  this._radii = void 0;
  this._radiiSquared = void 0;
  this._radiiToTheFourth = void 0;
  this._oneOverRadii = void 0;
  this._oneOverRadiiSquared = void 0;
  this._minimumRadius = void 0;
  this._maximumRadius = void 0;
  this._centerToleranceSquared = void 0;
  this._squaredXOverSquaredZ = void 0;
  initialize(this, x, y, z);
}
Object.defineProperties(Ellipsoid.prototype, {
  /**
   * Gets the radii of the ellipsoid.
   * @memberof Ellipsoid.prototype
   * @type {Cartesian3}
   * @readonly
   */
  radii: {
    get: function() {
      return this._radii;
    }
  },
  /**
   * Gets the squared radii of the ellipsoid.
   * @memberof Ellipsoid.prototype
   * @type {Cartesian3}
   * @readonly
   */
  radiiSquared: {
    get: function() {
      return this._radiiSquared;
    }
  },
  /**
   * Gets the radii of the ellipsoid raise to the fourth power.
   * @memberof Ellipsoid.prototype
   * @type {Cartesian3}
   * @readonly
   */
  radiiToTheFourth: {
    get: function() {
      return this._radiiToTheFourth;
    }
  },
  /**
   * Gets one over the radii of the ellipsoid.
   * @memberof Ellipsoid.prototype
   * @type {Cartesian3}
   * @readonly
   */
  oneOverRadii: {
    get: function() {
      return this._oneOverRadii;
    }
  },
  /**
   * Gets one over the squared radii of the ellipsoid.
   * @memberof Ellipsoid.prototype
   * @type {Cartesian3}
   * @readonly
   */
  oneOverRadiiSquared: {
    get: function() {
      return this._oneOverRadiiSquared;
    }
  },
  /**
   * Gets the minimum radius of the ellipsoid.
   * @memberof Ellipsoid.prototype
   * @type {number}
   * @readonly
   */
  minimumRadius: {
    get: function() {
      return this._minimumRadius;
    }
  },
  /**
   * Gets the maximum radius of the ellipsoid.
   * @memberof Ellipsoid.prototype
   * @type {number}
   * @readonly
   */
  maximumRadius: {
    get: function() {
      return this._maximumRadius;
    }
  }
});
Ellipsoid.clone = function(ellipsoid, result) {
  if (!defined_default(ellipsoid)) {
    return void 0;
  }
  const radii = ellipsoid._radii;
  if (!defined_default(result)) {
    return new Ellipsoid(radii.x, radii.y, radii.z);
  }
  Cartesian3_default.clone(radii, result._radii);
  Cartesian3_default.clone(ellipsoid._radiiSquared, result._radiiSquared);
  Cartesian3_default.clone(ellipsoid._radiiToTheFourth, result._radiiToTheFourth);
  Cartesian3_default.clone(ellipsoid._oneOverRadii, result._oneOverRadii);
  Cartesian3_default.clone(ellipsoid._oneOverRadiiSquared, result._oneOverRadiiSquared);
  result._minimumRadius = ellipsoid._minimumRadius;
  result._maximumRadius = ellipsoid._maximumRadius;
  result._centerToleranceSquared = ellipsoid._centerToleranceSquared;
  return result;
};
Ellipsoid.fromCartesian3 = function(cartesian, result) {
  if (!defined_default(result)) {
    result = new Ellipsoid();
  }
  if (!defined_default(cartesian)) {
    return result;
  }
  initialize(result, cartesian.x, cartesian.y, cartesian.z);
  return result;
};
Ellipsoid.WGS84 = Object.freeze(
  new Ellipsoid(6378137, 6378137, 6356752314245179e-9)
);
Ellipsoid.UNIT_SPHERE = Object.freeze(new Ellipsoid(1, 1, 1));
Ellipsoid.MOON = Object.freeze(
  new Ellipsoid(
    Math_default.LUNAR_RADIUS,
    Math_default.LUNAR_RADIUS,
    Math_default.LUNAR_RADIUS
  )
);
Ellipsoid.MARS = Object.freeze(new Ellipsoid(3396190, 3396190, 3376200));
Ellipsoid._default = Ellipsoid.WGS84;
Object.defineProperties(Ellipsoid, {
  /**
   * The default ellipsoid used when not otherwise specified.
   * @memberof Ellipsoid
   * @type {Ellipsoid}
   * @example
   * Cesium.Ellipsoid.default = Cesium.Ellipsoid.MOON;
   *
   * // Apollo 11 landing site
   * const position = Cesium.Cartesian3.fromRadians(
   *   0.67416,
   *   23.47315,
   * );
   */
  default: {
    get: function() {
      return Ellipsoid._default;
    },
    set: function(value) {
      Check_default.typeOf.object("value", value);
      Ellipsoid._default = value;
      Cartesian3_default._ellipsoidRadiiSquared = value.radiiSquared;
      Cartographic_default._ellipsoidOneOverRadii = value.oneOverRadii;
      Cartographic_default._ellipsoidOneOverRadiiSquared = value.oneOverRadiiSquared;
      Cartographic_default._ellipsoidCenterToleranceSquared = value._centerToleranceSquared;
    }
  }
});
Ellipsoid.prototype.clone = function(result) {
  return Ellipsoid.clone(this, result);
};
Ellipsoid.packedLength = Cartesian3_default.packedLength;
Ellipsoid.pack = function(value, array, startingIndex) {
  Check_default.typeOf.object("value", value);
  Check_default.defined("array", array);
  startingIndex = startingIndex ?? 0;
  Cartesian3_default.pack(value._radii, array, startingIndex);
  return array;
};
Ellipsoid.unpack = function(array, startingIndex, result) {
  Check_default.defined("array", array);
  startingIndex = startingIndex ?? 0;
  const radii = Cartesian3_default.unpack(array, startingIndex);
  return Ellipsoid.fromCartesian3(radii, result);
};
Ellipsoid.prototype.geocentricSurfaceNormal = Cartesian3_default.normalize;
Ellipsoid.prototype.geodeticSurfaceNormalCartographic = function(cartographic, result) {
  Check_default.typeOf.object("cartographic", cartographic);
  const longitude = cartographic.longitude;
  const latitude = cartographic.latitude;
  const cosLatitude = Math.cos(latitude);
  const x = cosLatitude * Math.cos(longitude);
  const y = cosLatitude * Math.sin(longitude);
  const z = Math.sin(latitude);
  if (!defined_default(result)) {
    result = new Cartesian3_default();
  }
  result.x = x;
  result.y = y;
  result.z = z;
  return Cartesian3_default.normalize(result, result);
};
Ellipsoid.prototype.geodeticSurfaceNormal = function(cartesian, result) {
  Check_default.typeOf.object("cartesian", cartesian);
  if (isNaN(cartesian.x) || isNaN(cartesian.y) || isNaN(cartesian.z)) {
    throw new DeveloperError_default("cartesian has a NaN component");
  }
  if (Cartesian3_default.equalsEpsilon(cartesian, Cartesian3_default.ZERO, Math_default.EPSILON14)) {
    return void 0;
  }
  if (!defined_default(result)) {
    result = new Cartesian3_default();
  }
  result = Cartesian3_default.multiplyComponents(
    cartesian,
    this._oneOverRadiiSquared,
    result
  );
  return Cartesian3_default.normalize(result, result);
};
var cartographicToCartesianNormal = new Cartesian3_default();
var cartographicToCartesianK = new Cartesian3_default();
Ellipsoid.prototype.cartographicToCartesian = function(cartographic, result) {
  const n = cartographicToCartesianNormal;
  const k = cartographicToCartesianK;
  this.geodeticSurfaceNormalCartographic(cartographic, n);
  Cartesian3_default.multiplyComponents(this._radiiSquared, n, k);
  const gamma = Math.sqrt(Cartesian3_default.dot(n, k));
  Cartesian3_default.divideByScalar(k, gamma, k);
  Cartesian3_default.multiplyByScalar(n, cartographic.height, n);
  if (!defined_default(result)) {
    result = new Cartesian3_default();
  }
  return Cartesian3_default.add(k, n, result);
};
Ellipsoid.prototype.cartographicArrayToCartesianArray = function(cartographics, result) {
  Check_default.defined("cartographics", cartographics);
  const length = cartographics.length;
  if (!defined_default(result)) {
    result = new Array(length);
  } else {
    result.length = length;
  }
  for (let i = 0; i < length; i++) {
    result[i] = this.cartographicToCartesian(cartographics[i], result[i]);
  }
  return result;
};
var cartesianToCartographicN2 = new Cartesian3_default();
var cartesianToCartographicP2 = new Cartesian3_default();
var cartesianToCartographicH2 = new Cartesian3_default();
Ellipsoid.prototype.cartesianToCartographic = function(cartesian, result) {
  const p = this.scaleToGeodeticSurface(cartesian, cartesianToCartographicP2);
  if (!defined_default(p)) {
    return void 0;
  }
  const n = this.geodeticSurfaceNormal(p, cartesianToCartographicN2);
  const h = Cartesian3_default.subtract(cartesian, p, cartesianToCartographicH2);
  const longitude = Math.atan2(n.y, n.x);
  const latitude = Math.asin(n.z);
  const height = Math_default.sign(Cartesian3_default.dot(h, cartesian)) * Cartesian3_default.magnitude(h);
  if (!defined_default(result)) {
    return new Cartographic_default(longitude, latitude, height);
  }
  result.longitude = longitude;
  result.latitude = latitude;
  result.height = height;
  return result;
};
Ellipsoid.prototype.cartesianArrayToCartographicArray = function(cartesians, result) {
  Check_default.defined("cartesians", cartesians);
  const length = cartesians.length;
  if (!defined_default(result)) {
    result = new Array(length);
  } else {
    result.length = length;
  }
  for (let i = 0; i < length; ++i) {
    result[i] = this.cartesianToCartographic(cartesians[i], result[i]);
  }
  return result;
};
Ellipsoid.prototype.scaleToGeodeticSurface = function(cartesian, result) {
  return scaleToGeodeticSurface_default(
    cartesian,
    this._oneOverRadii,
    this._oneOverRadiiSquared,
    this._centerToleranceSquared,
    result
  );
};
Ellipsoid.prototype.scaleToGeocentricSurface = function(cartesian, result) {
  Check_default.typeOf.object("cartesian", cartesian);
  if (!defined_default(result)) {
    result = new Cartesian3_default();
  }
  const positionX = cartesian.x;
  const positionY = cartesian.y;
  const positionZ = cartesian.z;
  const oneOverRadiiSquared = this._oneOverRadiiSquared;
  const beta = 1 / Math.sqrt(
    positionX * positionX * oneOverRadiiSquared.x + positionY * positionY * oneOverRadiiSquared.y + positionZ * positionZ * oneOverRadiiSquared.z
  );
  return Cartesian3_default.multiplyByScalar(cartesian, beta, result);
};
Ellipsoid.prototype.transformPositionToScaledSpace = function(position, result) {
  if (!defined_default(result)) {
    result = new Cartesian3_default();
  }
  return Cartesian3_default.multiplyComponents(position, this._oneOverRadii, result);
};
Ellipsoid.prototype.transformPositionFromScaledSpace = function(position, result) {
  if (!defined_default(result)) {
    result = new Cartesian3_default();
  }
  return Cartesian3_default.multiplyComponents(position, this._radii, result);
};
Ellipsoid.prototype.equals = function(right) {
  return this === right || defined_default(right) && Cartesian3_default.equals(this._radii, right._radii);
};
Ellipsoid.prototype.toString = function() {
  return this._radii.toString();
};
Ellipsoid.prototype.getSurfaceNormalIntersectionWithZAxis = function(position, buffer, result) {
  Check_default.typeOf.object("position", position);
  if (!Math_default.equalsEpsilon(
    this._radii.x,
    this._radii.y,
    Math_default.EPSILON15
  )) {
    throw new DeveloperError_default(
      "Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y)"
    );
  }
  Check_default.typeOf.number.greaterThan("Ellipsoid.radii.z", this._radii.z, 0);
  buffer = buffer ?? 0;
  const squaredXOverSquaredZ = this._squaredXOverSquaredZ;
  if (!defined_default(result)) {
    result = new Cartesian3_default();
  }
  result.x = 0;
  result.y = 0;
  result.z = position.z * (1 - squaredXOverSquaredZ);
  if (Math.abs(result.z) >= this._radii.z - buffer) {
    return void 0;
  }
  return result;
};
var scratchEndpoint = new Cartesian3_default();
Ellipsoid.prototype.getLocalCurvature = function(surfacePosition, result) {
  Check_default.typeOf.object("surfacePosition", surfacePosition);
  if (!defined_default(result)) {
    result = new Cartesian2_default();
  }
  const primeVerticalEndpoint = this.getSurfaceNormalIntersectionWithZAxis(
    surfacePosition,
    0,
    scratchEndpoint
  );
  const primeVerticalRadius = Cartesian3_default.distance(
    surfacePosition,
    primeVerticalEndpoint
  );
  const radiusRatio = this.minimumRadius * primeVerticalRadius / this.maximumRadius ** 2;
  const meridionalRadius = primeVerticalRadius * radiusRatio ** 2;
  return Cartesian2_default.fromElements(
    1 / primeVerticalRadius,
    1 / meridionalRadius,
    result
  );
};
var abscissas = [
  0.14887433898163,
  0.43339539412925,
  0.67940956829902,
  0.86506336668898,
  0.97390652851717,
  0
];
var weights = [
  0.29552422471475,
  0.26926671930999,
  0.21908636251598,
  0.14945134915058,
  0.066671344308684,
  0
];
function gaussLegendreQuadrature(a, b, func) {
  Check_default.typeOf.number("a", a);
  Check_default.typeOf.number("b", b);
  Check_default.typeOf.func("func", func);
  const xMean = 0.5 * (b + a);
  const xRange = 0.5 * (b - a);
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    const dx = xRange * abscissas[i];
    sum += weights[i] * (func(xMean + dx) + func(xMean - dx));
  }
  sum *= xRange;
  return sum;
}
Ellipsoid.prototype.surfaceArea = function(rectangle) {
  Check_default.typeOf.object("rectangle", rectangle);
  const minLongitude = rectangle.west;
  let maxLongitude = rectangle.east;
  const minLatitude = rectangle.south;
  const maxLatitude = rectangle.north;
  while (maxLongitude < minLongitude) {
    maxLongitude += Math_default.TWO_PI;
  }
  const radiiSquared = this._radiiSquared;
  const a2 = radiiSquared.x;
  const b2 = radiiSquared.y;
  const c2 = radiiSquared.z;
  const a2b2 = a2 * b2;
  return gaussLegendreQuadrature(minLatitude, maxLatitude, function(lat) {
    const sinPhi = Math.cos(lat);
    const cosPhi = Math.sin(lat);
    return Math.cos(lat) * gaussLegendreQuadrature(minLongitude, maxLongitude, function(lon) {
      const cosTheta = Math.cos(lon);
      const sinTheta = Math.sin(lon);
      return Math.sqrt(
        a2b2 * cosPhi * cosPhi + c2 * (b2 * cosTheta * cosTheta + a2 * sinTheta * sinTheta) * sinPhi * sinPhi
      );
    });
  });
};
var Ellipsoid_default = Ellipsoid;

// packages/engine/Source/Core/Fullscreen.js
var _supportsFullscreen;
var _names = {
  requestFullscreen: void 0,
  exitFullscreen: void 0,
  fullscreenEnabled: void 0,
  fullscreenElement: void 0,
  fullscreenchange: void 0,
  fullscreenerror: void 0
};
var Fullscreen = {};
Object.defineProperties(Fullscreen, {
  /**
   * The element that is currently fullscreen, if any.  To simply check if the
   * browser is in fullscreen mode or not, use {@link Fullscreen#fullscreen}.
   * @memberof Fullscreen
   * @type {object}
   * @readonly
   */
  element: {
    get: function() {
      if (!Fullscreen.supportsFullscreen()) {
        return void 0;
      }
      return document[_names.fullscreenElement];
    }
  },
  /**
   * The name of the event on the document that is fired when fullscreen is
   * entered or exited.  This event name is intended for use with addEventListener.
   * In your event handler, to determine if the browser is in fullscreen mode or not,
   * use {@link Fullscreen#fullscreen}.
   * @memberof Fullscreen
   * @type {string}
   * @readonly
   */
  changeEventName: {
    get: function() {
      if (!Fullscreen.supportsFullscreen()) {
        return void 0;
      }
      return _names.fullscreenchange;
    }
  },
  /**
   * The name of the event that is fired when a fullscreen error
   * occurs.  This event name is intended for use with addEventListener.
   * @memberof Fullscreen
   * @type {string}
   * @readonly
   */
  errorEventName: {
    get: function() {
      if (!Fullscreen.supportsFullscreen()) {
        return void 0;
      }
      return _names.fullscreenerror;
    }
  },
  /**
   * Determine whether the browser will allow an element to be made fullscreen, or not.
   * For example, by default, iframes cannot go fullscreen unless the containing page
   * adds an "allowfullscreen" attribute (or prefixed equivalent).
   * @memberof Fullscreen
   * @type {boolean}
   * @readonly
   */
  enabled: {
    get: function() {
      if (!Fullscreen.supportsFullscreen()) {
        return void 0;
      }
      return document[_names.fullscreenEnabled];
    }
  },
  /**
   * Determines if the browser is currently in fullscreen mode.
   * @memberof Fullscreen
   * @type {boolean}
   * @readonly
   */
  fullscreen: {
    get: function() {
      if (!Fullscreen.supportsFullscreen()) {
        return void 0;
      }
      return Fullscreen.element !== null;
    }
  }
});
Fullscreen.supportsFullscreen = function() {
  if (defined_default(_supportsFullscreen)) {
    return _supportsFullscreen;
  }
  _supportsFullscreen = false;
  const body = document.body;
  if (typeof body.requestFullscreen === "function") {
    _names.requestFullscreen = "requestFullscreen";
    _names.exitFullscreen = "exitFullscreen";
    _names.fullscreenEnabled = "fullscreenEnabled";
    _names.fullscreenElement = "fullscreenElement";
    _names.fullscreenchange = "fullscreenchange";
    _names.fullscreenerror = "fullscreenerror";
    _supportsFullscreen = true;
    return _supportsFullscreen;
  }
  const prefixes = ["webkit", "moz", "o", "ms", "khtml"];
  let name;
  for (let i = 0, len = prefixes.length; i < len; ++i) {
    const prefix = prefixes[i];
    name = `${prefix}RequestFullscreen`;
    if (typeof body[name] === "function") {
      _names.requestFullscreen = name;
      _supportsFullscreen = true;
    } else {
      name = `${prefix}RequestFullScreen`;
      if (typeof body[name] === "function") {
        _names.requestFullscreen = name;
        _supportsFullscreen = true;
      }
    }
    name = `${prefix}ExitFullscreen`;
    if (typeof document[name] === "function") {
      _names.exitFullscreen = name;
    } else {
      name = `${prefix}CancelFullScreen`;
      if (typeof document[name] === "function") {
        _names.exitFullscreen = name;
      }
    }
    name = `${prefix}FullscreenEnabled`;
    if (document[name] !== void 0) {
      _names.fullscreenEnabled = name;
    } else {
      name = `${prefix}FullScreenEnabled`;
      if (document[name] !== void 0) {
        _names.fullscreenEnabled = name;
      }
    }
    name = `${prefix}FullscreenElement`;
    if (document[name] !== void 0) {
      _names.fullscreenElement = name;
    } else {
      name = `${prefix}FullScreenElement`;
      if (document[name] !== void 0) {
        _names.fullscreenElement = name;
      }
    }
    name = `${prefix}fullscreenchange`;
    if (document[`on${name}`] !== void 0) {
      if (prefix === "ms") {
        name = "MSFullscreenChange";
      }
      _names.fullscreenchange = name;
    }
    name = `${prefix}fullscreenerror`;
    if (document[`on${name}`] !== void 0) {
      if (prefix === "ms") {
        name = "MSFullscreenError";
      }
      _names.fullscreenerror = name;
    }
  }
  return _supportsFullscreen;
};
Fullscreen.requestFullscreen = function(element, vrDevice) {
  if (!Fullscreen.supportsFullscreen()) {
    return;
  }
  element[_names.requestFullscreen]({ vrDisplay: vrDevice });
};
Fullscreen.exitFullscreen = function() {
  if (!Fullscreen.supportsFullscreen()) {
    return;
  }
  document[_names.exitFullscreen]();
};
Fullscreen._names = _names;
var Fullscreen_default = Fullscreen;

// packages/engine/Source/Core/FeatureDetection.js
var theNavigator;
if (typeof navigator !== "undefined") {
  theNavigator = navigator;
} else {
  theNavigator = {};
}
function extractVersion(versionString) {
  const parts = versionString.split(".");
  for (let i = 0, len = parts.length; i < len; ++i) {
    parts[i] = parseInt(parts[i], 10);
  }
  return parts;
}
var isChromeResult;
var chromeVersionResult;
function isChrome() {
  if (!defined_default(isChromeResult)) {
    isChromeResult = false;
    if (!isEdge()) {
      const fields = / Chrome\/([\.0-9]+)/.exec(theNavigator.userAgent);
      if (fields !== null) {
        isChromeResult = true;
        chromeVersionResult = extractVersion(fields[1]);
      }
    }
  }
  return isChromeResult;
}
function chromeVersion() {
  return isChrome() && chromeVersionResult;
}
var isSafariResult;
var safariVersionResult;
function isSafari() {
  if (!defined_default(isSafariResult)) {
    isSafariResult = false;
    if (!isChrome() && !isEdge() && / Safari\/[\.0-9]+/.test(theNavigator.userAgent)) {
      const fields = / Version\/([\.0-9]+)/.exec(theNavigator.userAgent);
      if (fields !== null) {
        isSafariResult = true;
        safariVersionResult = extractVersion(fields[1]);
      }
    }
  }
  return isSafariResult;
}
function safariVersion() {
  return isSafari() && safariVersionResult;
}
var isWebkitResult;
var webkitVersionResult;
function isWebkit() {
  if (!defined_default(isWebkitResult)) {
    isWebkitResult = false;
    const fields = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(theNavigator.userAgent);
    if (fields !== null) {
      isWebkitResult = true;
      webkitVersionResult = extractVersion(fields[1]);
      webkitVersionResult.isNightly = !!fields[2];
    }
  }
  return isWebkitResult;
}
function webkitVersion() {
  return isWebkit() && webkitVersionResult;
}
var isEdgeResult;
var edgeVersionResult;
function isEdge() {
  if (!defined_default(isEdgeResult)) {
    isEdgeResult = false;
    const fields = / Edg\/([\.0-9]+)/.exec(theNavigator.userAgent);
    if (fields !== null) {
      isEdgeResult = true;
      edgeVersionResult = extractVersion(fields[1]);
    }
  }
  return isEdgeResult;
}
function edgeVersion() {
  return isEdge() && edgeVersionResult;
}
var isFirefoxResult;
var firefoxVersionResult;
function isFirefox() {
  if (!defined_default(isFirefoxResult)) {
    isFirefoxResult = false;
    const fields = /Firefox\/([\.0-9]+)/.exec(theNavigator.userAgent);
    if (fields !== null) {
      isFirefoxResult = true;
      firefoxVersionResult = extractVersion(fields[1]);
    }
  }
  return isFirefoxResult;
}
var isWindowsResult;
function isWindows() {
  if (!defined_default(isWindowsResult)) {
    isWindowsResult = /Windows/i.test(theNavigator.appVersion);
  }
  return isWindowsResult;
}
var isIPadOrIOSResult;
function isIPadOrIOS() {
  if (!defined_default(isIPadOrIOSResult)) {
    isIPadOrIOSResult = navigator.platform === "iPhone" || navigator.platform === "iPod" || navigator.platform === "iPad";
  }
  return isIPadOrIOSResult;
}
function firefoxVersion() {
  return isFirefox() && firefoxVersionResult;
}
var hasPointerEvents;
function supportsPointerEvents() {
  if (!defined_default(hasPointerEvents)) {
    hasPointerEvents = !isFirefox() && typeof PointerEvent !== "undefined" && (!defined_default(theNavigator.pointerEnabled) || theNavigator.pointerEnabled);
  }
  return hasPointerEvents;
}
var imageRenderingValueResult;
var supportsImageRenderingPixelatedResult;
function supportsImageRenderingPixelated() {
  if (!defined_default(supportsImageRenderingPixelatedResult)) {
    const canvas = document.createElement("canvas");
    canvas.setAttribute(
      "style",
      "image-rendering: -moz-crisp-edges;image-rendering: pixelated;"
    );
    const tmp = canvas.style.imageRendering;
    supportsImageRenderingPixelatedResult = defined_default(tmp) && tmp !== "";
    if (supportsImageRenderingPixelatedResult) {
      imageRenderingValueResult = tmp;
    }
  }
  return supportsImageRenderingPixelatedResult;
}
function imageRenderingValue() {
  return supportsImageRenderingPixelated() ? imageRenderingValueResult : void 0;
}
function supportsWebP() {
  if (!supportsWebP.initialized) {
    throw new DeveloperError_default(
      "You must call FeatureDetection.supportsWebP.initialize and wait for the promise to resolve before calling FeatureDetection.supportsWebP"
    );
  }
  return supportsWebP._result;
}
supportsWebP._promise = void 0;
supportsWebP._result = void 0;
supportsWebP.initialize = function() {
  if (defined_default(supportsWebP._promise)) {
    return supportsWebP._promise;
  }
  supportsWebP._promise = new Promise((resolve) => {
    const image = new Image();
    image.onload = function() {
      supportsWebP._result = image.width > 0 && image.height > 0;
      resolve(supportsWebP._result);
    };
    image.onerror = function() {
      supportsWebP._result = false;
      resolve(supportsWebP._result);
    };
    image.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
  });
  return supportsWebP._promise;
};
Object.defineProperties(supportsWebP, {
  initialized: {
    get: function() {
      return defined_default(supportsWebP._result);
    }
  }
});
var typedArrayTypes = [];
if (typeof ArrayBuffer !== "undefined") {
  typedArrayTypes.push(
    Int8Array,
    Uint8Array,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array
  );
  if (typeof Uint8ClampedArray !== "undefined") {
    typedArrayTypes.push(Uint8ClampedArray);
  }
  if (typeof Uint8ClampedArray !== "undefined") {
    typedArrayTypes.push(Uint8ClampedArray);
  }
  if (typeof BigInt64Array !== "undefined") {
    typedArrayTypes.push(BigInt64Array);
  }
  if (typeof BigUint64Array !== "undefined") {
    typedArrayTypes.push(BigUint64Array);
  }
}
var FeatureDetection = {
  isChrome,
  chromeVersion,
  isSafari,
  safariVersion,
  isWebkit,
  webkitVersion,
  isEdge,
  edgeVersion,
  isFirefox,
  firefoxVersion,
  isWindows,
  isIPadOrIOS,
  hardwareConcurrency: theNavigator.hardwareConcurrency ?? 3,
  supportsPointerEvents,
  supportsImageRenderingPixelated,
  supportsWebP,
  imageRenderingValue,
  typedArrayTypes
};
FeatureDetection.supportsBasis = function(scene) {
  return FeatureDetection.supportsWebAssembly() && scene.context.supportsBasis;
};
FeatureDetection.supportsFullscreen = function() {
  return Fullscreen_default.supportsFullscreen();
};
FeatureDetection.supportsTypedArrays = function() {
  return typeof ArrayBuffer !== "undefined";
};
FeatureDetection.supportsBigInt64Array = function() {
  return typeof BigInt64Array !== "undefined";
};
FeatureDetection.supportsBigUint64Array = function() {
  return typeof BigUint64Array !== "undefined";
};
FeatureDetection.supportsBigInt = function() {
  return typeof BigInt !== "undefined";
};
FeatureDetection.supportsWebWorkers = function() {
  return typeof Worker !== "undefined";
};
FeatureDetection.supportsWebAssembly = function() {
  return typeof WebAssembly !== "undefined";
};
FeatureDetection.supportsWebgl2 = function(scene) {
  Check_default.defined("scene", scene);
  return scene.context.webgl2;
};
FeatureDetection.supportsEsmWebWorkers = function() {
  return !isFirefox() || parseInt(firefoxVersionResult) >= 114;
};
var FeatureDetection_default = FeatureDetection;

export {
  Cartographic_default,
  Cartesian2_default,
  Ellipsoid_default,
  FeatureDetection_default
};
