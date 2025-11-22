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
  FrustumGeometry_default
} from "./chunk-RCCYW6E7.js";
import "./chunk-JZFU2LEM.js";
import "./chunk-N52ZRKUE.js";
import "./chunk-YLILBDWK.js";
import "./chunk-XPVZWY4A.js";
import "./chunk-MXHRZHDF.js";
import "./chunk-3GL53OCU.js";
import "./chunk-EZ7NJXQN.js";
import "./chunk-IGX772ZQ.js";
import "./chunk-5T5SY63I.js";
import "./chunk-RQRODXVN.js";
import "./chunk-OE22564R.js";
import "./chunk-W4PIP5PG.js";
import {
  defined_default
} from "./chunk-75HAJIDT.js";

// packages/engine/Source/Workers/createFrustumGeometry.js
function createFrustumGeometry(frustumGeometry, offset) {
  if (defined_default(offset)) {
    frustumGeometry = FrustumGeometry_default.unpack(frustumGeometry, offset);
  }
  return FrustumGeometry_default.createGeometry(frustumGeometry);
}
var createFrustumGeometry_default = createFrustumGeometry;
export {
  createFrustumGeometry_default as default
};
