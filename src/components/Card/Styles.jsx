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
  align-items: center;
  background-color: #fff;
  padding: 0.5rem;
  color: #24292f;
  border: 1px solid #24292f;
  border-radius: 0.2rem;
`;

const SearchInput = styled.input`
  position: relative;
  font-size: 1.125rem;
  line-height: 152%;
  background-image: none;
  box-shadow: none;
  padding-right: 3rem;
  width: 23rem;
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
    font-size: 1.5rem;
    color: #595260;
  }
`;

const Name = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

  > p {
    font-size: 0.8rem;
    color: #595260;
    font-style: italic;
    margin: 0;
    text-align: center;
  }
  @media (max-width: 377px) {
    font-size: 1.2rem;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: auto;
  width: 28rem;
  border-bottom: 0.05rem solid #c8c6c6;
`;

const Group = styled(ListWrapper)`
  justify-content: start;
  width: auto;
  border-bottom: none;
`;

const Rank = styled.p``;

const RepoName = styled.h2`
  font-size: 1rem;
  padding-left: 1rem;
  padding-top: 0.3rem;
`;

const Size = styled.p`
  color: #595260;
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

CardWrapper.ListWrapper = function CardWrapperListWrapper({ children }) {
  return <ListWrapper>{children}</ListWrapper>;
};

CardWrapper.Group = function CardWrapperGroup({ children }) {
  return <Group>{children}</Group>;
};

CardWrapper.Rank = function CardWrapperRank({ children }) {
  return <Rank>{children}</Rank>;
};

CardWrapper.RepoName = function CardWrapperRepoName({ children }) {
  return <RepoName>{children}</RepoName>;
};

CardWrapper.Size = function CardWrapperSize({ children }) {
  return <Size>{children}</Size>;
};
