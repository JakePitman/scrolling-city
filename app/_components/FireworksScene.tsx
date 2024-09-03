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
      <FireworkGroup position={[-10, 0, -40]} delay={3000}>
        <BallFirework
          material1={FIREWORK_BLUE}
          material2={FIREWORK_LIGHT_BLUE}
          material3={FIREWORK_DARK_BLUE}
        />
        <RingFirework
          material1={FIREWORK_RED}
          material2={FIREWORK_DARK_RED}
          rotation={[Math.PI * 0.2, Math.PI * 0.25, 0]}
        />
      </FireworkGroup>

      <FireworkGroup position={[60, 0, -50]} delay={0}>
        <BallFirework
          material1={FIREWORK_DARK_BLUE}
          material2={FIREWORK_DARK_BLUE}
          material3={FIREWORK_DARK_BLUE}
        />
        <BallFirework
          material1={FIREWORK_RED}
          material2={FIREWORK_DARK_RED}
          material3={FIREWORK_RED}
          scale={0.5}
        />
      </FireworkGroup>
    </group>
  );
};
