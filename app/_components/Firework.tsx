import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useWindowDimensions } from "../_hooks/useWindowDimensions";
import fireworkVertexShader from "../_shaders/fireworkShaders/vertex.glsl";
import fireworkFragmentShader from "../_shaders/fireworkShaders/fragment.glsl";

type Props = {
  position: THREE.Vector3;
  size: number;
  count: number;
};

export const Firework = ({ position, size, count }: Props) => {
  const textures = useTexture([
    "/particles/1.png",
    "/particles/2.png",
    "/particles/3.png",
    "/particles/4.png",
    "/particles/5.png",
    "/particles/6.png",
    "/particles/7.png",
    "/particles/8.png",
  ]);
  const { width, height } = useWindowDimensions();
  const sizes = {
    width,
    height,
    pixelRatio: Math.min(window.devicePixelRatio, 2),
  };
  const resolution = new THREE.Uniform(
    new THREE.Vector2(
      sizes.width * sizes.pixelRatio,
      sizes.height * sizes.pixelRatio
    )
  );
  // GEOMETRY
  const numberOfParticles = count;
  const positionsArray = new Float32Array(numberOfParticles * 3);
  for (let i = 0; i < numberOfParticles; i++) {
    const i3 = i * 3;
    positionsArray[i3 + 0] = Math.random() - 0.5;
    positionsArray[i3 + 1] = Math.random() - 0.5;
    positionsArray[i3 + 2] = Math.random() - 0.5;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positionsArray, 3)
  );

  // MATERIAL
  const texture = textures[7];
  texture.flipY = false;
  const material = new THREE.ShaderMaterial({
    vertexShader: fireworkVertexShader,
    fragmentShader: fireworkFragmentShader,
    uniforms: {
      uSize: new THREE.Uniform(size),
      uResolution: resolution,
      uTexture: new THREE.Uniform(texture),
    },
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  // POINTS
  // const firework = new THREE.Points(geometry, material)

  return <points material={material} geometry={geometry} position={position} />;
};
