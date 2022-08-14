import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { CarShow } from './CarShow';
import { Ground } from './Ground';
import './style.css';

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
        <Ground />
      </Canvas>
    </Suspense>
  )
};

export default App;