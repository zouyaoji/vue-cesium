export default `uniform vec4 color;
uniform float speed;
uniform float globalAlpha;

czm_material czm_getMaterial(czm_materialInput materialInput) {
  czm_material material = czm_getDefaultMaterial(materialInput);
  vec2 st = materialInput.st * 2.0 - 1.0;
  float t = czm_frameNumber * speed / 1000.0;
  vec3 colMars3D = vec3(0.0);
  vec2 p = vec2(sin(t), cos(t));
  float d = length(st - dot(p, st) * p);
  if(dot(st, p) < 0.0) {
    d = length(st);
  }

  colMars3D = 0.006 / d * color.rgb;

  if(distance(st, vec2(0.0)) > 0.99) {
    colMars3D = color.rgb;
  }

  material.alpha = pow(length(colMars3D), 2.0) * globalAlpha;
  material.diffuse = colMars3D * 3.0;
  return material;
}
`
