import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Meta, StoryObj } from "@storybook/react";
import { Firework } from "@components/Firework";
import { PostProcessing } from "@components/PostProcessing";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "3D/Firework",
  component: Firework,
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
    type: "BALL",
  },
  decorators: [
    (Story) => (
      <div className="w-[100vw] h-[100vh] border-solid border-2">
        <Canvas>
          <OrbitControls />
          <Story />
        </Canvas>
      </div>
    ),
  ],
} satisfies Meta<typeof Firework>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const WithPostProcessing: Story = {
  decorators: (Story) => (
    <>
      <PostProcessing />
      <Story />
    </>
  ),
};
