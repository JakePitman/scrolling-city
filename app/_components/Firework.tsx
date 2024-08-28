import { BallFirework } from "@components/BallFirework";
import { RingFirework } from "@components/RingFirework";

type Props = {
  type: "BALL" | "RING";
};
export const Firework = ({ type }: Props) => {
  if (type === "BALL") {
    return <BallFirework />;
  }
  if (type === "RING") {
    return <RingFirework />;
  }
};
