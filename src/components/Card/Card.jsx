import React, { useState } from 'react';
import axios from 'axios';

import { ButtonLink } from '../Button/Button';
import CardWrapper from './Styles';
import { LoadingContainer } from '../Loading/Loading';
import { ErrorContainer } from '../Error/Error';

export function Card() {
  const [userInput, setUserInput] = useState('futurice');
  const [company, setCompany] = useState();
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const { data: company } = await axios.get(
        `https://api.github.com/orgs/${userInput}`
      );
      const { data: repositories } = await axios.get(
        `https://api.github.com/orgs/${userInput}/repos`
      );
      setCompany(company);
      const rankedRepo = repositories
        .filter(({ size }) => size !== null)
        .sort((x, y) => y.size - x.size)
        .map((x, i) => Object.assign({ rank: i + 1 }, x));
      setRepos(rankedRepo);

      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      console.error(`Error at Card: ${err}`);
    }
  };

  return (
    <CardWrapper>
      {isError && <ErrorContainer />}
      {isLoading ? (
        <LoadingContainer />
      ) : (
        <>
          <CardWrapper.Card>
            <CardWrapper.Name>Company's Repos Ranked by Size</CardWrapper.Name>
            <CardWrapper.Search>
              <CardWrapper.SearchInput
                placeholder="search company"
                onChange={handleSearch}
              />
              <CardWrapper.SearchButton onClick={handleSubmit} />
            </CardWrapper.Search>
            <CardWrapper.Name>
              {company?.name && (
                <>
                  {company?.name}
                  <p>(company)</p>
                </>
              )}
            </CardWrapper.Name>
            {repos.map((repo) => (
              <CardWrapper.ListWrapper key={repo?.id}>
                <CardWrapper.Group>
                  <CardWrapper.Rank>{repo?.rank}</CardWrapper.Rank>
                  <CardWrapper.RepoName>{repo?.name}</CardWrapper.RepoName>
                </CardWrapper.Group>
                <CardWrapper.Size>{repo?.size}</CardWrapper.Size>
              </CardWrapper.ListWrapper>
            ))}
            <ButtonLink companyName={userInput} />
          </CardWrapper.Card>
        </>
      )}
    </CardWrapper>
  );
}
