varying vec3 vNormal;
varying vec2 vUVs;
uniform float isMoving;
uniform float timeElapsed;

void main(){
  vec2 uv=vUVs;
  float yi=uv.y;
  
  float y=smoothstep(yi-.5*((sin(timeElapsed/30.)+1.)/2.),yi+.6,.5);
  vec3 color=vec3(y)*vec3(.409,.666,1.);
  gl_FragColor=vec4(color,1.);
}