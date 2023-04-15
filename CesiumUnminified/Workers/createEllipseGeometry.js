define([
  './Matrix3-fa806b97',
  './defaultValue-fe22d8c0',
  './EllipseGeometry-2dfc3523',
  './Check-6ede7e26',
  './Math-dad82b4d',
  './Transforms-9052372a',
  './Matrix2-1e403d0e',
  './RuntimeError-ef395448',
  './combine-d9581036',
  './ComponentDatatype-cf1fa08e',
  './WebGLConstants-0b1ce7ba',
  './EllipseGeometryLibrary-0a1e0170',
  './GeometryAttribute-7a2de5c6',
  './GeometryAttributes-ad136444',
  './GeometryInstance-3fb607b7',
  './GeometryOffsetAttribute-9ad0019c',
  './GeometryPipeline-916636fa',
  './AttributeCompression-8a5a065e',
  './EncodedCartesian3-e8bbca36',
  './IndexDatatype-b8f3e09d',
  './IntersectionTests-b4d02d4d',
  './Plane-c27e1ac6',
  './VertexFormat-030f11ff'
], function (
  Matrix3,
  defaultValue,
  EllipseGeometry,
  Check,
  Math,
  Transforms,
  Matrix2,
  RuntimeError,
  combine,
  ComponentDatatype,
  WebGLConstants,
  EllipseGeometryLibrary,
  GeometryAttribute,
  GeometryAttributes,
  GeometryInstance,
  GeometryOffsetAttribute,
  GeometryPipeline,
  AttributeCompression,
  EncodedCartesian3,
  IndexDatatype,
  IntersectionTests,
  Plane,
  VertexFormat
) {
  'use strict'

  function createEllipseGeometry(ellipseGeometry, offset) {
    if (defaultValue.defined(offset)) {
      ellipseGeometry = EllipseGeometry.EllipseGeometry.unpack(ellipseGeometry, offset)
    }
    ellipseGeometry._center = Matrix3.Cartesian3.clone(ellipseGeometry._center)
    ellipseGeometry._ellipsoid = Matrix3.Ellipsoid.clone(ellipseGeometry._ellipsoid)
    return EllipseGeometry.EllipseGeometry.createGeometry(ellipseGeometry)
  }

  return createEllipseGeometry
})
