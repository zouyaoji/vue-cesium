/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-29 17:43:24
 * @LastEditTime: 2023-03-09 16:36:44
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium@next\packages\shared\shaders\Viewshed.ts
 */
export default `
  uniform sampler2D colorTexture;
  uniform vec4 u_color1;
  uniform vec4 u_color2;
  uniform float u_isShed;
  uniform sampler2D shadowMap_depthTexture;
  uniform mat4 shadowMap_matrix;
  uniform vec4 shadowMap_lightPositionEC;
  uniform vec3 shadowMap_lightDirectionEC;
  uniform float u_radius;
  uniform vec4 shadowMap_normalOffsetScaleDistanceMaxDistanceAndDarkness;
  uniform vec4 shadowMap_texelSizeDepthBiasAndNormalShadingSmooth;
  uniform float czzj;
  uniform float dis;
  uniform float spzj;
  uniform float mixNum;
  uniform vec3 shadowMap_lightUp;
  uniform vec3 shadowMap_lightDir;
  uniform vec3 shadowMap_lightRight;
  in vec2 v_textureCoordinates;
  vec4 toEye(in vec2 uv, in float depth){
    vec2 xy = vec2((uv.x * 2.0 - 1.0),(uv.y * 2.0 - 1.0));
    vec4 posInCamera = czm_inverseProjection * vec4(xy, depth, 1.0);
    posInCamera =posInCamera / posInCamera.w;
    return posInCamera;
  }
  float getDepth(in vec4 depth){
    float z_window = czm_unpackDepth(depth);
    z_window = czm_reverseLogDepth(z_window);
    float n_range = czm_depthRange.near;
    float f_range = czm_depthRange.far;
    return (2.0 * z_window - n_range - f_range) / (f_range - n_range);
  }
  float _czm_sampleShadowMap(sampler2D shadowMap, vec2 uv){
    return texture(shadowMap, uv).r;
  }
  float _czm_shadowDepthCompare(sampler2D shadowMap, vec2 uv, float depth){
    return step(depth, _czm_sampleShadowMap(shadowMap, uv));
  }
  float _czm_shadowVisibility(sampler2D shadowMap, czm_shadowParameters shadowParameters){
    float depthBias = shadowParameters.depthBias;
    float depth = shadowParameters.depth;
    float nDotL = shadowParameters.nDotL;
    float normalShadingSmooth = shadowParameters.normalShadingSmooth;
    float darkness = shadowParameters.darkness;
    vec2 uv = shadowParameters.texCoords;
    depth -= depthBias;
    vec2 texelStepSize = shadowParameters.texelStepSize;
    float radius = 1.0;
    float dx0 = -texelStepSize.x * radius;
    float dy0 = -texelStepSize.y * radius;
    float dx1 = texelStepSize.x * radius;
    float dy1 = texelStepSize.y * radius;
    float visibility =
    (
    _czm_shadowDepthCompare(shadowMap, uv, depth)
    +_czm_shadowDepthCompare(shadowMap, uv + vec2(dx0, dy0), depth) +
    _czm_shadowDepthCompare(shadowMap, uv + vec2(0.0, dy0), depth) +
    _czm_shadowDepthCompare(shadowMap, uv + vec2(dx1, dy0), depth) +
    _czm_shadowDepthCompare(shadowMap, uv + vec2(dx0, 0.0), depth) +
    _czm_shadowDepthCompare(shadowMap, uv + vec2(dx1, 0.0), depth) +
    _czm_shadowDepthCompare(shadowMap, uv + vec2(dx0, dy1), depth) +
    _czm_shadowDepthCompare(shadowMap, uv + vec2(0.0, dy1), depth) +
    _czm_shadowDepthCompare(shadowMap, uv + vec2(dx1, dy1), depth)
    ) * (1.0 / 9.0)
    ;
    return visibility;
  }
  vec3 pointProjectOnPlane(in vec3 planeNormal, in vec3 planeOrigin, in vec3 point){
    vec3 v01 = point -planeOrigin;
    float d = dot(planeNormal, v01) ;
    return (point - planeNormal * d);
  }
  float ptm(vec3 pt){
    return sqrt(pt.x*pt.x + pt.y*pt.y + pt.z*pt.z);
  }
  void main()
  {
    const float PI = 3.141592653589793;
    vec4 color = texture(colorTexture, v_textureCoordinates);
    out_FragColor = color;
    if ( u_isShed < 0.5 )
        return;
    vec4 currD = texture(czm_globeDepthTexture, v_textureCoordinates);
    if( currD.r >= 1.0 )
        return;

    float depth = getDepth(currD);
    vec4 positionEC = toEye(v_textureCoordinates, depth);
    vec3 normalEC = vec3(1.0);
    czm_shadowParameters shadowParameters;
    shadowParameters.texelStepSize = shadowMap_texelSizeDepthBiasAndNormalShadingSmooth.xy;
    shadowParameters.depthBias = shadowMap_texelSizeDepthBiasAndNormalShadingSmooth.z;
    shadowParameters.normalShadingSmooth = shadowMap_texelSizeDepthBiasAndNormalShadingSmooth.w;
    shadowParameters.darkness = shadowMap_normalOffsetScaleDistanceMaxDistanceAndDarkness.w;
    shadowParameters.depthBias *= max(depth * 0.01, 1.0);
    vec3 directionEC = normalize(positionEC.xyz - shadowMap_lightPositionEC.xyz);
    float nDotL = clamp(dot(normalEC, -directionEC), 0.0, 1.0);
    vec4 shadowPosition = shadowMap_matrix * positionEC;
    shadowPosition /= shadowPosition.w;
    if (any(lessThan(shadowPosition.xyz, vec3(0.0))) || any(greaterThan(shadowPosition.xyz, vec3(1.0))))
      return;

    vec4 lw = czm_inverseView* vec4(shadowMap_lightPositionEC.xyz, 1.0);
    vec4 vw = czm_inverseView* vec4(positionEC.xyz, 1.0);
    if(distance(lw.xyz,vw.xyz)> u_radius)
        return;

    shadowParameters.texCoords = shadowPosition.xy;
    shadowParameters.depth = shadowPosition.z;
    shadowParameters.nDotL = nDotL;
    float visibility = _czm_shadowVisibility(shadowMap_depthTexture, shadowParameters);
    if(visibility > 0.3 ){
      out_FragColor = mix(color,vec4(u_color1.rgb, 1.0),mixNum);
    }
    else{
      if(abs(shadowPosition.z-0.0)<0.01){
        return;
      }
      out_FragColor = mix(color,vec4(u_color2.rgb, 1.0),mixNum);
    }
  }
`
