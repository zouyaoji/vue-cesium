import {
  height,
  extrudedHeight,
  stRotation,
  granularity,
  perPositionHeight,
  closeTop,
  closeBottom,
  arcType
} from '../mixinProps'

/**
 * vc-graphics-polygon base props mixins
 */
export default {
  mixins: [height, extrudedHeight, stRotation, granularity, perPositionHeight, closeTop, closeBottom, arcType]
}
