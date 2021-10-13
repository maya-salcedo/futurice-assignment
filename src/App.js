import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { OrgProfile } from './components/OrgProfile/OrgProfile';
import FooterCredits from './components/Footer/Footer';
import Header from './components/Header/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={Home} exact></Route>
      <Route path="/:org_name" component={OrgProfile}></Route>
      <FooterCredits />
    </BrowserRouter>
  );
}
