import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Meta, StoryObj } from "@storybook/react";
import { BallFirework } from "@components/Fireworks";
import { PostProcessing } from "@components/PostProcessing";
import { FireworkAnimationContextProvider } from "@contexts/FireworkAnimationContext";

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
  args: {
    color1: "#104685",
    color2: "#042e5e",
    color3: "#020d3d",
  },
  decorators: [
    (Story) => (
      <div className="w-[100vw] h-[100vh] border-solid border-2">
        <Canvas camera={{ position: [0, 0, 135] }}>
          <OrbitControls />
          <PostProcessing />
          <group position={[0, -15, 0]}>
            <FireworkAnimationContextProvider>
              <Story />
            </FireworkAnimationContextProvider>
          </group>
        </Canvas>
      </div>
    ),
  ],
} satisfies Meta<typeof BallFirework>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
