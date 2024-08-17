import { BuildingsStrip } from "./BuildingsStrip";

type Props = {
  isRTL?: boolean;
};
export const BuildingsBlock = ({ isRTL = false }: Props) => {
  return (
    <group position={[-10, 0, 0]}>
      {new Array(10).fill(null).map((item, i) => (
        <BuildingsStrip
          key={i}
          initialPosition={[0, 0, i * 10]}
          isRTL={isRTL}
        />
      ))}
    </group>
  );
};
