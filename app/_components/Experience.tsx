"use client";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { BuildingsStrip } from "@components/BuildingsStrip";
import { BuildingBlockStrip } from "@components/BuildingsBlockStrip";
import { Background } from "@components/Background";
import { RoadBase } from "@components/RoadBase";
import { Road } from "@components/Road";

export const Experience = () => {
  const { gl } = useThree();
  // Limit renderer's pixel ratio to 2 for consistency
  gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const numberOfBlockRows = 8;

  return (
    <>
      <color args={["black"]} attach="background" />
      <fogExp2 attach="fog" args={["#121212", 0.015]} />
      <OrbitControls />
      <ambientLight intensity={100} />
      <Background />

      <Road position={[0, 0, 0]} />
      <Road position={[30, 0, 0]} />
      <Road position={[-30, 0, 0]} />
      <Road position={[55, 0, 0]} />
      <Road position={[-55, 0, 0]} />
      <RoadBase />
      <group scale={0.5} position={[0, 0, 100]}>
        <group position={[0, 10, 0]}>
          {new Array(numberOfBlockRows).fill(null).map((_, i) => (
            <BuildingBlockStrip key={i} zOffset={i * -60} />
          ))}
        </group>
      </group>
    </>
  );
};
