/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-23 16:55:40
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-23 16:56:34
 * @FilePath: \vue-cesium\packages\shared\shaders\materials\VcRectSlideMaterial.ts
 */
export default `
uniform float globalAlpha;
uniform sampler2D image;
uniform vec4 color;
uniform float speed;
uniform bool pure;
uniform float diffusePower;

czm_material czm_getMaterial(czm_materialInput materialInput) {
  czm_material material = czm_getDefaultMaterial(materialInput);
  vec2 st = materialInput.st;
  vec4 imageMars3D = texture(image, vec2(fract(st.s + czm_frameNumber * speed / 1000.0), fract(st.t)));

  material.alpha = imageMars3D.a * color.a * globalAlpha;
  if(pure) {
    material.diffuse = diffusePower * color.rgb;
  } else {
    material.diffuse = imageMars3D.rgb;
  }
  return material;
}
`
