import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import {
  Building1a,
  Building1b,
  Building1c,
  Building2a,
  Building2b,
  Building2c,
  Building3a,
  Building3b,
  Building3c,
} from "@components/Buildings";

const BUILDINGS = [
  Building1a,
  Building1b,
  Building1c,
  Building2a,
  Building2b,
  Building2c,
  Building3a,
  Building3b,
  Building3c,
];

type BuildingsStrip = {
  initialPosition: [number, number, number];
  isRTL?: boolean;
};
export const BuildingsStrip = ({
  initialPosition,
  isRTL = false,
}: BuildingsStrip) => {
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.position.z += 0.1;
      if (ref.current.position.z > 10) {
        ref.current.position.z = -400;
      }
    }
  });
  const xOffset = isRTL ? -10 : 10;
  const numberOfBuildings = 20;
  const numberOfBuildingsPerBlock = 5;
  const buildingsToRender = new Array(numberOfBuildings)
    .fill(null)
    .map(() => BUILDINGS[Math.floor(Math.random() * BUILDINGS.length)]);
  return (
    <group position={initialPosition} ref={ref}>
      {buildingsToRender.map((Building, i) =>
        i > 0 && i % numberOfBuildingsPerBlock === 0 ? null : (
          <group key={i} position={[i * xOffset, 0, 0]}>
            <Building />
          </group>
        )
      )}
    </group>
  );
};
