uniform sampler2D diffuseTexture;

varying vec4 vColor;
varying vec2 vAngle;

void main(){
  vec2 coords=(gl_PointCoord-.5)*mat2(vAngle.x,vAngle.y,-vAngle.y,vAngle.x)+.5;
  gl_FragColor=texture2D(diffuseTexture,coords)*vColor;
}
