import React from 'react';
import styled from 'styled-components';

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

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #3d56b2;
  text-align: center;
  padding-top: 0;
  margin-top: 0.5rem;
  text-transform: capitalize;

  @media (min-width: 434px) {
    font-size: 4rem;
  }
`;

const Text = styled.p``;

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

export default function RepoWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

RepoWrapper.Card = function RepoWrapperCard({ children }) {
  return <Card>{children}</Card>;
};

RepoWrapper.Name = function RepoWrapperName({ children }) {
  return <Name>{children}</Name>;
};

RepoWrapper.Text = function RepoWrapperText({ children }) {
  return <Text>{children}</Text>;
};

RepoWrapper.Table = function RepoWrapperTable({ children }) {
  return <Table>{children}</Table>;
};

RepoWrapper.RepoHeading = function RepoWrapperRepoHeading({ children }) {
  return <RepoHeading>{children}</RepoHeading>;
};

RepoWrapper.SizeHeading = function RepoWrapperSizeHeading({ children }) {
  return <SizeHeading>{children}</SizeHeading>;
};

RepoWrapper.RepoTitle = function RepoWrapperRepoTitle({ children }) {
  return <RepoTitle>{children}</RepoTitle>;
};

RepoWrapper.RepoSize = function RepoWrapperRepoSize({ children }) {
  return <RepoSize>{children}</RepoSize>;
};
