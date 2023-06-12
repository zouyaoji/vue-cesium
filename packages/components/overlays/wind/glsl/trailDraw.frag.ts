/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-28 09:20:11
 * @LastEditTime: 2021-10-28 10:05:07
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\overlays\wind\glsl\trailDraw.ts
 */
const text = `

uniform sampler2D segmentsColorTexture;
uniform sampler2D segmentsDepthTexture;

uniform sampler2D currentTrailsColor;
uniform sampler2D trailsDepthTexture;

uniform float fadeOpacity;

in vec2 textureCoordinate;

void main() {
  vec4 pointsColor = texture(segmentsColorTexture, textureCoordinate);
  vec4 trailsColor = texture(currentTrailsColor, textureCoordinate);

  trailsColor = floor(fadeOpacity * 255.0 * trailsColor) / 255.0; // make sure the trailsColor will be strictly decreased

  float pointsDepth = texture(segmentsDepthTexture, textureCoordinate).r;
  float trailsDepth = texture(trailsDepthTexture, textureCoordinate).r;
  float globeDepth = czm_unpackDepth(texture(czm_globeDepthTexture, textureCoordinate));

  out_FragColor = vec4(0.0);
  if (pointsDepth < globeDepth) {
    out_FragColor = out_FragColor + pointsColor;
  }
  if (trailsDepth < globeDepth) {
    out_FragColor = out_FragColor + trailsColor;
  }
  gl_FragDepth = min(pointsDepth, trailsDepth);
}
`
export default text
