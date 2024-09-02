import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Meta, StoryObj } from "@storybook/react";
import { BallFirework, RingFirework } from "@components/Fireworks";
import { FireworkGroup } from "@components/FireworkGroup";
import { PostProcessing } from "@components/PostProcessing";
import {
  MaterialsContextProvider,
  useMaterialsContext,
} from "@contexts/materialsContext";

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
          <MaterialsContextProvider>
            <OrbitControls />
            <PostProcessing />
            <group position={[0, -10, 0]}>
              <Story />
            </group>
          </MaterialsContextProvider>
        </Canvas>
      </div>
    ),
  ],
} satisfies Meta<typeof FireworkGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BallRing: Story = {
  args: {
    children: [],
    position: [0, 0, 0],
  },
  render: () => {
    const { FIREWORK_BLUE, FIREWORK_RED, FIREWORK_GREEN } =
      useMaterialsContext();

    return (
      <FireworkGroup position={[0, 0, 0]}>
        <BallFirework
          material1={FIREWORK_BLUE}
          material2={FIREWORK_BLUE}
          material3={FIREWORK_BLUE}
        />
        <RingFirework
          material1={FIREWORK_RED}
          material2={FIREWORK_RED}
          xOffset={5}
          zOffset={3}
          risingVelocityOffset={1.5}
          scale={1.5}
          rotation={[0, Math.PI, 0]}
        />
      </FireworkGroup>
    );
  },
};

export const BallRingRing: Story = {
  args: {
    children: [],
    position: [0, 0, 0],
  },
  render: () => {
    const { FIREWORK_BLUE, FIREWORK_RED, FIREWORK_GREEN } =
      useMaterialsContext();

    return (
      <FireworkGroup position={[0, 0, 0]}>
        <BallFirework
          material1={FIREWORK_BLUE}
          material2={FIREWORK_BLUE}
          material3={FIREWORK_BLUE}
        />
        <RingFirework
          material1={FIREWORK_RED}
          material2={FIREWORK_RED}
          rotation={[Math.PI * 0.5, Math.PI * 0.25, 0]}
        />
        <RingFirework
          material1={FIREWORK_GREEN}
          material2={FIREWORK_GREEN}
          rotation={[Math.PI * 0.5, Math.PI * 0.8, 0]}
        />
      </FireworkGroup>
    );
  },
};

export const BallBall: Story = {
  args: {
    children: [],
    position: [0, 0, 0],
  },
  render: () => {
    const { FIREWORK_BLUE, FIREWORK_RED } = useMaterialsContext();

    return (
      <FireworkGroup position={[0, 0, 0]}>
        <BallFirework
          material1={FIREWORK_BLUE}
          material2={FIREWORK_BLUE}
          material3={FIREWORK_BLUE}
          scale={1.5}
        />
        <BallFirework
          material1={FIREWORK_RED}
          material2={FIREWORK_RED}
          material3={FIREWORK_RED}
          rotation={[0, Math.PI, 0]}
        />
      </FireworkGroup>
    );
  },
};

export const BallBallSeparate: Story = {
  args: {
    children: [],
    position: [0, 0, 0],
  },
  render: () => {
    const { FIREWORK_BLUE, FIREWORK_GREEN, FIREWORK_RED } =
      useMaterialsContext();
    return (
      <FireworkGroup position={[0, 0, 0]}>
        <BallFirework
          material1={FIREWORK_BLUE}
          material2={FIREWORK_BLUE}
          material3={FIREWORK_BLUE}
          scale={1.7}
        />
        <BallFirework
          material1={FIREWORK_RED}
          material2={FIREWORK_RED}
          material3={FIREWORK_RED}
          risingVelocityOffset={2.5}
          xOffset={15}
          zOffset={3}
          scale={1.5}
          rotation={[0, Math.PI, 0]}
        />
        <BallFirework
          material1={FIREWORK_GREEN}
          material2={FIREWORK_GREEN}
          material3={FIREWORK_GREEN}
          risingVelocityOffset={2.9}
          xOffset={-5}
          zOffset={-2}
          scale={2}
          rotation={[0, Math.PI * 0.5, 0]}
        />
      </FireworkGroup>
    );
  },
};
