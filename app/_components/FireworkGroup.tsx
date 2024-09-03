import React, { useEffect, useState } from "react";
import { FireworkAnimationContextProvider } from "@contexts/FireworkAnimationContext";

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

type Props = {
  children: React.ReactNode;
  position: [number, number, number];
  delay: number;
};
export const FireworkGroup = ({ children, position, delay }: Props) => {
  const [_animationStage, setAnimationStage] = useState<AnimationStage>(
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
    <FireworkAnimationContextProvider delay={delay}>
      <group position={position}>{children}</group>
    </FireworkAnimationContextProvider>
  );
};
