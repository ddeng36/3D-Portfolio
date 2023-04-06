import { OrbitControls, Stage  } from '@react-three/drei'
import React, { Suspense } from 'react'
import Space from './Space'
import { Canvas } from '@react-three/fiber'

const WebDesign = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
      <Stage environment="city" intensity={0.6}>
      <Space>

      </Space>
      <OrbitControls enableZoom={false} />
      </Stage>
      </Suspense>
    </Canvas>
  )
}

export default WebDesign