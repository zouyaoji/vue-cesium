/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-23 16:28:24
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-23 16:28:30
 * @FilePath: \vue-cesium\packages\shared\shaders\materials\A.ts
 */
export default `
precision highp float;
precision highp int;

#define pi 3.1415926535
#define PI2RAD 0.01745329252
#define TWO_PI (2. * PI)

uniform vec4 vccolor;
uniform float speed;
uniform float globalAlpha;

float time;
float rands(float p) {
  return fract(sin(p) * 10000.0);
}
float noise(vec2 p) {
  float t = time / 20000.0;
  if(t > 1.0)
    t -= floor(t);
  return rands(p.x * 14. + p.y * sin(t) * 0.5);
}
vec2 sw(vec2 p) {
  return vec2(floor(p.x), floor(p.y));
}
vec2 se(vec2 p) {
  return vec2(ceil(p.x), floor(p.y));
}
vec2 nw(vec2 p) {
  return vec2(floor(p.x), ceil(p.y));
}
vec2 ne(vec2 p) {
  return vec2(ceil(p.x), ceil(p.y));
}
float smoothNoise(vec2 p) {
  vec2 inter = smoothstep(0.0, 1.0, fract(p));
  float s = mix(noise(sw(p)), noise(se(p)), inter.x);
  float n = mix(noise(nw(p)), noise(ne(p)), inter.x);
  return mix(s, n, inter.y);
}
float fbmVC(vec2 p) {
  float z = 2.0;
  float rz = 0.0;
  vec2 bp = p;
  for(float i = 1.0; i < 6.0; i++) {
    rz += abs((smoothNoise(p) - 0.5) * 2.0) / z;
    z *= 2.0;
    p *= 2.0;
  }
  return rz;
}
czm_material czm_getMaterial(czm_materialInput materialInput) {
  czm_material material = czm_getDefaultMaterial(materialInput);
  vec2 vUv = materialInput.st;
  time = czm_frameNumber * speed / 100.0;

  vec2 uv = vUv;
  vec2 uv2 = vUv;
  uv *= 4.0;
  float rz = fbmVC(uv);
  uv /= exp(mod(time * 2.0, pi));
  rz *= pow(15.0, 1.0);
  vec4 vccolor = mix(vec4(color.rgb, 1.0) / rz, vec4(color.rgb, 0.1), 0.5);
  if(uv2.x < 0.05) {
    vccolor = mix(vec4(color.rgb, 0.1), vccolor, uv2.x / 0.05);
  }
  if(uv2.x > 0.95) {
    vccolor = mix(vccolor, vec4(color.rgb, 0.1), (uv2.x - 0.95) / 0.05);
  }

  material.alpha = vccolor.a * 2.0 * globalAlpha;
  material.diffuse = max(vccolor.rgb + vccolor.rgb * material.alpha, vccolor.rgb);

  return material;
}
`
