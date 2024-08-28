import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { BuildingsStrip } from "@components/BuildingsStrip";

type Props = {
  zOffset: number;
};
export const BuildingBlockStrip = ({ zOffset }: Props) => {
  const numberOfRows = 5;
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.position.z += 0.1;
      if (ref.current.position.z > 40) {
        ref.current.position.z = -440;
      }
    }
  });
  return (
    <group position={[0, 0, zOffset]} ref={ref}>
      {new Array(numberOfRows).fill(null).map((_, i) => (
        <group key={i} position={[0, 0, i * -10]}>
          <BuildingsStrip isRTL initialPosition={[-10, 0, 0]} />
          <BuildingsStrip initialPosition={[10, 0, 0]} />
        </group>
      ))}
    </group>
  );
};
