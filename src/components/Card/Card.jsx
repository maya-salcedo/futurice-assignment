import React, { useState } from 'react';
import axios from 'axios';

import { ButtonLink } from '../Button/Button';
import CardWrapper from './Styles';
import { LoadingContainer } from '../Loading/Loading';
import { ErrorContainer } from '../Error/Error';

export function Card() {
  const [userInput, setUserInput] = useState('futurice');
  const [company, setCompany] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.github.com/orgs/${userInput}/repos`
      );
      setCompany(data);
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
            <input placeholder={userInput} onChange={handleSearch} />
            <button onClick={handleSubmit}>Search</button>
            <CardWrapper.Avatar
            // src={`https://avatars.dicebear.com/api/initials/${user.name}.svg`}
            />
            {/* {console.log(company)} */}
            <CardWrapper.Name></CardWrapper.Name>
            <CardWrapper.UserName></CardWrapper.UserName>
            <CardWrapper.Website href="#"></CardWrapper.Website>
            <ButtonLink companyName={userInput} />
          </CardWrapper.Card>
        </>
      )}
    </CardWrapper>
  );
}
