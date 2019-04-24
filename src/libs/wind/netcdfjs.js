/**
 * netcdfjs - Read and explore NetCDF files
 * @version v0.7.0
 * @link https://github.com/cheminfo-js/netcdfjs
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["netcdfjs"] = factory();
	else
		root["netcdfjs"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Throws a non-valid NetCDF exception if the statement it's true
 * @ignore
 * @param {boolean} statement - Throws if true
 * @param {string} reason - Reason to throw
 */

function notNetcdf(statement, reason) {
  if (statement) {
    throw new TypeError(`Not a valid NetCDF v3.x file: ${reason}`);
  }
}
/**
 * Moves 1, 2, or 3 bytes to next 4-byte boundary
 * @ignore
 * @param {IOBuffer} buffer - Buffer for the file data
 */


function padding(buffer) {
  if (buffer.offset % 4 !== 0) {
    buffer.skip(4 - buffer.offset % 4);
  }
}
/**
 * Reads the name
 * @ignore
 * @param {IOBuffer} buffer - Buffer for the file data
 * @return {string} - Name
 */


function readName(buffer) {
  // Read name
  var nameLength = buffer.readUint32();
  var name = buffer.readChars(nameLength); // validate name
  // TODO
  // Apply padding

  padding(buffer);
  return name;
}

module.exports.notNetcdf = notNetcdf;
module.exports.padding = padding;
module.exports.readName = readName;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const notNetcdf = __webpack_require__(0).notNetcdf;

const types = {
  BYTE: 1,
  CHAR: 2,
  SHORT: 3,
  INT: 4,
  FLOAT: 5,
  DOUBLE: 6
};
/**
 * Parse a number into their respective type
 * @ignore
 * @param {number} type - integer that represents the type
 * @return {string} - parsed value of the type
 */

function num2str(type) {
  switch (Number(type)) {
    case types.BYTE:
      return 'byte';

    case types.CHAR:
      return 'char';

    case types.SHORT:
      return 'short';

    case types.INT:
      return 'int';

    case types.FLOAT:
      return 'float';

    case types.DOUBLE:
      return 'double';

    /* istanbul ignore next */

    default:
      return 'undefined';
  }
}
/**
 * Parse a number type identifier to his size in bytes
 * @ignore
 * @param {number} type - integer that represents the type
 * @return {number} -size of the type
 */


function num2bytes(type) {
  switch (Number(type)) {
    case types.BYTE:
      return 1;

    case types.CHAR:
      return 1;

    case types.SHORT:
      return 2;

    case types.INT:
      return 4;

    case types.FLOAT:
      return 4;

    case types.DOUBLE:
      return 8;

    /* istanbul ignore next */

    default:
      return -1;
  }
}
/**
 * Reverse search of num2str
 * @ignore
 * @param {string} type - string that represents the type
 * @return {number} - parsed value of the type
 */


function str2num(type) {
  switch (String(type)) {
    case 'byte':
      return types.BYTE;

    case 'char':
      return types.CHAR;

    case 'short':
      return types.SHORT;

    case 'int':
      return types.INT;

    case 'float':
      return types.FLOAT;

    case 'double':
      return types.DOUBLE;

    /* istanbul ignore next */

    default:
      return -1;
  }
}
/**
 * Auxiliary function to read numeric data
 * @ignore
 * @param {number} size - Size of the element to read
 * @param {function} bufferReader - Function to read next value
 * @return {Array<number>|number}
 */


function readNumber(size, bufferReader) {
  if (size !== 1) {
    var numbers = new Array(size);

    for (var i = 0; i < size; i++) {
      numbers[i] = bufferReader();
    }

    return numbers;
  } else {
    return bufferReader();
  }
}
/**
 * Given a type and a size reads the next element
 * @ignore
 * @param {IOBuffer} buffer - Buffer for the file data
 * @param {number} type - Type of the data to read
 * @param {number} size - Size of the element to read
 * @return {string|Array<number>|number}
 */


function readType(buffer, type, size) {
  switch (type) {
    case types.BYTE:
      return buffer.readBytes(size);

    case types.CHAR:
      return trimNull(buffer.readChars(size));

    case types.SHORT:
      return readNumber(size, buffer.readInt16.bind(buffer));

    case types.INT:
      return readNumber(size, buffer.readInt32.bind(buffer));

    case types.FLOAT:
      return readNumber(size, buffer.readFloat32.bind(buffer));

    case types.DOUBLE:
      return readNumber(size, buffer.readFloat64.bind(buffer));

    /* istanbul ignore next */

    default:
      notNetcdf(true, `non valid type ${type}`);
      return undefined;
  }
}
/**
 * Removes null terminate value
 * @ignore
 * @param {string} value - String to trim
 * @return {string} - Trimmed string
 */


function trimNull(value) {
  if (value.charCodeAt(value.length - 1) === 0) {
    return value.substring(0, value.length - 1);
  }

  return value;
}

