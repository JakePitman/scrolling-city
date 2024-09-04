import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useMaterialsContext } from "@contexts/materialsContext";

type GLTFResult = GLTF & {
  nodes: {
    ["1a"]: THREE.Mesh;
    ["1a_1"]: THREE.Mesh;
    ["1a_2"]: THREE.Mesh;
    ["1a_3"]: THREE.Mesh;
    ["2a"]: THREE.Mesh;
    ["2a_1"]: THREE.Mesh;
    ["2a_2"]: THREE.Mesh;
    ["2a_3"]: THREE.Mesh;
    ["3a"]: THREE.Mesh;
    ["3a_1"]: THREE.Mesh;
    ["3a_2"]: THREE.Mesh;
    ["3a_3"]: THREE.Mesh;
    ["1b"]: THREE.Mesh;
    ["1b_1"]: THREE.Mesh;
    ["1b_2"]: THREE.Mesh;
    ["1b_3"]: THREE.Mesh;
    ["2b"]: THREE.Mesh;
    ["2b_1"]: THREE.Mesh;
    ["2b_2"]: THREE.Mesh;
    ["2b_3"]: THREE.Mesh;
    ["3b"]: THREE.Mesh;
    ["3b_1"]: THREE.Mesh;
    ["3b_2"]: THREE.Mesh;
    ["3b_3"]: THREE.Mesh;
    ["1c"]: THREE.Mesh;
    ["1c_1"]: THREE.Mesh;
    ["1c_2"]: THREE.Mesh;
    ["1c_3"]: THREE.Mesh;
    ["2c"]: THREE.Mesh;
    ["2c_1"]: THREE.Mesh;
    ["2c_2"]: THREE.Mesh;
    ["2c_3"]: THREE.Mesh;
    ["3c"]: THREE.Mesh;
    ["3c_1"]: THREE.Mesh;
    ["3c_2"]: THREE.Mesh;
    ["3c_3"]: THREE.Mesh;
  };
};

