import { Canvas } from "@react-three/fiber";
import { OrbitControls, Ring } from "@react-three/drei";
import { Meta, StoryObj } from "@storybook/react";
import { RingFirework } from "@components/Fireworks";
import { PostProcessing } from "@components/PostProcessing";
import { FireworkAnimationContextProvider } from "@contexts/FireworkAnimationContext";
import {
  MaterialsContextProvider,
  useMaterialsContext,
} from "@contexts/materialsContext";
import * as THREE from "three";

const meta = {
  title: "3D/Fireworks/RingFirework",
  component: RingFirework,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "black",
        },
      ],
    },
  },
  args: {},
  decorators: [
    (Story) => (
      <div className="w-[100vw] h-[100vh] border-solid border-2">
        <Canvas camera={{ position: [0, 0, 135] }}>
          <MaterialsContextProvider>
            <OrbitControls />
            <PostProcessing />
            <group position={[0, -15, 0]}>
              <FireworkAnimationContextProvider delay={0}>
                <Story />
              </FireworkAnimationContextProvider>
            </group>
          </MaterialsContextProvider>
        </Canvas>
      </div>
    ),
  ],
} satisfies Meta<typeof RingFirework>;

export default meta;
type Story = StoryObj<typeof meta>;

const material = new THREE.PointsMaterial();

export const Basic: Story = {
  args: { material1: material, material2: material },
  render: () => {
    const { FIREWORK_BLUE, FIREWORK_RED } = useMaterialsContext();
    return <RingFirework material1={FIREWORK_BLUE} material2={FIREWORK_RED} />;
  },
};
