import React from 'react';
import styled from 'styled-components';

const Text = styled.h2`
  color: orange;
`;
export default function NotFound({ text }) {
  return <Text>No public {text} found.</Text>;
}
