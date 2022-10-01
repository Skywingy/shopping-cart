import React from 'react';
import styled from 'styled-components';

export default function Cart() {
    return (
        <CartWrapper className='Cart'>
            Cart Page
        </CartWrapper>
    )
}

const CartWrapper = styled.div`
    border: 1px white solid;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 10px;
    padding: 1rem;
    background: white;
`