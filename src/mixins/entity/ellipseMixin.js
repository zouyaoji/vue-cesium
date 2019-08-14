import {
  semiMajorAxis,
  semiMinorAxis,
  height,
  extrudedHeight,
  rotation,
  stRotation,
  granularity
} from '@/mixins/entity/allProps'

export default {
  mixins: [semiMajorAxis, semiMinorAxis, height, extrudedHeight, rotation, stRotation, granularity]
}
