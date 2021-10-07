import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 2rem 1rem;
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 16rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 0.2rem;
  padding: 2rem 1rem;
  margin: 1rem;
`;

const Avatar = styled.img`
  width: 5rem;
  border-radius: 50%;
`;

const Name = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 377px) {
    font-size: 1.2rem;
  }
`;

const UserName = styled.p`
  font-size: 0.8rem;
  color: #787a91;
  font-style: italic;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Website = styled.a`
  padding-bottom: 1rem;
`;

export default function CardWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

CardWrapper.Card = function CardWrapperCard({ children }) {
  return <Card>{children}</Card>;
};

CardWrapper.Avatar = function CardWrapperAvatar({ src }) {
  return <Avatar src={src} alt="avatar" />;
};

CardWrapper.Name = function CardWrapperName({ children }) {
  return <Name>{children}</Name>;
};

CardWrapper.UserName = function CardWrapperUserName({ children }) {
  return <UserName>{children}</UserName>;
};

CardWrapper.Website = function CardWrapperWebsite({ children, href }) {
  return <Website href={href}>{children}</Website>;
};
