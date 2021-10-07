import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(ReachRouterLink)`
  text-decoration: none;
  background-color: #3d56b2;
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
`;

export default function Link({ children, to }) {
  return <StyledLink to={to}>{children}</StyledLink>;
}
