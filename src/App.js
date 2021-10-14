import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Repo from './components/Repo/Repo';
import Members from './components/Members/Members';
import FooterCredits from './components/Footer/Footer';
import OrgContext from './contexts/OrgContext';

export default function App() {
  const [org, setOrg] = useState(null);
  return (
    <BrowserRouter>
      <OrgContext.Provider value={{ org, setOrg }}>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/:org_name/repos" component={Repo}></Route>
          <Route path="/:org_name/members" component={Members}></Route>
        </Switch>
        <FooterCredits />
      </OrgContext.Provider>
    </BrowserRouter>
  );
}
