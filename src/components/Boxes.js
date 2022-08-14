import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

export function Box({ color }) {
    const box = useRef();
    const [scale] = useState(() => Math.pow(Math.random(), 2.0) * 0.5 * 0.05);

    return (
        <mesh castShadow ref={box} scale={scale}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} envMapIntensity={0.15} />
        </mesh>
    )
}