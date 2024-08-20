import { Car } from "@components/Car";

type Props = {
  position: [number, number, number];
};
export const Road = ({ position }: Props) => {
  return (
    <group position={position}>
      <Car />
    </group>
  );
};
