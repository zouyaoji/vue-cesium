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

define(['./when-cbf8cd21', './Check-35e1a91d', './Math-d4357f39', './Cartesian2-d70cd429', './Transforms-2e432899', './RuntimeError-f4c64df1', './WebGLConstants-95ceb4e9', './ComponentDatatype-607c9a0c', './GeometryAttribute-9bd671cb', './GeometryAttributes-90846c5f', './AttributeCompression-9b51d360', './GeometryPipeline-cd7ffa5d', './EncodedCartesian3-4d6dfc44', './IndexDatatype-573b6d9d', './IntersectionTests-73d03130', './Plane-fbaedec7', './GeometryOffsetAttribute-9c676324', './VertexFormat-fe64931e', './EllipseGeometryLibrary-d31a9ce9', './GeometryInstance-8aa344c5', './EllipseGeometry-3d9a3c15'], function (when, Check, _Math, Cartesian2, Transforms, RuntimeError, WebGLConstants, ComponentDatatype, GeometryAttribute, GeometryAttributes, AttributeCompression, GeometryPipeline, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, GeometryOffsetAttribute, VertexFormat, EllipseGeometryLibrary, GeometryInstance, EllipseGeometry) { 'use strict';

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
