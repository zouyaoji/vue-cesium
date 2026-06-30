import{C as p,ag as t,E as g,J as y,K as e,L as o,Z as n,a as l}from"./framework.BDCwKKI5.js";const x=`
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
`,k=p({__name:"usage",setup(C){const i=l(),a=l();function _(){a.value?.unload()}function u(){a.value?.load()}function d(){a.value?.reload()}return(w,b)=>{const v=t("vc-post-process-stage"),c=t("vc-imagery-provider-tianditu"),s=t("vc-layer-imagery"),m=t("vc-viewer"),r=t("el-button"),f=t("el-row");return g(),y("div",{ref_key:"viewerContainer",ref:i,class:"demo-viewer demo-vc-post-process-stage"},[e(m,null,{default:o(()=>[e(v,{ref_key:"stage",ref:a,"fragment-shader":x},null,512),e(s,{"sort-order":20},{default:o(()=>[e(c,{"map-style":"cva_c",token:"436ce7e50d27eede2f2929307e6b33c0"})]),_:1}),e(s,{"sort-order":10},{default:o(()=>[e(c,{"map-style":"img_c",token:"436ce7e50d27eede2f2929307e6b33c0"})]),_:1})]),_:1}),e(f,{class:"demo-toolbar"},{default:o(()=>[e(r,{type:"danger",round:"",onClick:_},{default:o(()=>[n(" Unload ")]),_:1}),e(r,{type:"danger",round:"",onClick:u},{default:o(()=>[n(" Load ")]),_:1}),e(r,{type:"danger",round:"",onClick:d},{default:o(()=>[n(" Reload ")]),_:1})]),_:1})],512)}}});export{k as _};
