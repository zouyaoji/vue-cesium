export default `
uniform vec4 color;
uniform float dashLength;
uniform float dashPower;
uniform float centerPower;
uniform float dashPattern;
uniform float maskLength;
uniform float globalAlpha;

in float v_polylineAngle;

mat2 rotateMars3D(float rad) {
  float c = cos(rad);
  float s = sin(rad);
  return mat2(c, s, -s, c);
}

czm_material czm_getMaterial(czm_materialInput materialInput) {
  czm_material material = czm_getDefaultMaterial(materialInput);

  vec2 pos = rotateMars3D(v_polylineAngle) * gl_FragCoord.xy;
  vec2 st = materialInput.st;

  float centerGlowMars3D = dashPower / abs(st.t - 0.5) - (dashPower / 0.5) - 1.0;
  float dashPositionMars3D = fract(pos.x / (dashLength * czm_pixelRatio));
  dashPositionMars3D = abs((dashPositionMars3D - 0.5) * 2.0);

  // 绘制虚线
  if (centerGlowMars3D > 0.0) {
    float maskIndex = floor(dashPositionMars3D * maskLength);
    float maskTest = floor(dashPattern / pow(2.0, maskIndex));
    if ((mod(maskTest, 2.0) < 1.0)) {
      discard;
    }

    material.emission = color.rgb;
    material.alpha = color.a * globalAlpha;
    return material;
  }

  // 绷绘中心线
  if (dashPositionMars3D < centerPower) {
    material.emission = color.rgb;
    material.alpha = color.a * globalAlpha;
    return material;
  }

  discard;
}
`
