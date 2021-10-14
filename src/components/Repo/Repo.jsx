import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Button from '../../elements/Button';
import RepoWrapper from './Styles';
import { LoadingContainer } from '../Loading/Loading';
import { ErrorContainer } from '../Error/Error';
import NotFound from '../NotFound/NotFound';

export default function Repo() {
  const { org_name } = useParams();
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.github.com/orgs/${org_name}/repos`
      );
      const rankedRepo = data
        .filter(({ size }) => size !== null)
        .sort((x, y) => y.size - x.size)
        .map((x, i) => Object.assign({ rank: i + 1 }, x));
      setRepos(rankedRepo);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      console.error(`Error at Repo: ${err}`);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <RepoWrapper>
      {isError && <ErrorContainer />}
      {isLoading ? (
        <LoadingContainer />
      ) : (
        <RepoWrapper.Card>
          <RepoWrapper.Name>{org_name}</RepoWrapper.Name>
          <Button>
            <Button.Link to="/">Company</Button.Link>
            <Button.Link to={{ pathname: `/${org_name}/members` }}>
              Members
            </Button.Link>
          </Button>
          {repos?.length > 0 ? (
            <>
              <RepoWrapper.Text>
                Repositories ranked according to size.
              </RepoWrapper.Text>
              <RepoWrapper.Table>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <RepoWrapper.RepoHeading>
                      Repositories
                    </RepoWrapper.RepoHeading>
                    <RepoWrapper.SizeHeading>Size</RepoWrapper.SizeHeading>
                  </tr>
                </thead>
                <tbody>
                  {repos?.map((repo) => (
                    <tr key={repo?.id}>
                      <td>{repo?.rank}</td>
                      <RepoWrapper.RepoTitle>
                        <a
                          href={repo?.clone_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {repo?.name}
                        </a>
                      </RepoWrapper.RepoTitle>
                      <RepoWrapper.RepoSize>{repo?.size}</RepoWrapper.RepoSize>
                    </tr>
                  ))}
                </tbody>
              </RepoWrapper.Table>
            </>
          ) : (
            <NotFound text="repositories" />
          )}
        </RepoWrapper.Card>
      )}
    </RepoWrapper>
  );
}
