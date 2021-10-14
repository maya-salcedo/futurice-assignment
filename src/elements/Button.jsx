import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Link = styled(ReachRouterLink)`
  text-decoration: none;
  background-color: #3d56b2;
  opacity: 0.8;
  width: 5rem;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 1rem;
  border-radius: 0.2rem;
  margin: 1rem 0.5rem 0 0.5rem;
  padding: 0.8rem 1rem;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  &:hover {
    opacity: 1;
  }

  @media (min-width: 400px) {
    width: 6rem;
  }
`;

export default function Button({ children }) {
  return <Container>{children}</Container>;
}

Button.Link = function ButtonLink({ to, children }) {
  return <Link to={to}>{children}</Link>;
};
