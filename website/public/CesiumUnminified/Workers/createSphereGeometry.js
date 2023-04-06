define([
  './defaultValue-fe22d8c0',
  './Matrix3-fa806b97',
  './Check-6ede7e26',
  './EllipsoidGeometry-d10a5221',
  './VertexFormat-030f11ff',
  './Math-dad82b4d',
  './Transforms-9052372a',
  './Matrix2-1e403d0e',
  './RuntimeError-ef395448',
  './combine-d9581036',
  './ComponentDatatype-cf1fa08e',
  './WebGLConstants-0b1ce7ba',
  './GeometryAttribute-7a2de5c6',
  './GeometryAttributes-ad136444',
  './GeometryOffsetAttribute-9ad0019c',
  './IndexDatatype-b8f3e09d'
], function (
  defaultValue,
  Matrix3,
  Check,
  EllipsoidGeometry,
  VertexFormat,
  Math,
  Transforms,
  Matrix2,
  RuntimeError,
  combine,
  ComponentDatatype,
  WebGLConstants,
  GeometryAttribute,
  GeometryAttributes,
  GeometryOffsetAttribute,
  IndexDatatype
) {
  'use strict'

  /**
   * A description of a sphere centered at the origin.
   *
   * @alias SphereGeometry
   * @constructor
   *
   * @param {object} [options] Object with the following properties:
   * @param {number} [options.radius=1.0] The radius of the sphere.
   * @param {number} [options.stackPartitions=64] The number of times to partition the ellipsoid into stacks.
   * @param {number} [options.slicePartitions=64] The number of times to partition the ellipsoid into radial slices.
   * @param {VertexFormat} [options.vertexFormat=VertexFormat.DEFAULT] The vertex attributes to be computed.
   *
   * @exception {DeveloperError} options.slicePartitions cannot be less than three.
   * @exception {DeveloperError} options.stackPartitions cannot be less than three.
   *
   * @see SphereGeometry#createGeometry
   *
   * @example
   * const sphere = new Cesium.SphereGeometry({
   *   radius : 100.0,
   *   vertexFormat : Cesium.VertexFormat.POSITION_ONLY
   * });
   * const geometry = Cesium.SphereGeometry.createGeometry(sphere);
   */
  function SphereGeometry(options) {
    const radius = defaultValue.defaultValue(options.radius, 1.0)
    const radii = new Matrix3.Cartesian3(radius, radius, radius)
    const ellipsoidOptions = {
      radii: radii,
      stackPartitions: options.stackPartitions,
      slicePartitions: options.slicePartitions,
      vertexFormat: options.vertexFormat
    }

    this._ellipsoidGeometry = new EllipsoidGeometry.EllipsoidGeometry(ellipsoidOptions)
    this._workerName = 'createSphereGeometry'
  }

  /**
   * The number of elements used to pack the object into an array.
   * @type {number}
   */
  SphereGeometry.packedLength = EllipsoidGeometry.EllipsoidGeometry.packedLength

  /**
   * Stores the provided instance into the provided array.
   *
   * @param {SphereGeometry} value The value to pack.
   * @param {number[]} array The array to pack into.
   * @param {number} [startingIndex=0] The index into the array at which to start packing the elements.
   *
   * @returns {number[]} The array that was packed into
   */
  SphereGeometry.pack = function (value, array, startingIndex) {
    //>>includeStart('debug', pragmas.debug);
    Check.Check.typeOf.object('value', value)
    //>>includeEnd('debug');

    return EllipsoidGeometry.EllipsoidGeometry.pack(value._ellipsoidGeometry, array, startingIndex)
  }

  const scratchEllipsoidGeometry = new EllipsoidGeometry.EllipsoidGeometry()
  const scratchOptions = {
    radius: undefined,
    radii: new Matrix3.Cartesian3(),
    vertexFormat: new VertexFormat.VertexFormat(),
    stackPartitions: undefined,
    slicePartitions: undefined
  }

  /**
   * Retrieves an instance from a packed array.
   *
   * @param {number[]} array The packed array.
   * @param {number} [startingIndex=0] The starting index of the element to be unpacked.
   * @param {SphereGeometry} [result] The object into which to store the result.
   * @returns {SphereGeometry} The modified result parameter or a new SphereGeometry instance if one was not provided.
   */
  SphereGeometry.unpack = function (array, startingIndex, result) {
    const ellipsoidGeometry = EllipsoidGeometry.EllipsoidGeometry.unpack(array, startingIndex, scratchEllipsoidGeometry)
    scratchOptions.vertexFormat = VertexFormat.VertexFormat.clone(ellipsoidGeometry._vertexFormat, scratchOptions.vertexFormat)
    scratchOptions.stackPartitions = ellipsoidGeometry._stackPartitions
    scratchOptions.slicePartitions = ellipsoidGeometry._slicePartitions

    if (!defaultValue.defined(result)) {
      scratchOptions.radius = ellipsoidGeometry._radii.x
      return new SphereGeometry(scratchOptions)
    }

    Matrix3.Cartesian3.clone(ellipsoidGeometry._radii, scratchOptions.radii)
    result._ellipsoidGeometry = new EllipsoidGeometry.EllipsoidGeometry(scratchOptions)
    return result
  }

  /**
   * Computes the geometric representation of a sphere, including its vertices, indices, and a bounding sphere.
   *
   * @param {SphereGeometry} sphereGeometry A description of the sphere.
   * @returns {Geometry|undefined} The computed vertices and indices.
   */
  SphereGeometry.createGeometry = function (sphereGeometry) {
    return EllipsoidGeometry.EllipsoidGeometry.createGeometry(sphereGeometry._ellipsoidGeometry)
  }

  function createSphereGeometry(sphereGeometry, offset) {
    if (defaultValue.defined(offset)) {
      sphereGeometry = SphereGeometry.unpack(sphereGeometry, offset)
    }
    return SphereGeometry.createGeometry(sphereGeometry)
  }

  return createSphereGeometry
})
