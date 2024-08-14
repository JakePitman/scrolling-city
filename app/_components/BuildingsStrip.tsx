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
  position: [number, number, number];
};
export const BuildingsStrip = ({ position }: BuildingsStrip) => {
  return (
    <group position={position}>
      {BUILDINGS.map((Building, i) => (
        <group key={i} position={[i * 10, 0, 0]}>
          <Building />
        </group>
      ))}
    </group>
  );
};
