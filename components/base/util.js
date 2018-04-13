export const checkType = val => Object.prototype.toString.call(val).slice(8, -1)
export const toKebabCase = str =>
  str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`).replace(/^-/, '')
export const getDocumentByClassName = (htmlCollection, className) => {
  let temp
  let BreakException = {}
  try {
    Array.prototype.slice.call(htmlCollection).forEach(element => {
      if (element.className === className) {
        temp = element
        throw BreakException
      }
    })
  } catch (e) {
    if (e !== BreakException) throw e
  }
  return temp
}
