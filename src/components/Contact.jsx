import React from "react";
import styled from "styled-components";
import MapChart from "./MapChart";
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
  gap: 20px;
  scroll-snap-align: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`
const Title = styled.h1``;
const Input = styled.input`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  padding: 20px;
  background-color: #da4ea2;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
`;
const Textarea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Contact = () => {
  const handleSubmit = () => {
    alert("Message sent")
  }

  return (
    <Section>
      <Container>
        <Left>
          <Form onSubmit={handleSubmit}>
          <Title>Contact us</Title>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Textarea placeholder="Write your message" rows={10}/>
          <Button>Send</Button>
          </Form>

        </Left>
        <Right>
          <MapChart />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
