import React, { useEffect } from 'react';
import { MeshReflectorMaterial } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { LinearEncoding, RepeatWrapping, TextureLoader } from 'three';

export function Ground() {
    const [roughness, normal] = useLoader(TextureLoader, [
        process.env.PUBLIC_URL + 'textures/terrain-roughness.jpeg',
        process.env.PUBLIC_URL + 'textures/terrain-normal.jpeg',
    ]);

    useEffect(() => {
        [normal, roughness].forEach((t) => {
            t.wrapS = RepeatWrapping;
            t.wrapT = RepeatWrapping;
            t.repeat.set(5, 5);
        });

        normal.encoding = LinearEncoding;
    }, [normal, roughness]);

    useFrame((state, delta) => {
        let t = -state.clock.getElapsedTime() * 0.128;
        roughness.offset.set(0, t);
        normal.offset.set(0, t);
    });

    return (
        <mesh 
            castShadow 
            receiveShadow 
            rotation-x={-Math.PI * 0.5}
        >
            <planeGeometry args={[30, 30]} />
            <MeshReflectorMaterial
                blur={[1000, 400]}
                color={[0.015, 0.015, 0.015]}
                debug={0}
                depthScale={0.01}
                depthToBlurRatioBias={0.25}
                dithering={true}
                envMapIntensity={0}
                maxDepthThreshold={1}
                minDepthThreshold={0.9}
                mirror={0}
                mixContrast={1}
                mixStrength={80}
                normalMap={normal}
                reflectorOffset={0.2}
                resolution={1024}
                roughness={0.7}
                roughnessMap={roughness}
            />
        </mesh>
    );
}