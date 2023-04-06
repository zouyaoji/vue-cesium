define([
  './defaultValue-fe22d8c0',
  './FrustumGeometry-400fa1b7',
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
  './Plane-c27e1ac6',
  './VertexFormat-030f11ff'
], function (
  defaultValue,
  FrustumGeometry,
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
  Plane,
  VertexFormat
) {
  'use strict'

  function createFrustumGeometry(frustumGeometry, offset) {
    if (defaultValue.defined(offset)) {
      frustumGeometry = FrustumGeometry.FrustumGeometry.unpack(frustumGeometry, offset)
    }
    return FrustumGeometry.FrustumGeometry.createGeometry(frustumGeometry)
  }

  return createFrustumGeometry
})
