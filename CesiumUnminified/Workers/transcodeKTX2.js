define(['./defaultValue-fe22d8c0', './Check-6ede7e26', './WebGLConstants-0b1ce7ba', './RuntimeError-ef395448', './createTaskProcessorWorker'], (function (defaultValue, Check, WebGLConstants, RuntimeError, createTaskProcessorWorker) { 'use strict';

  /**
   * The data type of a pixel.
   *
   * @enum {number}
   * @see PostProcessStage
   */
  const PixelDatatype = {
    UNSIGNED_BYTE: WebGLConstants.WebGLConstants.UNSIGNED_BYTE,
    UNSIGNED_SHORT: WebGLConstants.WebGLConstants.UNSIGNED_SHORT,
    UNSIGNED_INT: WebGLConstants.WebGLConstants.UNSIGNED_INT,
    FLOAT: WebGLConstants.WebGLConstants.FLOAT,
    HALF_FLOAT: WebGLConstants.WebGLConstants.HALF_FLOAT_OES,
    UNSIGNED_INT_24_8: WebGLConstants.WebGLConstants.UNSIGNED_INT_24_8,
    UNSIGNED_SHORT_4_4_4_4: WebGLConstants.WebGLConstants.UNSIGNED_SHORT_4_4_4_4,
    UNSIGNED_SHORT_5_5_5_1: WebGLConstants.WebGLConstants.UNSIGNED_SHORT_5_5_5_1,
    UNSIGNED_SHORT_5_6_5: WebGLConstants.WebGLConstants.UNSIGNED_SHORT_5_6_5,
  };

  /**
    @private
  */
  PixelDatatype.toWebGLConstant = function (pixelDatatype, context) {
    switch (pixelDatatype) {
      case PixelDatatype.UNSIGNED_BYTE:
        return WebGLConstants.WebGLConstants.UNSIGNED_BYTE;
      case PixelDatatype.UNSIGNED_SHORT:
        return WebGLConstants.WebGLConstants.UNSIGNED_SHORT;
      case PixelDatatype.UNSIGNED_INT:
        return WebGLConstants.WebGLConstants.UNSIGNED_INT;
      case PixelDatatype.FLOAT:
        return WebGLConstants.WebGLConstants.FLOAT;
      case PixelDatatype.HALF_FLOAT:
        return context.webgl2
          ? WebGLConstants.WebGLConstants.HALF_FLOAT
          : WebGLConstants.WebGLConstants.HALF_FLOAT_OES;
      case PixelDatatype.UNSIGNED_INT_24_8:
        return WebGLConstants.WebGLConstants.UNSIGNED_INT_24_8;
      case PixelDatatype.UNSIGNED_SHORT_4_4_4_4:
        return WebGLConstants.WebGLConstants.UNSIGNED_SHORT_4_4_4_4;
      case PixelDatatype.UNSIGNED_SHORT_5_5_5_1:
        return WebGLConstants.WebGLConstants.UNSIGNED_SHORT_5_5_5_1;
      case PixelDatatype.UNSIGNED_SHORT_5_6_5:
        return PixelDatatype.UNSIGNED_SHORT_5_6_5;
    }
  };

  /**
    @private
  */
  PixelDatatype.isPacked = function (pixelDatatype) {
    return (
      pixelDatatype === PixelDatatype.UNSIGNED_INT_24_8 ||
      pixelDatatype === PixelDatatype.UNSIGNED_SHORT_4_4_4_4 ||
      pixelDatatype === PixelDatatype.UNSIGNED_SHORT_5_5_5_1 ||
      pixelDatatype === PixelDatatype.UNSIGNED_SHORT_5_6_5
    );
  };

  /**
    @private
  */
  PixelDatatype.sizeInBytes = function (pixelDatatype) {
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
  };

  /**
    @private
  */
  PixelDatatype.validate = function (pixelDatatype) {
    return (
      pixelDatatype === PixelDatatype.UNSIGNED_BYTE ||
      pixelDatatype === PixelDatatype.UNSIGNED_SHORT ||
      pixelDatatype === PixelDatatype.UNSIGNED_INT ||
      pixelDatatype === PixelDatatype.FLOAT ||
      pixelDatatype === PixelDatatype.HALF_FLOAT ||
      pixelDatatype === PixelDatatype.UNSIGNED_INT_24_8 ||
      pixelDatatype === PixelDatatype.UNSIGNED_SHORT_4_4_4_4 ||
      pixelDatatype === PixelDatatype.UNSIGNED_SHORT_5_5_5_1 ||
      pixelDatatype === PixelDatatype.UNSIGNED_SHORT_5_6_5
    );
  };

  var PixelDatatype$1 = Object.freeze(PixelDatatype);

  /**
   * The format of a pixel, i.e., the number of components it has and what they represent.
   *
   * @enum {number}
   */
  const PixelFormat = {
    /**
     * A pixel format containing a depth value.
     *
     * @type {number}
     * @constant
     */
    DEPTH_COMPONENT: WebGLConstants.WebGLConstants.DEPTH_COMPONENT,

    /**
     * A pixel format containing a depth and stencil value, most often used with {@link PixelDatatype.UNSIGNED_INT_24_8}.
     *
     * @type {number}
     * @constant
     */
    DEPTH_STENCIL: WebGLConstants.WebGLConstants.DEPTH_STENCIL,

    /**
     * A pixel format containing an alpha channel.
     *
     * @type {number}
     * @constant
     */
    ALPHA: WebGLConstants.WebGLConstants.ALPHA,

    /**
     * A pixel format containing a red channel
     *
     * @type {number}
     * @constant
     */
    RED: WebGLConstants.WebGLConstants.RED,

    /**
     * A pixel format containing red and green channels.
     *
     * @type {number}
     * @constant
     */
    RG: WebGLConstants.WebGLConstants.RG,

    /**
     * A pixel format containing red, green, and blue channels.
     *
     * @type {number}
     * @constant
     */
    RGB: WebGLConstants.WebGLConstants.RGB,

    /**
     * A pixel format containing red, green, blue, and alpha channels.
     *
     * @type {number}
     * @constant
     */
    RGBA: WebGLConstants.WebGLConstants.RGBA,

    /**
     * A pixel format containing a luminance (intensity) channel.
     *
     * @type {number}
     * @constant
     */
    LUMINANCE: WebGLConstants.WebGLConstants.LUMINANCE,

    /**
     * A pixel format containing luminance (intensity) and alpha channels.
     *
     * @type {number}
     * @constant
     */
    LUMINANCE_ALPHA: WebGLConstants.WebGLConstants.LUMINANCE_ALPHA,

    /**
     * A pixel format containing red, green, and blue channels that is DXT1 compressed.
     *
     * @type {number}
     * @constant
     */
    RGB_DXT1: WebGLConstants.WebGLConstants.COMPRESSED_RGB_S3TC_DXT1_EXT,

    /**
     * A pixel format containing red, green, blue, and alpha channels that is DXT1 compressed.
     *
     * @type {number}
     * @constant
     */
    RGBA_DXT1: WebGLConstants.WebGLConstants.COMPRESSED_RGBA_S3TC_DXT1_EXT,

    /**
     * A pixel format containing red, green, blue, and alpha channels that is DXT3 compressed.
     *
     * @type {number}
     * @constant
     */
    RGBA_DXT3: WebGLConstants.WebGLConstants.COMPRESSED_RGBA_S3TC_DXT3_EXT,

    /**
     * A pixel format containing red, green, blue, and alpha channels that is DXT5 compressed.
     *
     * @type {number}
     * @constant
     */
    RGBA_DXT5: WebGLConstants.WebGLConstants.COMPRESSED_RGBA_S3TC_DXT5_EXT,

    /**
     * A pixel format containing red, green, and blue channels that is PVR 4bpp compressed.
     *
     * @type {number}
     * @constant
     */
    RGB_PVRTC_4BPPV1: WebGLConstants.WebGLConstants.COMPRESSED_RGB_PVRTC_4BPPV1_IMG,

    /**
     * A pixel format containing red, green, and blue channels that is PVR 2bpp compressed.
     *
     * @type {number}
     * @constant
     */
    RGB_PVRTC_2BPPV1: WebGLConstants.WebGLConstants.COMPRESSED_RGB_PVRTC_2BPPV1_IMG,

    /**
     * A pixel format containing red, green, blue, and alpha channels that is PVR 4bpp compressed.
     *
     * @type {number}
     * @constant
     */
    RGBA_PVRTC_4BPPV1: WebGLConstants.WebGLConstants.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG,

    /**
     * A pixel format containing red, green, blue, and alpha channels that is PVR 2bpp compressed.
     *
     * @type {number}
     * @constant
     */
    RGBA_PVRTC_2BPPV1: WebGLConstants.WebGLConstants.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG,

    /**
     * A pixel format containing red, green, blue, and alpha channels that is ASTC compressed.
     *
     * @type {number}
     * @constant
     */
    RGBA_ASTC: WebGLConstants.WebGLConstants.COMPRESSED_RGBA_ASTC_4x4_WEBGL,

    /**
     * A pixel format containing red, green, and blue channels that is ETC1 compressed.
     *
     * @type {number}
     * @constant
     */
    RGB_ETC1: WebGLConstants.WebGLConstants.COMPRESSED_RGB_ETC1_WEBGL,

    /**
     * A pixel format containing red, green, and blue channels that is ETC2 compressed.
     *
     * @type {number}
     * @constant
     */
    RGB8_ETC2: WebGLConstants.WebGLConstants.COMPRESSED_RGB8_ETC2,

    /**
     * A pixel format containing red, green, blue, and alpha channels that is ETC2 compressed.
     *
     * @type {number}
     * @constant
     */
    RGBA8_ETC2_EAC: WebGLConstants.WebGLConstants.COMPRESSED_RGBA8_ETC2_EAC,

    /**
     * A pixel format containing red, green, blue, and alpha channels that is BC7 compressed.
     *
     * @type {number}
     * @constant
     */
    RGBA_BC7: WebGLConstants.WebGLConstants.COMPRESSED_RGBA_BPTC_UNORM,
  };

  /**
   * @private
   */
  PixelFormat.componentsLength = function (pixelFormat) {
    switch (pixelFormat) {
      case PixelFormat.RGB:
        return 3;
      case PixelFormat.RGBA:
        return 4;
      case PixelFormat.LUMINANCE_ALPHA:
      case PixelFormat.RG:
        return 2;
      case PixelFormat.ALPHA:
      case PixelFormat.RED:
      case PixelFormat.LUMINANCE:
        return 1;
      default:
        return 1;
    }
  };

  /**
   * @private
   */
  PixelFormat.validate = function (pixelFormat) {
    return (
      pixelFormat === PixelFormat.DEPTH_COMPONENT ||
      pixelFormat === PixelFormat.DEPTH_STENCIL ||
      pixelFormat === PixelFormat.ALPHA ||
      pixelFormat === PixelFormat.RED ||
      pixelFormat === PixelFormat.RG ||
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
      pixelFormat === PixelFormat.RGBA_ASTC ||
      pixelFormat === PixelFormat.RGB_ETC1 ||
      pixelFormat === PixelFormat.RGB8_ETC2 ||
      pixelFormat === PixelFormat.RGBA8_ETC2_EAC ||
      pixelFormat === PixelFormat.RGBA_BC7
    );
  };

  /**
   * @private
   */
  PixelFormat.isColorFormat = function (pixelFormat) {
    return (
      pixelFormat === PixelFormat.ALPHA ||
      pixelFormat === PixelFormat.RGB ||
      pixelFormat === PixelFormat.RGBA ||
      pixelFormat === PixelFormat.LUMINANCE ||
      pixelFormat === PixelFormat.LUMINANCE_ALPHA
    );
  };

  /**
   * @private
   */
  PixelFormat.isDepthFormat = function (pixelFormat) {
    return (
      pixelFormat === PixelFormat.DEPTH_COMPONENT ||
      pixelFormat === PixelFormat.DEPTH_STENCIL
    );
  };

  /**
   * @private
   */
  PixelFormat.isCompressedFormat = function (pixelFormat) {
    return (
      pixelFormat === PixelFormat.RGB_DXT1 ||
      pixelFormat === PixelFormat.RGBA_DXT1 ||
      pixelFormat === PixelFormat.RGBA_DXT3 ||
      pixelFormat === PixelFormat.RGBA_DXT5 ||
      pixelFormat === PixelFormat.RGB_PVRTC_4BPPV1 ||
      pixelFormat === PixelFormat.RGB_PVRTC_2BPPV1 ||
      pixelFormat === PixelFormat.RGBA_PVRTC_4BPPV1 ||
      pixelFormat === PixelFormat.RGBA_PVRTC_2BPPV1 ||
      pixelFormat === PixelFormat.RGBA_ASTC ||
      pixelFormat === PixelFormat.RGB_ETC1 ||
      pixelFormat === PixelFormat.RGB8_ETC2 ||
      pixelFormat === PixelFormat.RGBA8_ETC2_EAC ||
      pixelFormat === PixelFormat.RGBA_BC7
    );
  };

  /**
   * @private
   */
  PixelFormat.isDXTFormat = function (pixelFormat) {
    return (
      pixelFormat === PixelFormat.RGB_DXT1 ||
      pixelFormat === PixelFormat.RGBA_DXT1 ||
      pixelFormat === PixelFormat.RGBA_DXT3 ||
      pixelFormat === PixelFormat.RGBA_DXT5
    );
  };

  /**
   * @private
   */
  PixelFormat.isPVRTCFormat = function (pixelFormat) {
    return (
      pixelFormat === PixelFormat.RGB_PVRTC_4BPPV1 ||
      pixelFormat === PixelFormat.RGB_PVRTC_2BPPV1 ||
      pixelFormat === PixelFormat.RGBA_PVRTC_4BPPV1 ||
      pixelFormat === PixelFormat.RGBA_PVRTC_2BPPV1
    );
  };

  /**
   * @private
   */
  PixelFormat.isASTCFormat = function (pixelFormat) {
    return pixelFormat === PixelFormat.RGBA_ASTC;
  };

  /**
   * @private
   */
  PixelFormat.isETC1Format = function (pixelFormat) {
    return pixelFormat === PixelFormat.RGB_ETC1;
  };

  /**
   * @private
   */
  PixelFormat.isETC2Format = function (pixelFormat) {
    return (
      pixelFormat === PixelFormat.RGB8_ETC2 ||
      pixelFormat === PixelFormat.RGBA8_ETC2_EAC
    );
  };

  /**
   * @private
   */
  PixelFormat.isBC7Format = function (pixelFormat) {
    return pixelFormat === PixelFormat.RGBA_BC7;
  };

  /**
   * @private
   */
  PixelFormat.compressedTextureSizeInBytes = function (
    pixelFormat,
    width,
    height
  ) {
    switch (pixelFormat) {
      case PixelFormat.RGB_DXT1:
      case PixelFormat.RGBA_DXT1:
      case PixelFormat.RGB_ETC1:
      case PixelFormat.RGB8_ETC2:
        return Math.floor((width + 3) / 4) * Math.floor((height + 3) / 4) * 8;

      case PixelFormat.RGBA_DXT3:
      case PixelFormat.RGBA_DXT5:
      case PixelFormat.RGBA_ASTC:
      case PixelFormat.RGBA8_ETC2_EAC:
        return Math.floor((width + 3) / 4) * Math.floor((height + 3) / 4) * 16;

      case PixelFormat.RGB_PVRTC_4BPPV1:
      case PixelFormat.RGBA_PVRTC_4BPPV1:
        return Math.floor((Math.max(width, 8) * Math.max(height, 8) * 4 + 7) / 8);

      case PixelFormat.RGB_PVRTC_2BPPV1:
      case PixelFormat.RGBA_PVRTC_2BPPV1:
        return Math.floor(
          (Math.max(width, 16) * Math.max(height, 8) * 2 + 7) / 8
        );

      case PixelFormat.RGBA_BC7:
        return Math.ceil(width / 4) * Math.ceil(height / 4) * 16;

      default:
        return 0;
    }
  };

  /**
   * @private
   */
  PixelFormat.textureSizeInBytes = function (
    pixelFormat,
    pixelDatatype,
    width,
    height
  ) {
    let componentsLength = PixelFormat.componentsLength(pixelFormat);
    if (PixelDatatype$1.isPacked(pixelDatatype)) {
      componentsLength = 1;
    }
    return (
      componentsLength * PixelDatatype$1.sizeInBytes(pixelDatatype) * width * height
    );
  };

  /**
   * @private
   */
  PixelFormat.alignmentInBytes = function (pixelFormat, pixelDatatype, width) {
    const mod =
      PixelFormat.textureSizeInBytes(pixelFormat, pixelDatatype, width, 1) % 4;
    return mod === 0 ? 4 : mod === 2 ? 2 : 1;
  };

  /**
   * @private
   */
  PixelFormat.createTypedArray = function (
    pixelFormat,
    pixelDatatype,
    width,
    height
  ) {
    let constructor;
    const sizeInBytes = PixelDatatype$1.sizeInBytes(pixelDatatype);
    if (sizeInBytes === Uint8Array.BYTES_PER_ELEMENT) {
      constructor = Uint8Array;
    } else if (sizeInBytes === Uint16Array.BYTES_PER_ELEMENT) {
      constructor = Uint16Array;
    } else if (
      sizeInBytes === Float32Array.BYTES_PER_ELEMENT &&
      pixelDatatype === PixelDatatype$1.FLOAT
    ) {
      constructor = Float32Array;
    } else {
      constructor = Uint32Array;
    }

    const size = PixelFormat.componentsLength(pixelFormat) * width * height;
    return new constructor(size);
  };

  /**
   * @private
   */
  PixelFormat.flipY = function (
    bufferView,
    pixelFormat,
    pixelDatatype,
    width,
    height
  ) {
    if (height === 1) {
      return bufferView;
    }
    const flipped = PixelFormat.createTypedArray(
      pixelFormat,
      pixelDatatype,
      width,
      height
    );
    const numberOfComponents = PixelFormat.componentsLength(pixelFormat);
    const textureWidth = width * numberOfComponents;
    for (let i = 0; i < height; ++i) {
      const row = i * width * numberOfComponents;
      const flippedRow = (height - i - 1) * width * numberOfComponents;
      for (let j = 0; j < textureWidth; ++j) {
        flipped[flippedRow + j] = bufferView[row + j];
      }
    }
    return flipped;
  };

  /**
   * @private
   */
  PixelFormat.toInternalFormat = function (pixelFormat, pixelDatatype, context) {
    // WebGL 1 require internalFormat to be the same as PixelFormat
    if (!context.webgl2) {
      return pixelFormat;
    }

    // Convert pixelFormat to correct internalFormat for WebGL 2
    if (pixelFormat === PixelFormat.DEPTH_STENCIL) {
      return WebGLConstants.WebGLConstants.DEPTH24_STENCIL8;
    }

    if (pixelFormat === PixelFormat.DEPTH_COMPONENT) {
      if (pixelDatatype === PixelDatatype$1.UNSIGNED_SHORT) {
        return WebGLConstants.WebGLConstants.DEPTH_COMPONENT16;
      } else if (pixelDatatype === PixelDatatype$1.UNSIGNED_INT) {
        return WebGLConstants.WebGLConstants.DEPTH_COMPONENT24;
      }
    }

    if (pixelDatatype === PixelDatatype$1.FLOAT) {
      switch (pixelFormat) {
        case PixelFormat.RGBA:
          return WebGLConstants.WebGLConstants.RGBA32F;
        case PixelFormat.RGB:
          return WebGLConstants.WebGLConstants.RGB32F;
        case PixelFormat.RG:
          return WebGLConstants.WebGLConstants.RG32F;
        case PixelFormat.RED:
          return WebGLConstants.WebGLConstants.R32F;
      }
    }

    if (pixelDatatype === PixelDatatype$1.HALF_FLOAT) {
      switch (pixelFormat) {
        case PixelFormat.RGBA:
          return WebGLConstants.WebGLConstants.RGBA16F;
        case PixelFormat.RGB:
          return WebGLConstants.WebGLConstants.RGB16F;
        case PixelFormat.RG:
          return WebGLConstants.WebGLConstants.RG16F;
        case PixelFormat.RED:
          return WebGLConstants.WebGLConstants.R16F;
      }
    }

    return pixelFormat;
  };

  var PixelFormat$1 = Object.freeze(PixelFormat);

  /**
   * Enum containing Vulkan Constant values by name.
   *
   * These match the constants from the {@link https://www.khronos.org/registry/vulkan/specs/1.2-extensions/html/vkspec.html#formats-definition|Vulkan 1.2 specification}.
   *
   * @enum {number}
   * @private
   */
  const VulkanConstants = {
    VK_FORMAT_UNDEFINED: 0,
    VK_FORMAT_R4G4_UNORM_PACK8: 1,
    VK_FORMAT_R4G4B4A4_UNORM_PACK16: 2,
    VK_FORMAT_B4G4R4A4_UNORM_PACK16: 3,
    VK_FORMAT_R5G6B5_UNORM_PACK16: 4,
    VK_FORMAT_B5G6R5_UNORM_PACK16: 5,
    VK_FORMAT_R5G5B5A1_UNORM_PACK16: 6,
    VK_FORMAT_B5G5R5A1_UNORM_PACK16: 7,
    VK_FORMAT_A1R5G5B5_UNORM_PACK16: 8,
    VK_FORMAT_R8_UNORM: 9,
    VK_FORMAT_R8_SNORM: 10,
    VK_FORMAT_R8_USCALED: 11,
    VK_FORMAT_R8_SSCALED: 12,
    VK_FORMAT_R8_UINT: 13,
    VK_FORMAT_R8_SINT: 14,
    VK_FORMAT_R8_SRGB: 15,
    VK_FORMAT_R8G8_UNORM: 16,
    VK_FORMAT_R8G8_SNORM: 17,
    VK_FORMAT_R8G8_USCALED: 18,
    VK_FORMAT_R8G8_SSCALED: 19,
    VK_FORMAT_R8G8_UINT: 20,
    VK_FORMAT_R8G8_SINT: 21,
    VK_FORMAT_R8G8_SRGB: 22,
    VK_FORMAT_R8G8B8_UNORM: 23,
    VK_FORMAT_R8G8B8_SNORM: 24,
    VK_FORMAT_R8G8B8_USCALED: 25,
    VK_FORMAT_R8G8B8_SSCALED: 26,
    VK_FORMAT_R8G8B8_UINT: 27,
    VK_FORMAT_R8G8B8_SINT: 28,
    VK_FORMAT_R8G8B8_SRGB: 29,
    VK_FORMAT_B8G8R8_UNORM: 30,
    VK_FORMAT_B8G8R8_SNORM: 31,
    VK_FORMAT_B8G8R8_USCALED: 32,
    VK_FORMAT_B8G8R8_SSCALED: 33,
    VK_FORMAT_B8G8R8_UINT: 34,
    VK_FORMAT_B8G8R8_SINT: 35,
    VK_FORMAT_B8G8R8_SRGB: 36,
    VK_FORMAT_R8G8B8A8_UNORM: 37,
    VK_FORMAT_R8G8B8A8_SNORM: 38,
    VK_FORMAT_R8G8B8A8_USCALED: 39,
    VK_FORMAT_R8G8B8A8_SSCALED: 40,
    VK_FORMAT_R8G8B8A8_UINT: 41,
    VK_FORMAT_R8G8B8A8_SINT: 42,
    VK_FORMAT_R8G8B8A8_SRGB: 43,
    VK_FORMAT_B8G8R8A8_UNORM: 44,
    VK_FORMAT_B8G8R8A8_SNORM: 45,
    VK_FORMAT_B8G8R8A8_USCALED: 46,
    VK_FORMAT_B8G8R8A8_SSCALED: 47,
    VK_FORMAT_B8G8R8A8_UINT: 48,
    VK_FORMAT_B8G8R8A8_SINT: 49,
    VK_FORMAT_B8G8R8A8_SRGB: 50,
    VK_FORMAT_A8B8G8R8_UNORM_PACK32: 51,
    VK_FORMAT_A8B8G8R8_SNORM_PACK32: 52,
    VK_FORMAT_A8B8G8R8_USCALED_PACK32: 53,
    VK_FORMAT_A8B8G8R8_SSCALED_PACK32: 54,
    VK_FORMAT_A8B8G8R8_UINT_PACK32: 55,
    VK_FORMAT_A8B8G8R8_SINT_PACK32: 56,
    VK_FORMAT_A8B8G8R8_SRGB_PACK32: 57,
    VK_FORMAT_A2R10G10B10_UNORM_PACK32: 58,
    VK_FORMAT_A2R10G10B10_SNORM_PACK32: 59,
    VK_FORMAT_A2R10G10B10_USCALED_PACK32: 60,
    VK_FORMAT_A2R10G10B10_SSCALED_PACK32: 61,
    VK_FORMAT_A2R10G10B10_UINT_PACK32: 62,
    VK_FORMAT_A2R10G10B10_SINT_PACK32: 63,
    VK_FORMAT_A2B10G10R10_UNORM_PACK32: 64,
    VK_FORMAT_A2B10G10R10_SNORM_PACK32: 65,
    VK_FORMAT_A2B10G10R10_USCALED_PACK32: 66,
    VK_FORMAT_A2B10G10R10_SSCALED_PACK32: 67,
    VK_FORMAT_A2B10G10R10_UINT_PACK32: 68,
    VK_FORMAT_A2B10G10R10_SINT_PACK32: 69,
    VK_FORMAT_R16_UNORM: 70,
    VK_FORMAT_R16_SNORM: 71,
    VK_FORMAT_R16_USCALED: 72,
    VK_FORMAT_R16_SSCALED: 73,
    VK_FORMAT_R16_UINT: 74,
    VK_FORMAT_R16_SINT: 75,
    VK_FORMAT_R16_SFLOAT: 76,
    VK_FORMAT_R16G16_UNORM: 77,
    VK_FORMAT_R16G16_SNORM: 78,
    VK_FORMAT_R16G16_USCALED: 79,
    VK_FORMAT_R16G16_SSCALED: 80,
    VK_FORMAT_R16G16_UINT: 81,
    VK_FORMAT_R16G16_SINT: 82,
    VK_FORMAT_R16G16_SFLOAT: 83,
    VK_FORMAT_R16G16B16_UNORM: 84,
    VK_FORMAT_R16G16B16_SNORM: 85,
    VK_FORMAT_R16G16B16_USCALED: 86,
    VK_FORMAT_R16G16B16_SSCALED: 87,
    VK_FORMAT_R16G16B16_UINT: 88,
    VK_FORMAT_R16G16B16_SINT: 89,
    VK_FORMAT_R16G16B16_SFLOAT: 90,
    VK_FORMAT_R16G16B16A16_UNORM: 91,
    VK_FORMAT_R16G16B16A16_SNORM: 92,
    VK_FORMAT_R16G16B16A16_USCALED: 93,
    VK_FORMAT_R16G16B16A16_SSCALED: 94,
    VK_FORMAT_R16G16B16A16_UINT: 95,
    VK_FORMAT_R16G16B16A16_SINT: 96,
    VK_FORMAT_R16G16B16A16_SFLOAT: 97,
    VK_FORMAT_R32_UINT: 98,
    VK_FORMAT_R32_SINT: 99,
    VK_FORMAT_R32_SFLOAT: 100,
    VK_FORMAT_R32G32_UINT: 101,
    VK_FORMAT_R32G32_SINT: 102,
    VK_FORMAT_R32G32_SFLOAT: 103,
    VK_FORMAT_R32G32B32_UINT: 104,
    VK_FORMAT_R32G32B32_SINT: 105,
    VK_FORMAT_R32G32B32_SFLOAT: 106,
    VK_FORMAT_R32G32B32A32_UINT: 107,
    VK_FORMAT_R32G32B32A32_SINT: 108,
    VK_FORMAT_R32G32B32A32_SFLOAT: 109,
    VK_FORMAT_R64_UINT: 110,
    VK_FORMAT_R64_SINT: 111,
    VK_FORMAT_R64_SFLOAT: 112,
    VK_FORMAT_R64G64_UINT: 113,
    VK_FORMAT_R64G64_SINT: 114,
    VK_FORMAT_R64G64_SFLOAT: 115,
    VK_FORMAT_R64G64B64_UINT: 116,
    VK_FORMAT_R64G64B64_SINT: 117,
    VK_FORMAT_R64G64B64_SFLOAT: 118,
    VK_FORMAT_R64G64B64A64_UINT: 119,
    VK_FORMAT_R64G64B64A64_SINT: 120,
    VK_FORMAT_R64G64B64A64_SFLOAT: 121,
    VK_FORMAT_B10G11R11_UFLOAT_PACK32: 122,
    VK_FORMAT_E5B9G9R9_UFLOAT_PACK32: 123,
    VK_FORMAT_D16_UNORM: 124,
    VK_FORMAT_X8_D24_UNORM_PACK32: 125,
    VK_FORMAT_D32_SFLOAT: 126,
    VK_FORMAT_S8_UINT: 127,
    VK_FORMAT_D16_UNORM_S8_UINT: 128,
    VK_FORMAT_D24_UNORM_S8_UINT: 129,
    VK_FORMAT_D32_SFLOAT_S8_UINT: 130,
    VK_FORMAT_BC1_RGB_UNORM_BLOCK: 131,
    VK_FORMAT_BC1_RGB_SRGB_BLOCK: 132,
    VK_FORMAT_BC1_RGBA_UNORM_BLOCK: 133,
    VK_FORMAT_BC1_RGBA_SRGB_BLOCK: 134,
    VK_FORMAT_BC2_UNORM_BLOCK: 135,
    VK_FORMAT_BC2_SRGB_BLOCK: 136,
    VK_FORMAT_BC3_UNORM_BLOCK: 137,
    VK_FORMAT_BC3_SRGB_BLOCK: 138,
    VK_FORMAT_BC4_UNORM_BLOCK: 139,
    VK_FORMAT_BC4_SNORM_BLOCK: 140,
    VK_FORMAT_BC5_UNORM_BLOCK: 141,
    VK_FORMAT_BC5_SNORM_BLOCK: 142,
    VK_FORMAT_BC6H_UFLOAT_BLOCK: 143,
    VK_FORMAT_BC6H_SFLOAT_BLOCK: 144,
    VK_FORMAT_BC7_UNORM_BLOCK: 145,
    VK_FORMAT_BC7_SRGB_BLOCK: 146,
    VK_FORMAT_ETC2_R8G8B8_UNORM_BLOCK: 147,
    VK_FORMAT_ETC2_R8G8B8_SRGB_BLOCK: 148,
    VK_FORMAT_ETC2_R8G8B8A1_UNORM_BLOCK: 149,
    VK_FORMAT_ETC2_R8G8B8A1_SRGB_BLOCK: 150,
    VK_FORMAT_ETC2_R8G8B8A8_UNORM_BLOCK: 151,
    VK_FORMAT_ETC2_R8G8B8A8_SRGB_BLOCK: 152,
    VK_FORMAT_EAC_R11_UNORM_BLOCK: 153,
    VK_FORMAT_EAC_R11_SNORM_BLOCK: 154,
    VK_FORMAT_EAC_R11G11_UNORM_BLOCK: 155,
    VK_FORMAT_EAC_R11G11_SNORM_BLOCK: 156,
    VK_FORMAT_ASTC_4x4_UNORM_BLOCK: 157,
    VK_FORMAT_ASTC_4x4_SRGB_BLOCK: 158,
    VK_FORMAT_ASTC_5x4_UNORM_BLOCK: 159,
    VK_FORMAT_ASTC_5x4_SRGB_BLOCK: 160,
    VK_FORMAT_ASTC_5x5_UNORM_BLOCK: 161,
    VK_FORMAT_ASTC_5x5_SRGB_BLOCK: 162,
    VK_FORMAT_ASTC_6x5_UNORM_BLOCK: 163,
    VK_FORMAT_ASTC_6x5_SRGB_BLOCK: 164,
    VK_FORMAT_ASTC_6x6_UNORM_BLOCK: 165,
    VK_FORMAT_ASTC_6x6_SRGB_BLOCK: 166,
    VK_FORMAT_ASTC_8x5_UNORM_BLOCK: 167,
    VK_FORMAT_ASTC_8x5_SRGB_BLOCK: 168,
    VK_FORMAT_ASTC_8x6_UNORM_BLOCK: 169,
    VK_FORMAT_ASTC_8x6_SRGB_BLOCK: 170,
    VK_FORMAT_ASTC_8x8_UNORM_BLOCK: 171,
    VK_FORMAT_ASTC_8x8_SRGB_BLOCK: 172,
    VK_FORMAT_ASTC_10x5_UNORM_BLOCK: 173,
    VK_FORMAT_ASTC_10x5_SRGB_BLOCK: 174,
    VK_FORMAT_ASTC_10x6_UNORM_BLOCK: 175,
    VK_FORMAT_ASTC_10x6_SRGB_BLOCK: 176,
    VK_FORMAT_ASTC_10x8_UNORM_BLOCK: 177,
    VK_FORMAT_ASTC_10x8_SRGB_BLOCK: 178,
    VK_FORMAT_ASTC_10x10_UNORM_BLOCK: 179,
    VK_FORMAT_ASTC_10x10_SRGB_BLOCK: 180,
    VK_FORMAT_ASTC_12x10_UNORM_BLOCK: 181,
    VK_FORMAT_ASTC_12x10_SRGB_BLOCK: 182,
    VK_FORMAT_ASTC_12x12_UNORM_BLOCK: 183,
    VK_FORMAT_ASTC_12x12_SRGB_BLOCK: 184,
    VK_FORMAT_G8B8G8R8_422_UNORM: 1000156000,
    VK_FORMAT_B8G8R8G8_422_UNORM: 1000156001,
    VK_FORMAT_G8_B8_R8_3PLANE_420_UNORM: 1000156002,
    VK_FORMAT_G8_B8R8_2PLANE_420_UNORM: 1000156003,
    VK_FORMAT_G8_B8_R8_3PLANE_422_UNORM: 1000156004,
    VK_FORMAT_G8_B8R8_2PLANE_422_UNORM: 1000156005,
    VK_FORMAT_G8_B8_R8_3PLANE_444_UNORM: 1000156006,
    VK_FORMAT_R10X6_UNORM_PACK16: 1000156007,
    VK_FORMAT_R10X6G10X6_UNORM_2PACK16: 1000156008,
    VK_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16: 1000156009,
    VK_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16: 1000156010,
    VK_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16: 1000156011,
    VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16: 1000156012,
    VK_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16: 1000156013,
    VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16: 1000156014,
    VK_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16: 1000156015,
    VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16: 1000156016,
    VK_FORMAT_R12X4_UNORM_PACK16: 1000156017,
    VK_FORMAT_R12X4G12X4_UNORM_2PACK16: 1000156018,
    VK_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16: 1000156019,
    VK_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16: 1000156020,
    VK_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16: 1000156021,
    VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16: 1000156022,
    VK_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16: 1000156023,
    VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16: 1000156024,
    VK_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16: 1000156025,
    VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16: 1000156026,
    VK_FORMAT_G16B16G16R16_422_UNORM: 1000156027,
    VK_FORMAT_B16G16R16G16_422_UNORM: 1000156028,
    VK_FORMAT_G16_B16_R16_3PLANE_420_UNORM: 1000156029,
    VK_FORMAT_G16_B16R16_2PLANE_420_UNORM: 1000156030,
    VK_FORMAT_G16_B16_R16_3PLANE_422_UNORM: 1000156031,
    VK_FORMAT_G16_B16R16_2PLANE_422_UNORM: 1000156032,
    VK_FORMAT_G16_B16_R16_3PLANE_444_UNORM: 1000156033,
    VK_FORMAT_PVRTC1_2BPP_UNORM_BLOCK_IMG: 1000054000,
    VK_FORMAT_PVRTC1_4BPP_UNORM_BLOCK_IMG: 1000054001,
    VK_FORMAT_PVRTC2_2BPP_UNORM_BLOCK_IMG: 1000054002,
    VK_FORMAT_PVRTC2_4BPP_UNORM_BLOCK_IMG: 1000054003,
    VK_FORMAT_PVRTC1_2BPP_SRGB_BLOCK_IMG: 1000054004,
    VK_FORMAT_PVRTC1_4BPP_SRGB_BLOCK_IMG: 1000054005,
    VK_FORMAT_PVRTC2_2BPP_SRGB_BLOCK_IMG: 1000054006,
    VK_FORMAT_PVRTC2_4BPP_SRGB_BLOCK_IMG: 1000054007,
    VK_FORMAT_ASTC_4x4_SFLOAT_BLOCK_EXT: 1000066000,
    VK_FORMAT_ASTC_5x4_SFLOAT_BLOCK_EXT: 1000066001,
    VK_FORMAT_ASTC_5x5_SFLOAT_BLOCK_EXT: 1000066002,
    VK_FORMAT_ASTC_6x5_SFLOAT_BLOCK_EXT: 1000066003,
    VK_FORMAT_ASTC_6x6_SFLOAT_BLOCK_EXT: 1000066004,
    VK_FORMAT_ASTC_8x5_SFLOAT_BLOCK_EXT: 1000066005,
    VK_FORMAT_ASTC_8x6_SFLOAT_BLOCK_EXT: 1000066006,
    VK_FORMAT_ASTC_8x8_SFLOAT_BLOCK_EXT: 1000066007,
    VK_FORMAT_ASTC_10x5_SFLOAT_BLOCK_EXT: 1000066008,
    VK_FORMAT_ASTC_10x6_SFLOAT_BLOCK_EXT: 1000066009,
    VK_FORMAT_ASTC_10x8_SFLOAT_BLOCK_EXT: 1000066010,
    VK_FORMAT_ASTC_10x10_SFLOAT_BLOCK_EXT: 1000066011,
    VK_FORMAT_ASTC_12x10_SFLOAT_BLOCK_EXT: 1000066012,
    VK_FORMAT_ASTC_12x12_SFLOAT_BLOCK_EXT: 1000066013,
    VK_FORMAT_G8B8G8R8_422_UNORM_KHR: 1000156000,
    VK_FORMAT_B8G8R8G8_422_UNORM_KHR: 1000156001,
    VK_FORMAT_G8_B8_R8_3PLANE_420_UNORM_KHR: 1000156002,
    VK_FORMAT_G8_B8R8_2PLANE_420_UNORM_KHR: 1000156003,
    VK_FORMAT_G8_B8_R8_3PLANE_422_UNORM_KHR: 1000156004,
    VK_FORMAT_G8_B8R8_2PLANE_422_UNORM_KHR: 1000156005,
    VK_FORMAT_G8_B8_R8_3PLANE_444_UNORM_KHR: 1000156006,
    VK_FORMAT_R10X6_UNORM_PACK16_KHR: 1000156007,
    VK_FORMAT_R10X6G10X6_UNORM_2PACK16_KHR: 1000156008,
    VK_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16_KHR: 1000156009,
    VK_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16_KHR: 1000156010,
    VK_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16_KHR: 1000156011,
    VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16_KHR: 1000156012,
    VK_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16_KHR: 1000156013,
    VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16_KHR: 1000156014,
    VK_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16_KHR: 1000156015,
    VK_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16_KHR: 1000156016,
    VK_FORMAT_R12X4_UNORM_PACK16_KHR: 1000156017,
    VK_FORMAT_R12X4G12X4_UNORM_2PACK16_KHR: 1000156018,
    VK_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16_KHR: 1000156019,
    VK_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16_KHR: 1000156020,
    VK_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16_KHR: 1000156021,
    VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16_KHR: 1000156022,
    VK_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16_KHR: 1000156023,
    VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16_KHR: 1000156024,
    VK_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16_KHR: 1000156025,
    VK_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16_KHR: 1000156026,
    VK_FORMAT_G16B16G16R16_422_UNORM_KHR: 1000156027,
    VK_FORMAT_B16G16R16G16_422_UNORM_KHR: 1000156028,
    VK_FORMAT_G16_B16_R16_3PLANE_420_UNORM_KHR: 1000156029,
    VK_FORMAT_G16_B16R16_2PLANE_420_UNORM_KHR: 1000156030,
    VK_FORMAT_G16_B16_R16_3PLANE_422_UNORM_KHR: 1000156031,
    VK_FORMAT_G16_B16R16_2PLANE_422_UNORM_KHR: 1000156032,
    VK_FORMAT_G16_B16_R16_3PLANE_444_UNORM_KHR: 1000156033,
  };
  var VulkanConstants$1 = Object.freeze(VulkanConstants);

  ///////////////////////////////////////////////////
  // KTX2 Header.
  ///////////////////////////////////////////////////
  const KHR_SUPERCOMPRESSION_NONE = 0;
  // Data Format Descriptor (DFD).
  ///////////////////////////////////////////////////

  const KHR_DF_KHR_DESCRIPTORTYPE_BASICFORMAT = 0;
  const KHR_DF_VENDORID_KHRONOS = 0;
  const KHR_DF_VERSION = 2;
  const KHR_DF_MODEL_UNSPECIFIED = 0;
  const KHR_DF_FLAG_ALPHA_STRAIGHT = 0;
  const KHR_DF_TRANSFER_SRGB = 2;
  const KHR_DF_PRIMARIES_BT709 = 1;
  const KHR_DF_SAMPLE_DATATYPE_SIGNED = 0x40;
  // VK FORMAT.
  ///////////////////////////////////////////////////

  const VK_FORMAT_UNDEFINED = 0;

  /**
   * Represents an unpacked KTX 2.0 texture container. Data for individual mip levels are stored in
   * the `.levels` array, typically compressed in Basis Universal formats. Additional properties
   * provide metadata required to process, transcode, and upload these textures.
   */

  class KTX2Container {
    constructor() {
      this.vkFormat = VK_FORMAT_UNDEFINED;
      this.typeSize = 1;
      this.pixelWidth = 0;
      this.pixelHeight = 0;
      this.pixelDepth = 0;
      this.layerCount = 0;
      this.faceCount = 1;
      this.supercompressionScheme = KHR_SUPERCOMPRESSION_NONE;
      this.levels = [];
      this.dataFormatDescriptor = [{
        vendorId: KHR_DF_VENDORID_KHRONOS,
        descriptorType: KHR_DF_KHR_DESCRIPTORTYPE_BASICFORMAT,
        descriptorBlockSize: 0,
        versionNumber: KHR_DF_VERSION,
        colorModel: KHR_DF_MODEL_UNSPECIFIED,
        colorPrimaries: KHR_DF_PRIMARIES_BT709,
        transferFunction: KHR_DF_TRANSFER_SRGB,
        flags: KHR_DF_FLAG_ALPHA_STRAIGHT,
        texelBlockDimension: [0, 0, 0, 0],
        bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0],
        samples: []
      }];
      this.keyValue = {};
      this.globalData = null;
    }

  }

  class BufferReader {
    constructor(data, byteOffset, byteLength, littleEndian) {
      this._dataView = void 0;
      this._littleEndian = void 0;
      this._offset = void 0;
      this._dataView = new DataView(data.buffer, data.byteOffset + byteOffset, byteLength);
      this._littleEndian = littleEndian;
      this._offset = 0;
    }

    _nextUint8() {
      const value = this._dataView.getUint8(this._offset);

      this._offset += 1;
      return value;
    }

    _nextUint16() {
      const value = this._dataView.getUint16(this._offset, this._littleEndian);

      this._offset += 2;
      return value;
    }

    _nextUint32() {
      const value = this._dataView.getUint32(this._offset, this._littleEndian);

      this._offset += 4;
      return value;
    }

    _nextUint64() {
      const left = this._dataView.getUint32(this._offset, this._littleEndian);

      const right = this._dataView.getUint32(this._offset + 4, this._littleEndian); // TODO(cleanup): Just test this...
      // const value = this._littleEndian ? left + (2 ** 32 * right) : (2 ** 32 * left) + right;


      const value = left + 2 ** 32 * right;
      this._offset += 8;
      return value;
    }

    _nextInt32() {
      const value = this._dataView.getInt32(this._offset, this._littleEndian);

      this._offset += 4;
      return value;
    }

    _skip(bytes) {
      this._offset += bytes;
      return this;
    }

    _scan(maxByteLength, term = 0x00) {
      const byteOffset = this._offset;
      let byteLength = 0;

      while (this._dataView.getUint8(this._offset) !== term && byteLength < maxByteLength) {
        byteLength++;
        this._offset++;
      }

      if (byteLength < maxByteLength) this._offset++;
      return new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + byteOffset, byteLength);
    }

  }
  // KTX2 Header.
  ///////////////////////////////////////////////////

  const KTX2_ID = [// '´', 'K', 'T', 'X', '2', '0', 'ª', '\r', '\n', '\x1A', '\n'
  0xab, 0x4b, 0x54, 0x58, 0x20, 0x32, 0x30, 0xbb, 0x0d, 0x0a, 0x1a, 0x0a];
  /** Decodes an ArrayBuffer to text. */

  function decodeText(buffer) {
    if (typeof TextDecoder !== 'undefined') {
      return new TextDecoder().decode(buffer);
    }

    return Buffer.from(buffer).toString('utf8');
  }

  /**
   * Parses a KTX 2.0 file, returning an unpacked {@link KTX2Container} instance with all associated
   * data. The container's mip levels and other binary data are pointers into the original file, not
   * copies, so the original file should not be overwritten after reading.
   *
   * @param data Bytes of KTX 2.0 file, as Uint8Array or Buffer.
   */

  function read(data) {
    ///////////////////////////////////////////////////
    // KTX 2.0 Identifier.
    ///////////////////////////////////////////////////
    const id = new Uint8Array(data.buffer, data.byteOffset, KTX2_ID.length);

    if (id[0] !== KTX2_ID[0] || // '´'
    id[1] !== KTX2_ID[1] || // 'K'
    id[2] !== KTX2_ID[2] || // 'T'
    id[3] !== KTX2_ID[3] || // 'X'
    id[4] !== KTX2_ID[4] || // ' '
    id[5] !== KTX2_ID[5] || // '2'
    id[6] !== KTX2_ID[6] || // '0'
    id[7] !== KTX2_ID[7] || // 'ª'
    id[8] !== KTX2_ID[8] || // '\r'
    id[9] !== KTX2_ID[9] || // '\n'
    id[10] !== KTX2_ID[10] || // '\x1A'
    id[11] !== KTX2_ID[11] // '\n'
    ) {
      throw new Error('Missing KTX 2.0 identifier.');
    }

    const container = new KTX2Container(); ///////////////////////////////////////////////////
    // Header.
    ///////////////////////////////////////////////////

    const headerByteLength = 17 * Uint32Array.BYTES_PER_ELEMENT;
    const headerReader = new BufferReader(data, KTX2_ID.length, headerByteLength, true);
    container.vkFormat = headerReader._nextUint32();
    container.typeSize = headerReader._nextUint32();
    container.pixelWidth = headerReader._nextUint32();
    container.pixelHeight = headerReader._nextUint32();
    container.pixelDepth = headerReader._nextUint32();
    container.layerCount = headerReader._nextUint32();
    container.faceCount = headerReader._nextUint32();

    const levelCount = headerReader._nextUint32();

    container.supercompressionScheme = headerReader._nextUint32();

    const dfdByteOffset = headerReader._nextUint32();

    const dfdByteLength = headerReader._nextUint32();

    const kvdByteOffset = headerReader._nextUint32();

    const kvdByteLength = headerReader._nextUint32();

    const sgdByteOffset = headerReader._nextUint64();

    const sgdByteLength = headerReader._nextUint64(); ///////////////////////////////////////////////////
    // Level Index.
    ///////////////////////////////////////////////////


    const levelByteLength = levelCount * 3 * 8;
    const levelReader = new BufferReader(data, KTX2_ID.length + headerByteLength, levelByteLength, true);

    for (let i = 0; i < levelCount; i++) {
      container.levels.push({
        levelData: new Uint8Array(data.buffer, data.byteOffset + levelReader._nextUint64(), levelReader._nextUint64()),
        uncompressedByteLength: levelReader._nextUint64()
      });
    } ///////////////////////////////////////////////////
    // Data Format Descriptor (DFD).
    ///////////////////////////////////////////////////


    const dfdReader = new BufferReader(data, dfdByteOffset, dfdByteLength, true);
    const dfd = {
      vendorId: dfdReader._skip(4
      /* totalSize */
      )._nextUint16(),
      descriptorType: dfdReader._nextUint16(),
      versionNumber: dfdReader._nextUint16(),
      descriptorBlockSize: dfdReader._nextUint16(),
      colorModel: dfdReader._nextUint8(),
      colorPrimaries: dfdReader._nextUint8(),
      transferFunction: dfdReader._nextUint8(),
      flags: dfdReader._nextUint8(),
      texelBlockDimension: [dfdReader._nextUint8(), dfdReader._nextUint8(), dfdReader._nextUint8(), dfdReader._nextUint8()],
      bytesPlane: [dfdReader._nextUint8(), dfdReader._nextUint8(), dfdReader._nextUint8(), dfdReader._nextUint8(), dfdReader._nextUint8(), dfdReader._nextUint8(), dfdReader._nextUint8(), dfdReader._nextUint8()],
      samples: []
    };
    const sampleStart = 6;
    const sampleWords = 4;
    const numSamples = (dfd.descriptorBlockSize / 4 - sampleStart) / sampleWords;

    for (let i = 0; i < numSamples; i++) {
      const sample = {
        bitOffset: dfdReader._nextUint16(),
        bitLength: dfdReader._nextUint8(),
        channelType: dfdReader._nextUint8(),
        samplePosition: [dfdReader._nextUint8(), dfdReader._nextUint8(), dfdReader._nextUint8(), dfdReader._nextUint8()],
        sampleLower: -Infinity,
        sampleUpper: Infinity
      };

      if (sample.channelType & KHR_DF_SAMPLE_DATATYPE_SIGNED) {
        sample.sampleLower = dfdReader._nextInt32();
        sample.sampleUpper = dfdReader._nextInt32();
      } else {
        sample.sampleLower = dfdReader._nextUint32();
        sample.sampleUpper = dfdReader._nextUint32();
      }

      dfd.samples[i] = sample;
    }

    container.dataFormatDescriptor.length = 0;
    container.dataFormatDescriptor.push(dfd); ///////////////////////////////////////////////////
    // Key/Value Data (KVD).
    ///////////////////////////////////////////////////

    const kvdReader = new BufferReader(data, kvdByteOffset, kvdByteLength, true);

    while (kvdReader._offset < kvdByteLength) {
      const keyValueByteLength = kvdReader._nextUint32();

      const keyData = kvdReader._scan(keyValueByteLength);

      const key = decodeText(keyData);

      const valueData = kvdReader._scan(keyValueByteLength - keyData.byteLength);

      container.keyValue[key] = key.match(/^ktx/i) ? decodeText(valueData) : valueData; // 4-byte alignment.

      if (kvdReader._offset % 4) kvdReader._skip(4 - kvdReader._offset % 4);
    } ///////////////////////////////////////////////////
    // Supercompression Global Data (SGD).
    ///////////////////////////////////////////////////


    if (sgdByteLength <= 0) return container;
    const sgdReader = new BufferReader(data, sgdByteOffset, sgdByteLength, true);

    const endpointCount = sgdReader._nextUint16();

    const selectorCount = sgdReader._nextUint16();

    const endpointsByteLength = sgdReader._nextUint32();

    const selectorsByteLength = sgdReader._nextUint32();

    const tablesByteLength = sgdReader._nextUint32();

    const extendedByteLength = sgdReader._nextUint32();

    const imageDescs = [];

    for (let i = 0; i < levelCount; i++) {
      imageDescs.push({
        imageFlags: sgdReader._nextUint32(),
        rgbSliceByteOffset: sgdReader._nextUint32(),
        rgbSliceByteLength: sgdReader._nextUint32(),
        alphaSliceByteOffset: sgdReader._nextUint32(),
        alphaSliceByteLength: sgdReader._nextUint32()
      });
    }

    const endpointsByteOffset = sgdByteOffset + sgdReader._offset;
    const selectorsByteOffset = endpointsByteOffset + endpointsByteLength;
    const tablesByteOffset = selectorsByteOffset + selectorsByteLength;
    const extendedByteOffset = tablesByteOffset + tablesByteLength;
    const endpointsData = new Uint8Array(data.buffer, data.byteOffset + endpointsByteOffset, endpointsByteLength);
    const selectorsData = new Uint8Array(data.buffer, data.byteOffset + selectorsByteOffset, selectorsByteLength);
    const tablesData = new Uint8Array(data.buffer, data.byteOffset + tablesByteOffset, tablesByteLength);
    const extendedData = new Uint8Array(data.buffer, data.byteOffset + extendedByteOffset, extendedByteLength);
    container.globalData = {
      endpointCount,
      selectorCount,
      imageDescs,
      endpointsData,
      selectorsData,
      tablesData,
      extendedData
    };
    return container;
  }

  /* global require */

  const faceOrder = [
    "positiveX",
    "negativeX",
    "positiveY",
    "negativeY",
    "positiveZ",
    "negativeZ",
  ];

  // Flags
  const colorModelETC1S = 163;
  const colorModelUASTC = 166;

  let transcoderModule;
  function transcode(parameters, transferableObjects) {
    //>>includeStart('debug', pragmas.debug);
    Check.Check.typeOf.object("transcoderModule", transcoderModule);
    //>>includeEnd('debug');

    const data = parameters.ktx2Buffer;
    const supportedTargetFormats = parameters.supportedTargetFormats;
    let header;
    try {
      header = read(data);
    } catch (e) {
      throw new RuntimeError.RuntimeError("Invalid KTX2 file.");
    }

    if (header.layerCount !== 0) {
      throw new RuntimeError.RuntimeError("KTX2 texture arrays are not supported.");
    }

    if (header.pixelDepth !== 0) {
      throw new RuntimeError.RuntimeError("KTX2 3D textures are unsupported.");
    }

    const dfd = header.dataFormatDescriptor[0];
    const result = new Array(header.levelCount);

    if (
      header.vkFormat === 0x0 &&
      (dfd.colorModel === colorModelETC1S || dfd.colorModel === colorModelUASTC)
    ) {
      // Compressed, initialize transcoder module
      transcodeCompressed(
        data,
        header,
        supportedTargetFormats,
        transcoderModule,
        transferableObjects,
        result
      );
    } else {
      transferableObjects.push(data.buffer);
      parseUncompressed(header, result);
    }

    return result;
  }

  // Parser for uncompressed
  function parseUncompressed(header, result) {
    const internalFormat =
      header.vkFormat === VulkanConstants$1.VK_FORMAT_R8G8B8_SRGB
        ? PixelFormat$1.RGB
        : PixelFormat$1.RGBA;
    let datatype;
    if (header.vkFormat === VulkanConstants$1.VK_FORMAT_R8G8B8A8_UNORM) {
      datatype = PixelDatatype$1.UNSIGNED_BYTE;
    } else if (
      header.vkFormat === VulkanConstants$1.VK_FORMAT_R16G16B16A16_SFLOAT
    ) {
      datatype = PixelDatatype$1.HALF_FLOAT;
    } else if (
      header.vkFormat === VulkanConstants$1.VK_FORMAT_R32G32B32A32_SFLOAT
    ) {
      datatype = PixelDatatype$1.FLOAT;
    }

    for (let i = 0; i < header.levels.length; ++i) {
      const level = {};
      result[i] = level;
      const levelBuffer = header.levels[i].levelData;

      const width = header.pixelWidth >> i;
      const height = header.pixelHeight >> i;
      const faceLength =
        width * height * PixelFormat$1.componentsLength(internalFormat);

      for (let j = 0; j < header.faceCount; ++j) {
        // multiply levelBuffer.byteOffset by the size in bytes of the pixel data type
        const faceByteOffset =
          levelBuffer.byteOffset + faceLength * header.typeSize * j;
        let faceView;
        if (!defaultValue.defined(datatype) || PixelDatatype$1.sizeInBytes(datatype) === 1) {
          faceView = new Uint8Array(
            levelBuffer.buffer,
            faceByteOffset,
            faceLength
          );
        } else if (PixelDatatype$1.sizeInBytes(datatype) === 2) {
          faceView = new Uint16Array(
            levelBuffer.buffer,
            faceByteOffset,
            faceLength
          );
        } else {
          faceView = new Float32Array(
            levelBuffer.buffer,
            faceByteOffset,
            faceLength
          );
        }

        level[faceOrder[j]] = {
          internalFormat: internalFormat,
          datatype: datatype,
          width: width,
          height: height,
          levelBuffer: faceView,
        };
      }
    }
  }

  function transcodeCompressed(
    data,
    header,
    supportedTargetFormats,
    transcoderModule,
    transferableObjects,
    result
  ) {
    const ktx2File = new transcoderModule.KTX2File(data);
    let width = ktx2File.getWidth();
    let height = ktx2File.getHeight();
    const levels = ktx2File.getLevels();
    const hasAlpha = ktx2File.getHasAlpha();

    if (!(width > 0) || !(height > 0) || !(levels > 0)) {
      ktx2File.close();
      ktx2File.delete();
      throw new RuntimeError.RuntimeError("Invalid KTX2 file");
    }

    let internalFormat, transcoderFormat;
    const dfd = header.dataFormatDescriptor[0];
    const BasisFormat = transcoderModule.transcoder_texture_format;

    // Determine target format based on platform support
    if (dfd.colorModel === colorModelETC1S) {
      if (supportedTargetFormats.etc) {
        internalFormat = hasAlpha
          ? PixelFormat$1.RGBA8_ETC2_EAC
          : PixelFormat$1.RGB8_ETC2;
        transcoderFormat = hasAlpha
          ? BasisFormat.cTFETC2_RGBA
          : BasisFormat.cTFETC1_RGB;
      } else if (supportedTargetFormats.etc1 && !hasAlpha) {
        internalFormat = PixelFormat$1.RGB_ETC1;
        transcoderFormat = BasisFormat.cTFETC1_RGB;
      } else if (supportedTargetFormats.s3tc) {
        internalFormat = hasAlpha ? PixelFormat$1.RGBA_DXT5 : PixelFormat$1.RGB_DXT1;
        transcoderFormat = hasAlpha
          ? BasisFormat.cTFBC3_RGBA
          : BasisFormat.cTFBC1_RGB;
      } else if (supportedTargetFormats.pvrtc) {
        internalFormat = hasAlpha
          ? PixelFormat$1.RGBA_PVRTC_4BPPV1
          : PixelFormat$1.RGB_PVRTC_4BPPV1;
        transcoderFormat = hasAlpha
          ? BasisFormat.cTFPVRTC1_4_RGBA
          : BasisFormat.cTFPVRTC1_4_RGB;
      } else if (supportedTargetFormats.astc) {
        internalFormat = PixelFormat$1.RGBA_ASTC;
        transcoderFormat = BasisFormat.cTFASTC_4x4_RGBA;
      } else if (supportedTargetFormats.bc7) {
        internalFormat = PixelFormat$1.RGBA_BC7;
        transcoderFormat = BasisFormat.cTFBC7_RGBA;
      } else {
        throw new RuntimeError.RuntimeError(
          "No transcoding format target available for ETC1S compressed ktx2."
        );
      }
    } else if (dfd.colorModel === colorModelUASTC) {
      if (supportedTargetFormats.astc) {
        internalFormat = PixelFormat$1.RGBA_ASTC;
        transcoderFormat = BasisFormat.cTFASTC_4x4_RGBA;
      } else if (supportedTargetFormats.bc7) {
        internalFormat = PixelFormat$1.RGBA_BC7;
        transcoderFormat = BasisFormat.cTFBC7_RGBA;
      } else if (supportedTargetFormats.s3tc) {
        internalFormat = hasAlpha ? PixelFormat$1.RGBA_DXT5 : PixelFormat$1.RGB_DXT1;
        transcoderFormat = hasAlpha
          ? BasisFormat.cTFBC3_RGBA
          : BasisFormat.cTFBC1_RGB;
      } else if (supportedTargetFormats.etc) {
        internalFormat = hasAlpha
          ? PixelFormat$1.RGBA8_ETC2_EAC
          : PixelFormat$1.RGB8_ETC2;
        transcoderFormat = hasAlpha
          ? BasisFormat.cTFETC2_RGBA
          : BasisFormat.cTFETC1_RGB;
      } else if (supportedTargetFormats.etc1 && !hasAlpha) {
        internalFormat = PixelFormat$1.RGB_ETC1;
        transcoderFormat = BasisFormat.cTFETC1_RGB;
      } else if (supportedTargetFormats.pvrtc) {
        internalFormat = hasAlpha
          ? PixelFormat$1.RGBA_PVRTC_4BPPV1
          : PixelFormat$1.RGB_PVRTC_4BPPV1;
        transcoderFormat = hasAlpha
          ? BasisFormat.cTFPVRTC1_4_RGBA
          : BasisFormat.cTFPVRTC1_4_RGB;
      } else {
        throw new RuntimeError.RuntimeError(
          "No transcoding format target available for UASTC compressed ktx2."
        );
      }
    }

    if (!ktx2File.startTranscoding()) {
      ktx2File.close();
      ktx2File.delete();
      throw new RuntimeError.RuntimeError("startTranscoding() failed");
    }

    for (let i = 0; i < header.levels.length; ++i) {
      const level = {};
      result[i] = level;
      width = header.pixelWidth >> i;
      height = header.pixelHeight >> i;

      // Since supercompressed cubemaps are unsupported, this function
      // does not iterate over KTX2 faces and assumes faceCount = 1.

      const dstSize = ktx2File.getImageTranscodedSizeInBytes(
        i, // level index
        0, // layer index
        0, // face index
        transcoderFormat.value
      );
      const dst = new Uint8Array(dstSize);

      const transcoded = ktx2File.transcodeImage(
        dst,
        i, // level index
        0, // layer index
        0, // face index
        transcoderFormat.value,
        0, // get_alpha_for_opaque_formats
        -1, // channel0
        -1 // channel1
      );

      if (!defaultValue.defined(transcoded)) {
        throw new RuntimeError.RuntimeError("transcodeImage() failed.");
      }

      transferableObjects.push(dst.buffer);

      level[faceOrder[0]] = {
        internalFormat: internalFormat,
        width: width,
        height: height,
        levelBuffer: dst,
      };
    }

    ktx2File.close();
    ktx2File.delete();
    return result;
  }

  function initWorker(compiledModule) {
    transcoderModule = compiledModule;
    transcoderModule.initializeBasis();

    self.onmessage = createTaskProcessorWorker(transcode);
    self.postMessage(true);
  }

  function transcodeKTX2(event) {
    const data = event.data;

    // Expect the first message to be to load a web assembly module
    const wasmConfig = data.webAssemblyConfig;
    if (defaultValue.defined(wasmConfig)) {
      // Require and compile WebAssembly module, or use fallback if not supported
      return require([wasmConfig.modulePath], function (mscBasisTranscoder) {
        if (defaultValue.defined(wasmConfig.wasmBinaryFile)) {
          if (!defaultValue.defined(mscBasisTranscoder)) {
            mscBasisTranscoder = self.MSC_TRANSCODER;
          }

          mscBasisTranscoder(wasmConfig).then(function (compiledModule) {
            initWorker(compiledModule);
          });
        } else {
          return mscBasisTranscoder().then(function (transcoder) {
            initWorker(transcoder);
          });
        }
      });
    }
  }

  return transcodeKTX2;

}));
