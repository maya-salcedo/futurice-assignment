import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProfileWrapper from './Styles';
import CardWrapper from '../Card/Styles';
import Link from '../Button/Styles';
import { ErrorContainer } from '../Error/Error';
import { LoadingContainer } from '../Loading/Loading';

export function CompanyProfile() {
  const { company_name } = useParams();
  const [company, setCompany] = useState();
  const [members, setMembers] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const { data: company } = await axios.get(
        `https://api.github.com/orgs/${company_name}`
      );
      const { data: members } = await axios.get(
        `https://api.github.com/orgs/${company_name}/public_members`
      );
      setCompany(company);
      setMembers(members);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      console.error(`Error at CompanyProfile: ${err}`);
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
        <CardWrapper.Box>
          <CardWrapper.Avatar src={company?.avatar_url} alt={company?.login} />
          <CardWrapper.Title>{company?.name}</CardWrapper.Title>
          <CardWrapper.Text>
            <strong>Description:</strong> {company?.description}
            <br />
            <strong>GitHub:</strong>
            <CardWrapper.Link href={company?.html_url}>
              {company?.html_url}
            </CardWrapper.Link>
            <br />
            <strong>Public repositories:</strong> {company?.public_repos} <br />
            <strong>Website:</strong>
            <CardWrapper.Link href={company?.blog}>
              {company?.blog}
            </CardWrapper.Link>
          </CardWrapper.Text>
          <CardWrapper.TitleSmall>Public Members</CardWrapper.TitleSmall>
          {members?.map((member) => {
            return (
              <CardWrapper.MembersList key={member?.id}>
                <CardWrapper.Link href={member?.html_url}>
                  {member?.login}
                </CardWrapper.Link>
                <img src={member.avatar_url} alt={member?.login} />
              </CardWrapper.MembersList>
            );
          })}
          <CardWrapper.Text></CardWrapper.Text>
        </CardWrapper.Box>
      )}
      <Link to="/">Go back</Link>
    </ProfileWrapper>
  );
}
