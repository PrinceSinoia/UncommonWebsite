import React, { useState } from 'react';
import styled from 'styled-components';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <HeaderContainer>
      <h1>My Website</h1>
      <BurgerButton className='burger' onClick={()=> setMenuOpen(!menuOpen)} menuOpen={menuOpen}>
        <span />
        <span />
        <span />
      </BurgerButton>
      {console.log(menuOpen)}
      <Menu className='Menu' menuOpen={menuOpen}>
        <ul>
          <li>
            <a href='#home' >
              Home
            </a>
          </li>
          <li>
            <a href='#about' >
              About
            </a>
          </li>
          <li>
            <a href='#contact'>
              Contact
            </a>
          </li>
        </ul>
      </Menu>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
z-index: 1;
position:absolute;
top:0;
width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f2f2f2;

  h1 {

    color: green;
    font-size: 1.5rem;
    margin: 0;
  }
`;

const BurgerButton = styled.button`
border:none;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  span {
    width: 30px;
    height: 2px;
    background-color: red;
    margin-bottom: 5px;
    transition: transform 0.3s ease-in-out;
    transform-origin: 1px;
  }

  span:first-child {
    transform: ${({ menuOpen }) =>
      menuOpen ? 'rotate(45deg) translate(2px, 1px)' : 'rotate(0)'};
  }

  span:nth-child(2) {
    opacity: ${({ menuOpen }) => (menuOpen ? '0' : '1')};
    transform: ${({ menuOpen }) =>
      menuOpen ? 'translateX(20px)' : 'translateX(0)'};
  }

  span:last-child {
    transform: ${({ menuOpen }) =>
      menuOpen ? 'rotate(-45deg) translate(1px, -1px)' : 'rotate(0)'};
  }


  @media (min-width: 769px) {
    display: none;
  }
`;

const Menu = styled.div`
z-index:2;
  position: fixed;
  top: 62px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul li {
    padding: 5px;
    opacity: 0;
    transform: translateX(-100%);
    animation: slideIn 0.5s forwards;
    animation-delay: 0.3s;
  }

  @keyframes slideIn {
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (min-width: 769px) {
    display: block;
    ul li {
      display: flex;
      flex-direction: row;
      padding: 5px;
      opacity: 1;
      transform: translateX(0);
      animation: none;
    }
  }
  @media (min-width: 992px){
    position: fixed;
  top: 80px;
    width: 100%;
  height: 10%;
    background:red;
    display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'block')};
  flex-direction: row;
  justify-content: center;
  align-items: center; 
  }


  ul  {
    color :green;
    display:flex;
    flex-direction:row
  } 
  ul li a {
    color :green;
    display:flex
  } 
`;

export default Header;


