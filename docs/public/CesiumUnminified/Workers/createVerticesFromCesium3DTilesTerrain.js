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
  Cesium3DTilesTerrainGeometryProcessor_default
} from "./chunk-Y5MRBKQN.js";
import "./chunk-WHLGBMBC.js";
import "./chunk-D63Z7KKL.js";
import {
  createTaskProcessorWorker_default
} from "./chunk-LK7GEFGB.js";
import "./chunk-N6XBJBI7.js";
import "./chunk-6WDMPXQ7.js";
import "./chunk-4R6FGUFP.js";
import "./chunk-XLIJV3YZ.js";
import "./chunk-EY5HOJFQ.js";
import "./chunk-FDOLXORR.js";
import "./chunk-M5DVYXJJ.js";
import "./chunk-K2PLKJJG.js";
import "./chunk-E4YDCSQK.js";
import "./chunk-4O2ARYS7.js";
import "./chunk-S2KVL7OJ.js";
import "./chunk-LWZHJWYK.js";
import "./chunk-EOSX23OS.js";
import "./chunk-L4OFWHNI.js";
import "./chunk-VRAAQ3FS.js";
import "./chunk-7SLNBIZS.js";
import "./chunk-LYBNPUEI.js";
import "./chunk-BO22JHBX.js";
import "./chunk-FS42VX2H.js";
import "./chunk-7U5YNLF3.js";

// packages/engine/Source/Workers/createVerticesFromCesium3DTilesTerrain.js
function createVerticesFromCesium3DTilesTerrain(options, transferableObjects) {
  const meshPromise = Cesium3DTilesTerrainGeometryProcessor_default.createMesh(options);
  return meshPromise.then(function(mesh) {
    const verticesBuffer = mesh.vertices.buffer;
    const indicesBuffer = mesh.indices.buffer;
    const westIndicesBuffer = mesh.westIndicesSouthToNorth.buffer;
    const southIndicesBuffer = mesh.southIndicesEastToWest.buffer;
    const eastIndicesBuffer = mesh.eastIndicesNorthToSouth.buffer;
    const northIndicesBuffer = mesh.northIndicesWestToEast.buffer;
    transferableObjects.push(
      verticesBuffer,
      indicesBuffer,
      westIndicesBuffer,
      southIndicesBuffer,
      eastIndicesBuffer,
      northIndicesBuffer
    );
    return {
      verticesBuffer,
      indicesBuffer,
      vertexCountWithoutSkirts: mesh.vertexCountWithoutSkirts,
      indexCountWithoutSkirts: mesh.indexCountWithoutSkirts,
      encoding: mesh.encoding,
      westIndicesBuffer,
      southIndicesBuffer,
      eastIndicesBuffer,
      northIndicesBuffer
    };
  });
}
var createVerticesFromCesium3DTilesTerrain_default = createTaskProcessorWorker_default(
  createVerticesFromCesium3DTilesTerrain
);
export {
  createVerticesFromCesium3DTilesTerrain_default as default
};
