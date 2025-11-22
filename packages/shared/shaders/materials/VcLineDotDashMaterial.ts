/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-22 16:43:05
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-22 16:43:24
 * @FilePath: \vue-cesium\packages\shared\shaders\materials\VcLineDotDashMaterial.ts
 */
export default `
uniform vec4 color;
uniform vec4 gapColor;
uniform float dashLength;
uniform float dashPattern;
in float v_polylineAngle;

const float maskLength = 16.0;

mat2 rotate(float rad) {
  float c = cos(rad);
  float s = sin(rad);
  return mat2(c, s, -s, c);
}

czm_material czm_getMaterial(czm_materialInput materialInput) {
  czm_material material = czm_getDefaultMaterial(materialInput);

  vec2 pos = rotate(v_polylineAngle) * gl_FragCoord.xy;

  float dashPosition = fract(pos.x / (dashLength * czm_pixelRatio));
  float maskIndex = floor(dashPosition * maskLength);
  float maskTest = floor(dashPattern / pow(2.0, maskIndex));

  vec4 colorMars3D = (mod(maskTest, 2.0) < 1.0) ? gapColor : color;
  if (colorMars3D.a < 0.005) {
    float dashPosition2 = fract(pos.x / (dashLength * 0.25 * czm_pixelRatio));
    float maskIndex2 = floor(dashPosition2 * maskLength);
    float maskTest2 = floor(dashPattern / pow(2.0, maskIndex2));
    colorMars3D = (mod(maskTest2, 2.0) < 1.0) ? gapColor : color;
    if (colorMars3D.a < 0.005) {
      discard;
    }
  }

  colorMars3D = czm_gammaCorrect(colorMars3D);
  material.emission = colorMars3D.rgb;
  material.alpha = colorMars3D.a;
  return material;
}
`