module.exports = types;
module.exports.num2str = num2str;
module.exports.num2bytes = num2bytes;
module.exports.str2num = str2num;
module.exports.readType = readType;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const IOBuffer = __webpack_require__(4);

const utils = __webpack_require__(0);

const data = __webpack_require__(11);

const readHeader = __webpack_require__(12);

const toString = __webpack_require__(13);
/**
 * Reads a NetCDF v3.x file
 * https://www.unidata.ucar.edu/software/netcdf/docs/file_format_specifications.html
 * @param {ArrayBuffer} data - ArrayBuffer or any Typed Array (including Node.js' Buffer from v4) with the data
 * @constructor
 */


class NetCDFReader {
  constructor(data) {
    const buffer = new IOBuffer(data);
    buffer.setBigEndian(); // Validate that it's a NetCDF file

    utils.notNetcdf(buffer.readChars(3) !== 'CDF', 'should start with CDF'); // Check the NetCDF format

    const version = buffer.readByte();
    utils.notNetcdf(version > 2, 'unknown version'); // Read the header

    this.header = readHeader(buffer, version);
    this.buffer = buffer;
  }
  /**
   * @return {string} - Version for the NetCDF format
   */


  get version() {
    if (this.header.version === 1) {
      return 'classic format';
    } else {
      return '64-bit offset format';
    }
  }
  /**
   * @return {object} - Metadata for the record dimension
   *  * `length`: Number of elements in the record dimension
   *  * `id`: Id number in the list of dimensions for the record dimension
   *  * `name`: String with the name of the record dimension
   *  * `recordStep`: Number with the record variables step size
   */


  get recordDimension() {
    return this.header.recordDimension;
  }
  /**
   * @return {Array<object>} - List of dimensions with:
   *  * `name`: String with the name of the dimension
   *  * `size`: Number with the size of the dimension
   */


  get dimensions() {
    return this.header.dimensions;
  }
  /**
   * @return {Array<object>} - List of global attributes with:
   *  * `name`: String with the name of the attribute
   *  * `type`: String with the type of the attribute
   *  * `value`: A number or string with the value of the attribute
   */


  get globalAttributes() {
    return this.header.globalAttributes;
  }
  /**
   * Returns the value of an attribute
   * @param {string} attributeName
   * @return {string} Value of the attributeName or undefined
   */


  getAttribute(attributeName) {
    let attribute = this.globalAttributes.find(val => val.name === attributeName);
    if (attribute) return attribute.value.trim();
    return undefined;
  }
  /**
   * Returns the value of a variable as a string
   * @param {string} variableName
   * @return {string} Value of the variable as a string or undefined
   */


  getDataVariableAsString(variableName) {
    try {
      return this.getDataVariable(variableName).join('').trim();
    } catch (e) {
      return undefined;
    }
  }
  /**
   * @return {Array<object>} - List of variables with:
   *  * `name`: String with the name of the variable
   *  * `dimensions`: Array with the dimension IDs of the variable
   *  * `attributes`: Array with the attributes of the variable
   *  * `type`: String with the type of the variable
   *  * `size`: Number with the size of the variable
   *  * `offset`: Number with the offset where of the variable begins
   *  * `record`: True if is a record variable, false otherwise
   */


  get variables() {
    return this.header.variables;
  }

  toString() {
    return toString.call(this);
  }
  /**
   * Retrieves the data for a given variable
   * @param {string|object} variableName - Name of the variable to search or variable object
   * @return {Array} - List with the variable values
   */


  getDataVariable(variableName) {
    var variable;

    if (typeof variableName === 'string') {
      // search the variable
      variable = this.header.variables.find(function (val) {
        return val.name === variableName;
      });
    } else {
      variable = variableName;
    } // throws if variable not found


    utils.notNetcdf(variable === undefined, `variable not found: ${variableName}`); // go to the offset position

    this.buffer.seek(variable.offset);

    if (variable.record) {
      // record variable case
      return data.record(this.buffer, variable, this.header.recordDimension);
    } else {
      // non-record variable case
      return data.nonRecord(this.buffer, variable);
    }
  }
  /**
   * Check if a dataVariable exists
   * @param {string} variableName - Name of the variable to find
   * @return {boolean}
   */


  dataVariableExists(variableName) {
    let variable = this.header.variables.find(function (val) {
      return val.name === variableName;
    });
    return variable !== undefined;
  }
  /**
   * Check if an attribute exists
   * @param {string} attributeName - Name of the attribute to find
   * @return {boolean}
   */


  attributeExists(attributeName) {
    let attribute = this.globalAttributes.find(val => val.name === attributeName);
    return attribute !== undefined;
  }

}

module.exports = NetCDFReader;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

const utf8 = __webpack_require__(9);

