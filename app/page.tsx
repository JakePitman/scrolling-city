"use client";
import { Canvas } from "@react-three/fiber";
import { BakeShadows } from "@react-three/drei";

import { Experience } from "@components/Experience";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh]">
      <Canvas shadows>
        <Experience />
        <BakeShadows />
      </Canvas>
    </main>
  );
}
