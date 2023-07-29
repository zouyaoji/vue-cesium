define(['./PrimitivePipeline-111ee29f', './createTaskProcessorWorker', './Transforms-e2d4a55a', './Matrix3-41c58dde', './Check-6ede7e26', './defaultValue-fe22d8c0', './Math-0a2ac845', './Matrix2-e1298525', './RuntimeError-ef395448', './combine-d9581036', './ComponentDatatype-cf1fa08e', './WebGLConstants-0b1ce7ba', './GeometryAttribute-8fcff0d5', './GeometryAttributes-ad136444', './GeometryPipeline-70d69a43', './AttributeCompression-f9f6c717', './EncodedCartesian3-57415c8a', './IndexDatatype-2643aa47', './IntersectionTests-85350792', './Plane-4c3d403b', './WebMercatorProjection-13ed1a6e'], (function (PrimitivePipeline, createTaskProcessorWorker, Transforms, Matrix3, Check, defaultValue, Math, Matrix2, RuntimeError, combine, ComponentDatatype, WebGLConstants, GeometryAttribute, GeometryAttributes, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, WebMercatorProjection) { 'use strict';

  function combineGeometry(packedParameters, transferableObjects) {
    const parameters = PrimitivePipeline.PrimitivePipeline.unpackCombineGeometryParameters(
      packedParameters
    );
    const results = PrimitivePipeline.PrimitivePipeline.combineGeometry(parameters);
    return PrimitivePipeline.PrimitivePipeline.packCombineGeometryResults(
      results,
      transferableObjects
    );
  }
  var combineGeometry$1 = createTaskProcessorWorker(combineGeometry);

  return combineGeometry$1;

}));