const defaultByteLength = 1024 * 8;
const charArray = [];
/**
 * IOBuffer
 * @constructor
 * @param {undefined|number|ArrayBuffer|TypedArray|IOBuffer|Buffer} data - The data to construct the IOBuffer with.
 *
 * If it's a number, it will initialize the buffer with the number as the buffer's length<br>
 * If it's undefined, it will initialize the buffer with a default length of 8 Kb<br>
 * If its an ArrayBuffer, a TypedArray, an IOBuffer instance,
 * or a Node.js Buffer, it will create a view over the underlying ArrayBuffer.
 * @param {object} [options]
 * @param {number} [options.offset=0] - Ignore the first n bytes of the ArrayBuffer
 * @property {ArrayBuffer} buffer - Reference to the internal ArrayBuffer object
 * @property {number} length - Byte length of the internal ArrayBuffer
 * @property {number} offset - The current offset of the buffer's pointer
 * @property {number} byteLength - Byte length of the internal ArrayBuffer
 * @property {number} byteOffset - Byte offset of the internal ArrayBuffer
 */

class IOBuffer {
  constructor(data, options) {
    options = options || {};
    var dataIsGiven = false;

    if (data === undefined) {
      data = defaultByteLength;
    }

    if (typeof data === 'number') {
      data = new ArrayBuffer(data);
    } else {
      dataIsGiven = true;
      this._lastWrittenByte = data.byteLength;
    }

    const offset = options.offset ? options.offset >>> 0 : 0;
    let byteLength = data.byteLength - offset;
    let dvOffset = offset;

    if (data.buffer) {
      if (data.byteLength !== data.buffer.byteLength) {
        dvOffset = data.byteOffset + offset;
      }

      data = data.buffer;
    }

    if (dataIsGiven) {
      this._lastWrittenByte = byteLength;
    } else {
      this._lastWrittenByte = 0;
    }

    this.buffer = data;
    this.length = byteLength;
    this.byteLength = byteLength;
    this.byteOffset = dvOffset;
    this.offset = 0;
    this.littleEndian = true;
    this._data = new DataView(this.buffer, dvOffset, byteLength);
    this._mark = 0;
    this._marks = [];
  }
  /**
   * Checks if the memory allocated to the buffer is sufficient to store more bytes after the offset
   * @param {number} [byteLength=1] The needed memory in bytes
   * @return {boolean} Returns true if there is sufficient space and false otherwise
   */


  available(byteLength) {
    if (byteLength === undefined) byteLength = 1;
    return this.offset + byteLength <= this.length;
  }
  /**
   * Check if little-endian mode is used for reading and writing multi-byte values
   * @return {boolean} Returns true if little-endian mode is used, false otherwise
   */


  isLittleEndian() {
    return this.littleEndian;
  }
  /**
   * Set little-endian mode for reading and writing multi-byte values
   * @return {IOBuffer}
   */


  setLittleEndian() {
    this.littleEndian = true;
    return this;
  }
  /**
   * Check if big-endian mode is used for reading and writing multi-byte values
   * @return {boolean} Returns true if big-endian mode is used, false otherwise
   */


  isBigEndian() {
    return !this.littleEndian;
  }
  /**
   * Switches to big-endian mode for reading and writing multi-byte values
   * @return {IOBuffer}
   */


  setBigEndian() {
    this.littleEndian = false;
    return this;
  }
  /**
   * Move the pointer n bytes forward
   * @param {number} n
   * @return {IOBuffer}
   */


  skip(n) {
    if (n === undefined) n = 1;
    this.offset += n;
    return this;
  }
  /**
   * Move the pointer to the given offset
   * @param {number} offset
   * @return {IOBuffer}
   */


  seek(offset) {
    this.offset = offset;
    return this;
  }
  /**
   * Store the current pointer offset.
   * @see {@link IOBuffer#reset}
   * @return {IOBuffer}
   */


  mark() {
    this._mark = this.offset;
    return this;
  }
  /**
   * Move the pointer back to the last pointer offset set by mark
   * @see {@link IOBuffer#mark}
   * @return {IOBuffer}
   */


  reset() {
    this.offset = this._mark;
    return this;
  }
  /**
   * Push the current pointer offset to the mark stack
   * @see {@link IOBuffer#popMark}
   * @return {IOBuffer}
   */


  pushMark() {
    this._marks.push(this.offset);

    return this;
  }
  /**
   * Pop the last pointer offset from the mark stack, and set the current pointer offset to the popped value
   * @see {@link IOBuffer#pushMark}
   * @return {IOBuffer}
   */


  popMark() {
    const offset = this._marks.pop();

    if (offset === undefined) throw new Error('Mark stack empty');
    this.seek(offset);
    return this;
  }
  /**
   * Move the pointer offset back to 0
   * @return {IOBuffer}
   */


  rewind() {
    this.offset = 0;
    return this;
  }
  /**
   * Make sure the buffer has sufficient memory to write a given byteLength at the current pointer offset
   * If the buffer's memory is insufficient, this method will create a new buffer (a copy) with a length
   * that is twice (byteLength + current offset)
   * @param {number} [byteLength = 1]
   * @return {IOBuffer}
   */


