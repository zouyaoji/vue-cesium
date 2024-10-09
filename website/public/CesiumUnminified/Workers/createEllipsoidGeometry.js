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
  EllipsoidGeometry_default
} from "./chunk-O3E4OAOE.js";
import "./chunk-I2ITFFPX.js";
import "./chunk-EJZTDTUH.js";
import "./chunk-26GA3JAM.js";
import "./chunk-DI5NGJUP.js";
import "./chunk-GWCFU2SA.js";
import "./chunk-VJZB3WAV.js";
import "./chunk-5PTXS2GO.js";
import "./chunk-K4GQUNB5.js";
import "./chunk-YFXQECWV.js";
import "./chunk-XY4BATBS.js";
import "./chunk-MXIZJAPH.js";
import "./chunk-6CHGCNMW.js";
import "./chunk-7JO7GPJN.js";
import "./chunk-AD63PIY6.js";
import {
  defined_default
} from "./chunk-E63IIM5T.js";

// packages/engine/Source/Workers/createEllipsoidGeometry.js
function createEllipsoidGeometry(ellipsoidGeometry, offset) {
  if (defined_default(offset)) {
    ellipsoidGeometry = EllipsoidGeometry_default.unpack(ellipsoidGeometry, offset);
  }
  return EllipsoidGeometry_default.createGeometry(ellipsoidGeometry);
}
var createEllipsoidGeometry_default = createEllipsoidGeometry;
export {
  createEllipsoidGeometry_default as default
};
