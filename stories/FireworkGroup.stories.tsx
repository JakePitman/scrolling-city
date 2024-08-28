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
        <Canvas camera={{ position: [0, 0, 40] }}>
          <OrbitControls />
          <PostProcessing />
          <group position={[0, -10, 0]}>
            <Story />
          </group>
        </Canvas>
      </div>
    ),
  ],
} satisfies Meta<typeof FireworkGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BallRing: Story = {
  args: {
    fireworkElements: [
      <Firework type="BALL" rgb={[30, 30, 255]} key={1} scale={1.3} />,
      <Firework
        type="RING"
        rgb={[235, 52, 195]}
        key={2}
        rotation={[Math.PI * 0.4, Math.PI * 0.2, 0]}
      />,
    ],
    explosionStagger: 0.6,
  },
};
