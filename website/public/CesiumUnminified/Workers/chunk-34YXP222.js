/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.135.0
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
  IndexDatatype_default
} from "./chunk-H7B7FU2U.js";
import {
  Math_default
} from "./chunk-OE22564R.js";
import {
  DeveloperError_default
} from "./chunk-W4PIP5PG.js";
import {
  defined_default
} from "./chunk-75HAJIDT.js";

// packages/engine/Source/Core/TerrainProvider.js
function TerrainProvider() {
  DeveloperError_default.throwInstantiationError();
}
Object.defineProperties(TerrainProvider.prototype, {
  /**
   * Gets an event that is raised when the terrain provider encounters an asynchronous error.  By subscribing
   * to the event, you will be notified of the error and can potentially recover from it.  Event listeners
   * are passed an instance of {@link TileProviderError}.
   * @memberof TerrainProvider.prototype
   * @type {Event<TerrainProvider.ErrorEvent>}
   * @readonly
   */
  errorEvent: {
    get: DeveloperError_default.throwInstantiationError
  },
  /**
   * Gets the credit to display when this terrain provider is active.  Typically this is used to credit
   * the source of the terrain.
   * @memberof TerrainProvider.prototype
   * @type {Credit}
   * @readonly
   */
  credit: {
    get: DeveloperError_default.throwInstantiationError
  },
  /**
   * Gets the tiling scheme used by the provider.
   * @memberof TerrainProvider.prototype
   * @type {TilingScheme}
   * @readonly
   */
  tilingScheme: {
    get: DeveloperError_default.throwInstantiationError
  },
  /**
   * Gets a value indicating whether or not the provider includes a water mask.  The water mask
   * indicates which areas of the globe are water rather than land, so they can be rendered
   * as a reflective surface with animated waves.
   * @memberof TerrainProvider.prototype
   * @type {boolean}
   * @readonly
   */
  hasWaterMask: {
    get: DeveloperError_default.throwInstantiationError
  },
  /**
   * Gets a value indicating whether or not the requested tiles include vertex normals.
   * @memberof TerrainProvider.prototype
   * @type {boolean}
   * @readonly
   */
  hasVertexNormals: {
    get: DeveloperError_default.throwInstantiationError
  },
  /**
   * Gets an object that can be used to determine availability of terrain from this provider, such as
   * at points and in rectangles. This property may be undefined if availability
   * information is not available.
   * @memberof TerrainProvider.prototype
   * @type {TileAvailability|undefined}
   * @readonly
   */
  availability: {
    get: DeveloperError_default.throwInstantiationError
  }
});
var regularGridIndicesCache = [];
TerrainProvider.getRegularGridIndices = function(width, height) {
  if (width * height >= Math_default.FOUR_GIGABYTES) {
    throw new DeveloperError_default(
      "The total number of vertices (width * height) must be less than 4,294,967,296."
    );
  }
  let byWidth = regularGridIndicesCache[width];
  if (!defined_default(byWidth)) {
    regularGridIndicesCache[width] = byWidth = [];
  }
  let indices = byWidth[height];
  if (!defined_default(indices)) {
    if (width * height < Math_default.SIXTY_FOUR_KILOBYTES) {
      indices = byWidth[height] = new Uint16Array(
        (width - 1) * (height - 1) * 6
      );
    } else {
      indices = byWidth[height] = new Uint32Array(
        (width - 1) * (height - 1) * 6
      );
    }
    addRegularGridIndices(width, height, indices, 0);
  }
  return indices;
};
var regularGridAndEdgeIndicesCache = [];
TerrainProvider.getRegularGridIndicesAndEdgeIndices = function(width, height) {
  if (width * height >= Math_default.FOUR_GIGABYTES) {
    throw new DeveloperError_default(
      "The total number of vertices (width * height) must be less than 4,294,967,296."
    );
  }
  let byWidth = regularGridAndEdgeIndicesCache[width];
  if (!defined_default(byWidth)) {
    regularGridAndEdgeIndicesCache[width] = byWidth = [];
  }
  let indicesAndEdges = byWidth[height];
  if (!defined_default(indicesAndEdges)) {
    const indices = TerrainProvider.getRegularGridIndices(width, height);
    const edgeIndices = getEdgeIndices(width, height);
    const westIndicesSouthToNorth = edgeIndices.westIndicesSouthToNorth;
    const southIndicesEastToWest = edgeIndices.southIndicesEastToWest;
    const eastIndicesNorthToSouth = edgeIndices.eastIndicesNorthToSouth;
    const northIndicesWestToEast = edgeIndices.northIndicesWestToEast;
    indicesAndEdges = byWidth[height] = {
      indices,
      westIndicesSouthToNorth,
      southIndicesEastToWest,
      eastIndicesNorthToSouth,
      northIndicesWestToEast
    };
  }
  return indicesAndEdges;
};
var regularGridAndSkirtAndEdgeIndicesCache = [];
TerrainProvider.getRegularGridAndSkirtIndicesAndEdgeIndices = function(width, height) {
  if (width * height >= Math_default.FOUR_GIGABYTES) {
    throw new DeveloperError_default(
      "The total number of vertices (width * height) must be less than 4,294,967,296."
    );
  }
  let byWidth = regularGridAndSkirtAndEdgeIndicesCache[width];
  if (!defined_default(byWidth)) {
    regularGridAndSkirtAndEdgeIndicesCache[width] = byWidth = [];
  }
  let indicesAndEdges = byWidth[height];
  if (!defined_default(indicesAndEdges)) {
    const gridVertexCount = width * height;
    const gridIndexCount = (width - 1) * (height - 1) * 6;
    const edgeVertexCount = width * 2 + height * 2;
    const edgeIndexCount = Math.max(0, edgeVertexCount - 4) * 6;
    const vertexCount = gridVertexCount + edgeVertexCount;
    const indexCount = gridIndexCount + edgeIndexCount;
    const edgeIndices = getEdgeIndices(width, height);
    const westIndicesSouthToNorth = edgeIndices.westIndicesSouthToNorth;
    const southIndicesEastToWest = edgeIndices.southIndicesEastToWest;
    const eastIndicesNorthToSouth = edgeIndices.eastIndicesNorthToSouth;
    const northIndicesWestToEast = edgeIndices.northIndicesWestToEast;
    const indices = IndexDatatype_default.createTypedArray(vertexCount, indexCount);
    addRegularGridIndices(width, height, indices, 0);
    TerrainProvider.addSkirtIndices(
      westIndicesSouthToNorth,
      southIndicesEastToWest,
      eastIndicesNorthToSouth,
      northIndicesWestToEast,
      gridVertexCount,
      indices,
      gridIndexCount
    );
    indicesAndEdges = byWidth[height] = {
      indices,
      westIndicesSouthToNorth,
      southIndicesEastToWest,
      eastIndicesNorthToSouth,
      northIndicesWestToEast,
      indexCountWithoutSkirts: gridIndexCount
    };
  }
  return indicesAndEdges;
};
TerrainProvider.getSkirtVertexCount = function(westIndicesSouthToNorth, southIndicesEastToWest, eastIndicesNorthToSouth, northIndicesWestToEast) {
  return westIndicesSouthToNorth.length + southIndicesEastToWest.length + eastIndicesNorthToSouth.length + northIndicesWestToEast.length;
};
TerrainProvider.getSkirtIndexCount = function(skirtVertexCount) {
  return (skirtVertexCount - 4) * 2 * 3;
};
TerrainProvider.getSkirtIndexCountWithFilledCorners = function(skirtVertexCount) {
  return ((skirtVertexCount - 4) * 2 + 4) * 3;
};
TerrainProvider.addSkirtIndices = function(westIndicesSouthToNorth, southIndicesEastToWest, eastIndicesNorthToSouth, northIndicesWestToEast, vertexCount, indices, offset) {
  let vertexIndex = vertexCount;
  offset = addSkirtIndices(
    westIndicesSouthToNorth,
    vertexIndex,
    indices,
    offset
  );
  vertexIndex += westIndicesSouthToNorth.length;
  offset = addSkirtIndices(
    southIndicesEastToWest,
    vertexIndex,
    indices,
    offset
  );
  vertexIndex += southIndicesEastToWest.length;
  offset = addSkirtIndices(
    eastIndicesNorthToSouth,
    vertexIndex,
    indices,
    offset
  );
  vertexIndex += eastIndicesNorthToSouth.length;
  addSkirtIndices(northIndicesWestToEast, vertexIndex, indices, offset);
};
TerrainProvider.addSkirtIndicesWithFilledCorners = function(westIndicesSouthToNorth, southIndicesEastToWest, eastIndicesNorthToSouth, northIndicesWestToEast, vertexCount, indices, offset) {
  TerrainProvider.addSkirtIndices(
    westIndicesSouthToNorth,
    southIndicesEastToWest,
    eastIndicesNorthToSouth,
    northIndicesWestToEast,
    vertexCount,
    indices,
    offset
  );
  const skirtVertexCount = TerrainProvider.getSkirtVertexCount(
    westIndicesSouthToNorth,
    southIndicesEastToWest,
    eastIndicesNorthToSouth,
    northIndicesWestToEast
  );
  const skirtIndexCountWithoutCaps = TerrainProvider.getSkirtIndexCount(skirtVertexCount);
  const cornerStartIdx = offset + skirtIndexCountWithoutCaps;
  const cornerSWIndex = westIndicesSouthToNorth[0];
  const cornerNWIndex = northIndicesWestToEast[0];
  const cornerNEIndex = eastIndicesNorthToSouth[0];
  const cornerSEIndex = southIndicesEastToWest[0];
  const westSouthIndex = vertexCount;
  const westNorthIndex = westSouthIndex + westIndicesSouthToNorth.length - 1;
  const southEastIndex = westNorthIndex + 1;
  const southWestIndex = southEastIndex + southIndicesEastToWest.length - 1;
  const eastNorthIndex = southWestIndex + 1;
  const eastSouthIndex = eastNorthIndex + eastIndicesNorthToSouth.length - 1;
  const northWestIndex = eastSouthIndex + 1;
  const northEastIndex = northWestIndex + northIndicesWestToEast.length - 1;
  indices[cornerStartIdx + 0] = cornerSWIndex;
  indices[cornerStartIdx + 1] = westSouthIndex;
  indices[cornerStartIdx + 2] = southWestIndex;
  indices[cornerStartIdx + 3] = cornerSEIndex;
  indices[cornerStartIdx + 4] = southEastIndex;
  indices[cornerStartIdx + 5] = eastSouthIndex;
  indices[cornerStartIdx + 6] = cornerNEIndex;
  indices[cornerStartIdx + 7] = eastNorthIndex;
  indices[cornerStartIdx + 8] = northEastIndex;
  indices[cornerStartIdx + 9] = cornerNWIndex;
  indices[cornerStartIdx + 10] = northWestIndex;
  indices[cornerStartIdx + 11] = westNorthIndex;
};
function getEdgeIndices(width, height) {
  const westIndicesSouthToNorth = new Array(height);
  const southIndicesEastToWest = new Array(width);
  const eastIndicesNorthToSouth = new Array(height);
  const northIndicesWestToEast = new Array(width);
  let i;
  for (i = 0; i < width; ++i) {
    northIndicesWestToEast[i] = i;
    southIndicesEastToWest[i] = width * height - 1 - i;
  }
  for (i = 0; i < height; ++i) {
    eastIndicesNorthToSouth[i] = (i + 1) * width - 1;
    westIndicesSouthToNorth[i] = (height - i - 1) * width;
  }
  return {
    westIndicesSouthToNorth,
    southIndicesEastToWest,
    eastIndicesNorthToSouth,
    northIndicesWestToEast
  };
}
function addRegularGridIndices(width, height, indices, offset) {
  let index = 0;
  for (let j = 0; j < height - 1; ++j) {
    for (let i = 0; i < width - 1; ++i) {
      const upperLeft = index;
      const lowerLeft = upperLeft + width;
      const lowerRight = lowerLeft + 1;
      const upperRight = upperLeft + 1;
      indices[offset++] = upperLeft;
      indices[offset++] = lowerLeft;
      indices[offset++] = upperRight;
      indices[offset++] = upperRight;
      indices[offset++] = lowerLeft;
      indices[offset++] = lowerRight;
      ++index;
    }
    ++index;
  }
}
function addSkirtIndices(edgeIndices, vertexIndex, indices, offset) {
  let previousIndex = edgeIndices[0];
  const length = edgeIndices.length;
  for (let i = 1; i < length; ++i) {
    const index = edgeIndices[i];
    indices[offset++] = previousIndex;
    indices[offset++] = index;
    indices[offset++] = vertexIndex;
    indices[offset++] = vertexIndex;
    indices[offset++] = index;
    indices[offset++] = vertexIndex + 1;
    previousIndex = index;
    ++vertexIndex;
  }
  return offset;
}
TerrainProvider.heightmapTerrainQuality = 0.25;
TerrainProvider.getEstimatedLevelZeroGeometricErrorForAHeightmap = function(ellipsoid, tileImageWidth, numberOfTilesAtLevelZero) {
  return ellipsoid.maximumRadius * 2 * Math.PI * TerrainProvider.heightmapTerrainQuality / (tileImageWidth * numberOfTilesAtLevelZero);
};
TerrainProvider.prototype.requestTileGeometry = DeveloperError_default.throwInstantiationError;
TerrainProvider.prototype.getLevelMaximumGeometricError = DeveloperError_default.throwInstantiationError;
TerrainProvider.prototype.getTileDataAvailable = DeveloperError_default.throwInstantiationError;
TerrainProvider.prototype.loadTileDataAvailability = DeveloperError_default.throwInstantiationError;
var TerrainProvider_default = TerrainProvider;

export {
  TerrainProvider_default
};
