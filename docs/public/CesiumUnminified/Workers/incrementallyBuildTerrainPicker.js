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

import {
  createTaskProcessorWorker_default
} from "./chunk-LK7GEFGB.js";
import {
  AxisAlignedBoundingBox_default
} from "./chunk-EY5HOJFQ.js";
import "./chunk-4O2ARYS7.js";
import {
  Matrix4_default
} from "./chunk-LWZHJWYK.js";
import "./chunk-VRAAQ3FS.js";
import {
  Cartesian3_default
} from "./chunk-LYBNPUEI.js";
import "./chunk-BO22JHBX.js";
import "./chunk-FS42VX2H.js";
import "./chunk-7U5YNLF3.js";

// packages/engine/Source/Workers/incrementallyBuildTerrainPicker.js
var scratchAABBCornerMin = new Cartesian3_default();
var scratchAABBCornerMax = new Cartesian3_default();
var scratchTrianglePoints = [
  new Cartesian3_default(),
  new Cartesian3_default(),
  new Cartesian3_default()
];
var scratchTriangleAABB = new AxisAlignedBoundingBox_default();
var TILE_AABB_MAX = new Cartesian3_default(0.5, 0.5, 0.5);
var TILE_AABB_MIN = new Cartesian3_default(-0.5, -0.5, -0.5);
function incrementallyBuildTerrainPicker(parameters, transferableObjects) {
  const aabbs = new Float64Array(parameters.aabbs);
  const nodeAABBs = Array.from({ length: 4 }, (_, i) => {
    const min = Cartesian3_default.unpack(aabbs, i * 6, scratchAABBCornerMin);
    const max = Cartesian3_default.unpack(aabbs, i * 6 + 3, scratchAABBCornerMax);
    return AxisAlignedBoundingBox_default.fromCorners(
      min,
      max,
      new AxisAlignedBoundingBox_default()
    );
  });
  const inverseTransformArray = new Float64Array(parameters.inverseTransform);
  const inverseTransform = Matrix4_default.unpack(
    inverseTransformArray,
    0,
    new Matrix4_default()
  );
  const triangleIndices = new Uint32Array(parameters.triangleIndices);
  const trianglePositions = new Float64Array(parameters.trianglePositions);
  const intersectingTrianglesArrays = Array.from({ length: 4 }, () => []);
  for (let j = 0; j < triangleIndices.length; j++) {
    Cartesian3_default.unpack(trianglePositions, j * 9, scratchTrianglePoints[0]);
    Cartesian3_default.unpack(trianglePositions, j * 9 + 3, scratchTrianglePoints[1]);
    Cartesian3_default.unpack(trianglePositions, j * 9 + 6, scratchTrianglePoints[2]);
    const triangleAABB = createAABBFromTriangle(
      inverseTransform,
      scratchTrianglePoints
    );
    for (let i = 0; i < 4; i++) {
      const aabbsIntersect = nodeAABBs[i].intersectAxisAlignedBoundingBox(triangleAABB);
      if (!aabbsIntersect) {
        continue;
      }
      intersectingTrianglesArrays[i].push(triangleIndices[j]);
    }
  }
  const intersectingTrianglesTypedArrays = intersectingTrianglesArrays.map(
    (array) => {
      const uintArray = new Uint32Array(array);
      transferableObjects.push(uintArray.buffer);
      return uintArray.buffer;
    }
  );
  return {
    intersectingTrianglesArrays: intersectingTrianglesTypedArrays
  };
}
function createAABBFromTriangle(inverseTransform, trianglePoints) {
  Matrix4_default.multiplyByPoint(
    inverseTransform,
    trianglePoints[0],
    trianglePoints[0]
  );
  Matrix4_default.multiplyByPoint(
    inverseTransform,
    trianglePoints[1],
    trianglePoints[1]
  );
  Matrix4_default.multiplyByPoint(
    inverseTransform,
    trianglePoints[2],
    trianglePoints[2]
  );
  const aabb = AxisAlignedBoundingBox_default.fromPoints(
    trianglePoints,
    scratchTriangleAABB
  );
  Cartesian3_default.clamp(aabb.minimum, TILE_AABB_MIN, TILE_AABB_MAX, aabb.minimum);
  Cartesian3_default.clamp(aabb.maximum, TILE_AABB_MIN, TILE_AABB_MAX, aabb.maximum);
  return aabb;
}
var incrementallyBuildTerrainPicker_default = createTaskProcessorWorker_default(incrementallyBuildTerrainPicker);
export {
  incrementallyBuildTerrainPicker_default as default
};
