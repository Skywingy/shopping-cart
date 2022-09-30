import React from 'react';
import Card from './Card';
import styled from 'styled-components';

export default function CardsGrid({CardList}) {
    const CardL = CardList?.map((Cardie) => {
        return <Card className="Card" key={Cardie.title} Cardie={Cardie} />
    })

    return (
        
            <CardsGridWrapper className='CardsGrid'>  
                {CardL}
            </CardsGridWrapper>
    )
}

const CardsGridWrapper = styled.div`
    border: 1px white solid;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 10px;
    padding: 1rem;
    background: white;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    @media (max-width: 915px) {
    grid-template-columns: repeat(1, 1fr);
}
    @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
    }
`
