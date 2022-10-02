import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import words from '../../assets/words.png'


export default function Nav() {
    return (
        <Navy className='Nav'>
            <Title>
                <StyleLink to='/home'><img src={words} alt='fb' width='200px' height='65px'/></StyleLink>
            </Title>
            <ul className='nav-links'>
                <li>
                    <StyleLink to='/product' className='slide'>Products</StyleLink>
                </li>
                <li>
                    <StyleLink to='/cart' className='slide'>Cart</StyleLink>
                </li>
                <li>
                    <StyleLink  to='/contact' className='slide'>Contact</StyleLink>
                </li>
            </ul>
        </Navy>
    )
}
const StyleLink = styled(Link)`
    text-decoration: inherit;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: inherit;
        color: inherit;
    }
    font-family: 'Fira Sans', sans-serif;
`;


const Navy = styled.nav`
display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 1.5rem;
    background-color: var(--deep-black);
    & > ul {
        display: flex;
        align-items: center;
        & > li a {
        font-family: "IBM Plex Mono", monospace;
        font-size: 20px;
        color: var(--white);
        text-transform: uppercase;
        text-decoration: none;
        transition: 0.5s;
        &:hover {
            letter-spacing: 6px;
        }
        &:active {
            color: var(--black);
        }
    }
    & > li:not(:first-child) a {
        padding-left: 1rem;
    }
}
@media (max-width: 630px) {
    justify-content: center;
}
`

const Title = styled.h3`
@media (max-width: 630px) {
    display: none;
}
`