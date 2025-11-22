export default `
uniform vec4 color;
uniform float dashLength;
uniform float dashPattern;

uniform vec4 sidesColor;
uniform float sidesDashLength;
uniform float globalAlpha;

in float v_polylineAngle;

const float maskLength = 16.0;

mat2 rotateMars3D(float rad) {
  float c = cos(rad);
  float s = sin(rad);
  return mat2(c, s, -s, c);
}

czm_material czm_getMaterial(czm_materialInput materialInput) {
  czm_material material = czm_getDefaultMaterial(materialInput);

  vec2 pos = rotateMars3D(v_polylineAngle) * gl_FragCoord.xy;
  vec2 st = materialInput.st;

  float centerGlow = widthRatio / abs(st.t - 0.5) - (widthRatio / 0.5) - 1.0;
  if (centerGlow > 0.0) {
    float dashPosition = fract(pos.x / (dashLength * czm_pixelRatio));
    float maskIndex = floor(dashPosition * maskLength);
    float maskTest = floor(dashPattern / pow(2.0, maskIndex));
    if ((mod(maskTest, 2.0) < 1.0)) {
      discard;
    }

    material.emission = color.rgb;
    material.alpha = color.a;
    return material;
  }

  float sidesGlow = (1.0 - sidesWidthRatio) / abs(st.t - 0.5) - ((1.0 - sidesWidthRatio) / 0.5) - 1.0;
  if (sidesGlow < 0.0) {
    float dashPosition = fract(pos.x / (sidesDashLength * czm_pixelRatio));
    float maskIndex = floor(dashPosition * maskLength);
    float maskTest = floor(dashPattern / pow(2.0, maskIndex));
    if ((mod(maskTest, 2.0) < 1.0)) {
      discard;
    }

    material.emission = sidesColor.rgb;
    material.alpha = sidesColor.a * globalAlpha;
    return material;
  }

  discard;
}
`
