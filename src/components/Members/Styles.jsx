import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 3rem 1rem;
  margin-top: 3rem;
`;

const Box = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 0.2rem;
  padding: 2rem 2rem;
  width: 30rem;

  @media (max-width: 604px) {
    width: 25rem;
  }

  @media (max-width: 500px) {
    width: 98%;
    padding: 2rem 1rem;
    margin-left: 0;
    margin-right: 0;
  }
`;

const TitleSmall = styled.h1`
  font-size: 1.3rem;
  text-align: center;
  letter-spacing: 0.03em;
  padding-top: 1rem;
  font-style: italic;
`;

const MembersList = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 35rem;
  padding: 1rem;

  > img {
    max-width: 8rem;

    @media (max-width: 500px) {
      width: 4rem;
    }
  }

  @media (max-width: 500px) {
    padding: 1rem 0;
    width: 95%;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #3d56b2;
  &:hover {
    text-decoration: underline;
  }
`;

export default function MembersWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

MembersWrapper.Box = function MembersWrapperBox({ children }) {
  return <Box>{children}</Box>;
};

MembersWrapper.TitleSmall = function MembersWrapperTitleSmall({ children }) {
  return <TitleSmall>{children}</TitleSmall>;
};

MembersWrapper.MembersList = function MembersWrapperMembersList({ children }) {
  return <MembersList>{children}</MembersList>;
};

MembersWrapper.Link = function MembersWrapperLink({ href, children }) {
  return (
    <Link href={href} target="_blank" rel="noreferrer">
      {children}
    </Link>
  );
};
