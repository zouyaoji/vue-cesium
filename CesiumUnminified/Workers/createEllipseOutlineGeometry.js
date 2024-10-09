/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.122
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
  EllipseOutlineGeometry_default
} from "./chunk-7BMOHCPM.js";
import "./chunk-27HUZ7SA.js";
import "./chunk-I2ITFFPX.js";
import "./chunk-26GA3JAM.js";
import "./chunk-DI5NGJUP.js";
import "./chunk-GWCFU2SA.js";
import "./chunk-VJZB3WAV.js";
import "./chunk-5PTXS2GO.js";
import "./chunk-K4GQUNB5.js";
import {
  Cartesian3_default,
  Ellipsoid_default
} from "./chunk-YFXQECWV.js";
import "./chunk-XY4BATBS.js";
import "./chunk-MXIZJAPH.js";
import "./chunk-6CHGCNMW.js";
import "./chunk-7JO7GPJN.js";
import "./chunk-AD63PIY6.js";
import {
  defined_default
} from "./chunk-E63IIM5T.js";

// packages/engine/Source/Workers/createEllipseOutlineGeometry.js
function createEllipseOutlineGeometry(ellipseGeometry, offset) {
  if (defined_default(offset)) {
    ellipseGeometry = EllipseOutlineGeometry_default.unpack(ellipseGeometry, offset);
  }
  ellipseGeometry._center = Cartesian3_default.clone(ellipseGeometry._center);
  ellipseGeometry._ellipsoid = Ellipsoid_default.clone(ellipseGeometry._ellipsoid);
  return EllipseOutlineGeometry_default.createGeometry(ellipseGeometry);
}
var createEllipseOutlineGeometry_default = createEllipseOutlineGeometry;
export {
  createEllipseOutlineGeometry_default as default
};
