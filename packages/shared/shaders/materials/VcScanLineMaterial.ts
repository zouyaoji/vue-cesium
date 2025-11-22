export default `
uniform vec4 color;
uniform float globalAlpha;
uniform float speed;

float circle(vec2 uv, float r, float blur) {
  float d = length(uv) * 2.0;
  float c = smoothstep(r + blur, r, d);
  return c;
}

czm_material czm_getMaterial(czm_materialInput materialInput) {
  czm_material material = czm_getDefaultMaterial(materialInput);
  vec2 st = materialInput.st - 0.5;
  material.diffuse = color.rgb;
  material.emission = vec3(0);

  float t = fract(czm_frameNumber * speed / 1000.0);
  float s = 0.3;
  float radiusVC = smoothstep(0.0, s, t) * 0.9;
  float alpha1 = circle(st, radiusVC, 0.01) * circle(st, radiusVC, -0.01);
  float alpha2 = circle(st, radiusVC, 0.01 - radiusVC) * circle(st, radiusVC, 0.01);
  float radius2 = 0.5 + smoothstep(s, 1.0, t) * 0.5;
  float alpha3 = circle(st, radiusVC, radius2 + 0.01 - radiusVC) * circle(st, radiusVC, -0.01);

  material.alpha = smoothstep(1.0, s, t) * (alpha1 + alpha2 * 0.1 + alpha3 * 0.1);
  material.alpha *= color.a * globalAlpha;

  return material;
}
`
