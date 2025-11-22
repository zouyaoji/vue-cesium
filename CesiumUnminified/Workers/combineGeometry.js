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
  PrimitivePipeline_default
} from "./chunk-ECHAJNQJ.js";
import {
  createTaskProcessorWorker_default
} from "./chunk-VVZ667H6.js";
import "./chunk-LWJXCI3F.js";
import "./chunk-GYRDA3XK.js";
import "./chunk-6HBKE43B.js";
import "./chunk-5ZF53EY6.js";
import "./chunk-AOM3FHBN.js";
import "./chunk-N52ZRKUE.js";
import "./chunk-H7B7FU2U.js";
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
import "./chunk-75HAJIDT.js";

// packages/engine/Source/Workers/combineGeometry.js
function combineGeometry(packedParameters, transferableObjects) {
  const parameters = PrimitivePipeline_default.unpackCombineGeometryParameters(packedParameters);
  const results = PrimitivePipeline_default.combineGeometry(parameters);
  return PrimitivePipeline_default.packCombineGeometryResults(
    results,
    transferableObjects
  );
}
var combineGeometry_default = createTaskProcessorWorker_default(combineGeometry);
export {
  combineGeometry_default as default
};
