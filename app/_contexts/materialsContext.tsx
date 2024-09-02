"use client";

import { createContext, useContext } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const basePointMaterialArgs = {
  transparent: true,
  size: 0.7,
  sizeAttenuation: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
};
const materials = {
  // FIREWORKS
  FIREWORK_RED: new THREE.PointsMaterial({
    color: "#8f061f",
    ...basePointMaterialArgs,
  }),
  FIREWORK_DARK_RED: new THREE.PointsMaterial({
    color: "#690404",
    ...basePointMaterialArgs,
  }),
  FIREWORK_GREEN: new THREE.PointsMaterial({
    color: "green",
    ...basePointMaterialArgs,
  }),
  FIREWORK_BLUE: new THREE.PointsMaterial({
    color: "#064a8f",
    ...basePointMaterialArgs,
  }),
  FIREWORK_LIGHT_BLUE: new THREE.PointsMaterial({
    color: "#06848f",
    ...basePointMaterialArgs,
  }),
  FIREWORK_DARK_BLUE: new THREE.PointsMaterial({
    color: "blue",
    ...basePointMaterialArgs,
  }),

  // BUILDINGS
  CONCRETE: new THREE.MeshBasicMaterial({
    color: 0x000000,
  }),
  LIT_GLASS: new THREE.MeshStandardMaterial({
    color: "white",
    emissive: "red",
    emissiveIntensity: 2,
    toneMapped: false,
  }),
  NORMAL_GLASS: new THREE.MeshBasicMaterial({
    color: "#000105",
  }),
  PAVEMENT: new THREE.MeshBasicMaterial({
    color: "#080808",
  }),

  // CARS
  HEAD_LIGHT: new THREE.MeshStandardMaterial({
    color: "#f5f781",
    toneMapped: false,
    emissive: "#f5f781",
    emissiveIntensity: 200,
  }),
  TAIL_LIGHT: new THREE.MeshStandardMaterial({
    color: "red",
    toneMapped: false,
    emissive: "red",
    emissiveIntensity: 200,
  }),
  CAR_GLASS: new THREE.MeshStandardMaterial({
    color: "#010b1c",
  }),
} as const;
type Materials = typeof materials;

const MaterialsContext = createContext<Materials | null>(null);

type Props = {
  children: React.ReactNode;
};

export const MaterialsContextProvider = ({ children }: Props) => {
  useFrame((state) => {
    const { clock } = state;
    materials.FIREWORK_RED.opacity = Math.abs(
      Math.sin(clock.getElapsedTime() * 10)
    );
    materials.FIREWORK_DARK_RED.opacity = Math.abs(
      Math.sin(clock.getElapsedTime() * 12)
    );
    materials.FIREWORK_GREEN.opacity = Math.abs(
      Math.sin(clock.getElapsedTime() * 13)
    );
    materials.FIREWORK_BLUE.opacity = Math.abs(
      Math.sin(clock.getElapsedTime() * 35)
    );
    materials.FIREWORK_LIGHT_BLUE.opacity = Math.abs(
      Math.sin(clock.getElapsedTime() * 33)
    );
    materials.FIREWORK_DARK_BLUE.opacity = Math.abs(
      Math.sin(clock.getElapsedTime() * 31)
    );
  });

  return (
    <MaterialsContext.Provider value={materials}>
      {children}
    </MaterialsContext.Provider>
  );
};

export const useMaterialsContext = () => {
  const context = useContext(MaterialsContext);
  if (!context) {
    throw new Error(
      "MaterialsContext must be used within a MaterialsContextProvider"
    );
  }
  return context;
};
