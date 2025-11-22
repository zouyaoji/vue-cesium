/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-06-22 12:52:13
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-23 09:41:36
 * @FilePath: \vue-cesium\packages\shared\shaders\materials\VcODLineMaterial.ts
 */
export default `
uniform vec4 color;
uniform vec4 bgColor;
uniform float speed;
uniform float startTime;
uniform float bidirectional;
uniform float globalAlpha;

czm_material czm_getMaterial(czm_materialInput materialInput) {
  czm_material material = czm_getDefaultMaterial(materialInput);
  vec2 st = materialInput.st;
  float t = fract(startTime + czm_frameNumber * speed / 1000.0);

  t *= 1.03;
  float alpha0 = smoothstep(t - 0.03, t, st.s) * step(st.s, t);
  float mt = 1. - t;
  float alphaVC = smoothstep(mt + 0.03, mt, st.s) * step(mt, st.s);

  float a0 = step(abs(bidirectional - 0.0) - 0.001, 0.);
  float a1 = step(abs(bidirectional - 1.0) - 0.001, 0.);
  float db = step(abs(bidirectional - 2.0) - 0.001, 0.);
  float alpha = alpha0 * (a0 + db) + alphaVC * (a1 + db);
  alpha = clamp(alpha, 0., 1.);

  material.diffuse = color.rgb * alpha + bgColor.rgb * (1. - alpha);
  material.alpha = (color.a * alpha + bgColor.a * (1. - alpha)) * globalAlpha;

    // if (useImageAndRepeat.x != 0.) {
    //     float repeat = useImageAndRepeat.y;
    //     vec4 vcImageColor = texture(image, fract(vec2(fract((st.s-t)*repeat), st.t)));
    //     material.diffuse = vcImageColor.rgb;
    //     material.alpha = vcImageColor.a;
    // }

  return material;
}
`
