import { BallFirework } from "@components/BallFirework";
import { RingFirework } from "@components/RingFirework";
import { useFireworkAnimationContext } from "@contexts/FireworkAnimationContext";

type Props = {
  type: "BALL" | "RING";
  rgb: [number, number, number];
  scale?: [number, number, number] | number;
  rotation?: [number, number, number];
  position?: [number, number, number];
};
export const Firework = ({
  type,
  rgb,
  scale = 1,
  rotation = [0, 0, 0],
  position = [0, 0, 0],
}: Props) => {
  const { animationStage } = useFireworkAnimationContext();
  let fireworkElement = <></>;
  if (type === "BALL") {
    fireworkElement = <BallFirework rgb={rgb} />;
  }
  if (type === "RING") {
    fireworkElement = <RingFirework rgb={rgb} />;
  }

  // TODO: Remove this whole component and apply scale, rotation and size
  // to the BallFirework and RingFirework components directly
  return (
    // <group scale={scale} position={position} rotation={rotation}>
    fireworkElement
    // </group>
  );
};
