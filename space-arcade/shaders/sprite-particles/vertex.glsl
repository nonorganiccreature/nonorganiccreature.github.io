uniform float pointMultiplier;

attribute float size;
attribute float angle;
attribute vec4 colour;

varying vec4 vColor;
varying vec2 vAngle;

void main(){
  vec4 mvPosition=modelViewMatrix*vec4(position,1.);
  
  gl_Position=projectionMatrix*mvPosition;
  gl_PointSize=size*pointMultiplier/gl_Position.w;
  
  vAngle=vec2(cos(angle),sin(angle));
  vColor=colour;
}
