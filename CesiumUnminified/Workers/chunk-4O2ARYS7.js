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


// packages/engine/Source/Core/Intersect.js
var Intersect = {
  /**
   * Represents that an object is not contained within the frustum.
   *
   * @type {number}
   * @constant
   */
  OUTSIDE: -1,
  /**
   * Represents that an object intersects one of the frustum's planes.
   *
   * @type {number}
   * @constant
   */
  INTERSECTING: 0,
  /**
   * Represents that an object is fully within the frustum.
   *
   * @type {number}
   * @constant
   */
  INSIDE: 1
};
var Intersect_default = Object.freeze(Intersect);

export {
  Intersect_default
};
