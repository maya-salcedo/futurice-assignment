import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  flex: 1;
`;

export default function Footer() {
  return <StyledFooter>This App is built using Github's REST API</StyledFooter>;
}
