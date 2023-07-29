define(['./BoxGeometry-7aa4ce7f', './defaultValue-fe22d8c0', './Transforms-e2d4a55a', './Matrix3-41c58dde', './Check-6ede7e26', './Math-0a2ac845', './Matrix2-e1298525', './RuntimeError-ef395448', './combine-d9581036', './ComponentDatatype-cf1fa08e', './WebGLConstants-0b1ce7ba', './GeometryAttribute-8fcff0d5', './GeometryAttributes-ad136444', './GeometryOffsetAttribute-9ad0019c', './VertexFormat-030f11ff'], (function (BoxGeometry, defaultValue, Transforms, Matrix3, Check, Math, Matrix2, RuntimeError, combine, ComponentDatatype, WebGLConstants, GeometryAttribute, GeometryAttributes, GeometryOffsetAttribute, VertexFormat) { 'use strict';

  function createBoxGeometry(boxGeometry, offset) {
    if (defaultValue.defined(offset)) {
      boxGeometry = BoxGeometry.BoxGeometry.unpack(boxGeometry, offset);
    }
    return BoxGeometry.BoxGeometry.createGeometry(boxGeometry);
  }

  return createBoxGeometry;

}));
