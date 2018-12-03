/**
 * Constructs watch hash for multiple properties.
 * @param {string[]} props
 * @param {function|Object} watcherFactory
 */
export function makeWatchers (props, watcherFactory) {
  return props.reduce((hash, prop) => {
    hash[prop] = watcherFactory(prop)
    return hash
  }, {})
}

export function extractChildren (slots, slotNames = []) {
  return Object.keys(slots).reduce((all, name) => {
    if (!slotNames.length || slotNames.includes(name)) {
      all = all.concat(slots[name])
    }

    return all
  }, [])
}
