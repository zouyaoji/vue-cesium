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
  BoundingRectangle_default
} from "./chunk-AFGP5BXS.js";
import {
  GeometryPipeline_default
} from "./chunk-KIJR26N3.js";
import "./chunk-4R6FGUFP.js";
import "./chunk-TCOUGKXF.js";
import {
  CornerType_default,
  PolylineVolumeGeometryLibrary_default,
  oneTimeWarning_default
} from "./chunk-D2PEV362.js";
import "./chunk-EAAH543Q.js";
import "./chunk-5PJB7ASO.js";
import {
  VertexFormat_default
} from "./chunk-N66PIK46.js";
import "./chunk-XLIJV3YZ.js";
import "./chunk-EY5HOJFQ.js";
import {
  PolygonPipeline_default,
  WindingOrder_default
} from "./chunk-NVL7JXAQ.js";
import {
  arrayRemoveDuplicates_default
} from "./chunk-ZWWN2CQH.js";
import "./chunk-WUWPKBOZ.js";
import "./chunk-FDOLXORR.js";
import "./chunk-M5DVYXJJ.js";
import {
  IndexDatatype_default
} from "./chunk-K2PLKJJG.js";
import {
  GeometryAttributes_default
} from "./chunk-IHFAFGR2.js";
import {
  GeometryAttribute_default,
  Geometry_default,
  PrimitiveType_default
} from "./chunk-K4PGSAR5.js";
import {
  BoundingSphere_default
} from "./chunk-E4YDCSQK.js";
import "./chunk-4O2ARYS7.js";
import "./chunk-S2KVL7OJ.js";
import "./chunk-LWZHJWYK.js";
import {
  ComponentDatatype_default
} from "./chunk-EOSX23OS.js";
import "./chunk-L4OFWHNI.js";
import "./chunk-VRAAQ3FS.js";
import {
  Cartesian2_default,
  Ellipsoid_default
} from "./chunk-7SLNBIZS.js";
import {
  Cartesian3_default,
  Frozen_default
} from "./chunk-LYBNPUEI.js";
import {
  Math_default
} from "./chunk-BO22JHBX.js";
import {
  DeveloperError_default
} from "./chunk-FS42VX2H.js";
import {
  defined_default
} from "./chunk-7U5YNLF3.js";

