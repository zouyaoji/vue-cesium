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
  './EllipseGeometry-0ca521d0',
  './RuntimeError-346a3079',
  './ComponentDatatype-f194c48b',
  './WebGLConstants-1c8239cc',
  './GeometryOffsetAttribute-6a692b56',
  './Transforms-86b6fa28',
  './combine-83860057',
  './EllipseGeometryLibrary-c30b4a37',
  './GeometryAttribute-e0d0d297',
  './GeometryAttributes-7827a6c2',
  './GeometryInstance-a3cff41c',
  './GeometryPipeline-4bea2645',
  './AttributeCompression-1f6679e1',
  './EncodedCartesian3-882fbcbd',
  './IndexDatatype-ee69f1fd',
  './IntersectionTests-26599c5e',
  './Plane-4f333bc4',
  './VertexFormat-f9c1a155'
], function (
  Matrix2,
  when,
  EllipseGeometry,
  RuntimeError,
  ComponentDatatype,
  WebGLConstants,
  GeometryOffsetAttribute,
  Transforms,
  combine,
  EllipseGeometryLibrary,
  GeometryAttribute,
  GeometryAttributes,
  GeometryInstance,
  GeometryPipeline,
  AttributeCompression,
  EncodedCartesian3,
  IndexDatatype,
  IntersectionTests,
  Plane,
  VertexFormat
) {
  'use strict'

  function createEllipseGeometry(ellipseGeometry, offset) {
    if (when.defined(offset)) {
      ellipseGeometry = EllipseGeometry.EllipseGeometry.unpack(ellipseGeometry, offset)
    }
    ellipseGeometry._center = Matrix2.Cartesian3.clone(ellipseGeometry._center)
    ellipseGeometry._ellipsoid = Matrix2.Ellipsoid.clone(ellipseGeometry._ellipsoid)
    return EllipseGeometry.EllipseGeometry.createGeometry(ellipseGeometry)
  }

  return createEllipseGeometry
})
//# sourceMappingURL=createEllipseGeometry.js.map