  ensureAvailable(byteLength) {
    if (byteLength === undefined) byteLength = 1;

    if (!this.available(byteLength)) {
      const lengthNeeded = this.offset + byteLength;
      const newLength = lengthNeeded * 2;
      const newArray = new Uint8Array(newLength);
      newArray.set(new Uint8Array(this.buffer));
      this.buffer = newArray.buffer;
      this.length = this.byteLength = newLength;
      this._data = new DataView(this.buffer);
    }

    return this;
  }
  /**
   * Read a byte and return false if the byte's value is 0, or true otherwise
   * Moves pointer forward
   * @return {boolean}
   */


  readBoolean() {
    return this.readUint8() !== 0;
  }
  /**
   * Read a signed 8-bit integer and move pointer forward
   * @return {number}
   */


  readInt8() {
    return this._data.getInt8(this.offset++);
  }
  /**
   * Read an unsigned 8-bit integer and move pointer forward
   * @return {number}
   */


  readUint8() {
    return this._data.getUint8(this.offset++);
  }
  /**
   * Alias for {@link IOBuffer#readUint8}
   * @return {number}
   */


  readByte() {
    return this.readUint8();
  }
  /**
   * Read n bytes and move pointer forward.
   * @param {number} n
   * @return {Uint8Array}
   */


  readBytes(n) {
    if (n === undefined) n = 1;
    var bytes = new Uint8Array(n);

    for (var i = 0; i < n; i++) {
      bytes[i] = this.readByte();
    }

    return bytes;
  }
  /**
   * Read a 16-bit signed integer and move pointer forward
   * @return {number}
   */


  readInt16() {
    var value = this._data.getInt16(this.offset, this.littleEndian);

    this.offset += 2;
    return value;
  }
  /**
   * Read a 16-bit unsigned integer and move pointer forward
   * @return {number}
   */


  readUint16() {
    var value = this._data.getUint16(this.offset, this.littleEndian);

    this.offset += 2;
    return value;
  }
  /**
   * Read a 32-bit signed integer and move pointer forward
   * @return {number}
   */


  readInt32() {
    var value = this._data.getInt32(this.offset, this.littleEndian);

    this.offset += 4;
    return value;
  }
  /**
   * Read a 32-bit unsigned integer and move pointer forward
   * @return {number}
   */


  readUint32() {
    var value = this._data.getUint32(this.offset, this.littleEndian);

    this.offset += 4;
    return value;
  }
  /**
   * Read a 32-bit floating number and move pointer forward
   * @return {number}
   */


  readFloat32() {
    var value = this._data.getFloat32(this.offset, this.littleEndian);

    this.offset += 4;
    return value;
  }
  /**
   * Read a 64-bit floating number and move pointer forward
   * @return {number}
   */


  readFloat64() {
    var value = this._data.getFloat64(this.offset, this.littleEndian);

    this.offset += 8;
    return value;
  }
  /**
   * Read 1-byte ascii character and move pointer forward
   * @return {string}
   */


  readChar() {
    return String.fromCharCode(this.readInt8());
  }
  /**
   * Read n 1-byte ascii characters and move pointer forward
   * @param {number} n
   * @return {string}
   */


  readChars(n) {
    if (n === undefined) n = 1;
    charArray.length = n;

    for (var i = 0; i < n; i++) {
      charArray[i] = this.readChar();
    }

    return charArray.join('');
  }
  /**
   * Read the next n bytes, return a UTF-8 decoded string and move pointer forward
   * @param {number} n
   * @return {string}
   */


  readUtf8(n) {
    if (n === undefined) n = 1;
    const bString = this.readChars(n);
    return utf8.decode(bString);
  }
  /**
   * Write 0xff if the passed value is truthy, 0x00 otherwise
   * @param {any} value
   * @return {IOBuffer}
   */


  writeBoolean(value) {
    this.writeUint8(value ? 0xff : 0x00);
    return this;
  }
  /**
   * Write value as an 8-bit signed integer
   * @param {number} value
   * @return {IOBuffer}
   */


  writeInt8(value) {
    this.ensureAvailable(1);

    this._data.setInt8(this.offset++, value);

    this._updateLastWrittenByte();

    return this;
  }
  /**
   * Write value as a 8-bit unsigned integer
   * @param {number} value
   * @return {IOBuffer}
   */


  writeUint8(value) {
    this.ensureAvailable(1);

    this._data.setUint8(this.offset++, value);

    this._updateLastWrittenByte();

    return this;
  }
  /**
   * An alias for {@link IOBuffer#writeUint8}
   * @param {number} value
   * @return {IOBuffer}
   */


  writeByte(value) {
    return this.writeUint8(value);
  }
  /**
   * Write bytes
   * @param {Array|Uint8Array} bytes
   * @return {IOBuffer}
   */


  writeBytes(bytes) {
    this.ensureAvailable(bytes.length);

    for (var i = 0; i < bytes.length; i++) {
      this._data.setUint8(this.offset++, bytes[i]);
    }

    this._updateLastWrittenByte();

    return this;
  }
  /**
   * Write value as an 16-bit signed integer
   * @param {number} value
   * @return {IOBuffer}
   */


