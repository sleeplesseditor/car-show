import React from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Car } from './Car';
import { Rings } from './Rings';

export function CarShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
        <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
        <color args={[0, 0, 0]} attach="background" />
        <Rings />
        <Car />
        <spotLight
            angle={0.6}
            castShadow
            color={[1, 0.25, 0.7]}
            intensity={1.5}
            penumbra={0.5}
            position={[5, 5, 0]}
            shadow-bias={-0.0001}
        />
        <spotLight
            angle={0.6}
            castShadow
            color={[0.14, 0.5, 1]}
            intensity={2}
            penumbra={0.5}
            position={[-5, 5, 0]}
            shadow-bias={-0.0001}
        />
    </>
  )
}