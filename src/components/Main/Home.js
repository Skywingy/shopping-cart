import React from 'react';
import styled from 'styled-components';
import ba from '../../assets/ba.jpeg'
export default function Home() {
    return (
        <CartWrapper className='HomePage'>
            <Title>The Studio Ghibli Prints</Title>
            <Quote>"Just follow your heart and keep smiling"</Quote>
            <Link href='/product' className='tracking-out-expand'>visit the shop</Link>
        </CartWrapper>
    )
}

const CartWrapper = styled.div`
    border: 1px white solid;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 10px;
    padding: 1rem;
    width: 100%;
    min-height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
const Quote = styled.p`
font-family: 'Fira Sans', sans-serif;
text-transform: uppercase;
font-size: 1.3rem;
padding-bottom: 9rem;
color: white;
`

const Link = styled.a`
font-family: 'Fira Sans', sans-serif;
text-transform: uppercase;
font-weight:600;
font-size: 1.5rem;
text-decoration: inherit;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: inherit;
        color: snow;
`
const Title = styled.p`
font-family: 'Fira Sans', sans-serif;
text-transform: uppercase;
font-size: 3rem;
padding-bottom: 0.5rem;
font-weight: bold;
color: snow;
`