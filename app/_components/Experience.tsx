"use client";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { BuildingsStrip } from "@components/BuildingsStrip";
import { Background } from "@components/Background";
import { useControls } from "leva";

export const Experience = () => {
  const { gl } = useThree();
  // Limit renderer's pixel ratio to 2 for consistency
  gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const { rotation } = useControls({
    rotation: [0, Math.PI, 0],
  });
  const numberOfBuildingRows = 40;

  return (
    <>
      <color args={["black"]} attach="background" />
      <OrbitControls />
      <ambientLight intensity={100} />
      <Background />

      <group scale={0.5} position={[0, 0, 100]}>
        <group position={[10, 0, 0]}>
          {new Array(numberOfBuildingRows).fill(null).map((item, i) => (
            <BuildingsStrip key={i} initialPosition={[0, 0, i * -10]} />
          ))}
        </group>
        <group position={[-10, 0, 0]}>
          {new Array(numberOfBuildingRows).fill(null).map((item, i) => (
            <BuildingsStrip key={i} initialPosition={[0, 0, i * -10]} isRTL />
          ))}
        </group>
      </group>
    </>
  );
};
