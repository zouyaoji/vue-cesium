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
  EllipseGeometry_default
} from "./chunk-L7U26FFD.js";
import "./chunk-BJSNGGBM.js";
import "./chunk-NHZNMTIR.js";
import "./chunk-GYRDA3XK.js";
import "./chunk-6HBKE43B.js";
import "./chunk-5ZF53EY6.js";
import "./chunk-JDJAPBZP.js";
import "./chunk-JZFU2LEM.js";
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
import {
  Cartesian3_default,
  Ellipsoid_default
} from "./chunk-RQRODXVN.js";
import "./chunk-OE22564R.js";
import "./chunk-W4PIP5PG.js";
import {
  defined_default
} from "./chunk-75HAJIDT.js";

// packages/engine/Source/Workers/createEllipseGeometry.js
function createEllipseGeometry(ellipseGeometry, offset) {
  if (defined_default(offset)) {
    ellipseGeometry = EllipseGeometry_default.unpack(ellipseGeometry, offset);
  }
  ellipseGeometry._center = Cartesian3_default.clone(ellipseGeometry._center);
  ellipseGeometry._ellipsoid = Ellipsoid_default.clone(ellipseGeometry._ellipsoid);
  return EllipseGeometry_default.createGeometry(ellipseGeometry);
}
var createEllipseGeometry_default = createEllipseGeometry;
export {
  createEllipseGeometry_default as default
};
