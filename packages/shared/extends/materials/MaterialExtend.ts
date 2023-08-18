/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-08-18 00:56:13
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2023-08-18 01:15:38
 * @FilePath: \vue-cesium\packages\shared\extends\materials\MaterialExtend.ts
 */

import { VcCircleWaveMaterial, VcLineFlowMaterial } from '@vue-cesium/shared/shaders/materials'

let isExtended = false
export default class MaterialExtend {
  static extend(viewer?: Cesium.Viewer) {
    if (isExtended) {
      return
    }

    const { Material, Color, Cartesian2 } = Cesium

    /**
     * Gets the name of the VcCircleWave material.
     * @type {string}
     * @readonly
     */
    Material['VcCircleWave'] = 'VcCircleWave'
    Cesium.Material['_materialCache'].addMaterial(Material['VcCircleWave'], {
      fabric: {
        type: Material['VcCircleWave'],
        uniforms: {
          color: new Color(1, 0, 0, 1),
          time: 1,
          count: 1,
          gradient: 0.1
        },
        source: VcCircleWaveMaterial
      },
      translucent() {
        return true
      }
    })

    /**
     * Gets the name of the VcLineFlow material.
     * @type {string}
     * @readonly
     */
    Material['VcLineFlow'] = 'VcLineFlow'
    Cesium.Material['_materialCache'].addMaterial(Material['VcLineFlow'], {
      fabric: {
        type: Material['VcLineFlow'],
        uniforms: {
          image: Material.DefaultImageId,
          color: new Color(1, 1, 1, 1),
          repeat: new Cartesian2(1, 1),
          axisY: false,
          mixt: false,
          speed: 10,
          time: -1,
          hasImage2: false,
          image2: Material.DefaultImageId,
          color2: new Color(1, 1, 1),
          globalAlpha: 1
        },
        source: VcLineFlowMaterial
      },
      translucent() {
        return true
      }
    })

    isExtended = true
  }

  static revoke(viewer?: Cesium.Viewer) {
    if (!isExtended) {
      return
    }

    isExtended = false
  }
}
