import * as THREE from "three";

const geometry = new THREE.PlaneGeometry(200, 200, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: "black" });
export const Road = () => {
  return (
    <mesh
      geometry={geometry}
      material={material}
      rotation={[-Math.PI * 0.5, 0, 0]}
      position={[0, 0, 0]}
    />
  );
};
