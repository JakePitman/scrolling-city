"use client";
import { Canvas } from "@react-three/fiber";
import { BakeShadows } from "@react-three/drei";
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

import { Experience } from "@components/Experience";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh]">
      <Canvas shadows>
        <Experience />
        <BakeShadows />
        <EffectComposer>
          <DepthOfField
            focusDistance={0.0}
            focalLength={0.7}
            bokehScale={2}
            height={480}
          />
          <Bloom intensity={0.01} />
          <Noise opacity={0.15} />
          <Scanline blendFunction={BlendFunction.OVERLAY} />
          <Vignette />
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
      </Canvas>
    </main>
  );
}
