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

const Avatar = styled.div`
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

export default function ProfileWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

ProfileWrapper.Box = function ProfileWrapperBox({ children }) {
  return <Box>{children}</Box>;
};

ProfileWrapper.Avatar = function ProfileWrapperAvatar({ src, alt }) {
  return (
    <Avatar>
      <img src={src} alt={alt} />
    </Avatar>
  );
};

ProfileWrapper.Title = function ProfileWrapperTitle({ children }) {
  return <Title>{children}</Title>;
};

ProfileWrapper.Link = function ProfileWrapperLink({ href, children }) {
  return (
    <Link href={href} target="_blank" rel="noreferrer">
      {children}
    </Link>
  );
};

ProfileWrapper.Text = function ProfileWrapperText({ children }) {
  return <Text>{children}</Text>;
};

ProfileWrapper.TitleSmall = function ProfileWrapperTitleSmall({ children }) {
  return <TitleSmall>{children}</TitleSmall>;
};

ProfileWrapper.MembersList = function ProfileWrapperMembersList({ children }) {
  return <MembersList>{children}</MembersList>;
};
