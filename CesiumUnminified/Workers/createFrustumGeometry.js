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
  './FrustumGeometry-8664d8ec',
  './Transforms-86b6fa28',
  './Matrix2-91d5b6af',
  './RuntimeError-346a3079',
  './ComponentDatatype-f194c48b',
  './WebGLConstants-1c8239cc',
  './combine-83860057',
  './GeometryAttribute-e0d0d297',
  './GeometryAttributes-7827a6c2',
  './Plane-4f333bc4',
  './VertexFormat-f9c1a155'
], function (
  when,
  FrustumGeometry,
  Transforms,
  Matrix2,
  RuntimeError,
  ComponentDatatype,
  WebGLConstants,
  combine,
  GeometryAttribute,
  GeometryAttributes,
  Plane,
  VertexFormat
) {
  'use strict'

  function createFrustumGeometry(frustumGeometry, offset) {
    if (when.defined(offset)) {
      frustumGeometry = FrustumGeometry.FrustumGeometry.unpack(frustumGeometry, offset)
    }
    return FrustumGeometry.FrustumGeometry.createGeometry(frustumGeometry)
  }

  return createFrustumGeometry
})
//# sourceMappingURL=createFrustumGeometry.js.map
