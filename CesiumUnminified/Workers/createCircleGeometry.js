define([
  './Matrix3-fa806b97',
  './Check-6ede7e26',
  './defaultValue-fe22d8c0',
  './EllipseGeometry-2dfc3523',
  './VertexFormat-030f11ff',
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
  './Plane-c27e1ac6'
], function (
  Matrix3,
  Check,
  defaultValue,
  EllipseGeometry,
  VertexFormat,
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
  Plane
) {
  'use strict'

  /**
   * A description of a circle on the ellipsoid. Circle geometry can be rendered with both {@link Primitive} and {@link GroundPrimitive}.
   *
   * @alias CircleGeometry
   * @constructor
   *
   * @param {object} options Object with the following properties:
   * @param {Cartesian3} options.center The circle's center point in the fixed frame.
   * @param {number} options.radius The radius in meters.
   * @param {Ellipsoid} [options.ellipsoid=Ellipsoid.WGS84] The ellipsoid the circle will be on.
   * @param {number} [options.height=0.0] The distance in meters between the circle and the ellipsoid surface.
   * @param {number} [options.granularity=0.02] The angular distance between points on the circle in radians.
   * @param {VertexFormat} [options.vertexFormat=VertexFormat.DEFAULT] The vertex attributes to be computed.
   * @param {number} [options.extrudedHeight=0.0] The distance in meters between the circle's extruded face and the ellipsoid surface.
   * @param {number} [options.stRotation=0.0] The rotation of the texture coordinates, in radians. A positive rotation is counter-clockwise.
   *
   * @exception {DeveloperError} radius must be greater than zero.
   * @exception {DeveloperError} granularity must be greater than zero.
   *
   * @see CircleGeometry.createGeometry
   * @see Packable
   *
   * @example
   * // Create a circle.
   * const circle = new Cesium.CircleGeometry({
   *   center : Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
   *   radius : 100000.0
   * });
   * const geometry = Cesium.CircleGeometry.createGeometry(circle);
   */
  function CircleGeometry(options) {
    options = defaultValue.defaultValue(options, defaultValue.defaultValue.EMPTY_OBJECT)
    const radius = options.radius

    //>>includeStart('debug', pragmas.debug);
    Check.Check.typeOf.number('radius', radius)
    //>>includeEnd('debug');

    const ellipseGeometryOptions = {
      center: options.center,
      semiMajorAxis: radius,
      semiMinorAxis: radius,
      ellipsoid: options.ellipsoid,
      height: options.height,
      extrudedHeight: options.extrudedHeight,
      granularity: options.granularity,
      vertexFormat: options.vertexFormat,
      stRotation: options.stRotation,
      shadowVolume: options.shadowVolume
    }
    this._ellipseGeometry = new EllipseGeometry.EllipseGeometry(ellipseGeometryOptions)
    this._workerName = 'createCircleGeometry'
  }

  /**
   * The number of elements used to pack the object into an array.
   * @type {number}
   */
  CircleGeometry.packedLength = EllipseGeometry.EllipseGeometry.packedLength

  /**
   * Stores the provided instance into the provided array.
   *
   * @param {CircleGeometry} value The value to pack.
   * @param {number[]} array The array to pack into.
   * @param {number} [startingIndex=0] The index into the array at which to start packing the elements.
   *
   * @returns {number[]} The array that was packed into
   */
  CircleGeometry.pack = function (value, array, startingIndex) {
    //>>includeStart('debug', pragmas.debug);
    Check.Check.typeOf.object('value', value)
    //>>includeEnd('debug');
    return EllipseGeometry.EllipseGeometry.pack(value._ellipseGeometry, array, startingIndex)
  }

  const scratchEllipseGeometry = new EllipseGeometry.EllipseGeometry({
    center: new Matrix3.Cartesian3(),
    semiMajorAxis: 1.0,
    semiMinorAxis: 1.0
  })
  const scratchOptions = {
    center: new Matrix3.Cartesian3(),
    radius: undefined,
    ellipsoid: Matrix3.Ellipsoid.clone(Matrix3.Ellipsoid.UNIT_SPHERE),
    height: undefined,
    extrudedHeight: undefined,
    granularity: undefined,
    vertexFormat: new VertexFormat.VertexFormat(),
    stRotation: undefined,
    semiMajorAxis: undefined,
    semiMinorAxis: undefined,
    shadowVolume: undefined
  }

  /**
   * Retrieves an instance from a packed array.
   *
   * @param {number[]} array The packed array.
   * @param {number} [startingIndex=0] The starting index of the element to be unpacked.
   * @param {CircleGeometry} [result] The object into which to store the result.
   * @returns {CircleGeometry} The modified result parameter or a new CircleGeometry instance if one was not provided.
   */
  CircleGeometry.unpack = function (array, startingIndex, result) {
    const ellipseGeometry = EllipseGeometry.EllipseGeometry.unpack(array, startingIndex, scratchEllipseGeometry)
    scratchOptions.center = Matrix3.Cartesian3.clone(ellipseGeometry._center, scratchOptions.center)
    scratchOptions.ellipsoid = Matrix3.Ellipsoid.clone(ellipseGeometry._ellipsoid, scratchOptions.ellipsoid)
    scratchOptions.height = ellipseGeometry._height
    scratchOptions.extrudedHeight = ellipseGeometry._extrudedHeight
    scratchOptions.granularity = ellipseGeometry._granularity
    scratchOptions.vertexFormat = VertexFormat.VertexFormat.clone(ellipseGeometry._vertexFormat, scratchOptions.vertexFormat)
    scratchOptions.stRotation = ellipseGeometry._stRotation
    scratchOptions.shadowVolume = ellipseGeometry._shadowVolume

    if (!defaultValue.defined(result)) {
      scratchOptions.radius = ellipseGeometry._semiMajorAxis
      return new CircleGeometry(scratchOptions)
    }

    scratchOptions.semiMajorAxis = ellipseGeometry._semiMajorAxis
    scratchOptions.semiMinorAxis = ellipseGeometry._semiMinorAxis
    result._ellipseGeometry = new EllipseGeometry.EllipseGeometry(scratchOptions)
    return result
  }

  /**
   * Computes the geometric representation of a circle on an ellipsoid, including its vertices, indices, and a bounding sphere.
   *
   * @param {CircleGeometry} circleGeometry A description of the circle.
   * @returns {Geometry|undefined} The computed vertices and indices.
   */
  CircleGeometry.createGeometry = function (circleGeometry) {
    return EllipseGeometry.EllipseGeometry.createGeometry(circleGeometry._ellipseGeometry)
  }

  /**
   * @private
   */
  CircleGeometry.createShadowVolume = function (circleGeometry, minHeightFunc, maxHeightFunc) {
    const granularity = circleGeometry._ellipseGeometry._granularity
    const ellipsoid = circleGeometry._ellipseGeometry._ellipsoid

    const minHeight = minHeightFunc(granularity, ellipsoid)
    const maxHeight = maxHeightFunc(granularity, ellipsoid)

    return new CircleGeometry({
      center: circleGeometry._ellipseGeometry._center,
      radius: circleGeometry._ellipseGeometry._semiMajorAxis,
      ellipsoid: ellipsoid,
      stRotation: circleGeometry._ellipseGeometry._stRotation,
      granularity: granularity,
      extrudedHeight: minHeight,
      height: maxHeight,
      vertexFormat: VertexFormat.VertexFormat.POSITION_ONLY,
      shadowVolume: true
    })
  }

  Object.defineProperties(CircleGeometry.prototype, {
    /**
     * @private
     */
    rectangle: {
      get: function () {
        return this._ellipseGeometry.rectangle
      }
    },
    /**
     * For remapping texture coordinates when rendering CircleGeometries as GroundPrimitives.
     * @private
     */
    textureCoordinateRotationPoints: {
      get: function () {
        return this._ellipseGeometry.textureCoordinateRotationPoints
      }
    }
  })

  function createCircleGeometry(circleGeometry, offset) {
    if (defaultValue.defined(offset)) {
      circleGeometry = CircleGeometry.unpack(circleGeometry, offset)
    }
    circleGeometry._ellipseGeometry._center = Matrix3.Cartesian3.clone(circleGeometry._ellipseGeometry._center)
    circleGeometry._ellipseGeometry._ellipsoid = Matrix3.Ellipsoid.clone(circleGeometry._ellipseGeometry._ellipsoid)
    return CircleGeometry.createGeometry(circleGeometry)
  }

  return createCircleGeometry
})