  writeInt16(value) {
    this.ensureAvailable(2);

    this._data.setInt16(this.offset, value, this.littleEndian);

    this.offset += 2;

    this._updateLastWrittenByte();

    return this;
  }
  /**
   * Write value as a 16-bit unsigned integer
   * @param {number} value
   * @return {IOBuffer}
   */


  writeUint16(value) {
    this.ensureAvailable(2);

    this._data.setUint16(this.offset, value, this.littleEndian);

    this.offset += 2;

    this._updateLastWrittenByte();

    return this;
  }
  /**
   * Write a 32-bit signed integer at the current pointer offset
   * @param {number} value
   * @return {IOBuffer}
   */


  writeInt32(value) {
    this.ensureAvailable(4);

    this._data.setInt32(this.offset, value, this.littleEndian);

    this.offset += 4;

    this._updateLastWrittenByte();

    return this;
  }
  /**
   * Write a 32-bit unsigned integer at the current pointer offset
   * @param {number} value - The value to set
   * @return {IOBuffer}
   */


  writeUint32(value) {
    this.ensureAvailable(4);

    this._data.setUint32(this.offset, value, this.littleEndian);

    this.offset += 4;

    this._updateLastWrittenByte();

    return this;
  }
  /**
   * Write a 32-bit floating number at the current pointer offset
   * @param {number} value - The value to set
   * @return {IOBuffer}
   */


  writeFloat32(value) {
    this.ensureAvailable(4);

    this._data.setFloat32(this.offset, value, this.littleEndian);

    this.offset += 4;

    this._updateLastWrittenByte();

    return this;
  }
  /**
   * Write a 64-bit floating number at the current pointer offset
   * @param {number} value
   * @return {IOBuffer}
   */


  writeFloat64(value) {
    this.ensureAvailable(8);

    this._data.setFloat64(this.offset, value, this.littleEndian);

    this.offset += 8;

    this._updateLastWrittenByte();

    return this;
  }
  /**
   * Write the charCode of the passed string's first character to the current pointer offset
   * @param {string} str - The character to set
   * @return {IOBuffer}
   */


  writeChar(str) {
    return this.writeUint8(str.charCodeAt(0));
  }
  /**
   * Write the charCodes of the passed string's characters to the current pointer offset
   * @param {string} str
   * @return {IOBuffer}
   */


  writeChars(str) {
    for (var i = 0; i < str.length; i++) {
      this.writeUint8(str.charCodeAt(i));
    }

    return this;
  }
  /**
   * UTF-8 encode and write the passed string to the current pointer offset
   * @param {string} str
   * @return {IOBuffer}
   */


  writeUtf8(str) {
    const bString = utf8.encode(str);
    return this.writeChars(bString);
  }
  /**
   * Export a Uint8Array view of the internal buffer.
   * The view starts at the byte offset and its length
   * is calculated to stop at the last written byte or the original length.
   * @return {Uint8Array}
   */


  toArray() {
    return new Uint8Array(this.buffer, this.byteOffset, this._lastWrittenByte);
  }
  /**
   * Same as {@link IOBuffer#toArray} but returns a Buffer if possible. Otherwise returns a Uint8Array.
   * @return {Buffer|Uint8Array}
   */


  getBuffer() {
    if (typeof Buffer !== 'undefined') {
      return Buffer.from(this.toArray());
    } else {
      return this.toArray();
    }
  }
  /**
   * Update the last written byte offset
   * @private
   */


  _updateLastWrittenByte() {
    if (this.offset > this._lastWrittenByte) {
      this._lastWrittenByte = this.offset;
    }
  }

}

module.exports = IOBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5).Buffer))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

/* eslint-disable no-proto */


var base64 = __webpack_require__(6);

var ieee754 = __webpack_require__(7);

var isArray = __webpack_require__(8);

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */

Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
/*
 * Export kMaxLength after typed array support is determined.
 */

exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function foo() {
        return 42;
      }
    };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }

    that.length = length;
  }

  return that;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  } // Common case.


  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }

    return allocUnsafe(this, arg);
  }

  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation
// TODO: Legacy, not needed anymore. Remove in next major version.

Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;

  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(that, size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }

  return createBuffer(that, size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }

  return that;
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }

  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }

  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }

      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }

  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }

  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;
  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }

  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0; // Use a for loop to avoid recursion

  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;

  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }

  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;

  if (dir) {
    var foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      var found = true;

      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  } // must be an even number of digits


  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;

    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    } // legacy write(string, encoding, offset, length) - remove in v0.13

  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;

  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  var res = '';
  var i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);

    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (code < 256) {
        val = code;
      }
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // HELPER FUNCTIONS
// ================


var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
} // Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications


revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42


  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
} // base64 is 4/3 + up to two characters of the original data


