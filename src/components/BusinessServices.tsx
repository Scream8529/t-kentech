import React from 'react';
import styled from 'styled-components';
import ListItem from './common/ListItem';
import { Image } from './PersonalServices'

const items = [
    {
        id: 0,
        title: 'Accepting Payments',
        text: 'Increase your sales by offering dozens of international and local payment options, manage recurring payments, etc.',
        img: '/img/cart.png',
    },
    {
        id: 1,
        title: 'Global Payouts',
        text: 'Payouts are made simple for organizations and their members. Send payments conveniently around the globe.',
        img: '/img/person.png',
    },
    {
        id: 2,
        title: 'Digital Wallet',
        text: 'Manage your business tasks with ease and precision: send and receive funds, manage subscriptions, request payments, etc.',
        img: '/img/money.png',
    },
    {
        id: 3,
        title: 'Multi-Currency Account',
        text: 'Accept payments by bank transfer, withdraw money to your bank account, and instantly convert national currencies.',
        img: '/img/currency.png',
    },
];

const Container = styled.div`
    display: grid;
    grid-template-areas: "photo title" "photo content";
    background-color: #e4e4e4;
    padding-top:50px;
    @media (max-width: 1150px) {
        grid-template-areas: "title" "photo" "content";
  }
`
const Title = styled.h1`
    grid-area: title;
    font-size: 36px;
    @media (max-width: 1150px) {
       text-align: center;
       margin-bottom:50px;
  };
  @media (max-width: 500px) {
       font-size: 20px;
}
`;

const Content = styled.div`
    grid-area: content;
    @media (max-width: 1150px) {
    margin-bottom:100px;
  }
`;

const ImageContainer = styled.div`
    grid-area: photo;
    display: flex;
    justify-content: end;
    padding-right: 100px;
    @media (max-width: 1150px) {
       padding: 0;
       display: flex;
        justify-content: center;
        margin-bottom:100px;
}
`;

export default function BusinessServices() {
    return (
        <Container>
            <Title>
                Business Services
            </Title>

            <ImageContainer>
                <Image src='/img/man1.png' alt='man' />
            </ImageContainer>
            <Content>
                {
                    items.map((item) => (<ListItem key={item.id} {...item} reverse={false} />))
                }
            </Content>
        </Container>
    )
}
