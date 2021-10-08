import { BrowserRouter, Route } from 'react-router-dom';
import { Card } from './components/Card/Card';
import { CompanyProfile } from './components/CompanyProfile/CompanyProfile';
import Header from './components/Header/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={Card} exact></Route>
      <Route path="/:company_name" component={CompanyProfile}></Route>
    </BrowserRouter>
  );
}
