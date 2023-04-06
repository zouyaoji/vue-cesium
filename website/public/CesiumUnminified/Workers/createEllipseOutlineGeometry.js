define([
  './Matrix3-fa806b97',
  './defaultValue-fe22d8c0',
  './EllipseOutlineGeometry-c5251669',
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
  './GeometryOffsetAttribute-9ad0019c',
  './IndexDatatype-b8f3e09d'
], function (
  Matrix3,
  defaultValue,
  EllipseOutlineGeometry,
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
  GeometryOffsetAttribute,
  IndexDatatype
) {
  'use strict'

  function createEllipseOutlineGeometry(ellipseGeometry, offset) {
    if (defaultValue.defined(offset)) {
      ellipseGeometry = EllipseOutlineGeometry.EllipseOutlineGeometry.unpack(ellipseGeometry, offset)
    }
    ellipseGeometry._center = Matrix3.Cartesian3.clone(ellipseGeometry._center)
    ellipseGeometry._ellipsoid = Matrix3.Ellipsoid.clone(ellipseGeometry._ellipsoid)
    return EllipseOutlineGeometry.EllipseOutlineGeometry.createGeometry(ellipseGeometry)
  }

  return createEllipseOutlineGeometry
})