function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;

  for (var i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/utf8js v2.1.2 by @mathias */
;

(function (root) {
  // Detect free variables `exports`
  var freeExports =  true && exports; // Detect free variable `module`

  var freeModule =  true && module && module.exports == freeExports && module; // Detect free variable `global`, from Node.js or Browserified code,
  // and use it as `root`

  var freeGlobal = typeof global == 'object' && global;

  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
    root = freeGlobal;
  }
  /*--------------------------------------------------------------------------*/


  var stringFromCharCode = String.fromCharCode; // Taken from https://mths.be/punycode

  function ucs2decode(string) {
    var output = [];
    var counter = 0;
    var length = string.length;
    var value;
    var extra;

    while (counter < length) {
      value = string.charCodeAt(counter++);

      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // high surrogate, and there is a next character
        extra = string.charCodeAt(counter++);

        if ((extra & 0xFC00) == 0xDC00) {
          // low surrogate
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // unmatched surrogate; only append this code unit, in case the next
          // code unit is the high surrogate of a surrogate pair
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }

    return output;
  } // Taken from https://mths.be/punycode


  function ucs2encode(array) {
    var length = array.length;
    var index = -1;
    var value;
    var output = '';

    while (++index < length) {
      value = array[index];

      if (value > 0xFFFF) {
        value -= 0x10000;
        output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
        value = 0xDC00 | value & 0x3FF;
      }

      output += stringFromCharCode(value);
    }

    return output;
  }

  function checkScalarValue(codePoint) {
    if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
      throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() + ' is not a scalar value');
    }
  }
  /*--------------------------------------------------------------------------*/


  function createByte(codePoint, shift) {
    return stringFromCharCode(codePoint >> shift & 0x3F | 0x80);
  }

  function encodeCodePoint(codePoint) {
    if ((codePoint & 0xFFFFFF80) == 0) {
      // 1-byte sequence
      return stringFromCharCode(codePoint);
    }

    var symbol = '';

    if ((codePoint & 0xFFFFF800) == 0) {
      // 2-byte sequence
      symbol = stringFromCharCode(codePoint >> 6 & 0x1F | 0xC0);
    } else if ((codePoint & 0xFFFF0000) == 0) {
      // 3-byte sequence
      checkScalarValue(codePoint);
      symbol = stringFromCharCode(codePoint >> 12 & 0x0F | 0xE0);
      symbol += createByte(codePoint, 6);
    } else if ((codePoint & 0xFFE00000) == 0) {
      // 4-byte sequence
      symbol = stringFromCharCode(codePoint >> 18 & 0x07 | 0xF0);
      symbol += createByte(codePoint, 12);
      symbol += createByte(codePoint, 6);
    }

    symbol += stringFromCharCode(codePoint & 0x3F | 0x80);
    return symbol;
  }

  function utf8encode(string) {
    var codePoints = ucs2decode(string);
    var length = codePoints.length;
    var index = -1;
    var codePoint;
    var byteString = '';

    while (++index < length) {
      codePoint = codePoints[index];
      byteString += encodeCodePoint(codePoint);
    }

    return byteString;
  }
  /*--------------------------------------------------------------------------*/


  function readContinuationByte() {
    if (byteIndex >= byteCount) {
      throw Error('Invalid byte index');
    }

    var continuationByte = byteArray[byteIndex] & 0xFF;
    byteIndex++;

    if ((continuationByte & 0xC0) == 0x80) {
      return continuationByte & 0x3F;
    } // If we end up here, it’s not a continuation byte


    throw Error('Invalid continuation byte');
  }

  function decodeSymbol() {
    var byte1;
    var byte2;
    var byte3;
    var byte4;
    var codePoint;

    if (byteIndex > byteCount) {
      throw Error('Invalid byte index');
    }

    if (byteIndex == byteCount) {
      return false;
    } // Read first byte


    byte1 = byteArray[byteIndex] & 0xFF;
    byteIndex++; // 1-byte sequence (no continuation bytes)

    if ((byte1 & 0x80) == 0) {
      return byte1;
    } // 2-byte sequence


    if ((byte1 & 0xE0) == 0xC0) {
      byte2 = readContinuationByte();
      codePoint = (byte1 & 0x1F) << 6 | byte2;

      if (codePoint >= 0x80) {
        return codePoint;
      } else {
        throw Error('Invalid continuation byte');
      }
    } // 3-byte sequence (may include unpaired surrogates)


    if ((byte1 & 0xF0) == 0xE0) {
      byte2 = readContinuationByte();
      byte3 = readContinuationByte();
      codePoint = (byte1 & 0x0F) << 12 | byte2 << 6 | byte3;

      if (codePoint >= 0x0800) {
        checkScalarValue(codePoint);
        return codePoint;
      } else {
        throw Error('Invalid continuation byte');
      }
    } // 4-byte sequence


    if ((byte1 & 0xF8) == 0xF0) {
      byte2 = readContinuationByte();
      byte3 = readContinuationByte();
      byte4 = readContinuationByte();
      codePoint = (byte1 & 0x07) << 0x12 | byte2 << 0x0C | byte3 << 0x06 | byte4;

      if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
        return codePoint;
      }
    }

    throw Error('Invalid UTF-8 detected');
  }

  var byteArray;
  var byteCount;
  var byteIndex;

  function utf8decode(byteString) {
    byteArray = ucs2decode(byteString);
    byteCount = byteArray.length;
    byteIndex = 0;
    var codePoints = [];
    var tmp;

    while ((tmp = decodeSymbol()) !== false) {
      codePoints.push(tmp);
    }

    return ucs2encode(codePoints);
  }
  /*--------------------------------------------------------------------------*/


  var utf8 = {
    'version': '2.1.2',
    'encode': utf8encode,
    'decode': utf8decode
  }; // Some AMD build optimizers, like r.js, check for specific condition patterns
  // like the following:

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return utf8;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var key, hasOwnProperty, object; }
})(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)(module), __webpack_require__(1)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const types = __webpack_require__(2); // const STREAMING = 4294967295;

