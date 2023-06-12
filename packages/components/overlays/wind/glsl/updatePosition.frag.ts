/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-28 09:20:11
 * @LastEditTime: 2021-10-28 10:05:45
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\overlays\wind\glsl\updatePosition.ts
 */
const text = `
uniform sampler2D currentParticlesPosition; // (lon, lat, lev)
uniform sampler2D particlesSpeed; // (u, v, w, norm) Unit converted to degrees of longitude and latitude

in vec2 v_textureCoordinates;

void main() {
  // texture coordinate must be normalized
  vec3 lonLatLev = texture(currentParticlesPosition, v_textureCoordinates).rgb;
  vec3 speed = texture(particlesSpeed, v_textureCoordinates).rgb;
  vec3 nextParticle = lonLatLev + speed;

  out_FragColor = vec4(nextParticle, 0.0);
}
`
export default text
