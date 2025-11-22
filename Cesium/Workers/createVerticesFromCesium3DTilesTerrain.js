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

import{a as u}from"./chunk-LPJEXZWM.js";import"./chunk-YY6GMQGO.js";import"./chunk-BJAB7QAF.js";import{a as f}from"./chunk-D2NFCOGE.js";import"./chunk-XBWRWNYZ.js";import"./chunk-SCO7TMKT.js";import"./chunk-VHZAK4GN.js";import"./chunk-ET7KY3BS.js";import"./chunk-CUP6SILZ.js";import"./chunk-HSJ6GSLC.js";import"./chunk-SXKYZMEL.js";import"./chunk-T6Q6HX5J.js";import"./chunk-XQIJGAVD.js";import"./chunk-UTYWXSQT.js";import"./chunk-RCHWDG3R.js";import"./chunk-4WJUWBRK.js";import"./chunk-5G23AKP3.js";import"./chunk-KWAHJ72S.js";import"./chunk-MKDADUG3.js";import"./chunk-NOIUI5SY.js";import"./chunk-XRRBRTKL.js";function a(c,d){return u.createMesh(c).then(function(e){let t=e.vertices.buffer,r=e.indices.buffer,s=e.westIndicesSouthToNorth.buffer,o=e.southIndicesEastToWest.buffer,i=e.eastIndicesNorthToSouth.buffer,n=e.northIndicesWestToEast.buffer;return d.push(t,r,s,o,i,n),{verticesBuffer:t,indicesBuffer:r,vertexCountWithoutSkirts:e.vertexCountWithoutSkirts,indexCountWithoutSkirts:e.indexCountWithoutSkirts,encoding:e.encoding,westIndicesBuffer:s,southIndicesBuffer:o,eastIndicesBuffer:i,northIndicesBuffer:n}})}var T=f(a);export{T as default};
