import { semiMajorAxis, semiMinorAxis, height, extrudedHeight, rotation, stRotation, granularity } from '../mixinProps'

/**
 * vc-graphics-ellipse base props mixins
 */
export default {
  mixins: [semiMajorAxis, semiMinorAxis, height, extrudedHeight, rotation, stRotation, granularity]
}
