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
 * See https://github.com/CesiumGS/cesium/blob/master/LICENSE.md for full licensing details.
 */

define(['./Cartesian2-e9bb1bb3', './when-208fe5b0', './EllipseGeometry-b9cabe78', './Check-5e798bbf', './Math-56f06cd5', './GeometryOffsetAttribute-6fce6185', './Transforms-9651fa9c', './RuntimeError-7f634f5d', './ComponentDatatype-cc8f5f00', './WebGLConstants-5e2a49ab', './EllipseGeometryLibrary-e0c0bfc2', './GeometryAttribute-fbe4b0b6', './GeometryAttributes-b0b294d8', './GeometryInstance-44e07c7e', './GeometryPipeline-a6a68cab', './AttributeCompression-d1cd1d9c', './EncodedCartesian3-099fd63d', './IndexDatatype-3a89c589', './IntersectionTests-4352af03', './Plane-9825d2dd', './VertexFormat-9eeda9f8'], function (Cartesian2, when, EllipseGeometry, Check, _Math, GeometryOffsetAttribute, Transforms, RuntimeError, ComponentDatatype, WebGLConstants, EllipseGeometryLibrary, GeometryAttribute, GeometryAttributes, GeometryInstance, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, VertexFormat) { 'use strict';

  function createEllipseGeometry(ellipseGeometry, offset) {
    if (when.defined(offset)) {
      ellipseGeometry = EllipseGeometry.EllipseGeometry.unpack(ellipseGeometry, offset);
    }
    ellipseGeometry._center = Cartesian2.Cartesian3.clone(ellipseGeometry._center);
    ellipseGeometry._ellipsoid = Cartesian2.Ellipsoid.clone(ellipseGeometry._ellipsoid);
    return EllipseGeometry.EllipseGeometry.createGeometry(ellipseGeometry);
  }

  return createEllipseGeometry;

});
//# sourceMappingURL=createEllipseGeometry.js.map
