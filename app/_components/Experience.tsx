"use client";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { BuildingsStrip } from "@components/BuildingsStrip";
import { Background } from "@components/Background";

export const Experience = () => {
  const { gl } = useThree();
  // Limit renderer's pixel ratio to 2 for consistency
  gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  return (
    <>
      <color args={["black"]} attach="background" />
      <OrbitControls />
      <ambientLight intensity={100} />
      <Background />

      {new Array(10).fill(null).map((i) => (
        <BuildingsStrip key={i} position={[0, 0, -(i * 10)]} />
      ))}
    </>
  );
};
