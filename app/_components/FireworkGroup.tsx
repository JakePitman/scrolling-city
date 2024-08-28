import React, { useEffect, useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

enum AnimationStage {
  DORMANT = "DORMANT",
  RISING = "RISING",
  EXPLODING = "EXPLODING",
}

type AnimationWrapperProps = {
  children: React.ReactNode;
  animationStage: AnimationStage;
};

const AnimationWrapper = ({
  children,
  animationStage,
}: AnimationWrapperProps) => {
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    if (ref.current) {
      switch (animationStage) {
        case AnimationStage.DORMANT:
          ref.current.position.set(0, 0, 0);
          ref.current.scale.set(0, 0, 0);
          break;
        case AnimationStage.RISING:
          ref.current.position.y += 0.1;
          break;
        case AnimationStage.EXPLODING:
          ref.current.scale.set(1, 1, 1);
          ref.current.position.y -= 0.01;
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
};
export const FireworkGroup = ({ fireworkElements }: Props) => {
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
        <AnimationWrapper key={i} animationStage={animationStage}>
          {child}
        </AnimationWrapper>
      ))}
    </group>
  );
};