// packages/engine/Source/Core/PolylineVolumeGeometry.js
function computeAttributes(combinedPositions, shape, boundingRectangle, vertexFormat) {
  const attributes = new GeometryAttributes_default();
  if (vertexFormat.position) {
    attributes.position = new GeometryAttribute_default({
      componentDatatype: ComponentDatatype_default.DOUBLE,
      componentsPerAttribute: 3,
      values: combinedPositions
    });
  }
  const shapeLength = shape.length;
  const vertexCount = combinedPositions.length / 3;
  const length = (vertexCount - shapeLength * 2) / (shapeLength * 2);
  const firstEndIndices = PolygonPipeline_default.triangulate(shape);
  const indicesCount = (length - 1) * shapeLength * 6 + firstEndIndices.length * 2;
  const indices = IndexDatatype_default.createTypedArray(vertexCount, indicesCount);
  let i, j;
  let ll, ul, ur, lr;
  const offset = shapeLength * 2;
  let index = 0;
  for (i = 0; i < length - 1; i++) {
    for (j = 0; j < shapeLength - 1; j++) {
      ll = j * 2 + i * shapeLength * 2;
      lr = ll + offset;
      ul = ll + 1;
      ur = ul + offset;
      indices[index++] = ul;
      indices[index++] = ll;
      indices[index++] = ur;
      indices[index++] = ur;
      indices[index++] = ll;
      indices[index++] = lr;
    }
    ll = shapeLength * 2 - 2 + i * shapeLength * 2;
    ul = ll + 1;
    ur = ul + offset;
    lr = ll + offset;
    indices[index++] = ul;
    indices[index++] = ll;
    indices[index++] = ur;
    indices[index++] = ur;
    indices[index++] = ll;
    indices[index++] = lr;
  }
  if (vertexFormat.st || vertexFormat.tangent || vertexFormat.bitangent) {
    const st = new Float32Array(vertexCount * 2);
    const lengthSt = 1 / (length - 1);
    const heightSt = 1 / boundingRectangle.height;
    const heightOffset = boundingRectangle.height / 2;
    let s, t;
    let stindex = 0;
    for (i = 0; i < length; i++) {
      s = i * lengthSt;
      t = heightSt * (shape[0].y + heightOffset);
      st[stindex++] = s;
      st[stindex++] = t;
      for (j = 1; j < shapeLength; j++) {
        t = heightSt * (shape[j].y + heightOffset);
        st[stindex++] = s;
        st[stindex++] = t;
        st[stindex++] = s;
        st[stindex++] = t;
      }
      t = heightSt * (shape[0].y + heightOffset);
      st[stindex++] = s;
      st[stindex++] = t;
    }
    for (j = 0; j < shapeLength; j++) {
      s = 0;
      t = heightSt * (shape[j].y + heightOffset);
      st[stindex++] = s;
      st[stindex++] = t;
    }
    for (j = 0; j < shapeLength; j++) {
      s = (length - 1) * lengthSt;
      t = heightSt * (shape[j].y + heightOffset);
      st[stindex++] = s;
      st[stindex++] = t;
    }
    attributes.st = new GeometryAttribute_default({
      componentDatatype: ComponentDatatype_default.FLOAT,
      componentsPerAttribute: 2,
      values: new Float32Array(st)
    });
  }
  const endOffset = vertexCount - shapeLength * 2;
  for (i = 0; i < firstEndIndices.length; i += 3) {
    const v0 = firstEndIndices[i] + endOffset;
    const v1 = firstEndIndices[i + 1] + endOffset;
    const v2 = firstEndIndices[i + 2] + endOffset;
    indices[index++] = v0;
    indices[index++] = v1;
    indices[index++] = v2;
    indices[index++] = v2 + shapeLength;
    indices[index++] = v1 + shapeLength;
    indices[index++] = v0 + shapeLength;
  }
  let geometry = new Geometry_default({
    attributes,
    indices,
    boundingSphere: BoundingSphere_default.fromVertices(combinedPositions),
    primitiveType: PrimitiveType_default.TRIANGLES
  });
  if (vertexFormat.normal) {
    geometry = GeometryPipeline_default.computeNormal(geometry);
  }
  if (vertexFormat.tangent || vertexFormat.bitangent) {
    try {
      geometry = GeometryPipeline_default.computeTangentAndBitangent(geometry);
    } catch (e) {
      oneTimeWarning_default(
        "polyline-volume-tangent-bitangent",
        "Unable to compute tangents and bitangents for polyline volume geometry"
      );
    }
    if (!vertexFormat.tangent) {
      geometry.attributes.tangent = void 0;
    }
    if (!vertexFormat.bitangent) {
      geometry.attributes.bitangent = void 0;
    }
    if (!vertexFormat.st) {
      geometry.attributes.st = void 0;
    }
  }
  return geometry;
}
function PolylineVolumeGeometry(options) {
  options = options ?? Frozen_default.EMPTY_OBJECT;
  const positions = options.polylinePositions;
  const shape = options.shapePositions;
  if (!defined_default(positions)) {
    throw new DeveloperError_default("options.polylinePositions is required.");
  }
  if (!defined_default(shape)) {
    throw new DeveloperError_default("options.shapePositions is required.");
  }
  this._positions = positions;
  this._shape = shape;
  this._ellipsoid = Ellipsoid_default.clone(options.ellipsoid ?? Ellipsoid_default.default);
  this._cornerType = options.cornerType ?? CornerType_default.ROUNDED;
  this._vertexFormat = VertexFormat_default.clone(
    options.vertexFormat ?? VertexFormat_default.DEFAULT
  );
  this._granularity = options.granularity ?? Math_default.RADIANS_PER_DEGREE;
  this._workerName = "createPolylineVolumeGeometry";
  let numComponents = 1 + positions.length * Cartesian3_default.packedLength;
  numComponents += 1 + shape.length * Cartesian2_default.packedLength;
  this.packedLength = numComponents + Ellipsoid_default.packedLength + VertexFormat_default.packedLength + 2;
}
PolylineVolumeGeometry.pack = function(value, array, startingIndex) {
  if (!defined_default(value)) {
    throw new DeveloperError_default("value is required");
  }
  if (!defined_default(array)) {
    throw new DeveloperError_default("array is required");
  }
  startingIndex = startingIndex ?? 0;
  let i;
  const positions = value._positions;
  let length = positions.length;
  array[startingIndex++] = length;
  for (i = 0; i < length; ++i, startingIndex += Cartesian3_default.packedLength) {
    Cartesian3_default.pack(positions[i], array, startingIndex);
  }
  const shape = value._shape;
  length = shape.length;
  array[startingIndex++] = length;
  for (i = 0; i < length; ++i, startingIndex += Cartesian2_default.packedLength) {
    Cartesian2_default.pack(shape[i], array, startingIndex);
  }
  Ellipsoid_default.pack(value._ellipsoid, array, startingIndex);
  startingIndex += Ellipsoid_default.packedLength;
  VertexFormat_default.pack(value._vertexFormat, array, startingIndex);
  startingIndex += VertexFormat_default.packedLength;
  array[startingIndex++] = value._cornerType;
  array[startingIndex] = value._granularity;
  return array;
};
var scratchEllipsoid = Ellipsoid_default.clone(Ellipsoid_default.UNIT_SPHERE);
var scratchVertexFormat = new VertexFormat_default();
var scratchOptions = {
  polylinePositions: void 0,
  shapePositions: void 0,
  ellipsoid: scratchEllipsoid,
  vertexFormat: scratchVertexFormat,
  cornerType: void 0,
  granularity: void 0
};
PolylineVolumeGeometry.unpack = function(array, startingIndex, result) {
  if (!defined_default(array)) {
    throw new DeveloperError_default("array is required");
  }
  startingIndex = startingIndex ?? 0;
  let i;
  let length = array[startingIndex++];
  const positions = new Array(length);
  for (i = 0; i < length; ++i, startingIndex += Cartesian3_default.packedLength) {
    positions[i] = Cartesian3_default.unpack(array, startingIndex);
  }
  length = array[startingIndex++];
  const shape = new Array(length);
  for (i = 0; i < length; ++i, startingIndex += Cartesian2_default.packedLength) {
    shape[i] = Cartesian2_default.unpack(array, startingIndex);
  }
  const ellipsoid = Ellipsoid_default.unpack(array, startingIndex, scratchEllipsoid);
  startingIndex += Ellipsoid_default.packedLength;
  const vertexFormat = VertexFormat_default.unpack(
    array,
    startingIndex,
    scratchVertexFormat
  );
  startingIndex += VertexFormat_default.packedLength;
  const cornerType = array[startingIndex++];
  const granularity = array[startingIndex];
  if (!defined_default(result)) {
    scratchOptions.polylinePositions = positions;
    scratchOptions.shapePositions = shape;
    scratchOptions.cornerType = cornerType;
    scratchOptions.granularity = granularity;
    return new PolylineVolumeGeometry(scratchOptions);
  }
  result._positions = positions;
  result._shape = shape;
  result._ellipsoid = Ellipsoid_default.clone(ellipsoid, result._ellipsoid);
  result._vertexFormat = VertexFormat_default.clone(vertexFormat, result._vertexFormat);
  result._cornerType = cornerType;
  result._granularity = granularity;
  return result;
};
var brScratch = new BoundingRectangle_default();
PolylineVolumeGeometry.createGeometry = function(polylineVolumeGeometry) {
  const positions = polylineVolumeGeometry._positions;
  const cleanPositions = arrayRemoveDuplicates_default(
    positions,
    Cartesian3_default.equalsEpsilon
  );
  let shape2D = polylineVolumeGeometry._shape;
  shape2D = PolylineVolumeGeometryLibrary_default.removeDuplicatesFromShape(shape2D);
  if (cleanPositions.length < 2 || shape2D.length < 3) {
    return void 0;
  }
  if (PolygonPipeline_default.computeWindingOrder2D(shape2D) === WindingOrder_default.CLOCKWISE) {
    shape2D.reverse();
  }
  const boundingRectangle = BoundingRectangle_default.fromPoints(shape2D, brScratch);
  const computedPositions = PolylineVolumeGeometryLibrary_default.computePositions(
    cleanPositions,
    shape2D,
    boundingRectangle,
    polylineVolumeGeometry,
    true
  );
  return computeAttributes(
    computedPositions,
    shape2D,
    boundingRectangle,
    polylineVolumeGeometry._vertexFormat
  );
};
var PolylineVolumeGeometry_default = PolylineVolumeGeometry;

// packages/engine/Source/Workers/createPolylineVolumeGeometry.js
function createPolylineVolumeGeometry(polylineVolumeGeometry, offset) {
  if (defined_default(offset)) {
    polylineVolumeGeometry = PolylineVolumeGeometry_default.unpack(
      polylineVolumeGeometry,
      offset
    );
  }
  polylineVolumeGeometry._ellipsoid = Ellipsoid_default.clone(
    polylineVolumeGeometry._ellipsoid
  );
  return PolylineVolumeGeometry_default.createGeometry(polylineVolumeGeometry);
}
var createPolylineVolumeGeometry_default = createPolylineVolumeGeometry;
export {
  createPolylineVolumeGeometry_default as default
};
