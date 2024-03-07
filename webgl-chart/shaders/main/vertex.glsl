precision mediump float;

attribute vec2 a_position;
attribute vec4 a_color;

uniform vec2 u_min_value;
uniform vec2 u_max_value;
uniform vec2 u_resolution;
uniform vec2 u_chart_scale;

varying vec4 v_color;
float map(float value,float min1,float max1,float min2,float max2){
  return min2+(value-min1)*(max2-min2)/(max1-min1);
}

void main(){
  
  // '/u_resolution' => 0->1 , '*2.0' => 0->2, '-1.0' => -1->+1
  vec2 clipSpace=(vec2(
      a_position.x/u_resolution.x,
      a_position.y/u_resolution.y
    )*2.-1.);
    
    v_color=a_color;
    gl_Position=vec4(clipSpace,0,1);
  }