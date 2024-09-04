import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { FireworkGroup } from "@components/FireworkGroup";
import { BallFirework, RingFirework } from "@components/Fireworks";
import { useMaterialsContext } from "@contexts/materialsContext";
import * as THREE from "three";

const layers = new THREE.Layers();
layers.disableAll();
layers.enable(1);

export const FireworksScene = () => {
  const { gl, camera } = useThree();
  const fireworksScene = useRef<THREE.Group>(null);
  const {
    FIREWORK_BLUE,
    FIREWORK_LIGHT_BLUE,
    FIREWORK_DARK_BLUE,
    FIREWORK_RED,
    FIREWORK_DARK_RED,
    FIREWORK_GREEN,
    FIREWORK_LIGHT_GREEN,
    FIREWORK_DARK_GREEN,
    FIREWORK_PINK,
    FIREWORK_LIGHT_PINK,
    FIREWORK_DARK_PINK,
    FIREWORK_PURPLE,
    FIREWORK_LIGHT_PURPLE,
    FIREWORK_DARK_PURPLE,
  } = useMaterialsContext();

  useEffect(() => {
    fireworksScene?.current?.add(new THREE.AmbientLight(0xffffff));
  }, []);

  useFrame(() => {
    gl.autoClear = false;
    gl.clearDepth();
    fireworksScene.current && gl.render(fireworksScene.current, camera);
  }, 1);

  return (
    <group ref={fireworksScene}>
      {/* MID LEFT */}
      <FireworkGroup position={[-10, 0, -40]} delay={3000}>
        <BallFirework
          material1={FIREWORK_BLUE}
          material2={FIREWORK_BLUE}
          material3={FIREWORK_DARK_BLUE}
        />
        <RingFirework
          material1={FIREWORK_RED}
          material2={FIREWORK_DARK_RED}
          rotation={[Math.PI * 0.2, Math.PI * 0.25, 0]}
        />
      </FireworkGroup>
      <FireworkGroup position={[-13, 0, -40]} delay={12000}>
        <BallFirework
          material1={FIREWORK_GREEN}
          material2={FIREWORK_LIGHT_GREEN}
          material3={FIREWORK_DARK_GREEN}
        />
        <BallFirework
          material1={FIREWORK_BLUE}
          material2={FIREWORK_LIGHT_BLUE}
          material3={FIREWORK_DARK_BLUE}
          xOffset={-20}
          risingVelocityOffset={2}
        />
        <BallFirework
          material1={FIREWORK_RED}
          material2={FIREWORK_DARK_RED}
          material3={FIREWORK_DARK_RED}
          xOffset={20}
          risingVelocityOffset={2.3}
        />
      </FireworkGroup>

      {/* MID RIGHT */}
      <FireworkGroup position={[60, 0, -50]} delay={0}>
        <BallFirework
          material1={FIREWORK_BLUE}
          material2={FIREWORK_LIGHT_BLUE}
          material3={FIREWORK_DARK_BLUE}
        />
        <BallFirework
          material1={FIREWORK_RED}
          material2={FIREWORK_DARK_RED}
          material3={FIREWORK_RED}
          scale={0.5}
        />
      </FireworkGroup>
      <FireworkGroup position={[60, 0, -50]} delay={9000}>
        <BallFirework
          material2={FIREWORK_GREEN}
          material1={FIREWORK_LIGHT_GREEN}
          material3={FIREWORK_DARK_GREEN}
        />
        <BallFirework
          material1={FIREWORK_BLUE}
          material2={FIREWORK_LIGHT_BLUE}
          material3={FIREWORK_DARK_BLUE}
          scale={0.5}
          xOffset={20}
          zOffset={2}
          risingVelocityOffset={1.5}
        />
      </FireworkGroup>

      {/* FAR RIGHT */}
      <FireworkGroup position={[80, 0, -20]} delay={4000}>
        <BallFirework
          material1={FIREWORK_PURPLE}
          material2={FIREWORK_LIGHT_PURPLE}
          material3={FIREWORK_DARK_PURPLE}
        />
        <RingFirework
          material1={FIREWORK_PINK}
          material2={FIREWORK_LIGHT_PINK}
          scale={1}
          rotation={[0, Math.PI * 0.28, 0]}
        />
      </FireworkGroup>
      <FireworkGroup position={[60, 0, -50]} delay={9000}>
        <BallFirework
          material1={FIREWORK_RED}
          material2={FIREWORK_DARK_RED}
          material3={FIREWORK_PURPLE}
        />
        <BallFirework
          material1={FIREWORK_PINK}
          material2={FIREWORK_LIGHT_PINK}
          material3={FIREWORK_DARK_PINK}
          scale={1.2}
        />
      </FireworkGroup>

      {/* FAR LEFT */}
      <FireworkGroup position={[-80, 0, 0]} delay={4000}>
        <RingFirework
          material1={FIREWORK_PURPLE}
          material2={FIREWORK_LIGHT_PURPLE}
          scale={0.8}
          rotation={[Math.PI * 0.2, 0, 0]}
        />
        <RingFirework
          material1={FIREWORK_PINK}
          material2={FIREWORK_LIGHT_PINK}
          rotation={[Math.PI * 0.2, Math.PI * 0.35, 0]}
          scale={0.8}
        />
        <RingFirework
          material1={FIREWORK_GREEN}
          material2={FIREWORK_LIGHT_GREEN}
          rotation={[Math.PI * 0.2, Math.PI * 0.6, 0]}
          scale={0.8}
        />
        <RingFirework
          material1={FIREWORK_BLUE}
          material2={FIREWORK_LIGHT_BLUE}
          rotation={[Math.PI * 0.2, Math.PI * 1, 0]}
          scale={0.8}
        />
      </FireworkGroup>
      <FireworkGroup position={[-75, 0, -25]} delay={15500}>
        <BallFirework
          material1={FIREWORK_BLUE}
          material2={FIREWORK_DARK_BLUE}
          material3={FIREWORK_DARK_BLUE}
        />
        <RingFirework
          material1={FIREWORK_RED}
          material2={FIREWORK_DARK_RED}
          rotation={[Math.PI * 0.5, Math.PI * 0.25, 0]}
        />
        <RingFirework
          material1={FIREWORK_RED}
          material2={FIREWORK_DARK_RED}
          rotation={[Math.PI * 0.5, Math.PI * 0.8, 0]}
        />
      </FireworkGroup>
    </group>
  );
};
