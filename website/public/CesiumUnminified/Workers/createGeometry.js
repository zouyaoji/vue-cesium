define([
  './defaultValue-fe22d8c0',
  './PrimitivePipeline-879f996a',
  './createTaskProcessorWorker',
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
  './GeometryPipeline-916636fa',
  './AttributeCompression-8a5a065e',
  './EncodedCartesian3-e8bbca36',
  './IndexDatatype-b8f3e09d',
  './IntersectionTests-b4d02d4d',
  './Plane-c27e1ac6',
  './WebMercatorProjection-76a3fcc0'
], function (
  defaultValue,
  PrimitivePipeline,
  createTaskProcessorWorker,
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
  GeometryPipeline,
  AttributeCompression,
  EncodedCartesian3,
  IndexDatatype,
  IntersectionTests,
  Plane,
  WebMercatorProjection
) {
  'use strict'

  /* global require */

  const moduleCache = {}

  function getModule(moduleName) {
    let module = moduleCache[moduleName]
    if (!defaultValue.defined(module)) {
      if (typeof exports === 'object') {
        // Use CommonJS-style require.
        moduleCache[module] = module = require(`Workers/${moduleName}`)
      } else {
        // Use AMD-style require.
        // in web workers, require is synchronous
        require([`Workers/${moduleName}`], function (f) {
          module = f
          moduleCache[module] = f
        })
      }
    }
    return module
  }

  function createGeometry(parameters, transferableObjects) {
    const subTasks = parameters.subTasks
    const length = subTasks.length
    const resultsOrPromises = new Array(length)

    for (let i = 0; i < length; i++) {
      const task = subTasks[i]
      const geometry = task.geometry
      const moduleName = task.moduleName

      if (defaultValue.defined(moduleName)) {
        const createFunction = getModule(moduleName)
        resultsOrPromises[i] = createFunction(geometry, task.offset)
      } else {
        //Already created geometry
        resultsOrPromises[i] = geometry
      }
    }

    return Promise.all(resultsOrPromises).then(function (results) {
      return PrimitivePipeline.PrimitivePipeline.packCreateGeometryResults(results, transferableObjects)
    })
  }
  var createGeometry$1 = createTaskProcessorWorker(createGeometry)

  return createGeometry$1
})
