"use client";
import { Canvas } from "@react-three/fiber";
import { BakeShadows } from "@react-three/drei";
import { Experience } from "@components/Experience";
import { PostProcessing } from "@components/PostProcessing";
import { FireworkGroup } from "@components/FireworkGroup";
import { BallFirework, RingFirework } from "@components/Fireworks";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh]">
      <Canvas shadows camera={{ position: [0, 28, 100] }}>
        <Experience />
        <BakeShadows />
        <PostProcessing />

        <group>
          <FireworkGroup>
            <BallFirework rgb={[30, 30, 255]} />
            <RingFirework rgb={[235, 52, 195]} />
          </FireworkGroup>
        </group>
      </Canvas>
    </main>
  );
}
