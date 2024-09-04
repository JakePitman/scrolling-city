import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Meta, StoryObj } from "@storybook/react";
import { BallFirework } from "@components/Fireworks";
import { PostProcessing } from "@components/PostProcessing";
import { FireworkAnimationContextProvider } from "@contexts/FireworkAnimationContext";
import {
  MaterialsContextProvider,
  useMaterialsContext,
} from "@contexts/materialsContext";
import * as THREE from "three";

const meta = {
  title: "3D/Fireworks/BallFirework",
  component: BallFirework,
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
    (Story) => {
      return (
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
      );
    },
  ],
} satisfies Meta<typeof BallFirework>;

export default meta;
type Story = StoryObj<typeof meta>;

const material = new THREE.PointsMaterial();
export const Basic: Story = {
  args: {
    material1: material,
    material2: material,
    material3: material,
  },
  render: () => {
    const { FIREWORK_GREEN, FIREWORK_LIGHT_GREEN, FIREWORK_DARK_GREEN } =
      useMaterialsContext();

    return (
      <BallFirework
        material1={FIREWORK_GREEN}
        material2={FIREWORK_LIGHT_GREEN}
        material3={FIREWORK_DARK_GREEN}
      />
    );
  },
};
