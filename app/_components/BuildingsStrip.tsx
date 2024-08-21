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

const numberOfBuildings = 35;
const numberOfBuildingsPerBlock = 5;
type BuildingsStrip = {
  initialPosition: [number, number, number];
  isRTL?: boolean;
};
export const BuildingsStrip = ({
  initialPosition,
  isRTL = false,
}: BuildingsStrip) => {
  const xOffset = isRTL ? -10 : 10;
  const buildingsToRender = new Array(numberOfBuildings)
    .fill(null)
    .map(() => BUILDINGS[Math.floor(Math.random() * BUILDINGS.length)]);
  return (
    <group position={initialPosition}>
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
