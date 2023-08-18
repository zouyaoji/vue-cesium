/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-08-18 01:00:48
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2023-08-18 01:01:56
 * @FilePath: \vue-cesium\packages\shared\shaders\materials\VcCircleWaveMaterial.ts
 */
export default `
czm_material czm_getMaterial(czm_materialInput materialInput) {
czm_material material = czm_getDefaultMaterial(materialInput);
material.diffuse = 1.5 * color.rgb;
vec2 st = materialInput.st;
vec3 str = materialInput.str;
float dis = distance(st, vec2(0.5, 0.5));
float per = fract(time);
if (abs(str.z) > 0.001) {
  discard;
}
if (dis > 0.5) {
  discard;
} else {
  float perDis = 0.5 / count;
  float disNum;
  float bl = .0;
  for (int i = 0; i <= 9; i++) {
    if (float(i) <= count) {
      disNum = perDis *float(i) - dis + per / count;
      if (disNum > 0.0) {
        if (disNum < perDis) {
          bl = 1.0 - disNum / perDis;
        } else if(disNum - perDis < perDis) {
          bl = 1.0 - abs(1.0 - disNum / perDis);
        }
        material.alpha = pow(bl, gradient);
      }
    }
  }
}
return material;
}`
