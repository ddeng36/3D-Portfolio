import React,{ Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import { OrbitControls } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  display: flex;
  scroll-snap-align: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
  }

`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (min-width: 768px){
    flex: 1;
    text-align: center;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Title = styled.h1`
  font-size: 74px;
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
  color: lightgray;
  @media only screen and (max-width: 768px) {
    text-align: center;
    padding: 20px;
  }
`;
const Button = styled.button`
  border: none;
  background-color: #da4ea2;
  color: white;
  border: 5px;
  width: 100px;
  padding: 10px;
  cursor: pointer;
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think.Make.Solve</Title>
          <WhatWeDo>
            <Line src="public/img/line.png" />
            <SubTitle>What we do?</SubTitle>
          </WhatWeDo>
          <Desc>
            We enjoy creating delightful, human-centered digital experience
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
