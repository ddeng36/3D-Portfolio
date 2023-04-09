import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px
    ) {
    width: 100%;
  }

`;
const Container = styled.div`
  width: 1200px;

  display: flex;
  justify-content: space-between;
  align-items: center;

`;
const Links = styled.div`
  @media only screen and (max-width: 768px) {
    padding: 10px;
    
  }
  display: flex;
  gap: 50px;
`;

const Logo = styled.img`
  width: 100px;
  height: 62.6px;

`;
const List = styled.ul`
  display: flex;
  gap: 50px;
  align-items: center;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
    
  }
`;
const ListItem = styled.li`
  cursor: pointer;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;
const Button = styled.button`
width: 100px;
padding: 10px;
background-color: #da4ea2;
color: white;
border-radius: 5px;
border: none;
cursor: pointer;
`;
const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="public/img/logo-no-background.png" alt="logo"></Logo>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="public/img/search.png" />
          <Button>Hire now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
