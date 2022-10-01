import React from 'react';
import styled from 'styled-components';

export default function Cart() {
    return (
        <div className='Cartin'>
        <CartWrapper className='Cart'>
            Cart Page
        </CartWrapper>
        </div>
    )
}

const CartWrapper = styled.div`
    border: 1px white solid;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 10px;
    padding: 1rem;
    width: 350px;
    min-height: 80vh;
    background: white;
`