/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-22 11:59:12
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-22 12:06:00
 * @FilePath: \vue-cesium\packages\shared\shaders\materials\VcLineFlowColorMaterial.ts
 */
export default `
uniform vec4 color;
uniform float speed;
uniform float startTime;
uniform float percent;
uniform float alpha;
uniform float globalAlpha;

czm_material czm_getMaterial(czm_materialInput materialInput) {
  czm_material material = czm_getDefaultMaterial(materialInput);
  vec2 st = materialInput.st;
  float t = fract(startTime + czm_frameNumber * speed / 1000.0);
  t *= (1.0 + percent);
  float alphaVC = smoothstep(t - percent, t, st.s) * step(-t, -st.s);
  alphaVC += alpha;
  material.diffuse = color.rgb;
  material.alpha = alphaVC * globalAlpha;
  return material;
}
`
