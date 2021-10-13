import React from 'react';
import styled from 'styled-components';

const Text = styled.h2`
  color: orange;
`;
export default function NotFound() {
  return <Text>No public repositories found.</Text>;
}
