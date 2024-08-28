import { BallFirework } from "@components/BallFirework";
import { RingFirework } from "@components/RingFirework";

type Props = {
  type: "BALL" | "RING";
  rgb: [number, number, number];
};
export const Firework = ({ type, rgb }: Props) => {
  if (type === "BALL") {
    return <BallFirework rgb={rgb} />;
  }
  if (type === "RING") {
    return <RingFirework rgb={rgb} />;
  }
};
