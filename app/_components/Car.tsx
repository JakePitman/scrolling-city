import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const boundary = 200;
type Props = {
  direction: "coming" | "going";
};
export const Car = ({ direction }: Props) => {
  const ref = useRef<THREE.Mesh>(null);
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

  return (
    <mesh ref={ref} position={[xOffset, 0, zStartingPosition]}>
      <boxGeometry args={[0.5, 0.5, 1]} />
      <meshStandardMaterial
        color="red"
        emissive="red"
        emissiveIntensity={2}
        toneMapped={false}
      />
    </mesh>
  );
};
