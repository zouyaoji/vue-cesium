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

  var removeDuplicatesEpsilon = ComponentDatatype.CesiumMath.EPSILON10

  /**
   * Removes adjacent duplicate values in an array of values.
   *
   * @param {Array.<*>} [values] The array of values.
   * @param {Function} equalsEpsilon Function to compare values with an epsilon. Boolean equalsEpsilon(left, right, epsilon).
   * @param {Boolean} [wrapAround=false] Compare the last value in the array against the first value. If they are equal, the last value is removed.
   * @param {Array.<Number>} [removedIndices=undefined] Store the indices that correspond to the duplicate items removed from the array, if there were any.
   * @returns {Array.<*>|undefined} A new array of values with no adjacent duplicate values or the input array if no duplicates were found.
   *
   * @example
   * // Returns [(1.0, 1.0, 1.0), (2.0, 2.0, 2.0), (3.0, 3.0, 3.0), (1.0, 1.0, 1.0)]
   * var values = [
   *     new Cesium.Cartesian3(1.0, 1.0, 1.0),
   *     new Cesium.Cartesian3(1.0, 1.0, 1.0),
   *     new Cesium.Cartesian3(2.0, 2.0, 2.0),
   *     new Cesium.Cartesian3(3.0, 3.0, 3.0),
   *     new Cesium.Cartesian3(1.0, 1.0, 1.0)];
   * var nonDuplicatevalues = Cesium.PolylinePipeline.removeDuplicates(values, Cartesian3.equalsEpsilon);
   *
   * @example
   * // Returns [(1.0, 1.0, 1.0), (2.0, 2.0, 2.0), (3.0, 3.0, 3.0)]
   * var values = [
   *     new Cesium.Cartesian3(1.0, 1.0, 1.0),
   *     new Cesium.Cartesian3(1.0, 1.0, 1.0),
   *     new Cesium.Cartesian3(2.0, 2.0, 2.0),
   *     new Cesium.Cartesian3(3.0, 3.0, 3.0),
   *     new Cesium.Cartesian3(1.0, 1.0, 1.0)];
   * var nonDuplicatevalues = Cesium.PolylinePipeline.removeDuplicates(values, Cartesian3.equalsEpsilon, true);
   *
   * @example
   * // Returns [(1.0, 1.0, 1.0), (2.0, 2.0, 2.0), (3.0, 3.0, 3.0)]
   * // removedIndices will be equal to [1, 3, 5]
   * var values = [
   *     new Cesium.Cartesian3(1.0, 1.0, 1.0),
   *     new Cesium.Cartesian3(1.0, 1.0, 1.0),
   *     new Cesium.Cartesian3(2.0, 2.0, 2.0),
   *     new Cesium.Cartesian3(2.0, 2.0, 2.0),
   *     new Cesium.Cartesian3(3.0, 3.0, 3.0),
   *     new Cesium.Cartesian3(1.0, 1.0, 1.0)];
   * var nonDuplicatevalues = Cesium.PolylinePipeline.removeDuplicates(values, Cartesian3.equalsEpsilon, true);
   * @private
   */
  function arrayRemoveDuplicates(values, equalsEpsilon, wrapAround, removedIndices) {
    //>>includeStart('debug', pragmas.debug);
    RuntimeError.Check.defined('equalsEpsilon', equalsEpsilon)
    //>>includeEnd('debug');

    if (!when.defined(values)) {
      return undefined
    }

    wrapAround = when.defaultValue(wrapAround, false)
    var storeRemovedIndices = when.defined(removedIndices)

    var length = values.length
    if (length < 2) {
      return values
    }

    var i
    var v0 = values[0]
    var v1

    // We only want to create a new array if there are duplicates in the array.
    // As such, cleanedValues is undefined until it encounters the first duplicate, if it exists.
    var cleanedValues
    var lastCleanIndex = 0

    // removedIndexLCI keeps track of where lastCleanIndex would be if it were sorted into the removedIndices array.
    // In case of arrays such as [A, B, C, ..., A, A, A], removedIndices will not be sorted properly without this.
    var removedIndexLCI = -1

    for (i = 1; i < length; ++i) {
      v1 = values[i]
      if (equalsEpsilon(v0, v1, removeDuplicatesEpsilon)) {
        if (!when.defined(cleanedValues)) {
          cleanedValues = values.slice(0, i)
          lastCleanIndex = i - 1
          removedIndexLCI = 0
        }
        if (storeRemovedIndices) {
          removedIndices.push(i)
        }
      } else {
        if (when.defined(cleanedValues)) {
          cleanedValues.push(v1)
          lastCleanIndex = i
          if (storeRemovedIndices) {
            removedIndexLCI = removedIndices.length
          }
        }
        v0 = v1
      }
    }

    if (wrapAround && equalsEpsilon(values[0], values[length - 1], removeDuplicatesEpsilon)) {
      if (storeRemovedIndices) {
        if (when.defined(cleanedValues)) {
          removedIndices.splice(removedIndexLCI, 0, lastCleanIndex)
        } else {
          removedIndices.push(length - 1)
        }
      }

      if (when.defined(cleanedValues)) {
        cleanedValues.length -= 1
      } else {
        cleanedValues = values.slice(0, -1)
      }
    }

    return when.defined(cleanedValues) ? cleanedValues : values
  }

  exports.arrayRemoveDuplicates = arrayRemoveDuplicates
})
//# sourceMappingURL=arrayRemoveDuplicates-cf5c3227.js.map
