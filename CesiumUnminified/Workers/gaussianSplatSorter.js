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
  initSync,
  radix_sort_gaussians_indexes
} from "./chunk-TY5JXMVO.js";
import {
  createTaskProcessorWorker_default
} from "./chunk-LK7GEFGB.js";
import {
  defined_default
} from "./chunk-7U5YNLF3.js";

// packages/engine/Source/Workers/gaussianSplatSorter.js
async function initWorker(parameters, transferableObjects) {
  const wasmConfig = parameters.webAssemblyConfig;
  if (defined_default(wasmConfig) && defined_default(wasmConfig.wasmBinary)) {
    initSync({ module: wasmConfig.wasmBinary });
    return true;
  }
}
function generateGaussianSortWorker(parameters, transferableObjects) {
  const wasmConfig = parameters.webAssemblyConfig;
  if (defined_default(wasmConfig)) {
    return initWorker(parameters, transferableObjects);
  }
  const { primitive, sortType } = parameters;
  if (sortType === "Index") {
    return radix_sort_gaussians_indexes(
      primitive.positions,
      primitive.modelView,
      primitive.count
    );
  }
}
var gaussianSplatSorter_default = createTaskProcessorWorker_default(generateGaussianSortWorker);
export {
  gaussianSplatSorter_default as default
};
