import { useRef } from "react";
import { PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Props = {
  rgb: [number, number, number];
};
export const BallFirework = ({ rgb }: Props) => {
  const ref1 = useRef<THREE.PointsMaterial>(null);
  const ref2 = useRef<THREE.PointsMaterial>(null);
  const ref3 = useRef<THREE.PointsMaterial>(null);

  useFrame((state, delta) => {
    const { clock } = state;
    if (ref1.current) {
      const opacity = Math.abs(Math.sin(clock.getElapsedTime() * 10));
      ref1.current.opacity = opacity;
    }
    if (ref2.current) {
      const opacity = Math.abs(Math.sin(clock.getElapsedTime() * 13));
      ref2.current.opacity = opacity;
    }
    if (ref3.current) {
      const opacity = Math.abs(Math.sin(clock.getElapsedTime() * 35));
      ref3.current.opacity = opacity;
    }
  });

  const [red, green, blue] = rgb;
  const color1 = `rgba(${red}, ${green}, ${blue})`;
  const color2 = `rgba(${Math.min(red + 30, 255)}, ${Math.min(green + 30, 255)}, ${Math.min(blue + 30, 255)})`;
  const color3 = `rgba(${Math.max(0, red - 30)}, ${Math.max(0, green - 30)}, ${Math.max(0, blue - 30)})`;

  return (
    <group scale={5}>
      <points scale={0.95} position={[0.02, 0, 0]} rotation={[0.2, 0.3, 1.2]}>
        <sphereGeometry args={[1, 7, 7]} />
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
          size={0.23}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
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
          size={0.225}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
};
