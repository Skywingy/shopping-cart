import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export default function Nav() {
    return (
        <nav className='Nav'>
            <h3>
                <StyleLink to='/home'>Logo</StyleLink>
            </h3>
            <ul className='nav-links'>
                <li>
                    <StyleLink to='/about'>About</StyleLink>
                </li>
                <li>
                    <StyleLink to='/product'>Products</StyleLink>
                </li>
                <li>
                    <StyleLink to='/cart'>Cart</StyleLink>
                </li>
            </ul>
        </nav>
    )
}

const StyleLink = styled(Link)`
    text-decoration: inherit;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: inherit;
        color: inherit;
    }
`;