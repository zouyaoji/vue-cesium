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
  RectangleGeometryLibrary_default
} from "./chunk-NE5JTQJP.js";
import {
  GeometryOffsetAttribute_default
} from "./chunk-JDJAPBZP.js";
import {
  PolygonPipeline_default
} from "./chunk-KUB64XW6.js";
import "./chunk-AARZSH4V.js";
import {
  IndexDatatype_default
} from "./chunk-H7B7FU2U.js";
import {
  GeometryAttributes_default
} from "./chunk-YLILBDWK.js";
import {
  GeometryAttribute_default,
  Geometry_default,
  PrimitiveType_default
} from "./chunk-XPVZWY4A.js";
import {
  BoundingSphere_default
} from "./chunk-MXHRZHDF.js";
import {
  Rectangle_default
} from "./chunk-3GL53OCU.js";
import {
  ComponentDatatype_default
} from "./chunk-EZ7NJXQN.js";
import "./chunk-IGX772ZQ.js";
import "./chunk-5T5SY63I.js";
import {
  Cartesian3_default,
  Cartographic_default,
  Ellipsoid_default,
  Frozen_default
} from "./chunk-RQRODXVN.js";
import {
  Math_default
} from "./chunk-OE22564R.js";
import {
  DeveloperError_default
} from "./chunk-W4PIP5PG.js";
import {
  defined_default
} from "./chunk-75HAJIDT.js";

