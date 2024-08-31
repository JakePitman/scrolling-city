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
        <Canvas camera={{ position: [0, 0, 135] }}>
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
      <BallFirework color1="#104685" color2="#042e5e" color3="#020d3d" />,
      <RingFirework
        color1="#630202"
        color2="#750d0d"
        rotation={[Math.PI * 0.5, Math.PI * 0.25, 0]}
      />,
    ],
  },
};

export const BallRingRing: Story = {
  args: {
    children: [
      <BallFirework color1="#104685" color2="#042e5e" color3="#020d3d" />,
      <RingFirework
        color1="#630202"
        color2="#750d0d"
        rotation={[Math.PI * 0.5, Math.PI * 0.25, 0]}
      />,
      <RingFirework
        color1="#630202"
        color2="#750d0d"
        rotation={[Math.PI * 0.5, Math.PI * 0.8, 0]}
      />,
    ],
  },
};

export const BallBall: Story = {
  args: {
    children: [
      <BallFirework
        color1="#104685"
        color2="#042e5e"
        color3="#020d3d"
        scale={1.5}
      />,
      <BallFirework
        color1="#4a0108"
        color2="#40080e"
        color3="#290105"
        rotation={[0, Math.PI, 0]}
      />,
    ],
  },
};

export const BallBallSeparate: Story = {
  args: {
    children: [
      <BallFirework
        color1="#363b01"
        color2="#383d06"
        color3="#52590e"
        scale={1.7}
      />,
      <BallFirework
        color1="#4a0108"
        color2="#40080e"
        color3="#290105"
        risingVelocityOffset={1.5}
        xOffset={5}
        zOffset={3}
        scale={1.5}
        rotation={[0, Math.PI, 0]}
      />,
      <BallFirework
        color1="#290105"
        color2="#042b0d"
        color3="#072b0f"
        risingVelocityOffset={1.9}
        xOffset={-5}
        zOffset={-2}
        scale={2}
        rotation={[0, Math.PI * 0.5, 0]}
      />,
    ],
  },
};
