import { Events } from './events.js'
import { toKebabCase } from './util.js'

export default function (instance, eventList) {
  const ev = eventList || Events[toKebabCase(this.$options._componentTag)]
  ev && ev.forEach(event => {
    const hasOn = event.slice(0, 2) === 'on'
    if (instance[event]) {
      instance[event].addEventListener((arg) => {
        this.$emit(hasOn ? event.slice(2) : event, arg)
      })
    } else {
      console.log('event: ' + event + ' registration failed')
    }
  })
}
