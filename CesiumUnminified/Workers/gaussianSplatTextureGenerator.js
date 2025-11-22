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
  generate_splat_texture,
  initSync
} from "./chunk-EJO3NKMS.js";
import {
  createTaskProcessorWorker_default
} from "./chunk-VVZ667H6.js";
import {
  defined_default
} from "./chunk-75HAJIDT.js";

// packages/engine/Source/Workers/gaussianSplatTextureGenerator.js
async function initWorker(parameters, transferableObjects) {
  const wasmConfig = parameters.webAssemblyConfig;
  if (defined_default(wasmConfig) && defined_default(wasmConfig.wasmBinary)) {
    initSync({ module: wasmConfig.wasmBinary });
    return true;
  }
  return false;
}
async function generateSplatTextureWorker(parameters, transferableObjects) {
  const wasmConfig = parameters.webAssemblyConfig;
  if (defined_default(wasmConfig)) {
    return initWorker(parameters, transferableObjects);
  }
  const { attributes, count } = parameters;
  const result = generate_splat_texture(
    attributes.positions,
    attributes.scales,
    attributes.rotations,
    attributes.colors,
    count
  );
  return {
    data: result.data,
    width: result.width,
    height: result.height
  };
}
var gaussianSplatTextureGenerator_default = createTaskProcessorWorker_default(generateSplatTextureWorker);
export {
  gaussianSplatTextureGenerator_default as default
};
