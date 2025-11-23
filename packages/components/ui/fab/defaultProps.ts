import { useModelToggleProps } from '@vue-cesium/composables/private/use-model-toggle'
import { useFabProps } from './use-fab'

const directions = ['up', 'right', 'down', 'left']
const alignValues = ['left', 'center', 'right']

const defaultProps = {
  ...useFabProps,
  ...useModelToggleProps,

  icon: String,
  activeIcon: String,
  hideActionOnClick: {
    type: Boolean,
    default: true
  },
  hideIcon: Boolean,
  hideLabel: {
    type: Boolean,
    default: true
  },

  direction: {
    type: String,
    default: 'right',
    validator: (v: string) => directions.includes(v)
  },

  persistent: Boolean,
  stacked: Boolean,
  verticalActionsAlign: {
    type: String,
    default: 'center',
    validator: v => alignValues.includes(v)
  }
}

export default defaultProps
