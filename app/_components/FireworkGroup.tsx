import { useEffect, useState } from "react";

enum AnimationStage {
  DORMANT = "DORMANT",
  RISING = "RISING",
  EXPLODING = "EXPLODING",
}

type Props = {
  children: React.ReactNode;
};
export const FireworkGroup = ({ children }: Props) => {
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

  return <group>{children}</group>;
};
