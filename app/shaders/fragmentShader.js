export const fragmentShader = `
    void main() {
      float alpha = 1. - smoothstep(0.2995, 0.5005, length(gl_PointCoord - vec2(0.5)));

      gl_FragColor = vec4(vec3(0.0), 7.2);
    }
  `
