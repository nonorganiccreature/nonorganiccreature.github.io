varying vec3 vNormal;
varying vec2 vUVs;
uniform float isMoving;
uniform float timeElapsed;

float sdCircle(vec2 p,float r)
{
  return length(p)-r;
}

void main(){
  vec2 uv=vUVs;
  
  uv*=2.;
  uv.x-=1.+mod(timeElapsed/1.,1.)*.6;
  uv.y-=1.-mod(timeElapsed/1.,1.)*.8;
  
  float xi=uv.x;
  float yi=uv.y;
  
  float sdValue=sdCircle(vec2(xi,yi),.1);
  vec3 result=mix(vec3(1.,.984,.309),vec3(0.),smoothstep(.01,.1,sdValue));
  
  uv=vUVs;
  
  uv*=2.;
  uv-=.8-mod(timeElapsed/1.,1.)*.5;
  
  xi=uv.x;
  yi=uv.y;
  
  float sdValue2=sdCircle(vec2(xi,yi),.15);
  vec3 result2=mix(vec3(1.,.984,.309),vec3(0.),smoothstep(.01,.15,sdValue2));
  
  uv=vUVs;
  
  uv*=2.;
  uv.x-=1.1+mod(timeElapsed/1.,1.)*.6;
  uv.y-=1.1+mod(timeElapsed/1.,1.)*.3;
  
  xi=uv.x;
  yi=uv.y;
  
  float sdValue3=sdCircle(vec2(xi,yi),.07);
  vec3 result3=mix(vec3(1.,.984,.309),vec3(0.),smoothstep(.01,.1,sdValue3));
  
  uv=vUVs;
  uv*=2.;
  uv.x-=1.1-mod(timeElapsed/1.,1.)*.2;
  uv.y-=1.1+mod(timeElapsed/1.,1.)*.5;
  
  xi=uv.x;
  yi=uv.y;
  
  float sdValue4=sdCircle(vec2(xi,yi),.12);
  vec3 result4=mix(vec3(1.,.984,.309),vec3(0.),smoothstep(.03,.12,sdValue4));
  
  vec3 finalResult1=result;
  vec3 finalResult2=result2;
  vec3 finalResult3=result3;
  vec3 finalResult4=result4;
  
  gl_FragColor=vec4(finalResult1+finalResult2+finalResult3+finalResult4,(1.-timeElapsed/1.4));
}