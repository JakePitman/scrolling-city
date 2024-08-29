import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Meta, StoryObj } from "@storybook/react";
import { BallFirework, RingFirework } from "@components/Fireworks";
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
    children: [
      <BallFirework rgb={[30, 30, 255]} />,
      <RingFirework
        rgb={[235, 52, 195]}
        rotation={[Math.PI * 0.5, Math.PI * 0.25, 0]}
      />,
    ],
  },
};

export const BallRingRing: Story = {
  args: {
    children: [
      <BallFirework rgb={[30, 30, 255]} />,
      <RingFirework
        rgb={[235, 52, 195]}
        rotation={[Math.PI * 0.5, Math.PI * 0.25, 0]}
      />,
      <RingFirework
        rgb={[52, 235, 195]}
        rotation={[Math.PI * 0.5, Math.PI * 0.8, 0]}
      />,
    ],
  },
};

export const BallBall: Story = {
  args: {
    children: [
      <BallFirework rgb={[30, 30, 255]} scale={1.5} />,
      <BallFirework rgb={[235, 52, 195]} rotation={[0, Math.PI, 0]} />,
    ],
  },
};

export const BallBallSeparate: Story = {
  args: {
    children: [
      <BallFirework rgb={[30, 30, 255]} scale={1.7} />,
      <BallFirework
        rgb={[235, 52, 195]}
        risingVelocityOffset={1.5}
        xOffset={5}
        zOffset={3}
        scale={1.5}
        rotation={[0, Math.PI, 0]}
      />,
      <BallFirework
        rgb={[12, 250, 56]}
        risingVelocityOffset={1.9}
        xOffset={-5}
        zOffset={-2}
        scale={2}
        rotation={[0, Math.PI * 0.5, 0]}
      />,
    ],
  },
};
