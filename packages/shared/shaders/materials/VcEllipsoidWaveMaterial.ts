/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-23 16:26:16
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-23 16:26:58
 * @FilePath: \vue-cesium\packages\shared\shaders\materials\VcEllipsoidWaveMaterial.ts
 */
export default `
uniform vec4 color;
uniform float speed;
uniform float globalAlpha;

czm_material czm_getMaterial(czm_materialInput materialInput) {
  czm_material material = czm_getDefaultMaterial(materialInput);
  vec2 st = materialInput.st;
  float time = fract(czm_frameNumber * speed / 1000.0);
  float alphaVC = abs(smoothstep(0.5, 1.0, fract(-st.t - time)));
  alphaVC += 0.1;
  material.alpha = alphaVC * globalAlpha;
  material.diffuse = color.rgb;
  return material;
}
`
