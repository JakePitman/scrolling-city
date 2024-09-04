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
  FIREWORK_LIGHT_GREEN: new THREE.PointsMaterial({
    color: "#2fd91c",
    ...basePointMaterialArgs,
  }),
  FIREWORK_DARK_GREEN: new THREE.PointsMaterial({
    color: "#015711",
    ...basePointMaterialArgs,
  }),
  FIREWORK_BLUE: new THREE.PointsMaterial({
    color: "#031636",
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
  FIREWORK_PINK: new THREE.PointsMaterial({
    color: "#610a66",
    ...basePointMaterialArgs,
  }),
  FIREWORK_LIGHT_PINK: new THREE.PointsMaterial({
    color: "#80066d",
    ...basePointMaterialArgs,
  }),
  FIREWORK_DARK_PINK: new THREE.PointsMaterial({
    color: "#29021d",
    ...basePointMaterialArgs,
  }),
  FIREWORK_PURPLE: new THREE.PointsMaterial({
    color: "#23063d",
    ...basePointMaterialArgs,
  }),
  FIREWORK_LIGHT_PURPLE: new THREE.PointsMaterial({
    color: "#1f064f",
    ...basePointMaterialArgs,
  }),
  FIREWORK_DARK_PURPLE: new THREE.PointsMaterial({
    color: "#160229",
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
      Math.sin(clock.getElapsedTime() * 23)
    );
    materials.FIREWORK_LIGHT_GREEN.opacity = Math.abs(
      Math.sin(clock.getElapsedTime() * 24)
    );
    materials.FIREWORK_GREEN.opacity = Math.abs(
      Math.sin(clock.getElapsedTime() * 21)
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
    materials.FIREWORK_PINK.opacity = Math.abs(
      Math.sin(clock.getElapsedTime() * 35)
    );
    materials.FIREWORK_LIGHT_PINK.opacity = Math.abs(
      Math.sin(clock.getElapsedTime() * 33)
    );
    materials.FIREWORK_DARK_PINK.opacity = Math.abs(
      Math.sin(clock.getElapsedTime() * 31)
    );
    materials.FIREWORK_PURPLE.opacity = Math.abs(
      Math.sin(clock.getElapsedTime() * 35)
    );
    materials.FIREWORK_LIGHT_PURPLE.opacity = Math.abs(
      Math.sin(clock.getElapsedTime() * 33)
    );
    materials.FIREWORK_DARK_PURPLE.opacity = Math.abs(
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
