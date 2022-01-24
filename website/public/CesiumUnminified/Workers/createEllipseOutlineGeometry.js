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
  './Matrix2-91d5b6af',
  './when-4bbc8319',
  './EllipseOutlineGeometry-412c7c3f',
  './RuntimeError-346a3079',
  './ComponentDatatype-f194c48b',
  './WebGLConstants-1c8239cc',
  './GeometryOffsetAttribute-6a692b56',
  './Transforms-86b6fa28',
  './combine-83860057',
  './EllipseGeometryLibrary-c30b4a37',
  './GeometryAttribute-e0d0d297',
  './GeometryAttributes-7827a6c2',
  './IndexDatatype-ee69f1fd'
], function (
  Matrix2,
  when,
  EllipseOutlineGeometry,
  RuntimeError,
  ComponentDatatype,
  WebGLConstants,
  GeometryOffsetAttribute,
  Transforms,
  combine,
  EllipseGeometryLibrary,
  GeometryAttribute,
  GeometryAttributes,
  IndexDatatype
) {
  'use strict'

  function createEllipseOutlineGeometry(ellipseGeometry, offset) {
    if (when.defined(offset)) {
      ellipseGeometry = EllipseOutlineGeometry.EllipseOutlineGeometry.unpack(ellipseGeometry, offset)
    }
    ellipseGeometry._center = Matrix2.Cartesian3.clone(ellipseGeometry._center)
    ellipseGeometry._ellipsoid = Matrix2.Ellipsoid.clone(ellipseGeometry._ellipsoid)
    return EllipseOutlineGeometry.EllipseOutlineGeometry.createGeometry(ellipseGeometry)
  }

  return createEllipseOutlineGeometry
})
//# sourceMappingURL=createEllipseOutlineGeometry.js.map
