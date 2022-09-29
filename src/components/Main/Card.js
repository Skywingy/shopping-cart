import React from 'react'

export default function Card({Cardie}) {
    const mystyle = {
        display: 'inline-block'
    }
    return (
        <div className='Card'>
            <img src={Cardie.image} alt={Cardie.title}/>
            <br></br>
            <h2 style={mystyle}>{Cardie.title}</h2>&nbsp;&nbsp;&nbsp;<h5 style={mystyle}>{Cardie.year}</h5>
            <h5>genre {Cardie.genre}</h5>
            <h5>quote '{Cardie.quote}'</h5>
        </div>
    )
}
