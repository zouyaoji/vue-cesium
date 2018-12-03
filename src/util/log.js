export function log (...args) {
  console.log('[C_PKG_FULLNAME]', ...args)
}

export function warn (msg, ...args) {
  console.warn(`[C_PKG_FULLNAME] WARNING: ${msg}`, ...args)
}

export function error (msg, ...args) {
  console.error(`[C_PKG_FULLNAME] ERROR: ${msg}`, ...args)
}
