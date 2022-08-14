import React, { useEffect } from 'react';
import { MeshReflectorMaterial } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
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

    return (
        <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
            <planeGeometry args={[30, 30]} />
            <MeshReflectorMaterial 
                envMapIntensity={0}
                dithering={true}
                normalMap={normal}
                roughnessMap={roughness}
                color={[0.015, 0.015, 0.015]}
                roughness={0.7}
                blur={[1000, 400]}
                mixStrength={80}
                mixContrast={1}
                resolution={1024}
                mirror={0}
                depthScale={0.01}
                minDepthThreshold={0.9}
                maxDepthThreshold={1}
                depthToBlurRatioBias={0.25}
                debug={0}
                reflectorOffset={0.2}
            />
        </mesh>
    );
}