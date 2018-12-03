import { isNumeric } from './minilo'

export class AssertionError extends Error {
  constructor (message) {
    super(message)
    this.name = this.constructor.name
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor)
    } else {
      this.stack = (new Error(message)).stack
    }
  }
}

/**
 * @param {*} value
 * @param {string} message
 * @throws AssertionError
 */
export function assert (value, message) {
  if (!value) {
    throw new AssertionError(message || `Assertion failed`)
  }
}

/**
 * Alias of `assert` function.
 * @param value
 * @param message
 */
export function ok (value, message) {
  return assert(value, message)
}

/**
 * @param {*} value
 * @throws {AssertionError}
 */
export function numeric (value) {
  assert(isNumeric(value), 'value is a number')
}

/**
 * @param {*} value
 * @param {Function} Ctor
 * @throws {AssertionError}
 */
export function instanceOf (value, Ctor) {
  assert(value instanceof Ctor, `value is an instance of ${Ctor.name}`)
}

export function hasOlObject (vm) {
  assert(vm.$olObject, 'component has "$olObject" property')
}

/**
 * @param {Object} vm
 * @return {void}
 * @throws {AssertionError}
 */
export function hasMap (vm) {
  assert(vm.$map, 'component has "$map" property')
}

/**
 * @param {Object} vm
 * @return {void}
 * @throws {AssertionError}
 */
export function hasView (vm) {
  assert(vm.$view, 'component has "$view" property')
}

/**
 * @param {Object} vm
 * @return {void}
 * @throws {AssertionError}
 */
export function hasGeolocation (vm) {
  assert(vm.$geolocation, 'component has "$geolocation" property')
}

/**
 * @param {Object} vm
 * @return {void}
 * @throws {AssertionError}
 */
export function hasFeature (vm) {
  assert(vm.$feature, 'component has "$feature" property')
}

/**
 * @param {Object} vm
 * @return {void}
 * @throws {AssertionError}
 */
export function hasLayer (vm) {
  assert(vm.$layer, 'component has "$layer" property')
}

/**
 * @param {Object} vm
 * @return {void}
 * @throws {AssertionError}
 */
export function hasSource (vm) {
  assert(vm.$source, 'component has "$source" property')
}

/**
 * @param {Object} vm
 * @return {void}
 * @throws {AssertionError}
 */
export function hasGeometry (vm) {
  assert(vm.$geometry, 'component has "$geometry" property')
}

/**
 * @param {Object} vm
 * @return {void}
 * @throws {AssertionError}
 */
export function hasInteraction (vm) {
  assert(vm.$interaction, 'component has "$interaction" property')
}

/**
 * @param {Object} vm
 * @return {void}
 * @throws {AssertionError}
 */
export function hasStyle (vm) {
  assert(vm.$style, 'component has "$style" property')
}

/**
 * @param {Object} vm
 * @return {void}
 * @throws {AssertionError}
 */
export function hasOverlay (vm) {
  assert(vm.$overlay, 'component has "$overlay" property')
}

export function hasGraticule (vm) {
  assert(vm.$graticule, 'component has "$graticule" property')
}
