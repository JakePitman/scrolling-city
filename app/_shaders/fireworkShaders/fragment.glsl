uniform sampler2D uTexture;

void main()
{
  // Texture is grayscale, so we only need one value
  float textureAlpha=texture(uTexture,gl_PointCoord).r;
  // Final color
  // gl_FragColor=vec4(1.,1.,1.,textureAlpha);
  gl_FragColor=vec4(1.,1.,1.,textureAlpha);
  // ...
}