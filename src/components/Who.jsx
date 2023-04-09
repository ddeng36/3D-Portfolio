import React,{ Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  display: flex;
  scroll-snap-align: center;
  justify-content: space-between;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    height: 200vh;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const Left = styled.div`
  flex: 1;
  position: relative;
`;
const Title = styled.h1`
  font-size: 74px;
  @media screen and (max-width: 768px){
    font-size: 60px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Line = styled.img`
  height: 5px;
`;
const SubTitle = styled.h2`
  color: #da4ea2;
`;
const Desc = styled.p`
  font-size: 24px;
`;
const Button = styled.button`
  border: none;
  background-color: #da4ea2;
  color: white;
  border: 5px;
  width: 120px;
  padding: 10px;
  cursor: pointer;
`;
const Img = styled.img`
  max-width: 100%;
  height: 500px;
  object-fit: contain;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
        <Canvas>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <Sphere args={[1, 100, 200]} scale={2.1} >
              <MeshDistortMaterial 
                color="#3d1c56"
                attach="material"
                distort={0.5}
                speed={2}></MeshDistortMaterial>
              </Sphere>

          </Suspense>
        </Canvas>
        <Img src="public/img/moon.png" alt="" />
        </Left>
        <Right>
          <Title>Think outsise the Square space.</Title>
          <WhatWeDo>
            <Line src="public/img/line.png" />
            <SubTitle>Who we are?</SubTitle>
          </WhatWeDo>
          <Desc>
            a creative group of designers and developers with a passion for the
            arts.
          </Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
