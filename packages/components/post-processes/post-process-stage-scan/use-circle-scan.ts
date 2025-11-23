/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:13
 * @LastEditTime: 2023-03-09 09:53:21
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\post-processes\post-process-stage-scan\use-circle-scan.ts
 */
import type { VcViewerProvider } from '@vue-cesium/utils/types'
import shaderSource from '@vue-cesium/shared/shaders/CircleScan'

export default function ($services: VcViewerProvider) {
  const webgl = (options) => {
    const { viewer } = $services

    const webgl2 = viewer.scene.context?.webgl2
    let shaderSourceText = shaderSource
    if (!webgl2) {
      shaderSourceText = shaderSourceText.replace('in vec2 v_textureCoordinates;', 'varying vec2 v_textureCoordinates;')
      shaderSourceText = shaderSourceText.replace(/texture\(/g, 'texture2D(')
      shaderSourceText = shaderSourceText.replace(/out_FragColor/g, 'gl_FragColor')
    }

    const cartographicCenter = Cesium.Cartographic.fromCartesian(options.position, viewer.scene.globe.ellipsoid)
    const _Cartesian3Center = Cesium.Cartographic.toCartesian(cartographicCenter, viewer.scene.globe.ellipsoid)
    const _Cartesian4Center = new Cesium.Cartesian4(_Cartesian3Center.x, _Cartesian3Center.y, _Cartesian3Center.z, 1)
    const _CartographicCenter1 = new Cesium.Cartographic(cartographicCenter.longitude, cartographicCenter.latitude, cartographicCenter.height + 500)
    const _Cartesian3Center1 = Cesium.Cartographic.toCartesian(_CartographicCenter1, viewer.scene.globe.ellipsoid)
    const _Cartesian4Center1 = new Cesium.Cartesian4(_Cartesian3Center1.x, _Cartesian3Center1.y, _Cartesian3Center1.z, 1)
    const _time = new Date().getTime()
    const _scratchCartesian4Center = new Cesium.Cartesian4()
    const _scratchCartesian4Center1 = new Cesium.Cartesian4()
    const _scratchCartesian3Normal = new Cesium.Cartesian3()
    const uniforms = {
      u_scanCenterEC() {
        return Cesium.Matrix4.multiplyByVector(viewer.camera.viewMatrix, _Cartesian4Center, _scratchCartesian4Center)
      },
      u_scanPlaneNormalEC() {
        const temp = Cesium.Matrix4.multiplyByVector(viewer.camera.viewMatrix, _Cartesian4Center, _scratchCartesian4Center)
        const temp1 = Cesium.Matrix4.multiplyByVector(viewer.camera.viewMatrix, _Cartesian4Center1, _scratchCartesian4Center1)
        _scratchCartesian3Normal.x = temp1.x - temp.x
        _scratchCartesian3Normal.y = temp1.y - temp.y
        _scratchCartesian3Normal.z = temp1.z - temp.z
        Cesium.Cartesian3.normalize(_scratchCartesian3Normal, _scratchCartesian3Normal)
        return _scratchCartesian3Normal
      },
      u_radius() {
        return (options.radius * ((new Date().getTime() - _time) % options.interval)) / options.interval
      },
      u_scanColor: options.color
    }
    return {
      shaderSource: shaderSourceText,
      uniforms
    }
  }

  return {
    webgl
  }
}
