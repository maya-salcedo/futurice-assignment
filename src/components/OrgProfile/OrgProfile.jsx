import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProfileWrapper from './Styles';
import Link from '../../elements/Button/Styles';
import { ErrorContainer } from '../Error/Error';
import { LoadingContainer } from '../Loading/Loading';

export function OrgProfile() {
  const { org_name } = useParams();
  const [org, setOrg] = useState();
  const [members, setMembers] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const { data: org } = await axios.get(
        `https://api.github.com/orgs/${org_name}`
      );
      const { data: members } = await axios.get(
        `https://api.github.com/orgs/${org_name}/public_members`
      );
      setOrg(org);
      setMembers(members);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      console.error(`Error at orgProfile: ${err}`);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <ProfileWrapper>
      {isError && <ErrorContainer />}
      {isLoading ? (
        <LoadingContainer />
      ) : (
        <ProfileWrapper.Box>
          <ProfileWrapper.Avatar src={org?.avatar_url} alt={org?.login} />
          <ProfileWrapper.Title>{org?.name}</ProfileWrapper.Title>
          <ProfileWrapper.Text>
            <strong>Description: </strong> {org?.description}
            <br />
            <strong>GitHub: </strong>
            <ProfileWrapper.Link href={org?.html_url}>
              {org?.html_url}
            </ProfileWrapper.Link>
            <br />
            <strong>Public repositories: </strong> {org?.public_repos} <br />
            <strong>Website: </strong>
            <ProfileWrapper.Link href={org?.blog}>
              {org?.blog}
            </ProfileWrapper.Link>
          </ProfileWrapper.Text>
          <ProfileWrapper.TitleSmall>Public Members</ProfileWrapper.TitleSmall>
          {members?.map((member) => {
            return (
              <ProfileWrapper.MembersList key={member?.id}>
                <ProfileWrapper.Link href={member?.html_url}>
                  {member?.login}
                </ProfileWrapper.Link>
                <img src={member.avatar_url} alt={member?.login} />
              </ProfileWrapper.MembersList>
            );
          })}
          <ProfileWrapper.Text></ProfileWrapper.Text>
        </ProfileWrapper.Box>
      )}
      <Link to="/">GO BACK</Link>
    </ProfileWrapper>
  );
}
