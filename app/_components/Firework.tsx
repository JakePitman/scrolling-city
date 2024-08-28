import { useRef } from "react";
import { PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const Firework = () => {
  const ref1 = useRef<THREE.PointsMaterial>(null);
  const ref2 = useRef<THREE.PointsMaterial>(null);
  const ref3 = useRef<THREE.PointsMaterial>(null);

  useFrame((state, delta) => {
    const { clock } = state;
    if (ref1.current) {
      const opacity = Math.abs(Math.sin(clock.getElapsedTime() * 10));
      console.log(opacity);
      ref1.current.opacity = opacity;
    }
    if (ref2.current) {
      const opacity = Math.abs(Math.sin(clock.getElapsedTime() * 13));
      console.log(opacity);
      ref2.current.opacity = opacity;
    }
    if (ref3.current) {
      const opacity = Math.abs(Math.sin(clock.getElapsedTime() * 35));
      console.log(opacity);
      ref3.current.opacity = opacity;
    }
  });

  const baseColor = [0, 98, 255];
  const color1 = `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]})`;
  const color2 = `rgba(${Math.min(baseColor[0] + 30, 255)}, ${Math.min(baseColor[1] + 30, 255)}, ${Math.min(baseColor[2] + 30, 255)})`;
  const color3 = `rgba(${Math.max(0, baseColor[0] - 30)}, ${Math.max(0, baseColor[1] - 30)}, ${Math.max(0, baseColor[2] - 30)})`;

  return (
    <group scale={2}>
      <points scale={0.95} position={[0.02, 0, 0]} rotation={[0.2, 0.3, 1.2]}>
        <sphereGeometry args={[1, 7, 7]} />
        <PointMaterial
          color={color1}
          ref={ref1}
          transparent
          size={0.1}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </points>
      <points
        scale={0.95}
        position={[0.02, 0.02, 0.02]}
        rotation={[1.2, 1.3, 1.2]}
      >
        <sphereGeometry args={[1, 7, 7]} />
        <PointMaterial
          color={color2}
          ref={ref2}
          transparent
          size={0.13}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </points>
      <points
        scale={0.95}
        position={[-0.02, -0.02, 0.02]}
        rotation={[2.2, 1.3, 2.2]}
      >
        <sphereGeometry args={[1, 7, 7]} />
        <PointMaterial
          color={color3}
          ref={ref3}
          transparent
          size={0.125}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </points>
    </group>
  );
};
