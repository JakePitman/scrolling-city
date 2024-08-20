import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export const Car = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.position.z += 1.5;
      if (ref.current.position.z > 120) {
        ref.current.position.z = -150;
      }
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="red"
        emissive="red"
        emissiveIntensity={2}
        toneMapped={false}
      />
    </mesh>
  );
};
