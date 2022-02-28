import React from 'react';
import styled from 'styled-components';
import ListItem from './common/ListItem';


const items = [
    {
        id: 0,
        title: 'Payment Cards',
        text: 'Get an international Visa or MasterСard bank card to conveniently withdraw funds from your Weezzo e-wallet.',
        img: '/img/card.png',
    },
    {
        id: 1,
        title: 'Cash Transfers',
        text: 'A perfect option to fund your e-wallet or send money quickly and securely without opening a bank account. Available worldwide.',
        img: '/img/send.png',
    },
    {
        id: 2,
        title: 'Digital Wallet',
        text: 'E-wallet is your all-in-one tool in the world of online payments. Buy online, receive money, pay membership fees, etc. ',
        img: '/img/money.png',
    },
    {
        id: 3,
        title: 'Promotions ',
        text: 'Using Epayzz pays off! Take advantage of special offers and get bargains, discounts, and gifts from our partners.',
        img: '/img/currency.png',
    },
];

const Container = styled.div`
    display: grid;
    padding-top:75px;
    grid-template-areas: "title photo" "content photo";
    background: radial-gradient(49.98% 385.78% at 50.02% 49.94%, #FFFFFF 0%, rgba(251, 250, 250, 0.47) 64.9%, rgba(196, 196, 196, 0) 100%);
    @media (max-width: 1150px) {
        grid-template-areas: "title" "photo" "content";
  }
`
export const Title = styled.h1`
    grid-area: title;
    text-align: end;
    font-size: 36px;
    margin-bottom:45px;
    @media (max-width: 1150px) {
       text-align: center;
       margin-bottom:50px;
  };
  @media (max-width: 500px) {
       font-size: 20px;
}
`;
export const Content = styled.div`
    grid-area: content;
    display: flex;
  flex-direction: column;
  align-items: end;
  
  @media (max-width: 1150px) {
    margin-bottom:100px;
  }
`;
const ImageContainer = styled.div`
    grid-area: photo;
    padding-left: 100px;
    @media (max-width: 1150px) {
       padding: 0;
       display: flex;
    justify-content: center;
        margin-bottom:100px;
}
`;
export const Image = styled.img`
    object-fit: contain;
  height: 100%;
  @media (max-width: 500px) {
       width: 100%;
}
`;

export default function PersonalServices() {
    return (
        <Container>
            <Title>
                Personal Services
            </Title>

            <ImageContainer>
                <Image src='/img/man0.png' alt='man' />
            </ImageContainer>
            <Content>
                {
                    items.map((item) => (<ListItem key={item.id} {...item} reverse={true} />))
                }
            </Content>
        </Container>
    )
}