type BuildingProps = {};
export const Building1a = ({}: BuildingProps) => {
  const { nodes } = useGLTF("models/buildings/all_buildings.glb") as GLTFResult;
  const { CONCRETE, LIT_GLASS, NORMAL_GLASS, PAVEMENT } = useMaterialsContext();

  return (
    <group position={[0, 0, 0]}>
      <mesh geometry={nodes["1a"].geometry} material={CONCRETE} />
      <mesh geometry={nodes["1a_1"].geometry} material={LIT_GLASS} />
      <mesh geometry={nodes["1a_2"].geometry} material={NORMAL_GLASS} />
      <mesh geometry={nodes["1a_3"].geometry} material={PAVEMENT} />
    </group>
  );
};
export const Building1b = ({}: BuildingProps) => {
  const { nodes } = useGLTF("models/buildings/all_buildings.glb") as GLTFResult;
  const { CONCRETE, LIT_GLASS, NORMAL_GLASS, PAVEMENT } = useMaterialsContext();

  return (
    <group position={[0, 0, 0]}>
      <mesh geometry={nodes["1b"].geometry} material={PAVEMENT} />
      <mesh geometry={nodes["1b_1"].geometry} material={CONCRETE} />
      <mesh geometry={nodes["1b_2"].geometry} material={LIT_GLASS} />
      <mesh geometry={nodes["1b_3"].geometry} material={NORMAL_GLASS} />
    </group>
  );
};
export const Building1c = ({}: BuildingProps) => {
  const { nodes } = useGLTF("models/buildings/all_buildings.glb") as GLTFResult;
  const { CONCRETE, LIT_GLASS, NORMAL_GLASS, PAVEMENT } = useMaterialsContext();

  return (
    <group position={[0, 0, 0]}>
      <mesh geometry={nodes["1c"].geometry} material={PAVEMENT} />
      <mesh geometry={nodes["1c_1"].geometry} material={CONCRETE} />
      <mesh geometry={nodes["1c_2"].geometry} material={LIT_GLASS} />
      <mesh geometry={nodes["1c_3"].geometry} material={NORMAL_GLASS} />
    </group>
  );
};
export const Building2a = ({}: BuildingProps) => {
  const { nodes } = useGLTF("models/buildings/all_buildings.glb") as GLTFResult;
  const { CONCRETE, LIT_GLASS, NORMAL_GLASS, PAVEMENT } = useMaterialsContext();

  return (
    <group position={[0, 0, 0]}>
      <mesh geometry={nodes["2a"].geometry} material={PAVEMENT} />
      <mesh geometry={nodes["2a_1"].geometry} material={CONCRETE} />
      <mesh geometry={nodes["2a_2"].geometry} material={LIT_GLASS} />
      <mesh geometry={nodes["2a_3"].geometry} material={NORMAL_GLASS} />
    </group>
  );
};
export const Building2b = ({}: BuildingProps) => {
  const { nodes } = useGLTF("models/buildings/all_buildings.glb") as GLTFResult;
  const { CONCRETE, LIT_GLASS, NORMAL_GLASS, PAVEMENT } = useMaterialsContext();

  return (
    <group position={[0, 0, 0]}>
      <mesh geometry={nodes["2b"].geometry} material={PAVEMENT} />
      <mesh geometry={nodes["2b_1"].geometry} material={CONCRETE} />
      <mesh geometry={nodes["2b_2"].geometry} material={LIT_GLASS} />
      <mesh geometry={nodes["2b_3"].geometry} material={NORMAL_GLASS} />
    </group>
  );
};
export const Building2c = ({}: BuildingProps) => {
  const { nodes } = useGLTF("models/buildings/all_buildings.glb") as GLTFResult;
  const { CONCRETE, LIT_GLASS, NORMAL_GLASS, PAVEMENT } = useMaterialsContext();

  return (
    <group position={[0, 0, 0]}>
      <mesh geometry={nodes["2c"].geometry} material={PAVEMENT} />
      <mesh geometry={nodes["2c_1"].geometry} material={CONCRETE} />
      <mesh geometry={nodes["2c_2"].geometry} material={LIT_GLASS} />
      <mesh geometry={nodes["2c_3"].geometry} material={NORMAL_GLASS} />
    </group>
  );
};
export const Building3a = ({}: BuildingProps) => {
  const { nodes } = useGLTF("models/buildings/all_buildings.glb") as GLTFResult;
  const { CONCRETE, LIT_GLASS, NORMAL_GLASS, PAVEMENT } = useMaterialsContext();

  return (
    <group position={[0, 0, 0]}>
      <mesh geometry={nodes["3a"].geometry} material={CONCRETE} />
      <mesh geometry={nodes["3a_1"].geometry} material={LIT_GLASS} />
      <mesh geometry={nodes["3a_2"].geometry} material={NORMAL_GLASS} />
      <mesh geometry={nodes["3a_3"].geometry} material={PAVEMENT} />
    </group>
  );
};
export const Building3b = ({}: BuildingProps) => {
  const { nodes } = useGLTF("models/buildings/all_buildings.glb") as GLTFResult;
  const { CONCRETE, LIT_GLASS, NORMAL_GLASS, PAVEMENT } = useMaterialsContext();

  return (
    <group position={[0, 0, 0]}>
      <mesh geometry={nodes["3b"].geometry} material={PAVEMENT} />
      <mesh geometry={nodes["3b_1"].geometry} material={CONCRETE} />
      <mesh geometry={nodes["3b_2"].geometry} material={LIT_GLASS} />
      <mesh geometry={nodes["3b_3"].geometry} material={NORMAL_GLASS} />
    </group>
  );
};
export const Building3c = ({}: BuildingProps) => {
  const { nodes } = useGLTF("models/buildings/all_buildings.glb") as GLTFResult;
  const { CONCRETE, LIT_GLASS, NORMAL_GLASS, PAVEMENT } = useMaterialsContext();

  return (
    <group position={[0, 0, 0]}>
      <mesh geometry={nodes["3c"].geometry} material={PAVEMENT} />
      <mesh geometry={nodes["3c_1"].geometry} material={CONCRETE} />
      <mesh geometry={nodes["3c_2"].geometry} material={LIT_GLASS} />
      <mesh geometry={nodes["3c_3"].geometry} material={NORMAL_GLASS} />
    </group>
  );
};

useGLTF.preload("/all_buildings.glb");
