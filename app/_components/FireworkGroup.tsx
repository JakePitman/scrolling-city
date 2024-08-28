import React, { useEffect, useState } from "react";

type AnimationWrapperProps = {
  children: React.ReactNode;
};
const AnimationWrapper = ({ children }: AnimationWrapperProps) => {
  return <group>{children}</group>;
};

enum AnimationStage {
  DORMANT = "DORMANT",
  RISING = "RISING",
  EXPLODING = "EXPLODING",
}

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
        <AnimationWrapper key={i}>{child}</AnimationWrapper>
      ))}
    </group>
  );
};
