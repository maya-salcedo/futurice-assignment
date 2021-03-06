import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MembersWrapper from './Styles';
import { ErrorContainer } from '../Error/Error';
import { LoadingContainer } from '../Loading/Loading';
import RepoWrapper from '../Repo/Styles';
import NotFound from '../NotFound/NotFound';
import Button from '../../elements/Button';

export default function Members() {
  const { org_name } = useParams();
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.github.com/orgs/${org_name}/public_members`
      );

      setMembers(data);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      console.error(`Error at Members: ${err}`);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <MembersWrapper>
      {isError && <ErrorContainer />}
      {isLoading ? (
        <LoadingContainer />
      ) : (
        <MembersWrapper.Box>
          <RepoWrapper.Name>{org_name}</RepoWrapper.Name>
          <Button>
            <Button.Link to="/">Company</Button.Link>
            <Button.Link to={{ pathname: `/${org_name}/repos` }}>
              Repos
            </Button.Link>
          </Button>
          <MembersWrapper.TitleSmall>Public Members</MembersWrapper.TitleSmall>
          {members?.length > 0 ? (
            members?.map((member) => {
              return (
                <MembersWrapper.MembersList key={member?.id}>
                  <MembersWrapper.Link href={member?.html_url}>
                    {member?.login}
                  </MembersWrapper.Link>
                  <img src={member.avatar_url} alt={member?.login} />
                </MembersWrapper.MembersList>
              );
            })
          ) : (
            <NotFound text="members" />
          )}
        </MembersWrapper.Box>
      )}
    </MembersWrapper>
  );
}
