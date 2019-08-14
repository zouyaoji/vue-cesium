import {
  height,
  extrudedHeight,
  stRotation,
  granularity,
  perPositionHeight,
  closeTop,
  closeBottom,
  arcType
} from '@/mixins/entity/allProps'

export default {
  mixins: [height, extrudedHeight, stRotation, granularity, perPositionHeight, closeTop, closeBottom, arcType]
}
