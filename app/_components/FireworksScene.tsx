import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { FireworkGroup } from "@components/FireworkGroup";
import { BallFirework, RingFirework } from "@components/Fireworks";
import * as THREE from "three";

const layers = new THREE.Layers();
layers.disableAll();
layers.enable(1);

export const FireworksScene = () => {
  const { gl, camera } = useThree();
  const fireworksScene = useRef<THREE.Group>(null);

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
      <FireworkGroup>
        <BallFirework color1="#104685" color2="#042e5e" color3="#020d3d" />
        <RingFirework
          color1="#630202"
          color2="#750d0d"
          rotation={[Math.PI * 0.2, Math.PI * 0.25, 0]}
        />
      </FireworkGroup>
    </group>
  );
};
