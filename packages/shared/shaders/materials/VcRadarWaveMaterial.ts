/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-23 16:53:32
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-23 16:54:23
 * @FilePath: \vue-cesium\packages\shared\shaders\materials\VcRadarWaveMaterial.ts
 */
export default `
uniform vec4 color;
uniform float speed;
uniform float globalAlpha;

#define PI 3.14159265359

float rand(vec2 co) {
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

czm_material czm_getMaterial(czm_materialInput materialInput) {
  czm_material material = czm_getDefaultMaterial(materialInput);
  vec2 st = materialInput.st;
  vec2 pos = st - vec2(0.5);
  float time = czm_frameNumber * speed / 1000.0;
  float r = length(pos);
  float t = atan(pos.y, pos.x) - time * 2.5;
  float a = (atan(sin(t), cos(t)) + PI) / (2.0 * PI);
  float ta = 0.5;
  float v = smoothstep(ta - 0.05, ta + 0.05, a) * smoothstep(ta + 0.05, ta - 0.05, a);
  vec3 colorMars3D = color.rgb * v;
  float blink = pow(sin(time * 1.5) * 0.5 + 0.5, 0.8);
  colorMars3D = color.rgb * pow(a, 8.0 * (0.2 + blink)) * (sin(r * 500.0) * 0.5 + 0.5);
  colorMars3D = colorMars3D * pow(r, 0.4);
  material.alpha = length(colorMars3D) * 1.3 * color.a * globalAlpha;
  material.diffuse = colorMars3D * 3.0;
  return material;
}
`
