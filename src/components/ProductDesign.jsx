
import { OrbitControls, Stage  } from '@react-three/drei'
import React, { Suspense } from 'react'
import Car from './Car'
import { Canvas } from '@react-three/fiber'

const ProductDesign = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
      <Stage environment="city" intensity={0.6}>
      <Car />
      <OrbitControls enableZoom={false} />
      </Stage>
      </Suspense>
    </Canvas>
  )
}

export default ProductDesign