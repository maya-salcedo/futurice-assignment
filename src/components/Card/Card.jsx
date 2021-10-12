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
            <CardWrapper.Search>
              <CardWrapper.SearchInput
                placeholder="search company name"
                onChange={handleSearch}
              />
              <CardWrapper.SearchButton onClick={handleSubmit} />
            </CardWrapper.Search>
            {repos?.length > 0 && (
              <>
                <CardWrapper.Name>
                  {company?.name}
                  <p>(company name)</p>
                </CardWrapper.Name>
                <CardWrapper.Table>
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <CardWrapper.RepoHeading>
                        Repositories
                      </CardWrapper.RepoHeading>
                      <CardWrapper.SizeHeading>Size</CardWrapper.SizeHeading>
                    </tr>
                  </thead>
                  <tbody>
                    {repos?.map((repo) => (
                      <tr key={repo?.id}>
                        <td>{repo?.rank}</td>
                        <CardWrapper.RepoTitle>
                          <a
                            href={repo?.clone_url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {repo?.name}
                          </a>
                        </CardWrapper.RepoTitle>
                        <CardWrapper.RepoSize>
                          {repo?.size}
                        </CardWrapper.RepoSize>
                      </tr>
                    ))}
                  </tbody>
                </CardWrapper.Table>
                <ButtonLink companyName={userInput} />
              </>
            )}
          </CardWrapper.Card>
        </>
      )}
    </CardWrapper>
  );
}
