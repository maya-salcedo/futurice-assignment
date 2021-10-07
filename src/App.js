import { BrowserRouter, Route } from 'react-router-dom';
import { Card } from './components/Card/Card';
import { CompanyProfile } from './components/CompanyProfile/CompanyProfile';

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Card} exact></Route>
      <Route path="/:company_name" component={CompanyProfile}></Route>
    </BrowserRouter>
  );
}
