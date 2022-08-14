import React from 'react';
import { CubeCamera, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Car } from './Car';
import { Rings } from './Rings';
import { Boxes } from './Boxes';
import { FloatingGrid } from './FloatingGrid';

export function CarShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
        <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
        <color args={[0, 0, 0]} attach="background" />
        <CubeCamera resolution={256} frames={Infinity}>
          {(texture) => (
            <>
              <Environment map={texture} />
              <Car />
            </>
          )}
        </CubeCamera>
        <Rings />
        <Boxes />
        <FloatingGrid />
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