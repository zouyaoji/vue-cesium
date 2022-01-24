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
  './when-4bbc8319',
  './EllipsoidOutlineGeometry-ee987302',
  './GeometryOffsetAttribute-6a692b56',
  './RuntimeError-346a3079',
  './Transforms-86b6fa28',
  './Matrix2-91d5b6af',
  './ComponentDatatype-f194c48b',
  './WebGLConstants-1c8239cc',
  './combine-83860057',
  './GeometryAttribute-e0d0d297',
  './GeometryAttributes-7827a6c2',
  './IndexDatatype-ee69f1fd'
], function (
  when,
  EllipsoidOutlineGeometry,
  GeometryOffsetAttribute,
  RuntimeError,
  Transforms,
  Matrix2,
  ComponentDatatype,
  WebGLConstants,
  combine,
  GeometryAttribute,
  GeometryAttributes,
  IndexDatatype
) {
  'use strict'

  function createEllipsoidOutlineGeometry(ellipsoidGeometry, offset) {
    if (when.defined(ellipsoidGeometry.buffer)) {
      ellipsoidGeometry = EllipsoidOutlineGeometry.EllipsoidOutlineGeometry.unpack(ellipsoidGeometry, offset)
    }
    return EllipsoidOutlineGeometry.EllipsoidOutlineGeometry.createGeometry(ellipsoidGeometry)
  }

  return createEllipsoidOutlineGeometry
})
//# sourceMappingURL=createEllipsoidOutlineGeometry.js.map
