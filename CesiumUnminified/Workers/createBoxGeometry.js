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
  BoxGeometry_default
} from "./chunk-SZN34LQ5.js";
import "./chunk-JDJAPBZP.js";
import "./chunk-JZFU2LEM.js";
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
