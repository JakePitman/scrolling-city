"use client";
import { Canvas } from "@react-three/fiber";
import { BakeShadows } from "@react-three/drei";
import { Experience } from "@components/Experience";
import { PostProcessing } from "@components/PostProcessing";
import { FireworksScene } from "@components/FireworksScene";
import { MaterialsContextProvider } from "@contexts/materialsContext";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh]">
      <Canvas shadows camera={{ position: [0, 28, 100] }}>
        <MaterialsContextProvider>
          <Experience />
          <BakeShadows />
          <PostProcessing />

          <FireworksScene />
        </MaterialsContextProvider>
      </Canvas>
    </main>
  );
}
