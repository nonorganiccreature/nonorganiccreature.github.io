varying vec3 vNormal;
varying vec2 vUVs;
uniform float isMoving;
uniform float timeElapsed;

float inverseLerp(float v, float minValue, float maxValue) {
  return (v - minValue) / (maxValue - minValue);
}

float remap(float v, float inMin, float inMax, float outMin, float outMax) {
  float t = inverseLerp(v, inMin, inMax);
  return mix(outMin, outMax, t);
}

void main() {
  vec2 uv = vUVs;

  vec2 linesUV = uv * 10.0;
  float t = smoothstep(0.1, 0.3, abs(fract(linesUV.y + timeElapsed / 5.2) - 0.5));
	vec3 white = vec3(0.);
  vec3 color = vec3(0.0, 0.4314, 1.0);
  color = mix(color, white, t);

  gl_FragColor = vec4(color, uv.y * isMoving);
}