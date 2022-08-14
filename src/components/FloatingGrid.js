import { useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { RepeatWrapping, TextureLoader } from 'three';

export function FloatingGrid() {
    const diffuse = useLoader(TextureLoader, process.env.PUBLIC_URL + 'textures/grid-texture.png');

    useEffect(() => {
        diffuse.wrapS = RepeatWrapping;
        diffuse.wrapT = RepeatWrapping;
        diffuse.anisotropy = 4;
        diffuse.repeat.set(30, 30);
        diffuse.offset.set(0, 0);
    }, [diffuse]);

    return (
        <>
            <mesh
                position={[0, 0.425, 0]}
                rotation-x={-Math.PI * 0.5}
            >
                <planeGeometry 
                    args={[35, 35]}
                />
                <meshBasicMaterial 
                    alphaMap={diffuse}
                    color={[1, 1, 1]}
                    map={diffuse}
                    opacity={0.15}
                    transparent={true}
                />
            </mesh>
        </>
    )
}