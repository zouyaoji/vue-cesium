/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-08-17 00:10:56
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-23 18:39:05
 * @FilePath: \vue-cesium\packages\shared\shaders\materials\VcLineTrailColorMaterial.ts
 */

export default `
uniform vec4 bgColor;
uniform vec4 color;
uniform float speed;
uniform float globalAlpha;

czm_material czm_getMaterial(czm_materialInput materialInput) {
  czm_material material = czm_getDefaultMaterial(materialInput);
  vec2 st = materialInput.st;
  float time = fract(czm_frameNumber * speed / 1000.0);

  vec3 colorMars3D = color.rgb;
  if(st.t > 0.45 && st.t < 0.55) {
    colorMars3D = vec3(1.0);
  }
  material.alpha = color.a * 1.5 * smoothstep(0.0, 1.0, fract(st.s - time));
  material.diffuse = max(colorMars3D.rgb * material.alpha, colorMars3D.rgb);

  if(material.alpha < bgColor.a) {
    material.alpha = bgColor.a;
    material.diffuse = bgColor.rgb;
  }
  material.alpha = material.alpha * globalAlpha;

  return material;
}
`
