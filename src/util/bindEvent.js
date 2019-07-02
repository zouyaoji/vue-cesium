import { Events } from './events.js'
import { toKebabCase } from './util.js'

export default function (instance, eventList) {
  const ev = eventList || Events[toKebabCase(this.$options._componentTag)]
  ev && ev.forEach(eventName => {
    if (instance[eventName]) {
      const listener = this.$listeners[eventName]
      listener && instance[eventName].addEventListener(listener.fns)
    } else {
      // console.log('Add event linstener of ' + event + ' failed, try to upgrade Cesium to latest version.')
    }
  })
}
