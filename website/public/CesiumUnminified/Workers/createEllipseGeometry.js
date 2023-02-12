define([
  './Matrix3-315394f6',
  './defaultValue-0a909f67',
  './EllipseGeometry-a9c9b3be',
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
  './GeometryInstance-451dc1cd',
  './GeometryOffsetAttribute-04332ce7',
  './GeometryPipeline-8fb0db69',
  './AttributeCompression-b646d393',
  './EncodedCartesian3-81f70735',
  './IndexDatatype-a55ceaa1',
  './IntersectionTests-27d49265',
  './Plane-900aa728',
  './VertexFormat-6b480673'
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
