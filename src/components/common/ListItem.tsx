import React from 'react';
import styled from 'styled-components';

interface ReverseProps {
    reverse: boolean;
}

interface IListItemProps {
    text: string;
    title: string;
    img: string;
    reverse: boolean;
}

const Container = styled.div<ReverseProps>`
    display: flex;
    width: 600px;
    margin-bottom:42px;
    align-items: center;
    @media (max-width: 1150px){
        align-self: center;
        width: 100%;
        flex-direction: ${({ reverse }) => reverse ? 'column-reverse' : 'column'};
    }
`;

const ListItemTextContainer = styled.div<ReverseProps>`
        text-align: ${({ reverse }) => reverse ? 'right' : 'left'};
        font-size: 10px;
        @media (max-width: 1150px){
        text-align: center;
    }
`;

const Title = styled.h2`
    font-size: 18px;
    margin-bottom: 17px;
    @media (max-width: 500px) {
       font-size: 12px;
}
`;

const ImageContainer = styled.div<ReverseProps>`
    margin: ${({ reverse }) => reverse ? '0  0 0 42px' : '0 42px 0 0 '};
    @media (max-width: 1150px){
        margin:0;
    }
`;

export default function ListItem(props: IListItemProps) {

    return (<Container reverse={props.reverse}>
        {
            !props.reverse &&
            <ImageContainer reverse={props.reverse}><img src={props.img} alt='icon' /></ImageContainer>
        }
        <ListItemTextContainer reverse={props.reverse}>
            <Title>{props.title}</Title>
            <p>{props.text}</p>
        </ListItemTextContainer>
        {props.reverse &&
            <ImageContainer reverse={props.reverse}><img src={props.img} alt='icon' /></ImageContainer>
        }
    </Container>
    )
}
