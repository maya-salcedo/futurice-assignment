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
  padding: 2rem 1rem 1rem;

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

const Avatar = styled.div`
  margin-top: 2rem;
  text-align: center;
  > img {
    max-width: 8rem;
  }
`;

const Title = styled.h1`
  font-size: 1.4rem;

  @media (min-width: 478px) {
    font-size: 1.6rem;
  }
`;

const Text = styled.p`
  line-height: 130%;
  letter-spacing: 0.01em;
`;

const Link = styled.a`
  text-decoration: none;
  color: #3d56b2;

  &:hover {
    text-decoration: underline;
  }
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

HomeWrapper.Avatar = function HomeWrapperAvatar({ src, alt }) {
  return (
    <Avatar>
      <img src={src} alt={alt} />
    </Avatar>
  );
};

HomeWrapper.Title = function HomeWrapperTitle({ children }) {
  return <Title>{children}</Title>;
};

HomeWrapper.Link = function HomeWrapperLink({ href, children }) {
  return (
    <Link href={href} target="_blank" rel="noreferrer">
      {children}
    </Link>
  );
};

HomeWrapper.Text = function HomeWrapperText({ children }) {
  return <Text>{children}</Text>;
};
