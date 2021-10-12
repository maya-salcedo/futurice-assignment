import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Container = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  margin: 0;
  padding: 1rem 0;
  width: 100%;
  height: 3rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  color: #24292f;
  background-color: #f7f6f2;
`;

const Title = styled.h1`
  padding: 2.2rem 0 2rem 1rem;
  font-size: 1.2rem;
  margin: 0;

  @media (min-width: 400px) {
    font-size: 1.5rem;
  }

  @media (min-width: 500px) {
    font-size: 1.8rem;
  }
`;

const HomeIcon = styled.div`
  .icon {
    font-size: 1.5rem;
    color: #24292f;
    padding: 2rem 1rem 2rem 0.5rem;

    @media (min-width: 400px) {
      font-size: 1.6rem;
      padding-top: 2.2rem;
    }

    @media (min-width: 600px) {
      font-size: 2rem;
    }
  }
`;

export default function HeaderWrapper({ children }) {
  return <Container>{children}</Container>;
}

HeaderWrapper.Title = function HeaderWrapperTitle({ children }) {
  return <Title>{children}</Title>;
};

HeaderWrapper.HomeIcon = function HeaderWrapperHomeIcon() {
  return (
    <HomeIcon>
      <FontAwesomeIcon icon={faHome} className="icon" />
    </HomeIcon>
  );
};
