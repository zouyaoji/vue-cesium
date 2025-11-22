/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-23 09:42:32
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2025-03-31 00:17:04
 * @FilePath: \vue-cesium\packages\shared\shaders\materials\VcCircleScanMaterial.ts
 */
export default `
uniform vec4 color;
uniform sampler2D image;
uniform float globalAlpha;

czm_material czm_getMaterial(czm_materialInput materialInput) {
  czm_material material = czm_getDefaultMaterial(materialInput);
  vec2 st = materialInput.st;
  vec4 imgVC = texture(image, st);
  if (imgVC.a > 0.0) {
    material.diffuse = color.rgb;
  }
  material.alpha = imgVC.a * color.a * globalAlpha;
  return material;
}
`
