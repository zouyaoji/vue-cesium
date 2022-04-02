// https://en.wikipedia.org/wiki/Regular_grid

import { RAD } from './consts'
import { decimalize, floorMod } from './math'
// import REGULAR_FRAG from './regular.frag'

/**
 * Creates a regular geographic grid. Each axis defines the "start" value in degrees, "delta" degrees between
 * ticks, and the "size" (number of ticks from the origin, inclusive). Positive deltas move eastward/northward. This
 * example creates a full 1° x 1° grid covering the earth starting at the south pole:
 *
 *     λaxis: {start: 0, delta: 1, size: 360}    where λ in the range [0, 359]
 *     φaxis: {start: -90, delta: 1, size: 181}  where φ in the range [-90, 90]
 *
 * A grid maps from [λ, φ] coordinates to grid point indices.
 *
 * @param λaxis longitude axis
 * @param φaxis latitude axis
 * @returns {*}
 */
export function regularGrid(λaxis, φaxis) {
  const nx = Math.floor(λaxis.size) // number of lon points
  const ny = Math.floor(φaxis.size) // number of lat points
  const np = nx * ny // total number of points
  const Δλ = decimalize(λaxis.delta) // distance between lon points
  const Δφ = decimalize(φaxis.delta) // distance between lat points
  const λ0 = decimalize(λaxis.start) // lon origin
  const φ0 = decimalize(φaxis.start) // lat origin, expected to be on range [-90, 90]
  const λ1 = λ0 + Δλ * (nx - 1) // lon upper bound
  const φ1 = φ0 + Δφ * (ny - 1) // lat upper bound

  const λlow = (λ0 - Δλ / 2) * RAD
  const λhigh = (λ1 + Δλ / 2) * RAD
  const λsize = λhigh - λlow
  const φlow = (φ0 - Δφ / 2) * RAD
  const φhigh = (φ1 + Δφ / 2) * RAD
  const φsize = φhigh - φlow
  const low = [λlow, φlow]
  const size = [λsize, φsize]

  const isCylinder = Math.floor(nx * Δλ) >= 360 // true if the grid forms a cylinder

  //function iterator() {
  //    const i = 0;
  //    return {
  //        next: function() {
  //            if (i >= np) {
  //                return {done: true};
  //            }
  //            const x = i % nx;
  //            const y = Math.floor(i / nx);
  //            const λ = λ0 + x * Δλ;
  //            const φ = φ0 + y * Δφ;
  //            return {value: [λ, φ, i++], done: false};
  //        },
  //    };
  //}

  /** @returns {{width: number, height: number}} dimensions of this grid */
  function dimensions() {
    return {
      width: nx,
      height: ny
    }
  }

  /** @returns {boolean} true if the grid fully wraps around longitudinal axis */
  function isCylindrical() {
    return isCylinder
  }

  /**
   * @param {Function} cb the callback ƒ(λ, φ, i), where a truthy return value terminates the iteration.
   * @param {number?} start the starting grid index.
   * @returns {number} the grid index of the next iteration, or NaN if iteration is finished.
   */
  function forEach(cb, start) {
    for (let i = start || 0; i < np; i++) {
      const x = i % nx
      const y = Math.floor(i / nx)
      const λ = λ0 + x * Δλ
      const φ = φ0 + y * Δφ
      if (cb(λ, φ, i)) {
        return i + 1 // Terminate iteration and return next grid index.
      }
    }
    return NaN // Iteration is finished.
  }

  /**
   * @param {number} λ latitude (degrees)
   * @param {number} φ longitude (degrees)
   * @returns {number} index of closest grid point or NaN if further than Δλ/2 or Δφ/2 from the grid boundary.
   */
  function closest(λ, φ) {
    if (λ === λ && φ === φ) {
      const x = floorMod(λ - λ0, 360) / Δλ
      const y = (φ - φ0) / Δφ
      const rx = Math.round(x)
      const ry = Math.round(y)

      if (0 <= ry && ry < ny && 0 <= rx && (rx < nx || (rx === nx && isCylinder))) {
        const i = ry * nx + rx
        return rx === nx ? i - nx : i
      }
    }
    return NaN
  }

  /**
   * Identifies the four points surrounding the specified coordinates. The result is a six-element array:
   *
   *     0-3: the indices of the four points, in increasing order.
   *     4,5: the fraction that λ,φ is away from the first point, normalized to the range [0, 1].
   *
   * Example:
   * <pre>
   *          1      2           After converting λ and φ to positions on the x and y grid axes, we find the
   *         fx  x   cx          four points that enclose point [x, y]. These points are at the four
   *          | =1.4 |           corners specified by the floor and ceiling of x and y. For example, given
   *       --i00-|--i10-- fy 8   x = 1.4 and y = 8.3, the four surrounding grid points are [1, 8], [2, 8],
   *     y ___|_ .   |           [1, 9] and [2, 9]. These points have index i00, i10, i01, i11, respectively,
   *   =8.3   |      |           and result of this function is an array [i00, i10, i01, i11, 0.4, 0.3].
   *       --i01----i11-- cy 9
   *          |      |
   * </pre>
   *
   * @param {number} λ latitude (degrees)
   * @param {number} φ longitude (degrees)
   * @returns {number[]} the indices of the four grid points surrounding the coordinate pair and the (x,y) fraction,
   *          or [NaN, NaN, NaN, NaN, NaN, NaN] if all points are not found.
   */
  function closest4(λ, φ) {
    if (λ === λ && φ === φ) {
      const x = floorMod(λ - λ0, 360) / Δλ
      const y = (φ - φ0) / Δφ
      const fx = Math.floor(x)
      const fy = Math.floor(y)
      const cx = fx + 1
      const cy = fy + 1
      const Δx = x - fx
      const Δy = y - fy

      if (0 <= fy && cy < ny && 0 <= fx && (cx < nx || (cx === nx && isCylinder))) {
        const i00 = fy * nx + fx
        let i10 = i00 + 1
        const i01 = i00 + nx
        let i11 = i01 + 1
        if (cx === nx) {
          i10 -= nx
          i11 -= nx
        }
        return [i00, i10, i01, i11, Δx, Δy]
      }
    }
    return [NaN, NaN, NaN, NaN, NaN, NaN]
  }

  // function webgl() {
  //   return {
  //     shaderSource: REGULAR_FRAG,
  //     uniforms: {
  //       u_Low: low,
  //       u_Size: size,
  //     },
  //   }
  // }

  return {
    dimensions: dimensions,
    isCylindrical: isCylindrical,
    forEach: forEach,
    closest: closest,
    closest4: closest4
    // webgl: webgl,
  }
}
