/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-16 19:29:57
 * @LastEditTime: 2022-05-13 09:49:41
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\shared\extends\scene\ShadowMapShaderExtend.ts
 */

let isExtended = false
let createShadowReceiveFragmentShaderNative

export default class ShadowMapShaderExtend {
  static extend(viewer?: Cesium.Viewer) {
    if (isExtended) {
      return
    }

    const ShadowMapShader = Cesium['ShadowMapShader']

    createShadowReceiveFragmentShaderNative = ShadowMapShader.createShadowReceiveFragmentShader

    ShadowMapShader.createShadowReceiveFragmentShader = function (fs, shadowMap, castShadows, isTerrain, hasTerrainNormal) {
      fs = createShadowReceiveFragmentShaderNative.bind(this)(fs, shadowMap, castShadows, isTerrain, hasTerrainNormal)
      const isSpotLight = shadowMap._isSpotLight

      if (isSpotLight) {
        fs.sources[0] = `
          uniform vec4 shadowMap_viewshedVisibleColor;
          uniform vec4 shadowMap_viewshedInvisibleColor;
          ${fs.sources[0]}
        `
        fs.sources[fs.sources.length - 1] = fs.sources[fs.sources.length - 1].replace(
          'gl_FragColor.rgb *= visibility;',
          `
          float _depth = shadowPosition.z - shadowParameters.depthBias;
          float _visibility = czm_shadowDepthCompare(shadowMap_texture, shadowPosition.xy, _depth);
          gl_FragColor.rgb *= (_visibility < 0.999 ? shadowMap_viewshedInvisibleColor.rgb :shadowMap_viewshedVisibleColor.rgb);
          `
        )
        fs.sources[fs.sources.length - 1] = fs.sources[fs.sources.length - 1].replace(
          'vec3 directionEC = normalize(positionEC.xyz - shadowMap_lightPositionEC.xyz);',
          'vec3 directionEC = normalize(positionEC.xyz - shadowMap_lightPositionEC.xyz);if (distance(positionEC.xyz, shadowMap_lightPositionEC.xyz) > shadowMap_lightPositionEC.w) { return; }'
        )
      }

      return fs
    }

    isExtended = true
  }

  static revoke(viewer?: Cesium.Viewer) {
    if (!isExtended) {
      return
    }

    const ShadowMapShader = Cesium['ShadowMapShader']
    ShadowMapShader.createShadowReceiveFragmentShader = createShadowReceiveFragmentShaderNative

    isExtended = false
  }
}
