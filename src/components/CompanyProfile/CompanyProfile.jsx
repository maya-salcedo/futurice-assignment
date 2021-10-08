import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserWrapper from './Styles';
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
    <UserWrapper>
      {isError && <ErrorContainer />}
      {isLoading ? (
        <LoadingContainer />
      ) : (
        <CardWrapper.Box>
          <CardWrapper.Title>Name: {company?.name}</CardWrapper.Title>
          <img src={company?.avatar_url} alt={company?.login} />

          <CardWrapper.Text>
            Description: {company?.description}
            <br />
            GitHub: {company?.html_url} <br />
            Public repositories: {company?.public_repos}
          </CardWrapper.Text>
          <CardWrapper.Text>
            Website: {company?.blog}
            <br />
          </CardWrapper.Text>
          {members?.map((member) => {
            return (
              <div key={member.id}>
                <p>{member.login} </p>
                <img src={member.avatar_url} alt={member.login} />
              </div>
            );
          })}
          <CardWrapper.Text></CardWrapper.Text>
        </CardWrapper.Box>
      )}
      <Link to="/">Go back</Link>
    </UserWrapper>
  );
}
