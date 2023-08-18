/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-08-17 00:10:56
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2023-08-17 00:15:37
 * @FilePath: \vue-cesium\packages\shared\shaders\materials\LineFlowMaterial.ts
 */
export default `
uniform float globalAlpha;
uniform bool axisY;
uniform bool mixt;

czm_material czm_getMaterial(czm_materialInput materialInput) {
  czm_material material = czm_getDefaultMaterial(materialInput);
  vec2 st = repeat * materialInput.st;

  vec4 colorImage;
  if (speed != 0.0) {
    float currTime;
    if (time < 0.0) {
      currTime = speed * czm_frameNumber / 1000.0;
    } else {
      currTime = time;
    }
    colorImage = texture(image, vec2(fract((axisY ? st.t : st.s) - currTime), st.t));
  } else {
    colorImage = texture(image, st);
  }

  if (color.a == 0.0) {
    if (colorImage.rgb == vec3(1.0)) {
      discard;
    }
  }

  if (color.rgb == vec3(1.0)) {
    material.alpha = colorImage.a * globalAlpha;
    material.diffuse = colorImage.rgb;
  } else {
    material.alpha = colorImage.a * color.a * globalAlpha;
    if (mixt)
      material.diffuse = max(colorImage.rgb * color.rgb * material.alpha * 3.0, colorImage.rgb * color.rgb);
    else
      material.diffuse = max(color.rgb * material.alpha * 3.0, color.rgb);
  }

  if (hasImage2) {
    vec4 colorBG = texture(image2, materialInput.st);
    if (colorBG.a > 0.5) {
      material.diffuse = color2.rgb;
    }
  }
  return material;
}
`
