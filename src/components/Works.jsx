import React, { useState } from "react";
import styled from "styled-components";
import Development from "./Development";
import ProductDesign from "./ProductDesign";
import WebDesign from "./WebDesign";

const data = [
  "Web Design",
  "Web Development",
  "Illustration",
  "product Design",
  "Social Media",
];

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
`;
const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Item = styled.li`
  font-size: 80px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 1px white;
  cursor: pointer;
  position: relative;
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Works = () => {
  const [work, setWork] = useState("Web Design");

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <Item key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </Item>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Web Design" ? (
            <WebDesign></WebDesign>
          ) : work === "Web Development" ? (
            <Development></Development>
          ) : (
            <ProductDesign></ProductDesign>
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
