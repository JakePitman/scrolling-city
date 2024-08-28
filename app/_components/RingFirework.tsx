import { useRef } from "react";
import { PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const RingFirework = () => {
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
      const opacity = Math.abs(Math.sin(clock.getElapsedTime() * 13));
      console.log(opacity);
      ref2.current.opacity = opacity;
    }
  });

  const baseColor = [74, 144, 255];
  const color1 = `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]})`;
  const color2 = `rgba(${Math.min(baseColor[0] + 30, 255)}, ${Math.min(baseColor[1] + 30, 255)}, ${Math.min(baseColor[2] + 30, 255)})`;
  const color3 = `rgba(${Math.max(0, baseColor[0] - 30)}, ${Math.max(0, baseColor[1] - 30)}, ${Math.max(0, baseColor[2] - 30)})`;

  return (
    <group scale={5}>
      <points scale={0.95} position={[0.02, 0, 0]} rotation={[0, 0, 0]}>
        <ringGeometry args={[4, 4, 25]} />
        <PointMaterial
          color={color1}
          ref={ref1}
          transparent
          size={0.2}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <points scale={0.95} position={[0.02, 0, 0]} rotation={[0, 0, 0.11]}>
        <ringGeometry args={[4, 4, 25]} />
        <PointMaterial
          color={color2}
          ref={ref2}
          transparent
          size={0.2}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
};
