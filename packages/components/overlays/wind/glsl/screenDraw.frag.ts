/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-28 09:20:11
 * @LastEditTime: 2023-06-12 18:10:22
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\overlays\wind\glsl\screenDraw.frag.ts
 */
const text = `
uniform sampler2D trailsColorTexture;
uniform sampler2D trailsDepthTexture;

in vec2 textureCoordinate;

void main() {
  vec4 trailsColor = texture(trailsColorTexture, textureCoordinate);
  float trailsDepth = texture(trailsDepthTexture, textureCoordinate).r;
  float globeDepth = czm_unpackDepth(texture(czm_globeDepthTexture, textureCoordinate));

  if (trailsDepth < globeDepth) {
    out_FragColor = trailsColor;
  } else {
    out_FragColor = vec4(0.0);
  }
}
`
export default text
