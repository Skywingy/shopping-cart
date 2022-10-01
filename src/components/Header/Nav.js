import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/studio-ghibli-logo.svg';


export default function Nav() {
    return (
        <nav className='Nav'>
            <h3>
                <StyleLink to='/home'><img src={logo} alt='fb' width='200px' height='100px'/></StyleLink>
            </h3>
            <ul className='nav-links'>
                <li>
                    <StyleLink to='/product' className='slide'>Products<i>></i></StyleLink>
                </li>
                <li>
                    <StyleLink to='/cart' className='slide'>Cart<i>></i></StyleLink>
                </li>
                <li>
                    <StyleLink  to='/contact' className='slide'>Contact<i>></i></StyleLink>
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
    font-family: 'Fira Sans', sans-serif;
`;