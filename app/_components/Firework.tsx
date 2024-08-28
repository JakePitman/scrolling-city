import { BallFirework } from "@components/BallFirework";
import { RingFirework } from "@components/RingFirework";

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
  let fireworkElement = <></>;
  if (type === "BALL") {
    fireworkElement = <BallFirework rgb={rgb} />;
  }
  if (type === "RING") {
    fireworkElement = <RingFirework rgb={rgb} />;
  }

  return (
    <group scale={scale} position={position} rotation={rotation}>
      {fireworkElement}
    </group>
  );
};
