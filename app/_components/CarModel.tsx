import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useMaterialsContext } from "@contexts/materialsContext";

type GLTFResult = GLTF & {
  nodes: {
    Cube006: THREE.Mesh;
    Cube006_1: THREE.Mesh;
    Cube006_2: THREE.Mesh;
    Cube006_3: THREE.Mesh;
  };
  materials: {
    metal: THREE.MeshStandardMaterial;
  };
};

const lightGeometry = new THREE.PlaneGeometry(0.4, 0.3);

export function CarModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/car/car.glb") as GLTFResult;

  const { HEAD_LIGHT, TAIL_LIGHT, CAR_GLASS } = useMaterialsContext();

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube006.geometry} material={materials.metal} />
      <mesh geometry={nodes.Cube006_1.geometry} material={CAR_GLASS} />
      <mesh
        position={[0.5, 0.5, 1.5]}
        material={TAIL_LIGHT}
        geometry={lightGeometry}
      />
      <mesh
        position={[-0.5, 0.5, 1.5]}
        material={TAIL_LIGHT}
        geometry={lightGeometry}
      />
      <mesh
        position={[0.5, 0.5, -2.4]}
        rotation={[0, Math.PI, 0]}
        material={HEAD_LIGHT}
        geometry={lightGeometry}
      />
      <mesh
        position={[-0.5, 0.5, -2.4]}
        rotation={[0, Math.PI, 0]}
        material={HEAD_LIGHT}
        geometry={lightGeometry}
      />
    </group>
  );
}

useGLTF.preload("/car.glb");
