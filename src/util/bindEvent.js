import { Events } from './events.js'
import { toKebabCase } from './util.js'

export default function (instance, eventList) {
  const ev = eventList || Events[toKebabCase(this.$options._componentTag)]
  ev && ev.forEach(event => {
    if (instance[event]) {
      const hasOn = event.slice(0, 2) === 'on'
      const eventName = hasOn ? event.slice(2) : event
      const listener = this.$listeners[eventName]
      listener && instance[event].addEventListener(listener.fns)
    } else {
      // console.log('Add event linstener of ' + event + ' failed, try to upgrade Cesium to latest version.')
    }
  })
}
