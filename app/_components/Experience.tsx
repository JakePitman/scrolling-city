"use client";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { BuildingsStrip } from "@components/BuildingsStrip";
import { Background } from "@components/Background";
import { RoadBase } from "@components/RoadBase";
import { Road } from "@components/Road";

export const Experience = () => {
  const { gl } = useThree();
  // Limit renderer's pixel ratio to 2 for consistency
  gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const numberOfBuildingRows = 40;
  const numberOfBuildingsPerBlock = 5;

  return (
    <>
      <color args={["black"]} attach="background" />
      <fogExp2 attach="fog" args={["#506f7d", 0.015]} />
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
        {/* Left side */}
        <group position={[-10, 0, 0]}>
          {new Array(numberOfBuildingRows)
            .fill(null)
            .map((item, i) =>
              i > 0 && i % numberOfBuildingsPerBlock === 0 ? null : (
                <BuildingsStrip
                  key={i}
                  initialPosition={[0, 0, i * -10]}
                  isRTL
                />
              )
            )}
        </group>
        {/* Right side */}
        <group position={[10, 0, 0]}>
          {new Array(numberOfBuildingRows)
            .fill(null)
            .map((item, i) =>
              i > 0 && i % numberOfBuildingsPerBlock === 0 ? null : (
                <BuildingsStrip key={i} initialPosition={[0, 0, i * -10]} />
              )
            )}
        </group>
      </group>
    </>
  );
};
