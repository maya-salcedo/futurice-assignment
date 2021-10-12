import React from 'react';
import styled from 'styled-components';
import CardWrapper from '../Card/Styles';

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
  > img {
    max-width: 4rem;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;

  @media (max-width: 590px) {
    font-size: 1.5rem;
  }

  @media (max-width: 478px) {
    font-size: 1.1rem;
  }
`;

const Text = styled.p`
  line-height: 130%;
  letter-spacing: 0.01em;
`;

const MembersList = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 35rem;
  padding: 1rem;
  > p {
    font-size: 1.3rem;

    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }

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

CardWrapper.Box = function UserWrapperBox({ children }) {
  return <Box>{children}</Box>;
};

CardWrapper.Avatar = function UserWrapperAvatar({ src, alt }) {
  return (
    <Avatar>
      <img src={src} alt={alt} />
    </Avatar>
  );
};

CardWrapper.Title = function UserWrapperTitle({ children }) {
  return <Title>{children}</Title>;
};

CardWrapper.Text = function UserWrapperText({ children }) {
  return <Text>{children}</Text>;
};

CardWrapper.MembersList = function UserWrapperMembersList({ children }) {
  return <MembersList>{children}</MembersList>;
};