/**
 * Read data for the given non-record variable
 * @ignore
 * @param {IOBuffer} buffer - Buffer for the file data
 * @param {object} variable - Variable metadata
 * @return {Array} - Data of the element
 */


function nonRecord(buffer, variable) {
  // variable type
  const type = types.str2num(variable.type); // size of the data

  var size = variable.size / types.num2bytes(type); // iterates over the data

  var data = new Array(size);

  for (var i = 0; i < size; i++) {
    data[i] = types.readType(buffer, type, 1);
  }

  return data;
}
/**
 * Read data for the given record variable
 * @ignore
 * @param {IOBuffer} buffer - Buffer for the file data
 * @param {object} variable - Variable metadata
 * @param {object} recordDimension - Record dimension metadata
 * @return {Array} - Data of the element
 */


function record(buffer, variable, recordDimension) {
  // variable type
  const type = types.str2num(variable.type);
  const width = variable.size ? variable.size / types.num2bytes(type) : 1; // size of the data
  // TODO streaming data

  var size = recordDimension.length; // iterates over the data

  var data = new Array(size);
  const step = recordDimension.recordStep;

  for (var i = 0; i < size; i++) {
    var currentOffset = buffer.offset;
    data[i] = types.readType(buffer, type, width);
    buffer.seek(currentOffset + step);
  }

  return data;
}

module.exports.nonRecord = nonRecord;
module.exports.record = record;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const utils = __webpack_require__(0);

const types = __webpack_require__(2); // Grammar constants


const ZERO = 0;
const NC_DIMENSION = 10;
const NC_VARIABLE = 11;
const NC_ATTRIBUTE = 12;
/**
 * Read the header of the file
 * @ignore
 * @param {IOBuffer} buffer - Buffer for the file data
 * @param {number} version - Version of the file
 * @return {object} - Object with the fields:
 *  * `recordDimension`: Number with the length of record dimension
 *  * `dimensions`: List of dimensions
 *  * `globalAttributes`: List of global attributes
 *  * `variables`: List of variables
 */

function header(buffer, version) {
  // Length of record dimension
  // sum of the varSize's of all the record variables.
  var header = {
    recordDimension: {
      length: buffer.readUint32()
    }
  }; // Version

  header.version = version; // List of dimensions

  var dimList = dimensionsList(buffer);
  header.recordDimension.id = dimList.recordId; // id of the unlimited dimension

  header.recordDimension.name = dimList.recordName; // name of the unlimited dimension

  header.dimensions = dimList.dimensions; // List of global attributes

  header.globalAttributes = attributesList(buffer); // List of variables

  var variables = variablesList(buffer, dimList.recordId, version);
  header.variables = variables.variables;
  header.recordDimension.recordStep = variables.recordStep;
  return header;
}

const NC_UNLIMITED = 0;
/**
 * List of dimensions
 * @ignore
 * @param {IOBuffer} buffer - Buffer for the file data
 * @return {object} - Ojbect containing the following properties:
 *  * `dimensions` that is an array of dimension object:
  *  * `name`: String with the name of the dimension
  *  * `size`: Number with the size of the dimension dimensions: dimensions
 *  * `recordId`: the id of the dimension that has unlimited size or undefined,
 *  * `recordName`: name of the dimension that has unlimited size
 */

function dimensionsList(buffer) {
  var recordId, recordName;
  const dimList = buffer.readUint32();

  if (dimList === ZERO) {
    utils.notNetcdf(buffer.readUint32() !== ZERO, 'wrong empty tag for list of dimensions');
    return [];
  } else {
    utils.notNetcdf(dimList !== NC_DIMENSION, 'wrong tag for list of dimensions'); // Length of dimensions

    const dimensionSize = buffer.readUint32();
    var dimensions = new Array(dimensionSize);

    for (var dim = 0; dim < dimensionSize; dim++) {
      // Read name
      var name = utils.readName(buffer); // Read dimension size

      const size = buffer.readUint32();

      if (size === NC_UNLIMITED) {
        // in netcdf 3 one field can be of size unlimmited
        recordId = dim;
        recordName = name;
      }

      dimensions[dim] = {
        name: name,
        size: size
      };
    }
  }

  return {
    dimensions: dimensions,
    recordId: recordId,
    recordName: recordName
  };
}
/**
 * List of attributes
 * @ignore
 * @param {IOBuffer} buffer - Buffer for the file data
 * @return {Array<object>} - List of attributes with:
 *  * `name`: String with the name of the attribute
 *  * `type`: String with the type of the attribute
 *  * `value`: A number or string with the value of the attribute
 */


