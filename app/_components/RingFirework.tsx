import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  useFireworkAnimationContext,
  AnimationStage,
} from "@contexts/FireworkAnimationContext";
import { damp3 } from "maath/easing";

type Props = {
  material1: THREE.PointsMaterial;
  material2: THREE.PointsMaterial;
  xOffset?: number;
  zOffset?: number;
  risingVelocityOffset?: number;
  scale?: number | [number, number, number];
  rotation?: [number, number, number];
};
export const RingFirework = ({
  material1,
  material2,
  xOffset = 0,
  zOffset = 0,
  risingVelocityOffset = 0,
  scale = 1,
  rotation = [0, 0, 0],
}: Props) => {
  const firework = useRef<THREE.Group>(null);
  const { animationStage } = useFireworkAnimationContext();
  const explodeSpeed = 1;

  useFrame((state, delta) => {
    if (!firework.current) return;
    switch (animationStage) {
      case AnimationStage.DORMANT:
        firework.current.position.set(xOffset, 0, zOffset);
        firework.current.scale.set(0, 0, 0);
        break;
      case AnimationStage.RISING:
        firework.current.position.y += delta * (16 + risingVelocityOffset);
        break;
      case AnimationStage.EXPLODING:
        damp3(firework.current.scale, scale, 0.1 * explodeSpeed, delta, 10);
        firework.current.position.y -= delta * 0.3;
        break;
      case AnimationStage.FADING:
        firework.current.position.y -= delta * 0.3;
        break;
      default:
        break;
    }
  });

  return (
    <group
      scale={1}
      ref={firework}
      position={[xOffset, 0, zOffset]}
      rotation={rotation}
    >
      <points material={material1} position={[0.02, 0, 0]} rotation={[0, 0, 0]}>
        <ringGeometry args={[30, 30, 35]} />
      </points>

      <points
        material={material2}
        position={[0.02, 0, 0]}
        rotation={[0, 0, 0.11]}
      >
        <ringGeometry args={[30, 30, 25]} />
      </points>
    </group>
  );
};
