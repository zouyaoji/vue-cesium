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

define(['./PrimitivePipeline-34572341', './createTaskProcessorWorker', './Transforms-9651fa9c', './Cartesian2-e9bb1bb3', './Check-5e798bbf', './when-208fe5b0', './Math-56f06cd5', './RuntimeError-7f634f5d', './ComponentDatatype-cc8f5f00', './WebGLConstants-5e2a49ab', './GeometryAttribute-fbe4b0b6', './GeometryAttributes-b0b294d8', './GeometryPipeline-a6a68cab', './AttributeCompression-d1cd1d9c', './EncodedCartesian3-099fd63d', './IndexDatatype-3a89c589', './IntersectionTests-4352af03', './Plane-9825d2dd', './WebMercatorProjection-7b54c659'], function (PrimitivePipeline, createTaskProcessorWorker, Transforms, Cartesian2, Check, when, _Math, RuntimeError, ComponentDatatype, WebGLConstants, GeometryAttribute, GeometryAttributes, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, WebMercatorProjection) { 'use strict';

  function combineGeometry(packedParameters, transferableObjects) {
    var parameters = PrimitivePipeline.PrimitivePipeline.unpackCombineGeometryParameters(
      packedParameters
    );
    var results = PrimitivePipeline.PrimitivePipeline.combineGeometry(parameters);
    return PrimitivePipeline.PrimitivePipeline.packCombineGeometryResults(
      results,
      transferableObjects
    );
  }
  var combineGeometry$1 = createTaskProcessorWorker(combineGeometry);

  return combineGeometry$1;

});
//# sourceMappingURL=combineGeometry.js.map
