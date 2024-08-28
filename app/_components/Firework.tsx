import { useRef } from "react";
import { PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const Firework = () => {
  const ref1 = useRef<THREE.PointsMaterial>(null);
  const ref2 = useRef<THREE.PointsMaterial>(null);
  useFrame((state, delta) => {
    const { clock } = state;
    if (ref1.current) {
      const opacity = Math.abs(Math.sin(clock.getElapsedTime() * 20));
      console.log(opacity);
      ref1.current.opacity = opacity;
    }
    if (ref2.current) {
      const opacity = Math.abs(Math.sin(clock.getElapsedTime() * 25));
      console.log(opacity);
      ref2.current.opacity = opacity;
    }
  });

  return (
    <group>
      <points scale={0.95} position={[1, 0, 0]} rotation={[0.2, 0.3, 1.2]}>
        <sphereGeometry />
        <PointMaterial
          color="#0062ff"
          ref={ref1}
          transparent
          // vertexColors
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </points>

      <points rotation={[0.5, 1, 0.3]}>
        <sphereGeometry />
        <PointMaterial
          color="#ff0077"
          ref={ref2}
          transparent
          // vertexColors
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </points>
    </group>
  );
};
