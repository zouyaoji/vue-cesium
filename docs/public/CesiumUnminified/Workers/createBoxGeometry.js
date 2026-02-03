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
  BoxGeometry_default
} from "./chunk-7ATKQRBM.js";
import "./chunk-4BBANFU6.js";
import "./chunk-N66PIK46.js";
import "./chunk-IHFAFGR2.js";
import "./chunk-K4PGSAR5.js";
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
import {
  defined_default
} from "./chunk-7U5YNLF3.js";

// packages/engine/Source/Workers/createBoxGeometry.js
function createBoxGeometry(boxGeometry, offset) {
  if (defined_default(offset)) {
    boxGeometry = BoxGeometry_default.unpack(boxGeometry, offset);
  }
  return BoxGeometry_default.createGeometry(boxGeometry);
}
var createBoxGeometry_default = createBoxGeometry;
export {
  createBoxGeometry_default as default
};
