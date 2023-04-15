define([
  './CylinderGeometry-119068b8',
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
  './CylinderGeometryLibrary-135b0858',
  './GeometryAttribute-7a2de5c6',
  './GeometryAttributes-ad136444',
  './GeometryOffsetAttribute-9ad0019c',
  './IndexDatatype-b8f3e09d',
  './VertexFormat-030f11ff'
], function (
  CylinderGeometry,
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
  CylinderGeometryLibrary,
  GeometryAttribute,
  GeometryAttributes,
  GeometryOffsetAttribute,
  IndexDatatype,
  VertexFormat
) {
  'use strict'

  function createCylinderGeometry(cylinderGeometry, offset) {
    if (defaultValue.defined(offset)) {
      cylinderGeometry = CylinderGeometry.CylinderGeometry.unpack(cylinderGeometry, offset)
    }
    return CylinderGeometry.CylinderGeometry.createGeometry(cylinderGeometry)
  }

  return createCylinderGeometry
})
