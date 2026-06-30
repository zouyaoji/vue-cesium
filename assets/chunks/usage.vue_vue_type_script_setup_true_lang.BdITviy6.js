import{C as b,ag as t,E as k,J as w,K as e,L as o,Z as c,a}from"./framework.BxD_HLge.js";const N=b({__name:"usage",setup(T){const d=a(),n=a(),_=a({position:[117.217124,31.809777],radius:1500,interval:1500,color:[255,255,0,255]}),p=a({position:[117.257124,31.809777],radius:1500,interval:1500,color:[255,0,0,255]}),v=a([{fragmentShader:`
      uniform sampler2D colorTexture;
      in vec2 v_textureCoordinates;
      float hash(float x){
        return fract(sin(x*23.3)*13.13);
      }
      void main(void){
        float time = czm_frameNumber / 60.0;
        vec2 resolution = czm_viewport.zw;
        vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);
        vec3 c=vec3(.6,.7,.8);
        float a=-.4;
        float si=sin(a),co=cos(a);
        uv*=mat2(co,-si,si,co);
        uv*=length(uv+vec2(0,4.9))*.3+1.;
        float v=1.-sin(hash(floor(uv.x*100.))*2.);
        float b=clamp(abs(sin(20.*time*v+uv.y*(5./(2.+v))))-.95,0.,1.)*20.;
        c*=v*b;
        out_FragColor = mix(texture(colorTexture, v_textureCoordinates), vec4(c,1), 0.5);
      }
    `}]);function m({viewer:s}){s.scene.globe.depthTestAgainstTerrain=!0,s.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(117.237124,31.809777,1e4),orientation:{heading:Cesium.Math.toRadians(0),pitch:Cesium.Math.toRadians(-90),roll:0},duration:3})}function f(){n.value?.unload()}function g(){n.value?.load()}function y(){n.value?.reload()}return(s,R)=>{const i=t("vc-post-process-stage-scan"),C=t("vc-post-process-stage-collection"),l=t("vc-imagery-provider-tianditu"),u=t("vc-layer-imagery"),x=t("vc-viewer"),r=t("el-button"),h=t("el-row");return k(),w("div",{ref_key:"viewerContainer",ref:d,class:"demo-viewer demo-vc-post-process-stage-collection"},[e(x,{onReady:m},{default:o(()=>[e(C,{ref_key:"stage",ref:n,"post-processes":v.value},{default:o(()=>[e(i,{type:"radar",options:_.value},null,8,["options"]),e(i,{type:"circle",options:p.value},null,8,["options"])]),_:1},8,["post-processes"]),e(u,{"sort-order":20},{default:o(()=>[e(l,{"map-style":"cva_c",token:"436ce7e50d27eede2f2929307e6b33c0"})]),_:1}),e(u,{"sort-order":10},{default:o(()=>[e(l,{"map-style":"img_c",token:"436ce7e50d27eede2f2929307e6b33c0"})]),_:1})]),_:1}),e(h,{class:"demo-toolbar"},{default:o(()=>[e(r,{type:"danger",round:"",onClick:f},{default:o(()=>[c(" Unload ")]),_:1}),e(r,{type:"danger",round:"",onClick:g},{default:o(()=>[c(" Load ")]),_:1}),e(r,{type:"danger",round:"",onClick:y},{default:o(()=>[c(" Reload ")]),_:1})]),_:1})],512)}}});export{N as _};
