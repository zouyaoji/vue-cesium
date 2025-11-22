/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-23 16:33:39
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-23 16:34:24
 * @FilePath: \vue-cesium\packages\shared\shaders\materials\VcLineBloomMaterial.ts
 */
export default `
uniform vec4 color;
uniform float speed;
uniform float glow;
uniform float globalAlpha;

czm_material czm_getMaterial(czm_materialInput materialInput) {
  czm_material material = czm_getDefaultMaterial(materialInput);

  vec2 st = materialInput.st;
  float t = fract(speed * czm_frameNumber / 1000.0);
  t *= 1.03;

  float alphaMars3D = smoothstep(t - 0.03, t, st.s) * step(-t, -st.s);
  alphaMars3D += 0.1;

  vec4 fragColor;
  fragColor.rgb = (color.rgb) / 0.5;
  fragColor = czm_gammaCorrect(fragColor);
  material.diffuse = fragColor.rgb;
  material.alpha = alphaMars3D * globalAlpha;
  material.emission = fragColor.rgb * glow;
  return material;
}
`
