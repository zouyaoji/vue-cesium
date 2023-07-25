define(['./Matrix3-41c58dde', './defaultValue-fe22d8c0', './EllipseOutlineGeometry-05d35d18', './Check-6ede7e26', './Math-0a2ac845', './Transforms-e2d4a55a', './Matrix2-e1298525', './RuntimeError-ef395448', './combine-d9581036', './ComponentDatatype-cf1fa08e', './WebGLConstants-0b1ce7ba', './EllipseGeometryLibrary-21262a28', './GeometryAttribute-8fcff0d5', './GeometryAttributes-ad136444', './GeometryOffsetAttribute-9ad0019c', './IndexDatatype-2643aa47'], (function (Matrix3, defaultValue, EllipseOutlineGeometry, Check, Math, Transforms, Matrix2, RuntimeError, combine, ComponentDatatype, WebGLConstants, EllipseGeometryLibrary, GeometryAttribute, GeometryAttributes, GeometryOffsetAttribute, IndexDatatype) { 'use strict';

  function createEllipseOutlineGeometry(ellipseGeometry, offset) {
    if (defaultValue.defined(offset)) {
      ellipseGeometry = EllipseOutlineGeometry.EllipseOutlineGeometry.unpack(ellipseGeometry, offset);
    }
    ellipseGeometry._center = Matrix3.Cartesian3.clone(ellipseGeometry._center);
    ellipseGeometry._ellipsoid = Matrix3.Ellipsoid.clone(ellipseGeometry._ellipsoid);
    return EllipseOutlineGeometry.EllipseOutlineGeometry.createGeometry(ellipseGeometry);
  }

  return createEllipseOutlineGeometry;

}));
