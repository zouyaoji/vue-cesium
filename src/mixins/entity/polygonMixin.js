import {
  height,
  extrudedHeight,
  stRotation,
  granularity,
  perPositionHeight,
  closeTop,
  closeBottom,
  arcType
} from './allProps'

export default {
  mixins: [height, extrudedHeight, stRotation, granularity, perPositionHeight, closeTop, closeBottom, arcType]
}
