import { useRef } from "react";
import { PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  useFireworkAnimationContext,
  AnimationStage,
} from "@contexts/FireworkAnimationContext";
import { damp3 } from "maath/easing";

type Props = {
  rgb: [number, number, number];
  xOffset?: number;
  zOffset?: number;
  risingVelocityOffset?: number;
  scale?: number | [number, number, number];
  rotation?: [number, number, number];
};
export const RingFirework = ({
  rgb,
  xOffset = 0,
  zOffset = 0,
  risingVelocityOffset = 0,
  scale = 1,
  rotation = [0, 0, 0],
}: Props) => {
  const firework = useRef<THREE.Group>(null);
  const material1 = useRef<THREE.PointsMaterial>(null);
  const material2 = useRef<THREE.PointsMaterial>(null);
  const { animationStage } = useFireworkAnimationContext();
  const explodeSpeed = 1;

  useFrame((state, delta) => {
    const { clock } = state;
    if (!firework.current || !material1.current || !material2.current) return;
    switch (animationStage) {
      case AnimationStage.DORMANT:
        firework.current.position.set(xOffset, 0, zOffset);
        firework.current.scale.set(0, 0, 0);
        material1.current.opacity = 0;
        material2.current.opacity = 0;
        break;
      case AnimationStage.RISING:
        material1.current.opacity = 1;
        material2.current.opacity = 1;
        firework.current.position.y += delta * (16 + risingVelocityOffset);
        break;
      case AnimationStage.EXPLODING:
        damp3(firework.current.scale, scale, 0.1 * explodeSpeed, delta, 10);
        firework.current.position.y -= delta * 0.3;
        material1.current.opacity = Math.abs(
          Math.sin(clock.getElapsedTime() * 10)
        );
        material2.current.opacity = Math.abs(
          Math.sin(clock.getElapsedTime() * 13)
        );
        break;
      case AnimationStage.FADING:
        firework.current.position.y -= delta * 0.3;
        if (material1.current.opacity > 0)
          material1.current.opacity -= delta * 1.5;
        if (material2.current.opacity > 0)
          material2.current.opacity -= delta * 1.5;
        break;
      default:
        break;
    }
  });

  const [red, green, blue] = rgb;
  const color1 = `rgba(${red}, ${green}, ${blue})`;
  const color2 = `rgba(${Math.min(red + 30, 255)}, ${Math.min(green + 30, 255)}, ${Math.min(blue + 30, 255)})`;

  return (
    <group
      scale={1}
      ref={firework}
      position={[xOffset, 0, zOffset]}
      rotation={rotation}
    >
      <points scale={0.95} position={[0.02, 0, 0]} rotation={[0, 0, 0]}>
        <ringGeometry args={[30, 30, 25]} />
        <PointMaterial
          color={color1}
          ref={material1}
          transparent
          size={1}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <points scale={0.95} position={[0.02, 0, 0]} rotation={[0, 0, 0.11]}>
        <ringGeometry args={[30, 30, 15]} />
        <PointMaterial
          color={color2}
          ref={material2}
          transparent
          size={1.2}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
};
