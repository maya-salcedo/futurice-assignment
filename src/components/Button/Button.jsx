import React from 'react';
import Link from './Styles';

export function ButtonLink({ companyName }) {
  return (
    <Link to={{ pathname: `/${companyName}` }}>
      Learn more about the company
    </Link>
  );
}
