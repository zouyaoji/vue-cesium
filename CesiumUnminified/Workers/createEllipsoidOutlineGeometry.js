define([
  './defaultValue-fe22d8c0',
  './EllipsoidOutlineGeometry-7039a0ae',
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
  './IndexDatatype-b8f3e09d'
], function (
  defaultValue,
  EllipsoidOutlineGeometry,
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
  IndexDatatype
) {
  'use strict'

  function createEllipsoidOutlineGeometry(ellipsoidGeometry, offset) {
    if (defaultValue.defined(ellipsoidGeometry.buffer)) {
      ellipsoidGeometry = EllipsoidOutlineGeometry.EllipsoidOutlineGeometry.unpack(ellipsoidGeometry, offset)
    }
    return EllipsoidOutlineGeometry.EllipsoidOutlineGeometry.createGeometry(ellipsoidGeometry)
  }

  return createEllipsoidOutlineGeometry
})
