define([
  './BoxGeometry-ecabfc78',
  './defaultValue-fe22d8c0',
  './Transforms-9052372a',
  './Matrix3-fa806b97',
  './Check-6ede7e26',
  './Math-dad82b4d',
  './Matrix2-1e403d0e',
  './RuntimeError-ef395448',
  './combine-d9581036',
  './ComponentDatatype-cf1fa08e',
  './WebGLConstants-0b1ce7ba',
  './GeometryAttribute-7a2de5c6',
  './GeometryAttributes-ad136444',
  './GeometryOffsetAttribute-9ad0019c',
  './VertexFormat-030f11ff'
], function (
  BoxGeometry,
  defaultValue,
  Transforms,
  Matrix3,
  Check,
  Math,
  Matrix2,
  RuntimeError,
  combine,
  ComponentDatatype,
  WebGLConstants,
  GeometryAttribute,
  GeometryAttributes,
  GeometryOffsetAttribute,
  VertexFormat
) {
  'use strict'

  function createBoxGeometry(boxGeometry, offset) {
    if (defaultValue.defined(offset)) {
      boxGeometry = BoxGeometry.BoxGeometry.unpack(boxGeometry, offset)
    }
    return BoxGeometry.BoxGeometry.createGeometry(boxGeometry)
  }

  return createBoxGeometry
})
