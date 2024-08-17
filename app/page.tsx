"use client";
import { Canvas } from "@react-three/fiber";
import { BakeShadows } from "@react-three/drei";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

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
        </EffectComposer>
      </Canvas>
    </main>
  );
}
