
import { OrbitControls, Stage  } from '@react-three/drei'
import React, { Suspense } from 'react'
import Tree from './Tree'
import { Canvas } from '@react-three/fiber'

const Development = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
      <Stage environment="city" intensity={0.6}>
      <Tree/>
      <OrbitControls enableZoom={false} />
      </Stage>
      </Suspense>
    </Canvas>
  )
}

export default Development