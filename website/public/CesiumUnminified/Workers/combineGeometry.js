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
  './PrimitivePipeline-0b29d35a',
  './createTaskProcessorWorker',
  './Transforms-86b6fa28',
  './Matrix2-91d5b6af',
  './RuntimeError-346a3079',
  './when-4bbc8319',
  './ComponentDatatype-f194c48b',
  './WebGLConstants-1c8239cc',
  './combine-83860057',
  './GeometryAttribute-e0d0d297',
  './GeometryAttributes-7827a6c2',
  './GeometryPipeline-4bea2645',
  './AttributeCompression-1f6679e1',
  './EncodedCartesian3-882fbcbd',
  './IndexDatatype-ee69f1fd',
  './IntersectionTests-26599c5e',
  './Plane-4f333bc4',
  './WebMercatorProjection-c196164d'
], function (
  PrimitivePipeline,
  createTaskProcessorWorker,
  Transforms,
  Matrix2,
  RuntimeError,
  when,
  ComponentDatatype,
  WebGLConstants,
  combine,
  GeometryAttribute,
  GeometryAttributes,
  GeometryPipeline,
  AttributeCompression,
  EncodedCartesian3,
  IndexDatatype,
  IntersectionTests,
  Plane,
  WebMercatorProjection
) {
  'use strict'

  function combineGeometry(packedParameters, transferableObjects) {
    var parameters = PrimitivePipeline.PrimitivePipeline.unpackCombineGeometryParameters(packedParameters)
    var results = PrimitivePipeline.PrimitivePipeline.combineGeometry(parameters)
    return PrimitivePipeline.PrimitivePipeline.packCombineGeometryResults(results, transferableObjects)
  }
  var combineGeometry$1 = createTaskProcessorWorker(combineGeometry)

  return combineGeometry$1
})
//# sourceMappingURL=combineGeometry.js.map
