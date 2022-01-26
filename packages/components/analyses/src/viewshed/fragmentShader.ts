/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-08 11:05:10
 * @LastEditTime: 2022-01-10 11:48:44
 * @LastEditors: zouyaoji
 * @Description: refer to https://blog.csdn.net/fywindmoon/article/details/108415116
 * @FilePath: \vue-cesium@next\packages\components\analyses\src\viewshed\fragmentShader.ts
 */
/**
 * 可视域分析 shadowMap shader
 */
export default `
#define USE_CUBE_MAP_SHADOW true
 uniform sampler2D colorTexture;
 uniform sampler2D depthTexture;
 varying vec2 v_textureCoordinates;
 uniform mat4 camera_projection_matrix;
 uniform mat4 camera_view_matrix;
 uniform samplerCube shadowMap_textureCube;
 uniform mat4 shadowMap_matrix;
 uniform vec4 shadowMap_lightPositionEC;
 uniform vec4 shadowMap_normalOffsetScaleDistanceMaxDistanceAndDarkness;
 uniform vec4 shadowMap_texelSizeDepthBiasAndNormalShadingSmooth;
 uniform float vc_viewDistance;
 uniform vec4 vc_visibleAreaColor;
 uniform vec4 vc_invisibleAreaColor;
 struct zx_shadowParameters
 {
     vec3 texCoords;
     float depthBias;
     float depth;
     float nDotL;
     vec2 texelStepSize;
     float normalShadingSmooth;
     float darkness;
 };
 float czm_shadowVisibility(samplerCube shadowMap, zx_shadowParameters shadowParameters)
 {
     float depthBias = shadowParameters.depthBias;
     float depth = shadowParameters.depth;
     float nDotL = shadowParameters.nDotL;
     float normalShadingSmooth = shadowParameters.normalShadingSmooth;
     float darkness = shadowParameters.darkness;
     vec3 uvw = shadowParameters.texCoords;
     depth -= depthBias;
     float visibility = czm_shadowDepthCompare(shadowMap, uvw, depth);
     return czm_private_shadowVisibility(visibility, nDotL, normalShadingSmooth, darkness);
 }
 vec4 getPositionEC(){
     return czm_windowToEyeCoordinates(gl_FragCoord);
 }
 vec3 getNormalEC(){
     return vec3(1.);
 }
 vec4 toEye(in vec2 uv,in float depth){
     vec2 xy=vec2((uv.x*2.-1.),(uv.y*2.-1.));
     vec4 posInCamera=czm_inverseProjection*vec4(xy,depth,1.);
     posInCamera=posInCamera/posInCamera.w;
     return posInCamera;
 }
 vec3 pointProjectOnPlane(in vec3 planeNormal,in vec3 planeOrigin,in vec3 point){
     vec3 v01=point-planeOrigin;
     float d=dot(planeNormal,v01);
     return(point-planeNormal*d);
 }
 float getDepth(in vec4 depth){
     float z_window=czm_unpackDepth(depth);
     z_window=czm_reverseLogDepth(z_window);
     float n_range=czm_depthRange.near;
     float f_range=czm_depthRange.far;
     return(2.*z_window-n_range-f_range)/(f_range-n_range);
 }
 float shadow(in vec4 positionEC){
     vec3 normalEC=getNormalEC();
     zx_shadowParameters shadowParameters;
     shadowParameters.texelStepSize=shadowMap_texelSizeDepthBiasAndNormalShadingSmooth.xy;
     shadowParameters.depthBias=shadowMap_texelSizeDepthBiasAndNormalShadingSmooth.z;
     shadowParameters.normalShadingSmooth=shadowMap_texelSizeDepthBiasAndNormalShadingSmooth.w;
     shadowParameters.darkness=shadowMap_normalOffsetScaleDistanceMaxDistanceAndDarkness.w;
     vec3 directionEC=positionEC.xyz-shadowMap_lightPositionEC.xyz;
     float distance=length(directionEC);
     directionEC=normalize(directionEC);
     float radius=shadowMap_lightPositionEC.w;
     if(distance>radius)
     {
         return 2.0;
     }
     vec3 directionWC=czm_inverseViewRotation*directionEC;
     shadowParameters.depth=distance/radius-0.0003;
     shadowParameters.nDotL=clamp(dot(normalEC,-directionEC),0.,1.);
     shadowParameters.texCoords=directionWC;
     float visibility=czm_shadowVisibility(shadowMap_textureCube,shadowParameters);
     return visibility;
 }
 bool visible(in vec4 result)
 {
     result.x/=result.w;
     result.y/=result.w;
     result.z/=result.w;
     return result.x>=-1.&&result.x<=1.
     &&result.y>=-1.&&result.y<=1.
     &&result.z>=-1.&&result.z<=1.;
 }
 void main(){
     // 釉色 = 结构二维(颜色纹理, 纹理坐标)
     gl_FragColor = texture2D(colorTexture, v_textureCoordinates);
     // 深度 = 获取深度(结构二维(深度纹理, 纹理坐标))
     float depth = getDepth(texture2D(depthTexture, v_textureCoordinates));
     // 视角 = (纹理坐标, 深度)
     vec4 viewPos = toEye(v_textureCoordinates, depth);
     // 世界坐标
     vec4 wordPos = czm_inverseView * viewPos;
     // 虚拟相机中坐标
     vec4 vcPos = camera_view_matrix * wordPos;
     float near = .001 * vc_viewDistance;
     float dis = length(vcPos.xyz);
     if(dis > near && dis < vc_viewDistance){
         // 透视投影
         vec4 posInEye = camera_projection_matrix * vcPos;
         // 可视区颜色
         // vec4 vc_visibleAreaColor=vec4(0.,1.,0.,.5);
         // vec4 vc_invisibleAreaColor=vec4(1.,0.,0.,.5);
         if(visible(posInEye)){
             float vis = shadow(viewPos);
             if(vis > 0.3){
                 gl_FragColor = mix(gl_FragColor,vc_visibleAreaColor,.5);
             } else{
                 gl_FragColor = mix(gl_FragColor,vc_invisibleAreaColor,.5);
             }
         }
     }
 }
`
