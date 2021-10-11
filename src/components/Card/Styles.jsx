import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 3rem 1rem;
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 30rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 0.2rem;
  padding: 2rem 1rem;
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
  font-size: 1.125rem;
  line-height: 152%;
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
  }
`;

const Name = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #3d56b2;

  > p {
    font-size: 0.8rem;
    color: #595260;
    font-style: italic;
    margin: 0;
    text-align: center;
  }
  @media (max-width: 434px) {
    font-size: 1.2rem;
  }

  @media (max-width: 374px) {
    font-size: 1.1rem;
  }
`;
// border-bottom: 0.05rem solid #c8c6c6;
// size: color: #595260;
const Table = styled.table`
  text-align: center;
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
    color: #24292f;
    display: inline-block;

    &:hover {
      text-decoration: underline;
      color: #3d56b2;
    }
  }
`;

const RepoSize = styled.td`
  text-align: right;
`;

export default function CardWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

CardWrapper.Card = function CardWrapperCard({ children }) {
  return <Card>{children}</Card>;
};

CardWrapper.Search = function CardWrapperSearch({ children }) {
  return <Search>{children}</Search>;
};

CardWrapper.SearchInput = function CardWrapperSearchInput({ ...restProps }) {
  return <SearchInput {...restProps} />;
};

CardWrapper.SearchButton = function CardWrapperSearchButton({ onClick }) {
  return (
    <SearchButton onClick={onClick}>
      <FontAwesomeIcon icon={faSearch} className="icon"></FontAwesomeIcon>
    </SearchButton>
  );
};

CardWrapper.Name = function CardWrapperName({ children }) {
  return <Name>{children}</Name>;
};

CardWrapper.Table = function CardWrapperTable({ children }) {
  return <Table>{children}</Table>;
};

CardWrapper.RepoHeading = function CardWrapperRepoHeading({ children }) {
  return <RepoHeading>{children}</RepoHeading>;
};

CardWrapper.SizeHeading = function CardWrapperSizeHeading({ children }) {
  return <SizeHeading>{children}</SizeHeading>;
};

CardWrapper.RepoTitle = function CardWrapperRepoTitle({ children }) {
  return <RepoTitle>{children}</RepoTitle>;
};

CardWrapper.RepoSize = function CardWrapperRepoSize({ children }) {
  return <RepoSize>{children}</RepoSize>;
};
