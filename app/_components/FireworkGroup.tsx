import React, { useEffect, useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { damp3 } from "maath/easing";

enum AnimationStage {
  DORMANT = "DORMANT",
  RISING = "RISING",
  EXPLODING = "EXPLODING",
}

type AnimationWrapperProps = {
  children: React.ReactNode;
  animationStage: AnimationStage;
  explodeSpeed: number;
};

const easeOutCubic = (t: number) => --t * t * t + 1;
const AnimationWrapper = ({
  children,
  animationStage,
  explodeSpeed,
}: AnimationWrapperProps) => {
  const ref = useRef<THREE.Group>(null);
  useFrame((_state, delta) => {
    if (ref.current) {
      switch (animationStage) {
        case AnimationStage.DORMANT:
          ref.current.position.set(0, 0, 0);
          ref.current.scale.set(0, 0.03, 0);
          break;
        case AnimationStage.RISING:
          ref.current.position.y += delta * 8;
          break;
        case AnimationStage.EXPLODING:
          damp3(
            ref.current.scale,
            1,
            0.1 * explodeSpeed,
            // TODO: This isn't the right place for explodeSpeed anymore
            delta,
            10
            // easeOutCubic
          );
          ref.current.position.y -= delta * 0.3;
          break;
        default:
          break;
      }
    }
  });

  return <group ref={ref}>{children}</group>;
};

type Props = {
  fireworkElements: React.ReactNode[];
  explosionStagger?: number;
};
export const FireworkGroup = ({
  fireworkElements,
  explosionStagger = 0.2,
}: Props) => {
  const [animationStage, setAnimationStage] = useState<AnimationStage>(
    AnimationStage.DORMANT
  );
  useEffect(() => {
    const cycleStages = () => {
      setAnimationStage((prevAnimationStage) => {
        switch (prevAnimationStage) {
          case AnimationStage.DORMANT:
            return AnimationStage.RISING;
          case AnimationStage.RISING:
            return AnimationStage.EXPLODING;
          case AnimationStage.EXPLODING:
            return AnimationStage.DORMANT;
          default:
            return AnimationStage.DORMANT;
        }
      });
    };

    const interval = setInterval(cycleStages, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <group>
      {fireworkElements.map((child, i) => (
        <AnimationWrapper
          key={i}
          animationStage={animationStage}
          explodeSpeed={1 + i * explosionStagger}
        >
          {child}
        </AnimationWrapper>
      ))}
    </group>
  );
};
