/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2017 Cesium Contributors
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
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(['./when-8d13db60', './RuntimeError-ba10bc3e', './WebGLConstants-4c11ee5f', './createTaskProcessorWorker'], function (when, RuntimeError, WebGLConstants, createTaskProcessorWorker) { 'use strict';

    /**
         * Describes a compressed texture and contains a compressed texture buffer.
         * @alias CompressedTextureBuffer
         * @constructor
         *
         * @param {PixelFormat} internalFormat The pixel format of the compressed texture.
         * @param {Number} width The width of the texture.
         * @param {Number} height The height of the texture.
         * @param {Uint8Array} buffer The compressed texture buffer.
         */
        function CompressedTextureBuffer(internalFormat, width, height, buffer) {
            this._format = internalFormat;
            this._width = width;
            this._height = height;
            this._buffer =  buffer;
        }

        Object.defineProperties(CompressedTextureBuffer.prototype, {
            /**
             * The format of the compressed texture.
             * @type PixelFormat
             * @readonly
             * @memberof CompressedTextureBuffer.prototype
             */
            internalFormat : {
                get : function() {
                    return this._format;
                }
            },
            /**
             * The width of the texture.
             * @type Number
             * @readonly
             * @memberof CompressedTextureBuffer.prototype
             */
            width : {
                get : function() {
                    return this._width;
                }
            },
            /**
             * The height of the texture.
             * @type Number
             * @readonly
             * @memberof CompressedTextureBuffer.prototype
             */
            height : {
                get : function() {
                    return this._height;
                }
            },
            /**
             * The compressed texture buffer.
             * @type Uint8Array
             * @readonly
             * @memberof CompressedTextureBuffer.prototype
             */
            bufferView : {
                get : function() {
                    return this._buffer;
                }
            }
        });

        /**
         * Creates a shallow clone of a compressed texture buffer.
         *
         * @param {CompressedTextureBuffer} object The compressed texture buffer to be cloned.
         * @return {CompressedTextureBuffer} A shallow clone of the compressed texture buffer.
         */
        CompressedTextureBuffer.clone = function(object) {
            if (!when.defined(object)) {
                return undefined;
            }

            return new CompressedTextureBuffer(object._format, object._width, object._height, object._buffer);
        };

        /**
         * Creates a shallow clone of this compressed texture buffer.
         *
         * @return {CompressedTextureBuffer} A shallow clone of the compressed texture buffer.
         */
        CompressedTextureBuffer.prototype.clone = function() {
            return CompressedTextureBuffer.clone(this);
        };

    /**
     * @private
     */
    var PixelDatatype = {
        UNSIGNED_BYTE : WebGLConstants.WebGLConstants.UNSIGNED_BYTE,
        UNSIGNED_SHORT : WebGLConstants.WebGLConstants.UNSIGNED_SHORT,
        UNSIGNED_INT : WebGLConstants.WebGLConstants.UNSIGNED_INT,
        FLOAT : WebGLConstants.WebGLConstants.FLOAT,
        HALF_FLOAT : WebGLConstants.WebGLConstants.HALF_FLOAT_OES,
        UNSIGNED_INT_24_8 : WebGLConstants.WebGLConstants.UNSIGNED_INT_24_8,
        UNSIGNED_SHORT_4_4_4_4 : WebGLConstants.WebGLConstants.UNSIGNED_SHORT_4_4_4_4,
        UNSIGNED_SHORT_5_5_5_1 : WebGLConstants.WebGLConstants.UNSIGNED_SHORT_5_5_5_1,
        UNSIGNED_SHORT_5_6_5 : WebGLConstants.WebGLConstants.UNSIGNED_SHORT_5_6_5,

        isPacked : function(pixelDatatype) {
            return pixelDatatype === PixelDatatype.UNSIGNED_INT_24_8 ||
                   pixelDatatype === PixelDatatype.UNSIGNED_SHORT_4_4_4_4 ||
                   pixelDatatype === PixelDatatype.UNSIGNED_SHORT_5_5_5_1 ||
                   pixelDatatype === PixelDatatype.UNSIGNED_SHORT_5_6_5;
        },

        sizeInBytes : function(pixelDatatype) {
            switch (pixelDatatype) {
                case PixelDatatype.UNSIGNED_BYTE:
                    return 1;
                case PixelDatatype.UNSIGNED_SHORT:
                case PixelDatatype.UNSIGNED_SHORT_4_4_4_4:
                case PixelDatatype.UNSIGNED_SHORT_5_5_5_1:
                case PixelDatatype.UNSIGNED_SHORT_5_6_5:
                case PixelDatatype.HALF_FLOAT:
                    return 2;
                case PixelDatatype.UNSIGNED_INT:
                case PixelDatatype.FLOAT:
                case PixelDatatype.UNSIGNED_INT_24_8:
                    return 4;
            }
        },

        validate : function(pixelDatatype) {
            return ((pixelDatatype === PixelDatatype.UNSIGNED_BYTE) ||
                    (pixelDatatype === PixelDatatype.UNSIGNED_SHORT) ||
                    (pixelDatatype === PixelDatatype.UNSIGNED_INT) ||
                    (pixelDatatype === PixelDatatype.FLOAT) ||
                    (pixelDatatype === PixelDatatype.HALF_FLOAT) ||
                    (pixelDatatype === PixelDatatype.UNSIGNED_INT_24_8) ||
                    (pixelDatatype === PixelDatatype.UNSIGNED_SHORT_4_4_4_4) ||
                    (pixelDatatype === PixelDatatype.UNSIGNED_SHORT_5_5_5_1) ||
                    (pixelDatatype === PixelDatatype.UNSIGNED_SHORT_5_6_5));
        }
    };

    /**
     * The format of a pixel, i.e., the number of components it has and what they represent.
     *
     * @exports PixelFormat
     */
    var PixelFormat = {
        /**
         * A pixel format containing a depth value.
         *
         * @type {Number}
         * @constant
         */
        DEPTH_COMPONENT : WebGLConstants.WebGLConstants.DEPTH_COMPONENT,

        /**
         * A pixel format containing a depth and stencil value, most often used with {@link PixelDatatype.UNSIGNED_INT_24_8}.
         *
         * @type {Number}
         * @constant
         */
        DEPTH_STENCIL : WebGLConstants.WebGLConstants.DEPTH_STENCIL,

        /**
         * A pixel format containing an alpha channel.
         *
         * @type {Number}
         * @constant
         */
        ALPHA : WebGLConstants.WebGLConstants.ALPHA,

        /**
         * A pixel format containing red, green, and blue channels.
         *
         * @type {Number}
         * @constant
         */
        RGB : WebGLConstants.WebGLConstants.RGB,

        /**
         * A pixel format containing red, green, blue, and alpha channels.
         *
         * @type {Number}
         * @constant
         */
        RGBA : WebGLConstants.WebGLConstants.RGBA,

        /**
         * A pixel format containing a luminance (intensity) channel.
         *
         * @type {Number}
         * @constant
         */
        LUMINANCE : WebGLConstants.WebGLConstants.LUMINANCE,

        /**
         * A pixel format containing luminance (intensity) and alpha channels.
         *
         * @type {Number}
         * @constant
         */
        LUMINANCE_ALPHA : WebGLConstants.WebGLConstants.LUMINANCE_ALPHA,

        /**
         * A pixel format containing red, green, and blue channels that is DXT1 compressed.
         *
         * @type {Number}
         * @constant
         */
        RGB_DXT1 : WebGLConstants.WebGLConstants.COMPRESSED_RGB_S3TC_DXT1_EXT,

        /**
         * A pixel format containing red, green, blue, and alpha channels that is DXT1 compressed.
         *
         * @type {Number}
         * @constant
         */
        RGBA_DXT1 : WebGLConstants.WebGLConstants.COMPRESSED_RGBA_S3TC_DXT1_EXT,

        /**
         * A pixel format containing red, green, blue, and alpha channels that is DXT3 compressed.
         *
         * @type {Number}
         * @constant
         */
        RGBA_DXT3 : WebGLConstants.WebGLConstants.COMPRESSED_RGBA_S3TC_DXT3_EXT,

        /**
         * A pixel format containing red, green, blue, and alpha channels that is DXT5 compressed.
         *
         * @type {Number}
         * @constant
         */
        RGBA_DXT5 : WebGLConstants.WebGLConstants.COMPRESSED_RGBA_S3TC_DXT5_EXT,

        /**
         * A pixel format containing red, green, and blue channels that is PVR 4bpp compressed.
         *
         * @type {Number}
         * @constant
         */
        RGB_PVRTC_4BPPV1 : WebGLConstants.WebGLConstants.COMPRESSED_RGB_PVRTC_4BPPV1_IMG,

        /**
         * A pixel format containing red, green, and blue channels that is PVR 2bpp compressed.
         *
         * @type {Number}
         * @constant
         */
        RGB_PVRTC_2BPPV1 : WebGLConstants.WebGLConstants.COMPRESSED_RGB_PVRTC_2BPPV1_IMG,

        /**
         * A pixel format containing red, green, blue, and alpha channels that is PVR 4bpp compressed.
         *
         * @type {Number}
         * @constant
         */
        RGBA_PVRTC_4BPPV1 : WebGLConstants.WebGLConstants.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG,

        /**
         * A pixel format containing red, green, blue, and alpha channels that is PVR 2bpp compressed.
         *
         * @type {Number}
         * @constant
         */
        RGBA_PVRTC_2BPPV1 : WebGLConstants.WebGLConstants.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG,

        /**
         * A pixel format containing red, green, and blue channels that is ETC1 compressed.
         *
         * @type {Number}
         * @constant
         */
        RGB_ETC1 : WebGLConstants.WebGLConstants.COMPRESSED_RGB_ETC1_WEBGL,

        /**
         * @private
         */
        componentsLength : function(pixelFormat) {
            switch (pixelFormat) {
                case PixelFormat.RGB:
                    return 3;
                case PixelFormat.RGBA:
                    return 4;
                case PixelFormat.LUMINANCE_ALPHA:
                    return 2;
                case PixelFormat.ALPHA:
                case PixelFormat.LUMINANCE:
                    return 1;
                default:
                    return 1;
            }
        },

        /**
         * @private
         */
        validate : function(pixelFormat) {
            return pixelFormat === PixelFormat.DEPTH_COMPONENT ||
                   pixelFormat === PixelFormat.DEPTH_STENCIL ||
                   pixelFormat === PixelFormat.ALPHA ||
                   pixelFormat === PixelFormat.RGB ||
                   pixelFormat === PixelFormat.RGBA ||
                   pixelFormat === PixelFormat.LUMINANCE ||
                   pixelFormat === PixelFormat.LUMINANCE_ALPHA ||
                   pixelFormat === PixelFormat.RGB_DXT1 ||
                   pixelFormat === PixelFormat.RGBA_DXT1 ||
                   pixelFormat === PixelFormat.RGBA_DXT3 ||
                   pixelFormat === PixelFormat.RGBA_DXT5 ||
                   pixelFormat === PixelFormat.RGB_PVRTC_4BPPV1 ||
                   pixelFormat === PixelFormat.RGB_PVRTC_2BPPV1 ||
                   pixelFormat === PixelFormat.RGBA_PVRTC_4BPPV1 ||
                   pixelFormat === PixelFormat.RGBA_PVRTC_2BPPV1 ||
                   pixelFormat === PixelFormat.RGB_ETC1;
        },

        /**
         * @private
         */
        isColorFormat : function(pixelFormat) {
            return pixelFormat === PixelFormat.ALPHA ||
                   pixelFormat === PixelFormat.RGB ||
                   pixelFormat === PixelFormat.RGBA ||
                   pixelFormat === PixelFormat.LUMINANCE ||
                   pixelFormat === PixelFormat.LUMINANCE_ALPHA;
        },

        /**
         * @private
         */
        isDepthFormat : function(pixelFormat) {
            return pixelFormat === PixelFormat.DEPTH_COMPONENT ||
                   pixelFormat === PixelFormat.DEPTH_STENCIL;
        },

        /**
         * @private
         */
        isCompressedFormat : function(pixelFormat) {
            return pixelFormat === PixelFormat.RGB_DXT1 ||
                   pixelFormat === PixelFormat.RGBA_DXT1 ||
                   pixelFormat === PixelFormat.RGBA_DXT3 ||
                   pixelFormat === PixelFormat.RGBA_DXT5 ||
                   pixelFormat === PixelFormat.RGB_PVRTC_4BPPV1 ||
                   pixelFormat === PixelFormat.RGB_PVRTC_2BPPV1 ||
                   pixelFormat === PixelFormat.RGBA_PVRTC_4BPPV1 ||
                   pixelFormat === PixelFormat.RGBA_PVRTC_2BPPV1 ||
                   pixelFormat === PixelFormat.RGB_ETC1;
        },

        /**
         * @private
         */
        isDXTFormat : function(pixelFormat) {
            return pixelFormat === PixelFormat.RGB_DXT1 ||
                   pixelFormat === PixelFormat.RGBA_DXT1 ||
                   pixelFormat === PixelFormat.RGBA_DXT3 ||
                   pixelFormat === PixelFormat.RGBA_DXT5;
        },

        /**
         * @private
         */
        isPVRTCFormat : function(pixelFormat) {
            return pixelFormat === PixelFormat.RGB_PVRTC_4BPPV1 ||
                   pixelFormat === PixelFormat.RGB_PVRTC_2BPPV1 ||
                   pixelFormat === PixelFormat.RGBA_PVRTC_4BPPV1 ||
                   pixelFormat === PixelFormat.RGBA_PVRTC_2BPPV1;
        },

        /**
         * @private
         */
        isETC1Format : function(pixelFormat) {
            return pixelFormat === PixelFormat.RGB_ETC1;
        },

        /**
         * @private
         */
        compressedTextureSizeInBytes : function(pixelFormat, width, height) {
            switch (pixelFormat) {
                case PixelFormat.RGB_DXT1:
                case PixelFormat.RGBA_DXT1:
                case PixelFormat.RGB_ETC1:
                    return Math.floor((width + 3) / 4) * Math.floor((height + 3) / 4) * 8;

                case PixelFormat.RGBA_DXT3:
                case PixelFormat.RGBA_DXT5:
                    return Math.floor((width + 3) / 4) * Math.floor((height + 3) / 4) * 16;

                case PixelFormat.RGB_PVRTC_4BPPV1:
                case PixelFormat.RGBA_PVRTC_4BPPV1:
                    return Math.floor((Math.max(width, 8) * Math.max(height, 8) * 4 + 7) / 8);

                case PixelFormat.RGB_PVRTC_2BPPV1:
                case PixelFormat.RGBA_PVRTC_2BPPV1:
                    return Math.floor((Math.max(width, 16) * Math.max(height, 8) * 2 + 7) / 8);

                default:
                    return 0;
            }
        },

        /**
         * @private
         */
        textureSizeInBytes : function(pixelFormat, pixelDatatype, width, height) {
            var componentsLength = PixelFormat.componentsLength(pixelFormat);
            if (PixelDatatype.isPacked(pixelDatatype)) {
                componentsLength = 1;
            }
            return componentsLength * PixelDatatype.sizeInBytes(pixelDatatype) * width * height;
        },

        /**
         * @private
         */
        alignmentInBytes : function(pixelFormat, pixelDatatype, width) {
            var mod = PixelFormat.textureSizeInBytes(pixelFormat, pixelDatatype, width, 1) % 4;
            return mod === 0 ? 4 : (mod === 2 ? 2 : 1);
        },

        /**
         * @private
         */
        createTypedArray : function(pixelFormat, pixelDatatype, width, height) {
            var constructor;
            var sizeInBytes = PixelDatatype.sizeInBytes(pixelDatatype);
            if (sizeInBytes === Uint8Array.BYTES_PER_ELEMENT) {
                constructor = Uint8Array;
            } else if (sizeInBytes === Uint16Array.BYTES_PER_ELEMENT) {
                constructor = Uint16Array;
            } else if (sizeInBytes === Float32Array.BYTES_PER_ELEMENT && pixelDatatype === PixelDatatype.FLOAT) {
                constructor = Float32Array;
            } else {
                constructor = Uint32Array;
            }

            var size = PixelFormat.componentsLength(pixelFormat) * width * height;
            return new constructor(size);
        },

        /**
         * @private
         */
        flipY : function(bufferView, pixelFormat, pixelDatatype, width, height) {
            if (height === 1) {
                return bufferView;
            }
            var flipped = PixelFormat.createTypedArray(pixelFormat, pixelDatatype, width, height);
            var numberOfComponents = PixelFormat.componentsLength(pixelFormat);
            var textureWidth = width * numberOfComponents;
            for (var i = 0; i < height; ++i) {
                var row = i * height * numberOfComponents;
                var flippedRow = (height - i - 1) * height * numberOfComponents;
                for (var j = 0; j < textureWidth; ++j) {
                    flipped[flippedRow + j] = bufferView[row + j];
                }
            }
            return flipped;
        }
    };

    var PixelFormat$1 = Object.freeze(PixelFormat);

    // Modified from texture-tester
    // See:
    //     https://github.com/toji/texture-tester/blob/master/js/webgl-texture-util.js
    //     http://toji.github.io/texture-tester/

    /**
     * @license
     *
     * Copyright (c) 2014, Brandon Jones. All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without modification,
     * are permitted provided that the following conditions are met:
     *
     *  * Redistributions of source code must retain the above copyright notice, this
     *  list of conditions and the following disclaimer.
     *  * Redistributions in binary form must reproduce the above copyright notice,
     *  this list of conditions and the following disclaimer in the documentation
     *  and/or other materials provided with the distribution.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
     * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
     * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
     * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
     * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
     * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
     * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
     * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
     * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
     * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     */

    // Taken from crnlib.h
    var CRN_FORMAT = {
        cCRNFmtInvalid: -1,

        cCRNFmtDXT1: 0,
        // cCRNFmtDXT3 is not currently supported when writing to CRN - only DDS.
        cCRNFmtDXT3: 1,
        cCRNFmtDXT5: 2

        // Crunch supports more formats than this, but we can't use them here.
    };

    // Mapping of Crunch formats to DXT formats.
    var DXT_FORMAT_MAP = {};
    DXT_FORMAT_MAP[CRN_FORMAT.cCRNFmtDXT1] = PixelFormat$1.RGB_DXT1;
    DXT_FORMAT_MAP[CRN_FORMAT.cCRNFmtDXT3] = PixelFormat$1.RGBA_DXT3;
    DXT_FORMAT_MAP[CRN_FORMAT.cCRNFmtDXT5] = PixelFormat$1.RGBA_DXT5;

    var dst;
    var dxtData;
    var cachedDstSize = 0;

    var crunch;

    // Copy an array of bytes into or out of the emscripten heap.
    function arrayBufferCopy(src, dst, dstByteOffset, numBytes) {
        var i;
        var dst32Offset = dstByteOffset / 4;
        var tail = (numBytes % 4);
        var src32 = new Uint32Array(src.buffer, 0, (numBytes - tail) / 4);
        var dst32 = new Uint32Array(dst.buffer);
        for (i = 0; i < src32.length; i++) {
            dst32[dst32Offset + i] = src32[i];
        }
        for (i = numBytes - tail; i < numBytes; i++) {
            dst[dstByteOffset + i] = src[i];
        }
    }

    /**
     * @private
     */
    function convertCRNToDXT(parameters, transferableObjects) {
        // Copy the contents of the arrayBuffer into emscriptens heap.
        var arrayBuffer = parameters.data;
        var srcSize = arrayBuffer.byteLength;
        var bytes = new Uint8Array(arrayBuffer);
        var src = crunch._malloc(srcSize);
        arrayBufferCopy(bytes, crunch.HEAPU8, src, srcSize);

        // Determine what type of compressed data the file contains.
        var crnFormat = crunch._crn_get_dxt_format(src, srcSize);
        var format = DXT_FORMAT_MAP[crnFormat];
        if (!when.defined(format)) {
            throw new RuntimeError.RuntimeError('Unsupported compressed format.');
        }

        // Gather basic metrics about the DXT data.
        var levels = crunch._crn_get_levels(src, srcSize);
        var width = crunch._crn_get_width(src, srcSize);
        var height = crunch._crn_get_height(src, srcSize);

        // Determine the size of the decoded DXT data.
        var dstSize = 0;
        var i;
        for (i = 0; i < levels; ++i) {
            dstSize += PixelFormat$1.compressedTextureSizeInBytes(format, width >> i, height >> i);
        }

        // Allocate enough space on the emscripten heap to hold the decoded DXT data
        // or reuse the existing allocation if a previous call to this function has
        // already acquired a large enough buffer.
        if(cachedDstSize < dstSize) {
            if(when.defined(dst)) {
                crunch._free(dst);
            }
            dst = crunch._malloc(dstSize);
            dxtData = new Uint8Array(crunch.HEAPU8.buffer, dst, dstSize);
            cachedDstSize = dstSize;
        }

        // Decompress the DXT data from the Crunch file into the allocated space.
        crunch._crn_decompress(src, srcSize, dst, dstSize, 0, levels);

        // Release the crunch file data from the emscripten heap.
        crunch._free(src);

        var bOutMipMapData = when.defaultValue(parameters.bMipMap, false);
        if(bOutMipMapData){
            var dXTDataMipMap = dxtData.slice(0, dstSize);
            transferableObjects.push(dXTDataMipMap.buffer);
            return new CompressedTextureBuffer(format, width, height, dXTDataMipMap);
        }
        else {
            // Mipmaps are unsupported, so copy the level 0 texture
            // When mipmaps are supported, a copy will still be necessary as dxtData is a view on the heap.
            var length = PixelFormat$1.compressedTextureSizeInBytes(format, width, height);

            // Get a copy of the 0th mip level. dxtData will exceed length when there are more mip levels.
            // Equivalent to dxtData.slice(0, length), which is not supported in IE11
            var level0DXTDataView = dxtData.subarray(0, length);
            var level0DXTData = new Uint8Array(length);
            level0DXTData.set(level0DXTDataView, 0);

            transferableObjects.push(level0DXTData.buffer);
            return new CompressedTextureBuffer(format, width, height, level0DXTData);
        }
    }

    function initWorker(crunchModule) {
        crunch = crunchModule;
        self.onmessage = createTaskProcessorWorker(convertCRNToDXT);
        self.postMessage(true);
    }

    function transcodeCRNToDXT(event) {
        var data = event.data;

        // Expect the first message to be to load a web assembly module
        var wasmConfig = data.webAssemblyConfig;
        if (when.defined(wasmConfig)) {
            // Require and compile WebAssembly module, or use fallback if not supported
            return require([wasmConfig.modulePath], function(crnModule) {
                if (when.defined(wasmConfig.wasmBinaryFile)) {
                    if (!when.defined(crnModule)) {
                        crnModule = self.Module;
                    }
                    initWorker(crnModule);
                } else {
                    initWorker(crnModule);
                }
            });
        }
    }

    return transcodeCRNToDXT;

});
