/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-16 19:29:57
 * @LastEditTime: 2023-03-03 17:49:19
 * @LastEditors: zouyaoji 370681295@qq.com
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
        const webgl2 = viewer.scene.context?.webgl2
        fs.sources[fs.sources.length - 1] = fs.sources[fs.sources.length - 1].replace(
          `${webgl2 ? 'out_FragColor' : 'gl_FragColor'}.rgb *= visibility;`,
          `
          float _depth = shadowPosition.z - shadowParameters.depthBias;
          float _visibility = czm_shadowDepthCompare(shadowMap_texture, shadowPosition.xy, _depth);
          ${
            webgl2 ? 'out_FragColor' : 'gl_FragColor'
          }.rgb *= (_visibility < 0.999 ? shadowMap_viewshedInvisibleColor.rgb :shadowMap_viewshedVisibleColor.rgb);
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
