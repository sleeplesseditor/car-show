import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bloom, ChromaticAberration, DepthOfField, EffectComposer } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { CarShow } from './components/CarShow';
import { Ground } from './components/Ground';
import './style.css';

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
        <Ground />
        <EffectComposer>
          <DepthOfField 
            bokehScale={3}
            focusDistance={0.0035}
            focalLength={0.01}
            height={480}
          />
          <Bloom 
            blendFunction={BlendFunction.ADD}
            height={300}
            intensity={1.3}
            kernelSize={5}
            luminanceSmoothing={0.025}
            luminanceThreshold={0.15}
            width={300}
          />
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL}
            offset={[0.0005, 0.0012]}
          />
        </EffectComposer>
      </Canvas>
    </Suspense>
  )
};

export default App;