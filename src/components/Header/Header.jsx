import React from 'react';
import { Link } from 'react-router-dom';

import HeaderWrapper from './Styles';

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderWrapper.Title>Search Companies in GitHub</HeaderWrapper.Title>
      <Link to="/">
        <HeaderWrapper.HomeIcon />
      </Link>
    </HeaderWrapper>
  );
}
