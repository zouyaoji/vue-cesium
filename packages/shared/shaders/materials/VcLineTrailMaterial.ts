/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-08-17 00:10:56
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-02-29 00:35:07
 * @FilePath: \vue-cesium\packages\shared\shaders\materials\VcLineTrailMaterial.ts
 */
export default `
czm_material czm_getMaterial(czm_materialInput materialInput)
{
  czm_material material = czm_getDefaultMaterial(materialInput);
  vec2 st = materialInput.st;
  vec4 colorImage = texture(image, vec2(fract(st.s - time), st.t));
  material.alpha = colorImage.a * color.a;
  material.diffuse = (colorImage.rgb+color.rgb)/2.0;
  return material;
}
`
