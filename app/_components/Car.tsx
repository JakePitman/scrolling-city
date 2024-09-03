import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { CarModel } from "@components/CarModel";

const boundary = 200;
type Props = {
  direction: "coming" | "going";
};
export const Car = ({ direction }: Props) => {
  const ref = useRef<THREE.Group>(null);
  const increment = direction === "coming" ? 1.5 : -1.5;
  useFrame(() => {
    if (ref.current) {
      ref.current.position.z += increment;
      if (direction === "coming" && ref.current.position.z > boundary) {
        ref.current.position.z = -boundary;
      }
      if (direction === "going" && ref.current.position.z < -boundary) {
        ref.current.position.z = boundary;
      }
    }
  });

  const xOffset = direction === "coming" ? 1 : -1;
  const zStartingPosition = Math.round(
    Math.random() * (boundary - -boundary) + -boundary
  );

  const yRotation = direction === "coming" ? Math.PI : 0;

  return (
    <group
      ref={ref}
      position={[xOffset, 5, zStartingPosition]}
      rotation={[0, yRotation, 0]}
      scale={0.3}
    >
      <CarModel />
    </group>
  );
};
