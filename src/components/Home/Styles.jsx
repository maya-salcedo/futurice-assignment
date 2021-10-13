import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: start;
  align-items: auto;
  align-content: center;
  margin-top: 3rem;
  padding: 3rem 1rem;
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 98%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 0.2rem;
  padding: 2rem 1rem 2.5rem;

  @media (min-width: 550px) {
    width: 30rem;
  }
`;

const Search = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 0.5rem;
  color: #24292f;
  border: 1px solid #24292f;
  border-radius: 0.2rem;
  margin-top: 1rem;
`;

const SearchInput = styled.input`
  position: relative;
  font-size: 1rem;
  line-height: 130%;
  background-image: none;
  box-shadow: none;
  font-weight: 400;
  background-color: #fff;
  font-family: inherit;
  border: none;
  outline: none;
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  .icon {
    font-size: 1.2rem;
    color: #595260;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;

const TextSmall = styled.p`
  margin: 0.1rem 0;
  font-size: 0.7rem;
  color: #595260;
  font-style: italic;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #3d56b2;
  text-align: center;
  padding-top: 0;
  margin-top: 0.5rem;

  @media (min-width: 434px) {
    font-size: 4rem;
  }
`;

const Table = styled.table`
  text-align: center;
  margin-top: 1rem;
  padding: 0.5rem;
  border-collapse: collapse;

  & tr {
    border-bottom: 0.05rem solid #c8c6c6;
    line-height: 2rem;
  }

  & tr:last-of-type {
    border-bottom: none;
  }
`;

const RepoHeading = styled.th`
  text-align: left;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const SizeHeading = styled.th`
  text-align: right;
`;

const RepoTitle = styled.td`
  text-align: left;
  padding-left: 1rem;
  padding-right: 1rem;
  > a {
    text-decoration: none;
    color: #3d56b2;
    display: inline-block;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const RepoSize = styled.td`
  text-align: right;
  color: #595260;
  font-style: italic;
  font-size: 0.8rem;
`;

export default function HomeWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

HomeWrapper.Card = function HomeWrapperCard({ children }) {
  return <Card>{children}</Card>;
};

HomeWrapper.Search = function HomeWrapperSearch({ children }) {
  return <Search>{children}</Search>;
};

HomeWrapper.SearchInput = function HomeWrapperSearchInput({ ...restProps }) {
  return <SearchInput {...restProps} autoFocus />;
};

HomeWrapper.SearchButton = function HomeWrapperSearchButton({ onClick }) {
  return (
    <SearchButton onClick={onClick}>
      <FontAwesomeIcon icon={faSearch} className="icon"></FontAwesomeIcon>
    </SearchButton>
  );
};

HomeWrapper.TextSmall = function HomeWrapperTextSmall({ children }) {
  return <TextSmall>{children}</TextSmall>;
};

HomeWrapper.Name = function HomeWrapperName({ children }) {
  return <Name>{children}</Name>;
};

HomeWrapper.Table = function HomeWrapperTable({ children }) {
  return <Table>{children}</Table>;
};

HomeWrapper.RepoHeading = function HomeWrapperRepoHeading({ children }) {
  return <RepoHeading>{children}</RepoHeading>;
};

HomeWrapper.SizeHeading = function HomeWrapperSizeHeading({ children }) {
  return <SizeHeading>{children}</SizeHeading>;
};

HomeWrapper.RepoTitle = function HomeWrapperRepoTitle({ children }) {
  return <RepoTitle>{children}</RepoTitle>;
};

HomeWrapper.RepoSize = function HomeWrapperRepoSize({ children }) {
  return <RepoSize>{children}</RepoSize>;
};
