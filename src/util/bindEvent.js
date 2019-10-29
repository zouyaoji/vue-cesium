import { Events } from './events.js'
import { toKebabCase } from './util.js'

export default function (instance, eventList, flag = true) {
  const ev = eventList || Events[toKebabCase(this.$options._componentTag)]
  ev && ev.forEach(eventName => {
    if (instance[eventName]) {
      const listener = this.$listeners[eventName]
      let methodName = flag ? 'addEventListener' : 'removeEventListener'
      listener && instance[eventName][methodName](listener.fns)
    } else {
      // console.log('Add event linstener of ' + event + ' failed, try to upgrade Cesium to latest version.')
    }
  })
}
