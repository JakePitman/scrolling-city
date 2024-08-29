import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Meta, StoryObj } from "@storybook/react";
import { RingFirework } from "@components/Fireworks";
import { PostProcessing } from "@components/PostProcessing";
import { FireworkAnimationContextProvider } from "@contexts/FireworkAnimationContext";

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
  args: {
    rgb: [74, 144, 255],
  },
  decorators: [
    (Story) => (
      <div className="w-[100vw] h-[100vh] border-solid border-2">
        <Canvas camera={{ position: [0, 0, 25] }}>
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
} satisfies Meta<typeof RingFirework>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
