import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div``;

const Link = styled(ReachRouterLink)`
  text-decoration: none;
  background-color: #3d56b2;
  opacity: 0.8;
  width: 8rem;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 1rem;
  border-radius: 0.2rem;
  margin-top: 1rem;
  padding: 0.8rem 2rem;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  &:hover {
    opacity: 1;
  }
`;

export default function Button({ children }) {
  return <Container>{children}</Container>;
}

Button.Link = function ButtonLink({ to, children }) {
  return <Link to={to}>{children}</Link>;
};
