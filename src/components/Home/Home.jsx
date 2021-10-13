import React, { useState } from 'react';
import axios from 'axios';

import { ButtonLink } from '../../elements/Button/Button';
import HomeWrapper from './Styles';
import { LoadingContainer } from '../Loading/Loading';
import { ErrorContainer } from '../Error/Error';
import NotFound from '../NotFound/NotFound';

export function Home() {
  const [userInput, setUserInput] = useState('futurice');
  const [org, setOrg] = useState();
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hasNoRepo, setHasNoRepo] = useState(false);

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const { data: org } = await axios.get(
        `https://api.github.com/orgs/${userInput}`
      );
      const { data: repositories } = await axios.get(
        `https://api.github.com/orgs/${userInput}/repos`
      );
      setOrg(org);
      if (repositories.length) {
        const rankedRepo = repositories
          .filter(({ size }) => size !== null)
          .sort((x, y) => y.size - x.size)
          .map((x, i) => Object.assign({ rank: i + 1 }, x));
        setRepos(rankedRepo);
      } else {
        setHasNoRepo(true);
      }
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      setRepos([]);
      setUserInput('futurice');
      console.error(`Error at Card: ${err}`);
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
              placeholder="org name"
              onChange={handleSearch}
            />
            <HomeWrapper.SearchButton onClick={handleSubmit} />
          </HomeWrapper.Search>
          <HomeWrapper.TextSmall>
            {repos?.length === 0 && '*** defaults to Futurice'}
          </HomeWrapper.TextSmall>
          {hasNoRepo && <NotFound />}
          {repos?.length > 0 && (
            <>
              <HomeWrapper.Name>{org?.name}</HomeWrapper.Name>
              <ButtonLink orgName={userInput} />
              <HomeWrapper.Table>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <HomeWrapper.RepoHeading>
                      Repositories
                    </HomeWrapper.RepoHeading>
                    <HomeWrapper.SizeHeading>Size</HomeWrapper.SizeHeading>
                  </tr>
                </thead>
                <tbody>
                  {repos?.map((repo) => (
                    <tr key={repo?.id}>
                      <td>{repo?.rank}</td>
                      <HomeWrapper.RepoTitle>
                        <a
                          href={repo?.clone_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {repo?.name}
                        </a>
                      </HomeWrapper.RepoTitle>
                      <HomeWrapper.RepoSize>{repo?.size}</HomeWrapper.RepoSize>
                    </tr>
                  ))}
                </tbody>
              </HomeWrapper.Table>
            </>
          )}
        </HomeWrapper.Card>
      )}
    </HomeWrapper>
  );
}
