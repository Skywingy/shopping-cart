import React from 'react';
import Card from './Card';

export default function CardsGrid({CardList}) {
    const CardL = CardList?.map((Cardie) => {
        return <Card className="Card" key={Cardie.title} Cardie={Cardie} />
    })

    return (
        <div className='CardsGrid'>  
            {CardL}
        </div>
    )
}
