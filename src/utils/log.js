/**
 * 输出正常信息到控制台。
 * @param  {...any} args
 */
export function log (...args) {
  console.log('[C_PKG_FULLNAME]', ...args)
}
/**
 * 输出警告信息到控制台。
 * @param {*} msg
 * @param  {...any} args
 */
export function warn (msg, ...args) {
  console.warn(`[C_PKG_FULLNAME] WARNING: ${msg}`, ...args)
}
/**
 * 输出错误信息到控制台。
 * @param {*} msg
 * @param  {...any} args
 */
export function error (msg, ...args) {
  console.error(`[C_PKG_FULLNAME] ERROR: ${msg}`, ...args)
}
