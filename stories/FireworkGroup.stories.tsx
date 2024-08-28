import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Meta, StoryObj } from "@storybook/react";
import { Firework } from "@components/Firework";
import { FireworkGroup } from "@components/FireworkGroup";
import { PostProcessing } from "@components/PostProcessing";

const meta = {
  title: "3D/FireworkGroup",
  component: FireworkGroup,
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
        <Canvas camera={{ position: [0, 0, 20] }}>
          <OrbitControls />
          <Story />
        </Canvas>
      </div>
    ),
  ],
} satisfies Meta<typeof FireworkGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    fireworkElements: [
      <Firework type="BALL" rgb={[0, 0, 0]} key={1} />,
      <Firework type="RING" rgb={[255, 20, 20]} key={2} />,
    ],
  },
};

export const WithPostProcessing: Story = {
  args: {
    fireworkElements: [
      <Firework type="BALL" rgb={[30, 30, 255]} key={1} />,
      <Firework type="RING" rgb={[235, 52, 195]} key={2} />,
    ],
  },

  decorators: (Story) => (
    <>
      <PostProcessing />
      <Story />
    </>
  ),
};
