import { useRef } from "react";
import { PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Props = {
  rgb: [number, number, number];
};
export const RingFirework = ({ rgb }: Props) => {
  const ref1 = useRef<THREE.PointsMaterial>(null);
  const ref2 = useRef<THREE.PointsMaterial>(null);

  useFrame((state, delta) => {
    const { clock } = state;
    if (ref1.current) {
      const opacity = Math.abs(Math.sin(clock.getElapsedTime() * 20));
      ref1.current.opacity = opacity;
    }
    if (ref2.current) {
      const opacity = Math.abs(Math.sin(clock.getElapsedTime() * 13));
      ref2.current.opacity = opacity;
    }
  });

  const [red, green, blue] = rgb;
  const color1 = `rgba(${red}, ${green}, ${blue})`;
  const color2 = `rgba(${Math.min(red + 30, 255)}, ${Math.min(green + 30, 255)}, ${Math.min(blue + 30, 255)})`;

  return (
    <group scale={5}>
      <points scale={0.95} position={[0.02, 0, 0]} rotation={[0, 0, 0]}>
        <ringGeometry args={[2, 2, 25]} />
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
        <ringGeometry args={[2, 2, 15]} />
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
