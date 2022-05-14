export default `
  uniform sampler2D colorTexture;
  uniform sampler2D depthTexture;
  varying vec2 v_textureCoordinates;
  uniform vec4 u_scanCenterEC;
  uniform vec3 u_scanPlaneNormalEC;
  uniform vec3 u_scanLineNormalEC;
  uniform float u_radius;
  uniform vec4 u_scanColor;
  vec4 toEye(in vec2 uv, in float depth)
  {
    vec2 xy = vec2((uv.x * 2.0 - 1.0),(uv.y * 2.0 - 1.0));
    vec4 posInCamera =czm_inverseProjection * vec4(xy, depth, 1.0);
    posInCamera =posInCamera / posInCamera.w;
    return posInCamera;
  }
  bool isPointOnLineRight(in vec3 ptOnLine, in vec3 lineNormal, in vec3 testPt)
  {
    vec3 v01 = testPt - ptOnLine;
    normalize(v01);
    vec3 temp = cross(v01, lineNormal);
    float d = dot(temp, u_scanPlaneNormalEC);
    return d > 0.5;
  }
  vec3 pointProjectOnPlane(in vec3 planeNormal, in vec3 planeOrigin, in vec3 point)
  {
    vec3 v01 = point -planeOrigin;
    float d = dot(planeNormal, v01) ;
    return (point - planeNormal * d);
  }
  float distancePointToLine(in vec3 ptOnLine, in vec3 lineNormal, in vec3 testPt)
  {
    vec3 tempPt = pointProjectOnPlane(lineNormal, ptOnLine, testPt);
    return length(tempPt - ptOnLine);
  }
  float getDepth(in vec4 depth)
  {
    float z_window = czm_unpackDepth(depth);
    z_window = czm_reverseLogDepth(z_window);
    float n_range = czm_depthRange.near;
    float f_range = czm_depthRange.far;
    return (2.0 * z_window - n_range - f_range) / (f_range - n_range);
  }
  void main()
  {
    gl_FragColor = texture2D(colorTexture, v_textureCoordinates);
    float depth = getDepth( texture2D(depthTexture, v_textureCoordinates));
    vec4 viewPos = toEye(v_textureCoordinates, depth);
    vec3 prjOnPlane = pointProjectOnPlane(u_scanPlaneNormalEC.xyz, u_scanCenterEC.xyz, viewPos.xyz);
    float dis = length(prjOnPlane.xyz - u_scanCenterEC.xyz);
    float twou_radius = u_radius * 2.0;
    if(dis < u_radius)
    {
      float f0 = 1.0 -abs(u_radius - dis) / u_radius;
      f0 = pow(f0, 64.0);
      vec3 lineEndPt = vec3(u_scanCenterEC.xyz) + u_scanLineNormalEC * u_radius;
      float f = 0.0;
      if(isPointOnLineRight(u_scanCenterEC.xyz, u_scanLineNormalEC.xyz, prjOnPlane.xyz))
      {
        float dis1= length(prjOnPlane.xyz - lineEndPt);
        f = abs(twou_radius -dis1) / twou_radius;
        f = pow(f, 3.0);
      }
      gl_FragColor = mix(gl_FragColor, u_scanColor, f + f0);
    }
  }
`