// packages/engine/Source/Core/RectangleOutlineGeometry.js
var bottomBoundingSphere = new BoundingSphere_default();
var topBoundingSphere = new BoundingSphere_default();
var positionScratch = new Cartesian3_default();
var rectangleScratch = new Rectangle_default();
function constructRectangle(geometry, computedOptions) {
  const ellipsoid = geometry._ellipsoid;
  const height = computedOptions.height;
  const width = computedOptions.width;
  const northCap = computedOptions.northCap;
  const southCap = computedOptions.southCap;
  let rowHeight = height;
  let widthMultiplier = 2;
  let size = 0;
  let corners = 4;
  if (northCap) {
    widthMultiplier -= 1;
    rowHeight -= 1;
    size += 1;
    corners -= 2;
  }
  if (southCap) {
    widthMultiplier -= 1;
    rowHeight -= 1;
    size += 1;
    corners -= 2;
  }
  size += widthMultiplier * width + 2 * rowHeight - corners;
  const positions = new Float64Array(size * 3);
  let posIndex = 0;
  let row = 0;
  let col;
  const position = positionScratch;
  if (northCap) {
    RectangleGeometryLibrary_default.computePosition(
      computedOptions,
      ellipsoid,
      false,
      row,
      0,
      position
    );
    positions[posIndex++] = position.x;
    positions[posIndex++] = position.y;
    positions[posIndex++] = position.z;
  } else {
    for (col = 0; col < width; col++) {
      RectangleGeometryLibrary_default.computePosition(
        computedOptions,
        ellipsoid,
        false,
        row,
        col,
        position
      );
      positions[posIndex++] = position.x;
      positions[posIndex++] = position.y;
      positions[posIndex++] = position.z;
    }
  }
  col = width - 1;
  for (row = 1; row < height; row++) {
    RectangleGeometryLibrary_default.computePosition(
      computedOptions,
      ellipsoid,
      false,
      row,
      col,
      position
    );
    positions[posIndex++] = position.x;
    positions[posIndex++] = position.y;
    positions[posIndex++] = position.z;
  }
  row = height - 1;
  if (!southCap) {
    for (col = width - 2; col >= 0; col--) {
      RectangleGeometryLibrary_default.computePosition(
        computedOptions,
        ellipsoid,
        false,
        row,
        col,
        position
      );
      positions[posIndex++] = position.x;
      positions[posIndex++] = position.y;
      positions[posIndex++] = position.z;
    }
  }
  col = 0;
  for (row = height - 2; row > 0; row--) {
    RectangleGeometryLibrary_default.computePosition(
      computedOptions,
      ellipsoid,
      false,
      row,
      col,
      position
    );
    positions[posIndex++] = position.x;
    positions[posIndex++] = position.y;
    positions[posIndex++] = position.z;
  }
  const indicesSize = positions.length / 3 * 2;
  const indices = IndexDatatype_default.createTypedArray(
    positions.length / 3,
    indicesSize
  );
  let index = 0;
  for (let i = 0; i < positions.length / 3 - 1; i++) {
    indices[index++] = i;
    indices[index++] = i + 1;
  }
  indices[index++] = positions.length / 3 - 1;
  indices[index++] = 0;
  const geo = new Geometry_default({
    attributes: new GeometryAttributes_default(),
    primitiveType: PrimitiveType_default.LINES
  });
  geo.attributes.position = new GeometryAttribute_default({
    componentDatatype: ComponentDatatype_default.DOUBLE,
    componentsPerAttribute: 3,
    values: positions
  });
  geo.indices = indices;
  return geo;
}
function constructExtrudedRectangle(rectangleGeometry, computedOptions) {
  const maxHeight = rectangleGeometry._surfaceHeight;
  const minHeight = rectangleGeometry._extrudedHeight;
  const ellipsoid = rectangleGeometry._ellipsoid;
  const geo = constructRectangle(rectangleGeometry, computedOptions);
  const height = computedOptions.height;
  const width = computedOptions.width;
  const topPositions = PolygonPipeline_default.scaleToGeodeticHeight(
    geo.attributes.position.values,
    maxHeight,
    ellipsoid,
    false
  );
  let length = topPositions.length;
  const positions = new Float64Array(length * 2);
  positions.set(topPositions);
  const bottomPositions = PolygonPipeline_default.scaleToGeodeticHeight(
    geo.attributes.position.values,
    minHeight,
    ellipsoid
  );
  positions.set(bottomPositions, length);
  geo.attributes.position.values = positions;
  const northCap = computedOptions.northCap;
  const southCap = computedOptions.southCap;
  let corners = 4;
  if (northCap) {
    corners -= 1;
  }
  if (southCap) {
    corners -= 1;
  }
  const indicesSize = (positions.length / 3 + corners) * 2;
  const indices = IndexDatatype_default.createTypedArray(
    positions.length / 3,
    indicesSize
  );
  length = positions.length / 6;
  let index = 0;
  for (let i = 0; i < length - 1; i++) {
    indices[index++] = i;
    indices[index++] = i + 1;
    indices[index++] = i + length;
    indices[index++] = i + length + 1;
  }
  indices[index++] = length - 1;
  indices[index++] = 0;
  indices[index++] = length + length - 1;
  indices[index++] = length;
  indices[index++] = 0;
  indices[index++] = length;
  let bottomCorner;
  if (northCap) {
    bottomCorner = height - 1;
  } else {
    const topRightCorner = width - 1;
    indices[index++] = topRightCorner;
    indices[index++] = topRightCorner + length;
    bottomCorner = width + height - 2;
  }
  indices[index++] = bottomCorner;
  indices[index++] = bottomCorner + length;
  if (!southCap) {
    const bottomLeftCorner = width + bottomCorner - 1;
    indices[index++] = bottomLeftCorner;
    indices[index] = bottomLeftCorner + length;
  }
  geo.indices = indices;
  return geo;
}
function RectangleOutlineGeometry(options) {
  options = options ?? Frozen_default.EMPTY_OBJECT;
  const rectangle = options.rectangle;
  const granularity = options.granularity ?? Math_default.RADIANS_PER_DEGREE;
  const ellipsoid = options.ellipsoid ?? Ellipsoid_default.default;
  const rotation = options.rotation ?? 0;
  if (!defined_default(rectangle)) {
    throw new DeveloperError_default("rectangle is required.");
  }
  Rectangle_default._validate(rectangle);
  if (rectangle.north < rectangle.south) {
    throw new DeveloperError_default(
      "options.rectangle.north must be greater than options.rectangle.south"
    );
  }
  const height = options.height ?? 0;
  const extrudedHeight = options.extrudedHeight ?? height;
  this._rectangle = Rectangle_default.clone(rectangle);
  this._granularity = granularity;
  this._ellipsoid = ellipsoid;
  this._surfaceHeight = Math.max(height, extrudedHeight);
  this._rotation = rotation;
  this._extrudedHeight = Math.min(height, extrudedHeight);
  this._offsetAttribute = options.offsetAttribute;
  this._workerName = "createRectangleOutlineGeometry";
}
RectangleOutlineGeometry.packedLength = Rectangle_default.packedLength + Ellipsoid_default.packedLength + 5;
RectangleOutlineGeometry.pack = function(value, array, startingIndex) {
  if (!defined_default(value)) {
    throw new DeveloperError_default("value is required");
  }
  if (!defined_default(array)) {
    throw new DeveloperError_default("array is required");
  }
  startingIndex = startingIndex ?? 0;
  Rectangle_default.pack(value._rectangle, array, startingIndex);
  startingIndex += Rectangle_default.packedLength;
  Ellipsoid_default.pack(value._ellipsoid, array, startingIndex);
  startingIndex += Ellipsoid_default.packedLength;
  array[startingIndex++] = value._granularity;
  array[startingIndex++] = value._surfaceHeight;
  array[startingIndex++] = value._rotation;
  array[startingIndex++] = value._extrudedHeight;
  array[startingIndex] = value._offsetAttribute ?? -1;
  return array;
};
var scratchRectangle = new Rectangle_default();
var scratchEllipsoid = Ellipsoid_default.clone(Ellipsoid_default.UNIT_SPHERE);
var scratchOptions = {
  rectangle: scratchRectangle,
  ellipsoid: scratchEllipsoid,
  granularity: void 0,
  height: void 0,
  rotation: void 0,
  extrudedHeight: void 0,
  offsetAttribute: void 0
};
RectangleOutlineGeometry.unpack = function(array, startingIndex, result) {
  if (!defined_default(array)) {
    throw new DeveloperError_default("array is required");
  }
  startingIndex = startingIndex ?? 0;
  const rectangle = Rectangle_default.unpack(array, startingIndex, scratchRectangle);
  startingIndex += Rectangle_default.packedLength;
  const ellipsoid = Ellipsoid_default.unpack(array, startingIndex, scratchEllipsoid);
  startingIndex += Ellipsoid_default.packedLength;
  const granularity = array[startingIndex++];
  const height = array[startingIndex++];
  const rotation = array[startingIndex++];
  const extrudedHeight = array[startingIndex++];
  const offsetAttribute = array[startingIndex];
  if (!defined_default(result)) {
    scratchOptions.granularity = granularity;
    scratchOptions.height = height;
    scratchOptions.rotation = rotation;
    scratchOptions.extrudedHeight = extrudedHeight;
    scratchOptions.offsetAttribute = offsetAttribute === -1 ? void 0 : offsetAttribute;
    return new RectangleOutlineGeometry(scratchOptions);
  }
  result._rectangle = Rectangle_default.clone(rectangle, result._rectangle);
  result._ellipsoid = Ellipsoid_default.clone(ellipsoid, result._ellipsoid);
  result._surfaceHeight = height;
  result._rotation = rotation;
  result._extrudedHeight = extrudedHeight;
  result._offsetAttribute = offsetAttribute === -1 ? void 0 : offsetAttribute;
  return result;
};
var nwScratch = new Cartographic_default();
RectangleOutlineGeometry.createGeometry = function(rectangleGeometry) {
  const rectangle = rectangleGeometry._rectangle;
  const ellipsoid = rectangleGeometry._ellipsoid;
  const computedOptions = RectangleGeometryLibrary_default.computeOptions(
    rectangle,
    rectangleGeometry._granularity,
    rectangleGeometry._rotation,
    0,
    rectangleScratch,
    nwScratch
  );
  let geometry;
  let boundingSphere;
  if (Math_default.equalsEpsilon(
    rectangle.north,
    rectangle.south,
    Math_default.EPSILON10
  ) || Math_default.equalsEpsilon(
    rectangle.east,
    rectangle.west,
    Math_default.EPSILON10
  )) {
    return void 0;
  }
  const surfaceHeight = rectangleGeometry._surfaceHeight;
  const extrudedHeight = rectangleGeometry._extrudedHeight;
  const extrude = !Math_default.equalsEpsilon(
    surfaceHeight,
    extrudedHeight,
    0,
    Math_default.EPSILON2
  );
  let offsetValue;
  if (extrude) {
    geometry = constructExtrudedRectangle(rectangleGeometry, computedOptions);
    if (defined_default(rectangleGeometry._offsetAttribute)) {
      const size = geometry.attributes.position.values.length / 3;
      let offsetAttribute = new Uint8Array(size);
      if (rectangleGeometry._offsetAttribute === GeometryOffsetAttribute_default.TOP) {
        offsetAttribute = offsetAttribute.fill(1, 0, size / 2);
      } else {
        offsetValue = rectangleGeometry._offsetAttribute === GeometryOffsetAttribute_default.NONE ? 0 : 1;
        offsetAttribute = offsetAttribute.fill(offsetValue);
      }
      geometry.attributes.applyOffset = new GeometryAttribute_default({
        componentDatatype: ComponentDatatype_default.UNSIGNED_BYTE,
        componentsPerAttribute: 1,
        values: offsetAttribute
      });
    }
    const topBS = BoundingSphere_default.fromRectangle3D(
      rectangle,
      ellipsoid,
      surfaceHeight,
      topBoundingSphere
    );
    const bottomBS = BoundingSphere_default.fromRectangle3D(
      rectangle,
      ellipsoid,
      extrudedHeight,
      bottomBoundingSphere
    );
    boundingSphere = BoundingSphere_default.union(topBS, bottomBS);
  } else {
    geometry = constructRectangle(rectangleGeometry, computedOptions);
    geometry.attributes.position.values = PolygonPipeline_default.scaleToGeodeticHeight(
      geometry.attributes.position.values,
      surfaceHeight,
      ellipsoid,
      false
    );
    if (defined_default(rectangleGeometry._offsetAttribute)) {
      const length = geometry.attributes.position.values.length;
      offsetValue = rectangleGeometry._offsetAttribute === GeometryOffsetAttribute_default.NONE ? 0 : 1;
      const applyOffset = new Uint8Array(length / 3).fill(offsetValue);
      geometry.attributes.applyOffset = new GeometryAttribute_default({
        componentDatatype: ComponentDatatype_default.UNSIGNED_BYTE,
        componentsPerAttribute: 1,
        values: applyOffset
      });
    }
    boundingSphere = BoundingSphere_default.fromRectangle3D(
      rectangle,
      ellipsoid,
      surfaceHeight
    );
  }
  return new Geometry_default({
    attributes: geometry.attributes,
    indices: geometry.indices,
    primitiveType: PrimitiveType_default.LINES,
    boundingSphere,
    offsetAttribute: rectangleGeometry._offsetAttribute
  });
};
var RectangleOutlineGeometry_default = RectangleOutlineGeometry;

// packages/engine/Source/Workers/createRectangleOutlineGeometry.js
function createRectangleOutlineGeometry(rectangleGeometry, offset) {
  if (defined_default(offset)) {
    rectangleGeometry = RectangleOutlineGeometry_default.unpack(
      rectangleGeometry,
      offset
    );
  }
  rectangleGeometry._ellipsoid = Ellipsoid_default.clone(rectangleGeometry._ellipsoid);
  rectangleGeometry._rectangle = Rectangle_default.clone(rectangleGeometry._rectangle);
  return RectangleOutlineGeometry_default.createGeometry(rectangleGeometry);
}
var createRectangleOutlineGeometry_default = createRectangleOutlineGeometry;
export {
  createRectangleOutlineGeometry_default as default
};
