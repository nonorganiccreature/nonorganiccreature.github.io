varying vec3 vNormal;
varying vec2 vUVs;
uniform float isMoving;
uniform float timeElapsed;

void main(){
  vec2 uv=vUVs;
  float yi=uv.y;
  
  float y=smoothstep(yi,yi+.6,.5);
  float yUp=smoothstep(yi-.1,yi+.6,.8);
  
  vec3 color=vec3(1.-y)*vec3(.9137,.902,.1882);
  vec3 colorUp=vec3(yUp)*vec3(.9137,.902,.1882);
  
  vec3 result=mix(colorUp,color,1.-yi);
  // color = vec3(st.x,st.y,abs(sin(u_time)));
  
  gl_FragColor=vec4(result,1.);
}