function attributesList(buffer) {
  const gAttList = buffer.readUint32();

  if (gAttList === ZERO) {
    utils.notNetcdf(buffer.readUint32() !== ZERO, 'wrong empty tag for list of attributes');
    return [];
  } else {
    utils.notNetcdf(gAttList !== NC_ATTRIBUTE, 'wrong tag for list of attributes'); // Length of attributes

    const attributeSize = buffer.readUint32();
    var attributes = new Array(attributeSize);

    for (var gAtt = 0; gAtt < attributeSize; gAtt++) {
      // Read name
      var name = utils.readName(buffer); // Read type

      var type = buffer.readUint32();
      utils.notNetcdf(type < 1 || type > 6, `non valid type ${type}`); // Read attribute

      var size = buffer.readUint32();
      var value = types.readType(buffer, type, size); // Apply padding

      utils.padding(buffer);
      attributes[gAtt] = {
        name: name,
        type: types.num2str(type),
        value: value
      };
    }
  }

  return attributes;
}
/**
 * List of variables
 * @ignore
 * @param {IOBuffer} buffer - Buffer for the file data
 * @param {number} recordId - Id of the unlimited dimension (also called record dimension)
 *                            This value may be undefined if there is no unlimited dimension
 * @param {number} version - Version of the file
 * @return {object} - Number of recordStep and list of variables with:
 *  * `name`: String with the name of the variable
 *  * `dimensions`: Array with the dimension IDs of the variable
 *  * `attributes`: Array with the attributes of the variable
 *  * `type`: String with the type of the variable
 *  * `size`: Number with the size of the variable
 *  * `offset`: Number with the offset where of the variable begins
 *  * `record`: True if is a record variable, false otherwise (unlimited size)
 */


function variablesList(buffer, recordId, version) {
  const varList = buffer.readUint32();
  var recordStep = 0;

  if (varList === ZERO) {
    utils.notNetcdf(buffer.readUint32() !== ZERO, 'wrong empty tag for list of variables');
    return [];
  } else {
    utils.notNetcdf(varList !== NC_VARIABLE, 'wrong tag for list of variables'); // Length of variables

    const variableSize = buffer.readUint32();
    var variables = new Array(variableSize);

    for (var v = 0; v < variableSize; v++) {
      // Read name
      var name = utils.readName(buffer); // Read dimensionality of the variable

      const dimensionality = buffer.readUint32(); // Index into the list of dimensions

      var dimensionsIds = new Array(dimensionality);

      for (var dim = 0; dim < dimensionality; dim++) {
        dimensionsIds[dim] = buffer.readUint32();
      } // Read variables size


      var attributes = attributesList(buffer); // Read type

      var type = buffer.readUint32();
      utils.notNetcdf(type < 1 && type > 6, `non valid type ${type}`); // Read variable size
      // The 32-bit varSize field is not large enough to contain the size of variables that require
      // more than 2^32 - 4 bytes, so 2^32 - 1 is used in the varSize field for such variables.

      const varSize = buffer.readUint32(); // Read offset

      var offset = buffer.readUint32();

      if (version === 2) {
        utils.notNetcdf(offset > 0, 'offsets larger than 4GB not supported');
        offset = buffer.readUint32();
      }

      let record = false; // Count amount of record variables

      if (typeof recordId !== 'undefined' && dimensionsIds[0] === recordId) {
        recordStep += varSize;
        record = true;
      }

      variables[v] = {
        name: name,
        dimensions: dimensionsIds,
        attributes,
        type: types.num2str(type),
        size: varSize,
        offset,
        record
      };
    }
  }

  return {
    variables: variables,
    recordStep: recordStep
  };
}

module.exports = header;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function toString() {
  let result = [];
  result.push('DIMENSIONS');

  for (let dimension of this.dimensions) {
    result.push(`  ${dimension.name.padEnd(30)} = size: ${dimension.size}`);
  }

  result.push('');
  result.push('GLOBAL ATTRIBUTES');

  for (let attribute of this.globalAttributes) {
    result.push(`  ${attribute.name.padEnd(30)} = ${attribute.value}`);
  }

  let variables = JSON.parse(JSON.stringify(this.variables));
  result.push('');
  result.push('VARIABLES:');

  for (let variable of variables) {
    variable.value = this.getDataVariable(variable);
    let stringify = JSON.stringify(variable.value);
    if (stringify.length > 50) stringify = stringify.substring(0, 50);

    if (!isNaN(variable.value.length)) {
      stringify += ` (length: ${variable.value.length})`;
    }

    result.push(`  ${variable.name.padEnd(30)} = ${stringify}`);
  }

  return result.join('\n');
}

module.exports = toString;

/***/ })
/******/ ]);
});
//# sourceMappingURL=netcdfjs.js.map