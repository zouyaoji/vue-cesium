const toString = Object.prototype.toString

export const checkType = (val) => Object.prototype.toString.call(val).slice(8, -1)

export const toKebabCase = (str) => str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`).replace(/^-/, '')

export const clone = (object, deep) => {
  if (object === null || typeof object !== 'object') {
    return object
  }

  deep = deep || false

  const result = new object.constructor()
  for (const propertyName in object) {
    if (Object.prototype.hasOwnProperty.call(object, propertyName)) {
      let value = object[propertyName]
      if (deep) {
        value = clone(value, deep)
      }
      result[propertyName] = value
    }
  }

  return result
}

export function getString (arrayBuffer, encoding) {
  if (!(arrayBuffer instanceof Uint8Array) && !(arrayBuffer instanceof ArrayBuffer) && arrayBuffer.buffer) {
    arrayBuffer = arrayBuffer.buffer
  }
  const decoder = new TextDecoder(encoding)
  const decodedText = decoder.decode(arrayBuffer, { stream: true })
  return decodedText
}

export function isEmptyObj (o) {
  if (isUndefined(o)) {
    return true
  }

  if (o instanceof Element) {
    return false
  }

  const arr = Object.keys(o)
  return arr.length === 0
}
/**
 * 通过 class 名获取 Dom 元素。
 * @param {Array<Element>} htmlCollection Dom元素集合。
 * @param {String} className class 名称。
 */
export const getDocumentByClassName = (htmlCollection, className) => {
  let temp
  const BreakException = {}
  try {
    Array.prototype.slice.call(htmlCollection).forEach((element) => {
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
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
export function isArray (val) {
  return toString.call(val) === '[object Array]'
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
export function isObject (val) {
  return val !== null && typeof val === 'object'
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
export function isString (val) {
  return typeof val === 'string'
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
export function isNumber (val) {
  return typeof val === 'number'
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
export function isUndefined (val) {
  return typeof val === 'undefined'
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
export function isFunction (val) {
  return toString.call(val) === '[object Function]'
}
/**
 * 验证是否是经纬度。
 * @param {Number} longitude
 * @param {Number} latitude
 * @returns {Boolean}
 */
export function lnglatValidator (longitude, latitude) {
  // 经度，整数部分为0-180小数部分为0到6位
  const longreg = /^(-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,15})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,15}|180)$/
  if (!longreg.test(longitude)) {
    return false
  } // 纬度,整数部分为0-90小数部分为0到6位
  const latreg = /^(-|\+)?([0-8]?\d{1}\.\d{0,15}|90\.0{0,15}|[0-8]?\d{1}|90)$/
  if (!latreg.test(latitude)) {
    return false
  }
  return true
}

export function dirname (path) {
  if (typeof path !== 'string') path = path + ''
  if (path.length === 0) return '.'
  let code = path.charCodeAt(0)
  const hasRoot = code === 47 /* / */
  let end = -1
  let matchedSlash = true
  for (let i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i)
    if (code === 47 /* / */) {
      if (!matchedSlash) {
        end = i
        break
      }
    } else {
      // We saw the first non-path separator
      matchedSlash = false
    }
  }

  if (end === -1) return hasRoot ? '/' : '.'
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/'
  }
  return path.slice(0, end)
}

export function Platform () {
  const ua = navigator.userAgent
  const isWindowsPhone = /(?:Windows Phone)/.test(ua)
  const isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone
  const isAndroid = /(?:Android)/.test(ua)
  const isFireFox = /(?:Firefox)/.test(ua)
  const isChrome = /(?:Chrome|CriOS)/.test(ua)
  const isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua))
  const isPhone = /(?:iPhone)/.test(ua) && !isTablet
  const isPc = !isPhone && !isAndroid && !isSymbian
  return {
    isTablet: isTablet,
    isPhone: isPhone,
    isAndroid: isAndroid,
    isPc: isPc,
    isChrome: isChrome
  }
}

export function captureScreenshot (viewer, showSplitter = false) {
  const { when } = Cesium
  const deferred = when.defer()
  const scene = viewer.scene
  const removeCallback = scene.postRender.addEventListener(function () {
    removeCallback()
    try {
      const cesiumCanvas = viewer.scene.canvas

      // If we're using the splitter, draw the split position as a vertical white line.
      const canvas = cesiumCanvas
      // if (showSplitter) {
      //   canvas = document.createElement('canvas')
      //   canvas.width = cesiumCanvas.width
      //   canvas.height = cesiumCanvas.height

      //   const context = canvas.getContext('2d')
      //   context.drawImage(cesiumCanvas, 0, 0)

      //   const x = viewer.splitPosition * cesiumCanvas.width
      //   context.strokeStyle = this.terria.baseMapContrastColor
      //   context.beginPath()
      //   context.moveTo(x, 0)
      //   context.lineTo(x, cesiumCanvas.height)
      //   context.stroke()
      // }

      deferred.resolve(canvas.toDataURL('image/png'))
    } catch (e) {
      deferred.reject(e)
    }
  }, this)

  scene.render(viewer.clock.currentTime)

  return deferred.promise
}

export function getAllAttribution (viewer) {
  const credits = viewer.scene.frameState.creditDisplay._currentFrameCredits.screenCredits.values.concat(
    viewer.scene.frameState.creditDisplay._currentFrameCredits.lightboxCredits.values
  )
  return credits.map((credit) => credit.html)
}

export function drawTriangle (options) {
  if (!options) {
    throw new Error('options is required')
  }
  if (!options.width) {
    throw new Error('options.width is required')
  }
  if (!options.height) {
    throw new Error('options.height is required')
  }
  options.backgroundColor = options.backgroundColor || 'black'
  options.borderColor = options.borderColor || 'orange'
  options.borderWidth = options.borderWidth || 1

  const cv = document.createElement('canvas')
  cv.width = options.width
  cv.height = options.height
  const ctx = cv.getContext('2d')
  ctx.beginPath()
  if (options.direction === 1) {
    // left
    ctx.moveTo(cv.width, 0)
    ctx.lineTo(0, cv.height / 2)
    ctx.lineTo(cv.width, cv.height)
  } else if (options.direction === 2) {
    // top
    ctx.moveTo(0, cv.height)
    ctx.lineTo(cv.width / 2, 0)
    ctx.lineTo(cv.width, cv.height)
  } else if (options.direction === 3) {
    // right
    ctx.moveTo(0, cv.height)
    ctx.lineTo(cv.width, cv.height / 2)
    ctx.lineTo(0, 0)
  } else {
    // bottom
    ctx.moveTo(0, 0)
    ctx.lineTo(cv.width / 2, cv.height)
    ctx.lineTo(cv.width, 0)
  }
  ctx.lineJoin = 'round' // 两条线交汇时的边角类型（miter 尖角默认  bevel斜角 round 圆角 ）

  if (options.backgroundColor) {
    ctx.fillStyle = options.backgroundColor.toCssColorString()
    ctx.fill()
  }
  if (options.border) {
    ctx.lineWidth = options.borderWidth
    ctx.strokeStyle = options.borderColor.toCssColorString()
    ctx.stroke()
  }
  return cv
}

export function drawText (text, options) {
  options = options || {
    font: '20px sans-serif'
  }
  const backcolor = options.backgroundColor
  const padding = options.padding
  delete options.backgroundColor
  delete options.padding

  const lines = text.split(/[\r]?\n+/)
  const lineImgs = []
  let w = 0
  let h = 0
  for (let i = 0; i < lines.length; i++) {
    const tempCv = Cesium.writeTextToCanvas(lines[i], options)
    if (tempCv) {
      lineImgs.push(tempCv)
      h += tempCv.height
      w = Math.max(w, tempCv.width)
    }
  }
  options.backgroundColor = backcolor
  options.padding = padding

  let cv = options.canvas
  if (!cv) {
    w += padding * 2
    h += padding * 2.25
    cv = document.createElement('canvas')
    cv.width = w
    cv.height = h
  }

  const ctx = cv.getContext('2d')
  if (backcolor) {
    ctx.fillStyle = backcolor.toCssColorString()
  } else {
    ctx.fillStyle = undefined
  }

  if (options.border) {
    ctx.lineWidth = options.borderWidth
    ctx.strokeStyle = options.borderColor.toCssColorString()
  }

  if (!options.borderRadius) {
    if (backcolor) {
      ctx.fillRect(0, 0, cv.width, cv.height)
    }

    if (options.border) {
      ctx.strokeRect(0, 0, cv.width, cv.height)
    }
  } else {
    drawRoundedRect(
      {
        x: 0,
        y: 0,
        width: cv.width,
        height: cv.height
      },
      options.borderRadius,
      ctx
    )
  }

  delete ctx.strokeStyle
  delete ctx.fillStyle
  let y = 0
  for (let i = 0; i < lineImgs.length; i++) {
    ctx.drawImage(lineImgs[i], 0 + padding, y + padding)
    y += lineImgs[i].height
  }
  return cv
}

function drawRoundedRect (rect, r, ctx) {
  ctx.beginPath()

  ctx.moveTo(rect.x + r, rect.y)
  ctx.arcTo(rect.x + rect.width, rect.y, rect.x + rect.width, rect.y + rect.height, r)
  ctx.arcTo(rect.x + rect.width, rect.y + rect.height, rect.x, rect.y + rect.height, r)
  ctx.arcTo(rect.x, rect.y + rect.height, rect.x, rect.y, r)
  ctx.arcTo(rect.x, rect.y, rect.x + r, rect.y, r)

  ctx.fill()
  ctx.stroke()
}

export function getExtension (fileName) {
  const start = fileName.lastIndexOf('.')
  if (start >= 0) {
    return fileName.substring(start, fileName.length)
  }
  return ''
}

export function changeExtension (fname, newExt) {
  return fname.replace(getExtension(fname), newExt)
}

export function readAsArrayBuffer (file) {
  const promise = Cesium.when.defer()
  const fr = new FileReader()
  fr.onload = function (e) {
    promise.resolve(e.target.result)
  }
  fr.onprogress = function (e) {
    promise.progress(e.target.result)
  }
  fr.onerror = function (e) {
    promise.reject(e.error)
  }
  fr.readAsArrayBuffer(file)
  return promise
}

export function readAsText (file) {
  const promise = Cesium.when.defer()
  const fr = new FileReader()
  fr.onload = function (e) {
    promise.resolve(e.target.result)
  }
  fr.onprogress = function (e) {
    promise.progress(e.target.result)
  }
  fr.onerror = function (e) {
    promise.reject(e.error)
  }
  fr.readAsText(file)
  return promise
}

export function readAllBytes (file) {
  const promise = Cesium.when.defer()
  const fr = new FileReader()
  fr.onload = function (e) {
    promise.resolve(new Uint8Array(e.target.result))
  }
  fr.onprogress = function (e) {
    promise.progress(e.target.result)
  }
  fr.onerror = function (e) {
    promise.reject(e.error)
  }
  fr.readAsArrayBuffer(file)
  return promise
}
