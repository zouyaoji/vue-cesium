export function creatCartesian2 (Cesium, options = {}) {
  const { x, y } = options
  return new Cesium.Cartesian2(x, y)
}

export function creatCartesian3 (Cesium, options = {}) {
  const { x, y, z } = options
  return new Cesium.Cartesian3(x, y, z)
}

export function creatCartesian4 (Cesium, options = {}) {
  const { x, y, z, w } = options
  return new Cesium.Cartesian4(x, y, z, w)
}

export function Cartographic (Cesium, options = {}) {
  const { lng, lat, h } = options
  return new Cesium.Cartesian2(lng, lat, h)
}
