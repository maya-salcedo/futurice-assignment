import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Container = styled.header`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  color: #24292f;
`;

const Title = styled.h1`
  padding: 0 1rem 0 1rem;

  @media (max-width: 542px) {
    font-size: 1.5rem;
  }
`;

const HomeIcon = styled.div`
  padding: 1.4rem;
  .icon {
    font-size: 2rem;
    color: #24292f;
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
