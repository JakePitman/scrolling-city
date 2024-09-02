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
  material3: THREE.PointsMaterial;
  xOffset?: number;
  zOffset?: number;
  risingVelocityOffset?: number;
  scale?: number | [number, number, number];
  rotation?: [number, number, number];
};
export const BallFirework = ({
  material1,
  material2,
  material3,
  xOffset = 0,
  zOffset = 0,
  risingVelocityOffset = 0,
  scale = 1,
  rotation = [0, 0, 0],
}: Props) => {
  const firework = useRef<THREE.Group>(null);
  const { animationStage } = useFireworkAnimationContext();
  const explodeSpeed = 1;

  useFrame((_state, delta) => {
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
      scale={scale}
      ref={firework}
      position={[xOffset, 0, zOffset]}
      rotation={rotation}
    >
      <points
        scale={0.95}
        position={[0.02, 0, 0]}
        rotation={[0.2, 0.3, 1.2]}
        material={material1}
      >
        <sphereGeometry args={[21, 7, 7]} />
      </points>
      <points
        scale={0.95}
        position={[0.02, 0.02, 0.02]}
        rotation={[1.2, 1.3, 1.2]}
        material={material2}
      >
        <sphereGeometry args={[21, 7, 7]} />
      </points>
      <points
        scale={0.95}
        position={[-0.02, -0.02, 0.02]}
        rotation={[2.2, 1.3, 2.2]}
        material={material3}
      >
        <sphereGeometry args={[21, 7, 7]} />
      </points>
    </group>
  );
};
