import { createContext } from 'react';

const OrgContext = createContext({
  org: null,
  setOrg: (org) => org,
});

export default OrgContext;
