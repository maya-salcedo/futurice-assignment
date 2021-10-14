import React, { useContext, useState } from 'react';
import axios from 'axios';

import OrgContext from '../../contexts/OrgContext';

import Button from '../../elements/Button';
import HomeWrapper from './Styles';
import { LoadingContainer } from '../Loading/Loading';
import { ErrorContainer } from '../Error/Error';
import NotFound from '../NotFound/NotFound';

export default function Home() {
  const [userInput, setUserInput] = useState('futurice');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { org, setOrg } = useContext(OrgContext);

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.github.com/orgs/${userInput}`
      );
      setOrg(data);
      setIsLoading(false);
      setIsError(false);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      setUserInput('');
      console.error(`Error at Home: ${err}`);
    }
  };

  return (
    <HomeWrapper>
      {isError && <ErrorContainer />}
      {isLoading ? (
        <LoadingContainer />
      ) : (
        <HomeWrapper.Card>
          <HomeWrapper.Search>
            <HomeWrapper.SearchInput
              placeholder="Company name"
              onChange={handleSearch}
            />
            <HomeWrapper.SearchButton onClick={handleSubmit} />
          </HomeWrapper.Search>
          {!org && (
            <HomeWrapper.TextSmall>
              *** defaults to Futurice
            </HomeWrapper.TextSmall>
          )}
          {org && (
            <>
              <HomeWrapper.Avatar src={org?.avatar_url} alt={org?.login} />
              <HomeWrapper.Title>{org?.name}</HomeWrapper.Title>
              <HomeWrapper.Text>
                <strong>Description: </strong> {org?.description}
                <br />
                <strong>GitHub: </strong>
                <HomeWrapper.Link href={org?.html_url}>
                  {org?.html_url}
                </HomeWrapper.Link>
                <br />
                <strong>Public repositories: </strong> {org?.public_repos}{' '}
                <br />
                <strong>Website: </strong>
                <HomeWrapper.Link href={org?.blog}>
                  {org?.blog}
                </HomeWrapper.Link>
              </HomeWrapper.Text>
              <Button>
                <Button.Link to={{ pathname: `/${userInput}/repos` }}>
                  Repos
                </Button.Link>
                <Button.Link to={{ pathname: `/${userInput}/members` }}>
                  Members
                </Button.Link>
              </Button>
            </>
          )}
        </HomeWrapper.Card>
      )}
    </HomeWrapper>
  );
}
