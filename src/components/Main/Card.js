import React from 'react';
import styled from 'styled-components';

export default function Card({Cardie}) {
    const mystyle = {
        padding: '0 1.2rem 0 1.2rem'
    }
    return (
        
        <CardWrapper className='Card'>
            <Image src={Cardie.image} alt={Cardie.title}/>
            <br></br>
            <h2 style={mystyle} className='title'>{Cardie.title}</h2>
            <p className='quote'> {Cardie.quote}</p>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: #414241;
    background-color: snow;
    width: 20vw;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 10px;
    transition: transform 0.3s;
    cursor: pointer;
    &:hover {
    transform: scale(1.05);
    
}
`

const Image = styled.img`
    padding: 1.2rem;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
`