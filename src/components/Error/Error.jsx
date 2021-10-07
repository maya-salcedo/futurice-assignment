import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
  color: red;
`;

export function ErrorContainer() {
  return <Text>Sorry something went wrong. Please retry.</Text>;
}
