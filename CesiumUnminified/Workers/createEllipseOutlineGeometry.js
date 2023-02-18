define([
  './Matrix3-315394f6',
  './defaultValue-0a909f67',
  './EllipseOutlineGeometry-017a5929',
  './Check-666ab1a0',
  './Math-2dbd6b93',
  './Transforms-a05e5e6e',
  './Matrix2-13178034',
  './RuntimeError-06c93819',
  './combine-ca22a614',
  './ComponentDatatype-f7b11d02',
  './WebGLConstants-a8cc3e8c',
  './EllipseGeometryLibrary-855d4681',
  './GeometryAttribute-334718f8',
  './GeometryAttributes-f06a2792',
  './GeometryOffsetAttribute-04332ce7',
  './IndexDatatype-a55ceaa1'
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
