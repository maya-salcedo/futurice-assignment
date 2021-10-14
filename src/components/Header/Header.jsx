import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import OrgContext from '../../contexts/OrgContext';
import HeaderWrapper from './Styles';

export default function Header() {
  const { setOrg } = useContext(OrgContext);
  return (
    <HeaderWrapper>
      <HeaderWrapper.Title>Search Company's Repo in GitHub</HeaderWrapper.Title>
      <Link to="/" onClick={() => setOrg(null)}>
        <HeaderWrapper.HomeIcon />
      </Link>
    </HeaderWrapper>
  );
}
