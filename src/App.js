import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Repo } from './components/Repo/Repo';
import { Members } from './components/Members/Members';
import FooterCredits from './components/Footer/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" component={Home} exact></Route>
        <Route path="/:org_name/repos" component={Repo}></Route>
        <Route path="/:org_name/members" component={Members}></Route>
      </main>
      <FooterCredits />
    </BrowserRouter>
  );
}
