type Props = {
  children: React.ReactNode;
};
export const FireworkGroup = ({ children }: Props) => {
  return <group>{children}</group>;
};
