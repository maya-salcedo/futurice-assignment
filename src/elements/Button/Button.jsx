import React from 'react';
import Link from './Styles';

export function ButtonLink({ orgName }) {
  return <Link to={{ pathname: `/${orgName}` }}>Learn more</Link>;
}
