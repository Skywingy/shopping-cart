import React from 'react';
import fab from '../../assets/fab.png';
import tw from '../../assets/tw.png';
import git from '../../assets/git.png';
import inta from '../../assets/inta.png';
import ln from '../../assets/in.png';
import styled from 'styled-components';

export default function Contact() {
  return (
    <ConPage className='ContactPage'>
      <Icons className='icons'>
      <a href='https://github.com/Skywingy'><img src={git} alt='fb' width='100px' height='100px'/></a>
      <a href='https://www.youtube.com/watch?v=4A4PlXD560w'><img src={fab} alt='fb' width='100px' height='100px'/></a>
      <a href='https://www.youtube.com/watch?v=4A4PlXD560w'><img src={inta} alt='fb' width='100px' height='100px'/></a>
      <a href='https://www.youtube.com/watch?v=4A4PlXD560w'><img src={tw} alt='fb' width='100px' height='100px'/></a>
      <a href='https://www.youtube.com/watch?v=4A4PlXD560w'><img src={ln} alt='fb' width='100px' height='100px'/></a>
      </Icons>
      <p>Annapurna Base Camp Trek, Ghandruk 33700, Nepal</p>
    </ConPage>
  )
}

const ConPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Fira Sans', sans-serif;
font-weight: 700;
font-size: 2.5rem;
background: white;
padding: 10rem;
box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 10px;
`



const Icons = styled.div`
display: flex;
gap: 5rem;
padding-bottom: 8rem;
padding-top: 3rem;
`
