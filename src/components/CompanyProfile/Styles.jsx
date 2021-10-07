import React from 'react';
import styled from 'styled-components';
import CardWrapper from '../Card/Styles';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 2rem 1rem;
`;

const Box = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 0.2rem;
  padding: 2rem 2rem;
  margin: 1rem;

  @media (max-width: 482px) {
    margin: 1rem 0.5rem;
    padding: 2rem 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;

  @media (max-width: 590px) {
    font-size: 1.5rem;
  }

  @media (max-width: 478px) {
    font-size: 1.1rem;
  }
`;

const Text = styled.p``;

export default function UserWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

CardWrapper.Box = function UserWrapperBox({ children }) {
  return <Box>{children}</Box>;
};

CardWrapper.Title = function UserWrapperTitle({ children }) {
  return <Title>{children}</Title>;
};

CardWrapper.Text = function UserWrapperText({ children }) {
  return <Text>{children}</Text>;
};
