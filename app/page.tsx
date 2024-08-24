"use client";
import { Canvas } from "@react-three/fiber";
import { BakeShadows } from "@react-three/drei";
import { Experience } from "@components/Experience";
import { PostProcessing } from "@components/PostProcessing";

import { Firework } from "@components/Firework";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh]">
      {/* <Canvas shadows camera={{ position: [0, 28, 100] }}> */}
      <Canvas shadows camera={{ position: [0, 0, 10] }} color={"black"}>
        <OrbitControls />
        {/* <Experience /> */}
        {/* <BakeShadows /> */}
        {/* <PostProcessing /> */}
        <Firework position={new THREE.Vector3()} size={50} count={100} />
      </Canvas>
    </main>
  );
}
