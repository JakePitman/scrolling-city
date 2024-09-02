import * as THREE from "three";

// material1.current.opacity = Math.abs(
//   Math.sin(clock.getElapsedTime() * 10)
// );
// material2.current.opacity = Math.abs(
//   Math.sin(clock.getElapsedTime() * 13)
// );
// material3.current.opacity = Math.abs(
//   Math.sin(clock.getElapsedTime() * 35)
// );
const baseArgs = {
  transparent: true,
  size: 1,
  sizeAttenuation: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
};

export const fireworkBlue = new THREE.PointsMaterial({
  color: "blue",
  ...baseArgs,
});

export const fireworkGreen = new THREE.PointsMaterial({
  color: "green",
  ...baseArgs,
});

export const fireworkRed = new THREE.PointsMaterial({
  color: "Red",
  ...baseArgs,
});
