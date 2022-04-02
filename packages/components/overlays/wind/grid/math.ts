import { isArrayLike } from '@vue-cesium/utils/util'
import { DEG, RAD } from './consts'

/**
 * @param {number} v
 * @param {number} n
 * @returns {number} remainder of floored division, i.e., floor(v / n). Useful for consistent modulo of negative
 *          numbers. See http://en.wikipedia.org/wiki/Modulo_operation.
 */
export function floorMod(v, n) {
  const f = v - n * Math.floor(v / n)
  // hack: when v is within an ulp of n, f can be equal to n (because the subtraction has no effect). But the
  // result should be in the range [0, n), so check for this case. Example: floorMod(-1e-16, 10)
  return f === n ? 0 : f
}

/**
 * Round to closest whole number using banker's rounding. From Java's Math.rint method.
 * @param {number} v
 * @returns {number} the value rounded half even
 */
export function rint(v) {
  const TWOP52 = 4503599627370496 // Math.pow(2, 52)
  let x = Math.abs(v)
  if (x < TWOP52) {
    x += TWOP52
    x -= TWOP52
  }
  return Math.sign(v) * x
}

/**
 * Round to the closest multiple using banker's rounding.
 * @param {number} v
 * @param {number} m the multiple
 * @returns {number} the value rounded to the nearest increment of m.
 */
export function rintToMultiple(v, m) {
  return rint(v / m) * m
}

/**
 * @param {number} v the value to clamp
 * @param {number} low the range lower bound, inclusive
 * @param {number} high the range upper bound, inclusive
 * @returns {number} the value v clamped to the range [low, high].
 */
export function clamp(v, low, high) {
  return Math.max(low, Math.min(v, high))
}

/**
 * @param {number} v the value to rescale
 * @param {number} lowA the source range lower bound, inclusive
 * @param {number} highA the source range upper bound, inclusive
 * @param {number} lowB the target range lower bound, inclusive
 * @param {number} highB the target range upper bound, inclusive
 * @returns {number} the value v rescaled, but not clamped, to the range [lowB, highB] inclusive
 */
export function rescale(v, lowA, highA, lowB, highB) {
  return ((v - lowA) / (highA - lowA)) * (highB - lowB) + lowB
}

/**
 * @param {number[]} vec2 [x, y]
 * @returns {number} euclidean length of the 2-d vector
 */
export function length(vec2) {
  const [x, y] = vec2
  return Math.sqrt(x * x + y * y)
}

/**
 * @param {number[]} a [ax, ay]
 * @param {number[]} b [bx, by]
 * @returns {number} euclidean distance between two 2-d points
 */
export function distance(a, b) {
  return length([b[0] - a[0], b[1] - a[1]])
}

/**
 * @param {number[]} vec2 [x, y]
 * @returns {number} the direction of the 2-d vector on the compass rose in degrees in the range [0, 360).
 */
export function toCardinalDegrees(vec2) {
  const deg = Math.atan2(vec2[0], vec2[1]) * DEG
  return (deg + 360) % 360 // map (-180, 180] to [0, 360)
}

/**
 * Returns the indicatrix of the specified projection at the given point.
 *
 * This method uses finite difference estimates to calculate warping by adding a very small amount (h) to
 * both the longitude and latitude to create two lines. These lines are then projected to pixel space, where
 * they become diagonals of triangles that represent how much the projection warps longitude and latitude at
 * that location.
 *
 * <pre>
 *        (λ, φ+h)                  (xλ, yλ)
 *           .                         .
 *           |               ==>        \
 *           |                           \   __. (xφ, yφ)
 *    (λ, φ) .____. (λ+h, φ)       (x, y) .--
 * </pre>
 *
 * See:
 *     Map Projections: A Working Manual, Snyder, John P: pubs.er.usgs.gov/publication/pp1395
 *     gis.stackexchange.com/questions/5068/how-to-create-an-accurate-tissot-indicatrix
 *     www.jasondavies.com/maps/tissot
 *
 * @param {Function} project the projection function(λ, φ) -> [x, y]
 * @param {number} λ geographic coord lon
 * @param {number} φ geographic coord lat
 * @param {number} x corresponding screen coord x
 * @param {number} y corresponding screen coord y
 * @returns {number[]} array of scaled derivatives [dx/dλ, dy/dλ, dx/dφ, dy/dφ]
 */
export function indicatrix(project, λ, φ, x, y) {
  const H = 0.0000001 // ~= 1cm
  const Hφ = φ < 0 ? H : -H // avoid overflow at the poles
  const pλ = project(λ + H, φ)
  const pφ = project(λ, φ + Hφ)

  // Meridian scale factor (see Snyder, equation 4-3), where R = 1. This handles issue where length of 1° λ
  // changes depending on φ. Without this, there is a pinching effect at the poles.
  const k = Math.cos(φ * RAD)
  const Hk = H * k

  return [
    (pλ[0] - x) / Hk, // dx/dλ
    (pλ[1] - y) / Hk, // dy/dλ
    (pφ[0] - x) / Hφ, // dx/dφ
    (pφ[1] - y) / Hφ // dy/dφ
  ]
}

/**
 * Converts the argument to a number, including special cases for fractions:
 *     0.25  -> 0.25
 *     "1/4" -> 0.25
 *     [1,4] -> 0.25
 *     ".25" -> 0.25
 *
 * @param x any object. When an array, then interpreted as the fraction: a[0] / a[1]. When a string containing
 *        a slash, the value is first converted to an array by splitting on "/".
 * @returns {number} the specified argument converted to a number.
 */
export function decimalize(x) {
  if (typeof x === 'string' && x.indexOf('/') >= 0) {
    x = x.split('/')
  }
  // CONSIDER: remove dependency on isArrayLike
  return isArrayLike(x) && x.length === 2 ? x[0] / x[1] : +x
}

export function mulvec2(vec, c) {
  return [vec[0] * c, vec[1] * c]
}
