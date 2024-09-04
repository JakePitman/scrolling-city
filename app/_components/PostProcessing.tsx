import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Scanline,
  Vignette,
  Glitch,
} from "@react-three/postprocessing";

import { BlendFunction, GlitchMode } from "postprocessing";

export const PostProcessing = () => (
  <EffectComposer>
    <DepthOfField
      focusDistance={0.0}
      focalLength={0.3}
      bokehScale={2}
      height={480}
    />
    <Bloom intensity={0.01} />
    <Noise opacity={0.15} />
    <Scanline blendFunction={BlendFunction.OVERLAY} density={3} />
    <Glitch
      // These are correct
      // @ts-ignore
      delay={[7, 12]}
      // @ts-ignore
      duration={[0.01, 0.02]}
      // @ts-ignore
      strength={[0.1, 0.2]}
      mode={GlitchMode.SPORADIC}
      active
    />
  </EffectComposer>
);
