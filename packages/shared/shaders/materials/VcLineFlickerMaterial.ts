/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-22 16:45:36
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-22 16:45:49
 * @FilePath: \vue-cesium\packages\shared\shaders\materials\VcLineFlickerMaterial.ts
 */
export default `
uniform vec4 color;
uniform float speed;
uniform float globalAlpha;

czm_material czm_getMaterial(czm_materialInput materialInput) {
  czm_material material = czm_getDefaultMaterial(materialInput);
  float time = fract(czm_frameNumber * speed / 1000.0);
  vec2 st = materialInput.st;
  float scalarMars3D = smoothstep(0.0, 1.0, time);
  material.diffuse = color.rgb * scalarMars3D;
  material.alpha = color.a * scalarMars3D * globalAlpha;
  return material;
}
`
